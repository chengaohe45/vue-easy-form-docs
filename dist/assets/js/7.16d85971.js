(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{186:function(module,__webpack_exports__,__webpack_require__){"use strict";var E_my_projects_vue_easy_form_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(128),E_my_projects_vue_easy_form_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(E_my_projects_vue_easy_form_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(83),core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_1__),E_my_projects_vue_easy_form_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(82),E_my_projects_vue_easy_form_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(E_my_projects_vue_easy_form_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(99),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_3__),_entry__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(259),_libs_utils__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(249),_package_json__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(250),_package_json__WEBPACK_IMPORTED_MODULE_6___namespace=__webpack_require__.t(250,1),_components_demo_frame_schemas_operation_schema_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(376);__webpack_exports__.a={data:function(){return{opGlobal:{fromDoc:!0},opSchema:_components_demo_frame_schemas_operation_schema_js__WEBPACK_IMPORTED_MODULE_7__.a,opValue:{},isExpanded:!1,hovering:!1,errMsg:!1,formValue:{},formSchema:!1,formGlobal:void 0,codepen:{script:"",html:"",style:""}}},props:{hash:{type:String,required:!1,default:void 0},canOperate:{type:Boolean,required:!1,default:!1},open:{type:Boolean,required:!1,default:!1}},computed:{iconClass:function(){return this.isExpanded?"el-icon-caret-top":"el-icon-caret-bottom"},controlText:function(){return this.isExpanded?"隐藏代码":"显示代码"}},created:function(){this.$data.isExpanded=this.open;var e=this.getSchema();_libs_utils__WEBPACK_IMPORTED_MODULE_5__.a.isObj(e)?this.$data.formSchema=e:_libs_utils__WEBPACK_IMPORTED_MODULE_5__.a.isStr(e)&&(this.$data.errMsg=e)},mounted:function(){if(!1===this.$data.formSchema){var e=this.getSchema();_libs_utils__WEBPACK_IMPORTED_MODULE_5__.a.isObj(e)?this.$data.formSchema=e:_libs_utils__WEBPACK_IMPORTED_MODULE_5__.a.isStr(e)&&(this.$data.errMsg=e)}},methods:{getSchema:function(){var e=!1,_=this.$slots.default;if(_&&_[0]&&_[0].elm){var t=_[0].elm.innerText.split(/export\s+default(\s|\n)*\{/g)[2];if(t){var s=t.lastIndexOf("}"),o=t.substr(0,s);o=o.trim(),this.codepen.script=o;var a,r="return ({"+o+"});",n=!1;try{var i=(a=(a=new Function(r)()).data()).schema||a.formSchema;if(_libs_utils__WEBPACK_IMPORTED_MODULE_5__.a.isObj(i)&&E_my_projects_vue_easy_form_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(i).length>0){n=i;var l=a.global||a.formGlobal;_libs_utils__WEBPACK_IMPORTED_MODULE_5__.a.isObj(l)&&E_my_projects_vue_easy_form_node_modules_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(l).length>0?(this.$data.formGlobal=l,this.$data.codepen.html='<es-form :schema="formSchema" :global="formGlobal" v-model="formValue"></es-form>'):this.$data.codepen.html='<es-form :schema="formSchema" v-model="formValue"></es-form>'}else n="数据不正确: data必须存在对象schema且不能为空"}catch(e){n="数据不正确"}e=n}}return e},validHandler:function(){this.$refs.form.checkAll()?this.$message({message:"调用form.checkAll(): 表单输入正确",type:"success"}):this.$message({message:"调用form.checkAll(): 表单输入不合法",type:"error"})},resetHandler:function(){this.$refs.form.reset(),this.$message({message:"调用form.reset(): 重置成功",type:"success"})},toggleGlobalHandler:function(){var e=this.$data.formGlobal;e&&e.hasOwnProperty("status")&&(e.status=!e.status)},setValueHandler:function setValueHandler(){if(this.$refs.opRef.checkAll()){var opValue=this.$data.opValue,value;try{eval("value = "+opValue.value)}catch(e){return this.$message({message:"值无法解析",type:"error"}),console.error(e),!1}opValue.key?this.$refs.form.setValue(opValue.key,value):_libs_utils__WEBPACK_IMPORTED_MODULE_5__.a.isObj(value)?this.$refs.form.setValue(value):this.$message({message:"当key为空时，value必须是一个对象",type:"warning"})}},goCodepen:function(){for(var e=(_package_json__WEBPACK_IMPORTED_MODULE_6__.devDependencies["element-ui"]||_package_json__WEBPACK_IMPORTED_MODULE_6__.dependencies["element-ui"]).match(/\d+(\.\d+)*/g)[0],_=_package_json__WEBPACK_IMPORTED_MODULE_6__.version,t=this.$data.codepen,s=t.script,o=t.html,a=t.style,r='<script src="//unpkg.com/vue/dist/vue.js"><\/script>\n<scr'+'ipt src="//unpkg.com/element-ui@'.concat(e,'/lib/index.js"></scr')+"ipt>\n<scr"+'ipt src="//unpkg.com/vue-easy-form@'.concat(_,'/dist/es-form.umd.min.js"></scr')+"ipt>",n='Vue.use(window["esForm"], { // 进行全局配置\n   rowSpace: 12, // 系统默认为20\n   defaultCom: "el-input", // 默认组件改为el-input\n   trimDoms: ["input", "textarea", "el-input"], \n   hasConsole: true  // 打开控制台\n});\n\nvar Main = {\n   '+s+"\n}",i="".concat(r,'\n<div id="app" style="font-size: 14px;">\n  ').concat(o.trim(),"\n</div>"),l={js:n=n?n+"\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount('#app')":"new Vue().$mount('#app')",css:'@import url("//unpkg.com/element-ui@'.concat(e,'/lib/theme-chalk/index.css");\n').concat((a||"").trim(),"\n"),html:i},c=document.getElementById("fiddle-form")||document.createElement("form");c.firstChild;)c.removeChild(c.firstChild);c.method="POST",c.action="https://codepen.io/pen/define/",c.target="_blank",c.style.display="none";var m=document.createElement("input");m.setAttribute("name","data"),m.setAttribute("type","hidden"),m.setAttribute("value",E_my_projects_vue_easy_form_node_modules_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(l)),c.appendChild(m),document.body.appendChild(c),c.submit()}}}},219:function(e,_,t){},376:function(e,_,t){"use strict";_.a={ui:{colon:!0,rowSpace:10,labelWidth:72},properties:{key:{label:"Key",component:{name:"el-input",props:{placeholder:"项组件路径/pathKey"}},value:"",help:{props:{content:"点击查看pathKey",href:"https://chengaohe45.github.io/vue-easy-form-docs/dist/base/explain.html#项组件路径"}}},value:{label:"Value",component:{name:"el-input",props:{placeholder:"es: {{$root.key}} ? '格式：整数(123)，字符串(\"123\")': '格式：对象({...})'",type:"textarea",rows:4}},value:"",rules:{required:!0,emptyMsg:"值不能为空"},desc:"es: {{$root.key}} ? '对应的值(字符串两边记得加上双引号，如：\"你好\")': (!{{$global}}.fromDoc ? '必须是一个Object(可复制下面的值来试试)' : '必须是一个Object')",help:{props:{content:"es: !{{$global}}.fromDoc ? '此值会用eval解析, 所以输入要符合格式。<br/>点击可查看值设值' : '此值会用eval解析, 所以输入要符合格式。'",href:"es: !{{$global}}.fromDoc ? 'https://chengaohe45.github.io/vue-easy-form-docs/dist/base/value.html#设值' : ''"}}}}}},377:function(e,_,t){"use strict";var s=t(219);t.n(s).a},405:function(e,_,t){"use strict";t.r(_);var s=t(186).a,o=(t(377),t(8)),a=Object(o.a)(s,function(){var e=this,_=e.$createElement,t=e._self._c||_;return t("div",{staticClass:"demo-block",class:{hover:e.hovering},on:{mouseenter:function(_){e.hovering=!0},mouseleave:function(_){e.hovering=!1}}},[t("div",{staticClass:"demo-form-box"},[e.formSchema?t("es-form",{ref:"form",attrs:{global:e.formGlobal,schema:e.formSchema},model:{value:e.formValue,callback:function(_){e.formValue=_},expression:"formValue"}}):e.errMsg?t("div",{staticClass:"error-msg"},[e._v(e._s(e.errMsg))]):e._e()],1),e._v(" "),!e.errMsg&&e.canOperate?t("div",{staticClass:"demo-form-op-box"},[t("h3",{staticClass:"demo-title"},[e._v("实例操作区")]),e._v(" "),t("div",{staticClass:"demo-form-set-wrap"},[t("div",{staticClass:"demo-form-btn-row"},[t("el-button",{attrs:{size:"small",type:"primary",round:""},on:{click:e.validHandler}},[e._v("表单验证")]),e._v(" "),t("el-button",{attrs:{size:"small",round:""},on:{click:e.resetHandler}},[e._v("重置")]),e._v(" "),e.formGlobal?t("el-button",{staticClass:"toggle-btn",attrs:{size:"small",round:""},on:{click:e.toggleGlobalHandler}},[e._v("当前global.status为"+e._s(e.formGlobal.status)+" >> 切换")]):e._e()],1),e._v(" "),t("div",{staticClass:"demo-form-set-row"},[t("div",{staticClass:"demo-op-title"},[e._v("\n          设置表单form.setValue(key, value):\n        ")]),e._v(" "),t("div",{staticClass:"demo-op-form-box"},[t("div",{staticClass:"demo-op-form-col"},[t("es-form",{ref:"opRef",attrs:{global:e.opGlobal,schema:e.opSchema,hasConsole:!1},model:{value:e.opValue,callback:function(_){e.opValue=_},expression:"opValue"}})],1),e._v(" "),t("el-button",{staticClass:"demo-op-btn-col",attrs:{size:"small",type:"primary"},on:{click:e.setValueHandler}},[e._v("提交值设置")])],1)])])]):e._e(),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:e.isExpanded,expression:"isExpanded"}],staticClass:"demo-higlight"},[e._t("default")],2),e._v(" "),t("div",{staticClass:"demo-block-control",on:{click:function(_){e.isExpanded=!e.isExpanded}}},[t("transition",{attrs:{name:"arrow-slide"}},[t("i",{class:[e.iconClass,{hovering:e.hovering}]})]),e._v(" "),t("transition",{attrs:{name:"text-slide"}},[t("span",{directives:[{name:"show",rawName:"v-show",value:e.hovering,expression:"hovering"}],staticClass:"txt"},[e._v(e._s(e.controlText))])]),e._v(" "),e.hash?t("el-tooltip",{attrs:{effect:"dark",content:"存在自定义组件，可前往实例运行",placement:"right"}},[t("transition",{attrs:{name:"text-slide"}},[t("a",{directives:[{name:"show",rawName:"v-show",value:e.hovering||e.isExpanded,expression:"hovering || isExpanded"}],staticClass:"control-link",attrs:{target:"_blank",href:"https://chengaohe45.github.io/vue-easy-form-docs/demo/"+e.hash},on:{click:function(e){e.stopPropagation()}}},[e._v("\n          在线运行\n        ")])])],1):t("el-tooltip",{attrs:{effect:"dark",content:"前往codepen.io运行",placement:"right"}},[t("transition",{attrs:{name:"text-slide"}},[t("el-button",{directives:[{name:"show",rawName:"v-show",value:e.hovering||e.isExpanded,expression:"hovering || isExpanded"}],staticClass:"control-button",attrs:{size:"small",type:"text"},on:{click:function(_){return _.stopPropagation(),e.goCodepen(_)}}},[e._v("\n          在线运行\n        ")])],1)],1)],1)])},[],!1,null,null,null);_.default=a.exports}}]);