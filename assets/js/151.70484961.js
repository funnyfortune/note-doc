(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{471:function(t,r,e){"use strict";e.r(r);var n=e(6),o=Object(n.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("本小节，讲解如何在 Nginx 配置 SSL 证书，实现前端和后端使用 HTTPS 安全访问的功能。")]),t._v(" "),r("p",[t._v("考虑到各大云服务厂商的文档写的比较齐全，这里更多做汇总与整理。")]),t._v(" "),r("p",[t._v("😜 如果想要免费的 SSL 证书，请申请 DV 单域名证书。如果要配置多个域名，可以申请多个 DV 单域名证书。")]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("友情提示：HTTPS 的学习资料？")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"http://www.iocoder.cn/Fight/How-HTTPS-works/?yudao",target:"_blank",rel:"noopener noreferrer"}},[t._v("《HTTPS 的工作原理》 "),r("OutboundLink")],1)])])]),t._v(" "),r("h2",{attrs:{id:"_1-阿里云-ssl【最常用】"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-阿里云-ssl【最常用】"}},[t._v("#")]),t._v(" 1. 阿里云 SSL【最常用】")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.aliyun.com/product/cas",target:"_blank",rel:"noopener noreferrer"}},[t._v("阿里云 SSL 证书 "),r("OutboundLink")],1)]),t._v(" "),r("ul",[r("li",[r("p",[t._v("第一步，"),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/205510.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("免费证书申购流程 "),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("第二步，"),r("a",{attrs:{href:"https://help.aliyun.com/document_detail/98728.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 Nginx 或 Tengine 服务器上安装证书 "),r("OutboundLink")],1)])])]),t._v(" "),r("p",[r("img",{attrs:{src:"/note-doc/img/HTTPS%E8%AF%81%E4%B9%A6/01.png",alt:"视频教程"}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.video.taobao.com/play/u/901422/p/1/e/6/t/1/306659382376.mp4",target:"_blank",rel:"noopener noreferrer"}},[t._v("↑ 点击观看 ↑ "),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"_2-freessl【最便宜】"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-freessl【最便宜】"}},[t._v("#")]),t._v(" 2. FreeSSL【最便宜】")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://freessl.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("FreeSSL.cn "),r("OutboundLink")],1),t._v("，一个提供免费 HTTPS 证书申请的网站。")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://docs.certcloud.cn/docs/installation/auto/acme/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《如何在 Nginx/Apache/Tomcat/IIS 自动部署证书？》 "),r("OutboundLink")],1)]),t._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[t._v("疑问：有没其它类似的平台？")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://ohttps.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("OHTTPS "),r("OutboundLink")],1),t._v("：免费提供 HTTPS 证书，支持一键申请、自动更新、自动部署的功能。")])])]),t._v(" "),r("h2",{attrs:{id:"_3-腾讯云-ssl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-腾讯云-ssl"}},[t._v("#")]),t._v(" 3. 腾讯云 SSL")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/product/ssl",target:"_blank",rel:"noopener noreferrer"}},[t._v("腾讯云 SSL 证书 "),r("OutboundLink")],1)]),t._v(" "),r("ul",[r("li",[r("p",[t._v("第一步，"),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/400/6814",target:"_blank",rel:"noopener noreferrer"}},[t._v("免费 SSL 证书申请流程 "),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("第二步，"),r("a",{attrs:{href:"https://cloud.tencent.com/document/product/400/35244",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx 服务器 SSL 证书安装部署 "),r("OutboundLink")],1)])])]),t._v(" "),r("p",[r("img",{attrs:{src:"/note-doc/img/HTTPS%E8%AF%81%E4%B9%A6/02.png",alt:"视频教程"}})]),t._v(" "),r("p",[r("a",{attrs:{href:"https://cloud.tencent.com/document/product/400/35244",target:"_blank",rel:"noopener noreferrer"}},[t._v("↑ 点击观看 ↑ "),r("OutboundLink")],1)]),t._v(" "),r("h2",{attrs:{id:"_4-华为云-ssl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-华为云-ssl"}},[t._v("#")]),t._v(" 4. 华为云 SSL")]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.huaweicloud.com/product/ccm.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("云证书管理服务 CCM "),r("OutboundLink")],1)]),t._v(" "),r("ul",[r("li",[r("p",[t._v("第一步，"),r("a",{attrs:{href:"https://support.huaweicloud.com/usermanual-ccm/ccm_01_0073.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SSL 证书申购流程 "),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[t._v("第二步，"),r("a",{attrs:{href:"https://support.huaweicloud.com/usermanual-ccm/ccm_01_0027.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载与安装 SSL 证书 "),r("OutboundLink")],1)])])])])}),[],!1,null,null,null);r.default=o.exports}}]);
