"use strict";(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[222],{3222:function(t,o,e){e.r(o),e.d(o,{default:function(){return g}});var n=e(6252);const a={style:{height:"100vh"}},i=(0,n._)("span",{class:""},"作者：Jim Chiu",-1);function l(t,o,e,l,r,s){const c=(0,n.up)("van-image"),u=(0,n.up)("van-col"),d=(0,n.up)("van-row");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(d,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{span:"24"},{default:(0,n.w5)((()=>[(0,n.Wm)(c,{round:"",width:"10rem",height:"10rem",fit:"cover",position:"left",src:"https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg"})])),_:1}),(0,n.Wm)(u,{span:"24"},{default:(0,n.w5)((()=>[i])),_:1}),(0,n.Wm)(u,{span:"24"},{default:(0,n.w5)((()=>[(0,n._)("a",{onClick:o[0]||(o[0]=(...t)=>s.goToBlog&&s.goToBlog(...t))},"部落格：老達遊記")])),_:1})])),_:1}),(0,n.Wm)(d,{justify:"center"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,null,{default:(0,n.w5)((()=>[(0,n._)("button",{onClick:o[1]||(o[1]=(...t)=>s.consoleWrite&&s.consoleWrite(...t))},"按我紀錄log"),(0,n._)("button",{onClick:o[2]||(o[2]=(...t)=>s.clearLoaction&&s.clearLoaction(...t))},"清除經緯度"),(0,n._)("button",{onClick:o[3]||(o[3]=(...t)=>s.readLoaction&&s.readLoaction(...t))},"查看暫存經緯度")])),_:1})])),_:1})])}var r=e(8951),s=e(5247),c={name:"AboutView",components:{},data(){return{blogUrl:"https://chiungta.github.io/"}},methods:{goToBlog(){window.cordova?cordova.InAppBrowser.open(this.blogUrl,"_system","location=yes"):window.open(this.blogUrl)},consoleWrite(){s.Z.set("locationList",[{time:new Date,x:121,y:23}]);try{r.Z.remoteLog("我有一隻小毛驢",{errorMessage:new Date})}catch(t){alert(t)}},clearLoaction(){s.Z.remove("locationList"),s.Z.set("locationList",[])},readLoaction(){this.$dialog.alert({title:`共有${s.Z.get("locationList").length}筆`,message:JSON.stringify(s.Z.get("locationList")),confirmButtonColor:"#65db03"})}},mounted(){}},u=e(3744);const d=(0,u.Z)(c,[["render",l]]);var g=d}}]);
//# sourceMappingURL=222.f33300fa.js.map