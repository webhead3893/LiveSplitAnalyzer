(window.webpackJsonp=window.webpackJsonp||[]).push([[38,21],{306:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(166),n(14),n(132),n(315),n(316),n(317);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},307:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},309:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return v}));n(15),n(1),n(3),n(85),n(109);var r=n(307),o=n(306),c=n(312),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},v=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},312:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return v}));var r=n(24),o=n(23),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},v=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},314:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(24),c=n(60),l=n(108),f=n(46),d=n(41),v=(n(6),n(1),n(165),n(305));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var h=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},y=function(t){Object(c.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).visible=!1,t.id="collapse-xxxx",t}return Object(o.a)(n,[{key:"created",value:function(){this.visible=this.startsOpen}},{key:"mounted",value:function(){this.id="collapse-".concat(Math.floor(1e4*Math.random()))}}]),n}(v.Vue);h([Object(v.Prop)()],y.prototype,"title",void 0),h([Object(v.Prop)({default:!1})],y.prototype,"startsOpen",void 0),h([Object(v.Prop)({default:!0})],y.prototype,"lazy",void 0);var O=y=h([v.Component],y),j=(n(322),n(65)),component=Object(j.a)(O,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-card",{staticClass:"mb-4",attrs:{title:t.title}},[e("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.id,expression:"id"}],staticClass:"toggle-collapse",attrs:{variant:"outline-secondary",pill:""}},[e("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:t.visible?270:null}})],1),t._v(" "),e("b-collapse",{attrs:{id:t.id},model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[t.visible||!t.lazy?e("div",[t._t("default")],2):t._e()])],1)}),[],!1,null,"e584f7b2",null);e.default=component.exports},318:function(t,e,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("ce2d0098",content,!0,{sourceMap:!1})},322:function(t,e,n){"use strict";n(318)},323:function(t,e,n){var r=n(83)(!1);r.push([t.i,"*[data-v-e584f7b2]{color:#000}.toggle-collapse[data-v-e584f7b2]{position:absolute;right:1rem;top:1rem}",""]),t.exports=r},369:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("fbbf3fce",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";n(369)},389:function(t,e,n){var r=n(83)(!1);r.push([t.i,".icon[data-v-ed9dcab6]{max-height:20vh;filter:drop-shadow(0 0 .5rem rgb(0,0,0))}",""]),t.exports=r},402:function(t,e,n){"use strict";n.r(e);n(132),n(165);var r=n(23),o=n(24),c=n(60),l=n(108),f=n(46),d=n(41),v=(n(6),n(1),n(2),n(305)),m=n(309),h=n(306),y=(n(341),n(342),n(343),n(344),n(345),n(346),n(347),n(348),n(349),n(350),n(351),n(352),n(353),n(354),n(355),n(356),n(357),n(358),n(359),n(360),n(361),n(362),n(363),n(364),n(365),n(14),n(18),n(412),function(t,e){return t&1<<e?1:0}),O=function(){function t(e){Object(r.a)(this,t),this.base64Image=null,this.mimeType=null;for(var n=atob(e),o=n.length,data=new Uint8Array(o),c=0;c<o;c++)data[c]=n.charCodeAt(c);(this.base64Image=function(data){var i,t=new Uint8Array([137,80,78,71,13,10,26,10]),e=0,n=0,r=!1;for(i=0;i<data.length&&(data[i]==t[e]?(0==e&&(n=i),e==t.length-1?r=!0:e++):e=0,!r);++i);if(!r)return null;for(;;){i+=4;var o=new Uint8Array([data[i],data[i-1],data[i-2],data[i-3]]),c=new Uint32Array(o.buffer,0,1)[0];i+=4,o=new Uint8Array([data[i-3],data[i-2],data[i-1],data[i]]);var l=(new TextDecoder).decode(o);if(i+=c,(i+=4)>data.length)return null;if("IEND"==l)break}return data.slice(n,i)}(data))?this.mimeType="image/png":(this.base64Image=function(data){var i,t=new Uint8Array([71,73,70,56]),e=0,n=0,r=!1;for(i=0;i<data.length;++i){if(data[i]==t[e])if(0==e&&(n=i),e==t.length-1){if(55!=data[i+1]&&57!=data[i+1]||97!=data[i+2]){e=0;continue}r=!0}else e++;else e=0;if(r)break}if(!r)return null;i+=3;var o=128&data[i+=4],c=4*y(data[i],2)+2*y(data[i],1)+y(data[i],0);for(i+=3,o&&(i+=3*Math.round(Math.pow(2,c+1)));i<data.length;)switch(data[i]){case 59:return data.slice(n,i);case 33:i+=2;do{i+=data[i]+1}while(0!=data[i]&&i<data.length);++i;break;case 44:var l=128&data[i+=9],f=4*y(data[i],2)+2*y(data[i],1)+y(data[i],0);++i,l&&(i+=3*Math.round(Math.pow(2,f+1))),++i;do{i+=data[i]+1}while(0!=data[i]);++i;break;default:return null}return null}(data))?this.mimeType="image/gif":(this.base64Image=function(data){for(var t=0,e=!1,i=0;i<data.length-1;)if(255==data[i++]&&216==data[i++]){e=!0,t=i-2;break}if(!e)return null;for(;i<data.length-1;)if(255==data[i++]&&217==data[i++])return data.slice(t,i);return null}(data))&&(this.mimeType="image/jpeg")}return Object(o.a)(t,[{key:"imgSrc",get:function(){return this.base64Image?"data:".concat(this.mimeType,";base64,").concat(btoa(new Uint8Array(this.base64Image).reduce((function(data,t){return data+String.fromCharCode(t)}),""))):""}}]),t}();function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var _=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},w=function(t){Object(c.a)(n,t);var e=j(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).gameCover="",t.visible=!0,t}return Object(o.a)(n,[{key:"finishedRuns",get:function(){return this.run.AttemptHistory.Attempt.filter((function(a){return Object(m.c)(a)})).length}},{key:"PBs",get:function(){var t=999999;return this.run.AttemptHistory.Attempt.filter((function(a){var e=Object(m.c)(a);if(!e)return!1;var time=Object(h.d)(e);return!!(time&&time<t)&&(t=time,!0)}))}},{key:"runMetadata",get:function(){var t;return null===(t=this.run.Metadata.Variables)||void 0===t?void 0:t.Variable}},{key:"coverSource",value:function(){var t=this;if(this.gameCover="",this.run.GameIcon&&(this.gameCover=new O(this.run.GameIcon).imgSrc),!this.gameCover){var e="https://www.speedrun.com/api/v1/games?name=".concat(encodeURIComponent(this.run.GameName));fetch(e).then((function(t){if(!t.ok)throw Error();return t.json()})).then((function(data){if(0==data.data.length)throw Error();t.gameCover=data.data[0].assets["cover-small"].uri})).catch((function(){return t.gameCover=""}))}}}]),n}(v.Vue);_([Object(v.Prop)()],w.prototype,"run",void 0),_([Object(v.Watch)("run.GameName",{immediate:!0}),Object(v.Watch)("run.GameIcon")],w.prototype,"coverSource",null);var C=w=_([v.Component],w),R=(n(388),n(65)),component=Object(R.a)(C,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("collapsible-card",{staticClass:"text-center",attrs:{id:"RunOverviewCard",title:t.run.GameName+" - "+t.run.CategoryName,"starts-open":""}},[t.gameCover?e("img",{staticClass:"icon mt-1 mb-3",attrs:{src:t.gameCover,alt:t.run.GameName}}):t._e(),t._v(" "),e("p",[t._v(t._s(t.run.AttemptCount)+" attempts")]),t._v(" "),e("p",{staticClass:"m-0"},[e("strong",[t._v("Finished runs:")]),t._v(" "+t._s(t.finishedRuns))]),t._v(" "),e("p",{staticClass:"m-0"},[e("strong",[t._v("Number of PBs:")]),t._v(" "+t._s(t.PBs.length))]),t._v(" "),e("p",{staticClass:"m-0"},[e("strong",[t._v("Reset rate:")]),t._v("\n      "+t._s((100-t.finishedRuns/t.run.AttemptCount*100).toFixed(1))+"%\n    ")]),t._v(" "),t._l(t.runMetadata,(function(n){return n?e("p",{staticClass:"m-0"},[e("strong",[t._v(t._s(n["@_name"])+":")]),t._v(" "+t._s(n["#text"])+"\n    ")]):t._e()}))],2)}),[],!1,null,"ed9dcab6",null);e.default=component.exports;installComponents(component,{CollapsibleCard:n(314).default})}}]);