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

const out = (intent, decision, extra = {}) => ({ intent: intent.type, order_id: intent.order_id || null, decision, ...extra, ...(intent.sku_source ? { sku_source: intent.sku_source } : {}) });

// 订单解析：先用邮件里写的订单号；没有则按渠道（平台 + 买家 + 商品号）关联，取最新一单。
function resolveOrder(it, ctx) {
  const written = it.order_id ? String(it.order_id).toUpperCase() : null;
  if (written && ORDERS[written]) return { id: written, order: ORDERS[written], history: [] };
  const linked = lookupChannelOrders(ctx?.channel);
  if (!linked.length) return { id: written, order: null, history: [] };
  return { id: linked[0], order: ORDERS[linked[0]], history: linked.slice(1).map((id) => ({ id, ...ORDERS[id] })) };
}

// ---------- SKU 兜底：模型没对上商品时，按客户原文里的商品名确定性匹配 ----------
// 只在客户原文里找；命中唯一商品才采用，多个商品时用该诉求的描述再缩小一次，仍不唯一就不猜（转为追问）。
export const PRODUCT_ALIASES = {
  "SW-01": /swing (chair|bench|seat)|patio swing|garden swing|hollywoodschaukel|balancelle/i,
  "PT-02": /dining table|acacia (patio |wooden )?table|patio table|garden table|gartentisch|table de jardin/i,
  "GB-03": /garden bed|raised bed|planter bed|hochbeet|potager surélevé/i,
  "KB-04": /ride[- ]?on car|kids'? (electric )?car|elektroauto für kinder|voiture électrique/i,
  "GZ-05": /gazebo|pavillon|tonnelle/i,
  "DC-06": /dog crate|dog kennel|crate furniture|hundebox|hundekäfig|cage[^.?!]{0,25}chien|chien[^.?!]{0,25}cage/i,
  "OF-07": /office chair|desk chair|bürostuhl|chaise de bureau/i,
  "D51-105V01": /rabbit hutch|bunny cage|kaninchenstall|clapier/i,
};
const skuCodeRe = new RegExp(`\\b(${Object.keys(PRODUCTS).map((k) => k.replace(/[-]/g, "\\-")).join("|")})\\b`, "gi");
const productsIn = (text) => {
  const hit = new Set();
  for (const m of String(text || "").matchAll(skuCodeRe)) hit.add(m[1].toUpperCase());
  for (const [sku, re] of Object.entries(PRODUCT_ALIASES)) if (re.test(text || "")) hit.add(sku);
  return [...hit];
};
export function matchSku(it, ctx = {}) {
  const customer = [ctx.subject, ctx.body, ...(ctx.thread || []).filter((m) => m.role === "customer").map((m) => m.body)].join("\n");
  const found = productsIn(customer);
  if (found.length === 1) return found[0];
  if (found.length > 1) {
    const narrowed = productsIn([it.customer_demand, it.component].join(" ")).filter((s) => found.includes(s));
    if (narrowed.length === 1) return narrowed[0];
  }
  return null;
}

