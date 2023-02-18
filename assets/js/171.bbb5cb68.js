(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{491:function(s,t,a){"use strict";a.r(t);var r=a(6),e=Object(r.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("功能描述")]),s._v(" "),t("p",[s._v("消息模板是在参考微信公众号消息模板功能简化而来,为了让消息提醒可定制化，模板化管理。可配置通过配置模板"),t("code",[s._v("跳转路径")]),s._v("，跳转不同的业务页面。")])]),s._v(" "),t("h2",{attrs:{id:"操作步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作步骤"}},[s._v("#")]),s._v(" 操作步骤")]),s._v(" "),t("h2",{attrs:{id:"_1-列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-列表"}},[s._v("#")]),s._v(" 1.列表")]),s._v(" "),t("p",[s._v("列表包含了[新增，修改，删除，导出]功能按钮，具有相关权限则可见，可使用。")]),s._v(" "),t("p",[s._v("点击 [消息管理 -> 消息模板] 菜单，查看列表。如下图所示：\n"),t("img",{attrs:{src:"/note-doc/img/operate/%E6%B6%88%E6%81%AF%E7%AE%A1%E7%90%86/msg-template-list.png",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_2-新增-修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-新增-修改"}},[s._v("#")]),s._v(" 2.新增/修改")]),s._v(" "),t("p",[t("strong",[s._v("跳转路径")]),s._v("： 调整路径使用的json格式，格式模板是"),t("strong",[s._v("vue-router")]),s._v("的路由跳转语法。请参考"),t("a",{attrs:{href:"https://router.vuejs.org/zh/guide/essentials/navigation.html#%E5%AF%BC%E8%88%AA%E5%88%B0%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BD%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"}},[s._v("router官网"),t("OutboundLink")],1)]),s._v(" "),t("div",{staticClass:"language-vue line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-vue"}},[t("code",[s._v("// 字符串路径\nrouter.push('/users/eduardo')\n\n// 带有路径的对象\nrouter.push({ path: '/users/eduardo' })\n\n// 命名的路由，并加上参数，让路由建立 url\nrouter.push({ name: 'user', params: { username: 'eduardo' } })\n\n// 带查询参数，结果是 /register?plan=private\nrouter.push({ path: '/register', query: { plan: 'private' } })\n\n// 带 hash，结果是 /about#team\nrouter.push({ path: '/about', hash: '#team' })\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br")])]),t("p",[t("strong",[s._v("内容模板")]),s._v("：建议参考微信公众号的消息模板配置方式，配置模板，并可以加上自己想要的样式效果。")]),s._v(" "),t("blockquote",[t("p",[s._v("无论是"),t("strong",[s._v("跳转路径")]),s._v("，还是"),t("strong",[s._v("内容模板")]),s._v("，动态参数部分，请使用"),t("code",[s._v("${参数变量名称}")]),s._v("的方式注入。")])]),s._v(" "),t("p",[s._v("保存后，会生成唯一的模板ID编号。\n"),t("img",{attrs:{src:"/note-doc/img/operate/%E6%B6%88%E6%81%AF%E7%AE%A1%E7%90%86/msg-template-add.png",alt:""}})]),s._v(" "),t("h3",{attrs:{id:"效果"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#效果"}},[s._v("#")]),s._v(" 效果")]),s._v(" "),t("p",[t("img",{attrs:{src:"/note-doc/img/operate/%E9%A6%96%E9%A1%B5/index.jpg",alt:""}})]),s._v(" "),t("h2",{attrs:{id:"_3-删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除"}},[s._v("#")]),s._v(" 3.删除")]),s._v(" "),t("p",[s._v("在列表界面，选中相应的条目之后，点击右侧的"),t("font",{attrs:{color:"blue"}},[s._v("[删除]")]),s._v("按钮将会出现"),t("strong",[s._v("删除确认信息")]),s._v("弹框，选中后点击”确定”按钮即可进行删除操作。")],1),s._v(" "),t("h2",{attrs:{id:"_4-导出"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-导出"}},[s._v("#")]),s._v(" 4.导出")]),s._v(" "),t("p",[s._v("在列表界面，根据查询条件，导出相应excel文件。")])])}),[],!1,null,null,null);t.default=e.exports}}]);
