(this.webpackJsonpstudents=this.webpackJsonpstudents||[]).push([[0],{19:function(e,t,n){e.exports={name:"Tarasiuk_name__1k5UQ",animation:"Tarasiuk_animation__kI0is",show:"Tarasiuk_show__kPS44"}},27:function(e,t,n){e.exports={myName:"MyName_myName__i0LQp"}},35:function(e,t,n){e.exports=n(47)},40:function(e,t,n){},45:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),c=n.n(i),o=(n(40),n(17)),u=n(8),s=(n(45),n(12)),l=n(25),d=n(1),m={},p={},b={},f={name:""},E={booleans:[]},O=n(31),h=n(10),v={shop:{items:[],settings:{minPrice:1e3,maxPrice:9e3,min:1e3,max:9e3,searchName:"",sortProducts:"",productTotalCount:7,page:1,pageCount:10}},shopBasket:{items:[],settings:{minPrice:1e3,maxPrice:9e3,min:1e3,max:9e3,searchName:"",sortProducts:"",productTotalCount:7,page:1,pageCount:10}},students:{items:[],settings:{minPrice:1e3,maxPrice:9e3,min:1e3,max:9e3,searchName:"",sortProducts:"",productTotalCount:7,page:1,pageCount:10}}},g=Object(s.c)({signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN/SOME":return Object(d.a)({},e);default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER/SOME":return Object(d.a)({},e);default:return e}},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT/SOME":return Object(d.a)({},e);default:return e}},booleans:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOLEAN/SET_VALUE":var n=e.booleans.map((function(e){var n=t.booleans.find((function(t){return t.name===e.name}));return n||e})),a=!0,r=!1,i=void 0;try{for(var c,o=function(){var e=c.value;n.find((function(t){return t.name===e.name}))||n.push(e)},u=t.booleans[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)o()}catch(s){r=!0,i=s}finally{try{a||null==u.return||u.return()}finally{if(r)throw i}}return Object(d.a)({},e,{booleans:n});default:return e}},neko:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEKO/SET_NAME":return Object(d.a)({},e,{name:t.name});default:return e}},tables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TABLE/SET_TABLE":return Object(d.a)({},e,Object(h.a)({},t.table,{items:t.items,settings:t.settings}));case"TABLE/ADD_ITEM":return Object(d.a)({},e,Object(h.a)({},t.table,{items:[].concat(Object(O.a)(e[t.table].items),[t.item]),settings:e[t.table].settings}));case"TABLE/DELETE_ITEM":return Object(d.a)({},e,Object(h.a)({},t.table,{items:e[t.table].items.filter((function(e){return e.id!==t.id})),settings:e[t.table].settings}));case"TABLE/SET_SORT_PRODUCTS":return Object(d.a)({},e,Object(h.a)({},t.table,Object(d.a)({},e[t.table],{settings:Object(d.a)({},e[t.table].settings,{sortProducts:t.sortProducts})})));case"TABLE/SET_MIN_MAX_PRICE":return Object(d.a)({},e,Object(h.a)({},t.table,Object(d.a)({},e[t.table],{settings:Object(d.a)({},e[t.table].settings,{min:t.min,max:t.max})})));case"TABLE/SET_SEARCH_NAME":return Object(d.a)({},e,Object(h.a)({},t.table,Object(d.a)({},e[t.table],{settings:Object(d.a)({},e[t.table].settings,{searchName:t.searchName})})));default:return e}}}),y=Object(s.d)(g,Object(s.a)(l.a)),j=y;window.store=y;var N=n(11),w=n(32),T=n(26),x={display:"flex"},S=Object(d.a)({},x,{flexFlow:"column"}),_=Object(d.a)({},x,{alignItems:"center"}),k=Object(d.a)({},S,{alignItems:"center"}),A=Object(d.a)({},_,{justifyContent:"center"}),C=Object(d.a)({},k,{justifyContent:"center"}),B=Object(d.a)({},_,{justifyContent:"space-around"}),L=Object(d.a)({},k,{justifyContent:"space-around"}),P=(Object(d.a)({},B,{flexWrap:"wrap"}),Object(d.a)({},L,{flexWrap:"wrap"}),Object(d.a)({},_,{justifyContent:"flex-end"}),function(e){var t=e.loading,n=e.error,a=e.title,i=void 0===a?"table":a,c=e.model,o=e.data,u=e.headerStyle,s=e.tableStyle,l=e.rowsStyle,m=e.rowStyle;return r.a.createElement("div",{style:Object(d.a)({margin:"0 10px"},C,{},s)},i,t?r.a.createElement("div",{style:{color:"orange"}},"loading..."):n?r.a.createElement("div",{style:{color:"red"}},n):r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("div",{style:Object(d.a)({border:"1px solid red",width:"100%"},A,{},u)},c.map((function(e,t){return e.title(t)}))),r.a.createElement("div",{style:Object(d.a)({border:"1px solid lime",width:"100%"},l)},o.map((function(e,t){return r.a.createElement("div",{key:e.id||t,style:Object(d.a)({width:"100%"},A,{},m)},c.map((function(n,a){return n.render(e,a,t)})))}))))}),I=function(e){return Object(u.c)((function(t){return function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var c,o=function(){var t=c.value;n.push(e.booleans.booleans.find((function(e){return e.name===t}))||{name:t,value:!1,data:{}})},u=t[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)o()}catch(s){r=!0,i=s}finally{try{a||null==u.return||u.return()}finally{if(r)throw i}}return n}(t,e)}))},M=[{title:function(e){return r.a.createElement("div",{key:e,style:{width:"70%"}},"product")},render:function(e,t){return r.a.createElement("div",{key:t,style:{width:"70%"}},e.productName)}},{title:function(e){return r.a.createElement("div",{key:e,style:{width:"30%"}},"price")},render:function(e,t){return r.a.createElement("div",{key:t,style:{width:"30%"}},e.price)}}],R=function(e){var t=e.table,n=void 0===t?"shop":t,a=e.data,i=e.model,c=Object(T.a)(e,["table","data","model"]),o=I(function(e){return["TABLE/LOADING/"+e,"TABLE/ERROR/"+e,"TABLE/SUCCESS/"+e]}(n)),s=Object(w.a)(o,3),l=s[0],d=s[1],m=(s[2],Object(u.c)((function(e){return e.tables})).shop);return r.a.createElement(P,Object.assign({loading:l.value,error:d.data.message||"",data:a||m.items,model:i||M},c))},D=n(27),F=n.n(D),G=function(){return r.a.createElement("div",{className:F.a.myName},"\u0418\u043e\u0441\u0438\u0444\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447")},U=n(28),W=n(33),J=n(29),Q=n(34),V=n(19),H=n.n(V),K=function(e){function t(){var e,n;Object(U.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(W.a)(this,(e=Object(J.a)(t)).call.apply(e,[this].concat(i)))).render=function(){return r.a.createElement("div",{className:H.a.name},r.a.createElement("span",{className:H.a.animation},"\u0422\u0430\u0440\u0430\u0441\u044e\u043a \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0412\u0430\u043b\u0435\u043d\u0442\u0438\u043d\u043e\u0432\u0438\u0447"))},n}return Object(Q.a)(t,e),t}(r.a.Component),X=[{id:"0",productName:"student",price:1e3,name:"Ignat Zakalinsky"},{id:"1",productName:"student",price:100,name:"\u0410\u0440\u0430\u043f\u043e\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447"},{id:"2",productName:"student",price:100,name:"\u0411\u0435\u043b\u044f\u0432\u0441\u043a\u0430\u044f \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u043d\u0430"},{id:"3",productName:"student",price:100,name:"\u0411\u0438\u0440\u044e\u043a\u043e\u0432 \u0421\u0430\u0432\u0435\u043b\u0438\u0439-\u0413\u0435\u043e\u0440\u0433\u0438\u0439 \u042e\u0440\u044c\u0435\u0432\u0438\u0447"},{id:"4",productName:"student",price:100,name:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432 \u0410\u0440\u0442\u0435\u043c \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447"},{id:"5",productName:"student",price:100,name:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0412\u0430\u0434\u0438\u043c\u043e\u0432\u0438\u0447"},{id:"6",productName:"student",price:100,name:"\u0412\u0435\u0441\u0435\u043b\u043e\u0432\u0430 \u0415\u043b\u0435\u043d\u0430 \u0414\u043c\u0438\u0442\u0440\u0438\u0435\u0432\u043d\u0430"},{id:"7",productName:"student",price:100,name:"\u0413\u0430\u0432\u0440\u0438\u043b\u0435\u043d\u043a\u043e \u0410\u043d\u0442\u043e\u043d \u0410\u043d\u0434\u0440\u0435\u0435\u0432\u0438\u0447"},{id:"8",productName:"student",price:100,name:"\u0418\u043e\u0441\u0438\u0444\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447",nameComponent:r.a.createElement(G,null)},{id:"9",productName:"student",price:100,name:"\u041a\u0430\u0440\u0442\u0430\u0448\u043e\u0432 \u0418\u043b\u044c\u044f \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447"},{id:"10",productName:"student",price:100,name:"\u041a\u0438\u0441\u044d\u043b\u044b\u043a \u041e\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447"},{id:"11",productName:"student",price:100,name:"\u041b\u0435\u0448\u0430 \u0424\u0435\u0434\u043e\u0440\u043e\u0432\u0438\u0447"},{id:"12",productName:"student",price:100,name:"\u0421\u0432\u0438\u0434\u0435\u0440\u0441\u043a\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432 \u0410\u043d\u0434\u0440\u0435\u0435\u0432\u0438\u0447"},{id:"13",productName:"student",price:100,name:"\u0422\u043e\u043b\u043a\u0430\u0447\u0451\u0432 \u0418\u0432\u0430\u043d \u0411\u043e\u0440\u0438\u0441\u043e\u0432\u0438\u0447"},{id:"14",productName:"student",price:100,name:"\u0424\u0435\u0434\u043e\u0440\u0438\u043d \u0412\u0430\u0434\u0438\u043c \u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0438\u0447"},{id:"15",productName:"student",price:100,name:"\u0425\u0443\u0434\u0430\u0439\u0431\u0435\u0440\u0434\u044b\u0435 \u041e\u0432\u043b\u044f\u043a\u0443\u043b \u0414\u043e\u0432\u043b\u0435\u0442\u0433\u0435\u043b\u044c\u0434\u0438\u0435\u0432\u0438\u0447\u044c"},{id:"16",productName:"student",price:100,name:"\u042f\u0440\u043e\u0432\u043e\u0439 \u0418\u0432\u0430\u043d \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447"},{id:"17",productName:"student",price:100,name:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432 \u041d\u0438\u043a\u043e\u043b\u0430\u0439 \u0410\u0444\u0430\u043d\u0430\u0441\u044c\u0435\u0432\u0438\u0447"},{id:"18",productName:"student",price:100,name:"\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u0441\u043a\u0438\u0439 \u0412\u043b\u0430\u0434"},{id:"19",productName:"student",price:100,name:"\u041c\u0438\u0434\u0430\u0435\u0432 \u0410\u0445\u043c\u0430\u0434 \u0420\u0443\u0441\u043b\u0430\u043d\u043e\u0432\u0438\u0447"},{id:"20",productName:"student",price:100,name:"ATABALOV Murad"},{id:"21",productName:"student",price:100,name:"\u041a\u043e\u0447\u043d\u0435\u0432 \u0421\u0435\u0440\u0433\u0435\u0439 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447"},{id:"22",productName:"student",price:100,name:"\u041c\u0430\u0440\u0442\u043e\u0441 \u0410\u0440\u0442\u0451\u043c \u0412\u0430\u0434\u0438\u043c\u043e\u0432\u0438\u0447"},{id:"23",productName:"student",price:100,name:"\u0422\u0430\u0440\u0430\u0441\u044e\u043a \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0412\u0430\u043b\u0435\u043d\u0442\u0438\u043d\u043e\u0432\u0438\u0447",nameComponent:r.a.createElement(K,null)}],Z=function(){var e=Object(u.c)((function(e){return e.tables})).students,t=Object(u.b)(),n=[{title:function(e){return r.a.createElement("div",{key:e,style:{width:"338px",padding:"11px"}},"Students")},render:function(e,t){return e.nameComponent?e.nameComponent:r.a.createElement("div",{key:t,style:{width:"338px",border:"1px solid black",margin:"5px",padding:"5px"}},e.name)}},{title:function(e){return r.a.createElement("div",{key:e,style:{width:"60%"}},"...")},render:function(e,t){return r.a.createElement("div",{key:t,style:{width:"60%"}},"...")}}];return Object(a.useEffect)((function(){t({type:"TABLE/SET_TABLE",table:"students",items:X,settings:{minPrice:1e3,maxPrice:9e3,min:1e3,max:9e3,searchName:"",sortProducts:"",productTotalCount:7,page:1,pageCount:10}})}),[]),r.a.createElement(R,{table:"shop",model:n,data:e.items,headerStyle:{marginBottom:"5px",border:"none"},title:"kmb 25"})},$=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z,null))},q=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.b,{exact:!0,path:"/",render:function(){return r.a.createElement(N.a,{to:"/students"})}}),r.a.createElement(N.b,{path:"/students",render:function(){return r.a.createElement($,null)}}))},z=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(q,null))},Y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,null,r.a.createElement(u.a,{store:j},r.a.createElement(z,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[35,1,2]]]);
//# sourceMappingURL=main.2d521d26.chunk.js.map