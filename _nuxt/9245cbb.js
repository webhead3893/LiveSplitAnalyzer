(window.webpackJsonp=window.webpackJsonp||[]).push([[16,29,42],{307:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l}));n(11),n(166),n(14),n(133),n(315),n(316),n(317);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},c=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],c="";return e&&(c+="".concat(e,"h")),n&&(c+="".concat(n,"m")),c+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},o=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),c=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(c.padEnd(7,"0"))}},308:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},310:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return m}));n(15),n(1),n(3),n(85),n(109);var r=n(308),c=n(307),o=n(314),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(c.d)(r)),n}))},f=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(o.c)():Object(o.d)()}},311:function(t,e,n){var r=n(13),c=n(66),o=n(30),l=n(167),d=n(42),f=r(l),m=r("".slice),v=Math.ceil,h=function(t){return function(e,n,r){var l,h,y=o(d(e)),_=c(n),j=y.length,O=void 0===r?" ":o(r);return _<=j||""==O?y:((h=f(O,v((l=_-j)/O.length))).length>l&&(h=m(h,0,l)),t?y+h:h+y)}};t.exports={start:h(!1),end:h(!0)}},312:function(t,e,n){var r=n(56);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},314:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"a",(function(){return m}));var r=n(24),c=n(23),o=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},d=function(){window.addEventListener("beforeunload",l)},f=function(){window.removeEventListener("beforeunload",l)},m=Object(r.a)((function t(){var e=this;Object(c.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},315:function(t,e,n){n(9)({target:"Math",stat:!0},{trunc:n(230)})},316:function(t,e,n){"use strict";var r=n(9),c=n(311).start;r({target:"String",proto:!0,forced:n(312)},{padStart:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},317:function(t,e,n){"use strict";var r=n(9),c=n(311).end;r({target:"String",proto:!0,forced:n(312)},{padEnd:function(t){return c(this,t,arguments.length>1?arguments[1]:void 0)}})},341:function(t,e,n){var content=n(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("2db22843",content,!0,{sourceMap:!1})},357:function(t,e,n){"use strict";n(341)},358:function(t,e,n){var r=n(83)(!1);r.push([t.i,"*[data-v-234eded7]{color:#000}.attempt-icon-container[data-v-234eded7]{min-width:6.5rem;text-align:center;display:flex;justify-content:center;align-items:center}.attempt-icon-container .attempt-icon[data-v-234eded7]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:5rem;width:auto;height:auto;opacity:1}.attempt-icon-container .attempt-icon-reset[data-v-234eded7]{filter:grayscale(100%) drop-shadow(0 0 .5rem rgb(0,0,0));opacity:.8}.attempt-icon-container .attempt-icon-PB[data-v-234eded7]{filter:drop-shadow(0 0 .6rem #ffc400)}.limit-height[data-v-234eded7]{display:flex}.toggle-collapse[data-v-234eded7]{position:absolute;top:1rem;right:1rem}img[data-v-234eded7]{filter:drop-shadow(0 0 .5rem rgb(0,0,0))}",""]),t.exports=r},367:function(t,e,n){"use strict";n.r(e);n(165);var r=n(33),c=n(23),o=n(24),l=n(60),d=n(108),f=n(46),m=n(41),v=(n(6),n(1),n(11),n(166),n(14),n(18),n(25),n(134),n(306)),h=n(310),y=n(307);function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,c)}else n=r.apply(this,arguments);return Object(d.a)(this,n)}}var j=function(t,e,n,desc){var r,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(o=(c<3?r(o):c>3?r(e,n,o):r(e,n))||o);return c>3&&o&&Object.defineProperty(e,n,o),o},O=["January","February","March","April","May","June","July","August","September","October","November","December"],S=function(t){Object(l.a)(n,t);var e=_(n);function n(){var t;return Object(c.a)(this,n),(t=e.apply(this,arguments)).collapseVisible=!1,t}return Object(o.a)(n,[{key:"nth",value:function(t){if(t>3&&t<21)return"th";switch(t%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}}},{key:"formattedDate",get:function(){var t,e,n,c,o,l=this.attempt["@_started"].match(/(\d+)\/(\d+)\/(\d+) (\d+):(\d+):(\d+)/);if(!l)return"";var d=l.slice(1),f=Object(r.a)(d,6);return t=f[0],e=f[1],n=f[2],c=f[3],o=f[4],f[5],e=parseInt(e),["".concat(e),this.nth(e),"".concat(O[parseInt(t)-1]," ").concat(n," at ").concat(parseInt(c),"h").concat(o)]}},{key:"collapseName",get:function(){return"collapse-attempt-".concat(this.attempt["@_id"])}},{key:"timeInfo",get:function(){return this.attempt.RealTime?"Finished run ".concat(this.isPB?"(PB)":""):this.lastSplit?"Reset in ".concat(this.lastSplit.name," (").concat(this.lastSplit.index,")"):"Reset"}},{key:"attemptIconClass",get:function(){var t=["attempt-icon"];return t.push(this.attempt.RealTime?"attempt-icon-finished":"attempt-icon-reset"),this.isPB&&t.push("attempt-icon-PB"),t}},{key:"lastFinishedSplit",get:function(){var t,e=null===(t=this.lastSplit)||void 0===t?void 0:t.index;return e?"".concat(this.segments[e-1].Name," (").concat(e-1,")"):null}},{key:"paceText",get:function(){return this.attempt.RealTime?"Final time":"Pace at ".concat(this.lastFinishedSplit)}},{key:"lastPace",get:function(){var t=this;return this.collapseVisible?Object(y.b)(this.segments.reduce((function(e,n){var r,c=null===(r=n.SegmentHistory)||void 0===r?void 0:r.Time.find((function(time){return time["@_id"]===t.attempt["@_id"]}));return c?e+Object(y.d)(Object(h.c)(c)||"0:0:0.0"):e}),0)):""}},{key:"isPB",get:function(){var time=Object(h.c)(this.attempt);return time&&Object(y.d)(time)===this.pb}}]),n}(v.Vue);j([Object(v.Prop)()],S.prototype,"attempt",void 0),j([Object(v.Prop)({default:""})],S.prototype,"gameCover",void 0),j([Object(v.Prop)()],S.prototype,"lastSplit",void 0),j([Object(v.Prop)()],S.prototype,"segments",void 0),j([Object(v.Prop)()],S.prototype,"pb",void 0);var x=S=j([v.Component],S),w=(n(357),n(65)),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-card",{staticClass:"AttemptDetailCard text-left mb-3",attrs:{id:"SingleSplitCard_".concat(t.attempt["@_id"])}},[e("div",{staticClass:"limit-height"},[t.gameCover.length?e("div",{staticClass:"attempt-icon-container mr-3"},[e("b-card-img",{class:t.attemptIconClass,attrs:{src:t.gameCover,block:""}})],1):t._e(),t._v(" "),e("div",{staticClass:"mt-auto mb-auto"},[e("h3",[t._v("\n        Attempt #"+t._s(t.attempt["@_id"])+"\n      ")]),t._v(" "),e("p",{staticClass:"m-0"},[e("span",{staticClass:"mr-2"},[e("strong",[t._v("Date:")]),t._v(" "+t._s(t.formattedDate[0])),e("sup",[t._v(t._s(t.formattedDate[1]))]),t._v(" "+t._s(t.formattedDate[2])+"\n        ")])]),t._v(" "),e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.collapseVisible?270:null}})],1)],1)]),t._v(" "),e("b-collapse",{staticClass:"pt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[e("hr",{staticClass:"mb-3"}),t._v(" "),e("p",{staticClass:"mb-0"},[e("strong",[t._v("Status:")]),t._v(" "+t._s(t.timeInfo)+"\n    ")]),t._v(" "),t.lastFinishedSplit?e("p",{staticClass:"mb-0"},[e("strong",[t._v(t._s(t.paceText)+":")]),t._v(" "+t._s(t.lastPace)+"\n    ")]):t._e()])],1)}),[],!1,null,"234eded7",null);e.default=component.exports}}]);