(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[5],{128:function(n,t,e){"use strict";var r=e(150),o=e(154),i=e(158),a=e(159),c=e(160);function u(n,t){return t.encode?t.strict?i(n):encodeURIComponent(n):n}function l(n,t){return t.decode?a(n):n}function s(n){var t=n.indexOf("#");return-1!==t&&(n=n.slice(0,t)),n}function f(n){var t=(n=s(n)).indexOf("?");return-1===t?"":n.slice(t+1)}function p(n,t){return t.parseNumbers&&!Number.isNaN(Number(n))&&"string"===typeof n&&""!==n.trim()?n=Number(n):!t.parseBooleans||null===n||"true"!==n.toLowerCase()&&"false"!==n.toLowerCase()||(n="true"===n.toLowerCase()),n}function m(n,t){var e=function(n){var t;switch(n.arrayFormat){case"index":return function(n,e,r){t=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),t?(void 0===r[n]&&(r[n]={}),r[n][t[1]]=e):r[n]=e};case"bracket":return function(n,e,r){t=/(\[\])$/.exec(n),n=n.replace(/\[\]$/,""),t?void 0!==r[n]?r[n]=[].concat(r[n],e):r[n]=[e]:r[n]=e};case"comma":return function(n,t,e){var r="string"===typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;e[n]=r};default:return function(n,t,e){void 0!==e[n]?e[n]=[].concat(e[n],t):e[n]=t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),o=Object.create(null);if("string"!==typeof n)return o;if(!(n=n.trim().replace(/^[?#&]/,"")))return o;var i=!0,a=!1,u=void 0;try{for(var s,f=n.split("&")[Symbol.iterator]();!(i=(s=f.next()).done);i=!0){var m=s.value,d=c(t.decode?m.replace(/\+/g," "):m,"="),g=r(d,2),y=g[0],h=g[1];h=void 0===h?null:l(h,t),e(l(y,t),h,o)}}catch(k){a=!0,u=k}finally{try{i||null==f.return||f.return()}finally{if(a)throw u}}for(var v=0,b=Object.keys(o);v<b.length;v++){var x=b[v],j=o[x];if("object"===typeof j&&null!==j)for(var w=0,E=Object.keys(j);w<E.length;w++){var O=E[w];j[O]=p(j[O],t)}else o[x]=p(j,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(n,t){var e=o[t];return Boolean(e)&&"object"===typeof e&&!Array.isArray(e)?n[t]=function n(t){return Array.isArray(t)?t.sort():"object"===typeof t?n(Object.keys(t)).sort((function(n,t){return Number(n)-Number(t)})).map((function(n){return t[n]})):t}(e):n[t]=e,n}),Object.create(null))}t.extract=f,t.parse=m,t.stringify=function(n,t){if(!n)return"";var e=function(n){switch(n.arrayFormat){case"index":return function(t){return function(e,r){var i=e.length;return void 0===r||n.skipNull&&null===r?e:[].concat(o(e),null===r?[[u(t,n),"[",i,"]"].join("")]:[[u(t,n),"[",u(i,n),"]=",u(r,n)].join("")])}};case"bracket":return function(t){return function(e,r){return void 0===r||n.skipNull&&null===r?e:[].concat(o(e),null===r?[[u(t,n),"[]"].join("")]:[[u(t,n),"[]=",u(r,n)].join("")])}};case"comma":return function(t){return function(e,r){return null===r||void 0===r||0===r.length?e:0===e.length?[[u(t,n),"=",u(r,n)].join("")]:[[e,u(r,n)].join(",")]}};default:return function(t){return function(e,r){return void 0===r||n.skipNull&&null===r?e:[].concat(o(e),null===r?[u(t,n)]:[[u(t,n),"=",u(r,n)].join("")])}}}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),r=Object.assign({},n);if(t.skipNull)for(var i=0,a=Object.keys(r);i<a.length;i++){var c=a[i];void 0!==r[c]&&null!==r[c]||delete r[c]}var l=Object.keys(r);return!1!==t.sort&&l.sort(t.sort),l.map((function(r){var o=n[r];return void 0===o?"":null===o?u(r,t):Array.isArray(o)?o.reduce(e(r),[]).join("&"):u(r,t)+"="+u(o,t)})).filter((function(n){return n.length>0})).join("&")},t.parseUrl=function(n,t){return{url:s(n).split("?")[0]||"",query:m(f(n),t)}}},150:function(n,t,e){var r=e(151),o=e(152),i=e(153);n.exports=function(n,t){return r(n)||o(n,t)||i()}},151:function(n,t){n.exports=function(n){if(Array.isArray(n))return n}},152:function(n,t){n.exports=function(n,t){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var e=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(e.push(a.value),!t||e.length!==t);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return e}}},153:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},154:function(n,t,e){var r=e(155),o=e(156),i=e(157);n.exports=function(n){return r(n)||o(n)||i()}},155:function(n,t){n.exports=function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}},156:function(n,t){n.exports=function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}},157:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},158:function(n,t,e){"use strict";n.exports=function(n){return encodeURIComponent(n).replace(/[!'()*]/g,(function(n){return"%".concat(n.charCodeAt(0).toString(16).toUpperCase())}))}},159:function(n,t,e){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function i(n,t){try{return decodeURIComponent(n.join(""))}catch(o){}if(1===n.length)return n;t=t||1;var e=n.slice(0,t),r=n.slice(t);return Array.prototype.concat.call([],i(e),i(r))}function a(n){try{return decodeURIComponent(n)}catch(o){for(var t=n.match(r),e=1;e<t.length;e++)t=(n=i(t,e).join("")).match(r);return n}}n.exports=function(n){if("string"!==typeof n)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof n+"`");try{return n=n.replace(/\+/g," "),decodeURIComponent(n)}catch(t){return function(n){for(var e={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=o.exec(n);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(t){var i=a(r[0]);i!==r[0]&&(e[r[0]]=i)}r=o.exec(n)}e["%C2"]="\ufffd";for(var c=Object.keys(e),u=0;u<c.length;u++){var l=c[u];n=n.replace(new RegExp(l,"g"),e[l])}return n}(n)}}},160:function(n,t,e){"use strict";n.exports=function(n,t){if("string"!==typeof n||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[n];var e=n.indexOf(t);return-1===e?[n]:[n.slice(0,e),n.slice(e+t.length)]}},211:function(n,t,e){n.exports=e.p+"static/media/success1.6031ef66.svg"},466:function(n,t,e){n.exports=e.p+"static/media/error.eb5f3897.svg"},582:function(n,t,e){"use strict";e.r(t);var r=e(25),o=e(7),i=e(0),a=e.n(i),c=e(128),u=e.n(c),l=e(20),s=e(6),f=e(42),p=e(21),m=e(211),d=e.n(m),g=e(466),y=e.n(g);function h(){var n=Object(o.a)(["\n    width: 100%;\n    display: flex;\n    justify-content:center;\n    margin-top: 20rem;\n"]);return h=function(){return n},n}function v(){var n=Object(o.a)(["\nwidth: 50vw;\nheight: 60vh;\nmargin: 0 auto;\nmargin-top: 8rem;\n\n    @media(max-width: 800px){\n        width: 80vw;\n    }\n \n    .img-cont {\n        margin: 0 auto;\n        width: 50%;\n\n        img {\n            max-width: 100%;\n            opacity: 0.9;\n            height: auto;\n        }\n    }\n\n    .text-cont {\n        width: 100%;\n        margin: 0 auto;\n        margin-top: 4rem;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        font-family: 'Roboto', sans-serif;\n\n        h3 {\n            width: 80%;\n            font-size: 3rem;\n            text-align: center;\n\n            @media(max-width: 350px) {\n                font-size: 2rem;\n            }\n        }\n\n        p {\n            width: 60%;\n            margin-top: 2rem;\n            font-size: 1.8rem;\n            text-align: center;\n            color: rgba(0,0,0,0.8);\n            line-height: 1.3;\n\n            a {\n                color: darkgreen;\n                opacity: 1;\n                transition: opacity 0.2s ease-in-out;\n\n                &:hover {\n                    opacity: 0.5;\n                    transition: opacity 0.2s ease-in-out;\n                }\n            }\n\n            @media(max-width: 350px) {\n                font-size: 1.3rem;\n            }\n        }   \n    }\n"]);return v=function(){return n},n}var b=s.c.div(v()),x=s.c.div(h());t.default=function(n){var t=Object(i.useState)(null),e=Object(r.a)(t,2),o=e[0],c=e[1],s=u.a.parse(n.location.search).token;return Object(i.useEffect)((function(){Object(f.a)().patch("/confirm",{token:s}).then((function(n){n.data?c("Success"):c("Error")})).catch((function(){c("Error")}))}),[s]),"Error"===o?a.a.createElement(b,null,a.a.createElement("div",{className:"img-cont"},a.a.createElement("img",{src:y.a,alt:"Error"})),a.a.createElement("div",{className:"text-cont"},a.a.createElement("h3",null,"Something went wrong"),a.a.createElement("p",null,"Please ",a.a.createElement(l.b,{to:"/help"},"contact us")," for further help.   "))):o?"Success"===o?a.a.createElement(b,null,a.a.createElement("div",{className:"img-cont"},a.a.createElement("img",{src:d.a,alt:"Successful registration"})),a.a.createElement("div",{className:"text-cont"},a.a.createElement("h3",null,"Your account is now confirmed"),a.a.createElement("p",null,"Please ",a.a.createElement(l.b,{to:"/login"},"click here")," to login and get started. "))):void 0:a.a.createElement(x,null,a.a.createElement(p.a,null))}}}]);
//# sourceMappingURL=5.1403bc21.chunk.js.map