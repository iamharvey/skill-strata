// 两种运行模式：baseline（单提示）与 skill（L3 抽取 → L4 安全守卫 + 规则 → L2 回复）。
// llm(call) => Promise<string>；call = {id, stage, system, user}
import { baselinePrompt, extractPrompt, replyPrompt } from "./prompts.js";
import { decide } from "./rules.js";

export function parseJSON(text) {
  if (typeof text !== "string") return text;
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const s = fenced ? fenced[1] : text;
  const i = s.indexOf("{"), j = s.lastIndexOf("}");
  if (i < 0 || j < i) throw new Error("模型输出中没有 JSON");
  return JSON.parse(s.slice(i, j + 1));
}

async function call(llm, prompt, trace) {
  const t0 = Date.now();
  const response = await llm(prompt);
  trace.push({ ...prompt, response, ms: Date.now() - t0 });
  return response;
}

export async function runBaseline(c, llm) {
  const trace = [];
  const raw = await call(llm, baselinePrompt(c), trace);
  const j = parseJSON(raw);
  const detail = Array.isArray(j.decisions) ? j.decisions : [];
  return { mode: "baseline", caseId: c.id, decisions: detail.map((x) => String(x.decision || "").toUpperCase()), detail, reply: String(j.reply || ""), trace };
}

export async function runSkill(c, llm) {
  const trace = [];
  const facts = parseJSON(await call(llm, extractPrompt(c), trace));
  const detail = decide(facts, { channel: c.email.channel });                           // 确定性，模型不参与
  trace.push({ id: `${c.id}:rules`, stage: "rules", system: "shared rules (deterministic)", user: JSON.stringify(facts, null, 2), response: JSON.stringify(detail, null, 2), ms: 0 });
  const j = parseJSON(await call(llm, replyPrompt(c, facts, detail), trace));
  return { mode: "skill", caseId: c.id, facts, decisions: detail.map((x) => x.decision), detail, reply: String(j.reply || ""), trace };
}

export const RUNNERS = { baseline: runBaseline, skill: runSkill };
