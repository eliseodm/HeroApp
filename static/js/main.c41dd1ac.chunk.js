(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],{35:function(e,a,r){"use strict";r.r(a);var t=r(1),c=r(18),s=r.n(c),n=r(10),i=Object(t.createContext)(),l=r(4),o="[auth] login",h="[auth] logout,",j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case o:return Object(l.a)(Object(l.a)({},a.payload),{},{logged:!0});case h:return{logged:!1};default:return e}},d=r(5),u=r(2),b=r(14),m=r(0),p=function(e){var a=e.isAuth,r=e.component,t=Object(b.a)(e,["isAuth","component"]);return localStorage.setItem("lastPath",t.location.pathname),Object(m.jsx)(u.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(m.jsx)(r,Object(l.a)({},e)):Object(m.jsx)(u.a,{to:"/login"})}}))},O=function(e){var a=e.isAuth,r=e.component,t=Object(b.a)(e,["isAuth","component"]);return Object(m.jsx)(u.b,Object(l.a)(Object(l.a)({},t),{},{component:function(e){return a?Object(m.jsx)(u.a,{to:"/"}):Object(m.jsx)(r,Object(l.a)({},e))}}))},v=function(e){var a=e.history,r=Object(t.useContext)(i).dispatch;return Object(m.jsxs)("div",{className:"container mt-5",children:[Object(m.jsx)("h1",{children:"LoginScreen"}),Object(m.jsx)("hr",{}),Object(m.jsx)("button",{className:"btn btn-primary",onClick:function(){var e=localStorage.getItem("lastPath")||"/";r({type:o,payload:{name:"Eliseo"}}),a.replace(e)},children:"Login"})]})},x=function(){var e=Object(t.useContext)(i),a=e.user.name,r=e.dispatch,c=Object(u.g)();return Object(m.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(m.jsx)(d.b,{className:"navbar-brand",to:"/",children:"Asociaciones"}),Object(m.jsx)("div",{className:"navbar-collapse",children:Object(m.jsxs)("div",{className:"navbar-nav",children:[Object(m.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(m.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(m.jsx)(d.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search?q=",children:"Search"})]})}),Object(m.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2",children:Object(m.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(m.jsx)("span",{className:"nav-item nav-link text-info",children:a}),Object(m.jsx)("button",{className:"nav-item nav-link btn",onClick:function(){r({type:h}),c.replace("/login")},children:"Logout"})]})})]})},f=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],g=function(e){var a=e.id,r=e.superhero,t=e.alter_ego,c=e.first_appearance,s=e.characters;return Object(m.jsx)("div",{className:"card ms-3",style:{maxWidth:540},children:Object(m.jsxs)("div",{className:"row no-gutters",children:[Object(m.jsx)("div",{className:"col-md-4",children:Object(m.jsx)("img",{src:"./assets/heroes/".concat(a,".jpg"),className:"card-img",alt:r})}),Object(m.jsx)("div",{className:"col-md-8",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{className:"card-title",children:[" ",r," "]}),Object(m.jsxs)("p",{className:"card-text",children:[" ",t," "]}),t!==s&&Object(m.jsxs)("p",{className:"card-text",children:[" ",s," "]}),Object(m.jsx)("p",{className:"card-text",children:Object(m.jsxs)("small",{className:"text-muted",children:[" ",c," "]})}),Object(m.jsx)(d.b,{to:"./hero/".concat(a),children:"Mas..."})]})})]})})},C=function(e){var a=e.publisher,r=Object(t.useMemo)((function(){return function(e){if(!["DC Comics","Marvel Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" no es correcto'));return f.filter((function(a){return a.publisher===e}))}(a)}),[a]);return Object(m.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:r.map((function(e){return Object(m.jsx)(g,Object(l.a)({},e),e.id)}))})},_=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Marvel Screen"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{children:Object(m.jsx)(C,{publisher:"Marvel Comics"})})]})},N=function(e){var a=e.history,r=Object(u.i)().heroeId,c=Object(t.useMemo)((function(){return e=r,f.find((function(a){return a.id===e}));var e}),[r]);if(!c)return Object(m.jsx)(u.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,o=c.characters;return Object(m.jsxs)("div",{className:"row mt-5",children:[Object(m.jsx)("div",{className:"col-4",children:Object(m.jsx)("img",{src:"../assets/heroes/".concat(r,".jpg"),className:"img-thumbnail animate__animated animate__fadeInLeft",alt:s})}),Object(m.jsxs)("div",{className:"col-8 animate__animated animate__fadeIn",children:[Object(m.jsxs)("h3",{children:[" ",s," "]}),Object(m.jsxs)("ul",{className:"list-group list-group-flush",children:[Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:" Alter Ego:"})," ",i," "]}),Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:" Publisher:"})," ",n," "]}),Object(m.jsxs)("li",{className:"list-group-item",children:[Object(m.jsx)("b",{children:" Firt Appearence:"})," ",l," "]})]}),Object(m.jsx)("h5",{children:" Characters "}),Object(m.jsxs)("p",{children:[" ",o," "]}),Object(m.jsx)("button",{className:"btn btn-outline-info",onClick:function(){a.length<=2?a.push("/"):a.goBack()},children:"Return"})]})]})},y=function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"DC Screen"}),Object(m.jsx)("hr",{}),Object(m.jsx)("div",{children:Object(m.jsx)(C,{publisher:"DC Comics"})})]})},S=r(20),M=r.n(S),k=r(13),D=function(e){var a=e.history,r=Object(u.h)(),c=M.a.parse(r.search).q,s=void 0===c?"":c,i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=Object(t.useState)(e),r=Object(n.a)(a,2),c=r[0],s=r[1];return[c,function(e){var a=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(k.a)({},a.name,a.value)))},function(){s(e)}]}({searchText:s}),o=Object(n.a)(i,2),h=o[0],j=o[1],d=h.searchText,b=Object(t.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),f.filter((function(a){return a.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"SearchScreen"}),Object(m.jsx)("hr",{}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-5",children:[Object(m.jsx)("h4",{children:" Search Form "}),Object(m.jsx)("hr",{}),Object(m.jsx)("form",{onSubmit:function(e){e.preventDefault(),a.push("?q=".concat(d))},children:Object(m.jsxs)("div",{className:"d-flex flex-column",children:[Object(m.jsx)("input",{type:"text",placeholder:"Find your hero",className:"form-control",autoComplete:"off",name:"searchText",value:d,onChange:j}),Object(m.jsx)("button",{type:"submit",className:"btn m-1 btn-block btn-outline-primary",children:"Serch..."})]})})]}),Object(m.jsxs)("div",{className:"col-7",children:[Object(m.jsx)("h4",{children:" Results"}),Object(m.jsx)("hr",{}),""===s&&Object(m.jsx)("div",{className:"alert alert-info animate__animated animate__fadeIn",children:"Search a hero"}),""!==s&&0===b.length&&Object(m.jsxs)("div",{className:"alert alert-danger animate__animated animate__fadeIn",children:["There is no a hero with ",s]}),b.map((function(e){return Object(m.jsx)(g,Object(l.a)({},e),e.id)}))]})]})]})},w=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsx)("div",{className:"container mt-2",children:Object(m.jsxs)(u.d,{children:[Object(m.jsx)(u.b,{exact:!0,path:"/search",component:D}),Object(m.jsx)(u.b,{exact:!0,path:"/marvel",component:_}),Object(m.jsx)(u.b,{exact:!0,path:"/hero/:heroeId",component:N}),Object(m.jsx)(u.b,{exact:!0,path:"/dc",component:y}),Object(m.jsx)(u.a,{to:"/marvel"})]})})]})},A=function(){var e=Object(t.useContext)(i).user;return Object(m.jsx)(d.a,{children:Object(m.jsx)("div",{children:Object(m.jsxs)(u.d,{children:[Object(m.jsx)(O,{exact:!0,path:"/login",component:v,isAuth:e.logged}),Object(m.jsx)(p,{path:"/",component:w,isAuth:e.logged})]})})})},B=function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}},I=function(){var e=Object(t.useReducer)(j,{},B),a=Object(n.a)(e,2),r=a[0],c=a[1];return Object(t.useEffect)((function(){localStorage.setItem("user",JSON.stringify(r))}),[r]),Object(m.jsx)("div",{children:Object(m.jsx)(i.Provider,{value:{user:r,dispatch:c},children:Object(m.jsx)(A,{})})})};s.a.render(Object(m.jsx)(I,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.c41dd1ac.chunk.js.map