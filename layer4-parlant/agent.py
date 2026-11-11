import asyncio
import parlant.sdk as p

# ---------- 工具：所有硬判断都在工具里 ----------

@p.tool
async def lookup_order(context: p.ToolContext, order_id: str) -> p.ToolResult:
    """查询订单金额与签收天数。"""
    order = await oms.get(order_id)                       # 示意
    return p.ToolResult(data={
        "amount_usd": order.amount_usd,
        "days_since_delivery": order.days_since_delivery,
    })

@p.tool
async def check_parts_stock(context: p.ToolContext, part_codes: list[str]) -> p.ToolResult:
    """查询配件库存。"""
    result = await parts_inventory.check(part_codes)      # 示意
    return p.ToolResult(data=result)

@p.tool
async def decide_resolution(
    context: p.ToolContext,
    order_id: str,
    issue_type: str,
    severity: str,
    part_codes: list[str],
) -> p.ToolResult:
    """调用规则服务（即第一层的 decide 逻辑），返回唯一允许的方案。"""
    return p.ToolResult(data=rules.decide(order_id, issue_type, severity, part_codes))

@p.tool
async def create_parts_reshipment(
    context: p.ToolContext, order_id: str, part_codes: list[str]
) -> p.ToolResult:
    ticket = await aftersales.reship(order_id, part_codes)  # 示意
    return p.ToolResult(data={"ticket_id": ticket.id})

@p.tool
async def transfer_to_human(context: p.ToolContext, reason: str) -> p.ToolResult:
    await handoff.create(context.session_id, reason)        # 示意
    return p.ToolResult(data={"transferred": True})


# ---------- Journey：正常流程 ----------

async def create_damage_journey(agent: p.Agent) -> p.Journey:
    journey = await agent.create_journey(
        title="到货破损或缺件",
        conditions=["客户反馈收到的商品破损、有划痕、断裂，或缺少配件"],
        description="收集订单与证据，调用规则服务得出方案，并执行或转人工。",
    )

    t1 = await journey.initial_state.transition_to(
        chat_state="确认客户遇到的问题，并请客户提供订单号",
    )
    t2 = await t1.target.transition_to(tool_state=lookup_order, condition="客户提供了订单号")

    fork = await t2.target.fork()

    # 超过 30 天：R2
    late = await fork.target.transition_to(
        tool_state=transfer_to_human,
        condition="签收超过 30 天",
        tool_instruction="reason 填 over_30_days",
    )
    late_msg = await late.target.transition_to(chat_state="说明已转交专人处理")
    await late_msg.target.transition_to(state=p.END_JOURNEY)

    # 缺件分支
    mp = await fork.target.transition_to(
        chat_state="请客户提供说明书上的缺失配件编号，例如 C4",
        condition="签收 30 天内，且客户反馈缺件",
    )
    # 破损分支
    dmg = await fork.target.transition_to(
        chat_state="请客户上传破损部位的照片",
        condition="签收 30 天内，且客户反馈破损",
    )

    decide_mp = await mp.target.transition_to(
        tool_state=decide_resolution, condition="客户提供了配件编号",
    )
    decide_dmg = await dmg.target.transition_to(
        tool_state=decide_resolution,
        condition="客户上传了照片",
        tool_instruction="severity 使用破损等级判断服务的结果；拿不准填 UNKNOWN",
    )

    # 两条分支在结论处汇合
    present = await decide_mp.target.transition_to(
        chat_state="按规则服务返回的结论向客户说明方案；有多个选项时请客户选择",
    )
    await decide_dmg.target.transition_to(state=present.target)

    reship = await present.target.transition_to(
        tool_state=create_parts_reshipment,
        condition="结论是补寄配件，或客户选择了补寄配件",
    )
    done = await reship.target.transition_to(chat_state="告知补寄工单号，物流单号会另行发送")
    await done.target.transition_to(state=p.END_JOURNEY)

    handoff_t = await present.target.transition_to(
        tool_state=transfer_to_human, condition="结论是转人工",
    )
    await handoff_t.target.transition_to(state=p.END_JOURNEY)

    # 只在本 Journey 内生效的规则
    await journey.create_guideline(
        condition="客户要求的方案不在规则服务返回的选项中",
        action="礼貌说明当前可提供的选项，不自行增加方案；客户坚持时转人工",
        tools=[transfer_to_human],
    )
    return journey


# ---------- 全局 Guideline：任何时刻都生效 ----------

async def create_global_guidelines(agent: p.Agent) -> None:
    await agent.create_guideline(                               # R6
        condition="客户提到受伤、安全隐患、律师、起诉或媒体曝光",
        action="立即转人工，只致歉并说明专人会尽快联系，不讨论原因、责任或赔偿",
        tools=[transfer_to_human],
    )
    await agent.create_guideline(                               # R7
        condition="客户询问退款金额或到账时间，而规则服务尚未返回结论",
        action="说明需要先核实订单和证据，不给出任何金额或时效",
    )
    await agent.create_guideline(                               # R8
        condition="客户使用非英语交流",
        action="使用客户的语言回复",
    )


async def main() -> None:
    async with p.Server() as server:
        agent = await server.create_agent(
            name="AfterSales",
            description="跨境家具品牌售后客服，专业克制，先确认问题再给方案。",
        )
        await create_global_guidelines(agent)
        await create_damage_journey(agent)

asyncio.run(main())
