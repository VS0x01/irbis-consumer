(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["default-app-bar~default-drawer~views-Author~views-AuthorsList~views-Error~views-Home~views-Start"],{"1c87":function(e,t,i){"use strict";var n=i("ade3"),a=i("5530"),s=(i("9911"),i("498a"),i("99af"),i("ac1f"),i("5319"),i("2b0e")),r=i("5607"),o=i("80d2");t["a"]=s["a"].extend({name:"routable",directives:{Ripple:r["a"]},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:function(){return{isActive:!1,proxyClass:""}},computed:{classes:function(){var e={};return this.to||(this.activeClass&&(e[this.activeClass]=this.isActive),this.proxyClass&&(e[this.proxyClass]=this.isActive)),e},computedRipple:function(){var e;return null!=(e=this.ripple)?e:!this.disabled&&this.isClickable},isClickable:function(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink:function(){return this.to||this.href||this.link},styles:function(){return{}}},watch:{$route:"onRouteChange"},methods:{click:function(e){this.$emit("click",e)},generateRouteLink:function(){var e,t,i=this.exact,s=(e={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}]},Object(n["a"])(e,this.to?"nativeOn":"on",Object(a["a"])(Object(a["a"])({},this.$listeners),{},{click:this.click})),Object(n["a"])(e,"ref","link"),e);if("undefined"===typeof this.exact&&(i="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){var r=this.activeClass,o=this.exactActiveClass||r;this.proxyClass&&(r="".concat(r," ").concat(this.proxyClass).trim(),o="".concat(o," ").concat(this.proxyClass).trim()),t=this.nuxt?"nuxt-link":"router-link",Object.assign(s.props,{to:this.to,exact:i,exactPath:this.exactPath,activeClass:r,exactActiveClass:o,append:this.append,replace:this.replace})}else t=(this.href?"a":this.tag)||"div","a"===t&&this.href&&(s.attrs.href=this.href);return this.target&&(s.attrs.target=this.target),{tag:t,data:s}},onRouteChange:function(){var e=this;if(this.to&&this.$refs.link&&this.$route){var t="".concat(this.activeClass," ").concat(this.proxyClass||"").trim(),i="_vnode.data.class.".concat(t);this.$nextTick((function(){Object(o["o"])(e.$refs.link,i)&&e.toggle()}))}},toggle:function(){}}})},"24b2":function(e,t,i){"use strict";i("a9e3");var n=i("80d2"),a=i("2b0e");t["a"]=a["a"].extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var e={},t=Object(n["g"])(this.height),i=Object(n["g"])(this.minHeight),a=Object(n["g"])(this.minWidth),s=Object(n["g"])(this.maxHeight),r=Object(n["g"])(this.maxWidth),o=Object(n["g"])(this.width);return t&&(e.height=t),i&&(e.minHeight=i),a&&(e.minWidth=a),s&&(e.maxHeight=s),r&&(e.maxWidth=r),o&&(e.width=o),e}}})},"25a8":function(e,t,i){},3206:function(e,t,i){"use strict";i.d(t,"a",(function(){return o}));var n=i("ade3"),a=(i("99af"),i("2b0e")),s=i("d9bd");function r(e,t){return function(){return Object(s["c"])("The ".concat(e," component must be used inside a ").concat(t))}}function o(e,t,i){var s=t&&i?{register:r(t,i),unregister:r(t,i)}:null;return a["a"].extend({name:"registrable-inject",inject:Object(n["a"])({},e,{default:s})})}},"4e82":function(e,t,i){"use strict";i.d(t,"a",(function(){return s}));var n=i("ade3"),a=i("3206");function s(e,t,i){return Object(a["a"])(e,t,i).extend({name:"groupable",props:{activeClass:{type:String,default:function(){if(this[e])return this[e].activeClass}},disabled:Boolean},data:function(){return{isActive:!1}},computed:{groupClasses:function(){return this.activeClass?Object(n["a"])({},this.activeClass,this.isActive):{}}},created:function(){this[e]&&this[e].register(this)},beforeDestroy:function(){this[e]&&this[e].unregister(this)},methods:{toggle:function(){this.$emit("change")}}})}s("itemGroup")},5607:function(e,t,i){"use strict";i("a4d3"),i("e01a"),i("d3b7"),i("25f0"),i("b0c0"),i("99af"),i("a9e3"),i("7435");var n=i("80d2"),a=Symbol("rippleStop"),s=80;function r(e,t){e.style.transform=t,e.style.webkitTransform=t}function o(e,t){e.style.opacity=t.toString()}function c(e){return"TouchEvent"===e.constructor.name}function l(e){return"KeyboardEvent"===e.constructor.name}var u=function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=0,a=0;if(!l(e)){var s=t.getBoundingClientRect(),r=c(e)?e.touches[e.touches.length-1]:e;n=r.clientX-s.left,a=r.clientY-s.top}var o=0,u=.3;t._ripple&&t._ripple.circle?(u=.15,o=t.clientWidth/2,o=i.center?o:o+Math.sqrt(Math.pow(n-o,2)+Math.pow(a-o,2))/4):o=Math.sqrt(Math.pow(t.clientWidth,2)+Math.pow(t.clientHeight,2))/2;var d="".concat((t.clientWidth-2*o)/2,"px"),p="".concat((t.clientHeight-2*o)/2,"px"),h=i.center?d:"".concat(n-o,"px"),v=i.center?p:"".concat(a-o,"px");return{radius:o,scale:u,x:h,y:v,centerX:d,centerY:p}},d={show:function(e,t){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(t._ripple&&t._ripple.enabled){var n=document.createElement("span"),a=document.createElement("span");n.appendChild(a),n.className="v-ripple__container",i.class&&(n.className+=" ".concat(i.class));var s=u(e,t,i),c=s.radius,l=s.scale,d=s.x,p=s.y,h=s.centerX,v=s.centerY,f="".concat(2*c,"px");a.className="v-ripple__animation",a.style.width=f,a.style.height=f,t.appendChild(n);var m=window.getComputedStyle(t);m&&"static"===m.position&&(t.style.position="relative",t.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),r(a,"translate(".concat(d,", ").concat(p,") scale3d(").concat(l,",").concat(l,",").concat(l,")")),o(a,0),a.dataset.activated=String(performance.now()),setTimeout((function(){a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),r(a,"translate(".concat(h,", ").concat(v,") scale3d(1,1,1)")),o(a,.25)}),0)}},hide:function(e){if(e&&e._ripple&&e._ripple.enabled){var t=e.getElementsByClassName("v-ripple__animation");if(0!==t.length){var i=t[t.length-1];if(!i.dataset.isHiding){i.dataset.isHiding="true";var n=performance.now()-Number(i.dataset.activated),a=Math.max(250-n,0);setTimeout((function(){i.classList.remove("v-ripple__animation--in"),i.classList.add("v-ripple__animation--out"),o(i,0),setTimeout((function(){var t=e.getElementsByClassName("v-ripple__animation");1===t.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),i.parentNode&&e.removeChild(i.parentNode)}),300)}),a)}}}}};function p(e){return"undefined"===typeof e||!!e}function h(e){var t={},i=e.currentTarget;if(i&&i._ripple&&!i._ripple.touched&&!e[a]){if(e[a]=!0,c(e))i._ripple.touched=!0,i._ripple.isTouch=!0;else if(i._ripple.isTouch)return;if(t.center=i._ripple.centered||l(e),i._ripple.class&&(t.class=i._ripple.class),c(e)){if(i._ripple.showTimerCommit)return;i._ripple.showTimerCommit=function(){d.show(e,i,t)},i._ripple.showTimer=window.setTimeout((function(){i&&i._ripple&&i._ripple.showTimerCommit&&(i._ripple.showTimerCommit(),i._ripple.showTimerCommit=null)}),s)}else d.show(e,i,t)}}function v(e){var t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((function(){v(e)})));window.setTimeout((function(){t._ripple&&(t._ripple.touched=!1)})),d.hide(t)}}function f(e){var t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}var m=!1;function b(e){m||e.keyCode!==n["w"].enter&&e.keyCode!==n["w"].space||(m=!0,h(e))}function g(e){m=!1,v(e)}function _(e){!0===m&&(m=!1,v(e))}function w(e,t,i){var n=p(t.value);n||d.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=n;var a=t.value||{};a.center&&(e._ripple.centered=!0),a.class&&(e._ripple.class=t.value.class),a.circle&&(e._ripple.circle=a.circle),n&&!i?(e.addEventListener("touchstart",h,{passive:!0}),e.addEventListener("touchend",v,{passive:!0}),e.addEventListener("touchmove",f,{passive:!0}),e.addEventListener("touchcancel",v),e.addEventListener("mousedown",h),e.addEventListener("mouseup",v),e.addEventListener("mouseleave",v),e.addEventListener("keydown",b),e.addEventListener("keyup",g),e.addEventListener("blur",_),e.addEventListener("dragstart",v,{passive:!0})):!n&&i&&y(e)}function y(e){e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",h),e.removeEventListener("touchend",v),e.removeEventListener("touchmove",f),e.removeEventListener("touchcancel",v),e.removeEventListener("mouseup",v),e.removeEventListener("mouseleave",v),e.removeEventListener("keydown",b),e.removeEventListener("keyup",g),e.removeEventListener("dragstart",v),e.removeEventListener("blur",_)}function j(e,t,i){w(e,t,!1)}function x(e){delete e._ripple,y(e)}function O(e,t){if(t.value!==t.oldValue){var i=p(t.oldValue);w(e,t,i)}}var C={bind:j,unbind:x,update:O};t["a"]=C},7435:function(e,t,i){},"7e2b":function(e,t,i){"use strict";var n=i("2b0e");function a(e){return function(t,i){for(var n in i)Object.prototype.hasOwnProperty.call(t,n)||this.$delete(this.$data[e],n);for(var a in t)this.$set(this.$data[e],a,t[a])}}t["a"]=n["a"].extend({data:function(){return{attrs$:{},listeners$:{}}},created:function(){this.$watch("$attrs",a("attrs$"),{immediate:!0}),this.$watch("$listeners",a("listeners$"),{immediate:!0})}})},"8dd9":function(e,t,i){"use strict";var n=i("5530"),a=(i("25a8"),i("7e2b")),s=i("a9ad"),r=i("c995"),o=i("24b2"),c=i("a236"),l=i("7560"),u=i("58df");t["a"]=Object(u["a"])(a["a"],s["a"],r["a"],o["a"],c["a"],l["a"]).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes:function(){return Object(n["a"])(Object(n["a"])(Object(n["a"])({"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped},this.themeClasses),this.elevationClasses),this.roundedClasses)},styles:function(){return this.measurableStyles}},render:function(e){var t={class:this.classes,style:this.styles,on:this.listeners$};return e(this.tag,this.setBackgroundColor(this.color,t),this.$slots.default)}})},"90a2":function(e,t,i){"use strict";var n=i("53ca");function a(e,t){if("undefined"!==typeof window&&"IntersectionObserver"in window){var i=t.modifiers||{},a=t.value,r="object"===Object(n["a"])(a)?a:{handler:a,options:{}},o=r.handler,c=r.options,l=new IntersectionObserver((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(e._observe){var a=t.some((function(e){return e.isIntersecting}));!o||i.quiet&&!e._observe.init||i.once&&!a&&e._observe.init||o(t,n,a),a&&i.once?s(e):e._observe.init=!0}}),c);e._observe={init:!1,observer:l},l.observe(e)}}function s(e){e._observe&&(e._observe.observer.unobserve(e),delete e._observe)}var r={inserted:a,unbind:s};t["a"]=r},9911:function(e,t,i){"use strict";var n=i("23e7"),a=i("857a"),s=i("af03");n({target:"String",proto:!0,forced:s("link")},{link:function(e){return a(this,"a","href",e)}})},a236:function(e,t,i){"use strict";var n=i("ade3"),a=i("b85c"),s=(i("ac1f"),i("1276"),i("a15b"),i("2b0e"));t["a"]=s["a"].extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses:function(){var e=[],t="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)e.push("rounded-0");else if("string"===typeof t){var i,s=t.split(" "),r=Object(a["a"])(s);try{for(r.s();!(i=r.n()).done;){var o=i.value;e.push("rounded-".concat(o))}}catch(c){r.e(c)}finally{r.f()}}else t&&e.push("rounded");return e.length>0?Object(n["a"])({},e.join(" "),!0):{}}}})},a9ad:function(e,t,i){"use strict";var n=i("3835"),a=i("ade3"),s=i("5530"),r=(i("ac1f"),i("1276"),i("498a"),i("d3b7"),i("25f0"),i("2b0e")),o=i("d9bd"),c=i("7bc6");t["a"]=r["a"].extend({name:"colorable",props:{color:String},methods:{setBackgroundColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"string"===typeof t.style?(Object(o["b"])("style must be an object",this),t):"string"===typeof t.class?(Object(o["b"])("class must be an object",this),t):(Object(c["d"])(e)?t.style=Object(s["a"])(Object(s["a"])({},t.style),{},{"background-color":"".concat(e),"border-color":"".concat(e)}):e&&(t.class=Object(s["a"])(Object(s["a"])({},t.class),{},Object(a["a"])({},e,!0))),t)},setTextColor:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"===typeof t.style)return Object(o["b"])("style must be an object",this),t;if("string"===typeof t.class)return Object(o["b"])("class must be an object",this),t;if(Object(c["d"])(e))t.style=Object(s["a"])(Object(s["a"])({},t.style),{},{color:"".concat(e),"caret-color":"".concat(e)});else if(e){var i=e.toString().trim().split(" ",2),r=Object(n["a"])(i,2),l=r[0],u=r[1];t.class=Object(s["a"])(Object(s["a"])({},t.class),{},Object(a["a"])({},l+"--text",!0)),u&&(t.class["text--"+u]=!0)}return t}}})},c7cd:function(e,t,i){"use strict";var n=i("23e7"),a=i("857a"),s=i("af03");n({target:"String",proto:!0,forced:s("fixed")},{fixed:function(){return a(this,"tt","","")}})},c995:function(e,t,i){"use strict";var n=i("ade3"),a=(i("a9e3"),i("2b0e"));t["a"]=a["a"].extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation:function(){return this.elevation},elevationClasses:function(){var e=this.computedElevation;return null==e||isNaN(parseInt(e))?{}:Object(n["a"])({},"elevation-".concat(this.elevation),!0)}}})},f2e7:function(e,t,i){"use strict";i.d(t,"b",(function(){return s}));var n=i("ade3"),a=i("2b0e");function s(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"value",i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"input";return a["a"].extend({name:"toggleable",model:{prop:t,event:i},props:Object(n["a"])({},t,{required:!1}),data:function(){return{isActive:!!this[t]}},watch:(e={},Object(n["a"])(e,t,(function(e){this.isActive=!!e})),Object(n["a"])(e,"isActive",(function(e){!!e!==this[t]&&this.$emit(i,e)})),e)})}var r=s();t["a"]=r},fe6c:function(e,t,i){"use strict";i.d(t,"b",(function(){return r}));var n=i("2b0e"),a=i("80d2"),s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return n["a"].extend({name:"positionable",props:e.length?Object(a["m"])(s,e):s})}t["a"]=r()}}]);
//# sourceMappingURL=default-app-bar~default-drawer~views-Author~views-AuthorsList~views-Error~views-Home~views-Start.a281c35c.js.map