(window.webpackJsonp=window.webpackJsonp||[]).push([[19,11],{280:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(164),n(15),n(128);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="";t+="".concat(Math.floor(time/3600),":"),time%=3600;var e=Math.floor(time/60);return t+="".concat(e<10?"0":"").concat(e,":"),t+="".concat((time%=60)<10?"0":"").concat(Math.abs(+time.toFixed(6)))}},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));var r=function(input){return null==input?[]:Array.isArray(input)?input:[input]},o=function(t){t.preventDefault(),t.returnValue=""},c=function(){window.addEventListener("beforeunload",o)},l=function(){window.removeEventListener("beforeunload",o)}},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return v}));n(16),n(1),n(3),n(101),n(102);var r=n(285),o=n(280),c=n(281),l=function(t){return!r.a.state.useRealTime&&(null==t?void 0:t.GameTime)?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.Segment.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.Segment.reduce((function(t,e){return Object(c.a)(e.SplitTimes.SplitTime).forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},v=function(t){r.a.state.splitFileIsModified=t,t?Object(c.b)():Object(c.c)()}},285:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFile:{},splitFileIsModified:!1});e.a={get state(){return r}}},287:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),v=(n(6),n(1),n(163),n(279));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},O=function(t){Object(c.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!0,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(v.Vue);h([Object(v.Prop)()],O.prototype,"title",void 0),h([Object(v.Prop)({default:!1})],O.prototype,"startsOpen",void 0);var y=O=h([v.Component],O),j=(n(291),n(65)),component=Object(j.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[n("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[n("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),n("b-collapse",{attrs:{id:t.id,visible:""},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t._t("default")],2)],1)}),[],!1,null,"f2e97700",null);e.default=component.exports},288:function(t,e,n){var content=n(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("08b1a062",content,!0,{sourceMap:!1})},291:function(t,e,n){"use strict";n(288)},292:function(t,e,n){var r=n(79)(!1);r.push([t.i,"*[data-v-f2e97700]{color:#000}.toggle-collapse[data-v-f2e97700]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},327:function(t,e,n){"use strict";n.r(e);n(163);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),v=(n(6),n(1),n(2),n(279)),m=n(283),h=n(280),O=n(281);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},_=function(t){Object(c.a)(n,t);var e=y(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!0,t}return Object(o.a)(n,[{key:"finishedRuns",get:function(){return Object(O.a)(this.run.AttemptHistory.Attempt).filter((function(a){return Object(m.c)(a)})).length}},{key:"PBs",get:function(){var t=999999;return Object(O.a)(this.run.AttemptHistory.Attempt).filter((function(a){var e=Object(m.c)(a);if(!e)return!1;var time=Object(h.d)(e);return!!(time&&time<t)&&(t=time,!0)}))}},{key:"runMetadata",get:function(){var t;return Object(O.a)(null===(t=this.run.Metadata.Variables)||void 0===t?void 0:t.Variable)}}]),n}(v.Vue);j([Object(v.Prop)()],_.prototype,"run",void 0);var R=_=j([v.Component],_),x=n(65),component=Object(x.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("collapsible-card",{staticClass:"text-center",attrs:{title:t.run.GameName+" - "+t.run.CategoryName,"starts-open":""}},[n("p",[t._v(t._s(t.run.AttemptCount)+" attempts")]),t._v(" "),n("p",{staticClass:"m-0"},[n("strong",[t._v("Finished runs:")]),t._v(" "+t._s(t.finishedRuns))]),t._v(" "),n("p",{staticClass:"m-0"},[n("strong",[t._v("Number of PBs:")]),t._v(" "+t._s(t.PBs.length))]),t._v(" "),n("p",{staticClass:"m-0"},[n("strong",[t._v("Reset rate:")]),t._v("\n    "+t._s((100-t.finishedRuns/t.run.AttemptCount*100).toFixed(1))+"%\n  ")]),t._v(" "),t._l(t.runMetadata,(function(e){return e?n("p",{staticClass:"m-0"},[n("strong",[t._v(t._s(e["@_name"])+":")]),t._v(" "+t._s(e["#text"])+"\n  ")]):t._e()}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(287).default})}}]);