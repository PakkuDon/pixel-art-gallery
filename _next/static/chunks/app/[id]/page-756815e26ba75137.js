(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[531,931],{8020:function(e,n,t){Promise.resolve().then(t.t.bind(t,4724,23)),Promise.resolve().then(t.t.bind(t,3388,23)),Promise.resolve().then(t.t.bind(t,4813,23)),Promise.resolve().then(t.bind(t,2628)),Promise.resolve().then(t.bind(t,3945)),Promise.resolve().then(t.bind(t,4683))},2628:function(e,n,t){"use strict";t.r(n),t.d(n,{ImageViewer:function(){return ImageViewer_ImageViewer}});var r=t(7437),i=t(9743),a=t.n(i),s=t(2265),l=t(4440),o=t.n(l);let Slider=e=>{let{zoom:n,min:t,max:i,label:a,increment:l=25,onChange:o}=e,c=(0,s.useCallback)(()=>{n+l<=i?o(n+l):o(i)},[n,o]),u=(0,s.useCallback)(()=>{n-l>=t?o(n-l):o(t)},[n,o]),d=(0,s.useCallback)(e=>{o(parseInt(e.target.value,10))},[o]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("label",{htmlFor:"zoom-input",children:[a,(0,r.jsx)("input",{type:"range",id:"zoom-input",value:n,min:t,max:i,step:"5",onChange:d})]}),(0,r.jsx)("button",{type:"button","aria-label":"Zoom out",onClick:u,children:"-"}),(0,r.jsxs)("output",{children:[n,"%"]}),(0,r.jsx)("button",{type:"button","aria-label":"Zoom in",onClick:c,children:"+"})]})};t(5390);let ImageViewer_ImageViewer=e=>{let{image:n}=e,[t,i]=(0,s.useState)(200),l=(0,s.useCallback)(e=>{i(e)},[i]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:o()("image-viewer","scrollable"),children:(0,r.jsx)("img",{src:a().join("/".concat("/pixel-art-gallery"),"/img/".concat(n.src)),alt:"",className:"pixelArt",style:{transform:"scale(".concat(t/100,")")}})}),(0,r.jsx)("div",{className:"content",children:(0,r.jsx)(Slider,{zoom:t,min:100,max:500,label:"Zoom",increment:50,onChange:l})})]})}},3945:function(e,n,t){"use strict";t.r(n),t.d(n,{Pagination:function(){return Pagination}});var r=t(7437);t(2265);var i=t(4440),a=t.n(i),s=t(1396),l=t.n(s),o=t(4033),c=t(7107),u=t(8135),d=t(5451),m=t(1733);c.I.load();let Pagination=e=>{var n;let{id:t}=e,i=(0,o.useSearchParams)(),s=(null===(n=i.get("q"))||void 0===n?void 0:n.trim())||"",h=c.I.findAll(e=>(0,m.V)(decodeURIComponent(s),e)).reverse(),v=0;""!==t&&(v=h.findIndex(e=>t===(0,u.Q)(e.src)));let x=h[v-1],b=h[v+1],f=s?(0,d.A)("?q=".concat(s)):"",g=x?"/".concat((0,u.Q)(x.src)).concat(f):"",j=b?"/".concat((0,u.Q)(b.src)).concat(f):"";return(0,r.jsxs)("div",{className:a()("navigation","content"),children:[g?(0,r.jsx)(l(),{href:g,children:"Previous"}):(0,r.jsx)("span",{children:"Previous"}),j?(0,r.jsx)(l(),{href:j,children:"Next"}):(0,r.jsx)("span",{children:"Next"})]})}},4683:function(e,n,t){"use strict";t.r(n);var r=t(4990);n.default=e=>{let{date:n}=e;return"(".concat((0,r.Z)(n,{addSuffix:!0}),")")}},4813:function(){},5390:function(){}},function(e){e.O(0,[569,555,20,971,864,744],function(){return e(e.s=8020)}),_N_E=e.O()}]);