(function(e){function t(t){for(var n,u,d=t[0],i=t[1],a=t[2],s=0,f=[];s<d.length;s++)u=d[s],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,a||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,d=1;d<o.length;d++){var i=o[d];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=o[0]))}return e}var n={},r={app:0},c=[];function u(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.m=e,u.c=n,u.d=function(e,t,o){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(o,n,function(t){return e[t]}.bind(null,n));return o},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/";var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var a=0;a<d.length;a++)t(d[a]);var l=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"265e":function(e,t,o){"use strict";o("4e19")},"4e19":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("7a23");function r(e,t,o,r,c,u){var d=Object(n["j"])("TodoList");return Object(n["f"])(),Object(n["c"])(d)}function c(e,t,o,r,c,u){var d=Object(n["j"])("CreateTodo"),i=Object(n["j"])("Todo");return Object(n["f"])(),Object(n["c"])(n["a"],null,[Object(n["e"])(d,{onNewTodo:t[1]||(t[1]=function(e){return u.addTodo(e)})}),(Object(n["f"])(!0),Object(n["c"])(n["a"],null,Object(n["i"])(c.todos,(function(e,t){return Object(n["f"])(),Object(n["c"])(i,{value:e.data,completed:e.completed,key:t,onOnDelete:function(e){return u.removeTodo(t)},onOnChecked:function(e){return u.setIsComplete(t)}},null,8,["value","completed","onOnDelete","onOnChecked"])})),128))],64)}o("a434");function u(e,t,o,r,c,u){return Object(n["f"])(),Object(n["c"])("form",{onSubmit:t[2]||(t[2]=Object(n["n"])((function(e){return u.addTodo()}),["prevent"]))},[Object(n["m"])(Object(n["e"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.newTodo=e}),type:"text",placeholder:"Type something here..."},null,512),[[n["l"],c.newTodo]])],32)}var d={data:function(){return{newTodo:""}},methods:{addTodo:function(){this.newTodo.length&&this.$emit("new-todo",this.newTodo),this.newTodo="",document.querySelector("input").blur()}}};o("9ad0");d.render=u;var i=d,a=Object(n["o"])("data-v-69bfba0a");Object(n["h"])("data-v-69bfba0a");var l={class:"todo-card"},s={class:"card-action"};Object(n["g"])();var f=a((function(e,t,o,r,c,u){return Object(n["f"])(),Object(n["c"])("div",l,[Object(n["e"])("div",{class:["card-text",{completed:o.completed}]},[Object(n["e"])("input",{type:"checkbox",checked:o.completed,onClick:t[1]||(t[1]=function(t){return e.$emit("on-checked")})},null,8,["checked"]),Object(n["d"])(" "+Object(n["k"])(o.value),1)],2),Object(n["e"])("div",s,[Object(n["e"])("button",{onClick:t[2]||(t[2]=function(t){return e.$emit("on-delete")})}," Hapus ")])])})),p={props:{value:String,completed:Boolean}};o("5fbb");p.render=f,p.__scopeId="data-v-69bfba0a";var b=p,O="todo-vue",j=window.localStorage,h={data:function(){return{todos:JSON.parse(j.getItem(O))||[]}},methods:{addTodo:function(e){this.todos.push({data:e,completed:!1}),j.setItem(O,JSON.stringify(this.todos))},removeTodo:function(e){this.todos.splice(e,1),j.setItem(O,JSON.stringify(this.todos))},setIsComplete:function(e){this.todos[e]["completed"]=!this.todos[e]["completed"],j.setItem(O,JSON.stringify(this.todos))}},components:{CreateTodo:i,Todo:b}};h.render=c;var v=h,m={name:"App",components:{TodoList:v}};o("265e");m.render=r;var y=m;Object(n["b"])(y).mount("#app")},"5fbb":function(e,t,o){"use strict";o("e431")},"9ad0":function(e,t,o){"use strict";o("f841")},e431:function(e,t,o){},f841:function(e,t,o){}});
//# sourceMappingURL=app.a0e78053.js.map