(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531],{100:function(e,n,t){Promise.resolve().then(t.t.bind(t,6685,23)),Promise.resolve().then(t.bind(t,355)),Promise.resolve().then(t.bind(t,898)),Promise.resolve().then(t.bind(t,699)),Promise.resolve().then(t.t.bind(t,3699,23)),Promise.resolve().then(t.t.bind(t,6656,23)),Promise.resolve().then(t.t.bind(t,6208,23)),Promise.resolve().then(t.t.bind(t,8169,23)),Promise.resolve().then(t.t.bind(t,1274,23))},699:function(e,n,t){"use strict";t.r(n),t.d(n,{ImageViewer:function(){return u}});var r=t(7437),s=t(9743),i=t.n(s),o=t(2265),l=t(4440),a=t.n(l);let c=e=>{let{zoom:n,min:t,max:s,label:i,increment:l=25,onChange:a}=e,c=(0,o.useCallback)(()=>{n+l<=s?a(n+l):a(s)},[n,a]),u=(0,o.useCallback)(()=>{n-l>=t?a(n-l):a(t)},[n,a]),d=(0,o.useCallback)(e=>{a(parseInt(e.target.value,10))},[a]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{htmlFor:"zoom-input",children:[i,(0,r.jsx)("input",{type:"range",id:"zoom-input",value:n,min:t,max:s,step:"5",onChange:d})]}),(0,r.jsx)("button",{type:"button","aria-label":"Zoom out",onClick:u,children:"-"}),(0,r.jsxs)("output",{children:[n,"%"]}),(0,r.jsx)("button",{type:"button","aria-label":"Zoom in",onClick:c,children:"+"})]})};t(2096);let u=e=>{let{image:n}=e,[t,s]=(0,o.useState)(200),l=(0,o.useCallback)(e=>{s(e)},[s]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:a()("image-viewer","scrollable"),children:(0,r.jsx)("img",{src:i().join("/".concat("/pixel-art-gallery"),"/img/".concat(n.src)),alt:n.src,className:"pixelArt",style:{transform:"scale(".concat(t/100,")")}})}),(0,r.jsx)("div",{className:"content",children:(0,r.jsx)(c,{zoom:t,min:100,max:500,label:"Zoom",increment:50,onChange:l})})]})}},355:function(e,n,t){"use strict";t.r(n),t.d(n,{Pagination:function(){return h}});var r=t(7437);t(2265);var s=t(4440),i=t.n(s),o=t(1396),l=t.n(o),a=t(4033),c=t(5002),u=t(6658),d=t(9207),m=t(151);c.I.load();let h=e=>{var n;let{id:t}=e,s=(0,a.useSearchParams)(),o=(null===(n=s.get("q"))||void 0===n?void 0:n.trim())||"",h=c.I.findAll(e=>(0,m.V)(decodeURIComponent(o),e)).reverse(),v=0;""!==t&&(v=h.findIndex(e=>t===(0,u.Q)(e.src)));let b=h[v-1],x=h[v+1],f=o?(0,d.A)("?q=".concat(o)):"",j=b?"/".concat((0,u.Q)(b.src)).concat(f):"",p=x?"/".concat((0,u.Q)(x.src)).concat(f):"";return(0,r.jsxs)("div",{className:i()("navigation","content"),children:[j?(0,r.jsx)(l(),{href:j,children:"Previous"}):(0,r.jsx)("span",{children:"Previous"}),p?(0,r.jsx)(l(),{href:p,children:"Next"}):(0,r.jsx)("span",{children:"Next"})]})}},898:function(e,n,t){"use strict";t.r(n);var r=t(8214);n.default=e=>{let{date:n}=e;return"(".concat((0,r.Z)(n,{addSuffix:!0}),")")}},1274:function(){},2096:function(){}},function(e){e.O(0,[569,35,576,971,596,744],function(){return e(e.s=100)}),_N_E=e.O()}]);