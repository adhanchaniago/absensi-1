(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{109:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r);function o(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(r,a)}var s,i,c={name:"masterdata.edit",data:function(){return{imgurl:"storage/default/icon_admin.jpg",foto:""}},mixins:[n(26).a],methods:{save:(s=a.a.mark((function e(){var t,n,r=this;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading=!0,t="/"+(t=(t=window.location.pathname).split("/"))[1],(n=new FormData).append("name",this.name),n.append("id_category",this.select),n.append("foto",this.foto),e.next=10,this.axios.post(t,n,this.config).then((function(e){console.log(e),r.setSnakbar({status:!0,pesan:e.data.message,color:"success"}),r.$router.push(t)})).catch((function(e){400==e.response.status?r.setSnakbar({color:"red",status:!0,pesan:e.response.data.message}):r.setSnakbar({status:!0,color:"red",pesan:"Terjadi Kesalahan"}),console.log(e.response)}));case 10:this.loading=!1;case 11:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,r){var a=s.apply(e,t);function i(e){o(a,n,r,i,c,"next",e)}function c(e){o(a,n,r,i,c,"throw",e)}i(void 0)}))},function(){return i.apply(this,arguments)}),eventChange:function(e){var t=this,n=e.target.files;this.foto=n[0];var r=new FileReader;r.addEventListener("load",(function(){t.imgurl=r.result})),r.readAsDataURL(this.foto)}},created:function(){this.getCategory(),this.imgurl=this.urlDefault+this.imgurl}},l=n(1),u=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-container",[n("BtnJudul",{attrs:{text:"Create Courses"}}),e._v(" "),n("v-card",{staticClass:"border-edit",attrs:{tile:""}},[n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"4","order-sm":"last","order-md":"first"}},[n("v-img",{staticStyle:{cursor:"pointer"},attrs:{src:e.imgurl,height:"300px"},on:{click:function(t){return e.$refs.foto_profile.click()}}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"8"}},[n("v-form",{ref:"form",attrs:{"lazy-validation":e.lazy},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("input",{ref:"foto_profile",staticStyle:{display:"none"},attrs:{type:"file",id:"foto_profile",accept:"image/*"},on:{change:e.eventChange}}),e._v(" "),n("label",{attrs:{for:"",align:"left"}},[e._v("New Courses")]),e._v(" "),n("v-text-field",{attrs:{rules:e.nameRules,label:"Name",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),n("v-select",{attrs:{items:e.items,rules:[function(e){return!!e||"Item is required"}],label:"Category","item-text":"description","item-value":"id",required:""},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}}),e._v(" "),n("v-row",[n("v-col",{attrs:{cols:"12",align:"right"}},[n("v-btn",{attrs:{disabled:!e.valid,color:"success",tile:"",loading:e.loading},on:{click:function(t){return e.save()}}},[e._v("\n                                    Save\n                                    ")])],1)],1)],1)],1)],1)],1)],1),e._v(" "),n("v-card-actions",{})],1)],1)],1)}),[],!1,null,"1fd96a74",null);t.default=u.exports},26:function(e,t,n){"use strict";var r=n(2),a=n(3);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.a={data:function(){return{valid:!0,lazy:!1,loading:!1,select:"",items:[],name:"",nameRules:[function(e){return!!e||"Tidak Boleh Kosong"}]}},methods:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(r.b)({setSnakbar:"snakbar/setSnakbar"}),{getCategory:function(){var e=this;this.axios.get("courses/create",this.config).then((function(t){e.items=t.data.category})).catch((function(e){return console.log(e)}))}}),mixins:[a.a],created:function(){}}}}]);
//# sourceMappingURL=19.js.map