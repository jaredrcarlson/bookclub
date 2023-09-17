import{_ as v,v as P,g as I,j as n,Q as k,R as w,r as f,o as s,c as a,a as c,q as x,n as C,b as g,F as S,k as B,x as F,P as h,m as M,u as t,p as N,e as V}from"./index-fed22fc1.js";const R={setup(){const o=P();async function r(){try{const e=o.params.clubId;await F.getClubAnnouncements(e)}catch(e){h.error(e.message)}}async function d(){try{const e=o.params.clubId;await M.getMembersByClubId(e)}catch(e){h.error(e.message)}}return I(()=>{r(),d()}),{announcements:n(()=>t.clubAnnouncements),member:n(()=>t.members),clubCreator:n(()=>t.members.find(e=>e.role=="creator")),clubAdmin:n(()=>t.members.find(e=>e.role=="admin")),account:n(()=>t.account),selectedClub:n(()=>t.selectedClub)}},components:{PostForm:k,AnnouncementCard:w}},j=o=>(N("data-v-8112336c"),o=o(),V(),o),q={class:"container-fluid"},E={class:"row"},L={class:"col-12"},Q={class:"m-3 fs-1"},T={key:0,class:"ps-5"},z=j(()=>c("button",{type:"button","data-bs-toggle":"collapse","data-bs-target":"#formCollapse",class:"btn orange-btn"},"Make Post",-1)),D=[z],G={class:"col-12"},H={class:"collapse",id:"formCollapse"},J={key:0,class:"m-3 fs-1"};function K(o,r,d,e,O,U){var l,u,i,m,_,b;const y=f("PostForm"),A=f("AnnouncementCard");return s(),a("div",q,[c("section",E,[c("div",L,[c("p",Q,[x(" Announcements "),e.account.id&&(((l=e.account)==null?void 0:l.id)==((u=e.clubCreator)==null?void 0:u.profile.id)||e.account.id==((i=e.clubAdmin)==null?void 0:i.profile.id))?(s(),a("span",T,D)):C("",!0)])]),c("div",G,[c("div",H,[e.account.id&&(((m=e.account)==null?void 0:m.id)==((_=e.clubCreator)==null?void 0:_.profile.id)||e.account.id==((b=e.clubAdmin)==null?void 0:b.profile.id))?(s(),a("p",J,[g(y,{isAnnouncement:!0})])):C("",!0)])])]),(s(!0),a(S,null,B(e.announcements,p=>(s(),a("section",{key:p.id,class:"row bg-white elevation-5 rounded py-3 my-3"},[g(A,{announcementProp:p},null,8,["announcementProp"])]))),128))])}const X=v(R,[["render",K],["__scopeId","data-v-8112336c"]]);export{X as default};
