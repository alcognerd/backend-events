import{r as i,k as _,a as q,j as s,S as L}from"./index-C1C7CAEQ.js";import{A as z,g as k}from"./Avatar-ev3lOT99.js";import{G as A}from"./iconBase-Bd1mD37r.js";import{k as G,m as T}from"./api-CJ7_z0NO.js";import{u as I}from"./useQuery-CyVCY3EZ.js";import{f as V}from"./time-VhdYBW02.js";import{f as F}from"./index-Cp4pUieE.js";function P(m){return A({tag:"svg",attr:{viewBox:"0 0 16 16",fill:"currentColor"},child:[{tag:"path",attr:{d:"M1 1.91L1.78 1.5L15 7.44899V8.3999L1.78 14.33L1 13.91L2.58311 8L1 1.91ZM3.6118 8.5L2.33037 13.1295L13.5 7.8999L2.33037 2.83859L3.6118 7.43874L9 7.5V8.5H3.6118Z"},child:[]}]})(m)}const D=({selectedGroup:m,toggleSidebar:$})=>{var j,w;const[l,u]=i.useState([]),[f,c]=i.useState(""),{socket:o}=_(),t=m,{user:x}=q(),[E,g]=i.useState(!1),p=i.useRef(null),{data:r}=I({queryKey:["getgroups",t],queryFn:()=>G(t),enabled:!!t}),{data:d,isPending:M}=I({queryKey:["fetchChat",t],queryFn:()=>T(t),enabled:!!t,onSuccess:e=>{u(e)}});i.useEffect(()=>{u(d==null?void 0:d.data)},[d]),i.useEffect(()=>{if(!(!t||!o))return o.emit("joinRoom",t),o.on("newMessage",e=>{u(n=>[...n,e])}),()=>{o.off("newMessage")}},[t,o]),i.useEffect(()=>{var e;(e=p.current)==null||e.scrollIntoView({behavior:"smooth"})},[l]);const R=async e=>{if(e.preventDefault(),!f.trim())return;g(!0);const a=await(await fetch("/api/message/send",{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify({message:f,groupId:t})})).json();o.emit("newMessage",a),c(""),g(!1)};return s.jsxs("div",{className:"lg:w-2/3 w-full bg-zinc-900 text-white h-full overflow-y-auto rounded-lg block",children:[M?s.jsx("div",{className:"h-full w-full flex justify-center items-center",children:s.jsx(L,{})}):"",s.jsxs("div",{className:`h-[8.33%] w-full flex items-center p-2 gap-2
       shadow-lg text-white bg-zinc-700 rounded-t-lg`,children:[s.jsx("div",{className:"lg:hidden p-2",children:s.jsx("button",{onClick:$,className:"text-white",children:s.jsx(F,{})})}),s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx(z,{size:"sm",name:(j=r==null?void 0:r.data)==null?void 0:j.name}),s.jsx("h1",{className:"text-lg font-bold truncate ",children:((w=r==null?void 0:r.data)==null?void 0:w.name)||"Group Name"})]})]}),s.jsxs("ul",{className:"flex flex-col gap-3 mx-4 p-4 h-5/6 overflow-y-auto scroll-smooth rounded-lg shadow-inner",children:[(l==null?void 0:l.length)===0&&s.jsx("div",{className:"h-full w-full flex justify-center items-center text-gray-400",children:s.jsx("p",{children:"Start a new conversation"})}),l==null?void 0:l.map(e=>{var a,y,b,N,h,v,S,C;const n=(x==null?void 0:x._id)===((a=e==null?void 0:e.senderId)==null?void 0:a._id);return s.jsxs("li",{ref:p,className:`flex items-end ${n?"flex-row-reverse":"flex-row"} w-full`,children:[s.jsx("div",{className:`${n?"ml-3":"mr-3"}`,children:s.jsx(z,{size:"sm",name:(y=e==null?void 0:e.senderId)==null?void 0:y.userName,bgColor:k((b=e==null?void 0:e.senderId)==null?void 0:b.userName)})}),s.jsxs("div",{className:`p-2 flex ${n?"justify-end bg-gray-800":"justify-start bg-gray-700"} flex-col text-white rounded-xl max-w-[60%] shadow-md`,children:[s.jsxs("p",{className:`text-xs justify-between flex ${n?"text-right ":"text-left "} mb-1`,children:[s.jsx("span",{className:"",style:{color:k((N=e==null?void 0:e.senderId)==null?void 0:N.userName)},children:(h=e==null?void 0:e.senderId)==null?void 0:h.userName}),s.jsx("span",{className:`${((S=(v=r==null?void 0:r.data)==null?void 0:v.admin)==null?void 0:S._id)===((C=e==null?void 0:e.senderId)==null?void 0:C._id)?"inline-block":"hidden"} bg-yellow-200 text-xs text-black px-2 ml-2 rounded-full`,children:"Host"})]}),s.jsx("p",{className:"font-mono text-sm leading-relaxed",children:e==null?void 0:e.message}),s.jsx("p",{className:`text-xs font-mono ${n?"text-left":"text-right"} mt-2 text-gray-400`,children:V(e==null?void 0:e.createdAt)})]})]},e==null?void 0:e._id)})]}),s.jsxs("form",{onSubmit:R,className:`w-full h-[8.33%] px-4 py-2 bg-zinc-700 flex items-center justify-between rounded-b-lg
         border-t border-gray-600 overflow-hidden`,children:[s.jsx("input",{type:"text",value:f,onChange:e=>c(e.target.value),placeholder:"Type a message...",className:"h-full w-5/6 md:w-[90%] text-slate-200 bg-zinc-800 p-2 rounded-lg border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-purple-500"}),s.jsx("button",{type:"submit",className:"bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-800 text-white p-2  shadow-md transition-transform transform hover:scale-110",children:E?s.jsx(L,{size:"sm"}):s.jsx(P,{size:20})})]})]})};export{D as default};
