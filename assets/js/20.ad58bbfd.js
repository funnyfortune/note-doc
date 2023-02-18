(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{338:function(t,s,a){"use strict";a.r(s);var n=a(6),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"github-actions-定时运行代码-每天定时百度链接推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-定时运行代码-每天定时百度链接推送"}},[t._v("#")]),t._v(" GitHub Actions 定时运行代码：每天定时百度链接推送")]),t._v(" "),s("p",[t._v("博客上线已经有些日子了，却发现百度迟迟没有收录我的博客页面，在百度推送工具当中除了有自动推送的代码嵌入网站之外，还有一个实时的主动推送更高效。")]),t._v(" "),s("p",[t._v("最近刚好了解到GitHub Actions的定时运行代码功能，可以用它来每天自动运行命令生成所有博客链接并进行一次性推送给百度。")]),t._v(" "),s("p",[t._v("GitHub Actions 是一个 CI/CD（持续集成/持续部署）工具，但也可用作代码运行环境。"),s("strong",[t._v("功能非常强大，能够玩出许多花样。")])]),t._v(" "),s("h2",{attrs:{id:"百度主动链接推送"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#百度主动链接推送"}},[t._v("#")]),t._v(" 百度主动链接推送")]),t._v(" "),s("p",[t._v("链接主动推送在百度站长中有介绍，如图。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103124306.png",alt:"主动提交"}})]),t._v(" "),s("p",[t._v("具体使用方法就是创建一个文件"),s("code",[t._v("urls.txt")]),t._v("，文件内每行一条链接的格式写入提交的多个链接，如图。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200103124305.png",alt:"urls.txt"}})]),t._v(" "),s("p",[t._v("运行命令")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type:text/plain'")]),t._v(" --data-binary @urls.txt "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://data.zz.baidu.com/urls?site=xugaoyi.com&token=T5PEAzhG*****"')]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("上面命令的地址和参数由百度站长提供。运行完命令会返回推送结果，不出意外的话就会把"),s("code",[t._v("urls.txt")]),t._v("内的所有链接一次性推送给百度。")]),t._v(" "),s("p",[t._v("这个方法虽然比嵌入网站头部的自动推送更高效，但是也有它的麻烦之处，就是得自己填入链接到"),s("code",[t._v("urls.txt")]),t._v("文件，然后手动运行命令。")]),t._v(" "),s("h2",{attrs:{id:"自动生成urls-txt"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自动生成urls-txt"}},[t._v("#")]),t._v(" 自动生成urls.txt")]),t._v(" "),s("p",[t._v('没关系，技术的本质就是让人"偷懒"的。于是，我写了一个nodejs工具，用于把所有的博客页面链接生成到'),s("code",[t._v("urls.txt")])]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// baiduPush.js")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 生成百度链接推送文件\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" logger "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tracer'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("colorConsole")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" matter "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'gray-matter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// FrontMatter解析器 https://github.com/jonschlinkert/gray-matter")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" readFileList "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./modules/readFileList'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" urlsRoot "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'..'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'urls.txt'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 百度链接推送文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOMAIN")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("argv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("splice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 获取命令行传入的参数")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOMAIN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'请在运行此文件时指定一个你要进行百度推送的域名参数，例：node utils/baiduPush.js https://xugaoyi.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlsRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOMAIN")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" files "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 读取所有md文件数据")]),t._v("\n\n  files"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("file")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("matter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("readFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("file"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("filePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'utf8'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permalink"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" link "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("\\r\\n")]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOMAIN")]),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("permalink"),s("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      fs"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendFileSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("urlsRoot"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" link"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br"),s("span",{staticClass:"line-number"},[t._v("25")]),s("br"),s("span",{staticClass:"line-number"},[t._v("26")]),s("br"),s("span",{staticClass:"line-number"},[t._v("27")]),s("br"),s("span",{staticClass:"line-number"},[t._v("28")]),s("br"),s("span",{staticClass:"line-number"},[t._v("29")]),s("br"),s("span",{staticClass:"line-number"},[t._v("30")]),s("br"),s("span",{staticClass:"line-number"},[t._v("31")]),s("br"),s("span",{staticClass:"line-number"},[t._v("32")]),s("br"),s("span",{staticClass:"line-number"},[t._v("33")]),s("br")])]),s("p",[t._v("上面代码仅是针对我个人的博客生成链接到"),s("code",[t._v("urls.txt")]),t._v("文件。更多代码在 "),s("a",{attrs:{href:"https://github.com/simpleguan/vuepress-theme-vdoing/blob/master/utils/baiduPush.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("p",[t._v("运行如下命令就可以生产一个包含博客所有链接的"),s("code",[t._v("urls.txt")]),t._v("文件：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" utils/baiduPush.js https://xugaoyi.com\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("哈哈，第一个麻烦解决了😏，接下来是解决第二个需要手动运行推送命令的问题。")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("如果你没办法自动生成，你也可以自己手动创建一个"),s("code",[t._v("urls.txt")]),t._v("文件，放到github仓库。")])])]),t._v(" "),s("h2",{attrs:{id:"github-actions-定时运行代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-actions-定时运行代码"}},[t._v("#")]),t._v(" GitHub Actions 定时运行代码")]),t._v(" "),s("p",[t._v("今天的主角GitHub Actions 要登场了。（相关："),s("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html?20191227113947#comment-last",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions 入门教程"),s("OutboundLink")],1),t._v("、"),s("a",{attrs:{href:"https://xugaoyi.com/pages/6b9d359ec5aa5019/",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions 实现自动部署静态博客"),s("OutboundLink")],1),t._v("）")]),t._v(" "),s("p",[t._v("GitHub Actions 是一个 CI/CD（持续集成/持续部署）工具，但也可用作代码运行环境。"),s("strong",[t._v("功能非常强大，能够玩出许多花样。")])]),t._v(" "),s("h3",{attrs:{id:"配置-github-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-github-actions"}},[t._v("#")]),t._v(" 配置 GitHub Actions")]),t._v(" "),s("p",[t._v("触发 GitHub Actions 需要在项目仓库新建一个"),s("code",[t._v(".github/workflows")]),t._v("子目录，里面是 "),s("a",{attrs:{href:"https://xugaoyi.com/pages/4e8444e2d534d14f/",target:"_blank",rel:"noopener noreferrer"}},[t._v("YAML 格式"),s("OutboundLink")],1),t._v("配置文件，文件名可以随便取。GitHub 只要发现配置文件，就会运行 Actions。")]),t._v(" "),s("p",[t._v("配置文件的第一部分是触发条件。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## baiduPush.yml")]),t._v("\nname: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baiduPush'")]),t._v("\n \non:\n  push:\n  schedule:\n    - cron: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0 23 * * *'")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br")])]),s("p",[t._v("上面代码中，"),s("code",[t._v("name")]),t._v("字段是配置文件的描述，"),s("code",[t._v("on")]),t._v("字段是触发条件。我们指定两种情况下触发，第一种是代码 Push 进仓库，第二种是"),s("a",{attrs:{href:"https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#scheduled-events-schedule",target:"_blank",rel:"noopener noreferrer"}},[t._v("定时任务"),s("OutboundLink")],1),t._v("，每天在国际标准时间23点（北京时间+8，即早上7点）运行。")]),t._v(" "),s("blockquote",[s("p",[t._v("定时设置看"),s("a",{attrs:{href:"https://help.github.com/en/actions/automating-your-workflow-with-github-actions/events-that-trigger-workflows#scheduled-events-schedule",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("接着，就是运行流程。")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[t._v("jobs:\n  bot:\n    runs-on: ubuntu-latest "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行环境为最新版的Ubuntu")]),t._v("\n    steps:\n      - name: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Checkout codes'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 步骤一，获取仓库代码")]),t._v("\n        uses: actions/checkout@v1\n      - name: "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Run baiduPush.sh'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 步骤二，执行sh命令文件")]),t._v("\n        run: "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run baiduPush "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行命令。（注意，运行目录是仓库根目录）")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("上面代码中，指定运行环境是最新的ubuntu，流程的第一步是从代码仓库获取代码，第二步运行两个命令，先安装项目依赖，再运行写在"),s("code",[t._v("package.json")]),t._v("的"),s("code",[t._v("baiduPush")]),t._v("命令。完整代码看 "),s("a",{attrs:{href:"https://github.com/simpleguan/vuepress-theme-vdoing/blob/master/.github/workflows/baiduPush.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"baidupush命令在package-json配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#baidupush命令在package-json配置"}},[t._v("#")]),t._v(" "),s("code",[t._v("baiduPush")]),t._v("命令在"),s("code",[t._v("package.json")]),t._v("配置")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// package.json")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"scripts"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"baiduPush"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"node utils/baiduPush.js https://xugaoyi.com && bash baiduPush.sh"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br")])]),s("p",[t._v("上面脚本中在"),s("code",[t._v("node utils/baiduPush.js")]),t._v("的后面加入你的域名参数。运行此命令生成"),s("code",[t._v("urls.txt")]),t._v("文件，然后执行"),s("code",[t._v("baiduPush.sh")]),t._v("文件。")]),t._v(" "),s("p",[t._v("注意，在使用window系统时，请使用git bash命令窗运行上面的脚本。")]),t._v(" "),s("blockquote",[s("p",[s("code",[t._v("baiduPush")]),t._v("命令之所以没有放在"),s("code",[t._v("baiduPush.yml")]),t._v("的 run 里面是因为我想在本地也可以执行"),s("code",[t._v("npm run baiduPush")]),t._v("命令。")])]),t._v(" "),s("h3",{attrs:{id:"baidupush-sh执行百度推送命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#baidupush-sh执行百度推送命令"}},[t._v("#")]),t._v(" "),s("code",[t._v("baiduPush.sh")]),t._v("执行百度推送命令")]),t._v(" "),s("p",[s("code",[t._v("baiduPush.sh")]),t._v("文件：")]),t._v(" "),s("div",{staticClass:"language-sh line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#!/usr/bin/env sh")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 百度链接推送")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -H "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type:text/plain'")]),t._v(" --data-binary @urls.txt "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://data.zz.baidu.com/urls?site=https://xugaoyi.com&token=T5PEAzhGa*****"')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -rf urls.txt "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 灭迹")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("上面代码中，把"),s("code",[t._v("urls.txt")]),t._v("文件中的所有链接一次性推送。")]),t._v(" "),s("blockquote",[s("p",[t._v("baiduPush.sh内的命令之所以没有写在"),s("code",[t._v("package.json")]),t._v("是因为我觉得命令太长了，不方便阅读。")])]),t._v(" "),s("p",[t._v("写好配置，推送到仓库，就会在每天的早上7点钟，自动运行命令生成一个包含博客所有页面链接的"),s("code",[t._v("urls.txt")]),t._v("文件，并把所有链接一次性推送到百度。麻麻再也不用担心我的网站不被收录~~😘 😘 😘")]),t._v(" "),s("p",[t._v("在这个基础上可以扩展，使用GitHub Actions满足你自己的各种定时需求。")]),t._v(" "),s("h2",{attrs:{id:"相关文章"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#相关文章"}},[t._v("#")]),t._v(" 相关文章")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://xugaoyi.com/pages/6b9d359ec5aa5019/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《 GitHub Actions 实现自动部署静态博客》"),s("OutboundLink")],1)]),t._v(" "),s("p",[s("a",{attrs:{href:"https://xugaoyi.com/pages/41f87d890d0a02af/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《解决百度无法收录搭建在GitHub上的静态博客的问题》"),s("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);