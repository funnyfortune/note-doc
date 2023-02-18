(window.webpackJsonp=window.webpackJsonp||[]).push([[165],{485:function(v,_,t){"use strict";t.r(_);var p=t(6),e=Object(p.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[v._v("功能描述")]),v._v(" "),_("p",[v._v("后台调度使用了开源项目"),_("a",{attrs:{href:"https://gitee.com/xuxueli0323/xxl-job",target:"_blank",rel:"noopener noreferrer"}},[v._v("XXL-JOB"),_("OutboundLink")],1),v._v("，是一个分布式任务调度平台，其核心设计目标是开发迅速、学习简单、轻量级、易扩展。现已开放源代码并接入多家公司线上产品线，开箱即用。")])]),v._v(" "),_("h2",{attrs:{id:"操作步骤"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[v._v("#")]),v._v(" 操作步骤")]),v._v(" "),_("p",[_("strong",[v._v("XXL-JOB包含了以下相关功能特性")]),v._v("。具体操作详情，请查看"),_("a",{attrs:{href:"https://www.xuxueli.com/xxl-job/#%E5%9B%9B%E3%80%81%E6%93%8D%E4%BD%9C%E6%8C%87%E5%8D%97",target:"_blank",rel:"noopener noreferrer"}},[v._v("XXL-JOB操作指南"),_("OutboundLink")],1)]),v._v(" "),_("p",[v._v("1、简单：支持通过Web页面对任务进行CRUD操作，操作简单，一分钟上手；")]),v._v(" "),_("p",[v._v("2、动态：支持动态修改任务状态、启动/停止任务，以及终止运行中任务，即时生效；")]),v._v(" "),_("p",[v._v("3、调度中心HA（中心式）：调度采用中心式设计，“调度中心”自研调度组件并支持集群部署，可保证调度中心HA；")]),v._v(" "),_("p",[v._v("4、执行器HA（分布式）：任务分布式执行，任务”执行器”支持集群部署，可保证任务执行HA；")]),v._v(" "),_("p",[v._v("5、注册中心: 执行器会周期性自动注册任务, 调度中心将会自动发现注册的任务并触发执行。同时，也支持手动录入执行器地址；")]),v._v(" "),_("p",[v._v("6、弹性扩容缩容：一旦有新执行器机器上线或者下线，下次调度时将会重新分配任务；")]),v._v(" "),_("p",[v._v("7、触发策略：提供丰富的任务触发策略，包括：Cron触发、固定间隔触发、固定延时触发、API（事件）触发、人工触发、父子任务触发；")]),v._v(" "),_("p",[v._v("8、调度过期策略：调度中心错过调度时间的补偿处理策略，包括：忽略、立即补偿触发一次等；")]),v._v(" "),_("p",[v._v("9、阻塞处理策略：调度过于密集执行器来不及处理时的处理策略，策略包括：单机串行（默认）、丢弃后续调度、覆盖之前调度；")]),v._v(" "),_("p",[v._v("10、任务超时控制：支持自定义任务超时时间，任务运行超时将会主动中断任务；")]),v._v(" "),_("p",[v._v("11、任务失败重试：支持自定义任务失败重试次数，当任务失败时将会按照预设的失败重试次数主动进行重试；其中分片任务支持分片粒度的失败重试；")]),v._v(" "),_("p",[v._v("12、任务失败告警；默认提供邮件方式失败告警，同时预留扩展接口，可方便的扩展短信、钉钉等告警方式；")]),v._v(" "),_("p",[v._v("13、路由策略：执行器集群部署时提供丰富的路由策略，包括：第一个、最后一个、轮询、随机、一致性HASH、最不经常使用、最近最久未使用、故障转移、忙碌转移等；")]),v._v(" "),_("p",[v._v("14、分片广播任务：执行器集群部署时，任务路由策略选择”分片广播”情况下，一次任务调度将会广播触发集群中所有执行器执行一次任务，可根据分片参数开发分片任务；")]),v._v(" "),_("p",[v._v("15、动态分片：分片广播任务以执行器为维度进行分片，支持动态扩容执行器集群从而动态增加分片数量，协同进行业务处理；在进行大数据量业务操作时可显著提升任务处理能力和速度。")]),v._v(" "),_("p",[v._v("16、故障转移：任务路由策略选择”故障转移”情况下，如果执行器集群中某一台机器故障，将会自动Failover切换到一台正常的执行器发送调度请求。")]),v._v(" "),_("p",[v._v("17、任务进度监控：支持实时监控任务进度；")]),v._v(" "),_("p",[v._v("18、Rolling实时日志：支持在线查看调度结果，并且支持以Rolling方式实时查看执行器输出的完整的执行日志；")]),v._v(" "),_("p",[v._v("19、GLUE：提供Web IDE，支持在线开发任务逻辑代码，动态发布，实时编译生效，省略部署上线的过程。支持30个版本的历史版本回溯。")]),v._v(" "),_("p",[v._v("20、脚本任务：支持以GLUE模式开发和运行脚本任务，包括Shell、Python、NodeJS、PHP、PowerShell等类型脚本;")]),v._v(" "),_("p",[v._v("21、命令行任务：原生提供通用命令行任务Handler（Bean任务，”CommandJobHandler”）；业务方只需要提供命令行即可；")]),v._v(" "),_("p",[v._v("22、任务依赖：支持配置子任务依赖，当父任务执行结束且执行成功后将会主动触发一次子任务的执行, 多个子任务用逗号分隔；")]),v._v(" "),_("p",[v._v("23、一致性：“调度中心”通过DB锁保证集群分布式调度的一致性, 一次任务调度只会触发一次执行；")]),v._v(" "),_("p",[v._v("24、自定义任务参数：支持在线配置调度任务入参，即时生效；")]),v._v(" "),_("p",[v._v("25、调度线程池：调度系统多线程触发调度运行，确保调度精确执行，不被堵塞；")]),v._v(" "),_("p",[v._v("26、数据加密：调度中心和执行器之间的通讯进行数据加密，提升调度信息安全性；")]),v._v(" "),_("p",[v._v("27、邮件报警：任务失败时支持邮件报警，支持配置多邮件地址群发报警邮件；")]),v._v(" "),_("p",[v._v("28、推送maven中央仓库: 将会把最新稳定版推送到maven中央仓库, 方便用户接入和使用;")]),v._v(" "),_("p",[v._v("29、运行报表：支持实时查看运行数据，如任务数量、调度次数、执行器数量等；以及调度报表，如调度日期分布图，调度成功分布图等；")]),v._v(" "),_("p",[v._v("30、全异步：任务调度流程全异步化设计实现，如异步调度、异步运行、异步回调等，有效对密集调度进行流量削峰，理论上支持任意时长任务的运行；")]),v._v(" "),_("p",[v._v("31、跨语言：调度中心与执行器提供语言无关的 RESTful API 服务，第三方任意语言可据此对接调度中心或者实现执行器。除此之外，还提供了 “多任务模式”和“httpJobHandler”等其他跨语言方案；")]),v._v(" "),_("p",[v._v("32、国际化：调度中心支持国际化设置，提供中文、英文两种可选语言，默认为中文；")]),v._v(" "),_("p",[v._v("33、容器化：提供官方docker镜像，并实时更新推送dockerhub，进一步实现产品开箱即用；")]),v._v(" "),_("p",[v._v("34、线程池隔离：调度线程池进行隔离拆分，慢任务自动降级进入”Slow”线程池，避免耗尽调度线程，提高系统稳定性；")]),v._v(" "),_("p",[v._v("35、用户管理：支持在线管理系统用户，存在管理员、普通用户两种角色；")]),v._v(" "),_("p",[v._v("36、权限控制：执行器维度进行权限控制，管理员拥有全量权限，普通用户需要分配执行器权限后才允许相关操作；")])])}),[],!1,null,null,null);_.default=e.exports}}]);