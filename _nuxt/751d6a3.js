(window.webpackJsonp=window.webpackJsonp||[]).push([[31,8,20,32,33,35],{307:function(t,e,n){"use strict";var r=n(8).default.observable({savedSettings:{},hasGameTime:!1,useRealTime:!1,splitFileIsModified:!1,PB:null,autoSplitterSettings:null});e.a={get state(){return r}}},308:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=new(n(8).default)},313:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(308),o=function(t){r.a.$emit("startLoading",t)}},319:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(24),l=n(60),c=n(108),f=n(46),d=n(41),v=(n(6),n(1),n(165),n(305)),h=n(313);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},j=function(t){Object(l.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).internalValue=!0,t}return Object(o.a)(n,[{key:"valueChange",value:function(t){this.internalValue=t}},{key:"inputChange",value:function(t){var e=this;Object(h.a)((function(){return new Promise((function(n){e.$emit("input",t),e.$nextTick((function(){return n()}))}))}))}}]),n}(v.Vue);y([Object(v.Prop)()],j.prototype,"value",void 0),y([Object(v.Watch)("value",{immediate:!0})],j.prototype,"valueChange",null),y([Object(v.Watch)("internalValue")],j.prototype,"inputChange",null);var x=j=y([v.Component],j),O=n(65),component=Object(O.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-checkbox",{attrs:{switch:""},model:{value:t.internalValue,callback:function(e){t.internalValue=e},expression:"internalValue"}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},326:function(t,e,n){"use strict";n.r(e);var r=n(23),o=n(24),l=n(60),c=n(108),f=n(46),d=n(41),v=(n(6),n(1),n(165),n(305)),h=n(308);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var y=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},j=function(t){Object(l.a)(n,t);var e=m(n);function n(){var t;return Object(r.a)(this,n),(t=e.apply(this,arguments)).modalRef="BaseModal",t}return Object(o.a)(n,[{key:"destroyModal",value:function(){h.a.$emit("closeModal")}},{key:"hideModal",value:function(){var t=this.$refs[this.modalRef];t&&t.hide()}},{key:"mounted",value:function(){var t=this.$refs[this.modalRef];t&&t.show()}}]),n}(v.Vue),x=j=y([v.Component],j),O=n(65),component=Object(O.a)(x,undefined,undefined,!1,null,null,null);e.default=component.exports},386:function(t,e,n){"use strict";n.r(e);var r={name:"hue-circle-svg"},o=n(65),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"100%",height:"100%",viewBox:"-20 -20 240 240"}},[e("defs",[e("linearGradient",{attrs:{id:"redyel",gradientUnits:"objectBoundingBox",x1:"0",y1:"0",x2:"1",y2:"1"}},[e("stop",{attrs:{offset:"0%","stop-color":"#ff0000"}}),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":"#ffff00"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"yelgre",gradientUnits:"objectBoundingBox",x1:"0",y1:"0",x2:"0",y2:"1"}},[e("stop",{attrs:{offset:"0%","stop-color":"#ffff00"}}),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":"#00ff00"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"grecya",gradientUnits:"objectBoundingBox",x1:"1",y1:"0",x2:"0",y2:"1"}},[e("stop",{attrs:{offset:"0%","stop-color":"#00ff00"}}),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":"#00ffff"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"cyablu",gradientUnits:"objectBoundingBox",x1:"1",y1:"1",x2:"0",y2:"0"}},[e("stop",{attrs:{offset:"0%","stop-color":"#00ffff"}}),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":"#0000ff"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"blumag",gradientUnits:"objectBoundingBox",x1:"0",y1:"1",x2:"0",y2:"0"}},[e("stop",{attrs:{offset:"0%","stop-color":"#0000ff"}}),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":"#ff00ff"}})],1),t._v(" "),e("linearGradient",{attrs:{id:"magred",gradientUnits:"objectBoundingBox",x1:"0",y1:"1",x2:"1",y2:"0"}},[e("stop",{attrs:{offset:"0%","stop-color":"#ff00ff"}}),t._v(" "),e("stop",{attrs:{offset:"100%","stop-color":"#ff0000"}})],1)],1),t._v(" "),e("g",{attrs:{fill:"none","stroke-width":"30",transform:"translate(100,100)"}},[e("path",{attrs:{d:"M 0,-100 A 100,100 0 0,1 86.6,-50",stroke:"url(#redyel)"}}),t._v(" "),e("path",{attrs:{d:"M 86.6,-50 A 100,100 0 0,1 86.6,50",stroke:"url(#yelgre)"}}),t._v(" "),e("path",{attrs:{d:"M 86.6,50 A 100,100 0 0,1 0,100",stroke:"url(#grecya)"}}),t._v(" "),e("path",{attrs:{d:"M 0,100 A 100,100 0 0,1 -86.6,50",stroke:"url(#cyablu)"}}),t._v(" "),e("path",{attrs:{d:"M -86.6,50 A 100,100 0 0,1 -86.6,-50",stroke:"url(#blumag)"}}),t._v(" "),e("path",{attrs:{d:"M -86.6,-50 A 100,100 0 0,1 0,-100",stroke:"url(#magred)"}})])])}),[],!1,null,null,null);e.default=component.exports},397:function(t,e,n){var content=n(430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(84).default)("217dfc29",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";n.r(e),n.d(e,"normalizeAngle",(function(){return o})),n.d(e,"getRotationFromCoords",(function(){return l})),n.d(e,"noop",(function(){return c}));var r=180/Math.PI,o=function(t){var e=t%360;return e<0?360+e:e},l=function(t,rect){var e=t.x,n=t.y,o=rect.left+rect.width/2,l=rect.top+rect.height/2;return Math.atan2(n-l,e-o)*r},c=function(){},f={name:"hue-picker",data:function(){return{active:!1,element:null,hue:0}},mounted:function(){this.element=this.$refs.simplestHuePicker,this.addListeners()},methods:{addListeners:function(){this.element.addEventListener("touchstart",this.handleStart,{passive:!0}),this.element.addEventListener("touchmove",this.handleMove,{passive:!1}),this.element.addEventListener("touchend",this.handleEnd,{passive:!0}),this.element.addEventListener("touchcancel",this.handleEnd,{passive:!0}),this.element.addEventListener("mousedown",this.handleStart,{passive:!0}),this.element.addEventListener("mousemove",this.handleMove,{passive:!1}),this.element.addEventListener("mouseup",this.handleEnd,{passive:!0}),this.element.addEventListener("mouseleave",this.handleEnd,{passive:!0})},handleStart:function(){this.active=!0},handleMove:function(t){if(this.active){t.preventDefault();var e=event.targetTouches?event.targetTouches[0]:event;this.updateAngle({x:e.clientX,y:e.clientY})}},handleEnd:function(){this.active=!1},updateAngle:function(t){var e=l(t,this.element.getBoundingClientRect());this.hue=o(Math.round(e)+90),this.$emit("input",this.hue)}}},d=n(65),component=Object(d.a)(f,(function(){var t=this._self._c;return t("div",{ref:"simplestHuePicker",attrs:{id:"simplest-color-picker"}},[t("hue-circle-svg")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{HueCircleSvg:n(386).default})},429:function(t,e,n){"use strict";n(397)},430:function(t,e,n){var r=n(83)(!1);r.push([t.i,".hue-picker[data-v-7606a566]{margin:auto;max-width:20vh;max-height:20vh}",""]),t.exports=r},436:function(t,e,n){"use strict";n.r(e);var r=n(24),o=n(23),l=n(60),c=n(108),f=n(46),d=n(41),v=(n(6),n(1),n(165),n(305)),h=n(326),m=n(307),y=n(366),j=n.n(y);function x(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Object(c.a)(this,n)}}var O=function(t,e,n,desc){var r,o=arguments.length,l=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,n):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,n,desc);else for(var i=t.length-1;i>=0;i--)(r=t[i])&&(l=(o<3?r(l):o>3?r(e,n,l):r(e,n))||l);return o>3&&l&&Object.defineProperty(e,n,l),l},_=function(t){Object(l.a)(n,t);var e=x(n);function n(){var t;return Object(o.a)(this,n),(t=e.apply(this,arguments)).modalRef="GlobalSettingsModal",t.globalState=m.a.state,t}return Object(r.a)(n)}(Object(v.mixins)(h.default)),R=_=O([Object(v.Component)({components:{VueSlider:j.a}})],_),S=(n(429),n(65)),component=Object(S.a)(R,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("b-modal",{ref:t.modalRef,attrs:{title:"Global settings","hide-footer":"",centered:"",size:"lg"},on:{hidden:t.destroyModal}},[e("div",{staticClass:"text-center"},[t.globalState.hasGameTime?e("loading-switch",{staticClass:"mb-2",model:{value:t.globalState.useRealTime,callback:function(e){t.$set(t.globalState,"useRealTime",e)},expression:"globalState.useRealTime"}},[t._v("\n        Use real time instead of game time\n      ")]):t._e(),t._v(" "),e("h6",{staticClass:"mt-4"},[t._v("Size of info panels")]),t._v(" "),e("b-row",[e("b-col",{attrs:{cols:"12",xl:"8","offset-xl":"2"}},[e("vue-slider",{attrs:{min:0,max:3,lazy:"",adsorb:""},model:{value:t.globalState.savedSettings.pageWidth,callback:function(e){t.$set(t.globalState.savedSettings,"pageWidth",e)},expression:"globalState.savedSettings.pageWidth"}})],1)],1),t._v(" "),e("h6",{staticClass:"mt-4"},[t._v("\n        Page hue \n        "),t.globalState.savedSettings.pageHue?e("span",[t._v("("+t._s(t.globalState.savedSettings.pageHue)+")")]):t._e()]),t._v(" "),e("hue-picker",{staticClass:"hue-picker",model:{value:t.globalState.savedSettings.pageHue,callback:function(e){t.$set(t.globalState.savedSettings,"pageHue",e)},expression:"globalState.savedSettings.pageHue"}})],1)])}),[],!1,null,"7606a566",null);e.default=component.exports;installComponents(component,{LoadingSwitch:n(319).default,HuePicker:n(409).default})}}]);