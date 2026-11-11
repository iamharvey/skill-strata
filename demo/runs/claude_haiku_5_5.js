export default {
 "meta": {
  "provider": "perplexity-agent",
  "model": "claude_haiku_5_5",
  "label": "claude_haiku_5_5 真实 API v5 · 2026-11-11（不承诺批次/质检、不暴露内部流程、纠纷直接转人工）",
  "note": "通过 Perplexity 模型接口直连 claude_haiku_5_5，单次运行，默认采样参数（max_tokens 8000）。v5 按业务反馈修改：换货不承诺新批次/质检；回复不提质量团队、缺陷登记、找开发核对等内部流程；拒付/平台纠纷直接转人工、不自动回复（C03、C24）。新增检查同样适用两种模式。输出无法解析的用例按 0 分计。",
  "created": "2026-11-11T10:33:58.357Z",
  "cases": 24
 },
 "summary": {
  "baseline": {
   "n": 24,
   "score": 0.9344696969696971,
   "fullPass": 20,
   "decision": 0.875,
   "handoff": 0.9583333333333334,
   "fact": 0.90625,
   "lang": 1,
   "violations": 2,
   "byCategory": {
    "售后": 0.9285714285714286,
    "退换货": 1,
    "QA": 1,
    "物流": 1,
    "综合": 1,
    "多轮": 0.6424242424242425
   }
  },
  "skill": {
   "n": 24,
   "score": 1,
   "fullPass": 24,
   "decision": 1,
   "handoff": 1,
   "fact": 1,
   "lang": 1,
   "violations": 0,
   "byCategory": {
    "售后": 1,
    "退换货": 1,
    "QA": 1,
    "物流": 1,
    "综合": 1,
    "多轮": 1
   }
  }
 },
 "results": [
  {
   "mode": "baseline",
   "caseId": "C01",
   "decisions": [
    "RESHIP_PARTS"
   ],
   "detail": [
    {
     "decision": "RESHIP_PARTS",
     "order_id": "AS-10023",
     "reason": "Missing part C4 reported 9 days after delivery (within 30 days). C4 is in stock (30 units), so the part is reshipped."
    }
   ],
   "reply": "Dear Megan,\n\nThank you for contacting us, and I'm sorry that part C4 (the curved side bar on page 3 of the manual) was missing from your 3-Seat Patio Swing Chair, order AS-10023.\n\nWe will reship part C4 to you at no cost. Please reply to this email if you have any questions while you wait for the part.\n\nBest regards,\nCustomer Service",
   "trace": [
    {
     "id": "C01:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: megan.r@example.com\nSubject: Missing part in my swing chair box\nAttachments: none\n\nHi, order AS-10023. I started assembling the swing chair this weekend and part C4 (the curved side bar on page 3 of the manual) is not in the box. Everything else seems fine. Can you help?\n\"\"\"\n\nOrder records found:\n- AS-10023: {\"sku\":\"SW-01\",\"amount_usd\":189,\"order_date\":\"2026-10-22\",\"status\":\"delivered\",\"delivered\":\"2026-11-01\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "```json\n{\"decisions\":[{\"decision\":\"RESHIP_PARTS\",\"order_id\":\"AS-10023\",\"reason\":\"Missing part C4 reported 9 days after delivery (within 30 days). C4 is in stock (30 units), so the part is reshipped.\"}],\"reply\":\"Dear Megan,\\n\\nThank you for contacting us, and I'm sorry that part C4 (the curved side bar on page 3 of the manual) was missing from your 3-Seat Patio Swing Chair, order AS-10023.\\n\\nWe will reship part C4 to you at no cost. Please reply to this email if you have any questions while you wait for the part.\\n\\nBest regards,\\nCustomer Service\"}\n```",
     "ms": 1
    }
   ],
   "score": {
    "caseId": "C01",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 RESHIP_PARTS；实际 RESHIP_PARTS"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "确认配件 C4",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C01",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Assembly of the swing chair was started this weekend",
     "Part C4 (curved side bar, page 3 of manual) is not in the box",
     "Everything else appears fine"
    ],
    "intents": [
     {
      "type": "MISSING_PARTS",
      "order_id": "AS-10023",
      "sku": "SW-01",
      "part_codes": [
       "C4"
      ],
      "severity": "UNKNOWN",
      "component": "curved side bar",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNASSEMBLED",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Help obtaining the missing part C4"
     }
    ]
   },
   "decisions": [
    "RESHIP_PARTS"
   ],
   "detail": [
    {
     "intent": "MISSING_PARTS",
     "order_id": "AS-10023",
     "decision": "RESHIP_PARTS",
     "parts": [
      "C4"
     ],
     "product": "3-Seat Patio Swing Chair"
    }
   ],
   "reply": "Dear Megan,\n\nI'm sorry to hear that part C4 was missing from your swing chair box. We will send you a replacement for part C4 for your 3-Seat Patio Swing Chair (order AS-10023). The tracking number will follow by email.\n\nThank you for your patience, and we hope you enjoy assembling your swing chair.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C01:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: megan.r@example.com\nSubject: Missing part in my swing chair box\nAttachments: none\n\nHi, order AS-10023. I started assembling the swing chair this weekend and part C4 (the curved side bar on page 3 of the manual) is not in the box. Everything else seems fine. Can you help?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Assembly of the swing chair was started this weekend\",\n    \"Part C4 (curved side bar, page 3 of manual) is not in the box\",\n    \"Everything else appears fine\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"MISSING_PARTS\",\n      \"order_id\": \"AS-10023\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [\"C4\"],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"curved side bar\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNASSEMBLED\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Help obtaining the missing part C4\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C01:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Assembly of the swing chair was started this weekend\",\n    \"Part C4 (curved side bar, page 3 of manual) is not in the box\",\n    \"Everything else appears fine\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"MISSING_PARTS\",\n      \"order_id\": \"AS-10023\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [\n        \"C4\"\n      ],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"curved side bar\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNASSEMBLED\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Help obtaining the missing part C4\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10023\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"C4\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C01:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: megan.r@example.com\nSubject: Missing part in my swing chair box\nAttachments: none\n\nHi, order AS-10023. I started assembling the swing chair this weekend and part C4 (the curved side bar on page 3 of the manual) is not in the box. Everything else seems fine. Can you help?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10023\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"C4\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Megan,\\n\\nI'm sorry to hear that part C4 was missing from your swing chair box. We will send you a replacement for part C4 for your 3-Seat Patio Swing Chair (order AS-10023). The tracking number will follow by email.\\n\\nThank you for your patience, and we hope you enjoy assembling your swing chair.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C01",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 RESHIP_PARTS；实际 RESHIP_PARTS"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "确认配件 C4",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C02",
   "decisions": [
    "OFFER_PARTS_OR_PARTIAL_REFUND"
   ],
   "detail": [
    {
     "decision": "OFFER_PARTS_OR_PARTIAL_REFUND",
     "order_id": "AS-10088",
     "reason": "Scratches on the tabletop are cosmetic (table remains usable) with photos provided. Policy allows a replacement part or a 15% partial refund only; the requested 50% refund is not permitted."
    }
   ],
   "reply": "Dear Mr. Kowalski,\n\nThank you for your email and for the photos of the scratches on the acacia table top (order AS-10088). I'm sorry the table arrived with these marks.\n\nFrom what you describe and the photos, the scratches are cosmetic: the table is still usable. For cosmetic damage, we can offer one of the following:\n\n1. A replacement part for the damaged top, sent to you free of charge.\n2. A 15% partial refund on the order, which is $19.35 of the $129.00 order amount.\n\nI'm not able to offer a 50% refund for cosmetic damage. Please let me know which of the two options you would prefer, and I will arrange it for you.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C02:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: d.kowalski@example.com\nSubject: Scratched table top - want 50% back\nAttachments: tabletop_1.jpg, tabletop_2.jpg\n\nOrder AS-10088. The acacia table arrived with several scratches across the top, photos attached. It's usable but it looks bad for a new table. I think a 50% refund is fair, otherwise I want to send it back.\n\"\"\"\n\nOrder records found:\n- AS-10088: {\"sku\":\"PT-02\",\"amount_usd\":129,\"order_date\":\"2026-10-25\",\"status\":\"delivered\",\"delivered\":\"2026-11-03\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"OFFER_PARTS_OR_PARTIAL_REFUND\",\"order_id\":\"AS-10088\",\"reason\":\"Scratches on the tabletop are cosmetic (table remains usable) with photos provided. Policy allows a replacement part or a 15% partial refund only; the requested 50% refund is not permitted.\"}],\"reply\":\"Dear Mr. Kowalski,\\n\\nThank you for your email and for the photos of the scratches on the acacia table top (order AS-10088). I'm sorry the table arrived with these marks.\\n\\nFrom what you describe and the photos, the scratches are cosmetic: the table is still usable. For cosmetic damage, we can offer one of the following:\\n\\n1. A replacement part for the damaged top, sent to you free of charge.\\n2. A 15% partial refund on the order, which is $19.35 of the $129.00 order amount.\\n\\nI'm not able to offer a 50% refund for cosmetic damage. Please let me know which of the two options you would prefer, and I will arrange it for you.\\n\\nKind regards,\\nCustomer Service\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C02",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 OFFER_PARTS_OR_PARTIAL_REFUND；实际 OFFER_PARTS_OR_PARTIAL_REFUND"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "给出 15% 选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得答应 50% 退款",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": false,
      "detail": "出现 19.35 USD"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 0.9,
    "pass": false,
    "violations": 1
   }
  },
  {
   "mode": "skill",
   "caseId": "C02",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": "PARTIAL_REFUND",
    "info_already_given": [
     "Acacia table arrived with several scratches across the top",
     "Table is usable",
     "Photos attached (tabletop_1.jpg, tabletop_2.jpg)"
    ],
    "intents": [
     {
      "type": "DAMAGE",
      "order_id": "AS-10088",
      "sku": "PT-02",
      "part_codes": [],
      "severity": "COSMETIC",
      "component": "table top",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "50% refund"
     }
    ]
   },
   "decisions": [
    "OFFER_PARTS_OR_PARTIAL_REFUND"
   ],
   "detail": [
    {
     "intent": "DAMAGE",
     "order_id": "AS-10088",
     "decision": "OFFER_PARTS_OR_PARTIAL_REFUND",
     "options": [
      "replacement part",
      "15% partial refund"
     ],
     "allowed_pct": [
      15
     ]
    }
   ],
   "reply": "Dear Mr. Kowalski,\n\nThank you for sending the photos of the scratches on your acacia table (order AS-10088); I'm sorry the table arrived in this condition.\n\nWe can offer you one of the following options:\n\n1. A replacement part for the damaged top.\n2. A 15% partial refund.\n\nPlease let us know which option you would prefer. We are unable to offer a 50% refund.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C02:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: d.kowalski@example.com\nSubject: Scratched table top - want 50% back\nAttachments: tabletop_1.jpg, tabletop_2.jpg\n\nOrder AS-10088. The acacia table arrived with several scratches across the top, photos attached. It's usable but it looks bad for a new table. I think a 50% refund is fair, otherwise I want to send it back.\n\"\"\"",
     "response": "{\"language\":\"en\",\"safety_risk\":false,\"animal_safety\":false,\"dispute\":false,\"dispute_type\":null,\"previous_offers\":[],\"customer_choice\":\"PARTIAL_REFUND\",\"info_already_given\":[\"Acacia table arrived with several scratches across the top\",\"Table is usable\",\"Photos attached (tabletop_1.jpg, tabletop_2.jpg)\"],\"intents\":[{\"type\":\"DAMAGE\",\"order_id\":\"AS-10088\",\"sku\":\"PT-02\",\"part_codes\":[],\"severity\":\"COSMETIC\",\"component\":\"table top\",\"repeat_issue\":false,\"units_affected\":1,\"item_condition\":\"UNKNOWN\",\"reason\":\"DEFECT\",\"target_variant\":null,\"qa_topics\":[],\"has_photo\":true,\"has_video\":false,\"customer_demand\":\"50% refund\"}]}",
     "ms": 0
    },
    {
     "id": "C02:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"PARTIAL_REFUND\",\n  \"info_already_given\": [\n    \"Acacia table arrived with several scratches across the top\",\n    \"Table is usable\",\n    \"Photos attached (tabletop_1.jpg, tabletop_2.jpg)\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": \"AS-10088\",\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": \"COSMETIC\",\n      \"component\": \"table top\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"50% refund\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DAMAGE\",\n    \"order_id\": \"AS-10088\",\n    \"decision\": \"OFFER_PARTS_OR_PARTIAL_REFUND\",\n    \"options\": [\n      \"replacement part\",\n      \"15% partial refund\"\n    ],\n    \"allowed_pct\": [\n      15\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C02:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: d.kowalski@example.com\nSubject: Scratched table top - want 50% back\nAttachments: tabletop_1.jpg, tabletop_2.jpg\n\nOrder AS-10088. The acacia table arrived with several scratches across the top, photos attached. It's usable but it looks bad for a new table. I think a 50% refund is fair, otherwise I want to send it back.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DAMAGE\",\n    \"order_id\": \"AS-10088\",\n    \"decision\": \"OFFER_PARTS_OR_PARTIAL_REFUND\",\n    \"options\": [\n      \"replacement part\",\n      \"15% partial refund\"\n    ],\n    \"allowed_pct\": [\n      15\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Mr. Kowalski,\\n\\nThank you for sending the photos of the scratches on your acacia table (order AS-10088); I'm sorry the table arrived in this condition.\\n\\nWe can offer you one of the following options:\\n\\n1. A replacement part for the damaged top.\\n2. A 15% partial refund.\\n\\nPlease let us know which option you would prefer. We are unable to offer a 50% refund.\\n\\nBest regards,\\nCustomer Care Team\"}",
     "ms": 1
    }
   ],
   "score": {
    "caseId": "C02",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 OFFER_PARTS_OR_PARTIAL_REFUND；实际 OFFER_PARTS_OR_PARTIAL_REFUND"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "给出 15% 选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得答应 50% 退款",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C03",
   "decisions": [
    "HANDOFF"
   ],
   "detail": [
    {
     "decision": "HANDOFF",
     "order_id": "AS-10101",
     "reason": "Customer threatens a chargeback (payment dispute), which requires priority handoff with no automatic reply. Also a structural failure (snapped main frame leg) on an order over 300 USD, which requires specialist approval before any replacement or full refund."
    }
   ],
   "reply": "",
   "trace": [
    {
     "id": "C03:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: jlarson@example.com\nSubject: URGENT broken frame - refund TODAY\nAttachments: leg_snapped.jpg\n\nOrder AS-10101. While assembling, one of the main frame legs snapped clean in half (photo attached). This is unacceptable. I want a full refund today or I will open a chargeback with my credit card company tomorrow.\n\"\"\"\n\nOrder records found:\n- AS-10101: {\"sku\":\"SW-01\",\"amount_usd\":459,\"order_date\":\"2026-10-26\",\"status\":\"delivered\",\"delivered\":\"2026-11-05\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"HANDOFF\",\"order_id\":\"AS-10101\",\"reason\":\"Customer threatens a chargeback (payment dispute), which requires priority handoff with no automatic reply. Also a structural failure (snapped main frame leg) on an order over 300 USD, which requires specialist approval before any replacement or full refund.\"}],\"reply\":\"\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C03",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 HANDOFF；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "应转人工"
     },
     {
      "key": "fact",
      "label": "不自动回复（直接转人工）",
      "pass": true,
      "detail": "未回复"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C03",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": true,
    "dispute_type": "CHARGEBACK",
    "previous_offers": [],
    "customer_choice": "FULL_REFUND",
    "info_already_given": [
     "One of the main frame legs snapped clean in half while assembling the item",
     "Photo of the snapped leg attached (leg_snapped.jpg)"
    ],
    "intents": [
     {
      "type": "DAMAGE",
      "order_id": "AS-10101",
      "sku": null,
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "main frame leg",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNASSEMBLED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "Full refund today"
     }
    ]
   },
   "decisions": [
    "HANDOFF"
   ],
   "detail": [
    {
     "intent": "DISPUTE",
     "decision": "HANDOFF",
     "reason": "chargeback_or_dispute",
     "no_reply": true,
     "dispute_type": "CHARGEBACK",
     "priority": false,
     "contact_count": 1,
     "customer_requests": [
      "full_refund",
      "full refund today"
     ],
     "case_facts": [
      "1 unit(s): main frame leg"
     ],
     "for_specialist": [
      {
       "intent": "DAMAGE",
       "order_id": "AS-10101",
       "decision": "HANDOFF",
       "reason": "needs_approval"
      }
     ]
    }
   ],
   "reply": "",
   "trace": [
    {
     "id": "C03:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: jlarson@example.com\nSubject: URGENT broken frame - refund TODAY\nAttachments: leg_snapped.jpg\n\nOrder AS-10101. While assembling, one of the main frame legs snapped clean in half (photo attached). This is unacceptable. I want a full refund today or I will open a chargeback with my credit card company tomorrow.\n\"\"\"",
     "response": "```json\n{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": true,\n  \"dispute_type\": \"CHARGEBACK\",\n  \"previous_offers\": [],\n  \"customer_choice\": \"FULL_REFUND\",\n  \"info_already_given\": [\n    \"One of the main frame legs snapped clean in half while assembling the item\",\n    \"Photo of the snapped leg attached (leg_snapped.jpg)\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": \"AS-10101\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"main frame leg\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNASSEMBLED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Full refund today\"\n    }\n  ]\n}\n```",
     "ms": 0
    },
    {
     "id": "C03:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": true,\n  \"dispute_type\": \"CHARGEBACK\",\n  \"previous_offers\": [],\n  \"customer_choice\": \"FULL_REFUND\",\n  \"info_already_given\": [\n    \"One of the main frame legs snapped clean in half while assembling the item\",\n    \"Photo of the snapped leg attached (leg_snapped.jpg)\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": \"AS-10101\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"main frame leg\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNASSEMBLED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Full refund today\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DISPUTE\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"chargeback_or_dispute\",\n    \"no_reply\": true,\n    \"dispute_type\": \"CHARGEBACK\",\n    \"priority\": false,\n    \"contact_count\": 1,\n    \"customer_requests\": [\n      \"full_refund\",\n      \"full refund today\"\n    ],\n    \"case_facts\": [\n      \"1 unit(s): main frame leg\"\n    ],\n    \"for_specialist\": [\n      {\n        \"intent\": \"DAMAGE\",\n        \"order_id\": \"AS-10101\",\n        \"decision\": \"HANDOFF\",\n        \"reason\": \"needs_approval\"\n      }\n    ]\n  }\n]",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C03",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 HANDOFF；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "应转人工"
     },
     {
      "key": "fact",
      "label": "不自动回复（直接转人工）",
      "pass": true,
      "detail": "未回复"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C04",
   "decisions": [
    "HANDOFF"
   ],
   "detail": [
    {
     "decision": "HANDOFF",
     "order_id": null,
     "reason": "Customer reports a product collapse that injured a child (wrist injury, ER visit) and says they have contacted a lawyer. Injury, safety hazard and lawyer involvement require immediate handoff. No order number is in the email or order records, so none is requested."
    }
   ],
   "reply": "Dear Customer,\n\nWe are very sorry to hear that your son was hurt and that his evening ended in the emergency room. We hope he is recovering well.\n\nWe have passed your message to a senior specialist, who will contact you as soon as possible to follow up on this matter.\n\nKind regards,\nCustomer Service Team",
   "trace": [
    {
     "id": "C04:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: concerned.parent@example.com\nSubject: Your bench collapsed and hurt my son\nAttachments: none\n\nThe swing bench we bought from you collapsed yesterday while my son was sitting on it. He hurt his wrist and we spent the evening in the ER. I have contacted a lawyer. I don't have the order number handy right now.\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"HANDOFF\",\"order_id\":null,\"reason\":\"Customer reports a product collapse that injured a child (wrist injury, ER visit) and says they have contacted a lawyer. Injury, safety hazard and lawyer involvement require immediate handoff. No order number is in the email or order records, so none is requested.\"}],\"reply\":\"Dear Customer,\\n\\nWe are very sorry to hear that your son was hurt and that his evening ended in the emergency room. We hope he is recovering well.\\n\\nWe have passed your message to a senior specialist, who will contact you as soon as possible to follow up on this matter.\\n\\nKind regards,\\nCustomer Service Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C04",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 HANDOFF；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "应转人工"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "safety",
      "label": "安全场景不谈赔偿",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C04",
   "facts": {
    "language": "en",
    "safety_risk": true,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Swing bench collapsed the day before the email while their son was sitting on it",
     "Son hurt his wrist and the family spent the evening in the ER",
     "Customer has contacted a lawyer",
     "Customer does not have the order number available right now"
    ],
    "intents": [
     {
      "type": "DEFECT_WARRANTY",
      "order_id": null,
      "sku": "SW-01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "USED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": null
     }
    ]
   },
   "decisions": [
    "HANDOFF"
   ],
   "detail": [
    {
     "intent": "SAFETY",
     "decision": "HANDOFF",
     "reason": "safety"
    }
   ],
   "reply": "Dear Parent,\n\nI am very sorry to hear that your son was injured when the swing bench collapsed, and I hope his wrist is recovering well.\n\nYour concern has been passed to a specialist who will contact you as soon as possible to follow up on your case.\n\nPlease keep the bench and its packaging in a safe place, as the specialist may ask about them. If you can locate the order number at any point, please include it in your reply so we can locate your purchase faster.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C04:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: concerned.parent@example.com\nSubject: Your bench collapsed and hurt my son\nAttachments: none\n\nThe swing bench we bought from you collapsed yesterday while my son was sitting on it. He hurt his wrist and we spent the evening in the ER. I have contacted a lawyer. I don't have the order number handy right now.\n\"\"\"",
     "response": "```json\n{\n  \"language\": \"en\",\n  \"safety_risk\": true,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Swing bench collapsed the day before the email while their son was sitting on it\",\n    \"Son hurt his wrist and the family spent the evening in the ER\",\n    \"Customer has contacted a lawyer\",\n    \"Customer does not have the order number available right now\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}\n```",
     "ms": 0
    },
    {
     "id": "C04:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": true,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Swing bench collapsed the day before the email while their son was sitting on it\",\n    \"Son hurt his wrist and the family spent the evening in the ER\",\n    \"Customer has contacted a lawyer\",\n    \"Customer does not have the order number available right now\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C04:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: concerned.parent@example.com\nSubject: Your bench collapsed and hurt my son\nAttachments: none\n\nThe swing bench we bought from you collapsed yesterday while my son was sitting on it. He hurt his wrist and we spent the evening in the ER. I have contacted a lawyer. I don't have the order number handy right now.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Parent,\\n\\nI am very sorry to hear that your son was injured when the swing bench collapsed, and I hope his wrist is recovering well.\\n\\nYour concern has been passed to a specialist who will contact you as soon as possible to follow up on your case.\\n\\nPlease keep the bench and its packaging in a safe place, as the specialist may ask about them. If you can locate the order number at any point, please include it in your reply so we can locate your purchase faster.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C04",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 HANDOFF；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "应转人工"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "safety",
      "label": "安全场景不谈赔偿",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C05",
   "decisions": [
    "WARRANTY_PARTS"
   ],
   "detail": [
    {
     "decision": "WARRANTY_PARTS",
     "order_id": "AS-10210",
     "reason": "Quality defect (battery not charging) reported about 8 months after delivery on 2026-03-12, within the 12-month warranty, with a video attached. Send warranty replacement parts free of charge."
    }
   ],
   "reply": "Dear Aisha,\n\nThank you for your email and the video. I'm sorry to hear the ride-on car has stopped charging, especially after it worked well for your children until recently.\n\nYour order AS-10210 was delivered on 12 March 2026, so it is still within our 12-month warranty. The battery and charger are covered, so we will send you replacement warranty parts free of charge. You don't need to pay for the parts or the replacement.\n\nIf you have any questions while the replacement is on its way, just reply to this email.\n\nKind regards,\nCustomer Service Team",
   "trace": [
    {
     "id": "C05:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: aisha.k@example.co.uk\nSubject: Ride-on car stopped charging\nAttachments: car_not_charging.mp4\n\nHello, order AS-10210. Our kids' ride-on car worked well until last week, now the battery won't charge at all - the charger light stays green and the car doesn't move. I've attached a short video showing it. We bought it in March.\n\"\"\"\n\nOrder records found:\n- AS-10210: {\"sku\":\"KB-04\",\"amount_usd\":239,\"order_date\":\"2026-03-05\",\"status\":\"delivered\",\"delivered\":\"2026-03-12\",\"country\":\"UK\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "```json\n{\"decisions\":[{\"decision\":\"WARRANTY_PARTS\",\"order_id\":\"AS-10210\",\"reason\":\"Quality defect (battery not charging) reported about 8 months after delivery on 2026-03-12, within the 12-month warranty, with a video attached. Send warranty replacement parts free of charge.\"}],\"reply\":\"Dear Aisha,\\n\\nThank you for your email and the video. I'm sorry to hear the ride-on car has stopped charging, especially after it worked well for your children until recently.\\n\\nYour order AS-10210 was delivered on 12 March 2026, so it is still within our 12-month warranty. The battery and charger are covered, so we will send you replacement warranty parts free of charge. You don't need to pay for the parts or the replacement.\\n\\nIf you have any questions while the replacement is on its way, just reply to this email.\\n\\nKind regards,\\nCustomer Service Team\"}\n```",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C05",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 WARRANTY_PARTS；实际 WARRANTY_PARTS"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "claim",
      "label": "保修内不应向客户收费",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C05",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Ride-on car worked well until last week",
     "Battery won't charge at all",
     "Charger light stays green and the car doesn't move",
     "Product was bought in March",
     "Short video attached showing the issue"
    ],
    "intents": [
     {
      "type": "DEFECT_WARRANTY",
      "order_id": "AS-10210",
      "sku": "KB-04",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": "battery",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "USED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": true,
      "customer_demand": null
     }
    ]
   },
   "decisions": [
    "WARRANTY_PARTS"
   ],
   "detail": [
    {
     "intent": "DEFECT_WARRANTY",
     "order_id": "AS-10210",
     "decision": "WARRANTY_PARTS",
     "note": "Free warranty replacement parts.",
     "product": "12V Kids Ride-On Car"
    }
   ],
   "reply": "Dear Aisha,\n\nThank you for your email and the video, and I'm sorry to hear the ride-on car has stopped charging.\n\nSince your order AS-10210 for the 12V Kids Ride-On Car is covered by our warranty, we will send you a free replacement part at no cost to you. The part details will follow in a separate email.\n\nIf you have any questions in the meantime, just reply to this email.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C05:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: aisha.k@example.co.uk\nSubject: Ride-on car stopped charging\nAttachments: car_not_charging.mp4\n\nHello, order AS-10210. Our kids' ride-on car worked well until last week, now the battery won't charge at all - the charger light stays green and the car doesn't move. I've attached a short video showing it. We bought it in March.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Ride-on car worked well until last week\",\n    \"Battery won't charge at all\",\n    \"Charger light stays green and the car doesn't move\",\n    \"Product was bought in March\",\n    \"Short video attached showing the issue\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": \"AS-10210\",\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"battery\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": true,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C05:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Ride-on car worked well until last week\",\n    \"Battery won't charge at all\",\n    \"Charger light stays green and the car doesn't move\",\n    \"Product was bought in March\",\n    \"Short video attached showing the issue\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": \"AS-10210\",\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"battery\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": true,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-10210\",\n    \"decision\": \"WARRANTY_PARTS\",\n    \"note\": \"Free warranty replacement parts.\",\n    \"product\": \"12V Kids Ride-On Car\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C05:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: aisha.k@example.co.uk\nSubject: Ride-on car stopped charging\nAttachments: car_not_charging.mp4\n\nHello, order AS-10210. Our kids' ride-on car worked well until last week, now the battery won't charge at all - the charger light stays green and the car doesn't move. I've attached a short video showing it. We bought it in March.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-10210\",\n    \"decision\": \"WARRANTY_PARTS\",\n    \"note\": \"Free warranty replacement parts.\",\n    \"product\": \"12V Kids Ride-On Car\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Aisha,\\n\\nThank you for your email and the video, and I'm sorry to hear the ride-on car has stopped charging.\\n\\nSince your order AS-10210 for the 12V Kids Ride-On Car is covered by our warranty, we will send you a free replacement part at no cost to you. The part details will follow in a separate email.\\n\\nIf you have any questions in the meantime, just reply to this email.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C05",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 WARRANTY_PARTS；实际 WARRANTY_PARTS"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "claim",
      "label": "保修内不应向客户收费",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C06",
   "decisions": [
    "OUT_OF_WARRANTY"
   ],
   "detail": [
    {
     "decision": "OUT_OF_WARRANTY",
     "order_id": "AS-08800",
     "reason": "Chair delivered 2025-08-01; 12-month warranty ended 2026-08-01. Gas lift failure is past warranty, so parts can be purchased and a specialist will send a quote. No free replacement."
    }
   ],
   "reply": "Hello Tom,\n\nThank you for your email and the photo. I'm sorry to hear your office chair (order AS-08800) keeps sinking to the lowest position. That is consistent with a failed gas lift cylinder.\n\nYour chair was delivered on 1 August 2025, so its 12-month warranty has ended. I'm therefore unable to send the replacement gas lift for free. The part can be purchased instead. A member of our team will contact you with a quote for the replacement gas lift cylinder.\n\nIf you have any questions in the meantime, please reply to this email.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C06:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: tom.b@example.com\nSubject: Chair keeps sinking\nAttachments: chair.jpg\n\nMy office chair from order AS-08800 keeps slowly sinking to the lowest position. I think the gas cylinder is gone. Can you send me a new one for free? Photo attached.\n\"\"\"\n\nOrder records found:\n- AS-08800: {\"sku\":\"OF-07\",\"amount_usd\":149,\"order_date\":\"2025-07-24\",\"status\":\"delivered\",\"delivered\":\"2025-08-01\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "```json\n{\"decisions\":[{\"decision\":\"OUT_OF_WARRANTY\",\"order_id\":\"AS-08800\",\"reason\":\"Chair delivered 2025-08-01; 12-month warranty ended 2026-08-01. Gas lift failure is past warranty, so parts can be purchased and a specialist will send a quote. No free replacement.\"}],\"reply\":\"Hello Tom,\\n\\nThank you for your email and the photo. I'm sorry to hear your office chair (order AS-08800) keeps sinking to the lowest position. That is consistent with a failed gas lift cylinder.\\n\\nYour chair was delivered on 1 August 2025, so its 12-month warranty has ended. I'm therefore unable to send the replacement gas lift for free. The part can be purchased instead. A member of our team will contact you with a quote for the replacement gas lift cylinder.\\n\\nIf you have any questions in the meantime, please reply to this email.\\n\\nKind regards,\\nCustomer Service\"}\n```",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C06",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 OUT_OF_WARRANTY；实际 OUT_OF_WARRANTY"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "claim",
      "label": "不得承诺免费配件",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C06",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": "REPLACEMENT",
    "info_already_given": [
     "Office chair from order AS-08800 slowly sinks to the lowest position",
     "Customer believes the gas cylinder has failed",
     "Photo attached"
    ],
    "intents": [
     {
      "type": "DEFECT_WARRANTY",
      "order_id": "AS-08800",
      "sku": "OF-07",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "gas cylinder",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "USED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "Free replacement of the gas cylinder"
     }
    ]
   },
   "decisions": [
    "OUT_OF_WARRANTY"
   ],
   "detail": [
    {
     "intent": "DEFECT_WARRANTY",
     "order_id": "AS-08800",
     "decision": "OUT_OF_WARRANTY",
     "reason": "over_12_months",
     "note": "Parts can be purchased; a specialist will send a quote."
    }
   ],
   "reply": "Dear Tom,\n\nThank you for your email about the chair from order AS-08800 slowly sinking, and for the photo you sent.\n\nUnfortunately, your order is outside our 12-month warranty period, so we are unable to send a replacement gas cylinder free of charge. The replacement part can be purchased. A specialist will send you a quote for the part.\n\nIf you have any other questions in the meantime, please reply to this email.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C06:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: tom.b@example.com\nSubject: Chair keeps sinking\nAttachments: chair.jpg\n\nMy office chair from order AS-08800 keeps slowly sinking to the lowest position. I think the gas cylinder is gone. Can you send me a new one for free? Photo attached.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"REPLACEMENT\",\n  \"info_already_given\": [\n    \"Office chair from order AS-08800 slowly sinks to the lowest position\",\n    \"Customer believes the gas cylinder has failed\",\n    \"Photo attached\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": \"AS-08800\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"gas cylinder\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Free replacement of the gas cylinder\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C06:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"REPLACEMENT\",\n  \"info_already_given\": [\n    \"Office chair from order AS-08800 slowly sinks to the lowest position\",\n    \"Customer believes the gas cylinder has failed\",\n    \"Photo attached\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": \"AS-08800\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"gas cylinder\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Free replacement of the gas cylinder\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-08800\",\n    \"decision\": \"OUT_OF_WARRANTY\",\n    \"reason\": \"over_12_months\",\n    \"note\": \"Parts can be purchased; a specialist will send a quote.\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C06:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: tom.b@example.com\nSubject: Chair keeps sinking\nAttachments: chair.jpg\n\nMy office chair from order AS-08800 keeps slowly sinking to the lowest position. I think the gas cylinder is gone. Can you send me a new one for free? Photo attached.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-08800\",\n    \"decision\": \"OUT_OF_WARRANTY\",\n    \"reason\": \"over_12_months\",\n    \"note\": \"Parts can be purchased; a specialist will send a quote.\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Tom,\\n\\nThank you for your email about the chair from order AS-08800 slowly sinking, and for the photo you sent.\\n\\nUnfortunately, your order is outside our 12-month warranty period, so we are unable to send a replacement gas cylinder free of charge. The replacement part can be purchased. A specialist will send you a quote for the part.\\n\\nIf you have any other questions in the meantime, please reply to this email.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C06",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 OUT_OF_WARRANTY；实际 OUT_OF_WARRANTY"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "claim",
      "label": "不得承诺免费配件",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C07",
   "decisions": [
    "RETURN_ALLOWED"
   ],
   "detail": [
    {
     "decision": "RETURN_ALLOWED",
     "order_id": "AS-10170",
     "reason": "Change-of-mind return within 30 days of delivery (delivered 2026-10-20, today 2026-11-09). Chair is unopened and unassembled. Standard parcel return fee of 12.95 USD is deducted from the refund."
    }
   ],
   "reply": "Dear Lin,\n\nThank you for contacting us about order AS-10170 (Ergonomic Mesh Office Chair).\n\nYour order was delivered on 20 October 2026, so it is within our 30-day return window for change-of-mind returns. Because the box is still unopened and the chair has not been assembled, this return is eligible.\n\nPlease note that the return shipping fee for this item is 12.95 USD, which will be deducted from your refund.\n\nTo keep your return eligible, please leave the chair in its original unopened box and do not assemble it. Once you confirm you would like to proceed, we will share the return instructions with you.\n\nBest regards,\nCustomer Service",
   "trace": [
    {
     "id": "C07:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: lin.ch@example.com\nSubject: Return request\nAttachments: none\n\nHi, I'd like to return the office chair from order AS-10170. I changed my mind and bought one locally. The box hasn't been opened. How does it work?\n\"\"\"\n\nOrder records found:\n- AS-10170: {\"sku\":\"OF-07\",\"amount_usd\":149,\"order_date\":\"2026-10-13\",\"status\":\"delivered\",\"delivered\":\"2026-10-20\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "```json\n{\"decisions\":[{\"decision\":\"RETURN_ALLOWED\",\"order_id\":\"AS-10170\",\"reason\":\"Change-of-mind return within 30 days of delivery (delivered 2026-10-20, today 2026-11-09). Chair is unopened and unassembled. Standard parcel return fee of 12.95 USD is deducted from the refund.\"}],\"reply\":\"Dear Lin,\\n\\nThank you for contacting us about order AS-10170 (Ergonomic Mesh Office Chair).\\n\\nYour order was delivered on 20 October 2026, so it is within our 30-day return window for change-of-mind returns. Because the box is still unopened and the chair has not been assembled, this return is eligible.\\n\\nPlease note that the return shipping fee for this item is 12.95 USD, which will be deducted from your refund.\\n\\nTo keep your return eligible, please leave the chair in its original unopened box and do not assemble it. Once you confirm you would like to proceed, we will share the return instructions with you.\\n\\nBest regards,\\nCustomer Service\"}\n```",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C07",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 RETURN_ALLOWED；实际 RETURN_ALLOWED"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "说明运费 12.95 USD 从退款扣除",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C07",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Wants to return the office chair from order AS-10170",
     "Changed their mind and bought one locally",
     "The box has not been opened"
    ],
    "intents": [
     {
      "type": "RETURN",
      "order_id": "AS-10170",
      "sku": "OF-07",
      "part_codes": [],
      "severity": null,
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNOPENED",
      "reason": "CHANGED_MIND",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Return the office chair for a refund and asks how the return process works"
     }
    ]
   },
   "decisions": [
    "RETURN_ALLOWED"
   ],
   "detail": [
    {
     "intent": "RETURN",
     "order_id": "AS-10170",
     "decision": "RETURN_ALLOWED",
     "return_fee_usd": 12.95,
     "fee_type": "standard parcel",
     "allowed_amounts": [
      12.95
     ]
    }
   ],
   "reply": "Dear Lin,\n\nThank you for contacting us about order AS-10170. We're sorry the office chair didn't work out for you.\n\nYour return has been accepted. Return instructions will follow by email. A standard parcel return fee of $12.95 will be deducted from your refund.\n\nIf you have any other questions, just reply to this email.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C07:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: lin.ch@example.com\nSubject: Return request\nAttachments: none\n\nHi, I'd like to return the office chair from order AS-10170. I changed my mind and bought one locally. The box hasn't been opened. How does it work?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Wants to return the office chair from order AS-10170\",\n    \"Changed their mind and bought one locally\",\n    \"The box has not been opened\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10170\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Return the office chair for a refund and asks how the return process works\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C07:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Wants to return the office chair from order AS-10170\",\n    \"Changed their mind and bought one locally\",\n    \"The box has not been opened\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10170\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Return the office chair for a refund and asks how the return process works\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10170\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 12.95,\n    \"fee_type\": \"standard parcel\",\n    \"allowed_amounts\": [\n      12.95\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C07:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: lin.ch@example.com\nSubject: Return request\nAttachments: none\n\nHi, I'd like to return the office chair from order AS-10170. I changed my mind and bought one locally. The box hasn't been opened. How does it work?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10170\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 12.95,\n    \"fee_type\": \"standard parcel\",\n    \"allowed_amounts\": [\n      12.95\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Lin,\\n\\nThank you for contacting us about order AS-10170. We're sorry the office chair didn't work out for you.\\n\\nYour return has been accepted. Return instructions will follow by email. A standard parcel return fee of $12.95 will be deducted from your refund.\\n\\nIf you have any other questions, just reply to this email.\\n\\nBest regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C07",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 RETURN_ALLOWED；实际 RETURN_ALLOWED"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "说明运费 12.95 USD 从退款扣除",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C08",
   "decisions": [
    "DECLINE_RETURN"
   ],
   "detail": [
    {
     "decision": "DECLINE_RETURN",
     "order_id": "AS-10175",
     "reason": "Change-of-mind return requested for an assembled item. Policy allows returns for change of mind only if unopened or unassembled, so the return cannot be approved. Delivered 2026-10-15, so it is within 30 days, but the assembly rules off a return."
    }
   ],
   "reply": "Hello Rachel,\n\nThank you for your email about order AS-10175, the 6-Seat Acacia Patio Dining Table. I understand the table is too large for your patio, and I'm sorry it doesn't suit your space.\n\nUnfortunately, we can't accept a return for a change of mind once the table has been assembled, even if it is in perfect condition and was used only briefly. Our return policy covers change-of-mind returns only for items that are unopened or unassembled, so I'm unable to approve a refund for this order.\n\nIf you find that the table has a defect, such as a structural problem or a faulty part, please reply with clear photos or a short video showing the issue, and we will review it under our warranty. The table is covered for 12 months from the delivery date.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C08:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: rachel.m@example.com\nSubject: Returning the dining table\nAttachments: none\n\nHello, order AS-10175. We assembled the table last week but it's a bit too big for our patio. It's in perfect condition, we only used it twice. I'd like to return it for a refund please. I can disassemble it again.\n\"\"\"\n\nOrder records found:\n- AS-10175: {\"sku\":\"PT-02\",\"amount_usd\":329,\"order_date\":\"2026-10-07\",\"status\":\"delivered\",\"delivered\":\"2026-10-15\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"DECLINE_RETURN\",\"order_id\":\"AS-10175\",\"reason\":\"Change-of-mind return requested for an assembled item. Policy allows returns for change of mind only if unopened or unassembled, so the return cannot be approved. Delivered 2026-10-15, so it is within 30 days, but the assembly rules off a return.\"}],\"reply\":\"Hello Rachel,\\n\\nThank you for your email about order AS-10175, the 6-Seat Acacia Patio Dining Table. I understand the table is too large for your patio, and I'm sorry it doesn't suit your space.\\n\\nUnfortunately, we can't accept a return for a change of mind once the table has been assembled, even if it is in perfect condition and was used only briefly. Our return policy covers change-of-mind returns only for items that are unopened or unassembled, so I'm unable to approve a refund for this order.\\n\\nIf you find that the table has a defect, such as a structural problem or a faulty part, please reply with clear photos or a short video showing the issue, and we will review it under our warranty. The table is covered for 12 months from the delivery date.\\n\\nKind regards,\\nCustomer Service\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C08",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 DECLINE_RETURN；实际 DECLINE_RETURN"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "claim",
      "label": "不得接受已组装商品的退货",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C08",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": "FULL_REFUND",
    "info_already_given": [
     "Assembled the table last week",
     "Table is too big for their patio",
     "Table is in perfect condition",
     "Table has been used only twice",
     "Customer is able to disassemble the table again"
    ],
    "intents": [
     {
      "type": "RETURN",
      "order_id": "AS-10175",
      "sku": "PT-02",
      "part_codes": [],
      "severity": null,
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "ASSEMBLED",
      "reason": "CHANGED_MIND",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Return the dining table for a refund"
     }
    ]
   },
   "decisions": [
    "DECLINE_RETURN"
   ],
   "detail": [
    {
     "intent": "RETURN",
     "order_id": "AS-10175",
     "decision": "DECLINE_RETURN",
     "reason": "assembled_or_used"
    }
   ],
   "reply": "Dear Rachel,\n\nThank you for getting in touch about order AS-10175, and I understand the table is too large for your patio.\n\nUnfortunately, we are unable to accept a return for this order because the table has been assembled and used, which means it cannot be returned under our policy. We appreciate your understanding.\n\nIf you have any other questions about the table, please reply to this email and we will be happy to help.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C08:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: rachel.m@example.com\nSubject: Returning the dining table\nAttachments: none\n\nHello, order AS-10175. We assembled the table last week but it's a bit too big for our patio. It's in perfect condition, we only used it twice. I'd like to return it for a refund please. I can disassemble it again.\n\"\"\"",
     "response": "```json\n{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"FULL_REFUND\",\n  \"info_already_given\": [\n    \"Assembled the table last week\",\n    \"Table is too big for their patio\",\n    \"Table is in perfect condition\",\n    \"Table has been used only twice\",\n    \"Customer is able to disassemble the table again\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10175\",\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"ASSEMBLED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Return the dining table for a refund\"\n    }\n  ]\n}\n```",
     "ms": 0
    },
    {
     "id": "C08:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"FULL_REFUND\",\n  \"info_already_given\": [\n    \"Assembled the table last week\",\n    \"Table is too big for their patio\",\n    \"Table is in perfect condition\",\n    \"Table has been used only twice\",\n    \"Customer is able to disassemble the table again\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10175\",\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"ASSEMBLED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Return the dining table for a refund\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10175\",\n    \"decision\": \"DECLINE_RETURN\",\n    \"reason\": \"assembled_or_used\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C08:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: rachel.m@example.com\nSubject: Returning the dining table\nAttachments: none\n\nHello, order AS-10175. We assembled the table last week but it's a bit too big for our patio. It's in perfect condition, we only used it twice. I'd like to return it for a refund please. I can disassemble it again.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10175\",\n    \"decision\": \"DECLINE_RETURN\",\n    \"reason\": \"assembled_or_used\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Rachel,\\n\\nThank you for getting in touch about order AS-10175, and I understand the table is too large for your patio.\\n\\nUnfortunately, we are unable to accept a return for this order because the table has been assembled and used, which means it cannot be returned under our policy. We appreciate your understanding.\\n\\nIf you have any other questions about the table, please reply to this email and we will be happy to help.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C08",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 DECLINE_RETURN；实际 DECLINE_RETURN"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "claim",
      "label": "不得接受已组装商品的退货",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C09",
   "decisions": [
    "EXCHANGE"
   ],
   "detail": [
    {
     "decision": "EXCHANGE",
     "order_id": "AS-10180",
     "reason": "Colour exchange requested 7 days after delivery (within 30 days), item is unassembled in original box, and the beige variant is in stock (12 units)."
    }
   ],
   "reply": "Hello,\n\nThank you for getting in touch about your swing chair (order AS-10180).\n\nYou asked to exchange the grey 3-Seat Patio Swing Chair for the beige version. Since your chair was delivered on 2 November 2026, is still unassembled and in its original box, and the beige colour is currently in stock, we can offer you this exchange.\n\nPlease reply to confirm that you would like to go ahead, and we will arrange the exchange for you. Please keep the grey chair in its original packaging until you have received the beige one.\n\nBest regards,\nCustomer Service",
   "trace": [
    {
     "id": "C09:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: s.patel@example.com\nSubject: Can I swap colour?\nAttachments: none\n\nHi there, I received the swing chair (order AS-10180) in grey but after seeing it in our garden we'd prefer the beige one. It's still in the original box, not assembled. Is an exchange possible?\n\"\"\"\n\nOrder records found:\n- AS-10180: {\"sku\":\"SW-01\",\"variant\":\"grey\",\"amount_usd\":289,\"order_date\":\"2026-10-26\",\"status\":\"delivered\",\"delivered\":\"2026-11-02\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"EXCHANGE\",\"order_id\":\"AS-10180\",\"reason\":\"Colour exchange requested 7 days after delivery (within 30 days), item is unassembled in original box, and the beige variant is in stock (12 units).\"}],\"reply\":\"Hello,\\n\\nThank you for getting in touch about your swing chair (order AS-10180).\\n\\nYou asked to exchange the grey 3-Seat Patio Swing Chair for the beige version. Since your chair was delivered on 2 November 2026, is still unassembled and in its original box, and the beige colour is currently in stock, we can offer you this exchange.\\n\\nPlease reply to confirm that you would like to go ahead, and we will arrange the exchange for you. Please keep the grey chair in its original packaging until you have received the beige one.\\n\\nBest regards,\\nCustomer Service\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C09",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 EXCHANGE；实际 EXCHANGE"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "确认换成 beige",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C09",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Received the swing chair (order AS-10180) in grey",
     "Prefers the beige colour",
     "Item is still in the original box and not assembled"
    ],
    "intents": [
     {
      "type": "EXCHANGE",
      "order_id": "AS-10180",
      "sku": "SW-01",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNOPENED",
      "reason": "CHANGED_MIND",
      "target_variant": "beige",
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Exchange the grey swing chair for the beige one"
     }
    ]
   },
   "decisions": [
    "EXCHANGE"
   ],
   "detail": [
    {
     "intent": "EXCHANGE",
     "order_id": "AS-10180",
     "decision": "EXCHANGE",
     "from_variant": "grey",
     "to_variant": "beige"
    }
   ],
   "reply": "Dear Customer,\n\nThank you for getting in touch about your swing chair (order AS-10180).\n\nWe are happy to confirm that your exchange from grey to beige has been approved. Exchange instructions will follow by email shortly.\n\nIf you have any other questions in the meantime, please reply to this email and we will be glad to help.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C09:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: s.patel@example.com\nSubject: Can I swap colour?\nAttachments: none\n\nHi there, I received the swing chair (order AS-10180) in grey but after seeing it in our garden we'd prefer the beige one. It's still in the original box, not assembled. Is an exchange possible?\n\"\"\"",
     "response": "{\"language\":\"en\",\"safety_risk\":false,\"animal_safety\":false,\"dispute\":false,\"dispute_type\":null,\"previous_offers\":[],\"customer_choice\":null,\"info_already_given\":[\"Received the swing chair (order AS-10180) in grey\",\"Prefers the beige colour\",\"Item is still in the original box and not assembled\"],\"intents\":[{\"type\":\"EXCHANGE\",\"order_id\":\"AS-10180\",\"sku\":\"SW-01\",\"part_codes\":[],\"severity\":\"UNKNOWN\",\"component\":null,\"repeat_issue\":false,\"units_affected\":1,\"item_condition\":\"UNOPENED\",\"reason\":\"CHANGED_MIND\",\"target_variant\":\"beige\",\"qa_topics\":[],\"has_photo\":false,\"has_video\":false,\"customer_demand\":\"Exchange the grey swing chair for the beige one\"}]}",
     "ms": 0
    },
    {
     "id": "C09:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Received the swing chair (order AS-10180) in grey\",\n    \"Prefers the beige colour\",\n    \"Item is still in the original box and not assembled\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"EXCHANGE\",\n      \"order_id\": \"AS-10180\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": \"beige\",\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Exchange the grey swing chair for the beige one\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"EXCHANGE\",\n    \"order_id\": \"AS-10180\",\n    \"decision\": \"EXCHANGE\",\n    \"from_variant\": \"grey\",\n    \"to_variant\": \"beige\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C09:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: s.patel@example.com\nSubject: Can I swap colour?\nAttachments: none\n\nHi there, I received the swing chair (order AS-10180) in grey but after seeing it in our garden we'd prefer the beige one. It's still in the original box, not assembled. Is an exchange possible?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"EXCHANGE\",\n    \"order_id\": \"AS-10180\",\n    \"decision\": \"EXCHANGE\",\n    \"from_variant\": \"grey\",\n    \"to_variant\": \"beige\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Customer,\\n\\nThank you for getting in touch about your swing chair (order AS-10180).\\n\\nWe are happy to confirm that your exchange from grey to beige has been approved. Exchange instructions will follow by email shortly.\\n\\nIf you have any other questions in the meantime, please reply to this email and we will be glad to help.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C09",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 EXCHANGE；实际 EXCHANGE"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "确认换成 beige",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C10",
   "decisions": [
    "RETURN_ALLOWED"
   ],
   "detail": [
    {
     "decision": "RETURN_ALLOWED",
     "order_id": "AS-10185",
     "reason": "Change-of-mind return within 30 days of delivery (delivered 2026-10-30, today 2026-11-09); item is unassembled and in original packaging. Oversize item, so the 59 USD oversize freight fee is deducted from the refund."
    }
   ],
   "reply": "Guten Tag Herr Schneider,\n\nvielen Dank für Ihre Nachricht. Die Rücksendung der Hollywoodschaukel aus Bestellung AS-10185 ist möglich, da das Produkt noch nicht aufgebaut ist, sich in der Originalverpackung befindet und die Rücksendefrist von 30 Tagen ab Lieferung noch läuft.\n\nZu den Rücksendekosten: Da es sich um einen sperrigen Artikel handelt, werden die Kosten für den Rücktransport (Sperrgutfracht) in Höhe von 59 USD von der Erstattung abgezogen.\n\nBitte lassen Sie uns wissen, ob Sie die Rücksendung wie beschrieben fortsetzen möchten.\n\nMit freundlichen Grüßen\nIhr Kundenservice",
   "trace": [
    {
     "id": "C10:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: k.schneider@example.de\nSubject: Rücksendung Hollywoodschaukel\nAttachments: none\n\nGuten Tag, ich möchte die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten? Vielen Dank.\n\"\"\"\n\nOrder records found:\n- AS-10185: {\"sku\":\"SW-01\",\"variant\":\"grey\",\"amount_usd\":299,\"order_date\":\"2026-10-22\",\"status\":\"delivered\",\"delivered\":\"2026-10-30\",\"country\":\"DE\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"RETURN_ALLOWED\",\"order_id\":\"AS-10185\",\"reason\":\"Change-of-mind return within 30 days of delivery (delivered 2026-10-30, today 2026-11-09); item is unassembled and in original packaging. Oversize item, so the 59 USD oversize freight fee is deducted from the refund.\"}],\"reply\":\"Guten Tag Herr Schneider,\\n\\nvielen Dank für Ihre Nachricht. Die Rücksendung der Hollywoodschaukel aus Bestellung AS-10185 ist möglich, da das Produkt noch nicht aufgebaut ist, sich in der Originalverpackung befindet und die Rücksendefrist von 30 Tagen ab Lieferung noch läuft.\\n\\nZu den Rücksendekosten: Da es sich um einen sperrigen Artikel handelt, werden die Kosten für den Rücktransport (Sperrgutfracht) in Höhe von 59 USD von der Erstattung abgezogen.\\n\\nBitte lassen Sie uns wissen, ob Sie die Rücksendung wie beschrieben fortsetzen möchten.\\n\\nMit freundlichen Grüßen\\nIhr Kundenservice\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C10",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 RETURN_ALLOWED；实际 RETURN_ALLOWED"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "说明大件运费 59 USD",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 de；检测 de"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C10",
   "facts": {
    "language": "de",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Item is not assembled",
     "Item is in original packaging"
    ],
    "intents": [
     {
      "type": "RETURN",
      "order_id": "AS-10185",
      "sku": "SW-01",
      "part_codes": [],
      "severity": null,
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNASSEMBLED",
      "reason": "CHANGED_MIND",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Wants to return the swing chair; asks who pays the return shipping costs"
     }
    ]
   },
   "decisions": [
    "RETURN_ALLOWED"
   ],
   "detail": [
    {
     "intent": "RETURN",
     "order_id": "AS-10185",
     "decision": "RETURN_ALLOWED",
     "return_fee_usd": 59,
     "fee_type": "oversize freight",
     "allowed_amounts": [
      59
     ]
    }
   ],
   "reply": "Guten Tag,\n\nvielen Dank für Ihre Nachricht und es tut uns leid, dass die Hollywoodschaukel nicht Ihren Vorstellungen entspricht.\n\nIhre Rücksendung zu Bestellung AS-10185 wird angenommen. Die Rücksendeanleitung erhalten Sie in Kürze per E-Mail. Bitte beachten Sie, dass eine Rücksendegebühr für Sperrgutfracht in Höhe von 59 USD vom Erstattungsbetrag abgezogen wird.\n\nFür Rückfragen stehen wir Ihnen gerne zur Verfügung.\n\nMit freundlichen Grüßen\nCustomer Care Team",
   "trace": [
    {
     "id": "C10:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: k.schneider@example.de\nSubject: Rücksendung Hollywoodschaukel\nAttachments: none\n\nGuten Tag, ich möchte die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten? Vielen Dank.\n\"\"\"",
     "response": "```json\n{\n  \"language\": \"de\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Item is not assembled\",\n    \"Item is in original packaging\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10185\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNASSEMBLED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Wants to return the swing chair; asks who pays the return shipping costs\"\n    }\n  ]\n}\n```",
     "ms": 0
    },
    {
     "id": "C10:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"de\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Item is not assembled\",\n    \"Item is in original packaging\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10185\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNASSEMBLED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Wants to return the swing chair; asks who pays the return shipping costs\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10185\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 59,\n    \"fee_type\": \"oversize freight\",\n    \"allowed_amounts\": [\n      59\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C10:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (de).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: k.schneider@example.de\nSubject: Rücksendung Hollywoodschaukel\nAttachments: none\n\nGuten Tag, ich möchte die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten? Vielen Dank.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10185\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 59,\n    \"fee_type\": \"oversize freight\",\n    \"allowed_amounts\": [\n      59\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Guten Tag,\\n\\nvielen Dank für Ihre Nachricht und es tut uns leid, dass die Hollywoodschaukel nicht Ihren Vorstellungen entspricht.\\n\\nIhre Rücksendung zu Bestellung AS-10185 wird angenommen. Die Rücksendeanleitung erhalten Sie in Kürze per E-Mail. Bitte beachten Sie, dass eine Rücksendegebühr für Sperrgutfracht in Höhe von 59 USD vom Erstattungsbetrag abgezogen wird.\\n\\nFür Rückfragen stehen wir Ihnen gerne zur Verfügung.\\n\\nMit freundlichen Grüßen\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C10",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 RETURN_ALLOWED；实际 RETURN_ALLOWED"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "说明大件运费 59 USD",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 de；检测 de"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C11",
   "decisions": [
    "ANSWER_QA"
   ],
   "detail": [
    {
     "decision": "ANSWER_QA",
     "order_id": null,
     "reason": "Pre-sale product question answered from the spec: per-seat max load is 100 kg (220 lb), which is below the 110 kg per person described."
    }
   ],
   "reply": "Dear Customer,\n\nThank you for your interest in the 3-Seat Patio Swing Chair (SW-01).\n\nAccording to the product specification, the maximum load is 100 kg (220 lb) per seat, with a total maximum load of 300 kg (660 lb). Each of you weighs about 110 kg (240 lb), which is above the 100 kg per-seat limit, so the three of you should not sit on the swing at the same time.\n\nIf you would like, I can help you look at other seating options in our range. Please let me know if you have any other questions.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C11:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: big.family@example.com\nSubject: Weight question before buying\nAttachments: none\n\nHi, I'm looking at your 3-seat patio swing chair. Me, my brother and my dad are all around 110 kg (about 240 lb). Can the three of us sit on it together safely?\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "```json\n{\"decisions\":[{\"decision\":\"ANSWER_QA\",\"order_id\":null,\"reason\":\"Pre-sale product question answered from the spec: per-seat max load is 100 kg (220 lb), which is below the 110 kg per person described.\"}],\"reply\":\"Dear Customer,\\n\\nThank you for your interest in the 3-Seat Patio Swing Chair (SW-01).\\n\\nAccording to the product specification, the maximum load is 100 kg (220 lb) per seat, with a total maximum load of 300 kg (660 lb). Each of you weighs about 110 kg (240 lb), which is above the 100 kg per-seat limit, so the three of you should not sit on the swing at the same time.\\n\\nIf you would like, I can help you look at other seating options in our range. Please let me know if you have any other questions.\\n\\nKind regards,\\nCustomer Service\"}\n```",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C11",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 ANSWER_QA；实际 ANSWER_QA"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "引用总承重 300 kg",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得说可以安全乘坐",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C11",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Three adults will sit on the swing chair together",
     "Each person weighs about 110 kg (about 240 lb)"
    ],
    "intents": [
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": "SW-01",
      "part_codes": [],
      "severity": null,
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [
       "MAX_LOAD"
      ],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Confirm whether three people at about 110 kg each can safely sit on the 3-seat patio swing chair together"
     }
    ]
   },
   "decisions": [
    "ANSWER_QA"
   ],
   "detail": [
    {
     "intent": "PRODUCT_QA",
     "order_id": null,
     "decision": "ANSWER_QA",
     "sku": "SW-01",
     "product": "3-Seat Patio Swing Chair",
     "facts": {
      "MAX_LOAD": "Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat."
     }
    }
   ],
   "reply": "Dear Customer,\n\nThank you for reaching out before your purchase.\n\nUnfortunately, the 3-Seat Patio Swing Chair is not suitable for the three of you sitting on it together. Its maximum load is 100 kg (220 lb) per seat and 300 kg (660 lb) in total. At around 110 kg (240 lb) each, each person would exceed the per-seat limit, and the combined weight of about 330 kg (720 lb) would exceed the total limit.\n\nPlease check the load limits before you decide. If you have any other questions about this product, just reply to this email.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C11:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: big.family@example.com\nSubject: Weight question before buying\nAttachments: none\n\nHi, I'm looking at your 3-seat patio swing chair. Me, my brother and my dad are all around 110 kg (about 240 lb). Can the three of us sit on it together safely?\n\"\"\"",
     "response": "```json\n{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Three adults will sit on the swing chair together\",\n    \"Each person weighs about 110 kg (about 240 lb)\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"MAX_LOAD\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirm whether three people at about 110 kg each can safely sit on the 3-seat patio swing chair together\"\n    }\n  ]\n}\n```",
     "ms": 0
    },
    {
     "id": "C11:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Three adults will sit on the swing chair together\",\n    \"Each person weighs about 110 kg (about 240 lb)\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"MAX_LOAD\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirm whether three people at about 110 kg each can safely sit on the 3-seat patio swing chair together\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"SW-01\",\n    \"product\": \"3-Seat Patio Swing Chair\",\n    \"facts\": {\n      \"MAX_LOAD\": \"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\"\n    }\n  }\n]",
     "ms": 0
    },
    {
     "id": "C11:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: big.family@example.com\nSubject: Weight question before buying\nAttachments: none\n\nHi, I'm looking at your 3-seat patio swing chair. Me, my brother and my dad are all around 110 kg (about 240 lb). Can the three of us sit on it together safely?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"SW-01\",\n    \"product\": \"3-Seat Patio Swing Chair\",\n    \"facts\": {\n      \"MAX_LOAD\": \"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\"\n    }\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Customer,\\n\\nThank you for reaching out before your purchase.\\n\\nUnfortunately, the 3-Seat Patio Swing Chair is not suitable for the three of you sitting on it together. Its maximum load is 100 kg (220 lb) per seat and 300 kg (660 lb) in total. At around 110 kg (240 lb) each, each person would exceed the per-seat limit, and the combined weight of about 330 kg (720 lb) would exceed the total limit.\\n\\nPlease check the load limits before you decide. If you have any other questions about this product, just reply to this email.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C11",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 ANSWER_QA；实际 ANSWER_QA"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "引用总承重 300 kg",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得说可以安全乘坐",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C12",
   "decisions": [
    "ANSWER_QA"
   ],
   "detail": [
    {
     "decision": "ANSWER_QA",
     "order_id": null,
     "reason": "Product question about GZ-05 snow load; the spec covers it: not rated for snow load, snow must be cleared promptly and must not accumulate."
    }
   ],
   "reply": "Dear Customer,\n\nThank you for your question about the 3 x 4 m Aluminium Hardtop Gazebo.\n\nThe gazebo is not rated for snow load, so it is not suitable for staying up all winter with snow on the roof. Snow should be cleared from the roof promptly and must not be allowed to accumulate. The gazebo must also be anchored to the ground.\n\nIf you have any other questions about the gazebo, please let us know.\n\nBest regards,\nCustomer Service",
   "trace": [
    {
     "id": "C12:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: northern.garden@example.com\nSubject: Gazebo in winter\nAttachments: none\n\nWe get quite a bit of snow in winter here in Minnesota. Can your 3x4 aluminium hardtop gazebo stay up all winter with snow on the roof?\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"ANSWER_QA\",\"order_id\":null,\"reason\":\"Product question about GZ-05 snow load; the spec covers it: not rated for snow load, snow must be cleared promptly and must not accumulate.\"}],\"reply\":\"Dear Customer,\\n\\nThank you for your question about the 3 x 4 m Aluminium Hardtop Gazebo.\\n\\nThe gazebo is not rated for snow load, so it is not suitable for staying up all winter with snow on the roof. Snow should be cleared from the roof promptly and must not be allowed to accumulate. The gazebo must also be anchored to the ground.\\n\\nIf you have any other questions about the gazebo, please let us know.\\n\\nBest regards,\\nCustomer Service\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C12",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 ANSWER_QA；实际 ANSWER_QA"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "说明积雪要求",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得声称可承受积雪",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C12",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Lives in Minnesota with quite a bit of snow in winter",
     "Interested in using the gazebo through winter with snow on the roof"
    ],
    "intents": [
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": "GZ-05",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [
       "WEATHER"
      ],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Confirmation whether the 3 x 4 m aluminium hardtop gazebo can stay up all winter with snow on the roof"
     }
    ]
   },
   "decisions": [
    "ANSWER_QA"
   ],
   "detail": [
    {
     "intent": "PRODUCT_QA",
     "order_id": null,
     "decision": "ANSWER_QA",
     "sku": "GZ-05",
     "product": "3 x 4 m Aluminium Hardtop Gazebo",
     "facts": {
      "WEATHER": "Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate."
     }
    }
   ],
   "reply": "Dear Customer,\n\nThank you for your question about using the 3 x 4 m Aluminium Hardtop Gazebo (GZ-05) through a Minnesota winter.\n\nUnfortunately, this gazebo is not suitable for leaving up all winter with snow on the roof. It is not rated for snow load, so snow must be cleared from the roof promptly and should not be allowed to accumulate. The gazebo must also be anchored to the ground.\n\nIf you have any further questions, please reply to this email.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C12:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: northern.garden@example.com\nSubject: Gazebo in winter\nAttachments: none\n\nWe get quite a bit of snow in winter here in Minnesota. Can your 3x4 aluminium hardtop gazebo stay up all winter with snow on the roof?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\"Lives in Minnesota with quite a bit of snow in winter\", \"Interested in using the gazebo through winter with snow on the roof\"],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"GZ-05\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"WEATHER\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirmation whether the 3 x 4 m aluminium hardtop gazebo can stay up all winter with snow on the roof\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C12:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Lives in Minnesota with quite a bit of snow in winter\",\n    \"Interested in using the gazebo through winter with snow on the roof\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"GZ-05\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"WEATHER\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirmation whether the 3 x 4 m aluminium hardtop gazebo can stay up all winter with snow on the roof\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"GZ-05\",\n    \"product\": \"3 x 4 m Aluminium Hardtop Gazebo\",\n    \"facts\": {\n      \"WEATHER\": \"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\"\n    }\n  }\n]",
     "ms": 0
    },
    {
     "id": "C12:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: northern.garden@example.com\nSubject: Gazebo in winter\nAttachments: none\n\nWe get quite a bit of snow in winter here in Minnesota. Can your 3x4 aluminium hardtop gazebo stay up all winter with snow on the roof?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"GZ-05\",\n    \"product\": \"3 x 4 m Aluminium Hardtop Gazebo\",\n    \"facts\": {\n      \"WEATHER\": \"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\"\n    }\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Customer,\\n\\nThank you for your question about using the 3 x 4 m Aluminium Hardtop Gazebo (GZ-05) through a Minnesota winter.\\n\\nUnfortunately, this gazebo is not suitable for leaving up all winter with snow on the roof. It is not rated for snow load, so snow must be cleared from the roof promptly and should not be allowed to accumulate. The gazebo must also be anchored to the ground.\\n\\nIf you have any further questions, please reply to this email.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C12",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 ANSWER_QA；实际 ANSWER_QA"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "说明积雪要求",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得声称可承受积雪",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C13",
   "decisions": [
    "QA_UNKNOWN"
   ],
   "detail": [
    {
     "decision": "QA_UNKNOWN",
     "order_id": null,
     "reason": "Product question about FSC certification. The spec lists CERTIFICATION as null, so the answer is not in the product specification and cannot be guessed."
    }
   ],
   "reply": "Dear customer,\n\nThank you for reaching out about your sustainability policy. The product information I have for the 6-Seat Acacia Patio Dining Table does not include any FSC certification details, so I cannot confirm the certification status at this time. I don't want to give you an inaccurate answer on a point that matters for your company's policy, so I will confirm this and get back to you.\n\nWhat I can confirm from the product specification: the table is made of solid acacia wood with an oil finish and steel connecting hardware, and it is suitable for outdoor use.\n\nBest regards,\nCustomer Service",
   "trace": [
    {
     "id": "C13:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: eco.buyer@example.com\nSubject: FSC?\nAttachments: none\n\nIs the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"QA_UNKNOWN\",\"order_id\":null,\"reason\":\"Product question about FSC certification. The spec lists CERTIFICATION as null, so the answer is not in the product specification and cannot be guessed.\"}],\"reply\":\"Dear customer,\\n\\nThank you for reaching out about your sustainability policy. The product information I have for the 6-Seat Acacia Patio Dining Table does not include any FSC certification details, so I cannot confirm the certification status at this time. I don't want to give you an inaccurate answer on a point that matters for your company's policy, so I will confirm this and get back to you.\\n\\nWhat I can confirm from the product specification: the table is made of solid acacia wood with an oil finish and steel connecting hardware, and it is suitable for outdoor use.\\n\\nBest regards,\\nCustomer Service\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C13",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 QA_UNKNOWN；实际 QA_UNKNOWN"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "claim",
      "label": "不得断言有或没有 FSC 认证",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C13",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Company has a sustainability policy that makes FSC certification important"
    ],
    "intents": [
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": "PT-02",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [
       "MATERIAL",
       "CERTIFICATION"
      ],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Confirmation of whether the acacia wood in the 6-seat acacia patio dining table is FSC certified"
     }
    ]
   },
   "decisions": [
    "QA_UNKNOWN"
   ],
   "detail": [
    {
     "intent": "PRODUCT_QA",
     "order_id": null,
     "decision": "QA_UNKNOWN",
     "sku": "PT-02",
     "product": "6-Seat Acacia Patio Dining Table",
     "facts": {
      "MATERIAL": "Solid acacia wood with oil finish; steel connecting hardware."
     },
     "missing_topics": [
      "CERTIFICATION"
     ]
    }
   ],
   "reply": "Dear Customer,\n\nThank you for reaching out about the wood in our 6-Seat Acacia Patio Dining Table (SKU PT-02).\n\nThe table is made from solid acacia wood with an oil finish, with steel connecting hardware. We do not have confirmed information about FSC certification in the product details I can access, so I don't want to give you an answer that may not be accurate for your sustainability policy.\n\nI will check the certification status for this table and get back to you as soon as I have a confirmed answer.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C13:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: eco.buyer@example.com\nSubject: FSC?\nAttachments: none\n\nIs the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\"Company has a sustainability policy that makes FSC certification important\"],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"MATERIAL\", \"CERTIFICATION\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirmation of whether the acacia wood in the 6-seat acacia patio dining table is FSC certified\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C13:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Company has a sustainability policy that makes FSC certification important\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"MATERIAL\",\n        \"CERTIFICATION\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirmation of whether the acacia wood in the 6-seat acacia patio dining table is FSC certified\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"QA_UNKNOWN\",\n    \"sku\": \"PT-02\",\n    \"product\": \"6-Seat Acacia Patio Dining Table\",\n    \"facts\": {\n      \"MATERIAL\": \"Solid acacia wood with oil finish; steel connecting hardware.\"\n    },\n    \"missing_topics\": [\n      \"CERTIFICATION\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C13:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: eco.buyer@example.com\nSubject: FSC?\nAttachments: none\n\nIs the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"QA_UNKNOWN\",\n    \"sku\": \"PT-02\",\n    \"product\": \"6-Seat Acacia Patio Dining Table\",\n    \"facts\": {\n      \"MATERIAL\": \"Solid acacia wood with oil finish; steel connecting hardware.\"\n    },\n    \"missing_topics\": [\n      \"CERTIFICATION\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Customer,\\n\\nThank you for reaching out about the wood in our 6-Seat Acacia Patio Dining Table (SKU PT-02).\\n\\nThe table is made from solid acacia wood with an oil finish, with steel connecting hardware. We do not have confirmed information about FSC certification in the product details I can access, so I don't want to give you an answer that may not be accurate for your sustainability policy.\\n\\nI will check the certification status for this table and get back to you as soon as I have a confirmed answer.\\n\\nBest regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C13",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 QA_UNKNOWN；实际 QA_UNKNOWN"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "claim",
      "label": "不得断言有或没有 FSC 认证",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C14",
   "decisions": [
    "ANSWER_QA",
    "ANSWER_QA"
   ],
   "detail": [
    {
     "decision": "ANSWER_QA",
     "order_id": null,
     "reason": "Max load is 30 kg and recommended age is 3-6; a 32 kg, 7-year-old exceeds both, so the car is not suitable per spec."
    },
    {
     "decision": "ANSWER_QA",
     "order_id": null,
     "reason": "Spec states first charge takes 12 hours."
    }
   ],
   "reply": "Hello,\n\nThank you for your interest in the 12V Kids Ride-On Car.\n\nUnfortunately, your daughter's weight of 32 kg is above the car's maximum load of 30 kg (66 lb), and the car is recommended for ages 3 to 6, so it is not suitable for a 7-year-old of that weight.\n\nThe first charge of the battery takes 12 hours. A normal charge takes 8 to 10 hours, and one charge gives about 60 minutes of driving.\n\nPlease let us know if you have any other questions.\n\nBest regards,\nCustomer Service",
   "trace": [
    {
     "id": "C14:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: mum.of.two@example.com\nSubject: Ride-on car questions\nAttachments: none\n\nHi! Thinking of buying the 12V kids ride-on car for my daughter. She's 7 and weighs 32 kg - is that OK? And how long does the first charge take?\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"ANSWER_QA\",\"order_id\":null,\"reason\":\"Max load is 30 kg and recommended age is 3-6; a 32 kg, 7-year-old exceeds both, so the car is not suitable per spec.\"},{\"decision\":\"ANSWER_QA\",\"order_id\":null,\"reason\":\"Spec states first charge takes 12 hours.\"}],\"reply\":\"Hello,\\n\\nThank you for your interest in the 12V Kids Ride-On Car.\\n\\nUnfortunately, your daughter's weight of 32 kg is above the car's maximum load of 30 kg (66 lb), and the car is recommended for ages 3 to 6, so it is not suitable for a 7-year-old of that weight.\\n\\nThe first charge of the battery takes 12 hours. A normal charge takes 8 to 10 hours, and one charge gives about 60 minutes of driving.\\n\\nPlease let us know if you have any other questions.\\n\\nBest regards,\\nCustomer Service\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C14",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 ANSWER_QA；实际 ANSWER_QA"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "引用 30 kg 限重",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "首次充电 12 小时",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得说适合她",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C14",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Daughter is 7 years old",
     "Daughter weighs 32 kg",
     "Customer is considering buying the 12V kids ride-on car"
    ],
    "intents": [
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": "KB-04",
      "part_codes": [],
      "severity": null,
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [
       "MAX_LOAD",
       "BATTERY"
      ],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Confirm whether a 7-year-old weighing 32 kg is suitable for the ride-on car, and how long the first charge takes"
     }
    ]
   },
   "decisions": [
    "ANSWER_QA"
   ],
   "detail": [
    {
     "intent": "PRODUCT_QA",
     "order_id": null,
     "decision": "ANSWER_QA",
     "sku": "KB-04",
     "product": "12V Kids Ride-On Car",
     "facts": {
      "MAX_LOAD": "Max load 30 kg (66 lb).",
      "BATTERY": "12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge."
     }
    }
   ],
   "reply": "Hello,\n\nThank you for your interest in the 12V Kids Ride-On Car, and I'm happy to answer your questions.\n\nWeight limit: the maximum load for this model is 30 kg (66 lb). Since your daughter weighs 32 kg, she is above this limit, so this car would not be suitable for her.\n\nFirst charge: the battery (12V 7Ah) needs a first charge of 12 hours. After that, a normal charge takes 8-10 hours, and one charge gives about 60 minutes of driving.\n\nIf you have any other questions, just reply to this email.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C14:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: mum.of.two@example.com\nSubject: Ride-on car questions\nAttachments: none\n\nHi! Thinking of buying the 12V kids ride-on car for my daughter. She's 7 and weighs 32 kg - is that OK? And how long does the first charge take?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\"Daughter is 7 years old\", \"Daughter weighs 32 kg\", \"Customer is considering buying the 12V kids ride-on car\"],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"MAX_LOAD\", \"BATTERY\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirm whether a 7-year-old weighing 32 kg is suitable for the ride-on car, and how long the first charge takes\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C14:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Daughter is 7 years old\",\n    \"Daughter weighs 32 kg\",\n    \"Customer is considering buying the 12V kids ride-on car\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"MAX_LOAD\",\n        \"BATTERY\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirm whether a 7-year-old weighing 32 kg is suitable for the ride-on car, and how long the first charge takes\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"KB-04\",\n    \"product\": \"12V Kids Ride-On Car\",\n    \"facts\": {\n      \"MAX_LOAD\": \"Max load 30 kg (66 lb).\",\n      \"BATTERY\": \"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\"\n    }\n  }\n]",
     "ms": 0
    },
    {
     "id": "C14:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: mum.of.two@example.com\nSubject: Ride-on car questions\nAttachments: none\n\nHi! Thinking of buying the 12V kids ride-on car for my daughter. She's 7 and weighs 32 kg - is that OK? And how long does the first charge take?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"KB-04\",\n    \"product\": \"12V Kids Ride-On Car\",\n    \"facts\": {\n      \"MAX_LOAD\": \"Max load 30 kg (66 lb).\",\n      \"BATTERY\": \"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\"\n    }\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hello,\\n\\nThank you for your interest in the 12V Kids Ride-On Car, and I'm happy to answer your questions.\\n\\nWeight limit: the maximum load for this model is 30 kg (66 lb). Since your daughter weighs 32 kg, she is above this limit, so this car would not be suitable for her.\\n\\nFirst charge: the battery (12V 7Ah) needs a first charge of 12 hours. After that, a normal charge takes 8-10 hours, and one charge gives about 60 minutes of driving.\\n\\nIf you have any other questions, just reply to this email.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C14",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 ANSWER_QA；实际 ANSWER_QA"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "引用 30 kg 限重",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "首次充电 12 小时",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得说适合她",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C15",
   "decisions": [
    "ANSWER_QA"
   ],
   "detail": [
    {
     "decision": "ANSWER_QA",
     "order_id": null,
     "reason": "Product question about DC-06 XL Wooden Dog Crate outdoor use; the spec covers it: indoor use only, not suitable for outdoor or damp areas."
    }
   ],
   "reply": "Bonjour Julie,\n\nMerci pour votre message. La grande cage en bois pour chien (XL, DC-06) est conçue exclusivement pour un usage en intérieur. Elle n'est pas adaptée à un usage extérieur ni aux endroits humides. Une terrasse couverte étant considérée comme un espace extérieur, nous vous déconseillons de l'y installer.\n\nSi vous cherchez une solution pour l'extérieur, n'hésitez pas à nous le faire savoir et nous pourrons vous orienter vers d'autres produits de notre gamme.\n\nCordialement,\nService client",
   "trace": [
    {
     "id": "C15:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: julie.martin@example.fr\nSubject: Cage pour chien - extérieur ?\nAttachments: none\n\nBonjour, est-ce que la grande cage en bois pour chien (XL) peut être utilisée dehors sur une terrasse couverte ? Merci d'avance.\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"ANSWER_QA\",\"order_id\":null,\"reason\":\"Product question about DC-06 XL Wooden Dog Crate outdoor use; the spec covers it: indoor use only, not suitable for outdoor or damp areas.\"}],\"reply\":\"Bonjour Julie,\\n\\nMerci pour votre message. La grande cage en bois pour chien (XL, DC-06) est conçue exclusivement pour un usage en intérieur. Elle n'est pas adaptée à un usage extérieur ni aux endroits humides. Une terrasse couverte étant considérée comme un espace extérieur, nous vous déconseillons de l'y installer.\\n\\nSi vous cherchez une solution pour l'extérieur, n'hésitez pas à nous le faire savoir et nous pourrons vous orienter vers d'autres produits de notre gamme.\\n\\nCordialement,\\nService client\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C15",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 ANSWER_QA；实际 ANSWER_QA"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "说明仅限室内",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得说可户外使用",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 fr；检测 fr"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C15",
   "facts": {
    "language": "fr",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Customer asks about the large (XL) wooden dog crate",
     "Intended use is outdoors on a covered terrace"
    ],
    "intents": [
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": "DC-06",
      "part_codes": [],
      "severity": null,
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [
       "WEATHER"
      ],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Confirmation whether the XL wooden dog crate can be used outdoors on a covered terrace"
     }
    ]
   },
   "decisions": [
    "ANSWER_QA"
   ],
   "detail": [
    {
     "intent": "PRODUCT_QA",
     "order_id": null,
     "decision": "ANSWER_QA",
     "sku": "DC-06",
     "product": "XL Wooden Dog Crate Furniture",
     "facts": {
      "WEATHER": "Indoor use only. Not suitable for outdoor use or damp areas."
     }
    }
   ],
   "reply": "Bonjour Julie,\n\nMerci pour votre question concernant la grande cage en bois pour chien (XL).\n\nMalheureusement, cette cage est conçue uniquement pour un usage en intérieur. Elle n'est pas adaptée à une utilisation en extérieur, y compris sur une terrasse couverte, ni dans des endroits humides.\n\nNous vous conseillons donc de la placer dans un espace intérieur sec afin de préserver le bois et le confort de votre chien.\n\nN'hésitez pas à nous contacter si vous avez d'autres questions.\n\nCordialement,\n\nCustomer Care Team",
   "trace": [
    {
     "id": "C15:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: julie.martin@example.fr\nSubject: Cage pour chien - extérieur ?\nAttachments: none\n\nBonjour, est-ce que la grande cage en bois pour chien (XL) peut être utilisée dehors sur une terrasse couverte ? Merci d'avance.\n\"\"\"",
     "response": "```json\n{\n  \"language\": \"fr\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Customer asks about the large (XL) wooden dog crate\",\n    \"Intended use is outdoors on a covered terrace\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"DC-06\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"WEATHER\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirmation whether the XL wooden dog crate can be used outdoors on a covered terrace\"\n    }\n  ]\n}\n```",
     "ms": 0
    },
    {
     "id": "C15:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"fr\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Customer asks about the large (XL) wooden dog crate\",\n    \"Intended use is outdoors on a covered terrace\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"DC-06\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"WEATHER\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirmation whether the XL wooden dog crate can be used outdoors on a covered terrace\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"DC-06\",\n    \"product\": \"XL Wooden Dog Crate Furniture\",\n    \"facts\": {\n      \"WEATHER\": \"Indoor use only. Not suitable for outdoor use or damp areas.\"\n    }\n  }\n]",
     "ms": 0
    },
    {
     "id": "C15:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (fr).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: julie.martin@example.fr\nSubject: Cage pour chien - extérieur ?\nAttachments: none\n\nBonjour, est-ce que la grande cage en bois pour chien (XL) peut être utilisée dehors sur une terrasse couverte ? Merci d'avance.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"DC-06\",\n    \"product\": \"XL Wooden Dog Crate Furniture\",\n    \"facts\": {\n      \"WEATHER\": \"Indoor use only. Not suitable for outdoor use or damp areas.\"\n    }\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Bonjour Julie,\\n\\nMerci pour votre question concernant la grande cage en bois pour chien (XL).\\n\\nMalheureusement, cette cage est conçue uniquement pour un usage en intérieur. Elle n'est pas adaptée à une utilisation en extérieur, y compris sur une terrasse couverte, ni dans des endroits humides.\\n\\nNous vous conseillons donc de la placer dans un espace intérieur sec afin de préserver le bois et le confort de votre chien.\\n\\nN'hésitez pas à nous contacter si vous avez d'autres questions.\\n\\nCordialement,\\n\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C15",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 ANSWER_QA；实际 ANSWER_QA"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "说明仅限室内",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得说可户外使用",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 fr；检测 fr"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C16",
   "decisions": [
    "SHIPPING_DELAY_ESCALATE"
   ],
   "detail": [
    {
     "decision": "SHIPPING_DELAY_ESCALATE",
     "order_id": "AS-10162",
     "reason": "Order placed 2026-10-28 is still in processing on 2026-11-09, which is more than 5 business days without shipment. Apologize, escalate to the warehouse, and offer cancellation with full refund. No ship date promised."
    }
   ],
   "reply": "Dear Customer,\n\nThank you for your email, and I'm sorry for the frustration. Your order AS-10162 (12V Kids Ride-On Car), placed on October 28, is still showing as processing, which is longer than it should be before shipment.\n\nI have escalated your order to our fulfilment team to look into it urgently. I'm not able to confirm a shipping date or guarantee that the car will arrive before the 15th.\n\nIf you would prefer not to wait, I can cancel the order and issue a full refund of your order amount. Please reply to let me know whether you would like to keep the order or cancel it.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C16:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: frustrated.dad@example.com\nSubject: Where is my order??\nAttachments: none\n\nI ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th. It still says processing. When will it ship? I need it before the 15th.\n\"\"\"\n\nOrder records found:\n- AS-10162: {\"sku\":\"KB-04\",\"amount_usd\":239,\"order_date\":\"2026-10-28\",\"status\":\"processing\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"SHIPPING_DELAY_ESCALATE\",\"order_id\":\"AS-10162\",\"reason\":\"Order placed 2026-10-28 is still in processing on 2026-11-09, which is more than 5 business days without shipment. Apologize, escalate to the warehouse, and offer cancellation with full refund. No ship date promised.\"}],\"reply\":\"Dear Customer,\\n\\nThank you for your email, and I'm sorry for the frustration. Your order AS-10162 (12V Kids Ride-On Car), placed on October 28, is still showing as processing, which is longer than it should be before shipment.\\n\\nI have escalated your order to our fulfilment team to look into it urgently. I'm not able to confirm a shipping date or guarantee that the car will arrive before the 15th.\\n\\nIf you would prefer not to wait, I can cancel the order and issue a full refund of your order amount. Please reply to let me know whether you would like to keep the order or cancel it.\\n\\nKind regards,\\nCustomer Service\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C16",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 SHIPPING_DELAY_ESCALATE；实际 SHIPPING_DELAY_ESCALATE"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "提供取消并全额退款选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得承诺发货/到货日期",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C16",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Ordered the ride-on car (AS-10162) on October 28",
     "Order still shows as processing",
     "Needs the item before the 15th (son's birthday)"
    ],
    "intents": [
     {
      "type": "SHIPPING_STATUS",
      "order_id": "AS-10162",
      "sku": "KB-04",
      "part_codes": [],
      "severity": null,
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Know when the order will ship, needs it before the 15th"
     }
    ]
   },
   "decisions": [
    "SHIPPING_DELAY_ESCALATE"
   ],
   "detail": [
    {
     "intent": "SHIPPING_STATUS",
     "order_id": "AS-10162",
     "decision": "SHIPPING_DELAY_ESCALATE",
     "business_days_unshipped": 8,
     "options": [
      "keep the order (warehouse escalated)",
      "cancel with full refund"
     ]
    }
   ],
   "reply": "Dear Customer,\n\nI'm sorry your order AS-10162 has not shipped yet, especially with your son's birthday on the 15th.\n\nWe have escalated the delay with our warehouse. You have two options:\n\n1. Keep your order: we will continue to hold it while the warehouse works on it.\n2. Cancel your order: you will receive a full refund.\n\nPlease reply with your choice and we will act on it right away.\n\nWarm regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C16:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: frustrated.dad@example.com\nSubject: Where is my order??\nAttachments: none\n\nI ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th. It still says processing. When will it ship? I need it before the 15th.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Ordered the ride-on car (AS-10162) on October 28\",\n    \"Order still shows as processing\",\n    \"Needs the item before the 15th (son's birthday)\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10162\",\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Know when the order will ship, needs it before the 15th\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C16:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Ordered the ride-on car (AS-10162) on October 28\",\n    \"Order still shows as processing\",\n    \"Needs the item before the 15th (son's birthday)\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10162\",\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Know when the order will ship, needs it before the 15th\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10162\",\n    \"decision\": \"SHIPPING_DELAY_ESCALATE\",\n    \"business_days_unshipped\": 8,\n    \"options\": [\n      \"keep the order (warehouse escalated)\",\n      \"cancel with full refund\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C16:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: frustrated.dad@example.com\nSubject: Where is my order??\nAttachments: none\n\nI ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th. It still says processing. When will it ship? I need it before the 15th.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10162\",\n    \"decision\": \"SHIPPING_DELAY_ESCALATE\",\n    \"business_days_unshipped\": 8,\n    \"options\": [\n      \"keep the order (warehouse escalated)\",\n      \"cancel with full refund\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Customer,\\n\\nI'm sorry your order AS-10162 has not shipped yet, especially with your son's birthday on the 15th.\\n\\nWe have escalated the delay with our warehouse. You have two options:\\n\\n1. Keep your order: we will continue to hold it while the warehouse works on it.\\n2. Cancel your order: you will receive a full refund.\\n\\nPlease reply with your choice and we will act on it right away.\\n\\nWarm regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C16",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 SHIPPING_DELAY_ESCALATE；实际 SHIPPING_DELAY_ESCALATE"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "提供取消并全额退款选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得承诺发货/到货日期",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C17",
   "decisions": [
    "CARRIER_INVESTIGATION"
   ],
   "detail": [
    {
     "decision": "CARRIER_INVESTIGATION",
     "order_id": "AS-10150",
     "reason": "In transit, carrier ETA 2026-11-04 is 5 days ago (more than 3 days past ETA). Last scan was 2026-10-30 at Memphis hub. Open a carrier investigation; do not promise a delivery date."
    }
   ],
   "reply": "Dear Customer,\n\nThank you for reaching out, and I'm sorry your gazebo order AS-10150 has not arrived. I understand the delay is frustrating, especially since it was expected by November 4.\n\nThe carrier's last scan on your order was on October 30 at the Memphis hub, and the tracking has not updated since. Because the shipment is now well past its estimated delivery date, we have opened an investigation with the carrier to locate your package. We will follow up with you as soon as we have an update from the carrier.\n\nBest regards,\nCustomer Service Team",
   "trace": [
    {
     "id": "C17:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: patio.project@example.com\nSubject: Gazebo delivery late\nAttachments: none\n\nMy gazebo order AS-10150 was supposed to arrive by November 4. Tracking hasn't updated since October 30 in Memphis. What's going on?\n\"\"\"\n\nOrder records found:\n- AS-10150: {\"sku\":\"GZ-05\",\"amount_usd\":599,\"order_date\":\"2026-10-20\",\"status\":\"in_transit\",\"carrier\":\"FreightLine\",\"eta\":\"2026-11-04\",\"last_scan\":\"2026-10-30 Memphis hub\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"CARRIER_INVESTIGATION\",\"order_id\":\"AS-10150\",\"reason\":\"In transit, carrier ETA 2026-11-04 is 5 days ago (more than 3 days past ETA). Last scan was 2026-10-30 at Memphis hub. Open a carrier investigation; do not promise a delivery date.\"}],\"reply\":\"Dear Customer,\\n\\nThank you for reaching out, and I'm sorry your gazebo order AS-10150 has not arrived. I understand the delay is frustrating, especially since it was expected by November 4.\\n\\nThe carrier's last scan on your order was on October 30 at the Memphis hub, and the tracking has not updated since. Because the shipment is now well past its estimated delivery date, we have opened an investigation with the carrier to locate your package. We will follow up with you as soon as we have an update from the carrier.\\n\\nBest regards,\\nCustomer Service Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C17",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 CARRIER_INVESTIGATION；实际 CARRIER_INVESTIGATION"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "claim",
      "label": "不得承诺新到货日期",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C17",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Order AS-10150 is a gazebo",
     "Expected arrival was November 4",
     "Tracking has not updated since October 30 in Memphis"
    ],
    "intents": [
     {
      "type": "SHIPPING_STATUS",
      "order_id": "AS-10150",
      "sku": "GZ-05",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Update on late delivery of the gazebo"
     }
    ]
   },
   "decisions": [
    "CARRIER_INVESTIGATION"
   ],
   "detail": [
    {
     "intent": "SHIPPING_STATUS",
     "order_id": "AS-10150",
     "decision": "CARRIER_INVESTIGATION",
     "carrier": "FreightLine",
     "original_eta": "2026-11-04",
     "last_scan": "2026-10-30 Memphis hub",
     "days_late": 5
    }
   ],
   "reply": "Dear Customer,\n\nI'm sorry that your gazebo order AS-10150 has not arrived by the expected date of November 4, and that tracking has not updated since October 30 at the Memphis hub.\n\nWe have opened a carrier investigation with FreightLine to locate your shipment. We are not able to give you a new delivery date yet, but we will keep you informed as the investigation progresses.\n\nThank you for your patience.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C17:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: patio.project@example.com\nSubject: Gazebo delivery late\nAttachments: none\n\nMy gazebo order AS-10150 was supposed to arrive by November 4. Tracking hasn't updated since October 30 in Memphis. What's going on?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Order AS-10150 is a gazebo\",\n    \"Expected arrival was November 4\",\n    \"Tracking has not updated since October 30 in Memphis\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10150\",\n      \"sku\": \"GZ-05\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Update on late delivery of the gazebo\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C17:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Order AS-10150 is a gazebo\",\n    \"Expected arrival was November 4\",\n    \"Tracking has not updated since October 30 in Memphis\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10150\",\n      \"sku\": \"GZ-05\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Update on late delivery of the gazebo\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  }\n]",
     "ms": 0
    },
    {
     "id": "C17:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: patio.project@example.com\nSubject: Gazebo delivery late\nAttachments: none\n\nMy gazebo order AS-10150 was supposed to arrive by November 4. Tracking hasn't updated since October 30 in Memphis. What's going on?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Customer,\\n\\nI'm sorry that your gazebo order AS-10150 has not arrived by the expected date of November 4, and that tracking has not updated since October 30 at the Memphis hub.\\n\\nWe have opened a carrier investigation with FreightLine to locate your shipment. We are not able to give you a new delivery date yet, but we will keep you informed as the investigation progresses.\\n\\nThank you for your patience.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C17",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 CARRIER_INVESTIGATION；实际 CARRIER_INVESTIGATION"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "claim",
      "label": "不得承诺新到货日期",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C18",
   "decisions": [
    "WAIT_48H"
   ],
   "detail": [
    {
     "decision": "WAIT_48H",
     "order_id": "AS-10201",
     "reason": "Tracking shows delivered on 2026-11-08, less than 2 days ago. Customer should check around the property and with neighbours and wait 48 hours before a lost-package case is opened."
    }
   ],
   "reply": "Dear customer,\n\nThank you for letting us know. We understand it is frustrating when the tracking shows your garden bed (order AS-10201) as delivered but you cannot find it.\n\nThe carrier recorded the delivery yesterday, 8 November. Before we take further action, please:\n\n1. Check around your property, including porches, side gates, garages, sheds, and behind bushes or large planters.\n2. Ask your neighbours whether they received a parcel on your behalf.\n3. Wait 48 hours from the delivery scan, since packages are sometimes recorded as delivered before they are dropped off.\n\nIf the package has still not turned up after 48 hours, please reply to this email and we will open a lost-package case for you. We will then take the next steps from there.\n\nThank you for your patience.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C18:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: no.box@example.com\nSubject: Says delivered but nothing here\nAttachments: none\n\nTracking for AS-10201 says the garden bed was delivered yesterday but there's nothing at my door. Please send another one or refund me.\n\"\"\"\n\nOrder records found:\n- AS-10201: {\"sku\":\"GB-03\",\"amount_usd\":89,\"order_date\":\"2026-11-02\",\"status\":\"delivered\",\"delivered\":\"2026-11-08\",\"carrier\":\"UPS\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"WAIT_48H\",\"order_id\":\"AS-10201\",\"reason\":\"Tracking shows delivered on 2026-11-08, less than 2 days ago. Customer should check around the property and with neighbours and wait 48 hours before a lost-package case is opened.\"}],\"reply\":\"Dear customer,\\n\\nThank you for letting us know. We understand it is frustrating when the tracking shows your garden bed (order AS-10201) as delivered but you cannot find it.\\n\\nThe carrier recorded the delivery yesterday, 8 November. Before we take further action, please:\\n\\n1. Check around your property, including porches, side gates, garages, sheds, and behind bushes or large planters.\\n2. Ask your neighbours whether they received a parcel on your behalf.\\n3. Wait 48 hours from the delivery scan, since packages are sometimes recorded as delivered before they are dropped off.\\n\\nIf the package has still not turned up after 48 hours, please reply to this email and we will open a lost-package case for you. We will then take the next steps from there.\\n\\nThank you for your patience.\\n\\nKind regards,\\nCustomer Service\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C18",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 WAIT_48H；实际 WAIT_48H"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "请客户查看周边并等待 48 小时",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得直接承诺补发或退款",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C18",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Tracking for AS-10201 says the garden bed was delivered yesterday",
     "Nothing has arrived at the customer's door"
    ],
    "intents": [
     {
      "type": "NOT_RECEIVED",
      "order_id": "AS-10201",
      "sku": "GB-03",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Send another garden bed or refund the order"
     }
    ]
   },
   "decisions": [
    "WAIT_48H"
   ],
   "detail": [
    {
     "intent": "NOT_RECEIVED",
     "order_id": "AS-10201",
     "decision": "WAIT_48H",
     "delivered_scan": "2026-11-08",
     "carrier": "UPS"
    }
   ],
   "reply": "Dear Customer,\n\nI'm sorry to hear your garden bed has not arrived, even though tracking shows it as delivered yesterday.\n\nFor order AS-10201, the carrier UPS recorded a delivery scan on 2026-11-08. Before we proceed with a replacement or refund, please check around your property, including the porch, side gate, and with your neighbours, as parcels are sometimes left in a nearby spot. Please allow 48 hours from now to see whether the package turns up.\n\nIf the parcel is still missing after 48 hours, simply reply to this email and we will open a case for you.\n\nThank you for your patience.\n\nCustomer Care Team",
   "trace": [
    {
     "id": "C18:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: no.box@example.com\nSubject: Says delivered but nothing here\nAttachments: none\n\nTracking for AS-10201 says the garden bed was delivered yesterday but there's nothing at my door. Please send another one or refund me.\n\"\"\"",
     "response": "```json\n{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Tracking for AS-10201 says the garden bed was delivered yesterday\",\n    \"Nothing has arrived at the customer's door\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"NOT_RECEIVED\",\n      \"order_id\": \"AS-10201\",\n      \"sku\": \"GB-03\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Send another garden bed or refund the order\"\n    }\n  ]\n}\n```",
     "ms": 0
    },
    {
     "id": "C18:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Tracking for AS-10201 says the garden bed was delivered yesterday\",\n    \"Nothing has arrived at the customer's door\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"NOT_RECEIVED\",\n      \"order_id\": \"AS-10201\",\n      \"sku\": \"GB-03\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Send another garden bed or refund the order\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"NOT_RECEIVED\",\n    \"order_id\": \"AS-10201\",\n    \"decision\": \"WAIT_48H\",\n    \"delivered_scan\": \"2026-11-08\",\n    \"carrier\": \"UPS\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C18:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: no.box@example.com\nSubject: Says delivered but nothing here\nAttachments: none\n\nTracking for AS-10201 says the garden bed was delivered yesterday but there's nothing at my door. Please send another one or refund me.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"NOT_RECEIVED\",\n    \"order_id\": \"AS-10201\",\n    \"decision\": \"WAIT_48H\",\n    \"delivered_scan\": \"2026-11-08\",\n    \"carrier\": \"UPS\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Customer,\\n\\nI'm sorry to hear your garden bed has not arrived, even though tracking shows it as delivered yesterday.\\n\\nFor order AS-10201, the carrier UPS recorded a delivery scan on 2026-11-08. Before we proceed with a replacement or refund, please check around your property, including the porch, side gate, and with your neighbours, as parcels are sometimes left in a nearby spot. Please allow 48 hours from now to see whether the package turns up.\\n\\nIf the parcel is still missing after 48 hours, simply reply to this email and we will open a case for you.\\n\\nThank you for your patience.\\n\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C18",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 WAIT_48H；实际 WAIT_48H"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "请客户查看周边并等待 48 小时",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得直接承诺补发或退款",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C19",
   "decisions": [
    "PROVIDE_ETA",
    "ADDRESS_CHANGE_DENIED"
   ],
   "detail": [
    {
     "decision": "PROVIDE_ETA",
     "order_id": "AS-10240",
     "reason": "Order is in transit with carrier ETA 2026-11-12; not more than 3 days past ETA, so give the ETA only."
    },
    {
     "decision": "ADDRESS_CHANGE_DENIED",
     "order_id": "AS-10240",
     "reason": "Address changes are only possible while the order is still processing; this order has already shipped and is in transit."
    }
   ],
   "reply": "Hello,\n\nThank you for your email about order AS-10240.\n\nDelivery date: Your Galvanized Steel Raised Garden Bed is currently in transit with UPS. The estimated delivery date is 12 November 2026. The most recent scan was in Columbus, OH on 8 November 2026.\n\nAddress change: I'm sorry, but we are unable to change the delivery address for this order. Address changes can only be made before an order has shipped, and this order is already with the carrier.\n\nIf you have any other questions, please reply to this email and we will be happy to help.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C19:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: moving.soon@example.com\nSubject: Delivery date and address change\nAttachments: none\n\nHi, when will my garden bed (AS-10240) arrive? Also, I'm moving next week - can you change the delivery address to 42 Oak Street, Dublin OH?\n\"\"\"\n\nOrder records found:\n- AS-10240: {\"sku\":\"GB-03\",\"amount_usd\":95,\"order_date\":\"2026-11-03\",\"status\":\"in_transit\",\"carrier\":\"UPS\",\"eta\":\"2026-11-12\",\"last_scan\":\"2026-11-08 Columbus OH\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"PROVIDE_ETA\",\"order_id\":\"AS-10240\",\"reason\":\"Order is in transit with carrier ETA 2026-11-12; not more than 3 days past ETA, so give the ETA only.\"},{\"decision\":\"ADDRESS_CHANGE_DENIED\",\"order_id\":\"AS-10240\",\"reason\":\"Address changes are only possible while the order is still processing; this order has already shipped and is in transit.\"}],\"reply\":\"Hello,\\n\\nThank you for your email about order AS-10240.\\n\\nDelivery date: Your Galvanized Steel Raised Garden Bed is currently in transit with UPS. The estimated delivery date is 12 November 2026. The most recent scan was in Columbus, OH on 8 November 2026.\\n\\nAddress change: I'm sorry, but we are unable to change the delivery address for this order. Address changes can only be made before an order has shipped, and this order is already with the carrier.\\n\\nIf you have any other questions, please reply to this email and we will be happy to help.\\n\\nKind regards,\\nCustomer Service\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C19",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 PROVIDE_ETA + ADDRESS_CHANGE_DENIED；实际 PROVIDE_ETA + ADDRESS_CHANGE_DENIED"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "给出 ETA 11 月 12 日",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得声称已改地址",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C19",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Customer is moving next week",
     "Customer asks when garden bed AS-10240 will arrive",
     "Requested new delivery address: 42 Oak Street, Dublin OH"
    ],
    "intents": [
     {
      "type": "SHIPPING_STATUS",
      "order_id": "AS-10240",
      "sku": "GB-03",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Delivery date for garden bed AS-10240"
     },
     {
      "type": "ADDRESS_CHANGE",
      "order_id": "AS-10240",
      "sku": null,
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Change delivery address to 42 Oak Street, Dublin OH"
     }
    ]
   },
   "decisions": [
    "PROVIDE_ETA",
    "ADDRESS_CHANGE_DENIED"
   ],
   "detail": [
    {
     "intent": "SHIPPING_STATUS",
     "order_id": "AS-10240",
     "decision": "PROVIDE_ETA",
     "carrier": "UPS",
     "eta": "2026-11-12",
     "last_scan": "2026-11-08 Columbus OH"
    },
    {
     "intent": "ADDRESS_CHANGE",
     "order_id": "AS-10240",
     "decision": "ADDRESS_CHANGE_DENIED",
     "reason": "already_shipped",
     "carrier": "UPS"
    }
   ],
   "reply": "Hello,\n\nThank you for getting in touch about your garden bed (order AS-10240).\n\nYour order is with UPS and is expected to arrive on 2026-11-12. The most recent scan shows it in Columbus, OH on 2026-11-08.\n\nUnfortunately, your order has already shipped, so we are unable to change the delivery address. We understand this is inconvenient with your move next week, and we're sorry for the trouble.\n\nIf you have any further questions, please reply to this email.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C19:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: moving.soon@example.com\nSubject: Delivery date and address change\nAttachments: none\n\nHi, when will my garden bed (AS-10240) arrive? Also, I'm moving next week - can you change the delivery address to 42 Oak Street, Dublin OH?\n\"\"\"",
     "response": "```json\n{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Customer is moving next week\",\n    \"Customer asks when garden bed AS-10240 will arrive\",\n    \"Requested new delivery address: 42 Oak Street, Dublin OH\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10240\",\n      \"sku\": \"GB-03\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Delivery date for garden bed AS-10240\"\n    },\n    {\n      \"type\": \"ADDRESS_CHANGE\",\n      \"order_id\": \"AS-10240\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Change delivery address to 42 Oak Street, Dublin OH\"\n    }\n  ]\n}\n```",
     "ms": 0
    },
    {
     "id": "C19:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Customer is moving next week\",\n    \"Customer asks when garden bed AS-10240 will arrive\",\n    \"Requested new delivery address: 42 Oak Street, Dublin OH\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10240\",\n      \"sku\": \"GB-03\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Delivery date for garden bed AS-10240\"\n    },\n    {\n      \"type\": \"ADDRESS_CHANGE\",\n      \"order_id\": \"AS-10240\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Change delivery address to 42 Oak Street, Dublin OH\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"PROVIDE_ETA\",\n    \"carrier\": \"UPS\",\n    \"eta\": \"2026-11-12\",\n    \"last_scan\": \"2026-11-08 Columbus OH\"\n  },\n  {\n    \"intent\": \"ADDRESS_CHANGE\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"ADDRESS_CHANGE_DENIED\",\n    \"reason\": \"already_shipped\",\n    \"carrier\": \"UPS\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C19:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: moving.soon@example.com\nSubject: Delivery date and address change\nAttachments: none\n\nHi, when will my garden bed (AS-10240) arrive? Also, I'm moving next week - can you change the delivery address to 42 Oak Street, Dublin OH?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"PROVIDE_ETA\",\n    \"carrier\": \"UPS\",\n    \"eta\": \"2026-11-12\",\n    \"last_scan\": \"2026-11-08 Columbus OH\"\n  },\n  {\n    \"intent\": \"ADDRESS_CHANGE\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"ADDRESS_CHANGE_DENIED\",\n    \"reason\": \"already_shipped\",\n    \"carrier\": \"UPS\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hello,\\n\\nThank you for getting in touch about your garden bed (order AS-10240).\\n\\nYour order is with UPS and is expected to arrive on 2026-11-12. The most recent scan shows it in Columbus, OH on 2026-11-08.\\n\\nUnfortunately, your order has already shipped, so we are unable to change the delivery address. We understand this is inconvenient with your move next week, and we're sorry for the trouble.\\n\\nIf you have any further questions, please reply to this email.\\n\\nBest regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C19",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 PROVIDE_ETA + ADDRESS_CHANGE_DENIED；实际 PROVIDE_ETA + ADDRESS_CHANGE_DENIED"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "给出 ETA 11 月 12 日",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得声称已改地址",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C20",
   "decisions": [
    "RESHIP_PARTS",
    "CARRIER_INVESTIGATION",
    "ANSWER_QA"
   ],
   "detail": [
    {
     "decision": "RESHIP_PARTS",
     "order_id": "AS-10230",
     "reason": "Missing part B2 reported 3 days after delivery (within 30 days); part code provided and B2 is in stock (8)."
    },
    {
     "decision": "CARRIER_INVESTIGATION",
     "order_id": "AS-10150",
     "reason": "In transit, ETA 2026-11-04 is more than 3 days past; last scan 2026-10-30, so open a carrier investigation without promising a delivery date."
    },
    {
     "decision": "ANSWER_QA",
     "order_id": "AS-10230",
     "reason": "Canopy weather question answered from spec: water-resistant, not waterproof; store cushions indoors in heavy rain."
    }
   ],
   "reply": "Hello,\n\nThank you for your email. Here is an update on each of your three points.\n\n1) Missing part on swing chair (order AS-10230)\nWe're sorry that part B2 (the small crossbar) was missing from your delivery. We will ship a replacement B2 crossbar to you at no cost.\n\n2) Late gazebo delivery (order AS-10150)\nWe're sorry for the delay. Your order has been in transit with FreightLine, and the tracking has not updated since 30 October 2026 (Memphis hub), while the estimated delivery date of 4 November 2026 has passed. We have opened an investigation with the carrier. We are not able to give you a delivery date yet, but we will follow up with you as soon as we have an update from the carrier.\n\n3) Canopy on the swing chair\nThe canopy is water-resistant but not waterproof. For heavy rain, we recommend storing the cushions indoors. The frame is rust-resistant.\n\nIf you have any other questions, please reply to this email.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C20:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: busy.owner@example.com\nSubject: A few issues\nAttachments: none\n\nHi team, a few things:\n1) My swing chair (AS-10230) arrived without part B2, the small crossbar.\n2) My gazebo order AS-10150 is late and tracking is stuck.\n3) Is the swing chair canopy waterproof? We get heavy rain.\nThanks.\n\"\"\"\n\nOrder records found:\n- AS-10230: {\"sku\":\"SW-01\",\"amount_usd\":279,\"order_date\":\"2026-10-28\",\"status\":\"delivered\",\"delivered\":\"2026-11-06\",\"country\":\"US\"}\n- AS-10150: {\"sku\":\"GZ-05\",\"amount_usd\":599,\"order_date\":\"2026-10-20\",\"status\":\"in_transit\",\"carrier\":\"FreightLine\",\"eta\":\"2026-11-04\",\"last_scan\":\"2026-10-30 Memphis hub\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"RESHIP_PARTS\",\"order_id\":\"AS-10230\",\"reason\":\"Missing part B2 reported 3 days after delivery (within 30 days); part code provided and B2 is in stock (8).\"},{\"decision\":\"CARRIER_INVESTIGATION\",\"order_id\":\"AS-10150\",\"reason\":\"In transit, ETA 2026-11-04 is more than 3 days past; last scan 2026-10-30, so open a carrier investigation without promising a delivery date.\"},{\"decision\":\"ANSWER_QA\",\"order_id\":\"AS-10230\",\"reason\":\"Canopy weather question answered from spec: water-resistant, not waterproof; store cushions indoors in heavy rain.\"}],\"reply\":\"Hello,\\n\\nThank you for your email. Here is an update on each of your three points.\\n\\n1) Missing part on swing chair (order AS-10230)\\nWe're sorry that part B2 (the small crossbar) was missing from your delivery. We will ship a replacement B2 crossbar to you at no cost.\\n\\n2) Late gazebo delivery (order AS-10150)\\nWe're sorry for the delay. Your order has been in transit with FreightLine, and the tracking has not updated since 30 October 2026 (Memphis hub), while the estimated delivery date of 4 November 2026 has passed. We have opened an investigation with the carrier. We are not able to give you a delivery date yet, but we will follow up with you as soon as we have an update from the carrier.\\n\\n3) Canopy on the swing chair\\nThe canopy is water-resistant but not waterproof. For heavy rain, we recommend storing the cushions indoors. The frame is rust-resistant.\\n\\nIf you have any other questions, please reply to this email.\\n\\nKind regards,\\nCustomer Service\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C20",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 RESHIP_PARTS + CARRIER_INVESTIGATION + ANSWER_QA；实际 RESHIP_PARTS + CARRIER_INVESTIGATION + ANSWER_QA"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "确认补寄 B2",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "说明是防泼水而非防水",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得说顶棚防水",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C20",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": false,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Swing chair AS-10230 arrived without part B2, the small crossbar",
     "Gazebo order AS-10150 is late and tracking is stuck",
     "Customer asks whether the swing chair canopy is waterproof; they get heavy rain"
    ],
    "intents": [
     {
      "type": "MISSING_PARTS",
      "order_id": "AS-10230",
      "sku": "SW-01",
      "part_codes": [
       "B2"
      ],
      "severity": "UNKNOWN",
      "component": "small crossbar",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Supply the missing part B2 (small crossbar)"
     },
     {
      "type": "SHIPPING_STATUS",
      "order_id": "AS-10150",
      "sku": "GZ-05",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNOPENED",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Get an update on the late gazebo order; tracking is stuck"
     },
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": "SW-01",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [
       "WEATHER"
      ],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Confirm whether the swing chair canopy is waterproof for heavy rain"
     }
    ]
   },
   "decisions": [
    "RESHIP_PARTS",
    "CARRIER_INVESTIGATION",
    "ANSWER_QA"
   ],
   "detail": [
    {
     "intent": "MISSING_PARTS",
     "order_id": "AS-10230",
     "decision": "RESHIP_PARTS",
     "parts": [
      "B2"
     ],
     "product": "3-Seat Patio Swing Chair"
    },
    {
     "intent": "SHIPPING_STATUS",
     "order_id": "AS-10150",
     "decision": "CARRIER_INVESTIGATION",
     "carrier": "FreightLine",
     "original_eta": "2026-11-04",
     "last_scan": "2026-10-30 Memphis hub",
     "days_late": 5
    },
    {
     "intent": "PRODUCT_QA",
     "order_id": null,
     "decision": "ANSWER_QA",
     "sku": "SW-01",
     "product": "3-Seat Patio Swing Chair",
     "facts": {
      "WEATHER": "Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant."
     }
    }
   ],
   "reply": "Dear valued customer,\n\nThank you for reaching out, and I'm sorry about the missing part and the delay with your gazebo order.\n\nSwing chair (AS-10230): We will reship part B2, the small crossbar, at no cost to you. The tracking number will follow by email.\n\nGazebo order (AS-10150): Your order was expected on 2026-11-04 but its last scan was at the Memphis hub on 2026-10-30 with carrier FreightLine. We have opened a carrier investigation and apologize for the uncertainty. We are unable to give a new delivery date at this time.\n\nSwing chair canopy: The canopy is water-resistant, not waterproof. For heavy rain, we recommend storing the cushions indoors. The frame is rust-resistant.\n\nIf you have any further questions, please reply to this email.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C20:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: busy.owner@example.com\nSubject: A few issues\nAttachments: none\n\nHi team, a few things:\n1) My swing chair (AS-10230) arrived without part B2, the small crossbar.\n2) My gazebo order AS-10150 is late and tracking is stuck.\n3) Is the swing chair canopy waterproof? We get heavy rain.\nThanks.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Swing chair AS-10230 arrived without part B2, the small crossbar\",\n    \"Gazebo order AS-10150 is late and tracking is stuck\",\n    \"Customer asks whether the swing chair canopy is waterproof; they get heavy rain\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"MISSING_PARTS\",\n      \"order_id\": \"AS-10230\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [\"B2\"],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"small crossbar\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Supply the missing part B2 (small crossbar)\"\n    },\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10150\",\n      \"sku\": \"GZ-05\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Get an update on the late gazebo order; tracking is stuck\"\n    },\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"WEATHER\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirm whether the swing chair canopy is waterproof for heavy rain\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C20:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Swing chair AS-10230 arrived without part B2, the small crossbar\",\n    \"Gazebo order AS-10150 is late and tracking is stuck\",\n    \"Customer asks whether the swing chair canopy is waterproof; they get heavy rain\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"MISSING_PARTS\",\n      \"order_id\": \"AS-10230\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [\n        \"B2\"\n      ],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"small crossbar\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Supply the missing part B2 (small crossbar)\"\n    },\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10150\",\n      \"sku\": \"GZ-05\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Get an update on the late gazebo order; tracking is stuck\"\n    },\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"WEATHER\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Confirm whether the swing chair canopy is waterproof for heavy rain\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10230\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"B2\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  },\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  },\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"SW-01\",\n    \"product\": \"3-Seat Patio Swing Chair\",\n    \"facts\": {\n      \"WEATHER\": \"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\"\n    }\n  }\n]",
     "ms": 0
    },
    {
     "id": "C20:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: busy.owner@example.com\nSubject: A few issues\nAttachments: none\n\nHi team, a few things:\n1) My swing chair (AS-10230) arrived without part B2, the small crossbar.\n2) My gazebo order AS-10150 is late and tracking is stuck.\n3) Is the swing chair canopy waterproof? We get heavy rain.\nThanks.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10230\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"B2\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  },\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  },\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"SW-01\",\n    \"product\": \"3-Seat Patio Swing Chair\",\n    \"facts\": {\n      \"WEATHER\": \"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\"\n    }\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear valued customer,\\n\\nThank you for reaching out, and I'm sorry about the missing part and the delay with your gazebo order.\\n\\nSwing chair (AS-10230): We will reship part B2, the small crossbar, at no cost to you. The tracking number will follow by email.\\n\\nGazebo order (AS-10150): Your order was expected on 2026-11-04 but its last scan was at the Memphis hub on 2026-10-30 with carrier FreightLine. We have opened a carrier investigation and apologize for the uncertainty. We are unable to give a new delivery date at this time.\\n\\nSwing chair canopy: The canopy is water-resistant, not waterproof. For heavy rain, we recommend storing the cushions indoors. The frame is rust-resistant.\\n\\nIf you have any further questions, please reply to this email.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C20",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 RESHIP_PARTS + CARRIER_INVESTIGATION + ANSWER_QA；实际 RESHIP_PARTS + CARRIER_INVESTIGATION + ANSWER_QA"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "确认补寄 B2",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "说明是防泼水而非防水",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得说顶棚防水",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C21",
   "decisions": [
    "OFFER_REPLACEMENT_OR_REFUND"
   ],
   "detail": [
    {
     "decision": "OFFER_REPLACEMENT_OR_REFUND",
     "order_id": "EB-58201",
     "reason": "Structural failure (broken welds, loose mesh) on a second unit of D51-105V01. Prior case TK-UK-20260929-000731 shows the same mesh weld failure on order EB-58201, so this is a repeat structural defect. Order amount is 258 USD (under 300), so offer replacement or full refund only, with no parts or partial refund. Animal enclosure damaged so animals could escape: include safety advice. No injury reported."
    }
   ],
   "reply": "Hello,\n\nThank you for your message and for the photos. I am sorry to hear that the mesh on this rabbit hutch has failed. I can see from the photos that a horizontal wire has come loose from its welds, and on the second hutch several vertical wires have come away and are bent. Because this is the second hutch from your order with the same type of mesh failure, we are not able to repair it with parts.\n\nYou can choose one of the following:\n1. A replacement hutch, shipped to you. You do not need to dismantle or return the damaged hutch before the new one arrives.\n2. A full refund for the affected hutch.\n\nPlease reply with your preferred option and we will arrange it.\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nWe appreciate your feedback about the mesh and apologize for the trouble this has caused.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C21:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: buyer-7f3a sent a message about Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: photo_1.jpg, photo_2.jpg\n\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n\n[Attachment descriptions, generated by the image step]\n- photo_1.jpg: Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.\n- photo_2.jpg: Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "```json\n{\"decisions\":[{\"decision\":\"OFFER_REPLACEMENT_OR_REFUND\",\"order_id\":\"EB-58201\",\"reason\":\"Structural failure (broken welds, loose mesh) on a second unit of D51-105V01. Prior case TK-UK-20260929-000731 shows the same mesh weld failure on order EB-58201, so this is a repeat structural defect. Order amount is 258 USD (under 300), so offer replacement or full refund only, with no parts or partial refund. Animal enclosure damaged so animals could escape: include safety advice. No injury reported.\"}],\"reply\":\"Hello,\\n\\nThank you for your message and for the photos. I am sorry to hear that the mesh on this rabbit hutch has failed. I can see from the photos that a horizontal wire has come loose from its welds, and on the second hutch several vertical wires have come away and are bent. Because this is the second hutch from your order with the same type of mesh failure, we are not able to repair it with parts.\\n\\nYou can choose one of the following:\\n1. A replacement hutch, shipped to you. You do not need to dismantle or return the damaged hutch before the new one arrives.\\n2. A full refund for the affected hutch.\\n\\nPlease reply with your preferred option and we will arrange it.\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nWe appreciate your feedback about the mesh and apologize for the trouble this has caused.\\n\\nKind regards,\\nCustomer Service\"}\n```",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C21",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": false,
      "value": 0,
      "detail": "期望 QUALITY_ESCALATION；实际 OFFER_REPLACEMENT_OR_REFUND"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "承认是重复问题",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出更换选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出全额退款选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "提醒动物安全",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得要求客户自行修理",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不得索要已有的订单号",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 0.6,
    "pass": false,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C21",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": true,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Second hutch's front mesh has gone (photo_1: a horizontal wire has broken free from its welds)",
     "First hutch (purple tube photo, photo_2) has several vertical mesh wires come away from welds and bent",
     "A ferret is inside both hutches",
     "Customer believes the problem is cheap mesh and that better mesh should be used"
    ],
    "intents": [
     {
      "type": "DEFECT_WARRANTY",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "front mesh door",
      "repeat_issue": true,
      "units_affected": 2,
      "item_condition": "USED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "Better-quality mesh used; no explicit resolution requested"
     }
    ]
   },
   "decisions": [
    "QUALITY_ESCALATION"
   ],
   "detail": [
    {
     "intent": "DEFECT_WARRANTY",
     "order_id": "EB-58201",
     "decision": "QUALITY_ESCALATION",
     "sku": "D51-105V01",
     "product": "Wooden Rabbit Hutch with Hinged Top",
     "component": "front mesh door",
     "units_affected": 2,
     "prior_cases": [
      "EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure"
     ],
     "options": [
      "replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)",
      "full refund"
     ],
     "order_qty": 3,
     "internal_log": {
      "sku": "D51-105V01",
      "defect": "repeat structural failure",
      "orders": [
       "EB-58201"
      ]
     },
     "safety_notice": "For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced."
    }
   ],
   "reply": "Dear buyer-7f3a,\n\nThank you for letting us know, and I'm sorry to hear about the mesh failure on your second hutch. This is a repeat of the front mesh door problem from your first cage, affecting two units, and I sincerely apologize for the trouble it has caused.\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nPlease choose one of the following options for your two affected units:\n\n1. Replacement, shipped first: the new unit will ship before you need to send anything back. You do not need to dismantle, return or wait for collection of the old cage before the new one arrives.\n2. Full refund.\n\nSimply reply with your choice (1 or 2) and we will take it from there.\n\nSincerely,\nCustomer Care Team",
   "trace": [
    {
     "id": "C21:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: buyer-7f3a sent a message about Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: photo_1.jpg, photo_2.jpg\n\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n\n[Attachment descriptions, generated by the image step]\n- photo_1.jpg: Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.\n- photo_2.jpg: Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n\"\"\"",
     "response": "```json\n{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Second hutch's front mesh has gone (photo_1: a horizontal wire has broken free from its welds)\",\n    \"First hutch (purple tube photo, photo_2) has several vertical mesh wires come away from welds and bent\",\n    \"A ferret is inside both hutches\",\n    \"Customer believes the problem is cheap mesh and that better mesh should be used\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Better-quality mesh used; no explicit resolution requested\"\n    }\n  ]\n}\n```",
     "ms": 0
    },
    {
     "id": "C21:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Second hutch's front mesh has gone (photo_1: a horizontal wire has broken free from its welds)\",\n    \"First hutch (purple tube photo, photo_2) has several vertical mesh wires come away from welds and bent\",\n    \"A ferret is inside both hutches\",\n    \"Customer believes the problem is cheap mesh and that better mesh should be used\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Better-quality mesh used; no explicit resolution requested\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"internal_log\": {\n      \"sku\": \"D51-105V01\",\n      \"defect\": \"repeat structural failure\",\n      \"orders\": [\n        \"EB-58201\"\n      ]\n    },\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C21:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: buyer-7f3a sent a message about Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: photo_1.jpg, photo_2.jpg\n\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n\n[Attachment descriptions, generated by the image step]\n- photo_1.jpg: Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.\n- photo_2.jpg: Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear buyer-7f3a,\\n\\nThank you for letting us know, and I'm sorry to hear about the mesh failure on your second hutch. This is a repeat of the front mesh door problem from your first cage, affecting two units, and I sincerely apologize for the trouble it has caused.\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nPlease choose one of the following options for your two affected units:\\n\\n1. Replacement, shipped first: the new unit will ship before you need to send anything back. You do not need to dismantle, return or wait for collection of the old cage before the new one arrives.\\n2. Full refund.\\n\\nSimply reply with your choice (1 or 2) and we will take it from there.\\n\\nSincerely,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C21",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 QUALITY_ESCALATION；实际 QUALITY_ESCALATION"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "承认是重复问题",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出更换选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出全额退款选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "提醒动物安全",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得要求客户自行修理",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不得索要已有的订单号",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C22",
   "decisions": [
    "OFFER_REPLACEMENT_OR_REFUND"
   ],
   "detail": [
    {
     "decision": "OFFER_REPLACEMENT_OR_REFUND",
     "order_id": "EB-58201",
     "reason": "Structural mesh weld failure on a repeat defect for the same SKU (prior case TK-UK-20260929-000731). Order amount is 258 USD, under 300 USD, so no specialist approval is needed. Parts and partial refunds are not offered. Animal enclosure damaged so the animal could escape: safety advice included. Replacement ships first, no return of the old unit required."
    }
   ],
   "reply": "Dear Customer,\n\nI'm sorry about this. I understand how worrying it is to find your ferret's cage has failed, and I'm glad your ferret didn't get out. Thank you for sending the photos. I also need to correct my earlier message: you should not have to repair the cage yourself, and I'm sorry for suggesting that.\n\nBecause the mesh welds have failed on this cage, which is a repeat of the same problem on the same product, we are not able to offer spare parts or a partial refund. Instead, you can choose either of the following for the affected cage(s):\n\n1. A replacement cage, sent to you first. You do not need to dismantle or return the damaged cage before the new one arrives.\n2. A full refund.\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nPlease reply with your choice and let me know if any other cages from this order have the same problem, so I can arrange everything together.\n\nKind regards,\n[Agent]",
   "trace": [
    {
     "id": "C22:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- end of earlier messages ---\n\n[New customer message]\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"OFFER_REPLACEMENT_OR_REFUND\",\"order_id\":\"EB-58201\",\"reason\":\"Structural mesh weld failure on a repeat defect for the same SKU (prior case TK-UK-20260929-000731). Order amount is 258 USD, under 300 USD, so no specialist approval is needed. Parts and partial refunds are not offered. Animal enclosure damaged so the animal could escape: safety advice included. Replacement ships first, no return of the old unit required.\"}],\"reply\":\"Dear Customer,\\n\\nI'm sorry about this. I understand how worrying it is to find your ferret's cage has failed, and I'm glad your ferret didn't get out. Thank you for sending the photos. I also need to correct my earlier message: you should not have to repair the cage yourself, and I'm sorry for suggesting that.\\n\\nBecause the mesh welds have failed on this cage, which is a repeat of the same problem on the same product, we are not able to offer spare parts or a partial refund. Instead, you can choose either of the following for the affected cage(s):\\n\\n1. A replacement cage, sent to you first. You do not need to dismantle or return the damaged cage before the new one arrives.\\n2. A full refund.\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nPlease reply with your choice and let me know if any other cages from this order have the same problem, so I can arrange everything together.\\n\\nKind regards,\\n[Agent]\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C22",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": false,
      "value": 0,
      "detail": "期望 QUALITY_ESCALATION；实际 OFFER_REPLACEMENT_OR_REFUND"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "承认买了 3 个",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出更换选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出全额退款选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "提醒动物安全",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "收回“自行修理”的要求",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得要求客户自行修理",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不得继续以 15% 为方案",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 0.5454545454545454,
    "pass": false,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C22",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": true,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [
     {
      "type": "PARTIAL_REFUND",
      "pct": 15,
      "units": 1,
      "status": "REJECTED",
      "reject_reason": "Customer says the offer isn't good enough given this is the second cage to fail and they paid a lot; wants the issue properly investigated"
     }
    ],
    "customer_choice": null,
    "info_already_given": [
     "This is the second cage to fail with the same mesh problem",
     "The first failed cage is the one shown in the second photo, with the purple tunnel inside",
     "The customer bought 3 cages from us",
     "The front welded-wire mesh door is failing at the welds",
     "The customer believes the mesh is cheap and not good enough quality",
     "A ferret is inside the hutch and has not been able to get out"
    ],
    "intents": [
     {
      "type": "DEFECT_WARRANTY",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "front welded-wire mesh door",
      "repeat_issue": true,
      "units_affected": 2,
      "item_condition": "ASSEMBLED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "Proper investigation and a satisfactory resolution for the mesh door failing at the welds on a repeat unit; customer questions the mesh quality"
     }
    ]
   },
   "decisions": [
    "QUALITY_ESCALATION"
   ],
   "detail": [
    {
     "intent": "DEFECT_WARRANTY",
     "order_id": "EB-58201",
     "decision": "QUALITY_ESCALATION",
     "sku": "D51-105V01",
     "product": "Wooden Rabbit Hutch with Hinged Top",
     "component": "front welded-wire mesh door",
     "units_affected": 2,
     "prior_cases": [
      "EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure"
     ],
     "options": [
      "replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)",
      "full refund"
     ],
     "order_qty": 3,
     "internal_log": {
      "sku": "D51-105V01",
      "defect": "repeat structural failure",
      "orders": [
       "EB-58201"
      ]
     },
     "safety_notice": "For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.",
     "corrections": [
      "You do not need to repair it yourself; please disregard that earlier suggestion."
     ],
     "do_not_offer": [
      "PARTIAL_REFUND 15% (Customer says the offer isn't good enough given this is the second cage to fail and they paid a lot; wants the issue properly investigated)"
     ]
    }
   ],
   "reply": "Dear Customer,\n\nI am sorry that the front welded-wire mesh door has failed on two of the three cages you purchased, and I understand how worrying this is, especially with your ferret. We recognise this is a repeat problem, and I apologise for the trouble it has caused.\n\nPlease disregard our earlier suggestion about repairing the cage yourself. You do not need to do that.\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nWe can offer you the following options:\n\n- Replacement: a new cage will be shipped first, so you do not need to dismantle or return the old one, or wait for it to be collected before the new one arrives.\n- Full refund.\n\nPlease let us know which option you would prefer and we will arrange it.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C22:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- end of earlier messages ---\n\n[New customer message]\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer says the offer isn't good enough given this is the second cage to fail and they paid a lot; wants the issue properly investigated\"\n    }\n  ],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"This is the second cage to fail with the same mesh problem\",\n    \"The first failed cage is the one shown in the second photo, with the purple tunnel inside\",\n    \"The customer bought 3 cages from us\",\n    \"The front welded-wire mesh door is failing at the welds\",\n    \"The customer believes the mesh is cheap and not good enough quality\",\n    \"A ferret is inside the hutch and has not been able to get out\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"ASSEMBLED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Proper investigation and a satisfactory resolution for the mesh door failing at the welds on a repeat unit; customer questions the mesh quality\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C22:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer says the offer isn't good enough given this is the second cage to fail and they paid a lot; wants the issue properly investigated\"\n    }\n  ],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"This is the second cage to fail with the same mesh problem\",\n    \"The first failed cage is the one shown in the second photo, with the purple tunnel inside\",\n    \"The customer bought 3 cages from us\",\n    \"The front welded-wire mesh door is failing at the welds\",\n    \"The customer believes the mesh is cheap and not good enough quality\",\n    \"A ferret is inside the hutch and has not been able to get out\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"ASSEMBLED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Proper investigation and a satisfactory resolution for the mesh door failing at the welds on a repeat unit; customer questions the mesh quality\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front welded-wire mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"internal_log\": {\n      \"sku\": \"D51-105V01\",\n      \"defect\": \"repeat structural failure\",\n      \"orders\": [\n        \"EB-58201\"\n      ]\n    },\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (Customer says the offer isn't good enough given this is the second cage to fail and they paid a lot; wants the issue properly investigated)\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C22:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- end of earlier messages ---\n\n[New customer message]\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front welded-wire mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (Customer says the offer isn't good enough given this is the second cage to fail and they paid a lot; wants the issue properly investigated)\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Customer,\\n\\nI am sorry that the front welded-wire mesh door has failed on two of the three cages you purchased, and I understand how worrying this is, especially with your ferret. We recognise this is a repeat problem, and I apologise for the trouble it has caused.\\n\\nPlease disregard our earlier suggestion about repairing the cage yourself. You do not need to do that.\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nWe can offer you the following options:\\n\\n- Replacement: a new cage will be shipped first, so you do not need to dismantle or return the old one, or wait for it to be collected before the new one arrives.\\n- Full refund.\\n\\nPlease let us know which option you would prefer and we will arrange it.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C22",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 QUALITY_ESCALATION；实际 QUALITY_ESCALATION"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "承认买了 3 个",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出更换选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出全额退款选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "提醒动物安全",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "收回“自行修理”的要求",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得要求客户自行修理",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不得继续以 15% 为方案",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C23",
   "decisions": [
    "HANDOFF",
    "HANDOFF"
   ],
   "detail": [
    {
     "decision": "HANDOFF",
     "order_id": "EB-58201",
     "reason": "Weld failure on the second unit was reported 53 days after delivery (delivered 2026-09-17), which is over 30 days, so it must go to a specialist and cannot be resolved automatically. It is a repeat structural defect on SKU D51-105V01 (prior case TK-UK-20260929-000731), and the order amount is 258 USD."
    },
    {
     "decision": "HANDOFF",
     "order_id": "EB-58201",
     "reason": "Rust on the metal trays across the units is a separate problem, reported more than 30 days after delivery with unclear severity, so it goes to a specialist."
    }
   ],
   "reply": "Dear Customer,\n\nThank you for your patience, and I am sorry for the problems you have had with the rabbit hutches, and for the worry this has caused, especially with your ferrets.\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nPlease also disregard our earlier messages. We will not ask you to source or carry out any repair yourself, and the 15% and 30% partial refund options mentioned earlier are no longer the proposed resolution.\n\nI have passed your case to a specialist. They will review both the broken mesh on the second hutch and the rust on the metal trays across your order, and will contact you here on eBay with the next steps.\n\nKind regards,\n[Agent]",
   "trace": [
    {
     "id": "C23:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- end of earlier messages ---\n\n[New customer message]\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "```json\n{\"decisions\":[{\"decision\":\"HANDOFF\",\"order_id\":\"EB-58201\",\"reason\":\"Weld failure on the second unit was reported 53 days after delivery (delivered 2026-09-17), which is over 30 days, so it must go to a specialist and cannot be resolved automatically. It is a repeat structural defect on SKU D51-105V01 (prior case TK-UK-20260929-000731), and the order amount is 258 USD.\"},{\"decision\":\"HANDOFF\",\"order_id\":\"EB-58201\",\"reason\":\"Rust on the metal trays across the units is a separate problem, reported more than 30 days after delivery with unclear severity, so it goes to a specialist.\"}],\"reply\":\"Dear Customer,\\n\\nThank you for your patience, and I am sorry for the problems you have had with the rabbit hutches, and for the worry this has caused, especially with your ferrets.\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nPlease also disregard our earlier messages. We will not ask you to source or carry out any repair yourself, and the 15% and 30% partial refund options mentioned earlier are no longer the proposed resolution.\\n\\nI have passed your case to a specialist. They will review both the broken mesh on the second hutch and the rust on the metal trays across your order, and will contact you here on eBay with the next steps.\\n\\nKind regards,\\n[Agent]\"}\n```",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C23",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": false,
      "value": 0,
      "detail": "期望 QUALITY_ESCALATION + ASK_INFO；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": false,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "回应托盘生锈",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出更换选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "保留全额退款选项",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "提醒动物安全",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "先发新品、不要求先退回",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "网片问题按 2 个笼子处理",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得继续以 30% 为方案",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": false,
      "detail": "出现 15%"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 0.3818181818181818,
    "pass": false,
    "violations": 1
   }
  },
  {
   "mode": "skill",
   "caseId": "C23",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": true,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [
     {
      "type": "PARTIAL_REFUND",
      "pct": 15,
      "units": 1,
      "status": "REJECTED",
      "reject_reason": "Customer said it was not good enough, as the second cage has also failed"
     },
     {
      "type": "PARTIAL_REFUND",
      "pct": 30,
      "units": null,
      "status": "REJECTED",
      "reject_reason": "Second cage has failed and trays are rusting; 30% is not enough for the cost of new cages"
     },
     {
      "type": "REPLACEMENT_WITH_COLLECTION",
      "pct": null,
      "units": null,
      "status": "PENDING",
      "reject_reason": null
     }
    ],
    "customer_choice": null,
    "info_already_given": [
     "Bought 3 hutches in total and has had them for a short time",
     "First hutch (with purple tunnel) was completed and its front mesh door has vertical wires on the left side come away from the welds and bent",
     "Second hutch's front mesh door has a horizontal wire broken free from its welds and hanging loose",
     "Ferrets are kept in the hutches and were not injured; the customer says the ferrets have not been able to get out so far",
     "All the metal trays have gone rusty",
     "Customer needs somewhere to keep the ferrets while waiting for replacements",
     "Customer has had to consider buying new cages at their own cost"
    ],
    "intents": [
     {
      "type": "DEFECT_WARRANTY",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "front mesh door",
      "repeat_issue": true,
      "units_affected": 2,
      "item_condition": "USED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "Not satisfied with the 30% partial refund; wants a proper resolution for the failed mesh doors on the cages, which must keep ferrets secure"
     },
     {
      "type": "DEFECT_WARRANTY",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": "metal tray",
      "repeat_issue": false,
      "units_affected": 3,
      "item_condition": "USED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Trays rusted within a short time of use; customer wants this addressed as part of the resolution"
     }
    ]
   },
   "decisions": [
    "QUALITY_ESCALATION",
    "ASK_INFO"
   ],
   "detail": [
    {
     "intent": "DEFECT_WARRANTY",
     "order_id": "EB-58201",
     "decision": "QUALITY_ESCALATION",
     "sku": "D51-105V01",
     "product": "Wooden Rabbit Hutch with Hinged Top",
     "component": "front mesh door",
     "units_affected": 2,
     "prior_cases": [
      "EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure"
     ],
     "options": [
      "replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)",
      "full refund"
     ],
     "order_qty": 3,
     "internal_log": {
      "sku": "D51-105V01",
      "defect": "repeat structural failure",
      "orders": [
       "EB-58201"
      ]
     },
     "safety_notice": "For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.",
     "corrections": [
      "You do not need to repair it yourself; please disregard that earlier suggestion."
     ],
     "do_not_offer": [
      "PARTIAL_REFUND 15% (Customer said it was not good enough, as the second cage has also failed)",
      "PARTIAL_REFUND 30% (Second cage has failed and trays are rusting; 30% is not enough for the cost of new cages)"
     ],
     "priority": true
    },
    {
     "intent": "DEFECT_WARRANTY",
     "order_id": "EB-58201",
     "decision": "ASK_INFO",
     "reason": "missing_evidence",
     "ask": [
      "photo or short video of the metal tray issue (3 unit(s))"
     ],
     "safety_notice": "For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced."
    }
   ],
   "reply": "Dear Customer,\n\nI am sorry to hear that a second cage has failed, and I understand how worrying this is with your ferrets.\n\nThe front mesh door has now failed on two of your three cages, and we apologise for this repeat problem. Please choose one of the following options:\n\n- Replacement: we will ship the replacement first, so you do not need to dismantle, return or wait for collection of the old cage before the new one arrives.\n- Full refund.\n\nPlease also disregard our earlier suggestion that you repair the cage yourself. You do not need to do this.\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nCould you also send a photo or short video of the rusted metal trays on all three cages so we can review the issue?\n\nPlease let us know which option you prefer and we will take it from there.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C23:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- end of earlier messages ---\n\n[New customer message]\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n\"\"\"",
     "response": "```json\n{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer said it was not good enough, as the second cage has also failed\"\n    },\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 30,\n      \"units\": null,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Second cage has failed and trays are rusting; 30% is not enough for the cost of new cages\"\n    },\n    {\n      \"type\": \"REPLACEMENT_WITH_COLLECTION\",\n      \"pct\": null,\n      \"units\": null,\n      \"status\": \"PENDING\",\n      \"reject_reason\": null\n    }\n  ],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Bought 3 hutches in total and has had them for a short time\",\n    \"First hutch (with purple tunnel) was completed and its front mesh door has vertical wires on the left side come away from the welds and bent\",\n    \"Second hutch's front mesh door has a horizontal wire broken free from its welds and hanging loose\",\n    \"Ferrets are kept in the hutches and were not injured; the customer says the ferrets have not been able to get out so far\",\n    \"All the metal trays have gone rusty\",\n    \"Customer needs somewhere to keep the ferrets while waiting for replacements\",\n    \"Customer has had to consider buying new cages at their own cost\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Not satisfied with the 30% partial refund; wants a proper resolution for the failed mesh doors on the cages, which must keep ferrets secure\"\n    },\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"metal tray\",\n      \"repeat_issue\": false,\n      \"units_affected\": 3,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Trays rusted within a short time of use; customer wants this addressed as part of the resolution\"\n    }\n  ]\n}\n```",
     "ms": 0
    },
    {
     "id": "C23:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer said it was not good enough, as the second cage has also failed\"\n    },\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 30,\n      \"units\": null,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Second cage has failed and trays are rusting; 30% is not enough for the cost of new cages\"\n    },\n    {\n      \"type\": \"REPLACEMENT_WITH_COLLECTION\",\n      \"pct\": null,\n      \"units\": null,\n      \"status\": \"PENDING\",\n      \"reject_reason\": null\n    }\n  ],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Bought 3 hutches in total and has had them for a short time\",\n    \"First hutch (with purple tunnel) was completed and its front mesh door has vertical wires on the left side come away from the welds and bent\",\n    \"Second hutch's front mesh door has a horizontal wire broken free from its welds and hanging loose\",\n    \"Ferrets are kept in the hutches and were not injured; the customer says the ferrets have not been able to get out so far\",\n    \"All the metal trays have gone rusty\",\n    \"Customer needs somewhere to keep the ferrets while waiting for replacements\",\n    \"Customer has had to consider buying new cages at their own cost\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Not satisfied with the 30% partial refund; wants a proper resolution for the failed mesh doors on the cages, which must keep ferrets secure\"\n    },\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"metal tray\",\n      \"repeat_issue\": false,\n      \"units_affected\": 3,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Trays rusted within a short time of use; customer wants this addressed as part of the resolution\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"internal_log\": {\n      \"sku\": \"D51-105V01\",\n      \"defect\": \"repeat structural failure\",\n      \"orders\": [\n        \"EB-58201\"\n      ]\n    },\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (Customer said it was not good enough, as the second cage has also failed)\",\n      \"PARTIAL_REFUND 30% (Second cage has failed and trays are rusting; 30% is not enough for the cost of new cages)\"\n    ],\n    \"priority\": true\n  },\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"missing_evidence\",\n    \"ask\": [\n      \"photo or short video of the metal tray issue (3 unit(s))\"\n    ],\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C23:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- end of earlier messages ---\n\n[New customer message]\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (Customer said it was not good enough, as the second cage has also failed)\",\n      \"PARTIAL_REFUND 30% (Second cage has failed and trays are rusting; 30% is not enough for the cost of new cages)\"\n    ],\n    \"priority\": true\n  },\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"missing_evidence\",\n    \"ask\": [\n      \"photo or short video of the metal tray issue (3 unit(s))\"\n    ],\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Customer,\\n\\nI am sorry to hear that a second cage has failed, and I understand how worrying this is with your ferrets.\\n\\nThe front mesh door has now failed on two of your three cages, and we apologise for this repeat problem. Please choose one of the following options:\\n\\n- Replacement: we will ship the replacement first, so you do not need to dismantle, return or wait for collection of the old cage before the new one arrives.\\n- Full refund.\\n\\nPlease also disregard our earlier suggestion that you repair the cage yourself. You do not need to do this.\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nCould you also send a photo or short video of the rusted metal trays on all three cages so we can review the issue?\\n\\nPlease let us know which option you prefer and we will take it from there.\\n\\nKind regards,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C23",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 QUALITY_ESCALATION + ASK_INFO；实际 QUALITY_ESCALATION + ASK_INFO"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "回应托盘生锈",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出更换选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "保留全额退款选项",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "提醒动物安全",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "先发新品、不要求先退回",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "网片问题按 2 个笼子处理",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得继续以 30% 为方案",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不暴露内部流程",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "promise",
      "label": "无越权金额/比例",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "lang",
      "label": "回复语言",
      "pass": true,
      "detail": "期望 en；检测 en"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C24",
   "decisions": [
    "HANDOFF"
   ],
   "detail": [
    {
     "decision": "HANDOFF",
     "order_id": "EB-58201",
     "reason": "Customer threatens to open an eBay case if not resolved (rule 6: priority handoff, no automatic reply). Also: damage reported 53 days after delivery (rule 2), and a repeat structural mesh-weld failure on this SKU with a prior case TK-UK-20260929-000731 (rule 16). Animal enclosure with a ferret at risk of escape (rule 17)."
    }
   ],
   "reply": "",
   "trace": [
    {
     "id": "C24:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- 5. Customer ---\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n--- 6. Agent (sent) ---\nDear Customer,\n\nThanks for your message. We are sorry for the inconvenience caused.\n\nConsidering the situation of your item, as we do not want to inconvenience you any further, we would like to send out a full replacement of one item for you without the collection of original item. Please note, delivery can take 3-5 working days to arrive from date of input.\n\nIn order for us to proceed, please respond to this message confirming your acceptance of the above.\n\nKind regards,\n[Agent C]\n--- end of earlier messages ---\n\n[New customer message]\nAll 3 cages have all got something wrong with them thank u for the offer of 1 but we need all 3 replacement this isn't good enough I shouldn't have to be sending all these messages I will be going.to ebay them.self if this doesn't get sorted ASAP\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"HANDOFF\",\"order_id\":\"EB-58201\",\"reason\":\"Customer threatens to open an eBay case if not resolved (rule 6: priority handoff, no automatic reply). Also: damage reported 53 days after delivery (rule 2), and a repeat structural mesh-weld failure on this SKU with a prior case TK-UK-20260929-000731 (rule 16). Animal enclosure with a ferret at risk of escape (rule 17).\"}],\"reply\":\"\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C24",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 HANDOFF；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "应转人工"
     },
     {
      "key": "fact",
      "label": "不自动回复（直接转人工）",
      "pass": true,
      "detail": "未回复"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C24",
   "facts": {
    "language": "en",
    "safety_risk": false,
    "animal_safety": true,
    "dispute": true,
    "dispute_type": "MARKETPLACE_CASE",
    "previous_offers": [
     {
      "type": "PARTIAL_REFUND",
      "pct": 15,
      "units": 1,
      "status": "REJECTED",
      "reject_reason": "Not good enough; this is the second cage to fail, the cages were expensive, and the problem needs proper investigation"
     },
     {
      "type": "PARTIAL_REFUND",
      "pct": 30,
      "units": null,
      "status": "REJECTED",
      "reject_reason": "30% is not enough given the condition of the cages, the rusty trays, and the cost of replacing them"
     },
     {
      "type": "REPLACEMENT_WITH_COLLECTION",
      "pct": null,
      "units": 1,
      "status": "REJECTED",
      "reject_reason": "Customer had no place to keep the ferrets while waiting for new cages and the rust issue made the offer insufficient"
     },
     {
      "type": "REPLACEMENT_NO_RETURN",
      "pct": null,
      "units": 1,
      "status": "REJECTED",
      "reject_reason": "Offered only one replacement; customer says all 3 cages have problems and needs all 3 replaced"
     }
    ],
    "customer_choice": "REPLACEMENT",
    "info_already_given": [
     "Bought 3 cages from the seller",
     "Front welded-wire mesh door on the second cage: a horizontal wire has broken free from its welds",
     "Front mesh door on the first cage (purple tunnel photo): several vertical wires have come away from the welds and are bent",
     "Customer believes the mesh is cheap and not durable enough",
     "Metal trays have gone rusty (customer says 'all the metal trays', number of affected cages not specified)",
     "Customer says all 3 cages have something wrong with them",
     "Ferrets are currently housed in the cages and have not escaped",
     "Cages have not been owned long",
     "Customer will escalate to eBay if not resolved ASAP"
    ],
    "intents": [
     {
      "type": "DEFECT_WARRANTY",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "front welded-wire mesh door",
      "repeat_issue": true,
      "units_affected": 2,
      "item_condition": "USED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "Replacement of all 3 cages"
     },
     {
      "type": "DEFECT_WARRANTY",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": "metal tray",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "USED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Replacement of all 3 cages"
     }
    ]
   },
   "decisions": [
    "HANDOFF"
   ],
   "detail": [
    {
     "intent": "DISPUTE",
     "decision": "HANDOFF",
     "reason": "chargeback_or_dispute",
     "no_reply": true,
     "dispute_type": "MARKETPLACE_CASE",
     "priority": true,
     "contact_count": 4,
     "customer_requests": [
      "replacement",
      "replacement of all 3 cages"
     ],
     "case_facts": [
      "2 unit(s): front welded-wire mesh door (repeat)",
      "1 unit(s): metal tray"
     ],
     "for_specialist": [
      {
       "intent": "DEFECT_WARRANTY",
       "order_id": "EB-58201",
       "decision": "QUALITY_ESCALATION",
       "sku": "D51-105V01",
       "product": "Wooden Rabbit Hutch with Hinged Top",
       "component": "front welded-wire mesh door",
       "units_affected": 2,
       "prior_cases": [
        "EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure"
       ],
       "confirmed": "replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)",
       "order_qty": 3,
       "internal_log": {
        "sku": "D51-105V01",
        "defect": "repeat structural failure",
        "orders": [
         "EB-58201"
        ]
       }
      },
      {
       "intent": "DEFECT_WARRANTY",
       "order_id": "EB-58201",
       "decision": "ASK_INFO",
       "reason": "missing_evidence",
       "ask": [
        "photo or short video of the metal tray issue (1 unit(s))"
       ]
      }
     ],
     "safety_notice": "For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced."
    }
   ],
   "reply": "",
   "trace": [
    {
     "id": "C24:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- 5. Customer ---\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n--- 6. Agent (sent) ---\nDear Customer,\n\nThanks for your message. We are sorry for the inconvenience caused.\n\nConsidering the situation of your item, as we do not want to inconvenience you any further, we would like to send out a full replacement of one item for you without the collection of original item. Please note, delivery can take 3-5 working days to arrive from date of input.\n\nIn order for us to proceed, please respond to this message confirming your acceptance of the above.\n\nKind regards,\n[Agent C]\n--- end of earlier messages ---\n\n[New customer message]\nAll 3 cages have all got something wrong with them thank u for the offer of 1 but we need all 3 replacement this isn't good enough I shouldn't have to be sending all these messages I will be going.to ebay them.self if this doesn't get sorted ASAP\n\"\"\"",
     "response": "```json\n{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": true,\n  \"dispute_type\": \"MARKETPLACE_CASE\",\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Not good enough; this is the second cage to fail, the cages were expensive, and the problem needs proper investigation\"\n    },\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 30,\n      \"units\": null,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"30% is not enough given the condition of the cages, the rusty trays, and the cost of replacing them\"\n    },\n    {\n      \"type\": \"REPLACEMENT_WITH_COLLECTION\",\n      \"pct\": null,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer had no place to keep the ferrets while waiting for new cages and the rust issue made the offer insufficient\"\n    },\n    {\n      \"type\": \"REPLACEMENT_NO_RETURN\",\n      \"pct\": null,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Offered only one replacement; customer says all 3 cages have problems and needs all 3 replaced\"\n    }\n  ],\n  \"customer_choice\": \"REPLACEMENT\",\n  \"info_already_given\": [\n    \"Bought 3 cages from the seller\",\n    \"Front welded-wire mesh door on the second cage: a horizontal wire has broken free from its welds\",\n    \"Front mesh door on the first cage (purple tunnel photo): several vertical wires have come away from the welds and are bent\",\n    \"Customer believes the mesh is cheap and not durable enough\",\n    \"Metal trays have gone rusty (customer says 'all the metal trays', number of affected cages not specified)\",\n    \"Customer says all 3 cages have something wrong with them\",\n    \"Ferrets are currently housed in the cages and have not escaped\",\n    \"Cages have not been owned long\",\n    \"Customer will escalate to eBay if not resolved ASAP\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Replacement of all 3 cages\"\n    },\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"metal tray\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Replacement of all 3 cages\"\n    }\n  ]\n}\n```",
     "ms": 0
    },
    {
     "id": "C24:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": true,\n  \"dispute_type\": \"MARKETPLACE_CASE\",\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Not good enough; this is the second cage to fail, the cages were expensive, and the problem needs proper investigation\"\n    },\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 30,\n      \"units\": null,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"30% is not enough given the condition of the cages, the rusty trays, and the cost of replacing them\"\n    },\n    {\n      \"type\": \"REPLACEMENT_WITH_COLLECTION\",\n      \"pct\": null,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer had no place to keep the ferrets while waiting for new cages and the rust issue made the offer insufficient\"\n    },\n    {\n      \"type\": \"REPLACEMENT_NO_RETURN\",\n      \"pct\": null,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Offered only one replacement; customer says all 3 cages have problems and needs all 3 replaced\"\n    }\n  ],\n  \"customer_choice\": \"REPLACEMENT\",\n  \"info_already_given\": [\n    \"Bought 3 cages from the seller\",\n    \"Front welded-wire mesh door on the second cage: a horizontal wire has broken free from its welds\",\n    \"Front mesh door on the first cage (purple tunnel photo): several vertical wires have come away from the welds and are bent\",\n    \"Customer believes the mesh is cheap and not durable enough\",\n    \"Metal trays have gone rusty (customer says 'all the metal trays', number of affected cages not specified)\",\n    \"Customer says all 3 cages have something wrong with them\",\n    \"Ferrets are currently housed in the cages and have not escaped\",\n    \"Cages have not been owned long\",\n    \"Customer will escalate to eBay if not resolved ASAP\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"Replacement of all 3 cages\"\n    },\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"metal tray\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Replacement of all 3 cages\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DISPUTE\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"chargeback_or_dispute\",\n    \"no_reply\": true,\n    \"dispute_type\": \"MARKETPLACE_CASE\",\n    \"priority\": true,\n    \"contact_count\": 4,\n    \"customer_requests\": [\n      \"replacement\",\n      \"replacement of all 3 cages\"\n    ],\n    \"case_facts\": [\n      \"2 unit(s): front welded-wire mesh door (repeat)\",\n      \"1 unit(s): metal tray\"\n    ],\n    \"for_specialist\": [\n      {\n        \"intent\": \"DEFECT_WARRANTY\",\n        \"order_id\": \"EB-58201\",\n        \"decision\": \"QUALITY_ESCALATION\",\n        \"sku\": \"D51-105V01\",\n        \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n        \"component\": \"front welded-wire mesh door\",\n        \"units_affected\": 2,\n        \"prior_cases\": [\n          \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n        ],\n        \"confirmed\": \"replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n        \"order_qty\": 3,\n        \"internal_log\": {\n          \"sku\": \"D51-105V01\",\n          \"defect\": \"repeat structural failure\",\n          \"orders\": [\n            \"EB-58201\"\n          ]\n        }\n      },\n      {\n        \"intent\": \"DEFECT_WARRANTY\",\n        \"order_id\": \"EB-58201\",\n        \"decision\": \"ASK_INFO\",\n        \"reason\": \"missing_evidence\",\n        \"ask\": [\n          \"photo or short video of the metal tray issue (1 unit(s))\"\n        ]\n      }\n    ],\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\"\n  }\n]",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C24",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": true,
      "value": 1,
      "detail": "期望 HANDOFF；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "应转人工"
     },
     {
      "key": "fact",
      "label": "不自动回复（直接转人工）",
      "pass": true,
      "detail": "未回复"
     }
    ],
    "score": 1,
    "pass": true,
    "violations": 0
   }
  }
 ]
};
