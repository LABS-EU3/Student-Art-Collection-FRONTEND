(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[17],{592:function(n,e,t){"use strict";t.r(e);var r=t(7),i=t(0),a=t.n(i),o=t(121),c=t(136),l=t(6),s=t(18),u=t(30),d=(t(74),t(41)),m=t(42);function f(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  label {\n    font-size: 2rem;\n    padding: 1rem 0;\n  }\n  input {\n    width: 100%;\n    padding: 10px;\n    border-radius: 5px;\n    border: solid 0.5px ",";\n  }\n  button {\n    margin: 40px auto;\n    background-color: ",";\n    color: ",";\n    border: none;\n    border-radius: 5px;\n    font-size: 2rem;\n    padding: 0.6rem 5rem;\n    &:hover {\n      opacity: 0.7;\n      transition: opacity 0.1s ease-in-out;\n    }\n  }\n  * {\n    padding: 2rem 0;\n  }\n"]);return f=function(){return n},n}function p(){var n=Object(r.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 50%;\n  margin: 0 auto;\n  font-family: \u2018Roboto\u2019, sans-serif;\n  h1 {\n    font-size: 3rem;\n    padding: 2rem 0;\n  }\n"]);return p=function(){return n},n}var b=l.c.div(p()),h=Object(l.c)(o.c)(f(),(function(n){return n.theme.lightGrey}),(function(n){return n.theme.buttonOrange}),(function(n){return n.theme.white})),g=function(){return a.a.createElement(b,null,a.a.createElement(h,null,a.a.createElement(o.b,{name:"email",type:"email",placeholder:"write your email"}),a.a.createElement(o.a,{name:"email",component:"div"}),a.a.createElement("button",{type:"submit"},"Reset Password")))};function x(){var n=Object(r.a)(["\n  max-width: 800px;\n  margin: 3rem auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: solid 0.5px ",";\n  border-radius: 10px;\n  padding: 80px 20px;\n  font-family: \u2018Roboto\u2019, sans-serif;\n"]);return x=function(){return n},n}var y={email:""},v=c.object().shape({email:c.string().email().required()}),w=l.c.div(x(),(function(n){return n.theme.lightGrey}));e.default=Object(s.b)((function(n){return n}),d)((function(n){var e=n.history,t=n.loadingStarted,r=n.loadingFinished;return a.a.createElement(w,null,a.a.createElement(o.d,{validationSchema:v,initialValues:y,onSubmit:function(n,i){t(),Object(m.a)().post("/resetpassword",n).then((function(){i.resetForm(),r(),e.push("/resetpasswordsent")})).catch((function(n){r(),u.b.error(n.response.data)}))},component:g}),a.a.createElement(u.a,{position:"bottom-left",bodyClassName:"toast",autoClose:3e3,closeButton:!1}))}))}}]);
//# sourceMappingURL=17.dfa69fb8.chunk.js.map