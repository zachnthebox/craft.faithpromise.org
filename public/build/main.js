!function(t){function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}({0:function(t,e,n){n("L7Xl"),t.exports=n("lVBP")},"8vNK":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{videoUrl:{default:null}},data:function(){return{is_playing:!1}},computed:{is_button_visible:function(){return this.videoUrl&&!this.is_playing}},watch:{play:function(t){t&&document.documentElement.classList.add("nav_black")}},methods:{play:function(){this.is_playing=!0}}}},"9fKE":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{titleEncoded:{required:!0},url:{default:null},audioUrl:{default:null},soundcloudId:{default:null}},data:function(){return{show_soundcloud:!1}},computed:{facebook_url:function(){return"https://www.facebook.com/sharer/sharer.php?u="+this.url},twitter_url:function(){return"https://twitter.com/intent/tweet?text=Check%20out%20this%20%40faithpromise+sermon,%20%27"+this.titleEncoded+"%27&url="+this.url},soundcloud_url:function(){return"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+this.soundcloudId+"&amp;color=%23df4f92&amp;inverse=true&amp;auto_play=true&amp;show_user=true"}},methods:{play_audio:function(){this.show_soundcloud=!0}}}},"9mpg":function(t,e,n){!function(e,r){t.exports=r(n("lRwf"))}(0,function(t){"use strict";function e(t){for(var e=t.hasAttributes()?t.attributes:[],n={},r=0;r<e.length;r++){var s=e[r];s.value&&(n[s.name]=""===s.value||s.value)}return n}function n(t){return Array.isArray(t)||"object"===(void 0===t?"undefined":s(t))?Object.freeze(t):t}function r(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};t.component(e.portalName||"portal",v),t.component(e.portalTargetName||"portal-target",f)}t=t&&"default"in t?t.default:t;var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},l={},c=function(){function e(t){o(this,e),this.transports=t}return i(e,[{key:"open",value:function(e){var r=e.to,s=e.from,o=e.passengers;if(r&&s&&o){e.passengers=n(o);-1!==Object.keys(this.transports).indexOf(r)?this.transports[r]=e:t.set(this.transports,r,e)}}},{key:"close",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.to,r=t.from;n&&r&&this.transports[n]&&(e||this.transports[n].from===r)&&(this.transports[n]=void 0)}},{key:"hasTarget",value:function(t){return this.transports.hasOwnProperty(t)}},{key:"hasContentFor",value:function(t){return!(!this.transports[t]||null==this.transports[t].passengers)}},{key:"getSourceFor",value:function(t){return this.transports[t]&&this.transports[t].from}},{key:"getContentFor",value:function(t){var e=this.transports[t];return e?e.passengers:void 0}}]),e}(),d=new c(l),f={abstract:!0,name:"portalTarget",props:{attributes:{type:Object},name:{type:String,required:!0},slim:{type:Boolean,default:!1},tag:{type:String,default:"div"}},data:function(){return{transports:l}},mounted:function(){this.transports[this.name]||this.$set(this.transports,this.name,void 0),this.unwatch=this.$watch(function(){return this.transports[this.name]},this.emitChange),this.updateAttributes()},updated:function(){this.updateAttributes()},beforeDestroy:function(){this.unwatch(),this.$el.innerHTML=""},methods:{updateAttributes:function(){if(this.attributes){var t=this.attributes,e=this.$el;t.class&&(t.class.trim().split(" ").forEach(function(t){e.classList.add(t)}),delete t.class);for(var n=Object.keys(t),r=0;r<n.length;r++)e.setAttribute(n[r],t[n[r]])}},emitChange:function(t,e){this.$emit("change",a({},t),a({},e))}},computed:{passengers:function(){return this.transports[this.name]&&this.transports[this.name].passengers||[]},children:function(){return 0!==this.passengers.length?this.passengers:this.$slots.default||[]},renderSlim:function(){return 1===this.children.length&&!this.attributes&&this.slim}},render:function(t){var e=this.children,n=this.tag;return this.renderSlim?e[0]:t(n,{class:"vue-portal-target"},[e])}},p="undefined"!=typeof window,h=1,v={abstract:!0,name:"portal",props:{disabled:{type:Boolean,default:!1},name:{type:String,default:function(){return String(h++)}},slim:{type:Boolean,default:!1},tag:{type:[String],default:"DIV"},targetEl:{type:p?[String,HTMLElement]:String},to:{type:String,default:function(){return String(Math.round(1e7*Math.random()))}}},mounted:function(){this.targetEl&&this.mountToTarget(),this.disabled||this.sendUpdate()},updated:function(){this.disabled?this.clear():this.sendUpdate()},beforeDestroy:function(){this.clear(),this.mountedComp&&this.mountedComp.$destroy()},watch:{to:function(t,e){e&&this.clear(e),this.sendUpdate()},targetEl:function(t,e){this.mountToTarget()}},methods:{sendUpdate:function(){this.to?this.$slots.default&&d.open({from:this.name,to:this.to,passengers:[].concat(u(this.$slots.default))}):!this.to&&this.targetEl},clear:function(t){d.close({from:this.name,to:t||this.to})},mountToTarget:function(){var n=void 0,r=this.targetEl;if("string"==typeof r)n=document.querySelector(this.targetEl);else{if(!(r instanceof HTMLElement))return;n=r}var s=e(n);if(n){var o=new t(a({},f,{parent:this,propsData:{name:this.to,tag:n.tagName,attributes:s}}));o.$mount(n),this.mountedComp=o}}},render:function(t){var e=this.$slots.default||[],n=this.tag;return e.length&&this.disabled?e.length<=1&&this.slim?e[0]:t(n,null,[e]):t(n,{class:"v-portal",style:"display: none",key:"v-portal-placeholder"},[])}};return"undefined"!=typeof window&&window.Vue&&window.Vue.use({install:r}),{install:r,Portal:v,PortalTarget:f,Wormhole:d}})},L7Xl:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("lRwf"),s=n.n(r),o=n("OMN4"),i=n.n(o),a=n("9mpg"),u=n.n(a),l=n("txCZ"),c=n.n(l),d=n("y03d"),f=n.n(d),p=n("xcFf"),h=n.n(p),v=n("YT23"),m=n.n(v);s.a.prototype.$http=i.a,s.a.use(u.a);new s.a({el:"#app",components:{seriesList:c.a,playlistItem:f.a,sermonHero:h.a,sermonTools:m.a},data:function(){return{is_nav_open:!1}},computed:{toggle_icon:function(){return this.is_nav_open?"close":"menu"}},watch:{is_nav_open:function(t){document.documentElement.classList[t?"add":"remove"]("nav-open")}},methods:{nav_open:function(){window.scrollTo(0,0),this.is_nav_open=!0},nav_close:function(){window.scrollTo(0,0),this.is_nav_open=!1},nav_toggle:function(){this.is_nav_open?this.nav_close():this.nav_open()}}})},OMN4:function(t,e){t.exports=axios},"VU/8":function(t,e){t.exports=function(t,e,n,r,s){var o,i=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(o=t,i=t.default);var u="function"==typeof i?i.options:i;e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r);var l;if(s?(l=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},u._ssrRegister=l):n&&(l=n),l){var c=u.functional,d=c?u.render:u.beforeCreate;c?u.render=function(t,e){return l.call(e),d(t,e)}:u.beforeCreate=d?[].concat(d,l):[l]}return{esModule:o,exports:i,options:u}}},YT23:function(t,e,n){var r=n("VU/8")(n("9fKE"),n("ljoa"),null,null,null);t.exports=r.exports},a81O:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("OMN4"),s=n.n(r),o={paginate:function(t){return s.a.get("/sermons",{params:t})}},i=2;e.default={data:function(){return{more:[],is_loading:!1}},methods:{load_more:function(){var t=this;this.is_loading=!0,o.paginate({page:i}).then(function(e){t.more.push(e.data),i++,t.is_loading=!1}).catch(function(e){t.is_loading=!1})}}}},hTvr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{id:{required:!0},title:{required:!0},date:{required:!0},url:{required:!0},videoUrl:{default:null}},data:function(){return{active_sermon:null}},methods:{open_sermon:function(t){window.location.href=this.url},open_video:function(t){alert("video: "+t)}}}},ib0Q:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SermonHero"},[t.is_playing?n("div",{staticClass:"SermonHero-player"},[n("div",{staticClass:"SermonHero-video"},[n("iframe",{attrs:{src:t.videoUrl,frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])]):t._e(),t._v(" "),t.is_playing?t._e():n("div",[t._t("default")],2),t._v(" "),t.is_button_visible?n("div",{staticClass:"SermonHero-button image-fg-vibrant-dark",on:{click:t.play}},[n("svg",[n("use",{attrs:{"xlink:href":"/assets/icons.svg#play"}})])]):t._e()])},staticRenderFns:[]}},lRwf:function(t,e){t.exports=Vue},lVBP:function(t,e){},ljoa:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Sermon-tools image-fg-muted image-fg-1 image-fg-vibrant-dark"},[n("ul",{staticClass:"SermonTools"},[n("li",[t.soundcloudId?n("a",{attrs:{href:t.audioUrl},on:{click:function(e){e.preventDefault(),t.play_audio(e)}}},[n("svg",[n("use",{attrs:{"xlink:href":"/assets/icons.svg#audio"}})]),t._v("\n        Audio\n      ")]):t._e()]),t._v(" "),n("li",[n("a",{attrs:{href:""}},[n("svg",[n("use",{attrs:{"xlink:href":"/assets/icons.svg#group-study"}})]),t._v("\n        Group Study\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:t.facebook_url,target:"_blank"}},[n("svg",[n("use",{attrs:{"xlink:href":"/assets/icons.svg#facebook"}})]),t._v("\n        Share\n      ")])]),t._v(" "),n("li",[n("a",{attrs:{href:t.twitter_url,target:"_blank"}},[n("svg",[n("use",{attrs:{"xlink:href":"/assets/icons.svg#twitter"}})]),t._v("\n        Tweet\n      ")])])]),t._v(" "),t.show_soundcloud?n("div",{staticClass:"Sermon-audio"},[n("iframe",{attrs:{width:"100%",height:"20",scrolling:"no",frameborder:"no",src:t.soundcloud_url}})]):t._e()])},staticRenderFns:[]}},pEVb:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default"),t._v(" "),t._l(t.more,function(e){return n("div",{domProps:{innerHTML:t._s(e)}})}),t._v(" "),n("div",{staticClass:"LoadMore"},[n("button",{staticClass:"Button",attrs:{disabled:t.is_loading},on:{click:t.load_more}},[t._v(t._s(t.is_loading?"Loading...":"Load More"))])])],2)},staticRenderFns:[]}},txCZ:function(t,e,n){var r=n("VU/8")(n("a81O"),n("pEVb"),null,null,null);t.exports=r.exports},wOBa:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Playlist-item",on:{click:function(e){t.open_sermon(t.id)}}},[n("div",{staticClass:"Playlist-play"},[n("svg",[n("use",{attrs:{"xlink:href":"/assets/icons.svg#play-o"}})])]),t._v(" "),n("div",{staticClass:"Playlist-title",attrs:{title:t.title}},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"Playlist-date"},[t._v(t._s(t.date))]),t._v(" "),n("a",{staticClass:"Playlist-more",attrs:{href:t.url}},[t._v("View")]),t._v(" "),n("div",{staticClass:"Playlist-arrow"},[n("svg",[n("use",{attrs:{"xlink:href":"/assets/icons.svg#chevron-right"}})])])])},staticRenderFns:[]}},xcFf:function(t,e,n){var r=n("VU/8")(n("8vNK"),n("ib0Q"),null,null,null);t.exports=r.exports},y03d:function(t,e,n){var r=n("VU/8")(n("hTvr"),n("wOBa"),null,null,null);t.exports=r.exports}});