(window.webpackJsonp=window.webpackJsonp||[]).push([[16,24],{280:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},282:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return d}));n(11),n(163),n(15),n(127),n(290),n(291),n(292);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},d=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return l})),n.d(e,"a",(function(){return f})),n.d(e,"d",(function(){return h}));n(16),n(1),n(3),n(101),n(102);var r=n(280),o=n(282),c=n(285),d=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:d(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},f=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},h=function(t){r.a.state.splitFileIsModified=t,t?Object(c.b)():Object(c.c)()}},285:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return f}));var r=n(23),o=n(22),c=(n(1),function(t){t.preventDefault(),t.returnValue=""}),d=function(){window.addEventListener("beforeunload",c)},l=function(){window.removeEventListener("beforeunload",c)},f=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},287:function(t,e,n){var r=n(14),o=n(66),c=n(28),d=n(164),l=n(41),f=r(d),h=r("".slice),m=Math.ceil,v=function(t){return function(e,n,r){var d,v,O=c(l(e)),T=o(n),_=O.length,E=void 0===r?" ":c(r);return T<=_||""==E?O:((v=f(E,m((d=T-_)/E.length))).length>d&&(v=h(v,0,d)),t?O+v:v+O)}};t.exports={start:v(!1),end:v(!0)}},288:function(t,e,n){var r=n(55);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},290:function(t,e,n){var r=n(13),o=Math.ceil,c=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?c:o)(t)}})},291:function(t,e,n){"use strict";var r=n(13),o=n(287).start;r({target:"String",proto:!0,forced:n(288)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},292:function(t,e,n){"use strict";var r=n(13),o=n(287).end;r({target:"String",proto:!0,forced:n(288)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},295:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.PING=0]="PING",t[t.DELETE_ATTEMPT_BEFORE_NUMBER=1]="DELETE_ATTEMPT_BEFORE_NUMBER",t[t.SEG_TIME_ARRAY_TO_SECONDS=2]="SEG_TIME_ARRAY_TO_SECONDS",t[t.GOLD_COORDINATES_FROM_SECONDS_ARRAY=3]="GOLD_COORDINATES_FROM_SECONDS_ARRAY",t[t.XML_PARSE_TEXT=4]="XML_PARSE_TEXT",t[t.MERGE_SPLIT_INTO_NEXT_ONE=5]="MERGE_SPLIT_INTO_NEXT_ONE",t[t.UPDATE_STORE_DATA=6]="UPDATE_STORE_DATA",t[t.GET_PB=7]="GET_PB",t[t.GENERATE_SPLIT_DETAIL=8]="GENERATE_SPLIT_DETAIL",t[t.MOVE_TIME_TO_OTHER_SPLIT=9]="MOVE_TIME_TO_OTHER_SPLIT"}(r||(r={}))},296:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(1),n(37);var r=n(285),o=new function(){return new Worker(n.p+"71ba0db.worker.js")},c={};o.addEventListener("message",(function(t){var e=c[t.data.magic];e?(delete c[t.data.magic],e.resolve(t.data.message)):console.error("Got message from worker with no matching operation: ".concat(t.data.magic))}));var d=function(t){var e;do{e=btoa((1e10*Math.random()).toString())}while(c[e]);c[e]=new r.a;for(var n=arguments.length,d=new Array(n>1?n-1:0),l=1;l<n;l++)d[l-1]=arguments[l];return o.postMessage({message:{instruction:t,args:d},magic:e}),c[e].promise}},303:function(t,e,n){"use strict";n.r(e);n(162);var r=n(29),o=n(22),c=n(23),d=n(60),l=n(100),f=n(44),h=n(40),m=(n(6),n(1),n(11),n(26),n(128),n(81),n(16),n(2),n(15),n(67),n(49),n(279)),v=n(283),O=n(282),T=n(304),_=n(280),E=n(296),S=n(295);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var A=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},R=function(t){Object(d.a)(n,t);var e=y(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).collapseVisible=!1,t.timesSeconds=[],t.layout={},t.gold={x:0,y:0},t.formatTime=O.a,t}return Object(c.a)(n,[{key:"useRealTime",get:function(){return _.a.state.useRealTime}},{key:"updateLayout",value:function(){var t={title:"Time history",xaxis:{title:"Finished number (".concat(this.timesWithPositiveIds.length," total)")},yaxis:{title:"Time (seconds)",rangemode:this.graphYAxisToZero?"tozero":"nonnegative"},annotations:[{x:this.gold.x,y:this.gold.y,text:"Gold",font:{color:T.b},arrowhead:2,arrowsize:1,arrowwidth:2,arrowcolor:T.b,ax:0,ay:30}],shapes:[]},e=Object(v.c)(this.currentAttempt);this.graphCurrentAttemptHline&&this.currentAttemptNumber&&e&&t.shapes.push({type:"line",x0:0,y0:Object(O.d)(e),x1:this.timesSeconds.length-1,y1:Object(O.d)(e),line:{color:T.a,width:1,dash:"dot"}});var n=Object(v.c)(this.medianAttempt);this.graphMedianAttemptHline&&n&&t.shapes.push({type:"line",x0:0,y0:Object(O.d)(n),x1:this.timesSeconds.length-1,y1:Object(O.d)(n),line:{color:T.d,width:1,dash:"dot"}}),this.layout=t}},{key:"bestTimeDisplay",get:function(){return Object(O.a)(Object(v.c)(this.split.BestSegmentTime)||"")}},{key:"updateGold",value:function(t){var e=this;Object(E.a)(S.a.GOLD_COORDINATES_FROM_SECONDS_ARRAY,t).then((function(t){return e.gold=t}))}},{key:"currentAttempt",get:function(){var t=this;return this.timesWithPositiveIds.find((function(e){return e["@_id"]===t.currentAttemptNumber}))}},{key:"medianAttempt",get:function(){var t,e=Object(r.a)(this.timesSeconds).sort((function(a,b){return(a||0)-(b||0)})),n=Math.round(this.timesSeconds.length/2)-1;return null===(t=this.split.SegmentHistory)||void 0===t?void 0:t.Time.find((function(t){return Object(O.d)(Object(v.c)(t)||"0:0:0.0")===e[n]}))}},{key:"goldsMap",get:function(){var t=999999;return this.timesSeconds.map((function(e){return!!(e&&e<t)&&(t=e,!0)}))}},{key:"updateTimesSeconds",value:function(t){var e=this;Object(E.a)(S.a.SEG_TIME_ARRAY_TO_SECONDS,t).then((function(t){return e.timesSeconds=t}))}},{key:"updateTimesAfterUseRealTimeChange",value:function(){var t=this;this.$nextTick((function(){Object(E.a)(S.a.SEG_TIME_ARRAY_TO_SECONDS,t.timesWithPositiveIds).then((function(e){return t.timesSeconds=e}))}))}},{key:"collapseName",get:function(){return"collapse-subsplits-".concat(this.splitIndex)}},{key:"markerColors",get:function(){for(var t,e,n=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])?n.push(T.a):this.timesWithPositiveIds[i]["@_id"]==(null===(e=this.medianAttempt)||void 0===e?void 0:e["@_id"])?n.push(T.d):n.push(this.goldsMap[i]?T.b:T.c);return n}},{key:"markerSizes",get:function(){for(var t,e,n=[],i=0;i<this.timesWithPositiveIds.length;++i)this.timesWithPositiveIds[i]["@_id"]==(null===(t=this.currentAttempt)||void 0===t?void 0:t["@_id"])||this.timesWithPositiveIds[i]["@_id"]==(null===(e=this.medianAttempt)||void 0===e?void 0:e["@_id"])?n.push(6):n.push(this.goldsMap[i]?5:3);return n}},{key:"timesWithPositiveIds",get:function(){var t;return((null===(t=this.split.SegmentHistory)||void 0===t?void 0:t.Time)||[]).filter((function(t){return t["@_id"]>0}))}},{key:"plot_data",get:function(){var t=this.timesWithPositiveIds.map((function(t){var time=Object(v.c)(t);return time?"".concat(Object(O.a)(time)," (attempt ").concat(t["@_id"],")"):""}));return[{x:Array.from({length:this.timesWithPositiveIds.length},(function(t,e){return e})),y:this.timesSeconds,text:t,type:"scatter",hoverinfo:"text",mode:"lines+markers",marker:{color:this.markerColors,size:this.markerSizes},line:{color:T.c,width:1}}]}}]),n}(m.Vue);A([Object(m.Prop)()],R.prototype,"split",void 0),A([Object(m.Prop)({default:!1})],R.prototype,"graphYAxisToZero",void 0),A([Object(m.Prop)({default:!1})],R.prototype,"graphCurrentAttemptHline",void 0),A([Object(m.Prop)({default:!1})],R.prototype,"graphMedianAttemptHline",void 0),A([Object(m.Prop)()],R.prototype,"currentAttemptNumber",void 0),A([Object(m.Prop)()],R.prototype,"splitIndex",void 0),A([Object(m.Watch)("gold"),Object(m.Watch)("timesWithPositiveIds"),Object(m.Watch)("graphYAxisToZero"),Object(m.Watch)("graphCurrentAttemptHline"),Object(m.Watch)("graphMedianAttemptHline")],R.prototype,"updateLayout",null),A([Object(m.Watch)("timesSeconds",{immediate:!0})],R.prototype,"updateGold",null),A([Object(m.Watch)("timesWithPositiveIds",{immediate:!0})],R.prototype,"updateTimesSeconds",null),A([Object(m.Watch)("useRealTime")],R.prototype,"updateTimesAfterUseRealTimeChange",null);var j=R=A([m.Component],R),M=n(65),component=Object(M.a)(j,undefined,undefined,!1,null,null,null);e.default=component.exports},304:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"d",(function(){return d}));var r="#1f77b4",o="#ffc400",c="#2db41e",d="#141f85"}}]);