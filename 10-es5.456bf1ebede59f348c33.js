function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _inherits(n,l){if("function"!=typeof l&&null!==l)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(l&&l.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),l&&_setPrototypeOf(n,l)}function _setPrototypeOf(n,l){return(_setPrototypeOf=Object.setPrototypeOf||function(n,l){return n.__proto__=l,n})(n,l)}function _createSuper(n){return function(){var l,t=_getPrototypeOf(n);if(_isNativeReflectConstruct()){var e=_getPrototypeOf(this).constructor;l=Reflect.construct(t,arguments,e)}else l=t.apply(this,arguments);return _possibleConstructorReturn(this,l)}}function _possibleConstructorReturn(n,l){return!l||"object"!=typeof l&&"function"!=typeof l?_assertThisInitialized(n):l}function _assertThisInitialized(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}function _getPrototypeOf(n){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5VnZ":function(n,l,t){"use strict";t.r(l);var e,u,o=t("8Y7J"),c=function n(){_classCallCheck(this,n)},r=t("pMnS"),b=t("SVse"),i=t("s7LF"),s=t("mrSG"),a=t("CoC1"),p=t("8nyR"),f=t("e1JD"),g=[{path:"count.countSub.val",existingEngine:sessionStorage}],d=(e=function(n){_inherits(t,n);var l=_createSuper(t);function t(){return _classCallCheck(this,t),l.apply(this,arguments)}return _createClass(t,[{key:"setDebounceSubValue",value:function(n){this.ctx.setState({val:n})}}]),t}(p.c),Object(s.a)([Object(a.c)(),Object(a.b)(),Object(s.c)(0,Object(a.e)("value")),Object(s.c)(0,Object(a.d)("val")),Object(s.b)("design:type",Function),Object(s.b)("design:paramtypes",[Number]),Object(s.b)("design:returntype",void 0)],e.prototype,"setDebounceSubValue",null),e=Object(s.a)([Object(a.f)(g),Object(a.g)(),Object(f.e)({name:"countSub",defaults:{val:100}})],e)),m=t("HDdC"),y=t("lJxs"),O=new f.g("count"),h=(u=function(n){_inherits(t,n);var l=_createSuper(t);function t(){return _classCallCheck(this,t),l.apply(this,arguments)}return _createClass(t,[{key:"increment",value:function(){this.ctx.setState((function(n){return Object.assign(Object.assign({},n),{val:n.val+1})}))}},{key:"countSubIncrement",value:function(){this.ctx.setState((function(n){return Object.assign(Object.assign({},n),{countSub:{val:n.countSub.val+1}})}))}},{key:"decrement",value:function(){this.setState((function(n){return Object.assign(Object.assign({},n),{val:n.val-1})}))}},{key:"setDebounceValue",value:function(n){this.ctx.setState((function(l){return Object.assign(Object.assign({},l),{val:parseFloat(n)||0})}))}},{key:"values$",get:function(){return this.state$.pipe(Object(y.a)((function(n){return n.countSub})))}}]),t}(p.c),Object(s.a)([Object(a.a)(),Object(s.b)("design:type",m.a),Object(s.b)("design:paramtypes",[])],u.prototype,"values$",null),Object(s.a)([Object(a.b)(),Object(s.b)("design:type",Function),Object(s.b)("design:paramtypes",[]),Object(s.b)("design:returntype",void 0)],u.prototype,"increment",null),Object(s.a)([Object(a.b)(),Object(s.b)("design:type",Function),Object(s.b)("design:paramtypes",[]),Object(s.b)("design:returntype",void 0)],u.prototype,"countSubIncrement",null),Object(s.a)([Object(a.b)(),Object(s.b)("design:type",Function),Object(s.b)("design:paramtypes",[]),Object(s.b)("design:returntype",void 0)],u.prototype,"decrement",null),Object(s.a)([Object(a.c)(),Object(a.b)(),Object(s.c)(0,Object(a.e)("val")),Object(s.b)("design:type",Function),Object(s.b)("design:paramtypes",[Object]),Object(s.b)("design:returntype",void 0)],u.prototype,"setDebounceValue",null),u=Object(s.a)([Object(a.g)(),Object(f.e)({name:O,defaults:{val:0},children:[d]})],u)),j=function n(l,t){_classCallCheck(this,n),this.counter=l,this.subCount=t},v=o.rb({encapsulation:2,styles:[],data:{}});function C(n){return o.Mb(2,[(n()(),o.tb(0,0,null,null,1,"a",[["href","https://stackblitz.com/github/ngxs-labs/data?file=integration%2Fapp%2Fexamples%2Fcount%2Fcount.state.ts"],["target","_blank"]],null,null,null,null,null)),(n()(),o.tb(1,0,null,null,0,"img",[["alt","stackblitz"],["class","stackblitz"],["src","https://habrastorage.org/webt/ma/me/jm/mamejmzzxqu5pfn6rfieay6oisi.png"]],null,null,null,null,null)),(n()(),o.tb(2,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),o.Kb(-1,null,["CountState"])),(n()(),o.Kb(-1,null,[" PS: CountSubState will be persistence in sessionStorage "])),(n()(),o.tb(5,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.tb(6,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.tb(7,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(n()(),o.Kb(-1,null,["Selection:"])),(n()(),o.tb(9,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.Kb(10,null,[" counter.state$ = ","\n"])),o.Gb(131072,b.b,[o.i]),o.Gb(0,b.f,[]),(n()(),o.tb(13,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.tb(14,0,null,null,3,"span",[],null,null,null,null,null)),(n()(),o.Kb(15,null,[" counter.values$ = "," "])),o.Gb(131072,b.b,[o.i]),o.Gb(0,b.f,[]),(n()(),o.tb(18,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.tb(19,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.tb(20,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.tb(21,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(n()(),o.Kb(-1,null,["Actions:"])),(n()(),o.tb(23,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.counter.increment()&&e),e}),null,null)),(n()(),o.Kb(-1,null,[" increment\n"])),(n()(),o.tb(25,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.counter.countSubIncrement()&&e),e}),null,null)),(n()(),o.Kb(-1,null,[" countSubIncrement\n"])),(n()(),o.tb(27,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.counter.decrement()&&e),e}),null,null)),(n()(),o.Kb(-1,null,["decrement"])),(n()(),o.tb(29,0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.counter.reset()&&e),e}),null,null)),(n()(),o.Kb(-1,null,["reset"])),(n()(),o.tb(31,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.tb(32,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.tb(33,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(n()(),o.Kb(-1,null,["counter model:"])),(n()(),o.tb(35,0,null,null,6,"input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0,u=n.component;return"input"===l&&(e=!1!==o.Eb(n,36)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==o.Eb(n,36).onTouched()&&e),"compositionstart"===l&&(e=!1!==o.Eb(n,36)._compositionStart()&&e),"compositionend"===l&&(e=!1!==o.Eb(n,36)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==u.counter.setDebounceValue(t)&&e),e}),null,null)),o.sb(36,16384,null,0,i.c,[o.D,o.l,[2,i.a]],null,null),o.Hb(1024,null,i.h,(function(n){return[n]}),[i.c]),o.sb(38,671744,null,0,i.m,[[8,null],[8,null],[8,null],[6,i.h]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(131072,b.b,[o.i]),o.Hb(2048,null,i.i,null,[i.m]),o.sb(41,16384,null,0,i.j,[[4,i.i]],null,null),(n()(),o.Kb(-1,null,[" (delay 300ms) "])),(n()(),o.tb(43,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.tb(44,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),o.tb(45,0,null,null,1,"b",[["class","title"]],null,null,null,null,null)),(n()(),o.Kb(-1,null,["subCount model:"])),(n()(),o.tb(47,0,null,null,6,"input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0,u=n.component;return"input"===l&&(e=!1!==o.Eb(n,48)._handleInput(t.target.value)&&e),"blur"===l&&(e=!1!==o.Eb(n,48).onTouched()&&e),"compositionstart"===l&&(e=!1!==o.Eb(n,48)._compositionStart()&&e),"compositionend"===l&&(e=!1!==o.Eb(n,48)._compositionEnd(t.target.value)&&e),"ngModelChange"===l&&(e=!1!==u.subCount.setDebounceSubValue(t)&&e),e}),null,null)),o.sb(48,16384,null,0,i.c,[o.D,o.l,[2,i.a]],null,null),o.Hb(1024,null,i.h,(function(n){return[n]}),[i.c]),o.sb(50,671744,null,0,i.m,[[8,null],[8,null],[8,null],[6,i.h]],{model:[0,"model"]},{update:"ngModelChange"}),o.Gb(131072,b.b,[o.i]),o.Hb(2048,null,i.i,null,[i.m]),o.sb(53,16384,null,0,i.j,[[4,i.i]],null,null),(n()(),o.Kb(-1,null,[" (delay 300ms)\n"]))],(function(n,l){var t=l.component;n(l,38,0,o.Lb(l,38,0,o.Eb(l,39).transform(t.counter.state$)).val),n(l,50,0,o.Lb(l,50,0,o.Eb(l,51).transform(t.subCount.state$)).val)}),(function(n,l){var t=l.component;n(l,10,0,o.Lb(l,10,0,o.Eb(l,12).transform(o.Lb(l,10,0,o.Eb(l,11).transform(t.counter.state$))))),n(l,15,0,o.Lb(l,15,0,o.Eb(l,17).transform(o.Lb(l,15,0,o.Eb(l,16).transform(t.counter.values$))))),n(l,35,0,o.Eb(l,41).ngClassUntouched,o.Eb(l,41).ngClassTouched,o.Eb(l,41).ngClassPristine,o.Eb(l,41).ngClassDirty,o.Eb(l,41).ngClassValid,o.Eb(l,41).ngClassInvalid,o.Eb(l,41).ngClassPending),n(l,47,0,o.Eb(l,53).ngClassUntouched,o.Eb(l,53).ngClassTouched,o.Eb(l,53).ngClassPristine,o.Eb(l,53).ngClassDirty,o.Eb(l,53).ngClassValid,o.Eb(l,53).ngClassInvalid,o.Eb(l,53).ngClassPending)}))}var _=o.pb("count",j,(function(n){return o.Mb(0,[(n()(),o.tb(0,0,null,null,1,"count",[],null,null,null,C,v)),o.sb(1,49152,null,0,j,[h,d],null,null)],null,null)}),{},{},[]),E=t("Mrqg"),S=t("lLvT"),k=t("iInd");t.d(l,"CountModuleNgFactory",(function(){return P}));var P=o.qb(c,[],(function(n){return o.Bb([o.Cb(512,o.k,o.bb,[[8,[r.a,_]],[3,o.k],o.w]),o.Cb(4608,b.m,b.l,[o.t,[2,b.v]]),o.Cb(4608,i.q,i.q,[]),o.Cb(4608,f.D,f.D,[[3,f.D],[2,f.c]]),o.Cb(4608,h,h,[]),o.Cb(4608,d,d,[]),o.Cb(1073742336,b.c,b.c,[]),o.Cb(1073742336,i.p,i.p,[]),o.Cb(1073742336,i.g,i.g,[]),o.Cb(512,f.y,f.y,[o.q,f.v,[3,f.y],f.n,f.z,f.B,[2,E.a]]),o.Cb(1024,f.s,(function(){return[[h,d]]}),[]),o.Cb(1073742336,f.p,f.p,[f.h,f.C,f.y,[2,f.s],f.o]),o.Cb(1073742336,S.a,S.a,[]),o.Cb(1073742336,k.m,k.m,[[2,k.r],[2,k.k]]),o.Cb(1073742336,c,c,[]),o.Cb(1024,k.i,(function(){return[[{path:"",component:j}]]}),[])])}))}}]);