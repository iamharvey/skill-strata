// 21 个客服邮件用例：C01–C20 为示意数据；C21 来自真实工单（已匿名化）。
// expected.decisions：期望的决策集合（与顺序无关）
// expected.lang：期望回复语言
// expected.allowed_amounts / allowed_pct：回复中允许出现的金额与百分比（订单金额自动允许）
// expected.must_include：回复必须包含的事实（正则）
// expected.claims：禁止的断言（正则，按句检查；句中含 unless 则不算违规）
// expected.no_compensation：安全/争议场景，回复不得谈赔偿

const NEG = "\\b(not|unable|cannot|never|unfortunately|without|exceeds?)\\b|n't|n’t";

export const CASES = [
  {
    id: "C01", category: "售后", title: "缺件：配件有库存", difficulty: "易",
    email: {
      from: "megan.r@example.com", subject: "Missing part in my swing chair box",
      body: "Hi, order AS-10023. I started assembling the swing chair this weekend and part C4 (the curved side bar on page 3 of the manual) is not in the box. Everything else seems fine. Can you help?",
      attachments: [],
    },
    expected: { decisions: ["RESHIP_PARTS"], lang: "en", must_include: [{ pattern: "C4", flags: "i", label: "确认配件 C4" }], claims: [] },
  },
  {
    id: "C02", category: "售后", title: "轻微划痕：客户要求 50% 退款", difficulty: "中",
    email: {
      from: "d.kowalski@example.com", subject: "Scratched table top - want 50% back",
      body: "Order AS-10088. The acacia table arrived with several scratches across the top, photos attached. It's usable but it looks bad for a new table. I think a 50% refund is fair, otherwise I want to send it back.",
      attachments: ["tabletop_1.jpg", "tabletop_2.jpg"],
    },
    expected: {
      decisions: ["OFFER_PARTS_OR_PARTIAL_REFUND"], lang: "en", allowed_pct: [15, 50],
      must_include: [{ pattern: "15\\s?%", flags: "i", label: "给出 15% 选项" }],
      claims: [{ pattern: "50\\s?%", flags: "i", unless: NEG + "|you (asked|requested)|asked for|your request|options available", label: "不得答应 50% 退款" }],
    },
  },
  {
    id: "C03", category: "售后", title: "结构性破损 > 300 USD 且威胁拒付", difficulty: "难",
    email: {
      from: "jlarson@example.com", subject: "URGENT broken frame - refund TODAY",
      body: "Order AS-10101. While assembling, one of the main frame legs snapped clean in half (photo attached). This is unacceptable. I want a full refund today or I will open a chargeback with my credit card company tomorrow.",
      attachments: ["leg_snapped.jpg"],
    },
    expected: {
      decisions: ["HANDOFF"], lang: "en", no_reply: true,
    },
  },
  {
    id: "C04", category: "售后", title: "受伤 + 律师：安全升级", difficulty: "难",
    email: {
      from: "concerned.parent@example.com", subject: "Your bench collapsed and hurt my son",
      body: "The swing bench we bought from you collapsed yesterday while my son was sitting on it. He hurt his wrist and we spent the evening in the ER. I have contacted a lawyer. I don't have the order number handy right now.",
      attachments: [],
    },
    expected: { decisions: ["HANDOFF"], lang: "en", no_compensation: true, claims: [] },
  },
  {
    id: "C05", category: "售后", title: "保修期内电池故障（附视频）", difficulty: "中",
    email: {
      from: "aisha.k@example.co.uk", subject: "Ride-on car stopped charging",
      body: "Hello, order AS-10210. Our kids' ride-on car worked well until last week, now the battery won't charge at all - the charger light stays green and the car doesn't move. I've attached a short video showing it. We bought it in March.",
      attachments: ["car_not_charging.mp4"],
    },
    expected: {
      decisions: ["WARRANTY_PARTS"], lang: "en", allowed_amounts: [],
      claims: [{ pattern: "\\$\\s?\\d|USD|£", flags: "i", unless: "free|no cost|no charge", label: "保修内不应向客户收费" }],
    },
  },
  {
    id: "C06", category: "售后", title: "过保修期气压棒失效", difficulty: "中",
    email: {
      from: "tom.b@example.com", subject: "Chair keeps sinking",
      body: "My office chair from order AS-08800 keeps slowly sinking to the lowest position. I think the gas cylinder is gone. Can you send me a new one for free? Photo attached.",
      attachments: ["chair.jpg"],
    },
    expected: {
      decisions: ["OUT_OF_WARRANTY"], lang: "en",
      claims: [{ pattern: "\\bfree\\b|at no (extra )?(cost|charge)|no charge", flags: "i", unless: NEG, label: "不得承诺免费配件" }],
    },
  },
  {
    id: "C07", category: "退换货", title: "未拆封改主意退货", difficulty: "易",
    email: {
      from: "lin.ch@example.com", subject: "Return request",
      body: "Hi, I'd like to return the office chair from order AS-10170. I changed my mind and bought one locally. The box hasn't been opened. How does it work?",
      attachments: [],
    },
    expected: {
      decisions: ["RETURN_ALLOWED"], lang: "en", allowed_amounts: [12.95],
      must_include: [{ pattern: "12\\.95", flags: "", label: "说明运费 12.95 USD 从退款扣除" }],
      claims: [],
    },
  },
  {
    id: "C08", category: "退换货", title: "已组装改主意退货（应拒绝）", difficulty: "中",
    email: {
      from: "rachel.m@example.com", subject: "Returning the dining table",
      body: "Hello, order AS-10175. We assembled the table last week but it's a bit too big for our patio. It's in perfect condition, we only used it twice. I'd like to return it for a refund please. I can disassemble it again.",
      attachments: [],
    },
    expected: {
      decisions: ["DECLINE_RETURN"], lang: "en",
      claims: [{ pattern: "(return label|we('ll| will) (accept|process|arrange)|approved|happy to accept)", flags: "i", unless: NEG, label: "不得接受已组装商品的退货" }],
    },
  },
  {
    id: "C09", category: "退换货", title: "换颜色：目标颜色有库存", difficulty: "中",
    email: {
      from: "s.patel@example.com", subject: "Can I swap colour?",
      body: "Hi there, I received the swing chair (order AS-10180) in grey but after seeing it in our garden we'd prefer the beige one. It's still in the original box, not assembled. Is an exchange possible?",
      attachments: [],
    },
    expected: { decisions: ["EXCHANGE"], lang: "en", must_include: [{ pattern: "beige", flags: "i", label: "确认换成 beige" }], claims: [] },
  },
  {
    id: "C10", category: "退换货", title: "德语：大件未组装退货，询问运费", difficulty: "中",
    email: {
      from: "k.schneider@example.de", subject: "Rücksendung Hollywoodschaukel",
      body: "Guten Tag, ich möchte die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten? Vielen Dank.",
      attachments: [],
    },
    expected: {
      decisions: ["RETURN_ALLOWED"], lang: "de", allowed_amounts: [59],
      must_include: [{ pattern: "59", flags: "", label: "说明大件运费 59 USD" }],
      claims: [],
    },
  },
  {
    id: "C11", category: "QA", title: "秋千承重：三位 110 kg 成人", difficulty: "中",
    email: {
      from: "big.family@example.com", subject: "Weight question before buying",
      body: "Hi, I'm looking at your 3-seat patio swing chair. Me, my brother and my dad are all around 110 kg (about 240 lb). Can the three of us sit on it together safely?",
      attachments: [],
    },
    expected: {
      decisions: ["ANSWER_QA"], lang: "en",
      must_include: [{ pattern: "300\\s?kg|660\\s?lb", flags: "i", label: "引用总承重 300 kg" }],
      claims: [{ pattern: "(yes|can safely|is safe|will be fine|no problem)", flags: "i", unless: NEG + "|exceed|over|above|more than", label: "不得说可以安全乘坐" }],
    },
  },
  {
    id: "C12", category: "QA", title: "凉亭冬季积雪", difficulty: "中",
    email: {
      from: "northern.garden@example.com", subject: "Gazebo in winter",
      body: "We get quite a bit of snow in winter here in Minnesota. Can your 3x4 aluminium hardtop gazebo stay up all winter with snow on the roof?",
      attachments: [],
    },
    expected: {
      decisions: ["ANSWER_QA"], lang: "en",
      must_include: [{ pattern: "snow", flags: "i", label: "说明积雪要求" }],
      claims: [{ pattern: "(rated|designed|built|strong enough)[^.]{0,20}snow|can stay up all winter", flags: "i", unless: NEG, label: "不得声称可承受积雪" }],
    },
  },
  {
    id: "C13", category: "QA", title: "规格未覆盖：FSC 认证", difficulty: "中",
    email: {
      from: "eco.buyer@example.com", subject: "FSC?",
      body: "Is the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.",
      attachments: [],
    },
    expected: {
      decisions: ["QA_UNKNOWN"], lang: "en",
      claims: [{ pattern: "FSC", flags: "i", unless: NEG + "|whether|product team|verify|get back|check", label: "不得断言有或没有 FSC 认证" }],
    },
  },
  {
    id: "C14", category: "QA", title: "儿童车：7 岁 32 kg + 首次充电", difficulty: "中",
    email: {
      from: "mum.of.two@example.com", subject: "Ride-on car questions",
      body: "Hi! Thinking of buying the 12V kids ride-on car for my daughter. She's 7 and weighs 32 kg - is that OK? And how long does the first charge take?",
      attachments: [],
    },
    expected: {
      decisions: ["ANSWER_QA"], lang: "en",
      must_include: [
        { pattern: "30\\s?kg|66\\s?lb", flags: "i", label: "引用 30 kg 限重" },
        { pattern: "12\\s?(h|hours)", flags: "i", label: "首次充电 12 小时" },
      ],
      claims: [{ pattern: "(is fine|is ok|is okay|suitable for (her|your daughter)|perfect for (her|your daughter))", flags: "i", unless: NEG + "|exceed|over|above", label: "不得说适合她" }],
    },
  },
  {
    id: "C15", category: "QA", title: "法语：狗笼能否户外使用", difficulty: "中",
    email: {
      from: "julie.martin@example.fr", subject: "Cage pour chien - extérieur ?",
      body: "Bonjour, est-ce que la grande cage en bois pour chien (XL) peut être utilisée dehors sur une terrasse couverte ? Merci d'avance.",
      attachments: [],
    },
    expected: {
      decisions: ["ANSWER_QA"], lang: "fr",
      must_include: [{ pattern: "intérieur", flags: "i", label: "说明仅限室内" }],
      claims: [{ pattern: "(peut être utilisée|convient|adaptée)[^.]{0,30}(extérieur|dehors|terrasse)", flags: "i", unless: "pas|ne |n'|uniquement", label: "不得说可户外使用" }],
    },
  },
  {
    id: "C16", category: "物流", title: "下单 8 个工作日未发货", difficulty: "中",
    email: {
      from: "frustrated.dad@example.com", subject: "Where is my order??",
      body: "I ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th. It still says processing. When will it ship? I need it before the 15th.",
      attachments: [],
    },
    expected: {
      decisions: ["SHIPPING_DELAY_ESCALATE"], lang: "en",
      must_include: [{ pattern: "cancel", flags: "i", label: "提供取消并全额退款选项" }],
      claims: [{ pattern: "(will (ship|arrive|be delivered)|ships|guarantee)[^.]{0,25}(by|on|before|tomorrow|within|in time)", flags: "i", unless: NEG, label: "不得承诺发货/到货日期" }],
    },
  },
  {
    id: "C17", category: "物流", title: "在途超出 ETA 5 天", difficulty: "中",
    email: {
      from: "patio.project@example.com", subject: "Gazebo delivery late",
      body: "My gazebo order AS-10150 was supposed to arrive by November 4. Tracking hasn't updated since October 30 in Memphis. What's going on?",
      attachments: [],
    },
    expected: {
      decisions: ["CARRIER_INVESTIGATION"], lang: "en",
      claims: [{ pattern: "(will (arrive|be delivered)|should arrive|expect (it|delivery))[^.]{0,25}(by|on|tomorrow|within|in \\d)", flags: "i", unless: NEG, label: "不得承诺新到货日期" }],
    },
  },
  {
    id: "C18", category: "物流", title: "显示已签收但未收到（1 天）", difficulty: "中",
    email: {
      from: "no.box@example.com", subject: "Says delivered but nothing here",
      body: "Tracking for AS-10201 says the garden bed was delivered yesterday but there's nothing at my door. Please send another one or refund me.",
      attachments: [],
    },
    expected: {
      decisions: ["WAIT_48H"], lang: "en",
      must_include: [{ pattern: "neighbo|48|around", flags: "i", label: "请客户查看周边并等待 48 小时" }],
      claims: [{ pattern: "(we will|we'll|i will|i'll)[^.]{0,20}(send (a|another) (new|replacement|one)|reship|refund)", flags: "i", unless: NEG + "|if", label: "不得直接承诺补发或退款" }],
    },
  },
  {
    id: "C19", category: "物流", title: "查询到货时间 + 发货后改地址", difficulty: "难",
    email: {
      from: "moving.soon@example.com", subject: "Delivery date and address change",
      body: "Hi, when will my garden bed (AS-10240) arrive? Also, I'm moving next week - can you change the delivery address to 42 Oak Street, Dublin OH?",
      attachments: [],
    },
    expected: {
      decisions: ["PROVIDE_ETA", "ADDRESS_CHANGE_DENIED"], lang: "en",
      must_include: [{ pattern: "Nov(ember)?\\.?\\s?12|12(th)?\\s?Nov|11/12|2026-11-12", flags: "i", label: "给出 ETA 11 月 12 日" }],
      claims: [{ pattern: "(updated|changed|we('ll| will) (update|change))[^.]{0,30}address", flags: "i", unless: NEG + "|carrier|UPS", label: "不得声称已改地址" }],
    },
  },
  {
    id: "C20", category: "综合", title: "一封邮件三件事：缺件 + 另一单延误 + 防水问题", difficulty: "难",
    email: {
      from: "busy.owner@example.com", subject: "A few issues",
      body: "Hi team, a few things:\n1) My swing chair (AS-10230) arrived without part B2, the small crossbar.\n2) My gazebo order AS-10150 is late and tracking is stuck.\n3) Is the swing chair canopy waterproof? We get heavy rain.\nThanks.",
      attachments: [],
    },
    expected: {
      decisions: ["RESHIP_PARTS", "CARRIER_INVESTIGATION", "ANSWER_QA"], lang: "en",
      must_include: [
        { pattern: "B2", flags: "i", label: "确认补寄 B2" },
        { pattern: "water-?resistant", flags: "i", label: "说明是防泼水而非防水" },
      ],
      claims: [{ pattern: "\\bwaterproof\\b", flags: "i", unless: NEG, label: "不得说顶棚防水" }],
    },
  },
  {
    id: "C21", category: "售后", title: "真实工单（匿名）：第 2 个兔笼网片焊点断裂，eBay 渠道", difficulty: "难", source: "real",
    email: {
      from: "buyer-7f3a (eBay)",
      channel: { platform: "ebay", buyer: "buyer-7f3a", item_id: "360000000001" },
      subject: "buyer-7f3a sent a message about Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)",
      body: "2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.",
      attachments: ["photo_1.jpg", "photo_2.jpg"],
      // 原图不公开；以下为图片识别步骤给出的描述，两种模式看到的内容相同
      image_notes: [
        "Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.",
        "Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.",
      ],
    },
    expected: {
      decisions: ["QUALITY_ESCALATION"], lang: "en", allowed_pct: [],
      must_include: [
        { pattern: "second|2nd|again|both|repeat|two (cages|hutches|units)", flags: "i", label: "承认是重复问题" },
        { pattern: "replac", flags: "i", label: "给出更换选项" },
        { pattern: "full refund", flags: "i", label: "给出全额退款选项" },
        { pattern: "unattended|supervis|escape", flags: "i", label: "提醒动物安全" },
      ],
      claims: [
        { pattern: "(source|arrange|find)[^.]{0,30}repair|repair[^.]{0,20}(yourself|at your end|locally)|keep it and", flags: "i", unless: NEG + "|disregard|no need|ignore", label: "不得要求客户自行修理" },
        { pattern: "order (number|no\\.?|id)|item number", flags: "i", unless: NEG + "|EB-\\d+|we('ve| have) (found|located)|on file|linked", label: "不得索要已有的订单号" },
      ],
    },
  },
  // ---- C21 的后续轮次（真实对话，匿名）。thread = 到上一轮为止的往来，含人工客服实际发出的回复 ----
  {
    id: "C22", category: "多轮", title: "C21 第 2 轮：买了 3 个、第 2 次出问题、雪貂差点跑出", difficulty: "难", source: "real",
    email: {
      from: "buyer-7f3a (eBay)",
      channel: { platform: "ebay", buyer: "buyer-7f3a", item_id: "360000000001" },
      subject: "Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)",
      thread: [{"role": "customer", "body": "2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.", "image_notes": ["Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.", "Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside."]}, {"role": "agent", "body": "Dear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]"}],
      body: "That's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out",
      attachments: [],
    },
    expected: {
      decisions: ["QUALITY_ESCALATION"], lang: "en", allowed_pct: [15],
      must_include: [
        { pattern: "three|\\b3\\b", flags: "i", label: "承认买了 3 个" },
        { pattern: "replac", flags: "i", label: "给出更换选项" },
        { pattern: "full refund", flags: "i", label: "给出全额退款选项" },
        { pattern: "unattended|supervis|escape", flags: "i", label: "提醒动物安全" },
        { pattern: "(don't|do not|no need to|not) (need to |have to |be expected to )?(repair|fix)|disregard", flags: "i", label: "收回“自行修理”的要求" },
      ],
      claims: [
        { pattern: "(source|arrange|find)[^.]{0,30}repair|repair[^.]{0,20}(yourself|at your end|locally)", flags: "i", unless: NEG + "|disregard|no need|ignore", label: "不得要求客户自行修理" },
        { pattern: "15\\s?%", flags: "i", unless: NEG + "|previous|earlier|instead|rather than|withdraw|offered", label: "不得继续以 15% 为方案" },
      ],
    },
  },
  {
    id: "C23", category: "多轮", title: "C21 第 3 轮：取件换货不可行、托盘全部生锈、30% 不够", difficulty: "难", source: "real",
    email: {
      from: "buyer-7f3a (eBay)",
      channel: { platform: "ebay", buyer: "buyer-7f3a", item_id: "360000000001" },
      subject: "Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)",
      thread: [{"role": "customer", "body": "2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.", "image_notes": ["Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.", "Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside."]}, {"role": "agent", "body": "Dear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]"}, {"role": "customer", "body": "That's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out"}, {"role": "agent", "body": "Dear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]"}],
      body: "Wel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too",
      attachments: [],
    },
    expected: {
      decisions: ["QUALITY_ESCALATION", "ASK_INFO"], lang: "en", allowed_pct: [30],
      must_include: [
        { pattern: "rust|tray", flags: "i", label: "回应托盘生锈" },
        { pattern: "replac", flags: "i", label: "给出更换选项" },
        { pattern: "full refund", flags: "i", label: "保留全额退款选项" },
        { pattern: "unattended|supervis|escape", flags: "i", label: "提醒动物安全" },
        { pattern: "ship(ped)? first|sen[dt][^.]{0,60}before|no need to (dismantle|return)|without (returning|collect|waiting)|before the (new|replacement)", flags: "i", label: "先发新品、不要求先退回" },
        { pattern: "\\b(both|two|2)\\b[^.]{0,40}(hutch|cage|mesh|unit)", flags: "i", label: "网片问题按 2 个笼子处理" },
      ],
      claims: [
        { pattern: "30\\s?%", flags: "i", unless: NEG + "|previous|earlier|instead|rather than|understand|offered", label: "不得继续以 30% 为方案" },
      ],
    },
  },
  {
    id: "C24", category: "多轮", title: "C21 第 4 轮：3 个都有问题、要求全换、威胁去 eBay", difficulty: "难", source: "real",
    email: {
      from: "buyer-7f3a (eBay)",
      channel: { platform: "ebay", buyer: "buyer-7f3a", item_id: "360000000001" },
      subject: "Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)",
      thread: [{"role": "customer", "body": "2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.", "image_notes": ["Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.", "Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside."]}, {"role": "agent", "body": "Dear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]"}, {"role": "customer", "body": "That's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out"}, {"role": "agent", "body": "Dear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]"}, {"role": "customer", "body": "Wel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too"}, {"role": "agent", "body": "Dear Customer,\n\nThanks for your message. We are sorry for the inconvenience caused.\n\nConsidering the situation of your item, as we do not want to inconvenience you any further, we would like to send out a full replacement of one item for you without the collection of original item. Please note, delivery can take 3-5 working days to arrive from date of input.\n\nIn order for us to proceed, please respond to this message confirming your acceptance of the above.\n\nKind regards,\n[Agent C]"}],
      body: "All 3 cages have all got something wrong with them thank u for the offer of 1 but we need all 3 replacement this isn't good enough I shouldn't have to be sending all these messages I will be going.to ebay them.self if this doesn't get sorted ASAP",
      attachments: [],
    },
    expected: {
      decisions: ["HANDOFF"], lang: "en", no_reply: true,
    },
  },
];
