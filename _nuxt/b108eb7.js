(window.webpackJsonp=window.webpackJsonp||[]).push([[34,31,47,52],{307:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(166),n(14),n(133),n(315),n(316),n(317);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},308:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null,filters:[],filteredAttempts:[]});e.a={get state(){return r}}},309:function(t,e,n){var r=n(13),o=n(66),c=n(29),l=n(167),f=n(42),d=r(l),m=r("".slice),v=Math.ceil,h=function(t){return function(e,n,r){var l,h,y=c(f(e)),x=o(n),M=y.length,O=void 0===r?" ":c(r);return x<=M||""==O?y:((h=d(O,v((l=x-M)/O.length))).length>l&&(h=m(h,0,l)),t?y+h:h+y)}};t.exports={start:h(!1),end:h(!0)}},310:function(t,e,n){var r=n(56);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},312:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return m}));n(15),n(1),n(3),n(85),n(109);var r=n(308),o=n(307),c=n(313),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},m=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},313:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return m}));var r=n(24),o=n(23),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},m=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},315:function(t,e,n){n(9)({target:"Math",stat:!0},{trunc:n(230)})},316:function(t,e,n){"use strict";var r=n(9),o=n(309).start;r({target:"String",proto:!0,forced:n(310)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},317:function(t,e,n){"use strict";var r=n(9),o=n(309).end;r({target:"String",proto:!0,forced:n(310)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},323:function(t,e,n){var content=n(332);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("5d14c375",content,!0,{sourceMap:!1})},328:function(t,e,n){"use strict";n.r(e);n(165);var r=n(23),o=n(24),c=n(60),l=n(108),f=n(46),d=n(41),m=(n(6),n(1),n(133),n(231),n(306));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=v(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).hours=0,t.minutes=0,t.seconds=0,t}return Object(o.a)(n,[{key:"outputInSeconds",get:function(){return 3600*this.hours+60*this.minutes+this.seconds}},{key:"onInputChange",value:function(){this.$emit("input",this.outputInSeconds)}},{key:"mounted",value:function(){var time=this.value;time>3600&&(this.hours=Math.floor(time/3600),time%=3600),time>60&&(this.minutes=Math.floor(time/60),time%=60),this.seconds=+time.toFixed(2)}}]),n}(m.Vue);h([Object(m.Prop)({type:Number})],y.prototype,"value",void 0),h([Object(m.Watch)("outputInSeconds")],y.prototype,"onInputChange",null);var x=y=h([m.Component],y),M=(n(331),n(65)),component=Object(M.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-form",{staticClass:"time-form",attrs:{inline:""}},[e("b-row",[e("b-col",{staticClass:"column",attrs:{cols:"4"}},[e("b-input-group",{attrs:{append:"h"}},[e("b-form-input",{attrs:{placeholder:"Hours",type:"number",step:"1",debounce:"500"},model:{value:t.hours,callback:function(e){t.hours=t._n(e)},expression:"hours"}})],1)],1),t._v(" "),e("b-col",{staticClass:"column",attrs:{cols:"4"}},[e("b-input-group",{attrs:{append:"m"}},[e("b-form-input",{attrs:{placeholder:"Minutes",type:"number",step:"1",debounce:"500"},model:{value:t.minutes,callback:function(e){t.minutes=t._n(e)},expression:"minutes"}})],1)],1),t._v(" "),e("b-col",{staticClass:"column",attrs:{cols:"4"}},[e("b-input-group",{attrs:{append:"s"}},[e("b-form-input",{attrs:{placeholder:"Seconds",type:"number",step:"0.01",debounce:"500"},model:{value:t.seconds,callback:function(e){t.seconds=t._n(e)},expression:"seconds"}})],1)],1)],1)],1)}),[],!1,null,"fafb75a0",null);e.default=component.exports},331:function(t,e,n){"use strict";n(323)},332:function(t,e,n){var r=n(83)(!1);r.push([t.i,".column[data-v-fafb75a0]{padding-left:.25rem;padding-right:.25rem}.time-form[data-v-fafb75a0]{padding-left:1rem;padding-right:1rem}",""]),t.exports=r},346:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));var r=-1,o=-2},397:function(t,e,n){"use strict";n.r(e);n(165);var r=n(23),o=n(24),c=n(60),l=n(108),f=n(46),d=n(41),m=(n(6),n(1),n(3),n(306)),v=n(312),h=n(307),filter=n(346),y=n(308),x=n(333),M=n.n(x);function O(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var j=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},S=function(t){Object(c.a)(n,t);var e=O(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).globalFilters=y.a.state.filters,t.filterData={details:{label:"",index:filter.a},timeMin:0,timeMax:0,attempts:[]},t}return Object(o.a)(n,[{key:"filterLabels",get:function(){var t=[{index:filter.b,label:"Global"}];return this.parsedSplits.Run.Segments.Segment.forEach((function(e,n){return t.push({index:n,label:e.Name})})),t}},{key:"formError",get:function(){var t,e;return(null===(t=this.filterData.details)||void 0===t?void 0:t.index)==filter.a||null==(null===(e=this.filterData.details)||void 0===e?void 0:e.index)?"You need to select a split.":this.filterData.timeMin==this.filterData.timeMax?"You need to select a time range.":""}},{key:"filterListSelect",get:function(){var t,e,n=null===(t=this.filterData.details)||void 0===t?void 0:t.index,r=this.parsedSplits.Run.AttemptHistory.Attempt;if(null==n)return[];if(n==filter.b)return this.filterList(r);if(n>filter.b){var o=null===(e=this.parsedSplits.Run.Segments.Segment[n].SegmentHistory)||void 0===e?void 0:e.Time;if(o)return this.filterList(o)}return[]}},{key:"filterList",value:function(t){var e=[],n=this.filterData.timeMin,r=this.filterData.timeMax;return t.forEach((function(t){var time=Object(v.c)(t);if(null!=time){var o=Object(h.d)(time);o>n&&o<r&&t["@_id"]>0&&e.push(t["@_id"])}})),e}},{key:"activateFilter",value:function(){if(this.filterData.timeMin>this.filterData.timeMax){var t=[this.filterData.timeMax,this.filterData.timeMin];this.filterData.timeMin=t[0],this.filterData.timeMax=t[1]}this.filterData.attempts=this.filterListSelect,this.globalFilters.push(this.filterData),this.filterData={details:{label:"",index:filter.a},timeMin:0,timeMax:0,attempts:[]}}}]),n}(m.Vue);j([Object(m.Prop)()],S.prototype,"parsedSplits",void 0);var _=S=j([Object(m.Component)({components:{Multiselect:M.a}})],S),D=n(65),component=Object(D.a)(_,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"text-center"},[e("b-row",{staticClass:"mb-3"},[e("b-col",{staticClass:"mt-2",attrs:{cols:"3"}},[t._v("\n      Only display runs with a\n    ")]),t._v(" "),e("b-col",{attrs:{cols:"7"}},[e("multiselect",{attrs:{options:t.filterLabels,"track-by":"index",label:"label"},model:{value:t.filterData.details,callback:function(e){t.$set(t.filterData,"details",e)},expression:"filterData.details"}})],1),t._v(" "),e("b-col",{staticClass:"mt-2",attrs:{cols:"2"}},[t._v("\n      time between\n    ")])],1),t._v(" "),e("b-row",{staticClass:"mt-3"},[e("b-col",{attrs:{cols:"5"}},[e("time-selector",{model:{value:t.filterData.timeMin,callback:function(e){t.$set(t.filterData,"timeMin",t._n(e))},expression:"filterData.timeMin"}})],1),t._v(" "),e("b-col",{staticClass:"mt-2",attrs:{cols:"2"}},[t._v("\n      and\n    ")]),t._v(" "),e("b-col",{attrs:{cols:"5"}},[e("time-selector",{model:{value:t.filterData.timeMax,callback:function(e){t.$set(t.filterData,"timeMax",t._n(e))},expression:"filterData.timeMax"}})],1)],1),t._v(" "),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{title:t.formError}},[e("b-button",{staticClass:"mt-2",attrs:{variant:"success",disabled:""!==t.formError},on:{click:t.activateFilter}},[t._v("\n      Add filter\n    ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TimeSelector:n(328).default})}}]);