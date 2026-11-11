// 确定性规则：shared/rules.py 的扩展版（覆盖售后、退换货、物流、QA）。
// 输入：L3 抽取出的 facts；输出：决策列表。模型不参与任何业务结论。
import { TODAY, POLICY, PRODUCTS, ORDERS, lookupChannelOrders } from "./data.js";

const DAY = 86400000;
const d = (s) => new Date(s + "T00:00:00Z");
export const daysBetween = (a, b) => Math.round((d(b) - d(a)) / DAY);

export function businessDaysBetween(a, b) {
  let n = 0;
  for (let t = d(a).getTime() + DAY; t <= d(b).getTime(); t += DAY) {
    const wd = new Date(t).getUTCDay();
    if (wd !== 0 && wd !== 6) n++;
  }
  return n;
}

export const DECISIONS = [
  "RESHIP_PARTS", "OFFER_PARTS_OR_PARTIAL_REFUND", "OFFER_REPLACEMENT_OR_REFUND", "HANDOFF",
  "WARRANTY_PARTS", "OUT_OF_WARRANTY", "RETURN_ALLOWED", "DECLINE_RETURN", "EXCHANGE",
  "ANSWER_QA", "QA_UNKNOWN", "SHIPPING_DELAY_ESCALATE", "CARRIER_INVESTIGATION", "WAIT_48H",
  "PROVIDE_ETA", "ADDRESS_CHANGE_OK", "ADDRESS_CHANGE_DENIED", "ASK_INFO", "QUALITY_ESCALATION",
];

export const ANIMAL_SAFETY_NOTICE = "For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.";

export const INTENT_TYPES = [
  "DAMAGE", "MISSING_PARTS", "DEFECT_WARRANTY", "RETURN", "EXCHANGE",
  "PRODUCT_QA", "SHIPPING_STATUS", "NOT_RECEIVED", "ADDRESS_CHANGE", "OTHER",
];

const out = (intent, decision, extra = {}) => ({ intent: intent.type, order_id: intent.order_id || null, decision, ...extra });

// 订单解析：先用邮件里写的订单号；没有则按渠道（平台 + 买家 + 商品号）关联，取最新一单。
function resolveOrder(it, ctx) {
  const written = it.order_id ? String(it.order_id).toUpperCase() : null;
  if (written && ORDERS[written]) return { id: written, order: ORDERS[written], history: [] };
  const linked = lookupChannelOrders(ctx?.channel);
  if (!linked.length) return { id: written, order: null, history: [] };
  return { id: linked[0], order: ORDERS[linked[0]], history: linked.slice(1).map((id) => ({ id, ...ORDERS[id] })) };
}

