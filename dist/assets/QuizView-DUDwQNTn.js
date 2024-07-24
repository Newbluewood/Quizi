import{_ as y,k as L,o as r,c as _,e as s,F as $,i as P,h as t,l as b,t as A,m as N,q as F,s as Q,x as I,j,T as q,u as Z,r as g,w as O,y as K,d as l,v as d,z as ee,n as se,f as k,A as te,p as J,g as X,B as E,a as oe}from"./index-Dh8wfNmB.js";const ne={class:"pagination"},le=["onClick"],ie={class:"pagination"},ae=["href","onClick"],ue={__name:"PaginationComponent",setup(p){const e=L();return(a,v)=>(r(),_($,null,[s("div",ne,[(r(!0),_($,null,P(t(e).isChecked,(n,u)=>(r(),_("div",{class:b(["question",{isChecked:n!=null}]),onClick:f=>t(e).showQuestion(u),key:u},A(u+1),11,le))),128))]),s("div",ie,[(r(!0),_($,null,P(t(e).isChecked,(n,u)=>(r(),_("a",{href:"#"+u+"a",class:b(["question",{isChecked:n!=null,inFocus:t(e).isFocused,All:!t(e).isFocused}]),onClick:f=>t(e).showQuestion(u),key:u},A(u+1),11,ae))),128))])],64))}},ce=y(ue,[["__scopeId","data-v-5a4dfb93"]]),de="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACDklEQVR42qVVS0scQRCuvAi5BHLIIU8S8gtCLskhDwjoaPXsetm/sNuz6yh68Oj8Bm++tntURFjEg+Dj6s1/4IoI6lU8+D74rAKVLXdsZscPiml6uqu/+qq6GlwoTqjPge0MA6uWA4t1bdQRG495rmSwOzD5T9AqSjF+CIwaCQyek6Mrl2mLF/StlWz+C6QBLe6iTYe8uTXDAx1jzu3cYC8zcjtyR6Ot6nEwF84zH9IUSTjqfXTJkkWuynjufSP7amZnBmfpO9hMEMfuSpGrJSPTYbiCJ0Aox51/hB8aszLAdZ5Ja4M2iqKn0ABtcUPmQ1VAG7WUgfl0oVZ4Bg0oGz8fGHV5b+2CODWVGTUXRX+fiwqMVRvNnyYQqQNnPFkCtUIhbsmQcb448uOF27mspgcOwAEghFPeazpk9WZ+ORzyXgpZrPqvDZ64ypVzsH7vx6ZgOI1viGF/X63wSvQri//IwbFbUqw3JZk3FWPvGzhArH9zV02RswXglptwebbFIbKF/xKyOkxXMQDu50kXjRPcPel/lXXu/yTm++l6kjrji3Yb8njyIty5jURP5L7T3F4rt1w8MA+HjbuU5Bmpuds4yuJU+zuZuFh1SKmyt2si5EMS+LF47IPDvQ1c4MdCypVeFl31FaRBWPXeklxDXAnpJMFJobkLzS+dqpCDRbI1flTYeMyXiLQu8xqXj2t+xs1+dTRhaQAAAABJRU5ErkJggg==",re={key:0,class:"popup-mask"},_e={class:"popup-container"},pe={class:"popup-header"},ve={class:"popup-body"},he={class:"popup-footer"},me={__name:"ThePopUp",setup(p){const e=Boolean;return(a,v)=>(r(),N(q,{name:"popup"},{default:F(()=>[t(e)?(r(),_("div",re,[s("div",_e,[s("div",pe,[Q(a.$slots,"header",{},void 0,!0)]),s("div",ve,[Q(a.$slots,"body",{},()=>[I("Your Quiz wizard !")],!0)]),s("div",he,[Q(a.$slots,"footer",{},()=>[I(" API "),s("button",{class:"popup-default-button",onClick:v[0]||(v[0]=n=>a.$emit("closep"))},"OK")],!0)])])])):j("",!0)]),_:3}))}},ge=y(me,[["__scopeId","data-v-156aa1cc"]]),fe={key:0,class:"modal-mask"},be={class:"modal-container"},Ae={class:"modal-header"},we={class:"modal-body"},Ce={class:"modal-footer"},ke=!1,Se=!0,$e={__name:"TheModalWarn",setup(p){const e=Boolean;return(a,v)=>(r(),N(q,{name:"modal"},{default:F(()=>[t(e)?(r(),_("div",fe,[s("div",be,[s("div",Ae,[Q(a.$slots,"header",{},void 0,!0)]),s("div",we,[Q(a.$slots,"body",{},()=>[I("Your Quiz wizard !")],!0)]),s("div",Ce,[Q(a.$slots,"footer",{},()=>[I(" API "),s("button",{class:"modal-default-button",onClick:v[0]||(v[0]=n=>a.$emit("closew",ke))}," No. Resume. "),s("button",{class:"modal-default-button",onClick:v[1]||(v[1]=n=>a.$emit("closew",Se))},"Yes")],!0)])])])):j("",!0)]),_:3}))}},Fe=y($e,[["__scopeId","data-v-26a06904"]]),S=p=>(J("data-v-2e089f66"),p=p(),X(),p),Qe={class:"QuestionTemplate"},ye={class:"buttonsSection"},ze={class:"loading"},Pe=S(()=>s("div",null,"Loading...",-1)),Ie=S(()=>s("div",{class:"frameLoad"},[s("div",{class:"ball"})],-1)),Te=[Pe,Ie],Me={class:"buttonwrapper"},Ue=["disabled"],De={class:"button-main"},Re={class:"mobileSlideButtons"},Oe={class:"CarouselPrevious mobile"},Ee=S(()=>s("span",{class:"icon-left-open"},null,-1)),Le=[Ee],Ve={class:"CarouselNext mobile"},Be=S(()=>s("span",{class:"icon-right-open"},null,-1)),Ne=[Be],je={class:"CarouselPrevious wide"},qe=S(()=>s("span",{class:"icon-left-open"},null,-1)),Je=[qe],Xe=["id"],Ge={class:"Question"},We={for:"Question",class:"questions"},xe={class:"inputs"},He={class:"question-field"},Ye={class:"Answers"},Ze=S(()=>s("legend",null,"Answers",-1)),Ke=["onClick"],es={class:"checkIn"},ss=["data-aswer"],ts=S(()=>s("img",{src:de,alt:"alt",width:"21px",height:"21px"},null,-1)),os=[ts],ns={class:"CarouselNext wide"},ls=S(()=>s("span",{class:"icon-right-open"},null,-1)),is=[ls],as={class:"popup"},us={class:"popup"},cs={__name:"QuestionTemplate",setup(p){const e=L(),a=Z();let v=g([]);const n=g(0),u=g(!1),f=g([]),U=a.getUserId(),T=g(!1),M=g(!1),D=g(""),R=g(""),V=g(!1);function G(){T.value=!1}function W(i){M.value=!1,V.value=i,V.value&&(f.value.length===0?(e.isEnd=!0,H()):B()),f.value=[],n.value=0}function B(){e.getOut()}function x(){const i=new Date,c=i.getFullYear(),h=i.getMonth(),o=i.getDate(),w=i.getHours(),C=i.getMinutes();return new Date(Date.UTC(c,h,o,w,C)).toUTCString()}function H(){const i={},c=localStorage.getItem("AllResults"),h=JSON.parse(c);if(U.value!=0){for(let C of h)if(C.id===U.value){const m=g([]),z=g(0);m.value=C.quizes,z.value=m.value.length,console.log("UserQuizes",m.value),i.no=z.value+1,i.date=x(),i.score=n.value,m.value.push(i),console.log("New1: ",h),a.RESOULTS=h,localStorage.setItem("AllResults",JSON.stringify(h));return}const o={};o.id=U.value,o.nickname=a.UserName,o.quizes=[];const w={};w.no=1,w.date="today_now",w.score=n.value,console.log("points",n.value),o.quizes.push(w),console.log("New2: ",h),h.push(o),a.RESOULTS=h,localStorage.setItem("AllResults",JSON.stringify(h))}else console.log("not Loged User")}function Y(){for(let i=0;i<=e.isChecked.length;i++)e.isChecked[i]===null&&f.value.push(i+1);f.value.length!=0&&(console.log("notAnswered",f.value.length),M.value=!0,R.value=` You didn't answer on Question: 
 `+f.value+" Are you shure abouth that ??? "),f.value.length==0&&(console.log("notAnswered",f.value.length),M.value=!0,R.value=" Are you shure abouth that ??? ");for(let i of e.getResoults())console.log("PV",n.value),console.log("rezultat",i.points),n.value+=i.points;console.log("REZULTATI 1234: ",n.value),n.value=n.value/50*100}return O(()=>e.errorMsg,()=>{T.value=!0,D.value=e.errorMsg}),O(()=>e.isFetched,()=>{e.isFetched===!0&&(T.value=!0,D.value="Great! Now you have 20 questions that will be randomly selected by 10. Enjoy")}),O(()=>e.chosenQuestions,()=>{v.value=e.chosenQuestions}),(i,c)=>{const h=K("AppLink");return r(),_($,null,[s("div",Qe,[s("div",ye,[l(s("div",ze,Te,512),[[d,!t(e).isFetched&&t(e).start&&t(e).errorMsg===""]]),s("div",Me,[l(s("button",{class:"button-main",onClick:c[0]||(c[0]=o=>t(e).setIsInFocus())},A(t(e).isFocused?"Show All":"Focused "),513),[[d,t(e).start&&!t(e).isEnd]]),l(s("button",{class:b(["button-main",t(e).isFetched?"isDisabled":""]),onClick:c[1]||(c[1]=ee(o=>t(e).fillQuestionsFetched(),["prevent"])),disabled:t(e).isFetched||t(e).reGrab}," Call API /Get Questions ",10,Ue),[[d,!t(e).start&&!t(e).isFetched]]),l(s("button",{style:se({backgroundColor:u.value?"":"grey"}),class:"button-main",onClick:Y}," Finish Quiz / Get Out ",4),[[d,!t(e).isEnd&&t(e).isFetched]]),l(s("button",{class:"button-main",onClick:B}," Get Out ",512),[[d,t(e).isEnd&&t(e).isFetched]]),l(s("button",{class:"button-main",onClick:c[2]||(c[2]=(...o)=>t(e).getQuestions&&t(e).getQuestions(...o))}," Start quiz ! ",512),[[d,!t(e).isFetched&&t(e).start||t(e).isFetched&&!t(e).start]]),l(s("button",{class:"button-main",onClick:c[3]||(c[3]=(...o)=>t(e).getQuestions&&t(e).getQuestions(...o))}," New One ",512),[[d,t(e).start]]),l(s("button",De,[k(h,{to:"/board"},{default:F(()=>[I("Board")]),_:1})],512),[[d,t(e).isEnd]])])]),s("div",{class:b(["Questions",{isFocused:t(e).isFocused}])},[s("div",Re,[s("div",null,[l(s("div",Oe,[s("button",{class:"controls_button",onClick:c[4]||(c[4]=o=>t(e).previous())},Le)],512),[[d,t(e).isFocused]])]),s("div",null,[l(s("div",Ve,[s("button",{class:"controls_button",onClick:c[5]||(c[5]=o=>t(e).next())},Ne)],512),[[d,t(e).isFocused]])])]),l(s("div",je,[s("button",{class:"controls_button",onClick:c[6]||(c[6]=o=>t(e).previous())},Je)],512),[[d,t(e).isFocused]]),s("div",{class:b(["frame",{isFocused:t(e).isFocused}])},[k(te,{name:"slide",tag:"ul",class:b(["Que",{isFocused:t(e).isFocused}]),mode:"out-in"},{default:F(()=>[(r(!0),_($,null,P(t(v),(o,w)=>(r(),_("li",{class:b(["Main Test",{isActive:t(e).activeSlide===o.id,isFocused:t(e).isFocused,isAll:!t(e).isFocused}]),key:o.id,id:w+"a"},[s("fieldset",Ge,[s("legend",null,"Question "+A(o.id),1),s("label",We,[s("div",xe,A(o.tags),1),s("div",He,A(o.question)+".",1)]),s("fieldset",Ye,[Ze,s("label",{for:"Answers",class:b(["answers",t(e).isEnd?"end":""])},[(r(!0),_($,null,P(o.answers,(C,m,z)=>l((r(),_("div",{class:b(["answer-box",t(e).isChecked[o.id-1]==m&&t(e).isEnd?o.correct==m?"correct":"false":""]),key:C+m,onClick:Ms=>t(e).eventsManager(o.id,m,z)},[s("div",es,[l(s("i",{class:"ico","data-aswer":z},os,8,ss),[[d,t(e).isChecked[o.id-1]===m]])]),s("div",{class:b(["answer",t(e).isChecked[o.id-1]!=null&&t(e).isEnd?o.correct==m?"correct":"false":""])},A(C),3)],10,Ke)),[[d,C!=null]])),128))],2)])])],10,Xe))),128))]),_:1},8,["class"])],2),l(s("div",ns,[s("button",{class:"controls_button",onClick:c[7]||(c[7]=o=>t(e).next())},is)],512),[[d,t(e).isFocused]])],2)]),s("div",as,[l(k(ge,{onClosep:G},{header:F(()=>[s("h3",null,A(D.value),1)]),_:1},512),[[d,T.value]])]),s("div",us,[l(k(Fe,{onClosew:W},{header:F(()=>[s("h3",null,A(R.value),1)]),_:1},512),[[d,M.value]])])],64)}}},ds=y(cs,[["__scopeId","data-v-2e089f66"]]),rs={class:"OptionSelection"},_s={class:"optionsWrapper"},ps=s("p",null,"Category",-1),vs=oe('<option value="" selected>Pick from list ..</option><option value="uncategorized">Uncategorized</option><option value="code">Code</option><option value="linux">Linux</option><option value="bash">Bash</option><option value="sql">SQL</option><option value="cms">CMS</option><option value="docker">Docker</option><option value="devops">DdevOps</option>',9),hs=[vs],ms=s("p",null,"Difficulty",-1),gs=s("option",{value:"Easy"},"Easy",-1),fs={value:"Medium"},bs={value:"Hard"},As=s("p",null,"Tag",-1),ws=["value"],Cs={__name:"OptionSelection",setup(p){const e=L(),a=[{name:"Pick from list",value:[],selected:!0},{name:"HTML",value:"HTML",selected:!1},{name:"JavaScript",value:"JavaScript",selected:!1},{name:"PHP",value:"PHP",selected:!1}];return(v,n)=>(r(),_("div",rs,[l(s("div",_s,[s("div",null,[ps,l(s("select",{name:"APIs",id:"category","onUpdate:modelValue":n[0]||(n[0]=u=>t(e).category=u)},hs,512),[[E,t(e).category]])]),s("div",null,[ms,l(s("select",{name:"APIs",id:"difficulty","onUpdate:modelValue":n[1]||(n[1]=u=>t(e).dificulty=u)},[gs,l(s("option",fs,"Medium",512),[[d,t(e).tags!="JavaScript"]]),l(s("option",bs,"Hard",512),[[d,t(e).tags!="JavaScript"]])],512),[[E,t(e).dificulty]])]),l(s("div",null,[As,l(s("select",{cname:"APIs","onUpdate:modelValue":n[2]||(n[2]=u=>t(e).tags=u)},[(r(),_($,null,P(a,u=>s("option",{key:u.value,value:u.value},A(u.name),9,ws)),64))],512),[[E,t(e).tags]])],512),[[d,t(e).category=="code"]])],512),[[d,!t(e).isEnd&&!t(e).isFetched]])]))}},ks={class:"TheQuiz"},Ss={class:"paginationSection"},$s={class:"selectionSection"},Fs={class:"questionsSection"},Qs={__name:"TheQuiz",setup(p){return(e,a)=>(r(),_("div",ks,[s("div",Ss,[k(ce)]),s("div",$s,[k(Cs)]),s("div",Fs,[k(ds)])]))}},ys=y(Qs,[["__scopeId","data-v-c7935e4f"]]),zs=p=>(J("data-v-5f77b3ac"),p=p(),X(),p),Ps={class:"Quiz"},Is=zs(()=>s("h1",null,"Le Quiz",-1)),Ts={__name:"QuizView",setup(p){return(e,a)=>(r(),_("div",Ps,[Is,k(ys)]))}},Ds=y(Ts,[["__scopeId","data-v-5f77b3ac"]]);export{Ds as default};
