(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{494:function(t,e,r){"use strict";r.r(e);var a=r(6),s=Object(a.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("功能描述")]),t._v(" "),e("p",[t._v("短信渠道对接阿里云、腾讯云、云片等短信平台，提供统一的短信客户端")]),t._v(" "),e("p",[t._v("一般情况下，建议接入 2-3 个短信平台，避免某个短信平台故障时，影响业务的正常运行。")]),t._v(" "),e("p",[t._v("例如说，手机验证码的短信平台 A 故障时，赶紧将短信验证码切换到短信平台 B 上，否则用户将无法正常登录或是注册。")])]),t._v(" "),e("h2",{attrs:{id:"操作步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[t._v("#")]),t._v(" 操作步骤")]),t._v(" "),e("h2",{attrs:{id:"_1-列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-列表"}},[t._v("#")]),t._v(" 1.列表")]),t._v(" "),e("p",[t._v("列表包含了[新增，修改，删除]功能按钮，具有相关权限则可见，可使用。")]),t._v(" "),e("p",[t._v("点击 [消息管理 -> 短信管理 -> 短信渠道] 菜单，查看短信渠道的列表。如下图所示：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/operate/%E6%B6%88%E6%81%AF%E7%AE%A1%E7%90%86/sms-channel.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"_2-新增-修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-新增-修改"}},[t._v("#")]),t._v(" 2.新增/修改")]),t._v(" "),e("p",[t._v("点击 [新增] 按钮，并填写信息如下图：\n"),e("img",{attrs:{src:"/img/operate/%E6%B6%88%E6%81%AF%E7%AE%A1%E7%90%86/channel-add.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"云片"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#云片"}},[t._v("#")]),t._v(" 云片")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("短信 API 的账号，可通过 "),e("a",{attrs:{href:"https://www.yunpian.com/console/#/setting/account/subAccountManager",target:"_blank",rel:"noopener noreferrer"}},[t._v("云片 —— 子账号管理 "),e("OutboundLink")],1),t._v(" 获取。【无需密钥】")])]),t._v(" "),e("li",[e("p",[t._v("短信发送回调 URL，可通过 "),e("a",{attrs:{href:"https://www.yunpian.com/console/#/setting/system/pushAndPull",target:"_blank",rel:"noopener noreferrer"}},[t._v("云片 —— 数据推送与获取 "),e("OutboundLink")],1),t._v(" 配置。")])])]),t._v(" "),e("h3",{attrs:{id:"阿里云"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#阿里云"}},[t._v("#")]),t._v(" 阿里云")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("短信 API 的账号、密钥，可通过 "),e("a",{attrs:{href:"https://ram.console.aliyun.com/manage/ak",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云 —— AccessKey "),e("OutboundLink")],1),t._v(" 获取。")])]),t._v(" "),e("li",[e("p",[t._v("短信发送回调 URL，可通过 "),e("a",{attrs:{href:"https://dysms.console.aliyun.com/general/upward",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云 —— 短信服务 —— 通用设置 "),e("OutboundLink")],1),t._v(" 配置。")])])]),t._v(" "),e("h3",{attrs:{id:"腾讯云"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#腾讯云"}},[t._v("#")]),t._v(" 腾讯云")]),t._v(" "),e("ul",[e("li",[t._v("短信 API 的账号、密钥，可通过 "),e("a",{attrs:{href:"https://console.cloud.tencent.com/cam/capi",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云 —— API 密钥管理 "),e("OutboundLink")],1),t._v(" 获取。")])]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("注意！！！")]),t._v(" "),e("p",[t._v("腾讯云需要额外使用 "),e("a",{attrs:{href:"https://console.cloud.tencent.com/smsv2/app-manage",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDKAppID "),e("OutboundLink")],1),t._v(" 参数，它的账号需要采用  "),e("code",[t._v("SDKAppID secretId")]),t._v("  格式，具体可见 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-biz-sms/src/main/java/cn/iocoder/yudao/framework/sms/core/client/impl/tencent/TencentSmsChannelProperties.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("TencentSmsChannelProperties "),e("OutboundLink")],1),t._v(" 类。")])]),t._v(" "),e("ul",[e("li",[t._v("短信发送回调 URL，可通过 "),e("a",{attrs:{href:"https://console.cloud.tencent.com/smsv2/app-setting",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云 —— 短信 —— 基础配置 "),e("OutboundLink")],1),t._v(" 配置。")])]),t._v(" "),e("h3",{attrs:{id:"钉钉"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#钉钉"}},[t._v("#")]),t._v(" 钉钉")]),t._v(" "),e("p",[t._v("该类型使用钉钉机器人来模拟短信发送，用于日常调试。")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("短信 API 的账号，对应机器人的 Webhook 的  "),e("code",[t._v("access_token")]),t._v("  参数")])]),t._v(" "),e("li",[e("p",[t._v("短信 API 的密钥，对应机器人的安全设置的加签")])])]),t._v(" "),e("p",[t._v("上图使用的配置，是艿艿自己的钉钉机器人。正式使用时，必须参考 "),e("a",{attrs:{href:"https://open.dingtalk.com/document/group/custom-robot-access",target:"_blank",rel:"noopener noreferrer"}},[t._v("《钉钉开放平台 —— 自定义机器人接入 》 "),e("OutboundLink")],1),t._v(" 文档，申请自己的专属机器人。")]),t._v(" "),e("h2",{attrs:{id:"_3-删除"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除"}},[t._v("#")]),t._v(" 3.删除")]),t._v(" "),e("p",[t._v("在列表界面，选中相应的条目之后，点击右侧的"),e("font",{attrs:{color:"blue"}},[t._v("[删除]")]),t._v("按钮将会出现"),e("strong",[t._v("删除确认信息")]),t._v("弹框，选中后点击”确定”按钮即可进行删除操作。")],1)])}),[],!1,null,null,null);e.default=s.exports}}]);