// 示意数据：订单、商品规格、配件库存与售后政策。不代表任何真实企业。
export const TODAY = "2026-11-09";

export const POLICY = {
  version: "2026-11-demo",
  returnWindowDays: 30,
  warrantyDays: 365,
  damageReportWindowDays: 30,
  structuralApprovalThresholdUsd: 300,
  cosmeticPartialRefundPct: 15,
  returnFeeUsd: { standard: 12.95, oversize: 59 },
  unshippedEscalateBusinessDays: 5,
  overdueInvestigateDays: 3,
  notReceivedWaitDays: 2,
};

export const PRODUCTS = {
  "SW-01": {
    name: "3-Seat Patio Swing Chair",
    oversize: true,
    variants: { grey: 6, beige: 12, green: 0 },
    parts: { A1: 20, A2: 15, B2: 8, C4: 30, C5: 12, C6: 0 },
    spec: {
      MAX_LOAD: "Total max load 300 kg (660 lb); max 100 kg (220 lb) per seat.",
      DIMENSIONS: "Assembled 198 x 120 x 172 cm; package weight 48 kg.",
      MATERIAL: "Powder-coated steel frame; polyester canopy and cushions.",
      WEATHER: "Canopy is water-resistant, not waterproof. Store cushions indoors in heavy rain; frame is rust-resistant.",
      ASSEMBLY: "Two adults, about 90 minutes. All tools included.",
      CERTIFICATION: null,
      WARRANTY: "12 months on frame and parts from delivery date.",
    },
  },
  "PT-02": {
    name: "6-Seat Acacia Patio Dining Table",
    oversize: true,
    variants: { natural: 9 },
    parts: { L1: 10, L2: 10, T1: 2 },
    spec: {
      MAX_LOAD: "Tabletop static load up to 80 kg.",
      DIMENSIONS: "180 x 90 x 74 cm; package weight 35 kg.",
      MATERIAL: "Solid acacia wood with oil finish; steel connecting hardware.",
      WEATHER: "Suitable for outdoor use. Re-oil every 6-12 months; cover or store indoors in winter.",
      CARE: "Wipe with damp cloth; apply teak or acacia oil every 6-12 months.",
      CERTIFICATION: null,
      WARRANTY: "12 months from delivery date.",
    },
  },
  "GB-03": {
    name: "Galvanized Steel Raised Garden Bed 240 cm",
    oversize: false,
    variants: { silver: 40 },
    parts: { P1: 50, P2: 50, S1: 200 },
    spec: {
      DIMENSIONS: "240 x 90 x 30 cm; package weight 18 kg.",
      MATERIAL: "Galvanized steel panels with zinc-aluminium coating.",
      WEATHER: "Outdoor use, all seasons.",
      CERTIFICATION: null,
      WARRANTY: "12 months from delivery date.",
    },
  },
  "KB-04": {
    name: "12V Kids Ride-On Car",
    oversize: false,
    variants: { red: 15, white: 7 },
    parts: { BAT12V: 25, CHG12V: 30, WHEEL: 40 },
    spec: {
      MAX_LOAD: "Max load 30 kg (66 lb).",
      AGE_RANGE: "Recommended for ages 3-6.",
      BATTERY: "12V 7Ah battery. First charge 12 hours; normal charge 8-10 hours; about 60 minutes of driving per charge.",
      DIMENSIONS: "106 x 62 x 48 cm; package weight 19 kg.",
      CERTIFICATION: "ASTM F963 tested.",
      WARRANTY: "12 months; battery and charger included.",
    },
  },
  "GZ-05": {
    name: "3 x 4 m Aluminium Hardtop Gazebo",
    oversize: true,
    variants: { grey: 4 },
    parts: { R1: 6, POST: 3, ANCHOR: 40 },
    spec: {
      DIMENSIONS: "300 x 400 x 265 cm; ships in 3 packages, total 96 kg.",
      MATERIAL: "Aluminium frame with polycarbonate roof panels.",
      WEATHER: "Must be anchored to the ground. Not rated for snow load: clear snow from the roof promptly; do not let snow accumulate.",
      ASSEMBLY: "Three to four adults, about 6 hours.",
      CERTIFICATION: null,
      WARRANTY: "12 months from delivery date.",
    },
  },
  "DC-06": {
    name: "XL Wooden Dog Crate Furniture",
    oversize: true,
    variants: { white: 10, walnut: 5 },
    parts: { DOOR: 4, PANEL: 6 },
    spec: {
      DIMENSIONS: "112 x 66 x 80 cm; suitable for dogs up to 40 kg.",
      MATERIAL: "MDF and pine; steel mesh door.",
      WEATHER: "Indoor use only. Not suitable for outdoor use or damp areas.",
      CERTIFICATION: null,
      WARRANTY: "12 months from delivery date.",
    },
  },
  "OF-07": {
    name: "Ergonomic Mesh Office Chair",
    oversize: false,
    variants: { black: 30 },
    parts: { GASLIFT: 18, CASTER: 60, ARMREST: 10 },
    spec: {
      MAX_LOAD: "Max load 120 kg (265 lb). Class 4 gas lift.",
      DIMENSIONS: "Seat height 45-55 cm; package weight 14 kg.",
      MATERIAL: "Mesh back, nylon base.",
      CERTIFICATION: "BIFMA X5.1 tested.",
      WARRANTY: "12 months from delivery date.",
    },
  },
  "D51-105V01": {
    name: "Wooden Rabbit Hutch with Hinged Top",
    oversize: false,
    variants: { natural: 25 },
    parts: {},
    spec: {
      DIMENSIONS: "91.5 x 45 x 70 cm; package weight 13 kg.",
      MATERIAL: "Fir wood frame; galvanized welded wire mesh front panel.",
      WEATHER: "Outdoor use with waterproof asphalt roof; treat wood yearly.",
      CERTIFICATION: null,
      WARRANTY: "12 months from delivery date.",
    },
  },
};

