(()=>{"use strict";var e={7373:(e,t,o)=>{o(8964);var a=o(1957),l=o(1947),s=o(499),r=o(9835);function n(e,t,o,a,l,s){const n=(0,r.up)("router-view");return(0,r.wg)(),(0,r.j4)(n)}const i=(0,r.aZ)({name:"App"});var c=o(1639);const d=(0,c.Z)(i,[["render",n]]),u=d;var p=o(3340),m=o(1809);const h=(0,p.h)((()=>{const e=(0,m.WB)();return e}));var g=o(8339);const f=e=>((0,r.dD)("data-v-820369c8"),e=e(),(0,r.Cn)(),e),b={class:"row"},w=f((()=>(0,r._)("div",{class:"col-1 col-sm-4"},null,-1))),v={class:"col-10 col-sm-4"},y=f((()=>(0,r._)("div",{class:"text-subtitle1 text-center q-pt-xs text-grey"},"CUENTA",-1))),_=f((()=>(0,r._)("div",{class:"text-h2 text-center q-pa-xs text-black text-bold"},"Tu Cuenta",-1))),q={class:"row"},C={class:"col-12"},k={class:"col-12 q-pt-lg"},x={class:"col-12 q-py-xs"},P={class:"col-12 q-pt-xs"},A={class:"col-12 q-pt-xs"},$=f((()=>(0,r._)("div",{class:"col-12 text-center q-py-none"},[(0,r._)("a",{href:"",class:"text-blue-8"},"¿Olvidaste tu contraseña?")],-1))),Z=f((()=>(0,r._)("div",{class:"col-12 text-center q-py-none text-caption"},[(0,r._)("div",{class:"linea"},[(0,r._)("span",null,"O INICIAR SESIÓN CON")])],-1))),I=f((()=>(0,r._)("div",{class:"col-12 q-pt-md q-pl-xs"},null,-1))),S=f((()=>(0,r._)("div",{class:"text-subtitle1 text-center text-caption q-pt-lg text-grey"},[(0,r.Uk)("AL INICIAR SESIÓN, USTED ACEPTA LOS "),(0,r._)("a",{href:"",class:"text-blue-8"},"TÉRMINOS DEL SERVICIO"),(0,r.Uk)(" Y "),(0,r._)("a",{href:"",class:"text-blue-8"},"LA POLÍTICA DE PRIVACIDAD")],-1))),W=f((()=>(0,r._)("div",{class:"col-1 col-sm-4"},null,-1)));function Q(e,t,o,l,s,n){const i=(0,r.up)("q-input"),c=(0,r.up)("q-icon"),d=(0,r.up)("q-checkbox"),u=(0,r.up)("q-btn"),p=(0,r.up)("q-form"),m=(0,r.up)("q-card-section"),h=(0,r.up)("q-card"),g=(0,r.up)("q-page"),f=(0,r.up)("q-page-container"),Q=(0,r.up)("q-layout");return(0,r.wg)(),(0,r.j4)(Q,{view:"lHh Lpr lFf",class:"bg-grey-2"},{default:(0,r.w5)((()=>[(0,r.Wm)(f,null,{default:(0,r.w5)((()=>[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r._)("div",b,[w,(0,r._)("div",v,[y,_,(0,r.Wm)(h,{flat:"",bordered:""},{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,{class:"q-pa-lg",onSubmit:(0,a.iM)(n.login,["prevent"])},{default:(0,r.w5)((()=>[(0,r._)("div",q,[(0,r._)("div",C,[(0,r.Wm)(i,{outlined:"",modelValue:s.email,"onUpdate:modelValue":t[0]||(t[0]=e=>s.email=e),label:"Email",type:"email",required:""},null,8,["modelValue"])]),(0,r._)("div",k,[(0,r.Wm)(i,{outlined:"",modelValue:s.password,"onUpdate:modelValue":t[2]||(t[2]=e=>s.password=e),label:"Contraseña",type:s.typePassword?"password":"text",required:""},{append:(0,r.w5)((()=>[(0,r.Wm)(c,{onClick:t[1]||(t[1]=e=>s.typePassword=!s.typePassword),name:s.typePassword?"visibility":"visibility_off"},null,8,["name"])])),_:1},8,["modelValue","type"])]),(0,r._)("div",x,[(0,r.Wm)(d,{modelValue:s.remember,"onUpdate:modelValue":t[3]||(t[3]=e=>s.remember=e),class:"grey",label:"Recuérdame",size:"30px"},null,8,["modelValue"])]),(0,r._)("div",P,[(0,r.Wm)(u,{size:"22px",loading:s.loading,class:"full-width bold",color:"primary",label:"Iniciar Sesión",type:"submit","no-caps":""},null,8,["loading"])]),(0,r._)("div",A,[(0,r.Wm)(u,{to:"signup",size:"22px",outline:"",class:"full-width bold",color:"primary",label:"Registrate",type:"submit","no-caps":""})]),$,Z,I])])),_:1},8,["onSubmit"])])),_:1})])),_:1}),S]),W])])),_:1})])),_:1})])),_:1})}o(9665);var O=o(7292),j=o(6511);const V={name:"Login",data(){return{email:"",password:"",remember:!1,typePassword:!0,loading:!1,store:(0,O.A)()}},mounted(){this.store.isLoggedIn&&this.$router.push("/")},methods:{useAuthProvider(e,t){const o=t,a=o||j.Providers[e];this.$Oauth.authenticate(e,a).then((e=>{}))},login(){this.loading=!0,this.$api.post("login",{email:this.email,password:this.password}).then((e=>{console.log(e.data),this.$q.notify({message:"Bienvenido",color:"positive",icon:"check_circle",position:"top"}),this.$router.push("/"),this.store.user=e.data.user,this.store.isLoggedIn=!0,this.$api.defaults.headers.common["Authorization"]="Bearer "+e.data.token,localStorage.setItem("tokenPanico",e.data.token)})).catch((e=>{console.log(e),this.$q.notify({message:e.response.data.message,color:"negative",position:"top",timeout:2e3})})).finally((()=>{this.loading=!1}))}}};var E=o(7605),L=o(2133),D=o(9885),U=o(4458),T=o(3190),N=o(8326),R=o(6611),M=o(2857),B=o(1221),z=o(8879),F=o(9984),G=o.n(F);const Y=(0,c.Z)(V,[["render",Q],["__scopeId","data-v-820369c8"]]),H=Y;G()(V,"components",{QLayout:E.Z,QPageContainer:L.Z,QPage:D.Z,QCard:U.Z,QCardSection:T.Z,QForm:N.Z,QInput:R.Z,QIcon:M.Z,QCheckbox:B.Z,QBtn:z.Z});const X=(0,r._)("div",{class:"text-h3 text-red q-pa-lg text-center"}," Porfavor, complete el formulario con datos reales. ",-1),J={class:"flex flex-center"};function K(e,t,o,a,l,s){const n=(0,r.up)("q-btn"),i=(0,r.up)("q-card-section"),c=(0,r.up)("q-card"),d=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(d,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c,null,{default:(0,r.w5)((()=>[null==l.store.user.phone?((0,r.wg)(),(0,r.j4)(i,{key:0},{default:(0,r.w5)((()=>[X,(0,r._)("div",J,[(0,r.Wm)(n,{to:"datos",color:"primary",label:"Completar datos",icon:"o_contact_phone"})])])),_:1})):((0,r.wg)(),(0,r.j4)(i,{key:1,class:"flex-center flex"},{default:(0,r.w5)((()=>[(0,r.Wm)(n,{label:"PANIC",onClick:s.alertCreate,round:"",color:"red",size:"100px"},null,8,["onClick"])])),_:1}))])),_:1})])),_:1})}const ee={name:"IndexPage",data(){return{store:(0,O.A)()}},methods:{alertCreate(){this.$q.dialog({title:"Alerta",message:"¿Desea enviar una alerta?",cancel:!0,persistent:!0}).onOk((()=>{this.location()})).onCancel((()=>{this.$q.notify({message:"Alerta cancelada",color:"negative",icon:"cancel",position:"top"})}))},location(){this.$q.loading.show(),navigator.geolocation.getCurrentPosition((e=>{console.log(e.coords.latitude,e.coords.longitude),this.$api.post("alarm",{lat:e.coords.latitude,lng:e.coords.longitude,address:this.store.user.address,user_id:this.store.user.id}).then((e=>{this.$q.loading.hide(),this.store.socket.emit("chat message","Alerta de "+this.store.user.name),this.$q.notify({message:"Alerta enviada",color:"positive",icon:"check",position:"top"})})).catch((e=>{this.$q.loading.hide(),this.$q.notify({message:"Error al enviar la alerta",color:"negative",icon:"cancel",position:"top"})}))}))}}},te=(0,c.Z)(ee,[["render",K]]),oe=te;G()(ee,"components",{QPage:D.Z,QCard:U.Z,QCardSection:T.Z,QBtn:z.Z});const ae=e=>((0,r.dD)("data-v-6525c43b"),e=e(),(0,r.Cn)(),e),le={class:"row"},se=ae((()=>(0,r._)("div",{class:"col-1 col-sm-4"},null,-1))),re={class:"col-10 col-sm-4"},ne=ae((()=>(0,r._)("div",{class:"text-subtitle1 text-center q-pt-xs text-grey"},"CUENTA",-1))),ie=ae((()=>(0,r._)("div",{class:"text-h3 text-center q-pa-xs text-black text-bold"},"Crea Cuenta",-1))),ce={class:"row"},de={class:"col-12"},ue={class:"col-12 q-pt-lg"},pe={class:"col-12 q-pt-lg"},me={class:"col-12 q-pt-lg"},he={class:"col-12 q-pt-lg"},ge={class:"col-12 q-pt-xs"},fe=ae((()=>(0,r._)("div",{class:"text-subtitle1 text-center text-caption q-pt-lg text-grey"},[(0,r.Uk)("AL INICIAR SESIÓN, USTED ACEPTA LOS "),(0,r._)("a",{href:"",class:"text-blue-8"},"TÉRMINOS DEL SERVICIO"),(0,r.Uk)(" Y "),(0,r._)("a",{href:"",class:"text-blue-8"},"LA POLÍTICA DE PRIVACIDAD")],-1))),be=ae((()=>(0,r._)("div",{class:"col-1 col-sm-4"},null,-1)));function we(e,t,o,l,s,n){const i=(0,r.up)("q-input"),c=(0,r.up)("q-icon"),d=(0,r.up)("q-btn"),u=(0,r.up)("q-form"),p=(0,r.up)("q-card-section"),m=(0,r.up)("q-card"),h=(0,r.up)("q-page"),g=(0,r.up)("q-page-container"),f=(0,r.up)("q-layout");return(0,r.wg)(),(0,r.j4)(f,{view:"lHh Lpr lFf",class:"bg-grey-2"},{default:(0,r.w5)((()=>[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,null,{default:(0,r.w5)((()=>[(0,r._)("div",le,[se,(0,r._)("div",re,[ne,ie,(0,r.Wm)(m,{flat:"",bordered:""},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{class:"q-px-lg q-py-md",onSubmit:(0,a.iM)(n.signUp,["prevent"])},{default:(0,r.w5)((()=>[(0,r._)("div",ce,[(0,r._)("div",de,[(0,r.Wm)(i,{outlined:"",modelValue:s.name,"onUpdate:modelValue":t[0]||(t[0]=e=>s.name=e),label:"Nombre Completo",type:"name",required:""},null,8,["modelValue"])]),(0,r._)("div",ue,[(0,r.Wm)(i,{outlined:"",modelValue:s.email,"onUpdate:modelValue":t[1]||(t[1]=e=>s.email=e),label:"Email",type:"email",required:""},null,8,["modelValue"])]),(0,r._)("div",pe,[(0,r.Wm)(i,{outlined:"",modelValue:s.password,"onUpdate:modelValue":t[3]||(t[3]=e=>s.password=e),label:"Contraseña",type:s.typePassword?"password":"text",required:""},{append:(0,r.w5)((()=>[(0,r.Wm)(c,{onClick:t[2]||(t[2]=e=>s.typePassword=!s.typePassword),name:s.typePassword?"visibility":"visibility_off"},null,8,["name"])])),_:1},8,["modelValue","type"])]),(0,r._)("div",me,[(0,r.Wm)(i,{outlined:"",modelValue:s.password_confirmation,"onUpdate:modelValue":t[5]||(t[5]=e=>s.password_confirmation=e),label:"Confirmar Contraseña",type:s.typePassword?"password":"text",required:""},{append:(0,r.w5)((()=>[(0,r.Wm)(c,{onClick:t[4]||(t[4]=e=>s.typePassword=!s.typePassword),name:s.typePassword?"visibility":"visibility_off"},null,8,["name"])])),_:1},8,["modelValue","type"])]),(0,r._)("div",he,[(0,r.Wm)(d,{size:"22px",outline:"",class:"full-width bold",color:"primary",label:"Registrate",type:"submit","no-caps":""})]),(0,r._)("div",ge,[(0,r.Wm)(d,{size:"22px",to:"login",class:"full-width bold",color:"primary",label:"Iniciar Sesión",type:"submit","no-caps":""})])])])),_:1},8,["onSubmit"])])),_:1})])),_:1}),fe]),be])])),_:1})])),_:1})])),_:1})}const ve={name:"SignUp",data(){return{email:"",name:"",password:"",password_confirmation:"",store:(0,O.A)(),typePassword:!0}},mounted(){this.store.isLoggedIn&&this.$router.push("/")},methods:{signUp(){this.$q.loading.show(),this.$api.post("register",{email:this.email,name:this.name,password:this.password,password_confirmation:this.password_confirmation}).then((e=>{this.$q.notify({message:"Usuario creado correctamente",color:"positive",icon:"check_circle",position:"top"}),this.$router.push("/"),this.store.user=e.data.user,this.store.isLoggedIn=!0,this.$api.defaults.headers.common["Authorization"]="Bearer "+e.data.token,localStorage.setItem("tokenChat",e.data.token)})).catch((e=>{console.log(e),this.$q.notify({message:e.response.data.message,color:"negative",icon:"error",position:"top"})})).finally((()=>{this.$q.loading.hide()}))}}},ye=(0,c.Z)(ve,[["render",we],["__scopeId","data-v-6525c43b"]]),_e=ye;G()(ve,"components",{QLayout:E.Z,QPageContainer:L.Z,QPage:D.Z,QCard:U.Z,QCardSection:T.Z,QForm:N.Z,QInput:R.Z,QIcon:M.Z,QBtn:z.Z});const qe={class:"row q-pa-lg"},Ce={class:"col-12 col-6"},ke={class:"col-12 col-6"},xe={class:"col-12 col-6"},Pe={class:"col-12 col-6"},Ae={class:"col-12 flex flex-center"},$e={class:"col-12 q-pt-md"};function Ze(e,t,o,l,s,n){const i=(0,r.up)("q-input"),c=(0,r.up)("q-uploader"),d=(0,r.up)("q-btn"),u=(0,r.up)("q-form"),p=(0,r.up)("q-card-section"),m=(0,r.up)("q-card"),h=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(h,null,{default:(0,r.w5)((()=>[(0,r.Wm)(m,null,{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.Wm)(u,{onSubmit:(0,a.iM)(n.userSave,["prevent"])},{default:(0,r.w5)((()=>[(0,r._)("div",qe,[(0,r._)("div",Ce,[(0,r.Wm)(i,{outlined:"",modelValue:s.store.user.name,"onUpdate:modelValue":t[0]||(t[0]=e=>s.store.user.name=e),label:"Nombre completo",hint:"",required:""},null,8,["modelValue"])]),(0,r._)("div",ke,[(0,r.Wm)(i,{outlined:"",modelValue:s.store.user.email,"onUpdate:modelValue":t[1]||(t[1]=e=>s.store.user.email=e),label:"Correo",hint:"",required:""},null,8,["modelValue"])]),(0,r._)("div",xe,[(0,r.Wm)(i,{outlined:"",modelValue:s.store.user.phone,"onUpdate:modelValue":t[2]||(t[2]=e=>s.store.user.phone=e),label:"Telefono",hint:"",required:""},null,8,["modelValue"])]),(0,r._)("div",Pe,[(0,r.Wm)(i,{outlined:"",modelValue:s.store.user.address,"onUpdate:modelValue":t[3]||(t[3]=e=>s.store.user.address=e),label:"Direccion",hint:"",required:""},null,8,["modelValue"])]),(0,r._)("div",Ae,[(0,r.Wm)(c,{accept:".jpg, .png",onAdded:n.uploadFile,"auto-upload":"","max-files":"1",label:"Subir foto",flat:"","max-file-size":"5000000",onRejected:n.onRejected,bordered:""},null,8,["onAdded","onRejected"])]),(0,r._)("div",$e,[(0,r.Wm)(d,{loading:s.loading,class:"full-width",type:"submit",color:"primary","no-caps":"",icon:"add_circle_outline",label:"Guardar"},null,8,["loading"])])])])),_:1},8,["onSubmit"])])),_:1})])),_:1})])),_:1})}const Ie={name:"Datos",data(){return{store:(0,O.A)(),foto:"",loading:!1}},methods:{uploadFile(e){this.loading=!0;let t=this.$q.dialog({message:"Subiendo... 0%"}),o=0;const a=new FormData;return a.append("file",e[0]),new Promise(((l,s)=>{this.$api.post("upload",a,{headers:{"Content-Type":"multipart/form-data"},onUploadProgress:e=>{o=Math.round(e.loaded/e.total*100),t.update({message:`Subiendo... ${o}%`}),o>=100&&t.hide()}}).then((t=>{this.foto=t.data,this.loading=!1,l(e)})).catch((e=>s(e)))}))},onRejected(e){this.$q.notify({type:"negative",message:`${e.length} el archivo paso las restricciones de validación`})},userSave(){if(""==this.foto)return this.$q.notify({type:"negative",message:"Debe subir una foto",position:"top"}),!1;this.store.user.avatar=this.foto,this.$api.put("user/"+this.store.user.id,this.store.user).then((e=>{console.log(e.data),this.$q.notify({type:"positive",message:"Usuario guardado",position:"top"})})).catch((e=>{this.$q.notify({type:"negative",message:"Error al guardar usuario",position:"top"})}))}}};var Se=o(4343);const We=(0,c.Z)(Ie,[["render",Ze]]),Qe=We;function Oe(e,t,o,a,l,s){const n=(0,r.up)("q-btn"),i=(0,r.up)("q-chip"),c=(0,r.up)("q-td"),d=(0,r.up)("q-item"),u=(0,r.up)("q-item-section"),p=(0,r.up)("q-list"),m=(0,r.up)("q-btn-dropdown"),h=(0,r.up)("q-table"),g=(0,r.up)("q-page"),f=(0,r.Q2)("close-popup");return(0,r.wg)(),(0,r.j4)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(h,{rows:l.alarms,columns:l.alarmColumns,"rows-per-page-options":[0]},{"top-right":(0,r.w5)((()=>[(0,r.Wm)(n,{flat:"",icon:"refresh",onClick:s.alarmGet},null,8,["onClick"]),(0,r.Wm)(n,{label:"Download excel",onClick:s.alarmDownload,color:"green",icon:"description"},null,8,["onClick"])])),"body-cell-status":(0,r.w5)((e=>[(0,r.Wm)(c,{props:e},{default:(0,r.w5)((()=>[(0,r.Wm)(i,{color:"Pendiente"===e.row.status?"yellow-9":"Cancelar"===e.row.status?"red":"green",label:e.row.status,"text-color":"white"},null,8,["color","label"])])),_:2},1032,["props"])])),"body-cell-action":(0,r.w5)((e=>[(0,r.Wm)(c,{props:e,"auto-width":""},{default:(0,r.w5)((()=>[(0,r.Wm)(m,{color:"primary",label:"Opciones"},{default:(0,r.w5)((()=>[(0,r.Wm)(p,null,{default:(0,r.w5)((()=>[(0,r.wy)(((0,r.wg)(),(0,r.j4)(d,{clickable:""},{default:(0,r.w5)((()=>["Pendiente"===e.row.status?((0,r.wg)(),(0,r.j4)(n,{key:0,onClick:t=>s.cambio(e.row,"Cancelar"),label:"Cancelar",dense:"",icon:"warning",color:"red"},null,8,["onClick"])):(0,r.kq)("",!0)])),_:2},1024)),[[f]]),"Administrador"==l.store.user.type?(0,r.wy)(((0,r.wg)(),(0,r.j4)(d,{key:0,clickable:""},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,{color:"primary",label:"Maps",icon:"public",dense:"",target:"_blank",href:`https://www.google.com.bo/maps/place/${e.row.lat},${e.row.lng}/@${e.row.lat},${e.row.lng},17z/data=!3m1!4b1!4m6!3m5!1s0x0:0xeda9371aeb8c1574!7e2!8m2!3d${e.row.lat}!4d${e.row.lng}?hl=es`},null,8,["href"])])),_:2},1024)])),_:2},1024)),[[f]]):(0,r.kq)("",!0),"Pendiente"===e.row.status&&"Administrador"==l.store.user.type?(0,r.wy)(((0,r.wg)(),(0,r.j4)(d,{key:1,clickable:""},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,{onClick:t=>s.cambio(e.row,"Terminar"),label:"Terminar",dense:"",icon:"check",color:"green"},null,8,["onClick"])])),_:2},1024)])),_:2},1024)),[[f]]):(0,r.kq)("",!0),"Administrador"==l.store.user.type?(0,r.wy)(((0,r.wg)(),(0,r.j4)(d,{key:2,clickable:""},{default:(0,r.w5)((()=>[(0,r.Wm)(u,null,{default:(0,r.w5)((()=>[(0,r.Wm)(n,{onClick:t=>s.alarmDelete(e.row),label:"Eliminar",dense:"",icon:"delete",color:"red"},null,8,["onClick"])])),_:2},1024)])),_:2},1024)),[[f]]):(0,r.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])),_:1})}G()(Ie,"components",{QPage:D.Z,QCard:U.Z,QCardSection:T.Z,QForm:N.Z,QInput:R.Z,QUploader:Se.Z,QBtn:z.Z});var je=o(4376),Ve=o(4446),Ee=o.n(Ve);const Le={name:"History",data(){return{selected:[],url:"https://bpanico.siscenter.org/api/",cupoSearch:"",store:(0,O.A)(),alarms:[],alarmColumns:[{name:"action",label:"Acción",field:"action",align:"left",sortable:!0},{name:"status",label:"Estado",field:"status",align:"left",sortable:!0},{name:"name",label:"Ciudadado",field:e=>e.user.name,align:"left",sortable:!0},{name:"lat",label:"Lat",field:"lat",align:"left",sortable:!0},{name:"lng",label:"Lng",field:"lng",align:"left",sortable:!0},{name:"fecha",label:"Fecha hora",field:"fecha",align:"left",sortable:!0}]}},created(){this.store.showSocket&&(this.store.socket.on("chat message",(e=>{this.$q.notify({message:e,color:"red-4",textColor:"white",icon:"done",position:"top"}),this.alarmGet()})),this.store.showSocket=!1),this.alarmGet()},methods:{alarmDownload(){let e=[{columns:[{label:"Lat",value:"lat"},{label:"Lng",value:"lng"},{label:"Fecha",value:"fecha"},{label:"Estado",value:"status"},{label:"Acción",value:"action"},{label:"Ciudadano",value:e=>e.user.name+" "+e.user.lastname},{label:"City",value:e=>e.user.city},{label:"Phone",value:e=>e.user.phone},{label:"Email",value:e=>e.user.email},{label:"ID",value:"id"}],content:this.alarms}],t={fileName:"Alarms",writeMode:"writeFile",writeOptions:{}};Ee()(e,t)},alarmGet(){this.$q.loading.show(),this.alarms=[],this.$api.get("alarm").then((e=>{this.$q.loading.hide(),e.data.forEach((e=>{e.fecha=je.ZP.formatDate(e.created_at,"DD/MM/YYYY HH:mm:ss"),this.alarms.push(e)}))})).catch((e=>{console.log(e)}))},alarmDelete(e){this.$q.dialog({title:"Eliminar",message:"¿Está seguro de eliminar este registro?",cancel:!0,persistent:!0}).onOk((()=>{this.$q.loading.show(),this.$api.delete(`alarm/${e.id}`).then((e=>{this.$q.loading.hide(),this.$q.notify({message:"Registro eliminado",color:"green-4",textColor:"white",icon:"check_circle",position:"top"}),this.alarmGet()})).catch((e=>{console.log(e)}))})).onCancel((()=>{console.log("Cancel")})).onDismiss((()=>{console.log("Dismissed")}))},cambio(e,t){this.$q.dialog({title:"Cancelar",message:`¿Está seguro de ${t} la alarma?`,cancel:!0,persistent:!0}).onOk((()=>{this.$q.loading.show(),this.$api.put("alarm/"+e.id,{status:t}).then((e=>{this.alarmGet()})).catch((e=>{console.log(e)}))})).onCancel((()=>{console.log("Cancel")})).onDismiss((()=>{console.log("Dismissed")}))}}};var De=o(1302),Ue=o(7220),Te=o(7691),Ne=o(8479),Re=o(3246),Me=o(490),Be=o(1233),ze=o(2146);const Fe=(0,c.Z)(Le,[["render",Oe]]),Ge=Fe;G()(Le,"components",{QPage:D.Z,QTable:De.Z,QBtn:z.Z,QTd:Ue.Z,QChip:Te.Z,QBtnDropdown:Ne.Z,QList:Re.Z,QItem:Me.Z,QItemSection:Be.Z}),G()(Le,"directives",{ClosePopup:ze.Z});const Ye=[{path:"/",component:()=>Promise.all([o.e(736),o.e(541)]).then(o.bind(o,7541)),children:[{path:"",component:oe,meta:{requiresAuth:!0}},{path:"datos",component:Qe,meta:{requiresAuth:!0}},{path:"history",component:Ge,meta:{requiresAuth:!0}}]},{path:"/login",component:H},{path:"/signup",component:_e},{path:"/:catchAll(.*)*",component:()=>o.e(862).then(o.bind(o,1862))}],He=Ye,Xe=(0,p.BC)((function(){const e=g.r5,t=(0,g.p7)({scrollBehavior:()=>({left:0,top:0}),routes:He,history:e("")});return t.beforeEach(((e,t,o)=>{if(e.matched.some((e=>e.meta.requiresAuth))){if((0,O.A)().isLoggedIn)return void o();o("/login")}else o()})),t}));async function Je(e,t){const o=e(u);o.use(l.Z,t);const a="function"===typeof h?await h({}):h;o.use(a);const r=(0,s.Xl)("function"===typeof Xe?await Xe({store:a}):Xe);return a.use((({store:e})=>{e.router=r})),{app:o,store:a,router:r}}var Ke=o(8934),et=o(6827),tt=o(6950),ot=o(7975),at=o(3703);const lt={config:{},lang:Ke.Z,plugins:{Notify:et.Z,Loading:tt.Z,Dialog:ot.Z,LocalStorage:at.Z}};var st=o(368);(0,st.z)("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}}),/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&o.e(736).then(o.t.bind(o,4848,23));const rt="";async function nt({app:e,router:t,store:o},a){let l=!1;const s=e=>{try{return t.resolve(e).href}catch(o){}return Object(e)===e?null:e},r=e=>{if(l=!0,"string"===typeof e&&/^https?:\/\//.test(e))return void(window.location.href=e);const t=s(e);null!==t&&(window.location.href=t,window.location.reload())},n=window.location.href.replace(window.location.origin,"");for(let c=0;!1===l&&c<a.length;c++)try{await a[c]({app:e,router:t,store:o,ssrContext:null,redirect:r,urlPath:n,publicPath:rt})}catch(i){return i&&i.url?void r(i.url):void console.error("[Quasar] boot error:",i)}!0!==l&&(e.use(t),e.mount("#q-app"))}Je(a.ri,lt).then((e=>{const[t,a]=void 0!==Promise.allSettled?["allSettled",e=>e.map((e=>{if("rejected"!==e.status)return e.value.default;console.error("[Quasar] boot error:",e.reason)}))]:["all",e=>e.map((e=>e.default))];return Promise[t]([Promise.resolve().then(o.bind(o,1569))]).then((t=>{const o=a(t).filter((e=>"function"===typeof e));nt(e,o)}))}))},1569:(e,t,o)=>{o.r(t),o.d(t,{api:()=>c,default:()=>p});o(9665);var a=o(3340),l=o(9981),s=o.n(l),r=o(7292),n=o(6511),i=o.n(n);const c=s().create({baseURL:"https://bpanico.siscenter.org/api/"}),d={providers:{google:{clientId:"838117671043-q10rpu9bql9mrgpenetpgdobhnjm1cpa.apps.googleusercontent.com",redirectUri:"https://api.example.comauth/google/callback"},facebook:{clientId:"************",redirectUri:"https://myapp.com/auth/facebook/callback"}}},u=new(i())(s(),d),p=(0,a.xr)((({app:e,router:t})=>{e.config.globalProperties.$axios=s(),e.config.globalProperties.$Oauth=u,e.config.globalProperties.$api=c;const o=localStorage.getItem("tokenPanico");o&&(e.config.globalProperties.$api.defaults.headers.common["Authorization"]="Bearer "+o,e.config.globalProperties.$api.post("me").then((e=>{console.log(e.data),(0,r.A)().user=e.data,(0,r.A)().isLoggedIn=!0})).catch((o=>{e.config.globalProperties.$api.defaults.headers.common["Authorization"]="",(0,r.A)().user={},localStorage.removeItem("tokenPanico"),(0,r.A)().isLoggedIn=!1,t.push("/login")})))}))},7292:(e,t,o)=>{o.d(t,{A:()=>n});var a=o(1809),l=o(3819);const s="http://localhost:3000",r=(0,l.io)(s),n=(0,a.Q_)("counter",{state:()=>({counter:0,user:{},socket:r,showSocket:!0,isLoggedIn:!!localStorage.getItem("tokenPanico")}),getters:{doubleCount:e=>2*e.counter},actions:{increment(){this.counter++}}})}},t={};function o(a){var l=t[a];if(void 0!==l)return l.exports;var s=t[a]={exports:{}};return e[a](s,s.exports,o),s.exports}o.m=e,(()=>{var e=[];o.O=(t,a,l,s)=>{if(!a){var r=1/0;for(d=0;d<e.length;d++){for(var[a,l,s]=e[d],n=!0,i=0;i<a.length;i++)(!1&s||r>=s)&&Object.keys(o.O).every((e=>o.O[e](a[i])))?a.splice(i--,1):(n=!1,s<r&&(r=s));if(n){e.splice(d--,1);var c=l();void 0!==c&&(t=c)}}return t}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[a,l,s]}})(),(()=>{o.n=e=>{var t=e&&e.__esModule?()=>e["default"]:()=>e;return o.d(t,{a:t}),t}})(),(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;o.t=function(a,l){if(1&l&&(a=this(a)),8&l)return a;if("object"===typeof a&&a){if(4&l&&a.__esModule)return a;if(16&l&&"function"===typeof a.then)return a}var s=Object.create(null);o.r(s);var r={};e=e||[null,t({}),t([]),t(t)];for(var n=2&l&&a;"object"==typeof n&&!~e.indexOf(n);n=t(n))Object.getOwnPropertyNames(n).forEach((e=>r[e]=()=>a[e]));return r["default"]=()=>a,o.d(s,r),s}})(),(()=>{o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}})(),(()=>{o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,a)=>(o.f[a](e,t),t)),[]))})(),(()=>{o.u=e=>"js/"+e+"."+{541:"91af1a2f",862:"f658a383"}[e]+".js"})(),(()=>{o.miniCssF=e=>"css/"+{143:"app",736:"vendor"}[e]+"."+{143:"aa4d3b54",736:"5eeda0ae"}[e]+".css"})(),(()=>{o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)})(),(()=>{var e={},t="front:";o.l=(a,l,s,r)=>{if(e[a])e[a].push(l);else{var n,i;if(void 0!==s)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+s){n=u;break}}n||(i=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,o.nc&&n.setAttribute("nonce",o.nc),n.setAttribute("data-webpack",t+s),n.src=a),e[a]=[l];var p=(t,o)=>{n.onerror=n.onload=null,clearTimeout(m);var l=e[a];if(delete e[a],n.parentNode&&n.parentNode.removeChild(n),l&&l.forEach((e=>e(o))),t)return t(o)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=p.bind(null,n.onerror),n.onload=p.bind(null,n.onload),i&&document.head.appendChild(n)}}})(),(()=>{o.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}})(),(()=>{o.p=""})(),(()=>{var e={143:0};o.f.j=(t,a)=>{var l=o.o(e,t)?e[t]:void 0;if(0!==l)if(l)a.push(l[2]);else{var s=new Promise(((o,a)=>l=e[t]=[o,a]));a.push(l[2]=s);var r=o.p+o.u(t),n=new Error,i=a=>{if(o.o(e,t)&&(l=e[t],0!==l&&(e[t]=void 0),l)){var s=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.src;n.message="Loading chunk "+t+" failed.\n("+s+": "+r+")",n.name="ChunkLoadError",n.type=s,n.request=r,l[1](n)}};o.l(r,i,"chunk-"+t,t)}},o.O.j=t=>0===e[t];var t=(t,a)=>{var l,s,[r,n,i]=a,c=0;if(r.some((t=>0!==e[t]))){for(l in n)o.o(n,l)&&(o.m[l]=n[l]);if(i)var d=i(o)}for(t&&t(a);c<r.length;c++)s=r[c],o.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return o.O(d)},a=globalThis["webpackChunkfront"]=globalThis["webpackChunkfront"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var a=o.O(void 0,[736],(()=>o(7373)));a=o.O(a)})();