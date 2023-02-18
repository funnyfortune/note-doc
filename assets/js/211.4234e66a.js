(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{531:function(a,t,s){"use strict";s.r(t);var e=s(6),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"手摸手-spring-cloud-gateway-jwt-实现登录认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#手摸手-spring-cloud-gateway-jwt-实现登录认证"}},[a._v("#")]),a._v(" 手摸手 Spring Cloud Gateway + JWT 实现登录认证")]),a._v(" "),t("p",[a._v("你好，我是悟空。")]),a._v(" "),t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("上篇我已经讲解了 Spring Cloud 的原理和实战，这次就要结合 JWT 来实现登录认证的功能了。")]),a._v(" "),t("p",[a._v("本文已收录至"),t("a",{attrs:{href:"https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzAwMjI0ODk0NA==&action=getalbum&album_id=2083392961806925826#wechat_redirect",target:"_blank",rel:"noopener noreferrer"}},[a._v("《深入剖析 Spring Cloud 底层架构原理》"),t("OutboundLink")],1),a._v("，已更新 17 讲。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220815090234699f67G4E.png",alt:"目录"}})]),a._v(" "),t("p",[a._v("通过本文你会掌握以下知识点：")]),a._v(" "),t("ul",[t("li",[a._v("如何用"),t("code",[a._v("认证服务")]),a._v("做登录认证。")]),a._v(" "),t("li",[a._v("如何生成 JWT 令牌(Token)")]),a._v(" "),t("li",[a._v("如何用 Gateway 对 Token 验证。")]),a._v(" "),t("li",[a._v("Gateway 如何从 Token 中拿到用户信息并转发给业务服务。")]),a._v(" "),t("li",[a._v("业务服务如何从请求中拿到身份信息处理业务逻辑。")]),a._v(" "),t("li",[a._v("如何刷新令牌。")])]),a._v(" "),t("p",[a._v("本篇还是基于我的开源项目 PassJava 作为讲解。")]),a._v(" "),t("blockquote",[t("p",[a._v("PassJava 开源地址：https://github.com/Jackson0714/PassJava-Platform")])]),a._v(" "),t("p",[a._v("前置知识点：")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzAwMjI0ODk0NA==&mid=2451964154&idx=1&sn=202154c1206936d8eaa72e617a2ef6ad&chksm=8d1ff965ba6870732290b202e2f97c85f9c8c6f84f8d33e57dca63085f5eefc9aba05e0ef523&scene=178&cur_album_id=2083392961806925826#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解 Spring Cloud Gateway 的原理"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"http://mp.weixin.qq.com/s?__biz=MzAwMjI0ODk0NA==&mid=2451964568&idx=1&sn=f6fcb18483f45bd6a1bc5f003fc3564f&chksm=8d1ffb07ba68721162004c14e794a4f3e4cf2b2f51906f2c78ed7953dd4e48ab8a88e78f7570#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("我的师父把 「JWT 令牌」玩到了极致"),t("OutboundLink")],1)])]),a._v(" "),t("p",[a._v("在讲解之前有必要澄清下什么是认证、授权、凭证，这三个方面是一个系统中最基础的安全设计。")]),a._v(" "),t("h2",{attrs:{id:"认证、授权、凭证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认证、授权、凭证"}},[a._v("#")]),a._v(" 认证、授权、凭证")]),a._v(" "),t("h3",{attrs:{id:"_1-1-认证-authentication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-认证-authentication"}},[a._v("#")]),a._v(" 1.1 认证（Authentication）")]),a._v(" "),t("p",[a._v("认证表示你是谁。系统如何正确分辨出操作用户的真实身份，比如通过输入用户名和密码来辨别身份。")]),a._v(" "),t("h3",{attrs:{id:"_1-2-授权-authorization"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-授权-authorization"}},[a._v("#")]),a._v(" 1.2 授权（Authorization）")]),a._v(" "),t("p",[a._v("授权表示你能干什么。系统如何控制一个用户能看到哪些数据和操作哪些功能，也就是具有哪些权限。")]),a._v(" "),t("h3",{attrs:{id:"_1-3-凭证-credential"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-凭证-credential"}},[a._v("#")]),a._v(" 1.3 凭证（Credential）")]),a._v(" "),t("p",[a._v("表示你如何证明你的身份。系统如何保证它与用户之间的承诺是双方当时真实意图的体现，是准确、完整和不可抵赖的。")]),a._v(" "),t("p",[a._v("接下来我们看下使用 JWT 作为凭证完成认证的原理。")]),a._v(" "),t("h2",{attrs:{id:"认证的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认证的原理"}},[a._v("#")]),a._v(" 认证的原理")]),a._v(" "),t("p",[a._v("在如下的认证时序图中，有以下几种角色：")]),a._v(" "),t("ul",[t("li",[t("strong",[a._v("客户端")]),a._v("：表示 APP 端或 PC 端的前端页面。")]),a._v(" "),t("li",[t("strong",[a._v("网关")]),a._v("：表示 Spring Cloud Gateway 网关服务，这里。")]),a._v(" "),t("li",[t("strong",[a._v("认证服务")]),a._v("：用来接收客户的登录请求、登出请求、刷新令牌的操作。")]),a._v(" "),t("li",[t("strong",[a._v("业务服务")]),a._v("：和系统业务相关的微服务。")])]),a._v(" "),t("p",[a._v("认证和校验身份的流程如下所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-202208142218310444AGSjdwqWPvG.png",alt:"认证和校验身份流程"}})]),a._v(" "),t("p",[a._v("① "),t("strong",[a._v("用户登录")]),a._v("：客户端在登录页面输入用户名和密码，提交表单，调用登录接口。")]),a._v(" "),t("p",[a._v("② "),t("strong",[a._v("转发请求")]),a._v("：这里会先将登录请求发送到网关服务 passjava-gateway，网关对于登录请求会直接转发到认证服务 passjava-auth。（网关对登录请求不做 token 校验，这个可以配置不校验哪些请求 URL）")]),a._v(" "),t("p",[a._v("③ "),t("strong",[a._v("认证")]),a._v("：认证服务会将请求参数中的用户名+密码和数据库中的用户进行比对，如果完全匹配，则认证通过。")]),a._v(" "),t("p",[a._v("④ "),t("strong",[a._v("生成令牌")]),a._v("：生成两个令牌："),t("code",[a._v("access_token")]),a._v(" 和 refresh_token（刷新令牌），刷新令牌我们后面再说，这里其实也可以只用生成一个令牌 access_token。令牌里面会包含用户的身份信息，"),t("strong",[a._v("如果要做权限管控")]),a._v("，还需要在 token 里面包含用户的权限信息，权限这一块不在本篇展开，会放到下一篇中进行讲解。")]),a._v(" "),t("p",[a._v("⑤ "),t("strong",[a._v("客户端缓存 token")]),a._v("：客户端拿到两个 token 缓存到 cookie 中或者 LocalStorage 中。")]),a._v(" "),t("p",[a._v("⑥ "),t("strong",[a._v("携带 token 发起请求")]),a._v("：客户端下次想调用业务服务时，将 access_token 放到请求的 header 中。")]),a._v(" "),t("p",[a._v("⑦ "),t("strong",[a._v("网关校验 token")]),a._v("：请求还是先到到网关服务，然后由它校验 access_token 是否合法。如果 access_token 未过期，且能正确解析出来，就说明是合法的 access_token。")]),a._v(" "),t("p",[a._v("⑧ "),t("strong",[a._v("携带用户身份信息转发请求")]),a._v("：网关将 access_token 中携带的用户的 user_id 放到请求的 header 中，转发给真正的业务服务。")]),a._v(" "),t("p",[a._v("⑨ "),t("strong",[a._v("处理业务逻辑")]),a._v("：业务服务从 header 中拿到用户的 user_id，然后处理业务逻辑，处理完后将结果延原理返回给客户端。")]),a._v(" "),t("p",[a._v("接下来我们看下项目的整体架构。")]),a._v(" "),t("h2",{attrs:{id:"项目整体结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目整体结构"}},[a._v("#")]),a._v(" 项目整体结构")]),a._v(" "),t("blockquote",[t("p",[a._v("Github 项目地址：https://github.com/Jackson0714/PassJava-Platform")]),a._v(" "),t("p",[a._v("Gitee 项目地址：https://toscode.gitee.com/jayh2018/PassJava-Platform")])]),a._v(" "),t("ul",[t("li",[a._v("认证服务：passjava-auth")]),a._v(" "),t("li",[a._v("网关服务：passjava-gateway")]),a._v(" "),t("li",[a._v("JWT 公共项目：passjava-jwt，认证服务和网关服务都会引用这个公共项目。")]),a._v(" "),t("li",[a._v("业务服务：passjava-member，会员服务作为本次案例的业务服务。")]),a._v(" "),t("li",[a._v("Nacos 注册配置中心")])]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814114324471jr5WGX.png",alt:"PassJava-Platform 框架"}})]),a._v(" "),t("h3",{attrs:{id:"认证服务-passjava-auth"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#认证服务-passjava-auth"}},[a._v("#")]),a._v(" 认证服务：passjava-auth")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-202208141143492007qKkh9.png",alt:"passjava-auth 服务"}})]),a._v(" "),t("p",[a._v("核心类就是 JwtAuthController 类，里面有登录接口和刷新令牌的接口。")]),a._v(" "),t("h3",{attrs:{id:"网关服务-passjava-gateway"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网关服务-passjava-gateway"}},[a._v("#")]),a._v(" 网关服务：passjava-gateway")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814114417058SCsk85.png",alt:"passjava-gateway 服务"}})]),a._v(" "),t("p",[a._v("核心类就是 JwtAuthCheckFilter 全局过滤器。")]),a._v(" "),t("p",[a._v("如果不需要在服务端保存刷新令牌，可以不需要 redis 配置。")]),a._v(" "),t("h3",{attrs:{id:"jwt-公共项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jwt-公共项目"}},[a._v("#")]),a._v(" JWT 公共项目")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814114509406dR6UDZ.png",alt:"passjava-jwt 服务"}})]),a._v(" "),t("p",[a._v("核心类就是 PassJavaJWTTokenUtil 工具类。认证服务用引入 JWT 项目后用来生成 token，网关服务引入 JWT 项目后用来校验 token 合法性。")]),a._v(" "),t("h3",{attrs:{id:"业务服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#业务服务"}},[a._v("#")]),a._v(" 业务服务")]),a._v(" "),t("p",[a._v("这里我选择了会员微服务作为本次演示的业务微服务。")]),a._v(" "),t("p",[a._v("它从网关转发的请求 Header 中拿到 userId， 根据 userId 查询 member 信息。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814114548560zCVFYl.png",alt:"passjava-member 服务"}})]),a._v(" "),t("p",[a._v("核心文件是 MemberController 类、MemberEntity实体类、MemberService服务类、MemberDao 类和 mapper 文件。")]),a._v(" "),t("h3",{attrs:{id:"启动的服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#启动的服务"}},[a._v("#")]),a._v(" 启动的服务")]),a._v(" "),t("h4",{attrs:{id:"nacos-注册配置中心"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nacos-注册配置中心"}},[a._v("#")]),a._v(" Nacos 注册配置中心")]),a._v(" "),t("p",[a._v("首先启动 Nacos 服务。和 PassJava 项目配套使用的 Nacos 工具已经上传到网盘，下载后直接运行启动脚本就可以将 Nacos 在本地启动。")]),a._v(" "),t("p",[a._v("启动教程：")]),a._v(" "),t("div",{staticClass:"language-SH line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("www.passjava.cn/"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#/01.项目简介/7.本地部署项目Mac版")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h4",{attrs:{id:"网关、会员、认证服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网关、会员、认证服务"}},[a._v("#")]),a._v(" 网关、会员、认证服务")]),a._v(" "),t("p",[a._v("启动以下三个微服务，分别为网关、会员、认证服务。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814111451193gRCzqZ.png",alt:""}})]),a._v(" "),t("p",[a._v("检查下 nacos 注册中心上是否注册了这三个服务：可以看到确实有上面的三个微服务。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814111725968N0Qw2A.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"如何做登录认证"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何做登录认证"}},[a._v("#")]),a._v(" 如何做登录认证")]),a._v(" "),t("p",[a._v("登录认证就是校验下用户提交的账户名和密码与本地数据库中的是否完全匹配，如果匹配，就认证通过。就是下方这个流程的 1、2、3 步。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814105416774WMesSj.png",alt:""}})]),a._v(" "),t("h3",{attrs:{id:"第一步-提交用户名和密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一步-提交用户名和密码"}},[a._v("#")]),a._v(" 第一步：提交用户名和密码")]),a._v(" "),t("p",[a._v("这里用 Postman 工具模拟前端发起登录请求，请求的 URL 如下：")]),a._v(" "),t("div",{staticClass:"language-SH line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("http://localhost:8060/api/auth/login\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814161920022TSi6Tf.png",alt:"image-20220814161920022"}})]),a._v(" "),t("p",[a._v("请求是向网关服务 passjava-gateway 发起的，所以可以看到上面的 URL 中 localhost 和 8060 是网关的 host 和 port。")]),a._v(" "),t("p",[a._v("然后 API 地址为 /api/auth/login，这个地址经过网关的路由匹配后会转发到 passjava-auth 服务的登录 API。")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("http://localhost:10001/auth/login\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("关于网关转发的原理可以参考这篇："),t("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzAwMjI0ODk0NA==&mid=2451964154&idx=1&sn=202154c1206936d8eaa72e617a2ef6ad&chksm=8d1ff965ba6870732290b202e2f97c85f9c8c6f84f8d33e57dca63085f5eefc9aba05e0ef523&scene=178&cur_album_id=2083392961806925826#rd",target:"_blank",rel:"noopener noreferrer"}},[a._v("深入理解 Spring Cloud Gateway 的原理"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("请求参数如下：")]),a._v(" "),t("div",{staticClass:"language-JSON line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"userId"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"wukong"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[a._v('"password"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"123456"')]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("账号和密码都是密文的，转发到认证服务后，会根据 userId 查询出系统用户，然后将 password 参数加密后对比系统用户的密码。")]),a._v(" "),t("p",[a._v("所以为了让用户登录成功，还需要在数据库插入一条系统用户，用户 id 为 wukong，密码是对 123456 加密后的密码。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814163415719HMyHcP.png",alt:""}})]),a._v(" "),t("p",[a._v("在线加密工具地址：")]),a._v(" "),t("div",{staticClass:"language-SH line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("https://www.bejson.com/encrypt/bcrpyt_encode/\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("h3",{attrs:{id:"第二步-转发登录请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二步-转发登录请求"}},[a._v("#")]),a._v(" 第二步：转发登录请求")]),a._v(" "),t("p",[a._v("转发登录请求是网关服务做的，所以我们来看下做了那些事情。")]),a._v(" "),t("p",[a._v("在 Gateway 项目的 application-routers.yml 中配置路由规则：")]),a._v(" "),t("div",{staticClass:"language-YAML line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("cloud")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("gateway")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("routes")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" route_auth "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 认证微服务路由规则")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("uri")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" lb"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("//passjava"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("auth "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 负载均衡，将请求转发到注册中心注册的 passjava-auth 服务")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("predicates")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 断言")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" Path=/api/auth/"),t("span",{pre:!0,attrs:{class:"token important"}},[a._v("**")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 如果前端请求路径包含 api/auth，则应用这条路由规则")]),a._v("\n          "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("filters")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#过滤器")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" RewritePath=/api/("),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("?")]),a._v("<segment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")]),a._v("."),t("span",{pre:!0,attrs:{class:"token important"}},[a._v("*)")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("/$\\"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("segment"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 将跳转路径中包含的api替换成空")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br")])]),t("p",[a._v("在 application.properties 引入 application-routers.yml")]),a._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("spring")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("profiles")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("include")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" routers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" jwt\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("h3",{attrs:{id:"第三步-验证用户账号和密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第三步-验证用户账号和密码"}},[a._v("#")]),a._v(" 第三步：验证用户账号和密码")]),a._v(" "),t("p",[a._v("这一步是认证服务的登录 API 里面做的。在 AuthController 中定义 login 接口，核心步骤就是查找系统用户和比对密码。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-202208141655254572aPJrp.png",alt:"登录 API"}})]),a._v(" "),t("p",[a._v("用户名和密码匹配成功后，就会生成 JWT 令牌。")]),a._v(" "),t("h2",{attrs:{id:"如何生成令牌"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何生成令牌"}},[a._v("#")]),a._v(" 如何生成令牌")]),a._v(" "),t("p",[a._v("生成令牌就是通过工具类 PassJavaJwtTokenUtil 生成 JWT Token，也就是流程图中的第四步。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-2022081417084513103ogTt.png",alt:"流程图-生成 JWT 令牌"}})]),a._v(" "),t("p",[a._v("生成令牌的核心代码如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814172121051Rqwmfq.png",alt:"生成 JWT 的核心代码"}})]),a._v(" "),t("p",[a._v("使用这个工具类的前提是我们需要先引入 jjwt 依赖。这个在 passjava-jwt 项目的 pom 文件中引入。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814172217792z4J5WV.png",alt:"引入 jjwt 依赖"}})]),a._v(" "),t("p",[a._v("用 Postman 工具调用后，可以看到生成的令牌如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814182655100H4H07N.png",alt:"生成令牌"}})]),a._v(" "),t("p",[a._v("用 base64 解码后，可以看到 token 中的 PAYLOAD 里面包含了用户 id 和用户名。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814171711910cic4Jn.png",alt:""}})]),a._v(" "),t("p",[a._v("生成 JWT 的加密密钥一般都是写到配置文件中。这里我是配置在 passjava-jwt 项目的 application-jwt.yml 配置文件中的。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814181404573xWi2V2.png",alt:"JWT 配置项"}})]),a._v(" "),t("p",[a._v("然后认证服务就会将 JWT 令牌返回给客户端了。当客户端想要查询这个 userId 对应的会员信息时，就可以在请求的 Header 中带上 JWT 令牌。")]),a._v(" "),t("h2",{attrs:{id:"如何携带-jwt-发送请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何携带-jwt-发送请求"}},[a._v("#")]),a._v(" 如何携带 JWT 发送请求")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814184517467cvInSy.png",alt:""}})]),a._v(" "),t("p",[a._v("客户端（浏览器或 APP）拿到 JWT 后，可以将 JWT 存放在浏览器的 Cookie 或 LocalStorage（本地存储） 或者内存中。")]),a._v(" "),t("p",[a._v("发送请求时在请求 Header 的 Authorization 字段中设置 JWT，这个字段其实可以自定义，但是我建议用 Authorization，因为这是一种业界标准。")]),a._v(" "),t("p",[a._v("另外告诉大家一个小技巧，在 Postman 工具中有个地方专门配置 Authorization，然后自动加到 Header 中，不用自己手动加 Header。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814180402617UdX4Rz.png",alt:""}})]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814180431393sqNqcg.png",alt:""}})]),a._v(" "),t("p",[a._v("还有一个点需要注意，这里配置的 Authorization 的认证类型为 Bearer Token。它表示令牌可以是任意字符串格式的令牌。然后会在 Authorization 字段中加上一个前缀 Bearer。所以我们在网关服务解析 Header 中的 Authorization 时，需要去掉这个前缀 Bearer，代码如下所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-202208141825224276nl5ld.png",alt:"去掉 Bearer 前缀"}})]),a._v(" "),t("h2",{attrs:{id:"网关如何验证-jwt-和转发请求"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#网关如何验证-jwt-和转发请求"}},[a._v("#")]),a._v(" 网关如何验证 JWT 和转发请求")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814194440430RIKvF0.png",alt:"网关验证 Token和转发请求"}})]),a._v(" "),t("p",[a._v("网关接收到前端发起的业务请求后，会先验证请求的 Header 中是否携带 Authorization 字段，以及里面的 Token 是否合法。然后解析 Token 中的 userId 和 username，放到 header 中再进行转发，也就是流程图中的第七步和第八步。")]),a._v(" "),t("p",[a._v("网关是通过多个"),t("code",[a._v("过滤器 Filter")]),a._v("对请求进行串行拦截处理的，所以我们可以自定义一个全局过滤器，对所有请求进行校验，当然对于一些特殊请求比如登录请求就不需要校验了，因为调用登录请求的时候还没有生成 Token。")]),a._v(" "),t("p",[a._v("网关的全局过滤器 JwtAuthCheckFilter 的核心代码如下所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814185733422F5KMsJ.png",alt:"网关的全局过滤器 JwtAuthCheckFilter"}})]),a._v(" "),t("h2",{attrs:{id:"会员服务处理业务逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#会员服务处理业务逻辑"}},[a._v("#")]),a._v(" 会员服务处理业务逻辑")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814221220859aWnQGr.png",alt:""}})]),a._v(" "),t("p",[a._v("会员服务接收到网关转发的请求后，就从 Header 中拿到用户身份信息，然后通过 userId 获取会员信息。")]),a._v(" "),t("blockquote",[t("p",[a._v("注意：有的时候业务逻辑并不需要身份信息，更多的时候是需要检验用户的操作权限是否足够。其实 Token 里面也是可以携带权限信息的，不过这是下一篇讲解授权的部分。")])]),a._v(" "),t("p",[a._v("获取 userId 的方式其实可以通过加一个"),t("code",[a._v("拦截器")]),a._v("，由拦截器将 Header 中的 userId 和 username 放到线程中，后续的 controller，service，dao 类都可以从线程里面拿到 userId 和 username，不用通过传参的方式。")]),a._v(" "),t("p",[a._v("获取 userId 的方式：")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("方式一：从 request 的 Header 中拿到 userId。代码简单，但是如果其他地方也要用到 userId，则需要通过方法传参的方式传递 userId。")])]),a._v(" "),t("li",[t("p",[a._v("方式二：从线程变量里面拿到 userId。代码复杂，使用简单。好处是所有地方统一从一个地方获取。")])])]),a._v(" "),t("h3",{attrs:{id:"request-中获取-userid-方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#request-中获取-userid-方式"}},[a._v("#")]),a._v(" Request 中获取 userId 方式")]),a._v(" "),t("p",[a._v("代码示例如下：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814195455216njzYqE.png",alt:""}})]),a._v(" "),t("p",[a._v("下面介绍如何使用拦截器方式将 userId 存入线程变量的方式。")]),a._v(" "),t("h3",{attrs:{id:"拦截器方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拦截器方式"}},[a._v("#")]),a._v(" 拦截器方式")]),a._v(" "),t("p",[a._v("在 passjava-common 模块中新增一个拦截器，获取请求头中的身份信息，加入到线程变量中。文件名为 HeaderInterceptor。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814195944424JfFsIz.png",alt:""}})]),a._v(" "),t("p",[a._v("将拦截器注册到 WebMvcConfigurer。文件名为 WebMvcConfig.java。"),t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814220241678N9udz3.png",alt:""}})]),a._v(" "),t("p",[a._v("配置文件中需要定义一个配置项：")]),a._v(" "),t("div",{staticClass:"language-SH line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("文件名；org.springframework.boot.autoconfigure.AutoConfiguration.imports\n配置项：com.jackson0714.passjava.common.config.WebMvcConfig\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])]),t("p",[a._v("然后 passjava-member 服务引入这个拦截器配置。")]),a._v(" "),t("div",{staticClass:"language-JAVA line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("WebMvcConfig")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])]),t("p",[a._v("通过上面两种方式中的任意一种拿到 userId 后，通过 userId 查询会员的详情。这里需要注意的是这个 user 既是系统用户也是系统中的会员。关于查询会员的数据库操作就不在此展开了。")]),a._v(" "),t("p",[a._v("执行结果如下图所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220814224556708tM1RKs.png",alt:""}})]),a._v(" "),t("h2",{attrs:{id:"如何刷新令牌"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何刷新令牌"}},[a._v("#")]),a._v(" 如何刷新令牌")]),a._v(" "),t("p",[a._v("还有一个内容是关于如何刷新令牌的。当认证服务返回给客户端的 JWT 也就是 access_token 过期后，客户端是通过发送登录请求重新拿到 access_token 吗？")]),a._v(" "),t("p",[a._v("这种重新登录的操作如果很频繁（因 JWT 过期时间较短），对于用户来说体验就很差了。客户端需要跳转到登录页面，让用户重新提交用户名和密码，即使客户端有记住用户名和密码，但是这种跳转的到登录页的操作会大幅度降低用户的体验，甚至导致用户不想再用第二次。")]),a._v(" "),t("blockquote",[t("p",[a._v("有没有一种比较优雅的方式让客户端重新拿到 access_token 或者说延长 access_token 有效期呢？")])]),a._v(" "),t("p",[a._v("我们知道 JWT 生成后是不能篡改里面的内容，即使是 JWT 的有效期也不行。所以延长 access_token 有效期的做法并不适合，而且如果长期保持一个 access_token 有效，也是不安全的。")]),a._v(" "),t("p",[a._v("那就只能重新生成 access_token 了。方案其实挺简单，客户端拿之前生成的 JWT 调用后端一个接口，然后后端校验这个 JWT 是否合法，如果是合法的就重新生成一个新的返回给客户端。客户端自行替换掉之前本地保存的 access_token 就可以了。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220815085804556JqzMJA.png",alt:"生成 access_token 和 refresh_token"}})]),a._v(" "),t("p",[a._v("这里有一个巧妙的设计，就是生成 JWT 时，返回了两个 JWT token，一个 access_token，一个 refresh_token，这两个 token 其实都可以用来刷新 token，但是我们把 refresh_token 设置的过期时间稍微长一点，比如两倍于 access_token，当 access_token 过期后，refresh_token 如果还没有过期，"),t("strong",[a._v("就可以利用两者的过期时间差进行重新生成令牌的操作")]),a._v("，也就是"),t("code",[a._v("刷新令牌")]),a._v("，这里的刷新指的是客户端重置本地保存的令牌，以后都用新的令牌。")]),a._v(" "),t("h3",{attrs:{id:"饥饿模式和懒模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#饥饿模式和懒模式"}},[a._v("#")]),a._v(" 饥饿模式和懒模式")]),a._v(" "),t("p",[a._v("当然，在 access_token 过期之前，客户端提前刷新令牌也是可以的，我称这种提前刷新的模式为"),t("code",[a._v("饥饿模式")]),a._v("（单例模式中也有这种叫法），而过期后再刷新令牌的模式我称之为"),t("code",[a._v("懒模式")]),a._v("。两种模式都可以用，前者需要客户端定期检查过期时间，增加了复杂性；后者则会出现短暂的请求失败的情况，得拿到新的令牌后才会成功。")]),a._v(" "),t("p",[a._v("刷新令牌的操作完全是通过客户端自己控制的，而且客户端也不仅限于浏览器，还有可能是第三方服务。")]),a._v(" "),t("h3",{attrs:{id:"一次性"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一次性"}},[a._v("#")]),a._v(" 一次性")]),a._v(" "),t("p",[a._v("通常情况下，我们会将刷新令牌 refresh_token 设置为只能用一次，来保证刷新令牌的安全性。而这种就需要服务端来缓存刷新令牌了，当用过一次后，就从缓存里面主动剔除掉。但这样就违背了 JWT 无状态的特性，这个完全看业务需求来决定是否使用这种缓存方式。")]),a._v(" "),t("p",[a._v("如下图所示，生成令牌时我将刷新令牌缓存到了 Redis 里面。当我用 refresh_token 调用刷新 API 时，会主动剔除掉这个 key，下次再用相同的 refresh_token 刷新令牌时，因 Redis 中不存在这个 key，就会提示刷新刷新失败了。")]),a._v(" "),t("p",[t("img",{attrs:{src:"http://cdn.jayh.club/uPic/image-20220815083736227NZOnFi.png",alt:"缓存令牌"}})]),a._v(" "),t("p",[a._v("留两个小问题：")]),a._v(" "),t("ul",[t("li",[a._v("有没有办法让 access_token 主动失效？")]),a._v(" "),t("li",[a._v("场景题：如何保证同一个用户只能登录一台设备？")])]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("虽然本篇是讲实战内容的，但是里面有涉及了很多原理性内容，比如网关、JWT 的原理。")]),a._v(" "),t("p",[a._v("结合实战讲解，相信大家对如何使用 Spring Cloud Gateway + JWT 实现登录认证有了充分的理解。")]),a._v(" "),t("p",[a._v("本篇只讲解了认证和凭证，授权部分还没有触及，所以这也是下篇要讲解的内容，来追更吧~")]),a._v(" "),t("p",[a._v("最后再说一句，别白嫖，点赞转发下哦~")])])}),[],!1,null,null,null);t.default=r.exports}}]);