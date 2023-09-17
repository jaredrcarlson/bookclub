import{B as y,l as B,u as a,a1 as x,_ as M,v as S,g as D,f as A,h as E,j as _,r as w,o as r,c as l,a as s,t as u,F as h,k as g,n as P,q as L,P as v,K as R,b as k,w as C,p as F,e as T}from"./index-fed22fc1.js";class V{constructor(c){this.id=c.id,this.coverImg=c.coverImg,this.picture=c.picture,this.bio=c.bio,this.name=c.name}}class G{async getProfile(c){const d=await y.get(`/api/profiles/${c}`);B.log("[GOT PROFILE]",d.data),a.profile=new V(d.data)}async getProfileMemberships(c){const d=await y.get(`api/profiles/${c}/clubs`);B.log("[GOT PROFILE MEMBERSHIPS]",d.data),a.profileMemberships=d.data.map(o=>new x(o))}}const I=new G;const H={setup(){const n=S();async function c(){try{const e=n.params.profileId;await I.getProfile(e)}catch(e){v.error(e.message)}}async function d(){try{const e=n.params.profileId;await I.getProfileMemberships(e)}catch(e){v.error(e.message)}}async function o(){try{const e=n.params.profileId;await R.getProfileBooks(e)}catch(e){v.error(e.message)}}D(()=>{c(n.params.profileId),d(),o(),m(),window.addEventListener("resize",m)});const b=A(null);function m(){b.value=window.innerWidth}return E(()=>{window.removeEventListener("resize",m)}),{computedDescription(e,i){return e.length>100?e.substring(0,i)+"...":e},width:b,route:n,profile:_(()=>a.profile),profileMemberships:_(()=>a.profileMemberships?a.profileMemberships.filter(e=>e.club&&e.status=="joined"):[]),profileBooks:_(()=>a.profileBooks),finishedBooks:_(()=>{var i;return(i=a.profileBooks)==null?void 0:i.filter(p=>p.status=="finished")}),plannedBooks:_(()=>{var i;return(i=a.profileBooks)==null?void 0:i.filter(p=>p.status=="planned")}),currentBooks:_(()=>{var i;return(i=a.profileBooks)==null?void 0:i.filter(p=>p.status=="reading")})}}},f=n=>(F("data-v-02866eff"),n=n(),T(),n),N={key:0,class:"container-fluid"},O={class:"row"},j={class:"col-12 p-0"},z={class:"image-container"},U=["src","alt"],q={class:"account-name"},W={class:"fs-2 pe-2 m-0"},K=["alt"],Y=["src","alt"],J={class:"row mt-5"},Q={class:"col-12 mt-5"},X={class:"m-3"},Z=f(()=>s("span",{class:"fs-2"}," About Me: ",-1)),$={class:"fs-4"},ss=f(()=>s("section",{class:"row mt-5"},[s("div",{class:"col-12 mt-5"},[s("p",{class:"m-3 fs-1"}," Clubs ")])],-1)),es={key:0,class:"row mb-4"},os={class:"membership-card mx-3"},ts=["src"],is={class:"dark-blue-bg p-3 text-light card-description"},rs={class:"fs-5"},ls={key:0},ns={key:1},cs={class:"row mb-4"},as={class:"col-12"},ds={class:"m-3 fs-1"},ps=f(()=>s("span",{class:"pe-3"}," My Booklist ",-1)),fs={class:"fs-3 pe-4"},_s=f(()=>s("i",{class:"mdi mdi-book-multiple"},null,-1)),us={class:"row mb-4"},ms={class:"col-12"},hs={style:{"overflow-x":"auto"},class:"ms-3"},gs={id:"books"},ks=f(()=>s("tr",null,[s("th",{class:"ps-2"}," Title "),s("th",{class:"ps-2"}," Progress "),s("th",{class:"ps-2 text-center"}," Rating "),s("th",{class:"ps-2 text-end"}," Timestamp ")],-1)),bs=f(()=>s("tr",null,[s("td",{class:"large-text-style fs-4 orange-text"},"Currently Reading"),s("td"),s("td"),s("td")],-1)),vs=f(()=>s("tr",null,[s("td",{class:"large-text-style fs-4 orange-text"},"Planning to Read"),s("td"),s("td"),s("td")],-1)),ys=f(()=>s("tr",null,[s("td",{class:"large-text-style fs-4 orange-text"},"Finished Books"),s("td"),s("td"),s("td")],-1));function Bs(n,c,d,o,b,m){var p;const e=w("router-link"),i=w("UserBookListItem");return o.profile?(r(),l("div",N,[s("section",O,[s("div",j,[s("div",z,[s("img",{class:"img-fluid account-img me-4",src:o.profile.picture,alt:o.profile.name},null,8,U),s("div",q,[s("p",W,u(o.profile.name),1)]),o.profile.coverImg?(r(),l("img",{key:1,class:"coverImg-style img-fluid",src:o.profile.coverImg,alt:o.profile.name},null,8,Y)):(r(),l("img",{key:0,class:"coverImg-style img-fluid",src:"https://images.unsplash.com/photo-1551043047-1d2adf00f3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",alt:o.profile.name},null,8,K))])])]),s("section",J,[s("div",Q,[s("p",X,[Z,s("span",$,u(o.profile.bio),1)])])]),ss,Array.isArray(o.profileMemberships)?(r(),l("section",es,[(r(!0),l(h,null,g(o.profileMemberships,t=>(r(),l("div",{class:"col-md-4 col-12 my-3",key:t.id},[s("div",os,[k(e,{to:{name:"Club About Page",params:{clubId:t.club.id}}},{default:C(()=>[s("img",{class:"img-fluid card-img",src:t.club.coverImg,alt:"card img"},null,8,ts),s("div",is,[s("p",rs,u(t.club.name),1),o.width>1350?(r(),l("p",ls,u(o.computedDescription(t.club.description,75)),1)):(r(),l("p",ns,u(o.computedDescription(t.club.description,25)),1))])]),_:2},1032,["to"])])]))),128))])):P("",!0),s("section",cs,[s("div",as,[s("p",ds,[ps,s("span",fs,[_s,L(" "+u((p=o.profileBooks)==null?void 0:p.length),1)])])])]),s("section",us,[s("div",ms,[s("div",hs,[s("table",gs,[ks,bs,(r(!0),l(h,null,g(o.currentBooks,t=>(r(),l("tr",{key:t.id},[k(i,{bookProp:t},null,8,["bookProp"])]))),128)),vs,(r(!0),l(h,null,g(o.plannedBooks,t=>(r(),l("tr",{key:t.id},[k(i,{bookProp:t},null,8,["bookProp"])]))),128)),ys,(r(!0),l(h,null,g(o.finishedBooks,t=>(r(),l("tr",{key:t.id},[k(i,{bookProp:t},null,8,["bookProp"])]))),128))])])])])])):P("",!0)}const Ps=M(H,[["render",Bs],["__scopeId","data-v-02866eff"]]);export{Ps as default};
