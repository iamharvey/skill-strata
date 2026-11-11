import dspy
from typing import Literal

dspy.configure(lm=dspy.LM("openai/gpt-4o-mini"))

class AssessDamage(dspy.Signature):
    """判断大件家具到货破损的严重程度。
    COSMETIC：划痕、轻微凹痕、色差，不影响组装与承重。
    STRUCTURAL：断裂、开裂、变形、孔位错误导致无法组装或影响承重。
    证据不足时输出 UNKNOWN。"""

    description: str = dspy.InputField(desc="客户对破损的文字描述")
    photo: dspy.Image = dspy.InputField(desc="破损照片")
    product_type: str = dspy.InputField(desc="商品类型，如 swing chair、patio table")
    severity: Literal["COSMETIC", "STRUCTURAL", "UNKNOWN"] = dspy.OutputField()
    evidence: str = dspy.OutputField(desc="一句话说明依据，供人工复核")

assess = dspy.ChainOfThought(AssessDamage)

# 历史工单中已由人工确认等级的样本（示意）
trainset = [
    dspy.Example(
        description="the table top has a few scratches",
        photo=dspy.Image("cases/10088.jpg"),
        product_type="patio table",
        severity="COSMETIC",
    ).with_inputs("description", "photo", "product_type"),
    dspy.Example(
        description="the frame leg snapped while assembling",
        photo=dspy.Image("cases/10101.jpg"),
        product_type="swing chair",
        severity="STRUCTURAL",
    ).with_inputs("description", "photo", "product_type"),
    # ... 实际需要几十到几百条
]

def severity_metric(example, pred, trace=None):
    # 把结构性破损误判为轻微，比反过来代价更高
    if example.severity == "STRUCTURAL" and pred.severity == "COSMETIC":
        return 0.0
    if pred.severity == "UNKNOWN":
        return 0.5          # 转人工可接受，但不是最优
    return float(pred.severity == example.severity)

optimizer = dspy.MIPROv2(metric=severity_metric, auto="light")
optimized_assess = optimizer.compile(assess, trainset=trainset)
optimized_assess.save("assess_damage_v1.json")
