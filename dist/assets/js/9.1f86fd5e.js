(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{221:function(e,a,t){},396:function(e,a,t){"use strict";var n=t(221);t.n(n).a},401:function(e,a,t){"use strict";t.r(a);t(99),t(92),t(42),t(48),t(50),t(52);var n=t(0),o=(t(234),t(235)),r=t.n(o);n.default.use(r.a),n.default.config.productionTip=!1;var s=t(379),i=t.n(s),c={data:function(){return{options:[],value:"1.7.x",maxVersion:!1}},props:{},computed:{},created:function(){var e=this;i()("https://www.fastmock.site/mock/d3b0c1fcb73fc849fbbf1bffa19e6f99/demo/version",{methods:"get",params:{}}).then(function(a){var t=a.data.data,n=(t=t||[]).map(function(e){return(e+="").indexOf(".x")<0&&(e+=".x"),{id:e,name:e}});n.length>0&&(e.$data.maxVersion=n[0].id.replace(".x","")),e.$data.options=n})},components:{},methods:{resolvePath:function(){var e=arguments;if(e.length<=1)return e[0];for(var a=[],t=/\/+$/g,n=/^\/+/g,o=/^\/+|\/+$/g,r=0;r<e.length;r++){var s=e[r];(s=0==r?s.replace(t,""):r==e.length-1?s.replace(n,""):s.replace(o,""))&&a.push(s)}return a.join("/")},changeHandler:function(e){if(e){e=e.replace(".x","");var a=location.href;if(a.indexOf("/vue-easy-form-docs/dist")>=0){var t,n=a.split("/vue-easy-form-docs/dist");a!=(t=e>=this.$data.maxVersion?this.resolvePath(n[0],"/vue-easy-form-docs/dist",n[1]):this.resolvePath(n[0],"/vue-easy-form-docs",e,n[1]))&&(location.href=t)}}}}},l=(t(396),t(8)),u=Object(l.a)(c,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"version-select-box"},[t("el-select",{attrs:{placeholder:"请选择",size:"small"},on:{change:e.changeHandler},model:{value:e.value,callback:function(a){e.value=a},expression:"value"}},e._l(e.options,function(e){return t("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)},[],!1,null,null,null);a.default=u.exports}}]);