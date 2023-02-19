(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{435:function(t,e,a){"use strict";a.r(e);var r=a(6),n=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("项目的 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/tree/master/yudao-framework/yudao-spring-boot-starter-excel",target:"_blank",rel:"noopener noreferrer"}},[t._v("yudao-spring-boot-starter-excel "),e("OutboundLink")],1),t._v(" 技术组件，基于 EasyExcel 实现 Excel 的读写操作，可用于实现最常见的 Excel 导入导出等功能。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("EasyExcel 的介绍？")]),t._v(" "),e("p",[t._v("EasyExcel 是阿里开源的 Excel 工具库，具有简单易用、低内存、高性能的特点。")]),t._v(" "),e("p",[t._v("在尽可用节约内存的情况下，支持百万行的 Excel 读写操作。例如说，仅使用 64M 内存，20 秒完成 75M（46 万行 25 列）Excel 的读取。并且，还有极速模式能更快，但是内存占用会在100M 多一点。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/01.png",alt:"EasyExcel"}})])]),t._v(" "),e("h2",{attrs:{id:"_1-excel-导出"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-excel-导出"}},[t._v("#")]),t._v(" 1. Excel 导出")]),t._v(" "),e("p",[t._v("以 [系统管理 -> 岗位管理] 菜单为例子，讲解它 Excel 导出的实现。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/02.png",alt:"null"}}),t._v(' 岗位管理" style="cursor: zoom-in;">')]),t._v(" "),e("h3",{attrs:{id:"_1-1-后端导入实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-后端导入实现"}},[t._v("#")]),t._v(" 1.1 后端导入实现")]),t._v(" "),e("p",[t._v("在 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/dept/PostController.java#L88-L97",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostController "),e("OutboundLink")],1),t._v(" 类中，定义  "),e("code",[t._v("/admin-api/system/post/export")]),t._v("  导出接口。代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/03.png",alt:"导出 Excel 接口"}})]),t._v(" "),e("ul",[e("li",[e("p",[t._v("① 将从数据库中查询出来的列表，转换成对应的 PostExcelVO 列表。")])]),t._v(" "),e("li",[e("p",[t._v("② 将 PostExcelVO 列表，转换成 Excel 文件，返回给前端。")])])]),t._v(" "),e("h4",{attrs:{id:"_1-1-1-postexcelvo-类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-postexcelvo-类"}},[t._v("#")]),t._v(" 1.1.1 PostExcelVO 类")]),t._v(" "),e("p",[t._v("创建 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/dept/vo/post/PostExcelVO.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("PostExcelVO "),e("OutboundLink")],1),t._v(" 类，岗位 Excel 导出的 VO 类。它有两个作用，代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/04.png",alt:"PostExcelVO 代码"}})]),t._v(" "),e("p",[t._v("① 每个字段上的 "),e("a",{attrs:{href:"https://github.com/alibaba/easyexcel/blob/master/src/main/java/com/alibaba/excel/annotation/ExcelProperty.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@ExcelProperty "),e("OutboundLink")],1),t._v(" 注解，声明 Excel Head 头部的名字。")]),t._v(" "),e("p",[t._v("② 每个字段的"),e("strong",[t._v("值")]),t._v("，就是它对应的 Excel Row 行的数据值。")]),t._v(" "),e("p",[t._v("因此，最终 Excel 导出的效果如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/05.png",alt:"PostExcelVO 效果"}})]),t._v(" "),e("p",[t._v("另外，在上述代码的"),e("strong",[t._v("红线")]),t._v("部分， "),e("code",[t._v("@ExcelProperty")]),t._v("  注解的  "),e("code",[t._v("converter")]),t._v("  属性是 DictConvert 转换器，通过它将  "),e("code",[t._v("status = 1")]),t._v("  转换成“开启”列， "),e("code",[t._v("status = 0")]),t._v("  转换成”禁用”列。稍后，我们会在 "),e("a",{attrs:{href:"#_3-%E5%AD%97%E6%AE%B5%E8%BD%AC%E6%8D%A2%E5%99%A8"}},[t._v("「3. 字段转换器」")]),t._v(" 小节来详细讲讲。")]),t._v(" "),e("h4",{attrs:{id:"_1-1-2-excelutils-写入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-excelutils-写入"}},[t._v("#")]),t._v(" 1.1.2 ExcelUtils 写入")]),t._v(" "),e("p",[t._v("ExcelUtils 的 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-excel/src/main/java/cn/iocoder/yudao/framework/excel/core/util/ExcelUtils.java#L19-L40",target:"_blank",rel:"noopener noreferrer"}},[t._v("#write(...) "),e("OutboundLink")],1),t._v(" 方法，将列表以 Excel 响应给前端。代码如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/06.png",alt:"write 方法"}})]),t._v(" "),e("h3",{attrs:{id:"_1-2-前端导入实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-前端导入实现"}},[t._v("#")]),t._v(" 1.2 前端导入实现")]),t._v(" "),e("p",[t._v("在 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin/src/views/system/post/index.vue#L232-L243",target:"_blank",rel:"noopener noreferrer"}},[t._v("post/index.vue "),e("OutboundLink")],1),t._v(" 界面，定义  "),e("code",[t._v("#handleExport()")]),t._v("  操作，代码如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/07.png",alt:"handleExport 方法"}})]),t._v(" "),e("h2",{attrs:{id:"_2-excel-导入"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-excel-导入"}},[t._v("#")]),t._v(" 2. Excel 导入")]),t._v(" "),e("p",[t._v("以 [系统管理 -> 用户管理] 菜单为例子，讲解它 Excel 导出的实现。")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/11.png",alt:"null"}}),t._v(' 用户管理" style="cursor: zoom-in;">')]),t._v(" "),e("h3",{attrs:{id:"_2-1-后端导入实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-后端导入实现"}},[t._v("#")]),t._v(" 2.1 后端导入实现")]),t._v(" "),e("p",[t._v("在 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/user/UserController.java#L176-L187",target:"_blank",rel:"noopener noreferrer"}},[t._v("UserController "),e("OutboundLink")],1),t._v(" 类中，定义  "),e("code",[t._v("/admin-api/system/user/import")]),t._v("  导入接口。代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/12.png",alt:"导入 Excel 接口"}})]),t._v(" "),e("p",[t._v("将前端上传的 Excel 文件，读取成 UserImportExcelVO 列表。")]),t._v(" "),e("h4",{attrs:{id:"_2-1-1-userimportexcelvo-类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-1-userimportexcelvo-类"}},[t._v("#")]),t._v(" 2.1.1 UserImportExcelVO 类")]),t._v(" "),e("p",[t._v("创建 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-module-system/yudao-module-system-biz/src/main/java/cn/iocoder/yudao/module/system/controller/admin/dept/vo/post/PostExcelVO.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("UserImportExcelVO "),e("OutboundLink")],1),t._v(" 类，用户 Excel 导入的 VO 类。它的作用和 Excel 导入是一样的，代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/13.png",alt:"UserImportExcelVO 代码"}})]),t._v(" "),e("p",[t._v("对应使用的 Excel 导入文件如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/14.png",alt:"UserImportExcelVO 文件"}})]),t._v(" "),e("h4",{attrs:{id:"_2-1-2-excelutils-读取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-2-excelutils-读取"}},[t._v("#")]),t._v(" 2.1.2 ExcelUtils 读取")]),t._v(" "),e("p",[t._v("ExcelUtils 的 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-excel/src/main/java/cn/iocoder/yudao/framework/excel/core/util/ExcelUtils.java#L42-L46",target:"_blank",rel:"noopener noreferrer"}},[t._v("#read(...) "),e("OutboundLink")],1),t._v(" 方法，读取 Excel 文件成列表。代码如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/16.png",alt:"read 方法"}})]),t._v(" "),e("h3",{attrs:{id:"_2-2-前端导入实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-前端导入实现"}},[t._v("#")]),t._v(" 2.2 前端导入实现")]),t._v(" "),e("p",[t._v("在 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-ui-admin/src/views/system/user/index.vue#L174-L193",target:"_blank",rel:"noopener noreferrer"}},[t._v("user/index.vue "),e("OutboundLink")],1),t._v(" 界面，定义 Excel 导入的功能，代码如下图：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/15.png",alt:"Excel 导入的功能"}})]),t._v(" "),e("h2",{attrs:{id:"_3-字段转换器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-字段转换器"}},[t._v("#")]),t._v(" 3. 字段转换器")]),t._v(" "),e("p",[t._v("EasyExcel 定义了 "),e("a",{attrs:{href:"https://github.com/alibaba/easyexcel/blob/master/src/main/java/com/alibaba/excel/converters/Converter.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("Converter "),e("OutboundLink")],1),t._v(" 接口，用于实现字段的转换。它有两个核心方法：")]),t._v(" "),e("p",[t._v("①  "),e("code",[t._v("#convertToJavaData(...)")]),t._v("  方法：将 Excel Row 对应表格的值，转换成 Java 内存中的值。例如说，Excel 的“状态”列，将“状态”列转换成  "),e("code",[t._v("status = 1")]),t._v(" ，”禁用”列转换成  "),e("code",[t._v("status = 0")]),t._v(" 。")]),t._v(" "),e("p",[t._v("②  "),e("code",[t._v("#convertToExcelData(...)")]),t._v("  方法：恰好相反，将 Java 内存中的值，转换成 Excel Row 对应表格的值。例如说，Excel 的“状态”列，将  "),e("code",[t._v("status = 1")]),t._v("  转换成“开启”列， "),e("code",[t._v("status = 0")]),t._v("  转换成”禁用”列。")]),t._v(" "),e("h3",{attrs:{id:"_3-1-dictconvert-实现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-dictconvert-实现"}},[t._v("#")]),t._v(" 3.1 DictConvert 实现")]),t._v(" "),e("p",[t._v("以项目中提供的 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-excel/src/main/java/cn/iocoder/yudao/framework/excel/core/convert/DictConvert.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("DictConvert "),e("OutboundLink")],1),t._v(" 举例子，它实现 Converter 接口，提供字典数据的转换。代码如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/21.png",alt:"DictConvert 实现"}})]),t._v(" "),e("p",[t._v("实现的代码比较简单，自己看看就可以明白。")]),t._v(" "),e("h3",{attrs:{id:"_3-1-dictconvert-使用示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-dictconvert-使用示例"}},[t._v("#")]),t._v(" 3.1 DictConvert 使用示例")]),t._v(" "),e("p",[t._v("在需要转换的字段上，声明注解  "),e("code",[t._v("@ExcelProperty")]),t._v("  的  "),e("code",[t._v("converter")]),t._v("  属性是 DictConvert 转换器，注解 "),e("a",{attrs:{href:"https://github.com/YunaiV/ruoyi-vue-pro/blob/master/yudao-framework/yudao-spring-boot-starter-excel/src/main/java/cn/iocoder/yudao/framework/excel/core/annotations/DictFormat.java",target:"_blank",rel:"noopener noreferrer"}},[t._v("@DictFormat "),e("OutboundLink")],1),t._v(" 为对应的字典数据的类型。示例如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:"/note-doc/img/Excel%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA/22.png",alt:"DictConvert 使用示例"}})]),t._v(" "),e("h2",{attrs:{id:"_4-更多-easyexcel-注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-更多-easyexcel-注解"}},[t._v("#")]),t._v(" 4. 更多 EasyExcel 注解")]),t._v(" "),e("p",[t._v("基于 "),e("a",{attrs:{href:"https://juejin.cn/post/6844904177974542343",target:"_blank",rel:"noopener noreferrer"}},[t._v("《EasyExcel 中的注解 》 "),e("OutboundLink")],1),t._v(" 文章，整理相关注解。")]),t._v(" "),e("h3",{attrs:{id:"_4-1-excelproperty"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-excelproperty"}},[t._v("#")]),t._v(" 4.1  "),e("code",[t._v("@ExcelProperty")])]),t._v(" "),e("p",[t._v("这是最常用的一个注解，注解中有三个参数  "),e("code",[t._v("value")]),t._v(" 、 "),e("code",[t._v("index")]),t._v(" 、 "),e("code",[t._v("converter")]),t._v("  分别代表列明、列序号、数据转换方式。 "),e("code",[t._v("value")]),t._v("  和  "),e("code",[t._v("index")]),t._v("  只能二选一，通常不用设置  "),e("code",[t._v("converter")]),t._v(" 。")]),t._v(" "),e("p",[e("strong",[t._v("最佳实践")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImeiEncrypt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \n   "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ExcelProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"imei"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" imei"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h3",{attrs:{id:"_4-2-columnwith"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-columnwith"}},[t._v("#")]),t._v(" 4.2  "),e("code",[t._v("@ColumnWith")])]),t._v(" "),e("p",[t._v("用于设置列宽度的注解，注解中只有一个参数  "),e("code",[t._v("value")]),t._v(" 。 "),e("code",[t._v("value")]),t._v("  的单位是字符长度，最大可以设置 255 个字符，因为一个 Excel 单元格最大可以写入的字符个数，就是 255 个字符。")]),t._v(" "),e("p",[e("strong",[t._v("最佳实践")])]),t._v(" "),e("div",{staticClass:"language-java line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-java"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ImeiEncrypt")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   \n   "),e("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@ColumnWidth")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("18")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" imei"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br")])]),e("h3",{attrs:{id:"_4-3-contentfontstyle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-contentfontstyle"}},[t._v("#")]),t._v(" 4.3  "),e("code",[t._v("@ContentFontStyle")])]),t._v(" "),e("p",[t._v("用于设置单元格内容字体格式的注解。参数如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("fontName")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("字体名称")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("fontHeightInPoints")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("字体高度")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("italic")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否斜体")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("strikeout")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否设置删除水平线")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("color")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("字体颜色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("typeOffset")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("偏移量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("underline")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("下划线")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("bold")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否加粗")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("charset")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("编码格式")])])])]),t._v(" "),e("h3",{attrs:{id:"_4-4-contentloopmerge"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-contentloopmerge"}},[t._v("#")]),t._v(" 4.4  "),e("code",[t._v("@ContentLoopMerge")])]),t._v(" "),e("p",[t._v("用于设置合并单元格的注解。参数如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("eachRow")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("columnExtend")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),e("h3",{attrs:{id:"_4-5-contentrowheight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-contentrowheight"}},[t._v("#")]),t._v(" 4.5  "),e("code",[t._v("@ContentRowHeight")])]),t._v(" "),e("p",[t._v("用于设置行高。参数如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("行高，-1代表自动行高")])])])]),t._v(" "),e("h3",{attrs:{id:"_4-6-contentstyle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-contentstyle"}},[t._v("#")]),t._v(" 4.6  "),e("code",[t._v("@ContentStyle")])]),t._v(" "),e("p",[t._v("设置内容格式注解。参数如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("dataFormat")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("日期格式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("hidden")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置单元格使用此样式隐藏")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("locked")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置单元格使用此样式锁定")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("quotePrefix")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在单元格前面增加`符号，数字或公式将以字符串形式展示")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("horizontalAlignment")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置是否水平居中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("wrapped")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置文本是否应换行。将此标志设置为true通过在多行上显示使单元格中的所有内容可见")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("verticalAlignment")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置是否垂直居中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("rotation")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置单元格中文本旋转角度。03版本的Excel旋转角度区间为-90°~90°，07版本的Excel旋转角度区间为0°~180°")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("indent")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置单元格中缩进文本的空格数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("borderLeft")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置左边框的样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("borderRight")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置右边框样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("borderTop")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置上边框样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("borderBottom")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置下边框样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("leftBorderColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置左边框颜色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("rightBorderColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置右边框颜色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("topBorderColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置上边框颜色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("bottomBorderColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置下边框颜色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("fillPatternType")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置填充类型")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("fillBackgroundColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置背景色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("fillForegroundColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置前景色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("shrinkToFit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置自动单元格自动大小")])])])]),t._v(" "),e("h3",{attrs:{id:"_4-7-headfontstyle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-headfontstyle"}},[t._v("#")]),t._v(" 4.7  "),e("code",[t._v("@HeadFontStyle")])]),t._v(" "),e("p",[t._v("用于定制标题字体格式。参数如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("fontName")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置字体名称")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("fontHeightInPoints")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置字体高度")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("italic")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置字体是否斜体")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("strikeout")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("是否设置删除线")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("color")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置字体颜色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("typeOffset")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置偏移量")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("underline")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置下划线")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("charset")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置字体编码")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("bold")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置字体是否家畜")])])])]),t._v(" "),e("h3",{attrs:{id:"_4-8-headrowheight"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-headrowheight"}},[t._v("#")]),t._v(" 4.8  "),e("code",[t._v("@HeadRowHeight")])]),t._v(" "),e("p",[t._v("设置标题行行高。参数如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("value")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置行高，-1代表自动行高")])])])]),t._v(" "),e("h3",{attrs:{id:"_4-9-headstyle"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-headstyle"}},[t._v("#")]),t._v(" 4.9  "),e("code",[t._v("@HeadStyle")])]),t._v(" "),e("p",[t._v("设置标题样式。参数如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("参数")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("dataFormat")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("日期格式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("hidden")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置单元格使用此样式隐藏")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("locked")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置单元格使用此样式锁定")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("quotePrefix")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在单元格前面增加`符号，数字或公式将以字符串形式展示")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("horizontalAlignment")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置是否水平居中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("wrapped")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置文本是否应换行。将此标志设置为true通过在多行上显示使单元格中的所有内容可见")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("verticalAlignment")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置是否垂直居中")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("rotation")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置单元格中文本旋转角度。03版本的Excel旋转角度区间为-90°~90°，07版本的Excel旋转角度区间为0°~180°")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("indent")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置单元格中缩进文本的空格数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("borderLeft")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置左边框的样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("borderRight")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置右边框样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("borderTop")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置上边框样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("borderBottom")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置下边框样式")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("leftBorderColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置左边框颜色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("rightBorderColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置右边框颜色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("topBorderColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置上边框颜色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("bottomBorderColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置下边框颜色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("fillPatternType")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置填充类型")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("fillBackgroundColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置背景色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("fillForegroundColor")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置前景色")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("shrinkToFit")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("设置自动单元格自动大小")])])])]),t._v(" "),e("h4",{attrs:{id:"_4-10-excelignore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-10-excelignore"}},[t._v("#")]),t._v(" 4.10  "),e("code",[t._v("@ExcelIgnore")])]),t._v(" "),e("p",[t._v("不将该字段转换成 Excel。")]),t._v(" "),e("h3",{attrs:{id:"_4-11-excelignoreunannotated"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-11-excelignoreunannotated"}},[t._v("#")]),t._v(" 4.11  "),e("code",[t._v("@ExcelIgnoreUnannotated")])]),t._v(" "),e("p",[t._v("没有注解的字段都不转换")])])}),[],!1,null,null,null);e.default=n.exports}}]);