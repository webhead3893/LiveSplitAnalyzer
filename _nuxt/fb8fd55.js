(window.webpackJsonp=window.webpackJsonp||[]).push([[14,5,12,26],{278:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=new(n(9).default)},279:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return m}));var o=n(23),r=n(22),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},m=Object(o.a)((function t(){var e=this;Object(r.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},280:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(162),n(15),n(127);var o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],o=+t[3],r="";return e&&(r+="".concat(e,"h")),n&&(r+="".concat(n,"m")),r+="".concat(o<10?"0":"").concat(o.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},281:function(t,e,n){"use strict";var o=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFile:{},splitFileIsModified:!1});e.a={get state(){return o}}},282:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));n(16),n(1),n(3),n(101),n(102);var o=n(281),r=n(280),c=n(279),l=function(t){return(null==t?void 0:t.GameTime)||(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.Segment.map((function(t){var o;return(o=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(r.d)(o)),n}))},d=function(t){return t.Segment.reduce((function(t,e){return Object(c.b)(e.SplitTimes.SplitTime).forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){o.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},283:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c}));var o=n(278),r=function(t){o.a.$emit("startLoading",(function(){t(),o.a.$emit("stopLoading")}))},c=function(t){o.a.$emit("startLoading",(function(){t((function(){return o.a.$emit("stopLoading")}))}))}},288:function(t,e,n){"use strict";n.r(e);var o=n(22),r=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(161),n(277)),v=n(278);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},T=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).modalRef="BaseModal",t}return Object(r.a)(n,[{key:"destroyModal",value:function(){v.a.$emit("closeModal")}},{key:"hideModal",value:function(){var t=this.$refs[this.modalRef];t&&t.hide()}},{key:"mounted",value:function(){var t=this.$refs[this.modalRef];t&&t.show()}}]),n}(m.Vue),j=T=y([m.Component],T),O=n(65),component=Object(O.a)(j,undefined,undefined,!1,null,null,null);e.default=component.exports},289:function(t,e,n){var content=n(296);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("4d721a7c",content,!0,{sourceMap:!1})},293:function(t,e,n){"use strict";n.r(e);n(161);var o=n(22),r=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(127),n(218),n(277));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).hours=0,t.minutes=0,t.seconds=0,t}return Object(r.a)(n,[{key:"outputInSeconds",get:function(){return 3600*this.hours+60*this.minutes+this.seconds}},{key:"onInputChange",value:function(){this.$emit("input",this.outputInSeconds)}},{key:"mounted",value:function(){var time=this.value;time>3600&&(this.hours=Math.floor(time/3600),time%=3600),time>60&&(this.minutes=Math.floor(time/60),time%=60),this.seconds=+time.toFixed(2)}}]),n}(m.Vue);h([Object(m.Prop)({type:Number})],y.prototype,"value",void 0);var T=y=h([m.Component],y),j=(n(295),n(65)),component=Object(j.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form",{staticClass:"time-form",attrs:{inline:""}},[n("b-row",[n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"h"}},[n("b-form-input",{attrs:{placeholder:"Hours",type:"number",step:"1"},on:{change:t.onInputChange},model:{value:t.hours,callback:function(e){t.hours=t._n(e)},expression:"hours"}})],1)],1),t._v(" "),n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"m"}},[n("b-form-input",{attrs:{placeholder:"Minutes",type:"number",step:"1"},on:{change:t.onInputChange},model:{value:t.minutes,callback:function(e){t.minutes=t._n(e)},expression:"minutes"}})],1)],1),t._v(" "),n("b-col",{staticClass:"column",attrs:{cols:"4"}},[n("b-input-group",{attrs:{append:"s"}},[n("b-form-input",{attrs:{placeholder:"Seconds",type:"number",step:"0.01"},on:{change:t.onInputChange},model:{value:t.seconds,callback:function(e){t.seconds=t._n(e)},expression:"seconds"}})],1)],1)],1)],1)}),[],!1,null,"ccfb4790",null);e.default=component.exports},295:function(t,e,n){"use strict";n(289)},296:function(t,e,n){var o=n(79)(!1);o.push([t.i,".column[data-v-ccfb4790]{padding-left:.25rem;padding-right:.25rem}.time-form[data-v-ccfb4790]{padding-left:1rem;padding-right:1rem}",""]),t.exports=o},349:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("40c33674",content,!0,{sourceMap:!1})},377:function(t,e,n){"use strict";n(349)},378:function(t,e,n){var o=n(79)(!1);o.push([t.i,"h3[data-v-6f12f8bc]{font-size:1.25rem}.help-question[data-v-6f12f8bc]{font-size:1rem}",""]),t.exports=o},383:function(t,e,n){"use strict";n.r(e);n(161);var o=n(22),r=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(2),n(127),n(128),n(16),n(3),n(17),n(101),n(102),n(282)),v=n(277),h=n(288),y=n(281),T=n(279),j=n(280),O=n(283),C=n(305),_=n.n(C),R=n(278);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var S=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(c.a)(n,t);var e=x(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).modalRef="ComparisonEditorModal",t.comparisonName="",t.comparisonsToDelete=[],t.targetTime=t.selectedSobTotal,t.balancedFactor=0,t.useTargetTime=!1,t}return Object(r.a)(n,[{key:"deletableComparisons",get:function(){var t,e;return(null===(t=y.a.state.splitFile.Run)||void 0===t?void 0:t.Segments)?Object(m.a)(null===(e=y.a.state.splitFile.Run)||void 0===e?void 0:e.Segments).filter((function(s){return"Personal Best"!=s})):[]}},{key:"segments",get:function(){var t;return(null===(t=y.a.state.splitFile.Run)||void 0===t?void 0:t.Segments)?y.a.state.splitFile.Run.Segments:(this.$bvToast.toast("No splitfile selected",{title:"Error",autoHideDelay:5e3,appendToast:!1,variant:"danger"}),{Segment:[]})}},{key:"selectedSobTotal",get:function(){var t=Object(m.b)(this.segments);return+t[t.length-1].toFixed(2)}},{key:"makeBalanced",value:function(){var t=this;Object(O.a)((function(){if(t.segments.Segment.find((function(e){return Object(T.b)(e.SplitTimes.SplitTime).find((function(e){return e["@_name"]==t.comparisonName}))})))t.$bvToast.toast("Comparison ".concat(t.comparisonName," already exists"),{title:"Error",autoHideDelay:5e3,appendToast:!1,variant:"danger"});else{Object(m.d)(!0);var e=t.useTargetTime?100*(t.targetTime/t.selectedSobTotal-1):t.balancedFactor,n=Object(m.b)(t.segments,!1).map((function(time){return time+e/100*time})),o=[],r=[];y.a.state.hasGameTime&&(o=Object(m.b)(t.segments,!0),r=o.map((function(time){return time+e/100*time}))),t.segments.Segment.forEach((function(e,o,c){var l=Object(T.b)(c[o].SplitTimes.SplitTime),f={"@_name":t.comparisonName,RealTime:Object(j.c)(n[o])};y.a.state.hasGameTime&&(f.GameTime=Object(j.c)(r[o])),l.push(f),c[o].SplitTimes.SplitTime=l}))}})),this.$bvToast.toast("Comparison was successfully added",{title:this.comparisonName,autoHideDelay:5e3,appendToast:!1,variant:"success"})}},{key:"deleteComparisons",value:function(){var t=this;R.a.$emit("openConfirm","Delete ".concat(this.comparisonsToDelete.join(", "),"?"),(function(){Object(m.d)(!0),t.segments.Segment.forEach((function(e,n,o){var r=Object(T.b)(o[n].SplitTimes.SplitTime);o[n].SplitTimes.SplitTime=r.filter((function(e){return!t.comparisonsToDelete.includes(e["@_name"])}))})),t.$bvToast.toast("Comparison".concat(1==t.comparisonsToDelete.length?"":"s"," successfully deleted"),{title:t.comparisonsToDelete.join(", "),autoHideDelay:5e3,appendToast:!1,variant:"success"}),t.comparisonsToDelete=[],R.a.$emit("closeConfirm")}))}}]),n}(Object(v.mixins)(h.default)),k=w=S([Object(v.Component)({components:{Multiselect:_.a}})],w),M=(n(377),n(65)),component=Object(M.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:t.modalRef,staticClass:"text-center",attrs:{title:"Comparison editor","hide-footer":"",centered:"",size:"lg"},on:{hidden:t.destroyModal}},[n("h3",{staticClass:"text-center"},[t._v("Create a balanced comparison")]),t._v(" "),n("table",{staticClass:"w-100",attrs:{role:"presentation"}},[n("tbody",[n("tr",[n("td",{staticClass:"text-right pr-2"},[t._v("\n        Name\n      ")]),t._v(" "),n("td",[n("b-form-input",{attrs:{required:"",debounce:"500"},model:{value:t.comparisonName,callback:function(e){t.comparisonName=e},expression:"comparisonName"}})],1)]),t._v(" "),n("tr",[n("td",{staticClass:"text-center pt-2 pb-2",attrs:{colspan:"2"}},[n("span",{staticClass:"pr-2"},[t._v("Use a factor")]),t._v(" "),n("b-checkbox",{staticClass:"d-inline",attrs:{switch:""},model:{value:t.useTargetTime,callback:function(e){t.useTargetTime=e},expression:"useTargetTime"}}),t._v(" "),n("span",{staticClass:"pl-1"},[t._v("Use a target time")])],1)]),t._v(" "),t.useTargetTime?n("tr",[n("td",{staticClass:"text-right pr-2",staticStyle:{"min-width":"8rem"}},[t._v("\n        Target time\n        "),n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question",attrs:{title:"Automatically determine time factor based on a target total time (in seconds)"}},[n("font-awesome-icon",{attrs:{icon:"circle-question"}})],1)]),t._v(" "),n("td",[n("time-selector",{model:{value:t.targetTime,callback:function(e){t.targetTime=e},expression:"targetTime"}})],1)]):n("tr",[n("td",{staticClass:"text-right pr-2"},[t._v("\n        Factor\n        "),n("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"help-question",attrs:{title:"How much time to add to each of your golds (as a percentage)"}},[n("font-awesome-icon",{attrs:{icon:"circle-question"}})],1)]),t._v(" "),n("td",[n("b-form-input",{attrs:{type:"number",min:"0",debounce:"500",step:"0.01"},model:{value:t.balancedFactor,callback:function(e){t.balancedFactor=t._n(e)},expression:"balancedFactor"}})],1)])])]),t._v(" "),n("div",{staticClass:"text-center"},[n("b-button",{staticClass:"mt-3",attrs:{variant:"success"},on:{click:t.makeBalanced}},[t._v("\n      Create\n    ")])],1),t._v(" "),t.deletableComparisons.length?n("div",[n("hr"),t._v(" "),n("h3",{staticClass:"text-center"},[t._v("Delete comparison")]),t._v(" "),n("multiselect",{staticClass:"m-auto",staticStyle:{"max-width":"30rem"},attrs:{options:t.deletableComparisons,multiple:""},model:{value:t.comparisonsToDelete,callback:function(e){t.comparisonsToDelete=e},expression:"comparisonsToDelete"}}),t._v(" "),n("div",{staticClass:"text-center"},[n("b-button",{staticClass:"mt-2",attrs:{variant:"danger",disabled:!t.comparisonsToDelete.length},on:{click:t.deleteComparisons}},[t._v("\n        Delete\n      ")])],1)],1):t._e()])}),[],!1,null,"6f12f8bc",null);e.default=component.exports;installComponents(component,{TimeSelector:n(293).default})}}]);