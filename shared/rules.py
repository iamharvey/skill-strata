"""到货破损/缺件的确定性判定。示意实现，数据源用桩函数代替。"""
import argparse, json
from datetime import date

def get_order(order_id: str) -> dict:
    # 实际应调用 OMS
    demo = {
        "AS-10023": {"amount_usd": 189, "delivered": "2026-11-01"},
        "AS-10088": {"amount_usd": 129, "delivered": "2026-11-03"},
        "AS-10101": {"amount_usd": 459, "delivered": "2026-11-05"},
        "AS-09001": {"amount_usd": 220, "delivered": "2026-09-25"},
    }
    return demo[order_id]

def part_in_stock(code: str) -> bool:
    return code in {"C4", "C5", "B2"}   # 实际应调用配件库存

def decide(order_id, issue, severity, parts, today=date(2026, 11, 9)):
    order = get_order(order_id)
    days = (today - date.fromisoformat(order["delivered"])).days

    if days > 30:                                            # R2
        return {"decision": "HANDOFF", "reason": "over_30_days"}

    if issue == "MISSING_PARTS":                             # R3
        missing = [p for p in parts if not part_in_stock(p)]
        if missing:
            return {"decision": "HANDOFF", "reason": "part_out_of_stock", "parts": missing}
        return {"decision": "RESHIP_PARTS", "parts": parts}

    if issue == "DAMAGED":
        if severity == "COSMETIC":                           # R4
            return {"decision": "OFFER", "options": ["RESHIP_PARTS", "PARTIAL_REFUND_15"]}
        if severity == "STRUCTURAL":                         # R5
            if order["amount_usd"] > 300:
                return {"decision": "HANDOFF", "reason": "needs_approval"}
            return {"decision": "OFFER", "options": ["REPLACEMENT", "FULL_REFUND"]}

    return {"decision": "HANDOFF", "reason": "unclear"}

if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--order-id", required=True)
    ap.add_argument("--issue", required=True)
    ap.add_argument("--severity", default="UNKNOWN")
    ap.add_argument("--parts", default="")
    a = ap.parse_args()
    parts = [p for p in a.parts.split(",") if p]
    print(json.dumps(decide(a.order_id, a.issue, a.severity, parts), ensure_ascii=False))
