(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{190:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._m(4),t._v(" "),t._m(5),t._v(" "),n("p",[t._v("es语法: "),n("code",[t._v("es:")]),t._v("为前缀的字符串，"),n("router-link",{attrs:{to:"./explain.html#es语法"}},[t._v("数据源")]),t._v("以大括号（如："),t._m(6),t._v("）包括起来，再按照一定的规则解析出来的js语句。实例见"),n("a",{attrs:{href:"https://chengaohe45.github.io/vue-easy-form-docs/demo/#/es-function",target:"_blank",rel:"noopener noreferrer"}},[t._v("es写法实例"),n("OutboundLink")],1)],1),t._v(" "),t._m(7),n("p",[t._v("支持es有4个数据源，这4个值共同影响整个es的解析：")]),t._v(" "),n("ul",[n("li",[n("code",[t._v("rootData")]),t._v("： 整个表单的"),n("router-link",{attrs:{to:"./explain.html#根值"}},[t._v("根值/rootData")]),t._v(". root在es语法中的写法是"),t._m(8)],1),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),n("li",[n("code",[t._v("hidden")]),t._v("： 用于判断某一项是否隐藏的"),n("code",[t._v("函数")]),t._v(". hidden在es语法中的写法是"),t._m(11),t._v("; 括号中是路径；此函数也是表单方法"),n("router-link",{attrs:{to:"./form.html#表单方法"}},[t._v("isHidden")])],1)]),t._v(" "),n("p",[n("router-link",{attrs:{to:"./array.html#数组es写法"}},[t._v("数组es写法")])],1),t._v(" "),t._m(12),t._v(" "),n("p",[t._v("属性直接写成一个函数，再传入相应的参数(数据源)进行动态解析. 实例见"),n("a",{attrs:{href:"https://chengaohe45.github.io/vue-easy-form-docs/demo/#/es-function",target:"_blank",rel:"noopener noreferrer"}},[t._v("函数写法实例"),n("OutboundLink")],1)]),t._v(" "),t._m(13),n("p",[t._v("运用函数构造Vue属性，options所携带的信息：")]),t._v(" "),t._m(14),t._v(" "),t._m(15)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"组件化-es-函数写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件化-es-函数写法","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件化/es/函数写法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"组件化标准写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件化标准写法","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件化标准写法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("组件化是指某个属性根据实际要求，按一定的格式引入Vue组件；目前支持组件化的属性有：项标签label、描述desc、帮助help、单元unit、标题title、项组件component，当然，这些属性都有自己其它的写法，具体的写法见各属性详解。"),s("br"),this._v(" "),s("code",[this._v("引入一个组件(从一个Object开始)")]),this._v("：")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("属性名"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 表单配置属性名如：label, help")]),t._v("\n  name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"el-input"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这个是不支持es/函数写法，也就是一经固定，不支持改变")]),t._v("\n  style"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一个对象；这个是不支持es/函数写法")]),t._v("\n    color"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"#000"')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"box1 box2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类，多个以空格隔开；这个是不支持es/函数写法")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Vue组件需要的属性；props的key支持es/函数写法(注意：是props的key,不是props的key的key)")]),t._v("\n  props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"textarea"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 值固定写法")]),t._v("\n    placeholder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"es: {{$root}}.isOpen ? '提示1' : '提示2'\"")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持es写法, 具体见下面")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// options => {global, rootData, idxChain, index, pathKey, $hidden}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("disabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 支持函数写法, options所携带的信息具体见下面")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isOpen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  text"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"文本描述"')]),t._v("    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有些组件不支持这个；就是default-slot；支持es/函数写法")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("注意")]),this._v(" "),s("p",[s("code",[this._v("没有this指针")]),this._v(" 当props里的的属性（如：disabled）写成一个函数时，this并不指向表单的。\n为什么? 因为当执行这些函数时，表单内的组件正处于未构造或正在重复构造，不建议调用表单内的函数(如：form.getValue等)；这个与验证rules.checks、数组array.insertValue、项组件component.actions里面的函数不同，后者们的this是指向表单的")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"es写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es写法","aria-hidden":"true"}},[this._v("#")]),this._v(" es写法")])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{pre:!0},[s("code",[this._v("{{$root}}")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"姓名"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"el-input"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      disabled"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es: {{$root}}.isOpen"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据源用两个大括号包住")]),t._v("\n      placeholder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"开关打开我就不可写"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nlevel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es级别"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"es: {{$hidden('name')}}\"")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// $hidden是一个函数")]),t._v("\n  component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"el-input"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      placeholder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name隐藏我就跟着隐藏"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{pre:!0},[s("code",[this._v("{{$root}}")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("global")]),this._v("： 从表单中传入，用于外部对表单影响, 不设置则默认为"),s("code",[this._v("空对象")]),this._v("; global在es语法中的写法是"),s("span",{pre:!0},[s("code",[this._v("{{$global}}")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("index")]),this._v("：数组中孩子节点(非孙子节点))项所在的索引，其它节点(非孩子)节点此值是-1. index在es语法中的写法是"),s("span",{pre:!0},[s("code",[this._v("{{$index}}")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("span",{pre:!0},[s("code",[this._v("{{$hidden(base.target)}}")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"函数写法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数写法","aria-hidden":"true"}},[this._v("#")]),this._v(" 函数写法")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"姓名"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"el-input"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("disabled")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接写成一个函数")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rootData"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isOpen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      placeholder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"开关打开我就不可写"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\nlevel"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  label"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"es级别"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("hidden")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("options")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 直接写成一个函数")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $hidden "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$hidden"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("$hidden")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  component"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    name"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"el-input"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    props"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      placeholder"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"name隐藏我就跟着隐藏"')]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  value"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[n("code",[t._v("global")]),t._v("：form属性的global")]),t._v(" "),n("li",[n("code",[t._v("rootData")]),t._v("：表单的原始值（隐藏的项值也会取出）")]),t._v(" "),n("li",[n("code",[t._v("pathKey")]),t._v("：项组件的路径")]),t._v(" "),n("li",[n("code",[t._v("idxChain")]),t._v("： 项组件所要数组所组成的id 如: 1,2")]),t._v(" "),n("li",[n("code",[t._v("index")]),t._v("：项组件处于数组的子节点(非孙子)时的索引，其余的返回-1")]),t._v(" "),n("li",[n("code",[t._v("$hidden")]),t._v('：函数。判断某项是否处于隐藏，这个函数会自动匹配所处于哪个表单，所以参数只需要传入一个pathKey。如: $hidden("base.name")')])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("blockquote",[n("p",[n("code",[t._v("es写法")]),t._v("完全可以用"),n("code",[t._v("函数写法")]),t._v("代替; 它们都有自身的优势："),n("code",[t._v("es写法")]),t._v("比较简洁，特别是三目运算符中；而"),n("code",[t._v("函数写法")]),t._v("比较灵活，运用于比较复杂的逻辑。")])])}],!1,null,null,null);s.default=e.exports}}]);