const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/GroupSidebar-DFLx_AZ_.js","assets/index-C1C7CAEQ.js","assets/index-BkUhCgrP.css","assets/useQuery-CyVCY3EZ.js","assets/api-CJ7_z0NO.js","assets/index-Cp4pUieE.js","assets/iconBase-Bd1mD37r.js","assets/index-Dz3XHTch.js","assets/GroupChatSection-4Gd1No9K.js","assets/Avatar-ev3lOT99.js","assets/time-VhdYBW02.js","assets/GroupEmptyView-BT1vetSp.js"])))=>i.map(i=>d[i]);
import{r as s,_ as l,j as e,S as i}from"./index-C1C7CAEQ.js";const o=s.lazy(()=>l(()=>import("./GroupSidebar-DFLx_AZ_.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))),u=s.lazy(()=>l(()=>import("./GroupChatSection-4Gd1No9K.js"),__vite__mapDeps([8,1,2,9,6,4,3,10,5]))),p=s.lazy(()=>l(()=>import("./GroupEmptyView-BT1vetSp.js"),__vite__mapDeps([11,1,2,5,6]))),_=()=>{const[t,n]=s.useState(null),[a,c]=s.useState(!1),r=()=>{c(!a)};return e.jsxs("div",{className:"flex p-2 w-full h-screen gap-2",children:[e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"w-full h-screen flex items-center justify-center",children:e.jsx(i,{})}),children:e.jsx(o,{selectedGroup:t,setSelectedGroup:n,isSidebarOpen:a,toggleSidebar:r})}),e.jsx(s.Suspense,{fallback:e.jsx("div",{className:"w-full h-screen flex items-center justify-center",children:e.jsx(i,{})}),children:t?e.jsx(u,{selectedGroup:t,toggleSidebar:r}):e.jsx(p,{toggleSidebar:r})})]})};export{_ as default};
