(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{186:function(e,t,n){Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.t.bind(n,5541,23)),Promise.resolve().then(n.t.bind(n,9247,23)),Promise.resolve().then(n.t.bind(n,4676,23)),Promise.resolve().then(n.bind(n,6589)),Promise.resolve().then(n.t.bind(n,626,23)),Promise.resolve().then(n.t.bind(n,8961,23)),Promise.resolve().then(n.bind(n,475))},5273:function(e,t,n){"use strict";n.d(t,{CollapsibleSection:function(){return r}});var a=n(7437),l=n(2265);n(4045);let r=e=>{let{label:t,children:n}=e,[r,s]=(0,l.useState)(!1);return r?(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"collapsibleHeader",children:[t,(0,a.jsx)("button",{type:"button",onClick:()=>s(!1),"aria-label":"Hide ".concat(t),children:"-"})]}),n]}):(0,a.jsxs)("div",{className:"collapsibleHeader",children:[t,(0,a.jsx)("button",{type:"button",onClick:()=>s(!0),"aria-label":"Show ".concat(t),children:"+"})]})}},6589:function(e,t,n){"use strict";n.d(t,{DarkModeToggle:function(){return r}});var a=n(7437),l=n(2265);let r=()=>{let[e,t]=(0,l.useState)("undefined"!=typeof localStorage&&"dark"===localStorage.getItem("theme"));(0,l.useEffect)(()=>{!localStorage.getItem("theme")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(t(!0),localStorage.setItem("theme","dark"))},[]),(0,l.useEffect)(()=>{document.body.classList.remove("dark-theme","light-theme"),document.body.classList.add(e?"dark-theme":"light-theme"),localStorage.setItem("theme",e?"dark":"light")},[e]);let n=(0,l.useCallback)(()=>{t(!e)},[e,t]);return(0,a.jsxs)("label",{htmlFor:"prefers-dark-theme",children:[(0,a.jsx)("input",{type:"checkbox",id:"prefers-dark-theme",checked:e,onChange:()=>n()})," ","Dark theme?"]})}},475:function(e,t,n){"use strict";n.d(t,{Sidebar:function(){return v}});var a=n(7437),l=n(2265),r=n(6463),s=n(5273),c=n(662),i=n(9),o=n(7185);n(4676);let d=e=>{let{children:t}=e;return(0,a.jsx)("div",{className:"card",children:t})};var h=n(3191),u=n(1642),m=n.n(u),f=n(7138),b=n(6800),g=n.n(b);n(9196);let x=e=>{let{entry:t,isSelected:n,searchQuery:l}=e,r=l?(0,c.A)("?q=".concat(l)):"",[s,o]=t.resolution.split("x").map(e=>parseInt(e,10));return(0,a.jsx)(f.default,{className:g()("entry",{selected:n}),href:"/".concat((0,i.Q)(t.src)).concat(r),children:(0,a.jsx)("img",{src:m().join("/pixel-art-gallery","/img/".concat(t.src)),alt:t.src,width:s,height:o,loading:"lazy"})})},p=e=>{let{countByTag:t,limit:n=Number.MAX_SAFE_INTEGER}=e;return(0,a.jsx)(a.Fragment,{children:t.slice(0,n).map((e,n)=>{let{tag:r,count:s}=e;return(0,a.jsxs)(l.Fragment,{children:[(0,a.jsxs)(f.default,{href:(0,c.A)("?q=#".concat(r)),children:[r," (",s,")"]}),n<t.length-1&&", "]},"tag-with-count-".concat(r))})})};n(4072),h.I.load();let v=()=>{var e;let t=(0,r.usePathname)(),n=(0,r.useRouter)(),l=h.I.countByTag(),u=(null===(e=(0,r.useSearchParams)().get("q"))||void 0===e?void 0:e.trim())||"",m=h.I.findAll(e=>(0,o.V)(decodeURIComponent(u),e)).reverse(),f=e=>{let t="?q=".concat((0,c.A)(e));n.push(t)},b=t.includes("/pixel-art-gallery")?"/pixel-art-gallery/":"/";return(0,a.jsx)(d,{children:(0,a.jsxs)("aside",{className:"sidebar",children:[(0,a.jsxs)("div",{className:"header",children:[(0,a.jsxs)("div",{className:"search-bar",children:[(0,a.jsx)("input",{type:"text",value:decodeURIComponent(u),onChange:e=>{f(e.target.value)},placeholder:"Search"}),(0,a.jsx)("button",{type:"button","aria-label":"Clear search field",onClick:()=>{f("")},children:"x"})]}),(0,a.jsxs)("div",{className:"content",children:[m.length," ",1===m.length?"entry":"entries","."]}),(0,a.jsx)("div",{className:"content",children:(0,a.jsx)(s.CollapsibleSection,{label:"Most used tags",children:(0,a.jsx)(p,{countByTag:l,limit:10})})})]}),(0,a.jsx)("div",{className:"entriesList",children:m.map((e,n)=>{let l=t.includes((0,i.Q)(e.src))||t===b&&0===n;return(0,a.jsx)(x,{entry:e,isSelected:l,searchQuery:u},"sidebar-item-".concat(e.src))})})]})})}},9247:function(){},8961:function(){},4676:function(){},4045:function(){},626:function(){},4072:function(){},9196:function(){},5541:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_8dea16', '__Noto_Sans_Fallback_8dea16'",fontWeight:400,fontStyle:"normal"},className:"__className_8dea16"}}},function(e){e.O(0,[993,295,489,291,666,971,23,744],function(){return e(e.s=186)}),_N_E=e.O()}]);