(window.webpackJsonp=window.webpackJsonp||[]).push([[6,5],{276:function(e,t,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(80).default)("ca3c6348",content,!0,{sourceMap:!1})},303:function(e,t,r){"use strict";r(276)},304:function(e,t,r){var n=r(79)(!1);n.push([e.i,"*[data-v-373682d7]{color:#000}img[data-v-373682d7]{filter:drop-shadow(0 0 .5rem black)}.limit-height[data-v-373682d7]{max-height:4rem;display:flex}.split-icon[data-v-373682d7]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:256px;width:auto;height:auto}",""]),e.exports=n},306:function(e,t,r){"use strict";r.r(t);r(159);var n=r(24),o=r(25),l=r(62),c=r(99),f=r(46),m=r(42),h=(r(6),r(1),r(11),r(27),r(16),r(160),r(65),r(48),r(278),r(279),r(280),r(281),r(282),r(283),r(284),r(285),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(277)),d=(r(307),r(15),r(18),r(308)),v=r.n(d),y=r(309);function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var T=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},O=function(e){Object(l.a)(r,e);var t=x(r);function r(){var e;return Object(n.a)(this,r),(e=t.call(this)).collapseVisible=!1,e.renderGraph=!0,e.layout=function(){return{title:"Time history",xaxis:{title:"Attempt number"},yaxis:{title:"Time (seconds)",rangemode:e.graphYAxisToZero?"tozero":"nonnegative"}}},e}return Object(o.a)(r,[{key:"collapseName",get:function(){return"collapse-"+v()(this.split.Name)}},{key:"onGraphYAxisToZeroChange",value:function(){var e=this;this.renderGraph=!1,this.$nextTick((function(){e.renderGraph=!0}))}},{key:"plot_data",value:function(){var e=this.split.SegmentHistory.Time.map((function(e){if("string"!=typeof e&&e.GameTime){var time=e.GameTime.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!time)return"";var t=+time[1],r=+time[2];return+time[3]+60*r+3600*t}return null})),t=this.split.SegmentHistory.Time.map((function(e){return"string"!=typeof e&&e.GameTime?e.GameTime:null}));return[{x:Array.from({length:this.split.SegmentHistory.Time.length},(function(e,t){return t})),y:e,text:t,type:"scatter",hoverinfo:"text",mode:"lines+markers",marker:{size:4},line:{width:1}}]}},{key:"srcFormattedIcon",value:function(e){var t=function(e){for(var t=atob(e),r=t.length,data=new Uint8Array(r),n=0;n<r;n++)data[n]=t.charCodeAt(n);var i,o=new Uint8Array([137,80,78,71,13,10,26,10]),l=(new Uint8Array([0,0,0,0,73,69,78,68]),0),c=0,f=!1;for(i=0;i<data.length&&(data[i]==o[l]?(0==l&&(c=i),l==o.length-1?(f=!0,console.log("Found beginning of PNG file at position "+c)):l++):l=0,!f);++i);if(!f)return console.error("No PNG file in input data"),null;for(;;){i+=4;var m=new Uint8Array([data[i],data[i-1],data[i-2],data[i-3]]),h=new Uint32Array(m.buffer,0,1)[0];i+=4,m=new Uint8Array([data[i-3],data[i-2],data[i-1],data[i]]);var d=(new TextDecoder).decode(m);if(console.log("Got chunk ".concat(d," of size ").concat(h)),i+=h,(i+=4)>data.length)return console.error("OOB"),null;if("IEND"==d)break}return data.slice(c,i)}(e.Icon);return t?"data:image/jpeg;base64,"+btoa(new Uint8Array(t).reduce((function(data,e){return data+String.fromCharCode(e)}),"")):null}},{key:"formatTime",value:function(time){var e=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!e)return"";var t=+e[1],r=+e[2],n=+e[3],o="";return t&&(o+="".concat(t,"h")),r&&(o+="".concat(r,"m")),o+="".concat(n,"s")}}]),r}(h.Vue);T([Object(h.Prop)()],O.prototype,"split",void 0),T([Object(h.Prop)()],O.prototype,"graphYAxisToZero",void 0),T([Object(h.Watch)("graphYAxisToZero")],O.prototype,"onGraphYAxisToZeroChange",null);var j=O=T([Object(h.Component)({components:{Plotly:y.Plotly}})],O),_=(r(303),r(67)),component=Object(_.a)(j,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{staticClass:"text-left"},[r("div",{staticClass:"limit-height"},[r("b-card-img",{staticClass:"split-icon mr-4",attrs:{src:e.srcFormattedIcon(e.split),block:""}}),e._v(" "),r("div",{staticClass:"mt-auto mb-auto"},[r("h3",[e._v("\n          "+e._s(e.split.Name)+"\n        ")]),e._v(" "),e.split.BestSegmentTime?r("p",[r("strong",[e._v("Best time:")]),e._v(" "+e._s(e.formatTime(e.split.BestSegmentTime.GameTime))+" (game time) ;\n          "+e._s(e.formatTime(e.split.BestSegmentTime.RealTime))+" (real time)\n        ")]):e._e(),e._v(" "),r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.collapseName,expression:"collapseName"}],staticStyle:{position:"absolute",top:"1rem",right:"1rem"},attrs:{variant:"outline-dark"}},[e._v("\n          "+e._s(e.collapseVisible?"Close":"Time detail")+"\n        ")])],1)],1)]),e._v(" "),r("b-collapse",{staticClass:"mt-1",attrs:{id:e.collapseName},model:{value:e.collapseVisible,callback:function(t){e.collapseVisible=t},expression:"collapseVisible"}},[r("b-card",{staticClass:"text-left"},[e.renderGraph?r("Plotly",{attrs:{data:e.plot_data(),layout:e.layout(),"display-mode-bar":!0}}):e._e()],1)],1)],1)}),[],!1,null,"373682d7",null);t.default=component.exports},320:function(e,t,r){"use strict";r.r(t);var n=r(24),o=r(25),l=r(62),c=r(99),f=r(46),m=r(42),h=(r(6),r(1),r(159),r(311)),d=r(277);function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(f.a)(e);if(t){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var y=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},x=function(e){Object(l.a)(r,e);var t=v(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).xmlParser=new h.XMLParser,e.splitFile="",e.graphYAxisToZero=!0,e}return Object(o.a)(r,[{key:"parsedSplits",get:function(){return this.xmlParser.parse(this.splitFile)}},{key:"splits",get:function(){return this.parsedSplits.Run.Segments.Segment}},{key:"fileChange",value:function(e){var t=this,r=e.target.files[0],n=new FileReader;n.onload=function(e){e.target?t.splitFile=e.target.result:console.error("FileReader error")},n.readAsText(r)}}]),r}(d.Vue),T=x=y([d.Component],x),O=r(67),component=Object(O.a)(T,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"p-3"},[r("b-form-file",{staticClass:"mb-3",attrs:{accept:".lss",placeholder:"Choose a file or drop it here...","drop-placeholder":"Drop file here..."},on:{change:e.fileChange}}),e._v(" "),r("b-form-checkbox",{staticClass:"mb-3",attrs:{name:"check-button",switch:""},model:{value:e.graphYAxisToZero,callback:function(t){e.graphYAxisToZero=t},expression:"graphYAxisToZero"}},[e._v("\n    Graphs' Y axis starts at zero\n  ")]),e._v(" "),e.splitFile.length?r("div",e._l(e.splits,(function(t){return r("split-display",{key:t.Name,staticClass:"mb-3",attrs:{split:t,graphYAxisToZero:e.graphYAxisToZero}})})),1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SplitDisplay:r(306).default})}}]);