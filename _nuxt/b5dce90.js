(window.webpackJsonp=window.webpackJsonp||[]).push([[27,25,31,47],{307:function(t,e,n){"use strict";n.d(e,"d",(function(){return o})),n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(166),n(14),n(133),n(315),n(316),n(317);var o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],o=+t[3],r="";return e&&(r+="".concat(e,"h")),n&&(r+="".concat(n,"m")),r+="".concat(o<10?"0":"").concat(o.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var o=Math.trunc(time),r=(time-o).toFixed(7).substring(2);return t+="".concat(o.toFixed().padStart(2,"0"),".").concat(r.padEnd(7,"0"))}},308:function(t,e,n){"use strict";var o=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null,filters:[],filteredAttempts:[]});e.a={get state(){return o}}},309:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return v}));n(15),n(1),n(3),n(85),n(109);var o=n(308),r=n(307),c=n(313),l=function(t){return(null==t?void 0:t.GameTime)&&!o.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var o;return(o=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(r.d)(o)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},v=function(t){o.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},310:function(t,e,n){var o=n(13),r=n(66),c=n(29),l=n(167),f=n(42),d=o(l),v=o("".slice),m=Math.ceil,h=function(t){return function(e,n,o){var l,h,y=c(f(e)),j=r(n),O=y.length,T=void 0===o?" ":c(o);return j<=O||""==T?y:((h=d(T,m((l=j-O)/T.length))).length>l&&(h=v(h,0,l)),t?y+h:h+y)}};t.exports={start:h(!1),end:h(!0)}},311:function(t,e,n){var o=n(56);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(o)},312:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o=new(n(8).default)},313:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return v}));var o=n(24),r=n(23),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},v=Object(o.a)((function t(){var e=this;Object(r.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},315:function(t,e,n){n(9)({target:"Math",stat:!0},{trunc:n(230)})},316:function(t,e,n){"use strict";var o=n(9),r=n(310).start;o({target:"String",proto:!0,forced:n(311)},{padStart:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},317:function(t,e,n){"use strict";var o=n(9),r=n(310).end;o({target:"String",proto:!0,forced:n(311)},{padEnd:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},318:function(t,e,n){"use strict";n.r(e);var o=n(23),r=n(24),c=n(60),l=n(108),f=n(46),d=n(41),v=(n(6),n(1),n(165),n(306));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=m(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t.id="collapse-xxxx",t}return Object(r.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"onVisibleUpdate",value:function(t){this.$emit("input",t)}},{key:"onValueUpdate",value:function(t){this.visible=t}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(v.Vue);h([Object(v.Prop)()],y.prototype,"value",void 0),h([Object(v.Prop)()],y.prototype,"title",void 0),h([Object(v.Prop)({default:!1})],y.prototype,"startsOpen",void 0),h([Object(v.Prop)({default:!0})],y.prototype,"lazy",void 0),h([Object(v.Watch)("visible")],y.prototype,"onVisibleUpdate",null),h([Object(v.Watch)("value",{immediate:!0})],y.prototype,"onValueUpdate",null);var j=y=h([v.Component],y),O=(n(326),n(65)),component=Object(O.a)(j,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),e("b-collapse",{attrs:{id:t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible||!t.lazy?t._t("default"):t._e()],2)],1)}),[],!1,null,"1ccd451c",null);e.default=component.exports},320:function(t,e,n){var content=n(327);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("4e9aab5b",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";n(320)},327:function(t,e,n){var o=n(83)(!1);o.push([t.i,"*[data-v-1ccd451c]{color:#000}.toggle-collapse[data-v-1ccd451c]{position:absolute;right:1rem;top:1rem}",""]),t.exports=o},366:function(t,e,n){"use strict";n.r(e);n(165);var o=n(23),r=n(24),c=n(60),l=n(108),f=n(46),d=n(41),v=(n(6),n(1),n(2),n(17),n(3),n(85),n(109),n(309)),m=n(306),h=n(333),y=n.n(h),j=n(312);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=Object(f.a)(t);if(e){var r=Object(f.a)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(l.a)(this,n)}}var T=function(t,e,n,desc){var o,r=arguments.length,c=r<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(c=(r<3?o(c):r>3?o(e,n,c):o(e,n))||c);return r>3&&c&&Object.defineProperty(e,n,c),c},x=function(t){Object(c.a)(n,t);var e=O(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).comparisonsToDelete=[],t}return Object(r.a)(n,[{key:"deletableComparisons",get:function(){return Object(v.a)(this.segments).filter((function(s){return"Personal Best"!=s}))}},{key:"deleteComparisons",value:function(){var t=this;j.a.$emit("openConfirm","Delete ".concat(this.comparisonsToDelete.join(", "),"?"),(function(){Object(v.d)(!0),t.segments.forEach((function(e,n,o){var r=o[n].SplitTimes.SplitTime;o[n].SplitTimes.SplitTime=r.filter((function(e){return!t.comparisonsToDelete.includes(e["@_name"])}))})),t.$bvToast.toast("Comparison".concat(1==t.comparisonsToDelete.length?"":"s"," successfully deleted"),{title:t.comparisonsToDelete.join(", "),autoHideDelay:5e3,appendToast:!1,variant:"success"}),t.comparisonsToDelete=[],j.a.$emit("closeConfirm")}))}}]),n}(m.Vue);T([Object(m.Prop)()],x.prototype,"segments",void 0);var R=x=T([Object(m.Component)({components:{Multiselect:y.a}})],x),C=n(65),component=Object(C.a)(R,(function(){var t=this,e=t._self._c;t._self._setupProxy;return t.deletableComparisons.length?e("div",[e("collapsible-card",{attrs:{id:"ComparisonRemoverCard",title:"Delete comparison"}},[e("multiselect",{staticClass:"m-auto",staticStyle:{"max-width":"30rem"},attrs:{options:t.deletableComparisons,multiple:""},model:{value:t.comparisonsToDelete,callback:function(e){t.comparisonsToDelete=e},expression:"comparisonsToDelete"}}),t._v(" "),e("div",{staticClass:"text-center"},[e("b-button",{staticClass:"mt-2",attrs:{variant:"danger",disabled:!t.comparisonsToDelete.length},on:{click:t.deleteComparisons}},[t._v("\n        Delete\n      ")])],1)],1)],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(318).default})}}]);