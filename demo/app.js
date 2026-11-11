import { CASES } from "./core/cases.js";
import { RUNNERS } from "./core/pipeline.js";
import { scoreCase, aggregate, errorScore } from "./core/scorer.js";
import { makeLLM } from "./core/providers.js";

const $ = (s) => document.querySelector(s);
const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pct = (x) => (x == null ? "—" : `${Math.round(x * 100)}%`);
const MODES = { baseline: "基线（单提示）", skill: "分层 Skill" };
const CATS = ["全部", ...new Set(CASES.map((c) => c.category))];

const state = { runs: [], cur: -1, provider: "openai", cfg: {}, cat: "全部", running: false, stop: false };

// ---------- 结果集 ----------
// 直接转人工时，给人工客服的交接单（来自规则层，不经过模型）
function handoffNote(r) {
  const d = (r.detail || []).find((x) => x.no_reply);
  if (!d) return "";
  const rows = [
    ["优先级", d.priority ? `高（客户第 ${d.contact_count} 次来信）` : "普通"],
    ["纠纷类型", d.dispute_type || "—"],
    ["客户诉求", (d.customer_requests || []).join("；") || "—"],
    ["案件事实", (d.case_facts || []).join("；") || "—"],
    ["按政策可给", (d.for_specialist || []).map((x) => `${x.decision}${x.confirmed ? "：" + x.confirmed : x.options ? "：" + x.options.join(" / ") : x.ask ? "：补问 " + x.ask.join("、") : ""}`).join("；") || "—"],
    ["安全提醒", d.safety_notice || "—"],
  ];
  return `<h4>交接单（给人工）</h4><table class="note">${rows.map(([k, v]) => `<tr><th>${k}</th><td>${esc(v)}</td></tr>`).join("")}</table>`;
}

function buildRun(meta, results) {
  const rescored = results.map((r) => (r.error ? { ...r, score: errorScore(r.caseId, r.error) } : { ...r, score: scoreCase(CASES.find((c) => c.id === r.caseId), r) }));
  const summary = {};
  for (const m of Object.keys(MODES)) {
    const s = rescored.filter((r) => r.mode === m && r.score).map((r) => r.score);
    if (s.length) summary[m] = aggregate(CASES, s);
  }
  return { meta, results: rescored, summary };
}

function addRun(run, select = true) {
  state.runs.push(run);
  if (select) state.cur = state.runs.length - 1;
  renderRunSelect();
  render();
}

function renderRunSelect() {
  const sel = $("#runSelect");
  sel.innerHTML = state.runs.length
    ? state.runs.map((r, i) => `<option value="${i}" ${i === state.cur ? "selected" : ""}>${esc(r.meta.label)}${r.meta.live ? "（本次运行）" : ""}</option>`).join("")
    : `<option>暂无结果</option>`;
}

// ---------- 配置面板 ----------
const FIELDS = {
  openai: [
    { k: "baseUrl", label: "Base URL", ph: "https://api.openai.com/v1", def: "https://api.openai.com/v1" },
    { k: "apiKey", label: "API Key", type: "password", ph: "sk-..." },
    { k: "model", label: "模型", ph: "gpt-4o-mini / deepseek-chat / qwen-plus ..." },
  ],
  anthropic: [
    { k: "apiKey", label: "API Key", type: "password", ph: "sk-ant-..." },
    { k: "model", label: "模型", ph: "填写可用的 Claude 模型 ID" },
  ],
  bridge: [{ k: "baseUrl", label: "桥接地址", ph: "http://127.0.0.1:8787", def: "http://127.0.0.1:8787" }],
};
const HINTS = {
  openai: "兼容 OpenAI Chat Completions 的服务都可用（OpenAI、DeepSeek、通义、OpenRouter、本地 vLLM/Ollama 的 /v1 接口等）。",
  anthropic: "通过 anthropic-dangerous-direct-browser-access 头从浏览器直连。",
  bridge: "在本机运行 <code>python bridge/bridge.py --cmd \"claude -p\"</code>，也可换成 <code>codex exec -</code>、<code>ollama run qwen2.5</code>、<code>llm -m gpt-4o</code> 等任何从标准输入读提示的 CLI。",
};

function renderFields() {
  document.querySelectorAll("#providerSeg button").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.v === state.provider)));
  const c = (state.cfg[state.provider] ||= {});
  $("#providerFields").innerHTML =
    FIELDS[state.provider].map((f) => `<div class="field"><label>${f.label}<input type="${f.type || "text"}" data-k="${f.k}" placeholder="${esc(f.ph)}" value="${esc(c[f.k] ?? f.def ?? "")}" autocomplete="off" spellcheck="false" /></label></div>`).join("") +
    `<p class="hint" style="margin-top:-.25rem;margin-bottom:1rem">${HINTS[state.provider]}</p>`;
  $("#providerFields").querySelectorAll("input").forEach((inp) => inp.addEventListener("input", () => (c[inp.dataset.k] = inp.value.trim())));
  FIELDS[state.provider].forEach((f) => { if (c[f.k] == null && f.def) c[f.k] = f.def; });
}