function decideOne(it, ctx) {
  const { id: resolvedId, order, history } = resolveOrder(it, ctx);
  if (resolvedId && !it.order_id && order) it = { ...it, order_id: resolvedId };
  const sku = it.sku || order?.sku || null;
  const product = sku ? PRODUCTS[sku] : null;

  if (it.type === "PRODUCT_QA") {
    if (!product) return out(it, "ASK_INFO", { reason: "unknown_product", ask: ["product name or link"] });
    const topics = it.qa_topics?.length ? it.qa_topics : ["OTHER"];
    const facts = {}, missing = [];
    for (const t of topics) (product.spec[t] ? (facts[t] = product.spec[t]) : missing.push(t));
    if (missing.length) return out(it, "QA_UNKNOWN", { sku, product: product.name, facts, missing_topics: missing });
    return out(it, "ANSWER_QA", { sku, product: product.name, facts });
  }

  if (!order) return out(it, "ASK_INFO", { reason: it.order_id ? "order_not_found" : "missing_order_id", ask: ["order number"] });
  const sinceDelivery = order.delivered ? daysBetween(order.delivered, TODAY) : null;

  // 重复结构性缺陷：客户说明是第 2 件起，或系统记录显示同 SKU 有过同类工单
  if (["DAMAGE", "DEFECT_WARRANTY"].includes(it.type) && it.severity === "STRUCTURAL") {
    const prior = history.filter((h) => h.sku === order.sku && h.prior_case);
    const units = Math.max(Number(it.units_affected) || 1, prior.length + 1);
    if (it.repeat_issue || prior.length) {
      if (order.amount_usd > POLICY.structuralApprovalThresholdUsd) return out(it, "HANDOFF", { reason: "needs_approval" });
      return out(it, "QUALITY_ESCALATION", {
        sku: order.sku, product: product?.name, units_affected: units,
        prior_cases: prior.map((h) => `${h.id}: ${h.prior_case}`),
        options: ["replacement from a different batch after a QC check", "full refund"],
        log: { sku: order.sku, defect: "repeat structural failure", orders: [resolvedId, ...prior.map((h) => h.id)] },
      });
    }
  }

  switch (it.type) {
    case "MISSING_PARTS": {
      if (sinceDelivery > POLICY.damageReportWindowDays) return out(it, "HANDOFF", { reason: "over_30_days" });
      const parts = (it.part_codes || []).map((p) => String(p).toUpperCase());
      if (!parts.length) return out(it, "ASK_INFO", { reason: "missing_part_code", ask: ["part code from the manual"] });
      const oos = parts.filter((p) => !(product.parts[p] > 0));
      if (oos.length) return out(it, "HANDOFF", { reason: "part_out_of_stock", parts: oos });
      return out(it, "RESHIP_PARTS", { parts, product: product.name });
    }
    case "DAMAGE": {
      if (sinceDelivery > POLICY.damageReportWindowDays) return out(it, "HANDOFF", { reason: "over_30_days" });
      if (!it.has_photo) return out(it, "ASK_INFO", { reason: "missing_photo", ask: ["photo of the damage"] });
      if (it.severity === "COSMETIC")
        return out(it, "OFFER_PARTS_OR_PARTIAL_REFUND", { options: ["replacement part", `${POLICY.cosmeticPartialRefundPct}% partial refund`], allowed_pct: [POLICY.cosmeticPartialRefundPct] });
      if (it.severity === "STRUCTURAL") {
        if (order.amount_usd > POLICY.structuralApprovalThresholdUsd) return out(it, "HANDOFF", { reason: "needs_approval" });
        return out(it, "OFFER_REPLACEMENT_OR_REFUND", { options: ["replacement", "full refund"] });
      }
      return out(it, "HANDOFF", { reason: "severity_unclear" });
    }
    case "DEFECT_WARRANTY": {
      if (sinceDelivery > POLICY.warrantyDays) return out(it, "OUT_OF_WARRANTY", { reason: "over_12_months", note: "Parts can be purchased; a specialist will send a quote." });
      if (!it.has_photo && !it.has_video) return out(it, "ASK_INFO", { reason: "missing_evidence", ask: ["photo or short video of the issue"] });
      return out(it, "WARRANTY_PARTS", { note: "Free warranty replacement parts.", product: product.name });
    }
    case "RETURN": {
      if (sinceDelivery === null) return out(it, "ASK_INFO", { reason: "not_delivered_yet" });
      if (sinceDelivery > POLICY.returnWindowDays) return out(it, "DECLINE_RETURN", { reason: "outside_30_day_window" });
      if (it.reason === "DEFECT") return out(it, "ASK_INFO", { reason: "defect_route", ask: ["photo of the defect"] });
      if (["ASSEMBLED", "USED"].includes(it.item_condition)) return out(it, "DECLINE_RETURN", { reason: "assembled_or_used" });
      if (["UNOPENED", "UNASSEMBLED"].includes(it.item_condition)) {
        const fee = product.oversize ? POLICY.returnFeeUsd.oversize : POLICY.returnFeeUsd.standard;
        return out(it, "RETURN_ALLOWED", { return_fee_usd: fee, fee_type: product.oversize ? "oversize freight" : "standard parcel", allowed_amounts: [fee] });
      }
      return out(it, "ASK_INFO", { reason: "condition_unknown", ask: ["is the item unopened or unassembled?"] });
    }
    case "EXCHANGE": {
      if (sinceDelivery === null || sinceDelivery > POLICY.returnWindowDays) return out(it, "DECLINE_RETURN", { reason: "outside_30_day_window" });
      if (["ASSEMBLED", "USED"].includes(it.item_condition)) return out(it, "DECLINE_RETURN", { reason: "assembled_or_used" });
      const target = String(it.target_variant || "").toLowerCase();
      if (!target) return out(it, "ASK_INFO", { reason: "missing_target_variant" });
      if ((product.variants[target] || 0) > 0) return out(it, "EXCHANGE", { from_variant: order.variant || null, to_variant: target });
      return out(it, "HANDOFF", { reason: "variant_out_of_stock" });
    }
    case "SHIPPING_STATUS": {
      if (order.status === "processing") {
        const bd = businessDaysBetween(order.order_date, TODAY);
        if (bd > POLICY.unshippedEscalateBusinessDays)
          return out(it, "SHIPPING_DELAY_ESCALATE", { business_days_unshipped: bd, options: ["keep the order (warehouse escalated)", "cancel with full refund"] });
        return out(it, "PROVIDE_ETA", { status: "processing", note: "Not shipped yet; no date can be promised." });
      }
      if (order.status === "in_transit") {
        const late = daysBetween(order.eta, TODAY);
        if (late > POLICY.overdueInvestigateDays)
          return out(it, "CARRIER_INVESTIGATION", { carrier: order.carrier, original_eta: order.eta, last_scan: order.last_scan, days_late: late });
        return out(it, "PROVIDE_ETA", { carrier: order.carrier, eta: order.eta, last_scan: order.last_scan });
      }
      return out(it, "PROVIDE_ETA", { status: "delivered", delivered: order.delivered });
    }
    case "NOT_RECEIVED": {
      if (order.status !== "delivered") return decideOne({ ...it, type: "SHIPPING_STATUS" });
      if (sinceDelivery < POLICY.notReceivedWaitDays) return out(it, "WAIT_48H", { delivered_scan: order.delivered, carrier: order.carrier });
      return out(it, "HANDOFF", { reason: "lost_package_case" });
    }
    case "ADDRESS_CHANGE":
      return order.status === "processing" ? out(it, "ADDRESS_CHANGE_OK") : out(it, "ADDRESS_CHANGE_DENIED", { reason: "already_shipped", carrier: order.carrier || null });
    default:
      return out(it, "HANDOFF", { reason: "unsupported_intent" });
  }
}

// ctx：系统侧上下文（如渠道信息），不来自模型
export function decide(facts, ctx = {}) {
  if (facts?.safety_risk) return [{ intent: "SAFETY", decision: "HANDOFF", reason: "safety" }];
  if (facts?.dispute) return [{ intent: "DISPUTE", decision: "HANDOFF", reason: "chargeback_or_dispute" }];
  const intents = Array.isArray(facts?.intents) && facts.intents.length ? facts.intents : [{ type: "OTHER" }];
  const ds = intents.map((it) => decideOne(it, ctx));
  if (facts?.animal_safety) ds.forEach((d) => (d.safety_notice = ANIMAL_SAFETY_NOTICE));
  return ds;
}
