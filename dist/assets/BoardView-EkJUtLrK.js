import{_ as y,u as E,r as a,w as A,o as i,c as d,e,t as l,h as R,d as m,v as f,F as B,i as D,j as V,n as I,p as z,g as L,f as q,b as H}from"./index-Dh8wfNmB.js";const h=t=>(z("data-v-be468817"),t=t(),L(),t),G={class:"Results"},Y={class:"header"},j={class:"userboard"},J=h(()=>e("h2",null,"Welcome back !",-1)),M=h(()=>e("br",null,null,-1)),W=h(()=>e("p",null,"Let's see how you've progressed :",-1)),K=h(()=>e("br",null,null,-1)),X={class:"dashboard"},Z=h(()=>e("p",null," You haven't completed any Quiz yet! No Problem. Try to do some, then come back and see what's new. Good luck ! ",-1)),ee={class:"span-score"},se={class:"span-date"},te={class:"bar"},oe=h(()=>e("br",null,null,-1)),ae={key:0,class:"othersboard"},le=h(()=>e("span",null," How others are doing ???",-1)),ne={class:"othersResults"},ce={class:"therm"},ue={class:"therm"},re={class:"therm"},ie={class:"therm"},de={class:"outlin"},_e={__name:"UserResults",emits:["score"],setup(t,{emit:_}){const o=E(),v=a(o.getRESOULTS()),u=a([]),n=a(null),S=a(!1),w=a(),N=a(0),O=a([]),U=a([]),$=o.getUserId(),C=o.isAdmin,T=a(!1),F=_,g=a(!1),p=a(!1);function P(){U.value=[];for(let r of O.value){const c=[],s={};s.id=r.id,s.nickname=r.nickname;let b=0,k=0;for(let x of r.quizes)b++,k+=x.score,c.push(x.score.length);s.No=b,s.pros=k/b,U.value.push(s)}g.value=!g.value}function Q(){let r=JSON.parse(localStorage.getItem("AllResults"));r==null&&(r=v.value);let c=0;for(let s of r)if(s.id===$.value){u.value.push(s),n.value=s.quizes;for(let b in n.value){const k=n.value[b].score;c+=k}c=c/n.value.length,N.value=c,w.value=n.value.length}else O.value.push(s);F("score",N.value),T.value=!0,S.value=!0,p.value=!0}return A(()=>u.value,()=>{console.log($)}),A(()=>o.RESOULTS,()=>{v.value=o.getRESOULTS(),console.log("haha",o.getRESOULTS())}),(r,c)=>(i(),d("div",G,[e("div",Y,[e("div",j,[e("h1",null,"Hi "+l(R(o).UserName),1),J,M,W,m(e("button",{class:"button-main",onClick:Q}," Let's take a look ! ",512),[[f,!S.value]]),m(e("button",{class:"button-main",onClick:c[0]||(c[0]=s=>p.value=!p.value)},l(p.value?" Hide !":" Let's take a look !"),513),[[f,S.value]]),m(e("span",null," You take "+l(w.value!=null?w.value:"0")+" quizes",513),[[f,p.value]]),K])]),m(e("div",X,[m(e("div",null,[e("div",null,[e("h3",null,l(R(o).UserName)+"!",1),Z])],512),[[f,n.value===null]]),(i(!0),d(B,null,D(n.value,s=>(i(),d("div",{class:"bars",key:s.no},[e("span",ee,l(s.score)+" % ",1),e("span",se,"Taken: "+l(s.date),1),e("div",te,[e("div",{class:"fill",style:I({width:s.score+"%"})},null,4)])]))),128)),oe],512),[[f,p.value]]),R(C)&&T.value?(i(),d("div",ae,[e("div",null,[e("button",{class:"button-main",onClick:P},l(g.value?" Hide !":" Peek !"),1),le]),e("div",null,[m(e("div",ne,[(i(!0),d(B,null,D(U.value,s=>(i(),d("div",{key:s.id},[e("span",ce,"User: "+l(s.nickname),1),e("span",ue,"Quizes: "+l(s.No),1),e("span",re,"Pros: "+l(s.pros.toFixed(0))+" %",1),e("span",ie,[e("div",de,[e("div",{class:"lin",style:I({width:s.pros+"%"})},null,4)])])]))),128))],512),[[f,g.value]])])])):V("",!0)]))}},ve=y(_e,[["__scopeId","data-v-be468817"]]),he=t=>(z("data-v-38ff8526"),t=t(),L(),t),pe={class:"Dashboard"},me=he(()=>e("span",null," - Average - ",-1)),fe={class:"points"},be={class:"bar"},ge={__name:"TheDashboard",setup(t){const _=a(0);function o(v){let u=0,n=setInterval(function(){u<v?(_.value=u+2,u+=2):clearInterval(n)},20)}return(v,u)=>(i(),d("div",pe,[me,e("span",fe,l(_.value.toFixed(0))+" %",1),e("div",be,[e("div",{class:"progres",style:I({width:_.value+"%"})},null,4)]),q(ve,{onScore:o})]))}},ke=y(ge,[["__scopeId","data-v-38ff8526"]]),Se=t=>(z("data-v-9a109ced"),t=t(),L(),t),we={class:"Test"},Ue=Se(()=>e("h1",null,"BOARD PAGE",-1)),Re={__name:"BoardView",setup(t){const _=H(),o=E();function v(){o.logout(),_.push({path:"/"}),o.avatar="Avatar_N.png"}return(u,n)=>(i(),d("div",we,[Ue,e("button",{onClick:v,class:"button-main"},"Log out"),q(ke)]))}},ye=y(Re,[["__scopeId","data-v-9a109ced"]]);export{ye as default};
