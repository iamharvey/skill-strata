"""用统一测试用例校验 shared/rules.py 的确定性判定（T1/T2/T3/T6）。
T4（安全）与 T5（信息不全）属于抽取层和对话编排层，不在规则代码中。"""
import sys, pathlib
sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1] / "shared"))
from rules import decide


def test_t1_missing_part_in_stock():
    assert decide("AS-10023", "MISSING_PARTS", "UNKNOWN", ["C4"]) == {
        "decision": "RESHIP_PARTS", "parts": ["C4"]}


def test_missing_part_out_of_stock():
    r = decide("AS-10023", "MISSING_PARTS", "UNKNOWN", ["Z9"])
    assert r["decision"] == "HANDOFF" and r["reason"] == "part_out_of_stock"


def test_t2_cosmetic_damage_offers_two_options():
    r = decide("AS-10088", "DAMAGED", "COSMETIC", [])
    assert r == {"decision": "OFFER", "options": ["RESHIP_PARTS", "PARTIAL_REFUND_15"]}


def test_t3_structural_over_300_needs_approval():
    r = decide("AS-10101", "DAMAGED", "STRUCTURAL", [])
    assert r == {"decision": "HANDOFF", "reason": "needs_approval"}


def test_structural_under_300_offers_replacement_or_refund():
    r = decide("AS-10088", "DAMAGED", "STRUCTURAL", [])
    assert r["options"] == ["REPLACEMENT", "FULL_REFUND"]


def test_unknown_severity_goes_to_human():
    assert decide("AS-10088", "DAMAGED", "UNKNOWN", [])["decision"] == "HANDOFF"


def test_t6_over_30_days():
    r = decide("AS-09001", "MISSING_PARTS", "UNKNOWN", ["C4"])
    assert r == {"decision": "HANDOFF", "reason": "over_30_days"}
