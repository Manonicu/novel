(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Chapter"],{"0653":function(t,e,n){"use strict";n("68ef")},"2de0":function(t,e,n){},"2ecd":function(t,e,n){"use strict";var a=n("2de0"),r=n.n(a);r.a},"34e9":function(t,e,n){"use strict";var a=n("2638"),r=n.n(a),i=n("d282"),l=n("ba31"),o=n("b1d2"),s=Object(i["a"])("cell-group"),c=s[0],u=s[1];function d(t,e,n,a){var i,s=t("div",r()([{class:[u(),(i={},i[o["e"]]=e.border,i)]},Object(l["b"])(a,!0)]),[n.default&&n.default()]);return e.title||n.title?t("div",[t("div",{class:u("title")},[n.title?n.title():e.title]),s]):s}d.props={title:String,border:{type:Boolean,default:!0}},e["a"]=c(d)},5319:function(t,e,n){"use strict";var a=n("d784"),r=n("825a"),i=n("7b0b"),l=n("50c4"),o=n("a691"),s=n("1d80"),c=n("8aa5"),u=n("14c3"),d=Math.max,h=Math.min,p=Math.floor,f=/\$([$&'`]|\d\d?|<[^>]*>)/g,b=/\$([$&'`]|\d\d?)/g,v=function(t){return void 0===t?t:String(t)};a("replace",2,(function(t,e,n){return[function(n,a){var r=s(this),i=void 0==n?void 0:n[t];return void 0!==i?i.call(n,r,a):e.call(String(r),n,a)},function(t,i){var s=n(e,t,this,i);if(s.done)return s.value;var p=r(t),f=String(this),b="function"===typeof i;b||(i=String(i));var g=p.global;if(g){var x=p.unicode;p.lastIndex=0}var k=[];while(1){var m=u(p,f);if(null===m)break;if(k.push(m),!g)break;var C=String(m[0]);""===C&&(p.lastIndex=c(f,l(p.lastIndex),x))}for(var w="",y=0,I=0;I<k.length;I++){m=k[I];for(var S=String(m[0]),O=d(h(o(m.index),f.length),0),$=[],B=1;B<m.length;B++)$.push(v(m[B]));var j=m.groups;if(b){var P=[S].concat($,O,f);void 0!==j&&P.push(j);var D=String(i.apply(void 0,P))}else D=a(S,f,O,$,j,i);O>=y&&(w+=f.slice(y,O)+D,y=O+S.length)}return w+f.slice(y)}];function a(t,n,a,r,l,o){var s=a+t.length,c=r.length,u=b;return void 0!==l&&(l=i(l),u=f),e.call(o,u,(function(e,i){var o;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,a);case"'":return n.slice(s);case"<":o=l[i.slice(1,-1)];break;default:var u=+i;if(0===u)return e;if(u>c){var d=p(u/10);return 0===d?e:d<=c?void 0===r[d-1]?i.charAt(1):r[d-1]+i.charAt(1):e}o=r[u-1]}return void 0===o?"":o}))}}))},"537b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chapter"},[n("div",{staticClass:"content"},[n("div",{domProps:{innerHTML:t._s(t.data.cpContent)}}),n("Popup",{staticStyle:{width:"80vw",height:"70vh"},attrs:{position:"center","get-container":"body"},model:{value:t.showPicker,callback:function(e){t.showPicker=e},expression:"showPicker"}},[n("CellGroup",t._l(t.categories,(function(e,a){return n("Cell",{key:a,attrs:{title:e.title},on:{click:function(n){return t.fetchData(e.link)}}})})),1)],1)],1)])},r=[],i=(n("d3b7"),n("ac1f"),n("5319"),n("9911"),n("96cf"),n("c194"),n("7744")),l=(n("0653"),n("34e9")),o=(n("68ef"),n("09fe"),n("4d75"),n("e41f")),s=n("1fba"),c={name:"Chapter",props:{showCategory:{type:Boolean,default:!1}},components:{Popup:o["a"],CellGroup:l["a"],Cell:i["a"]},data:function(){return{url:this.$route.query.link,data:{},categories:JSON.parse(localStorage.getItem("category")),chapterIndex:this.$route.query.order,showPicker:!1,scrollX:0}},watch:{url:{handler:function(t){this.fetchData(t)},immediate:!0},showCategory:function(t){this.showPicker=t},scrollX:function(t){t>50&&this.prevChapter(),t<-50&&this.nextChapter()}},created:function(){this.bscroll=null},methods:{fetchData:function(t){var e=this;return regeneratorRuntime.async((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,regeneratorRuntime.awrap(this.$axios.get("/chapter?url=".concat(t)).then((function(t){e.$emit("changeTitle",t.data.data.title),t.data.data.cpContent=t.data.data.cpContent.replace(/\s+/g,'<div class="divider" style="padding: 15px 0;"></div>'),e.data=t.data.data})));case 2:this.$nextTick((function(){e.bscroll?e.bscroll.refresh():e.bscroll=new s["a"](".chapter",{scrollX:!0,scrollY:!0,bounceTime:800,click:!0,probeType:3}),e.bscroll.on("touchEnd",(function(t){e.scrollX=t.x}))})),this.showPicker=!1;case 4:case"end":return n.stop()}}),null,this)},prevChapter:function(){this.chapterIndex=this.chapterIndex>0?this.chapterIndex-1:this.chapterIndex,console.log(this.chapterIndex),this.url=this.categories[this.chapterIndex].link,this.$db.setData("current",{chapterIndex:this.chapterIndex})},nextChapter:function(){this.chapterIndex=this.chapterIndex<this.categories.length?this.chapterIndex+1:this.chapterIndex,console.log(this.chapterIndex),this.url=this.categories[this.chapterIndex].link,this.$db.setData("current",{chapterIndex:this.chapterIndex})}},beforeRouteLeave:function(t,e,n){this.bscroll&&this.bscroll.destroy(),this.$toast.clear(),n()}},u=c,d=(n("2ecd"),n("2877")),h=Object(d["a"])(u,a,r,!1,null,"53e231d0",null);e["default"]=h.exports},7744:function(t,e,n){"use strict";var a=n("c31d"),r=n("2638"),i=n.n(r),l=n("d282"),o=n("a142"),s={icon:String,size:String,center:Boolean,isLink:Boolean,required:Boolean,clickable:Boolean,titleStyle:null,titleClass:null,valueClass:null,labelClass:null,title:[Number,String],value:[Number,String],label:[Number,String],arrowDirection:String,border:{type:Boolean,default:!0}},c=n("ba31"),u=n("48f4"),d=n("ad06"),h=Object(l["a"])("cell"),p=h[0],f=h[1];function b(t,e,n,a){var r=e.icon,l=e.size,s=e.title,h=e.label,p=e.value,b=e.isLink,v=e.arrowDirection,g=n.title||Object(o["b"])(s),x=n.default||Object(o["b"])(p),k=n.label||Object(o["b"])(h),m=k&&t("div",{class:[f("label"),e.labelClass]},[n.label?n.label():h]),C=g&&t("div",{class:[f("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():t("span",[s]),m]),w=x&&t("div",{class:[f("value",{alone:!n.title&&!s}),e.valueClass]},[n.default?n.default():t("span",[p])]),y=n.icon?n.icon():r&&t(d["a"],{class:f("left-icon"),attrs:{name:r}}),I=n["right-icon"],S=I?I():b&&t(d["a"],{class:f("right-icon"),attrs:{name:v?"arrow-"+v:"arrow"}});function O(t){Object(c["a"])(a,"click",t),Object(u["a"])(a)}var $=b||e.clickable,B={clickable:$,center:e.center,required:e.required,borderless:!e.border};return l&&(B[l]=l),t("div",i()([{class:f(B),attrs:{role:$?"button":null,tabindex:$?0:null},on:{click:O}},Object(c["b"])(a)]),[y,C,w,S,n.extra&&n.extra()])}b.props=Object(a["a"])({},s,{},u["b"]);e["a"]=p(b)},c194:function(t,e,n){"use strict";n("68ef"),n("09fe")},e41f:function(t,e,n){"use strict";var a=n("d282"),r=n("a142"),i=n("6605"),l=n("ad06"),o=Object(a["a"])("popup"),s=o[0],c=o[1];e["a"]=s({mixins:[i["a"]],props:{round:Boolean,duration:Number,closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var t=this,e=function(e){return function(n){return t.$emit(e,n)}};this.onClick=e("click"),this.onOpened=e("opened"),this.onClosed=e("closed")},render:function(){var t,e=arguments[0];if(this.shouldRender){var n=this.round,a=this.position,i=this.duration,o=this.transition||("center"===a?"van-fade":"van-popup-slide-"+a),s={};return Object(r["b"])(i)&&(s.transitionDuration=i+"s"),e("transition",{attrs:{name:o},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[e("div",{directives:[{name:"show",value:this.value}],style:s,class:c((t={round:n},t[a]=a,t["safe-area-inset-bottom"]=this.safeAreaInsetBottom,t)),on:{click:this.onClick}},[this.slots(),this.closeable&&e(l["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:c("close-icon",this.closeIconPosition),on:{click:this.close}})])])}}})}}]);