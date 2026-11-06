(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const h of d.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(l){if(l.ep)return;l.ep=!0;const d=i(l);fetch(l.href,d)}})();function Tb(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Sh={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function Ab(){if(y_)return vl;y_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,d){var h=null;if(d!==void 0&&(h=""+d),l.key!==void 0&&(h=""+l.key),"key"in l){d={};for(var p in l)p!=="key"&&(d[p]=l[p])}else d=l;return l=d.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:d}}return vl.Fragment=t,vl.jsx=i,vl.jsxs=i,vl}var S_;function Rb(){return S_||(S_=1,Sh.exports=Ab()),Sh.exports}var f=Rb(),Mh={exports:{}},ct={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function Cb(){if(M_)return ct;M_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),h=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),b=Symbol.iterator;function T(D){return D===null||typeof D!="object"?null:(D=b&&D[b]||D["@@iterator"],typeof D=="function"?D:null)}var w={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function U(D,K,xe){this.props=D,this.context=K,this.refs=y,this.updater=xe||w}U.prototype.isReactComponent={},U.prototype.setState=function(D,K){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,K,"setState")},U.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function F(){}F.prototype=U.prototype;function N(D,K,xe){this.props=D,this.context=K,this.refs=y,this.updater=xe||w}var I=N.prototype=new F;I.constructor=N,M(I,U.prototype),I.isPureReactComponent=!0;var P=Array.isArray;function E(){}var L={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function V(D,K,xe){var _e=xe.ref;return{$$typeof:o,type:D,key:K,ref:_e!==void 0?_e:null,props:xe}}function k(D,K){return V(D.type,K,D.props)}function ae(D){return typeof D=="object"&&D!==null&&D.$$typeof===o}function pe(D){var K={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(xe){return K[xe]})}var q=/\/+/g;function ee(D,K){return typeof D=="object"&&D!==null&&D.key!=null?pe(""+D.key):K.toString(36)}function X(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(E,E):(D.status="pending",D.then(function(K){D.status==="pending"&&(D.status="fulfilled",D.value=K)},function(K){D.status==="pending"&&(D.status="rejected",D.reason=K)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function H(D,K,xe,_e,Me){var oe=typeof D;(oe==="undefined"||oe==="boolean")&&(D=null);var we=!1;if(D===null)we=!0;else switch(oe){case"bigint":case"string":case"number":we=!0;break;case"object":switch(D.$$typeof){case o:case t:we=!0;break;case S:return we=D._init,H(we(D._payload),K,xe,_e,Me)}}if(we)return Me=Me(D),we=_e===""?"."+ee(D,0):_e,P(Me)?(xe="",we!=null&&(xe=we.replace(q,"$&/")+"/"),H(Me,K,xe,"",function(ft){return ft})):Me!=null&&(ae(Me)&&(Me=k(Me,xe+(Me.key==null||D&&D.key===Me.key?"":(""+Me.key).replace(q,"$&/")+"/")+we)),K.push(Me)),1;we=0;var Ee=_e===""?".":_e+":";if(P(D))for(var Ce=0;Ce<D.length;Ce++)_e=D[Ce],oe=Ee+ee(_e,Ce),we+=H(_e,K,xe,oe,Me);else if(Ce=T(D),typeof Ce=="function")for(D=Ce.call(D),Ce=0;!(_e=D.next()).done;)_e=_e.value,oe=Ee+ee(_e,Ce++),we+=H(_e,K,xe,oe,Me);else if(oe==="object"){if(typeof D.then=="function")return H(X(D),K,xe,_e,Me);throw K=String(D),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.")}return we}function ce(D,K,xe){if(D==null)return D;var _e=[],Me=0;return H(D,_e,"","",function(oe){return K.call(xe,oe,Me++)}),_e}function te(D){if(D._status===-1){var K=D._result,xe=K();xe.then(function(_e){(D._status===0||D._status===-1)&&(D._status=1,D._result=_e,xe.status===void 0&&(xe.status="fulfilled",xe.value=_e))},function(_e){(D._status===0||D._status===-1)&&(D._status=2,D._result=_e,xe.status===void 0&&(xe.status="rejected",xe.reason=_e))}),D._status===-1&&(D._status=0,D._result=xe)}if(D._status===1)return D._result.default;throw D._result}var ue=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var K=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(K))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)};function Te(D){var K=L.T,xe={};xe.types=K!==null?K.types:null,L.T=xe;try{var _e=D(),Me=L.S;Me!==null&&Me(xe,_e),typeof _e=="object"&&_e!==null&&typeof _e.then=="function"&&_e.then(E,ue)}catch(oe){ue(oe)}finally{K!==null&&xe.types!==null&&(K.types=xe.types),L.T=K}}function Be(D){var K=L.T;if(K!==null){var xe=K.types;xe===null?K.types=[D]:xe.indexOf(D)===-1&&xe.push(D)}else Te(Be.bind(null,D))}var Ke={map:ce,forEach:function(D,K,xe){ce(D,function(){K.apply(this,arguments)},xe)},count:function(D){var K=0;return ce(D,function(){K++}),K},toArray:function(D){return ce(D,function(K){return K})||[]},only:function(D){if(!ae(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return ct.Activity=_,ct.Children=Ke,ct.Component=U,ct.Fragment=i,ct.Profiler=l,ct.PureComponent=N,ct.StrictMode=r,ct.Suspense=g,ct.ViewTransition=x,ct.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=L,ct.__COMPILER_RUNTIME={__proto__:null,c:function(D){return L.H.useMemoCache(D)}},ct.addTransitionType=Be,ct.cache=function(D){return function(){return D.apply(null,arguments)}},ct.cacheSignal=function(){return null},ct.cloneElement=function(D,K,xe){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var _e=M({},D.props),Me=D.key;if(K!=null)for(oe in K.key!==void 0&&(Me=""+K.key),K)!J.call(K,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&K.ref===void 0||(_e[oe]=K[oe]);var oe=arguments.length-2;if(oe===1)_e.children=xe;else if(1<oe){for(var we=Array(oe),Ee=0;Ee<oe;Ee++)we[Ee]=arguments[Ee+2];_e.children=we}return V(D.type,Me,_e)},ct.createContext=function(D){return D={$$typeof:h,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:d,_context:D},D},ct.createElement=function(D,K,xe){var _e,Me={},oe=null;if(K!=null)for(_e in K.key!==void 0&&(oe=""+K.key),K)J.call(K,_e)&&_e!=="key"&&_e!=="__self"&&_e!=="__source"&&(Me[_e]=K[_e]);var we=arguments.length-2;if(we===1)Me.children=xe;else if(1<we){for(var Ee=Array(we),Ce=0;Ce<we;Ce++)Ee[Ce]=arguments[Ce+2];Me.children=Ee}if(D&&D.defaultProps)for(_e in we=D.defaultProps,we)Me[_e]===void 0&&(Me[_e]=we[_e]);return V(D,oe,Me)},ct.createRef=function(){return{current:null}},ct.forwardRef=function(D){return{$$typeof:p,render:D}},ct.isValidElement=ae,ct.lazy=function(D){return{$$typeof:S,_payload:{_status:-1,_result:D},_init:te}},ct.memo=function(D,K){return{$$typeof:m,type:D,compare:K===void 0?null:K}},ct.startTransition=Te,ct.unstable_useCacheRefresh=function(){return L.H.useCacheRefresh()},ct.use=function(D){return L.H.use(D)},ct.useActionState=function(D,K,xe){return L.H.useActionState(D,K,xe)},ct.useCallback=function(D,K){return L.H.useCallback(D,K)},ct.useContext=function(D){return L.H.useContext(D)},ct.useDebugValue=function(){},ct.useDeferredValue=function(D,K){return L.H.useDeferredValue(D,K)},ct.useEffect=function(D,K){return L.H.useEffect(D,K)},ct.useEffectEvent=function(D){return L.H.useEffectEvent(D)},ct.useId=function(){return L.H.useId()},ct.useImperativeHandle=function(D,K,xe){return L.H.useImperativeHandle(D,K,xe)},ct.useInsertionEffect=function(D,K){return L.H.useInsertionEffect(D,K)},ct.useLayoutEffect=function(D,K){return L.H.useLayoutEffect(D,K)},ct.useMemo=function(D,K){return L.H.useMemo(D,K)},ct.useOptimistic=function(D,K){return L.H.useOptimistic(D,K)},ct.useReducer=function(D,K,xe){return L.H.useReducer(D,K,xe)},ct.useRef=function(D){return L.H.useRef(D)},ct.useState=function(D){return L.H.useState(D)},ct.useSyncExternalStore=function(D,K,xe){return L.H.useSyncExternalStore(D,K,xe)},ct.useTransition=function(){return L.H.useTransition()},ct.version="19.3.1",ct}var b_;function Zp(){return b_||(b_=1,Mh.exports=Cb()),Mh.exports}var $e=Zp();const Nb=Tb($e);var bh={exports:{}},_l={},Eh={exports:{}},Th={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function wb(){return E_||(E_=1,(function(o){function t(X,H){var ce=X.length;X.push(H);e:for(;0<ce;){var te=ce-1>>>1,ue=X[te];if(0<l(ue,H))X[te]=H,X[ce]=ue,ce=te;else break e}}function i(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var H=X[0],ce=X.pop();if(ce!==H){X[0]=ce;e:for(var te=0,ue=X.length,Te=ue>>>1;te<Te;){var Be=2*(te+1)-1,Ke=X[Be],D=Be+1,K=X[D];if(0>l(Ke,ce))D<ue&&0>l(K,Ke)?(X[te]=K,X[D]=ce,te=D):(X[te]=Ke,X[Be]=ce,te=Be);else if(D<ue&&0>l(K,ce))X[te]=K,X[D]=ce,te=D;else break e}}return H}function l(X,H){var ce=X.sortIndex-H.sortIndex;return ce!==0?ce:X.id-H.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var h=Date,p=h.now();o.unstable_now=function(){return h.now()-p}}var g=[],m=[],S=1,_=null,x=3,b=!1,T=!1,w=!1,M=!1,y=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function N(X){for(var H=i(m);H!==null;){if(H.callback===null)r(m);else if(H.startTime<=X)r(m),H.sortIndex=H.expirationTime,t(g,H);else break;H=i(m)}}function I(X){if(w=!1,N(X),!T)if(i(g)!==null)T=!0,P||(P=!0,ae());else{var H=i(m);H!==null&&ee(I,H.startTime-X)}}var P=!1,E=-1,L=5,J=-1;function V(){return M?!0:!(o.unstable_now()-J<L)}function k(){if(M=!1,P){var X=o.unstable_now();J=X;var H=!0;try{e:{T=!1,w&&(w=!1,U(E),E=-1),b=!0;var ce=x;try{t:{for(N(X),_=i(g);_!==null&&!(_.expirationTime>X&&V());){var te=_.callback;if(typeof te=="function"){_.callback=null,x=_.priorityLevel;var ue=te(_.expirationTime<=X);if(X=o.unstable_now(),typeof ue=="function"){_.callback=ue,N(X),H=!0;break t}_===i(g)&&r(g),N(X)}else r(g);_=i(g)}if(_!==null)H=!0;else{var Te=i(m);Te!==null&&ee(I,Te.startTime-X),H=!1}}break e}finally{_=null,x=ce,b=!1}H=void 0}}finally{H?ae():P=!1}}}var ae;if(typeof F=="function")ae=function(){F(k)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,q=pe.port2;pe.port1.onmessage=k,ae=function(){q.postMessage(null)}}else ae=function(){y(k,0)};function ee(X,H){E=y(function(){X(o.unstable_now())},H)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(X){X.callback=null},o.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<X?Math.floor(1e3/X):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(X){switch(x){case 1:case 2:case 3:var H=3;break;default:H=x}var ce=x;x=H;try{return X()}finally{x=ce}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(X,H){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ce=x;x=X;try{return H()}finally{x=ce}},o.unstable_scheduleCallback=function(X,H,ce){var te=o.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?te+ce:te):ce=te,X){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=ce+ue,X={id:S++,callback:H,priorityLevel:X,startTime:ce,expirationTime:ue,sortIndex:-1},ce>te?(X.sortIndex=ce,t(m,X),i(g)===null&&X===i(m)&&(w?(U(E),E=-1):w=!0,ee(I,ce-te))):(X.sortIndex=ue,t(g,X),T||b||(T=!0,P||(P=!0,ae()))),X},o.unstable_shouldYield=V,o.unstable_wrapCallback=function(X){var H=x;return function(){var ce=x;x=H;try{return X.apply(this,arguments)}finally{x=ce}}}})(Th)),Th}var T_;function Db(){return T_||(T_=1,Eh.exports=wb()),Eh.exports}var Ah={exports:{}},Fn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function Lb(){if(A_)return Fn;A_=1;var o=Zp();function t(S){var _="https://react.dev/errors/"+S;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)_+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+S+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),d=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function p(S,_,x){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:b==null?null:b===h?h:""+b,children:S,containerInfo:_,implementation:x}}var g=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(S,_){if(S==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Fn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Fn.browser=function(S){return{$$typeof:d,_reason:S}},Fn.createPortal=function(S,_){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return p(S,_,null,x)},Fn.flushSync=function(S){var _=g.T,x=r.p;try{if(g.T=null,r.p=2,S)return S()}finally{g.T=_,r.p=x,r.d.f()}},Fn.preconnect=function(S,_){typeof S=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(S,_))},Fn.prefetchDNS=function(S){typeof S=="string"&&r.d.D(S)},Fn.preinit=function(S,_){if(typeof S=="string"&&_&&typeof _.as=="string"){var x=_.as,b=m(x,_.crossOrigin),T=typeof _.integrity=="string"?_.integrity:void 0,w=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;x==="style"?r.d.S(S,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:b,integrity:T,fetchPriority:w}):x==="script"&&r.d.X(S,{crossOrigin:b,integrity:T,fetchPriority:w,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Fn.preinitModule=function(S,_){if(typeof S=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var x=m(_.as,_.crossOrigin);r.d.M(S,{crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}}else _==null&&r.d.M(S)},Fn.preload=function(S,_){if(typeof S=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var x=_.as,b=m(x,_.crossOrigin);r.d.L(S,x,{crossOrigin:b,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Fn.preloadModule=function(S,_){if(typeof S=="string")if(_){var x=m(_.as,_.crossOrigin);r.d.m(S,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:x,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0})}else r.d.m(S)},Fn.requestFormReset=function(S){r.d.r(S)},Fn.unstable_batchedUpdates=function(S,_){return S(_)},Fn.useFormState=function(S,_,x){return g.H.useFormState(S,_,x)},Fn.useFormStatus=function(){return g.H.useHostTransitionStatus()},Fn.version="19.3.1",Fn}var R_;function Ox(){if(R_)return Ah.exports;R_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Ah.exports=Lb(),Ah.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function Ub(){if(C_)return _l;C_=1;var o=Db(),t=Zp(),i=Ox();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(d(e)!==e)throw Error(r(188))}function m(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var u=c.alternate;if(u===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===u.child){for(u=c.child;u;){if(u===a)return g(c),e;if(u===s)return g(c),n;u=u.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=u;else{for(var v=!1,R=c.child;R;){if(R===a){v=!0,a=c,s=u;break}if(R===s){v=!0,s=c,a=u;break}R=R.sibling}if(!v){for(R=u.child;R;){if(R===a){v=!0,a=u,s=c;break}if(R===s){v=!0,s=u,a=c;break}R=R.sibling}if(!v)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function S(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=S(e),n!==null)return n;e=e.sibling}return null}function _(e,n,a,s,c,u){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,s,c,u)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&_(e.child,n,a,s,c,u))return!0;e=e.sibling}return!1}function x(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function b(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],a=x(e);return a===null||w(n,e,a.child,{foundSelf:!1}),n}function w(e,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&w(e,n,a.child,s))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(r(559))}}var y=null,U=null;function F(e,n,a){return e===a?!0:e===n?(y=e,!0):!1}function N(e,n,a){return e===a?(U=e,!1):e===n?(U!==null&&(y=e),!0):!1}function I(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function P(e,n,a){for(var s=0,c=e;c;c=a(c))s++;c=0;for(var u=n;u;u=a(u))c++;for(;0<s-c;)e=a(e),s--;for(;0<c-s;)n=a(n),c--;for(;s--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var E=Object.assign,L=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),V=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),ae=Symbol.for("react.strict_mode"),pe=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),ee=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),ue=Symbol.for("react.lazy"),Te=Symbol.for("react.activity"),Be=Symbol.for("react.legacy_hidden"),Ke=Symbol.for("react.memo_cache_sentinel"),D=Symbol.for("react.view_transition"),K=Symbol.for("react.recoverable"),xe=Symbol.iterator;function _e(e){return e===null||typeof e!="object"?null:(e=xe&&e[xe]||e["@@iterator"],typeof e=="function"?e:null)}var Me=Symbol.for("react.client.reference");function oe(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Me?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case pe:return"Profiler";case ae:return"StrictMode";case H:return"Suspense";case ce:return"SuspenseList";case Te:return"Activity";case D:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case V:return"Portal";case ee:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case te:return n=e.displayName||null,n!==null?n:oe(e.type)||"Memo";case ue:n=e._payload,e=e._init;try{return oe(e(n))}catch{}}return null}var we=Array.isArray,Ee=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ce=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},_t=[],en=-1;function Ft(e){return{current:e}}function Ut(e){0>en||(e.current=_t[en],_t[en]=null,en--)}function it(e,n){en++,_t[en]=e.current,e.current=n}var hn=Ft(null),tn=Ft(null),pn=Ft(null),wn=Ft(null);function Dn(e,n){switch(it(pn,n),it(tn,e),it(hn,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Nv(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Nv(n),e=wv(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ut(hn),it(hn,e)}function W(){Ut(hn),Ut(tn),Ut(pn)}function Hn(e){var n=e.memoizedState;n!==null&&(Zr._currentValue=n.memoizedState,it(wn,e)),n=hn.current;var a=wv(n,e.type);n!==a&&(it(tn,e),it(hn,a))}function Ht(e){tn.current===e&&(Ut(hn),Ut(tn)),wn.current===e&&(Ut(wn),Zr._currentValue=ft)}var Xt,He;function Wt(e){if(Xt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Xt=n&&n[1]||"",He=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Xt+e+He}var tt=!1;function rt(e,n){if(!e||tt)return"";tt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var Se=function(){throw Error()};if(Object.defineProperty(Se.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Se,[])}catch(je){var Y=je}Reflect.construct(e,[],Se)}else{try{Se.call()}catch(je){Y=je}Se=!1;try{var re=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Se=!0,new e}finally{Se&&(re!==void 0?Object.defineProperty(e.prototype,"props",re):delete e.prototype.props)}}}else{try{throw Error()}catch(je){Y=je}(Se=e())&&typeof Se.catch=="function"&&Se.catch(function(){})}}catch(je){if(je&&Y&&typeof je.stack=="string")return[je.stack,Y.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var u=s.DetermineComponentFrameRoot(),v=u[0],R=u[1];if(v&&R){var z=v.split(`
`),Q=R.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===Q.length)for(s=z.length-1,c=Q.length-1;1<=s&&0<=c&&z[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==Q[c]){var le=`
`+z[s].replace(" at new "," at ");return e.displayName&&le.includes("<anonymous>")&&(le=le.replace("<anonymous>",e.displayName)),le}while(1<=s&&0<=c);break}}}finally{tt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function O(e,n){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return e.child!==n&&n!==null?Wt("Suspense Fallback"):Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return rt(e.type,!1);case 11:return rt(e.type.render,!1);case 1:return rt(e.type,!0);case 31:return Wt("Activity");case 30:return Wt("ViewTransition");default:return""}}function A(e){try{var n="",a=null;do n+=O(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var ne=Object.prototype.hasOwnProperty,Re=o.unstable_scheduleCallback,be=o.unstable_cancelCallback,Ue=o.unstable_shouldYield,Ie=o.unstable_requestPaint,he=o.unstable_now,ve=o.unstable_getCurrentPriorityLevel,Oe=o.unstable_ImmediatePriority,B=o.unstable_UserBlockingPriority,ge=o.unstable_NormalPriority,me=o.unstable_LowPriority,Pe=o.unstable_IdlePriority,Ne=o.log,ze=o.unstable_setDisableYieldValue,Je=null,nt=null;function Ae(e){if(typeof Ne=="function"&&ze(e),nt&&typeof nt.setStrictMode=="function")try{nt.setStrictMode(Je,e)}catch{}}var Xe=Math.clz32?Math.clz32:Ot,ht=Math.log,Ve=Math.LN2;function Ot(e){return e>>>=0,e===0?32:31-(ht(e)/Ve|0)|0}var an=256,oi=262144,Ns=4194304;function Ui(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function lr(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,u=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var R=s&134217727;return R!==0?(s=R&~u,s!==0?c=Ui(s):(v&=R,v!==0?c=Ui(v):a||(a=R&~e,a!==0&&(c=Ui(a))))):(R=s&~u,R!==0?c=Ui(R):v!==0?c=Ui(v):a||(a=s&~e,a!==0&&(c=Ui(a)))),c===0?0:n!==0&&n!==c&&(n&u)===0&&(u=c&-c,a=n&-n,u>=a||u===32&&(a&4194048)!==0)?n:c}function Ga(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Eo(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var s=31-Xe(a),c=1<<s;n|=e[s],a&=~c}return n}function ga(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cr(){var e=Ns;return Ns<<=1,(Ns&62914560)===0&&(Ns=4194304),e}function ur(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ja(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function dr(e,n,a,s,c,u){var v=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var R=e.entanglements,z=e.expirationTimes,Q=e.hiddenUpdates;for(a=v&~a;0<a;){var le=31-Xe(a),Se=1<<le;R[le]=0,z[le]=-1;var Y=Q[le];if(Y!==null)for(Q[le]=null,le=0;le<Y.length;le++){var re=Y[le];re!==null&&(re.lane&=-536870913)}a&=~Se}s!==0&&To(e,s,0),u!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=u&~(v&~n))}function To(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Xe(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Ao(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Xe(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Va(e,n){var a=n&-n;return a=(a&42)!==0?1:Ro(a),(a&(e.suspendedLanes|n))!==0?0:a}function Ro(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function fr(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Co(){var e=Ce.p;return e!==0?e:(e=window.event,e===void 0?32:h_(e.type))}function jl(e,n){var a=Ce.p;try{return Ce.p=e,n()}finally{Ce.p=a}}var Oi=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Oi,Ln="__reactProps$"+Oi,C="__reactContainer$"+Oi,G="__reactEvents$"+Oi,de="__reactListeners$"+Oi,ie="__reactHandles$"+Oi,se="__reactResources$"+Oi,De="__reactMarker$"+Oi,ke="__reactLoad$"+Oi;function Le(e){delete e[Sn],delete e[Ln],delete e[de],delete e[ie]}function Ge(e){var n;if(n=e[Sn])return n;for(var a=e.parentNode;a;){if(n=a[C]||a[Sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Wv(e);e!==null;){if(a=e[Sn])return a;e=Wv(e)}return n}e=a,a=e.parentNode}return null}function Ye(e){if(e=e[Sn]||e[C]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function at(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function pt(e){var n=e[se];return n||(n=e[se]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Fe(e){e[De]=!0}function yt(e){e[ke]=void 0}var sn=new Set,Gt={};function Ct(e,n){rn(e,n),rn(e+"Capture",n)}function rn(e,n){for(Gt[e]=n,e=0;e<n.length;e++)sn.add(n[e])}var Ze=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Tn={},Dt={};function va(e){return ne.call(Dt,e)?!0:ne.call(Tn,e)?!1:Ze.test(e)?Dt[e]=!0:(Tn[e]=!0,!1)}var ot=!1;function ws(){var e=ot;return ot=!1,e}function li(e,n,a){if(va(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function yi(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function mt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,s)}}function Pt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Kn(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function $t(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,u=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(v){a=""+v,u.call(this,v)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(v){a=""+v},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function un(e){if(!e._valueTracker){var n=Kn(e)?"checked":"value";e._valueTracker=$t(e,n,""+e[n])}}function Si(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Kn(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}var Vl=/[\n"\\]/g;function Mi(e){return e.replace(Vl,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ku(e,n,a,s,c,u,v,R){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),n!=null?v==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Pt(n)):e.value!==""+Pt(n)&&(e.value=""+Pt(n)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),n!=null?v==="number"&&e.value==n?Ju(e,Pt(e.value)):Ju(e,Pt(n)):a!=null?Ju(e,Pt(a)):s!=null&&e.removeAttribute("value"),c==null&&u!=null&&(e.defaultChecked=!!u),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),R!=null&&typeof R!="function"&&typeof R!="symbol"&&typeof R!="boolean"?e.name=""+Pt(R):e.removeAttribute("name")}function _m(e,n,a,s,c,u,v,R){if(u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.type=u),n!=null||a!=null){if(!(u!=="submit"&&u!=="reset"||n!=null)){un(e);return}a=a!=null?""+Pt(a):"",n=n!=null?""+Pt(n):a,R||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=R?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),un(e)}function Ju(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function hr(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+Pt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function xm(e,n,a){if(n!=null&&(n=""+Pt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Pt(a):""}function ym(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(we(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Pt(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),un(e)}function pr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Wy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sm(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Wy.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Mm(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="",ot=!0);for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&(Sm(e,c,s),ot=!0)}else for(var u in n)n.hasOwnProperty(u)&&Sm(e,u,n[u])}function $u(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Zy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ql(e){return Zy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var ed=null;function td(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var mr=null,gr=null;function bm(e){var n=Ye(e);if(n&&(e=n.stateNode)){var a=e[Ln]||null;e:switch(e=n.stateNode,n.type){case"input":if(Ku(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[Ln]||null;if(!c)throw Error(r(90));Ku(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&Si(s)}break e;case"textarea":xm(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&hr(e,!!a.multiple,n,!1)}}}var nd=!1;function Em(e,n,a){if(nd)return e(n,a);nd=!0;try{var s=e(n);return s}finally{if(nd=!1,(mr!==null||gr!==null)&&(qc(),mr&&(n=mr,e=gr,gr=mr=null,bm(n),e)))for(n=0;n<e.length;n++)bm(e[n])}}function No(e,n){var a=e.stateNode;if(a===null)return null;var s=a[Ln]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var _a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),id=!1;if(_a)try{var wo={};Object.defineProperty(wo,"passive",{get:function(){id=!0}}),window.addEventListener("test",wo,wo),window.removeEventListener("test",wo,wo)}catch{id=!1}var qa=null,ad=null,kl=null;function Tm(){if(kl)return kl;var e,n=ad,a=n.length,s,c="value"in qa?qa.value:qa.textContent,u=c.length;for(e=0;e<a&&n[e]===c[e];e++);var v=a-e;for(s=1;s<=v&&n[a-s]===c[u-s];s++);return kl=c.slice(e,1<s?1-s:void 0)}function Xl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wl(){return!0}function Am(){return!1}function Xn(e){function n(a,s,c,u,v){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=u,this.target=v,this.currentTarget=null;for(var R in e)e.hasOwnProperty(R)&&(a=e[R],this[R]=a?a(u):u[R]);return this.isDefaultPrevented=(u.defaultPrevented!=null?u.defaultPrevented:u.returnValue===!1)?Wl:Am,this.isPropagationStopped=Am,this}return E(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wl)},persist:function(){},isPersistent:Wl}),n}var ka={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=Xn(ka),Do=E({},ka,{view:0,detail:0}),Qy=Xn(Do),sd,rd,Lo,Zl=E({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ld,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lo&&(Lo&&e.type==="mousemove"?(sd=e.screenX-Lo.screenX,rd=e.screenY-Lo.screenY):rd=sd=0,Lo=e),sd)},movementY:function(e){return"movementY"in e?e.movementY:rd}}),Rm=Xn(Zl),Ky=E({},Zl,{dataTransfer:0}),Jy=Xn(Ky),$y=E({},Do,{relatedTarget:0}),od=Xn($y),eS=E({},ka,{animationName:0,elapsedTime:0,pseudoElement:0}),tS=Xn(eS),nS=E({},ka,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),iS=Xn(nS),aS=E({},ka,{data:0}),Cm=Xn(aS),sS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},oS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function lS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=oS[e])?!!n[e]:!1}function ld(){return lS}var cS=E({},Do,{key:function(e){if(e.key){var n=sS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ld,charCode:function(e){return e.type==="keypress"?Xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),uS=Xn(cS),dS=E({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=Xn(dS),fS=E({},ka,{submitter:0}),hS=Xn(fS),pS=E({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ld}),mS=Xn(pS),gS=E({},ka,{propertyName:0,elapsedTime:0,pseudoElement:0}),vS=Xn(gS),_S=E({},Zl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),xS=Xn(_S),yS=E({},ka,{newState:0,oldState:0,source:0}),SS=Xn(yS),MS=[9,13,27,32],cd=_a&&"CompositionEvent"in window,Uo=null;_a&&"documentMode"in document&&(Uo=document.documentMode);var bS=_a&&"TextEvent"in window&&!Uo,wm=_a&&(!cd||Uo&&8<Uo&&11>=Uo),Dm=" ",Lm=!1;function Um(e,n){switch(e){case"keyup":return MS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var vr=!1;function ES(e,n){switch(e){case"compositionend":return Om(n);case"keypress":return n.which!==32?null:(Lm=!0,Dm);case"textInput":return e=n.data,e===Dm&&Lm?null:e;default:return null}}function TS(e,n){if(vr)return e==="compositionend"||!cd&&Um(e,n)?(e=Tm(),kl=ad=qa=null,vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wm&&n.locale!=="ko"?null:n.data;default:return null}}var AS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!AS[e.type]:n==="textarea"}function zm(e,n,a,s){mr?gr?gr.push(s):gr=[s]:mr=s,n=Qc(n,"onChange"),0<n.length&&(a=new Yl("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Oo=null,Po=null;function RS(e){bv(e,0)}function Ql(e){var n=at(e);if(Si(n))return e}function Im(e,n){if(e==="change")return n}var Fm=!1;if(_a){var ud;if(_a){var dd="oninput"in document;if(!dd){var Bm=document.createElement("div");Bm.setAttribute("oninput","return;"),dd=typeof Bm.oninput=="function"}ud=dd}else ud=!1;Fm=ud&&(!document.documentMode||9<document.documentMode)}function Hm(){Oo&&(Oo.detachEvent("onpropertychange",Gm),Po=Oo=null)}function Gm(e){if(e.propertyName==="value"&&Ql(Po)){var n=[];zm(n,Po,e,td(e)),Em(RS,n)}}function CS(e,n,a){e==="focusin"?(Hm(),Oo=n,Po=a,Oo.attachEvent("onpropertychange",Gm)):e==="focusout"&&Hm()}function NS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ql(Po)}function wS(e,n){if(e==="click")return Ql(n)}function DS(e,n){if(e==="input"||e==="change")return Ql(n)}function LS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ci=typeof Object.is=="function"?Object.is:LS;function zo(e,n){if(ci(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!ne.call(n,c)||!ci(e[c],n[c]))return!1}return!0}function fd(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function jm(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vm(e,n){var a=jm(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=jm(a)}}function qm(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?qm(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function km(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fd(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=fd(e.document)}return n}function hd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var US=_a&&"documentMode"in document&&11>=document.documentMode,_r=null,pd=null,Io=null,md=!1;function Xm(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;md||_r==null||_r!==fd(s)||(s=_r,"selectionStart"in s&&hd(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Io&&zo(Io,s)||(Io=s,s=Qc(pd,"onSelect"),0<s.length&&(n=new Yl("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=_r)))}function Ds(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var xr={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},gd={},Wm={};_a&&(Wm=document.createElement("div").style,"AnimationEvent"in window||(delete xr.animationend.animation,delete xr.animationiteration.animation,delete xr.animationstart.animation),"TransitionEvent"in window||delete xr.transitionend.transition);function Ls(e){if(gd[e])return gd[e];if(!xr[e])return e;var n=xr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wm)return gd[e]=n[a];return e}var Ym=Ls("animationend"),Zm=Ls("animationiteration"),Qm=Ls("animationstart"),OS=Ls("transitionrun"),PS=Ls("transitionstart"),zS=Ls("transitioncancel"),Km=Ls("transitionend"),Jm=new Map,vd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vd.push("scrollEnd");function Pi(e,n){Jm.set(e,n),Ct(n,[e])}var IS=0;function xa(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Bi.identifierPrefix;var a=IS++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function $m(e){if(e==null||typeof e=="string")return e;var n=null,a=Br;if(a!==null)for(var s=0;s<a.length;s++){var c=e[a[s]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function ya(e,n){return e=$m(e),n=$m(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var Kl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},bi=[],yr=0,_d=0;function Jl(){for(var e=yr,n=_d=yr=0;n<e;){var a=bi[n];bi[n++]=null;var s=bi[n];bi[n++]=null;var c=bi[n];bi[n++]=null;var u=bi[n];if(bi[n++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}u!==0&&eg(a,c,u)}}function $l(e,n,a,s){bi[yr++]=e,bi[yr++]=n,bi[yr++]=a,bi[yr++]=s,_d|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function xd(e,n,a,s){return $l(e,n,a,s),ec(e)}function Us(e,n){return $l(e,null,null,n),ec(e)}function eg(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,u=e.return;u!==null;)u.childLanes|=a,s=u.alternate,s!==null&&(s.childLanes|=a),u.tag===22&&(e=u.stateNode,e===null||e._visibility&1||(c=!0)),e=u,u=u.return;return e.tag===3?(u=e.stateNode,c&&n!==null&&(c=31-Xe(a),e=u.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),u):null}function ec(e){if(50<sl)throw sl=0,Vc=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Sr={};function FS(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(e,n,a,s){return new FS(e,n,a,s)}function yd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sa(e,n){var a=e.alternate;return a===null?(a=Jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function tg(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function tc(e,n,a,s,c,u){var v=0;if(s=e,typeof s=="function")yd(s)&&(v=1);else if(typeof s=="string")v=fb(e,a,hn.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(s){case Te:return e=Jn(31,a,n,c),e.elementType=Te,e.lanes=u,e;case k:return Os(a.children,c,u,n);case ae:v=8,c|=24;break;case pe:return e=Jn(12,a,n,c|2),e.elementType=pe,e.lanes=u,e;case H:return e=Jn(13,a,n,c),e.elementType=H,e.lanes=u,e;case ce:return e=Jn(19,a,n,c),e.elementType=ce,e.lanes=u,e;case Be:case D:return e=c|32,e=Jn(30,a,n,e),e.elementType=D,e.lanes=u,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case ee:v=10;break e;case q:v=9;break e;case X:v=11;break e;case te:v=14;break e;case ue:v=16,s=null;break e}v=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Jn(v,a,n,c),n.elementType=e,n.type=s,n.lanes=u,n}function Os(e,n,a,s){return e=Jn(7,e,s,n),e.lanes=a,e}function Sd(e,n,a){return e=Jn(6,e,null,n),e.lanes=a,e}function ng(e){var n=Jn(18,null,null,0);return n.stateNode=e,n}function Md(e,n,a){return n=Jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var ig=new WeakMap;function Ei(e,n){if(typeof e=="object"&&e!==null){var a=ig.get(e);return a!==void 0?a:(n={value:e,source:n,stack:A(n)},ig.set(e,n),n)}return{value:e,source:n,stack:A(n)}}var Mr=[],br=0,nc=null,Fo=0,Ti=[],Ai=0,Xa=null,Yi=1,Zi="";function Ma(e,n){Mr[br++]=Fo,Mr[br++]=nc,nc=e,Fo=n}function ag(e,n,a){Ti[Ai++]=Yi,Ti[Ai++]=Zi,Ti[Ai++]=Xa,Xa=e;var s=Yi;e=Zi;var c=32-Xe(s)-1;s&=~(1<<c),a+=1;var u=32-Xe(n)+c;if(30<u){var v=c-c%5;u=(s&(1<<v)-1).toString(32),s>>=v,c-=v,Yi=1<<32-Xe(n)+c|a<<c|s,Zi=u+e}else Yi=1<<u|a<<c|s,Zi=e}function ic(e){e.return!==null&&(Ma(e,1),ag(e,1,0))}function bd(e){for(;e===nc;)nc=Mr[--br],Mr[br]=null,Fo=Mr[--br],Mr[br]=null;for(;e===Xa;)Xa=Ti[--Ai],Ti[Ai]=null,Zi=Ti[--Ai],Ti[Ai]=null,Yi=Ti[--Ai],Ti[Ai]=null}function sg(e,n){Ti[Ai++]=Yi,Ti[Ai++]=Zi,Ti[Ai++]=Xa,Yi=n.id,Zi=n.overflow,Xa=e}var An=null,Kt=null,St=!1,Wa=null,Ri=!1,Ed=Error(r(519));function Ya(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Bo(Ei(n,e)),Ed}function rg(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[Sn]=e,n[Ln]=s,a){case"dialog":bt("cancel",n),bt("close",n);break;case"iframe":case"object":case"embed":bt("load",n);break;case"video":case"audio":for(a=0;a<ol.length;a++)bt(ol[a],n);break;case"source":bt("error",n);break;case"img":case"image":case"link":bt("error",n),bt("load",n);break;case"details":bt("toggle",n);break;case"input":bt("invalid",n),_m(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":bt("invalid",n);break;case"textarea":bt("invalid",n),ym(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Rv(n.textContent,a)?(s.popover!=null&&(bt("beforetoggle",n),bt("toggle",n)),s.onScroll!=null&&bt("scroll",n),s.onScrollEnd!=null&&bt("scrollend",n),s.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ya(e,!0)}function ac(e){for(An=e.return;An;)switch(An.tag){case 5:case 31:case 13:Ri=!1;return;case 27:case 3:Ri=!0;return;default:An=An.return}}function Er(e){if(e!==An)return!1;if(!St)return ac(e),St=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||th(e.type,e.memoizedProps)),a=!a),a&&Kt&&Ya(e),ac(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Kt=Xv(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));Kt=Xv(e)}else n===27?(n=Kt,us(e.type)?(e=uh,uh=null,Kt=e):Kt=n):Kt=An?Ni(e.stateNode.nextSibling):null;return!0}function Ps(){Kt=An=null,St=!1}function Td(){var e=Wa;return e!==null&&(ti===null?ti=e:ti.push.apply(ti,e),Wa=null),e}function Bo(e){Wa===null?Wa=[e]:Wa.push(e)}var Ad=Ft(null),zs=null,ba=null;function Za(e,n,a){it(Ad,n._currentValue),n._currentValue=a}function Ea(e){e._currentValue=Ad.current,Ut(Ad)}function sc(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Rd(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var u=c.dependencies;if(u!==null){var v=c.child;u=u.firstContext;e:for(;u!==null;){var R=u;u=c;for(var z=0;z<n.length;z++)if(R.context===n[z]){u.lanes|=a,R=u.alternate,R!==null&&(R.lanes|=a),sc(u.return,a,e),s||(v=null);break e}u=R.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(r(341));v.lanes|=a,u=v.alternate,u!==null&&(u.lanes|=a),sc(v,a,e),v=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,v=c.alternate,v!==null&&(v.lanes|=a),sc(c.return,a,e),v=c.child,v=v!==null?v.sibling:null):v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Is(e,n,a,s){e=null;for(var c=n,u=!1;c!==null;){if(!u){if((c.flags&524288)!==0)u=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(r(387));if(v=v.memoizedProps,v!==null){var R=c.type;ci(c.pendingProps.value,v.value)||(e!==null?e.push(R):e=[R])}}else if(c===wn.current){if(v=c.alternate,v===null)throw Error(r(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Zr):e=[Zr])}c=c.return}return e!==null&&Rd(n,e,a,s),n.flags|=262144,e!==null}function rc(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Fs(e){zs=e,ba=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return og(zs,e)}function oc(e,n){return zs===null&&Fs(e),og(e,n)}function og(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ba===null){if(e===null)throw Error(r(308));ba=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ba=ba.next=n;return a}var BS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},HS=o.unstable_scheduleCallback,GS=o.unstable_NormalPriority,gn={$$typeof:ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cd(){return{controller:new BS,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&HS(GS,function(){e.controller.abort()})}function lg(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var s=n[e];a.indexOf(s)===-1&&a.push(s)}}}var Go=null;function jS(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var jo=null,Nd=0,Bs=0,Tr=null;function VS(e,n){if(jo===null){var a=jo=[];Nd=0,Bs=Xf(),Tr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Nd++,n.then(cg,cg),n}function cg(){if(--Nd===0&&(Go=null,jo!==null)){Tr!==null&&(Tr.status="fulfilled");var e=jo;jo=null,Bs=0,Tr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function qS(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var ug=Ee.S;Ee.S=function(e,n){if(nv=he(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&VS(e,n),Go!==null)for(var a=Vr;a!==null;)lg(a,Go),a=a.next;if(a=e.types,a!==null){for(var s=Vr;s!==null;)lg(s,a),s=s.next;if(Bs!==0){s=Go,s===null&&(s=Go=[]);for(var c=0;c<a.length;c++){var u=a[c];s.indexOf(u)===-1&&s.push(u)}}}ug!==null&&ug(e,n)};var Hs=Ft(null);function wd(){var e=Hs.current;return e!==null?e:Zt.pooledCache}function lc(e,n){n===null?it(Hs,Hs.current):it(Hs,n.pool)}function dg(){var e=wd();return e===null?null:{parent:gn._currentValue,pool:e}}var Ar=Error(r(460)),Dd=Error(r(474)),cc=Error(r(542)),uc={then:function(){}};function fg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function hg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mg(e),e===void 0&&!("reason"in n)?Error(r(600)):e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,mg(e),e}throw js=n,Ar}}function Gs(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(js=a,Ar):a}}var js=null;function pg(){if(js===null)throw Error(r(459));var e=js;return js=null,e}function mg(e){if(e===Ar||e===cc)throw Error(r(483))}var Rr=null,Vo=0;function dc(e){var n=Vo;return Vo+=1,Rr===null&&(Rr=[]),hg(Rr,e,n)}function Qa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function fc(e,n){throw n.$$typeof===L?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function gg(e){function n(Z,j){if(e){var $=Z.deletions;$===null?(Z.deletions=[j],Z.flags|=16):$.push(j)}}function a(Z,j){if(!e)return null;for(;j!==null;)n(Z,j),j=j.sibling;return null}function s(Z){for(var j=new Map;Z!==null;)Z.key===null?j.set(Z.index,Z):j.set(Z.key,Z),Z=Z.sibling;return j}function c(Z,j){return Z=Sa(Z,j),Z.index=0,Z.sibling=null,Z}function u(Z,j,$){return Z.index=$,e?($=Z.alternate,$!==null?($=$.index,$<j?(Z.flags|=2,j):$):(Z.flags|=134217730,j)):(Z.flags|=1048576,j)}function v(Z){return e&&Z.alternate===null&&(Z.flags|=134217730),Z}function R(Z,j,$,ye){return j===null||j.tag!==6?(j=Sd($,Z.mode,ye),j.return=Z,j):(j=c(j,$),j.return=Z,j)}function z(Z,j,$,ye){var We=$.type;return We===k?(Z=le(Z,j,$.props.children,ye,$.key),Qa(Z,$),Z):j!==null&&(j.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ue&&Gs(We)===j.type)?(j=c(j,$.props),Qa(j,$),j.return=Z,j):(j=tc($.type,$.key,$.props,null,Z.mode,ye),Qa(j,$),j.return=Z,j)}function Q(Z,j,$,ye){return j===null||j.tag!==4||j.stateNode.containerInfo!==$.containerInfo||j.stateNode.implementation!==$.implementation?(j=Md($,Z.mode,ye),j.return=Z,j):(j=c(j,$.children||[]),j.return=Z,j)}function le(Z,j,$,ye,We){return j===null||j.tag!==7?(j=Os($,Z.mode,ye,We),j.return=Z,j):(j=c(j,$),j.return=Z,j)}function Se(Z,j,$){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Sd(""+j,Z.mode,$),j.return=Z,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case J:return $=tc(j.type,j.key,j.props,null,Z.mode,$),Qa($,j),$.return=Z,$;case V:return j=Md(j,Z.mode,$),j.return=Z,j;case ue:return j=Gs(j),Se(Z,j,$)}if(we(j)||_e(j))return j=Os(j,Z.mode,$,null),j.return=Z,j;if(typeof j.then=="function")return Se(Z,dc(j),$);if(j.$$typeof===ee)return Se(Z,oc(Z,j),$);fc(Z,j)}return null}function Y(Z,j,$,ye){var We=j!==null?j.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return We!==null?null:R(Z,j,""+$,ye);if(typeof $=="object"&&$!==null){switch($.$$typeof){case J:return $.key===We?z(Z,j,$,ye):null;case V:return $.key===We?Q(Z,j,$,ye):null;case ue:return $=Gs($),Y(Z,j,$,ye)}if(we($)||_e($))return We!==null?null:le(Z,j,$,ye,null);if(typeof $.then=="function")return Y(Z,j,dc($),ye);if($.$$typeof===ee)return Y(Z,j,oc(Z,$),ye);fc(Z,$)}return null}function re(Z,j,$,ye,We){if(typeof ye=="string"&&ye!==""||typeof ye=="number"||typeof ye=="bigint")return Z=Z.get($)||null,R(j,Z,""+ye,We);if(typeof ye=="object"&&ye!==null){switch(ye.$$typeof){case J:return Z=Z.get(ye.key===null?$:ye.key)||null,z(j,Z,ye,We);case V:return Z=Z.get(ye.key===null?$:ye.key)||null,Q(j,Z,ye,We);case ue:return ye=Gs(ye),re(Z,j,$,ye,We)}if(we(ye)||_e(ye))return Z=Z.get($)||null,le(j,Z,ye,We,null);if(typeof ye.then=="function")return re(Z,j,$,dc(ye),We);if(ye.$$typeof===ee)return re(Z,j,$,oc(j,ye),We);fc(j,ye)}return null}function je(Z,j,$,ye){for(var We=null,Tt=null,et=j,st=j=0,xn=null;et!==null&&st<$.length;st++){et.index>st?(xn=et,et=null):xn=et.sibling;var Lt=Y(Z,et,$[st],ye);if(Lt===null){et===null&&(et=xn);break}e&&et&&Lt.alternate===null&&n(Z,et),j=u(Lt,j,st),Tt===null?We=Lt:Tt.sibling=Lt,Tt=Lt,et=xn}if(st===$.length)return a(Z,et),St&&Ma(Z,st),We;if(et===null){for(;st<$.length;st++)et=Se(Z,$[st],ye),et!==null&&(j=u(et,j,st),Tt===null?We=et:Tt.sibling=et,Tt=et);return St&&Ma(Z,st),We}for(et=s(et);st<$.length;st++)xn=re(et,Z,st,$[st],ye),xn!==null&&(e&&(Lt=xn.alternate,Lt!==null&&et.delete(Lt.key===null?st:Lt.key)),j=u(xn,j,st),Tt===null?We=xn:Tt.sibling=xn,Tt=xn);return e&&et.forEach(function(ms){return n(Z,ms)}),St&&Ma(Z,st),We}function Qe(Z,j,$,ye){if($==null)throw Error(r(151));for(var We=null,Tt=null,et=j,st=j=0,xn=null,Lt=$.next();et!==null&&!Lt.done;st++,Lt=$.next()){et.index>st?(xn=et,et=null):xn=et.sibling;var ms=Y(Z,et,Lt.value,ye);if(ms===null){et===null&&(et=xn);break}e&&et&&ms.alternate===null&&n(Z,et),j=u(ms,j,st),Tt===null?We=ms:Tt.sibling=ms,Tt=ms,et=xn}if(Lt.done)return a(Z,et),St&&Ma(Z,st),We;if(et===null){for(;!Lt.done;st++,Lt=$.next())Lt=Se(Z,Lt.value,ye),Lt!==null&&(j=u(Lt,j,st),Tt===null?We=Lt:Tt.sibling=Lt,Tt=Lt);return St&&Ma(Z,st),We}for(et=s(et);!Lt.done;st++,Lt=$.next())Lt=re(et,Z,st,Lt.value,ye),Lt!==null&&(e&&(xn=Lt.alternate,xn!==null&&et.delete(xn.key===null?st:xn.key)),j=u(Lt,j,st),Tt===null?We=Lt:Tt.sibling=Lt,Tt=Lt);return e&&et.forEach(function(Eb){return n(Z,Eb)}),St&&Ma(Z,st),We}function vt(Z,j,$,ye){if(typeof $=="object"&&$!==null&&$.type===k&&$.key===null&&$.props.ref===void 0&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case J:e:{for(var We=$.key;j!==null;){if(j.key===We){if(We=$.type,We===k){if(j.tag===7){a(Z,j.sibling),ye=c(j,$.props.children),Qa(ye,$),ye.return=Z,Z=ye;break e}}else if(j.elementType===We||typeof We=="object"&&We!==null&&We.$$typeof===ue&&Gs(We)===j.type){a(Z,j.sibling),ye=c(j,$.props),Qa(ye,$),ye.return=Z,Z=ye;break e}a(Z,j);break}else n(Z,j);j=j.sibling}$.type===k?(ye=Os($.props.children,Z.mode,ye,$.key),Qa(ye,$),ye.return=Z,Z=ye):(ye=tc($.type,$.key,$.props,null,Z.mode,ye),Qa(ye,$),ye.return=Z,Z=ye)}return v(Z);case V:e:{for(We=$.key;j!==null;){if(j.key===We)if(j.tag===4&&j.stateNode.containerInfo===$.containerInfo&&j.stateNode.implementation===$.implementation){a(Z,j.sibling),ye=c(j,$.children||[]),ye.return=Z,Z=ye;break e}else{a(Z,j);break}else n(Z,j);j=j.sibling}ye=Md($,Z.mode,ye),ye.return=Z,Z=ye}return v(Z);case ue:return $=Gs($),vt(Z,j,$,ye)}if(we($))return je(Z,j,$,ye);if(_e($)){if(We=_e($),typeof We!="function")throw Error(r(150));return $=We.call($),Qe(Z,j,$,ye)}if(typeof $.then=="function")return vt(Z,j,dc($),ye);if($.$$typeof===ee)return vt(Z,j,oc(Z,$),ye);fc(Z,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,j!==null&&j.tag===6?(a(Z,j.sibling),ye=c(j,$),ye.return=Z,Z=ye):(a(Z,j),ye=Sd($,Z.mode,ye),ye.return=Z,Z=ye),v(Z)):a(Z,j)}return function(Z,j,$,ye){try{Vo=0;var We=vt(Z,j,$,ye);return Rr=null,We}catch(et){if(et===Ar||et===cc)throw et;var Tt=Jn(29,et,null,Z.mode);return Tt.lanes=ye,Tt.return=Z,Tt}finally{}}}var Vs=gg(!0),vg=gg(!1),Ka=!1;function Ld(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ud(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(zt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=ec(e),eg(e,null,a),n}return $l(e,s,n,a),ec(e)}function qo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ao(e,a)}}function Od(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,u=null;if(a=a.firstBaseUpdate,a!==null){do{var v={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};u===null?c=u=v:u=u.next=v,a=a.next}while(a!==null);u===null?c=u=n:u=u.next=n}else c=u=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:u,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Pd=!1;function ko(){if(Pd){var e=Tr;if(e!==null)throw e}}function Xo(e,n,a,s){Pd=!1;var c=e.updateQueue;Ka=!1;var u=c.firstBaseUpdate,v=c.lastBaseUpdate,R=c.shared.pending;if(R!==null){c.shared.pending=null;var z=R,Q=z.next;z.next=null,v===null?u=Q:v.next=Q,v=z;var le=e.alternate;le!==null&&(le=le.updateQueue,R=le.lastBaseUpdate,R!==v&&(R===null?le.firstBaseUpdate=Q:R.next=Q,le.lastBaseUpdate=z))}if(u!==null){var Se=c.baseState;v=0,le=Q=z=null,R=u;do{var Y=R.lane&-536870913,re=Y!==R.lane;if(re?(Et&Y)===Y:(s&Y)===Y){Y!==0&&Y===Bs&&(Pd=!0),le!==null&&(le=le.next={lane:0,tag:R.tag,payload:R.payload,callback:null,next:null});e:{var je=e,Qe=R;Y=n;var vt=a;switch(Qe.tag){case 1:if(je=Qe.payload,typeof je=="function"){Se=je.call(vt,Se,Y);break e}Se=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Qe.payload,Y=typeof je=="function"?je.call(vt,Se,Y):je,Y==null)break e;Se=E({},Se,Y);break e;case 2:Ka=!0}}Y=R.callback,Y!==null&&(e.flags|=64,re&&(e.flags|=8192),re=c.callbacks,re===null?c.callbacks=[Y]:re.push(Y))}else re={lane:Y,tag:R.tag,payload:R.payload,callback:R.callback,next:null},le===null?(Q=le=re,z=Se):le=le.next=re,v|=Y;if(R=R.next,R===null){if(R=c.shared.pending,R===null)break;re=R,R=re.next,re.next=null,c.lastBaseUpdate=re,c.shared.pending=null}}while(!0);le===null&&(z=Se),c.baseState=z,c.firstBaseUpdate=Q,c.lastBaseUpdate=le,u===null&&(c.shared.lanes=0),rs|=v,e.lanes=v,e.memoizedState=Se}}function _g(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function xg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)_g(a[e],n)}var es=Ft(null),hc=Ft(0);function yg(e,n){e=Na,it(hc,e),it(es,n),Na=e|n.baseLanes}function zd(){it(hc,Na),it(es,es.current)}function Id(){Na=hc.current,Ut(es),Ut(hc)}var On=Ft(null),Gn=null;function ts(e){var n=e.alternate;it(Pn,Pn.current&1),it(On,e),Gn===null&&(n===null||es.current!==null||n.memoizedState!==null)&&(Gn=e)}function Fd(e){it(Pn,Pn.current),it(On,e),Gn===null&&(Gn=e)}function Sg(e){e.tag===22?(it(Pn,Pn.current),it(On,e),Gn===null&&(Gn=e)):ns()}function ns(){it(Pn,Pn.current),it(On,On.current)}function ui(e){Ut(On),Gn===e&&(Gn=null),Ut(Pn)}var Pn=Ft(0);function Wo(e,n){it(On,On.current),it(Pn,n)}function Bd(e){Ut(Pn),Ut(On),Gn===e&&(Gn=null)}function pc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||lh(a)||ch(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ta=0,gt=null,Yt=null,vn=null,mc=!1,Cr=!1,qs=!1,gc=0,Yo=0,Nr=null,kS=0;function dn(){throw Error(r(321))}function Hd(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ci(e[a],n[a]))return!1;return!0}function Gd(e,n,a,s,c,u){return Ta=u,gt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Ee.H=e===null||e.memoizedState===null?a0:s0,qs=!1,u=a(s,c),qs=!1,Cr&&(u=bg(n,a,s,c)),Mg(e),u}function Mg(e){Ee.H=bc;var n=Yt!==null&&Yt.next!==null;if(Ta=0,vn=Yt=gt=null,mc=!1,Yo=0,Nr=null,n)throw Error(r(300));e===null||_n||(e=e.dependencies,e!==null&&rc(e)&&(_n=!0))}function bg(e,n,a,s){gt=e;var c=0;do{if(Cr&&(Nr=null),Yo=0,Cr=!1,25<=c)throw Error(r(301));if(c+=1,vn=Yt=null,e.updateQueue!=null){var u=e.updateQueue;u.lastEffect=null,u.events=null,u.stores=null,u.memoCache!=null&&(u.memoCache.index=0)}Ee.H=$S,u=n(a,s)}while(Cr);return u}function XS(){var e=Ee.H,n=e.useState()[0];return n=typeof n.then=="function"?Zo(n):n,e=e.useState()[0],(Yt!==null?Yt.memoizedState:null)!==e&&(gt.flags|=1024),n}function jd(){var e=gc!==0;return gc=0,e}function Vd(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function qd(e){if(mc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}mc=!1}Ta=0,vn=Yt=gt=null,Cr=!1,Yo=gc=0,Nr=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?gt.memoizedState=vn=e:vn=vn.next=e,vn}function mn(){if(Yt===null){var e=gt.alternate;e=e!==null?e.memoizedState:null}else e=Yt.next;var n=vn===null?gt.memoizedState:vn.next;if(n!==null)vn=n,Yt=e;else{if(e===null)throw gt.alternate===null?Error(r(467)):Error(r(310));Yt=e,e={memoizedState:Yt.memoizedState,baseState:Yt.baseState,baseQueue:Yt.baseQueue,queue:Yt.queue,next:null},vn===null?gt.memoizedState=vn=e:vn=vn.next=e}return vn}function vc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(e){var n=Yo;return Yo+=1,Nr===null&&(Nr=[]),e=hg(Nr,e,n),n=gt,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,Ee.H=n===null||n.memoizedState===null?a0:s0),e}function _c(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zo(e);if(e.$$typeof===K)return;if(e.$$typeof===ee)return Un(e)}throw Error(r(438,String(e)))}function kd(e){var n=null,a=gt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=gt.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=vc(),gt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=Ke;return n.index++,a}function Aa(e,n){return typeof n=="function"?n(e):n}function xc(e){var n=mn();return Xd(n,Yt,e)}function Xd(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,u=s.pending;if(u!==null){if(c!==null){var v=c.next;c.next=u.next,u.next=v}n.baseQueue=c=u,s.pending=null}if(u=e.baseState,c===null)e.memoizedState=u;else{n=c.next;var R=v=null,z=null,Q=n,le=!1;do{var Se=Q.lane&-536870913;if(Se!==Q.lane?(Et&Se)===Se:(Ta&Se)===Se){var Y=Q.revertLane;if(Y===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),Se===Bs&&(le=!0);else if((Ta&Y)===Y){Q=Q.next,Y===Bs&&(le=!0);continue}else Se={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(R=z=Se,v=u):z=z.next=Se,gt.lanes|=Y,rs|=Y;Se=Q.action,qs&&a(u,Se),u=Q.hasEagerState?Q.eagerState:a(u,Se)}else Y={lane:Se,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(R=z=Y,v=u):z=z.next=Y,gt.lanes|=Se,rs|=Se;Q=Q.next}while(Q!==null&&Q!==n);if(z===null?v=u:z.next=R,!ci(u,e.memoizedState)&&(_n=!0,le&&(a=Tr,a!==null)))throw a;e.memoizedState=u,e.baseState=v,e.baseQueue=z,s.lastRenderedState=u}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Wd(e){var n=mn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,u=n.memoizedState;if(c!==null){a.pending=null;var v=c=c.next;do u=e(u,v.action),v=v.next;while(v!==c);ci(u,n.memoizedState)||(_n=!0),n.memoizedState=u,n.baseQueue===null&&(n.baseState=u),a.lastRenderedState=u}return[u,s]}function Eg(e,n,a){var s=gt,c=mn(),u=St;if(u){if(a===void 0)throw Error(r(407));a=a()}else a=n();var v=!ci((Yt||c).memoizedState,a);if(v&&(c.memoizedState=a,_n=!0),c=c.queue,Qd(Rg.bind(null,s,c,e),[e]),e=c.getSnapshot!==n||v||vn!==null&&(vn.memoizedState.tag&1)!==0,wr(e?9:8,{destroy:void 0},Ag.bind(null,s,c,a,n),null),e){if(s.flags|=2048,Zt===null)throw Error(r(349));u||(Ta&127)!==0||Tg(s,n,a)}return a}function Tg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=gt.updateQueue,n===null?(n=vc(),gt.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ag(e,n,a,s){n.value=a,n.getSnapshot=s,Cg(n)&&Ng(e)}function Rg(e,n,a){return a(function(){Cg(n)&&Ng(e)})}function Cg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ci(e,a)}catch{return!0}}function Ng(e){var n=Us(e,2);n!==null&&ni(n,e,2)}function Yd(e){var n=Wn();if(typeof e=="function"){var a=e;if(e=a(),qs){Ae(!0);try{a()}finally{Ae(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:e},n}function wg(e,n,a,s){return e.baseState=a,Xd(e,Yt,typeof s=="function"?s:Aa)}function WS(e,n,a,s,c){if(Mc(e))throw Error(r(485));if(e=n.action,e!==null){var u={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){u.listeners.push(v)}};Ee.T!==null?a(!0):u.isTransition=!1,s(u),a=n.pending,a===null?(u.next=n.pending=u,Dg(n,u)):(u.next=a.next,n.pending=a.next=u)}}function Dg(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var u=Ee.T,v={};v.types=u!==null?u.types:null,Ee.T=v;try{var R=a(c,s),z=Ee.S;z!==null&&z(v,R),Lg(e,n,R)}catch(Q){Zd(e,n,Q)}finally{u!==null&&v.types!==null&&(u.types=v.types),Ee.T=u}}else try{u=a(c,s),Lg(e,n,u)}catch(Q){Zd(e,n,Q)}}function Lg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Ug(e,n,s)},function(s){return Zd(e,n,s)}):Ug(e,n,a)}function Ug(e,n,a){n.status="fulfilled",n.value=a,Og(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Dg(e,a)))}function Zd(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Og(n),n=n.next;while(n!==s)}e.action=null}function Og(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Pg(e,n){return n}function zg(e,n){if(St){var a=Zt.formState;if(a!==null){e:{var s=gt;if(St){if(Kt){t:{for(var c=Kt,u=Ri;c.nodeType!==8;){if(!u){c=null;break t}if(c=Ni(c.nextSibling),c===null){c=null;break t}}u=c.data,c=u==="F!"||u==="F"?c:null}if(c){Kt=Ni(c.nextSibling),s=c.data==="F!";break e}}Ya(s)}s=!1}s&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pg,lastRenderedState:n},a.queue=s,a=t0.bind(null,gt,s),s.dispatch=a,s=Yd(!1),u=tf.bind(null,gt,!1,s.queue),s=Wn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=WS.bind(null,gt,c,u,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Ig(e){var n=mn();return Fg(n,Yt,e)}function Fg(e,n,a){if(n=Xd(e,n,Pg)[0],e=xc(Aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Zo(n)}catch(v){throw v===Ar?cc:v}else s=n;n=mn();var c=n.queue,u=c.dispatch;return a!==n.memoizedState&&(gt.flags|=2048,wr(9,{destroy:void 0},YS.bind(null,c,a),null)),[s,u,e]}function YS(e,n){e.action=n}function Bg(e){var n=mn(),a=Yt;if(a!==null)return Fg(n,a,e);mn(),n=n.memoizedState,a=mn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function wr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=gt.updateQueue,n===null&&(n=vc(),gt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Hg(){return mn().memoizedState}function yc(e,n,a,s){var c=Wn();gt.flags|=e,c.memoizedState=wr(1|n,{destroy:void 0},a,s===void 0?null:s)}function Sc(e,n,a,s){var c=mn();s=s===void 0?null:s;var u=c.memoizedState.inst;Yt!==null&&s!==null&&Hd(s,Yt.memoizedState.deps)?c.memoizedState=wr(n,u,a,s):(gt.flags|=e,c.memoizedState=wr(1|n,u,a,s))}function Gg(e,n){yc(8390656,8,e,n)}function Qd(e,n){Sc(2048,8,e,n)}function ZS(e){gt.flags|=4;var n=gt.updateQueue;if(n===null)n=vc(),gt.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function jg(e){var n=mn().memoizedState;return ZS({ref:n,nextImpl:e}),function(){if((zt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Vg(e,n){return Sc(4,2,e,n)}function qg(e,n){return Sc(4,4,e,n)}function kg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xg(e,n,a){a=a!=null?a.concat([e]):null,Sc(4,4,kg.bind(null,n,e),a)}function Kd(){}function Wg(e,n){var a=mn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Hd(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Yg(e,n){var a=mn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Hd(n,s[1]))return s[0];if(s=e(),qs){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[s,n],s}function Jd(e,n,a){return a===void 0||(Ta&1073741824)!==0&&(Et&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=av(),gt.lanes|=e,rs|=e,a)}function Zg(e,n,a,s){return ci(a,n)?a:es.current!==null?(e=Jd(e,a,s),ci(e,n)||(_n=!0),e):(Ta&106)===0||(Ta&1073741824)!==0&&(Et&261930)===0?(_n=!0,e.memoizedState=a):(e=av(),gt.lanes|=e,rs|=e,n)}function Qg(e,n,a,s,c){var u=Ce.p;Ce.p=u!==0&&8>u?u:8;var v=Ee.T,R={};R.types=v!==null?v.types:null,Ee.T=R,tf(e,!1,n,a);try{var z=c(),Q=Ee.S;if(Q!==null&&Q(R,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var le=qS(z,s);Qo(e,n,le,pi(e))}else Qo(e,n,s,pi(e))}catch(Se){Qo(e,n,{then:function(){},status:"rejected",reason:Se},pi())}finally{Ce.p=u,v!==null&&R.types!==null&&(v.types=R.types),Ee.T=v}}function QS(){}function $d(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=Kg(e).queue;Qg(e,c,n,ft,a===null?QS:function(){return Jg(e),a(s)})}function Kg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:ft},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Jg(e){var n=Kg(e);n.next===null&&(n=e.alternate.memoizedState),Qo(e,n.next.queue,{},pi())}function ef(){return Un(Zr)}function $g(){return mn().memoizedState}function e0(){return mn().memoizedState}function KS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();e=Ja(a);var s=$a(n,e,a);s!==null&&(ni(s,n,a),qo(s,n,a)),n={cache:Cd()},e.payload=n;return}n=n.return}}function JS(e,n,a){var s=pi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Mc(e)?n0(n,a):(a=xd(e,n,a,s),a!==null&&(ni(a,e,s),i0(a,n,s)))}function t0(e,n,a){var s=pi();Qo(e,n,a,s)}function Qo(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Mc(e))n0(n,c);else{var u=e.alternate;if(e.lanes===0&&(u===null||u.lanes===0)&&(u=n.lastRenderedReducer,u!==null))try{var v=n.lastRenderedState,R=u(v,a);if(c.hasEagerState=!0,c.eagerState=R,ci(R,v))return $l(e,n,c,0),Zt===null&&Jl(),!1}catch{}finally{}if(a=xd(e,n,c,s),a!==null)return ni(a,e,s),i0(a,n,s),!0}return!1}function tf(e,n,a,s){if(s={lane:2,revertLane:Xf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Mc(e)){if(n)throw Error(r(479))}else n=xd(e,a,s,2),n!==null&&ni(n,e,2)}function Mc(e){var n=e.alternate;return e===gt||n!==null&&n===gt}function n0(e,n){Cr=mc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function i0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ao(e,a)}}var bc={readContext:Un,use:_c,useCallback:dn,useContext:dn,useEffect:dn,useImperativeHandle:dn,useLayoutEffect:dn,useInsertionEffect:dn,useMemo:dn,useReducer:dn,useRef:dn,useState:dn,useDebugValue:dn,useDeferredValue:dn,useTransition:dn,useSyncExternalStore:dn,useId:dn,useHostTransitionStatus:dn,useFormState:dn,useActionState:dn,useOptimistic:dn,useMemoCache:dn,useCacheRefresh:dn,useEffectEvent:dn},a0={readContext:Un,use:_c,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:Gg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,yc(4194308,4,kg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return yc(4194308,4,e,n)},useInsertionEffect:function(e,n){yc(4,2,e,n)},useMemo:function(e,n){var a=Wn();n=n===void 0?null:n;var s=e();if(qs){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Wn();if(a!==void 0){var c=a(n);if(qs){Ae(!0);try{a(n)}finally{Ae(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=JS.bind(null,gt,e),[s.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=Yd(e);var n=e.queue,a=t0.bind(null,gt,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Kd,useDeferredValue:function(e,n){var a=Wn();return Jd(a,e,n)},useTransition:function(){var e=Yd(!1);return e=Qg.bind(null,gt,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=gt,c=Wn();if(St){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Zt===null)throw Error(r(349));(Et&127)!==0||Tg(s,n,a)}c.memoizedState=a;var u={value:a,getSnapshot:n};return c.queue=u,Gg(Rg.bind(null,s,u,e),[e]),s.flags|=2048,wr(9,{destroy:void 0},Ag.bind(null,s,u,a,n),null),a},useId:function(){var e=Wn(),n=Zt.identifierPrefix;if(St){var a=Zi,s=Yi;a=(s&~(1<<32-Xe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=gc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=kS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ef,useFormState:zg,useActionState:zg,useOptimistic:function(e){var n=Wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=tf.bind(null,gt,!0,a),a.dispatch=n,[e,n]},useMemoCache:kd,useCacheRefresh:function(){return Wn().memoizedState=KS.bind(null,gt)},useEffectEvent:function(e){var n=Wn(),a={impl:e};return n.memoizedState=a,function(){if((zt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},s0={readContext:Un,use:_c,useCallback:Wg,useContext:Un,useEffect:Qd,useImperativeHandle:Xg,useInsertionEffect:Vg,useLayoutEffect:qg,useMemo:Yg,useReducer:xc,useRef:Hg,useState:function(){return xc(Aa)},useDebugValue:Kd,useDeferredValue:function(e,n){var a=mn();return Zg(a,Yt.memoizedState,e,n)},useTransition:function(){var e=xc(Aa)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:Zo(e),n]},useSyncExternalStore:Eg,useId:$g,useHostTransitionStatus:ef,useFormState:Ig,useActionState:Ig,useOptimistic:function(e,n){var a=mn();return wg(a,Yt,e,n)},useMemoCache:kd,useCacheRefresh:e0,useEffectEvent:jg},$S={readContext:Un,use:_c,useCallback:Wg,useContext:Un,useEffect:Qd,useImperativeHandle:Xg,useInsertionEffect:Vg,useLayoutEffect:qg,useMemo:Yg,useReducer:Wd,useRef:Hg,useState:function(){return Wd(Aa)},useDebugValue:Kd,useDeferredValue:function(e,n){var a=mn();return Yt===null?Jd(a,e,n):Zg(a,Yt.memoizedState,e,n)},useTransition:function(){var e=Wd(Aa)[0],n=mn().memoizedState;return[typeof e=="boolean"?e:Zo(e),n]},useSyncExternalStore:Eg,useId:$g,useHostTransitionStatus:ef,useFormState:Bg,useActionState:Bg,useOptimistic:function(e,n){var a=mn();return Yt!==null?wg(a,Yt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:kd,useCacheRefresh:e0,useEffectEvent:jg};function nf(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:E({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var af={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=pi(),c=Ja(s);c.payload=n,a!=null&&(c.callback=a),n=$a(e,c,s),n!==null&&(ni(n,e,s),qo(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=pi(),c=Ja(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=$a(e,c,s),n!==null&&(ni(n,e,s),qo(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pi(),s=Ja(a);s.tag=2,n!=null&&(s.callback=n),n=$a(e,s,a),n!==null&&(ni(n,e,a),qo(n,e,a))}};function r0(e,n,a,s,c,u,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,u,v):n.prototype&&n.prototype.isPureReactComponent?!zo(a,s)||!zo(c,u):!0}function o0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&af.enqueueReplaceState(n,n.state,null)}function ks(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=E({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function l0(e){Kl(e)}function c0(e){console.error(e)}function u0(e){Kl(e)}function Ec(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function d0(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function sf(e,n,a){return a=Ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Ec(e,n)},a}function f0(e){return e=Ja(e),e.tag=3,e}function h0(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var u=s.value;e.payload=function(){return c(u)},e.callback=function(){d0(n,a,s)}}var v=a.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){d0(n,a,s),typeof c!="function"&&(os===null?os=new Set([this]):os.add(this));var R=s.stack;this.componentDidCatch(s.value,{componentStack:R!==null?R:""})})}function eM(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Is(n,a,c,!0),a=On.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Gn===null?kc():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===uc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Vf(e,s,c)),!1;case 22:return a.flags|=65536,s===uc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Vf(e,s,c)),!1}throw Error(r(435,a.tag))}return Vf(e,s,c),kc(),!1}if(St)return n=On.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==Ed&&(e=Error(r(422),{cause:s}),Bo(Ei(e,a)))):(s!==Ed&&(n=Error(r(423),{cause:s}),Bo(Ei(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Ei(s,a),c=sf(e.stateNode,s,c),Od(e,c),fn!==4&&(fn=2)),!1;var u=Error(r(520),{cause:s});if(u=Ei(u,a),al===null?al=[u]:al.push(u),fn!==4&&(fn=2),n===null)return!0;s=Ei(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=sf(a.stateNode,s,e),Od(a,e),!1;case 1:if(n=a.type,u=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||u!==null&&typeof u.componentDidCatch=="function"&&(os===null||!os.has(u))))return a.flags|=65536,c&=-c,a.lanes|=c,c=f0(c),h0(c,e,a,s),Od(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var rf=Error(r(461)),_n=!1;function Mn(e,n,a,s){n.child=e===null?vg(n,null,a,s):Vs(n,e.child,a,s)}function p0(e,n,a,s,c){a=a.render;var u=n.ref;if("ref"in s){var v={};for(var R in s)R!=="ref"&&(v[R]=s[R])}else v=s;return Fs(n),s=Gd(e,n,a,v,u,c),R=jd(),e!==null&&!_n?(Vd(e,n,c),Ra(e,n,c)):(St&&R&&ic(n),n.flags|=1,Mn(e,n,s,c),n.child)}function m0(e,n,a,s,c){if(e===null){var u=a.type;return typeof u=="function"&&!yd(u)&&u.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=u,g0(e,n,u,s,c)):(e=tc(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(u=e.child,!pf(e,c)){var v=u.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(v,s)&&e.ref===n.ref)return Ra(e,n,c)}return n.flags|=1,e=Sa(u,s),e.ref=n.ref,e.return=n,n.child=e}function g0(e,n,a,s,c){if(e!==null){var u=e.memoizedProps;if(zo(u,s)&&e.ref===n.ref)if(_n=!1,n.pendingProps=s=u,pf(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Ra(e,n,c)}return of(e,n,a,s,c)}function v0(e,n,a,s){var c=s.children,u=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(u=u!==null?u.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~u}else s=0,n.child=null;return _0(e,n,u,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&lc(n,u!==null?u.cachePool:null),u!==null?yg(n,u):zd(),Sg(n);else return s=n.lanes=536870912,_0(e,n,u!==null?u.baseLanes|a:a,a,s)}else u!==null?(lc(n,u.cachePool),yg(n,u),ns(),n.memoizedState=null):(e!==null&&lc(n,null),zd(),ns());return Mn(e,n,c,a),n.child}function Ko(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _0(e,n,a,s,c){var u=wd();return u=u===null?null:{parent:gn._currentValue,pool:u},n.memoizedState={baseLanes:a,cachePool:u},e!==null&&lc(n,null),zd(),Sg(n),e!==null&&Is(e,n,s,!0),n.childLanes=c,null}function Tc(e,n){return n=Ac({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function x0(e,n,a){return Vs(n,e.child,null,a),e=Tc(n,n.pendingProps),e.flags|=2,ui(n),n.memoizedState=null,e}function tM(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(St){if(s.mode==="hidden")return e=Tc(n,s),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ko(null,e);if(Fd(n),(e=Kt)?(e=kv(e,Ri),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=ng(e),a.return=n,n.child=a,An=n,Kt=null)):e=null,e===null)throw Ya(n);return n.lanes=536870912,null}return Tc(n,s)}var u=e.memoizedState;if(u!==null){var v=u.dehydrated;if(Fd(n),c)if(n.flags&256)n.flags&=-257,n=x0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(_n||Is(e,n,a,!1),c=(a&e.childLanes)!==0,_n||c){if(es.current===null){if(s=Zt,s!==null&&(v=Va(s,a),v!==0&&v!==u.retryLane))throw u.retryLane=v,Us(e,v),ni(s,e,v),rf;kc()}n=x0(e,n,a)}else e=u.treeContext,Kt=Ni(v.nextSibling),An=n,St=!0,Wa=null,Ri=!1,e!==null&&sg(n,e),n=Tc(n,s),n.flags|=134221824;return n}return e=Sa(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function of(e,n,a,s,c){return Fs(n),a=Gd(e,n,a,s,void 0,c),s=jd(),e!==null&&!_n?(Vd(e,n,c),Ra(e,n,c)):(St&&s&&ic(n),n.flags|=1,Mn(e,n,a,c),n.child)}function y0(e,n,a,s,c,u){return Fs(n),n.updateQueue=null,a=bg(n,s,a,c),Mg(e),s=jd(),e!==null&&!_n?(Vd(e,n,u),Ra(e,n,u)):(St&&s&&ic(n),n.flags|=1,Mn(e,n,a,u),n.child)}function S0(e,n,a,s,c){if(Fs(n),n.stateNode===null){var u=Sr,v=a.contextType;typeof v=="object"&&v!==null&&(u=Un(v)),u=new a(s,u),n.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,u.updater=af,n.stateNode=u,u._reactInternals=n,u=n.stateNode,u.props=s,u.state=n.memoizedState,u.refs={},Ld(n),v=a.contextType,u.context=typeof v=="object"&&v!==null?Un(v):Sr,u.state=n.memoizedState,v=a.getDerivedStateFromProps,typeof v=="function"&&(nf(n,a,v,s),u.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(v=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),v!==u.state&&af.enqueueReplaceState(u,u.state,null),Xo(n,s,u,c),ko(),u.state=n.memoizedState),typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){u=n.stateNode;var R=n.memoizedProps,z=ks(a,R);u.props=z;var Q=u.context,le=a.contextType;v=Sr,typeof le=="object"&&le!==null&&(v=Un(le));var Se=a.getDerivedStateFromProps;le=typeof Se=="function"||typeof u.getSnapshotBeforeUpdate=="function",R=n.pendingProps!==R,le||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(R||Q!==v)&&o0(n,u,s,v),Ka=!1;var Y=n.memoizedState;u.state=Y,Xo(n,s,u,c),ko(),Q=n.memoizedState,R||Y!==Q||Ka?(typeof Se=="function"&&(nf(n,a,Se,s),Q=n.memoizedState),(z=Ka||r0(n,a,z,s,Y,Q,v))?(le||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount()),typeof u.componentDidMount=="function"&&(n.flags|=4194308)):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),u.props=s,u.state=Q,u.context=v,s=z):(typeof u.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{u=n.stateNode,Ud(e,n),v=n.memoizedProps,le=ks(a,v),u.props=le,Se=n.pendingProps,Y=u.context,Q=a.contextType,z=Sr,typeof Q=="object"&&Q!==null&&(z=Un(Q)),R=a.getDerivedStateFromProps,(Q=typeof R=="function"||typeof u.getSnapshotBeforeUpdate=="function")||typeof u.UNSAFE_componentWillReceiveProps!="function"&&typeof u.componentWillReceiveProps!="function"||(v!==Se||Y!==z)&&o0(n,u,s,z),Ka=!1,Y=n.memoizedState,u.state=Y,Xo(n,s,u,c),ko();var re=n.memoizedState;v!==Se||Y!==re||Ka||e!==null&&e.dependencies!==null&&rc(e.dependencies)?(typeof R=="function"&&(nf(n,a,R,s),re=n.memoizedState),(le=Ka||r0(n,a,le,s,Y,re,z)||e!==null&&e.dependencies!==null&&rc(e.dependencies))?(Q||typeof u.UNSAFE_componentWillUpdate!="function"&&typeof u.componentWillUpdate!="function"||(typeof u.componentWillUpdate=="function"&&u.componentWillUpdate(s,re,z),typeof u.UNSAFE_componentWillUpdate=="function"&&u.UNSAFE_componentWillUpdate(s,re,z)),typeof u.componentDidUpdate=="function"&&(n.flags|=4),typeof u.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof u.componentDidUpdate!="function"||v===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=re),u.props=s,u.state=re,u.context=z,s=le):(typeof u.componentDidUpdate!="function"||v===e.memoizedProps&&Y===e.memoizedState||(n.flags|=4),typeof u.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&Y===e.memoizedState||(n.flags|=1024),s=!1)}return u=s,Dr(e,n),s=(n.flags&128)!==0,u||s?(u=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:u.render(),n.flags|=1,e!==null&&s?(n.child=Vs(n,e.child,null,c),n.child=Vs(n,null,a,c)):Mn(e,n,a,c),n.memoizedState=u.state,e=n.child):e=Ra(e,n,c),e}function M0(e,n,a,s){return Ps(),n.flags|=256,Mn(e,n,a,s),n.child}var lf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(e){return{baseLanes:e,cachePool:dg()}}function uf(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function b0(e,n,a){var s=n.pendingProps,c=!1,u=(n.flags&128)!==0,v;if((v=u)||(v=e!==null&&e.memoizedState===null?!1:(Pn.current&2)!==0),v&&(c=!0,n.flags&=-129),v=(n.flags&32)!==0,n.flags&=-33,e===null){if(St){if(c?ts(n):ns(),(e=Kt)?(e=kv(e,Ri),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Xa!==null?{id:Yi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=ng(e),a.return=n,n.child=a,An=n,Kt=null)):e=null,e===null)throw Ya(n);return ch(e)?n.lanes=32:n.lanes=536870912,null}return u=s.children,s=s.fallback,c?(ns(),c=n.mode,u=Ac({mode:"hidden",children:u},c),s=Os(s,c,a,null),u.return=n,s.return=n,u.sibling=s,n.child=u,s=n.child,s.memoizedState=cf(a),s.childLanes=uf(e,v,a),n.memoizedState=lf,Ko(null,s)):(ts(n),df(n,u))}var R=e.memoizedState;if(R!==null){var z=R.dehydrated;if(z!==null)return nM(e,n,u,v,s,z,R,a)}return c?(ns(),c=s.fallback,u=n.mode,R=e.child,z=R.sibling,s=Sa(R,{mode:"hidden",children:s.children}),s.subtreeFlags=R.subtreeFlags&1206910976,z!==null?c=Sa(z,c):(c=Os(c,u,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,Ko(null,s),s=n.child,c=e.child.memoizedState,c===null?c=cf(a):(u=c.cachePool,u!==null?(R=gn._currentValue,u=u.parent!==R?{parent:R,pool:R}:u):u=dg(),c={baseLanes:c.baseLanes|a,cachePool:u}),s.memoizedState=c,s.childLanes=uf(e,v,a),n.memoizedState=lf,Ko(e.child,s)):(ts(n),a=e.child,e=a.sibling,a=Sa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(v=n.deletions,v===null?(n.deletions=[e],n.flags|=16):v.push(e)),n.child=a,n.memoizedState=null,a)}function df(e,n){return n=Ac({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ac(e,n){return e=Jn(22,e,null,n),e.lanes=0,e}function Rc(e,n,a){return Vs(n,e.child,null,a),e=df(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function nM(e,n,a,s,c,u,v,R){if(a)return n.flags&256?(ts(n),n.flags&=-257,Rc(e,n,R)):n.memoizedState!==null?(ns(),n.child=e.child,n.flags|=128,null):(ns(),u=c.fallback,v=n.mode,c=Ac({mode:"visible",children:c.children},v),u=Os(u,v,R,null),u.flags|=2,c.return=n,u.return=n,c.sibling=u,n.child=c,Vs(n,e.child,null,R),c=n.child,c.memoizedState=cf(R),c.childLanes=uf(e,s,R),n.memoizedState=lf,Ko(null,c));if(ts(n),ch(u)){if(s=u.nextSibling&&u.nextSibling.dataset,s)var z=s.dgst;return s=z,s!==""&&(c=Error(r(419)),c.stack="",c.digest=s,Bo({value:c,source:null,stack:null})),Rc(e,n,R)}if(_n||Is(e,n,R,!1),s=(R&e.childLanes)!==0,_n||s){if(es.current!==null)return Rc(e,n,R);if(s=Zt,s!==null&&(c=Va(s,R),c!==0&&c!==v.retryLane))throw v.retryLane=c,Us(e,c),ni(s,e,c),rf;return lh(u)||kc(),Rc(e,n,R)}return lh(u)?(n.flags|=192,n.child=e.child,null):(e=v.treeContext,Kt=Ni(u.nextSibling),An=n,St=!0,Wa=null,Ri=!1,e!==null&&sg(n,e),n=df(n,c.children),n.flags|=134221824,n)}function E0(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),sc(e.return,n,a)}function T0(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&pc(a)===null&&(n=e),e=e.sibling}return n}function Cc(e,n,a,s,c,u){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:u}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=a,v.tailMode=c,v.treeForkCount=u)}function ff(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function hf(e,n,a){var s=n.pendingProps,c=s.revealOrder,u=s.tail;s=s.children;var v=Pn.current;if(n.flags&128)return Wo(n,v),null;var R=(v&2)!==0;if(R?(v=v&1|2,n.flags|=128):v&=1,Wo(n,v),c==="backwards"&&e!==null?(ff(e),Mn(e,n,s,a),ff(e)):Mn(e,n,s,a),s=St?Fo:0,!R&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&E0(e,a,n);else if(e.tag===19)E0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=T0(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,ff(n)),Cc(n,!0,c,null,u,s);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&pc(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Cc(n,!0,a,null,u,s);break;case"together":Cc(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=T0(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Cc(n,!1,c,a,u,s)}return n.child}function A0(e,n,a){var s=n.pendingProps;return Za(n,n.type,s.value),Mn(e,n,s.children,a),n.child}function Ra(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),rs|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Is(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Sa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Sa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function pf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&rc(e)))}function iM(e,n,a){switch(n.tag){case 3:Dn(n,n.stateNode.containerInfo),Za(n,gn,e.memoizedState.cache),Ps();break;case 27:case 5:Hn(n);break;case 4:Dn(n,n.stateNode.containerInfo);break;case 10:Za(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Fd(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return ts(n),n.flags|=128,null;s=Is(e,n,a,!1);var c=n.child.childLanes;return s||(a&c)!==0?b0(e,n,a):(ts(n),e=Ra(e,n,a),e!==null?e.sibling:null)}ts(n);break;case 19:if(n.flags&128)return hf(e,n,a);if(c=(e.flags&128)!==0,s=(a&n.childLanes)!==0,s||(Is(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return hf(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Wo(n,Pn.current),s)break;return null;case 22:return n.lanes=0,v0(e,n,a,n.pendingProps);case 24:Za(n,gn,e.memoizedState.cache)}return Ra(e,n,a)}function R0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!pf(e,a)&&(n.flags&128)===0)return _n=!1,iM(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,St&&(n.flags&1048576)!==0&&ag(n,Fo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=Gs(n.elementType),n.type=e,typeof e=="function")yd(e)?(s=ks(e,s),n.tag=1,n=S0(null,n,e,s,a)):(n.tag=0,n=of(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===X){n.tag=11,n=p0(null,n,e,s,a);break e}else if(c===te){n.tag=14,n=m0(null,n,e,s,a);break e}else if(c===ee){n.tag=10,n.type=e,n=A0(null,n,a);break e}}throw n=oe(e)||e,Error(r(306,n,""))}}return n;case 0:return of(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=ks(s,n.pendingProps),S0(e,n,s,c,a);case 3:e:{if(Dn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var u=n.memoizedState;c=u.element,Ud(e,n),Xo(n,s,null,a);var v=n.memoizedState;if(s=v.cache,Za(n,gn,s),s!==u.cache&&Rd(n,[gn],a,!0),ko(),s=v.element,u.isDehydrated)if(u={element:s,isDehydrated:!1,cache:v.cache},n.updateQueue.baseState=u,n.memoizedState=u,n.flags&256){n=M0(e,n,s,a);break e}else if(s!==c){c=Ei(Error(r(424)),n),Bo(c),n=M0(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Kt=Ni(e.firstChild),An=n,St=!0,Wa=null,Ri=!0,a=vg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Ps(),s===c){n=Ra(e,n,a);break e}Mn(e,n,s,a)}n=n.child}return n;case 26:return Dr(e,n),e===null?(a=Jv(n.type,null,n.pendingProps,null))?n.memoizedState=a:St||(n.stateNode=Dv(n.type,n.pendingProps,pn.current,n)):n.memoizedState=Jv(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Hn(n),e===null&&St&&(s=n.stateNode=Yv(n.type,n.pendingProps,pn.current),An=n,Ri=!0,c=Kt,us(n.type)?(uh=c,Kt=Ni(s.firstChild)):Kt=c),Mn(e,n,n.pendingProps.children,a),Dr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&St&&((c=s=Kt)&&(s=KM(s,n.type,n.pendingProps,Ri),s!==null?(n.stateNode=s,An=n,Kt=Ni(s.firstChild),Ri=!1,c=!0):c=!1),c||Ya(n)),Hn(n),c=n.type,u=n.pendingProps,v=e!==null?e.memoizedProps:null,s=u.children,th(c,u)?s=null:v!==null&&th(c,v)&&(n.flags|=32),n.memoizedState!==null&&(c=Gd(e,n,XS,null,null,a),Zr._currentValue=c),Dr(e,n),Mn(e,n,s,a),n.child;case 6:return e===null&&St&&((e=a=Kt)&&(a=JM(a,n.pendingProps,Ri),a!==null?(n.stateNode=a,An=n,Kt=null,e=!0):e=!1),e||Ya(n)),null;case 13:return b0(e,n,a);case 4:return Dn(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=Vs(n,null,s,a):Mn(e,n,s,a),n.child;case 11:return p0(e,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Dr(e,n),Mn(e,n,s,a),n.child;case 8:return Mn(e,n,n.pendingProps.children,a),n.child;case 12:return Mn(e,n,n.pendingProps.children,a),n.child;case 10:return A0(e,n,a);case 9:return c=n.type._context,s=n.pendingProps.children,Fs(n),c=Un(c),s=s(c),n.flags|=1,Mn(e,n,s,a),n.child;case 14:return m0(e,n,n.type,n.pendingProps,a);case 15:return g0(e,n,n.type,n.pendingProps,a);case 19:return hf(e,n,a);case 31:return tM(e,n,a);case 22:return v0(e,n,a,n.pendingProps);case 24:return Fs(n),s=Un(gn),e===null?(c=wd(),c===null&&(c=Zt,u=Cd(),c.pooledCache=u,u.refCount++,u!==null&&(c.pooledCacheLanes|=a),c=u),n.memoizedState={parent:s,cache:c},Ld(n),Za(n,gn,c)):((e.lanes&a)!==0&&(Ud(e,n),Xo(n,null,null,a),ko()),c=e.memoizedState,u=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Za(n,gn,s)):(s=u.cache,Za(n,gn,s),s!==c.cache&&Rd(n,[gn],a,!0))),Mn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=e===null?18882560:18874368:St&&ic(n),e!==null&&e.memoizedProps.name!==s.name?n.flags|=4194816:Dr(e,n),Mn(e,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ca(e){e.flags|=4}function mf(e,n,a,s,c){var u;if((u=(e.mode&32)!==0)&&(u=a===null?n_(n,s):n_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),u){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(lv())e.flags|=8192;else throw js=uc,Dd}else e.flags&=-16777217}function C0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!i_(n))if(lv())e.flags|=8192;else throw js=uc,Dd}function Nc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?cr():536870912,e.lanes|=n,zr|=n)}function Jo(e,n){if(!St)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function Jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&1206910976,s|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function aM(e,n,a){var s=n.pendingProps;switch(bd(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Jt(n),null;case 1:return Jt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ea(gn),W(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Er(n)?Ca(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Td())),Jt(n),null;case 26:var c=n.type,u=n.memoizedState;return e===null?(Ca(n),u!==null?(Jt(n),C0(n,u)):(Jt(n),mf(n,c,null,s,a))):u?u!==e.memoizedState?(Ca(n),Jt(n),C0(n,u)):(Jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Ca(n),Jt(n),mf(n,c,e,s,a)),null;case 27:if(Ht(n),a=pn.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Jt(n),n.subtreeFlags&=-33554433,null}e=hn.current,Er(n)?rg(n):(e=Yv(c,s,a),n.stateNode=e,Ca(n))}return Jt(n),n.subtreeFlags&=-33554433,null;case 5:if(Ht(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Ca(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Jt(n),n.subtreeFlags&=-33554433,null}if(u=hn.current,Er(n))rg(n);else{var v=cl(pn.current);switch(u){case 1:u=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:u=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":u=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":u=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":u=v.createElement("div"),u.innerHTML="<script><\/script>",u=u.removeChild(u.firstChild);break;case"select":u=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?u.multiple=!0:s.size&&(u.size=s.size);break;default:u=typeof s.is=="string"?v.createElement(c,{is:s.is}):v.createElement(c)}}u[Sn]=n,u[Ln]=s;e:for(v=n.child;v!==null;){if(v.tag===5||v.tag===6)u.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===n)break e;for(;v.sibling===null;){if(v.return===null||v.return===n)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}n.stateNode=u;e:switch(In(u,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Ca(n)}}return Jt(n),n.subtreeFlags&=-33554433,mf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Ca(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=pn.current,Er(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=An,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[Sn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Rv(e.nodeValue,a)),e||Ya(n,!0)}else e=cl(e).createTextNode(s),e[Sn]=n,n.stateNode=e}return Jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Er(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[Sn]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),e=!1}else a=Td(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Jt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Er(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[Sn]=n}else Ps(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Jt(n),c=!1}else c=Td(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Nc(n,n.updateQueue),Jt(n),null);case 4:return W(),e===null&&Qf(n.stateNode.containerInfo),n.flags|=67108864,Jt(n),null;case 10:return Ea(n.type),Jt(n),null;case 19:if(Bd(n),s=n.memoizedState,s===null)return Jt(n),null;if(c=(n.flags&128)!==0,u=s.rendering,u===null)if(c)Jo(s,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(u=pc(e),u!==null){for(n.flags|=128,Jo(s,!1),e=u.updateQueue,n.updateQueue=e,Nc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)tg(a,e),a=a.sibling;return Wo(n,Pn.current&1|2),St&&Ma(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&he()>Gc&&(n.flags|=128,c=!0,Jo(s,!1),n.lanes=4194304)}else{if(!c)if(e=pc(u),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Nc(n,e),Jo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!u.alternate&&!St)return Jt(n),null}else 2*he()-s.renderingStartTime>Gc&&a!==536870912&&(n.flags|=128,c=!0,Jo(s,!1),n.lanes=4194304);s.isBackwards?(u.sibling=n.child,n.child=u):(e=s.last,e!==null?e.sibling=u:n.child=u,s.last=u)}if(s.tail!==null){e=s.tail;e:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break e}a=a.sibling}a=!0}return s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,u=Pn.current,u=c?u&1|2:u&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||St?Wo(n,u):(a=u,it(On,n),it(Pn,a),Gn===null&&(Gn=n)),St&&Ma(n,s.treeForkCount),e}return Jt(n),null;case 22:case 23:return ui(n),Id(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Jt(n),n.subtreeFlags&6&&(n.flags|=8192)):Jt(n),a=n.updateQueue,a!==null&&Nc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Ut(Hs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ea(gn),Jt(n),null;case 25:return null;case 30:return n.flags|=33554432,Jt(n),null}throw Error(r(156,n.tag))}function sM(e,n){switch(bd(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ea(gn),W(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ht(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(r(340));Ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ui(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ps()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Bd(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return W(),null;case 10:return Ea(n.type),null;case 22:case 23:return ui(n),Id(),e!==null&&Ut(Hs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ea(gn),null;case 25:return null;default:return null}}function N0(e,n){switch(bd(n),n.tag){case 3:Ea(gn),W();break;case 26:case 27:case 5:Ht(n);break;case 4:W();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:Bd(n);break;case 10:Ea(n.type);break;case 22:case 23:ui(n),Id(),e!==null&&Ut(Hs);break;case 24:Ea(gn)}}function $o(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var u=a.create,v=a.inst;s=u(),v.destroy=s}a=a.next}while(a!==c)}}catch(R){Vt(n,n.return,R)}}function is(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var u=c.next;s=u;do{if((s.tag&e)===e){var v=s.inst,R=v.destroy;if(R!==void 0){v.destroy=void 0,c=n;var z=a,Q=R;try{Q()}catch(le){Vt(c,z,le)}}}s=s.next}while(s!==u)}}catch(le){Vt(n,n.return,le)}}function w0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{xg(n,a)}catch(s){Vt(e,e.return,s)}}}function D0(e,n,a){a.props=ks(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Vt(e,n,s)}}function Qi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:var c=e.stateNode,u=xa(e.memoizedProps,c);(c.ref===null||c.ref.name!==u)&&(c.ref=Fv(u)),s=c.ref;break;case 7:if(e.stateNode===null){var v=new mi(e);_(e.child,!1,ZM,v,void 0,void 0),e.stateNode=v}s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(R){Vt(e,n,R)}}function zn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Vt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Vt(e,n,c)}else a.current=null}function wc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)qv(e.stateNode,n[a])}function L0(e){for(var n=e.return;n!==null&&(vf(n)&&qv(e.stateNode,n.stateNode),!gf(n));)n=n.return}function el(e){for(var n=e.return;n!==null&&(vf(n)&&QM(e.stateNode,n.stateNode),!gf(n));)n=n.return}function gf(e){return e.tag===5||e.tag===3||e.tag===27}function vf(e){return e&&e.tag===7&&e.stateNode!==null}function _f(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Vt(e,e.return,c)}}function xf(e,n,a){try{var s=e.stateNode;DM(s,e.type,a,n),s[Ln]=n}catch(c){Vt(e,e.return,c)}}function U0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&us(e.type)||e.tag===4}function yf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||U0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&us(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sf(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),wc(e,s),ot=!0;else if(c!==4&&(c===27&&(wc(e,s),s=null,us(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Sf(e,n,a,s),e=e.sibling;e!==null;)Sf(e,n,a,s),e=e.sibling}function Dc(e,n,a,s){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),wc(e,s),ot=!0;else if(c!==4&&(c===27&&(wc(e,s),s=null,us(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Dc(e,n,a,s),e=e.sibling;e!==null;)Dc(e,n,a,s),e=e.sibling}function O0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);In(n,s,a),n[Sn]=e,n[Ln]=a}catch(u){Vt(e,e.return,u)}}var Lc=!1,di=null;function P0(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Lc=!0)}var Ki=null;function z0(){var e=Ki;return Ki=null,e}var $n=0;function Lr(e,n,a,s,c){return $n=0,I0(e.child,n,a,s,c)}function I0(e,n,a,s,c){for(var u=!1;e!==null;){if(e.tag===5){var v=e.stateNode;if(s!==null){var R=ah(v);s.push(R),R.view&&(u=!0)}else u||ah(v).view&&(u=!0);Lc=!0,zv(v,$n===0?n:n+"_"+$n,a),$n++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||I0(e.child,n,a,s,c)&&(u=!0));e=e.sibling}return u}function Ji(e,n){for(;e!==null;)e.tag===5?Iv(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Ji(e.child,n)),e=e.sibling}function Uc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Uc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ya(n.default,n.share),n!=="none"&&(Lr(e,a,n,null,!1)||Ji(e.child,!1))}e=e.sibling}}function Mf(e,n){if(e.tag===30){var a=e.stateNode,s=e.memoizedProps,c=xa(s,a),u=ya(s.default,a.paired?s.share:s.enter);u!=="none"?Lr(e,c,u,null,!1)?(Uc(e),a.paired||n||Hr(e,s.onEnter)):Ji(e.child,!1):Uc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Mf(e,n),e=e.sibling;else Uc(e)}function bf(e){if(di!==null&&di.size!==0){var n=di;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var c=n.get(s);if(c!==void 0){var u=ya(a.default,a.share);if(u!=="none"&&(Lr(e,s,u,null,!1)?(u=e.stateNode,c.paired=u,u.paired=c,Hr(e,a.onShare)):Ji(e.child,!1)),n.delete(s),n.size===0)break}}}bf(e)}e=e.sibling}}}function Ef(e){if(e.tag===30){var n=e.memoizedProps,a=xa(n,e.stateNode),s=di!==null?di.get(a):void 0,c=ya(n.default,s!==void 0?n.share:n.exit);c!=="none"&&(Lr(e,a,c,null,!1)?s!==void 0?(c=e.stateNode,s.paired=c,c.paired=s,di.delete(a),Hr(e,n.onShare)):Hr(e,n.onExit):Ji(e.child,!1)),di!==null&&bf(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Ef(e),e=e.sibling;else di!==null&&bf(e)}function F0(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=xa(n,e.stateNode);n=ya(n.default,n.update),e.flags&=-5,n!=="none"&&Lr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&F0(e);e=e.sibling}}function Tf(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Ji(e.child,!1))}Tf(e)}e=e.sibling}}function Oc(e){if(e.tag===30)e.stateNode.paired=null,Ji(e.child,!1),Tf(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Oc(e),e=e.sibling;else Tf(e)}function B0(e){for(e=e.child;e!==null;)e.tag===30?Ji(e.child,!1):(e.subtreeFlags&33554432)!==0&&B0(e),e=e.sibling}function Af(e,n,a,s,c,u,v){for(var R=!1;n!==null;){if(n.tag===5){var z=n.stateNode;if(u!==null&&$n<u.length){var Q=u[$n],le=ah(z);(Q.view||le.view)&&(R=!0);var Se;if(Se=(e.flags&4)===0)if(le.clip)Se=!0;else{Se=Q.rect;var Y=le.rect;Se=Se.y!==Y.y||Se.x!==Y.x||Se.height!==Y.height||Se.width!==Y.width}Se&&(e.flags|=4),le.abs?le=!Q.abs:(Q=Q.rect,le=le.rect,le=Q.height!==le.height||Q.width!==le.width),le&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&zv(z,$n===0?a:a+"_"+$n,c),R&&(e.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(z,$n===0?s:s+"_"+$n,n.memoizedProps)),$n++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&v?e.flags|=n.flags&32:Af(e,n.child,a,s,c,u,v)&&(R=!0));n=n.sibling}return R}function H0(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,s=e.stateNode,c=xa(a,s),u=ya(a.default,a.update),v;v=e.memoizedState,e.memoizedState=null,s=e;var R=e.child;$n=0,c=Af(s,R,c,c,u,v,!1),(e.flags&4)!==0&&c&&Hr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&H0(e);e=e.sibling}}var Rn=!1,Bt=!1,$i=!1,Rf=!1,G0=typeof WeakSet=="function"?WeakSet:Set,Cn=null,ea=!1,tl=!1,Pc=!1,Cf=!1;function rM(e,n,a){if(e=e.containerInfo,$f=Qr,e=km(e),hd(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var u=c.anchorOffset,v=c.focusNode;c=c.focusOffset;try{s.nodeType,v.nodeType}catch{s=null;break e}var R=0,z=-1,Q=-1,le=0,Se=0,Y=e,re=null;t:for(;;){for(var je;Y!==s||u!==0&&Y.nodeType!==3||(z=R+u),Y!==v||c!==0&&Y.nodeType!==3||(Q=R+c),Y.nodeType===3&&(R+=Y.nodeValue.length),(je=Y.firstChild)!==null;)re=Y,Y=je;for(;;){if(Y===e)break t;if(re===s&&++le===u&&(z=R),re===v&&++Se===c&&(Q=R),(je=Y.nextSibling)!==null)break;Y=re,re=Y.parentNode}Y=je}s=z===-1||Q===-1?null:{start:z,end:Q}}else s=null}s=s||{start:0,end:0}}else s=null;for(eh={focusedElem:e,selectionRange:s},Qr=!1,a=(a&335544064)===a,Cn=n,n=a?9270:1024;Cn!==null;){if(e=Cn,a&&(s=e.deletions,s!==null))for(u=0;u<s.length;u++)a&&Ef(s[u]);if(e.alternate===null&&(e.flags&2)!==0)a&&P0(e),zc(a);else{if(e.tag===22){if(s=e.alternate,e.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Ef(s),zc(a);continue}else if(s!==null&&s.memoizedState!==null){a&&P0(e),zc(a);continue}}s=e.child,(e.subtreeFlags&n)!==0&&s!==null?(s.return=e,Cn=s):(a&&F0(e),zc(a))}}di=null}function zc(e){for(;Cn!==null;){var n=Cn,a=e,s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&s!==null){a=void 0,c=s.memoizedProps,s=s.memoizedState;var u=n.stateNode;try{var v=ks(n.type,c);a=u.getSnapshotBeforeUpdate(v,s),u.__reactInternalSnapshotBeforeUpdate=a}catch(R){Vt(n,n.return,R)}}break;case 3:if((c&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)oh(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":oh(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=xa(s.memoizedProps,s.stateNode),c=n.memoizedProps,c=ya(c.default,c.update),c!=="none"&&Lr(s,a,c,s.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Cn=s;break}Cn=n.return}}function j0(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ta(e,a),s&4&&$o(5,a);break;case 1:if(ta(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(v){Vt(a,a.return,v)}else{var c=ks(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(v){Vt(a,a.return,v)}}s&64&&w0(a),s&512&&Qi(a,a.return);break;case 3:if(ta(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xg(e,n)}catch(v){Vt(a,a.return,v)}}break;case 27:n===null&&s&4&&O0(a);case 26:case 5:ta(e,a),n===null&&s&4&&_f(a),s&512&&Qi(a,a.return);break;case 12:ta(e,a);break;case 31:ta(e,a),s&4&&X0(e,a);break;case 13:ta(e,a),s&4&&W0(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=_M.bind(null,a),$M(e,a))));break;case 22:if(s=a.memoizedState!==null||Rn,!s){var u=n!==null&&n.memoizedState!==null||Bt;n=Rn,c=Bt,Rn=s,(Bt=u)&&!c?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Fi(e,a,s)):ta(e,a),Rn=n,Bt=c}break;case 30:ta(e,a),s&512&&Qi(a,a.return);break;case 7:s&512&&Qi(a,a.return);default:ta(e,a)}}function Nf(e,n){for(e=e.child;e!==null;)V0(e,n),e=e.sibling}function V0(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var c=e.stateNode,u=e.memoizedProps.style,v=u!=null&&u.hasOwnProperty("display")?u.display:null;c.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(z){Vt(e,e.return,z)}wf(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,ot=!0}catch(z){Vt(e,e.return,z)}break;case 18:try{var R=e.stateNode;n?Pv(R,!0):Pv(e.stateNode,!1)}catch(z){Vt(e,e.return,z)}break;case 22:case 23:e.memoizedState===null&&Nf(e,n);break;default:Nf(e,n)}}function wf(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){e:{var a=e,s=n;switch(a.tag){case 4:V0(a,s);break e;case 22:a.memoizedState===null&&wf(a,s);break e;default:wf(a,s)}}e=e.sibling}}function q0(e){var n=e.alternate;n!==null&&(e.alternate=null,q0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Le(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,ei=!1;function zi(e,n,a){for(a=a.child;a!==null;)k0(e,n,a),a=a.sibling}function k0(e,n,a){if(nt&&typeof nt.onCommitFiberUnmount=="function")try{nt.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:Bt||zn(a,n),zi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Bt&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Bt||zn(a,n),el(a);var s=nn,c=ei;us(a.type)&&(nn=a.stateNode,ei=!1),zi(e,n,a),Zv(a.stateNode,a.type,a.memoizedProps),nn=s,ei=c;break;case 5:Bt||zn(a,n),el(a);case 6:if(a.tag===6&&el(a),s=nn,c=ei,nn=null,zi(e,n,a),nn=s,ei=c,nn!==null)if(ei)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode),ot=!0}catch(u){Vt(a,n,u)}else try{nn.removeChild(a.stateNode),ot=!0}catch(u){Vt(a,n,u)}break;case 18:nn!==null&&(ei?(e=nn,Ov(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Kr(e)):Ov(nn,a.stateNode));break;case 4:s=nn,c=ei,nn=a.stateNode.containerInfo,ei=!0,zi(e,n,a),nn=s,ei=c;break;case 0:case 11:case 14:case 15:is(2,a,n),Bt||is(4,a,n),zi(e,n,a);break;case 1:Bt||(zn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&D0(a,n,s)),zi(e,n,a);break;case 21:zi(e,n,a);break;case 22:Bt=(s=Bt)||a.memoizedState!==null,zi(e,n,a),Bt=s;break;case 30:zn(a,n),zi(e,n,a);break;case 7:Bt||zn(a,n),zi(e,n,a);break;default:zi(e,n,a)}}function X0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Kr(e)}catch(a){Vt(n,n.return,a)}}}function W0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Kr(e)}catch(a){Vt(n,n.return,a)}}function oM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new G0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new G0),n;default:throw Error(r(435,e.tag))}}function Ic(e,n){var a=oM(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=xM.bind(null,e,s);s.then(c,c)}})}function Yn(e,n,a){var s=n.deletions;if(s!==null)for(var c=0;c<s.length;c++){var u=s[c],v=e,R=n,z=R;e:for(;z!==null;){switch(z.tag){case 27:if(us(z.type)){nn=z.stateNode,ei=!1;break e}break;case 5:nn=z.stateNode,ei=!1;break e;case 3:case 4:nn=z.stateNode.containerInfo,ei=!0;break e}z=z.return}if(nn===null)throw Error(r(160));k0(v,R,u),nn=null,ei=!1,v=u.alternate,v!==null&&(v.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Y0(n,e,a),n=n.sibling}var Ii=null;function Y0(e,n,a){var s=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(s=e.updateQueue,s=s!==null?s.events:null,s!==null))for(var u=0;u<s.length;u++){var v=s[u];v.ref.impl=v.nextImpl}Yn(n,e,a),Zn(e),c&4&&(is(3,e,e.return),$o(3,e),is(5,e,e.return));break;case 1:Yn(n,e,a),Zn(e),c&512&&(Bt||s===null||zn(s,s.return)),c&64&&Rn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(u=Ii,Yn(n,e,a),Zn(e),c&512&&(Bt||s===null||zn(s,s.return)),c&4)if(c=s!==null?s.memoizedState:null,a=e.memoizedState,s===null)if(a===null)if(e.stateNode===null)if(Rn)e.stateNode=Dv(e.type,e.memoizedProps,n.containerInfo,e);else{e:{n=e.type,a=e.memoizedProps,c=u.ownerDocument||u;t:switch(n){case"title":s=c.getElementsByTagName("title")[0],(!s||s[De]||s[Sn]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=c.createElement(n),c.head.insertBefore(s,c.querySelector("head > title"))),In(s,n,a),s[Sn]=e,Fe(s),n=s;break e;case"link":if(u=t_("link","href",c).get(n+(a.href||""))){for(v=0;v<u.length;v++)if(s=u[v],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(v,1);break t}}s=c.createElement(n),In(s,n,a),c.head.appendChild(s);break;case"meta":if(u=t_("meta","content",c).get(n+(a.content||""))){for(v=0;v<u.length;v++)if(s=u[v],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(v,1);break t}}s=c.createElement(n),In(s,n,a),c.head.appendChild(s);break;default:throw Error(r(468,n))}s[Sn]=e,Fe(s),n=s}e.stateNode=n}else Rn||ph(u,e.type,e.stateNode);else e.stateNode=e_(u,a,e.memoizedProps);else c!==a?(c===null?(n=s.stateNode,n===null||Bt||n.parentNode.removeChild(n)):c.count--,a===null?Rn||ph(u,e.type,e.stateNode):e_(u,a,e.memoizedProps)):a===null&&e.stateNode!==null&&xf(e,e.memoizedProps,s.memoizedProps);break;case 27:Yn(n,e,a),Zn(e),c&512&&(Bt||s===null||zn(s,s.return)),s!==null&&c&4&&xf(e,e.memoizedProps,s.memoizedProps);break;case 5:if(u=$i,$i=!1,Yn(n,e,a),$i=u,Zn(e),c&512&&(Bt||s===null||zn(s,s.return)),e.flags&32){n=e.stateNode;try{pr(n,""),ot=!0}catch(le){Vt(e,e.return,le)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,xf(e,n,s!==null?s.memoizedProps:n)),c&1024&&(Rf=!0);break;case 6:if(Yn(n,e,a),Zn(e),c&4){if(e.stateNode===null)throw Error(r(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,ot=!0}catch(le){Vt(e,e.return,le)}}break;case 3:if(ot=!1,Jc=null,u=Ii,Ii=ul(n.containerInfo),Yn(n,e,a),Ii=u,Zn(e),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Kr(n.containerInfo)}catch(le){Vt(e,e.return,le)}Rf&&(Rf=!1,Z0(e)),ot=!1;break;case 4:c=$i,$i=Rn,s=ws(),u=Ii,Ii=ul(e.stateNode.containerInfo),Yn(n,e,a),Zn(e),Ii=u,ot&&tl&&(Pc=!0),ot=s,$i=c;break;case 12:Yn(n,e,a),Zn(e);break;case 31:Yn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ic(e,n)));break;case 13:Yn(n,e,a),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Hc=he()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ic(e,n)));break;case 22:u=e.memoizedState!==null,v=s!==null&&s.memoizedState!==null;var R=Rn,z=Bt,Q=$i;Rn=R||u,$i=Q||u,Bt=z||v,Yn(n,e,a),Bt=z,$i=Q,Rn=R,Zn(e),c&8192&&(n=e.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,!u||s===null||v||Rn||Bt||(n=v||Bt,a=Rn,s=Bt,Rn=u||Rn,Bt=n,as(e,2),Rn=a,Bt=s),!u&&$i||Nf(e,u)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Ic(e,a))));break;case 19:Yn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Ic(e,n)));break;case 30:c&512&&(Bt||s===null||zn(s,s.return)),c=ws(),u=tl,v=(a&335544064)===a,R=e.memoizedProps,tl=v&&ya(R.default,R.update)!=="none",Yn(n,e,a),Zn(e),v&&s!==null&&ot&&(e.flags|=4),tl=u,ot=c;break;case 21:break;case 7:c&512&&(Bt||s===null||zn(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=e);default:Yn(n,e,a),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(U0(s)){a=s;break}s=s.return}s=null;for(var c=e.return;c!==null;){if(vf(c)){var u=c.stateNode;s===null?s=[u]:s.push(u)}if(gf(c))break;c=c.return}var v=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var R=a.stateNode,z=yf(e);Dc(e,z,R,v);break;case 5:var Q=a.stateNode;a.flags&32&&(pr(Q,""),a.flags&=-33);var le=yf(e);Dc(e,le,Q,v);break;case 3:case 4:var Se=a.stateNode.containerInfo,Y=yf(e);Sf(e,Y,Se,v);break;default:throw Error(r(161))}}catch(re){Vt(e,e.return,re)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Z0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Z0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Qr=!0,n.reset(),Qr=!1),e=e.sibling}}function Ur(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Q0(n,e),n=n.sibling;else H0(n)}function Q0(e,n){var a=e.alternate;if(a===null)Mf(e,!1);else switch(e.tag){case 3:if(Cf=ea=!1,z0(),Ur(n,e),!ea&&!Pc){if(e=Ki,e!==null)for(var s=0;s<e.length;s+=3){a=e[s];var c=e[s+1];Iv(a,e[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Cf=!0}Ki=null;break;case 5:Ur(n,e);break;case 4:s=ea,ea=!1,Ur(n,e),ea&&(Pc=!0),ea=s;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Mf(e,!1):Ur(n,e));break;case 30:s=ea,c=z0(),ea=!1,Ur(n,e),ea&&(e.flags|=4);var u=e.memoizedProps,v=e.stateNode;n=xa(u,v),v=xa(a.memoizedProps,v);var R=ya(u.default,u.update);R==="none"?n=!1:(u=a.memoizedState,a.memoizedState=null,a=e.child,$n=0,n=Af(e,a,n,v,R,u,!0),$n!==(u===null?0:u.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Hr(e,e.memoizedProps.onUpdate),Ki=c):c!==null&&(c.push.apply(c,Ki),Ki=c),ea=(e.flags&32)!==0?!0:s;break;default:Ur(n,e)}}function ta(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)j0(e,n.alternate,n),n=n.sibling}function as(e,n){for(e=e.child;e!==null;){var a=e,s=n;switch(a.tag){case 0:case 11:case 14:case 15:is(4,a,a.return),as(a,s);break;case 1:zn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&D0(a,a.return,c),as(a,s);break;case 27:(s&2)!==0&&Zv(a.stateNode,a.type,a.memoizedProps);case 5:zn(a,a.return),a.tag!==5&&a.tag!==27||el(a),as(a,s);break;case 6:el(a);break;case 26:zn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Bt||c.parentNode.removeChild(c),as(a,s);break;case 22:a.memoizedState===null&&as(a,s);break;case 30:zn(a,a.return),as(a,s);break;case 7:zn(a,a.return);default:as(a,s)}e=e.sibling}}function Fi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,c=e,u=n,v=u.flags,R=(a&1)!==0;switch(u.tag){case 0:case 11:case 15:Fi(c,u,a),$o(4,u);break;case 1:if(Fi(c,u,a),s=u,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(le){Vt(s,s.return,le)}if(s=u,c=s.updateQueue,c!==null){var z=s.stateNode;try{var Q=c.shared.hiddenCallbacks;if(Q!==null)for(c.shared.hiddenCallbacks=null,c=0;c<Q.length;c++)_g(Q[c],z)}catch(le){Vt(s,s.return,le)}}R&&v&64&&w0(u),Qi(u,u.return);break;case 27:(a&2)!==0&&O0(u);case 5:u.tag!==5&&u.tag!==27||L0(u),Fi(c,u,a),R&&s===null&&v&4&&_f(u),Qi(u,u.return);break;case 6:L0(u);break;case 26:z=u.stateNode,u.memoizedState!==null||z===null||Rn||ph(ul(z.ownerDocument),u.type,z),Fi(c,u,a),R&&s===null&&v&4&&_f(u),Qi(u,u.return);break;case 12:Fi(c,u,a);break;case 31:Fi(c,u,a),R&&v&4&&X0(c,u);break;case 13:Fi(c,u,a),R&&v&4&&W0(c,u);break;case 22:u.memoizedState===null&&Fi(c,u,a),Qi(u,u.return);break;case 30:Fi(c,u,a),Qi(u,u.return);break;case 7:Qi(u,u.return);default:Fi(c,u,a)}n=n.sibling}}function Df(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ho(a))}function Lf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ho(e))}function Ci(e,n,a,s){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)K0(e,n,a,s),n=n.sibling;else c&&B0(n)}function K0(e,n,a,s){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Oc(n);var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,s),u&2048&&$o(9,n);break;case 1:Ci(e,n,a,s);break;case 3:Ci(e,n,a,s),c&&Cf&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),u&2048&&(u=null,n.alternate!==null&&(u=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==u&&(n.refCount++,u!=null&&Ho(u)));break;case 12:if(u&2048){Ci(e,n,a,s),u=n.stateNode;try{var v=n.memoizedProps,R=v.id,z=v.onPostCommit;typeof z=="function"&&z(R,n.alternate===null?"mount":"update",u.passiveEffectDuration,-0)}catch(Q){Vt(n,n.return,Q)}}else Ci(e,n,a,s);break;case 31:Ci(e,n,a,s);break;case 13:Ci(e,n,a,s);break;case 23:break;case 22:v=n.stateNode,R=n.alternate,n.memoizedState!==null?(c&&R!==null&&R.memoizedState===null&&Oc(R),v._visibility&2?Ci(e,n,a,s):nl(e,n)):(c&&R!==null&&R.memoizedState!==null&&Oc(n),v._visibility&2?Ci(e,n,a,s):(v._visibility|=2,Or(e,n,a,s,(n.subtreeFlags&10256)!==0||!1))),u&2048&&Df(R,n);break;case 24:Ci(e,n,a,s),u&2048&&Lf(n.alternate,n);break;case 30:c&&(u=n.alternate,u!==null&&(Ji(u.child,!0),Ji(n.child,!0))),Ci(e,n,a,s);break;default:Ci(e,n,a,s)}}function Or(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var u=e,v=n,R=a,z=s,Q=v.flags;switch(v.tag){case 0:case 11:case 15:Or(u,v,R,z,c),$o(8,v);break;case 23:break;case 22:var le=v.stateNode;v.memoizedState!==null?le._visibility&2?Or(u,v,R,z,c):nl(u,v):(le._visibility|=2,Or(u,v,R,z,c)),c&&Q&2048&&Df(v.alternate,v);break;case 24:Or(u,v,R,z,c),c&&Q&2048&&Lf(v.alternate,v);break;default:Or(u,v,R,z,c)}n=n.sibling}}function nl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:nl(a,s),c&2048&&Df(s.alternate,s);break;case 24:nl(a,s),c&2048&&Lf(s.alternate,s);break;default:nl(a,s)}n=n.sibling}}var Xs=8192;function Ws(e,n,a){if(e.subtreeFlags&Xs)for(e=e.child;e!==null;)J0(e,n,a),e=e.sibling}function J0(e,n,a){switch(e.tag){case 26:Ws(e,n,a),e.flags&Xs&&(e.memoizedState!==null?hb(a,Ii,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&s_(a,e)));break;case 5:Ws(e,n,a),e.flags&Xs&&(e=e.stateNode,(n&335544128)===n&&s_(a,e));break;case 3:case 4:var s=Ii;Ii=ul(e.stateNode.containerInfo),Ws(e,n,a),Ii=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=Xs,Xs=16777216,Ws(e,n,a),Xs=s):Ws(e,n,a));break;case 30:if((e.flags&Xs)!==0&&(s=e.memoizedProps.name,s!=null&&s!=="auto")){var c=e.stateNode;c.paired=null,di===null&&(di=new Map),di.set(s,c)}Ws(e,n,a);break;default:Ws(e,n,a)}}function $0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Cn=s,tv(s,e)}$0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)ev(e),e=e.sibling}function ev(e){switch(e.tag){case 0:case 11:case 15:il(e),e.flags&2048&&is(9,e,e.return);break;case 3:il(e);break;case 12:il(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Fc(e)):il(e);break;default:il(e)}}function Fc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Cn=s,tv(s,e)}$0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:is(8,n,n.return),Fc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Fc(n));break;default:Fc(n)}e=e.sibling}}function tv(e,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:is(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Cn=s;else e:for(a=e;Cn!==null;){s=Cn;var c=s.sibling,u=s.return;if(q0(s),s===a){Cn=null;break e}if(c!==null){c.return=u,Cn=c;break e}Cn=u}}}var lM={getCacheForType:function(e){var n=Un(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(gn).controller.signal}},cM=typeof WeakMap=="function"?WeakMap:Map,zt=0,Zt=null,Mt=null,Et=0,jt=0,fi=null,ss=!1,Pr=!1,Uf=!1,Na=0,fn=0,rs=0,Ys=0,Bc=0,hi=0,zr=0,al=null,ti=null,Of=!1,Hc=0,nv=0,Gc=1/0,jc=null,os=null,on=0,Bi=null,Zs=null,na=0,Pf=0,zf=null,iv=null,Ir=null,Fr=null,Br=null,sl=0,Vc=null;function pi(){return(zt&2)!==0&&Et!==0?Et&-Et:Ee.T!==null?Xf():Co()}function av(){if(hi===0)if((Et&536870912)===0||St){var e=oi;oi<<=1,(oi&3932160)===0&&(oi=262144),hi=e}else hi=536870912;return e=On.current,e!==null&&(e.flags|=32),hi}function Hr(e,n){if(n!=null){var a=e.stateNode,s=a.ref;s===null&&(s=a.ref=Fv(xa(e.memoizedProps,a))),Fr===null&&(Fr=[]),Fr.push(n.bind(null,s))}}function ni(e,n,a){(e===Zt&&(jt===2||jt===9)||e.cancelPendingCommit!==null)&&(Gr(e,0),ls(e,Et,hi,!1)),ja(e,a),((zt&2)===0||e!==Zt)&&(e===Zt&&((zt&2)===0&&(Ys|=a),fn===4&&ls(e,Et,hi,!1)),ia(e))}function sv(e,n,a){if((zt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ga(e,n),c=s?fM(e,n):Ff(e,n,!0),u=s;do{if(c===0){Pr&&!s&&ls(e,n,0,!1);break}else{if(a=e.current.alternate,u&&!uM(a)){c=Ff(e,n,!1),u=!1;continue}if(c===2){if(u=n,e.errorRecoveryDisabledLanes&u)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){n=v;e:{var R=e;c=al;var z=R.current.memoizedState.isDehydrated;if(z&&(Gr(R,v).flags|=256),v=Ff(R,v,!1),v!==2&&v!==6){if(Uf&&!z){R.errorRecoveryDisabledLanes|=u,Ys|=u,c=4;break e}u=ti,ti=c,u!==null&&(ti===null?ti=u:ti.push.apply(ti,u))}c=v}if(u=!1,c!==2)continue}}if(c===1){Gr(e,0),ls(e,n,0,!0);break}e:{switch(s=e,u=c,u){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ls(s,n,hi,!ss);break e;case 2:ti=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Hc+300-he(),10<c)){if(ls(s,n,hi,!ss),lr(s,0,!0)!==0)break e;na=n,s.timeoutHandle=ih(rv.bind(null,s,a,ti,jc,Of,n,hi,Ys,zr,ss,u,"Throttled",-0,0),c);break e}rv(s,a,ti,jc,Of,n,hi,Ys,zr,ss,u,null,-0,0)}}break}while(!0);ia(e)}function rv(e,n,a,s,c,u,v,R,z,Q,le,Se,Y,re){e.timeoutHandle=-1;var je=n.subtreeFlags,Qe=(u&335544064)===u;if(Se=null,(Qe||je&8192||(je&16785408)===16785408)&&(Se={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},di=null,J0(n,u,Se),Qe&&(je=Se,Qe=e.containerInfo,Qe=(Qe.nodeType===9?Qe:Qe.ownerDocument).__reactViewTransition,Qe!=null&&(je.count++,je.waitingForViewTransition=!0,je=hl.bind(je),Qe.finished.then(je,je))),je=(u&62914560)===u?Hc-he():(u&4194048)===u?nv-he():0,je=pb(Se,je),je!==null)){na=u,e.cancelPendingCommit=je(pv.bind(null,e,n,u,a,s,c,v,R,z,Q,le,Se,null,Y,re)),ls(e,u,v,!Q);return}pv(e,n,u,a,s,c,v,R,z,Q,le,Se)}function uM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],u=c.getSnapshot;c=c.value;try{if(!ci(u(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ls(e,n,a,s){n=Eo(e,n),n&=~Bc,n&=~Ys,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var u=31-Xe(c),v=1<<u;s[u]=-1,c&=~v}a!==0&&To(e,a,n)}function qc(){return(zt&6)===0?(rl(0),!1):!0}function If(){if(Mt!==null){if(jt===0)var e=Mt.return;else e=Mt,ba=zs=null,qd(e),Rr=null,Vo=0,e=Mt;for(;e!==null;)N0(e.alternate,e),e=e.return;Mt=null}}function Gr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,OM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,If(),Zt=e,Mt=a=Sa(e.current,null),Et=n,jt=0,fi=null,ss=!1,Pr=Ga(e,n),Uf=!1,zr=hi=Bc=Ys=rs=fn=0,ti=al=null,Of=!1,Na=Eo(e,n),Jl(),a}function ov(e,n){gt=null,Ee.H=bc,n===Ar||n===cc?(n=pg(),jt=3):n===Dd?(n=pg(),jt=4):jt=n===rf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,Mt===null&&(fn=1,Ec(e,Ei(n,e.current)))}function lv(){var e=On.current;return e===null?!0:(Et&4194048)===Et?Gn===null:(Et&62914560)===Et||(Et&536870912)!==0?e===Gn:!1}function cv(){var e=Ee.H;return Ee.H=bc,e===null?bc:e}function uv(){var e=Ee.A;return Ee.A=lM,e}function kc(){fn=4,ss||(Et&4194048)!==Et&&On.current!==null||(Pr=!0),(rs&134217727)===0&&(Ys&134217727)===0||Zt===null||ls(Zt,Et,hi,!1)}function Ff(e,n,a){var s=zt;zt|=2;var c=cv(),u=uv();(Zt!==e||Et!==n)&&(jc=null,Gr(e,n)),n=!1;var v=fn;e:do try{if(jt!==0&&Mt!==null){var R=Mt,z=fi;switch(jt){case 8:If(),v=6;break e;case 3:case 2:case 9:case 6:On.current===null&&(n=!0);var Q=jt;if(jt=0,fi=null,jr(e,R,z,Q),a&&Pr){v=0;break e}break;default:Q=jt,jt=0,fi=null,jr(e,R,z,Q)}}dM(),v=fn;break}catch(le){ov(e,le)}while(!0);return n&&e.shellSuspendCounter++,ba=zs=null,zt=s,Ee.H=c,Ee.A=u,Mt===null&&(Zt=null,Et=0,Jl()),v}function dM(){for(;Mt!==null;)dv(Mt)}function fM(e,n){var a=zt;zt|=2;var s=cv(),c=uv();Zt!==e||Et!==n?(jc=null,Gc=he()+500,Gr(e,n)):Pr=Ga(e,n);e:do try{if(jt!==0&&Mt!==null){n=Mt;var u=fi;t:switch(jt){case 1:jt=0,fi=null,jr(e,n,u,1);break;case 2:case 9:if(fg(u)){jt=0,fi=null,fv(n);break}n=function(){jt!==2&&jt!==9||Zt!==e||(jt=7),ia(e)},u.then(n,n);break e;case 3:jt=7;break e;case 4:jt=5;break e;case 7:fg(u)?(jt=0,fi=null,fv(n)):(jt=0,fi=null,jr(e,n,u,7));break;case 5:var v=null;switch(Mt.tag){case 26:v=Mt.memoizedState;case 5:case 27:var R=Mt;if(v?i_(v):R.stateNode.complete){jt=0,fi=null;var z=R.sibling;if(z!==null)Mt=z;else{var Q=R.return;Q!==null?(Mt=Q,Xc(Q)):Mt=null}break t}}jt=0,fi=null,jr(e,n,u,5);break;case 6:jt=0,fi=null,jr(e,n,u,6);break;case 8:If(),fn=6;break e;default:throw Error(r(462))}}hM();break}catch(le){ov(e,le)}while(!0);return ba=zs=null,Ee.H=s,Ee.A=c,zt=a,Mt!==null?0:(Zt=null,Et=0,Jl(),fn)}function hM(){for(;Mt!==null&&!Ue();)dv(Mt)}function dv(e){var n=R0(e.alternate,e,Na);e.memoizedProps=e.pendingProps,n===null?Xc(e):Mt=n}function fv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=y0(a,n,n.pendingProps,n.type,void 0,Et);break;case 11:n=y0(a,n,n.pendingProps,n.type.render,n.ref,Et);break;case 5:qd(n);var s=n;s===An&&(St?(ac(s),s.tag===5&&s.stateNode!=null&&(Kt=s.stateNode)):(ac(s),St=!0));default:N0(a,n),n=Mt=tg(n,Na),n=R0(a,n,Na)}e.memoizedProps=e.pendingProps,n===null?Xc(e):Mt=n}function jr(e,n,a,s){ba=zs=null,qd(n),Rr=null,Vo=0;var c=n.return;try{if(eM(e,c,n,a,Et)){fn=1,Ec(e,Ei(a,e.current)),Mt=null;return}}catch(u){if(c!==null)throw Mt=c,u;fn=1,Ec(e,Ei(a,e.current)),Mt=null;return}n.flags&32768?(St||s===1?e=!0:Pr||(Et&536870912)!==0?e=!1:(ss=e=!0,(s===2||s===9||s===3||s===6)&&(s=On.current,s!==null&&s.tag===13&&(s.flags|=16384))),hv(n,e)):Xc(n)}function Xc(e){var n=e;do{if((n.flags&32768)!==0){hv(n,ss);return}e=n.return;var a=aM(n.alternate,n,Na);if(a!==null){Mt=a;return}if(n=n.sibling,n!==null){Mt=n;return}Mt=n=e}while(n!==null);fn===0&&(fn=5)}function hv(e,n){do{var a=sM(e.alternate,e);if(a!==null){a.flags&=32767,Mt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Mt=e;return}Mt=e=a}while(e!==null);fn=6,Mt=null}function pv(e,n,a,s,c,u,v,R,z,Q,le,Se){e.cancelPendingCommit=null;do Wc();while(on!==0);if((zt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));e===Zt&&(Mt=Zt=null,Et=0),Zs=n,Bi=e,na=a,zf=c,iv=s,pM(e,n,a,v,R,z,Se)}}function pM(e,n,a,s,c,u,v){var R=n.lanes|n.childLanes;if(Pf=R,R|=_d,dr(e,a,R,s,c,u),Fr=null,(a&335544064)===a?(Br=jS(e),s=10262):(Br=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(e.callbackNode=null,e.callbackPriority=0,yM(ge,function(){return jf(),null})):(e.callbackNode=null,e.callbackPriority=0),Lc=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=Ee.T,Ee.T=null,c=Ce.p,Ce.p=2,u=zt,zt|=4;try{rM(e,n,a)}finally{zt=u,Ce.p=c,Ee.T=s}}on=1,Lc?Ir=HM(v,e.containerInfo,Br,Bf,Hf,gM,Gf,jf,mM):(Bf(),Hf(),Gf())}function mM(e){if(on!==0){var n=Bi.onRecoverableError;n(e,{componentStack:null})}}function gM(){on===3&&(on=0,Q0(Zs,Bi),on=4)}function Bf(){if(on===1){on=0;var e=Bi,n=Zs,a=na,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=Ee.T,Ee.T=null;var c=Ce.p;Ce.p=2;var u=zt;zt|=4;try{tl=Pc=!1,Y0(n,e,a),a=eh;var v=km(e.containerInfo),R=a.focusedElem,z=a.selectionRange;if(v!==R&&R&&R.ownerDocument&&qm(R.ownerDocument.documentElement,R)){if(z!==null&&hd(R)){var Q=z.start,le=z.end;if(le===void 0&&(le=Q),"selectionStart"in R)R.selectionStart=Q,R.selectionEnd=Math.min(le,R.value.length);else{var Se=R.ownerDocument||document,Y=Se&&Se.defaultView||window;if(Y.getSelection){var re=Y.getSelection(),je=R.textContent.length,Qe=Math.min(z.start,je),vt=z.end===void 0?Qe:Math.min(z.end,je);!re.extend&&Qe>vt&&(v=vt,vt=Qe,Qe=v);var Z=Vm(R,Qe),j=Vm(R,vt);if(Z&&j&&(re.rangeCount!==1||re.anchorNode!==Z.node||re.anchorOffset!==Z.offset||re.focusNode!==j.node||re.focusOffset!==j.offset)){var $=Se.createRange();$.setStart(Z.node,Z.offset),re.removeAllRanges(),Qe>vt?(re.addRange($),re.extend(j.node,j.offset)):($.setEnd(j.node,j.offset),re.addRange($))}}}}for(Se=[],re=R;re=re.parentNode;)re.nodeType===1&&Se.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof R.focus=="function"&&R.focus(),R=0;R<Se.length;R++){var ye=Se[R];ye.element.scrollLeft=ye.left,ye.element.scrollTop=ye.top}}Qr=!!$f,eh=$f=null}finally{zt=u,Ce.p=c,Ee.T=s}}e.current=n,on=2}}function Hf(){if(on===2){on=0;var e=Bi,n=Zs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Ee.T,Ee.T=null;var s=Ce.p;Ce.p=2;var c=zt;zt|=4;try{j0(e,n.alternate,n)}finally{zt=c,Ce.p=s,Ee.T=a}}on=3}}function Gf(){if(on===4||on===3){on=0;var e=Ir;Ir=null,Ie();var n=Bi,a=Zs,s=na,c=iv,u=(s&335544064)===s?10262:10256;if((a.subtreeFlags&u)!==0||(a.flags&u)!==0?on=5:(on=0,Zs=Bi=null,mv(n,n.pendingLanes)),u=n.pendingLanes,u===0&&(os=null),fr(s),a=a.stateNode,nt&&typeof nt.onCommitFiberRoot=="function")try{nt.onCommitFiberRoot(Je,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Ee.T,u=Ce.p,Ce.p=2,Ee.T=null;try{for(var v=n.onRecoverableError,R=0;R<c.length;R++){var z=c[R];v(z.value,{componentStack:z.stack})}}finally{Ee.T=a,Ce.p=u}}if(c=Fr,v=Br,Br=null,c!==null&&(Fr=null,v===null&&(v=[]),e!==null))for(z=0;z<c.length;z++)a=(0,c[z])(v),a!==void 0&&e.finished.finally(a);(na&3)!==0&&Wc(),ia(n),u=n.pendingLanes,(s&261930)!==0&&(u&42)!==0?n===Vc?sl++:(sl=0,Vc=n):(sl=0,Vc=null),rl(0)}}function mv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ho(n)))}function Wc(){return Ir!==null&&(Ir.skipTransition(),Ir=null),Bf(),Hf(),Gf(),jf()}function jf(){if(on!==5)return!1;var e=Bi,n=Pf;Pf=0;var a=fr(na),s=Ee.T,c=Ce.p;try{Ce.p=32>a?32:a,Ee.T=null,a=zf,zf=null;var u=Bi,v=na;if(on=0,Zs=Bi=null,na=0,(zt&6)!==0)throw Error(r(331));var R=zt;if(zt|=4,ev(u.current),K0(u,u.current,v,a),zt=R,rl(0,!1),nt&&typeof nt.onPostCommitFiberRoot=="function")try{nt.onPostCommitFiberRoot(Je,u)}catch{}return!0}finally{Ce.p=c,Ee.T=s,mv(e,n)}}function gv(e,n,a){n=Ei(a,n),n=sf(e.stateNode,n,2),e=$a(e,n,2),e!==null&&(ja(e,2),ia(e))}function Vt(e,n,a){if(e.tag===3)gv(e,e,a);else for(;n!==null;){if(n.tag===3){gv(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(os===null||!os.has(s))){e=Ei(a,e),a=f0(2),s=$a(n,a,2),s!==null&&(h0(a,s,n,e),ja(s,2),ia(s));break}}n=n.return}}function Vf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new cM;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Uf=!0,c.add(a),e=vM.bind(null,e,n,a),n.then(e,e))}function vM(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(Et&a)===a&&((fn===4||fn===3&&(Et&62914560)===Et&&300>he()-Hc)&&(zt&2)===0?Gr(e,0):Bc|=a,zr===Et&&(zr=0)),ia(e)}function vv(e,n){n===0&&(n=cr()),e=Us(e,n),e!==null&&(ja(e,n),ia(e))}function _M(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),vv(e,a)}function xM(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),vv(e,a)}function yM(e,n){return Re(e,n)}var Vr=null,qr=null,qf=!1,Yc=!1,kf=!1,cs=0;function ia(e){e!==qr&&e.next===null&&(qr===null?Vr=qr=e:qr=qr.next=e),Yc=!0,qf||(qf=!0,MM())}function rl(e,n){if(!kf&&Yc){kf=!0;do for(var a=!1,s=Vr;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var u=0;else{var v=s.suspendedLanes,R=s.pingedLanes;u=(1<<31-Xe(42|e)+1)-1,u&=c&~(v&~R),u=u&201326741?u&201326741|1:u?u|2:0}u!==0&&(a=!0,Sv(s,u))}else u=Et,u=lr(s,s===Zt?u:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(u&3)===0||Ga(s,u)||(a=!0,Sv(s,u));s=s.next}while(a);kf=!1}}function SM(){_v()}function _v(){Yc=qf=!1;var e=0;cs!==0&&UM()&&(e=cs);for(var n=he(),a=null,s=Vr;s!==null;){var c=s.next,u=xv(s,n);u===0?(s.next=null,a===null?Vr=c:a.next=c,c===null&&(qr=a)):(a=s,(e!==0||(u&3)!==0)&&(Yc=!0)),s=c}on!==0&&on!==5||rl(e),cs!==0&&(cs=0)}function xv(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,u=e.pendingLanes&-62914561;0<u;){var v=31-Xe(u),R=1<<v,z=c[v];z===-1?((R&a)===0||(R&s)!==0)&&(c[v]=ga(R,n)):z<=n&&(e.expiredLanes|=R),u&=~R}if(n=Zt,a=Et,a=lr(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(jt===2||jt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&be(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ga(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&be(s),fr(a)){case 2:case 8:a=B;break;case 32:a=ge;break;case 268435456:a=Pe;break;default:a=ge}return s=yv.bind(null,e),a=Re(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&be(s),e.callbackPriority=2,e.callbackNode=null,2}function yv(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Wc()&&e.callbackNode!==a)return null;var s=Et;return s=lr(e,e===Zt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(sv(e,s,n),xv(e,he()),e.callbackNode!=null&&e.callbackNode===a?yv.bind(null,e):null)}function Sv(e,n){if(Wc())return null;sv(e,n,!0)}function MM(){PM(function(){(zt&6)!==0?Re(Oe,SM):_v()})}function Xf(){if(cs===0){var e=Bs;e===0&&(e=an,an<<=1,(an&261888)===0&&(an=256)),cs=e}return cs}function Mv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ql(e)}function bM(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var u=Mv((c[Ln]||null).action),v=s.submitter;v&&(n=(n=v[Ln]||null)?Mv(n.formAction):v.getAttribute("formAction"),n!==null&&(u=n,v=null));var R=new Yl("action","action",null,s,c);e.push({event:R,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(cs!==0){var z=new FormData(c,v);$d(a,{pending:!0,data:z,method:c.method,action:u},null,z)}}else typeof u=="function"&&(R.preventDefault(),z=new FormData(c,v),$d(a,{pending:!0,data:z,method:c.method,action:u},u,z))},currentTarget:c}]})}}for(var Wf=0;Wf<vd.length;Wf++){var Yf=vd[Wf],EM=Yf.toLowerCase(),TM=Yf[0].toUpperCase()+Yf.slice(1);Pi(EM,"on"+TM)}Pi(Ym,"onAnimationEnd"),Pi(Zm,"onAnimationIteration"),Pi(Qm,"onAnimationStart"),Pi("dblclick","onDoubleClick"),Pi("focusin","onFocus"),Pi("focusout","onBlur"),Pi(OS,"onTransitionRun"),Pi(PS,"onTransitionStart"),Pi(zS,"onTransitionCancel"),Pi(Km,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),Ct("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ct("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ct("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ct("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ct("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ct("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function bv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var u=void 0;if(n)for(var v=s.length-1;0<=v;v--){var R=s[v],z=R.instance,Q=R.currentTarget;if(R=R.listener,z!==u&&c.isPropagationStopped())break e;u=R,c.currentTarget=Q;try{u(c)}catch(le){Kl(le)}c.currentTarget=null,u=z}else for(v=0;v<s.length;v++){if(R=s[v],z=R.instance,Q=R.currentTarget,R=R.listener,z!==u&&c.isPropagationStopped())break e;u=R,c.currentTarget=Q;try{u(c)}catch(le){Kl(le)}c.currentTarget=null,u=z}}}}function bt(e,n){var a=n[G];a===void 0&&(a=n[G]=new Set);var s=e+"__bubble";a.has(s)||(Ev(n,e,2,!1),a.add(s))}function Zf(e,n,a){var s=0;n&&(s|=4),Ev(a,e,s,n)}var Zc="_reactListening"+Math.random().toString(36).slice(2);function Qf(e){if(!e[Zc]){e[Zc]=!0,sn.forEach(function(a){a!=="selectionchange"&&(AM.has(a)||Zf(a,!1,e),Zf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Zc]||(n[Zc]=!0,Zf("selectionchange",!1,n))}}function Ev(e,n,a,s){switch(h_(n)){case 2:var c=_b;break;case 8:c=xb;break;default:c=gh}a=c.bind(null,n,a,e),c=void 0,!id||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Kf(e,n,a,s,c){var u=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var R=s.stateNode.containerInfo;if(R===c)break;if(v===4)for(v=s.return;v!==null;){var z=v.tag;if((z===3||z===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;R!==null;){if(v=Ge(R),v===null)return;if(z=v.tag,z===5||z===6||z===26||z===27){s=u=v;continue e}R=R.parentNode}}s=s.return}Em(function(){var Q=u,le=td(a),Se=[];e:{var Y=Jm.get(e);if(Y!==void 0){var re=Yl,je=e;switch(e){case"keypress":if(Xl(a)===0)break e;case"keydown":case"keyup":re=uS;break;case"focusin":je="focus",re=od;break;case"focusout":je="blur",re=od;break;case"beforeblur":case"afterblur":re=od;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Jy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=mS;break;case Ym:case Zm:case Qm:re=tS;break;case Km:re=vS;break;case"scroll":case"scrollend":re=Qy;break;case"wheel":re=xS;break;case"copy":case"cut":case"paste":re=iS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=Nm;break;case"submit":re=hS;break;case"toggle":case"beforetoggle":re=SS}var Qe=(n&4)!==0,vt=!Qe&&(e==="scroll"||e==="scrollend"),Z=Qe?Y!==null?Y+"Capture":null:Y;Qe=[];for(var j=Q,$;j!==null;){var ye=j;if($=ye.stateNode,ye=ye.tag,ye!==5&&ye!==26&&ye!==27||$===null||Z===null||(ye=No(j,Z),ye!=null&&Qe.push(ll(j,ye,$))),vt)break;j=j.return}0<Qe.length&&(Y=new re(Y,je,null,a,le),Se.push({event:Y,listeners:Qe}))}}if((n&7)===0){e:{if(re=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",re&&a!==ed&&(je=a.relatedTarget||a.fromElement)&&(Ge(je)||je[C]))break e;(Y||re)&&(je=le.window===le?le:(re=le.ownerDocument)?re.defaultView||re.parentWindow:window,Y?(re=a.relatedTarget||a.toElement,Y=Q,re=re?Ge(re):null,re!==null&&(vt=d(re),Qe=re.tag,re!==vt||Qe!==5&&Qe!==27&&Qe!==6)&&(re=null)):(Y=null,re=Q),Y!==re&&(Qe=Rm,ye="onMouseLeave",Z="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(Qe=Nm,ye="onPointerLeave",Z="onPointerEnter",j="pointer"),vt=Y==null?je:at(Y),$=re==null?je:at(re),je=new Qe(ye,j+"leave",Y,a,le),je.target=vt,je.relatedTarget=$,ye=null,Ge(le)===Q&&(Qe=new Qe(Z,j+"enter",re,a,le),Qe.target=$,Qe.relatedTarget=vt,ye=Qe),vt=ye,Qe=Y&&re?P(Y,re,RM):null,Y!==null&&Tv(Se,je,Y,Qe,!1),re!==null&&vt!==null&&Tv(Se,vt,re,Qe,!0)))}e:{if(Y=Q?at(Q):window,re=Y.nodeName&&Y.nodeName.toLowerCase(),re==="select"||re==="input"&&Y.type==="file")var We=Im;else if(Pm(Y))if(Fm)We=DS;else{We=NS;var Tt=CS}else re=Y.nodeName,!re||re.toLowerCase()!=="input"||Y.type!=="checkbox"&&Y.type!=="radio"?Q&&$u(Q.elementType)&&(We=Im):We=wS;if(We&&(We=We(e,Q))){zm(Se,We,a,le);break e}Tt&&Tt(e,Y,Q)}switch(Tt=Q?at(Q):window,e){case"focusin":(Pm(Tt)||Tt.contentEditable==="true")&&(_r=Tt,pd=Q,Io=null);break;case"focusout":Io=pd=_r=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,Xm(Se,a,le);break;case"selectionchange":if(US)break;case"keydown":case"keyup":Xm(Se,a,le)}var et;if(cd)e:{switch(e){case"compositionstart":var st="onCompositionStart";break e;case"compositionend":st="onCompositionEnd";break e;case"compositionupdate":st="onCompositionUpdate";break e}st=void 0}else vr?Um(e,a)&&(st="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(st="onCompositionStart");st&&(wm&&a.locale!=="ko"&&(vr||st!=="onCompositionStart"?st==="onCompositionEnd"&&vr&&(et=Tm()):(qa=le,ad="value"in qa?qa.value:qa.textContent,vr=!0)),Tt=Qc(Q,st),0<Tt.length&&(st=new Cm(st,e,null,a,le),Se.push({event:st,listeners:Tt}),et?st.data=et:(et=Om(a),et!==null&&(st.data=et)))),(et=bS?ES(e,a):TS(e,a))&&(st=Qc(Q,"onBeforeInput"),0<st.length&&(Tt=new Cm("onBeforeInput","beforeinput",null,a,le),Se.push({event:Tt,listeners:st}),Tt.data=et)),bM(Se,e,Q,a,le)}bv(Se,n)})}function ll(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Qc(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,u=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||u===null||(c=No(e,a),c!=null&&s.unshift(ll(e,c,u)),c=No(e,n),c!=null&&s.push(ll(e,c,u))),e.tag===3)return s;e=e.return}return[]}function RM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tv(e,n,a,s,c){for(var u=n._reactName,v=[];a!==null&&a!==s;){var R=a,z=R.alternate,Q=R.stateNode;if(R=R.tag,z!==null&&z===s)break;R!==5&&R!==26&&R!==27||Q===null||(z=Q,c?(Q=No(a,u),Q!=null&&v.unshift(ll(a,Q,z))):c||(Q=No(a,u),Q!=null&&v.push(ll(a,Q,z)))),a=a.return}v.length!==0&&e.push({event:n,listeners:v})}var CM=/\r\n?/g,NM=/\u0000|\uFFFD/g;function Av(e){return(typeof e=="string"?e:""+e).replace(CM,`
`).replace(NM,"")}function Rv(e,n){return n=Av(n),Av(e)===n}function qt(e,n,a,s,c,u){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||pr(e,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&pr(e,""+s);else return;break;case"className":yi(e,"class",s);break;case"tabIndex":yi(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":yi(e,a,s);break;case"style":Mm(e,s,u);return;case"data":if(n!=="object"){yi(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ql(s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof u=="function"&&(a==="formAction"?(n!=="input"&&qt(e,n,"name",c.name,c,null),qt(e,n,"formEncType",c.formEncType,c,null),qt(e,n,"formMethod",c.formMethod,c,null),qt(e,n,"formTarget",c.formTarget,c,null)):(qt(e,n,"encType",c.encType,c,null),qt(e,n,"method",c.method,c,null),qt(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ql(s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Wi);return;case"onScroll":s!=null&&bt("scroll",e);return;case"onScrollEnd":s!=null&&bt("scrollend",e);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=ql(s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":bt("beforetoggle",e),bt("toggle",e),li(e,"popover",s);break;case"xlinkActuate":mt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":mt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":mt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":mt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":mt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":mt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":mt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":mt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":mt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":li(e,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Yy.get(a)||a,li(e,a,s);else return}ot=!0}function Jf(e,n,a,s,c,u){switch(a){case"style":Mm(e,s,u);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));(u!=null?u.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof s=="string")pr(e,s);else if(typeof s=="number"||typeof s=="bigint")pr(e,""+s);else return;break;case"onScroll":s!=null&&bt("scroll",e);return;case"onScrollEnd":s!=null&&bt("scrollend",e);return;case"onClick":s!=null&&(e.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Gt.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),u=a.slice(2,c?a.length-7:void 0),n=e[Ln]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(u,n,c),typeof s=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(u,s,c);break e}ot=!0,a in e?e[a]=s:s===!0?e.setAttribute(a,""):li(e,a,s)}return}ot=!0}function In(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":bt("error",e),bt("load",e);var s=!1,c=!1,u;for(u in a)if(a.hasOwnProperty(u)){var v=a[u];if(v!=null)switch(u){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(e,n,u,v,a,null)}}c&&qt(e,n,"srcSet",a.srcSet,a,null),s&&qt(e,n,"src",a.src,a,null);return;case"input":bt("invalid",e);var R=u=v=c=null,z=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var le=a[s];if(le!=null)switch(s){case"name":c=le;break;case"type":v=le;break;case"checked":z=le;break;case"defaultChecked":Q=le;break;case"value":u=le;break;case"defaultValue":R=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:qt(e,n,s,le,a,null)}}_m(e,u,R,z,Q,v,c,!1);return;case"select":bt("invalid",e),s=v=u=null;for(c in a)if(a.hasOwnProperty(c)&&(R=a[c],R!=null))switch(c){case"value":u=R;break;case"defaultValue":v=R;break;case"multiple":s=R;default:qt(e,n,c,R,a,null)}n=u,a=v,e.multiple=!!s,n!=null?hr(e,!!s,n,!1):a!=null&&hr(e,!!s,a,!0);return;case"textarea":bt("invalid",e),u=c=s=null;for(v in a)if(a.hasOwnProperty(v)&&(R=a[v],R!=null))switch(v){case"value":s=R;break;case"defaultValue":c=R;break;case"children":u=R;break;case"dangerouslySetInnerHTML":if(R!=null)throw Error(r(91));break;default:qt(e,n,v,R,a,null)}ym(e,s,c,u);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:qt(e,n,z,s,a,null)}return;case"dialog":bt("beforetoggle",e),bt("toggle",e),bt("cancel",e),bt("close",e);break;case"iframe":case"object":bt("load",e);break;case"video":case"audio":for(s=0;s<ol.length;s++)bt(ol[s],e);break;case"image":bt("error",e),bt("load",e);break;case"details":bt("toggle",e);break;case"embed":case"source":case"link":bt("error",e),bt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:qt(e,n,Q,s,a,null)}return;default:if($u(n)){for(le in a)a.hasOwnProperty(le)&&(s=a[le],s!==void 0&&Jf(e,n,le,s,a,void 0));return}}for(R in a)a.hasOwnProperty(R)&&(s=a[R],s!=null&&qt(e,n,R,s,a,null))}var wM={};function DM(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,u=null,v=null,R=null,z=null,Q=null,le=null;for(re in a){var Se=a[re];if(a.hasOwnProperty(re)&&Se!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":z=Se;default:s.hasOwnProperty(re)||qt(e,n,re,null,s,Se)}}for(var Y in s){var re=s[Y];if(Se=a[Y],s.hasOwnProperty(Y)&&(re!=null||Se!=null))switch(Y){case"type":re!==Se&&(ot=!0),u=re;break;case"name":re!==Se&&(ot=!0),c=re;break;case"checked":re!==Se&&(ot=!0),Q=re;break;case"defaultChecked":re!==Se&&(ot=!0),le=re;break;case"value":re!==Se&&(ot=!0),v=re;break;case"defaultValue":re!==Se&&(ot=!0),R=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:re!==Se&&qt(e,n,Y,re,s,Se)}}Ku(e,v,R,z,Q,le,u,c);return;case"select":re=v=R=Y=null;for(u in a)if(z=a[u],a.hasOwnProperty(u)&&z!=null)switch(u){case"value":break;case"multiple":re=z;default:s.hasOwnProperty(u)||qt(e,n,u,null,s,z)}for(c in s)if(u=s[c],z=a[c],s.hasOwnProperty(c)&&(u!=null||z!=null))switch(c){case"value":u!==z&&(ot=!0),Y=u;break;case"defaultValue":u!==z&&(ot=!0),R=u;break;case"multiple":u!==z&&(ot=!0),v=u;default:u!==z&&qt(e,n,c,u,s,z)}n=R,a=v,s=re,Y!=null?hr(e,!!a,Y,!1):!!s!=!!a&&(n!=null?hr(e,!!a,n,!0):hr(e,!!a,a?[]:"",!1));return;case"textarea":re=Y=null;for(R in a)if(c=a[R],a.hasOwnProperty(R)&&c!=null&&!s.hasOwnProperty(R))switch(R){case"value":break;case"children":break;default:qt(e,n,R,null,s,c)}for(v in s)if(c=s[v],u=a[v],s.hasOwnProperty(v)&&(c!=null||u!=null))switch(v){case"value":c!==u&&(ot=!0),Y=c;break;case"defaultValue":c!==u&&(ot=!0),re=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==u&&qt(e,n,v,c,s,u)}xm(e,Y,re);return;case"option":for(var je in a)if(Y=a[je],a.hasOwnProperty(je)&&Y!=null&&!s.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:qt(e,n,je,null,s,Y)}for(z in s)if(Y=s[z],re=a[z],s.hasOwnProperty(z)&&Y!==re&&(Y!=null||re!=null))switch(z){case"selected":Y!==re&&(ot=!0),e.selected=Y&&typeof Y!="function"&&typeof Y!="symbol";break;default:qt(e,n,z,Y,s,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Qe in a)Y=a[Qe],a.hasOwnProperty(Qe)&&Y!=null&&!s.hasOwnProperty(Qe)&&qt(e,n,Qe,null,s,Y);for(Q in s)if(Y=s[Q],re=a[Q],s.hasOwnProperty(Q)&&Y!==re&&(Y!=null||re!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(r(137,n));break;default:qt(e,n,Q,Y,s,re)}return;default:if($u(n)){for(var vt in a)Y=a[vt],a.hasOwnProperty(vt)&&Y!==void 0&&!s.hasOwnProperty(vt)&&Jf(e,n,vt,void 0,s,Y);for(le in s)Y=s[le],re=a[le],!s.hasOwnProperty(le)||Y===re||Y===void 0&&re===void 0||Jf(e,n,le,Y,s,re);return}}for(var Z in a)Y=a[Z],a.hasOwnProperty(Z)&&Y!=null&&!s.hasOwnProperty(Z)&&qt(e,n,Z,null,s,Y);for(Se in s)Y=s[Se],re=a[Se],!s.hasOwnProperty(Se)||Y===re||Y==null&&re==null||qt(e,n,Se,Y,s,re)}function Cv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function LM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],u=c.transferSize,v=c.initiatorType,R=c.duration;if(u&&R&&Cv(v)){for(v=0,R=c.responseEnd,s+=1;s<a.length;s++){var z=a[s],Q=z.startTime;if(Q>R)break;var le=z.transferSize,Se=z.initiatorType;le&&Cv(Se)&&(z=z.responseEnd,v+=le*(z<R?1:(R-Q)/(z-Q)))}if(--s,n+=8*(u+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var $f=null,eh=null;function cl(e){return e.nodeType===9?e:e.ownerDocument}function Nv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function wv(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Dv(e,n,a,s){return a=cl(a).createElement(e),a[Sn]=s,a[Ln]=n,In(a,e,n),Fe(a),a}function th(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var nh=null;function UM(){var e=window.event;return e&&e.type==="popstate"?e===nh?!1:(nh=e,!0):(nh=null,!1)}var ih=typeof setTimeout=="function"?setTimeout:void 0,OM=typeof clearTimeout=="function"?clearTimeout:void 0,Lv=typeof Promise=="function"?Promise:void 0,Uv=typeof requestAnimationFrame=="function"?requestAnimationFrame:ih,PM=typeof queueMicrotask=="function"?queueMicrotask:typeof Lv<"u"?function(e){return Lv.resolve(null).then(e).catch(zM)}:ih;function zM(e){setTimeout(function(){throw e})}function us(e){return e==="head"}function Ov(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),Kr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")dh(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,dh(a);for(var u=a.firstChild;u;){var v=u.nextSibling,R=u.nodeName;u[De]||R==="SCRIPT"||R==="STYLE"||R==="LINK"&&u.rel.toLowerCase()==="stylesheet"||a.removeChild(u),u=v}}else a==="body"&&dh(e.ownerDocument.body);a=c}while(a);Kr(n)}function Pv(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function zv(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var s=1;else for(var c=s=0;c<n.length;c++){var u=n[c];0<u.width&&0<u.height&&s++}s===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function Iv(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function IM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function ah(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return IM(n,a,e)}function FM(e){return e.documentElement.clientHeight}function BM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function HM(e,n,a,s,c,u,v,R,z){var Q=n.nodeType===9?n:n.ownerDocument;try{var le=Q.startViewTransition({update:function(){var Y=Q.defaultView,re=Y.navigation&&Y.navigation.transition,je=Q.fonts.status;s();var Qe=[];if(je==="loaded"&&(FM(Q),Q.fonts.status==="loading"&&Qe.push(Q.fonts.ready)),je=Qe.length,e!==null)for(var vt=e.suspenseyImages,Z=0,j=0;j<vt.length;j++){var $=vt[j];if(!$.complete){var ye=$.getBoundingClientRect();if(0<ye.bottom&&0<ye.right&&ye.top<Y.innerHeight&&ye.left<Y.innerWidth){if(Z+=a_($),Z>$c){Qe.length=je;break}$=new Promise(BM.bind($)),Qe.push($)}}}if(0<Qe.length)return Y=Promise.race([Promise.all(Qe),new Promise(function(We){return setTimeout(We,500)})]).then(c,c),(re?Promise.allSettled([re.finished,Y]):Y).then(u,u);if(c(),re)return re.finished.then(u,u);u()},types:a});Q.__reactViewTransition=le;var Se=[];return le.ready.then(function(){for(var Y=Q.documentElement.getAnimations({subtree:!0}),re=0;re<Y.length;re++){var je=Y[re],Qe=je.effect,vt=Qe.pseudoElement;if(vt!=null&&vt.startsWith("::view-transition")){Se.push(je),je=Qe.getKeyframes();for(var Z=vt=void 0,j=!0,$=0;$<je.length;$++){var ye=je[$],We=ye.width;if(vt===void 0)vt=We;else if(vt!==We){j=!1;break}if(We=ye.height,Z===void 0)Z=We;else if(Z!==We){j=!1;break}delete ye.width,delete ye.height,ye.transform==="none"&&delete ye.transform}j&&vt!==void 0&&Z!==void 0&&(Qe.setKeyframes(je),j=getComputedStyle(Qe.target,Qe.pseudoElement),j.width!==vt||j.height!==Z)&&(j=je[0],j.width=vt,j.height=Z,j=je[je.length-1],j.width=vt,j.height=Z,Qe.setKeyframes(je))}}v()},function(Y){Q.__reactViewTransition===le&&(Q.__reactViewTransition=null);try{if(typeof Y=="object"&&Y!==null)switch(Y.name){case"InvalidStateError":(Y.message==="View transition was skipped because document visibility state is hidden."||Y.message==="Skipping view transition because document visibility state has become hidden."||Y.message==="Skipping view transition because viewport size changed."||Y.message==="Transition was aborted because of invalid state")&&(Y=null)}Y!==null&&z(Y)}finally{s(),c(),v()}}),le.finished.finally(function(){for(var Y=0;Y<Se.length;Y++)Se[Y].cancel();Q.__reactViewTransition===le&&(Q.__reactViewTransition=null),R()}),le}catch{return s(),c(),v(),null}}function Qs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Qs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:E({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Qs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),s=[],c=0;c<a.length;c++){var u=a[c].effect;u!==null&&u.target===e&&u.pseudoElement===n&&s.push(a[c])}return s},Qs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Fv(e){return{name:e,group:new Qs("group",e),imagePair:new Qs("image-pair",e),old:new Qs("old",e),new:new Qs("new",e)}}function mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(e,n,a){var s=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var u=this._eventListeners;if(Hv(u,e,n,a)===-1){var v=this,R=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(R=function(z){v.removeEventListener(e,n,a),typeof n=="function"?n.call(this,z):n.handleEvent(z)}),s!==null&&(c=v.removeEventListener.bind(v,e,n,a),s.addEventListener("abort",c,{once:!0}),c=s.removeEventListener.bind(s,"abort",c)),s=kr(a),u.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:R,cleanup:c}),_(this._fragmentFiber.child,!1,GM,e,R,s)}this._eventListeners=u}};function GM(e,n,a,s){return M(e).addEventListener(n,a,s),!1}mi.prototype.removeEventListener=function(e,n,a){var s=this._eventListeners;if(s!==null&&(n=Hv(s,e,n,a),n!==-1)){var c=s[n];a=c.attachedListener;var u=c.cleanup;c=kr(c.optionsOrUseCapture),_(this._fragmentFiber.child,!1,jM,e,a,c),s.splice(n,1),u!==null&&u()}};function jM(e,n,a,s){return M(e).removeEventListener(n,a,s),!1}function kr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function Bv(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function Hv(e,n,a,s){if(e.length===0)return-1;s=Bv(s);for(var c=0;c<e.length;c++){var u=e[c];if(u.type===n&&u.listener===a&&Bv(u.optionsOrUseCapture)===s)return c}return-1}mi.prototype.dispatchEvent=function(e){var n=x(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var u=a[c];s.addEventListener(u.type,u.attachedListener,kr(u.optionsOrUseCapture))}if(n.appendChild(s),e=s.dispatchEvent(e),a)for(c=0;c<a.length;c++)u=a[c],s.removeEventListener(u.type,u.attachedListener,kr(u.optionsOrUseCapture));return n.removeChild(s),e}return n.dispatchEvent(e)},mi.prototype.focus=function(e){_(this._fragmentFiber.child,!0,Gv,e,void 0,void 0)};function Gv(e,n){return e.tag===6?!1:(e=M(e),eb(e,n))}mi.prototype.focusLast=function(e){var n=[];_(this._fragmentFiber.child,!0,sh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Gv(n[a],e);a--);};function sh(e,n){return n.push(e),!1}mi.prototype.blur=function(){var e=x(this._fragmentFiber);e!==null&&(e=M(e),e=cl(e).activeElement,e!==null&&_(this._fragmentFiber.child,!1,VM,e,void 0,void 0))};function VM(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),_(this._fragmentFiber.child,!1,qM,e,void 0,void 0)};function qM(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}mi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),_(this._fragmentFiber.child,!1,kM,e,void 0,void 0);for(var a=n=0;a<Hi.length;a++){var s=Hi[a];s.fragmentInstance===this&&s.observer===e?e.unobserve(s.instance):Hi[n++]=s}Hi.length=n}};function kM(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Hi=[],rh=!1;function XM(e,n,a){Hi.push({fragmentInstance:e,observer:n,instance:a}),rh||(rh=!0,tb(function(){rh=!1;var s=Hi;Hi=[];for(var c=0;c<s.length;c++){var u=s[c];u.observer.unobserve(u.instance)}}))}mi.prototype.getClientRects=function(){var e=[];return _(this._fragmentFiber.child,!1,WM,e,void 0,void 0),e};function WM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}mi.prototype.getRootNode=function(e){var n=x(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},mi.prototype.compareDocumentPosition=function(e){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];_(this._fragmentFiber.child,!1,sh,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,b(this._fragmentFiber)){e:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break e}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=s=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var u=b(this._fragmentFiber)?n.parentElement:s;if(u==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=u.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,u=u.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var v=n.compareDocumentPosition(e),R=c.compareDocumentPosition(e),z=v&Node.DOCUMENT_POSITION_CONTAINED_BY||R&Node.DOCUMENT_POSITION_CONTAINED_BY;return R=s&&u&&v&Node.DOCUMENT_POSITION_FOLLOWING&&R&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===e||u&&c===e||z||R?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===e||!u&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:v,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||YM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function YM(e,n,a,s,c){var u=Ge(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!u)e:{for(;u!==null;){if(u.tag===7&&(u===n||u.alternate===n)){a=!0;break e}u=u.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(u===null)return u=c.ownerDocument,c===u||c===u.documentElement||c===u.body;e:{for(u=n,n=x(n);u!==null;){if(!(u.tag!==5&&u.tag!==3&&u.tag!==27||u!==n&&u.alternate!==n)){u=!0;break e}u=u.return}u=!1}return u}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!u)&&!(n=u===a)&&(n=P(a,u,I),n===null?n=!1:(_(n,!0,F,u,a),u=y,y=null,n=u!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!u)&&!(n=u===s)&&(n=P(s,u,I),n===null?n=!1:(_(n,!0,N,u,s),u=y,U=y=null,n=u!==null)),n):!1}function jv(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(r(566));var n=[];_(this._fragmentFiber.child,!1,sh,n,void 0,void 0);var a=e!==!1;if(n.length===0){var s=T(this._fragmentFiber);if(s=a?s[1]||s[0]||x(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){e=M(s),jv(e,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(e);return}s.scrollIntoView(e)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var c=n[s];c.tag===6?(c=M(c),jv(c,a)):M(c).scrollIntoView(e),s+=a?-1:1}};function ZM(e,n){return e=M(e),Vv(e,n),!1}function Vv(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function qv(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.addEventListener(c.type,c.attachedListener,kr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){for(var v=0,R=0;R<Hi.length;R++){var z=Hi[R];(z.fragmentInstance!==n||z.observer!==u||z.instance!==e)&&(Hi[v++]=z)}Hi.length=v,u.observe(e)}),Vv(e,n))}function QM(e,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s];e.removeEventListener(c.type,c.attachedListener,kr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(u){typeof u.rootMargin=="string"?XM(n,u,e):u.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function oh(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":oh(a),Le(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function KM(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[De])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(u=e.getAttribute("rel"),u==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(u!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(u=e.getAttribute("src"),(u!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&u&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var u=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===u)return e}else return e;if(e=Ni(e.nextSibling),e===null)break}return null}function JM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ni(e.nextSibling),e===null))return null;return e}function kv(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ni(e.nextSibling),e===null))return null;return e}function lh(e){return e.data==="$?"||e.data==="$~"}function ch(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function $M(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Ni(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var uh=null;function Xv(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ni(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Wv(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function eb(e,n){function a(){s=!0}if(e.ownerDocument.activeElement===e)return!0;var s=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return s}function tb(e){Uv(function(){Uv(function(n){return e(n)})})}function Yv(e,n,a){switch(n=cl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Zv(e,n,a){for(var s in a){var c=a[s];a.hasOwnProperty(s)&&c!=null&&qt(e,n,s,null,wM,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Wi&&(e.onclick=null),Le(e)}function dh(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Le(e)}var wi=new Map,Qv=new Set;function ul(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var wa=Ce.d;Ce.d={f:nb,r:ib,D:ab,C:sb,L:rb,m:ob,X:cb,S:lb,M:ub};function nb(){var e=wa.f(),n=qc();return e||n}function ib(e){var n=Ye(e);n!==null&&n.tag===5&&n.type==="form"?Jg(n):wa.r(e)}var Xr=typeof document>"u"?null:document;function Kv(e,n,a){var s=Xr;if(s&&typeof n=="string"&&n){var c=Mi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Qv.has(c)||(Qv.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),In(n,"link",e),Fe(n),s.head.appendChild(n)))}}function ab(e){wa.D(e),Kv("dns-prefetch",e,null)}function sb(e,n){wa.C(e,n),Kv("preconnect",e,n)}function rb(e,n,a){wa.L(e,n,a);var s=Xr;if(s&&e&&n){var c='link[rel="preload"][as="'+Mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Mi(a.imageSizes)+'"]')):c+='[href="'+Mi(e)+'"]';var u=c;switch(n){case"style":u=Wr(e);break;case"script":u=Yr(e)}if(!(wi.has(u)||(e=E({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),wi.set(u,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(dl(u))||n==="script"&&s.querySelector(fl(u))))){var v=s.createElement("link");In(v,"link",e),n==="style"&&(v[ke]=!0,v.onload=v.onerror=function(){yt(v)}),Fe(v),s.head.appendChild(v)}}}function ob(e,n){wa.m(e,n);var a=Xr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Mi(s)+'"][href="'+Mi(e)+'"]',u=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":u=Yr(e)}if(!wi.has(u)&&(e=E({rel:"modulepreload",href:e},n),wi.set(u,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(fl(u)))return}s=a.createElement("link"),In(s,"link",e),Fe(s),a.head.appendChild(s)}}}function lb(e,n,a){wa.S(e,n,a);var s=Xr;if(s&&e){var c=pt(s).hoistableStyles,u=Wr(e);n=n||"default";var v=c.get(u);if(!v){var R={loading:0,preload:null};if(v=s.querySelector(dl(u)))R.loading=5;else{e=E({rel:"stylesheet",href:e,"data-precedence":n},a),(a=wi.get(u))&&fh(e,a);var z=v=s.createElement("link");Fe(z),In(z,"link",e),z._p=new Promise(function(Q,le){z.onload=Q,z.onerror=le}),z.addEventListener("load",function(){R.loading|=1}),z.addEventListener("error",function(){R.loading|=2}),R.loading|=4,Kc(v,n,s)}v={type:"stylesheet",instance:v,count:1,state:R},c.set(u,v)}}}function cb(e,n){wa.X(e,n);var a=Xr;if(a&&e){var s=pt(a).hoistableScripts,c=Yr(e),u=s.get(c);u||(u=a.querySelector(fl(c)),u||(e=E({src:e,async:!0},n),(n=wi.get(c))&&hh(e,n),u=a.createElement("script"),Fe(u),In(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function ub(e,n){wa.M(e,n);var a=Xr;if(a&&e){var s=pt(a).hoistableScripts,c=Yr(e),u=s.get(c);u||(u=a.querySelector(fl(c)),u||(e=E({src:e,async:!0,type:"module"},n),(n=wi.get(c))&&hh(e,n),u=a.createElement("script"),Fe(u),In(u,"link",e),a.head.appendChild(u)),u={type:"script",instance:u,count:1,state:null},s.set(c,u))}}function Jv(e,n,a,s){var c=(c=pn.current)?ul(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Wr(a.href),n=pt(c).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Wr(a.href);var u=pt(c).hoistableStyles,v=u.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,v),(u=c.querySelector(dl(e)))?u._p||(v.instance=u,v.state.loading=5):(u=wi.get(e),u||(u={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},wi.set(e,u)),db(c,e,u,v.state))),n&&s===null)throw Error(r(528,""));return v}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Yr(a),n=pt(c).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Wr(e){return'href="'+Mi(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function $v(e){return E({},e,{"data-precedence":e.precedence,precedence:null})}function db(e,n,a,s){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[ke]!==!0){s.loading=1;return}}else n=e.createElement("link"),n[ke]=!0,n.onload=n.onerror=yt.bind(null,n),In(n,"link",a),Fe(n),e.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Yr(e){return'[src="'+Mi(e)+'"]'}function fl(e){return"script[async]"+e}function e_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Mi(a.href)+'"]');if(s)return n.instance=s,Fe(s),s;var c=E({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Fe(s),In(s,"style",c),Kc(s,a.precedence,e),n.instance=s;case"stylesheet":c=Wr(a.href);var u=e.querySelector(dl(c));if(u)return n.state.loading|=4,n.instance=u,Fe(u),u;s=$v(a),(c=wi.get(c))&&fh(s,c),u=(e.ownerDocument||e).createElement("link"),Fe(u);var v=u;return v._p=new Promise(function(R,z){v.onload=R,v.onerror=z}),In(u,"link",s),n.state.loading|=4,Kc(u,a.precedence,e),n.instance=u;case"script":return u=Yr(a.src),(c=e.querySelector(fl(u)))?(n.instance=c,Fe(c),c):(s=a,(c=wi.get(u))&&(s=E({},a),hh(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Fe(c),In(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Kc(s,a.precedence,e));return n.instance}function Kc(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,u=c,v=0;v<s.length;v++){var R=s[v];if(R.dataset.precedence===n)u=R;else if(u!==c)break}u?u.parentNode.insertBefore(e,u.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function fh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function hh(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Jc=null;function t_(e,n,a){if(Jc===null){var s=new Map,c=Jc=new Map;c.set(a,s)}else c=Jc,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var u=a[c];if(!(u[De]||u[Sn]||e==="link"&&u.getAttribute("rel")==="stylesheet")&&u.namespaceURI!=="http://www.w3.org/2000/svg"){var v=u.getAttribute(n)||"";v=e+v;var R=s.get(v);R?R.push(u):s.set(v,[u])}}return s}function ph(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function fb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function i_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function a_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function s_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=a_(n),e.suspenseyImages.push(n)),e=mb.bind(e),n.decode().then(e,e))}function hb(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Wr(s.href),u=n.querySelector(dl(c));if(u){n=u._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=hl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=u,Fe(u);return}u=n.ownerDocument||n,s=$v(s),(c=wi.get(c))&&fh(s,c),u=u.createElement("link"),Fe(u);var v=u;v._p=new Promise(function(R,z){v.onload=R,v.onerror=z}),In(u,"link",s),a.instance=u}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=hl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var $c=0;function pb(e,n){return e.stylesheets&&e.count===0&&tu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&tu(e,e.stylesheets),e.unsuspend){var u=e.unsuspend;e.unsuspend=null,u()}},6e4+n);0<e.imgBytes&&$c===0&&($c=62500*LM());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&tu(e,e.stylesheets),e.unsuspend)){var u=e.unsuspend;e.unsuspend=null,u()}},(e.imgBytes>$c?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function r_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)tu(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function hl(){this.count--,r_(this)}function mb(){this.imgCount--,r_(this)}var eu=null;function tu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,eu=new Map,n.forEach(gb,e),eu=null,hl.call(e))}function gb(e,n){if(!(n.state.loading&4)){var a=eu.get(e);if(a)var s=a.get(null);else{a=new Map,eu.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),u=0;u<c.length;u++){var v=c[u];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(a.set(v.dataset.precedence,v),s=v)}s&&a.set(null,s)}c=n.instance,v=c.getAttribute("data-precedence"),u=a.get(v)||s,u===s&&a.set(null,c),a.set(v,c),this.count++,s=hl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),u?u.parentNode.insertBefore(c,u.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Zr={$$typeof:ee,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function vb(e,n,a,s,c,u,v,R,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ur(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ur(0),this.hiddenUpdates=ur(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=u,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.transitionTypes=null,this.incompleteTransitions=new Map}function o_(e,n,a,s,c,u,v,R,z,Q,le,Se){return e=new vb(e,n,a,v,z,Q,le,Se,R),n=1,u===!0&&(n|=24),u=Jn(3,null,null,n),e.current=u,u.stateNode=e,n=Cd(),n.refCount++,e.pooledCache=n,n.refCount++,u.memoizedState={element:s,isDehydrated:a,cache:n},Ld(u),e}function l_(e){return e?(e=Sr,e):Sr}function c_(e,n,a,s,c,u){c=l_(c),s.context===null?s.context=c:s.pendingContext=c,s=Ja(n),s.payload={element:a},u=u===void 0?null:u,u!==null&&(s.callback=u),a=$a(e,s,n),a!==null&&(ni(a,e,n),qo(a,e,n))}function u_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function mh(e,n){u_(e,n),(e=e.alternate)&&u_(e,n)}function d_(e){if(e.tag===13||e.tag===31){var n=Us(e,67108864);n!==null&&ni(n,e,67108864),mh(e,67108864)}}function f_(e){if(e.tag===13||e.tag===31){var n=pi();n=Ro(n);var a=Us(e,n);a!==null&&ni(a,e,n),mh(e,n)}}var Qr=!0;function _b(e,n,a,s){var c=Ee.T;Ee.T=null;var u=Ce.p;try{Ce.p=2,gh(e,n,a,s)}finally{Ce.p=u,Ee.T=c}}function xb(e,n,a,s){var c=Ee.T;Ee.T=null;var u=Ce.p;try{Ce.p=8,gh(e,n,a,s)}finally{Ce.p=u,Ee.T=c}}function gh(e,n,a,s){if(Qr){var c=vh(s);if(c===null)Kf(e,n,s,nu,a),p_(e,s);else if(Sb(c,e,n,a,s))s.stopPropagation();else if(p_(e,s),n&4&&-1<yb.indexOf(e)){for(;c!==null;){var u=Ye(c);if(u!==null)switch(u.tag){case 3:if(u=u.stateNode,u.current.memoizedState.isDehydrated){var v=Ui(u.pendingLanes);if(v!==0){var R=u;for(R.pendingLanes|=2,R.entangledLanes|=2;v;){var z=1<<31-Xe(v);R.entanglements[1]|=z,v&=~z}ia(u),(zt&6)===0&&(Gc=he()+500,rl(0))}}break;case 31:case 13:R=Us(u,2),R!==null&&ni(R,u,2),qc(),mh(u,2)}if(u=vh(s),u===null&&Kf(e,n,s,nu,a),u===c)break;c=u}c!==null&&s.stopPropagation()}else Kf(e,n,s,null,a)}}function vh(e){return e=td(e),_h(e)}var nu=null;function _h(e){if(nu=null,e=Ge(e),e!==null){var n=d(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=p(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return nu=e,null}function h_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ve()){case Oe:return 2;case B:return 8;case ge:case me:return 32;case Pe:return 268435456;default:return 32}default:return 32}}var xh=!1,ds=null,fs=null,hs=null,pl=new Map,ml=new Map,ps=[],yb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(e,n){switch(e){case"focusin":case"focusout":ds=null;break;case"dragenter":case"dragleave":fs=null;break;case"mouseover":case"mouseout":hs=null;break;case"pointerover":case"pointerout":pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(n.pointerId)}}function gl(e,n,a,s,c,u){return e===null||e.nativeEvent!==u?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:u,targetContainers:[c]},n!==null&&(n=Ye(n),n!==null&&d_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Sb(e,n,a,s,c){switch(n){case"focusin":return ds=gl(ds,e,n,a,s,c),!0;case"dragenter":return fs=gl(fs,e,n,a,s,c),!0;case"mouseover":return hs=gl(hs,e,n,a,s,c),!0;case"pointerover":var u=c.pointerId;return pl.set(u,gl(pl.get(u)||null,e,n,a,s,c)),!0;case"gotpointercapture":return u=c.pointerId,ml.set(u,gl(ml.get(u)||null,e,n,a,s,c)),!0}return!1}function m_(e){var n=Ge(e.target);if(n!==null){var a=d(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,jl(e.priority,function(){f_(a)});return}}else if(n===31){if(n=p(a),n!==null){e.blockedOn=n,jl(e.priority,function(){f_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function iu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=vh(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);ed=s,a.target.dispatchEvent(s),ed=null}else return n=Ye(a),n!==null&&d_(n),e.blockedOn=a,!1;n.shift()}return!0}function g_(e,n,a){iu(e)&&a.delete(n)}function Mb(){xh=!1,ds!==null&&iu(ds)&&(ds=null),fs!==null&&iu(fs)&&(fs=null),hs!==null&&iu(hs)&&(hs=null),pl.forEach(g_),ml.forEach(g_)}function au(e,n){e.blockedOn===n&&(e.blockedOn=null,xh||(xh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Mb)))}var su=null;function v_(e){su!==e&&(su=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){su===e&&(su=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(_h(s||a)===null)continue;break}var u=Ye(a);u!==null&&(e.splice(n,3),n-=3,$d(u,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function Kr(e){function n(z){return au(z,e)}ds!==null&&au(ds,e),fs!==null&&au(fs,e),hs!==null&&au(hs,e),pl.forEach(n),ml.forEach(n);for(var a=0;a<ps.length;a++){var s=ps[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<ps.length&&(a=ps[0],a.blockedOn===null);)m_(a),a.blockedOn===null&&ps.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],u=a[s+1],v=c[Ln]||null;if(typeof u=="function")v||v_(a);else if(v){var R=null;if(u&&u.hasAttribute("formAction")){if(c=u,v=u[Ln]||null)R=v.formAction;else if(_h(c)!==null)continue}else R=v.action;typeof R=="function"?a[s+1]=R:(a.splice(s,3),s-=3),v_(a)}}}function __(){function e(u){u.canIntercept&&u.info==="react-transition"&&u.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var u=navigation.currentEntry;u&&u.url!=null&&navigation.navigate(u.url,{state:u.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function yh(e){this._internalRoot=e}ru.prototype.render=yh.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=pi();c_(a,s,e,n,null,null)},ru.prototype.unmount=yh.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;c_(e.current,2,null,e,null,null),qc(),n[C]=null}};function ru(e){this._internalRoot=e}ru.prototype.unstable_scheduleHydration=function(e){if(e){var n=Co();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ps.length&&n!==0&&n<ps[a].priority;a++);ps.splice(a,0,e),a===0&&m_(e)}};var x_=t.version;if(x_!=="19.3.1")throw Error(r(527,x_,"19.3.1"));Ce.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=m(n),e=e!==null?S(e):null,e=e===null?null:e.stateNode,e};var bb={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Ee,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ou=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ou.isDisabled&&ou.supportsFiber)try{Je=ou.inject(bb),nt=ou}catch{}}return _l.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=l0,u=c0,v=u0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(v=n.onRecoverableError)),n=o_(e,1,!1,null,null,a,s,null,c,u,v,__),e[C]=n.current,Qf(e),new yh(n)},_l.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",u=l0,v=c0,R=u0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(u=a.onUncaughtError),a.onCaughtError!==void 0&&(v=a.onCaughtError),a.onRecoverableError!==void 0&&(R=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=o_(e,1,!0,n,a??null,s,c,z,u,v,R,__),n.context=l_(null),a=n.current,s=pi(),s=Ro(s),c=Ja(s),c.callback=null,$a(a,c,s),a=s,n.current.lanes=a,ja(n,a),ia(n),e[C]=n.current,Qf(e),new ru(n)},_l.version="19.3.1",_l}var N_;function Ob(){if(N_)return bh.exports;N_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),bh.exports=Ub(),bh.exports}var Pb=Ob(),zb=Ox();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Px=(...o)=>o.filter((t,i,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=$e.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:d,iconNode:h,...p},g)=>$e.createElement("svg",{ref:g,...Fb,width:t,height:t,stroke:o,strokeWidth:r?Number(i)*24/Number(t):i,className:Px("lucide",l),...p},[...h.map(([m,S])=>$e.createElement(m,S)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=(o,t)=>{const i=$e.forwardRef(({className:r,...l},d)=>$e.createElement(Bb,{ref:d,iconNode:t,className:Px(`lucide-${Ib(o)}`,r),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=lt("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=lt("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=lt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=lt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=lt("Bell",[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=lt("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=lt("BriefcaseBusiness",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=lt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=lt("ChartNoAxesCombined",[["path",{d:"M12 16v5",key:"zza2cw"}],["path",{d:"M16 14v7",key:"1g90b9"}],["path",{d:"M20 10v11",key:"1iqoj0"}],["path",{d:"m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15",key:"1fw8x9"}],["path",{d:"M4 18v3",key:"1yp0dc"}],["path",{d:"M8 14v7",key:"n3cwzv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=lt("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=lt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=lt("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=lt("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=lt("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=lt("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=lt("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fx=lt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=lt("Ear",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=lt("FileCheck2",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=lt("Flag",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=lt("Handshake",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=lt("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bx=lt("HeartHandshake",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=lt("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=lt("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hx=lt("Lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=lt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=lt("MessagesSquare",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z",key:"p1xzt8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=lt("NotebookPen",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",key:"pqwjuv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=lt("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qb=lt("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kb=lt("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=lt("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=lt("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=lt("Route",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=lt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=lt("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=lt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tE=lt("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=lt("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=lt("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=lt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=lt("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=lt("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=lt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rE=lt("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=lt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Vx=["Todos","Trabajo y carrera","Ventas y negocios","Conflictos","Vida cotidiana"],_i=[{id:"salario",title:"El valor de tu trabajo",subtitle:"Negocia un aumento salarial",category:"Trabajo y carrera",level:1,minutes:12,icon:"salary",color:"purple",tag:"EL MÁS ELEGIDO",description:"Has crecido en tu rol. Es momento de que tu salario también lo haga.",context:"Llevas dos años como analista en una empresa de tecnología. En los últimos seis meses lideraste una automatización que redujo un 20 % los tiempos de entrega. Tu salario es de $3.200.000 COP mensuales y pediste una reunión para revisarlo.",objective:"Buscar $3.800.000 COP o un paquete equivalente con una fecha de revisión por escrito.",interests:["Reconocimiento de tu impacto","Crecimiento sostenible","Mantener una relación de confianza"],constraints:["El presupuesto del trimestre es limitado.","No tienes otra oferta laboral.","No puedes prometer resultados que no controlas."],facts:["Redujiste los tiempos de entrega un 20 %.","Ahora coordinas a dos personas.","Puedes negociar formación, flexibilidad y una revisión en 90 días."],person:{name:"Laura Méndez",role:"Directora de operaciones",initials:"LM",style:"Analítica · Directa",motivation:"Retener al equipo sin desequilibrar las bandas salariales.",avatar:"laura"},opening:"Gracias por venir. Sé que quieres revisar tu salario. Antes de hablar de cifras, ¿qué ha cambiado en tu rol que justifique un ajuste?",discovery:"Me preocupa la equidad con el resto del equipo. Puedo autorizar hasta $3.600.000 este trimestre. Para revisar más adelante, necesitaría indicadores claros y una fecha.",objection:"Tu aportación es valiosa, pero todavía debo justificar el ajuste frente a Finanzas. ¿Cómo lo conectarías con resultados medibles?",value:"La reducción del 20 % y la coordinación de dos personas sí representan un cambio de responsabilidad. Eso me ayuda a sustentar la propuesta.",option:"Un salario de $3.600.000 COP, formación por $600.000 y revisión en 90 días con indicadores acordados",counter:"Puedo ofrecer $3.600.000 COP y una revisión por escrito en 90 días. La formación también es negociable si definimos cómo se aplica al equipo.",twist:"Acabo de recibir una actualización: los ajustes por encima de la banda requieren aprobación de Finanzas. Un acuerdo con revisión en 90 días sigue siendo viable.",baseline:32e5,ceiling:36e5,target:38e5,unit:"COP mensuales",practice:["Argumentar con evidencia","Negociar más que dinero","Concesiones con condiciones"],starter:"Mi alternativa es mantener mi puesto y acordar una revisión con indicadores en 90 días."},{id:"cliente",title:"De la queja a la confianza",subtitle:"Atiende a un cliente insatisfecho",category:"Ventas y negocios",level:1,minutes:10,icon:"client",color:"peach",tag:"IDEAL PARA EMPEZAR",description:"Un pedido llegó tarde. La conversación todavía puede llegar a buen puerto.",context:"Eres responsable de atención en una tienda de mobiliario. Un escritorio llegó ocho días tarde y con una pieza dañada. El cliente reorganizó su jornada para recibirlo y exige una solución hoy.",objective:"Acordar una reparación realista y recuperar la confianza sin prometer entregas imposibles.",interests:["Resolver el daño","Reconocer el tiempo perdido","Evitar compromisos que no puedes cumplir"],constraints:["Puedes reembolsar el envío o reemplazar la pieza.","El reemplazo tarda tres días hábiles.","Un reembolso total requiere recoger el producto."],facts:["El envío costó $80.000 COP.","La pieza está disponible en almacén.","Puedes hacer seguimiento personalmente."],person:{name:"Andrés Rojas",role:"Cliente desde hace 3 años",initials:"AR",style:"Frustrado · Exigente",motivation:"Sentirse escuchado y tener una fecha de solución confiable.",avatar:"andres"},opening:"Llevo ocho días esperando y el escritorio llega roto. Perdí una jornada entera. ¡Quiero una solución hoy, no otra excusa!",discovery:"Lo necesitaba para empezar a trabajar desde casa. Más que un descuento, necesito saber cuándo estará completo y no tener que volver a llamar cinco veces.",objection:"La última persona también me dijo que se encargaría. ¿Qué hará que esta vez sea diferente?",value:"Que una sola persona se haga responsable y me dé una fecha verificable sí haría una diferencia.",option:"Reemplazo de la pieza en tres días hábiles, reembolso del envío y seguimiento personal mañana",counter:"Aceptaría el reemplazo en tres días hábiles y la devolución del envío, si me envías hoy la confirmación y mañana me contactas tú.",twist:"Mañana no estaré en casa. Si el reemplazo requiere que vuelva a perder un día sin una franja horaria, prefiero la devolución.",practice:["Escucha activa","Reparar la confianza","Compromisos verificables"],starter:"Puedo ofrecer un reemplazo en tres días y reembolsar el envío; no puedo prometer entrega hoy."},{id:"limites",title:"Un «no» que construye",subtitle:"Pon límites sin romper la relación",category:"Vida cotidiana",level:1,minutes:8,icon:"boundary",color:"mint",description:"Ayudar a los demás no debería significar olvidarte de tus prioridades.",context:"Un amigo te pide que le ayudes a preparar una presentación este fin de semana. Ya has dedicado varias noches a sus proyectos y necesitas ese tiempo para estudiar para un examen el lunes.",objective:"Proteger tu fin de semana y ofrecer, si quieres, una ayuda acotada que puedas cumplir.",interests:["Cuidar tu tiempo de estudio","Mantener la amistad","Evitar resentimientos"],constraints:["Tu examen es el lunes.","Solo tienes 20 minutos disponibles el viernes.","Ya aceptaste varias peticiones anteriores."],facts:["Tu amigo tiene un borrador.","Puede pedir apoyo a su equipo.","No eres responsable de entregar su presentación."],person:{name:"Nicolás Vega",role:"Amigo y compañero de estudios",initials:"NV",style:"Cercano · Insistente",motivation:"Salir del apuro y sentir que puede contar contigo.",avatar:"nicolas"},opening:"¡Me salvas si me ayudas este sábado! Tú haces las presentaciones mucho mejor. Solo serán unas horas, como la última vez.",discovery:"Lo que más me cuesta es ordenar las ideas. Tengo el contenido, pero me bloqueo al estructurarlo. Pensé en ti porque confío en tu criterio.",objection:"Siempre hemos podido contar el uno con el otro. Me sorprende que esta vez no puedas hacer un espacio.",value:"Entiendo que tu examen también importa. Si me ayudas a ordenar el inicio, puedo avanzar por mi cuenta.",option:"Revisar el esquema durante 20 minutos el viernes, sin trabajar el sábado ni asumir la entrega",counter:"¿Podemos revisar solo el esquema el viernes durante 20 minutos? Yo me encargo del resto y no te escribo el fin de semana.",twist:"Acabo de recordar que también tengo que ensayar. ¿Y si después de revisar el esquema te quedas un poquito más?",practice:["Asertividad","Límites concretos","Reconocer sin ceder"],starter:"Mi examen es mi prioridad; puedo revisar un esquema el viernes durante 20 minutos."},{id:"entrevista",title:"Mucho más que un currículo",subtitle:"Conversa en una entrevista laboral",category:"Trabajo y carrera",level:1,minutes:12,icon:"interview",color:"blue",description:"Convierte tu experiencia en una historia que demuestre tu potencial.",context:"Estás en la entrevista final para una vacante junior de gestión de proyectos. Tienes prácticas profesionales y experiencia coordinando un proyecto universitario, pero no cumples los dos años de experiencia solicitados.",objective:"Demostrar competencias transferibles y acordar un siguiente paso concreto del proceso.",interests:["Entender las expectativas del puesto","Mostrar evidencia sin exagerar","Evaluar si el equipo es adecuado para ti"],constraints:["No puedes inventar experiencia.","El puesto requiere coordinar a tres áreas.","La entrevista dura 20 minutos."],facts:["Coordinaste un equipo universitario de cinco personas.","Entregaron un prototipo en seis semanas.","En tus prácticas mejoraste el seguimiento de tareas."],person:{name:"Camila Torres",role:"Líder de selección",initials:"CT",style:"Curiosa · Escéptica",motivation:"Reducir el riesgo de contratar a alguien que necesita mucha supervisión.",avatar:"camila"},opening:"Tu perfil me interesa, pero pedimos dos años de experiencia. ¿Por qué crees que podrías asumir la coordinación del proyecto?",discovery:"Lo que más nos preocupa es la coordinación entre áreas. Hemos tenido retrasos porque nadie anticipó las dependencias. La experiencia cuenta, pero el criterio es fundamental.",objection:"Eso ocurrió en un contexto académico. ¿Cómo trasladarías ese aprendizaje a un equipo con prioridades en conflicto?",value:"Un ejemplo con acciones concretas y resultados me dice más que una lista de cualidades. Ese seguimiento de dependencias es relevante.",option:"Una prueba práctica de coordinación y una conversación con la líder del equipo la próxima semana",counter:"Te propongo una prueba práctica con un caso de coordinación y una entrevista con la líder la próxima semana. ¿Te funciona?",twist:"En el caso práctico una de las áreas cambia la fecha sin avisar. Necesitamos entender cómo comunicarías el riesgo antes de prometer una nueva entrega.",practice:["Preguntas estratégicas","Evidencia concreta","Comunicar tu valor"],starter:"Si el puesto no encaja, buscaré otro; puedo demostrar mi criterio con una prueba práctica."},{id:"venta",title:"El precio no lo es todo",subtitle:"Maneja una objeción de venta",category:"Ventas y negocios",level:2,minutes:15,icon:"sale",color:"yellow",description:"Tu cliente tiene una opción más barata. Descubre qué necesita de verdad.",context:"Vendes un servicio de gestión de inventario para una pequeña empresa. Tu plan cuesta $900.000 COP al mes; un competidor ofrece $650.000. Tu servicio incluye acompañamiento de implementación y soporte en español.",objective:"Validar el encaje de la solución y acordar una prueba con criterios de éxito, sin descuentos injustificados.",interests:["Una venta sostenible","Resolver una necesidad real","Mantener el valor del servicio"],constraints:["El descuento máximo autorizado es del 10 %.","No prometas funciones que el producto no tiene.","La prueba dura 14 días."],facts:["El cliente pierde seis horas semanales conciliando inventarios.","El soporte está incluido.","Puedes ofrecer una sesión de implementación."],person:{name:"Valentina Ruiz",role:"Dueña de una tienda",initials:"VR",style:"Pragmática · Sensible al precio",motivation:"Ahorrar tiempo sin asumir un gasto que no se justifique.",avatar:"valentina"},opening:"Me gusta la herramienta, pero la otra empresa cobra mucho menos. Si no igualas los $650.000, no veo por qué elegirte.",discovery:"Lo caro para mí son los errores de inventario y el tiempo que pierdo cada semana. Pero no tengo a nadie que pueda hacerse cargo de una implementación compleja.",objection:"Todos me prometen ahorrar tiempo. ¿Cómo sabré que en mi tienda realmente funciona?",value:"Si el acompañamiento reduce las seis horas de conciliación y medimos los errores, podría justificar la diferencia.",option:"Una prueba de 14 días con implementación incluida y medición de horas ahorradas antes de contratar a $900.000 COP al mes",counter:"Hagamos la prueba de 14 días con una sesión de implementación. Si reducimos la conciliación a tres horas semanales, revisamos la contratación a $900.000.",twist:"Mi socia también tiene que aprobarlo y solo evalúa el costo mensual. Necesitaría una propuesta breve con el ahorro y las condiciones de cancelación.",baseline:9e5,ceiling:9e5,floor:81e4,target:9e5,unit:"COP al mes",practice:["Descubrir necesidades","Manejo de objeciones","Persuasión ética"],starter:"Puedo ofrecer una prueba medible; mi mínimo autorizado es $810.000 al mes."},{id:"companeros",title:"Del roce al equipo",subtitle:"Resuelve un conflicto entre compañeros",category:"Conflictos",level:2,minutes:12,icon:"team",color:"pink",description:"La entrega se acerca y la tensión también. Recupera una forma de trabajar juntos.",context:"Compartes una entrega con un compañero que no ha terminado su parte. Tú has tenido que cubrir retrasos en las últimas dos semanas y ayer le reclamaste frente al equipo.",objective:"Reconocer tu parte en la tensión y acordar responsabilidades, plazos y alertas de bloqueo.",interests:["Cumplir la entrega del viernes","Distribuir el trabajo con claridad","Restablecer el respeto"],constraints:["No eres su superior.","No puedes absorber todo el trabajo.","Solo quedan tres días para la entrega."],facts:["Faltan dos módulos del informe.","Puedes terminar uno si él revisa los datos.","No conoces la causa del retraso."],person:{name:"Diego Herrera",role:"Compañero de proyecto",initials:"DH",style:"Defensivo · Reservado",motivation:"No quedar expuesto y obtener claridad sobre prioridades.",avatar:"diego"},opening:"Si viniste a volver a reclamarme como ayer delante de todos, mejor ahorrémonos la reunión. Yo también tengo trabajo.",discovery:"Me asignaron una urgencia de otro proyecto y no sabía qué priorizar. Y lo de ayer me hizo sentir que no respetas mi trabajo.",objection:"¿Cómo sé que no vas a usar este acuerdo para volver a señalarme delante del equipo?",value:"Si hablamos los bloqueos en privado y dejamos claro qué entrega cada uno, puedo comprometerme sin sentir que todo recae en mí.",option:"Dividir los dos módulos, revisar datos juntos el jueves y avisar bloqueos en privado antes de las 15:00",counter:"Yo termino los datos el jueves a las 12:00 y tú el segundo módulo. Revisamos juntos a las 15:00 y avisamos bloqueos en privado. ¿Lo dejamos por escrito?",twist:"Mi jefe acaba de pedirme otra urgencia para mañana. Necesito que acordemos cómo elevar el conflicto de prioridades sin culparnos.",practice:["Reparación de la relación","Escucha activa","Acuerdos verificables"],starter:"No puedo asumir ambos módulos; puedo proponer dividirlos y elevar juntos los bloqueos."},{id:"superior",title:"Todo es urgente. ¿Y ahora?",subtitle:"Negocia prioridades con tu superior",category:"Trabajo y carrera",level:2,minutes:12,icon:"priority",color:"purple",description:"No necesitas más horas. Necesitas una conversación sobre prioridades.",context:"Tu superior te pide una presentación para mañana, pero tienes un informe comprometido para ese mismo día. Cada tarea necesita seis horas y solo tienes ocho horas de trabajo disponibles.",objective:"Acordar qué entregar primero y ajustar alcance o fecha de la otra tarea.",interests:["Cumplir compromisos realistas","Mantener la calidad","Hacer visibles los costos de priorizar"],constraints:["Ambas tareas completas requieren 12 horas.","Tienes ocho horas disponibles.","No hay presupuesto para horas extra."],facts:["La presentación es para una reunión comercial.","El informe es interno.","Una versión ejecutiva de la presentación requiere tres horas."],person:{name:"Sofía Castro",role:"Gerente de área",initials:"SC",style:"Apresurada · Orientada a resultados",motivation:"Llegar preparada a una reunión importante sin sorpresas.",avatar:"sofia"},opening:"Necesito la presentación mañana a primera hora. Sé que tienes el informe, pero confío en que puedas resolver las dos cosas.",discovery:"En realidad necesito tres diapositivas con cifras para la reunión comercial. El informe interno puede moverse si avisamos hoy a los demás.",objection:"Me preocupa que mover la entrega deje mal al equipo. ¿Cómo comunicarías el cambio?",value:"Ver las horas y el alcance me ayuda. Una versión ejecutiva podría servir para la reunión sin poner en riesgo el informe.",option:"Presentación ejecutiva de tres diapositivas mañana y entrega del informe al día siguiente, avisando hoy a las personas involucradas",counter:"Prioricemos las tres diapositivas mañana y movamos el informe un día. Enviemos hoy un aviso con la nueva fecha y el motivo.",twist:"Comercial pide además una proyección que aún no está validada. No quiero una cifra que después tengamos que corregir.",practice:["Negociar alcance","Asertividad","Hacer visibles los costos"],starter:"Puedo hacer una versión ejecutiva; no puedo completar doce horas de trabajo en ocho."},{id:"proveedor",title:"Un acuerdo que resista",subtitle:"Renegocia con un proveedor",category:"Ventas y negocios",level:3,minutes:18,icon:"supplier",color:"blue",description:"Los costos subieron. Encuentra un acuerdo más allá del descuento.",context:"Gestionas compras de empaques para una empresa de alimentos. Tu proveedor solicita aumentar el precio unitario de $1.000 a $1.200 COP. Necesitas 5.000 unidades al mes y tu presupuesto solo admite hasta $1.100.",objective:"Negociar un precio de hasta $1.100 COP con calidad constante y entregas quincenales.",interests:["Continuidad de suministro","Control del costo total","Calidad alimentaria"],constraints:["No puedes reducir los estándares sanitarios.","No puedes pagar seis meses por adelantado.","Cambiar de proveedor tomaría cuatro semanas."],facts:["Puedes comprometer un volumen por tres meses.","Una previsión mensual reduce costos logísticos.","Puedes aceptar un diseño estándar sin personalización."],person:{name:"Martín Salazar",role:"Director comercial del proveedor",initials:"MS",style:"Firme · Negociador experimentado",motivation:"Cubrir costos y conseguir previsibilidad de pedidos.",avatar:"martin"},opening:"El aumento del 20 % es necesario. Nuestros insumos subieron y no podemos seguir con el precio anterior. Necesito tu confirmación esta semana.",discovery:"La materia prima subió, pero lo que más nos cuesta son los cambios de diseño y los pedidos de último momento. Con previsión podemos ahorrar en logística.",objection:"Un compromiso de palabra no cubre mis costos. ¿Qué volumen y previsión podrías formalizar?",value:"Un diseño estándar y un volumen definido por tres meses nos darían margen. La calidad sanitaria se mantiene.",option:"Precio de $1.100 COP por unidad, diseño estándar, 5.000 unidades mensuales durante tres meses y entregas quincenales",counter:"Con diseño estándar y compromiso de 5.000 unidades al mes por tres meses, puedo dejarlo en $1.100 por unidad, con entregas quincenales.",twist:"El transportista modificó su tarifa. Podemos sostener el precio si fijamos el calendario quincenal y evitamos entregas extraordinarias.",baseline:1e3,ceiling:1100,target:1100,unit:"COP por unidad",practice:["Crear valor","Concesiones condicionadas","Gestionar presión"],starter:"Tengo cuatro semanas para evaluar otro proveedor; puedo comprometer volumen, no calidad."},{id:"comercial",title:"Socios, no adversarios",subtitle:"Construye una alianza comercial",category:"Ventas y negocios",level:3,minutes:20,icon:"deal",color:"mint",description:"Dos negocios, prioridades distintas y una oportunidad compartida.",context:"Diriges una consultora pequeña. Una agencia quiere que entregues un proyecto conjunto en cuatro semanas, con exclusividad por un año y pago a 90 días. Te interesa la alianza, pero esas condiciones ponen en riesgo tu flujo de caja.",objective:"Acordar un piloto con alcance, pagos por hitos y exclusividad limitada al proyecto.",interests:["Flujo de caja sostenible","Una relación comercial de largo plazo","Autonomía para atender a otros clientes"],constraints:["Necesitas un anticipo del 30 %.","No puedes aceptar exclusividad general.","El alcance completo requiere seis semanas."],facts:["Un piloto reducido puede entregarse en cuatro semanas.","La agencia necesita demostrar resultados a su cliente.","Puedes ofrecer prioridad de agenda para la segunda fase."],person:{name:"Elena Pardo",role:"Directora de una agencia",initials:"EP",style:"Persuasiva · Competitiva",motivation:"Asegurar capacidad y reducir el riesgo frente a su cliente.",avatar:"elena"},opening:"Queremos trabajar contigo, pero necesitamos exclusividad por un año y pago a 90 días. Otras consultoras aceptan estas condiciones. ¿Podemos cerrarlo hoy?",discovery:"La exclusividad busca que no trabajes con el competidor directo durante el lanzamiento. El plazo de pago es nuestra política, aunque hay anticipos para pilotos.",objection:"Si cedo en el anticipo, necesito seguridad de que el piloto saldrá en cuatro semanas.",value:"Un piloto acotado con hitos puede resolverlo. Limitar la exclusividad al lanzamiento protege al cliente sin bloquear tu negocio.",option:"Piloto de cuatro semanas, anticipo del 30 %, pagos por hitos y exclusividad solo para el competidor directo durante el lanzamiento",counter:"Puedo aprobar 30 % de anticipo si fijamos hitos semanales. La exclusividad se limita al competidor directo durante el piloto y revisamos la fase dos al terminar.",twist:"El cliente acaba de pedir una funcionalidad adicional. Necesito saber qué sacaríamos del piloto o cómo cambiarían el presupuesto y la fecha.",practice:["Negociación multivariable","Proteger tu alternativa","Detectar presión"],starter:"Puedo rechazar una alianza que comprometa caja; necesito 30 % de anticipo y alcance acotado."},{id:"desacuerdo",title:"Pensamos distinto. Avancemos.",subtitle:"Resuelve un desacuerdo de equipo",category:"Conflictos",level:2,minutes:12,icon:"conflict",color:"yellow",description:"No necesitas que todos piensen igual para tomar una buena decisión.",context:"Tu equipo debe elegir una propuesta para un proyecto universitario. Tú propones investigar un problema local; otra integrante prefiere un tema global más vistoso. Tienen dos semanas y no han acordado criterios de decisión.",objective:"Definir criterios compartidos y elegir una propuesta viable sin imponer tu preferencia.",interests:["Un resultado sólido","Participación equitativa","Una decisión basada en criterios"],constraints:["Solo tienen dos semanas.","No cuentan con presupuesto para viajes.","Todos deben participar en la investigación."],facts:["La rúbrica valora evidencia original y viabilidad.","Tienen acceso a tres fuentes locales.","Pueden vincular el problema local con una tendencia global."],person:{name:"Isabel Moreno",role:"Integrante de tu equipo",initials:"IM",style:"Entusiasta · Convencida",motivation:"Hacer un proyecto ambicioso y sentir que su idea cuenta.",avatar:"isabel"},opening:"Otra vez quieres quedarte con algo pequeño. Si elegimos un problema global, el proyecto va a destacar mucho más. Yo ya tengo una propuesta.",discovery:"Quiero que el proyecto tenga relevancia y que no parezca una tarea rutinaria. También me preocupa que mi idea se descarte sin revisarla.",objection:"Los criterios pueden favorecer justo la propuesta que tú quieres. ¿Cómo hacemos para que la comparación sea justa?",value:"Usar la rúbrica y comparar acceso a fuentes, tiempo e impacto me parece una forma más justa de decidir.",option:"Comparar ambas propuestas con la rúbrica y combinar evidencia local con una perspectiva global, asignando tareas hoy",counter:"Comparemos las dos ideas con la rúbrica. Si la local tiene mejor acceso a evidencia, incorporemos el marco global y repartamos las tareas hoy.",twist:"Uno de los compañeros no puede hacer entrevistas esta semana. Necesitamos una tarea equivalente para que todos participen.",practice:["Criterios objetivos","Integrar perspectivas","Escucha sin ceder criterio"],starter:"Propongo usar la rúbrica y considerar una combinación viable de ambas ideas."},{id:"alquiler",title:"Tu casa, tu tranquilidad",subtitle:"Negocia la renovación del alquiler",category:"Vida cotidiana",level:2,minutes:15,icon:"home",color:"peach",description:"Busca estabilidad con un acuerdo que cuide tus números y tu relación.",context:"Tu contrato de alquiler termina en un mes. La propietaria propone pasar de $1.500.000 a $1.700.000 COP. Tu presupuesto máximo es de $1.600.000 y has pagado puntualmente durante dos años. Este caso practica un acuerdo voluntario; no interpreta normas locales de arrendamiento.",objective:"Explorar una renovación de hasta $1.600.000 COP sin asumir reparaciones estructurales.",interests:["Estabilidad de vivienda","Un presupuesto sostenible","Reglas claras de mantenimiento"],constraints:["Tu máximo es $1.600.000.","Mudarte cuesta tiempo y dinero.","Las reparaciones estructurales no son negociables para ti."],facts:["Has pagado puntualmente dos años.","Puedes renovar por doce meses.","Hay anuncios similares a $1.600.000; no son contratos cerrados."],person:{name:"Patricia León",role:"Propietaria del apartamento",initials:"PL",style:"Cordial · Cautelosa",motivation:"Tener ingresos estables y evitar periodos sin inquilino.",avatar:"patricia"},opening:"Has sido una buena persona arrendataria, pero los costos han subido. Para renovar, el valor sería de $1.700.000. ¿Qué te parece?",discovery:"Me preocupa que el apartamento quede vacío y tener que buscar a alguien nuevo. También necesito prever los gastos de mantenimiento.",objection:"He visto anuncios por más de ese valor. ¿Por qué debería bajar mi propuesta?",value:"La puntualidad y una renovación de doce meses dan estabilidad. Evitar un mes vacío también tiene valor para mí.",option:"Renovación por doce meses a $1.600.000 COP con pagos puntuales y responsabilidades de mantenimiento por escrito",counter:"Podría aceptar $1.600.000 con renovación de doce meses y las responsabilidades de mantenimiento claramente escritas.",twist:"Hay una filtración que revisar. No quiero que confundamos la renovación con trasladarte el costo de esa reparación estructural.",baseline:15e5,ceiling:16e5,target:16e5,unit:"COP mensuales",practice:["Alternativas realistas","Criterios objetivos","Propuestas sostenibles"],starter:"Mi máximo es $1.600.000; puedo renovar doce meses y explorar otras viviendas si no es viable."},{id:"feedback",title:"Lo difícil también se conversa",subtitle:"Da feedback con empatía y firmeza",category:"Conflictos",level:3,minutes:15,icon:"feedback",color:"pink",description:"Una conversación honesta puede ser el comienzo de un cambio.",context:"Coordinas un equipo y una persona ha interrumpido a sus compañeros en tres reuniones. Dos integrantes te dijeron que ya no quieren participar. Quieres abordar la conducta sin etiquetar a la persona ni revelar conversaciones privadas.",objective:"Acordar una conducta observable para las próximas reuniones y una revisión en dos semanas.",interests:["Seguridad para participar","Una conversación respetuosa","Cambios observables"],constraints:["No puedes revelar quién se quejó.","No puedes atribuir intenciones sin preguntar.","El feedback debe referirse a hechos concretos."],facts:["Registraste interrupciones en las últimas tres reuniones.","Puedes proponer turnos y una ronda de participación.","La revisión puede hacerse en dos semanas."],person:{name:"Gabriel Fuentes",role:"Especialista de tu equipo",initials:"GF",style:"Seguro · Defensivo ante críticas",motivation:"Aportar experiencia y no perder influencia en el equipo.",avatar:"gabriel"},opening:"Dijiste que querías hablar sobre mis intervenciones. Yo solo intento que las reuniones avancen; si los demás no hablan, tampoco puedo hacerlo todo.",discovery:"Me preocupa que perdamos tiempo en temas que ya resolvimos. No sabía que interrumpía tanto; a veces pienso que, si no digo algo rápido, la decisión sale mal.",objection:"¿Quién dijo que le molesta? Porque conmigo nadie lo ha hablado directamente.",value:"Si podemos separar los riesgos técnicos de los turnos para hablar, puedo esperar y tomar notas antes de intervenir.",option:"Respetar los turnos, anotar riesgos sin interrumpir, abrir una ronda de participación y revisar el cambio en dos semanas",counter:"Puedo anotar mis observaciones y esperar a que termine cada persona. Hagamos una ronda para riesgos técnicos y revisemos en dos semanas.",twist:"¿Y si alguien propone algo que puede poner en riesgo al cliente? Necesitamos una señal acordada para las alertas realmente urgentes.",practice:["Feedback observable","Manejo emocional","Cuidar la confidencialidad"],starter:"Quiero hablar de interrupciones observadas y acordar turnos, sin señalar a quienes me hablaron."}],qx={1:"Inicial",2:"Intermedio",3:"Avanzado"},ai=[["clarity","Claridad"],["listening","Escucha activa"],["empathy","Empatía"],["assertiveness","Asertividad"],["preparation","Preparación"],["strategy","Estrategia"],["emotion","Manejo emocional"],["creativity","Creatividad"],["agreement","Calidad del acuerdo"]],ua=[{id:"intereses",category:"Fundamentos",title:"Detrás de cada posición hay un interés",short:"Aprende a preguntar por lo que realmente importa.",time:4,icon:"search",skill:"listening",intro:"«Necesito un 20 % de aumento» es una posición. Reconocimiento, estabilidad o crecimiento pueden ser los intereses que la explican. Cuando negocias solo posiciones, cada movimiento parece una derrota. Cuando descubres intereses, aparecen más soluciones.",principle:"Antes de responder a una exigencia, averigua qué necesidad intenta resolver.",example:{before:"No puedo darte ese descuento.",after:"¿Qué necesitas que resuelva esta compra y qué parte del costo te preocupa más?"},steps:["Pregunta «¿Qué es lo más importante para ti en este acuerdo?».","Resume lo que escuchaste y confirma si entendiste bien.","Propón dos opciones que atiendan ese interés sin sacrificar tus límites."],exercise:"En tu próxima simulación, haz una pregunta abierta antes de ofrecer una solución.",scenario:"cliente"},{id:"alternativa",category:"Preparación",title:"Tu mejor alternativa te da perspectiva",short:"Negocia con criterio, incluso cuando el acuerdo no conviene.",time:5,icon:"route",skill:"preparation",intro:"Tu mejor alternativa a un acuerdo negociado (MAAN) es lo que realmente puedes hacer si no llegas a un acuerdo. No es una amenaza ni una opción imaginaria: es un plan que puedes ejecutar.",principle:"Un acuerdo solo vale la pena si es mejor que tu alternativa, considerando costos, tiempo y relación.",example:{before:"Si no me subes el salario, me voy. Aunque no tengo otra opción.",after:"Si no es viable el ajuste ahora, quiero acordar indicadores y una revisión en 90 días mientras evalúo mis opciones."},steps:["Escribe dos alternativas realistas fuera de esta conversación.","Evalúa sus costos y elige la mejor.","Define tu límite de aceptación antes de entrar."],exercise:"Completa el campo «Mi alternativa» en la preparación del caso salarial.",scenario:"salario"},{id:"escucha",category:"Comunicación",title:"Escuchar también es una estrategia",short:"Baja la tensión sin renunciar a tu punto de vista.",time:3,icon:"ear",skill:"empathy",intro:"Escuchar activamente es comprobar que entiendes el problema desde la perspectiva de la otra persona. Validar una emoción no significa aceptar una exigencia ni justificar una conducta.",principle:"Reconoce la experiencia, resume la necesidad y comprueba tu interpretación.",example:{before:"Cálmate. No es para tanto.",after:"Entiendo que perder una jornada esperando fue frustrante. ¿Tu prioridad es tener una fecha de entrega confiable?"},steps:["Deja espacio para que la persona termine.","Nombra la situación y su impacto sin diagnosticar emociones.","Pregunta «¿Lo entendí bien?» y permite una corrección."],exercise:"Refleja una preocupación del interlocutor antes de presentar tu propuesta.",scenario:"companeros"},{id:"concesiones",category:"Estrategia",title:"Si cedo, ¿qué construimos a cambio?",short:"Transforma concesiones en intercambios con sentido.",time:5,icon:"exchange",skill:"strategy",intro:"Ceder sin una condición puede reducir tu margen sin resolver el problema. Una concesión condicionada vincula algo que puedes ofrecer con algo que necesitas. Los intercambios deben ser transparentes, voluntarios y viables para las dos partes.",principle:"Intercambia variables de distinto valor: algo que a ti te cuesta poco puede ser importante para la otra parte.",example:{before:"Está bien, te bajo el precio.",after:"Si confirmamos un volumen de tres meses y un calendario fijo, ¿podemos acordar $1.100 por unidad manteniendo la calidad?"},steps:["Lista qué puedes ofrecer y qué no.","Pregunta qué variable tiene más valor para la otra parte.","Usa «Si acordamos X, puedo ofrecer Y» y confirma el intercambio."],exercise:"Formula una propuesta condicionada en el caso del proveedor.",scenario:"proveedor"},{id:"limites",category:"Comunicación",title:"Un límite claro también cuida la relación",short:"Di que no con respeto, sin justificarte de más.",time:4,icon:"shield",skill:"assertiveness",intro:"La asertividad consiste en expresar necesidades y límites de forma clara, respetando a la otra persona. No necesitas convertir tu límite en un juicio sobre su carácter ni ofrecer una compensación que te perjudique.",principle:"Reconoce la petición, expresa tu límite y ofrece una alternativa solo si puedes cumplirla.",example:{before:"Siempre me pides todo a última hora. Arréglatelas.",after:"Sé que la presentación es importante. Este sábado voy a estudiar y no estaré disponible. Puedo revisar el esquema 20 minutos el viernes."},steps:["Describe qué puedes y qué no puedes hacer.","Usa primera persona y evita «siempre» o «nunca».","Si hay insistencia, repite el límite con calma."],exercise:"Protege tu fin de semana en «Un no que construye».",scenario:"limites"},{id:"presion",category:"Estrategia",title:"Reconoce la presión. Recupera el criterio.",short:"Responde a ultimátums sin entrar en el juego.",time:5,icon:"timer",skill:"emotion",intro:"Los plazos artificiales, las comparaciones sin evidencia y los ultimátums pueden empujarte a decidir antes de evaluar. No todas las urgencias son falsas: pide el motivo, comprueba el costo real de esperar y conserva tu capacidad de decir no.",principle:"No respondas a la urgencia con una concesión automática. Pide criterios y tiempo proporcional a la decisión.",example:{before:"Si otras consultoras aceptan, supongo que yo también.",after:"¿Qué hace necesario decidir hoy? Antes de comprometernos necesito confirmar alcance, anticipo y condiciones de salida."},steps:["Nombra el plazo sin acusar: «Veo que planteas decidir hoy».","Pregunta por qué existe y qué pasa si se revisa.","Vuelve a criterios objetivos y a tu alternativa."],exercise:"Cuestiona el plazo de cierre en «Socios, no adversarios».",scenario:"comercial"},{id:"cierre",category:"Fundamentos",title:"Un sí no siempre es un acuerdo",short:"Convierte buenas intenciones en compromisos claros.",time:4,icon:"check",skill:"agreement",intro:"Un acuerdo de calidad especifica qué hará cada parte, cuándo lo hará y cómo comprobarán que se cumplió. Si una autorización depende de alguien que no está en la conversación, el resultado es una propuesta pendiente, no una promesa definitiva.",principle:"Antes de cerrar, resume obligaciones, fechas, condiciones y el siguiente paso.",example:{before:"Perfecto, quedamos así.",after:"Confirmo: tú envías los datos el jueves a las 12:00, yo termino el módulo y revisamos a las 15:00. ¿Lo dejamos hoy por escrito?"},steps:["Recapitula el acuerdo en palabras simples.","Verifica que ambas partes pueden cumplirlo.","Define cómo avisarán de un bloqueo y cuándo revisarán el resultado."],exercise:"Termina tu próxima simulación resumiendo el acuerdo y pidiendo confirmación.",scenario:"superior"},{id:"evidencia",category:"Preparación",title:"Argumenta con hechos, no con etiquetas",short:"Haz que tu propuesta se sostenga en algo comprobable.",time:4,icon:"chart",skill:"clarity",intro:"«Soy muy bueno en mi trabajo» es difícil de evaluar. «Reduje un 20 % los tiempos de entrega coordinando a dos personas» permite discutir evidencia. Un argumento sólido conecta un hecho con una necesidad de la otra parte, sin exagerar causalidad.",principle:"Une situación, acción, resultado y relevancia para la decisión.",example:{before:"Merezco el puesto porque soy una persona responsable.",after:"Coordiné cinco personas durante seis semanas y entregamos el prototipo a tiempo. Usé un tablero de dependencias que podría aplicar a este proyecto."},steps:["Elige un resultado concreto y verificable.","Explica qué hiciste tú y qué hizo el equipo.","Relaciona ese resultado con la prioridad de tu interlocutor."],exercise:"Responde a la objeción de experiencia con un ejemplo específico.",scenario:"entrevista"}],oE={salario:[{id:"budget",pattern:/presupuesto|margen|banda|finanzas/,reply:"El margen autorizado este trimestre llega a $3.600.000. Más que la cifra aislada, Finanzas necesita consistencia con las bandas del equipo. Puedo documentar una revisión en 90 días si acordamos indicadores."},{id:"growth",pattern:/formacion|crecimiento|curso|flexibilidad/,reply:"Hay $600.000 para formación aplicada al equipo. También podemos revisar un día de trabajo remoto, sujeto a la coordinación del área. ¿Cuál de esas variables tiene más valor para ti?"},{id:"criteria",pattern:/indicador|medir|criterio|revision|resultados/,reply:"Podemos seguir el tiempo de entrega y la calidad de los procesos, con una revisión a los 90 días. No necesito que prometas un porcentaje que no controlas; sí que definamos cómo medir tu contribución."}],cliente:[{id:"delivery",pattern:/fecha|cuando|plazo|entrega|franja|horario/,reply:"Puedo recibir la pieza en tres días hábiles, pero necesito una franja horaria confirmada. Mañana no estaré en casa. No quiero perder otra jornada esperando sin saber cuándo llegará."},{id:"refund",pattern:/reembolso|devolucion|dinero|compensa|envio/,reply:"La devolución de los $80.000 del envío es justa por el retraso, pero no resuelve el escritorio. Si me devuelven todo, también necesito que organicen la recogida sin otro costo."},{id:"trust",pattern:/seguimiento|confianza|responsable|contacto|llamada/,reply:"Quiero un contacto directo y una confirmación escrita hoy. Si mañana me llamas con el estado y la franja de entrega, no tendré que empezar la historia de nuevo con cada persona."}],limites:[{id:"scope",pattern:/esquema|estructura|borrador|ideas/,reply:"El contenido ya está en el borrador. Si me ayudas a ordenar la introducción y los tres argumentos, podría hacer las diapositivas yo. No necesitas asumir toda la presentación."},{id:"time",pattern:/viernes|minutos|tiempo|sabado|examen/,reply:"Entiendo que el examen del lunes es tu prioridad. Los 20 minutos del viernes podrían servirme si nos concentramos solo en el esquema. Yo haría el diseño y el ensayo."},{id:"alternative",pattern:/equipo|alguien|otra persona|alternativa/,reply:"Podría pedirle a otra persona del equipo que escuche el ensayo. Me cuesta pedir ayuda porque siento que debería tenerlo todo resuelto, pero eso no debería convertirse en tu responsabilidad."}],entrevista:[{id:"expectation",pattern:/expectativa|exito|prioridad|primeros|necesit/,reply:"En los primeros tres meses esperamos un mapa de dependencias y alertas tempranas entre tres áreas. No buscamos que sepas todo: necesitamos que preguntes a tiempo y hagas visibles los riesgos."},{id:"example",pattern:/experiencia|prototipo|universidad|academico/,reply:"Me interesa el prototipo de seis semanas. ¿Qué decisión tomaste tú cuando hubo un retraso? Quiero distinguir tu contribución de la del equipo, sin restarle mérito a nadie."},{id:"process",pattern:/prueba|siguiente|proceso|semana/,reply:"El siguiente paso puede ser una prueba práctica de coordinación y una conversación con la líder la próxima semana. Antes de agendarla, necesito un ejemplo claro de cómo anticipas un bloqueo."}],venta:[{id:"price",pattern:/precio|presupuesto|descuento|caro|650/,reply:"Los $650.000 son mi referencia, pero un software que nadie puede implementar también sale caro. Si me demuestras ahorro real de tiempo y acompañamiento, puedo evaluar los $900.000."},{id:"success",pattern:/horas|medir|criterio|exito|ahorro|errores/,reply:"Hoy perdemos seis horas semanales conciliando. Me serviría reducirlas a tres y registrar menos diferencias de inventario. Eso tendría que comprobarse con mis datos durante la prueba."},{id:"approval",pattern:/socia|aprobar|decision|implementacion|soporte/,reply:"Mi socia aprueba el gasto. Yo me ocuparía de la herramienta, pero necesito una sesión de implementación. A ella le llevaría una propuesta con precio, ahorro esperado y cómo cancelar si no funciona."}],companeros:[{id:"cause",pattern:/retras|bloque|paso|prioridad|urgencia/,reply:"Me asignaron una urgencia de otro proyecto y no sabía qué priorizar. Debí avisarte antes. Si elevamos el choque de prioridades juntos, no tengo que fingir que puedo con todo."},{id:"repair",pattern:/reunion|delante|publico|respeto|ayer/,reply:"Lo de ayer frente al equipo me dolió. Prefiero que los bloqueos se hablen en privado y que al resto le comuniquemos el plan, no culpables."},{id:"tasks",pattern:/modulo|jueves|datos|responsabilidad|plazo/,reply:"Puedo entregar los datos el jueves a las 12:00 si tú preparas el segundo módulo. A las 15:00 podríamos revisarlos juntos y avisar cualquier bloqueo por un mensaje privado."}],superior:[{id:"scope",pattern:/alcance|diapositiva|presentacion|reunion/,reply:"Para Comercial bastan tres diapositivas con cifras verificadas. No necesito una presentación extensa. Esa versión ejecutiva toma tres horas, así que habría que ajustar la otra entrega igualmente."},{id:"priority",pattern:/prioridad|informe|horas|plazo|fecha/,reply:"La reunión comercial tiene fecha externa. El informe es interno y puede moverse un día, pero debemos avisar hoy a quienes lo esperan. Prefiero una fecha realista a enterarme del retraso mañana."},{id:"risk",pattern:/cifra|proyeccion|riesgo|valid|dato/,reply:"Solo quiero cifras validadas. Podemos señalar una proyección como pendiente, explicando qué dato falta y cuándo se confirma. No presentes una estimación como si fuera un resultado."}],proveedor:[{id:"cost",pattern:/costo|insumo|logistica|diseno|materia/,reply:"Los cambios de diseño y las entregas extraordinarias nos cuestan mucho. Mantener un diseño estándar y fechas quincenales permitiría llegar a $1.100 sin bajar la calidad sanitaria."},{id:"volume",pattern:/volumen|5000|5.000|meses|compromiso/,reply:"Con 5.000 unidades al mes durante tres meses puedo planificar compras y producción. Necesito formalizar ese compromiso y el calendario; una intención sin volumen no me da previsión."},{id:"quality",pattern:/calidad|sanitari|certifica|garantia/,reply:"No negociamos los controles sanitarios. El diseño estándar cambia la personalización, no el material apto para alimentos. Podemos dejar las especificaciones y los controles por escrito."}],comercial:[{id:"exclusive",pattern:/exclusiv|competidor|ano/,reply:"Buscamos proteger el lanzamiento frente al competidor directo. No necesitamos bloquear todos tus clientes durante un año. Una exclusividad limitada al piloto podría ser suficiente."},{id:"payment",pattern:/anticipo|pago|caja|30|90/,reply:"Nuestra política es pagar a 90 días, pero se pueden aprobar anticipos del 30 % para pilotos con hitos verificables. Necesitaría un alcance y un calendario claros para pedir esa excepción."},{id:"scope",pattern:/alcance|piloto|semanas|funcion|plazo/,reply:"El lanzamiento requiere una prueba en cuatro semanas. Podemos reducir funciones para ese piloto y presupuestar el resto en una segunda fase. No conviene fingir que seis semanas caben en cuatro."}],desacuerdo:[{id:"criteria",pattern:/criterio|rubrica|compar|just/,reply:"Propongo que ambos usemos la misma rúbrica: evidencia original, viabilidad e impacto. Podemos puntuar por separado y después revisar las diferencias, sin diseñar criterios para favorecer una idea."},{id:"sources",pattern:/fuente|entrevista|tiempo|semanas|viable/,reply:"Tenemos tres fuentes locales y solo dos semanas. El tema global necesitaría más datos secundarios; podríamos usar esos datos como marco y aportar evidencia local propia."},{id:"participation",pattern:/equipo|particip|tarea|repart/,reply:"Quien no pueda entrevistar puede analizar fuentes o preparar la visualización. Quiero que todas las contribuciones se reconozcan y que el reparto quede definido hoy."}],alquiler:[{id:"stability",pattern:/vacio|puntual|estab|renov|meses/,reply:"Renovar doce meses y seguir recibiendo el pago puntualmente me da estabilidad. Evitar un periodo vacío puede compensar una parte de la diferencia que pedía."},{id:"comparison",pattern:/anuncio|mercado|precio|1600|1.600/,reply:"Los anuncios son una referencia, pero no sabemos a cuánto se cerraron. Si comparas tamaño, ubicación y estado, podemos revisar juntos si $1.600.000 es una cifra razonable."},{id:"repair",pattern:/filtra|repar|estructural|manten/,reply:"La filtración requiere una revisión técnica a mi cargo. Podemos separar ese compromiso de la renovación y dejar por escrito las responsabilidades de mantenimiento sin trasladarte la reparación estructural."}],feedback:[{id:"facts",pattern:/hecho|reunion|interrump|ejemplo/,reply:"Si hablamos de las interrupciones en esas tres reuniones, puedo revisar una conducta concreta. Me cuesta más entenderlo si se resume en que «soy dominante». ¿Qué pauta quieres que probemos?"},{id:"privacy",pattern:/quien|quejo|dijo|confidencial|nombre/,reply:"Me gustaría saber quién lo dijo, pero puedo trabajar con los hechos que tú observaste sin pedirte nombres. Quiero poder responder a ejemplos concretos."},{id:"urgent",pattern:/riesgo|alerta|urgente|cliente|senal/,reply:"Podría anotar las observaciones y esperar el turno. Para un riesgo inmediato al cliente acordemos una señal breve, expliquemos el motivo y después devolvamos la palabra a quien hablaba."}]},kx={salario:{pattern:/finanzas|banda|90|indicador|revision/,response:"Entonces dejemos la revisión de los 90 días con indicadores y responsables. Cualquier aumento posterior al margen actual sigue sujeto a Finanzas.",addition:"Revisión en 90 días; cualquier aumento posterior queda sujeto a aprobación de Finanzas."},cliente:{pattern:/franja|horario|tres dias|3 dias|no estar|contact|confirm/,response:"Con una franja confirmada y seguimiento personal mañana sí puedo organizarme. La pieza llegará en tres días hábiles, no mañana.",addition:"Confirmación escrita hoy, contacto de seguimiento mañana y franja horaria acordada para la entrega."},limites:{pattern:/20|veinte|limite|viernes|no|ensayo|equipo/,response:"Está bien: mantengamos los 20 minutos del viernes solo para el esquema. El ensayo se lo pediré a otra persona.",addition:"La ayuda termina a los 20 minutos y no incluye ensayo ni trabajo el fin de semana."},entrevista:{pattern:/riesgo|depend|alerta|avis|fecha|prioridad|verific/,response:"Eso es lo que queremos comprobar: avisar el riesgo, verificar las dependencias y acordar la fecha antes de prometer. Lo incluiremos en la prueba práctica.",addition:"La prueba incluye comunicar un cambio de fecha entre áreas sin prometer una entrega no validada."},venta:{pattern:/socia|ahorro|propuesta|cancel|aproba|medir/,response:"Llevaré la propuesta a mi socia con precio, criterio de ahorro y salida sin contratación si la prueba no cumple. La prueba no equivale aún a una venta.",addition:"La contratación queda pendiente de resultados de la prueba y aprobación de la socia; se explican las condiciones de cancelación."},companeros:{pattern:/prioridad|jefe|elevar|juntos|bloque|avis/,response:"Elevemos hoy el conflicto de prioridades con el mismo mensaje. Si no liberan mi tiempo, revisamos el reparto antes de comprometer una entrega imposible.",addition:"Elevan juntos el conflicto de prioridades y revisan el reparto si no se libera la capacidad necesaria."},superior:{pattern:/valid|proyeccion|dato|riesgo|pendiente|estim/,response:"Dejemos la proyección como pendiente de validar, con el dato que falta y una fecha para revisarla. La presentación llevará solo cifras verificadas.",addition:"Solo se presentan cifras verificadas y se identifican las proyecciones pendientes con su fecha de validación."},proveedor:{pattern:/calendario|quincen|extraord|fij|logistica|plan/,response:"Con calendario quincenal fijo y entregas extraordinarias cotizadas por separado podemos sostener los $1.100 y la calidad acordada.",addition:"Calendario quincenal fijo; cualquier entrega extraordinaria se cotiza y autoriza por separado."},comercial:{pattern:/alcance|fase|presupuest|funcion|excluir|cambio/,response:"La funcionalidad adicional irá a una segunda fase, con presupuesto y fecha por aprobar. El piloto conserva el alcance original de cuatro semanas.",addition:"La nueva funcionalidad queda fuera del piloto y requiere alcance, presupuesto y fecha propios para una segunda fase."},desacuerdo:{pattern:/fuente|anal|visual|tarea|repart|particip/,response:"Asignemos análisis de fuentes a quien no puede entrevistar. Todas las tareas tendrán responsable, fecha y el mismo reconocimiento en la entrega.",addition:"Quien no pueda entrevistar realiza análisis de fuentes; se registran responsables y fechas para todas las tareas."},alquiler:{pattern:/filtra|repar|estructural|separ|manten|escrito/,response:"La revisión de la filtración corre por mi cuenta y quedará separada del alquiler. No te estoy trasladando una reparación estructural por renovar.",addition:"La propietaria gestiona la revisión técnica de la filtración; no se traslada una reparación estructural a la persona arrendataria."},feedback:{pattern:/senal|riesgo|alerta|urgente|turno|cliente/,response:"Acordemos una señal para un riesgo inmediato al cliente, con explicación breve y devolución de la palabra. No se usará para cualquier desacuerdo técnico.",addition:"Se acuerda una señal de alerta solo para riesgos inmediatos y se devuelve la palabra después de explicarlos."}},lE={cliente:{pattern:/(?:entreg|reemplaz|resuelv).{0,30}(?:hoy|manana|24 horas)/,response:"El almacén necesita tres días hábiles. Si me prometes una entrega hoy o mañana, vuelves a ofrecer una fecha que no puedes cumplir. Prefiero una solución verificable.",reason:"La entrega prometida contradice el plazo mínimo de tres días hábiles."},proveedor:{pattern:/(?:baj|reduc|sacrific|elimin).{0,25}(?:calidad|sanitari|control)/,response:"No podemos reducir los estándares sanitarios. Podemos ajustar el diseño, la previsión y la logística, pero no la seguridad del empaque.",reason:"Reducir los estándares sanitarios cruza una restricción explícita del caso."},comercial:{pattern:/(?:acepto|ofrezco|propongo).{0,35}exclusividad.{0,20}(?:ano|general|total)/,response:"Una exclusividad general de un año bloquearía tu capacidad de atender a otros clientes. Antes de aceptarla revisemos si necesitas limitarla al piloto o al competidor directo.",reason:"La exclusividad general contradice el límite de autonomía de tu negocio."}},Ia=o=>o.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),ra=(o,t)=>t.test(o),tr=(o,t=0,i=100)=>Math.max(t,Math.min(i,o));function Xx(o,t={},i={}){return{id:i.id||crypto.randomUUID(),scenarioId:o.id,startedAt:i.startedAt||new Date().toISOString(),preparation:t,turn:0,trust:50,tension:25,discovered:!1,heard:!1,valued:!1,conditional:!1,bounded:!1,offer:null,agreed:!1,status:"active",topics:[],openIssue:!1,events:[],messages:[{role:"person",text:o.opening,turn:0}]}}function cE(o){const t=Ia(o);return ra(t,/idiota|inutil|estupid|callate|no me importa|te vas a arrepentir|te voy a despedir|mientes|es tu culpa|no sirves/)?"pressure":ra(t,/(?:no puedo|no voy a|no acepto|no estoy de acuerdo|no me parece bien|rechazo|mi limite|no estare|no me es posible|no puedo comprometer|no estoy dispuest|hasta aqui)/)?"boundary":ra(t,/(?:si acordamos|si podemos|a cambio|si te|si confirmamos|si mantenemos|si aceptas|si nos|si fijamos|si reducimos|podria.+si |puedo.+si |si .+(?:puedo|podemos|ofrezco|acepto))/)?"trade":/^(?:no|no gracias|prefiero no|eso no)[.!\s]*$/.test(t)?"boundary":/^(?:si|vale|listo|perfecto|ok|aceptado)[.!\s]*$/.test(t)||ra(t,/acepto|de acuerdo|confirmo|cerremos|cerramos|trato hecho|me parece bien|aceptamos/)&&!ra(t,/(?:no|sin) .{0,20}(?:acept|acuerdo|confirm|cerr|parece bien)/)?"accept":ra(t,/entiendo|comprendo|escucho|frustr|lamento|siento que|disculp|reconozco|perdon|te preocupa|tu preocupacion|te importa/)?"reflect":ra(t,/\?|¿|que necesitas|cual es|que te|cuales son|cuentame|ayudame a entender|como podriamos|por que|que prioridad|que es lo/)?"discover":ra(t,/propongo|ofrezco|podemos acordar|mi propuesta|sugiero|que tal|podriamos|alternativa|hagamos|revisemos|pagar|salario de|precio de|\$|\d[.,]?\d*\s*(?:millones|mil|%)/)?"propose":ra(t,/resultado|reduj|mejor|experiencia|coordine|coordin|evidencia|logr|dato|puntual|rubrica|horas|prototipo|impacto|semanas|reuniones|interrump|entrega|costos|ahorro/)?"value":"clarify"}function uE(o){const t=Ia(o),i=t.match(/(\d+(?:[.,]\d+)?)\s*(?:millones|millon)/);if(i)return Math.round(Number(i[1].replace(",","."))*1e6);const r=t.match(/(\d+(?:[.,]\d+)?)\s*mil\b/);if(r)return Math.round(Number(r[1].replace(",","."))*1e3);const l=t.match(/(?:\$\s*)?(\d{1,3}(?:[.,]\d{3})+)(?!\d)/);if(l)return Number(l[1].replace(/[.,]/g,""));const d=t.match(/\$\s*(\d{3,})|\b(\d{4,})\s*(?:cop|pesos|por unidad|mensuales|al mes)?/);return d?Number(d[1]||d[2]):null}function Wx(o,t,i,r){var U;if(o.status!=="active")return o;const l=structuredClone(o),d=r||cE(i),h=Ia(i),p=uE(i),g=h.includes(Ia(t.option)),m=(oE[t.id]||[]).find(F=>F.pattern.test(h)),S=o.events.some(F=>Ia(F.text)===h),_=kx[t.id];l.turn++;let x="",b="",T=null;const w=[],M=(...F)=>w.push(...F);switch(d){case"discover":x=l.discovered?`Mi prioridad sigue siendo ${t.person.motivation.charAt(0).toLowerCase()+t.person.motivation.slice(1)} ${l.offer?"Podemos revisar la propuesta que acabamos de plantear. ¿Qué condición necesitas ajustar?":"Con eso en mente, ¿qué alternativa concreta propondrías? No puedo comprometerme sin conocer las condiciones."}`:t.discovery,l.discovered=!0,l.trust+=8,l.tension-=7,b="Abriste espacio para conocer los intereses de la otra parte.",M("listening","strategy");break;case"reflect":x=l.heard?`Gracias por tenerlo en cuenta. ${l.offer?"Ahora necesitamos concretar si las condiciones de la propuesta te funcionan.":t.objection}`:`Gracias por reconocerlo. ${t.discovery}`,l.heard=!0,l.discovered=!0,l.trust+=10,l.tension-=12,b="Reconociste la perspectiva del interlocutor. Comprender no te obliga a ceder.",M("empathy","listening","emotion");break;case"value":x=`${t.value} ${l.discovered?"¿Cómo lo convertirías en una propuesta que podamos cumplir?":t.objection}`,l.valued=!0,l.trust+=7,b="Conectaste tu argumento con información relevante del caso.",M("clarity","strategy");break;case"boundary":l.bounded=!0,ra(h,/nunca|siempre|es tu problema|arreglatelas/)?(x=`Puedo escuchar tu límite, pero me cuesta avanzar si lo planteas como un reproche. ${t.objection}`,l.tension+=8,b="El límite es válido; las generalizaciones pueden dificultar que se escuche.",M("assertiveness")):(x=`Entiendo ese límite. ${l.discovered?t.counter:t.discovery}`,l.discovered&&(l.offer={text:t.option,amount:t.ceiling||null,type:"counter"}),l.trust+=5,l.tension-=4,b="Hiciste visible una restricción. Ahora puedes explorar opciones dentro de ella.",M("assertiveness","emotion"));break;case"pressure":x="No quiero continuar en esos términos. Podemos discrepar sin descalificarnos. Si quieres retomar, necesito que volvamos al problema con respeto.",l.trust-=25,l.tension+=30,l.offer=null,b="La presión personal elevó la tensión y retiró las propuestas pendientes.",o.events.filter(F=>F.intent==="pressure").length>=1&&(x+=" Voy a terminar esta conversación por ahora. Podemos retomarla cuando haya condiciones para hablar.",l.status="finished",l.reason="relationship");break;case"accept":l.offer&&l.trust>=35?(l.agreed=!0,l.status="finished",l.reason="agreement",x=`De acuerdo. Confirmamos: ${l.offer.text.charAt(0).toLowerCase()+l.offer.text.slice(1)}. Dejemos estas condiciones por escrito y confirmemos quién hace el siguiente paso.`,b="Cerraste sobre una propuesta concreta, con condiciones que ambas partes conocen.",M("agreement","clarity")):(x="Aún no tenemos una propuesta concreta que aceptar. Antes de cerrar, aclaremos qué haría cada parte y en qué condiciones. ¿Qué propones?",b="Mostrar disposición ayuda, pero un sí sin condiciones todavía no constituye un acuerdo.");break;case"trade":case"propose":{if(l.trust<35){x=`Antes de negociar condiciones necesito recuperar la confianza en esta conversación. ${t.objection}`,b="La tensión acumulada impide que la propuesta avance. Reconocer el impacto puede abrir una vía de reparación.";break}p&&t.ceiling&&(t.floor&&p<t.floor||!t.floor&&p>t.ceiling)?(x=`${t.objection} ${t.counter}`,l.offer={text:t.option,amount:t.ceiling,type:"counter"},b=t.floor&&p<t.floor?"El precio propuesto está por debajo de tu mínimo autorizado. La contrapropuesta vuelve a condiciones viables.":"La cifra supera el margen disponible. Recibiste una contrapropuesta: aceptarla no equivale a conseguir tu petición original.",M("clarity")):!g&&p&&t.ceiling&&!t.floor&&p<=t.ceiling&&p>t.baseline?(l.offer={text:`Una base de $${p.toLocaleString("es-CO")} ${t.unit}. Antes de cerrar quedan por confirmar los plazos y las condiciones complementarias`,amount:p,type:"proposal",needsDetail:!0},x=`La cifra de $${p.toLocaleString("es-CO")} ${t.unit} está dentro del margen que puedo considerar. ${t.objection} Para confirmarla necesitamos concretar también plazos y condiciones.`,b="Tu cifra es viable. Falta transformar el precio en un acuerdo con condiciones verificables.",M("clarity")):(x=l.discovered?t.counter:`${t.objection} ${t.counter}`,l.offer={text:t.option,amount:t.ceiling||null,type:"counter"},b=l.discovered?"Tu propuesta abrió una negociación sobre varias condiciones.":"Propusiste pronto. Hay una contrapropuesta, pero aún puedes explorar por qué esas condiciones importan.",M("clarity",...l.discovered?["creativity"]:[])),d==="trade"&&(l.conditional=!0,l.trust+=7,M("strategy","assertiveness","creativity")),l.trust+=3;break}default:x=`Cuando dices «${i.length>110?i.slice(0,107)+"…":i}», necesito entender cómo se conecta con lo que estamos resolviendo. ${l.discovered?"¿Puedes concretar qué propones o qué condición necesitas aclarar?":t.objection}`,b="Tu intervención necesita más precisión. Formula una pregunta, un argumento con evidencia o una propuesta concreta."}d==="accept"&&((U=o.offer)!=null&&U.needsDetail)&&(l.agreed=!1,l.status="active",l.reason=null,l.offer={text:t.option,amount:t.ceiling,type:"counter"},x=`Antes de cerrarlo, mi propuesta completa es esta: ${t.option.charAt(0).toLowerCase()+t.option.slice(1)}. Revisa que también te funcionen estas condiciones; podemos confirmarlas o seguir negociando.`,b="Una cifra por sí sola no basta: ahora tienes una propuesta completa para revisar."),S&&d!=="pressure"&&l.status==="active"?(l.trust=o.trust,l.tension=o.tension,w.length=0,x=`Eso ya lo planteamos. ${(m==null?void 0:m.reply)||t.objection} Para avanzar, necesito que ajustes o concretes la siguiente decisión.`,b="Repetir la misma intervención no añadió información ni generó nueva evidencia de habilidad."):m&&["discover","reflect","value","clarify"].includes(d)&&(x=`${d==="reflect"?"Gracias por reconocerlo. ":""}${m.reply}`,l.topics=[...new Set([...o.topics||[],m.id])],d==="clarify"&&(b="Abordaste una variable del caso. Puedes profundizar con una pregunta o convertirla en una propuesta.")),t.level===3&&!o.discovered&&["propose","trade"].includes(d)&&(l.offer=null,x=`Antes de ofrecer condiciones, necesito que comprendamos nuestras restricciones. ${t.objection}`,b="En este caso complejo, proponer sin explorar intereses todavía no abrió una oferta viable.",w.splice(0,w.length,"clarity"));const y=lE[t.id];return y&&y.pattern.test(h)&&!/no (?:puedo|voy a|podemos|prometo)/.test(h)&&["propose","trade","accept"].includes(d)&&(l.offer=null,l.agreed=!1,l.status="active",l.reason=null,x=y.response,b=y.reason,w.length=0,l.trust-=8),o.openIssue&&d==="accept"?(l.agreed=!1,l.status="active",l.reason=null,x=`Antes de confirmar, quedó una condición pendiente: ${t.twist} Necesito que acordemos cómo la resolveremos.`,b="El cambio de contexto sigue abierto. La aceptación no resuelve por sí sola esa condición.",w.length=0):o.openIssue&&(_!=null&&_.pattern.test(h))&&!["pressure","accept"].includes(d)&&(l.openIssue=!1,x=_.response,l.offer?l.offer.text=`${l.offer.text}. ${_.addition}`:l.offer={text:`${t.option}. ${_.addition}`,amount:t.ceiling||null,type:"counter"},M("strategy","creativity"),b="Integraste la nueva restricción en las condiciones. Ahora hay una propuesta actualizada que puedes revisar."),l.turn===(t.level===3?3:4)&&l.status==="active"&&d!=="pressure"&&(T=t.twist,l.openIssue=!0,x+=`

Hay algo más que debemos considerar: ${t.twist.charAt(0).toLowerCase()+t.twist.slice(1)}`,l.tension+=6),l.trust=tr(l.trust),l.tension=tr(l.tension),l.messages.push({role:"user",text:i,turn:l.turn}),l.messages.push({role:"person",text:x,turn:l.turn}),l.events.push({turn:l.turn,text:i,intent:d,reply:x,insight:b,effects:[...new Set(w)],unexpected:T,risk:y!=null&&y.pattern.test(h)&&!/no (?:puedo|voy a|podemos|prometo)/.test(h)?y.reason:null}),l.turn>=12&&l.status==="active"&&(l.status="finished",l.reason="time",l.messages.push({role:"system",text:"Terminó el tiempo de práctica. Revisemos lo que construiste y lo que aún quedó pendiente.",turn:l.turn})),l.status==="finished"&&(l.finishedAt=new Date().toISOString()),l}function ip(o){return{...o,status:"finished",reason:"manual",finishedAt:new Date().toISOString()}}function dE(o,t,i){let r=Xx(t,o.preparation);for(const l of o.events.slice(0,i-1))r=Wx(r,t,l.text,l.intent);return r}function fE(o,t){const i=[];return o.openIssue?[{intent:"trade",label:"Integrar la nueva condición",text:`Revisemos la nueva información antes de cerrar. Propongo incorporar esta condición: ${kx[t.id].addition}`},{intent:"discover",label:"Explorar el cambio",text:"¿Cómo cambia nuestra propuesta con esta nueva restricción? Quiero entender qué podemos mantener antes de confirmar."},{intent:"boundary",label:"Volver a mis límites",text:`${t.starter} Necesito revisar las nuevas condiciones antes de aceptar.`}]:(o.discovered||i.push({intent:"discover",label:"Explorar intereses",text:"Antes de proponer algo, ¿qué es lo más importante para ti y qué restricciones debemos tener en cuenta?"}),o.heard||i.push({intent:"reflect",label:"Reconocer su perspectiva",text:"Entiendo que esta situación también tiene un costo para ti. Quiero comprender tu preocupación antes de buscar una solución."}),!o.valued&&!o.offer&&i.push({intent:"value",label:"Argumentar con hechos",text:`Quiero poner un dato sobre la mesa: ${t.facts[0].charAt(0).toLowerCase()+t.facts[0].slice(1)} Creo que es relevante para encontrar una solución viable.`}),o.discovered&&!o.offer&&i.push({intent:"trade",label:"Proponer un intercambio",text:`Si encontramos condiciones que cuiden lo importante para ambos, propongo: ${t.option.charAt(0).toLowerCase()+t.option.slice(1)}. ¿Qué necesitarías ajustar?`}),o.offer&&(i.push({intent:"accept",label:o.offer.needsDetail?"Completar las condiciones":"Confirmar el acuerdo",text:o.offer.needsDetail?"La base me funciona. Antes de confirmar, ¿qué plazos y condiciones complementarias quedarían acordados?":`Confirmo que me funcionan estas condiciones: ${o.offer.text}. ¿Dejamos el acuerdo y el siguiente paso por escrito?`}),i.push({intent:"discover",label:"Verificar antes de cerrar",text:"¿Qué podría impedir que cumplamos estas condiciones y cómo lo revisaríamos a tiempo?"})),o.discovered&&i.push({intent:"boundary",label:"Expresar un límite",text:`${t.starter} Quiero buscar una solución dentro de ese límite.`}),i.slice(0,3))}function Yx(o){const t=o.events,i=t.filter(g=>g.intent==="pressure").length,r=Object.values(o.preparation).filter(g=>typeof g=="string"&&g.trim().length>=12).length,l=Object.fromEntries(ai.map(([g])=>[g,t.filter(m=>m.effects.includes(g))])),d={};for(const[g]of ai){const m=l[g].length;d[g]=tr(m?50+Math.min(m,3)*12:24,0,95)}d.preparation=Math.min(95,25+r*23),d.emotion=tr(i?35-i*12+l.emotion.length*12:t.length?65+Math.min(l.emotion.length,2)*12:24),d.agreement=o.agreed?tr(62+(o.discovered?10:0)+(o.conditional?8:0)+(o.bounded?8:0),0,95):o.offer?43:20,i&&(d.empathy=tr(d.empathy-i*15),d.strategy=tr(d.strategy-i*10));const h=Math.round(Object.values(d).reduce((g,m)=>g+m,0)/ai.length),p=ai.filter(([g])=>g!=="agreement").slice().sort((g,m)=>d[g[0]]-d[m[0]]);return{scores:d,evidence:l,average:h,weakest:p.slice(0,2),strongest:p.slice(-2).reverse(),pressure:i,preparation:r}}const O_={discover:"Exploración de intereses",reflect:"Escucha y reconocimiento",value:"Argumento con evidencia",boundary:"Expresión de un límite",pressure:"Presión personal",accept:"Verificación y cierre",propose:"Propuesta",trade:"Intercambio condicionado",clarify:"Intervención por precisar"};function hE(o,t){return o.intent==="pressure"?{title:"Separa a la persona del problema",better:"Quiero encontrar una solución, pero necesito que revisemos los hechos y las condiciones con respeto. ¿Qué es lo más importante para ti aquí?"}:o.intent==="clarify"?{title:"Haz visible lo que necesitas",better:`Mi objetivo es ${t.objective.charAt(0).toLowerCase()+t.objective.slice(1)} ¿Qué necesitarías para explorar una propuesta en esa dirección?`}:o.intent==="propose"&&!o.effects.includes("creativity")?{title:"Explora antes de anclar la negociación",better:"Antes de hablar de condiciones, ¿qué te preocupa más y qué margen tenemos para ajustar otras variables?"}:o.intent==="accept"?{title:"Cierra con responsabilidades y seguimiento",better:"Recapitulemos las condiciones, quién se encarga de cada paso y cuándo revisaremos el cumplimiento. Si surge un bloqueo, ¿cómo nos avisamos?"}:o.intent==="value"?{title:"Conecta la evidencia con su interés",better:`${t.facts[0]} ¿Cómo podríamos usar ese dato para resolver tu preocupación principal?`}:o.intent==="boundary"?{title:"Añade una opción dentro de tu límite",better:`${t.starter} ¿Podemos construir una alternativa que respete ese límite y atienda tu prioridad?`}:{title:"Profundiza y comprueba tu interpretación",better:`Si te entendí bien, tu prioridad es ${t.person.motivation.charAt(0).toLowerCase()+t.person.motivation.slice(1)} ¿Qué condición sería imprescindible y cuál podríamos ajustar?`}}const Zx="pacto-v1",uo={history:[],active:null,completedLessons:[],name:"Alex",weeklyGoal:3},P_=o=>o&&typeof o.id=="string"&&typeof o.scenarioId=="string"&&Array.isArray(o.events)&&o.events.every(t=>typeof t.text=="string"&&typeof t.reply=="string"&&Array.isArray(t.effects))&&Array.isArray(o.messages)&&o.messages.every(t=>typeof t.text=="string")&&o.preparation&&typeof o.trust=="number"&&typeof o.tension=="number";function pE(){try{const o=JSON.parse(localStorage.getItem(Zx));return!o||!Array.isArray(o.history)||!Array.isArray(o.completedLessons)?{...uo}:{...uo,name:typeof o.name=="string"&&o.name.trim()?o.name.slice(0,32):uo.name,weeklyGoal:[1,2,3,4,5,7].includes(o.weeklyGoal)?o.weeklyGoal:uo.weeklyGoal,completedLessons:o.completedLessons.filter(t=>typeof t=="string"),history:o.history.filter(t=>P_(t)&&t.status==="finished"&&t.finishedAt),active:P_(o.active)&&o.active.status==="active"?o.active:null}}catch{return{...uo}}}function mE(o){try{return localStorage.setItem(Zx,JSON.stringify(o)),!0}catch{return!1}}function Qx(o,t,i="application/json"){const r=URL.createObjectURL(new Blob([t],{type:i})),l=document.createElement("a");l.href=r,l.download=o,l.click(),setTimeout(()=>URL.revokeObjectURL(r),1e3)}const Kx="America/Bogota";function Jx(o=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:Kx,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date(o))}function $x(o,t={}){return new Intl.DateTimeFormat("es-CO",{timeZone:Kx,...t}).format(new Date(o))}function gE(o=new Date){const t=new Date(`${Jx(o)}T12:00:00Z`);return t.setUTCDate(t.getUTCDate()-(t.getUTCDay()+6)%7),t.toISOString().slice(0,10)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const em="187",vE=0,z_=1,_E=2,Lu=1,xE=2,El=3,ir=0,ri=1,za=2,ho=0,Rl=1,I_=2,F_=3,B_=4,yE=5,fo=100,SE=101,ME=102,bE=103,EE=104,TE=200,AE=201,RE=202,CE=203,ey=204,ty=205,NE=206,wE=207,DE=208,LE=209,UE=210,OE=211,PE=212,zE=213,IE=214,ap=0,sp=1,rp=2,wl=3,op=4,lp=5,cp=6,up=7,ny=0,FE=1,BE=2,Ba=0,iy=1,ay=2,sy=3,tm=4,ry=5,oy=6,ly=7,cy=300,vo=301,Dl=302,Uu=303,Rh=304,dp=1e3,Fa=1001,fp=1002,Bn=1003,HE=1004,lu=1005,si=1006,Ch=1007,bs=1008,xi=1009,uy=1010,dy=1011,Ll=1012,nm=1013,pa=1014,la=1015,ma=1016,im=1017,am=1018,_o=1020,fy=35902,hy=35899,py=1021,my=1022,ca=1023,Ts=1026,Es=1027,gy=1028,sm=1029,ar=1030,rm=1031,om=1033,Ou=33776,Pu=33777,zu=33778,Iu=33779,hp=35840,pp=35841,mp=35842,gp=35843,vp=36196,_p=37492,xp=37496,yp=37488,Sp=37489,Hu=37490,Mp=37491,bp=37808,Ep=37809,Tp=37810,Ap=37811,Rp=37812,Cp=37813,Np=37814,wp=37815,Dp=37816,Lp=37817,Up=37818,Op=37819,Pp=37820,zp=37821,Ip=36492,Fp=36494,Bp=36495,Hp=36283,Gp=36284,Gu=36285,jp=36286,GE=3200,Vp=0,jE=1,Ms="",ii="srgb",ju="srgb-linear",Vu="linear",kt="srgb",Nh=7680,VE=519,qE=512,kE=513,XE=514,vy=515,WE=516,YE=517,_y=518,xy=519,ZE=35044,H_="300 es",Xi=2e3,Ul=2001;function QE(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function qu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function KE(){const o=qu("canvas");return o.style.display="block",o}const G_={};function j_(...o){const t="THREE."+o.shift();console.log(t,...o)}function yy(o){const t=o[0];if(typeof t=="string"&&t.startsWith("TSL:")){const i=o[1];i&&i.isStackTrace?o[0]+=" "+i.getLocation():o[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return o}function ut(...o){o=yy(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.warn(i.getError(t)):console.warn(t,...o)}}function It(...o){o=yy(o);const t="THREE."+o.shift();{const i=o[0];i&&i.isStackTrace?console.error(i.getError(t)):console.error(t,...o)}}function po(...o){const t=o.join(" ");t in G_||(G_[t]=!0,ut(...o))}function JE(o,t,i){return new Promise(function(r,l){function d(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(d,i);break;default:r()}}setTimeout(d,i)})}const $E={[ap]:ap,[rp]:cp,[op]:op,[wl]:lp,[sp]:sp,[cp]:rp,[up]:up,[lp]:wl};class or{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const d=l.indexOf(i);d!==-1&&l.splice(d,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let d=0,h=l.length;d<h;d++)l[d].call(this,t);t.target=null}}}const jn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wh=Math.PI/180,qp=180/Math.PI;function zl(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(jn[o&255]+jn[o>>8&255]+jn[o>>16&255]+jn[o>>24&255]+"-"+jn[t&255]+jn[t>>8&255]+"-"+jn[t>>16&15|64]+jn[t>>24&255]+"-"+jn[i&63|128]+jn[i>>8&255]+"-"+jn[i>>16&255]+jn[i>>24&255]+jn[r&255]+jn[r>>8&255]+jn[r>>16&255]+jn[r>>24&255]).toLowerCase()}function At(o,t,i){return Math.max(t,Math.min(i,o))}function e1(o,t){return(o%t+t)%t}function Dh(o,t,i){return(1-i)*o+i*t}function t1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function lm(o){switch(o.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function n1(o,t){if(t.constructor===Float32Array)return o;const i=lm(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(o/i,-1)}function i1(o,t){if(t.constructor===Float32Array)return o;const i=lm(t);if(i===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(o*i)}const pm=class pm{constructor(t=0,i=0){this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(At(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),d=this.x-t.x,h=this.y-t.y;return this.x=d*r-h*l+t.x,this.y=d*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pm.prototype.isVector2=!0;let wt=pm;class So{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,d,h,p){let g=r[l+0],m=r[l+1],S=r[l+2],_=r[l+3],x=d[h+0],b=d[h+1],T=d[h+2],w=d[h+3];if(_!==w||g!==x||m!==b||S!==T){let M=g*x+m*b+S*T+_*w;M<0&&(x=-x,b=-b,T=-T,w=-w,M=-M);let y=1-p;if(M<.9995){const U=Math.acos(M),F=Math.sin(U);y=Math.sin(y*U)/F,p=Math.sin(p*U)/F,g=g*y+x*p,m=m*y+b*p,S=S*y+T*p,_=_*y+w*p}else{g=g*y+x*p,m=m*y+b*p,S=S*y+T*p,_=_*y+w*p;const U=1/Math.sqrt(g*g+m*m+S*S+_*_);g*=U,m*=U,S*=U,_*=U}}t[i]=g,t[i+1]=m,t[i+2]=S,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,d,h){const p=r[l],g=r[l+1],m=r[l+2],S=r[l+3],_=d[h],x=d[h+1],b=d[h+2],T=d[h+3];return t[i]=p*T+S*_+g*b-m*x,t[i+1]=g*T+S*x+m*_-p*b,t[i+2]=m*T+S*b+p*x-g*_,t[i+3]=S*T-p*_-g*x-m*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,d=t._z,h=t._order,p=Math.cos,g=Math.sin,m=p(r/2),S=p(l/2),_=p(d/2),x=g(r/2),b=g(l/2),T=g(d/2);switch(h){case"XYZ":this._x=x*S*_+m*b*T,this._y=m*b*_-x*S*T,this._z=m*S*T+x*b*_,this._w=m*S*_-x*b*T;break;case"YXZ":this._x=x*S*_+m*b*T,this._y=m*b*_-x*S*T,this._z=m*S*T-x*b*_,this._w=m*S*_+x*b*T;break;case"ZXY":this._x=x*S*_-m*b*T,this._y=m*b*_+x*S*T,this._z=m*S*T+x*b*_,this._w=m*S*_-x*b*T;break;case"ZYX":this._x=x*S*_-m*b*T,this._y=m*b*_+x*S*T,this._z=m*S*T-x*b*_,this._w=m*S*_+x*b*T;break;case"YZX":this._x=x*S*_+m*b*T,this._y=m*b*_+x*S*T,this._z=m*S*T-x*b*_,this._w=m*S*_-x*b*T;break;case"XZY":this._x=x*S*_-m*b*T,this._y=m*b*_-x*S*T,this._z=m*S*T+x*b*_,this._w=m*S*_+x*b*T;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],d=i[8],h=i[1],p=i[5],g=i[9],m=i[2],S=i[6],_=i[10],x=r+p+_;if(x>0){const b=.5/Math.sqrt(x+1);this._w=.25/b,this._x=(S-g)*b,this._y=(d-m)*b,this._z=(h-l)*b}else if(r>p&&r>_){const b=2*Math.sqrt(1+r-p-_);this._w=(S-g)/b,this._x=.25*b,this._y=(l+h)/b,this._z=(d+m)/b}else if(p>_){const b=2*Math.sqrt(1+p-r-_);this._w=(d-m)/b,this._x=(l+h)/b,this._y=.25*b,this._z=(g+S)/b}else{const b=2*Math.sqrt(1+_-r-p);this._w=(h-l)/b,this._x=(d+m)/b,this._y=(g+S)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(At(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,d=t._z,h=t._w,p=i._x,g=i._y,m=i._z,S=i._w;return this._x=r*S+h*p+l*m-d*g,this._y=l*S+h*g+d*p-r*m,this._z=d*S+h*m+r*g-l*p,this._w=h*S-r*p-l*g-d*m,this._onChangeCallback(),this}slerp(t,i){let r=t._x,l=t._y,d=t._z,h=t._w,p=this.dot(t);p<0&&(r=-r,l=-l,d=-d,h=-h,p=-p);let g=1-i;if(p<.9995){const m=Math.acos(p),S=Math.sin(m);g=Math.sin(g*m)/S,i=Math.sin(i*m)/S,this._x=this._x*g+r*i,this._y=this._y*g+l*i,this._z=this._z*g+d*i,this._w=this._w*g+h*i,this._onChangeCallback()}else this._x=this._x*g+r*i,this._y=this._y*g+l*i,this._z=this._z*g+d*i,this._w=this._w*g+h*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),d=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),d*Math.sin(i),d*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const mm=class mm{constructor(t=0,i=0,r=0){this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(V_.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(V_.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,d=t.elements;return this.x=d[0]*i+d[3]*r+d[6]*l,this.y=d[1]*i+d[4]*r+d[7]*l,this.z=d[2]*i+d[5]*r+d[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,d=t.elements,h=1/(d[3]*i+d[7]*r+d[11]*l+d[15]);return this.x=(d[0]*i+d[4]*r+d[8]*l+d[12])*h,this.y=(d[1]*i+d[5]*r+d[9]*l+d[13])*h,this.z=(d[2]*i+d[6]*r+d[10]*l+d[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,d=t.x,h=t.y,p=t.z,g=t.w,m=2*(h*l-p*r),S=2*(p*i-d*l),_=2*(d*r-h*i);return this.x=i+g*m+h*_-p*S,this.y=r+g*S+p*m-d*_,this.z=l+g*_+d*S-h*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l,this.y=d[1]*i+d[5]*r+d[9]*l,this.z=d[2]*i+d[6]*r+d[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this.z=At(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this.z=At(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,d=t.z,h=i.x,p=i.y,g=i.z;return this.x=l*g-d*p,this.y=d*h-r*g,this.z=r*p-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Lh.copy(this).projectOnVector(t),this.sub(Lh)}reflect(t){return this.sub(Lh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(At(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};mm.prototype.isVector3=!0;let fe=mm;const Lh=new fe,V_=new So,gm=class gm{constructor(t,i,r,l,d,h,p,g,m){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,d,h,p,g,m)}set(t,i,r,l,d,h,p,g,m){const S=this.elements;return S[0]=t,S[1]=l,S[2]=p,S[3]=i,S[4]=d,S[5]=g,S[6]=r,S[7]=h,S[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,d=this.elements,h=r[0],p=r[3],g=r[6],m=r[1],S=r[4],_=r[7],x=r[2],b=r[5],T=r[8],w=l[0],M=l[3],y=l[6],U=l[1],F=l[4],N=l[7],I=l[2],P=l[5],E=l[8];return d[0]=h*w+p*U+g*I,d[3]=h*M+p*F+g*P,d[6]=h*y+p*N+g*E,d[1]=m*w+S*U+_*I,d[4]=m*M+S*F+_*P,d[7]=m*y+S*N+_*E,d[2]=x*w+b*U+T*I,d[5]=x*M+b*F+T*P,d[8]=x*y+b*N+T*E,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],d=t[3],h=t[4],p=t[5],g=t[6],m=t[7],S=t[8];return i*h*S-i*p*m-r*d*S+r*p*g+l*d*m-l*h*g}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],d=t[3],h=t[4],p=t[5],g=t[6],m=t[7],S=t[8],_=S*h-p*m,x=p*g-S*d,b=m*d-h*g,T=i*_+r*x+l*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=_*w,t[1]=(l*m-S*r)*w,t[2]=(p*r-l*h)*w,t[3]=x*w,t[4]=(S*i-l*g)*w,t[5]=(l*d-p*i)*w,t[6]=b*w,t[7]=(r*g-m*i)*w,t[8]=(h*i-r*d)*w,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,d,h,p){const g=Math.cos(d),m=Math.sin(d);return this.set(r*g,r*m,-r*(g*h+m*p)+h+t,-l*m,l*g,-l*(-m*h+g*p)+p+i,0,0,1),this}scale(t,i){return po("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Uh.makeScale(t,i)),this}rotate(t){return po("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Uh.makeRotation(-t)),this}translate(t,i){return po("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Uh.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}};gm.prototype.isMatrix3=!0;let dt=gm;const Uh=new dt,q_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),k_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function a1(){const o={enabled:!0,workingColorSpace:ju,spaces:{},convert:function(l,d,h){return this.enabled===!1||d===h||!d||!h||(this.spaces[d].transfer===kt&&(l.r=Ha(l.r),l.g=Ha(l.g),l.b=Ha(l.b)),this.spaces[d].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[d].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===kt&&(l.r=mo(l.r),l.g=mo(l.g),l.b=mo(l.b))),l},workingToColorSpace:function(l,d){return this.convert(l,this.workingColorSpace,d)},colorSpaceToWorking:function(l,d){return this.convert(l,d,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ms?Vu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,d=this.workingColorSpace){return l.fromArray(this.spaces[d].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,d,h){return l.copy(this.spaces[h].fromXYZ).multiply(this.spaces[d].toXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ju]:{primaries:t,whitePoint:r,transfer:Vu,toXYZ:q_,fromXYZ:k_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:t,whitePoint:r,transfer:kt,toXYZ:q_,fromXYZ:k_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),o}const Nt=a1();function Ha(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function mo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Jr;class s1{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{Jr===void 0&&(Jr=qu("canvas")),Jr.width=t.width,Jr.height=t.height;const l=Jr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=Jr}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=qu("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),d=l.data;for(let h=0;h<d.length;h++)d[h]=Ha(d[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ha(i[r]/255)*255):i[r]=Ha(i[r]);return{data:i,width:t.width,height:t.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let r1=0;class cm{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=zl(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayWidth,i.displayHeight,0):i!==null?t.set(i.width||0,i.height||0,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let d;if(Array.isArray(l)){d=[];for(let h=0,p=l.length;h<p;h++)l[h].isDataTexture?d.push(Oh(l[h].image)):d.push(Oh(l[h]))}else d=Oh(l);r.url=d}return i||(t.images[this.uuid]=r),r}}function Oh(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?s1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let o1=0;const Ph=new fe;class qn extends or{constructor(t=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,r=Fa,l=Fa,d=si,h=bs,p=ca,g=xi,m=qn.DEFAULT_ANISOTROPY,S=Ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=zl(),this.name="",this.source=new cm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=d,this.minFilter=h,this.anisotropy=m,this.format=p,this.internalFormat=null,this.type=g,this.offset=new wt(0,0),this.repeat=new wt(1,1),this.center=new wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ph).x}get height(){return this.source.getSize(Ph).y}get depth(){return this.source.getSize(Ph).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ut(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case dp:t.x=t.x-Math.floor(t.x);break;case Fa:t.x=t.x<0?0:1;break;case fp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case dp:t.y=t.y-Math.floor(t.y);break;case Fa:t.y=t.y<0?0:1;break;case fp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=cy;qn.DEFAULT_ANISOTROPY=1;const vm=class vm{constructor(t=0,i=0,r=0,l=1){this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,d=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*d,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*d,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*d,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*d,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,d;const g=t.elements,m=g[0],S=g[4],_=g[8],x=g[1],b=g[5],T=g[9],w=g[2],M=g[6],y=g[10];if(Math.abs(S-x)<.01&&Math.abs(_-w)<.01&&Math.abs(T-M)<.01){if(Math.abs(S+x)<.1&&Math.abs(_+w)<.1&&Math.abs(T+M)<.1&&Math.abs(m+b+y-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const F=(m+1)/2,N=(b+1)/2,I=(y+1)/2,P=(S+x)/4,E=(_+w)/4,L=(T+M)/4;return F>N&&F>I?F<.01?(r=0,l=.707106781,d=.707106781):(r=Math.sqrt(F),l=P/r,d=E/r):N>I?N<.01?(r=.707106781,l=0,d=.707106781):(l=Math.sqrt(N),r=P/l,d=L/l):I<.01?(r=.707106781,l=.707106781,d=0):(d=Math.sqrt(I),r=E/d,l=L/d),this.set(r,l,d,i),this}let U=Math.sqrt((M-T)*(M-T)+(_-w)*(_-w)+(x-S)*(x-S));return Math.abs(U)<.001&&(U=1),this.x=(M-T)/U,this.y=(_-w)/U,this.z=(x-S)/U,this.w=Math.acos((m+b+y-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=At(this.x,t.x,i.x),this.y=At(this.y,t.y,i.y),this.z=At(this.z,t.z,i.z),this.w=At(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=At(this.x,t,i),this.y=At(this.y,t,i),this.z=At(this.z,t,i),this.w=At(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};vm.prototype.isVector4=!0;let ln=vm;class l1 extends or{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:si,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,t,i),this.scissorTest=!1,this.viewport=new ln(0,0,t,i),this.textures=[];const l=r.count;for(let d=0;d<l;d++)this.textures[d]=new qn({width:t,height:i,depth:r.depth}),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(t={}){const i={minFilter:si,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(i.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,d=this.textures.length;l<d;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new cm(l)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){const i=t.depthTexture.clone();i.renderTarget=null,this.depthTexture=i}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class da extends l1{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Sy extends qn{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class c1 extends qn{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Fa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}}const Xu=class Xu{constructor(t,i,r,l,d,h,p,g,m,S,_,x,b,T,w,M){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,d,h,p,g,m,S,_,x,b,T,w,M)}set(t,i,r,l,d,h,p,g,m,S,_,x,b,T,w,M){const y=this.elements;return y[0]=t,y[4]=i,y[8]=r,y[12]=l,y[1]=d,y[5]=h,y[9]=p,y[13]=g,y[2]=m,y[6]=S,y[10]=_,y[14]=x,y[3]=b,y[7]=T,y[11]=w,y[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xu().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return this.determinantAffine()===0?(t.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();const i=this.elements,r=t.elements,l=1/$r.setFromMatrixColumn(t,0).length(),d=1/$r.setFromMatrixColumn(t,1).length(),h=1/$r.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*d,i[5]=r[5]*d,i[6]=r[6]*d,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,d=t.z,h=Math.cos(r),p=Math.sin(r),g=Math.cos(l),m=Math.sin(l),S=Math.cos(d),_=Math.sin(d);if(t.order==="XYZ"){const x=h*S,b=h*_,T=p*S,w=p*_;i[0]=g*S,i[4]=-g*_,i[8]=m,i[1]=b+T*m,i[5]=x-w*m,i[9]=-p*g,i[2]=w-x*m,i[6]=T+b*m,i[10]=h*g}else if(t.order==="YXZ"){const x=g*S,b=g*_,T=m*S,w=m*_;i[0]=x+w*p,i[4]=T*p-b,i[8]=h*m,i[1]=h*_,i[5]=h*S,i[9]=-p,i[2]=b*p-T,i[6]=w+x*p,i[10]=h*g}else if(t.order==="ZXY"){const x=g*S,b=g*_,T=m*S,w=m*_;i[0]=x-w*p,i[4]=-h*_,i[8]=T+b*p,i[1]=b+T*p,i[5]=h*S,i[9]=w-x*p,i[2]=-h*m,i[6]=p,i[10]=h*g}else if(t.order==="ZYX"){const x=h*S,b=h*_,T=p*S,w=p*_;i[0]=g*S,i[4]=T*m-b,i[8]=x*m+w,i[1]=g*_,i[5]=w*m+x,i[9]=b*m-T,i[2]=-m,i[6]=p*g,i[10]=h*g}else if(t.order==="YZX"){const x=h*g,b=h*m,T=p*g,w=p*m;i[0]=g*S,i[4]=w-x*_,i[8]=T*_+b,i[1]=_,i[5]=h*S,i[9]=-p*S,i[2]=-m*S,i[6]=b*_+T,i[10]=x-w*_}else if(t.order==="XZY"){const x=h*g,b=h*m,T=p*g,w=p*m;i[0]=g*S,i[4]=-_,i[8]=m*S,i[1]=x*_+w,i[5]=h*S,i[9]=b*_-T,i[2]=T*_-b,i[6]=p*S,i[10]=w*_+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(u1,t,d1)}lookAt(t,i,r){const l=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),gs.crossVectors(r,gi),gs.lengthSq()===0&&(Math.abs(r.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),gs.crossVectors(r,gi)),gs.normalize(),cu.crossVectors(gi,gs),l[0]=gs.x,l[4]=cu.x,l[8]=gi.x,l[1]=gs.y,l[5]=cu.y,l[9]=gi.y,l[2]=gs.z,l[6]=cu.z,l[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,d=this.elements,h=r[0],p=r[4],g=r[8],m=r[12],S=r[1],_=r[5],x=r[9],b=r[13],T=r[2],w=r[6],M=r[10],y=r[14],U=r[3],F=r[7],N=r[11],I=r[15],P=l[0],E=l[4],L=l[8],J=l[12],V=l[1],k=l[5],ae=l[9],pe=l[13],q=l[2],ee=l[6],X=l[10],H=l[14],ce=l[3],te=l[7],ue=l[11],Te=l[15];return d[0]=h*P+p*V+g*q+m*ce,d[4]=h*E+p*k+g*ee+m*te,d[8]=h*L+p*ae+g*X+m*ue,d[12]=h*J+p*pe+g*H+m*Te,d[1]=S*P+_*V+x*q+b*ce,d[5]=S*E+_*k+x*ee+b*te,d[9]=S*L+_*ae+x*X+b*ue,d[13]=S*J+_*pe+x*H+b*Te,d[2]=T*P+w*V+M*q+y*ce,d[6]=T*E+w*k+M*ee+y*te,d[10]=T*L+w*ae+M*X+y*ue,d[14]=T*J+w*pe+M*H+y*Te,d[3]=U*P+F*V+N*q+I*ce,d[7]=U*E+F*k+N*ee+I*te,d[11]=U*L+F*ae+N*X+I*ue,d[15]=U*J+F*pe+N*H+I*Te,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],d=t[12],h=t[1],p=t[5],g=t[9],m=t[13],S=t[2],_=t[6],x=t[10],b=t[14],T=t[3],w=t[7],M=t[11],y=t[15],U=g*b-m*x,F=p*b-m*_,N=p*x-g*_,I=h*b-m*S,P=h*x-g*S,E=h*_-p*S;return i*(w*U-M*F+y*N)-r*(T*U-M*I+y*P)+l*(T*F-w*I+y*E)-d*(T*N-w*P+M*E)}determinantAffine(){const t=this.elements,i=t[0],r=t[4],l=t[8],d=t[1],h=t[5],p=t[9],g=t[2],m=t[6],S=t[10];return i*(h*S-p*m)-r*(d*S-p*g)+l*(d*m-h*g)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],d=t[3],h=t[4],p=t[5],g=t[6],m=t[7],S=t[8],_=t[9],x=t[10],b=t[11],T=t[12],w=t[13],M=t[14],y=t[15],U=i*p-r*h,F=i*g-l*h,N=i*m-d*h,I=r*g-l*p,P=r*m-d*p,E=l*m-d*g,L=S*w-_*T,J=S*M-x*T,V=S*y-b*T,k=_*M-x*w,ae=_*y-b*w,pe=x*y-b*M,q=U*pe-F*ae+N*k+I*V-P*J+E*L;if(q===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/q;return t[0]=(p*pe-g*ae+m*k)*ee,t[1]=(l*ae-r*pe-d*k)*ee,t[2]=(w*E-M*P+y*I)*ee,t[3]=(x*P-_*E-b*I)*ee,t[4]=(g*V-h*pe-m*J)*ee,t[5]=(i*pe-l*V+d*J)*ee,t[6]=(M*N-T*E-y*F)*ee,t[7]=(S*E-x*N+b*F)*ee,t[8]=(h*ae-p*V+m*L)*ee,t[9]=(r*V-i*ae-d*L)*ee,t[10]=(T*P-w*N+y*U)*ee,t[11]=(_*N-S*P-b*U)*ee,t[12]=(p*J-h*k-g*L)*ee,t[13]=(i*k-r*J+l*L)*ee,t[14]=(w*F-T*I-M*U)*ee,t[15]=(S*I-_*F+x*U)*ee,this}scale(t){const i=this.elements,r=t.x,l=t.y,d=t.z;return i[0]*=r,i[4]*=l,i[8]*=d,i[1]*=r,i[5]*=l,i[9]*=d,i[2]*=r,i[6]*=l,i[10]*=d,i[3]*=r,i[7]*=l,i[11]*=d,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),d=1-r,h=t.x,p=t.y,g=t.z,m=d*h,S=d*p;return this.set(m*h+r,m*p-l*g,m*g+l*p,0,m*p+l*g,S*p+r,S*g-l*h,0,m*g-l*p,S*g+l*h,d*g*g+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,d,h){return this.set(1,r,d,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,d=i._x,h=i._y,p=i._z,g=i._w,m=d+d,S=h+h,_=p+p,x=d*m,b=d*S,T=d*_,w=h*S,M=h*_,y=p*_,U=g*m,F=g*S,N=g*_,I=r.x,P=r.y,E=r.z;return l[0]=(1-(w+y))*I,l[1]=(b+N)*I,l[2]=(T-F)*I,l[3]=0,l[4]=(b-N)*P,l[5]=(1-(x+y))*P,l[6]=(M+U)*P,l[7]=0,l[8]=(T+F)*E,l[9]=(M-U)*E,l[10]=(1-(x+w))*E,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;t.x=l[12],t.y=l[13],t.z=l[14];const d=this.determinantAffine();if(d===0)return r.set(1,1,1),i.identity(),this;let h=$r.set(l[0],l[1],l[2]).length();const p=$r.set(l[4],l[5],l[6]).length(),g=$r.set(l[8],l[9],l[10]).length();d<0&&(h=-h),Gi.copy(this);const m=1/h,S=1/p,_=1/g;return Gi.elements[0]*=m,Gi.elements[1]*=m,Gi.elements[2]*=m,Gi.elements[4]*=S,Gi.elements[5]*=S,Gi.elements[6]*=S,Gi.elements[8]*=_,Gi.elements[9]*=_,Gi.elements[10]*=_,i.setFromRotationMatrix(Gi),r.x=h,r.y=p,r.z=g,this}makePerspective(t,i,r,l,d,h,p=Xi,g=!1){const m=this.elements,S=2*d/(i-t),_=2*d/(r-l),x=(i+t)/(i-t),b=(r+l)/(r-l);let T,w;if(g)T=d/(h-d),w=h*d/(h-d);else if(p===Xi)T=-(h+d)/(h-d),w=-2*h*d/(h-d);else if(p===Ul)T=-h/(h-d),w=-h*d/(h-d);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+p);return m[0]=S,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=_,m[9]=b,m[13]=0,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,d,h,p=Xi,g=!1){const m=this.elements,S=2/(i-t),_=2/(r-l),x=-(i+t)/(i-t),b=-(r+l)/(r-l);let T,w;if(g)T=1/(h-d),w=h/(h-d);else if(p===Xi)T=-2/(h-d),w=-(h+d)/(h-d);else if(p===Ul)T=-1/(h-d),w=-d/(h-d);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+p);return m[0]=S,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=_,m[9]=0,m[13]=b,m[2]=0,m[6]=0,m[10]=T,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}};Xu.prototype.isMatrix4=!0;let cn=Xu;const $r=new fe,Gi=new cn,u1=new fe(0,0,0),d1=new fe(1,1,1),gs=new fe,cu=new fe,gi=new fe,X_=new cn,W_=new So;class As{constructor(t=0,i=0,r=0,l=As.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,d=l[0],h=l[4],p=l[8],g=l[1],m=l[5],S=l[9],_=l[2],x=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-S,b),this._z=Math.atan2(-h,d)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-At(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(p,b),this._z=Math.atan2(g,m)):(this._y=Math.atan2(-_,d),this._z=0);break;case"ZXY":this._x=Math.asin(At(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(g,d));break;case"ZYX":this._y=Math.asin(-At(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,b),this._z=Math.atan2(g,d)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(At(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(-S,m),this._y=Math.atan2(-_,d)):(this._x=0,this._y=Math.atan2(p,b));break;case"XZY":this._z=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(p,d)):(this._x=Math.atan2(-S,b),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return X_.makeRotationFromQuaternion(t),this.setFromRotationMatrix(X_,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return W_.setFromEuler(this),this.setFromQuaternion(W_,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}As.DEFAULT_ORDER="XYZ";class My{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let f1=0;const Y_=new fe,eo=new So,Da=new cn,uu=new fe,xl=new fe,h1=new fe,p1=new So,Z_=new fe(1,0,0),Q_=new fe(0,1,0),K_=new fe(0,0,1),J_={type:"added"},m1={type:"removed"},to={type:"childadded",child:null},zh={type:"childremoved",child:null};class kn extends or{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:f1++}),this.uuid=zl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const t=new fe,i=new As,r=new So,l=new fe(1,1,1);function d(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(d),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new cn},normalMatrix:{value:new dt}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new My,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return eo.setFromAxisAngle(t,i),this.quaternion.multiply(eo),this}rotateOnWorldAxis(t,i){return eo.setFromAxisAngle(t,i),this.quaternion.premultiply(eo),this}rotateX(t){return this.rotateOnAxis(Z_,t)}rotateY(t){return this.rotateOnAxis(Q_,t)}rotateZ(t){return this.rotateOnAxis(K_,t)}translateOnAxis(t,i){return Y_.copy(t).applyQuaternion(this.quaternion),this.position.add(Y_.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Z_,t)}translateY(t){return this.translateOnAxis(Q_,t)}translateZ(t){return this.translateOnAxis(K_,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?uu.copy(t):uu.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),xl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(xl,uu,this.up):Da.lookAt(uu,xl,this.up),this.quaternion.setFromRotationMatrix(Da),l&&(Da.extractRotation(l.matrixWorld),eo.setFromRotationMatrix(Da),this.quaternion.premultiply(eo.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(It("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(J_),to.child=t,this.dispatchEvent(to),to.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(m1),zh.child=t,this.dispatchEvent(zh),zh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Da.multiply(t.parent.matrixWorld)),t.applyMatrix4(Da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(J_),to.child=t,this.dispatchEvent(to),to.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let d=0,h=l.length;d<h;d++)l[d].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,t,h1),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xl,p1,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const t=this.pivot;if(t!==null){const i=t.x,r=t.y,l=t.z,d=this.matrix.elements;d[12]+=i-d[0]*i-d[4]*r-d[8]*l,d[13]+=r-d[1]*i-d[5]*r-d[9]*l,d[14]+=l-d[2]*i-d[6]*r-d[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i,r=!1){const l=this.parent;if(t===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),i===!0){const d=this.children;for(let h=0,p=d.length;h<p;h++)d[h].updateWorldMatrix(!1,!0,r)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(p=>({...p,boundingBox:p.boundingBox?p.boundingBox.toJSON():void 0,boundingSphere:p.boundingSphere?p.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(p=>({...p})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function d(p,g){return p[g.uuid]===void 0&&(p[g.uuid]=g.toJSON(t)),g.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=d(t.geometries,this.geometry);const p=this.geometry.parameters;if(p!==void 0&&p.shapes!==void 0){const g=p.shapes;if(Array.isArray(g))for(let m=0,S=g.length;m<S;m++){const _=g[m];d(t.shapes,_)}else d(t.shapes,g)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(d(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const p=[];for(let g=0,m=this.material.length;g<m;g++)p.push(d(t.materials,this.material[g]));l.material=p}else l.material=d(t.materials,this.material);if(this.children.length>0){l.children=[];for(let p=0;p<this.children.length;p++)l.children.push(this.children[p].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let p=0;p<this.animations.length;p++){const g=this.animations[p];l.animations.push(d(t.animations,g))}}if(i){const p=h(t.geometries),g=h(t.materials),m=h(t.textures),S=h(t.images),_=h(t.shapes),x=h(t.skeletons),b=h(t.animations),T=h(t.nodes);p.length>0&&(r.geometries=p),g.length>0&&(r.materials=g),m.length>0&&(r.textures=m),S.length>0&&(r.images=S),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),b.length>0&&(r.animations=b),T.length>0&&(r.nodes=T)}return r.object=l,r;function h(p){const g=[];for(const m in p){const S=p[m];delete S.metadata,g.push(S)}return g}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}kn.DEFAULT_UP=new fe(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Tl extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const g1={type:"move"};class Ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Tl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Tl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new fe,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new fe),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Tl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new fe,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new fe,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,d=null,h=null;const p=this._targetRay,g=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){h=!0;for(const w of t.hand.values()){const M=i.getJointPose(w,r),y=this._getHandJoint(m,w);M!==null&&(y.matrix.fromArray(M.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=M.radius),y.visible=M!==null}const S=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],x=S.position.distanceTo(_.position),b=.02,T=.005;m.inputState.pinching&&x>b+T?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&x<=b-T&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else g!==null&&t.gripSpace&&(d=i.getPose(t.gripSpace,r),d!==null&&(g.matrix.fromArray(d.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,d.linearVelocity?(g.hasLinearVelocity=!0,g.linearVelocity.copy(d.linearVelocity)):g.hasLinearVelocity=!1,d.angularVelocity?(g.hasAngularVelocity=!0,g.angularVelocity.copy(d.angularVelocity)):g.hasAngularVelocity=!1,g.eventsEnabled&&g.dispatchEvent({type:"gripUpdated",data:t,target:this})));p!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&d!==null&&(l=d),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1,this.dispatchEvent(g1)))}return p!==null&&(p.visible=l!==null),g!==null&&(g.visible=d!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Tl;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}const by={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},du={h:0,s:0,l:0};function Fh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Rt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=ii){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Nt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Nt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Nt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Nt.workingColorSpace){if(t=e1(t,1),i=At(i,0,1),r=At(r,0,1),i===0)this.r=this.g=this.b=r;else{const d=r<=.5?r*(1+i):r+i-r*i,h=2*r-d;this.r=Fh(h,d,t+1/3),this.g=Fh(h,d,t),this.b=Fh(h,d,t-1/3)}return Nt.colorSpaceToWorking(this,l),this}setStyle(t,i=ii){function r(d){d!==void 0&&parseFloat(d)<1&&ut("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let d;const h=l[1],p=l[2];switch(h){case"rgb":case"rgba":if(d=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(d[4]),this.setRGB(Math.min(255,parseInt(d[1],10))/255,Math.min(255,parseInt(d[2],10))/255,Math.min(255,parseInt(d[3],10))/255,i);if(d=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(d[4]),this.setRGB(Math.min(100,parseFloat(d[1]))/100,Math.min(100,parseFloat(d[2]))/100,Math.min(100,parseFloat(d[3]))/100,i);break;case"hsl":case"hsla":if(d=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(p))return r(d[4]),this.setHSL(parseFloat(d[1])/360,parseFloat(d[2])/100,parseFloat(d[3])/100,i);break;default:ut("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const d=l[1],h=d.length;if(h===3)return this.setRGB(parseInt(d.charAt(0),16)/15,parseInt(d.charAt(1),16)/15,parseInt(d.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(d,16),i);ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=ii){const r=by[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ha(t.r),this.g=Ha(t.g),this.b=Ha(t.b),this}copyLinearToSRGB(t){return this.r=mo(t.r),this.g=mo(t.g),this.b=mo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ii){return Nt.workingToColorSpace(Vn.copy(this),t),Math.round(At(Vn.r*255,0,255))*65536+Math.round(At(Vn.g*255,0,255))*256+Math.round(At(Vn.b*255,0,255))}getHexString(t=ii){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Nt.workingColorSpace){Nt.workingToColorSpace(Vn.copy(this),i);const r=Vn.r,l=Vn.g,d=Vn.b,h=Math.max(r,l,d),p=Math.min(r,l,d);let g,m;const S=(p+h)/2;if(p===h)g=0,m=0;else{const _=h-p;switch(m=S<=.5?_/(h+p):_/(2-h-p),h){case r:g=(l-d)/_+(l<d?6:0);break;case l:g=(d-r)/_+2;break;case d:g=(r-l)/_+4;break}g/=6}return t.h=g,t.s=m,t.l=S,t}getRGB(t,i=Nt.workingColorSpace){return Nt.workingToColorSpace(Vn.copy(this),i),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=ii){Nt.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,r=Vn.g,l=Vn.b;return t!==ii?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(vs),this.setHSL(vs.h+t,vs.s+i,vs.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(vs),t.getHSL(du);const r=Dh(vs.h,du.h,i),l=Dh(vs.s,du.s,i),d=Dh(vs.l,du.l,i);return this.setHSL(r,l,d),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,d=t.elements;return this.r=d[0]*i+d[3]*r+d[6]*l,this.g=d[1]*i+d[4]*r+d[7]*l,this.b=d[2]*i+d[5]*r+d[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new Rt;Rt.NAMES=by;class v1 extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new As,this.environmentIntensity=1,this.environmentRotation=new As,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),i.object.backgroundBlurriness=this.backgroundBlurriness,i.object.backgroundIntensity=this.backgroundIntensity,i.object.backgroundRotation=this.backgroundRotation.toArray(),i.object.environmentIntensity=this.environmentIntensity,i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ji=new fe,La=new fe,Bh=new fe,Ua=new fe,no=new fe,io=new fe,$_=new fe,Hh=new fe,Gh=new fe,jh=new fe,Vh=new ln,qh=new ln,kh=new ln;class ki{constructor(t=new fe,i=new fe,r=new fe){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),ji.subVectors(t,i),l.cross(ji);const d=l.lengthSq();return d>0?l.multiplyScalar(1/Math.sqrt(d)):l.set(0,0,0)}static getBarycoord(t,i,r,l,d){ji.subVectors(l,i),La.subVectors(r,i),Bh.subVectors(t,i);const h=ji.dot(ji),p=ji.dot(La),g=ji.dot(Bh),m=La.dot(La),S=La.dot(Bh),_=h*m-p*p;if(_===0)return d.set(0,0,0),null;const x=1/_,b=(m*g-p*S)*x,T=(h*S-p*g)*x;return d.set(1-b-T,T,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(t,i,r,l,d,h,p,g){return this.getBarycoord(t,i,r,l,Ua)===null?(g.x=0,g.y=0,"z"in g&&(g.z=0),"w"in g&&(g.w=0),null):(g.setScalar(0),g.addScaledVector(d,Ua.x),g.addScaledVector(h,Ua.y),g.addScaledVector(p,Ua.z),g)}static getInterpolatedAttribute(t,i,r,l,d,h){return Vh.setScalar(0),qh.setScalar(0),kh.setScalar(0),Vh.fromBufferAttribute(t,i),qh.fromBufferAttribute(t,r),kh.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(Vh,d.x),h.addScaledVector(qh,d.y),h.addScaledVector(kh,d.z),h}static isFrontFacing(t,i,r,l){return ji.subVectors(r,i),La.subVectors(t,i),ji.cross(La).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),La.subVectors(this.a,this.b),ji.cross(La).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ki.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,d){return ki.getInterpolation(t,this.a,this.b,this.c,i,r,l,d)}containsPoint(t){return ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,d=this.c;let h,p;no.subVectors(l,r),io.subVectors(d,r),Hh.subVectors(t,r);const g=no.dot(Hh),m=io.dot(Hh);if(g<=0&&m<=0)return i.copy(r);Gh.subVectors(t,l);const S=no.dot(Gh),_=io.dot(Gh);if(S>=0&&_<=S)return i.copy(l);const x=g*_-S*m;if(x<=0&&g>=0&&S<=0&&g-S>0)return h=g/(g-S),i.copy(r).addScaledVector(no,h);jh.subVectors(t,d);const b=no.dot(jh),T=io.dot(jh);if(T>=0&&b<=T)return i.copy(d);const w=b*m-g*T;if(w<=0&&m>=0&&T<=0)return p=m/(m-T),i.copy(r).addScaledVector(io,p);const M=S*T-b*_;if(M<=0&&_-S>=0&&b-T>=0)return $_.subVectors(d,l),p=(_-S)/(_-S+(b-T)),i.copy(l).addScaledVector($_,p);const y=1/(M+w+x);return h=w*y,p=x*y,i.copy(r).addScaledVector(no,h).addScaledVector(io,p)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}class Il{constructor(t=new fe(1/0,1/0,1/0),i=new fe(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(Vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(Vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=Vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const d=r.getAttribute("position");if(i===!0&&d!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let h=0,p=d.count;h<p;h++)t.isMesh===!0?t.getVertexPosition(h,Vi):Vi.fromBufferAttribute(d,h),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),fu.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),fu.copy(r.boundingBox)),fu.applyMatrix4(t.matrixWorld),this.union(fu)}const l=t.children;for(let d=0,h=l.length;d<h;d++)this.expandByObject(l[d],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(yl),hu.subVectors(this.max,yl),ao.subVectors(t.a,yl),so.subVectors(t.b,yl),ro.subVectors(t.c,yl),_s.subVectors(so,ao),xs.subVectors(ro,so),Ks.subVectors(ao,ro);let i=[0,-_s.z,_s.y,0,-xs.z,xs.y,0,-Ks.z,Ks.y,_s.z,0,-_s.x,xs.z,0,-xs.x,Ks.z,0,-Ks.x,-_s.y,_s.x,0,-xs.y,xs.x,0,-Ks.y,Ks.x,0];return!Xh(i,ao,so,ro,hu)||(i=[1,0,0,0,1,0,0,0,1],!Xh(i,ao,so,ro,hu))?!1:(pu.crossVectors(_s,xs),i=[pu.x,pu.y,pu.z],Xh(i,ao,so,ro,hu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Oa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Oa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Oa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Oa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Oa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Oa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Oa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Oa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Oa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Oa=[new fe,new fe,new fe,new fe,new fe,new fe,new fe,new fe],Vi=new fe,fu=new Il,ao=new fe,so=new fe,ro=new fe,_s=new fe,xs=new fe,Ks=new fe,yl=new fe,hu=new fe,pu=new fe,Js=new fe;function Xh(o,t,i,r,l){for(let d=0,h=o.length-3;d<=h;d+=3){Js.fromArray(o,d);const p=l.x*Math.abs(Js.x)+l.y*Math.abs(Js.y)+l.z*Math.abs(Js.z),g=t.dot(Js),m=i.dot(Js),S=r.dot(Js);if(Math.max(-Math.max(g,m,S),Math.min(g,m,S))>p)return!1}return!0}const yn=new fe,mu=new wt;let _1=0;class nr extends or{constructor(t,i,r=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_1++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=ZE,this.updateRanges=[],this.gpuType=la,this.version=0,this._normalizationScale=t!==void 0?lm(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,d=this.itemSize;l<d;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mu.fromBufferAttribute(this,i),mu.applyMatrix3(t),this.setXY(i,mu.x,mu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=this._denormalize(r)),r}setComponent(t,i,r){return this.normalized&&(r=this._normalize(r)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=this._denormalize(i)),i}setX(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=this._denormalize(i)),i}setY(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=this._denormalize(i)),i}setZ(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=this._denormalize(i)),i}setW(t,i){return this.normalized&&(i=this._normalize(i)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),r=this._normalize(r),l=this._normalize(l)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,d){return t*=this.itemSize,this.normalized&&(i=this._normalize(i),r=this._normalize(r),l=this._normalize(l),d=this._normalize(d)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=d,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){const i=this._normalizationScale;return i!==void 0?Math.max(t/i,-1):n1(t,this.array)}_normalize(t){const i=this._normalizationScale;return i!==void 0?Math.round(t*i):i1(t,this.array)}}class Ey extends nr{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Ty extends nr{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Li extends nr{constructor(t,i,r){super(new Float32Array(t),i,r)}}const x1=new Il,Sl=new fe,Wh=new fe;class um{constructor(t=new fe,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):x1.setFromPoints(t).getCenter(r);let l=0;for(let d=0,h=t.length;d<h;d++)l=Math.max(l,r.distanceToSquared(t[d]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sl.subVectors(t,this.center);const i=Sl.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Sl,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sl.copy(t.center).add(Wh)),this.expandByPoint(Sl.copy(t.center).sub(Wh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}let y1=0;const Di=new cn,Yh=new kn,oo=new fe,vi=new Il,Ml=new Il,Nn=new fe;class Cs extends or{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:y1++}),this.uuid=zl(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(QE(t)?Ty:Ey)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const d=new dt().getNormalMatrix(t);r.applyNormalMatrix(d),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,i,r){return Di.makeTranslation(t,i,r),this.applyMatrix4(Di),this}scale(t,i,r){return Di.makeScale(t,i,r),this.applyMatrix4(Di),this}lookAt(t){return Yh.lookAt(t),Yh.updateMatrix(),this.applyMatrix4(Yh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,d=t.length;l<d;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Li(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const d=t[l];i.setXYZ(l,d.x,d.y,d.z||0)}t.length>i.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new fe(-1/0,-1/0,-1/0),new fe(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const d=i[r];vi.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new um);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new fe,1/0);return}if(t){const r=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),i)for(let d=0,h=i.length;d<h;d++){const p=i[d];Ml.setFromBufferAttribute(p),this.morphTargetsRelative?(Nn.addVectors(vi.min,Ml.min),vi.expandByPoint(Nn),Nn.addVectors(vi.max,Ml.max),vi.expandByPoint(Nn)):(vi.expandByPoint(Ml.min),vi.expandByPoint(Ml.max))}vi.getCenter(r);let l=0;for(let d=0,h=t.count;d<h;d++)Nn.fromBufferAttribute(t,d),l=Math.max(l,r.distanceToSquared(Nn));if(i)for(let d=0,h=i.length;d<h;d++){const p=i[d],g=this.morphTargetsRelative;for(let m=0,S=p.count;m<S;m++)Nn.fromBufferAttribute(p,m),g&&(oo.fromBufferAttribute(t,m),Nn.add(oo)),l=Math.max(l,r.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,d=i.uv;let h=this.getAttribute("tangent");(h===void 0||h.count!==r.count)&&(h=new nr(new Float32Array(4*r.count),4),this.setAttribute("tangent",h));const p=[],g=[],m=new Uint8Array(r.count);for(let J=0;J<r.count;J++)p[J]=new fe,g[J]=new fe;const S=new fe,_=new fe,x=new fe,b=new wt,T=new wt,w=new wt,M=new fe,y=new fe;function U(J,V,k){m[J]=m[V]=m[k]=1,S.fromBufferAttribute(r,J),_.fromBufferAttribute(r,V),x.fromBufferAttribute(r,k),b.fromBufferAttribute(d,J),T.fromBufferAttribute(d,V),w.fromBufferAttribute(d,k),_.sub(S),x.sub(S),T.sub(b),w.sub(b);const ae=1/(T.x*w.y-w.x*T.y);isFinite(ae)&&(M.copy(_).multiplyScalar(w.y).addScaledVector(x,-T.y).multiplyScalar(ae),y.copy(x).multiplyScalar(T.x).addScaledVector(_,-w.x).multiplyScalar(ae),p[J].add(M),p[V].add(M),p[k].add(M),g[J].add(y),g[V].add(y),g[k].add(y))}let F=this.groups;F.length===0&&(F=[{start:0,count:t.count}]);for(let J=0,V=F.length;J<V;++J){const k=F[J],ae=k.start,pe=k.count;for(let q=ae,ee=ae+pe;q<ee;q+=3)U(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const N=new fe,I=new fe,P=new fe,E=new fe;function L(J){P.fromBufferAttribute(l,J),E.copy(P);const V=p[J];N.copy(V),N.sub(P.multiplyScalar(P.dot(V))).normalize(),I.crossVectors(E,V);const ae=I.dot(g[J])<0?-1:1;h.setXYZW(J,N.x,N.y,N.z,ae)}for(let J=0,V=r.count;J<V;++J)m[J]&&L(J);this._transformed=!0}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==i.count)r=new nr(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,b=r.count;x<b;x++)r.setXYZ(x,0,0,0);const l=new fe,d=new fe,h=new fe,p=new fe,g=new fe,m=new fe,S=new fe,_=new fe;if(t)for(let x=0,b=t.count;x<b;x+=3){const T=t.getX(x+0),w=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,T),d.fromBufferAttribute(i,w),h.fromBufferAttribute(i,M),S.subVectors(h,d),_.subVectors(l,d),S.cross(_),p.fromBufferAttribute(r,T),g.fromBufferAttribute(r,w),m.fromBufferAttribute(r,M),p.add(S),g.add(S),m.add(S),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(w,g.x,g.y,g.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,b=i.count;x<b;x+=3)l.fromBufferAttribute(i,x+0),d.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,d),_.subVectors(l,d),S.cross(_),r.setXYZ(x+0,S.x,S.y,S.z),r.setXYZ(x+1,S.x,S.y,S.z),r.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(p,g){const m=p.array,S=p.itemSize,_=p.normalized,x=new m.constructor(g.length*S);let b=0,T=0;for(let w=0,M=g.length;w<M;w++){p.isInterleavedBufferAttribute?b=g[w]*p.data.stride+p.offset:b=g[w]*S;for(let y=0;y<S;y++)x[T++]=m[b++]}return new nr(x,S,_)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Cs,r=this.index.array,l=this.attributes;for(const p in l){const g=l[p],m=t(g,r);i.setAttribute(p,m)}const d=this.morphAttributes;for(const p in d){const g=[],m=d[p];for(let S=0,_=m.length;S<_;S++){const x=m[S],b=t(x,r);g.push(b)}i.morphAttributes[p]=g}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let p=0,g=h.length;p<g;p++){const m=h[p];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const g=this.parameters;for(const m in g)g[m]!==void 0&&(t[m]=g[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const g in r){const m=r[g];t.data.attributes[g]=m.toJSON(t.data)}const l={};let d=!1;for(const g in this.morphAttributes){const m=this.morphAttributes[g],S=[];for(let _=0,x=m.length;_<x;_++){const b=m[_];S.push(b.toJSON(t.data))}S.length>0&&(l[g]=S,d=!0)}d&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const p=this.boundingSphere;return p!==null&&(t.data.boundingSphere=p.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const m in l){const S=l[m];this.setAttribute(m,S.clone(i))}const d=t.morphAttributes;for(const m in d){const S=[],_=d[m];for(let x=0,b=_.length;x<b;x++)S.push(_[x].clone(i));this.morphAttributes[m]=S}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let m=0,S=h.length;m<S;m++){const _=h[m];this.addGroup(_.start,_.count,_.materialIndex)}const p=t.boundingBox;p!==null&&(this.boundingBox=p.clone());const g=t.boundingSphere;return g!==null&&(this.boundingSphere=g.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zh=new fe,S1=new fe,M1=new dt;class Ss{constructor(t=new fe(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=Zh.subVectors(r,i).cross(S1.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i,r=!0){const l=t.delta(Zh),d=this.normal.dot(l);if(d===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const h=-(t.start.dot(this.normal)+this.constant)/d;return r===!0&&(h<0||h>1)?null:i.copy(t.start).addScaledVector(l,h)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||M1.getNormalMatrix(t),l=this.coplanarPoint(Zh).applyMatrix4(t),d=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(d),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}}let b1=0;class Fl extends or{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b1++}),this.uuid=zl(),this.name="",this.type="Material",this.blending=Rl,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ey,this.blendDst=ty,this.blendEquation=fo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=wl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=VE,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Nh,this.stencilZFail=Nh,this.stencilZPass=Nh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ut(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ut(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(d=>d.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(d){const h=[];for(const p in d){const g=d[p];delete g.metadata,h.push(g)}return h}if(i){const d=l(t.textures),h=l(t.images);d.length>0&&(r.textures=d),h.length>0&&(r.images=h)}return r}fromJSON(t,i){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Rt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(r=>new Ss().fromJSON(r))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=i[t.map]||null),t.matcap!==void 0&&(this.matcap=i[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=i[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=i[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=i[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let r=t.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new wt().fromArray(r)}return t.displacementMap!==void 0&&(this.displacementMap=i[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=i[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=i[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=i[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=i[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=i[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=i[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=i[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=i[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=i[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=i[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=i[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=i[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=i[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new wt().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=i[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=i[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=i[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=i[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=i[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=i[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=i[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=i[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let d=0;d!==l;++d)r[d]=i[d].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}const Pa=new fe,Qh=new fe,gu=new fe,vu=new fe;class E1{constructor(t=new fe,i=new fe(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Pa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Pa.copy(this.origin).addScaledVector(this.direction,i),Pa.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){Qh.copy(t).add(i).multiplyScalar(.5),gu.copy(i).sub(t).normalize(),vu.copy(this.origin).sub(Qh);const d=t.distanceTo(i)*.5,h=-this.direction.dot(gu),p=vu.dot(this.direction),g=-vu.dot(gu),m=vu.lengthSq(),S=Math.abs(1-h*h);let _,x,b,T;if(S>0)if(_=h*g-p,x=h*p-g,T=d*S,_>=0)if(x>=-T)if(x<=T){const w=1/S;_*=w,x*=w,b=_*(_+h*x+2*p)+x*(h*_+x+2*g)+m}else x=d,_=Math.max(0,-(h*x+p)),b=-_*_+x*(x+2*g)+m;else x=-d,_=Math.max(0,-(h*x+p)),b=-_*_+x*(x+2*g)+m;else x<=-T?(_=Math.max(0,-(-h*d+p)),x=_>0?-d:Math.min(Math.max(-d,-g),d),b=-_*_+x*(x+2*g)+m):x<=T?(_=0,x=Math.min(Math.max(-d,-g),d),b=x*(x+2*g)+m):(_=Math.max(0,-(h*d+p)),x=_>0?d:Math.min(Math.max(-d,-g),d),b=-_*_+x*(x+2*g)+m);else x=h>0?-d:d,_=Math.max(0,-(h*x+p)),b=-_*_+x*(x+2*g)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy(Qh).addScaledVector(gu,x),b}intersectSphere(t,i){if(t.radius<0)return null;Pa.subVectors(t.center,this.origin);const r=Pa.dot(this.direction),l=Pa.dot(Pa)-r*r,d=t.radius*t.radius;if(l>d)return null;const h=Math.sqrt(d-l),p=r-h,g=r+h;return g<0?null:p<0?this.at(g,i):this.at(p,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,d,h,p,g;const m=1/this.direction.x,S=1/this.direction.y,_=1/this.direction.z,x=this.origin;return m>=0?(r=(t.min.x-x.x)*m,l=(t.max.x-x.x)*m):(r=(t.max.x-x.x)*m,l=(t.min.x-x.x)*m),S>=0?(d=(t.min.y-x.y)*S,h=(t.max.y-x.y)*S):(d=(t.max.y-x.y)*S,h=(t.min.y-x.y)*S),r>h||d>l||((d>r||isNaN(r))&&(r=d),(h<l||isNaN(l))&&(l=h),_>=0?(p=(t.min.z-x.z)*_,g=(t.max.z-x.z)*_):(p=(t.max.z-x.z)*_,g=(t.min.z-x.z)*_),r>g||p>l)||((p>r||r!==r)&&(r=p),(g<l||l!==l)&&(l=g),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Pa)!==null}intersectTriangle(t,i,r,l,d){const h=this.origin,p=this.direction,g=p.x,m=p.y,S=p.z,_=t.x-h.x,x=t.y-h.y,b=t.z-h.z,T=i.x-h.x,w=i.y-h.y,M=i.z-h.z,y=r.x-h.x,U=r.y-h.y,F=r.z-h.z,N=Math.abs(g),I=Math.abs(m),P=Math.abs(S);let E,L,J,V,k,ae,pe,q,ee,X,H,ce;if(N>=I&&N>=P?(J=g,ae=_,ee=T,ce=y,g>=0?(E=m,L=S,V=x,k=b,pe=w,q=M,X=U,H=F):(E=S,L=m,V=b,k=x,pe=M,q=w,X=F,H=U)):I>=P?(J=m,ae=x,ee=w,ce=U,m>=0?(E=S,L=g,V=b,k=_,pe=M,q=T,X=F,H=y):(E=g,L=S,V=_,k=b,pe=T,q=M,X=y,H=F)):(J=S,ae=b,ee=M,ce=F,S>=0?(E=g,L=m,V=_,k=x,pe=T,q=w,X=y,H=U):(E=m,L=g,V=x,k=_,pe=w,q=T,X=U,H=y)),J===0)return null;const te=E/J,ue=L/J,Te=1/J,Be=V-te*ae,Ke=k-ue*ae,D=pe-te*ee,K=q-ue*ee,xe=X-te*ce,_e=H-ue*ce,Me=xe*K-_e*D,oe=Be*_e-Ke*xe,we=D*Ke-K*Be;if(l){if(Me<0||oe<0||we<0)return null}else if((Me<0||oe<0||we<0)&&(Me>0||oe>0||we>0))return null;const Ee=Me+oe+we;if(Ee===0)return null;const Ce=Te*(Me*ae+oe*ee+we*ce);return(Ee>0?Ce<0:Ce>0)?null:this.at(Ce/Ee,d)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ay extends Fl{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.combine=ny,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ex=new cn,$s=new E1,_u=new um,tx=new fe,xu=new fe,yu=new fe,Su=new fe,Kh=new fe,Mu=new fe,nx=new fe,bu=new fe;class fa extends kn{constructor(t=new Cs,i=new Ay){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let d=0,h=l.length;d<h;d++){const p=l[d].name||String(d);this.morphTargetInfluences.push(0),this.morphTargetDictionary[p]=d}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,d=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const p=this.morphTargetInfluences;if(d&&p){Mu.set(0,0,0);for(let g=0,m=d.length;g<m;g++){const S=p[g],_=d[g];S!==0&&(Kh.fromBufferAttribute(_,t),h?Mu.addScaledVector(Kh,S):Mu.addScaledVector(Kh.sub(i),S))}i.add(Mu)}return i}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,i){const r=this.geometry,l=this.material,d=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),_u.copy(r.boundingSphere),_u.applyMatrix4(d),$s.copy(t.ray).recast(t.near),!(_u.containsPoint($s.origin)===!1&&($s.intersectSphere(_u,tx)===null||$s.origin.distanceToSquared(tx)>(t.far-t.near)**2))&&(ex.copy(d).invert(),$s.copy(t.ray).applyMatrix4(ex),!(r.boundingBox!==null&&$s.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,$s)))}_computeIntersections(t,i,r){let l;const d=this.geometry,h=this.material,p=d.index,g=d.attributes.position,m=d.attributes.uv,S=d.attributes.uv1,_=d.attributes.normal,x=d.groups,b=d.drawRange;if(p!==null)if(Array.isArray(h))for(let T=0,w=x.length;T<w;T++){const M=x[T],y=h[M.materialIndex],U=Math.max(M.start,b.start),F=Math.min(p.count,Math.min(M.start+M.count,b.start+b.count));for(let N=U,I=F;N<I;N+=3){const P=p.getX(N),E=p.getX(N+1),L=p.getX(N+2);l=Eu(this,y,t,r,m,S,_,P,E,L),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),w=Math.min(p.count,b.start+b.count);for(let M=T,y=w;M<y;M+=3){const U=p.getX(M),F=p.getX(M+1),N=p.getX(M+2);l=Eu(this,h,t,r,m,S,_,U,F,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(g!==void 0)if(Array.isArray(h))for(let T=0,w=x.length;T<w;T++){const M=x[T],y=h[M.materialIndex],U=Math.max(M.start,b.start),F=Math.min(g.count,Math.min(M.start+M.count,b.start+b.count));for(let N=U,I=F;N<I;N+=3){const P=N,E=N+1,L=N+2;l=Eu(this,y,t,r,m,S,_,P,E,L),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),w=Math.min(g.count,b.start+b.count);for(let M=T,y=w;M<y;M+=3){const U=M,F=M+1,N=M+2;l=Eu(this,h,t,r,m,S,_,U,F,N),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function T1(o,t,i,r,l,d,h,p){let g;if(t.side===ri?g=r.intersectTriangle(h,d,l,!0,p):g=r.intersectTriangle(l,d,h,t.side===ir,p),g===null)return null;bu.copy(p),bu.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(bu);return m<i.near||m>i.far?null:{distance:m,point:bu.clone(),object:o}}function Eu(o,t,i,r,l,d,h,p,g,m){o.getVertexPosition(p,xu),o.getVertexPosition(g,yu),o.getVertexPosition(m,Su);const S=T1(o,t,i,r,xu,yu,Su,nx);if(S){const _=new fe;ki.getBarycoord(nx,xu,yu,Su,_),l&&(S.uv=ki.getInterpolatedAttribute(l,p,g,m,_,new wt)),d&&(S.uv1=ki.getInterpolatedAttribute(d,p,g,m,_,new wt)),h&&(S.normal=ki.getInterpolatedAttribute(h,p,g,m,_,new fe),S.normal.dot(r.direction)>0&&S.normal.multiplyScalar(-1));const x={a:p,b:g,c:m,normal:new fe,materialIndex:0};ki.getNormal(xu,yu,Su,x.normal),S.face=x,S.barycoord=_}return S}class A1 extends qn{constructor(t=null,i=1,r=1,l,d,h,p,g,m=Bn,S=Bn,_,x){super(null,h,p,g,m,S,l,d,_,x),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const er=new um,R1=new wt(.5,.5),Tu=new fe;class Ol{constructor(t=new Ss,i=new Ss,r=new Ss,l=new Ss,d=new Ss,h=new Ss){this.planes=[t,i,r,l,d,h]}set(t,i,r,l,d,h){const p=this.planes;return p[0].copy(t),p[1].copy(i),p[2].copy(r),p[3].copy(l),p[4].copy(d),p[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Xi,r=!1){const l=this.planes,d=t.elements,h=d[0],p=d[1],g=d[2],m=d[3],S=d[4],_=d[5],x=d[6],b=d[7],T=d[8],w=d[9],M=d[10],y=d[11],U=d[12],F=d[13],N=d[14],I=d[15];if(l[0].setComponents(m-h,b-S,y-T,I-U).normalize(),l[1].setComponents(m+h,b+S,y+T,I+U).normalize(),l[2].setComponents(m+p,b+_,y+w,I+F).normalize(),l[3].setComponents(m-p,b-_,y-w,I-F).normalize(),r)l[4].setComponents(g,x,M,N).normalize(),l[5].setComponents(m-g,b-x,y-M,I-N).normalize();else if(l[4].setComponents(m-g,b-x,y-M,I-N).normalize(),i===Xi)l[5].setComponents(m+g,b+x,y+M,I+N).normalize();else if(i===Ul)l[5].setComponents(g,x,M,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),er.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),er.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(er)}intersectsSprite(t){er.center.set(0,0,0);const i=R1.distanceTo(t.center);return er.radius=.7071067811865476+i,er.applyMatrix4(t.matrixWorld),this.intersectsSphere(er)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let d=0;d<6;d++)if(i[d].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tu.x=l.normal.x>0?t.max.x:t.min.x,Tu.y=l.normal.y>0?t.max.y:t.min.y,Tu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Tu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ix=new cn;class dm{constructor(){this.coordinateSystem=Xi,this._frustums=[],this._count=0}setFromArrayCamera(t){const i=t.cameras,r=this._frustums;for(let l=0;l<i.length;l++){const d=i[l];ix.multiplyMatrices(d.projectionMatrix,d.matrixWorldInverse),r[l]===void 0&&(r[l]=new Ol),r[l].setFromProjectionMatrix(ix,d.coordinateSystem,d.reversedDepth)}return this._count=i.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){const i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsObject(t))return!0;return!1}intersectsSprite(t){const i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSprite(t))return!0;return!1}intersectsSphere(t){const i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsSphere(t))return!0;return!1}intersectsBox(t){const i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].intersectsBox(t))return!0;return!1}containsPoint(t){const i=this._frustums;for(let r=0;r<this._count;r++)if(i[r].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;const i=this._frustums,r=t._frustums;for(let l=0;l<t._count;l++)i[l]===void 0&&(i[l]=new Ol),i[l].copy(r[l]);return this._count=t._count,this}clone(){return new dm().copy(this)}}class Ry extends qn{constructor(t=[],i=vo,r,l,d,h,p,g,m,S){super(t,i,r,l,d,h,p,g,m,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cy extends qn{constructor(t,i,r,l,d,h,p,g,m){super(t,i,r,l,d,h,p,g,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xo extends qn{constructor(t,i,r=pa,l,d,h,p=Bn,g=Bn,m,S=Ts,_=1){if(S!==Ts&&S!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:_};super(x,l,d,h,p,g,S,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new cm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return i.compareFunction=this.compareFunction,i}}class Ny extends xo{constructor(t,i=pa,r=vo,l,d,h=Bn,p=Bn,g,m=Ts){const S={width:t,height:t,depth:1},_=[S,S,S,S,S,S];super(t,t,i,r,l,d,h,p,g,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class wy extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Bl extends Cs{constructor(t=1,i=1,r=1,l=1,d=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:d,depthSegments:h};const p=this;l=Math.floor(l),d=Math.floor(d),h=Math.floor(h);const g=[],m=[],S=[],_=[];let x=0,b=0;T("z","y","x",-1,-1,r,i,t,h,d,0),T("z","y","x",1,-1,r,i,-t,h,d,1),T("x","z","y",1,1,t,r,i,l,h,2),T("x","z","y",1,-1,t,r,-i,l,h,3),T("x","y","z",1,-1,t,i,r,l,d,4),T("x","y","z",-1,-1,t,i,-r,l,d,5),this.setIndex(g),this.setAttribute("position",new Li(m,3)),this.setAttribute("normal",new Li(S,3)),this.setAttribute("uv",new Li(_,2));function T(w,M,y,U,F,N,I,P,E,L,J){const V=N/E,k=I/L,ae=N/2,pe=I/2,q=P/2,ee=E+1,X=L+1;let H=0,ce=0;const te=new fe;for(let ue=0;ue<X;ue++){const Te=ue*k-pe;for(let Be=0;Be<ee;Be++){const Ke=Be*V-ae;te[w]=Ke*U,te[M]=Te*F,te[y]=q,m.push(te.x,te.y,te.z),te[w]=0,te[M]=0,te[y]=P>0?1:-1,S.push(te.x,te.y,te.z),_.push(Be/E),_.push(1-ue/L),H+=1}}for(let ue=0;ue<L;ue++)for(let Te=0;Te<E;Te++){const Be=x+Te+ee*ue,Ke=x+Te+ee*(ue+1),D=x+(Te+1)+ee*(ue+1),K=x+(Te+1)+ee*ue;g.push(Be,Ke,K),g.push(Ke,D,K),ce+=6}p.addGroup(b,ce,J),b+=ce,x+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bl(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}class Hl extends Cs{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const d=t/2,h=i/2,p=Math.floor(r),g=Math.floor(l),m=p+1,S=g+1,_=t/p,x=i/g,b=[],T=[],w=[],M=[];for(let y=0;y<S;y++){const U=y*x-h;for(let F=0;F<m;F++){const N=F*_-d;T.push(N,-U,0),w.push(0,0,1),M.push(F/p),M.push(1-y/g)}}for(let y=0;y<g;y++)for(let U=0;U<p;U++){const F=U+m*y,N=U+m*(y+1),I=U+1+m*(y+1),P=U+1+m*y;b.push(F,N,P),b.push(N,I,P)}this.setIndex(b),this.setAttribute("position",new Li(T,3)),this.setAttribute("normal",new Li(w,3)),this.setAttribute("uv",new Li(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hl(t.width,t.height,t.widthSegments,t.heightSegments)}}class ku extends Cs{constructor(t=1,i=.4,r=12,l=48,d=Math.PI*2,h=0,p=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:r,tubularSegments:l,arc:d,thetaStart:h,thetaLength:p},r=Math.floor(r),l=Math.floor(l);const g=[],m=[],S=[],_=[],x=new fe,b=new fe,T=new fe;for(let w=0;w<=r;w++){const M=h+w/r*p;for(let y=0;y<=l;y++){const U=y/l*d;b.x=(t+i*Math.cos(M))*Math.cos(U),b.y=(t+i*Math.cos(M))*Math.sin(U),b.z=i*Math.sin(M),m.push(b.x,b.y,b.z),x.x=t*Math.cos(U),x.y=t*Math.sin(U),T.subVectors(b,x).normalize(),S.push(T.x,T.y,T.z),_.push(y/l),_.push(w/r)}}for(let w=1;w<=r;w++)for(let M=1;M<=l;M++){const y=(l+1)*w+M-1,U=(l+1)*(w-1)+M-1,F=(l+1)*(w-1)+M,N=(l+1)*w+M;g.push(y,U,N),g.push(U,F,N)}this.setIndex(g),this.setAttribute("position",new Li(m,3)),this.setAttribute("normal",new Li(S,3)),this.setAttribute("uv",new Li(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ku(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}}function yo(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];if(ax(l))l.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone();else if(Array.isArray(l))if(ax(l[0])){const d=[];for(let h=0,p=l.length;h<p;h++)d[h]=l[h].clone();t[i][r]=d}else t[i][r]=l.slice();else t[i][r]=l}}return t}function Qn(o){const t={};for(let i=0;i<o.length;i++){const r=yo(o[i]);for(const l in r)t[l]=r[l]}return t}function ax(o){return o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)}function C1(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Dy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Nt.workingColorSpace}const N1={clone:yo,merge:Qn};var w1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Fl{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=w1,this.fragmentShader=D1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=yo(t.uniforms),this.uniformsGroups=C1(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}fromJSON(t,i){if(super.fromJSON(t,i),t.uniforms!==void 0)for(const r in t.uniforms){const l=t.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=i[l.value]||null;break;case"c":this.uniforms[r].value=new Rt().setHex(l.value);break;case"v2":this.uniforms[r].value=new wt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new fe().fromArray(l.value);break;case"v4":this.uniforms[r].value=new ln().fromArray(l.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(l.value);break;case"m4":this.uniforms[r].value=new cn().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(const r in t.extensions)this.extensions[r]=t.extensions[r];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}}class L1 extends sr{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class U1 extends Fl{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new As,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sx extends U1{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new wt(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return po('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){po('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class O1 extends Fl{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=GE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class P1 extends Fl{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ly extends kn{static registerNode(t){this.prototype._lightNode=t}constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=i}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Jh=new cn,rx=new fe,ox=new fe;class z1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new wt(512,512),this.mapType=xi,this.map=null,this.mapPass=null,this.matrix=new cn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ol,this._frameExtents=new wt(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera;rx.setFromMatrixPosition(t.matrixWorld),i.position.copy(rx),ox.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ox),i.updateMatrixWorld(),this._updateMatrix(i,this.matrix,this._frustum)}_updateMatrix(t,i,r,l){Jh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),r.setFromProjectionMatrix(Jh,t.coordinateSystem,t.reversedDepth);const d=this._frameExtents,h=l?l.z/d.x:1,p=l?l.w/d.y:1,g=l?l.x/d.x:0,m=l?l.y/d.y:0;t.coordinateSystem===Ul||t.reversedDepth?i.set(.5*h,0,0,.5*h+g,0,.5*p,0,.5*p+m,0,0,1,0,0,0,0,1):i.set(.5*h,0,0,.5*h+g,0,.5*p,0,.5*p+m,0,0,.5,.5,0,0,0,1),i.multiply(Jh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Au=new fe,Ru=new So,aa=new fe;class Uy extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=Xi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Au,Ru,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Ru,aa.set(1,1,1)).invert()}updateWorldMatrix(t,i,r=!1){super.updateWorldMatrix(t,i,r),this.matrixWorld.decompose(Au,Ru,aa),aa.x===1&&aa.y===1&&aa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Au,Ru,aa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ys=new fe,lx=new wt,cx=new wt;class qi extends Uy{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=qp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(wh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return qp*2*Math.atan(Math.tan(wh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){ys.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ys.x,ys.y).multiplyScalar(-t/ys.z),ys.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ys.x,ys.y).multiplyScalar(-t/ys.z)}getViewSize(t,i){return this.getViewBounds(t,lx,cx),i.subVectors(cx,lx)}setViewOffset(t,i,r,l,d,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=d,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(wh*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,d=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const g=h.fullWidth,m=h.fullHeight;d+=h.offsetX*l/g,i-=h.offsetY*r/m,l*=h.width/g,r*=h.height/m}const p=this.filmOffset;p!==0&&(d+=t*p/this.getFilmWidth()),this.projectionMatrix.makePerspective(d,d+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}class Oy extends Uy{constructor(t=-1,i=1,r=1,l=-1,d=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=d,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,d,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=d,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let d=r-t,h=r+t,p=l+i,g=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;d+=m*this.view.offsetX,h=d+m*this.view.width,p-=S*this.view.offsetY,g=p-S*this.view.height}this.projectionMatrix.makeOrthographic(d,h,p,g,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class I1 extends z1{constructor(){super(new Oy(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ux extends Ly{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new I1}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.shadow=this.shadow.toJSON(),i.object.target=this.target.uuid,i}}class F1 extends Ly{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const lo=-90,co=1;class kp extends kn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qi(lo,co,t,i);l.layers=this.layers,this.add(l);const d=new qi(lo,co,t,i);d.layers=this.layers,this.add(d);const h=new qi(lo,co,t,i);h.layers=this.layers,this.add(h);const p=new qi(lo,co,t,i);p.layers=this.layers,this.add(p);const g=new qi(lo,co,t,i);g.layers=this.layers,this.add(g);const m=new qi(lo,co,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,d,h,p,g]=i;for(const m of i)this.remove(m);if(t===Xi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),d.up.set(0,0,-1),d.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),p.up.set(0,1,0),p.lookAt(0,0,1),g.up.set(0,1,0),g.lookAt(0,0,-1);else if(t===Ul)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),d.up.set(0,0,1),d.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),p.up.set(0,-1,0),p.lookAt(0,0,1),g.up.set(0,-1,0),g.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[d,h,p,g,m,S]=this.children,_=t.getRenderTarget(),x=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const w=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let M=!1;t.isWebGLRenderer===!0?M=t.state.buffers.depth.getReversed():M=t.reversedDepthBuffer,t.setRenderTarget(r,0,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,d),t.setRenderTarget(r,1,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,h),t.setRenderTarget(r,2,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,p),t.setRenderTarget(r,3,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,g),t.setRenderTarget(r,4,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,m),r.texture.mipmapsAutoUpdate=w,t.setRenderTarget(r,5,l),M&&t.autoClear===!1&&t.clearDepth(),t.render(i,S),t.setRenderTarget(_,x,b),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class B1 extends qi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}}function dx(o,t,i,r){const l=H1(r);switch(i){case py:return o*t;case gy:return o*t/l.components*l.byteLength;case sm:return o*t/l.components*l.byteLength;case ar:return o*t*2/l.components*l.byteLength;case rm:return o*t*2/l.components*l.byteLength;case my:return o*t*3/l.components*l.byteLength;case ca:return o*t*4/l.components*l.byteLength;case om:return o*t*4/l.components*l.byteLength;case Ou:case Pu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case zu:case Iu:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case pp:case gp:return Math.max(o,16)*Math.max(t,8)/4;case hp:case mp:return Math.max(o,8)*Math.max(t,8)/2;case vp:case _p:case yp:case Sp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xp:case Hu:case Mp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case bp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ep:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Tp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Ap:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Rp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Cp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Np:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case wp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Dp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Lp:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Up:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Op:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Pp:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case zp:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case Ip:case Fp:case Bp:return Math.ceil(o/4)*Math.ceil(t/4)*16;case Hp:case Gp:return Math.ceil(o/4)*Math.ceil(t/4)*8;case Gu:case jp:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function H1(o){switch(o){case xi:case uy:return{byteLength:1,components:1};case Ll:case dy:case ma:return{byteLength:2,components:1};case im:case am:return{byteLength:2,components:4};case pa:case nm:case la:return{byteLength:4,components:1};case fy:case hy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:em}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=em);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Py(){let o=null,t=!1,i=null,r=null;function l(d,h){r=o.requestAnimationFrame(l),i(d,h)}return{start:function(){t!==!0&&i!==null&&o!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o!==null&&o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(d){i=d},setContext:function(d){o=d}}}function G1(o){const t=new WeakMap;function i(p,g){const m=p.array,S=p.usage,_=m.byteLength,x=o.createBuffer();o.bindBuffer(g,x),o.bufferData(g,m,S),p.onUploadCallback();let b;if(m instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)b=o.HALF_FLOAT;else if(m instanceof Uint16Array)p.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)b=o.SHORT;else if(m instanceof Uint32Array)b=o.UNSIGNED_INT;else if(m instanceof Int32Array)b=o.INT;else if(m instanceof Int8Array)b=o.BYTE;else if(m instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:b,bytesPerElement:m.BYTES_PER_ELEMENT,version:p.version,size:_}}function r(p,g,m){const S=g.array,_=g.updateRanges;if(o.bindBuffer(m,p),_.length===0)o.bufferSubData(m,0,S);else{_.sort((b,T)=>b.start-T.start);let x=0;for(let b=1;b<_.length;b++){const T=_[x],w=_[b];w.start<=T.start+T.count+1?T.count=Math.max(T.count,w.start+w.count-T.start):(++x,_[x]=w)}_.length=x+1;for(let b=0,T=_.length;b<T;b++){const w=_[b];o.bufferSubData(m,w.start*S.BYTES_PER_ELEMENT,S,w.start,w.count)}g.clearUpdateRanges()}g.onUploadCallback()}function l(p){return p.isInterleavedBufferAttribute&&(p=p.data),t.get(p)}function d(p){p.isInterleavedBufferAttribute&&(p=p.data);const g=t.get(p);g&&(o.deleteBuffer(g.buffer),t.delete(p))}function h(p,g){if(p.isInterleavedBufferAttribute&&(p=p.data),p.isGLBufferAttribute){const S=t.get(p);(!S||S.version<p.version)&&t.set(p,{buffer:p.buffer,type:p.type,bytesPerElement:p.elementSize,version:p.version});return}const m=t.get(p);if(m===void 0)t.set(p,i(p,g));else if(m.version<p.version){if(m.size!==p.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,p,g),m.version=p.version}}return{get:l,remove:d,update:h}}var j1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,q1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,k1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Z1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Q1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,K1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,hT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vT="gl_FragColor = linearToOutputTexel( gl_FragColor );",_T=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,ST=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,MT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ET=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,TT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,AT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,RT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,CT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,NT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,UT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,OT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,FT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,BT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,HT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,GT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VT=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,YT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ZT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,QT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,KT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$T=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tA=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,aA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,oA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,vA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,TA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,NA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,PA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,zA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,IA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,HA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const GA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qA=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,YA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ZA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,QA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,KA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$A=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_R=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xt={alphahash_fragment:j1,alphahash_pars_fragment:V1,alphamap_fragment:q1,alphamap_pars_fragment:k1,alphatest_fragment:X1,alphatest_pars_fragment:W1,aomap_fragment:Y1,aomap_pars_fragment:Z1,batching_pars_vertex:Q1,batching_vertex:K1,begin_vertex:J1,beginnormal_vertex:$1,bsdfs:eT,iridescence_fragment:tT,bumpmap_pars_fragment:nT,clipping_planes_fragment:iT,clipping_planes_pars_fragment:aT,clipping_planes_pars_vertex:sT,clipping_planes_vertex:rT,color_fragment:oT,color_pars_fragment:lT,color_pars_vertex:cT,color_vertex:uT,common:dT,defaultnormal_vertex:fT,displacementmap_pars_vertex:hT,displacementmap_vertex:pT,emissivemap_fragment:mT,emissivemap_pars_fragment:gT,colorspace_fragment:vT,colorspace_pars_fragment:_T,envmap_fragment:xT,envmap_common_pars_fragment:yT,envmap_pars_fragment:ST,envmap_pars_vertex:MT,envmap_physical_pars_fragment:UT,envmap_vertex:bT,fog_vertex:ET,fog_pars_vertex:TT,fog_fragment:AT,fog_pars_fragment:RT,gradientmap_pars_fragment:CT,lightmap_pars_fragment:NT,lights_lambert_fragment:wT,lights_lambert_pars_fragment:DT,lights_pars_begin:LT,lights_toon_fragment:OT,lights_toon_pars_fragment:PT,lights_phong_fragment:zT,lights_phong_pars_fragment:IT,lights_physical_fragment:FT,lights_physical_pars_fragment:BT,lights_fragment_begin:HT,lights_fragment_maps:GT,lights_fragment_end:jT,lightprobes_pars_fragment:VT,logdepthbuf_fragment:qT,logdepthbuf_pars_fragment:kT,logdepthbuf_pars_vertex:XT,logdepthbuf_vertex:WT,map_fragment:YT,map_pars_fragment:ZT,map_particle_fragment:QT,map_particle_pars_fragment:KT,metalnessmap_fragment:JT,metalnessmap_pars_fragment:$T,morphinstance_vertex:eA,morphcolor_vertex:tA,morphnormal_vertex:nA,morphtarget_pars_vertex:iA,morphtarget_vertex:aA,normal_fragment_begin:sA,normal_fragment_maps:rA,normal_pars_fragment:oA,normal_pars_vertex:lA,normal_vertex:cA,normalmap_pars_fragment:uA,clearcoat_normal_fragment_begin:dA,clearcoat_normal_fragment_maps:fA,clearcoat_pars_fragment:hA,iridescence_pars_fragment:pA,opaque_fragment:mA,packing:gA,premultiplied_alpha_fragment:vA,project_vertex:_A,dithering_fragment:xA,dithering_pars_fragment:yA,roughnessmap_fragment:SA,roughnessmap_pars_fragment:MA,shadowmap_pars_fragment:bA,shadowmap_pars_vertex:EA,shadowmap_vertex:TA,shadowmask_pars_fragment:AA,skinbase_vertex:RA,skinning_pars_vertex:CA,skinning_vertex:NA,skinnormal_vertex:wA,specularmap_fragment:DA,specularmap_pars_fragment:LA,tonemapping_fragment:UA,tonemapping_pars_fragment:OA,transmission_fragment:PA,transmission_pars_fragment:zA,uv_pars_fragment:IA,uv_pars_vertex:FA,uv_vertex:BA,worldpos_vertex:HA,background_vert:GA,background_frag:jA,backgroundCube_vert:VA,backgroundCube_frag:qA,cube_vert:kA,cube_frag:XA,depth_vert:WA,depth_frag:YA,distance_vert:ZA,distance_frag:QA,equirect_vert:KA,equirect_frag:JA,linedashed_vert:$A,linedashed_frag:eR,meshbasic_vert:tR,meshbasic_frag:nR,meshlambert_vert:iR,meshlambert_frag:aR,meshmatcap_vert:sR,meshmatcap_frag:rR,meshnormal_vert:oR,meshnormal_frag:lR,meshphong_vert:cR,meshphong_frag:uR,meshphysical_vert:dR,meshphysical_frag:fR,meshtoon_vert:hR,meshtoon_frag:pR,points_vert:mR,points_frag:gR,shadow_vert:vR,shadow_frag:_R,sprite_vert:xR,sprite_frag:yR},qe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},oa={basic:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Qn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Qn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Qn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Qn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Qn([qe.points,qe.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Qn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Qn([qe.common,qe.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Qn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Qn([qe.sprite,qe.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Qn([qe.common,qe.displacementmap,{referencePosition:{value:new fe},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Qn([qe.lights,qe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};oa.physical={uniforms:Qn([oa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new dt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Cu={r:0,b:0,g:0},SR=new cn,zy=new dt;zy.set(-1,0,0,0,1,0,0,0,1);function MR(o,t,i,r,l,d){const h=new Rt(0);let p=l===!0?0:1,g,m,S=null,_=0,x=null;function b(U){let F=U.isScene===!0?U.background:null;if(F&&F.isTexture){const N=U.backgroundBlurriness>0;F=t.get(F,N)}return F}function T(U){let F=!1;const N=b(U);N===null?M(h,p):N&&N.isColor&&(M(N,1),F=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,d):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function w(U,F){const N=b(F);N&&N.isCubeTexture?(m===void 0&&(m=new fa(new Bl(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:yo(oa.backgroundCube.uniforms),vertexShader:oa.backgroundCube.vertexShader,fragmentShader:oa.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,P,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(SR.makeRotationFromEuler(F.backgroundRotation)).transpose(),N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(zy),m.material.toneMapped=Nt.getTransfer(N.colorSpace)!==kt,(S!==N||_!==N.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,S=N,_=N.version,x=o.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(g===void 0&&(g=new fa(new Hl(2,2),new sr({name:"BackgroundMaterial",uniforms:yo(oa.background.uniforms),vertexShader:oa.background.vertexShader,fragmentShader:oa.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(g)),g.material.uniforms.t2D.value=N,g.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,g.material.toneMapped=Nt.getTransfer(N.colorSpace)!==kt,N.matrixAutoUpdate===!0&&N.updateMatrix(),g.material.uniforms.uvTransform.value.copy(N.matrix),(S!==N||_!==N.version||x!==o.toneMapping)&&(g.material.needsUpdate=!0,S=N,_=N.version,x=o.toneMapping),g.layers.enableAll(),U.unshift(g,g.geometry,g.material,0,0,null))}function M(U,F){U.getRGB(Cu,Dy(o)),i.buffers.color.setClear(Cu.r,Cu.g,Cu.b,F,d)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,F=1){h.set(U),p=F,M(h,p)},getClearAlpha:function(){return p},setClearAlpha:function(U){p=U,M(h,p)},render:T,addToRenderList:w,dispose:y}}function bR(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let d=l,h=!1;function p(k,ae,pe,q,ee){let X=!1;const H=_(k,q,pe,ae);d!==H&&(d=H,m(d.object)),X=b(k,q,pe,ee),X&&T(k,q,pe,ee),ee!==null&&t.update(ee,o.ELEMENT_ARRAY_BUFFER),(X||h)&&(h=!1,N(k,ae,pe,q),ee!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ee).buffer))}function g(){return o.createVertexArray()}function m(k){return o.bindVertexArray(k)}function S(k){return o.deleteVertexArray(k)}function _(k,ae,pe,q){const ee=q.wireframe===!0;let X=r[ae.id];X===void 0&&(X={},r[ae.id]=X);const H=k.isInstancedMesh===!0?k.id:0;let ce=X[H];ce===void 0&&(ce={},X[H]=ce);let te=ce[pe.id];te===void 0&&(te={},ce[pe.id]=te);let ue=te[ee];return ue===void 0&&(ue=x(g()),te[ee]=ue),ue}function x(k){const ae=[],pe=[],q=[];for(let ee=0;ee<i;ee++)ae[ee]=0,pe[ee]=0,q[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ae,enabledAttributes:pe,attributeDivisors:q,object:k,attributes:{},index:null}}function b(k,ae,pe,q){const ee=d.attributes,X=ae.attributes;let H=0;const ce=pe.getAttributes();for(const te in ce)if(ce[te].location>=0){const Te=ee[te];let Be=X[te];if(Be===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(Be=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(Be=k.instanceColor)),Te===void 0||Te.attribute!==Be||Be&&Te.data!==Be.data)return!0;H++}return d.attributesNum!==H||d.index!==q}function T(k,ae,pe,q){const ee={},X=ae.attributes;let H=0;const ce=pe.getAttributes();for(const te in ce)if(ce[te].location>=0){let Te=X[te];Te===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(Te=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(Te=k.instanceColor));const Be={};Be.attribute=Te,Te&&Te.data&&(Be.data=Te.data),ee[te]=Be,H++}d.attributes=ee,d.attributesNum=H,d.index=q}function w(){const k=d.newAttributes;for(let ae=0,pe=k.length;ae<pe;ae++)k[ae]=0}function M(k){y(k,0)}function y(k,ae){const pe=d.newAttributes,q=d.enabledAttributes,ee=d.attributeDivisors;pe[k]=1,q[k]===0&&(o.enableVertexAttribArray(k),q[k]=1),ee[k]!==ae&&(o.vertexAttribDivisor(k,ae),ee[k]=ae)}function U(){const k=d.newAttributes,ae=d.enabledAttributes;for(let pe=0,q=ae.length;pe<q;pe++)ae[pe]!==k[pe]&&(o.disableVertexAttribArray(pe),ae[pe]=0)}function F(k,ae,pe,q,ee,X,H){H===!0?o.vertexAttribIPointer(k,ae,pe,ee,X):o.vertexAttribPointer(k,ae,pe,q,ee,X)}function N(k,ae,pe,q){w();const ee=q.attributes,X=pe.getAttributes(),H=ae.defaultAttributeValues;for(const ce in X){const te=X[ce];if(te.location>=0){let ue=ee[ce];if(ue===void 0&&(ce==="instanceMatrix"&&k.instanceMatrix&&(ue=k.instanceMatrix),ce==="instanceColor"&&k.instanceColor&&(ue=k.instanceColor)),ue!==void 0){const Te=ue.normalized,Be=ue.itemSize,Ke=t.get(ue);if(Ke===void 0)continue;const D=Ke.buffer,K=Ke.type,xe=Ke.bytesPerElement,_e=K===o.INT||K===o.UNSIGNED_INT||ue.gpuType===nm;if(ue.isInterleavedBufferAttribute){const Me=ue.data,oe=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,we=ue.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let Ee=0;Ee<te.locationSize;Ee++)y(te.location+Ee,Me.meshPerAttribute);k.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let Ee=0;Ee<te.locationSize;Ee++)M(te.location+Ee);o.bindBuffer(o.ARRAY_BUFFER,D);for(let Ee=0;Ee<te.locationSize;Ee++)F(te.location+Ee,Be/te.locationSize,K,Te,oe*xe,(we+Be/te.locationSize*Ee)*xe,_e)}else{if(ue.isInstancedBufferAttribute){for(let Me=0;Me<te.locationSize;Me++)y(te.location+Me,ue.meshPerAttribute);k.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Me=0;Me<te.locationSize;Me++)M(te.location+Me);o.bindBuffer(o.ARRAY_BUFFER,D);for(let Me=0;Me<te.locationSize;Me++)F(te.location+Me,Be/te.locationSize,K,Te,Be*xe,Be/te.locationSize*Me*xe,_e)}}else if(H!==void 0){const Te=H[ce];if(Te!==void 0)switch(Te.length){case 2:o.vertexAttrib2fv(te.location,Te);break;case 3:o.vertexAttrib3fv(te.location,Te);break;case 4:o.vertexAttrib4fv(te.location,Te);break;default:o.vertexAttrib1fv(te.location,Te)}}}}U()}function I(){J();for(const k in r){const ae=r[k];for(const pe in ae){const q=ae[pe];for(const ee in q){const X=q[ee];for(const H in X)S(X[H].object),delete X[H];delete q[ee]}}delete r[k]}}function P(k){if(r[k.id]===void 0)return;const ae=r[k.id];for(const pe in ae){const q=ae[pe];for(const ee in q){const X=q[ee];for(const H in X)S(X[H].object),delete X[H];delete q[ee]}}delete r[k.id]}function E(k){for(const ae in r){const pe=r[ae];for(const q in pe){const ee=pe[q];if(ee[k.id]===void 0)continue;const X=ee[k.id];for(const H in X)S(X[H].object),delete X[H];delete ee[k.id]}}}function L(k){for(const ae in r){const pe=r[ae],q=k.isInstancedMesh===!0?k.id:0,ee=pe[q];if(ee!==void 0){for(const X in ee){const H=ee[X];for(const ce in H)S(H[ce].object),delete H[ce];delete ee[X]}delete pe[q],Object.keys(pe).length===0&&delete r[ae]}}}function J(){V(),h=!0,d!==l&&(d=l,m(d.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:p,reset:J,resetDefaultState:V,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:L,releaseStatesOfProgram:E,initAttributes:w,enableAttribute:M,disableUnusedAttributes:U}}function ER(o,t,i){let r;function l(g){r=g}function d(g,m){o.drawArrays(r,g,m),i.update(m,r,1)}function h(g,m,S){S!==0&&(o.drawArraysInstanced(r,g,m,S),i.update(m,r,S))}function p(g,m,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,g,0,m,0,S);let x=0;for(let b=0;b<S;b++)x+=m[b];i.update(x,r,1)}this.setMode=l,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function TR(o,t,i,r){let l;function d(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(E){return!(E!==ca&&r.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function p(E){const L=E===ma&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==xi&&E!==la&&!L&&r.convert(E)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE))}function g(E){if(E==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const S=g(m);S!==m&&(ut("WebGLRenderer:",m,"not supported, using",S,"instead."),m=S);const _=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=i.logarithmicDepthBuffer===!0&&_===!1;i.reversedDepthBuffer===!0&&_===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),i.logarithmicDepthBuffer===!0&&_===!0&&ut("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),U=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),F=o.getParameter(o.MAX_VARYING_VECTORS),N=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=o.getParameter(o.MAX_SAMPLES),P=o.getParameter(o.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:d,getMaxPrecision:g,textureFormatReadable:h,textureTypeReadable:p,precision:m,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:b,maxVertexTextures:T,maxTextureSize:w,maxCubemapSize:M,maxAttributes:y,maxVertexUniforms:U,maxVaryings:F,maxFragmentUniforms:N,maxSamples:I,samples:P}}function AR(o){const t=this;let i=null,r=0,l=!1,d=!1;const h=new Ss,p=new dt,g={value:null,needsUpdate:!1};this.uniform=g,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const b=_.length!==0||x||r!==0||l;return l=x,r=_.length,b},this.beginShadows=function(){d=!0,S(null)},this.endShadows=function(){d=!1},this.setGlobalState=function(_,x){i=S(_,x,0)},this.setState=function(_,x,b){const T=_.clippingPlanes,w=_.clipIntersection,M=_.clipShadows,y=o.get(_);if(!l||T===null||T.length===0||d&&!M)d?S(null):m();else{const U=d?0:r,F=U*4;let N=y.clippingState||null;g.value=N,N=S(T,x,F,b);for(let I=0;I!==F;++I)N[I]=i[I];y.clippingState=N,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=U}};function m(){g.value!==i&&(g.value=i,g.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function S(_,x,b,T){const w=_!==null?_.length:0;let M=null;if(w!==0){if(M=g.value,T!==!0||M===null){const y=b+w*4,U=x.matrixWorldInverse;p.getNormalMatrix(U),(M===null||M.length<y)&&(M=new Float32Array(y));for(let F=0,N=b;F!==w;++F,N+=4)h.copy(_[F]).applyMatrix4(U,p),h.normal.toArray(M,N),M[N+3]=h.constant}g.value=M,g.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,M}}class fm extends da{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Ry(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Bl(5,5,5),d=new sr({name:"CubemapFromEquirect",uniforms:yo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:ri,blending:ho});d.uniforms.tEquirect.value=i;const h=new fa(l,d),p=i.minFilter;return i.minFilter===bs&&(i.minFilter=si),new kp(1,10,this).update(t,h),i.minFilter=p,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const d=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(d)}}const fx=256,RR=3,CR=20,Iy=256,Fy=16,NR=3,wR=new fe,DR=new Rt;class Pl{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new kp(1,10,null),this._boxMesh=new fa(new Bl(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,i=0,r=.1,l=100,d={}){const{size:h=256,position:p=wR}=d,g=this._renderer;this._setSize(h);const m=this._allocateTarget(),S=this._getSourceTarget(!0);i>0&&(S.texture.mipmapsAutoUpdate=!1);const _=g.autoClear,x=g.autoClearColor,b=g.autoClearDepth,T=g.autoClearStencil,w=t.background;g.autoClear=!0,g.autoClearColor=!0,g.autoClearDepth=!0,g.autoClearStencil=!0,w===null&&(t.background=g.getClearColor(DR));const M=new kp(r,l,S);return M.position.copy(p),M.update(g,t),g.autoClear=_,g.autoClearColor=x,g.autoClearDepth=b,g.autoClearStencil=T,t.background=w,i>0&&(S.texture.mipmapsAutoUpdate=!0,this._blur(m,i)),this._applyPMREM(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=px(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,i){return i>0?1-Math.sqrt(1-t/i):0}_setSize(t){this._cubeSize=Math.max(fx,t1(t))}_fromTexture(t,i){t.mapping===vo||t.mapping===Dl?this._setSize(t.image.length===0?fx:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);const r=i||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(r),r}_allocateTarget(){const t=this._cubeSize,i=hx(t,!1,!1),r=Math.log2(t)-RR;for(let l=0;l<=r;l++)i.texture.mipmaps.push({width:t>>l,height:t>>l});return i.texture.name="PMREM",i.texture.isPMREMTexture=!0,i}_getSourceTarget(t=!1){const i=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==i||t&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=hx(i,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,i,r){const l=this._boxMesh,d=this._cubeCamera;l.material=r,d.renderTarget=t,d.activeMipmapLevel=i;const h=t.width>>i;t.viewport.set(0,0,h,h),d.update(this._renderer,l),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let i;t.mapping===vo||t.mapping===Dl?(this._cubemapMaterial===null&&(this._cubemapMaterial=mx()),i=this._cubemapMaterial,i.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=px()),i=this._equirectMaterial),i.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,i)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=LR(),this._integrationMaterial=UR());const i=this._cubeSize,r=t.texture.mipmaps.length-1,l=this._ggxMaterial.uniforms;l.envMap.value=this._sourceTarget.texture;const d=this._integrationMaterial.uniforms;d.envMap.value=this._sourceTarget.texture,d.sourceLod.value=Math.log2(i/Fy);for(let h=0;h<=r;h++){const p=Pl.lodToRoughness(h,r);if(h>r-NR)d.roughness.value=p,this._renderCube(t,h,this._integrationMaterial);else{const g=p>0?Math.log2(i)+.5*Math.log2(6/(Iy*Math.pow(p,4)))+.5:0;l.roughness.value=p,l.lodBias.value=g,this._renderCube(t,h,this._ggxMaterial)}}}_blur(t,i){this._blurMaterial===null&&(this._blurMaterial=OR());const r=this._blurMaterial,l=r.uniforms,d=this._sourceTarget;l.sigma.value=Math.min(i,Math.PI)/Math.SQRT2,l.envMap.value=d.texture,this._renderCube(t,0,r),l.envMap.value=t.texture,this._renderCube(d,0,r)}}function hx(o,t,i){return new fm(o,{minFilter:bs,generateMipmaps:t,type:ma,colorSpace:ju,depthBuffer:i})}function Gl(o,t,i){return new sr({name:o,uniforms:t,vertexShader:xt.cube_vert,fragmentShader:i,side:ri,blending:ho,depthTest:!1,depthWrite:!1})}function LR(){return Gl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Iy}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function UR(){return Gl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Fy}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function OR(){return Gl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${CR}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function px(){return Gl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function mx(){return Gl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function PR(o){let t=new WeakMap,i=new WeakMap,r=null;function l(x,b=!1){return x==null?null:b?h(x):d(x)}function d(x){if(x&&x.isTexture){const b=x.mapping;if(b===Uu||b===Rh)if(t.has(x)){const T=t.get(x).texture;return p(T,x.mapping)}else{const T=x.image;if(T&&T.height>0){const w=new fm(T.height);return w.fromEquirectangularTexture(o,x),t.set(x,w),x.addEventListener("dispose",m),p(w.texture,x.mapping)}else return null}}return x}function h(x){if(x&&x.isTexture&&x.isPMREMTexture!==!0){const b=x.mapping,T=b===Uu||b===Rh,w=b===vo||b===Dl;if(T||w){let M=i.get(x);const y=M!==void 0?M.texture.pmremVersion:0;if(x.isRenderTargetTexture&&x.pmremVersion!==y)return r===null&&(r=new Pl(o)),M=T?r.fromEquirectangular(x,M):r.fromCubemap(x,M),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),M.texture;if(M!==void 0)return M.texture;{const U=x.image;return T&&U&&U.height>0||w&&U&&g(U)?(r===null&&(r=new Pl(o)),M=T?r.fromEquirectangular(x):r.fromCubemap(x),M.texture.pmremVersion=x.pmremVersion,i.set(x,M),x.addEventListener("dispose",S),M.texture):null}}}return x}function p(x,b){return b===Uu?x.mapping=vo:b===Rh&&(x.mapping=Dl),x}function g(x){let b=0;const T=6;for(let w=0;w<T;w++)x[w]!==void 0&&b++;return b===T}function m(x){const b=x.target;b.removeEventListener("dispose",m);const T=t.get(b);T!==void 0&&(t.delete(b),T.dispose())}function S(x){const b=x.target;b.removeEventListener("dispose",S);const T=i.get(b);T!==void 0&&(i.delete(b),T.dispose())}function _(){t=new WeakMap,i=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:_}}function zR(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&po("WebGLRenderer: "+r+" extension not supported."),l}}}function IR(o,t,i,r){const l={},d=new WeakMap,h=new FinalizationRegistry(T=>delete l[T]);function p(T){g(T.target)}function g(T){T.index!==null&&t.remove(T.index);for(const M in T.attributes)t.remove(T.attributes[M]);T.removeEventListener("dispose",p),delete l[T.id],h.unregister(T);const w=d.get(T);w&&(t.remove(w),d.delete(T)),r.releaseStatesOfGeometry(T),T.isInstancedBufferGeometry===!0&&delete T._maxInstanceCount,i.memory.geometries--}function m(T,w){return l[w.id]!==void 0||(w.addEventListener("dispose",p),l[w.id]=new WeakRef(w),h.register(w,w.id,w),i.memory.geometries++),w}function S(T){const w=T.attributes;for(const M in w)t.update(w[M],o.ARRAY_BUFFER)}function _(T){const w=T.index,M=T.attributes.position;let y=0;if(M===void 0)return;const U=w!==null?w.array.length:M.array.length/3-1,F=M.count>=65535?Ty:Ey,N=new F(Math.ceil(U/3)*6,1),I=N.array;if(w!==null){const E=w.array;y=w.version;for(let L=0,J=0;L<U;L+=3){const V=E[L+0],k=E[L+1],ae=E[L+2];I[J++]=V,I[J++]=k,I[J++]=k,I[J++]=ae,I[J++]=ae,I[J++]=V}}else{y=M.version;for(let E=0,L=0;E<U;E+=3){const J=E+0,V=E+1,k=E+2;I[L++]=J,I[L++]=V,I[L++]=V,I[L++]=k,I[L++]=k,I[L++]=J}}N.version=y;const P=d.get(T);P&&t.remove(P),d.set(T,N)}function x(T){const w=d.get(T);if(w){const M=T.index;M!==null&&w.version<M.version&&_(T)}else _(T);return d.get(T)}function b(){for(const T in l){const w=l[T].deref();w!==void 0&&g(w)}}return{get:m,update:S,getWireframeAttribute:x,dispose:b}}function FR(o,t,i){let r;function l(_){r=_}let d,h;function p(_){d=_.type,h=_.bytesPerElement}function g(_,x){o.drawElements(r,x,d,_*h),i.update(x,r,1)}function m(_,x,b){b!==0&&(o.drawElementsInstanced(r,x,d,_*h,b),i.update(x,r,b))}function S(_,x,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,x,0,d,_,0,b);let w=0;for(let M=0;M<b;M++)w+=x[M];i.update(w,r,1)}this.setMode=l,this.setIndex=p,this.render=g,this.renderInstances=m,this.renderMultiDraw=S}function BR(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(d,h,p){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=p*(d/3);break;case o.LINES:i.lines+=p*(d/2);break;case o.LINE_STRIP:i.lines+=p*(d-1);break;case o.LINE_LOOP:i.lines+=p*d;break;case o.POINTS:i.points+=p*d;break;default:It("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function HR(o,t,i){const r=new WeakMap,l=new ln;function d(h,p,g){const m=h.morphTargetInfluences,S=p.morphAttributes.position||p.morphAttributes.normal||p.morphAttributes.color,_=S!==void 0?S.length:0;let x=r.get(p);if(x===void 0||x.count!==_){let V=function(){L.dispose(),r.delete(p),p.removeEventListener("dispose",V)};var b=V;x!==void 0&&x.texture.dispose();const T=p.morphAttributes.position!==void 0,w=p.morphAttributes.normal!==void 0,M=p.morphAttributes.color!==void 0,y=p.morphAttributes.position||[],U=p.morphAttributes.normal||[],F=p.morphAttributes.color||[];let N=0;T===!0&&(N=1),w===!0&&(N=2),M===!0&&(N=3);let I=p.attributes.position.count*N,P=1;I>t.maxTextureSize&&(P=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const E=new Float32Array(I*P*4*_),L=new Sy(E,I,P,_);L.type=la,L.needsUpdate=!0;const J=N*4;for(let k=0;k<_;k++){const ae=y[k],pe=U[k],q=F[k],ee=I*P*4*k;for(let X=0;X<ae.count;X++){const H=X*J;T===!0&&(l.fromBufferAttribute(ae,X),E[ee+H+0]=l.x,E[ee+H+1]=l.y,E[ee+H+2]=l.z,E[ee+H+3]=0),w===!0&&(l.fromBufferAttribute(pe,X),E[ee+H+4]=l.x,E[ee+H+5]=l.y,E[ee+H+6]=l.z,E[ee+H+7]=0),M===!0&&(l.fromBufferAttribute(q,X),E[ee+H+8]=l.x,E[ee+H+9]=l.y,E[ee+H+10]=l.z,E[ee+H+11]=q.itemSize===4?l.w:1)}}x={count:_,texture:L,size:new wt(I,P)},r.set(p,x),p.addEventListener("dispose",V)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)g.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<m.length;M++)T+=m[M];const w=p.morphTargetsRelative?1:1-T;g.getUniforms().setValue(o,"morphTargetBaseInfluence",w),g.getUniforms().setValue(o,"morphTargetInfluences",m)}g.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),g.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:d}}function GR(o,t,i,r,l){let d=new WeakMap;function h(m){const S=l.render.frame,_=m.geometry,x=t.get(m,_);if(d.get(x)!==S&&(t.update(x),d.set(x,S)),m.isInstancedMesh&&(m.hasEventListener("dispose",g)===!1&&m.addEventListener("dispose",g),d.get(m)!==S&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),d.set(m,S))),m.isSkinnedMesh){const b=m.skeleton;d.get(b)!==S&&(b.update(),d.set(b,S))}return x}function p(){d=new WeakMap}function g(m){const S=m.target;S.removeEventListener("dispose",g),r.releaseStatesOfObject(S),i.remove(S.instanceMatrix),S.instanceColor!==null&&i.remove(S.instanceColor)}return{update:h,dispose:p}}const jR={[iy]:"LINEAR_TONE_MAPPING",[ay]:"REINHARD_TONE_MAPPING",[sy]:"CINEON_TONE_MAPPING",[tm]:"ACES_FILMIC_TONE_MAPPING",[oy]:"AGX_TONE_MAPPING",[ly]:"NEUTRAL_TONE_MAPPING",[ry]:"CUSTOM_TONE_MAPPING"};function VR(o,t,i,r,l,d){const h=new da(t,i,{type:o,depthBuffer:l,stencilBuffer:d,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let p=null,g=null,m=null;const S=new Cs;S.setAttribute("position",new Li([-1,3,0,-1,-1,0,3,-1,0],3)),S.setAttribute("uv",new Li([0,2,0,0,2,0],2));const _=new L1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new fa(S,_),b=new Oy(-1,1,1,-1,0,1);let T=null,w=null,M=!1,y,U=null,F=[],N=!1;this.setSize=function(I,P){h.setSize(I,P),p!==null&&p.setSize(I,P),g!==null&&g.setSize(I,P);for(let E=0;E<F.length;E++){const L=F[E];L.setSize&&L.setSize(I,P)}},this.setEffects=function(I){F=I,N=F.length>0&&F[0].isRenderPass===!0;const P=h.width,E=h.height;F.length>0&&p===null&&(p=new da(P,E,{type:ma,depthBuffer:!1,stencilBuffer:!1}),g=new da(P,E,{type:ma,depthBuffer:!1,stencilBuffer:!1}));const L=l===!0&&F.some(J=>J.needsDepthTexture===!0);L!==(h.depthTexture!==null)&&(L===!0&&m===null&&(m=new xo(P,E),d===!0&&(m.format=Es,m.type=_o)),h.dispose(),h.depthTexture=L?m:null,h.resolveDepthBuffer=L,h.storeMultisampledDepthBuffer=L);for(let J=0;J<F.length;J++){const V=F[J];V.setSize&&V.setSize(P,E),L&&V.needsDepthTexture===!0&&V.setDepthTexture&&V.setDepthTexture(m)}},this.begin=function(I,P){if(M||I.toneMapping===Ba&&F.length===0)return!1;if(U=P,P!==null){const E=P.width,L=P.height;(h.width!==E||h.height!==L)&&this.setSize(E,L)}return N===!1&&I.setRenderTarget(h),y=I.toneMapping,I.toneMapping=Ba,!0},this.hasRenderPass=function(){return N},this.end=function(I,P){I.toneMapping=y,M=!0;let E=h,L=p;for(let J=0;J<F.length;J++){const V=F[J];V.enabled!==!1&&(V.render(I,L,E,P),V.needsSwap!==!1&&(E=L,L=L===p?g:p))}if(T!==I.outputColorSpace||w!==I.toneMapping){T=I.outputColorSpace,w=I.toneMapping,_.defines={},Nt.getTransfer(T)===kt&&(_.defines.SRGB_TRANSFER="");const J=jR[w];J&&(_.defines[J]=""),_.needsUpdate=!0}_.uniforms.tDiffuse.value=E.texture,I.setRenderTarget(U),I.render(x,b),U=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){h.dispose(),p!==null&&p.dispose(),g!==null&&g.dispose(),S.dispose(),_.dispose()}}const By=new qn,Hy=new xo(1,1),Gy=new Ny(1),jy=new Sy,Vy=new c1,qy=new Ry,gx=[],vx=[],_x=new Float32Array(16),xx=new Float32Array(9),yx=new Float32Array(4);function Mo(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let d=gx[l];if(d===void 0&&(d=new Float32Array(l),gx[l]=d),t!==0){r.toArray(d,0);for(let h=1,p=0;h!==t;++h)p+=i,o[h].toArray(d,p)}return d}function bn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function En(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Wu(o,t){let i=vx[t];i===void 0&&(i=new Int32Array(t),vx[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function qR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function kR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2fv(this.addr,t),En(i,t)}}function XR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bn(i,t))return;o.uniform3fv(this.addr,t),En(i,t)}}function WR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4fv(this.addr,t),En(i,t)}}function YR(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),En(i,t)}else{if(bn(i,r))return;yx.set(r),o.uniformMatrix2fv(this.addr,!1,yx),En(i,r)}}function ZR(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),En(i,t)}else{if(bn(i,r))return;xx.set(r),o.uniformMatrix3fv(this.addr,!1,xx),En(i,r)}}function QR(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(bn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),En(i,t)}else{if(bn(i,r))return;_x.set(r),o.uniformMatrix4fv(this.addr,!1,_x),En(i,r)}}function KR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function JR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2iv(this.addr,t),En(i,t)}}function $R(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3iv(this.addr,t),En(i,t)}}function e2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4iv(this.addr,t),En(i,t)}}function t2(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function n2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2uiv(this.addr,t),En(i,t)}}function i2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3uiv(this.addr,t),En(i,t)}}function a2(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4uiv(this.addr,t),En(i,t)}}function Yu(o){return o.version===0&&(o.compareFunction=xy,o.needsUpdate=!0),o}function s2(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let d;this.type===o.SAMPLER_2D_SHADOW?d=Yu(Hy):d=By,i.setTexture2D(t||d,l)}function r2(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Vy,l)}function o2(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let d;this.type===o.SAMPLER_CUBE_SHADOW?d=Yu(Gy):d=qy,i.setTextureCube(t||d,l)}function l2(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||jy,l)}function c2(o){switch(o){case 5126:return qR;case 35664:return kR;case 35665:return XR;case 35666:return WR;case 35674:return YR;case 35675:return ZR;case 35676:return QR;case 5124:case 35670:return KR;case 35667:case 35671:return JR;case 35668:case 35672:return $R;case 35669:case 35673:return e2;case 5125:return t2;case 36294:return n2;case 36295:return i2;case 36296:return a2;case 35678:case 36198:case 36298:case 36306:case 35682:return s2;case 35679:case 36299:case 36307:return r2;case 35680:case 36300:case 36308:case 36293:return o2;case 36289:case 36303:case 36311:case 36292:return l2}}function u2(o,t){o.uniform1fv(this.addr,t)}function d2(o,t){const i=Mo(t,this.size,2);o.uniform2fv(this.addr,i)}function f2(o,t){const i=Mo(t,this.size,3);o.uniform3fv(this.addr,i)}function h2(o,t){const i=Mo(t,this.size,4);o.uniform4fv(this.addr,i)}function p2(o,t){const i=Mo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function m2(o,t){const i=Mo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function g2(o,t){const i=Mo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function v2(o,t){o.uniform1iv(this.addr,t)}function _2(o,t){o.uniform2iv(this.addr,t)}function x2(o,t){o.uniform3iv(this.addr,t)}function y2(o,t){o.uniform4iv(this.addr,t)}function S2(o,t){o.uniform1uiv(this.addr,t)}function M2(o,t){o.uniform2uiv(this.addr,t)}function b2(o,t){o.uniform3uiv(this.addr,t)}function E2(o,t){o.uniform4uiv(this.addr,t)}function T2(o,t,i){const r=this.cache,l=t.length,d=Wu(i,l);bn(r,d)||(o.uniform1iv(this.addr,d),En(r,d));let h;this.type===o.SAMPLER_2D_SHADOW?h=Yu(Hy):h=By;for(let p=0;p!==l;++p)i.setTexture2D(t[p]||h,d[p])}function A2(o,t,i){const r=this.cache,l=t.length,d=Wu(i,l);bn(r,d)||(o.uniform1iv(this.addr,d),En(r,d));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Vy,d[h])}function R2(o,t,i){const r=this.cache,l=t.length,d=Wu(i,l);bn(r,d)||(o.uniform1iv(this.addr,d),En(r,d));let h;this.type===o.SAMPLER_CUBE_SHADOW?h=Yu(Gy):h=qy;for(let p=0;p!==l;++p)i.setTextureCube(t[p]||h,d[p])}function C2(o,t,i){const r=this.cache,l=t.length,d=Wu(i,l);bn(r,d)||(o.uniform1iv(this.addr,d),En(r,d));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||jy,d[h])}function N2(o){switch(o){case 5126:return u2;case 35664:return d2;case 35665:return f2;case 35666:return h2;case 35674:return p2;case 35675:return m2;case 35676:return g2;case 5124:case 35670:return v2;case 35667:case 35671:return _2;case 35668:case 35672:return x2;case 35669:case 35673:return y2;case 5125:return S2;case 36294:return M2;case 36295:return b2;case 36296:return E2;case 35678:case 36198:case 36298:case 36306:case 35682:return T2;case 35679:case 36299:case 36307:return A2;case 35680:case 36300:case 36308:case 36293:return R2;case 36289:case 36303:case 36311:case 36292:return C2}}class w2{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=c2(i.type)}}class D2{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=N2(i.type)}}class L2{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let d=0,h=l.length;d!==h;++d){const p=l[d];p.setValue(t,i[p.id],r)}}}const $h=/(\w+)(\])?(\[|\.)?/g;function Sx(o,t){o.seq.push(t),o.map[t.id]=t}function U2(o,t,i){const r=o.name,l=r.length;for($h.lastIndex=0;;){const d=$h.exec(r),h=$h.lastIndex;let p=d[1];const g=d[2]==="]",m=d[3];if(g&&(p=p|0),m===void 0||m==="["&&h+2===l){Sx(i,m===void 0?new w2(p,o,t):new D2(p,o,t));break}else{let _=i.map[p];_===void 0&&(_=new L2(p),Sx(i,_)),i=_}}}class Fu{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const p=t.getActiveUniform(i,h),g=t.getUniformLocation(i,p.name);U2(p,g,this)}const l=[],d=[];for(const h of this.seq)h.type===t.SAMPLER_2D_SHADOW||h.type===t.SAMPLER_CUBE_SHADOW||h.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(h):d.push(h);l.length>0&&(this.seq=l.concat(d))}setValue(t,i,r,l){const d=this.map[i];d!==void 0&&d.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let d=0,h=i.length;d!==h;++d){const p=i[d],g=r[p.id];g.needsUpdate!==!1&&p.setValue(t,g.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,d=t.length;l!==d;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function Mx(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const O2=37297;let P2=0;function z2(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),d=Math.min(t+6,i.length);for(let h=l;h<d;h++){const p=h+1;r.push(`${p===t?">":" "} ${p}: ${i[h]}`)}return r.join(`
`)}const bx=new dt;function I2(o){Nt._getMatrix(bx,Nt.workingColorSpace,o);const t=`mat3( ${bx.elements.map(i=>i.toFixed(4))} )`;switch(Nt.getTransfer(o)){case Vu:return[t,"LinearTransferOETF"];case kt:return[t,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Ex(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),d=(o.getShaderInfoLog(t)||"").trim();if(r&&d==="")return"";const h=/ERROR: 0:(\d+)/.exec(d);if(h){const p=parseInt(h[1]);return i.toUpperCase()+`

`+d+`

`+z2(o.getShaderSource(t),p)}else return d}function F2(o,t){const i=I2(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( ${i[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const B2={[iy]:"Linear",[ay]:"Reinhard",[sy]:"Cineon",[tm]:"ACESFilmic",[oy]:"AgX",[ly]:"Neutral",[ry]:"Custom"};function H2(o,t){const i=B2[t];return i===void 0?(ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+o+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Nu=new fe;function G2(){Nt.getLuminanceCoefficients(Nu);const o=Nu.x.toFixed(4),t=Nu.y.toFixed(4),i=Nu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function j2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Al).join(`
`)}function V2(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function q2(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const d=o.getActiveAttrib(t,l),h=d.name;let p=1;d.type===o.FLOAT_MAT2&&(p=2),d.type===o.FLOAT_MAT3&&(p=3),d.type===o.FLOAT_MAT4&&(p=4),i[h]={type:d.type,location:o.getAttribLocation(t,h),locationSize:p}}return i}function Al(o){return o!==""}function Tx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ax(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const k2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xp(o){return o.replace(k2,X2)}function X2(o,t){const i=xt[t];if(i===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Xp(i)}const W2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rx(o){return o.replace(W2,Y2)}function Y2(o,t,i,r){let l="";for(let d=parseInt(t);d<parseInt(i);d++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+d+" ]").replace(/UNROLLED_LOOP_INDEX/g,d);return l}function Cx(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Z2={[Lu]:"SHADOWMAP_TYPE_PCF",[El]:"SHADOWMAP_TYPE_VSM"};function Q2(o){return Z2[o.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K2={[Dl]:"ENVMAP_MODE_REFRACTION"};function J2(o){return o.envMap===!1?"ENVMAP_MODE_REFLECTION":K2[o.envMapMode]||"ENVMAP_MODE_REFLECTION"}const $2={[ny]:"ENVMAP_BLENDING_MULTIPLY",[FE]:"ENVMAP_BLENDING_MIX",[BE]:"ENVMAP_BLENDING_ADD"};function eC(o){return o.envMap===!1?"ENVMAP_BLENDING_NONE":$2[o.combine]||"ENVMAP_BLENDING_NONE"}function tC(o,t,i,r){const l=o.getContext(),d=i.defines;let h=i.vertexShader,p=i.fragmentShader;const g=Q2(i),m=i.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",S=J2(i),_=eC(i),x=j2(i),b=V2(d),T=l.createProgram();let w,M,y=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(w=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Al).join(`
`),w.length>0&&(w+=`
`),M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Al).join(`
`),M.length>0&&(M+=`
`)):(w=[Cx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+i.diffuseRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexNormals?"#define HAS_NORMAL":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Al).join(`
`),M=[Cx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+S:"",i.envMap?"#define "+_:"",i.envMapPMREM?"#define ENVMAP_MAX_LOD "+i.envMapMaxLod+".0":"",i.envMapPMREM?"#define ENVMAP_SIZE "+i.envMapSize+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",i.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.retroreflection?"#define USE_RETROREFLECTION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas||i.batchingColor?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+g:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ba?"#define TONE_MAPPING":"",i.toneMapping!==Ba?xt.tonemapping_pars_fragment:"",i.toneMapping!==Ba?H2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,F2("linearToOutputTexel",i.outputColorSpace),G2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Al).join(`
`)),h=Xp(h),h=Tx(h,i),h=Ax(h,i),p=Xp(p),p=Tx(p,i),p=Ax(p,i),h=Rx(h),p=Rx(p),i.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,w=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,M=["#define varying in",i.glslVersion===H_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===H_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const U=y+w+h,F=y+M+p,N=Mx(l,l.VERTEX_SHADER,U),I=Mx(l,l.FRAGMENT_SHADER,F);l.attachShader(T,N),l.attachShader(T,I),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.hasPositionAttribute===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(V){if(o.debug.checkShaderErrors){const k=l.getProgramInfoLog(T)||"",ae=l.getShaderInfoLog(N)||"",pe=l.getShaderInfoLog(I)||"",q=k.trim(),ee=ae.trim(),X=pe.trim();let H=!0,ce=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(H=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,T,N,I);else{const te=Ex(l,N,"vertex"),ue=Ex(l,I,"fragment");It("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+q+`
`+te+`
`+ue)}else q!==""?ut("WebGLProgram: Program Info Log:",q):(ee===""||X==="")&&(ce=!1);ce&&(V.diagnostics={runnable:H,programLog:q,vertexShader:{log:ee,prefix:w},fragmentShader:{log:X,prefix:M}})}l.deleteShader(N),l.deleteShader(I),E=new Fu(l,T),L=q2(l,T)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let L;this.getAttributes=function(){return L===void 0&&P(this),L};let J=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(T,O2)),J},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=P2++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=N,this.fragmentShader=I,this}let nC=0;class iC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,i,r){const l=this._getShaderCacheForMaterial(t);return l.has(i)===!1&&(l.add(i),i.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new aC(t),i.set(t,r)),r}}class aC{constructor(t){this.id=nC++,this.code=t,this.usedTimes=0}}function sC(o){return o===ar||o===Hu||o===Gu}function rC(o,t,i,r,l,d){const h=new My,p=new iC,g=new Set,m=[],S=new Map,_=r.logarithmicDepthBuffer,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(E){return g.add(E),E===0?"uv":`uv${E}`}function T(E,L,J,V,k,ae){const pe=V.fog,q=k.geometry,ee=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?V.environment:null,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,H=t.get(E.envMap||ee,X),ce=x[E.type];let te=r.precision;E.precision!==null&&(te=r.getMaxPrecision(E.precision),te!==E.precision&&ut("WebGLProgram.getParameters:",E.precision,"not supported, using",te,"instead."));const ue=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Te=ue!==void 0?ue.length:0;let Be=0;q.morphAttributes.position!==void 0&&(Be=1),q.morphAttributes.normal!==void 0&&(Be=2),q.morphAttributes.color!==void 0&&(Be=3);let Ke,D,K,xe;if(ce){const Ve=oa[ce];Ke=Ve.vertexShader,D=Ve.fragmentShader}else{Ke=E.vertexShader,D=E.fragmentShader;const Ve=p.getVertexShaderStage(E),Ot=p.getFragmentShaderStage(E);p.update(E,Ve,Ot),K=Ve.id,xe=Ot.id}const _e=o.getRenderTarget(),Me=o.state.buffers.depth.getReversed(),oe=k.isInstancedMesh===!0,we=k.isBatchedMesh===!0,Ee=!!E.map,Ce=!!E.matcap,ft=!!H,_t=ft&&H.isPMREMTexture===!0,en=!!E.aoMap,Ft=!!E.lightMap,Ut=!!E.bumpMap&&E.wireframe===!1,it=!!E.normalMap,hn=!!E.displacementMap,tn=!!E.emissiveMap,pn=!!E.metalnessMap,wn=!!E.roughnessMap,Dn=E.anisotropy>0,W=E.clearcoat>0,Hn=E.diffuseRoughness>0,Ht=E.dispersion>0,Xt=E.retroreflectivity>0,He=E.iridescence>0,Wt=E.sheen>0,tt=E.transmission>0,rt=Dn&&!!E.anisotropyMap,O=W&&!!E.clearcoatMap,A=W&&!!E.clearcoatNormalMap,ne=W&&!!E.clearcoatRoughnessMap,Re=Hn&&!!E.diffuseRoughnessMap,be=He&&!!E.iridescenceMap,Ue=He&&!!E.iridescenceThicknessMap,Ie=Wt&&!!E.sheenColorMap,he=Wt&&!!E.sheenRoughnessMap,ve=!!E.specularMap,Oe=!!E.specularColorMap,B=!!E.specularIntensityMap,ge=tt&&!!E.transmissionMap,me=tt&&!!E.thicknessMap,Pe=!!E.gradientMap,Ne=!!E.alphaMap,ze=E.alphaTest>0,Je=!!E.alphaHash,nt=!!E.extensions;let Ae=Ba;E.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ae=o.toneMapping);const Xe=_t?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,ht={shaderID:ce,shaderType:E.type,shaderName:E.name,vertexShader:Ke,fragmentShader:D,defines:E.defines,customVertexShaderID:K,customFragmentShaderID:xe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:te,batching:we,batchingColor:we&&k._colorsTexture!==null,instancing:oe,instancingColor:oe&&k.instanceColor!==null,instancingMorph:oe&&k.morphTexture!==null,outputColorSpace:_e===null?o.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:Nt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ee,matcap:Ce,envMap:ft,envMapMode:ft&&H.mapping,envMapPMREM:_t,envMapMaxLod:_t?Xe.length-1:null,envMapSize:_t?Xe[0].width:null,aoMap:en,lightMap:Ft,bumpMap:Ut,normalMap:it,displacementMap:hn,emissiveMap:tn,normalMapObjectSpace:it&&E.normalMapType===jE,normalMapTangentSpace:it&&E.normalMapType===Vp,packedNormalMap:it&&E.normalMapType===Vp&&sC(E.normalMap.format),metalnessMap:pn,roughnessMap:wn,anisotropy:Dn,anisotropyMap:rt,clearcoat:W,clearcoatMap:O,clearcoatNormalMap:A,clearcoatRoughnessMap:ne,diffuseRoughness:Hn,diffuseRoughnessMap:Re,dispersion:Ht,retroreflection:Xt,iridescence:He,iridescenceMap:be,iridescenceThicknessMap:Ue,sheen:Wt,sheenColorMap:Ie,sheenRoughnessMap:he,specularMap:ve,specularColorMap:Oe,specularIntensityMap:B,transmission:tt,transmissionMap:ge,thicknessMap:me,gradientMap:Pe,opaque:E.transparent===!1&&E.blending===Rl&&E.alphaToCoverage===!1,alphaMap:Ne,alphaTest:ze,alphaHash:Je,combine:E.combine,mapUv:Ee&&b(E.map.channel),aoMapUv:en&&b(E.aoMap.channel),lightMapUv:Ft&&b(E.lightMap.channel),bumpMapUv:Ut&&b(E.bumpMap.channel),normalMapUv:it&&b(E.normalMap.channel),displacementMapUv:hn&&b(E.displacementMap.channel),emissiveMapUv:tn&&b(E.emissiveMap.channel),metalnessMapUv:pn&&b(E.metalnessMap.channel),roughnessMapUv:wn&&b(E.roughnessMap.channel),anisotropyMapUv:rt&&b(E.anisotropyMap.channel),clearcoatMapUv:O&&b(E.clearcoatMap.channel),clearcoatNormalMapUv:A&&b(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&b(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Re&&b(E.diffuseRoughnessMap.channel),iridescenceMapUv:be&&b(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&b(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&b(E.sheenColorMap.channel),sheenRoughnessMapUv:he&&b(E.sheenRoughnessMap.channel),specularMapUv:ve&&b(E.specularMap.channel),specularColorMapUv:Oe&&b(E.specularColorMap.channel),specularIntensityMapUv:B&&b(E.specularIntensityMap.channel),transmissionMapUv:ge&&b(E.transmissionMap.channel),thicknessMapUv:me&&b(E.thicknessMap.channel),alphaMapUv:Ne&&b(E.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(it||Dn),vertexNormals:!!q.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!q.attributes.uv&&(Ee||Ne),fog:!!pe,useFog:E.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||q.attributes.normal===void 0&&it===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Me,skinning:k.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Te,morphTextureStride:Be,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ae.filter(Ve=>Ve.texture!==null).length,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:E.dithering,shadowMapEnabled:o.shadowMap.enabled&&J.length>0,shadowMapType:o.shadowMap.type,toneMapping:Ae,decodeVideoTexture:Ee&&E.map.isVideoTexture===!0&&Nt.getTransfer(E.map.colorSpace)===kt,decodeVideoTextureEmissive:tn&&E.emissiveMap.isVideoTexture===!0&&Nt.getTransfer(E.emissiveMap.colorSpace)===kt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===za,flipSided:E.side===ri,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:nt&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(nt&&E.extensions.multiDraw===!0||we)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return ht.vertexUv1s=g.has(1),ht.vertexUv2s=g.has(2),ht.vertexUv3s=g.has(3),g.clear(),ht}function w(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const J in E.defines)L.push(J),L.push(E.defines[J]);return E.isRawShaderMaterial===!1&&(M(L,E),y(L,E),L.push(o.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function M(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapPMREM),E.push(L.envMapMaxLod),E.push(L.envMapSize),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.diffuseRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.numLightProbeGrids),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function y(E,L){h.disableAll(),L.instancing&&h.enable(0),L.instancingColor&&h.enable(1),L.instancingMorph&&h.enable(2),L.matcap&&h.enable(3),L.envMap&&h.enable(4),L.normalMapObjectSpace&&h.enable(5),L.normalMapTangentSpace&&h.enable(6),L.clearcoat&&h.enable(7),L.iridescence&&h.enable(8),L.alphaTest&&h.enable(9),L.vertexColors&&h.enable(10),L.vertexAlphas&&h.enable(11),L.vertexUv1s&&h.enable(12),L.vertexUv2s&&h.enable(13),L.vertexUv3s&&h.enable(14),L.vertexTangents&&h.enable(15),L.anisotropy&&h.enable(16),L.alphaHash&&h.enable(17),L.batching&&h.enable(18),L.dispersion&&h.enable(19),L.retroreflection&&h.enable(24),L.diffuseRoughness&&h.enable(25),L.batchingColor&&h.enable(20),L.gradientMap&&h.enable(21),L.packedNormalMap&&h.enable(22),L.vertexNormals&&h.enable(23),E.push(h.mask),h.disableAll(),L.fog&&h.enable(0),L.useFog&&h.enable(1),L.flatShading&&h.enable(2),L.logarithmicDepthBuffer&&h.enable(3),L.reversedDepthBuffer&&h.enable(4),L.skinning&&h.enable(5),L.morphTargets&&h.enable(6),L.morphNormals&&h.enable(7),L.morphColors&&h.enable(8),L.premultipliedAlpha&&h.enable(9),L.shadowMapEnabled&&h.enable(10),L.doubleSided&&h.enable(11),L.flipSided&&h.enable(12),L.useDepthPacking&&h.enable(13),L.dithering&&h.enable(14),L.transmission&&h.enable(15),L.sheen&&h.enable(16),L.opaque&&h.enable(17),L.pointsUvs&&h.enable(18),L.decodeVideoTexture&&h.enable(19),L.decodeVideoTextureEmissive&&h.enable(20),L.alphaToCoverage&&h.enable(21),L.numLightProbeGrids>0&&h.enable(22),L.hasPositionAttribute&&h.enable(23),E.push(h.mask)}function U(E){const L=x[E.type];let J;if(L){const V=oa[L];J=N1.clone(V.uniforms)}else J=E.uniforms;return J}function F(E,L){let J=S.get(L);return J!==void 0?++J.usedTimes:(J=new tC(o,L,E,l),m.push(J),S.set(L,J)),J}function N(E){if(--E.usedTimes===0){const L=m.indexOf(E);m[L]=m[m.length-1],m.pop(),S.delete(E.cacheKey),E.destroy()}}function I(E){p.remove(E)}function P(){p.dispose()}return{getParameters:T,getProgramCacheKey:w,getUniforms:U,acquireProgram:F,releaseProgram:N,releaseShaderCache:I,programs:m,dispose:P}}function oC(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let p=o.get(h);return p===void 0&&(p={},o.set(h,p)),p}function r(h){o.delete(h)}function l(h,p,g){o.get(h)[p]=g}function d(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:d}}function lC(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.materialVariant!==t.materialVariant?o.materialVariant-t.materialVariant:o.z!==t.z?o.z-t.z:o.id-t.id}function Nx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function wx(){const o=[];let t=0;const i=[],r=[],l=[];function d(){t=0,i.length=0,r.length=0,l.length=0}function h(x){let b=0;return x.isInstancedMesh&&(b+=2),x.isSkinnedMesh&&(b+=1),b}function p(x,b,T,w,M,y){let U=o[t];return U===void 0?(U={id:x.id,object:x,geometry:b,material:T,materialVariant:h(x),groupOrder:w,renderOrder:x.renderOrder,z:M,group:y},o[t]=U):(U.id=x.id,U.object=x,U.geometry=b,U.material=T,U.materialVariant=h(x),U.groupOrder=w,U.renderOrder=x.renderOrder,U.z=M,U.group=y),t++,U}function g(x,b,T,w,M,y,U){U.reversedDepth===!0&&(M=-M);const F=p(x,b,T,w,M,y);T.transmission>0?r.push(F):T.transparent===!0?l.push(F):i.push(F)}function m(x,b,T,w,M,y){const U=p(x,b,T,w,M,y);T.transmission>0?r.unshift(U):T.transparent===!0?l.unshift(U):i.unshift(U)}function S(x,b){i.length>1&&i.sort(x||lC),r.length>1&&r.sort(b||Nx),l.length>1&&l.sort(b||Nx)}function _(){for(let x=t,b=o.length;x<b;x++){const T=o[x];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:i,transmissive:r,transparent:l,init:d,push:g,unshift:m,finish:_,sort:S}}function cC(){let o=new WeakMap;function t(r,l){const d=o.get(r);let h;return d===void 0?(h=new wx,o.set(r,[h])):l>=d.length?(h=new wx,d.push(h)):h=d[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function uC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={direction:new fe,color:new Rt};break;case"SpotLight":i={position:new fe,direction:new fe,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new fe,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new fe,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":i={color:new Rt,position:new fe,halfWidth:new fe,halfHeight:new fe};break}return o[t.id]=i,i}}}function dC(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"SunLight":case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let fC=0;function hC(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function pC(o){const t=new uC,i=dC(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new fe);const l=new fe,d=new cn,h=new cn;function p(m){let S=0,_=0,x=0;for(let ae=0;ae<9;ae++)r.probe[ae].set(0,0,0);let b=0,T=0,w=0,M=0,y=0,U=0,F=0,N=0,I=0,P=0,E=0,L=0,J=0,V=0;m.sort(hC);for(let ae=0,pe=m.length;ae<pe;ae++){const q=m[ae],ee=q.color,X=q.intensity,H=q.distance;let ce=null;if(q.shadow&&q.shadow.map&&(q.shadow.map.texture.format===ar?ce=q.shadow.map.texture:ce=q.shadow.map.depthTexture||q.shadow.map.texture),q.isAmbientLight)S+=ee.r*X,_+=ee.g*X,x+=ee.b*X;else if(q.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(q.sh.coefficients[te],X);V++}else if(q.isSunLight){const te=t.get(q);if(te.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const ue=q.shadow,Te=i.get(q);Te.shadowIntensity=ue.intensity,Te.shadowBias=ue.bias,Te.shadowNormalBias=ue.normalBias,Te.shadowRadius=ue.radius,Te.shadowMapSize.copy(ue.mapSize).multiply(ue.getFrameExtents()),r.sunShadow[T]=Te,r.sunShadowMap[T]=ce;const Be=ue.getViewportCount();for(let Ke=0;Ke<Be;Ke++)r.sunShadowMatrix[w+Ke]=ue.getMatrix(Ke),r.sunShadowCascade[w+Ke]=ue._cascadeData[Ke];w+=Be,T++}r.sun[b]=te,b++}else if(q.isDirectionalLight){const te=t.get(q);if(te.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const ue=q.shadow,Te=i.get(q);Te.shadowIntensity=ue.intensity,Te.shadowBias=ue.bias,Te.shadowNormalBias=ue.normalBias,Te.shadowRadius=ue.radius,Te.shadowMapSize=ue.mapSize,r.directionalShadow[M]=Te,r.directionalShadowMap[M]=ce,r.directionalShadowMatrix[M]=q.shadow.matrix,I++}r.directional[M]=te,M++}else if(q.isSpotLight){const te=t.get(q);te.position.setFromMatrixPosition(q.matrixWorld),te.color.copy(ee).multiplyScalar(X),te.distance=H,te.coneCos=Math.cos(q.angle),te.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),te.decay=q.decay,r.spot[U]=te;const ue=q.shadow;if(q.map&&(r.spotLightMap[L]=q.map,L++,ue.updateMatrices(q),q.castShadow&&J++),r.spotLightMatrix[U]=ue.matrix,q.castShadow){const Te=i.get(q);Te.shadowIntensity=ue.intensity,Te.shadowBias=ue.bias,Te.shadowNormalBias=ue.normalBias,Te.shadowRadius=ue.radius,Te.shadowMapSize=ue.mapSize,r.spotShadow[U]=Te,r.spotShadowMap[U]=ce,E++}U++}else if(q.isRectAreaLight){const te=t.get(q);te.color.copy(ee).multiplyScalar(X),te.halfWidth.set(q.width*.5,0,0),te.halfHeight.set(0,q.height*.5,0),r.rectArea[F]=te,F++}else if(q.isPointLight){const te=t.get(q);if(te.color.copy(q.color).multiplyScalar(q.intensity),te.distance=q.distance,te.decay=q.decay,q.castShadow){const ue=q.shadow,Te=i.get(q);Te.shadowIntensity=ue.intensity,Te.shadowBias=ue.bias,Te.shadowNormalBias=ue.normalBias,Te.shadowRadius=ue.radius,Te.shadowMapSize=ue.mapSize,Te.shadowCameraNear=ue.camera.near,Te.shadowCameraFar=ue.camera.far,r.pointShadow[y]=Te,r.pointShadowMap[y]=ce,r.pointShadowMatrix[y]=q.shadow.matrix,P++}r.point[y]=te,y++}else if(q.isHemisphereLight){const te=t.get(q);te.skyColor.copy(q.color).multiplyScalar(X),te.groundColor.copy(q.groundColor).multiplyScalar(X),r.hemi[N]=te,N++}}F>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=_,r.ambient[2]=x;const k=r.hash;(k.sunLength!==b||k.directionalLength!==M||k.pointLength!==y||k.spotLength!==U||k.rectAreaLength!==F||k.hemiLength!==N||k.numSunShadows!==T||k.numDirectionalShadows!==I||k.numPointShadows!==P||k.numSpotShadows!==E||k.numSpotMaps!==L||k.numLightProbes!==V)&&(r.sun.length=b,r.directional.length=M,r.spot.length=U,r.rectArea.length=F,r.point.length=y,r.hemi.length=N,r.sunShadow.length=T,r.sunShadowMap.length=T,r.sunShadowMatrix.length=w,r.sunShadowCascade.length=w,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+L-J,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=V,k.sunLength=b,k.directionalLength=M,k.pointLength=y,k.spotLength=U,k.rectAreaLength=F,k.hemiLength=N,k.numSunShadows=T,k.numDirectionalShadows=I,k.numPointShadows=P,k.numSpotShadows=E,k.numSpotMaps=L,k.numLightProbes=V,r.version=fC++)}function g(m,S){let _=0,x=0,b=0,T=0,w=0,M=0;const y=S.matrixWorldInverse;for(let U=0,F=m.length;U<F;U++){const N=m[U];if(N.isSunLight){const I=r.sun[_];I.direction.setFromMatrixPosition(N.matrixWorld),I.direction.transformDirection(y),_++}else if(N.isDirectionalLight){const I=r.directional[x];I.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),x++}else if(N.isSpotLight){const I=r.spot[T];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),T++}else if(N.isRectAreaLight){const I=r.rectArea[w];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(y),h.identity(),d.copy(N.matrixWorld),d.premultiply(y),h.extractRotation(d),I.halfWidth.set(N.width*.5,0,0),I.halfHeight.set(0,N.height*.5,0),I.halfWidth.applyMatrix4(h),I.halfHeight.applyMatrix4(h),w++}else if(N.isPointLight){const I=r.point[b];I.position.setFromMatrixPosition(N.matrixWorld),I.position.applyMatrix4(y),b++}else if(N.isHemisphereLight){const I=r.hemi[M];I.direction.setFromMatrixPosition(N.matrixWorld),I.direction.transformDirection(y),M++}}}return{setup:p,setupView:g,state:r}}function Dx(o){const t=new pC(o),i=[],r=[],l=[];function d(_){S.camera=_,i.length=0,r.length=0,l.length=0}function h(_){_.isLightProbeGrid?l.push(_):i.push(_)}function p(_){r.push(_)}function g(){t.setup(i),l.sort((_,x)=>_.priority-x.priority||_.id-x.id)}function m(_){t.setupView(i,_)}const S={lightsArray:i,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:d,state:S,setupLights:g,setupLightsView:m,pushLight:h,pushShadow:p}}function mC(o){let t=new WeakMap;function i(l,d=0){const h=t.get(l);let p;return h===void 0?(p=new Dx(o),t.set(l,[p])):d>=h.length?(p=new Dx(o),h.push(p)):p=h[d],p}function r(){t=new WeakMap}return{get:i,dispose:r}}const gC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,_C=[new fe(1,0,0),new fe(-1,0,0),new fe(0,1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1)],xC=[new fe(0,-1,0),new fe(0,-1,0),new fe(0,0,1),new fe(0,0,-1),new fe(0,-1,0),new fe(0,-1,0)],Lx=new cn,bl=new fe,ep=new fe;function yC(o,t,i){let r=new Ol;const l=new wt,d=new wt,h=new ln,p=new O1,g=new P1,m={},S=i.maxTextureSize,_={[ir]:ri,[ri]:ir,[za]:za},x=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new wt},radius:{value:4}},vertexShader:gC,fragmentShader:vC}),b=x.clone();b.defines.HORIZONTAL_PASS=1;const T=new Cs;T.setAttribute("position",new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new fa(T,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lu;let y=this.type;this.render=function(P,E,L){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||P.length===0)return;this.type===xE&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Lu);const J=o.getRenderTarget(),V=o.getActiveCubeFace(),k=o.getActiveMipmapLevel(),ae=o.state;ae.setBlending(ho),ae.buffers.depth.getReversed()===!0?ae.buffers.color.setClear(0,0,0,0):ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const pe=y!==this.type;pe&&E.traverse(function(q){q.material&&(Array.isArray(q.material)?q.material.forEach(ee=>ee.needsUpdate=!0):q.material.needsUpdate=!0)});for(let q=0,ee=P.length;q<ee;q++){const X=P[q],H=X.shadow;if(H===void 0){ut("WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ce=H.getFrameExtents();l.multiply(ce),d.copy(H.mapSize),(l.x>S||l.y>S)&&(l.x>S&&(d.x=Math.floor(S/ce.x),l.x=d.x*ce.x,H.mapSize.x=d.x),l.y>S&&(d.y=Math.floor(S/ce.y),l.y=d.y*ce.y,H.mapSize.y=d.y));const te=o.state.buffers.depth.getReversed();if(H.camera._reversedDepth=te,H.map===null||pe===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===El){if(X.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new da(l.x,l.y,{format:ar,type:ma,minFilter:si,magFilter:si,generateMipmaps:!1}),H.map.texture.name=X.name+".shadowMap",H.map.depthTexture=new xo(l.x,l.y,la),H.map.depthTexture.name=X.name+".shadowMapDepth",H.map.depthTexture.format=Ts,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn}else X.isPointLight?(H.map=new fm(l.x),H.map.depthTexture=new Ny(l.x,pa)):(H.map=new da(l.x,l.y),H.map.depthTexture=new xo(l.x,l.y,pa)),H.map.depthTexture.name=X.name+".shadowMap",H.map.depthTexture.format=Ts,this.type===Lu?(H.map.depthTexture.compareFunction=te?_y:vy,H.map.depthTexture.minFilter=si,H.map.depthTexture.magFilter=si):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Bn,H.map.depthTexture.magFilter=Bn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==l.x||H.map.height!==l.y)&&H.map.setSize(l.x,l.y);const ue=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();X.isPointLight!==!0&&H.updateMatrices(X,L);const Te=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:L.layers;for(let Be=0;Be<ue;Be++){const Ke=H.getCamera(Be);if(X.isPointLight){const D=H.camera,K=H.matrix,xe=X.distance||D.far;xe!==D.far&&(D.far=xe,D.updateProjectionMatrix()),bl.setFromMatrixPosition(X.matrixWorld),D.position.copy(bl),ep.copy(D.position),ep.add(_C[Be]),D.up.copy(xC[Be]),D.lookAt(ep),D.updateMatrixWorld(),K.makeTranslation(-bl.x,-bl.y,-bl.z),Lx.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Lx,D.coordinateSystem,D.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)o.setRenderTarget(H.map,Be),o.clear();else{Be===0&&(o.setRenderTarget(H.map),o.clear());const D=H.getViewport(Be);h.set(d.x*D.x,d.y*D.y,d.x*D.z,d.y*D.w),ae.viewport(h)}r=H.getFrustum(Be),N(E,L,Ke,X,Te,this.type)}H.isPointLightShadow!==!0&&this.type===El&&U(H,L),H.needsUpdate=!1}y=this.type,M.needsUpdate=!1,o.setRenderTarget(J,V,k)};function U(P,E){const L=t.update(w);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,b.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,b.needsUpdate=!0),P.mapPass===null?P.mapPass=new da(l.x,l.y,{format:ar,type:ma}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),x.uniforms.shadow_pass.value=P.map.depthTexture,x.uniforms.resolution.value.set(P.map.width,P.map.height),x.uniforms.radius.value=P.radius,o.setRenderTarget(P.mapPass),o.clear(),o.renderBufferDirect(E,null,L,x,w,null),b.uniforms.shadow_pass.value=P.mapPass.texture,b.uniforms.resolution.value.set(P.map.width,P.map.height),b.uniforms.radius.value=P.radius,o.setRenderTarget(P.map),o.clear(),o.renderBufferDirect(E,null,L,b,w,null)}function F(P,E,L,J){let V=null;const k=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)V=k;else if(V=L.isPointLight===!0?g:p,o.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const ae=V.uuid,pe=E.uuid;let q=m[ae];q===void 0&&(q={},m[ae]=q);let ee=q[pe];ee===void 0&&(ee=V.clone(),q[pe]=ee,E.addEventListener("dispose",I)),V=ee}if(V.visible=E.visible,V.wireframe=E.wireframe,J===El?V.side=E.shadowSide!==null?E.shadowSide:E.side:V.side=E.shadowSide!==null?E.shadowSide:_[E.side],V.alphaMap=E.alphaMap,V.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,V.map=E.map,V.clipShadows=E.clipShadows,V.clippingPlanes=E.clippingPlanes,V.clipIntersection=E.clipIntersection,V.displacementMap=E.displacementMap,V.displacementScale=E.displacementScale,V.displacementBias=E.displacementBias,V.wireframeLinewidth=E.wireframeLinewidth,V.linewidth=E.linewidth,L.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const ae=o.properties.get(V);ae.light=L}return V}function N(P,E,L,J,V,k){if(P.visible===!1)return;if(P.layers.test(V)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&k===El)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const q=t.update(P),ee=P.material;if(Array.isArray(ee)){const X=q.groups;for(let H=0,ce=X.length;H<ce;H++){const te=X[H],ue=ee[te.materialIndex];if(ue&&ue.visible){const Te=F(P,ue,J,k);P.onBeforeShadow(o,P,E,L,q,Te,te),o.renderBufferDirect(L,null,q,Te,P,te),P.onAfterShadow(o,P,E,L,q,Te,te)}}}else if(ee.visible){const X=F(P,ee,J,k);P.onBeforeShadow(o,P,E,L,q,X,null),o.renderBufferDirect(L,null,q,X,P,null),P.onAfterShadow(o,P,E,L,q,X,null)}}const pe=P.children;for(let q=0,ee=pe.length;q<ee;q++)N(pe[q],E,L,J,V,k)}function I(P){P.target.removeEventListener("dispose",I);for(const L in m){const J=m[L],V=P.target.uuid;V in J&&(J[V].dispose(),delete J[V])}}}function SC(o,t){function i(){let B=!1;const ge=new ln;let me=null;const Pe=new ln(0,0,0,0);return{setMask:function(Ne){me!==Ne&&!B&&(o.colorMask(Ne,Ne,Ne,Ne),me=Ne)},setLocked:function(Ne){B=Ne},setClear:function(Ne,ze,Je,nt,Ae){Ae===!0&&(Ne*=nt,ze*=nt,Je*=nt),ge.set(Ne,ze,Je,nt),Pe.equals(ge)===!1&&(o.clearColor(Ne,ze,Je,nt),Pe.copy(ge))},reset:function(){B=!1,me=null,Pe.set(-1,0,0,0)}}}function r(){let B=!1,ge=!1,me=null,Pe=null,Ne=null;return{setReversed:function(ze){if(ge!==ze){const Je=t.get("EXT_clip_control");ze?Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.ZERO_TO_ONE_EXT):Je.clipControlEXT(Je.LOWER_LEFT_EXT,Je.NEGATIVE_ONE_TO_ONE_EXT),ge=ze;const nt=Ne;Ne=null,this.setClear(nt)}},getReversed:function(){return ge},setTest:function(ze){ze?Me(o.DEPTH_TEST):oe(o.DEPTH_TEST)},setMask:function(ze){me!==ze&&!B&&(o.depthMask(ze),me=ze)},setFunc:function(ze){if(ge&&(ze=$E[ze]),Pe!==ze){switch(ze){case ap:o.depthFunc(o.NEVER);break;case sp:o.depthFunc(o.ALWAYS);break;case rp:o.depthFunc(o.LESS);break;case wl:o.depthFunc(o.LEQUAL);break;case op:o.depthFunc(o.EQUAL);break;case lp:o.depthFunc(o.GEQUAL);break;case cp:o.depthFunc(o.GREATER);break;case up:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Pe=ze}},setLocked:function(ze){B=ze},setClear:function(ze){Ne!==ze&&(Ne=ze,ge&&(ze=1-ze),o.clearDepth(ze))},reset:function(){B=!1,me=null,Pe=null,Ne=null,ge=!1}}}function l(){let B=!1,ge=null,me=null,Pe=null,Ne=null,ze=null,Je=null,nt=null,Ae=null;return{setTest:function(Xe){B||(Xe?Me(o.STENCIL_TEST):oe(o.STENCIL_TEST))},setMask:function(Xe){ge!==Xe&&!B&&(o.stencilMask(Xe),ge=Xe)},setFunc:function(Xe,ht,Ve){(me!==Xe||Pe!==ht||Ne!==Ve)&&(o.stencilFunc(Xe,ht,Ve),me=Xe,Pe=ht,Ne=Ve)},setOp:function(Xe,ht,Ve){(ze!==Xe||Je!==ht||nt!==Ve)&&(o.stencilOp(Xe,ht,Ve),ze=Xe,Je=ht,nt=Ve)},setLocked:function(Xe){B=Xe},setClear:function(Xe){Ae!==Xe&&(o.clearStencil(Xe),Ae=Xe)},reset:function(){B=!1,ge=null,me=null,Pe=null,Ne=null,ze=null,Je=null,nt=null,Ae=null}}}const d=new i,h=new r,p=new l;let g={};const m=new WeakMap;let S={},_={},x={},b=new WeakMap,T=[],w=null,M=!1,y=null,U=null,F=null,N=null,I=null,P=null,E=null,L=new Rt(0,0,0),J=0,V=!1,k=null,ae=null,pe=null,q=null,ee=null;const X=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,ce=0;const te=o.getParameter(o.VERSION);te.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(te)[1]),H=ce>=1):te.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),H=ce>=2);let ue=null,Te={};const Be=o.getParameter(o.SCISSOR_BOX),Ke=o.getParameter(o.VIEWPORT),D=new ln().fromArray(Be),K=new ln().fromArray(Ke);function xe(B,ge,me,Pe){const Ne=new Uint8Array(4),ze=o.createTexture();o.bindTexture(B,ze),o.texParameteri(B,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(B,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Je=0;Je<me;Je++)B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY?o.texImage3D(ge,0,o.RGBA,1,1,Pe,0,o.RGBA,o.UNSIGNED_BYTE,Ne):o.texImage2D(ge+Je,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ne);return ze}const _e={};_e[o.TEXTURE_2D]=xe(o.TEXTURE_2D,o.TEXTURE_2D,1),_e[o.TEXTURE_CUBE_MAP]=xe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[o.TEXTURE_2D_ARRAY]=xe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),_e[o.TEXTURE_3D]=xe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),d.setClear(0,0,0,1),h.setClear(1),p.setClear(0),Me(o.DEPTH_TEST),h.setFunc(wl),Ut(!1),it(z_),Me(o.CULL_FACE),en(ho);function Me(B){S[B]!==!0&&(o.enable(B),S[B]=!0)}function oe(B){S[B]!==!1&&(o.disable(B),S[B]=!1)}function we(B,ge){return x[B]!==ge?(o.bindFramebuffer(B,ge),x[B]=ge,B===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=ge),B===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=ge),!0):!1}function Ee(B,ge){let me=T,Pe=!1;if(B){me=b.get(ge),me===void 0&&(me=[],b.set(ge,me));const Ne=B.textures;if(me.length!==Ne.length||me[0]!==o.COLOR_ATTACHMENT0){for(let ze=0,Je=Ne.length;ze<Je;ze++)me[ze]=o.COLOR_ATTACHMENT0+ze;me.length=Ne.length,Pe=!0}}else me[0]!==o.BACK&&(me[0]=o.BACK,Pe=!0);Pe&&o.drawBuffers(me)}function Ce(B){return w!==B?(o.useProgram(B),w=B,!0):!1}const ft={[fo]:o.FUNC_ADD,[SE]:o.FUNC_SUBTRACT,[ME]:o.FUNC_REVERSE_SUBTRACT};ft[bE]=o.MIN,ft[EE]=o.MAX;const _t={[TE]:o.ZERO,[AE]:o.ONE,[RE]:o.SRC_COLOR,[ey]:o.SRC_ALPHA,[UE]:o.SRC_ALPHA_SATURATE,[DE]:o.DST_COLOR,[NE]:o.DST_ALPHA,[CE]:o.ONE_MINUS_SRC_COLOR,[ty]:o.ONE_MINUS_SRC_ALPHA,[LE]:o.ONE_MINUS_DST_COLOR,[wE]:o.ONE_MINUS_DST_ALPHA,[OE]:o.CONSTANT_COLOR,[PE]:o.ONE_MINUS_CONSTANT_COLOR,[zE]:o.CONSTANT_ALPHA,[IE]:o.ONE_MINUS_CONSTANT_ALPHA};function en(B,ge,me,Pe,Ne,ze,Je,nt,Ae,Xe){if(B===ho){M===!0&&(oe(o.BLEND),M=!1);return}if(M===!1&&(Me(o.BLEND),M=!0),B!==yE){if(B!==y||Xe!==V){if((U!==fo||I!==fo)&&(o.blendEquation(o.FUNC_ADD),U=fo,I=fo),Xe)switch(B){case Rl:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I_:o.blendFunc(o.ONE,o.ONE);break;case F_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case B_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:It("WebGLState: Invalid blending: ",B);break}else switch(B){case Rl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case I_:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case F_:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case B_:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",B);break}F=null,N=null,P=null,E=null,L.set(0,0,0),J=0,y=B,V=Xe}return}Ne=Ne||ge,ze=ze||me,Je=Je||Pe,(ge!==U||Ne!==I)&&(o.blendEquationSeparate(ft[ge],ft[Ne]),U=ge,I=Ne),(me!==F||Pe!==N||ze!==P||Je!==E)&&(o.blendFuncSeparate(_t[me],_t[Pe],_t[ze],_t[Je]),F=me,N=Pe,P=ze,E=Je),(nt.equals(L)===!1||Ae!==J)&&(o.blendColor(nt.r,nt.g,nt.b,Ae),L.copy(nt),J=Ae),y=B,V=!1}function Ft(B,ge){B.side===za?oe(o.CULL_FACE):Me(o.CULL_FACE);let me=B.side===ri;ge&&(me=!me),Ut(me),B.blending===Rl&&B.transparent===!1?en(ho):en(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),h.setFunc(B.depthFunc),h.setTest(B.depthTest),h.setMask(B.depthWrite),d.setMask(B.colorWrite);const Pe=B.stencilWrite;p.setTest(Pe),Pe&&(p.setMask(B.stencilWriteMask),p.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),p.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),tn(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Me(o.SAMPLE_ALPHA_TO_COVERAGE):oe(o.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(B){k!==B&&(B?o.frontFace(o.CW):o.frontFace(o.CCW),k=B)}function it(B){B!==vE?(Me(o.CULL_FACE),B!==ae&&(B===z_?o.cullFace(o.BACK):B===_E?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):oe(o.CULL_FACE),ae=B}function hn(B){B!==pe&&(H&&o.lineWidth(B),pe=B)}function tn(B,ge,me){B?(Me(o.POLYGON_OFFSET_FILL),(q!==ge||ee!==me)&&(q=ge,ee=me,h.getReversed()&&(ge=-ge,me=-me),o.polygonOffset(ge,me))):oe(o.POLYGON_OFFSET_FILL)}function pn(B){B?Me(o.SCISSOR_TEST):oe(o.SCISSOR_TEST)}function wn(B){B===void 0&&(B=o.TEXTURE0+X-1),ue!==B&&(o.activeTexture(B),ue=B)}function Dn(B,ge,me){me===void 0&&(ue===null?me=o.TEXTURE0+X-1:me=ue);let Pe=Te[me];Pe===void 0&&(Pe={type:void 0,texture:void 0},Te[me]=Pe),(Pe.type!==B||Pe.texture!==ge)&&(ue!==me&&(o.activeTexture(me),ue=me),o.bindTexture(B,ge||_e[B]),Pe.type=B,Pe.texture=ge)}function W(){const B=Te[ue];B!==void 0&&B.type!==void 0&&(o.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Hn(){try{o.compressedTexImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function Ht(){try{o.compressedTexImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function Xt(){try{o.texSubImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function He(){try{o.texSubImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function Wt(){try{o.compressedTexSubImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function tt(){try{o.compressedTexSubImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function rt(){try{o.texStorage2D(...arguments)}catch(B){It("WebGLState:",B)}}function O(){try{o.texStorage3D(...arguments)}catch(B){It("WebGLState:",B)}}function A(){try{o.texImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function ne(){try{o.texImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function Re(B){return _[B]!==void 0?_[B]:o.getParameter(B)}function be(B,ge){_[B]!==ge&&(o.pixelStorei(B,ge),_[B]=ge)}function Ue(B){D.equals(B)===!1&&(o.scissor(B.x,B.y,B.z,B.w),D.copy(B))}function Ie(B){K.equals(B)===!1&&(o.viewport(B.x,B.y,B.z,B.w),K.copy(B))}function he(B,ge){let me=m.get(ge);me===void 0&&(me=new WeakMap,m.set(ge,me));let Pe=me.get(B);Pe===void 0&&(Pe=o.getUniformBlockIndex(ge,B.name),o.uniformBlockBinding(ge,Pe,Pe),me.set(B,Pe))}function ve(B,ge,me){const Ne=m.get(ge).get(B);g[Ne]!==me&&(o.bindBufferBase(o.UNIFORM_BUFFER,Ne,me),g[Ne]=me)}function Oe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),o.pixelStorei(o.PACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_ALIGNMENT,4),o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,!1),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,o.BROWSER_DEFAULT_WEBGL),o.pixelStorei(o.PACK_ROW_LENGTH,0),o.pixelStorei(o.PACK_SKIP_PIXELS,0),o.pixelStorei(o.PACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_ROW_LENGTH,0),o.pixelStorei(o.UNPACK_IMAGE_HEIGHT,0),o.pixelStorei(o.UNPACK_SKIP_PIXELS,0),o.pixelStorei(o.UNPACK_SKIP_ROWS,0),o.pixelStorei(o.UNPACK_SKIP_IMAGES,0),S={},_={},ue=null,Te={},x={},g={},b=new WeakMap,T=[],w=null,M=!1,y=null,U=null,F=null,N=null,I=null,P=null,E=null,L=new Rt(0,0,0),J=0,V=!1,k=null,ae=null,pe=null,q=null,ee=null,D.set(0,0,o.canvas.width,o.canvas.height),K.set(0,0,o.canvas.width,o.canvas.height),d.reset(),h.reset(),p.reset()}return{buffers:{color:d,depth:h,stencil:p},enable:Me,disable:oe,bindFramebuffer:we,drawBuffers:Ee,useProgram:Ce,setBlending:en,setMaterial:Ft,setFlipSided:Ut,setCullFace:it,setLineWidth:hn,setPolygonOffset:tn,setScissorTest:pn,activeTexture:wn,bindTexture:Dn,unbindTexture:W,compressedTexImage2D:Hn,compressedTexImage3D:Ht,texImage2D:A,texImage3D:ne,pixelStorei:be,getParameter:Re,updateUBOMapping:he,uniformBlockBinding:ve,texStorage2D:rt,texStorage3D:O,texSubImage2D:Xt,texSubImage3D:He,compressedTexSubImage2D:Wt,compressedTexSubImage3D:tt,scissor:Ue,viewport:Ie,reset:Oe}}function MC(o,t,i,r,l,d,h){const p=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new wt,S=new WeakMap,_=new Set;let x;const b=new WeakMap,T=new Set,w=new FinalizationRegistry(O=>T.delete(O));let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(O,A){return M?new OffscreenCanvas(O,A):qu("canvas")}function U(O,A,ne){let Re=1;const be=rt(O);if((be.width>ne||be.height>ne)&&(Re=ne/Math.max(be.width,be.height)),Re<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const Ue=Math.floor(Re*be.width),Ie=Math.floor(Re*be.height);x===void 0&&(x=y(Ue,Ie));const he=A?y(Ue,Ie):x;return he.width=Ue,he.height=Ie,he.getContext("2d").drawImage(O,0,0,Ue,Ie),ut("WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+Ue+"x"+Ie+")."),he}else return"data"in O&&ut("WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),O;return O}function F(O){return O.generateMipmaps}function N(O){o.generateMipmap(O)}function I(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function P(O,A,ne,Re,be,Ue=!1){if(O!==null){if(o[O]!==void 0)return o[O];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let Ie;Re&&(Ie=t.get("EXT_texture_norm16"),Ie||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=A;if(A===o.RED&&(ne===o.FLOAT&&(he=o.R32F),ne===o.HALF_FLOAT&&(he=o.R16F),ne===o.UNSIGNED_BYTE&&(he=o.R8),ne===o.UNSIGNED_SHORT&&Ie&&(he=Ie.R16_EXT),ne===o.SHORT&&Ie&&(he=Ie.R16_SNORM_EXT)),A===o.RED_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.R8UI),ne===o.UNSIGNED_SHORT&&(he=o.R16UI),ne===o.UNSIGNED_INT&&(he=o.R32UI),ne===o.BYTE&&(he=o.R8I),ne===o.SHORT&&(he=o.R16I),ne===o.INT&&(he=o.R32I)),A===o.RG&&(ne===o.FLOAT&&(he=o.RG32F),ne===o.HALF_FLOAT&&(he=o.RG16F),ne===o.UNSIGNED_BYTE&&(he=o.RG8),ne===o.UNSIGNED_SHORT&&Ie&&(he=Ie.RG16_EXT),ne===o.SHORT&&Ie&&(he=Ie.RG16_SNORM_EXT)),A===o.RG_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.RG8UI),ne===o.UNSIGNED_SHORT&&(he=o.RG16UI),ne===o.UNSIGNED_INT&&(he=o.RG32UI),ne===o.BYTE&&(he=o.RG8I),ne===o.SHORT&&(he=o.RG16I),ne===o.INT&&(he=o.RG32I)),A===o.RGB_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.RGB8UI),ne===o.UNSIGNED_SHORT&&(he=o.RGB16UI),ne===o.UNSIGNED_INT&&(he=o.RGB32UI),ne===o.BYTE&&(he=o.RGB8I),ne===o.SHORT&&(he=o.RGB16I),ne===o.INT&&(he=o.RGB32I)),A===o.RGBA_INTEGER&&(ne===o.UNSIGNED_BYTE&&(he=o.RGBA8UI),ne===o.UNSIGNED_SHORT&&(he=o.RGBA16UI),ne===o.UNSIGNED_INT&&(he=o.RGBA32UI),ne===o.BYTE&&(he=o.RGBA8I),ne===o.SHORT&&(he=o.RGBA16I),ne===o.INT&&(he=o.RGBA32I)),A===o.RGB&&(ne===o.UNSIGNED_SHORT&&Ie&&(he=Ie.RGB16_EXT),ne===o.SHORT&&Ie&&(he=Ie.RGB16_SNORM_EXT),ne===o.UNSIGNED_INT_5_9_9_9_REV&&(he=o.RGB9_E5),ne===o.UNSIGNED_INT_10F_11F_11F_REV&&(he=o.R11F_G11F_B10F)),A===o.RGBA){const ve=Ue?Vu:Nt.getTransfer(be);ne===o.FLOAT&&(he=o.RGBA32F),ne===o.HALF_FLOAT&&(he=o.RGBA16F),ne===o.UNSIGNED_BYTE&&(he=ve===kt?o.SRGB8_ALPHA8:o.RGBA8),ne===o.UNSIGNED_SHORT&&Ie&&(he=Ie.RGBA16_EXT),ne===o.SHORT&&Ie&&(he=Ie.RGBA16_SNORM_EXT),ne===o.UNSIGNED_SHORT_4_4_4_4&&(he=o.RGBA4),ne===o.UNSIGNED_SHORT_5_5_5_1&&(he=o.RGB5_A1)}return(he===o.R16F||he===o.R32F||he===o.RG16F||he===o.RG32F||he===o.RGBA16F||he===o.RGBA32F)&&t.get("EXT_color_buffer_float"),he}function E(O,A){let ne;return O?A===null||A===pa||A===_o?ne=o.DEPTH24_STENCIL8:A===la?ne=o.DEPTH32F_STENCIL8:A===Ll&&(ne=o.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===pa||A===_o?ne=o.DEPTH_COMPONENT24:A===la?ne=o.DEPTH_COMPONENT32F:A===Ll&&(ne=o.DEPTH_COMPONENT16),ne}function L(O,A){return F(O)===!0||O.isFramebufferTexture&&O.minFilter!==Bn&&O.minFilter!==si?Math.log2(Math.max(A.width,A.height))+1:O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?A.mipmaps.length:1}function J(O){const A=new WeakRef(O);r.get(O).__ref=A,T.add(A),w.register(O,A,A)}function V(O){const A=r.get(O).__ref;A!==void 0&&(T.delete(A),w.unregister(A))}function k(O){pe(O.target)}function ae(O){q(O.target)}function pe(O){O.removeEventListener("dispose",k),V(O),X(O),O.isVideoTexture&&S.delete(O),O.isHTMLTexture&&_.delete(O)}function q(O){O.removeEventListener("dispose",ae),V(O),ce(O)}function ee(){for(const O of T){const A=O.deref();A!==void 0&&(A.isRenderTarget===!0?q(A):pe(A))}T.clear(),_.clear()}function X(O){const A=r.get(O);if(A.__webglInit===void 0)return;const ne=O.source,Re=b.get(ne);if(Re){const be=Re[A.__cacheKey];be.usedTimes--,be.usedTimes===0&&H(O),Object.keys(Re).length===0&&b.delete(ne)}r.remove(O)}function H(O){const A=r.get(O);o.deleteTexture(A.__webglTexture);const ne=O.source,Re=b.get(ne);delete Re[A.__cacheKey],h.memory.textures--}function ce(O){const A=r.get(O);A.__depthDisposeCallback&&A.__depthDisposeCallback();const ne=O.depthTexture;if(ne&&ne.renderTarget===O&&pe(ne),O.isWebGLCubeRenderTarget)for(let be=0;be<6;be++){if(Array.isArray(A.__webglFramebuffer[be]))for(let Ue=0;Ue<A.__webglFramebuffer[be].length;Ue++)o.deleteFramebuffer(A.__webglFramebuffer[be][Ue]);else o.deleteFramebuffer(A.__webglFramebuffer[be]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[be])}else{if(Array.isArray(A.__webglFramebuffer))for(let be=0;be<A.__webglFramebuffer.length;be++)o.deleteFramebuffer(A.__webglFramebuffer[be]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let be=0;be<A.__webglColorRenderbuffer.length;be++)A.__webglColorRenderbuffer[be]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[be]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Re=O.textures;for(let be=0,Ue=Re.length;be<Ue;be++){const Ie=r.get(Re[be]);Ie.__webglTexture&&(o.deleteTexture(Ie.__webglTexture),h.memory.textures--),r.remove(Re[be])}r.remove(O)}let te=0;function ue(){te=0}function Te(){return te}function Be(O){te=O}function Ke(){const O=te;return O>=l.maxTextures&&ut("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+l.maxTextures),te+=1,O}function D(O){const A=[];return A.push(O.wrapS),A.push(O.wrapT),A.push(O.wrapR||0),A.push(O.magFilter),A.push(O.minFilter),A.push(O.anisotropy),A.push(O.internalFormat),A.push(O.format),A.push(O.type),A.push(O.generateMipmaps),A.push(O.mipmapsAutoUpdate),A.push(O.premultiplyAlpha),A.push(O.flipY),A.push(O.unpackAlignment),A.push(O.colorSpace),A.join()}function K(O,A){const ne=r.get(O);if(O.isVideoTexture&&Wt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&ne.__version!==O.version){const Re=O.image;if(Re===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(Re.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(ne,O,A);return}}else O.isExternalTexture&&(ne.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,ne.__webglTexture,o.TEXTURE0+A)}function xe(O,A){const ne=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){Ft(ne,O,A);return}else O.isExternalTexture&&(ne.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,ne.__webglTexture,o.TEXTURE0+A)}function _e(O,A){const ne=r.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&ne.__version!==O.version){Ft(ne,O,A);return}i.bindTexture(o.TEXTURE_3D,ne.__webglTexture,o.TEXTURE0+A)}function Me(O,A){const ne=r.get(O);if(O.version>0&&ne.__version!==O.version){Ut(ne,O,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ne.__webglTexture,o.TEXTURE0+A)}const oe={[dp]:o.REPEAT,[Fa]:o.CLAMP_TO_EDGE,[fp]:o.MIRRORED_REPEAT},we={[Bn]:o.NEAREST,[HE]:o.NEAREST_MIPMAP_NEAREST,[lu]:o.NEAREST_MIPMAP_LINEAR,[si]:o.LINEAR,[Ch]:o.LINEAR_MIPMAP_NEAREST,[bs]:o.LINEAR_MIPMAP_LINEAR},Ee={[qE]:o.NEVER,[xy]:o.ALWAYS,[kE]:o.LESS,[vy]:o.LEQUAL,[XE]:o.EQUAL,[_y]:o.GEQUAL,[WE]:o.GREATER,[YE]:o.NOTEQUAL};function Ce(O,A){if(A.type===la&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===si||A.magFilter===Ch||A.magFilter===lu||A.magFilter===bs||A.minFilter===si||A.minFilter===Ch||A.minFilter===lu||A.minFilter===bs)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,oe[A.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,oe[A.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,oe[A.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,we[A.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,we[A.minFilter]),A.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,Ee[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Bn||A.minFilter!==lu&&A.minFilter!==bs||A.type===la&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const ne=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function ft(O,A){let ne=!1;O.__webglInit===void 0&&(O.__webglInit=!0,A.addEventListener("dispose",k),J(A));const Re=A.source;let be=b.get(Re);be===void 0&&(be={},b.set(Re,be));const Ue=D(A);if(Ue!==O.__cacheKey){be[Ue]===void 0&&(be[Ue]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,ne=!0),be[Ue].usedTimes++;const Ie=be[O.__cacheKey];Ie!==void 0&&(be[O.__cacheKey].usedTimes--,Ie.usedTimes===0&&H(A)),O.__cacheKey=Ue,O.__webglTexture=be[Ue].texture}return ne}function _t(O,A,ne){return Math.floor(Math.floor(O/ne)/A)}function en(O,A,ne,Re){const Ue=O.updateRanges;if(Ue.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,ne,Re,A.data);else{Ue.sort((B,ge)=>B.start-ge.start);let Ie=0;for(let B=1;B<Ue.length;B++){const ge=Ue[Ie],me=Ue[B],Pe=ge.start+ge.count,Ne=_t(me.start,A.width,4),ze=_t(ge.start,A.width,4);me.start<=Pe+1&&Ne===ze&&_t(me.start+me.count-1,A.width,4)===Ne?ge.count=Math.max(ge.count,me.start+me.count-ge.start):(++Ie,Ue[Ie]=me)}Ue.length=Ie+1;const he=i.getParameter(o.UNPACK_ROW_LENGTH),ve=i.getParameter(o.UNPACK_SKIP_PIXELS),Oe=i.getParameter(o.UNPACK_SKIP_ROWS);i.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let B=0,ge=Ue.length;B<ge;B++){const me=Ue[B],Pe=Math.floor(me.start/4),Ne=Math.ceil(me.count/4),ze=Pe%A.width,Je=Math.floor(Pe/A.width),nt=Ne,Ae=1;i.pixelStorei(o.UNPACK_SKIP_PIXELS,ze),i.pixelStorei(o.UNPACK_SKIP_ROWS,Je),i.texSubImage2D(o.TEXTURE_2D,0,ze,Je,nt,Ae,ne,Re,A.data)}O.clearUpdateRanges(),i.pixelStorei(o.UNPACK_ROW_LENGTH,he),i.pixelStorei(o.UNPACK_SKIP_PIXELS,ve),i.pixelStorei(o.UNPACK_SKIP_ROWS,Oe)}}function Ft(O,A,ne){let Re=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(Re=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(Re=o.TEXTURE_3D);const be=ft(O,A),Ue=A.source;i.bindTexture(Re,O.__webglTexture,o.TEXTURE0+ne);const Ie=r.get(Ue);if(Ue.version!==Ie.__version||be===!0){if(i.activeTexture(o.TEXTURE0+ne),(typeof ImageBitmap<"u"&&A.image instanceof ImageBitmap)===!1){const Ae=Nt.getPrimaries(Nt.workingColorSpace),Xe=A.colorSpace===Ms?null:Nt.getPrimaries(A.colorSpace),ht=A.colorSpace===Ms||Ae===Xe?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht)}i.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment);let ve=U(A.image,!1,l.maxTextureSize);ve=tt(A,ve);const Oe=d.convert(A.format,A.colorSpace),B=d.convert(A.type);let ge=P(A.internalFormat,Oe,B,A.normalized,A.colorSpace,A.isVideoTexture);Ce(Re,A);let me;const Pe=A.mipmaps,Ne=A.isVideoTexture!==!0,ze=Ie.__version===void 0||be===!0,Je=Ue.dataReady,nt=L(A,ve);if(A.isDepthTexture)ge=E(A.format===Es,A.type),ze&&(Ne?i.texStorage2D(o.TEXTURE_2D,1,ge,ve.width,ve.height):i.texImage2D(o.TEXTURE_2D,0,ge,ve.width,ve.height,0,Oe,B,null));else if(A.isDataTexture)if(Pe.length>0){Ne&&ze&&i.texStorage2D(o.TEXTURE_2D,nt,ge,Pe[0].width,Pe[0].height);for(let Ae=0,Xe=Pe.length;Ae<Xe;Ae++)me=Pe[Ae],Ne?Je&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,me.width,me.height,Oe,B,me.data):i.texImage2D(o.TEXTURE_2D,Ae,ge,me.width,me.height,0,Oe,B,me.data);A.generateMipmaps=!1}else Ne?(ze&&i.texStorage2D(o.TEXTURE_2D,nt,ge,ve.width,ve.height),Je&&en(A,ve,Oe,B)):i.texImage2D(o.TEXTURE_2D,0,ge,ve.width,ve.height,0,Oe,B,ve.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ne&&ze&&i.texStorage3D(o.TEXTURE_2D_ARRAY,nt,ge,Pe[0].width,Pe[0].height,ve.depth);for(let Ae=0,Xe=Pe.length;Ae<Xe;Ae++)if(me=Pe[Ae],A.format!==ca)if(Oe!==null)if(Ne){if(Je)if(A.layerUpdates.size>0){const ht=dx(me.width,me.height,A.format,A.type);for(const Ve of A.layerUpdates){const Ot=me.data.subarray(Ve*ht/me.data.BYTES_PER_ELEMENT,(Ve+1)*ht/me.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,Ve,me.width,me.height,1,Oe,Ot)}}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,0,me.width,me.height,ve.depth,Oe,me.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ae,ge,me.width,me.height,ve.depth,0,me.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?Je&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ae,0,0,0,me.width,me.height,ve.depth,Oe,B,me.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ae,ge,me.width,me.height,ve.depth,0,Oe,B,me.data);A.layerUpdates.size>0&&A.clearLayerUpdates()}else{Ne&&ze&&i.texStorage2D(o.TEXTURE_2D,nt,ge,Pe[0].width,Pe[0].height);for(let Ae=0,Xe=Pe.length;Ae<Xe;Ae++)me=Pe[Ae],A.format!==ca?Oe!==null?Ne?Je&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ae,0,0,me.width,me.height,Oe,me.data):i.compressedTexImage2D(o.TEXTURE_2D,Ae,ge,me.width,me.height,0,me.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?Je&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,me.width,me.height,Oe,B,me.data):i.texImage2D(o.TEXTURE_2D,Ae,ge,me.width,me.height,0,Oe,B,me.data)}else if(A.isDataArrayTexture)if(Ne){if(ze&&i.texStorage3D(o.TEXTURE_2D_ARRAY,nt,ge,ve.width,ve.height,ve.depth),Je)if(A.layerUpdates.size>0){const Ae=dx(ve.width,ve.height,A.format,A.type);for(const Xe of A.layerUpdates){const ht=ve.data.subarray(Xe*Ae/ve.data.BYTES_PER_ELEMENT,(Xe+1)*Ae/ve.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Xe,ve.width,ve.height,1,Oe,B,ht)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Oe,B,ve.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ge,ve.width,ve.height,ve.depth,0,Oe,B,ve.data);else if(A.isData3DTexture)Ne?(ze&&i.texStorage3D(o.TEXTURE_3D,nt,ge,ve.width,ve.height,ve.depth),Je&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Oe,B,ve.data)):i.texImage3D(o.TEXTURE_3D,0,ge,ve.width,ve.height,ve.depth,0,Oe,B,ve.data);else if(A.isFramebufferTexture){if(ze)if(Ne)i.texStorage2D(o.TEXTURE_2D,nt,ge,ve.width,ve.height);else{let Ae=ve.width,Xe=ve.height;for(let ht=0;ht<nt;ht++)i.texImage2D(o.TEXTURE_2D,ht,ge,Ae,Xe,0,Oe,B,null),Ae>>=1,Xe>>=1}}else if(A.isHTMLTexture){if("texElementImage2D"in o){const Ae=o.canvas;if(Ae.hasAttribute("layoutsubtree")||Ae.setAttribute("layoutsubtree","true"),ve.parentNode!==Ae){Ae.appendChild(ve),_.add(A),Ae.onpaint=Xe=>{const ht=Xe.changedElements;for(const Ve of _)ht.includes(Ve.image)&&(Ve.needsUpdate=!0)},Ae.requestPaint();return}if(o.texElementImage2D.length===3)o.texElementImage2D(o.TEXTURE_2D,o.RGBA8,ve);else{const ht=o.RGBA,Ve=o.RGBA,Ot=o.UNSIGNED_BYTE;o.texElementImage2D(o.TEXTURE_2D,0,ht,Ve,Ot,ve)}o.texParameteri(o.TEXTURE_2D,o.TEXTURE_MIN_FILTER,o.LINEAR),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_S,o.CLAMP_TO_EDGE),o.texParameteri(o.TEXTURE_2D,o.TEXTURE_WRAP_T,o.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Ne&&ze){const Ae=rt(Pe[0]);i.texStorage2D(o.TEXTURE_2D,nt,ge,Ae.width,Ae.height)}for(let Ae=0,Xe=Pe.length;Ae<Xe;Ae++)me=Pe[Ae],Ne?Je&&i.texSubImage2D(o.TEXTURE_2D,Ae,0,0,Oe,B,me):i.texImage2D(o.TEXTURE_2D,Ae,ge,Oe,B,me);A.generateMipmaps=!1}else if(Ne){if(ze){const Ae=rt(ve);i.texStorage2D(o.TEXTURE_2D,nt,ge,Ae.width,Ae.height)}Je&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Oe,B,ve)}else i.texImage2D(o.TEXTURE_2D,0,ge,Oe,B,ve);F(A)&&A.mipmapsAutoUpdate===!0&&N(Re),Ie.__version=Ue.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function Ut(O,A,ne){if(A.image.length!==6)return;const Re=ft(O,A),be=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+ne);const Ue=r.get(be);if(be.version!==Ue.__version||Re===!0){i.activeTexture(o.TEXTURE0+ne);const Ie=Nt.getPrimaries(Nt.workingColorSpace),he=A.colorSpace===Ms?null:Nt.getPrimaries(A.colorSpace),ve=A.colorSpace===Ms||Ie===he?o.NONE:o.BROWSER_DEFAULT_WEBGL;i.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Oe=A.isCompressedTexture||A.image[0].isCompressedTexture,B=A.image[0]&&A.image[0].isDataTexture,ge=[];for(let Ve=0;Ve<6;Ve++)!Oe&&!B?ge[Ve]=U(A.image[Ve],!0,l.maxCubemapSize):ge[Ve]=B?A.image[Ve].image:A.image[Ve],ge[Ve]=tt(A,ge[Ve]);const me=ge[0],Pe=d.convert(A.format,A.colorSpace),Ne=d.convert(A.type);let ze=P(A.internalFormat,Pe,Ne,A.normalized,A.colorSpace);const Je=A.isVideoTexture!==!0,nt=Ue.__version===void 0||Re===!0,Ae=be.dataReady;let Xe=L(A,me);Ce(o.TEXTURE_CUBE_MAP,A);let ht;if(A.isDepthTexture){if(ze=E(A.format===Es,A.type),nt)if(Je)i.texStorage2D(o.TEXTURE_CUBE_MAP,1,ze,me.width,me.height);else for(let Ve=0;Ve<6;Ve++)i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,ze,me.width,me.height,0,Pe,Ne,null)}else if(Oe){Je&&nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Xe,ze,me.width,me.height);for(let Ve=0;Ve<6;Ve++){ht=ge[Ve].mipmaps;for(let Ot=0;Ot<ht.length;Ot++){const an=ht[Ot];A.format!==ca?Pe!==null?Je?Ae&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Ot,0,0,an.width,an.height,Pe,an.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Ot,ze,an.width,an.height,0,an.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Ot,0,0,an.width,an.height,Pe,Ne,an.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Ot,ze,an.width,an.height,0,Pe,Ne,an.data)}}}else{if(ht=A.mipmaps,Je&&nt){ht.length>0&&Xe++;const Ve=rt(ge[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Xe,ze,Ve.width,Ve.height)}for(let Ve=0;Ve<6;Ve++)if(B){Je?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,0,0,ge[Ve].width,ge[Ve].height,Pe,Ne,ge[Ve].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,ze,ge[Ve].width,ge[Ve].height,0,Pe,Ne,ge[Ve].data);for(let Ot=0;Ot<ht.length;Ot++){const oi=ht[Ot].image[Ve].image;Je?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Ot+1,0,0,oi.width,oi.height,Pe,Ne,oi.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Ot+1,ze,oi.width,oi.height,0,Pe,Ne,oi.data)}}else{Je?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,0,0,Pe,Ne,ge[Ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,0,ze,Pe,Ne,ge[Ve]);for(let Ot=0;Ot<ht.length;Ot++){const an=ht[Ot];Je?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Ot+1,0,0,Pe,Ne,an.image[Ve]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Ve,Ot+1,ze,Pe,Ne,an.image[Ve])}}}F(A)&&A.mipmapsAutoUpdate===!0&&N(o.TEXTURE_CUBE_MAP),Ue.__version=be.version,A.onUpdate&&A.onUpdate(A)}O.__version=A.version}function it(O,A,ne,Re,be,Ue){const Ie=d.convert(ne.format,ne.colorSpace),he=d.convert(ne.type),ve=P(ne.internalFormat,Ie,he,ne.normalized,ne.colorSpace),Oe=r.get(A),B=r.get(ne);if(B.__renderTarget=A,!Oe.__hasExternalTextures){const ge=Math.max(1,A.width>>Ue),me=Math.max(1,A.height>>Ue);be===o.TEXTURE_3D||be===o.TEXTURE_2D_ARRAY?i.texImage3D(be,Ue,ve,ge,me,A.depth,0,Ie,he,null):i.texImage2D(be,Ue,ve,ge,me,0,Ie,he,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),He(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Re,be,B.__webglTexture,0,Xt(A)):(be===o.TEXTURE_2D||be>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,Re,be,B.__webglTexture,Ue),i.bindFramebuffer(o.FRAMEBUFFER,null)}function hn(O,A,ne){if(o.bindRenderbuffer(o.RENDERBUFFER,O),A.depthBuffer){const Re=A.depthTexture,be=Re&&Re.isDepthTexture?Re.type:null,Ue=E(A.stencilBuffer,be),Ie=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;He(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xt(A),Ue,A.width,A.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xt(A),Ue,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Ue,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ie,o.RENDERBUFFER,O)}else{const Re=A.textures;for(let be=0;be<Re.length;be++){const Ue=Re[be],Ie=d.convert(Ue.format,Ue.colorSpace),he=d.convert(Ue.type),ve=P(Ue.internalFormat,Ie,he,Ue.normalized,Ue.colorSpace);He(A)?p.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Xt(A),ve,A.width,A.height):ne?o.renderbufferStorageMultisample(o.RENDERBUFFER,Xt(A),ve,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,ve,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function tn(O,A,ne){const Re=A.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const be=r.get(A.depthTexture);be.__renderTarget=A;const Ue=Re?A.depthTexture.image[0]:A.depthTexture.image;(!be.__webglTexture||Ue.width!==A.width||Ue.height!==A.height)&&(Ue.width=A.width,Ue.height=A.height,A.depthTexture.needsUpdate=!0),Re?Me(A.depthTexture,0):K(A.depthTexture,0);const Ie=be.__webglTexture,he=Xt(A),ve=Re?o.TEXTURE_CUBE_MAP_POSITIVE_X+ne:o.TEXTURE_2D,Oe=A.depthTexture.format===Es?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;if(A.depthTexture.format===Ts)He(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Oe,ve,Ie,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,Oe,ve,Ie,0);else if(A.depthTexture.format===Es)He(A)?p.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,Oe,ve,Ie,0,he):o.framebufferTexture2D(o.FRAMEBUFFER,Oe,ve,Ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pn(O){const A=r.get(O),ne=O.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==O.depthTexture){const Re=O.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),Re){const be=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,Re.removeEventListener("dispose",be)};Re.addEventListener("dispose",be),A.__depthDisposeCallback=be}A.__boundDepthTexture=Re}if(O.depthTexture&&!A.__autoAllocateDepthBuffer)if(ne)for(let Re=0;Re<6;Re++)tn(A.__webglFramebuffer[Re],O,Re);else O.texture.mipmaps.length>0?tn(A.__webglFramebuffer[0],O,0):tn(A.__webglFramebuffer,O,0);else if(ne){A.__webglDepthbuffer=[];for(let Re=0;Re<6;Re++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[Re]),A.__webglDepthbuffer[Re]===void 0)A.__webglDepthbuffer[Re]=o.createRenderbuffer(),hn(A.__webglDepthbuffer[Re],O,!1);else{const be=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=A.__webglDepthbuffer[Re];o.bindRenderbuffer(o.RENDERBUFFER,Ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,Ue)}}else if(O.texture.mipmaps.length>0?i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),hn(A.__webglDepthbuffer,O,!1);else{const be=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,Ue),o.framebufferRenderbuffer(o.FRAMEBUFFER,be,o.RENDERBUFFER,Ue)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function wn(O,A,ne){const Re=r.get(O);A!==void 0&&it(Re.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ne!==void 0&&pn(O)}function Dn(O){const A=O.texture,ne=r.get(O),Re=r.get(A);O.addEventListener("dispose",ae),J(O);const be=O.textures,Ue=O.isWebGLCubeRenderTarget===!0,Ie=be.length>1;if(Ie||(Re.__webglTexture===void 0&&(Re.__webglTexture=o.createTexture()),Re.__version=A.version,h.memory.textures++),Ue){ne.__webglFramebuffer=[];for(let he=0;he<6;he++)if(A.mipmaps.length>0){ne.__webglFramebuffer[he]=[];for(let ve=0;ve<A.mipmaps.length;ve++)ne.__webglFramebuffer[he][ve]=o.createFramebuffer()}else ne.__webglFramebuffer[he]=o.createFramebuffer()}else{if(A.mipmaps.length>0){ne.__webglFramebuffer=[];for(let he=0;he<A.mipmaps.length;he++)ne.__webglFramebuffer[he]=o.createFramebuffer()}else ne.__webglFramebuffer=o.createFramebuffer();if(Ie)for(let he=0,ve=be.length;he<ve;he++){const Oe=r.get(be[he]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&He(O)===!1){ne.__webglMultisampledFramebuffer=o.createFramebuffer(),ne.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ne.__webglMultisampledFramebuffer);for(let he=0;he<be.length;he++){const ve=be[he];ne.__webglColorRenderbuffer[he]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ne.__webglColorRenderbuffer[he]);const Oe=d.convert(ve.format,ve.colorSpace),B=d.convert(ve.type),ge=P(ve.internalFormat,Oe,B,ve.normalized,ve.colorSpace,O.isXRRenderTarget===!0),me=Xt(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,me,ge,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+he,o.RENDERBUFFER,ne.__webglColorRenderbuffer[he])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(ne.__webglDepthRenderbuffer=o.createRenderbuffer(),hn(ne.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(Ue){i.bindTexture(o.TEXTURE_CUBE_MAP,Re.__webglTexture),Ce(o.TEXTURE_CUBE_MAP,A);for(let he=0;he<6;he++)if(A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)it(ne.__webglFramebuffer[he][ve],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+he,ve);else it(ne.__webglFramebuffer[he],O,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);F(A)?N(o.TEXTURE_CUBE_MAP):A.mipmaps.length>0&&o.texParameteri(o.TEXTURE_CUBE_MAP,o.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),i.unbindTexture()}else if(Ie){for(let he=0,ve=be.length;he<ve;he++){const Oe=be[he],B=r.get(Oe);let ge=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ge=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ge,B.__webglTexture),Ce(ge,Oe),it(ne.__webglFramebuffer,O,Oe,o.COLOR_ATTACHMENT0+he,ge,0),F(Oe)&&N(ge)}i.unbindTexture()}else{let he=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(he=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(he,Re.__webglTexture),Ce(he,A),A.mipmaps.length>0)for(let ve=0;ve<A.mipmaps.length;ve++)it(ne.__webglFramebuffer[ve],O,A,o.COLOR_ATTACHMENT0,he,ve);else it(ne.__webglFramebuffer,O,A,o.COLOR_ATTACHMENT0,he,0);F(A)?N(he):A.mipmaps.length>0&&o.texParameteri(he,o.TEXTURE_MAX_LEVEL,A.mipmaps.length-1),i.unbindTexture()}O.depthBuffer&&pn(O)}function W(O){const A=O.textures;for(let ne=0,Re=A.length;ne<Re;ne++){const be=A[ne];if(F(be)&&be.mipmapsAutoUpdate===!0){const Ue=I(O),Ie=r.get(be).__webglTexture;i.bindTexture(Ue,Ie),N(Ue),i.unbindTexture()}}}const Hn=[];function Ht(O){if(O.samples>0){if(He(O)===!1){const A=O.textures,ne=O.width,Re=O.height;let be=o.COLOR_BUFFER_BIT;const Ue=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ie=r.get(O),he=A.length>1;if(he)for(let Oe=0;Oe<A.length;Oe++)i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),O.texture.mipmaps.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Oe=0;Oe<A.length;Oe++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(be|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(be|=o.STENCIL_BUFFER_BIT)),he){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Oe]);const B=r.get(A[Oe]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,B,0)}o.blitFramebuffer(0,0,ne,Re,0,0,ne,Re,be,o.NEAREST),g===!0&&(Hn.length=0,Hn.push(o.COLOR_ATTACHMENT0+Oe),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&Hn.push(Ue),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,Hn))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),he)for(let Oe=0;Oe<A.length;Oe++){i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.RENDERBUFFER,Ie.__webglColorRenderbuffer[Oe]);const B=r.get(A[Oe]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ie.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Oe,o.TEXTURE_2D,B,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&g){const A=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function Xt(O){return Math.min(l.maxSamples,O.samples)}function He(O){const A=r.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Wt(O){const A=h.render.frame;S.get(O)!==A&&(S.set(O,A),O.update())}function tt(O,A){const ne=O.colorSpace,Re=O.format,be=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||ne!==ju&&ne!==Ms&&(Nt.getTransfer(ne)===kt?(Re!==ca||be!==xi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",ne)),A}function rt(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(m.width=O.naturalWidth||O.width,m.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(m.width=O.displayWidth,m.height=O.displayHeight):(m.width=O.width,m.height=O.height),m}this.allocateTextureUnit=Ke,this.resetTextureUnits=ue,this.getTextureUnits=Te,this.setTextureUnits=Be,this.setTexture2D=K,this.setTexture2DArray=xe,this.setTexture3D=_e,this.setTextureCube=Me,this.rebindTextures=wn,this.setupRenderTarget=Dn,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=pn,this.setupFrameBufferTexture=it,this.useMultisampledRTT=He,this.dispose=ee}function bC(o,t){function i(r,l=Ms){let d;const h=Nt.getTransfer(l);if(r===xi)return o.UNSIGNED_BYTE;if(r===im)return o.UNSIGNED_SHORT_4_4_4_4;if(r===am)return o.UNSIGNED_SHORT_5_5_5_1;if(r===fy)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===hy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===uy)return o.BYTE;if(r===dy)return o.SHORT;if(r===Ll)return o.UNSIGNED_SHORT;if(r===nm)return o.INT;if(r===pa)return o.UNSIGNED_INT;if(r===la)return o.FLOAT;if(r===ma)return o.HALF_FLOAT;if(r===py)return o.ALPHA;if(r===my)return o.RGB;if(r===ca)return o.RGBA;if(r===Ts)return o.DEPTH_COMPONENT;if(r===Es)return o.DEPTH_STENCIL;if(r===gy)return o.RED;if(r===sm)return o.RED_INTEGER;if(r===ar)return o.RG;if(r===rm)return o.RG_INTEGER;if(r===om)return o.RGBA_INTEGER;if(r===Ou||r===Pu||r===zu||r===Iu)if(h===kt)if(d=t.get("WEBGL_compressed_texture_s3tc_srgb"),d!==null){if(r===Ou)return d.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Pu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===zu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Iu)return d.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(d=t.get("WEBGL_compressed_texture_s3tc"),d!==null){if(r===Ou)return d.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Pu)return d.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===zu)return d.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Iu)return d.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===hp||r===pp||r===mp||r===gp)if(d=t.get("WEBGL_compressed_texture_pvrtc"),d!==null){if(r===hp)return d.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===pp)return d.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===mp)return d.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===gp)return d.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===vp||r===_p||r===xp||r===yp||r===Sp||r===Hu||r===Mp)if(d=t.get("WEBGL_compressed_texture_etc"),d!==null){if(r===vp||r===_p)return h===kt?d.COMPRESSED_SRGB8_ETC2:d.COMPRESSED_RGB8_ETC2;if(r===xp)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:d.COMPRESSED_RGBA8_ETC2_EAC;if(r===yp)return d.COMPRESSED_R11_EAC;if(r===Sp)return d.COMPRESSED_SIGNED_R11_EAC;if(r===Hu)return d.COMPRESSED_RG11_EAC;if(r===Mp)return d.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===bp||r===Ep||r===Tp||r===Ap||r===Rp||r===Cp||r===Np||r===wp||r===Dp||r===Lp||r===Up||r===Op||r===Pp||r===zp)if(d=t.get("WEBGL_compressed_texture_astc"),d!==null){if(r===bp)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:d.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ep)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:d.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Tp)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:d.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ap)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:d.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Rp)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:d.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Cp)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:d.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Np)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:d.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wp)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:d.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Dp)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:d.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Lp)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:d.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Up)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:d.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Op)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:d.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Pp)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:d.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zp)return h===kt?d.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:d.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ip||r===Fp||r===Bp)if(d=t.get("EXT_texture_compression_bptc"),d!==null){if(r===Ip)return h===kt?d.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:d.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Fp)return d.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Bp)return d.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hp||r===Gp||r===Gu||r===jp)if(d=t.get("EXT_texture_compression_rgtc"),d!==null){if(r===Hp)return d.COMPRESSED_RED_RGTC1_EXT;if(r===Gp)return d.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gu)return d.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===jp)return d.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===_o?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const EC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class AC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new wy(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new sr({vertexShader:EC,fragmentShader:TC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fa(new Hl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RC extends or{constructor(t,i){super();const r=this;let l=null,d=1,h=null,p="local-floor",g=1,m=null,S=null,_=null,x=null,b=null,T=null;const w=typeof XRWebGLBinding<"u",M=new AC,y={},U=i.getContextAttributes();let F=null,N=null;const I=[],P=[],E=new wt;let L=null,J=null;const V=new qi;V.viewport=new ln;const k=new qi;k.viewport=new ln;const ae=[V,k],pe=new B1;let q=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(D){let K=I[D];return K===void 0&&(K=new Ih,I[D]=K),K.getTargetRaySpace()},this.getControllerGrip=function(D){let K=I[D];return K===void 0&&(K=new Ih,I[D]=K),K.getGripSpace()},this.getHand=function(D){let K=I[D];return K===void 0&&(K=new Ih,I[D]=K),K.getHandSpace()};function X(D){const K=P.indexOf(D.inputSource);if(K===-1)return;const xe=I[K];xe!==void 0&&(xe.update(D.inputSource,D.frame,m||h),xe.dispatchEvent({type:D.type,data:D.inputSource}))}function H(){l.removeEventListener("select",X),l.removeEventListener("selectstart",X),l.removeEventListener("selectend",X),l.removeEventListener("squeeze",X),l.removeEventListener("squeezestart",X),l.removeEventListener("squeezeend",X),l.removeEventListener("end",H),l.removeEventListener("inputsourceschange",ce);for(let D=0;D<I.length;D++){const K=P[D];K!==null&&(P[D]=null,I[D].disconnect(K))}q=null,ee=null,M.reset();for(const D in y)delete y[D];if(t.setRenderTarget(F),b=null,x=null,_=null,l=null,N=null,Ke.stop(),r.isPresenting=!1,t.setPixelRatio(L),t.setSize(E.width,E.height,!1),J!==null){const D=J.camera;D.fov=J.fov,D.zoom=J.zoom,D.updateProjectionMatrix(),J=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(D){d=D,r.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(D){p=D,r.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(D){m=D},this.getBaseLayer=function(){return x!==null?x:b},this.getBinding=function(){return _===null&&w&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(D){if(l=D,l!==null){if(F=t.getRenderTarget(),l.addEventListener("select",X),l.addEventListener("selectstart",X),l.addEventListener("selectend",X),l.addEventListener("squeeze",X),l.addEventListener("squeezestart",X),l.addEventListener("squeezeend",X),l.addEventListener("end",H),l.addEventListener("inputsourceschange",ce),U.xrCompatible!==!0&&await i.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(E),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,_e=null,Me=null;U.depth&&(Me=U.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xe=U.stencil?Es:Ts,_e=U.stencil?_o:pa);const oe={colorFormat:i.RGBA8,depthFormat:Me,scaleFactor:d};_=this.getBinding(),x=_.createProjectionLayer(oe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),N=new da(x.textureWidth,x.textureHeight,{format:ca,type:xi,depthTexture:new xo(x.textureWidth,x.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:U.stencil,colorSpace:t.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}else{const xe={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:d};b=new XRWebGLLayer(l,i,xe),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),N=new da(b.framebufferWidth,b.framebufferHeight,{format:ca,type:xi,colorSpace:t.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1,storeMultisampledDepthBuffer:b.ignoreDepthValues===!1,storeMultisampledStencilBuffer:b.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(g),m=null,h=await l.requestReferenceSpace(p),Ke.setContext(l),Ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function ce(D){for(let K=0;K<D.removed.length;K++){const xe=D.removed[K],_e=P.indexOf(xe);_e>=0&&(P[_e]=null,I[_e].disconnect(xe))}for(let K=0;K<D.added.length;K++){const xe=D.added[K];let _e=P.indexOf(xe);if(_e===-1){for(let oe=0;oe<I.length;oe++)if(oe>=P.length){P.push(xe),_e=oe;break}else if(P[oe]===null){P[oe]=xe,_e=oe;break}if(_e===-1)break}const Me=I[_e];Me&&Me.connect(xe)}}function te(D,K){K===null?D.matrixWorld.copy(D.matrix):D.matrixWorld.multiplyMatrices(K.matrixWorld,D.matrix),D.matrixWorldInverse.copy(D.matrixWorld).invert()}this.updateCamera=function(D){if(l===null)return;let K=D.near,xe=D.far;M.texture!==null&&(M.depthNear>0&&(K=M.depthNear),M.depthFar>0&&(xe=M.depthFar)),pe.near=k.near=V.near=K,pe.far=k.far=V.far=xe,(q!==pe.near||ee!==pe.far)&&(l.updateRenderState({depthNear:pe.near,depthFar:pe.far}),q=pe.near,ee=pe.far),pe.layers.mask=D.layers.mask|6,V.layers.mask=pe.layers.mask&-5,k.layers.mask=pe.layers.mask&-3;const _e=D.parent,Me=pe.cameras;te(pe,_e);for(let oe=0;oe<Me.length;oe++)te(Me[oe],_e);pe.projectionMatrix.copy(V.projectionMatrix),pe.projectionMatrixInverse.copy(V.projectionMatrixInverse),J===null&&D.isPerspectiveCamera&&(J={camera:D,fov:D.fov,zoom:D.zoom}),ue(D,pe,_e)};function ue(D,K,xe){xe===null?D.matrix.copy(K.matrixWorld):(D.matrix.copy(xe.matrixWorld),D.matrix.invert(),D.matrix.multiply(K.matrixWorld)),D.matrix.decompose(D.position,D.quaternion,D.scale),D.updateMatrixWorld(!0),D.projectionMatrix.copy(K.projectionMatrix),D.projectionMatrixInverse.copy(K.projectionMatrixInverse),D.isPerspectiveCamera&&(D.fov=qp*2*Math.atan(1/D.projectionMatrix.elements[5]),D.zoom=1)}this.getCamera=function(){return pe},this.getFoveation=function(){if(!(x===null&&b===null))return g},this.setFoveation=function(D){g=D,x!==null&&(x.fixedFoveation=D),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=D)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(pe)},this.getCameraTexture=function(D){return y[D]};let Te=null;function Be(D,K){if(S=K.getViewerPose(m||h),T=K,S!==null){const xe=S.views;b!==null&&(t.setRenderTargetFramebuffer(N,b.framebuffer),t.setRenderTarget(N));let _e=!1;xe.length!==pe.cameras.length&&(pe.cameras.length=0,_e=!0);for(let Ee=0;Ee<xe.length;Ee++){const Ce=xe[Ee];let ft=null;if(b!==null)ft=b.getViewport(Ce);else{const en=_.getViewSubImage(x,Ce);ft=en.viewport,Ee===0&&(t.setRenderTargetTextures(N,en.colorTexture,en.depthStencilTexture),t.setRenderTarget(N))}let _t=ae[Ee];_t===void 0&&(_t=new qi,_t.layers.enable(Ee),_t.viewport=new ln,ae[Ee]=_t),_t.matrix.fromArray(Ce.transform.matrix),_t.matrix.decompose(_t.position,_t.quaternion,_t.scale),_t.projectionMatrix.fromArray(Ce.projectionMatrix),_t.projectionMatrixInverse.copy(_t.projectionMatrix).invert(),_t.viewport.set(ft.x,ft.y,ft.width,ft.height),Ee===0&&(pe.matrix.copy(_t.matrix),pe.matrix.decompose(pe.position,pe.quaternion,pe.scale)),_e===!0&&pe.cameras.push(_t)}const Me=l.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){_=r.getBinding();const Ee=_.getDepthInformation(xe[0]);Ee&&Ee.isValid&&Ee.texture&&M.init(Ee,l.renderState)}if(Me&&Me.includes("camera-access")&&w){t.state.unbindTexture(),_=r.getBinding();for(let Ee=0;Ee<xe.length;Ee++){const Ce=xe[Ee].camera;if(Ce){let ft=y[Ce];ft||(ft=new wy,y[Ce]=ft);const _t=_.getCameraImage(Ce);ft.sourceTexture=_t}}}}for(let xe=0;xe<I.length;xe++){const _e=P[xe],Me=I[xe];_e!==null&&Me!==void 0&&Me.update(_e,K,m||h)}Te&&Te(D,K),K.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:K}),T=null}const Ke=new Py;Ke.setAnimationLoop(Be),this.setAnimationLoop=function(D){Te=D},this.dispose=function(){}}}const CC=new cn,ky=new dt;ky.set(-1,0,0,0,1,0,0,0,1);function NC(o,t){function i(M,y){M.matrixAutoUpdate===!0&&M.updateMatrix(),y.value.copy(M.matrix)}function r(M,y){y.color.getRGB(M.fogColor.value,Dy(o)),y.isFog?(M.fogNear.value=y.near,M.fogFar.value=y.far):y.isFogExp2&&(M.fogDensity.value=y.density)}function l(M,y,U,F,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?d(M,y):y.isMeshLambertMaterial?(d(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(d(M,y),_(M,y)):y.isMeshPhongMaterial?(d(M,y),S(M,y),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(d(M,y),x(M,y),y.isMeshPhysicalMaterial&&b(M,y,N)):y.isMeshMatcapMaterial?(d(M,y),T(M,y)):y.isMeshDepthMaterial?d(M,y):y.isMeshDistanceMaterial?(d(M,y),w(M,y)):y.isMeshNormalMaterial?d(M,y):y.isLineBasicMaterial?(h(M,y),y.isLineDashedMaterial&&p(M,y)):y.isPointsMaterial?g(M,y,U,F):y.isSpriteMaterial?m(M,y):y.isShadowMaterial?(M.color.value.copy(y.color),M.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function d(M,y){M.opacity.value=y.opacity,y.color&&M.diffuse.value.copy(y.color),y.emissive&&M.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.bumpMap&&(M.bumpMap.value=y.bumpMap,i(y.bumpMap,M.bumpMapTransform),M.bumpScale.value=y.bumpScale,y.side===ri&&(M.bumpScale.value*=-1)),y.normalMap&&(M.normalMap.value=y.normalMap,i(y.normalMap,M.normalMapTransform),M.normalScale.value.copy(y.normalScale),y.side===ri&&M.normalScale.value.negate()),y.displacementMap&&(M.displacementMap.value=y.displacementMap,i(y.displacementMap,M.displacementMapTransform),M.displacementScale.value=y.displacementScale,M.displacementBias.value=y.displacementBias),y.emissiveMap&&(M.emissiveMap.value=y.emissiveMap,i(y.emissiveMap,M.emissiveMapTransform)),y.specularMap&&(M.specularMap.value=y.specularMap,i(y.specularMap,M.specularMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest);const U=t.get(y),F=U.envMap,N=U.envMapRotation;F&&(M.envMap.value=F,M.envMapRotation.value.setFromMatrix4(CC.makeRotationFromEuler(N)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&M.envMapRotation.value.premultiply(ky),M.reflectivity.value=y.reflectivity,M.ior.value=y.ior,M.refractionRatio.value=y.refractionRatio),y.lightMap&&(M.lightMap.value=y.lightMap,M.lightMapIntensity.value=y.lightMapIntensity,i(y.lightMap,M.lightMapTransform)),y.aoMap&&(M.aoMap.value=y.aoMap,M.aoMapIntensity.value=y.aoMapIntensity,i(y.aoMap,M.aoMapTransform))}function h(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform))}function p(M,y){M.dashSize.value=y.dashSize,M.totalSize.value=y.dashSize+y.gapSize,M.scale.value=y.scale}function g(M,y,U,F){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.size.value=y.size*U,M.scale.value=F*.5,y.map&&(M.map.value=y.map,i(y.map,M.uvTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function m(M,y){M.diffuse.value.copy(y.color),M.opacity.value=y.opacity,M.rotation.value=y.rotation,y.map&&(M.map.value=y.map,i(y.map,M.mapTransform)),y.alphaMap&&(M.alphaMap.value=y.alphaMap,i(y.alphaMap,M.alphaMapTransform)),y.alphaTest>0&&(M.alphaTest.value=y.alphaTest)}function S(M,y){M.specular.value.copy(y.specular),M.shininess.value=Math.max(y.shininess,1e-4)}function _(M,y){y.gradientMap&&(M.gradientMap.value=y.gradientMap)}function x(M,y){M.metalness.value=y.metalness,y.metalnessMap&&(M.metalnessMap.value=y.metalnessMap,i(y.metalnessMap,M.metalnessMapTransform)),M.roughness.value=y.roughness,y.roughnessMap&&(M.roughnessMap.value=y.roughnessMap,i(y.roughnessMap,M.roughnessMapTransform)),y.envMap&&(M.envMapIntensity.value=y.envMapIntensity)}function b(M,y,U){M.ior.value=y.ior,y.diffuseRoughness>0&&(M.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(M.diffuseRoughnessMap.value=y.diffuseRoughnessMap,i(y.diffuseRoughnessMap,M.diffuseRoughnessMapTransform))),y.sheen>0&&(M.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),M.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(M.sheenColorMap.value=y.sheenColorMap,i(y.sheenColorMap,M.sheenColorMapTransform)),y.sheenRoughnessMap&&(M.sheenRoughnessMap.value=y.sheenRoughnessMap,i(y.sheenRoughnessMap,M.sheenRoughnessMapTransform))),y.clearcoat>0&&(M.clearcoat.value=y.clearcoat,M.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(M.clearcoatMap.value=y.clearcoatMap,i(y.clearcoatMap,M.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,i(y.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(M.clearcoatNormalMap.value=y.clearcoatNormalMap,i(y.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ri&&M.clearcoatNormalScale.value.negate())),y.dispersion>0&&(M.dispersion.value=y.dispersion),y.retroreflectivity>0&&(M.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(M.iridescence.value=y.iridescence,M.iridescenceIOR.value=y.iridescenceIOR,M.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,M.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(M.iridescenceMap.value=y.iridescenceMap,i(y.iridescenceMap,M.iridescenceMapTransform)),y.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=y.iridescenceThicknessMap,i(y.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),y.transmission>0&&(M.transmission.value=y.transmission,M.transmissionSamplerMap.value=U.texture,M.transmissionSamplerSize.value.set(U.width,U.height),y.transmissionMap&&(M.transmissionMap.value=y.transmissionMap,i(y.transmissionMap,M.transmissionMapTransform)),M.thickness.value=y.thickness,y.thicknessMap&&(M.thicknessMap.value=y.thicknessMap,i(y.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=y.attenuationDistance,M.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(M.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(M.anisotropyMap.value=y.anisotropyMap,i(y.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=y.specularIntensity,M.specularColor.value.copy(y.specularColor),y.specularColorMap&&(M.specularColorMap.value=y.specularColorMap,i(y.specularColorMap,M.specularColorMapTransform)),y.specularIntensityMap&&(M.specularIntensityMap.value=y.specularIntensityMap,i(y.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,y){y.matcap&&(M.matcap.value=y.matcap)}function w(M,y){const U=t.get(y).light;M.referencePosition.value.setFromMatrixPosition(U.matrixWorld),M.nearDistance.value=U.shadow.camera.near,M.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function wC(o,t,i,r){let l={},d={};function h(U,F){const N=F.program;r.uniformBlockBinding(U,N,l[U.id])}function p(U,F){let N=l[U.id];N===void 0&&(T(U),N=g(U),l[U.id]=N,U.addEventListener("dispose",M));const I=F.program;r.updateUBOMapping(U,I);const P=t.render.frame;d[U.id]!==P&&(m(U),d[U.id]=P)}function g(U){const F=o.createBuffer(),N=U.__size,I=U.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,N,I),o.bindBuffer(o.UNIFORM_BUFFER,null),F}function m(U){const F=l[U.id],N=U.uniforms,I=U.__cache;o.bindBuffer(o.UNIFORM_BUFFER,F);for(let P=0,E=N.length;P<E;P++){const L=N[P];if(Array.isArray(L))for(let J=0,V=L.length;J<V;J++)S(L[J],P,J,I);else S(L,P,0,I)}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(U,F,N,I){if(x(U,F,N,I)===!0){const P=U.__offset,E=U.value;if(Array.isArray(E)){let L=0;for(let J=0;J<E.length;J++){const V=E[J],k=w(V,!0);_(V,U.__data,L),L+=k.storage/Float32Array.BYTES_PER_ELEMENT}}else _(E,U.__data,0);o.bufferSubData(o.UNIFORM_BUFFER,P,U.__data)}}function _(U,F,N){typeof U=="number"||typeof U=="boolean"?F[N]=U:U.isMatrix3?(F[N]=U.elements[0],F[N+1]=U.elements[1],F[N+2]=U.elements[2],F[N+3]=0,F[N+4]=U.elements[3],F[N+5]=U.elements[4],F[N+6]=U.elements[5],F[N+7]=0,F[N+8]=U.elements[6],F[N+9]=U.elements[7],F[N+10]=U.elements[8],F[N+11]=0):ArrayBuffer.isView(U)?F.set(U.subarray(0,F.length-N),N):U.toArray(F,N)}function x(U,F,N,I){const P=U.value,E=F+"_"+N;if(Array.isArray(P)){I[E]===void 0&&(I[E]=[]);const L=I[E];let J=!1;for(let V=0;V<P.length;V++)b(P[V],L,V)===!0&&(J=!0);return J}return b(P,I,E)}function b(U,F,N){if(F[N]===void 0)return typeof U=="number"||typeof U=="boolean"?F[N]=U:ArrayBuffer.isView(U)?F[N]=U.slice():F[N]=U.clone(),!0;{const I=F[N];if(typeof U=="number"||typeof U=="boolean"){if(I!==U)return F[N]=U,!0}else{if(ArrayBuffer.isView(U))return!0;if(I.equals(U)===!1)return I.copy(U),!0}}return!1}function T(U){const F=U.uniforms;let N=0;const I=16;for(let E=0,L=F.length;E<L;E++){const J=Array.isArray(F[E])?F[E]:[F[E]];for(let V=0,k=J.length;V<k;V++){const ae=J[V],pe=Array.isArray(ae.value)?ae.value:[ae.value],q=Array.isArray(F[E])||Array.isArray(ae.value);let ee=N;for(let H=0,ce=pe.length;H<ce;H++){const te=pe[H],ue=w(te,q),Te=N%I,Be=Te%ue.boundary,Ke=Te+Be;N+=Be,Ke!==0&&I-Ke<ue.storage&&(N+=I-Ke),H===0&&(ee=N),N+=ue.storage}const X=ae.type==="int"?Int32Array:ae.type==="uint"?Uint32Array:Float32Array;ae.__data=new X((N-ee)/Float32Array.BYTES_PER_ELEMENT),ae.__offset=ee}}const P=N%I;return P>0&&(N+=I-P),U.__size=N,U.__cache={},this}function w(U,F){const N={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(N.boundary=4,N.storage=4):U.isVector2?(N.boundary=8,N.storage=8):U.isVector3||U.isColor?(N.boundary=16,N.storage=12):U.isVector4?(N.boundary=16,N.storage=16):U.isMatrix3?(N.boundary=16,N.storage=48):U.isMatrix4?(N.boundary=16,N.storage=64):U.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(U)?(N.boundary=16,N.storage=U.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",U),F===!0&&(N.boundary=16,N.storage=Math.ceil(N.storage/16)*16),N}function M(U){const F=U.target;F.removeEventListener("dispose",M),o.deleteBuffer(l[F.id]),delete l[F.id],delete d[F.id]}function y(){for(const U in l)o.deleteBuffer(l[U]);l={},d={}}return{bind:h,update:p,dispose:y}}const DC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let sa=null;function LC(){return sa===null&&(sa=new A1(DC,16,16,ar,ma),sa.name="DFG_LUT",sa.minFilter=si,sa.magFilter=si,sa.wrapS=Fa,sa.wrapT=Fa,sa.generateMipmaps=!1,sa.needsUpdate=!0),sa}class UC{constructor(t={}){const{canvas:i=KE(),context:r=null,depth:l=!0,stencil:d=!1,alpha:h=!1,antialias:p=!1,premultipliedAlpha:g=!0,preserveDrawingBuffer:m=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:x=!1,outputBufferType:b=xi}=t;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=h;const w=b,M=new Set([om,rm,sm]),y=new Set([xi,pa,Ll,_o,im,am]),U=new Uint32Array(4),F=new Int32Array(4),N={textures:[],min:[],max:[],resolution:[]};let I=null,P=null;const E=[],L=[];let J=null;this.domElement=i,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ba,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let k=!1,ae=null,pe=null,q=null,ee=null;this._outputColorSpace=ii;let X=0,H=0,ce=null,te=-1,ue=null;const Te=new ln,Be=new ln;let Ke=null;const D=new Rt(0);let K=0,xe=i.width,_e=i.height,Me=1,oe=null,we=null;const Ee=new ln(0,0,xe,_e),Ce=new ln(0,0,xe,_e);let ft=!1;const _t=new Ol,en=new dm;let Ft=!1,Ut=!1;const it=new cn,hn=new fe,tn=new ln,pn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wn=!1;function Dn(){return ce===null?Me:1}let W=r;function Hn(C,G){return i.getContext(C,G)}let Ht,Xt,He,Wt,tt,rt,O,A,ne,Re,be,Ue,Ie,he,ve,Oe,B,ge,me,Pe,Ne,ze,Je;try{const C={alpha:!0,depth:l,stencil:d,antialias:p,premultipliedAlpha:g,preserveDrawingBuffer:m,powerPreference:S,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${em}`),i.addEventListener("webglcontextlost",Xe,!1),i.addEventListener("webglcontextrestored",ht,!1),i.addEventListener("webglcontextcreationerror",Ve,!1),W===null){const G="webgl2";if(W=Hn(G,C),W===null)throw Hn(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}nt()}catch(C){throw i.removeEventListener("webglcontextlost",Xe,!1),i.removeEventListener("webglcontextrestored",ht,!1),i.removeEventListener("webglcontextcreationerror",Ve,!1),It("WebGLRenderer: "+C.message),C}function nt(){Ht=new zR(W),Ht.init(),Ne=new bC(W,Ht),Xt=new TR(W,Ht,t,Ne),He=new SC(W,Ht),Xt.reversedDepthBuffer&&x&&He.buffers.depth.setReversed(!0),pe=W.createFramebuffer(),q=W.createFramebuffer(),ee=W.createFramebuffer(),Wt=new BR(W),tt=new oC,rt=new MC(W,Ht,He,tt,Xt,Ne,Wt),O=new PR(V),A=new G1(W),ze=new bR(W,A),ne=new IR(W,A,Wt,ze),Re=new GR(W,ne,A,ze,Wt),ge=new HR(W,Xt,rt),ve=new AR(tt),be=new rC(V,O,Ht,Xt,ze,ve),Ue=new NC(V,tt),Ie=new cC,he=new mC(Ht),B=new MR(V,O,He,Re,T,g),Oe=new yC(V,Re,Xt),Je=new wC(W,Wt,Xt,He),me=new ER(W,Ht,Wt),Pe=new FR(W,Ht,Wt),Wt.programs=be.programs,V.capabilities=Xt,V.extensions=Ht,V.properties=tt,V.renderLists=Ie,V.shadowMap=Oe,V.state=He,V.info=Wt}w!==xi&&(J=new VR(w,i.width,i.height,p,l,d));const Ae=new RC(V,W);this.xr=Ae,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=Ht.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ht.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(C){C!==void 0&&(Me=C,this.setSize(xe,_e,!1))},this.getSize=function(C){return C.set(xe,_e)},this.setSize=function(C,G,de=!0){if(Ae.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}xe=C,_e=G,i.width=Math.floor(C*Me),i.height=Math.floor(G*Me),de===!0&&(i.style.width=C+"px",i.style.height=G+"px"),J!==null&&J.setSize(i.width,i.height),this.setViewport(0,0,C,G)},this.getDrawingBufferSize=function(C){return C.set(xe*Me,_e*Me).floor()},this.setDrawingBufferSize=function(C,G,de){xe=C,_e=G,Me=de,i.width=Math.floor(C*de),i.height=Math.floor(G*de),this.setViewport(0,0,C,G)},this.setEffects=function(C){if(w===xi){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let G=0;G<C.length;G++)if(C[G].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(Te)},this.getViewport=function(C){return C.copy(Ee)},this.setViewport=function(C,G,de,ie){C.isVector4?Ee.set(C.x,C.y,C.z,C.w):Ee.set(C,G,de,ie),He.viewport(Te.copy(Ee).multiplyScalar(Dn()).round())},this.getScissor=function(C){return C.copy(Ce)},this.setScissor=function(C,G,de,ie){C.isVector4?Ce.set(C.x,C.y,C.z,C.w):Ce.set(C,G,de,ie),He.scissor(Be.copy(Ce).multiplyScalar(Dn()).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(C){He.setScissorTest(ft=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){we=C},this.getClearColor=function(C){return C.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(C=!0,G=!0,de=!0){let ie=0;if(C){let se=!1;if(ce!==null){const De=ce.texture.format;se=M.has(De)}if(se){const De=ce.texture.type,ke=y.has(De),Le=B.getClearColor(),Ge=B.getClearAlpha(),Ye=Le.r,at=Le.g,pt=Le.b;ke?(U[0]=Ye,U[1]=at,U[2]=pt,U[3]=Ge,W.clearBufferuiv(W.COLOR,0,U)):(F[0]=Ye,F[1]=at,F[2]=pt,F[3]=Ge,W.clearBufferiv(W.COLOR,0,F))}else ie|=W.COLOR_BUFFER_BIT}G&&(ie|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ie|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&W.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),ae=C},this.dispose=function(){i.removeEventListener("webglcontextlost",Xe,!1),i.removeEventListener("webglcontextrestored",ht,!1),i.removeEventListener("webglcontextcreationerror",Ve,!1),B.dispose(),Ie.dispose(),he.dispose(),rt.dispose(),tt.dispose(),O.dispose(),Re.dispose(),ne.dispose(),ze.dispose(),Je.dispose(),be.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Ga),Ae.removeEventListener("sessionend",Eo),ga.stop()};function Xe(C){C.preventDefault(),j_("WebGLRenderer: Context Lost."),k=!0}function ht(){j_("WebGLRenderer: Context Restored."),k=!1;const C=Wt.autoReset,G=Oe.enabled,de=Oe.autoUpdate,ie=Oe.needsUpdate,se=Oe.type;nt(),Wt.autoReset=C,Oe.enabled=G,Oe.autoUpdate=de,Oe.needsUpdate=ie,Oe.type=se}function Ve(C){It("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Ot(C){const G=C.target;G.removeEventListener("dispose",Ot),an(G)}function an(C){oi(C),tt.remove(C)}function oi(C){const G=tt.get(C).programs;G!==void 0&&(G.forEach(function(de){be.releaseProgram(de)}),C.isShaderMaterial&&be.releaseShaderCache(C))}this.renderBufferDirect=function(C,G,de,ie,se,De){G===null&&(G=pn);const ke=se.isMesh&&se.matrixWorld.determinantAffine()<0,Le=jl(C,G,de,ie,se);He.setMaterial(ie,ke);let Ge=de.index,Ye=1;if(ie.wireframe===!0){if(Ge=ne.getWireframeAttribute(de),Ge===void 0)return;Ye=2}const at=de.drawRange,pt=de.attributes.position;let Fe=at.start*Ye,yt=(at.start+at.count)*Ye;De!==null&&(Fe=Math.max(Fe,De.start*Ye),yt=Math.min(yt,(De.start+De.count)*Ye)),Ge!==null?(Fe=Math.max(Fe,0),yt=Math.min(yt,Ge.count)):pt!=null&&(Fe=Math.max(Fe,0),yt=Math.min(yt,pt.count));const sn=yt-Fe;if(sn<0||sn===1/0)return;ze.setup(se,ie,Le,de,Ge);let Gt,Ct=me;if(Ge!==null&&(Gt=A.get(Ge),Ct=Pe,Ct.setIndex(Gt)),se.isMesh)ie.wireframe===!0?(He.setLineWidth(ie.wireframeLinewidth*Dn()),Ct.setMode(W.LINES)):Ct.setMode(W.TRIANGLES);else if(se.isLine){let rn=ie.linewidth;rn===void 0&&(rn=1),He.setLineWidth(rn*Dn()),se.isLineSegments?Ct.setMode(W.LINES):se.isLineLoop?Ct.setMode(W.LINE_LOOP):Ct.setMode(W.LINE_STRIP)}else se.isPoints?Ct.setMode(W.POINTS):se.isSprite&&Ct.setMode(W.TRIANGLES);if(se.isBatchedMesh)if(Ht.get("WEBGL_multi_draw"))Ct.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const rn=se._multiDrawStarts,Ze=se._multiDrawCounts,Tn=se._multiDrawCount,Dt=Ge?A.get(Ge).bytesPerElement:1,va=tt.get(ie).currentProgram.getUniforms();for(let ot=0;ot<Tn;ot++)va.setValue(W,"_gl_DrawID",ot),Ct.render(rn[ot]/Dt,Ze[ot])}else if(se.isInstancedMesh)Ct.renderInstances(Fe,sn,se.count);else if(de.isInstancedBufferGeometry){const rn=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ze=Math.min(de.instanceCount,rn);Ct.renderInstances(Fe,sn,Ze)}else Ct.render(Fe,sn)};function Ns(C,G,de,ie){ae!==null&&C.isNodeMaterial&&ae.setObject(ie,C),Ft===!0&&ve.setState(C,de,!1),C.transparent===!0&&C.side===za&&C.forceSinglePass===!1?(C.side=ri,C.needsUpdate=!0,Va(C,G,ie),C.side=ir,C.needsUpdate=!0,Va(C,G,ie),C.side=za):Va(C,G,ie)}this.compile=function(C,G,de=null){de===null&&(de=C),ae!==null&&ae.renderStart(C,G,de),P=he.get(de),P.init(G),L.push(P),de.traverseVisible(function(se){se.isLight&&se.layers.test(G.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),C!==de&&C.traverseVisible(function(se){se.isLight&&se.layers.test(G.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),P.setupLights(),ae!==null&&ae.updateLights(P.state.lightsArray),Ut=this.localClippingEnabled,Ft=ve.init(this.clippingPlanes,Ut),Ft===!0&&ve.setGlobalState(this.clippingPlanes,G),ae!==null&&Oe.render(P.state.shadowsArray,de,G);const ie=new Set;return C.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const De=se.material;if(De)if(Array.isArray(De))for(let ke=0;ke<De.length;ke++){const Le=De[ke];Ns(Le,de,G,se),ie.add(Le)}else Ns(De,de,G,se),ie.add(De)}),P=L.pop(),ae!==null&&ae.renderEnd(),ie},this.compileAsync=function(C,G,de=null){const ie=this.compile(C,G,de);return new Promise(se=>{function De(){if(ie.forEach(function(ke){const Ge=tt.get(ke).currentProgram;(Ge===void 0||Ge.isReady())&&ie.delete(ke)}),ie.size===0){se(C);return}setTimeout(De,10)}Ht.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let Ui=null;function lr(C){Ui&&Ui(C)}function Ga(){ga.stop()}function Eo(){ga.start()}const ga=new Py;ga.setAnimationLoop(lr),typeof self<"u"&&ga.setContext(self),this.setAnimationLoop=function(C){Ui=C,Ae.setAnimationLoop(C),C===null?ga.stop():ga.start()},Ae.addEventListener("sessionstart",Ga),Ae.addEventListener("sessionend",Eo),this.render=function(C,G){if(G!==void 0&&G.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;ae!==null&&ae.renderStart(C,G);const de=Ae.enabled===!0&&Ae.isPresenting===!0,ie=J!==null&&(ce===null||de)&&J.begin(V,ce);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(G),G=Ae.getCamera()),C.isScene===!0&&C.onBeforeRender(V,C,G,ce),P=he.get(C,L.length),P.init(G),P.state.textureUnits=rt.getTextureUnits(),L.push(P),it.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),G.isArrayCamera?en.setFromArrayCamera(G):_t.setFromProjectionMatrix(it,Xi,G.reversedDepth),Ut=this.localClippingEnabled,Ft=ve.init(this.clippingPlanes,Ut),I=Ie.get(C,E.length),I.init(),E.push(I),this.info.render.frame++,Ae.enabled===!0&&Ae.isPresenting===!0){const ke=V.xr.getDepthSensingMesh();ke!==null&&cr(ke,G,-1/0,V.sortObjects)}cr(C,G,0,V.sortObjects),I.finish(),ae!==null&&ae.updateLights(P.state.lightsArray),V.sortObjects===!0&&I.sort(oe,we),wn=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,wn&&B.addToRenderList(I,C),this.info.autoReset===!0&&this.info.reset(),Ft===!0&&ve.beginShadows();const se=P.state.shadowsArray;if(Oe.render(se,C,G),Ft===!0&&ve.endShadows(),(ie&&J.hasRenderPass())===!1){const ke=I.opaque,Le=I.transmissive;if(P.setupLights(),G.isArrayCamera){const Ge=G.cameras;if(Le.length>0)for(let Ye=0,at=Ge.length;Ye<at;Ye++){const pt=Ge[Ye];ja(ke,Le,C,pt)}wn&&B.render(C);for(let Ye=0,at=Ge.length;Ye<at;Ye++){const pt=Ge[Ye];ur(I,C,pt,pt.viewport)}}else Le.length>0&&ja(ke,Le,C,G),wn&&B.render(C),ur(I,C,G)}ce!==null&&H===0&&(rt.updateMultisampleRenderTarget(ce),rt.updateRenderTargetMipmap(ce)),ie&&J.end(V),C.isScene===!0&&C.onAfterRender(V,C,G),ze.resetDefaultState(),te=-1,ue=null,L.pop(),L.length>0?(P=L[L.length-1],rt.setTextureUnits(P.state.textureUnits),Ft===!0&&ve.setGlobalState(V.clippingPlanes,P.state.camera)):P=null,E.pop(),E.length>0?I=E[E.length-1]:I=null,ae!==null&&ae.renderEnd()};function cr(C,G,de,ie){if(C.visible===!1)return;if(C.layers.test(G.layers)){if(C.isGroup)de=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(G);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){const ke=G.isArrayCamera?en:_t;if(!C.frustumCulled||C.intersectsFrustum(ke)){ie&&tn.setFromMatrixPosition(C.matrixWorld).applyMatrix4(it);const Le=Re.update(C),Ge=C.material;Ge.visible&&I.push(C,Le,Ge,de,tn.z,null,G)}}else if(C.isMesh||C.isLine||C.isPoints){const ke=G.isArrayCamera?en:_t;if(!C.frustumCulled||C.intersectsFrustum(ke)){const Le=Re.update(C),Ge=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),tn.copy(C.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),tn.copy(Le.boundingSphere.center)),tn.applyMatrix4(C.matrixWorld).applyMatrix4(it)),Array.isArray(Ge)){const Ye=Le.groups;for(let at=0,pt=Ye.length;at<pt;at++){const Fe=Ye[at],yt=Ge[Fe.materialIndex];yt&&yt.visible&&I.push(C,Le,yt,de,tn.z,Fe,G)}}else Ge.visible&&I.push(C,Le,Ge,de,tn.z,null,G)}}}const De=C.children;for(let ke=0,Le=De.length;ke<Le;ke++)cr(De[ke],G,de,ie)}function ur(C,G,de,ie){const{opaque:se,transmissive:De,transparent:ke}=C;P.setupLightsView(de),Ft===!0&&ve.setGlobalState(V.clippingPlanes,de),ie&&He.viewport(Te.copy(ie)),se.length>0&&dr(se,G,de),De.length>0&&dr(De,G,de),ke.length>0&&dr(ke,G,de),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function ja(C,G,de,ie){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ie.id]===void 0){const Fe=Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ie.id]=new da(1,1,{generateMipmaps:!0,type:Fe?ma:xi,minFilter:bs,samples:Math.max(4,Xt.samples),stencilBuffer:d,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Nt.workingColorSpace})}const De=P.state.transmissionRenderTarget[ie.id],ke=ie.viewport||Te;De.setSize(ke.z*V.transmissionResolutionScale,ke.w*V.transmissionResolutionScale);const Le=V.getRenderTarget(),Ge=V.getActiveCubeFace(),Ye=V.getActiveMipmapLevel();V.setRenderTarget(De),V.getClearColor(D),K=V.getClearAlpha(),K<1&&V.setClearColor(16777215,.5),V.clear(),wn&&B.render(de);const at=V.toneMapping;V.toneMapping=Ba;const pt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),P.setupLightsView(ie),Ft===!0&&ve.setGlobalState(V.clippingPlanes,ie),dr(C,de,ie),rt.updateMultisampleRenderTarget(De),rt.updateRenderTargetMipmap(De),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let yt=0,sn=G.length;yt<sn;yt++){const Gt=G[yt],{object:Ct,geometry:rn,material:Ze,group:Tn}=Gt;if(Ze.side===za&&Ct.layers.test(ie.layers)){const Dt=Ze.side;Ze.side=ri,Ze.needsUpdate=!0,To(Ct,de,ie,rn,Ze,Tn),Ze.side=Dt,Ze.needsUpdate=!0,Fe=!0}}Fe===!0&&(rt.updateMultisampleRenderTarget(De),rt.updateRenderTargetMipmap(De))}V.setRenderTarget(Le,Ge,Ye),V.setClearColor(D,K),pt!==void 0&&(ie.viewport=pt),V.toneMapping=at}function dr(C,G,de){const ie=G.isScene===!0?G.overrideMaterial:null;for(let se=0,De=C.length;se<De;se++){const ke=C[se],{object:Le,geometry:Ge,group:Ye}=ke;let at=ke.material;at.allowOverride===!0&&ie!==null&&(at=ie),Le.layers.test(de.layers)&&To(Le,G,de,Ge,at,Ye)}}function To(C,G,de,ie,se,De){ae!==null&&se.isNodeMaterial&&ae.setObject(C,se),C.onBeforeRender(V,G,de,ie,se,De),C.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),se.onBeforeRender(V,G,de,ie,C,De),se.transparent===!0&&se.side===za&&se.forceSinglePass===!1?(se.side=ri,se.needsUpdate=!0,V.renderBufferDirect(de,G,ie,se,C,De),se.side=ir,se.needsUpdate=!0,V.renderBufferDirect(de,G,ie,se,C,De),se.side=za):V.renderBufferDirect(de,G,ie,se,C,De),C.onAfterRender(V,G,de,ie,se,De)}function Ao(C){let G=0;for(const de of C)de.texture!==null&&G++;return G}function Va(C,G,de){G.isScene!==!0&&(G=pn);const ie=tt.get(C),se=P.state.lights,De=P.state.shadowsArray,ke=se.state.version,Le=be.getParameters(C,se.state,De,G,de,P.state.lightProbeGridArray),Ge=be.getProgramCacheKey(Le);let Ye=ie.programs;ie.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?G.environment:null,ie.fog=G.fog;const at=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ie.envMap=O.get(C.envMap||ie.environment,at),ie.envMapRotation=ie.environment!==null&&C.envMap===null?G.environmentRotation:C.envMapRotation,Ye===void 0&&(C.addEventListener("dispose",Ot),Ye=new Map,ie.programs=Ye,ie.programVariants=new Map);let pt=Ye.get(Ge);if(pt!==void 0){if(ie.currentProgram===pt&&ie.lightsStateVersion===ke)return Co(C,Le),pt}else Le.uniforms=be.getUniforms(C),ae!==null&&C.isNodeMaterial&&ae.build(C,de,Le),C.onBeforeCompile(Le,V),pt=be.acquireProgram(Le,Ge),Ye.set(Ge,pt),ie.uniforms=Le.uniforms;const Fe=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Fe.clippingPlanes=ve.uniform),Co(C,Le),ie.needsLights=Sn(C),ie.lightsStateVersion=ke,ie.needsLights&&(Fe.ambientLightColor.value=se.state.ambient,Fe.lightProbe.value=se.state.probe,Fe.sunLights.value=se.state.sun,Fe.sunLightShadows.value=se.state.sunShadow,Fe.directionalLights.value=se.state.directional,Fe.directionalLightShadows.value=se.state.directionalShadow,Fe.spotLights.value=se.state.spot,Fe.spotLightShadows.value=se.state.spotShadow,Fe.rectAreaLights.value=se.state.rectArea,Fe.ltc_1.value=se.state.rectAreaLTC1,Fe.ltc_2.value=se.state.rectAreaLTC2,Fe.pointLights.value=se.state.point,Fe.pointLightShadows.value=se.state.pointShadow,Fe.hemisphereLights.value=se.state.hemi,Fe.sunShadowMatrix.value=se.state.sunShadowMatrix,Fe.sunShadowCascade.value=se.state.sunShadowCascade,Fe.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Fe.spotLightMatrix.value=se.state.spotLightMatrix,Fe.spotLightMap.value=se.state.spotLightMap,Fe.pointShadowMatrix.value=se.state.pointShadowMatrix),ie.numLightProbeGrids=Ao(P.state.lightProbeGridArray),ie.currentProgram=pt,ie.uniformsList=null,pt}function Ro(C,G,de,ie,se){const De=tt.get(C),ke=De.currentProgram.id+","+ie+","+se;let Le=De.programVariants.get(ke);return Le===void 0?(Le=Va(C,G,de),De.programVariants.set(ke,Le)):(De.currentProgram=Le,De.uniformsList=null,De.outputColorSpace=ie,De.toneMapping=se),Le}function fr(C){if(C.uniformsList===null){const G=C.currentProgram.getUniforms();C.uniformsList=Fu.seqWithValue(G.seq,C.uniforms)}return C.uniformsList}function Co(C,G){const de=tt.get(C);de.outputColorSpace=G.outputColorSpace,de.batching=G.batching,de.batchingColor=G.batchingColor,de.instancing=G.instancing,de.instancingColor=G.instancingColor,de.instancingMorph=G.instancingMorph,de.skinning=G.skinning,de.morphTargets=G.morphTargets,de.morphNormals=G.morphNormals,de.morphColors=G.morphColors,de.morphTargetsCount=G.morphTargetsCount,de.numClippingPlanes=G.numClippingPlanes,de.numIntersection=G.numClipIntersection,de.vertexAlphas=G.vertexAlphas,de.vertexTangents=G.vertexTangents,de.toneMapping=G.toneMapping}function jl(C,G,de,ie,se){G.isScene!==!0&&(G=pn),rt.resetTextureUnits();const De=G.fog,ke=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?G.environment:null,Le=ce===null?V.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:Nt.workingColorSpace,Ge=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ye=O.get(ie.envMap||ke,Ge),at=ie.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pt=!!de.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Fe=!!de.morphAttributes.position,yt=!!de.morphAttributes.normal,sn=!!de.morphAttributes.color;let Gt=Ba;ie.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Gt=V.toneMapping);const Ct=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,rn=Ct!==void 0?Ct.length:0,Ze=tt.get(ie),Tn=P.state.lights;if(Ft===!0&&(Ut===!0||C!==ue)){const $t=C===ue&&ie.id===te;ve.setState(ie,C,$t)}let Dt=!1,va=!1;ie.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==Tn.state.version||se.isBatchedMesh&&Ze.batching===!1||!se.isBatchedMesh&&Ze.batching===!0||se.isBatchedMesh&&Ze.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&Ze.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&Ze.instancing===!1||!se.isInstancedMesh&&Ze.instancing===!0||se.isSkinnedMesh&&Ze.skinning===!1||!se.isSkinnedMesh&&Ze.skinning===!0||se.isInstancedMesh&&Ze.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&Ze.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&Ze.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&Ze.instancingMorph===!1&&se.morphTexture!==null||Ze.envMap!==Ye||ie.fog===!0&&Ze.fog!==De||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ve.numPlanes||Ze.numIntersection!==ve.numIntersection)||Ze.vertexAlphas!==at||Ze.vertexTangents!==pt||Ze.morphTargets!==Fe||Ze.morphNormals!==yt||Ze.morphColors!==sn||Ze.morphTargetsCount!==rn||Ze.numLightProbeGrids!==Ao(P.state.lightProbeGridArray)?Dt=!0:(Ze.outputColorSpace!==Le||Ze.toneMapping!==Gt)&&(va=!0):(Dt=!0,Ze.__version=ie.version);let ot=Ze.currentProgram;(Dt===!0||va===!0)&&(ot=va===!0?Ro(ie,G,se,Le,Gt):Va(ie,G,se),ae&&ie.isNodeMaterial&&ae.onUpdateProgram(ie,ot,Ze));let ws=!1,li=!1,yi=!1;const mt=ot.getUniforms(),Pt=Ze.uniforms;if(He.useProgram(ot.program)&&(ws=!0,li=!0,yi=!0),ie.id!==te&&(te=ie.id,li=!0),ws||ue!==C){He.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),mt.setValue(W,"projectionMatrix",C.projectionMatrix),mt.setValue(W,"viewMatrix",C.matrixWorldInverse);const un=mt.map.cameraPosition;un!==void 0&&un.setValue(W,hn.setFromMatrixPosition(C.matrixWorld)),Xt.logarithmicDepthBuffer&&mt.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&mt.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),ue!==C&&(ue=C,li=!0,yi=!0)}if(Ze.needsLights&&(Tn.state.sunShadowMap.length>0&&mt.setValue(W,"sunShadowMap",Tn.state.sunShadowMap,rt),Tn.state.directionalShadowMap.length>0&&mt.setValue(W,"directionalShadowMap",Tn.state.directionalShadowMap,rt),Tn.state.spotShadowMap.length>0&&mt.setValue(W,"spotShadowMap",Tn.state.spotShadowMap,rt),Tn.state.pointShadowMap.length>0&&mt.setValue(W,"pointShadowMap",Tn.state.pointShadowMap,rt)),se.isSkinnedMesh){mt.setOptional(W,se,"bindMatrix"),mt.setOptional(W,se,"bindMatrixInverse");const $t=se.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),mt.setValue(W,"boneTexture",$t.boneTexture,rt))}se.isBatchedMesh&&(mt.setOptional(W,se,"batchingTexture"),mt.setValue(W,"batchingTexture",se._matricesTexture,rt),mt.setOptional(W,se,"batchingIdTexture"),mt.setValue(W,"batchingIdTexture",se._indirectTexture,rt),mt.setOptional(W,se,"batchingColorTexture"),se._colorsTexture!==null&&mt.setValue(W,"batchingColorTexture",se._colorsTexture,rt));const Kn=de.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&ge.update(se,de,ot),(li||Ze.receiveShadow!==se.receiveShadow)&&(Ze.receiveShadow=se.receiveShadow,mt.setValue(W,"receiveShadow",se.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&G.environment!==null&&(Pt.envMapIntensity.value=G.environmentIntensity),Pt.dfgLUT!==void 0&&(Pt.dfgLUT.value=LC()),li){if(mt.setValue(W,"toneMappingExposure",V.toneMappingExposure),Ze.needsLights&&Oi(Pt,yi),De&&ie.fog===!0&&Ue.refreshFogUniforms(Pt,De),Ue.refreshMaterialUniforms(Pt,ie,Me,_e,P.state.transmissionRenderTarget[C.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){const $t=N;let un=0;for(const Si of P.state.lightProbeGridArray)Si.texture!==null&&($t.textures[un]=Si.texture,$t.min[un]=Si.boundingBox.min,$t.max[un]=Si.boundingBox.max,$t.resolution[un]=Si.resolution,un++);for(const Si in $t)$t[Si].length=un;Pt.probesSH.value=$t.textures,Pt.probesMin.value=$t.min,Pt.probesMax.value=$t.max,Pt.probesResolution.value=$t.resolution}Fu.upload(W,fr(Ze),Pt,rt)}if(ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Fu.upload(W,fr(Ze),Pt,rt),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&mt.setValue(W,"center",se.center),mt.setValue(W,"modelViewMatrix",se.modelViewMatrix),mt.setValue(W,"normalMatrix",se.normalMatrix),mt.setValue(W,"modelMatrix",se.matrixWorld),ie.uniformsGroups!==void 0){const $t=ie.uniformsGroups;for(let un=0,Si=$t.length;un<Si;un++){const Vl=$t[un];Je.update(Vl,ot),Je.bind(Vl,ot)}}return ot}function Oi(C,G){C.ambientLightColor.needsUpdate=G,C.lightProbe.needsUpdate=G,C.sunLights.needsUpdate=G,C.sunLightShadows.needsUpdate=G,C.directionalLights.needsUpdate=G,C.directionalLightShadows.needsUpdate=G,C.pointLights.needsUpdate=G,C.pointLightShadows.needsUpdate=G,C.spotLights.needsUpdate=G,C.spotLightShadows.needsUpdate=G,C.rectAreaLights.needsUpdate=G,C.hemisphereLights.needsUpdate=G}function Sn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(C,G,de){const ie=tt.get(C);ie.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),tt.get(C.texture).__webglTexture=G,tt.get(C.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:de,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,G){const de=tt.get(C);de.__webglFramebuffer=G,de.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(C,G=0,de=0){ce=C,X=G,H=de;let ie=null,se=!1,De=!1;if(C){const Le=tt.get(C);if(Le.__useDefaultFramebuffer!==void 0){He.bindFramebuffer(W.FRAMEBUFFER,Le.__webglFramebuffer),Te.copy(C.viewport),Be.copy(C.scissor),Ke=C.scissorTest,He.viewport(Te),He.scissor(Be),He.setScissorTest(Ke),te=-1;return}else if(Le.__webglFramebuffer===void 0)rt.setupRenderTarget(C);else if(Le.__hasExternalTextures)rt.rebindTextures(C,tt.get(C.texture).__webglTexture,tt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const at=C.depthTexture;if(Le.__boundDepthTexture!==at){if(at!==null&&tt.has(at)&&(C.width!==at.image.width||C.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");rt.setupDepthRenderbuffer(C)}}const Ge=C.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(De=!0);const Ye=tt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ye[G])?ie=Ye[G][de]:ie=Ye[G],se=!0):C.samples>0&&rt.useMultisampledRTT(C)===!1?ie=tt.get(C).__webglMultisampledFramebuffer:Array.isArray(Ye)?ie=Ye[de]:ie=Ye,Te.copy(C.viewport),Be.copy(C.scissor),Ke=C.scissorTest}else Te.copy(Ee).multiplyScalar(Me).floor(),Be.copy(Ce).multiplyScalar(Me).floor(),Ke=ft;if(de!==0&&(ie=pe),He.bindFramebuffer(W.FRAMEBUFFER,ie)&&He.drawBuffers(C,ie),He.viewport(Te),He.scissor(Be),He.setScissorTest(Ke),se){const Le=tt.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,Le.__webglTexture,de)}else if(De){const Le=G;for(let Ge=0;Ge<C.textures.length;Ge++){const Ye=tt.get(C.textures[Ge]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ge,Ye.__webglTexture,de,Le)}}else if(C!==null&&de!==0){const Le=tt.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Le.__webglTexture,de)}te=-1};function Ln(C){const G=tt.get(C);return(G.__readFormat!==C.format||G.__readType!==C.type)&&(G.__readFormat=C.format,G.__readType=C.type,G.__formatReadable=Xt.textureFormatReadable(C.format),G.__typeReadable=Xt.textureTypeReadable(C.type)),G}this.readRenderTargetPixels=function(C,G,de,ie,se,De,ke,Le=0){if(!(C&&C.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){He.bindFramebuffer(W.FRAMEBUFFER,Ge);try{const Ye=C.textures[Le],at=Ye.format,pt=Ye.type;C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Le);const Fe=Ln(Ye);if(Fe.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Fe.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=C.width-ie&&de>=0&&de<=C.height-se&&W.readPixels(G,de,ie,se,Ne.convert(at),Ne.convert(pt),De)}finally{const Ye=ce!==null?tt.get(ce).__webglFramebuffer:null;He.bindFramebuffer(W.FRAMEBUFFER,Ye)}}},this.readRenderTargetPixelsAsync=async function(C,G,de,ie,se,De,ke,Le=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=tt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ke!==void 0&&(Ge=Ge[ke],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(G>=0&&G<=C.width-ie&&de>=0&&de<=C.height-se){He.bindFramebuffer(W.FRAMEBUFFER,Ge);const Ye=C.textures[Le],at=Ye.format,pt=Ye.type;C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Le);const Fe=Ln(Ye);if(Fe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Fe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const yt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,yt),W.bufferData(W.PIXEL_PACK_BUFFER,De.byteLength,W.STREAM_READ),W.readPixels(G,de,ie,se,Ne.convert(at),Ne.convert(pt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const sn=ce!==null?tt.get(ce).__webglFramebuffer:null;He.bindFramebuffer(W.FRAMEBUFFER,sn);const Gt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await JE(W,Gt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,yt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,De),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(yt),W.deleteSync(Gt),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,G=null,de=0){const ie=Math.pow(2,-de),se=Math.floor(C.image.width*ie),De=Math.floor(C.image.height*ie),ke=G!==null?G.x:0,Le=G!==null?G.y:0;rt.setTexture2D(C,0),W.copyTexSubImage2D(W.TEXTURE_2D,de,0,0,ke,Le,se,De),He.unbindTexture()},this.copyTextureToTexture=function(C,G,de=null,ie=null,se=0,De=0){let ke,Le,Ge,Ye,at,pt,Fe,yt,sn;const Gt=C.isCompressedTexture?C.mipmaps[De]:C.image;if(de!==null)ke=de.max.x-de.min.x,Le=de.max.y-de.min.y,Ge=de.isBox3?de.max.z-de.min.z:1,Ye=de.min.x,at=de.min.y,pt=de.isBox3?de.min.z:0;else{const mt=Math.pow(2,-se);ke=Math.floor(Gt.width*mt),Le=Math.floor(Gt.height*mt),C.isDataArrayTexture?Ge=Gt.depth:C.isData3DTexture?Ge=Math.floor(Gt.depth*mt):Ge=1,Ye=0,at=0,pt=0}ie!==null?(Fe=ie.x,yt=ie.y,sn=ie.z):(Fe=0,yt=0,sn=0);const Ct=Ne.convert(G.format),rn=Ne.convert(G.type);let Ze;G.isData3DTexture?(rt.setTexture3D(G,0),Ze=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(rt.setTexture2DArray(G,0),Ze=W.TEXTURE_2D_ARRAY):(rt.setTexture2D(G,0),Ze=W.TEXTURE_2D),He.activeTexture(W.TEXTURE0),He.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),He.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),He.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);const Tn=He.getParameter(W.UNPACK_ROW_LENGTH),Dt=He.getParameter(W.UNPACK_IMAGE_HEIGHT),va=He.getParameter(W.UNPACK_SKIP_PIXELS),ot=He.getParameter(W.UNPACK_SKIP_ROWS),ws=He.getParameter(W.UNPACK_SKIP_IMAGES);He.pixelStorei(W.UNPACK_ROW_LENGTH,Gt.width),He.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Gt.height),He.pixelStorei(W.UNPACK_SKIP_PIXELS,Ye),He.pixelStorei(W.UNPACK_SKIP_ROWS,at),He.pixelStorei(W.UNPACK_SKIP_IMAGES,pt);const li=C.isDataArrayTexture||C.isData3DTexture,yi=G.isDataArrayTexture||G.isData3DTexture;if(C.isDepthTexture){const mt=tt.get(C),Pt=tt.get(G),Kn=tt.get(mt.__renderTarget),$t=tt.get(Pt.__renderTarget);He.bindFramebuffer(W.READ_FRAMEBUFFER,Kn.__webglFramebuffer),He.bindFramebuffer(W.DRAW_FRAMEBUFFER,$t.__webglFramebuffer);for(let un=0;un<Ge;un++)li&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,tt.get(C).__webglTexture,se,pt+un),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,tt.get(G).__webglTexture,De,sn+un)),W.blitFramebuffer(Ye,at,Ye+ke,at+Le,Fe,yt,Fe+ke,yt+Le,W.DEPTH_BUFFER_BIT,W.NEAREST);He.bindFramebuffer(W.READ_FRAMEBUFFER,null),He.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(se!==0||C.isRenderTargetTexture||tt.has(C)){const mt=tt.get(C),Pt=tt.get(G);He.bindFramebuffer(W.READ_FRAMEBUFFER,q),He.bindFramebuffer(W.DRAW_FRAMEBUFFER,ee);for(let Kn=0;Kn<Ge;Kn++)li?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,mt.__webglTexture,se,pt+Kn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,mt.__webglTexture,se),yi?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Pt.__webglTexture,De,sn+Kn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Pt.__webglTexture,De),se!==0?W.blitFramebuffer(Ye,at,Ye+ke,at+Le,Fe,yt,Fe+ke,yt+Le,W.COLOR_BUFFER_BIT,W.NEAREST):yi?W.copyTexSubImage3D(Ze,De,Fe,yt,sn+Kn,Ye,at,ke,Le):W.copyTexSubImage2D(Ze,De,Fe,yt,Ye,at,ke,Le);He.bindFramebuffer(W.READ_FRAMEBUFFER,null),He.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else yi?C.isDataTexture||C.isData3DTexture?W.texSubImage3D(Ze,De,Fe,yt,sn,ke,Le,Ge,Ct,rn,Gt.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(Ze,De,Fe,yt,sn,ke,Le,Ge,Ct,Gt.data):W.texSubImage3D(Ze,De,Fe,yt,sn,ke,Le,Ge,Ct,rn,Gt):C.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,De,Fe,yt,ke,Le,Ct,rn,Gt.data):C.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,De,Fe,yt,Gt.width,Gt.height,Ct,Gt.data):W.texSubImage2D(W.TEXTURE_2D,De,Fe,yt,ke,Le,Ct,rn,Gt);He.pixelStorei(W.UNPACK_ROW_LENGTH,Tn),He.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Dt),He.pixelStorei(W.UNPACK_SKIP_PIXELS,va),He.pixelStorei(W.UNPACK_SKIP_ROWS,ot),He.pixelStorei(W.UNPACK_SKIP_IMAGES,ws),De===0&&G.generateMipmaps===!0&&G.mipmapsAutoUpdate===!0&&W.generateMipmap(Ze),He.unbindTexture()},this.initRenderTarget=function(C){tt.get(C).__webglFramebuffer===void 0&&rt.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?rt.setTextureCube(C,0):C.isData3DTexture?rt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?rt.setTexture2DArray(C,0):rt.setTexture2D(C,0),He.unbindTexture()},this.resetState=function(){X=0,H=0,ce=null,He.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Nt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Nt._getUnpackColorSpace()}}function OC(o){const t=document.createElement("canvas");t.width=1024,t.height=512;const i=t.getContext("2d");i.fillStyle="#aeb8c7",i.fillRect(0,0,1024,512);const r=i.createLinearGradient(0,0,0,512);r.addColorStop(0,"#fcfaf4"),r.addColorStop(.5,"#758297"),r.addColorStop(1,"#232a3a"),i.fillStyle=r,i.fillRect(0,0,1024,512),i.fillStyle="#ffffff",i.fillRect(80,50,155,310),i.fillRect(540,90,65,270),i.fillStyle="#d9e7ff",i.fillRect(760,30,190,155);const l=new Cy(t);l.mapping=Uu,l.colorSpace=ii;const d=new Pl(o),h=d.fromEquirectangular(l);return l.dispose(),d.dispose(),h}function PC({active:o}){const t=$e.useRef(null),i=$e.useRef(o),r=$e.useRef(null),[l,d]=$e.useState(!1);return $e.useEffect(()=>{const h=t.current;let p,g,m=0,S=!0,_=!1;const x=[],b=[],T=[];d(!1);try{p=new UC({alpha:!0,antialias:!0,powerPreference:"low-power"}),p.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),p.outputColorSpace=ii,p.toneMapping=tm,p.toneMappingExposure=1.35,p.setClearColor(0,0),p.domElement.setAttribute("aria-hidden","true"),h.appendChild(p.domElement);const w=new v1,M=new qi(35,1,.1,100);M.position.set(0,.8,11.3),M.lookAt(0,0,0),g=OC(p),w.environment=g.texture,w.add(new F1(16777215,1.2));const y=new ux(16777215,4.5);y.position.set(-4,7,6),w.add(y);const U=new ux(12900095,3);U.position.set(4,2,-3),w.add(U);const F=new sx({color:"#244bff",metalness:.4,roughness:.19,clearcoat:1,clearcoatRoughness:.12,envMapIntensity:1.2}),N=new sx({color:"#d9dfeb",metalness:1,roughness:.16,clearcoat:1,envMapIntensity:1.6});b.push(F,N);const I=new ku(1.65,.49,40,144),P=new ku(1.65,.4,40,144);x.push(I,P);const E=new fa(I,F);E.rotation.set(.65,-.35,-.55),E.position.set(-.7,.4,.2);const L=new fa(P,N);L.rotation.set(.7,1.2,.4),L.position.set(.8,-.1,-.25);const J=new Tl;J.add(E,L),J.rotation.z=-.12,w.add(J);const V=document.createElement("canvas");V.width=256,V.height=256;const k=V.getContext("2d"),ae=k.createRadialGradient(128,128,12,128,128,124);ae.addColorStop(0,"rgba(25, 35, 50, 0.19)"),ae.addColorStop(.45,"rgba(25, 35, 50, 0.09)"),ae.addColorStop(1,"rgba(25, 35, 50, 0)"),k.fillStyle=ae,k.fillRect(0,0,256,256);const pe=new Cy(V);T.push(pe);const q=new Hl(7.4,5),ee=new Ay({map:pe,transparent:!0,depthWrite:!1});x.push(q),b.push(ee);const X=new fa(q,ee);X.rotation.x=-Math.PI/2,X.position.y=-2.65,w.add(X);let H=0,ce=0,te=0,ue=performance.now();const Te=(_e=performance.now())=>{if(m=0,_||!S||document.hidden)return;i.current&&(te+=Math.min(.05,Math.max(0,_e-ue)/1e3)),ue=_e;const Me=te;J.rotation.y=Math.sin(Me*.22)*.35+H,J.rotation.x=Math.sin(Me*.17)*.12+ce,J.rotation.z=-.12+Math.sin(Me*.19)*.08,J.position.y=Math.sin(Me*.65)*.14,p.render(w,M),i.current&&(m=requestAnimationFrame(Te))},Be=()=>{!m&&S&&!document.hidden&&(m=requestAnimationFrame(Te))};r.current=_e=>{ue=performance.now(),!_e&&m&&(cancelAnimationFrame(m),m=0),Be()};const Ke=new ResizeObserver(()=>{!h.clientWidth||!h.clientHeight||(p.setSize(h.clientWidth,h.clientHeight,!1),M.aspect=h.clientWidth/h.clientHeight,M.updateProjectionMatrix(),Be())});Ke.observe(h);const D=new IntersectionObserver(([_e])=>{S=_e.isIntersecting,!S&&m?(cancelAnimationFrame(m),m=0):Be()});D.observe(h);const K=_e=>{if(!i.current)return;const Me=h.getBoundingClientRect();H=((_e.clientX-Me.left)/Me.width-.5)*.2,ce=((_e.clientY-Me.top)/Me.height-.5)*.12},xe=()=>{H=0,ce=0};return h.addEventListener("pointermove",K),h.addEventListener("pointerleave",xe),document.addEventListener("visibilitychange",Be),p.setSize(h.clientWidth||600,h.clientHeight||600,!1),M.aspect=(h.clientWidth||600)/(h.clientHeight||600),M.updateProjectionMatrix(),p.render(w,M),d(!0),Be(),()=>{_=!0,r.current=null,cancelAnimationFrame(m),Ke.disconnect(),D.disconnect(),h.removeEventListener("pointermove",K),h.removeEventListener("pointerleave",xe),document.removeEventListener("visibilitychange",Be),x.forEach(_e=>_e.dispose()),b.forEach(_e=>_e.dispose()),T.forEach(_e=>_e.dispose()),g.dispose(),p.dispose(),p.forceContextLoss(),p.domElement.remove()}}catch{x.forEach(w=>w.dispose()),b.forEach(w=>w.dispose()),T.forEach(w=>w.dispose()),g==null||g.dispose(),p==null||p.dispose(),p==null||p.domElement.remove()}},[]),$e.useEffect(()=>{var h;i.current=o,(h=r.current)==null||h.call(r,o)},[o]),f.jsx("div",{className:`sculpture-canvas ${l?"is-rendered":""}`,ref:t,"data-render-mode":l?"webgl":"css","aria-hidden":"true",children:f.jsxs("div",{className:"sculpture-fallback",children:[f.jsx("i",{}),f.jsx("i",{}),f.jsx("span",{})]})})}function zC({paused:o,onToggle:t,reducedMotion:i}){return f.jsxs("figure",{className:`sculpture ${o?"motion-paused":""}`,children:[f.jsxs("div",{className:"sculpture-meta",children:[f.jsx("span",{children:"EL PUNTO DE ENCUENTRO"}),f.jsx("span",{children:"FIG. 01 — PACTO"})]}),f.jsx("div",{className:"sculpture-orbit orbit-one","aria-hidden":"true"}),f.jsx("div",{className:"sculpture-orbit orbit-two","aria-hidden":"true"}),f.jsx(PC,{active:!o}),f.jsxs("span",{className:"sculpture-label label-listen",children:[f.jsx("i",{}),"Escucha"]}),f.jsxs("span",{className:"sculpture-label label-connect",children:[f.jsx("i",{}),"Conecta"]}),f.jsxs("span",{className:"sculpture-label label-advance",children:[f.jsx("i",{}),"Avanza"]}),f.jsxs("figcaption",{children:[f.jsx("span",{children:"Dos perspectivas. Nuevas posibilidades."}),f.jsxs("button",{type:"button",className:"motion-toggle",onClick:t,disabled:i,"aria-label":i?"Animación desactivada por tu preferencia de movimiento reducido":o?"Activar animación":"Pausar animación","aria-pressed":o,children:[o?f.jsx(Qb,{size:12}):f.jsx(jx,{size:12}),f.jsx("span",{children:i?"Movimiento reducido":o?"Activar movimiento":"Pausar movimiento"})]})]})]})}function Xy({small:o=!1}){return f.jsxs("span",{className:`pacto-brand ${o?"brand-small":""}`,children:[f.jsx("svg",{viewBox:"0 0 32 32",width:"29",height:"29","aria-hidden":"true",children:f.jsx("path",{d:"M3 7h11v11H8v7H3V7Zm15 0h11v11h-6v7h-5V7Z",fill:"currentColor"})}),!o&&f.jsxs("span",{children:["pacto",f.jsx("span",{className:"brand-period",children:f.jsx(Qt,{size:12})})]})]})}function IC({page:o,name:t,navigate:i,menuOpen:r,setMenuOpen:l,query:d,onQuery:h,searchRef:p,onPractice:g,onSettings:m,onHelp:S,notifications:_,onNotifications:x,notice:b,onNotice:T}){const w=[["home","Mi entrenamiento"],["scenarios","Simulaciones"],["progress","Mi progreso"],["library","Biblioteca"]];return f.jsxs("header",{className:"site-header",children:[f.jsx("button",{className:"site-logo","aria-label":"Pacto, inicio",onClick:()=>i("home"),children:f.jsx(Xy,{})}),f.jsxs("nav",{className:`site-navigation ${r?"is-open":""}`,"aria-label":"Navegación principal",children:[w.map(([M,y])=>f.jsxs("button",{"aria-current":o===M?"page":void 0,className:o===M||o==="session"&&M==="scenarios"?"is-active":"",onClick:()=>i(M),children:[y,f.jsx("span",{})]},M)),f.jsxs("button",{className:"mobile-nav-help",onClick:S,children:["Cómo funciona",f.jsx(Qt,{size:16})]})]}),f.jsxs("div",{className:"site-actions",children:[f.jsxs("label",{className:"site-search",children:[f.jsx(Jp,{size:17}),f.jsx("input",{ref:p,"aria-label":"Buscar simulaciones",placeholder:"Encuentra un escenario",value:d,onChange:M=>h(M.target.value)}),f.jsx("kbd",{children:"⌘ K"})]}),f.jsx("button",{className:"site-icon help-trigger","aria-label":"Ayuda y cómo funciona",onClick:S,children:f.jsx(Ix,{size:18})}),f.jsxs("div",{className:"notification-wrap",children:[f.jsx("button",{className:"site-icon notification-trigger","aria-label":"Ver novedades","aria-expanded":_,onClick:x,children:f.jsx(Hb,{size:17})}),_&&f.jsxs("div",{className:"notification-panel",children:[f.jsx("b",{children:"Un momento para tu próxima práctica"}),f.jsx("p",{children:b}),f.jsxs("button",{className:"text-link",onClick:T,children:["Continuar mi entrenamiento",f.jsx(ha,{size:14})]})]})]}),f.jsx("button",{className:"profile-trigger","aria-label":"Abrir mi perfil",onClick:m,children:t.charAt(0).toUpperCase()}),f.jsxs("button",{className:"header-practice",onClick:g,children:["Entrenar ahora",f.jsx(Qt,{size:16})]}),f.jsx("button",{className:"site-icon menu-trigger","aria-label":r?"Cerrar menú":"Abrir menú","aria-expanded":r,onClick:()=>l(!r),children:r?f.jsx($p,{size:23}):f.jsx(Zb,{size:23})})]})]})}function FC({store:o,history:t,currentScenario:i,recommended:r,onSelect:l,navigate:d,onResume:h,onLesson:p,ScenarioCard:g,motionSuspended:m=!1}){const[S,_]=$e.useState("Todos"),[x,b]=$e.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches),[T,w]=$e.useState(()=>window.matchMedia("(prefers-reduced-motion: reduce)").matches);$e.useEffect(()=>{const N=window.matchMedia("(prefers-reduced-motion: reduce)"),I=P=>{b(P.matches),w(P.matches)};return N.addEventListener("change",I),()=>N.removeEventListener("change",I)},[]);const M=new Set(t.map(N=>N.scenarioId)),y=T||m,U=_i.filter(N=>S==="Todos"||N.category===S).slice(0,3),F=()=>{var N;return(N=document.getElementById("situaciones"))==null?void 0:N.scrollIntoView({behavior:x?"instant":"smooth",block:"start"})};return f.jsxs("div",{className:`premium-home ${y?"motion-paused":""}`,children:[f.jsxs("section",{className:"editorial-hero","aria-labelledby":"cover-title",children:[f.jsxs("div",{className:"hero-topline",children:[f.jsxs("span",{children:[f.jsx("i",{})," EL ARTE DE CONVERSAR, EN PRÁCTICA."]}),f.jsxs("span",{children:["Tu espacio, ",o.name]})]}),o.active&&i&&f.jsxs("div",{className:"premium-resume",children:[f.jsx(jx,{size:15}),f.jsxs("span",{children:["Tu conversación sigue aquí. ",f.jsx("b",{children:i.title})]}),f.jsxs("button",{onClick:h,children:["Retomar",f.jsx(Qt,{size:15})]})]}),f.jsxs("div",{className:"editorial-hero-grid",children:[f.jsxs("div",{className:"editorial-hero-copy",children:[f.jsxs("h1",{id:"cover-title",children:[f.jsx("span",{children:"Tu voz."}),f.jsx("em",{children:"Tu ventaja."})]}),f.jsxs("p",{className:"cover-description",children:["Hay conversaciones que abren puertas. ",f.jsx("br",{}),"Aprende a afrontarlas con estrategia,",f.jsx("br",{className:"desktop-break"})," empatía y una voz propia."]}),f.jsxs("div",{className:"cover-actions",children:[f.jsxs("button",{className:"cover-cta",onClick:()=>l(r),children:[f.jsx("span",{children:t.length?"Mi próxima práctica":"Comenzar mi primera práctica"}),f.jsx("span",{className:"cta-arrow",children:f.jsx(Qt,{size:20})})]}),f.jsxs("button",{className:"cover-discover",onClick:F,children:["Explorar los escenarios",f.jsx(w_,{size:16})]})]}),f.jsxs("div",{className:"cover-assurance",children:[f.jsxs("span",{children:[f.jsx(Bu,{size:14}),"Equivócate aquí. Crece allá afuera."]}),f.jsx("span",{children:"01 / UN NUEVO PUNTO DE PARTIDA"})]})]}),f.jsx(zC,{paused:y,onToggle:()=>w(!T),reducedMotion:x})]}),f.jsxs("div",{className:"cover-bottomline",children:[f.jsx("span",{children:"NEGOCIACIÓN · COMUNICACIÓN · CRITERIO"}),f.jsxs("span",{children:["Pequeñas prácticas. Conversaciones que importan.",f.jsx(w_,{size:15})]})]})]}),f.jsxs("section",{className:"editorial-intro","aria-label":"Qué puedes entrenar",children:[f.jsxs("div",{className:"intro-statement",children:[f.jsx("span",{className:"editorial-kicker",children:"EL MOMENTO DE PREPARARTE ES AHORA."}),f.jsxs("p",{children:["Antes de pedir ese aumento.",f.jsx("br",{}),"Antes de presentar tu idea.",f.jsx("br",{}),f.jsx("em",{children:"Antes de esa conversación."})]})]}),f.jsxs("div",{className:"intro-details",children:[f.jsx("p",{children:"La seguridad se construye practicando. Entra en situaciones realistas, prueba distintas estrategias y descubre cómo cambia una conversación cuando eliges mejor tus palabras."}),f.jsxs("div",{className:"intro-facts",children:[f.jsxs("div",{children:[f.jsx("b",{children:"12"}),f.jsxs("span",{children:["Escenarios para",f.jsx("br",{}),"la vida real"]})]}),f.jsxs("div",{children:[f.jsx("b",{children:"03"}),f.jsxs("span",{children:["Niveles para",f.jsx("br",{}),"seguir creciendo"]})]}),f.jsxs("div",{children:[f.jsx("b",{children:"Tu ritmo"}),f.jsxs("span",{children:["Espacio para intentar,",f.jsx("br",{}),"reflexionar y volver"]})]})]})]})]}),f.jsx("div",{className:"kinetic-strip","aria-hidden":"true",children:f.jsx("div",{children:[0,1].map(N=>f.jsxs("span",{children:["ESCUCHA CON INTENCIÓN ",f.jsx("i",{children:f.jsx(Qt,{size:22,strokeWidth:1.2})})," NEGOCIA CON CRITERIO ",f.jsx("i",{children:f.jsx(Qt,{size:22,strokeWidth:1.2})})," CONVERSA CON CONFIANZA ",f.jsx("i",{children:f.jsx(Qt,{size:22,strokeWidth:1.2})})," "]},N))})}),f.jsxs("section",{className:"editorial-cases",id:"situaciones","aria-labelledby":"cases-title",children:[f.jsxs("div",{className:"editorial-section-head",children:[f.jsxs("div",{children:[f.jsx("span",{className:"editorial-kicker",children:"01 / EL TERRENO DE PRÁCTICA"}),f.jsxs("h2",{id:"cases-title",children:["Las conversaciones",f.jsx("br",{}),"que te ",f.jsx("em",{children:"esperan."})]})]}),f.jsxs("div",{children:[f.jsxs("p",{children:["Personas distintas. Intereses que chocan.",f.jsx("br",{}),"Decisiones que cambian lo que viene."]}),f.jsxs("button",{className:"editorial-link",onClick:()=>d("scenarios"),children:["Explorar los 12 escenarios",f.jsx("span",{children:f.jsx(Qt,{size:18})})]})]})]}),f.jsx("div",{className:"editorial-category-tabs","aria-label":"Categorías",children:Vx.map((N,I)=>f.jsxs("button",{className:S===N?"is-active":"",onClick:()=>_(N),children:[f.jsxs("span",{children:["0",I+1]}),N]},N))}),f.jsx("div",{className:"scenario-grid editorial-case-grid",children:U.map(N=>f.jsx(g,{scenario:N,onSelect:l,completed:M.has(N.id)},N.id))})]}),f.jsxs("section",{className:"editorial-method","aria-labelledby":"method-title",children:[f.jsxs("div",{className:"method-heading",children:[f.jsx("span",{className:"editorial-kicker",children:"02 / UNA PRÁCTICA CON INTENCIÓN"}),f.jsxs("h2",{id:"method-title",children:["La confianza",f.jsx("br",{}),"también se",f.jsx("br",{}),f.jsx("em",{children:"entrena."})]}),f.jsx("p",{children:"Encuentra un espacio para ensayar tus ideas, revisar tus decisiones y volver con más claridad."}),f.jsxs("button",{className:"editorial-link",onClick:()=>l(r),children:["Encuentra tu primer reto",f.jsx("span",{children:f.jsx(Qt,{size:18})})]})]}),f.jsx("div",{className:"method-steps",children:[{no:"01",title:"Entra en la situación.",body:"Conoce el contexto, a tu interlocutor y lo que está en juego. Decide qué quieres conseguir y qué límite necesitas cuidar.",icon:Kp},{no:"02",title:"Encuentra tus palabras.",body:"Pregunta, escucha, argumenta y propone. Escribe tu intervención o explora una sugerencia. Cada decisión abre un camino distinto.",icon:rr},{no:"03",title:"Mira lo que cambió.",body:"Revisa momentos concretos, entiende qué funcionó y prueba otra respuesta desde el mismo punto. Tu primer intento se conserva.",icon:Du}].map(N=>f.jsxs("article",{className:"method-step",children:[f.jsx("span",{className:"method-number",children:N.no}),f.jsxs("div",{children:[f.jsx(N.icon,{size:22,strokeWidth:1.3}),f.jsx("h3",{children:N.title}),f.jsx("p",{children:N.body})]}),f.jsx(Qt,{size:20})]},N.no))})]}),f.jsxs("section",{className:"editorial-reflection","aria-labelledby":"reflection-title",children:[f.jsxs("div",{className:"reflection-topline",children:[f.jsx("span",{children:"03 / EL VALOR ESTÁ EN LO QUE APRENDES."}),f.jsxs("span",{className:"reflection-status",children:[f.jsx("i",{})," PRÁCTICA · REFLEXIÓN · EVOLUCIÓN"]})]}),f.jsxs("div",{className:"reflection-layout",children:[f.jsxs("div",{children:[f.jsxs("h2",{id:"reflection-title",children:["La práctica termina.",f.jsx("br",{}),"El aprendizaje",f.jsx("br",{}),f.jsx("em",{children:"sigue."})]}),f.jsx("p",{children:"Un «sí» no cuenta toda la historia. Entiende cómo escuchaste, qué defendiste y qué podrías hacer distinto. Lo que aprendes aquí se va contigo."}),f.jsxs("button",{className:"reflection-link",onClick:()=>d("progress"),children:["Conocer mi evolución",f.jsx(Qt,{size:20})]})]}),f.jsxs("div",{className:"reflection-art",children:[f.jsx("div",{className:"reflection-orbit","aria-hidden":"true"}),f.jsxs("div",{className:"conversation-paper",children:[f.jsxs("div",{className:"paper-top",children:[f.jsx("span",{children:"UN MOMENTO PARA MIRAR DE CERCA"}),f.jsx(Nl,{size:16})]}),f.jsxs("div",{className:"paper-quote",children:[f.jsx("span",{children:"01 / LO QUE DIJISTE"}),f.jsxs("p",{children:["«Antes de proponer algo,",f.jsx("br",{}),"¿qué es lo más importante",f.jsx("br",{}),"para ti?»"]})]}),f.jsxs("div",{className:"paper-insight",children:[f.jsx("span",{children:f.jsx(Rs,{size:12})}),f.jsxs("div",{children:[f.jsx("b",{children:"Abriste una nueva posibilidad."}),f.jsx("p",{children:"Una pregunta puede revelar el interés que una posición no deja ver."})]})]}),f.jsxs("div",{className:"paper-bottom",children:[f.jsx("span",{children:"EJEMPLO DE APRENDIZAJE"}),f.jsx(Qt,{size:16})]})]}),f.jsxs("div",{className:"reflection-note",children:[f.jsx("span",{className:"note-plus",children:"+"}),f.jsx("span",{children:t.length?`${t.length} conversaciones en tu recorrido.`:"Tu evolución empieza en la primera conversación."})]})]})]})]}),f.jsxs("section",{className:"editorial-learning","aria-labelledby":"learning-title",children:[f.jsxs("div",{className:"editorial-section-head",children:[f.jsxs("div",{children:[f.jsx("span",{className:"editorial-kicker",children:"04 / IDEAS QUE PUEDES LLEVARTE"}),f.jsxs("h2",{id:"learning-title",children:["Detrás de un buen acuerdo, ",f.jsx("br",{}),"hay un mejor ",f.jsx("em",{children:"criterio."})]})]}),f.jsxs("button",{className:"editorial-link",onClick:()=>d("library"),children:["Entrar en la biblioteca",f.jsx("span",{children:f.jsx(Qt,{size:18})})]})]}),f.jsx("div",{className:"editorial-lessons",children:[ua[0],ua[3],ua[4]].map((N,I)=>f.jsxs("button",{className:"editorial-lesson",onClick:()=>p(N),children:[f.jsxs("span",{className:"lesson-serial",children:["0",I+1]}),f.jsxs("div",{children:[f.jsxs("span",{children:[N.category," / ",N.time," MIN DE LECTURA"]}),f.jsx("h3",{children:N.title}),f.jsx("p",{children:N.short})]}),f.jsx("span",{className:"lesson-open",children:f.jsx(Kb,{size:22,strokeWidth:1})})]},N.id))})]}),f.jsxs("section",{className:"editorial-invitation",children:[f.jsx("span",{className:"editorial-kicker",children:"EL PRIMER PASO NO TIENE QUE SER PERFECTO."}),f.jsxs("h2",{children:["Tu próxima conversación ",f.jsx("br",{}),"empieza ",f.jsx("em",{children:"contigo."})]}),f.jsxs("button",{onClick:()=>l(r),children:["Elegir mi siguiente reto",f.jsx(Qt,{size:23})]}),f.jsx("div",{className:"invitation-orb","aria-hidden":"true"})]}),f.jsxs("footer",{className:"editorial-footer",children:[f.jsxs("div",{className:"editorial-footer-top",children:[f.jsxs("span",{children:["PRÁCTICA INTELIGENTE.",f.jsx("br",{}),"CONVERSACIONES HUMANAS."]}),f.jsxs("div",{children:[f.jsxs("button",{onClick:()=>d("scenarios"),children:["Simulaciones",f.jsx(Qt,{size:13})]}),f.jsxs("button",{onClick:()=>d("library"),children:["Biblioteca",f.jsx(Qt,{size:13})]}),f.jsxs("button",{onClick:()=>d("progress"),children:["Mi progreso",f.jsx(Qt,{size:13})]})]}),f.jsxs("span",{children:["UN ESPACIO PARA",f.jsx("br",{}),"ENCONTRAR TU VOZ."]})]}),f.jsxs("div",{className:"footer-wordmark","aria-hidden":"true",children:["pacto",f.jsx("span",{children:f.jsx(Qt,{})})]}),f.jsxs("div",{className:"editorial-footer-bottom",children:[f.jsx("span",{children:"APRENDE A CONVERSAR. ELIGE CÓMO AVANZAR."}),f.jsx("span",{children:"Hecho para practicar, a tu manera."})]})]})]})}const Zu={salary:rE,client:Wb,boundary:Bu,interview:Gb,sale:tE,team:sE,priority:go,supplier:jb,deal:Cl,conflict:rr,home:Yb,feedback:Bx,search:Jp,route:$b,ear:kb,exchange:Cl,shield:Bu,timer:Qp,check:Xb,chart:aE},BC={clarity:"Argumentos concretos y propuestas comprensibles.",listening:"Preguntas y comprobación de intereses.",empathy:"Reconocimiento de la experiencia del otro.",assertiveness:"Límites e intercambios expresados con respeto.",preparation:"Objetivo, alternativa y límite preparados antes de hablar.",strategy:"Exploración de intereses e intercambios condicionados.",emotion:"Respeto y reparación ante la tensión.",creativity:"Opciones que combinan distintas variables.",agreement:"Condiciones concretas y confirmación del resultado."};function HC({small:o=!1}){return f.jsx(Xy,{small:o})}function GC({scenario:o}){const t=Zu[o.icon];return f.jsxs("div",{className:`case-art ${o.color}`,"aria-hidden":"true",children:[f.jsx("div",{className:"art-grid"}),f.jsx("span",{className:"art-circle circle-one"}),f.jsx("span",{className:"art-circle circle-two"}),f.jsxs("div",{className:"case-object",children:[f.jsx(t,{size:38,strokeWidth:1.4}),f.jsx("span",{className:"object-dot",children:f.jsx(Rs,{size:12})})]}),f.jsx("span",{className:"art-dash dash-one"}),f.jsx("span",{className:"art-dash dash-two"}),f.jsx("svg",{className:"case-spark",width:"24",height:"24",viewBox:"0 0 24 24",children:f.jsx("path",{d:"m12 2 2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6Z",fill:"currentColor"})})]})}function Wp({person:o,size:t=""}){return f.jsxs("div",{className:`avatar avatar-${o.avatar} ${t}`,"aria-label":o.name,children:[f.jsx("span",{children:o.initials}),f.jsx("span",{className:"avatar-shine"})]})}function hm({level:o}){return f.jsxs("span",{className:`level-badge level-${o}`,children:[f.jsx("span",{className:"level-bars",children:[1,2,3].map(t=>f.jsx("i",{className:t<=o?"filled":""},t))}),qx[o]]})}function Ux({scenario:o,onSelect:t,completed:i}){return f.jsxs("button",{className:"scenario-card",onClick:()=>t(o),children:[f.jsxs("div",{className:"card-art-wrap",children:[f.jsx(GC,{scenario:o}),o.tag&&f.jsx("span",{className:"card-label",children:o.tag}),i&&f.jsxs("span",{className:"completed-badge",title:"Ya practicaste este caso",children:[f.jsx(Rs,{size:13})," Practicado"]})]}),f.jsxs("div",{className:"scenario-card-body",children:[f.jsxs("div",{className:"card-meta",children:[f.jsx("span",{children:o.category}),f.jsxs("span",{children:[f.jsx(Qp,{size:12}),o.minutes," min"]})]}),f.jsx("h3",{children:o.title}),f.jsx("p",{children:o.description}),f.jsxs("div",{className:"card-footer",children:[f.jsx(hm,{level:o.level}),f.jsxs("span",{className:"start-case",children:["Entrenar ",f.jsx(Qt,{size:16})]})]})]})]})}function bo({children:o,onClose:t,className:i="",titleId:r}){const l=$e.useRef(),d=$e.useRef(t);return d.current=t,$e.useEffect(()=>{var m;const h=document.activeElement;document.body.style.overflow="hidden";const p=document.querySelectorAll(".main-shell, .sidebar");p.forEach(S=>S.inert=!0),(m=l.current)==null||m.focus();const g=S=>{if(S.key==="Escape"&&d.current(),S.key==="Tab"){const _=[...l.current.querySelectorAll('button, a, input, textarea, select, [tabindex="0"]')].filter(T=>!T.disabled),x=_[0],b=_.at(-1);S.shiftKey&&(document.activeElement===x||document.activeElement===l.current)?(S.preventDefault(),b==null||b.focus()):!S.shiftKey&&document.activeElement===b&&(S.preventDefault(),x==null||x.focus())}};return document.addEventListener("keydown",g),()=>{document.body.style.overflow="",p.forEach(S=>S.inert=!1),document.removeEventListener("keydown",g),h==null||h.focus()}},[]),zb.createPortal(f.jsx("div",{className:"modal-backdrop",onClick:h=>h.target===h.currentTarget&&t(),children:f.jsxs("section",{ref:l,tabIndex:-1,role:"dialog","aria-modal":"true","aria-labelledby":r,className:`modal ${i}`,children:[f.jsx("button",{className:"icon-button modal-close","aria-label":"Cerrar",onClick:t,children:f.jsx($p,{size:20})}),o]})}),document.body)}function jC({scenario:o,onClose:t,onStart:i,hasActive:r}){const[l,d]=$e.useState({objective:"",alternative:"",limit:""}),[h,p]=$e.useState(0);return f.jsxs(bo,{onClose:t,className:"prepare-modal",titleId:"prepare-title",children:[f.jsxs("div",{className:"prepare-heading",children:[f.jsx("span",{className:"eyebrow",children:"ANTES DE LA CONVERSACIÓN"}),f.jsx("h2",{id:"prepare-title",children:o.title}),f.jsx("p",{children:o.subtitle}),f.jsxs("div",{className:"prepare-meta",children:[f.jsx(hm,{level:o.level}),f.jsxs("span",{children:[f.jsx(Qp,{size:14}),o.minutes," min"]}),f.jsxs("span",{children:[f.jsx(rr,{size:14}),"Hasta 12 intervenciones"]})]})]}),f.jsxs("div",{className:"step-tabs",children:[f.jsxs("button",{onClick:()=>p(0),className:h===0?"active":"",children:[f.jsx("span",{children:"1"})," Conoce el caso"]}),f.jsxs("button",{onClick:()=>p(1),className:h===1?"active":"",children:[f.jsx("span",{children:"2"})," Prepara tu estrategia"]})]}),h===0?f.jsxs("div",{className:"case-brief",children:[f.jsxs("div",{className:"brief-main",children:[f.jsx("h3",{children:"Estás en esta situación"}),f.jsx("p",{children:o.context}),f.jsxs("div",{className:"objective-box",children:[f.jsx(go,{size:20}),f.jsxs("div",{children:[f.jsx("h4",{children:"Tu objetivo de práctica"}),f.jsx("p",{children:o.objective})]})]}),f.jsx("h3",{children:"Lo que sabes"}),f.jsx("ul",{className:"check-list",children:o.facts.map(g=>f.jsxs("li",{children:[f.jsx(Rs,{size:15}),g]},g))}),f.jsx("h3",{children:"Restricciones reales"}),f.jsx("ul",{className:"constraint-list",children:o.constraints.map(g=>f.jsx("li",{children:g},g))})]}),f.jsxs("aside",{className:"brief-aside",children:[f.jsx(Wp,{person:o.person,size:"large"}),f.jsx("h3",{children:o.person.name}),f.jsx("p",{children:o.person.role}),f.jsx("span",{className:"person-style",children:o.person.style}),f.jsx("hr",{}),f.jsx("h4",{children:"Qué le importa"}),f.jsx("p",{children:o.person.motivation}),f.jsx("h4",{children:"Tus intereses"}),f.jsx("ul",{children:o.interests.map(g=>f.jsx("li",{children:g},g))})]})]}):f.jsxs("div",{className:"preparation-form",children:[f.jsxs("div",{className:"inline-note",children:[f.jsx(Gx,{size:21}),f.jsx("p",{children:"Define tu objetivo, tu alternativa y el límite que quieres cuidar. Estas notas son privadas y te acompañarán durante la conversación."})]}),[["objective","¿Qué quieres conseguir?",o.objective],["alternative","¿Qué harás si no hay acuerdo?",o.starter],["limit","¿Qué límite no quieres cruzar?",o.constraints[0]]].map(([g,m,S])=>f.jsxs("label",{children:[m,f.jsx("textarea",{maxLength:600,value:l[g],onChange:_=>d({...l,[g]:_.target.value}),placeholder:S,rows:2})]},g)),f.jsx("p",{className:"muted small-text",children:"Puedes comenzar sin completar las notas. La revisión distinguirá lo que preparaste de lo que observó en el diálogo."})]}),f.jsxs("div",{className:"modal-footer",children:[f.jsxs("span",{className:"muted small-text",children:[f.jsx(Bu,{size:15})," Un espacio seguro para equivocarte"]}),h===0?f.jsxs("button",{className:"button primary",onClick:()=>p(1),children:["Preparar mi estrategia ",f.jsx(ha,{size:16})]}):f.jsxs("button",{className:"button primary",onClick:()=>i(o,l),children:[r?"Guardar la pausa e iniciar este caso":"Comenzar simulación",f.jsx(ha,{size:16})]})]}),r&&f.jsx("p",{className:"active-warning",children:"Tienes una práctica en pausa. Al iniciar esta, la anterior se guardará en tu historial como finalizada sin acuerdo."})]})}function VC(){const[o,t]=$e.useState(pE),[i,r]=$e.useState("home"),[l,d]=$e.useState("Todos"),[h,p]=$e.useState(""),[g,m]=$e.useState("all"),[S,_]=$e.useState("recommended"),[x,b]=$e.useState(null),[T,w]=$e.useState(null),[M,y]=$e.useState(!1),[U,F]=$e.useState(!1),[N,I]=$e.useState(!1),[P,E]=$e.useState(!1),[L,J]=$e.useState(null),[V,k]=$e.useState(""),[ae,pe]=$e.useState(!1),q=$e.useRef(),ee=o.history.filter(oe=>_i.some(we=>we.id===oe.scenarioId)),X=$e.useMemo(()=>ee.map(Yx),[o.history]),H=new Set(ee.map(oe=>oe.scenarioId)),ce=Object.fromEntries(ai.map(([oe])=>[oe,X.length?Math.round(X.reduce((we,Ee)=>we+Ee.scores[oe],0)/X.length):0]));ai.slice().sort((oe,we)=>ce[we[0]]-ce[oe[0]])[0];const te=ai.filter(([oe])=>oe!=="agreement").slice().sort((oe,we)=>ce[oe[0]]-ce[we[0]])[0],ue=gE(),Te=ee.filter(oe=>Jx(oe.finishedAt)>=ue).length,Be=_i.find(oe=>{var we;return oe.id===((we=o.active)==null?void 0:we.scenarioId)}),Ke=_i.filter(oe=>(l==="Todos"||l===oe.category)&&(g==="all"||oe.level===Number(g))&&Ia(`${oe.title} ${oe.subtitle} ${oe.description} ${oe.practice.join(" ")}`).includes(Ia(h)));S==="short"&&Ke.sort((oe,we)=>oe.minutes-we.minutes),S==="level"&&Ke.sort((oe,we)=>oe.level-we.level),S==="unplayed"&&Ke.sort((oe,we)=>Number(H.has(oe.id))-Number(H.has(we.id))),$e.useEffect(()=>{pe(!mE(o))},[o]),$e.useEffect(()=>{if(V){const oe=setTimeout(()=>k(""),4500);return()=>clearTimeout(oe)}},[V]),$e.useEffect(()=>{const oe=we=>{var Ee;(we.metaKey||we.ctrlKey)&&we.key==="k"&&(we.preventDefault(),(Ee=q.current)==null||Ee.focus())};return window.addEventListener("keydown",oe),()=>window.removeEventListener("keydown",oe)},[]),$e.useEffect(()=>{window.scrollTo({top:0}),E(!1),I(!1)},[i]);const D=oe=>{window.scrollTo({top:0,behavior:"instant"}),r(oe),p(""),d("Todos")},K=(oe,we)=>{const Ee=Xx(oe,we);t(Ce=>{var ft;return{...Ce,active:Ee,history:((ft=Ce.active)==null?void 0:ft.turn)>0?[...Ce.history,ip(Ce.active)]:Ce.history}}),b(null),r("session")},xe=oe=>{oe.status==="finished"?(t(we=>({...we,active:null,history:[...we.history.filter(Ee=>Ee.id!==oe.id),oe]})),J(oe),r("review")):t(we=>({...we,active:oe}))},_e=oe=>{J(oe),r("review")},Me=ee.length?_i.find(oe=>oe.practice.some(we=>Ia(we).includes(Ia(te[1].split(" ")[0])))&&!H.has(oe.id))||_i.find(oe=>!H.has(oe.id))||_i[7]:_i[0];return f.jsxs("div",{className:"app-shell",children:[f.jsxs("div",{className:"main-shell",children:[f.jsx(IC,{page:i,name:o.name,navigate:D,menuOpen:P,setMenuOpen:E,query:h,searchRef:q,onQuery:oe=>{p(oe),r("scenarios")},onPractice:()=>b(Me),onSettings:()=>y(!0),onHelp:()=>F(!0),notifications:N,onNotifications:()=>I(!N),notice:o.active?"Tu conversación quedó en pausa. Puedes retomarla desde el punto en que la dejaste.":`Esta semana has completado ${Te} de ${o.weeklyGoal} prácticas. Encuentra un momento y sigue explorando.`,onNotice:()=>{I(!1),o.active?r("session"):b(Me)}}),ae&&f.jsxs("div",{className:"storage-warning",role:"alert",children:[f.jsx(np,{size:16})," No se pudo guardar en este navegador. Puedes seguir practicando y exportar tu progreso desde Configuración."]}),f.jsxs("main",{className:`main-content ${i==="session"?"session-main":i==="home"?"home-content":""}`,children:[i==="home"&&f.jsx(FC,{store:o,history:ee,currentScenario:Be,recommended:Me,onSelect:b,navigate:D,onResume:()=>r("session"),onLesson:w,ScenarioCard:Ux,motionSuspended:!!(x||T||M||U)}),i==="scenarios"&&f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"page-heading",children:[f.jsxs("div",{children:[f.jsx("div",{className:"eyebrow",children:"TU LABORATORIO DE CONVERSACIONES"}),f.jsxs("h1",{children:["Prepárate para lo que importa",f.jsx("span",{className:"purple-text",children:"."})]}),f.jsx("p",{children:"Cada situación exige algo distinto de ti. Explora una estrategia, observa su efecto y vuelve a intentarlo."})]}),f.jsx("span",{className:"count-chip",children:"12 situaciones reales"})]}),f.jsxs("div",{className:"explore-intro",children:[f.jsx(Kp,{size:23}),f.jsxs("div",{children:[f.jsx("b",{children:ee.length?"Tu siguiente desafío está aquí":"Empieza por lo cotidiano. Crece desde ahí."}),f.jsx("p",{children:"Todos los niveles están disponibles. Los casos iniciales son una buena primera parada."})]})]}),f.jsx("div",{className:"category-tabs",children:Vx.map(oe=>f.jsx("button",{className:l===oe?"active":"",onClick:()=>d(oe),children:oe},oe))}),f.jsxs("div",{className:"filter-row",children:[f.jsxs("span",{children:[Ke.length," ",Ke.length===1?"simulación":"simulaciones",h&&f.jsxs(f.Fragment,{children:[" para «",h,"» ",f.jsx("button",{className:"text-link",onClick:()=>p(""),children:"Limpiar"})]})]}),f.jsxs("div",{children:[f.jsxs("label",{children:[f.jsx(nE,{size:14}),f.jsxs("select",{"aria-label":"Filtrar por dificultad",value:g,onChange:oe=>m(oe.target.value),children:[f.jsx("option",{value:"all",children:"Todos los niveles"}),[1,2,3].map(oe=>f.jsx("option",{value:oe,children:qx[oe]},oe))]})]}),f.jsx("label",{children:f.jsxs("select",{"aria-label":"Ordenar simulaciones",value:S,onChange:oe=>_(oe.target.value),children:[f.jsx("option",{value:"recommended",children:"Recomendadas"}),f.jsx("option",{value:"short",children:"Menor duración"}),f.jsx("option",{value:"level",children:"Por dificultad"}),f.jsx("option",{value:"unplayed",children:"Sin practicar primero"})]})})]})]}),Ke.length?f.jsx("div",{className:"scenario-grid explore-grid",children:Ke.map(oe=>f.jsx(Ux,{scenario:oe,onSelect:b,completed:H.has(oe.id)},oe.id))}):f.jsx(Yp,{icon:Jp,title:"Busquemos otra conversación",text:"No hay casos con esa combinación. Prueba otra palabra o elimina los filtros.",action:"Restablecer filtros",onAction:()=>{p(""),d("Todos"),m("all")}}),f.jsx(Qu,{})]}),i==="library"&&f.jsx(kC,{completed:o.completedLessons,onOpen:w}),i==="progress"&&f.jsx(ZC,{history:ee,evaluations:X,averages:ce,weeklyCount:Te,goal:o.weeklyGoal,onPractice:()=>b(Me),onReview:_e,onLesson:w,weakest:te}),i==="session"&&(o.active&&Be?f.jsx(WC,{session:o.active,scenario:Be,onUpdate:xe,onPause:()=>{r("home"),k("Conversación guardada. Puedes retomarla cuando quieras.")},onHelp:()=>F(!0)}):f.jsx(Yp,{icon:rr,title:"Tu próxima conversación te espera",text:"Elige una situación y entra en la sala de práctica.",action:"Explorar simulaciones",onAction:()=>D("scenarios")})),i==="review"&&L&&f.jsx(YC,{session:L,scenario:_i.find(oe=>oe.id===L.scenarioId),onRetry:()=>b(_i.find(oe=>oe.id===L.scenarioId)),onRewind:oe=>{const we=_i.find(Ce=>Ce.id===L.scenarioId),Ee=dE(L,we,oe);t(Ce=>{var ft;return{...Ce,active:Ee,history:((ft=Ce.active)==null?void 0:ft.turn)>0?[...Ce.history,ip(Ce.active)]:Ce.history}}),r("session")},onProgress:()=>D("progress"),onLesson:w})]})]}),x&&f.jsx(jC,{scenario:x,onClose:()=>b(null),onStart:K,hasActive:!!o.active}),T&&f.jsx(XC,{lesson:T,completed:o.completedLessons.includes(T.id),onClose:()=>w(null),onComplete:()=>{t(oe=>({...oe,completedLessons:[...new Set([...oe.completedLessons,T.id])]})),k("Lección guardada como leída. Ahora, llévala a una conversación.")},onPractice:()=>{const oe=_i.find(we=>we.id===T.scenario);w(null),b(oe)}}),M&&f.jsx(JC,{store:o,onUpdate:t,onReset:()=>{t({...uo,history:[],completedLessons:[]}),J(null),r("home")},onClose:()=>y(!1),onToast:k}),U&&f.jsx($C,{onClose:()=>F(!1)}),V&&f.jsxs("div",{className:"toast",role:"status",children:[f.jsx(qb,{size:18}),V,f.jsx("button",{"aria-label":"Cerrar notificación",onClick:()=>k(""),children:f.jsx($p,{size:15})})]})]})}function qC(){return f.jsx("svg",{width:"30",height:"30",viewBox:"0 0 30 30",fill:"none",children:f.jsx("path",{d:"M15 25V13m0 5C6 18 4 12 5 7c7 0 11 3 10 11Zm0-5c0-7 5-10 11-9 0 7-5 11-11 9Z",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function tp({icon:o,color:t,value:i,label:r,detail:l}){return f.jsxs("div",{className:"stat-card",children:[f.jsxs("div",{className:"stat-top",children:[f.jsx("span",{className:`stat-icon ${t}`,children:f.jsx(o,{size:19})}),f.jsx(Qt,{size:15,className:"muted"})]}),f.jsx("strong",{className:typeof i=="string"?"text-stat":"",children:i}),f.jsx("h3",{children:r}),f.jsx("p",{children:l})]})}function Qu(){return f.jsxs("footer",{className:"page-footer",children:[f.jsxs("span",{children:[f.jsx(HC,{small:!0})," Un espacio para conversar mejor."]}),f.jsx("span",{children:"Práctica con intención. Crece a tu ritmo."})]})}function Yp({icon:o,title:t,text:i,action:r,onAction:l}){return f.jsxs("div",{className:"empty-state",children:[f.jsx("div",{children:f.jsx(o,{size:38,strokeWidth:1.4})}),f.jsx("h2",{children:t}),f.jsx("p",{children:i}),f.jsxs("button",{className:"button primary",onClick:l,children:[r,f.jsx(ha,{size:16})]})]})}function kC({completed:o,onOpen:t}){const[i,r]=$e.useState("Todos");return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"page-heading",children:[f.jsxs("div",{children:[f.jsx("div",{className:"eyebrow",children:"IDEAS QUE SE CONVIERTEN EN HABILIDADES"}),f.jsxs("h1",{children:["El criterio también se aprende",f.jsx("span",{className:"purple-text",children:"."})]}),f.jsx("p",{children:"Ideas que ordenan lo que piensas. Ejemplos que cambian lo que dices."})]}),f.jsxs("span",{className:"count-chip",children:[f.jsx(D_,{size:15}),o.length," de ",ua.length," lecciones leídas"]})]}),f.jsxs("div",{className:"library-feature",children:[f.jsxs("div",{className:"library-feature-art",children:[f.jsx(D_,{size:64,strokeWidth:1}),f.jsx(Nl,{size:22})]}),f.jsxs("div",{children:[f.jsx("span",{className:"eyebrow",children:"EL FUNDAMENTO DE UN BUEN ACUERDO"}),f.jsxs("h2",{children:["Haz mejores preguntas.",f.jsx("br",{}),"Descubre mejores opciones."]}),f.jsx("p",{children:"Empieza por entender qué hay detrás de lo que la otra persona pide."}),f.jsxs("button",{className:"button primary",onClick:()=>t(ua[0]),children:["Explorar los intereses",f.jsx(Qt,{size:16})]})]})]}),f.jsx("div",{className:"category-tabs",children:["Todos","Fundamentos","Preparación","Comunicación","Estrategia"].map(l=>f.jsx("button",{className:i===l?"active":"",onClick:()=>r(l),children:l},l))}),f.jsx("div",{className:"lesson-grid",children:ua.filter(l=>i==="Todos"||l.category===i).map(l=>{const d=Zu[l.icon];return f.jsxs("button",{className:"lesson-card",onClick:()=>t(l),children:[f.jsxs("div",{className:"lesson-card-top",children:[f.jsx("span",{className:"lesson-icon",children:f.jsx(d,{size:22})}),o.includes(l.id)?f.jsxs("span",{className:"read-badge",children:[f.jsx(Rs,{size:13}),"Leída"]}):f.jsxs("span",{className:"muted small-text",children:[l.time," min de lectura"]})]}),f.jsx("span",{className:"section-eyebrow",children:l.category}),f.jsx("h3",{children:l.title}),f.jsx("p",{children:l.short}),f.jsxs("span",{className:"text-link",children:["Aprender y practicar",f.jsx(Qt,{size:15})]})]},l.id)})}),f.jsx(Qu,{})]})}function XC({lesson:o,completed:t,onClose:i,onComplete:r,onPractice:l}){const d=Zu[o.icon];return f.jsxs(bo,{onClose:i,className:"lesson-modal",titleId:"lesson-title",children:[f.jsxs("div",{className:"lesson-heading",children:[f.jsx("span",{className:"lesson-icon",children:f.jsx(d,{size:25})}),f.jsxs("div",{className:"eyebrow",children:[o.category," · ",o.time," MIN DE LECTURA"]}),f.jsx("h2",{id:"lesson-title",children:o.title}),f.jsx("p",{children:o.short})]}),f.jsxs("div",{className:"lesson-content",children:[f.jsx("p",{children:o.intro}),f.jsxs("blockquote",{children:[f.jsx(Jb,{size:22}),o.principle]}),f.jsx("h3",{children:"Así se ve en una conversación"}),f.jsxs("div",{className:"example before",children:[f.jsx("span",{children:"UNA INTERVENCIÓN POR MEJORAR"}),f.jsxs("p",{children:["«",o.example.before,"»"]})]}),f.jsxs("div",{className:"example after",children:[f.jsx("span",{children:"UNA ALTERNATIVA MÁS ÚTIL"}),f.jsxs("p",{children:["«",o.example.after,"»"]})]}),f.jsx("h3",{children:"Pruébalo en tres pasos"}),f.jsx("ol",{className:"lesson-steps",children:o.steps.map((h,p)=>f.jsxs("li",{children:[f.jsx("span",{children:p+1}),h]},h))}),f.jsxs("div",{className:"exercise",children:[f.jsx(go,{size:22}),f.jsxs("div",{children:[f.jsx("h4",{children:"Tu siguiente pequeño reto"}),f.jsx("p",{children:o.exercise})]})]})]}),f.jsxs("div",{className:"modal-footer",children:[f.jsxs("button",{className:`button ${t?"completed-button":"secondary"}`,disabled:t,onClick:r,children:[f.jsx(Rs,{size:16}),t?"Lección leída":"Marcar como leída"]}),f.jsxs("button",{className:"button primary",onClick:l,children:["Practicar este concepto",f.jsx(ha,{size:16})]})]})]})}function WC({session:o,scenario:t,onUpdate:i,onPause:r,onHelp:l}){const[d,h]=$e.useState(""),[p,g]=$e.useState(!1),[m,S]=$e.useState(!1),[_,x]=$e.useState(!1),[b,T]=$e.useState(!1),w=$e.useRef(),M=$e.useRef(),y=$e.useRef();$e.useEffect(()=>{var N;(N=w.current)==null||N.scrollIntoView({behavior:"smooth",block:"nearest"})},[o.turn,p]),$e.useEffect(()=>()=>clearTimeout(M.current),[]);const U=(N,I)=>{!N.trim()||p||(g(!0),h(""),M.current=setTimeout(()=>{var P;i(Wx(o,t,N.trim(),I)),g(!1),(P=y.current)==null||P.focus()},500))},F=o.events.at(-1);return f.jsxs("div",{className:"training-room",children:[f.jsxs("div",{className:"room-top",children:[f.jsxs("button",{className:"text-link muted",disabled:p,onClick:r,children:[f.jsx(zx,{size:16}),"Guardar y salir"]}),f.jsxs("span",{children:[f.jsx("span",{className:"live-dot"})," PRÁCTICA EN CURSO"]}),f.jsxs("button",{className:"text-link muted",onClick:l,children:[f.jsx(Ix,{size:16}),"Cómo funciona"]})]}),f.jsxs("div",{className:"room-heading",children:[f.jsxs("div",{children:[f.jsx("h1",{children:t.title}),f.jsx("p",{children:t.subtitle})]}),f.jsx(hm,{level:t.level})]}),f.jsxs("div",{className:"room-layout",children:[f.jsxs("section",{className:"conversation",children:[f.jsxs("div",{className:"conversation-top",children:[f.jsx(Wp,{person:t.person}),f.jsxs("div",{children:[f.jsx("h3",{children:t.person.name}),f.jsx("p",{children:t.person.role})]}),f.jsx("span",{className:"person-style",children:t.person.style})]}),f.jsxs("div",{className:"chat-messages",role:"log","aria-label":"Conversación de práctica","aria-live":"polite",children:[o.messages.map((N,I)=>N.role==="system"?f.jsx("div",{className:"system-message",children:N.text},I):f.jsxs("div",{className:`message message-${N.role}`,children:[N.role==="person"&&f.jsx(Wp,{person:t.person,size:"tiny"}),f.jsxs("div",{children:[f.jsxs("span",{className:"message-name",children:[N.role==="user"?"Tú":t.person.name.split(" ")[0],f.jsx("span",{children:N.turn?`Intervención ${N.turn}`:"Inicio de la conversación"})]}),f.jsx("div",{className:"message-bubble",children:N.text.split(`
`).map((P,E)=>f.jsx("p",{children:P},E))})]}),N.role==="user"&&f.jsx("span",{className:"self-avatar",children:"Tú"})]},I)),p&&f.jsxs("div",{className:"typing",children:[f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{}),f.jsx("span",{className:"sr-only",children:"Preparando la respuesta…"})]}),f.jsx("div",{ref:w})]}),(F==null?void 0:F.unexpected)&&f.jsxs("div",{className:"unexpected-note",children:[f.jsx(Nl,{size:15}),f.jsx("span",{children:"El contexto cambió. Revisa la nueva información antes de responder."})]}),f.jsxs("div",{className:"composer",children:[f.jsxs("div",{className:"suggestion-heading",children:[f.jsxs("span",{children:[f.jsx(Hx,{size:14})," Una forma de continuar"]}),f.jsx("span",{children:"o escribe con tus palabras"})]}),f.jsx("div",{className:"suggested-responses",children:fE(o,t).map((N,I)=>f.jsxs("button",{disabled:p,onClick:()=>U(N.text,N.intent),children:[f.jsx("span",{children:String(I+1).padStart(2,"0")}),f.jsxs("div",{children:[f.jsx("b",{children:N.label}),f.jsx("p",{children:N.text})]}),f.jsx(Qt,{size:15})]},`${o.turn}-${I}`))}),f.jsxs("form",{onSubmit:N=>{N.preventDefault(),U(d)},children:[f.jsx("label",{className:"sr-only",htmlFor:"intervention",children:"Tu intervención"}),f.jsx("textarea",{id:"intervention",ref:y,value:d,onChange:N=>h(N.target.value),maxLength:1600,placeholder:"¿Qué le dirías? Encuentra tus propias palabras…",rows:2,disabled:p,onKeyDown:N=>{N.key==="Enter"&&!N.shiftKey&&(N.preventDefault(),U(d))}}),f.jsx("button",{className:"send-button",type:"submit",disabled:!d.trim()||p,"aria-label":"Enviar intervención",children:f.jsx(eE,{size:18})})]}),f.jsxs("div",{className:"composer-footer",children:[f.jsx("span",{children:"Enter para enviar · Shift + Enter para otra línea"}),f.jsxs("span",{children:[d.length,"/1600"]})]})]})]}),f.jsxs("aside",{className:"room-aside",children:[f.jsxs("div",{className:"session-objective",children:[f.jsxs("span",{className:"section-eyebrow",children:[f.jsx(go,{size:14}),"TU NORTE"]}),f.jsx("h3",{children:"Lo que quieres conseguir"}),f.jsx("p",{children:t.objective}),f.jsxs("button",{className:"text-link",onClick:()=>S(!m),children:[f.jsx(Gx,{size:15}),m?"Ocultar preparación":"Ver mi preparación",f.jsx(L_,{size:14})]}),m&&f.jsxs("div",{className:"session-notes",children:[f.jsx("h4",{children:"Tu contexto"}),f.jsx("p",{children:t.context}),[["objective","Mi objetivo"],["alternative","Mi alternativa"],["limit","Mi límite"]].map(([N,I])=>f.jsxs("div",{children:[f.jsx("h4",{children:I}),f.jsx("p",{children:o.preparation[N]||"No lo anotaste antes de comenzar."})]},N)),f.jsx("h4",{children:"Restricciones"}),f.jsx("ul",{children:t.constraints.map(N=>f.jsx("li",{children:N},N))})]})]}),f.jsxs("div",{className:"climate-card",children:[f.jsx("span",{className:"section-eyebrow",children:"EL PULSO DE LA CONVERSACIÓN"}),f.jsx("h3",{children:o.trust>=70?"Hay espacio para construir":o.trust<35?"La relación necesita atención":"Se están conociendo"}),f.jsx("p",{children:"Las decisiones influyen en la disposición de tu interlocutor."}),f.jsxs("div",{className:"climate-label",children:[f.jsx("span",{children:"Apertura"}),f.jsx("b",{children:o.trust>=70?"Alta":o.trust<35?"Baja":"En desarrollo"})]}),f.jsx("div",{className:"climate-track",children:f.jsx("span",{style:{width:`${o.trust}%`}})}),f.jsxs("div",{className:"climate-label",children:[f.jsx("span",{children:"Tensión"}),f.jsx("b",{children:o.tension>50?"Elevada":o.tension>25?"Moderada":"Baja"})]}),f.jsx("div",{className:"climate-track tension",children:f.jsx("span",{style:{width:`${o.tension}%`}})}),f.jsx("p",{className:"climate-footnote",children:"Señales del simulador, no una lectura psicológica."})]}),o.offer&&f.jsxs("div",{className:"pending-offer",children:[f.jsx(Cl,{size:19}),f.jsx("h3",{children:"Propuesta sobre la mesa"}),f.jsx("p",{children:o.offer.text}),f.jsx("span",{children:"Pendiente de tu confirmación"})]}),f.jsxs("button",{className:`coach-toggle ${b?"active":""}`,onClick:()=>T(!b),children:[f.jsx(Nl,{size:17}),"Pista de entrenamiento",f.jsx(L_,{size:15})]}),b&&f.jsx("div",{className:"coach-card",children:f.jsx("p",{children:(F==null?void 0:F.insight)||"Empieza por comprender qué necesita la otra parte. Una pregunta abierta puede darte más información que una propuesta inmediata."})}),f.jsxs("div",{className:"session-bottom",children:[f.jsxs("span",{children:[f.jsx(rr,{size:15}),o.turn," de 12 intervenciones"]}),f.jsxs("button",{className:"button secondary",disabled:p||o.turn===0,onClick:()=>x(!0),children:[f.jsx(U_,{size:15}),"Finalizar y analizar"]}),f.jsx("p",{children:"Puedes terminar sin acuerdo. Saber cuándo parar también se entrena."})]})]})]}),_&&f.jsxs(bo,{onClose:()=>x(!1),className:"confirm-modal",titleId:"finish-title",children:[f.jsx("span",{className:"modal-symbol",children:f.jsx(U_,{size:28})}),f.jsx("h2",{id:"finish-title",children:"¿Revisamos esta conversación?"}),f.jsx("p",{children:o.offer?"Hay una propuesta pendiente, pero aún no está confirmada. Puedes seguir negociando o terminar sin acuerdo y analizar tus decisiones.":"El resultado se guardará como una conversación sin acuerdo. También aprenderás de lo que quedó abierto."}),f.jsxs("div",{className:"confirm-actions",children:[f.jsx("button",{className:"button secondary",onClick:()=>x(!1),children:"Seguir conversando"}),f.jsxs("button",{className:"button primary",onClick:()=>i(ip(o)),children:["Ver mi análisis",f.jsx(ha,{size:15})]})]})]})]})}function YC({session:o,scenario:t,onRetry:i,onRewind:r,onProgress:l,onLesson:d}){const h=Yx(o),[p,g]=$e.useState("analysis"),[m,S]=$e.useState(null),[_,x]=$e.useState(null),b=o.events.filter(y=>y.effects.length>=2).slice(0,3),T=[!o.discovered&&"No exploraste los intereses antes de buscar una solución.",!o.heard&&"Faltó comprobar cómo estaba viviendo la situación la otra persona.",!o.conditional&&"Podías vincular tus concesiones a condiciones explícitas.",!o.bounded&&"Tus límites no quedaron expresados de forma observable.",!h.preparation&&"No dejaste un objetivo, una alternativa ni un límite en tu preparación."].filter(Boolean),w=ua.find(y=>y.skill===h.weakest[0][0])||ua[0],M=o.agreed?"Un acuerdo para seguir construyendo":o.reason==="relationship"?"La tensión cerró la conversación":"Una conversación con asuntos abiertos";return f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"review-top",children:[f.jsxs("button",{className:"text-link muted",onClick:l,children:[f.jsx(zx,{size:15}),"Mi progreso"]}),f.jsxs("button",{className:"button secondary compact",onClick:()=>Qx(`pacto-${t.id}-analisis.json`,JSON.stringify({scenario:t.title,session:o,analysis:{scores:h.scores,average:h.average}},null,2)),children:[f.jsx(Fx,{size:15}),"Exportar análisis"]})]}),f.jsx("div",{className:"page-heading",children:f.jsxs("div",{children:[f.jsx("div",{className:"eyebrow",children:"CADA CONVERSACIÓN DEJA UN APRENDIZAJE"}),f.jsxs("h1",{children:["Hagamos una pausa para aprender",f.jsx("span",{className:"purple-text",children:"."})]}),f.jsxs("p",{children:[t.title," · ",o.turn," ",o.turn===1?"intervención":"intervenciones"," · ",$x(o.finishedAt,{day:"numeric",month:"long"})]})]})}),f.jsxs("section",{className:`outcome-banner ${o.agreed?"agreed":""}`,children:[f.jsx("span",{className:"outcome-icon",children:o.agreed?f.jsx(Cl,{size:31}):f.jsx(Kp,{size:31})}),f.jsxs("div",{children:[f.jsx("span",{className:"section-eyebrow",children:o.agreed?"ACUERDO CONFIRMADO":"SIN ACUERDO CONFIRMADO"}),f.jsx("h2",{children:M}),f.jsx("p",{children:o.agreed?o.offer.text:o.reason==="relationship"?"Las descalificaciones deterioraron la confianza. Una pausa y una reparación pueden abrir una conversación diferente.":o.offer?`Quedó pendiente de confirmar: ${o.offer.text}.`:"Todavía faltaba convertir los intereses en una propuesta concreta y viable."})]})]}),f.jsxs("div",{className:"review-tabs",children:[f.jsxs("button",{className:p==="analysis"?"active":"",onClick:()=>g("analysis"),children:[f.jsx(Nl,{size:16}),"Tu análisis"]}),f.jsxs("button",{className:p==="conversation"?"active":"",onClick:()=>g("conversation"),children:[f.jsx(rr,{size:16}),"Conversación y alternativas"]})]}),p==="analysis"?f.jsxs("div",{className:"review-layout",children:[f.jsxs("div",{children:[f.jsxs("section",{className:"review-panel",children:[f.jsx("h2",{children:"Lo que pusiste en práctica"}),f.jsx("p",{className:"muted",children:"Una lectura orientativa basada en tus decisiones observables."}),f.jsx("div",{className:"skills-bars",children:ai.map(([y,U])=>f.jsxs("button",{className:"skill-row",onClick:()=>x(_===y?null:y),"aria-expanded":_===y,children:[f.jsxs("div",{className:"skill-row-top",children:[f.jsxs("span",{children:[U,f.jsx(wu,{size:12})]}),f.jsxs("b",{children:[h.scores[y],f.jsx("span",{children:"/100"})]})]}),f.jsx("div",{className:"skill-track",children:f.jsx("span",{style:{width:`${h.scores[y]}%`}})}),_===y&&f.jsxs("div",{className:"skill-evidence",children:[f.jsx("p",{children:BC[y]}),f.jsx("p",{children:y==="preparation"?`${h.preparation} de 3 notas con contenido antes de comenzar.`:y==="agreement"?o.agreed?"Aceptaste una propuesta con condiciones conocidas.":"No hubo confirmación de un acuerdo.":y==="emotion"?`${h.pressure} intervenciones con descalificaciones; ${h.evidence[y].length} con señales de respeto o reparación. La ausencia de descalificaciones no permite medir tus emociones internas.`:h.evidence[y].length?`Señales en las intervenciones ${h.evidence[y].map(F=>F.turn).join(", ")}.`:"No hubo una señal explícita de esta habilidad. Eso no significa que no la tengas."})]})]},y))}),f.jsxs("div",{className:"analysis-disclaimer",children:[f.jsx(wu,{size:15}),f.jsx("p",{children:"Estas señales ayudan a reflexionar, no son un diagnóstico ni una evaluación profesional. El motor local reconoce intenciones y puede pasar por alto matices del texto libre."})]})]}),f.jsxs("section",{className:"review-panel",children:[f.jsx("h2",{children:"Qué funcionó y por qué"}),b.length?b.map(y=>f.jsxs("div",{className:"evidence-item",children:[f.jsx("span",{children:f.jsx(Rs,{size:16})}),f.jsxs("div",{children:[f.jsxs("h4",{children:[O_[y.intent]," ",f.jsxs("small",{children:["· Intervención ",y.turn]})]}),f.jsxs("blockquote",{children:["«",y.text,"»"]}),f.jsx("p",{children:y.insight})]})]},y.turn)):f.jsx("p",{className:"muted",children:"Esta conversación aún no dejó señales suficientes de exploración, escucha o intercambios. Puedes volver al primer turno y probar una pregunta abierta."})]}),f.jsxs("section",{className:"review-panel",children:[f.jsx("h2",{children:"Oportunidades y riesgos"}),T.length?f.jsx("ul",{className:"opportunity-list",children:T.map(y=>f.jsxs("li",{children:[f.jsx(Qt,{size:17}),y]},y))}):f.jsx("p",{children:"Exploraste intereses, escuchaste, expresaste límites y condicionaste tus intercambios. Tu siguiente reto es comprobar estos comportamientos sin apoyarte en las sugerencias."}),o.events.filter(y=>y.risk).map(y=>f.jsxs("div",{className:"risk-note",children:[f.jsx(np,{size:18}),f.jsxs("p",{children:["Intervención ",y.turn,": ",y.risk]})]},y.turn)),h.pressure>0&&f.jsxs("div",{className:"risk-note",children:[f.jsx(np,{size:18}),f.jsx("p",{children:"La presión personal redujo la confianza y retiró ofertas. Repara el impacto antes de volver a las condiciones."})]}),o.agreed&&o.offer.amount&&t.target&&f.jsxs("div",{className:"risk-note neutral",children:[f.jsx(wu,{size:18}),f.jsxs("p",{children:["La cifra acordada fue ",f.jsxs("b",{children:["$",o.offer.amount.toLocaleString("es-CO")," ",t.unit]}),", frente a tu referencia de $",t.target.toLocaleString("es-CO"),". Evalúa también las condiciones complementarias y tu alternativa; conseguir un sí no demuestra por sí solo que el resultado te convenga."]})]})]})]}),f.jsxs("aside",{children:[f.jsxs("section",{className:"review-next",children:[f.jsx("div",{className:"insight-icon",children:f.jsx(qC,{})}),f.jsx("span",{className:"section-eyebrow",children:"TU SIGUIENTE PASO"}),f.jsxs("h3",{children:[h.weakest[0][1]," con más intención"]}),f.jsx("p",{children:"En la siguiente conversación, céntrate en una habilidad a la vez. Empieza por una herramienta concreta."}),f.jsxs("button",{className:"button secondary",onClick:()=>d(w),children:["Abrir la lección",f.jsx(Qt,{size:15})]})]}),f.jsxs("section",{className:"retry-card",children:[f.jsx(Du,{size:24}),f.jsx("h3",{children:"¿Y si lo intentas de otra manera?"}),f.jsx("p",{children:"Vuelve al caso con una estrategia nueva. Cada intento se guarda por separado."}),f.jsxs("button",{className:"button primary",onClick:i,children:["Volver a practicar",f.jsx(ha,{size:15})]}),f.jsx("button",{className:"text-link",onClick:()=>g("conversation"),children:"Explorar un momento concreto"})]})]})]}):f.jsxs("section",{className:"review-panel conversation-review",children:[f.jsx("h2",{children:"Los momentos que construyeron el resultado"}),f.jsx("p",{className:"muted",children:"Revisa cada decisión y prueba una alternativa desde el mismo punto. Tu intento original se conserva."}),f.jsxs("div",{className:"opening-review",children:[f.jsx("b",{children:t.person.name}),f.jsx("p",{children:t.opening})]}),o.events.map(y=>{const U=hE(y,t);return f.jsxs("article",{className:"turn-review",children:[f.jsxs("div",{className:"turn-review-heading",children:[f.jsxs("span",{children:["INTERVENCIÓN ",y.turn]}),f.jsx("span",{children:O_[y.intent]})]}),f.jsx("h4",{children:"Tu intervención"}),f.jsxs("blockquote",{children:["«",y.text,"»"]}),f.jsxs("h4",{children:["La respuesta de ",t.person.name.split(" ")[0]]}),f.jsx("p",{children:y.reply}),f.jsxs("div",{className:"turn-learning",children:[f.jsx(Hx,{size:19}),f.jsxs("div",{children:[f.jsx("h4",{children:U.title}),f.jsx("p",{children:y.insight}),f.jsx("span",{children:"UNA ALTERNATIVA PARA EXPLORAR"}),f.jsxs("p",{children:["«",U.better,"»"]})]})]}),f.jsxs("button",{className:"button secondary compact",onClick:()=>S(y.turn),children:[f.jsx(Du,{size:14}),"Probar otra respuesta desde aquí"]})]},y.turn)})]}),m&&f.jsxs(bo,{onClose:()=>S(null),className:"confirm-modal",titleId:"rewind-title",children:[f.jsx("span",{className:"modal-symbol",children:f.jsx(Du,{size:28})}),f.jsx("h2",{id:"rewind-title",children:"Una decisión, otro camino"}),f.jsxs("p",{children:["Volverás al momento anterior a la intervención ",m,". El intento original se conserva."," Si hay una práctica en pausa con intervenciones, se guardará como finalizada sin acuerdo."]}),f.jsxs("div",{className:"confirm-actions",children:[f.jsx("button",{className:"button secondary",onClick:()=>S(null),children:"Cancelar"}),f.jsxs("button",{className:"button primary",onClick:()=>r(m),children:["Explorar alternativa",f.jsx(ha,{size:15})]})]})]}),f.jsx(Qu,{})]})}function ZC({history:o,evaluations:t,averages:i,weeklyCount:r,goal:l,onPractice:d,onReview:h,onLesson:p,weakest:g}){const[m,S]=$e.useState("all"),_=o.slice().reverse().filter(b=>m==="all"||(m==="agreed"?b.agreed:!b.agreed)),x=ua.find(b=>b.skill===g[0])||ua[0];return f.jsxs(f.Fragment,{children:[f.jsx("div",{className:"page-heading",children:f.jsxs("div",{children:[f.jsx("div",{className:"eyebrow",children:"LO QUE PRACTICAS, CRECE"}),f.jsxs("h1",{children:["Tu práctica deja huella",f.jsx("span",{className:"purple-text",children:"."})]}),f.jsx("p",{children:"Vuelve a tus decisiones. Reconoce lo que funciona. Elige qué quieres desarrollar después."})]})}),o.length?f.jsxs(f.Fragment,{children:[f.jsxs("div",{className:"progress-stats",children:[f.jsx(tp,{icon:rr,color:"purple",value:o.length,label:"Prácticas completadas",detail:`${new Set(o.map(b=>b.scenarioId)).size} escenarios explorados`}),f.jsx(tp,{icon:Cl,color:"mint",value:o.filter(b=>b.agreed).length,label:"Acuerdos confirmados",detail:"Un acuerdo también necesita ser sostenible"}),f.jsx(tp,{icon:go,color:"peach",value:`${r} / ${l}`,label:"Prácticas esta semana",detail:"Tu objetivo se ajusta en Configuración"})]}),f.jsxs("div",{className:"progress-panels",children:[f.jsxs("section",{className:"review-panel",children:[f.jsx("h2",{children:"Tu mapa de habilidades"}),f.jsx("p",{className:"muted",children:"Promedio de señales observadas en tus prácticas."}),f.jsx(QC,{averages:i}),f.jsx("p",{className:"small-text muted",children:"Un valor bajo indica poca evidencia explícita, no falta de capacidad. Compara intentos del mismo caso para obtener más contexto."})]}),f.jsxs("section",{className:"review-panel evolution-panel",children:[f.jsx("h2",{children:"Lo que cuenta tu recorrido"}),f.jsxs("p",{className:"muted",children:["Señales orientativas de las últimas ",Math.min(8,o.length)," prácticas."]}),f.jsx(KC,{evaluations:t.slice(-8)}),f.jsxs("div",{className:"recommendation",children:[f.jsx("span",{className:"lesson-icon",children:f.jsx(go,{size:21})}),f.jsxs("div",{children:[f.jsx("span",{className:"section-eyebrow",children:"UN FOCO PARA TU PRÓXIMA PRÁCTICA"}),f.jsx("h3",{children:g[1]}),f.jsx("p",{children:x.short}),f.jsxs("button",{className:"text-link",onClick:()=>p(x),children:["Explorar la herramienta",f.jsx(ha,{size:14})]})]})]})]})]}),f.jsxs("section",{className:"review-panel history-panel",children:[f.jsxs("div",{className:"section-heading",children:[f.jsxs("div",{children:[f.jsx("h2",{children:"Tu historial de conversaciones"}),f.jsx("p",{children:"Vuelve a tus decisiones y explora otros caminos."})]}),f.jsxs("select",{"aria-label":"Filtrar historial",value:m,onChange:b=>S(b.target.value),children:[f.jsx("option",{value:"all",children:"Todos los desenlaces"}),f.jsx("option",{value:"agreed",children:"Con acuerdo"}),f.jsx("option",{value:"open",children:"Sin acuerdo"})]})]}),_.length?_.map(b=>{const T=_i.find(M=>M.id===b.scenarioId),w=Zu[T.icon];return f.jsxs("button",{className:"history-row",onClick:()=>h(b),children:[f.jsx("span",{className:`stat-icon ${T.color}`,children:f.jsx(w,{size:20})}),f.jsxs("div",{children:[f.jsx("h3",{children:T.title}),f.jsxs("p",{children:[$x(b.finishedAt)," · ",b.turn," intervenciones"]})]}),f.jsx("span",{className:`outcome-chip ${b.agreed?"success":""}`,children:b.agreed?"Acuerdo confirmado":"Sin acuerdo"}),f.jsxs("span",{className:"history-review",children:["Ver análisis",f.jsx(Qt,{size:15})]})]},b.id)}):f.jsx("p",{className:"muted",children:"No hay prácticas con este desenlace."})]})]}):f.jsxs(f.Fragment,{children:[f.jsx(Yp,{icon:Vb,title:"Tu recorrido empieza con una conversación",text:"Al terminar tu primera práctica verás las habilidades que utilizaste, tus oportunidades de mejora y un historial para comparar estrategias.",action:"Empezar mi recorrido",onAction:d}),f.jsx("div",{className:"progress-principles",children:[["Observa","Qué preguntas, cómo escuchas y qué propones."],["Reflexiona","Qué decisiones ayudaron y cuáles puedes cambiar."],["Vuelve a probar","Experimenta sin consecuencias fuera de la práctica."]].map(([b,T],w)=>f.jsxs("div",{children:[f.jsxs("span",{children:["0",w+1]}),f.jsx("h3",{children:b}),f.jsx("p",{children:T})]},b))})]}),f.jsx(Qu,{})]})}function QC({averages:o}){const r=(l,d)=>{const h=l*2*Math.PI/ai.length-Math.PI/2;return[170+Math.cos(h)*112*d,170+Math.sin(h)*112*d]};return f.jsxs("svg",{className:"radar-chart",viewBox:"0 0 340 340",role:"img","aria-label":`Mapa de habilidades: ${ai.map(([l,d])=>`${d} ${o[l]} de 100`).join(", ")}`,children:[[.25,.5,.75,1].map(l=>f.jsx("polygon",{points:ai.map((d,h)=>r(h,l).join(",")).join(" "),fill:l===1?"#fbfafc":"none",stroke:"#e7e2ef"},l)).reverse(),ai.map(([l,d],h)=>f.jsxs("g",{children:[f.jsx("line",{x1:170,y1:170,x2:r(h,1)[0],y2:r(h,1)[1],stroke:"#e7e2ef"}),f.jsx("text",{x:r(h,1.27)[0],y:r(h,1.27)[1],textAnchor:"middle",dominantBaseline:"middle",children:d})]},l)),f.jsx("polygon",{points:ai.map(([l],d)=>r(d,o[l]/100).join(",")).join(" "),fill:"#9a83e1",fillOpacity:".24",stroke:"#8064cf",strokeWidth:"2"}),ai.map(([l],d)=>f.jsx("circle",{cx:r(d,o[l]/100)[0],cy:r(d,o[l]/100)[1],r:"3",fill:"#8064cf"},l))]})}function KC({evaluations:o}){const l=o.map((d,h)=>[24+(o.length===1?186:h/(o.length-1)*372),136-d.average/100*112]);return f.jsxs("div",{className:"trend-wrap",children:[f.jsxs("svg",{viewBox:"0 0 420 160",role:"img","aria-label":o.map((d,h)=>`Práctica ${h+1}: ${d.average} de 100 señales orientativas`).join("; "),children:[[25,50,75].map(d=>f.jsxs("g",{children:[f.jsx("line",{x1:24,y1:136-d/100*112,x2:396,y2:136-d/100*112,stroke:"#ece8f2",strokeDasharray:"4 4"}),f.jsx("text",{x:"0",y:136-d/100*112+3,children:d})]},d)),l.length>1&&f.jsx("polyline",{points:l.map(d=>d.join(",")).join(" "),fill:"none",stroke:"#8c72d8",strokeWidth:"2.5"}),l.map(([d,h],p)=>f.jsxs("g",{children:[f.jsx("circle",{cx:d,cy:h,r:"5",fill:"#8c72d8",stroke:"white",strokeWidth:"2"}),f.jsx("text",{x:d,y:156,textAnchor:"middle",children:p+1})]},p))]}),f.jsx("p",{className:"small-text muted",children:o.length===1?"Una primera referencia. La evolución aparecerá con nuevas prácticas.":"Promedio orientativo por práctica. Los casos y niveles pueden variar."})]})}function JC({store:o,onUpdate:t,onReset:i,onClose:r,onToast:l}){const[d,h]=$e.useState(o.name),[p,g]=$e.useState(o.weeklyGoal),[m,S]=$e.useState(!1);return f.jsxs(bo,{onClose:r,className:"settings-modal",titleId:"settings-title",children:[f.jsx("span",{className:"eyebrow",children:"A TU MEDIDA"}),f.jsx("h2",{id:"settings-title",children:"Tu espacio personal"}),f.jsx("p",{className:"muted",children:"Haz que practicar forme parte de tu rutina."}),f.jsxs("form",{onSubmit:_=>{_.preventDefault(),t(x=>({...x,name:d.trim().slice(0,32),weeklyGoal:p})),l("Preferencias guardadas. Este espacio es tuyo."),r()},children:[f.jsxs("label",{children:["¿Cómo te llamamos?",f.jsx("input",{required:!0,maxLength:32,value:d,onChange:_=>h(_.target.value),placeholder:"Tu nombre"})]}),f.jsxs("label",{children:["Tu objetivo semanal",f.jsx("select",{value:p,onChange:_=>g(Number(_.target.value)),children:[1,2,3,4,5,7].map(_=>f.jsxs("option",{value:_,children:[_," ",_===1?"práctica":"prácticas"," por semana"]},_))})]}),f.jsx("p",{className:"small-text muted",children:"Tus conversaciones y preferencias se guardan solo en este navegador. No se envían a un servidor ni se sincronizan entre dispositivos."}),f.jsxs("button",{type:"submit",disabled:!d.trim(),className:"button primary",children:["Guardar preferencias",f.jsx(Rs,{size:16})]})]}),f.jsxs("div",{className:"settings-data",children:[f.jsx("h3",{children:"Tus datos, bajo tu control"}),f.jsxs("button",{className:"button secondary",onClick:()=>Qx("pacto-mi-progreso.json",JSON.stringify(o,null,2)),children:[f.jsx(Fx,{size:16}),"Exportar mi progreso"]}),f.jsxs("button",{className:"text-link danger",onClick:()=>S(!0),children:[f.jsx(iE,{size:15}),"Borrar todos mis datos"]}),m&&f.jsxs("div",{className:"delete-confirm",children:[f.jsx("p",{children:"Se borrarán el historial, la conversación en pausa y las lecciones leídas de este navegador. Puedes exportarlos antes."}),f.jsx("button",{className:"button danger-button",onClick:()=>{i(),l("Datos locales borrados. Puedes empezar un nuevo recorrido."),r()},children:"Sí, borrar mis datos"}),f.jsx("button",{className:"text-link",onClick:()=>S(!1),children:"Conservar mis datos"})]})]})]})}function $C({onClose:o}){return f.jsxs(bo,{onClose:o,className:"help-modal",titleId:"help-title",children:[f.jsx("span",{className:"modal-symbol",children:f.jsx(Bx,{size:31})}),f.jsx("span",{className:"eyebrow",children:"BIENVENIDO A PACTO"}),f.jsx("h2",{id:"help-title",children:"Un espacio para practicar de verdad"}),f.jsx("p",{children:"Prepara tu estrategia, conversa y vuelve a mirar tus decisiones con perspectiva."}),f.jsxs("ol",{className:"lesson-steps",children:[f.jsxs("li",{children:[f.jsx("span",{children:"1"}),f.jsxs("div",{children:[f.jsx("b",{children:"Elige y prepara"}),f.jsx("p",{children:"Revisa los objetivos, las restricciones y los intereses. Anota tu alternativa y tu límite."})]})]}),f.jsxs("li",{children:[f.jsx("span",{children:"2"}),f.jsxs("div",{children:[f.jsx("b",{children:"Entra en la conversación"}),f.jsx("p",{children:"Usa las sugerencias o escribe con tus palabras. Las preguntas, la escucha, las propuestas y la presión cambian la apertura y las respuestas del personaje."})]})]}),f.jsxs("li",{children:[f.jsx("span",{children:"3"}),f.jsxs("div",{children:[f.jsx("b",{children:"Aprende y prueba otra vía"}),f.jsx("p",{children:"Recibe una revisión con evidencias de tus turnos. Puedes volver a un momento concreto sin perder el intento original."})]})]})]}),f.jsxs("div",{className:"help-transparency",children:[f.jsx(wu,{size:20}),f.jsxs("div",{children:[f.jsx("h3",{children:"Cómo funciona esta versión"}),f.jsx("p",{children:"El simulador utiliza un motor local de intenciones y estados, con respuestas redactadas para cada caso. No utiliza inteligencia artificial generativa ni interpreta todos los matices del texto libre. No necesitas claves ni una cuenta. Las puntuaciones son orientativas y tu historial se guarda solo en este navegador."})]})]}),f.jsxs("button",{className:"button primary",onClick:o,children:["Vamos a practicar",f.jsx(ha,{size:16})]})]})}Pb.createRoot(document.getElementById("root")).render(f.jsx(Nb.StrictMode,{children:f.jsx(VC,{})}));