// ---------- 运行 ----------
async function run() {
  const modes = [["baseline", $("#mBaseline").checked], ["skill", $("#mSkill").checked]].filter((x) => x[1]).map((x) => x[0]);
  const cfg = { provider: state.provider, ...(state.cfg[state.provider] || {}) };
  const err = $("#runError");
  err.hidden = true;
  if (!modes.length) return showErr("至少选择一种运行模式。");
  if (state.provider !== "bridge" && (!cfg.apiKey || !cfg.model)) return showErr("请填写 API Key 和模型。");

  const cases = $("#caseScope").value === "5" ? CASES.slice(0, 5) : CASES;
  const llm = makeLLM(cfg);
  const label = `${state.provider === "bridge" ? "本地 CLI" : state.provider}/${cfg.model || "bridge"} · ${new Date().toLocaleTimeString("zh-CN", { hour12: false })}`;
  const live = { meta: { label, live: true, provider: state.provider, model: cfg.model || "bridge", created: new Date().toISOString() }, results: [], summary: {} };
  addRun(live);

  const jobs = cases.flatMap((c) => modes.map((m) => [c, m]));
  let i = 0, done = 0, failures = 0;
  state.running = true; state.stop = false; toggleRun(true); setProg(0, jobs.length);

  async function worker() {
    while (i < jobs.length && !state.stop) {
      const [c, m] = jobs[i++];
      let r;
      try { r = await RUNNERS[m](c, llm); }
      catch (e) { failures++; r = { mode: m, caseId: c.id, error: String(e.message || e), decisions: [], reply: "", trace: [] }; if (failures === 1) showErr(`首个错误（${c.id} ${MODES[m]}）：${r.error}`); }
      live.results.push(r);
      Object.assign(live, buildRun(live.meta, live.results));
      setProg(++done, jobs.length);
      render();
    }
  }
  await Promise.all(Array.from({ length: Math.max(1, Math.min(8, Number($("#concurrency").value) || 3)) }, worker));
  state.running = false; toggleRun(false);
  $("#progText").textContent = state.stop ? `已停止：${done}/${jobs.length}` : `完成：${done}/${jobs.length}${failures ? `，失败 ${failures}` : ""}`;
}

function showErr(msg) { const e = $("#runError"); e.textContent = msg; e.hidden = false; }
function toggleRun(on) { $("#runBtn").disabled = on; $("#stopBtn").disabled = !on; }
function setProg(n, t) { $("#progBar").style.width = `${t ? (n / t) * 100 : 0}%`; $("#progText").textContent = `运行中：${n}/${t}`; }

// ---------- 渲染：汇总 ----------
function bar(mode, v, max = 1, fmt = pct) {
  const w = v == null ? 0 : Math.max(0, Math.min(1, v / max)) * 100;
  return `<div class="pbar ${mode}"><div class="track"><div class="fill" style="width:${w}%"></div></div><span class="num">${fmt(v)}</span></div>`;
}

function renderSummary() {
  const el = $("#summary");
  const run = state.runs[state.cur];
  if (!run || !Object.keys(run.summary).length) {
    el.innerHTML = `<div class="sum-head"><h2>评测汇总</h2></div><div class="empty">还没有结果。在左侧接入模型后点击“开始运行”，或从上方选择已有结果。</div>`;
    return;
  }
  const S = run.summary, modes = Object.keys(MODES).filter((m) => S[m]);
  const maxV = Math.max(1, ...modes.map((m) => S[m].violations));
  const rows = [
    ["决策正确率", "decision"], ["转人工判断", "handoff"], ["关键事实写到", "fact"], ["回复语言正确", "lang"],
  ];
  const cats = [...new Set(CASES.map((c) => c.category))];
  el.innerHTML = `
    <div class="sum-head">
      <h2>评测汇总</h2>
      <span class="meta">${esc(run.meta.label)} · ${esc(run.meta.model || "")} · ${run.meta.created ? new Date(run.meta.created).toLocaleString("zh-CN", { hour12: false }) : ""}</span>
    </div>
    ${run.meta.note ? `<p class="hint" style="margin:-.5rem 0 1.25rem">${esc(run.meta.note)}</p>` : ""}
    <div class="scores">
      ${modes.map((m) => `<div class="score-card ${m}"><div class="k">${MODES[m]} · 综合得分</div><div class="v">${(S[m].score * 100).toFixed(1)}</div><div class="s">全部检查通过 ${S[m].fullPass}/${S[m].n} · 违规 ${S[m].violations} 处</div></div>`).join("")}
    </div>
    <div class="legend">${modes.map((m) => `<span><i style="background:var(--${m === "baseline" ? "base" : "skill"}-c)"></i>${MODES[m]}</span>`).join("")}</div>
    <div class="metrics" style="margin-top:.75rem">
      ${rows.map(([n, k]) => `<div class="metric"><span class="name">${n}</span><div class="pair">${modes.map((m) => bar(m, S[m][k])).join("")}</div></div>`).join("")}
      <div class="metric"><span class="name">违规次数（越少越好）</span><div class="pair">${modes.map((m) => bar(m, S[m].violations, maxV, (v) => `${v} 处`)).join("")}</div></div>
    </div>
    <div class="sub-h">按场景类别的平均得分</div>
    <div class="metrics">
      ${cats.map((c) => `<div class="metric"><span class="name">${c}</span><div class="pair">${modes.map((m) => bar(m, S[m].byCategory[c], 1, (v) => (v == null ? "—" : (v * 100).toFixed(0)))).join("")}</div></div>`).join("")}
    </div>`;
}