// status: processing | in_transit | delivered
export const ORDERS = {
  "AS-10023": { sku: "SW-01", amount_usd: 189, order_date: "2026-10-22", status: "delivered", delivered: "2026-11-01", country: "US" },
  "AS-10088": { sku: "PT-02", amount_usd: 129, order_date: "2026-10-25", status: "delivered", delivered: "2026-11-03", country: "US" },
  "AS-10101": { sku: "SW-01", amount_usd: 459, order_date: "2026-10-26", status: "delivered", delivered: "2026-11-05", country: "US" },
  "AS-10210": { sku: "KB-04", amount_usd: 239, order_date: "2026-03-05", status: "delivered", delivered: "2026-03-12", country: "UK" },
  "AS-08800": { sku: "OF-07", amount_usd: 149, order_date: "2025-07-24", status: "delivered", delivered: "2025-08-01", country: "US" },
  "AS-10170": { sku: "OF-07", amount_usd: 149, order_date: "2026-10-13", status: "delivered", delivered: "2026-10-20", country: "US" },
  "AS-10175": { sku: "PT-02", amount_usd: 329, order_date: "2026-10-07", status: "delivered", delivered: "2026-10-15", country: "US" },
  "AS-10180": { sku: "SW-01", variant: "grey", amount_usd: 289, order_date: "2026-10-26", status: "delivered", delivered: "2026-11-02", country: "US" },
  "AS-10185": { sku: "SW-01", variant: "grey", amount_usd: 299, order_date: "2026-10-22", status: "delivered", delivered: "2026-10-30", country: "DE" },
  "AS-10162": { sku: "KB-04", amount_usd: 239, order_date: "2026-10-28", status: "processing", country: "US" },
  "AS-10150": { sku: "GZ-05", amount_usd: 599, order_date: "2026-10-20", status: "in_transit", carrier: "FreightLine", eta: "2026-11-04", last_scan: "2026-10-30 Memphis hub", country: "US" },
  "AS-10201": { sku: "GB-03", amount_usd: 89, order_date: "2026-11-02", status: "delivered", delivered: "2026-11-08", carrier: "UPS", country: "US" },
  "AS-10240": { sku: "GB-03", amount_usd: 95, order_date: "2026-11-03", status: "in_transit", carrier: "UPS", eta: "2026-11-12", last_scan: "2026-11-08 Columbus OH", country: "US" },
  "AS-10230": { sku: "SW-01", amount_usd: 279, order_date: "2026-10-28", status: "delivered", delivered: "2026-11-06", country: "US" },
  // 平台订单（eBay）：由系统按 平台 + 买家 + 商品号 从消息线程关联，不需要客户提供
  "EB-58201": { sku: "D51-105V01", qty: 3, amount_usd: 258, order_date: "2026-09-12", status: "delivered", delivered: "2026-09-17", country: "UK", channel: "ebay", prior_case: "TK-UK-20260929-000731: cage 1 of 3, mesh weld failure" },
};

