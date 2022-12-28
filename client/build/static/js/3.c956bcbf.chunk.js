/*! For license information please see 3.c956bcbf.chunk.js.LICENSE.txt */
(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],[,,,,,,,,,,,,,,,,function(t,e,r){"use strict";function n(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(f){return void r(f)}u.done?e(c):Promise.resolve(c).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function u(t){n(a,o,i,u,c,"next",t)}function c(t){n(a,o,i,u,c,"throw",t)}u(void 0)}))}}r.d(e,"a",(function(){return o}))},function(t,e,r){t.exports=r(18)},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(V){c=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),a=new R(n||[]);return i._invoke=function(t,e,r){var n=l;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===p)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===p)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(V){return{type:"throw",arg:V}}}t.wrap=f;var l="suspendedStart",h="suspendedYield",d="executing",v="completed",p={};function y(){}function g(){}function b(){}var w={};c(w,i,(function(){return this}));var m=Object.getPrototypeOf,O=m&&m(m(S([])));O&&O!==r&&n.call(O,i)&&(w=O);var j=b.prototype=y.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,i,a,u){var c=s(t[o],t,i);if("throw"!==c.type){var f=c.arg,l=f.value;return l&&"object"===typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,L(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function S(t){if(t){var r=t[i];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=b,c(j,"constructor",b),c(b,"constructor",g),g.displayName=c(b,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,u,"GeneratorFunction")),t.prototype=Object.create(j),t},t.awrap=function(t){return{__await:t}},E(x.prototype),c(x.prototype,a,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(j),c(j,u,"Generator"),c(j,i,(function(){return this})),c(j,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=S,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(P),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),f=n.call(a,"finallyLoc");if(c&&f){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!f)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:S(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=n}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){"use strict";r.d(e,"a",(function(){return Q}));var n=r(1);function o(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(e){i(e)}}function u(t){try{c(n.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}c((n=n.apply(t,e||[])).next())}))}function i(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(u){i=[6,u],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}}var a,u=function(){},c=u(),f=Object,s=function(t){return t===c},l=function(t){return"function"==typeof t},h=function(t,e){return f.assign({},t,e)},d="undefined",v=function(){return typeof window!=d},p=new WeakMap,y=0,g=function t(e){var r,n,o=typeof e,i=e&&e.constructor,a=i==Date;if(f(e)!==e||a||i==RegExp)r=a?e.toJSON():"symbol"==o?e.toString():"string"==o?JSON.stringify(e):""+e;else{if(r=p.get(e))return r;if(r=++y+"~",p.set(e,r),i==Array){for(r="@",n=0;n<e.length;n++)r+=t(e[n])+",";p.set(e,r)}if(i==f){r="#";for(var u=f.keys(e).sort();!s(n=u.pop());)s(e[n])||(r+=n+":"+t(e[n])+",");p.set(e,r)}}return r},b=!0,w=v(),m=typeof document!=d,O=w&&window.addEventListener?window.addEventListener.bind(window):u,j=m?document.addEventListener.bind(document):u,E=w&&window.removeEventListener?window.removeEventListener.bind(window):u,x=m?document.removeEventListener.bind(document):u,L={isOnline:function(){return b},isVisible:function(){var t=m&&document.visibilityState;return s(t)||"hidden"!==t}},k={initFocus:function(t){return j("visibilitychange",t),O("focus",t),function(){x("visibilitychange",t),E("focus",t)}},initReconnect:function(t){var e=function(){b=!0,t()},r=function(){b=!1};return O("online",e),O("offline",r),function(){E("online",e),E("offline",r)}}},P=!v()||"Deno"in window,R=function(t){return v()&&typeof window.requestAnimationFrame!=d?window.requestAnimationFrame(t):setTimeout(t,1)},S=P?n.useEffect:n.useLayoutEffect,T="undefined"!==typeof navigator&&navigator.connection,V=!P&&T&&(["slow-2g","2g"].includes(T.effectiveType)||T.saveData),_=function(t){if(l(t))try{t=t()}catch(r){t=""}var e=[].concat(t);return[t="string"==typeof t?t:(Array.isArray(t)?t.length:t)?g(t):"",e,t?"$swr$"+t:""]},D=new WeakMap,I=function(t,e,r,n,o,i,a){void 0===a&&(a=!0);var u=D.get(t),c=u[0],f=u[1],s=u[3],l=c[e],h=f[e];if(a&&h)for(var d=0;d<h.length;++d)h[d](r,n,o);return i&&(delete s[e],l&&l[0])?l[0](2).then((function(){return t.get(e)})):t.get(e)},F=0,C=function(){return++F},N=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o(void 0,void 0,void 0,(function(){var e,r,n,o,a,u,f,d,v,p,y,g,b,w,m,O,j,E,x,L;return i(this,(function(i){switch(i.label){case 0:if(e=t[0],r=t[1],n=t[2],o=t[3],u=!1!==(a="boolean"===typeof o?{revalidate:o}:o||{}).populateCache,f=!1!==a.revalidate,d=!1!==a.rollbackOnError,v=a.optimisticData,p=_(r),y=p[0],g=p[2],!y)return[2];if(b=D.get(e),w=b[2],t.length<3)return[2,I(e,y,e.get(y),c,c,f,u)];if(m=n,j=C(),w[y]=[j,0],E=!s(v),x=e.get(y),E&&(e.set(y,v),I(e,y,v)),l(m))try{m=m(e.get(y))}catch(k){O=k}return m&&l(m.then)?[4,m.catch((function(t){O=t}))]:[3,2];case 1:if(m=i.sent(),j!==w[y][0]){if(O)throw O;return[2,m]}O&&E&&d&&(u=!0,m=x,e.set(y,x)),i.label=2;case 2:return u&&(O||e.set(y,m),e.set(g,h(e.get(g),{error:O}))),w[y][1]=C(),[4,I(e,y,m,O,c,f,u)];case 3:if(L=i.sent(),O)throw O;return[2,u?L:m]}}))}))},G=function(t,e){for(var r in t)t[r][0]&&t[r][0](e)},A=function(t,e){if(!D.has(t)){var r=h(k,e),n={},o=N.bind(c,t),i=u;if(D.set(t,[n,{},{},{},o]),!P){var a=r.initFocus(setTimeout.bind(c,G.bind(c,n,0))),f=r.initReconnect(setTimeout.bind(c,G.bind(c,n,1)));i=function(){a&&a(),f&&f(),D.delete(t)}}return[t,o,i]}return[t,D.get(t)[4]]},M=A(new Map),J=M[0],W=M[1],q=h({onLoadingSlow:u,onSuccess:u,onError:u,onErrorRetry:function(t,e,r,n,o){var i=r.errorRetryCount,a=o.retryCount,u=~~((Math.random()+.5)*(1<<(a<8?a:8)))*r.errorRetryInterval;!s(i)&&a>i||setTimeout(n,u,o)},onDiscarded:u,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:V?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:V?5e3:3e3,compare:function(t,e){return g(t)==g(e)},isPaused:function(){return!1},cache:J,mutate:W,fallback:{}},L),Y=function(t,e){var r=h(t,e);if(e){var n=t.use,o=t.fallback,i=e.use,a=e.fallback;n&&i&&(r.use=n.concat(i)),o&&a&&(r.fallback=h(o,a))}return r},$=Object(n.createContext)({}),H=function(t){return l(t[1])?[t[0],t[1],t[2]||{}]:[t[0],null,(null===t[1]?t[2]:t[1])||{}]},z=function(){return h(q,Object(n.useContext)($))},B=function(t,e,r){var n=e[t]||(e[t]=[]);return n.push(r),function(){var t=n.indexOf(r);t>=0&&(n[t]=n[n.length-1],n.pop())}},K={dedupe:!0},Q=(f.defineProperty((function(t){var e=t.value,r=Y(Object(n.useContext)($),e),o=e&&e.provider,i=Object(n.useState)((function(){return o?A(o(r.cache||J),e):c}))[0];return i&&(r.cache=i[0],r.mutate=i[1]),S((function(){return i?i[2]:c}),[]),Object(n.createElement)($.Provider,h(t,{value:r}))}),"default",{value:q}),a=function(t,e,r){var a=r.cache,u=r.compare,f=r.fallbackData,d=r.suspense,v=r.revalidateOnMount,p=r.refreshInterval,y=r.refreshWhenHidden,g=r.refreshWhenOffline,b=D.get(a),w=b[0],m=b[1],O=b[2],j=b[3],E=_(t),x=E[0],L=E[1],k=E[2],T=Object(n.useRef)(!1),V=Object(n.useRef)(!1),F=Object(n.useRef)(x),G=Object(n.useRef)(e),A=Object(n.useRef)(r),M=function(){return A.current},J=function(){return M().isVisible()&&M().isOnline()},W=function(t){return a.set(k,h(a.get(k),t))},q=a.get(x),Y=s(f)?r.fallback[x]:f,$=s(q)?Y:q,H=a.get(k)||{},z=H.error,Q=function(){return s(v)?!M().isPaused()&&(d?!s($):s($)||r.revalidateIfStale):v},U=!(!x||!e)&&(!!H.isValidating||!T.current&&Q()),X=function(t,e){var r=Object(n.useState)({})[1],o=Object(n.useRef)(t),i=Object(n.useRef)({data:!1,error:!1,isValidating:!1}),a=Object(n.useCallback)((function(t){var n=!1,a=o.current;for(var u in t){var c=u;a[c]!==t[c]&&(a[c]=t[c],i.current[c]&&(n=!0))}n&&!e.current&&r({})}),[]);return S((function(){o.current=t})),[o,i.current,a]}({data:$,error:z,isValidating:U},V),Z=X[0],tt=X[1],et=X[2],rt=Object(n.useCallback)((function(t){return o(void 0,void 0,void 0,(function(){var e,n,o,f,h,d,v,p,y,g,b,w,m;return i(this,(function(i){switch(i.label){case 0:if(e=G.current,!x||!e||V.current||M().isPaused())return[2,!1];f=!0,h=t||{},d=!j[x]||!h.dedupe,v=function(){return!V.current&&x===F.current&&T.current},p=function(){var t=j[x];t&&t[1]===o&&delete j[x]},y={isValidating:!1},g=function(){W({isValidating:!1}),v()&&et(y)},W({isValidating:!0}),et({isValidating:!0}),i.label=1;case 1:return i.trys.push([1,3,,4]),d&&(I(a,x,Z.current.data,Z.current.error,!0),r.loadingTimeout&&!a.get(x)&&setTimeout((function(){f&&v()&&M().onLoadingSlow(x,r)}),r.loadingTimeout),j[x]=[e.apply(void 0,L),C()]),m=j[x],n=m[0],o=m[1],[4,n];case 2:return n=i.sent(),d&&setTimeout(p,r.dedupingInterval),j[x]&&j[x][1]===o?(W({error:c}),y.error=c,b=O[x],!s(b)&&(o<=b[0]||o<=b[1]||0===b[1])?(g(),d&&v()&&M().onDiscarded(x),[2,!1]):(u(Z.current.data,n)?y.data=Z.current.data:y.data=n,u(a.get(x),n)||a.set(x,n),d&&v()&&M().onSuccess(n,x,r),[3,4])):(d&&v()&&M().onDiscarded(x),[2,!1]);case 3:return w=i.sent(),p(),M().isPaused()||(W({error:w}),y.error=w,d&&v()&&(M().onError(w,x,r),("boolean"===typeof r.shouldRetryOnError&&r.shouldRetryOnError||l(r.shouldRetryOnError)&&r.shouldRetryOnError(w))&&J()&&M().onErrorRetry(w,x,r,rt,{retryCount:(h.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return f=!1,g(),v()&&d&&I(a,x,y.data,y.error,!1),[2,!0]}}))}))}),[x]),nt=Object(n.useCallback)(N.bind(c,a,(function(){return F.current})),[]);if(S((function(){G.current=e,A.current=r})),S((function(){if(x){var t=T.current,e=rt.bind(c,K),r=0,n=B(x,m,(function(t,e,r){et(h({error:e,isValidating:r},u(Z.current.data,t)?c:{data:t}))})),o=B(x,w,(function(t){if(0==t){var n=Date.now();M().revalidateOnFocus&&n>r&&J()&&(r=n+M().focusThrottleInterval,e())}else if(1==t)M().revalidateOnReconnect&&J()&&e();else if(2==t)return rt()}));return V.current=!1,F.current=x,T.current=!0,t&&et({data:$,error:z,isValidating:U}),Q()&&(s($)||P?e():R(e)),function(){V.current=!0,n(),o()}}}),[x,rt]),S((function(){var t;function e(){var e=l(p)?p($):p;e&&-1!==t&&(t=setTimeout(r,e))}function r(){Z.current.error||!y&&!M().isVisible()||!g&&!M().isOnline()?e():rt(K).then(e)}return e(),function(){t&&(clearTimeout(t),t=-1)}}),[p,y,g,rt]),Object(n.useDebugValue)($),d&&s($)&&x)throw G.current=e,A.current=r,s(z)?rt(K):z;return{mutate:nt,get data(){return tt.data=!0,$},get error(){return tt.error=!0,z},get isValidating(){return tt.isValidating=!0,U}}},function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=z(),n=H(t),o=n[0],i=n[1],u=n[2],c=Y(r,u),f=a,s=c.use;if(s)for(var l=s.length;l-- >0;)f=s[l](f);return f(o,i||c.fetcher,c)})},function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}r.d(e,"a",(function(){return i}))},function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}r.d(e,"a",(function(){return n}))}]]);
//# sourceMappingURL=3.c956bcbf.chunk.js.map