// ---------- 渲染：表格 ----------
function resCell(r) {
  if (!r) return `<span class="res"><span class="na">未运行</span></span>`;
  if (r.error) return `<span class="res"><span class="top"><i class="dot bad"></i>出错</span><span class="why">${esc(r.error.slice(0, 60))}</span></span>`;
  const s = r.score, fails = s.checks.filter((x) => !x.pass);
  return `<span class="res"><span class="top"><i class="dot ${s.pass ? "ok" : "bad"}"></i>${(s.score * 100).toFixed(0)}</span>${fails.length ? `<span class="why">${esc(fails.map((x) => x.label).slice(0, 2).join("；"))}${fails.length > 2 ? " 等" : ""}</span>` : ""}</span>`;
}

function renderTable() {
  $("#catSeg").innerHTML = CATS.map((c) => `<button type="button" data-c="${c}" aria-pressed="${c === state.cat}">${c}</button>`).join("");
  const run = state.runs[state.cur];
  const get = (id, m) => run?.results.find((r) => r.caseId === id && r.mode === m);
  const list = CASES.filter((c) => state.cat === "全部" || c.category === state.cat);
  $("#caseTable").innerHTML = `
    <thead><tr><th>编号</th><th>类别</th><th>场景</th><th class="hide-sm">期望决策</th><th>基线</th><th>分层 Skill</th></tr></thead>
    <tbody>${list.map((c) => `<tr data-id="${c.id}" tabindex="0">
      <td class="cid">${c.id}</td><td><span class="cat">${c.category}</span></td>
      <td>${esc(c.title)}<div class="cid">难度 ${c.difficulty}</div></td>
      <td class="dec hide-sm">${c.expected.decisions.join("<br>")}</td>
      <td>${resCell(get(c.id, "baseline"))}</td><td>${resCell(get(c.id, "skill"))}</td>
    </tr>`).join("")}</tbody>`;
}

// ---------- 渲染：详情 ----------
function traceBlock(r) {
  if (!r?.trace?.length) return "";
  return `<details><summary>查看提示与模型原始输出（${r.trace.length} 步）</summary>${r.trace.map((t) => `
    <div class="stage">${esc(t.stage)}${t.ms ? ` · ${t.ms} ms` : ""}</div>
    ${t.stage === "rules" ? `<pre>输入 facts:\n${esc(t.user)}\n\n输出 decisions:\n${esc(t.response)}</pre>` : `<pre>[system]\n${esc(t.system)}\n\n[user]\n${esc(t.user)}</pre><pre>[response]\n${esc(t.response)}</pre>`}`).join("")}</details>`;
}

function colBlock(m, r) {
  if (!r) return `<div class="col ${m}"><h3>${MODES[m]}</h3><p class="hint">本结果集未运行该模式。</p></div>`;
  if (r.error) return `<div class="col ${m}"><h3>${MODES[m]}</h3><p class="error">${esc(r.error)}</p>${traceBlock(r)}</div>`;
  return `<div class="col ${m}">
    <h3><span>${MODES[m]}</span><span>${(r.score.score * 100).toFixed(0)} 分</span></h3>
    <h4>决策</h4><div class="chips">${r.decisions.map((d) => `<span class="chip">${esc(d)}</span>`).join("") || "<span class='hint'>无</span>"}</div>
    ${m === "skill" && r.facts ? `<h4>L3 抽取的事实</h4><pre>${esc(JSON.stringify(r.facts, null, 2))}</pre>` : ""}
    <h4>回复</h4><div class="reply">${r.reply ? esc(r.reply) : "（不自动回复，已直接转人工）"}</div>${handoffNote(r)}
    <h4>检查项</h4>
    <ul class="checks">${r.score.checks.map((x) => `<li class="${x.pass ? "ok" : "bad"}"><span class="ic">${x.pass ? "✓" : "✗"}</span><span>${esc(x.label)}<div class="det">${esc(x.detail)}</div></span></li>`).join("")}</ul>
    ${traceBlock(r)}
  </div>`;
}

