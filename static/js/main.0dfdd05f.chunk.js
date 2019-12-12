(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(9),r=n.n(l),c=(n(15),n(16),n(7)),i=n(1),s=n(2),d=n(4),u=n(3),m=n(5),h=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={newTodo:""},n.enterValue=function(e){"Enter"===e.key&&""!==e.target.value&&(n.props.handleTodo(e.target.value),n.setState({newTodo:""}))},n.handleBlur=function(e){""!==e.target.value&&(n.props.handleTodo(e.target.value),n.setState({newTodo:""}))},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:this.state.newTodo,onChange:function(t){return e.setState({newTodo:t.target.value})},onKeyDown:this.enterValue,onBlur:this.handleBlur})))}}]),t}(o.a.Component),f=n(6),p=function(e){var t=e.todo,n=e.item,a=e.id,l=e.changeCompleted,r=e.todoState;return o.a.createElement("li",{className:"",key:+new Date},o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",className:"toggle",id:"todo-".concat(a),defaultChecked:n.isCompleted,onClick:function(){return l(t.map(function(e){return n===e?Object(f.a)({},e,{isCompleted:!n.isCompleted}):e}))}}),o.a.createElement("p",{htmlFor:"todo-".concat(a),className:"todo__item\n              ".concat(n.isCompleted?"label--completed":"")},n.title),o.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return l(r.filter(function(e){return e!==n}))}})))},C=function(e){var t=e.todo,n=e.allCompleted,a=e.todoState,l=a.every(function(e){return e.isCompleted});return o.a.createElement("section",{className:"main"},o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:l,onChange:function(){var e=t.map(function(e){return Object(f.a)({},e,{isCompleted:!l})});n(e)}}),o.a.createElement("label",{htmlFor:"toggle-all",className:"todo__label\n          ".concat(t.length?"show--toggle":"")},"Mark all as complete"),o.a.createElement("ul",{className:"todo-list"},t.map(function(e,l){return o.a.createElement(p,{item:e,id:l+1,todoState:a,todo:t,changeCompleted:n})})))},b=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).filterType=["All","Active","Completed"],n.state={selectFilter:n.filterType[0]},n.handleClick=function(e){n.setState({selectFilter:e.target.textContent}),n.props.handleFilter(e.target.textContent)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.selectFilter;return this.filterType.map(function(n){return o.a.createElement("li",{key:n},o.a.createElement("a",{href:"#/",className:t===n?"selected":"",onClick:e.handleClick},n))})}}]),t}(o.a.Component),g=function(e){var t=e.todo,n=e.handleTodo,a=e.setFilter;return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},"".concat(t.length," items left")),o.a.createElement("ul",{className:"filters"},o.a.createElement(b,{todo:t,handleFilter:a})),o.a.createElement("button",{type:"button",onClick:function(){return n(t.filter(function(e){return!e.isCompleted}))},className:"clear-completed\n        ".concat(t.some(function(e){return e.isCompleted})?"show__clear-button":"")},"Clear completed"))},v=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(n=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={todo:[],filter:"",enterTodo:!1},n.handleAddTodo=function(e){return n.setState(function(t){return{todo:[].concat(Object(c.a)(t.todo),[{title:e,isCompleted:!1}]),enterTodo:!0}})},n.handleChangeTodo=function(e){return n.setState({todo:e})},n.handleSetFilter=function(e){return n.setState({filter:e})},n.filterTodo=function(){switch(n.state.filter){case"Active":return n.state.todo.filter(function(e){return!e.isCompleted});case"Completed":return n.state.todo.filter(function(e){return e.isCompleted});default:return Object(c.a)(n.state.todo)}},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.filterTodo(),t=this.state,n=t.enterTodo,a=t.todo;return o.a.createElement("section",{className:"todoapp"},o.a.createElement(h,{handleTodo:this.handleAddTodo}),o.a.createElement(C,{todo:e,todoState:a,allCompleted:this.handleChangeTodo}),n&&a.length>0?o.a.createElement(g,{todo:e,handleTodo:this.handleChangeTodo,setFilter:this.handleSetFilter}):"")}}]),t}(o.a.Component);r.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.0dfdd05f.chunk.js.map