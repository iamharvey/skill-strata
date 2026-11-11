// 自检：用“理想抽取结果”喂规则，确认 20 个用例的期望决策可达；并检查评分器对理想回复/错误回复的判别。
import { CASES } from "../core/cases.js";
import { decide } from "../core/rules.js";
const I = (o) => ({ part_codes: [], qa_topics: [], has_photo: false, has_video: false, ...o });
const GOLD = {
  C01: { intents: [I({ type: "MISSING_PARTS", order_id: "AS-10023", part_codes: ["C4"] })] },
  C02: { intents: [I({ type: "DAMAGE", order_id: "AS-10088", severity: "COSMETIC", has_photo: true })] },
  C03: { dispute: true, evidence: { dispute: "I will open a chargeback with my credit card company tomorrow" }, intents: [I({ type: "DAMAGE", order_id: "AS-10101", severity: "STRUCTURAL", has_photo: true })] },
  C04: { safety_risk: true, evidence: { safety_risk: "He hurt his wrist and we spent the evening in the ER" }, intents: [] },
  C05: { intents: [I({ type: "DEFECT_WARRANTY", order_id: "AS-10210", has_video: true })] },
  C06: { intents: [I({ type: "DEFECT_WARRANTY", order_id: "AS-08800", has_photo: true })] },
  C07: { intents: [I({ type: "RETURN", order_id: "AS-10170", item_condition: "UNOPENED", reason: "CHANGED_MIND" })] },
  C08: { intents: [I({ type: "RETURN", order_id: "AS-10175", item_condition: "ASSEMBLED", reason: "CHANGED_MIND" })] },
  C09: { intents: [I({ type: "EXCHANGE", order_id: "AS-10180", item_condition: "UNASSEMBLED", target_variant: "beige" })] },
  C10: { intents: [I({ type: "RETURN", order_id: "AS-10185", item_condition: "UNASSEMBLED", reason: "CHANGED_MIND" })] },
  C11: { intents: [I({ type: "PRODUCT_QA", sku: "SW-01", qa_topics: ["MAX_LOAD"] })] },
  C12: { intents: [I({ type: "PRODUCT_QA", sku: "GZ-05", qa_topics: ["WEATHER"] })] },
  C13: { intents: [I({ type: "PRODUCT_QA", sku: "PT-02", qa_topics: ["CERTIFICATION"] })] },
  C14: { intents: [I({ type: "PRODUCT_QA", sku: "KB-04", qa_topics: ["MAX_LOAD", "AGE_RANGE", "BATTERY"] })] },
  C15: { intents: [I({ type: "PRODUCT_QA", sku: "DC-06", qa_topics: ["WEATHER"] })] },
  C16: { intents: [I({ type: "SHIPPING_STATUS", order_id: "AS-10162" })] },
  C17: { intents: [I({ type: "SHIPPING_STATUS", order_id: "AS-10150" })] },
  C18: { intents: [I({ type: "NOT_RECEIVED", order_id: "AS-10201" })] },
  C19: { intents: [I({ type: "SHIPPING_STATUS", order_id: "AS-10240" }), I({ type: "ADDRESS_CHANGE", order_id: "AS-10240" })] },
  C20: { intents: [I({ type: "MISSING_PARTS", order_id: "AS-10230", part_codes: ["B2"] }), I({ type: "SHIPPING_STATUS", order_id: "AS-10150" }), I({ type: "PRODUCT_QA", sku: "SW-01", qa_topics: ["WEATHER"] })] },
  C22: { animal_safety: true, intents: [I({ type: "DEFECT_WARRANTY", severity: "STRUCTURAL", repeat_issue: true, units_affected: 2, has_photo: true })] },
  C23: { animal_safety: true, previous_offers: [{ type: "SELF_REPAIR", status: "REJECTED" }, { type: "REPLACEMENT_WITH_COLLECTION", status: "REJECTED", reject_reason: "nowhere to keep ferrets" }], intents: [I({ type: "DEFECT_WARRANTY", component: "front mesh door", severity: "STRUCTURAL", repeat_issue: true, units_affected: 2, has_photo: true }), I({ type: "DEFECT_WARRANTY", component: "metal tray", severity: "COSMETIC", units_affected: 3 })] },
  C24: { dispute: true, dispute_type: "MARKETPLACE_CASE", animal_safety: true, customer_choice: "REPLACEMENT", intents: [I({ type: "DEFECT_WARRANTY", component: "front mesh door", severity: "STRUCTURAL", repeat_issue: true, units_affected: 2, has_photo: true })] },
  C21: { animal_safety: true, intents: [I({ type: "DEFECT_WARRANTY", severity: "STRUCTURAL", repeat_issue: true, units_affected: 2, has_photo: true })] },
};
let bad = 0;
// v4：多轮状态
{ const c23 = CASES.find((c) => c.id === "C23"), c24 = CASES.find((c) => c.id === "C24");
  const d23 = decide(GOLD.C23, { channel: c23.email.channel, thread: c23.email.thread, body: c23.email.body, subject: c23.email.subject });
  const q = d23.find((d) => d.decision === "QUALITY_ESCALATION");
  if (!q?.options?.[0]?.includes("shipped first")) { bad++; console.log("✗ 笼具换货应先发"); }
  if (!q?.corrections?.length || !q?.do_not_offer?.length || !q.priority) { bad++; console.log("✗ 多轮状态未生效", JSON.stringify(q)); }
  if (/batch|QC/i.test(JSON.stringify(q?.options))) { bad++; console.log("✗ 选项不应承诺批次/质检"); }
  if (q?.units_affected !== 2) { bad++; console.log("✗ 网片问题件数应为 2"); }
  const d24 = decide(GOLD.C24, { channel: c24.email.channel, thread: c24.email.thread, body: c24.email.body, subject: c24.email.subject })[0];
  if (!d24.safety_notice || !d24.customer_requests.length || !d24.for_specialist?.[0]?.confirmed) { bad++; console.log("✗ 纠纷转人工未保留事实/安全提醒", JSON.stringify(d24)); }
  if (!d24.no_reply) { bad++; console.log("✗ 纠纷应直接转人工、不自动回复"); } }
{ const c21 = CASES.find((c) => c.id === "C21");
  const d = decide({ intents: [I({ type: "DEFECT_WARRANTY", severity: "STRUCTURAL", has_photo: true })] }, { channel: c21.email.channel });
  if (d[0].decision !== "QUALITY_ESCALATION") { bad++; console.log("✗ C21 未凭系统记录识别重复", d[0].decision); } }
