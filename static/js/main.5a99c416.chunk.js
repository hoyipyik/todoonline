(this["webpackJsonpsimple-todo"]=this["webpackJsonpsimple-todo"]||[]).push([[0],{49:function(t,e,n){},77:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(13),r=n.n(o),i=(n(49),n(18)),s=n(22),l=n(23),d=n(28),u=n(26),h=n(94),j=n(3),b=function(t){return Object(j.jsx)(h.a,{container:!0,spacing:3,children:Object(j.jsx)(h.a,{item:!0,xs:12,children:Object(j.jsxs)("form",{children:[Object(j.jsx)("label",{htmlFor:"title",children:Object(j.jsx)("h3",{children:"What's Your Plan Today"})}),Object(j.jsx)("input",{type:"text",onChange:function(e){return t.inputHandler(e)},value:t.title}),Object(j.jsx)("input",{type:"button",value:"Add",onClick:t.buttonHandler})]})})})},p=n(40),f=n.n(p).a.create({baseURL:"https://chatapp-hyy-default-rtdb.asia-southeast1.firebasedatabase.app/"}),O=n(95),g=n(41),v=n.n(g);function x(t){return Object(j.jsx)("div",{children:Object(j.jsxs)(h.a,{container:!0,spacing:3,children:[Object(j.jsxs)(h.a,{item:!0,xs:10,children:[Object(j.jsx)(O.a,{onClick:function(){return t.checkboxHandler(t.id)},color:"primary",checked:t.checked}),t.title]}),Object(j.jsx)(h.a,{item:!0,xs:2,children:Object(j.jsx)(v.a,{onClick:function(){return t.deleteButtonHandler(t.id)},style:{marginLeft:"20%"}})})]})})}var k=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).checkboxHandler=function(e){var n=Object(i.a)(t.props.data);console.log("checkbox debug",n[e]),n[e].checked=!n[e].checked,f.post("/data.json",n).then((function(t){console.log("Post",t)})).catch((function(t){return console.log(t)})),t.props.updateData(n)},t.deleteButtonHandler=function(e){var n=Object(i.a)(t.props.data);n.splice(e,1),n.map((function(t,e){return t.id=e})),t.props.updateData(n),f.post("/data.json",n).then((function(t){console.log("Post",t)})).catch((function(t){return console.log(t)}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t,e=this,n=this.props.data;return t=n.map((function(t,n){var a=t.checked,c=t.title;return Object(j.jsx)(x,{id:t.id,checked:a,checkboxHandler:e.checkboxHandler,deleteButtonHandler:e.deleteButtonHandler,title:c},t.id)})),console.log("[List.js]: Full data",n),Object(j.jsx)("div",{children:t})}}]),n}(a.PureComponent),m=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={title:"",checked:!1,data:[]},t.inputHandler=function(e){var n=e.target.value;t.setState({title:n})},t.buttonHandler=function(){var e={title:t.state.title,checked:t.state.checked,id:t.state.data.length},n=[].concat(Object(i.a)(t.state.data),[e]);t.setState({data:n,title:""}),f.post("/data.json",n).then((function(t){console.log("Post",t)})).catch((function(t){return console.log(t)}))},t.updateData=function(e){t.setState({data:e})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;f.get("/data.json").then((function(e){if(console.log("Mount data",e),null!==e.data){var n=Object.values(e.data.valueOf());console.log(n[n.length-1]),t.setState({data:n[n.length-1]})}})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(b,{title:this.state.title,buttonHandler:this.buttonHandler,inputHandler:this.inputHandler}),Object(j.jsx)("br",{}),Object(j.jsx)(k,{data:this.state.data,updateData:this.updateData})]})}}]),n}(a.PureComponent);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,96)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(m,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)})),y()}},[[77,1,2]]]);
//# sourceMappingURL=main.5a99c416.chunk.js.map