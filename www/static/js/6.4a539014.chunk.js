(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[6],{134:function(n,t,e){"use strict";var r=e(162),o=e(166),c=e(170),i=e(171),a=e(172);function u(n,t){return t.encode?t.strict?c(n):encodeURIComponent(n):n}function l(n,t){return t.decode?i(n):n}function s(n){var t=n.indexOf("#");return-1!==t&&(n=n.slice(0,t)),n}function f(n){var t=(n=s(n)).indexOf("?");return-1===t?"":n.slice(t+1)}function p(n,t){return t.parseNumbers&&!Number.isNaN(Number(n))&&"string"===typeof n&&""!==n.trim()?n=Number(n):!t.parseBooleans||null===n||"true"!==n.toLowerCase()&&"false"!==n.toLowerCase()||(n="true"===n.toLowerCase()),n}function m(n,t){var e=function(n){var t;switch(n.arrayFormat){case"index":return function(n,e,r){t=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),t?(void 0===r[n]&&(r[n]={}),r[n][t[1]]=e):r[n]=e};case"bracket":return function(n,e,r){t=/(\[\])$/.exec(n),n=n.replace(/\[\]$/,""),t?void 0!==r[n]?r[n]=[].concat(r[n],e):r[n]=[e]:r[n]=e};case"comma":return function(n,t,e){var r="string"===typeof t&&t.split("").indexOf(",")>-1?t.split(","):t;e[n]=r};default:return function(n,t,e){void 0!==e[n]?e[n]=[].concat(e[n],t):e[n]=t}}}(t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},t)),o=Object.create(null);if("string"!==typeof n)return o;if(!(n=n.trim().replace(/^[?#&]/,"")))return o;var c=!0,i=!1,u=void 0;try{for(var s,f=n.split("&")[Symbol.iterator]();!(c=(s=f.next()).done);c=!0){var m=s.value,d=a(t.decode?m.replace(/\+/g," "):m,"="),g=r(d,2),y=g[0],h=g[1];h=void 0===h?null:l(h,t),e(l(y,t),h,o)}}catch(k){i=!0,u=k}finally{try{c||null==f.return||f.return()}finally{if(i)throw u}}for(var v=0,b=Object.keys(o);v<b.length;v++){var x=b[v],j=o[x];if("object"===typeof j&&null!==j)for(var w=0,E=Object.keys(j);w<E.length;w++){var O=E[w];j[O]=p(j[O],t)}else o[x]=p(j,t)}return!1===t.sort?o:(!0===t.sort?Object.keys(o).sort():Object.keys(o).sort(t.sort)).reduce((function(n,t){var e=o[t];return Boolean(e)&&"object"===typeof e&&!Array.isArray(e)?n[t]=function n(t){return Array.isArray(t)?t.sort():"object"===typeof t?n(Object.keys(t)).sort((function(n,t){return Number(n)-Number(t)})).map((function(n){return t[n]})):t}(e):n[t]=e,n}),Object.create(null))}t.extract=f,t.parse=m,t.stringify=function(n,t){if(!n)return"";var e=function(n){switch(n.arrayFormat){case"index":return function(t){return function(e,r){var c=e.length;return void 0===r||n.skipNull&&null===r?e:[].concat(o(e),null===r?[[u(t,n),"[",c,"]"].join("")]:[[u(t,n),"[",u(c,n),"]=",u(r,n)].join("")])}};case"bracket":return function(t){return function(e,r){return void 0===r||n.skipNull&&null===r?e:[].concat(o(e),null===r?[[u(t,n),"[]"].join("")]:[[u(t,n),"[]=",u(r,n)].join("")])}};case"comma":return function(t){return function(e,r){return null===r||void 0===r||0===r.length?e:0===e.length?[[u(t,n),"=",u(r,n)].join("")]:[[e,u(r,n)].join(",")]}};default:return function(t){return function(e,r){return void 0===r||n.skipNull&&null===r?e:[].concat(o(e),null===r?[u(t,n)]:[[u(t,n),"=",u(r,n)].join("")])}}}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),r=Object.assign({},n);if(t.skipNull)for(var c=0,i=Object.keys(r);c<i.length;c++){var a=i[c];void 0!==r[a]&&null!==r[a]||delete r[a]}var l=Object.keys(r);return!1!==t.sort&&l.sort(t.sort),l.map((function(r){var o=n[r];return void 0===o?"":null===o?u(r,t):Array.isArray(o)?o.reduce(e(r),[]).join("&"):u(r,t)+"="+u(o,t)})).filter((function(n){return n.length>0})).join("&")},t.parseUrl=function(n,t){return{url:s(n).split("?")[0]||"",query:m(f(n),t)}}},162:function(n,t,e){var r=e(163),o=e(164),c=e(165);n.exports=function(n,t){return r(n)||o(n,t)||c()}},163:function(n,t){n.exports=function(n){if(Array.isArray(n))return n}},164:function(n,t){n.exports=function(n,t){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var e=[],r=!0,o=!1,c=void 0;try{for(var i,a=n[Symbol.iterator]();!(r=(i=a.next()).done)&&(e.push(i.value),!t||e.length!==t);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return e}}},165:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},166:function(n,t,e){var r=e(167),o=e(168),c=e(169);n.exports=function(n){return r(n)||o(n)||c()}},167:function(n,t){n.exports=function(n){if(Array.isArray(n)){for(var t=0,e=new Array(n.length);t<n.length;t++)e[t]=n[t];return e}}},168:function(n,t){n.exports=function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}},169:function(n,t){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},170:function(n,t,e){"use strict";n.exports=function(n){return encodeURIComponent(n).replace(/[!'()*]/g,(function(n){return"%".concat(n.charCodeAt(0).toString(16).toUpperCase())}))}},171:function(n,t,e){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function c(n,t){try{return decodeURIComponent(n.join(""))}catch(o){}if(1===n.length)return n;t=t||1;var e=n.slice(0,t),r=n.slice(t);return Array.prototype.concat.call([],c(e),c(r))}function i(n){try{return decodeURIComponent(n)}catch(o){for(var t=n.match(r),e=1;e<t.length;e++)t=(n=c(t,e).join("")).match(r);return n}}n.exports=function(n){if("string"!==typeof n)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof n+"`");try{return n=n.replace(/\+/g," "),decodeURIComponent(n)}catch(t){return function(n){for(var e={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=o.exec(n);r;){try{e[r[0]]=decodeURIComponent(r[0])}catch(t){var c=i(r[0]);c!==r[0]&&(e[r[0]]=c)}r=o.exec(n)}e["%C2"]="\ufffd";for(var a=Object.keys(e),u=0;u<a.length;u++){var l=a[u];n=n.replace(new RegExp(l,"g"),e[l])}return n}(n)}}},172:function(n,t,e){"use strict";n.exports=function(n,t){if("string"!==typeof n||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[n];var e=n.indexOf(t);return-1===e?[n]:[n.slice(0,e),n.slice(e+t.length)]}},226:function(n,t,e){n.exports=e.p+"static/media/success1.6031ef66.svg"},505:function(n,t,e){n.exports=e.p+"static/media/error.eb5f3897.svg"},668:function(n,t,e){"use strict";e.r(t);var r=e(32),o=e(8),c=e(0),i=e.n(c),a=e(134),u=e.n(a),l=e(27),s=e(7),f=e(46),p=e(34),m=e(226),d=e.n(m),g=e(505),y=e.n(g);function h(){var n=Object(o.a)(["\n    width: 100%;\n    display: flex;\n    justify-content:center;\n    margin-top: 20rem;\n"]);return h=function(){return n},n}function v(){var n=Object(o.a)(["\nwidth: 50vw;\nheight: 60vh;\nmargin: 0 auto;\nmargin-top: 8rem;\n\n    @media(max-width: 800px){\n        width: 80vw;\n    }\n \n    .img-cont {\n        margin: 0 auto;\n        width: 50%;\n\n        img {\n            max-width: 100%;\n            opacity: 0.9;\n            height: auto;\n        }\n    }\n\n    .text-cont {\n        width: 100%;\n        margin: 0 auto;\n        margin-top: 4rem;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n\n        h3 {\n            width: 80%;\n            font-size: 3rem;\n            text-align: center;\n\n            @media(max-width: 350px) {\n                font-size: 2rem;\n            }\n        }\n\n        p {\n            width: 60%;\n            margin-top: 2rem;\n            font-size: 1.8rem;\n            text-align: center;\n            color: rgba(0,0,0,0.8);\n            line-height: 1.3;\n\n            a {\n                color: darkgreen;\n                opacity: 1;\n                transition: opacity 0.2s ease-in-out;\n\n                &:hover {\n                    opacity: 0.5;\n                    transition: opacity 0.2s ease-in-out;\n                }\n            }\n\n            @media(max-width: 350px) {\n                font-size: 1.3rem;\n            }\n        }   \n    }\n"]);return v=function(){return n},n}var b=s.c.div(v()),x=s.c.div(h());t.default=function(n){var t=Object(c.useState)(null),e=Object(r.a)(t,2),o=e[0],a=e[1],s=u.a.parse(n.location.search).token;return Object(c.useEffect)((function(){Object(f.a)().patch("/confirm",{token:s}).then((function(n){n.data?a("Success"):a("Error")})).catch((function(){a("Error")}))}),[s]),"Error"===o?i.a.createElement(b,null,i.a.createElement("div",{className:"img-cont"},i.a.createElement("img",{src:y.a,alt:"Error"})),i.a.createElement("div",{className:"text-cont"},i.a.createElement("h3",null,"Something went wrong"),i.a.createElement("p",null,"Please ",i.a.createElement(l.b,{to:"/help"},"contact us")," for further help.   "))):o?"Success"===o?i.a.createElement(b,null,i.a.createElement("div",{className:"img-cont"},i.a.createElement("img",{src:d.a,alt:"Successful registration"})),i.a.createElement("div",{className:"text-cont"},i.a.createElement("h3",null,"Your account is now confirmed"),i.a.createElement("p",null,"Please ",i.a.createElement(l.b,{to:"/login"},"click here")," to login and get started. "))):void 0:i.a.createElement(x,null,i.a.createElement(p.a,null))}}}]);
//# sourceMappingURL=6.4a539014.chunk.js.map