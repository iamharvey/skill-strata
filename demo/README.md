# SkillStrata Bench

用 21 封客服邮件（20 封示意 + 1 封匿名真实工单），对比两种做法的效果：

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

## 内置结果

### v2（2026-11-11，21 例，当前页面默认展示）

| 模式 | 综合得分 | 全部通过 | 违规 |
|---|---|---|---|
| 基线 | 100.0 | 21/21 | 0 |
| 分层 Skill | 98.1 | 20/21 | 0 |
| 人工原回复（仅 C21） | 20 | — | 2 |

Skill 唯一未通过的仍是 C12（凉亭积雪）：抽取步骤把“积雪”同时理解成承重问题（MAX_LOAD），规则判为 QA_UNKNOWN。与 v1 同样的失败重复出现，说明这是稳定的抽取粒度问题，不是偶发；为避免对着测试调参，暂未修改。

### C21：真实工单带来的改动

C21 来自一封真实 eBay 工单：客户的第 2 个兔笼前门网片焊点断裂，笼里是雪貂。v1 版 Skill 在这封邮件上的表现不如基线：两者都去索要订单号，Skill 的回复只剩一句话，既没提重复问题也没提动物安全。人工原回复给了 15% 折扣并让客户自行修理，按本仓库标准得 20 分、2 项违规。

据此做了四处改动，两种模式共享同一份政策与数据：

1. **抽取字段**：新增 `animal_safety`（围栏损坏、动物可能逃逸或受伤）、`repeat_issue` / `units_affected`（第 2 件起同样问题）；`severity` 扩展到质量缺陷；邮件新增渠道信息，平台订单由系统按 平台 + 买家 + 商品号 关联（`lookupChannelOrders`），不再向客户索要。
2. **规则**：同一产品的结构性缺陷再次出现（客户说明，或系统记录中有同类工单）→ `QUALITY_ESCALATION`：上报质量团队并按 SKU 记录，客户可选“换另一批次并质检后的新品”或“全额退款”；订单 > 300 USD 改为转人工审批；不得让客户自行修理。客户没提“第 2 个”时，规则也会凭订单记录识别重复（见 `tools/selftest.mjs`）。
3. **回复**：决策中带 `safety_notice` 时，L2 必须原样写入固定的安全提醒。
4. **用例**：C21 加入用例集。客户名、商品号已替换；原图不公开，改为图片识别步骤生成的文字描述，两种模式看到的内容相同。

怎么读：

- **C21 通过不是独立证据**：这一轮的改动正是由它引出的。更有意义的是其余 20 例没有退步。
- 真正起作用的主要是“数据和政策补齐”（渠道订单关联、商品目录、重复缺陷规则），这些同样写进了基线的提示里，所以基线也通过了。分层 Skill 的不同在于：结论由代码给出，可以单测、可以审计；15% 折扣在结构性缺陷下根本不会出现，而基线是靠模型每次都“遵守”。
- 单次运行、n=21、由 agent 充当模型。

### v1（20 例）

基线 100.0（20/20），分层 Skill 98.0（19/20），唯一差异同为 C12。原始输出保存在 `runs/agent.v1.responses.json`（v1 的提示与当前代码不同，无法直接用当前代码回放）。

## 目录

```text
demo/
├── index.html / styles.css / app.js   # 页面
├── core/
│   ├── data.js       # 示意订单、商品规格、政策
│   ├── cases.js      # 21 个用例与期望（C21 为匿名真实工单）
│   ├── rules.js      # 确定性规则（shared/rules.py 的扩展版）
│   ├── prompts.js    # 基线、L3 抽取、L2 回复三类提示
│   ├── pipeline.js   # 两种运行模式
│   ├── scorer.js     # 确定性评分
│   └── providers.js  # OpenAI 兼容 / Anthropic / 本地桥接 / 回放
├── bridge/bridge.py  # 本地 CLI 桥接
├── tools/
│   ├── runner.mjs    # 命令行跑分与 agent 分步模式
│   └── selftest.mjs  # 自检：理想抽取结果下 21 个用例的期望决策均可达
└── runs/             # 运行结果
```
