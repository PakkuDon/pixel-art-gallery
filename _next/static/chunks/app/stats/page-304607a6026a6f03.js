(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[740],{1750:function(e,t,n){Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481)),Promise.resolve().then(n.bind(n,3187)),Promise.resolve().then(n.bind(n,8041)),Promise.resolve().then(n.bind(n,8766)),Promise.resolve().then(n.bind(n,9828)),Promise.resolve().then(n.bind(n,2025)),Promise.resolve().then(n.bind(n,5273)),Promise.resolve().then(n.bind(n,4097))},3187:function(e,t,n){"use strict";n.d(t,{EntriesPostedEachMonth:function(){return s}});var r=n(7437);n(2265);var a=n(7346);n(6933);let s=e=>{let{countByMonth:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"Entries posted each month"}),(0,r.jsx)(a.$Q,{options:{indexAxis:"y",animation:!1},data:{labels:t.map(e=>e.key),datasets:[{data:t.map(e=>e.count),backgroundColor:"#336699"}]}})]})}},8041:function(e,t,n){"use strict";n.d(t,{EntriesPostedEachYear:function(){return s}});var r=n(7437);n(2265);var a=n(7346);n(6933);let s=e=>{let{countByYear:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"Entries posted each year"}),(0,r.jsx)(a.$Q,{options:{indexAxis:"y",animation:!1},data:{labels:t.map(e=>e.key),datasets:[{data:t.map(e=>e.count),backgroundColor:"#336699"}]}})]})}},8766:function(e,t,n){"use strict";n.d(t,{LinkToGallery:function(){return o}});var r=n(7437);n(2265);var a=n(6463),s=n(7138),i=n(662);let o=()=>{let e=(0,a.useSearchParams)().get("q"),t=e?(0,i.A)("?q=".concat(e)):"";return(0,r.jsx)(s.default,{href:"/".concat(t),children:"Back to gallery"})}},9828:function(e,t,n){"use strict";n.d(t,{PaletteUsage:function(){return s}});var r=n(7437);n(2265);var a=n(7346);n(6933);let s=e=>{let{countByPalette:t,totalEntries:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"Palette Usage"}),(0,r.jsx)(a.$Q,{options:{indexAxis:"y",animation:!1,plugins:{autocolors:{mode:"data"}}},data:{labels:t.map(e=>{let t=(e.count/n*100).toFixed(1);return"".concat(e.key," (").concat(t,"%)")}),datasets:[{data:t.map(e=>e.count)}]}})]})}},2025:function(e,t,n){"use strict";n.d(t,{ResolutionUsage:function(){return s}});var r=n(7437);n(2265);var a=n(7346);n(6933);let s=e=>{let{countByResolution:t,totalEntries:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{children:"Resolutions used"}),(0,r.jsx)(a.$Q,{options:{indexAxis:"y",animation:!1,plugins:{autocolors:{mode:"data"}}},data:{labels:t.map(e=>{let t=(e.count/n*100).toFixed(1);return"".concat(e.key," (").concat(t,"%)")}),datasets:[{data:t.map(e=>e.count)}]}})]})}},6933:function(e,t,n){"use strict";var r=n(5211),a=n(4231);r.kL.register(a.Z,r.uw,r.f$,r.ZL,r.u)},5273:function(e,t,n){"use strict";n.d(t,{CollapsibleSection:function(){return s}});var r=n(7437),a=n(2265);n(4045);let s=e=>{let{label:t,children:n}=e,[s,i]=(0,a.useState)(!1);return s?(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"collapsibleHeader",children:[t,(0,r.jsx)("button",{type:"button",onClick:()=>i(!1),"aria-label":"Hide ".concat(t),children:"-"})]}),n]}):(0,r.jsxs)("div",{className:"collapsibleHeader",children:[t,(0,r.jsx)("button",{type:"button",onClick:()=>i(!0),"aria-label":"Show ".concat(t),children:"+"})]})}},4097:function(e,t,n){"use strict";n.r(t);var r=n(5781);t.default=e=>{let{date:t}=e;return"(".concat((0,r.Q)(t,{addSuffix:!0}),")")}},662:function(e,t,n){"use strict";n.d(t,{A:function(){return r}});let r=e=>e.replace(/#/g,"%23")},4045:function(){}},function(e){e.O(0,[295,674,291,206,535,971,23,744],function(){return e(e.s=1750)}),_N_E=e.O()}]);