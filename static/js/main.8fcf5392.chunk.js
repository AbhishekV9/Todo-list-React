(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),c=n(5),i=n.n(c),r=n(6),d=n(7),o=n(9),l=n(8),u=n(3),h=(n(15),n(1));var j=function(t){var e=t.list,n=t.index;return Object(h.jsxs)("div",{className:"card",style:{width:"20rem"},children:[Object(h.jsxs)("div",{className:"card-header ",children:[Object(h.jsxs)("h5",{className:"card-title",children:["Task No:- ",n+1," "]}),Object(h.jsxs)("h5",{className:"card-title",children:["ID:- ",e.id," "]})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsxs)("p",{className:"card-text",children:["Task:- ",e.title," "]}),Object(h.jsxs)("p",{className:"card-text",children:["Completed:- ",String(e.completed)," "]}),Object(h.jsxs)("div",{className:"df",children:[Object(h.jsx)("button",{className:"btn btn-outline-success",onClick:function(){return t.complete(e.id)},children:"Completed"}),Object(h.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return t.delete(e.id)},children:"Delete"})]})]})]})},p=n(4),b=n.n(p),m=n(13),x="ADD_LISTS",f="ADD_NEW",O="UPDATE_LIST",v="DELETE_TASK",y="COMPLETE_TASK";function N(){return function(t){fetch("https://jsonplaceholder.typicode.com/todos").then((function(t){return t.json()})).then((function(e){t(function(t){return{type:x,list:t}}(e))}))}}function T(t,e){return function(n){fetch("https://jsonplaceholder.typicode.com/todos",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userId:1,title:t,completed:!1})}).then((function(t){return t.json()})).then((function(t){t.id=e,n(function(t){return{type:f,data:t}}(t))}))}}function k(t,e){return function(n){fetch("https://jsonplaceholder.typicode.com/todos/1",{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({id:t,title:e})}).then((function(t){return t.json()})).then((function(a){n(function(t,e){return{type:O,id:t,text:e}}(Number(t),e))}))}}function g(t){return function(e){fetch("https://jsonplaceholder.typicode.com/todos/1",{method:"DELETE"}).then((function(t){return t.json()})).then((function(n){e(function(t){return{type:v,id:t}}(t))}))}}function C(t){return function(e){fetch("https://jsonplaceholder.typicode.com/todos/1",{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({id:t,completed:!0})}).then((function(t){return t.json()})).then((function(n){e(function(t){return{type:y,id:t}}(t))}))}}var S=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;return Object(r.a)(this,n),(t=e.call(this)).handleAddTask=Object(m.a)(b.a.mark((function e(){var n,a,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.setState({idNo:t.state.idNo+1});case 2:return n=t.state,a=n.text,s=n.idNo,""===a&&alert("Please Enter Task Title"),c=s,e.next=7,t.props.dispatch(T(a,c));case 7:t.setState({text:""}),console.log("statt",t.state);case 9:case"end":return e.stop()}}),e)}))),t.handleUpdateTask=Object(m.a)(b.a.mark((function e(){var n,a,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.state,a=n.id,s=n.updateText,""!==a&&""!==s||alert("Please Enter the ID or Text"),c=t.props.dispatch,e.next=5,c(k(parseInt(a),s));case 5:t.setState({id:"",updateText:""}),console.log(t.state);case 7:case"end":return e.stop()}}),e)}))),t.handleChange=function(e){t.setState({text:e.target.value})},t.handleIdChange=function(e){t.setState({id:e.target.value})},t.whatUpdate=function(e){t.setState({updateText:e.target.value})},t.state={text:"",id:"",updateText:"",idNo:200},t}return Object(d.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"p-3",children:[Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("div",{className:"mx-auto m-3 ",style:{width:"150px"},children:Object(h.jsx)("h2",{children:"Add Task"})})}),Object(h.jsxs)("div",{className:"input-group mb-3 p-3",children:[Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter the task","aria-label":"Recipient's username","aria-describedby":"button-addon2",value:this.state.text,onChange:this.handleChange}),Object(h.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:this.handleAddTask,children:"Add Task"})]}),Object(h.jsxs)("div",{className:"mt-5",children:[Object(h.jsx)("div",{className:"header",children:Object(h.jsx)("div",{className:"mx-auto m-3 ",style:{width:"200px"},children:Object(h.jsx)("h2",{children:"Update Task"})})}),Object(h.jsxs)("div",{className:"p-3",children:[Object(h.jsx)("h4",{children:"Enter Task Title"}),Object(h.jsx)("div",{className:"input-group mb-3 ",children:Object(h.jsx)("input",{type:"text",className:"form-control",placeholder:"What to Update","aria-label":"Recipient's username","aria-describedby":"button-addon2",value:this.state.updateText,onChange:this.whatUpdate})}),Object(h.jsx)("h4",{children:"Enter Task Id"}),Object(h.jsx)("input",{type:"number",className:"form-control ",placeholder:"List Id","aria-label":"Recipient's username","aria-describedby":"button-addon2",value:this.state.id,onChange:this.handleIdChange}),Object(h.jsx)("div",{className:"mx-auto m-3 ",style:{width:"150px"},children:Object(h.jsx)("button",{className:"btn btn-primary",onClick:this.handleUpdateTask,children:" Update Task"})})]})]})]})}}]),n}(a.Component);var w=Object(u.b)((function(t){return{list:t.list}}))(S),E=function(t){Object(o.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(t=e.call.apply(e,[this].concat(s))).handleDeleteTask=function(e){t.props.dispatch(g(e))},t.handleCompleteTask=function(e){t.props.dispatch(C(e))},t}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.dispatch(N())}},{key:"render",value:function(){var t=this,e=this.props.list;return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"header h-5 fixed-top mb-7",children:Object(h.jsx)("div",{className:"mx-auto m-3",style:{width:"280px"},children:Object(h.jsx)("h1",{children:"TODO-LIST"})})}),Object(h.jsxs)("div",{id:"main",className:"b-3 mt-3",children:[Object(h.jsx)("div",{id:"form",className:"w-40 ",children:Object(h.jsx)(w,{})}),Object(h.jsx)("div",{id:"todo-container",className:"w-50 bl-3 mb-4",children:e.map((function(e,n){return Object(h.jsx)("div",{className:"mt-6",children:Object(h.jsx)(j,{list:e,index:n,delete:t.handleDeleteTask,complete:t.handleCompleteTask},e.id)})}))})]})]})}}]),n}(a.Component);var D=Object(u.b)((function(t){return{list:t.list}}))(E),I=n(14),U=n(16),A=n(17),L=n.n(A),P=(n(30),n(2)),J=n(18),_={list:[]};var M=Object(I.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case x:return{list:e.list};case f:return{list:[e.data].concat(Object(J.a)(t.list))};case O:var n=e.text,a=t.list.findIndex((function(t){return t.id===e.id})),s=t.list.map((function(t){return Object(P.a)({},t)}));return s[a].title=n,Object(P.a)(Object(P.a)({},t),{},{list:s});case v:var c=t.list.filter((function(t){return t.id!==e.id}));return Object(P.a)(Object(P.a)({},t),{},{list:c});case y:var i=t.list.findIndex((function(t){return t.id===e.id})),r=t.list.map((function(t){return Object(P.a)({},t)}));return r[i].completed=!0,Object(P.a)(Object(P.a)({},t),{},{list:r});default:return t}}),Object(I.a)(L.a,U.a));i.a.render(Object(h.jsx)(s.a.StrictMode,{children:Object(h.jsx)(u.a,{store:M,children:Object(h.jsx)(D,{})})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.8fcf5392.chunk.js.map