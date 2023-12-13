import{_,f,V as v,u as m,j as g,i as p,P as u,o as d,c as r,a as t,I as b,G as i,J as l,p as h,e as x}from"./index-fed22fc1.js";const I={setup(){const s=f({}),o=v();return s.value={...m.account},{editable:s,account:g(()=>m.account),async editAccount(){try{const n=s.value;await p.editAccount(n),u.toast("Saved Changes","success","bottom-end"),o.push({name:"Account"})}catch(n){u.error(n.message)}}}}},a=s=>(h("data-v-140f98da"),s=s(),x(),s),y={class:"container-fluid"},w={class:"row"},A={class:"col-12 p-0"},P={class:"image-container"},S=["src","alt"],V=["alt"],B=["src","alt"],D=a(()=>t("section",{class:"row mt-5 pt-5"},[t("div",{class:"col-10 mx-auto"},[t("p",{class:"fs-1"}," Edit Your Account ")])],-1)),M={class:"row justify-content-center"},j={class:"col-10"},k={class:"col-md-6 col-12"},C={class:"mb-3"},E=a(()=>t("label",{for:"name"},"Name",-1)),U={class:"mb-3"},G=a(()=>t("label",{for:"coverImg"},"Cover Image",-1)),H={class:"mb-3"},N=a(()=>t("label",{for:"picture"},"Profile Picture",-1)),q={class:"col-md-6 col-12"},Y={class:"mb-3"},J=a(()=>t("label",{for:"bio"},"Bio",-1)),R=a(()=>t("div",null,[t("button",{class:"btn soft-blue-btn"}," Save Changes ")],-1));function T(s,o,n,e,W,z){return d(),r("div",y,[t("section",w,[t("div",A,[t("div",P,[t("img",{class:"img-fluid account-img me-4",src:e.account.picture,alt:e.account.name},null,8,S),e.account.coverImg?(d(),r("img",{key:1,class:"coverImg-style img-fluid",src:e.account.coverImg,alt:e.account.name},null,8,B)):(d(),r("img",{key:0,class:"coverImg-style img-fluid",src:"https://images.unsplash.com/photo-1551043047-1d2adf00f3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",alt:e.account.name},null,8,V))])])]),D,t("section",M,[t("div",j,[t("form",{class:"row justify-content-between",onSubmit:o[4]||(o[4]=b(c=>e.editAccount(),["prevent"]))},[t("div",k,[t("div",C,[E,i(t("input",{"onUpdate:modelValue":o[0]||(o[0]=c=>e.editable.name=c),type:"text",id:"name",name:"name",title:"Name",class:"form-control",maxlength:"100",minlength:"1",required:""},null,512),[[l,e.editable.name]])]),t("div",U,[G,i(t("input",{"onUpdate:modelValue":o[1]||(o[1]=c=>e.editable.coverImg=c),type:"url",id:"coverImg",name:"coverImg",title:"Cover Image",class:"form-control",maxlength:"700",minlength:"1"},null,512),[[l,e.editable.coverImg]])]),t("div",H,[N,i(t("input",{"onUpdate:modelValue":o[2]||(o[2]=c=>e.editable.picture=c),type:"url",id:"picture",name:"picture",title:"Profile Picture",class:"form-control",maxlength:"400",minlength:"1"},null,512),[[l,e.editable.picture]])])]),t("div",q,[t("div",Y,[J,i(t("textarea",{"onUpdate:modelValue":o[3]||(o[3]=c=>e.editable.bio=c),type:"text",id:"bio",name:"bio",title:"bio",class:"form-control",maxlength:"700",minlength:"1"},null,512),[[l,e.editable.bio]])]),R])],32)])])])}const K=_(I,[["render",T],["__scopeId","data-v-140f98da"]]);export{K as default};