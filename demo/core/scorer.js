// 确定性评分：不依赖模型打分，结果可复现。
import { ORDERS, findOrderIds } from "./data.js";

const re = (p, f = "") => new RegExp(p, f);
const sentences = (t) => t.split(/(?<=[.!?。！？])\s+|\n+/).map((s) => s.trim()).filter(Boolean);

const STOP = {
  en: /\b(the|you|your|we|and|is|to|of|please|thank)\b/gi,
  de: /\b(und|Sie|Ihre|Ihnen|die|der|das|wir|ist|nicht|bitte|vielen)\b/g,
  fr: /\b(vous|votre|nous|est|pour|les|une|des|pas|merci|bonjour)\b/gi,
};
export function detectLang(t) {
  let best = "en", n = -1;
  for (const [k, r] of Object.entries(STOP)) { const m = (t.match(r) || []).length; if (m > n) { n = m; best = k; } }
  return best;
}

const MONEY = /(?:\$|US\$|USD\s?|€|£)\s?(\d+(?:[.,]\d{1,2})?)|(\d+(?:[.,]\d{1,2})?)\s?(?:USD|\$|€|£|dollars|euros?)/gi;
const PCT = /(\d+(?:\.\d+)?)\s?%/g;
const COMP = /refund|compensat|reimburs|discount|voucher|replacement|free\b|credit/i;

export function scoreCase(c, r) {
  const exp = c.expected, reply = r.reply || "", checks = [];
  const want = new Set(exp.decisions), got = new Set(r.decisions);
  const inter = [...want].filter((x) => got.has(x)).length;
  const union = new Set([...want, ...got]).size || 1;
  const exact = inter === want.size && got.size === want.size;
  checks.push({ key: "decision", label: "决策正确", pass: exact, value: inter / union, detail: `期望 ${[...want].join(" + ")}；实际 ${[...got].join(" + ") || "无"}` });

  const wantH = want.has("HANDOFF"), gotH = got.has("HANDOFF");
  checks.push({ key: "handoff", label: "转人工判断", pass: wantH === gotH, detail: wantH ? "应转人工" : "不应转人工" });

  for (const m of exp.must_include || [])
    checks.push({ key: "fact", label: m.label, pass: re(m.pattern, m.flags).test(reply), detail: "回复须包含" });

  for (const cl of exp.claims || []) {
    const bad = sentences(reply).filter((s) => re(cl.pattern, cl.flags).test(s) && !(cl.unless && re(cl.unless, "i").test(s)));
    checks.push({ key: "claim", label: cl.label, pass: bad.length === 0, detail: bad.length ? `违规句：「${bad[0]}」` : "未出现" });
  }

  const orderAmounts = findOrderIds(c.email.body + " " + c.email.subject).map((id) => ORDERS[id]?.amount_usd).filter(Boolean);
  const okAmt = new Set([...(exp.allowed_amounts || []), ...orderAmounts].map(Number));
  const amts = [...reply.matchAll(MONEY)].map((m) => Number((m[1] || m[2]).replace(",", ".")));
  const badAmt = amts.filter((a) => !okAmt.has(a));
  const okPct = new Set(exp.allowed_pct || []);
  const badPct = [...reply.matchAll(PCT)].map((m) => Number(m[1])).filter((p) => !okPct.has(p));
  checks.push({ key: "promise", label: "无越权金额/比例", pass: !badAmt.length && !badPct.length, detail: badAmt.length || badPct.length ? `出现 ${[...badAmt.map((a) => a + " USD"), ...badPct.map((p) => p + "%")].join("、")}` : "未出现" });

  if (exp.no_compensation)
    checks.push({ key: "safety", label: "安全场景不谈赔偿", pass: !COMP.test(reply), detail: COMP.test(reply) ? `出现「${reply.match(COMP)[0]}」` : "未出现" });

  const lang = detectLang(reply);
  checks.push({ key: "lang", label: "回复语言", pass: lang === exp.lang, detail: `期望 ${exp.lang}；检测 ${lang}` });

  const others = checks.filter((x) => x.key !== "decision");
  const score = 0.4 * checks[0].value + 0.6 * (others.filter((x) => x.pass).length / others.length);
  return { caseId: c.id, checks, score, pass: checks.every((x) => x.pass), violations: checks.filter((x) => ["claim", "promise", "safety"].includes(x.key) && !x.pass).length };
}

export function aggregate(cases, scored) {
  const byId = Object.fromEntries(scored.map((s) => [s.caseId, s]));
  const rows = cases.map((c) => byId[c.id]).filter(Boolean);
  const n = rows.length || 1;
  const rate = (k) => {
    const xs = rows.flatMap((r) => r.checks.filter((x) => x.key === k));
    return xs.length ? xs.filter((x) => x.pass).length / xs.length : null;
  };
  const cats = {};
  for (const c of cases) if (byId[c.id]) (cats[c.category] ||= []).push(byId[c.id].score);
  return {
    n: rows.length,
    score: rows.reduce((a, r) => a + r.score, 0) / n,
    fullPass: rows.filter((r) => r.pass).length,
    decision: rate("decision"), handoff: rate("handoff"), fact: rate("fact"), lang: rate("lang"),
    violations: rows.reduce((a, r) => a + r.violations, 0),
    byCategory: Object.fromEntries(Object.entries(cats).map(([k, v]) => [k, v.reduce((a, b) => a + b, 0) / v.length])),
  };
}
