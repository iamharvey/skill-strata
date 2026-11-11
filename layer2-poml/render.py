import poml

messages = poml.poml(
    "reply.poml",
    context={
        "customer_language": "English",
        "customer_message": "Order #AS-10088, the table top has a few scratches.",
        "decision": "OFFER",
        "options": ["RESHIP_PARTS", "PARTIAL_REFUND_15"],
        "reason": None,
    },
    format="openai_chat",
)
# 把 messages 交给任意 Chat Completion 接口
