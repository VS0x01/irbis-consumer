(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["views-Home","views-Start"],{"0fd9":function(t,n,e){"use strict";var a=e("ade3"),i=e("5530"),r=(e("caad"),e("2532"),e("99af"),e("b64b"),e("ac1f"),e("5319"),e("4ec9"),e("d3b7"),e("3ca3"),e("ddb0"),e("159b"),e("4b85"),e("2b0e")),o=e("d9f7"),s=e("80d2"),c=["sm","md","lg","xl"],l=["start","end","center"];function u(t,n){return c.reduce((function(e,a){return e[t+Object(s["D"])(a)]=n(),e}),{})}var f=function(t){return[].concat(l,["baseline","stretch"]).includes(t)},d=u("align",(function(){return{type:String,default:null,validator:f}})),p=function(t){return[].concat(l,["space-between","space-around"]).includes(t)},v=u("justify",(function(){return{type:String,default:null,validator:p}})),g=function(t){return[].concat(l,["space-between","space-around","stretch"]).includes(t)},b=u("alignContent",(function(){return{type:String,default:null,validator:g}})),y={align:Object.keys(d),justify:Object.keys(v),alignContent:Object.keys(b)},h={align:"align",justify:"justify",alignContent:"align-content"};function j(t,n,e){var a=h[t];if(null!=e){if(n){var i=n.replace(t,"");a+="-".concat(i)}return a+="-".concat(e),a.toLowerCase()}}var w=new Map;n["a"]=r["a"].extend({name:"v-row",functional:!0,props:Object(i["a"])(Object(i["a"])(Object(i["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},d),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:g}},b),render:function(t,n){var e=n.props,i=n.data,r=n.children,s="";for(var c in e)s+=String(e[c]);var l=w.get(s);return l||function(){var t,n;for(n in l=[],y)y[n].forEach((function(t){var a=e[t],i=j(n,t,a);i&&l.push(i)}));l.push((t={"no-gutters":e.noGutters,"row--dense":e.dense},Object(a["a"])(t,"align-".concat(e.align),e.align),Object(a["a"])(t,"justify-".concat(e.justify),e.justify),Object(a["a"])(t,"align-content-".concat(e.alignContent),e.alignContent),t)),w.set(s,l)}(),t(e.tag,Object(o["a"])(i,{staticClass:"row",class:l}),r)}})},7496:function(t,n,e){"use strict";var a=e("5530"),i=(e("df86"),e("7560")),r=e("58df");n["a"]=Object(r["a"])(i["a"]).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var n=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(a["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[n])}})},bb51:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"home"},[e("Start")],1)},i=[],r=e("d701"),o={name:"Home",components:{Start:r["default"]}},s=o,c=e("2877"),l=Object(c["a"])(s,a,i,!1,null,null,null);n["default"]=l.exports},d701:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",[e("v-container",{staticClass:"fill-height"},[e("v-row",{attrs:{align:"center",justify:"center"}},[e("v-btn",{attrs:{to:"/app"}},[t._v(" Start! ")])],1)],1)],1)},i=[],r={name:"Start"},o=r,s=e("2877"),c=e("6544"),l=e.n(c),u=e("7496"),f=e("8336"),d=e("a523"),p=e("0fd9"),v=Object(s["a"])(o,a,i,!1,null,null,null);n["default"]=v.exports;l()(v,{VApp:u["a"],VBtn:f["a"],VContainer:d["a"],VRow:p["a"]})},df86:function(t,n,e){}}]);
//# sourceMappingURL=views-Home.64c2008f.js.map