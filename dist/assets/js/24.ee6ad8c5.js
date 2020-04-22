(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{381:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"安装-全局配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-全局配置"}},[t._v("#")]),t._v(" 安装/全局配置")]),t._v(" "),a("h2",{attrs:{id:"npm安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm安装"}},[t._v("#")]),t._v(" npm安装")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 安装")]),t._v("\nnpm install "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save vue"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("easy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("form\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引用")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" esForm "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-easy-form"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"cdn安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cdn安装"}},[t._v("#")]),t._v(" cdn安装")]),t._v(" "),a("p",[t._v("可以通过"),a("a",{attrs:{href:"https://unpkg.com/browse/vue-easy-form/",target:"_blank",rel:"noopener noreferrer"}},[t._v("unpkg.com/vue-easy-form"),a("OutboundLink")],1),t._v(" 获取到最新版本的资源，在页面上引入"),a("code",[t._v("js")]),t._v("文件即可")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 引入组件库: 这个会自动获取最新版本 --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/vue-easy-form/dist/es-form.umd.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('\x3c!-- \n或: 带某个版本号\n<script src="https://unpkg.com/vue-easy-form@1.5.1/dist/es-form.umd.min.js"><\/script> \n--\x3e')]),t._v('\n\n// 引用\nvar esForm = window["esForm"];\n')])])]),a("h2",{attrs:{id:"注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注册"}},[t._v("#")]),t._v(" 注册")]),t._v(" "),a("p",[t._v("注册的作用主要是：声明一个全局的"),a("code",[t._v("es-form")]),t._v("组件和表单框的基本配置。"),a("br"),t._v(" "),a("code",[t._v("语法")]),t._v("：Vue.use(esForm, options);")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("esForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n或\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("esForm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  rowHeight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  rowSpace"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  labelWidth"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  offsetLeft"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  offsetRight"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  colon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  direction"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"h"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  defaultCom"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如：若用element-ui, 改为el-input")]),t._v("\n  defaultVal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对defaultCom这个组件的value设置默认值")]),t._v("\n  trimDoms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"input"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"textarea"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"el-input"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数组，空数组会全部清空")]),t._v("\n  hasConsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 推荐写成动态，编译时不用修改")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("参数(get)：")]),t._v(" "),a("ul",[a("li",[t._v("esForm: 必填，所引入的esForm组件")]),t._v(" "),a("li",[t._v("options：非必填，全局设置")])]),t._v(" "),a("h2",{attrs:{id:"全局设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局设置"}},[t._v("#")]),t._v(" 全局设置")]),t._v(" "),a("p",[t._v("表单全局配置有如下")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("属性名")]),t._v(" "),a("th",[t._v("默认值")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("rowHeight")]),t._v(" "),a("td",[t._v("40")]),t._v(" "),a("td",[t._v("设置每一项(行)的高度；主要用于项label和项组件横向对齐")])]),t._v(" "),a("tr",[a("td",[t._v("rowSpace")]),t._v(" "),a("td",[t._v("20")]),t._v(" "),a("td",[t._v("整数（px） 设置项(行)与项(行)的距离")])]),t._v(" "),a("tr",[a("td",[t._v("labelWidth")]),t._v(" "),a("td",[t._v("100")]),t._v(" "),a("td",[t._v("整数（px） 设置项(行)的label的宽度")])]),t._v(" "),a("tr",[a("td",[t._v("offsetLeft")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("整数（px） 项的左偏移量")])]),t._v(" "),a("tr",[a("td",[t._v("offsetRight")]),t._v(" "),a("td",[t._v("0")]),t._v(" "),a("td",[t._v("整数（px） 项的右偏移量")])]),t._v(" "),a("tr",[a("td",[t._v("colon")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("是否有冒号")])]),t._v(" "),a("tr",[a("td",[t._v("direction")]),t._v(" "),a("td",[t._v('"h"')]),t._v(" "),a("td",[t._v("竖排还是横排")])]),t._v(" "),a("tr",[a("td",[t._v("defaultCom")]),t._v(" "),a("td",[t._v('"input"')]),t._v(" "),a("td",[t._v("当配置时，不写component.name时用这个")])]),t._v(" "),a("tr",[a("td",[t._v("defaultVal")]),t._v(" "),a("td",[t._v('""')]),t._v(" "),a("td",[t._v("对defaultCom的补充，当组件为defaultCom时且没有设置默认值，则取此值；"),a("br"),a("code",[t._v("注：此值对其它组件不补充")])])]),t._v(" "),a("tr",[a("td",[t._v("trimDoms")]),t._v(" "),a("td",[a("span",{staticStyle:{"white-space":"nowrap"}},[t._v('["input", "textarea", "el-input"]')])]),t._v(" "),a("td",[t._v("指出哪些表单元素需要去掉左右两边空格")])]),t._v(" "),a("tr",[a("td",[t._v("hasConsole")]),t._v(" "),a("td",[t._v("false")]),t._v(" "),a("td",[t._v("所有的表单是否有调试控制台; 若想设置"),a("code",[t._v("单个表单")]),t._v("，可在"),a("code",[t._v("对应的表单")]),t._v("中设置hasConsole")])])])])])},[],!1,null,null,null);s.default=e.exports}}]);