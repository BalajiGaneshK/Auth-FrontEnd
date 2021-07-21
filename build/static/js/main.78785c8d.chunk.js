(this["webpackJsonpauth-nodejs-frontend"]=this["webpackJsonpauth-nodejs-frontend"]||[]).push([[0],{36:function(e,t,s){},37:function(e,t,s){},58:function(e,t,s){},59:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){"use strict";s.r(t);var a=s(1),l=s.n(a),n=s(30),i=s.n(n),o=(s(36),s(4)),r=(s(37),s(16)),c=s(2),d=s(0);var j=function(e){return"main"!==e.title?Object(d.jsx)("nav",{className:"navbar navbar-dark bg-primary",children:Object(d.jsx)("div",{className:"row col-12 d-flex justify-content-center text-white",children:Object(d.jsx)("span",{className:"h3",children:e.title})})}):Object(d.jsx)("div",{})},u=s(11),m=s.n(u),b=s(14),p=s(10),h=s(12),O=s(15),f=s.n(O),x=(s(58),function(e){console.log("entered alert component");var t=Object(a.useState)("none"),s=Object(o.a)(t,2),l=s[0],n=s[1];Object(a.useEffect)((function(){e.shouldDisplay?n("block"):n("none"),console.log("inside Alert component useEffect()"),console.log("props.should display=",e.shouldDisplay),console.log("modalDisplay",l)}),[e.shouldDisplay]);var i=function(){n("none"),e.setAlertProps({shouldDisplay:!1}),e.setLoginFormDisplay({display:"block"})};return Object(d.jsx)("div",{children:Object(d.jsx)("div",{class:"modal",tabindex:"-1",role:"dialog",style:{display:l,position:"absolute",top:"31%"},children:Object(d.jsx)("div",{class:"modal-dialog",role:"document",children:Object(d.jsxs)("div",{class:"modal-content",children:[Object(d.jsxs)("div",{class:"modal-header",children:[Object(d.jsx)("h5",{class:"modal-title",children:e.modalContent.modalTitle}),Object(d.jsx)("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close",onClick:function(){return i()},children:Object(d.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(d.jsx)("div",{class:"modal-body",children:Object(d.jsx)("p",{children:e.modalContent.modalBody})}),Object(d.jsx)("div",{class:"modal-footer",children:Object(d.jsx)("button",{type:"button",class:"btn btn-danger","data-dismiss":"modal",onClick:function(){return i()},children:"Enter Again"})})]})})})})}),g=function(e){console.log("inside validateLoginForm");var t={invalidEmail:"",invalidPassword:"",validEmail:"",validPassword:""};return 0===e.email.trim().length?t.invalidEmail="Email Id is required":/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e.email.trim())?t.validEmail="Cool!":t.invalidEmail="Enter Email Id in correct format",0===e.password.trim().length?t.invalidPassword="Password is required":t.validPassword="Cool!",t},v=(s(59),function(e){var t=Object(a.useState)("none"),s=Object(o.a)(t,2),l=s[0],n=s[1];return Object(a.useEffect)((function(){e.shouldDisplay?n("block"):n("none")}),[e.shouldDisplay]),Object(d.jsxs)("div",{style:{display:l},children:[Object(d.jsx)("div",{className:"loader"}),Object(d.jsx)("div",{className:"loading",children:Object(d.jsx)("b",{children:"Loading..."})})]})}),y=Object(c.f)((function(e){var t=Object(a.useState)({email:"",password:""}),s=Object(o.a)(t,2),l=s[0],n=s[1],i=Object(a.useState)({}),r=Object(o.a)(i,2),c=r[0],j=r[1],u=Object(a.useState)({shouldDisplay:!1,content:{modalTitle:"",modalBody:""}}),O=Object(o.a)(u,2),y=O[0],w=O[1],E=Object(a.useState)(!1),N=Object(o.a)(E,2),P=N[0],C=N[1],k=Object(a.useState)({display:"block"}),D=Object(o.a)(k,2),T=D[0],F=D[1];Object(a.useEffect)((function(){console.log('Loginform.js- useEffect for "Login"header title'),e.setHeaderTitle("Login")}),[]),Object(a.useEffect)((function(){console.log("Alert Props",y)}),[y]);var S=function(e){var t=e.target,s=t.id,a=t.value;n(Object(h.a)(Object(h.a)({},l),{},Object(p.a)({},s,a))),console.log("Login form:",l)},L=function(){var t=Object(b.a)(m.a.mark((function t(s){var a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(s.preventDefault(),a=g(l),console.log("ValidationsObj",a),""!==a.validEmail&&""!==a.validPassword?a.allInputValid=!0:a.allInputValid=!1,console.log("allInputValid",a.allInputValid),j(a),!a.allInputValid){t.next=23;break}return F({display:"none"}),C(!0),t.prev=9,t.next=12,f.a.post("https://nodemailerauth.herokuapp.com/login",l);case 12:t.sent,console.log("Login successful"),e.history.push("./main"),t.next=23;break;case 17:t.prev=17,t.t0=t.catch(9),w({shouldDisplay:!0,content:{modalTitle:"Login Fail",modalBody:"Either UserName or Password is wrong"}}),C(!1),console.log("response failed:",t.t0),console.log("catch inside handleSubmit, alertProps=",y);case 23:case"end":return t.stop()}}),t,null,[[9,17]])})));return function(e){return t.apply(this,arguments)}}();return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"card login-card text-left hv-center loginForm ",style:T,children:[Object(d.jsx)("div",{className:"card-body",children:Object(d.jsxs)("form",{class:"needs-validation",noValidate:!0,children:[Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"email",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control emailBox",placeholder:"Enter email",id:"email",onChange:S,required:!0}),""!==c.invalidEmail&&Object(d.jsx)("p",{style:{color:"red"},children:c.invalidEmail}),""!==c.validEmail&&Object(d.jsx)("p",{style:{color:"green"},children:c.validEmail})]}),Object(d.jsxs)("div",{className:"form-group",children:[Object(d.jsx)("label",{for:"password",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control passwordBox",placeholder:"Enter password",id:"password",onChange:S}),""!==c.invalidPassword&&Object(d.jsx)("p",{style:{color:"red"},children:c.invalidPassword}),""!==c.validPassword&&Object(d.jsx)("p",{style:{color:"green"},children:c.validPassword})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary submitButton",onClick:L,children:"Submit"})]})}),Object(d.jsx)("span",{className:"ReglinkText",onClick:function(){e.setHeaderTitle("Register"),e.history.push("/")},children:"Not Registered? Click here to Register!"})]}),Object(d.jsx)(v,{shouldDisplay:P}),Object(d.jsx)(x,{shouldDisplay:y.shouldDisplay,setAlertProps:w,modalContent:Object.assign({},y.content),setLoginFormDisplay:F})]})}));s(65);var w=Object(c.f)((function(e){var t=Object(a.useState)({name:"",email:"",city:"",password:""}),s=Object(o.a)(t,2),l=s[0],n=s[1];Object(a.useEffect)((function(){e.setHeaderTitle("Register")}),[]);var i=function(e){var t=e.target,s=t.id,a=t.value;n((function(e){return Object(h.a)(Object(h.a)({},e),{},Object(p.a)({},s,a))})),console.log("updated reg form:",l)},c=function(){var t=Object(b.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(l.email.length&&l.password.length&&l.name.length&&l.city.length)){t.next=8;break}return s={name:l.name,city:l.city,email:l.email,password:l.password},console.log("inside sendDetailsToServer()"),t.next=5,f.a.post("https://nodemailerauth.herokuapp.com/register",s);case 5:a=t.sent,console.log("before if else"),200===a.status?(console.log("Registration successful"),e.history.push("./main")):409===a.status&&(console.log("i am here"),window.alert("User already registered.Enter unique details"));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{className:"card col-12 col-lg-4 login-card registrationForm hv-center",children:[Object(d.jsxs)("form",{children:[Object(d.jsxs)("div",{className:"form-group text-left",children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"name","aria-describedby":"name",placeholder:"Enter Name",value:l.name,onChange:i})]}),Object(d.jsxs)("div",{className:"form-group text-left",children:[Object(d.jsx)("label",{htmlFor:"city",children:"City"}),Object(d.jsx)("input",{type:"text",className:"form-control",id:"city","aria-describedby":"city",placeholder:"Enter City",value:l.city,onChange:i})]}),Object(d.jsxs)("div",{className:"form-group text-left",children:[Object(d.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(d.jsx)("input",{type:"email",className:"form-control",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:l.mail,onChange:i}),Object(d.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"We'll never share your email with anyone else."})]}),Object(d.jsxs)("div",{className:"form-group text-left",children:[Object(d.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:l.password,onChange:i})]}),Object(d.jsxs)("div",{className:"form-group text-left",children:[Object(d.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Confirm Password"}),Object(d.jsx)("input",{type:"password",className:"form-control",id:"confirmPassword",placeholder:"Confirm Password",onChange:i})]}),Object(d.jsx)("button",{type:"submit",className:"btn btn-primary",onClick:function(e){e.preventDefault(),l.password===l.confirmPassword?(console.log("inside handleSubmit"),c()):console.error("Passwords do not match.Enter again!")},children:"Register"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{})]}),Object(d.jsx)("span",{className:"LoginlinkText",onClick:function(){e.setHeaderTitle("Login "),e.history.push("/login")},children:"Already registered? click here to login!"})]})})})),E=function(e){return Object(a.useEffect)((function(){return e.setHeaderTitle("main")}),[]),Object(d.jsx)("h1",{children:"Welcome To Main Page of this App!!"})};var N=function(){var e=Object(a.useState)("Register"),t=Object(o.a)(e,2),s=t[0],l=t[1];return Object(d.jsx)(r.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{title:s}),Object(d.jsxs)(c.c,{children:[Object(d.jsx)(c.a,{exact:!0,path:"/",children:Object(d.jsx)(w,{setHeaderTitle:l})}),Object(d.jsx)(c.a,{exact:!0,path:"/login",children:Object(d.jsx)(y,{setHeaderTitle:l})}),Object(d.jsx)(c.a,{exact:!0,path:"/main",children:Object(d.jsx)(E,{setHeaderTitle:l})})]})]})})},P=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,67)).then((function(t){var s=t.getCLS,a=t.getFID,l=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),l(e),n(e),i(e)}))};i.a.render(Object(d.jsx)(l.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root")),P()}},[[66,1,2]]]);
//# sourceMappingURL=main.78785c8d.chunk.js.map