import{_ as u,n as p,X as m,Y as f,r as s,o as h,c as k,a as o,b as a,w as g,Z as l,P as x,p as B,e as w,j as r}from"./index-160b4c87.js";const C={setup(){async function e(){try{await l.getTopBooks(),l.sortList("Paperback Trade Fiction")}catch(t){x.error(t.message)}}return p(()=>{e()}),{goToBookclubs(){document.getElementById("bookclubList").scrollIntoView()}}},components:{NYTCard:m,BookClubSearch:f}},c=e=>(B("data-v-b92b6080"),e=e(),w(),e),v={class:"container-fluid"},y={class:"row dark-blue-bg text-light"},T={class:"col-12 text-center mt-5 mb-3 pb-5"},S=c(()=>o("div",{class:"mb-4"},[o("h1",{class:"fw-bold"},[r(" Find a "),o("span",{class:"orange-text"},"book club"),r(" right for you ")]),o("h3",null," Discuss, rate, and enjoy the books you love with a community you create. ")],-1)),I=c(()=>o("button",{class:"fs-3 btn light-blue-btn m-2"}," Make a Book Club ",-1)),N=c(()=>o("section",{class:"row"},[o("div",{class:"col-12 d-flex p-0"},[o("img",{class:"img-fluid home-banner flex-fill",src:"https://images.unsplash.com/photo-1618414952052-289dab88b409?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",alt:"book shelf"})])],-1)),Y={class:"row"};function D(e,t,H,n,M,P){const i=s("router-link"),d=s("NYTCard"),b=s("BookClubSearch");return h(),k("div",v,[o("section",y,[o("div",T,[S,o("div",null,[o("button",{onClick:t[0]||(t[0]=(..._)=>n.goToBookclubs&&n.goToBookclubs(..._)),class:"fs-3 btn orange-btn m-2"}," Find a Book Club "),a(i,{to:{name:"Create Book Club"}},{default:g(()=>[I]),_:1})])])]),N,o("section",Y,[a(d)]),a(b)])}const j=u(C,[["render",D],["__scopeId","data-v-b92b6080"]]);export{j as default};
