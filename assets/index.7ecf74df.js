import{h as y,r as b,o as r,c,a as t,b as l,w as p,t as _,d as x,F as w,e as d,p as m,f as g,g as S,v as I,i as V,n as T,j as $,k as C,l as E,m as L}from"./vendor.e889ad8c.js";const N=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))u(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const e of n.addedNodes)e.tagName==="LINK"&&e.rel==="modulepreload"&&u(e)}).observe(document,{childList:!0,subtree:!0});function i(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerpolicy&&(n.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?n.credentials="include":s.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function u(s){if(s.ep)return;s.ep=!0;const n=i(s);fetch(s.href,n)}};N();var D="/assets/icon.d89457dc.png";var h=(a,o)=>{const i=a.__vccOpts||a;for(const[u,s]of o)i[u]=s;return i};const O={data(){return{connectionStatus:navigator.onLine}},methods:{currentDateTime(){return y().format("YYYY/MM/DD")}}},R={class:"navbar navbar-expand-lg navbar-dark bg-dark"},A={class:"container-fluid"},M=t("img",{src:D,alt:"",style:{height:"50px"}},null,-1),Y=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),H={class:"collapse navbar-collapse",id:"navbarNavDropdown"},j={class:"navbar-nav"},W={class:"nav-item"},q=d("Home"),B={class:"nav-item"},F=d("About"),P={class:"nav-item"},z=d("Contact"),K={class:"nav-item dropdown"},G=t("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"}," Navigation ",-1),U={class:"dropdown-menu dropdown-menu-dark","aria-labelledby":"navbarDropdownMenuLink"},J=d(" TV-Shows "),Q=t("li",null,[t("a",{class:"dropdown-item",href:"#"},"Something else here")],-1),X={id:"time"},Z={class:"alert-container"},tt={key:0,class:"alert alert-warning alert-dismissible fade show",role:"alert"},et=d(" You are not connected to internet. "),at=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"},null,-1),st=[et,at],ot=t("footer",{class:"bg-light text-center text-white"},[t("div",{class:"container p-4 pb-0"},[t("section",{class:"mb-4"},[t("a",{class:"btn btn-primary btn-floating m-1",style:{"background-color":"#3b5998"},href:"#!",role:"button"},[t("i",{class:"fab fa-facebook-f"})]),t("a",{class:"btn btn-primary btn-floating m-1",style:{"background-color":"#55acee"},href:"https://twitter.com/Guas_ve",target:"_blank",role:"button"},[t("i",{class:"fab fa-twitter"})]),t("a",{class:"btn btn-primary btn-floating m-1",style:{"background-color":"#ac2bac"},href:"#!",role:"button"},[t("i",{class:"fab fa-instagram"})]),t("a",{class:"btn btn-primary btn-floating m-1",style:{"background-color":"#0082ca"},href:"#!",role:"button"},[t("i",{class:"fab fa-linkedin-in"})]),t("a",{class:"btn btn-primary btn-floating m-1",style:{"background-color":"#333333"},href:"#!",role:"button"},[t("i",{class:"fab fa-github"})])])]),t("div",{class:"text-center p-3",style:{"background-color":"rgba(0, 0, 0, 0.2)"}}," \xA9 2022 Copyright ")],-1);function nt(a,o,i,u,s,n){const e=b("RouterLink"),v=b("RouterView");return r(),c(w,null,[t("nav",R,[t("div",A,[l(e,{to:"/",class:"nav-link"},{default:p(()=>[M]),_:1}),Y,t("div",H,[t("ul",j,[t("li",W,[l(e,{to:"/",class:"nav-link"},{default:p(()=>[q]),_:1})]),t("li",B,[l(e,{to:"/about",class:"nav-link"},{default:p(()=>[F]),_:1})]),t("li",P,[l(e,{to:"/contact",class:"nav-link"},{default:p(()=>[z]),_:1})]),t("li",K,[G,t("ul",U,[t("li",null,[l(e,{to:"/search",class:"dropdown-item"},{default:p(()=>[J]),_:1})]),Q])]),t("p",X,_(n.currentDateTime()),1)])])])]),t("main",null,[t("div",Z,[s.connectionStatus!==!0?(r(),c("div",tt,st)):x("",!0)]),l(v)]),ot],64)}var it=h(O,[["render",nt]]),rt="/assets/icon.d89457dc.png";const ct={},f=a=>(m("data-v-694335eb"),a=a(),g(),a),lt={class:"card-container"},dt={class:"card",style:{width:"18rem"}},ut=f(()=>t("img",{src:rt,class:"card-img-top",alt:"..."},null,-1)),_t={class:"card-body"},pt=f(()=>t("h5",{class:"card-title"},"About",-1)),ht=f(()=>t("p",{class:"card-text"},[d(" This is a website where you can search for your favourite Tv-Show from all over the world. "),t("br"),t("br"),d(" With some of the shows you will be served with links so that you can easily access the website where the Tv-Show is streamed. You can also see what rating the Tv-Show has. Only to make it easy for you to find a show that you might like. ")],-1)),bt={class:"card-item-about"},vt=d(" Contact "),mt=d(" Search ");function gt(a,o,i,u,s,n){const e=b("RouterLink");return r(),c("div",lt,[t("div",dt,[ut,t("div",_t,[pt,ht,t("div",bt,[l(e,{to:"/contact",class:"btn btn-primary"},{default:p(()=>[vt]),_:1}),l(e,{to:"/search",class:"btn btn-primary"},{default:p(()=>[mt]),_:1})])])])])}var ft=h(ct,[["render",gt],["__scopeId","data-v-694335eb"]]);const yt={};function wt(a,o){return r(),c("h1",null,"Contact")}var $t=h(yt,[["render",wt]]),kt="/assets/placeholder.1a8352b9.png";const xt={data(){return{results:[],names:""}},methods:{fetchShows(){const a=`https://api.tvmaze.com/search/shows?q=${this.names}`;fetch(a).then(o=>o.json()).then(o=>{o.forEach(i=>{this.results.push({name:i.show.name,image:i.show.image?i.show.image.medium:"",links:i.show.officialSite,rating:i.show.rating.average,country:i.show.network.country.name})})}),this.results=[]},clear(){this.results=[],this.names=""},keyEnter(a){a.keyCode===13&&(a.preventDefault(),this.fetchShows())}}},St=a=>(m("data-v-b2778e60"),a=a(),g(),a),It={class:"input-container"},Vt={id:"buttons"},Tt={key:0},Ct=["src"],Et={key:1},Lt=St(()=>t("img",{style:{width:"40px",height:"40px"},src:kt},null,-1)),Nt=[Lt],Dt={id:"name-rating"},Ot=["href"],Rt={id:"rating"},At=d(" Rating: "),Mt={key:1};function Yt(a,o,i,u,s,n){return r(),c("div",It,[S(t("input",{id:"input",onKeyup:o[0]||(o[0]=(...e)=>n.keyEnter&&n.keyEnter(...e)),"onUpdate:modelValue":o[1]||(o[1]=e=>s.names=e),placeholder:"Search TV-Shows..."},null,544),[[I,s.names]]),t("div",Vt,[t("button",{onClick:o[2]||(o[2]=(...e)=>n.fetchShows&&n.fetchShows(...e)),type:"button",class:"btn btn-primary"}," Search "),t("button",{onClick:o[3]||(o[3]=(...e)=>n.clear&&n.clear(...e)),type:"button",class:"btn btn-danger"},"Clear")]),t("ul",null,[(r(!0),c(w,null,V(s.results,e=>(r(),c("li",{id:"results",key:e.id},[e.image!==""?(r(),c("div",Tt,[t("img",{src:e.image,style:{width:"40px"}},null,8,Ct)])):(r(),c("div",Et,Nt)),t("div",Dt,[t("a",{href:e.links,target:"_blank"},_(e.name),9,Ot),t("div",Rt,[At,e.rating!==null?(r(),c("p",{key:0,style:T([e.rating>=7?{color:"green"}:{color:"red"}])},_(e.rating),5)):(r(),c("p",Mt,"None"))]),t("p",null,_(e.country),1)])]))),128))])])}var k=h(xt,[["render",Yt],["__scopeId","data-v-b2778e60"]]);const Ht={props:{name:{type:String,default:""},rating:{type:String,default:""},country:{type:String,default:""},link:{type:String,default:""}}};function jt(a,o,i,u,s,n){return r(),c("ul",null,[t("li",null,_(i.name),1),t("li",null,_(i.rating),1),t("li",null,_(i.country),1),t("li",null,_(i.link),1)])}var Wt=h(Ht,[["render",jt]]),qt="/assets/tv-series.6997956c.webp",Bt="/assets/hbo-2.9c8018e4.png",Ft="/assets/TV_grid_sm@3x.b8084df9.png";const Pt={components:{InputSearchVue:k,infoComponentVue:Wt}},zt=a=>(m("data-v-50036b56"),a=a(),g(),a),Kt={class:"container-fluid"},Gt={class:"row"},Ut=$('<div class="col-lg-5" data-v-50036b56><div class="slider" data-v-50036b56><div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel" data-v-50036b56><div class="carousel-indicators" data-v-50036b56><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" data-v-50036b56></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" data-v-50036b56></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" data-v-50036b56></button></div><div class="carousel-inner" data-v-50036b56><div class="carousel-item active" data-v-50036b56><img src="'+qt+'" class="d-block w-100" alt="TV-Series image" data-v-50036b56></div><div class="carousel-item" data-v-50036b56><img src="'+Bt+'" class="d-block w-100" alt="..." data-v-50036b56></div><div class="carousel-item" data-v-50036b56><img src="'+Ft+'" class="d-block w-100" alt="..." data-v-50036b56></div></div><button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" data-v-50036b56><span class="carousel-control-prev-icon" aria-hidden="true" data-v-50036b56></span><span class="visually-hidden" data-v-50036b56>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" data-v-50036b56><span class="carousel-control-next-icon" aria-hidden="true" data-v-50036b56></span><span class="visually-hidden" data-v-50036b56>Next</span></button></div></div></div>',1),Jt={class:"col-lg-3"},Qt={class:"col-lg-4"},Xt={class:"accordion",id:"accordionExample"},Zt=$('<div class="accordion-item" data-v-50036b56><h2 class="accordion-header" id="headingOne" data-v-50036b56><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" data-v-50036b56> Why? </button></h2><div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample" data-v-50036b56><div class="accordion-body" data-v-50036b56> I&#39;ve built this website for you to provide accessibility to a smoother way of finding TV series. </div></div></div><div class="accordion-item" data-v-50036b56><h2 class="accordion-header" id="headingTwo" data-v-50036b56><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" data-v-50036b56> What I want to achieve! </button></h2><div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample" data-v-50036b56><div class="accordion-body" data-v-50036b56> I want to build an interactive and user-friendly website so that you as a visitor can quickly navigate between different streaming services. </div></div></div>',2),te={class:"accordion-item"},ee=zt(()=>t("h2",{class:"accordion-header",id:"headingThree"},[t("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"}," Info! ")],-1)),ae={id:"collapseThree",class:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},se={class:"accordion-body"},oe=d(" If available, this is the info you will get just by typing the name of your favourite Tv-Show: ");function ne(a,o,i,u,s,n){const e=b("InputSearchVue"),v=b("infoComponentVue");return r(),c("div",Kt,[t("div",Gt,[Ut,t("div",Jt,[l(e)]),t("div",Qt,[t("div",Xt,[Zt,t("div",te,[ee,t("div",ae,[t("div",se,[oe,l(v,{name:"Tv-show name",rating:" Rating 0 - 10",country:"In what country the tv-show is made",link:"Link to streaming services"})])])])])])])])}var ie=h(Pt,[["render",ne],["__scopeId","data-v-50036b56"]]);const re={components:{InputSearch:k}},ce={id:"container"};function le(a,o,i,u,s,n){const e=b("InputSearch");return r(),c("div",ce,[l(e)])}var de=h(re,[["render",le],["__scopeId","data-v-32b8b43a"]]),ue=C({history:E(),routes:[{component:ft,path:"/about"},{component:$t,path:"/contact"},{component:ie,path:"/"},{component:de,path:"/search"}]});L(it).use(ue).use(y).mount("#app");