import{_ as C,v as h,E as y,j as t,S as g,Q as P,r as u,o as a,c,a as l,q as f,n as d,b as _,F as v,k,u as e,l as p,x,P as M}from"./index-627609b6.js";const w={setup(){const n=h();async function i(){try{const s=n.params.clubId;await x.getClubPosts(s)}catch(s){M.error(s.message)}}return y(()=>{i()}),{route:n,selectedClub:t(()=>e.selectedClub),clubPosts:t(()=>e.clubPosts),account:t(()=>e.account),activeClubPost:t(()=>e.activeClubPost),inClub:t(()=>{const s=e.myMemberships.find(o=>o.clubId==n.params.clubId);return p.log(s),p.log(e.myMemberships),s}),myMemberships:t(()=>e.myMemberships)}},components:{PostCard:g,PostForm:P}},F={class:"container-fluid"},I={class:"row"},A={class:"col-12"},N={class:"m-3"},V={key:0,class:"ps-5"},B={key:0,type:"button","data-bs-toggle":"collapse","data-bs-target":"#formCollapse",class:"btn orange-btn"},D={class:"collapse",id:"formCollapse"};function E(n,i,s,o,S,j){const m=u("PostForm"),b=u("PostCard");return a(),c("div",F,[l("section",I,[l("div",A,[l("h1",N,[f(" Club Discussions "),o.account.id&&Array.isArray(o.myMemberships)?(a(),c("span",V,[o.inClub?(a(),c("button",B,"Make Post")):d("",!0)])):d("",!0)]),l("div",D,[_(m,{isAnnouncement:!1})])])]),(a(!0),c(v,null,k(o.clubPosts,r=>(a(),c("section",{key:r==null?void 0:r.id,class:"row bg-white elevation-5 rounded py-3 my-3"},[_(b,{postProp:r},null,8,["postProp"])]))),128))])}const L=C(w,[["render",E],["__scopeId","data-v-94352476"]]);export{L as default};
