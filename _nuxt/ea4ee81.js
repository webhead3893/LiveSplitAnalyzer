(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,8],{281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return(null==t?void 0:t.GameTime)||(null==t?void 0:t.RealTime)||null}},282:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(164),n(15),n(128);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},283:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(input){return null==input?[]:Array.isArray(input)?input:[input]}},285:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},290:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));n(38);var r=n(285),o=function(t){r.a.$emit("startLoading"),setTimeout((function(){t(),r.a.$emit("stopLoading")}),500)},c=function(t){r.a.$emit("startLoading"),setTimeout((function(){t((function(){return r.a.$emit("stopLoading")}))}),500)}},291:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),m=(n(6),n(1),n(163),n(279)),v=n(285);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=h(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).modalRef="BaseModal",t}return Object(o.a)(n,[{key:"destroyModal",value:function(){v.a.$emit("closeModal")}},{key:"hideModal",value:function(){var t=this.$refs[this.modalRef];t&&t.hide()}},{key:"mounted",value:function(){var t=this.$refs[this.modalRef];t&&t.show()}}]),n}(m.Vue),j=O=y([m.Component],O),R=n(65),component=Object(R.a)(j,undefined,undefined,!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={currentSplit:null}},343:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("31a255c4",content,!0,{sourceMap:!1})},351:function(t,e,n){"use strict";n(343)},352:function(t,e,n){var r=n(79)(!1);r.push([t.i,"em[data-v-89abdc34]{text-decoration:underline}",""]),t.exports=r},353:function(t,e,n){"use strict";n.r(e);n(163);var r=n(30),o=n(22),c=n(23),l=n(60),f=n(100),d=n(44),m=n(40),v=(n(6),n(1),n(11),n(26),n(85),n(2),n(279)),h=n(291),y=n(281),O=n(285),j=n(294),R=n(282),T=n(290),k=n(283);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(f.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},M=function(t){Object(l.a)(n,t);var e=x(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).modalRef="ManualGoldUpdateModal",t.split=null,t.fields=[{key:"@_id",label:"Attempt #"},{key:"time",label:"Time"},{key:"actions",label:"Actions"}],t}return Object(c.a)(n,[{key:"history",get:function(){var t;return Object(r.a)(Object(k.a)(null===(t=this.split)||void 0===t?void 0:t.SegmentHistory.Time)).filter((function(t){return Object(y.a)(t)})).sort((function(t,e){var n=Object(y.a)(t),r=Object(y.a)(e);return Object(R.d)(n)-Object(R.d)(r)}))}},{key:"formatTime",value:function(t){return Object(R.a)(Object(y.a)(t)||"00:00:00.000000")}},{key:"deleteAttempt",value:function(t){var e=this;Object(T.b)((function(n){var r,o;(null===(r=e.split)||void 0===r?void 0:r.SegmentHistory.Time)&&(e.split.SegmentHistory.Time=Object(k.a)(e.split.SegmentHistory.Time).filter((function(a){return a["@_id"]!=t["@_id"]}))),(null===(o=e.split)||void 0===o?void 0:o.BestSegmentTime)&&(e.history[0].RealTime&&(e.split.BestSegmentTime={RealTime:e.history[0].RealTime}),e.history[0].GameTime&&(e.split.BestSegmentTime.GameTime=e.history[0].GameTime),e.$nextTick((function(){var r;n(),e.$bvToast.toast("Attempt #".concat(t["@_id"]," has been deleted"),{title:null===(r=e.split)||void 0===r?void 0:r.Name,autoHideDelay:5e3,appendToast:!1,variant:"success"})})))}))}},{key:"created",value:function(){var t=this;j.a.currentSplit&&(this.split=j.a.currentSplit),O.a.$on("setCurrentSplit",(function(e){return t.split=e}))}}]),n}(v.Vue),w=M=_([Object(v.Component)({mixins:[h.default]})],M),S=(n(351),n(65)),component=Object(S.a)(w,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:t.modalRef,staticClass:"text-center",attrs:{title:"Fix golds","hide-footer":"",centered:"",size:"lg"},on:{hidden:t.destroyModal}},[t.split?n("div",{staticClass:"text-center",staticStyle:{"max-height":"80vh",overflow:"auto"}},[n("h3",{staticClass:"mb-3"},[t._v("Best attempts for split "),n("em",[t._v(t._s(t.split.Name))])]),t._v(" "),n("b-table",{attrs:{small:"",fields:t.fields,items:t.history,responsive:"sm"},scopedSlots:t._u([{key:"cell(time)",fn:function(data){return[t._v("\n        "+t._s(t.formatTime(data.item))+"\n      ")]}},{key:"cell(actions)",fn:function(data){return[n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip:hover",arg:"hover"}],attrs:{pill:"",variant:"danger",size:"sm",title:"Delete this attempt"},on:{click:function(e){return t.deleteAttempt(data.item)}}},[n("font-awesome-icon",{attrs:{icon:"trash"}})],1)]}}],null,!1,1991413569)})],1):t._e()])}),[],!1,null,"89abdc34",null);e.default=component.exports}}]);