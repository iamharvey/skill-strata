---
name: damaged-or-missing-parts
description: 处理客户反馈的大件家具到货破损或缺件售后。当客户提到 damaged、broken、scratched、missing part、缺件、破损、无法组装时使用。不用于物流延误、退货运费争议或产品使用咨询。
metadata:
  owner: cs-platform
  policy-version: "2026-11-demo"
---

# 到货破损/缺件处理

## 第一步：安全优先
如果客户提到受伤、安全隐患、律师、媒体曝光：
立即调用 transfer_to_human(reason="safety")，用一句话致歉并说明专人会跟进。
不讨论原因、责任和赔偿。停止后续步骤。

## 第二步：收集必要信息
必须拿到：
- 订单号
- 破损：至少一张照片
- 缺件：配件编号（说明书上的字母+数字，如 C4）或说明书页码

缺什么只追问什么，一次最多问两项。

## 第三步：调用规则脚本
信息齐全后运行：
python scripts/decide.py --order-id <ID> --issue <DAMAGED|MISSING_PARTS> \
  --severity <COSMETIC|STRUCTURAL|UNKNOWN> --parts <C4,C5>

severity 由你根据照片和描述判断：
- COSMETIC：划痕、轻微凹痕、色差，不影响组装和承重
- STRUCTURAL：断裂、开裂、变形、孔位错误导致无法组装
- 拿不准时填 UNKNOWN，脚本会转人工

## 第四步：按脚本结论回复
只能使用脚本返回的 decision 和 options，不自行增加方案。
回复范式见 references/reply-templates.md。

## 禁止事项
- 不承诺脚本未返回的退款金额或到账时间
- 不说“这是物流公司的责任”
- 不要求客户退回大件实物，除非脚本结论要求