function decideOne(it, ctx) {
  const { id: resolvedId, order, history } = resolveOrder(it, ctx);
  if (resolvedId && !it.order_id && order) it = { ...it, order_id: resolvedId };
  const modelSku = it.sku && PRODUCTS[String(it.sku).toUpperCase()] ? String(it.sku).toUpperCase() : null;
  const sku = modelSku || order?.sku || matchSku(it, ctx);
  if (sku && !modelSku && !order?.sku) it = { ...it, sku, sku_source: "name_match" };
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
    // 同类工单记录：同一订单（一单多件）或同买家其他订单
    const prior = [...(order.prior_case ? [{ id: resolvedId, ...order }] : []), ...history.filter((h) => h.sku === order.sku && h.prior_case)];
    const units = Math.max(Number(it.units_affected) || 1, prior.length + 1);
    if (it.repeat_issue || prior.length) {
      if (order.amount_usd > POLICY.structuralApprovalThresholdUsd) return out(it, "HANDOFF", { reason: "needs_approval" });
      const st = ctx?.state || {};
      // 活体动物笼具：先发新品，不要求先拆卸退回
      const replacement = product?.animal_enclosure
        ? "replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)"
        : "replacement";
      let options = [replacement, "full refund"];
      const confirmed = st.customer_choice === "REPLACEMENT" ? replacement : st.customer_choice === "FULL_REFUND" ? "full refund" : null;
      return out(it, "QUALITY_ESCALATION", {
        sku: order.sku, product: product?.name, component: it.component || null, units_affected: units,
        prior_cases: prior.map((h) => `${h.id}: ${h.prior_case}`),
        ...(confirmed ? { confirmed } : { options }),
        order_qty: order.qty || 1,
        internal_log: { sku: order.sku, defect: "repeat structural failure", orders: [...new Set([resolvedId, ...prior.map((h) => h.id)])] },
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
      if (!it.has_photo && !it.has_video) return out(it, "ASK_INFO", { reason: "missing_evidence", ask: [it.component ? `photo or short video of the ${it.component} issue (${it.units_affected || 1} unit(s))` : "photo or short video of the issue"] });
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
      if (order.status !== "delivered") return decideOne({ ...it, type: "SHIPPING_STATUS" }, ctx);
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
// 对话状态：由抽取结果（我方此前给出的方案、客户的反应与选择）+ 系统计数（客户第几次来信）组成
export function buildState(facts, ctx = {}) {
  const offers = Array.isArray(facts?.previous_offers) ? facts.previous_offers : [];
  const contact_count = (ctx.thread || []).filter((m) => m.role === "customer").length + 1;
  return {
    contact_count,
    priority: contact_count >= 3,
    customer_choice: facts?.customer_choice || null,
    rejected: offers.filter((o) => o.status === "REJECTED").map((o) => o.type + (o.pct ? ` ${o.pct}%` : "") + (o.reject_reason ? ` (${o.reject_reason})` : "")),
    // 是否曾要求客户自行修理：抽取结果 + 对我方历史回复做确定性匹配（模型可能把它并入部分退款）
    asked_self_repair: offers.some((o) => o.type === "SELF_REPAIR") ||
      (ctx.thread || []).some((m) => m.role === "agent" && /(source|arrange|find)[^.]{0,30}repair|repair (it|them) yourself|fix (it|them) yourself/i.test(m.body || "")),
  };
}

// ---------- L4 证据校验：高影响字段（safety_risk / dispute）必须有客户原话支撑 ----------
// 模型只负责“摘出原话”；原话是否真在邮件里、是否真的指向人身风险/纠纷，由下面的确定性检查判断。
export const PERSON_HAZARD = /injur|\bhurt\b|wound|bleed|blood|hospital|\bER\b|A&E|emergency room|doctor|ambulance|stitches|fractur|broken (arm|leg|wrist|bone|finger)|caught fire|on fire|fire hazard|electric(al)? shock|\bdied\b|\bdead\b|killed|lawyer|solicitor|attorney|lawsuit|\bsue\b|legal action|journalist|the press|the media|trading standards/i;
export const DISPUTE_TERMS = /charge ?back|dispute|card company|\bbank\b|paypal|open(ing)? a (case|claim)|\b(ebay|amazon)\b|feedback|(bad|negative|1[- ]star) review/i;
const norm = (t) => String(t || "").toLowerCase().replace(/[“”"'‘’`]/g, "").replace(/\s+/g, " ").trim();
function quotedIn(quote, texts) {
  const hay = norm(texts.join(" \n "));
  const parts = norm(quote).split(/\s*(?:\.\.\.|…)\s*/).filter((p) => p.length >= 6);
  return parts.length > 0 && parts.every((p) => hay.includes(p));
}
export function verifyFlags(facts, ctx = {}) {
  const latest = ctx.body || "";
  const texts = [latest, ...(ctx.thread || []).filter((m) => m.role === "customer").map((m) => m.body || "")];
  const ev = facts?.evidence || {};
  const check = (claimed, quote, lex) => {
    const inText = !!quote && quotedIn(quote, texts), onTopic = !!quote && lex.test(quote);
    return { claimed: !!claimed, quote: quote || null, verified: !!claimed && inText && onTopic, in_text: inText, on_topic: onTopic, guard_hit: lex.test(latest) };
  };
  const safety = check(facts?.safety_risk, ev.safety_risk, PERSON_HAZARD);
  const dispute = check(facts?.dispute, ev.dispute, DISPUTE_TERMS);
  const review = [];
  const why = (v) => !v.quote ? "no quote" : !v.in_text ? "quote not found in the customer's messages" : "quote does not describe it";
  if (safety.claimed && !safety.verified && !safety.guard_hit) review.push(`safety_risk claimed but not verified (${why(safety)})`);
  if (dispute.claimed && !dispute.verified && !dispute.guard_hit) review.push(`dispute claimed but not verified (${why(dispute)})`);
  if (!dispute.claimed && dispute.guard_hit) review.push("dispute terms in the latest message but dispute not extracted");
  return {
    safety: safety.verified || safety.guard_hit,      // 人身风险：宁可误转人工，不可漏（模型漏判时由关键词兜底）
    dispute: dispute.verified || (dispute.claimed && dispute.guard_hit),   // 纠纷=不自动回复，影响大：需原话或关键词佐证
    review, detail: { safety, dispute },
  };
}

// ctx：系统侧上下文（渠道、对话历史、本封正文），不来自模型
export function decide(facts, ctx = {}) {
  const v = verifyFlags(facts, ctx);
  if (v.safety) return [{ intent: "SAFETY", decision: "HANDOFF", reason: "safety", ...(facts?.safety_risk ? {} : { guard: "keyword" }) }];
  facts = { ...facts, safety_risk: false, dispute: v.dispute };
  const ds = decideVerified(facts, ctx);
  // 人工兜底：高影响字段没有通过校验时，照常给出决策和回复草稿，但必须人工复核后才能发送
  if (v.review.length) for (const d of ds) Object.assign(d, { review_required: true, review_reasons: v.review });
  return ds;
}

function decideVerified(facts, ctx) {
  const state = buildState(facts, ctx);
  const intents = Array.isArray(facts?.intents) && facts.intents.length ? facts.intents : [{ type: "OTHER" }];
  const ds = intents.map((it) => decideOne(it, { ...ctx, state }));
  const notice = facts?.animal_safety ? { safety_notice: ANIMAL_SAFETY_NOTICE } : {};
  if (facts?.dispute) {
    // 纠纷：直接转人工、不自动回复；把客户诉求、案件事实、按政策应得的处理和安全提醒整理成交接单给人工
    return [{
      intent: "DISPUTE", decision: "HANDOFF", reason: "chargeback_or_dispute", no_reply: true, dispute_type: facts.dispute_type || null,
      priority: state.priority, contact_count: state.contact_count,
      customer_requests: [...new Set([facts.customer_choice, ...intents.map((i) => i.customer_demand)].filter(Boolean).map((x) => String(x).toLowerCase()))],
      case_facts: intents.filter((i) => i.component || i.units_affected).map((i) => `${i.units_affected || 1} unit(s): ${i.component || i.type}${i.repeat_issue ? " (repeat)" : ""}`),
      for_specialist: ds,
      ...notice,
    }];
  }
  for (const d of ds) {
    Object.assign(d, notice);
    if (d.decision === "QUALITY_ESCALATION") {
      if (state.asked_self_repair) d.corrections = ["You do not need to repair it yourself; please disregard that earlier suggestion."];
      if (state.rejected.length) d.do_not_offer = state.rejected;
      if (state.priority) d.priority = true;
    }
  }
  return ds;
}
