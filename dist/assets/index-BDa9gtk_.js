function Hp(e,t){for(var r=0;r<t.length;r++){const o=t[r];if(typeof o!="string"&&!Array.isArray(o)){for(const i in o)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(o,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>o[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function Yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Jd={exports:{}},Ci={},Zd={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uo=Symbol.for("react.element"),Gp=Symbol.for("react.portal"),Vp=Symbol.for("react.fragment"),Qp=Symbol.for("react.strict_mode"),Xp=Symbol.for("react.profiler"),qp=Symbol.for("react.provider"),Kp=Symbol.for("react.context"),Jp=Symbol.for("react.forward_ref"),Zp=Symbol.for("react.suspense"),ef=Symbol.for("react.memo"),tf=Symbol.for("react.lazy"),bl=Symbol.iterator;function rf(e){return e===null||typeof e!="object"?null:(e=bl&&e[bl]||e["@@iterator"],typeof e=="function"?e:null)}var ec={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tc=Object.assign,rc={};function mn(e,t,r){this.props=e,this.context=t,this.refs=rc,this.updater=r||ec}mn.prototype.isReactComponent={};mn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};mn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function nc(){}nc.prototype=mn.prototype;function vs(e,t,r){this.props=e,this.context=t,this.refs=rc,this.updater=r||ec}var ws=vs.prototype=new nc;ws.constructor=vs;tc(ws,mn.prototype);ws.isPureReactComponent=!0;var vl=Array.isArray,oc=Object.prototype.hasOwnProperty,js={current:null},ic={key:!0,ref:!0,__self:!0,__source:!0};function ac(e,t,r){var o,i={},a=null,s=null;if(t!=null)for(o in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)oc.call(t,o)&&!ic.hasOwnProperty(o)&&(i[o]=t[o]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var d=Array(l),c=0;c<l;c++)d[c]=arguments[c+2];i.children=d}if(e&&e.defaultProps)for(o in l=e.defaultProps,l)i[o]===void 0&&(i[o]=l[o]);return{$$typeof:uo,type:e,key:a,ref:s,props:i,_owner:js.current}}function nf(e,t){return{$$typeof:uo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ks(e){return typeof e=="object"&&e!==null&&e.$$typeof===uo}function of(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var wl=/\/+/g;function Gi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?of(""+e.key):t.toString(36)}function Bo(e,t,r,o,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case uo:case Gp:s=!0}}if(s)return s=e,i=i(s),e=o===""?"."+Gi(s,0):o,vl(i)?(r="",e!=null&&(r=e.replace(wl,"$&/")+"/"),Bo(i,t,r,"",function(c){return c})):i!=null&&(ks(i)&&(i=nf(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(wl,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=o===""?".":o+":",vl(e))for(var l=0;l<e.length;l++){a=e[l];var d=o+Gi(a,l);s+=Bo(a,t,r,d,i)}else if(d=rf(e),typeof d=="function")for(e=d.call(e),l=0;!(a=e.next()).done;)a=a.value,d=o+Gi(a,l++),s+=Bo(a,t,r,d,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function bo(e,t,r){if(e==null)return e;var o=[],i=0;return Bo(e,o,"","",function(a){return t.call(r,a,i++)}),o}function af(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Qe={current:null},Ao={transition:null},sf={ReactCurrentDispatcher:Qe,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:js};function sc(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:bo,forEach:function(e,t,r){bo(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return bo(e,function(){t++}),t},toArray:function(e){return bo(e,function(t){return t})||[]},only:function(e){if(!ks(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ne.Component=mn;ne.Fragment=Vp;ne.Profiler=Xp;ne.PureComponent=vs;ne.StrictMode=Qp;ne.Suspense=Zp;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sf;ne.act=sc;ne.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=tc({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=js.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(d in t)oc.call(t,d)&&!ic.hasOwnProperty(d)&&(o[d]=t[d]===void 0&&l!==void 0?l[d]:t[d])}var d=arguments.length-2;if(d===1)o.children=r;else if(1<d){l=Array(d);for(var c=0;c<d;c++)l[c]=arguments[c+2];o.children=l}return{$$typeof:uo,type:e.type,key:i,ref:a,props:o,_owner:s}};ne.createContext=function(e){return e={$$typeof:Kp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:qp,_context:e},e.Consumer=e};ne.createElement=ac;ne.createFactory=function(e){var t=ac.bind(null,e);return t.type=e,t};ne.createRef=function(){return{current:null}};ne.forwardRef=function(e){return{$$typeof:Jp,render:e}};ne.isValidElement=ks;ne.lazy=function(e){return{$$typeof:tf,_payload:{_status:-1,_result:e},_init:af}};ne.memo=function(e,t){return{$$typeof:ef,type:e,compare:t===void 0?null:t}};ne.startTransition=function(e){var t=Ao.transition;Ao.transition={};try{e()}finally{Ao.transition=t}};ne.unstable_act=sc;ne.useCallback=function(e,t){return Qe.current.useCallback(e,t)};ne.useContext=function(e){return Qe.current.useContext(e)};ne.useDebugValue=function(){};ne.useDeferredValue=function(e){return Qe.current.useDeferredValue(e)};ne.useEffect=function(e,t){return Qe.current.useEffect(e,t)};ne.useId=function(){return Qe.current.useId()};ne.useImperativeHandle=function(e,t,r){return Qe.current.useImperativeHandle(e,t,r)};ne.useInsertionEffect=function(e,t){return Qe.current.useInsertionEffect(e,t)};ne.useLayoutEffect=function(e,t){return Qe.current.useLayoutEffect(e,t)};ne.useMemo=function(e,t){return Qe.current.useMemo(e,t)};ne.useReducer=function(e,t,r){return Qe.current.useReducer(e,t,r)};ne.useRef=function(e){return Qe.current.useRef(e)};ne.useState=function(e){return Qe.current.useState(e)};ne.useSyncExternalStore=function(e,t,r){return Qe.current.useSyncExternalStore(e,t,r)};ne.useTransition=function(){return Qe.current.useTransition()};ne.version="18.3.1";Zd.exports=ne;var m=Zd.exports;const vt=Yp(m),lf=Hp({__proto__:null,default:vt},[m]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df=m,cf=Symbol.for("react.element"),uf=Symbol.for("react.fragment"),pf=Object.prototype.hasOwnProperty,ff=df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gf={key:!0,ref:!0,__self:!0,__source:!0};function lc(e,t,r){var o,i={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(o in t)pf.call(t,o)&&!gf.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps,t)i[o]===void 0&&(i[o]=t[o]);return{$$typeof:cf,type:e,key:a,ref:s,props:i,_owner:ff.current}}Ci.Fragment=uf;Ci.jsx=lc;Ci.jsxs=lc;Jd.exports=Ci;var n=Jd.exports,va={},dc={exports:{}},lt={},cc={exports:{}},uc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,L){var B=T.length;T.push(L);e:for(;0<B;){var de=B-1>>>1,ve=T[de];if(0<i(ve,L))T[de]=L,T[B]=ve,B=de;else break e}}function r(T){return T.length===0?null:T[0]}function o(T){if(T.length===0)return null;var L=T[0],B=T.pop();if(B!==L){T[0]=B;e:for(var de=0,ve=T.length,St=ve>>>1;de<St;){var Et=2*(de+1)-1,jn=T[Et],It=Et+1,Br=T[It];if(0>i(jn,B))It<ve&&0>i(Br,jn)?(T[de]=Br,T[It]=B,de=It):(T[de]=jn,T[Et]=B,de=Et);else if(It<ve&&0>i(Br,B))T[de]=Br,T[It]=B,de=It;else break e}}return L}function i(T,L){var B=T.sortIndex-L.sortIndex;return B!==0?B:T.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var d=[],c=[],u=1,g=null,f=3,j=!1,$=!1,S=!1,w=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(T){for(var L=r(c);L!==null;){if(L.callback===null)o(c);else if(L.startTime<=T)o(c),L.sortIndex=L.expirationTime,t(d,L);else break;L=r(c)}}function P(T){if(S=!1,h(T),!$)if(r(d)!==null)$=!0,ae(E);else{var L=r(c);L!==null&&te(P,L.startTime-T)}}function E(T,L){$=!1,S&&(S=!1,x(z),z=-1),j=!0;var B=f;try{for(h(L),g=r(d);g!==null&&(!(g.expirationTime>L)||T&&!W());){var de=g.callback;if(typeof de=="function"){g.callback=null,f=g.priorityLevel;var ve=de(g.expirationTime<=L);L=e.unstable_now(),typeof ve=="function"?g.callback=ve:g===r(d)&&o(d),h(L)}else o(d);g=r(d)}if(g!==null)var St=!0;else{var Et=r(c);Et!==null&&te(P,Et.startTime-L),St=!1}return St}finally{g=null,f=B,j=!1}}var y=!1,v=null,z=-1,N=5,C=-1;function W(){return!(e.unstable_now()-C<N)}function U(){if(v!==null){var T=e.unstable_now();C=T;var L=!0;try{L=v(!0,T)}finally{L?ie():(y=!1,v=null)}}else y=!1}var ie;if(typeof p=="function")ie=function(){p(U)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,X=pe.port2;pe.port1.onmessage=U,ie=function(){X.postMessage(null)}}else ie=function(){w(U,0)};function ae(T){v=T,y||(y=!0,ie())}function te(T,L){z=w(function(){T(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){$||j||($=!0,ae(E))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return r(d)},e.unstable_next=function(T){switch(f){case 1:case 2:case 3:var L=3;break;default:L=f}var B=f;f=L;try{return T()}finally{f=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,L){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var B=f;f=T;try{return L()}finally{f=B}},e.unstable_scheduleCallback=function(T,L,B){var de=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?de+B:de):B=de,T){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=B+ve,T={id:u++,callback:L,priorityLevel:T,startTime:B,expirationTime:ve,sortIndex:-1},B>de?(T.sortIndex=B,t(c,T),r(d)===null&&T===r(c)&&(S?(x(z),z=-1):S=!0,te(P,B-de))):(T.sortIndex=ve,t(d,T),$||j||($=!0,ae(E))),T},e.unstable_shouldYield=W,e.unstable_wrapCallback=function(T){var L=f;return function(){var B=f;f=L;try{return T.apply(this,arguments)}finally{f=B}}}})(uc);cc.exports=uc;var mf=cc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xf=m,st=mf;function F(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pc=new Set,Yn={};function Rr(e,t){sn(e,t),sn(e+"Capture",t)}function sn(e,t){for(Yn[e]=t,e=0;e<t.length;e++)pc.add(t[e])}var Bt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wa=Object.prototype.hasOwnProperty,hf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,jl={},kl={};function yf(e){return wa.call(kl,e)?!0:wa.call(jl,e)?!1:hf.test(e)?kl[e]=!0:(jl[e]=!0,!1)}function bf(e,t,r,o){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return o?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function vf(e,t,r,o){if(t===null||typeof t>"u"||bf(e,t,r,o))return!0;if(o)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,r,o,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=o,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Be[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Be[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Be[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Be[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Be[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Be[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Be[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Be[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Be[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ss=/[\-:]([a-z])/g;function Cs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ss,Cs);Be[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ss,Cs);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ss,Cs);Be[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Be.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Be[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function $s(e,t,r,o){var i=Be.hasOwnProperty(t)?Be[t]:null;(i!==null?i.type!==0:o||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(vf(t,r,i,o)&&(r=null),o||i===null?yf(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,o=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,o?e.setAttributeNS(o,t,r):e.setAttribute(t,r))))}var Ot=xf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,vo=Symbol.for("react.element"),Dr=Symbol.for("react.portal"),Ur=Symbol.for("react.fragment"),zs=Symbol.for("react.strict_mode"),ja=Symbol.for("react.profiler"),fc=Symbol.for("react.provider"),gc=Symbol.for("react.context"),Ps=Symbol.for("react.forward_ref"),ka=Symbol.for("react.suspense"),Sa=Symbol.for("react.suspense_list"),Ns=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),mc=Symbol.for("react.offscreen"),Sl=Symbol.iterator;function kn(e){return e===null||typeof e!="object"?null:(e=Sl&&e[Sl]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Object.assign,Vi;function In(e){if(Vi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Vi=t&&t[1]||""}return`
`+Vi+e}var Qi=!1;function Xi(e,t){if(!e||Qi)return"";Qi=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var o=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){o=c}e.call(t.prototype)}else{try{throw Error()}catch(c){o=c}e()}}catch(c){if(c&&o&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),a=o.stack.split(`
`),s=i.length-1,l=a.length-1;1<=s&&0<=l&&i[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==a[l]){var d=`
`+i[s].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=s&&0<=l);break}}}finally{Qi=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?In(e):""}function wf(e){switch(e.tag){case 5:return In(e.type);case 16:return In("Lazy");case 13:return In("Suspense");case 19:return In("SuspenseList");case 0:case 2:case 15:return e=Xi(e.type,!1),e;case 11:return e=Xi(e.type.render,!1),e;case 1:return e=Xi(e.type,!0),e;default:return""}}function Ca(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ur:return"Fragment";case Dr:return"Portal";case ja:return"Profiler";case zs:return"StrictMode";case ka:return"Suspense";case Sa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case gc:return(e.displayName||"Context")+".Consumer";case fc:return(e._context.displayName||"Context")+".Provider";case Ps:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ns:return t=e.displayName||null,t!==null?t:Ca(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return Ca(e(t))}catch{}}return null}function jf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ca(t);case 8:return t===zs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function kf(e){var t=xc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),o=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){o=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return o},setValue:function(s){o=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wo(e){e._valueTracker||(e._valueTracker=kf(e))}function hc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),o="";return e&&(o=xc(e)?e.checked?"true":"false":e.value),e=o,e!==r?(t.setValue(e),!0):!1}function Ko(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $a(e,t){var r=t.checked;return Se({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function Cl(e,t){var r=t.defaultValue==null?"":t.defaultValue,o=t.checked!=null?t.checked:t.defaultChecked;r=cr(t.value!=null?t.value:r),e._wrapperState={initialChecked:o,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function yc(e,t){t=t.checked,t!=null&&$s(e,"checked",t,!1)}function za(e,t){yc(e,t);var r=cr(t.value),o=t.type;if(r!=null)o==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(o==="submit"||o==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Pa(e,t.type,r):t.hasOwnProperty("defaultValue")&&Pa(e,t.type,cr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function $l(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var o=t.type;if(!(o!=="submit"&&o!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Pa(e,t,r){(t!=="number"||Ko(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Fn=Array.isArray;function Zr(e,t,r,o){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&o&&(e[r].defaultSelected=!0)}else{for(r=""+cr(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,o&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(F(91));return Se({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function zl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(F(92));if(Fn(r)){if(1<r.length)throw Error(F(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:cr(r)}}function bc(e,t){var r=cr(t.value),o=cr(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),o!=null&&(e.defaultValue=""+o)}function Pl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ta(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jo,wc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,o,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,o,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jo=jo||document.createElement("div"),jo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Gn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ln={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sf=["Webkit","ms","Moz","O"];Object.keys(Ln).forEach(function(e){Sf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ln[t]=Ln[e]})});function jc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ln.hasOwnProperty(e)&&Ln[e]?(""+t).trim():t+"px"}function kc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var o=r.indexOf("--")===0,i=jc(r,t[r],o);r==="float"&&(r="cssFloat"),o?e.setProperty(r,i):e[r]=i}}var Cf=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ea(e,t){if(t){if(Cf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(F(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(F(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(F(61))}if(t.style!=null&&typeof t.style!="object")throw Error(F(62))}}function Ia(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fa=null;function Ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ma=null,en=null,tn=null;function Nl(e){if(e=go(e)){if(typeof Ma!="function")throw Error(F(280));var t=e.stateNode;t&&(t=Ti(t),Ma(e.stateNode,e.type,t))}}function Sc(e){en?tn?tn.push(e):tn=[e]:en=e}function Cc(){if(en){var e=en,t=tn;if(tn=en=null,Nl(e),t)for(e=0;e<t.length;e++)Nl(t[e])}}function $c(e,t){return e(t)}function zc(){}var qi=!1;function Pc(e,t,r){if(qi)return e(t,r);qi=!0;try{return $c(e,t,r)}finally{qi=!1,(en!==null||tn!==null)&&(zc(),Cc())}}function Vn(e,t){var r=e.stateNode;if(r===null)return null;var o=Ti(r);if(o===null)return null;r=o[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(F(231,t,typeof r));return r}var Ra=!1;if(Bt)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){Ra=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{Ra=!1}function $f(e,t,r,o,i,a,s,l,d){var c=Array.prototype.slice.call(arguments,3);try{t.apply(r,c)}catch(u){this.onError(u)}}var Wn=!1,Jo=null,Zo=!1,La=null,zf={onError:function(e){Wn=!0,Jo=e}};function Pf(e,t,r,o,i,a,s,l,d){Wn=!1,Jo=null,$f.apply(zf,arguments)}function Nf(e,t,r,o,i,a,s,l,d){if(Pf.apply(this,arguments),Wn){if(Wn){var c=Jo;Wn=!1,Jo=null}else throw Error(F(198));Zo||(Zo=!0,La=c)}}function Lr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Nc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tl(e){if(Lr(e)!==e)throw Error(F(188))}function Tf(e){var t=e.alternate;if(!t){if(t=Lr(e),t===null)throw Error(F(188));return t!==e?null:e}for(var r=e,o=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(o=i.return,o!==null){r=o;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return Tl(i),e;if(a===o)return Tl(i),t;a=a.sibling}throw Error(F(188))}if(r.return!==o.return)r=i,o=a;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,o=a;break}if(l===o){s=!0,o=i,r=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,o=i;break}if(l===o){s=!0,o=a,r=i;break}l=l.sibling}if(!s)throw Error(F(189))}}if(r.alternate!==o)throw Error(F(190))}if(r.tag!==3)throw Error(F(188));return r.stateNode.current===r?e:t}function Tc(e){return e=Tf(e),e!==null?Ec(e):null}function Ec(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ec(e);if(t!==null)return t;e=e.sibling}return null}var Ic=st.unstable_scheduleCallback,El=st.unstable_cancelCallback,Ef=st.unstable_shouldYield,If=st.unstable_requestPaint,ze=st.unstable_now,Ff=st.unstable_getCurrentPriorityLevel,Es=st.unstable_ImmediatePriority,Fc=st.unstable_UserBlockingPriority,ei=st.unstable_NormalPriority,Mf=st.unstable_LowPriority,Mc=st.unstable_IdlePriority,$i=null,Pt=null;function Rf(e){if(Pt&&typeof Pt.onCommitFiberRoot=="function")try{Pt.onCommitFiberRoot($i,e,void 0,(e.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:_f,Lf=Math.log,Wf=Math.LN2;function _f(e){return e>>>=0,e===0?32:31-(Lf(e)/Wf|0)|0}var ko=64,So=4194304;function Mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ti(e,t){var r=e.pendingLanes;if(r===0)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?o=Mn(l):(a&=s,a!==0&&(o=Mn(a)))}else s=r&~i,s!==0?o=Mn(s):a!==0&&(o=Mn(a));if(o===0)return 0;if(t!==0&&t!==o&&!(t&i)&&(i=o&-o,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(o&4&&(o|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=o;0<t;)r=31-wt(t),i=1<<r,o|=e[r],t&=~i;return o}function Bf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Af(e,t){for(var r=e.suspendedLanes,o=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-wt(a),l=1<<s,d=i[s];d===-1?(!(l&r)||l&o)&&(i[s]=Bf(l,t)):d<=t&&(e.expiredLanes|=l),a&=~l}}function Wa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Rc(){var e=ko;return ko<<=1,!(ko&4194240)&&(ko=64),e}function Ki(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function po(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-wt(t),e[t]=r}function Df(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var o=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-wt(r),a=1<<i;t[i]=0,o[i]=-1,e[i]=-1,r&=~a}}function Is(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var o=31-wt(r),i=1<<o;i&t|e[o]&t&&(e[o]|=t),r&=~i}}var ue=0;function Lc(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Wc,Fs,_c,Bc,Ac,_a=!1,Co=[],tr=null,rr=null,nr=null,Qn=new Map,Xn=new Map,qt=[],Uf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Il(e,t){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":rr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Qn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function Cn(e,t,r,o,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:o,nativeEvent:a,targetContainers:[i]},t!==null&&(t=go(t),t!==null&&Fs(t)),e):(e.eventSystemFlags|=o,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Of(e,t,r,o,i){switch(t){case"focusin":return tr=Cn(tr,e,t,r,o,i),!0;case"dragenter":return rr=Cn(rr,e,t,r,o,i),!0;case"mouseover":return nr=Cn(nr,e,t,r,o,i),!0;case"pointerover":var a=i.pointerId;return Qn.set(a,Cn(Qn.get(a)||null,e,t,r,o,i)),!0;case"gotpointercapture":return a=i.pointerId,Xn.set(a,Cn(Xn.get(a)||null,e,t,r,o,i)),!0}return!1}function Dc(e){var t=jr(e.target);if(t!==null){var r=Lr(t);if(r!==null){if(t=r.tag,t===13){if(t=Nc(r),t!==null){e.blockedOn=t,Ac(e.priority,function(){_c(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Do(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Ba(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var o=new r.constructor(r.type,r);Fa=o,r.target.dispatchEvent(o),Fa=null}else return t=go(r),t!==null&&Fs(t),e.blockedOn=r,!1;t.shift()}return!0}function Fl(e,t,r){Do(e)&&r.delete(t)}function Hf(){_a=!1,tr!==null&&Do(tr)&&(tr=null),rr!==null&&Do(rr)&&(rr=null),nr!==null&&Do(nr)&&(nr=null),Qn.forEach(Fl),Xn.forEach(Fl)}function $n(e,t){e.blockedOn===t&&(e.blockedOn=null,_a||(_a=!0,st.unstable_scheduleCallback(st.unstable_NormalPriority,Hf)))}function qn(e){function t(i){return $n(i,e)}if(0<Co.length){$n(Co[0],e);for(var r=1;r<Co.length;r++){var o=Co[r];o.blockedOn===e&&(o.blockedOn=null)}}for(tr!==null&&$n(tr,e),rr!==null&&$n(rr,e),nr!==null&&$n(nr,e),Qn.forEach(t),Xn.forEach(t),r=0;r<qt.length;r++)o=qt[r],o.blockedOn===e&&(o.blockedOn=null);for(;0<qt.length&&(r=qt[0],r.blockedOn===null);)Dc(r),r.blockedOn===null&&qt.shift()}var rn=Ot.ReactCurrentBatchConfig,ri=!0;function Yf(e,t,r,o){var i=ue,a=rn.transition;rn.transition=null;try{ue=1,Ms(e,t,r,o)}finally{ue=i,rn.transition=a}}function Gf(e,t,r,o){var i=ue,a=rn.transition;rn.transition=null;try{ue=4,Ms(e,t,r,o)}finally{ue=i,rn.transition=a}}function Ms(e,t,r,o){if(ri){var i=Ba(e,t,r,o);if(i===null)sa(e,t,o,ni,r),Il(e,o);else if(Of(i,e,t,r,o))o.stopPropagation();else if(Il(e,o),t&4&&-1<Uf.indexOf(e)){for(;i!==null;){var a=go(i);if(a!==null&&Wc(a),a=Ba(e,t,r,o),a===null&&sa(e,t,o,ni,r),a===i)break;i=a}i!==null&&o.stopPropagation()}else sa(e,t,o,null,r)}}var ni=null;function Ba(e,t,r,o){if(ni=null,e=Ts(o),e=jr(e),e!==null)if(t=Lr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Nc(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ni=e,null}function Uc(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ff()){case Es:return 1;case Fc:return 4;case ei:case Mf:return 16;case Mc:return 536870912;default:return 16}default:return 16}}var Jt=null,Rs=null,Uo=null;function Oc(){if(Uo)return Uo;var e,t=Rs,r=t.length,o,i="value"in Jt?Jt.value:Jt.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(o=1;o<=s&&t[r-o]===i[a-o];o++);return Uo=i.slice(e,1<o?1-o:void 0)}function Oo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $o(){return!0}function Ml(){return!1}function dt(e){function t(r,o,i,a,s){this._reactName=r,this._targetInst=i,this.type=o,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?$o:Ml,this.isPropagationStopped=Ml,this}return Se(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=$o)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=$o)},persist:function(){},isPersistent:$o}),t}var xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=dt(xn),fo=Se({},xn,{view:0,detail:0}),Vf=dt(fo),Ji,Zi,zn,zi=Se({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ws,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(Ji=e.screenX-zn.screenX,Zi=e.screenY-zn.screenY):Zi=Ji=0,zn=e),Ji)},movementY:function(e){return"movementY"in e?e.movementY:Zi}}),Rl=dt(zi),Qf=Se({},zi,{dataTransfer:0}),Xf=dt(Qf),qf=Se({},fo,{relatedTarget:0}),ea=dt(qf),Kf=Se({},xn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jf=dt(Kf),Zf=Se({},xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eg=dt(Zf),tg=Se({},xn,{data:0}),Ll=dt(tg),rg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ig(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=og[e])?!!t[e]:!1}function Ws(){return ig}var ag=Se({},fo,{key:function(e){if(e.key){var t=rg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ng[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ws,charCode:function(e){return e.type==="keypress"?Oo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sg=dt(ag),lg=Se({},zi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wl=dt(lg),dg=Se({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ws}),cg=dt(dg),ug=Se({},xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),pg=dt(ug),fg=Se({},zi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),gg=dt(fg),mg=[9,13,27,32],_s=Bt&&"CompositionEvent"in window,_n=null;Bt&&"documentMode"in document&&(_n=document.documentMode);var xg=Bt&&"TextEvent"in window&&!_n,Hc=Bt&&(!_s||_n&&8<_n&&11>=_n),_l=" ",Bl=!1;function Yc(e,t){switch(e){case"keyup":return mg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Gc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Or=!1;function hg(e,t){switch(e){case"compositionend":return Gc(t);case"keypress":return t.which!==32?null:(Bl=!0,_l);case"textInput":return e=t.data,e===_l&&Bl?null:e;default:return null}}function yg(e,t){if(Or)return e==="compositionend"||!_s&&Yc(e,t)?(e=Oc(),Uo=Rs=Jt=null,Or=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Hc&&t.locale!=="ko"?null:t.data;default:return null}}var bg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Al(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bg[e.type]:t==="textarea"}function Vc(e,t,r,o){Sc(o),t=oi(t,"onChange"),0<t.length&&(r=new Ls("onChange","change",null,r,o),e.push({event:r,listeners:t}))}var Bn=null,Kn=null;function vg(e){ou(e,0)}function Pi(e){var t=Gr(e);if(hc(t))return e}function wg(e,t){if(e==="change")return t}var Qc=!1;if(Bt){var ta;if(Bt){var ra="oninput"in document;if(!ra){var Dl=document.createElement("div");Dl.setAttribute("oninput","return;"),ra=typeof Dl.oninput=="function"}ta=ra}else ta=!1;Qc=ta&&(!document.documentMode||9<document.documentMode)}function Ul(){Bn&&(Bn.detachEvent("onpropertychange",Xc),Kn=Bn=null)}function Xc(e){if(e.propertyName==="value"&&Pi(Kn)){var t=[];Vc(t,Kn,e,Ts(e)),Pc(vg,t)}}function jg(e,t,r){e==="focusin"?(Ul(),Bn=t,Kn=r,Bn.attachEvent("onpropertychange",Xc)):e==="focusout"&&Ul()}function kg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pi(Kn)}function Sg(e,t){if(e==="click")return Pi(t)}function Cg(e,t){if(e==="input"||e==="change")return Pi(t)}function $g(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var kt=typeof Object.is=="function"?Object.is:$g;function Jn(e,t){if(kt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),o=Object.keys(t);if(r.length!==o.length)return!1;for(o=0;o<r.length;o++){var i=r[o];if(!wa.call(t,i)||!kt(e[i],t[i]))return!1}return!0}function Ol(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hl(e,t){var r=Ol(e);e=0;for(var o;r;){if(r.nodeType===3){if(o=e+r.textContent.length,e<=t&&o>=t)return{node:r,offset:t-e};e=o}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Ol(r)}}function qc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Kc(){for(var e=window,t=Ko();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Ko(e.document)}return t}function Bs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function zg(e){var t=Kc(),r=e.focusedElem,o=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&qc(r.ownerDocument.documentElement,r)){if(o!==null&&Bs(r)){if(t=o.start,e=o.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(o.start,i);o=o.end===void 0?a:Math.min(o.end,i),!e.extend&&a>o&&(i=o,o=a,a=i),i=Hl(r,a);var s=Hl(r,o);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>o?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Pg=Bt&&"documentMode"in document&&11>=document.documentMode,Hr=null,Aa=null,An=null,Da=!1;function Yl(e,t,r){var o=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Da||Hr==null||Hr!==Ko(o)||(o=Hr,"selectionStart"in o&&Bs(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),An&&Jn(An,o)||(An=o,o=oi(Aa,"onSelect"),0<o.length&&(t=new Ls("onSelect","select",null,t,r),e.push({event:t,listeners:o}),t.target=Hr)))}function zo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Yr={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},na={},Jc={};Bt&&(Jc=document.createElement("div").style,"AnimationEvent"in window||(delete Yr.animationend.animation,delete Yr.animationiteration.animation,delete Yr.animationstart.animation),"TransitionEvent"in window||delete Yr.transitionend.transition);function Ni(e){if(na[e])return na[e];if(!Yr[e])return e;var t=Yr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Jc)return na[e]=t[r];return e}var Zc=Ni("animationend"),eu=Ni("animationiteration"),tu=Ni("animationstart"),ru=Ni("transitionend"),nu=new Map,Gl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(e,t){nu.set(e,t),Rr(t,[e])}for(var oa=0;oa<Gl.length;oa++){var ia=Gl[oa],Ng=ia.toLowerCase(),Tg=ia[0].toUpperCase()+ia.slice(1);pr(Ng,"on"+Tg)}pr(Zc,"onAnimationEnd");pr(eu,"onAnimationIteration");pr(tu,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(ru,"onTransitionEnd");sn("onMouseEnter",["mouseout","mouseover"]);sn("onMouseLeave",["mouseout","mouseover"]);sn("onPointerEnter",["pointerout","pointerover"]);sn("onPointerLeave",["pointerout","pointerover"]);Rr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Rn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Eg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Rn));function Vl(e,t,r){var o=e.type||"unknown-event";e.currentTarget=r,Nf(o,t,void 0,e),e.currentTarget=null}function ou(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var o=e[r],i=o.event;o=o.listeners;e:{var a=void 0;if(t)for(var s=o.length-1;0<=s;s--){var l=o[s],d=l.instance,c=l.currentTarget;if(l=l.listener,d!==a&&i.isPropagationStopped())break e;Vl(i,l,c),a=d}else for(s=0;s<o.length;s++){if(l=o[s],d=l.instance,c=l.currentTarget,l=l.listener,d!==a&&i.isPropagationStopped())break e;Vl(i,l,c),a=d}}}if(Zo)throw e=La,Zo=!1,La=null,e}function he(e,t){var r=t[Ga];r===void 0&&(r=t[Ga]=new Set);var o=e+"__bubble";r.has(o)||(iu(t,e,2,!1),r.add(o))}function aa(e,t,r){var o=0;t&&(o|=4),iu(r,e,o,t)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Zn(e){if(!e[Po]){e[Po]=!0,pc.forEach(function(r){r!=="selectionchange"&&(Eg.has(r)||aa(r,!1,e),aa(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Po]||(t[Po]=!0,aa("selectionchange",!1,t))}}function iu(e,t,r,o){switch(Uc(t)){case 1:var i=Yf;break;case 4:i=Gf;break;default:i=Ms}r=i.bind(null,t,r,e),i=void 0,!Ra||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),o?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function sa(e,t,r,o,i){var a=o;if(!(t&1)&&!(t&2)&&o!==null)e:for(;;){if(o===null)return;var s=o.tag;if(s===3||s===4){var l=o.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=o.return;s!==null;){var d=s.tag;if((d===3||d===4)&&(d=s.stateNode.containerInfo,d===i||d.nodeType===8&&d.parentNode===i))return;s=s.return}for(;l!==null;){if(s=jr(l),s===null)return;if(d=s.tag,d===5||d===6){o=a=s;continue e}l=l.parentNode}}o=o.return}Pc(function(){var c=a,u=Ts(r),g=[];e:{var f=nu.get(e);if(f!==void 0){var j=Ls,$=e;switch(e){case"keypress":if(Oo(r)===0)break e;case"keydown":case"keyup":j=sg;break;case"focusin":$="focus",j=ea;break;case"focusout":$="blur",j=ea;break;case"beforeblur":case"afterblur":j=ea;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Rl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Xf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=cg;break;case Zc:case eu:case tu:j=Jf;break;case ru:j=pg;break;case"scroll":j=Vf;break;case"wheel":j=gg;break;case"copy":case"cut":case"paste":j=eg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Wl}var S=(t&4)!==0,w=!S&&e==="scroll",x=S?f!==null?f+"Capture":null:f;S=[];for(var p=c,h;p!==null;){h=p;var P=h.stateNode;if(h.tag===5&&P!==null&&(h=P,x!==null&&(P=Vn(p,x),P!=null&&S.push(eo(p,P,h)))),w)break;p=p.return}0<S.length&&(f=new j(f,$,null,r,u),g.push({event:f,listeners:S}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",f&&r!==Fa&&($=r.relatedTarget||r.fromElement)&&(jr($)||$[At]))break e;if((j||f)&&(f=u.window===u?u:(f=u.ownerDocument)?f.defaultView||f.parentWindow:window,j?($=r.relatedTarget||r.toElement,j=c,$=$?jr($):null,$!==null&&(w=Lr($),$!==w||$.tag!==5&&$.tag!==6)&&($=null)):(j=null,$=c),j!==$)){if(S=Rl,P="onMouseLeave",x="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(S=Wl,P="onPointerLeave",x="onPointerEnter",p="pointer"),w=j==null?f:Gr(j),h=$==null?f:Gr($),f=new S(P,p+"leave",j,r,u),f.target=w,f.relatedTarget=h,P=null,jr(u)===c&&(S=new S(x,p+"enter",$,r,u),S.target=h,S.relatedTarget=w,P=S),w=P,j&&$)t:{for(S=j,x=$,p=0,h=S;h;h=Ar(h))p++;for(h=0,P=x;P;P=Ar(P))h++;for(;0<p-h;)S=Ar(S),p--;for(;0<h-p;)x=Ar(x),h--;for(;p--;){if(S===x||x!==null&&S===x.alternate)break t;S=Ar(S),x=Ar(x)}S=null}else S=null;j!==null&&Ql(g,f,j,S,!1),$!==null&&w!==null&&Ql(g,w,$,S,!0)}}e:{if(f=c?Gr(c):window,j=f.nodeName&&f.nodeName.toLowerCase(),j==="select"||j==="input"&&f.type==="file")var E=wg;else if(Al(f))if(Qc)E=Cg;else{E=kg;var y=jg}else(j=f.nodeName)&&j.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=Sg);if(E&&(E=E(e,c))){Vc(g,E,r,u);break e}y&&y(e,f,c),e==="focusout"&&(y=f._wrapperState)&&y.controlled&&f.type==="number"&&Pa(f,"number",f.value)}switch(y=c?Gr(c):window,e){case"focusin":(Al(y)||y.contentEditable==="true")&&(Hr=y,Aa=c,An=null);break;case"focusout":An=Aa=Hr=null;break;case"mousedown":Da=!0;break;case"contextmenu":case"mouseup":case"dragend":Da=!1,Yl(g,r,u);break;case"selectionchange":if(Pg)break;case"keydown":case"keyup":Yl(g,r,u)}var v;if(_s)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else Or?Yc(e,r)&&(z="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(z="onCompositionStart");z&&(Hc&&r.locale!=="ko"&&(Or||z!=="onCompositionStart"?z==="onCompositionEnd"&&Or&&(v=Oc()):(Jt=u,Rs="value"in Jt?Jt.value:Jt.textContent,Or=!0)),y=oi(c,z),0<y.length&&(z=new Ll(z,e,null,r,u),g.push({event:z,listeners:y}),v?z.data=v:(v=Gc(r),v!==null&&(z.data=v)))),(v=xg?hg(e,r):yg(e,r))&&(c=oi(c,"onBeforeInput"),0<c.length&&(u=new Ll("onBeforeInput","beforeinput",null,r,u),g.push({event:u,listeners:c}),u.data=v))}ou(g,t)})}function eo(e,t,r){return{instance:e,listener:t,currentTarget:r}}function oi(e,t){for(var r=t+"Capture",o=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Vn(e,r),a!=null&&o.unshift(eo(e,a,i)),a=Vn(e,t),a!=null&&o.push(eo(e,a,i))),e=e.return}return o}function Ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ql(e,t,r,o,i){for(var a=t._reactName,s=[];r!==null&&r!==o;){var l=r,d=l.alternate,c=l.stateNode;if(d!==null&&d===o)break;l.tag===5&&c!==null&&(l=c,i?(d=Vn(r,a),d!=null&&s.unshift(eo(r,d,l))):i||(d=Vn(r,a),d!=null&&s.push(eo(r,d,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var Ig=/\r\n?/g,Fg=/\u0000|\uFFFD/g;function Xl(e){return(typeof e=="string"?e:""+e).replace(Ig,`
`).replace(Fg,"")}function No(e,t,r){if(t=Xl(t),Xl(e)!==t&&r)throw Error(F(425))}function ii(){}var Ua=null,Oa=null;function Ha(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ya=typeof setTimeout=="function"?setTimeout:void 0,Mg=typeof clearTimeout=="function"?clearTimeout:void 0,ql=typeof Promise=="function"?Promise:void 0,Rg=typeof queueMicrotask=="function"?queueMicrotask:typeof ql<"u"?function(e){return ql.resolve(null).then(e).catch(Lg)}:Ya;function Lg(e){setTimeout(function(){throw e})}function la(e,t){var r=t,o=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(o===0){e.removeChild(i),qn(t);return}o--}else r!=="$"&&r!=="$?"&&r!=="$!"||o++;r=i}while(r);qn(t)}function or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Kl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var hn=Math.random().toString(36).slice(2),zt="__reactFiber$"+hn,to="__reactProps$"+hn,At="__reactContainer$"+hn,Ga="__reactEvents$"+hn,Wg="__reactListeners$"+hn,_g="__reactHandles$"+hn;function jr(e){var t=e[zt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[At]||r[zt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Kl(e);e!==null;){if(r=e[zt])return r;e=Kl(e)}return t}e=r,r=e.parentNode}return null}function go(e){return e=e[zt]||e[At],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Gr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(F(33))}function Ti(e){return e[to]||null}var Va=[],Vr=-1;function fr(e){return{current:e}}function ye(e){0>Vr||(e.current=Va[Vr],Va[Vr]=null,Vr--)}function me(e,t){Vr++,Va[Vr]=e.current,e.current=t}var ur={},He=fr(ur),et=fr(!1),Nr=ur;function ln(e,t){var r=e.type.contextTypes;if(!r)return ur;var o=e.stateNode;if(o&&o.__reactInternalMemoizedUnmaskedChildContext===t)return o.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function tt(e){return e=e.childContextTypes,e!=null}function ai(){ye(et),ye(He)}function Jl(e,t,r){if(He.current!==ur)throw Error(F(168));me(He,t),me(et,r)}function au(e,t,r){var o=e.stateNode;if(t=t.childContextTypes,typeof o.getChildContext!="function")return r;o=o.getChildContext();for(var i in o)if(!(i in t))throw Error(F(108,jf(e)||"Unknown",i));return Se({},r,o)}function si(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ur,Nr=He.current,me(He,e),me(et,et.current),!0}function Zl(e,t,r){var o=e.stateNode;if(!o)throw Error(F(169));r?(e=au(e,t,Nr),o.__reactInternalMemoizedMergedChildContext=e,ye(et),ye(He),me(He,e)):ye(et),me(et,r)}var Rt=null,Ei=!1,da=!1;function su(e){Rt===null?Rt=[e]:Rt.push(e)}function Bg(e){Ei=!0,su(e)}function gr(){if(!da&&Rt!==null){da=!0;var e=0,t=ue;try{var r=Rt;for(ue=1;e<r.length;e++){var o=r[e];do o=o(!0);while(o!==null)}Rt=null,Ei=!1}catch(i){throw Rt!==null&&(Rt=Rt.slice(e+1)),Ic(Es,gr),i}finally{ue=t,da=!1}}return null}var Qr=[],Xr=0,li=null,di=0,ct=[],ut=0,Tr=null,Lt=1,Wt="";function vr(e,t){Qr[Xr++]=di,Qr[Xr++]=li,li=e,di=t}function lu(e,t,r){ct[ut++]=Lt,ct[ut++]=Wt,ct[ut++]=Tr,Tr=e;var o=Lt;e=Wt;var i=32-wt(o)-1;o&=~(1<<i),r+=1;var a=32-wt(t)+i;if(30<a){var s=i-i%5;a=(o&(1<<s)-1).toString(32),o>>=s,i-=s,Lt=1<<32-wt(t)+i|r<<i|o,Wt=a+e}else Lt=1<<a|r<<i|o,Wt=e}function As(e){e.return!==null&&(vr(e,1),lu(e,1,0))}function Ds(e){for(;e===li;)li=Qr[--Xr],Qr[Xr]=null,di=Qr[--Xr],Qr[Xr]=null;for(;e===Tr;)Tr=ct[--ut],ct[ut]=null,Wt=ct[--ut],ct[ut]=null,Lt=ct[--ut],ct[ut]=null}var at=null,it=null,be=!1,bt=null;function du(e,t){var r=pt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function ed(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,at=e,it=or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,at=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Tr!==null?{id:Lt,overflow:Wt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=pt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,at=e,it=null,!0):!1;default:return!1}}function Qa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xa(e){if(be){var t=it;if(t){var r=t;if(!ed(e,t)){if(Qa(e))throw Error(F(418));t=or(r.nextSibling);var o=at;t&&ed(e,t)?du(o,r):(e.flags=e.flags&-4097|2,be=!1,at=e)}}else{if(Qa(e))throw Error(F(418));e.flags=e.flags&-4097|2,be=!1,at=e}}}function td(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;at=e}function To(e){if(e!==at)return!1;if(!be)return td(e),be=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ha(e.type,e.memoizedProps)),t&&(t=it)){if(Qa(e))throw cu(),Error(F(418));for(;t;)du(e,t),t=or(t.nextSibling)}if(td(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(F(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){it=or(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}it=null}}else it=at?or(e.stateNode.nextSibling):null;return!0}function cu(){for(var e=it;e;)e=or(e.nextSibling)}function dn(){it=at=null,be=!1}function Us(e){bt===null?bt=[e]:bt.push(e)}var Ag=Ot.ReactCurrentBatchConfig;function Pn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(F(309));var o=r.stateNode}if(!o)throw Error(F(147,e));var i=o,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var l=i.refs;s===null?delete l[a]:l[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(F(284));if(!r._owner)throw Error(F(290,e))}return e}function Eo(e,t){throw e=Object.prototype.toString.call(t),Error(F(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function rd(e){var t=e._init;return t(e._payload)}function uu(e){function t(x,p){if(e){var h=x.deletions;h===null?(x.deletions=[p],x.flags|=16):h.push(p)}}function r(x,p){if(!e)return null;for(;p!==null;)t(x,p),p=p.sibling;return null}function o(x,p){for(x=new Map;p!==null;)p.key!==null?x.set(p.key,p):x.set(p.index,p),p=p.sibling;return x}function i(x,p){return x=lr(x,p),x.index=0,x.sibling=null,x}function a(x,p,h){return x.index=h,e?(h=x.alternate,h!==null?(h=h.index,h<p?(x.flags|=2,p):h):(x.flags|=2,p)):(x.flags|=1048576,p)}function s(x){return e&&x.alternate===null&&(x.flags|=2),x}function l(x,p,h,P){return p===null||p.tag!==6?(p=xa(h,x.mode,P),p.return=x,p):(p=i(p,h),p.return=x,p)}function d(x,p,h,P){var E=h.type;return E===Ur?u(x,p,h.props.children,P,h.key):p!==null&&(p.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qt&&rd(E)===p.type)?(P=i(p,h.props),P.ref=Pn(x,p,h),P.return=x,P):(P=qo(h.type,h.key,h.props,null,x.mode,P),P.ref=Pn(x,p,h),P.return=x,P)}function c(x,p,h,P){return p===null||p.tag!==4||p.stateNode.containerInfo!==h.containerInfo||p.stateNode.implementation!==h.implementation?(p=ha(h,x.mode,P),p.return=x,p):(p=i(p,h.children||[]),p.return=x,p)}function u(x,p,h,P,E){return p===null||p.tag!==7?(p=zr(h,x.mode,P,E),p.return=x,p):(p=i(p,h),p.return=x,p)}function g(x,p,h){if(typeof p=="string"&&p!==""||typeof p=="number")return p=xa(""+p,x.mode,h),p.return=x,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case vo:return h=qo(p.type,p.key,p.props,null,x.mode,h),h.ref=Pn(x,null,p),h.return=x,h;case Dr:return p=ha(p,x.mode,h),p.return=x,p;case Qt:var P=p._init;return g(x,P(p._payload),h)}if(Fn(p)||kn(p))return p=zr(p,x.mode,h,null),p.return=x,p;Eo(x,p)}return null}function f(x,p,h,P){var E=p!==null?p.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:l(x,p,""+h,P);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case vo:return h.key===E?d(x,p,h,P):null;case Dr:return h.key===E?c(x,p,h,P):null;case Qt:return E=h._init,f(x,p,E(h._payload),P)}if(Fn(h)||kn(h))return E!==null?null:u(x,p,h,P,null);Eo(x,h)}return null}function j(x,p,h,P,E){if(typeof P=="string"&&P!==""||typeof P=="number")return x=x.get(h)||null,l(p,x,""+P,E);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case vo:return x=x.get(P.key===null?h:P.key)||null,d(p,x,P,E);case Dr:return x=x.get(P.key===null?h:P.key)||null,c(p,x,P,E);case Qt:var y=P._init;return j(x,p,h,y(P._payload),E)}if(Fn(P)||kn(P))return x=x.get(h)||null,u(p,x,P,E,null);Eo(p,P)}return null}function $(x,p,h,P){for(var E=null,y=null,v=p,z=p=0,N=null;v!==null&&z<h.length;z++){v.index>z?(N=v,v=null):N=v.sibling;var C=f(x,v,h[z],P);if(C===null){v===null&&(v=N);break}e&&v&&C.alternate===null&&t(x,v),p=a(C,p,z),y===null?E=C:y.sibling=C,y=C,v=N}if(z===h.length)return r(x,v),be&&vr(x,z),E;if(v===null){for(;z<h.length;z++)v=g(x,h[z],P),v!==null&&(p=a(v,p,z),y===null?E=v:y.sibling=v,y=v);return be&&vr(x,z),E}for(v=o(x,v);z<h.length;z++)N=j(v,x,z,h[z],P),N!==null&&(e&&N.alternate!==null&&v.delete(N.key===null?z:N.key),p=a(N,p,z),y===null?E=N:y.sibling=N,y=N);return e&&v.forEach(function(W){return t(x,W)}),be&&vr(x,z),E}function S(x,p,h,P){var E=kn(h);if(typeof E!="function")throw Error(F(150));if(h=E.call(h),h==null)throw Error(F(151));for(var y=E=null,v=p,z=p=0,N=null,C=h.next();v!==null&&!C.done;z++,C=h.next()){v.index>z?(N=v,v=null):N=v.sibling;var W=f(x,v,C.value,P);if(W===null){v===null&&(v=N);break}e&&v&&W.alternate===null&&t(x,v),p=a(W,p,z),y===null?E=W:y.sibling=W,y=W,v=N}if(C.done)return r(x,v),be&&vr(x,z),E;if(v===null){for(;!C.done;z++,C=h.next())C=g(x,C.value,P),C!==null&&(p=a(C,p,z),y===null?E=C:y.sibling=C,y=C);return be&&vr(x,z),E}for(v=o(x,v);!C.done;z++,C=h.next())C=j(v,x,z,C.value,P),C!==null&&(e&&C.alternate!==null&&v.delete(C.key===null?z:C.key),p=a(C,p,z),y===null?E=C:y.sibling=C,y=C);return e&&v.forEach(function(U){return t(x,U)}),be&&vr(x,z),E}function w(x,p,h,P){if(typeof h=="object"&&h!==null&&h.type===Ur&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case vo:e:{for(var E=h.key,y=p;y!==null;){if(y.key===E){if(E=h.type,E===Ur){if(y.tag===7){r(x,y.sibling),p=i(y,h.props.children),p.return=x,x=p;break e}}else if(y.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Qt&&rd(E)===y.type){r(x,y.sibling),p=i(y,h.props),p.ref=Pn(x,y,h),p.return=x,x=p;break e}r(x,y);break}else t(x,y);y=y.sibling}h.type===Ur?(p=zr(h.props.children,x.mode,P,h.key),p.return=x,x=p):(P=qo(h.type,h.key,h.props,null,x.mode,P),P.ref=Pn(x,p,h),P.return=x,x=P)}return s(x);case Dr:e:{for(y=h.key;p!==null;){if(p.key===y)if(p.tag===4&&p.stateNode.containerInfo===h.containerInfo&&p.stateNode.implementation===h.implementation){r(x,p.sibling),p=i(p,h.children||[]),p.return=x,x=p;break e}else{r(x,p);break}else t(x,p);p=p.sibling}p=ha(h,x.mode,P),p.return=x,x=p}return s(x);case Qt:return y=h._init,w(x,p,y(h._payload),P)}if(Fn(h))return $(x,p,h,P);if(kn(h))return S(x,p,h,P);Eo(x,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,p!==null&&p.tag===6?(r(x,p.sibling),p=i(p,h),p.return=x,x=p):(r(x,p),p=xa(h,x.mode,P),p.return=x,x=p),s(x)):r(x,p)}return w}var cn=uu(!0),pu=uu(!1),ci=fr(null),ui=null,qr=null,Os=null;function Hs(){Os=qr=ui=null}function Ys(e){var t=ci.current;ye(ci),e._currentValue=t}function qa(e,t,r){for(;e!==null;){var o=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,o!==null&&(o.childLanes|=t)):o!==null&&(o.childLanes&t)!==t&&(o.childLanes|=t),e===r)break;e=e.return}}function nn(e,t){ui=e,Os=qr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ze=!0),e.firstContext=null)}function gt(e){var t=e._currentValue;if(Os!==e)if(e={context:e,memoizedValue:t,next:null},qr===null){if(ui===null)throw Error(F(308));qr=e,ui.dependencies={lanes:0,firstContext:e}}else qr=qr.next=e;return t}var kr=null;function Gs(e){kr===null?kr=[e]:kr.push(e)}function fu(e,t,r,o){var i=t.interleaved;return i===null?(r.next=r,Gs(t)):(r.next=i.next,i.next=r),t.interleaved=r,Dt(e,o)}function Dt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Xt=!1;function Vs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function gu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ir(e,t,r){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,le&2){var i=o.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),o.pending=t,Dt(e,r)}return i=o.interleaved,i===null?(t.next=t,Gs(o)):(t.next=i.next,i.next=t),o.interleaved=t,Dt(e,r)}function Ho(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Is(e,r)}}function nd(e,t){var r=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,r===o)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:o.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:o.shared,effects:o.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function pi(e,t,r,o){var i=e.updateQueue;Xt=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var d=l,c=d.next;d.next=null,s===null?a=c:s.next=c,s=d;var u=e.alternate;u!==null&&(u=u.updateQueue,l=u.lastBaseUpdate,l!==s&&(l===null?u.firstBaseUpdate=c:l.next=c,u.lastBaseUpdate=d))}if(a!==null){var g=i.baseState;s=0,u=c=d=null,l=a;do{var f=l.lane,j=l.eventTime;if((o&f)===f){u!==null&&(u=u.next={eventTime:j,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var $=e,S=l;switch(f=t,j=r,S.tag){case 1:if($=S.payload,typeof $=="function"){g=$.call(j,g,f);break e}g=$;break e;case 3:$.flags=$.flags&-65537|128;case 0:if($=S.payload,f=typeof $=="function"?$.call(j,g,f):$,f==null)break e;g=Se({},g,f);break e;case 2:Xt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[l]:f.push(l))}else j={eventTime:j,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},u===null?(c=u=j,d=g):u=u.next=j,s|=f;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;f=l,l=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(!0);if(u===null&&(d=g),i.baseState=d,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Ir|=s,e.lanes=s,e.memoizedState=g}}function od(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var o=e[t],i=o.callback;if(i!==null){if(o.callback=null,o=r,typeof i!="function")throw Error(F(191,i));i.call(o)}}}var mo={},Nt=fr(mo),ro=fr(mo),no=fr(mo);function Sr(e){if(e===mo)throw Error(F(174));return e}function Qs(e,t){switch(me(no,t),me(ro,e),me(Nt,mo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ta(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ta(t,e)}ye(Nt),me(Nt,t)}function un(){ye(Nt),ye(ro),ye(no)}function mu(e){Sr(no.current);var t=Sr(Nt.current),r=Ta(t,e.type);t!==r&&(me(ro,e),me(Nt,r))}function Xs(e){ro.current===e&&(ye(Nt),ye(ro))}var je=fr(0);function fi(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ca=[];function qs(){for(var e=0;e<ca.length;e++)ca[e]._workInProgressVersionPrimary=null;ca.length=0}var Yo=Ot.ReactCurrentDispatcher,ua=Ot.ReactCurrentBatchConfig,Er=0,ke=null,Ee=null,Re=null,gi=!1,Dn=!1,oo=0,Dg=0;function Ae(){throw Error(F(321))}function Ks(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!kt(e[r],t[r]))return!1;return!0}function Js(e,t,r,o,i,a){if(Er=a,ke=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yo.current=e===null||e.memoizedState===null?Yg:Gg,e=r(o,i),Dn){a=0;do{if(Dn=!1,oo=0,25<=a)throw Error(F(301));a+=1,Re=Ee=null,t.updateQueue=null,Yo.current=Vg,e=r(o,i)}while(Dn)}if(Yo.current=mi,t=Ee!==null&&Ee.next!==null,Er=0,Re=Ee=ke=null,gi=!1,t)throw Error(F(300));return e}function Zs(){var e=oo!==0;return oo=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Re===null?ke.memoizedState=Re=e:Re=Re.next=e,Re}function mt(){if(Ee===null){var e=ke.alternate;e=e!==null?e.memoizedState:null}else e=Ee.next;var t=Re===null?ke.memoizedState:Re.next;if(t!==null)Re=t,Ee=e;else{if(e===null)throw Error(F(310));Ee=e,e={memoizedState:Ee.memoizedState,baseState:Ee.baseState,baseQueue:Ee.baseQueue,queue:Ee.queue,next:null},Re===null?ke.memoizedState=Re=e:Re=Re.next=e}return Re}function io(e,t){return typeof t=="function"?t(e):t}function pa(e){var t=mt(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var o=Ee,i=o.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}o.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,o=o.baseState;var l=s=null,d=null,c=a;do{var u=c.lane;if((Er&u)===u)d!==null&&(d=d.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),o=c.hasEagerState?c.eagerState:e(o,c.action);else{var g={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};d===null?(l=d=g,s=o):d=d.next=g,ke.lanes|=u,Ir|=u}c=c.next}while(c!==null&&c!==a);d===null?s=o:d.next=l,kt(o,t.memoizedState)||(Ze=!0),t.memoizedState=o,t.baseState=s,t.baseQueue=d,r.lastRenderedState=o}if(e=r.interleaved,e!==null){i=e;do a=i.lane,ke.lanes|=a,Ir|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function fa(e){var t=mt(),r=t.queue;if(r===null)throw Error(F(311));r.lastRenderedReducer=e;var o=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);kt(a,t.memoizedState)||(Ze=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,o]}function xu(){}function hu(e,t){var r=ke,o=mt(),i=t(),a=!kt(o.memoizedState,i);if(a&&(o.memoizedState=i,Ze=!0),o=o.queue,el(vu.bind(null,r,o,e),[e]),o.getSnapshot!==t||a||Re!==null&&Re.memoizedState.tag&1){if(r.flags|=2048,ao(9,bu.bind(null,r,o,i,t),void 0,null),Le===null)throw Error(F(349));Er&30||yu(r,t,i)}return i}function yu(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function bu(e,t,r,o){t.value=r,t.getSnapshot=o,wu(t)&&ju(e)}function vu(e,t,r){return r(function(){wu(t)&&ju(e)})}function wu(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!kt(e,r)}catch{return!0}}function ju(e){var t=Dt(e,1);t!==null&&jt(t,e,1,-1)}function id(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:e},t.queue=e,e=e.dispatch=Hg.bind(null,ke,e),[t.memoizedState,e]}function ao(e,t,r,o){return e={tag:e,create:t,destroy:r,deps:o,next:null},t=ke.updateQueue,t===null?(t={lastEffect:null,stores:null},ke.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(o=r.next,r.next=e,e.next=o,t.lastEffect=e)),e}function ku(){return mt().memoizedState}function Go(e,t,r,o){var i=$t();ke.flags|=e,i.memoizedState=ao(1|t,r,void 0,o===void 0?null:o)}function Ii(e,t,r,o){var i=mt();o=o===void 0?null:o;var a=void 0;if(Ee!==null){var s=Ee.memoizedState;if(a=s.destroy,o!==null&&Ks(o,s.deps)){i.memoizedState=ao(t,r,a,o);return}}ke.flags|=e,i.memoizedState=ao(1|t,r,a,o)}function ad(e,t){return Go(8390656,8,e,t)}function el(e,t){return Ii(2048,8,e,t)}function Su(e,t){return Ii(4,2,e,t)}function Cu(e,t){return Ii(4,4,e,t)}function $u(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zu(e,t,r){return r=r!=null?r.concat([e]):null,Ii(4,4,$u.bind(null,t,e),r)}function tl(){}function Pu(e,t){var r=mt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Ks(t,o[1])?o[0]:(r.memoizedState=[e,t],e)}function Nu(e,t){var r=mt();t=t===void 0?null:t;var o=r.memoizedState;return o!==null&&t!==null&&Ks(t,o[1])?o[0]:(e=e(),r.memoizedState=[e,t],e)}function Tu(e,t,r){return Er&21?(kt(r,t)||(r=Rc(),ke.lanes|=r,Ir|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ze=!0),e.memoizedState=r)}function Ug(e,t){var r=ue;ue=r!==0&&4>r?r:4,e(!0);var o=ua.transition;ua.transition={};try{e(!1),t()}finally{ue=r,ua.transition=o}}function Eu(){return mt().memoizedState}function Og(e,t,r){var o=sr(e);if(r={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null},Iu(e))Fu(t,r);else if(r=fu(e,t,r,o),r!==null){var i=Ve();jt(r,e,o,i),Mu(r,t,o)}}function Hg(e,t,r){var o=sr(e),i={lane:o,action:r,hasEagerState:!1,eagerState:null,next:null};if(Iu(e))Fu(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,l=a(s,r);if(i.hasEagerState=!0,i.eagerState=l,kt(l,s)){var d=t.interleaved;d===null?(i.next=i,Gs(t)):(i.next=d.next,d.next=i),t.interleaved=i;return}}catch{}finally{}r=fu(e,t,i,o),r!==null&&(i=Ve(),jt(r,e,o,i),Mu(r,t,o))}}function Iu(e){var t=e.alternate;return e===ke||t!==null&&t===ke}function Fu(e,t){Dn=gi=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Mu(e,t,r){if(r&4194240){var o=t.lanes;o&=e.pendingLanes,r|=o,t.lanes=r,Is(e,r)}}var mi={readContext:gt,useCallback:Ae,useContext:Ae,useEffect:Ae,useImperativeHandle:Ae,useInsertionEffect:Ae,useLayoutEffect:Ae,useMemo:Ae,useReducer:Ae,useRef:Ae,useState:Ae,useDebugValue:Ae,useDeferredValue:Ae,useTransition:Ae,useMutableSource:Ae,useSyncExternalStore:Ae,useId:Ae,unstable_isNewReconciler:!1},Yg={readContext:gt,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:gt,useEffect:ad,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Go(4194308,4,$u.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Go(4194308,4,e,t)},useInsertionEffect:function(e,t){return Go(4,2,e,t)},useMemo:function(e,t){var r=$t();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var o=$t();return t=r!==void 0?r(t):t,o.memoizedState=o.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},o.queue=e,e=e.dispatch=Og.bind(null,ke,e),[o.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:id,useDebugValue:tl,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=id(!1),t=e[0];return e=Ug.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var o=ke,i=$t();if(be){if(r===void 0)throw Error(F(407));r=r()}else{if(r=t(),Le===null)throw Error(F(349));Er&30||yu(o,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,ad(vu.bind(null,o,a,e),[e]),o.flags|=2048,ao(9,bu.bind(null,o,a,r,t),void 0,null),r},useId:function(){var e=$t(),t=Le.identifierPrefix;if(be){var r=Wt,o=Lt;r=(o&~(1<<32-wt(o)-1)).toString(32)+r,t=":"+t+"R"+r,r=oo++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Dg++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Gg={readContext:gt,useCallback:Pu,useContext:gt,useEffect:el,useImperativeHandle:zu,useInsertionEffect:Su,useLayoutEffect:Cu,useMemo:Nu,useReducer:pa,useRef:ku,useState:function(){return pa(io)},useDebugValue:tl,useDeferredValue:function(e){var t=mt();return Tu(t,Ee.memoizedState,e)},useTransition:function(){var e=pa(io)[0],t=mt().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:hu,useId:Eu,unstable_isNewReconciler:!1},Vg={readContext:gt,useCallback:Pu,useContext:gt,useEffect:el,useImperativeHandle:zu,useInsertionEffect:Su,useLayoutEffect:Cu,useMemo:Nu,useReducer:fa,useRef:ku,useState:function(){return fa(io)},useDebugValue:tl,useDeferredValue:function(e){var t=mt();return Ee===null?t.memoizedState=e:Tu(t,Ee.memoizedState,e)},useTransition:function(){var e=fa(io)[0],t=mt().memoizedState;return[e,t]},useMutableSource:xu,useSyncExternalStore:hu,useId:Eu,unstable_isNewReconciler:!1};function ht(e,t){if(e&&e.defaultProps){t=Se({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Ka(e,t,r,o){t=e.memoizedState,r=r(o,t),r=r==null?t:Se({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Fi={isMounted:function(e){return(e=e._reactInternals)?Lr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var o=Ve(),i=sr(e),a=_t(o,i);a.payload=t,r!=null&&(a.callback=r),t=ir(e,a,i),t!==null&&(jt(t,e,i,o),Ho(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var o=Ve(),i=sr(e),a=_t(o,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=ir(e,a,i),t!==null&&(jt(t,e,i,o),Ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ve(),o=sr(e),i=_t(r,o);i.tag=2,t!=null&&(i.callback=t),t=ir(e,i,o),t!==null&&(jt(t,e,o,r),Ho(t,e,o))}};function sd(e,t,r,o,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,a,s):t.prototype&&t.prototype.isPureReactComponent?!Jn(r,o)||!Jn(i,a):!0}function Ru(e,t,r){var o=!1,i=ur,a=t.contextType;return typeof a=="object"&&a!==null?a=gt(a):(i=tt(t)?Nr:He.current,o=t.contextTypes,a=(o=o!=null)?ln(e,i):ur),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Fi,e.stateNode=t,t._reactInternals=e,o&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function ld(e,t,r,o){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,o),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,o),t.state!==e&&Fi.enqueueReplaceState(t,t.state,null)}function Ja(e,t,r,o){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Vs(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=gt(a):(a=tt(t)?Nr:He.current,i.context=ln(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ka(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Fi.enqueueReplaceState(i,i.state,null),pi(e,r,i,o),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var r="",o=t;do r+=wf(o),o=o.return;while(o);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function ga(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Za(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Qg=typeof WeakMap=="function"?WeakMap:Map;function Lu(e,t,r){r=_t(-1,r),r.tag=3,r.payload={element:null};var o=t.value;return r.callback=function(){hi||(hi=!0,ds=o),Za(e,t)},r}function Wu(e,t,r){r=_t(-1,r),r.tag=3;var o=e.type.getDerivedStateFromError;if(typeof o=="function"){var i=t.value;r.payload=function(){return o(i)},r.callback=function(){Za(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Za(e,t),typeof o!="function"&&(ar===null?ar=new Set([this]):ar.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function dd(e,t,r){var o=e.pingCache;if(o===null){o=e.pingCache=new Qg;var i=new Set;o.set(t,i)}else i=o.get(t),i===void 0&&(i=new Set,o.set(t,i));i.has(r)||(i.add(r),e=l0.bind(null,e,t,r),t.then(e,e))}function cd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ud(e,t,r,o,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=_t(-1,1),t.tag=2,ir(r,t,1))),r.lanes|=1),e)}var Xg=Ot.ReactCurrentOwner,Ze=!1;function Ye(e,t,r,o){t.child=e===null?pu(t,null,r,o):cn(t,e.child,r,o)}function pd(e,t,r,o,i){r=r.render;var a=t.ref;return nn(t,i),o=Js(e,t,r,o,a,i),r=Zs(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(be&&r&&As(t),t.flags|=1,Ye(e,t,o,i),t.child)}function fd(e,t,r,o,i){if(e===null){var a=r.type;return typeof a=="function"&&!dl(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,_u(e,t,a,o,i)):(e=qo(r.type,null,o,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:Jn,r(s,o)&&e.ref===t.ref)return Ut(e,t,i)}return t.flags|=1,e=lr(a,o),e.ref=t.ref,e.return=t,t.child=e}function _u(e,t,r,o,i){if(e!==null){var a=e.memoizedProps;if(Jn(a,o)&&e.ref===t.ref)if(Ze=!1,t.pendingProps=o=a,(e.lanes&i)!==0)e.flags&131072&&(Ze=!0);else return t.lanes=e.lanes,Ut(e,t,i)}return es(e,t,r,o,i)}function Bu(e,t,r){var o=t.pendingProps,i=o.children,a=e!==null?e.memoizedState:null;if(o.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(Jr,ot),ot|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(Jr,ot),ot|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},o=a!==null?a.baseLanes:r,me(Jr,ot),ot|=o}else a!==null?(o=a.baseLanes|r,t.memoizedState=null):o=r,me(Jr,ot),ot|=o;return Ye(e,t,i,r),t.child}function Au(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function es(e,t,r,o,i){var a=tt(r)?Nr:He.current;return a=ln(t,a),nn(t,i),r=Js(e,t,r,o,a,i),o=Zs(),e!==null&&!Ze?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ut(e,t,i)):(be&&o&&As(t),t.flags|=1,Ye(e,t,r,i),t.child)}function gd(e,t,r,o,i){if(tt(r)){var a=!0;si(t)}else a=!1;if(nn(t,i),t.stateNode===null)Vo(e,t),Ru(t,r,o),Ja(t,r,o,i),o=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var d=s.context,c=r.contextType;typeof c=="object"&&c!==null?c=gt(c):(c=tt(r)?Nr:He.current,c=ln(t,c));var u=r.getDerivedStateFromProps,g=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==o||d!==c)&&ld(t,s,o,c),Xt=!1;var f=t.memoizedState;s.state=f,pi(t,o,s,i),d=t.memoizedState,l!==o||f!==d||et.current||Xt?(typeof u=="function"&&(Ka(t,r,u,o),d=t.memoizedState),(l=Xt||sd(t,r,l,o,f,d,c))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=o,t.memoizedState=d),s.props=o,s.state=d,s.context=c,o=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),o=!1)}else{s=t.stateNode,gu(e,t),l=t.memoizedProps,c=t.type===t.elementType?l:ht(t.type,l),s.props=c,g=t.pendingProps,f=s.context,d=r.contextType,typeof d=="object"&&d!==null?d=gt(d):(d=tt(r)?Nr:He.current,d=ln(t,d));var j=r.getDerivedStateFromProps;(u=typeof j=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==g||f!==d)&&ld(t,s,o,d),Xt=!1,f=t.memoizedState,s.state=f,pi(t,o,s,i);var $=t.memoizedState;l!==g||f!==$||et.current||Xt?(typeof j=="function"&&(Ka(t,r,j,o),$=t.memoizedState),(c=Xt||sd(t,r,c,o,f,$,d)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(o,$,d),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(o,$,d)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=o,t.memoizedState=$),s.props=o,s.state=$,s.context=d,o=c):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),o=!1)}return ts(e,t,r,o,a,i)}function ts(e,t,r,o,i,a){Au(e,t);var s=(t.flags&128)!==0;if(!o&&!s)return i&&Zl(t,r,!1),Ut(e,t,a);o=t.stateNode,Xg.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:o.render();return t.flags|=1,e!==null&&s?(t.child=cn(t,e.child,null,a),t.child=cn(t,null,l,a)):Ye(e,t,l,a),t.memoizedState=o.state,i&&Zl(t,r,!0),t.child}function Du(e){var t=e.stateNode;t.pendingContext?Jl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Jl(e,t.context,!1),Qs(e,t.containerInfo)}function md(e,t,r,o,i){return dn(),Us(i),t.flags|=256,Ye(e,t,r,o),t.child}var rs={dehydrated:null,treeContext:null,retryLane:0};function ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function Uu(e,t,r){var o=t.pendingProps,i=je.current,a=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),me(je,i&1),e===null)return Xa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=o.children,e=o.fallback,a?(o=t.mode,a=t.child,s={mode:"hidden",children:s},!(o&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=Li(s,o,0,null),e=zr(e,o,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ns(r),t.memoizedState=rs,e):rl(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return qg(e,t,s,o,l,i,r);if(a){a=o.fallback,s=t.mode,i=e.child,l=i.sibling;var d={mode:"hidden",children:o.children};return!(s&1)&&t.child!==i?(o=t.child,o.childLanes=0,o.pendingProps=d,t.deletions=null):(o=lr(i,d),o.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=lr(l,a):(a=zr(a,s,r,null),a.flags|=2),a.return=t,o.return=t,o.sibling=a,t.child=o,o=a,a=t.child,s=e.child.memoizedState,s=s===null?ns(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=rs,o}return a=e.child,e=a.sibling,o=lr(a,{mode:"visible",children:o.children}),!(t.mode&1)&&(o.lanes=r),o.return=t,o.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=o,t.memoizedState=null,o}function rl(e,t){return t=Li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Io(e,t,r,o){return o!==null&&Us(o),cn(t,e.child,null,r),e=rl(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function qg(e,t,r,o,i,a,s){if(r)return t.flags&256?(t.flags&=-257,o=ga(Error(F(422))),Io(e,t,s,o)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=o.fallback,i=t.mode,o=Li({mode:"visible",children:o.children},i,0,null),a=zr(a,i,s,null),a.flags|=2,o.return=t,a.return=t,o.sibling=a,t.child=o,t.mode&1&&cn(t,e.child,null,s),t.child.memoizedState=ns(s),t.memoizedState=rs,a);if(!(t.mode&1))return Io(e,t,s,null);if(i.data==="$!"){if(o=i.nextSibling&&i.nextSibling.dataset,o)var l=o.dgst;return o=l,a=Error(F(419)),o=ga(a,o,void 0),Io(e,t,s,o)}if(l=(s&e.childLanes)!==0,Ze||l){if(o=Le,o!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(o.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Dt(e,i),jt(o,e,i,-1))}return ll(),o=ga(Error(F(421))),Io(e,t,s,o)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=d0.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,it=or(i.nextSibling),at=t,be=!0,bt=null,e!==null&&(ct[ut++]=Lt,ct[ut++]=Wt,ct[ut++]=Tr,Lt=e.id,Wt=e.overflow,Tr=t),t=rl(t,o.children),t.flags|=4096,t)}function xd(e,t,r){e.lanes|=t;var o=e.alternate;o!==null&&(o.lanes|=t),qa(e.return,t,r)}function ma(e,t,r,o,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:o,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=o,a.tail=r,a.tailMode=i)}function Ou(e,t,r){var o=t.pendingProps,i=o.revealOrder,a=o.tail;if(Ye(e,t,o.children,r),o=je.current,o&2)o=o&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xd(e,r,t);else if(e.tag===19)xd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}o&=1}if(me(je,o),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&fi(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),ma(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&fi(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}ma(t,!0,r,null,a);break;case"together":ma(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ut(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ir|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(F(153));if(t.child!==null){for(e=t.child,r=lr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=lr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Kg(e,t,r){switch(t.tag){case 3:Du(t),dn();break;case 5:mu(t);break;case 1:tt(t.type)&&si(t);break;case 4:Qs(t,t.stateNode.containerInfo);break;case 10:var o=t.type._context,i=t.memoizedProps.value;me(ci,o._currentValue),o._currentValue=i;break;case 13:if(o=t.memoizedState,o!==null)return o.dehydrated!==null?(me(je,je.current&1),t.flags|=128,null):r&t.child.childLanes?Uu(e,t,r):(me(je,je.current&1),e=Ut(e,t,r),e!==null?e.sibling:null);me(je,je.current&1);break;case 19:if(o=(r&t.childLanes)!==0,e.flags&128){if(o)return Ou(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),me(je,je.current),o)break;return null;case 22:case 23:return t.lanes=0,Bu(e,t,r)}return Ut(e,t,r)}var Hu,os,Yu,Gu;Hu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};os=function(){};Yu=function(e,t,r,o){var i=e.memoizedProps;if(i!==o){e=t.stateNode,Sr(Nt.current);var a=null;switch(r){case"input":i=$a(e,i),o=$a(e,o),a=[];break;case"select":i=Se({},i,{value:void 0}),o=Se({},o,{value:void 0}),a=[];break;case"textarea":i=Na(e,i),o=Na(e,o),a=[];break;default:typeof i.onClick!="function"&&typeof o.onClick=="function"&&(e.onclick=ii)}Ea(r,o);var s;r=null;for(c in i)if(!o.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var l=i[c];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Yn.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,null));for(c in o){var d=o[c];if(l=i!=null?i[c]:void 0,o.hasOwnProperty(c)&&d!==l&&(d!=null||l!=null))if(c==="style")if(l){for(s in l)!l.hasOwnProperty(s)||d&&d.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in d)d.hasOwnProperty(s)&&l[s]!==d[s]&&(r||(r={}),r[s]=d[s])}else r||(a||(a=[]),a.push(c,r)),r=d;else c==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,l=l?l.__html:void 0,d!=null&&l!==d&&(a=a||[]).push(c,d)):c==="children"?typeof d!="string"&&typeof d!="number"||(a=a||[]).push(c,""+d):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(c)?(d!=null&&c==="onScroll"&&he("scroll",e),a||l===d||(a=[])):(a=a||[]).push(c,d))}r&&(a=a||[]).push("style",r);var c=a;(t.updateQueue=c)&&(t.flags|=4)}};Gu=function(e,t,r,o){r!==o&&(t.flags|=4)};function Nn(e,t){if(!be)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function De(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,o=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags&14680064,o|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,o|=i.subtreeFlags,o|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=o,e.childLanes=r,t}function Jg(e,t,r){var o=t.pendingProps;switch(Ds(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(t),null;case 1:return tt(t.type)&&ai(),De(t),null;case 3:return o=t.stateNode,un(),ye(et),ye(He),qs(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(e===null||e.child===null)&&(To(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,bt!==null&&(ps(bt),bt=null))),os(e,t),De(t),null;case 5:Xs(t);var i=Sr(no.current);if(r=t.type,e!==null&&t.stateNode!=null)Yu(e,t,r,o,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!o){if(t.stateNode===null)throw Error(F(166));return De(t),null}if(e=Sr(Nt.current),To(t)){o=t.stateNode,r=t.type;var a=t.memoizedProps;switch(o[zt]=t,o[to]=a,e=(t.mode&1)!==0,r){case"dialog":he("cancel",o),he("close",o);break;case"iframe":case"object":case"embed":he("load",o);break;case"video":case"audio":for(i=0;i<Rn.length;i++)he(Rn[i],o);break;case"source":he("error",o);break;case"img":case"image":case"link":he("error",o),he("load",o);break;case"details":he("toggle",o);break;case"input":Cl(o,a),he("invalid",o);break;case"select":o._wrapperState={wasMultiple:!!a.multiple},he("invalid",o);break;case"textarea":zl(o,a),he("invalid",o)}Ea(r,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?o.textContent!==l&&(a.suppressHydrationWarning!==!0&&No(o.textContent,l,e),i=["children",l]):typeof l=="number"&&o.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&No(o.textContent,l,e),i=["children",""+l]):Yn.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&he("scroll",o)}switch(r){case"input":wo(o),$l(o,a,!0);break;case"textarea":wo(o),Pl(o);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(o.onclick=ii)}o=i,t.updateQueue=o,o!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof o.is=="string"?e=s.createElement(r,{is:o.is}):(e=s.createElement(r),r==="select"&&(s=e,o.multiple?s.multiple=!0:o.size&&(s.size=o.size))):e=s.createElementNS(e,r),e[zt]=t,e[to]=o,Hu(e,t,!1,!1),t.stateNode=e;e:{switch(s=Ia(r,o),r){case"dialog":he("cancel",e),he("close",e),i=o;break;case"iframe":case"object":case"embed":he("load",e),i=o;break;case"video":case"audio":for(i=0;i<Rn.length;i++)he(Rn[i],e);i=o;break;case"source":he("error",e),i=o;break;case"img":case"image":case"link":he("error",e),he("load",e),i=o;break;case"details":he("toggle",e),i=o;break;case"input":Cl(e,o),i=$a(e,o),he("invalid",e);break;case"option":i=o;break;case"select":e._wrapperState={wasMultiple:!!o.multiple},i=Se({},o,{value:void 0}),he("invalid",e);break;case"textarea":zl(e,o),i=Na(e,o),he("invalid",e);break;default:i=o}Ea(r,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var d=l[a];a==="style"?kc(e,d):a==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&wc(e,d)):a==="children"?typeof d=="string"?(r!=="textarea"||d!=="")&&Gn(e,d):typeof d=="number"&&Gn(e,""+d):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Yn.hasOwnProperty(a)?d!=null&&a==="onScroll"&&he("scroll",e):d!=null&&$s(e,a,d,s))}switch(r){case"input":wo(e),$l(e,o,!1);break;case"textarea":wo(e),Pl(e);break;case"option":o.value!=null&&e.setAttribute("value",""+cr(o.value));break;case"select":e.multiple=!!o.multiple,a=o.value,a!=null?Zr(e,!!o.multiple,a,!1):o.defaultValue!=null&&Zr(e,!!o.multiple,o.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=ii)}switch(r){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}}o&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return De(t),null;case 6:if(e&&t.stateNode!=null)Gu(e,t,e.memoizedProps,o);else{if(typeof o!="string"&&t.stateNode===null)throw Error(F(166));if(r=Sr(no.current),Sr(Nt.current),To(t)){if(o=t.stateNode,r=t.memoizedProps,o[zt]=t,(a=o.nodeValue!==r)&&(e=at,e!==null))switch(e.tag){case 3:No(o.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&No(o.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else o=(r.nodeType===9?r:r.ownerDocument).createTextNode(o),o[zt]=t,t.stateNode=o}return De(t),null;case 13:if(ye(je),o=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(be&&it!==null&&t.mode&1&&!(t.flags&128))cu(),dn(),t.flags|=98560,a=!1;else if(a=To(t),o!==null&&o.dehydrated!==null){if(e===null){if(!a)throw Error(F(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(F(317));a[zt]=t}else dn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;De(t),a=!1}else bt!==null&&(ps(bt),bt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(o=o!==null,o!==(e!==null&&e.memoizedState!==null)&&o&&(t.child.flags|=8192,t.mode&1&&(e===null||je.current&1?Ie===0&&(Ie=3):ll())),t.updateQueue!==null&&(t.flags|=4),De(t),null);case 4:return un(),os(e,t),e===null&&Zn(t.stateNode.containerInfo),De(t),null;case 10:return Ys(t.type._context),De(t),null;case 17:return tt(t.type)&&ai(),De(t),null;case 19:if(ye(je),a=t.memoizedState,a===null)return De(t),null;if(o=(t.flags&128)!==0,s=a.rendering,s===null)if(o)Nn(a,!1);else{if(Ie!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=fi(e),s!==null){for(t.flags|=128,Nn(a,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),t.subtreeFlags=0,o=r,r=t.child;r!==null;)a=r,e=o,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return me(je,je.current&1|2),t.child}e=e.sibling}a.tail!==null&&ze()>fn&&(t.flags|=128,o=!0,Nn(a,!1),t.lanes=4194304)}else{if(!o)if(e=fi(s),e!==null){if(t.flags|=128,o=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Nn(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!be)return De(t),null}else 2*ze()-a.renderingStartTime>fn&&r!==1073741824&&(t.flags|=128,o=!0,Nn(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=ze(),t.sibling=null,r=je.current,me(je,o?r&1|2:r&1),t):(De(t),null);case 22:case 23:return sl(),o=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==o&&(t.flags|=8192),o&&t.mode&1?ot&1073741824&&(De(t),t.subtreeFlags&6&&(t.flags|=8192)):De(t),null;case 24:return null;case 25:return null}throw Error(F(156,t.tag))}function Zg(e,t){switch(Ds(t),t.tag){case 1:return tt(t.type)&&ai(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return un(),ye(et),ye(He),qs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Xs(t),null;case 13:if(ye(je),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(F(340));dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(je),null;case 4:return un(),null;case 10:return Ys(t.type._context),null;case 22:case 23:return sl(),null;case 24:return null;default:return null}}var Fo=!1,Ue=!1,e0=typeof WeakSet=="function"?WeakSet:Set,A=null;function Kr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(o){Ce(e,t,o)}else r.current=null}function is(e,t,r){try{r()}catch(o){Ce(e,t,o)}}var hd=!1;function t0(e,t){if(Ua=ri,e=Kc(),Bs(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var o=r.getSelection&&r.getSelection();if(o&&o.rangeCount!==0){r=o.anchorNode;var i=o.anchorOffset,a=o.focusNode;o=o.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,l=-1,d=-1,c=0,u=0,g=e,f=null;t:for(;;){for(var j;g!==r||i!==0&&g.nodeType!==3||(l=s+i),g!==a||o!==0&&g.nodeType!==3||(d=s+o),g.nodeType===3&&(s+=g.nodeValue.length),(j=g.firstChild)!==null;)f=g,g=j;for(;;){if(g===e)break t;if(f===r&&++c===i&&(l=s),f===a&&++u===o&&(d=s),(j=g.nextSibling)!==null)break;g=f,f=g.parentNode}g=j}r=l===-1||d===-1?null:{start:l,end:d}}else r=null}r=r||{start:0,end:0}}else r=null;for(Oa={focusedElem:e,selectionRange:r},ri=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var $=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if($!==null){var S=$.memoizedProps,w=$.memoizedState,x=t.stateNode,p=x.getSnapshotBeforeUpdate(t.elementType===t.type?S:ht(t.type,S),w);x.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(P){Ce(t,t.return,P)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return $=hd,hd=!1,$}function Un(e,t,r){var o=t.updateQueue;if(o=o!==null?o.lastEffect:null,o!==null){var i=o=o.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&is(t,r,a)}i=i.next}while(i!==o)}}function Mi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var o=r.create;r.destroy=o()}r=r.next}while(r!==t)}}function as(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Vu(e){var t=e.alternate;t!==null&&(e.alternate=null,Vu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[to],delete t[Ga],delete t[Wg],delete t[_g])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Qu(e){return e.tag===5||e.tag===3||e.tag===4}function yd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ss(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=ii));else if(o!==4&&(e=e.child,e!==null))for(ss(e,t,r),e=e.sibling;e!==null;)ss(e,t,r),e=e.sibling}function ls(e,t,r){var o=e.tag;if(o===5||o===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(o!==4&&(e=e.child,e!==null))for(ls(e,t,r),e=e.sibling;e!==null;)ls(e,t,r),e=e.sibling}var We=null,yt=!1;function Yt(e,t,r){for(r=r.child;r!==null;)Xu(e,t,r),r=r.sibling}function Xu(e,t,r){if(Pt&&typeof Pt.onCommitFiberUnmount=="function")try{Pt.onCommitFiberUnmount($i,r)}catch{}switch(r.tag){case 5:Ue||Kr(r,t);case 6:var o=We,i=yt;We=null,Yt(e,t,r),We=o,yt=i,We!==null&&(yt?(e=We,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):We.removeChild(r.stateNode));break;case 18:We!==null&&(yt?(e=We,r=r.stateNode,e.nodeType===8?la(e.parentNode,r):e.nodeType===1&&la(e,r),qn(e)):la(We,r.stateNode));break;case 4:o=We,i=yt,We=r.stateNode.containerInfo,yt=!0,Yt(e,t,r),We=o,yt=i;break;case 0:case 11:case 14:case 15:if(!Ue&&(o=r.updateQueue,o!==null&&(o=o.lastEffect,o!==null))){i=o=o.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&is(r,t,s),i=i.next}while(i!==o)}Yt(e,t,r);break;case 1:if(!Ue&&(Kr(r,t),o=r.stateNode,typeof o.componentWillUnmount=="function"))try{o.props=r.memoizedProps,o.state=r.memoizedState,o.componentWillUnmount()}catch(l){Ce(r,t,l)}Yt(e,t,r);break;case 21:Yt(e,t,r);break;case 22:r.mode&1?(Ue=(o=Ue)||r.memoizedState!==null,Yt(e,t,r),Ue=o):Yt(e,t,r);break;default:Yt(e,t,r)}}function bd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new e0),t.forEach(function(o){var i=c0.bind(null,e,o);r.has(o)||(r.add(o),o.then(i,i))})}}function xt(e,t){var r=t.deletions;if(r!==null)for(var o=0;o<r.length;o++){var i=r[o];try{var a=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:We=l.stateNode,yt=!1;break e;case 3:We=l.stateNode.containerInfo,yt=!0;break e;case 4:We=l.stateNode.containerInfo,yt=!0;break e}l=l.return}if(We===null)throw Error(F(160));Xu(a,s,i),We=null,yt=!1;var d=i.alternate;d!==null&&(d.return=null),i.return=null}catch(c){Ce(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)qu(t,e),t=t.sibling}function qu(e,t){var r=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Ct(e),o&4){try{Un(3,e,e.return),Mi(3,e)}catch(S){Ce(e,e.return,S)}try{Un(5,e,e.return)}catch(S){Ce(e,e.return,S)}}break;case 1:xt(t,e),Ct(e),o&512&&r!==null&&Kr(r,r.return);break;case 5:if(xt(t,e),Ct(e),o&512&&r!==null&&Kr(r,r.return),e.flags&32){var i=e.stateNode;try{Gn(i,"")}catch(S){Ce(e,e.return,S)}}if(o&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,l=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&yc(i,a),Ia(l,s);var c=Ia(l,a);for(s=0;s<d.length;s+=2){var u=d[s],g=d[s+1];u==="style"?kc(i,g):u==="dangerouslySetInnerHTML"?wc(i,g):u==="children"?Gn(i,g):$s(i,u,g,c)}switch(l){case"input":za(i,a);break;case"textarea":bc(i,a);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var j=a.value;j!=null?Zr(i,!!a.multiple,j,!1):f!==!!a.multiple&&(a.defaultValue!=null?Zr(i,!!a.multiple,a.defaultValue,!0):Zr(i,!!a.multiple,a.multiple?[]:"",!1))}i[to]=a}catch(S){Ce(e,e.return,S)}}break;case 6:if(xt(t,e),Ct(e),o&4){if(e.stateNode===null)throw Error(F(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(S){Ce(e,e.return,S)}}break;case 3:if(xt(t,e),Ct(e),o&4&&r!==null&&r.memoizedState.isDehydrated)try{qn(t.containerInfo)}catch(S){Ce(e,e.return,S)}break;case 4:xt(t,e),Ct(e);break;case 13:xt(t,e),Ct(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(il=ze())),o&4&&bd(e);break;case 22:if(u=r!==null&&r.memoizedState!==null,e.mode&1?(Ue=(c=Ue)||u,xt(t,e),Ue=c):xt(t,e),Ct(e),o&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(A=e,u=e.child;u!==null;){for(g=A=u;A!==null;){switch(f=A,j=f.child,f.tag){case 0:case 11:case 14:case 15:Un(4,f,f.return);break;case 1:Kr(f,f.return);var $=f.stateNode;if(typeof $.componentWillUnmount=="function"){o=f,r=f.return;try{t=o,$.props=t.memoizedProps,$.state=t.memoizedState,$.componentWillUnmount()}catch(S){Ce(o,r,S)}}break;case 5:Kr(f,f.return);break;case 22:if(f.memoizedState!==null){wd(g);continue}}j!==null?(j.return=f,A=j):wd(g)}u=u.sibling}e:for(u=null,g=e;;){if(g.tag===5){if(u===null){u=g;try{i=g.stateNode,c?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=g.stateNode,d=g.memoizedProps.style,s=d!=null&&d.hasOwnProperty("display")?d.display:null,l.style.display=jc("display",s))}catch(S){Ce(e,e.return,S)}}}else if(g.tag===6){if(u===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(S){Ce(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;u===g&&(u=null),g=g.return}u===g&&(u=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:xt(t,e),Ct(e),o&4&&bd(e);break;case 21:break;default:xt(t,e),Ct(e)}}function Ct(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Qu(r)){var o=r;break e}r=r.return}throw Error(F(160))}switch(o.tag){case 5:var i=o.stateNode;o.flags&32&&(Gn(i,""),o.flags&=-33);var a=yd(e);ls(e,a,i);break;case 3:case 4:var s=o.stateNode.containerInfo,l=yd(e);ss(e,l,s);break;default:throw Error(F(161))}}catch(d){Ce(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function r0(e,t,r){A=e,Ku(e)}function Ku(e,t,r){for(var o=(e.mode&1)!==0;A!==null;){var i=A,a=i.child;if(i.tag===22&&o){var s=i.memoizedState!==null||Fo;if(!s){var l=i.alternate,d=l!==null&&l.memoizedState!==null||Ue;l=Fo;var c=Ue;if(Fo=s,(Ue=d)&&!c)for(A=i;A!==null;)s=A,d=s.child,s.tag===22&&s.memoizedState!==null?jd(i):d!==null?(d.return=s,A=d):jd(i);for(;a!==null;)A=a,Ku(a),a=a.sibling;A=i,Fo=l,Ue=c}vd(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,A=a):vd(e)}}function vd(e){for(;A!==null;){var t=A;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ue||Mi(5,t);break;case 1:var o=t.stateNode;if(t.flags&4&&!Ue)if(r===null)o.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:ht(t.type,r.memoizedProps);o.componentDidUpdate(i,r.memoizedState,o.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&od(t,a,o);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}od(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&r.focus();break;case"img":d.src&&(r.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var g=u.dehydrated;g!==null&&qn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}Ue||t.flags&512&&as(t)}catch(f){Ce(t,t.return,f)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function wd(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function jd(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{Mi(4,t)}catch(d){Ce(t,r,d)}break;case 1:var o=t.stateNode;if(typeof o.componentDidMount=="function"){var i=t.return;try{o.componentDidMount()}catch(d){Ce(t,i,d)}}var a=t.return;try{as(t)}catch(d){Ce(t,a,d)}break;case 5:var s=t.return;try{as(t)}catch(d){Ce(t,s,d)}}}catch(d){Ce(t,t.return,d)}if(t===e){A=null;break}var l=t.sibling;if(l!==null){l.return=t.return,A=l;break}A=t.return}}var n0=Math.ceil,xi=Ot.ReactCurrentDispatcher,nl=Ot.ReactCurrentOwner,ft=Ot.ReactCurrentBatchConfig,le=0,Le=null,Pe=null,_e=0,ot=0,Jr=fr(0),Ie=0,so=null,Ir=0,Ri=0,ol=0,On=null,Je=null,il=0,fn=1/0,Mt=null,hi=!1,ds=null,ar=null,Mo=!1,Zt=null,yi=0,Hn=0,cs=null,Qo=-1,Xo=0;function Ve(){return le&6?ze():Qo!==-1?Qo:Qo=ze()}function sr(e){return e.mode&1?le&2&&_e!==0?_e&-_e:Ag.transition!==null?(Xo===0&&(Xo=Rc()),Xo):(e=ue,e!==0||(e=window.event,e=e===void 0?16:Uc(e.type)),e):1}function jt(e,t,r,o){if(50<Hn)throw Hn=0,cs=null,Error(F(185));po(e,r,o),(!(le&2)||e!==Le)&&(e===Le&&(!(le&2)&&(Ri|=r),Ie===4&&Kt(e,_e)),rt(e,o),r===1&&le===0&&!(t.mode&1)&&(fn=ze()+500,Ei&&gr()))}function rt(e,t){var r=e.callbackNode;Af(e,t);var o=ti(e,e===Le?_e:0);if(o===0)r!==null&&El(r),e.callbackNode=null,e.callbackPriority=0;else if(t=o&-o,e.callbackPriority!==t){if(r!=null&&El(r),t===1)e.tag===0?Bg(kd.bind(null,e)):su(kd.bind(null,e)),Rg(function(){!(le&6)&&gr()}),r=null;else{switch(Lc(o)){case 1:r=Es;break;case 4:r=Fc;break;case 16:r=ei;break;case 536870912:r=Mc;break;default:r=ei}r=ip(r,Ju.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Ju(e,t){if(Qo=-1,Xo=0,le&6)throw Error(F(327));var r=e.callbackNode;if(on()&&e.callbackNode!==r)return null;var o=ti(e,e===Le?_e:0);if(o===0)return null;if(o&30||o&e.expiredLanes||t)t=bi(e,o);else{t=o;var i=le;le|=2;var a=ep();(Le!==e||_e!==t)&&(Mt=null,fn=ze()+500,$r(e,t));do try{a0();break}catch(l){Zu(e,l)}while(!0);Hs(),xi.current=a,le=i,Pe!==null?t=0:(Le=null,_e=0,t=Ie)}if(t!==0){if(t===2&&(i=Wa(e),i!==0&&(o=i,t=us(e,i))),t===1)throw r=so,$r(e,0),Kt(e,o),rt(e,ze()),r;if(t===6)Kt(e,o);else{if(i=e.current.alternate,!(o&30)&&!o0(i)&&(t=bi(e,o),t===2&&(a=Wa(e),a!==0&&(o=a,t=us(e,a))),t===1))throw r=so,$r(e,0),Kt(e,o),rt(e,ze()),r;switch(e.finishedWork=i,e.finishedLanes=o,t){case 0:case 1:throw Error(F(345));case 2:wr(e,Je,Mt);break;case 3:if(Kt(e,o),(o&130023424)===o&&(t=il+500-ze(),10<t)){if(ti(e,0)!==0)break;if(i=e.suspendedLanes,(i&o)!==o){Ve(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ya(wr.bind(null,e,Je,Mt),t);break}wr(e,Je,Mt);break;case 4:if(Kt(e,o),(o&4194240)===o)break;for(t=e.eventTimes,i=-1;0<o;){var s=31-wt(o);a=1<<s,s=t[s],s>i&&(i=s),o&=~a}if(o=i,o=ze()-o,o=(120>o?120:480>o?480:1080>o?1080:1920>o?1920:3e3>o?3e3:4320>o?4320:1960*n0(o/1960))-o,10<o){e.timeoutHandle=Ya(wr.bind(null,e,Je,Mt),o);break}wr(e,Je,Mt);break;case 5:wr(e,Je,Mt);break;default:throw Error(F(329))}}}return rt(e,ze()),e.callbackNode===r?Ju.bind(null,e):null}function us(e,t){var r=On;return e.current.memoizedState.isDehydrated&&($r(e,t).flags|=256),e=bi(e,t),e!==2&&(t=Je,Je=r,t!==null&&ps(t)),e}function ps(e){Je===null?Je=e:Je.push.apply(Je,e)}function o0(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var o=0;o<r.length;o++){var i=r[o],a=i.getSnapshot;i=i.value;try{if(!kt(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kt(e,t){for(t&=~ol,t&=~Ri,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-wt(t),o=1<<r;e[r]=-1,t&=~o}}function kd(e){if(le&6)throw Error(F(327));on();var t=ti(e,0);if(!(t&1))return rt(e,ze()),null;var r=bi(e,t);if(e.tag!==0&&r===2){var o=Wa(e);o!==0&&(t=o,r=us(e,o))}if(r===1)throw r=so,$r(e,0),Kt(e,t),rt(e,ze()),r;if(r===6)throw Error(F(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wr(e,Je,Mt),rt(e,ze()),null}function al(e,t){var r=le;le|=1;try{return e(t)}finally{le=r,le===0&&(fn=ze()+500,Ei&&gr())}}function Fr(e){Zt!==null&&Zt.tag===0&&!(le&6)&&on();var t=le;le|=1;var r=ft.transition,o=ue;try{if(ft.transition=null,ue=1,e)return e()}finally{ue=o,ft.transition=r,le=t,!(le&6)&&gr()}}function sl(){ot=Jr.current,ye(Jr)}function $r(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Mg(r)),Pe!==null)for(r=Pe.return;r!==null;){var o=r;switch(Ds(o),o.tag){case 1:o=o.type.childContextTypes,o!=null&&ai();break;case 3:un(),ye(et),ye(He),qs();break;case 5:Xs(o);break;case 4:un();break;case 13:ye(je);break;case 19:ye(je);break;case 10:Ys(o.type._context);break;case 22:case 23:sl()}r=r.return}if(Le=e,Pe=e=lr(e.current,null),_e=ot=t,Ie=0,so=null,ol=Ri=Ir=0,Je=On=null,kr!==null){for(t=0;t<kr.length;t++)if(r=kr[t],o=r.interleaved,o!==null){r.interleaved=null;var i=o.next,a=r.pending;if(a!==null){var s=a.next;a.next=i,o.next=s}r.pending=o}kr=null}return e}function Zu(e,t){do{var r=Pe;try{if(Hs(),Yo.current=mi,gi){for(var o=ke.memoizedState;o!==null;){var i=o.queue;i!==null&&(i.pending=null),o=o.next}gi=!1}if(Er=0,Re=Ee=ke=null,Dn=!1,oo=0,nl.current=null,r===null||r.return===null){Ie=1,so=t,Pe=null;break}e:{var a=e,s=r.return,l=r,d=t;if(t=_e,l.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var c=d,u=l,g=u.tag;if(!(u.mode&1)&&(g===0||g===11||g===15)){var f=u.alternate;f?(u.updateQueue=f.updateQueue,u.memoizedState=f.memoizedState,u.lanes=f.lanes):(u.updateQueue=null,u.memoizedState=null)}var j=cd(s);if(j!==null){j.flags&=-257,ud(j,s,l,a,t),j.mode&1&&dd(a,c,t),t=j,d=c;var $=t.updateQueue;if($===null){var S=new Set;S.add(d),t.updateQueue=S}else $.add(d);break e}else{if(!(t&1)){dd(a,c,t),ll();break e}d=Error(F(426))}}else if(be&&l.mode&1){var w=cd(s);if(w!==null){!(w.flags&65536)&&(w.flags|=256),ud(w,s,l,a,t),Us(pn(d,l));break e}}a=d=pn(d,l),Ie!==4&&(Ie=2),On===null?On=[a]:On.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var x=Lu(a,d,t);nd(a,x);break e;case 1:l=d;var p=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof p.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ar===null||!ar.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var P=Wu(a,l,t);nd(a,P);break e}}a=a.return}while(a!==null)}rp(r)}catch(E){t=E,Pe===r&&r!==null&&(Pe=r=r.return);continue}break}while(!0)}function ep(){var e=xi.current;return xi.current=mi,e===null?mi:e}function ll(){(Ie===0||Ie===3||Ie===2)&&(Ie=4),Le===null||!(Ir&268435455)&&!(Ri&268435455)||Kt(Le,_e)}function bi(e,t){var r=le;le|=2;var o=ep();(Le!==e||_e!==t)&&(Mt=null,$r(e,t));do try{i0();break}catch(i){Zu(e,i)}while(!0);if(Hs(),le=r,xi.current=o,Pe!==null)throw Error(F(261));return Le=null,_e=0,Ie}function i0(){for(;Pe!==null;)tp(Pe)}function a0(){for(;Pe!==null&&!Ef();)tp(Pe)}function tp(e){var t=op(e.alternate,e,ot);e.memoizedProps=e.pendingProps,t===null?rp(e):Pe=t,nl.current=null}function rp(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Zg(r,t),r!==null){r.flags&=32767,Pe=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ie=6,Pe=null;return}}else if(r=Jg(r,t,ot),r!==null){Pe=r;return}if(t=t.sibling,t!==null){Pe=t;return}Pe=t=e}while(t!==null);Ie===0&&(Ie=5)}function wr(e,t,r){var o=ue,i=ft.transition;try{ft.transition=null,ue=1,s0(e,t,r,o)}finally{ft.transition=i,ue=o}return null}function s0(e,t,r,o){do on();while(Zt!==null);if(le&6)throw Error(F(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(F(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(Df(e,a),e===Le&&(Pe=Le=null,_e=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||Mo||(Mo=!0,ip(ei,function(){return on(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=ft.transition,ft.transition=null;var s=ue;ue=1;var l=le;le|=4,nl.current=null,t0(e,r),qu(r,e),zg(Oa),ri=!!Ua,Oa=Ua=null,e.current=r,r0(r),If(),le=l,ue=s,ft.transition=a}else e.current=r;if(Mo&&(Mo=!1,Zt=e,yi=i),a=e.pendingLanes,a===0&&(ar=null),Rf(r.stateNode),rt(e,ze()),t!==null)for(o=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],o(i.value,{componentStack:i.stack,digest:i.digest});if(hi)throw hi=!1,e=ds,ds=null,e;return yi&1&&e.tag!==0&&on(),a=e.pendingLanes,a&1?e===cs?Hn++:(Hn=0,cs=e):Hn=0,gr(),null}function on(){if(Zt!==null){var e=Lc(yi),t=ft.transition,r=ue;try{if(ft.transition=null,ue=16>e?16:e,Zt===null)var o=!1;else{if(e=Zt,Zt=null,yi=0,le&6)throw Error(F(331));var i=le;for(le|=4,A=e.current;A!==null;){var a=A,s=a.child;if(A.flags&16){var l=a.deletions;if(l!==null){for(var d=0;d<l.length;d++){var c=l[d];for(A=c;A!==null;){var u=A;switch(u.tag){case 0:case 11:case 15:Un(8,u,a)}var g=u.child;if(g!==null)g.return=u,A=g;else for(;A!==null;){u=A;var f=u.sibling,j=u.return;if(Vu(u),u===c){A=null;break}if(f!==null){f.return=j,A=f;break}A=j}}}var $=a.alternate;if($!==null){var S=$.child;if(S!==null){$.child=null;do{var w=S.sibling;S.sibling=null,S=w}while(S!==null)}}A=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,A=s;else e:for(;A!==null;){if(a=A,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Un(9,a,a.return)}var x=a.sibling;if(x!==null){x.return=a.return,A=x;break e}A=a.return}}var p=e.current;for(A=p;A!==null;){s=A;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,A=h;else e:for(s=p;A!==null;){if(l=A,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Mi(9,l)}}catch(E){Ce(l,l.return,E)}if(l===s){A=null;break e}var P=l.sibling;if(P!==null){P.return=l.return,A=P;break e}A=l.return}}if(le=i,gr(),Pt&&typeof Pt.onPostCommitFiberRoot=="function")try{Pt.onPostCommitFiberRoot($i,e)}catch{}o=!0}return o}finally{ue=r,ft.transition=t}}return!1}function Sd(e,t,r){t=pn(r,t),t=Lu(e,t,1),e=ir(e,t,1),t=Ve(),e!==null&&(po(e,1,t),rt(e,t))}function Ce(e,t,r){if(e.tag===3)Sd(e,e,r);else for(;t!==null;){if(t.tag===3){Sd(t,e,r);break}else if(t.tag===1){var o=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(ar===null||!ar.has(o))){e=pn(r,e),e=Wu(t,e,1),t=ir(t,e,1),e=Ve(),t!==null&&(po(t,1,e),rt(t,e));break}}t=t.return}}function l0(e,t,r){var o=e.pingCache;o!==null&&o.delete(t),t=Ve(),e.pingedLanes|=e.suspendedLanes&r,Le===e&&(_e&r)===r&&(Ie===4||Ie===3&&(_e&130023424)===_e&&500>ze()-il?$r(e,0):ol|=r),rt(e,t)}function np(e,t){t===0&&(e.mode&1?(t=So,So<<=1,!(So&130023424)&&(So=4194304)):t=1);var r=Ve();e=Dt(e,t),e!==null&&(po(e,t,r),rt(e,r))}function d0(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),np(e,r)}function c0(e,t){var r=0;switch(e.tag){case 13:var o=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:o=e.stateNode;break;default:throw Error(F(314))}o!==null&&o.delete(t),np(e,r)}var op;op=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)Ze=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ze=!1,Kg(e,t,r);Ze=!!(e.flags&131072)}else Ze=!1,be&&t.flags&1048576&&lu(t,di,t.index);switch(t.lanes=0,t.tag){case 2:var o=t.type;Vo(e,t),e=t.pendingProps;var i=ln(t,He.current);nn(t,r),i=Js(null,t,o,e,i,r);var a=Zs();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(o)?(a=!0,si(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Vs(t),i.updater=Fi,t.stateNode=i,i._reactInternals=t,Ja(t,o,e,r),t=ts(null,t,o,!0,a,r)):(t.tag=0,be&&a&&As(t),Ye(null,t,i,r),t=t.child),t;case 16:o=t.elementType;e:{switch(Vo(e,t),e=t.pendingProps,i=o._init,o=i(o._payload),t.type=o,i=t.tag=p0(o),e=ht(o,e),i){case 0:t=es(null,t,o,e,r);break e;case 1:t=gd(null,t,o,e,r);break e;case 11:t=pd(null,t,o,e,r);break e;case 14:t=fd(null,t,o,ht(o.type,e),r);break e}throw Error(F(306,o,""))}return t;case 0:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ht(o,i),es(e,t,o,i,r);case 1:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ht(o,i),gd(e,t,o,i,r);case 3:e:{if(Du(t),e===null)throw Error(F(387));o=t.pendingProps,a=t.memoizedState,i=a.element,gu(e,t),pi(t,o,null,r);var s=t.memoizedState;if(o=s.element,a.isDehydrated)if(a={element:o,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=pn(Error(F(423)),t),t=md(e,t,o,r,i);break e}else if(o!==i){i=pn(Error(F(424)),t),t=md(e,t,o,r,i);break e}else for(it=or(t.stateNode.containerInfo.firstChild),at=t,be=!0,bt=null,r=pu(t,null,o,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(dn(),o===i){t=Ut(e,t,r);break e}Ye(e,t,o,r)}t=t.child}return t;case 5:return mu(t),e===null&&Xa(t),o=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,Ha(o,i)?s=null:a!==null&&Ha(o,a)&&(t.flags|=32),Au(e,t),Ye(e,t,s,r),t.child;case 6:return e===null&&Xa(t),null;case 13:return Uu(e,t,r);case 4:return Qs(t,t.stateNode.containerInfo),o=t.pendingProps,e===null?t.child=cn(t,null,o,r):Ye(e,t,o,r),t.child;case 11:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ht(o,i),pd(e,t,o,i,r);case 7:return Ye(e,t,t.pendingProps,r),t.child;case 8:return Ye(e,t,t.pendingProps.children,r),t.child;case 12:return Ye(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(o=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,me(ci,o._currentValue),o._currentValue=s,a!==null)if(kt(a.value,s)){if(a.children===i.children&&!et.current){t=Ut(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var d=l.firstContext;d!==null;){if(d.context===o){if(a.tag===1){d=_t(-1,r&-r),d.tag=2;var c=a.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?d.next=d:(d.next=u.next,u.next=d),c.pending=d}}a.lanes|=r,d=a.alternate,d!==null&&(d.lanes|=r),qa(a.return,r,t),l.lanes|=r;break}d=d.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(F(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),qa(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Ye(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps.children,nn(t,r),i=gt(i),o=o(i),t.flags|=1,Ye(e,t,o,r),t.child;case 14:return o=t.type,i=ht(o,t.pendingProps),i=ht(o.type,i),fd(e,t,o,i,r);case 15:return _u(e,t,t.type,t.pendingProps,r);case 17:return o=t.type,i=t.pendingProps,i=t.elementType===o?i:ht(o,i),Vo(e,t),t.tag=1,tt(o)?(e=!0,si(t)):e=!1,nn(t,r),Ru(t,o,i),Ja(t,o,i,r),ts(null,t,o,!0,e,r);case 19:return Ou(e,t,r);case 22:return Bu(e,t,r)}throw Error(F(156,t.tag))};function ip(e,t){return Ic(e,t)}function u0(e,t,r,o){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(e,t,r,o){return new u0(e,t,r,o)}function dl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function p0(e){if(typeof e=="function")return dl(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ps)return 11;if(e===Ns)return 14}return 2}function lr(e,t){var r=e.alternate;return r===null?(r=pt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function qo(e,t,r,o,i,a){var s=2;if(o=e,typeof e=="function")dl(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Ur:return zr(r.children,i,a,t);case zs:s=8,i|=8;break;case ja:return e=pt(12,r,t,i|2),e.elementType=ja,e.lanes=a,e;case ka:return e=pt(13,r,t,i),e.elementType=ka,e.lanes=a,e;case Sa:return e=pt(19,r,t,i),e.elementType=Sa,e.lanes=a,e;case mc:return Li(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case fc:s=10;break e;case gc:s=9;break e;case Ps:s=11;break e;case Ns:s=14;break e;case Qt:s=16,o=null;break e}throw Error(F(130,e==null?e:typeof e,""))}return t=pt(s,r,t,i),t.elementType=e,t.type=o,t.lanes=a,t}function zr(e,t,r,o){return e=pt(7,e,o,t),e.lanes=r,e}function Li(e,t,r,o){return e=pt(22,e,o,t),e.elementType=mc,e.lanes=r,e.stateNode={isHidden:!1},e}function xa(e,t,r){return e=pt(6,e,null,t),e.lanes=r,e}function ha(e,t,r){return t=pt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function f0(e,t,r,o,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ki(0),this.expirationTimes=Ki(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ki(0),this.identifierPrefix=o,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function cl(e,t,r,o,i,a,s,l,d){return e=new f0(e,t,r,l,d),t===1?(t=1,a===!0&&(t|=8)):t=0,a=pt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:o,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vs(a),e}function g0(e,t,r){var o=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Dr,key:o==null?null:""+o,children:e,containerInfo:t,implementation:r}}function ap(e){if(!e)return ur;e=e._reactInternals;e:{if(Lr(e)!==e||e.tag!==1)throw Error(F(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(F(171))}if(e.tag===1){var r=e.type;if(tt(r))return au(e,r,t)}return t}function sp(e,t,r,o,i,a,s,l,d){return e=cl(r,o,!0,e,i,a,s,l,d),e.context=ap(null),r=e.current,o=Ve(),i=sr(r),a=_t(o,i),a.callback=t??null,ir(r,a,i),e.current.lanes=i,po(e,i,o),rt(e,o),e}function Wi(e,t,r,o){var i=t.current,a=Ve(),s=sr(i);return r=ap(r),t.context===null?t.context=r:t.pendingContext=r,t=_t(a,s),t.payload={element:e},o=o===void 0?null:o,o!==null&&(t.callback=o),e=ir(i,t,s),e!==null&&(jt(e,i,s,a),Ho(e,i,s)),s}function vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Cd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function ul(e,t){Cd(e,t),(e=e.alternate)&&Cd(e,t)}function m0(){return null}var lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function pl(e){this._internalRoot=e}_i.prototype.render=pl.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(F(409));Wi(e,t,null,null)};_i.prototype.unmount=pl.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fr(function(){Wi(null,e,null,null)}),t[At]=null}};function _i(e){this._internalRoot=e}_i.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bc();e={blockedOn:null,target:e,priority:t};for(var r=0;r<qt.length&&t!==0&&t<qt[r].priority;r++);qt.splice(r,0,e),r===0&&Dc(e)}};function fl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $d(){}function x0(e,t,r,o,i){if(i){if(typeof o=="function"){var a=o;o=function(){var c=vi(s);a.call(c)}}var s=sp(t,o,e,0,null,!1,!1,"",$d);return e._reactRootContainer=s,e[At]=s.current,Zn(e.nodeType===8?e.parentNode:e),Fr(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof o=="function"){var l=o;o=function(){var c=vi(d);l.call(c)}}var d=cl(e,0,!1,null,null,!1,!1,"",$d);return e._reactRootContainer=d,e[At]=d.current,Zn(e.nodeType===8?e.parentNode:e),Fr(function(){Wi(t,d,r,o)}),d}function Ai(e,t,r,o,i){var a=r._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var l=i;i=function(){var d=vi(s);l.call(d)}}Wi(t,s,e,i)}else s=x0(r,t,e,i,o);return vi(s)}Wc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Mn(t.pendingLanes);r!==0&&(Is(t,r|1),rt(t,ze()),!(le&6)&&(fn=ze()+500,gr()))}break;case 13:Fr(function(){var o=Dt(e,1);if(o!==null){var i=Ve();jt(o,e,1,i)}}),ul(e,1)}};Fs=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var r=Ve();jt(t,e,134217728,r)}ul(e,134217728)}};_c=function(e){if(e.tag===13){var t=sr(e),r=Dt(e,t);if(r!==null){var o=Ve();jt(r,e,t,o)}ul(e,t)}};Bc=function(){return ue};Ac=function(e,t){var r=ue;try{return ue=e,t()}finally{ue=r}};Ma=function(e,t,r){switch(t){case"input":if(za(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var o=r[t];if(o!==e&&o.form===e.form){var i=Ti(o);if(!i)throw Error(F(90));hc(o),za(o,i)}}}break;case"textarea":bc(e,r);break;case"select":t=r.value,t!=null&&Zr(e,!!r.multiple,t,!1)}};$c=al;zc=Fr;var h0={usingClientEntryPoint:!1,Events:[go,Gr,Ti,Sc,Cc,al]},Tn={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},y0={bundleType:Tn.bundleType,version:Tn.version,rendererPackageName:Tn.rendererPackageName,rendererConfig:Tn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ot.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tc(e),e===null?null:e.stateNode},findFiberByHostInstance:Tn.findFiberByHostInstance||m0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ro=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ro.isDisabled&&Ro.supportsFiber)try{$i=Ro.inject(y0),Pt=Ro}catch{}}lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=h0;lt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fl(t))throw Error(F(200));return g0(e,t,null,r)};lt.createRoot=function(e,t){if(!fl(e))throw Error(F(299));var r=!1,o="",i=lp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(o=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=cl(e,1,!1,null,null,r,!1,o,i),e[At]=t.current,Zn(e.nodeType===8?e.parentNode:e),new pl(t)};lt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(F(188)):(e=Object.keys(e).join(","),Error(F(268,e)));return e=Tc(t),e=e===null?null:e.stateNode,e};lt.flushSync=function(e){return Fr(e)};lt.hydrate=function(e,t,r){if(!Bi(t))throw Error(F(200));return Ai(null,e,t,!0,r)};lt.hydrateRoot=function(e,t,r){if(!fl(e))throw Error(F(405));var o=r!=null&&r.hydratedSources||null,i=!1,a="",s=lp;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=sp(t,null,e,1,r??null,i,!1,a,s),e[At]=t.current,Zn(e),o)for(e=0;e<o.length;e++)r=o[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new _i(t)};lt.render=function(e,t,r){if(!Bi(t))throw Error(F(200));return Ai(null,e,t,!1,r)};lt.unmountComponentAtNode=function(e){if(!Bi(e))throw Error(F(40));return e._reactRootContainer?(Fr(function(){Ai(null,null,e,!1,function(){e._reactRootContainer=null,e[At]=null})}),!0):!1};lt.unstable_batchedUpdates=al;lt.unstable_renderSubtreeIntoContainer=function(e,t,r,o){if(!Bi(r))throw Error(F(200));if(e==null||e._reactInternals===void 0)throw Error(F(38));return Ai(e,t,r,!1,o)};lt.version="18.3.1-next-f1338f8080-20240426";function dp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dp)}catch(e){console.error(e)}}dp(),dc.exports=lt;var b0=dc.exports,zd=b0;va.createRoot=zd.createRoot,va.hydrateRoot=zd.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},lo.apply(this,arguments)}var er;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(er||(er={}));const Pd="popstate";function v0(e){e===void 0&&(e={});function t(o,i){let{pathname:a,search:s,hash:l}=o.location;return fs("",{pathname:a,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(o,i){return typeof i=="string"?i:wi(i)}return j0(t,r,null,e)}function Ne(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function gl(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function w0(){return Math.random().toString(36).substr(2,8)}function Nd(e,t){return{usr:e.state,key:e.key,idx:t}}function fs(e,t,r,o){return r===void 0&&(r=null),lo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?yn(t):t,{state:r,key:t&&t.key||o||w0()})}function wi(e){let{pathname:t="/",search:r="",hash:o=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),o&&o!=="#"&&(t+=o.charAt(0)==="#"?o:"#"+o),t}function yn(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let o=e.indexOf("?");o>=0&&(t.search=e.substr(o),e=e.substr(0,o)),e&&(t.pathname=e)}return t}function j0(e,t,r,o){o===void 0&&(o={});let{window:i=document.defaultView,v5Compat:a=!1}=o,s=i.history,l=er.Pop,d=null,c=u();c==null&&(c=0,s.replaceState(lo({},s.state,{idx:c}),""));function u(){return(s.state||{idx:null}).idx}function g(){l=er.Pop;let w=u(),x=w==null?null:w-c;c=w,d&&d({action:l,location:S.location,delta:x})}function f(w,x){l=er.Push;let p=fs(S.location,w,x);c=u()+1;let h=Nd(p,c),P=S.createHref(p);try{s.pushState(h,"",P)}catch(E){if(E instanceof DOMException&&E.name==="DataCloneError")throw E;i.location.assign(P)}a&&d&&d({action:l,location:S.location,delta:1})}function j(w,x){l=er.Replace;let p=fs(S.location,w,x);c=u();let h=Nd(p,c),P=S.createHref(p);s.replaceState(h,"",P),a&&d&&d({action:l,location:S.location,delta:0})}function $(w){let x=i.location.origin!=="null"?i.location.origin:i.location.href,p=typeof w=="string"?w:wi(w);return p=p.replace(/ $/,"%20"),Ne(x,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,x)}let S={get action(){return l},get location(){return e(i,s)},listen(w){if(d)throw new Error("A history only accepts one active listener");return i.addEventListener(Pd,g),d=w,()=>{i.removeEventListener(Pd,g),d=null}},createHref(w){return t(i,w)},createURL:$,encodeLocation(w){let x=$(w);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:f,replace:j,go(w){return s.go(w)}};return S}var Td;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Td||(Td={}));function k0(e,t,r){return r===void 0&&(r="/"),S0(e,t,r)}function S0(e,t,r,o){let i=typeof t=="string"?yn(t):t,a=ml(i.pathname||"/",r);if(a==null)return null;let s=cp(e);C0(s);let l=null;for(let d=0;l==null&&d<s.length;++d){let c=W0(a);l=M0(s[d],c)}return l}function cp(e,t,r,o){t===void 0&&(t=[]),r===void 0&&(r=[]),o===void 0&&(o="");let i=(a,s,l)=>{let d={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};d.relativePath.startsWith("/")&&(Ne(d.relativePath.startsWith(o),'Absolute route path "'+d.relativePath+'" nested under path '+('"'+o+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),d.relativePath=d.relativePath.slice(o.length));let c=dr([o,d.relativePath]),u=r.concat(d);a.children&&a.children.length>0&&(Ne(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),cp(a.children,t,u,c)),!(a.path==null&&!a.index)&&t.push({path:c,score:I0(c,a.index),routesMeta:u})};return e.forEach((a,s)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,s);else for(let d of up(a.path))i(a,s,d)}),t}function up(e){let t=e.split("/");if(t.length===0)return[];let[r,...o]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(o.length===0)return i?[a,""]:[a];let s=up(o.join("/")),l=[];return l.push(...s.map(d=>d===""?a:[a,d].join("/"))),i&&l.push(...s),l.map(d=>e.startsWith("/")&&d===""?"/":d)}function C0(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:F0(t.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}const $0=/^:[\w-]+$/,z0=3,P0=2,N0=1,T0=10,E0=-2,Ed=e=>e==="*";function I0(e,t){let r=e.split("/"),o=r.length;return r.some(Ed)&&(o+=E0),t&&(o+=P0),r.filter(i=>!Ed(i)).reduce((i,a)=>i+($0.test(a)?z0:a===""?N0:T0),o)}function F0(e,t){return e.length===t.length&&e.slice(0,-1).every((o,i)=>o===t[i])?e[e.length-1]-t[t.length-1]:0}function M0(e,t,r){let{routesMeta:o}=e,i={},a="/",s=[];for(let l=0;l<o.length;++l){let d=o[l],c=l===o.length-1,u=a==="/"?t:t.slice(a.length)||"/",g=R0({path:d.relativePath,caseSensitive:d.caseSensitive,end:c},u),f=d.route;if(!g)return null;Object.assign(i,g.params),s.push({params:i,pathname:dr([a,g.pathname]),pathnameBase:U0(dr([a,g.pathnameBase])),route:f}),g.pathnameBase!=="/"&&(a=dr([a,g.pathnameBase]))}return s}function R0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,o]=L0(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:o.reduce((c,u,g)=>{let{paramName:f,isOptional:j}=u;if(f==="*"){let S=l[g]||"";s=a.slice(0,a.length-S.length).replace(/(.)\/+$/,"$1")}const $=l[g];return j&&!$?c[f]=void 0:c[f]=($||"").replace(/%2F/g,"/"),c},{}),pathname:a,pathnameBase:s,pattern:e}}function L0(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),gl(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,d)=>(o.push({paramName:l,isOptional:d!=null}),d?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),o]}function W0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return gl(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ml(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,o=e.charAt(r);return o&&o!=="/"?null:e.slice(r)||"/"}const _0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,B0=e=>_0.test(e);function A0(e,t){t===void 0&&(t="/");let{pathname:r,search:o="",hash:i=""}=typeof e=="string"?yn(e):e,a;if(r)if(B0(r))a=r;else{if(r.includes("//")){let s=r;r=r.replace(/\/\/+/g,"/"),gl(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?a=Id(r.substring(1),"/"):a=Id(r,t)}else a=t;return{pathname:a,search:O0(o),hash:H0(i)}}function Id(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ya(e,t,r,o){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(o)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function D0(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function pp(e,t){let r=D0(e);return t?r.map((o,i)=>i===r.length-1?o.pathname:o.pathnameBase):r.map(o=>o.pathnameBase)}function fp(e,t,r,o){o===void 0&&(o=!1);let i;typeof e=="string"?i=yn(e):(i=lo({},e),Ne(!i.pathname||!i.pathname.includes("?"),ya("?","pathname","search",i)),Ne(!i.pathname||!i.pathname.includes("#"),ya("#","pathname","hash",i)),Ne(!i.search||!i.search.includes("#"),ya("#","search","hash",i)));let a=e===""||i.pathname==="",s=a?"/":i.pathname,l;if(s==null)l=r;else{let g=t.length-1;if(!o&&s.startsWith("..")){let f=s.split("/");for(;f[0]==="..";)f.shift(),g-=1;i.pathname=f.join("/")}l=g>=0?t[g]:"/"}let d=A0(i,l),c=s&&s!=="/"&&s.endsWith("/"),u=(a||s===".")&&r.endsWith("/");return!d.pathname.endsWith("/")&&(c||u)&&(d.pathname+="/"),d}const dr=e=>e.join("/").replace(/\/\/+/g,"/"),U0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),O0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,H0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Y0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const gp=["post","put","patch","delete"];new Set(gp);const G0=["get",...gp];new Set(G0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function co(){return co=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},co.apply(this,arguments)}const xl=m.createContext(null),V0=m.createContext(null),Wr=m.createContext(null),Di=m.createContext(null),mr=m.createContext({outlet:null,matches:[],isDataRoute:!1}),mp=m.createContext(null);function Q0(e,t){let{relative:r}=t===void 0?{}:t;xo()||Ne(!1);let{basename:o,navigator:i}=m.useContext(Wr),{hash:a,pathname:s,search:l}=hp(e,{relative:r}),d=s;return o!=="/"&&(d=s==="/"?o:dr([o,s])),i.createHref({pathname:d,search:l,hash:a})}function xo(){return m.useContext(Di)!=null}function xr(){return xo()||Ne(!1),m.useContext(Di).location}function xp(e){m.useContext(Wr).static||m.useLayoutEffect(e)}function qe(){let{isDataRoute:e}=m.useContext(mr);return e?lm():X0()}function X0(){xo()||Ne(!1);let e=m.useContext(xl),{basename:t,future:r,navigator:o}=m.useContext(Wr),{matches:i}=m.useContext(mr),{pathname:a}=xr(),s=JSON.stringify(pp(i,r.v7_relativeSplatPath)),l=m.useRef(!1);return xp(()=>{l.current=!0}),m.useCallback(function(c,u){if(u===void 0&&(u={}),!l.current)return;if(typeof c=="number"){o.go(c);return}let g=fp(c,JSON.parse(s),a,u.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:dr([t,g.pathname])),(u.replace?o.replace:o.push)(g,u.state,u)},[t,o,s,a,e])}function q0(){let{matches:e}=m.useContext(mr),t=e[e.length-1];return t?t.params:{}}function hp(e,t){let{relative:r}=t===void 0?{}:t,{future:o}=m.useContext(Wr),{matches:i}=m.useContext(mr),{pathname:a}=xr(),s=JSON.stringify(pp(i,o.v7_relativeSplatPath));return m.useMemo(()=>fp(e,JSON.parse(s),a,r==="path"),[e,s,a,r])}function K0(e,t){return J0(e,t)}function J0(e,t,r,o){xo()||Ne(!1);let{navigator:i}=m.useContext(Wr),{matches:a}=m.useContext(mr),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let d=s?s.pathnameBase:"/";s&&s.route;let c=xr(),u;if(t){var g;let w=typeof t=="string"?yn(t):t;d==="/"||(g=w.pathname)!=null&&g.startsWith(d)||Ne(!1),u=w}else u=c;let f=u.pathname||"/",j=f;if(d!=="/"){let w=d.replace(/^\//,"").split("/");j="/"+f.replace(/^\//,"").split("/").slice(w.length).join("/")}let $=k0(e,{pathname:j}),S=nm($&&$.map(w=>Object.assign({},w,{params:Object.assign({},l,w.params),pathname:dr([d,i.encodeLocation?i.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?d:dr([d,i.encodeLocation?i.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),a,r,o);return t&&S?m.createElement(Di.Provider,{value:{location:co({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:er.Pop}},S):S}function Z0(){let e=sm(),t=Y0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),r?m.createElement("pre",{style:i},r):null,null)}const em=m.createElement(Z0,null);class tm extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?m.createElement(mr.Provider,{value:this.props.routeContext},m.createElement(mp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function rm(e){let{routeContext:t,match:r,children:o}=e,i=m.useContext(xl);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),m.createElement(mr.Provider,{value:t},o)}function nm(e,t,r,o){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),o===void 0&&(o=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=o)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let u=s.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);u>=0||Ne(!1),s=s.slice(0,Math.min(s.length,u+1))}let d=!1,c=-1;if(r&&o&&o.v7_partialHydration)for(let u=0;u<s.length;u++){let g=s[u];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(c=u),g.route.id){let{loaderData:f,errors:j}=r,$=g.route.loader&&f[g.route.id]===void 0&&(!j||j[g.route.id]===void 0);if(g.route.lazy||$){d=!0,c>=0?s=s.slice(0,c+1):s=[s[0]];break}}}return s.reduceRight((u,g,f)=>{let j,$=!1,S=null,w=null;r&&(j=l&&g.route.id?l[g.route.id]:void 0,S=g.route.errorElement||em,d&&(c<0&&f===0?(dm("route-fallback"),$=!0,w=null):c===f&&($=!0,w=g.route.hydrateFallbackElement||null)));let x=t.concat(s.slice(0,f+1)),p=()=>{let h;return j?h=S:$?h=w:g.route.Component?h=m.createElement(g.route.Component,null):g.route.element?h=g.route.element:h=u,m.createElement(rm,{match:g,routeContext:{outlet:u,matches:x,isDataRoute:r!=null},children:h})};return r&&(g.route.ErrorBoundary||g.route.errorElement||f===0)?m.createElement(tm,{location:r.location,revalidation:r.revalidation,component:S,error:j,children:p(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):p()},null)}var yp=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(yp||{}),bp=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bp||{});function om(e){let t=m.useContext(xl);return t||Ne(!1),t}function im(e){let t=m.useContext(V0);return t||Ne(!1),t}function am(e){let t=m.useContext(mr);return t||Ne(!1),t}function vp(e){let t=am(),r=t.matches[t.matches.length-1];return r.route.id||Ne(!1),r.route.id}function sm(){var e;let t=m.useContext(mp),r=im(),o=vp();return t!==void 0?t:(e=r.errors)==null?void 0:e[o]}function lm(){let{router:e}=om(yp.UseNavigateStable),t=vp(bp.UseNavigateStable),r=m.useRef(!1);return xp(()=>{r.current=!0}),m.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,co({fromRouteId:t},a)))},[e,t])}const Fd={};function dm(e,t,r){Fd[e]||(Fd[e]=!0)}function cm(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function ce(e){Ne(!1)}function um(e){let{basename:t="/",children:r=null,location:o,navigationType:i=er.Pop,navigator:a,static:s=!1,future:l}=e;xo()&&Ne(!1);let d=t.replace(/^\/*/,"/"),c=m.useMemo(()=>({basename:d,navigator:a,static:s,future:co({v7_relativeSplatPath:!1},l)}),[d,l,a,s]);typeof o=="string"&&(o=yn(o));let{pathname:u="/",search:g="",hash:f="",state:j=null,key:$="default"}=o,S=m.useMemo(()=>{let w=ml(u,d);return w==null?null:{location:{pathname:w,search:g,hash:f,state:j,key:$},navigationType:i}},[d,u,g,f,j,$,i]);return S==null?null:m.createElement(Wr.Provider,{value:c},m.createElement(Di.Provider,{children:r,value:S}))}function pm(e){let{children:t,location:r}=e;return K0(gs(t),r)}new Promise(()=>{});function gs(e,t){t===void 0&&(t=[]);let r=[];return m.Children.forEach(e,(o,i)=>{if(!m.isValidElement(o))return;let a=[...t,i];if(o.type===m.Fragment){r.push.apply(r,gs(o.props.children,a));return}o.type!==ce&&Ne(!1),!o.props.index||!o.props.children||Ne(!1);let s={id:o.props.id||a.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,loader:o.props.loader,action:o.props.action,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(s.children=gs(o.props.children,a)),r.push(s)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},ms.apply(this,arguments)}function fm(e,t){if(e==null)return{};var r={},o=Object.keys(e),i,a;for(a=0;a<o.length;a++)i=o[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function gm(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function mm(e,t){return e.button===0&&(!t||t==="_self")&&!gm(e)}function xs(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let o=e[r];return t.concat(Array.isArray(o)?o.map(i=>[r,i]):[[r,o]])},[]))}function xm(e,t){let r=xs(e);return t&&t.forEach((o,i)=>{r.has(i)||t.getAll(i).forEach(a=>{r.append(i,a)})}),r}const hm=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],ym="6";try{window.__reactRouterVersion=ym}catch{}const bm="startTransition",Md=lf[bm];function vm(e){let{basename:t,children:r,future:o,window:i}=e,a=m.useRef();a.current==null&&(a.current=v0({window:i,v5Compat:!0}));let s=a.current,[l,d]=m.useState({action:s.action,location:s.location}),{v7_startTransition:c}=o||{},u=m.useCallback(g=>{c&&Md?Md(()=>d(g)):d(g)},[d,c]);return m.useLayoutEffect(()=>s.listen(u),[s,u]),m.useEffect(()=>cm(o),[o]),m.createElement(um,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:s,future:o})}const wm=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jm=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oe=m.forwardRef(function(t,r){let{onClick:o,relative:i,reloadDocument:a,replace:s,state:l,target:d,to:c,preventScrollReset:u,viewTransition:g}=t,f=fm(t,hm),{basename:j}=m.useContext(Wr),$,S=!1;if(typeof c=="string"&&jm.test(c)&&($=c,wm))try{let h=new URL(window.location.href),P=c.startsWith("//")?new URL(h.protocol+c):new URL(c),E=ml(P.pathname,j);P.origin===h.origin&&E!=null?c=E+P.search+P.hash:S=!0}catch{}let w=Q0(c,{relative:i}),x=km(c,{replace:s,state:l,target:d,preventScrollReset:u,relative:i,viewTransition:g});function p(h){o&&o(h),h.defaultPrevented||x(h)}return m.createElement("a",ms({},f,{href:$||w,onClick:S||a?o:p,ref:r,target:d}))});var Rd;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Rd||(Rd={}));var Ld;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ld||(Ld={}));function km(e,t){let{target:r,replace:o,state:i,preventScrollReset:a,relative:s,viewTransition:l}=t===void 0?{}:t,d=qe(),c=xr(),u=hp(e,{relative:s});return m.useCallback(g=>{if(mm(g,r)){g.preventDefault();let f=o!==void 0?o:wi(c)===wi(u);d(e,{replace:f,state:i,preventScrollReset:a,relative:s,viewTransition:l})}},[c,d,u,o,i,r,e,a,s,l])}function Sm(e){let t=m.useRef(xs(e)),r=m.useRef(!1),o=xr(),i=m.useMemo(()=>xm(o.search,r.current?null:t.current),[o.search]),a=qe(),s=m.useCallback((l,d)=>{const c=xs(typeof l=="function"?l(i):l);r.current=!0,a("?"+c,d)},[a,i]);return[i,s]}const Tt="http://localhost:5050",gn=`${Tt}/api`,Ui=()=>{const e=localStorage.getItem("arke_token");return{"Content-Type":"application/json","ngrok-skip-browser-warning":"true","Cache-Control":"no-cache",...e?{Authorization:`Bearer ${e}`}:{}}},Oi=async e=>{const t=await e.text(),r=e.headers.get("content-type")||"";let o=null;if(t)if(r.includes("application/json"))try{o=JSON.parse(t)}catch{o={success:!1,message:"Invalid JSON from backend",raw:t}}else o={success:!1,message:t};return e.ok?o||{success:!1,message:"Empty response from backend"}:{...o&&typeof o=="object"?o:{},success:!1,status:!1,message:(o==null?void 0:o.message)||`Request failed (${e.status})`,httpStatus:e.status}},nt=async e=>{try{const t=await fetch(`${Tt}${e}`,{method:"GET",headers:Ui(),cache:"no-store"});return Oi(t)}catch(t){return console.error("GET error:",t),{success:!1,message:`Cannot connect to backend at ${Tt}.`}}},Ft=async(e,t)=>{try{const r=await fetch(`${Tt}${e}`,{method:"POST",headers:Ui(),body:JSON.stringify(t)});return Oi(r)}catch(r){return console.error("POST error:",r),{success:!1,message:`Cannot connect to backend at ${Tt}.`}}},Cm=async(e,t)=>{try{const r=await fetch(`${Tt}${e}`,{method:"PUT",headers:Ui(),body:JSON.stringify(t)});return Oi(r)}catch(r){return console.error("PUT error:",r),{success:!1,message:`Cannot connect to backend at ${Tt}.`}}},$m=async e=>{try{const t=await fetch(`${Tt}${e}`,{method:"DELETE",headers:Ui()});return Oi(t)}catch(t){return console.error("DELETE error:",t),{success:!1,message:`Cannot connect to backend at ${Tt}.`}}},fe={getBanners:()=>nt("/api/banner"),getCategories:()=>nt("/api/get-all-Category"),getLatestProducts:()=>nt("/api/latest-products"),getBestSellers:()=>nt("/api/best-by-us"),getBlogs:()=>nt("/api/blogs"),getBlogById:e=>nt(`/api/blogs/${e}`),getAllProducts:()=>nt("/api/get-all-product"),getProductById:e=>nt(`/api/get-product/${e}`),getRelated:()=>Promise.resolve({data:[]}),getTypes:()=>Promise.resolve({data:[]}),getCart:()=>nt("/api/viewCart"),addToCart:(e,t=1)=>Ft("/api/addCart",{productId:String(e),quantity:Number(t)}),updateCartItem:(e,t)=>Ft("/api/update-quantity",{productId:String(e),quantity:Number(t)}),removeFromCart:e=>Ft("/api/removeFromCart",{productId:String(e),quantity:1}),clearCart:()=>Promise.resolve({success:!0}),getWishlist:()=>nt("/api/view-wishlist"),addToWishlist:e=>Ft("/api/add-to-wishlist",{productId:e}),removeWishlist:e=>Ft("/api/remove-from-wishlist",{productId:e}),login:(e,t)=>Ft("/api/login",{email:e,password:t}),register:e=>Ft("/api/add-user",e),placeOrder:e=>Ft("/api/place-order",e),getAnnouncements:()=>nt("/api/announcements"),createAnnouncement:e=>Ft("/api/announcements",e),updateAnnouncement:(e,t)=>Cm(`/api/announcements/${e}`,t),deleteAnnouncement:e=>$m(`/api/announcements/${e}`),getGiftForHer:()=>nt("/api/gifts/gift-for-her"),getGiftForHim:()=>nt("/api/gifts/gift-for-him")},Fe=e=>{if(!e)return null;if(Array.isArray(e)){for(const r of e){if(!r)continue;const o=Fe(r);if(o)return o}return null}if(typeof e=="object"){for(const r of["url","src","path","images","image","categoryImage","thumbnail","imageUrl","img","photos","gallery","secure_url"])if(e[r])return Fe(e[r]);return null}const t=String(e).trim();return!t||t==="null"||t==="undefined"?null:t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")?t:`${Tt}/${t.replace(/^\/+/,"")}`},Mr=(e,t=0)=>{if(!e)return null;for(const r of["images","image","imageUrl","img","photos","gallery"]){const o=e[r];if(Array.isArray(o)){const i=Fe(o[t]);if(i)return i}}if(t===0){for(const r of["image","imageUrl","img","thumbnail","photo","picture"])if(e[r]&&!Array.isArray(e[r])){const o=Fe(e[r]);if(o)return o}}return null},Ge=(e,...t)=>{if(!e)return[];for(const r of[...t,"data","products","result","categories","category","Category","blogs","banners","items","list","cart"])if(Array.isArray(e[r])&&e[r].length>0)return e[r];return Array.isArray(e)?e:[]},zm=e=>e?typeof e=="string"?e:String(e._id||e.id||e.categoryId||e.value||""):"",hl=e=>zm(e),ji=e=>(e==null?void 0:e.name)||(e==null?void 0:e.categoryName)||(e==null?void 0:e.title)||"Category",wp=e=>Fe((e==null?void 0:e.image)||(e==null?void 0:e.categoryImage)||(e==null?void 0:e.thumbnail)),jp=m.createContext({}),Wd=e=>{var t,r,o;return(e==null?void 0:e.token)||(e==null?void 0:e.auth_key)||(e==null?void 0:e.auth)||((t=e==null?void 0:e.data)==null?void 0:t.token)||((r=e==null?void 0:e.data)==null?void 0:r.auth_key)||((o=e==null?void 0:e.data)==null?void 0:o.auth)},_d=(e,t={})=>{var r,o,i,a,s,l,d,c,u,g,f,j,$,S,w,x,p,h,P,E,y,v,z,N,C,W,U,ie,pe;return{...(e==null?void 0:e.user)||((r=e==null?void 0:e.data)==null?void 0:r.user)||{},id:(e==null?void 0:e.userid)||((o=e==null?void 0:e.data)==null?void 0:o.userid)||((i=e==null?void 0:e.user)==null?void 0:i._id)||((s=(a=e==null?void 0:e.data)==null?void 0:a.user)==null?void 0:s._id)||t.id,email:(e==null?void 0:e.email)||((l=e==null?void 0:e.data)==null?void 0:l.email)||((d=e==null?void 0:e.user)==null?void 0:d.email)||((u=(c=e==null?void 0:e.data)==null?void 0:c.user)==null?void 0:u.email)||t.email,name:(e==null?void 0:e.name)||((g=e==null?void 0:e.data)==null?void 0:g.name)||((f=e==null?void 0:e.user)==null?void 0:f.name)||(($=(j=e==null?void 0:e.data)==null?void 0:j.user)==null?void 0:$.name)||t.name,phone:(e==null?void 0:e.phone)||((S=e==null?void 0:e.data)==null?void 0:S.phone)||((w=e==null?void 0:e.user)==null?void 0:w.phone)||((p=(x=e==null?void 0:e.data)==null?void 0:x.user)==null?void 0:p.phone)||t.phone,mobile:(e==null?void 0:e.mobile)||((h=e==null?void 0:e.data)==null?void 0:h.mobile)||((P=e==null?void 0:e.user)==null?void 0:P.mobile)||((y=(E=e==null?void 0:e.data)==null?void 0:E.user)==null?void 0:y.mobile)||t.mobile||t.phone,firstname:(e==null?void 0:e.firstname)||((v=e==null?void 0:e.data)==null?void 0:v.firstname)||((z=e==null?void 0:e.user)==null?void 0:z.firstname)||((C=(N=e==null?void 0:e.data)==null?void 0:N.user)==null?void 0:C.firstname)||t.firstname,lastname:(e==null?void 0:e.lastname)||((W=e==null?void 0:e.data)==null?void 0:W.lastname)||((U=e==null?void 0:e.user)==null?void 0:U.lastname)||((pe=(ie=e==null?void 0:e.data)==null?void 0:ie.user)==null?void 0:pe.lastname)||t.lastname}};function Pm({children:e}){const[t,r]=m.useState(()=>{try{return JSON.parse(localStorage.getItem("arke_user"))}catch{return null}}),[o,i]=m.useState(0),[a,s]=m.useState(0),l=async(f,j)=>{const $=await fe.login(f,j),S=Wd($);if(($==null?void 0:$.success)!==!1&&S){const w=_d($,{email:f});return localStorage.setItem("arke_token",S),localStorage.setItem("arke_user",JSON.stringify(w)),r(w),window.dispatchEvent(new Event("arke-auth-change")),{ok:!0}}return{ok:!1,msg:($==null?void 0:$.message)||"Login failed"}},d=async f=>{const j=await fe.register(f),$=Wd(j);if((j==null?void 0:j.success)!==!1&&$){const S=_d(j,f);return localStorage.setItem("arke_token",$),localStorage.setItem("arke_user",JSON.stringify(S)),r(S),window.dispatchEvent(new Event("arke-auth-change")),{ok:!0}}return{ok:!1,msg:(j==null?void 0:j.message)||"Registration failed"}},c=()=>{localStorage.removeItem("arke_token"),localStorage.removeItem("arke_user"),r(null),i(0),s(0),window.dispatchEvent(new Event("arke-auth-change"))},u=async()=>{if(localStorage.getItem("arke_token"))try{const f=await fe.getCart();i(Ge(f,"cart").length)}catch{}},g=async()=>{if(localStorage.getItem("arke_token"))try{const f=await fe.getWishlist();s(Ge(f,"wishlist").length)}catch{}};return m.useEffect(()=>{u(),g()},[t]),n.jsx(jp.Provider,{value:{user:t,login:l,register:d,logout:c,cartCount:o,wishCount:a,setWishCount:s,refreshCart:u,refreshWishlist:g},children:e})}function ho(){return m.useContext(jp)}const kp=m.createContext();function Nm({children:e}){const[t,r]=m.useState([]),[o,i]=m.useState(!1),[a,s]=m.useState(null),l=m.useRef(!1),d=()=>!!localStorage.getItem("arke_token"),c=y=>{var v,z;return String(((v=y==null?void 0:y.product)==null?void 0:v._id)||((z=y==null?void 0:y.product)==null?void 0:z.id)||(y==null?void 0:y.productId)||(y==null?void 0:y._id)||(y==null?void 0:y.id)||"")},u=y=>Array.isArray(y)?y.filter(Boolean).map(v=>({_id:v._id||v.productId||v.id,productId:v.productId||v._id||v.id,quantity:Number(v.quantity)||1,product:v.product||null})):[],g=m.useCallback(async()=>{var y;if(!d()){r([]);return}if(!l.current){l.current=!0,i(!0),s(null);try{const v=await fe.getCart();if((v==null?void 0:v.httpStatus)===401||(y=v==null?void 0:v.message)!=null&&y.toLowerCase().includes("unauthorized")){console.warn("Cart: not authorized — user may not be logged in"),r([]);return}const z=Array.isArray(v==null?void 0:v.cart)?v.cart:Array.isArray(v==null?void 0:v.data)?v.data:Array.isArray(v==null?void 0:v.items)?v.items:Array.isArray(v)?v:[],N=u(z);r(C=>N.map(U=>{const ie=C.find(pe=>c(pe)===c(U));return{...U,product:U.product||(ie==null?void 0:ie.product)||null}}))}catch(v){console.error("loadCart error:",v),s((v==null?void 0:v.message)||"Failed to load cart"),r([])}finally{i(!1),l.current=!1}}},[]),f=m.useCallback(async(y,v=1)=>{if(!d())throw new Error("Please login to add items to cart");const z=typeof y=="object"&&y!==null?y:null,N=String(typeof y=="string"||typeof y=="number"?y:(y==null?void 0:y._id)||(y==null?void 0:y.id)||(y==null?void 0:y.productId)||"");if(!N)throw new Error("addToCart: productId is required");r(C=>C.find(U=>c(U)===N)?C.map(U=>c(U)===N?{...U,quantity:U.quantity+v}:U):[...C,{_id:N,productId:N,quantity:Number(v),product:z,_optimistic:!0}]);try{await fe.addToCart(N,v),await g()}catch(C){throw console.error("addToCart error:",C),await g(),C}},[g]),j=m.useCallback(async y=>{if(!d())return;const v=String(typeof y=="string"||typeof y=="number"?y:(y==null?void 0:y._id)||(y==null?void 0:y.id)||(y==null?void 0:y.productId)||"");if(!v)throw new Error("removeFromCart: productId is required");r(z=>z.filter(N=>c(N)!==v));try{await fe.removeFromCart(v)}catch(z){throw console.error("removeFromCart error:",z),await g(),z}},[g]),$=m.useCallback(async(y,v)=>{if(!d())return;const z=String(typeof y=="string"||typeof y=="number"?y:(y==null?void 0:y._id)||(y==null?void 0:y.id)||(y==null?void 0:y.productId)||"");if(!z)throw new Error("updateQuantity: productId is required");const N=Number(v);if(N<=0)return j(z);r(C=>C.map(W=>c(W)===z?{...W,quantity:N}:W));try{await fe.updateCartItem(z,N)}catch(C){throw console.error("updateQuantity error:",C),await g(),C}},[g,j]),S=m.useCallback(()=>{r([]),s(null)},[]),w=m.useCallback(()=>t.reduce((y,v)=>y+(v.quantity||1),0),[t]),x=m.useCallback(()=>t.reduce((y,v)=>{const z=v.product||v;return y+Number((z==null?void 0:z.price)||(z==null?void 0:z.salePrice)||0)*(v.quantity||1)},0),[t]),p=m.useCallback(y=>{const v=String(typeof y=="string"||typeof y=="number"?y:(y==null?void 0:y._id)||(y==null?void 0:y.id)||(y==null?void 0:y.productId)||"");return t.some(z=>c(z)===v)},[t]),h=m.useCallback(y=>{const v=String(typeof y=="string"||typeof y=="number"?y:(y==null?void 0:y._id)||(y==null?void 0:y.id)||(y==null?void 0:y.productId)||"");return t.find(z=>c(z)===v)||null},[t]);m.useEffect(()=>{d()&&g()},[g]),m.useEffect(()=>{const y=()=>{d()?g():S()},v=z=>{z.key==="arke_token"&&y()};return window.addEventListener("storage",v),window.addEventListener("arke-auth-change",y),()=>{window.removeEventListener("storage",v),window.removeEventListener("arke-auth-change",y)}},[g,S]);const P=t.reduce((y,v)=>y+(v.quantity||1),0),E=t.reduce((y,v)=>{const z=v.product||v;return y+Number((z==null?void 0:z.price)||(z==null?void 0:z.salePrice)||0)*(v.quantity||1)},0);return n.jsx(kp.Provider,{value:{items:t,loading:o,error:a,addToCart:f,removeFromCart:j,updateQuantity:$,clearCart:S,loadCart:g,getCartCount:w,getCartTotal:x,isInCart:p,getCartItem:h,cartCount:P,cartTotal:E},children:e})}function bn(){const e=vt.useContext(kp);if(!e)throw new Error("useCart must be used within <CartProvider>");return e}const Sp=m.createContext();function Tm({children:e}){const[t,r]=m.useState([]),[o,i]=m.useState(!1),[a,s]=m.useState(null),l=m.useRef(!1),d=()=>!!localStorage.getItem("arke_token"),c=x=>{var p,h;return String(((p=x==null?void 0:x.product)==null?void 0:p._id)||((h=x==null?void 0:x.product)==null?void 0:h.id)||(x==null?void 0:x.productId)||(x==null?void 0:x._id)||(x==null?void 0:x.id)||"")},u=m.useCallback(async()=>{var x;if(!d()){r([]);return}if(!l.current){l.current=!0,i(!0),s(null);try{const p=await fe.getWishlist();if((p==null?void 0:p.httpStatus)===401||(x=p==null?void 0:p.message)!=null&&x.toLowerCase().includes("unauthorized")){console.warn("Wishlist: not authorized"),r([]);return}const h=Array.isArray(p==null?void 0:p.wishlist)?p.wishlist:Array.isArray(p==null?void 0:p.products)?p.products:Array.isArray(p==null?void 0:p.data)?p.data:Array.isArray(p==null?void 0:p.items)?p.items:Array.isArray(p)?p:[];r(h)}catch(p){console.error("loadWishlist error:",p),s((p==null?void 0:p.message)||"Failed to load wishlist")}finally{i(!1),l.current=!1}}},[]);m.useEffect(()=>{d()&&u()},[u]),m.useEffect(()=>{const x=()=>{d()?u():r([])},p=h=>{h.key==="arke_token"&&x()};return window.addEventListener("storage",p),window.addEventListener("arke-auth-change",x),()=>{window.removeEventListener("storage",p),window.removeEventListener("arke-auth-change",x)}},[u]);const g=m.useCallback(async x=>{if(!d())throw new Error("Please login to save items");const p=typeof x=="object"&&x!==null?x:null,h=typeof x=="string"||typeof x=="number"?String(x):c(x);if(!h)throw new Error("productId is required");const P=t.some(E=>c(E)===h);r(E=>E.some(v=>c(v)===h)?E.filter(v=>c(v)!==h):[...E,p||{_id:h,id:h}]);try{let E;P?E=await fe.removeWishlist(h):E=await fe.addToWishlist(h),!(E!=null&&E.success)&&(E!=null&&E.message)&&console.warn("Wishlist toggle response:",E.message),await u()}catch(E){throw console.error("toggleWishlist error:",E),await u(),E}},[t,u]),f=m.useCallback(x=>{const p=typeof x=="string"||typeof x=="number"?String(x):c(x);return t.some(h=>c(h)===p)},[t]),j=m.useCallback(()=>t.length,[t]),$=m.useCallback(()=>{r([])},[]),S=m.useCallback(async x=>g(x),[g]),w={items:t,wishlistCount:t.length,loading:o,error:a,toggleWishlist:g,removeFromWishlist:S,isInWishlist:f,getWishlistCount:j,clearWishlist:$,loadWishlist:u};return n.jsx(Sp.Provider,{value:w,children:e})}function Hi(){const e=vt.useContext(Sp);if(!e)throw new Error("useWishlist must be used within WishlistProvider");return e}var Cp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Bd=vt.createContext&&vt.createContext(Cp),Em=["attr","size","title"];function Im(e,t){if(e==null)return{};var r,o,i=Fm(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function Fm(e,t){if(e==null)return{};var r={};for(var o in e)if({}.hasOwnProperty.call(e,o)){if(t.indexOf(o)!==-1)continue;r[o]=e[o]}return r}function ki(){return ki=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)({}).hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},ki.apply(null,arguments)}function Ad(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,o)}return r}function Si(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Ad(Object(r),!0).forEach(function(o){Mm(e,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ad(Object(r)).forEach(function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))})}return e}function Mm(e,t,r){return(t=Rm(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Rm(e){var t=Lm(e,"string");return typeof t=="symbol"?t:t+""}function Lm(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var o=r.call(e,t);if(typeof o!="object")return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function $p(e){return e&&e.map((t,r)=>vt.createElement(t.tag,Si({key:r},t.attr),$p(t.child)))}function vn(e){return t=>vt.createElement(Wm,ki({attr:Si({},e.attr)},t),$p(e.child))}function Wm(e){var t=r=>{var{attr:o,size:i,title:a}=e,s=Im(e,Em),l=i||r.size||"1em",d;return r.className&&(d=r.className),e.className&&(d=(d?d+" ":"")+e.className),vt.createElement("svg",ki({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,o,s,{className:d,style:Si(Si({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&vt.createElement("title",null,a),e.children)};return Bd!==void 0?vt.createElement(Bd.Consumer,null,r=>t(r)):t(Cp)}function _m(e){return vn({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"},child:[]}]})(e)}function Bm(e){return vn({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(e)}const O={text:"#f8f2ee",textMuted:"#b8a5b0",roseGold:"#c9897a",roseGoldLight:"#dba99d",roseGoldDeep:"#a8685a",champagne:"#d4b896",dustyRose:"#c4909e",border:"#2a1f2e",dropdownBg:"rgba(13,8,16,0.97)",bannerBg:"#160e1c",her:"#c4909e",him:"#7a95a8"},Am=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Jost:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap');

  * { box-sizing: border-box; }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  @keyframes slideDown {
    from { transform: translateY(-100%); opacity: 0; }
    to { transform: translateY(0); opacity: 1; }
  }

  @keyframes slideDownDrop {
    from { opacity: 0; transform: translateY(-10px) scale(0.98); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }

  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 0 12px rgba(201,137,122,0.2); }
    50% { box-shadow: 0 0 24px rgba(201,137,122,0.45); }
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* ═══════════════════ UNIQUE ANIMATIONS ═══════════════════ */

  /* Floating Background Orbs */
  @keyframes floatOrb1 {
    0%, 100% { transform: translate(0px, 0px); }
    25% { transform: translate(20px, -15px); }
    50% { transform: translate(0px, 20px); }
    75% { transform: translate(-25px, -10px); }
  }

  @keyframes floatOrb2 {
    0%, 100% { transform: translate(0px, 0px); }
    33% { transform: translate(-15px, 25px); }
    66% { transform: translate(20px, -20px); }
  }

  /* Elegant Link Underline with Wave Effect */
  @keyframes waveUnderline {
    0% { transform: scaleX(0) skewX(-20deg); }
    50% { transform: scaleX(1.1) skewX(5deg); }
    100% { transform: scaleX(1) skewX(0deg); }
  }

  /* Glow Pulse */
  @keyframes glowPulse {
    0%, 100% { 
      box-shadow: 0 0 10px rgba(201,137,122,0.3),
                  inset 0 0 15px rgba(201,137,122,0.1);
    }
    50% { 
      box-shadow: 0 0 20px rgba(201,137,122,0.5),
                  inset 0 0 25px rgba(201,137,122,0.2);
    }
  }

  /* Shimmer Text Effect */
  @keyframes shimmerText {
    0% { background-position: -1000% 0; }
    100% { background-position: 1000% 0; }
  }

  /* Icon Bounce */
  @keyframes iconBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  /* Navbar sliding scale effect */
  @keyframes navSlideScale {
    from { transform: scaleY(0); opacity: 0; transform-origin: top; }
    to { transform: scaleY(1); opacity: 1; }
  }

  /* Staggered letter animation for logo */
  @keyframes letterFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-3px); }
  }

  /* Rotating glow background */
  @keyframes rotatingGlow {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Link hover magnetic effect */
  @keyframes magneticPull {
    0% { transform: translate(0, 0); }
    50% { transform: translate(2px, -1px); }
    100% { transform: translate(0, 0); }
  }

  /* ═══════════════════ STYLE APPLICATIONS ═══════════════════ */

  .ann-marquee-track {
    display: flex;
    animation: marquee 32s linear infinite;
    width: max-content;
  }
  .ann-marquee-track:hover { animation-play-state: paused; }
  .ann-sep { margin: 0 28px; color: rgba(201,137,122,0.3); }

  /* Navbar transition — smooth bg on scroll */
  .arke-navbar {
    transition:
      height 0.4s cubic-bezier(0.4,0,0.2,1),
      background-color 0.5s ease,
      backdrop-filter 0.5s ease,
      -webkit-backdrop-filter 0.5s ease,
      border-color 0.5s ease,
      box-shadow 0.5s ease;
    animation: navSlideScale 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .arke-navbar.is-transparent {
    background: transparent !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    border-bottom-color: transparent !important;
    box-shadow: none !important;
  }

  .arke-navbar.is-solid {
    background: rgba(13,8,16,0.95) !important;
    backdrop-filter: blur(32px) !important;
    -webkit-backdrop-filter: blur(32px) !important;
    border-bottom-color: rgba(201,137,122,0.10) !important;
    box-shadow: 0 4px 40px rgba(0,0,0,0.5) !important;
  }

  /* Shimmer line fade with floating motion */
  .arke-shimmer-line {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,137,122,0.28), transparent);
    pointer-events: none;
    transition: opacity 0.5s ease;
    animation: floatOrb1 6s ease-in-out infinite;
  }

  /* Nav link with enhanced animations */
  .arke-nav-link {
    position: relative;
    text-decoration: none;
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    letter-spacing: 2.2px;
    text-transform: uppercase;
    font-weight: 500;
    transition: color 0.3s cubic-bezier(0.4,0,0.2,1);
    padding-bottom: 2px;
    overflow: hidden;
  }

  .arke-nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    right: 50%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #c9897a, transparent);
    transition: left 0.4s cubic-bezier(0.4,0,0.2,1),
                right 0.4s cubic-bezier(0.4,0,0.2,1);
    filter: drop-shadow(0 0 6px rgba(201,137,122,0.4));
  }

  .arke-nav-link:hover::after,
  .arke-nav-link.active::after {
    left: 0;
    right: 0;
    animation: waveUnderline 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .arke-nav-link:hover {
    animation: magneticPull 0.4s ease;
  }

  .nav-gift-her { color: #c4909e !important; }
  .nav-gift-her:hover { color: #e8c4bc !important; }
  .nav-gift-him { color: #7a95a8 !important; }
  .nav-gift-him:hover { color: #a8c0d0 !important; }

  .nav-icon-btn {
    color: rgba(248,242,238,0.65);
    display: flex;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    padding: 8px;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    border-radius: 50%;
  }

  .nav-icon-btn:hover {
    color: #c9897a;
    background: rgba(201,137,122,0.08);
    animation: iconBounce 0.6s ease;
  }

  .arke-nav-links {
    display: flex;
    gap: 22px;
    list-style: none;
    align-items: center;
    margin: 0;
    padding: 0;
  }

  .arke-hamburger { display: none !important; }

  @media (max-width: 1024px) {
    .arke-nav-links { display: none !important; }
    .arke-hamburger { display: flex !important; }
  }

  .account-dropdown-menu {
    animation: slideDownDrop 0.28s cubic-bezier(0.4,0,0.2,1) forwards;
    border-left: 2px solid rgba(201,137,122,0.3);
    position: relative;
  }

  .account-dropdown-menu::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,137,122,0.4), transparent);
    animation: shimmer 2s ease-in-out infinite;
  }

  .account-btn-circle {
    position: relative;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg,
      rgba(201,137,122,0.14) 0%,
      rgba(196,144,158,0.08) 100%
    );
    border: 1.5px solid rgba(201,137,122,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
    font-family: 'Cormorant Garamond', serif;
    font-weight: 600;
    font-size: 15px;
    color: #c9897a;
    outline: none;
    padding: 0;
  }

  .account-btn-circle:hover {
    border-color: #c9897a;
    background: linear-gradient(135deg,
      rgba(201,137,122,0.22) 0%,
      rgba(196,144,158,0.14) 100%
    );
    box-shadow: 0 0 20px rgba(201,137,122,0.25),
                inset 0 1px 0 rgba(255,255,255,0.06);
    animation: glowPulse 1.5s ease-in-out;
  }

  .account-btn-circle.active {
    border-color: #c9897a;
    background: linear-gradient(135deg,
      rgba(201,137,122,0.26) 0%,
      rgba(196,144,158,0.18) 100%
    );
    box-shadow: 0 0 28px rgba(201,137,122,0.35);
    animation: glowPulse 1.2s ease-in-out infinite;
  }

  .account-menu-item {
    position: relative;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .account-menu-item::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 3px;
    background: linear-gradient(to bottom, #c9897a, #c4909e);
    transform: scaleY(0);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
    transform-origin: top;
    filter: drop-shadow(0 0 8px rgba(201,137,122,0.4));
  }

  .account-menu-item:hover::before { 
    transform: scaleY(1);
    animation: floatOrb2 0.5s ease-out;
  }

  .badge-pulse {
    animation: pulseGlow 2s ease-in-out infinite;
  }

  .mobile-nav-link {
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) !important;
  }

  /* Logo animations */
  .logo-char {
    display: inline-block;
    animation: letterFloat 3s ease-in-out infinite;
  }

  .logo-char:nth-child(2) {
    animation-delay: 0.2s;
  }
`,Dd=({color:e="rgba(201,137,122,0.25)",width:t=80})=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,width:t},children:[n.jsx("div",{style:{flex:1,height:"0.5px",background:e,animation:"shimmer 3s ease-in-out infinite"}}),n.jsx("span",{style:{color:e,fontSize:8,opacity:.8},children:"✦"}),n.jsx("div",{style:{flex:1,height:"0.5px",background:e,animation:"shimmer 3s ease-in-out infinite 0.5s"}})]});function Dm({onHeightChange:e}){var l,d;const[t,r]=m.useState(!0),[o,i]=m.useState([]);if(m.useEffect(()=>{const c=async()=>{try{const g=await fetch(`${gn}/announcements`,{headers:{"ngrok-skip-browser-warning":"true"}});if(g.ok){const j=((await g.json()).data||[]).filter($=>$.isActive).sort(($,S)=>($.order||0)-(S.order||0));if(j.length){i(j);return}}}catch{}i([{message:"✦ New Collection — Handcrafted Pieces Made For Her",bgColor:O.bannerBg,textColor:O.roseGold},{message:"◈ Free Shipping On All Orders Above ₹999",bgColor:O.bannerBg,textColor:O.champagne},{message:"◇ Hallmark Certified · Waterproof · Tarnish-Proof",bgColor:O.bannerBg,textColor:O.roseGold},{message:"✦ Up To 30% Off — Summer Edit Now Live",bgColor:O.bannerBg,textColor:O.champagne}])};c();const u=setInterval(c,5*60*1e3);return()=>clearInterval(u)},[]),m.useEffect(()=>{e==null||e(t&&o.length?38:0)},[t,o]),!t||!o.length)return null;const a=((l=o[0])==null?void 0:l.bgColor)||O.bannerBg,s=((d=o[0])==null?void 0:d.textColor)||O.roseGold;return n.jsxs("div",{style:{background:`linear-gradient(135deg, ${a} 0%, #1a0f1e 50%, ${a} 100%)`,height:38,display:"flex",alignItems:"center",position:"relative",zIndex:1001,overflow:"hidden",animation:"slideDown 0.5s ease",borderBottom:"1px solid rgba(201,137,122,0.12)"},children:[n.jsx("div",{style:{width:38,height:"100%",flexShrink:0,background:"linear-gradient(135deg, rgba(201,137,122,0.12), transparent)",display:"flex",alignItems:"center",justifyContent:"center",borderRight:"1px solid rgba(201,137,122,0.08)"},children:n.jsx("span",{style:{fontSize:9,color:s,opacity:.5,animation:"letterFloat 2s ease-in-out infinite"},children:"✦"})}),n.jsxs("div",{style:{flex:1,overflow:"hidden",position:"relative"},children:[n.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:48,background:`linear-gradient(to right, ${a}, transparent)`,zIndex:2,pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",right:36,top:0,bottom:0,width:48,background:`linear-gradient(to left, ${a}, transparent)`,zIndex:2,pointerEvents:"none"}}),n.jsx("div",{className:"ann-marquee-track",children:[...o,...o].map((c,u)=>n.jsxs("span",{style:{fontFamily:"'Jost', sans-serif",fontSize:10.5,letterSpacing:"2px",fontWeight:500,color:c.textColor||O.roseGold,whiteSpace:"nowrap",display:"inline-flex",alignItems:"center"},children:[c.message,n.jsx("span",{className:"ann-sep",children:"◇"})]},u))})]}),n.jsx("button",{onClick:()=>r(!1),style:{background:"rgba(201,137,122,0.06)",border:"none",borderLeft:"1px solid rgba(201,137,122,0.08)",color:s,cursor:"pointer",fontSize:11,padding:"0 14px",height:"100%",flexShrink:0,display:"flex",alignItems:"center",opacity:.55,transition:"opacity 0.2s"},onMouseEnter:c=>c.currentTarget.style.opacity="1",onMouseLeave:c=>c.currentTarget.style.opacity="0.55",children:"✕"})]})}function Um({user:e}){const[t,r]=m.useState(!1),o=m.useRef(null),i=m.useRef(null),a=xr(),{logout:s}=ho();m.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]),m.useEffect(()=>{const g=f=>{o.current&&!o.current.contains(f.target)&&r(!1)};if(t)return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[t]);const l=()=>{i.current&&(clearTimeout(i.current),i.current=null),r(!0)},d=()=>{i.current=setTimeout(()=>r(!1),160)},c=()=>{s(),r(!1),window.location.href="/"},u=e!=null&&e.email?e.email.charAt(0).toUpperCase():"U";return n.jsxs("div",{ref:o,style:{position:"relative"},onMouseEnter:l,onMouseLeave:d,children:[n.jsx("button",{className:`account-btn-circle ${t?"active":""}`,title:"My Account",children:u}),t&&n.jsxs("div",{className:"account-dropdown-menu",style:{position:"absolute",top:"calc(100% + 10px)",right:0,background:O.dropdownBg,backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)",border:`1px solid ${O.border}`,borderRadius:"16px",minWidth:"290px",boxShadow:`
              0 32px 80px rgba(0,0,0,0.8),
              0 8px 24px rgba(0,0,0,0.5),
              inset 0 1px 0 rgba(201,137,122,0.08)
            `,zIndex:1010,overflow:"hidden",pointerEvents:"auto"},children:[n.jsxs("div",{style:{padding:"20px 18px",background:`linear-gradient(135deg,
                rgba(201,137,122,0.10) 0%,
                rgba(196,144,158,0.06) 50%,
                rgba(61,32,64,0.08) 100%
              )`,borderBottom:`1px solid ${O.border}`},children:[n.jsx("div",{style:{height:"1px",background:"linear-gradient(90deg, transparent, rgba(201,137,122,0.4), transparent)",marginBottom:14,marginTop:-6,marginLeft:-18,marginRight:-18,animation:"shimmer 2s ease-in-out infinite"}}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg, ${O.roseGoldDeep} 0%, ${O.dustyRose} 50%, ${O.champagne} 100%)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:17,fontFamily:"'Cormorant Garamond', serif",fontWeight:600,boxShadow:`0 4px 20px rgba(201,137,122,0.35),
                              inset 0 1px 0 rgba(255,255,255,0.2)`,flexShrink:0,animation:"glowPulse 2s ease-in-out infinite"},children:u}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'Jost', sans-serif",fontSize:9,fontWeight:600,letterSpacing:"2px",color:O.roseGold,textTransform:"uppercase",marginBottom:5,opacity:.85},children:"Welcome Back"}),n.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:13,color:O.text,letterSpacing:"0.5px",fontStyle:"italic",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",opacity:.8},children:(e==null?void 0:e.email)||"Guest"})]}),n.jsx("div",{style:{background:"linear-gradient(135deg, rgba(201,137,122,0.15), rgba(196,144,158,0.10))",border:"1px solid rgba(201,137,122,0.2)",borderRadius:"20px",padding:"3px 8px",flexShrink:0},children:n.jsx("span",{style:{fontFamily:"'Jost', sans-serif",fontSize:7.5,letterSpacing:"1.5px",color:O.roseGold,textTransform:"uppercase",fontWeight:600},children:"Member"})})]})]}),n.jsx("div",{style:{padding:"8px 0"},children:Om.map((g,f)=>{const j=a.pathname===g.to;return n.jsxs(Oe,{to:g.to,onClick:()=>r(!1),className:"account-menu-item",style:{display:"flex",alignItems:"center",gap:12,padding:"12px 18px",fontFamily:"'Jost', sans-serif",fontSize:9.5,letterSpacing:"1.2px",textTransform:"uppercase",textDecoration:"none",color:j?O.roseGold:O.textMuted,transition:"all 0.25s",background:j?"rgba(201,137,122,0.07)":"transparent"},onMouseEnter:$=>{j||($.currentTarget.style.color=O.roseGoldLight,$.currentTarget.style.background="rgba(201,137,122,0.05)",$.currentTarget.style.paddingLeft="22px")},onMouseLeave:$=>{j||($.currentTarget.style.color=O.textMuted,$.currentTarget.style.background="transparent",$.currentTarget.style.paddingLeft="18px")},children:[n.jsx("span",{style:{fontSize:14,minWidth:18,opacity:.85},children:g.icon}),n.jsx("span",{style:{flex:1},children:g.label}),j?n.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:O.roseGold,flexShrink:0,animation:"pulseGlow 1.5s ease-in-out infinite"}}):n.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:.3,children:n.jsx("polyline",{points:"9 18 15 12 9 6"})})]},g.to)})}),n.jsx("div",{style:{padding:"0 18px"},children:n.jsx("div",{style:{height:"0.5px",background:"linear-gradient(90deg, transparent, rgba(201,137,122,0.2), transparent)",animation:"shimmer 2.5s ease-in-out infinite"}})}),n.jsx("div",{style:{padding:"12px 14px 14px"},children:n.jsxs("button",{onClick:c,style:{width:"100%",fontFamily:"'Jost', sans-serif",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",fontWeight:600,padding:"11px 16px",cursor:"pointer",outline:"none",border:`1px solid ${O.border}`,background:"transparent",color:O.textMuted,transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",gap:8},onMouseEnter:g=>{g.currentTarget.style.background="rgba(196,144,158,0.08)",g.currentTarget.style.borderColor="rgba(196,144,158,0.3)",g.currentTarget.style.color=O.dustyRose},onMouseLeave:g=>{g.currentTarget.style.background="transparent",g.currentTarget.style.borderColor=O.border,g.currentTarget.style.color=O.textMuted},children:[n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[n.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),n.jsx("polyline",{points:"16 17 21 12 16 7"}),n.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Sign Out"]})})]})]})}const Ud=[{label:"Home",to:"/"},{label:"New Collection",to:"/new-collection"},{label:"Best Sellers",to:"/best-sellers"},{label:"All Jewellery",to:"/products"},{label:"Categories",to:"/categories"},{label:"Gift for Her",to:"/gift-for-her",accent:O.her},{label:"Gift for Him",to:"/gift-for-him",accent:O.him}],Om=[{label:"My Orders",to:"/My-Orders",icon:"✦"},{label:"Customer Care",to:"/customer-care",icon:"◇"},{label:"Account Security",to:"/account-security",icon:"◈"},{label:"Bank Details",to:"/Bankdetails",icon:"◉"}];function Hm({onLoginClick:e}){const{user:t,logout:r}=ho(),{cartCount:o}=bn(),{wishlistCount:i}=Hi(),a=o>99?"99+":o,s=i>99?"99+":i,[l,d]=m.useState(!1),[c,u]=m.useState(!1),[g,f]=m.useState(38),j=xr(),$=j.pathname==="/";m.useEffect(()=>{const w=()=>{d(window.scrollY>50)};return w(),window.addEventListener("scroll",w,{passive:!0}),()=>window.removeEventListener("scroll",w)},[j.pathname]),m.useEffect(()=>{u(!1)},[j]);const S=$&&!l;return n.jsxs(n.Fragment,{children:[n.jsx("style",{children:Am}),n.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:1001},children:n.jsx(Dm,{onHeightChange:f})}),n.jsxs("nav",{className:`arke-navbar ${S?"is-transparent":"is-solid"}`,style:{position:"fixed",top:g,left:0,right:0,zIndex:1e3,height:l?56:68,padding:"0 48px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid transparent"},children:[n.jsx("div",{className:"arke-shimmer-line",style:{opacity:S?0:1}}),n.jsxs(Oe,{style:{display:"flex",alignItems:"baseline",gap:1,textDecoration:"none",flexShrink:0},children:[n.jsx("span",{className:"logo-char",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?24:28,fontWeight:400,letterSpacing:"6px",color:O.text,transition:"font-size 0.4s ease",fontStyle:"italic"},children:"Ark"}),n.jsx("span",{className:"logo-char",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?24:28,fontWeight:400,letterSpacing:"6px",fontStyle:"italic",background:`linear-gradient(135deg, ${O.roseGold}, ${O.champagne}, ${O.dustyRose})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",transition:"font-size 0.4s ease"},children:"é"})]}),n.jsx("ul",{className:"arke-nav-links",children:Ud.map((w,x)=>{const p=j.pathname===w.to,h=w.to==="/gift-for-her",P=w.to==="/gift-for-him",E=p?w.accent||O.roseGold:h?O.her:P?O.him:"rgba(248,242,238,0.55)";return n.jsx("li",{style:{animation:`fadeInUp 0.5s ease ${x*50}ms both`},children:n.jsxs(Oe,{to:w.to,className:`arke-nav-link${p?" active":""}${h?" nav-gift-her":""}${P?" nav-gift-him":""}`,style:{color:E},onMouseEnter:y=>{!p&&!h&&!P&&(y.currentTarget.style.color=O.text)},onMouseLeave:y=>{!p&&!h&&!P&&(y.currentTarget.style.color=E)},children:[h&&n.jsx("span",{style:{marginRight:4,fontSize:9,opacity:.8},children:"✿"}),P&&n.jsx("span",{style:{marginRight:4,fontSize:9,opacity:.8},children:"◈"}),w.label]})},w.to)})}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[n.jsxs(Oe,{to:"/wishlist",className:"nav-icon-btn",children:[n.jsx(Bm,{size:19}),i>0&&n.jsx("span",{className:"badge-pulse",style:{position:"absolute",top:2,right:2,width:16,height:16,borderRadius:"50%",background:`linear-gradient(135deg, ${O.roseGoldDeep}, ${O.dustyRose})`,color:"#fff",fontSize:8.5,fontWeight:700,fontFamily:"'Jost', sans-serif",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(201,137,122,0.5)"},children:s})]}),n.jsxs(Oe,{to:"/cart",className:"nav-icon-btn",children:[n.jsx(_m,{size:19}),o>0&&n.jsx("span",{className:"badge-pulse",style:{position:"absolute",top:2,right:2,width:16,height:16,borderRadius:"50%",background:`linear-gradient(135deg, ${O.roseGoldDeep}, ${O.dustyRose})`,color:"#fff",fontSize:8.5,fontWeight:700,fontFamily:"'Jost', sans-serif",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(201,137,122,0.5)"},children:a})]}),n.jsx("div",{style:{width:"0.5px",height:18,background:"rgba(201,137,122,0.2)",margin:"0 6px",animation:"floatOrb1 4s ease-in-out infinite"}}),t?n.jsx(Um,{user:t}):n.jsx(Ym,{onClick:e,children:"Sign In"}),n.jsx("button",{className:"arke-hamburger",onClick:()=>u(!c),style:{flexDirection:"column",gap:5,background:"none",border:"none",cursor:"pointer",padding:"4px 0 4px 14px",marginLeft:4,outline:"none"},children:[0,1,2].map(w=>n.jsx("span",{style:{display:"block",width:w===2?14:22,height:1.5,background:O.roseGold,transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",transform:c?w===0?"rotate(45deg) translate(4.5px, 4.5px)":w===2?"rotate(-45deg) translate(3px, -4px)":"none":"none",opacity:c&&w===1?0:1,transformOrigin:"left center"}},w))})]})]}),n.jsxs("div",{style:{position:"fixed",inset:0,zIndex:998,background:"linear-gradient(160deg, #0d0810 0%, #160e1c 40%, #1a0d18 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,transform:c?"translateX(0)":"translateX(100%)",transition:"transform 0.5s cubic-bezier(0.77,0,0.175,1)",overflowY:"auto",padding:"60px 24px"},children:[n.jsx("div",{style:{position:"absolute",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle, rgba(201,137,122,0.04) 0%, transparent 70%)",top:"10%",right:"-10%",pointerEvents:"none",animation:"floatOrb1 8s ease-in-out infinite"}}),n.jsx("div",{style:{position:"absolute",width:250,height:250,borderRadius:"50%",background:"radial-gradient(circle, rgba(196,144,158,0.04) 0%, transparent 70%)",bottom:"15%",left:"-5%",pointerEvents:"none",animation:"floatOrb2 10s ease-in-out infinite"}}),n.jsx("button",{onClick:()=>u(!1),style:{position:"absolute",top:24,right:24,background:"rgba(201,137,122,0.08)",border:"1px solid rgba(201,137,122,0.15)",color:O.roseGold,width:36,height:36,borderRadius:"50%",fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.25s"},onMouseEnter:w=>{w.currentTarget.style.background="rgba(201,137,122,0.16)",w.currentTarget.style.transform="rotate(90deg)"},onMouseLeave:w=>{w.currentTarget.style.background="rgba(201,137,122,0.08)",w.currentTarget.style.transform="rotate(0deg)"},children:"✕"}),n.jsx("div",{style:{marginBottom:20},children:n.jsxs("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:26,fontStyle:"italic",color:O.text,letterSpacing:"6px"},children:["Ark",n.jsx("span",{style:{background:`linear-gradient(135deg, ${O.roseGold}, ${O.champagne})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"é"})]})}),n.jsx(Dd,{color:"rgba(201,137,122,0.2)",width:60}),n.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,marginTop:16},children:Ud.map((w,x)=>{const p=w.to==="/gift-for-her",h=w.to==="/gift-for-him",E=j.pathname===w.to?w.accent||O.roseGold:p?O.her:h?O.him:"rgba(248,242,238,0.7)";return n.jsxs(Oe,{to:w.to,className:"mobile-nav-link",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:26,fontWeight:300,fontStyle:"italic",letterSpacing:"4px",color:E,textDecoration:"none",textTransform:"capitalize",padding:"10px 24px",animation:c?`fadeInUp 0.5s ease ${x*60}ms both`:"none"},onMouseEnter:y=>{y.currentTarget.style.color=w.accent||O.roseGold,y.currentTarget.style.letterSpacing="6px"},onMouseLeave:y=>{y.currentTarget.style.color=E,y.currentTarget.style.letterSpacing="4px"},children:[p&&"✿ ",h&&"◈ ",w.label]},w.to)})}),n.jsx("div",{style:{marginTop:20},children:n.jsx(Dd,{color:"rgba(201,137,122,0.18)",width:80})}),n.jsx("div",{style:{marginTop:16},children:t?n.jsx("button",{onClick:()=>{r(),u(!1)},style:{background:"transparent",border:"1px solid rgba(201,137,122,0.25)",color:"rgba(201,137,122,0.65)",padding:"12px 32px",fontFamily:"'Jost', sans-serif",fontSize:9,letterSpacing:"2.5px",textTransform:"uppercase",cursor:"pointer",borderRadius:"2px",transition:"all 0.3s"},onMouseEnter:w=>{w.currentTarget.style.borderColor="rgba(201,137,122,0.5)",w.currentTarget.style.color=O.roseGold},onMouseLeave:w=>{w.currentTarget.style.borderColor="rgba(201,137,122,0.25)",w.currentTarget.style.color="rgba(201,137,122,0.65)"},children:"Sign Out"}):n.jsx("button",{onClick:()=>{e(),u(!1)},style:{background:`linear-gradient(135deg, ${O.roseGoldDeep} 0%, ${O.dustyRose} 100%)`,border:"none",color:"#fff",padding:"14px 40px",fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"3px",textTransform:"uppercase",cursor:"pointer",fontWeight:600,borderRadius:"2px",boxShadow:"0 8px 32px rgba(201,137,122,0.35)",transition:"all 0.3s"},onMouseEnter:w=>{w.currentTarget.style.transform="translateY(-2px)",w.currentTarget.style.boxShadow="0 12px 40px rgba(201,137,122,0.45)"},onMouseLeave:w=>{w.currentTarget.style.transform="translateY(0)",w.currentTarget.style.boxShadow="0 8px 32px rgba(201,137,122,0.35)"},children:"✦ Sign In"})})]})]})}function Ym({children:e,onClick:t}){const[r,o]=m.useState(!1);return n.jsxs("button",{onClick:t,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{fontFamily:"'Jost', sans-serif",fontSize:9.5,letterSpacing:"2px",textTransform:"uppercase",fontWeight:600,padding:"9px 20px",cursor:"pointer",outline:"none",border:"none",display:"inline-flex",alignItems:"center",gap:6,transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",background:r?`linear-gradient(135deg, ${O.roseGold} 0%, ${O.dustyRose} 100%)`:`linear-gradient(135deg, ${O.roseGoldDeep} 0%, ${O.dustyRose} 100%)`,color:"#fff",borderRadius:"2px",boxShadow:r?"0 8px 28px rgba(201,137,122,0.45)":"0 3px 12px rgba(201,137,122,0.22)",transform:r?"translateY(-2px)":"none"},children:[n.jsx("span",{style:{fontSize:8,opacity:.85},children:"✦"}),e]})}function zp(e){return vn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function Pp(e){return vn({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"},child:[]}]})(e)}function Np(e){return vn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function Tp(e){return vn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}const G={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function Gm(){const e={footer:{background:`linear-gradient(to bottom, ${G.surface} 0%, ${G.bg} 100%)`,borderTop:`1px solid ${G.border}`,padding:"80px 80px 40px"},grid:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:"50px",marginBottom:"60px"},brand:{fontFamily:"'Cormorant Garamond', serif",fontSize:"42px",fontWeight:400,letterSpacing:"4px",color:G.text,marginBottom:"24px",background:`linear-gradient(135deg, ${G.text}, ${G.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},brandSpan:{color:G.rose,background:"none",WebkitTextFillColor:"unset"},tagline:{color:G.textMuted,fontSize:"13.5px",lineHeight:"1.9",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.5px",fontWeight:400,maxWidth:"280px"},colTitle:{fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",color:G.burgundy,marginBottom:"24px",fontWeight:700},colLinks:{display:"flex",flexDirection:"column",gap:"14px"},colLink:{color:G.textMuted,fontSize:"13px",textDecoration:"none",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.3px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",cursor:"pointer",fontWeight:400,position:"relative",display:"inline-block"},bottom:{borderTop:`1px solid ${G.border}`,paddingTop:"36px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"40px",flexWrap:"wrap"},copy:{color:G.textMuted,fontSize:"11px",letterSpacing:"0.8px",fontFamily:"'Poppins', sans-serif",fontWeight:500},socialRow:{display:"flex",gap:"12px",alignItems:"center"},socialLink:{width:"42px",height:"42px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",textDecoration:"none",color:G.rose,fontSize:"16px",border:`1.5px solid ${G.rose}`,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",cursor:"pointer",background:"transparent",fontWeight:500}},t=[{label:"Order Tracking",to:"/order-tracking"},{label:"Shipping Info",to:"/order-tracking"},{label:"Refund & Returns",to:"/refund-policy"},{label:"Contact Us",to:"/customer-care"},{label:"FAQs",to:"/faqs"}],r=[{label:"About Us",to:"/about-us"},{label:"Our Story",to:"/our-story"},{label:"Blog / Journal",to:"/blog"},{label:"Careers",to:"/careers"},{label:"Store Locator",to:"/stores"}],o=[{label:"Privacy Policy",to:"/privacy-policy"},{label:"Terms & Conditions",to:"/terms-and-conditions"},{label:"Refund Policy",to:"/refund-policy"},{label:"Shipping Policy",to:"/order-tracking"}],i=[{name:"Instagram",url:"https://instagram.com/yourhandle",icon:n.jsx(Np,{size:16})},{name:"Pinterest",url:"https://pinterest.com/yourprofile",icon:n.jsx(Pp,{size:16})},{name:"WhatsApp",url:"https://wa.me/919876543210",icon:n.jsx(zp,{size:16})},{name:"Email",url:"mailto:hello@arke.com",icon:n.jsx(Tp,{size:16})}],a=u=>{u.target.style.color=G.burgundy,u.target.style.transform="translateX(4px)"},s=u=>{u.target.style.color=G.textMuted,u.target.style.transform="translateX(0)"},l=u=>{u.currentTarget.style.color="white",u.currentTarget.style.borderColor=G.rose,u.currentTarget.style.background=`linear-gradient(135deg, ${G.rose}, ${G.burgundy})`,u.currentTarget.style.transform="translateY(-3px)",u.currentTarget.style.boxShadow="0 6px 20px rgba(232, 180, 196, 0.35)"},d=u=>{u.currentTarget.style.color=G.rose,u.currentTarget.style.borderColor=G.rose,u.currentTarget.style.background="transparent",u.currentTarget.style.transform="translateY(0)",u.currentTarget.style.boxShadow="none"},c=u=>{u.preventDefault();const g=u.target.elements.email.value;g&&(alert(`Thank you for subscribing with ${g}! 💌`),u.target.reset())};return n.jsxs("footer",{children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, ${G.rose}, ${G.burgundy});
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .footer-link:hover::after {
          width: 100%;
        }

        .newsletter-input {
          flex: 1;
          background: ${G.blush}15;
          border: 1.5px solid ${G.border};
          color: ${G.text};
          padding: 12px 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          outline: none;
          border-radius: 8px 0 0 8px;
          transition: all 0.3s;
          box-sizing: border-box;
        }
        .newsletter-input:focus {
          border-color: ${G.rose};
          box-shadow: 0 0 0 3px ${G.rose}15;
        }
        .newsletter-input::placeholder {
          color: ${G.textMuted};
          font-size: 11px;
        }
        .newsletter-btn {
          padding: 12px 20px;
          background: linear-gradient(135deg, ${G.rose}, ${G.burgundy});
          color: white;
          border: none;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          font-weight: 700;
          border-radius: 0 8px 8px 0;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          white-space: nowrap;
        }
        .newsletter-btn:hover {
          box-shadow: 0 4px 16px ${G.rose}40;
          transform: translateY(-1px);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .footer-wrapper {
            padding: 50px 20px 30px !important;
          }
          .footer-legal {
            justify-content: flex-start !important;
          }
        }
      `}),n.jsxs("div",{className:"footer-wrapper",style:e.footer,children:[n.jsxs("div",{style:{background:`linear-gradient(135deg, ${G.blush}25, ${G.champagne}18)`,border:`1.5px solid ${G.rose}30`,borderRadius:14,padding:"36px 40px",marginBottom:60,display:"flex",alignItems:"center",justifyContent:"space-between",gap:32,flexWrap:"wrap"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:400,color:G.text,marginBottom:6},children:"✨ Stay in the Loop"}),n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,color:G.textMuted,letterSpacing:"0.3px"},children:"Get early access to new collections, exclusive offers & styling tips."})]}),n.jsxs("form",{onSubmit:c,style:{display:"flex",minWidth:300,flex:"0 1 400px"},children:[n.jsx("input",{type:"email",name:"email",required:!0,placeholder:"Enter your email address",className:"newsletter-input"}),n.jsx("button",{type:"submit",className:"newsletter-btn",children:"Subscribe"})]})]}),n.jsxs("div",{className:"footer-grid",style:e.grid,children:[n.jsxs("div",{children:[n.jsx(Oe,{to:"/",style:{textDecoration:"none"},children:n.jsxs("div",{style:e.brand,children:["ARK",n.jsx("span",{style:e.brandSpan,children:"E"})]})}),n.jsxs("p",{style:e.tagline,children:["✨ Jewellery for everyone.",n.jsx("br",{}),n.jsx("br",{}),"We craft timeless pieces that celebrate elegance and individuality. Each jewel tells a story of meticulous craftsmanship, passion, and attention to detail."]}),n.jsx("div",{style:{...e.socialRow,marginTop:28},children:i.map(u=>n.jsx("a",{href:u.url,target:"_blank",rel:"noopener noreferrer",title:u.name,"aria-label":u.name,style:e.socialLink,onMouseEnter:l,onMouseLeave:d,children:u.icon},u.name))})]}),n.jsx("div",{}),n.jsxs("div",{children:[n.jsx("div",{style:e.colTitle,children:"💬 Support"}),n.jsx("div",{style:e.colLinks,children:t.map(u=>n.jsx(Oe,{to:u.to,className:"footer-link",style:e.colLink,onMouseEnter:a,onMouseLeave:s,children:u.label},u.to+u.label))})]}),n.jsxs("div",{children:[n.jsx("div",{style:e.colTitle,children:"🏛️ Company"}),n.jsx("div",{style:e.colLinks,children:r.map(u=>n.jsx(Oe,{to:u.to,className:"footer-link",style:e.colLink,onMouseEnter:a,onMouseLeave:s,children:u.label},u.to+u.label))})]})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",gap:24,flexWrap:"wrap",marginBottom:40,padding:"28px 0",borderTop:`1px solid ${G.borderLight}`,borderBottom:`1px solid ${G.borderLight}`},children:[{icon:"🔒",label:"Secure Checkout"},{icon:"🚚",label:"Free Shipping 999+"},{icon:"💎",label:"Certified Jewellery"},{icon:"🔄",label:"7-Day Returns"},{icon:"📞",label:"24/7 Support"}].map(u=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"8px 16px",background:`${G.blush}12`,borderRadius:8,border:`1px solid ${G.border}`},children:[n.jsx("span",{style:{fontSize:16},children:u.icon}),n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,fontWeight:600,color:G.textMuted,letterSpacing:"0.5px",textTransform:"uppercase"},children:u.label})]},u.label))}),n.jsxs("div",{className:"footer-bottom",style:e.bottom,children:[n.jsxs("span",{style:e.copy,children:["© ",new Date().getFullYear()," ARKE Jewellery. All Rights Reserved. | Handcrafted with 💕"]}),n.jsx("div",{style:{display:"flex",alignItems:"center",gap:10},children:["💳 Visa","💳 Mastercard","📲 UPI","💵 COD"].map(u=>n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,color:G.textMuted,padding:"4px 10px",background:`${G.blush}10`,borderRadius:4,border:`1px solid ${G.borderLight}`,fontWeight:500,letterSpacing:"0.3px"},children:u},u))})]}),n.jsx("div",{className:"footer-legal",style:{marginTop:"28px",paddingTop:"22px",borderTop:`1px solid ${G.borderLight}`,display:"flex",gap:"28px",flexWrap:"wrap",justifyContent:"center"},children:o.map(u=>n.jsx(Oe,{to:u.to,style:{color:G.textMuted,fontSize:"10px",textDecoration:"none",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.5px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",fontWeight:500,position:"relative",paddingBottom:2},onMouseEnter:g=>{g.target.style.color=G.burgundy,g.target.style.transform="translateY(-1px)"},onMouseLeave:g=>{g.target.style.color=G.textMuted,g.target.style.transform="translateY(0)"},children:u.label},u.to+u.label))}),n.jsx("div",{style:{display:"flex",justifyContent:"center",marginTop:28},children:n.jsx("button",{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),style:{background:"none",border:`1.5px solid ${G.border}`,color:G.textMuted,padding:"10px 24px",fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",cursor:"pointer",borderRadius:8,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",fontWeight:600,display:"flex",alignItems:"center",gap:8},onMouseEnter:u=>{u.currentTarget.style.borderColor=G.rose,u.currentTarget.style.color=G.burgundy,u.currentTarget.style.transform="translateY(-2px)",u.currentTarget.style.boxShadow=`0 4px 16px ${G.rose}20`},onMouseLeave:u=>{u.currentTarget.style.borderColor=G.border,u.currentTarget.style.color=G.textMuted,u.currentTarget.style.transform="translateY(0)",u.currentTarget.style.boxShadow="none"},children:"↑ Back to Top"})})]})]})}const V={surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4"};function Vm({onClose:e}){const{login:t,register:r}=ho(),[o,i]=m.useState("login"),[a,s]=m.useState({name:"",email:"",phone:"",password:""}),[l,d]=m.useState(!1),[c,u]=m.useState(""),[g,f]=m.useState(""),j=w=>x=>s({...a,[w]:x.target.value}),$=async()=>{if(l)return;const w=a.email.trim(),x=a.password,p=a.phone.trim(),h=a.name.trim();if(u(""),f(""),!w||!x){u("Email and password are required.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(w)){u("Please enter a valid email address.");return}if(x.length<6){u("Password must be at least 6 characters.");return}if(o==="register"){if(!h){u("Full name is required.");return}if(!p||p.length<10){u("Please enter a valid mobile number.");return}}d(!0);try{if(o==="login"){const P=await t(w,x);P.ok?(f("Welcome back! 💕"),setTimeout(()=>e(),800)):u(P.msg||"Login failed. Please try again.")}else{const P=await r({name:h,email:w,phone:p,password:x});P.ok?(f("Account created! Welcome to ARKE 💎"),setTimeout(()=>e(),800)):u(P.msg||"Registration failed. Please try again.")}}catch(P){u((P==null?void 0:P.message)||"Something went wrong. Please try again.")}finally{d(!1)}},S={overlay:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(42, 42, 42, 0.7)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},modal:{background:V.surface,border:`1.5px solid ${V.border}`,borderRadius:"12px",width:"100%",maxWidth:"450px",padding:"60px 48px",position:"relative",boxShadow:"0 20px 60px rgba(139, 70, 84, 0.15)",animation:"slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"},close:{position:"absolute",top:"20px",right:"20px",background:"none",border:"none",color:V.textMuted,cursor:"pointer",fontSize:"24px",fontWeight:300,transition:"all 0.3s",padding:"4px 8px",opacity:.6},title:{fontFamily:"'Cormorant Garamond', serif",fontSize:"40px",fontWeight:400,letterSpacing:"3px",color:V.text,marginBottom:"8px",textAlign:"center",background:`linear-gradient(135deg, ${V.text}, ${V.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},sub:{color:V.textMuted,fontSize:"12px",letterSpacing:"1.5px",textTransform:"uppercase",textAlign:"center",marginBottom:"40px",fontFamily:"'Poppins', sans-serif",fontWeight:600},formGroup:{marginBottom:"24px"},label:{display:"block",color:V.text,fontSize:"11px",letterSpacing:"1px",textTransform:"uppercase",marginBottom:"8px",fontFamily:"'Poppins', sans-serif",fontWeight:600},input:{width:"100%",background:`${V.blush}20`,border:`1.5px solid ${V.border}`,borderRadius:"6px",color:V.text,padding:"12px 14px",fontFamily:"'Poppins', sans-serif",fontSize:"13px",outline:"none",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",letterSpacing:"0.3px"},inputFocus:{background:`${V.rose}15`,borderColor:V.rose,boxShadow:`0 0 0 3px ${V.blush}40`},btn:{width:"100%",padding:"14px",background:`linear-gradient(135deg, ${V.rose}, ${V.burgundy})`,color:"white",border:"none",borderRadius:"6px",cursor:l?"wait":"pointer",fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,marginBottom:"20px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:"0 4px 16px rgba(232, 180, 196, 0.3)",opacity:l?.7:1},toggle:{textAlign:"center",color:V.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"12px",fontWeight:500,letterSpacing:"0.3px"},toggleLink:{color:V.rose,cursor:"pointer",background:"none",border:"none",fontFamily:"'Poppins', sans-serif",fontSize:"12px",fontWeight:700,transition:"color 0.3s",textDecoration:"none",padding:0},err:{color:"#d97070",fontSize:"12px",marginBottom:"16px",textAlign:"center",fontFamily:"'Poppins', sans-serif",padding:"12px 12px",background:"rgba(217, 112, 112, 0.08)",borderRadius:"6px",border:"1px solid rgba(217, 112, 112, 0.2)",fontWeight:500},success:{color:V.rose,fontSize:"12px",marginBottom:"16px",textAlign:"center",fontFamily:"'Poppins', sans-serif",padding:"12px 12px",background:"rgba(232, 180, 196, 0.08)",borderRadius:"6px",border:`1px solid ${V.rose}40`,fontWeight:600},divider:{display:"flex",alignItems:"center",gap:"12px",margin:"28px 0"},dividerLine:{flex:1,height:"1px",background:V.border},dividerText:{color:V.textMuted,fontSize:"11px",fontFamily:"'Poppins', sans-serif",textTransform:"uppercase",letterSpacing:"1px",fontWeight:600},socialBtns:{display:"flex",gap:"12px",marginBottom:"20px"},socialBtn:{flex:1,padding:"11px",border:`1.5px solid ${V.border}`,background:"transparent",borderRadius:"6px",cursor:"pointer",fontFamily:"'Poppins', sans-serif",fontSize:"11px",fontWeight:600,letterSpacing:"1px",color:V.text,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"}};return n.jsxs("div",{style:S.overlay,onClick:e,children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        input::placeholder {
          color: ${V.textMuted};
          opacity: 0.6;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px ${V.blush}15 inset !important;
          -webkit-text-fill-color: ${V.text} !important;
          caret-color: ${V.rose};
        }

        @media (max-width: 480px) {
          .auth-modal {
            padding: 48px 32px !important;
            max-width: calc(100% - 40px) !important;
          }
        }
      `}),n.jsxs("div",{style:S.modal,className:"auth-modal",onClick:w=>w.stopPropagation(),children:[n.jsx("button",{style:S.close,onClick:e,onMouseEnter:w=>{w.target.style.opacity="1",w.target.style.color=V.rose},onMouseLeave:w=>{w.target.style.opacity="0.6",w.target.style.color=V.textMuted},children:"✕"}),n.jsxs("div",{style:S.title,children:["ARK",n.jsx("span",{style:{color:V.rose,background:"none",WebkitTextFillColor:"unset"},children:"E"})]}),n.jsx("div",{style:S.sub,children:o==="login"?"✨ Welcome back":"💎 Create your account"}),c&&n.jsxs("div",{style:S.err,children:["⚠️ ",c]}),g&&n.jsxs("div",{style:S.success,children:["✓ ",g]}),n.jsxs("div",{children:[o==="register"&&n.jsxs("div",{style:S.formGroup,children:[n.jsx("label",{style:S.label,children:"Full Name"}),n.jsx("input",{style:S.input,placeholder:"Your full name",value:a.name,onChange:j("name"),onFocus:w=>Object.assign(w.target.style,S.inputFocus),onBlur:w=>{w.target.style.background=`${V.blush}20`,w.target.style.borderColor=V.border,w.target.style.boxShadow="none"},autoComplete:"name"})]}),o==="register"&&n.jsxs("div",{style:S.formGroup,children:[n.jsx("label",{style:S.label,children:"Mobile Number"}),n.jsx("input",{style:S.input,placeholder:"10-digit mobile number",value:a.phone,onChange:j("phone"),onFocus:w=>Object.assign(w.target.style,S.inputFocus),onBlur:w=>{w.target.style.background=`${V.blush}20`,w.target.style.borderColor=V.border,w.target.style.boxShadow="none"},autoComplete:"tel"})]}),n.jsxs("div",{style:S.formGroup,children:[n.jsx("label",{style:S.label,children:"Email Address"}),n.jsx("input",{style:S.input,type:"email",placeholder:"your@email.com",value:a.email,onChange:j("email"),onFocus:w=>Object.assign(w.target.style,S.inputFocus),onBlur:w=>{w.target.style.background=`${V.blush}20`,w.target.style.borderColor=V.border,w.target.style.boxShadow="none"},autoComplete:"email"})]}),n.jsxs("div",{style:S.formGroup,children:[n.jsx("label",{style:S.label,children:"Password"}),n.jsx("input",{style:S.input,type:"password",placeholder:"Minimum 6 characters",value:a.password,onChange:j("password"),onFocus:w=>Object.assign(w.target.style,S.inputFocus),onBlur:w=>{w.target.style.background=`${V.blush}20`,w.target.style.borderColor=V.border,w.target.style.boxShadow="none"},autoComplete:o==="login"?"current-password":"new-password",onKeyDown:w=>w.key==="Enter"&&$()})]}),n.jsx("button",{style:S.btn,onClick:$,disabled:l,onMouseEnter:w=>{l||(w.target.style.transform="translateY(-2px)",w.target.style.boxShadow="0 8px 24px rgba(232, 180, 196, 0.4)")},onMouseLeave:w=>{w.target.style.transform="translateY(0)",w.target.style.boxShadow="0 4px 16px rgba(232, 180, 196, 0.3)"},children:l?n.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[n.jsx("span",{style:{display:"inline-block",width:"4px",height:"4px",borderRadius:"50%",background:"currentColor",animation:"pulse 1.5s infinite"}}),"Please wait..."]}):o==="login"?"Sign In":"Create Account"})]}),n.jsxs("div",{style:S.divider,children:[n.jsx("div",{style:S.dividerLine}),n.jsx("span",{style:S.dividerText,children:"OR"}),n.jsx("div",{style:S.dividerLine})]}),n.jsxs("div",{style:S.socialBtns,children:[n.jsx("button",{style:S.socialBtn,onMouseEnter:w=>{w.target.style.background=`${V.blush}30`,w.target.style.borderColor=V.rose,w.target.style.color=V.burgundy},onMouseLeave:w=>{w.target.style.background="transparent",w.target.style.borderColor=V.border,w.target.style.color=V.text},children:"Google"}),n.jsx("button",{style:S.socialBtn,onMouseEnter:w=>{w.target.style.background=`${V.blush}30`,w.target.style.borderColor=V.rose,w.target.style.color=V.burgundy},onMouseLeave:w=>{w.target.style.background="transparent",w.target.style.borderColor=V.border,w.target.style.color=V.text},children:"Apple"})]}),n.jsxs("div",{style:S.toggle,children:[o==="login"?"New to ARKE? ":"Already have account? ",n.jsx("button",{style:S.toggleLink,onClick:()=>{i(o==="login"?"register":"login"),u(""),f(""),s({name:"",email:"",phone:"",password:""})},onMouseEnter:w=>{w.target.style.color=V.burgundy},onMouseLeave:w=>{w.target.style.color=V.rose},children:o==="login"?"Create account":"Sign in"})]}),n.jsxs("div",{style:{marginTop:"24px",paddingTop:"20px",borderTop:`1px solid ${V.border}`,fontSize:"10px",color:V.textMuted,textAlign:"center",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.3px",lineHeight:1.6},children:["By continuing, you agree to our ",n.jsx("br",{}),n.jsx("button",{style:{background:"none",border:"none",color:V.rose,cursor:"pointer",textDecoration:"underline",fontWeight:600,padding:0},children:"Terms of Service"})," & ",n.jsx("button",{style:{background:"none",border:"none",color:V.rose,cursor:"pointer",textDecoration:"underline",fontWeight:600,padding:0},children:"Privacy Policy"})]})]})]})}const Ep=m.createContext();function Qm({children:e}){const[t,r]=m.useState([]),o=m.useCallback((c,u="info",g=3e3)=>{const f=Date.now(),j={id:f,message:c,type:u};return r($=>[...$,j]),g>0&&setTimeout(()=>{r($=>$.filter(S=>S.id!==f))},g),f},[]),i=m.useCallback(c=>{r(u=>u.filter(g=>g.id!==c))},[]),a=(c,u)=>o(c,"success",u),s=(c,u)=>o(c,"error",u),l=(c,u)=>o(c,"info",u),d=(c,u)=>o(c,"warning",u);return n.jsxs(Ep.Provider,{value:{showToast:o,removeToast:i,success:a,error:s,info:l,warning:d},children:[e,n.jsx(Xm,{toasts:t,onRemove:i})]})}function _r(){const e=vt.useContext(Ep);if(!e)throw new Error("useToast must be used within ToastProvider");return e}function Xm({toasts:e,onRemove:t}){return n.jsx("div",{style:{position:"fixed",top:100,right:20,zIndex:9999,display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:e.map(r=>n.jsx(qm,{toast:r,onRemove:()=>t(r.id)},r.id))})}function qm({toast:e,onRemove:t}){const r={success:{bg:"rgba(79, 195, 247, 0.95)",icon:"✓",color:"#fff"},error:{bg:"rgba(244, 67, 54, 0.95)",icon:"✕",color:"#fff"},info:{bg:"rgba(33, 150, 243, 0.95)",icon:"ℹ",color:"#fff"},warning:{bg:"rgba(255, 152, 0, 0.95)",icon:"⚠",color:"#fff"}},o=r[e.type]||r.info;return n.jsxs("div",{style:{background:o.bg,color:o.color,padding:"14px 18px",borderRadius:6,display:"flex",alignItems:"center",gap:12,boxShadow:"0 4px 12px rgba(0,0,0,0.15)",animation:"slideInRight 0.3s ease-out",fontFamily:"'Jost', sans-serif",fontSize:13},children:[n.jsx("span",{style:{fontSize:16,flexShrink:0},children:o.icon}),n.jsx("span",{style:{flex:1},children:e.message}),n.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"inherit",cursor:"pointer",fontSize:16,padding:0,opacity:.7,transition:"opacity 0.2s"},onMouseEnter:i=>i.target.style.opacity=1,onMouseLeave:i=>i.target.style.opacity=.7,children:"×"}),n.jsx("style",{children:`
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `})]})}const ge={surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",lavender:"#d4c4e0",border:"#e8ddd4"};function hr({product:e}){const t=qe(),{addToCart:r}=bn(),{toggleWishlist:o,isInWishlist:i}=Hi(),{success:a,error:s}=_r(),[l,d]=m.useState(!1),[c,u]=m.useState("idle"),[g,f]=m.useState(!1),[j,$]=m.useState(!1),S=i((e==null?void 0:e._id)||(e==null?void 0:e.id)),w=(e==null?void 0:e.name)||(e==null?void 0:e.title)||"Product",x=(e==null?void 0:e.price)||(e==null?void 0:e.salePrice)||(e==null?void 0:e.mrp)||0,p=(e==null?void 0:e.mrp)||(e==null?void 0:e.originalPrice),h=Mr(e,0),P=Mr(e,1),E=(e==null?void 0:e._id)||(e==null?void 0:e.id),y=p&&p>x?Math.round((p-x)/p*100):0,v=async C=>{if(C.stopPropagation(),!localStorage.getItem("arke_token")){alert("Please login to add to cart");return}if(!(c==="loading"||c==="added")){u("loading");try{await r(e,1),u("added"),a("Added to cart!"),setTimeout(()=>u("idle"),2500)}catch(W){console.error("❌ Add to cart error:",W),s(W.message||"Failed to add to cart"),u("error"),setTimeout(()=>u("idle"),2500)}}},z=async C=>{if(C.stopPropagation(),!localStorage.getItem("arke_token")){s("Please login to save items");return}if(!j){$(!0);try{await o(e),a(S?"Removed from wishlist":"Added to wishlist")}catch(W){console.error("❌ Wishlist error:",W),s(W.message||"Failed to update wishlist")}finally{$(!1)}}},N={idle:{label:"Add to Cart",bg:`linear-gradient(135deg, ${ge.rose}, ${ge.burgundy})`,color:"white"},loading:{label:"Adding…",bg:"rgba(232,180,196,0.6)",color:"white"},added:{label:"✓ Added to Cart",bg:`linear-gradient(135deg, ${ge.rose}, ${ge.burgundy})`,color:"white"},error:{label:"Try Again",bg:"linear-gradient(135deg, #d97070, #c45c5c)",color:"white"}}[c];return n.jsxs("div",{style:{cursor:"pointer",position:"relative",overflow:"hidden",background:ge.surface,border:`1px solid ${ge.border}`,borderRadius:"12px",transition:"all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:l?"0 20px 48px rgba(139, 70, 84, 0.25)":"0 4px 16px rgba(0,0,0,0.08)",transform:l?"translateY(-6px)":"translateY(0)"},onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),onClick:()=>t(`/product/${E}`),children:[n.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .heart-beat {
          animation: pulse 0.4s ease-in-out;
        }
      `}),n.jsxs("div",{style:{position:"relative",overflow:"hidden",aspectRatio:"3/4",background:`linear-gradient(135deg, ${ge.blush}, ${ge.champagne})`},children:[h&&!g?n.jsxs(n.Fragment,{children:[n.jsx("img",{src:h,alt:w,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:l?"scale(1.08)":"scale(1)"},onError:()=>f(!0)}),P&&n.jsx("img",{src:P,alt:`${w} - alternate`,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:l?1:0,transition:"opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"},onError:()=>{}})]}):n.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,background:`linear-gradient(135deg, ${ge.blush}, ${ge.lavender})`},children:[n.jsx("span",{style:{color:"rgba(232,180,196,0.3)",fontSize:48},children:"◇"}),n.jsx("span",{style:{color:ge.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:500},children:"No Image"})]}),n.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(250,248,245,0.95) 0%, rgba(250,248,245,0.5) 45%, transparent 100%)",opacity:l?1:0,transition:"opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"16px",opacity:l?1:0,transition:"opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",pointerEvents:l?"auto":"none"},children:n.jsx("button",{onClick:v,disabled:c==="loading",style:{width:"100%",padding:"12px 0",background:N.bg,color:N.color,border:"none",cursor:c==="loading"?"not-allowed":"pointer",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.2px",textTransform:"uppercase",fontWeight:600,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px",boxShadow:c==="added"?"0 4px 12px rgba(232,180,196,0.35)":"0 2px 8px rgba(232,180,196,0.2)"},onMouseEnter:C=>{c!=="loading"&&(C.target.style.transform="translateY(-2px)")},onMouseLeave:C=>{C.target.style.transform="translateY(0)"},children:N.label})}),y>0&&n.jsxs("div",{style:{position:"absolute",top:12,left:12,background:`linear-gradient(135deg, ${ge.rose}, ${ge.burgundy})`,color:"white",fontFamily:"'Poppins', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.5px",padding:"6px 11px",borderRadius:"6px",boxShadow:"0 4px 12px rgba(139, 70, 84, 0.3)",zIndex:2},children:[y,"% OFF"]}),n.jsx("button",{onClick:z,disabled:j,className:S?"heart-beat":"",style:{position:"absolute",top:12,right:12,background:S?`linear-gradient(135deg, ${ge.rose}, ${ge.burgundy})`:"rgba(250,248,245,0.8)",backdropFilter:"blur(12px)",border:S?"none":`1.5px solid ${ge.rose}`,color:S?"white":ge.rose,width:38,height:38,borderRadius:"50%",cursor:j?"not-allowed":"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",opacity:j?.6:l?1:.9,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",zIndex:2,boxShadow:S?"0 4px 12px rgba(232,180,196,0.35)":"none"},onMouseEnter:C=>{!S&&!j&&(C.target.style.background="rgba(250,248,245,0.95)",C.target.style.borderColor=ge.burgundy,C.target.style.color=ge.burgundy)},onMouseLeave:C=>{S||(C.target.style.background="rgba(250,248,245,0.8)",C.target.style.borderColor=ge.rose,C.target.style.color=ge.rose)},children:j?"...":S?"♥":"♡"})]}),n.jsxs("div",{style:{padding:"16px 14px 18px",background:ge.surface},children:[n.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:16,fontWeight:400,color:ge.text,letterSpacing:"0.5px",marginBottom:10,lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",transition:"color 0.3s"},title:w,children:w}),n.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"},children:[n.jsxs("span",{style:{color:ge.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:14,fontWeight:700,letterSpacing:"0.3px"},children:["₹",Number(x).toLocaleString("en-IN")]}),p&&p>x&&n.jsxs("span",{style:{color:ge.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:12,textDecoration:"line-through",fontWeight:500,opacity:.7},children:["₹",Number(p).toLocaleString("en-IN")]})]}),(e==null?void 0:e.stock)!==void 0&&n.jsx("div",{style:{marginTop:8,fontSize:10,fontFamily:"'Poppins', sans-serif",color:(e==null?void 0:e.stock)>0?ge.rose:"#d97070",fontWeight:600,letterSpacing:"0.5px"},children:(e==null?void 0:e.stock)>0?"✓ In Stock":"Out of Stock"})]}),n.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:l?.8:0,pointerEvents:"none",transition:"opacity 0.3s",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(4px)",padding:"8px 16px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:11,color:"white",fontWeight:600,letterSpacing:"1px",textTransform:"uppercase",zIndex:1},children:"Quick View"})]})}const I={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",roseGold:"#c78a7f",champagne:"#e8d4c2",lavender:"#d4c4e0",border:"#e8ddd4",borderLight:"#f0ebe5"},Km=`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

  @keyframes heroBgZoom {
    0%   { transform: scale(1.08); }
    100% { transform: scale(1.0); }
  }

  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes heroFadeLeft {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }

  @keyframes scrollBounce {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(8px); }
  }

  @keyframes scrollLineGrow {
    0%, 100% { transform: scaleY(1); opacity: 0.5; }
    50%       { transform: scaleY(1.2); opacity: 1; }
  }

  @keyframes floatUp {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-12px); }
  }

  @keyframes floatDown {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(12px); }
  }

  @keyframes floatLeftRight {
    0%, 100% { transform: translateX(0px); }
    50% { transform: translateX(8px); }
  }

  @keyframes shimmer {
    0% { background-position: -1000% 0; }
    100% { background-position: 1000% 0; }
  }

  @keyframes glowPulse {
    0%, 100% { box-shadow: 0 0 10px rgba(232,180,196,0.3); }
    50% { box-shadow: 0 0 25px rgba(232,180,196,0.6); }
  }

  @keyframes softGlow {
    0%, 100% {
      box-shadow: 0 8px 24px rgba(232,180,196,0.15), inset 0 1px 0 rgba(255,255,255,0.5);
    }
    50% {
      box-shadow: 0 12px 32px rgba(232,180,196,0.25), inset 0 1px 0 rgba(255,255,255,0.7);
    }
  }

  @keyframes staggerFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes slideIndicatorPulse {
    0%, 100% { transform: scaleY(1); }
    50% { transform: scaleY(1.2); }
  }

  @keyframes gradientShift {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  @keyframes counterPop {
    0% { transform: scale(0.8); opacity: 0; }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
  }

  @keyframes cardEntrance {
    from { opacity: 0; transform: translateY(24px) scale(0.95); }
    to { opacity: 1; transform: translateY(0) scale(1); }
  }

  @keyframes ripple {
    0% { transform: scale(0); opacity: 1; }
    100% { transform: scale(4); opacity: 0; }
  }

  html { scroll-behavior: smooth; }

  .float-animation { animation: floatUp 3s ease-in-out infinite; }

  .glow-on-hover { transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); }
  .glow-on-hover:hover { animation: softGlow 1.5s ease-in-out; }

  .hero-bg-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    transition: opacity 0.7s ease;
  }

  @media (max-width: 768px) {
    .hero-content-wrap { padding: 0 28px !important; max-width: 100% !important; }
    .hero-h1-text { font-size: clamp(44px, 11vw, 72px) !important; }
    .hero-stats-row { gap: 28px !important; flex-wrap: wrap !important; }
    .hero-cta-row { flex-direction: column !important; align-items: flex-start !important; }
  }

  @media (max-width: 480px) {
    .hero-content-wrap { padding: 0 20px !important; }
  }

  @media (prefers-reduced-motion: reduce) {
    * { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; }
  }
`;function Jm(){const e=xr();m.useEffect(()=>{window.scrollTo(0,0)},[e.pathname])}function wn(){const e=m.useRef(null),[t,r]=m.useState(!1);return m.useEffect(()=>{const o=setTimeout(()=>r(!0),200),i=new IntersectionObserver(([a])=>{a.isIntersecting&&(r(!0),clearTimeout(o),i.disconnect())},{threshold:.12});return e.current&&i.observe(e.current),()=>{clearTimeout(o),i.disconnect()}},[]),[e,t]}function Zm({target:e,duration:t=2e3,label:r}){const[o,i]=m.useState(0),a=m.useRef(null),s=m.useRef(!1);return m.useEffect(()=>{const l=new IntersectionObserver(([d])=>{if(d.isIntersecting&&!s.current){s.current=!0;const c=parseFloat(e),u=e.includes("."),g=c/(t/16);let f=0;const j=setInterval(()=>{f+=g,f>=c?(i(c),clearInterval(j)):i(u?parseFloat(f.toFixed(1)):Math.floor(f))},16);return()=>clearInterval(j)}},{threshold:.5});return a.current&&l.observe(a.current),()=>l.disconnect()},[e,t]),n.jsx("div",{ref:a,children:typeof o=="number"&&e.includes(".")?o.toFixed(1):o.toLocaleString()})}function ex({banners:e}){const[t,r]=m.useState(0),[o,i]=m.useState(!0),[a,s]=m.useState(0);m.useEffect(()=>{const c=()=>s(window.scrollY*.3);return window.addEventListener("scroll",c,{passive:!0}),()=>window.removeEventListener("scroll",c)},[]),m.useEffect(()=>{if(!(e!=null&&e.length))return;const c=setInterval(()=>{i(!1),setTimeout(()=>{r(u=>(u+1)%e.length),i(!0)},700)},6500);return()=>clearInterval(c)},[e]);const l=e==null?void 0:e[t],d=Fe((l==null?void 0:l.image)||(l==null?void 0:l.imageUrl));return n.jsxs("section",{style:{position:"relative",height:"100vh",minHeight:680,maxHeight:1080,display:"flex",alignItems:"center",overflow:"hidden",marginTop:30},children:[n.jsx("style",{children:Km}),n.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",zIndex:0},children:d?n.jsx("img",{src:d,alt:(l==null?void 0:l.title)||"Collection",className:"hero-bg-img",style:{opacity:o?1:0,transform:`translateY(${a}px)`,animation:"heroBgZoom 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"}},t):n.jsx("div",{style:{position:"absolute",inset:0,background:`linear-gradient(135deg, ${I.blush} 0%, ${I.champagne} 40%, ${I.lavender} 100%)`}})}),n.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,background:"linear-gradient(105deg, rgba(10,5,15,0.72) 0%, rgba(10,5,15,0.55) 38%, rgba(10,5,15,0.18) 65%, transparent 100%)"}}),n.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,background:"linear-gradient(to top, rgba(10,5,15,0.55) 0%, transparent 40%)"}}),n.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"35%",zIndex:1,background:"linear-gradient(to top, rgba(139,70,84,0.22) 0%, transparent 100%)"}}),n.jsx("div",{style:{position:"absolute",left:52,top:"15%",bottom:"15%",width:1,background:"linear-gradient(to bottom, transparent, rgba(232,180,196,0.55) 30%, rgba(232,180,196,0.55) 70%, transparent)",zIndex:2,animation:"floatUp 4s ease-in-out infinite"}}),n.jsxs("div",{className:"hero-content-wrap",style:{position:"relative",zIndex:3,padding:"0 80px 0 84px",maxWidth:720,width:"100%"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:26,animation:"heroFadeLeft 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.2s forwards",opacity:0},children:[n.jsx("div",{style:{width:36,height:1.5,background:`linear-gradient(to right, ${I.rose}, ${I.burgundy})`,borderRadius:2}}),n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10.5,letterSpacing:"3px",textTransform:"uppercase",color:I.rose,fontWeight:600},children:(l==null?void 0:l.eyebrow)||"Timeless Collection"})]}),n.jsx("h1",{className:"hero-h1 hero-h1-text",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(52px, 6.5vw, 100px)",fontWeight:300,lineHeight:1,letterSpacing:"-1px",marginBottom:28,color:"#fff",animation:"heroFadeUp 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.4s forwards",opacity:0},children:l!=null&&l.title?n.jsx("span",{style:{background:"linear-gradient(135deg, #fff 0%, rgba(232,180,196,0.9) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:l.title}):n.jsxs(n.Fragment,{children:[n.jsx("span",{style:{display:"block",background:"linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.85) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Wear it"}),n.jsx("em",{style:{fontStyle:"italic",display:"block",background:`linear-gradient(135deg, ${I.rose} 0%, ${I.blush} 50%, ${I.champagne} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"your way"})]})}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:26,animation:"heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.55s forwards",opacity:0},children:[n.jsx("div",{style:{width:52,height:1,background:"linear-gradient(to right, rgba(232,180,196,0.8), transparent)"}}),n.jsx("div",{style:{width:5,height:5,background:I.rose,borderRadius:"50%",boxShadow:"0 0 10px rgba(232,180,196,0.6)",animation:"glowPulse 2s ease-in-out infinite"}}),n.jsx("div",{style:{width:52,height:1,background:"linear-gradient(to left, rgba(232,180,196,0.8), transparent)"}})]}),n.jsx("p",{style:{color:"rgba(255,255,255,0.72)",fontFamily:"'Poppins', sans-serif",fontSize:14.5,lineHeight:1.85,marginBottom:44,maxWidth:480,letterSpacing:"0.3px",fontWeight:300,animation:"heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.65s forwards",opacity:0},children:(l==null?void 0:l.description)||"Handcrafted luxury jewellery for every moment. Waterproof, tarnish-proof, and ethically sourced."}),n.jsxs("div",{className:"hero-cta-row",style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap",animation:"heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.75s forwards",opacity:0},children:[n.jsx(Od,{to:"/new-collection",primary:!0,children:"Explore Now"}),n.jsx(Od,{to:"/products",children:"Shop All"})]}),n.jsx("div",{className:"hero-stats-row",style:{display:"flex",gap:40,marginTop:52,paddingTop:28,borderTop:"1px solid rgba(232,180,196,0.2)",animation:"heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.9s forwards",opacity:0},children:[["2000","Designs"],["50000","Customers"],["4.9","Rating"]].map(([c,u])=>n.jsxs("div",{children:[n.jsxs("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:30,fontWeight:400,background:`linear-gradient(135deg, ${I.rose}, ${I.champagne})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",lineHeight:1},children:[n.jsx(Zm,{target:c,duration:2e3,label:u}),u==="Rating"?"★":"+"]}),n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9.5,letterSpacing:"1.8px",textTransform:"uppercase",color:"rgba(255,255,255,0.45)",marginTop:7,fontWeight:500},children:u})]},u))})]},t),n.jsxs("div",{style:{position:"absolute",right:72,top:"50%",transform:"translateY(-50%)",zIndex:3,display:"flex",flexDirection:"column",alignItems:"center",gap:16,opacity:.85,animation:"floatLeftRight 4s ease-in-out infinite"},children:[n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,letterSpacing:"3px",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",writingMode:"vertical-rl",transform:"rotate(180deg)"},children:(l==null?void 0:l.tag)||"New Arrivals"}),n.jsx("div",{style:{width:1,height:64,background:"linear-gradient(to bottom, transparent, rgba(232,180,196,0.4))"}})]}),(e==null?void 0:e.length)>1&&n.jsx("div",{style:{position:"absolute",bottom:44,left:"50%",transform:"translateX(-50%)",display:"flex",gap:10,zIndex:4,alignItems:"center"},children:e.map((c,u)=>n.jsx("button",{onClick:()=>{i(!1),setTimeout(()=>{r(u),i(!0)},300)},style:{width:u===t?32:8,height:2.5,background:u===t?`linear-gradient(90deg, ${I.rose}, ${I.champagne})`:"rgba(255,255,255,0.25)",border:"none",cursor:"pointer",transition:"all 0.45s cubic-bezier(0.34,1.56,0.64,1)",borderRadius:4,padding:0,animation:u===t?"slideIndicatorPulse 2s ease-in-out infinite":"none"},onMouseEnter:g=>{u!==t&&(g.target.style.background="rgba(255,255,255,0.4)")},onMouseLeave:g=>{u!==t&&(g.target.style.background="rgba(255,255,255,0.25)")}},u))}),n.jsxs("div",{style:{position:"absolute",bottom:36,left:84,zIndex:4,display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:8.5,letterSpacing:"2.5px",color:"rgba(255,255,255,0.35)",textTransform:"uppercase",writingMode:"vertical-rl",transform:"rotate(180deg)"},children:"Scroll"}),n.jsx("div",{style:{width:1,height:48,background:"linear-gradient(to bottom, rgba(232,180,196,0.9), transparent)",animation:"scrollLineGrow 2s ease-in-out infinite",borderRadius:2,transformOrigin:"top center"}}),n.jsx("div",{style:{color:I.rose,fontSize:16,lineHeight:1,animation:"scrollBounce 1.8s ease-in-out infinite",filter:"drop-shadow(0 0 6px rgba(232,180,196,0.8))"},children:"↓"})]}),(e==null?void 0:e.length)>1&&n.jsxs("div",{style:{position:"absolute",bottom:44,right:72,zIndex:4,display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:400,color:I.rose,lineHeight:1},children:String(t+1).padStart(2,"0")}),n.jsxs("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,color:"rgba(255,255,255,0.25)",letterSpacing:"1px"},children:["/ ",String(e.length).padStart(2,"0")]})]})]})}function Od({to:e,children:t,primary:r}){const[o,i]=m.useState(!1),[a,s]=m.useState({x:0,y:0}),l=m.useRef(null),d=c=>{var g;if(!r)return;const u=(g=l.current)==null?void 0:g.getBoundingClientRect();if(u){const f=c.clientX-u.left-u.width/2,j=c.clientY-u.top-u.height/2;s({x:f*.2,y:j*.2})}};return n.jsxs(Oe,{ref:l,to:e,onMouseEnter:()=>i(!0),onMouseLeave:()=>{i(!1),s({x:0,y:0})},onMouseMove:d,style:{display:"inline-flex",alignItems:"center",gap:10,padding:r?"15px 36px":"14px 30px",background:r?o?`linear-gradient(135deg, ${I.burgundy}, #a85060)`:`linear-gradient(135deg, ${I.rose}, ${I.roseGold})`:"rgba(255,255,255,0.08)",color:r||o?"#fff":"rgba(255,255,255,0.75)",border:r?"none":`1px solid ${o?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)"}`,backdropFilter:r?"none":"blur(12px)",textDecoration:"none",fontFamily:"'Poppins', sans-serif",fontSize:10.5,letterSpacing:"2px",textTransform:"uppercase",fontWeight:r?600:500,transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",transform:o?`translateY(-3px) translate(${a.x}px, ${a.y}px)`:"translateY(0)",boxShadow:r&&o?"0 12px 32px rgba(232,180,196,0.45)":r?"0 4px 16px rgba(232,180,196,0.25)":"none",cursor:"pointer",borderRadius:"2px"},children:[r&&n.jsx("span",{style:{fontSize:12,opacity:.9},children:"✦"}),t,r&&n.jsx("span",{style:{fontSize:13},children:"→"})]})}function tx(){const[e,t]=wn(),r=[{icon:"💎",label:"Premium Quality",sub:"Certified & Pure"},{icon:"💧",label:"Waterproof",sub:"Everyday Wear"},{icon:"✨",label:"Tarnish-Proof",sub:"Lasts 2+ Years"},{icon:"🌍",label:"Ethical",sub:"Responsibly Sourced"}];return n.jsx("div",{ref:e,style:{background:I.surface,borderTop:`1px solid ${I.border}`,borderBottom:`1px solid ${I.border}`,padding:"52px 80px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:32,opacity:t?1:0,transform:t?"none":"translateY(20px)",transition:"opacity 0.7s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1)"},children:r.map((o,i)=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"0 16px",animation:t?`staggerFadeUp 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i*80}ms backwards`:"none"},children:[n.jsx("div",{style:{fontSize:32,marginBottom:14,animation:"floatUp 3s ease-in-out infinite"},children:o.icon}),n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,letterSpacing:"1px",textTransform:"uppercase",color:I.text,fontWeight:600,marginBottom:6},children:o.label}),n.jsx("div",{style:{color:I.textMuted,fontSize:12,fontFamily:"'Poppins', sans-serif",fontWeight:400},children:o.sub})]},i))})}function yl({eyebrow:e,title:t,cta:r,ctaLink:o}){return n.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:52,flexWrap:"wrap",gap:24,animation:"staggerFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[n.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(to right, ${I.rose}, ${I.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:I.burgundy,fontWeight:600},children:e})]}),n.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 4vw, 52px)",fontWeight:300,color:I.text,letterSpacing:"-0.5px",lineHeight:1.1,background:`linear-gradient(135deg, ${I.text}, ${I.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:t})]}),r&&n.jsx(Ip,{to:o,children:r})]})}function Ip({to:e,children:t}){const[r,o]=m.useState(!1);return n.jsxs(Oe,{to:e,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:r?I.burgundy:I.rose,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,paddingBottom:2,borderBottom:`1.5px solid ${r?I.burgundy:I.rose}`,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",fontWeight:600},children:[t," →"]})}function rx({cats:e}){const[t,r]=wn(),o=qe();return e!=null&&e.length?n.jsxs("section",{ref:t,style:{padding:"100px 80px",background:I.surface,opacity:r?1:0,transform:r?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsx(yl,{eyebrow:"Explore",title:"Shop by Category",cta:"View All",ctaLink:"/products"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(e.length,5)}, 1fr)`,gap:20},children:e.slice(0,5).map((i,a)=>{const s=ji(i),l=wp(i),d=hl(i);return n.jsx(nx,{name:s,img:l,delay:a*80,onClick:()=>d&&o(`/products?category=${d}`)},a)})})]}):null}function nx({name:e,img:t,onClick:r,delay:o}){const[i,a]=m.useState(!1);return n.jsxs("div",{onClick:r,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),style:{position:"relative",cursor:"pointer",overflow:"hidden",aspectRatio:"2/3",borderRadius:"8px",transform:i?"translateY(-8px) scale(1.01)":"translateY(0) scale(1)",boxShadow:i?"0 24px 48px rgba(139,70,84,0.25), inset 0 1px 0 rgba(255,255,255,0.3)":"0 8px 20px rgba(0,0,0,0.08)",transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",transitionDelay:`${o}ms`,animation:`cardEntrance 0.6s cubic-bezier(0.34,1.56,0.64,1) ${o}ms backwards`},children:[t?n.jsx("img",{src:t,alt:e,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",transform:i?"scale(1.1)":"scale(1)"}}):n.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${I.blush}, ${I.champagne})`}}),n.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(250,248,245,0.95) 0%, rgba(250,248,245,0.5) 50%, transparent 100%)",transition:"background 0.4s"}}),n.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"28px 20px"},children:[n.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:400,color:I.text,letterSpacing:1,marginBottom:10},children:e}),n.jsx("div",{style:{width:i?52:24,height:2,background:`linear-gradient(90deg, ${I.rose}, ${I.burgundy})`,transition:"width 0.4s cubic-bezier(0.34,1.56,0.64,1)",borderRadius:1}})]}),n.jsx("div",{style:{position:"absolute",top:16,right:16,background:"rgba(232,180,196,0.9)",backdropFilter:"blur(12px)",padding:"8px 14px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:9,fontWeight:700,letterSpacing:"1.2px",textTransform:"uppercase",color:I.text,opacity:i?1:.7,transform:i?"scale(1.05)":"scale(1)",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},children:"Shop ↗"})]})}function Hd({eyebrow:e,title:t,products:r,ctaLink:o,bg:i}){const[a,s]=wn();return r!=null&&r.length?n.jsxs("section",{ref:a,style:{padding:"100px 80px",background:i||I.bg,opacity:s?1:0,transform:s?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsx(yl,{eyebrow:e,title:t,cta:"View All",ctaLink:o}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:24},children:r.slice(0,4).map((l,d)=>n.jsx("div",{style:{animation:`cardEntrance 0.6s cubic-bezier(0.34,1.56,0.64,1) ${d*100}ms backwards`},children:n.jsx(hr,{product:l})},l._id||d))})]}):null}function ox({blogs:e}){const[t,r]=wn(),o=qe();return e!=null&&e.length?n.jsxs("section",{ref:t,style:{padding:"120px 80px",background:I.surface,borderTop:`1.5px solid ${I.border}`,borderBottom:`1.5px solid ${I.border}`,opacity:r?1:0,transform:r?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsx("style",{children:`
        @keyframes blogFadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        .featured-blog { animation: blogFadeUp 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.15s both; }
        .side-blog { animation: blogFadeUp 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .compact-blog { animation: blogFadeUp 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: 1fr; gap: 32px; } }
      `}),n.jsxs("div",{style:{marginBottom:80},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[n.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(to right, ${I.rose}, ${I.burgundy})`,borderRadius:2}}),n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10.5,letterSpacing:"2.5px",textTransform:"uppercase",color:I.burgundy,fontWeight:600},children:"Stories & Inspiration"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:40,flexWrap:"wrap"},children:[n.jsxs("div",{style:{maxWidth:480},children:[n.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(36px, 4vw, 56px)",fontWeight:300,letterSpacing:"-0.5px",lineHeight:1.1,marginBottom:20,background:`linear-gradient(135deg, ${I.text}, ${I.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"From the Journal"}),n.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13.5,color:I.textMuted,lineHeight:1.8,letterSpacing:"0.3px"},children:"Explore stories about craftsmanship, styling tips, and the art of wearing jewellery with confidence."})]}),n.jsx(Ip,{to:"/blog",children:"All Stories"})]})]}),n.jsxs("div",{className:"blog-grid",style:{display:"grid",gridTemplateColumns:"1.6fr 1fr",gap:48,alignItems:"start"},children:[e[0]&&n.jsx(ix,{blog:e[0],onClick:()=>o("/blog")}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:e.slice(1,4).map((i,a)=>n.jsx(ax,{blog:i,delay:a*100,onClick:()=>o("/blog")},a))})]}),e.length>4&&n.jsxs("div",{style:{marginTop:80,paddingTop:60,borderTop:`1px solid ${I.borderLight}`},children:[n.jsx("h3",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,letterSpacing:"1.8px",textTransform:"uppercase",color:I.textMuted,fontWeight:600,marginBottom:40},children:"More Stories"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:32},children:e.slice(4,7).map((i,a)=>n.jsx(sx,{blog:i,delay:a*80,onClick:()=>o("/blog")},a))})]})]}):null}function ix({blog:e,onClick:t}){var s;const[r,o]=m.useState(!1),i=Fe(e.image||e.thumbnail||e.featuredImage),a=e.readTime||Math.ceil((((s=e.content)==null?void 0:s.length)||0)/200);return n.jsxs("div",{onClick:t,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),className:"featured-blog glow-on-hover",style:{cursor:"pointer",overflow:"hidden",borderRadius:"12px",position:"relative",height:"100%",display:"flex",flexDirection:"column",transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",transform:r?"translateY(-8px)":"translateY(0)"},children:[n.jsxs("div",{style:{position:"relative",aspectRatio:"4/3",overflow:"hidden",marginBottom:32,borderRadius:"8px",boxShadow:r?"0 24px 48px rgba(139,70,84,0.25)":"0 12px 28px rgba(139,70,84,0.12)",transition:"box-shadow 0.4s"},children:[i?n.jsx("img",{src:i,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.7s cubic-bezier(0.34,1.56,0.64,1)",transform:r?"scale(1.08)":"scale(1)"}}):n.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${I.blush}, ${I.lavender})`}}),n.jsxs("div",{style:{position:"absolute",top:20,left:20,background:"rgba(232,180,196,0.95)",backdropFilter:"blur(12px)",padding:"8px 16px",borderRadius:"24px",fontFamily:"'Poppins', sans-serif",fontSize:9,fontWeight:700,letterSpacing:"1.2px",textTransform:"uppercase",color:I.text,display:"flex",alignItems:"center",gap:6,zIndex:10},children:[n.jsx("span",{children:"✦"}),"Featured"]}),n.jsxs("div",{style:{position:"absolute",bottom:20,right:20,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(12px)",padding:"8px 14px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:8,fontWeight:600,color:I.text},children:[a," min read"]})]}),n.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[n.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:400,color:r?I.burgundy:I.text,lineHeight:1.4,marginBottom:16,transition:"color 0.3s"},children:e.title}),e.excerpt&&n.jsx("p",{style:{color:I.textMuted,fontSize:13,fontFamily:"'Poppins', sans-serif",lineHeight:1.8,marginBottom:24,fontWeight:400,flex:1},children:e.excerpt.length>140?e.excerpt.slice(0,140)+"...":e.excerpt}),n.jsx("div",{style:{display:"flex",alignItems:"center",paddingTop:16,borderTop:`1px solid ${I.borderLight}`},children:e.author&&n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:`linear-gradient(135deg, ${I.rose}, ${I.burgundy})`,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:12,fontWeight:700},children:e.author.charAt(0).toUpperCase()}),n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,fontWeight:600,color:I.text},children:e.author}),n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,color:I.textMuted},children:e.date||e.createdAt?new Date(e.date||e.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""})]})]})})]})]})}function ax({blog:e,onClick:t,delay:r}){const[o,i]=m.useState(!1),a=Fe(e.image||e.thumbnail||e.featuredImage);return n.jsxs("div",{onClick:t,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"side-blog glow-on-hover",style:{cursor:"pointer",display:"grid",gridTemplateColumns:"120px 1fr",gap:16,padding:16,background:I.bg,borderRadius:"8px",border:`1px solid ${I.borderLight}`,transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",transform:o?"translateX(6px)":"translateX(0)",animationDelay:`${r}ms`},children:[n.jsx("div",{style:{aspectRatio:"1",overflow:"hidden",borderRadius:"6px",flexShrink:0},children:a?n.jsx("img",{src:a,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",transform:o?"scale(1.1)":"scale(1)"}}):n.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${I.blush}, ${I.champagne})`}})}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:120},children:[n.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:16,fontWeight:400,color:o?I.burgundy:I.text,lineHeight:1.3,marginBottom:8,transition:"color 0.3s"},children:e.title.length>50?e.title.slice(0,50)+"...":e.title}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:10},children:[n.jsx("span",{style:{color:I.textMuted,fontFamily:"'Poppins', sans-serif"},children:e.date||e.createdAt?new Date(e.date||e.createdAt).toLocaleDateString("en-IN",{month:"short",day:"numeric"}):""}),n.jsx("span",{style:{color:I.rose,fontWeight:600},children:"→"})]})]})]})}function sx({blog:e,onClick:t,delay:r}){const[o,i]=m.useState(!1),a=Fe(e.image||e.thumbnail||e.featuredImage);return n.jsxs("div",{onClick:t,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"compact-blog glow-on-hover",style:{cursor:"pointer",transition:"transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",transform:o?"translateY(-6px)":"translateY(0)",animationDelay:`${r}ms`},children:[n.jsxs("div",{style:{overflow:"hidden",aspectRatio:"16/10",marginBottom:20,position:"relative",borderRadius:"8px",boxShadow:o?"0 16px 32px rgba(139,70,84,0.2)":"0 8px 16px rgba(139,70,84,0.08)",transition:"box-shadow 0.4s"},children:[a?n.jsx("img",{src:a,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",transform:o?"scale(1.07)":"scale(1)"}}):n.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${I.blush}, ${I.lavender})`}}),n.jsx("div",{style:{position:"absolute",bottom:12,left:12,background:"rgba(232,180,196,0.9)",backdropFilter:"blur(12px)",padding:"6px 12px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:8,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:I.text},children:e.category||"Jewellery"})]}),n.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,fontWeight:400,color:o?I.burgundy:I.text,lineHeight:1.4,marginBottom:12,transition:"color 0.3s"},children:e.title}),e.excerpt&&n.jsxs("p",{style:{color:I.textMuted,fontSize:12,fontFamily:"'Poppins', sans-serif",lineHeight:1.6,marginBottom:16,fontWeight:400,minHeight:36},children:[e.excerpt.slice(0,80),"..."]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:12,borderTop:`1px solid ${I.borderLight}`},children:[n.jsx("span",{style:{color:I.textMuted,fontSize:10,fontFamily:"'Poppins', sans-serif",fontWeight:500},children:e.date||e.createdAt?new Date(e.date||e.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short"}):""}),n.jsx("span",{style:{color:I.rose,fontSize:10,fontFamily:"'Poppins', sans-serif",letterSpacing:"1px",textTransform:"uppercase",fontWeight:700},children:"Read →"})]})]})}function lx(){const[e,t]=wn(),[r,o]=m.useState(""),[i,a]=m.useState(!1),[s,l]=m.useState(!1),d=async()=>{if(!r||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){alert("Please enter a valid email");return}l(!0);try{await new Promise(c=>setTimeout(c,500)),a(!0),o(""),setTimeout(()=>a(!1),4e3)}catch(c){console.error(c)}finally{l(!1)}};return n.jsx("section",{ref:e,style:{padding:"80px 40px",background:I.bg,borderTop:`1px solid ${I.border}`,opacity:t?1:0,transform:t?"none":"translateY(24px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:n.jsxs("div",{style:{maxWidth:600,margin:"0 auto",textAlign:"center"},children:[n.jsx("div",{style:{display:"inline-block",marginBottom:20,animation:"floatUp 3s ease-in-out infinite"},children:n.jsx("span",{style:{color:I.rose,fontSize:28},children:"✨"})}),n.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(28px, 3.5vw, 48px)",fontWeight:300,marginBottom:14,lineHeight:1.2,background:`linear-gradient(135deg, ${I.text}, ${I.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Stay in the Loop"}),n.jsx("p",{style:{color:I.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:14,marginBottom:36,lineHeight:1.7},children:"Get exclusive access to new collections, style tips, and special offers. Join our community of elegant jewellery lovers."}),i?n.jsx("div",{style:{padding:"16px",background:"linear-gradient(135deg, rgba(232,180,196,0.1), rgba(139,70,84,0.08))",borderRadius:"6px",border:`1px solid ${I.rose}`,color:I.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:13,fontWeight:600,animation:"cardEntrance 0.4s cubic-bezier(0.34,1.56,0.64,1)"},children:"✓ Welcome! Check your email for exclusive offers."}):n.jsxs("div",{style:{display:"flex",maxWidth:450,margin:"0 auto",boxShadow:"0 8px 24px rgba(139,70,84,0.15)",borderRadius:"6px",overflow:"hidden"},children:[n.jsx("input",{type:"email",placeholder:"your@email.com",value:r,onChange:c=>o(c.target.value),onKeyPress:c=>c.key==="Enter"&&d(),style:{flex:1,padding:"14px 20px",background:I.surface,border:"none",color:I.text,fontFamily:"'Poppins', sans-serif",fontSize:12,outline:"none",letterSpacing:"0.5px"}}),n.jsx("button",{onClick:d,disabled:s,style:{padding:"14px 28px",background:`linear-gradient(135deg, ${I.rose}, ${I.burgundy})`,border:"none",color:"white",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,cursor:s?"not-allowed":"pointer",opacity:s?.7:1,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:c=>{s||(c.target.style.transform="translateY(-2px)",c.target.style.boxShadow="0 12px 32px rgba(232,180,196,0.35)")},onMouseLeave:c=>{c.target.style.transform="translateY(0)",c.target.style.boxShadow="none"},children:s?"...":"Subscribe"})]}),n.jsx("p",{style:{color:I.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,marginTop:16,letterSpacing:"0.5px"},children:"We respect your privacy. Unsubscribe anytime."})]})})}function dx({products:e}){const[t,r]=wn();return e!=null&&e.length?n.jsxs("section",{ref:t,style:{padding:"100px 80px",background:I.bg,opacity:r?1:0,transform:r?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsx(yl,{eyebrow:"Complete Collection",title:"All Products",cta:"Explore More",ctaLink:"/products"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:24},children:e.slice(0,12).map((o,i)=>n.jsx("div",{style:{animation:`cardEntrance 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i%4*100}ms backwards`},children:n.jsx(hr,{product:o})},o._id||i))})]}):null}function cx(){return n.jsxs("div",{style:{background:I.bg,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:24},children:[n.jsx("style",{children:"@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .loader { animation: spin 1s linear infinite; }"}),n.jsx("div",{className:"loader",style:{width:48,height:48,border:`2px solid ${I.borderLight}`,borderTopColor:I.rose,borderRadius:"50%"}}),n.jsx("div",{style:{color:I.textMuted,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",fontFamily:"'Poppins', sans-serif",fontWeight:600},children:"Curating Your Experience..."})]})}function ux({error:e,onRetry:t}){return n.jsxs("div",{style:{background:I.bg,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:40,textAlign:"center"},children:[n.jsx("div",{style:{color:I.rose,fontSize:56,marginBottom:24,animation:"floatUp 2s ease-in-out infinite"},children:"✨"}),n.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:36,fontWeight:300,color:I.text,marginBottom:16},children:"Oops, Something Went Wrong"}),n.jsx("p",{style:{color:I.textMuted,fontSize:14,fontFamily:"'Poppins', sans-serif",lineHeight:1.7,maxWidth:500,marginBottom:32},children:e||"We're having trouble loading our collection. Please try again."}),n.jsx("button",{onClick:t,style:{padding:"12px 32px",background:`linear-gradient(135deg, ${I.rose}, ${I.burgundy})`,border:"none",color:"white",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,cursor:"pointer",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:r=>{r.target.style.transform="translateY(-2px)",r.target.style.boxShadow="0 12px 32px rgba(232,180,196,0.35)"},onMouseLeave:r=>{r.target.style.transform="translateY(0)",r.target.style.boxShadow="none"},children:"Try Again"})]})}function px(){Jm();const[e,t]=m.useState({banners:[],cats:[],latest:[],best:[],allProducts:[],blogs:[]}),[r,o]=m.useState(!0),[i,a]=m.useState(null),s=async()=>{try{o(!0),a(null);const[l,d,c,u,g,f]=await Promise.allSettled([fe.getBanners(),fe.getCategories(),fe.getLatestProducts(),fe.getBestSellers(),fe.getAllProducts(),fe.getBlogs()]),j=[l,d,c,u,g,f].find(h=>{var P,E;return h.status==="fulfilled"&&((E=(P=h.value)==null?void 0:P.message)==null?void 0:E.includes("Cannot connect"))});if(j)throw new Error(j.value.message);const $=Ge(c.value,"products","data"),S=Ge(u.value,"products","data"),w=Ge(g.value,"products","data"),x=w.length>0?w:[...$,...S],p=Array.from(new Map(x.map(h=>[h._id||h.id,h])).values());t({banners:Ge(l.value,"banners","data"),cats:Ge(d.value,"categories","data"),latest:$,best:S,allProducts:p,blogs:Ge(f.value,"blogs","data")})}catch(l){console.error("❌ Homepage load failed:",l),a(l.message||"Failed to load content. Please check your connection.")}finally{o(!1)}};return m.useEffect(()=>{s()},[]),r?n.jsx(cx,{}):i?n.jsx(ux,{error:i,onRetry:s}):n.jsxs("div",{style:{background:I.bg,minHeight:"100vh"},children:[n.jsx(ex,{banners:e.banners}),n.jsx(tx,{}),n.jsx(rx,{cats:e.cats}),n.jsx(Hd,{eyebrow:"Just Arrived",title:"New Collection",products:e.latest,ctaLink:"/new-collection",bg:I.surface}),n.jsx(Hd,{eyebrow:"Most Loved",title:"Best Sellers",products:e.best,ctaLink:"/best-sellers",bg:I.bg}),n.jsx(dx,{products:e.allProducts}),n.jsx(ox,{blogs:e.blogs}),n.jsx(lx,{})]})}const Me={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4"};function fx(){const[e,t]=m.useState([]),[r,o]=m.useState(!0),[i,a]=m.useState("default");m.useEffect(()=>{window.scrollTo(0,0),fe.getLatestProducts().then(l=>{t(Ge(l,"products","data")),o(!1)}).catch(()=>o(!1))},[]);const s=[...e].sort((l,d)=>i==="price-asc"?(l.price||0)-(d.price||0):i==="price-desc"?(d.price||0)-(l.price||0):0);return n.jsxs("div",{style:{background:Me.bg,minHeight:"100vh",paddingTop:"120px"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .new-collection-hero { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .new-collection-grid { animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both; }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid ${Me.border};
          border-top-color: ${Me.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      `}),n.jsxs("div",{className:"new-collection-hero",style:{padding:"80px 80px 60px",borderBottom:`1.5px solid ${Me.border}`,display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:24},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",color:Me.burgundy,marginBottom:"16px",fontWeight:600},children:"✨ Latest Arrivals"}),n.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(40px, 5vw, 72px)",fontWeight:300,color:Me.text,margin:0,background:`linear-gradient(135deg, ${Me.text}, ${Me.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"New Collection"}),n.jsx("p",{style:{color:Me.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"14px",marginTop:"12px",lineHeight:"1.6",fontWeight:400,maxWidth:480},children:"Fresh pieces, new stories. Discover what just arrived this season."})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[n.jsx("span",{style:{color:Me.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:600},children:"Sort by"}),n.jsxs("select",{value:i,onChange:l=>a(l.target.value),style:{background:Me.surface,border:`1.5px solid ${Me.border}`,color:Me.text,padding:"10px 14px",fontFamily:"'Poppins', sans-serif",fontSize:"11px",cursor:"pointer",outline:"none",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",fontWeight:500},onFocus:l=>{l.target.style.borderColor=Me.rose,l.target.style.boxShadow=`0 0 0 3px ${Me.blush}40`},onBlur:l=>{l.target.style.borderColor=Me.border,l.target.style.boxShadow="none"},children:[n.jsx("option",{value:"default",children:"Newest First"}),n.jsx("option",{value:"price-asc",children:"Price: Low to High"}),n.jsx("option",{value:"price-desc",children:"Price: High to Low"})]})]})]}),!r&&n.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1px",color:Me.textMuted,textTransform:"uppercase",paddingLeft:"80px",marginTop:"16px",fontWeight:600},children:[s.length," piece",s.length!==1?"s":""," available"]}),r?n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"120px 40px",gap:20},children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("span",{style:{color:Me.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:"18px",fontStyle:"italic",fontWeight:300},children:"Loading collection…"})]}):n.jsx("div",{className:"new-collection-grid",style:{padding:"60px 80px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"24px"},children:s.map((l,d)=>n.jsx(hr,{product:l},l._id||d))})]})}const re={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function gx(){const[e,t]=m.useState([]),[r,o]=m.useState(!0),[i,a]=m.useState("default"),[s,l]=m.useState(!1);m.useEffect(()=>{window.scrollTo(0,0),fe.getBestSellers().then(c=>{t(Ge(c,"products","data")),o(!1)}).catch(()=>o(!1))},[]);const d=[...e].sort((c,u)=>i==="price-asc"?(c.price||0)-(u.price||0):i==="price-desc"?(u.price||0)-(c.price||0):0);return n.jsxs("div",{style:{background:re.bg,minHeight:"100vh",paddingTop:106},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

        /* ── Keyframes ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position:  600px 0; }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.4); opacity: 0.7; }
        }
        @keyframes lineGrow {
          from { width: 0; }
          to   { width: 100%; }
        }

        /* ── Hero ── */
        .bs-hero {
          position: relative;
          padding: 64px 80px 56px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          overflow: hidden;
          border-bottom: 1px solid ${re.border};
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .bs-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 90% 50%,
              rgba(232,180,196,0.10) 0%,
              transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%,
              rgba(139,70,84,0.04) 0%,
              transparent 70%);
          pointer-events: none;
        }

        /* ── Eyebrow ── */
        .bs-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          animation: fadeInLeft 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s both;
        }
        .bs-eyebrow-line {
          width: 28px;
          height: 1.5px;
          background: linear-gradient(to right, ${re.rose}, ${re.burgundy});
          border-radius: 2px;
        }
        .bs-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${re.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .bs-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -1px;
          background: linear-gradient(135deg, ${re.text} 0%, ${re.burgundy} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 16px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.15s both;
        }

        /* ── Sub ── */
        .bs-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${re.textMuted};
          line-height: 1.75;
          font-weight: 400;
          max-width: 440px;
          margin: 0 0 24px;
          letter-spacing: 0.2px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.25s both;
        }

        /* ── Badge ── */
        .bs-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 9px 18px;
          border: 1px solid rgba(232,180,196,0.5);
          border-radius: 40px;
          background: rgba(245,213,224,0.18);
          backdrop-filter: blur(8px);
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.35s both;
        }
        .bs-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${re.rose}, ${re.burgundy});
          animation: dotPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        .bs-badge-label {
          font-family: 'Poppins', sans-serif;
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${re.burgundy};
          font-weight: 600;
        }

        /* ── Sort Controls ── */
        .bs-controls {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.2s both;
        }
        .bs-sort-label {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: ${re.textMuted};
          font-weight: 600;
          white-space: nowrap;
        }
        .bs-sort-select {
          background: ${re.surface};
          border: 1px solid ${re.border};
          color: ${re.text};
          padding: 10px 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          cursor: pointer;
          outline: none;
          letter-spacing: 0.5px;
          border-radius: 6px;
          font-weight: 500;
          min-width: 170px;
          transition: all 0.3s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238a8a8a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
        }
        .bs-sort-select:hover,
        .bs-sort-select:focus {
          border-color: ${re.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }

        /* ── Toolbar (count + decorative line) ── */
        .bs-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 80px;
          border-bottom: 1px solid ${re.borderLight};
          animation: fadeInUp 0.5s ease 0.3s both;
        }
        .bs-count {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 1.8px;
          color: ${re.textMuted};
          text-transform: uppercase;
          font-weight: 600;
        }
        .bs-count strong {
          color: ${re.burgundy};
          font-weight: 700;
        }
        .bs-toolbar-dec {
          display: flex;
          align-items: center;
          gap: 8px;
          opacity: 0.5;
        }
        .bs-toolbar-dec-line {
          width: 32px;
          height: 1px;
          background: linear-gradient(to right, transparent, ${re.rose});
        }
        .bs-toolbar-dec-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${re.rose};
        }

        /* ── Grid ── */
        .bs-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 40px 80px 80px;
          animation: fadeInUp 0.6s ease 0.35s both;
        }

        /* ── Empty ── */
        .bs-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          gap: 16px;
          text-align: center;
        }
        .bs-empty-icon {
          font-size: 48px;
          opacity: 0.4;
          margin-bottom: 8px;
        }
        .bs-empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 300;
          color: ${re.textMuted};
          font-style: italic;
        }
        .bs-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${re.borderLight};
          letter-spacing: 1px;
        }

        /* ── Loading ── */
        .bs-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          gap: 20px;
        }
        .bs-spinner {
          width: 44px;
          height: 44px;
          border: 2px solid ${re.borderLight};
          border-top-color: ${re.rose};
          border-right-color: ${re.burgundy};
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
        }
        .bs-loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          color: ${re.textMuted};
          font-style: italic;
          letter-spacing: 1px;
        }

        /* ── Skeleton cards ── */
        .bs-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 40px 80px 80px;
        }
        .bs-skeleton-card {
          border-radius: 8px;
          overflow: hidden;
          background: ${re.surface};
          border: 1px solid ${re.borderLight};
        }
        .bs-skeleton-img {
          aspect-ratio: 3/4;
          background: linear-gradient(
            90deg,
            ${re.borderLight} 25%,
            ${re.champagne}50 50%,
            ${re.borderLight} 75%
          );
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite;
        }
        .bs-skeleton-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .bs-skeleton-line {
          height: 10px;
          border-radius: 4px;
          background: linear-gradient(
            90deg,
            ${re.borderLight} 25%,
            ${re.champagne}50 50%,
            ${re.borderLight} 75%
          );
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite;
        }

        /* ── Responsive ── */
        @media (max-width: 1280px) {
          .bs-grid, .bs-skeleton-grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 40px 60px 80px;
          }
          .bs-hero { padding: 60px 60px 50px; }
          .bs-toolbar { padding: 20px 60px; }
        }
        @media (max-width: 1024px) {
          .bs-grid, .bs-skeleton-grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 32px 40px 64px;
          }
          .bs-hero { padding: 56px 40px 48px; }
          .bs-toolbar { padding: 18px 40px; }
        }
        @media (max-width: 768px) {
          .bs-grid, .bs-skeleton-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            padding: 28px 20px 56px;
          }
          .bs-hero {
            padding: 48px 20px 40px;
            flex-direction: column;
            align-items: flex-start;
          }
          .bs-controls {
            width: 100%;
            flex-direction: row;
            align-items: center;
          }
          .bs-sort-select { flex: 1; min-width: unset; }
          .bs-toolbar { padding: 16px 20px; }
        }
        @media (max-width: 480px) {
          .bs-grid, .bs-skeleton-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
            padding: 20px 14px 48px;
          }
          .bs-hero { padding: 36px 14px 32px; }
          .bs-toolbar { padding: 14px; }
        }
      `}),n.jsxs("div",{className:"bs-hero",children:[n.jsxs("div",{style:{position:"relative",zIndex:2},children:[n.jsxs("div",{className:"bs-eyebrow",children:[n.jsx("div",{className:"bs-eyebrow-line"}),n.jsx("span",{className:"bs-eyebrow-text",children:"Most Loved"})]}),n.jsx("h1",{className:"bs-heading",children:"Best Sellers"}),n.jsx("p",{className:"bs-sub",children:"The pieces our community keeps coming back for — handpicked for quality, craftsmanship & timeless elegance."}),n.jsxs("div",{className:"bs-badge",children:[n.jsx("div",{className:"bs-badge-dot"}),n.jsx("span",{className:"bs-badge-label",children:"Customer Favorites"}),!r&&n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{width:1,height:12,background:"rgba(139,70,84,0.2)",margin:"0 2px"}}),n.jsxs("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:14,color:re.burgundy,fontWeight:400,fontStyle:"italic"},children:[d.length," pieces"]})]})]})]}),n.jsxs("div",{className:"bs-controls",children:[n.jsx("span",{className:"bs-sort-label",children:"Sort by"}),n.jsxs("select",{className:"bs-sort-select",value:i,onChange:c=>a(c.target.value),children:[n.jsx("option",{value:"default",children:"Most Popular"}),n.jsx("option",{value:"price-asc",children:"Price: Low to High"}),n.jsx("option",{value:"price-desc",children:"Price: High to Low"})]})]})]}),!r&&n.jsxs("div",{className:"bs-toolbar",children:[n.jsxs("span",{className:"bs-count",children:["Showing ",n.jsx("strong",{children:d.length})," ","bestseller",d.length!==1?"s":""]}),n.jsxs("div",{className:"bs-toolbar-dec",children:[n.jsx("div",{className:"bs-toolbar-dec-line"}),n.jsx("div",{className:"bs-toolbar-dec-dot"}),n.jsx("div",{style:{width:32,height:1,background:`linear-gradient(to left, transparent, ${re.rose})`}})]})]}),r?n.jsx("div",{className:"bs-skeleton-grid",children:Array.from({length:8}).map((c,u)=>n.jsxs("div",{className:"bs-skeleton-card",children:[n.jsx("div",{className:"bs-skeleton-img"}),n.jsxs("div",{className:"bs-skeleton-body",children:[n.jsx("div",{className:"bs-skeleton-line",style:{width:"70%"}}),n.jsx("div",{className:"bs-skeleton-line",style:{width:"45%"}}),n.jsx("div",{className:"bs-skeleton-line",style:{width:"55%",height:8}})]})]},u))}):d.length>0?n.jsx("div",{className:"bs-grid",children:d.map((c,u)=>n.jsx("div",{style:{animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${u*40}ms both`},children:n.jsx(hr,{product:c})},c._id||u))}):n.jsx("div",{className:"bs-grid",children:n.jsxs("div",{className:"bs-empty",children:[n.jsx("div",{className:"bs-empty-icon",children:"✨"}),n.jsx("p",{className:"bs-empty-title",children:"No bestsellers available at the moment"}),n.jsx("p",{className:"bs-empty-sub",children:"Check back soon — new favorites arrive every week"})]})})]})}const _={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function mx(){const[e,t]=Sm(),{success:r,error:o}=_r(),[i,a]=m.useState([]),[s,l]=m.useState([]),[d,c]=m.useState(!0),[u,g]=m.useState(null),[f,j]=m.useState(e.get("search")||""),[$,S]=m.useState(e.get("category")||"all"),[w,x]=m.useState([Number(e.get("minPrice"))||0,Number(e.get("maxPrice"))||1e5]),[p,h]=m.useState(e.get("sort")||"default"),[P,E]=m.useState(Number(e.get("page"))||1),y=12;m.useEffect(()=>{(async()=>{try{c(!0),g(null);const[L,B]=await Promise.all([fe.getAllProducts(),fe.getCategories()]),de=Ge(L,"products","data")||[];if(a(de),l(Ge(B,"categories","data")||[]),!e.get("maxPrice")&&de.length>0){const ve=Math.max(...de.map(St=>Number(St.price||0)));ve>0&&x(St=>[St[0],ve])}}catch(L){console.error("Failed to load products:",L),g("Failed to load products. Please try again."),o("Failed to load products")}finally{c(!1)}})()},[o]);const v=m.useCallback(T=>{const L={};T.search&&(L.search=T.search),T.category&&T.category!=="all"&&(L.category=T.category),T.minPrice>0&&(L.minPrice=T.minPrice),T.maxPrice<1e5&&(L.maxPrice=T.maxPrice),T.sort&&T.sort!=="default"&&(L.sort=T.sort),T.page&&T.page>1&&(L.page=T.page),t(L)},[t]),z=m.useMemo(()=>d?[]:i.filter(T=>{if($!=="all"){const B=T.category;if(!B||!(typeof B=="object"?String(B._id)===String($):String(B)===String($)))return!1}const L=Number(T.price||T.salePrice||0);if(L<w[0]||L>w[1])return!1;if(f.trim()){const B=f.toLowerCase();return T.name&&T.name.toLowerCase().includes(B)||T.description&&T.description.toLowerCase().includes(B)||T.category&&ji(T.category).toLowerCase().includes(B)}return!0}),[i,$,w,f,d]),N=m.useMemo(()=>{const T=[...z];return p==="price-asc"&&T.sort((L,B)=>(L.price||0)-(B.price||0)),p==="price-desc"&&T.sort((L,B)=>(B.price||0)-(L.price||0)),p==="name"&&T.sort((L,B)=>(L.name||"").localeCompare(B.name||"")),p==="newest"&&T.reverse(),T},[z,p]),C=Math.ceil(N.length/y),W=m.useMemo(()=>{const T=(P-1)*y;return N.slice(T,T+y)},[N,P]),U=T=>{j(T),E(1),v({search:T,category:$,minPrice:w[0],maxPrice:w[1],sort:p})},ie=T=>{S(T),E(1),v({search:f,category:T,minPrice:w[0],maxPrice:w[1],sort:p})},pe=(T,L)=>{x([T,L]),E(1),v({search:f,category:$,minPrice:T,maxPrice:L,sort:p})},X=T=>{h(T),v({search:f,category:$,minPrice:w[0],maxPrice:w[1],sort:T})},ae=T=>{T>=1&&T<=C&&(E(T),v({search:f,category:$,minPrice:w[0],maxPrice:w[1],sort:p,page:T}),window.scrollTo({top:0,behavior:"smooth"}))},te=m.useMemo(()=>i.length>0?Math.max(...i.map(T=>Number(T.price||0))):1e5,[i]);return n.jsxs("div",{style:{background:_.bg,minHeight:"100vh",paddingTop:106},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

        /* ── Keyframes ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position:  600px 0; }
        }
        @keyframes dotPulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50%       { transform: scale(1.4); opacity: 0.7; }
        }

        /* ── Hero ── */
        .prod-hero {
          position: relative;
          padding: 64px 80px 56px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          overflow: hidden;
          border-bottom: 1px solid ${_.border};
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .prod-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 90% 50%,
              rgba(232,180,196,0.10) 0%,
              transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%,
              rgba(139,70,84,0.04) 0%,
              transparent 70%);
          pointer-events: none;
        }

        /* ── Eyebrow ── */
        .prod-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          animation: fadeInLeft 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s both;
        }
        .prod-eyebrow-line {
          width: 28px;
          height: 1.5px;
          background: linear-gradient(to right, ${_.rose}, ${_.burgundy});
          border-radius: 2px;
        }
        .prod-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${_.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .prod-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -1px;
          background: linear-gradient(135deg, ${_.text} 0%, ${_.burgundy} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 16px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.15s both;
        }

        /* ── Sub ── */
        .prod-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${_.textMuted};
          line-height: 1.75;
          font-weight: 400;
          max-width: 440px;
          margin: 0 0 24px;
          letter-spacing: 0.2px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.25s both;
        }

        /* ── Sort Controls ── */
        .prod-controls {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-shrink: 0;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.2s both;
        }
        .prod-sort-label {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: ${_.textMuted};
          font-weight: 600;
          white-space: nowrap;
        }
        .prod-sort-select {
          background: ${_.surface};
          border: 1px solid ${_.border};
          color: ${_.text};
          padding: 10px 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          cursor: pointer;
          outline: none;
          letter-spacing: 0.5px;
          border-radius: 6px;
          font-weight: 500;
          min-width: 170px;
          transition: all 0.3s;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238a8a8a' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          padding-right: 36px;
        }
        .prod-sort-select:hover,
        .prod-sort-select:focus {
          border-color: ${_.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }

        /* ── Search Bar ── */
        .prod-search-bar {
          padding: 22px 80px;
          border-bottom: 1px solid ${_.borderLight};
          animation: fadeInUp 0.5s ease 0.25s both;
        }
        .prod-search-input {
          width: 100%;
          max-width: 400px;
          background: ${_.surface};
          border: 1px solid ${_.border};
          color: ${_.text};
          padding: 12px 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          border-radius: 6px;
          outline: none;
          transition: all 0.3s;
          letter-spacing: 0.3px;
        }
        .prod-search-input:focus {
          border-color: ${_.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }
        .prod-search-input::placeholder {
          color: ${_.textMuted};
        }

        /* ── Filter Bar ── */
        .prod-filter-bar {
          padding: 22px 80px;
          border-bottom: 1px solid ${_.borderLight};
          display: grid;
          grid-template-columns: auto 1fr auto;
          gap: 24px;
          align-items: center;
          animation: fadeInUp 0.5s ease 0.3s both;
        }
        .prod-filter-label {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: ${_.textMuted};
          font-weight: 600;
          white-space: nowrap;
        }
        .prod-category-scroll {
          display: flex;
          gap: 10px;
          align-items: center;
          overflow-x: auto;
          padding-bottom: 4px;
          scroll-behavior: smooth;
        }
        .prod-category-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .prod-category-scroll::-webkit-scrollbar-track {
          background: ${_.borderLight};
          border-radius: 2px;
        }
        .prod-category-scroll::-webkit-scrollbar-thumb {
          background: ${_.rose};
          border-radius: 2px;
        }
        .prod-cat-btn {
          padding: 10px 20px;
          background: ${_.surface};
          border: 1px solid ${_.border};
          color: ${_.text};
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
          border-radius: 6px;
          font-weight: 500;
        }
        .prod-cat-btn.active {
          background: ${_.rose};
          border-color: ${_.rose};
          color: ${_.surface};
        }
        .prod-cat-btn:hover:not(.active) {
          border-color: ${_.rose};
        }

        /* ── Price Inputs ── */
        .prod-price-inputs {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .prod-price-input {
          width: 90px;
          background: ${_.surface};
          border: 1px solid ${_.border};
          color: ${_.text};
          padding: 10px 12px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          border-radius: 6px;
          outline: none;
          transition: all 0.3s;
        }
        .prod-price-input:focus {
          border-color: ${_.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }
        .prod-price-dash {
          color: ${_.textMuted};
          font-weight: 500;
        }

        /* ── Toolbar ── */
        .prod-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 80px;
          border-bottom: 1px solid ${_.borderLight};
          animation: fadeInUp 0.5s ease 0.35s both;
          flex-wrap: wrap;
          gap: 16px;
        }
        .prod-count {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 1.8px;
          color: ${_.textMuted};
          text-transform: uppercase;
          font-weight: 600;
        }
        .prod-count strong {
          color: ${_.burgundy};
          font-weight: 700;
        }
        .prod-page-info {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.5px;
          color: ${_.textMuted};
        }

        /* ── Grid ── */
        .prod-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 40px 80px 80px;
          animation: fadeInUp 0.6s ease 0.4s both;
        }

        /* ── Empty ── */
        .prod-empty {
          grid-column: 1 / -1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
          gap: 16px;
          text-align: center;
        }
        .prod-empty-icon {
          font-size: 48px;
          opacity: 0.4;
          margin-bottom: 8px;
        }
        .prod-empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 26px;
          font-weight: 300;
          color: ${_.textMuted};
          font-style: italic;
        }
        .prod-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${_.textMuted};
          letter-spacing: 0.5px;
        }

        /* ── Loading ── */
        .prod-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 60vh;
          gap: 20px;
          padding: 40px 80px;
        }
        .prod-spinner {
          width: 44px;
          height: 44px;
          border: 2px solid ${_.borderLight};
          border-top-color: ${_.rose};
          border-right-color: ${_.burgundy};
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
        }
        .prod-loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          color: ${_.textMuted};
          font-style: italic;
          letter-spacing: 1px;
        }

        /* ── Error Banner ── */
        .prod-error-banner {
          background: rgba(232,180,196,0.1);
          border-bottom: 1px solid ${_.rose};
          color: ${_.burgundy};
          padding: 16px 80px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          letter-spacing: 0.3px;
          animation: fadeInUp 0.5s ease both;
        }

        /* ── Pagination ── */
        .prod-pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          margin-top: 48px;
          flex-wrap: wrap;
          animation: fadeInUp 0.5s ease 0.45s both;
        }
        .prod-page-btn {
          padding: 10px 16px;
          background: ${_.surface};
          border: 1px solid ${_.border};
          color: ${_.text};
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 1px;
          cursor: pointer;
          transition: all 0.3s;
          border-radius: 6px;
          font-weight: 500;
          text-transform: uppercase;
        }
        .prod-page-btn.active {
          background: ${_.rose};
          border-color: ${_.rose};
          color: ${_.surface};
        }
        .prod-page-btn:hover:not(.active):not(:disabled) {
          border-color: ${_.rose};
          background: ${_.blush};
        }
        .prod-page-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        /* ── Skeleton ── */
        .prod-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          padding: 40px 80px 80px;
        }
        .prod-skeleton-card {
          border-radius: 8px;
          overflow: hidden;
          background: ${_.surface};
          border: 1px solid ${_.borderLight};
        }
        .prod-skeleton-img {
          aspect-ratio: 3/4;
          background: linear-gradient(
            90deg,
            ${_.borderLight} 25%,
            ${_.champagne} 50%,
            ${_.borderLight} 75%
          );
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite;
        }
        .prod-skeleton-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .prod-skeleton-line {
          height: 10px;
          border-radius: 4px;
          background: linear-gradient(
            90deg,
            ${_.borderLight} 25%,
            ${_.champagne} 50%,
            ${_.borderLight} 75%
          );
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite;
        }

        /* ── Quick Add Button ── */
        .prod-add-btn {
          margin-top: 12px;
          padding: 12px 16px;
          background: ${_.rose};
          color: ${_.surface};
          border: 1.5px solid ${_.rose};
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border-radius: 6px;
          width: 100%;
        }
        .prod-add-btn:hover:not(:disabled) {
          background: ${_.burgundy};
          border-color: ${_.burgundy};
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(139,70,84,0.15);
        }
        .prod-add-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* ── Responsive ── */
        @media (max-width: 1280px) {
          .prod-grid, .prod-skeleton-grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 40px 60px 80px;
          }
          .prod-hero { padding: 60px 60px 50px; }
          .prod-search-bar, .prod-filter-bar, .prod-toolbar { padding: 20px 60px; }
        }
        @media (max-width: 1024px) {
          .prod-grid, .prod-skeleton-grid {
            grid-template-columns: repeat(3, 1fr);
            padding: 32px 40px 64px;
          }
          .prod-hero { padding: 56px 40px 48px; }
          .prod-search-bar, .prod-filter-bar, .prod-toolbar { padding: 18px 40px; }
        }
        @media (max-width: 768px) {
          .prod-grid, .prod-skeleton-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
            padding: 28px 20px 56px;
          }
          .prod-hero {
            padding: 48px 20px 40px;
            flex-direction: column;
            align-items: flex-start;
          }
          .prod-controls {
            width: 100%;
            flex-direction: row;
          }
          .prod-sort-select { flex: 1; min-width: unset; }
          .prod-search-bar, .prod-filter-bar, .prod-toolbar { padding: 16px 20px; }
          .prod-filter-bar {
            grid-template-columns: 1fr;
          }
          .prod-category-scroll {
            order: 2;
          }
        }
        @media (max-width: 480px) {
          .prod-grid, .prod-skeleton-grid {
            grid-template-columns: 1fr;
            gap: 12px;
            padding: 20px 14px 48px;
          }
          .prod-hero { padding: 36px 14px 32px; }
          .prod-search-bar, .prod-filter-bar, .prod-toolbar { padding: 14px; }
          .prod-filter-bar {
            grid-template-columns: 1fr;
          }
        }
      `}),u&&n.jsxs("div",{className:"prod-error-banner",children:["⚠ ",u]}),n.jsxs("div",{className:"prod-hero",children:[n.jsxs("div",{style:{position:"relative",zIndex:2},children:[n.jsxs("div",{className:"prod-eyebrow",children:[n.jsx("div",{className:"prod-eyebrow-line"}),n.jsx("span",{className:"prod-eyebrow-text",children:"Shop Our Collection"})]}),n.jsx("h1",{className:"prod-heading",children:"All Jewellery"}),n.jsx("p",{className:"prod-sub",children:"Discover our complete collection of handcrafted pieces. Find the perfect style that speaks to you."})]}),n.jsxs("div",{className:"prod-controls",children:[n.jsx("span",{className:"prod-sort-label",children:"Sort by"}),n.jsxs("select",{className:"prod-sort-select",value:p,onChange:T=>X(T.target.value),children:[n.jsx("option",{value:"default",children:"Default"}),n.jsx("option",{value:"price-asc",children:"Price: Low to High"}),n.jsx("option",{value:"price-desc",children:"Price: High to Low"}),n.jsx("option",{value:"name",children:"Name A-Z"}),n.jsx("option",{value:"newest",children:"Newest"})]})]})]}),n.jsx("div",{className:"prod-search-bar",children:n.jsx("input",{type:"text",placeholder:"Search products, categories...",value:f,onChange:T=>U(T.target.value),className:"prod-search-input"})}),!d&&s.length>0&&n.jsxs("div",{className:"prod-filter-bar",children:[n.jsx("span",{className:"prod-filter-label",children:"Category"}),n.jsxs("div",{className:"prod-category-scroll",children:[n.jsx("button",{className:`prod-cat-btn ${$==="all"?"active":""}`,onClick:()=>ie("all"),children:"All"}),s.map(T=>{const L=hl(T);return L?n.jsx("button",{className:`prod-cat-btn ${$===L?"active":""}`,onClick:()=>ie(L),children:ji(T)},L):null})]}),n.jsxs("div",{className:"prod-price-inputs",children:[n.jsx("span",{className:"prod-filter-label",children:"Price:"}),n.jsx("input",{type:"number",min:"0",value:w[0],onChange:T=>pe(Number(T.target.value),w[1]),className:"prod-price-input",placeholder:"Min"}),n.jsx("span",{className:"prod-price-dash",children:"–"}),n.jsx("input",{type:"number",max:te,value:w[1],onChange:T=>pe(w[0],Number(T.target.value)),className:"prod-price-input",placeholder:"Max"})]})]}),!d&&n.jsxs("div",{className:"prod-toolbar",children:[n.jsxs("span",{className:"prod-count",children:["Showing ",n.jsx("strong",{children:W.length})," of"," ",n.jsx("strong",{children:N.length})," piece",N.length!==1?"s":""]}),C>1&&n.jsxs("div",{className:"prod-page-info",children:["Page ",P," of ",C]})]}),d?n.jsx(n.Fragment,{children:n.jsxs("div",{className:"prod-loading",children:[n.jsx("div",{className:"prod-spinner"}),n.jsx("p",{className:"prod-loading-text",children:"Loading collection…"})]})}):N.length===0?n.jsx("div",{className:"prod-grid",children:n.jsxs("div",{className:"prod-empty",children:[n.jsx("div",{className:"prod-empty-icon",children:"✨"}),n.jsx("p",{className:"prod-empty-title",children:"No pieces found"}),n.jsx("p",{className:"prod-empty-sub",children:"Try adjusting your filters or search terms"})]})}):n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"prod-grid",children:W.map((T,L)=>n.jsx("div",{style:{animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${L*40}ms both`},children:n.jsx(xx,{product:T})},T._id||L))}),C>1&&n.jsx("div",{style:{padding:"0 80px 80px"},children:n.jsxs("div",{className:"prod-pagination",children:[n.jsx("button",{className:"prod-page-btn",onClick:()=>ae(P-1),disabled:P===1,children:"← Previous"}),Array.from({length:Math.min(5,C)}).map((T,L)=>{const B=C<=5?L+1:Math.max(1,P-2)+L;return B>C?null:n.jsx("button",{className:`prod-page-btn ${B===P?"active":""}`,onClick:()=>ae(B),children:B},B)}),n.jsx("button",{className:"prod-page-btn",onClick:()=>ae(P+1),disabled:P===C,children:"Next →"})]})})]})]})}function xx({product:e}){const{addToCart:t}=bn(),{success:r,error:o}=_r(),[i,a]=m.useState(!1),s=async l=>{l.stopPropagation(),a(!0);try{await t(e._id||e.id,1),r("Added to cart!")}catch(d){o((d==null?void 0:d.message)||"Failed to add to cart"),console.error(d)}finally{a(!1)}};return n.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column"},children:[n.jsx(hr,{product:e}),n.jsx("button",{onClick:s,disabled:i,className:"prod-add-btn",children:i?"Adding...":"Add to Cart"})]})}const H={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4"};function hx(){const{id:e}=q0(),t=qe(),{addToCart:r}=bn(),{toggleWishlist:o}=Hi(),[i,a]=m.useState(null),[s,l]=m.useState([]),[d,c]=m.useState(!0),[u,g]=m.useState(0),[f,j]=m.useState(1),[$,S]=m.useState(!1),[w,x]=m.useState(!1);m.useEffect(()=>{c(!0),fe.getProductById(e).then(N=>{const C=(N==null?void 0:N.data)||(N==null?void 0:N.product)||N;a(C),c(!1),fe.getLatestProducts().then(W=>{const U=Ge(W,"products","data");l(U.filter(ie=>(ie._id||ie.id)!==e).slice(0,4))})}).catch(()=>c(!1)),window.scrollTo(0,0)},[e]);const p=async()=>{if(!localStorage.getItem("arke_token")){alert("Please login first");return}await r(i||e,f),S(!0),setTimeout(()=>S(!1),3e3)},h=async()=>{if(!localStorage.getItem("arke_token")){alert("Please login first");return}x(!0);try{await o(i||e)}finally{x(!1)}};if(d)return n.jsxs("div",{style:{paddingTop:"120px",minHeight:"100vh",background:H.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20},children:[n.jsx("style",{children:`
          @keyframes spin { to { transform: rotate(360deg); } }
          .spinner {
            width: 48px;
            height: 48px;
            border: 3px solid ${H.border};
            border-top-color: ${H.rose};
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
        `}),n.jsx("div",{className:"spinner"}),n.jsx("span",{style:{color:H.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:"18px",fontStyle:"italic",fontWeight:300},children:"Loading product…"})]});if(!i)return n.jsxs("div",{style:{paddingTop:"120px",minHeight:"100vh",background:H.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"24px"},children:[n.jsx("div",{style:{fontSize:56,opacity:.4},children:"◇"}),n.jsx("span",{style:{color:H.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:"28px",fontWeight:300},children:"Product not found"}),n.jsx("button",{onClick:()=>t("/products"),style:{background:"transparent",border:`1.5px solid ${H.rose}`,color:H.burgundy,padding:"12px 32px",cursor:"pointer",fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"},onMouseEnter:N=>{N.target.style.background=`${H.blush}30`,N.target.style.borderColor=H.burgundy},onMouseLeave:N=>{N.target.style.background="transparent",N.target.style.borderColor=H.rose},children:"← Back to Products"})]});const P=Array.isArray(i.images)?i.images:[i.image||i.thumbnail].filter(Boolean),E=i.name||i.title||"Product",y=i.price||i.salePrice||i.mrp||0,v=i.mrp||i.originalPrice,z=i.description||i.details||"";return n.jsxs("div",{style:{background:H.bg,minHeight:"100vh",paddingTop:"100px"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pd-main { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .pd-related { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }
      `}),n.jsxs("div",{className:"pd-main",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",padding:"60px 80px",alignItems:"start"},children:[n.jsxs("div",{children:[Fe(P[u])?n.jsx("img",{src:Fe(P[u]),alt:E,style:{width:"100%",aspectRatio:"1/1",objectFit:"cover",marginBottom:"16px",borderRadius:"8px"}}):n.jsx("div",{style:{width:"100%",aspectRatio:"1/1",background:`linear-gradient(135deg, ${H.blush}30, ${H.champagne}20)`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",borderRadius:"8px"},children:n.jsx("span",{style:{color:`${H.rose}40`,fontSize:"120px"},children:"◇"})}),P.length>1&&n.jsx("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:P.map((N,C)=>{const W=Fe(N);return W?n.jsx("img",{src:W,alt:`${E} view ${C+1}`,onClick:()=>g(C),style:{width:"80px",height:"80px",objectFit:"cover",cursor:"pointer",border:C===u?`2px solid ${H.burgundy}`:`1.5px solid ${H.border}`,opacity:C===u?1:.6,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px"},onMouseEnter:U=>{C!==u&&(U.target.style.opacity="1",U.target.style.borderColor=H.rose)},onMouseLeave:U=>{C!==u&&(U.target.style.opacity="0.6",U.target.style.borderColor=H.border)}},C):null})})]}),n.jsxs("div",{children:[n.jsx("button",{onClick:()=>t("/products"),style:{fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"0.5px",textTransform:"uppercase",color:H.textMuted,marginBottom:"20px",cursor:"pointer",background:"none",border:"none",padding:0,transition:"color 0.2s"},onMouseEnter:N=>N.target.style.color=H.burgundy,onMouseLeave:N=>N.target.style.color=H.textMuted,children:"← Back to All Products"}),n.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(28px, 4vw, 44px)",fontWeight:300,color:H.text,lineHeight:"1.2",marginBottom:"24px",margin:"0 0 24px 0"},children:E}),n.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"baseline",marginBottom:"32px"},children:[n.jsxs("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"32px",background:`linear-gradient(135deg, ${H.rose}, ${H.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",fontWeight:400},children:["₹",Number(y).toLocaleString("en-IN")]}),v&&v>y&&n.jsxs("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"16px",color:H.textMuted,textDecoration:"line-through"},children:["₹",Number(v).toLocaleString("en-IN")]})]}),z&&n.jsx("p",{style:{color:H.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"14px",lineHeight:"1.8",marginBottom:"32px",fontWeight:400},children:z}),n.jsx("div",{style:{borderTop:`1.5px solid ${H.border}`,margin:"32px 0"}}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px",marginBottom:"24px"},children:[n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"1px",textTransform:"uppercase",color:H.textMuted,fontWeight:600,minWidth:"60px"},children:"Quantity"}),n.jsxs("div",{style:{display:"flex",alignItems:"center",border:`1.5px solid ${H.border}`,borderRadius:"6px",overflow:"hidden"},children:[n.jsx("button",{onClick:()=>j(N=>Math.max(1,N-1)),style:{width:"40px",height:"40px",background:"none",border:"none",color:H.rose,cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:N=>N.target.style.background=`${H.blush}30`,onMouseLeave:N=>N.target.style.background="none",children:"−"}),n.jsx("span",{style:{flex:1,textAlign:"center",fontFamily:"'Poppins', sans-serif",fontSize:"14px",fontWeight:600,color:H.text,minWidth:"50px"},children:f}),n.jsx("button",{onClick:()=>j(N=>N+1),style:{width:"40px",height:"40px",background:"none",border:"none",color:H.rose,cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:N=>N.target.style.background=`${H.blush}30`,onMouseLeave:N=>N.target.style.background="none",children:"+"})]})]}),n.jsx("button",{onClick:p,style:{width:"100%",padding:"16px",background:$?`linear-gradient(135deg, ${H.rose}, ${H.burgundy})`:"transparent",border:`1.5px solid ${$?"transparent":H.rose}`,color:$?"white":H.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px",fontWeight:700,marginBottom:"12px",boxShadow:$?`0 4px 16px ${H.rose}30`:"none"},onMouseEnter:N=>{$||(N.target.style.background=`${H.blush}20`,N.target.style.borderColor=H.burgundy)},onMouseLeave:N=>{$||(N.target.style.background="transparent",N.target.style.borderColor=H.rose)},children:$?"✓ Added to Cart":"Add to Cart"}),n.jsx("button",{onClick:h,disabled:w,style:{width:"100%",padding:"14px",background:"transparent",border:`1.5px solid ${H.border}`,color:H.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",cursor:w?"not-allowed":"pointer",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px",fontWeight:600,opacity:w?.6:1},onMouseEnter:N=>{w||(N.target.style.borderColor=H.rose,N.target.style.color=H.rose,N.target.style.background=`${H.blush}15`)},onMouseLeave:N=>{w||(N.target.style.borderColor=H.border,N.target.style.color=H.textMuted,N.target.style.background="transparent")},children:"♡ Add to Wishlist"}),n.jsx("div",{style:{borderTop:`1.5px solid ${H.border}`,margin:"32px 0"}}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[["Material",i.material||i.metalType],["Weight",i.weight?`${i.weight}g`:null],["Size",i.size],["SKU",i.sku||i.productCode]].filter(([,N])=>N).map(([N,C])=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"1px",textTransform:"uppercase",color:H.textMuted,fontWeight:600},children:N}),n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"12px",color:H.text,fontWeight:500},children:C})]},N))})]})]}),s.length>0&&n.jsxs("div",{className:"pd-related",style:{padding:"80px 80px",borderTop:`1.5px solid ${H.border}`,background:H.surface},children:[n.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"36px",fontWeight:300,color:H.text,marginBottom:"40px",margin:"0 0 40px 0",background:`linear-gradient(135deg, ${H.text}, ${H.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"You May Also Like"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"24px"},children:s.map((N,C)=>n.jsx(hr,{product:N},N._id||C))})]})]})}const we={bg:"#faf8f5",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4"};function yx(){const[e,t]=m.useState([]),[r,o]=m.useState(!0),[i,a]=m.useState(null),s=qe();return m.useEffect(()=>{window.scrollTo(0,0),fe.getCategories().then(l=>{t(Ge(l,"categories","data")),o(!1)}).catch(()=>o(!1))},[]),n.jsxs("div",{style:{background:we.bg,minHeight:"100vh",paddingTop:"120px"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .categories-header { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .categories-grid { animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          .categories-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 20px !important;
          }
        }

        @media (max-width: 768px) {
          .categories-header { padding: 50px 20px 40px !important; }
          .categories-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 20px !important;
          }
        }
      `}),n.jsxs("div",{className:"categories-header",style:{padding:"60px 80px 60px",borderBottom:`1.5px solid ${we.border}`},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:16},children:[n.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(90deg, ${we.rose}, ${we.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:we.burgundy,fontWeight:600},children:"Explore Collections"})]}),n.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(40px, 5vw, 72px)",fontWeight:300,color:we.text,margin:0,background:`linear-gradient(135deg, ${we.text}, ${we.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Categories"})]}),r?n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:120,gap:20},children:[n.jsx("div",{style:{width:48,height:48,border:`3px solid ${we.border}`,borderTopColor:we.rose,borderRadius:"50%",animation:"spin 1s linear infinite"}}),n.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,color:we.textMuted,fontStyle:"italic",fontWeight:300},children:"Loading categories…"})]}):e.length===0?n.jsxs("div",{style:{textAlign:"center",padding:"120px 40px"},children:[n.jsx("div",{style:{fontSize:56,color:`${we.rose}40`,marginBottom:24},children:"◇"}),n.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:300,color:we.textMuted,background:`linear-gradient(135deg, ${we.textMuted}, ${we.rose}80)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"No categories found"}),n.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:we.textMuted,marginTop:12},children:"Check back soon for new collections"})]}):n.jsx("div",{className:"categories-grid",style:{padding:"60px 80px",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},children:e.map((l,d)=>{const c=ji(l),u=wp(l),g=hl(l),f=i===d;return n.jsxs("div",{style:{cursor:"pointer",position:"relative",overflow:"hidden",aspectRatio:"4/3",borderRadius:"12px",boxShadow:f?"0 20px 48px rgba(139, 70, 84, 0.25)":"0 4px 16px rgba(0,0,0,0.08)",transition:"all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:f?"translateY(-8px)":"translateY(0)",animation:`slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${d*.1}s both`},onClick:()=>g&&s(`/products?category=${g}`),onMouseEnter:()=>a(d),onMouseLeave:()=>a(null),children:[u?n.jsx("img",{src:u,alt:c,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:f?"scale(1.08)":"scale(1)"}}):n.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${we.blush}30, ${we.champagne}20)`,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("span",{style:{color:`${we.rose}40`,fontSize:"96px"},children:"◇"})}),n.jsxs("div",{style:{position:"absolute",inset:0,background:`linear-gradient(to top, 
                      rgba(250,248,245,0.95) 0%, 
                      rgba(250,248,245,0.75) 30%, 
                      rgba(250,248,245,0.3) 60%, 
                      transparent 100%)`,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"32px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"},children:[n.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:400,color:we.text,marginBottom:12,letterSpacing:.5,lineHeight:1.2},children:c}),n.jsx("div",{style:{width:f?56:32,height:1.5,background:`linear-gradient(90deg, ${we.rose}, ${we.burgundy})`,marginBottom:12,transition:"width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"}}),n.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:we.burgundy,display:"inline-flex",alignItems:"center",gap:6,fontWeight:700,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:f?"translateX(4px)":"translateX(0)"},children:["Shop Now",n.jsx("span",{style:{transition:"transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:f?"translateX(2px)":"translateX(0)"},children:"→"})]})]})]},d)})})]})}const D={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function bx(){const[e,t]=m.useState([]),[r,o]=m.useState(!0),[i,a]=m.useState(null);return qe(),m.useEffect(()=>{window.scrollTo(0,0),fe.getBlogs().then(s=>{t(Ge(s,"blogs","data")),o(!1)}).catch(()=>o(!1))},[]),n.jsxs("div",{style:{background:D.bg,minHeight:"100vh",paddingTop:"120px"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* ── Header ── */
        .blog-header {
          padding: 100px 80px 70px;
          border-bottom: 1.5px solid ${D.border};
          background: linear-gradient(135deg, rgba(232,180,196,0.04) 0%, rgba(139,70,84,0.02) 100%);
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .blog-header::before {
          content: '';
          position: absolute;
          top: 0;
          right: -100px;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(232,180,196,0.1) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .blog-header-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .blog-eyebrow {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${D.burgundy};
          margin-bottom: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .blog-eyebrow::before {
          content: '';
          display: inline-block;
          width: 28px;
          height: 1.5px;
          background: linear-gradient(to right, ${D.rose}, ${D.burgundy});
          border-radius: 2px;
        }

        .blog-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 300;
          color: ${D.text};
          letter-spacing: -1px;
          line-height: 1.1;
          background: linear-gradient(135deg, ${D.text} 0%, ${D.burgundy} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
        }

        .blog-header-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${D.textMuted};
          line-height: 1.8;
          letter-spacing: 0.3px;
          max-width: 600px;
        }

        /* ── Grid ── */
        .blog-grid-container {
          padding: 100px 80px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        /* ── Card ── */
        .blog-card {
          cursor: pointer;
          animation: slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          animation-fill-mode: both;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          height: 100%;
          display: flex;
          flex-direction: column;
          background: ${D.surface};
          border-radius: 12px;
          overflow: hidden;
          border: 1.5px solid ${D.borderLight};
        }

        .blog-card:nth-child(1) { animation-delay: 0.1s; }
        .blog-card:nth-child(2) { animation-delay: 0.2s; }
        .blog-card:nth-child(3) { animation-delay: 0.3s; }
        .blog-card:nth-child(4) { animation-delay: 0.4s; }
        .blog-card:nth-child(5) { animation-delay: 0.5s; }
        .blog-card:nth-child(6) { animation-delay: 0.6s; }
        .blog-card:nth-child(7) { animation-delay: 0.7s; }
        .blog-card:nth-child(8) { animation-delay: 0.8s; }

        .blog-card:hover {
          transform: translateY(-12px);
          border-color: ${D.rose};
          box-shadow: 0 24px 48px rgba(139, 70, 84, 0.18);
        }

        /* ── Image ── */
        .blog-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, ${D.blush}20, ${D.champagne}15);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .blog-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-img {
          transform: scale(1.08);
        }

        .blog-img-placeholder {
          font-size: 80px;
          opacity: 0.5;
        }

        /* ── Badges ── */
        .blog-badges {
          position: absolute;
          top: 16px;
          left: 16px;
          right: 16px;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          z-index: 10;
        }

        .blog-category-badge {
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          font-size: 8px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${D.burgundy};
          background: rgba(232, 180, 196, 0.95);
          backdrop-filter: blur(10px);
          padding: 7px 14px;
          border-radius: 20px;
          font-weight: 700;
          border: 0.5px solid ${D.rose};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-category-badge {
          background: ${D.rose};
          color: white;
          transform: scale(1.05);
        }

        .blog-featured-badge {
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          font-size: 8px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: white;
          background: ${D.burgundy};
          padding: 7px 14px;
          border-radius: 20px;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ── Content ── */
        .blog-content {
          flex: 1;
          padding: 28px;
          display: flex;
          flex-direction: column;
          border-bottom: 1.5px solid ${D.borderLight};
          transition: border-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-content {
          border-color: ${D.rose};
        }

        .blog-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          color: ${D.text};
          line-height: 1.4;
          margin-bottom: 14px;
          transition: color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-title {
          color: ${D.burgundy};
        }

        .blog-excerpt {
          color: ${D.textMuted};
          font-family: 'Poppins', sans-serif;
          font-size: 12.5px;
          line-height: 1.75;
          margin-bottom: auto;
          font-weight: 400;
          letter-spacing: 0.3px;
        }

        /* ── Footer ── */
        .blog-footer {
          padding: 16px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: ${D.bg};
          transition: background 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-footer {
          background: ${D.blush}20;
        }

        .blog-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .blog-date {
          color: ${D.textMuted};
          font-size: 10px;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .blog-author {
          color: ${D.text};
          font-size: 11px;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .blog-read-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: ${D.blush};
          color: ${D.burgundy};
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-read-link {
          background: ${D.rose};
          color: white;
          transform: scale(1.1);
        }

        /* ── Loading State ── */
        .loading-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 160px 40px;
        }

        .loading-spinner {
          width: 52px;
          height: 52px;
          border: 3px solid ${D.borderLight};
          border-top-color: ${D.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 28px;
        }

        .loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 300;
          color: ${D.textMuted};
          font-style: italic;
          letter-spacing: 1px;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        /* ── Empty State ── */
        .empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 100px 40px;
        }

        .empty-state-icon {
          font-size: 80px;
          margin-bottom: 24px;
          animation: fadeInUp 0.6s ease 0.2s both;
        }

        .empty-state-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          color: ${D.text};
          margin-bottom: 12px;
          letter-spacing: 1px;
          animation: fadeInUp 0.6s ease 0.3s both;
        }

        .empty-state-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${D.textMuted};
          font-weight: 400;
          line-height: 1.8;
          animation: fadeInUp 0.6s ease 0.4s both;
        }

        /* ── Modal ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
          overflow-y: auto;
        }

        .modal-content {
          background: ${D.surface};
          border-radius: 16px;
          width: 90%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          animation: scaleIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          margin: 20px auto;
        }

        .modal-header {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: linear-gradient(135deg, ${D.blush}30, ${D.champagne}20);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.95);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          z-index: 10;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .modal-close:hover {
          background: white;
          transform: rotate(90deg) scale(1.1);
        }

        .modal-body {
          padding: 52px;
        }

        .modal-category {
          display: inline-block;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          color: ${D.burgundy};
          background: ${D.blush};
          padding: 8px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
          font-weight: 700;
          border: 1px solid ${D.rose}60;
        }

        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 300;
          color: ${D.text};
          line-height: 1.2;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .modal-meta {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1.5px solid ${D.borderLight};
          flex-wrap: wrap;
        }

        .modal-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .modal-author-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${D.rose}, ${D.burgundy});
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 700;
          font-size: 14px;
        }

        .modal-author-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .modal-author-name {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: ${D.text};
        }

        .modal-author-role {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          color: ${D.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-date {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${D.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-read-time {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${D.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-content-text {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          line-height: 1.9;
          color: ${D.text};
          letter-spacing: 0.4px;
        }

        .modal-content-text p {
          margin-bottom: 24px;
        }

        .modal-content-text h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 400;
          color: ${D.text};
          margin: 36px 0 16px;
          letter-spacing: -0.5px;
        }

        .modal-content-text h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: ${D.text};
          margin: 28px 0 12px;
          letter-spacing: -0.5px;
        }

        .modal-content-text blockquote {
          border-left: 4px solid ${D.rose};
          padding-left: 20px;
          margin: 28px 0;
          color: ${D.textMuted};
          font-style: italic;
        }

        /* ── Scrollbar ── */
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: ${D.bg};
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: ${D.rose};
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: ${D.burgundy};
        }

        /* ── Responsive ── */
        @media (max-width: 1200px) {
          .blog-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 32px;
          }

          .blog-grid-container {
            padding: 80px 60px;
          }

          .blog-header {
            padding: 80px 60px 50px;
          }
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }

          .blog-grid-container {
            padding: 60px 40px;
          }

          .blog-header {
            padding: 60px 40px;
          }

          .modal-body {
            padding: 40px;
          }
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .blog-grid-container {
            padding: 50px 20px;
          }

          .blog-header {
            padding: 50px 20px 40px;
          }

          .blog-heading {
            font-size: 36px;
          }

          .blog-title {
            font-size: 20px;
          }

          .modal-content {
            width: 95%;
            max-height: 95vh;
          }

          .modal-body {
            padding: 24px;
          }

          .modal-title {
            font-size: 28px;
          }

          .modal-content-text {
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .blog-grid-container {
            padding: 40px 16px;
          }

          .blog-header {
            padding: 40px 16px 30px;
          }

          .blog-heading {
            font-size: 28px;
          }

          .blog-card {
            border-radius: 8px;
          }

          .modal-body {
            padding: 20px;
          }

          .modal-title {
            font-size: 22px;
          }

          .modal-meta {
            gap: 12px;
          }
        }
      `}),n.jsx("div",{className:"blog-header",children:n.jsxs("div",{className:"blog-header-content",children:[n.jsx("div",{className:"blog-eyebrow",children:"Stories & Inspiration"}),n.jsx("h1",{className:"blog-heading",children:"From the Journal"}),n.jsx("p",{className:"blog-header-sub",children:"Discover inspiring stories about jewellery craftsmanship, styling tips, and the art of wearing pieces that celebrate your unique style."})]})}),r?n.jsx("div",{style:{padding:"80px 40px"},children:n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{className:"loading-text",children:"Loading our stories…"})]})}):e.length>0?n.jsx("div",{className:"blog-grid-container",children:n.jsx("div",{className:"blog-grid",children:e.map((s,l)=>{var g;const d=Fe(s.image||s.thumbnail||s.featuredImage),c=s.date||s.createdAt,u=s.readTime||Math.ceil((((g=s.content)==null?void 0:g.length)||0)/200);return n.jsxs("div",{className:"blog-card",onClick:()=>a(s),children:[n.jsxs("div",{className:"blog-img-wrap",children:[d?n.jsx("img",{src:d,alt:s.title,className:"blog-img"}):n.jsx("div",{className:"blog-img-placeholder",children:"📖"}),n.jsxs("div",{className:"blog-badges",children:[s.featured&&n.jsxs("div",{className:"blog-featured-badge",children:[n.jsx("span",{children:"✦"})," Featured"]}),n.jsx("div",{className:"blog-category-badge",children:s.category||"Journal"})]})]}),n.jsxs("div",{className:"blog-content",children:[n.jsx("h3",{className:"blog-title",children:s.title}),s.excerpt&&n.jsx("p",{className:"blog-excerpt",children:s.excerpt.length>110?`${s.excerpt.slice(0,110)}...`:s.excerpt})]}),n.jsxs("div",{className:"blog-footer",children:[n.jsxs("div",{className:"blog-meta",children:[n.jsx("div",{className:"blog-date",children:c?new Date(c).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}),u>0&&n.jsxs("div",{className:"blog-read-time",children:[u," min read"]})]}),n.jsx("div",{className:"blog-read-link",children:"→"})]})]},l)})})}):n.jsx("div",{className:"blog-grid-container",children:n.jsx("div",{className:"blog-grid",children:n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"📝"}),n.jsx("div",{className:"empty-state-text",children:"No Stories Yet"}),n.jsx("div",{className:"empty-state-desc",children:"Check back soon for inspiring stories, style tips, and jewellery insights."})]})})}),i&&n.jsx(vx,{blog:i,onClose:()=>a(null)})]})}function vx({blog:e,onClose:t}){var a;m.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]);const r=Fe(e.image||e.thumbnail||e.featuredImage),o=e.date||e.createdAt,i=e.readTime||Math.ceil((((a=e.content)==null?void 0:a.length)||0)/200);return n.jsx("div",{className:"modal-overlay",onClick:t,children:n.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[r?n.jsx("img",{src:r,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):n.jsx("div",{style:{fontSize:"120px",opacity:.3},children:"📖"}),n.jsx("button",{className:"modal-close",onClick:t,children:"✕"})]}),n.jsxs("div",{className:"modal-body",children:[e.category&&n.jsx("div",{className:"modal-category",children:e.category}),n.jsx("h1",{className:"modal-title",children:e.title}),n.jsxs("div",{className:"modal-meta",children:[e.author&&n.jsxs("div",{className:"modal-author",children:[n.jsx("div",{className:"modal-author-avatar",children:e.author.charAt(0).toUpperCase()}),n.jsxs("div",{className:"modal-author-info",children:[n.jsx("div",{className:"modal-author-name",children:e.author}),n.jsx("div",{className:"modal-author-role",children:"Author"})]})]}),o&&n.jsx("div",{className:"modal-date",children:new Date(o).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}),i>0&&n.jsxs("div",{className:"modal-read-time",children:["⏱ ",i," min read"]})]}),e.content?n.jsx("div",{className:"modal-content-text",dangerouslySetInnerHTML:{__html:e.content}}):n.jsx("div",{className:"modal-content-text",children:e.excerpt||e.description||"No content available for this blog post."}),n.jsx("div",{style:{margin:"48px 0",padding:"28px 0",borderTop:`1.5px solid ${D.border}`,borderBottom:`1.5px solid ${D.border}`,textAlign:"center"},children:n.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"24px",color:D.textMuted},children:"✦"})}),n.jsxs("div",{style:{textAlign:"center",padding:"20px 0"},children:[n.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"13px",color:D.textMuted,lineHeight:1.8,marginBottom:"20px"},children:"Enjoyed this story? Share it with someone special or explore more from our journal."}),n.jsx("button",{onClick:t,style:{padding:"12px 32px",background:`linear-gradient(135deg, ${D.rose}, ${D.burgundy})`,border:"none",color:"white",fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:"700",cursor:"pointer",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"},onMouseEnter:s=>{s.target.style.transform="translateY(-2px)",s.target.style.boxShadow="0 12px 24px rgba(139, 70, 84, 0.2)"},onMouseLeave:s=>{s.target.style.transform="translateY(0)",s.target.style.boxShadow="none"},children:"Back to Stories"})]})]})]})})}function Fp({product:e,small:t=!1}){const r={textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",lavender:"#d4c4e0"},o=(e==null?void 0:e.type)||(e==null?void 0:e.category)||"",i=(e==null?void 0:e.metal_type)||"",a=(e==null?void 0:e.diamond_quality)||"",s=(e==null?void 0:e.gender)||"",l=(e==null?void 0:e.totalQuantity)??(e==null?void 0:e.quantity)??"",d={ring:"◯",necklace:"◇",earring:"◈",bracelet:"⌀",bangle:"○",pendant:"◆"},c=Object.keys(d).find(g=>o.toLowerCase().includes(g)),u=d[c]||"◇";return t?n.jsxs("div",{style:{width:"100%",height:"100%",background:`linear-gradient(160deg, ${r.blush}20, ${r.champagne}15)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,position:"relative",overflow:"hidden"},children:[n.jsx("style",{children:`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .placeholder-icon {
            animation: float 3s ease-in-out infinite;
          }
        `}),n.jsx("div",{style:{position:"absolute",width:80,height:80,borderRadius:"50%",border:`1px solid ${r.rose}20`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),n.jsx("div",{style:{position:"absolute",width:120,height:120,borderRadius:"50%",border:`1px solid ${r.rose}10`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),n.jsx("span",{className:"placeholder-icon",style:{color:r.rose,fontSize:32,zIndex:1,opacity:.8},children:u}),n.jsx("span",{style:{color:r.burgundy,fontFamily:"'Cormorant Garamond', serif",fontSize:10,letterSpacing:"2px",zIndex:1,fontWeight:300,opacity:.7,textTransform:"uppercase"},children:"ARKE"}),n.jsx("div",{style:{position:"absolute",bottom:12,width:20,height:2,background:`linear-gradient(90deg, transparent, ${r.rose}, transparent)`,borderRadius:"1px",opacity:.5,animation:"shimmer 2s infinite"}}),n.jsx("style",{children:`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `})]}):n.jsxs("div",{style:{width:"100%",height:"100%",background:`linear-gradient(160deg, ${r.blush}15 0%, ${r.champagne}10 60%, ${r.lavender}8 100%)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:"28px 20px",position:"relative",overflow:"hidden",boxSizing:"border-box"},children:[n.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .placeholder-corner {
          position: absolute;
          width: 20px;
          height: 20px;
        }
      `}),[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([g,f],j)=>n.jsx("div",{className:"placeholder-corner",style:{[g]:12,[f]:12,...g==="top"&&f==="left"?{borderTop:`1.5px solid ${r.rose}40`,borderLeft:`1.5px solid ${r.rose}40`}:g==="top"&&f==="right"?{borderTop:`1.5px solid ${r.rose}40`,borderRight:`1.5px solid ${r.rose}40`}:g==="bottom"&&f==="left"?{borderBottom:`1.5px solid ${r.rose}40`,borderLeft:`1.5px solid ${r.rose}40`}:{borderBottom:`1.5px solid ${r.rose}40`,borderRight:`1.5px solid ${r.rose}40`}}},j)),n.jsx("div",{style:{position:"absolute",width:200,height:200,borderRadius:"50%",border:`1px solid ${r.rose}15`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),n.jsx("div",{style:{position:"absolute",width:140,height:140,borderRadius:"50%",border:`1px solid ${r.rose}20`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),n.jsx("div",{style:{position:"absolute",width:80,height:80,borderRadius:"50%",border:`1px solid ${r.rose}25`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),n.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:12,letterSpacing:"3px",color:r.rose,textTransform:"uppercase",zIndex:1,fontWeight:300,opacity:.7},children:"ARKE"}),n.jsxs("div",{style:{textAlign:"center",zIndex:1,flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14},children:[n.jsx("div",{style:{fontSize:48,color:r.rose,lineHeight:1,opacity:.8,animation:"float 4s ease-in-out infinite"},children:u}),o&&n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:r.burgundy,fontWeight:600,opacity:.8},children:o}),n.jsx("div",{style:{width:36,height:1.5,background:`linear-gradient(90deg, transparent, ${r.rose}60, transparent)`,margin:"4px 0"}}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,width:"100%",padding:"0 12px"},children:[["Metal",i],["Diamond",a],["For",s],["Stock",l!==""?l>0?`${l} available`:"Out of stock":""]].filter(([,g])=>g).map(([g,f])=>n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 8px",background:`${r.rose}10`,borderRadius:"4px",border:`0.5px solid ${r.rose}25`},children:[n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,letterSpacing:"1px",color:r.textMuted,textTransform:"uppercase",fontWeight:600},children:g}),n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,color:g==="Stock"?l>0?"#70c878":"#d97070":r.burgundy,letterSpacing:"0.5px",fontWeight:600},children:f})]},g))})]}),n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 14px",border:`1.5px solid ${r.rose}40`,borderRadius:"20px",background:`${r.rose}8`,zIndex:1},children:[n.jsx("div",{style:{width:5,height:5,borderRadius:"50%",background:r.rose,animation:"pulse 2s infinite",opacity:.8}}),n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:8,letterSpacing:"1.2px",color:r.rose,textTransform:"uppercase",fontWeight:600,opacity:.8},children:"Loading Image"})]})]})}const b={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",success:"#70c878",error:"#d97070",gold:"#c9a96e"},Lo=[{id:1,label:"Shipping",icon:"📍"},{id:2,label:"Payment",icon:"💳"},{id:3,label:"Review",icon:"✦"}],Mp="arke_saved_addresses",wx={firstName:"",lastName:"",email:"",phone:"",address:"",apartment:"",city:"",state:"",pincode:"",saveAddress:!1},br=e=>e?String(typeof e=="string"||typeof e=="number"?e:e._id||e.id||e.productId||e.product_id||""):"",jx=e=>{var t;return br(e==null?void 0:e.product)||br(e==null?void 0:e.productId)||br(e==null?void 0:e.product_id)||br(e==null?void 0:e.productID)||br((t=e==null?void 0:e.variant)==null?void 0:t.productId)||br(e==null?void 0:e.id)||br(e==null?void 0:e._id)},kx=e=>e!=null&&e.product&&typeof e.product=="object"?e.product:e!=null&&e.productId&&typeof e.productId=="object"?e.productId:e||{},Sx=e=>e.map(t=>{const r=kx(t),o=jx(t),i=Math.max(1,Number(t.quantity||t.qty||1)),a=Number(r.price||r.salePrice||t.price||t.salePrice||0),s=Mr(r);return o?{productId:o,product:o,product_id:o,quantity:i,qty:i,price:a,name:r.name||r.title||t.name||"Product",image:s||void 0}:null}).filter(Boolean),Cx=()=>{try{return JSON.parse(localStorage.getItem("arke_user"))||{}}catch{return{}}},Wo=()=>{const e=Cx(),[t="",...r]=String(e.name||"").trim().split(/\s+/).filter(Boolean);return{...wx,firstName:e.firstname||e.firstName||t,lastName:e.lastname||e.lastName||r.join(" "),email:e.email||"",phone:e.phone||e.mobile||""}},Rp=()=>{try{const e=JSON.parse(localStorage.getItem(Mp));return Array.isArray(e)?e.filter(Boolean):[]}catch{return[]}},$x=e=>{if(!e.saveAddress)return[];const t={id:`${Date.now()}`,firstName:e.firstName.trim(),lastName:e.lastName.trim(),email:e.email.trim(),phone:e.phone.trim(),address:e.address.trim(),apartment:e.apartment.trim(),city:e.city.trim(),state:e.state.trim(),pincode:e.pincode.trim(),saveAddress:!1},r=i=>[i.address,i.apartment,i.city,i.state,i.pincode,i.phone].filter(Boolean).join("|").toLowerCase(),o=[t,...Rp().filter(i=>r(i)!==r(t))].slice(0,4);return localStorage.setItem(Mp,JSON.stringify(o)),o};function zx({isOpen:e,onClose:t,items:r,subtotal:o,discountAmount:i,shipping:a,total:s,appliedCoupon:l,clearCart:d}){const c=qe(),u=m.useRef(null),{success:g,error:f}=_r(),[j,$]=m.useState(1),[S,w]=m.useState(!1),[x,p]=m.useState(!1),[h,P]=m.useState(""),[E,y]=m.useState(!1),[v,z]=m.useState({}),[N,C]=m.useState({}),[W,U]=m.useState([]),[ie,pe]=m.useState(""),[X,ae]=m.useState(Wo),[te,T]=m.useState({method:"card",cardNumber:"",cardName:"",expiry:"",cvv:"",upiId:""});m.useEffect(()=>{if(e){const Y=Rp();U(Y),pe(""),ae(xe=>xe.address||xe.city||xe.pincode?xe:Y[0]?{...Y[0],saveAddress:!1}:Wo()),document.body.style.overflow="hidden",setTimeout(()=>y(!0),50)}else y(!1),document.body.style.overflow="";return()=>{document.body.style.overflow=""}},[e]),m.useEffect(()=>{const Y=xe=>{xe.key==="Escape"&&!S&&L()};return window.addEventListener("keydown",Y),()=>window.removeEventListener("keydown",Y)},[S]);const L=()=>{S||(y(!1),setTimeout(()=>{t(),$(1),p(!1),z({}),C({})},300))},B=Y=>{Y.target===Y.currentTarget&&!S&&L()},de=()=>{const Y={};return X.firstName.trim()||(Y.firstName="First name is required"),X.lastName.trim()||(Y.lastName="Last name is required"),X.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(X.email)||(Y.email="Invalid email format"):Y.email="Email is required",X.phone.trim()?/^[6-9]\d{9}$/.test(X.phone.replace(/\s/g,""))||(Y.phone="Invalid phone number"):Y.phone="Phone is required",X.address.trim()||(Y.address="Address is required"),X.city.trim()||(Y.city="City is required"),X.state.trim()||(Y.state="State is required"),X.pincode.trim()?/^\d{6}$/.test(X.pincode)||(Y.pincode="Invalid pincode"):Y.pincode="Pincode is required",z(Y),C(xe=>({...xe,...Object.fromEntries(Object.keys(Y).map(yr=>[yr,!0]))})),Object.keys(Y).length===0},ve=()=>{const Y={};if(te.method==="card"){const xe=te.cardNumber.replace(/\s/g,"");xe?xe.length<16&&(Y.cardNumber="Invalid card number"):Y.cardNumber="Card number is required",te.cardName.trim()||(Y.cardName="Name on card is required"),te.expiry.trim()?/^\d{2}\/\d{2}$/.test(te.expiry)||(Y.expiry="Use MM/YY format"):Y.expiry="Expiry is required",te.cvv.trim()?/^\d{3,4}$/.test(te.cvv)||(Y.cvv="Invalid CVV"):Y.cvv="CVV is required"}else te.method==="upi"&&(te.upiId.trim()?te.upiId.includes("@")||(Y.upiId="Invalid UPI ID"):Y.upiId="UPI ID is required");return z(Y),C(xe=>({...xe,...Object.fromEntries(Object.keys(Y).map(yr=>[yr,!0]))})),Object.keys(Y).length===0},St=()=>{j===1&&!de()||j===2&&!ve()||(z({}),C({}),$(Y=>Math.min(Y+1,3)))},Et=()=>{z({}),C({}),$(Y=>Math.max(Y-1,1))},jn=Y=>{pe(""),ae(Y)},It=Y=>{pe(Y.id),z({}),C({}),ae({...Wo(),...Y,saveAddress:!1})},Br=()=>{pe(""),z({}),C({}),ae(Wo())},_p=async()=>{var Y,xe,yr;try{const Ht=Sx(r);if(Ht.length===0||Ht.length!==r.length)throw new Error("Some cart items are missing product details. Please refresh the cart and try again.");w(!0);const Yi={firstName:X.firstName.trim(),lastName:X.lastName.trim(),name:`${X.firstName} ${X.lastName}`.trim(),email:X.email.trim(),phone:X.phone.trim(),address:X.address.trim(),apartment:X.apartment.trim(),city:X.city.trim(),state:X.state.trim(),pincode:X.pincode.trim()},Dp={products:Ht,items:Ht,orderItems:Ht,shippingAddress:Yi,address:Yi,customerDetails:Yi,paymentMethod:te.method,payment:{method:te.method},subtotal:o,discountAmount:i,shipping:a,totalAmount:s,total:s,couponCode:(l==null?void 0:l.code)||(l==null?void 0:l.offercode)||void 0},yo=await fetch(`${gn}/place-order`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${localStorage.getItem("arke_token")}`,"ngrok-skip-browser-warning":"true"},body:JSON.stringify(Dp)});if(!yo.ok){const Op=await yo.json().catch(()=>({}));throw new Error(Op.message||`Order failed (${yo.status})`)}const $e=await yo.json();if(($e==null?void 0:$e.success)===!1)throw new Error($e.message||"Order failed. Please try again.");X.saveAddress&&U($x(X));const Up=((Y=$e==null?void 0:$e.order)==null?void 0:Y.orderNumber)||($e==null?void 0:$e.orderNumber)||((xe=$e==null?void 0:$e.data)==null?void 0:xe.orderNumber)||((yr=$e==null?void 0:$e.order)!=null&&yr._id?"ARK-"+$e.order._id.slice(-6).toUpperCase():null)||($e!=null&&$e._id?"ARK-"+$e._id.slice(-6).toUpperCase():null)||"ARK-"+Date.now().toString(36).toUpperCase();P(Up),p(!0),g("Order placed successfully! 🎉"),d&&d()}catch(Ht){console.error("handlePlaceOrder error:",Ht),f(Ht.message||"Failed to place order. Please try again.")}finally{w(!1)}},Bp=Y=>Y.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim(),Ap=Y=>{const xe=Y.replace(/\D/g,"").slice(0,4);return xe.length>=3?xe.slice(0,2)+"/"+xe.slice(2):xe};return e?n.jsxs("div",{onClick:B,style:{position:"fixed",inset:0,zIndex:1e4,display:"flex",alignItems:"center",justifyContent:"center",background:E?"rgba(42,42,42,0.65)":"rgba(42,42,42,0)",backdropFilter:E?"blur(14px)":"blur(0px)",WebkitBackdropFilter:E?"blur(14px)":"blur(0px)",transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",padding:20},children:[n.jsx("style",{children:`
        @keyframes modalUp {
          from { opacity:0; transform:translateY(48px) scale(0.94); }
          to   { opacity:1; transform:translateY(0) scale(1); }
        }
        @keyframes floatUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes fadeInScale {
          from { opacity:0; transform:scale(0.75); }
          to   { opacity:1; transform:scale(1); }
        }
        @keyframes checkDraw {
          from { stroke-dashoffset:56; }
          to   { stroke-dashoffset:0; }
        }
        @keyframes confettiFall {
          0%   { transform:translateY(0) rotate(0deg) scale(1); opacity:1; }
          100% { transform:translateY(-120px) rotate(720deg) scale(0.4); opacity:0; }
        }
        @keyframes pulseRing {
          0%,100% { transform:scale(1); box-shadow:0 0 0 0 rgba(232,180,196,0.4); }
          50%     { transform:scale(1.06); box-shadow:0 0 0 8px rgba(232,180,196,0); }
        }
        @keyframes spinLoader {
          to { transform:rotate(360deg); }
        }
        @keyframes progressFill {
          from { width:0%; }
          to   { width:100%; }
        }
        @keyframes slideRight {
          from { opacity:0; transform:translateX(28px); }
          to   { opacity:1; transform:translateX(0); }
        }

        .modal-scroll::-webkit-scrollbar { width:5px; }
        .modal-scroll::-webkit-scrollbar-track { background:transparent; }
        .modal-scroll::-webkit-scrollbar-thumb {
          background:${b.border}; border-radius:3px;
        }
        .modal-scroll::-webkit-scrollbar-thumb:hover {
          background:${b.rose};
        }

        .co-input {
          width:100%;
          background:${b.blush}18;
          border:1.5px solid ${b.border};
          color:${b.text};
          padding:13px 15px;
          font-family:'Poppins',sans-serif;
          font-size:13px;
          outline:none;
          border-radius:8px;
          transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          box-sizing:border-box;
        }
        .co-input:focus {
          border-color:${b.rose};
          background:${b.blush}28;
          box-shadow:0 0 0 4px ${b.rose}18;
        }
        .co-input.err {
          border-color:${b.error};
          background:${b.error}08;
        }
        .co-input::placeholder { color:${b.textMuted}; font-size:12px; }

        .pm-card {
          cursor:pointer;
          border:1.5px solid ${b.border};
          border-radius:10px;
          padding:15px 18px;
          display:flex;
          align-items:center;
          gap:14px;
          transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          background:${b.surface};
          user-select:none;
        }
        .pm-card:hover {
          border-color:${b.rose};
          transform:translateY(-2px);
          box-shadow:0 6px 20px ${b.rose}22;
        }
        .pm-card.active {
          border-color:${b.burgundy};
          background:linear-gradient(135deg,${b.blush}22,${b.champagne}14);
          box-shadow:0 4px 18px ${b.rose}28;
        }

        .step-slide { animation:slideRight 0.38s cubic-bezier(0.34,1.56,0.64,1); }

        @media (max-width:680px) {
          .co-two-col { grid-template-columns:1fr !important; }
          .co-modal { width:100% !important; max-height:95vh !important; }
          .co-body { padding:18px !important; }
          .co-head { padding:18px !important; }
          .co-foot { padding:16px 18px !important; }
        }
      `}),n.jsx("div",{ref:u,className:"co-modal",style:{width:"100%",maxWidth:x?520:920,maxHeight:"92vh",background:b.bg,borderRadius:18,overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:`0 32px 90px rgba(0,0,0,0.18), 0 0 0 1px ${b.border}`,transform:E?"translateY(0) scale(1)":"translateY(48px) scale(0.94)",opacity:E?1:0,transition:"all 0.45s cubic-bezier(0.34,1.56,0.64,1)"},children:x?n.jsx(Fx,{orderId:h,onClose:L,navigate:c}):n.jsxs(n.Fragment,{children:[n.jsx(Px,{currentStep:j,onClose:L,isProcessing:S}),n.jsxs("div",{className:"modal-scroll co-body",style:{flex:1,overflowY:"auto",padding:"32px 40px"},children:[j===1&&n.jsx(Tx,{info:X,onChange:jn,errors:v,touched:N,onBlur:Y=>C(xe=>({...xe,[Y]:!0})),savedAddresses:W,selectedAddressId:ie,onSelectSavedAddress:It,onUseNewAddress:Br}),j===2&&n.jsx(Ex,{info:te,onChange:T,errors:v,touched:N,onBlur:Y=>C(xe=>({...xe,[Y]:!0})),formatCardNumber:Bp,formatExpiry:Ap}),j===3&&n.jsx(Ix,{items:r,shippingInfo:X,paymentInfo:te,subtotal:o,discountAmount:i,shipping:a,total:s,appliedCoupon:l})]}),n.jsx(Nx,{currentStep:j,onBack:Et,onNext:St,onPlaceOrder:_p,isProcessing:S,total:s})]})})]}):null}function Px({currentStep:e,onClose:t,isProcessing:r}){var o;return n.jsxs("div",{className:"co-head",style:{padding:"26px 40px 22px",borderBottom:`1.5px solid ${b.border}`,background:b.surface,flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:22},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:5},children:[n.jsx("div",{style:{width:22,height:1.5,background:`linear-gradient(90deg,${b.rose},${b.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",color:b.burgundy,fontWeight:700},children:"Secure Checkout"})]}),n.jsx("h2",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:300,margin:0,background:`linear-gradient(135deg,${b.text},${b.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:(o=Lo.find(i=>i.id===e))==null?void 0:o.label})]}),n.jsx("button",{onClick:t,disabled:r,style:{width:38,height:38,borderRadius:"50%",border:`1.5px solid ${b.border}`,background:b.surface,color:b.textMuted,cursor:r?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",flexShrink:0},onMouseEnter:i=>{r||(i.currentTarget.style.borderColor=b.rose,i.currentTarget.style.color=b.burgundy,i.currentTarget.style.transform="rotate(90deg)")},onMouseLeave:i=>{i.currentTarget.style.borderColor=b.border,i.currentTarget.style.color=b.textMuted,i.currentTarget.style.transform="rotate(0deg)"},children:"✕"})]}),n.jsx("div",{style:{display:"flex",alignItems:"center"},children:Lo.map((i,a)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",flex:a<Lo.length-1?1:"none"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[n.jsx("div",{style:{width:34,height:34,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontFamily:"'Poppins',sans-serif",fontWeight:700,transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",flexShrink:0,...e>i.id?{background:`linear-gradient(135deg,${b.success},#59b661)`,color:"white",boxShadow:`0 4px 12px ${b.success}44`}:e===i.id?{background:`linear-gradient(135deg,${b.rose},${b.burgundy})`,color:"white",boxShadow:`0 4px 14px ${b.rose}44`,animation:"pulseRing 2s ease-in-out infinite"}:{background:`${b.blush}28`,color:b.textMuted,border:`1.5px solid ${b.border}`}},children:e>i.id?"✓":i.icon}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,fontWeight:e===i.id?700:500,color:e>=i.id?b.text:b.textMuted,letterSpacing:"0.4px",whiteSpace:"nowrap",transition:"all 0.3s"},children:i.label})]}),a<Lo.length-1&&n.jsx("div",{style:{flex:1,height:2,margin:"0 14px",borderRadius:1,background:b.border,overflow:"hidden"},children:n.jsx("div",{style:{height:"100%",width:e>i.id?"100%":"0%",background:`linear-gradient(90deg,${b.rose},${b.burgundy})`,borderRadius:1,transition:"width 0.6s cubic-bezier(0.34,1.56,0.64,1)"}})})]},i.id))})]})}function Nx({currentStep:e,onBack:t,onNext:r,onPlaceOrder:o,isProcessing:i,total:a}){return n.jsxs("div",{className:"co-foot",style:{padding:"18px 40px",borderTop:`1.5px solid ${b.border}`,background:b.surface,display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,flexShrink:0},children:[e>1?n.jsx("button",{onClick:t,disabled:i,style:{padding:"12px 26px",background:"transparent",border:`1.5px solid ${b.border}`,color:b.text,fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1px",textTransform:"uppercase",cursor:i?"not-allowed":"pointer",borderRadius:8,fontWeight:600,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:s=>{i||(s.currentTarget.style.borderColor=b.rose,s.currentTarget.style.color=b.burgundy)},onMouseLeave:s=>{s.currentTarget.style.borderColor=b.border,s.currentTarget.style.color=b.text},children:"← Back"}):n.jsx("div",{}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,opacity:.6},children:[n.jsx("span",{style:{fontSize:12},children:"🔒"}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,color:b.textMuted,letterSpacing:"0.5px"},children:"SSL Encrypted"})]}),e<3?n.jsx("button",{onClick:r,style:{padding:"13px 38px",background:`linear-gradient(135deg,${b.rose},${b.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:700,borderRadius:8,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:`0 4px 16px ${b.rose}32`},onMouseEnter:s=>{s.currentTarget.style.transform="translateY(-2px)",s.currentTarget.style.boxShadow=`0 8px 24px ${b.rose}44`},onMouseLeave:s=>{s.currentTarget.style.transform="translateY(0)",s.currentTarget.style.boxShadow=`0 4px 16px ${b.rose}32`},children:"Continue →"}):n.jsx("button",{onClick:o,disabled:i,style:{padding:"13px 32px",background:i?b.textMuted:`linear-gradient(135deg,${b.rose},${b.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:i?"not-allowed":"pointer",fontWeight:700,borderRadius:8,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:i?"none":`0 4px 16px ${b.rose}32`,display:"flex",alignItems:"center",gap:10},onMouseEnter:s=>{i||(s.currentTarget.style.transform="translateY(-2px)",s.currentTarget.style.boxShadow=`0 8px 24px ${b.rose}44`)},onMouseLeave:s=>{i||(s.currentTarget.style.transform="translateY(0)",s.currentTarget.style.boxShadow=`0 4px 16px ${b.rose}32`)},children:i?n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{width:15,height:15,border:"2px solid rgba(255,255,255,0.35)",borderTopColor:"white",borderRadius:"50%",animation:"spinLoader 0.75s linear infinite"}}),"Processing…"]}):`Place Order  ₹${a.toLocaleString("en-IN")}`})]})}function Tx({info:e,onChange:t,errors:r,touched:o,onBlur:i,savedAddresses:a,selectedAddressId:s,onSelectSavedAddress:l,onUseNewAddress:d}){const c=(u,g)=>t(f=>({...f,[u]:g}));return n.jsxs("div",{className:"step-slide",children:[a.length>0&&n.jsxs("div",{style:{marginBottom:24},children:[n.jsx(Cr,{text:"Saved Addresses"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))",gap:12},children:[a.map(u=>{const g=s===u.id;return n.jsxs("button",{type:"button",onClick:()=>l(u),style:{textAlign:"left",border:`1.5px solid ${g?b.burgundy:b.border}`,background:g?`linear-gradient(135deg,${b.blush}28,${b.champagne}18)`:b.surface,borderRadius:10,padding:"14px 16px",cursor:"pointer",transition:"all 0.25s ease",boxShadow:g?`0 8px 22px ${b.rose}22`:"none"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10,marginBottom:8},children:[n.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:700,color:b.text},children:[u.firstName," ",u.lastName]}),g&&n.jsx("span",{style:{color:b.burgundy,fontFamily:"'Poppins',sans-serif",fontSize:10,fontWeight:700},children:"✓"})]}),n.jsxs("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:b.textMuted,lineHeight:1.55,margin:0},children:[u.address,u.apartment?`, ${u.apartment}`:"",n.jsx("br",{}),u.city,", ",u.state," ",u.pincode]})]},u.id)}),n.jsx("button",{type:"button",onClick:d,style:{border:`1.5px dashed ${b.rose}`,background:`${b.blush}10`,color:b.burgundy,borderRadius:10,padding:"14px 16px",cursor:"pointer",fontFamily:"'Poppins',sans-serif",fontSize:11,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase"},children:"+ New Address"})]})]}),n.jsx(Cr,{text:s?"Edit Delivery Details":"Delivery Details"}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},className:"co-two-col",children:[n.jsx(Ke,{label:"First Name",placeholder:"Arya",icon:"👤",value:e.firstName,onChange:u=>c("firstName",u),error:r.firstName,touched:o.firstName,onBlur:()=>i("firstName")}),n.jsx(Ke,{label:"Last Name",placeholder:"Sharma",value:e.lastName,onChange:u=>c("lastName",u),error:r.lastName,touched:o.lastName,onBlur:()=>i("lastName")}),n.jsx(Ke,{label:"Email Address",placeholder:"you@example.com",icon:"✉",type:"email",value:e.email,onChange:u=>c("email",u),error:r.email,touched:o.email,onBlur:()=>i("email"),full:!0}),n.jsx(Ke,{label:"Phone Number",placeholder:"9876543210",icon:"📱",value:e.phone,onChange:u=>c("phone",u.replace(/\D/g,"").slice(0,10)),error:r.phone,touched:o.phone,onBlur:()=>i("phone"),full:!0}),n.jsx(Ke,{label:"Street Address",placeholder:"123, Rose Garden Lane",icon:"🏠",value:e.address,onChange:u=>c("address",u),error:r.address,touched:o.address,onBlur:()=>i("address"),full:!0}),n.jsx(Ke,{label:"Apartment / Suite (Optional)",placeholder:"Apt 4B, Floor 2",value:e.apartment,onChange:u=>c("apartment",u),full:!0}),n.jsx(Ke,{label:"City",placeholder:"Mumbai",value:e.city,onChange:u=>c("city",u),error:r.city,touched:o.city,onBlur:()=>i("city")}),n.jsx(Ke,{label:"State",placeholder:"Maharashtra",value:e.state,onChange:u=>c("state",u),error:r.state,touched:o.state,onBlur:()=>i("state")}),n.jsx(Ke,{label:"Pincode",placeholder:"400001",icon:"📮",value:e.pincode,onChange:u=>c("pincode",u.replace(/\D/g,"").slice(0,6)),error:r.pincode,touched:o.pincode,onBlur:()=>i("pincode")}),n.jsx("div",{style:{gridColumn:"1 / -1",marginTop:4},children:n.jsxs("label",{style:{display:"flex",alignItems:"center",gap:12,cursor:"pointer",padding:"11px 15px",borderRadius:8,border:`1.5px solid ${e.saveAddress?b.rose:b.border}`,background:e.saveAddress?`${b.blush}20`:"transparent",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsx("div",{style:{width:20,height:20,borderRadius:4,border:`2px solid ${e.saveAddress?b.burgundy:b.border}`,background:e.saveAddress?`linear-gradient(135deg,${b.rose},${b.burgundy})`:"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s",flexShrink:0},children:e.saveAddress&&n.jsx("span",{style:{color:"white",fontSize:11},children:"✓"})}),n.jsx("input",{type:"checkbox",checked:e.saveAddress,onChange:u=>c("saveAddress",u.target.checked),style:{display:"none"}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:b.text,fontWeight:500},children:"Save this address for future orders"})]})})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:22,padding:"13px 17px",background:`linear-gradient(135deg,${b.blush}14,${b.champagne}12)`,borderRadius:8,border:`1px solid ${b.border}`},children:[n.jsx("span",{style:{fontSize:17},children:"🔒"}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:b.textMuted},children:"Your information is encrypted and secure. We never share your details."})]})]})}function Ex({info:e,onChange:t,errors:r,touched:o,onBlur:i,formatCardNumber:a,formatExpiry:s}){const l=(c,u)=>t(g=>({...g,[c]:u})),d=[{id:"card",label:"Credit / Debit Card",icon:"💳",sub:"Visa · Mastercard · Rupay"},{id:"upi",label:"UPI Payment",icon:"📲",sub:"GPay · PhonePe · Paytm"},{id:"cod",label:"Cash on Delivery",icon:"💵",sub:"Pay when you receive"}];return n.jsxs("div",{className:"step-slide",children:[n.jsx(Cr,{text:"Select Payment Method"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:26},children:d.map(c=>n.jsxs("div",{className:`pm-card ${e.method===c.id?"active":""}`,onClick:()=>l("method",c.id),children:[n.jsx("div",{style:{width:42,height:42,borderRadius:"50%",background:e.method===c.id?`linear-gradient(135deg,${b.rose},${b.burgundy})`:`${b.blush}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,transition:"all 0.3s",flexShrink:0},children:c.icon}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:600,color:b.text},children:c.label}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:b.textMuted},children:c.sub})]}),n.jsx("div",{style:{width:20,height:20,borderRadius:"50%",border:`2px solid ${e.method===c.id?b.burgundy:b.border}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s",flexShrink:0},children:e.method===c.id&&n.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:`linear-gradient(135deg,${b.rose},${b.burgundy})`,animation:"fadeInScale 0.25s cubic-bezier(0.34,1.56,0.64,1)"}})})]},c.id))}),e.method==="card"&&n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,animation:"floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1)"},className:"co-two-col",children:[n.jsx(Ke,{label:"Card Number",placeholder:"1234 5678 9012 3456",icon:"💳",value:e.cardNumber,onChange:c=>l("cardNumber",a(c)),error:r.cardNumber,touched:o.cardNumber,onBlur:()=>i("cardNumber"),maxLength:19,full:!0}),n.jsx(Ke,{label:"Name on Card",placeholder:"ARYA SHARMA",value:e.cardName,onChange:c=>l("cardName",c.toUpperCase()),error:r.cardName,touched:o.cardName,onBlur:()=>i("cardName"),full:!0}),n.jsx(Ke,{label:"Expiry (MM/YY)",placeholder:"MM/YY",value:e.expiry,onChange:c=>l("expiry",s(c)),error:r.expiry,touched:o.expiry,onBlur:()=>i("expiry"),maxLength:5}),n.jsx(Ke,{label:"CVV",placeholder:"•••",type:"password",value:e.cvv,onChange:c=>l("cvv",c.replace(/\D/g,"").slice(0,4)),error:r.cvv,touched:o.cvv,onBlur:()=>i("cvv"),maxLength:4})]}),e.method==="upi"&&n.jsx("div",{style:{animation:"floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1)"},children:n.jsx(Ke,{label:"UPI ID",placeholder:"yourname@paytm",icon:"📲",value:e.upiId,onChange:c=>l("upiId",c),error:r.upiId,touched:o.upiId,onBlur:()=>i("upiId"),full:!0})}),e.method==="cod"&&n.jsxs("div",{style:{padding:"18px 22px",background:`linear-gradient(135deg,${b.champagne}20,${b.blush}14)`,borderRadius:10,border:`1.5px solid ${b.champagne}44`,animation:"floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8},children:[n.jsx("span",{style:{fontSize:20},children:"📦"}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:600,color:b.text},children:"Cash on Delivery"})]}),n.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:b.textMuted,margin:0,lineHeight:1.65},children:"Pay with cash at your door. An additional ₹49 COD handling fee applies. Please keep exact change ready."})]}),n.jsx("div",{style:{display:"flex",gap:10,marginTop:22,flexWrap:"wrap"},children:["🔒 SSL Encrypted","🛡️ Secure Payment","✓ PCI Compliant"].map(c=>n.jsx("span",{style:{padding:"7px 13px",background:`${b.blush}14`,borderRadius:20,border:`1px solid ${b.border}`,fontFamily:"'Poppins',sans-serif",fontSize:9,color:b.textMuted,fontWeight:500,letterSpacing:"0.3px"},children:c},c))})]})}function Ix({items:e,shippingInfo:t,paymentInfo:r,subtotal:o,discountAmount:i,shipping:a,total:s,appliedCoupon:l}){const d={card:"Credit / Debit Card",upi:"UPI Payment",cod:"Cash on Delivery"};return n.jsxs("div",{className:"step-slide",children:[n.jsx(Cr,{text:"Items in Your Order"}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,maxHeight:210,overflowY:"auto",paddingRight:6,marginBottom:24},className:"modal-scroll",children:e.map((c,u)=>{const g=c.product||c,f=Mr(g),j=g.name||"Product",$=Number(g.price||0),S=c.quantity||1;return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:13,padding:"11px 14px",background:b.surface,borderRadius:8,border:`1px solid ${b.border}`,animation:`floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1) ${u*.08}s both`},children:[n.jsx("div",{style:{width:48,height:48,borderRadius:6,overflow:"hidden",background:`${b.blush}20`,flexShrink:0},children:f&&n.jsx("img",{src:f,alt:j,style:{width:"100%",height:"100%",objectFit:"cover"},onError:w=>w.target.style.display="none"})}),n.jsxs("div",{style:{flex:1,minWidth:0},children:[n.jsx("div",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:b.text,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:j}),n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:b.textMuted},children:["Qty: ",S]})]}),n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:700,color:b.burgundy,whiteSpace:"nowrap"},children:["₹",($*S).toLocaleString("en-IN")]})]},c._id||u)})}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:22},className:"co-two-col",children:[n.jsxs("div",{style:{padding:"18px 20px",background:b.surface,borderRadius:10,border:`1.5px solid ${b.border}`},children:[n.jsx(Cr,{text:"Deliver To",small:!0}),n.jsxs("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:b.text,fontWeight:600,margin:"0 0 4px"},children:[t.firstName," ",t.lastName]}),n.jsxs("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:b.textMuted,margin:0,lineHeight:1.6},children:[t.address,t.apartment?`, ${t.apartment}`:"",n.jsx("br",{}),t.city,", ",t.state," – ",t.pincode,n.jsx("br",{}),"📱 ",t.phone]})]}),n.jsxs("div",{style:{padding:"18px 20px",background:b.surface,borderRadius:10,border:`1.5px solid ${b.border}`},children:[n.jsx(Cr,{text:"Payment",small:!0}),n.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:b.text,fontWeight:600,margin:"0 0 4px"},children:d[r.method]}),r.method==="card"&&n.jsxs("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:b.textMuted,margin:0},children:["•••• •••• •••• ",r.cardNumber.replace(/\s/g,"").slice(-4)]}),r.method==="upi"&&n.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:b.textMuted,margin:0},children:r.upiId})]})]}),n.jsxs("div",{style:{padding:"22px 24px",background:`linear-gradient(135deg,${b.blush}14,${b.champagne}10)`,borderRadius:10,border:`1.5px solid ${b.border}`},children:[n.jsx(Cr,{text:"Price Summary",small:!0}),n.jsx(_o,{label:"Subtotal",value:`₹${o.toLocaleString("en-IN")}`}),i>0&&n.jsx(_o,{label:`Coupon (${((l==null?void 0:l.code)||(l==null?void 0:l.offercode)||"").toUpperCase()})`,value:`-₹${i.toLocaleString("en-IN")}`,green:!0}),n.jsx(_o,{label:"Shipping",value:a===0?"Free ✨":`₹${a}`,highlight:a===0}),r.method==="cod"&&n.jsx(_o,{label:"COD Fee",value:"₹49 (at delivery)",muted:!0}),n.jsx("div",{style:{borderTop:`1.5px solid ${b.border}`,margin:"12px 0 14px"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[n.jsx("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:b.text},children:"Total Amount"}),n.jsxs("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:30,fontWeight:600,background:`linear-gradient(135deg,${b.rose},${b.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:["₹",s.toLocaleString("en-IN")]})]})]})]})}function Fx({orderId:e,onClose:t,navigate:r}){const o=[b.rose,b.burgundy,b.champagne,b.blush,b.gold,b.success];return n.jsxs("div",{style:{padding:"56px 40px",textAlign:"center",position:"relative",overflow:"hidden"},children:[Array.from({length:28}).map((i,a)=>n.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${35+Math.random()*30}%`,width:`${4+Math.random()*9}px`,height:`${4+Math.random()*9}px`,borderRadius:Math.random()>.5?"50%":"2px",backgroundColor:o[Math.floor(Math.random()*o.length)],animation:`confettiFall ${1.2+Math.random()*1.4}s ease-out ${Math.random()*.8}s forwards`}},a)),n.jsx("div",{style:{width:96,height:96,borderRadius:"50%",background:`linear-gradient(135deg,${b.success}22,${b.success}10)`,border:`3px solid ${b.success}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 26px",animation:"fadeInScale 0.55s cubic-bezier(0.34,1.56,0.64,1)"},children:n.jsx("svg",{width:"48",height:"48",viewBox:"0 0 50 50",children:n.jsx("path",{d:"M13 27 L22 36 L38 16",fill:"none",stroke:b.success,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:56,animation:"checkDraw 0.55s 0.45s ease-out both"}})})}),n.jsx("h2",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:300,margin:"0 0 8px",background:`linear-gradient(135deg,${b.text},${b.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"floatUp 0.45s 0.35s cubic-bezier(0.34,1.56,0.64,1) both"},children:"Order Confirmed!"}),n.jsxs("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:b.textMuted,margin:"0 0 28px",lineHeight:1.7,animation:"floatUp 0.45s 0.45s cubic-bezier(0.34,1.56,0.64,1) both"},children:["Thank you for your purchase. Your order has been placed",n.jsx("br",{}),"and will be processed shortly."]}),n.jsxs("div",{style:{display:"inline-block",padding:"18px 38px",background:`linear-gradient(135deg,${b.blush}22,${b.champagne}15)`,borderRadius:12,border:`1.5px solid ${b.rose}44`,marginBottom:30,animation:"floatUp 0.45s 0.55s cubic-bezier(0.34,1.56,0.64,1) both"},children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",color:b.textMuted,marginBottom:5,fontWeight:600},children:"Order ID"}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:20,fontWeight:700,color:b.burgundy,letterSpacing:"2px"},children:e})]}),n.jsx("div",{style:{display:"flex",justifyContent:"center",gap:28,marginBottom:36,flexWrap:"wrap",animation:"floatUp 0.45s 0.65s cubic-bezier(0.34,1.56,0.64,1) both"},children:[{icon:"📧",text:"Confirmation email sent"},{icon:"📦",text:"Ships in 2-3 days"},{icon:"🚚",text:"Live tracking available"}].map((i,a)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[n.jsx("span",{style:{fontSize:15},children:i.icon}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:b.textMuted,fontWeight:500},children:i.text})]},a))}),n.jsxs("div",{style:{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",animation:"floatUp 0.45s 0.75s cubic-bezier(0.34,1.56,0.64,1) both"},children:[n.jsx("button",{onClick:()=>{t(),r("/products")},style:{padding:"13px 34px",background:`linear-gradient(135deg,${b.rose},${b.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:700,borderRadius:8,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:`0 4px 16px ${b.rose}32`},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-2px)",i.currentTarget.style.boxShadow=`0 8px 24px ${b.rose}44`},onMouseLeave:i=>{i.currentTarget.style.transform="translateY(0)",i.currentTarget.style.boxShadow=`0 4px 16px ${b.rose}32`},children:"Continue Shopping"}),n.jsx("button",{onClick:()=>{t(),r("/my-orders")},style:{padding:"13px 34px",background:"transparent",border:`1.5px solid ${b.rose}`,color:b.burgundy,fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:600,borderRadius:8,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:i=>{i.currentTarget.style.background=`linear-gradient(135deg,${b.rose},${b.burgundy})`,i.currentTarget.style.color="white",i.currentTarget.style.borderColor="transparent"},onMouseLeave:i=>{i.currentTarget.style.background="transparent",i.currentTarget.style.color=b.burgundy,i.currentTarget.style.borderColor=b.rose},children:"View Orders"})]})]})}function Ke({label:e,placeholder:t,value:r,onChange:o,error:i,touched:a,onBlur:s,type:l="text",icon:d,full:c,maxLength:u}){const g=i&&a;return n.jsxs("div",{style:{gridColumn:c?"1 / -1":void 0},children:[n.jsxs("label",{style:{display:"block",fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:g?b.error:b.textMuted,fontWeight:700,marginBottom:6,transition:"color 0.25s"},children:[d&&n.jsx("span",{style:{marginRight:5},children:d}),e]}),n.jsx("input",{type:l,placeholder:t,value:r,onChange:f=>o(f.target.value),onBlur:s,maxLength:u,className:`co-input${g?" err":""}`}),g&&n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:b.error,marginTop:4,fontWeight:500,animation:"floatUp 0.25s cubic-bezier(0.34,1.56,0.64,1)"},children:["✕ ",i]})]})}function Cr({text:e,small:t}){return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,marginBottom:t?13:18},children:[n.jsx("div",{style:{width:15,height:1.5,background:`linear-gradient(90deg,${b.rose},${b.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:t?9:10,letterSpacing:"1.5px",textTransform:"uppercase",color:b.burgundy,fontWeight:700},children:e})]})}function _o({label:e,value:t,green:r,highlight:o,muted:i}){return n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:9,alignItems:"center"},children:[n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:b.textMuted,fontWeight:500},children:e}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:r?b.success:o?b.burgundy:i?b.textMuted:b.text,fontWeight:r?700:600},children:t})]})}function Mx(){const e=qe(),{items:t,loading:r,removeFromCart:o,updateQuantity:i,clearCart:a}=bn(),{success:s,error:l}=_r(),[d,c]=m.useState([]),[u,g]=m.useState(""),[f,j]=m.useState(null),[$,S]=m.useState(""),[w,x]=m.useState(new Set),[p,h]=m.useState(new Set),[P,E]=m.useState(!1),y=m.useMemo(()=>!localStorage.getItem("arke_token"),[]);m.useEffect(()=>{window.scrollTo(0,0),(async()=>{})()},[]);const v=async(X,ae)=>{x(te=>new Set([...te,X]));try{await o(ae),s("Item removed from cart")}catch(te){l("Failed to remove item"),console.error(te)}finally{x(te=>{const T=new Set(te);return T.delete(X),T})}},z=async(X,ae,te)=>{if(!(te<1)){h(T=>new Set([...T,X]));try{await i(ae,te),s(`Quantity updated to ${te}`)}catch(T){l("Failed to update quantity"),console.error(T)}finally{h(T=>{const L=new Set(T);return L.delete(X),L})}}},N=t.reduce((X,ae)=>{const te=ae.product||ae,T=Number(te.price||te.salePrice||0);return X+T*(ae.quantity||1)},0),C=(()=>{if(!f)return 0;const X=Number(f.discountValue||f.offerValue||0);return(f.discountType||f.offertype||"flat")==="percentage"?Math.round(N*X/100):Math.min(X,N)})(),W=N>=999?0:99,U=N-C+W,ie=()=>{const X=u.trim().toUpperCase();if(!X){S("Please enter a coupon code");return}const ae=d.find(T=>(T.code||T.offercode||"").toUpperCase()===X);if(!ae){S("Invalid or expired coupon code"),j(null);return}if(ae.expiryDate&&new Date(ae.expiryDate)<new Date){S("This coupon has expired"),j(null);return}const te=Number(ae.minOrderAmount||ae.minOrder||0);if(N<te){S(`Minimum order ₹${te.toLocaleString("en-IN")} required`),j(null);return}j(ae),S(""),s("Coupon applied successfully!")},pe=()=>{j(null),g(""),S("")};return n.jsxs("div",{style:{background:b.bg,minHeight:"100vh",paddingTop:120},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes spin { to { transform:rotate(360deg); } }
        .cart-header  { animation:fadeInUp 0.8s cubic-bezier(0.34,1.56,0.64,1); }
        .cart-items   { animation:fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1); }
        .cart-sidebar { animation:fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1); }
        @media (max-width:1024px) { .cart-container { grid-template-columns:1fr!important; } }
        @media (max-width:768px)  {
          .cart-header { padding:40px 20px!important; }
          .cart-main   { padding:24px 20px!important; }
        }
      `}),n.jsx(Rx,{itemCount:t.length}),r?n.jsx(Ax,{}):y?n.jsx(Yd,{icon:"◇",title:"Sign in to view your cart",sub:"Your saved items will appear here",btn:"Sign In",onClick:()=>e("/")}):t.length===0?n.jsx(Yd,{icon:"◈",title:"Your cart is empty",sub:"Discover pieces crafted just for you",btn:"Shop Now",onClick:()=>e("/products")}):n.jsxs("div",{className:"cart-main",style:{padding:"48px 80px",display:"grid",gridTemplateColumns:"1fr 420px",gap:48,alignItems:"start"},children:[n.jsx(Lx,{items:t,removingItems:w,updatingQty:p,onRemove:v,onUpdateQty:z,navigate:e}),n.jsx(Bx,{subtotal:N,discountAmount:C,shipping:W,total:U,appliedCoupon:f,couponInput:u,couponError:$,onCouponChange:g,onApplyCoupon:ie,onRemoveCoupon:pe,onCouponErrorClear:()=>S(""),onCheckout:()=>E(!0)})]}),n.jsx(zx,{isOpen:P,onClose:()=>E(!1),items:t,subtotal:N,discountAmount:C,shipping:W,total:U,appliedCoupon:f,clearCart:a})]})}function Rx({itemCount:e}){return n.jsxs("div",{className:"cart-header",style:{padding:"60px 80px 40px",borderBottom:`1.5px solid ${b.border}`},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:14},children:[n.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(90deg,${b.rose},${b.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:b.burgundy,fontWeight:600},children:"Your Selection"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:20,flexWrap:"wrap"},children:[n.jsx("h1",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(36px,4vw,56px)",fontWeight:300,color:b.text,margin:0,background:`linear-gradient(135deg,${b.text},${b.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Shopping Cart"}),e>0&&n.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:b.textMuted,letterSpacing:1,fontWeight:500},children:[e," ",e===1?"item":"items"]})]})]})}function Lx({items:e,removingItems:t,updatingQty:r,onRemove:o,onUpdateQty:i,navigate:a}){return n.jsxs("div",{className:"cart-items",children:[n.jsx("div",{style:{display:"grid",gridTemplateColumns:"120px 1fr auto auto",gap:24,paddingBottom:16,borderBottom:`1.5px solid ${b.border}`,marginBottom:8},children:["Product","","Qty","Price"].map(s=>n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:b.textMuted,fontWeight:600},children:s},s||"details"))}),n.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.map(s=>{const l=s._id||s.id,d=s.product||s,c=d._id||d.id;return n.jsx(Wx,{item:s,isRemoving:t.has(l),isUpdatingQty:r.has(l),onRemove:()=>o(l,c),onUpdateQty:u=>i(l,c,u),navigate:a},l)})})]})}function Wx({item:e,isRemoving:t,isUpdatingQty:r,onRemove:o,onUpdateQty:i,navigate:a}){const s=e.product||{},l=Mr(s),d=s.name||"Unknown Product",c=Number(s.price||0),u=e.quantity||1,g=s._id||s.id;return n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"120px 1fr auto auto",gap:24,padding:"24px 0",borderBottom:`1px solid ${b.border}`,alignItems:"center",opacity:t?.5:1,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",pointerEvents:t?"none":"auto"},children:[n.jsx("div",{style:{width:120,height:140,flexShrink:0,overflow:"hidden",cursor:"pointer",borderRadius:6,backgroundColor:`${b.blush}20`,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onClick:()=>a(`/products/${g}`),onMouseEnter:f=>{f.currentTarget.style.boxShadow=`0 8px 20px ${b.rose}25`,f.currentTarget.style.transform="scale(1.02)"},onMouseLeave:f=>{f.currentTarget.style.boxShadow="none",f.currentTarget.style.transform="scale(1)"},children:l?n.jsx("img",{src:l,alt:d,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onError:f=>f.target.style.display="none",onMouseEnter:f=>f.target.style.transform="scale(1.08)",onMouseLeave:f=>f.target.style.transform="scale(1)"}):n.jsx(Fp,{product:s,small:!0})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:400,color:b.text,marginBottom:8,cursor:"pointer",lineHeight:1.3,transition:"color 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onClick:()=>a(`/product/${g}`),onMouseEnter:f=>f.currentTarget.style.color=b.burgundy,onMouseLeave:f=>f.currentTarget.style.color=b.text,children:d}),s.metal_type&&n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:b.textMuted,letterSpacing:.5,marginBottom:4},children:["Metal: ",s.metal_type]}),s.type&&n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:b.textMuted,letterSpacing:.5,marginBottom:12},children:s.type}),n.jsx("button",{onClick:o,disabled:t,style:{background:"none",border:"none",color:b.rose,cursor:t?"not-allowed":"pointer",fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",padding:0,transition:"color 0.2s",fontWeight:600},onMouseEnter:f=>!t&&(f.target.style.color=b.error),onMouseLeave:f=>!t&&(f.target.style.color=b.rose),children:t?"Removing…":"× Remove"})]}),n.jsx(_x,{qty:u,isUpdating:r,onUpdateQty:i}),n.jsxs("div",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:18,background:`linear-gradient(135deg,${b.rose},${b.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textAlign:"right",whiteSpace:"nowrap",fontWeight:400},children:["₹",(c*u).toLocaleString("en-IN")]})]})}function _x({qty:e,isUpdating:t,onUpdateQty:r}){return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:`${b.blush}20`,border:`1.5px solid ${b.border}`,borderRadius:6,padding:"4px 8px",opacity:t?.6:1,pointerEvents:t?"none":"auto",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsx("button",{onClick:()=>r(Math.max(1,e-1)),disabled:t||e<=1,style:{background:"none",border:"none",color:b.rose,cursor:t||e<=1?"not-allowed":"pointer",fontSize:16,padding:"2px 6px",transition:"color 0.2s",fontWeight:600},onMouseEnter:o=>!t&&e>1&&(o.target.style.color=b.burgundy),onMouseLeave:o=>o.target.style.color=b.rose,children:"−"}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:b.text,minWidth:24,textAlign:"center",fontWeight:700},children:e}),n.jsx("button",{onClick:()=>r(e+1),disabled:t,style:{background:"none",border:"none",color:b.rose,cursor:t?"not-allowed":"pointer",fontSize:16,padding:"2px 6px",transition:"color 0.2s",fontWeight:600},onMouseEnter:o=>!t&&(o.target.style.color=b.burgundy),onMouseLeave:o=>o.target.style.color=b.rose,children:"+"})]})}function Bx({subtotal:e,discountAmount:t,shipping:r,total:o,appliedCoupon:i,couponInput:a,couponError:s,onCouponChange:l,onApplyCoupon:d,onRemoveCoupon:c,onCouponErrorClear:u,onCheckout:g}){return n.jsx("div",{className:"cart-sidebar",style:{display:"flex",flexDirection:"column",gap:16,position:"sticky",top:140},children:n.jsxs("div",{style:{background:b.surface,border:`1.5px solid ${b.border}`,padding:40,borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:32},children:[n.jsx("div",{style:{width:20,height:1.5,background:`linear-gradient(90deg,${b.rose},${b.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:b.burgundy,fontWeight:700},children:"Order Summary"})]}),n.jsx(ba,{label:"Subtotal",value:`₹${e.toLocaleString("en-IN")}`}),t>0&&n.jsx(ba,{label:`Discount (${((i==null?void 0:i.code)||(i==null?void 0:i.offercode)||"").toUpperCase()})`,value:`-₹${t.toLocaleString("en-IN")}`,highlight:!0,green:!0}),n.jsx(ba,{label:"Shipping",value:r===0?"Free":`₹${r}`,highlight:r===0}),r>0&&n.jsx("div",{style:{background:`${b.blush}20`,border:`1px solid ${b.rose}40`,padding:"10px 14px",marginBottom:20,borderRadius:6},children:n.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:b.rose,letterSpacing:.5,fontWeight:500},children:["Add ₹",Math.max(0,999-e).toLocaleString("en-IN")," for free shipping"]})}),n.jsx("div",{style:{borderTop:`1px solid ${b.border}`,margin:"20px 0 24px"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:28},children:[n.jsx("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:b.text},children:"Total"}),n.jsxs("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:28,background:`linear-gradient(135deg,${b.rose},${b.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",fontWeight:400},children:["₹",o.toLocaleString("en-IN")]})]}),n.jsxs("div",{style:{borderTop:`1px solid ${b.border}`,paddingTop:24,marginBottom:24},children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:b.textMuted,marginBottom:12,fontWeight:600},children:"Apply Coupon"}),i?n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:`${b.blush}20`,border:`1.5px solid ${b.rose}`,padding:"12px 14px",borderRadius:6},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:b.rose,marginBottom:2,fontWeight:700},children:"✓ Coupon Applied"}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:700,color:b.text,letterSpacing:"0.5px"},children:(i.code||i.offercode||"").toUpperCase()})]}),n.jsx("button",{onClick:c,style:{background:"none",border:"none",color:b.rose,cursor:"pointer",fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"0.5px",textTransform:"uppercase",transition:"color 0.2s",fontWeight:600},onMouseEnter:f=>f.target.style.color=b.error,onMouseLeave:f=>f.target.style.color=b.rose,children:"Remove"})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8},children:[n.jsx("input",{type:"text",value:a,onChange:f=>{l(f.target.value.toUpperCase()),u()},onKeyDown:f=>f.key==="Enter"&&d(),placeholder:"ENTER CODE",style:{flex:1,background:`${b.blush}20`,border:`1.5px solid ${b.border}`,color:b.text,padding:"10px 14px",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1px",outline:"none",borderRadius:6,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onFocus:f=>{f.target.style.borderColor=b.rose,f.target.style.background=`${b.blush}30`},onBlur:f=>{f.target.style.borderColor=b.border,f.target.style.background=`${b.blush}20`}}),n.jsx("button",{onClick:d,style:{padding:"10px 18px",background:"transparent",border:`1.5px solid ${b.rose}`,color:b.burgundy,fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",whiteSpace:"nowrap",borderRadius:6,fontWeight:600},onMouseEnter:f=>{f.currentTarget.style.background=`linear-gradient(135deg,${b.rose},${b.burgundy})`,f.currentTarget.style.color="white",f.currentTarget.style.borderColor="transparent"},onMouseLeave:f=>{f.currentTarget.style.background="transparent",f.currentTarget.style.color=b.burgundy,f.currentTarget.style.borderColor=b.rose},children:"Apply"})]}),s&&n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:b.error,letterSpacing:"0.3px",fontWeight:500},children:["✕ ",s]})]})]}),n.jsx("button",{onClick:g,style:{width:"100%",padding:16,background:`linear-gradient(135deg,${b.rose},${b.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:700,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",borderRadius:6,boxShadow:`0 4px 16px ${b.rose}30`},onMouseEnter:f=>{f.target.style.transform="translateY(-2px)",f.target.style.boxShadow=`0 8px 24px ${b.rose}40`},onMouseLeave:f=>{f.target.style.transform="translateY(0)",f.target.style.boxShadow=`0 4px 16px ${b.rose}30`},children:"Proceed to Checkout →"})]})})}function ba({label:e,value:t,highlight:r,green:o}){return n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:16,alignItems:"center"},children:[n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase",color:b.textMuted,fontWeight:500},children:e}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:o?b.success:r?b.burgundy:b.text,fontWeight:o?700:600},children:t})]})}function Ax(){return n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:120,gap:20},children:[n.jsx("div",{style:{width:48,height:48,border:`3px solid ${b.border}`,borderTopColor:b.rose,borderRadius:"50%",animation:"spin 1s linear infinite"}}),n.jsx("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:b.textMuted,fontStyle:"italic",fontWeight:300},children:"Loading your cart…"})]})}function Yd({icon:e,title:t,sub:r,btn:o,onClick:i}){return n.jsxs("div",{style:{textAlign:"center",padding:"120px 80px"},children:[n.jsx("div",{style:{fontSize:56,color:`${b.rose}40`,marginBottom:24},children:e}),n.jsx("div",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:32,fontWeight:300,color:b.text,marginBottom:12,background:`linear-gradient(135deg,${b.text},${b.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:t}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:b.textMuted,letterSpacing:.5,marginBottom:40},children:r}),n.jsx("button",{onClick:i,style:{padding:"14px 48px",background:`linear-gradient(135deg,${b.rose},${b.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:700,borderRadius:6,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:`0 4px 16px ${b.rose}30`},onMouseEnter:a=>{a.target.style.transform="translateY(-2px)",a.target.style.boxShadow=`0 8px 24px ${b.rose}40`},onMouseLeave:a=>{a.target.style.transform="translateY(0)",a.target.style.boxShadow=`0 4px 16px ${b.rose}30`},children:o})]})}const oe={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function Dx(){const e=qe(),{items:t,removeFromWishlist:r}=Hi(),{addToCart:o}=bn(),{success:i,error:a}=_r(),[s,l]=m.useState(new Set),[d,c]=m.useState(new Set),u=f=>{l(j=>new Set([...j,f])),setTimeout(()=>{r(f),i("Removed from wishlist"),l(j=>{const $=new Set(j);return $.delete(f),$})},300)},g=async f=>{const j=f._id||f.id||f.productId;c($=>new Set([...$,j]));try{await o(f,1),i("Added to cart! 🛒")}catch($){a("Failed to add to cart"),console.error($)}finally{c($=>{const S=new Set($);return S.delete(j),S})}};return n.jsxs("div",{style:{background:oe.bg,minHeight:"100vh",paddingTop:106},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

        /* ── Keyframes ── */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-24px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeOut {
          from { opacity: 1; transform: scale(1); }
          to   { opacity: 0; transform: scale(0.95); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heartBeat {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        /* ── Hero Header ── */
        .wl-hero {
          position: relative;
          padding: 64px 80px 56px;
          border-bottom: 1px solid ${oe.border};
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) both;
          overflow: hidden;
        }
        .wl-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 90% 50%,
              rgba(232,180,196,0.10) 0%,
              transparent 70%),
            radial-gradient(ellipse 40% 60% at 10% 80%,
              rgba(139,70,84,0.04) 0%,
              transparent 70%);
          pointer-events: none;
        }

        /* ── Eyebrow ── */
        .wl-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 18px;
          animation: fadeInLeft 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.1s both;
          position: relative;
          z-index: 2;
        }
        .wl-eyebrow-line {
          width: 28px;
          height: 1.5px;
          background: linear-gradient(to right, ${oe.rose}, ${oe.burgundy});
          border-radius: 2px;
        }
        .wl-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${oe.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .wl-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -1px;
          background: linear-gradient(135deg, ${oe.text} 0%, ${oe.burgundy} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 16px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.15s both;
          position: relative;
          z-index: 2;
        }

        /* ── Subtext ── */
        .wl-subtext {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${oe.textMuted};
          letter-spacing: 0.5px;
          margin-top: 14px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.25s both;
          position: relative;
          z-index: 2;
        }
        .wl-subtext strong {
          color: ${oe.burgundy};
          font-weight: 600;
        }

        /* ── Content ── */
        .wl-content {
          padding: 48px 80px 80px;
          animation: fadeInUp 0.6s ease 0.3s both;
        }

        /* ── Grid ── */
        .wl-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        /* ── Item Card ── */
        .wl-card {
          background: ${oe.surface};
          border: 1.5px solid ${oe.border};
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          animation: slideDown 0.5s ease 0.35s both;
        }
        .wl-card:hover {
          border-color: ${oe.rose};
          box-shadow: 0 12px 28px rgba(232,180,196,0.12);
          transform: translateY(-4px);
        }
        .wl-card.removing {
          animation: fadeOut 0.3s ease forwards;
          pointer-events: none;
        }

        /* ── Card Image ── */
        .wl-card-image {
          width: 100%;
          aspect-ratio: 3/4;
          background: linear-gradient(135deg, ${oe.blush} 0%, ${oe.champagne} 100%);
          overflow: hidden;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .wl-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.34,1.56,0.64,1);
        }
        .wl-card:hover .wl-card-image img {
          transform: scale(1.05);
        }
        .wl-card-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 36px;
          height: 36px;
          background: ${oe.rose};
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
          animation: heartBeat 0.6s cubic-bezier(0.34,1.56,0.64,1) 0.5s both;
          box-shadow: 0 4px 12px rgba(232,180,196,0.25);
        }
        .wl-card-badge:hover {
          animation: none;
          transform: scale(1.15);
        }

        /* ── Card Body ── */
        .wl-card-body {
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        /* ── Card Name ── */
        .wl-card-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          color: ${oe.text};
          line-height: 1.4;
          cursor: pointer;
          transition: color 0.3s;
          margin: 0;
        }
        .wl-card-name:hover {
          color: ${oe.burgundy};
        }

        /* ── Card Price ── */
        .wl-card-price {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: ${oe.burgundy};
          letter-spacing: 0.3px;
          margin: 8px 0;
        }

        /* ── Card Buttons ── */
        .wl-card-buttons {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid ${oe.borderLight};
        }

        /* ── Button ── */
        .wl-btn {
          padding: 11px 16px;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 1.8px;
          text-transform: uppercase;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          border: 1.5px solid transparent;
          outline: none;
        }

        .wl-btn-primary {
          background: ${oe.rose};
          color: ${oe.surface};
          border-color: ${oe.rose};
        }
        .wl-btn-primary:hover:not(:disabled) {
          background: ${oe.burgundy};
          border-color: ${oe.burgundy};
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(139,70,84,0.2);
        }
        .wl-btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .wl-btn-secondary {
          background: transparent;
          color: ${oe.textMuted};
          border-color: ${oe.border};
        }
        .wl-btn-secondary:hover:not(:disabled) {
          background: ${oe.blush};
          color: ${oe.burgundy};
          border-color: ${oe.rose};
        }
        .wl-btn-secondary:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        /* ── Empty State ── */
        .wl-empty {
          text-align: center;
          padding: 80px 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .wl-empty-icon {
          font-size: 64px;
          opacity: 0.4;
          animation: fadeInUp 0.6s ease 0.2s both;
        }
        .wl-empty-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          color: ${oe.textMuted};
          font-style: italic;
          margin: 0;
          animation: fadeInUp 0.6s ease 0.3s both;
        }
        .wl-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${oe.textMuted};
          letter-spacing: 0.5px;
          max-width: 300px;
          animation: fadeInUp 0.6s ease 0.4s both;
        }
        .wl-empty-cta {
          padding: 14px 36px;
          background: ${oe.rose};
          color: ${oe.surface};
          border: 1.5px solid ${oe.rose};
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 6px;
          font-weight: 600;
          transition: all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          animation: fadeInUp 0.6s ease 0.5s both;
        }
        .wl-empty-cta:hover {
          background: ${oe.burgundy};
          border-color: ${oe.burgundy};
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(139,70,84,0.2);
        }

        /* ── Responsive ── */
        @media (max-width: 1280px) {
          .wl-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }
          .wl-hero { padding: 60px 60px 50px; }
          .wl-content { padding: 40px 60px 80px; }
        }
        @media (max-width: 1024px) {
          .wl-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 18px;
          }
          .wl-hero { padding: 56px 40px 48px; }
          .wl-content { padding: 32px 40px 64px; }
        }
        @media (max-width: 768px) {
          .wl-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .wl-hero { padding: 48px 20px 40px; }
          .wl-content { padding: 28px 20px 56px; }
          .wl-heading {
            font-size: clamp(32px, 4vw, 56px);
          }
        }
        @media (max-width: 480px) {
          .wl-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .wl-hero { padding: 36px 14px 32px; }
          .wl-content { padding: 20px 14px 48px; }
          .wl-card-body { padding: 16px; }
          .wl-empty { padding: 60px 14px; }
        }
      `}),n.jsxs("div",{className:"wl-hero",children:[n.jsxs("div",{className:"wl-eyebrow",children:[n.jsx("div",{className:"wl-eyebrow-line"}),n.jsx("span",{className:"wl-eyebrow-text",children:"Personal Collection"})]}),n.jsx("h1",{className:"wl-heading",children:"My Wishlist"}),t.length>0&&n.jsxs("p",{className:"wl-subtext",children:["You have ",n.jsx("strong",{children:t.length})," item",t.length!==1?"s":""," saved"]})]}),n.jsx("div",{className:"wl-content",children:t.length===0?n.jsxs("div",{className:"wl-empty",children:[n.jsx("div",{className:"wl-empty-icon",children:"♡"}),n.jsx("h2",{className:"wl-empty-title",children:"Your wishlist is empty"}),n.jsx("p",{className:"wl-empty-sub",children:"Start saving your favorite pieces for later"}),n.jsx("button",{onClick:()=>e("/products"),className:"wl-empty-cta",children:"Explore Collection"})]}):n.jsx("div",{className:"wl-grid",children:t.map((f,j)=>{const $=f.product||f,S=$._id||$.id||f.productId||f._id||f.id,w=s.has(S),x=d.has(S),p=Mr($),h=$.name||$.title||"Product",P=Number($.price||$.salePrice||0);return n.jsxs("div",{className:`wl-card ${w?"removing":""}`,style:{animation:`slideDown 0.5s cubic-bezier(0.34,1.56,0.64,1) ${j*40}ms both`},children:[n.jsxs("div",{className:"wl-card-image",onClick:()=>e(`/product/${S}`),children:[p?n.jsx("img",{src:p,alt:h,onError:E=>E.target.style.display="none"}):n.jsx(Fp,{product:$,small:!0}),n.jsx("div",{className:"wl-card-badge",onClick:()=>u(S),children:"♡"})]}),n.jsxs("div",{className:"wl-card-body",children:[n.jsx("h3",{className:"wl-card-name",onClick:()=>e(`/product/${S}`),children:h}),n.jsxs("div",{className:"wl-card-price",children:["₹",P.toLocaleString("en-IN")]}),n.jsxs("div",{className:"wl-card-buttons",children:[n.jsx("button",{onClick:()=>g($),disabled:x,className:"wl-btn wl-btn-primary",children:x?"Adding...":"Add to Cart"}),n.jsx("button",{onClick:()=>u(S),disabled:w,className:"wl-btn wl-btn-secondary",children:w?"Removing...":"Remove"})]})]})]},S)})})})]})}const K={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4"},Ux=async()=>{const e=await fe.getGiftForHer();return e.success&&e.data?e.data:null},Gt={title:"Her",subtitle:"Curated For Her",description:"Timeless pieces that speak when words fall short. Each jewel chosen to celebrate the women who make life beautiful.",badgeText:"♀ Curated For Her"},Ox=[{label:"Anniversary",icon:"💕"},{label:"Birthday",icon:"✨"},{label:"Wedding",icon:"👑"},{label:"Just Because",icon:"💎"}],Hx=[{label:"All Gifts",value:"all"},{label:"Rings",value:"ring"},{label:"Necklaces",value:"necklace"},{label:"Earrings",value:"earring"},{label:"Bracelets",value:"bracelet"},{label:"Sets",value:"set"}];function Yx(){const[e,t]=m.useState(Gt),[r,o]=m.useState([]),[i,a]=m.useState(Ox),[s,l]=m.useState(Hx),[d,c]=m.useState(!0),[u,g]=m.useState("all"),[f,j]=m.useState("default"),[$,S]=m.useState(null);m.useEffect(()=>{window.scrollTo(0,0),(async()=>{var h,P,E;try{const y=await Ux();y&&(y.page&&t({title:y.page.title||Gt.title,subtitle:y.page.subtitle||Gt.subtitle,description:y.page.description||Gt.description,badgeText:y.page.badgeText||Gt.badgeText}),(h=y.products)!=null&&h.length&&o(y.products),(P=y.filters)!=null&&P.length&&l(y.filters),(E=y.tags)!=null&&E.length&&a(y.tags))}catch(y){console.error("GiftForHer load error:",y)}finally{c(!1)}})()},[]);const x=[...r.filter(p=>{var y;if(u==="all")return!0;const h=(p.name||"").toLowerCase(),P=(p.tags||[]).join(" ").toLowerCase(),E=(((y=p.category)==null?void 0:y.name)||"").toLowerCase();return h.includes(u)||P.includes(u)||E.includes(u)})].sort((p,h)=>f==="price-asc"?(p.price||0)-(h.price||0):f==="price-desc"?(h.price||0)-(p.price||0):f==="name"?(p.name||"").localeCompare(h.name||""):0);return n.jsxs("div",{style:{background:K.bg,minHeight:"100vh",paddingTop:"120px"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        .gfh-hero { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .gfh-occasions { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both; }
        .gfh-products { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }

        .gfh-occ {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .gfh-occ:hover {
          transform: translateY(-4px);
        }

        .gfh-occ-icon {
          animation: float 3s ease-in-out infinite;
        }

        .gfh-btn {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .gfh-btn:hover {
          transform: translateY(-2px);
        }

        .gfh-cta {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .gfh-cta:hover {
          transform: translateY(-2px);
          background: ${K.blush}30 !important;
          border-color: ${K.rose} !important;
          color: ${K.burgundy} !important;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid ${K.border};
          border-top-color: ${K.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @media (max-width: 1024px) {
          .gfh-hero { padding: 50px 40px !important; }
          .gfh-products { padding: 16px 40px 60px !important; }
          .gfh-divider { margin: 0 40px !important; }
          .gfh-filters { padding: 20px 40px !important; }
          .gfh-cta { margin: 0 40px 60px !important; }
        }

        @media (max-width: 768px) {
          .gfh-hero { padding: 40px 20px !important; }
          .gfh-products { padding: 16px 20px 50px !important; }
          .gfh-divider { margin: 0 20px !important; }
          .gfh-filters { padding: 16px 20px !important; }
          .gfh-cta { margin: 0 20px 50px !important; }
          .gfh-hero h1 { font-size: 36px !important; }
        }
      `}),n.jsxs("div",{className:"gfh-hero",style:{position:"relative",padding:"60px 80px 50px",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:-60,right:-60,width:400,height:400,borderRadius:"50%",background:`radial-gradient(circle, ${K.rose}12, transparent 70%)`,pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",bottom:0,left:"30%",width:300,height:300,borderRadius:"50%",background:`radial-gradient(circle, ${K.blush}12, transparent 70%)`,pointerEvents:"none"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:24,position:"relative",zIndex:1},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:K.burgundy,marginBottom:14,fontWeight:600},children:["♀ ",e.badgeText||Gt.badgeText]}),n.jsxs("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(42px, 5vw, 72px)",fontWeight:300,color:K.text,margin:0,lineHeight:1.1,background:`linear-gradient(135deg, ${K.text}, ${K.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:["Gift for"," ",n.jsx("span",{style:{color:K.rose,background:"none",WebkitTextFillColor:"unset",fontStyle:"italic"},children:e.title||Gt.title})]}),e.subtitle&&n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:K.textMuted,marginTop:10,fontWeight:500},children:e.subtitle}),n.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:14,color:K.textMuted,marginTop:14,letterSpacing:"0.3px",maxWidth:480,lineHeight:1.8,fontWeight:400},children:e.description||Gt.description})]}),n.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[n.jsx("span",{style:{color:K.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:600},children:"Sort by"}),n.jsxs("select",{value:f,onChange:p=>j(p.target.value),style:{background:K.surface,border:`1.5px solid ${K.border}`,color:K.text,padding:"10px 14px",fontFamily:"'Poppins', sans-serif",fontSize:11,cursor:"pointer",outline:"none",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",fontWeight:500},onFocus:p=>{p.target.style.borderColor=K.rose,p.target.style.boxShadow=`0 0 0 3px ${K.blush}40`},onBlur:p=>{p.target.style.borderColor=K.border,p.target.style.boxShadow="none"},children:[n.jsx("option",{value:"default",children:"Most Popular"}),n.jsx("option",{value:"price-asc",children:"Price: Low to High"}),n.jsx("option",{value:"price-desc",children:"Price: High to Low"}),n.jsx("option",{value:"name",children:"Name: A - Z"})]})]})]}),i.length>0&&n.jsx("div",{className:"gfh-occasions",style:{display:"flex",gap:12,marginTop:40,flexWrap:"wrap",position:"relative",zIndex:1},children:i.map((p,h)=>n.jsxs("div",{className:"gfh-occ",onMouseEnter:()=>S(h),onMouseLeave:()=>S(null),style:{padding:"11px 22px",border:`1.5px solid ${$===h?K.rose:K.border}`,background:$===h?`${K.blush}20`:"transparent",display:"flex",alignItems:"center",gap:8,borderRadius:"6px"},children:[n.jsx("span",{className:"gfh-occ-icon",style:{fontSize:16},children:p.icon}),n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:$===h?K.burgundy:K.textMuted,fontWeight:600},children:p.label})]},p._id||h))})]}),n.jsx("div",{className:"gfh-divider",style:{height:1.5,background:`linear-gradient(90deg, transparent, ${K.rose}40, transparent)`,margin:"32px 80px 0"}}),s.length>0&&n.jsxs("div",{className:"gfh-filters",style:{padding:"24px 80px",display:"flex",gap:8,alignItems:"center",overflowX:"auto",overflowY:"hidden"},children:[n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:K.textMuted,marginRight:12,whiteSpace:"nowrap",fontWeight:600},children:"Filter"}),s.map((p,h)=>n.jsx("button",{className:"gfh-btn",onClick:()=>g(p.value),style:{padding:"9px 18px",background:u===p.value?`linear-gradient(135deg, ${K.rose}, ${K.burgundy})`:"transparent",border:`1.5px solid ${u===p.value?"transparent":K.border}`,color:u===p.value?"white":K.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",whiteSpace:"nowrap",borderRadius:"6px",fontWeight:600,boxShadow:u===p.value?`0 4px 12px ${K.rose}30`:"none"},children:p.label},p._id||h))]}),n.jsxs("div",{className:"gfh-products",style:{padding:"24px 80px 80px"},children:[!d&&n.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1px",color:K.textMuted,textTransform:"uppercase",marginBottom:32,fontWeight:600},children:[x.length," piece",x.length!==1?"s":""," found"]}),d?n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 40px",gap:20},children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,color:K.textMuted,fontStyle:"italic",fontWeight:300},children:"Curating her collection…"})]}):x.length===0?n.jsx("div",{style:{textAlign:"center",padding:"80px 40px",color:K.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:300},children:"No pieces found"}):n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:24},children:x.map((p,h)=>n.jsx(hr,{product:p},p._id||h))})]}),n.jsxs("div",{className:"gfh-cta",style:{margin:"0 80px 80px",padding:"52px 44px",border:`1.5px solid ${K.border}`,background:`${K.blush}12`,textAlign:"center",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:K.burgundy,marginBottom:16,fontWeight:700},children:"◈ Need Help Choosing?"}),n.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:36,fontWeight:300,color:K.text,margin:"0 0 12px",letterSpacing:.5},children:"Gift Curation Service"}),n.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:K.textMuted,letterSpacing:"0.3px",marginBottom:32,lineHeight:1.8,maxWidth:600,margin:"0 auto 32px",fontWeight:400},children:"Tell us the occasion, budget, and her style — we'll handpick the perfect piece just for her."}),n.jsx(Oe,{to:"/customer-care",className:"gfh-cta",style:{display:"inline-block",padding:"13px 36px",background:"transparent",border:`1.5px solid ${K.rose}`,color:K.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",textDecoration:"none",borderRadius:"6px",fontWeight:700,boxShadow:`0 4px 12px ${K.rose}20`},children:"Get Personalized Help →"})]})]})}const q={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",blue:"#7a9fb5",blueDark:"#5f7a95"},Gx=async()=>{const e=await fe.getGiftForHim();return e.success&&e.data?e.data:null},Vt={title:"Him",subtitle:"Curated For Him",description:"Jewellery crafted for the modern man. Bold, refined, and built to be worn — not just admired.",badgeText:"♂ Curated For Him"},Vx=[{label:"The Classic",desc:"Timeless & understated",icon:"◈"},{label:"The Bold",desc:"Statement pieces",icon:"✦"},{label:"The Minimal",desc:"Clean & refined",icon:"◇"},{label:"The Gifter",desc:"For someone special",icon:"♡"}],Qx=[{label:"All Gifts",value:"all"},{label:"Rings",value:"ring"},{label:"Bracelets",value:"bracelet"},{label:"Chains",value:"chain"},{label:"Pendants",value:"pendant"},{label:"Cufflinks",value:"cufflink"}];function Xx(){const[e,t]=m.useState(Vt),[r,o]=m.useState([]),[i,a]=m.useState(Vx),[s,l]=m.useState(Qx),[d,c]=m.useState(!0),[u,g]=m.useState("all"),[f,j]=m.useState("default"),[$,S]=m.useState(null);m.useEffect(()=>{window.scrollTo(0,0),(async()=>{var h,P,E;try{const y=await Gx();y&&(y.page&&t({title:y.page.title||Vt.title,subtitle:y.page.subtitle||Vt.subtitle,description:y.page.description||Vt.description,badgeText:y.page.badgeText||Vt.badgeText}),(h=y.products)!=null&&h.length&&o(y.products),(P=y.filters)!=null&&P.length&&l(y.filters),(E=y.tags)!=null&&E.length&&a(y.tags))}catch(y){console.error("GiftForHim load error:",y)}finally{c(!1)}})()},[]);const x=[...r.filter(p=>{var y;if(u==="all")return!0;const h=(p.name||"").toLowerCase(),P=(p.tags||[]).join(" ").toLowerCase(),E=(((y=p.category)==null?void 0:y.name)||"").toLowerCase();return h.includes(u)||P.includes(u)||E.includes(u)})].sort((p,h)=>f==="price-asc"?(p.price||0)-(h.price||0):f==="price-desc"?(h.price||0)-(p.price||0):f==="name"?(p.name||"").localeCompare(h.name||""):0);return n.jsxs("div",{style:{background:q.bg,minHeight:"100vh",paddingTop:"120px"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .gfm-hero { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards; }
        .gfm-personas { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both; }
        .gfm-products { animation: fadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }

        .gfm-card {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .gfm-card:hover {
          transform: translateY(-4px);
        }

        .gfm-icon {
          animation: float 3s ease-in-out infinite;
        }

        .gfm-btn {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
        }

        .gfm-btn:hover {
          transform: translateY(-2px);
        }

        .gfm-link {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .gfm-link:hover {
          color: ${q.blue} !important;
          border-color: ${q.blue} !important;
          transform: translateX(2px);
        }

        .gfm-link-gold {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .gfm-link-gold:hover {
          color: #c78a7f !important;
          border-color: #c78a7f !important;
          transform: translateX(2px);
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid ${q.border};
          border-top-color: ${q.blue};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @media (max-width: 1024px) {
          .gfm-hero { padding: 50px 40px !important; }
          .gfm-products { padding: 16px 40px 60px !important; }
          .gfm-divider { margin: 0 40px !important; }
          .gfm-filters { padding: 20px 40px !important; }
          .gfm-cta { margin: 0 40px 60px !important; grid-template-columns: 1fr !important; }
        }

        @media (max-width: 768px) {
          .gfm-hero { padding: 40px 20px !important; }
          .gfm-products { padding: 16px 20px 50px !important; }
          .gfm-divider { margin: 0 20px !important; }
          .gfm-filters { padding: 16px 20px !important; }
          .gfm-cta { margin: 0 20px 50px !important; }
          .gfm-hero h1 { font-size: 36px !important; }
        }
      `}),n.jsxs("div",{className:"gfm-hero",style:{position:"relative",padding:"60px 80px 50px",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:-80,right:-80,width:500,height:500,borderRadius:"50%",background:`radial-gradient(circle, ${q.blue}12, transparent 70%)`,pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",bottom:-40,left:"20%",width:350,height:350,borderRadius:"50%",background:`radial-gradient(circle, ${q.champagne}12, transparent 70%)`,pointerEvents:"none"}}),n.jsx("div",{style:{position:"absolute",top:40,right:80,width:120,height:120,border:`1px solid ${q.blue}15`,transform:"rotate(45deg)",pointerEvents:"none"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:24,position:"relative",zIndex:1},children:[n.jsxs("div",{children:[n.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:q.blueDark,marginBottom:14,fontWeight:600},children:["♂ ",e.badgeText||Vt.badgeText]}),n.jsxs("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(42px, 5vw, 72px)",fontWeight:300,color:q.text,margin:0,lineHeight:1.1,background:`linear-gradient(135deg, ${q.text}, ${q.blueDark})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:["Gift for"," ",n.jsx("span",{style:{color:q.blue,background:"none",WebkitTextFillColor:"unset",fontStyle:"italic"},children:e.title||Vt.title})]}),e.subtitle&&n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:q.textMuted,marginTop:10,fontWeight:500},children:e.subtitle}),n.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:14,color:q.textMuted,marginTop:14,letterSpacing:"0.3px",maxWidth:480,lineHeight:1.8,fontWeight:400},children:e.description||Vt.description})]}),n.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[n.jsx("span",{style:{color:q.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:600},children:"Sort by"}),n.jsxs("select",{value:f,onChange:p=>j(p.target.value),style:{background:q.surface,border:`1.5px solid ${q.border}`,color:q.text,padding:"10px 14px",fontFamily:"'Poppins', sans-serif",fontSize:11,cursor:"pointer",outline:"none",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",fontWeight:500},onFocus:p=>{p.target.style.borderColor=q.blue,p.target.style.boxShadow=`0 0 0 3px ${q.blue}25`},onBlur:p=>{p.target.style.borderColor=q.border,p.target.style.boxShadow="none"},children:[n.jsx("option",{value:"default",children:"Most Popular"}),n.jsx("option",{value:"price-asc",children:"Price: Low to High"}),n.jsx("option",{value:"price-desc",children:"Price: High to Low"}),n.jsx("option",{value:"name",children:"Name: A - Z"})]})]})]}),i.length>0&&n.jsx("div",{className:"gfm-personas",style:{display:"flex",gap:16,marginTop:40,flexWrap:"wrap",position:"relative",zIndex:1},children:i.map((p,h)=>n.jsxs("div",{className:"gfm-card",onMouseEnter:()=>S(h),onMouseLeave:()=>S(null),style:{padding:"18px 24px",minWidth:140,border:`1.5px solid ${$===h?q.blue:q.border}`,background:$===h?`${q.blue}12`:"transparent",borderRadius:"8px"},children:[n.jsx("div",{className:"gfm-icon",style:{fontSize:16,marginBottom:8},children:p.icon}),n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:$===h?q.blueDark:q.text,marginBottom:4,fontWeight:600},children:p.label}),n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,color:q.textMuted,letterSpacing:"0.3px",fontWeight:400},children:p.desc})]},p._id||h))})]}),n.jsx("div",{className:"gfm-divider",style:{height:1.5,background:`linear-gradient(90deg, transparent, ${q.blue}40, transparent)`,margin:"32px 80px 0"}}),s.length>0&&n.jsxs("div",{className:"gfm-filters",style:{padding:"24px 80px",display:"flex",gap:8,alignItems:"center",overflowX:"auto",overflowY:"hidden"},children:[n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:q.textMuted,marginRight:12,whiteSpace:"nowrap",fontWeight:600},children:"Filter"}),s.map((p,h)=>n.jsx("button",{className:"gfm-btn",onClick:()=>g(p.value),style:{padding:"9px 18px",background:u===p.value?`linear-gradient(135deg, ${q.blue}, ${q.blueDark})`:"transparent",border:`1.5px solid ${u===p.value?"transparent":q.border}`,color:u===p.value?"white":q.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",whiteSpace:"nowrap",borderRadius:"6px",fontWeight:600,boxShadow:u===p.value?`0 4px 12px ${q.blue}30`:"none"},children:p.label},p._id||h))]}),n.jsxs("div",{className:"gfm-products",style:{padding:"24px 80px 80px"},children:[!d&&n.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1px",color:q.textMuted,textTransform:"uppercase",marginBottom:32,fontWeight:600},children:[x.length," piece",x.length!==1?"s":""," found"]}),d?n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 40px",gap:20},children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,color:q.textMuted,fontStyle:"italic",fontWeight:300},children:"Curating his collection…"})]}):x.length===0?n.jsx("div",{style:{textAlign:"center",padding:"80px 40px",color:q.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:300},children:"No pieces found"}):n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:24},children:x.map((p,h)=>n.jsx(hr,{product:p},p._id||h))})]}),n.jsxs("div",{className:"gfm-cta",style:{margin:"0 80px 80px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[n.jsxs("div",{style:{padding:"48px 40px",border:`1.5px solid ${q.border}`,background:`${q.blue}12`,borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:q.blueDark,marginBottom:12,fontWeight:700},children:"◈ Premium Packaging"}),n.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:300,color:q.text,margin:"0 0 12px"},children:"Gift Wrapping"}),n.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,color:q.textMuted,lineHeight:1.8,margin:"0 0 24px",fontWeight:400},children:"Every order ships in our signature matte black box with a handwritten note."}),n.jsx(Oe,{to:"/customer-care",className:"gfm-link",style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:q.blue,textDecoration:"none",borderBottom:`1px solid ${q.blue}40`,paddingBottom:4,display:"inline-flex",alignItems:"center",gap:6,fontWeight:700},children:"Learn more →"})]}),n.jsxs("div",{style:{padding:"48px 40px",border:`1.5px solid ${q.border}`,background:`${q.champagne}12`,borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[n.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:q.burgundy,marginBottom:12,fontWeight:700},children:"✦ Not Sure?"}),n.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:300,color:q.text,margin:"0 0 12px"},children:"Gift Cards"}),n.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,color:q.textMuted,lineHeight:1.8,margin:"0 0 24px",fontWeight:400},children:"Let him choose the perfect piece. Available from ₹500 to ₹50,000."}),n.jsx(Oe,{to:"/customer-care",className:"gfm-link-gold",style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:q.burgundy,textDecoration:"none",borderBottom:`1px solid ${q.burgundy}40`,paddingBottom:4,display:"inline-flex",alignItems:"center",gap:6,fontWeight:700},children:"Buy a gift card →"})]})]})]})}const R={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",success:"#70c878",warning:"#ffc107",info:"#2196f3",error:"#d97070"},qx=e=>Array.isArray(e)?e:e&&typeof e=="object"?[e]:[],Lp=(...e)=>{for(const t of e)if(Array.isArray(t))return t;return[]},Wp=e=>e!=null&&e.product&&typeof e.product=="object"?e.product:e!=null&&e.productId&&typeof e.productId=="object"?e.productId:e!=null&&e.productDetails&&typeof e.productDetails=="object"?e.productDetails:{},Kx=e=>{const t=Wp(e);return[e==null?void 0:e.image,e==null?void 0:e.images,e==null?void 0:e.thumbnail,t==null?void 0:t.image,t==null?void 0:t.images,t==null?void 0:t.thumbnail,Mr(t)].flatMap(o=>Array.isArray(o)?o:[o]).map(o=>Fe(o)).filter(Boolean)},Jx=e=>{const t=Wp(e),r=Kx(e),o=Math.max(1,Number((e==null?void 0:e.quantity)||(e==null?void 0:e.qty)||1)),i=Number((e==null?void 0:e.price)||(e==null?void 0:e.salePrice)||(e==null?void 0:e.productPrice)||(t==null?void 0:t.price)||(t==null?void 0:t.salePrice)||0);return{...e,product:t,name:(e==null?void 0:e.name)||(t==null?void 0:t.name)||(t==null?void 0:t.title)||"Product",quantity:o,price:i,image:r[0],images:r}},Zx=e=>{var r,o;const t=Lp(e==null?void 0:e.items,e==null?void 0:e.products,e==null?void 0:e.orderItems).map(Jx);return{...e,_id:(e==null?void 0:e._id)||(e==null?void 0:e.id)||(e==null?void 0:e.orderId)||(e==null?void 0:e.orderNumber)||`${Date.now()}`,orderNumber:(e==null?void 0:e.orderNumber)||(e==null?void 0:e.orderNo)||(e==null?void 0:e.number),items:t,shipping:Number((e==null?void 0:e.shipping)||(e==null?void 0:e.shippingCharge)||(e==null?void 0:e.deliveryCharge)||0),totalAmount:Number((e==null?void 0:e.totalAmount)||(e==null?void 0:e.total)||(e==null?void 0:e.grandTotal)||(e==null?void 0:e.amount)||0),createdAt:(e==null?void 0:e.createdAt)||(e==null?void 0:e.created_at)||(e==null?void 0:e.orderDate)||new Date().toISOString(),status:(e==null?void 0:e.status)||(e==null?void 0:e.orderStatus)||"pending",paymentStatus:(e==null?void 0:e.paymentStatus)||((r=e==null?void 0:e.payment)==null?void 0:r.status)||"pending",paymentMethod:(e==null?void 0:e.paymentMethod)||((o=e==null?void 0:e.payment)==null?void 0:o.method)||"cod",estimatedDelivery:(e==null?void 0:e.estimatedDelivery)||(e==null?void 0:e.deliveryDate),shippingAddress:(e==null?void 0:e.shippingAddress)||(e==null?void 0:e.address)||(e==null?void 0:e.customerDetails)||{}}},eh=e=>(e==null?void 0:e.orderNumber)||String((e==null?void 0:e._id)||(e==null?void 0:e.id)||"").slice(-6).toUpperCase()||"ORDER";function th(){var h,P,E,y;const{user:e}=ho(),[t,r]=m.useState([]),[o,i]=m.useState(!0),[a,s]=m.useState(""),[l,d]=m.useState(null),[c,u]=m.useState(0);m.useEffect(()=>{window.scrollTo(0,0),g()},[e]);const g=async()=>{if(!e){s("Please log in to view your orders"),i(!1);return}i(!0),s("");try{const v=await fetch(`${gn}/orders`,{method:"GET",headers:{Authorization:`Bearer ${localStorage.getItem("arke_token")}`,"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}});if(!v.ok){v.status===401?s("Session expired. Please log in again."):v.status===404?r([]):s("Failed to load orders. Please try again.");return}const z=await v.json();if((z==null?void 0:z.success)===!1){s(z.message||"Failed to load orders. Please try again."),r([]);return}const N=Lp(z==null?void 0:z.data,z==null?void 0:z.orders,z==null?void 0:z.order,z==null?void 0:z.result,z==null?void 0:z.items,Array.isArray(z)?z:[]),C=N.length>0?N:qx((z==null?void 0:z.order)||(z==null?void 0:z.data)||(z==null?void 0:z.result));r(C.map(Zx))}catch(v){s("Network error. Please check your connection."),console.error("Fetch orders error:",v)}finally{i(!1)}},f=v=>({pending:`${R.warning}20`,processing:`${R.info}20`,shipped:`${R.success}20`,delivered:`${R.success}20`,cancelled:`${R.error}20`})[v==null?void 0:v.toLowerCase()]||`${R.rose}20`,j=v=>({pending:`${R.warning}40`,processing:`${R.info}40`,shipped:`${R.success}40`,delivered:`${R.success}40`,cancelled:`${R.error}40`})[v==null?void 0:v.toLowerCase()]||`${R.rose}40`,$=v=>({pending:R.warning,processing:R.info,shipped:R.success,delivered:R.success,cancelled:R.error})[v==null?void 0:v.toLowerCase()]||R.rose,S=v=>{var N;const z=[];return(N=v.items)==null||N.forEach((C,W)=>{var ie;((ie=C.images)!=null&&ie.length?C.images:C.image?[C.image]:[]).forEach((pe,X)=>{const ae=Fe(pe);ae&&z.push({src:ae,name:C.name,price:C.price,quantity:C.quantity,itemIndex:W,imageIndex:X})})}),z},w=v=>{var z;return((z=v.items)==null?void 0:z.reduce((N,C)=>{var W;return N+(((W=C.images)==null?void 0:W.length)||(C.image?1:0))},0))||0},x=v=>!!Fe(v),p=v=>eh(v);return n.jsxs("div",{style:{background:R.bg,minHeight:"100vh",paddingTop:120},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @keyframes imageSlide {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .orders-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 40px 80px;
        }

        .orders-header {
          margin-bottom: 60px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .orders-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 300;
          letter-spacing: 2px;
          color: ${R.text};
          margin: 0 0 12px 0;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${R.text}, ${R.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .orders-header p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          letter-spacing: 0.5px;
          color: ${R.textMuted};
          margin: 0;
          font-weight: 400;
        }

        .loading-state {
          text-align: center;
          padding: 80px 40px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid ${R.border};
          border-top-color: ${R.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        .loading-text {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: ${R.textMuted};
          letter-spacing: 0.5px;
          font-weight: 400;
        }

        .error-state {
          padding: 24px 20px;
          background: ${R.error}15;
          border: 1.5px solid ${R.error}40;
          border-radius: 8px;
          text-align: center;
          margin: 40px 0;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .error-state p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${R.error}90;
          letter-spacing: 0.3px;
          margin: 0;
          font-weight: 500;
        }

        .empty-state {
          text-align: center;
          padding: 80px 40px;
          border: 1.5px solid ${R.border};
          border-radius: 12px;
          background: ${R.surface};
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .empty-state-icon {
          font-size: 56px;
          margin-bottom: 20px;
          opacity: 0.6;
        }

        .empty-state h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          letter-spacing: 1px;
          color: ${R.text};
          margin: 0 0 12px 0;
        }

        .empty-state p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${R.textMuted};
          letter-spacing: 0.3px;
          margin: 0 0 32px 0;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
          font-weight: 400;
        }

        .empty-state a {
          display: inline-block;
          padding: 12px 32px;
          background: linear-gradient(135deg, ${R.rose}, ${R.burgundy});
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 16px ${R.rose}30;
        }

        .empty-state a:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px ${R.rose}40;
        }

        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .order-card {
          border: 1.5px solid ${R.border};
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          background: ${R.surface};
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
          display: grid;
          grid-template-columns: 180px 1fr;
        }

        .order-card:hover {
          border-color: ${R.rose};
          box-shadow: 0 8px 24px rgba(232, 180, 196, 0.2);
          transform: translateY(-2px);
        }

        .order-image-section {
          position: relative;
          overflow: hidden;
          background: ${R.blush}10;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 200px;
        }

        .order-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .order-card:hover .order-image {
          transform: scale(1.05);
        }

        .image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, ${R.blush}, ${R.champagne});
          font-size: 40px;
          color: ${R.rose}40;
        }

        .image-count-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: ${R.rose};
          color: white;
          padding: 6px 12px;
          border-radius: 20px;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 12px rgba(232, 180, 196, 0.3);
        }

        .order-main-content {
          display: flex;
          flex-direction: column;
        }

        .order-header {
          padding: 20px 24px;
          background: ${R.blush}15;
          border-bottom: 1.5px solid ${R.border};
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .order-id {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: ${R.burgundy};
          margin-bottom: 4px;
        }

        .order-date {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3px;
          color: ${R.textMuted};
          font-weight: 400;
        }

        .order-status {
          padding: 7px 14px;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          display: inline-block;
        }

        .order-content {
          padding: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 24px;
          align-items: center;
          flex: 1;
        }

        .order-info {
          flex: 1;
        }

        .info-label {
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${R.textMuted};
          margin-bottom: 6px;
        }

        .info-value {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${R.text};
          letter-spacing: 0.3px;
          font-weight: 500;
        }

        .amount-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 1px;
          background: linear-gradient(135deg, ${R.rose}, ${R.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .order-items {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: ${R.textMuted};
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .order-actions {
          padding: 16px 24px;
          background: ${R.blush}8;
          border-top: 1.5px solid ${R.border};
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 9px 16px;
          background: transparent;
          border: 1.5px solid ${R.rose};
          color: ${R.burgundy};
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .action-btn:hover {
          border-color: ${R.burgundy};
          background: linear-gradient(135deg, ${R.rose}20, ${R.burgundy}15);
          transform: translateY(-2px);
        }

        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          padding: 20px;
          backdrop-filter: blur(4px);
        }

        .modal-content {
          background: ${R.surface};
          border: 1.5px solid ${R.border};
          border-radius: 12px;
          padding: 40px;
          max-width: 700px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
          box-shadow: 0 20px 60px rgba(0,0,0,0.15);
          animation: fadeInUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1.5px solid ${R.border};
        }

        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          letter-spacing: 1px;
          color: ${R.text};
          background: linear-gradient(135deg, ${R.text}, ${R.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .modal-close {
          background: none;
          border: none;
          color: ${R.textMuted};
          font-size: 24px;
          cursor: pointer;
          transition: color 0.2s;
          padding: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .modal-close:hover {
          color: ${R.burgundy};
        }

        .image-gallery {
          margin-bottom: 32px;
          border-radius: 10px;
          overflow: hidden;
          background: ${R.blush}10;
        }

        .main-image-container {
          width: 100%;
          height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, ${R.blush}, ${R.champagne});
          position: relative;
          overflow: hidden;
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: imageSlide 0.3s ease-in-out;
        }

        .main-image-placeholder {
          font-size: 80px;
          opacity: 0.3;
        }

        .image-thumbnails {
          display: flex;
          gap: 8px;
          padding: 12px;
          background: ${R.surface};
          overflow-x: auto;
          border-top: 1px solid ${R.border};
        }

        .thumbnail {
          width: 70px;
          height: 70px;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          border: 2px solid ${R.border};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          flex-shrink: 0;
          background: ${R.blush}10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .thumbnail.active {
          border-color: ${R.rose};
          box-shadow: 0 4px 12px ${R.rose}40;
        }

        .thumbnail:hover {
          border-color: ${R.burgundy};
        }

        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .thumbnail-placeholder {
          font-size: 20px;
          opacity: 0.3;
        }

        .order-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px 0;
          border-bottom: 1px solid ${R.border};
          gap: 16px;
        }

        .order-item:last-child {
          border-bottom: none;
        }

        .item-image-mini {
          width: 60px;
          height: 60px;
          border-radius: 6px;
          overflow: hidden;
          background: ${R.blush}10;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .item-image-mini img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .item-image-placeholder {
          font-size: 24px;
          opacity: 0.3;
        }

        .item-details h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: ${R.text};
          margin: 0 0 6px 0;
          letter-spacing: 0.3px;
        }

        .item-details p {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: ${R.textMuted};
          margin: 0;
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .item-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          background: linear-gradient(135deg, ${R.rose}, ${R.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .summary-row.total {
          padding-top: 16px;
          margin-top: 16px;
          border-top: 1.5px solid ${R.border};
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .orders-container {
            padding: 0 20px 60px;
          }

          .orders-header h1 {
            font-size: 36px;
          }

          .order-card {
            grid-template-columns: 1fr;
          }

          .order-image-section {
            min-height: 180px;
          }

          .order-content {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .modal-content {
            padding: 24px;
            max-width: 95%;
          }

          .main-image-container {
            height: 300px;
          }
        }
      `}),n.jsxs("div",{className:"orders-container",children:[n.jsxs("div",{className:"orders-header",children:[n.jsx("h1",{children:"My Orders"}),n.jsx("p",{children:"View and manage all your ARKE purchases"})]}),o&&n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{className:"loading-text",children:"Loading your orders..."})]}),a&&!o&&n.jsx("div",{className:"error-state",children:n.jsxs("p",{children:["⚠️ ",a]})}),!o&&!a&&t.length===0&&n.jsxs("div",{className:"empty-state",children:[n.jsx("div",{className:"empty-state-icon",children:"📦"}),n.jsx("h2",{children:"No Orders Yet"}),n.jsx("p",{children:"You haven't placed any orders yet. Start shopping to see your orders here!"}),n.jsx("a",{href:"/products",children:"Browse Collections"})]}),!o&&!a&&t.length>0&&n.jsx("div",{className:"orders-list",children:t.map(v=>{var C,W,U,ie,pe,X,ae,te,T,L,B;const z=Fe(((W=(C=v.items)==null?void 0:C[0])==null?void 0:W.image)||((pe=(ie=(U=v.items)==null?void 0:U[0])==null?void 0:ie.images)==null?void 0:pe[0])),N=w(v);return n.jsxs("div",{className:"order-card",onClick:()=>{d(v),u(0)},children:[n.jsx("div",{className:"order-image-section",children:x(z)?n.jsxs(n.Fragment,{children:[n.jsx("img",{src:z,alt:"Order product",className:"order-image",onError:de=>{de.target.style.display="none",de.target.nextSibling&&(de.target.nextSibling.style.display="flex")}}),n.jsx("div",{className:"image-placeholder",style:{display:"none"},children:"📸"}),N>1&&n.jsxs("div",{className:"image-count-badge",children:["+",N-1," more"]})]}):n.jsx("div",{className:"image-placeholder",children:"📸"})}),n.jsxs("div",{className:"order-main-content",children:[n.jsxs("div",{className:"order-header",children:[n.jsxs("div",{children:[n.jsxs("div",{className:"order-id",children:["Order #",p(v)]}),n.jsx("div",{className:"order-date",children:new Date(v.createdAt).toLocaleDateString("en-IN")})]}),n.jsx("div",{className:"order-status",style:{background:f(v.status),border:`1px solid ${j(v.status)}`,color:$(v.status)},children:(X=v.status)==null?void 0:X.toUpperCase()})]}),n.jsxs("div",{className:"order-content",children:[n.jsxs("div",{className:"order-info",children:[n.jsx("div",{className:"info-label",children:"Total Amount"}),n.jsxs("div",{className:"amount-value",children:["₹",((ae=v.totalAmount)==null?void 0:ae.toLocaleString("en-IN"))||"0"]})]}),n.jsxs("div",{className:"order-info",children:[n.jsx("div",{className:"info-label",children:"Items"}),n.jsxs("div",{className:"info-value",children:[((te=v.items)==null?void 0:te.length)||0," item(s)"]})]}),n.jsxs("div",{className:"order-info",children:[n.jsx("div",{className:"info-label",children:"Delivery"}),n.jsx("div",{className:"info-value",children:v.estimatedDelivery?new Date(v.estimatedDelivery).toLocaleDateString("en-IN"):"Processing"})]}),n.jsxs("div",{className:"order-info",children:[n.jsx("div",{className:"info-label",children:"Payment"}),n.jsx("div",{className:"info-value",children:((T=v.paymentStatus)==null?void 0:T.toUpperCase())||"PENDING"})]})]}),n.jsxs("div",{className:"order-actions",children:[n.jsx("button",{className:"action-btn",children:"View Details"}),((L=v.status)==null?void 0:L.toLowerCase())==="shipped"&&n.jsx("button",{className:"action-btn",children:"Track Order"}),["pending","processing"].includes((B=v.status)==null?void 0:B.toLowerCase())&&n.jsx("button",{className:"action-btn",children:"Cancel Order"})]})]})]},v._id||p(v))})})]}),l&&n.jsx("div",{className:"modal",onClick:()=>d(null),children:n.jsxs("div",{className:"modal-content",onClick:v=>v.stopPropagation(),children:[n.jsxs("div",{className:"modal-header",children:[n.jsx("h2",{className:"modal-title",children:"Order Details"}),n.jsx("button",{className:"modal-close",onClick:()=>d(null),children:"✕"})]}),n.jsxs("div",{children:[n.jsxs("div",{style:{marginBottom:24},children:[n.jsx("div",{className:"info-label",children:"Order Number"}),n.jsxs("div",{className:"info-value",children:["#",p(l)]})]}),n.jsxs("div",{style:{marginBottom:24},children:[n.jsx("div",{className:"info-label",children:"Order Date"}),n.jsx("div",{className:"info-value",children:new Date(l.createdAt).toLocaleDateString("en-IN",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),n.jsxs("div",{style:{marginBottom:24},children:[n.jsx("div",{className:"info-label",children:"Status"}),n.jsx("div",{className:"order-status",style:{background:f(l.status),border:`1px solid ${j(l.status)}`,color:$(l.status)},children:(h=l.status)==null?void 0:h.toUpperCase()})]}),S(l).length>0&&n.jsxs("div",{className:"image-gallery",style:{marginBottom:32},children:[n.jsx("div",{className:"main-image-container",children:x((P=S(l)[c])==null?void 0:P.src)?n.jsx("img",{src:S(l)[c].src,alt:S(l)[c].name,className:"main-image",onError:v=>{v.target.style.display="none";const z=document.createElement("div");z.className="main-image-placeholder",z.textContent="📸",v.target.parentElement.appendChild(z)}}):n.jsx("div",{className:"main-image-placeholder",children:"📸"})}),S(l).length>1&&n.jsx("div",{className:"image-thumbnails",children:S(l).map((v,z)=>n.jsx("div",{className:`thumbnail ${c===z?"active":""}`,onClick:()=>u(z),children:x(v.src)?n.jsx("img",{src:v.src,alt:`${v.name} ${z+1}`,onError:N=>{N.target.style.display="none",N.target.parentElement.innerHTML='<div class="thumbnail-placeholder">📸</div>'}}):n.jsx("div",{className:"thumbnail-placeholder",children:"📸"})},z))})]}),n.jsxs("div",{style:{marginBottom:32,paddingTop:24,borderTop:`1.5px solid ${R.border}`},children:[n.jsx("div",{className:"info-label",style:{marginBottom:16},children:"Items Ordered"}),(E=l.items)==null?void 0:E.map((v,z)=>{var N,C,W;return n.jsxs("div",{className:"order-item",children:[n.jsx("div",{className:"item-image-mini",children:x(v.image||((N=v.images)==null?void 0:N[0]))?n.jsx("img",{src:v.image||((C=v.images)==null?void 0:C[0]),alt:v.name,onError:U=>{U.target.style.display="none",U.target.parentElement.innerHTML='<div class="item-image-placeholder">📸</div>'}}):n.jsx("div",{className:"item-image-placeholder",children:"📸"})}),n.jsxs("div",{className:"item-details",children:[n.jsx("h4",{children:v.name}),n.jsxs("p",{children:["Qty: ",v.quantity," × ₹",(W=v.price)==null?void 0:W.toLocaleString("en-IN")]})]}),n.jsxs("div",{className:"item-price",children:["₹",(v.quantity*v.price).toLocaleString("en-IN")]})]},z)})]}),n.jsxs("div",{style:{paddingTop:24,borderTop:`1.5px solid ${R.border}`},children:[n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{className:"info-label",style:{margin:0},children:"Subtotal"}),n.jsxs("span",{className:"info-value",children:["₹",(l.totalAmount-(l.shipping||0)).toLocaleString("en-IN")]})]}),n.jsxs("div",{className:"summary-row",children:[n.jsx("span",{className:"info-label",style:{margin:0},children:"Shipping"}),n.jsxs("span",{className:"info-value",children:["₹",(l.shipping||0).toLocaleString("en-IN")]})]}),n.jsxs("div",{className:"summary-row total",children:[n.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,letterSpacing:"0.5px",color:R.text},children:"TOTAL"}),n.jsxs("span",{className:"amount-value",children:["₹",(y=l.totalAmount)==null?void 0:y.toLocaleString("en-IN")]})]})]})]})]})})]})}const M={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function rh(){m.useEffect(()=>{window.scrollTo(0,0)},[]);const[e,t]=m.useState([]),[r,o]=m.useState(""),[i,a]=m.useState(""),[s,l]=m.useState(""),[d,c]=m.useState(5),[u,g]=m.useState(!1),[f,j]=m.useState(!1),{success:$,error:S}=_r();m.useEffect(()=>{w()},[]);const w=()=>{try{g(!0);const y=localStorage.getItem("about_comments");if(y){const v=JSON.parse(y);t(Array.isArray(v)?v:[])}}catch(y){console.error("Failed to load comments:",y)}finally{g(!1)}},x=async y=>{if(y.preventDefault(),!i.trim()){S("Please enter your name");return}if(!s.trim()){S("Please enter your email");return}if(!r.trim()){S("Please enter a comment");return}j(!0);try{const z=[{id:Date.now(),name:i.trim(),email:s.trim(),text:r.trim(),rating:d,timestamp:new Date().toISOString(),date:new Date().toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"numeric"})},...e];localStorage.setItem("about_comments",JSON.stringify(z)),t(z),o(""),a(""),l(""),c(5),$("Thank you! Your feedback has been posted.")}catch(v){console.error("Error posting comment:",v),S("Failed to post comment. Please try again.")}finally{j(!1)}},p=[{label:"Happy Customers",value:"50K+",icon:"💕"},{label:"Products Sold",value:"100K+",icon:"💎"},{label:"Years in Business",value:"4+",icon:"👑"},{label:"5-Star Reviews",value:"9.8/10",icon:"✨"}],h=[{name:"Priya Sharma",location:"Mumbai, India",text:"ARKE jewellery is absolutely stunning! The quality is exceptional and the customer service is outstanding. I've bought multiple pieces and I'm obsessed!",rating:5},{name:"Ananya Patel",location:"Delhi, India",text:"Finally found a brand that offers luxury jewellery at affordable prices. Every piece is a masterpiece. Highly recommended!",rating:5},{name:"Neha Kapoor",location:"Bangalore, India",text:"The hallmark certified gold and waterproof design gives me complete peace of mind. ARKE is my go-to for all occasions!",rating:5}],P=[{icon:"✨",title:"Clarity",desc:"Transparent pricing, genuine products, and honest communication. No hidden surprises."},{icon:"💎",title:"Quality",desc:"Hallmark certified, precision crafted, and built to last. Every detail matters."},{icon:"💕",title:"Loyalty",desc:"We value long-term relationships. Lifetime support and exclusive benefits for you."}],E=[{year:2020,title:"The Beginning",desc:"ARKE was founded with a vision to democratize luxury jewellery."},{year:2021,title:"First Collection",desc:"Launched 50+ unique designs, all hallmark certified & handcrafted."},{year:2022,title:"Expansion",desc:"Reached 50K+ customers across India with premium quality pieces."},{year:2023,title:"Innovation",desc:"Introduced waterproof & tarnish-proof technology to collections."},{year:2024,title:"Today",desc:"Growing strong with new designs, partnerships, and experiences."}];return n.jsxs("div",{style:{background:M.bg,minHeight:"100vh",paddingTop:120},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(32px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Hero Section */
        .about-hero {
          text-align: center;
          padding: 100px 0 80px;
          margin-bottom: 100px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
          border-bottom: 1px solid ${M.border};
        }

        .about-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 300;
          letter-spacing: 3px;
          color: ${M.text};
          margin-bottom: 24px;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${M.text}, ${M.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-hero p {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          letter-spacing: 0.5px;
          color: ${M.textMuted};
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.9;
          font-weight: 400;
        }

        /* Section Title */
        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 300;
          letter-spacing: 2px;
          color: ${M.text};
          margin-bottom: 50px;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          background: linear-gradient(135deg, ${M.text}, ${M.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 0;
          width: 60px;
          height: 2px;
          background: linear-gradient(90deg, ${M.rose}, transparent);
        }

        .about-section {
          margin-bottom: 120px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Story Section */
        .section-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
          margin-top: 50px;
        }

        .section-content:nth-child(even) {
          direction: rtl;
        }

        .section-content:nth-child(even) > * {
          direction: ltr;
        }

        .section-text {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          line-height: 2;
          color: ${M.textMuted};
          letter-spacing: 0.3px;
        }

        .section-text h3 {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: ${M.burgundy};
          text-transform: uppercase;
          margin-bottom: 16px;
          margin-top: 28px;
        }

        .section-text h3:first-child {
          margin-top: 0;
        }

        .section-text p {
          margin-bottom: 24px;
        }

        .section-image {
          width: 100%;
          height: 400px;
          background: linear-gradient(135deg, ${M.blush}30, ${M.champagne}20);
          border: 1.5px solid ${M.border};
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 140px;
          animation: slideInRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* Values Grid */
        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 60px;
        }

        .value-card {
          padding: 48px 40px;
          border: 1.5px solid ${M.border};
          background: ${M.surface};
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }

        .value-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, ${M.rose}15, transparent);
          transition: left 0.6s ease;
        }

        .value-card:hover {
          border-color: ${M.rose};
          background: ${M.surface};
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(232, 180, 196, 0.2);
        }

        .value-card:hover::before {
          left: 100%;
        }

        .value-icon {
          font-size: 48px;
          margin-bottom: 20px;
          display: block;
          animation: float 3s ease-in-out infinite;
        }

        .value-card h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${M.burgundy};
          margin-bottom: 16px;
        }

        .value-card p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${M.textMuted};
          letter-spacing: 0.3px;
        }

        /* Achievements Grid */
        .achievements-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 40px;
          margin-top: 60px;
        }

        .achievement-card {
          text-align: center;
          padding: 40px;
          border: 1.5px solid ${M.border};
          background: ${M.surface};
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .achievement-card:hover {
          border-color: ${M.rose};
          background: linear-gradient(135deg, ${M.blush}8, ${M.champagne}4);
          transform: translateY(-8px);
          box-shadow: 0 12px 32px rgba(232, 180, 196, 0.15);
        }

        .achievement-icon {
          font-size: 48px;
          margin-bottom: 16px;
          animation: float 3s ease-in-out infinite;
        }

        .achievement-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 42px;
          font-weight: 300;
          letter-spacing: 1px;
          background: linear-gradient(135deg, ${M.rose}, ${M.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .achievement-label {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${M.textMuted};
        }

        /* Timeline */
        .timeline {
          position: relative;
          margin-top: 60px;
          padding-left: 50px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, ${M.rose}, ${M.rose}40, transparent);
        }

        .timeline-item {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 40px;
          margin-bottom: 60px;
          position: relative;
        }

        .timeline-item::before {
          content: '';
          position: absolute;
          left: -57px;
          top: 8px;
          width: 16px;
          height: 16px;
          background: ${M.rose};
          border-radius: 50%;
          border: 3px solid ${M.bg};
          box-shadow: 0 0 0 6px ${M.rose}30;
          transition: all 0.3s;
        }

        .timeline-item:hover::before {
          transform: scale(1.3);
          box-shadow: 0 0 0 8px ${M.rose}40;
        }

        .timeline-year {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          letter-spacing: 1px;
          background: linear-gradient(135deg, ${M.rose}, ${M.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-align: right;
        }

        .timeline-content h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${M.burgundy};
          margin-bottom: 12px;
        }

        .timeline-content p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${M.textMuted};
          letter-spacing: 0.3px;
        }

        /* Testimonials */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          margin-top: 60px;
        }

        .testimonial-card {
          padding: 40px;
          border: 1.5px solid ${M.border};
          background: ${M.surface};
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .testimonial-card::before {
          content: '"';
          position: absolute;
          top: 8px;
          right: 20px;
          font-size: 64px;
          color: ${M.rose}30;
          font-family: 'Cormorant Garamond', serif;
        }

        .testimonial-card:hover {
          border-color: ${M.rose};
          background: linear-gradient(135deg, ${M.blush}8, ${M.champagne}4);
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(232, 180, 196, 0.2);
        }

        .testimonial-stars {
          display: flex;
          gap: 4px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }

        .star {
          color: ${M.rose};
          font-size: 14px;
        }

        .testimonial-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.9;
          color: ${M.textMuted};
          letter-spacing: 0.3px;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }

        .testimonial-author {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: ${M.text};
          margin-bottom: 4px;
          position: relative;
          z-index: 1;
        }

        .testimonial-location {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${M.textMuted};
          position: relative;
          z-index: 1;
        }

        /* Comments Section */
        .comments-section {
          background: linear-gradient(135deg, ${M.blush}10, ${M.champagne}5);
          border: 1.5px solid ${M.border};
          border-radius: 16px;
          padding: 60px;
          margin-bottom: 80px;
        }

        .comments-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1.5px solid ${M.border};
        }

        .comments-count {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, ${M.rose}, ${M.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        /* Comment Form */
        .comment-form {
          background: ${M.surface};
          border: 1.5px solid ${M.border};
          padding: 40px;
          border-radius: 12px;
          margin-bottom: 48px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .comment-form h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${M.burgundy};
          margin-bottom: 24px;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-group label {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${M.textMuted};
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          background: ${M.bg};
          border: 1.5px solid ${M.border};
          color: ${M.text};
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 0.3px;
          border-radius: 6px;
          outline: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          resize: vertical;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          border-color: ${M.rose};
          background: ${M.surface};
          box-shadow: 0 0 0 3px rgba(232, 180, 196, 0.15);
        }

        .form-group textarea {
          min-height: 120px;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .rating-group {
          margin-bottom: 24px;
        }

        .rating-group label {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${M.textMuted};
          margin-bottom: 12px;
        }

        .rating-stars {
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .rating-stars input {
          display: none;
        }

        .rating-stars label {
          margin: 0;
          text-transform: none;
          letter-spacing: normal;
          font-weight: normal;
          font-size: 28px;
          cursor: pointer;
          color: ${M.borderLight};
          transition: all 0.3s;
        }

        .rating-stars input:checked ~ label,
        .rating-stars label:hover {
          color: ${M.rose};
          transform: scale(1.2);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, ${M.rose}, ${M.burgundy});
          color: white;
          border: none;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(232, 180, 196, 0.2);
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(232, 180, 196, 0.3);
        }

        .submit-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Comments List */
        .comments-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .comment-item {
          background: ${M.surface};
          border: 1.5px solid ${M.border};
          padding: 32px;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .comment-item:hover {
          border-color: ${M.rose};
          box-shadow: 0 8px 20px rgba(232, 180, 196, 0.15);
        }

        .comment-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
          gap: 16px;
        }

        .comment-author {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: ${M.text};
        }

        .comment-rating {
          display: flex;
          gap: 2px;
        }

        .comment-rating .star {
          font-size: 12px;
          color: ${M.rose};
        }

        .comment-date {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${M.textMuted};
          font-style: italic;
        }

        .comment-email {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${M.textMuted};
          margin-top: 4px;
        }

        .comment-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${M.textMuted};
          letter-spacing: 0.3px;
        }

        .no-comments {
          text-align: center;
          padding: 60px 20px;
        }

        .no-comments-icon {
          font-size: 48px;
          color: ${M.rose}30;
          margin-bottom: 16px;
        }

        .no-comments-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${M.textMuted};
          letter-spacing: 0.3px;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          padding: 100px 60px;
          background: linear-gradient(135deg, ${M.blush}15, ${M.champagne}10);
          border: 1.5px solid ${M.border};
          border-radius: 16px;
          margin-top: 120px;
          margin-bottom: 80px;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at top right, ${M.rose}10, transparent);
          pointer-events: none;
        }

        .cta-section h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 300;
          letter-spacing: 2px;
          background: linear-gradient(135deg, ${M.text}, ${M.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 24px;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }

        .cta-section p {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          line-height: 1.9;
          color: ${M.textMuted};
          margin-bottom: 40px;
          max-width: 650px;
          margin-left: auto;
          margin-right: auto;
          letter-spacing: 0.3px;
          position: relative;
          z-index: 1;
        }

        .cta-btn {
          display: inline-flex;
          padding: 14px 48px;
          background: linear-gradient(135deg, ${M.rose}, ${M.burgundy});
          color: white;
          border: none;
          border-radius: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          text-decoration: none;
          position: relative;
          z-index: 1;
          box-shadow: 0 8px 24px rgba(232, 180, 196, 0.25);
        }

        .cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(232, 180, 196, 0.4);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .about-container {
            padding: 0 20px;
          }

          .about-hero {
            padding: 60px 0;
            margin-bottom: 60px;
          }

          .about-hero h1 {
            font-size: 40px;
            letter-spacing: 2px;
          }

          .about-hero p {
            font-size: 13px;
          }

          .section-title {
            font-size: 32px;
          }

          .section-content {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .section-content:nth-child(even) {
            direction: ltr;
          }

          .section-image {
            height: 300px;
            font-size: 100px;
          }

          .achievements-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 30px;
          }

          .timeline {
            padding-left: 30px;
          }

          .timeline-item {
            grid-template-columns: 80px 1fr;
            gap: 30px;
          }

          .timeline-year {
            font-size: 28px;
          }

          .comment-form {
            padding: 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .comments-section {
            padding: 32px;
          }

          .comments-header {
            flex-direction: column;
            gap: 12px;
          }

          .comment-item {
            padding: 20px;
          }

          .comment-header {
            flex-direction: column;
          }

          .cta-section {
            padding: 60px 30px;
            margin-top: 80px;
          }

          .cta-section h2 {
            font-size: 32px;
          }

          .cta-section p {
            font-size: 13px;
          }
        }
      `}),n.jsxs("div",{className:"about-container",children:[n.jsxs("div",{className:"about-hero",children:[n.jsx("h1",{children:"About ARKE"}),n.jsxs("p",{children:["Jewellery for everyone. Designed for clarity, crafted with loyalty.",n.jsx("br",{}),"We believe in creating pieces that tell your unique story."]})]}),n.jsxs("div",{className:"about-section",children:[n.jsx("h2",{className:"section-title",children:"Our Story"}),n.jsxs("div",{className:"section-content",children:[n.jsxs("div",{className:"section-text",children:[n.jsx("p",{children:"ARKE was born from a passion to democratize luxury jewellery. We believe that everyone deserves to wear pieces that make them feel confident, beautiful, and empowered. Our journey started with a simple vision: create stunning, hallmark-certified jewellery that's accessible and authentic."}),n.jsx("p",{children:"Each piece in our collection is carefully designed by our team of master craftspeople, ensuring that every detail is perfect. From concept to creation, we maintain the highest standards of quality, sustainability, and artistry."}),n.jsx("h3",{children:"Our Commitment"}),n.jsx("p",{children:"We're committed to ethical sourcing, premium materials, and exceptional customer service. Your satisfaction is our greatest achievement."})]}),n.jsx("div",{className:"section-image",children:"💎"})]})]}),n.jsxs("div",{className:"about-section",children:[n.jsx("h2",{className:"section-title",children:"By The Numbers"}),n.jsx("div",{className:"achievements-grid",children:p.map((y,v)=>n.jsxs("div",{className:"achievement-card",children:[n.jsx("div",{className:"achievement-icon",children:y.icon}),n.jsx("div",{className:"achievement-value",children:y.value}),n.jsx("div",{className:"achievement-label",children:y.label})]},v))})]}),n.jsxs("div",{className:"about-section",children:[n.jsx("h2",{className:"section-title",children:"Our Values"}),n.jsx("div",{className:"values-grid",children:P.map((y,v)=>n.jsxs("div",{className:"value-card",children:[n.jsx("span",{className:"value-icon",children:y.icon}),n.jsx("h4",{children:y.title}),n.jsx("p",{children:y.desc})]},v))})]}),n.jsxs("div",{className:"about-section",children:[n.jsx("h2",{className:"section-title",children:"Our Journey"}),n.jsx("div",{className:"timeline",children:E.map((y,v)=>n.jsxs("div",{className:"timeline-item",children:[n.jsx("div",{className:"timeline-year",children:y.year}),n.jsxs("div",{className:"timeline-content",children:[n.jsx("h4",{children:y.title}),n.jsx("p",{children:y.desc})]})]},v))})]}),n.jsxs("div",{className:"about-section",children:[n.jsx("h2",{className:"section-title",children:"Customer Love"}),n.jsx("div",{className:"testimonials-grid",children:h.map((y,v)=>n.jsxs("div",{className:"testimonial-card",children:[n.jsx("div",{className:"testimonial-stars",children:[...Array(y.rating)].map((z,N)=>n.jsx("span",{className:"star",children:"★"},N))}),n.jsxs("p",{className:"testimonial-text",children:['"',y.text,'"']}),n.jsx("div",{className:"testimonial-author",children:y.name}),n.jsxs("div",{className:"testimonial-location",children:["📍 ",y.location]})]},v))})]}),n.jsxs("div",{className:"about-section comments-section",children:[n.jsxs("div",{className:"comments-header",children:[n.jsx("h2",{className:"section-title",children:"Visitor Feedback"}),n.jsxs("span",{className:"comments-count",children:["💬 ",e.length," ",e.length===1?"Comment":"Comments"]})]}),n.jsxs("form",{className:"comment-form",onSubmit:x,children:[n.jsx("h3",{children:"Share Your Thoughts"}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"name",children:"Your Name *"}),n.jsx("input",{id:"name",type:"text",value:i,onChange:y=>a(y.target.value),placeholder:"Enter your name",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"email",children:"Your Email *"}),n.jsx("input",{id:"email",type:"email",value:s,onChange:y=>l(y.target.value),placeholder:"Enter your email",required:!0})]})]}),n.jsxs("div",{className:"rating-group",children:[n.jsx("label",{children:"How would you rate ARKE?"}),n.jsx("div",{className:"rating-stars",children:[5,4,3,2,1].map(y=>n.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[n.jsx("input",{id:`star${y}`,type:"radio",name:"rating",value:y,checked:d===y,onChange:v=>c(Number(v.target.value))}),n.jsx("label",{htmlFor:`star${y}`,style:{color:d>=y?M.rose:M.borderLight},children:"★"})]},y))})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{htmlFor:"comment",children:"Your Feedback *"}),n.jsx("textarea",{id:"comment",value:r,onChange:y=>o(y.target.value),placeholder:"Share your experience with us...",required:!0})]}),n.jsx("button",{type:"submit",className:"submit-btn",disabled:f||u,children:f?"Posting...":"Post Comment"})]}),n.jsx("div",{className:"comments-list",children:u?n.jsx("div",{style:{textAlign:"center",padding:"40px",fontFamily:"'Poppins', sans-serif",fontSize:"12px",color:M.textMuted},children:"Loading comments..."}):e.length===0?n.jsxs("div",{className:"no-comments",children:[n.jsx("div",{className:"no-comments-icon",children:"💭"}),n.jsx("div",{className:"no-comments-text",children:"Be the first to share your feedback!"})]}):e.map(y=>n.jsxs("div",{className:"comment-item",children:[n.jsxs("div",{className:"comment-header",children:[n.jsxs("div",{children:[n.jsx("div",{className:"comment-author",children:y.name}),n.jsxs("div",{className:"comment-email",children:["📧 ",y.email]}),n.jsxs("div",{className:"comment-date",children:["Posted on ",y.date]})]}),n.jsx("div",{className:"comment-rating",children:[...Array(y.rating)].map((v,z)=>n.jsx("span",{className:"star",children:"★"},z))})]}),n.jsxs("p",{className:"comment-text",children:['"',y.text,'"']})]},y.id))})]}),n.jsxs("div",{className:"cta-section",children:[n.jsx("h2",{children:"Ready to Discover?"}),n.jsx("p",{children:"Explore our latest collections and find the perfect piece that speaks to your heart. Every item is handcrafted with care and designed just for you."}),n.jsx(Oe,{to:"/products",className:"cta-btn",children:"Shop Our Collection"})]})]})]})}const se={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4",success:"#70c878",error:"#d97070"};function nh(){const[e,t]=m.useState({name:"",email:"",phone:"",subject:"",message:""}),[r,o]=m.useState(!1),[i,a]=m.useState(""),[s,l]=m.useState("");m.useEffect(()=>{window.scrollTo(0,0)},[]);const d=g=>{const{name:f,value:j}=g.target;t($=>({...$,[f]:j})),l("")},c=()=>e.name.trim()?e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)?e.phone.trim()?e.subject.trim()?e.message.trim()?!0:(l("Please enter your message"),!1):(l("Please select a subject"),!1):(l("Please enter your phone number"),!1):(l("Please enter a valid email"),!1):(l("Please enter your email"),!1):(l("Please enter your name"),!1),u=async g=>{if(g.preventDefault(),l(""),a(""),!!c()){o(!0);try{const f=await fetch(`${gn}/CustomerCare`,{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify(e)}),j=await f.json();f.ok?(a("Thank you! We'll get back to you soon."),t({name:"",email:"",phone:"",subject:"",message:""}),setTimeout(()=>a(""),5e3)):l(j.message||"Something went wrong. Please try again.")}catch(f){l("Network error. Please check your connection and try again."),console.error("CustomerCare form error:",f)}finally{o(!1)}}};return n.jsxs("div",{style:{background:se.bg,minHeight:"100vh",paddingTop:120},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-4px); }
        }

        .customercare-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 40px;
        }

        .customercare-hero {
          text-align: center;
          padding: 80px 0 60px;
          border-bottom: 1.5px solid ${se.border};
          margin-bottom: 80px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .customercare-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 56px;
          font-weight: 300;
          letter-spacing: 2px;
          color: ${se.text};
          margin-bottom: 16px;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${se.text}, ${se.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .customercare-hero p {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          letter-spacing: 0.5px;
          color: ${se.textMuted};
          max-width: 600px;
          margin: 0 auto;
          font-weight: 400;
        }

        .customercare-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          margin-bottom: 100px;
          align-items: start;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
        }

        .customercare-info {
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        .info-block {
          padding-bottom: 32px;
          border-bottom: 1.5px solid ${se.border};
        }

        .info-block:last-child {
          border-bottom: none;
        }

        .info-title {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${se.burgundy};
          margin-bottom: 12px;
        }

        .info-content {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: ${se.textMuted};
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .info-content a {
          color: ${se.burgundy};
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          font-weight: 600;
        }

        .info-content a:hover {
          color: ${se.rose};
          transform: translateX(2px);
        }

        .customercare-form {
          display: flex;
          flex-direction: column;
          gap: 24px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-label {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: ${se.burgundy};
        }

        .form-input,
        .form-textarea,
        .form-select {
          padding: 13px 14px;
          background: ${se.blush}15;
          border: 1.5px solid ${se.border};
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${se.text};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: ${se.textMuted}60;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          background: ${se.blush}25;
          border-color: ${se.rose};
          box-shadow: 0 0 0 3px ${se.blush}40;
        }

        .form-textarea {
          resize: vertical;
          min-height: 140px;
          font-family: 'Poppins', sans-serif;
        }

        .form-select {
          cursor: pointer;
        }

        .form-select option {
          background: ${se.surface};
          color: ${se.text};
        }

        .form-button {
          padding: 14px 32px;
          background: linear-gradient(135deg, ${se.rose}, ${se.burgundy});
          color: white;
          border: none;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          margin-top: 10px;
          box-shadow: 0 4px 16px ${se.rose}30;
        }

        .form-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px ${se.rose}40;
        }

        .form-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .message-alert {
          padding: 14px 16px;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 0.3px;
          animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          font-weight: 500;
        }

        .success-message {
          background: rgba(112, 200, 120, 0.08);
          border: 1px solid ${se.success}40;
          color: ${se.success}90;
        }

        .error-message {
          background: rgba(217, 112, 112, 0.08);
          border: 1px solid ${se.error}40;
          color: ${se.error}90;
        }

        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 16px;
          flex-wrap: wrap;
        }

        .social-link {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          text-decoration: none;
          color: ${se.rose};
          font-size: 20px;
          border: 1.5px solid ${se.rose};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: transparent;
        }

        .social-link:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px ${se.rose}30;
        }

        .instagram:hover {
          background: #E4405F;
          border-color: #E4405F;
          color: white;
        }

        .pinterest:hover {
          background: #BD081C;
          border-color: #BD081C;
          color: white;
        }

        .whatsapp:hover {
          background: #25D366;
          border-color: #25D366;
          color: white;
        }

        .email:hover {
          background: #EA4335;
          border-color: #EA4335;
          color: white;
        }

        @media (max-width: 768px) {
          .customercare-container {
            padding: 0 20px;
          }

          .customercare-hero {
            padding: 60px 0 40px;
          }

          .customercare-hero h1 {
            font-size: 36px;
          }

          .customercare-content {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .customercare-info {
            order: 2;
          }

          .customercare-form {
            order: 1;
          }
        }
      `}),n.jsxs("div",{className:"customercare-container",children:[n.jsxs("div",{className:"customercare-hero",children:[n.jsx("h1",{children:"Get in Touch"}),n.jsx("p",{children:"We'd love to hear from you. Send us a message and we'll respond as soon as possible."})]}),n.jsxs("div",{className:"customercare-content",children:[n.jsxs("div",{className:"customercare-info",children:[n.jsxs("div",{className:"info-block",children:[n.jsx("div",{className:"info-title",children:"📍 Address"}),n.jsxs("div",{className:"info-content",children:["ARKE Jewellery",n.jsx("br",{}),"123 Luxury Lane",n.jsx("br",{}),"Jaipur, Rajasthan 302001",n.jsx("br",{}),"India"]})]}),n.jsxs("div",{className:"info-block",children:[n.jsx("div",{className:"info-title",children:"📞 Phone"}),n.jsxs("div",{className:"info-content",children:[n.jsx("a",{href:"tel:+919876543210",children:"+91 98765 43210"}),n.jsx("br",{}),n.jsx("span",{style:{color:se.textMuted,fontWeight:400},children:"Mon - Fri, 10 AM - 6 PM IST"})]})]}),n.jsxs("div",{className:"info-block",children:[n.jsx("div",{className:"info-title",children:"✉️ Email"}),n.jsxs("div",{className:"info-content",children:[n.jsx("a",{href:"mailto:hello@arke.com",children:"hello@arke.com"}),n.jsx("br",{}),n.jsx("a",{href:"mailto:support@arke.com",children:"support@arke.com"})]})]}),n.jsxs("div",{className:"info-block",children:[n.jsx("div",{className:"info-title",children:"💬 Live Chat"}),n.jsxs("div",{className:"info-content",children:["Available on WhatsApp",n.jsx("br",{}),n.jsx("a",{href:"https://wa.me/919876543210",children:"Message us here →"})]})]}),n.jsxs("div",{className:"info-block",children:[n.jsx("div",{className:"info-title",children:"Follow Us"}),n.jsxs("div",{className:"social-links",children:[n.jsx("a",{href:"https://instagram.com/arke.jewellery",target:"_blank",rel:"noopener noreferrer",className:"social-link instagram",title:"Instagram",children:n.jsx(Np,{})}),n.jsx("a",{href:"https://pinterest.com/arkejewellery",target:"_blank",rel:"noopener noreferrer",className:"social-link pinterest",title:"Pinterest",children:n.jsx(Pp,{})}),n.jsx("a",{href:"https://wa.me/919876543210",target:"_blank",rel:"noopener noreferrer",className:"social-link whatsapp",title:"WhatsApp",children:n.jsx(zp,{})}),n.jsx("a",{href:"mailto:hello@arke.com",className:"social-link email",title:"Email",children:n.jsx(Tp,{})})]})]})]}),n.jsxs("form",{className:"customercare-form",onSubmit:u,children:[i&&n.jsxs("div",{className:"message-alert success-message",children:["✓ ",i]}),s&&n.jsxs("div",{className:"message-alert error-message",children:["✕ ",s]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Your Name *"}),n.jsx("input",{type:"text",name:"name",className:"form-input",placeholder:"Enter your full name",value:e.name,onChange:d,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Email Address *"}),n.jsx("input",{type:"email",name:"email",className:"form-input",placeholder:"your@email.com",value:e.email,onChange:d,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Phone Number *"}),n.jsx("input",{type:"tel",name:"phone",className:"form-input",placeholder:"+91 XXXXX XXXXX",value:e.phone,onChange:d,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Subject *"}),n.jsxs("select",{name:"subject",className:"form-select",value:e.subject,onChange:d,required:!0,children:[n.jsx("option",{value:"",children:"Select a subject"}),n.jsx("option",{value:"general",children:"General Inquiry"}),n.jsx("option",{value:"order",children:"Order Related"}),n.jsx("option",{value:"return",children:"Returns & Exchanges"}),n.jsx("option",{value:"warranty",children:"Warranty Support"}),n.jsx("option",{value:"custom",children:"Custom Design"}),n.jsx("option",{value:"partnership",children:"Partnership"}),n.jsx("option",{value:"other",children:"Other"})]})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Message *"}),n.jsx("textarea",{name:"message",className:"form-textarea",placeholder:"Tell us more about your inquiry...",value:e.message,onChange:d,required:!0})]}),n.jsx("button",{type:"submit",className:"form-button",disabled:r,children:r?"Sending...":"Send Message"})]})]})]})]})}const J={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4",success:"#70c878",error:"#d97070"};function oh(){var E,y;const{user:e}=ho(),[t,r]=m.useState(null),[o,i]=m.useState(!1),[a,s]=m.useState(!0),[l,d]=m.useState(!1),[c,u]=m.useState(""),[g,f]=m.useState(""),[j,$]=m.useState({accountHolderName:"",bankName:"",accountNumber:"",confirmAccountNumber:"",ifscCode:"",accountType:"savings"});m.useEffect(()=>{window.scrollTo(0,0),e!=null&&e._id||e!=null&&e.id?S():(s(!1),u("Please log in to manage bank details"),f("error"))},[e]);const S=async()=>{s(!0);try{const v=e._id||e.id,z=await fetch(`${gn}/bank-details/${v}`,{method:"GET",headers:{Authorization:`Bearer ${localStorage.getItem("arke_token")}`,"Content-Type":"application/json"}}),N=await z.json();z.ok&&N.data?(r(N.data),$({accountHolderName:N.data.accountHolderName||"",bankName:N.data.bankName||"",accountNumber:"",confirmAccountNumber:"",ifscCode:N.data.ifscCode||"",accountType:N.data.accountType||"savings"}),u("")):z.status===404||N.message==="Bank details not found"?(r(null),$({accountHolderName:"",bankName:"",accountNumber:"",confirmAccountNumber:"",ifscCode:"",accountType:"savings"}),u("")):(r(null),$({accountHolderName:"",bankName:"",accountNumber:"",confirmAccountNumber:"",ifscCode:"",accountType:"savings"}),u(""))}catch(v){console.error("Fetch error:",v),r(null),u("")}finally{s(!1)}},w=()=>j.accountHolderName.trim()?j.bankName.trim()?!j.accountNumber||j.accountNumber.length<9?(u("Please enter a valid account number (9-16 digits)"),f("error"),!1):j.accountNumber.length>16?(u("Account number cannot exceed 16 digits"),f("error"),!1):j.accountNumber!==j.confirmAccountNumber?(u("Account numbers do not match"),f("error"),!1):!j.ifscCode||j.ifscCode.length!==11?(u("Please enter a valid IFSC code (11 characters)"),f("error"),!1):!0:(u("Please select a bank"),f("error"),!1):(u("Please enter account holder name"),f("error"),!1),x=v=>{const{name:z,value:N}=v.target;$(C=>({...C,[z]:z==="ifscCode"?N.toUpperCase():N})),u("")},p=async v=>{if(v.preventDefault(),!!w()){d(!0);try{const z=await fetch(`${gn}/bank-details`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("arke_token")}`,"Content-Type":"application/json"},body:JSON.stringify({accountHolderName:j.accountHolderName,bankName:j.bankName,accountNumber:j.accountNumber,ifscCode:j.ifscCode.toUpperCase(),accountType:j.accountType})}),N=await z.json();z.ok?(u("✓ Bank details saved successfully"),f("success"),r(N.data),i(!1),$(C=>({...C,accountNumber:"",confirmAccountNumber:""})),setTimeout(()=>u(""),5e3)):(u(N.message||"Failed to save bank details"),f("error"))}catch(z){console.error("Submit error:",z),u("Network error. Please try again."),f("error")}finally{d(!1)}}},h=v=>v?`••••••••${v.slice(-4)}`:"••••••••••••••••",P=[{value:"State Bank of India",label:"State Bank of India (SBI)"},{value:"HDFC Bank",label:"HDFC Bank"},{value:"ICICI Bank",label:"ICICI Bank"},{value:"Axis Bank",label:"Axis Bank"},{value:"Bank of Baroda",label:"Bank of Baroda"},{value:"Kotak Mahindra Bank",label:"Kotak Mahindra Bank"},{value:"Yes Bank",label:"Yes Bank"},{value:"IndusInd Bank",label:"IndusInd Bank"},{value:"Other",label:"Other Bank"}];return n.jsxs("div",{style:{background:J.bg,minHeight:"100vh",paddingTop:120},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .bank-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 40px 80px;
        }

        .bank-header {
          margin-bottom: 50px;
          animation: fadeIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .bank-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 52px;
          font-weight: 300;
          letter-spacing: 2px;
          color: ${J.text};
          margin-bottom: 12px;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${J.text}, ${J.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bank-header p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          letter-spacing: 0.5px;
          color: ${J.textMuted};
          font-weight: 400;
        }

        .security-notice {
          padding: 18px 20px;
          background: rgba(112, 200, 120, 0.08);
          border: 1.5px solid ${J.success}40;
          border-radius: 8px;
          margin-bottom: 40px;
          display: flex;
          gap: 14px;
          animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .security-notice-icon {
          font-size: 20px;
          flex-shrink: 0;
        }

        .security-notice-text {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${J.success}90;
          letter-spacing: 0.3px;
          line-height: 1.6;
          font-weight: 500;
        }

        .bank-card {
          border: 1.5px solid ${J.border};
          border-radius: 12px;
          padding: 44px;
          background: ${J.surface};
          margin-bottom: 40px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
          animation: fadeIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          padding-bottom: 20px;
          border-bottom: 1.5px solid ${J.border};
        }

        .card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${J.burgundy};
        }

        .edit-btn {
          padding: 9px 18px;
          background: transparent;
          border: 1.5px solid ${J.rose};
          color: ${J.burgundy};
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .edit-btn:hover {
          border-color: ${J.burgundy};
          background: linear-gradient(135deg, ${J.rose}20, ${J.burgundy}10);
          transform: translateY(-2px);
        }

        .bank-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 20px;
        }

        .info-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .info-label {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: ${J.textMuted};
        }

        .info-value {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: ${J.text};
          letter-spacing: 0.3px;
          font-weight: 500;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.2px;
          text-transform: uppercase;
          color: ${J.burgundy};
          margin-bottom: 10px;
          display: block;
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 12px 14px;
          background: ${J.blush}15;
          border: 1.5px solid ${J.border};
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${J.text};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.3px;
        }

        .form-input::placeholder {
          color: ${J.textMuted}60;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          background: ${J.blush}25;
          border-color: ${J.rose};
          box-shadow: 0 0 0 3px ${J.blush}40;
        }

        .form-select option {
          background: ${J.surface};
          color: ${J.text};
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }

        .button-group {
          display: flex;
          gap: 12px;
          margin-top: 32px;
        }

        .btn-primary {
          flex: 1;
          padding: 13px 32px;
          background: linear-gradient(135deg, ${J.rose}, ${J.burgundy});
          color: white;
          border: none;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 16px rgba(232, 180, 196, 0.2);
        }

        .btn-primary:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(232, 180, 196, 0.35);
        }

        .btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .btn-secondary {
          flex: 1;
          padding: 13px 32px;
          background: transparent;
          color: ${J.burgundy};
          border: 1.5px solid ${J.rose};
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .btn-secondary:hover {
          border-color: ${J.burgundy};
          background: linear-gradient(135deg, ${J.rose}20, ${J.burgundy}10);
          transform: translateY(-2px);
        }

        .message-alert {
          padding: 14px 16px;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          letter-spacing: 0.3px;
          margin-bottom: 20px;
          animation: slideIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          font-weight: 500;
        }

        .success-message {
          background: rgba(112, 200, 120, 0.08);
          border: 1px solid ${J.success}40;
          color: ${J.success}90;
        }

        .error-message {
          background: rgba(217, 112, 112, 0.08);
          border: 1px solid ${J.error}40;
          color: ${J.error}90;
        }

        .info-message {
          background: rgba(100, 181, 246, 0.08);
          border: 1px solid rgba(100, 181, 246, 0.4);
          color: rgba(100, 181, 246, 0.9);
        }

        .loading-state {
          text-align: center;
          padding: 80px 40px;
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid ${J.border};
          border-top-color: ${J.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 24px;
        }

        .loading-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${J.textMuted};
          font-weight: 500;
          letter-spacing: 0.3px;
        }

        @media (max-width: 768px) {
          .bank-container {
            padding: 0 20px 60px;
          }

          .bank-header h1 {
            font-size: 36px;
            letter-spacing: 1px;
          }

          .bank-card {
            padding: 32px;
          }

          .bank-info {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .button-group {
            flex-direction: column;
          }

          .card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
        }
      `}),n.jsxs("div",{className:"bank-container",children:[n.jsxs("div",{className:"bank-header",children:[n.jsx("h1",{children:"Bank Details"}),n.jsx("p",{children:"Securely manage your account information"})]}),n.jsxs("div",{className:"security-notice",children:[n.jsx("div",{className:"security-notice-icon",children:"🔒"}),n.jsx("div",{className:"security-notice-text",children:"Your bank details are encrypted with industry-standard AES-256 encryption. We never share your information."})]}),c&&n.jsx("div",{className:`message-alert ${g}-message`,children:c}),a&&n.jsxs("div",{className:"loading-state",children:[n.jsx("div",{className:"loading-spinner"}),n.jsx("p",{className:"loading-text",children:"Loading your bank details..."})]}),!a&&n.jsx(n.Fragment,{children:t&&!o?n.jsxs("div",{className:"bank-card",children:[n.jsxs("div",{className:"card-header",children:[n.jsx("div",{className:"card-title",children:"✓ Account Details"}),n.jsx("button",{className:"edit-btn",onClick:()=>i(!0),children:"Edit Details"})]}),n.jsxs("div",{className:"bank-info",children:[n.jsxs("div",{className:"info-field",children:[n.jsx("div",{className:"info-label",children:"Account Holder Name"}),n.jsx("div",{className:"info-value",children:t.accountHolderName})]}),n.jsxs("div",{className:"info-field",children:[n.jsx("div",{className:"info-label",children:"Bank Name"}),n.jsx("div",{className:"info-value",children:t.bankName})]}),n.jsxs("div",{className:"info-field",children:[n.jsx("div",{className:"info-label",children:"Account Number"}),n.jsx("div",{className:"info-value",children:h(t.accountNumber)})]}),n.jsxs("div",{className:"info-field",children:[n.jsx("div",{className:"info-label",children:"Account Type"}),n.jsx("div",{className:"info-value",children:((E=t.accountType)==null?void 0:E.charAt(0).toUpperCase())+((y=t.accountType)==null?void 0:y.slice(1))})]}),n.jsxs("div",{className:"info-field",children:[n.jsx("div",{className:"info-label",children:"IFSC Code"}),n.jsx("div",{className:"info-value",children:t.ifscCode})]}),n.jsxs("div",{className:"info-field",children:[n.jsx("div",{className:"info-label",children:"Last Updated"}),n.jsx("div",{className:"info-value",children:new Date(t.updatedAt).toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"numeric"})})]})]})]}):n.jsxs("div",{className:"bank-card",children:[n.jsx("div",{className:"card-title",style:{marginBottom:30},children:t?"Update Bank Details":"Add Bank Details"}),n.jsxs("form",{onSubmit:p,children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Account Holder Name *"}),n.jsx("input",{type:"text",name:"accountHolderName",className:"form-input",placeholder:"Your full name",value:j.accountHolderName,onChange:x,required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Bank Name *"}),n.jsxs("select",{name:"bankName",className:"form-select",value:j.bankName,onChange:x,required:!0,children:[n.jsx("option",{value:"",children:"Select your bank"}),P.map(v=>n.jsx("option",{value:v.value,children:v.label},v.value))]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Account Number *"}),n.jsx("input",{type:"password",name:"accountNumber",className:"form-input",placeholder:"9-16 digits",value:j.accountNumber,onChange:x,minLength:"9",maxLength:"16",required:!0,inputMode:"numeric"})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Confirm Account Number *"}),n.jsx("input",{type:"password",name:"confirmAccountNumber",className:"form-input",placeholder:"Re-enter for safety",value:j.confirmAccountNumber,onChange:x,minLength:"9",maxLength:"16",required:!0,inputMode:"numeric"})]})]}),n.jsxs("div",{className:"form-row",children:[n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"IFSC Code *"}),n.jsx("input",{type:"text",name:"ifscCode",className:"form-input",placeholder:"e.g., SBIN0001234",value:j.ifscCode,onChange:x,maxLength:"11",required:!0})]}),n.jsxs("div",{className:"form-group",children:[n.jsx("label",{className:"form-label",children:"Account Type *"}),n.jsxs("select",{name:"accountType",className:"form-select",value:j.accountType,onChange:x,children:[n.jsx("option",{value:"savings",children:"Savings"}),n.jsx("option",{value:"current",children:"Current"}),n.jsx("option",{value:"business",children:"Business"})]})]})]}),n.jsxs("div",{className:"button-group",children:[n.jsx("button",{type:"submit",className:"btn-primary",disabled:l,children:l?"Saving...":"Save Bank Details"}),t&&n.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>{i(!1),u("")},children:"Cancel"})]})]})]})})]})]})}const Z={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4"},ih=[{_id:"1",title:"Acceptance of Terms",icon:"📜",content:["By accessing or using the Arke Jewellery website, you agree to be bound by these Terms & Conditions.","If you do not agree with any part of these terms, please do not use our services.","We reserve the right to modify these terms at any time. Continued use constitutes acceptance of changes.","These terms apply to all visitors, users, and customers of our website and services."]},{_id:"2",title:"Products & Pricing",icon:"💎",content:["All product descriptions, images, and specifications are as accurate as possible.","Prices are listed in Indian Rupees (₹) and include applicable taxes unless stated otherwise.","We reserve the right to modify prices without prior notice. Orders placed before price changes will be honored.","Product availability is subject to change. We may limit quantities per customer.","Slight variations in color, size, or finish may occur due to the handcrafted nature of our jewelry."]},{_id:"3",title:"Orders & Payment",icon:"🛒",content:["Placing an order constitutes an offer to purchase. We may accept or decline at our discretion.","Payment must be completed at the time of order using accepted payment methods.","We accept Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery (where available).","Order confirmation will be sent via email. Please verify all details upon receipt.","We reserve the right to cancel orders if fraud or pricing errors are detected."]},{_id:"4",title:"User Accounts",icon:"👤",content:["You are responsible for maintaining the confidentiality of your account credentials.","You must provide accurate and complete information during registration.","You are liable for all activities that occur under your account.","We reserve the right to suspend or terminate accounts that violate our policies.","Notify us immediately if you suspect unauthorized access to your account."]},{_id:"5",title:"Intellectual Property",icon:"©️",content:["All content on this website — including designs, images, logos, and text — is owned by Arke Jewellery.","Unauthorized reproduction, distribution, or use of our content is strictly prohibited.","Our jewelry designs are original and protected under applicable intellectual property laws.","User-submitted content (reviews, photos) grants us a non-exclusive license to display it."]},{_id:"6",title:"Limitation of Liability",icon:"⚠️",content:["Arke Jewellery shall not be liable for any indirect, incidental, or consequential damages.","Our total liability shall not exceed the amount paid for the specific product in question.","We are not responsible for delays caused by third-party shipping carriers or force majeure events.","The website is provided 'as is' — we do not guarantee uninterrupted or error-free service."]},{_id:"7",title:"Governing Law",icon:"🏛️",content:["These terms are governed by the laws of India and the jurisdiction of Mumbai courts.","Any disputes shall be resolved through arbitration before pursuing legal action.","If any provision is found unenforceable, the remaining provisions shall remain in effect."]}];function Gd(){const e=qe(),[t,r]=m.useState(ih),[o,i]=m.useState(!1),[a,s]=m.useState("June 2025"),[l]=m.useState({name:"Arke Jewellery",email:"legal@arke.com",phone:"+91 98765 43210"});return m.useEffect(()=>{window.scrollTo(0,0)},[]),n.jsxs("div",{style:{background:Z.bg,minHeight:"100vh",paddingTop:120},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes slideRight {
          from { opacity:0; transform:translateX(-16px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes spin { to { transform:rotate(360deg); } }
        .policy-section-card {
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .policy-section-card:hover {
          border-color: rgba(232,180,196,0.5) !important;
          box-shadow: 0 8px 32px rgba(232,180,196,0.12) !important;
          transform: translateY(-2px) !important;
        }
        .policy-bullet {
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .policy-bullet:hover {
          background: rgba(245,213,224,0.2) !important;
          padding-left: 20px !important;
        }
        @media (max-width: 768px) {
          .policy-header { padding: 40px 20px 30px !important; }
          .policy-content { padding: 24px 20px 60px !important; }
        }
      `}),n.jsxs("div",{className:"policy-header",style:{padding:"60px 80px 40px",borderBottom:`1.5px solid ${Z.border}`,animation:"fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:20},children:[n.jsx("span",{onClick:()=>e("/"),style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:Z.rose,cursor:"pointer",fontWeight:500,transition:"color 0.2s"},onMouseEnter:d=>d.target.style.color=Z.burgundy,onMouseLeave:d=>d.target.style.color=Z.rose,children:"Home"}),n.jsx("span",{style:{color:Z.textMuted,fontSize:10},children:"›"}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:Z.text,fontWeight:600},children:"Terms & Conditions"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:14},children:[n.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(90deg,${Z.rose},${Z.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:Z.burgundy,fontWeight:600},children:"Our Agreement"})]}),n.jsx("h1",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,4vw,52px)",fontWeight:300,margin:"0 0 14px",background:`linear-gradient(135deg,${Z.text},${Z.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Terms & Conditions"}),n.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:Z.textMuted,maxWidth:580,lineHeight:1.7,margin:"0 0 16px"},children:"Please read these terms carefully before using our website or purchasing our products. By using Arke Jewellery, you agree to these terms."}),n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 14px",background:`${Z.blush}18`,borderRadius:20,border:`1px solid ${Z.rose}30`},children:[n.jsx("span",{style:{fontSize:12},children:"🕐"}),n.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:Z.textMuted,fontWeight:500},children:["Last updated: ",a]})]})]}),o?n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:100,gap:16},children:[n.jsx("div",{style:{width:40,height:40,border:`3px solid ${Z.border}`,borderTopColor:Z.rose,borderRadius:"50%",animation:"spin 1s linear infinite"}}),n.jsx("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:Z.textMuted,fontStyle:"italic"},children:"Loading…"})]}):n.jsxs("div",{className:"policy-content",style:{padding:"48px 80px 80px",maxWidth:900,margin:"0 auto"},children:[t.map((d,c)=>n.jsxs("div",{className:"policy-section-card",style:{background:Z.surface,border:`1.5px solid ${Z.border}`,borderRadius:14,padding:36,marginBottom:24,boxShadow:"0 2px 12px rgba(0,0,0,0.03)",animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${c*.08}s both`},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:20},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg,${Z.blush}40,${Z.champagne}30)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0,border:`1px solid ${Z.rose}25`},children:d.icon}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",color:Z.rose,fontWeight:700,marginBottom:2},children:["Section ",c+1]}),n.jsx("h3",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:400,margin:0,color:Z.text},children:d.title})]})]}),n.jsx("div",{style:{height:1,background:`linear-gradient(90deg,${Z.rose}40,transparent)`,marginBottom:20}}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:d.content.map((u,g)=>n.jsxs("div",{className:"policy-bullet",style:{display:"flex",alignItems:"flex-start",gap:12,padding:"10px 14px",borderRadius:8,animation:`slideRight 0.4s cubic-bezier(0.34,1.56,0.64,1) ${c*.08+g*.05}s both`},children:[n.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:`linear-gradient(135deg,${Z.rose},${Z.burgundy})`,marginTop:7,flexShrink:0}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:Z.text,lineHeight:1.7},children:u})]},g))})]},d._id)),n.jsxs("div",{style:{background:`linear-gradient(135deg,${Z.blush}20,${Z.champagne}15)`,border:`1.5px solid ${Z.rose}35`,borderRadius:14,padding:40,marginTop:16,textAlign:"center",animation:"fadeInUp 0.6s 0.3s cubic-bezier(0.34,1.56,0.64,1) both"},children:[n.jsx("div",{style:{fontSize:28,marginBottom:14},children:"💌"}),n.jsx("h3",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,margin:"0 0 10px",color:Z.text},children:"Questions About Our Terms?"}),n.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:Z.textMuted,margin:"0 0 24px",lineHeight:1.6},children:"If you need clarification on any of our terms, our team is here to help."}),n.jsx("div",{style:{display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap"},children:[{icon:"✉",label:l.email,href:`mailto:${l.email}`},{icon:"📱",label:l.phone,href:`tel:${l.phone}`}].map(d=>n.jsxs("a",{href:d.href,style:{display:"flex",alignItems:"center",gap:8,padding:"10px 20px",background:Z.surface,borderRadius:8,border:`1.5px solid ${Z.border}`,textDecoration:"none",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:c=>{c.currentTarget.style.borderColor=Z.rose,c.currentTarget.style.transform="translateY(-2px)",c.currentTarget.style.boxShadow=`0 6px 20px ${Z.rose}20`},onMouseLeave:c=>{c.currentTarget.style.borderColor=Z.border,c.currentTarget.style.transform="translateY(0)",c.currentTarget.style.boxShadow="none"},children:[n.jsx("span",{style:{fontSize:14},children:d.icon}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:600,color:Z.burgundy},children:d.label})]},d.label))})]})]})]})}const ee={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4"},ah=[{_id:"1",title:"Information We Collect",icon:"📋",content:["Personal identification information (name, email, phone number, shipping address)","Payment information processed securely through our payment partners","Browsing behavior and preferences on our website","Device information and IP address for security purposes","Order history and communication records"]},{_id:"2",title:"How We Use Your Information",icon:"🔍",content:["To process and fulfill your jewelry orders accurately","To personalize your shopping experience and recommendations","To communicate order updates, shipping notifications, and support","To improve our website, products, and customer service","To detect and prevent fraudulent transactions"]},{_id:"3",title:"Data Protection & Security",icon:"🔒",content:["All data is encrypted using industry-standard SSL/TLS protocols","Payment information is never stored on our servers — processed by PCI-compliant partners","Regular security audits and vulnerability assessments","Employee access to personal data is strictly limited and monitored","Two-factor authentication available for customer accounts"]},{_id:"4",title:"Cookies & Tracking",icon:"🍪",content:["Essential cookies for cart functionality and secure checkout","Analytics cookies to understand website performance (can be disabled)","Marketing cookies for personalized recommendations (opt-in only)","You can manage cookie preferences in your browser settings at any time"]},{_id:"5",title:"Third-Party Sharing",icon:"🤝",content:["Shipping partners — only address and contact details needed for delivery","Payment processors — card details handled securely by our payment partners","We never sell your personal data to advertisers or third parties","Law enforcement — only when legally required with valid court orders"]},{_id:"6",title:"Your Rights",icon:"⚖️",content:["Right to access — request a copy of all data we hold about you","Right to correction — update or correct inaccurate personal data","Right to deletion — request deletion of your account and data","Right to portability — receive your data in a structured format","Contact us at privacy@arke.com for any data-related requests"]}];function Vd(){const e=qe(),[t,r]=m.useState(ah),[o,i]=m.useState(!1),[a,s]=m.useState("June 2025"),[l]=m.useState({email:"privacy@arke.com",phone:"+91 98765 43210"});return m.useEffect(()=>{window.scrollTo(0,0)},[]),n.jsxs("div",{style:{background:ee.bg,minHeight:"100vh",paddingTop:120},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes slideRight {
          from { opacity:0; transform:translateX(-16px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes spin { to { transform:rotate(360deg); } }
        .pp-card {
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .pp-card:hover {
          border-color: rgba(232,180,196,0.5) !important;
          box-shadow: 0 8px 32px rgba(232,180,196,0.12) !important;
          transform: translateY(-2px) !important;
        }
        .pp-bullet {
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .pp-bullet:hover {
          background: rgba(245,213,224,0.2) !important;
          padding-left: 20px !important;
        }
        @media (max-width: 768px) {
          .pp-header  { padding: 40px 20px 30px !important; }
          .pp-content { padding: 24px 20px 60px !important; }
        }
      `}),n.jsxs("div",{className:"pp-header",style:{padding:"60px 80px 40px",borderBottom:`1.5px solid ${ee.border}`,animation:"fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:20},children:[n.jsx("span",{onClick:()=>e("/"),style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:ee.rose,cursor:"pointer",fontWeight:500},onMouseEnter:d=>d.target.style.color=ee.burgundy,onMouseLeave:d=>d.target.style.color=ee.rose,children:"Home"}),n.jsx("span",{style:{color:ee.textMuted,fontSize:10},children:"›"}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:ee.text,fontWeight:600},children:"Privacy Policy"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:14},children:[n.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(90deg,${ee.rose},${ee.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:ee.burgundy,fontWeight:600},children:"Your Trust Matters"})]}),n.jsx("h1",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,4vw,52px)",fontWeight:300,margin:"0 0 14px",background:`linear-gradient(135deg,${ee.text},${ee.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Privacy Policy"}),n.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:ee.textMuted,maxWidth:580,lineHeight:1.7,margin:"0 0 16px"},children:"We value your privacy and are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your data."}),n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 14px",background:`${ee.blush}18`,borderRadius:20,border:`1px solid ${ee.rose}30`},children:[n.jsx("span",{style:{fontSize:12},children:"🕐"}),n.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:ee.textMuted,fontWeight:500},children:["Last updated: ",a]})]})]}),o?n.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:100,gap:16},children:n.jsx("div",{style:{width:40,height:40,border:`3px solid ${ee.border}`,borderTopColor:ee.rose,borderRadius:"50%",animation:"spin 1s linear infinite"}})}):n.jsxs("div",{className:"pp-content",style:{padding:"48px 80px 80px",maxWidth:900,margin:"0 auto"},children:[t.map((d,c)=>n.jsxs("div",{className:"pp-card",style:{background:ee.surface,border:`1.5px solid ${ee.border}`,borderRadius:14,padding:36,marginBottom:24,boxShadow:"0 2px 12px rgba(0,0,0,0.03)",animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${c*.08}s both`},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:20},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg,${ee.blush}40,${ee.champagne}30)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0,border:`1px solid ${ee.rose}25`},children:d.icon}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",color:ee.rose,fontWeight:700,marginBottom:2},children:["Section ",c+1]}),n.jsx("h3",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:400,margin:0,color:ee.text},children:d.title})]})]}),n.jsx("div",{style:{height:1,background:`linear-gradient(90deg,${ee.rose}40,transparent)`,marginBottom:20}}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:d.content.map((u,g)=>n.jsxs("div",{className:"pp-bullet",style:{display:"flex",alignItems:"flex-start",gap:12,padding:"10px 14px",borderRadius:8,animation:`slideRight 0.4s cubic-bezier(0.34,1.56,0.64,1) ${c*.08+g*.05}s both`},children:[n.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:`linear-gradient(135deg,${ee.rose},${ee.burgundy})`,marginTop:7,flexShrink:0}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:ee.text,lineHeight:1.7},children:u})]},g))})]},d._id)),n.jsxs("div",{style:{background:`linear-gradient(135deg,${ee.blush}20,${ee.champagne}15)`,border:`1.5px solid ${ee.rose}35`,borderRadius:14,padding:40,textAlign:"center",animation:"fadeInUp 0.6s 0.3s cubic-bezier(0.34,1.56,0.64,1) both"},children:[n.jsx("div",{style:{fontSize:28,marginBottom:14},children:"🔒"}),n.jsx("h3",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,margin:"0 0 10px",color:ee.text},children:"Privacy Concerns?"}),n.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:ee.textMuted,margin:"0 0 24px",lineHeight:1.6},children:"Contact us for any data-related requests or privacy questions."}),n.jsx("div",{style:{display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap"},children:[{icon:"✉",label:l.email,href:`mailto:${l.email}`},{icon:"📱",label:l.phone,href:`tel:${l.phone}`}].map(d=>n.jsxs("a",{href:d.href,style:{display:"flex",alignItems:"center",gap:8,padding:"10px 20px",background:ee.surface,borderRadius:8,border:`1.5px solid ${ee.border}`,textDecoration:"none",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:c=>{c.currentTarget.style.borderColor=ee.rose,c.currentTarget.style.transform="translateY(-2px)",c.currentTarget.style.boxShadow=`0 6px 20px ${ee.rose}20`},onMouseLeave:c=>{c.currentTarget.style.borderColor=ee.border,c.currentTarget.style.transform="translateY(0)",c.currentTarget.style.boxShadow="none"},children:[n.jsx("span",{style:{fontSize:14},children:d.icon}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:600,color:ee.burgundy},children:d.label})]},d.label))})]})]})]})}const Q={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4"},sh=[{_id:"t1",step:1,title:"Request Return",desc:"Contact us within 7 days",icon:"📧",days:"Day 1"},{_id:"t2",step:2,title:"Ship Item Back",desc:"Pack with original packaging",icon:"📦",days:"Day 2–3"},{_id:"t3",step:3,title:"Quality Check",desc:"We inspect the returned item",icon:"🔍",days:"Day 4–6"},{_id:"t4",step:4,title:"Refund Processed",desc:"Credited to original payment",icon:"✅",days:"Day 7–10"}],lh=[{_id:"1",title:"Return Eligibility",icon:"✅",content:["Returns accepted within 7 days of delivery for unused, undamaged items.","Items must be in original packaging with all tags and certificates attached.","Custom-made or personalized jewelry cannot be returned unless defective.","Sale items and gift cards are non-returnable.","Proof of purchase (order ID or receipt) is required for all returns."]},{_id:"2",title:"Non-Returnable Items",icon:"🚫",content:["Earrings and nose pins (for hygiene reasons) — unless manufacturing defect.","Engraved or personalized pieces made to your specifications.","Items that show signs of wear, damage, or alteration after delivery.","Products purchased during clearance or final sale promotions.","Gift cards, vouchers, and loyalty rewards."]},{_id:"3",title:"Refund Process",icon:"💰",content:["Once your return is received, inspection takes 2–3 business days.","Approved refunds are processed within 5–7 business days after inspection.","Refunds are credited to the original payment method used during purchase.","For COD orders, refunds are transferred to your bank account (NEFT/UPI).","You will receive email confirmation at each stage of the refund process."]},{_id:"4",title:"Exchange Policy",icon:"🔄",content:["Exchanges available within 7 days for different sizes or designs.","Exchange items must meet the same return eligibility criteria.","Price differences (if any) will be charged or refunded accordingly.","Exchange shipping is free for the first exchange per order."]},{_id:"5",title:"Damaged or Defective Items",icon:"⚡",content:["Report damaged/defective items within 48 hours of delivery with photos.","We offer full refund or free replacement for manufacturing defects.","Shipping damage must be reported with unboxing photos or video as proof.","Defective items are picked up at no cost — we arrange reverse shipping."]},{_id:"6",title:"Cancellation Policy",icon:"❌",content:["Orders can be cancelled within 12 hours of placement for a full refund.","Once shipped, orders cannot be cancelled — please initiate a return instead.","Custom orders cannot be cancelled once production has started.","Cancellation refunds are processed within 3–5 business days."]}];function Qd(){const e=qe(),[t,r]=m.useState(lh),[o,i]=m.useState(sh),[a,s]=m.useState(!1),[l,d]=m.useState("June 2025"),[c]=m.useState({email:"returns@arke.com",phone:"+91 98765 43210"});return m.useEffect(()=>{window.scrollTo(0,0)},[]),n.jsxs("div",{style:{background:Q.bg,minHeight:"100vh",paddingTop:120},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(24px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes slideRight {
          from { opacity:0; transform:translateX(-16px); }
          to   { opacity:1; transform:translateX(0); }
        }
        @keyframes spin { to { transform:rotate(360deg); } }
        .rp-card {
          transition: all 0.35s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .rp-card:hover {
          border-color: rgba(232,180,196,0.5) !important;
          box-shadow: 0 8px 32px rgba(232,180,196,0.12) !important;
          transform: translateY(-2px) !important;
        }
        .rp-bullet {
          transition: all 0.25s cubic-bezier(0.34,1.56,0.64,1) !important;
        }
        .rp-bullet:hover {
          background: rgba(245,213,224,0.2) !important;
          padding-left: 20px !important;
        }
        @media (max-width: 768px) {
          .rp-header  { padding: 40px 20px 30px !important; }
          .rp-content { padding: 24px 20px 60px !important; }
          .rp-timeline { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .rp-timeline { grid-template-columns: 1fr !important; }
        }
      `}),n.jsxs("div",{className:"rp-header",style:{padding:"60px 80px 40px",borderBottom:`1.5px solid ${Q.border}`,animation:"fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:20},children:[n.jsx("span",{onClick:()=>e("/"),style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:Q.rose,cursor:"pointer",fontWeight:500},onMouseEnter:u=>u.target.style.color=Q.burgundy,onMouseLeave:u=>u.target.style.color=Q.rose,children:"Home"}),n.jsx("span",{style:{color:Q.textMuted,fontSize:10},children:"›"}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:Q.text,fontWeight:600},children:"Refund Policy"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:14},children:[n.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(90deg,${Q.rose},${Q.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:Q.burgundy,fontWeight:600},children:"Hassle-Free Returns"})]}),n.jsx("h1",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(32px,4vw,52px)",fontWeight:300,margin:"0 0 14px",background:`linear-gradient(135deg,${Q.text},${Q.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Refund & Return Policy"}),n.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:Q.textMuted,maxWidth:580,lineHeight:1.7,margin:"0 0 16px"},children:"We want you to love every piece. If something isn't right, our simple return process ensures a smooth experience."}),n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"6px 14px",background:`${Q.blush}18`,borderRadius:20,border:`1px solid ${Q.rose}30`},children:[n.jsx("span",{style:{fontSize:12},children:"🕐"}),n.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:Q.textMuted,fontWeight:500},children:["Last updated: ",l]})]})]}),a?n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:100},children:n.jsx("div",{style:{width:40,height:40,border:`3px solid ${Q.border}`,borderTopColor:Q.rose,borderRadius:"50%",animation:"spin 1s linear infinite"}})}):n.jsxs("div",{className:"rp-content",style:{padding:"48px 80px 80px",maxWidth:900,margin:"0 auto"},children:[n.jsxs("div",{style:{background:Q.surface,border:`1.5px solid ${Q.border}`,borderRadius:14,padding:36,marginBottom:32,boxShadow:"0 4px 20px rgba(0,0,0,0.04)",animation:"fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:28},children:[n.jsx("div",{style:{width:20,height:1.5,background:`linear-gradient(90deg,${Q.rose},${Q.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:Q.burgundy,fontWeight:700},children:"Refund Timeline"})]}),n.jsx("div",{className:"rp-timeline",style:{display:"grid",gridTemplateColumns:`repeat(${o.length}, 1fr)`,gap:0,position:"relative"},children:o.map((u,g)=>n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",position:"relative",animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${g*.15}s both`},children:[g<o.length-1&&n.jsx("div",{style:{position:"absolute",top:24,left:"50%",width:"100%",height:2,background:`linear-gradient(90deg,${Q.rose}60,${Q.champagne}60)`,zIndex:0}}),n.jsx("div",{style:{width:48,height:48,borderRadius:"50%",background:`linear-gradient(135deg,${Q.blush}50,${Q.champagne}40)`,border:`2px solid ${Q.rose}50`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,marginBottom:12,position:"relative",zIndex:1,boxShadow:`0 4px 12px ${Q.rose}15`},children:u.icon}),n.jsx("div",{style:{padding:"3px 10px",background:`${Q.rose}18`,borderRadius:10,marginBottom:8},children:n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,fontWeight:700,color:Q.burgundy},children:u.days})}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:600,color:Q.text,marginBottom:4},children:u.title}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:Q.textMuted,lineHeight:1.4,padding:"0 8px"},children:u.desc})]},u._id))})]}),t.map((u,g)=>n.jsxs("div",{className:"rp-card",style:{background:Q.surface,border:`1.5px solid ${Q.border}`,borderRadius:14,padding:36,marginBottom:24,boxShadow:"0 2px 12px rgba(0,0,0,0.03)",animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${g*.08}s both`},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:20},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg,${Q.blush}40,${Q.champagne}30)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0,border:`1px solid ${Q.rose}25`},children:u.icon}),n.jsxs("div",{children:[n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:8,letterSpacing:"1.5px",textTransform:"uppercase",color:Q.rose,fontWeight:700,marginBottom:2},children:["Section ",g+1]}),n.jsx("h3",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:400,margin:0,color:Q.text},children:u.title})]})]}),n.jsx("div",{style:{height:1,background:`linear-gradient(90deg,${Q.rose}40,transparent)`,marginBottom:20}}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:u.content.map((f,j)=>n.jsxs("div",{className:"rp-bullet",style:{display:"flex",alignItems:"flex-start",gap:12,padding:"10px 14px",borderRadius:8,animation:`slideRight 0.4s cubic-bezier(0.34,1.56,0.64,1) ${g*.08+j*.05}s both`},children:[n.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:`linear-gradient(135deg,${Q.rose},${Q.burgundy})`,marginTop:7,flexShrink:0}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:Q.text,lineHeight:1.7},children:f})]},j))})]},u._id)),n.jsxs("div",{style:{background:`linear-gradient(135deg,${Q.blush}20,${Q.champagne}15)`,border:`1.5px solid ${Q.rose}35`,borderRadius:14,padding:40,textAlign:"center",animation:"fadeInUp 0.6s 0.3s cubic-bezier(0.34,1.56,0.64,1) both"},children:[n.jsx("div",{style:{fontSize:28,marginBottom:14},children:"🔄"}),n.jsx("h3",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:400,margin:"0 0 10px",color:Q.text},children:"Need Help With a Return?"}),n.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:Q.textMuted,margin:"0 0 24px",lineHeight:1.6},children:"Our support team will guide you through the entire return and refund process."}),n.jsx("div",{style:{display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap"},children:[{icon:"✉",label:c.email,href:`mailto:${c.email}`},{icon:"📱",label:c.phone,href:`tel:${c.phone}`}].map(u=>n.jsxs("a",{href:u.href,style:{display:"flex",alignItems:"center",gap:8,padding:"10px 20px",background:Q.surface,borderRadius:8,border:`1.5px solid ${Q.border}`,textDecoration:"none",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:g=>{g.currentTarget.style.borderColor=Q.rose,g.currentTarget.style.transform="translateY(-2px)",g.currentTarget.style.boxShadow=`0 6px 20px ${Q.rose}20`},onMouseLeave:g=>{g.currentTarget.style.borderColor=Q.border,g.currentTarget.style.transform="translateY(0)",g.currentTarget.style.boxShadow="none"},children:[n.jsx("span",{style:{fontSize:14},children:u.icon}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:600,color:Q.burgundy},children:u.label})]},u.label))})]})]})]})}const k={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5",success:"#70c878",error:"#d97070",warning:"#e8a84c",info:"#5b9bd5",gold:"#c9a96e"},an={placed:{label:"Order Placed",color:k.info,icon:"📋",step:1},confirmed:{label:"Confirmed",color:k.info,icon:"✅",step:2},processing:{label:"Processing",color:k.warning,icon:"⚙️",step:3},packed:{label:"Packed",color:k.warning,icon:"📦",step:4},shipped:{label:"Shipped",color:k.gold,icon:"🚚",step:5},in_transit:{label:"In Transit",color:k.gold,icon:"🛣️",step:6},out_for_delivery:{label:"Out for Delivery",color:k.rose,icon:"🏍️",step:7},delivered:{label:"Delivered",color:k.success,icon:"🎉",step:8},cancelled:{label:"Cancelled",color:k.error,icon:"❌",step:-1},return_requested:{label:"Return Requested",color:k.warning,icon:"🔄",step:9},return_approved:{label:"Return Approved",color:k.info,icon:"✅",step:10},return_picked:{label:"Return Picked Up",color:k.gold,icon:"📦",step:11},refund_processing:{label:"Refund Processing",color:k.warning,icon:"💰",step:12},refunded:{label:"Refunded",color:k.success,icon:"✅",step:13},return_rejected:{label:"Return Rejected",color:k.error,icon:"❌",step:-2}},hs=[{id:"wrong_item",label:"Wrong item delivered",icon:"📦"},{id:"damaged",label:"Item arrived damaged",icon:"💔"},{id:"defective",label:"Product is defective",icon:"⚠️"},{id:"not_as_described",label:"Not as described/shown",icon:"🖼️"},{id:"size_issue",label:"Size doesn't fit",icon:"📏"},{id:"quality_issue",label:"Quality not satisfactory",icon:"👎"},{id:"changed_mind",label:"Changed my mind",icon:"🔄"},{id:"other",label:"Other reason",icon:"📝"}],Xd=[{id:"original",label:"Original Payment Method",desc:"Refund to card/UPI used for payment",icon:"💳",days:"5–7 days"},{id:"bank",label:"Bank Transfer (NEFT)",desc:"Direct transfer to your bank account",icon:"🏦",days:"3–5 days"},{id:"wallet",label:"Store Wallet / Credit",desc:"Instant credit to your Arke wallet",icon:"👛",days:"Instant"}],dh=[{_id:"s1",title:"Processing Time",icon:"⏱️",content:["Standard orders are processed within 1–2 business days.","Custom and personalized orders may take 5–7 business days.","You will receive an email with tracking details once shipped."]},{_id:"s2",title:"Shipping Methods",icon:"🚚",content:["Standard Shipping — 5–7 business days (Free above ₹999)","Express Shipping — 2–3 business days (₹149)","All shipments are insured and trackable."]},{_id:"s3",title:"Packaging & Care",icon:"🎁",content:["Every order is gift-wrapped in our signature packaging.","Tamper-proof sealing ensures safe delivery.","Each piece includes a care card with maintenance tips."]}];function qd(){const e=qe(),[t,r]=m.useState("track"),[o,i]=m.useState([]),[a,s]=m.useState(!1),[l,d]=m.useState(!!localStorage.getItem("arke_token")),[c,u]=m.useState(""),[g,f]=m.useState(""),[j,$]=m.useState(null),[S,w]=m.useState(!1),[x,p]=m.useState(""),[h,P]=m.useState(null);m.useEffect(()=>{window.scrollTo(0,0),l&&E()},[l]);const E=async()=>{s(!0);try{await new Promise(C=>setTimeout(C,800)),i(Kd)}catch(C){console.error("Failed to load orders:",C)}finally{s(!1)}},y=async()=>{const C=c.trim();if(!C){p("Please enter your Order ID");return}w(!0),p(""),$(null);try{await new Promise(U=>setTimeout(U,1200));const W=Kd.find(U=>U.orderId.toLowerCase()===C.toLowerCase());W?$(W):p("Order not found. Please check the Order ID and try again.")}catch{p("Failed to track order. Please try again.")}finally{w(!1)}},v=[{id:"track",label:"Track Order",icon:"📦"},{id:"orders",label:"My Orders",icon:"🛍️",requireAuth:!0},{id:"returns",label:"Returns & Refunds",icon:"🔄",requireAuth:!0},{id:"shipping",label:"Shipping Info",icon:"🚚"}],z=o.filter(C=>{var ie,pe;if(C.status!=="delivered")return!1;const W=new Date(C.deliveredAt||((pe=(ie=C.statusHistory)==null?void 0:ie.find(X=>X.status==="delivered"))==null?void 0:pe.date));return Math.floor((Date.now()-W)/(1e3*60*60*24))<=7}),N=o.filter(C=>["return_requested","return_approved","return_picked","refund_processing","refunded","return_rejected"].includes(C.status));return n.jsxs("div",{style:{background:k.bg,minHeight:"100vh",paddingTop:120},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes fadeInUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        @keyframes slideRight { from { opacity:0; transform:translateX(-16px); } to { opacity:1; transform:translateX(0); } }
        @keyframes spin { to { transform:rotate(360deg); } }
        @keyframes pulse { 0%,100% { transform:scale(1); } 50% { transform:scale(1.08); } }
        @keyframes fadeInScale { from { opacity:0; transform:scale(0.9); } to { opacity:1; transform:scale(1); } }
        .ot-tab { cursor:pointer; transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1); user-select:none; }
        .ot-tab:hover { transform:translateY(-2px); }
        .ot-card { transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .ot-card:hover { border-color:${k.rose}60; box-shadow:0 8px 28px ${k.rose}12; transform:translateY(-2px); }
        .ot-bullet { transition:all 0.25s; }
        .ot-bullet:hover { background:${k.blush}20; padding-left:20px; }
        .ot-input { width:100%; background:${k.blush}15; border:1.5px solid ${k.border}; color:${k.text}; padding:13px 16px; font-family:'Poppins',sans-serif; font-size:13px; outline:none; border-radius:8px; transition:all 0.3s; box-sizing:border-box; }
        .ot-input:focus { border-color:${k.rose}; box-shadow:0 0 0 4px ${k.rose}15; }
        .ot-input::placeholder { color:${k.textMuted}; font-size:12px; }
        .reason-card { cursor:pointer; transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .reason-card:hover { border-color:${k.rose}; transform:translateY(-2px); box-shadow:0 4px 16px ${k.rose}18; }
        .refund-card { cursor:pointer; transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1); }
        .refund-card:hover { border-color:${k.rose}; transform:translateY(-2px); box-shadow:0 4px 16px ${k.rose}18; }
        @media (max-width:768px) {
          .ot-header { padding:40px 20px 30px !important; }
          .ot-content { padding:24px 20px 60px !important; }
          .ot-form-grid { grid-template-columns:1fr !important; }
          .ot-tab-bar { overflow-x:auto; }
          .order-item-grid { grid-template-columns:1fr !important; }
        }
      `}),n.jsx(ch,{navigate:e}),n.jsx("div",{className:"ot-tab-bar",style:{padding:"0 80px",borderBottom:`1.5px solid ${k.border}`,display:"flex",gap:0,background:k.surface},children:v.map(C=>{if(C.requireAuth&&!l)return null;const W=t===C.id;return n.jsxs("div",{className:"ot-tab",onClick:()=>r(C.id),style:{padding:"16px 28px",fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:W?700:500,color:W?k.burgundy:k.textMuted,letterSpacing:"0.5px",borderBottom:W?`3px solid ${k.burgundy}`:"3px solid transparent",display:"flex",alignItems:"center",gap:8,whiteSpace:"nowrap",transition:"all 0.3s"},children:[n.jsx("span",{style:{fontSize:15},children:C.icon}),C.label]},C.id)})}),n.jsxs("div",{className:"ot-content",style:{padding:"40px 80px 80px",maxWidth:960,margin:"0 auto"},children:[t==="track"&&n.jsx(uh,{trackOrderId:c,setTrackOrderId:u,trackEmail:g,setTrackEmail:f,trackResult:j,trackLoading:S,trackError:x,setTrackError:p,onTrack:y,navigate:e}),t==="orders"&&n.jsx(ph,{orders:o,loading:a,onRefresh:E,onReturn:C=>P(C),onTrack:C=>{$(C),r("track")},navigate:e}),t==="returns"&&n.jsx(mh,{eligibleOrders:z,returnedOrders:N,onInitiateReturn:C=>P(C),navigate:e}),t==="shipping"&&n.jsx(hh,{})]}),h&&n.jsx(xh,{order:h,onClose:()=>P(null),onSubmit:async C=>{try{return console.log("Return request:",{orderId:h.orderId,...C}),await new Promise(W=>setTimeout(W,1500)),i(W=>W.map(U=>U.orderId===h.orderId?{...U,status:"return_requested",returnInfo:{...C,requestedAt:new Date().toISOString()}}:U)),P(null),r("returns"),{success:!0}}catch(W){throw W}}})]})}function ch({navigate:e}){return n.jsxs("div",{className:"ot-header",style:{padding:"50px 80px 32px",background:k.surface,animation:"fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx("span",{onClick:()=>e("/"),style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.rose,cursor:"pointer",fontWeight:500},onMouseEnter:t=>t.target.style.color=k.burgundy,onMouseLeave:t=>t.target.style.color=k.rose,children:"Home"}),n.jsx("span",{style:{color:k.textMuted,fontSize:10},children:"›"}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.text,fontWeight:600},children:"Orders & Returns"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:10},children:[n.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(90deg,${k.rose},${k.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:k.burgundy,fontWeight:700},children:"Track · Return · Refund"})]}),n.jsx("h1",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(30px,3.5vw,48px)",fontWeight:300,margin:0,background:`linear-gradient(135deg,${k.text},${k.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Order Tracking & Returns"})]})}function uh({trackOrderId:e,setTrackOrderId:t,trackEmail:r,setTrackEmail:o,trackResult:i,trackLoading:a,trackError:s,setTrackError:l,onTrack:d,navigate:c}){return n.jsxs("div",{style:{animation:"fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsxs("div",{style:{background:k.surface,border:`1.5px solid ${k.border}`,borderRadius:14,padding:36,marginBottom:32,boxShadow:"0 4px 20px rgba(0,0,0,0.04)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:20},children:[n.jsx("span",{style:{fontSize:22},children:"🔍"}),n.jsx("h3",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:22,fontWeight:400,margin:0,color:k.text},children:"Track Your Order"})]}),n.jsxs("div",{className:"ot-form-grid",style:{display:"grid",gridTemplateColumns:"1fr 1fr auto",gap:14,alignItems:"end"},children:[n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:k.textMuted,fontWeight:700,marginBottom:6},children:"📋 Order ID"}),n.jsx("input",{type:"text",placeholder:"ARK-XXXXXXXX",value:e,onChange:u=>{t(u.target.value.toUpperCase()),l("")},onKeyDown:u=>u.key==="Enter"&&d(),className:"ot-input",style:{borderColor:s?k.error:void 0}})]}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:k.textMuted,fontWeight:700,marginBottom:6},children:"✉ Email (Optional)"}),n.jsx("input",{type:"email",placeholder:"your@email.com",value:r,onChange:u=>o(u.target.value),onKeyDown:u=>u.key==="Enter"&&d(),className:"ot-input"})]}),n.jsx(Pr,{onClick:d,loading:a,label:"Track"})]}),s&&n.jsxs("div",{style:{marginTop:12,fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.error,fontWeight:500},children:["✕ ",s]})]}),i&&n.jsx(gh,{order:i,navigate:c,showReturn:!1})]})}function ph({orders:e,loading:t,onRefresh:r,onReturn:o,onTrack:i,navigate:a}){return t?n.jsx(yh,{text:"Loading your orders…"}):e.length===0?n.jsx(bh,{icon:"🛍️",title:"No Orders Yet",sub:"Start shopping to see your orders here.",btnLabel:"Shop Now",onBtn:()=>a("/products")}):n.jsxs("div",{style:{animation:"fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24},children:[n.jsxs("h3",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,margin:0,color:k.text},children:["Your Orders (",e.length,")"]}),n.jsx("button",{onClick:r,style:{background:"none",border:`1.5px solid ${k.border}`,padding:"8px 20px",borderRadius:8,fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:k.textMuted,cursor:"pointer",fontWeight:600,transition:"all 0.3s"},onMouseEnter:s=>{s.currentTarget.style.borderColor=k.rose,s.currentTarget.style.color=k.burgundy},onMouseLeave:s=>{s.currentTarget.style.borderColor=k.border,s.currentTarget.style.color=k.textMuted},children:"↻ Refresh"})]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:20},children:e.map((s,l)=>n.jsx(fh,{order:s,index:l,onReturn:o,onTrack:i,navigate:a},s.orderId))})]})}function fh({order:e,index:t,onReturn:r,onTrack:o,navigate:i}){var u,g;const a=an[e.status]||an.placed,s=e.deliveredAt?new Date(e.deliveredAt):null,l=s?Math.floor((Date.now()-s)/(1e3*60*60*24)):null,d=e.status==="delivered"&&l!==null&&l<=7,c=d?7-l:0;return n.jsxs("div",{className:"ot-card",style:{background:k.surface,border:`1.5px solid ${k.border}`,borderRadius:14,overflow:"hidden",animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${t*.08}s both`},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"14px 24px",background:`${k.blush}12`,borderBottom:`1px solid ${k.border}`,flexWrap:"wrap",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,color:k.textMuted,letterSpacing:"1px",textTransform:"uppercase",fontWeight:600},children:"Order ID"}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:700,color:k.burgundy,letterSpacing:"0.5px"},children:e.orderId})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,color:k.textMuted,letterSpacing:"1px",textTransform:"uppercase",fontWeight:600},children:"Ordered On"}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:k.text,fontWeight:500},children:new Date(e.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})})]}),n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,color:k.textMuted,letterSpacing:"1px",textTransform:"uppercase",fontWeight:600},children:"Total"}),n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:700,color:k.text},children:["₹",(u=e.total)==null?void 0:u.toLocaleString("en-IN")]})]})]}),n.jsxs("div",{style:{padding:"6px 16px",borderRadius:20,background:`${a.color}15`,border:`1px solid ${a.color}40`,display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:13},children:a.icon}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,fontWeight:600,color:a.color},children:a.label})]})]}),n.jsx("div",{style:{padding:"20px 24px"},children:(g=e.items)==null?void 0:g.map((f,j)=>{var S,w,x,p,h,P,E,y;const $=((w=(S=f.product)==null?void 0:S.images)==null?void 0:w[0])||((p=(x=f.product)==null?void 0:x.image)==null?void 0:p[0])||f.image;return n.jsxs("div",{className:"order-item-grid",style:{display:"grid",gridTemplateColumns:"60px 1fr auto",gap:16,alignItems:"center",padding:"10px 0",borderBottom:j<e.items.length-1?`1px solid ${k.borderLight}`:"none"},children:[n.jsx("div",{style:{width:60,height:60,borderRadius:8,overflow:"hidden",background:`${k.blush}15`,cursor:"pointer"},onClick:()=>{var v;return i(`/product/${((v=f.product)==null?void 0:v._id)||f.productId}`)},children:$&&n.jsx("img",{src:Fe($),alt:((h=f.product)==null?void 0:h.name)||"Product",style:{width:"100%",height:"100%",objectFit:"cover"},onError:v=>v.target.style.display="none"})}),n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:600,color:k.text,cursor:"pointer"},onClick:()=>{var v;return i(`/product/${((v=f.product)==null?void 0:v._id)||f.productId}`)},children:((P=f.product)==null?void 0:P.name)||f.name||"Product"}),n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.textMuted},children:["Qty: ",f.quantity||1," × ₹",(f.price||((E=f.product)==null?void 0:E.price)||0).toLocaleString("en-IN")]})]}),n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:700,color:k.burgundy},children:["₹",((f.price||((y=f.product)==null?void 0:y.price)||0)*(f.quantity||1)).toLocaleString("en-IN")]})]},j)})}),d&&n.jsxs("div",{style:{margin:"0 24px",padding:"10px 16px",background:`${k.success}10`,border:`1px solid ${k.success}30`,borderRadius:8,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8},children:[n.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.success,fontWeight:600},children:["✅ Eligible for return — ",c," day",c!==1?"s":""," remaining"]}),n.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:k.textMuted},children:["Return window closes on ",new Date(s.getTime()+7*24*60*60*1e3).toLocaleDateString("en-IN",{day:"numeric",month:"short"})]})]}),e.status==="delivered"&&l>7&&n.jsx("div",{style:{margin:"0 24px",padding:"10px 16px",background:`${k.error}08`,border:`1px solid ${k.error}20`,borderRadius:8},children:n.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.error,fontWeight:500},children:["❌ Return window expired — delivered ",l," days ago (7-day limit)"]})}),n.jsxs("div",{style:{padding:"16px 24px",display:"flex",gap:10,flexWrap:"wrap",borderTop:`1px solid ${k.borderLight}`,marginTop:12},children:[n.jsx(bs,{label:"Track Order",onClick:()=>o(e)}),d&&n.jsx(Pr,{label:"Return / Replace",onClick:()=>r(e),small:!0}),n.jsx(bs,{label:"View Details",onClick:()=>o(e)})]})]})}function gh({order:e,navigate:t,showReturn:r=!0}){const o=an[e.status]||an.placed;return n.jsxs("div",{style:{background:k.surface,border:`1.5px solid ${k.rose}40`,borderRadius:14,padding:0,overflow:"hidden",marginBottom:32,boxShadow:`0 4px 24px ${k.rose}12`,animation:"fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsxs("div",{style:{padding:"24px 32px",background:`linear-gradient(135deg,${k.blush}15,${k.champagne}10)`,borderBottom:`1px solid ${k.border}`,display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:16},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,color:k.textMuted,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:600},children:"Order ID"}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:20,fontWeight:700,color:k.burgundy,letterSpacing:"1px"},children:e.orderId})]}),n.jsxs("div",{style:{padding:"8px 20px",borderRadius:24,background:`${o.color}15`,border:`1.5px solid ${o.color}40`,display:"flex",alignItems:"center",gap:8},children:[n.jsx("span",{style:{fontSize:16},children:o.icon}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:700,color:o.color},children:o.label})]})]}),n.jsxs("div",{style:{padding:"28px 32px"},children:[n.jsx(ys,{text:"Order Timeline"}),n.jsx("div",{style:{marginBottom:28},children:(e.statusHistory||[]).map((i,a)=>{const s=an[i.status]||{},l=a===e.statusHistory.length-1;return n.jsxs("div",{style:{display:"flex",gap:16,animation:`fadeInUp 0.4s cubic-bezier(0.34,1.56,0.64,1) ${a*.08}s both`},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",width:28,flexShrink:0},children:[n.jsx("div",{style:{width:l?20:14,height:l?20:14,borderRadius:"50%",background:l?`linear-gradient(135deg,${k.rose},${k.burgundy})`:s.color||k.success,border:l?`3px solid ${k.rose}40`:"none",boxShadow:l?`0 0 12px ${k.rose}40`:"none",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:!l&&n.jsx("span",{style:{color:"white",fontSize:7,fontWeight:800},children:"✓"})}),a<e.statusHistory.length-1&&n.jsx("div",{style:{width:2,flex:1,minHeight:28,background:s.color||k.success}})]}),n.jsxs("div",{style:{paddingBottom:16},children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:l?700:600,color:k.text},children:s.label||i.status}),n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:k.textMuted,marginTop:2},children:[new Date(i.date).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}),i.location&&` • ${i.location}`]}),i.note&&n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.textMuted,marginTop:4,fontStyle:"italic"},children:i.note})]})]},a)})}),e.shippingPartner&&n.jsx("div",{style:{display:"flex",gap:14,flexWrap:"wrap",marginBottom:20},children:[{label:"Carrier",value:e.shippingPartner,icon:"🚚"},{label:"Tracking #",value:e.trackingNumber||"—",icon:"🔢"},{label:"Expected",value:e.expectedDelivery||"—",icon:"📅"}].map(i=>n.jsxs("div",{style:{padding:"10px 16px",background:`${k.blush}12`,borderRadius:8,border:`1px solid ${k.border}`},children:[n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,color:k.textMuted,letterSpacing:"1px",textTransform:"uppercase",fontWeight:600},children:[i.icon," ",i.label]}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:600,color:k.text,marginTop:4},children:i.value})]},i.label))})]})]})}function mh({eligibleOrders:e,returnedOrders:t,onInitiateReturn:r,navigate:o}){return n.jsxs("div",{style:{animation:"fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1)"},children:[n.jsx(ys,{text:"Eligible for Return (within 7 days)"}),e.length===0?n.jsxs("div",{style:{background:k.surface,border:`1.5px solid ${k.border}`,borderRadius:14,padding:40,textAlign:"center",marginBottom:40},children:[n.jsx("div",{style:{fontSize:36,marginBottom:12},children:"📦"}),n.jsx("div",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:k.text,marginBottom:6},children:"No items eligible for return"}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:k.textMuted},children:"Items can be returned within 7 days of delivery."})]}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,marginBottom:40},children:e.map((i,a)=>{var d;const s=new Date(i.deliveredAt),l=7-Math.floor((Date.now()-s)/(1e3*60*60*24));return n.jsxs("div",{className:"ot-card",style:{background:k.surface,border:`1.5px solid ${k.success}30`,borderRadius:14,padding:24,animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${a*.08}s both`},children:[n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12,marginBottom:16},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:14,fontWeight:700,color:k.burgundy},children:i.orderId}),n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.textMuted},children:["Delivered on ",s.toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})]})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[n.jsx("div",{style:{padding:"4px 12px",borderRadius:12,background:l<=2?`${k.error}12`:`${k.success}12`,border:`1px solid ${l<=2?k.error:k.success}30`},children:n.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,fontWeight:700,color:l<=2?k.error:k.success},children:[l," day",l!==1?"s":""," left"]})}),n.jsx(Pr,{label:"Return",onClick:()=>r(i),small:!0})]})]}),n.jsx("div",{style:{display:"flex",gap:10,flexWrap:"wrap"},children:(d=i.items)==null?void 0:d.map((c,u)=>{var g;return n.jsx("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"8px 12px",background:`${k.blush}10`,borderRadius:8,border:`1px solid ${k.border}`},children:n.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:k.text,fontWeight:500},children:[((g=c.product)==null?void 0:g.name)||c.name||"Product"," × ",c.quantity||1]})},u)})})]},i.orderId)})}),n.jsx(ys,{text:"Return & Refund History"}),t.length===0?n.jsxs("div",{style:{background:k.surface,border:`1.5px solid ${k.border}`,borderRadius:14,padding:40,textAlign:"center"},children:[n.jsx("div",{style:{fontSize:36,marginBottom:12},children:"🔄"}),n.jsx("div",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:k.text,marginBottom:6},children:"No returns yet"}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:k.textMuted},children:"Your return and refund history will appear here."})]}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:t.map((i,a)=>{var l,d;const s=an[i.status]||{};return n.jsx("div",{className:"ot-card",style:{background:k.surface,border:`1.5px solid ${s.color}30`,borderRadius:14,padding:24,animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${a*.08}s both`},children:n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:12},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:14,fontWeight:700,color:k.burgundy},children:i.orderId}),((l=i.returnInfo)==null?void 0:l.reason)&&n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.textMuted,marginTop:2},children:["Reason: ",((d=hs.find(c=>c.id===i.returnInfo.reason))==null?void 0:d.label)||i.returnInfo.reason]})]}),n.jsxs("div",{style:{padding:"6px 16px",borderRadius:20,background:`${s.color}15`,border:`1px solid ${s.color}40`,display:"flex",alignItems:"center",gap:6},children:[n.jsx("span",{style:{fontSize:13},children:s.icon}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,fontWeight:600,color:s.color},children:s.label})]})]})},i.orderId)})})]})}function xh({order:e,onClose:t,onSubmit:r}){var y,v,z,N;const[o,i]=m.useState(1),[a,s]=m.useState(((y=e.items)==null?void 0:y.map((C,W)=>W))||[]),[l,d]=m.useState(""),[c,u]=m.useState(""),[g,f]=m.useState([]),[j,$]=m.useState("original"),[S,w]=m.useState(!1),[x,p]=m.useState(!1),h=C=>{s(W=>W.includes(C)?W.filter(U=>U!==C):[...W,C])},P=()=>o===1?a.length>0:o===2?l!=="":o===3?j!=="":!0,E=async()=>{w(!0);try{await r({items:a.map(C=>e.items[C]),reason:l,details:c,refundMethod:j,photos:g}),p(!0)}catch(C){console.error("Return submission error:",C)}finally{w(!1)}};return n.jsx("div",{onClick:C=>C.target===C.currentTarget&&!S&&t(),style:{position:"fixed",inset:0,zIndex:1e4,display:"flex",alignItems:"center",justifyContent:"center",background:"rgba(42,42,42,0.6)",backdropFilter:"blur(12px)",padding:20},children:n.jsx("div",{style:{width:"100%",maxWidth:x?480:640,maxHeight:"90vh",background:k.bg,borderRadius:16,overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 24px 80px rgba(0,0,0,0.18)",animation:"fadeInScale 0.4s cubic-bezier(0.34,1.56,0.64,1)"},children:x?n.jsxs("div",{style:{padding:48,textAlign:"center"},children:[n.jsx("div",{style:{fontSize:56,marginBottom:20},children:"✅"}),n.jsx("h2",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:30,fontWeight:300,margin:"0 0 10px",color:k.text},children:"Return Requested!"}),n.jsxs("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:k.textMuted,margin:"0 0 24px",lineHeight:1.7},children:["Your return request for ",n.jsx("strong",{children:e.orderId})," has been submitted.",n.jsx("br",{}),"We'll review it within 24–48 hours."]}),n.jsxs("div",{style:{padding:"16px 24px",background:`${k.blush}20`,borderRadius:10,border:`1px solid ${k.rose}30`,marginBottom:28},children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:k.textMuted,letterSpacing:"1px",textTransform:"uppercase",fontWeight:600,marginBottom:4},children:"What happens next?"}),n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:k.text,lineHeight:1.7},children:["📧 Confirmation email sent",n.jsx("br",{}),"🔍 Quality team reviews your request",n.jsx("br",{}),"📦 Pickup scheduled (if approved)",n.jsx("br",{}),"💰 Refund processed within 5–7 days"]})]}),n.jsx(Pr,{label:"Done",onClick:t})]}):n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{padding:"24px 32px",borderBottom:`1.5px solid ${k.border}`,background:k.surface,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsxs("div",{children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",color:k.burgundy,fontWeight:700,marginBottom:4},children:"Return Request"}),n.jsx("h3",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:24,fontWeight:400,margin:0,color:k.text},children:o===1?"Select Items":o===2?"Reason for Return":o===3?"Refund Method":"Review & Submit"})]}),n.jsx("button",{onClick:t,disabled:S,style:{width:36,height:36,borderRadius:"50%",border:`1.5px solid ${k.border}`,background:k.surface,color:k.textMuted,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15,transition:"all 0.3s"},onMouseEnter:C=>{C.currentTarget.style.borderColor=k.rose,C.currentTarget.style.color=k.burgundy},onMouseLeave:C=>{C.currentTarget.style.borderColor=k.border,C.currentTarget.style.color=k.textMuted},children:"✕"})]}),n.jsx("div",{style:{display:"flex",padding:"16px 32px",gap:4,background:`${k.blush}08`},children:[1,2,3,4].map(C=>n.jsx("div",{style:{flex:1,height:4,borderRadius:2,background:C<=o?`linear-gradient(90deg,${k.rose},${k.burgundy})`:k.border,transition:"all 0.4s"}},C))}),n.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"24px 32px"},children:[o===1&&n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:(v=e.items)==null?void 0:v.map((C,W)=>{var ie,pe;const U=a.includes(W);return n.jsxs("div",{onClick:()=>h(W),style:{display:"flex",alignItems:"center",gap:14,padding:"14px 16px",borderRadius:10,border:`1.5px solid ${U?k.rose:k.border}`,background:U?`${k.blush}15`:k.surface,cursor:"pointer",transition:"all 0.3s"},children:[n.jsx("div",{style:{width:22,height:22,borderRadius:4,border:`2px solid ${U?k.burgundy:k.border}`,background:U?`linear-gradient(135deg,${k.rose},${k.burgundy})`:"transparent",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,transition:"all 0.3s"},children:U&&n.jsx("span",{style:{color:"white",fontSize:11},children:"✓"})}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:600,color:k.text},children:((ie=C.product)==null?void 0:ie.name)||C.name||"Product"}),n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.textMuted},children:["Qty: ",C.quantity||1," • ₹",((C.price||((pe=C.product)==null?void 0:pe.price)||0)*(C.quantity||1)).toLocaleString("en-IN")]})]})]},W)})}),o===2&&n.jsxs("div",{children:[n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginBottom:20},children:hs.map(C=>n.jsxs("div",{className:"reason-card",onClick:()=>d(C.id),style:{padding:"14px 16px",borderRadius:10,border:`1.5px solid ${l===C.id?k.burgundy:k.border}`,background:l===C.id?`${k.blush}20`:k.surface,display:"flex",alignItems:"center",gap:10},children:[n.jsx("span",{style:{fontSize:18},children:C.icon}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:l===C.id?700:500,color:k.text},children:C.label})]},C.id))}),n.jsxs("div",{children:[n.jsx("label",{style:{display:"block",fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:k.textMuted,fontWeight:700,marginBottom:6},children:"📝 Additional Details (Optional)"}),n.jsx("textarea",{value:c,onChange:C=>u(C.target.value),placeholder:"Describe the issue in detail…",rows:3,style:{width:"100%",background:`${k.blush}15`,border:`1.5px solid ${k.border}`,color:k.text,padding:"12px 16px",fontFamily:"'Poppins',sans-serif",fontSize:13,outline:"none",borderRadius:8,resize:"vertical",boxSizing:"border-box"}})]})]}),o===3&&n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:Xd.map(C=>n.jsxs("div",{className:"refund-card",onClick:()=>$(C.id),style:{padding:"18px 20px",borderRadius:10,border:`1.5px solid ${j===C.id?k.burgundy:k.border}`,background:j===C.id?`${k.blush}20`:k.surface,display:"flex",alignItems:"center",gap:14},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:j===C.id?`linear-gradient(135deg,${k.rose},${k.burgundy})`:`${k.blush}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0},children:C.icon}),n.jsxs("div",{style:{flex:1},children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:600,color:k.text},children:C.label}),n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.textMuted},children:[C.desc," • ",n.jsx("strong",{children:C.days})]})]}),n.jsx("div",{style:{width:20,height:20,borderRadius:"50%",border:`2px solid ${j===C.id?k.burgundy:k.border}`,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:j===C.id&&n.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:`linear-gradient(135deg,${k.rose},${k.burgundy})`}})})]},C.id))}),o===4&&n.jsxs("div",{children:[n.jsxs("div",{style:{background:k.surface,border:`1.5px solid ${k.border}`,borderRadius:10,padding:20,marginBottom:16},children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:k.textMuted,fontWeight:700,marginBottom:12},children:"Items to Return"}),a.map(C=>{var U;const W=e.items[C];return n.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:k.text,padding:"6px 0",borderBottom:`1px solid ${k.borderLight}`},children:[((U=W.product)==null?void 0:U.name)||W.name," × ",W.quantity||1]},C)})]}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[n.jsxs("div",{style:{background:k.surface,border:`1px solid ${k.border}`,borderRadius:10,padding:16},children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,color:k.textMuted,letterSpacing:"1px",textTransform:"uppercase",fontWeight:600,marginBottom:6},children:"Reason"}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:600,color:k.text},children:((z=hs.find(C=>C.id===l))==null?void 0:z.label)||l})]}),n.jsxs("div",{style:{background:k.surface,border:`1px solid ${k.border}`,borderRadius:10,padding:16},children:[n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,color:k.textMuted,letterSpacing:"1px",textTransform:"uppercase",fontWeight:600,marginBottom:6},children:"Refund To"}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:600,color:k.text},children:(N=Xd.find(C=>C.id===j))==null?void 0:N.label})]})]}),n.jsx("div",{style:{marginTop:16,padding:"12px 16px",background:`${k.warning}10`,border:`1px solid ${k.warning}25`,borderRadius:8},children:n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:k.warning,fontWeight:500},children:"⚠️ Once submitted, our team will review your request within 24–48 hours. You'll receive pickup details via email."})})]})]}),n.jsxs("div",{style:{padding:"18px 32px",borderTop:`1.5px solid ${k.border}`,background:k.surface,display:"flex",justifyContent:"space-between",gap:12},children:[o>1?n.jsx(bs,{label:"← Back",onClick:()=>i(C=>C-1)}):n.jsx("div",{}),o<4?n.jsx(Pr,{label:"Continue →",onClick:()=>i(C=>C+1),disabled:!P()}):n.jsx(Pr,{label:"Submit Return Request",onClick:E,loading:S})]})]})})})}function hh(){return n.jsx("div",{style:{animation:"fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1)"},children:dh.map((e,t)=>n.jsxs("div",{className:"ot-card",style:{background:k.surface,border:`1.5px solid ${k.border}`,borderRadius:14,padding:32,marginBottom:20,animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${t*.08}s both`},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:18},children:[n.jsx("div",{style:{width:42,height:42,borderRadius:"50%",background:`linear-gradient(135deg,${k.blush}40,${k.champagne}30)`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,border:`1px solid ${k.rose}25`},children:e.icon}),n.jsx("h3",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:21,fontWeight:400,margin:0,color:k.text},children:e.title})]}),n.jsx("div",{style:{height:1,background:`linear-gradient(90deg,${k.rose}40,transparent)`,marginBottom:16}}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:e.content.map((r,o)=>n.jsxs("div",{className:"ot-bullet",style:{display:"flex",alignItems:"flex-start",gap:12,padding:"8px 12px",borderRadius:8},children:[n.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:`linear-gradient(135deg,${k.rose},${k.burgundy})`,marginTop:7,flexShrink:0}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:k.text,lineHeight:1.7},children:r})]},o))})]},e._id))})}function ys({text:e}){return n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:18},children:[n.jsx("div",{style:{width:18,height:1.5,background:`linear-gradient(90deg,${k.rose},${k.burgundy})`}}),n.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:k.burgundy,fontWeight:700},children:e})]})}function Pr({label:e,onClick:t,loading:r,disabled:o,small:i}){return n.jsxs("button",{onClick:t,disabled:r||o,style:{padding:i?"9px 20px":"13px 32px",background:r||o?k.textMuted:`linear-gradient(135deg,${k.rose},${k.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins',sans-serif",fontSize:i?10:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:r||o?"not-allowed":"pointer",fontWeight:700,borderRadius:8,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:r||o?"none":`0 4px 16px ${k.rose}30`,whiteSpace:"nowrap",display:"flex",alignItems:"center",gap:8},onMouseEnter:a=>{!r&&!o&&(a.currentTarget.style.transform="translateY(-2px)",a.currentTarget.style.boxShadow=`0 8px 24px ${k.rose}40`)},onMouseLeave:a=>{a.currentTarget.style.transform="translateY(0)",a.currentTarget.style.boxShadow=r||o?"none":`0 4px 16px ${k.rose}30`},children:[r&&n.jsx("span",{style:{width:14,height:14,border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"white",borderRadius:"50%",display:"inline-block",animation:"spin 0.8s linear infinite"}}),e]})}function bs({label:e,onClick:t}){return n.jsx("button",{onClick:t,style:{padding:"9px 20px",background:"transparent",border:`1.5px solid ${k.border}`,color:k.text,fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",cursor:"pointer",fontWeight:600,borderRadius:8,transition:"all 0.3s",whiteSpace:"nowrap"},onMouseEnter:r=>{r.currentTarget.style.borderColor=k.rose,r.currentTarget.style.color=k.burgundy},onMouseLeave:r=>{r.currentTarget.style.borderColor=k.border,r.currentTarget.style.color=k.text},children:e})}function yh({text:e}){return n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",padding:80,gap:16},children:[n.jsx("div",{style:{width:40,height:40,border:`3px solid ${k.border}`,borderTopColor:k.rose,borderRadius:"50%",animation:"spin 1s linear infinite"}}),n.jsx("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:16,color:k.textMuted,fontStyle:"italic"},children:e})]})}function bh({icon:e,title:t,sub:r,btnLabel:o,onBtn:i}){return n.jsxs("div",{style:{textAlign:"center",padding:80},children:[n.jsx("div",{style:{fontSize:48,marginBottom:16},children:e}),n.jsx("div",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:28,fontWeight:300,color:k.text,marginBottom:8},children:t}),n.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:k.textMuted,marginBottom:28},children:r}),o&&n.jsx(Pr,{label:o,onClick:i})]})}const Kd=[{orderId:"ARK-2025A1B2",status:"delivered",createdAt:"2025-07-05T10:30:00Z",deliveredAt:new Date(Date.now()-3*24*60*60*1e3).toISOString(),total:4999,shippingPartner:"BlueDart Express",trackingNumber:"BD98765432",expectedDelivery:"July 10, 2025",items:[{productId:"p1",name:"Rose Gold Infinity Ring",price:2999,quantity:1,image:null,product:{_id:"p1",name:"Rose Gold Infinity Ring",price:2999,images:[]}},{productId:"p2",name:"Pearl Drop Earrings",price:2e3,quantity:1,image:null,product:{_id:"p2",name:"Pearl Drop Earrings",price:2e3,images:[]}}],statusHistory:[{status:"placed",date:"2025-07-05T10:30:00Z",location:"Online"},{status:"confirmed",date:"2025-07-05T11:00:00Z",location:"Mumbai"},{status:"packed",date:"2025-07-06T14:00:00Z",location:"Mumbai Warehouse"},{status:"shipped",date:"2025-07-07T09:00:00Z",location:"Mumbai Hub"},{status:"in_transit",date:"2025-07-08T06:00:00Z",location:"Delhi Sort Center"},{status:"delivered",date:new Date(Date.now()-3*24*60*60*1e3).toISOString(),location:"Your Address",note:"Signed by: Customer"}]},{orderId:"ARK-2025C3D4",status:"shipped",createdAt:"2025-07-09T16:45:00Z",total:1499,shippingPartner:"DTDC",trackingNumber:"DT12345678",expectedDelivery:"July 14, 2025",items:[{productId:"p3",name:"Silver Charm Bracelet",price:1499,quantity:1,product:{_id:"p3",name:"Silver Charm Bracelet",price:1499,images:[]}}],statusHistory:[{status:"placed",date:"2025-07-09T16:45:00Z",location:"Online"},{status:"confirmed",date:"2025-07-09T17:00:00Z",location:"Mumbai"},{status:"packed",date:"2025-07-10T10:00:00Z",location:"Mumbai Warehouse"},{status:"shipped",date:"2025-07-11T08:30:00Z",location:"Mumbai Hub"}]},{orderId:"ARK-2025E5F6",status:"delivered",createdAt:"2025-06-20T09:00:00Z",deliveredAt:"2025-06-25T14:00:00Z",total:7499,items:[{productId:"p4",name:"Diamond Pendant Necklace",price:7499,quantity:1,product:{_id:"p4",name:"Diamond Pendant Necklace",price:7499,images:[]}}],statusHistory:[{status:"placed",date:"2025-06-20T09:00:00Z",location:"Online"},{status:"confirmed",date:"2025-06-20T09:30:00Z",location:"Mumbai"},{status:"shipped",date:"2025-06-22T10:00:00Z",location:"Mumbai Hub"},{status:"delivered",date:"2025-06-25T14:00:00Z",location:"Your Address"}]}],Te={bg:"#faf8f5",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",burgundy:"#8b4654"};function En({title:e,icon:t="🚧"}){return n.jsxs("div",{style:{minHeight:"70vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"140px 40px 80px",background:Te.bg,textAlign:"center"},children:[n.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}),n.jsx("div",{style:{fontSize:52,marginBottom:20,animation:"fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1)"},children:t}),n.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(28px, 4vw, 42px)",fontWeight:300,margin:"0 0 12px",background:`linear-gradient(135deg, ${Te.text}, ${Te.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"fadeInUp 0.6s 0.1s cubic-bezier(0.34,1.56,0.64,1) both"},children:e}),n.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:Te.textMuted,marginBottom:36,lineHeight:1.7,maxWidth:400,animation:"fadeInUp 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both"},children:"We're working on something beautiful. Check back soon!"}),n.jsxs("div",{style:{display:"flex",gap:14,flexWrap:"wrap",justifyContent:"center",animation:"fadeInUp 0.6s 0.3s cubic-bezier(0.34,1.56,0.64,1) both"},children:[n.jsx("a",{href:"/",style:{padding:"13px 36px",background:`linear-gradient(135deg, ${Te.rose}, ${Te.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",textDecoration:"none",fontWeight:700,borderRadius:8,boxShadow:`0 4px 16px ${Te.rose}30`,transition:"all 0.3s"},children:"Go Home"}),n.jsx("a",{href:"/products",style:{padding:"13px 36px",background:"transparent",border:`1.5px solid ${Te.rose}`,color:Te.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",textDecoration:"none",fontWeight:600,borderRadius:8,transition:"all 0.3s"},children:"Browse Products"})]})]})}function vh(){return n.jsxs("div",{style:{minHeight:"70vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"140px 40px 80px",background:Te.bg,textAlign:"center"},children:[n.jsx("style",{children:`
        @keyframes fadeInUp {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
      `}),n.jsx("div",{style:{fontSize:80,fontFamily:"'Cormorant Garamond', serif",fontWeight:300,lineHeight:1,background:`linear-gradient(135deg, ${Te.rose}, ${Te.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",marginBottom:16,animation:"fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1)"},children:"404"}),n.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(24px, 3vw, 36px)",fontWeight:300,margin:"0 0 12px",color:Te.text,animation:"fadeInUp 0.6s 0.1s cubic-bezier(0.34,1.56,0.64,1) both"},children:"Page Not Found"}),n.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:Te.textMuted,marginBottom:36,lineHeight:1.7,animation:"fadeInUp 0.6s 0.2s cubic-bezier(0.34,1.56,0.64,1) both"},children:"The page you're looking for doesn't exist or has been moved."}),n.jsxs("div",{style:{display:"flex",gap:14,flexWrap:"wrap",justifyContent:"center",animation:"fadeInUp 0.6s 0.3s cubic-bezier(0.34,1.56,0.64,1) both"},children:[n.jsx("a",{href:"/",style:{padding:"13px 36px",background:`linear-gradient(135deg, ${Te.rose}, ${Te.burgundy})`,color:"white",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",textDecoration:"none",fontWeight:700,borderRadius:8,boxShadow:`0 4px 16px ${Te.rose}30`},children:"Go Home"}),n.jsx("a",{href:"/products",style:{padding:"13px 36px",background:"transparent",border:`1.5px solid ${Te.rose}`,color:Te.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",textDecoration:"none",fontWeight:600,borderRadius:8},children:"Browse Products"})]})]})}function wh(){const[e,t]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsx(Hm,{onLoginClick:()=>t(!0)}),n.jsxs(pm,{children:[n.jsx(ce,{path:"/",element:n.jsx(px,{})}),n.jsx(ce,{path:"/new-collection",element:n.jsx(fx,{})}),n.jsx(ce,{path:"/best-sellers",element:n.jsx(gx,{})}),n.jsx(ce,{path:"/products",element:n.jsx(mx,{})}),n.jsx(ce,{path:"/product/:id",element:n.jsx(hx,{})}),n.jsx(ce,{path:"/categories",element:n.jsx(yx,{})}),n.jsx(ce,{path:"/blog",element:n.jsx(bx,{})}),n.jsx(ce,{path:"/cart",element:n.jsx(Mx,{})}),n.jsx(ce,{path:"/wishlist",element:n.jsx(Dx,{})}),n.jsx(ce,{path:"/gift-for-her",element:n.jsx(Yx,{})}),n.jsx(ce,{path:"/gift-for-him",element:n.jsx(Xx,{})}),n.jsx(ce,{path:"/my-orders",element:n.jsx(th,{})}),n.jsx(ce,{path:"/about-us",element:n.jsx(rh,{})}),n.jsx(ce,{path:"/customer-care",element:n.jsx(nh,{})}),n.jsx(ce,{path:"/bankdetails",element:n.jsx(oh,{})}),n.jsx(ce,{path:"/privacy-policy",element:n.jsx(Vd,{})}),n.jsx(ce,{path:"/terms-and-conditions",element:n.jsx(Gd,{})}),n.jsx(ce,{path:"/refund-policy",element:n.jsx(Qd,{})}),n.jsx(ce,{path:"/order-tracking",element:n.jsx(qd,{})}),n.jsx(ce,{path:"/careers",element:n.jsx(En,{title:"Careers at Arke",icon:"💼"})}),n.jsx(ce,{path:"/stores",element:n.jsx(En,{title:"Store Locator",icon:"📍"})}),n.jsx(ce,{path:"/faqs",element:n.jsx(En,{title:"Frequently Asked Questions",icon:"❓"})}),n.jsx(ce,{path:"/contact",element:n.jsx(En,{title:"Contact Us",icon:"💌"})}),n.jsx(ce,{path:"/accessibility",element:n.jsx(En,{title:"Accessibility",icon:"♿"})}),n.jsx(ce,{path:"/shipping",element:n.jsx(qd,{})}),n.jsx(ce,{path:"/privacy",element:n.jsx(Vd,{})}),n.jsx(ce,{path:"/terms",element:n.jsx(Gd,{})}),n.jsx(ce,{path:"/refund",element:n.jsx(Qd,{})}),n.jsx(ce,{path:"*",element:n.jsx(vh,{})})]}),n.jsx(Gm,{}),e&&n.jsx(Vm,{onClose:()=>t(!1)})]})}function jh(){return n.jsx(Pm,{children:n.jsx(vm,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:n.jsx(wh,{})})})}va.createRoot(document.getElementById("root")).render(n.jsx(m.StrictMode,{children:n.jsx(Qm,{children:n.jsx(Nm,{children:n.jsx(Tm,{children:n.jsx(jh,{})})})})}));
