(function(t){function e(e){for(var r,o,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a={app:0},c=[];function i(t){return s.p+"js/"+({Chapter:"Chapter",Search:"Search",bookDetail:"bookDetail",catSort:"catSort",category:"category"}[t]||t)+"."+{Chapter:"99bf3735",Search:"7559cbc7",bookDetail:"a8b4c67a",catSort:"aea56a05",category:"91ce7fa5"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={Chapter:1,bookDetail:1,catSort:1,category:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({Chapter:"Chapter",Search:"Search",bookDetail:"bookDetail",catSort:"catSort",category:"category"}[t]||t)+"."+{Chapter:"ba6859e8",Search:"31d6cfe0",bookDetail:"609040da",catSort:"5f873e6e",category:"d1450322"}[t]+".css",a=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[t],d.parentNode.removeChild(d),n(c)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[t]=0})));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=a[t]=[e,n]}));e.push(r[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"21bb":function(t,e,n){"use strict";var r=n("2dad"),o=n.n(r);o.a},"2dad":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e7e5");var r=n("d399"),o=(n("e17f"),n("2241")),a=(n("66cf"),n("343b")),c=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("8bbf")),i=n.n(c),s=(n("1d1c"),n("d3b7"),n("cebe")),u=n.n(s),l={baseURL:"https://novel.steps.info",timeout:1e4},f=u.a.create(l);f.interceptors.request.use((function(t){return i.a.prototype.$toast.loading(),t}),(function(t){return i.a.prototype.$toast.fail({message:"请求失败，请重试"}),Promise.reject(t)})),f.interceptors.response.use((function(t){return i.a.prototype.$toast.clear(),t}),(function(t){return i.a.prototype.$toast.fail({message:"请求失败，请重试"}),Promise.reject(t)})),Plugin.install=function(t){t.axios=f,window.axios=f,Object.defineProperties(t.prototype,{axios:{get:function(){return f}},$axios:{get:function(){return f}}})},i.a.use(Plugin);Plugin;var d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["home"!==t.$route.name?n("nav",{staticClass:"app-nav"},[n("Icon",{attrs:{name:"arrow-left"},on:{click:t.$_back}}),t._v(" "+t._s(t.title)+" "),"category"===t.$route.name?n("Icon",{attrs:{name:"sort"},on:{click:function(e){t.sort=!t.sort}}}):"chapter"===t.$route.name?n("Icon",{attrs:{name:"wait"},on:{click:function(e){t.showCategory=!t.showCategory}}}):n("Icon",{attrs:{name:"home"},on:{click:function(e){return t.$router.push({name:"home"})}}})],1):t._e(),n("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[n("router-view")],1)],1)},p=[],h=(n("ac1f"),n("1276"),n("c3a6"),n("ad06")),m={components:{Icon:h["a"]},data:function(){return{title:"首页",transitionName:"slide-right",sort:!1,showCategory:!1}},beforeRouteUpdate:function(t,e,n){var r=t.path.split("/").length,o=e.path.split("/").length;this.transitionName=r<o?"slide-right":"slide-left",n()},methods:{$_back:function(){this.$router.back()},changeTitle:function(t){this.title=t||"书城"}}},b=m,g=(n("5c0b"),n("2877")),v=Object(g["a"])(b,d,p,!1,null,null,null),y=v.exports,k=n("6389"),w=n.n(k),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("div",{staticClass:"tab"},[n("span",{class:{active:"jx"===t.currentTab},on:{click:function(e){e.stopPropagation(),t.currentTab="jx"}}},[t._v("精选")]),n("span",{class:{active:"male"===t.currentTab},on:{click:function(e){e.stopPropagation(),t.currentTab="male"}}},[t._v("男生")]),n("span",{class:{active:"female"===t.currentTab},on:{click:function(e){e.stopPropagation(),t.currentTab="female"}}},[t._v("女生")]),n("span",{class:{active:"free"===t.currentTab},on:{click:function(e){e.stopPropagation(),t.currentTab="free"}}},[t._v("免费")]),n("span",{class:{active:"search"===t.currentTab},on:{click:function(e){e.stopPropagation(),t.currentTab="search"}}},[t._v("搜索")])]),n("Swipe",{staticClass:"banner",attrs:{height:140}},t._l(t.data.banners,(function(e,r){return n("SwipeItem",{key:r,on:{click:function(n){return t.$_detail(n,e)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.img,expression:"item.img"}],attrs:{alt:e.title}})])})),1),n("div",{staticClass:"scroll"},[n("div",{staticClass:"content"},t._l(t.data.nodes,(function(e,r){return n("div",{key:r,staticClass:"item",on:{click:function(n){return t.$_detail(n,e)}}},[n("div",{staticClass:"cover"},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.cover,expression:"item.cover"}],attrs:{alt:e.title}})]),n("div",{staticClass:"info"},[n("header",[n("h3",[t._v(t._s(e.title))]),n("div",{staticClass:"desc"},[t._v(t._s(e.shortIntro))])]),n("div",{staticClass:"detail"},[n("div",{staticClass:"author"},[n("Icon",{attrs:{name:"user-o"}}),t._v(t._s(e.author))],1),n("div",{staticClass:"tags"},[n("span",{staticClass:"tag"},[t._v(t._s(e.majorCate))]),n("span",{staticClass:"follow"},[t._v(t._s(t._f("count")(e.latelyFollower)))])])])])])})),0)])],1)},x=[],C=(n("99af"),n("4de4"),n("13d5"),n("0d03"),n("b680"),n("25f0"),n("9911"),n("96cf"),n("4b0a"),n("2bb1")),S=(n("7844"),n("5596")),T=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return function(){for(var r=this,o=arguments.length,a=new Array(o),c=0;c<o;c++)a[c]=arguments[c];clearTimeout(e),e=setTimeout((function(){return t.apply(r,a)}),n)}},$=n("229e"),j={name:"home",components:{Swipe:S["a"],SwipeItem:C["a"],Icon:h["a"]},data:function(){return{data:{},error:!1,currentTab:"jx",txt:"",suggestList:[],hotWords:[]}},created:function(){var t=this;this.bscroll=null,setTimeout((function(){console.log(123),t.$router.push({path:"search"})}),2e3)},watch:{currentTab:{handler:"fetchData",immediate:!0},txt:{handler:T((function(t){var e=this;this.$axios({method:"GET",url:"/suggest?text=".concat(t)}).then((function(t){console.log(t.data.data),1===t.data.result&&(e.suggestList=t.data.data.keywords.filter((function(t){return"bookname"===t.tag})))}))}),500)}},filters:{count:function(t){return t&&t.toString().length>=5?(t/1e4).toFixed(1)+"万人气":t+"人气"}},methods:{fetchData:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:if("search"!==this.currentTab){e.next=4;break}this.$router.push({path:"search"}),e.next=13;break;case 4:return e.prev=4,e.next=7,regeneratorRuntime.awrap(this.$axios({method:"GET",url:"/?type=".concat(this.currentTab)}).then((function(e){if(e.data.ok){var n=e.data.data,r=n.nodes,o=n.spread;t.$set(t,"data",Object.assign({},{nodes:r.reduce((function(t,e){return t.concat(e.books)}),[]),banners:o.reduce((function(t,e){return t.concat(e.advs)}),[]).filter((function(t){return"c-bookdetail"===t.type}))}))}})));case 7:e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](4),console.log(e.t0),this.error=!0;case 13:this.bscroll?this.bscroll.refresh():this.bscroll=new $["a"](".scroll",{scrollY:!0,bounceTime:800,click:!0,probeType:3});case 14:case"end":return e.stop()}}),null,this,[[4,9]])},searchBook:function(t){var e=this;console.log(t),this.$axios({url:"/search?text=".concat(t)}).then((function(t){1===t.data.result?e.suggestList=t.data.data.books:console.log(t)}))},$_detail:function(t,e){console.log(t,e),this.$router.push({path:"book-detail",query:{bookid:e._id||e.link||e.id}})}},beforeRouteLeave:function(){this.bscroll&&this.bscroll.destroy(),this.$toast.clear()}},P=j,O=(n("21bb"),Object(g["a"])(P,_,x,!1,null,null,null)),E=O.exports;i.a.use(w.a);var D=new w.a({routes:[{path:"/",name:"home",component:E,meta:{title:"首页"}},{path:"/category",name:"category",component:function(){return n.e("category").then(n.bind(null,"4886"))},meta:{title:"分类"}},{path:"/cat-sort",name:"catSort",component:function(){return n.e("catSort").then(n.bind(null,"d7b5"))},meta:{title:"分类排行"}},{path:"/book-detail",name:"BookDetail",component:function(){return n.e("bookDetail").then(n.bind(null,"1253"))},meta:{title:"书籍详情"}},{path:"/chapter",name:"chapter",component:function(){return n.e("Chapter").then(n.bind(null,"537b"))},meta:{title:"章节详情"}},{path:"/search",name:"search",components:function(){return n.e("Search").then(n.bind(null,"2d3b"))},meta:{title:"搜索"}}],scrollBehavior:function(){return{x:0,y:0}}});D.beforeEach((function(t,e,n){document.title=t.meta.title,n()}));var N=D,I=n("9483");Object(I["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("f5df1");i.a.config.productionTip=!1,i.a.use(r["a"]).use(o["a"]).use(a["a"]),i.a.config.devtools=!0,new i.a({router:N,render:function(t){return t(y)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var r=n("9c0c"),o=n.n(r);o.a},6389:function(t,e){t.exports=VueRouter},"8bbf":function(t,e){t.exports=Vue},"9c0c":function(t,e,n){},cebe:function(t,e){t.exports=axios}});