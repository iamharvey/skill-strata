#!/usr/bin/env node
// 命令行跑分。三种用法：
//   1) API 直跑：  node tools/runner.mjs run --provider openai --model gpt-4o-mini [--base-url ...] --out runs/my-run.js
//                   （密钥取环境变量 OPENAI_API_KEY / ANTHROPIC_API_KEY；bridge 不需要密钥）
//   2) Agent 分步：node tools/runner.mjs pending  --responses runs/agent.responses.json --out pending.json
//                   由 agent 逐条作答写回 responses，再重复，直到没有待答提示
//   3) 汇总：      node tools/runner.mjs finalize --responses runs/agent.responses.json --label "..." --out runs/perplexity-agent.js
import fs from "node:fs";
import { CASES } from "../core/cases.js";
import { RUNNERS } from "../core/pipeline.js";
import { scoreCase, aggregate, errorScore } from "../core/scorer.js";
import { makeLLM, PendingError } from "../core/providers.js";

const args = Object.fromEntries(
  process.argv.slice(3).reduce((acc, a, i, arr) => (a.startsWith("--") ? [...acc, [a.slice(2), arr[i + 1]?.startsWith("--") ? true : arr[i + 1]]] : acc), [])
);
const cmd = process.argv[2];
const modes = (args.modes || "baseline,skill").split(",");
const only = args.cases ? new Set(args.cases.split(",")) : null;
const cases = CASES.filter((c) => !only || only.has(c.id));

async function runAll(llm, { collectPending = false, concurrency = 4 } = {}) {
  const results = [], pending = [];
  const jobs = cases.flatMap((c) => modes.map((m) => [c, m]));
  let i = 0;
  async function worker() {
    while (i < jobs.length) {
      const [c, m] = jobs[i++];
      try {
        const r = await RUNNERS[m](c, llm);
        results.push({ ...r, score: scoreCase(c, r) });
        process.stderr.write(`✓ ${c.id} ${m} ${r.decisions.join("+")}\n`);
      } catch (e) {
        if (collectPending && e instanceof PendingError) pending.push(e.call);
        else { results.push({ mode: m, caseId: c.id, error: String(e.message || e), decisions: [], reply: "", trace: [], score: errorScore(c.id, e.message || e) }); process.stderr.write(`✗ ${c.id} ${m} ${e.message}\n`); }
      }
    }
  }
  await Promise.all(Array.from({ length: concurrency }, worker));
  return { results, pending };
}

function summarize(results) {
  const summary = {};
  for (const m of modes) summary[m] = aggregate(cases, results.filter((r) => r.mode === m && r.score).map((r) => r.score));
  return summary;
}

function writeRun(out, meta, results) {
  const payload = { meta: { ...meta, created: new Date().toISOString(), cases: cases.length }, summary: summarize(results), results };
  const body = out.endsWith(".js") ? `export default ${JSON.stringify(payload, null, 1)};\n` : JSON.stringify(payload, null, 1);
  fs.writeFileSync(out, body);
  console.log(JSON.stringify(payload.summary, null, 2));
}

if (cmd === "run") {
  const provider = args.provider || "openai";
  const apiKey = provider === "anthropic" ? process.env.ANTHROPIC_API_KEY : process.env.OPENAI_API_KEY;
  const llm = makeLLM({ provider, model: args.model, baseUrl: args["base-url"], apiKey });
  const { results } = await runAll(llm, { concurrency: Number(args.concurrency || 4) });
  writeRun(args.out || "runs/run.json", { provider, model: args.model, label: args.label || `${provider}/${args.model}` }, results);
} else if (cmd === "pending" || cmd === "finalize") {
  const responses = fs.existsSync(args.responses) ? JSON.parse(fs.readFileSync(args.responses, "utf8")) : {};
  const { results, pending } = await runAll(makeLLM({ provider: "replay", responses }), { collectPending: true, concurrency: 1 });
  if (cmd === "pending") {
    fs.writeFileSync(args.out || "pending.json", JSON.stringify(pending, null, 1));
    console.log(`待作答提示 ${pending.length} 条 → ${args.out || "pending.json"}`);
  } else {
    if (pending.length) { console.error(`仍有 ${pending.length} 条未作答`); process.exit(1); }
    writeRun(args.out || "runs/perplexity-agent.js", { provider: "perplexity-agent", model: args.model || "Perplexity Computer agent", label: args.label || "Perplexity Agent", note: args.note }, results);
  }
} else {
  console.log("用法见文件头注释");
}
