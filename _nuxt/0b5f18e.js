(window.webpackJsonp=window.webpackJsonp||[]).push([[24,25],{280:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},281:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},282:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(163),n(15),n(127),n(290),n(291),n(292);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},287:function(t,e,n){var r=n(14),o=n(66),c=n(28),l=n(164),f=n(41),d=r(l),v=r("".slice),m=Math.ceil,h=function(t){return function(e,n,r){var l,h,y=c(f(e)),x=o(n),D=y.length,O=void 0===r?" ":c(r);return x<=D||""==O?y:((h=d(O,m((l=x-D)/O.length))).length>l&&(h=v(h,0,l)),t?y+h:h+y)}};t.exports={start:h(!1),end:h(!0)}},288:function(t,e,n){var r=n(55);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},290:function(t,e,n){var r=n(13),o=Math.ceil,c=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?c:o)(t)}})},291:function(t,e,n){"use strict";var r=n(13),o=n(287).start;r({target:"String",proto:!0,forced:n(288)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},292:function(t,e,n){"use strict";var r=n(13),o=n(287).end;r({target:"String",proto:!0,forced:n(288)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},310:function(t,e,n){var content=n(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("0fe49d72",content,!0,{sourceMap:!1})},321:function(t,e,n){"use strict";n(310)},322:function(t,e,n){var r=n(79)(!1);r.push([t.i,".text-info[data-v-6ae3c450]{cursor:pointer}.text-info[data-v-6ae3c450]:hover{filter:drop-shadow(0 0 1px rgb(23,162,184))}",""]),t.exports=r},329:function(t,e,n){"use strict";n.r(e);n(162);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),v=(n(6),n(1),n(128),n(11),n(26),n(165),n(18),n(282)),m=n(279),h=n(280),y=n(281);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var D=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=x(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).format=v.b,t}return Object(o.a)(n,[{key:"formatWithDefault",value:function(time){return time?Object(v.b)(time):"No data"}},{key:"doEditValue",value:function(t){for(var e=this,n=t-this.cellData.value.time,i=this.cellData.index;i<this.segments.length;++i){var r=this.segments[i].SplitTimes.SplitTime.find((function(t){return t["@_name"]===e.comparisonName}));if(r){var o=!y.a.state.useRealTime&&r.GameTime?"GameTime":"RealTime";r[o]=Object(v.c)(Object(v.d)(r[o]||"")+n)}else this.$bvToast.toast("Couldn't find selected comparison in splitfile",{title:"Error",autoHideDelay:5e3,appendToast:!1,variant:"danger"})}}},{key:"editValue",value:function(){var t=this,e=this.cellData.item.split;h.a.$emit("openModal","TimeSelectionModal",{message:e.startsWith("-")?"".concat(e.slice(1)," (subsplit)"):e,value:this.cellData.value.time||0,callback:function(e){return t.doEditValue(e)}})}}]),n}(m.Vue);D([Object(m.Prop)()],O.prototype,"referenceComparisonName",void 0),D([Object(m.Prop)()],O.prototype,"comparisonName",void 0),D([Object(m.Prop)()],O.prototype,"cellData",void 0),D([Object(m.Prop)()],O.prototype,"segments",void 0);var j=O=D([m.Component],O),M=(n(321),n(65)),component=Object(M.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",["Sum of Best"!==t.comparisonName?n("font-awesome-icon",{staticClass:"text-info",attrs:{icon:"pen-to-square"},on:{click:t.editValue}}):t._e(),t._v(" "),t.comparisonName===t.referenceComparisonName?n("span",[t._v("\n    "+t._s(t.formatWithDefault(t.cellData.value.time))+"\n  ")]):n("span",[t._v("\n    "+t._s(t.formatWithDefault(t.cellData.value.time))+"\n    "),t.cellData.value.time&&t.cellData.value.delta?n("small",{class:t.cellData.value.isDeltaNegative?"text-green":"text-red"},[t._v("\n      ("+t._s(t.cellData.value.isDeltaNegative?"-":"+")+t._s(t.format(t.cellData.value.delta))+")\n    ")]):t._e()])],1)}),[],!1,null,"6ae3c450",null);e.default=component.exports}}]);