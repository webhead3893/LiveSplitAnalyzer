(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{280:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n=function(e){return(null==e?void 0:e.GameTime)||(null==e?void 0:e.RealTime)||null}},281:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"a",(function(){return o})),r.d(t,"b",(function(){return l}));r(11),r(162),r(15),r(128);var n=function(time){var e=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!e)return 0;var t=+e[1],r=+e[2];return+e[3]+60*r+3600*t},o=function(time){var e=time.match(/([0-9]+):([0-9]+):([0-9.]+)/);if(!e)return"";var t=+e[1],r=+e[2],n=+e[3],o="";return t&&(o+="".concat(t,"h")),r&&(o+="".concat(r,"m")),o+="".concat(n<10?"0":"").concat(n.toFixed(2),"s")},l=function(time){var e="",t=!0;return time>3600&&(t=!1,e+="".concat(Math.floor(time/3600),"h"),time%=3600),time>60&&(t=!1,e+="".concat(Math.floor(time/60),"m"),time%=60),e+="".concat(!t&&time<10?"0":"").concat(Math.abs(+time.toFixed(2)),"s")}},284:function(e,t,r){var content=r(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(80).default)("7ae2b702",content,!0,{sourceMap:!1})},317:function(e,t,r){var n;n=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","Ա":"A","Բ":"B","Գ":"G","Դ":"D","Ե":"E","Զ":"Z","Է":"E\'","Ը":"Y\'","Թ":"T\'","Ժ":"JH","Ի":"I","Լ":"L","Խ":"X","Ծ":"C\'","Կ":"K","Հ":"H","Ձ":"D\'","Ղ":"GH","Ճ":"TW","Մ":"M","Յ":"Y","Ն":"N","Շ":"SH","Չ":"CH","Պ":"P","Ջ":"J","Ռ":"R\'","Ս":"S","Վ":"V","Տ":"T","Ր":"R","Ց":"C","Փ":"P\'","Ք":"Q\'","Օ":"O\'\'","Ֆ":"F","և":"EV","ء":"a","آ":"aa","أ":"a","ؤ":"u","إ":"i","ئ":"e","ا":"a","ب":"b","ة":"h","ت":"t","ث":"th","ج":"j","ح":"h","خ":"kh","د":"d","ذ":"th","ر":"r","ز":"z","س":"s","ش":"sh","ص":"s","ض":"dh","ط":"t","ظ":"z","ع":"a","غ":"gh","ف":"f","ق":"q","ك":"k","ل":"l","م":"m","ن":"n","ه":"h","و":"w","ى":"a","ي":"y","ً":"an","ٌ":"on","ٍ":"en","َ":"a","ُ":"u","ِ":"e","ْ":"","٠":"0","١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","پ":"p","چ":"ch","ژ":"zh","ک":"k","گ":"g","ی":"y","۰":"0","۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ṣ":"S","ṣ":"s","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","–":"-","‘":"\'","’":"\'","“":"\\"","”":"\\"","„":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial","ﻵ":"laa","ﻷ":"laa","ﻹ":"lai","ﻻ":"la"}'),t=JSON.parse('{"bg":{"Й":"Y","Ц":"Ts","Щ":"Sht","Ъ":"A","Ь":"Y","й":"y","ц":"ts","щ":"sht","ъ":"a","ь":"y"},"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","ß":"ss","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"es":{"%":"por ciento","&":"y","<":"menor que",">":"mayor que","|":"o","¢":"centavos","£":"libras","¤":"moneda","₣":"francos","∑":"suma","∞":"infinito","♥":"amor"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"},"pt":{"%":"porcento","&":"e","<":"menor",">":"maior","|":"ou","¢":"centavo","∑":"soma","£":"libra","∞":"infinito","♥":"amor"},"uk":{"И":"Y","и":"y","Й":"Y","й":"y","Ц":"Ts","ц":"ts","Х":"Kh","х":"kh","Щ":"Shch","щ":"shch","Г":"H","г":"h"},"vi":{"Đ":"D","đ":"d"},"da":{"Ø":"OE","ø":"oe","Å":"AA","å":"aa","%":"procent","&":"og","|":"eller","$":"dollar","<":"mindre end",">":"større end"},"nb":{"&":"og","Å":"AA","Æ":"AE","Ø":"OE","å":"aa","æ":"ae","ø":"oe"},"it":{"&":"e"},"nl":{"&":"en"},"sv":{"&":"och","Å":"AA","Ä":"AE","Ö":"OE","å":"aa","ä":"ae","ö":"oe"}}');function r(r,n){if("string"!=typeof r)throw new Error("slugify: string argument expected");var o=t[(n="string"==typeof n?{replacement:n}:n||{}).locale]||{},l=void 0===n.replacement?"-":n.replacement,c=void 0===n.trim||n.trim,m=r.normalize().split("").reduce((function(t,r){var c=o[r]||e[r]||r;return c===l&&(c=" "),t+c.replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"");return n.strict&&(m=m.replace(/[^A-Za-z0-9\s]/g,"")),c&&(m=m.trim()),m=m.replace(/\s+/g,l),n.lower&&(m=m.toLowerCase()),m}return r.extend=function(t){Object.assign(e,t)},r},e.exports=n(),e.exports.default=n()},318:function(e,t,r){"use strict";r(284)},319:function(e,t,r){var n=r(79)(!1);n.push([e.i,"*[data-v-e2215832]{color:#000}img[data-v-e2215832]{filter:drop-shadow(0 0 .5rem black)}.limit-height[data-v-e2215832]{max-height:4rem;display:flex}.split-icon[data-v-e2215832]{-o-object-fit:contain;object-fit:contain;max-width:100%;max-height:256px;width:auto;height:auto}.toggle-collapse[data-v-e2215832]{position:absolute;top:1rem;right:1rem}",""]),e.exports=n},321:function(e,t,r){"use strict";r.r(t);r(161);var n=r(24),o=r(25),l=r(60),c=r(100),m=r(45),h=r(40),d=(r(6),r(1),r(11),r(27),r(127),r(16),r(67),r(49),r(286),r(287),r(288),r(289),r(290),r(291),r(292),r(293),r(294),r(295),r(296),r(297),r(298),r(299),r(300),r(301),r(302),r(303),r(304),r(305),r(306),r(307),r(308),r(309),r(310),r(279)),f=r(280),y=r(281),v=(r(335),r(18),"#1f77b4"),O="#ffc400",A="#2db41e",k=r(317),S=r.n(k),T=r(285);function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=Object(m.a)(e);if(t){var o=Object(m.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(c.a)(this,r)}}var E=function(e,t,r,desc){var n,o=arguments.length,l=o<3?t:null===desc?desc=Object.getOwnPropertyDescriptor(t,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,r,desc);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(l=(o<3?n(l):o>3?n(t,r,l):n(t,r))||l);return o>3&&l&&Object.defineProperty(t,r,l),l},j=function(e){Object(l.a)(r,e);var t=w(r);function r(){var e;return Object(n.a)(this,r),(e=t.apply(this,arguments)).collapseVisible=!1,e.renderGraph=!0,e.layout=function(){var t={title:"Time history",xaxis:{title:"Finished number (".concat(e.split.SegmentHistory.Time.length," total)")},yaxis:{title:"Time (seconds)",rangemode:e.graphYAxisToZero?"tozero":"nonnegative"},annotations:[{x:e.gold.x,y:e.gold.y,text:"Gold",font:{color:O},arrowhead:2,arrowsize:1,arrowwidth:2,arrowcolor:O,ax:0,ay:30}]},r=Object(f.a)(e.PB);return e.graphPBHline&&e.currentAttemptNumber&&r&&(t.shapes=[{type:"line",x0:0,y0:Object(y.c)(r),x1:e.timesSeconds.length-1,y1:Object(y.c)(r),line:{color:A,width:1,dash:"dot"}}]),t},e.formatTime=y.a,e}return Object(o.a)(r,[{key:"bestTimeDisplay",get:function(){var e="";return this.split.BestSegmentTime.GameTime&&(e+="".concat(this.formatTime(this.split.BestSegmentTime.GameTime)," (game time) ; ")),this.split.BestSegmentTime.RealTime&&(e+="".concat(this.formatTime(this.split.BestSegmentTime.RealTime)," (real time)")),e}},{key:"gold",get:function(){for(var e=0,t=999999,i=0;i<this.timesSeconds.length;++i){var r=this.timesSeconds[i];r&&r<t&&(e=i,t=r)}return{x:e,y:t}}},{key:"PB",get:function(){var e=this;return this.split.SegmentHistory.Time.find((function(t){return t["@_id"]===e.currentAttemptNumber}))}},{key:"goldsMap",get:function(){var e=999999;return this.timesSeconds.map((function(t){return!!(t&&t<e)&&(e=t,!0)}))}},{key:"timesSeconds",get:function(){return this.split.SegmentHistory.Time.map((function(e){var time=Object(f.a)(e);return time?Object(y.c)(time):null}))}},{key:"collapseName",get:function(){return"collapse-"+S()(this.split.Name)}},{key:"markerColors",get:function(){for(var e,t=[],i=0;i<this.split.SegmentHistory.Time.length;++i)this.split.SegmentHistory.Time[i]["@_id"]==(null===(e=this.PB)||void 0===e?void 0:e["@_id"])?t.push(A):t.push(this.goldsMap[i]?O:v);return t}},{key:"markerSizes",get:function(){for(var e,t=[],i=0;i<this.split.SegmentHistory.Time.length;++i)this.split.SegmentHistory.Time[i]["@_id"]==(null===(e=this.PB)||void 0===e?void 0:e["@_id"])?t.push(6):t.push(this.goldsMap[i]?5:3);return t}},{key:"plot_data",value:function(){var e=this.split.SegmentHistory.Time.map((function(e){return Object(f.a)(e)}));return[{x:Array.from({length:this.split.SegmentHistory.Time.length},(function(e,t){return t})),y:this.timesSeconds,text:e,type:"scatter",hoverinfo:"text",mode:"lines+markers",marker:{color:this.markerColors,size:this.markerSizes},line:{color:v,width:1}}]}},{key:"srcFormattedIcon",value:function(e){var t=function(e){for(var t=atob(e),r=t.length,data=new Uint8Array(r),n=0;n<r;n++)data[n]=t.charCodeAt(n);var i,o=new Uint8Array([137,80,78,71,13,10,26,10]),l=0,c=0,m=!1;for(i=0;i<data.length&&(data[i]==o[l]?(0==l&&(c=i),l==o.length-1?m=!0:l++):l=0,!m);++i);if(!m)return console.error("No PNG file in input data"),null;for(;;){i+=4;var h=new Uint8Array([data[i],data[i-1],data[i-2],data[i-3]]),d=new Uint32Array(h.buffer,0,1)[0];i+=4,h=new Uint8Array([data[i-3],data[i-2],data[i-1],data[i]]);var f=(new TextDecoder).decode(h);if(i+=d,(i+=4)>data.length)return console.error("OOB"),null;if("IEND"==f)break}return data.slice(c,i)}(e.Icon);return t?"data:image/jpeg;base64,"+btoa(new Uint8Array(t).reduce((function(data,e){return data+String.fromCharCode(e)}),"")):null}}]),r}(d.Vue);E([Object(d.Prop)()],j.prototype,"split",void 0),E([Object(d.Prop)({default:!1})],j.prototype,"graphYAxisToZero",void 0),E([Object(d.Prop)({default:!1})],j.prototype,"graphPBHline",void 0),E([Object(d.Prop)()],j.prototype,"currentAttemptNumber",void 0);var x=j=E([Object(d.Component)({components:{Plotly:T.Plotly}})],j),U=(r(318),r(65)),component=Object(U.a)(x,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-card",{staticClass:"text-left"},[r("div",{staticClass:"limit-height"},[e.srcFormattedIcon(e.split)?r("b-card-img",{staticClass:"split-icon mr-4",attrs:{src:e.srcFormattedIcon(e.split),block:""}}):e._e(),e._v(" "),r("div",{staticClass:"mt-auto mb-auto"},[r("h3",[e._v("\n          "+e._s(e.split.Name)+"\n        ")]),e._v(" "),e.split.BestSegmentTime?r("p",[r("strong",[e._v("Best time:")]),e._v(" "+e._s(e.bestTimeDisplay)+"\n        ")]):e._e(),e._v(" "),r("b-button",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.collapseName,expression:"collapseName"}],staticClass:"toggle-collapse",attrs:{variant:"outline-dark",pill:""}},[r("font-awesome-icon",{attrs:{icon:"chevron-left",rotation:e.collapseVisible?270:null}})],1)],1)],1)]),e._v(" "),r("b-collapse",{staticClass:"mt-1",attrs:{id:e.collapseName},model:{value:e.collapseVisible,callback:function(t){e.collapseVisible=t},expression:"collapseVisible"}},[r("b-card",{staticClass:"text-left"},[e.renderGraph?r("Plotly",{attrs:{data:e.plot_data(),layout:e.layout(),"display-mode-bar":!0}}):e._e()],1)],1)],1)}),[],!1,null,"e2215832",null);t.default=component.exports}}]);