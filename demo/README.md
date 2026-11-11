# SkillStrata Bench

用 20 封客服邮件，对比两种做法的效果：

- **基线**：把售后政策、订单记录、商品规格和决策词表放进一个提示，让模型一次给出决策和回复。
- **分层 Skill**：L3 只抽取事实 → L4 安全/争议守卫 → 规则代码给出唯一决策 → L2 按决策写回复。

两种模式拿到的信息完全相同，只差结构。评分全部是确定性检查（正则 + 规则），不用模型打分。

> 订单、商品、政策均为示意数据。

## 打开方式

页面使用 ES Module，需要通过 HTTP 打开（不能直接双击 `file://`）：

```bash
cd demo
python -m http.server 8090
# 浏览器打开 http://127.0.0.1:8090
```

## 接入大模型

| 方式 | 说明 |
|---|---|
| OpenAI 兼容 | 填 Base URL、API Key、模型。OpenAI、DeepSeek、通义、OpenRouter、本地 vLLM / Ollama 的 `/v1` 接口均可。需服务商允许浏览器跨域。 |
| Anthropic | 填 API Key、模型，浏览器直连。 |
| 本地 CLI | 在本机运行桥接，把任意“从标准输入读提示”的 CLI 变成接口。 |

本地 CLI 桥接：

```bash
python demo/bridge/bridge.py --cmd "claude -p"            # Claude Code
python demo/bridge/bridge.py --cmd "codex exec -"         # Codex CLI
python demo/bridge/bridge.py --cmd "ollama run qwen2.5"   # Ollama
```

页面选“本地 CLI”，地址填 `http://127.0.0.1:8787`。

密钥只保存在页面内存中，刷新即清除。

## 命令行跑分

```bash
cd demo
OPENAI_API_KEY=sk-... node tools/runner.mjs run --provider openai --model gpt-4o-mini --out runs/gpt-4o-mini.json
node tools/runner.mjs run --provider bridge --base-url http://127.0.0.1:8787 --model claude-cli --out runs/claude-cli.json
```

生成的 JSON 可以在页面上“导入结果”查看明细。

## 让 Agent 充当模型（分步模式）

适合在 Perplexity Computer 等 agent 环境中运行，不需要 API Key：

```bash
node tools/runner.mjs pending  --responses runs/agent.responses.json --out pending.json
# 让 agent 逐条作答 pending.json 中的提示，结果写回 runs/agent.responses.json（{id: 原始输出}）
# 分层 Skill 的回复步骤依赖抽取结果，所以需要再执行一次 pending → 作答
node tools/runner.mjs finalize --responses runs/agent.responses.json --label "..." --out runs/perplexity-agent.js
```

`runs/perplexity-agent.js` 会作为内置结果在页面上默认展示。

## 内置结果（2026-11-11）

由两个相互隔离的 Perplexity 子 agent（Claude Opus 5.5 Fast）充当模型，一个答基线，一个答分层 Skill 的抽取与回复，均看不到期望答案。

| 模式 | 综合得分 | 全部通过 | 违规 |
|---|---|---|---|
| 基线 | 100.0 | 20/20 | 0 |
| 分层 Skill | 98.0 | 19/20 | 0 |

唯一差异是 C12（凉亭积雪）：抽取步骤把“积雪”额外理解成承重问题（MAX_LOAD），而规格中没有这一项，规则于是判为 QA_UNKNOWN。回复本身是合理的（答了已知部分，未知部分转产品团队），但决策与期望不一致。

怎么读这个结果：

- 强模型在政策写清楚、用例干净的情况下，单提示已经接近满分。**这组 20 个用例对强模型偏容易，还区分不出两种做法。**
- 分层的新问题出在抽取粒度上：一个话题多抽了，就会改变规则结论。这是分层引入的新失败模式，需要在 L3 加用例。
- 单次运行、n=20、由 agent 充当模型，不能代替真实 API 在固定温度下的多次重复测试。

建议的下一步：用页面接入更小、更便宜的模型（如 gpt-4o-mini、qwen、本地模型）再跑一遍；增加更长的政策、更多干扰信息和对抗性邮件；同一模型重复跑 3–5 次看稳定性。

## 目录

```text
demo/
├── index.html / styles.css / app.js   # 页面
├── core/
│   ├── data.js       # 示意订单、商品规格、政策
│   ├── cases.js      # 20 个用例与期望
│   ├── rules.js      # 确定性规则（shared/rules.py 的扩展版）
│   ├── prompts.js    # 基线、L3 抽取、L2 回复三类提示
│   ├── pipeline.js   # 两种运行模式
│   ├── scorer.js     # 确定性评分
│   └── providers.js  # OpenAI 兼容 / Anthropic / 本地桥接 / 回放
├── bridge/bridge.py  # 本地 CLI 桥接
├── tools/
│   ├── runner.mjs    # 命令行跑分与 agent 分步模式
│   └── selftest.mjs  # 自检：理想抽取结果下 20 个用例的期望决策均可达
└── runs/             # 运行结果
```
