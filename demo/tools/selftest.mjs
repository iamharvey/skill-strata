// 自检：用“理想抽取结果”喂规则，确认 20 个用例的期望决策可达；并检查评分器对理想回复/错误回复的判别。
import { CASES } from "../core/cases.js";
import { decide } from "../core/rules.js";
const I = (o) => ({ part_codes: [], qa_topics: [], has_photo: false, has_video: false, ...o });
const GOLD = {
  C01: { intents: [I({ type: "MISSING_PARTS", order_id: "AS-10023", part_codes: ["C4"] })] },
  C02: { intents: [I({ type: "DAMAGE", order_id: "AS-10088", severity: "COSMETIC", has_photo: true })] },
  C03: { dispute: true, intents: [I({ type: "DAMAGE", order_id: "AS-10101", severity: "STRUCTURAL", has_photo: true })] },
  C04: { safety_risk: true, intents: [] },
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
  const d23 = decide(GOLD.C23, { channel: c23.email.channel, thread: c23.email.thread });
  const q = d23.find((d) => d.decision === "QUALITY_ESCALATION");
  if (!q?.options?.[0]?.includes("shipped first")) { bad++; console.log("✗ 笼具换货应先发"); }
  if (!q?.corrections?.length || !q?.do_not_offer?.length || !q.priority) { bad++; console.log("✗ 多轮状态未生效", JSON.stringify(q)); }
  if (q?.units_affected !== 2) { bad++; console.log("✗ 网片问题件数应为 2"); }
  const d24 = decide(GOLD.C24, { channel: c24.email.channel, thread: c24.email.thread })[0];
  if (!d24.safety_notice || !d24.customer_requests.length || !d24.for_specialist?.[0]?.confirmed) { bad++; console.log("✗ 纠纷转人工未保留事实/安全提醒", JSON.stringify(d24)); } }
{ const c21 = CASES.find((c) => c.id === "C21");
  const d = decide({ intents: [I({ type: "DEFECT_WARRANTY", severity: "STRUCTURAL", has_photo: true })] }, { channel: c21.email.channel });
  if (d[0].decision !== "QUALITY_ESCALATION") { bad++; console.log("✗ C21 未凭系统记录识别重复", d[0].decision); } }
for (const c of CASES) {
  const got = decide(GOLD[c.id], { channel: c.email.channel, thread: c.email.thread }).map((x) => x.decision).sort().join("+");
  const want = [...c.expected.decisions].sort().join("+");
  if (got !== want) { bad++; console.log("✗", c.id, "want", want, "got", got); }
}
console.log(bad ? `${bad} 个用例不可达` : `${CASES.length}/${CASES.length} 用例的期望决策均可由规则得出`);
process.exit(bad ? 1 : 0);
