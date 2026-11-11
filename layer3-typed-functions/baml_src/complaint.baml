// complaint.baml

enum IssueType {
  DAMAGED       @description("商品到货有破损、划痕、断裂、变形")
  MISSING_PARTS @description("包装内缺少配件、螺丝、部件")
  OTHER         @description("与破损缺件无关的问题")
}

enum Resolution {
  PARTS
  PARTIAL_REFUND
  REPLACEMENT
  REFUND
  NONE @description("客户没有表达偏好")
}

class ComplaintFacts {
  order_id string? @description("订单号，形如 AS-12345；消息中没有则为 null")
  issue_type IssueType
  missing_part_codes string[] @description("说明书上的配件编号，如 C4、B2")
  has_photos bool
  safety_risk bool @description("提到受伤、安全隐患、律师、起诉、媒体曝光时为 true")
  preferred_resolution Resolution
}

function ExtractComplaint(message: string, photos: image[]) -> ComplaintFacts {
  client "openai/gpt-4o-mini"
  prompt #"
    {{ _.role("system") }}
    你从售后消息中抽取结构化事实。只抽取客户明确说出的信息，不推测。

    {{ _.role("user") }}
    客户消息：
    {{ message }}

    附带照片数量：{{ photos | length }}

    {{ ctx.output_format }}
  "#
}

test t1_missing_part {
  functions [ExtractComplaint]
  args {
    message "Order #AS-10023. The swing chair arrived but part C4 is missing."
    photos []
  }
  @@assert({{ this.issue_type == "MISSING_PARTS" }})
  @@assert({{ this.missing_part_codes | length == 1 }})
  @@assert({{ this.safety_risk == false }})
}

test t4_safety {
  functions [ExtractComplaint]
  args {
    message "The bench collapsed and my son got hurt. I'm contacting a lawyer."
    photos []
  }
  @@assert({{ this.safety_risk == true }})
  @@assert({{ this.order_id == null }})
}

test t5_missing_info {
  functions [ExtractComplaint]
  args {
    message "My order is damaged."
    photos []
  }
  @@assert({{ this.order_id == null }})
  @@assert({{ this.has_photos == false }})
}
