(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[7],{133:function(n,e,t){"use strict";var r=t(161),o=t(165),i=t(169),a=t(170),c=t(171);function u(n,e){return e.encode?e.strict?i(n):encodeURIComponent(n):n}function s(n,e){return e.decode?a(n):n}function l(n){var e=n.indexOf("#");return-1!==e&&(n=n.slice(0,e)),n}function f(n){var e=(n=l(n)).indexOf("?");return-1===e?"":n.slice(e+1)}function d(n,e){return e.parseNumbers&&!Number.isNaN(Number(n))&&"string"===typeof n&&""!==n.trim()?n=Number(n):!e.parseBooleans||null===n||"true"!==n.toLowerCase()&&"false"!==n.toLowerCase()||(n="true"===n.toLowerCase()),n}function p(n,e){var t=function(n){var e;switch(n.arrayFormat){case"index":return function(n,t,r){e=/\[(\d*)\]$/.exec(n),n=n.replace(/\[\d*\]$/,""),e?(void 0===r[n]&&(r[n]={}),r[n][e[1]]=t):r[n]=t};case"bracket":return function(n,t,r){e=/(\[\])$/.exec(n),n=n.replace(/\[\]$/,""),e?void 0!==r[n]?r[n]=[].concat(r[n],t):r[n]=[t]:r[n]=t};case"comma":return function(n,e,t){var r="string"===typeof e&&e.split("").indexOf(",")>-1?e.split(","):e;t[n]=r};default:return function(n,e,t){void 0!==t[n]?t[n]=[].concat(t[n],e):t[n]=e}}}(e=Object.assign({decode:!0,sort:!0,arrayFormat:"none",parseNumbers:!1,parseBooleans:!1},e)),o=Object.create(null);if("string"!==typeof n)return o;if(!(n=n.trim().replace(/^[?#&]/,"")))return o;var i=!0,a=!1,u=void 0;try{for(var l,f=n.split("&")[Symbol.iterator]();!(i=(l=f.next()).done);i=!0){var p=l.value,m=c(e.decode?p.replace(/\+/g," "):p,"="),h=r(m,2),g=h[0],b=h[1];b=void 0===b?null:s(b,e),t(s(g,e),b,o)}}catch(k){a=!0,u=k}finally{try{i||null==f.return||f.return()}finally{if(a)throw u}}for(var y=0,v=Object.keys(o);y<v.length;y++){var x=v[y],w=o[x];if("object"===typeof w&&null!==w)for(var j=0,E=Object.keys(w);j<E.length;j++){var O=E[j];w[O]=d(w[O],e)}else o[x]=d(w,e)}return!1===e.sort?o:(!0===e.sort?Object.keys(o).sort():Object.keys(o).sort(e.sort)).reduce((function(n,e){var t=o[e];return Boolean(t)&&"object"===typeof t&&!Array.isArray(t)?n[e]=function n(e){return Array.isArray(e)?e.sort():"object"===typeof e?n(Object.keys(e)).sort((function(n,e){return Number(n)-Number(e)})).map((function(n){return e[n]})):e}(t):n[e]=t,n}),Object.create(null))}e.extract=f,e.parse=p,e.stringify=function(n,e){if(!n)return"";var t=function(n){switch(n.arrayFormat){case"index":return function(e){return function(t,r){var i=t.length;return void 0===r||n.skipNull&&null===r?t:[].concat(o(t),null===r?[[u(e,n),"[",i,"]"].join("")]:[[u(e,n),"[",u(i,n),"]=",u(r,n)].join("")])}};case"bracket":return function(e){return function(t,r){return void 0===r||n.skipNull&&null===r?t:[].concat(o(t),null===r?[[u(e,n),"[]"].join("")]:[[u(e,n),"[]=",u(r,n)].join("")])}};case"comma":return function(e){return function(t,r){return null===r||void 0===r||0===r.length?t:0===t.length?[[u(e,n),"=",u(r,n)].join("")]:[[t,u(r,n)].join(",")]}};default:return function(e){return function(t,r){return void 0===r||n.skipNull&&null===r?t:[].concat(o(t),null===r?[u(e,n)]:[[u(e,n),"=",u(r,n)].join("")])}}}}(e=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},e)),r=Object.assign({},n);if(e.skipNull)for(var i=0,a=Object.keys(r);i<a.length;i++){var c=a[i];void 0!==r[c]&&null!==r[c]||delete r[c]}var s=Object.keys(r);return!1!==e.sort&&s.sort(e.sort),s.map((function(r){var o=n[r];return void 0===o?"":null===o?u(r,e):Array.isArray(o)?o.reduce(t(r),[]).join("&"):u(r,e)+"="+u(o,e)})).filter((function(n){return n.length>0})).join("&")},e.parseUrl=function(n,e){return{url:l(n).split("?")[0]||"",query:p(f(n),e)}}},161:function(n,e,t){var r=t(162),o=t(163),i=t(164);n.exports=function(n,e){return r(n)||o(n,e)||i()}},162:function(n,e){n.exports=function(n){if(Array.isArray(n))return n}},163:function(n,e){n.exports=function(n,e){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)){var t=[],r=!0,o=!1,i=void 0;try{for(var a,c=n[Symbol.iterator]();!(r=(a=c.next()).done)&&(t.push(a.value),!e||t.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return t}}},164:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},165:function(n,e,t){var r=t(166),o=t(167),i=t(168);n.exports=function(n){return r(n)||o(n)||i()}},166:function(n,e){n.exports=function(n){if(Array.isArray(n)){for(var e=0,t=new Array(n.length);e<n.length;e++)t[e]=n[e];return t}}},167:function(n,e){n.exports=function(n){if(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n))return Array.from(n)}},168:function(n,e){n.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},169:function(n,e,t){"use strict";n.exports=function(n){return encodeURIComponent(n).replace(/[!'()*]/g,(function(n){return"%".concat(n.charCodeAt(0).toString(16).toUpperCase())}))}},170:function(n,e,t){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),o=new RegExp("(%[a-f0-9]{2})+","gi");function i(n,e){try{return decodeURIComponent(n.join(""))}catch(o){}if(1===n.length)return n;e=e||1;var t=n.slice(0,e),r=n.slice(e);return Array.prototype.concat.call([],i(t),i(r))}function a(n){try{return decodeURIComponent(n)}catch(o){for(var e=n.match(r),t=1;t<e.length;t++)e=(n=i(e,t).join("")).match(r);return n}}n.exports=function(n){if("string"!==typeof n)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof n+"`");try{return n=n.replace(/\+/g," "),decodeURIComponent(n)}catch(e){return function(n){for(var t={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},r=o.exec(n);r;){try{t[r[0]]=decodeURIComponent(r[0])}catch(e){var i=a(r[0]);i!==r[0]&&(t[r[0]]=i)}r=o.exec(n)}t["%C2"]="\ufffd";for(var c=Object.keys(t),u=0;u<c.length;u++){var s=c[u];n=n.replace(new RegExp(s,"g"),t[s])}return n}(n)}}},171:function(n,e,t){"use strict";n.exports=function(n,e){if("string"!==typeof n||"string"!==typeof e)throw new TypeError("Expected the arguments to be of type `string`");if(""===e)return[n];var t=n.indexOf(e);return-1===t?[n]:[n.slice(0,t),n.slice(t+e.length)]}},682:function(n,e,t){"use strict";t.r(e);var r=t(25),o=t(7),i=t(0),a=t.n(i),c=t(122),u=t(133),s=t.n(u),l=t(144),f=t(6),d=t(28),p=(t(75),t(19)),m=t(43),h=t(42);function g(){var n=Object(o.a)(["\n  color: red;\n  font-size: 1rem;\n  margin-bottom: 0.4rem;\n"]);return g=function(){return n},n}function b(){var n=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  align-items: center;\n\n  input {\n    width: 440px;\n    height: 60px;\n    margin: 0 0 2rem 0;\n    background-color: rgba(238, 243, 248, 0.5);\n    border: 1px solid ",";\n    transition: all 0.3s ease-in-out;\n    border-radius: 5px;\n    padding-left: 1rem;\n    font-size: 1.5rem;\n\n    @media (max-width: 590px) {\n      width: 360px;\n    }\n\n    @media (max-width: 370px) {\n      width: 270px;\n    }\n\n    :hover {\n      background-color: rgba(238, 243, 248, 0.1);\n      transition: all 0.3s ease-in-out;\n    }\n\n    :focus {\n      border: 1px solid ",";\n      outline: none;\n    }\n  }\n\n  button {\n    margin: 0 auto;\n    background-color: ",";\n    color: ",";\n    border: none;\n    border-radius: 5px;\n    font-size: 1.5rem;\n    padding: 0.6rem 5rem;\n    transition: opacity 0.2s ease-in-out;\n    &:hover {\n      opacity: 0.7;\n      transition: opacity 0.2gs ease-in-out;\n    }\n  }\n"]);return b=function(){return n},n}var y=Object(f.c)(c.c)(b(),(function(n){return n.theme.white}),(function(n){return n.theme.lightGrey}),(function(n){return n.theme.buttonOrange}),(function(n){return n.theme.white})),v=Object(f.c)(c.a)(g()),x=function(){return a.a.createElement(y,null,a.a.createElement(v,{name:"password",component:"h6"}),a.a.createElement(c.b,{name:"password",type:"password",placeholder:"Type your new password"}),a.a.createElement("button",{type:"submit"},"Reset Password"))},w=t(27);function j(){var n=Object(o.a)(["\n  background-color: #ffffff;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c7c7c7' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n  height: 91vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .container {\n    width: 500px;\n    height: 270px;\n    background-color: white;\n    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.09), 0 10px 10px rgba(0, 0, 0, 0.09);\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    @media (max-width: 590px) {\n      width: 100%;\n      height: 100%;\n    }\n\n    h1 {\n      font-size: 2.5rem;\n      font-weight: bold;\n      color: rgba(0, 0, 25, 0.8);\n      margin: 4rem 0 3.3rem 0;\n\n      @media (max-width: 590px) {\n        font-size: 1.8rem;\n      }\n    }\n    p {\n      font-size: 1.5rem;\n      color: ",";\n      width: 80%;\n      text-align: center;\n    }\n  }\n"]);return j=function(){return n},n}var E=f.c.div(j(),(function(n){return n.theme.lightGrey})),O={password:""},k=l.object().shape({password:l.string().min(8,"Must be at least 8 charaters").max(127,"Must be shorter than 127").required("This is a required field")});e.default=Object(p.b)((function(n){return n}),h)((function(n){var e=n.location,t=n.history,o=n.loadingStarted,u=n.loadingFinished,l=Object(i.useState)(!1),f=Object(r.a)(l,2),p=f[0],h=f[1],g=s.a.parse(e.search).token;return p?a.a.createElement(E,null,a.a.createElement("div",{className:"container"},a.a.createElement("div",{style:{width:"100%",height:"100%",display:"flex",justifyContent:"center",alignItems:"center"}},a.a.createElement(w.a,null)))):a.a.createElement(E,null,a.a.createElement("div",{className:"container"},a.a.createElement("h1",null,"Reset your password"),a.a.createElement(c.d,{validationSchema:k,initialValues:O,onSubmit:function(n,e){h(!0),o(),Object(m.a)().patch("/newpassword?token=".concat(g),n).then((function(){h(!1),u(),e.resetForm(),d.b.success("You have reset your password. You will be redirected to sign in page in 3 seconds"),setTimeout((function(){return t.push("/login")}),3e3)})).catch((function(n){h(!1),u(),d.b.error(n.response.data)}))},component:x}),a.a.createElement(d.a,{position:"bottom-left",bodyClassName:"toast",autoClose:3e3,closeButton:!1})))}))}}]);
//# sourceMappingURL=7.930fe6fa.chunk.js.map