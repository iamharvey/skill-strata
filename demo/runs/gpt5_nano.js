export default {
 "meta": {
  "provider": "perplexity-agent",
  "model": "gpt5_nano",
  "label": "gpt5_nano 真实 API v5 · 2026-11-11（不承诺批次/质检、不暴露内部流程、纠纷直接转人工）",
  "note": "通过 Perplexity 模型接口直连 gpt5_nano，单次运行，默认采样参数（max_tokens 8000）。v5 按业务反馈修改：换货不承诺新批次/质检；回复不提质量团队、缺陷登记、找开发核对等内部流程；拒付/平台纠纷直接转人工、不自动回复（C03、C24）。新增检查同样适用两种模式。输出无法解析的用例按 0 分计。",
  "created": "2026-11-11T10:33:58.541Z",
  "cases": 24
 },
 "summary": {
  "baseline": {
   "n": 24,
   "score": 0.8621212121212122,
   "fullPass": 19,
   "decision": 0.8333333333333334,
   "handoff": 0.8333333333333334,
   "fact": 0.5,
   "lang": 1,
   "violations": 1,
   "byCategory": {
    "售后": 0.9,
    "退换货": 1,
    "QA": 1,
    "物流": 0.975,
    "综合": 1,
    "多轮": 0.1636363636363636
   }
  },
  "skill": {
   "n": 24,
   "score": 0.7967099567099569,
   "fullPass": 13,
   "decision": 0.625,
   "handoff": 0.8333333333333334,
   "fact": 0.5,
   "lang": 1,
   "violations": 2,
   "byCategory": {
    "售后": 0.9,
    "退换货": 0.9199999999999999,
    "QA": 0.6617142857142857,
    "物流": 0.85,
    "综合": 0.7142857142857142,
    "多轮": 0.5727272727272726
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
     "reason": "Missing part C4"
    }
   ],
   "reply": "Hi Megan,\n\nThank you for letting us know. We’re sorry that part C4 was missing from your swing chair box.\n\nWe have located C4 in stock and will reship the replacement curved side bar for the SW-01 swing chair (order AS-10023) to the address on file. You’ll receive a shipment notification with tracking as soon as it’s dispatched. If you need the replacement sent to a different address, please reply with the correct address.\n\nIf you have any other questions, just reply to this email.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C01:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: megan.r@example.com\nSubject: Missing part in my swing chair box\nAttachments: none\n\nHi, order AS-10023. I started assembling the swing chair this weekend and part C4 (the curved side bar on page 3 of the manual) is not in the box. Everything else seems fine. Can you help?\n\"\"\"\n\nOrder records found:\n- AS-10023: {\"sku\":\"SW-01\",\"amount_usd\":189,\"order_date\":\"2026-10-22\",\"status\":\"delivered\",\"delivered\":\"2026-11-01\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\": [\n    {\n      \"decision\": \"RESHIP_PARTS\",\n      \"order_id\": \"AS-10023\",\n      \"reason\": \"Missing part C4\"\n    }\n    ],\n  \"reply\": \"Hi Megan,\\n\\nThank you for letting us know. We’re sorry that part C4 was missing from your swing chair box.\\n\\nWe have located C4 in stock and will reship the replacement curved side bar for the SW-01 swing chair (order AS-10023) to the address on file. You’ll receive a shipment notification with tracking as soon as it’s dispatched. If you need the replacement sent to a different address, please reply with the correct address.\\n\\nIf you have any other questions, just reply to this email.\\n\\nBest regards,\\nCustomer Care Team\"\n}",
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
     "order AS-10023",
     "product: SW-01 - 3-Seat Patio Swing Chair",
     "missing part C4 (curved side bar on page 3 of the manual) not in the box"
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
      "component": "curved side bar (C4)",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "ASSEMBLED",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "send missing part C4"
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
   "reply": "Hi Megan,\n\nI’m sorry—the missing part C4 was not included in your swing chair box for order AS-10023.\n\nRESHIP_PARTS: Part code C4 confirmed for reshipment; tracking number will follow by email.\n\nNext step: You will receive the tracking number by email once the shipment is dispatched.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C01:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: megan.r@example.com\nSubject: Missing part in my swing chair box\nAttachments: none\n\nHi, order AS-10023. I started assembling the swing chair this weekend and part C4 (the curved side bar on page 3 of the manual) is not in the box. Everything else seems fine. Can you help?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"order AS-10023\",\n    \"product: SW-01 - 3-Seat Patio Swing Chair\",\n    \"missing part C4 (curved side bar on page 3 of the manual) not in the box\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"MISSING_PARTS\",\n      \"order_id\": \"AS-10023\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [\"C4\"],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"curved side bar (C4)\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"ASSEMBLED\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"send missing part C4\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C01:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"order AS-10023\",\n    \"product: SW-01 - 3-Seat Patio Swing Chair\",\n    \"missing part C4 (curved side bar on page 3 of the manual) not in the box\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"MISSING_PARTS\",\n      \"order_id\": \"AS-10023\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [\n        \"C4\"\n      ],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"curved side bar (C4)\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"ASSEMBLED\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"send missing part C4\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10023\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"C4\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C01:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: megan.r@example.com\nSubject: Missing part in my swing chair box\nAttachments: none\n\nHi, order AS-10023. I started assembling the swing chair this weekend and part C4 (the curved side bar on page 3 of the manual) is not in the box. Everything else seems fine. Can you help?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10023\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"C4\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hi Megan,\\n\\nI’m sorry—the missing part C4 was not included in your swing chair box for order AS-10023.\\n\\nRESHIP_PARTS: Part code C4 confirmed for reshipment; tracking number will follow by email.\\n\\nNext step: You will receive the tracking number by email once the shipment is dispatched.\\n\\nBest regards,\\nCustomer Care Team\"}",
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
     "reason": "Cosmetic damage to table top; replacement part (top T1) in stock or 15% partial refund offered."
    }
   ],
   "reply": "Hi D. Kowalski,\n\nThank you for sending the photos of the PT-02 6-Seat Acacia Patio Dining Table. I’m sorry the tabletop arrived scratched. We’d like to make this right.\n\nFor cosmetic damage, you have two options:\n\n- Replacement part: We can ship a replacement tabletop top (part code T1). We currently have T1 in stock. The replacement can be sent to the address on file, and you won’t need to return the scratched top.\n- 15% partial refund: We can apply a 15% partial refund to the order AS-10088.\n\nPlease reply with your preferred option. If you choose the replacement part, please confirm the shipping address and that you’d like the part shipped separately to your address on file. If you choose the refund, we’ll process the 15% refund to your original payment method.\n\nThank you for your patience—we’ll proceed as soon as you confirm.\n\nBest regards,\n[Your Name]\nCustomer Service\n[Brand]",
   "trace": [
    {
     "id": "C02:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: d.kowalski@example.com\nSubject: Scratched table top - want 50% back\nAttachments: tabletop_1.jpg, tabletop_2.jpg\n\nOrder AS-10088. The acacia table arrived with several scratches across the top, photos attached. It's usable but it looks bad for a new table. I think a 50% refund is fair, otherwise I want to send it back.\n\"\"\"\n\nOrder records found:\n- AS-10088: {\"sku\":\"PT-02\",\"amount_usd\":129,\"order_date\":\"2026-10-25\",\"status\":\"delivered\",\"delivered\":\"2026-11-03\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"OFFER_PARTS_OR_PARTIAL_REFUND\",\"order_id\":\"AS-10088\",\"reason\":\"Cosmetic damage to table top; replacement part (top T1) in stock or 15% partial refund offered.\"}],\"reply\":\"Hi D. Kowalski,\\n\\nThank you for sending the photos of the PT-02 6-Seat Acacia Patio Dining Table. I’m sorry the tabletop arrived scratched. We’d like to make this right.\\n\\nFor cosmetic damage, you have two options:\\n\\n- Replacement part: We can ship a replacement tabletop top (part code T1). We currently have T1 in stock. The replacement can be sent to the address on file, and you won’t need to return the scratched top.\\n- 15% partial refund: We can apply a 15% partial refund to the order AS-10088.\\n\\nPlease reply with your preferred option. If you choose the replacement part, please confirm the shipping address and that you’d like the part shipped separately to your address on file. If you choose the refund, we’ll process the 15% refund to your original payment method.\\n\\nThank you for your patience—we’ll proceed as soon as you confirm.\\n\\nBest regards,\\n[Your Name]\\nCustomer Service\\n[Brand]\"}",
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
     "Order AS-10088",
     "Acacia PT-02 table arrived with several scratches across the top",
     "Attachments: tabletop_1.jpg, tabletop_2.jpg"
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
      "customer_demand": "50% refund; otherwise return"
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
   "reply": "We’re sorry to hear the acacia table arrived with scratches. For order AS-10088, the available resolution options are: - Replacement part - 15% partial refund Please reply with which option you prefer.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C02:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: d.kowalski@example.com\nSubject: Scratched table top - want 50% back\nAttachments: tabletop_1.jpg, tabletop_2.jpg\n\nOrder AS-10088. The acacia table arrived with several scratches across the top, photos attached. It's usable but it looks bad for a new table. I think a 50% refund is fair, otherwise I want to send it back.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"PARTIAL_REFUND\",\n  \"info_already_given\": [\n    \"Order AS-10088\",\n    \"Acacia PT-02 table arrived with several scratches across the top\",\n    \"Attachments: tabletop_1.jpg, tabletop_2.jpg\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": \"AS-10088\",\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": \"COSMETIC\",\n      \"component\": \"table top\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"50% refund; otherwise return\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C02:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"PARTIAL_REFUND\",\n  \"info_already_given\": [\n    \"Order AS-10088\",\n    \"Acacia PT-02 table arrived with several scratches across the top\",\n    \"Attachments: tabletop_1.jpg, tabletop_2.jpg\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": \"AS-10088\",\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": \"COSMETIC\",\n      \"component\": \"table top\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"50% refund; otherwise return\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DAMAGE\",\n    \"order_id\": \"AS-10088\",\n    \"decision\": \"OFFER_PARTS_OR_PARTIAL_REFUND\",\n    \"options\": [\n      \"replacement part\",\n      \"15% partial refund\"\n    ],\n    \"allowed_pct\": [\n      15\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C02:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: d.kowalski@example.com\nSubject: Scratched table top - want 50% back\nAttachments: tabletop_1.jpg, tabletop_2.jpg\n\nOrder AS-10088. The acacia table arrived with several scratches across the top, photos attached. It's usable but it looks bad for a new table. I think a 50% refund is fair, otherwise I want to send it back.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DAMAGE\",\n    \"order_id\": \"AS-10088\",\n    \"decision\": \"OFFER_PARTS_OR_PARTIAL_REFUND\",\n    \"options\": [\n      \"replacement part\",\n      \"15% partial refund\"\n    ],\n    \"allowed_pct\": [\n      15\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"We’re sorry to hear the acacia table arrived with scratches. For order AS-10088, the available resolution options are: - Replacement part - 15% partial refund Please reply with which option you prefer.\\n\\nBest regards,\\nCustomer Care Team\"}",
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
     "reason": "Structural damage (frame leg broken); order amount > $300; specialist approval required; photo provided (leg_snapped.jpg)."
    }
   ],
   "reply": "",
   "trace": [
    {
     "id": "C03:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: jlarson@example.com\nSubject: URGENT broken frame - refund TODAY\nAttachments: leg_snapped.jpg\n\nOrder AS-10101. While assembling, one of the main frame legs snapped clean in half (photo attached). This is unacceptable. I want a full refund today or I will open a chargeback with my credit card company tomorrow.\n\"\"\"\n\nOrder records found:\n- AS-10101: {\"sku\":\"SW-01\",\"amount_usd\":459,\"order_date\":\"2026-10-26\",\"status\":\"delivered\",\"delivered\":\"2026-11-05\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\":[\n    {\n      \"decision\":\"HANDOFF\",\n      \"order_id\":\"AS-10101\",\n      \"reason\":\"Structural damage (frame leg broken); order amount > $300; specialist approval required; photo provided (leg_snapped.jpg).\"\n    }\n  ],\n  \"reply\":\"\"\n}",
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
     "order AS-10101",
     "leg snapped during assembly",
     "photo attached leg_snapped.jpg"
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
      "item_condition": "ASSEMBLED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "FULL_REFUND"
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
      "full_refund"
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
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": true,\n  \"dispute_type\": \"CHARGEBACK\",\n  \"previous_offers\": [],\n  \"customer_choice\": \"FULL_REFUND\",\n  \"info_already_given\": [\n    \"order AS-10101\",\n    \"leg snapped during assembly\",\n    \"photo attached leg_snapped.jpg\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": \"AS-10101\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"main frame leg\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"ASSEMBLED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"FULL_REFUND\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C03:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": true,\n  \"dispute_type\": \"CHARGEBACK\",\n  \"previous_offers\": [],\n  \"customer_choice\": \"FULL_REFUND\",\n  \"info_already_given\": [\n    \"order AS-10101\",\n    \"leg snapped during assembly\",\n    \"photo attached leg_snapped.jpg\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": \"AS-10101\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"main frame leg\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"ASSEMBLED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"FULL_REFUND\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DISPUTE\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"chargeback_or_dispute\",\n    \"no_reply\": true,\n    \"dispute_type\": \"CHARGEBACK\",\n    \"priority\": false,\n    \"contact_count\": 1,\n    \"customer_requests\": [\n      \"full_refund\"\n    ],\n    \"case_facts\": [\n      \"1 unit(s): main frame leg\"\n    ],\n    \"for_specialist\": [\n      {\n        \"intent\": \"DAMAGE\",\n        \"order_id\": \"AS-10101\",\n        \"decision\": \"HANDOFF\",\n        \"reason\": \"needs_approval\"\n      }\n    ]\n  }\n]",
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
     "reason": "Injury/safety hazard; needs specialist investigation and direct handling. No automatic reply."
    }
   ],
   "reply": "",
   "trace": [
    {
     "id": "C04:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: concerned.parent@example.com\nSubject: Your bench collapsed and hurt my son\nAttachments: none\n\nThe swing bench we bought from you collapsed yesterday while my son was sitting on it. He hurt his wrist and we spent the evening in the ER. I have contacted a lawyer. I don't have the order number handy right now.\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\":[\n    {\n      \"decision\":\"HANDOFF\",\n      \"order_id\":null,\n      \"reason\":\"Injury/safety hazard; needs specialist investigation and direct handling. No automatic reply.\"\n    }\n  ],\n  \"reply\":\"\"\n}",
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
     "swing bench collapsed while my son was sitting; he hurt his wrist; ER visit; no order number handy"
    ],
    "intents": [
     {
      "type": "DAMAGE",
      "order_id": null,
      "sku": null,
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "swing bench",
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
   "reply": "Dear concerned.parent@example.com,\n\nI’m very sorry to hear that the swing bench collapsed and your son was hurt.\n\nA safety specialist will contact you as soon as possible.\n\nNext step: A safety specialist will contact you as soon as possible.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C04:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: concerned.parent@example.com\nSubject: Your bench collapsed and hurt my son\nAttachments: none\n\nThe swing bench we bought from you collapsed yesterday while my son was sitting on it. He hurt his wrist and we spent the evening in the ER. I have contacted a lawyer. I don't have the order number handy right now.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": true,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\"swing bench collapsed while my son was sitting; he hurt his wrist; ER visit; no order number handy\"],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"swing bench\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C04:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": true,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"swing bench collapsed while my son was sitting; he hurt his wrist; ER visit; no order number handy\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"swing bench\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C04:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: concerned.parent@example.com\nSubject: Your bench collapsed and hurt my son\nAttachments: none\n\nThe swing bench we bought from you collapsed yesterday while my son was sitting on it. He hurt his wrist and we spent the evening in the ER. I have contacted a lawyer. I don't have the order number handy right now.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear concerned.parent@example.com,\\n\\nI’m very sorry to hear that the swing bench collapsed and your son was hurt.\\n\\nA safety specialist will contact you as soon as possible.\\n\\nNext step: A safety specialist will contact you as soon as possible.\\n\\nBest regards,\\nCustomer Care Team\"}",
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
     "reason": "Quality defect within 12 months; video provided; replacement parts will be shipped free (battery/charger)."
    }
   ],
   "reply": "Subject: Re: Ride-on car stopped charging (Order AS-10210)\n\nHello Aisha,\n\nThank you for sending the video. I’m sorry your ride-on car isn’t charging.\n\nGood news: this is within 12 months of delivery, so this qualifies for warranty replacement parts at no cost.\n\nWhat happens next:\n- We will dispatch the required warranty replacement parts (likely the 12V battery and/or charger) to the address on file. No return is needed from you at this time.\n- The parts will be shipped to the UK address we have on file. If your address has changed since delivery, please reply with the correct address.\n- You will receive a confirmation and a tracking number once the parts are dispatched.\n\nIf you’d like, we can also arrange a quick call with a technician to guide you through the replacement steps.\n\nIf you have any other questions, just reply to this email.\n\nBest regards,\nCustomer Support\n[Your Brand Name]",
   "trace": [
    {
     "id": "C05:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: aisha.k@example.co.uk\nSubject: Ride-on car stopped charging\nAttachments: car_not_charging.mp4\n\nHello, order AS-10210. Our kids' ride-on car worked well until last week, now the battery won't charge at all - the charger light stays green and the car doesn't move. I've attached a short video showing it. We bought it in March.\n\"\"\"\n\nOrder records found:\n- AS-10210: {\"sku\":\"KB-04\",\"amount_usd\":239,\"order_date\":\"2026-03-05\",\"status\":\"delivered\",\"delivered\":\"2026-03-12\",\"country\":\"UK\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"WARRANTY_PARTS\",\"order_id\":\"AS-10210\",\"reason\":\"Quality defect within 12 months; video provided; replacement parts will be shipped free (battery/charger).\"}],\"reply\":\"Subject: Re: Ride-on car stopped charging (Order AS-10210)\\n\\nHello Aisha,\\n\\nThank you for sending the video. I’m sorry your ride-on car isn’t charging.\\n\\nGood news: this is within 12 months of delivery, so this qualifies for warranty replacement parts at no cost.\\n\\nWhat happens next:\\n- We will dispatch the required warranty replacement parts (likely the 12V battery and/or charger) to the address on file. No return is needed from you at this time.\\n- The parts will be shipped to the UK address we have on file. If your address has changed since delivery, please reply with the correct address.\\n- You will receive a confirmation and a tracking number once the parts are dispatched.\\n\\nIf you’d like, we can also arrange a quick call with a technician to guide you through the replacement steps.\\n\\nIf you have any other questions, just reply to this email.\\n\\nBest regards,\\nCustomer Support\\n[Your Brand Name]\"}",
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
     "order AS-10210; ride-on car; battery won't charge; charger light stays green; car doesn't move; video attached (car_not_charging.mp4); bought in March"
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
   "reply": "Hello Aisha,\n\nI’m sorry your 12V Kids Ride-On Car from order AS-10210 isn’t charging.\n\nWarranty outcome: A free warranty replacement part will be sent; part confirmed: replacement part for the 12V Kids Ride-On Car.\n\nNext step: Please confirm the replacement part.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C05:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: aisha.k@example.co.uk\nSubject: Ride-on car stopped charging\nAttachments: car_not_charging.mp4\n\nHello, order AS-10210. Our kids' ride-on car worked well until last week, now the battery won't charge at all - the charger light stays green and the car doesn't move. I've attached a short video showing it. We bought it in March.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\"order AS-10210; ride-on car; battery won't charge; charger light stays green; car doesn't move; video attached (car_not_charging.mp4); bought in March\"],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": \"AS-10210\",\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"battery\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": true,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C05:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"order AS-10210; ride-on car; battery won't charge; charger light stays green; car doesn't move; video attached (car_not_charging.mp4); bought in March\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": \"AS-10210\",\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"battery\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": true,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-10210\",\n    \"decision\": \"WARRANTY_PARTS\",\n    \"note\": \"Free warranty replacement parts.\",\n    \"product\": \"12V Kids Ride-On Car\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C05:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: aisha.k@example.co.uk\nSubject: Ride-on car stopped charging\nAttachments: car_not_charging.mp4\n\nHello, order AS-10210. Our kids' ride-on car worked well until last week, now the battery won't charge at all - the charger light stays green and the car doesn't move. I've attached a short video showing it. We bought it in March.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-10210\",\n    \"decision\": \"WARRANTY_PARTS\",\n    \"note\": \"Free warranty replacement parts.\",\n    \"product\": \"12V Kids Ride-On Car\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hello Aisha,\\n\\nI’m sorry your 12V Kids Ride-On Car from order AS-10210 isn’t charging.\\n\\nWarranty outcome: A free warranty replacement part will be sent; part confirmed: replacement part for the 12V Kids Ride-On Car.\\n\\nNext step: Please confirm the replacement part.\\n\\nBest regards,\\nCustomer Care Team\"}",
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
     "reason": "Gas lift replacement part (GASLIFT) required; warranty period expired; parts available for purchase with specialist-provided quote."
    }
   ],
   "reply": "Subject: Re: Chair keeps sinking (Order AS-08800)\n\nHi Tom,\n\nThanks for the photo. I’m sorry your chair is sinking—understandably frustrating.\n\nFrom our records, your AS-08800 chair (OF-07 Ergonomic Mesh Office Chair) was delivered on 2025-08-01. The 12-month warranty has expired, so we can’t offer a free gas lift replacement. Replacement parts are available for purchase, and a product specialist will provide a price quote for the GASLIFT.\n\nIf you’d like us to proceed, please reply with:\n- your shipping address for the replacement part\n- any delivery instructions or contact preferences\n\nOnce we have this, a specialist will generate the quote and share the next steps.\n\nThank you for your understanding.\n\nBest regards,\nCustomer Service Team\n[Your Company Name]",
   "trace": [
    {
     "id": "C06:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: tom.b@example.com\nSubject: Chair keeps sinking\nAttachments: chair.jpg\n\nMy office chair from order AS-08800 keeps slowly sinking to the lowest position. I think the gas cylinder is gone. Can you send me a new one for free? Photo attached.\n\"\"\"\n\nOrder records found:\n- AS-08800: {\"sku\":\"OF-07\",\"amount_usd\":149,\"order_date\":\"2025-07-24\",\"status\":\"delivered\",\"delivered\":\"2025-08-01\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\":[\n    {\n      \"decision\":\"OUT_OF_WARRANTY\",\n      \"order_id\":\"AS-08800\",\n      \"reason\":\"Gas lift replacement part (GASLIFT) required; warranty period expired; parts available for purchase with specialist-provided quote.\"\n    }\n  ],\n  \"reply\":\"Subject: Re: Chair keeps sinking (Order AS-08800)\\n\\nHi Tom,\\n\\nThanks for the photo. I’m sorry your chair is sinking—understandably frustrating.\\n\\nFrom our records, your AS-08800 chair (OF-07 Ergonomic Mesh Office Chair) was delivered on 2025-08-01. The 12-month warranty has expired, so we can’t offer a free gas lift replacement. Replacement parts are available for purchase, and a product specialist will provide a price quote for the GASLIFT.\\n\\nIf you’d like us to proceed, please reply with:\\n- your shipping address for the replacement part\\n- any delivery instructions or contact preferences\\n\\nOnce we have this, a specialist will generate the quote and share the next steps.\\n\\nThank you for your understanding.\\n\\nBest regards,\\nCustomer Service Team\\n[Your Company Name]\"\n}",
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
     "order AS-08800",
     "chair sinks to the lowest position",
     "gas cylinder is likely gone",
     "photo attached"
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
      "item_condition": "UNKNOWN",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "FREE_REPLACEMENT"
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
   "reply": "Hi Tom,\n\nI'm sorry to hear your office chair from order AS-08800 sinks.\n\nOutcome:\n- This is outside the 12-month warranty.\n- Parts can be purchased; a specialist will send a quote.\n\nNext step:\nA specialist will send you a quote for the required part.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C06:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: tom.b@example.com\nSubject: Chair keeps sinking\nAttachments: chair.jpg\n\nMy office chair from order AS-08800 keeps slowly sinking to the lowest position. I think the gas cylinder is gone. Can you send me a new one for free? Photo attached.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"REPLACEMENT\",\n  \"info_already_given\": [\n    \"order AS-08800\",\n    \"chair sinks to the lowest position\",\n    \"gas cylinder is likely gone\",\n    \"photo attached\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": \"AS-08800\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"gas cylinder\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"FREE_REPLACEMENT\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C06:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"REPLACEMENT\",\n  \"info_already_given\": [\n    \"order AS-08800\",\n    \"chair sinks to the lowest position\",\n    \"gas cylinder is likely gone\",\n    \"photo attached\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": \"AS-08800\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"gas cylinder\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"FREE_REPLACEMENT\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-08800\",\n    \"decision\": \"OUT_OF_WARRANTY\",\n    \"reason\": \"over_12_months\",\n    \"note\": \"Parts can be purchased; a specialist will send a quote.\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C06:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: tom.b@example.com\nSubject: Chair keeps sinking\nAttachments: chair.jpg\n\nMy office chair from order AS-08800 keeps slowly sinking to the lowest position. I think the gas cylinder is gone. Can you send me a new one for free? Photo attached.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-08800\",\n    \"decision\": \"OUT_OF_WARRANTY\",\n    \"reason\": \"over_12_months\",\n    \"note\": \"Parts can be purchased; a specialist will send a quote.\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hi Tom,\\n\\nI'm sorry to hear your office chair from order AS-08800 sinks.\\n\\nOutcome:\\n- This is outside the 12-month warranty.\\n- Parts can be purchased; a specialist will send a quote.\\n\\nNext step:\\nA specialist will send you a quote for the required part.\\n\\nBest regards,\\nCustomer Care Team\"}",
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
     "reason": "Within 30 days of delivery; unopened item (change of mind)."
    }
   ],
   "reply": "Hello Lin,\n\nThank you for reaching out. We can help with a return for order AS-10170 (OF-07 Ergonomic Mesh Office Chair). Since the box hasn’t been opened and the delivery was on 2026-10-20, you’re eligible for a 30-day change-of-mind return.\n\nWhat happens next:\n- We’ll issue a Return Authorization and send you a prepaid return label with simple return instructions.\n- Please ensure the chair is returned in its original packaging, unused, and with all accessories and manuals.\n- Ship the item back using the provided label. The standard return shipping fee of 12.95 USD will be deducted from your refund.\n\nRefund:\n- Once the return is received, we will process the refund for the product price (149 USD) minus the standard return shipping fee (12.95 USD).\n\nIf you’d like to proceed, please reply to this email with: “Yes, proceed with return,” and we’ll send the return label and instructions right away.\n\nIf you have any other questions, feel free to reply to this email and we’ll be glad to help.\n\nBest regards,\n[Brand Name] Customer Care",
   "trace": [
    {
     "id": "C07:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: lin.ch@example.com\nSubject: Return request\nAttachments: none\n\nHi, I'd like to return the office chair from order AS-10170. I changed my mind and bought one locally. The box hasn't been opened. How does it work?\n\"\"\"\n\nOrder records found:\n- AS-10170: {\"sku\":\"OF-07\",\"amount_usd\":149,\"order_date\":\"2026-10-13\",\"status\":\"delivered\",\"delivered\":\"2026-10-20\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"RETURN_ALLOWED\",\"order_id\":\"AS-10170\",\"reason\":\"Within 30 days of delivery; unopened item (change of mind).\"}],\"reply\":\"Hello Lin,\\n\\nThank you for reaching out. We can help with a return for order AS-10170 (OF-07 Ergonomic Mesh Office Chair). Since the box hasn’t been opened and the delivery was on 2026-10-20, you’re eligible for a 30-day change-of-mind return.\\n\\nWhat happens next:\\n- We’ll issue a Return Authorization and send you a prepaid return label with simple return instructions.\\n- Please ensure the chair is returned in its original packaging, unused, and with all accessories and manuals.\\n- Ship the item back using the provided label. The standard return shipping fee of 12.95 USD will be deducted from your refund.\\n\\nRefund:\\n- Once the return is received, we will process the refund for the product price (149 USD) minus the standard return shipping fee (12.95 USD).\\n\\nIf you’d like to proceed, please reply to this email with: “Yes, proceed with return,” and we’ll send the return label and instructions right away.\\n\\nIf you have any other questions, feel free to reply to this email and we’ll be glad to help.\\n\\nBest regards,\\n[Brand Name] Customer Care\"}",
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
     "order AS-10170",
     "office chair (Ergonomic Mesh Office Chair, SKU OF-07)",
     "box hasn't been opened"
    ],
    "intents": [
     {
      "type": "RETURN",
      "order_id": "AS-10170",
      "sku": "OF-07",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": "office chair",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNOPENED",
      "reason": "CHANGED_MIND",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "INFO_ON_RETURN_PROCESS"
     },
     {
      "type": "OTHER",
      "order_id": "AS-10170",
      "sku": "OF-07",
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
      "customer_demand": "INFO_ON_RETURN_POLICY"
     }
    ]
   },
   "decisions": [
    "RETURN_ALLOWED",
    "HANDOFF"
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
    },
    {
     "intent": "OTHER",
     "order_id": "AS-10170",
     "decision": "HANDOFF",
     "reason": "unsupported_intent"
    }
   ],
   "reply": "Thanks for contacting us about returning the office chair from order AS-10170. Return outcome: The return is accepted. Return instructions follow, and the return fee of 12.95 USD will be deducted from the refund. Handoff outcome: The case has been passed to a specialist who will follow up. Next step: You will receive the return instructions; a specialist will follow up.\n\nCustomer Care Team",
   "trace": [
    {
     "id": "C07:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: lin.ch@example.com\nSubject: Return request\nAttachments: none\n\nHi, I'd like to return the office chair from order AS-10170. I changed my mind and bought one locally. The box hasn't been opened. How does it work?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"order AS-10170\",\n    \"office chair (Ergonomic Mesh Office Chair, SKU OF-07)\",\n    \"box hasn't been opened\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10170\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"office chair\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"INFO_ON_RETURN_PROCESS\"\n    },\n    {\n      \"type\": \"OTHER\",\n      \"order_id\": \"AS-10170\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"INFO_ON_RETURN_POLICY\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C07:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"order AS-10170\",\n    \"office chair (Ergonomic Mesh Office Chair, SKU OF-07)\",\n    \"box hasn't been opened\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10170\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"office chair\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"INFO_ON_RETURN_PROCESS\"\n    },\n    {\n      \"type\": \"OTHER\",\n      \"order_id\": \"AS-10170\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"INFO_ON_RETURN_POLICY\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10170\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 12.95,\n    \"fee_type\": \"standard parcel\",\n    \"allowed_amounts\": [\n      12.95\n    ]\n  },\n  {\n    \"intent\": \"OTHER\",\n    \"order_id\": \"AS-10170\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"unsupported_intent\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C07:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: lin.ch@example.com\nSubject: Return request\nAttachments: none\n\nHi, I'd like to return the office chair from order AS-10170. I changed my mind and bought one locally. The box hasn't been opened. How does it work?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10170\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 12.95,\n    \"fee_type\": \"standard parcel\",\n    \"allowed_amounts\": [\n      12.95\n    ]\n  },\n  {\n    \"intent\": \"OTHER\",\n    \"order_id\": \"AS-10170\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"unsupported_intent\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Thanks for contacting us about returning the office chair from order AS-10170. Return outcome: The return is accepted. Return instructions follow, and the return fee of 12.95 USD will be deducted from the refund. Handoff outcome: The case has been passed to a specialist who will follow up. Next step: You will receive the return instructions; a specialist will follow up.\\n\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C07",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": false,
      "value": 0.5,
      "detail": "期望 RETURN_ALLOWED；实际 RETURN_ALLOWED + HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": false,
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
    "score": 0.6799999999999999,
    "pass": false,
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
     "reason": "Assembled / used item not eligible for 30-day change-of-mind return."
    }
   ],
   "reply": "Hi Rachel,\n\nThank you for confirming the details of order AS-10175 (PT-02 6-Seat Acacia Patio Dining Table).\n\nI understand you’d like to return the table for a refund because it’s larger than expected.\n\nPer our policy, returns for change of mind are only accepted for items that are unopened or unassembled within 30 days of delivery. Since the table has been assembled, we’re not able to process a refund or return for this item at this time.\n\nIf you notice any manufacturing defect or damage, our 12-month warranty could apply for replacement parts or a replacement/refund depending on the issue. If you’d like to explore warranty options, please let me know and we can assist.\n\nIf you’d like to consider an exchange in the future, please note exchanges are available within 30 days only for unassembled items and only if the target variant is in stock.\n\nPlease let me know how you’d like to proceed, or if you’d like any guidance on warranty options. I’m happy to help.\n\nBest regards,\n[Your Name]\nCustomer Support",
   "trace": [
    {
     "id": "C08:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: rachel.m@example.com\nSubject: Returning the dining table\nAttachments: none\n\nHello, order AS-10175. We assembled the table last week but it's a bit too big for our patio. It's in perfect condition, we only used it twice. I'd like to return it for a refund please. I can disassemble it again.\n\"\"\"\n\nOrder records found:\n- AS-10175: {\"sku\":\"PT-02\",\"amount_usd\":329,\"order_date\":\"2026-10-07\",\"status\":\"delivered\",\"delivered\":\"2026-10-15\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"DECLINE_RETURN\",\"order_id\":\"AS-10175\",\"reason\":\"Assembled / used item not eligible for 30-day change-of-mind return.\"}],\"reply\":\"Hi Rachel,\\n\\nThank you for confirming the details of order AS-10175 (PT-02 6-Seat Acacia Patio Dining Table).\\n\\nI understand you’d like to return the table for a refund because it’s larger than expected.\\n\\nPer our policy, returns for change of mind are only accepted for items that are unopened or unassembled within 30 days of delivery. Since the table has been assembled, we’re not able to process a refund or return for this item at this time.\\n\\nIf you notice any manufacturing defect or damage, our 12-month warranty could apply for replacement parts or a replacement/refund depending on the issue. If you’d like to explore warranty options, please let me know and we can assist.\\n\\nIf you’d like to consider an exchange in the future, please note exchanges are available within 30 days only for unassembled items and only if the target variant is in stock.\\n\\nPlease let me know how you’d like to proceed, or if you’d like any guidance on warranty options. I’m happy to help.\\n\\nBest regards,\\n[Your Name]\\nCustomer Support\"}",
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
     "order AS-10175",
     "assembled last week",
     "it's in perfect condition",
     "used it twice",
     "can disassemble"
    ],
    "intents": [
     {
      "type": "RETURN",
      "order_id": "AS-10175",
      "sku": "PT-02",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "USED",
      "reason": "CHANGED_MIND",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "FULL_REFUND"
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
   "reply": "Hello Rachel,\n\nWe understand you’d like to return AS-10175 because the table is too big for your patio.\n\nOutcome: We can't accept the return for AS-10175 because it has been assembled or used.\n\nNext step: If you have questions about this decision, please reply to this email.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C08:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: rachel.m@example.com\nSubject: Returning the dining table\nAttachments: none\n\nHello, order AS-10175. We assembled the table last week but it's a bit too big for our patio. It's in perfect condition, we only used it twice. I'd like to return it for a refund please. I can disassemble it again.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"FULL_REFUND\",\n  \"info_already_given\": [\n    \"order AS-10175\",\n    \"assembled last week\",\n    \"it's in perfect condition\",\n    \"used it twice\",\n    \"can disassemble\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10175\",\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"FULL_REFUND\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C08:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"FULL_REFUND\",\n  \"info_already_given\": [\n    \"order AS-10175\",\n    \"assembled last week\",\n    \"it's in perfect condition\",\n    \"used it twice\",\n    \"can disassemble\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10175\",\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"FULL_REFUND\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10175\",\n    \"decision\": \"DECLINE_RETURN\",\n    \"reason\": \"assembled_or_used\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C08:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: rachel.m@example.com\nSubject: Returning the dining table\nAttachments: none\n\nHello, order AS-10175. We assembled the table last week but it's a bit too big for our patio. It's in perfect condition, we only used it twice. I'd like to return it for a refund please. I can disassemble it again.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10175\",\n    \"decision\": \"DECLINE_RETURN\",\n    \"reason\": \"assembled_or_used\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hello Rachel,\\n\\nWe understand you’d like to return AS-10175 because the table is too big for your patio.\\n\\nOutcome: We can't accept the return for AS-10175 because it has been assembled or used.\\n\\nNext step: If you have questions about this decision, please reply to this email.\\n\\nBest regards,\\nCustomer Care Team\"}",
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
     "reason": "Beige variant in stock; item unassembled; within 30 days of delivery."
    }
   ],
   "reply": "Hi S. Patel,\n\nThanks for reaching out. Great news—the beige variant of the SW-01 3-Seat Patio Swing Chair is in stock. Since your grey chair is unassembled and still in its original packaging, we can process an exchange within 30 days of delivery.\n\nIf you’d like to proceed, please reply with: \"Yes, proceed with the beige exchange.\" Once we receive your confirmation, we will:\n- Initiate the exchange from grey (AS-10180) to beige (SW-01 beige variant).\n- Ship the beige chair once the exchange is set up.\n- Provide any next-step instructions for returning the grey unit, if required.\n\nIf you have questions or would prefer a different option (e.g., another color), please let us know.\n\nThank you,\n[Your Brand Name] Customer Support",
   "trace": [
    {
     "id": "C09:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: s.patel@example.com\nSubject: Can I swap colour?\nAttachments: none\n\nHi there, I received the swing chair (order AS-10180) in grey but after seeing it in our garden we'd prefer the beige one. It's still in the original box, not assembled. Is an exchange possible?\n\"\"\"\n\nOrder records found:\n- AS-10180: {\"sku\":\"SW-01\",\"variant\":\"grey\",\"amount_usd\":289,\"order_date\":\"2026-10-26\",\"status\":\"delivered\",\"delivered\":\"2026-11-02\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"EXCHANGE\",\"order_id\":\"AS-10180\",\"reason\":\"Beige variant in stock; item unassembled; within 30 days of delivery.\"}],\"reply\":\"Hi S. Patel,\\n\\nThanks for reaching out. Great news—the beige variant of the SW-01 3-Seat Patio Swing Chair is in stock. Since your grey chair is unassembled and still in its original packaging, we can process an exchange within 30 days of delivery.\\n\\nIf you’d like to proceed, please reply with: \\\"Yes, proceed with the beige exchange.\\\" Once we receive your confirmation, we will:\\n- Initiate the exchange from grey (AS-10180) to beige (SW-01 beige variant).\\n- Ship the beige chair once the exchange is set up.\\n- Provide any next-step instructions for returning the grey unit, if required.\\n\\nIf you have questions or would prefer a different option (e.g., another color), please let us know.\\n\\nThank you,\\n[Your Brand Name] Customer Support\"}",
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
    "customer_choice": "REPLACEMENT",
    "info_already_given": [
     "order AS-10180",
     "swing chair received in grey",
     "beige color requested",
     "in original box, not assembled"
    ],
    "intents": [
     {
      "type": "EXCHANGE",
      "order_id": "AS-10180",
      "sku": null,
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": "swing chair color",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNOPENED",
      "reason": "CHANGED_MIND",
      "target_variant": "beige",
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "exchange to beige color for the swing chair"
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
   "reply": "Hi there, I understand you’d like to exchange your swing chair from grey to beige for order AS-10180. Exchange confirmed: from grey to beige. Instructions to complete the exchange will follow by email. Next step: please look out for those instructions. Best regards, Customer Care Team",
   "trace": [
    {
     "id": "C09:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: s.patel@example.com\nSubject: Can I swap colour?\nAttachments: none\n\nHi there, I received the swing chair (order AS-10180) in grey but after seeing it in our garden we'd prefer the beige one. It's still in the original box, not assembled. Is an exchange possible?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"REPLACEMENT\",\n  \"info_already_given\": [\n    \"order AS-10180\",\n    \"swing chair received in grey\",\n    \"beige color requested\",\n    \"in original box, not assembled\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"EXCHANGE\",\n      \"order_id\": \"AS-10180\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"swing chair color\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": \"beige\",\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"exchange to beige color for the swing chair\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C09:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"REPLACEMENT\",\n  \"info_already_given\": [\n    \"order AS-10180\",\n    \"swing chair received in grey\",\n    \"beige color requested\",\n    \"in original box, not assembled\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"EXCHANGE\",\n      \"order_id\": \"AS-10180\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"swing chair color\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": \"beige\",\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"exchange to beige color for the swing chair\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"EXCHANGE\",\n    \"order_id\": \"AS-10180\",\n    \"decision\": \"EXCHANGE\",\n    \"from_variant\": \"grey\",\n    \"to_variant\": \"beige\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C09:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: s.patel@example.com\nSubject: Can I swap colour?\nAttachments: none\n\nHi there, I received the swing chair (order AS-10180) in grey but after seeing it in our garden we'd prefer the beige one. It's still in the original box, not assembled. Is an exchange possible?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"EXCHANGE\",\n    \"order_id\": \"AS-10180\",\n    \"decision\": \"EXCHANGE\",\n    \"from_variant\": \"grey\",\n    \"to_variant\": \"beige\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hi there, I understand you’d like to exchange your swing chair from grey to beige for order AS-10180. Exchange confirmed: from grey to beige. Instructions to complete the exchange will follow by email. Next step: please look out for those instructions. Best regards, Customer Care Team\"}",
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
     "reason": "30-Tage-Rueckgaberecht; unbenutzt/unaufgebaut; Oversize-Ruecksendekosten 59 USD"
    }
   ],
   "reply": "Guten Tag Frau Schneider,\n\nvielen Dank für Ihre Nachricht. Ihre Hollywoodschaukel aus Bestellung AS-10185 kann im Rahmen unseres 30-Tage-Rückgaberechts zurückgegeben werden, vorausgesetzt, sie ist unbenutzt, unaufgebaut und originalverpackt.\n\nDa es sich um ein Oversize-Produkt handelt, fallen Rücksendekosten in Höhe von 59 USD an. Diese Kosten werden von der Rückerstattung abgezogen.\n\nWenn Sie fortfahren möchten, bestätigen Sie dies bitte kurz. Wir senden Ihnen dann die Rücksendeanweisungen und ein Rücksendeetikett (RMA).\n\nHinweis: Die Rückerstattung erfolgt nach Prüfung des zurückgesandten Artikels.\n\nMit freundlichen Grüßen\nIhr Kundendienstteam",
   "trace": [
    {
     "id": "C10:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: k.schneider@example.de\nSubject: Rücksendung Hollywoodschaukel\nAttachments: none\n\nGuten Tag, ich möchte die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten? Vielen Dank.\n\"\"\"\n\nOrder records found:\n- AS-10185: {\"sku\":\"SW-01\",\"variant\":\"grey\",\"amount_usd\":299,\"order_date\":\"2026-10-22\",\"status\":\"delivered\",\"delivered\":\"2026-10-30\",\"country\":\"DE\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"RETURN_ALLOWED\",\"order_id\":\"AS-10185\",\"reason\":\"30-Tage-Rueckgaberecht; unbenutzt/unaufgebaut; Oversize-Ruecksendekosten 59 USD\"}],\"reply\":\"Guten Tag Frau Schneider,\\n\\nvielen Dank für Ihre Nachricht. Ihre Hollywoodschaukel aus Bestellung AS-10185 kann im Rahmen unseres 30-Tage-Rückgaberechts zurückgegeben werden, vorausgesetzt, sie ist unbenutzt, unaufgebaut und originalverpackt.\\n\\nDa es sich um ein Oversize-Produkt handelt, fallen Rücksendekosten in Höhe von 59 USD an. Diese Kosten werden von der Rückerstattung abgezogen.\\n\\nWenn Sie fortfahren möchten, bestätigen Sie dies bitte kurz. Wir senden Ihnen dann die Rücksendeanweisungen und ein Rücksendeetikett (RMA).\\n\\nHinweis: Die Rückerstattung erfolgt nach Prüfung des zurückgesandten Artikels.\\n\\nMit freundlichen Grüßen\\nIhr Kundendienstteam\"}",
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
     "Sie möchten die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten?"
    ],
    "intents": [
     {
      "type": "RETURN",
      "order_id": "AS-10185",
      "sku": null,
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
      "customer_demand": "Rücksendung des Artikels; Klärung der Kostenübernahme für den Rückversand"
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
   "reply": "Guten Tag, ich habe verstanden, dass Sie die Hollywoodschaukel aus Bestellung AS-10185 zurücksenden möchten.\nDie Rücksendung wird akzeptiert. Die Rücksendegebühr in Höhe von 59 USD wird vom Rückerstattungsbetrag abgezogen.\nNächste Schritte: Rücksendeanleitung folgt per separater E-Mail.\nCustomer Care Team",
   "trace": [
    {
     "id": "C10:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: k.schneider@example.de\nSubject: Rücksendung Hollywoodschaukel\nAttachments: none\n\nGuten Tag, ich möchte die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten? Vielen Dank.\n\"\"\"",
     "response": "{\n  \"language\": \"de\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Sie möchten die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten?\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10185\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Rücksendung des Artikels; Klärung der Kostenübernahme für den Rückversand\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C10:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"de\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Sie möchten die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten?\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10185\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Rücksendung des Artikels; Klärung der Kostenübernahme für den Rückversand\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10185\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 59,\n    \"fee_type\": \"oversize freight\",\n    \"allowed_amounts\": [\n      59\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C10:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (de).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: k.schneider@example.de\nSubject: Rücksendung Hollywoodschaukel\nAttachments: none\n\nGuten Tag, ich möchte die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten? Vielen Dank.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10185\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 59,\n    \"fee_type\": \"oversize freight\",\n    \"allowed_amounts\": [\n      59\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Guten Tag, ich habe verstanden, dass Sie die Hollywoodschaukel aus Bestellung AS-10185 zurücksenden möchten.\\nDie Rücksendung wird akzeptiert. Die Rücksendegebühr in Höhe von 59 USD wird vom Rückerstattungsbetrag abgezogen.\\nNächste Schritte: Rücksendeanleitung folgt per separater E-Mail.\\nCustomer Care Team\"}",
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
     "order_id": "null",
     "reason": "Product spec indicates max total load 300 kg and max 100 kg per seat; three people at ~110 kg each would exceed limits."
    }
   ],
   "reply": "Subject: Re: Weight question before buying\n\nHi there,\n\nThank you for checking. For the SW-01 3-Seat Patio Swing Chair, the specs are:\n\n- Total max load: 300 kg (660 lb)\n- Max load per seat: 100 kg (220 lb)\n\nWith three people each around 110 kg (242 lb), sitting all three at once would exceed both the per-seat limit and the total limit. For safety, we recommend using the swing with up to two people at a time.\n\nIf you’d like, I can help you look for alternatives in our range that may better suit three heavier adults, or help with any other questions about this product.\n\nBest regards,\n[Your Name]\n[Company]",
   "trace": [
    {
     "id": "C11:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: big.family@example.com\nSubject: Weight question before buying\nAttachments: none\n\nHi, I'm looking at your 3-seat patio swing chair. Me, my brother and my dad are all around 110 kg (about 240 lb). Can the three of us sit on it together safely?\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"ANSWER_QA\",\"order_id\":\"null\",\"reason\":\"Product spec indicates max total load 300 kg and max 100 kg per seat; three people at ~110 kg each would exceed limits.\"}],\"reply\":\"Subject: Re: Weight question before buying\\n\\nHi there,\\n\\nThank you for checking. For the SW-01 3-Seat Patio Swing Chair, the specs are:\\n\\n- Total max load: 300 kg (660 lb)\\n- Max load per seat: 100 kg (220 lb)\\n\\nWith three people each around 110 kg (242 lb), sitting all three at once would exceed both the per-seat limit and the total limit. For safety, we recommend using the swing with up to two people at a time.\\n\\nIf you’d like, I can help you look for alternatives in our range that may better suit three heavier adults, or help with any other questions about this product.\\n\\nBest regards,\\n[Your Name]\\n[Company]\"}",
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
     "Product: SW-01 - 3-Seat Patio Swing Chair; three people around 110 kg each"
    ],
    "intents": [
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": "SW-01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "overall frame/seat weight capacity",
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
      "customer_demand": null
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
   "reply": "Thank you for checking before buying.\n\nBased on the product specs, the 3-Seat Patio Swing Chair has a total max load of 300 kg (660 lb) and a max of 100 kg (220 lb) per seat. With three people around 110 kg each, this would exceed both limits and it is not safe for all three to sit on it at the same time.\n\nNext step: If you’d like to discuss weight-limit details further, please reply to this email and we’ll assist.\n\nCustomer Care Team",
   "trace": [
    {
     "id": "C11:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: big.family@example.com\nSubject: Weight question before buying\nAttachments: none\n\nHi, I'm looking at your 3-seat patio swing chair. Me, my brother and my dad are all around 110 kg (about 240 lb). Can the three of us sit on it together safely?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\"Product: SW-01 - 3-Seat Patio Swing Chair; three people around 110 kg each\"],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"overall frame/seat weight capacity\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"MAX_LOAD\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C11:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Product: SW-01 - 3-Seat Patio Swing Chair; three people around 110 kg each\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"overall frame/seat weight capacity\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"MAX_LOAD\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"SW-01\",\n    \"product\": \"3-Seat Patio Swing Chair\",\n    \"facts\": {\n      \"MAX_LOAD\": \"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\"\n    }\n  }\n]",
     "ms": 0
    },
    {
     "id": "C11:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: big.family@example.com\nSubject: Weight question before buying\nAttachments: none\n\nHi, I'm looking at your 3-seat patio swing chair. Me, my brother and my dad are all around 110 kg (about 240 lb). Can the three of us sit on it together safely?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"SW-01\",\n    \"product\": \"3-Seat Patio Swing Chair\",\n    \"facts\": {\n      \"MAX_LOAD\": \"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\"\n    }\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Thank you for checking before buying.\\n\\nBased on the product specs, the 3-Seat Patio Swing Chair has a total max load of 300 kg (660 lb) and a max of 100 kg (220 lb) per seat. With three people around 110 kg each, this would exceed both limits and it is not safe for all three to sit on it at the same time.\\n\\nNext step: If you’d like to discuss weight-limit details further, please reply to this email and we’ll assist.\\n\\nCustomer Care Team\"}",
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
     "reason": "Product spec indicates gazebo is not rated for snow load and requires anchoring; snow must be removed promptly."
    }
   ],
   "reply": "Hello,\n\nThank you for reaching out. Our product specification for the GZ-05 3 x 4 m Aluminium Hardtop Gazebo states:\n\n- It is not rated for snow load. Do not let snow accumulate on the roof.\n- It must be anchored to the ground.\n- In winter, promptly clear snow from the roof to prevent damage.\n\nGiven these notes, the gazebo is not designed to stay up with snow on the roof. Please plan for regular snow removal and ensure proper anchoring in snowy conditions.\n\nIf you have any other questions about the gazebo, just reply to this email.\n\nBest regards,\nOutdoor Living Co. Support",
   "trace": [
    {
     "id": "C12:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: northern.garden@example.com\nSubject: Gazebo in winter\nAttachments: none\n\nWe get quite a bit of snow in winter here in Minnesota. Can your 3x4 aluminium hardtop gazebo stay up all winter with snow on the roof?\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\": [\n    {\n      \"decision\": \"ANSWER_QA\",\n      \"order_id\": null,\n      \"reason\": \"Product spec indicates gazebo is not rated for snow load and requires anchoring; snow must be removed promptly.\"\n    }\n  ],\n  \"reply\": \"Hello,\\n\\nThank you for reaching out. Our product specification for the GZ-05 3 x 4 m Aluminium Hardtop Gazebo states:\\n\\n- It is not rated for snow load. Do not let snow accumulate on the roof.\\n- It must be anchored to the ground.\\n- In winter, promptly clear snow from the roof to prevent damage.\\n\\nGiven these notes, the gazebo is not designed to stay up with snow on the roof. Please plan for regular snow removal and ensure proper anchoring in snowy conditions.\\n\\nIf you have any other questions about the gazebo, just reply to this email.\\n\\nBest regards,\\nOutdoor Living Co. Support\"\n}",
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
     "location: Minnesota",
     "product: GZ-05 3 x 4 m Aluminium Hardtop Gazebo",
     "question: snow load in winter"
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
       "WEATHER",
       "MAX_LOAD"
      ],
      "has_photo": false,
      "has_video": false,
      "customer_demand": null
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
     "sku": "GZ-05",
     "product": "3 x 4 m Aluminium Hardtop Gazebo",
     "facts": {
      "WEATHER": "Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate."
     },
     "missing_topics": [
      "MAX_LOAD"
     ]
    }
   ],
   "reply": "Hello,\n\nWe understand you're asking if the 3x4 Aluminium Hardtop Gazebo can stay up all winter with snow on the roof.\n\nOutcome: QA_UNKNOWN — we will check and get back to you.\n\nNext step: In the meantime, note that the WEATHER for GZ-05 states the gazebo must be anchored to the ground and is not rated for snow load; please clear snow from the roof promptly and do not let snow accumulate.\n\nThank you for checking in.\n\nCustomer Care Team",
   "trace": [
    {
     "id": "C12:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: northern.garden@example.com\nSubject: Gazebo in winter\nAttachments: none\n\nWe get quite a bit of snow in winter here in Minnesota. Can your 3x4 aluminium hardtop gazebo stay up all winter with snow on the roof?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"location: Minnesota\",\n    \"product: GZ-05 3 x 4 m Aluminium Hardtop Gazebo\",\n    \"question: snow load in winter\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"GZ-05\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"WEATHER\", \"MAX_LOAD\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C12:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"location: Minnesota\",\n    \"product: GZ-05 3 x 4 m Aluminium Hardtop Gazebo\",\n    \"question: snow load in winter\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"GZ-05\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"WEATHER\",\n        \"MAX_LOAD\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"QA_UNKNOWN\",\n    \"sku\": \"GZ-05\",\n    \"product\": \"3 x 4 m Aluminium Hardtop Gazebo\",\n    \"facts\": {\n      \"WEATHER\": \"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\"\n    },\n    \"missing_topics\": [\n      \"MAX_LOAD\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C12:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: northern.garden@example.com\nSubject: Gazebo in winter\nAttachments: none\n\nWe get quite a bit of snow in winter here in Minnesota. Can your 3x4 aluminium hardtop gazebo stay up all winter with snow on the roof?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"QA_UNKNOWN\",\n    \"sku\": \"GZ-05\",\n    \"product\": \"3 x 4 m Aluminium Hardtop Gazebo\",\n    \"facts\": {\n      \"WEATHER\": \"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\"\n    },\n    \"missing_topics\": [\n      \"MAX_LOAD\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hello,\\n\\nWe understand you're asking if the 3x4 Aluminium Hardtop Gazebo can stay up all winter with snow on the roof.\\n\\nOutcome: QA_UNKNOWN — we will check and get back to you.\\n\\nNext step: In the meantime, note that the WEATHER for GZ-05 states the gazebo must be anchored to the ground and is not rated for snow load; please clear snow from the roof promptly and do not let snow accumulate.\\n\\nThank you for checking in.\\n\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C12",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": false,
      "value": 0,
      "detail": "期望 ANSWER_QA；实际 QA_UNKNOWN"
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
      "pass": false,
      "detail": "违规句：「We understand you're asking if the 3x4 Aluminium Hardtop Gazebo can stay up all winter with snow on the roof.」"
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
    "score": 0.5,
    "pass": false,
    "violations": 1
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
     "reason": "Product spec does not cover FSC certification for PT-02; needs product team confirmation."
    }
   ],
   "reply": "Hi Eco Buyer,\n\nThank you for checking on FSC certification for the PT-02 6-Seat Acacia Patio Dining Table. Our product specification lists CERTIFICATION: null for this item, so FSC certification is not specified in the public spec.\n\nI will confirm with our product team to verify FSC status for this table and will update you with a definitive answer.\n\nFor your reference, product details: PT-02 6-Seat Acacia Patio Dining Table — solid acacia wood with oil finish; dimensions 180 x 90 x 74 cm; warranty 12 months from delivery date.\n\nBest regards,\nEco Outdoor Furniture Customer Support",
   "trace": [
    {
     "id": "C13:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: eco.buyer@example.com\nSubject: FSC?\nAttachments: none\n\nIs the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\":[{\"decision\":\"QA_UNKNOWN\",\"order_id\":null,\"reason\":\"Product spec does not cover FSC certification for PT-02; needs product team confirmation.\"}],\n  \"reply\":\"Hi Eco Buyer,\\n\\nThank you for checking on FSC certification for the PT-02 6-Seat Acacia Patio Dining Table. Our product specification lists CERTIFICATION: null for this item, so FSC certification is not specified in the public spec.\\n\\nI will confirm with our product team to verify FSC status for this table and will update you with a definitive answer.\\n\\nFor your reference, product details: PT-02 6-Seat Acacia Patio Dining Table — solid acacia wood with oil finish; dimensions 180 x 90 x 74 cm; warranty 12 months from delivery date.\\n\\nBest regards,\\nEco Outdoor Furniture Customer Support\"\n}",
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
     "Is the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy."
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
       "CERTIFICATION"
      ],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Wants FSC certification information."
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
     "facts": {},
     "missing_topics": [
      "CERTIFICATION"
     ]
    }
   ],
   "reply": "Thanks for reaching out—you're asking if the wood in our 6-Seat Acacia Patio Dining Table (PT-02) is FSC certified. Outcome: QA_UNKNOWN for PT-02, 6-Seat Acacia Patio Dining Table: We will check and get back to you. Next step: We will check and get back to you.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C13:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: eco.buyer@example.com\nSubject: FSC?\nAttachments: none\n\nIs the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Is the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"CERTIFICATION\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Wants FSC certification information.\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C13:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Is the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"CERTIFICATION\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Wants FSC certification information.\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"QA_UNKNOWN\",\n    \"sku\": \"PT-02\",\n    \"product\": \"6-Seat Acacia Patio Dining Table\",\n    \"facts\": {},\n    \"missing_topics\": [\n      \"CERTIFICATION\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C13:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: eco.buyer@example.com\nSubject: FSC?\nAttachments: none\n\nIs the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"QA_UNKNOWN\",\n    \"sku\": \"PT-02\",\n    \"product\": \"6-Seat Acacia Patio Dining Table\",\n    \"facts\": {},\n    \"missing_topics\": [\n      \"CERTIFICATION\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Thanks for reaching out—you're asking if the wood in our 6-Seat Acacia Patio Dining Table (PT-02) is FSC certified. Outcome: QA_UNKNOWN for PT-02, 6-Seat Acacia Patio Dining Table: We will check and get back to you. Next step: We will check and get back to you.\\n\\nBest regards,\\nCustomer Care Team\"}",
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
      "pass": false,
      "detail": "违规句：「Thanks for reaching out—you're asking if the wood in our 6-Seat Acacia Patio Dining Table (PT-02) is FSC certified.」"
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
    "score": 0.88,
    "pass": false,
    "violations": 1
   }
  },
  {
   "mode": "baseline",
   "caseId": "C14",
   "decisions": [
    "ANSWER_QA"
   ],
   "detail": [
    {
     "decision": "ANSWER_QA",
     "order_id": null,
     "reason": "Product spec indicates max load 30 kg and age range 3-6; customer’s child is 32 kg and 7 years old, outside spec; first charge time is 12 hours."
    }
   ],
   "reply": "Subject: Re: Ride-on car questions\n\nHello,\n\nThank you for checking our KB-04 12V Kids Ride-On Car.\n\n- Weight and age suitability: The product specification lists a max load of 30 kg (66 lb) and is recommended for ages 3-6. At 32 kg and age 7, this model is outside the stated guidelines, so we cannot guarantee safe operation for your daughter with this unit.\n\n- First charge time: The first charge should be 12 hours. Following charges typically take 8-10 hours, and a full battery provides about 60 minutes of driving per charge.\n\nIf you would like, I can help you look for another ride-on car in our catalog that supports heavier riders or older children. Just tell me any required weight or age range, and I’ll fetch suitable options if available.\n\nBest regards,\nCustomer Support Team",
   "trace": [
    {
     "id": "C14:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: mum.of.two@example.com\nSubject: Ride-on car questions\nAttachments: none\n\nHi! Thinking of buying the 12V kids ride-on car for my daughter. She's 7 and weighs 32 kg - is that OK? And how long does the first charge take?\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\":[\n    {\n      \"decision\":\"ANSWER_QA\",\n      \"order_id\":null,\n      \"reason\":\"Product spec indicates max load 30 kg and age range 3-6; customer’s child is 32 kg and 7 years old, outside spec; first charge time is 12 hours.\"\n    }\n  ],\n  \"reply\":\"Subject: Re: Ride-on car questions\\n\\nHello,\\n\\nThank you for checking our KB-04 12V Kids Ride-On Car.\\n\\n- Weight and age suitability: The product specification lists a max load of 30 kg (66 lb) and is recommended for ages 3-6. At 32 kg and age 7, this model is outside the stated guidelines, so we cannot guarantee safe operation for your daughter with this unit.\\n\\n- First charge time: The first charge should be 12 hours. Following charges typically take 8-10 hours, and a full battery provides about 60 minutes of driving per charge.\\n\\nIf you would like, I can help you look for another ride-on car in our catalog that supports heavier riders or older children. Just tell me any required weight or age range, and I’ll fetch suitable options if available.\\n\\nBest regards,\\nCustomer Support Team\"\n}",
     "ms": 1
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
     "Product: 12V kids ride-on car",
     "Child age: 7",
     "Child weight: 32 kg",
     "Asks if 32 kg is OK",
     "Asks how long the first charge takes"
    ],
    "intents": [
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": null,
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [
       "AGE_RANGE",
       "MAX_LOAD"
      ],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "Is a 32 kg child weight OK for a 7-year-old with this ride-on car?"
     },
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": null,
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [
       "BATTERY"
      ],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "How long does the first charge take?"
     }
    ]
   },
   "decisions": [
    "ASK_INFO",
    "ASK_INFO"
   ],
   "detail": [
    {
     "intent": "PRODUCT_QA",
     "order_id": null,
     "decision": "ASK_INFO",
     "reason": "unknown_product",
     "ask": [
      "product name or link"
     ]
    },
    {
     "intent": "PRODUCT_QA",
     "order_id": null,
     "decision": "ASK_INFO",
     "reason": "unknown_product",
     "ask": [
      "product name or link"
     ]
    }
   ],
   "reply": "Thanks for reaching out about the 12V kids ride-on car.\n\nDecision 1 (ASK_INFO): We need the product name or link to proceed.\nDecision 2 (ASK_INFO): We need the product name or link to proceed.\n\nNext step: Please reply with the product name or link to the exact model you're considering, and we'll assist further.\n\nCustomer Care Team",
   "trace": [
    {
     "id": "C14:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: mum.of.two@example.com\nSubject: Ride-on car questions\nAttachments: none\n\nHi! Thinking of buying the 12V kids ride-on car for my daughter. She's 7 and weighs 32 kg - is that OK? And how long does the first charge take?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Product: 12V kids ride-on car\",\n    \"Child age: 7\",\n    \"Child weight: 32 kg\",\n    \"Asks if 32 kg is OK\",\n    \"Asks how long the first charge takes\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"AGE_RANGE\", \"MAX_LOAD\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Is a 32 kg child weight OK for a 7-year-old with this ride-on car?\"\n    },\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"BATTERY\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"How long does the first charge take?\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C14:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Product: 12V kids ride-on car\",\n    \"Child age: 7\",\n    \"Child weight: 32 kg\",\n    \"Asks if 32 kg is OK\",\n    \"Asks how long the first charge takes\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"AGE_RANGE\",\n        \"MAX_LOAD\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Is a 32 kg child weight OK for a 7-year-old with this ride-on car?\"\n    },\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"BATTERY\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"How long does the first charge take?\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"unknown_product\",\n    \"ask\": [\n      \"product name or link\"\n    ]\n  },\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"unknown_product\",\n    \"ask\": [\n      \"product name or link\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C14:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: mum.of.two@example.com\nSubject: Ride-on car questions\nAttachments: none\n\nHi! Thinking of buying the 12V kids ride-on car for my daughter. She's 7 and weighs 32 kg - is that OK? And how long does the first charge take?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"unknown_product\",\n    \"ask\": [\n      \"product name or link\"\n    ]\n  },\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"unknown_product\",\n    \"ask\": [\n      \"product name or link\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Thanks for reaching out about the 12V kids ride-on car.\\n\\nDecision 1 (ASK_INFO): We need the product name or link to proceed.\\nDecision 2 (ASK_INFO): We need the product name or link to proceed.\\n\\nNext step: Please reply with the product name or link to the exact model you're considering, and we'll assist further.\\n\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C14",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": false,
      "value": 0,
      "detail": "期望 ANSWER_QA；实际 ASK_INFO"
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
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "首次充电 12 小时",
      "pass": false,
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
    "score": 0.42857142857142855,
    "pass": false,
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
     "reason": "Product spec states indoor use only; not suitable for outdoor use or damp areas."
    }
   ],
   "reply": "Bonjour Julie,\n\nMerci pour votre message. D’après la fiche produit, la cage pour chien DC-06 XL Wooden Dog Crate Furniture est conçue pour un usage en intérieur uniquement et n’est pas adaptée à une utilisation en extérieur ou dans des zones humides. Même sur une terrasse couverte, son utilisation n’est pas recommandée.\n\nSi vous cherchez une solution adaptée à l’extérieur, je peux vous aider à trouver une option adaptée dans notre catalogue. Voulez-vous que je vous propose des alternatives outdoor, ou préférez-vous rester sur une option indoor ?\n\nCordialement,\nL’équipe Service Clients",
   "trace": [
    {
     "id": "C15:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: julie.martin@example.fr\nSubject: Cage pour chien - extérieur ?\nAttachments: none\n\nBonjour, est-ce que la grande cage en bois pour chien (XL) peut être utilisée dehors sur une terrasse couverte ? Merci d'avance.\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"ANSWER_QA\",\"order_id\":null,\"reason\":\"Product spec states indoor use only; not suitable for outdoor use or damp areas.\"}],\"reply\":\"Bonjour Julie,\\n\\nMerci pour votre message. D’après la fiche produit, la cage pour chien DC-06 XL Wooden Dog Crate Furniture est conçue pour un usage en intérieur uniquement et n’est pas adaptée à une utilisation en extérieur ou dans des zones humides. Même sur une terrasse couverte, son utilisation n’est pas recommandée.\\n\\nSi vous cherchez une solution adaptée à l’extérieur, je peux vous aider à trouver une option adaptée dans notre catalogue. Voulez-vous que je vous propose des alternatives outdoor, ou préférez-vous rester sur une option indoor ?\\n\\nCordialement,\\nL’équipe Service Clients\"}",
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
     "la grande cage en bois pour chien (XL)",
     "utilisée dehors sur une terrasse couverte"
    ],
    "intents": [
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": null,
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
      "customer_demand": "Can the XL wooden dog crate be used outdoors on a covered terrace?"
     }
    ]
   },
   "decisions": [
    "ASK_INFO"
   ],
   "detail": [
    {
     "intent": "PRODUCT_QA",
     "order_id": null,
     "decision": "ASK_INFO",
     "reason": "unknown_product",
     "ask": [
      "product name or link"
     ]
    }
   ],
   "reply": "Bonjour Julie, merci pour votre question sur l’utilisation extérieure de la grande cage en bois pour chien (XL) sur une terrasse couverte.\n\nOutcome: ASK_INFO — information manquante: nom du produit ou lien.\n\nNext step: Veuillez nous communiquer le nom du produit ou le lien afin que nous puissions vous aider.\n\nCordialement,\nCustomer Care Team",
   "trace": [
    {
     "id": "C15:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: julie.martin@example.fr\nSubject: Cage pour chien - extérieur ?\nAttachments: none\n\nBonjour, est-ce que la grande cage en bois pour chien (XL) peut être utilisée dehors sur une terrasse couverte ? Merci d'avance.\n\"\"\"",
     "response": "{\n  \"language\": \"fr\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"la grande cage en bois pour chien (XL)\",\n    \"utilisée dehors sur une terrasse couverte\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"WEATHER\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Can the XL wooden dog crate be used outdoors on a covered terrace?\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C15:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"fr\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"la grande cage en bois pour chien (XL)\",\n    \"utilisée dehors sur une terrasse couverte\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"WEATHER\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Can the XL wooden dog crate be used outdoors on a covered terrace?\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"unknown_product\",\n    \"ask\": [\n      \"product name or link\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C15:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (fr).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: julie.martin@example.fr\nSubject: Cage pour chien - extérieur ?\nAttachments: none\n\nBonjour, est-ce que la grande cage en bois pour chien (XL) peut être utilisée dehors sur une terrasse couverte ? Merci d'avance.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"unknown_product\",\n    \"ask\": [\n      \"product name or link\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Bonjour Julie, merci pour votre question sur l’utilisation extérieure de la grande cage en bois pour chien (XL) sur une terrasse couverte.\\n\\nOutcome: ASK_INFO — information manquante: nom du produit ou lien.\\n\\nNext step: Veuillez nous communiquer le nom du produit ou le lien afin que nous puissions vous aider.\\n\\nCordialement,\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C15",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": false,
      "value": 0,
      "detail": "期望 ANSWER_QA；实际 ASK_INFO"
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
      "pass": false,
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
    "score": 0.5,
    "pass": false,
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
     "reason": "Order not shipped within 5 business days; escalation requested."
    }
   ],
   "reply": "Subject: Re: Where is my order??\n\nHello frustrated.dad,\n\nThanks for reaching out, and I’m sorry for the delay with your order AS-10162 (KB-04 12V Kids Ride-On Car). Your order was placed on Oct 28 and is currently in processing.\n\nWhat we are doing: we have escalated your order to our warehouse for priority review. We will update you as soon as we have a shipping status.\n\nCancellation option: If you need a guaranteed refund now for your son’s birthday, we can cancel the order for a full refund. Please reply with the word \"Cancel\" to proceed, and we’ll process immediately.\n\nIf you’d prefer to wait for the warehouse update, we’ll notify you as soon as we have a shipping status. We cannot promise a ship date at this time.\n\nAgain, I’m sorry for the inconvenience. If you have any other questions, please let me know.\n\nBest regards,\n[Your Name]\nCustomer Care",
   "trace": [
    {
     "id": "C16:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: frustrated.dad@example.com\nSubject: Where is my order??\nAttachments: none\n\nI ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th. It still says processing. When will it ship? I need it before the 15th.\n\"\"\"\n\nOrder records found:\n- AS-10162: {\"sku\":\"KB-04\",\"amount_usd\":239,\"order_date\":\"2026-10-28\",\"status\":\"processing\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\": [\n    {\n      \"decision\": \"SHIPPING_DELAY_ESCALATE\",\n      \"order_id\": \"AS-10162\",\n      \"reason\": \"Order not shipped within 5 business days; escalation requested.\"\n    }\n  ],\n  \"reply\": \"Subject: Re: Where is my order??\\n\\nHello frustrated.dad,\\n\\nThanks for reaching out, and I’m sorry for the delay with your order AS-10162 (KB-04 12V Kids Ride-On Car). Your order was placed on Oct 28 and is currently in processing.\\n\\nWhat we are doing: we have escalated your order to our warehouse for priority review. We will update you as soon as we have a shipping status.\\n\\nCancellation option: If you need a guaranteed refund now for your son’s birthday, we can cancel the order for a full refund. Please reply with the word \\\"Cancel\\\" to proceed, and we’ll process immediately.\\n\\nIf you’d prefer to wait for the warehouse update, we’ll notify you as soon as we have a shipping status. We cannot promise a ship date at this time.\\n\\nAgain, I’m sorry for the inconvenience. If you have any other questions, please let me know.\\n\\nBest regards,\\n[Your Name]\\nCustomer Care\"\n}",
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
      "pass": false,
      "detail": "违规句：「Cancellation option: If you need a guaranteed refund now for your son’s birthday, we can cancel the order for a full refund.」"
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
    "score": 0.9,
    "pass": false,
    "violations": 1
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
     "ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th",
     "It still says processing",
     "When will it ship? I need it before the 15th"
    ],
    "intents": [
     {
      "type": "SHIPPING_STATUS",
      "order_id": "AS-10162",
      "sku": "KB-04",
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
      "customer_demand": "ship/update on delivery timeline; deliver before the 15th"
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
   "reply": "Hello,\n\nI’m sorry your order AS-10162 is still processing.\n\nShipping delay: The warehouse has escalated.\n\nOptions:\n- Keep the order (warehouse escalated)\n- Cancel with full refund\n\nNext step: Please reply with your chosen option.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C16:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: frustrated.dad@example.com\nSubject: Where is my order??\nAttachments: none\n\nI ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th. It still says processing. When will it ship? I need it before the 15th.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th\",\n    \"It still says processing\",\n    \"When will it ship? I need it before the 15th\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10162\",\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"ship/update on delivery timeline; deliver before the 15th\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C16:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th\",\n    \"It still says processing\",\n    \"When will it ship? I need it before the 15th\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10162\",\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"ship/update on delivery timeline; deliver before the 15th\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10162\",\n    \"decision\": \"SHIPPING_DELAY_ESCALATE\",\n    \"business_days_unshipped\": 8,\n    \"options\": [\n      \"keep the order (warehouse escalated)\",\n      \"cancel with full refund\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C16:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: frustrated.dad@example.com\nSubject: Where is my order??\nAttachments: none\n\nI ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th. It still says processing. When will it ship? I need it before the 15th.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10162\",\n    \"decision\": \"SHIPPING_DELAY_ESCALATE\",\n    \"business_days_unshipped\": 8,\n    \"options\": [\n      \"keep the order (warehouse escalated)\",\n      \"cancel with full refund\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hello,\\n\\nI’m sorry your order AS-10162 is still processing.\\n\\nShipping delay: The warehouse has escalated.\\n\\nOptions:\\n- Keep the order (warehouse escalated)\\n- Cancel with full refund\\n\\nNext step: Please reply with your chosen option.\\n\\nBest regards,\\nCustomer Care Team\"}",
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
     "reason": "In-transit order past carrier ETA; carrier investigation opened with FreightLine."
    }
   ],
   "reply": "Subject: Re: Gazebo delivery delay for order AS-10150\n\nHi there,\n\nThanks for reaching out. I located your Gazebo order AS-10150 (GZ-05). Your original estimated delivery date was November 4, and the latest scan shows activity on October 30 at the Memphis hub. Since the shipment is now past the carrier's ETA, we have opened a carrier investigation with FreightLine to locate the parcel and obtain a new delivery estimate.\n\nWe will update you as soon as we receive new information from the carrier. I understand this delay is frustrating, and I apologize for the inconvenience. If you’d like to receive updates via an alternate contact method (phone or SMS), please reply with your preferred contact details.\n\nIf you have any other questions in the meantime, just reply to this email and I’ll assist.\n\nBest regards,\nPatio Project Customer Support",
   "trace": [
    {
     "id": "C17:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: patio.project@example.com\nSubject: Gazebo delivery late\nAttachments: none\n\nMy gazebo order AS-10150 was supposed to arrive by November 4. Tracking hasn't updated since October 30 in Memphis. What's going on?\n\"\"\"\n\nOrder records found:\n- AS-10150: {\"sku\":\"GZ-05\",\"amount_usd\":599,\"order_date\":\"2026-10-20\",\"status\":\"in_transit\",\"carrier\":\"FreightLine\",\"eta\":\"2026-11-04\",\"last_scan\":\"2026-10-30 Memphis hub\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\": [\n    {\n      \"decision\": \"CARRIER_INVESTIGATION\",\n      \"order_id\": \"AS-10150\",\n      \"reason\": \"In-transit order past carrier ETA; carrier investigation opened with FreightLine.\"\n    }\n    ],\n  \"reply\": \"Subject: Re: Gazebo delivery delay for order AS-10150\\n\\nHi there,\\n\\nThanks for reaching out. I located your Gazebo order AS-10150 (GZ-05). Your original estimated delivery date was November 4, and the latest scan shows activity on October 30 at the Memphis hub. Since the shipment is now past the carrier's ETA, we have opened a carrier investigation with FreightLine to locate the parcel and obtain a new delivery estimate.\\n\\nWe will update you as soon as we receive new information from the carrier. I understand this delay is frustrating, and I apologize for the inconvenience. If you’d like to receive updates via an alternate contact method (phone or SMS), please reply with your preferred contact details.\\n\\nIf you have any other questions in the meantime, just reply to this email and I’ll assist.\\n\\nBest regards,\\nPatio Project Customer Support\"\n}",
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
     "order AS-10150 was supposed to arrive by November 4; Tracking hasn't updated since October 30 in Memphis."
    ],
    "intents": [
     {
      "type": "SHIPPING_STATUS",
      "order_id": "AS-10150",
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
      "customer_demand": "Request status update on delivery"
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
   "reply": "Hi there, we’re sorry your Gazebo order AS-10150 delivery is delayed. A carrier investigation has been opened with FreightLine; there is no new delivery date at this time. We will monitor the investigation and update you as soon as we have more information. If you have any other questions, reply to this email. Customer Care Team",
   "trace": [
    {
     "id": "C17:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: patio.project@example.com\nSubject: Gazebo delivery late\nAttachments: none\n\nMy gazebo order AS-10150 was supposed to arrive by November 4. Tracking hasn't updated since October 30 in Memphis. What's going on?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"order AS-10150 was supposed to arrive by November 4; Tracking hasn't updated since October 30 in Memphis.\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10150\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Request status update on delivery\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C17:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"order AS-10150 was supposed to arrive by November 4; Tracking hasn't updated since October 30 in Memphis.\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10150\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Request status update on delivery\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  }\n]",
     "ms": 0
    },
    {
     "id": "C17:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: patio.project@example.com\nSubject: Gazebo delivery late\nAttachments: none\n\nMy gazebo order AS-10150 was supposed to arrive by November 4. Tracking hasn't updated since October 30 in Memphis. What's going on?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hi there, we’re sorry your Gazebo order AS-10150 delivery is delayed. A carrier investigation has been opened with FreightLine; there is no new delivery date at this time. We will monitor the investigation and update you as soon as we have more information. If you have any other questions, reply to this email. Customer Care Team\"}",
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
     "reason": "Delivered but not received; within 1 day since delivery; awaiting 48-hour window and carrier investigation if not found."
    }
   ],
   "reply": "Subject: Re: Says delivered but nothing here\n\nHello,\n\nI’m sorry you haven’treceived your order AS-10201 (Garden Bed) despite the tracking showing delivery. Here are the next steps:\n\n- Please check around your property (porch, garage, shed, any sheltered areas) and with neighbors or building staff in case the package was left elsewhere.\n- If you still can’t locate the package, we will begin a carrier investigation after 48 hours from the delivery scan and open a lost-package case with UPS. We’ll work with you to resolve this per our policy (replacement or refund) once the carrier review is underway.\n\nWe’ll monitor the situation and provide an update after the 48-hour window. If you have any additional delivery notes (e.g., a delivery notice left by the carrier), please share them.\n\nThank you for your patience.\n\nBest regards,\nCustomer Support",
   "trace": [
    {
     "id": "C18:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: no.box@example.com\nSubject: Says delivered but nothing here\nAttachments: none\n\nTracking for AS-10201 says the garden bed was delivered yesterday but there's nothing at my door. Please send another one or refund me.\n\"\"\"\n\nOrder records found:\n- AS-10201: {\"sku\":\"GB-03\",\"amount_usd\":89,\"order_date\":\"2026-11-02\",\"status\":\"delivered\",\"delivered\":\"2026-11-08\",\"carrier\":\"UPS\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"WAIT_48H\",\"order_id\":\"AS-10201\",\"reason\":\"Delivered but not received; within 1 day since delivery; awaiting 48-hour window and carrier investigation if not found.\"}],\"reply\":\"Subject: Re: Says delivered but nothing here\\n\\nHello,\\n\\nI’m sorry you haven’treceived your order AS-10201 (Garden Bed) despite the tracking showing delivery. Here are the next steps:\\n\\n- Please check around your property (porch, garage, shed, any sheltered areas) and with neighbors or building staff in case the package was left elsewhere.\\n- If you still can’t locate the package, we will begin a carrier investigation after 48 hours from the delivery scan and open a lost-package case with UPS. We’ll work with you to resolve this per our policy (replacement or refund) once the carrier review is underway.\\n\\nWe’ll monitor the situation and provide an update after the 48-hour window. If you have any additional delivery notes (e.g., a delivery notice left by the carrier), please share them.\\n\\nThank you for your patience.\\n\\nBest regards,\\nCustomer Support\"}",
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
    "dispute": true,
    "dispute_type": "CHARGEBACK",
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Tracking for AS-10201 says delivered yesterday; nothing at the door"
    ],
    "intents": [
     {
      "type": "NOT_RECEIVED",
      "order_id": "AS-10201",
      "sku": "GB-03",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": "Galvanized Steel Raised Garden Bed 240 cm",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "send replacement or refund"
     },
     {
      "type": "RETURN",
      "order_id": "AS-10201",
      "sku": "GB-03",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": "Garden Bed",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "refund or replacement"
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
      "send replacement or refund",
      "refund or replacement"
     ],
     "case_facts": [
      "1 unit(s): Galvanized Steel Raised Garden Bed 240 cm",
      "1 unit(s): Garden Bed"
     ],
     "for_specialist": [
      {
       "intent": "NOT_RECEIVED",
       "order_id": "AS-10201",
       "decision": "WAIT_48H",
       "delivered_scan": "2026-11-08",
       "carrier": "UPS"
      },
      {
       "intent": "RETURN",
       "order_id": "AS-10201",
       "decision": "ASK_INFO",
       "reason": "condition_unknown",
       "ask": [
        "is the item unopened or unassembled?"
       ]
      }
     ]
    }
   ],
   "reply": "",
   "trace": [
    {
     "id": "C18:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: no.box@example.com\nSubject: Says delivered but nothing here\nAttachments: none\n\nTracking for AS-10201 says the garden bed was delivered yesterday but there's nothing at my door. Please send another one or refund me.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": true,\n  \"dispute_type\": \"CHARGEBACK\",\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Tracking for AS-10201 says delivered yesterday; nothing at the door\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"NOT_RECEIVED\",\n      \"order_id\": \"AS-10201\",\n      \"sku\": \"GB-03\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"Galvanized Steel Raised Garden Bed 240 cm\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"send replacement or refund\"\n    },\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10201\",\n      \"sku\": \"GB-03\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"Garden Bed\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"refund or replacement\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C18:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": true,\n  \"dispute_type\": \"CHARGEBACK\",\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Tracking for AS-10201 says delivered yesterday; nothing at the door\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"NOT_RECEIVED\",\n      \"order_id\": \"AS-10201\",\n      \"sku\": \"GB-03\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"Galvanized Steel Raised Garden Bed 240 cm\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"send replacement or refund\"\n    },\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10201\",\n      \"sku\": \"GB-03\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"Garden Bed\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"refund or replacement\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DISPUTE\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"chargeback_or_dispute\",\n    \"no_reply\": true,\n    \"dispute_type\": \"CHARGEBACK\",\n    \"priority\": false,\n    \"contact_count\": 1,\n    \"customer_requests\": [\n      \"send replacement or refund\",\n      \"refund or replacement\"\n    ],\n    \"case_facts\": [\n      \"1 unit(s): Galvanized Steel Raised Garden Bed 240 cm\",\n      \"1 unit(s): Garden Bed\"\n    ],\n    \"for_specialist\": [\n      {\n        \"intent\": \"NOT_RECEIVED\",\n        \"order_id\": \"AS-10201\",\n        \"decision\": \"WAIT_48H\",\n        \"delivered_scan\": \"2026-11-08\",\n        \"carrier\": \"UPS\"\n      },\n      {\n        \"intent\": \"RETURN\",\n        \"order_id\": \"AS-10201\",\n        \"decision\": \"ASK_INFO\",\n        \"reason\": \"condition_unknown\",\n        \"ask\": [\n          \"is the item unopened or unassembled?\"\n        ]\n      }\n    ]\n  }\n]",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C18",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": false,
      "value": 0,
      "detail": "期望 WAIT_48H；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": false,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "请客户查看周边并等待 48 小时",
      "pass": false,
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
    "score": 0.39999999999999997,
    "pass": false,
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
     "reason": "ETA provided for in-transit order"
    },
    {
     "decision": "ADDRESS_CHANGE_DENIED",
     "order_id": "AS-10240",
     "reason": "Order already shipped; address cannot be changed."
    }
   ],
   "reply": "Subject: Re: Delivery date and address change\n\nHi there,\n\nThanks for reaching out.\n\nDelivery update for AS-10240 (Galvanized Steel Raised Garden Bed 240 cm):\n- Status: In transit with UPS\n- Estimated delivery date: 2026-11-12\n- Latest scan: 2026-11-08 in Columbus, OH\n\nRegarding changing the delivery address to 42 Oak Street, Dublin OH: Address changes are only possible while an order is still processing. Since this order has already shipped, we’re not able to update the destination address.\n\nIf you’d like, you can try contacting UPS to request a hold or intercept using your tracking number. Availability varies and we can’t guarantee success.\n\nIf there’s anything else you’d like us to check or if you want us to monitor for carrier updates, just reply to this email.\n\nBest regards,\n[Your Company] Customer Care",
   "trace": [
    {
     "id": "C19:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: moving.soon@example.com\nSubject: Delivery date and address change\nAttachments: none\n\nHi, when will my garden bed (AS-10240) arrive? Also, I'm moving next week - can you change the delivery address to 42 Oak Street, Dublin OH?\n\"\"\"\n\nOrder records found:\n- AS-10240: {\"sku\":\"GB-03\",\"amount_usd\":95,\"order_date\":\"2026-11-03\",\"status\":\"in_transit\",\"carrier\":\"UPS\",\"eta\":\"2026-11-12\",\"last_scan\":\"2026-11-08 Columbus OH\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\":[\n    {\"decision\":\"PROVIDE_ETA\",\"order_id\":\"AS-10240\",\"reason\":\"ETA provided for in-transit order\"},\n    {\"decision\":\"ADDRESS_CHANGE_DENIED\",\"order_id\":\"AS-10240\",\"reason\":\"Order already shipped; address cannot be changed.\"}\n  ],\n  \"reply\":\"Subject: Re: Delivery date and address change\\n\\nHi there,\\n\\nThanks for reaching out.\\n\\nDelivery update for AS-10240 (Galvanized Steel Raised Garden Bed 240 cm):\\n- Status: In transit with UPS\\n- Estimated delivery date: 2026-11-12\\n- Latest scan: 2026-11-08 in Columbus, OH\\n\\nRegarding changing the delivery address to 42 Oak Street, Dublin OH: Address changes are only possible while an order is still processing. Since this order has already shipped, we’re not able to update the destination address.\\n\\nIf you’d like, you can try contacting UPS to request a hold or intercept using your tracking number. Availability varies and we can’t guarantee success.\\n\\nIf there’s anything else you’d like us to check or if you want us to monitor for carrier updates, just reply to this email.\\n\\nBest regards,\\n[Your Company] Customer Care\"\n}",
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
     "order AS-10240",
     "delivery address change to 42 Oak Street, Dublin OH"
    ],
    "intents": [
     {
      "type": "SHIPPING_STATUS",
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
      "customer_demand": "provide_delivery_status_and_eta"
     },
     {
      "type": "ADDRESS_CHANGE",
      "order_id": "AS-10240",
      "sku": null,
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": "delivery_address",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "change_delivery_address"
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
   "reply": "Thanks for getting in touch; we understand you want to know when your garden bed AS-10240 will arrive and if we can move the delivery to a new address.\n\n- ETA: 2026-11-12 with UPS. Last scan: 2026-11-08 Columbus OH.\n- Address change request: denied — the order has already shipped with UPS.\n\nNext step: you will receive delivery updates by email. There is no change to the delivery address.",
   "trace": [
    {
     "id": "C19:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: moving.soon@example.com\nSubject: Delivery date and address change\nAttachments: none\n\nHi, when will my garden bed (AS-10240) arrive? Also, I'm moving next week - can you change the delivery address to 42 Oak Street, Dublin OH?\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"order AS-10240\",\n    \"delivery address change to 42 Oak Street, Dublin OH\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10240\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"provide_delivery_status_and_eta\"\n    },\n    {\n      \"type\": \"ADDRESS_CHANGE\",\n      \"order_id\": \"AS-10240\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"delivery_address\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"change_delivery_address\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C19:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"order AS-10240\",\n    \"delivery address change to 42 Oak Street, Dublin OH\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10240\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"provide_delivery_status_and_eta\"\n    },\n    {\n      \"type\": \"ADDRESS_CHANGE\",\n      \"order_id\": \"AS-10240\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"delivery_address\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"change_delivery_address\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"PROVIDE_ETA\",\n    \"carrier\": \"UPS\",\n    \"eta\": \"2026-11-12\",\n    \"last_scan\": \"2026-11-08 Columbus OH\"\n  },\n  {\n    \"intent\": \"ADDRESS_CHANGE\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"ADDRESS_CHANGE_DENIED\",\n    \"reason\": \"already_shipped\",\n    \"carrier\": \"UPS\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C19:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: moving.soon@example.com\nSubject: Delivery date and address change\nAttachments: none\n\nHi, when will my garden bed (AS-10240) arrive? Also, I'm moving next week - can you change the delivery address to 42 Oak Street, Dublin OH?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"PROVIDE_ETA\",\n    \"carrier\": \"UPS\",\n    \"eta\": \"2026-11-12\",\n    \"last_scan\": \"2026-11-08 Columbus OH\"\n  },\n  {\n    \"intent\": \"ADDRESS_CHANGE\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"ADDRESS_CHANGE_DENIED\",\n    \"reason\": \"already_shipped\",\n    \"carrier\": \"UPS\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Thanks for getting in touch; we understand you want to know when your garden bed AS-10240 will arrive and if we can move the delivery to a new address.\\n\\n- ETA: 2026-11-12 with UPS. Last scan: 2026-11-08 Columbus OH.\\n- Address change request: denied — the order has already shipped with UPS.\\n\\nNext step: you will receive delivery updates by email. There is no change to the delivery address.\"}",
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
     "reason": "Missing swing chair crossbar B2; parts in stock; reship."
    },
    {
     "decision": "CARRIER_INVESTIGATION",
     "order_id": "AS-10150",
     "reason": "Gazebo order in transit; ETA past carrier estimate; investigation opened."
    },
    {
     "decision": "ANSWER_QA",
     "order_id": null,
     "reason": "Canopy is water-resistant, not waterproof per product spec."
    }
   ],
   "reply": "Subject: Re: A few issues\\n\\nHi busy.owner,\\n\\nThank you for reaching out. I’ve confirmed the three items you mentioned:\\n\\n- Swing chair AS-10230: part B2 (the small crossbar) is missing. We will reship B2 to you. There is no action needed on your side; we’ll ship to the address on file. If you need it sent to a different address, please let us know.\\n- Gazebo AS-10150: it is currently in transit and the tracking shows it’s past the estimated delivery. We’ve opened a carrier investigation with FreightLine and will provide the latest ETA as soon as available.\\n- Swing chair canopy: per our product spec, the canopy is water-resistant, not waterproof. For heavy rain, please store cushions indoors. The frame is rust-resistant.\\n\\nWe’ll monitor these items and follow up with updates as they occur. If you have any other questions, let me know.\\n\\nBest regards,\\n[Your Name]\\nCustomer Support\\n[Brand]\"",
   "trace": [
    {
     "id": "C20:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: busy.owner@example.com\nSubject: A few issues\nAttachments: none\n\nHi team, a few things:\n1) My swing chair (AS-10230) arrived without part B2, the small crossbar.\n2) My gazebo order AS-10150 is late and tracking is stuck.\n3) Is the swing chair canopy waterproof? We get heavy rain.\nThanks.\n\"\"\"\n\nOrder records found:\n- AS-10230: {\"sku\":\"SW-01\",\"amount_usd\":279,\"order_date\":\"2026-10-28\",\"status\":\"delivered\",\"delivered\":\"2026-11-06\",\"country\":\"US\"}\n- AS-10150: {\"sku\":\"GZ-05\",\"amount_usd\":599,\"order_date\":\"2026-10-20\",\"status\":\"in_transit\",\"carrier\":\"FreightLine\",\"eta\":\"2026-11-04\",\"last_scan\":\"2026-10-30 Memphis hub\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\": [\n    {\n      \"decision\": \"RESHIP_PARTS\",\n      \"order_id\": \"AS-10230\",\n      \"reason\": \"Missing swing chair crossbar B2; parts in stock; reship.\"\n    },\n    {\n      \"decision\": \"CARRIER_INVESTIGATION\",\n      \"order_id\": \"AS-10150\",\n      \"reason\": \"Gazebo order in transit; ETA past carrier estimate; investigation opened.\"\n    },\n    {\n      \"decision\": \"ANSWER_QA\",\n      \"order_id\": null,\n      \"reason\": \"Canopy is water-resistant, not waterproof per product spec.\"\n    }\n  ],\n  \"reply\": \"Subject: Re: A few issues\\\\n\\\\nHi busy.owner,\\\\n\\\\nThank you for reaching out. I’ve confirmed the three items you mentioned:\\\\n\\\\n- Swing chair AS-10230: part B2 (the small crossbar) is missing. We will reship B2 to you. There is no action needed on your side; we’ll ship to the address on file. If you need it sent to a different address, please let us know.\\\\n- Gazebo AS-10150: it is currently in transit and the tracking shows it’s past the estimated delivery. We’ve opened a carrier investigation with FreightLine and will provide the latest ETA as soon as available.\\\\n- Swing chair canopy: per our product spec, the canopy is water-resistant, not waterproof. For heavy rain, please store cushions indoors. The frame is rust-resistant.\\\\n\\\\nWe’ll monitor these items and follow up with updates as they occur. If you have any other questions, let me know.\\\\n\\\\nBest regards,\\\\n[Your Name]\\\\nCustomer Support\\\\n[Brand]\\\"\"\n}",
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
     "My swing chair (AS-10230) arrived without part B2, the small crossbar.",
     "My gazebo order AS-10150 is late and tracking is stuck.",
     "Is the swing chair canopy waterproof?"
    ],
    "intents": [
     {
      "type": "MISSING_PARTS",
      "order_id": "AS-10230",
      "sku": null,
      "part_codes": [
       "B2"
      ],
      "severity": "UNKNOWN",
      "component": "swing chair crossbar (part B2)",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": null
     },
     {
      "type": "SHIPPING_STATUS",
      "order_id": "AS-10150",
      "sku": null,
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": "delivery/tracking status",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "update on shipping status; resolve late delivery; tracking info"
     },
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": null,
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": "swing chair canopy",
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
      "customer_demand": "Is the canopy waterproof?"
     }
    ]
   },
   "decisions": [
    "RESHIP_PARTS",
    "CARRIER_INVESTIGATION",
    "ASK_INFO"
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
     "decision": "ASK_INFO",
     "reason": "unknown_product",
     "ask": [
      "product name or link"
     ]
    }
   ],
   "reply": "Hi,\n\nI’m sorry you’re dealing with multiple issues. Here are the outcomes:\n\n- AS-10230: Part B2 will be reshipped; the tracking number will follow by email.\n- AS-10150: A carrier investigation has been opened; no new delivery date.\n- QA: Please provide the product name or link.\n\nNext step: please provide the product name or link for the QA item.\n\nCustomer Care Team",
   "trace": [
    {
     "id": "C20:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: busy.owner@example.com\nSubject: A few issues\nAttachments: none\n\nHi team, a few things:\n1) My swing chair (AS-10230) arrived without part B2, the small crossbar.\n2) My gazebo order AS-10150 is late and tracking is stuck.\n3) Is the swing chair canopy waterproof? We get heavy rain.\nThanks.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"My swing chair (AS-10230) arrived without part B2, the small crossbar.\",\n    \"My gazebo order AS-10150 is late and tracking is stuck.\",\n    \"Is the swing chair canopy waterproof?\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"MISSING_PARTS\",\n      \"order_id\": \"AS-10230\",\n      \"sku\": null,\n      \"part_codes\": [\"B2\"],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"swing chair crossbar (part B2)\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    },\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10150\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"delivery/tracking status\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"update on shipping status; resolve late delivery; tracking info\"\n    },\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"swing chair canopy\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\"WEATHER\"],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Is the canopy waterproof?\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C20:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"My swing chair (AS-10230) arrived without part B2, the small crossbar.\",\n    \"My gazebo order AS-10150 is late and tracking is stuck.\",\n    \"Is the swing chair canopy waterproof?\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"MISSING_PARTS\",\n      \"order_id\": \"AS-10230\",\n      \"sku\": null,\n      \"part_codes\": [\n        \"B2\"\n      ],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"swing chair crossbar (part B2)\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    },\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10150\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"delivery/tracking status\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"update on shipping status; resolve late delivery; tracking info\"\n    },\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"swing chair canopy\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"WEATHER\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"Is the canopy waterproof?\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10230\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"B2\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  },\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  },\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"unknown_product\",\n    \"ask\": [\n      \"product name or link\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C20:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: busy.owner@example.com\nSubject: A few issues\nAttachments: none\n\nHi team, a few things:\n1) My swing chair (AS-10230) arrived without part B2, the small crossbar.\n2) My gazebo order AS-10150 is late and tracking is stuck.\n3) Is the swing chair canopy waterproof? We get heavy rain.\nThanks.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10230\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"B2\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  },\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  },\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"unknown_product\",\n    \"ask\": [\n      \"product name or link\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hi,\\n\\nI’m sorry you’re dealing with multiple issues. Here are the outcomes:\\n\\n- AS-10230: Part B2 will be reshipped; the tracking number will follow by email.\\n- AS-10150: A carrier investigation has been opened; no new delivery date.\\n- QA: Please provide the product name or link.\\n\\nNext step: please provide the product name or link for the QA item.\\n\\nCustomer Care Team\"}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C20",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": false,
      "value": 0.5,
      "detail": "期望 RESHIP_PARTS + CARRIER_INVESTIGATION + ANSWER_QA；实际 RESHIP_PARTS + CARRIER_INVESTIGATION + ASK_INFO"
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
      "pass": false,
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
    "score": 0.7142857142857142,
    "pass": false,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C21",
   "decisions": [
    "HANDOFF"
   ],
   "detail": [
    {
     "decision": "HANDOFF",
     "order_id": "EB-58201",
     "reason": "Repeat structural defect on multiple units; damage reported >30 days after delivery; escalate to specialist"
    }
   ],
   "reply": "",
   "trace": [
    {
     "id": "C21:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: buyer-7f3a sent a message about Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: photo_1.jpg, photo_2.jpg\n\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n\n[Attachment descriptions, generated by the image step]\n- photo_1.jpg: Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.\n- photo_2.jpg: Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"HANDOFF\",\"order_id\":\"EB-58201\",\"reason\":\"Repeat structural defect on multiple units; damage reported >30 days after delivery; escalate to specialist\"}],\"reply\":\"\"}",
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
      "detail": "期望 QUALITY_ESCALATION；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": false,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "承认是重复问题",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出更换选项",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出全额退款选项",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "提醒动物安全",
      "pass": false,
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
    "score": 0.3,
    "pass": false,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C21",
   "facts": {
    "language": "en",
    "safety_risk": true,
    "animal_safety": true,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [],
    "customer_choice": null,
    "info_already_given": [
     "Two wooden rabbit Hutch cages (D51-105V01) with welded-wire mesh doors; photos show welds broken on front panel and left side wires bent; ferrets inside both cages",
     "Customer states mesh quality is poor/cheap and suggests using better mesh"
    ],
    "intents": [
     {
      "type": "DAMAGE",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "front welded-wire mesh door",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "better mesh in replacement"
     },
     {
      "type": "DAMAGE",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "front welded-wire mesh door",
      "repeat_issue": true,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "better mesh in replacement"
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
   "reply": "We’re sorry to hear about the welded-wire mesh issues and safety concerns with your wooden rabbit hutches.\n\nThe case has been handed off to a safety specialist; a specialist will contact you as soon as possible.\n\nNext step: A specialist will reach out to discuss how we proceed.\n\nThank you for contacting us.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C21:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: buyer-7f3a sent a message about Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: photo_1.jpg, photo_2.jpg\n\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n\n[Attachment descriptions, generated by the image step]\n- photo_1.jpg: Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.\n- photo_2.jpg: Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": true,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Two wooden rabbit Hutch cages (D51-105V01) with welded-wire mesh doors; photos show welds broken on front panel and left side wires bent; ferrets inside both cages\",\n    \"Customer states mesh quality is poor/cheap and suggests using better mesh\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"better mesh in replacement\"\n    },\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"better mesh in replacement\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C21:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": true,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Two wooden rabbit Hutch cages (D51-105V01) with welded-wire mesh doors; photos show welds broken on front panel and left side wires bent; ferrets inside both cages\",\n    \"Customer states mesh quality is poor/cheap and suggests using better mesh\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"better mesh in replacement\"\n    },\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"better mesh in replacement\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C21:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: buyer-7f3a sent a message about Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: photo_1.jpg, photo_2.jpg\n\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n\n[Attachment descriptions, generated by the image step]\n- photo_1.jpg: Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.\n- photo_2.jpg: Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"We’re sorry to hear about the welded-wire mesh issues and safety concerns with your wooden rabbit hutches.\\n\\nThe case has been handed off to a safety specialist; a specialist will contact you as soon as possible.\\n\\nNext step: A specialist will reach out to discuss how we proceed.\\n\\nThank you for contacting us.\\n\\nBest regards,\\nCustomer Care Team\"}",
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
      "detail": "期望 QUALITY_ESCALATION；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": false,
      "detail": "不应转人工"
     },
     {
      "key": "fact",
      "label": "承认是重复问题",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出更换选项",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出全额退款选项",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "提醒动物安全",
      "pass": false,
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
    "score": 0.3,
    "pass": false,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C22",
   "decisions": [
    "HANDOFF"
   ],
   "detail": [
    {
     "decision": "HANDOFF",
     "order_id": "EB-58201",
     "reason": "Repeat structural defect on second unit of D51-105V01; safety hazard; escalate to specialist."
    }
   ],
   "reply": "",
   "trace": [
    {
     "id": "C22:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- end of earlier messages ---\n\n[New customer message]\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\":[\n    {\n      \"decision\":\"HANDOFF\",\n      \"order_id\":\"EB-58201\",\n      \"reason\":\"Repeat structural defect on second unit of D51-105V01; safety hazard; escalate to specialist.\"\n    }\n  ],\n  \"reply\":\"\"\n}",
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
      "detail": "期望 QUALITY_ESCALATION；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": false,
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
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出全额退款选项",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "提醒动物安全",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "收回“自行修理”的要求",
      "pass": false,
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
    "score": 0.2727272727272727,
    "pass": false,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C22",
   "facts": {
    "language": "en",
    "safety_risk": true,
    "animal_safety": true,
    "dispute": false,
    "dispute_type": null,
    "previous_offers": [
     {
      "type": "PARTIAL_REFUND",
      "pct": 15,
      "units": 1,
      "status": "PENDING",
      "reject_reason": null
     }
    ],
    "customer_choice": null,
    "info_already_given": [
     "Front welded-wire mesh door of a wooden hutch has a broken weld; a ferret is inside.",
     "Front mesh door of a second, identical hutch has vertical wires detached from welds and bent; a ferret is inside.",
     "Customer purchased 3 cages."
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
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": null
     },
     {
      "type": "DEFECT_WARRANTY",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "left side vertical wires",
      "repeat_issue": true,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
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
   "reply": "Hello,\n\nSorry this has happened again and you’re concerned about safety.\n\nOutcome: The case has been handed to a specialist who will follow up and contact you as soon as possible.\n\nNext step: You will be contacted by a specialist as soon as possible.\n\nBest regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C22:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- end of earlier messages ---\n\n[New customer message]\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": true,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"PENDING\",\n      \"reject_reason\": null\n    }\n  ],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Front welded-wire mesh door of a wooden hutch has a broken weld; a ferret is inside.\",\n    \"Front mesh door of a second, identical hutch has vertical wires detached from welds and bent; a ferret is inside.\",\n    \"Customer purchased 3 cages.\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": null\n    },\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"left side vertical wires\",\n      \"repeat_issue\": true,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C22:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": true,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"PENDING\",\n      \"reject_reason\": null\n    }\n  ],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"Front welded-wire mesh door of a wooden hutch has a broken weld; a ferret is inside.\",\n    \"Front mesh door of a second, identical hutch has vertical wires detached from welds and bent; a ferret is inside.\",\n    \"Customer purchased 3 cages.\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": null\n    },\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"left side vertical wires\",\n      \"repeat_issue\": true,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C22:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- end of earlier messages ---\n\n[New customer message]\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Hello,\\n\\nSorry this has happened again and you’re concerned about safety.\\n\\nOutcome: The case has been handed to a specialist who will follow up and contact you as soon as possible.\\n\\nNext step: You will be contacted by a specialist as soon as possible.\\n\\nBest regards,\\nCustomer Care Team\"}",
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
      "detail": "期望 QUALITY_ESCALATION；实际 HANDOFF"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": false,
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
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出全额退款选项",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "提醒动物安全",
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "收回“自行修理”的要求",
      "pass": false,
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
    "score": 0.2727272727272727,
    "pass": false,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C23",
   "decisions": [
    "HANDOFF"
   ],
   "detail": [
    {
     "decision": "HANDOFF",
     "order_id": "EB-58201",
     "reason": "Repeat structural defect on same product (mesh weld failure across multiple cages); damage claim >30 days after delivery; escalation to a specialist required."
    }
   ],
   "reply": "",
   "trace": [
    {
     "id": "C23:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- end of earlier messages ---\n\n[New customer message]\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\":[{\"decision\":\"HANDOFF\",\"order_id\":\"EB-58201\",\"reason\":\"Repeat structural defect on same product (mesh weld failure across multiple cages); damage claim >30 days after delivery; escalation to a specialist required.\"}],\"reply\":\"\"}",
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
      "pass": false,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "给出更换选项",
      "pass": false,
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
      "pass": false,
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
      "pass": false,
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
    "score": 0.21818181818181817,
    "pass": false,
    "violations": 0
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
      "reject_reason": "customer rejected the offer"
     },
     {
      "type": "PARTIAL_REFUND",
      "pct": 30,
      "units": 1,
      "status": "PENDING",
      "reject_reason": null
     }
    ],
    "customer_choice": null,
    "info_already_given": [
     "2nd cage has broken welds on front welded-wire mesh door; a ferret is inside",
     "second cage has left-side wires detached from welds; a ferret is inside",
     "purchased 3 cages total",
     "metal trays have rusted"
    ],
    "intents": [
     {
      "type": "DAMAGE",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "front welded-wire mesh door",
      "repeat_issue": true,
      "units_affected": 1,
      "item_condition": "USED",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": null
     },
     {
      "type": "DEFECT_WARRANTY",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "metal trays",
      "repeat_issue": true,
      "units_affected": 3,
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
    "QUALITY_ESCALATION",
    "QUALITY_ESCALATION"
   ],
   "detail": [
    {
     "intent": "DAMAGE",
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
      "PARTIAL_REFUND 15% (customer rejected the offer)"
     ],
     "priority": true
    },
    {
     "intent": "DEFECT_WARRANTY",
     "order_id": "EB-58201",
     "decision": "QUALITY_ESCALATION",
     "sku": "D51-105V01",
     "product": "Wooden Rabbit Hutch with Hinged Top",
     "component": "metal trays",
     "units_affected": 3,
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
      "PARTIAL_REFUND 15% (customer rejected the offer)"
     ],
     "priority": true
    }
   ],
   "reply": "I'm sorry to hear this issue has affected your second cage and the rust on the trays.\n\nMesh door issue (front welded-wire mesh door): Replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives). Full refund.\n\nMetal trays issue (defect warranty): Replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives). Full refund.\n\nCorrections: You do not need to repair it yourself; please disregard that earlier suggestion.\n\nSafety notice: For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nNext step: Please reply with which option you prefer for each item. We will proceed accordingly once you confirm.\n\nCustomer Care Team",
   "trace": [
    {
     "id": "C23:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- end of earlier messages ---\n\n[New customer message]\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"customer rejected the offer\"\n    },\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 30,\n      \"units\": 1,\n      \"status\": \"PENDING\",\n      \"reject_reason\": null\n    }\n  ],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"2nd cage has broken welds on front welded-wire mesh door; a ferret is inside\",\n    \"second cage has left-side wires detached from welds; a ferret is inside\",\n    \"purchased 3 cages total\",\n    \"metal trays have rusted\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": null\n    },\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"metal trays\",\n      \"repeat_issue\": true,\n      \"units_affected\": 3,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C23:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"customer rejected the offer\"\n    },\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 30,\n      \"units\": 1,\n      \"status\": \"PENDING\",\n      \"reject_reason\": null\n    }\n  ],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"2nd cage has broken welds on front welded-wire mesh door; a ferret is inside\",\n    \"second cage has left-side wires detached from welds; a ferret is inside\",\n    \"purchased 3 cages total\",\n    \"metal trays have rusted\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": null\n    },\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"metal trays\",\n      \"repeat_issue\": true,\n      \"units_affected\": 3,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DAMAGE\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front welded-wire mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"internal_log\": {\n      \"sku\": \"D51-105V01\",\n      \"defect\": \"repeat structural failure\",\n      \"orders\": [\n        \"EB-58201\"\n      ]\n    },\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (customer rejected the offer)\"\n    ],\n    \"priority\": true\n  },\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"metal trays\",\n    \"units_affected\": 3,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"internal_log\": {\n      \"sku\": \"D51-105V01\",\n      \"defect\": \"repeat structural failure\",\n      \"orders\": [\n        \"EB-58201\"\n      ]\n    },\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (customer rejected the offer)\"\n    ],\n    \"priority\": true\n  }\n]",
     "ms": 0
    },
    {
     "id": "C23:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- end of earlier messages ---\n\n[New customer message]\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DAMAGE\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front welded-wire mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (customer rejected the offer)\"\n    ],\n    \"priority\": true\n  },\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"metal trays\",\n    \"units_affected\": 3,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (customer rejected the offer)\"\n    ],\n    \"priority\": true\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"I'm sorry to hear this issue has affected your second cage and the rust on the trays.\\n\\nMesh door issue (front welded-wire mesh door): Replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives). Full refund.\\n\\nMetal trays issue (defect warranty): Replacement, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives). Full refund.\\n\\nCorrections: You do not need to repair it yourself; please disregard that earlier suggestion.\\n\\nSafety notice: For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nNext step: Please reply with which option you prefer for each item. We will proceed accordingly once you confirm.\\n\\nCustomer Care Team\"}",
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
      "value": 0.5,
      "detail": "期望 QUALITY_ESCALATION + ASK_INFO；实际 QUALITY_ESCALATION"
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
      "pass": false,
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
    "score": 0.7454545454545454,
    "pass": false,
    "violations": 0
   }
  },
  {
   "mode": "baseline",
   "caseId": "C24",
   "decisions": [
    "OFFER_REPLACEMENT_OR_REFUND"
   ],
   "detail": [
    {
     "decision": "OFFER_REPLACEMENT_OR_REFUND",
     "order_id": "EB-58201",
     "reason": "Repeat structural defect (mesh weld failure) across multiple units; prior case exists TK-UK-20260929-000731; customer requests replacement of all 3."
    }
   ],
   "reply": "Hello,\n\nI’m really sorry to hear that all three D51-105V01 wooden rabbit hutches are presenting issues, and I understand your frustration after investing in three cages. I can confirm this is a repeat structural defect affecting multiple units from order EB-58201 (the prior case TK-UK-20260929-000731).\n\nWe will replace all three cages for you.\n\nImportant note for animal enclosures: replacements are shipped first. You do not need to dismantle or return the old cages, and the new units will be sent to you prior to any collection of the originals. You will receive tracking information as soon as the replacements are dispatched.\n\nIf you would prefer a full refund instead of replacements, we can arrange that for the entire order amount of 258 USD.\n\nPlease confirm that you’d like us to proceed with the three replacements (or let us know if you’d prefer the refund option). We’ll act immediately once you confirm.\n\nThank you for your patience and understanding.\n\nBest regards,\n[Customer Support Team]",
   "trace": [
    {
     "id": "C24:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a human agent as a priority and do NOT send an automatic reply (leave the reply empty); the human agent takes over the conversation.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Record the defect internally against the SKU and offer the customer a replacement or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n19. Do not describe internal processes in replies: no mention of quality teams, defect logging, checking with product or development teams, production batches or quality checks. Do not promise anything we cannot guarantee (e.g. a different batch). Tell the customer only what will happen for them.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer, or an empty string if the policy says not to send an automatic reply>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- 5. Customer ---\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n--- 6. Agent (sent) ---\nDear Customer,\n\nThanks for your message. We are sorry for the inconvenience caused.\n\nConsidering the situation of your item, as we do not want to inconvenience you any further, we would like to send out a full replacement of one item for you without the collection of original item. Please note, delivery can take 3-5 working days to arrive from date of input.\n\nIn order for us to proceed, please respond to this message confirming your acceptance of the above.\n\nKind regards,\n[Agent C]\n--- end of earlier messages ---\n\n[New customer message]\nAll 3 cages have all got something wrong with them thank u for the offer of 1 but we need all 3 replacement this isn't good enough I shouldn't have to be sending all these messages I will be going.to ebay them.self if this doesn't get sorted ASAP\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\n  \"decisions\": [\n    {\n      \"decision\": \"OFFER_REPLACEMENT_OR_REFUND\",\n      \"order_id\": \"EB-58201\",\n      \"reason\": \"Repeat structural defect (mesh weld failure) across multiple units; prior case exists TK-UK-20260929-000731; customer requests replacement of all 3.\"\n    }\n    ],\n  \"reply\": \"Hello,\\n\\nI’m really sorry to hear that all three D51-105V01 wooden rabbit hutches are presenting issues, and I understand your frustration after investing in three cages. I can confirm this is a repeat structural defect affecting multiple units from order EB-58201 (the prior case TK-UK-20260929-000731).\\n\\nWe will replace all three cages for you.\\n\\nImportant note for animal enclosures: replacements are shipped first. You do not need to dismantle or return the old cages, and the new units will be sent to you prior to any collection of the originals. You will receive tracking information as soon as the replacements are dispatched.\\n\\nIf you would prefer a full refund instead of replacements, we can arrange that for the entire order amount of 258 USD.\\n\\nPlease confirm that you’d like us to proceed with the three replacements (or let us know if you’d prefer the refund option). We’ll act immediately once you confirm.\\n\\nThank you for your patience and understanding.\\n\\nBest regards,\\n[Customer Support Team]\"\n}",
     "ms": 0
    }
   ],
   "score": {
    "caseId": "C24",
    "checks": [
     {
      "key": "decision",
      "label": "决策正确",
      "pass": false,
      "value": 0,
      "detail": "期望 HANDOFF；实际 OFFER_REPLACEMENT_OR_REFUND"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": false,
      "detail": "应转人工"
     },
     {
      "key": "fact",
      "label": "不自动回复（直接转人工）",
      "pass": false,
      "detail": "生成了自动回复"
     }
    ],
    "score": 0,
    "pass": false,
    "violations": 0
   }
  },
  {
   "mode": "skill",
   "caseId": "C24",
   "facts": {
    "language": "en",
    "safety_risk": true,
    "animal_safety": true,
    "dispute": true,
    "dispute_type": "MARKETPLACE_CASE",
    "previous_offers": [
     {
      "type": "PARTIAL_REFUND",
      "pct": 15,
      "units": null,
      "status": "REJECTED",
      "reject_reason": "Customer rejected 15% partial refund as insufficient"
     },
     {
      "type": "PARTIAL_REFUND",
      "pct": 30,
      "units": null,
      "status": "REJECTED",
      "reject_reason": "Customer rejected 30% partial refund option"
     },
     {
      "type": "REPLACEMENT_WITH_COLLECTION",
      "pct": null,
      "units": null,
      "status": "REJECTED",
      "reject_reason": "Customer rejected collection + replacement due to logistical concerns"
     },
     {
      "type": "REPLACEMENT_NO_RETURN",
      "pct": null,
      "units": null,
      "status": "PENDING",
      "reject_reason": null
     }
    ],
    "customer_choice": "REPLACEMENT",
    "info_already_given": [
     "All 3 cages have issues",
     "Two cages have broken welds on front welded-wire mesh doors; one with a broken weld, another with bent vertical wires",
     "Ferret is inside the cages in the photos",
     "Rust on metal trays"
    ],
    "intents": [
     {
      "type": "DAMAGE",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [
       "MESH_FRONT_DOOR"
      ],
      "severity": "STRUCTURAL",
      "component": "front welded-wire mesh door",
      "repeat_issue": true,
      "units_affected": 2,
      "item_condition": "UNKNOWN",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": true,
      "has_video": false,
      "customer_demand": "REPLACEMENT"
     },
     {
      "type": "DAMAGE",
      "order_id": null,
      "sku": "D51-105V01",
      "part_codes": [
       "METAL_TRAY"
      ],
      "severity": "STRUCTURAL",
      "component": "metal trays",
      "repeat_issue": true,
      "units_affected": 3,
      "item_condition": "UNKNOWN",
      "reason": "DEFECT",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "REPLACEMENT"
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
   "reply": "Dear Customer,\n\nI’m sorry to hear that all three cages have safety issues.\n\nOutcome: The case has been passed to a specialist who will follow up; a specialist will contact you as soon as possible.\n\nNext step: A specialist will be in touch shortly to assist you.\n\nWe apologise sincerely for the trouble this has caused.\n\nCustomer Care Team",
   "trace": [
    {
     "id": "C24:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- 5. Customer ---\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n--- 6. Agent (sent) ---\nDear Customer,\n\nThanks for your message. We are sorry for the inconvenience caused.\n\nConsidering the situation of your item, as we do not want to inconvenience you any further, we would like to send out a full replacement of one item for you without the collection of original item. Please note, delivery can take 3-5 working days to arrive from date of input.\n\nIn order for us to proceed, please respond to this message confirming your acceptance of the above.\n\nKind regards,\n[Agent C]\n--- end of earlier messages ---\n\n[New customer message]\nAll 3 cages have all got something wrong with them thank u for the offer of 1 but we need all 3 replacement this isn't good enough I shouldn't have to be sending all these messages I will be going.to ebay them.self if this doesn't get sorted ASAP\n\"\"\"",
     "response": "{\n  \"language\": \"en\",\n  \"safety_risk\": true,\n  \"animal_safety\": true,\n  \"dispute\": true,\n  \"dispute_type\": \"MARKETPLACE_CASE\",\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": null,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer rejected 15% partial refund as insufficient\"\n    },\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 30,\n      \"units\": null,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer rejected 30% partial refund option\"\n    },\n    {\n      \"type\": \"REPLACEMENT_WITH_COLLECTION\",\n      \"pct\": null,\n      \"units\": null,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer rejected collection + replacement due to logistical concerns\"\n    },\n    {\n      \"type\": \"REPLACEMENT_NO_RETURN\",\n      \"pct\": null,\n      \"units\": null,\n      \"status\": \"PENDING\",\n      \"reject_reason\": null\n    }\n  ],\n  \"customer_choice\": \"REPLACEMENT\",\n  \"info_already_given\": [\n    \"All 3 cages have issues\",\n    \"Two cages have broken welds on front welded-wire mesh doors; one with a broken weld, another with bent vertical wires\",\n    \"Ferret is inside the cages in the photos\",\n    \"Rust on metal trays\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [\"MESH_FRONT_DOOR\"],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"REPLACEMENT\"\n    },\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [\"METAL_TRAY\"],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"metal trays\",\n      \"repeat_issue\": true,\n      \"units_affected\": 3,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"REPLACEMENT\"\n    }\n  ]\n}",
     "ms": 0
    },
    {
     "id": "C24:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": true,\n  \"animal_safety\": true,\n  \"dispute\": true,\n  \"dispute_type\": \"MARKETPLACE_CASE\",\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": null,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer rejected 15% partial refund as insufficient\"\n    },\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 30,\n      \"units\": null,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer rejected 30% partial refund option\"\n    },\n    {\n      \"type\": \"REPLACEMENT_WITH_COLLECTION\",\n      \"pct\": null,\n      \"units\": null,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"Customer rejected collection + replacement due to logistical concerns\"\n    },\n    {\n      \"type\": \"REPLACEMENT_NO_RETURN\",\n      \"pct\": null,\n      \"units\": null,\n      \"status\": \"PENDING\",\n      \"reject_reason\": null\n    }\n  ],\n  \"customer_choice\": \"REPLACEMENT\",\n  \"info_already_given\": [\n    \"All 3 cages have issues\",\n    \"Two cages have broken welds on front welded-wire mesh doors; one with a broken weld, another with bent vertical wires\",\n    \"Ferret is inside the cages in the photos\",\n    \"Rust on metal trays\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [\n        \"MESH_FRONT_DOOR\"\n      ],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front welded-wire mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"REPLACEMENT\"\n    },\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [\n        \"METAL_TRAY\"\n      ],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"metal trays\",\n      \"repeat_issue\": true,\n      \"units_affected\": 3,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"REPLACEMENT\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C24:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\nDo not describe internal processes (quality team, defect logging, checking with product or development teams, production batches, quality checks); tell the customer only what will happen for them.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component) and apologize. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will check and get back to them; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- 5. Customer ---\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n--- 6. Agent (sent) ---\nDear Customer,\n\nThanks for your message. We are sorry for the inconvenience caused.\n\nConsidering the situation of your item, as we do not want to inconvenience you any further, we would like to send out a full replacement of one item for you without the collection of original item. Please note, delivery can take 3-5 working days to arrive from date of input.\n\nIn order for us to proceed, please respond to this message confirming your acceptance of the above.\n\nKind regards,\n[Agent C]\n--- end of earlier messages ---\n\n[New customer message]\nAll 3 cages have all got something wrong with them thank u for the offer of 1 but we need all 3 replacement this isn't good enough I shouldn't have to be sending all these messages I will be going.to ebay them.self if this doesn't get sorted ASAP\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]\n</decisions>",
     "response": "{\"reply\":\"Dear Customer,\\n\\nI’m sorry to hear that all three cages have safety issues.\\n\\nOutcome: The case has been passed to a specialist who will follow up; a specialist will contact you as soon as possible.\\n\\nNext step: A specialist will be in touch shortly to assist you.\\n\\nWe apologise sincerely for the trouble this has caused.\\n\\nCustomer Care Team\"}",
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
      "pass": false,
      "detail": "生成了自动回复"
     }
    ],
    "score": 0.7,
    "pass": false,
    "violations": 0
   }
  }
 ]
};
