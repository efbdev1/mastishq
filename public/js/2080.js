"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2080],{15422:(t,e,s)=>{s.d(e,{Z:()=>o});const n={props:["on"]};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{"leave-active-class":"transition ease-in duration-1000","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.on,expression:"on"}],staticClass:"text-gray-600"},[t._t("default")],2)])],1)}),[],!1,null,null,null).exports},5523:(t,e,s)=>{s.d(e,{Z:()=>o});const n={components:{ArcSectionTitle:s(34073).Z}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md:grid md:grid-cols-3 md:gap-6"},[s("arc-section-title",{scopedSlots:t._u([{key:"title",fn:function(){return[t._t("title")]},proxy:!0},{key:"description",fn:function(){return[t._t("description")]},proxy:!0}],null,!0)}),t._v(" "),s("div",{staticClass:"mt-5 md:mt-0 md:col-span-2"},[s("div",{staticClass:"px-4 py-5 sm:p-6 bg-white shadow sm:rounded-sm"},[t._t("content")],2)])],1)}),[],!1,null,null,null).exports},93046:(t,e,s)=>{s.d(e,{Z:()=>o});const n={props:{type:{type:String,default:"submit"}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-sm font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray transition ease-in-out duration-150",attrs:{type:t.type}},[t._t("default")],2)}),[],!1,null,null,null).exports},25888:(t,e,s)=>{s.d(e,{Z:()=>c});var n=s(93046),o=s(88749),a=s(6985),r=s(26216),i=s(9556);const l={props:{title:{default:"Confirm Password"},content:{default:"For your security, please confirm your password to continue."},button:{default:"Confirm"}},components:{JetButton:n.Z,JetDialogModal:o.Z,JetInput:a.Z,JetInputError:r.Z,JetSecondaryButton:i.Z},data:function(){return{confirmingPassword:!1,form:{password:"",error:""}}},methods:{startConfirmingPassword:function(){var t=this;axios.get(route("password.confirmation")).then((function(e){e.data.confirmed?t.$emit("confirmed"):(t.confirmingPassword=!0,setTimeout((function(){return t.$refs.password.focus()}),250))}))},confirmPassword:function(){var t=this;this.form.processing=!0,axios.post(route("password.confirm"),{password:this.form.password}).then((function(){t.form.processing=!1,t.closeModal(),t.$nextTick((function(){return t.$emit("confirmed")}))})).catch((function(e){t.form.processing=!1,t.form.error=e.response.data.errors.password[0],t.$refs.password.focus()}))},closeModal:function(){this.confirmingPassword=!1,this.form.password="",this.form.error=""}}};const c=(0,s(51900).Z)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",[s("span",{on:{click:t.startConfirmingPassword}},[t._t("default")],2),t._v(" "),s("jet-dialog-modal",{attrs:{show:t.confirmingPassword},on:{close:t.closeModal},scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n            "+t._s(t.title)+"\n        ")]},proxy:!0},{key:"content",fn:function(){return[t._v("\n            "+t._s(t.content)+"\n\n            "),s("div",{staticClass:"mt-4"},[s("jet-input",{ref:"password",staticClass:"mt-1 block w-3/4",attrs:{type:"password",placeholder:"Password"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.confirmPassword(e)}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),s("jet-input-error",{staticClass:"mt-2",attrs:{message:t.form.error}})],1)]},proxy:!0},{key:"footer",fn:function(){return[s("jet-secondary-button",{nativeOn:{click:function(e){return t.closeModal(e)}}},[t._v("\n                Nevermind\n            ")]),t._v(" "),s("jet-button",{staticClass:"ml-2",class:{"opacity-25":t.form.processing},attrs:{disabled:t.form.processing},nativeOn:{click:function(e){return t.confirmPassword(e)}}},[t._v("\n                "+t._s(t.button)+"\n            ")])]},proxy:!0}])})],1)}),[],!1,null,null,null).exports},88749:(t,e,s)=>{s.d(e,{Z:()=>o});const n={components:{Modal:s(10116).Z},props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.$emit("close")}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("modal",{attrs:{show:t.show,"max-width":t.maxWidth,closeable:t.closeable},on:{close:t.close}},[s("div",{staticClass:"px-6 py-4"},[s("div",{staticClass:"text-lg"},[t._t("title")],2),t._v(" "),s("div",{staticClass:"mt-4"},[t._t("content")],2)]),t._v(" "),s("div",{staticClass:"px-6 py-4 bg-gray-100 text-right"},[t._t("footer")],2)])}),[],!1,null,null,null).exports},6985:(t,e,s)=>{s.d(e,{Z:()=>o});const n={props:["value"],methods:{focus:function(){this.$refs.input.focus()}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{ref:"input",staticClass:"text-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-sm shadow-sm",domProps:{value:t.value},on:{input:function(e){return t.$emit("input",e.target.value)}}})}),[],!1,null,null,null).exports},26216:(t,e,s)=>{s.d(e,{Z:()=>o});const n={props:["message"]};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.message,expression:"message"}]},[s("p",{staticClass:"text-red-600 text-sm"},[t._v("\n        "+t._s(t.message)+"\n    ")])])}),[],!1,null,null,null).exports},10116:(t,e,s)=>{s.d(e,{Z:()=>o});const n={props:{show:{default:!1},maxWidth:{default:"2xl"},closeable:{default:!0}},methods:{close:function(){this.closeable&&this.$emit("close")}},watch:{show:{immediate:!0,handler:function(t){document.body.style.overflow=t?"hidden":null}}},created:function(){var t=this,e=function(e){"Escape"===e.key&&t.show&&t.close()};document.addEventListener("keydown",e),this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)}))},computed:{maxWidthClass:function(){return{sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[this.maxWidth]}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("portal",{attrs:{to:"modal"}},[s("transition",{attrs:{"leave-active-class":"duration-200"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0"},[s("transition",{attrs:{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0","enter-to-class":"opacity-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100","leave-to-class":"opacity-0"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"fixed inset-0 transform transition-all",on:{click:t.close}},[s("div",{staticClass:"absolute inset-0 bg-gray-500 opacity-75"})])]),t._v(" "),s("transition",{attrs:{"enter-active-class":"ease-out duration-300","enter-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95","enter-to-class":"opacity-100 translate-y-0 sm:scale-100","leave-active-class":"ease-in duration-200","leave-class":"opacity-100 translate-y-0 sm:scale-100","leave-to-class":"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"mt-16 mb-6 bg-white rounded-sm overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto",class:t.maxWidthClass},[t._t("default")],2)])],1)])],1)}),[],!1,null,null,null).exports},9556:(t,e,s)=>{s.d(e,{Z:()=>o});const n={props:{type:{type:String,default:"button"}}};const o=(0,s(51900).Z)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{staticClass:"inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-sm font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150",attrs:{type:t.type}},[t._t("default")],2)}),[],!1,null,null,null).exports},34073:(t,e,s)=>{s.d(e,{Z:()=>n});const n=(0,s(51900).Z)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"md:col-span-1"},[s("div",{staticClass:"px-4 sm:px-0"},[s("h3",{staticClass:"text-base font-medium text-gray-900"},[t._t("title")],2),t._v(" "),s("p",{staticClass:"mt-1 text-sm text-gray-600"},[t._t("description")],2)])])}),[],!1,null,null,null).exports},42080:(t,e,s)=>{s.r(e),s.d(e,{default:()=>c});var n=s(15422),o=s(5523),a=s(93046),r=s(25888),i=s(9556);const l={components:{ArcActionMessage:n.Z,ArcActionSection:o.Z,ArcButton:a.Z,ArcConfirmsPassword:r.Z,ArcSecondaryButton:i.Z},data:function(){return{loading:!1}},methods:{expireSchedules:function(){var t=this;this.loading=!0,this.$inertia.post(route("expire_schedules"),{},{preserveScroll:!0,onSuccess:function(){return Promise.all([t.loading=!1])},onFinish:function(){return t.loading=!1}})}}};const c=(0,s(51900).Z)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("arc-action-section",{scopedSlots:t._u([{key:"title",fn:function(){return[t._v("\n        "+t._s(t.__("Expire Schedules"))+"\n    ")]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"max-w-xl text-sm text-gray-600"},[t._v("\n            "+t._s(t.__("expire_schedules_message"))+"\n        ")]),t._v(" "),s("div",{staticClass:"flex items-center mt-5"},[s("arc-confirms-password",{on:{confirmed:t.expireSchedules}},[s("arc-button",{class:{"opacity-25":t.loading},attrs:{type:"button",disabled:t.loading}},[t._v("\n                    "+t._s(t.__("Mark Completed Schedules as Expired"))+"\n                ")])],1)],1)]},proxy:!0}])})}),[],!1,null,null,null).exports}}]);