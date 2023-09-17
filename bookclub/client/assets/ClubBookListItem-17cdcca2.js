import{_ as w,T as M,f as B,v as V,j as g,K as f,P as k,r as D,o as s,c as n,a as e,b as R,w as A,G as P,H as v,F as S,k as L,t as u,n as N,u as _,l as I,q as F,p as G,e as O}from"./index-fed22fc1.js";const T={props:{bookProp:{type:M,required:!0}},setup(l){const a=B(l.bookProp.status),r=B(l.bookProp.rating),t=V();return{progressSelect:a,ratingSelect:r,route:t,selectedClub:g(()=>_.selectedClub),myMemberships:g(()=>_.myMemberships),inClub:g(()=>{var c;const i=(c=_.myMemberships)==null?void 0:c.find(b=>b.clubId==t.params.clubId);return I.log(i),I.log(_.myMemberships),i}),ratingOptions:[{rating:1,description:"Horrendous"},{rating:2,description:"Terrible"},{rating:3,description:"Bad"},{rating:4,description:"Meh"},{rating:5,description:"Average"},{rating:6,description:"Good"},{rating:7,description:"Very Good"},{rating:8,description:"Great"},{rating:9,description:"Outstanding"},{rating:10,description:"Masterpiece"}],async editClubBook(){try{const i={status:a.value,rating:r.value},c=l.bookProp.id;await f.changeClubBookProgress(i,c)}catch(i){k.error(i.message)}},async deleteClubBook(){try{if(await k.confirm("Are you sure you want to delete this user books?")){const c=l.bookProp.id;await f.deleteClubBook(c)}}catch(i){k.error(i.message)}}}}},d=l=>(G("data-v-957078a8"),l=l(),O(),l),U={class:"large-text-style text-dark"},q=d(()=>e("br",null,null,-1)),H={class:"author-text-style text-dark"},j={key:0,class:"text-center"},E=d(()=>e("option",{value:"reading"},"Currently Reading",-1)),K=d(()=>e("option",{value:"planned"},"Plan to Read",-1)),z=d(()=>e("option",{value:"finished"},"Finished",-1)),J=[E,K,z],Q={key:1,class:"text-center"},W=d(()=>e("span",{class:"large-text-style"}," Finished ",-1)),X=[W],Y={key:2,class:"text-center"},Z=d(()=>e("span",{class:"status-text-style"}," Planning to Read ",-1)),$=[Z],tt={key:3,class:"text-center"},et=d(()=>e("span",{class:"status-text-style"}," Currently Reading ",-1)),ot=[et],st={key:4,class:"text-center"},nt=d(()=>e("option",{value:"0"},"Not Rated",-1)),at=["value"],rt={key:5,class:"text-center"},it={key:0,class:"large-text-style"},lt={key:1,class:"large-text-style"},dt={key:0,class:"mb-0 text-end sub-text-style"},ct={key:1,class:"mb-0 text-end sub-text-style"},ut={key:6};function _t(l,a,r,t,i,c){var h,p,y,m,C,x;const b=D("router-link");return s(),n(S,null,[e("td",null,[R(b,{to:{name:"Book Details",params:{gbId:r.bookProp.gbId}}},{default:A(()=>[e("span",U,u(r.bookProp.title),1),F(),q,e("span",H," by "+u(r.bookProp.author),1)]),_:1},8,["to"])]),t.inClub&&(((h=t.inClub)==null?void 0:h.role)=="admin"||((p=t.inClub)==null?void 0:p.role)=="creator")?(s(),n("td",j,[P(e("select",{onChange:a[0]||(a[0]=(...o)=>t.editClubBook&&t.editClubBook(...o)),"onUpdate:modelValue":a[1]||(a[1]=o=>t.progressSelect=o)},J,544),[[v,t.progressSelect]])])):r.bookProp.status=="finished"?(s(),n("td",Q,X)):r.bookProp.status=="planned"?(s(),n("td",Y,$)):(s(),n("td",tt,ot)),t.inClub&&(((y=t.inClub)==null?void 0:y.role)=="admin"||((m=t.inClub)==null?void 0:m.role)=="creator")?(s(),n("td",st,[P(e("select",{onChange:a[2]||(a[2]=(...o)=>t.editClubBook&&t.editClubBook(...o)),"onUpdate:modelValue":a[3]||(a[3]=o=>t.ratingSelect=o)},[nt,(s(!0),n(S,null,L(t.ratingOptions,o=>(s(),n("option",{key:o.rating,value:o.rating},u(o.rating)+" - "+u(o.description),9,at))),128))],544),[[v,t.ratingSelect]])])):(s(),n("td",rt,[r.bookProp.rating==0?(s(),n("span",it,"Unrated")):(s(),n("span",lt,u(r.bookProp.rating)+"/10",1))])),e("td",null,[t.progressSelect=="finished"?(s(),n("p",dt," completed "+u(r.bookProp.updatedAt.toLocaleDateString()),1)):(s(),n("p",ct," added "+u(r.bookProp.createdAt.toLocaleDateString()),1))]),t.inClub&&(((C=t.inClub)==null?void 0:C.role)=="admin"||((x=t.inClub)==null?void 0:x.role)=="creator")?(s(),n("td",ut,[e("i",{onClick:a[4]||(a[4]=(...o)=>t.deleteClubBook&&t.deleteClubBook(...o)),class:"trash mdi mdi-trash-can fs-3"})])):N("",!0)],64)}const gt=w(T,[["render",_t],["__scopeId","data-v-957078a8"]]);export{gt as default};
