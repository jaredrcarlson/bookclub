import{_ as c,n as i,g as d,a0 as l,r as _,o as e,c as o,b as p,$ as m,P as h,k,a as s,j as u}from"./index-04b1d668.js";const T={setup(){async function t(){try{await m.getTopBooks()}catch(a){h.error(a.message)}}return i(()=>{t()}),{nytLists:d(()=>k.nytLists)}},components:{NYTListCard:l}},f={class:"container-fluid ghost-bg"},y=s("section",{class:"row"},[s("div",{class:"col-12 mt-3 text-center"},[s("h1",null," The New York Times Best Sellers "),s("p",null," Find your new favorite book from The New York Times! ")])],-1),g={key:0,class:"row"},N={key:1,class:"row"},w=s("div",{class:"col-12"},[s("h1",{class:"text-dark"},[u(" Loading... "),s("i",{class:"mdi mdi-loading mdi-spin"})])],-1),B=[w];function L(t,a,Y,n,v,x){const r=_("NYTListCard");return e(),o("div",f,[y,Array.isArray(n.nytLists)?(e(),o("section",g,[p(r)])):(e(),o("section",N,B))])}const $=c(T,[["render",L]]);export{$ as default};
