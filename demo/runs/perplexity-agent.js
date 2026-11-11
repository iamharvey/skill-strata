export default {
 "meta": {
  "provider": "perplexity-agent",
  "model": "Perplexity Computer agent",
  "label": "Perplexity Agent 运行 v4 · 2026-11-11（24 例，多轮改进）",
  "note": "【v4 Skill 的结果，页面按当前（v5）评分标准重新计分：C03/C24 应直接转人工不回复、回复不得提及质量团队等内部流程，因此分数低于当时记录】由 Perplexity Computer 子 agent 充当模型、单次运行；C22–C24 的新增检查项与 Skill 修改均在看到 v3 结果后做出，这 3 例不再是独立证据；C03 评分器“承诺退款”规则误报（把“已记录您的退款请求”判为承诺）已修正，两种模式同样适用。",
  "created": "2026-11-11T09:13:59.794Z",
  "cases": 24
 },
 "summary": {
  "baseline": {
   "n": 24,
   "score": 0.9891666666666667,
   "fullPass": 22,
   "decision": 0.9583333333333334,
   "handoff": 1,
   "fact": 0.96875,
   "lang": 1,
   "violations": 0,
   "byCategory": {
    "售后": 1,
    "退换货": 1,
    "QA": 1,
    "物流": 1,
    "综合": 1,
    "多轮": 0.9133333333333334
   }
  },
  "skill": {
   "n": 24,
   "score": 0.9833333333333334,
   "fullPass": 23,
   "decision": 0.9583333333333334,
   "handoff": 1,
   "fact": 1,
   "lang": 1,
   "violations": 0,
   "byCategory": {
    "售后": 1,
    "退换货": 1,
    "QA": 0.9199999999999999,
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
     "reason": "Part C4 missing, reported within 30 days of delivery; C4 in stock"
    }
   ],
   "reply": "Hi Megan,\n\nThank you for contacting us, and sorry that part C4 (the curved side bar) was missing from your swing chair box for order AS-10023.\n\nPart C4 is in stock, so we will reship it to you free of charge. You will receive tracking details once it has been dispatched.\n\nIf you notice anything else missing during assembly, please let us know the part code from the manual.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C01:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: megan.r@example.com\nSubject: Missing part in my swing chair box\nAttachments: none\n\nHi, order AS-10023. I started assembling the swing chair this weekend and part C4 (the curved side bar on page 3 of the manual) is not in the box. Everything else seems fine. Can you help?\n\"\"\"\n\nOrder records found:\n- AS-10023: {\"sku\":\"SW-01\",\"amount_usd\":189,\"order_date\":\"2026-10-22\",\"status\":\"delivered\",\"delivered\":\"2026-11-01\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"RESHIP_PARTS\", \"order_id\": \"AS-10023\", \"reason\": \"Part C4 missing, reported within 30 days of delivery; C4 in stock\"}], \"reply\": \"Hi Megan,\\n\\nThank you for contacting us, and sorry that part C4 (the curved side bar) was missing from your swing chair box for order AS-10023.\\n\\nPart C4 is in stock, so we will reship it to you free of charge. You will receive tracking details once it has been dispatched.\\n\\nIf you notice anything else missing during assembly, please let us know the part code from the manual.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "part C4 missing",
     "everything else fine"
    ],
    "intents": [
     {
      "type": "MISSING_PARTS",
      "order_id": "AS-10023",
      "sku": "SW-01",
      "part_codes": [
       "C4"
      ],
      "severity": null,
      "component": "curved side bar (C4)",
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNASSEMBLED",
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
   "reply": "Dear Megan,\n\nI'm sorry that part C4 (the curved side bar) was missing from your 3-Seat Patio Swing Chair, order AS-10023.\n\nWe will reship the missing part C4 to you free of charge.\n\nYou will receive the tracking number by email as soon as it has been dispatched.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C01:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: megan.r@example.com\nSubject: Missing part in my swing chair box\nAttachments: none\n\nHi, order AS-10023. I started assembling the swing chair this weekend and part C4 (the curved side bar on page 3 of the manual) is not in the box. Everything else seems fine. Can you help?\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"part C4 missing\", \"everything else fine\"], \"intents\": [{\"type\": \"MISSING_PARTS\", \"order_id\": \"AS-10023\", \"sku\": \"SW-01\", \"part_codes\": [\"C4\"], \"severity\": null, \"component\": \"curved side bar (C4)\", \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNASSEMBLED\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": \"send missing part C4\"}]}",
     "ms": 0
    },
    {
     "id": "C01:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"part C4 missing\",\n    \"everything else fine\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"MISSING_PARTS\",\n      \"order_id\": \"AS-10023\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [\n        \"C4\"\n      ],\n      \"severity\": null,\n      \"component\": \"curved side bar (C4)\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNASSEMBLED\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"send missing part C4\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10023\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"C4\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C01:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: megan.r@example.com\nSubject: Missing part in my swing chair box\nAttachments: none\n\nHi, order AS-10023. I started assembling the swing chair this weekend and part C4 (the curved side bar on page 3 of the manual) is not in the box. Everything else seems fine. Can you help?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10023\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"C4\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Megan,\\n\\nI'm sorry that part C4 (the curved side bar) was missing from your 3-Seat Patio Swing Chair, order AS-10023.\\n\\nWe will reship the missing part C4 to you free of charge.\\n\\nYou will receive the tracking number by email as soon as it has been dispatched.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Cosmetic scratches on tabletop with photos; policy allows replacement part or 15% partial refund only, not 50%"
    }
   ],
   "reply": "Hello,\n\nThank you for your email and the photos. I'm sorry your acacia table (order AS-10088) arrived with scratches across the top - I understand that's disappointing for a new table, even though it is still usable.\n\nAs this is cosmetic damage that doesn't affect use, we can offer you one of the following:\n1. A replacement tabletop sent to you, or\n2. A 15% partial refund on the order.\n\nI'm afraid we are not able to offer a 50% refund. Please reply with the option you prefer and we will arrange it right away.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C02:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: d.kowalski@example.com\nSubject: Scratched table top - want 50% back\nAttachments: tabletop_1.jpg, tabletop_2.jpg\n\nOrder AS-10088. The acacia table arrived with several scratches across the top, photos attached. It's usable but it looks bad for a new table. I think a 50% refund is fair, otherwise I want to send it back.\n\"\"\"\n\nOrder records found:\n- AS-10088: {\"sku\":\"PT-02\",\"amount_usd\":129,\"order_date\":\"2026-10-25\",\"status\":\"delivered\",\"delivered\":\"2026-11-03\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"OFFER_PARTS_OR_PARTIAL_REFUND\", \"order_id\": \"AS-10088\", \"reason\": \"Cosmetic scratches on tabletop with photos; policy allows replacement part or 15% partial refund only, not 50%\"}], \"reply\": \"Hello,\\n\\nThank you for your email and the photos. I'm sorry your acacia table (order AS-10088) arrived with scratches across the top - I understand that's disappointing for a new table, even though it is still usable.\\n\\nAs this is cosmetic damage that doesn't affect use, we can offer you one of the following:\\n1. A replacement tabletop sent to you, or\\n2. A 15% partial refund on the order.\\n\\nI'm afraid we are not able to offer a 50% refund. Please reply with the option you prefer and we will arrange it right away.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "several scratches across the table top",
     "table is usable"
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
      "customer_demand": "50% refund, otherwise return"
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
   "reply": "Dear Customer,\n\nI'm sorry your acacia table (order AS-10088) arrived with scratches on the top, and thank you for the photos.\n\nI understand you suggested a 50% refund; the options available for this issue are:\n- Option 1: a replacement part\n- Option 2: a 15% partial refund\n\nPlease reply and let us know which option you prefer, and we will arrange it straight away.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C02:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: d.kowalski@example.com\nSubject: Scratched table top - want 50% back\nAttachments: tabletop_1.jpg, tabletop_2.jpg\n\nOrder AS-10088. The acacia table arrived with several scratches across the top, photos attached. It's usable but it looks bad for a new table. I think a 50% refund is fair, otherwise I want to send it back.\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": \"PARTIAL_REFUND\", \"info_already_given\": [\"several scratches across the table top\", \"table is usable\"], \"intents\": [{\"type\": \"DAMAGE\", \"order_id\": \"AS-10088\", \"sku\": \"PT-02\", \"part_codes\": [], \"severity\": \"COSMETIC\", \"component\": \"table top\", \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"DEFECT\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": true, \"has_video\": false, \"customer_demand\": \"50% refund, otherwise return\"}]}",
     "ms": 0
    },
    {
     "id": "C02:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"PARTIAL_REFUND\",\n  \"info_already_given\": [\n    \"several scratches across the table top\",\n    \"table is usable\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": \"AS-10088\",\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": \"COSMETIC\",\n      \"component\": \"table top\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"50% refund, otherwise return\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DAMAGE\",\n    \"order_id\": \"AS-10088\",\n    \"decision\": \"OFFER_PARTS_OR_PARTIAL_REFUND\",\n    \"options\": [\n      \"replacement part\",\n      \"15% partial refund\"\n    ],\n    \"allowed_pct\": [\n      15\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C02:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: d.kowalski@example.com\nSubject: Scratched table top - want 50% back\nAttachments: tabletop_1.jpg, tabletop_2.jpg\n\nOrder AS-10088. The acacia table arrived with several scratches across the top, photos attached. It's usable but it looks bad for a new table. I think a 50% refund is fair, otherwise I want to send it back.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DAMAGE\",\n    \"order_id\": \"AS-10088\",\n    \"decision\": \"OFFER_PARTS_OR_PARTIAL_REFUND\",\n    \"options\": [\n      \"replacement part\",\n      \"15% partial refund\"\n    ],\n    \"allowed_pct\": [\n      15\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nI'm sorry your acacia table (order AS-10088) arrived with scratches on the top, and thank you for the photos.\\n\\nI understand you suggested a 50% refund; the options available for this issue are:\\n- Option 1: a replacement part\\n- Option 2: a 15% partial refund\\n\\nPlease reply and let us know which option you prefer, and we will arrange it straight away.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Structural damage (snapped frame leg) on order over 300 USD requires specialist approval; chargeback threat - priority handoff"
    }
   ],
   "reply": "Hello,\n\nThank you for your email and the photo. I'm very sorry that one of the main frame legs of your swing chair (order AS-10101) snapped during assembly - I understand how frustrating this is.\n\nI have noted that you are requesting a full refund. Because of the nature of the damage, your case needs to be reviewed by a specialist, and I have passed it to our specialist team as a priority with your photo and your refund request.\n\nFor your safety, please do not continue assembling or use the swing chair.\n\nA specialist will contact you regarding the next steps.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C03:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: jlarson@example.com\nSubject: URGENT broken frame - refund TODAY\nAttachments: leg_snapped.jpg\n\nOrder AS-10101. While assembling, one of the main frame legs snapped clean in half (photo attached). This is unacceptable. I want a full refund today or I will open a chargeback with my credit card company tomorrow.\n\"\"\"\n\nOrder records found:\n- AS-10101: {\"sku\":\"SW-01\",\"amount_usd\":459,\"order_date\":\"2026-10-26\",\"status\":\"delivered\",\"delivered\":\"2026-11-05\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"HANDOFF\", \"order_id\": \"AS-10101\", \"reason\": \"Structural damage (snapped frame leg) on order over 300 USD requires specialist approval; chargeback threat - priority handoff\"}], \"reply\": \"Hello,\\n\\nThank you for your email and the photo. I'm very sorry that one of the main frame legs of your swing chair (order AS-10101) snapped during assembly - I understand how frustrating this is.\\n\\nI have noted that you are requesting a full refund. Because of the nature of the damage, your case needs to be reviewed by a specialist, and I have passed it to our specialist team as a priority with your photo and your refund request.\\n\\nFor your safety, please do not continue assembling or use the swing chair.\\n\\nA specialist will contact you regarding the next steps.\\n\\nKind regards,\\nCustomer Service\"}",
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
      "key": "claim",
      "label": "不得承诺已退款/全额退款",
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
     "main frame leg snapped in half during assembly"
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
      "customer_demand": "full refund today"
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
   "reply": "Dear Customer,\n\nI'm very sorry that one of the main frame legs snapped during assembly of your order AS-10101 - I understand how frustrating this is.\n\nI have noted your request for a full refund today and the photo of the broken frame leg (1 unit). Your case has been passed to a specialist as a priority, and they will contact you directly.\n\nThank you for your patience.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C03:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: jlarson@example.com\nSubject: URGENT broken frame - refund TODAY\nAttachments: leg_snapped.jpg\n\nOrder AS-10101. While assembling, one of the main frame legs snapped clean in half (photo attached). This is unacceptable. I want a full refund today or I will open a chargeback with my credit card company tomorrow.\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": true, \"dispute_type\": \"CHARGEBACK\", \"previous_offers\": [], \"customer_choice\": \"FULL_REFUND\", \"info_already_given\": [\"main frame leg snapped in half during assembly\"], \"intents\": [{\"type\": \"DAMAGE\", \"order_id\": \"AS-10101\", \"sku\": null, \"part_codes\": [], \"severity\": \"STRUCTURAL\", \"component\": \"main frame leg\", \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNASSEMBLED\", \"reason\": \"DEFECT\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": true, \"has_video\": false, \"customer_demand\": \"full refund today\"}]}",
     "ms": 0
    },
    {
     "id": "C03:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": true,\n  \"dispute_type\": \"CHARGEBACK\",\n  \"previous_offers\": [],\n  \"customer_choice\": \"FULL_REFUND\",\n  \"info_already_given\": [\n    \"main frame leg snapped in half during assembly\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DAMAGE\",\n      \"order_id\": \"AS-10101\",\n      \"sku\": null,\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"main frame leg\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNASSEMBLED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"full refund today\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DISPUTE\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"chargeback_or_dispute\",\n    \"dispute_type\": \"CHARGEBACK\",\n    \"priority\": false,\n    \"contact_count\": 1,\n    \"customer_requests\": [\n      \"full_refund\",\n      \"full refund today\"\n    ],\n    \"case_facts\": [\n      \"1 unit(s): main frame leg\"\n    ],\n    \"for_specialist\": [\n      {\n        \"intent\": \"DAMAGE\",\n        \"order_id\": \"AS-10101\",\n        \"decision\": \"HANDOFF\",\n        \"reason\": \"needs_approval\"\n      }\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C03:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: jlarson@example.com\nSubject: URGENT broken frame - refund TODAY\nAttachments: leg_snapped.jpg\n\nOrder AS-10101. While assembling, one of the main frame legs snapped clean in half (photo attached). This is unacceptable. I want a full refund today or I will open a chargeback with my credit card company tomorrow.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DISPUTE\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"chargeback_or_dispute\",\n    \"dispute_type\": \"CHARGEBACK\",\n    \"priority\": false,\n    \"contact_count\": 1,\n    \"customer_requests\": [\n      \"full_refund\",\n      \"full refund today\"\n    ],\n    \"case_facts\": [\n      \"1 unit(s): main frame leg\"\n    ],\n    \"for_specialist\": [\n      {\n        \"intent\": \"DAMAGE\",\n        \"order_id\": \"AS-10101\",\n        \"decision\": \"HANDOFF\",\n        \"reason\": \"needs_approval\"\n      }\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nI'm very sorry that one of the main frame legs snapped during assembly of your order AS-10101 - I understand how frustrating this is.\\n\\nI have noted your request for a full refund today and the photo of the broken frame leg (1 unit). Your case has been passed to a specialist as a priority, and they will contact you directly.\\n\\nThank you for your patience.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
      "key": "claim",
      "label": "不得承诺已退款/全额退款",
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
   "caseId": "C04",
   "decisions": [
    "HANDOFF"
   ],
   "detail": [
    {
     "decision": "HANDOFF",
     "order_id": null,
     "reason": "Injury reported and lawyer mentioned - immediate handoff to specialist"
    }
   ],
   "reply": "Dear Customer,\n\nI am truly sorry to hear that your son was hurt and that you spent the evening in the emergency room. I hope he is feeling better.\n\nI have passed your message to a specialist on our team as a matter of priority, and they will contact you directly.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C04:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: concerned.parent@example.com\nSubject: Your bench collapsed and hurt my son\nAttachments: none\n\nThe swing bench we bought from you collapsed yesterday while my son was sitting on it. He hurt his wrist and we spent the evening in the ER. I have contacted a lawyer. I don't have the order number handy right now.\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"HANDOFF\", \"order_id\": null, \"reason\": \"Injury reported and lawyer mentioned - immediate handoff to specialist\"}], \"reply\": \"Dear Customer,\\n\\nI am truly sorry to hear that your son was hurt and that you spent the evening in the emergency room. I hope he is feeling better.\\n\\nI have passed your message to a specialist on our team as a matter of priority, and they will contact you directly.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "bench collapsed while son sat on it",
     "son hurt wrist, went to ER",
     "contacted a lawyer"
    ],
    "intents": [
     {
      "type": "DEFECT_WARRANTY",
      "order_id": null,
      "sku": "SW-01",
      "part_codes": [],
      "severity": "STRUCTURAL",
      "component": "swing bench frame",
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
   "reply": "Dear Customer,\n\nI am truly sorry to hear that your son was hurt and that you had to spend the evening in the ER. I hope he is feeling better.\n\nWe take this very seriously. Your case has been passed to a specialist, who will contact you as soon as possible.\n\nThank you for letting us know.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C04:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: concerned.parent@example.com\nSubject: Your bench collapsed and hurt my son\nAttachments: none\n\nThe swing bench we bought from you collapsed yesterday while my son was sitting on it. He hurt his wrist and we spent the evening in the ER. I have contacted a lawyer. I don't have the order number handy right now.\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": true, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"bench collapsed while son sat on it\", \"son hurt wrist, went to ER\", \"contacted a lawyer\"], \"intents\": [{\"type\": \"DEFECT_WARRANTY\", \"order_id\": null, \"sku\": \"SW-01\", \"part_codes\": [], \"severity\": \"STRUCTURAL\", \"component\": \"swing bench frame\", \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"USED\", \"reason\": \"DEFECT\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}]}",
     "ms": 0
    },
    {
     "id": "C04:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": true,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"bench collapsed while son sat on it\",\n    \"son hurt wrist, went to ER\",\n    \"contacted a lawyer\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"swing bench frame\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C04:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: concerned.parent@example.com\nSubject: Your bench collapsed and hurt my son\nAttachments: none\n\nThe swing bench we bought from you collapsed yesterday while my son was sitting on it. He hurt his wrist and we spent the evening in the ER. I have contacted a lawyer. I don't have the order number handy right now.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SAFETY\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"safety\"\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nI am truly sorry to hear that your son was hurt and that you had to spend the evening in the ER. I hope he is feeling better.\\n\\nWe take this very seriously. Your case has been passed to a specialist, who will contact you as soon as possible.\\n\\nThank you for letting us know.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Charging failure after use within 12 months of delivery (delivered 2026-03-12), video provided; battery and charger in stock"
    }
   ],
   "reply": "Hello Aisha,\n\nThank you for getting in touch and for the video. I'm sorry to hear that your children's ride-on car (order AS-10210) has stopped charging - the charger light stays green and the car no longer moves.\n\nYour car was delivered on 12 March 2026, so it is still within its 12-month warranty. We will send you warranty replacement parts (a replacement 12V battery and charger) free of charge. You will receive tracking details once they have been dispatched.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C05:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: aisha.k@example.co.uk\nSubject: Ride-on car stopped charging\nAttachments: car_not_charging.mp4\n\nHello, order AS-10210. Our kids' ride-on car worked well until last week, now the battery won't charge at all - the charger light stays green and the car doesn't move. I've attached a short video showing it. We bought it in March.\n\"\"\"\n\nOrder records found:\n- AS-10210: {\"sku\":\"KB-04\",\"amount_usd\":239,\"order_date\":\"2026-03-05\",\"status\":\"delivered\",\"delivered\":\"2026-03-12\",\"country\":\"UK\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"WARRANTY_PARTS\", \"order_id\": \"AS-10210\", \"reason\": \"Charging failure after use within 12 months of delivery (delivered 2026-03-12), video provided; battery and charger in stock\"}], \"reply\": \"Hello Aisha,\\n\\nThank you for getting in touch and for the video. I'm sorry to hear that your children's ride-on car (order AS-10210) has stopped charging - the charger light stays green and the car no longer moves.\\n\\nYour car was delivered on 12 March 2026, so it is still within its 12-month warranty. We will send you warranty replacement parts (a replacement 12V battery and charger) free of charge. You will receive tracking details once they have been dispatched.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "battery won't charge",
     "charger light stays green",
     "car doesn't move",
     "bought in March"
    ],
    "intents": [
     {
      "type": "DEFECT_WARRANTY",
      "order_id": "AS-10210",
      "sku": "KB-04",
      "part_codes": [],
      "severity": "UNKNOWN",
      "component": "battery / charging",
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
   "reply": "Dear Aisha,\n\nI'm sorry your 12V Kids Ride-On Car (order AS-10210) has stopped charging, and thank you for the video.\n\nAs this is covered by the warranty, we will send you free warranty replacement parts for the charging/battery issue shown in your video.\n\nWe will email you once the parts are on their way.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C05:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: aisha.k@example.co.uk\nSubject: Ride-on car stopped charging\nAttachments: car_not_charging.mp4\n\nHello, order AS-10210. Our kids' ride-on car worked well until last week, now the battery won't charge at all - the charger light stays green and the car doesn't move. I've attached a short video showing it. We bought it in March.\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"battery won't charge\", \"charger light stays green\", \"car doesn't move\", \"bought in March\"], \"intents\": [{\"type\": \"DEFECT_WARRANTY\", \"order_id\": \"AS-10210\", \"sku\": \"KB-04\", \"part_codes\": [], \"severity\": \"UNKNOWN\", \"component\": \"battery / charging\", \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"USED\", \"reason\": \"DEFECT\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": true, \"customer_demand\": null}]}",
     "ms": 0
    },
    {
     "id": "C05:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"battery won't charge\",\n    \"charger light stays green\",\n    \"car doesn't move\",\n    \"bought in March\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": \"AS-10210\",\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"battery / charging\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": true,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-10210\",\n    \"decision\": \"WARRANTY_PARTS\",\n    \"note\": \"Free warranty replacement parts.\",\n    \"product\": \"12V Kids Ride-On Car\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C05:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: aisha.k@example.co.uk\nSubject: Ride-on car stopped charging\nAttachments: car_not_charging.mp4\n\nHello, order AS-10210. Our kids' ride-on car worked well until last week, now the battery won't charge at all - the charger light stays green and the car doesn't move. I've attached a short video showing it. We bought it in March.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-10210\",\n    \"decision\": \"WARRANTY_PARTS\",\n    \"note\": \"Free warranty replacement parts.\",\n    \"product\": \"12V Kids Ride-On Car\"\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Aisha,\\n\\nI'm sorry your 12V Kids Ride-On Car (order AS-10210) has stopped charging, and thank you for the video.\\n\\nAs this is covered by the warranty, we will send you free warranty replacement parts for the charging/battery issue shown in your video.\\n\\nWe will email you once the parts are on their way.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Gas lift failure reported more than 12 months after delivery (delivered 2025-08-01); parts available for purchase, specialist to quote"
    }
   ],
   "reply": "Hello Tom,\n\nThank you for your email and the photo. I'm sorry to hear your office chair (order AS-08800) keeps sinking to the lowest position - that does sound like the gas lift.\n\nYour chair was delivered on 1 August 2025, so it is now outside the 12-month warranty period, and unfortunately we cannot send a replacement gas lift free of charge. The part is available for purchase, and a specialist from our team will send you a quote.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C06:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: tom.b@example.com\nSubject: Chair keeps sinking\nAttachments: chair.jpg\n\nMy office chair from order AS-08800 keeps slowly sinking to the lowest position. I think the gas cylinder is gone. Can you send me a new one for free? Photo attached.\n\"\"\"\n\nOrder records found:\n- AS-08800: {\"sku\":\"OF-07\",\"amount_usd\":149,\"order_date\":\"2025-07-24\",\"status\":\"delivered\",\"delivered\":\"2025-08-01\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"OUT_OF_WARRANTY\", \"order_id\": \"AS-08800\", \"reason\": \"Gas lift failure reported more than 12 months after delivery (delivered 2025-08-01); parts available for purchase, specialist to quote\"}], \"reply\": \"Hello Tom,\\n\\nThank you for your email and the photo. I'm sorry to hear your office chair (order AS-08800) keeps sinking to the lowest position - that does sound like the gas lift.\\n\\nYour chair was delivered on 1 August 2025, so it is now outside the 12-month warranty period, and unfortunately we cannot send a replacement gas lift free of charge. The part is available for purchase, and a specialist from our team will send you a quote.\\n\\nKind regards,\\nCustomer Service\"}",
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
    "customer_choice": null,
    "info_already_given": [
     "chair slowly sinks to lowest position"
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
      "customer_demand": "free replacement gas cylinder"
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
   "reply": "Dear Tom,\n\nI'm sorry your office chair from order AS-08800 keeps sinking, and thank you for the photo.\n\nUnfortunately, this order is outside our 12-month warranty, so we are unable to cover the replacement under warranty. The replacement part can, however, be purchased.\n\nA specialist will send you a quote for the part shortly.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C06:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: tom.b@example.com\nSubject: Chair keeps sinking\nAttachments: chair.jpg\n\nMy office chair from order AS-08800 keeps slowly sinking to the lowest position. I think the gas cylinder is gone. Can you send me a new one for free? Photo attached.\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"chair slowly sinks to lowest position\"], \"intents\": [{\"type\": \"DEFECT_WARRANTY\", \"order_id\": \"AS-08800\", \"sku\": \"OF-07\", \"part_codes\": [], \"severity\": \"STRUCTURAL\", \"component\": \"gas cylinder\", \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"USED\", \"reason\": \"DEFECT\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": true, \"has_video\": false, \"customer_demand\": \"free replacement gas cylinder\"}]}",
     "ms": 0
    },
    {
     "id": "C06:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"chair slowly sinks to lowest position\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": \"AS-08800\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"gas cylinder\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"free replacement gas cylinder\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-08800\",\n    \"decision\": \"OUT_OF_WARRANTY\",\n    \"reason\": \"over_12_months\",\n    \"note\": \"Parts can be purchased; a specialist will send a quote.\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C06:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: tom.b@example.com\nSubject: Chair keeps sinking\nAttachments: chair.jpg\n\nMy office chair from order AS-08800 keeps slowly sinking to the lowest position. I think the gas cylinder is gone. Can you send me a new one for free? Photo attached.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"AS-08800\",\n    \"decision\": \"OUT_OF_WARRANTY\",\n    \"reason\": \"over_12_months\",\n    \"note\": \"Parts can be purchased; a specialist will send a quote.\"\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Tom,\\n\\nI'm sorry your office chair from order AS-08800 keeps sinking, and thank you for the photo.\\n\\nUnfortunately, this order is outside our 12-month warranty, so we are unable to cover the replacement under warranty. The replacement part can, however, be purchased.\\n\\nA specialist will send you a quote for the part shortly.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Change of mind within 30 days of delivery, unopened; standard parcel return fee 12.95 USD deducted"
    }
   ],
   "reply": "Hi,\n\nThank you for letting us know. I understand you would like to return the office chair from order AS-10170 as you have bought one locally, and that the box has not been opened.\n\nAs the chair was delivered within the last 30 days and is unopened, we can accept the return. Please keep it in its original, unopened packaging. The return shipping fee for a standard parcel (12.95 USD) will be deducted from your refund. We will send you the return instructions and label for this order.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C07:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: lin.ch@example.com\nSubject: Return request\nAttachments: none\n\nHi, I'd like to return the office chair from order AS-10170. I changed my mind and bought one locally. The box hasn't been opened. How does it work?\n\"\"\"\n\nOrder records found:\n- AS-10170: {\"sku\":\"OF-07\",\"amount_usd\":149,\"order_date\":\"2026-10-13\",\"status\":\"delivered\",\"delivered\":\"2026-10-20\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"RETURN_ALLOWED\", \"order_id\": \"AS-10170\", \"reason\": \"Change of mind within 30 days of delivery, unopened; standard parcel return fee 12.95 USD deducted\"}], \"reply\": \"Hi,\\n\\nThank you for letting us know. I understand you would like to return the office chair from order AS-10170 as you have bought one locally, and that the box has not been opened.\\n\\nAs the chair was delivered within the last 30 days and is unopened, we can accept the return. Please keep it in its original, unopened packaging. The return shipping fee for a standard parcel (12.95 USD) will be deducted from your refund. We will send you the return instructions and label for this order.\\n\\nKind regards,\\nCustomer Service\"}",
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
    "customer_choice": "FULL_REFUND",
    "info_already_given": [
     "box unopened",
     "bought one locally"
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
      "customer_demand": "return for refund"
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
   "reply": "Dear Customer,\n\nThank you for letting us know you would like to return the office chair from order AS-10170.\n\nYour return is accepted. As this is a standard parcel return, a return fee of $12.95 will be deducted from your refund.\n\nWe will send you the return instructions by email shortly; please keep the box unopened.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C07:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: lin.ch@example.com\nSubject: Return request\nAttachments: none\n\nHi, I'd like to return the office chair from order AS-10170. I changed my mind and bought one locally. The box hasn't been opened. How does it work?\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": \"FULL_REFUND\", \"info_already_given\": [\"box unopened\", \"bought one locally\"], \"intents\": [{\"type\": \"RETURN\", \"order_id\": \"AS-10170\", \"sku\": \"OF-07\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNOPENED\", \"reason\": \"CHANGED_MIND\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": \"return for refund\"}]}",
     "ms": 0
    },
    {
     "id": "C07:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"FULL_REFUND\",\n  \"info_already_given\": [\n    \"box unopened\",\n    \"bought one locally\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10170\",\n      \"sku\": \"OF-07\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"return for refund\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10170\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 12.95,\n    \"fee_type\": \"standard parcel\",\n    \"allowed_amounts\": [\n      12.95\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C07:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: lin.ch@example.com\nSubject: Return request\nAttachments: none\n\nHi, I'd like to return the office chair from order AS-10170. I changed my mind and bought one locally. The box hasn't been opened. How does it work?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10170\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 12.95,\n    \"fee_type\": \"standard parcel\",\n    \"allowed_amounts\": [\n      12.95\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nThank you for letting us know you would like to return the office chair from order AS-10170.\\n\\nYour return is accepted. As this is a standard parcel return, a return fee of $12.95 will be deducted from your refund.\\n\\nWe will send you the return instructions by email shortly; please keep the box unopened.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Change-of-mind return not possible: table has been assembled and used"
    }
   ],
   "reply": "Hello Rachel,\n\nThank you for your email. I understand the dining table from order AS-10175 has turned out to be a bit too big for your patio, and that it is in perfect condition.\n\nI'm sorry, but under our returns policy, change-of-mind returns are only possible for items that are unopened or unassembled. As the table has been assembled and used, we are unable to accept it back for a change-of-mind return, even if it is disassembled again.\n\nI'm sorry I can't offer a different answer on this. If you have any other questions about the table, we're happy to help.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C08:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: rachel.m@example.com\nSubject: Returning the dining table\nAttachments: none\n\nHello, order AS-10175. We assembled the table last week but it's a bit too big for our patio. It's in perfect condition, we only used it twice. I'd like to return it for a refund please. I can disassemble it again.\n\"\"\"\n\nOrder records found:\n- AS-10175: {\"sku\":\"PT-02\",\"amount_usd\":329,\"order_date\":\"2026-10-07\",\"status\":\"delivered\",\"delivered\":\"2026-10-15\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"DECLINE_RETURN\", \"order_id\": \"AS-10175\", \"reason\": \"Change-of-mind return not possible: table has been assembled and used\"}], \"reply\": \"Hello Rachel,\\n\\nThank you for your email. I understand the dining table from order AS-10175 has turned out to be a bit too big for your patio, and that it is in perfect condition.\\n\\nI'm sorry, but under our returns policy, change-of-mind returns are only possible for items that are unopened or unassembled. As the table has been assembled and used, we are unable to accept it back for a change-of-mind return, even if it is disassembled again.\\n\\nI'm sorry I can't offer a different answer on this. If you have any other questions about the table, we're happy to help.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "table assembled and used twice",
     "too big for patio",
     "perfect condition"
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
      "customer_demand": "return for refund"
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
   "reply": "Dear Rachel,\n\nThank you for your message about returning the dining table from order AS-10175, and I'm sorry it turned out too big for your patio.\n\nUnfortunately, we are unable to accept this return, as the table has been assembled and used. Our returns can only be accepted for items that have not been assembled or used.\n\nI'm sorry I can't help further with this request, and thank you for your understanding.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C08:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: rachel.m@example.com\nSubject: Returning the dining table\nAttachments: none\n\nHello, order AS-10175. We assembled the table last week but it's a bit too big for our patio. It's in perfect condition, we only used it twice. I'd like to return it for a refund please. I can disassemble it again.\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": \"FULL_REFUND\", \"info_already_given\": [\"table assembled and used twice\", \"too big for patio\", \"perfect condition\"], \"intents\": [{\"type\": \"RETURN\", \"order_id\": \"AS-10175\", \"sku\": \"PT-02\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"ASSEMBLED\", \"reason\": \"CHANGED_MIND\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": \"return for refund\"}]}",
     "ms": 0
    },
    {
     "id": "C08:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": \"FULL_REFUND\",\n  \"info_already_given\": [\n    \"table assembled and used twice\",\n    \"too big for patio\",\n    \"perfect condition\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10175\",\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"ASSEMBLED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"return for refund\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10175\",\n    \"decision\": \"DECLINE_RETURN\",\n    \"reason\": \"assembled_or_used\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C08:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: rachel.m@example.com\nSubject: Returning the dining table\nAttachments: none\n\nHello, order AS-10175. We assembled the table last week but it's a bit too big for our patio. It's in perfect condition, we only used it twice. I'd like to return it for a refund please. I can disassemble it again.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10175\",\n    \"decision\": \"DECLINE_RETURN\",\n    \"reason\": \"assembled_or_used\"\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Rachel,\\n\\nThank you for your message about returning the dining table from order AS-10175, and I'm sorry it turned out too big for your patio.\\n\\nUnfortunately, we are unable to accept this return, as the table has been assembled and used. Our returns can only be accepted for items that have not been assembled or used.\\n\\nI'm sorry I can't help further with this request, and thank you for your understanding.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Colour exchange grey to beige within 30 days, unassembled, beige in stock"
    }
   ],
   "reply": "Hi,\n\nThank you for getting in touch. I understand you'd prefer the beige version of the swing chair from order AS-10180 instead of the grey one, and that it is still in its original box, unassembled.\n\nGood news - the beige swing chair is in stock and your order is within the 30-day exchange window, so we can arrange the exchange. Please keep the grey chair unassembled in its original packaging; we will send you the next steps for the exchange.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C09:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: s.patel@example.com\nSubject: Can I swap colour?\nAttachments: none\n\nHi there, I received the swing chair (order AS-10180) in grey but after seeing it in our garden we'd prefer the beige one. It's still in the original box, not assembled. Is an exchange possible?\n\"\"\"\n\nOrder records found:\n- AS-10180: {\"sku\":\"SW-01\",\"variant\":\"grey\",\"amount_usd\":289,\"order_date\":\"2026-10-26\",\"status\":\"delivered\",\"delivered\":\"2026-11-02\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"EXCHANGE\", \"order_id\": \"AS-10180\", \"reason\": \"Colour exchange grey to beige within 30 days, unassembled, beige in stock\"}], \"reply\": \"Hi,\\n\\nThank you for getting in touch. I understand you'd prefer the beige version of the swing chair from order AS-10180 instead of the grey one, and that it is still in its original box, unassembled.\\n\\nGood news - the beige swing chair is in stock and your order is within the 30-day exchange window, so we can arrange the exchange. Please keep the grey chair unassembled in its original packaging; we will send you the next steps for the exchange.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "received grey",
     "in original box, not assembled"
    ],
    "intents": [
     {
      "type": "EXCHANGE",
      "order_id": "AS-10180",
      "sku": "SW-01",
      "part_codes": [],
      "severity": null,
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNASSEMBLED",
      "reason": "CHANGED_MIND",
      "target_variant": "beige",
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "exchange grey for beige"
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
   "reply": "Dear Customer,\n\nThank you for letting us know you'd prefer a different colour for your swing chair (order AS-10180).\n\nI'm happy to confirm the exchange from grey to beige.\n\nWe will email you the exchange instructions shortly; please keep the chair unassembled in its original box.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C09:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: s.patel@example.com\nSubject: Can I swap colour?\nAttachments: none\n\nHi there, I received the swing chair (order AS-10180) in grey but after seeing it in our garden we'd prefer the beige one. It's still in the original box, not assembled. Is an exchange possible?\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"received grey\", \"in original box, not assembled\"], \"intents\": [{\"type\": \"EXCHANGE\", \"order_id\": \"AS-10180\", \"sku\": \"SW-01\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNASSEMBLED\", \"reason\": \"CHANGED_MIND\", \"target_variant\": \"beige\", \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": \"exchange grey for beige\"}]}",
     "ms": 0
    },
    {
     "id": "C09:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"received grey\",\n    \"in original box, not assembled\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"EXCHANGE\",\n      \"order_id\": \"AS-10180\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNASSEMBLED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": \"beige\",\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"exchange grey for beige\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"EXCHANGE\",\n    \"order_id\": \"AS-10180\",\n    \"decision\": \"EXCHANGE\",\n    \"from_variant\": \"grey\",\n    \"to_variant\": \"beige\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C09:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: s.patel@example.com\nSubject: Can I swap colour?\nAttachments: none\n\nHi there, I received the swing chair (order AS-10180) in grey but after seeing it in our garden we'd prefer the beige one. It's still in the original box, not assembled. Is an exchange possible?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"EXCHANGE\",\n    \"order_id\": \"AS-10180\",\n    \"decision\": \"EXCHANGE\",\n    \"from_variant\": \"grey\",\n    \"to_variant\": \"beige\"\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nThank you for letting us know you'd prefer a different colour for your swing chair (order AS-10180).\\n\\nI'm happy to confirm the exchange from grey to beige.\\n\\nWe will email you the exchange instructions shortly; please keep the chair unassembled in its original box.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Change of mind within 30 days of delivery, unassembled and in original packaging; oversize freight return fee 59 USD deducted"
    }
   ],
   "reply": "Guten Tag,\n\nvielen Dank für Ihre Nachricht. Sie möchten die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben, die noch nicht aufgebaut und originalverpackt ist.\n\nDa die Lieferung weniger als 30 Tage zurückliegt und der Artikel nicht aufgebaut ist, ist eine Rückgabe möglich. Zu den Rücksendekosten: Die Hollywoodschaukel wird als Sperrgut (Speditionsversand) zurückgesendet; die Rücksendegebühr von 59 USD wird von Ihrer Erstattung abgezogen. Bitte lassen Sie die Schaukel in der Originalverpackung. Wir senden Ihnen die Anweisungen für die Rücksendung zu.\n\nMit freundlichen Grüßen\nKundenservice",
   "trace": [
    {
     "id": "C10:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: k.schneider@example.de\nSubject: Rücksendung Hollywoodschaukel\nAttachments: none\n\nGuten Tag, ich möchte die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten? Vielen Dank.\n\"\"\"\n\nOrder records found:\n- AS-10185: {\"sku\":\"SW-01\",\"variant\":\"grey\",\"amount_usd\":299,\"order_date\":\"2026-10-22\",\"status\":\"delivered\",\"delivered\":\"2026-10-30\",\"country\":\"DE\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"RETURN_ALLOWED\", \"order_id\": \"AS-10185\", \"reason\": \"Change of mind within 30 days of delivery, unassembled and in original packaging; oversize freight return fee 59 USD deducted\"}], \"reply\": \"Guten Tag,\\n\\nvielen Dank für Ihre Nachricht. Sie möchten die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben, die noch nicht aufgebaut und originalverpackt ist.\\n\\nDa die Lieferung weniger als 30 Tage zurückliegt und der Artikel nicht aufgebaut ist, ist eine Rückgabe möglich. Zu den Rücksendekosten: Die Hollywoodschaukel wird als Sperrgut (Speditionsversand) zurückgesendet; die Rücksendegebühr von 59 USD wird von Ihrer Erstattung abgezogen. Bitte lassen Sie die Schaukel in der Originalverpackung. Wir senden Ihnen die Anweisungen für die Rücksendung zu.\\n\\nMit freundlichen Grüßen\\nKundenservice\"}",
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
     "not assembled, in original packaging"
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
      "item_condition": "UNOPENED",
      "reason": "CHANGED_MIND",
      "target_variant": null,
      "qa_topics": [],
      "has_photo": false,
      "has_video": false,
      "customer_demand": "return; asks who pays return shipping"
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
   "reply": "Guten Tag Herr/Frau Schneider,\n\nvielen Dank für Ihre Nachricht zur Rücksendung der Hollywoodschaukel aus Bestellung AS-10185.\n\nIhre Rücksendung wird akzeptiert. Da es sich um eine Sperrgut-Spedition handelt, wird eine Rücksendegebühr von 59 USD von Ihrer Erstattung abgezogen.\n\nDie Rücksendeanweisungen erhalten Sie in Kürze per E-Mail. Bitte lassen Sie die Schaukel bis dahin originalverpackt.\n\nMit freundlichen Grüßen\nCustomer Care Team",
   "trace": [
    {
     "id": "C10:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: k.schneider@example.de\nSubject: Rücksendung Hollywoodschaukel\nAttachments: none\n\nGuten Tag, ich möchte die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten? Vielen Dank.\n\"\"\"",
     "response": "{\"language\": \"de\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"not assembled, in original packaging\"], \"intents\": [{\"type\": \"RETURN\", \"order_id\": \"AS-10185\", \"sku\": \"SW-01\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNOPENED\", \"reason\": \"CHANGED_MIND\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": \"return; asks who pays return shipping\"}]}",
     "ms": 0
    },
    {
     "id": "C10:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"de\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"not assembled, in original packaging\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"RETURN\",\n      \"order_id\": \"AS-10185\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNOPENED\",\n      \"reason\": \"CHANGED_MIND\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"return; asks who pays return shipping\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10185\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 59,\n    \"fee_type\": \"oversize freight\",\n    \"allowed_amounts\": [\n      59\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C10:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (de).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: k.schneider@example.de\nSubject: Rücksendung Hollywoodschaukel\nAttachments: none\n\nGuten Tag, ich möchte die Hollywoodschaukel aus Bestellung AS-10185 zurückgeben. Sie ist noch nicht aufgebaut und originalverpackt. Wer trägt die Rücksendekosten? Vielen Dank.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"RETURN\",\n    \"order_id\": \"AS-10185\",\n    \"decision\": \"RETURN_ALLOWED\",\n    \"return_fee_usd\": 59,\n    \"fee_type\": \"oversize freight\",\n    \"allowed_amounts\": [\n      59\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Guten Tag Herr/Frau Schneider,\\n\\nvielen Dank für Ihre Nachricht zur Rücksendung der Hollywoodschaukel aus Bestellung AS-10185.\\n\\nIhre Rücksendung wird akzeptiert. Da es sich um eine Sperrgut-Spedition handelt, wird eine Rücksendegebühr von 59 USD von Ihrer Erstattung abgezogen.\\n\\nDie Rücksendeanweisungen erhalten Sie in Kürze per E-Mail. Bitte lassen Sie die Schaukel bis dahin originalverpackt.\\n\\nMit freundlichen Grüßen\\nCustomer Care Team\"}",
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
     "reason": "Spec: total max load 300 kg, max 100 kg per seat; 3 x 110 kg exceeds both limits"
    }
   ],
   "reply": "Hi,\n\nThank you for your question about our 3-Seat Patio Swing Chair.\n\nAccording to the product specification, the swing chair has a total maximum load of 300 kg (660 lb) and a maximum of 100 kg (220 lb) per seat. Three people at around 110 kg (240 lb) each would be about 330 kg in total and above the per-seat limit, so unfortunately it would not be safe for the three of you to sit on it together.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C11:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: big.family@example.com\nSubject: Weight question before buying\nAttachments: none\n\nHi, I'm looking at your 3-seat patio swing chair. Me, my brother and my dad are all around 110 kg (about 240 lb). Can the three of us sit on it together safely?\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"ANSWER_QA\", \"order_id\": null, \"reason\": \"Spec: total max load 300 kg, max 100 kg per seat; 3 x 110 kg exceeds both limits\"}], \"reply\": \"Hi,\\n\\nThank you for your question about our 3-Seat Patio Swing Chair.\\n\\nAccording to the product specification, the swing chair has a total maximum load of 300 kg (660 lb) and a maximum of 100 kg (220 lb) per seat. Three people at around 110 kg (240 lb) each would be about 330 kg in total and above the per-seat limit, so unfortunately it would not be safe for the three of you to sit on it together.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "three adults ~110 kg each"
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
   "reply": "Dear Customer,\n\nThank you for checking the weight capacity of our 3-Seat Patio Swing Chair before buying.\n\nThe swing chair has a total maximum load of 300 kg (660 lb), with a maximum of 100 kg (220 lb) per seat. As each of you weighs around 110 kg, this is above the per-seat limit, so unfortunately it is not suitable for the three of you to sit on it together safely.\n\nIf you have any other questions, please let us know.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C11:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: big.family@example.com\nSubject: Weight question before buying\nAttachments: none\n\nHi, I'm looking at your 3-seat patio swing chair. Me, my brother and my dad are all around 110 kg (about 240 lb). Can the three of us sit on it together safely?\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"three adults ~110 kg each\"], \"intents\": [{\"type\": \"PRODUCT_QA\", \"order_id\": null, \"sku\": \"SW-01\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [\"MAX_LOAD\"], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}]}",
     "ms": 0
    },
    {
     "id": "C11:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"three adults ~110 kg each\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"MAX_LOAD\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"SW-01\",\n    \"product\": \"3-Seat Patio Swing Chair\",\n    \"facts\": {\n      \"MAX_LOAD\": \"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\"\n    }\n  }\n]",
     "ms": 0
    },
    {
     "id": "C11:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: big.family@example.com\nSubject: Weight question before buying\nAttachments: none\n\nHi, I'm looking at your 3-seat patio swing chair. Me, my brother and my dad are all around 110 kg (about 240 lb). Can the three of us sit on it together safely?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"SW-01\",\n    \"product\": \"3-Seat Patio Swing Chair\",\n    \"facts\": {\n      \"MAX_LOAD\": \"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\"\n    }\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nThank you for checking the weight capacity of our 3-Seat Patio Swing Chair before buying.\\n\\nThe swing chair has a total maximum load of 300 kg (660 lb), with a maximum of 100 kg (220 lb) per seat. As each of you weighs around 110 kg, this is above the per-seat limit, so unfortunately it is not suitable for the three of you to sit on it together safely.\\n\\nIf you have any other questions, please let us know.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Spec: gazebo is not rated for snow load; snow must be cleared promptly"
    }
   ],
   "reply": "Hello,\n\nThank you for your question about our 3 x 4 m Aluminium Hardtop Gazebo.\n\nAccording to the product specification, the gazebo is not rated for snow load. It can stay outside, but snow should be cleared from the roof promptly and must not be allowed to accumulate. The gazebo must also be anchored to the ground. So it is not suitable for standing through winter with snow left on the roof.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C12:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: northern.garden@example.com\nSubject: Gazebo in winter\nAttachments: none\n\nWe get quite a bit of snow in winter here in Minnesota. Can your 3x4 aluminium hardtop gazebo stay up all winter with snow on the roof?\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"ANSWER_QA\", \"order_id\": null, \"reason\": \"Spec: gazebo is not rated for snow load; snow must be cleared promptly\"}], \"reply\": \"Hello,\\n\\nThank you for your question about our 3 x 4 m Aluminium Hardtop Gazebo.\\n\\nAccording to the product specification, the gazebo is not rated for snow load. It can stay outside, but snow should be cleared from the roof promptly and must not be allowed to accumulate. The gazebo must also be anchored to the ground. So it is not suitable for standing through winter with snow left on the roof.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "heavy snow in Minnesota"
    ],
    "intents": [
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": "GZ-05",
      "part_codes": [],
      "severity": null,
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
   "reply": "Dear Customer,\n\nThank you for asking about using our 3 x 4 m Aluminium Hardtop Gazebo in a snowy Minnesota winter.\n\nThe gazebo must be anchored to the ground and is not rated for snow load: snow should be cleared from the roof promptly and must not be allowed to accumulate. I will confirm the maximum load details with our product team and get back to you.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C12:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: northern.garden@example.com\nSubject: Gazebo in winter\nAttachments: none\n\nWe get quite a bit of snow in winter here in Minnesota. Can your 3x4 aluminium hardtop gazebo stay up all winter with snow on the roof?\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"heavy snow in Minnesota\"], \"intents\": [{\"type\": \"PRODUCT_QA\", \"order_id\": null, \"sku\": \"GZ-05\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [\"WEATHER\", \"MAX_LOAD\"], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}]}",
     "ms": 0
    },
    {
     "id": "C12:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"heavy snow in Minnesota\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"GZ-05\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"WEATHER\",\n        \"MAX_LOAD\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"QA_UNKNOWN\",\n    \"sku\": \"GZ-05\",\n    \"product\": \"3 x 4 m Aluminium Hardtop Gazebo\",\n    \"facts\": {\n      \"WEATHER\": \"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\"\n    },\n    \"missing_topics\": [\n      \"MAX_LOAD\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C12:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: northern.garden@example.com\nSubject: Gazebo in winter\nAttachments: none\n\nWe get quite a bit of snow in winter here in Minnesota. Can your 3x4 aluminium hardtop gazebo stay up all winter with snow on the roof?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"QA_UNKNOWN\",\n    \"sku\": \"GZ-05\",\n    \"product\": \"3 x 4 m Aluminium Hardtop Gazebo\",\n    \"facts\": {\n      \"WEATHER\": \"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\"\n    },\n    \"missing_topics\": [\n      \"MAX_LOAD\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nThank you for asking about using our 3 x 4 m Aluminium Hardtop Gazebo in a snowy Minnesota winter.\\n\\nThe gazebo must be anchored to the ground and is not rated for snow load: snow should be cleared from the roof promptly and must not be allowed to accumulate. I will confirm the maximum load details with our product team and get back to you.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
   "mode": "baseline",
   "caseId": "C13",
   "decisions": [
    "QA_UNKNOWN"
   ],
   "detail": [
    {
     "decision": "QA_UNKNOWN",
     "order_id": null,
     "reason": "Spec does not state certification (CERTIFICATION null); confirm with product team"
    }
   ],
   "reply": "Hello,\n\nThank you for your question about our 6-Seat Acacia Patio Dining Table.\n\nThe table is made of solid acacia wood with an oil finish. Our product specification does not include information on FSC certification, so I will confirm this with our product team and get back to you rather than give you an unverified answer.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C13:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: eco.buyer@example.com\nSubject: FSC?\nAttachments: none\n\nIs the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"QA_UNKNOWN\", \"order_id\": null, \"reason\": \"Spec does not state certification (CERTIFICATION null); confirm with product team\"}], \"reply\": \"Hello,\\n\\nThank you for your question about our 6-Seat Acacia Patio Dining Table.\\n\\nThe table is made of solid acacia wood with an oil finish. Our product specification does not include information on FSC certification, so I will confirm this with our product team and get back to you rather than give you an unverified answer.\\n\\nKind regards,\\nCustomer Service\"}",
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
    "info_already_given": [],
    "intents": [
     {
      "type": "PRODUCT_QA",
      "order_id": null,
      "sku": "PT-02",
      "part_codes": [],
      "severity": null,
      "component": null,
      "repeat_issue": false,
      "units_affected": 1,
      "item_condition": "UNKNOWN",
      "reason": "OTHER",
      "target_variant": null,
      "qa_topics": [
       "CERTIFICATION",
       "MATERIAL"
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
   "reply": "Dear Customer,\n\nThank you for your question about the 6-Seat Acacia Patio Dining Table and your sustainability policy.\n\nThe table is made of solid acacia wood with an oil finish and steel connecting hardware. Regarding FSC certification, I will confirm this with our product team and get back to you as soon as I have an answer.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C13:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: eco.buyer@example.com\nSubject: FSC?\nAttachments: none\n\nIs the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [], \"intents\": [{\"type\": \"PRODUCT_QA\", \"order_id\": null, \"sku\": \"PT-02\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [\"CERTIFICATION\", \"MATERIAL\"], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}]}",
     "ms": 0
    },
    {
     "id": "C13:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"PT-02\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"CERTIFICATION\",\n        \"MATERIAL\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"QA_UNKNOWN\",\n    \"sku\": \"PT-02\",\n    \"product\": \"6-Seat Acacia Patio Dining Table\",\n    \"facts\": {\n      \"MATERIAL\": \"Solid acacia wood with oil finish; steel connecting hardware.\"\n    },\n    \"missing_topics\": [\n      \"CERTIFICATION\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C13:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: eco.buyer@example.com\nSubject: FSC?\nAttachments: none\n\nIs the wood in your 6-seat acacia patio dining table FSC certified? It's important for our company's sustainability policy.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"QA_UNKNOWN\",\n    \"sku\": \"PT-02\",\n    \"product\": \"6-Seat Acacia Patio Dining Table\",\n    \"facts\": {\n      \"MATERIAL\": \"Solid acacia wood with oil finish; steel connecting hardware.\"\n    },\n    \"missing_topics\": [\n      \"CERTIFICATION\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nThank you for your question about the 6-Seat Acacia Patio Dining Table and your sustainability policy.\\n\\nThe table is made of solid acacia wood with an oil finish and steel connecting hardware. Regarding FSC certification, I will confirm this with our product team and get back to you as soon as I have an answer.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Spec: max load 30 kg, ages 3-6; child is 7 and 32 kg, exceeds both"
    },
    {
     "decision": "ANSWER_QA",
     "order_id": null,
     "reason": "Spec: first charge 12 hours"
    }
   ],
   "reply": "Hi,\n\nThank you for your interest in our 12V Kids Ride-On Car.\n\n1. Age and weight: according to the product specification, the car has a maximum load of 30 kg (66 lb) and is recommended for ages 3-6. At 7 years old and 32 kg, your daughter would be above both the recommended age range and the maximum load, so we would not recommend it for her.\n\n2. First charge: the first charge takes 12 hours. After that, a normal charge takes 8-10 hours and gives about 60 minutes of driving.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C14:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: mum.of.two@example.com\nSubject: Ride-on car questions\nAttachments: none\n\nHi! Thinking of buying the 12V kids ride-on car for my daughter. She's 7 and weighs 32 kg - is that OK? And how long does the first charge take?\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"ANSWER_QA\", \"order_id\": null, \"reason\": \"Spec: max load 30 kg, ages 3-6; child is 7 and 32 kg, exceeds both\"}, {\"decision\": \"ANSWER_QA\", \"order_id\": null, \"reason\": \"Spec: first charge 12 hours\"}], \"reply\": \"Hi,\\n\\nThank you for your interest in our 12V Kids Ride-On Car.\\n\\n1. Age and weight: according to the product specification, the car has a maximum load of 30 kg (66 lb) and is recommended for ages 3-6. At 7 years old and 32 kg, your daughter would be above both the recommended age range and the maximum load, so we would not recommend it for her.\\n\\n2. First charge: the first charge takes 12 hours. After that, a normal charge takes 8-10 hours and gives about 60 minutes of driving.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "daughter 7 years, 32 kg"
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
       "AGE_RANGE",
       "MAX_LOAD",
       "BATTERY"
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
     "sku": "KB-04",
     "product": "12V Kids Ride-On Car",
     "facts": {
      "AGE_RANGE": "Recommended for ages 3-6.",
      "MAX_LOAD": "Max load 30 kg (66 lb).",
      "BATTERY": "12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge."
     }
    }
   ],
   "reply": "Dear Customer,\n\nThank you for your questions about the 12V Kids Ride-On Car.\n\nThe car is recommended for ages 3-6 and has a maximum load of 30 kg (66 lb). As your daughter is 7 and weighs 32 kg, unfortunately it is not suitable for her.\n\nFor reference, it has a 12V 7Ah battery: the first charge takes 12 hours, a normal charge takes 8-10 hours, and it gives about 60 minutes of driving per charge.\n\nPlease let us know if you have any other questions.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C14:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: mum.of.two@example.com\nSubject: Ride-on car questions\nAttachments: none\n\nHi! Thinking of buying the 12V kids ride-on car for my daughter. She's 7 and weighs 32 kg - is that OK? And how long does the first charge take?\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"daughter 7 years, 32 kg\"], \"intents\": [{\"type\": \"PRODUCT_QA\", \"order_id\": null, \"sku\": \"KB-04\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [\"AGE_RANGE\", \"MAX_LOAD\", \"BATTERY\"], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}]}",
     "ms": 0
    },
    {
     "id": "C14:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"daughter 7 years, 32 kg\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"AGE_RANGE\",\n        \"MAX_LOAD\",\n        \"BATTERY\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"KB-04\",\n    \"product\": \"12V Kids Ride-On Car\",\n    \"facts\": {\n      \"AGE_RANGE\": \"Recommended for ages 3-6.\",\n      \"MAX_LOAD\": \"Max load 30 kg (66 lb).\",\n      \"BATTERY\": \"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\"\n    }\n  }\n]",
     "ms": 0
    },
    {
     "id": "C14:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: mum.of.two@example.com\nSubject: Ride-on car questions\nAttachments: none\n\nHi! Thinking of buying the 12V kids ride-on car for my daughter. She's 7 and weighs 32 kg - is that OK? And how long does the first charge take?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"KB-04\",\n    \"product\": \"12V Kids Ride-On Car\",\n    \"facts\": {\n      \"AGE_RANGE\": \"Recommended for ages 3-6.\",\n      \"MAX_LOAD\": \"Max load 30 kg (66 lb).\",\n      \"BATTERY\": \"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\"\n    }\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nThank you for your questions about the 12V Kids Ride-On Car.\\n\\nThe car is recommended for ages 3-6 and has a maximum load of 30 kg (66 lb). As your daughter is 7 and weighs 32 kg, unfortunately it is not suitable for her.\\n\\nFor reference, it has a 12V 7Ah battery: the first charge takes 12 hours, a normal charge takes 8-10 hours, and it gives about 60 minutes of driving per charge.\\n\\nPlease let us know if you have any other questions.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Spec: dog crate is indoor use only, not suitable for outdoor use or damp areas"
    }
   ],
   "reply": "Bonjour,\n\nMerci pour votre question concernant notre grande cage en bois pour chien (XL).\n\nSelon la fiche technique du produit, cette cage est destinée à un usage intérieur uniquement. Elle n'est pas adaptée à une utilisation en extérieur ni dans des endroits humides, y compris une terrasse couverte. Nous vous déconseillons donc de l'utiliser dehors.\n\nCordialement,\nLe service client",
   "trace": [
    {
     "id": "C15:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: julie.martin@example.fr\nSubject: Cage pour chien - extérieur ?\nAttachments: none\n\nBonjour, est-ce que la grande cage en bois pour chien (XL) peut être utilisée dehors sur une terrasse couverte ? Merci d'avance.\n\"\"\"\n\nOrder records found:\n(no order number found in the email)\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"ANSWER_QA\", \"order_id\": null, \"reason\": \"Spec: dog crate is indoor use only, not suitable for outdoor use or damp areas\"}], \"reply\": \"Bonjour,\\n\\nMerci pour votre question concernant notre grande cage en bois pour chien (XL).\\n\\nSelon la fiche technique du produit, cette cage est destinée à un usage intérieur uniquement. Elle n'est pas adaptée à une utilisation en extérieur ni dans des endroits humides, y compris une terrasse couverte. Nous vous déconseillons donc de l'utiliser dehors.\\n\\nCordialement,\\nLe service client\"}",
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
    "info_already_given": [],
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
     "sku": "DC-06",
     "product": "XL Wooden Dog Crate Furniture",
     "facts": {
      "WEATHER": "Indoor use only. Not suitable for outdoor use or damp areas."
     }
    }
   ],
   "reply": "Bonjour Julie,\n\nMerci pour votre question concernant notre cage en bois pour chien XL.\n\nCe meuble est conçu pour un usage intérieur uniquement. Il n'est pas adapté à une utilisation en extérieur ni dans des zones humides, donc nous déconseillons de l'utiliser sur une terrasse, même couverte.\n\nN'hésitez pas à nous contacter pour toute autre question.\n\nCordialement,\nCustomer Care Team",
   "trace": [
    {
     "id": "C15:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: julie.martin@example.fr\nSubject: Cage pour chien - extérieur ?\nAttachments: none\n\nBonjour, est-ce que la grande cage en bois pour chien (XL) peut être utilisée dehors sur une terrasse couverte ? Merci d'avance.\n\"\"\"",
     "response": "{\"language\": \"fr\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [], \"intents\": [{\"type\": \"PRODUCT_QA\", \"order_id\": null, \"sku\": \"DC-06\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [\"WEATHER\"], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}]}",
     "ms": 0
    },
    {
     "id": "C15:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"fr\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [],\n  \"intents\": [\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"DC-06\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"WEATHER\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"DC-06\",\n    \"product\": \"XL Wooden Dog Crate Furniture\",\n    \"facts\": {\n      \"WEATHER\": \"Indoor use only. Not suitable for outdoor use or damp areas.\"\n    }\n  }\n]",
     "ms": 0
    },
    {
     "id": "C15:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (fr).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: julie.martin@example.fr\nSubject: Cage pour chien - extérieur ?\nAttachments: none\n\nBonjour, est-ce que la grande cage en bois pour chien (XL) peut être utilisée dehors sur une terrasse couverte ? Merci d'avance.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"DC-06\",\n    \"product\": \"XL Wooden Dog Crate Furniture\",\n    \"facts\": {\n      \"WEATHER\": \"Indoor use only. Not suitable for outdoor use or damp areas.\"\n    }\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Bonjour Julie,\\n\\nMerci pour votre question concernant notre cage en bois pour chien XL.\\n\\nCe meuble est conçu pour un usage intérieur uniquement. Il n'est pas adapté à une utilisation en extérieur ni dans des zones humides, donc nous déconseillons de l'utiliser sur une terrasse, même couverte.\\n\\nN'hésitez pas à nous contacter pour toute autre question.\\n\\nCordialement,\\nCustomer Care Team\"}",
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
     "reason": "Ordered 2026-10-28, still processing after more than 5 business days; escalate to warehouse and offer cancellation with full refund"
    }
   ],
   "reply": "Hello,\n\nThank you for your email, and I'm very sorry that your ride-on car (order AS-10162), ordered on 28 October, still has not shipped - I understand how important it is to have it for your son's birthday.\n\nI have escalated your order to our warehouse as a priority. I'm unable to confirm a ship date at the moment, so I can't guarantee it will arrive before the 15th. If you would prefer, we can cancel the order and give you a full refund - just reply to let us know.\n\nAgain, my apologies for the delay.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C16:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: frustrated.dad@example.com\nSubject: Where is my order??\nAttachments: none\n\nI ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th. It still says processing. When will it ship? I need it before the 15th.\n\"\"\"\n\nOrder records found:\n- AS-10162: {\"sku\":\"KB-04\",\"amount_usd\":239,\"order_date\":\"2026-10-28\",\"status\":\"processing\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"SHIPPING_DELAY_ESCALATE\", \"order_id\": \"AS-10162\", \"reason\": \"Ordered 2026-10-28, still processing after more than 5 business days; escalate to warehouse and offer cancellation with full refund\"}], \"reply\": \"Hello,\\n\\nThank you for your email, and I'm very sorry that your ride-on car (order AS-10162), ordered on 28 October, still has not shipped - I understand how important it is to have it for your son's birthday.\\n\\nI have escalated your order to our warehouse as a priority. I'm unable to confirm a ship date at the moment, so I can't guarantee it will arrive before the 15th. If you would prefer, we can cancel the order and give you a full refund - just reply to let us know.\\n\\nAgain, my apologies for the delay.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "ordered October 28",
     "status still processing",
     "needed by the 15th"
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
      "customer_demand": "ship before the 15th"
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
   "reply": "Dear Customer,\n\nI'm very sorry that your ride-on car order AS-10162 is still showing as processing, especially with your son's birthday coming up.\n\nWe have escalated your order with our warehouse. You can choose between:\n- Option 1: keep the order (the warehouse has been escalated)\n- Option 2: cancel the order with a full refund\n\nPlease reply and let us know which option you prefer.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C16:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: frustrated.dad@example.com\nSubject: Where is my order??\nAttachments: none\n\nI ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th. It still says processing. When will it ship? I need it before the 15th.\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"ordered October 28\", \"status still processing\", \"needed by the 15th\"], \"intents\": [{\"type\": \"SHIPPING_STATUS\", \"order_id\": \"AS-10162\", \"sku\": \"KB-04\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": \"ship before the 15th\"}]}",
     "ms": 0
    },
    {
     "id": "C16:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"ordered October 28\",\n    \"status still processing\",\n    \"needed by the 15th\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10162\",\n      \"sku\": \"KB-04\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"ship before the 15th\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10162\",\n    \"decision\": \"SHIPPING_DELAY_ESCALATE\",\n    \"business_days_unshipped\": 8,\n    \"options\": [\n      \"keep the order (warehouse escalated)\",\n      \"cancel with full refund\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C16:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: frustrated.dad@example.com\nSubject: Where is my order??\nAttachments: none\n\nI ordered the ride-on car (AS-10162) on October 28 for my son's birthday on the 15th. It still says processing. When will it ship? I need it before the 15th.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10162\",\n    \"decision\": \"SHIPPING_DELAY_ESCALATE\",\n    \"business_days_unshipped\": 8,\n    \"options\": [\n      \"keep the order (warehouse escalated)\",\n      \"cancel with full refund\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nI'm very sorry that your ride-on car order AS-10162 is still showing as processing, especially with your son's birthday coming up.\\n\\nWe have escalated your order with our warehouse. You can choose between:\\n- Option 1: keep the order (the warehouse has been escalated)\\n- Option 2: cancel the order with a full refund\\n\\nPlease reply and let us know which option you prefer.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "In transit, more than 3 days past carrier ETA 2026-11-04, no scan since 2026-10-30"
    }
   ],
   "reply": "Hello,\n\nThank you for getting in touch, and I'm sorry for the delay with your gazebo (order AS-10150). I can see the carrier ETA was 4 November and the tracking has not updated since 30 October at the FreightLine Memphis hub.\n\nAs the shipment is now more than 3 days past the expected delivery date, I have opened an investigation with the carrier, FreightLine. We will update you as soon as we hear back from them.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C17:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: patio.project@example.com\nSubject: Gazebo delivery late\nAttachments: none\n\nMy gazebo order AS-10150 was supposed to arrive by November 4. Tracking hasn't updated since October 30 in Memphis. What's going on?\n\"\"\"\n\nOrder records found:\n- AS-10150: {\"sku\":\"GZ-05\",\"amount_usd\":599,\"order_date\":\"2026-10-20\",\"status\":\"in_transit\",\"carrier\":\"FreightLine\",\"eta\":\"2026-11-04\",\"last_scan\":\"2026-10-30 Memphis hub\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"CARRIER_INVESTIGATION\", \"order_id\": \"AS-10150\", \"reason\": \"In transit, more than 3 days past carrier ETA 2026-11-04, no scan since 2026-10-30\"}], \"reply\": \"Hello,\\n\\nThank you for getting in touch, and I'm sorry for the delay with your gazebo (order AS-10150). I can see the carrier ETA was 4 November and the tracking has not updated since 30 October at the FreightLine Memphis hub.\\n\\nAs the shipment is now more than 3 days past the expected delivery date, I have opened an investigation with the carrier, FreightLine. We will update you as soon as we hear back from them.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "expected by November 4",
     "tracking stuck since October 30 in Memphis"
    ],
    "intents": [
     {
      "type": "SHIPPING_STATUS",
      "order_id": "AS-10150",
      "sku": "GZ-05",
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
      "customer_demand": null
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
   "reply": "Dear Customer,\n\nI'm sorry that your gazebo order AS-10150 has not arrived by November 4 and that tracking has not updated since October 30 at the FreightLine Memphis hub.\n\nWe have opened an investigation with the carrier, FreightLine, to locate your shipment.\n\nWe will update you by email as soon as we hear back from the carrier.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C17:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: patio.project@example.com\nSubject: Gazebo delivery late\nAttachments: none\n\nMy gazebo order AS-10150 was supposed to arrive by November 4. Tracking hasn't updated since October 30 in Memphis. What's going on?\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"expected by November 4\", \"tracking stuck since October 30 in Memphis\"], \"intents\": [{\"type\": \"SHIPPING_STATUS\", \"order_id\": \"AS-10150\", \"sku\": \"GZ-05\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}]}",
     "ms": 0
    },
    {
     "id": "C17:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"expected by November 4\",\n    \"tracking stuck since October 30 in Memphis\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10150\",\n      \"sku\": \"GZ-05\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  }\n]",
     "ms": 0
    },
    {
     "id": "C17:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: patio.project@example.com\nSubject: Gazebo delivery late\nAttachments: none\n\nMy gazebo order AS-10150 was supposed to arrive by November 4. Tracking hasn't updated since October 30 in Memphis. What's going on?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nI'm sorry that your gazebo order AS-10150 has not arrived by November 4 and that tracking has not updated since October 30 at the FreightLine Memphis hub.\\n\\nWe have opened an investigation with the carrier, FreightLine, to locate your shipment.\\n\\nWe will update you by email as soon as we hear back from the carrier.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Delivery scan 2026-11-08, less than 2 days ago; ask to check around property and with neighbours and wait 48 hours"
    }
   ],
   "reply": "Hello,\n\nThank you for letting us know, and I'm sorry your garden bed (order AS-10201) hasn't reached you even though tracking shows it was delivered yesterday by UPS.\n\nPackages marked as delivered sometimes turn up within a short time. Please check around your property (porch, back door, garage, behind bins or planters) and ask your neighbours whether they took it in for you. If it still hasn't turned up after 48 hours, please reply to this email and we will take it further.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C18:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: no.box@example.com\nSubject: Says delivered but nothing here\nAttachments: none\n\nTracking for AS-10201 says the garden bed was delivered yesterday but there's nothing at my door. Please send another one or refund me.\n\"\"\"\n\nOrder records found:\n- AS-10201: {\"sku\":\"GB-03\",\"amount_usd\":89,\"order_date\":\"2026-11-02\",\"status\":\"delivered\",\"delivered\":\"2026-11-08\",\"carrier\":\"UPS\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"WAIT_48H\", \"order_id\": \"AS-10201\", \"reason\": \"Delivery scan 2026-11-08, less than 2 days ago; ask to check around property and with neighbours and wait 48 hours\"}], \"reply\": \"Hello,\\n\\nThank you for letting us know, and I'm sorry your garden bed (order AS-10201) hasn't reached you even though tracking shows it was delivered yesterday by UPS.\\n\\nPackages marked as delivered sometimes turn up within a short time. Please check around your property (porch, back door, garage, behind bins or planters) and ask your neighbours whether they took it in for you. If it still hasn't turned up after 48 hours, please reply to this email and we will take it further.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "tracking says delivered yesterday",
     "nothing at door"
    ],
    "intents": [
     {
      "type": "NOT_RECEIVED",
      "order_id": "AS-10201",
      "sku": "GB-03",
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
      "customer_demand": "send another one or refund"
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
   "reply": "Dear Customer,\n\nI'm sorry that your garden bed (order AS-10201) shows as delivered by UPS but hasn't reached you.\n\nPackages are sometimes left in a safe place or with a neighbour. Please check around your property and with your neighbours, and allow 48 hours.\n\nIf it is still missing after 48 hours, please reply to this email and we will open a case for you.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C18:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: no.box@example.com\nSubject: Says delivered but nothing here\nAttachments: none\n\nTracking for AS-10201 says the garden bed was delivered yesterday but there's nothing at my door. Please send another one or refund me.\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"tracking says delivered yesterday\", \"nothing at door\"], \"intents\": [{\"type\": \"NOT_RECEIVED\", \"order_id\": \"AS-10201\", \"sku\": \"GB-03\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": \"send another one or refund\"}]}",
     "ms": 0
    },
    {
     "id": "C18:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"tracking says delivered yesterday\",\n    \"nothing at door\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"NOT_RECEIVED\",\n      \"order_id\": \"AS-10201\",\n      \"sku\": \"GB-03\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"send another one or refund\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"NOT_RECEIVED\",\n    \"order_id\": \"AS-10201\",\n    \"decision\": \"WAIT_48H\",\n    \"delivered_scan\": \"2026-11-08\",\n    \"carrier\": \"UPS\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C18:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: no.box@example.com\nSubject: Says delivered but nothing here\nAttachments: none\n\nTracking for AS-10201 says the garden bed was delivered yesterday but there's nothing at my door. Please send another one or refund me.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"NOT_RECEIVED\",\n    \"order_id\": \"AS-10201\",\n    \"decision\": \"WAIT_48H\",\n    \"delivered_scan\": \"2026-11-08\",\n    \"carrier\": \"UPS\"\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nI'm sorry that your garden bed (order AS-10201) shows as delivered by UPS but hasn't reached you.\\n\\nPackages are sometimes left in a safe place or with a neighbour. Please check around your property and with your neighbours, and allow 48 hours.\\n\\nIf it is still missing after 48 hours, please reply to this email and we will open a case for you.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "In transit with UPS, carrier ETA 2026-11-12"
    },
    {
     "decision": "ADDRESS_CHANGE_DENIED",
     "order_id": "AS-10240",
     "reason": "Order already shipped; address changes only while processing"
    }
   ],
   "reply": "Hi,\n\nThank you for your email.\n\nDelivery: your garden bed (order AS-10240) is in transit with UPS. The carrier's estimated delivery date is 12 November 2026; it was last scanned on 8 November in Columbus, OH.\n\nAddress change: I'm sorry, but we can only change the delivery address while an order is still processing. As your order has already shipped, we are unable to change the address to 42 Oak Street, Dublin OH.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C19:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: moving.soon@example.com\nSubject: Delivery date and address change\nAttachments: none\n\nHi, when will my garden bed (AS-10240) arrive? Also, I'm moving next week - can you change the delivery address to 42 Oak Street, Dublin OH?\n\"\"\"\n\nOrder records found:\n- AS-10240: {\"sku\":\"GB-03\",\"amount_usd\":95,\"order_date\":\"2026-11-03\",\"status\":\"in_transit\",\"carrier\":\"UPS\",\"eta\":\"2026-11-12\",\"last_scan\":\"2026-11-08 Columbus OH\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"PROVIDE_ETA\", \"order_id\": \"AS-10240\", \"reason\": \"In transit with UPS, carrier ETA 2026-11-12\"}, {\"decision\": \"ADDRESS_CHANGE_DENIED\", \"order_id\": \"AS-10240\", \"reason\": \"Order already shipped; address changes only while processing\"}], \"reply\": \"Hi,\\n\\nThank you for your email.\\n\\nDelivery: your garden bed (order AS-10240) is in transit with UPS. The carrier's estimated delivery date is 12 November 2026; it was last scanned on 8 November in Columbus, OH.\\n\\nAddress change: I'm sorry, but we can only change the delivery address while an order is still processing. As your order has already shipped, we are unable to change the address to 42 Oak Street, Dublin OH.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "moving next week",
     "new address 42 Oak Street, Dublin OH"
    ],
    "intents": [
     {
      "type": "SHIPPING_STATUS",
      "order_id": "AS-10240",
      "sku": "GB-03",
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
      "customer_demand": null
     },
     {
      "type": "ADDRESS_CHANGE",
      "order_id": "AS-10240",
      "sku": "GB-03",
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
      "customer_demand": "change address to 42 Oak Street, Dublin OH"
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
   "reply": "Dear Customer,\n\nThank you for your message about your garden bed order AS-10240.\n\nYour order is on its way with UPS and is expected to arrive on November 12, 2026.\n\nUnfortunately, as the order has already shipped, we are unable to change the delivery address on our side.\n\nIf you have any other questions, please let us know.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C19:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: moving.soon@example.com\nSubject: Delivery date and address change\nAttachments: none\n\nHi, when will my garden bed (AS-10240) arrive? Also, I'm moving next week - can you change the delivery address to 42 Oak Street, Dublin OH?\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"moving next week\", \"new address 42 Oak Street, Dublin OH\"], \"intents\": [{\"type\": \"SHIPPING_STATUS\", \"order_id\": \"AS-10240\", \"sku\": \"GB-03\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}, {\"type\": \"ADDRESS_CHANGE\", \"order_id\": \"AS-10240\", \"sku\": \"GB-03\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": \"change address to 42 Oak Street, Dublin OH\"}]}",
     "ms": 0
    },
    {
     "id": "C19:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"moving next week\",\n    \"new address 42 Oak Street, Dublin OH\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10240\",\n      \"sku\": \"GB-03\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    },\n    {\n      \"type\": \"ADDRESS_CHANGE\",\n      \"order_id\": \"AS-10240\",\n      \"sku\": \"GB-03\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"change address to 42 Oak Street, Dublin OH\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"PROVIDE_ETA\",\n    \"carrier\": \"UPS\",\n    \"eta\": \"2026-11-12\",\n    \"last_scan\": \"2026-11-08 Columbus OH\"\n  },\n  {\n    \"intent\": \"ADDRESS_CHANGE\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"ADDRESS_CHANGE_DENIED\",\n    \"reason\": \"already_shipped\",\n    \"carrier\": \"UPS\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C19:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: moving.soon@example.com\nSubject: Delivery date and address change\nAttachments: none\n\nHi, when will my garden bed (AS-10240) arrive? Also, I'm moving next week - can you change the delivery address to 42 Oak Street, Dublin OH?\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"PROVIDE_ETA\",\n    \"carrier\": \"UPS\",\n    \"eta\": \"2026-11-12\",\n    \"last_scan\": \"2026-11-08 Columbus OH\"\n  },\n  {\n    \"intent\": \"ADDRESS_CHANGE\",\n    \"order_id\": \"AS-10240\",\n    \"decision\": \"ADDRESS_CHANGE_DENIED\",\n    \"reason\": \"already_shipped\",\n    \"carrier\": \"UPS\"\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nThank you for your message about your garden bed order AS-10240.\\n\\nYour order is on its way with UPS and is expected to arrive on November 12, 2026.\\n\\nUnfortunately, as the order has already shipped, we are unable to change the delivery address on our side.\\n\\nIf you have any other questions, please let us know.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
     "reason": "Part B2 missing, reported within 30 days of delivery; B2 in stock"
    },
    {
     "decision": "CARRIER_INVESTIGATION",
     "order_id": "AS-10150",
     "reason": "In transit, more than 3 days past carrier ETA 2026-11-04, no scan since 2026-10-30"
    },
    {
     "decision": "ANSWER_QA",
     "order_id": null,
     "reason": "Spec: canopy is water-resistant, not waterproof; store cushions indoors in heavy rain"
    }
   ],
   "reply": "Hi,\n\nThank you for your message. Taking each point in turn:\n\n1) Missing part B2 (order AS-10230): I'm sorry the small crossbar B2 was missing from your swing chair. B2 is in stock, so we will reship it to you free of charge and send you the tracking details once it has been dispatched.\n\n2) Gazebo delivery (order AS-10150): I'm sorry for the delay. The carrier ETA was 4 November and tracking hasn't updated since 30 October at the FreightLine Memphis hub. As the shipment is more than 3 days past the expected date, I have opened an investigation with the carrier and we will update you as soon as we hear back.\n\n3) Swing chair canopy: according to the product specification, the canopy is water-resistant but not waterproof. In heavy rain, we recommend storing the cushions indoors. The frame is rust-resistant.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C20:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: busy.owner@example.com\nSubject: A few issues\nAttachments: none\n\nHi team, a few things:\n1) My swing chair (AS-10230) arrived without part B2, the small crossbar.\n2) My gazebo order AS-10150 is late and tracking is stuck.\n3) Is the swing chair canopy waterproof? We get heavy rain.\nThanks.\n\"\"\"\n\nOrder records found:\n- AS-10230: {\"sku\":\"SW-01\",\"amount_usd\":279,\"order_date\":\"2026-10-28\",\"status\":\"delivered\",\"delivered\":\"2026-11-06\",\"country\":\"US\"}\n- AS-10150: {\"sku\":\"GZ-05\",\"amount_usd\":599,\"order_date\":\"2026-10-20\",\"status\":\"in_transit\",\"carrier\":\"FreightLine\",\"eta\":\"2026-11-04\",\"last_scan\":\"2026-10-30 Memphis hub\",\"country\":\"US\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"RESHIP_PARTS\", \"order_id\": \"AS-10230\", \"reason\": \"Part B2 missing, reported within 30 days of delivery; B2 in stock\"}, {\"decision\": \"CARRIER_INVESTIGATION\", \"order_id\": \"AS-10150\", \"reason\": \"In transit, more than 3 days past carrier ETA 2026-11-04, no scan since 2026-10-30\"}, {\"decision\": \"ANSWER_QA\", \"order_id\": null, \"reason\": \"Spec: canopy is water-resistant, not waterproof; store cushions indoors in heavy rain\"}], \"reply\": \"Hi,\\n\\nThank you for your message. Taking each point in turn:\\n\\n1) Missing part B2 (order AS-10230): I'm sorry the small crossbar B2 was missing from your swing chair. B2 is in stock, so we will reship it to you free of charge and send you the tracking details once it has been dispatched.\\n\\n2) Gazebo delivery (order AS-10150): I'm sorry for the delay. The carrier ETA was 4 November and tracking hasn't updated since 30 October at the FreightLine Memphis hub. As the shipment is more than 3 days past the expected date, I have opened an investigation with the carrier and we will update you as soon as we hear back.\\n\\n3) Swing chair canopy: according to the product specification, the canopy is water-resistant but not waterproof. In heavy rain, we recommend storing the cushions indoors. The frame is rust-resistant.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "part B2 missing",
     "gazebo tracking stuck"
    ],
    "intents": [
     {
      "type": "MISSING_PARTS",
      "order_id": "AS-10230",
      "sku": "SW-01",
      "part_codes": [
       "B2"
      ],
      "severity": null,
      "component": "small crossbar (B2)",
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
      "sku": "GZ-05",
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
      "customer_demand": null
     },
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
       "WEATHER"
      ],
      "has_photo": false,
      "has_video": false,
      "customer_demand": null
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
   "reply": "Dear Customer,\n\nThank you for your message, and I'm sorry for the trouble with your orders.\n\n1) Swing chair (AS-10230): we will reship the missing part B2 (small crossbar). The tracking number will follow by email.\n2) Gazebo (AS-10150): I apologise for the delay. We have opened an investigation with the carrier, FreightLine, as tracking has not updated since the Memphis hub.\n3) Swing chair canopy: the canopy is water-resistant, not waterproof. In heavy rain, please store the cushions indoors; the frame is rust-resistant.\n\nWe will keep you updated by email.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C20:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: busy.owner@example.com\nSubject: A few issues\nAttachments: none\n\nHi team, a few things:\n1) My swing chair (AS-10230) arrived without part B2, the small crossbar.\n2) My gazebo order AS-10150 is late and tracking is stuck.\n3) Is the swing chair canopy waterproof? We get heavy rain.\nThanks.\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": false, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"part B2 missing\", \"gazebo tracking stuck\"], \"intents\": [{\"type\": \"MISSING_PARTS\", \"order_id\": \"AS-10230\", \"sku\": \"SW-01\", \"part_codes\": [\"B2\"], \"severity\": null, \"component\": \"small crossbar (B2)\", \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}, {\"type\": \"SHIPPING_STATUS\", \"order_id\": \"AS-10150\", \"sku\": \"GZ-05\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}, {\"type\": \"PRODUCT_QA\", \"order_id\": null, \"sku\": \"SW-01\", \"part_codes\": [], \"severity\": null, \"component\": null, \"repeat_issue\": false, \"units_affected\": 1, \"item_condition\": \"UNKNOWN\", \"reason\": \"OTHER\", \"target_variant\": null, \"qa_topics\": [\"WEATHER\"], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}]}",
     "ms": 0
    },
    {
     "id": "C20:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": false,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"part B2 missing\",\n    \"gazebo tracking stuck\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"MISSING_PARTS\",\n      \"order_id\": \"AS-10230\",\n      \"sku\": \"SW-01\",\n      \"part_codes\": [\n        \"B2\"\n      ],\n      \"severity\": null,\n      \"component\": \"small crossbar (B2)\",\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    },\n    {\n      \"type\": \"SHIPPING_STATUS\",\n      \"order_id\": \"AS-10150\",\n      \"sku\": \"GZ-05\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    },\n    {\n      \"type\": \"PRODUCT_QA\",\n      \"order_id\": null,\n      \"sku\": \"SW-01\",\n      \"part_codes\": [],\n      \"severity\": null,\n      \"component\": null,\n      \"repeat_issue\": false,\n      \"units_affected\": 1,\n      \"item_condition\": \"UNKNOWN\",\n      \"reason\": \"OTHER\",\n      \"target_variant\": null,\n      \"qa_topics\": [\n        \"WEATHER\"\n      ],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10230\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"B2\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  },\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  },\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"SW-01\",\n    \"product\": \"3-Seat Patio Swing Chair\",\n    \"facts\": {\n      \"WEATHER\": \"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\"\n    }\n  }\n]",
     "ms": 0
    },
    {
     "id": "C20:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: busy.owner@example.com\nSubject: A few issues\nAttachments: none\n\nHi team, a few things:\n1) My swing chair (AS-10230) arrived without part B2, the small crossbar.\n2) My gazebo order AS-10150 is late and tracking is stuck.\n3) Is the swing chair canopy waterproof? We get heavy rain.\nThanks.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"MISSING_PARTS\",\n    \"order_id\": \"AS-10230\",\n    \"decision\": \"RESHIP_PARTS\",\n    \"parts\": [\n      \"B2\"\n    ],\n    \"product\": \"3-Seat Patio Swing Chair\"\n  },\n  {\n    \"intent\": \"SHIPPING_STATUS\",\n    \"order_id\": \"AS-10150\",\n    \"decision\": \"CARRIER_INVESTIGATION\",\n    \"carrier\": \"FreightLine\",\n    \"original_eta\": \"2026-11-04\",\n    \"last_scan\": \"2026-10-30 Memphis hub\",\n    \"days_late\": 5\n  },\n  {\n    \"intent\": \"PRODUCT_QA\",\n    \"order_id\": null,\n    \"decision\": \"ANSWER_QA\",\n    \"sku\": \"SW-01\",\n    \"product\": \"3-Seat Patio Swing Chair\",\n    \"facts\": {\n      \"WEATHER\": \"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\"\n    }\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nThank you for your message, and I'm sorry for the trouble with your orders.\\n\\n1) Swing chair (AS-10230): we will reship the missing part B2 (small crossbar). The tracking number will follow by email.\\n2) Gazebo (AS-10150): I apologise for the delay. We have opened an investigation with the carrier, FreightLine, as tracking has not updated since the Memphis hub.\\n3) Swing chair canopy: the canopy is water-resistant, not waterproof. In heavy rain, please store the cushions indoors; the frame is rust-resistant.\\n\\nWe will keep you updated by email.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
    "QUALITY_ESCALATION"
   ],
   "detail": [
    {
     "decision": "QUALITY_ESCALATION",
     "order_id": "EB-58201",
     "reason": "Repeat structural defect: second hutch with mesh weld failure (prior case TK-UK-20260929-000731); order 258 USD; log against SKU D51-105V01, offer different-batch replacement after QC or full refund"
    }
   ],
   "reply": "Hello,\n\nThank you for your message and the photos. I'm very sorry that a second hutch from your order EB-58201 now has the same problem - the welded wire mesh on the front door has come away from its welds. I can see from our records that this follows the earlier case for the first hutch, and I understand why you are unhappy with the mesh quality.\n\nBecause this is the same failure on a second unit, I have escalated it to our quality team and logged the defect against this product so it can be investigated. For this hutch, we can offer you either:\n1. A replacement hutch from a different production batch, quality-checked before it is sent to you, or\n2. A full refund for this hutch.\n\nThe replacement is shipped first: you will not need to dismantle, return or wait for collection of the damaged hutch before the new one arrives.\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nPlease reply with the option you prefer and we will arrange it.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C21:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: buyer-7f3a sent a message about Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: photo_1.jpg, photo_2.jpg\n\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n\n[Attachment descriptions, generated by the image step]\n- photo_1.jpg: Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.\n- photo_2.jpg: Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"QUALITY_ESCALATION\", \"order_id\": \"EB-58201\", \"reason\": \"Repeat structural defect: second hutch with mesh weld failure (prior case TK-UK-20260929-000731); order 258 USD; log against SKU D51-105V01, offer different-batch replacement after QC or full refund\"}], \"reply\": \"Hello,\\n\\nThank you for your message and the photos. I'm very sorry that a second hutch from your order EB-58201 now has the same problem - the welded wire mesh on the front door has come away from its welds. I can see from our records that this follows the earlier case for the first hutch, and I understand why you are unhappy with the mesh quality.\\n\\nBecause this is the same failure on a second unit, I have escalated it to our quality team and logged the defect against this product so it can be investigated. For this hutch, we can offer you either:\\n1. A replacement hutch from a different production batch, quality-checked before it is sent to you, or\\n2. A full refund for this hutch.\\n\\nThe replacement is shipped first: you will not need to dismantle, return or wait for collection of the damaged hutch before the new one arrives.\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nPlease reply with the option you prefer and we will arrange it.\\n\\nKind regards,\\nCustomer Service\"}",
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
     "second cage with failed mesh",
     "mesh wires broken from welds on 2 cages (photos)"
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
      "customer_demand": "better mesh"
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
      "replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)",
      "full refund"
     ],
     "order_qty": 3,
     "log": {
      "sku": "D51-105V01",
      "defect": "repeat structural failure",
      "orders": [
       "EB-58201"
      ]
     },
     "safety_notice": "For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced."
    }
   ],
   "reply": "Dear Customer,\n\nWe are very sorry that the front mesh door has failed on a second hutch, and thank you for the photos.\n\nAs this is a repeat problem with the front mesh door on 2 of your 3 cages, it has been reported to our quality team.\n\nPlease choose the option you prefer:\n- Option 1: a replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\n- Option 2: a full refund\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nPlease reply with your choice and we will arrange it.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C21:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: buyer-7f3a sent a message about Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: photo_1.jpg, photo_2.jpg\n\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n\n[Attachment descriptions, generated by the image step]\n- photo_1.jpg: Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.\n- photo_2.jpg: Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": true, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [], \"customer_choice\": null, \"info_already_given\": [\"second cage with failed mesh\", \"mesh wires broken from welds on 2 cages (photos)\"], \"intents\": [{\"type\": \"DEFECT_WARRANTY\", \"order_id\": null, \"sku\": \"D51-105V01\", \"part_codes\": [], \"severity\": \"STRUCTURAL\", \"component\": \"front mesh door\", \"repeat_issue\": true, \"units_affected\": 2, \"item_condition\": \"USED\", \"reason\": \"DEFECT\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": true, \"has_video\": false, \"customer_demand\": \"better mesh\"}]}",
     "ms": 0
    },
    {
     "id": "C21:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"second cage with failed mesh\",\n    \"mesh wires broken from welds on 2 cages (photos)\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"better mesh\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"log\": {\n      \"sku\": \"D51-105V01\",\n      \"defect\": \"repeat structural failure\",\n      \"orders\": [\n        \"EB-58201\"\n      ]\n    },\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C21:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: buyer-7f3a sent a message about Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: photo_1.jpg, photo_2.jpg\n\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n\n[Attachment descriptions, generated by the image step]\n- photo_1.jpg: Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside.\n- photo_2.jpg: Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"log\": {\n      \"sku\": \"D51-105V01\",\n      \"defect\": \"repeat structural failure\",\n      \"orders\": [\n        \"EB-58201\"\n      ]\n    },\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\"\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nWe are very sorry that the front mesh door has failed on a second hutch, and thank you for the photos.\\n\\nAs this is a repeat problem with the front mesh door on 2 of your 3 cages, it has been reported to our quality team.\\n\\nPlease choose the option you prefer:\\n- Option 1: a replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\\n- Option 2: a full refund\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nPlease reply with your choice and we will arrange it.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
    "QUALITY_ESCALATION"
   ],
   "detail": [
    {
     "decision": "QUALITY_ESCALATION",
     "order_id": "EB-58201",
     "reason": "Repeat mesh weld failure on 2 of 3 hutches (prior case TK-UK-20260929-000731); order 258 USD; withdraw self-repair/15% offer, log against SKU, offer different-batch replacement after QC or full refund for the 2 affected hutches"
    }
   ],
   "reply": "Hello,\n\nThank you for your reply. You are right - this is the second hutch from your order EB-58201 with the mesh coming away from its welds, and that is not acceptable for a product you bought three of. I'm also very glad your ferret hasn't been able to get out.\n\nI'd also like to correct our previous message: we should not have asked you to keep the hutch and source a repair yourself. Please don't attempt to repair it.\n\nAs this is the same failure on two hutches, I have escalated it to our quality team and logged the defect against this product. For the 2 hutches with broken mesh, we can offer you either:\n1. Replacement hutches from a different production batch, quality-checked before they are sent, or\n2. A full refund for each affected hutch.\n\nReplacements are shipped first: you won't need to dismantle, return or wait for collection of the damaged hutches before the new ones arrive.\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nPlease let us know which option you'd prefer and we'll arrange it.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C22:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- end of earlier messages ---\n\n[New customer message]\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"QUALITY_ESCALATION\", \"order_id\": \"EB-58201\", \"reason\": \"Repeat mesh weld failure on 2 of 3 hutches (prior case TK-UK-20260929-000731); order 258 USD; withdraw self-repair/15% offer, log against SKU, offer different-batch replacement after QC or full refund for the 2 affected hutches\"}], \"reply\": \"Hello,\\n\\nThank you for your reply. You are right - this is the second hutch from your order EB-58201 with the mesh coming away from its welds, and that is not acceptable for a product you bought three of. I'm also very glad your ferret hasn't been able to get out.\\n\\nI'd also like to correct our previous message: we should not have asked you to keep the hutch and source a repair yourself. Please don't attempt to repair it.\\n\\nAs this is the same failure on two hutches, I have escalated it to our quality team and logged the defect against this product. For the 2 hutches with broken mesh, we can offer you either:\\n1. Replacement hutches from a different production batch, quality-checked before they are sent, or\\n2. A full refund for each affected hutch.\\n\\nReplacements are shipped first: you won't need to dismantle, return or wait for collection of the damaged hutches before the new ones arrive.\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nPlease let us know which option you'd prefer and we'll arrange it.\\n\\nKind regards,\\nCustomer Service\"}",
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
    "score": 0.9400000000000001,
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
      "reject_reason": "not good enough; second failure, bought 3 cages"
     }
    ],
    "customer_choice": null,
    "info_already_given": [
     "second cage with failed mesh",
     "mesh wires broken from welds on 2 cages (photos)",
     "bought 3 cages",
     "ferret has not escaped yet"
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
      "customer_demand": null
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
      "replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)",
      "full refund"
     ],
     "order_qty": 3,
     "log": {
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
      "PARTIAL_REFUND 15% (not good enough; second failure, bought 3 cages)"
     ]
    }
   ],
   "reply": "Dear Customer,\n\nWe are very sorry that the front mesh door has failed on a second hutch, and I completely understand your frustration after buying 3 cages.\n\nYou do not need to repair it yourself; please disregard that earlier suggestion. This repeat problem with the front mesh door on 2 units has been reported to our quality team.\n\nPlease choose the option you prefer:\n- Option 1: a replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\n- Option 2: a full refund\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nPlease reply with your choice.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C22:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- end of earlier messages ---\n\n[New customer message]\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": true, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [{\"type\": \"PARTIAL_REFUND\", \"pct\": 15, \"units\": 1, \"status\": \"REJECTED\", \"reject_reason\": \"not good enough; second failure, bought 3 cages\"}], \"customer_choice\": null, \"info_already_given\": [\"second cage with failed mesh\", \"mesh wires broken from welds on 2 cages (photos)\", \"bought 3 cages\", \"ferret has not escaped yet\"], \"intents\": [{\"type\": \"DEFECT_WARRANTY\", \"order_id\": null, \"sku\": \"D51-105V01\", \"part_codes\": [], \"severity\": \"STRUCTURAL\", \"component\": \"front mesh door\", \"repeat_issue\": true, \"units_affected\": 2, \"item_condition\": \"USED\", \"reason\": \"DEFECT\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": true, \"has_video\": false, \"customer_demand\": null}]}",
     "ms": 0
    },
    {
     "id": "C22:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"not good enough; second failure, bought 3 cages\"\n    }\n  ],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"second cage with failed mesh\",\n    \"mesh wires broken from welds on 2 cages (photos)\",\n    \"bought 3 cages\",\n    \"ferret has not escaped yet\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"log\": {\n      \"sku\": \"D51-105V01\",\n      \"defect\": \"repeat structural failure\",\n      \"orders\": [\n        \"EB-58201\"\n      ]\n    },\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (not good enough; second failure, bought 3 cages)\"\n    ]\n  }\n]",
     "ms": 0
    },
    {
     "id": "C22:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- end of earlier messages ---\n\n[New customer message]\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"log\": {\n      \"sku\": \"D51-105V01\",\n      \"defect\": \"repeat structural failure\",\n      \"orders\": [\n        \"EB-58201\"\n      ]\n    },\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (not good enough; second failure, bought 3 cages)\"\n    ]\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nWe are very sorry that the front mesh door has failed on a second hutch, and I completely understand your frustration after buying 3 cages.\\n\\nYou do not need to repair it yourself; please disregard that earlier suggestion. This repeat problem with the front mesh door on 2 units has been reported to our quality team.\\n\\nPlease choose the option you prefer:\\n- Option 1: a replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\\n- Option 2: a full refund\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nPlease reply with your choice.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
    "QUALITY_ESCALATION",
    "ASK_INFO"
   ],
   "detail": [
    {
     "decision": "QUALITY_ESCALATION",
     "order_id": "EB-58201",
     "reason": "Repeat mesh weld failure on 2 hutches (prior case); 258 USD; customer rejected collection-first replacement and 30% offer; offer different-batch replacements shipped first without collection, or full refund"
    },
    {
     "decision": "ASK_INFO",
     "order_id": "EB-58201",
     "reason": "New issue: rusty metal trays on all 3 hutches; photo needed to process warranty"
    }
   ],
   "reply": "Hello,\n\nThank you for your message, and I'm sorry for the frustration this has caused. I understand you can't be left without somewhere safe to keep your ferrets, and that on top of the broken mesh, the metal trays on all 3 hutches have now gone rusty after a short time.\n\nFirst, a correction: our earlier message asking you to keep the hutch and source a repair yourself was not right - please don't attempt any repairs.\n\nBroken mesh (2 hutches): as this is the same failure on two hutches, I have escalated it to our quality team and logged the defect against this product. For these 2 hutches we can offer either:\n1. Replacement hutches from a different production batch, quality-checked before dispatch, or\n2. A full refund for each affected hutch.\nThe replacements are shipped first - you do not need to dismantle anything, arrange a collection, or be without a hutch while you wait. You can keep using your current hutches until the new ones arrive.\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nRusty trays (3 hutches): this is covered by the warranty. So that we can process it, please send us a photo of the rusty trays from each of the 3 hutches.\n\nPlease let us know which option you prefer for the 2 hutches with broken mesh, and send the tray photos when you can.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C23:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- end of earlier messages ---\n\n[New customer message]\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"QUALITY_ESCALATION\", \"order_id\": \"EB-58201\", \"reason\": \"Repeat mesh weld failure on 2 hutches (prior case); 258 USD; customer rejected collection-first replacement and 30% offer; offer different-batch replacements shipped first without collection, or full refund\"}, {\"decision\": \"ASK_INFO\", \"order_id\": \"EB-58201\", \"reason\": \"New issue: rusty metal trays on all 3 hutches; photo needed to process warranty\"}], \"reply\": \"Hello,\\n\\nThank you for your message, and I'm sorry for the frustration this has caused. I understand you can't be left without somewhere safe to keep your ferrets, and that on top of the broken mesh, the metal trays on all 3 hutches have now gone rusty after a short time.\\n\\nFirst, a correction: our earlier message asking you to keep the hutch and source a repair yourself was not right - please don't attempt any repairs.\\n\\nBroken mesh (2 hutches): as this is the same failure on two hutches, I have escalated it to our quality team and logged the defect against this product. For these 2 hutches we can offer either:\\n1. Replacement hutches from a different production batch, quality-checked before dispatch, or\\n2. A full refund for each affected hutch.\\nThe replacements are shipped first - you do not need to dismantle anything, arrange a collection, or be without a hutch while you wait. You can keep using your current hutches until the new ones arrive.\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nRusty trays (3 hutches): this is covered by the warranty. So that we can process it, please send us a photo of the rusty trays from each of the 3 hutches.\\n\\nPlease let us know which option you prefer for the 2 hutches with broken mesh, and send the tray photos when you can.\\n\\nKind regards,\\nCustomer Service\"}",
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
      "reject_reason": "not good enough; second failure, bought 3 cages"
     },
     {
      "type": "PARTIAL_REFUND",
      "pct": 30,
      "units": 1,
      "status": "REJECTED",
      "reject_reason": "30% too little for condition and cost of new cages"
     },
     {
      "type": "REPLACEMENT_WITH_COLLECTION",
      "pct": null,
      "units": 1,
      "status": "REJECTED",
      "reject_reason": "nowhere to keep ferrets while waiting"
     }
    ],
    "customer_choice": null,
    "info_already_given": [
     "second cage with failed mesh",
     "mesh wires broken from welds on 2 cages (photos)",
     "bought 3 cages",
     "all metal trays rusty",
     "cannot rely on cages to keep ferrets safe"
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
      "customer_demand": null
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
      "customer_demand": null
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
      "replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)",
      "full refund"
     ],
     "order_qty": 3,
     "log": {
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
      "PARTIAL_REFUND 15% (not good enough; second failure, bought 3 cages)",
      "PARTIAL_REFUND 30% (30% too little for condition and cost of new cages)",
      "REPLACEMENT_WITH_COLLECTION (nowhere to keep ferrets while waiting)"
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
   "reply": "Dear Customer,\n\nWe are very sorry for the repeated problems with your hutches and that you have had to write to us again. I understand the earlier offers did not work for you.\n\nYou do not need to repair it yourself; please disregard that earlier suggestion. The repeat failure of the front mesh door on 2 units has been reported to our quality team.\n\nPlease choose the option you prefer:\n- Option 1: a replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\n- Option 2: a full refund\n\nRegarding the rusty metal trays, could you please send a photo or short video of the issue on all 3 trays?\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C23:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- end of earlier messages ---\n\n[New customer message]\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": true, \"dispute\": false, \"dispute_type\": null, \"previous_offers\": [{\"type\": \"PARTIAL_REFUND\", \"pct\": 15, \"units\": 1, \"status\": \"REJECTED\", \"reject_reason\": \"not good enough; second failure, bought 3 cages\"}, {\"type\": \"PARTIAL_REFUND\", \"pct\": 30, \"units\": 1, \"status\": \"REJECTED\", \"reject_reason\": \"30% too little for condition and cost of new cages\"}, {\"type\": \"REPLACEMENT_WITH_COLLECTION\", \"pct\": null, \"units\": 1, \"status\": \"REJECTED\", \"reject_reason\": \"nowhere to keep ferrets while waiting\"}], \"customer_choice\": null, \"info_already_given\": [\"second cage with failed mesh\", \"mesh wires broken from welds on 2 cages (photos)\", \"bought 3 cages\", \"all metal trays rusty\", \"cannot rely on cages to keep ferrets safe\"], \"intents\": [{\"type\": \"DEFECT_WARRANTY\", \"order_id\": null, \"sku\": \"D51-105V01\", \"part_codes\": [], \"severity\": \"STRUCTURAL\", \"component\": \"front mesh door\", \"repeat_issue\": true, \"units_affected\": 2, \"item_condition\": \"USED\", \"reason\": \"DEFECT\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": true, \"has_video\": false, \"customer_demand\": null}, {\"type\": \"DEFECT_WARRANTY\", \"order_id\": null, \"sku\": \"D51-105V01\", \"part_codes\": [], \"severity\": \"UNKNOWN\", \"component\": \"metal tray\", \"repeat_issue\": false, \"units_affected\": 3, \"item_condition\": \"USED\", \"reason\": \"DEFECT\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": null}]}",
     "ms": 0
    },
    {
     "id": "C23:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": false,\n  \"dispute_type\": null,\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"not good enough; second failure, bought 3 cages\"\n    },\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 30,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"30% too little for condition and cost of new cages\"\n    },\n    {\n      \"type\": \"REPLACEMENT_WITH_COLLECTION\",\n      \"pct\": null,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"nowhere to keep ferrets while waiting\"\n    }\n  ],\n  \"customer_choice\": null,\n  \"info_already_given\": [\n    \"second cage with failed mesh\",\n    \"mesh wires broken from welds on 2 cages (photos)\",\n    \"bought 3 cages\",\n    \"all metal trays rusty\",\n    \"cannot rely on cages to keep ferrets safe\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": null\n    },\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"metal tray\",\n      \"repeat_issue\": false,\n      \"units_affected\": 3,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": null\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"log\": {\n      \"sku\": \"D51-105V01\",\n      \"defect\": \"repeat structural failure\",\n      \"orders\": [\n        \"EB-58201\"\n      ]\n    },\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (not good enough; second failure, bought 3 cages)\",\n      \"PARTIAL_REFUND 30% (30% too little for condition and cost of new cages)\",\n      \"REPLACEMENT_WITH_COLLECTION (nowhere to keep ferrets while waiting)\"\n    ],\n    \"priority\": true\n  },\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"missing_evidence\",\n    \"ask\": [\n      \"photo or short video of the metal tray issue (3 unit(s))\"\n    ],\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C23:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- end of earlier messages ---\n\n[New customer message]\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"QUALITY_ESCALATION\",\n    \"sku\": \"D51-105V01\",\n    \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n    \"component\": \"front mesh door\",\n    \"units_affected\": 2,\n    \"prior_cases\": [\n      \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n    ],\n    \"options\": [\n      \"replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n      \"full refund\"\n    ],\n    \"order_qty\": 3,\n    \"log\": {\n      \"sku\": \"D51-105V01\",\n      \"defect\": \"repeat structural failure\",\n      \"orders\": [\n        \"EB-58201\"\n      ]\n    },\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\",\n    \"corrections\": [\n      \"You do not need to repair it yourself; please disregard that earlier suggestion.\"\n    ],\n    \"do_not_offer\": [\n      \"PARTIAL_REFUND 15% (not good enough; second failure, bought 3 cages)\",\n      \"PARTIAL_REFUND 30% (30% too little for condition and cost of new cages)\",\n      \"REPLACEMENT_WITH_COLLECTION (nowhere to keep ferrets while waiting)\"\n    ],\n    \"priority\": true\n  },\n  {\n    \"intent\": \"DEFECT_WARRANTY\",\n    \"order_id\": \"EB-58201\",\n    \"decision\": \"ASK_INFO\",\n    \"reason\": \"missing_evidence\",\n    \"ask\": [\n      \"photo or short video of the metal tray issue (3 unit(s))\"\n    ],\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\"\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nWe are very sorry for the repeated problems with your hutches and that you have had to write to us again. I understand the earlier offers did not work for you.\\n\\nYou do not need to repair it yourself; please disregard that earlier suggestion. The repeat failure of the front mesh door on 2 units has been reported to our quality team.\\n\\nPlease choose the option you prefer:\\n- Option 1: a replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\\n- Option 2: a full refund\\n\\nRegarding the rusty metal trays, could you please send a photo or short video of the issue on all 3 trays?\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
    "HANDOFF",
    "QUALITY_ESCALATION"
   ],
   "detail": [
    {
     "decision": "HANDOFF",
     "order_id": "EB-58201",
     "reason": "Customer requests replacement of all 3 hutches and threatens to escalate to eBay; priority specialist handoff"
    },
    {
     "decision": "QUALITY_ESCALATION",
     "order_id": "EB-58201",
     "reason": "Repeat mesh weld failure plus rusty trays across 3 units of SKU D51-105V01; log defect against SKU"
    }
   ],
   "reply": "Hello,\n\nThank you for your message, and I'm sorry you've had to write to us so many times about this. I understand that all 3 hutches from your order EB-58201 have problems - broken mesh on two of them and rusty trays - and that you are asking for all 3 to be replaced rather than just one.\n\nI have passed your case, including your request for 3 replacement hutches, to a specialist as a priority, and the defects have been logged with our quality team against this product. The specialist will contact you about the next steps.\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nKind regards,\nCustomer Service",
   "trace": [
    {
     "id": "C24:baseline",
     "stage": "baseline",
     "system": "You are a customer service agent for a cross-border outdoor furniture brand. Today is 2026-11-09.\nFollow the policy strictly and reply to the customer email.\n\nAfter-sales policy (demo, version 2026-11-demo)\n1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under \"Order records\"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.\n2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.\n3. Missing parts in stock: reship the parts. Out of stock: hand off.\n4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.\n5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.\n6. Injury, safety hazard, lawyer, lawsuit or media: hand off immediately, apologize only, do not discuss cause, liability or compensation. Chargeback, payment dispute, or a threat to open a marketplace case / leave feedback: hand off to a specialist as a priority; in the reply acknowledge the customer's specific requests and keep any safety advice, but do not promise an outcome, compensation or timeframe.\n7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.\n8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.\n9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.\n10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.\n11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.\n12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.\n13. Address changes only while the order is still processing (not shipped).\n14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.\n15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.\n16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.\n17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\" If an animal has actually been injured, treat it as a safety case (rule 6). Replacements for animal enclosures are shipped first: the customer does not need to dismantle, return or wait for collection of the old one before the new one arrives.\n18. Multi-turn conversations: read the earlier messages, including our own replies. Do not offer again an option the customer has rejected. If the customer has already chosen an option allowed by policy, confirm it instead of asking again. Do not ask again for information the customer has already given. If an earlier reply from our team asked the customer to repair the item themselves, correct that. Treat each distinct problem (e.g. broken mesh on 2 units, rusty trays on 3 units) separately, with its own unit count.\n\nDecision vocabulary (use only these): RESHIP_PARTS, OFFER_PARTS_OR_PARTIAL_REFUND, OFFER_REPLACEMENT_OR_REFUND, HANDOFF, WARRANTY_PARTS, OUT_OF_WARRANTY, RETURN_ALLOWED, DECLINE_RETURN, EXCHANGE, ANSWER_QA, QA_UNKNOWN, SHIPPING_DELAY_ESCALATE, CARRIER_INVESTIGATION, WAIT_48H, PROVIDE_ETA, ADDRESS_CHANGE_OK, ADDRESS_CHANGE_DENIED, ASK_INFO, QUALITY_ESCALATION.\nUse one decision per distinct customer request. If you hand off to a specialist, use HANDOFF.\n\nReturn JSON only:\n{\"decisions\":[{\"decision\":\"<one of the vocabulary>\",\"order_id\":\"<id or null>\",\"reason\":\"<short>\"}],\"reply\":\"<the email reply to the customer>\"}",
     "user": "Customer email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- 5. Customer ---\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n--- 6. Agent (sent) ---\nDear Customer,\n\nThanks for your message. We are sorry for the inconvenience caused.\n\nConsidering the situation of your item, as we do not want to inconvenience you any further, we would like to send out a full replacement of one item for you without the collection of original item. Please note, delivery can take 3-5 working days to arrive from date of input.\n\nIn order for us to proceed, please respond to this message confirming your acceptance of the above.\n\nKind regards,\n[Agent C]\n--- end of earlier messages ---\n\n[New customer message]\nAll 3 cages have all got something wrong with them thank u for the offer of 1 but we need all 3 replacement this isn't good enough I shouldn't have to be sending all these messages I will be going.to ebay them.self if this doesn't get sorted ASAP\n\"\"\"\n\nOrder records found:\n- EB-58201: {\"sku\":\"D51-105V01\",\"qty\":3,\"amount_usd\":258,\"order_date\":\"2026-09-12\",\"status\":\"delivered\",\"delivered\":\"2026-09-17\",\"country\":\"UK\",\"channel\":\"ebay\",\"prior_case\":\"TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"}\n\nProduct catalog:\n- SW-01 3-Seat Patio Swing Chair | oversize: true | variants in stock: {\"grey\":6,\"beige\":12,\"green\":0} | parts stock: {\"A1\":20,\"A2\":15,\"B2\":8,\"C4\":30,\"C5\":12,\"C6\":0}\n  spec: {\"MAX_LOAD\":\"Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.\",\"DIMENSIONS\":\"Assembled 198 x 120 x 172 cm; package weight 48 kg.\",\"MATERIAL\":\"Powder-coated steel frame; polyester canopy and cushions.\",\"WEATHER\":\"Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.\",\"ASSEMBLY\":\"Two adults, about 90 minutes. All tools included.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months on frame and parts from delivery date.\"}\n- PT-02 6-Seat Acacia Patio Dining Table | oversize: true | variants in stock: {\"natural\":9} | parts stock: {\"L1\":10,\"L2\":10,\"T1\":2}\n  spec: {\"MAX_LOAD\":\"Tabletop static load up to 80 kg.\",\"DIMENSIONS\":\"180 x 90 x 74 cm; package weight 35 kg.\",\"MATERIAL\":\"Solid acacia wood with oil finish; steel connecting hardware.\",\"WEATHER\":\"Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.\",\"CARE\":\"Wipe with damp cloth; apply teak or acacia oil every 6-12 months.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- GB-03 Galvanized Steel Raised Garden Bed 240 cm | oversize: false | variants in stock: {\"silver\":40} | parts stock: {\"P1\":50,\"P2\":50,\"S1\":200}\n  spec: {\"DIMENSIONS\":\"240 x 90 x 30 cm; package weight 18 kg.\",\"MATERIAL\":\"Galvanized steel panels with zinc-aluminium coating.\",\"WEATHER\":\"Outdoor use, all seasons.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- KB-04 12V Kids Ride-On Car | oversize: false | variants in stock: {\"red\":15,\"white\":7} | parts stock: {\"BAT12V\":25,\"CHG12V\":30,\"WHEEL\":40}\n  spec: {\"MAX_LOAD\":\"Max load 30 kg (66 lb).\",\"AGE_RANGE\":\"Recommended for ages 3-6.\",\"BATTERY\":\"12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.\",\"DIMENSIONS\":\"106 x 62 x 48 cm; package weight 19 kg.\",\"CERTIFICATION\":\"ASTM F963 tested.\",\"WARRANTY\":\"12 months; battery and charger included.\"}\n- GZ-05 3 x 4 m Aluminium Hardtop Gazebo | oversize: true | variants in stock: {\"grey\":4} | parts stock: {\"R1\":6,\"POST\":3,\"ANCHOR\":40}\n  spec: {\"DIMENSIONS\":\"300 x 400 x 265 cm; ships in 3 packages, total 96 kg.\",\"MATERIAL\":\"Aluminium frame with polycarbonate roof panels.\",\"WEATHER\":\"Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.\",\"ASSEMBLY\":\"Three to four adults, about 6 hours.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- DC-06 XL Wooden Dog Crate Furniture | oversize: true | variants in stock: {\"white\":10,\"walnut\":5} | parts stock: {\"DOOR\":4,\"PANEL\":6}\n  spec: {\"DIMENSIONS\":\"112 x 66 x 80 cm; suitable for dogs up to 40 kg.\",\"MATERIAL\":\"MDF and pine; steel mesh door.\",\"WEATHER\":\"Indoor use only. Not suitable for outdoor use or damp areas.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}\n- OF-07 Ergonomic Mesh Office Chair | oversize: false | variants in stock: {\"black\":30} | parts stock: {\"GASLIFT\":18,\"CASTER\":60,\"ARMREST\":10}\n  spec: {\"MAX_LOAD\":\"Max load 120 kg (265 lb). Class 4 gas lift.\",\"DIMENSIONS\":\"Seat height 45-55 cm; package weight 14 kg.\",\"MATERIAL\":\"Mesh back, nylon base.\",\"CERTIFICATION\":\"BIFMA X5.1 tested.\",\"WARRANTY\":\"12 months from delivery date.\"}\n- D51-105V01 Wooden Rabbit Hutch with Hinged Top | oversize: false | variants in stock: {\"natural\":25} | parts stock: {}\n  spec: {\"DIMENSIONS\":\"91.5 x 45 x 70 cm; package weight 13 kg.\",\"MATERIAL\":\"Fir wood frame; galvanized welded wire mesh front panel.\",\"WEATHER\":\"Outdoor use with waterproof asphalt roof; treat wood yearly.\",\"CERTIFICATION\":null,\"WARRANTY\":\"12 months from delivery date.\"}",
     "response": "{\"decisions\": [{\"decision\": \"HANDOFF\", \"order_id\": \"EB-58201\", \"reason\": \"Customer requests replacement of all 3 hutches and threatens to escalate to eBay; priority specialist handoff\"}, {\"decision\": \"QUALITY_ESCALATION\", \"order_id\": \"EB-58201\", \"reason\": \"Repeat mesh weld failure plus rusty trays across 3 units of SKU D51-105V01; log defect against SKU\"}], \"reply\": \"Hello,\\n\\nThank you for your message, and I'm sorry you've had to write to us so many times about this. I understand that all 3 hutches from your order EB-58201 have problems - broken mesh on two of them and rusty trays - and that you are asking for all 3 to be replaced rather than just one.\\n\\nI have passed your case, including your request for 3 replacement hutches, to a specialist as a priority, and the defects have been logged with our quality team against this product. The specialist will contact you about the next steps.\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nKind regards,\\nCustomer Service\"}",
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
      "value": 0.5,
      "detail": "期望 HANDOFF；实际 HANDOFF + QUALITY_ESCALATION"
     },
     {
      "key": "handoff",
      "label": "转人工判断",
      "pass": true,
      "detail": "应转人工"
     },
     {
      "key": "fact",
      "label": "承认 3 个都有问题",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "保留动物安全提醒",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得再追问几个笼子有问题",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不得假定已给差评",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "转人工时不得承诺方案",
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
    "score": 0.8,
    "pass": false,
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
      "reject_reason": "not good enough; second failure, bought 3 cages"
     },
     {
      "type": "PARTIAL_REFUND",
      "pct": 30,
      "units": 1,
      "status": "REJECTED",
      "reject_reason": "30% too little for condition and cost of new cages"
     },
     {
      "type": "REPLACEMENT_WITH_COLLECTION",
      "pct": null,
      "units": 1,
      "status": "REJECTED",
      "reject_reason": "nowhere to keep ferrets while waiting"
     },
     {
      "type": "REPLACEMENT_NO_RETURN",
      "pct": null,
      "units": 1,
      "status": "REJECTED",
      "reject_reason": "needs all 3 cages replaced"
     }
    ],
    "customer_choice": "REPLACEMENT",
    "info_already_given": [
     "second cage with failed mesh",
     "mesh wires broken from welds on 2 cages (photos)",
     "bought 3 cages",
     "all metal trays rusty",
     "cannot rely on cages to keep ferrets safe",
     "all 3 cages have something wrong"
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
      "customer_demand": "replacement of all 3 cages"
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
      "customer_demand": "replacement of all 3 cages"
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
     "dispute_type": "MARKETPLACE_CASE",
     "priority": true,
     "contact_count": 4,
     "customer_requests": [
      "replacement",
      "replacement of all 3 cages"
     ],
     "case_facts": [
      "2 unit(s): front mesh door (repeat)",
      "3 unit(s): metal tray"
     ],
     "for_specialist": [
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
       "confirmed": "replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)",
       "order_qty": 3,
       "log": {
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
        "photo or short video of the metal tray issue (3 unit(s))"
       ]
      }
     ],
     "safety_notice": "For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced."
    }
   ],
   "reply": "Dear Customer,\n\nWe are very sorry, and we understand how frustrating it is to have had to send us 4 messages about this.\n\nWe have noted your request for a replacement of all 3 cages, as the front mesh door has failed on 2 cages (a repeat problem) and the metal trays on all 3 have gone rusty.\n\nYour case has been passed to a specialist as a priority, who will contact you directly.\n\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\n\nKind regards,\nCustomer Care Team",
   "trace": [
    {
     "id": "C24:extract",
     "stage": "extract",
     "system": "You extract structured facts from a customer service email. Do NOT decide outcomes, do NOT write a reply.\nExtract only what the customer actually says. Return JSON only, matching:\n{\n  \"language\": \"<ISO 639-1 code of the customer's language>\",\n  \"safety_risk\": <true if a person or animal has been injured, or a safety hazard to people, lawyer, lawsuit or media is mentioned>,\n  \"animal_safety\": <true if a pet/animal enclosure is damaged so animals could escape or get hurt (no injury yet)>,\n  \"dispute\": <true if a chargeback, payment dispute, marketplace case (eBay/Amazon) or negative feedback is mentioned, filed or threatened>,\n  \"dispute_type\": \"<CHARGEBACK|MARKETPLACE_CASE|FEEDBACK|null>\",\n  \"previous_offers\": [\n    {\"type\": \"<PARTIAL_REFUND|SELF_REPAIR|REPLACEMENT_WITH_COLLECTION|REPLACEMENT_NO_RETURN|FULL_REFUND|ASK_INFO|OTHER: offers our team made in earlier replies>\",\n     \"pct\": <percentage if any, else null>, \"units\": <number of units covered if stated, else null>,\n     \"status\": \"<PENDING|ACCEPTED|REJECTED: the customer's reaction in later messages>\", \"reject_reason\": \"<short, else null>\"}\n  ],\n  \"customer_choice\": \"<REPLACEMENT|FULL_REFUND|PARTIAL_REFUND|null: the resolution the customer now explicitly asks for>\",\n  \"info_already_given\": [\"<facts the customer has already stated in the thread, e.g. 'all 3 trays rusty'>\"],\n  \"intents\": [\n    {\n      \"type\": \"<one of DAMAGE|MISSING_PARTS|DEFECT_WARRANTY|RETURN|EXCHANGE|PRODUCT_QA|SHIPPING_STATUS|NOT_RECEIVED|ADDRESS_CHANGE|OTHER>\",\n      \"order_id\": \"<order number written in the email (AS-xxxxx or marketplace order no.), else null. Do not invent; listing/item numbers are not order numbers>\",\n      \"sku\": \"<catalog SKU if the product can be identified by name, else null>\",\n      \"part_codes\": [\"<part codes from the manual, e.g. C4>\"],\n      \"severity\": \"<COSMETIC|STRUCTURAL|UNKNOWN, for DAMAGE and DEFECT_WARRANTY>\",\n      \"component\": \"<the part with the problem, e.g. 'front mesh door', 'metal tray', else null>\",\n      \"repeat_issue\": <true if the customer says this is the second (or later) unit with the same problem>,\n      \"units_affected\": <number of units with THIS problem on THIS component, default 1>,\n      \"item_condition\": \"<UNOPENED|UNASSEMBLED|ASSEMBLED|USED|UNKNOWN>\",\n      \"reason\": \"<CHANGED_MIND|DEFECT|OTHER>\",\n      \"target_variant\": \"<requested color/variant for EXCHANGE, lowercase, else null>\",\n      \"qa_topics\": [\"<for PRODUCT_QA: MAX_LOAD|DIMENSIONS|MATERIAL|WEATHER|ASSEMBLY|CARE|CERTIFICATION|BATTERY|AGE_RANGE|WARRANTY>\"],\n      \"has_photo\": <true if an image is attached or mentioned as attached>,\n      \"has_video\": <true if a video is attached>,\n      \"customer_demand\": \"<what the customer explicitly demands, short, else null>\"\n    }\n  ]\n}\nIntent definitions:\n- DAMAGE: item arrived damaged (scratches, dents, broken on arrival or during assembly).\n- MISSING_PARTS: parts missing from the box.\n- DEFECT_WARRANTY: item worked, then failed during normal use.\n- RETURN: wants to send the item back for a refund. EXCHANGE: wants a different color/variant.\n- PRODUCT_QA: question about product specs or suitability. One intent per product; list every topic asked.\n- SHIPPING_STATUS: where is my order / when will it ship or arrive. NOT_RECEIVED: tracking says delivered but not received.\n- ADDRESS_CHANGE: wants to change the delivery address.\nCreate one intent per distinct request, and one intent per distinct problem: different components or different defects (e.g. broken mesh vs rusty trays) are separate intents, each with its own units_affected and has_photo (has_photo is true only if a photo of THAT problem was sent anywhere in the thread).\nIf the email contains earlier messages, read the whole thread: fill previous_offers from our team's earlier replies and the customer's reactions; describe the current state of the case. Severity: STRUCTURAL = broken, snapped, cracked, deformed, cannot assemble, mesh/welds/hinges/latches failed so the item no longer does its job; COSMETIC = scratches, dents, color marks only.\n\nProduct catalog (names only):\n- SW-01: 3-Seat Patio Swing Chair\n- PT-02: 6-Seat Acacia Patio Dining Table\n- GB-03: Galvanized Steel Raised Garden Bed 240 cm\n- KB-04: 12V Kids Ride-On Car\n- GZ-05: 3 x 4 m Aluminium Hardtop Gazebo\n- DC-06: XL Wooden Dog Crate Furniture\n- OF-07: Ergonomic Mesh Office Chair\n- D51-105V01: Wooden Rabbit Hutch with Hinged Top",
     "user": "Email:\n\"\"\"\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- 5. Customer ---\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n--- 6. Agent (sent) ---\nDear Customer,\n\nThanks for your message. We are sorry for the inconvenience caused.\n\nConsidering the situation of your item, as we do not want to inconvenience you any further, we would like to send out a full replacement of one item for you without the collection of original item. Please note, delivery can take 3-5 working days to arrive from date of input.\n\nIn order for us to proceed, please respond to this message confirming your acceptance of the above.\n\nKind regards,\n[Agent C]\n--- end of earlier messages ---\n\n[New customer message]\nAll 3 cages have all got something wrong with them thank u for the offer of 1 but we need all 3 replacement this isn't good enough I shouldn't have to be sending all these messages I will be going.to ebay them.self if this doesn't get sorted ASAP\n\"\"\"",
     "response": "{\"language\": \"en\", \"safety_risk\": false, \"animal_safety\": true, \"dispute\": true, \"dispute_type\": \"MARKETPLACE_CASE\", \"previous_offers\": [{\"type\": \"PARTIAL_REFUND\", \"pct\": 15, \"units\": 1, \"status\": \"REJECTED\", \"reject_reason\": \"not good enough; second failure, bought 3 cages\"}, {\"type\": \"PARTIAL_REFUND\", \"pct\": 30, \"units\": 1, \"status\": \"REJECTED\", \"reject_reason\": \"30% too little for condition and cost of new cages\"}, {\"type\": \"REPLACEMENT_WITH_COLLECTION\", \"pct\": null, \"units\": 1, \"status\": \"REJECTED\", \"reject_reason\": \"nowhere to keep ferrets while waiting\"}, {\"type\": \"REPLACEMENT_NO_RETURN\", \"pct\": null, \"units\": 1, \"status\": \"REJECTED\", \"reject_reason\": \"needs all 3 cages replaced\"}], \"customer_choice\": \"REPLACEMENT\", \"info_already_given\": [\"second cage with failed mesh\", \"mesh wires broken from welds on 2 cages (photos)\", \"bought 3 cages\", \"all metal trays rusty\", \"cannot rely on cages to keep ferrets safe\", \"all 3 cages have something wrong\"], \"intents\": [{\"type\": \"DEFECT_WARRANTY\", \"order_id\": null, \"sku\": \"D51-105V01\", \"part_codes\": [], \"severity\": \"STRUCTURAL\", \"component\": \"front mesh door\", \"repeat_issue\": true, \"units_affected\": 2, \"item_condition\": \"USED\", \"reason\": \"DEFECT\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": true, \"has_video\": false, \"customer_demand\": \"replacement of all 3 cages\"}, {\"type\": \"DEFECT_WARRANTY\", \"order_id\": null, \"sku\": \"D51-105V01\", \"part_codes\": [], \"severity\": \"UNKNOWN\", \"component\": \"metal tray\", \"repeat_issue\": false, \"units_affected\": 3, \"item_condition\": \"USED\", \"reason\": \"DEFECT\", \"target_variant\": null, \"qa_topics\": [], \"has_photo\": false, \"has_video\": false, \"customer_demand\": \"replacement of all 3 cages\"}]}",
     "ms": 0
    },
    {
     "id": "C24:rules",
     "stage": "rules",
     "system": "shared rules (deterministic)",
     "user": "{\n  \"language\": \"en\",\n  \"safety_risk\": false,\n  \"animal_safety\": true,\n  \"dispute\": true,\n  \"dispute_type\": \"MARKETPLACE_CASE\",\n  \"previous_offers\": [\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 15,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"not good enough; second failure, bought 3 cages\"\n    },\n    {\n      \"type\": \"PARTIAL_REFUND\",\n      \"pct\": 30,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"30% too little for condition and cost of new cages\"\n    },\n    {\n      \"type\": \"REPLACEMENT_WITH_COLLECTION\",\n      \"pct\": null,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"nowhere to keep ferrets while waiting\"\n    },\n    {\n      \"type\": \"REPLACEMENT_NO_RETURN\",\n      \"pct\": null,\n      \"units\": 1,\n      \"status\": \"REJECTED\",\n      \"reject_reason\": \"needs all 3 cages replaced\"\n    }\n  ],\n  \"customer_choice\": \"REPLACEMENT\",\n  \"info_already_given\": [\n    \"second cage with failed mesh\",\n    \"mesh wires broken from welds on 2 cages (photos)\",\n    \"bought 3 cages\",\n    \"all metal trays rusty\",\n    \"cannot rely on cages to keep ferrets safe\",\n    \"all 3 cages have something wrong\"\n  ],\n  \"intents\": [\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"STRUCTURAL\",\n      \"component\": \"front mesh door\",\n      \"repeat_issue\": true,\n      \"units_affected\": 2,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": true,\n      \"has_video\": false,\n      \"customer_demand\": \"replacement of all 3 cages\"\n    },\n    {\n      \"type\": \"DEFECT_WARRANTY\",\n      \"order_id\": null,\n      \"sku\": \"D51-105V01\",\n      \"part_codes\": [],\n      \"severity\": \"UNKNOWN\",\n      \"component\": \"metal tray\",\n      \"repeat_issue\": false,\n      \"units_affected\": 3,\n      \"item_condition\": \"USED\",\n      \"reason\": \"DEFECT\",\n      \"target_variant\": null,\n      \"qa_topics\": [],\n      \"has_photo\": false,\n      \"has_video\": false,\n      \"customer_demand\": \"replacement of all 3 cages\"\n    }\n  ]\n}",
     "response": "[\n  {\n    \"intent\": \"DISPUTE\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"chargeback_or_dispute\",\n    \"dispute_type\": \"MARKETPLACE_CASE\",\n    \"priority\": true,\n    \"contact_count\": 4,\n    \"customer_requests\": [\n      \"replacement\",\n      \"replacement of all 3 cages\"\n    ],\n    \"case_facts\": [\n      \"2 unit(s): front mesh door (repeat)\",\n      \"3 unit(s): metal tray\"\n    ],\n    \"for_specialist\": [\n      {\n        \"intent\": \"DEFECT_WARRANTY\",\n        \"order_id\": \"EB-58201\",\n        \"decision\": \"QUALITY_ESCALATION\",\n        \"sku\": \"D51-105V01\",\n        \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n        \"component\": \"front mesh door\",\n        \"units_affected\": 2,\n        \"prior_cases\": [\n          \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n        ],\n        \"confirmed\": \"replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n        \"order_qty\": 3,\n        \"log\": {\n          \"sku\": \"D51-105V01\",\n          \"defect\": \"repeat structural failure\",\n          \"orders\": [\n            \"EB-58201\"\n          ]\n        }\n      },\n      {\n        \"intent\": \"DEFECT_WARRANTY\",\n        \"order_id\": \"EB-58201\",\n        \"decision\": \"ASK_INFO\",\n        \"reason\": \"missing_evidence\",\n        \"ask\": [\n          \"photo or short video of the metal tray issue (3 unit(s))\"\n        ]\n      }\n    ],\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\"\n  }\n]",
     "ms": 0
    },
    {
     "id": "C24:reply",
     "stage": "reply",
     "system": "<role>\nYou are an after-sales customer service agent for a cross-border outdoor furniture brand. Professional, calm, empathetic.\n</role>\n<task>\nWrite one email reply that covers every decision below, in the customer's language (en).\nFirst acknowledge the issue in one sentence, then give the outcome for each decision, then the next step.\nYou may ONLY use the decisions, options, amounts, dates and product facts provided. Do not add solutions, amounts, percentages, dates or timeframes.\n</task>\n<how-to-write>\n- RESHIP_PARTS: confirm the part codes; tracking number will follow by email.\n- OFFER_PARTS_OR_PARTIAL_REFUND / OFFER_REPLACEMENT_OR_REFUND: list the options side by side; ask the customer to choose. If the customer asked for something else, politely say these are the options available.\n- WARRANTY_PARTS: free warranty replacement part will be sent; confirm the part.\n- QUALITY_ESCALATION: acknowledge this is a repeat problem (use units_affected and the component), say it has been reported to the quality team. If \"confirmed\" is set, confirm that resolution for those units instead of asking; otherwise list the options side by side and ask the customer to choose. Never ask the customer to repair it themselves.\n- \"corrections\": include each sentence (it corrects something our team said earlier).\n- \"do_not_offer\": never offer or repeat these; if the customer rejected them, acknowledge briefly that you understand.\n- OUT_OF_WARRANTY: explain it is outside the 12-month warranty; parts can be purchased and a specialist will send a quote. Do not say free.\n- RETURN_ALLOWED: explain the return is accepted, return instructions follow, and the given return fee is deducted from the refund.\n- DECLINE_RETURN: explain politely why the return cannot be accepted (use the reason); do not offer a return label.\n- EXCHANGE: confirm the exchange to the target variant; instructions follow.\n- ANSWER_QA: answer only using the product facts; if the facts mean the use is not suitable, say so clearly.\n- QA_UNKNOWN: say you will confirm with the product team and get back; do not guess yes or no.\n- SHIPPING_DELAY_ESCALATE: apologize, say the warehouse has been escalated, offer the options; no ship date.\n- CARRIER_INVESTIGATION: apologize, say a carrier investigation has been opened; no new delivery date.\n- WAIT_48H: ask the customer to check around the property and with neighbours and allow 48 hours; if still missing, reply and we will open a case.\n- PROVIDE_ETA: give the carrier and ETA if provided; otherwise say it has not shipped yet without a date.\n- ADDRESS_CHANGE_OK: confirm the address change request will be applied. ADDRESS_CHANGE_DENIED: explain the order has already shipped so the address cannot be changed by us.\n- ASK_INFO: ask only for the listed missing information.\n- If a decision has \"safety_notice\", include that sentence word for word.\n- HANDOFF with reason safety: apologize sincerely and say a specialist will contact them as soon as possible. Do NOT mention refunds, compensation, replacement, cause or liability.\n- HANDOFF with reason chargeback_or_dispute: apologize; acknowledge the customer's specific requests (customer_requests) and key facts (case_facts) in plain words, and the number of messages they had to send if priority is set; say the case has been passed to a specialist as a priority who will contact them. Do NOT promise any outcome, compensation or timeframe.\n- HANDOFF (other reasons): say the case has been passed to a specialist who will follow up; do not give a solution or internal reason.\n</how-to-write>\n<output-format>\nJSON only: {\"reply\":\"<email text>\"}. Under 160 words. Sign off as \"Customer Care Team\".\n</output-format>",
     "user": "<customer-email>\nFrom: buyer-7f3a (eBay)\nChannel: ebay message · buyer buyer-7f3a · item #360000000001\nSubject: Re: Wooden Rabbit Hutch Bunny Cage Outdoor Small Animal House w/ Hinged Top #360000000001 (SKU D51-105V01)\nAttachments: none\n\n[Earlier messages in this thread, oldest first. \"Agent\" = our team's replies already sent]\n--- 1. Customer ---\n2nd cage thats gone think you need to use better mesh not cheap stuff, the 2nd photo with purple tube in is the 1st cage I completed about.\n[Attachment descriptions] Front welded-wire mesh door of a wooden hutch. A horizontal wire has broken free from its welds and hangs loose across the panel. A ferret is inside. | Front mesh door of a second, identical hutch with a purple tunnel inside. Several vertical wires on the left side have come away from the welds and are bent. A ferret is inside.\n--- 2. Agent (sent) ---\nDear Customer,\n\nSorry for the inconvenience.\n\nI am sorry that this issue has arisen. I have tried to search for spare parts in our warehouse, however, as this is new stock we've no spare parts available and nor do we stock this at the warehouse which we operate from.\n\nCan I ask if you would be willing to keep it and possibly source a repair or resolution option at your end? As if you could, we would be happy to offer a 15% partial refund to cover the cost for one item.\n\nPlease let us know how you wish to proceed.\n\nKind regards,\n[Agent A]\n--- 3. Customer ---\nThat's ok but this isn't good enough to happen the second time I bought 3 cages from ya self and it was alot of money this really need looking as as you trust the itam to be worth the money it is just a good job my ferret hasn't been able to get out\n--- 4. Agent (sent) ---\nDear Customer,\nThank you for your message.\nWe have two resolutions we would like to put forward to you to resolve this issue please let us know which one is best for you.\n- Partial Refund: A 30% partial refund for the item to cover the inconvenience caused if you are happy to keep as it is and without any further assistance.\nor\n-We may opt to arrange a collection and a full replacement.\nCollection requires the items to be fully dismantled and packed in a box with all parts included.\nWe would also require you to select a full working day between 08.00-18.00 for the collection of your item.\nPlease note that a collection and replacement will not be on the same day as we use different couriers for each service.\nOnce again I would like to apologise for the inconvenience and we hope to hear from you soon.\nBest Regards,\n[Agent B]\n--- 5. Customer ---\nWel the second one isn't no good as where am I ment to keep my ferrets while I wait for the new ones and all the metal trays have all gone rusty aswell now this is no good as I haven't had them that long and 30% for what they are like and the money im going to have to spend on new cages as I cant rely on these to keep my ferrets safe or get out i really didn't expect this to happen if I new this I wouldn't of bought them if it was just 1 cage wouldn't have been so bad but 3 cages is alot of money for this to happen too\n--- 6. Agent (sent) ---\nDear Customer,\n\nThanks for your message. We are sorry for the inconvenience caused.\n\nConsidering the situation of your item, as we do not want to inconvenience you any further, we would like to send out a full replacement of one item for you without the collection of original item. Please note, delivery can take 3-5 working days to arrive from date of input.\n\nIn order for us to proceed, please respond to this message confirming your acceptance of the above.\n\nKind regards,\n[Agent C]\n--- end of earlier messages ---\n\n[New customer message]\nAll 3 cages have all got something wrong with them thank u for the offer of 1 but we need all 3 replacement this isn't good enough I shouldn't have to be sending all these messages I will be going.to ebay them.self if this doesn't get sorted ASAP\n</customer-email>\n<decisions>\n[\n  {\n    \"intent\": \"DISPUTE\",\n    \"decision\": \"HANDOFF\",\n    \"reason\": \"chargeback_or_dispute\",\n    \"dispute_type\": \"MARKETPLACE_CASE\",\n    \"priority\": true,\n    \"contact_count\": 4,\n    \"customer_requests\": [\n      \"replacement\",\n      \"replacement of all 3 cages\"\n    ],\n    \"case_facts\": [\n      \"2 unit(s): front mesh door (repeat)\",\n      \"3 unit(s): metal tray\"\n    ],\n    \"for_specialist\": [\n      {\n        \"intent\": \"DEFECT_WARRANTY\",\n        \"order_id\": \"EB-58201\",\n        \"decision\": \"QUALITY_ESCALATION\",\n        \"sku\": \"D51-105V01\",\n        \"product\": \"Wooden Rabbit Hutch with Hinged Top\",\n        \"component\": \"front mesh door\",\n        \"units_affected\": 2,\n        \"prior_cases\": [\n          \"EB-58201: TK-UK-20260929-000731: cage 1 of 3, mesh weld failure\"\n        ],\n        \"confirmed\": \"replacement from a different batch after a QC check, shipped first (no need to dismantle, return or wait for collection of the old one before the new one arrives)\",\n        \"order_qty\": 3,\n        \"log\": {\n          \"sku\": \"D51-105V01\",\n          \"defect\": \"repeat structural failure\",\n          \"orders\": [\n            \"EB-58201\"\n          ]\n        }\n      },\n      {\n        \"intent\": \"DEFECT_WARRANTY\",\n        \"order_id\": \"EB-58201\",\n        \"decision\": \"ASK_INFO\",\n        \"reason\": \"missing_evidence\",\n        \"ask\": [\n          \"photo or short video of the metal tray issue (3 unit(s))\"\n        ]\n      }\n    ],\n    \"safety_notice\": \"For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\"\n  }\n]\n</decisions>",
     "response": "{\"reply\": \"Dear Customer,\\n\\nWe are very sorry, and we understand how frustrating it is to have had to send us 4 messages about this.\\n\\nWe have noted your request for a replacement of all 3 cages, as the front mesh door has failed on 2 cages (a repeat problem) and the metal trays on all 3 have gone rusty.\\n\\nYour case has been passed to a specialist as a priority, who will contact you directly.\\n\\nFor your pets' safety, please do not leave them unattended in the enclosure until it has been replaced.\\n\\nKind regards,\\nCustomer Care Team\"}",
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
      "label": "承认 3 个都有问题",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "fact",
      "label": "保留动物安全提醒",
      "pass": true,
      "detail": "回复须包含"
     },
     {
      "key": "claim",
      "label": "不得再追问几个笼子有问题",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "不得假定已给差评",
      "pass": true,
      "detail": "未出现"
     },
     {
      "key": "claim",
      "label": "转人工时不得承诺方案",
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
  }
 ]
};