// 平台消息线程 → 订单。实际系统通过平台 API 完成，这里用表模拟。
export const MARKETPLACE_ORDERS = [
  { platform: "ebay", buyer: "buyer-7f3a", item_id: "360000000001", order_id: "EB-58201" },
];

// 按渠道信息查订单（确定性，不经过模型）。返回该买家在该商品下的全部订单，最新在前。
export function lookupChannelOrders(channel) {
  if (!channel?.platform) return [];
  return MARKETPLACE_ORDERS
    .filter((m) => m.platform === channel.platform && m.buyer === channel.buyer && (!channel.item_id || m.item_id === channel.item_id))
    .map((m) => m.order_id)
    .sort((a, b) => (ORDERS[b].order_date > ORDERS[a].order_date ? 1 : -1));
}

// 两种模式共用：邮件中写明的订单号 + 渠道关联到的订单号
export function relatedOrderIds(email) {
  return [...new Set([...findOrderIds(email.body + " " + email.subject), ...lookupChannelOrders(email.channel)])];
}

export function findOrderIds(text) {
  return [...new Set((text.match(/AS-\d{5}/gi) || []).map((s) => s.toUpperCase()))];
}

export const POLICY_TEXT = `After-sales policy (demo, version ${POLICY.version})
1. Always need an order number for order-related requests. For marketplace messages (eBay, Amazon), the order is linked from the message thread and listed under "Order records"; never ask the customer for an order number that is already listed. Damage claims need at least one photo; missing parts need the part code from the manual.
2. Damage or missing parts reported more than 30 days after delivery: do not resolve automatically, hand off to a specialist.
3. Missing parts in stock: reship the parts. Out of stock: hand off.
4. Cosmetic damage (scratches, dents, not affecting use): customer may choose replacement part or a 15% partial refund. No other percentage.
5. Structural damage (broken, cannot assemble, load-bearing part deformed): replacement or full refund; if order amount > 300 USD a specialist must approve (hand off). Unsure severity: hand off.
6. Injury, safety hazard, lawyer, lawsuit, media, chargeback or payment dispute: hand off immediately, apologize only, do not discuss cause, liability or compensation.
7. Quality defect after use within 12 months of delivery with photo or video: send warranty replacement parts free. After 12 months: out of warranty, parts can be purchased; a specialist will send a quote. Never promise free parts out of warranty.
8. Returns for change of mind within 30 days of delivery only if unopened or unassembled. Assembled or used items cannot be returned for change of mind. Return shipping fee is deducted from the refund: standard parcel 12.95 USD, oversize freight 59 USD.
9. Exchanges (color/variant) within 30 days if unassembled and the target variant is in stock; otherwise hand off.
10. Orders not shipped more than 5 business days after order date: apologize, escalate to the warehouse, and offer cancellation with full refund. Do not promise a ship date.
11. In-transit orders more than 3 days past the carrier ETA: open a carrier investigation. Do not promise a delivery date. Otherwise give the carrier ETA.
12. Marked delivered but not received: if less than 2 days since the delivery scan, ask the customer to check around the property and with neighbours and wait 48 hours; otherwise hand off to open a lost-package case.
13. Address changes only while the order is still processing (not shipped).
14. Product questions: answer only from the product specification. If the spec does not cover it, say you will confirm with the product team. Never guess.
15. Never promise refund amounts, percentages, dates or timeframes not given by the system. Reply in the customer's language, professional and calm; confirm the issue first, then the solution.
16. Repeat structural defect: if the customer reports the same structural failure on a second (or later) unit of the same product, or order records show a prior case for the same defect on that product, do not offer parts or partial refunds. Escalate to the quality team (log the defect against the SKU) and offer the customer a replacement from a different batch after a QC check, or a full refund. If the order amount > 300 USD, hand off for approval instead. Never ask the customer to repair or source a repair themselves.
17. Animal enclosures (hutches, cages, crates, coops): if the enclosure is damaged so animals could escape or get hurt, include this safety advice: "For your pets' safety, please do not leave them unattended in the enclosure until it has been replaced." If an animal has actually been injured, treat it as a safety case (rule 6).`;
