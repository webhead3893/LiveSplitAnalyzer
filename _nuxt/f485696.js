(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6],{276:function(t,e,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("ca3c6348",content,!0,{sourceMap:!1})},303:function(t,e,r){"use strict";r(276)},304:function(t,e,r){var n=r(79)(!1);n.push([t.i,"*[data-v-373682d7]{color:#000}img[data-v-373682d7]{filter:drop-shadow(0 0 .5rem black)}.limit-height[data-v-373682d7]{max-height:4rem;display:flex}.split-icon[data-v-373682d7]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:256px;width:auto;height:auto}",""]),t.exports=n},306:function(t,e,r){"use strict";r.r(e);r(159);var n=r(24),o=r(25),l=r(62),c=r(99),f=r(46),d=r(42),h=(r(6),r(1),r(11),r(27),r(16),r(160),r(65),r(48),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(277)),m=(r(307),r(15),r(18),r(308)),v=r.n(m),y=r(309);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var _=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},O=function(t){Object(l.a)(r,t);var e=x(r);function r(){var t;return Object(n.a)(this,r),(t=e.call(this)).collapseVisible=!1,t.renderGraph=!0,t.layout=function(){return{title:"Time history",xaxis:{title:"Attempt number"},yaxis:{title:"Time (seconds)",rangemode:t.graphYAxisToZero?"tozero":"nonnegative"}}},t}return Object(o.a)(r,[{key:"collapseName",get:function(){return"collapse-"+v()(this.split.Name)}},{key:"onGraphYAxisToZeroChange",value:function(){var t=this;this.renderGraph=!1,this.$nextTick((function(){t.renderGraph=!0}))}},{key:"plot_data",value:function(){var t=this.split.SegmentHistory.Time.map((function(t){if("string"!=typeof t&&t.GameTime){var time=t.GameTime.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!time)return"";var e=+time[1],r=+time[2];return+time[3]+60*r+3600*e}return null})),e=this.split.SegmentHistory.Time.map((function(t){return"string"!=typeof t&&t.GameTime?t.GameTime:null}));return[{x:Array.from({length:this.split.SegmentHistory.Time.length},(function(t,e){return e})),y:t,text:e,type:"scatter",hoverinfo:"text",mode:"lines+markers",marker:{size:4},line:{width:1}}]}},{key:"srcFormattedIcon",value:function(t){var e=function(t){for(var e=atob(t),r=e.length,data=new Uint8Array(r),n=0;n<r;n++)data[n]=e.charCodeAt(n);var i,o=new Uint8Array([137,80,78,71,13,10,26,10]),l=(new Uint8Array([0,0,0,0,73,69,78,68]),0),c=0,f=!1;for(i=0;i<data.length&&(data[i]==o[l]?(0==l&&(c=i),l==o.length-1?(f=!0,console.log("Found beginning of PNG file at position "+c)):l++):l=0,!f);++i);if(!f)return console.error("No PNG file in input data"),null;for(;;){i+=4;var d=new Uint8Array([data[i],data[i-1],data[i-2],data[i-3]]),h=new Uint32Array(d.buffer,0,1)[0];i+=4,d=new Uint8Array([data[i-3],data[i-2],data[i-1],data[i]]);var m=(new TextDecoder).decode(d);if(console.log("Got chunk ".concat(m," of size ").concat(h)),i+=h,(i+=4)>data.length)return console.error("OOB"),null;if("IEND"==m)break}return data.slice(c,i)}(t.Icon);return e?"data:image/jpeg;base64,"+btoa(new Uint8Array(e).reduce((function(data,t){return data+String.fromCharCode(t)}),"")):null}},{key:"formatTime",value:function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],r=+t[2],n=+t[3],o="";return e&&(o+="".concat(e,"h")),r&&(o+="".concat(r,"m")),o+="".concat(n,"s")}}]),r}(h.Vue);_([Object(h.Prop)()],O.prototype,"split",void 0),_([Object(h.Prop)()],O.prototype,"graphYAxisToZero",void 0),_([Object(h.Watch)("graphYAxisToZero")],O.prototype,"onGraphYAxisToZeroChange",null);var j=O=_([Object(h.Component)({components:{Plotly:y.Plotly}})],O),k=(r(303),r(67)),component=Object(k.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-card",{staticClass:"text-left"},[r("div",{staticClass:"limit-height"},[r("b-card-img",{staticClass:"split-icon mr-4",attrs:{src:t.srcFormattedIcon(t.split),block:""}}),t._v(" "),r("div",{staticClass:"mt-auto mb-auto"},[r("h3",[t._v("\n          "+t._s(t.split.Name)+"\n        ")]),t._v(" "),t.split.BestSegmentTime?r("p",[r("strong",[t._v("Best time:")]),t._v(" "+t._s(t.formatTime(t.split.BestSegmentTime.GameTime))+" (game time) ;\n          "+t._s(t.formatTime(t.split.BestSegmentTime.RealTime))+" (real time)\n        ")]):t._e(),t._v(" "),r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:t.collapseName,expression:"collapseName"}],staticStyle:{position:"absolute",top:"1rem",right:"1rem"},attrs:{variant:"outline-dark"}},[t._v("\n          "+t._s(t.collapseVisible?"Close":"Time detail")+"\n        ")])],1)],1)]),t._v(" "),r("b-collapse",{staticClass:"mt-1",attrs:{id:t.collapseName},model:{value:t.collapseVisible,callback:function(e){t.collapseVisible=e},expression:"collapseVisible"}},[r("b-card",{staticClass:"text-left"},[t.renderGraph?r("Plotly",{attrs:{data:t.plot_data(),layout:t.layout(),"display-mode-bar":!0}}):t._e()],1)],1)],1)}),[],!1,null,"373682d7",null);e.default=component.exports},310:function(t,e,r){var content=r(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(80).default)("2b8722ea",content,!0,{sourceMap:!1})},320:function(t,e,r){"use strict";r.r(e);var n=r(24),o=r(25),l=r(62),c=r(99),f=r(46),d=r(42),h=(r(6),r(1),r(159),r(311)),m=r(277);function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},x=function(t){Object(l.a)(r,t);var e=v(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).xmlParser=new h.XMLParser,t.splitFile="",t.graphYAxisToZero=!0,t}return Object(o.a)(r,[{key:"parsedSplits",get:function(){return this.xmlParser.parse(this.splitFile)}},{key:"splits",get:function(){return this.parsedSplits.Run.Segments.Segment}},{key:"fileChange",value:function(t){var e=this,r=t.target.files[0],n=new FileReader;n.onload=function(t){t.target?e.splitFile=t.target.result:console.error("FileReader error")},n.readAsText(r)}}]),r}(m.Vue),_=x=y([m.Component],x),O=r(67),component=Object(O.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-3"},[r("b-form-file",{staticClass:"mb-3",attrs:{accept:".lss",placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},on:{change:t.fileChange}}),t._v(" "),r("b-form-checkbox",{staticClass:"mb-3",attrs:{name:"check-button",switch:""},model:{value:t.graphYAxisToZero,callback:function(e){t.graphYAxisToZero=e},expression:"graphYAxisToZero"}},[t._v("\n    Graphs' Y axis starts at zero\n  ")]),t._v(" "),t.splitFile.length?r("div",t._l(t.splits,(function(e){return r("split-display",{key:e.Name,staticClass:"mb-3",attrs:{split:e,graphYAxisToZero:t.graphYAxisToZero}})})),1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SplitDisplay:r(306).default})},323:function(t,e,r){"use strict";r(310)},324:function(t,e,r){var n=r(79)(!1);n.push([t.i,"main[data-v-4c8426b7]{min-height:calc(100vh - 4rem)}footer[data-v-4c8426b7]{opacity:.75;font-weight:300}.username-gradient[data-v-4c8426b7]{background-clip:text;background-size:100%;background-repeat:no-repeat;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-decoration:none!important}.username-gradient[data-v-4c8426b7]:hover{text-decoration:underline!important}",""]),t.exports=n},345:function(t,e,r){"use strict";r.r(e);var n=r(25),o=r(24),l=r(62),c=r(99),f=r(46),d=r(42),h=(r(6),r(1),r(159),r(277));function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var v=function(t,e,r,desc){var n,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(l=(o<3?n(l):o>3?n(e,r,l):n(e,r))||l);return o>3&&l&&Object.defineProperty(e,r,l),l},y=function(t){Object(l.a)(r,t);var e=m(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r)}(h.Vue),x=y=v([h.Component],y),_=(r(323),r(67)),component=Object(_.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"text-center"},[r("main",[r("h1",{staticClass:"mt-4"},[t._v("LiveSplit Analyzer")]),t._v(" "),r("p",[t._v("For now this only extracts PNG icons and best times from splits, but hopefully in the future it does more")]),t._v(" "),r("b-row",[r("b-col",{attrs:{cols:"12",xl:"6","offset-xl":"3",lg:"10","offset-lg":"1"}},[r("SplitsDisplay")],1)],1)],1),t._v(" "),t._m(0)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[t._v("\n    This LiveSplit Analyzer is a tool made by\n    "),r("a",{staticClass:"font-weight-normal",attrs:{href:"https://speedrun.com/user/Webcretaire",target:"_blank"}},[r("span",{staticClass:"username"},[r("span",{staticClass:"username-dark username-gradient",staticStyle:{color:"#09B876","background-image":"linear-gradient(90deg, #09B876, #8AC951)"}},[t._v("Webcretaire")])])]),t._v(". It's source code is available on\n    "),r("a",{staticClass:"text-white font-weight-normal",attrs:{href:"https://github.com/Webcretaire/LiveSplitAnalyzer",target:"_blank"}},[t._v("GitHub")])])}],!1,null,"4c8426b7",null);e.default=component.exports;installComponents(component,{SplitsDisplay:r(320).default})}}]);