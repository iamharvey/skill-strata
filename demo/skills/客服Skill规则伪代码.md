# 客服 Skill 规则伪代码（L4 守卫 + L5 决策）

> 版本：SkillStrata Bench v8（2026-11-11），与 [demo/core/rules.js](https://github.com/iamharvey/skill-strata/blob/main/demo/core/rules.js) 一一对应。
> 规则层不调用模型：相同输入永远得到相同输出。各层分工见《客服Skill分层内容.md》。
> 订单、商品、政策参数都是示意数据。

## 目录

| 节 | 内容 | 对应政策 | 对应用例 |
|---|---|---|---|
| §1 | 常量与数据接口 | — | 全部 |
| §2 | L4 守卫：证据校验、关键词兜底、人工复核 | 6 | C03、C04、C24 |
| §3 | 主入口 decide | — | 全部 |
| §4 | 订单解析与 SKU 兜底 | 1 | C11–C15、C20–C24 |
| §5 | 单个诉求的决策 decideOne | 2–14、16、17 | C01–C23 |
| §6 | 多轮对话状态 | 18 | C22–C24 |
| §7 | 纠纷交接单与附加字段 | 6、17、18 | C03、C22–C24 |
| §8 | 抽取失败兜底 | — | — |
| §9 | 24 个用例的规则路径 | — | 全部 |

---

## §1 常量与数据接口

```text
CONST TODAY = "2026-11-09"

CONST POLICY = {
  RETURN_WINDOW_DAYS        = 30      # 改主意退货/换货窗口
  WARRANTY_DAYS             = 365     # 保修期
  DAMAGE_REPORT_WINDOW_DAYS = 30      # 破损/缺件报告时限
  STRUCTURAL_APPROVAL_USD   = 300     # 结构性破损超过此金额需人工审批
  COSMETIC_REFUND_PCT       = 15      # 外观破损唯一可给的部分退款比例
  RETURN_FEE_USD            = { STANDARD: 12.95, OVERSIZE: 59 }
  UNSHIPPED_ESCALATE_BDAYS  = 5       # 未发货超过 N 个工作日催仓库
  OVERDUE_INVESTIGATE_DAYS  = 3       # 超过 ETA N 天开承运商调查
  NOT_RECEIVED_WAIT_DAYS    = 2       # 签收未收到：不足 N 天先等
}

CONST DECISIONS = [RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF,
                   WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE,
                   ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H,
                   PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION]

CONST ANIMAL_SAFETY_NOTICE = "For your pets' safety, please do not leave them unattended
                              in the enclosure until it has been replaced."

# 外部数据（生产中替换为 OMS / 商品库 / 平台接口）
ORDERS[order_id]   -> { sku, status: processing|in_transit|delivered, order_date, eta, delivered,
                        carrier, last_scan, amount_usd, qty, variant, prior_case }
PRODUCTS[sku]      -> { name, oversize, animal_enclosure, variants{color: stock}, parts{code: stock},
                        spec{TOPIC: text | null} }
lookupChannelOrders(platform, buyer, item_id) -> [order_id ...]   # 按下单日期从新到旧

# 系统上下文 ctx（来自系统，不来自模型）
ctx = { channel, subject, body /* 本轮客户消息 */, thread /* 历史往来，含 role=customer|agent */ }

FUNCTION customerText(ctx):
  RETURN join(ctx.subject, ctx.body, [m.body FOR m IN ctx.thread IF m.role == "customer"])

FUNCTION out(intent, decision, extra = {}):
  r = { intent: intent.type, order_id: intent.order_id, decision, ...extra }
  IF intent.sku_source: r.sku_source = intent.sku_source
  RETURN r
```

---

## §2 L4 守卫：证据校验、关键词兜底、人工复核

模型给出的 `safety_risk`、`dispute` 不直接采信。模型负责摘出客户原话，代码负责核对两点：原话是否真的出现在客户消息里，以及原话是否真的描述了人身风险或纠纷。

```text
# 词表（英文常见说法；换语种需补充）
LEX PERSON_HAZARD = injur | hurt | wound | bleed | blood | hospital | ER | A&E | emergency room | doctor
                  | ambulance | stitches | fractur | broken (arm|leg|wrist|bone|finger) | caught fire
                  | on fire | fire hazard | electric shock | died | dead | killed | lawyer | solicitor
                  | attorney | lawsuit | sue | legal action | journalist | the press | the media
                  | trading standards

LEX DISPUTE_TERMS = charge back | chargeback | dispute | card company | bank | paypal
                  | open a case | open a claim | ebay | amazon | feedback | bad/negative/1-star review

FUNCTION normalize(t):  lower(t), 去掉引号, 合并空白

FUNCTION quotedIn(quote, texts):
  hay   = normalize(join(texts))
  parts = split(normalize(quote), "..." 或 "…"), 只保留长度 >= 6 的片段
  RETURN parts 非空 AND 每个片段都是 hay 的子串

FUNCTION check(claimed, quote, LEX, ctx):
  texts = [ctx.body] + [m.body FOR m IN ctx.thread IF m.role == "customer"]   # 只看客户自己的话，不看附件描述
  in_text  = quote != null AND quotedIn(quote, texts)
  on_topic = quote != null AND LEX matches quote
  RETURN { claimed, quote,
           verified:  claimed AND in_text AND on_topic,
           guard_hit: LEX matches ctx.body }        # 关键词兜底只看本轮消息

FUNCTION verifyFlags(facts, ctx):
  s = check(facts.safety_risk, facts.evidence.safety_risk, PERSON_HAZARD, ctx)
  d = check(facts.dispute,     facts.evidence.dispute,     DISPUTE_TERMS, ctx)
  review = []
  IF s.claimed AND NOT s.verified AND NOT s.guard_hit:
     review += "safety_risk claimed but not verified (" + why(s) + ")"
  IF d.claimed AND NOT d.verified AND NOT d.guard_hit:
     review += "dispute claimed but not verified (" + why(d) + ")"
  IF NOT d.claimed AND d.guard_hit:
     review += "dispute terms in the latest message but dispute not extracted"
  RETURN {
    safety:  s.verified OR s.guard_hit,                  # 人身风险：宁可误转，不可漏
    dispute: d.verified OR (d.claimed AND d.guard_hit),  # 纠纷=不自动回复，影响大：必须有佐证
    review
  }

FUNCTION why(v):
  IF v.quote == null:  RETURN "no quote"
  IF NOT in_text:      RETURN "quote not found in the customer's messages"
  RETURN "quote does not describe it"
```

处理矩阵：

| 模型判断 | 原话核对 | 本轮关键词 | 结果 |
|---|---|---|---|
| safety_risk = true | 通过 | — | 安全转人工 |
| safety_risk = true | 不通过 | 未命中 | 不走安全分支，按普通规则决策，要求人工复核 |
| safety_risk = false | — | 命中 | 安全转人工（标记 guard = keyword） |
| dispute = true | 通过 | — | 静默转人工 + 交接单 |
| dispute = true | 不通过 | 命中 | 静默转人工 + 交接单 |
| dispute = true | 不通过 | 未命中 | 不走纠纷分支，按普通规则决策，要求人工复核 |
| dispute = false | — | 命中 | 按普通规则决策，要求人工复核（不静默转人工） |

---

## §3 主入口 decide

```text
FUNCTION decide(facts, ctx):
  v = verifyFlags(facts, ctx)

  # 1) 人身安全：最高优先级，整单转人工
  IF v.safety:
     RETURN [{ intent: SAFETY, decision: HANDOFF, reason: "safety",
               guard: (facts.safety_risk ? null : "keyword") }]

  # 2) 用核对后的值覆盖模型的标记
  facts.safety_risk = false
  facts.dispute     = v.dispute

  decisions = decideVerified(facts, ctx)

  # 3) 人工兜底：高影响字段没通过校验 → 照常给决策和回复草稿，但必须复核后发送
  IF v.review 非空:
     FOR d IN decisions: d.review_required = true; d.review_reasons = v.review
  RETURN decisions

FUNCTION decideVerified(facts, ctx):
  state   = buildState(facts, ctx)                                   # §6
  intents = facts.intents 非空 ? facts.intents : [{ type: OTHER }]
  ds      = [decideOne(it, ctx + { state }) FOR it IN intents]       # §5
  notice  = facts.animal_safety ? { safety_notice: ANIMAL_SAFETY_NOTICE } : {}

  IF facts.dispute:
     RETURN [disputeHandoff(facts, intents, ds, state, notice)]      # §7

  FOR d IN ds:
     d += notice
     IF d.decision == QUALITY_ESCALATION:
        IF state.asked_self_repair: d.corrections  = ["You do not need to repair it yourself; please disregard that earlier suggestion."]
        IF state.rejected 非空:     d.do_not_offer = state.rejected
        IF state.priority:          d.priority     = true
  RETURN ds
```

---

## §4 订单解析与 SKU 兜底

```text
FUNCTION resolveOrder(it, ctx):
  written = upper(it.order_id)
  IF written AND ORDERS[written] 存在:
     RETURN { id: written, order: ORDERS[written], history: [] }
  linked = lookupChannelOrders(ctx.channel)            # 平台消息：平台 + 买家 + 商品号
  IF linked 为空:
     RETURN { id: written, order: null, history: [] }
  RETURN { id: linked[0], order: ORDERS[linked[0]], history: linked[1..] }   # 最新一单 + 历史订单

# SKU 别名（英/德/法）
LEX PRODUCT_ALIASES = {
  SW-01:      swing chair|swing bench|patio swing|garden swing|hollywoodschaukel|balancelle
  PT-02:      dining table|acacia table|patio table|garden table|gartentisch|table de jardin
  GB-03:      garden bed|raised bed|planter bed|hochbeet|potager surélevé
  KB-04:      ride-on car|kids car|elektroauto für kinder|voiture électrique
  GZ-05:      gazebo|pavillon|tonnelle
  DC-06:      dog crate|dog kennel|crate furniture|hundebox|hundekäfig|cage…chien
  OF-07:      office chair|desk chair|bürostuhl|chaise de bureau
  D51-105V01: rabbit hutch|bunny cage|kaninchenstall|clapier
}

FUNCTION productsIn(text):
  RETURN 去重( text 中出现的 SKU 编号  ∪  PRODUCT_ALIASES 命中的 SKU )

FUNCTION matchSku(it, ctx):
  found = productsIn(customerText(ctx))                  # 只在客户原文里找
  IF |found| == 1: RETURN found[0]
  IF |found| > 1:                                        # 一封信提到多个商品：用这条诉求的描述再缩小
     narrowed = productsIn(it.customer_demand + it.component) ∩ found
     IF |narrowed| == 1: RETURN narrowed[0]
  RETURN null                                            # 不唯一就不猜 → 后续追问

FUNCTION resolveSku(it, order, ctx):
  model_sku = (it.sku 在 PRODUCTS 中) ? upper(it.sku) : null
  sku = model_sku OR order.sku OR matchSku(it, ctx)
  IF sku AND NOT model_sku AND NOT order.sku: it.sku_source = "name_match"   # 留痕
  RETURN sku
```

---

## §5 单个诉求的决策 decideOne

```text
# QA 主题的原文依据（英/德/法）
LEX TOPIC_TERMS = {
  MAX_LOAD:      <数字> kg|lb | weigh | weight | max load | capacity | how much can it hold | tragkraft | poids
  DIMENSIONS:    dimension | size | how big/tall/wide | height | width | cm | inch | größe | taille
  MATERIAL:      material | made of | steel | alumin | plastic | wood | fabric | holz | en bois
  WEATHER:       weather | rain | snow | wind | winter | outdoor | waterproof | uv | frost | damp
               | dehors | extérieur | pluie | neige | draußen | regen | schnee
  ASSEMBLY:      assembl | put together | set up | install | tools | montage | aufbau
  CARE:          clean | maintain | care | oil | treat | wash | entretien | nettoy | pflege
  CERTIFICATION: certif | FSC | CE | ASTM | EN71 | BIFMA | tested | standard | zertifi | norme
  BATTERY:       batter | charg | run time | how long does it run | akku | laden
  AGE_RANGE:     age | years old | she's <数字> | he's <数字> | toddler | child | kid | ans | jahre
  WARRANTY:      warrant | guarantee | garantie | gewährleistung
}

FUNCTION decideOne(it, ctx):
  { id, order, history } = resolveOrder(it, ctx)
  IF id AND it.order_id == null AND order: it.order_id = id
  sku     = resolveSku(it, order, ctx)
  product = PRODUCTS[sku]

  # ---------- 5.1 产品问答（不需要订单）----------  政策 14
  IF it.type == PRODUCT_QA:
     IF product == null: RETURN out(it, ASK_INFO, { reason: "unknown_product", ask: ["product name or link"] })
     topics  = it.qa_topics 非空 ? it.qa_topics : [OTHER]
     facts   = { t: product.spec[t] FOR t IN topics IF product.spec[t] 非空 }
     missing = [t FOR t IN topics IF product.spec[t] 为空]
     asked   = customerText(ctx)
     unknown = [t FOR t IN missing IF TOPIC_TERMS[t] 不存在 OR TOPIC_TERMS[t] matches asked]   # 客户真问到了
     dropped = missing - unknown                                                              # 模型多标的
     IF unknown 非空 OR facts 为空:
        RETURN out(it, QA_UNKNOWN, { sku, product: product.name, facts,
                                     missing_topics: (unknown 非空 ? unknown : missing), dropped_topics: dropped })
     RETURN out(it, ANSWER_QA, { sku, product: product.name, facts, dropped_topics: dropped })

  # ---------- 以下都需要订单 ----------  政策 1
  IF order == null:
     RETURN out(it, ASK_INFO, { reason: (it.order_id ? "order_not_found" : "missing_order_id"), ask: ["order number"] })
  since_delivery = order.delivered ? days(order.delivered, TODAY) : null

  # ---------- 5.2 重复结构性缺陷（优先于普通破损/保修）----------  政策 16、17
  IF it.type IN [DAMAGE, DEFECT_WARRANTY] AND it.severity == STRUCTURAL:
     prior = (order.prior_case ? [本单] : []) + [h FOR h IN history IF h.sku == order.sku AND h.prior_case]
     units = max(it.units_affected OR 1, |prior| + 1)
     IF it.repeat_issue OR prior 非空:
        IF order.amount_usd > STRUCTURAL_APPROVAL_USD:
           RETURN out(it, HANDOFF, { reason: "needs_approval" })
        replacement = product.animal_enclosure
            ? "replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)"
            : "replacement"
        confirmed = CASE ctx.state.customer_choice
                      WHEN REPLACEMENT -> replacement
                      WHEN FULL_REFUND -> "full refund"
                      ELSE null
        RETURN out(it, QUALITY_ESCALATION, {
            sku: order.sku, product: product.name, component: it.component, units_affected: units,
            prior_cases: prior,
            (confirmed ? confirmed : options: [replacement, "full refund"]),   # 不给配件、不给部分退款
            order_qty: order.qty,
            internal_log: { sku, defect: "repeat structural failure", orders }  # 仅内部，传给 L2 前删除
        })

  # ---------- 5.3 按诉求类型 ----------
  SWITCH it.type:

  CASE MISSING_PARTS:                                                     # 政策 2、3
     IF since_delivery > DAMAGE_REPORT_WINDOW_DAYS: RETURN out(it, HANDOFF, { reason: "over_30_days" })
     parts = upper(it.part_codes)
     IF parts 为空: RETURN out(it, ASK_INFO, { reason: "missing_part_code", ask: ["part code from the manual"] })
     oos = [p FOR p IN parts IF product.parts[p] <= 0]
     IF oos 非空: RETURN out(it, HANDOFF, { reason: "part_out_of_stock", parts: oos })
     RETURN out(it, RESHIP_PARTS, { parts, product: product.name })

  CASE DAMAGE:                                                            # 政策 1、2、4、5
     IF since_delivery > DAMAGE_REPORT_WINDOW_DAYS: RETURN out(it, HANDOFF, { reason: "over_30_days" })
     IF NOT it.has_photo: RETURN out(it, ASK_INFO, { reason: "missing_photo", ask: ["photo of the damage"] })
     IF it.severity == COSMETIC:
        RETURN out(it, OFFER_PARTS_OR_PARTIAL_REFUND,
                   { options: ["replacement part", "15% partial refund"], allowed_pct: [15] })
     IF it.severity == STRUCTURAL:
        IF order.amount_usd > STRUCTURAL_APPROVAL_USD: RETURN out(it, HANDOFF, { reason: "needs_approval" })
        RETURN out(it, OFFER_REPLACEMENT_OR_REFUND, { options: ["replacement", "full refund"] })
     RETURN out(it, HANDOFF, { reason: "severity_unclear" })

  CASE DEFECT_WARRANTY:                                                   # 政策 7
     IF since_delivery > WARRANTY_DAYS:
        RETURN out(it, OUT_OF_WARRANTY, { reason: "over_12_months", note: "Parts can be purchased; a specialist will send a quote." })
     IF NOT it.has_photo AND NOT it.has_video:
        RETURN out(it, ASK_INFO, { reason: "missing_evidence",
                                   ask: ["photo or short video of the " + it.component + " issue (" + it.units_affected + " unit(s))"] })
     RETURN out(it, WARRANTY_PARTS, { note: "Free warranty replacement parts.", product: product.name })

  CASE RETURN:                                                            # 政策 8
     IF since_delivery == null:                RETURN out(it, ASK_INFO, { reason: "not_delivered_yet" })
     IF since_delivery > RETURN_WINDOW_DAYS:   RETURN out(it, DECLINE_RETURN, { reason: "outside_30_day_window" })
     IF it.reason == DEFECT:                   RETURN out(it, ASK_INFO, { reason: "defect_route", ask: ["photo of the defect"] })
     IF it.item_condition IN [ASSEMBLED, USED]: RETURN out(it, DECLINE_RETURN, { reason: "assembled_or_used" })
     IF it.item_condition IN [UNOPENED, UNASSEMBLED]:
        fee = product.oversize ? RETURN_FEE_USD.OVERSIZE : RETURN_FEE_USD.STANDARD
        RETURN out(it, RETURN_ALLOWED, { return_fee_usd: fee, allowed_amounts: [fee] })
     RETURN out(it, ASK_INFO, { reason: "condition_unknown", ask: ["is the item unopened or unassembled?"] })

  CASE EXCHANGE:                                                          # 政策 9
     IF since_delivery == null OR since_delivery > RETURN_WINDOW_DAYS: RETURN out(it, DECLINE_RETURN, { reason: "outside_30_day_window" })
     IF it.item_condition IN [ASSEMBLED, USED]: RETURN out(it, DECLINE_RETURN, { reason: "assembled_or_used" })
     target = lower(it.target_variant)
     IF target 为空: RETURN out(it, ASK_INFO, { reason: "missing_target_variant" })
     IF product.variants[target] > 0: RETURN out(it, EXCHANGE, { from_variant: order.variant, to_variant: target })
     RETURN out(it, HANDOFF, { reason: "variant_out_of_stock" })

  CASE SHIPPING_STATUS:                                                   # 政策 10、11
     IF order.status == processing:
        bd = businessDays(order.order_date, TODAY)
        IF bd > UNSHIPPED_ESCALATE_BDAYS:
           RETURN out(it, SHIPPING_DELAY_ESCALATE, { business_days_unshipped: bd,
                      options: ["keep the order (warehouse escalated)", "cancel with full refund"] })
        RETURN out(it, PROVIDE_ETA, { status: processing, note: "Not shipped yet; no date can be promised." })
     IF order.status == in_transit:
        late = days(order.eta, TODAY)
        IF late > OVERDUE_INVESTIGATE_DAYS:
           RETURN out(it, CARRIER_INVESTIGATION, { carrier, original_eta: order.eta, last_scan, days_late: late })
        RETURN out(it, PROVIDE_ETA, { carrier, eta: order.eta, last_scan })
     RETURN out(it, PROVIDE_ETA, { status: delivered, delivered: order.delivered })

  CASE NOT_RECEIVED:                                                      # 政策 12
     IF order.status != delivered: RETURN decideOne(it 改为 SHIPPING_STATUS, ctx)
     IF since_delivery < NOT_RECEIVED_WAIT_DAYS: RETURN out(it, WAIT_48H, { delivered_scan: order.delivered, carrier })
     RETURN out(it, HANDOFF, { reason: "lost_package_case" })

  CASE ADDRESS_CHANGE:                                                    # 政策 13
     IF order.status == processing: RETURN out(it, ADDRESS_CHANGE_OK)
     RETURN out(it, ADDRESS_CHANGE_DENIED, { reason: "already_shipped", carrier })

  DEFAULT:
     RETURN out(it, HANDOFF, { reason: "unsupported_intent" })
```

---

## §6 多轮对话状态

状态由两部分组成：抽取结果（我方此前给过的方案、客户的反应和选择），加上系统计数（客户第几次来信）。

```text
FUNCTION buildState(facts, ctx):
  offers        = facts.previous_offers OR []
  contact_count = count(m IN ctx.thread WHERE m.role == "customer") + 1
  RETURN {
    contact_count,
    priority:        contact_count >= 3,                      # 第 3 次来信起标记优先
    customer_choice: facts.customer_choice,                   # 客户已选 → 直接确认，不再让选
    rejected:        [o.type + pct + reject_reason FOR o IN offers IF o.status == REJECTED],   # 不再提供
    # 是否曾让客户自己修：抽取结果 OR 对我方历史回复做确定性匹配（模型可能把它并入部分退款）
    asked_self_repair: any(o.type == SELF_REPAIR FOR o IN offers)
                    OR any(m.role == "agent" AND m.body matches
                           "(source|arrange|find) … repair | repair it/them yourself | fix it/them yourself"
                           FOR m IN ctx.thread)
  }
```

---

## §7 纠纷交接单与附加字段

```text
FUNCTION disputeHandoff(facts, intents, ds, state, notice):
  RETURN {
    intent: DISPUTE, decision: HANDOFF, reason: "chargeback_or_dispute",
    no_reply: true,                                     # 不调用 L2，不自动回复，人工接管
    dispute_type:      facts.dispute_type,
    priority:          state.priority,
    contact_count:     state.contact_count,
    customer_requests: 去重(lower([facts.customer_choice] + [i.customer_demand FOR i IN intents])),
    case_facts:        [i.units_affected + " unit(s): " + (i.component OR i.type) + (i.repeat_issue ? " (repeat)" : "")
                        FOR i IN intents IF i.component OR i.units_affected],
    for_specialist:    ds,                              # 按政策本应给出的处理，供人工参考
    ...notice                                           # 宠物安全提醒
  }

# 进入 L2 之前的清理
FUNCTION toReplyInput(decisions):
  IF 所有 d.no_reply:  RETURN SKIP_REPLY                 # 只输出交接单
  RETURN [d 去掉 internal_log FOR d IN decisions]        # 内部记录不进回复层（政策 19）

# 附加字段汇总（由 decideVerified 写入，L2 必须遵守）
#   safety_notice    animal_safety 为 true 时，逐字写入回复
#   corrections      曾让客户自行修理时，逐句写入纠正
#   do_not_offer     客户拒绝过的方案，不得再次提供
#   priority         第 3 次来信起
#   review_required  L4 校验未通过：回复作为草稿，人工复核后发送
```

---

## §8 抽取失败兜底

```text
FUNCTION runSkill(case):
  raw = callModel(extractPrompt(case))
  TRY facts = parseJSON(raw)
  CATCH e:
     # 模型输出为空、截断或不是 JSON：整单转人工，不自动回复
     RETURN { decisions: [{ intent: UNKNOWN, decision: HANDOFF, reason: "extraction_failed",
                            no_reply: true, review_reasons: [e.message] }], reply: "" }
  decisions = decide(facts, { channel, thread, body, subject })
  IF 所有 d.no_reply: RETURN { decisions, reply: "" }
  reply = callModel(replyPrompt(case, facts, toReplyInput(decisions)))
  RETURN { decisions, reply, review_required: any(d.review_required) }
```

---

## §9 24 个用例的规则路径

| 用例 | 关键事实 | 规则路径 | 决策 |
|---|---|---|---|
| C01 | 缺 C4，签收 30 天内，C4 有库存 | §5 MISSING_PARTS → 有配件号 → 有库存 | RESHIP_PARTS |
| C02 | 划痕、有照片、要 50% | §5 DAMAGE → COSMETIC | OFFER_PARTS_OR_PARTIAL_REFUND（只给 15%） |
| C03 | 结构破损、订单 > 300 USD、“open a chargeback” | §2 纠纷原话核实 → §7 | HANDOFF（不回复） |
| C04 | “hurt his wrist… ER”、律师 | §2 安全原话核实（或关键词兜底）→ §3 | HANDOFF（安全） |
| C05 | 使用中电池故障、12 个月内、有视频 | §5 DEFECT_WARRANTY → 有证据 | WARRANTY_PARTS |
| C06 | 气压棒失效、签收超 12 个月 | §5 DEFECT_WARRANTY → 超保 | OUT_OF_WARRANTY |
| C07 | 改主意、未拆封、标准件 | §5 RETURN → UNOPENED | RETURN_ALLOWED（扣 12.95） |
| C08 | 改主意、已组装 | §5 RETURN → ASSEMBLED | DECLINE_RETURN |
| C09 | 换 beige、未拆箱、beige 有库存 | §5 EXCHANGE → 有库存 | EXCHANGE |
| C10 | 德语、未组装、大件 | §5 RETURN → UNASSEMBLED → oversize | RETURN_ALLOWED（扣 59） |
| C11 | 秋千、三人各 110 kg | §4 SKU（模型或兜底）→ §5 QA → MAX_LOAD 有规格 | ANSWER_QA |
| C12 | 凉亭、积雪过冬；模型多标 MAX_LOAD | §5 QA → MAX_LOAD 无规格且原文没问到 → 忽略 | ANSWER_QA |
| C13 | 餐桌、FSC 认证 | §5 QA → CERTIFICATION 为空且原文问到 | QA_UNKNOWN |
| C14 | 儿童车、7 岁 32 kg、首充 | §5 QA → AGE_RANGE、MAX_LOAD、BATTERY 均有规格 | ANSWER_QA |
| C15 | 法语、狗笼能否户外 | §4 法语别名匹配 DC-06 → §5 QA → WEATHER | ANSWER_QA |
| C16 | processing、下单 8 个工作日 | §5 SHIPPING_STATUS → 超 5 个工作日 | SHIPPING_DELAY_ESCALATE |
| C17 | in_transit、超 ETA 5 天 | §5 SHIPPING_STATUS → 超 3 天 | CARRIER_INVESTIGATION |
| C18 | 显示签收 1 天 | §5 NOT_RECEIVED → 不足 2 天 | WAIT_48H |
| C19 | 在途 + 要改地址 | §5 SHIPPING_STATUS + ADDRESS_CHANGE（已发货） | PROVIDE_ETA + ADDRESS_CHANGE_DENIED |
| C20 | 缺 B2 + 另一单在途超期 + 秋千是否防水 | §5 三个分支；§4 用诉求描述把 QA 缩小到 SW-01 | RESHIP_PARTS + CARRIER_INVESTIGATION + ANSWER_QA |
| C21 | eBay、第 2 个笼子网片断裂 | §4 平台关联订单 → §5.2 重复缺陷 → 笼具先发 | QUALITY_ESCALATION |
| C22 | 第 2 轮：买了 3 个、雪貂差点跑出 | §3 animal_safety → 安全提醒；§5.2；§6 已拒 15% | QUALITY_ESCALATION |
| C23 | 第 3 轮：拒取件换货、托盘生锈无照片 | §5.2 网片 + §5 DEFECT_WARRANTY 托盘缺照片；§6 纠正自行修理 | QUALITY_ESCALATION + ASK_INFO |
| C24 | 第 4 轮：3 个都坏、要全换、“ebay them” | §2 纠纷原话核实 → §7 交接单 | HANDOFF（不回复） |

## 已知限制

- 词表（人身风险、纠纷、商品别名、QA 主题）是正则，覆盖英文为主、德法常见说法；新语种或新说法需要补词。没命中时多数分支会退到“追问”或“人工复核”，不会静默放过，但 QA 主题词表漏词会让本该答不了的问题被当成多标而忽略，需要定期用真实工单回归。
- 订单、库存、平台关联在 demo 中是示意数据，生产中要接 OMS、商品库和平台接口。
- 规则覆盖的是这 24 个基线用例对应的政策；新政策要同时补规则、补用例、补评分检查。
