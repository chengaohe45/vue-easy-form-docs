(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{158:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"安装-全局配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-全局配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装/全局配置")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("npm install "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),t._v("save vue"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("easy"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("form\n")])])]),s("h2",{attrs:{id:"引入"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引入","aria-hidden":"true"}},[t._v("#")]),t._v(" 引入")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" esForm "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vue-easy-form"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h2",{attrs:{id:"注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册","aria-hidden":"true"}},[t._v("#")]),t._v(" 注册")]),t._v(" "),s("p",[t._v("语法：Vue.use(esForm, extendRule, options);")]),t._v(" "),s("p",[t._v("如：")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("Vue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("esForm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n或\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("esForm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n    boxRowSpace"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    hasConsole"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("NODE_ENV")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"production"')]),t._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 推荐写成动态，编译时不用修改")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("参数(get)：")]),t._v(" "),s("ul",[s("li",[t._v("esForm: 必填 所引入的esForm组件")]),t._v(" "),s("li",[t._v("options：非必填 全局设置")])]),t._v(" "),s("h2",{attrs:{id:"全局设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局设置","aria-hidden":"true"}},[t._v("#")]),t._v(" 全局设置")]),t._v(" "),s("p",[t._v("表单全局配置有如下")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性名")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("boxRowHeight")]),t._v(" "),s("td",[t._v("40")]),t._v(" "),s("td",[t._v("设置每一块中每一行的高度")])]),t._v(" "),s("tr",[s("td",[t._v("boxRowSpace")]),t._v(" "),s("td",[t._v("20")]),t._v(" "),s("td",[t._v("整数（px） 设置每一块中行与行的距离")])]),t._v(" "),s("tr",[s("td",[t._v("boxLabelWidth")]),t._v(" "),s("td",[t._v("100")]),t._v(" "),s("td",[t._v("整数（px） 设置每一块中每一行的label的宽度")])]),t._v(" "),s("tr",[s("td",[t._v("colon")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否有冒号")])]),t._v(" "),s("tr",[s("td",[t._v("direction")]),t._v(" "),s("td",[t._v('"h"')]),t._v(" "),s("td",[t._v("竖排还是横排")])]),t._v(" "),s("tr",[s("td",[t._v("defaultCom")]),t._v(" "),s("td",[t._v('"input"')]),t._v(" "),s("td",[t._v("当配置时，不写component.name时用这个")])]),t._v(" "),s("tr",[s("td",[t._v("defaultVal")]),t._v(" "),s("td",[t._v('""')]),t._v(" "),s("td",[t._v("对defaultCom的补充，当组件为defaultCom时且没有设置默认值，则取此值；"),s("br"),s("code",[t._v("注：此值对其它组件不补充")])])]),t._v(" "),s("tr",[s("td",[t._v("trimDoms")]),t._v(" "),s("td",[t._v('"input", "textarea", "el-input"')]),t._v(" "),s("td",[t._v("指出哪些表单元素需要去掉左右两边空格")])]),t._v(" "),s("tr",[s("td",[t._v("hasConsole")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("所有的表单是否有调试控制台; 若想设置"),s("code",[t._v("单个表单")]),t._v("，可在"),s("code",[t._v("对应的表单")]),t._v("中设置hasConsole")])])])])])}],!1,null,null,null);a.default=n.exports}}]);