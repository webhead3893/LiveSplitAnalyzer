(window.webpackJsonp=window.webpackJsonp||[]).push([[25,24],{280:function(t,e,n){"use strict";var r=n(9).default.observable({hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},281:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(9).default)},282:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l}));n(11),n(163),n(15),n(127),n(290),n(291),n(292);var r=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return 0;var e=+t[1],n=+t[2];return+t[3]+60*n+3600*e},o=function(time){var t=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!t)return"";var e=+t[1],n=+t[2],r=+t[3],o="";return e&&(o+="".concat(e,"h")),n&&(o+="".concat(n,"m")),o+="".concat(r<10?"0":"").concat(r.toFixed(2),"s")},c=function(time){var t="",e=!0;return time>=3600&&(e=!1,t+="".concat(Math.floor(time/3600),"h"),time%=3600),time>=60&&(e=!1,t+="".concat(Math.floor(time/60),"m"),time%=60),t+="".concat(!e&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")},l=function(time){var t="",e=Math.trunc(time/3600).toFixed();t+="".concat(e.padStart(2,"0"),":"),time%=3600;var n=Math.trunc(time/60).toFixed();t+="".concat(n.padStart(2,"0"),":"),time%=60;var r=Math.trunc(time),o=(time-r).toFixed(7).substring(2);return t+="".concat(r.toFixed().padStart(2,"0"),".").concat(o.padEnd(7,"0"))}},283:function(t,e,n){"use strict";n.d(e,"c",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return v}));n(16),n(1),n(3),n(101),n(102);var r=n(280),o=n(282),c=n(284),l=function(t){return(null==t?void 0:t.GameTime)&&!r.a.state.useRealTime?t.GameTime:(null==t?void 0:t.RealTime)||null},f=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=0;return t.map((function(t){var r;return(r=!0===e?t.BestSegmentTime.GameTime:!1===e?t.BestSegmentTime.RealTime:l(t.BestSegmentTime))&&(n+=Object(o.d)(r)),n}))},d=function(t){return t.reduce((function(t,e){return e.SplitTimes.SplitTime.forEach((function(s){t.includes(s["@_name"])||t.push(s["@_name"])})),t}),[])},v=function(t){r.a.state.splitFileIsModified=t,t?Object(c.c)():Object(c.d)()}},284:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d})),n.d(e,"a",(function(){return v}));var r=n(23),o=n(22),c=(n(1),function(input){return null==input?[]:Array.isArray(input)?input:[input]}),l=function(t){t.preventDefault(),t.returnValue=""},f=function(){window.addEventListener("beforeunload",l)},d=function(){window.removeEventListener("beforeunload",l)},v=Object(r.a)((function t(){var e=this;Object(o.a)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(t,n){e.reject=n,e.resolve=t}))}))},285:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(281),o=function(t){r.a.$emit("startLoading",t)}},287:function(t,e,n){var r=n(14),o=n(66),c=n(28),l=n(164),f=n(41),d=r(l),v=r("".slice),m=Math.ceil,h=function(t){return function(e,n,r){var l,h,O=c(f(e)),y=o(n),w=O.length,j=void 0===r?" ":c(r);return y<=w||""==j?O:((h=d(j,m((l=y-w)/j.length))).length>l&&(h=v(h,0,l)),t?O+h:h+O)}};t.exports={start:h(!1),end:h(!0)}},288:function(t,e,n){var r=n(55);t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(r)},290:function(t,e,n){var r=n(13),o=Math.ceil,c=Math.floor;r({target:"Math",stat:!0},{trunc:function(t){return(t>0?c:o)(t)}})},291:function(t,e,n){"use strict";var r=n(13),o=n(287).start;r({target:"String",proto:!0,forced:n(288)},{padStart:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},292:function(t,e,n){"use strict";var r=n(13),o=n(287).end;r({target:"String",proto:!0,forced:n(288)},{padEnd:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},339:function(t,e,n){var content=n(365);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(80).default)("3b48891a",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";n(339)},365:function(t,e,n){var r=n(79)(!1);r.push([t.i,".dl-button{transition:all .5s;width:4rem;height:4rem;font-size:1.5rem;position:fixed;bottom:1rem;right:1rem;filter:drop-shadow(0 0 .5rem black)}.dl-button.dl-button-modified{width:5rem;height:5rem;font-size:2rem}",""]),t.exports=r},378:function(t,e,n){"use strict";n.r(e);var r=n(22),o=n(23),c=n(60),l=n(100),f=n(44),d=n(40),v=(n(6),n(1),n(162),n(279)),m=(n(5),n(4),n(2),n(3),n(7),n(0)),h=n(354);function O(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w={ignoreAttributes:!1,attributeNamePrefix:"@_"},j=(new h.XMLParser(y({parseAttributeValue:!0,allowBooleanAttributes:!0},w)),new h.XMLBuilder(y({suppressBooleanAttributes:!1,format:!0},w))),S=n(280),M=n(283),P=n(285);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(l.a)(this,n)}}var R=function(t,e,n,desc){var r,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(c=(o<3?r(c):o>3?r(e,n,c):r(e,n))||c);return o>3&&c&&Object.defineProperty(e,n,c),c},T=function(t){Object(c.a)(n,t);var e=x(n);function n(){return Object(r.a)(this,n),e.apply(this,arguments)}return Object(o.a)(n,[{key:"variant",get:function(){return S.a.state.splitFileIsModified?"success":"light"}},{key:"classList",get:function(){return S.a.state.splitFileIsModified?"dl-button-modified dl-button":"dl-button"}},{key:"downloadSplits",value:function(){var t=this;Object(P.a)((function(){var element=document.createElement("a");element.setAttribute("download","splits.lss"),element.setAttribute("href","data:binary/octet-stream,".concat(encodeURIComponent(j.build(t.parsedSplits)))),element.style.display="none",document.body.appendChild(element),Object(M.d)(!1),element.click(),document.body.removeChild(element)}))}}]),n}(v.Vue);R([Object(v.Prop)()],T.prototype,"parsedSplits",void 0);var k=T=R([v.Component],T),F=(n(364),n(65)),component=Object(F.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:"Download splits",expression:"'Download splits'",modifiers:{hover:!0}}],class:t.classList,attrs:{pill:"",size:"lg",variant:t.variant},on:{click:t.downloadSplits}},[n("font-awesome-icon",{attrs:{icon:"floppy-disk"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);