for (const c of CASES) {
  const got = decide(GOLD[c.id], { channel: c.email.channel, thread: c.email.thread, body: c.email.body, subject: c.email.subject }).map((x) => x.decision).sort().join("+");
  const want = [...c.expected.decisions].sort().join("+");
  if (got !== want) { bad++; console.log("✗", c.id, "want", want, "got", got); }
}
// 证据校验与人工兜底（模拟小模型的典型误判）
{ const by = (id) => CASES.find((c) => c.id === id), ctx = (c) => ({ channel: c.email.channel, thread: c.email.thread, body: c.email.body, subject: c.email.subject });
  const c22 = by("C22"), c04 = by("C04"), c02 = by("C02");
  // 1) 动物笼具损坏被误判为人身安全，原话不涉及人身风险 → 不走安全分支，照常决策并要求人工复核
  const a = decide({ ...GOLD.C22, safety_risk: true, evidence: { safety_risk: "it is just a good job my ferret hasn't been able to get out" } }, ctx(c22));
  if (a[0].decision !== "QUALITY_ESCALATION" || !a[0].review_required) { bad++; console.log("✗ 误判的安全标记应降级并人工复核", JSON.stringify(a)); }
  // 2) 编造原话（不在邮件里）→ 不予采信
  const b = decide({ ...GOLD.C22, safety_risk: true, evidence: { safety_risk: "my son hurt his hand on the mesh" } }, ctx(c22));
  if (b[0].decision === "HANDOFF" || !b[0].review_required) { bad++; console.log("✗ 编造的原话不应被采信", JSON.stringify(b)); }
  // 3) 模型漏判真实的受伤 → 关键词兜底仍转人工
  const c = decide({ safety_risk: false, intents: [I({ type: "DAMAGE", severity: "STRUCTURAL" })] }, ctx(c04));
  if (c[0].reason !== "safety") { bad++; console.log("✗ 漏判受伤时应由关键词兜底转人工", JSON.stringify(c)); }
  // 4) “否则就退货”被误判为纠纷 → 不静默转人工
  const d = decide({ ...GOLD.C02, dispute: true, evidence: { dispute: "otherwise I want to send it back" } }, ctx(c02));
  if (d.some((x) => x.no_reply) || !d[0].review_required) { bad++; console.log("✗ 无依据的纠纷标记应降级并人工复核", JSON.stringify(d)); } }
// SKU 兜底：模型没给出 SKU 时按客户原文里的商品名匹配
{ const ctx = (c) => ({ channel: c.email.channel, thread: c.email.thread, body: c.email.body, subject: c.email.subject });
  for (const id of ["C11", "C12", "C13", "C14", "C15", "C20"]) {
    const c = CASES.find((x) => x.id === id);
    const g = { ...GOLD[id], intents: GOLD[id].intents.map((it) => (it.type === "PRODUCT_QA" ? { ...it, sku: null, ...(id === "C20" ? { customer_demand: "Is the swing chair canopy waterproof?" } : {}) } : it)) };
    const got = decide(g, ctx(c)).map((x) => x.decision).sort().join("+"), want = [...c.expected.decisions].sort().join("+");
    if (got !== want) { bad++; console.log(`✗ ${id} SKU 兜底后应得到 ${want}，实际 ${got}`); }
  }
  // 提到两个商品且诉求里分不清 → 不猜，追问
  const amb = decide({ intents: [I({ type: "PRODUCT_QA", qa_topics: ["MAX_LOAD"], customer_demand: "Is it strong enough?" })] }, { body: "Choosing between the swing chair and the gazebo. Is it strong enough?" });
  if (amb[0].decision !== "ASK_INFO") { bad++; console.log("✗ 商品不唯一时不应猜测", JSON.stringify(amb)); } }
console.log(bad ? `${bad} 个用例不可达` : `${CASES.length}/${CASES.length} 用例的期望决策均可由规则得出`);
process.exit(bad ? 1 : 0);
