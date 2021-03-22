(this["webpackJsonptask-tracker-react"]=this["webpackJsonptask-tracker-react"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(10),r=a.n(s),i=(a(17),a(3)),d=a(11),o=a(4),j=a(27),l=(a(18),a(0));var b=function(e){var t=e.displayForm,a=e.toggleDisplay;return Object(l.jsxs)("header",{className:"header",children:[Object(l.jsx)("h1",{className:"logo",children:"Task Tracker"}),Object(l.jsx)("button",{className:"btn ".concat(t?"btn-danger":"btn-success"),onClick:a,children:t?"Close":"Add"})]})},u=a(5),m=(a(20),function(e){return new Date(e).toLocaleDateString("en-GB",{weekday:"short",year:"numeric",month:"short",day:"numeric"})}),O={task:"",date:"",reminder:!1};var h=function(e){var t=e.addTask,a=e.displayForm,n=Object(c.useState)(O),s=Object(o.a)(n,2),r=s[0],d=s[1],b=function(e){var t=e.target,a=t.name,c=t.value,n=t.checked;d("reminder"!==a?Object(i.a)(Object(i.a)({},r),{},Object(u.a)({},a,c)):Object(i.a)(Object(i.a)({},r),{},Object(u.a)({},a,n)))};return Object(l.jsx)("div",{className:"add-task",children:a&&Object(l.jsxs)("form",{className:"add-task__form",onSubmit:function(e){if(e.preventDefault(),""!==r.task&&""!==r.date){var a=m(r.date),c={id:Object(j.a)(),task:r.task,date:a,reminder:r.reminder};t(c),d(O)}else alert("Task and Date cannot be empty.")},children:[Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Task"}),Object(l.jsx)("input",{className:"form-control",onChange:b,name:"task",type:"text",placeholder:"Add Task",value:r.task})]}),Object(l.jsxs)("div",{className:"form-group",children:[Object(l.jsx)("label",{children:"Date"}),Object(l.jsx)("input",{className:"form-control",onChange:b,name:"date",type:"date",placeholder:"Add Date & Time",value:r.date})]}),Object(l.jsxs)("div",{className:"form-check",children:[Object(l.jsx)("input",{onChange:b,name:"reminder",id:"form-checkbox",type:"checkbox",checked:r.reminder}),Object(l.jsx)("label",{className:"form-check-label",htmlFor:"form-checkbox",children:"Set reminder"})]}),Object(l.jsx)("button",{className:"btn btn-primary",type:"submit",children:"Save Task"})]})})},f=(a(21),a(2));var k=function(e){var t=e.updateTask,a=e.deleteTask,c=e.tasks;return Object(l.jsx)("div",{className:"task-list",children:0===c.length?Object(l.jsx)("h3",{children:"No Task."}):c.map((function(e){return Object(l.jsxs)("div",{className:"task ".concat(e.reminder?"task-reminder":""),children:[Object(l.jsxs)("div",{className:"task__content",children:[Object(l.jsx)("h3",{children:e.task}),Object(l.jsx)("p",{children:e.date})]}),Object(l.jsxs)("div",{className:"task__action",children:[Object(l.jsx)("button",{className:"btn btn-outline-info",onClick:function(){return t(e.id)},children:e.reminder?Object(l.jsx)(f.a,{}):Object(l.jsx)(f.b,{})}),Object(l.jsx)("button",{className:"btn btn-outline-danger",onClick:function(){return a(e.id)},children:Object(l.jsx)(f.e,{})})]})]},e.id)}))})};a(22);var x=function(){var e=new Date;return e=e.getFullYear(),Object(l.jsx)("footer",{className:"footer",children:Object(l.jsxs)("p",{children:["Copyright \xa9 ",e]})})};a(23);var p=function(e){var t=e.reminders,a=e.closeToast;return Object(l.jsxs)("div",{className:"toast",children:[Object(l.jsxs)("div",{className:"toast__header",children:[Object(l.jsxs)("div",{className:"toast__title",children:[Object(l.jsx)(f.c,{})," ",Object(l.jsx)("strong",{children:"Reminder"})]}),Object(l.jsx)("button",{className:"btn btn-link toast__btn",type:"button",onClick:a,children:Object(l.jsx)(f.d,{})})]}),Object(l.jsx)("div",{className:"toast__body",children:t.map((function(e){return Object(l.jsxs)("p",{children:["- ",e.task]},e.id)}))})]})},v=a(9),N=a.n(v),g=function(e){return e.slice().sort((function(e,t){return N()(e.date).diff(N()(t.date))}))},y=(a(25),m(new Date)),T=[{id:Object(j.a)(),task:"Learn some new things",date:y,reminder:!1},{id:Object(j.a)(),task:"Sleep early",date:y,reminder:!0},{id:Object(j.a)(),task:"Go out for exercise",date:y,reminder:!1}];var S=function(){var e=JSON.parse(localStorage.getItem("tasks"))||T,t=Object(c.useState)(e),a=Object(o.a)(t,2),n=a[0],s=a[1],r=Object(c.useState)(!1),j=Object(o.a)(r,2),u=j[0],m=j[1],O=Object(c.useState)([]),f=Object(o.a)(O,2),v=f[0],N=f[1],S=Object(c.useState)(!1),_=Object(o.a)(S,2),D=_[0],C=_[1];return Object(c.useEffect)((function(){var e=JSON.stringify(n);localStorage.setItem("tasks",e)}),[n]),Object(c.useEffect)((function(){var e=n.filter((function(e){return e.date===y&&!0===e.reminder}));e.length>0&&(N(e),C(!0))}),[]),Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(b,{displayForm:u,toggleDisplay:function(){m(!u)}}),Object(l.jsx)(h,{addTask:function(e){s(g([].concat(Object(d.a)(n),[e])))},displayForm:u}),Object(l.jsx)(k,{updateTask:function(e){var t=n.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t}));s(t)},deleteTask:function(e){var t=n.filter((function(t){return t.id!==e}));s(t)},tasks:n}),Object(l.jsx)(x,{}),D&&Object(l.jsx)(p,{reminders:v,closeToast:function(){C(!1)}})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(S,{})}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.aae69f2b.chunk.js.map