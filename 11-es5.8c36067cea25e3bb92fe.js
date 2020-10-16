!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var c=e[n];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(t,c.key,c)}}function n(t,n,c){return n&&e(t.prototype,n),c&&e(t,c),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}function r(t,e){return(r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,c=b(t);if(e){var r=b(this).constructor;n=Reflect.construct(c,arguments,r)}else n=c.apply(this,arguments);return o(this,n)}}function o(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function b(t){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{iBbY:function(e,r,o){"use strict";o.r(r),o.d(r,"CountModule",(function(){return C}));var b,i,a,s,l=o("SVse"),p=o("s7LF"),f=o("iInd"),j=o("e1JD"),O=o("mrSG"),y=o("zPnM"),d=o("PZpb"),g=o("8Y7J"),h=[{path:"count.countSub.val",existingEngine:sessionStorage}],v=((b=function(e){c(o,e);var r=u(o);function o(){return t(this,o),r.apply(this,arguments)}return n(o,[{key:"setDebounceSubValue",value:function(t){this.ctx.setState({val:t})}}]),o}(d.c)).\u0275fac=function(t){return x(t||b)},b.\u0275prov=g.Mb({token:b,factory:b.\u0275fac}),Object(O.a)([Object(y.c)(),Object(y.b)(),Object(O.c)(0,Object(y.e)("value")),Object(O.c)(0,Object(y.d)("val")),Object(O.b)("design:type",Function),Object(O.b)("design:paramtypes",[Number]),Object(O.b)("design:returntype",void 0)],b.prototype,"setDebounceSubValue",null),b=Object(O.a)([Object(y.f)(h),Object(y.g)(),Object(j.e)({name:"countSub",defaults:{val:100}})],b)),x=g.Yb(v),m=o("HDdC"),S=o("lJxs"),k=new j.f("count"),V=((i=function(e){c(o,e);var r=u(o);function o(){return t(this,o),r.apply(this,arguments)}return n(o,[{key:"increment",value:function(){this.ctx.setState((function(t){return Object.assign(Object.assign({},t),{val:t.val+1})}))}},{key:"countSubIncrement",value:function(){this.ctx.setState((function(t){return Object.assign(Object.assign({},t),{countSub:{val:t.countSub.val+1}})}))}},{key:"decrement",value:function(){this.setState((function(t){return Object.assign(Object.assign({},t),{val:t.val-1})}))}},{key:"setDebounceValue",value:function(t){this.ctx.setState((function(e){return Object.assign(Object.assign({},e),{val:parseFloat(t)||0})}))}},{key:"values$",get:function(){return this.state$.pipe(Object(S.a)((function(t){return t.countSub})))}}]),o}(d.c)).\u0275fac=function(t){return w(t||i)},i.\u0275prov=g.Mb({token:i,factory:i.\u0275fac}),Object(O.a)([Object(y.a)(),Object(O.b)("design:type",m.a),Object(O.b)("design:paramtypes",[])],i.prototype,"values$",null),Object(O.a)([Object(y.b)(),Object(O.b)("design:type",Function),Object(O.b)("design:paramtypes",[]),Object(O.b)("design:returntype",void 0)],i.prototype,"increment",null),Object(O.a)([Object(y.b)(),Object(O.b)("design:type",Function),Object(O.b)("design:paramtypes",[]),Object(O.b)("design:returntype",void 0)],i.prototype,"countSubIncrement",null),Object(O.a)([Object(y.b)(),Object(O.b)("design:type",Function),Object(O.b)("design:paramtypes",[]),Object(O.b)("design:returntype",void 0)],i.prototype,"decrement",null),Object(O.a)([Object(y.c)(),Object(y.b)(),Object(O.c)(0,Object(y.e)("val")),Object(O.b)("design:type",Function),Object(O.b)("design:paramtypes",[Object]),Object(O.b)("design:returntype",void 0)],i.prototype,"setDebounceValue",null),i=Object(O.a)([Object(y.g)(),Object(j.e)({name:k,defaults:{val:0},children:[v]})],i)),w=g.Yb(V),R=((s=function e(n,c){t(this,e),this.counter=n,this.subCount=c}).\u0275fac=function(t){return new(t||s)(g.Qb(V),g.Qb(v))},s.\u0275cmp=g.Kb({type:s,selectors:[["count"]],decls:64,vars:16,consts:[["href","https://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Fcount%2Fcount.state.ts","target","_blank"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png","alt","stackblitz",1,"stackblitz"],[1,"title"],[3,"click"],["type","text",3,"ngModel","ngModelChange"]],template:function(t,e){var n,c;1&t&&(g.Wb(0,"a",0),g.xc(1,"\n    "),g.Rb(2,"img",1),g.xc(3,"\n"),g.Vb(),g.xc(4,"\n\n"),g.Wb(5,"h3"),g.xc(6,"CountState"),g.Vb(),g.xc(7,"\n\nPS: CountSubState will be persistence in sessionStorage "),g.Rb(8,"br"),g.xc(9,"\n\n"),g.Rb(10,"br"),g.Wb(11,"b",2),g.xc(12,"Selection:"),g.Vb(),g.xc(13,"\n"),g.Rb(14,"br"),g.xc(15),g.gc(16,"json"),g.gc(17,"async"),g.Rb(18,"br"),g.xc(19,"\n\n"),g.Wb(20,"span"),g.xc(21),g.gc(22,"json"),g.gc(23,"async"),g.Vb(),g.xc(24,"\n\n"),g.Rb(25,"br"),g.Rb(26,"br"),g.xc(27,"\n\n"),g.Rb(28,"br"),g.Wb(29,"b",2),g.xc(30,"Actions:"),g.Vb(),g.xc(31,"\n\n"),g.Wb(32,"button",3),g.dc("click",(function(){return e.counter.increment()})),g.xc(33,"increment"),g.Vb(),g.xc(34,"\n"),g.Wb(35,"button",3),g.dc("click",(function(){return e.counter.countSubIncrement()})),g.xc(36,"countSubIncrement"),g.Vb(),g.xc(37,"\n"),g.Wb(38,"button",3),g.dc("click",(function(){return e.counter.decrement()})),g.xc(39,"decrement"),g.Vb(),g.xc(40,"\n"),g.Wb(41,"button",3),g.dc("click",(function(){return e.counter.reset()})),g.xc(42,"reset"),g.Vb(),g.xc(43,"\n\n"),g.Rb(44,"br"),g.xc(45,"\n"),g.Rb(46,"br"),g.xc(47,"\n\n"),g.Wb(48,"b",2),g.xc(49,"counter model:"),g.Vb(),g.xc(50,"\n"),g.Wb(51,"input",4),g.dc("ngModelChange",(function(t){return e.counter.setDebounceValue(t)})),g.gc(52,"async"),g.Vb(),g.xc(53,"\n\n(delay 300ms)\n\n"),g.Rb(54,"br"),g.xc(55,"\n"),g.Rb(56,"br"),g.xc(57,"\n\n"),g.Wb(58,"b",2),g.xc(59,"subCount model:"),g.Vb(),g.xc(60,"\n"),g.Wb(61,"input",4),g.dc("ngModelChange",(function(t){return e.subCount.setDebounceSubValue(t)})),g.gc(62,"async"),g.Vb(),g.xc(63,"\n\n(delay 300ms)\n")),2&t&&(g.Gb(15),g.zc("\n\ncounter.state$ = ",g.hc(16,4,g.hc(17,6,e.counter.state$)),"\n"),g.Gb(6),g.zc(" counter.values$ = ",g.hc(22,8,g.hc(23,10,e.counter.values$))," "),g.Gb(30),g.kc("ngModel",null==(n=g.hc(52,12,e.counter.state$))?null:n.val),g.Gb(10),g.kc("ngModel",null==(c=g.hc(62,14,e.subCount.state$))?null:c.val))},directives:[p.a,p.g,p.j],pipes:[l.f,l.b],encapsulation:2,changeDetection:0}),s),C=((a=function e(){t(this,e)}).\u0275mod=g.Ob({type:a}),a.\u0275inj=g.Nb({factory:function(t){return new(t||a)},imports:[[l.c,p.e,j.c.forFeature([V,v]),f.b.forChild([{path:"",component:R}])]]}),a)}}])}();