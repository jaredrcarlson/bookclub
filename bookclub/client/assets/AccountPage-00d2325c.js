import{_ as x,f as w,g as d,P as p,l as C,m as M,r as v,o as e,c,a as s,t as _,F as m,h,i as g,j as k,b as u,w as B,k as r,p as P,e as A}from"./index-04b1d668.js";const I={setup(){let i=w(!1);return{loadingRef:i,computedDescription(n){return n.length>100?n.substring(0,98)+"...":n},account:d(()=>r.account),myMemberships:d(()=>r.myMemberships?r.myMemberships.filter(n=>n.club):[]),myBooks:d(()=>r.myBooks),finishedBooks:d(()=>{var a;return(a=r.myBooks)==null?void 0:a.filter(t=>t.status=="finished")}),plannedBooks:d(()=>{var a;return(a=r.myBooks)==null?void 0:a.filter(t=>t.status=="planned")}),currentBooks:d(()=>{var a;return(a=r.myBooks)==null?void 0:a.filter(t=>t.status=="reading")}),async leaveClub(n){try{if(!await p.confirm("Are you sure you want to leave this club?"))return;i.value=!0,C.log(n),await M.leaveClub(n),p.success("You have left this club."),i.value=!1}catch(a){p.error(a.message)}}}}},l=i=>(P("data-v-7e327caf"),i=i(),A(),i),D={key:0,class:"container-fluid"},L={class:"row"},S={class:"col-12 p-0"},R={class:"image-container"},V=["src","alt"],N={class:"account-name"},j={class:"fs-2 pe-2 m-0"},F=["alt"],H=["src","alt"],T={class:"row mt-5"},G={class:"col-12 mt-5"},U={class:"m-3"},Y=l(()=>s("span",{class:"fs-2"}," About Me: ",-1)),q={class:"fs-4"},E=l(()=>s("section",{class:"row"},[s("div",{class:"col-12"},[s("p",{class:"m-3 fs-1"}," My Clubs ")])],-1)),W={key:0,class:"row mb-4"},z={class:"membership-card mx-3"},J=["src"],K={class:"dark-blue-bg p-3 text-light card-description"},O={class:"fs-5"},Q={key:0,class:"mt-auto"},X=["onClick"],Z=l(()=>s("i",{class:"mdi mdi-account-minus"},null,-1)),$={class:"row mb-4"},ss={class:"col-12"},ts={class:"m-3 fs-1"},os=l(()=>s("span",{class:"pe-3"}," My Booklist ",-1)),es={class:"fs-3 pe-4"},cs=l(()=>s("i",{class:"mdi mdi-book-multiple"},null,-1)),ns=l(()=>s("button",{class:"btn orange-btn",title:"Add a Book to My List"},[s("i",{class:"mdi mdi-book-plus"}),k(" Add a Book to My List ")],-1)),as={class:"row mb-4"},ls={class:"col-12"},is={style:{"overflow-x":"auto"},class:"ms-3"},rs={id:"books"},ds=l(()=>s("tr",null,[s("th",{class:"ps-2"}," Title "),s("th",{class:"ps-2"}," Progress "),s("th",{class:"ps-2 text-center"}," Rating "),s("th",{class:"ps-2 text-end"}," Timestamp "),s("th")],-1)),_s=l(()=>s("tr",null,[s("td",{class:"large-text-style fs-4 orange-text"},"Currently Reading"),s("td"),s("td"),s("td"),s("td")],-1)),us=l(()=>s("tr",null,[s("td",{class:"large-text-style fs-4 orange-text"},"Planning to Read"),s("td"),s("td"),s("td"),s("td")],-1)),ms=l(()=>s("tr",null,[s("td",{class:"large-text-style fs-4 orange-text"},"Finished Books"),s("td"),s("td"),s("td"),s("td")],-1)),hs=l(()=>s("section",{class:"row justify-content-center"},[s("div",{class:"col-10 my-3"})],-1));function fs(i,n,a,t,ps,gs){var b;const y=v("router-link"),f=v("UserBookListItem");return t.account.id?(e(),c("div",D,[s("section",L,[s("div",S,[s("div",R,[s("img",{class:"img-fluid account-img me-4",src:t.account.picture,alt:t.account.name},null,8,V),s("div",N,[s("p",j,_(t.account.name),1)]),t.account.coverImg?(e(),c("img",{key:1,class:"coverImg-style img-fluid",src:t.account.coverImg,alt:t.account.name},null,8,H)):(e(),c("img",{key:0,class:"coverImg-style img-fluid",src:"https://images.unsplash.com/photo-1551043047-1d2adf00f3fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",alt:t.account.name},null,8,F))])])]),s("section",T,[s("div",G,[s("p",U,[Y,s("span",q,_(t.account.bio),1)])])]),E,Array.isArray(t.myMemberships)&&t.account.id?(e(),c("section",W,[(e(!0),c(m,null,h(t.myMemberships,o=>(e(),c("div",{class:"col-md-4 col-12 my-3",key:o.id},[s("div",z,[u(y,{to:{name:"Club About Page",params:{clubId:o.club.id}}},{default:B(()=>[s("img",{class:"img-fluid card-img",src:o.club.coverImg,alt:"card img"},null,8,J)]),_:2},1032,["to"]),s("div",K,[s("p",O,_(o.club.name),1),s("p",null,_(t.computedDescription(o.club.description)),1),t.loadingRef==!1&&o.role!="creator"?(e(),c("div",Q,[s("button",{class:"btn orange-btn",onClick:ks=>t.leaveClub(o.id),title:"Leave Club"},[Z,k(" Leave Club ")],8,X)])):g("",!0)])])]))),128))])):g("",!0),s("section",$,[s("div",ss,[s("p",ts,[os,s("span",es,[cs,k(" "+_((b=t.myBooks)==null?void 0:b.length),1)]),s("span",null,[u(y,{to:{name:"Book Search"}},{default:B(()=>[ns]),_:1})])])])]),s("section",as,[s("div",ls,[s("div",is,[s("table",rs,[ds,_s,(e(!0),c(m,null,h(t.currentBooks,o=>(e(),c("tr",{key:o.id},[u(f,{bookProp:o},null,8,["bookProp"])]))),128)),us,(e(!0),c(m,null,h(t.plannedBooks,o=>(e(),c("tr",{key:o.id},[u(f,{bookProp:o},null,8,["bookProp"])]))),128)),ms,(e(!0),c(m,null,h(t.finishedBooks,o=>(e(),c("tr",{key:o.id},[u(f,{bookProp:o},null,8,["bookProp"])]))),128))])])])]),hs])):g("",!0)}const bs=x(I,[["render",fs],["__scopeId","data-v-7e327caf"]]);export{bs as default};