function openCase(id) {
  const c = CASES.find((x) => x.id === id), run = state.runs[state.cur];
  const get = (m) => run?.results.find((r) => r.caseId === id && r.mode === m);
  $("#drawerContent").innerHTML = `
    <h2 class="d-title" id="drawerTitle">${c.id} · ${esc(c.title)}</h2>
    <div class="d-meta"><span class="cat">${c.category}</span><span>难度 ${c.difficulty}</span><span>期望决策：</span>${c.expected.decisions.map((d) => `<span class="chip">${d}</span>`).join("")}<span>期望语言：${c.expected.lang}</span></div>
    <div class="email"><div class="hdr">From ${esc(c.email.from)} · Subject: ${esc(c.email.subject)} · 附件：${c.email.attachments.length ? esc(c.email.attachments.join(", ")) : "无"}</div><div class="body">${esc(c.email.body)}</div>${c.email.channel ? `<div class="hdr">渠道：${esc(c.email.channel.platform)} · 买家 ${esc(c.email.channel.buyer)} · 商品 #${esc(c.email.channel.item_id)}（订单由系统按渠道关联）</div>` : ""}${c.email.image_notes ? `<div class="hdr">图片描述（图片识别步骤生成，原图不公开）：${c.email.image_notes.map((n, i) => `<br>${i + 1}. ${esc(n)}`).join("")}</div>` : ""}</div>
    <div class="cols">${colBlock("baseline", get("baseline"))}${colBlock("skill", get("skill"))}</div>`;
  $("#drawer").hidden = false;
  document.body.style.overflow = "hidden";
}
function closeDrawer() { $("#drawer").hidden = true; document.body.style.overflow = ""; }

function render() { renderSummary(); renderTable(); }

// ---------- 导入导出 ----------
function exportRun() {
  const run = state.runs[state.cur];
  if (!run) return;
  const blob = new Blob([JSON.stringify(run, null, 1)], { type: "application/json" });
  const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `skillstrata-${(run.meta.label || "run").replace(/[^\w.-]+/g, "_")}.json` });
  document.body.appendChild(a); a.click(); a.remove();
}
async function importRun(file) {
  try {
    const j = JSON.parse(await file.text());
    if (!Array.isArray(j.results)) throw new Error("缺少 results 数组");
    addRun(buildRun({ ...(j.meta || {}), label: `${j.meta?.label || file.name}（导入）` }, j.results));
  } catch (e) { showErr(`导入失败：${e.message}`); }
}

// ---------- 事件 ----------
$("#providerSeg").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { state.provider = b.dataset.v; renderFields(); } });
$("#runBtn").addEventListener("click", run);
$("#stopBtn").addEventListener("click", () => { state.stop = true; });
$("#runSelect").addEventListener("change", (e) => { state.cur = Number(e.target.value); render(); });
$("#catSeg").addEventListener("click", (e) => { const b = e.target.closest("button"); if (b) { state.cat = b.dataset.c; renderTable(); } });
$("#caseTable").addEventListener("click", (e) => { const tr = e.target.closest("tr[data-id]"); if (tr) openCase(tr.dataset.id); });
$("#caseTable").addEventListener("keydown", (e) => { const tr = e.target.closest("tr[data-id]"); if (tr && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); openCase(tr.dataset.id); } });
$("#drawer").addEventListener("click", (e) => { if (e.target.closest("[data-close]")) closeDrawer(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !$("#drawer").hidden) closeDrawer(); });
$("#exportBtn").addEventListener("click", exportRun);
$("#importInput").addEventListener("change", (e) => { if (e.target.files[0]) importRun(e.target.files[0]); e.target.value = ""; });

// ---------- 启动：载入内置运行结果 ----------
renderFields();
renderRunSelect();
render();
// 内置结果：第一个为默认展示
for (const f of ["perplexity-agent.js", "gpt5_nano.js", "claude_haiku_5_5.js"]) {
  try {
    const preset = (await import(`./runs/${f}`)).default;
    state.runs.unshift(buildRun(preset.meta, preset.results));
  } catch { /* 没有该结果文件时忽略 */ }
}
state.cur = 0;
renderRunSelect();
render();
