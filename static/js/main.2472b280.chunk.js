(this.webpackJsonpstudents=this.webpackJsonpstudents||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports={daysStyle:"TolkachevProgress_daysStyle__2saEN",mondayDecoration:"TolkachevProgress_mondayDecoration__3_8fr",tuesdayDecoratin:"TolkachevProgress_tuesdayDecoratin__3nnet",wednesdayDecoratin:"TolkachevProgress_wednesdayDecoratin__X0eU4",thursdayDecoratin:"TolkachevProgress_thursdayDecoratin__2kYwe",fridayDecoratin:"TolkachevProgress_fridayDecoratin__1OOb_"}},,,,,,,,,,,,,function(e,t,n){e.exports={name:"Tarasiuk_name__1dkKB",animation:"Tarasiuk_animation__zUvSH",show:"Tarasiuk_show__3rs84"}},function(e,t,n){e.exports={MySuperName:"MySuperName_MySuperName__103dI",Vladislav:"MySuperName_Vladislav__1mvtg",move:"MySuperName_move__3pSVy"}},function(e,t,n){e.exports={name:"name_name__2GLoF",text:"name_text__3k457"}},function(e,t,n){e.exports={name:"nameStyle_name___X-3B",blur:"nameStyle_blur__36sx4",par:"nameStyle_par__8Cka4"}},function(e,t,n){e.exports={wrap:"AnimatedName_wrap__32Hz7",item:"AnimatedName_item__30LCD",jump:"AnimatedName_jump__16G-j"}},function(e,t,n){e.exports={wrap:"Skills_wrap__3Vo4a",item:"Skills_item__1R8Ki"}},function(e,t,n){e.exports={wrap:"SelectDay_wrap__3pu6R",green:"SelectDay_green__P5TjR",yellow:"SelectDay_yellow__2QBNB",red:"SelectDay_red__5RbJ7",purple:"SelectDay_purple__YcwKd",blue:"SelectDay_blue__3rfPm"}},,,,,,,,function(e,t,n){e.exports={myName:"MyName_myName__D7AWM"}},function(e,t,n){e.exports={name:"AkhmadMidaev_name__uCCm8"}},function(e,t,n){e.exports={tolkachev:"Tolkachev_tolkachev__1bnui"}},function(e,t,n){e.exports={name:"Name_name__DeEBm"}},function(e,t,n){e.exports={h1:"App_h1__155aO"}},function(e,t,n){e.exports={Gradient:"name_Gradient__jKTGN"}},function(e,t,n){e.exports={myName:"name_myName__2JMtK"}},function(e,t,n){e.exports={name:"name_name__1Zl1T"}},function(e,t,n){e.exports={name:"MyName_name__3MZtl"}},function(e,t,n){e.exports={StudentName:"name_StudentName__1IMJX"}},function(e,t,n){e.exports={martos:"Martos_martos__DjKwW"}},function(e,t,n){e.exports={name:"BelyavskayaAlex_name__1qDbb",blink:"BelyavskayaAlex_blink__335wc"}},function(e,t,n){e.exports={skill:"TolkachevSkill_skill__2bvhC"}},function(e,t,n){e.exports={skills:"TolkachevSkills_skills__1sic5"}},,,function(e,t,n){e.exports=n(69)},,,,,function(e,t,n){},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(20),c=n.n(i),l=(n(60),n(23)),o=n(8),m=(n(65),n(18)),u=n(37),s=n(1),d={},p={},f={},y={name:""},E={booleans:[]},b=n(54),v=n(10),_={shop:{items:[],settings:{minPrice:1e3,maxPrice:9e3,min:1e3,max:9e3,searchName:"",sortProducts:"",productTotalCount:7,page:1,pageCount:10}},shopBasket:{items:[],settings:{minPrice:1e3,maxPrice:9e3,min:1e3,max:9e3,searchName:"",sortProducts:"",productTotalCount:7,page:1,pageCount:10}},students:{items:[],settings:{minPrice:1e3,maxPrice:9e3,min:1e3,max:9e3,searchName:"",sortProducts:"",productTotalCount:7,page:1,pageCount:10}}},h=Object(m.c)({signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN/SOME":return Object(s.a)({},e);default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER/SOME":return Object(s.a)({},e);default:return e}},forgot:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FORGOT/SOME":return Object(s.a)({},e);default:return e}},booleans:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"BOOLEAN/SET_VALUE":var n=e.booleans.map((function(e){var n=t.booleans.find((function(t){return t.name===e.name}));return n||e})),a=!0,r=!1,i=void 0;try{for(var c,l=function(){var e=c.value;n.find((function(t){return t.name===e.name}))||n.push(e)},o=t.booleans[Symbol.iterator]();!(a=(c=o.next()).done);a=!0)l()}catch(m){r=!0,i=m}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return Object(s.a)({},e,{booleans:n});default:return e}},neko:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEKO/SET_NAME":return Object(s.a)({},e,{name:t.name});default:return e}},tables:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TABLE/SET_TABLE":return Object(s.a)({},e,Object(v.a)({},t.table,{items:t.items,settings:t.settings}));case"TABLE/ADD_ITEM":return Object(s.a)({},e,Object(v.a)({},t.table,{items:[].concat(Object(b.a)(e[t.table].items),[t.item]),settings:e[t.table].settings}));case"TABLE/DELETE_ITEM":return Object(s.a)({},e,Object(v.a)({},t.table,{items:e[t.table].items.filter((function(e){return e.id!==t.id})),settings:e[t.table].settings}));case"TABLE/SET_SORT_PRODUCTS":return Object(s.a)({},e,Object(v.a)({},t.table,Object(s.a)({},e[t.table],{settings:Object(s.a)({},e[t.table].settings,{sortProducts:t.sortProducts})})));case"TABLE/SET_MIN_MAX_PRICE":return Object(s.a)({},e,Object(v.a)({},t.table,Object(s.a)({},e[t.table],{settings:Object(s.a)({},e[t.table].settings,{min:t.min,max:t.max})})));case"TABLE/SET_SEARCH_NAME":return Object(s.a)({},e,Object(v.a)({},t.table,Object(s.a)({},e[t.table],{settings:Object(s.a)({},e[t.table].settings,{searchName:t.searchName})})));default:return e}}}),k=Object(m.d)(h,Object(m.a)(u.a)),g=k;window.store=k;var N=n(11),x=n(15),O=n(38),w={display:"flex"},j=Object(s.a)({},w,{flexFlow:"column"}),S=Object(s.a)({},w,{alignItems:"center"}),T=Object(s.a)({},j,{alignItems:"center"}),C=Object(s.a)({},S,{justifyContent:"center"}),M=Object(s.a)({},T,{justifyContent:"center"}),A=Object(s.a)({},S,{justifyContent:"space-around"}),D=Object(s.a)({},T,{justifyContent:"space-around"}),L=(Object(s.a)({},A,{flexWrap:"wrap"}),Object(s.a)({},D,{flexWrap:"wrap"}),Object(s.a)({},S,{justifyContent:"flex-end"}),function(e){var t=e.loading,n=e.error,a=e.title,i=void 0===a?"table":a,c=e.model,l=e.data,o=e.headerStyle,m=e.tableStyle,u=e.rowsStyle,d=e.rowStyle;return r.a.createElement("div",{style:Object(s.a)({margin:"0 10px"},M,{},m)},i,t?r.a.createElement("div",{style:{color:"orange"}},"loading..."):n?r.a.createElement("div",{style:{color:"red"}},n):r.a.createElement("div",null,r.a.createElement("br",null)),r.a.createElement("div",{style:Object(s.a)({border:"1px solid red",width:"100%"},C,{},o)},c.map((function(e,t){return e.title(t)}))),r.a.createElement("div",{style:Object(s.a)({border:"1px solid lime",width:"100%"},u)},l.map((function(e,t){return r.a.createElement("div",{key:e.id||t,style:Object(s.a)({width:"100%"},C,{},d)},c.map((function(n,a){return n.render(e,a,t)})))}))))}),B=function(e){return Object(o.c)((function(t){return function(e,t){var n=[],a=!0,r=!1,i=void 0;try{for(var c,l=function(){var t=c.value;n.push(e.booleans.booleans.find((function(e){return e.name===t}))||{name:t,value:!1,data:{}})},o=t[Symbol.iterator]();!(a=(c=o.next()).done);a=!0)l()}catch(m){r=!0,i=m}finally{try{a||null==o.return||o.return()}finally{if(r)throw i}}return n}(t,e)}))},P=[{title:function(e){return r.a.createElement("div",{key:e,style:{width:"70%"}},"product")},render:function(e,t){return r.a.createElement("div",{key:t,style:{width:"70%"}},e.productName)}},{title:function(e){return r.a.createElement("div",{key:e,style:{width:"30%"}},"price")},render:function(e,t){return r.a.createElement("div",{key:t,style:{width:"30%"}},e.price)}}],R=function(e){var t=e.table,n=void 0===t?"shop":t,a=e.data,i=e.model,c=Object(O.a)(e,["table","data","model"]),l=B(function(e){return["TABLE/LOADING/"+e,"TABLE/ERROR/"+e,"TABLE/SUCCESS/"+e]}(n)),m=Object(x.a)(l,3),u=m[0],s=m[1],d=(m[2],Object(o.c)((function(e){return e.tables})).shop);return r.a.createElement(L,Object.assign({loading:u.value,error:s.data.message||"",data:a||d.items,model:i||P},c))},I=function(e){var t=e.SD,n=Object(a.useState)("Monday"),r=Object(x.a)(n,2),i=r[0],c=r[1];return a.createElement(a.Fragment,null,a.createElement("select",{value:i,onChange:function(e){return c(e.target.value)}},a.createElement("option",{value:"Monday"},"1"),a.createElement("option",{value:"Tuesday"},"2"),a.createElement("option",{value:"Wednesday"},"3"),a.createElement("option",{value:"Thursday"},"4"),a.createElement("option",{value:"Friday"},"5")),t(i))},W=[{title:function(e){return r.a.createElement("div",{key:e,style:{width:"338px",padding:"11px"}},"Students")},render:function(e,t){return e.nameComponent?e.nameComponent(t):r.a.createElement("div",{key:t,style:{width:"338px",border:"1px solid black",margin:"5px",padding:"5px"}},e.name)}},{title:function(e){return r.a.createElement("div",{key:e,style:{width:"130px",padding:"11px"}},"Progress")},render:function(e,t){return r.a.createElement("div",{key:t,style:{width:"130px",border:"1px solid black",margin:"5px",padding:"5px",display:"flex"}},r.a.createElement(I,{SD:e.styledDay?e.styledDay:function(e){return r.a.createElement("div",{style:{marginLeft:5,padding:5,border:"1px solid black",width:82}},"some day")}}))}},{title:function(e){return r.a.createElement("div",{key:e,style:{width:"500px",padding:"11px"}},"Skills")},render:function(e,t){return e.mappedSkills?e.mappedSkills(t):r.a.createElement("div",{key:t,style:{width:"500px",border:"1px solid black",margin:"5px",padding:"5px",display:"flex",flexWrap:"wrap"}},r.a.createElement("div",{style:{width:150,border:"1px solid black",marginRight:5,paddingLeft:5}},"..."),r.a.createElement("div",{style:{width:150,border:"1px solid black",marginRight:5,paddingLeft:5}},"..."),r.a.createElement("div",{style:{width:150,border:"1px solid black",marginRight:5,paddingLeft:5}},"..."))}},{title:function(e){return r.a.createElement("div",{key:e,style:{width:"10%"}},"...")},render:function(e,t){return r.a.createElement("div",{key:t,style:{width:"10%"}},"...")}}],F=n(39),G=n.n(F),V=function(){return r.a.createElement("div",{className:G.a.myName},"\u0418\u043e\u0441\u0438\u0444\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447")},K=n(25),U=n.n(K),J=function(){return r.a.createElement("div",{className:U.a.name},r.a.createElement("span",{className:U.a.animation},"\u0422\u0430\u0440\u0430\u0441\u044e\u043a \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0412\u0430\u043b\u0435\u043d\u0442\u0438\u043d\u043e\u0432\u0438\u0447"))},X=n(40),H=n.n(X),Z=function(){return r.a.createElement("div",{className:H.a.name},r.a.createElement("p",null,"\u041c\u0438\u0434\u0430\u0435\u0432 \u0410\u0445\u043c\u0430\u0434 \u0420\u0443\u0441\u043b\u0430\u043d\u043e\u0432\u0438\u0447"))},z=n(26),Y=n.n(z),q=function(){return r.a.createElement("div",{className:Y.a.MySuperName},r.a.createElement("div",{className:Y.a.Vladislav},"\u0412\u043b\u0430\u0434 \u0411\u0435\u0440\u0435\u0437\u043e\u0432\u0441\u043a\u0438\u0439"))},Q=n(13),$=n(16),ee=n(14),te=n(17),ne=function(e){function t(){var e,n;Object(Q.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(i)))).nameMas=["\u0413","\u0430","\u0432","\u0440","\u0438","\u043b","\u0435","\u043d","\u043a","\u043e"," ","\u0410","\u043d","\u0442","\u043e","\u043d"],n.colorMas=["red","orange","violet","green","blue","purple"],n.printMyName=function(){n.setState({})},n.render=function(){return r.a.createElement("div",{style:{padding:"5px",margin:"5px",width:"338px"},onMouseOver:n.printMyName},n.nameMas.map((function(e,t){return r.a.createElement("span",{key:t,style:{color:n.colorMas[Math.floor(Math.random()*n.colorMas.length)]}},e)})))},n}return Object(te.a)(t,e),t}(r.a.Component),ae=n(41),re=n.n(ae),ie=function(){return r.a.createElement("div",{className:re.a.tolkachev},"\u0422\u043e\u043b\u043a\u0430\u0447\u0451\u0432 \u0418\u0432\u0430\u043d \u0411\u043e\u0440\u0438\u0441\u043e\u0432\u0438\u0447")},ce=n(27),le=n.n(ce),oe=function(){var e=Object(a.useState)(!0),t=Object(x.a)(e,2),n=t[0],i=t[1];return n?r.a.createElement("div",{className:le.a.name,onMouseOver:function(){return i(!1)}},"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432 \u0410\u0440\u0442\u0435\u043c \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447"):r.a.createElement("div",{className:le.a.text,onMouseOut:function(){return i(!0)}},"\u041f\u0440\u0438\u0448\u0435\u043b \u0432 \u0438\u043d\u043a\u0443\u0431\u0430\u0442\u043e\u0440 \u0431\u043e\u043c\u0431\u0438\u0442\u044c REACT!")},me={width:350,margin:5,color:"green",fontFamily:"sans-serif",fontWeight:900},ue=function(){return r.a.createElement("div",{style:me},"\u0412\u0430\u0434\u0438\u043c \u0424\u0435\u0434\u043e\u0440\u0438\u043d")},se=n(42),de=n.n(se),pe=function(){return r.a.createElement("div",{className:de.a.name},r.a.createElement("p",null,"\u041a\u043e\u0447\u043d\u0435\u0432 \u0421\u0435\u0440\u0433\u0435\u0439 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447"))},fe=n(43),ye=n.n(fe),Ee=function(){return r.a.createElement("div",{className:ye.a.h1},"\u0421\u0432\u0438\u0434\u0435\u0440\u0441\u043a\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432 \u0410\u043d\u0434\u0440\u0435\u0435\u0432\u0438\u0447")},be=n(44),ve=n.n(be),_e=function(){return r.a.createElement("div",{className:ve.a.Gradient},"\u0411\u0438\u0440\u044e\u043a\u043e\u0432 \u0421\u0430\u0432\u0435\u043b\u0438\u0439-\u0413\u0435\u043e\u0440\u0433\u0438\u0439 \u042e\u0440\u044c\u0435\u0432\u0438\u0447")},he=n(45),ke=n.n(he),ge=function(){return r.a.createElement("div",{className:ke.a.myName},"\u041b\u0435\u043d\u0430 \u0412\u0435\u0441\u0435\u043b\u043e\u0432\u0430")},Ne=n(46),xe=n.n(Ne),Oe=function(){return r.a.createElement("span",{className:xe.a.name},"\u0410\u0440\u0430\u043f\u043e\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447")},we=n(47),je=n.n(we),Se=function(){return r.a.createElement("div",{className:je.a.name},"\u0418\u043b\u044c\u044f \u041a\u0430\u0440\u0442\u0430\u0448\u043e\u0432")},Te=n(48),Ce=n.n(Te),Me=function(){return r.a.createElement("div",{className:Ce.a.StudentName},r.a.createElement("p",{className:"StudentNameTitle"},"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0412\u0430\u0434\u0438\u043c\u043e\u0432\u0438\u0447"))},Ae=n(49),De=n.n(Ae),Le=function(){return r.a.createElement("div",{className:De.a.martos},r.a.createElement("div",null,"\u041c\u0430\u0440\u0442\u043e\u0441 \u0410\u0440\u0442\u0435\u043c \u0412\u0430\u0434\u0438\u043c\u043e\u0432\u0438\u0447"))},Be=n(50),Pe=n.n(Be),Re=function(){return r.a.createElement("div",{className:Pe.a.name},"\u0411\u0435\u043b\u044f\u0432\u0441\u043a\u0430\u044f \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u043d\u0430")},Ie=n(28),We=n.n(Ie),Fe=function(){return r.a.createElement("div",{className:We.a.name},r.a.createElement("p",{className:We.a.par},"\u042f\u0440\u043e\u0432\u043e\u0439 \u0418\u0432\u0430\u043d \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447"))},Ge=n(29),Ve=n.n(Ge),Ke=function(e){return r.a.createElement("div",{className:Ve.a.item},e.letter)},Ue=function(){var e=["A","T","A","B","A","L","O","V","","M","U","R","A","D"].map((function(e){return r.a.createElement(Ke,{letter:e})}));return r.a.createElement("div",{className:Ve.a.wrap},e)},Je=n(12),Xe=n.n(Je),He=function(e){var t="Monday"===e.day?Xe.a.mondayDecoration:"Tuesday"===e.day?Xe.a.tuesdayDecoratin:"Wednesday"===e.day?Xe.a.wednesdayDecoratin:"Thursday"===e.day?Xe.a.thursdayDecoratin:"Friday"===e.day?Xe.a.fridayDecoratin:"";return r.a.createElement("div",{className:Xe.a.daysStyle},r.a.createElement("span",{className:t}," ",e.day," "))},Ze=n(51),ze=n.n(Ze),Ye=function(e){return r.a.createElement("div",{className:ze.a.skill},r.a.createElement("span",null,e.skill))},qe=n(52),Qe=n.n(qe),$e=function(){var e=[{skill:"\u0443\u043c\u043d\u044b\u0439"},{skill:"\u043a\u0440\u0430\u0441\u0438\u0432\u044b\u0439"},{skill:"\u043e\u0431\u043e\u044f\u0442\u0435\u043b\u0435\u043d\u044b\u0439"}].map((function(e){return r.a.createElement(Ye,{skill:e.skill})}));return r.a.createElement("div",{className:Qe.a.skills},e)},et=(n(66),function(e){function t(){var e,n;Object(Q.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(i)))).render=function(){return r.a.createElement("div",{className:"skill"},r.a.createElement("span",null,n.props.skill))},n}return Object(te.a)(t,e),t}(r.a.Component)),tt=(n(67),function(e){function t(){var e,n;Object(Q.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object($.a)(this,(e=Object(ee.a)(t)).call.apply(e,[this].concat(i)))).render=function(){var e=[{skill:"\u0412\u0435\u0436\u043b\u0438\u0432\u044b\u0439"},{skill:"\u0414\u0440\u0443\u0436\u0435\u043b\u044e\u0431\u043d\u044b\u0439"},{skill:"\u041a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0431\u0435\u043b\u044c\u043d\u044b\u0439"}].map((function(e){return r.a.createElement(et,{skill:e.skill})}));return r.a.createElement("div",{className:"skills"},e)},n}return Object(te.a)(t,e),t}(r.a.Component)),nt=n(30),at=n.n(nt),rt=function(e){return r.a.createElement("div",{className:at.a.item},e.skillValue)},it=["\u041b\u0438\u0434\u0435\u0440","\u0426\u0435\u043b\u0435\u0443\u0441\u0442\u0440\u0435\u043c\u043b\u0435\u043d\u043d\u044b\u0439","\u0416\u0438\u0437\u043d\u0435\u0440\u0430\u0434\u043e\u0441\u0442\u043d\u044b\u0439"].map((function(e){return r.a.createElement(rt,{skillValue:e})})),ct=function(){return r.a.createElement("div",{className:at.a.wrap},it)},lt=n(31),ot=n.n(lt),mt=function(e){var t;switch(e.day){case"Monday":t="green";break;case"Tuesday":t="yellow";break;case"Wednesday":t="red";break;case"Thursday":t="purple";break;case"Friday":t="blue";break;default:t="white"}return r.a.createElement("div",{className:ot.a.wrap},r.a.createElement("div",{className:ot.a[t]},e.day))},ut=[{id:"0",productName:"student",price:1e3,name:"Ignat Zakalinsky",styledDay:function(e){return r.a.createElement("div",{style:{marginLeft:5,padding:5,border:"1px solid black",width:82}},e)},mappedSkills:function(e){return r.a.createElement("div",{key:e,style:{width:500,border:"1px solid black",margin:5,padding:5,display:"flex",flexWrap:"wrap"}},r.a.createElement("div",{style:{width:150,border:"1px solid black",marginRight:5,paddingLeft:5}},"\u0440\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u0438\u0441\u0442"),r.a.createElement("div",{style:{width:150,border:"1px solid black",marginRight:5,paddingLeft:5}},"\u043a\u043e\u043c\u043c\u0443\u043d\u0438\u0441\u0442"),r.a.createElement("div",{style:{width:150,border:"1px solid black",marginRight:5,paddingLeft:5}},"\u0430\u043d\u0438\u043c\u0435\u0448\u043d\u0438\u043a"))}},{id:"1",productName:"student",price:100,name:"\u0410\u0440\u0430\u043f\u043e\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(Oe,{key:e})}},{id:"2",productName:"student",price:100,name:"\u0411\u0435\u043b\u044f\u0432\u0441\u043a\u0430\u044f \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u0430 \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u043d\u0430",nameComponent:function(e){return r.a.createElement(Re,{key:e})}},{id:"3",productName:"student",price:100,name:"\u0411\u0438\u0440\u044e\u043a\u043e\u0432 \u0421\u0430\u0432\u0435\u043b\u0438\u0439-\u0413\u0435\u043e\u0440\u0433\u0438\u0439 \u042e\u0440\u044c\u0435\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(_e,{key:e})}},{id:"4",productName:"student",price:100,name:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432 \u0410\u0440\u0442\u0435\u043c \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(oe,{key:e})},mappedSkills:function(e){return r.a.createElement(tt,{key:e})}},{id:"5",productName:"student",price:100,name:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432 \u0415\u0432\u0433\u0435\u043d\u0438\u0439 \u0412\u0430\u0434\u0438\u043c\u043e\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(Me,{key:e})}},{id:"6",productName:"student",price:100,name:"\u0412\u0435\u0441\u0435\u043b\u043e\u0432\u0430 \u0415\u043b\u0435\u043d\u0430 \u0414\u043c\u0438\u0442\u0440\u0438\u0435\u0432\u043d\u0430",nameComponent:function(e){return r.a.createElement(ge,{key:e})}},{id:"7",productName:"student",price:100,name:"\u0413\u0430\u0432\u0440\u0438\u043b\u0435\u043d\u043a\u043e \u0410\u043d\u0442\u043e\u043d \u0410\u043d\u0434\u0440\u0435\u0435\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(ne,{key:e})}},{id:"8",productName:"student",price:100,name:"\u0418\u043e\u0441\u0438\u0444\u043e\u0432 \u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d \u0421\u0435\u0440\u0433\u0435\u0435\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(V,{key:e})}},{id:"9",productName:"student",price:100,name:"\u041a\u0430\u0440\u0442\u0430\u0448\u043e\u0432 \u0418\u043b\u044c\u044f \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(Se,{key:e})}},{id:"10",productName:"student",price:100,name:"\u041a\u0438\u0441\u044d\u043b\u044b\u043a \u041e\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447"},{id:"11",productName:"student",price:100,name:"\u041b\u0435\u0448\u0430 \u0424\u0435\u0434\u043e\u0440\u043e\u0432\u0438\u0447"},{id:"12",productName:"student",price:100,name:"\u0421\u0432\u0438\u0434\u0435\u0440\u0441\u043a\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u0441\u043b\u0430\u0432 \u0410\u043d\u0434\u0440\u0435\u0435\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(Ee,{key:e})}},{id:"13",productName:"student",price:100,name:"\u0422\u043e\u043b\u043a\u0430\u0447\u0451\u0432 \u0418\u0432\u0430\u043d \u0411\u043e\u0440\u0438\u0441\u043e\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(ie,{key:e})},styledDay:function(e){return r.a.createElement(He,{day:e})},mappedSkills:function(e){return r.a.createElement($e,{key:e})}},{id:"14",productName:"student",price:100,name:"\u0424\u0435\u0434\u043e\u0440\u0438\u043d \u0412\u0430\u0434\u0438\u043c \u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(ue,{key:e})}},{id:"15",productName:"student",price:100,name:"\u0425\u0443\u0434\u0430\u0439\u0431\u0435\u0440\u0434\u044b\u0435 \u041e\u0432\u043b\u044f\u043a\u0443\u043b \u0414\u043e\u0432\u043b\u0435\u0442\u0433\u0435\u043b\u044c\u0434\u0438\u0435\u0432\u0438\u0447\u044c"},{id:"16",productName:"student",price:100,name:"\u042f\u0440\u043e\u0432\u043e\u0439 \u0418\u0432\u0430\u043d \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(Fe,{key:e})}},{id:"17",productName:"student",price:100,name:"\u0412\u0430\u0441\u0438\u043b\u044c\u0435\u0432 \u041d\u0438\u043a\u043e\u043b\u0430\u0439 \u0410\u0444\u0430\u043d\u0430\u0441\u044c\u0435\u0432\u0438\u0447"},{id:"18",productName:"student",price:100,name:"\u0411\u0435\u0440\u0435\u0437\u043e\u0432\u0441\u043a\u0438\u0439 \u0412\u043b\u0430\u0434",nameComponent:function(e){return r.a.createElement(q,{key:e})}},{id:"19",productName:"student",price:100,name:"\u041c\u0438\u0434\u0430\u0435\u0432 \u0410\u0445\u043c\u0430\u0434 \u0420\u0443\u0441\u043b\u0430\u043d\u043e\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(Z,{key:e})}},{id:"20",productName:"student",price:100,name:"ATABALOV Murad",nameComponent:function(e){return r.a.createElement(Ue,{key:e})},styledDay:function(e){return r.a.createElement(mt,{day:e})},mappedSkills:function(e){return r.a.createElement(ct,{key:e})}},{id:"21",productName:"student",price:100,name:"\u041a\u043e\u0447\u043d\u0435\u0432 \u0421\u0435\u0440\u0433\u0435\u0439 \u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440\u043e\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(pe,{key:e})}},{id:"22",productName:"student",price:100,name:"\u041c\u0430\u0440\u0442\u043e\u0441 \u0410\u0440\u0442\u0451\u043c \u0412\u0430\u0434\u0438\u043c\u043e\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(Le,{key:e})}},{id:"23",productName:"student",price:100,name:"\u0422\u0430\u0440\u0430\u0441\u044e\u043a \u0414\u043c\u0438\u0442\u0440\u0438\u0439 \u0412\u0430\u043b\u0435\u043d\u0442\u0438\u043d\u043e\u0432\u0438\u0447",nameComponent:function(e){return r.a.createElement(J,{key:e})}}],st=function(){var e=Object(o.c)((function(e){return e.tables})).students,t=Object(o.b)();return Object(a.useEffect)((function(){t({type:"TABLE/SET_TABLE",table:"students",items:ut,settings:{minPrice:1e3,maxPrice:9e3,min:1e3,max:9e3,searchName:"",sortProducts:"",productTotalCount:7,page:1,pageCount:10}})}),[]),r.a.createElement(R,{table:"shop",model:W,data:e.items,headerStyle:{marginBottom:"5px",border:"none",flexWrap:"wrap"},title:"kmb 25",rowStyle:{flexWrap:"wrap"}})},dt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(st,null))},pt=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.b,{exact:!0,path:"/",render:function(){return r.a.createElement(N.a,{to:"/students"})}}),r.a.createElement(N.b,{path:"/students",render:function(){return r.a.createElement(dt,null)}}))},ft=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(pt,null))},yt=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null,r.a.createElement(o.a,{store:g},r.a.createElement(ft,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(yt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[55,1,2]]]);
//# sourceMappingURL=main.2472b280.chunk.js.map