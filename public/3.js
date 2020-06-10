(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{108:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a);function i(t,e,n,a,r,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,r)}var o,s,c={name:"courses",mixins:[n(4).a],methods:{ChangeStatus:(o=r.a.mark((function t(e){var n,a,i,o,s=this;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.data.find((function(t){return t.id===e})),a=this.data.findIndex((function(t){return t.id===e})),n.loading=!0,this.data.splice(a,1,n),(i=new FormData).append("id",e),o=window.location.pathname+"/status",t.next=9,this.axios.post(o,i,this.config).then((function(t){n.status=!n.status,n.loading=!1,s.data.splice(a,1,n)})).catch((function(t){console.log(t.response)}));case 9:this.data[a].loading=!1;case 10:case"end":return t.stop()}}),t,this)})),s=function(){var t=this,e=arguments;return new Promise((function(n,a){var r=o.apply(t,e);function s(t){i(r,n,a,s,c,"next",t)}function c(t){i(r,n,a,s,c,"throw",t)}s(void 0)}))},function(t){return s.apply(this,arguments)})}},l=n(1),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[t.loading?n("Progress"):t._e(),t._v(" "),t.loading?t._e():n("v-container",[n("BtnJudul",{attrs:{text:"Courses Management"}}),t._v(" "),n("v-card",{staticClass:"border-edit",attrs:{tile:""}},[n("v-card-text",{staticClass:"text-center"},[n("v-container",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"6"}},[n("v-text-field",{attrs:{label:"Search",color:"grey darken-4"},on:{keyup:t.go},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6",align:"right"}},[n("v-btn",{attrs:{color:"primary",to:t.urlcreate,small:"",tile:""}},[t._v("\n                                Create\n                            ")])],1)],1)],1),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",{staticClass:"text-left"},[t._v("Image")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Name Courses")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Category")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Status")]),t._v(" "),n("th",{staticClass:"text-left"},[t._v("Action")])])]),t._v(" "),n("tbody",t._l(t.data,(function(e){return n("tr",{key:e.id},[n("td",{staticClass:"text-left"},[n("v-img",{attrs:{src:e.foto_courses,height:"80px",width:"80px"}})],1),t._v(" "),n("td",{staticClass:"text-left"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"text-left"},[t._v(t._s(e.category.description))]),t._v(" "),n("td",{staticClass:"text-left"},[0==e.status?n("v-btn",{attrs:{color:"","x-small":"",dark:"",loading:!!e.loading&&e.loading},on:{click:function(n){return t.ChangeStatus(e.id)}}},[t._v("\n                                    Non-Active\n                                ")]):t._e(),t._v(" "),1==e.status?n("v-btn",{attrs:{color:"success","x-small":"",dark:"",loading:!!e.loading&&e.loading},on:{click:function(n){return t.ChangeStatus(e.id)}}},[t._v("\n                                    Active\n                                ")]):t._e()],1),t._v(" "),n("td",{staticClass:"text-left",attrs:{width:"30%"}},[n("v-btn",{attrs:{color:"success",fab:"","x-small":"",dark:""},on:{click:function(n){return t.edit(e.id)}}},[n("v-icon",[t._v("mdi-circle-edit-outline")])],1),t._v(" "),n("v-btn",{attrs:{color:"error",fab:"","x-small":""},on:{click:function(n){return t.dialogDelete(e.id)}}},[n("v-icon",[t._v("mdi-delete-outline")])],1)],1)])})),0)]},proxy:!0}],null,!1,717989764)})],1),t._v(" "),n("div",{staticClass:"text-center"},[n("v-pagination",{attrs:{length:t.lengthpage,"total-visible":7,color:"grey darken-4"},on:{input:t.go},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),t._v(" "),n("v-card-actions",{})],1),t._v(" "),n("v-dialog",{attrs:{"max-width":"340"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",[t._v("Apa anda yakin menghapus ?")]),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{text:""},on:{click:function(e){t.dialog=!1}}},[t._v("\n                Cancel\n            ")]),t._v(" "),n("v-btn",{attrs:{color:"red",text:""},on:{click:function(e){return t.deleteData()}}},[t._v("\n                Delete\n            ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=u.exports},13:function(t,e,n){"use strict";var a=n(14),r=n.n(a);e.default=r.a},14:function(t,e){},15:function(t,e,n){var a=n(45);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(8)(a,r);a.locals&&(t.exports=a.locals)},30:function(t,e,n){"use strict";var a=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center mx-auto"},[e("v-progress-circular",{staticClass:"mx-auto",attrs:{indeterminate:"",color:"grey accent-4",size:200}})],1)},r=[];n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return r}))},32:function(t,e,n){"use strict";var a=n(30),r=n(13),i=(n(44),n(1)),o=Object(i.a)(r.default,a.a,a.b,!1,null,"407680ad",null);e.default=o.exports},4:function(t,e,n){"use strict";var a,r,i=n(0),o=n.n(i),s=n(32),c=n(2),l=n(3);function u(t,e,n,a,r,i,o){try{var s=t[i](o),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(a,r)}function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function v(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={data:function(){return{data:[],page:null,lengthpage:null,loading:!0,keyword:"",urlcreate:"",url:"",dialog:!1,idDelete:null}},components:{Progress:s.default},mixins:[l.a],methods:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){v(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},Object(c.b)({setSnakbar:"snakbar/setSnakbar"}),{go:(a=o.a.mark((function t(){var e,n=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.url,e=this.page>1?e+"?page="+this.page+"&keyword="+this.keyword:e+"?keyword="+this.keyword,t.next=4,this.axios.get(e,this.config).then((function(t){n.data=t.data.data,n.page=t.data.current_page,n.lengthpage=t.data.last_page})).catch((function(t){console.log(t.response)}));case 4:this.loading=!1;case 5:case"end":return t.stop()}}),t,this)})),r=function(){var t=this,e=arguments;return new Promise((function(n,r){var i=a.apply(t,e);function o(t){u(i,n,r,o,s,"next",t)}function s(t){u(i,n,r,o,s,"throw",t)}o(void 0)}))},function(){return r.apply(this,arguments)}),edit:function(t){var e=this.url+"/".concat(t,"/edit");console.log(e),this.$router.push(e)},deleteData:function(){var t=this,e=this.url+"/".concat(this.idDelete);this.axios.delete(e,this.config).then((function(e){console.log(e),t.setSnakbar({color:"success",pesan:e.data.message,status:!0});var n=t.data.map((function(t){return t.id})).indexOf(t.idDelete);t.data.splice(n,1),t.dialog=!1})).catch((function(e){console.log(e.response),t.setSnakbar({pesan:e.response.data.message,status:!0,color:"red"})}))},dialogDelete:function(t){this.idDelete=t,this.dialog=!0}}),mounted:function(){},created:function(){this.url=window.location.pathname,this.go(),this.urlcreate=this.url+"/create"}}},44:function(t,e,n){"use strict";var a=n(15);n.n(a).a},45:function(t,e,n){(t.exports=n(7)(!1)).push([t.i,"\n.v-progress-circular[data-v-407680ad]{\n  \tmargin: 1rem;\n  \tmargin-top:170px !important;\n}\n/* .v-application .primary--text{\n      color: #4caf50 !important;\n\n  } */\n.v-progress-circular__overlay[data-v-407680ad]{\n     text-align: center !important;\n}\n",""])}}]);
//# sourceMappingURL=3.js.map