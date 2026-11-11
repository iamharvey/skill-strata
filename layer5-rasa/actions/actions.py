from rasa_sdk import Action, Tracker
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet

from rules import decide            # 即 shared/rules.py，部署时放入 actions 可导入路径

class ActionLookupOrder(Action):
    def name(self) -> str:
        return "action_lookup_order"

    async def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain):
        order = await oms.get(tracker.get_slot("order_id"))          # 示意
        return [
            SlotSet("days_since_delivery", order.days_since_delivery),
            SlotSet("amount_usd", order.amount_usd),
        ]

class ActionDecideResolution(Action):
    def name(self) -> str:
        return "action_decide_resolution"

    async def run(self, dispatcher: CollectingDispatcher, tracker: Tracker, domain):
        issue = "MISSING_PARTS" if tracker.get_slot("issue_type") == "missing_parts" else "DAMAGED"
        parts = [p.strip() for p in (tracker.get_slot("missing_part_codes") or "").split(",") if p.strip()]
        result = decide(
            tracker.get_slot("order_id"),
            issue,
            tracker.get_slot("severity") or "UNKNOWN",
            parts,
        )
        return [
            SlotSet("decision", result["decision"]),
            SlotSet("options", result.get("options", [])),
        ]
