(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4440:function(e,t){var r;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var l=typeof r;if("string"===l||"number"===l)e.push(r);else if(Array.isArray(r)){if(r.length){var a=i.apply(null,r);a&&e.push(a)}}else if("object"===l){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0!==(r=(function(){return i}).apply(t,[]))&&(e.exports=r)}()},428:function(e,t,r){Promise.resolve().then(r.t.bind(r,4724,23)),Promise.resolve().then(r.t.bind(r,8961,23)),Promise.resolve().then(r.t.bind(r,5688,23)),Promise.resolve().then(r.t.bind(r,9247,23)),Promise.resolve().then(r.bind(r,5102)),Promise.resolve().then(r.t.bind(r,626,23)),Promise.resolve().then(r.t.bind(r,5541,23)),Promise.resolve().then(r.bind(r,4397))},983:function(e,t,r){"use strict";r.r(t),r.d(t,{CollapsibleSection:function(){return l}});var n=r(7437),i=r(2265);r(4045);let l=e=>{let{label:t,children:r}=e,[l,a]=(0,i.useState)(!1);return l?(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"collapsibleHeader",children:[t,(0,n.jsx)("button",{type:"button",onClick:()=>a(!1),"aria-label":"Hide ".concat(t),children:"-"})]}),r]}):(0,n.jsxs)("div",{className:"collapsibleHeader",children:[t,(0,n.jsx)("button",{type:"button",onClick:()=>a(!0),"aria-label":"Show ".concat(t),children:"+"})]})}},5102:function(e,t,r){"use strict";r.r(t),r.d(t,{DarkModeToggle:function(){return l}});var n=r(7437),i=r(2265);let l=()=>{let[e,t]=(0,i.useState)("undefined"!=typeof localStorage&&"dark"===localStorage.getItem("theme"));(0,i.useEffect)(()=>{!localStorage.getItem("theme")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(t(!0),localStorage.setItem("theme","dark"))},[]),(0,i.useEffect)(()=>{document.body.classList.remove("dark-theme","light-theme"),document.body.classList.add(e?"dark-theme":"light-theme"),localStorage.setItem("theme",e?"dark":"light")},[e]);let r=(0,i.useCallback)(()=>{t(!e)},[e,t]);return(0,n.jsxs)("label",{htmlFor:"prefers-dark-theme",children:[(0,n.jsx)("input",{type:"checkbox",id:"prefers-dark-theme",checked:e,onChange:()=>r()})," ","Dark theme?"]})}},4397:function(e,t,r){"use strict";r.r(t),r.d(t,{Sidebar:function(){return y}});var n=r(7437),i=r(2265),l=r(4033),a=r(983),o=r(5451),s=r(8135),c=r(1733);r(5688);let h=e=>{let{children:t}=e;return(0,n.jsx)("div",{className:"card",children:t})};var u=r(7107),d=r(9743),f=r.n(d),g=r(1396),m=r.n(g),v=r(4440),p=r.n(v);r(9196);let b=e=>{let{entry:t,isSelected:r,searchQuery:i}=e,l=i?(0,o.A)("?q=".concat(i)):"";return(0,n.jsx)(m(),{className:p()("entry",{selected:r}),href:"/".concat((0,s.Q)(t.src)).concat(l),children:(0,n.jsx)("img",{src:f().join("/pixel-art-gallery","/img/".concat(t.src)),alt:t.src,loading:"lazy"})})},x=e=>{let{countByTag:t,limit:r=Number.MAX_SAFE_INTEGER}=e;return(0,n.jsx)(n.Fragment,{children:t.slice(0,r).map((e,r)=>{let{tag:l,count:a}=e;return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsxs)(m(),{href:(0,o.A)("?q=#".concat(l)),children:[l," (",a,")"]}),r<t.length-1&&", "]},"tag-with-count-".concat(l))})})};r(4072),u.I.load();let y=()=>{var e;let t=(0,l.usePathname)(),r=(0,l.useRouter)(),i=u.I.countByTag(),d=(null===(e=(0,l.useSearchParams)().get("q"))||void 0===e?void 0:e.trim())||"",f=u.I.findAll(e=>(0,c.V)(decodeURIComponent(d),e)).reverse(),g=e=>{let t="?q=".concat((0,o.A)(e));r.push(t)},m=t.includes("/pixel-art-gallery")?"/pixel-art-gallery/":"/";return(0,n.jsx)(h,{children:(0,n.jsxs)("aside",{className:"sidebar",children:[(0,n.jsxs)("div",{className:"header",children:[(0,n.jsxs)("div",{className:"search-bar",children:[(0,n.jsx)("label",{htmlFor:"search-input",children:(0,n.jsx)("input",{id:"search-input",type:"text",value:decodeURIComponent(d),onChange:e=>{g(e.target.value)},placeholder:"Search"})}),(0,n.jsx)("button",{type:"button","aria-label":"Clear search field",onClick:()=>{g("")},children:"x"})]}),(0,n.jsxs)("div",{className:"content",children:[f.length," ",1===f.length?"entry":"entries","."]}),(0,n.jsx)("div",{className:"content",children:(0,n.jsx)(a.CollapsibleSection,{label:"Most used tags",children:(0,n.jsx)(x,{countByTag:i,limit:10})})})]}),(0,n.jsx)("div",{className:"entriesList",children:f.map((e,r)=>{let i=t.includes((0,s.Q)(e.src))||t===m&&0===r;return(0,n.jsx)(b,{entry:e,isSelected:i,searchQuery:d},"sidebar-item-".concat(e.src))})})]})})}},9247:function(){},8961:function(){},5688:function(){},4045:function(){},626:function(){},4072:function(){},9196:function(){},5541:function(e){e.exports={style:{fontFamily:"'__Noto_Sans_1f79e1', '__Noto_Sans_Fallback_1f79e1'",fontWeight:400,fontStyle:"normal"},className:"__className_1f79e1"}},9743:function(e){!function(){"use strict";var t={114:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function r(e,t){for(var r,n="",i=0,l=-1,a=0,o=0;o<=e.length;++o){if(o<e.length)r=e.charCodeAt(o);else if(47===r)break;else r=47;if(47===r){if(l===o-1||1===a);else if(l!==o-1&&2===a){if(n.length<2||2!==i||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var s=n.lastIndexOf("/");if(s!==n.length-1){-1===s?(n="",i=0):i=(n=n.slice(0,s)).length-1-n.lastIndexOf("/"),l=o,a=0;continue}}else if(2===n.length||1===n.length){n="",i=0,l=o,a=0;continue}}t&&(n.length>0?n+="/..":n="..",i=2)}else n.length>0?n+="/"+e.slice(l+1,o):n=e.slice(l+1,o),i=o-l-1;l=o,a=0}else 46===r&&-1!==a?++a:a=-1}return n}var n={resolve:function(){for(var e,n,i="",l=!1,a=arguments.length-1;a>=-1&&!l;a--)a>=0?n=arguments[a]:(void 0===e&&(e=""),n=e),t(n),0!==n.length&&(i=n+"/"+i,l=47===n.charCodeAt(0));return(i=r(i,!l),l)?i.length>0?"/"+i:"/":i.length>0?i:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),i=47===e.charCodeAt(e.length-1);return(0!==(e=r(e,!n)).length||n||(e="."),e.length>0&&i&&(e+="/"),n)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,r=0;r<arguments.length;++r){var i=arguments[r];t(i),i.length>0&&(void 0===e?e=i:e+="/"+i)}return void 0===e?".":n.normalize(e)},relative:function(e,r){if(t(e),t(r),e===r||(e=n.resolve(e))===(r=n.resolve(r)))return"";for(var i=1;i<e.length&&47===e.charCodeAt(i);++i);for(var l=e.length,a=l-i,o=1;o<r.length&&47===r.charCodeAt(o);++o);for(var s=r.length-o,c=a<s?a:s,h=-1,u=0;u<=c;++u){if(u===c){if(s>c){if(47===r.charCodeAt(o+u))return r.slice(o+u+1);if(0===u)return r.slice(o+u)}else a>c&&(47===e.charCodeAt(i+u)?h=u:0===u&&(h=0));break}var d=e.charCodeAt(i+u);if(d!==r.charCodeAt(o+u))break;47===d&&(h=u)}var f="";for(u=i+h+1;u<=l;++u)(u===l||47===e.charCodeAt(u))&&(0===f.length?f+="..":f+="/..");return f.length>0?f+r.slice(o+h):(o+=h,47===r.charCodeAt(o)&&++o,r.slice(o))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var r=e.charCodeAt(0),n=47===r,i=-1,l=!0,a=e.length-1;a>=1;--a)if(47===(r=e.charCodeAt(a))){if(!l){i=a;break}}else l=!1;return -1===i?n?"/":".":n&&1===i?"//":e.slice(0,i)},basename:function(e,r){if(void 0!==r&&"string"!=typeof r)throw TypeError('"ext" argument must be a string');t(e);var n,i=0,l=-1,a=!0;if(void 0!==r&&r.length>0&&r.length<=e.length){if(r.length===e.length&&r===e)return"";var o=r.length-1,s=-1;for(n=e.length-1;n>=0;--n){var c=e.charCodeAt(n);if(47===c){if(!a){i=n+1;break}}else -1===s&&(a=!1,s=n+1),o>=0&&(c===r.charCodeAt(o)?-1==--o&&(l=n):(o=-1,l=s))}return i===l?l=s:-1===l&&(l=e.length),e.slice(i,l)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!a){i=n+1;break}}else -1===l&&(a=!1,l=n+1);return -1===l?"":e.slice(i,l)},extname:function(e){t(e);for(var r=-1,n=0,i=-1,l=!0,a=0,o=e.length-1;o>=0;--o){var s=e.charCodeAt(o);if(47===s){if(!l){n=o+1;break}continue}-1===i&&(l=!1,i=o+1),46===s?-1===r?r=o:1!==a&&(a=1):-1!==r&&(a=-1)}return -1===r||-1===i||0===a||1===a&&r===i-1&&r===n+1?"":e.slice(r,i)},format:function(e){var t,r;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+r:t+"/"+r:r},parse:function(e){t(e);var r,n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var i=e.charCodeAt(0),l=47===i;l?(n.root="/",r=1):r=0;for(var a=-1,o=0,s=-1,c=!0,h=e.length-1,u=0;h>=r;--h){if(47===(i=e.charCodeAt(h))){if(!c){o=h+1;break}continue}-1===s&&(c=!1,s=h+1),46===i?-1===a?a=h:1!==u&&(u=1):-1!==a&&(u=-1)}return -1===a||-1===s||0===u||1===u&&a===s-1&&a===o+1?-1!==s&&(0===o&&l?n.base=n.name=e.slice(1,s):n.base=n.name=e.slice(o,s)):(0===o&&l?(n.name=e.slice(1,a),n.base=e.slice(1,s)):(n.name=e.slice(o,a),n.base=e.slice(o,s)),n.ext=e.slice(a,s)),o>0?n.dir=e.slice(0,o-1):l&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},r={};function n(e){var i=r[e];if(void 0!==i)return i.exports;var l=r[e]={exports:{}},a=!0;try{t[e](l,l.exports,n),a=!1}finally{a&&delete r[e]}return l.exports}n.ab="//";var i=n(114);e.exports=i}()}},function(e){e.O(0,[569,999,971,864,744],function(){return e(e.s=428)}),_N_E=e.O()}]);