function rp(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(r,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=n(i);fetch(i.href,a)}})();function op(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var kc={exports:{}},ti={},jc={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hr=Symbol.for("react.element"),ip=Symbol.for("react.portal"),ap=Symbol.for("react.fragment"),sp=Symbol.for("react.strict_mode"),lp=Symbol.for("react.profiler"),cp=Symbol.for("react.provider"),dp=Symbol.for("react.context"),up=Symbol.for("react.forward_ref"),pp=Symbol.for("react.suspense"),fp=Symbol.for("react.memo"),gp=Symbol.for("react.lazy"),Ys=Symbol.iterator;function mp(e){return e===null||typeof e!="object"?null:(e=Ys&&e[Ys]||e["@@iterator"],typeof e=="function"?e:null)}var Sc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cc=Object.assign,$c={};function Kn(e,t,n){this.props=e,this.context=t,this.refs=$c,this.updater=n||Sc}Kn.prototype.isReactComponent={};Kn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function zc(){}zc.prototype=Kn.prototype;function Ga(e,t,n){this.props=e,this.context=t,this.refs=$c,this.updater=n||Sc}var Ya=Ga.prototype=new zc;Ya.constructor=Ga;Cc(Ya,Kn.prototype);Ya.isPureReactComponent=!0;var Vs=Array.isArray,Nc=Object.prototype.hasOwnProperty,Va={current:null},Pc={key:!0,ref:!0,__self:!0,__source:!0};function Ec(e,t,n){var r,i={},a=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Nc.call(t,r)&&!Pc.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Hr,type:e,key:a,ref:s,props:i,_owner:Va.current}}function xp(e,t){return{$$typeof:Hr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Qa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Hr}function hp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Qs=/\/+/g;function vi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?hp(""+e.key):t.toString(36)}function mo(e,t,n,r,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Hr:case ip:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+vi(s,0):r,Vs(i)?(n="",e!=null&&(n=e.replace(Qs,"$&/")+"/"),mo(i,t,n,"",function(d){return d})):i!=null&&(Qa(i)&&(i=xp(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Qs,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Vs(e))for(var l=0;l<e.length;l++){a=e[l];var c=r+vi(a,l);s+=mo(a,t,n,c,i)}else if(c=mp(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=r+vi(a,l++),s+=mo(a,t,n,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function Jr(e,t,n){if(e==null)return e;var r=[],i=0;return mo(e,r,"","",function(a){return t.call(n,a,i++)}),r}function yp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var We={current:null},xo={transition:null},bp={ReactCurrentDispatcher:We,ReactCurrentBatchConfig:xo,ReactCurrentOwner:Va};function Tc(){throw Error("act(...) is not supported in production builds of React.")}V.Children={map:Jr,forEach:function(e,t,n){Jr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Jr(e,function(){t++}),t},toArray:function(e){return Jr(e,function(t){return t})||[]},only:function(e){if(!Qa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=Kn;V.Fragment=ap;V.Profiler=lp;V.PureComponent=Ga;V.StrictMode=sp;V.Suspense=pp;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bp;V.act=Tc;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Cc({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=Va.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Nc.call(t,c)&&!Pc.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Hr,type:e.type,key:i,ref:a,props:r,_owner:s}};V.createContext=function(e){return e={$$typeof:dp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:cp,_context:e},e.Consumer=e};V.createElement=Ec;V.createFactory=function(e){var t=Ec.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:up,render:e}};V.isValidElement=Qa;V.lazy=function(e){return{$$typeof:gp,_payload:{_status:-1,_result:e},_init:yp}};V.memo=function(e,t){return{$$typeof:fp,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=xo.transition;xo.transition={};try{e()}finally{xo.transition=t}};V.unstable_act=Tc;V.useCallback=function(e,t){return We.current.useCallback(e,t)};V.useContext=function(e){return We.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return We.current.useDeferredValue(e)};V.useEffect=function(e,t){return We.current.useEffect(e,t)};V.useId=function(){return We.current.useId()};V.useImperativeHandle=function(e,t,n){return We.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return We.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return We.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return We.current.useMemo(e,t)};V.useReducer=function(e,t,n){return We.current.useReducer(e,t,n)};V.useRef=function(e){return We.current.useRef(e)};V.useState=function(e){return We.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return We.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return We.current.useTransition()};V.version="18.3.1";jc.exports=V;var b=jc.exports;const ct=op(b),vp=rp({__proto__:null,default:ct},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wp=b,kp=Symbol.for("react.element"),jp=Symbol.for("react.fragment"),Sp=Object.prototype.hasOwnProperty,Cp=wp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$p={key:!0,ref:!0,__self:!0,__source:!0};function Ic(e,t,n){var r,i={},a=null,s=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Sp.call(t,r)&&!$p.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:kp,type:e,key:a,ref:s,props:i,_owner:Cp.current}}ti.Fragment=jp;ti.jsx=Ic;ti.jsxs=Ic;kc.exports=ti;var o=kc.exports,Qi={},Mc={exports:{}},Xe={},Fc={exports:{}},Lc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(C,I){var R=C.length;C.push(I);e:for(;0<R;){var ne=R-1>>>1,me=C[ne];if(0<i(me,I))C[ne]=I,C[R]=me,R=ne;else break e}}function n(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var I=C[0],R=C.pop();if(R!==I){C[0]=R;e:for(var ne=0,me=C.length,Et=me>>>1;ne<Et;){var rn=2*(ne+1)-1,bi=C[rn],on=rn+1,Xr=C[on];if(0>i(bi,R))on<me&&0>i(Xr,bi)?(C[ne]=Xr,C[on]=R,ne=on):(C[ne]=bi,C[rn]=R,ne=rn);else if(on<me&&0>i(Xr,R))C[ne]=Xr,C[on]=R,ne=on;else break e}}return I}function i(C,I){var R=C.sortIndex-I.sortIndex;return R!==0?R:C.id-I.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],d=[],g=1,f=null,p=3,w=!1,h=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(C){for(var I=n(d);I!==null;){if(I.callback===null)r(d);else if(I.startTime<=C)r(d),I.sortIndex=I.expirationTime,t(c,I);else break;I=n(d)}}function k(C){if(v=!1,x(C),!h)if(n(c)!==null)h=!0,qe(N);else{var I=n(d);I!==null&&rr(k,I.startTime-C)}}function N(C,I){h=!1,v&&(v=!1,m(S),S=-1),w=!0;var R=p;try{for(x(I),f=n(c);f!==null&&(!(f.expirationTime>I)||C&&!ee());){var ne=f.callback;if(typeof ne=="function"){f.callback=null,p=f.priorityLevel;var me=ne(f.expirationTime<=I);I=e.unstable_now(),typeof me=="function"?f.callback=me:f===n(c)&&r(c),x(I)}else r(c);f=n(c)}if(f!==null)var Et=!0;else{var rn=n(d);rn!==null&&rr(k,rn.startTime-I),Et=!1}return Et}finally{f=null,p=R,w=!1}}var j=!1,$=null,S=-1,D=5,B=-1;function ee(){return!(e.unstable_now()-B<D)}function q(){if($!==null){var C=e.unstable_now();B=C;var I=!0;try{I=$(!0,C)}finally{I?te():(j=!1,$=null)}}else j=!1}var te;if(typeof u=="function")te=function(){u(q)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Se=le.port2;le.port1.onmessage=q,te=function(){Se.postMessage(null)}}else te=function(){y(q,0)};function qe(C){$=C,j||(j=!0,te())}function rr(C,I){S=y(function(){C(e.unstable_now())},I)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(C){C.callback=null},e.unstable_continueExecution=function(){h||w||(h=!0,qe(N))},e.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<C?Math.floor(1e3/C):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(C){switch(p){case 1:case 2:case 3:var I=3;break;default:I=p}var R=p;p=I;try{return C()}finally{p=R}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(C,I){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var R=p;p=C;try{return I()}finally{p=R}},e.unstable_scheduleCallback=function(C,I,R){var ne=e.unstable_now();switch(typeof R=="object"&&R!==null?(R=R.delay,R=typeof R=="number"&&0<R?ne+R:ne):R=ne,C){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=R+me,C={id:g++,callback:I,priorityLevel:C,startTime:R,expirationTime:me,sortIndex:-1},R>ne?(C.sortIndex=R,t(d,C),n(c)===null&&C===n(d)&&(v?(m(S),S=-1):v=!0,rr(k,R-ne))):(C.sortIndex=me,t(c,C),h||w||(h=!0,qe(N))),C},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(C){var I=p;return function(){var R=p;p=I;try{return C.apply(this,arguments)}finally{p=R}}}})(Lc);Fc.exports=Lc;var zp=Fc.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np=b,Ke=zp;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _c=new Set,Cr={};function bn(e,t){On(e,t),On(e+"Capture",t)}function On(e,t){for(Cr[e]=t,e=0;e<t.length;e++)_c.add(t[e])}var Ct=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ki=Object.prototype.hasOwnProperty,Pp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ks={},Xs={};function Ep(e){return Ki.call(Xs,e)?!0:Ki.call(Ks,e)?!1:Pp.test(e)?Xs[e]=!0:(Ks[e]=!0,!1)}function Tp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Ip(e,t,n,r){if(t===null||typeof t>"u"||Tp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Be(e,t,n,r,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ne[e]=new Be(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ne[t]=new Be(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ne[e]=new Be(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ne[e]=new Be(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ne[e]=new Be(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ne[e]=new Be(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ne[e]=new Be(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ne[e]=new Be(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ne[e]=new Be(e,5,!1,e.toLowerCase(),null,!1,!1)});var Ka=/[\-:]([a-z])/g;function Xa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Ka,Xa);Ne[t]=new Be(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Ka,Xa);Ne[t]=new Be(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Ka,Xa);Ne[t]=new Be(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ne[e]=new Be(e,1,!1,e.toLowerCase(),null,!1,!1)});Ne.xlinkHref=new Be("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ne[e]=new Be(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ja(e,t,n,r){var i=Ne.hasOwnProperty(t)?Ne[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Ip(t,n,i,r)&&(n=null),r||i===null?Ep(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Pt=Np.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,qr=Symbol.for("react.element"),Sn=Symbol.for("react.portal"),Cn=Symbol.for("react.fragment"),qa=Symbol.for("react.strict_mode"),Xi=Symbol.for("react.profiler"),Rc=Symbol.for("react.provider"),Wc=Symbol.for("react.context"),Za=Symbol.for("react.forward_ref"),Ji=Symbol.for("react.suspense"),qi=Symbol.for("react.suspense_list"),es=Symbol.for("react.memo"),Ft=Symbol.for("react.lazy"),Bc=Symbol.for("react.offscreen"),Js=Symbol.iterator;function or(e){return e===null||typeof e!="object"?null:(e=Js&&e[Js]||e["@@iterator"],typeof e=="function"?e:null)}var fe=Object.assign,wi;function pr(e){if(wi===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);wi=t&&t[1]||""}return`
`+wi+e}var ki=!1;function ji(e,t){if(!e||ki)return"";ki=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=r.stack.split(`
`),s=i.length-1,l=a.length-1;1<=s&&0<=l&&i[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==a[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{ki=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pr(e):""}function Mp(e){switch(e.tag){case 5:return pr(e.type);case 16:return pr("Lazy");case 13:return pr("Suspense");case 19:return pr("SuspenseList");case 0:case 2:case 15:return e=ji(e.type,!1),e;case 11:return e=ji(e.type.render,!1),e;case 1:return e=ji(e.type,!0),e;default:return""}}function Zi(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Cn:return"Fragment";case Sn:return"Portal";case Xi:return"Profiler";case qa:return"StrictMode";case Ji:return"Suspense";case qi:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Wc:return(e.displayName||"Context")+".Consumer";case Rc:return(e._context.displayName||"Context")+".Provider";case Za:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case es:return t=e.displayName||null,t!==null?t:Zi(e.type)||"Memo";case Ft:t=e._payload,e=e._init;try{return Zi(e(t))}catch{}}return null}function Fp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zi(t);case 8:return t===qa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Xt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ac(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lp(e){var t=Ac(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zr(e){e._valueTracker||(e._valueTracker=Lp(e))}function Dc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Ac(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function zo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ea(e,t){var n=t.checked;return fe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function qs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Xt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Oc(e,t){t=t.checked,t!=null&&Ja(e,"checked",t,!1)}function ta(e,t){Oc(e,t);var n=Xt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?na(e,t.type,n):t.hasOwnProperty("defaultValue")&&na(e,t.type,Xt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Zs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function na(e,t,n){(t!=="number"||zo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var fr=Array.isArray;function _n(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Xt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ra(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return fe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function el(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(fr(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Xt(n)}}function Uc(e,t){var n=Xt(t.value),r=Xt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function tl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Hc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Hc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var eo,Gc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function $r(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_p=["Webkit","ms","Moz","O"];Object.keys(xr).forEach(function(e){_p.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xr[t]=xr[e]})});function Yc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xr.hasOwnProperty(e)&&xr[e]?(""+t).trim():t+"px"}function Vc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Yc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Rp=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ia(e,t){if(t){if(Rp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function aa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var sa=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var la=null,Rn=null,Wn=null;function nl(e){if(e=Vr(e)){if(typeof la!="function")throw Error(P(280));var t=e.stateNode;t&&(t=ai(t),la(e.stateNode,e.type,t))}}function Qc(e){Rn?Wn?Wn.push(e):Wn=[e]:Rn=e}function Kc(){if(Rn){var e=Rn,t=Wn;if(Wn=Rn=null,nl(e),t)for(e=0;e<t.length;e++)nl(t[e])}}function Xc(e,t){return e(t)}function Jc(){}var Si=!1;function qc(e,t,n){if(Si)return e(t,n);Si=!0;try{return Xc(e,t,n)}finally{Si=!1,(Rn!==null||Wn!==null)&&(Jc(),Kc())}}function zr(e,t){var n=e.stateNode;if(n===null)return null;var r=ai(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var ca=!1;if(Ct)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){ca=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{ca=!1}function Wp(e,t,n,r,i,a,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(g){this.onError(g)}}var hr=!1,No=null,Po=!1,da=null,Bp={onError:function(e){hr=!0,No=e}};function Ap(e,t,n,r,i,a,s,l,c){hr=!1,No=null,Wp.apply(Bp,arguments)}function Dp(e,t,n,r,i,a,s,l,c){if(Ap.apply(this,arguments),hr){if(hr){var d=No;hr=!1,No=null}else throw Error(P(198));Po||(Po=!0,da=d)}}function vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Zc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function rl(e){if(vn(e)!==e)throw Error(P(188))}function Op(e){var t=e.alternate;if(!t){if(t=vn(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return rl(i),e;if(a===r)return rl(i),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=a;break}if(l===r){s=!0,r=i,n=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===n){s=!0,n=a,r=i;break}if(l===r){s=!0,r=a,n=i;break}l=l.sibling}if(!s)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function ed(e){return e=Op(e),e!==null?td(e):null}function td(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=td(e);if(t!==null)return t;e=e.sibling}return null}var nd=Ke.unstable_scheduleCallback,ol=Ke.unstable_cancelCallback,Up=Ke.unstable_shouldYield,Hp=Ke.unstable_requestPaint,xe=Ke.unstable_now,Gp=Ke.unstable_getCurrentPriorityLevel,ns=Ke.unstable_ImmediatePriority,rd=Ke.unstable_UserBlockingPriority,Eo=Ke.unstable_NormalPriority,Yp=Ke.unstable_LowPriority,od=Ke.unstable_IdlePriority,ni=null,xt=null;function Vp(e){if(xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(ni,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Xp,Qp=Math.log,Kp=Math.LN2;function Xp(e){return e>>>=0,e===0?32:31-(Qp(e)/Kp|0)|0}var to=64,no=4194304;function gr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function To(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=gr(l):(a&=s,a!==0&&(r=gr(a)))}else s=n&~i,s!==0?r=gr(s):a!==0&&(r=gr(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function Jp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qp(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-dt(a),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=Jp(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function ua(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function id(){var e=to;return to<<=1,!(to&4194240)&&(to=64),e}function Ci(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Gr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function Zp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function rs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var J=0;function ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sd,os,ld,cd,dd,pa=!1,ro=[],Dt=null,Ot=null,Ut=null,Nr=new Map,Pr=new Map,_t=[],ef="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function il(e,t){switch(e){case"focusin":case"focusout":Dt=null;break;case"dragenter":case"dragleave":Ot=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Nr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pr.delete(t.pointerId)}}function ar(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Vr(t),t!==null&&os(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function tf(e,t,n,r,i){switch(t){case"focusin":return Dt=ar(Dt,e,t,n,r,i),!0;case"dragenter":return Ot=ar(Ot,e,t,n,r,i),!0;case"mouseover":return Ut=ar(Ut,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return Nr.set(a,ar(Nr.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,Pr.set(a,ar(Pr.get(a)||null,e,t,n,r,i)),!0}return!1}function ud(e){var t=ln(e.target);if(t!==null){var n=vn(t);if(n!==null){if(t=n.tag,t===13){if(t=Zc(n),t!==null){e.blockedOn=t,dd(e.priority,function(){ld(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);sa=r,n.target.dispatchEvent(r),sa=null}else return t=Vr(n),t!==null&&os(t),e.blockedOn=n,!1;t.shift()}return!0}function al(e,t,n){ho(e)&&n.delete(t)}function nf(){pa=!1,Dt!==null&&ho(Dt)&&(Dt=null),Ot!==null&&ho(Ot)&&(Ot=null),Ut!==null&&ho(Ut)&&(Ut=null),Nr.forEach(al),Pr.forEach(al)}function sr(e,t){e.blockedOn===t&&(e.blockedOn=null,pa||(pa=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,nf)))}function Er(e){function t(i){return sr(i,e)}if(0<ro.length){sr(ro[0],e);for(var n=1;n<ro.length;n++){var r=ro[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Dt!==null&&sr(Dt,e),Ot!==null&&sr(Ot,e),Ut!==null&&sr(Ut,e),Nr.forEach(t),Pr.forEach(t),n=0;n<_t.length;n++)r=_t[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<_t.length&&(n=_t[0],n.blockedOn===null);)ud(n),n.blockedOn===null&&_t.shift()}var Bn=Pt.ReactCurrentBatchConfig,Io=!0;function rf(e,t,n,r){var i=J,a=Bn.transition;Bn.transition=null;try{J=1,is(e,t,n,r)}finally{J=i,Bn.transition=a}}function of(e,t,n,r){var i=J,a=Bn.transition;Bn.transition=null;try{J=4,is(e,t,n,r)}finally{J=i,Bn.transition=a}}function is(e,t,n,r){if(Io){var i=fa(e,t,n,r);if(i===null)Li(e,t,r,Mo,n),il(e,r);else if(tf(i,e,t,n,r))r.stopPropagation();else if(il(e,r),t&4&&-1<ef.indexOf(e)){for(;i!==null;){var a=Vr(i);if(a!==null&&sd(a),a=fa(e,t,n,r),a===null&&Li(e,t,r,Mo,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Li(e,t,r,null,n)}}var Mo=null;function fa(e,t,n,r){if(Mo=null,e=ts(r),e=ln(e),e!==null)if(t=vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Zc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Mo=e,null}function pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gp()){case ns:return 1;case rd:return 4;case Eo:case Yp:return 16;case od:return 536870912;default:return 16}default:return 16}}var Wt=null,as=null,yo=null;function fd(){if(yo)return yo;var e,t=as,n=t.length,r,i="value"in Wt?Wt.value:Wt.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[a-r];r++);return yo=i.slice(e,1<r?1-r:void 0)}function bo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function oo(){return!0}function sl(){return!1}function Je(e){function t(n,r,i,a,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?oo:sl,this.isPropagationStopped=sl,this}return fe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=oo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=oo)},persist:function(){},isPersistent:oo}),t}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ss=Je(Xn),Yr=fe({},Xn,{view:0,detail:0}),af=Je(Yr),$i,zi,lr,ri=fe({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ls,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==lr&&(lr&&e.type==="mousemove"?($i=e.screenX-lr.screenX,zi=e.screenY-lr.screenY):zi=$i=0,lr=e),$i)},movementY:function(e){return"movementY"in e?e.movementY:zi}}),ll=Je(ri),sf=fe({},ri,{dataTransfer:0}),lf=Je(sf),cf=fe({},Yr,{relatedTarget:0}),Ni=Je(cf),df=fe({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),uf=Je(df),pf=fe({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ff=Je(pf),gf=fe({},Xn,{data:0}),cl=Je(gf),mf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hf[e])?!!t[e]:!1}function ls(){return yf}var bf=fe({},Yr,{key:function(e){if(e.key){var t=mf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=bo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ls,charCode:function(e){return e.type==="keypress"?bo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?bo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vf=Je(bf),wf=fe({},ri,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),dl=Je(wf),kf=fe({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ls}),jf=Je(kf),Sf=fe({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Cf=Je(Sf),$f=fe({},ri,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zf=Je($f),Nf=[9,13,27,32],cs=Ct&&"CompositionEvent"in window,yr=null;Ct&&"documentMode"in document&&(yr=document.documentMode);var Pf=Ct&&"TextEvent"in window&&!yr,gd=Ct&&(!cs||yr&&8<yr&&11>=yr),ul=" ",pl=!1;function md(e,t){switch(e){case"keyup":return Nf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var $n=!1;function Ef(e,t){switch(e){case"compositionend":return xd(t);case"keypress":return t.which!==32?null:(pl=!0,ul);case"textInput":return e=t.data,e===ul&&pl?null:e;default:return null}}function Tf(e,t){if($n)return e==="compositionend"||!cs&&md(e,t)?(e=fd(),yo=as=Wt=null,$n=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return gd&&t.locale!=="ko"?null:t.data;default:return null}}var If={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!If[e.type]:t==="textarea"}function hd(e,t,n,r){Qc(r),t=Fo(t,"onChange"),0<t.length&&(n=new ss("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var br=null,Tr=null;function Mf(e){Nd(e,0)}function oi(e){var t=Pn(e);if(Dc(t))return e}function Ff(e,t){if(e==="change")return t}var yd=!1;if(Ct){var Pi;if(Ct){var Ei="oninput"in document;if(!Ei){var gl=document.createElement("div");gl.setAttribute("oninput","return;"),Ei=typeof gl.oninput=="function"}Pi=Ei}else Pi=!1;yd=Pi&&(!document.documentMode||9<document.documentMode)}function ml(){br&&(br.detachEvent("onpropertychange",bd),Tr=br=null)}function bd(e){if(e.propertyName==="value"&&oi(Tr)){var t=[];hd(t,Tr,e,ts(e)),qc(Mf,t)}}function Lf(e,t,n){e==="focusin"?(ml(),br=t,Tr=n,br.attachEvent("onpropertychange",bd)):e==="focusout"&&ml()}function _f(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oi(Tr)}function Rf(e,t){if(e==="click")return oi(t)}function Wf(e,t){if(e==="input"||e==="change")return oi(t)}function Bf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Bf;function Ir(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ki.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function xl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hl(e,t){var n=xl(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=xl(n)}}function vd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?vd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function wd(){for(var e=window,t=zo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=zo(e.document)}return t}function ds(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Af(e){var t=wd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&vd(n.ownerDocument.documentElement,n)){if(r!==null&&ds(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=hl(n,a);var s=hl(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Df=Ct&&"documentMode"in document&&11>=document.documentMode,zn=null,ga=null,vr=null,ma=!1;function yl(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ma||zn==null||zn!==zo(r)||(r=zn,"selectionStart"in r&&ds(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),vr&&Ir(vr,r)||(vr=r,r=Fo(ga,"onSelect"),0<r.length&&(t=new ss("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=zn)))}function io(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Nn={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},Ti={},kd={};Ct&&(kd=document.createElement("div").style,"AnimationEvent"in window||(delete Nn.animationend.animation,delete Nn.animationiteration.animation,delete Nn.animationstart.animation),"TransitionEvent"in window||delete Nn.transitionend.transition);function ii(e){if(Ti[e])return Ti[e];if(!Nn[e])return e;var t=Nn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in kd)return Ti[e]=t[n];return e}var jd=ii("animationend"),Sd=ii("animationiteration"),Cd=ii("animationstart"),$d=ii("transitionend"),zd=new Map,bl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function qt(e,t){zd.set(e,t),bn(t,[e])}for(var Ii=0;Ii<bl.length;Ii++){var Mi=bl[Ii],Of=Mi.toLowerCase(),Uf=Mi[0].toUpperCase()+Mi.slice(1);qt(Of,"on"+Uf)}qt(jd,"onAnimationEnd");qt(Sd,"onAnimationIteration");qt(Cd,"onAnimationStart");qt("dblclick","onDoubleClick");qt("focusin","onFocus");qt("focusout","onBlur");qt($d,"onTransitionEnd");On("onMouseEnter",["mouseout","mouseover"]);On("onMouseLeave",["mouseout","mouseover"]);On("onPointerEnter",["pointerout","pointerover"]);On("onPointerLeave",["pointerout","pointerover"]);bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hf=new Set("cancel close invalid load scroll toggle".split(" ").concat(mr));function vl(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Dp(r,t,void 0,e),e.currentTarget=null}function Nd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&i.isPropagationStopped())break e;vl(i,l,d),a=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&i.isPropagationStopped())break e;vl(i,l,d),a=c}}}if(Po)throw e=da,Po=!1,da=null,e}function ae(e,t){var n=t[va];n===void 0&&(n=t[va]=new Set);var r=e+"__bubble";n.has(r)||(Pd(t,e,2,!1),n.add(r))}function Fi(e,t,n){var r=0;t&&(r|=4),Pd(n,e,r,t)}var ao="_reactListening"+Math.random().toString(36).slice(2);function Mr(e){if(!e[ao]){e[ao]=!0,_c.forEach(function(n){n!=="selectionchange"&&(Hf.has(n)||Fi(n,!1,e),Fi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ao]||(t[ao]=!0,Fi("selectionchange",!1,t))}}function Pd(e,t,n,r){switch(pd(t)){case 1:var i=rf;break;case 4:i=of;break;default:i=is}n=i.bind(null,t,n,e),i=void 0,!ca||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Li(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=ln(l),s===null)return;if(c=s.tag,c===5||c===6){r=a=s;continue e}l=l.parentNode}}r=r.return}qc(function(){var d=a,g=ts(n),f=[];e:{var p=zd.get(e);if(p!==void 0){var w=ss,h=e;switch(e){case"keypress":if(bo(n)===0)break e;case"keydown":case"keyup":w=vf;break;case"focusin":h="focus",w=Ni;break;case"focusout":h="blur",w=Ni;break;case"beforeblur":case"afterblur":w=Ni;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=ll;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=lf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=jf;break;case jd:case Sd:case Cd:w=uf;break;case $d:w=Cf;break;case"scroll":w=af;break;case"wheel":w=zf;break;case"copy":case"cut":case"paste":w=ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=dl}var v=(t&4)!==0,y=!v&&e==="scroll",m=v?p!==null?p+"Capture":null:p;v=[];for(var u=d,x;u!==null;){x=u;var k=x.stateNode;if(x.tag===5&&k!==null&&(x=k,m!==null&&(k=zr(u,m),k!=null&&v.push(Fr(u,k,x)))),y)break;u=u.return}0<v.length&&(p=new w(p,h,null,n,g),f.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",p&&n!==sa&&(h=n.relatedTarget||n.fromElement)&&(ln(h)||h[$t]))break e;if((w||p)&&(p=g.window===g?g:(p=g.ownerDocument)?p.defaultView||p.parentWindow:window,w?(h=n.relatedTarget||n.toElement,w=d,h=h?ln(h):null,h!==null&&(y=vn(h),h!==y||h.tag!==5&&h.tag!==6)&&(h=null)):(w=null,h=d),w!==h)){if(v=ll,k="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(v=dl,k="onPointerLeave",m="onPointerEnter",u="pointer"),y=w==null?p:Pn(w),x=h==null?p:Pn(h),p=new v(k,u+"leave",w,n,g),p.target=y,p.relatedTarget=x,k=null,ln(g)===d&&(v=new v(m,u+"enter",h,n,g),v.target=x,v.relatedTarget=y,k=v),y=k,w&&h)t:{for(v=w,m=h,u=0,x=v;x;x=jn(x))u++;for(x=0,k=m;k;k=jn(k))x++;for(;0<u-x;)v=jn(v),u--;for(;0<x-u;)m=jn(m),x--;for(;u--;){if(v===m||m!==null&&v===m.alternate)break t;v=jn(v),m=jn(m)}v=null}else v=null;w!==null&&wl(f,p,w,v,!1),h!==null&&y!==null&&wl(f,y,h,v,!0)}}e:{if(p=d?Pn(d):window,w=p.nodeName&&p.nodeName.toLowerCase(),w==="select"||w==="input"&&p.type==="file")var N=Ff;else if(fl(p))if(yd)N=Wf;else{N=_f;var j=Lf}else(w=p.nodeName)&&w.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(N=Rf);if(N&&(N=N(e,d))){hd(f,N,n,g);break e}j&&j(e,p,d),e==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&na(p,"number",p.value)}switch(j=d?Pn(d):window,e){case"focusin":(fl(j)||j.contentEditable==="true")&&(zn=j,ga=d,vr=null);break;case"focusout":vr=ga=zn=null;break;case"mousedown":ma=!0;break;case"contextmenu":case"mouseup":case"dragend":ma=!1,yl(f,n,g);break;case"selectionchange":if(Df)break;case"keydown":case"keyup":yl(f,n,g)}var $;if(cs)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else $n?md(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(gd&&n.locale!=="ko"&&($n||S!=="onCompositionStart"?S==="onCompositionEnd"&&$n&&($=fd()):(Wt=g,as="value"in Wt?Wt.value:Wt.textContent,$n=!0)),j=Fo(d,S),0<j.length&&(S=new cl(S,e,null,n,g),f.push({event:S,listeners:j}),$?S.data=$:($=xd(n),$!==null&&(S.data=$)))),($=Pf?Ef(e,n):Tf(e,n))&&(d=Fo(d,"onBeforeInput"),0<d.length&&(g=new cl("onBeforeInput","beforeinput",null,n,g),f.push({event:g,listeners:d}),g.data=$))}Nd(f,t)})}function Fr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=zr(e,n),a!=null&&r.unshift(Fr(e,a,i)),a=zr(e,t),a!=null&&r.push(Fr(e,a,i))),e=e.return}return r}function jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function wl(e,t,n,r,i){for(var a=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,i?(c=zr(n,a),c!=null&&s.unshift(Fr(n,c,l))):i||(c=zr(n,a),c!=null&&s.push(Fr(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var Gf=/\r\n?/g,Yf=/\u0000|\uFFFD/g;function kl(e){return(typeof e=="string"?e:""+e).replace(Gf,`
`).replace(Yf,"")}function so(e,t,n){if(t=kl(t),kl(e)!==t&&n)throw Error(P(425))}function Lo(){}var xa=null,ha=null;function ya(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ba=typeof setTimeout=="function"?setTimeout:void 0,Vf=typeof clearTimeout=="function"?clearTimeout:void 0,jl=typeof Promise=="function"?Promise:void 0,Qf=typeof queueMicrotask=="function"?queueMicrotask:typeof jl<"u"?function(e){return jl.resolve(null).then(e).catch(Kf)}:ba;function Kf(e){setTimeout(function(){throw e})}function _i(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Er(t)}function Ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Sl(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Jn=Math.random().toString(36).slice(2),mt="__reactFiber$"+Jn,Lr="__reactProps$"+Jn,$t="__reactContainer$"+Jn,va="__reactEvents$"+Jn,Xf="__reactListeners$"+Jn,Jf="__reactHandles$"+Jn;function ln(e){var t=e[mt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[mt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Sl(e);e!==null;){if(n=e[mt])return n;e=Sl(e)}return t}e=n,n=e.parentNode}return null}function Vr(e){return e=e[mt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Pn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function ai(e){return e[Lr]||null}var wa=[],En=-1;function Zt(e){return{current:e}}function se(e){0>En||(e.current=wa[En],wa[En]=null,En--)}function ie(e,t){En++,wa[En]=e.current,e.current=t}var Jt={},Fe=Zt(Jt),Oe=Zt(!1),fn=Jt;function Un(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(e){return e=e.childContextTypes,e!=null}function _o(){se(Oe),se(Fe)}function Cl(e,t,n){if(Fe.current!==Jt)throw Error(P(168));ie(Fe,t),ie(Oe,n)}function Ed(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(P(108,Fp(e)||"Unknown",i));return fe({},n,r)}function Ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,fn=Fe.current,ie(Fe,e),ie(Oe,Oe.current),!0}function $l(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=Ed(e,t,fn),r.__reactInternalMemoizedMergedChildContext=e,se(Oe),se(Fe),ie(Fe,e)):se(Oe),ie(Oe,n)}var wt=null,si=!1,Ri=!1;function Td(e){wt===null?wt=[e]:wt.push(e)}function qf(e){si=!0,Td(e)}function en(){if(!Ri&&wt!==null){Ri=!0;var e=0,t=J;try{var n=wt;for(J=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}wt=null,si=!1}catch(i){throw wt!==null&&(wt=wt.slice(e+1)),nd(ns,en),i}finally{J=t,Ri=!1}}return null}var Tn=[],In=0,Wo=null,Bo=0,Ze=[],et=0,gn=null,kt=1,jt="";function an(e,t){Tn[In++]=Bo,Tn[In++]=Wo,Wo=e,Bo=t}function Id(e,t,n){Ze[et++]=kt,Ze[et++]=jt,Ze[et++]=gn,gn=e;var r=kt;e=jt;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var a=32-dt(t)+i;if(30<a){var s=i-i%5;a=(r&(1<<s)-1).toString(32),r>>=s,i-=s,kt=1<<32-dt(t)+i|n<<i|r,jt=a+e}else kt=1<<a|n<<i|r,jt=e}function us(e){e.return!==null&&(an(e,1),Id(e,1,0))}function ps(e){for(;e===Wo;)Wo=Tn[--In],Tn[In]=null,Bo=Tn[--In],Tn[In]=null;for(;e===gn;)gn=Ze[--et],Ze[et]=null,jt=Ze[--et],Ze[et]=null,kt=Ze[--et],Ze[et]=null}var Qe=null,Ve=null,ce=!1,lt=null;function Md(e,t){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function zl(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=Ht(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Qe=e,Ve=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=gn!==null?{id:kt,overflow:jt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Qe=e,Ve=null,!0):!1;default:return!1}}function ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ja(e){if(ce){var t=Ve;if(t){var n=t;if(!zl(e,t)){if(ka(e))throw Error(P(418));t=Ht(n.nextSibling);var r=Qe;t&&zl(e,t)?Md(r,n):(e.flags=e.flags&-4097|2,ce=!1,Qe=e)}}else{if(ka(e))throw Error(P(418));e.flags=e.flags&-4097|2,ce=!1,Qe=e}}}function Nl(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Qe=e}function lo(e){if(e!==Qe)return!1;if(!ce)return Nl(e),ce=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ya(e.type,e.memoizedProps)),t&&(t=Ve)){if(ka(e))throw Fd(),Error(P(418));for(;t;)Md(e,t),t=Ht(t.nextSibling)}if(Nl(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ve=Ht(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ve=null}}else Ve=Qe?Ht(e.stateNode.nextSibling):null;return!0}function Fd(){for(var e=Ve;e;)e=Ht(e.nextSibling)}function Hn(){Ve=Qe=null,ce=!1}function fs(e){lt===null?lt=[e]:lt.push(e)}var Zf=Pt.ReactCurrentBatchConfig;function cr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var i=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var l=i.refs;s===null?delete l[a]:l[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function co(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Pl(e){var t=e._init;return t(e._payload)}function Ld(e){function t(m,u){if(e){var x=m.deletions;x===null?(m.deletions=[u],m.flags|=16):x.push(u)}}function n(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function r(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function i(m,u){return m=Qt(m,u),m.index=0,m.sibling=null,m}function a(m,u,x){return m.index=x,e?(x=m.alternate,x!==null?(x=x.index,x<u?(m.flags|=2,u):x):(m.flags|=2,u)):(m.flags|=1048576,u)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,u,x,k){return u===null||u.tag!==6?(u=Hi(x,m.mode,k),u.return=m,u):(u=i(u,x),u.return=m,u)}function c(m,u,x,k){var N=x.type;return N===Cn?g(m,u,x.props.children,k,x.key):u!==null&&(u.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ft&&Pl(N)===u.type)?(k=i(u,x.props),k.ref=cr(m,u,x),k.return=m,k):(k=$o(x.type,x.key,x.props,null,m.mode,k),k.ref=cr(m,u,x),k.return=m,k)}function d(m,u,x,k){return u===null||u.tag!==4||u.stateNode.containerInfo!==x.containerInfo||u.stateNode.implementation!==x.implementation?(u=Gi(x,m.mode,k),u.return=m,u):(u=i(u,x.children||[]),u.return=m,u)}function g(m,u,x,k,N){return u===null||u.tag!==7?(u=pn(x,m.mode,k,N),u.return=m,u):(u=i(u,x),u.return=m,u)}function f(m,u,x){if(typeof u=="string"&&u!==""||typeof u=="number")return u=Hi(""+u,m.mode,x),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case qr:return x=$o(u.type,u.key,u.props,null,m.mode,x),x.ref=cr(m,null,u),x.return=m,x;case Sn:return u=Gi(u,m.mode,x),u.return=m,u;case Ft:var k=u._init;return f(m,k(u._payload),x)}if(fr(u)||or(u))return u=pn(u,m.mode,x,null),u.return=m,u;co(m,u)}return null}function p(m,u,x,k){var N=u!==null?u.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return N!==null?null:l(m,u,""+x,k);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case qr:return x.key===N?c(m,u,x,k):null;case Sn:return x.key===N?d(m,u,x,k):null;case Ft:return N=x._init,p(m,u,N(x._payload),k)}if(fr(x)||or(x))return N!==null?null:g(m,u,x,k,null);co(m,x)}return null}function w(m,u,x,k,N){if(typeof k=="string"&&k!==""||typeof k=="number")return m=m.get(x)||null,l(u,m,""+k,N);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case qr:return m=m.get(k.key===null?x:k.key)||null,c(u,m,k,N);case Sn:return m=m.get(k.key===null?x:k.key)||null,d(u,m,k,N);case Ft:var j=k._init;return w(m,u,x,j(k._payload),N)}if(fr(k)||or(k))return m=m.get(x)||null,g(u,m,k,N,null);co(u,k)}return null}function h(m,u,x,k){for(var N=null,j=null,$=u,S=u=0,D=null;$!==null&&S<x.length;S++){$.index>S?(D=$,$=null):D=$.sibling;var B=p(m,$,x[S],k);if(B===null){$===null&&($=D);break}e&&$&&B.alternate===null&&t(m,$),u=a(B,u,S),j===null?N=B:j.sibling=B,j=B,$=D}if(S===x.length)return n(m,$),ce&&an(m,S),N;if($===null){for(;S<x.length;S++)$=f(m,x[S],k),$!==null&&(u=a($,u,S),j===null?N=$:j.sibling=$,j=$);return ce&&an(m,S),N}for($=r(m,$);S<x.length;S++)D=w($,m,S,x[S],k),D!==null&&(e&&D.alternate!==null&&$.delete(D.key===null?S:D.key),u=a(D,u,S),j===null?N=D:j.sibling=D,j=D);return e&&$.forEach(function(ee){return t(m,ee)}),ce&&an(m,S),N}function v(m,u,x,k){var N=or(x);if(typeof N!="function")throw Error(P(150));if(x=N.call(x),x==null)throw Error(P(151));for(var j=N=null,$=u,S=u=0,D=null,B=x.next();$!==null&&!B.done;S++,B=x.next()){$.index>S?(D=$,$=null):D=$.sibling;var ee=p(m,$,B.value,k);if(ee===null){$===null&&($=D);break}e&&$&&ee.alternate===null&&t(m,$),u=a(ee,u,S),j===null?N=ee:j.sibling=ee,j=ee,$=D}if(B.done)return n(m,$),ce&&an(m,S),N;if($===null){for(;!B.done;S++,B=x.next())B=f(m,B.value,k),B!==null&&(u=a(B,u,S),j===null?N=B:j.sibling=B,j=B);return ce&&an(m,S),N}for($=r(m,$);!B.done;S++,B=x.next())B=w($,m,S,B.value,k),B!==null&&(e&&B.alternate!==null&&$.delete(B.key===null?S:B.key),u=a(B,u,S),j===null?N=B:j.sibling=B,j=B);return e&&$.forEach(function(q){return t(m,q)}),ce&&an(m,S),N}function y(m,u,x,k){if(typeof x=="object"&&x!==null&&x.type===Cn&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case qr:e:{for(var N=x.key,j=u;j!==null;){if(j.key===N){if(N=x.type,N===Cn){if(j.tag===7){n(m,j.sibling),u=i(j,x.props.children),u.return=m,m=u;break e}}else if(j.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ft&&Pl(N)===j.type){n(m,j.sibling),u=i(j,x.props),u.ref=cr(m,j,x),u.return=m,m=u;break e}n(m,j);break}else t(m,j);j=j.sibling}x.type===Cn?(u=pn(x.props.children,m.mode,k,x.key),u.return=m,m=u):(k=$o(x.type,x.key,x.props,null,m.mode,k),k.ref=cr(m,u,x),k.return=m,m=k)}return s(m);case Sn:e:{for(j=x.key;u!==null;){if(u.key===j)if(u.tag===4&&u.stateNode.containerInfo===x.containerInfo&&u.stateNode.implementation===x.implementation){n(m,u.sibling),u=i(u,x.children||[]),u.return=m,m=u;break e}else{n(m,u);break}else t(m,u);u=u.sibling}u=Gi(x,m.mode,k),u.return=m,m=u}return s(m);case Ft:return j=x._init,y(m,u,j(x._payload),k)}if(fr(x))return h(m,u,x,k);if(or(x))return v(m,u,x,k);co(m,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,u!==null&&u.tag===6?(n(m,u.sibling),u=i(u,x),u.return=m,m=u):(n(m,u),u=Hi(x,m.mode,k),u.return=m,m=u),s(m)):n(m,u)}return y}var Gn=Ld(!0),_d=Ld(!1),Ao=Zt(null),Do=null,Mn=null,gs=null;function ms(){gs=Mn=Do=null}function xs(e){var t=Ao.current;se(Ao),e._currentValue=t}function Sa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function An(e,t){Do=e,gs=Mn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(De=!0),e.firstContext=null)}function rt(e){var t=e._currentValue;if(gs!==e)if(e={context:e,memoizedValue:t,next:null},Mn===null){if(Do===null)throw Error(P(308));Mn=e,Do.dependencies={lanes:0,firstContext:e}}else Mn=Mn.next=e;return t}var cn=null;function hs(e){cn===null?cn=[e]:cn.push(e)}function Rd(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,hs(t)):(n.next=i.next,i.next=n),t.interleaved=n,zt(e,r)}function zt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Lt=!1;function ys(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function St(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,X&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,zt(e,n)}return i=r.interleaved,i===null?(t.next=t,hs(r)):(t.next=i.next,i.next=t),r.interleaved=t,zt(e,n)}function vo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rs(e,n)}}function El(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=s:a=a.next=s,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oo(e,t,n,r){var i=e.updateQueue;Lt=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?a=d:s.next=d,s=c;var g=e.alternate;g!==null&&(g=g.updateQueue,l=g.lastBaseUpdate,l!==s&&(l===null?g.firstBaseUpdate=d:l.next=d,g.lastBaseUpdate=c))}if(a!==null){var f=i.baseState;s=0,g=d=c=null,l=a;do{var p=l.lane,w=l.eventTime;if((r&p)===p){g!==null&&(g=g.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,v=l;switch(p=t,w=n,v.tag){case 1:if(h=v.payload,typeof h=="function"){f=h.call(w,f,p);break e}f=h;break e;case 3:h.flags=h.flags&-65537|128;case 0:if(h=v.payload,p=typeof h=="function"?h.call(w,f,p):h,p==null)break e;f=fe({},f,p);break e;case 2:Lt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else w={eventTime:w,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},g===null?(d=g=w,c=f):g=g.next=w,s|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(g===null&&(c=f),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=g,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);xn|=s,e.lanes=s,e.memoizedState=f}}function Tl(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(P(191,i));i.call(r)}}}var Qr={},ht=Zt(Qr),_r=Zt(Qr),Rr=Zt(Qr);function dn(e){if(e===Qr)throw Error(P(174));return e}function bs(e,t){switch(ie(Rr,t),ie(_r,e),ie(ht,Qr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:oa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=oa(t,e)}se(ht),ie(ht,t)}function Yn(){se(ht),se(_r),se(Rr)}function Bd(e){dn(Rr.current);var t=dn(ht.current),n=oa(t,e.type);t!==n&&(ie(_r,e),ie(ht,n))}function vs(e){_r.current===e&&(se(ht),se(_r))}var ue=Zt(0);function Uo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Wi=[];function ws(){for(var e=0;e<Wi.length;e++)Wi[e]._workInProgressVersionPrimary=null;Wi.length=0}var wo=Pt.ReactCurrentDispatcher,Bi=Pt.ReactCurrentBatchConfig,mn=0,pe=null,be=null,ke=null,Ho=!1,wr=!1,Wr=0,eg=0;function Pe(){throw Error(P(321))}function ks(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function js(e,t,n,r,i,a){if(mn=a,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?og:ig,e=n(r,i),wr){a=0;do{if(wr=!1,Wr=0,25<=a)throw Error(P(301));a+=1,ke=be=null,t.updateQueue=null,wo.current=ag,e=n(r,i)}while(wr)}if(wo.current=Go,t=be!==null&&be.next!==null,mn=0,ke=be=pe=null,Ho=!1,t)throw Error(P(300));return e}function Ss(){var e=Wr!==0;return Wr=0,e}function gt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ke===null?pe.memoizedState=ke=e:ke=ke.next=e,ke}function ot(){if(be===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=be.next;var t=ke===null?pe.memoizedState:ke.next;if(t!==null)ke=t,be=e;else{if(e===null)throw Error(P(310));be=e,e={memoizedState:be.memoizedState,baseState:be.baseState,baseQueue:be.baseQueue,queue:be.queue,next:null},ke===null?pe.memoizedState=ke=e:ke=ke.next=e}return ke}function Br(e,t){return typeof t=="function"?t(e):t}function Ai(e){var t=ot(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=be,i=r.baseQueue,a=n.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}r.baseQueue=i=a,n.pending=null}if(i!==null){a=i.next,r=r.baseState;var l=s=null,c=null,d=a;do{var g=d.lane;if((mn&g)===g)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var f={lane:g,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=f,s=r):c=c.next=f,pe.lanes|=g,xn|=g}d=d.next}while(d!==null&&d!==a);c===null?s=r:c.next=l,pt(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do a=i.lane,pe.lanes|=a,xn|=a,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Di(e){var t=ot(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);pt(a,t.memoizedState)||(De=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Ad(){}function Dd(e,t){var n=pe,r=ot(),i=t(),a=!pt(r.memoizedState,i);if(a&&(r.memoizedState=i,De=!0),r=r.queue,Cs(Hd.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||ke!==null&&ke.memoizedState.tag&1){if(n.flags|=2048,Ar(9,Ud.bind(null,n,r,i,t),void 0,null),je===null)throw Error(P(349));mn&30||Od(n,t,i)}return i}function Od(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Ud(e,t,n,r){t.value=n,t.getSnapshot=r,Gd(t)&&Yd(e)}function Hd(e,t,n){return n(function(){Gd(t)&&Yd(e)})}function Gd(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function Yd(e){var t=zt(e,1);t!==null&&ut(t,e,1,-1)}function Il(e){var t=gt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Br,lastRenderedState:e},t.queue=e,e=e.dispatch=rg.bind(null,pe,e),[t.memoizedState,e]}function Ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Vd(){return ot().memoizedState}function ko(e,t,n,r){var i=gt();pe.flags|=e,i.memoizedState=Ar(1|t,n,void 0,r===void 0?null:r)}function li(e,t,n,r){var i=ot();r=r===void 0?null:r;var a=void 0;if(be!==null){var s=be.memoizedState;if(a=s.destroy,r!==null&&ks(r,s.deps)){i.memoizedState=Ar(t,n,a,r);return}}pe.flags|=e,i.memoizedState=Ar(1|t,n,a,r)}function Ml(e,t){return ko(8390656,8,e,t)}function Cs(e,t){return li(2048,8,e,t)}function Qd(e,t){return li(4,2,e,t)}function Kd(e,t){return li(4,4,e,t)}function Xd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Jd(e,t,n){return n=n!=null?n.concat([e]):null,li(4,4,Xd.bind(null,t,e),n)}function $s(){}function qd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ks(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Zd(e,t){var n=ot();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ks(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function eu(e,t,n){return mn&21?(pt(n,t)||(n=id(),pe.lanes|=n,xn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n)}function tg(e,t){var n=J;J=n!==0&&4>n?n:4,e(!0);var r=Bi.transition;Bi.transition={};try{e(!1),t()}finally{J=n,Bi.transition=r}}function tu(){return ot().memoizedState}function ng(e,t,n){var r=Vt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},nu(e))ru(t,n);else if(n=Rd(e,t,n,r),n!==null){var i=Re();ut(n,e,r,i),ou(n,t,r)}}function rg(e,t,n){var r=Vt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(nu(e))ru(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,l=a(s,n);if(i.hasEagerState=!0,i.eagerState=l,pt(l,s)){var c=t.interleaved;c===null?(i.next=i,hs(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=Rd(e,t,i,r),n!==null&&(i=Re(),ut(n,e,r,i),ou(n,t,r))}}function nu(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function ru(e,t){wr=Ho=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ou(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,rs(e,n)}}var Go={readContext:rt,useCallback:Pe,useContext:Pe,useEffect:Pe,useImperativeHandle:Pe,useInsertionEffect:Pe,useLayoutEffect:Pe,useMemo:Pe,useReducer:Pe,useRef:Pe,useState:Pe,useDebugValue:Pe,useDeferredValue:Pe,useTransition:Pe,useMutableSource:Pe,useSyncExternalStore:Pe,useId:Pe,unstable_isNewReconciler:!1},og={readContext:rt,useCallback:function(e,t){return gt().memoizedState=[e,t===void 0?null:t],e},useContext:rt,useEffect:Ml,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ko(4194308,4,Xd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return ko(4,2,e,t)},useMemo:function(e,t){var n=gt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=gt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ng.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=gt();return e={current:e},t.memoizedState=e},useState:Il,useDebugValue:$s,useDeferredValue:function(e){return gt().memoizedState=e},useTransition:function(){var e=Il(!1),t=e[0];return e=tg.bind(null,e[1]),gt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,i=gt();if(ce){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),je===null)throw Error(P(349));mn&30||Od(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,Ml(Hd.bind(null,r,a,e),[e]),r.flags|=2048,Ar(9,Ud.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=gt(),t=je.identifierPrefix;if(ce){var n=jt,r=kt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Wr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=eg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},ig={readContext:rt,useCallback:qd,useContext:rt,useEffect:Cs,useImperativeHandle:Jd,useInsertionEffect:Qd,useLayoutEffect:Kd,useMemo:Zd,useReducer:Ai,useRef:Vd,useState:function(){return Ai(Br)},useDebugValue:$s,useDeferredValue:function(e){var t=ot();return eu(t,be.memoizedState,e)},useTransition:function(){var e=Ai(Br)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:Dd,useId:tu,unstable_isNewReconciler:!1},ag={readContext:rt,useCallback:qd,useContext:rt,useEffect:Cs,useImperativeHandle:Jd,useInsertionEffect:Qd,useLayoutEffect:Kd,useMemo:Zd,useReducer:Di,useRef:Vd,useState:function(){return Di(Br)},useDebugValue:$s,useDeferredValue:function(e){var t=ot();return be===null?t.memoizedState=e:eu(t,be.memoizedState,e)},useTransition:function(){var e=Di(Br)[0],t=ot().memoizedState;return[e,t]},useMutableSource:Ad,useSyncExternalStore:Dd,useId:tu,unstable_isNewReconciler:!1};function at(e,t){if(e&&e.defaultProps){t=fe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:fe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ci={isMounted:function(e){return(e=e._reactInternals)?vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),i=Vt(e),a=St(r,i);a.payload=t,n!=null&&(a.callback=n),t=Gt(e,a,i),t!==null&&(ut(t,e,i,r),vo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),i=Vt(e),a=St(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=Gt(e,a,i),t!==null&&(ut(t,e,i,r),vo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=Vt(e),i=St(n,r);i.tag=2,t!=null&&(i.callback=t),t=Gt(e,i,r),t!==null&&(ut(t,e,r,n),vo(t,e,r))}};function Fl(e,t,n,r,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,s):t.prototype&&t.prototype.isPureReactComponent?!Ir(n,r)||!Ir(i,a):!0}function iu(e,t,n){var r=!1,i=Jt,a=t.contextType;return typeof a=="object"&&a!==null?a=rt(a):(i=Ue(t)?fn:Fe.current,r=t.contextTypes,a=(r=r!=null)?Un(e,i):Jt),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ci,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ll(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ci.enqueueReplaceState(t,t.state,null)}function $a(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},ys(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=rt(a):(a=Ue(t)?fn:Fe.current,i.context=Un(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Ca(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ci.enqueueReplaceState(i,i.state,null),Oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Vn(e,t){try{var n="",r=t;do n+=Mp(r),r=r.return;while(r);var i=n}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Oi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function za(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var sg=typeof WeakMap=="function"?WeakMap:Map;function au(e,t,n){n=St(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vo||(Vo=!0,Ra=r),za(e,t)},n}function su(e,t,n){n=St(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){za(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){za(e,t),typeof r!="function"&&(Yt===null?Yt=new Set([this]):Yt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function _l(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new sg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=wg.bind(null,e,t,n),t.then(e,e))}function Rl(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Wl(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=St(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var lg=Pt.ReactCurrentOwner,De=!1;function Le(e,t,n,r){t.child=e===null?_d(t,null,n,r):Gn(t,e.child,n,r)}function Bl(e,t,n,r,i){n=n.render;var a=t.ref;return An(t,i),r=js(e,t,n,r,a,i),n=Ss(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(ce&&n&&us(t),t.flags|=1,Le(e,t,r,i),t.child)}function Al(e,t,n,r,i){if(e===null){var a=n.type;return typeof a=="function"&&!Fs(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,lu(e,t,a,r,i)):(e=$o(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ir,n(s,r)&&e.ref===t.ref)return Nt(e,t,i)}return t.flags|=1,e=Qt(a,r),e.ref=t.ref,e.return=t,t.child=e}function lu(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Ir(a,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(De=!0);else return t.lanes=e.lanes,Nt(e,t,i)}return Na(e,t,n,r,i)}function cu(e,t,n){var r=t.pendingProps,i=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(Ln,Ye),Ye|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(Ln,Ye),Ye|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ie(Ln,Ye),Ye|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ie(Ln,Ye),Ye|=r;return Le(e,t,i,n),t.child}function du(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Na(e,t,n,r,i){var a=Ue(n)?fn:Fe.current;return a=Un(t,a),An(t,i),n=js(e,t,n,r,a,i),r=Ss(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Nt(e,t,i)):(ce&&r&&us(t),t.flags|=1,Le(e,t,n,i),t.child)}function Dl(e,t,n,r,i){if(Ue(n)){var a=!0;Ro(t)}else a=!1;if(An(t,i),t.stateNode===null)jo(e,t),iu(t,n,r),$a(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,d=n.contextType;typeof d=="object"&&d!==null?d=rt(d):(d=Ue(n)?fn:Fe.current,d=Un(t,d));var g=n.getDerivedStateFromProps,f=typeof g=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==d)&&Ll(t,s,r,d),Lt=!1;var p=t.memoizedState;s.state=p,Oo(t,r,s,i),c=t.memoizedState,l!==r||p!==c||Oe.current||Lt?(typeof g=="function"&&(Ca(t,n,g,r),c=t.memoizedState),(l=Lt||Fl(t,n,l,r,p,c,d))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=d,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Wd(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:at(t.type,l),s.props=d,f=t.pendingProps,p=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=rt(c):(c=Ue(n)?fn:Fe.current,c=Un(t,c));var w=n.getDerivedStateFromProps;(g=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||p!==c)&&Ll(t,s,r,c),Lt=!1,p=t.memoizedState,s.state=p,Oo(t,r,s,i);var h=t.memoizedState;l!==f||p!==h||Oe.current||Lt?(typeof w=="function"&&(Ca(t,n,w,r),h=t.memoizedState),(d=Lt||Fl(t,n,d,r,p,h,c)||!1)?(g||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,h,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,h,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),s.props=r,s.state=h,s.context=c,r=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Pa(e,t,n,r,a,i)}function Pa(e,t,n,r,i,a){du(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&$l(t,n,!1),Nt(e,t,a);r=t.stateNode,lg.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Gn(t,e.child,null,a),t.child=Gn(t,null,l,a)):Le(e,t,l,a),t.memoizedState=r.state,i&&$l(t,n,!0),t.child}function uu(e){var t=e.stateNode;t.pendingContext?Cl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cl(e,t.context,!1),bs(e,t.containerInfo)}function Ol(e,t,n,r,i){return Hn(),fs(i),t.flags|=256,Le(e,t,n,r),t.child}var Ea={dehydrated:null,treeContext:null,retryLane:0};function Ta(e){return{baseLanes:e,cachePool:null,transitions:null}}function pu(e,t,n){var r=t.pendingProps,i=ue.current,a=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(ue,i&1),e===null)return ja(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,a?(r=t.mode,a=t.child,s={mode:"hidden",children:s},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=pi(s,r,0,null),e=pn(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ta(n),t.memoizedState=Ea,e):zs(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return cg(e,t,s,r,l,i,n);if(a){a=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Qt(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=Qt(l,a):(a=pn(a,s,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,s=e.child.memoizedState,s=s===null?Ta(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~n,t.memoizedState=Ea,r}return a=e.child,e=a.sibling,r=Qt(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function zs(e,t){return t=pi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function uo(e,t,n,r){return r!==null&&fs(r),Gn(t,e.child,null,n),e=zs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function cg(e,t,n,r,i,a,s){if(n)return t.flags&256?(t.flags&=-257,r=Oi(Error(P(422))),uo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,i=t.mode,r=pi({mode:"visible",children:r.children},i,0,null),a=pn(a,i,s,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&Gn(t,e.child,null,s),t.child.memoizedState=Ta(s),t.memoizedState=Ea,a);if(!(t.mode&1))return uo(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(P(419)),r=Oi(a,r,void 0),uo(e,t,s,r)}if(l=(s&e.childLanes)!==0,De||l){if(r=je,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,zt(e,i),ut(r,e,i,-1))}return Ms(),r=Oi(Error(P(421))),uo(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=kg.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,Ve=Ht(i.nextSibling),Qe=t,ce=!0,lt=null,e!==null&&(Ze[et++]=kt,Ze[et++]=jt,Ze[et++]=gn,kt=e.id,jt=e.overflow,gn=t),t=zs(t,r.children),t.flags|=4096,t)}function Ul(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Sa(e.return,t,n)}function Ui(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function fu(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Le(e,t,r.children,n),r=ue.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ul(e,n,t);else if(e.tag===19)Ul(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ue,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Uo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ui(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Uo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ui(t,!0,n,null,a);break;case"together":Ui(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function jo(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Nt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=Qt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Qt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function dg(e,t,n){switch(t.tag){case 3:uu(t),Hn();break;case 5:Bd(t);break;case 1:Ue(t.type)&&Ro(t);break;case 4:bs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(Ao,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ue,ue.current&1),t.flags|=128,null):n&t.child.childLanes?pu(e,t,n):(ie(ue,ue.current&1),e=Nt(e,t,n),e!==null?e.sibling:null);ie(ue,ue.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(ue,ue.current),r)break;return null;case 22:case 23:return t.lanes=0,cu(e,t,n)}return Nt(e,t,n)}var gu,Ia,mu,xu;gu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ia=function(){};mu=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,dn(ht.current);var a=null;switch(n){case"input":i=ea(e,i),r=ea(e,r),a=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),a=[];break;case"textarea":i=ra(e,i),r=ra(e,r),a=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Lo)}ia(n,r);var s;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Cr.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in r){var c=r[d];if(l=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(a||(a=[]),a.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Cr.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&ae("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}n&&(a=a||[]).push("style",n);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};xu=function(e,t,n,r){n!==r&&(t.flags|=4)};function dr(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ug(e,t,n){var r=t.pendingProps;switch(ps(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ue(t.type)&&_o(),Ee(t),null;case 3:return r=t.stateNode,Yn(),se(Oe),se(Fe),ws(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(lo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,lt!==null&&(Aa(lt),lt=null))),Ia(e,t),Ee(t),null;case 5:vs(t);var i=dn(Rr.current);if(n=t.type,e!==null&&t.stateNode!=null)mu(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ee(t),null}if(e=dn(ht.current),lo(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[mt]=t,r[Lr]=a,e=(t.mode&1)!==0,n){case"dialog":ae("cancel",r),ae("close",r);break;case"iframe":case"object":case"embed":ae("load",r);break;case"video":case"audio":for(i=0;i<mr.length;i++)ae(mr[i],r);break;case"source":ae("error",r);break;case"img":case"image":case"link":ae("error",r),ae("load",r);break;case"details":ae("toggle",r);break;case"input":qs(r,a),ae("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ae("invalid",r);break;case"textarea":el(r,a),ae("invalid",r)}ia(n,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&so(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&so(r.textContent,l,e),i=["children",""+l]):Cr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&ae("scroll",r)}switch(n){case"input":Zr(r),Zs(r,a,!0);break;case"textarea":Zr(r),tl(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Lo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Hc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[mt]=t,e[Lr]=r,gu(e,t,!1,!1),t.stateNode=e;e:{switch(s=aa(n,r),n){case"dialog":ae("cancel",e),ae("close",e),i=r;break;case"iframe":case"object":case"embed":ae("load",e),i=r;break;case"video":case"audio":for(i=0;i<mr.length;i++)ae(mr[i],e);i=r;break;case"source":ae("error",e),i=r;break;case"img":case"image":case"link":ae("error",e),ae("load",e),i=r;break;case"details":ae("toggle",e),i=r;break;case"input":qs(e,r),i=ea(e,r),ae("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),ae("invalid",e);break;case"textarea":el(e,r),i=ra(e,r),ae("invalid",e);break;default:i=r}ia(n,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Vc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Gc(e,c)):a==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&$r(e,c):typeof c=="number"&&$r(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Cr.hasOwnProperty(a)?c!=null&&a==="onScroll"&&ae("scroll",e):c!=null&&Ja(e,a,c,s))}switch(n){case"input":Zr(e),Zs(e,r,!1);break;case"textarea":Zr(e),tl(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Xt(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?_n(e,!!r.multiple,a,!1):r.defaultValue!=null&&_n(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)xu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=dn(Rr.current),dn(ht.current),lo(t)){if(r=t.stateNode,n=t.memoizedProps,r[mt]=t,(a=r.nodeValue!==n)&&(e=Qe,e!==null))switch(e.tag){case 3:so(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&so(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[mt]=t,t.stateNode=r}return Ee(t),null;case 13:if(se(ue),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ce&&Ve!==null&&t.mode&1&&!(t.flags&128))Fd(),Hn(),t.flags|=98560,a=!1;else if(a=lo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[mt]=t}else Hn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),a=!1}else lt!==null&&(Aa(lt),lt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ue.current&1?ve===0&&(ve=3):Ms())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return Yn(),Ia(e,t),e===null&&Mr(t.stateNode.containerInfo),Ee(t),null;case 10:return xs(t.type._context),Ee(t),null;case 17:return Ue(t.type)&&_o(),Ee(t),null;case 19:if(se(ue),a=t.memoizedState,a===null)return Ee(t),null;if(r=(t.flags&128)!==0,s=a.rendering,s===null)if(r)dr(a,!1);else{if(ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Uo(e),s!==null){for(t.flags|=128,dr(a,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ue,ue.current&1|2),t.child}e=e.sibling}a.tail!==null&&xe()>Qn&&(t.flags|=128,r=!0,dr(a,!1),t.lanes=4194304)}else{if(!r)if(e=Uo(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),dr(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!ce)return Ee(t),null}else 2*xe()-a.renderingStartTime>Qn&&n!==1073741824&&(t.flags|=128,r=!0,dr(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(n=a.last,n!==null?n.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=xe(),t.sibling=null,n=ue.current,ie(ue,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return Is(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?Ye&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function pg(e,t){switch(ps(t),t.tag){case 1:return Ue(t.type)&&_o(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yn(),se(Oe),se(Fe),ws(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vs(t),null;case 13:if(se(ue),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Hn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(ue),null;case 4:return Yn(),null;case 10:return xs(t.type._context),null;case 22:case 23:return Is(),null;case 24:return null;default:return null}}var po=!1,Ie=!1,fg=typeof WeakSet=="function"?WeakSet:Set,L=null;function Fn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ge(e,t,r)}else n.current=null}function Ma(e,t,n){try{n()}catch(r){ge(e,t,r)}}var Hl=!1;function gg(e,t){if(xa=Io,e=wd(),ds(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,d=0,g=0,f=e,p=null;t:for(;;){for(var w;f!==n||i!==0&&f.nodeType!==3||(l=s+i),f!==a||r!==0&&f.nodeType!==3||(c=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(w=f.firstChild)!==null;)p=f,f=w;for(;;){if(f===e)break t;if(p===n&&++d===i&&(l=s),p===a&&++g===r&&(c=s),(w=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ha={focusedElem:e,selectionRange:n},Io=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var v=h.memoizedProps,y=h.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?v:at(t.type,v),y);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(k){ge(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return h=Hl,Hl=!1,h}function kr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Ma(t,n,a)}i=i.next}while(i!==r)}}function di(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hu(e){var t=e.alternate;t!==null&&(e.alternate=null,hu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mt],delete t[Lr],delete t[va],delete t[Xf],delete t[Jf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function yu(e){return e.tag===5||e.tag===3||e.tag===4}function Gl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function La(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Lo));else if(r!==4&&(e=e.child,e!==null))for(La(e,t,n),e=e.sibling;e!==null;)La(e,t,n),e=e.sibling}function _a(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(_a(e,t,n),e=e.sibling;e!==null;)_a(e,t,n),e=e.sibling}var Ce=null,st=!1;function Tt(e,t,n){for(n=n.child;n!==null;)bu(e,t,n),n=n.sibling}function bu(e,t,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(ni,n)}catch{}switch(n.tag){case 5:Ie||Fn(n,t);case 6:var r=Ce,i=st;Ce=null,Tt(e,t,n),Ce=r,st=i,Ce!==null&&(st?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(st?(e=Ce,n=n.stateNode,e.nodeType===8?_i(e.parentNode,n):e.nodeType===1&&_i(e,n),Er(e)):_i(Ce,n.stateNode));break;case 4:r=Ce,i=st,Ce=n.stateNode.containerInfo,st=!0,Tt(e,t,n),Ce=r,st=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Ma(n,t,s),i=i.next}while(i!==r)}Tt(e,t,n);break;case 1:if(!Ie&&(Fn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ge(n,t,l)}Tt(e,t,n);break;case 21:Tt(e,t,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Tt(e,t,n),Ie=r):Tt(e,t,n);break;default:Tt(e,t,n)}}function Yl(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new fg),t.forEach(function(r){var i=jg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var a=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Ce=l.stateNode,st=!1;break e;case 3:Ce=l.stateNode.containerInfo,st=!0;break e;case 4:Ce=l.stateNode.containerInfo,st=!0;break e}l=l.return}if(Ce===null)throw Error(P(160));bu(a,s,i),Ce=null,st=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){ge(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)vu(t,e),t=t.sibling}function vu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),ft(e),r&4){try{kr(3,e,e.return),di(3,e)}catch(v){ge(e,e.return,v)}try{kr(5,e,e.return)}catch(v){ge(e,e.return,v)}}break;case 1:it(t,e),ft(e),r&512&&n!==null&&Fn(n,n.return);break;case 5:if(it(t,e),ft(e),r&512&&n!==null&&Fn(n,n.return),e.flags&32){var i=e.stateNode;try{$r(i,"")}catch(v){ge(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=n!==null?n.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Oc(i,a),aa(l,s);var d=aa(l,a);for(s=0;s<c.length;s+=2){var g=c[s],f=c[s+1];g==="style"?Vc(i,f):g==="dangerouslySetInnerHTML"?Gc(i,f):g==="children"?$r(i,f):Ja(i,g,f,d)}switch(l){case"input":ta(i,a);break;case"textarea":Uc(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var w=a.value;w!=null?_n(i,!!a.multiple,w,!1):p!==!!a.multiple&&(a.defaultValue!=null?_n(i,!!a.multiple,a.defaultValue,!0):_n(i,!!a.multiple,a.multiple?[]:"",!1))}i[Lr]=a}catch(v){ge(e,e.return,v)}}break;case 6:if(it(t,e),ft(e),r&4){if(e.stateNode===null)throw Error(P(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(v){ge(e,e.return,v)}}break;case 3:if(it(t,e),ft(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(v){ge(e,e.return,v)}break;case 4:it(t,e),ft(e);break;case 13:it(t,e),ft(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(Es=xe())),r&4&&Yl(e);break;case 22:if(g=n!==null&&n.memoizedState!==null,e.mode&1?(Ie=(d=Ie)||g,it(t,e),Ie=d):it(t,e),ft(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!g&&e.mode&1)for(L=e,g=e.child;g!==null;){for(f=L=g;L!==null;){switch(p=L,w=p.child,p.tag){case 0:case 11:case 14:case 15:kr(4,p,p.return);break;case 1:Fn(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(v){ge(r,n,v)}}break;case 5:Fn(p,p.return);break;case 22:if(p.memoizedState!==null){Ql(f);continue}}w!==null?(w.return=p,L=w):Ql(f)}g=g.sibling}e:for(g=null,f=e;;){if(f.tag===5){if(g===null){g=f;try{i=f.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=f.stateNode,c=f.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Yc("display",s))}catch(v){ge(e,e.return,v)}}}else if(f.tag===6){if(g===null)try{f.stateNode.nodeValue=d?"":f.memoizedProps}catch(v){ge(e,e.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;g===f&&(g=null),f=f.return}g===f&&(g=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:it(t,e),ft(e),r&4&&Yl(e);break;case 21:break;default:it(t,e),ft(e)}}function ft(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(yu(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&($r(i,""),r.flags&=-33);var a=Gl(e);_a(e,a,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Gl(e);La(e,l,s);break;default:throw Error(P(161))}}catch(c){ge(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function mg(e,t,n){L=e,wu(e)}function wu(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,a=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||po;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ie;l=po;var d=Ie;if(po=s,(Ie=c)&&!d)for(L=i;L!==null;)s=L,c=s.child,s.tag===22&&s.memoizedState!==null?Kl(i):c!==null?(c.return=s,L=c):Kl(i);for(;a!==null;)L=a,wu(a),a=a.sibling;L=i,po=l,Ie=d}Vl(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,L=a):Vl(e)}}function Vl(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||di(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:at(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Tl(t,a,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tl(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var g=d.memoizedState;if(g!==null){var f=g.dehydrated;f!==null&&Er(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Ie||t.flags&512&&Fa(t)}catch(p){ge(t,t.return,p)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function Ql(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Kl(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{di(4,t)}catch(c){ge(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){ge(t,i,c)}}var a=t.return;try{Fa(t)}catch(c){ge(t,a,c)}break;case 5:var s=t.return;try{Fa(t)}catch(c){ge(t,s,c)}}}catch(c){ge(t,t.return,c)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var xg=Math.ceil,Yo=Pt.ReactCurrentDispatcher,Ns=Pt.ReactCurrentOwner,nt=Pt.ReactCurrentBatchConfig,X=0,je=null,he=null,$e=0,Ye=0,Ln=Zt(0),ve=0,Dr=null,xn=0,ui=0,Ps=0,jr=null,Ae=null,Es=0,Qn=1/0,vt=null,Vo=!1,Ra=null,Yt=null,fo=!1,Bt=null,Qo=0,Sr=0,Wa=null,So=-1,Co=0;function Re(){return X&6?xe():So!==-1?So:So=xe()}function Vt(e){return e.mode&1?X&2&&$e!==0?$e&-$e:Zf.transition!==null?(Co===0&&(Co=id()),Co):(e=J,e!==0||(e=window.event,e=e===void 0?16:pd(e.type)),e):1}function ut(e,t,n,r){if(50<Sr)throw Sr=0,Wa=null,Error(P(185));Gr(e,n,r),(!(X&2)||e!==je)&&(e===je&&(!(X&2)&&(ui|=n),ve===4&&Rt(e,$e)),He(e,r),n===1&&X===0&&!(t.mode&1)&&(Qn=xe()+500,si&&en()))}function He(e,t){var n=e.callbackNode;qp(e,t);var r=To(e,e===je?$e:0);if(r===0)n!==null&&ol(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ol(n),t===1)e.tag===0?qf(Xl.bind(null,e)):Td(Xl.bind(null,e)),Qf(function(){!(X&6)&&en()}),n=null;else{switch(ad(r)){case 1:n=ns;break;case 4:n=rd;break;case 16:n=Eo;break;case 536870912:n=od;break;default:n=Eo}n=Pu(n,ku.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function ku(e,t){if(So=-1,Co=0,X&6)throw Error(P(327));var n=e.callbackNode;if(Dn()&&e.callbackNode!==n)return null;var r=To(e,e===je?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ko(e,r);else{t=r;var i=X;X|=2;var a=Su();(je!==e||$e!==t)&&(vt=null,Qn=xe()+500,un(e,t));do try{bg();break}catch(l){ju(e,l)}while(!0);ms(),Yo.current=a,X=i,he!==null?t=0:(je=null,$e=0,t=ve)}if(t!==0){if(t===2&&(i=ua(e),i!==0&&(r=i,t=Ba(e,i))),t===1)throw n=Dr,un(e,0),Rt(e,r),He(e,xe()),n;if(t===6)Rt(e,r);else{if(i=e.current.alternate,!(r&30)&&!hg(i)&&(t=Ko(e,r),t===2&&(a=ua(e),a!==0&&(r=a,t=Ba(e,a))),t===1))throw n=Dr,un(e,0),Rt(e,r),He(e,xe()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:sn(e,Ae,vt);break;case 3:if(Rt(e,r),(r&130023424)===r&&(t=Es+500-xe(),10<t)){if(To(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ba(sn.bind(null,e,Ae,vt),t);break}sn(e,Ae,vt);break;case 4:if(Rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-dt(r);a=1<<s,s=t[s],s>i&&(i=s),r&=~a}if(r=i,r=xe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xg(r/1960))-r,10<r){e.timeoutHandle=ba(sn.bind(null,e,Ae,vt),r);break}sn(e,Ae,vt);break;case 5:sn(e,Ae,vt);break;default:throw Error(P(329))}}}return He(e,xe()),e.callbackNode===n?ku.bind(null,e):null}function Ba(e,t){var n=jr;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=Ko(e,t),e!==2&&(t=Ae,Ae=n,t!==null&&Aa(t)),e}function Aa(e){Ae===null?Ae=e:Ae.push.apply(Ae,e)}function hg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!pt(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Rt(e,t){for(t&=~Ps,t&=~ui,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function Xl(e){if(X&6)throw Error(P(327));Dn();var t=To(e,0);if(!(t&1))return He(e,xe()),null;var n=Ko(e,t);if(e.tag!==0&&n===2){var r=ua(e);r!==0&&(t=r,n=Ba(e,r))}if(n===1)throw n=Dr,un(e,0),Rt(e,t),He(e,xe()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,sn(e,Ae,vt),He(e,xe()),null}function Ts(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(Qn=xe()+500,si&&en())}}function hn(e){Bt!==null&&Bt.tag===0&&!(X&6)&&Dn();var t=X;X|=1;var n=nt.transition,r=J;try{if(nt.transition=null,J=1,e)return e()}finally{J=r,nt.transition=n,X=t,!(X&6)&&en()}}function Is(){Ye=Ln.current,se(Ln)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Vf(n)),he!==null)for(n=he.return;n!==null;){var r=n;switch(ps(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&_o();break;case 3:Yn(),se(Oe),se(Fe),ws();break;case 5:vs(r);break;case 4:Yn();break;case 13:se(ue);break;case 19:se(ue);break;case 10:xs(r.type._context);break;case 22:case 23:Is()}n=n.return}if(je=e,he=e=Qt(e.current,null),$e=Ye=t,ve=0,Dr=null,Ps=ui=xn=0,Ae=jr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var s=a.next;a.next=i,r.next=s}n.pending=r}cn=null}return e}function ju(e,t){do{var n=he;try{if(ms(),wo.current=Go,Ho){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ho=!1}if(mn=0,ke=be=pe=null,wr=!1,Wr=0,Ns.current=null,n===null||n.return===null){ve=1,Dr=t,he=null;break}e:{var a=e,s=n.return,l=n,c=t;if(t=$e,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,g=l,f=g.tag;if(!(g.mode&1)&&(f===0||f===11||f===15)){var p=g.alternate;p?(g.updateQueue=p.updateQueue,g.memoizedState=p.memoizedState,g.lanes=p.lanes):(g.updateQueue=null,g.memoizedState=null)}var w=Rl(s);if(w!==null){w.flags&=-257,Wl(w,s,l,a,t),w.mode&1&&_l(a,d,t),t=w,c=d;var h=t.updateQueue;if(h===null){var v=new Set;v.add(c),t.updateQueue=v}else h.add(c);break e}else{if(!(t&1)){_l(a,d,t),Ms();break e}c=Error(P(426))}}else if(ce&&l.mode&1){var y=Rl(s);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Wl(y,s,l,a,t),fs(Vn(c,l));break e}}a=c=Vn(c,l),ve!==4&&(ve=2),jr===null?jr=[a]:jr.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=au(a,c,t);El(a,m);break e;case 1:l=c;var u=a.type,x=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Yt===null||!Yt.has(x)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=su(a,l,t);El(a,k);break e}}a=a.return}while(a!==null)}$u(n)}catch(N){t=N,he===n&&n!==null&&(he=n=n.return);continue}break}while(!0)}function Su(){var e=Yo.current;return Yo.current=Go,e===null?Go:e}function Ms(){(ve===0||ve===3||ve===2)&&(ve=4),je===null||!(xn&268435455)&&!(ui&268435455)||Rt(je,$e)}function Ko(e,t){var n=X;X|=2;var r=Su();(je!==e||$e!==t)&&(vt=null,un(e,t));do try{yg();break}catch(i){ju(e,i)}while(!0);if(ms(),X=n,Yo.current=r,he!==null)throw Error(P(261));return je=null,$e=0,ve}function yg(){for(;he!==null;)Cu(he)}function bg(){for(;he!==null&&!Up();)Cu(he)}function Cu(e){var t=Nu(e.alternate,e,Ye);e.memoizedProps=e.pendingProps,t===null?$u(e):he=t,Ns.current=null}function $u(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pg(n,t),n!==null){n.flags&=32767,he=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ve=6,he=null;return}}else if(n=ug(n,t,Ye),n!==null){he=n;return}if(t=t.sibling,t!==null){he=t;return}he=t=e}while(t!==null);ve===0&&(ve=5)}function sn(e,t,n){var r=J,i=nt.transition;try{nt.transition=null,J=1,vg(e,t,n,r)}finally{nt.transition=i,J=r}return null}function vg(e,t,n,r){do Dn();while(Bt!==null);if(X&6)throw Error(P(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Zp(e,a),e===je&&(he=je=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||fo||(fo=!0,Pu(Eo,function(){return Dn(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=nt.transition,nt.transition=null;var s=J;J=1;var l=X;X|=4,Ns.current=null,gg(e,n),vu(n,e),Af(ha),Io=!!xa,ha=xa=null,e.current=n,mg(n),Hp(),X=l,J=s,nt.transition=a}else e.current=n;if(fo&&(fo=!1,Bt=e,Qo=i),a=e.pendingLanes,a===0&&(Yt=null),Vp(n.stateNode),He(e,xe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Vo)throw Vo=!1,e=Ra,Ra=null,e;return Qo&1&&e.tag!==0&&Dn(),a=e.pendingLanes,a&1?e===Wa?Sr++:(Sr=0,Wa=e):Sr=0,en(),null}function Dn(){if(Bt!==null){var e=ad(Qo),t=nt.transition,n=J;try{if(nt.transition=null,J=16>e?16:e,Bt===null)var r=!1;else{if(e=Bt,Bt=null,Qo=0,X&6)throw Error(P(331));var i=X;for(X|=4,L=e.current;L!==null;){var a=L,s=a.child;if(L.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(L=d;L!==null;){var g=L;switch(g.tag){case 0:case 11:case 15:kr(8,g,a)}var f=g.child;if(f!==null)f.return=g,L=f;else for(;L!==null;){g=L;var p=g.sibling,w=g.return;if(hu(g),g===d){L=null;break}if(p!==null){p.return=w,L=p;break}L=w}}}var h=a.alternate;if(h!==null){var v=h.child;if(v!==null){h.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}L=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,L=s;else e:for(;L!==null;){if(a=L,a.flags&2048)switch(a.tag){case 0:case 11:case 15:kr(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,L=m;break e}L=a.return}}var u=e.current;for(L=u;L!==null;){s=L;var x=s.child;if(s.subtreeFlags&2064&&x!==null)x.return=s,L=x;else e:for(s=u;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:di(9,l)}}catch(N){ge(l,l.return,N)}if(l===s){L=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,L=k;break e}L=l.return}}if(X=i,en(),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(ni,e)}catch{}r=!0}return r}finally{J=n,nt.transition=t}}return!1}function Jl(e,t,n){t=Vn(n,t),t=au(e,t,1),e=Gt(e,t,1),t=Re(),e!==null&&(Gr(e,1,t),He(e,t))}function ge(e,t,n){if(e.tag===3)Jl(e,e,n);else for(;t!==null;){if(t.tag===3){Jl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Yt===null||!Yt.has(r))){e=Vn(n,e),e=su(t,e,1),t=Gt(t,e,1),e=Re(),t!==null&&(Gr(t,1,e),He(t,e));break}}t=t.return}}function wg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,je===e&&($e&n)===n&&(ve===4||ve===3&&($e&130023424)===$e&&500>xe()-Es?un(e,0):Ps|=n),He(e,t)}function zu(e,t){t===0&&(e.mode&1?(t=no,no<<=1,!(no&130023424)&&(no=4194304)):t=1);var n=Re();e=zt(e,t),e!==null&&(Gr(e,t,n),He(e,n))}function kg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),zu(e,n)}function jg(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),zu(e,n)}var Nu;Nu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Oe.current)De=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return De=!1,dg(e,t,n);De=!!(e.flags&131072)}else De=!1,ce&&t.flags&1048576&&Id(t,Bo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;jo(e,t),e=t.pendingProps;var i=Un(t,Fe.current);An(t,n),i=js(null,t,r,e,i,n);var a=Ss();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ue(r)?(a=!0,Ro(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ys(t),i.updater=ci,t.stateNode=i,i._reactInternals=t,$a(t,r,e,n),t=Pa(null,t,r,!0,a,n)):(t.tag=0,ce&&a&&us(t),Le(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(jo(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=Cg(r),e=at(r,e),i){case 0:t=Na(null,t,r,e,n);break e;case 1:t=Dl(null,t,r,e,n);break e;case 11:t=Bl(null,t,r,e,n);break e;case 14:t=Al(null,t,r,at(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Na(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Dl(e,t,r,i,n);case 3:e:{if(uu(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,i=a.element,Wd(e,t),Oo(t,r,null,n);var s=t.memoizedState;if(r=s.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Vn(Error(P(423)),t),t=Ol(e,t,r,n,i);break e}else if(r!==i){i=Vn(Error(P(424)),t),t=Ol(e,t,r,n,i);break e}else for(Ve=Ht(t.stateNode.containerInfo.firstChild),Qe=t,ce=!0,lt=null,n=_d(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Hn(),r===i){t=Nt(e,t,n);break e}Le(e,t,r,n)}t=t.child}return t;case 5:return Bd(t),e===null&&ja(t),r=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,ya(r,i)?s=null:a!==null&&ya(r,a)&&(t.flags|=32),du(e,t),Le(e,t,s,n),t.child;case 6:return e===null&&ja(t),null;case 13:return pu(e,t,n);case 4:return bs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gn(t,null,r,n):Le(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),Bl(e,t,r,i,n);case 7:return Le(e,t,t.pendingProps,n),t.child;case 8:return Le(e,t,t.pendingProps.children,n),t.child;case 12:return Le(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,ie(Ao,r._currentValue),r._currentValue=s,a!==null)if(pt(a.value,s)){if(a.children===i.children&&!Oe.current){t=Nt(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(a.tag===1){c=St(-1,n&-n),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var g=d.pending;g===null?c.next=c:(c.next=g.next,g.next=c),d.pending=c}}a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Sa(a.return,n,t),l.lanes|=n;break}c=c.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(P(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Sa(s,n,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}Le(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,An(t,n),i=rt(i),r=r(i),t.flags|=1,Le(e,t,r,n),t.child;case 14:return r=t.type,i=at(r,t.pendingProps),i=at(r.type,i),Al(e,t,r,i,n);case 15:return lu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:at(r,i),jo(e,t),t.tag=1,Ue(r)?(e=!0,Ro(t)):e=!1,An(t,n),iu(t,r,i),$a(t,r,i,n),Pa(null,t,r,!0,e,n);case 19:return fu(e,t,n);case 22:return cu(e,t,n)}throw Error(P(156,t.tag))};function Pu(e,t){return nd(e,t)}function Sg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(e,t,n,r){return new Sg(e,t,n,r)}function Fs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Cg(e){if(typeof e=="function")return Fs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Za)return 11;if(e===es)return 14}return 2}function Qt(e,t){var n=e.alternate;return n===null?(n=tt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $o(e,t,n,r,i,a){var s=2;if(r=e,typeof e=="function")Fs(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Cn:return pn(n.children,i,a,t);case qa:s=8,i|=8;break;case Xi:return e=tt(12,n,t,i|2),e.elementType=Xi,e.lanes=a,e;case Ji:return e=tt(13,n,t,i),e.elementType=Ji,e.lanes=a,e;case qi:return e=tt(19,n,t,i),e.elementType=qi,e.lanes=a,e;case Bc:return pi(n,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rc:s=10;break e;case Wc:s=9;break e;case Za:s=11;break e;case es:s=14;break e;case Ft:s=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=tt(s,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function pn(e,t,n,r){return e=tt(7,e,r,t),e.lanes=n,e}function pi(e,t,n,r){return e=tt(22,e,r,t),e.elementType=Bc,e.lanes=n,e.stateNode={isHidden:!1},e}function Hi(e,t,n){return e=tt(6,e,null,t),e.lanes=n,e}function Gi(e,t,n){return t=tt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function $g(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ci(0),this.expirationTimes=Ci(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ci(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ls(e,t,n,r,i,a,s,l,c){return e=new $g(e,t,n,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=tt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ys(a),e}function zg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Sn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Eu(e){if(!e)return Jt;e=e._reactInternals;e:{if(vn(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ue(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(Ue(n))return Ed(e,n,t)}return t}function Tu(e,t,n,r,i,a,s,l,c){return e=Ls(n,r,!0,e,i,a,s,l,c),e.context=Eu(null),n=e.current,r=Re(),i=Vt(n),a=St(r,i),a.callback=t??null,Gt(n,a,i),e.current.lanes=i,Gr(e,i,r),He(e,r),e}function fi(e,t,n,r){var i=t.current,a=Re(),s=Vt(i);return n=Eu(n),t.context===null?t.context=n:t.pendingContext=n,t=St(a,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(i,t,s),e!==null&&(ut(e,i,s,a),vo(e,i,s)),s}function Xo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ql(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _s(e,t){ql(e,t),(e=e.alternate)&&ql(e,t)}function Ng(){return null}var Iu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rs(e){this._internalRoot=e}gi.prototype.render=Rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));fi(e,t,null,null)};gi.prototype.unmount=Rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){fi(null,e,null,null)}),t[$t]=null}};function gi(e){this._internalRoot=e}gi.prototype.unstable_scheduleHydration=function(e){if(e){var t=cd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<_t.length&&t!==0&&t<_t[n].priority;n++);_t.splice(n,0,e),n===0&&ud(e)}};function Ws(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function mi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Zl(){}function Pg(e,t,n,r,i){if(i){if(typeof r=="function"){var a=r;r=function(){var d=Xo(s);a.call(d)}}var s=Tu(t,r,e,0,null,!1,!1,"",Zl);return e._reactRootContainer=s,e[$t]=s.current,Mr(e.nodeType===8?e.parentNode:e),hn(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var d=Xo(c);l.call(d)}}var c=Ls(e,0,!1,null,null,!1,!1,"",Zl);return e._reactRootContainer=c,e[$t]=c.current,Mr(e.nodeType===8?e.parentNode:e),hn(function(){fi(t,c,n,r)}),c}function xi(e,t,n,r,i){var a=n._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var l=i;i=function(){var c=Xo(s);l.call(c)}}fi(t,s,e,i)}else s=Pg(n,t,e,i,r);return Xo(s)}sd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=gr(t.pendingLanes);n!==0&&(rs(t,n|1),He(t,xe()),!(X&6)&&(Qn=xe()+500,en()))}break;case 13:hn(function(){var r=zt(e,1);if(r!==null){var i=Re();ut(r,e,1,i)}}),_s(e,1)}};os=function(e){if(e.tag===13){var t=zt(e,134217728);if(t!==null){var n=Re();ut(t,e,134217728,n)}_s(e,134217728)}};ld=function(e){if(e.tag===13){var t=Vt(e),n=zt(e,t);if(n!==null){var r=Re();ut(n,e,t,r)}_s(e,t)}};cd=function(){return J};dd=function(e,t){var n=J;try{return J=e,t()}finally{J=n}};la=function(e,t,n){switch(t){case"input":if(ta(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ai(r);if(!i)throw Error(P(90));Dc(r),ta(r,i)}}}break;case"textarea":Uc(e,n);break;case"select":t=n.value,t!=null&&_n(e,!!n.multiple,t,!1)}};Xc=Ts;Jc=hn;var Eg={usingClientEntryPoint:!1,Events:[Vr,Pn,ai,Qc,Kc,Ts]},ur={findFiberByHostInstance:ln,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tg={bundleType:ur.bundleType,version:ur.version,rendererPackageName:ur.rendererPackageName,rendererConfig:ur.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ed(e),e===null?null:e.stateNode},findFiberByHostInstance:ur.findFiberByHostInstance||Ng,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!go.isDisabled&&go.supportsFiber)try{ni=go.inject(Tg),xt=go}catch{}}Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Eg;Xe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ws(t))throw Error(P(200));return zg(e,t,null,n)};Xe.createRoot=function(e,t){if(!Ws(e))throw Error(P(299));var n=!1,r="",i=Iu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ls(e,1,!1,null,null,n,!1,r,i),e[$t]=t.current,Mr(e.nodeType===8?e.parentNode:e),new Rs(t)};Xe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=ed(t),e=e===null?null:e.stateNode,e};Xe.flushSync=function(e){return hn(e)};Xe.hydrate=function(e,t,n){if(!mi(t))throw Error(P(200));return xi(null,e,t,!0,n)};Xe.hydrateRoot=function(e,t,n){if(!Ws(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,i=!1,a="",s=Iu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Tu(t,null,e,1,n??null,i,!1,a,s),e[$t]=t.current,Mr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new gi(t)};Xe.render=function(e,t,n){if(!mi(t))throw Error(P(200));return xi(null,e,t,!1,n)};Xe.unmountComponentAtNode=function(e){if(!mi(e))throw Error(P(40));return e._reactRootContainer?(hn(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};Xe.unstable_batchedUpdates=Ts;Xe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!mi(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return xi(e,t,n,!1,r)};Xe.version="18.3.1-next-f1338f8080-20240426";function Mu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mu)}catch(e){console.error(e)}}Mu(),Mc.exports=Xe;var Ig=Mc.exports,ec=Ig;Qi.createRoot=ec.createRoot,Qi.hydrateRoot=ec.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Or(){return Or=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Or.apply(this,arguments)}var At;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(At||(At={}));const tc="popstate";function Mg(e){e===void 0&&(e={});function t(r,i){let{pathname:a,search:s,hash:l}=r.location;return Da("",{pathname:a,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Jo(i)}return Lg(t,n,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Bs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Fg(){return Math.random().toString(36).substr(2,8)}function nc(e,t){return{usr:e.state,key:e.key,idx:t}}function Da(e,t,n,r){return n===void 0&&(n=null),Or({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?qn(t):t,{state:n,key:t&&t.key||r||Fg()})}function Jo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function qn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Lg(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,s=i.history,l=At.Pop,c=null,d=g();d==null&&(d=0,s.replaceState(Or({},s.state,{idx:d}),""));function g(){return(s.state||{idx:null}).idx}function f(){l=At.Pop;let y=g(),m=y==null?null:y-d;d=y,c&&c({action:l,location:v.location,delta:m})}function p(y,m){l=At.Push;let u=Da(v.location,y,m);d=g()+1;let x=nc(u,d),k=v.createHref(u);try{s.pushState(x,"",k)}catch(N){if(N instanceof DOMException&&N.name==="DataCloneError")throw N;i.location.assign(k)}a&&c&&c({action:l,location:v.location,delta:1})}function w(y,m){l=At.Replace;let u=Da(v.location,y,m);d=g();let x=nc(u,d),k=v.createHref(u);s.replaceState(x,"",k),a&&c&&c({action:l,location:v.location,delta:0})}function h(y){let m=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof y=="string"?y:Jo(y);return u=u.replace(/ $/,"%20"),ye(m,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,m)}let v={get action(){return l},get location(){return e(i,s)},listen(y){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(tc,f),c=y,()=>{i.removeEventListener(tc,f),c=null}},createHref(y){return t(i,y)},createURL:h,encodeLocation(y){let m=h(y);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:w,go(y){return s.go(y)}};return v}var rc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(rc||(rc={}));function _g(e,t,n){return n===void 0&&(n="/"),Rg(e,t,n)}function Rg(e,t,n,r){let i=typeof t=="string"?qn(t):t,a=As(i.pathname||"/",n);if(a==null)return null;let s=Fu(e);Wg(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=Xg(a);l=Vg(s[c],d)}return l}function Fu(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(a,s,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};c.relativePath.startsWith("/")&&(ye(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Kt([r,c.relativePath]),g=n.concat(c);a.children&&a.children.length>0&&(ye(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),Fu(a.children,t,g,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Gg(d,a.index),routesMeta:g})};return e.forEach((a,s)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,s);else for(let c of Lu(a.path))i(a,s,c)}),t}function Lu(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return i?[a,""]:[a];let s=Lu(r.join("/")),l=[];return l.push(...s.map(c=>c===""?a:[a,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Wg(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Yg(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Bg=/^:[\w-]+$/,Ag=3,Dg=2,Og=1,Ug=10,Hg=-2,oc=e=>e==="*";function Gg(e,t){let n=e.split("/"),r=n.length;return n.some(oc)&&(r+=Hg),t&&(r+=Dg),n.filter(i=>!oc(i)).reduce((i,a)=>i+(Bg.test(a)?Ag:a===""?Og:Ug),r)}function Yg(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function Vg(e,t,n){let{routesMeta:r}=e,i={},a="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,g=a==="/"?t:t.slice(a.length)||"/",f=Qg({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},g),p=c.route;if(!f)return null;Object.assign(i,f.params),s.push({params:i,pathname:Kt([a,f.pathname]),pathnameBase:t0(Kt([a,f.pathnameBase])),route:p}),f.pathnameBase!=="/"&&(a=Kt([a,f.pathnameBase]))}return s}function Qg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Kg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((d,g,f)=>{let{paramName:p,isOptional:w}=g;if(p==="*"){let v=l[f]||"";s=a.slice(0,a.length-v.length).replace(/(.)\/+$/,"$1")}const h=l[f];return w&&!h?d[p]=void 0:d[p]=(h||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:s,pattern:e}}function Kg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Bs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function Xg(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Bs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function As(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const Jg=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qg=e=>Jg.test(e);function Zg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?qn(e):e,a;if(n)if(qg(n))a=n;else{if(n.includes("//")){let s=n;n=n.replace(/\/\/+/g,"/"),Bs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+n))}n.startsWith("/")?a=ic(n.substring(1),"/"):a=ic(n,t)}else a=t;return{pathname:a,search:n0(r),hash:r0(i)}}function ic(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yi(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function e0(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function _u(e,t){let n=e0(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Ru(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=qn(e):(i=Or({},e),ye(!i.pathname||!i.pathname.includes("?"),Yi("?","pathname","search",i)),ye(!i.pathname||!i.pathname.includes("#"),Yi("#","pathname","hash",i)),ye(!i.search||!i.search.includes("#"),Yi("#","search","hash",i)));let a=e===""||i.pathname==="",s=a?"/":i.pathname,l;if(s==null)l=n;else{let f=t.length-1;if(!r&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),f-=1;i.pathname=p.join("/")}l=f>=0?t[f]:"/"}let c=Zg(i,l),d=s&&s!=="/"&&s.endsWith("/"),g=(a||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||g)&&(c.pathname+="/"),c}const Kt=e=>e.join("/").replace(/\/\/+/g,"/"),t0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),n0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,r0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function o0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Wu=["post","put","patch","delete"];new Set(Wu);const i0=["get",...Wu];new Set(i0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ur(){return Ur=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ur.apply(this,arguments)}const Ds=b.createContext(null),a0=b.createContext(null),wn=b.createContext(null),hi=b.createContext(null),tn=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Bu=b.createContext(null);function s0(e,t){let{relative:n}=t===void 0?{}:t;Kr()||ye(!1);let{basename:r,navigator:i}=b.useContext(wn),{hash:a,pathname:s,search:l}=Du(e,{relative:n}),c=s;return r!=="/"&&(c=s==="/"?r:Kt([r,s])),i.createHref({pathname:c,search:l,hash:a})}function Kr(){return b.useContext(hi)!=null}function kn(){return Kr()||ye(!1),b.useContext(hi).location}function Au(e){b.useContext(wn).static||b.useLayoutEffect(e)}function yt(){let{isDataRoute:e}=b.useContext(tn);return e?w0():l0()}function l0(){Kr()||ye(!1);let e=b.useContext(Ds),{basename:t,future:n,navigator:r}=b.useContext(wn),{matches:i}=b.useContext(tn),{pathname:a}=kn(),s=JSON.stringify(_u(i,n.v7_relativeSplatPath)),l=b.useRef(!1);return Au(()=>{l.current=!0}),b.useCallback(function(d,g){if(g===void 0&&(g={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let f=Ru(d,JSON.parse(s),a,g.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:Kt([t,f.pathname])),(g.replace?r.replace:r.push)(f,g.state,g)},[t,r,s,a,e])}function c0(){let{matches:e}=b.useContext(tn),t=e[e.length-1];return t?t.params:{}}function Du(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=b.useContext(wn),{matches:i}=b.useContext(tn),{pathname:a}=kn(),s=JSON.stringify(_u(i,r.v7_relativeSplatPath));return b.useMemo(()=>Ru(e,JSON.parse(s),a,n==="path"),[e,s,a,n])}function d0(e,t){return u0(e,t)}function u0(e,t,n,r){Kr()||ye(!1);let{navigator:i}=b.useContext(wn),{matches:a}=b.useContext(tn),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=kn(),g;if(t){var f;let y=typeof t=="string"?qn(t):t;c==="/"||(f=y.pathname)!=null&&f.startsWith(c)||ye(!1),g=y}else g=d;let p=g.pathname||"/",w=p;if(c!=="/"){let y=c.replace(/^\//,"").split("/");w="/"+p.replace(/^\//,"").split("/").slice(y.length).join("/")}let h=_g(e,{pathname:w}),v=x0(h&&h.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Kt([c,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:Kt([c,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),a,n,r);return t&&v?b.createElement(hi.Provider,{value:{location:Ur({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:At.Pop}},v):v}function p0(){let e=v0(),t=o0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),n?b.createElement("pre",{style:i},n):null,null)}const f0=b.createElement(p0,null);class g0 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?b.createElement(tn.Provider,{value:this.props.routeContext},b.createElement(Bu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function m0(e){let{routeContext:t,match:n,children:r}=e,i=b.useContext(Ds);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),b.createElement(tn.Provider,{value:t},r)}function x0(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if(!n)return null;if(n.errors)e=n.matches;else if((a=r)!=null&&a.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let g=s.findIndex(f=>f.route.id&&(l==null?void 0:l[f.route.id])!==void 0);g>=0||ye(!1),s=s.slice(0,Math.min(s.length,g+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let g=0;g<s.length;g++){let f=s[g];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(d=g),f.route.id){let{loaderData:p,errors:w}=n,h=f.route.loader&&p[f.route.id]===void 0&&(!w||w[f.route.id]===void 0);if(f.route.lazy||h){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((g,f,p)=>{let w,h=!1,v=null,y=null;n&&(w=l&&f.route.id?l[f.route.id]:void 0,v=f.route.errorElement||f0,c&&(d<0&&p===0?(k0("route-fallback"),h=!0,y=null):d===p&&(h=!0,y=f.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,p+1)),u=()=>{let x;return w?x=v:h?x=y:f.route.Component?x=b.createElement(f.route.Component,null):f.route.element?x=f.route.element:x=g,b.createElement(m0,{match:f,routeContext:{outlet:g,matches:m,isDataRoute:n!=null},children:x})};return n&&(f.route.ErrorBoundary||f.route.errorElement||p===0)?b.createElement(g0,{location:n.location,revalidation:n.revalidation,component:v,error:w,children:u(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):u()},null)}var Ou=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ou||{}),Uu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Uu||{});function h0(e){let t=b.useContext(Ds);return t||ye(!1),t}function y0(e){let t=b.useContext(a0);return t||ye(!1),t}function b0(e){let t=b.useContext(tn);return t||ye(!1),t}function Hu(e){let t=b0(),n=t.matches[t.matches.length-1];return n.route.id||ye(!1),n.route.id}function v0(){var e;let t=b.useContext(Bu),n=y0(),r=Hu();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function w0(){let{router:e}=h0(Ou.UseNavigateStable),t=Hu(Uu.UseNavigateStable),n=b.useRef(!1);return Au(()=>{n.current=!0}),b.useCallback(function(i,a){a===void 0&&(a={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Ur({fromRouteId:t},a)))},[e,t])}const ac={};function k0(e,t,n){ac[e]||(ac[e]=!0)}function j0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Te(e){ye(!1)}function S0(e){let{basename:t="/",children:n=null,location:r,navigationType:i=At.Pop,navigator:a,static:s=!1,future:l}=e;Kr()&&ye(!1);let c=t.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:c,navigator:a,static:s,future:Ur({v7_relativeSplatPath:!1},l)}),[c,l,a,s]);typeof r=="string"&&(r=qn(r));let{pathname:g="/",search:f="",hash:p="",state:w=null,key:h="default"}=r,v=b.useMemo(()=>{let y=As(g,c);return y==null?null:{location:{pathname:y,search:f,hash:p,state:w,key:h},navigationType:i}},[c,g,f,p,w,h,i]);return v==null?null:b.createElement(wn.Provider,{value:d},b.createElement(hi.Provider,{children:n,value:v}))}function C0(e){let{children:t,location:n}=e;return d0(Oa(t),n)}new Promise(()=>{});function Oa(e,t){t===void 0&&(t=[]);let n=[];return b.Children.forEach(e,(r,i)=>{if(!b.isValidElement(r))return;let a=[...t,i];if(r.type===b.Fragment){n.push.apply(n,Oa(r.props.children,a));return}r.type!==Te&&ye(!1),!r.props.index||!r.props.children||ye(!1);let s={id:r.props.id||a.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=Oa(r.props.children,a)),n.push(s)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ua(){return Ua=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ua.apply(this,arguments)}function $0(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function z0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function N0(e,t){return e.button===0&&(!t||t==="_self")&&!z0(e)}function Ha(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(i=>[n,i]):[[n,r]])},[]))}function P0(e,t){let n=Ha(e);return t&&t.forEach((r,i)=>{n.has(i)||t.getAll(i).forEach(a=>{n.append(i,a)})}),n}const E0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],T0="6";try{window.__reactRouterVersion=T0}catch{}const I0="startTransition",sc=vp[I0];function M0(e){let{basename:t,children:n,future:r,window:i}=e,a=b.useRef();a.current==null&&(a.current=Mg({window:i,v5Compat:!0}));let s=a.current,[l,c]=b.useState({action:s.action,location:s.location}),{v7_startTransition:d}=r||{},g=b.useCallback(f=>{d&&sc?sc(()=>c(f)):c(f)},[c,d]);return b.useLayoutEffect(()=>s.listen(g),[s,g]),b.useEffect(()=>j0(r),[r]),b.createElement(S0,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}const F0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",L0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Me=b.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:a,replace:s,state:l,target:c,to:d,preventScrollReset:g,viewTransition:f}=t,p=$0(t,E0),{basename:w}=b.useContext(wn),h,v=!1;if(typeof d=="string"&&L0.test(d)&&(h=d,F0))try{let x=new URL(window.location.href),k=d.startsWith("//")?new URL(x.protocol+d):new URL(d),N=As(k.pathname,w);k.origin===x.origin&&N!=null?d=N+k.search+k.hash:v=!0}catch{}let y=s0(d,{relative:i}),m=_0(d,{replace:s,state:l,target:c,preventScrollReset:g,relative:i,viewTransition:f});function u(x){r&&r(x),x.defaultPrevented||m(x)}return b.createElement("a",Ua({},p,{href:h||y,onClick:v||a?r:u,ref:n,target:c}))});var lc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(lc||(lc={}));var cc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cc||(cc={}));function _0(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:s,viewTransition:l}=t===void 0?{}:t,c=yt(),d=kn(),g=Du(e,{relative:s});return b.useCallback(f=>{if(N0(f,n)){f.preventDefault();let p=r!==void 0?r:Jo(d)===Jo(g);c(e,{replace:p,state:i,preventScrollReset:a,relative:s,viewTransition:l})}},[d,c,g,r,i,n,e,a,s,l])}function R0(e){let t=b.useRef(Ha(e)),n=b.useRef(!1),r=kn(),i=b.useMemo(()=>P0(r.search,n.current?null:t.current),[r.search]),a=yt(),s=b.useCallback((l,c)=>{const d=Ha(typeof l=="function"?l(i):l);n.current=!0,a("?"+d,c)},[a,i]);return[i,s]}const yn="http://localhost:5050",Os=()=>{const e=localStorage.getItem("arke_token");return{"Content-Type":"application/json","ngrok-skip-browser-warning":"true","Cache-Control":"no-cache",...e?{Authorization:`Bearer ${e}`}:{}}},W0=e=>{const t=e.includes("?")?"&":"?";return`${e}${t}_=${Date.now()}`},Us=async e=>{const t=await e.text(),n=e.headers.get("content-type")||"";let r=null;if(t)if(n.includes("application/json"))try{r=JSON.parse(t)}catch{r={success:!1,status:!1,message:"Backend returned invalid JSON.",raw:t}}else r={success:!1,status:!1,message:t};return e.ok?r||{success:!1,status:!1,message:"Backend returned an empty response."}:{...r&&typeof r=="object"?r:{},success:!1,status:!1,message:(r==null?void 0:r.message)||`Request failed (${e.status})`,httpStatus:e.status}},Ge=async e=>{try{const t=await fetch(`${yn}${W0(e)}`,{headers:Os(),cache:"no-store"});return Us(t)}catch{return{success:!1,status:!1,message:`Cannot connect to backend at ${yn}.`}}},bt=async(e,t)=>{try{const n=await fetch(`${yn}${e}`,{method:"POST",headers:Os(),body:JSON.stringify(t)});return Us(n)}catch{return{success:!1,status:!1,message:`Cannot connect to backend at ${yn}.`}}},dc=async e=>{try{const t=await fetch(`${yn}${e}`,{method:"DELETE",headers:Os()});return Us(t)}catch{return{success:!1,status:!1,message:`Cannot connect to backend at ${yn}.`}}},oe={getBanners:()=>Ge("/api/banner"),getCategories:()=>Ge("/api/get-all-Category"),getTypes:()=>Promise.resolve({data:[],types:[]}),getLatestProducts:()=>Ge("/api/latest-products"),getBestSellers:()=>Ge("/api/best-by-us"),getBlogs:()=>Ge("/api/blogs"),getBlogById:e=>Ge(`/api/blogs/${e}`),getAllProducts:()=>Ge("/api/get-all-product"),getProductById:e=>Ge(`/api/get-product/${e}`),getRelated:()=>Promise.resolve({data:[],products:[]}),getCart:()=>Ge("/api/cart"),addToCart:(e,t=1)=>bt("/api/cart",{productId:e,quantity:t}),removeFromCart:e=>dc(`/api/cart/${e}`),getWishlist:()=>Ge("/api/get-wishlist"),addToWishlist:e=>bt("/api/add-to-wishlist",{productId:e}),removeWishlist:e=>bt("/api/add-to-wishlist",{productId:e}),login:(e,t)=>bt("/api/login",{email:e,password:t}),register:e=>bt("/api/add-user",e),placeOrder:e=>bt("/api/place-order",e),getAnnouncements:()=>Ge("/api/announcements"),createAnnouncement:e=>bt("/api/announcements",e),updateAnnouncement:(e,t)=>bt(`/api/announcements/${e}`,t),deleteAnnouncement:e=>dc(`/api/announcements/${e}`),reorderAnnouncements:e=>bt("/api/announcements/reorder",e),getGiftForHer:()=>Ge("/api/gifts/gift-for-her"),getGiftForHim:()=>Ge("/api/gifts/gift-for-him")},ze=e=>{if(!e)return null;if(Array.isArray(e)){for(const n of e){if(n==null||n==="")continue;const r=ze(n);if(r)return r}return null}if(typeof e=="object"){const n=["url","src","path","image","categoryImage","thumbnail","imageUrl","img","secure_url","location","key"];for(const r of n)if(e[r])return ze(e[r]);return null}const t=String(e).trim();return!t||t==="null"||t==="undefined"?null:t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")?t:`${yn}/${t.replace(/^\/+/,"")}`},_e=(e,...t)=>{if(!e)return[];for(const n of[...t,"data","products","result","categories","category","Category","blogs","banners","items","list"])if(Array.isArray(e[n])&&e[n].length>0)return e[n];return Array.isArray(e)?e:[]},B0=e=>e?typeof e=="string"?e:String(e._id||e.id||e.categoryId||e.value||""):"",Hs=e=>B0(e),qo=e=>(e==null?void 0:e.name)||(e==null?void 0:e.categoryName)||(e==null?void 0:e.title)||(e==null?void 0:e.sideCategoryName)||(e==null?void 0:e.label)||"Category",Gu=e=>ze((e==null?void 0:e.image)||(e==null?void 0:e.categoryImage)||(e==null?void 0:e.thumbnail)||(e==null?void 0:e.imageUrl)||(e==null?void 0:e.img)),Yu=b.createContext({}),uc=e=>{var t,n,r;return(e==null?void 0:e.token)||(e==null?void 0:e.auth_key)||(e==null?void 0:e.auth)||((t=e==null?void 0:e.data)==null?void 0:t.token)||((n=e==null?void 0:e.data)==null?void 0:n.auth_key)||((r=e==null?void 0:e.data)==null?void 0:r.auth)},pc=(e,t={})=>{var n,r,i,a,s,l,c,d,g,f,p,w,h,v,y,m,u,x,k,N,j,$,S,D,B,ee,q,te,le;return{...(e==null?void 0:e.user)||((n=e==null?void 0:e.data)==null?void 0:n.user)||{},id:(e==null?void 0:e.userid)||((r=e==null?void 0:e.data)==null?void 0:r.userid)||((i=e==null?void 0:e.user)==null?void 0:i._id)||((s=(a=e==null?void 0:e.data)==null?void 0:a.user)==null?void 0:s._id)||t.id,email:(e==null?void 0:e.email)||((l=e==null?void 0:e.data)==null?void 0:l.email)||((c=e==null?void 0:e.user)==null?void 0:c.email)||((g=(d=e==null?void 0:e.data)==null?void 0:d.user)==null?void 0:g.email)||t.email,name:(e==null?void 0:e.name)||((f=e==null?void 0:e.data)==null?void 0:f.name)||((p=e==null?void 0:e.user)==null?void 0:p.name)||((h=(w=e==null?void 0:e.data)==null?void 0:w.user)==null?void 0:h.name)||t.name,phone:(e==null?void 0:e.phone)||((v=e==null?void 0:e.data)==null?void 0:v.phone)||((y=e==null?void 0:e.user)==null?void 0:y.phone)||((u=(m=e==null?void 0:e.data)==null?void 0:m.user)==null?void 0:u.phone)||t.phone,mobile:(e==null?void 0:e.mobile)||((x=e==null?void 0:e.data)==null?void 0:x.mobile)||((k=e==null?void 0:e.user)==null?void 0:k.mobile)||((j=(N=e==null?void 0:e.data)==null?void 0:N.user)==null?void 0:j.mobile)||t.mobile||t.phone,firstname:(e==null?void 0:e.firstname)||(($=e==null?void 0:e.data)==null?void 0:$.firstname)||((S=e==null?void 0:e.user)==null?void 0:S.firstname)||((B=(D=e==null?void 0:e.data)==null?void 0:D.user)==null?void 0:B.firstname)||t.firstname,lastname:(e==null?void 0:e.lastname)||((ee=e==null?void 0:e.data)==null?void 0:ee.lastname)||((q=e==null?void 0:e.user)==null?void 0:q.lastname)||((le=(te=e==null?void 0:e.data)==null?void 0:te.user)==null?void 0:le.lastname)||t.lastname}};function A0({children:e}){const[t,n]=b.useState(()=>{try{return JSON.parse(localStorage.getItem("arke_user"))}catch{return null}}),[r,i]=b.useState(0),[a,s]=b.useState(0),l=async(p,w)=>{const h=await oe.login(p,w),v=uc(h);if((h==null?void 0:h.success)!==!1&&v){const y=pc(h,{email:p});return localStorage.setItem("arke_token",v),localStorage.setItem("arke_user",JSON.stringify(y)),n(y),{ok:!0}}return{ok:!1,msg:(h==null?void 0:h.message)||"Login failed"}},c=async p=>{const w=await oe.register(p),h=uc(w);if((w==null?void 0:w.success)!==!1&&h){const v=pc(w,p);return localStorage.setItem("arke_token",h),localStorage.setItem("arke_user",JSON.stringify(v)),n(v),{ok:!0}}return{ok:!1,msg:(w==null?void 0:w.message)||"Registration failed"}},d=()=>{localStorage.removeItem("arke_token"),localStorage.removeItem("arke_user"),n(null),i(0),s(0)},g=async()=>{if(localStorage.getItem("arke_token"))try{const p=await oe.getCart();i(_e(p,"cart").length)}catch{}},f=async()=>{if(localStorage.getItem("arke_token"))try{const p=await oe.getWishlist();s(_e(p,"wishlist").length)}catch{}};return b.useEffect(()=>{g(),f()},[t]),o.jsx(Yu.Provider,{value:{user:t,login:l,register:c,logout:d,cartCount:r,wishCount:a,setWishCount:s,refreshCart:g,refreshWishlist:f},children:e})}function Zn(){return b.useContext(Yu)}var Vu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},fc=ct.createContext&&ct.createContext(Vu),D0=["attr","size","title"];function O0(e,t){if(e==null)return{};var n,r,i=U0(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function U0(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function Zo(){return Zo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Zo.apply(null,arguments)}function gc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function ei(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gc(Object(n),!0).forEach(function(r){H0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function H0(e,t,n){return(t=G0(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G0(e){var t=Y0(e,"string");return typeof t=="symbol"?t:t+""}function Y0(e,t){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Qu(e){return e&&e.map((t,n)=>ct.createElement(t.tag,ei({key:n},t.attr),Qu(t.child)))}function er(e){return t=>ct.createElement(V0,Zo({attr:ei({},e.attr)},t),Qu(e.child))}function V0(e){var t=n=>{var{attr:r,size:i,title:a}=e,s=O0(e,D0),l=i||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),ct.createElement("svg",Zo({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,s,{className:c,style:ei(ei({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&ct.createElement("title",null,a),e.children)};return fc!==void 0?ct.createElement(fc.Consumer,null,n=>t(n)):t(Vu)}function Q0(e){return er({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"},child:[]}]})(e)}function K0(e){return er({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(e)}const W={text:"#f8f2ee",textMuted:"#b8a5b0",roseGold:"#c9897a",roseGoldLight:"#dba99d",roseGoldDeep:"#a8685a",champagne:"#d4b896",dustyRose:"#c4909e",border:"#2a1f2e",dropdownBg:"rgba(13,8,16,0.97)",bannerBg:"#160e1c",her:"#c4909e",him:"#7a95a8"},X0=`
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

  .ann-marquee-track {
    display: flex;
    animation: marquee 32s linear infinite;
    width: max-content;
  }
  .ann-marquee-track:hover { animation-play-state: paused; }
  .ann-sep { margin: 0 28px; color: rgba(201,137,122,0.3); }

  /* ── Navbar transition — smooth bg on scroll ── */
  .arke-navbar {
    transition:
      height 0.4s cubic-bezier(0.4,0,0.2,1),
      background-color 0.5s ease,
      backdrop-filter 0.5s ease,
      -webkit-backdrop-filter 0.5s ease,
      border-color 0.5s ease,
      box-shadow 0.5s ease;
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

  /* Shimmer line fade */
  .arke-shimmer-line {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201,137,122,0.28), transparent);
    pointer-events: none;
    transition: opacity 0.5s ease;
  }

  /* Nav link */
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
  }
  .arke-nav-link::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 50%;
    right: 50%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #c9897a, transparent);
    transition: left 0.4s cubic-bezier(0.4,0,0.2,1),
                right 0.4s cubic-bezier(0.4,0,0.2,1);
  }
  .arke-nav-link:hover::after,
  .arke-nav-link.active::after {
    left: 0;
    right: 0;
  }

  .nav-gift-her { color: #c4909e !important; }
  .nav-gift-her:hover { color: #e8c4bc !important; }
  .nav-gift-him { color: #7a95a8 !important; }
  .nav-gift-him:hover { color: #a8c0d0 !important; }

  .nav-icon-btn {
    color: rgba(248,242,238,0.65);
    display: flex;
    align-items: center;
    transition: all 0.3s;
    padding: 8px;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    border-radius: 50%;
  }
  .nav-icon-btn:hover {
    color: #c9897a;
    background: rgba(201,137,122,0.08);
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
  }
  .account-btn-circle.active {
    border-color: #c9897a;
    background: linear-gradient(135deg,
      rgba(201,137,122,0.26) 0%,
      rgba(196,144,158,0.18) 100%
    );
    box-shadow: 0 0 28px rgba(201,137,122,0.35);
  }

  .account-menu-item {
    position: relative;
    overflow: hidden;
  }
  .account-menu-item::before {
    content: '';
    position: absolute;
    left: 0; top: 0; bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #c9897a, #c4909e);
    transform: scaleY(0);
    transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
    transform-origin: top;
  }
  .account-menu-item:hover::before { transform: scaleY(1); }

  .badge-pulse {
    animation: pulseGlow 2s ease-in-out infinite;
  }

  .mobile-nav-link {
    transition: color 0.3s ease, letter-spacing 0.3s ease !important;
  }
`,mc=({color:e="rgba(201,137,122,0.25)",width:t=80})=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,width:t},children:[o.jsx("div",{style:{flex:1,height:"0.5px",background:e}}),o.jsx("span",{style:{color:e,fontSize:8,opacity:.8},children:"✦"}),o.jsx("div",{style:{flex:1,height:"0.5px",background:e}})]});function J0({onHeightChange:e}){var l,c;const[t,n]=b.useState(!0),[r,i]=b.useState([]);if(b.useEffect(()=>{const d=async()=>{try{const f=await fetch("http://localhost:5050/api/announcements",{headers:{"ngrok-skip-browser-warning":"true"}});if(f.ok){const w=((await f.json()).data||[]).filter(h=>h.isActive).sort((h,v)=>(h.order||0)-(v.order||0));if(w.length){i(w);return}}}catch{}i([{message:"✦ New Collection — Handcrafted Pieces Made For Her",bgColor:W.bannerBg,textColor:W.roseGold},{message:"◈ Free Shipping On All Orders Above ₹999",bgColor:W.bannerBg,textColor:W.champagne},{message:"◇ Hallmark Certified · Waterproof · Tarnish-Proof",bgColor:W.bannerBg,textColor:W.roseGold},{message:"✦ Up To 30% Off — Summer Edit Now Live",bgColor:W.bannerBg,textColor:W.champagne}])};d();const g=setInterval(d,5*60*1e3);return()=>clearInterval(g)},[]),b.useEffect(()=>{e==null||e(t&&r.length?38:0)},[t,r]),!t||!r.length)return null;const a=((l=r[0])==null?void 0:l.bgColor)||W.bannerBg,s=((c=r[0])==null?void 0:c.textColor)||W.roseGold;return o.jsxs("div",{style:{background:`linear-gradient(135deg, ${a} 0%, #1a0f1e 50%, ${a} 100%)`,height:38,display:"flex",alignItems:"center",position:"relative",zIndex:1001,overflow:"hidden",animation:"slideDown 0.5s ease",borderBottom:"1px solid rgba(201,137,122,0.12)"},children:[o.jsx("div",{style:{width:38,height:"100%",flexShrink:0,background:"linear-gradient(135deg, rgba(201,137,122,0.12), transparent)",display:"flex",alignItems:"center",justifyContent:"center",borderRight:"1px solid rgba(201,137,122,0.08)"},children:o.jsx("span",{style:{fontSize:9,color:s,opacity:.5},children:"✦"})}),o.jsxs("div",{style:{flex:1,overflow:"hidden",position:"relative"},children:[o.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:48,background:`linear-gradient(to right, ${a}, transparent)`,zIndex:2,pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",right:36,top:0,bottom:0,width:48,background:`linear-gradient(to left, ${a}, transparent)`,zIndex:2,pointerEvents:"none"}}),o.jsx("div",{className:"ann-marquee-track",children:[...r,...r].map((d,g)=>o.jsxs("span",{style:{fontFamily:"'Jost', sans-serif",fontSize:10.5,letterSpacing:"2px",fontWeight:500,color:d.textColor||W.roseGold,whiteSpace:"nowrap",display:"inline-flex",alignItems:"center"},children:[d.message,o.jsx("span",{className:"ann-sep",children:"◇"})]},g))})]}),o.jsx("button",{onClick:()=>n(!1),style:{background:"rgba(201,137,122,0.06)",border:"none",borderLeft:"1px solid rgba(201,137,122,0.08)",color:s,cursor:"pointer",fontSize:11,padding:"0 14px",height:"100%",flexShrink:0,display:"flex",alignItems:"center",opacity:.55,transition:"opacity 0.2s"},onMouseEnter:d=>d.currentTarget.style.opacity="1",onMouseLeave:d=>d.currentTarget.style.opacity="0.55",children:"✕"})]})}function q0({user:e}){const[t,n]=b.useState(!1),r=b.useRef(null),i=b.useRef(null),a=kn(),{logout:s}=Zn();b.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]),b.useEffect(()=>{const f=p=>{r.current&&!r.current.contains(p.target)&&n(!1)};if(t)return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[t]);const l=()=>{i.current&&(clearTimeout(i.current),i.current=null),n(!0)},c=()=>{i.current=setTimeout(()=>n(!1),160)},d=()=>{s(),n(!1),window.location.href="/"},g=e!=null&&e.email?e.email.charAt(0).toUpperCase():"U";return o.jsxs("div",{ref:r,style:{position:"relative"},onMouseEnter:l,onMouseLeave:c,children:[o.jsx("button",{className:`account-btn-circle ${t?"active":""}`,title:"My Account",children:g}),t&&o.jsxs("div",{className:"account-dropdown-menu",style:{position:"absolute",top:"calc(100% + 10px)",right:0,background:W.dropdownBg,backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)",border:`1px solid ${W.border}`,borderRadius:"16px",minWidth:"290px",boxShadow:`
              0 32px 80px rgba(0,0,0,0.8),
              0 8px 24px rgba(0,0,0,0.5),
              inset 0 1px 0 rgba(201,137,122,0.08)
            `,zIndex:1010,overflow:"hidden",pointerEvents:"auto"},children:[o.jsxs("div",{style:{padding:"20px 18px",background:`linear-gradient(135deg,
                rgba(201,137,122,0.10) 0%,
                rgba(196,144,158,0.06) 50%,
                rgba(61,32,64,0.08) 100%
              )`,borderBottom:`1px solid ${W.border}`},children:[o.jsx("div",{style:{height:"1px",background:"linear-gradient(90deg, transparent, rgba(201,137,122,0.4), transparent)",marginBottom:14,marginTop:-6,marginLeft:-18,marginRight:-18}}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg, ${W.roseGoldDeep} 0%, ${W.dustyRose} 50%, ${W.champagne} 100%)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:17,fontFamily:"'Cormorant Garamond', serif",fontWeight:600,boxShadow:`0 4px 20px rgba(201,137,122,0.35),
                              inset 0 1px 0 rgba(255,255,255,0.2)`,flexShrink:0},children:g}),o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsx("div",{style:{fontFamily:"'Jost', sans-serif",fontSize:9,fontWeight:600,letterSpacing:"2px",color:W.roseGold,textTransform:"uppercase",marginBottom:5,opacity:.85},children:"Welcome Back"}),o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:13,color:W.text,letterSpacing:"0.5px",fontStyle:"italic",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",opacity:.8},children:(e==null?void 0:e.email)||"Guest"})]}),o.jsx("div",{style:{background:"linear-gradient(135deg, rgba(201,137,122,0.15), rgba(196,144,158,0.10))",border:"1px solid rgba(201,137,122,0.2)",borderRadius:"20px",padding:"3px 8px",flexShrink:0},children:o.jsx("span",{style:{fontFamily:"'Jost', sans-serif",fontSize:7.5,letterSpacing:"1.5px",color:W.roseGold,textTransform:"uppercase",fontWeight:600},children:"Member"})})]})]}),o.jsx("div",{style:{padding:"8px 0"},children:Z0.map((f,p)=>{const w=a.pathname===f.to;return o.jsxs(Me,{to:f.to,onClick:()=>n(!1),className:"account-menu-item",style:{display:"flex",alignItems:"center",gap:12,padding:"12px 18px",fontFamily:"'Jost', sans-serif",fontSize:9.5,letterSpacing:"1.2px",textTransform:"uppercase",textDecoration:"none",color:w?W.roseGold:W.textMuted,transition:"all 0.25s",background:w?"rgba(201,137,122,0.07)":"transparent"},onMouseEnter:h=>{w||(h.currentTarget.style.color=W.roseGoldLight,h.currentTarget.style.background="rgba(201,137,122,0.05)",h.currentTarget.style.paddingLeft="22px")},onMouseLeave:h=>{w||(h.currentTarget.style.color=W.textMuted,h.currentTarget.style.background="transparent",h.currentTarget.style.paddingLeft="18px")},children:[o.jsx("span",{style:{fontSize:14,minWidth:18,opacity:.85},children:f.icon}),o.jsx("span",{style:{flex:1},children:f.label}),w?o.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:W.roseGold,flexShrink:0}}):o.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:.3,children:o.jsx("polyline",{points:"9 18 15 12 9 6"})})]},f.to)})}),o.jsx("div",{style:{padding:"0 18px"},children:o.jsx("div",{style:{height:"0.5px",background:"linear-gradient(90deg, transparent, rgba(201,137,122,0.2), transparent)"}})}),o.jsx("div",{style:{padding:"12px 14px 14px"},children:o.jsxs("button",{onClick:d,style:{width:"100%",fontFamily:"'Jost', sans-serif",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",fontWeight:600,padding:"11px 16px",cursor:"pointer",outline:"none",border:`1px solid ${W.border}`,background:"transparent",color:W.textMuted,transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",gap:8},onMouseEnter:f=>{f.currentTarget.style.background="rgba(196,144,158,0.08)",f.currentTarget.style.borderColor="rgba(196,144,158,0.3)",f.currentTarget.style.color=W.dustyRose},onMouseLeave:f=>{f.currentTarget.style.background="transparent",f.currentTarget.style.borderColor=W.border,f.currentTarget.style.color=W.textMuted},children:[o.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),o.jsx("polyline",{points:"16 17 21 12 16 7"}),o.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Sign Out"]})})]})]})}const xc=[{label:"Home",to:"/"},{label:"New Collection",to:"/new-collection"},{label:"Best Sellers",to:"/best-sellers"},{label:"All Jewellery",to:"/products"},{label:"Categories",to:"/categories"},{label:"Gift for Her",to:"/gift-for-her",accent:W.her},{label:"Gift for Him",to:"/gift-for-him",accent:W.him}],Z0=[{label:"My Orders",to:"/My-Orders",icon:"✦"},{label:"Customer Care",to:"/customer-care",icon:"◇"},{label:"Account Security",to:"/account-security",icon:"◈"},{label:"Bank Details",to:"/Bankdetails",icon:"◉"}];function em({onLoginClick:e}){const{user:t,logout:n,cartCount:r,wishCount:i}=Zn(),[a,s]=b.useState(!1),[l,c]=b.useState(!1),[d,g]=b.useState(38),f=kn(),p=f.pathname==="/";b.useEffect(()=>{const h=()=>{s(window.scrollY>50)};return h(),window.addEventListener("scroll",h,{passive:!0}),()=>window.removeEventListener("scroll",h)},[f.pathname]),b.useEffect(()=>{c(!1)},[f]);const w=p&&!a;return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:X0}),o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:1001},children:o.jsx(J0,{onHeightChange:g})}),o.jsxs("nav",{className:`arke-navbar ${w?"is-transparent":"is-solid"}`,style:{position:"fixed",top:d,left:0,right:0,zIndex:1e3,height:a?56:68,padding:"0 48px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid transparent"},children:[o.jsx("div",{className:"arke-shimmer-line",style:{opacity:w?0:1}}),o.jsxs(Me,{style:{display:"flex",alignItems:"baseline",gap:1,textDecoration:"none",flexShrink:0},children:[o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:a?24:28,fontWeight:400,letterSpacing:"6px",color:W.text,transition:"font-size 0.4s ease",fontStyle:"italic"},children:"Ark"}),o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:a?24:28,fontWeight:400,letterSpacing:"6px",fontStyle:"italic",background:`linear-gradient(135deg, ${W.roseGold}, ${W.champagne}, ${W.dustyRose})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",transition:"font-size 0.4s ease"},children:"é"})]}),o.jsx("ul",{className:"arke-nav-links",children:xc.map(h=>{const v=f.pathname===h.to,y=h.to==="/gift-for-her",m=h.to==="/gift-for-him",u=v?h.accent||W.roseGold:y?W.her:m?W.him:"rgba(248,242,238,0.55)";return o.jsx("li",{children:o.jsxs(Me,{to:h.to,className:`arke-nav-link${v?" active":""}${y?" nav-gift-her":""}${m?" nav-gift-him":""}`,style:{color:u},onMouseEnter:x=>{!v&&!y&&!m&&(x.currentTarget.style.color=W.text)},onMouseLeave:x=>{!v&&!y&&!m&&(x.currentTarget.style.color=u)},children:[y&&o.jsx("span",{style:{marginRight:4,fontSize:9,opacity:.8},children:"✿"}),m&&o.jsx("span",{style:{marginRight:4,fontSize:9,opacity:.8},children:"◈"}),h.label]})},h.to)})}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[o.jsxs(Me,{to:"/wishlist",className:"nav-icon-btn",children:[o.jsx(K0,{size:19}),i>0&&o.jsx("span",{className:"badge-pulse",style:{position:"absolute",top:2,right:2,width:16,height:16,borderRadius:"50%",background:`linear-gradient(135deg, ${W.roseGoldDeep}, ${W.dustyRose})`,color:"#fff",fontSize:8.5,fontWeight:700,fontFamily:"'Jost', sans-serif",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(201,137,122,0.5)"},children:i})]}),o.jsxs(Me,{to:"/cart",className:"nav-icon-btn",children:[o.jsx(Q0,{size:19}),r>0&&o.jsx("span",{className:"badge-pulse",style:{position:"absolute",top:2,right:2,width:16,height:16,borderRadius:"50%",background:`linear-gradient(135deg, ${W.roseGoldDeep}, ${W.dustyRose})`,color:"#fff",fontSize:8.5,fontWeight:700,fontFamily:"'Jost', sans-serif",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(201,137,122,0.5)"},children:r})]}),o.jsx("div",{style:{width:"0.5px",height:18,background:"rgba(201,137,122,0.2)",margin:"0 6px"}}),t?o.jsx(q0,{user:t}):o.jsx(tm,{onClick:e,children:"Sign In"}),o.jsx("button",{className:"arke-hamburger",onClick:()=>c(!l),style:{flexDirection:"column",gap:5,background:"none",border:"none",cursor:"pointer",padding:"4px 0 4px 14px",marginLeft:4,outline:"none"},children:[0,1,2].map(h=>o.jsx("span",{style:{display:"block",width:h===2?14:22,height:1.5,background:W.roseGold,transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",transform:l?h===0?"rotate(45deg) translate(4.5px, 4.5px)":h===2?"rotate(-45deg) translate(3px, -4px)":"none":"none",opacity:l&&h===1?0:1,transformOrigin:"left center"}},h))})]})]}),o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:998,background:"linear-gradient(160deg, #0d0810 0%, #160e1c 40%, #1a0d18 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,transform:l?"translateX(0)":"translateX(100%)",transition:"transform 0.5s cubic-bezier(0.77,0,0.175,1)",overflowY:"auto",padding:"60px 24px"},children:[o.jsx("div",{style:{position:"absolute",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle, rgba(201,137,122,0.04) 0%, transparent 70%)",top:"10%",right:"-10%",pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",width:250,height:250,borderRadius:"50%",background:"radial-gradient(circle, rgba(196,144,158,0.04) 0%, transparent 70%)",bottom:"15%",left:"-5%",pointerEvents:"none"}}),o.jsx("button",{onClick:()=>c(!1),style:{position:"absolute",top:24,right:24,background:"rgba(201,137,122,0.08)",border:"1px solid rgba(201,137,122,0.15)",color:W.roseGold,width:36,height:36,borderRadius:"50%",fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.25s"},onMouseEnter:h=>{h.currentTarget.style.background="rgba(201,137,122,0.16)",h.currentTarget.style.transform="rotate(90deg)"},onMouseLeave:h=>{h.currentTarget.style.background="rgba(201,137,122,0.08)",h.currentTarget.style.transform="rotate(0deg)"},children:"✕"}),o.jsx("div",{style:{marginBottom:20},children:o.jsxs("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:26,fontStyle:"italic",color:W.text,letterSpacing:"6px"},children:["Ark",o.jsx("span",{style:{background:`linear-gradient(135deg, ${W.roseGold}, ${W.champagne})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"é"})]})}),o.jsx(mc,{color:"rgba(201,137,122,0.2)",width:60}),o.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,marginTop:16},children:xc.map((h,v)=>{const y=h.to==="/gift-for-her",m=h.to==="/gift-for-him",x=f.pathname===h.to?h.accent||W.roseGold:y?W.her:m?W.him:"rgba(248,242,238,0.7)";return o.jsxs(Me,{to:h.to,className:"mobile-nav-link",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:26,fontWeight:300,fontStyle:"italic",letterSpacing:"4px",color:x,textDecoration:"none",textTransform:"capitalize",padding:"10px 24px",animation:l?`fadeInUp 0.5s ease ${v*60}ms both`:"none"},onMouseEnter:k=>{k.currentTarget.style.color=h.accent||W.roseGold,k.currentTarget.style.letterSpacing="6px"},onMouseLeave:k=>{k.currentTarget.style.color=x,k.currentTarget.style.letterSpacing="4px"},children:[y&&"✿ ",m&&"◈ ",h.label]},h.to)})}),o.jsx("div",{style:{marginTop:20},children:o.jsx(mc,{color:"rgba(201,137,122,0.18)",width:80})}),o.jsx("div",{style:{marginTop:16},children:t?o.jsx("button",{onClick:()=>{n(),c(!1)},style:{background:"transparent",border:"1px solid rgba(201,137,122,0.25)",color:"rgba(201,137,122,0.65)",padding:"12px 32px",fontFamily:"'Jost', sans-serif",fontSize:9,letterSpacing:"2.5px",textTransform:"uppercase",cursor:"pointer",borderRadius:"2px",transition:"all 0.3s"},onMouseEnter:h=>{h.currentTarget.style.borderColor="rgba(201,137,122,0.5)",h.currentTarget.style.color=W.roseGold},onMouseLeave:h=>{h.currentTarget.style.borderColor="rgba(201,137,122,0.25)",h.currentTarget.style.color="rgba(201,137,122,0.65)"},children:"Sign Out"}):o.jsx("button",{onClick:()=>{e(),c(!1)},style:{background:`linear-gradient(135deg, ${W.roseGoldDeep} 0%, ${W.dustyRose} 100%)`,border:"none",color:"#fff",padding:"14px 40px",fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"3px",textTransform:"uppercase",cursor:"pointer",fontWeight:600,borderRadius:"2px",boxShadow:"0 8px 32px rgba(201,137,122,0.35)",transition:"all 0.3s"},onMouseEnter:h=>{h.currentTarget.style.transform="translateY(-2px)",h.currentTarget.style.boxShadow="0 12px 40px rgba(201,137,122,0.45)"},onMouseLeave:h=>{h.currentTarget.style.transform="translateY(0)",h.currentTarget.style.boxShadow="0 8px 32px rgba(201,137,122,0.35)"},children:"✦ Sign In"})})]})]})}function tm({children:e,onClick:t}){const[n,r]=b.useState(!1);return o.jsxs("button",{onClick:t,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),style:{fontFamily:"'Jost', sans-serif",fontSize:9.5,letterSpacing:"2px",textTransform:"uppercase",fontWeight:600,padding:"9px 20px",cursor:"pointer",outline:"none",border:"none",display:"inline-flex",alignItems:"center",gap:6,transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",background:n?`linear-gradient(135deg, ${W.roseGold} 0%, ${W.dustyRose} 100%)`:`linear-gradient(135deg, ${W.roseGoldDeep} 0%, ${W.dustyRose} 100%)`,color:"#fff",borderRadius:"2px",boxShadow:n?"0 8px 28px rgba(201,137,122,0.45)":"0 3px 12px rgba(201,137,122,0.22)",transform:n?"translateY(-2px)":"none"},children:[o.jsx("span",{style:{fontSize:8,opacity:.85},children:"✦"}),e]})}function Ku(e){return er({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function Xu(e){return er({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"},child:[]}]})(e)}function Ju(e){return er({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function qu(e){return er({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}const Z={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",burgundy:"#8b4654",border:"#e8ddd4",borderLight:"#f0ebe5"};function nm(){const e={footer:{background:`linear-gradient(to bottom, ${Z.surface} 0%, ${Z.bg} 100%)`,borderTop:`1px solid ${Z.border}`,padding:"80px 80px 40px"},grid:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:"60px",marginBottom:"60px"},brand:{fontFamily:"'Cormorant Garamond', serif",fontSize:"42px",fontWeight:400,letterSpacing:"4px",color:Z.text,marginBottom:"24px",background:`linear-gradient(135deg, ${Z.text}, ${Z.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},brandSpan:{color:Z.rose,background:"none",WebkitTextFillColor:"unset"},tagline:{color:Z.textMuted,fontSize:"13.5px",lineHeight:"1.9",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.5px",fontWeight:400,maxWidth:"280px"},colTitle:{fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",color:Z.burgundy,marginBottom:"24px",fontWeight:700},colLinks:{display:"flex",flexDirection:"column",gap:"14px"},colLink:{color:Z.textMuted,fontSize:"13px",textDecoration:"none",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.3px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",cursor:"pointer",fontWeight:400,position:"relative"},bottom:{borderTop:`1px solid ${Z.border}`,paddingTop:"36px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"40px",flexWrap:"wrap"},copy:{color:Z.textMuted,fontSize:"11px",letterSpacing:"0.8px",fontFamily:"'Poppins', sans-serif",fontWeight:500},socialRow:{display:"flex",gap:"12px",alignItems:"center"},socialLink:{width:"42px",height:"42px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",textDecoration:"none",color:Z.rose,fontSize:"16px",border:`1.5px solid ${Z.rose}`,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",cursor:"pointer",background:"transparent",fontWeight:500}},t=[{name:"Instagram",url:"https://instagram.com/yourhandle",icon:o.jsx(Ju,{size:16})},{name:"Pinterest",url:"https://pinterest.com/yourprofile",icon:o.jsx(Xu,{size:16})},{name:"WhatsApp",url:"https://wa.me/919876543210",icon:o.jsx(Ku,{size:16})},{name:"Email",url:"mailto:hello@arke.com",icon:o.jsx(qu,{size:16})}],n=s=>{s.target.style.color=Z.burgundy,s.target.style.transform="translateX(4px)"},r=s=>{s.target.style.color=Z.textMuted,s.target.style.transform="translateX(0)"},i=s=>{s.currentTarget.style.color="white",s.currentTarget.style.borderColor=Z.rose,s.currentTarget.style.background=`linear-gradient(135deg, ${Z.rose}, ${Z.burgundy})`,s.currentTarget.style.transform="translateY(-3px)",s.currentTarget.style.boxShadow="0 6px 20px rgba(232, 180, 196, 0.35)"},a=s=>{s.currentTarget.style.color=Z.rose,s.currentTarget.style.borderColor=Z.rose,s.currentTarget.style.background="transparent",s.currentTarget.style.transform="translateY(0)",s.currentTarget.style.boxShadow="none"};return o.jsxs("footer",{style:e.footer,children:[o.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, ${Z.rose}, ${Z.burgundy});
          transition: width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 40px !important;
          }
        }

        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 20px !important;
          }
          .footer-wrapper {
            padding: 60px 20px 30px !important;
          }
        }
      `}),o.jsxs("div",{className:"footer-wrapper",style:e.footer,children:[o.jsxs("div",{className:"footer-grid",style:e.grid,children:[o.jsxs("div",{children:[o.jsxs("div",{style:e.brand,children:["ARK",o.jsx("span",{style:e.brandSpan,children:"E"})]}),o.jsxs("p",{style:e.tagline,children:["✨ Jewellery for everyone. Designed with clarity, crafted with love. Wear it your way.",o.jsx("br",{}),o.jsx("br",{}),"We craft timeless pieces that celebrate elegance and individuality. Each jewel tells a story of meticulous craftsmanship, passion, and attention to detail. Our collection blends traditional artistry with contemporary design, creating pieces that transcend trends and become cherished heirlooms."]})]}),o.jsxs("div",{children:[o.jsx("div",{style:e.colTitle,children:"📍 Explore"}),o.jsx("div",{style:e.colLinks,children:[["New Collection","/new-collection"],["Best Sellers","/best-sellers"],["All Jewellery","/products"],["Gift Guide","/gift-guide"]].map(([s,l])=>o.jsx(Me,{to:l,className:"footer-link",style:e.colLink,onMouseEnter:n,onMouseLeave:r,children:s},l))})]}),o.jsxs("div",{children:[o.jsx("div",{style:e.colTitle,children:"💬 Support"}),o.jsx("div",{style:e.colLinks,children:[["About Us","/about-us"],["Contact Us","/customer-care"],["Shipping Info","/shipping"],["Journal","/blog"]].map(([s,l])=>o.jsx(Me,{to:l,className:"footer-link",style:e.colLink,onMouseEnter:n,onMouseLeave:r,children:s},l))})]})]}),o.jsx("div",{style:{height:"1px",background:`linear-gradient(90deg, transparent, ${Z.border}, transparent)`,margin:"40px 0"}}),o.jsxs("div",{className:"footer-bottom",style:e.bottom,children:[o.jsxs("span",{style:e.copy,children:["© ",new Date().getFullYear()," ARKE. All Rights Reserved. | Handcrafted with 💕"]}),o.jsx("div",{style:e.socialRow,children:t.map(s=>o.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",title:s.name,style:e.socialLink,onMouseEnter:i,onMouseLeave:a,children:s.icon},s.name))})]}),o.jsx("div",{style:{marginTop:"30px",paddingTop:"24px",borderTop:`1px solid ${Z.borderLight}`,display:"flex",gap:"32px",flexWrap:"wrap",justifyContent:"center"},children:[["Privacy Policy","/privacy"],["Terms & Conditions","/terms"],["Refund Policy","/refund"],["Accessibility","/accessibility"]].map(([s,l])=>o.jsx(Me,{to:l,style:{color:Z.textMuted,fontSize:"10px",textDecoration:"none",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.5px",transition:"color 0.3s",fontWeight:500},onMouseEnter:c=>{c.target.style.color=Z.rose},onMouseLeave:c=>{c.target.style.color=Z.textMuted},children:s},l))})]})]})}const O={surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4"};function rm({onClose:e}){const{login:t,register:n}=Zn(),[r,i]=b.useState("login"),[a,s]=b.useState({name:"",email:"",phone:"",password:""}),[l,c]=b.useState(!1),[d,g]=b.useState(""),[f,p]=b.useState(""),w=y=>m=>s({...a,[y]:m.target.value}),h=async()=>{if(l)return;const y=a.email.trim(),m=a.password,u=a.phone.trim(),x=a.name.trim();if(g(""),p(""),!y||!m){g("Email and password are required.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(y)){g("Please enter a valid email address.");return}if(m.length<6){g("Password must be at least 6 characters.");return}if(r==="register"){if(!x){g("Full name is required.");return}if(!u||u.length<10){g("Please enter a valid mobile number.");return}}c(!0);try{if(r==="login"){const k=await t(y,m);k.ok?(p("Welcome back! 💕"),setTimeout(()=>e(),800)):g(k.msg||"Login failed. Please try again.")}else{const k=await n({name:x,email:y,phone:u,password:m});k.ok?(p("Account created! Welcome to ARKE 💎"),setTimeout(()=>e(),800)):g(k.msg||"Registration failed. Please try again.")}}catch(k){g((k==null?void 0:k.message)||"Something went wrong. Please try again.")}finally{c(!1)}},v={overlay:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(42, 42, 42, 0.7)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},modal:{background:O.surface,border:`1.5px solid ${O.border}`,borderRadius:"12px",width:"100%",maxWidth:"450px",padding:"60px 48px",position:"relative",boxShadow:"0 20px 60px rgba(139, 70, 84, 0.15)",animation:"slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"},close:{position:"absolute",top:"20px",right:"20px",background:"none",border:"none",color:O.textMuted,cursor:"pointer",fontSize:"24px",fontWeight:300,transition:"all 0.3s",padding:"4px 8px",opacity:.6},title:{fontFamily:"'Cormorant Garamond', serif",fontSize:"40px",fontWeight:400,letterSpacing:"3px",color:O.text,marginBottom:"8px",textAlign:"center",background:`linear-gradient(135deg, ${O.text}, ${O.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},sub:{color:O.textMuted,fontSize:"12px",letterSpacing:"1.5px",textTransform:"uppercase",textAlign:"center",marginBottom:"40px",fontFamily:"'Poppins', sans-serif",fontWeight:600},formGroup:{marginBottom:"24px"},label:{display:"block",color:O.text,fontSize:"11px",letterSpacing:"1px",textTransform:"uppercase",marginBottom:"8px",fontFamily:"'Poppins', sans-serif",fontWeight:600},input:{width:"100%",background:`${O.blush}20`,border:`1.5px solid ${O.border}`,borderRadius:"6px",color:O.text,padding:"12px 14px",fontFamily:"'Poppins', sans-serif",fontSize:"13px",outline:"none",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",letterSpacing:"0.3px"},inputFocus:{background:`${O.rose}15`,borderColor:O.rose,boxShadow:`0 0 0 3px ${O.blush}40`},btn:{width:"100%",padding:"14px",background:`linear-gradient(135deg, ${O.rose}, ${O.burgundy})`,color:"white",border:"none",borderRadius:"6px",cursor:l?"wait":"pointer",fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,marginBottom:"20px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:"0 4px 16px rgba(232, 180, 196, 0.3)",opacity:l?.7:1},toggle:{textAlign:"center",color:O.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"12px",fontWeight:500,letterSpacing:"0.3px"},toggleLink:{color:O.rose,cursor:"pointer",background:"none",border:"none",fontFamily:"'Poppins', sans-serif",fontSize:"12px",fontWeight:700,transition:"color 0.3s",textDecoration:"none",padding:0},err:{color:"#d97070",fontSize:"12px",marginBottom:"16px",textAlign:"center",fontFamily:"'Poppins', sans-serif",padding:"12px 12px",background:"rgba(217, 112, 112, 0.08)",borderRadius:"6px",border:"1px solid rgba(217, 112, 112, 0.2)",fontWeight:500},success:{color:O.rose,fontSize:"12px",marginBottom:"16px",textAlign:"center",fontFamily:"'Poppins', sans-serif",padding:"12px 12px",background:"rgba(232, 180, 196, 0.08)",borderRadius:"6px",border:`1px solid ${O.rose}40`,fontWeight:600},divider:{display:"flex",alignItems:"center",gap:"12px",margin:"28px 0"},dividerLine:{flex:1,height:"1px",background:O.border},dividerText:{color:O.textMuted,fontSize:"11px",fontFamily:"'Poppins', sans-serif",textTransform:"uppercase",letterSpacing:"1px",fontWeight:600},socialBtns:{display:"flex",gap:"12px",marginBottom:"20px"},socialBtn:{flex:1,padding:"11px",border:`1.5px solid ${O.border}`,background:"transparent",borderRadius:"6px",cursor:"pointer",fontFamily:"'Poppins', sans-serif",fontSize:"11px",fontWeight:600,letterSpacing:"1px",color:O.text,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"}};return o.jsxs("div",{style:v.overlay,onClick:e,children:[o.jsx("style",{children:`
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
          color: ${O.textMuted};
          opacity: 0.6;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px ${O.blush}15 inset !important;
          -webkit-text-fill-color: ${O.text} !important;
          caret-color: ${O.rose};
        }

        @media (max-width: 480px) {
          .auth-modal {
            padding: 48px 32px !important;
            max-width: calc(100% - 40px) !important;
          }
        }
      `}),o.jsxs("div",{style:v.modal,className:"auth-modal",onClick:y=>y.stopPropagation(),children:[o.jsx("button",{style:v.close,onClick:e,onMouseEnter:y=>{y.target.style.opacity="1",y.target.style.color=O.rose},onMouseLeave:y=>{y.target.style.opacity="0.6",y.target.style.color=O.textMuted},children:"✕"}),o.jsxs("div",{style:v.title,children:["ARK",o.jsx("span",{style:{color:O.rose,background:"none",WebkitTextFillColor:"unset"},children:"E"})]}),o.jsx("div",{style:v.sub,children:r==="login"?"✨ Welcome back":"💎 Create your account"}),d&&o.jsxs("div",{style:v.err,children:["⚠️ ",d]}),f&&o.jsxs("div",{style:v.success,children:["✓ ",f]}),o.jsxs("div",{children:[r==="register"&&o.jsxs("div",{style:v.formGroup,children:[o.jsx("label",{style:v.label,children:"Full Name"}),o.jsx("input",{style:v.input,placeholder:"Your full name",value:a.name,onChange:w("name"),onFocus:y=>Object.assign(y.target.style,v.inputFocus),onBlur:y=>{y.target.style.background=`${O.blush}20`,y.target.style.borderColor=O.border,y.target.style.boxShadow="none"},autoComplete:"name"})]}),r==="register"&&o.jsxs("div",{style:v.formGroup,children:[o.jsx("label",{style:v.label,children:"Mobile Number"}),o.jsx("input",{style:v.input,placeholder:"10-digit mobile number",value:a.phone,onChange:w("phone"),onFocus:y=>Object.assign(y.target.style,v.inputFocus),onBlur:y=>{y.target.style.background=`${O.blush}20`,y.target.style.borderColor=O.border,y.target.style.boxShadow="none"},autoComplete:"tel"})]}),o.jsxs("div",{style:v.formGroup,children:[o.jsx("label",{style:v.label,children:"Email Address"}),o.jsx("input",{style:v.input,type:"email",placeholder:"your@email.com",value:a.email,onChange:w("email"),onFocus:y=>Object.assign(y.target.style,v.inputFocus),onBlur:y=>{y.target.style.background=`${O.blush}20`,y.target.style.borderColor=O.border,y.target.style.boxShadow="none"},autoComplete:"email"})]}),o.jsxs("div",{style:v.formGroup,children:[o.jsx("label",{style:v.label,children:"Password"}),o.jsx("input",{style:v.input,type:"password",placeholder:"Minimum 6 characters",value:a.password,onChange:w("password"),onFocus:y=>Object.assign(y.target.style,v.inputFocus),onBlur:y=>{y.target.style.background=`${O.blush}20`,y.target.style.borderColor=O.border,y.target.style.boxShadow="none"},autoComplete:r==="login"?"current-password":"new-password",onKeyDown:y=>y.key==="Enter"&&h()})]}),o.jsx("button",{style:v.btn,onClick:h,disabled:l,onMouseEnter:y=>{l||(y.target.style.transform="translateY(-2px)",y.target.style.boxShadow="0 8px 24px rgba(232, 180, 196, 0.4)")},onMouseLeave:y=>{y.target.style.transform="translateY(0)",y.target.style.boxShadow="0 4px 16px rgba(232, 180, 196, 0.3)"},children:l?o.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[o.jsx("span",{style:{display:"inline-block",width:"4px",height:"4px",borderRadius:"50%",background:"currentColor",animation:"pulse 1.5s infinite"}}),"Please wait..."]}):r==="login"?"Sign In":"Create Account"})]}),o.jsxs("div",{style:v.divider,children:[o.jsx("div",{style:v.dividerLine}),o.jsx("span",{style:v.dividerText,children:"OR"}),o.jsx("div",{style:v.dividerLine})]}),o.jsxs("div",{style:v.socialBtns,children:[o.jsx("button",{style:v.socialBtn,onMouseEnter:y=>{y.target.style.background=`${O.blush}30`,y.target.style.borderColor=O.rose,y.target.style.color=O.burgundy},onMouseLeave:y=>{y.target.style.background="transparent",y.target.style.borderColor=O.border,y.target.style.color=O.text},children:"Google"}),o.jsx("button",{style:v.socialBtn,onMouseEnter:y=>{y.target.style.background=`${O.blush}30`,y.target.style.borderColor=O.rose,y.target.style.color=O.burgundy},onMouseLeave:y=>{y.target.style.background="transparent",y.target.style.borderColor=O.border,y.target.style.color=O.text},children:"Apple"})]}),o.jsxs("div",{style:v.toggle,children:[r==="login"?"New to ARKE? ":"Already have account? ",o.jsx("button",{style:v.toggleLink,onClick:()=>{i(r==="login"?"register":"login"),g(""),p(""),s({name:"",email:"",phone:"",password:""})},onMouseEnter:y=>{y.target.style.color=O.burgundy},onMouseLeave:y=>{y.target.style.color=O.rose},children:r==="login"?"Create account":"Sign in"})]}),o.jsxs("div",{style:{marginTop:"24px",paddingTop:"20px",borderTop:`1px solid ${O.border}`,fontSize:"10px",color:O.textMuted,textAlign:"center",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.3px",lineHeight:1.6},children:["By continuing, you agree to our ",o.jsx("br",{}),o.jsx("button",{style:{background:"none",border:"none",color:O.rose,cursor:"pointer",textDecoration:"underline",fontWeight:600,padding:0},children:"Terms of Service"})," & ",o.jsx("button",{style:{background:"none",border:"none",color:O.rose,cursor:"pointer",textDecoration:"underline",fontWeight:600,padding:0},children:"Privacy Policy"})]})]})]})}const Zu=b.createContext();function om({children:e}){const[t,n]=b.useState([]),[r,i]=b.useState(!1),[a,s]=b.useState(null),l=b.useCallback(async()=>{if(!localStorage.getItem("arke_token")){n([]);return}i(!0),s(null);try{const v=await oe.getCart(),y=Array.isArray(v==null?void 0:v.cart)?v.cart:Array.isArray(v==null?void 0:v.data)?v.data:Array.isArray(v==null?void 0:v.items)?v.items:Array.isArray(v)?v:[];n(y)}catch(v){console.error("Failed to load cart:",v),s("Failed to load cart"),n([])}finally{i(!1)}},[]),c=b.useCallback(async(h,v=1)=>{try{const y=t.find(u=>{var x;return(((x=u.product)==null?void 0:x._id)||u._id||u.id)===h});n(y?u=>u.map(x=>{var k;return(((k=x.product)==null?void 0:k._id)||x._id||x.id)===h?{...x,quantity:(x.quantity||1)+v}:x}):u=>[...u,{id:h,productId:h,quantity:v,isOptimistic:!0}]);const m=await oe.addToCart(h,v);return await l(),m}catch(y){throw console.error("Failed to add to cart:",y),l(),y}},[t,l]),d=b.useCallback(async h=>{try{n(v=>v.filter(y=>{var m;return(((m=y.product)==null?void 0:m._id)||y._id||y.id)!==h})),await oe.removeFromCart(h)}catch(v){throw console.error("Failed to remove from cart:",v),l(),v}},[l]),g=b.useCallback(async(h,v)=>{if(v<=0)return d(h);try{n(y=>y.map(m=>{var u;return(((u=m.product)==null?void 0:u._id)||m._id||m.id)===h?{...m,quantity:v,isUpdating:!0}:m})),await oe.updateCartItem(h,v),n(y=>y.map(m=>{var u;return(((u=m.product)==null?void 0:u._id)||m._id||m.id)===h?{...m,isUpdating:!1}:m}))}catch(y){throw console.error("Failed to update quantity:",y),l(),y}},[l,d]),f=b.useCallback(()=>{n([]),s(null)},[]),p=b.useCallback(()=>t.reduce((h,v)=>h+(v.quantity||1),0),[t]),w=b.useCallback(()=>t.reduce((h,v)=>{const y=v.product||v,m=Number(y.price||y.salePrice||0);return h+m*(v.quantity||1)},0),[t]);return b.useEffect(()=>{l();const h=v=>{v.key==="arke_token"&&!v.newValue&&f()};return window.addEventListener("storage",h),()=>window.removeEventListener("storage",h)},[l,f]),o.jsx(Zu.Provider,{value:{items:t,loading:r,error:a,addToCart:c,removeFromCart:d,updateQuantity:g,clearCart:f,loadCart:l,getCartCount:p,getCartTotal:w},children:e})}function yi(){const e=ct.useContext(Zu);if(!e)throw new Error("useCart must be used within CartProvider");return e}const ep=b.createContext();function im({children:e}){const[t,n]=b.useState([]),r=b.useCallback((d,g="info",f=3e3)=>{const p=Date.now(),w={id:p,message:d,type:g};return n(h=>[...h,w]),f>0&&setTimeout(()=>{n(h=>h.filter(v=>v.id!==p))},f),p},[]),i=b.useCallback(d=>{n(g=>g.filter(f=>f.id!==d))},[]),a=(d,g)=>r(d,"success",g),s=(d,g)=>r(d,"error",g),l=(d,g)=>r(d,"info",g),c=(d,g)=>r(d,"warning",g);return o.jsxs(ep.Provider,{value:{showToast:r,removeToast:i,success:a,error:s,info:l,warning:c},children:[e,o.jsx(am,{toasts:t,onRemove:i})]})}function tr(){const e=ct.useContext(ep);if(!e)throw new Error("useToast must be used within ToastProvider");return e}function am({toasts:e,onRemove:t}){return o.jsx("div",{style:{position:"fixed",top:100,right:20,zIndex:9999,display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:e.map(n=>o.jsx(sm,{toast:n,onRemove:()=>t(n.id)},n.id))})}function sm({toast:e,onRemove:t}){const n={success:{bg:"rgba(79, 195, 247, 0.95)",icon:"✓",color:"#fff"},error:{bg:"rgba(244, 67, 54, 0.95)",icon:"✕",color:"#fff"},info:{bg:"rgba(33, 150, 243, 0.95)",icon:"ℹ",color:"#fff"},warning:{bg:"rgba(255, 152, 0, 0.95)",icon:"⚠",color:"#fff"}},r=n[e.type]||n.info;return o.jsxs("div",{style:{background:r.bg,color:r.color,padding:"14px 18px",borderRadius:6,display:"flex",alignItems:"center",gap:12,boxShadow:"0 4px 12px rgba(0,0,0,0.15)",animation:"slideInRight 0.3s ease-out",fontFamily:"'Jost', sans-serif",fontSize:13},children:[o.jsx("span",{style:{fontSize:16,flexShrink:0},children:r.icon}),o.jsx("span",{style:{flex:1},children:e.message}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"inherit",cursor:"pointer",fontSize:16,padding:0,opacity:.7,transition:"opacity 0.2s"},onMouseEnter:i=>i.target.style.opacity=1,onMouseLeave:i=>i.target.style.opacity=.7,children:"×"}),o.jsx("style",{children:`
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
      `})]})}const re={surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",lavender:"#d4c4e0",border:"#e8ddd4"};let hc=!1;function lm(e){hc||(hc=!0,console.log("🔍 Product image debug:",{"product.images":e==null?void 0:e.images,"product.image":e==null?void 0:e.image,"product.thumbnail":e==null?void 0:e.thumbnail,"product.imageUrl":e==null?void 0:e.imageUrl,"product.img":e==null?void 0:e.img,"full product keys":Object.keys(e||{})}))}function yc(e,t=0){if(Array.isArray(e==null?void 0:e.image)){const n=e.image[t],r=ze(n);if(r)return r}for(const n of["images","imageUrl","img","photos","gallery"])if(Array.isArray(e==null?void 0:e[n])&&e[n].length>t){const r=ze(e[n][t]);if(r)return r}if(t===0){for(const n of["image","imageUrl","img","thumbnail","photo","picture"])if(e!=null&&e[n]&&!Array.isArray(e[n])){const r=ze(e[n]);if(r)return r}}return null}function nn({product:e}){const t=yt(),{addToCart:n}=yi(),{success:r,error:i}=tr(),[a,s]=b.useState(!1),[l,c]=b.useState("idle"),[d,g]=b.useState(!1),[f,p]=b.useState(!1);lm(e);const w=(e==null?void 0:e.name)||(e==null?void 0:e.title)||"Product",h=(e==null?void 0:e.price)||(e==null?void 0:e.salePrice)||(e==null?void 0:e.mrp)||0,v=(e==null?void 0:e.mrp)||(e==null?void 0:e.originalPrice),y=yc(e,0),m=yc(e,1),u=(e==null?void 0:e._id)||(e==null?void 0:e.id),x=v&&v>h?Math.round((v-h)/v*100):0,k=async $=>{if($.stopPropagation(),!localStorage.getItem("arke_token")){alert("Please login to add to cart");return}if(!(l==="loading"||l==="added")){c("loading");try{const S={name:(e==null?void 0:e.name)||(e==null?void 0:e.title)||"Product",price:(e==null?void 0:e.price)||(e==null?void 0:e.salePrice)||(e==null?void 0:e.mrp)||0,image:y,images:[y,m].filter(Boolean),description:(e==null?void 0:e.description)||"",material:(e==null?void 0:e.material)||(e==null?void 0:e.metalType)||"",weight:(e==null?void 0:e.weight)||"",size:(e==null?void 0:e.size)||"",sku:(e==null?void 0:e.sku)||(e==null?void 0:e.productCode)||"",stock:(e==null?void 0:e.stock)||0};await n(u,1,S),c("added"),setTimeout(()=>c("idle"),2500)}catch(S){console.error("❌ Add to cart error:",S),c("error"),setTimeout(()=>c("idle"),2500)}}},N=async $=>{if($.stopPropagation(),!localStorage.getItem("arke_token")){alert("Please login to save items");return}try{p(!f)}catch(S){console.error("❌ Wishlist error:",S),p(!f)}},j={idle:{label:"Add to Cart",bg:`linear-gradient(135deg, ${re.rose}, ${re.burgundy})`,color:"white"},loading:{label:"Adding…",bg:"rgba(232,180,196,0.6)",color:"white"},added:{label:"✓ Added to Cart",bg:`linear-gradient(135deg, ${re.rose}, ${re.burgundy})`,color:"white"},error:{label:"Try Again",bg:"linear-gradient(135deg, #d97070, #c45c5c)",color:"white"}}[l];return o.jsxs("div",{style:{cursor:"pointer",position:"relative",overflow:"hidden",background:re.surface,border:`1px solid ${re.border}`,borderRadius:"12px",transition:"all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:a?"0 20px 48px rgba(139, 70, 84, 0.25)":"0 4px 16px rgba(0,0,0,0.08)",transform:a?"translateY(-6px)":"translateY(0)"},onMouseEnter:()=>s(!0),onMouseLeave:()=>s(!1),onClick:()=>t(`/product/${u}`),children:[o.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .heart-beat {
          animation: pulse 0.4s ease-in-out;
        }
      `}),o.jsxs("div",{style:{position:"relative",overflow:"hidden",aspectRatio:"3/4",background:`linear-gradient(135deg, ${re.blush}, ${re.champagne})`},children:[y&&!d?o.jsxs(o.Fragment,{children:[o.jsx("img",{src:y,alt:w,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:a?"scale(1.08)":"scale(1)"},onError:()=>g(!0)}),m&&o.jsx("img",{src:m,alt:`${w} - alternate`,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:a?1:0,transition:"opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"},onError:()=>{}})]}):o.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,background:`linear-gradient(135deg, ${re.blush}, ${re.lavender})`},children:[o.jsx("span",{style:{color:"rgba(232,180,196,0.3)",fontSize:48},children:"◇"}),o.jsx("span",{style:{color:re.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:500},children:"No Image"})]}),o.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(250,248,245,0.95) 0%, rgba(250,248,245,0.5) 45%, transparent 100%)",opacity:a?1:0,transition:"opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"16px",opacity:a?1:0,transition:"opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",pointerEvents:a?"auto":"none"},children:o.jsx("button",{onClick:k,disabled:l==="loading",style:{width:"100%",padding:"12px 0",background:j.bg,color:j.color,border:"none",cursor:l==="loading"?"not-allowed":"pointer",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.2px",textTransform:"uppercase",fontWeight:600,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px",boxShadow:l==="added"?"0 4px 12px rgba(232,180,196,0.35)":"0 2px 8px rgba(232,180,196,0.2)"},onMouseEnter:$=>{l!=="loading"&&($.target.style.transform="translateY(-2px)")},onMouseLeave:$=>{$.target.style.transform="translateY(0)"},children:j.label})}),x>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:`linear-gradient(135deg, ${re.rose}, ${re.burgundy})`,color:"white",fontFamily:"'Poppins', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.5px",padding:"6px 11px",borderRadius:"6px",boxShadow:"0 4px 12px rgba(139, 70, 84, 0.3)",zIndex:2},children:[x,"% OFF"]}),o.jsx("button",{onClick:N,className:f?"heart-beat":"",style:{position:"absolute",top:12,right:12,background:f?`linear-gradient(135deg, ${re.rose}, ${re.burgundy})`:"rgba(250,248,245,0.8)",backdropFilter:"blur(12px)",border:f?"none":`1.5px solid ${re.rose}`,color:f?"white":re.rose,width:38,height:38,borderRadius:"50%",cursor:"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",opacity:a?1:.9,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",zIndex:2,boxShadow:f?"0 4px 12px rgba(232,180,196,0.35)":"none"},onMouseEnter:$=>{f||($.target.style.background="rgba(250,248,245,0.95)",$.target.style.borderColor=re.burgundy,$.target.style.color=re.burgundy)},onMouseLeave:$=>{f||($.target.style.background="rgba(250,248,245,0.8)",$.target.style.borderColor=re.rose,$.target.style.color=re.rose)},children:f?"♥":"♡"})]}),o.jsxs("div",{style:{padding:"16px 14px 18px",background:re.surface},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:16,fontWeight:400,color:re.text,letterSpacing:"0.5px",marginBottom:10,lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",transition:"color 0.3s"},title:w,children:w}),o.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"},children:[o.jsxs("span",{style:{color:re.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:14,fontWeight:700,letterSpacing:"0.3px"},children:["₹",Number(h).toLocaleString("en-IN")]}),v&&v>h&&o.jsxs("span",{style:{color:re.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:12,textDecoration:"line-through",fontWeight:500,opacity:.7},children:["₹",Number(v).toLocaleString("en-IN")]})]}),(e==null?void 0:e.stock)!==void 0&&o.jsx("div",{style:{marginTop:8,fontSize:10,fontFamily:"'Poppins', sans-serif",color:(e==null?void 0:e.stock)>0?re.rose:"#d97070",fontWeight:600,letterSpacing:"0.5px"},children:(e==null?void 0:e.stock)>0?"✓ In Stock":"Out of Stock"})]}),o.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:a?.8:0,pointerEvents:"none",transition:"opacity 0.3s",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(4px)",padding:"8px 16px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:11,color:"white",fontWeight:600,letterSpacing:"1px",textTransform:"uppercase",zIndex:1},children:"Quick View"})]})}const z={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",roseGold:"#c78a7f",champagne:"#e8d4c2",lavender:"#d4c4e0",border:"#e8ddd4",borderLight:"#f0ebe5"};function nr(){const e=b.useRef(null),[t,n]=b.useState(!1);return b.useEffect(()=>{const r=setTimeout(()=>n(!0),200),i=new IntersectionObserver(([a])=>{a.isIntersecting&&(n(!0),clearTimeout(r),i.disconnect())},{threshold:.12});return e.current&&i.observe(e.current),()=>{clearTimeout(r),i.disconnect()}},[]),[e,t]}function cm({banners:e}){const[t,n]=b.useState(0),[r,i]=b.useState(!0),[a,s]=b.useState(!1);b.useEffect(()=>{const d=setTimeout(()=>s(!0),100);return()=>clearTimeout(d)},[]),b.useEffect(()=>{if(!(e!=null&&e.length))return;const d=setInterval(()=>{i(!1),setTimeout(()=>{n(g=>(g+1)%e.length),i(!0)},700)},6500);return()=>clearInterval(d)},[e]);const l=e==null?void 0:e[t],c=ze((l==null?void 0:l.image)||(l==null?void 0:l.imageUrl));return o.jsxs("section",{style:{position:"relative",height:"100vh",minHeight:680,maxHeight:1080,display:"flex",alignItems:"center",overflow:"hidden",marginTop:106},children:[o.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Poppins:wght@300;400;500;600;700&display=swap');

        @keyframes heroBgZoom {
          0%   { transform: scale(1.08); }
          100% { transform: scale(1); }
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

        .hero-bg-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          transition: opacity 0.8s cubic-bezier(0.4,0,0.2,1);
        }
        .hero-bg-img.zoom-in {
          animation: heroBgZoom 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .hero-eyebrow {
          opacity: 0;
          animation: heroFadeLeft 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.2s forwards;
        }
        .hero-h1 {
          opacity: 0;
          animation: heroFadeUp 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.4s forwards;
        }
        .hero-divider {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.55s forwards;
        }
        .hero-sub {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.65s forwards;
        }
        .hero-cta {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.75s forwards;
        }
        .hero-stats {
          opacity: 0;
          animation: heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.9s forwards;
        }
        .scroll-bounce {
          animation: scrollBounce 1.8s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hero-content-wrap {
            padding: 0 28px !important;
            max-width: 100% !important;
          }
          .hero-h1-text {
            font-size: clamp(44px, 11vw, 72px) !important;
          }
          .hero-stats-row {
            gap: 28px !important;
          }
          .hero-cta-row {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
        }
        @media (max-width: 480px) {
          .hero-content-wrap {
            padding: 0 20px !important;
          }
        }
      `}),o.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",zIndex:0},children:c?o.jsx("img",{src:c,alt:(l==null?void 0:l.title)||"Collection",className:"hero-bg-img zoom-in",style:{opacity:r?1:0}},t):o.jsx("div",{style:{position:"absolute",inset:0,background:`linear-gradient(135deg,
                ${z.blush} 0%,
                ${z.champagne} 40%,
                ${z.lavender} 100%
              )`}})}),o.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,background:`linear-gradient(
            105deg,
            rgba(10,5,15,0.72) 0%,
            rgba(10,5,15,0.55) 38%,
            rgba(10,5,15,0.18) 65%,
            transparent 100%
          )`}}),o.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,background:`linear-gradient(
            to top,
            rgba(10,5,15,0.55) 0%,
            transparent 40%
          )`}}),o.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"35%",zIndex:1,background:`linear-gradient(
            to top,
            rgba(139,70,84,0.22) 0%,
            transparent 100%
          )`}}),o.jsx("div",{style:{position:"absolute",left:52,top:"15%",bottom:"15%",width:1,background:`linear-gradient(
            to bottom,
            transparent,
            rgba(232,180,196,0.55) 30%,
            rgba(232,180,196,0.55) 70%,
            transparent
          )`,zIndex:2}}),o.jsxs("div",{className:"hero-content-wrap",style:{position:"relative",zIndex:3,padding:"0 80px 0 84px",maxWidth:720,width:"100%"},children:[o.jsxs("div",{className:"hero-eyebrow",style:{display:"flex",alignItems:"center",gap:14,marginBottom:26},children:[o.jsx("div",{style:{width:36,height:1.5,background:`linear-gradient(to right, ${z.rose}, ${z.burgundy})`,borderRadius:2}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10.5,letterSpacing:"3px",textTransform:"uppercase",color:z.rose,fontWeight:600},children:(l==null?void 0:l.eyebrow)||"Timeless Collection"})]}),o.jsx("h1",{className:"hero-h1 hero-h1-text",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(52px, 6.5vw, 100px)",fontWeight:300,lineHeight:1,letterSpacing:"-1px",marginBottom:28,color:"#fff"},children:l!=null&&l.title?o.jsx("span",{style:{background:"linear-gradient(135deg, #fff 0%, rgba(232,180,196,0.9) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:l.title}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{display:"block",background:"linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.85) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Wear it"}),o.jsx("em",{style:{fontStyle:"italic",display:"block",background:`linear-gradient(135deg, ${z.rose} 0%, ${z.blush} 50%, ${z.champagne} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"your way"})]})}),o.jsxs("div",{className:"hero-divider",style:{display:"flex",alignItems:"center",gap:12,marginBottom:26},children:[o.jsx("div",{style:{width:52,height:1,background:"linear-gradient(to right, rgba(232,180,196,0.8), transparent)"}}),o.jsx("div",{style:{width:5,height:5,background:z.rose,borderRadius:"50%",boxShadow:"0 0 10px rgba(232,180,196,0.6)"}}),o.jsx("div",{style:{width:52,height:1,background:"linear-gradient(to left, rgba(232,180,196,0.8), transparent)"}})]}),o.jsx("p",{className:"hero-sub",style:{color:"rgba(255,255,255,0.72)",fontFamily:"'Poppins', sans-serif",fontSize:14.5,lineHeight:1.85,marginBottom:44,maxWidth:480,letterSpacing:"0.3px",fontWeight:300},children:(l==null?void 0:l.description)||"Handcrafted luxury jewellery for every moment. Waterproof, tarnish-proof, and ethically sourced."}),o.jsxs("div",{className:"hero-cta hero-cta-row",style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap"},children:[o.jsx(bc,{to:"/new-collection",primary:!0,children:"Explore Now"}),o.jsx(bc,{to:"/products",children:"Shop All"})]}),o.jsx("div",{className:"hero-stats hero-stats-row",style:{display:"flex",gap:40,marginTop:52,paddingTop:28,borderTop:"1px solid rgba(232,180,196,0.2)"},children:[["2000+","Designs"],["50K+","Customers"],["4.9★","Rating"]].map(([d,g])=>o.jsxs("div",{children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:30,fontWeight:400,background:`linear-gradient(135deg, ${z.rose}, ${z.champagne})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",lineHeight:1},children:d}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9.5,letterSpacing:"1.8px",textTransform:"uppercase",color:"rgba(255,255,255,0.45)",marginTop:7,fontWeight:500},children:g})]},g))})]}),o.jsxs("div",{style:{position:"absolute",right:72,top:"50%",transform:"translateY(-50%)",zIndex:3,display:"flex",flexDirection:"column",alignItems:"center",gap:16,opacity:.85},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,letterSpacing:"3px",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",writingMode:"vertical-rl",transform:"rotate(180deg)"},children:(l==null?void 0:l.tag)||"New Arrivals"}),o.jsx("div",{style:{width:1,height:64,background:"linear-gradient(to bottom, transparent, rgba(232,180,196,0.4))"}})]}),(e==null?void 0:e.length)>1&&o.jsx("div",{style:{position:"absolute",bottom:44,left:"50%",transform:"translateX(-50%)",display:"flex",gap:10,zIndex:4,alignItems:"center"},children:e.map((d,g)=>o.jsx("button",{onClick:()=>{i(!1),setTimeout(()=>{n(g),i(!0)},300)},style:{width:g===t?32:8,height:2.5,background:g===t?`linear-gradient(90deg, ${z.rose}, ${z.champagne})`:"rgba(255,255,255,0.25)",border:"none",cursor:"pointer",transition:"all 0.45s cubic-bezier(0.34,1.56,0.64,1)",borderRadius:4,padding:0}},g))}),o.jsxs("div",{style:{position:"absolute",bottom:44,left:84,zIndex:4,display:"flex",flexDirection:"column",alignItems:"center",gap:10},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:8.5,letterSpacing:"2.5px",color:"rgba(255,255,255,0.35)",textTransform:"uppercase",writingMode:"vertical-rl",transform:"rotate(180deg)"},children:"Scroll"}),o.jsx("div",{style:{width:20,height:32,border:"1px solid rgba(232,180,196,0.35)",borderRadius:12,display:"flex",alignItems:"flex-start",justifyContent:"center",padding:"5px 0"},children:o.jsx("div",{className:"scroll-bounce",style:{width:4,height:4,borderRadius:"50%",background:z.rose,boxShadow:"0 0 8px rgba(232,180,196,0.8)"}})})]}),(e==null?void 0:e.length)>1&&o.jsxs("div",{style:{position:"absolute",bottom:44,right:72,zIndex:4,display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:400,color:z.rose,lineHeight:1},children:String(t+1).padStart(2,"0")}),o.jsxs("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,color:"rgba(255,255,255,0.25)",letterSpacing:"1px"},children:["/ ",String(e.length).padStart(2,"0")]})]})]})}function bc({to:e,children:t,primary:n}){const[r,i]=b.useState(!1);return o.jsxs(Me,{to:e,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),style:{display:"inline-flex",alignItems:"center",gap:10,padding:n?"15px 36px":"14px 30px",background:n?r?`linear-gradient(135deg, ${z.burgundy}, #a85060)`:`linear-gradient(135deg, ${z.rose}, ${z.roseGold})`:"rgba(255,255,255,0.08)",color:n||r?"#fff":"rgba(255,255,255,0.75)",border:n?"none":`1px solid ${r?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)"}`,backdropFilter:n?"none":"blur(12px)",textDecoration:"none",fontFamily:"'Poppins', sans-serif",fontSize:10.5,letterSpacing:"2px",textTransform:"uppercase",fontWeight:n?600:500,transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",transform:r?"translateY(-3px)":"translateY(0)",boxShadow:n&&r?"0 12px 32px rgba(232,180,196,0.45)":n?"0 4px 16px rgba(232,180,196,0.25)":"none",cursor:"pointer",borderRadius:"2px"},children:[n&&o.jsx("span",{style:{fontSize:12,opacity:.9},children:"✦"}),t,n&&o.jsx("span",{style:{fontSize:13},children:"→"})]})}function dm(){const[e,t]=nr(),n=[{icon:"💎",label:"Premium Quality",sub:"Certified & Pure"},{icon:"💧",label:"Waterproof",sub:"Everyday Wear"},{icon:"✨",label:"Tarnish-Proof",sub:"Lasts 2+ Years"},{icon:"🌍",label:"Ethical",sub:"Responsibly Sourced"}];return o.jsx("div",{ref:e,style:{background:z.surface,borderTop:`1px solid ${z.border}`,borderBottom:`1px solid ${z.border}`,padding:"52px 80px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:32,opacity:t?1:0,transform:t?"none":"translateY(20px)",transition:"opacity 0.7s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1)"},children:n.map((r,i)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"0 16px"},children:[o.jsx("div",{style:{fontSize:32,marginBottom:14},children:r.icon}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,letterSpacing:"1px",textTransform:"uppercase",color:z.text,fontWeight:600,marginBottom:6},children:r.label}),o.jsx("div",{style:{color:z.textMuted,fontSize:12,fontFamily:"'Poppins', sans-serif",fontWeight:400},children:r.sub})]},i))})}function Gs({eyebrow:e,title:t,cta:n,ctaLink:r}){return o.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:52,flexWrap:"wrap",gap:24},children:[o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[o.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(to right, ${z.rose}, ${z.burgundy})`}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:z.burgundy,fontWeight:600},children:e})]}),o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 4vw, 52px)",fontWeight:300,color:z.text,letterSpacing:"-0.5px",lineHeight:1.1,background:`linear-gradient(135deg, ${z.text}, ${z.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:t})]}),n&&o.jsx(tp,{to:r,children:n})]})}function tp({to:e,children:t}){const[n,r]=b.useState(!1);return o.jsxs(Me,{to:e,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:n?z.burgundy:z.rose,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,paddingBottom:2,borderBottom:`1.5px solid ${n?z.burgundy:z.rose}`,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",fontWeight:600},children:[t," →"]})}function um({cats:e}){const[t,n]=nr(),r=yt();return e!=null&&e.length?o.jsxs("section",{ref:t,style:{padding:"100px 80px",background:z.surface,opacity:n?1:0,transform:n?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsx(Gs,{eyebrow:"Explore",title:"Shop by Category",cta:"View All",ctaLink:"/products"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(e.length,5)}, 1fr)`,gap:20},children:e.slice(0,5).map((i,a)=>{const s=qo(i),l=Gu(i),c=Hs(i);return o.jsx(pm,{name:s,img:l,delay:a*80,onClick:()=>c&&r(`/products?category=${c}`)},a)})})]}):null}function pm({name:e,img:t,onClick:n,delay:r}){const[i,a]=b.useState(!1);return o.jsxs("div",{onClick:n,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),style:{position:"relative",cursor:"pointer",overflow:"hidden",aspectRatio:"2/3",borderRadius:"8px",transform:i?"translateY(-6px)":"translateY(0)",boxShadow:i?"0 24px 48px rgba(139,70,84,0.2)":"0 8px 20px rgba(0,0,0,0.08)",transition:"transform 0.4s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s",transitionDelay:`${r}ms`},children:[t?o.jsx("img",{src:t,alt:e,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",transform:i?"scale(1.08)":"scale(1)"}}):o.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${z.blush}, ${z.champagne})`}}),o.jsx("div",{style:{position:"absolute",inset:0,background:`linear-gradient(to top,
            rgba(250,248,245,0.95) 0%,
            rgba(250,248,245,0.5) 50%,
            transparent 100%
          )`}}),o.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"28px 20px"},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:400,color:z.text,letterSpacing:1,marginBottom:10},children:e}),o.jsx("div",{style:{width:i?48:24,height:1.5,background:`linear-gradient(90deg, ${z.rose}, ${z.burgundy})`,transition:"width 0.4s cubic-bezier(0.34,1.56,0.64,1)"}})]}),o.jsx("div",{style:{position:"absolute",top:16,right:16,background:"rgba(232,180,196,0.9)",backdropFilter:"blur(12px)",padding:"6px 12px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:9,fontWeight:600,letterSpacing:"1px",textTransform:"uppercase",color:z.text,opacity:i?1:.8,transition:"opacity 0.3s"},children:"Shop ↗"})]})}function vc({eyebrow:e,title:t,products:n,ctaLink:r,bg:i}){const[a,s]=nr();return n!=null&&n.length?o.jsxs("section",{ref:a,style:{padding:"100px 80px",background:i||z.bg,opacity:s?1:0,transform:s?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsx(Gs,{eyebrow:e,title:t,cta:"View All",ctaLink:r}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:24},children:n.slice(0,4).map((l,c)=>o.jsx(nn,{product:l},l._id||c))})]}):null}function fm({blogs:e}){const[t,n]=nr(),r=yt();return e!=null&&e.length?o.jsxs("section",{ref:t,style:{padding:"120px 80px",background:z.surface,borderTop:`1.5px solid ${z.border}`,borderBottom:`1.5px solid ${z.border}`,opacity:n?1:0,transform:n?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsx("style",{children:`
        @keyframes blogFadeUp {
          from {
            opacity: 0;
            transform: translateY(32px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .featured-blog {
          animation: blogFadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.15s both;
        }

        .side-blog {
          animation: blogFadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .compact-blog {
          animation: blogFadeUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        @media (max-width: 1024px) {
          .blog-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}),o.jsxs("div",{style:{marginBottom:80,position:"relative"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[o.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(to right, ${z.rose}, ${z.burgundy})`,borderRadius:2}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10.5,letterSpacing:"2.5px",textTransform:"uppercase",color:z.burgundy,fontWeight:600},children:"Stories & Inspiration"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:40,flexWrap:"wrap"},children:[o.jsxs("div",{style:{maxWidth:480},children:[o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(36px, 4vw, 56px)",fontWeight:300,color:z.text,letterSpacing:"-0.5px",lineHeight:1.1,marginBottom:20,background:`linear-gradient(135deg, ${z.text}, ${z.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"From the Journal"}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13.5,color:z.textMuted,lineHeight:1.8,letterSpacing:"0.3px"},children:"Explore stories about craftsmanship, styling tips, and the art of wearing jewellery with confidence."})]}),o.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:o.jsx(tp,{to:"/blog",children:"All Stories"})})]})]}),o.jsxs("div",{className:"blog-grid",style:{display:"grid",gridTemplateColumns:"1.6fr 1fr",gap:48,alignItems:"start"},children:[e[0]&&o.jsx(gm,{blog:e[0],onClick:()=>r("/blog")}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:e.slice(1,4).map((i,a)=>o.jsx(mm,{blog:i,delay:a*100,onClick:()=>r("/blog")},a))})]}),e.length>4&&o.jsxs("div",{style:{marginTop:80,paddingTop:60,borderTop:`1px solid ${z.borderLight}`},children:[o.jsx("h3",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,letterSpacing:"1.8px",textTransform:"uppercase",color:z.textMuted,fontWeight:600,marginBottom:40},children:"More Stories"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:32},children:e.slice(4,7).map((i,a)=>o.jsx(xm,{blog:i,delay:a*80,onClick:()=>r("/blog")},a))})]})]}):null}function gm({blog:e,onClick:t}){var s;const[n,r]=b.useState(!1),i=ze(e.image||e.thumbnail||e.featuredImage),a=e.readTime||Math.ceil((((s=e.content)==null?void 0:s.length)||0)/200);return o.jsxs("div",{onClick:t,onMouseEnter:()=>r(!0),onMouseLeave:()=>r(!1),className:"featured-blog",style:{cursor:"pointer",overflow:"hidden",borderRadius:"12px",position:"relative",height:"100%",display:"flex",flexDirection:"column",transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",transform:n?"translateY(-8px)":"translateY(0)"},children:[o.jsxs("div",{style:{position:"relative",aspectRatio:"4/3",overflow:"hidden",marginBottom:32,borderRadius:"8px",boxShadow:n?"0 24px 48px rgba(139,70,84,0.2)":"0 12px 28px rgba(139,70,84,0.12)",transition:"box-shadow 0.4s, filter 0.4s"},children:[i?o.jsx("img",{src:i,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.7s cubic-bezier(0.34,1.56,0.64,1)",transform:n?"scale(1.06)":"scale(1)"}}):o.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${z.blush}, ${z.lavender})`}}),o.jsxs("div",{style:{position:"absolute",top:20,left:20,background:"rgba(232,180,196,0.95)",backdropFilter:"blur(12px)",padding:"8px 16px",borderRadius:"24px",fontFamily:"'Poppins', sans-serif",fontSize:9,fontWeight:700,letterSpacing:"1.2px",textTransform:"uppercase",color:z.text,display:"flex",alignItems:"center",gap:6,zIndex:10},children:[o.jsx("span",{children:"✦"}),"Featured"]}),o.jsxs("div",{style:{position:"absolute",bottom:20,right:20,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(12px)",padding:"8px 14px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:8,fontWeight:600,letterSpacing:"0.8px",color:z.text},children:[a," min read"]})]}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[o.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:400,color:n?z.burgundy:z.text,lineHeight:1.4,marginBottom:16,transition:"color 0.3s"},children:e.title}),e.excerpt&&o.jsx("p",{style:{color:z.textMuted,fontSize:13,fontFamily:"'Poppins', sans-serif",lineHeight:1.8,marginBottom:24,fontWeight:400,flex:1},children:e.excerpt.length>140?e.excerpt.slice(0,140)+"...":e.excerpt}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:16,borderTop:`1px solid ${z.borderLight}`},children:[o.jsx("div",{style:{display:"flex",alignItems:"center",gap:12},children:e.author&&o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:`linear-gradient(135deg, ${z.rose}, ${z.burgundy})`,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:12,fontWeight:700},children:e.author.charAt(0).toUpperCase()}),o.jsxs("div",{children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,fontWeight:600,color:z.text},children:e.author}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,color:z.textMuted,letterSpacing:"0.5px"},children:e.date||e.createdAt?new Date(e.date||e.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""})]})]})}),o.jsx("div",{style:{color:n?z.burgundy:z.rose,fontSize:12,fontFamily:"'Poppins', sans-serif",letterSpacing:"1px",textTransform:"uppercase",fontWeight:700,transition:"color 0.3s"}})]})]})]})}function mm({blog:e,onClick:t,delay:n}){const[r,i]=b.useState(!1),a=ze(e.image||e.thumbnail||e.featuredImage);return o.jsxs("div",{onClick:t,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"side-blog",style:{cursor:"pointer",display:"grid",gridTemplateColumns:"120px 1fr",gap:16,padding:16,background:z.bg,borderRadius:"8px",border:`1px solid ${z.borderLight}`,transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",transform:r?"translateX(4px)":"translateX(0)",animationDelay:`${n}ms`},children:[o.jsx("div",{style:{aspectRatio:"1",overflow:"hidden",borderRadius:"6px",boxShadow:r?"0 8px 16px rgba(139,70,84,0.15)":"none",transition:"all 0.3s",flexShrink:0},children:a?o.jsx("img",{src:a,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",transform:r?"scale(1.08)":"scale(1)"}}):o.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${z.blush}, ${z.champagne})`}})}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:120},children:[o.jsx("div",{children:o.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:16,fontWeight:400,color:r?z.burgundy:z.text,lineHeight:1.3,marginBottom:8,transition:"color 0.3s"},children:e.title.length>50?e.title.slice(0,50)+"...":e.title})}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:10},children:[o.jsx("span",{style:{color:z.textMuted,fontFamily:"'Poppins', sans-serif",letterSpacing:"0.3px"},children:e.date||e.createdAt?new Date(e.date||e.createdAt).toLocaleDateString("en-IN",{month:"short",day:"numeric"}):""}),o.jsx("span",{style:{color:z.rose,fontFamily:"'Poppins', sans-serif",letterSpacing:"0.8px",fontWeight:600},children:"→"})]})]})]})}function xm({blog:e,onClick:t,delay:n}){const[r,i]=b.useState(!1),a=ze(e.image||e.thumbnail||e.featuredImage);return o.jsxs("div",{onClick:t,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"compact-blog",style:{cursor:"pointer",transition:"transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",transform:r?"translateY(-4px)":"translateY(0)",animationDelay:`${n}ms`},children:[o.jsxs("div",{style:{overflow:"hidden",aspectRatio:"16/10",marginBottom:20,position:"relative",borderRadius:"8px",boxShadow:r?"0 16px 32px rgba(139,70,84,0.15)":"0 8px 16px rgba(139,70,84,0.08)",transition:"box-shadow 0.4s"},children:[a?o.jsx("img",{src:a,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",transform:r?"scale(1.05)":"scale(1)"}}):o.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${z.blush}, ${z.lavender})`}}),o.jsx("div",{style:{position:"absolute",bottom:12,left:12,background:"rgba(232,180,196,0.9)",backdropFilter:"blur(12px)",padding:"6px 12px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:8,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:z.text},children:e.category||"Jewellery"})]}),o.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,fontWeight:400,color:r?z.burgundy:z.text,lineHeight:1.4,marginBottom:12,transition:"color 0.3s"},children:e.title}),e.excerpt&&o.jsxs("p",{style:{color:z.textMuted,fontSize:12,fontFamily:"'Poppins', sans-serif",lineHeight:1.6,marginBottom:16,fontWeight:400,minHeight:36},children:[e.excerpt.slice(0,80),"..."]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:12,borderTop:`1px solid ${z.borderLight}`},children:[o.jsx("span",{style:{color:z.textMuted,fontSize:10,fontFamily:"'Poppins', sans-serif",letterSpacing:"0.5px",fontWeight:500},children:e.date||e.createdAt?new Date(e.date||e.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short"}):""}),o.jsx("span",{style:{color:z.rose,fontSize:10,fontFamily:"'Poppins', sans-serif",letterSpacing:"1px",textTransform:"uppercase",fontWeight:700},children:o.jsx(Me,{to:"/blog",style:{color:"inherit",textDecoration:"none"},children:"Read →"})})]})]})}function hm(){const[e,t]=nr(),[n,r]=b.useState(""),[i,a]=b.useState(!1),[s,l]=b.useState(!1),c=async()=>{if(!n||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)){alert("Please enter a valid email");return}l(!0);try{await new Promise(d=>setTimeout(d,500)),a(!0),r(""),setTimeout(()=>a(!1),4e3)}catch(d){console.error(d)}finally{l(!1)}};return o.jsx("section",{ref:e,style:{padding:"80px 40px",background:z.bg,borderTop:`1px solid ${z.border}`,opacity:t?1:0,transform:t?"none":"translateY(24px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:o.jsxs("div",{style:{maxWidth:600,margin:"0 auto",textAlign:"center"},children:[o.jsx("div",{style:{display:"inline-block",marginBottom:20},children:o.jsx("span",{style:{color:z.rose,fontSize:28},children:"✨"})}),o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(28px, 3.5vw, 48px)",fontWeight:300,color:z.text,marginBottom:14,lineHeight:1.2,background:`linear-gradient(135deg, ${z.text}, ${z.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Stay in the Loop"}),o.jsx("p",{style:{color:z.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:14,marginBottom:36,lineHeight:1.7},children:"Get exclusive access to new collections, style tips, and special offers. Join our community of elegant jewellery lovers."}),i?o.jsx("div",{style:{padding:"16px",background:"linear-gradient(135deg, rgba(232,180,196,0.1), rgba(139,70,84,0.08))",borderRadius:"6px",border:`1px solid ${z.rose}`,color:z.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:13,fontWeight:600,letterSpacing:"0.5px"},children:"✓ Welcome! Check your email for exclusive offers."}):o.jsxs("div",{style:{display:"flex",gap:0,maxWidth:450,margin:"0 auto",boxShadow:"0 8px 24px rgba(139,70,84,0.15)",borderRadius:"6px",overflow:"hidden"},children:[o.jsx("input",{type:"email",placeholder:"your@email.com",value:n,onChange:d=>r(d.target.value),onKeyPress:d=>d.key==="Enter"&&c(),style:{flex:1,padding:"14px 20px",background:z.surface,border:"none",color:z.text,fontFamily:"'Poppins', sans-serif",fontSize:12,outline:"none",letterSpacing:"0.5px"}}),o.jsx("button",{onClick:c,disabled:s,style:{padding:"14px 28px",background:`linear-gradient(135deg, ${z.rose}, ${z.burgundy})`,border:"none",color:"white",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,cursor:s?"not-allowed":"pointer",transition:"all 0.3s",opacity:s?.7:1},onMouseEnter:d=>{s||(d.target.style.transform="translateY(-2px)")},onMouseLeave:d=>{d.target.style.transform="translateY(0)"},children:s?"...":"Subscribe"})]}),o.jsx("p",{style:{color:z.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,marginTop:16,letterSpacing:"0.5px"},children:"We respect your privacy. Unsubscribe anytime."})]})})}function ym({products:e}){const[t,n]=nr();return e!=null&&e.length?o.jsxs("section",{ref:t,style:{padding:"100px 80px",background:z.bg,opacity:n?1:0,transform:n?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsx(Gs,{eyebrow:"Complete Collection",title:"All Products",cta:"Explore More",ctaLink:"/products"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:24},children:e.slice(0,12).map((r,i)=>o.jsx(nn,{product:r},r._id||i))})]}):null}function bm(){return o.jsxs("div",{style:{background:z.bg,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:24},children:[o.jsx("style",{children:`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .loader { animation: spin 1s linear infinite; }
      `}),o.jsx("div",{className:"loader",style:{width:48,height:48,border:`2px solid ${z.borderLight}`,borderTopColor:z.rose,borderRadius:"50%"}}),o.jsx("div",{style:{color:z.textMuted,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",fontFamily:"'Poppins', sans-serif",fontWeight:600},children:"Curating Your Experience..."})]})}function vm({error:e,onRetry:t}){return o.jsxs("div",{style:{background:z.bg,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:40,textAlign:"center"},children:[o.jsx("div",{style:{color:z.rose,fontSize:56,marginBottom:24},children:"✨"}),o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:36,fontWeight:300,color:z.text,marginBottom:16},children:"Oops, Something Went Wrong"}),o.jsx("p",{style:{color:z.textMuted,fontSize:14,fontFamily:"'Poppins', sans-serif",lineHeight:1.7,maxWidth:500,marginBottom:32},children:e||"We're having trouble loading our collection. Please try again."}),o.jsx("button",{onClick:t,style:{padding:"12px 32px",background:`linear-gradient(135deg, ${z.rose}, ${z.burgundy})`,border:"none",color:"white",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,cursor:"pointer",borderRadius:"6px",transition:"all 0.3s"},onMouseEnter:n=>{n.target.style.transform="translateY(-2px)"},onMouseLeave:n=>{n.target.style.transform="translateY(0)"},children:"Try Again"})]})}function wm(){const[e,t]=b.useState({banners:[],cats:[],latest:[],best:[],allProducts:[],blogs:[]}),[n,r]=b.useState(!0),[i,a]=b.useState(null),s=async()=>{try{r(!0),a(null);const[l,c,d,g,f,p]=await Promise.allSettled([oe.getBanners(),oe.getCategories(),oe.getLatestProducts(),oe.getBestSellers(),oe.getAllProducts(),oe.getBlogs()]),w=[l,c,d,g,f,p].find(x=>{var k,N;return x.status==="fulfilled"&&((N=(k=x.value)==null?void 0:k.message)==null?void 0:N.includes("Cannot connect"))});if(w)throw new Error(w.value.message);const h=_e(d.value,"products","data"),v=_e(g.value,"products","data"),y=_e(f.value,"products","data"),m=y.length>0?y:[...h,...v],u=Array.from(new Map(m.map(x=>[x._id||x.id,x])).values());t({banners:_e(l.value,"banners","data"),cats:_e(c.value,"categories","data"),latest:h,best:v,allProducts:u,blogs:_e(p.value,"blogs","data")})}catch(l){console.error("❌ Homepage load failed:",l),a(l.message||"Failed to load content. Please check your connection.")}finally{r(!1)}};return b.useEffect(()=>{s()},[]),n?o.jsx(bm,{}):i?o.jsx(vm,{error:i,onRetry:s}):o.jsxs("div",{style:{background:z.bg,minHeight:"100vh"},children:[o.jsx(cm,{banners:e.banners}),o.jsx(dm,{}),o.jsx(um,{cats:e.cats}),o.jsx(vc,{eyebrow:"Just Arrived",title:"New Collection",products:e.latest,ctaLink:"/new-collection",bg:z.surface}),o.jsx(vc,{eyebrow:"Most Loved",title:"Best Sellers",products:e.best,ctaLink:"/best-sellers",bg:z.bg}),o.jsx(ym,{products:e.allProducts}),o.jsx(fm,{blogs:e.blogs}),o.jsx(hm,{})]})}const we={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4"};function km(){const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,a]=b.useState("default");b.useEffect(()=>{window.scrollTo(0,0),oe.getLatestProducts().then(l=>{t(_e(l,"products","data")),r(!1)}).catch(()=>r(!1))},[]);const s=[...e].sort((l,c)=>i==="price-asc"?(l.price||0)-(c.price||0):i==="price-desc"?(c.price||0)-(l.price||0):0);return o.jsxs("div",{style:{background:we.bg,minHeight:"100vh",paddingTop:"120px"},children:[o.jsx("style",{children:`
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
          border: 3px solid ${we.border};
          border-top-color: ${we.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      `}),o.jsxs("div",{className:"new-collection-hero",style:{padding:"80px 80px 60px",borderBottom:`1.5px solid ${we.border}`,display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:24},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",color:we.burgundy,marginBottom:"16px",fontWeight:600},children:"✨ Latest Arrivals"}),o.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(40px, 5vw, 72px)",fontWeight:300,color:we.text,margin:0,background:`linear-gradient(135deg, ${we.text}, ${we.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"New Collection"}),o.jsx("p",{style:{color:we.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"14px",marginTop:"12px",lineHeight:"1.6",fontWeight:400,maxWidth:480},children:"Fresh pieces, new stories. Discover what just arrived this season."})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[o.jsx("span",{style:{color:we.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:600},children:"Sort by"}),o.jsxs("select",{value:i,onChange:l=>a(l.target.value),style:{background:we.surface,border:`1.5px solid ${we.border}`,color:we.text,padding:"10px 14px",fontFamily:"'Poppins', sans-serif",fontSize:"11px",cursor:"pointer",outline:"none",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",fontWeight:500},onFocus:l=>{l.target.style.borderColor=we.rose,l.target.style.boxShadow=`0 0 0 3px ${we.blush}40`},onBlur:l=>{l.target.style.borderColor=we.border,l.target.style.boxShadow="none"},children:[o.jsx("option",{value:"default",children:"Newest First"}),o.jsx("option",{value:"price-asc",children:"Price: Low to High"}),o.jsx("option",{value:"price-desc",children:"Price: High to Low"})]})]})]}),!n&&o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1px",color:we.textMuted,textTransform:"uppercase",paddingLeft:"80px",marginTop:"16px",fontWeight:600},children:[s.length," piece",s.length!==1?"s":""," available"]}),n?o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"120px 40px",gap:20},children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("span",{style:{color:we.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:"18px",fontStyle:"italic",fontWeight:300},children:"Loading collection…"})]}):o.jsx("div",{className:"new-collection-grid",style:{padding:"60px 80px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"24px"},children:s.map((l,c)=>o.jsx(nn,{product:l},l._id||c))})]})}const Y={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function jm(){const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,a]=b.useState("default"),[s,l]=b.useState(!1);b.useEffect(()=>{window.scrollTo(0,0),oe.getBestSellers().then(d=>{t(_e(d,"products","data")),r(!1)}).catch(()=>r(!1))},[]);const c=[...e].sort((d,g)=>i==="price-asc"?(d.price||0)-(g.price||0):i==="price-desc"?(g.price||0)-(d.price||0):0);return o.jsxs("div",{style:{background:Y.bg,minHeight:"100vh",paddingTop:106},children:[o.jsx("style",{children:`
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
          border-bottom: 1px solid ${Y.border};
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
          background: linear-gradient(to right, ${Y.rose}, ${Y.burgundy});
          border-radius: 2px;
        }
        .bs-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${Y.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .bs-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -1px;
          background: linear-gradient(135deg, ${Y.text} 0%, ${Y.burgundy} 100%);
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
          color: ${Y.textMuted};
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
          background: linear-gradient(135deg, ${Y.rose}, ${Y.burgundy});
          animation: dotPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        .bs-badge-label {
          font-family: 'Poppins', sans-serif;
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${Y.burgundy};
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
          color: ${Y.textMuted};
          font-weight: 600;
          white-space: nowrap;
        }
        .bs-sort-select {
          background: ${Y.surface};
          border: 1px solid ${Y.border};
          color: ${Y.text};
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
          border-color: ${Y.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }

        /* ── Toolbar (count + decorative line) ── */
        .bs-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 80px;
          border-bottom: 1px solid ${Y.borderLight};
          animation: fadeInUp 0.5s ease 0.3s both;
        }
        .bs-count {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 1.8px;
          color: ${Y.textMuted};
          text-transform: uppercase;
          font-weight: 600;
        }
        .bs-count strong {
          color: ${Y.burgundy};
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
          background: linear-gradient(to right, transparent, ${Y.rose});
        }
        .bs-toolbar-dec-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${Y.rose};
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
          color: ${Y.textMuted};
          font-style: italic;
        }
        .bs-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${Y.borderLight};
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
          border: 2px solid ${Y.borderLight};
          border-top-color: ${Y.rose};
          border-right-color: ${Y.burgundy};
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
        }
        .bs-loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          color: ${Y.textMuted};
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
          background: ${Y.surface};
          border: 1px solid ${Y.borderLight};
        }
        .bs-skeleton-img {
          aspect-ratio: 3/4;
          background: linear-gradient(
            90deg,
            ${Y.borderLight} 25%,
            ${Y.champagne}50 50%,
            ${Y.borderLight} 75%
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
            ${Y.borderLight} 25%,
            ${Y.champagne}50 50%,
            ${Y.borderLight} 75%
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
      `}),o.jsxs("div",{className:"bs-hero",children:[o.jsxs("div",{style:{position:"relative",zIndex:2},children:[o.jsxs("div",{className:"bs-eyebrow",children:[o.jsx("div",{className:"bs-eyebrow-line"}),o.jsx("span",{className:"bs-eyebrow-text",children:"Most Loved"})]}),o.jsx("h1",{className:"bs-heading",children:"Best Sellers"}),o.jsx("p",{className:"bs-sub",children:"The pieces our community keeps coming back for — handpicked for quality, craftsmanship & timeless elegance."}),o.jsxs("div",{className:"bs-badge",children:[o.jsx("div",{className:"bs-badge-dot"}),o.jsx("span",{className:"bs-badge-label",children:"Customer Favorites"}),!n&&o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{width:1,height:12,background:"rgba(139,70,84,0.2)",margin:"0 2px"}}),o.jsxs("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:14,color:Y.burgundy,fontWeight:400,fontStyle:"italic"},children:[c.length," pieces"]})]})]})]}),o.jsxs("div",{className:"bs-controls",children:[o.jsx("span",{className:"bs-sort-label",children:"Sort by"}),o.jsxs("select",{className:"bs-sort-select",value:i,onChange:d=>a(d.target.value),children:[o.jsx("option",{value:"default",children:"Most Popular"}),o.jsx("option",{value:"price-asc",children:"Price: Low to High"}),o.jsx("option",{value:"price-desc",children:"Price: High to Low"})]})]})]}),!n&&o.jsxs("div",{className:"bs-toolbar",children:[o.jsxs("span",{className:"bs-count",children:["Showing ",o.jsx("strong",{children:c.length})," ","bestseller",c.length!==1?"s":""]}),o.jsxs("div",{className:"bs-toolbar-dec",children:[o.jsx("div",{className:"bs-toolbar-dec-line"}),o.jsx("div",{className:"bs-toolbar-dec-dot"}),o.jsx("div",{style:{width:32,height:1,background:`linear-gradient(to left, transparent, ${Y.rose})`}})]})]}),n?o.jsx("div",{className:"bs-skeleton-grid",children:Array.from({length:8}).map((d,g)=>o.jsxs("div",{className:"bs-skeleton-card",children:[o.jsx("div",{className:"bs-skeleton-img"}),o.jsxs("div",{className:"bs-skeleton-body",children:[o.jsx("div",{className:"bs-skeleton-line",style:{width:"70%"}}),o.jsx("div",{className:"bs-skeleton-line",style:{width:"45%"}}),o.jsx("div",{className:"bs-skeleton-line",style:{width:"55%",height:8}})]})]},g))}):c.length>0?o.jsx("div",{className:"bs-grid",children:c.map((d,g)=>o.jsx("div",{style:{animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${g*40}ms both`},children:o.jsx(nn,{product:d})},d._id||g))}):o.jsx("div",{className:"bs-grid",children:o.jsxs("div",{className:"bs-empty",children:[o.jsx("div",{className:"bs-empty-icon",children:"✨"}),o.jsx("p",{className:"bs-empty-title",children:"No bestsellers available at the moment"}),o.jsx("p",{className:"bs-empty-sub",children:"Check back soon — new favorites arrive every week"})]})})]})}const F={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function Sm(){const[e,t]=R0(),{success:n,error:r}=tr(),[i,a]=b.useState([]),[s,l]=b.useState([]),[c,d]=b.useState(!0),[g,f]=b.useState(null),[p,w]=b.useState(e.get("search")||""),[h,v]=b.useState(e.get("category")||"all"),[y,m]=b.useState([Number(e.get("minPrice"))||0,Number(e.get("maxPrice"))||1e5]),[u,x]=b.useState(e.get("sort")||"default"),[k,N]=b.useState(Number(e.get("page"))||1),j=12;b.useEffect(()=>{(async()=>{try{d(!0),f(null);const[I,R]=await Promise.all([oe.getAllProducts(),oe.getCategories()]),ne=_e(I,"products","data")||[];if(a(ne),l(_e(R,"categories","data")||[]),!e.get("maxPrice")&&ne.length>0){const me=Math.max(...ne.map(Et=>Number(Et.price||0)));me>0&&m(Et=>[Et[0],me])}}catch(I){console.error("Failed to load products:",I),f("Failed to load products. Please try again."),r("Failed to load products")}finally{d(!1)}})()},[r]);const $=b.useCallback(C=>{const I={};C.search&&(I.search=C.search),C.category&&C.category!=="all"&&(I.category=C.category),C.minPrice>0&&(I.minPrice=C.minPrice),C.maxPrice<1e5&&(I.maxPrice=C.maxPrice),C.sort&&C.sort!=="default"&&(I.sort=C.sort),C.page&&C.page>1&&(I.page=C.page),t(I)},[t]),S=b.useMemo(()=>c?[]:i.filter(C=>{if(h!=="all"){const R=C.category;if(!R||!(typeof R=="object"?String(R._id)===String(h):String(R)===String(h)))return!1}const I=Number(C.price||C.salePrice||0);if(I<y[0]||I>y[1])return!1;if(p.trim()){const R=p.toLowerCase();return C.name&&C.name.toLowerCase().includes(R)||C.description&&C.description.toLowerCase().includes(R)||C.category&&qo(C.category).toLowerCase().includes(R)}return!0}),[i,h,y,p,c]),D=b.useMemo(()=>{const C=[...S];return u==="price-asc"&&C.sort((I,R)=>(I.price||0)-(R.price||0)),u==="price-desc"&&C.sort((I,R)=>(R.price||0)-(I.price||0)),u==="name"&&C.sort((I,R)=>(I.name||"").localeCompare(R.name||"")),u==="newest"&&C.reverse(),C},[S,u]),B=Math.ceil(D.length/j),ee=b.useMemo(()=>{const C=(k-1)*j;return D.slice(C,C+j)},[D,k]),q=C=>{w(C),N(1),$({search:C,category:h,minPrice:y[0],maxPrice:y[1],sort:u})},te=C=>{v(C),N(1),$({search:p,category:C,minPrice:y[0],maxPrice:y[1],sort:u})},le=(C,I)=>{m([C,I]),N(1),$({search:p,category:h,minPrice:C,maxPrice:I,sort:u})},Se=C=>{x(C),$({search:p,category:h,minPrice:y[0],maxPrice:y[1],sort:C})},qe=C=>{C>=1&&C<=B&&(N(C),$({search:p,category:h,minPrice:y[0],maxPrice:y[1],sort:u,page:C}),window.scrollTo({top:0,behavior:"smooth"}))},rr=b.useMemo(()=>i.length>0?Math.max(...i.map(C=>Number(C.price||0))):1e5,[i]);return o.jsxs("div",{style:{background:F.bg,minHeight:"100vh",paddingTop:106},children:[o.jsx("style",{children:`
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
          border-bottom: 1px solid ${F.border};
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
          background: linear-gradient(to right, ${F.rose}, ${F.burgundy});
          border-radius: 2px;
        }
        .prod-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${F.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .prod-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -1px;
          background: linear-gradient(135deg, ${F.text} 0%, ${F.burgundy} 100%);
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
          color: ${F.textMuted};
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
          color: ${F.textMuted};
          font-weight: 600;
          white-space: nowrap;
        }
        .prod-sort-select {
          background: ${F.surface};
          border: 1px solid ${F.border};
          color: ${F.text};
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
          border-color: ${F.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }

        /* ── Search Bar ── */
        .prod-search-bar {
          padding: 22px 80px;
          border-bottom: 1px solid ${F.borderLight};
          animation: fadeInUp 0.5s ease 0.25s both;
        }
        .prod-search-input {
          width: 100%;
          max-width: 400px;
          background: ${F.surface};
          border: 1px solid ${F.border};
          color: ${F.text};
          padding: 12px 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          border-radius: 6px;
          outline: none;
          transition: all 0.3s;
          letter-spacing: 0.3px;
        }
        .prod-search-input:focus {
          border-color: ${F.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }
        .prod-search-input::placeholder {
          color: ${F.textMuted};
        }

        /* ── Filter Bar ── */
        .prod-filter-bar {
          padding: 22px 80px;
          border-bottom: 1px solid ${F.borderLight};
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
          color: ${F.textMuted};
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
          background: ${F.borderLight};
          border-radius: 2px;
        }
        .prod-category-scroll::-webkit-scrollbar-thumb {
          background: ${F.rose};
          border-radius: 2px;
        }
        .prod-cat-btn {
          padding: 10px 20px;
          background: ${F.surface};
          border: 1px solid ${F.border};
          color: ${F.text};
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
          background: ${F.rose};
          border-color: ${F.rose};
          color: ${F.surface};
        }
        .prod-cat-btn:hover:not(.active) {
          border-color: ${F.rose};
        }

        /* ── Price Inputs ── */
        .prod-price-inputs {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .prod-price-input {
          width: 90px;
          background: ${F.surface};
          border: 1px solid ${F.border};
          color: ${F.text};
          padding: 10px 12px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          border-radius: 6px;
          outline: none;
          transition: all 0.3s;
        }
        .prod-price-input:focus {
          border-color: ${F.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }
        .prod-price-dash {
          color: ${F.textMuted};
          font-weight: 500;
        }

        /* ── Toolbar ── */
        .prod-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 80px;
          border-bottom: 1px solid ${F.borderLight};
          animation: fadeInUp 0.5s ease 0.35s both;
          flex-wrap: wrap;
          gap: 16px;
        }
        .prod-count {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 1.8px;
          color: ${F.textMuted};
          text-transform: uppercase;
          font-weight: 600;
        }
        .prod-count strong {
          color: ${F.burgundy};
          font-weight: 700;
        }
        .prod-page-info {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.5px;
          color: ${F.textMuted};
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
          color: ${F.textMuted};
          font-style: italic;
        }
        .prod-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${F.textMuted};
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
          border: 2px solid ${F.borderLight};
          border-top-color: ${F.rose};
          border-right-color: ${F.burgundy};
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
        }
        .prod-loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          color: ${F.textMuted};
          font-style: italic;
          letter-spacing: 1px;
        }

        /* ── Error Banner ── */
        .prod-error-banner {
          background: rgba(232,180,196,0.1);
          border-bottom: 1px solid ${F.rose};
          color: ${F.burgundy};
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
          background: ${F.surface};
          border: 1px solid ${F.border};
          color: ${F.text};
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
          background: ${F.rose};
          border-color: ${F.rose};
          color: ${F.surface};
        }
        .prod-page-btn:hover:not(.active):not(:disabled) {
          border-color: ${F.rose};
          background: ${F.blush};
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
          background: ${F.surface};
          border: 1px solid ${F.borderLight};
        }
        .prod-skeleton-img {
          aspect-ratio: 3/4;
          background: linear-gradient(
            90deg,
            ${F.borderLight} 25%,
            ${F.champagne} 50%,
            ${F.borderLight} 75%
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
            ${F.borderLight} 25%,
            ${F.champagne} 50%,
            ${F.borderLight} 75%
          );
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite;
        }

        /* ── Quick Add Button ── */
        .prod-add-btn {
          margin-top: 12px;
          padding: 12px 16px;
          background: ${F.rose};
          color: ${F.surface};
          border: 1.5px solid ${F.rose};
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
          background: ${F.burgundy};
          border-color: ${F.burgundy};
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
      `}),g&&o.jsxs("div",{className:"prod-error-banner",children:["⚠ ",g]}),o.jsxs("div",{className:"prod-hero",children:[o.jsxs("div",{style:{position:"relative",zIndex:2},children:[o.jsxs("div",{className:"prod-eyebrow",children:[o.jsx("div",{className:"prod-eyebrow-line"}),o.jsx("span",{className:"prod-eyebrow-text",children:"Shop Our Collection"})]}),o.jsx("h1",{className:"prod-heading",children:"All Jewellery"}),o.jsx("p",{className:"prod-sub",children:"Discover our complete collection of handcrafted pieces. Find the perfect style that speaks to you."})]}),o.jsxs("div",{className:"prod-controls",children:[o.jsx("span",{className:"prod-sort-label",children:"Sort by"}),o.jsxs("select",{className:"prod-sort-select",value:u,onChange:C=>Se(C.target.value),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"price-asc",children:"Price: Low to High"}),o.jsx("option",{value:"price-desc",children:"Price: High to Low"}),o.jsx("option",{value:"name",children:"Name A-Z"}),o.jsx("option",{value:"newest",children:"Newest"})]})]})]}),o.jsx("div",{className:"prod-search-bar",children:o.jsx("input",{type:"text",placeholder:"Search products, categories...",value:p,onChange:C=>q(C.target.value),className:"prod-search-input"})}),!c&&s.length>0&&o.jsxs("div",{className:"prod-filter-bar",children:[o.jsx("span",{className:"prod-filter-label",children:"Category"}),o.jsxs("div",{className:"prod-category-scroll",children:[o.jsx("button",{className:`prod-cat-btn ${h==="all"?"active":""}`,onClick:()=>te("all"),children:"All"}),s.map(C=>{const I=Hs(C);return I?o.jsx("button",{className:`prod-cat-btn ${h===I?"active":""}`,onClick:()=>te(I),children:qo(C)},I):null})]}),o.jsxs("div",{className:"prod-price-inputs",children:[o.jsx("span",{className:"prod-filter-label",children:"Price:"}),o.jsx("input",{type:"number",min:"0",value:y[0],onChange:C=>le(Number(C.target.value),y[1]),className:"prod-price-input",placeholder:"Min"}),o.jsx("span",{className:"prod-price-dash",children:"–"}),o.jsx("input",{type:"number",max:rr,value:y[1],onChange:C=>le(y[0],Number(C.target.value)),className:"prod-price-input",placeholder:"Max"})]})]}),!c&&o.jsxs("div",{className:"prod-toolbar",children:[o.jsxs("span",{className:"prod-count",children:["Showing ",o.jsx("strong",{children:ee.length})," of"," ",o.jsx("strong",{children:D.length})," piece",D.length!==1?"s":""]}),B>1&&o.jsxs("div",{className:"prod-page-info",children:["Page ",k," of ",B]})]}),c?o.jsx(o.Fragment,{children:o.jsxs("div",{className:"prod-loading",children:[o.jsx("div",{className:"prod-spinner"}),o.jsx("p",{className:"prod-loading-text",children:"Loading collection…"})]})}):D.length===0?o.jsx("div",{className:"prod-grid",children:o.jsxs("div",{className:"prod-empty",children:[o.jsx("div",{className:"prod-empty-icon",children:"✨"}),o.jsx("p",{className:"prod-empty-title",children:"No pieces found"}),o.jsx("p",{className:"prod-empty-sub",children:"Try adjusting your filters or search terms"})]})}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"prod-grid",children:ee.map((C,I)=>o.jsx("div",{style:{animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${I*40}ms both`},children:o.jsx(Cm,{product:C})},C._id||I))}),B>1&&o.jsx("div",{style:{padding:"0 80px 80px"},children:o.jsxs("div",{className:"prod-pagination",children:[o.jsx("button",{className:"prod-page-btn",onClick:()=>qe(k-1),disabled:k===1,children:"← Previous"}),Array.from({length:Math.min(5,B)}).map((C,I)=>{const R=B<=5?I+1:Math.max(1,k-2)+I;return R>B?null:o.jsx("button",{className:`prod-page-btn ${R===k?"active":""}`,onClick:()=>qe(R),children:R},R)}),o.jsx("button",{className:"prod-page-btn",onClick:()=>qe(k+1),disabled:k===B,children:"Next →"})]})})]})]})}function Cm({product:e}){const{addToCart:t}=yi(),{success:n,error:r}=tr(),[i,a]=b.useState(!1),s=async l=>{l.stopPropagation(),a(!0);try{await t(e._id||e.id,1),n("Added to cart!")}catch(c){r((c==null?void 0:c.message)||"Failed to add to cart"),console.error(c)}finally{a(!1)}};return o.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column"},children:[o.jsx(nn,{product:e}),o.jsx("button",{onClick:s,disabled:i,className:"prod-add-btn",children:i?"Adding...":"Add to Cart"})]})}const A={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4"};function $m(){const{id:e}=c0(),t=yt(),{refreshCart:n}=Zn(),[r,i]=b.useState(null),[a,s]=b.useState([]),[l,c]=b.useState(!0),[d,g]=b.useState(0),[f,p]=b.useState(1),[w,h]=b.useState(!1),[v,y]=b.useState(!1);b.useEffect(()=>{c(!0),oe.getProductById(e).then(S=>{const D=(S==null?void 0:S.data)||(S==null?void 0:S.product)||S;i(D),c(!1),oe.getLatestProducts().then(B=>{const ee=_e(B,"products","data");s(ee.filter(q=>(q._id||q.id)!==e).slice(0,4))})}).catch(()=>c(!1)),window.scrollTo(0,0)},[e]);const m=async()=>{if(!localStorage.getItem("arke_token")){alert("Please login first");return}await oe.addToCart(e,f),n(),h(!0),setTimeout(()=>h(!1),3e3)},u=async()=>{if(!localStorage.getItem("arke_token")){alert("Please login first");return}y(!0);try{await oe.addToWishlist(e)}finally{y(!1)}};if(l)return o.jsxs("div",{style:{paddingTop:"120px",minHeight:"100vh",background:A.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20},children:[o.jsx("style",{children:`
          @keyframes spin { to { transform: rotate(360deg); } }
          .spinner {
            width: 48px;
            height: 48px;
            border: 3px solid ${A.border};
            border-top-color: ${A.rose};
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
        `}),o.jsx("div",{className:"spinner"}),o.jsx("span",{style:{color:A.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:"18px",fontStyle:"italic",fontWeight:300},children:"Loading product…"})]});if(!r)return o.jsxs("div",{style:{paddingTop:"120px",minHeight:"100vh",background:A.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"24px"},children:[o.jsx("div",{style:{fontSize:56,opacity:.4},children:"◇"}),o.jsx("span",{style:{color:A.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:"28px",fontWeight:300},children:"Product not found"}),o.jsx("button",{onClick:()=>t("/products"),style:{background:"transparent",border:`1.5px solid ${A.rose}`,color:A.burgundy,padding:"12px 32px",cursor:"pointer",fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"},onMouseEnter:S=>{S.target.style.background=`${A.blush}30`,S.target.style.borderColor=A.burgundy},onMouseLeave:S=>{S.target.style.background="transparent",S.target.style.borderColor=A.rose},children:"← Back to Products"})]});const x=Array.isArray(r.images)?r.images:[r.image||r.thumbnail].filter(Boolean),k=r.name||r.title||"Product",N=r.price||r.salePrice||r.mrp||0,j=r.mrp||r.originalPrice,$=r.description||r.details||"";return o.jsxs("div",{style:{background:A.bg,minHeight:"100vh",paddingTop:"100px"},children:[o.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pd-main { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .pd-related { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }
      `}),o.jsxs("div",{className:"pd-main",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",padding:"60px 80px",alignItems:"start"},children:[o.jsxs("div",{children:[ze(x[d])?o.jsx("img",{src:ze(x[d]),alt:k,style:{width:"100%",aspectRatio:"1/1",objectFit:"cover",marginBottom:"16px",borderRadius:"8px"}}):o.jsx("div",{style:{width:"100%",aspectRatio:"1/1",background:`linear-gradient(135deg, ${A.blush}30, ${A.champagne}20)`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",borderRadius:"8px"},children:o.jsx("span",{style:{color:`${A.rose}40`,fontSize:"120px"},children:"◇"})}),x.length>1&&o.jsx("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:x.map((S,D)=>{const B=ze(S);return B?o.jsx("img",{src:B,alt:`${k} view ${D+1}`,onClick:()=>g(D),style:{width:"80px",height:"80px",objectFit:"cover",cursor:"pointer",border:D===d?`2px solid ${A.burgundy}`:`1.5px solid ${A.border}`,opacity:D===d?1:.6,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px"},onMouseEnter:ee=>{D!==d&&(ee.target.style.opacity="1",ee.target.style.borderColor=A.rose)},onMouseLeave:ee=>{D!==d&&(ee.target.style.opacity="0.6",ee.target.style.borderColor=A.border)}},D):null})})]}),o.jsxs("div",{children:[o.jsx("button",{onClick:()=>t("/products"),style:{fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"0.5px",textTransform:"uppercase",color:A.textMuted,marginBottom:"20px",cursor:"pointer",background:"none",border:"none",padding:0,transition:"color 0.2s"},onMouseEnter:S=>S.target.style.color=A.burgundy,onMouseLeave:S=>S.target.style.color=A.textMuted,children:"← Back to All Products"}),o.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(28px, 4vw, 44px)",fontWeight:300,color:A.text,lineHeight:"1.2",marginBottom:"24px",margin:"0 0 24px 0"},children:k}),o.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"baseline",marginBottom:"32px"},children:[o.jsxs("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"32px",background:`linear-gradient(135deg, ${A.rose}, ${A.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",fontWeight:400},children:["₹",Number(N).toLocaleString("en-IN")]}),j&&j>N&&o.jsxs("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"16px",color:A.textMuted,textDecoration:"line-through"},children:["₹",Number(j).toLocaleString("en-IN")]})]}),$&&o.jsx("p",{style:{color:A.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"14px",lineHeight:"1.8",marginBottom:"32px",fontWeight:400},children:$}),o.jsx("div",{style:{borderTop:`1.5px solid ${A.border}`,margin:"32px 0"}}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px",marginBottom:"24px"},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"1px",textTransform:"uppercase",color:A.textMuted,fontWeight:600,minWidth:"60px"},children:"Quantity"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",border:`1.5px solid ${A.border}`,borderRadius:"6px",overflow:"hidden"},children:[o.jsx("button",{onClick:()=>p(S=>Math.max(1,S-1)),style:{width:"40px",height:"40px",background:"none",border:"none",color:A.rose,cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:S=>S.target.style.background=`${A.blush}30`,onMouseLeave:S=>S.target.style.background="none",children:"−"}),o.jsx("span",{style:{flex:1,textAlign:"center",fontFamily:"'Poppins', sans-serif",fontSize:"14px",fontWeight:600,color:A.text,minWidth:"50px"},children:f}),o.jsx("button",{onClick:()=>p(S=>S+1),style:{width:"40px",height:"40px",background:"none",border:"none",color:A.rose,cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:S=>S.target.style.background=`${A.blush}30`,onMouseLeave:S=>S.target.style.background="none",children:"+"})]})]}),o.jsx("button",{onClick:m,style:{width:"100%",padding:"16px",background:w?`linear-gradient(135deg, ${A.rose}, ${A.burgundy})`:"transparent",border:`1.5px solid ${w?"transparent":A.rose}`,color:w?"white":A.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px",fontWeight:700,marginBottom:"12px",boxShadow:w?`0 4px 16px ${A.rose}30`:"none"},onMouseEnter:S=>{w||(S.target.style.background=`${A.blush}20`,S.target.style.borderColor=A.burgundy)},onMouseLeave:S=>{w||(S.target.style.background="transparent",S.target.style.borderColor=A.rose)},children:w?"✓ Added to Cart":"Add to Cart"}),o.jsx("button",{onClick:u,disabled:v,style:{width:"100%",padding:"14px",background:"transparent",border:`1.5px solid ${A.border}`,color:A.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",cursor:v?"not-allowed":"pointer",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px",fontWeight:600,opacity:v?.6:1},onMouseEnter:S=>{v||(S.target.style.borderColor=A.rose,S.target.style.color=A.rose,S.target.style.background=`${A.blush}15`)},onMouseLeave:S=>{v||(S.target.style.borderColor=A.border,S.target.style.color=A.textMuted,S.target.style.background="transparent")},children:"♡ Add to Wishlist"}),o.jsx("div",{style:{borderTop:`1.5px solid ${A.border}`,margin:"32px 0"}}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[["Material",r.material||r.metalType],["Weight",r.weight?`${r.weight}g`:null],["Size",r.size],["SKU",r.sku||r.productCode]].filter(([,S])=>S).map(([S,D])=>o.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"1px",textTransform:"uppercase",color:A.textMuted,fontWeight:600},children:S}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"12px",color:A.text,fontWeight:500},children:D})]},S))})]})]}),a.length>0&&o.jsxs("div",{className:"pd-related",style:{padding:"80px 80px",borderTop:`1.5px solid ${A.border}`,background:A.surface},children:[o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"36px",fontWeight:300,color:A.text,marginBottom:"40px",margin:"0 0 40px 0",background:`linear-gradient(135deg, ${A.text}, ${A.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"You May Also Like"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"24px"},children:a.map((S,D)=>o.jsx(nn,{product:S},S._id||D))})]})]})}const de={bg:"#faf8f5",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4"};function zm(){const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,a]=b.useState(null),s=yt();return b.useEffect(()=>{window.scrollTo(0,0),oe.getCategories().then(l=>{t(_e(l,"categories","data")),r(!1)}).catch(()=>r(!1))},[]),o.jsxs("div",{style:{background:de.bg,minHeight:"100vh",paddingTop:"120px"},children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"categories-header",style:{padding:"60px 80px 60px",borderBottom:`1.5px solid ${de.border}`},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:16},children:[o.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(90deg, ${de.rose}, ${de.burgundy})`}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:de.burgundy,fontWeight:600},children:"Explore Collections"})]}),o.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(40px, 5vw, 72px)",fontWeight:300,color:de.text,margin:0,background:`linear-gradient(135deg, ${de.text}, ${de.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Categories"})]}),n?o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:120,gap:20},children:[o.jsx("div",{style:{width:48,height:48,border:`3px solid ${de.border}`,borderTopColor:de.rose,borderRadius:"50%",animation:"spin 1s linear infinite"}}),o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,color:de.textMuted,fontStyle:"italic",fontWeight:300},children:"Loading categories…"})]}):e.length===0?o.jsxs("div",{style:{textAlign:"center",padding:"120px 40px"},children:[o.jsx("div",{style:{fontSize:56,color:`${de.rose}40`,marginBottom:24},children:"◇"}),o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:300,color:de.textMuted,background:`linear-gradient(135deg, ${de.textMuted}, ${de.rose}80)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"No categories found"}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:de.textMuted,marginTop:12},children:"Check back soon for new collections"})]}):o.jsx("div",{className:"categories-grid",style:{padding:"60px 80px",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},children:e.map((l,c)=>{const d=qo(l),g=Gu(l),f=Hs(l),p=i===c;return o.jsxs("div",{style:{cursor:"pointer",position:"relative",overflow:"hidden",aspectRatio:"4/3",borderRadius:"12px",boxShadow:p?"0 20px 48px rgba(139, 70, 84, 0.25)":"0 4px 16px rgba(0,0,0,0.08)",transition:"all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:p?"translateY(-8px)":"translateY(0)",animation:`slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${c*.1}s both`},onClick:()=>f&&s(`/products?category=${f}`),onMouseEnter:()=>a(c),onMouseLeave:()=>a(null),children:[g?o.jsx("img",{src:g,alt:d,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:p?"scale(1.08)":"scale(1)"}}):o.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${de.blush}30, ${de.champagne}20)`,display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("span",{style:{color:`${de.rose}40`,fontSize:"96px"},children:"◇"})}),o.jsxs("div",{style:{position:"absolute",inset:0,background:`linear-gradient(to top, 
                      rgba(250,248,245,0.95) 0%, 
                      rgba(250,248,245,0.75) 30%, 
                      rgba(250,248,245,0.3) 60%, 
                      transparent 100%)`,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"32px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:400,color:de.text,marginBottom:12,letterSpacing:.5,lineHeight:1.2},children:d}),o.jsx("div",{style:{width:p?56:32,height:1.5,background:`linear-gradient(90deg, ${de.rose}, ${de.burgundy})`,marginBottom:12,transition:"width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"}}),o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:de.burgundy,display:"inline-flex",alignItems:"center",gap:6,fontWeight:700,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:p?"translateX(4px)":"translateX(0)"},children:["Shop Now",o.jsx("span",{style:{transition:"transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:p?"translateX(2px)":"translateX(0)"},children:"→"})]})]})]},c)})})]})}const _={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function Nm(){const[e,t]=b.useState([]),[n,r]=b.useState(!0),[i,a]=b.useState(null);return yt(),b.useEffect(()=>{window.scrollTo(0,0),oe.getBlogs().then(s=>{t(_e(s,"blogs","data")),r(!1)}).catch(()=>r(!1))},[]),o.jsxs("div",{style:{background:_.bg,minHeight:"100vh",paddingTop:"120px"},children:[o.jsx("style",{children:`
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
          border-bottom: 1.5px solid ${_.border};
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
          color: ${_.burgundy};
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
          background: linear-gradient(to right, ${_.rose}, ${_.burgundy});
          border-radius: 2px;
        }

        .blog-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 300;
          color: ${_.text};
          letter-spacing: -1px;
          line-height: 1.1;
          background: linear-gradient(135deg, ${_.text} 0%, ${_.burgundy} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
        }

        .blog-header-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${_.textMuted};
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
          background: ${_.surface};
          border-radius: 12px;
          overflow: hidden;
          border: 1.5px solid ${_.borderLight};
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
          border-color: ${_.rose};
          box-shadow: 0 24px 48px rgba(139, 70, 84, 0.18);
        }

        /* ── Image ── */
        .blog-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, ${_.blush}20, ${_.champagne}15);
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
          color: ${_.burgundy};
          background: rgba(232, 180, 196, 0.95);
          backdrop-filter: blur(10px);
          padding: 7px 14px;
          border-radius: 20px;
          font-weight: 700;
          border: 0.5px solid ${_.rose};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-category-badge {
          background: ${_.rose};
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
          background: ${_.burgundy};
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
          border-bottom: 1.5px solid ${_.borderLight};
          transition: border-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-content {
          border-color: ${_.rose};
        }

        .blog-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          color: ${_.text};
          line-height: 1.4;
          margin-bottom: 14px;
          transition: color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-title {
          color: ${_.burgundy};
        }

        .blog-excerpt {
          color: ${_.textMuted};
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
          background: ${_.bg};
          transition: background 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-footer {
          background: ${_.blush}20;
        }

        .blog-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .blog-date {
          color: ${_.textMuted};
          font-size: 10px;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .blog-author {
          color: ${_.text};
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
          background: ${_.blush};
          color: ${_.burgundy};
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-read-link {
          background: ${_.rose};
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
          border: 3px solid ${_.borderLight};
          border-top-color: ${_.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 28px;
        }

        .loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 300;
          color: ${_.textMuted};
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
          color: ${_.text};
          margin-bottom: 12px;
          letter-spacing: 1px;
          animation: fadeInUp 0.6s ease 0.3s both;
        }

        .empty-state-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${_.textMuted};
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
          background: ${_.surface};
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
          background: linear-gradient(135deg, ${_.blush}30, ${_.champagne}20);
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
          color: ${_.burgundy};
          background: ${_.blush};
          padding: 8px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
          font-weight: 700;
          border: 1px solid ${_.rose}60;
        }

        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 300;
          color: ${_.text};
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
          border-bottom: 1.5px solid ${_.borderLight};
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
          background: linear-gradient(135deg, ${_.rose}, ${_.burgundy});
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
          color: ${_.text};
        }

        .modal-author-role {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          color: ${_.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-date {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${_.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-read-time {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${_.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-content-text {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          line-height: 1.9;
          color: ${_.text};
          letter-spacing: 0.4px;
        }

        .modal-content-text p {
          margin-bottom: 24px;
        }

        .modal-content-text h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 400;
          color: ${_.text};
          margin: 36px 0 16px;
          letter-spacing: -0.5px;
        }

        .modal-content-text h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: ${_.text};
          margin: 28px 0 12px;
          letter-spacing: -0.5px;
        }

        .modal-content-text blockquote {
          border-left: 4px solid ${_.rose};
          padding-left: 20px;
          margin: 28px 0;
          color: ${_.textMuted};
          font-style: italic;
        }

        /* ── Scrollbar ── */
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: ${_.bg};
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: ${_.rose};
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: ${_.burgundy};
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
      `}),o.jsx("div",{className:"blog-header",children:o.jsxs("div",{className:"blog-header-content",children:[o.jsx("div",{className:"blog-eyebrow",children:"Stories & Inspiration"}),o.jsx("h1",{className:"blog-heading",children:"From the Journal"}),o.jsx("p",{className:"blog-header-sub",children:"Discover inspiring stories about jewellery craftsmanship, styling tips, and the art of wearing pieces that celebrate your unique style."})]})}),n?o.jsx("div",{style:{padding:"80px 40px"},children:o.jsxs("div",{className:"loading-state",children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("p",{className:"loading-text",children:"Loading our stories…"})]})}):e.length>0?o.jsx("div",{className:"blog-grid-container",children:o.jsx("div",{className:"blog-grid",children:e.map((s,l)=>{var f;const c=ze(s.image||s.thumbnail||s.featuredImage),d=s.date||s.createdAt,g=s.readTime||Math.ceil((((f=s.content)==null?void 0:f.length)||0)/200);return o.jsxs("div",{className:"blog-card",onClick:()=>a(s),children:[o.jsxs("div",{className:"blog-img-wrap",children:[c?o.jsx("img",{src:c,alt:s.title,className:"blog-img"}):o.jsx("div",{className:"blog-img-placeholder",children:"📖"}),o.jsxs("div",{className:"blog-badges",children:[s.featured&&o.jsxs("div",{className:"blog-featured-badge",children:[o.jsx("span",{children:"✦"})," Featured"]}),o.jsx("div",{className:"blog-category-badge",children:s.category||"Journal"})]})]}),o.jsxs("div",{className:"blog-content",children:[o.jsx("h3",{className:"blog-title",children:s.title}),s.excerpt&&o.jsx("p",{className:"blog-excerpt",children:s.excerpt.length>110?`${s.excerpt.slice(0,110)}...`:s.excerpt})]}),o.jsxs("div",{className:"blog-footer",children:[o.jsxs("div",{className:"blog-meta",children:[o.jsx("div",{className:"blog-date",children:d?new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}),g>0&&o.jsxs("div",{className:"blog-read-time",children:[g," min read"]})]}),o.jsx("div",{className:"blog-read-link",children:"→"})]})]},l)})})}):o.jsx("div",{className:"blog-grid-container",children:o.jsx("div",{className:"blog-grid",children:o.jsxs("div",{className:"empty-state",children:[o.jsx("div",{className:"empty-state-icon",children:"📝"}),o.jsx("div",{className:"empty-state-text",children:"No Stories Yet"}),o.jsx("div",{className:"empty-state-desc",children:"Check back soon for inspiring stories, style tips, and jewellery insights."})]})})}),i&&o.jsx(Pm,{blog:i,onClose:()=>a(null)})]})}function Pm({blog:e,onClose:t}){var a;b.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]);const n=ze(e.image||e.thumbnail||e.featuredImage),r=e.date||e.createdAt,i=e.readTime||Math.ceil((((a=e.content)==null?void 0:a.length)||0)/200);return o.jsx("div",{className:"modal-overlay",onClick:t,children:o.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[n?o.jsx("img",{src:n,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):o.jsx("div",{style:{fontSize:"120px",opacity:.3},children:"📖"}),o.jsx("button",{className:"modal-close",onClick:t,children:"✕"})]}),o.jsxs("div",{className:"modal-body",children:[e.category&&o.jsx("div",{className:"modal-category",children:e.category}),o.jsx("h1",{className:"modal-title",children:e.title}),o.jsxs("div",{className:"modal-meta",children:[e.author&&o.jsxs("div",{className:"modal-author",children:[o.jsx("div",{className:"modal-author-avatar",children:e.author.charAt(0).toUpperCase()}),o.jsxs("div",{className:"modal-author-info",children:[o.jsx("div",{className:"modal-author-name",children:e.author}),o.jsx("div",{className:"modal-author-role",children:"Author"})]})]}),r&&o.jsx("div",{className:"modal-date",children:new Date(r).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}),i>0&&o.jsxs("div",{className:"modal-read-time",children:["⏱ ",i," min read"]})]}),e.content?o.jsx("div",{className:"modal-content-text",dangerouslySetInnerHTML:{__html:e.content}}):o.jsx("div",{className:"modal-content-text",children:e.excerpt||e.description||"No content available for this blog post."}),o.jsx("div",{style:{margin:"48px 0",padding:"28px 0",borderTop:`1.5px solid ${_.border}`,borderBottom:`1.5px solid ${_.border}`,textAlign:"center"},children:o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"24px",color:_.textMuted},children:"✦"})}),o.jsxs("div",{style:{textAlign:"center",padding:"20px 0"},children:[o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"13px",color:_.textMuted,lineHeight:1.8,marginBottom:"20px"},children:"Enjoyed this story? Share it with someone special or explore more from our journal."}),o.jsx("button",{onClick:t,style:{padding:"12px 32px",background:`linear-gradient(135deg, ${_.rose}, ${_.burgundy})`,border:"none",color:"white",fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:"700",cursor:"pointer",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"},onMouseEnter:s=>{s.target.style.transform="translateY(-2px)",s.target.style.boxShadow="0 12px 24px rgba(139, 70, 84, 0.2)"},onMouseLeave:s=>{s.target.style.transform="translateY(0)",s.target.style.boxShadow="none"},children:"Back to Stories"})]})]})]})})}function Em({product:e,small:t=!1}){const n={textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",lavender:"#d4c4e0"},r=(e==null?void 0:e.type)||(e==null?void 0:e.category)||"",i=(e==null?void 0:e.metal_type)||"",a=(e==null?void 0:e.diamond_quality)||"",s=(e==null?void 0:e.gender)||"",l=(e==null?void 0:e.totalQuantity)??(e==null?void 0:e.quantity)??"",c={ring:"◯",necklace:"◇",earring:"◈",bracelet:"⌀",bangle:"○",pendant:"◆"},d=Object.keys(c).find(f=>r.toLowerCase().includes(f)),g=c[d]||"◇";return t?o.jsxs("div",{style:{width:"100%",height:"100%",background:`linear-gradient(160deg, ${n.blush}20, ${n.champagne}15)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,position:"relative",overflow:"hidden"},children:[o.jsx("style",{children:`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .placeholder-icon {
            animation: float 3s ease-in-out infinite;
          }
        `}),o.jsx("div",{style:{position:"absolute",width:80,height:80,borderRadius:"50%",border:`1px solid ${n.rose}20`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),o.jsx("div",{style:{position:"absolute",width:120,height:120,borderRadius:"50%",border:`1px solid ${n.rose}10`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),o.jsx("span",{className:"placeholder-icon",style:{color:n.rose,fontSize:32,zIndex:1,opacity:.8},children:g}),o.jsx("span",{style:{color:n.burgundy,fontFamily:"'Cormorant Garamond', serif",fontSize:10,letterSpacing:"2px",zIndex:1,fontWeight:300,opacity:.7,textTransform:"uppercase"},children:"ARKE"}),o.jsx("div",{style:{position:"absolute",bottom:12,width:20,height:2,background:`linear-gradient(90deg, transparent, ${n.rose}, transparent)`,borderRadius:"1px",opacity:.5,animation:"shimmer 2s infinite"}}),o.jsx("style",{children:`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `})]}):o.jsxs("div",{style:{width:"100%",height:"100%",background:`linear-gradient(160deg, ${n.blush}15 0%, ${n.champagne}10 60%, ${n.lavender}8 100%)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:"28px 20px",position:"relative",overflow:"hidden",boxSizing:"border-box"},children:[o.jsx("style",{children:`
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
      `}),[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([f,p],w)=>o.jsx("div",{className:"placeholder-corner",style:{[f]:12,[p]:12,...f==="top"&&p==="left"?{borderTop:`1.5px solid ${n.rose}40`,borderLeft:`1.5px solid ${n.rose}40`}:f==="top"&&p==="right"?{borderTop:`1.5px solid ${n.rose}40`,borderRight:`1.5px solid ${n.rose}40`}:f==="bottom"&&p==="left"?{borderBottom:`1.5px solid ${n.rose}40`,borderLeft:`1.5px solid ${n.rose}40`}:{borderBottom:`1.5px solid ${n.rose}40`,borderRight:`1.5px solid ${n.rose}40`}}},w)),o.jsx("div",{style:{position:"absolute",width:200,height:200,borderRadius:"50%",border:`1px solid ${n.rose}15`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),o.jsx("div",{style:{position:"absolute",width:140,height:140,borderRadius:"50%",border:`1px solid ${n.rose}20`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),o.jsx("div",{style:{position:"absolute",width:80,height:80,borderRadius:"50%",border:`1px solid ${n.rose}25`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:12,letterSpacing:"3px",color:n.rose,textTransform:"uppercase",zIndex:1,fontWeight:300,opacity:.7},children:"ARKE"}),o.jsxs("div",{style:{textAlign:"center",zIndex:1,flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14},children:[o.jsx("div",{style:{fontSize:48,color:n.rose,lineHeight:1,opacity:.8,animation:"float 4s ease-in-out infinite"},children:g}),r&&o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:n.burgundy,fontWeight:600,opacity:.8},children:r}),o.jsx("div",{style:{width:36,height:1.5,background:`linear-gradient(90deg, transparent, ${n.rose}60, transparent)`,margin:"4px 0"}}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,width:"100%",padding:"0 12px"},children:[["Metal",i],["Diamond",a],["For",s],["Stock",l!==""?l>0?`${l} available`:"Out of stock":""]].filter(([,f])=>f).map(([f,p])=>o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 8px",background:`${n.rose}10`,borderRadius:"4px",border:`0.5px solid ${n.rose}25`},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,letterSpacing:"1px",color:n.textMuted,textTransform:"uppercase",fontWeight:600},children:f}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,color:f==="Stock"?l>0?"#70c878":"#d97070":n.burgundy,letterSpacing:"0.5px",fontWeight:600},children:p})]},f))})]}),o.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 14px",border:`1.5px solid ${n.rose}40`,borderRadius:"20px",background:`${n.rose}8`,zIndex:1},children:[o.jsx("div",{style:{width:5,height:5,borderRadius:"50%",background:n.rose,animation:"pulse 2s infinite",opacity:.8}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:8,letterSpacing:"1.2px",color:n.rose,textTransform:"uppercase",fontWeight:600,opacity:.8},children:"Loading Image"})]})]})}const T={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4",success:"#70c878",error:"#d97070"};function Tm(){const e=yt(),{items:t,loading:n,removeFromCart:r,updateQuantity:i}=yi(),{success:a,error:s}=tr(),[l,c]=b.useState([]),[d,g]=b.useState(""),[f,p]=b.useState(null),[w,h]=b.useState(""),[v,y]=b.useState(new Set),[m,u]=b.useState(new Set),x=b.useMemo(()=>!localStorage.getItem("arke_token"),[]);b.useEffect(()=>{window.scrollTo(0,0),(async()=>{})()},[]);const k=async(q,te)=>{y(le=>new Set([...le,q]));try{await r(te),a("Item removed from cart")}catch(le){s("Failed to remove item"),console.error(le)}finally{y(le=>{const Se=new Set(le);return Se.delete(q),Se})}},N=async(q,te,le)=>{if(!(le<1)){u(Se=>new Set([...Se,q]));try{await i(te,le),a(`Quantity updated to ${le}`)}catch(Se){s("Failed to update quantity"),console.error(Se)}finally{u(Se=>{const qe=new Set(Se);return qe.delete(q),qe})}}},j=t.reduce((q,te)=>{const le=te.product||te,Se=Number(le.price||le.salePrice||0),qe=te.quantity||1;return q+Se*qe},0),$=(()=>{if(!f)return 0;const q=Number(f.discountValue||f.offerValue||0);return(f.discountType||f.offertype||"flat")==="percentage"?Math.round(j*q/100):Math.min(q,j)})(),S=j>=999?0:99,D=j-$+S,B=()=>{const q=d.trim().toUpperCase();if(!q){h("Please enter a coupon code");return}const te=l.find(Se=>(Se.code||Se.offercode||"").toUpperCase()===q);if(!te){h("Invalid or expired coupon code"),p(null);return}if(te.expiryDate&&new Date(te.expiryDate)<new Date){h("This coupon has expired"),p(null);return}const le=Number(te.minOrderAmount||te.minOrder||0);if(j<le){h(`Minimum order ₹${le.toLocaleString("en-IN")} required`),p(null);return}p(te),h(""),a("Coupon applied successfully!")},ee=()=>{p(null),g(""),h("")};return o.jsxs("div",{style:{background:T.bg,minHeight:"100vh",paddingTop:120},children:[o.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .cart-header   { animation: fadeInUp 0.8s cubic-bezier(0.34,1.56,0.64,1); }
        .cart-items    { animation: fadeInUp 0.6s cubic-bezier(0.34,1.56,0.64,1); }
        .cart-sidebar  { animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1); }

        @media (max-width:1024px) {
          .cart-container { grid-template-columns:1fr!important; }
        }

        @media (max-width:768px) {
          .cart-header { padding:40px 20px!important; }
          .cart-main   { padding:24px 20px!important; }
        }
      `}),o.jsx(Im,{itemCount:t.length}),n?o.jsx(Rm,{}):x?o.jsx(wc,{icon:"◇",title:"Sign in to view your cart",sub:"Your saved items will appear here",btn:"Sign In",onClick:()=>e("/")}):t.length===0?o.jsx(wc,{icon:"◈",title:"Your cart is empty",sub:"Discover pieces crafted just for you",btn:"Shop Now",onClick:()=>e("/products")}):o.jsxs("div",{className:"cart-main",style:{padding:"48px 80px",display:"grid",gridTemplateColumns:"1fr 420px",gap:48,alignItems:"start"},children:[o.jsx(Mm,{items:t,removingItems:v,updatingQty:m,onRemove:k,onUpdateQty:N,navigate:e}),o.jsx(_m,{subtotal:j,discountAmount:$,shipping:S,total:D,appliedCoupon:f,couponInput:d,couponError:w,onCouponChange:g,onApplyCoupon:B,onRemoveCoupon:ee,onCouponErrorClear:()=>h(""),onCheckout:()=>e("/checkout",{state:{appliedCoupon:f,discountAmount:$,shipping:S,total:D}})})]})]})}function Im({itemCount:e}){return o.jsxs("div",{className:"cart-header",style:{padding:"60px 80px 40px",borderBottom:`1.5px solid ${T.border}`},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:14},children:[o.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(90deg, ${T.rose}, ${T.burgundy})`}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:T.burgundy,fontWeight:600},children:"Your Selection"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:20,flexWrap:"wrap"},children:[o.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(36px,4vw,56px)",fontWeight:300,color:T.text,margin:0,background:`linear-gradient(135deg, ${T.text}, ${T.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Shopping Cart"}),e>0&&o.jsxs("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,color:T.textMuted,letterSpacing:1,fontWeight:500},children:[e," ",e===1?"item":"items"]})]})]})}function Mm({items:e,removingItems:t,updatingQty:n,onRemove:r,onUpdateQty:i,navigate:a}){return o.jsxs("div",{className:"cart-items",children:[o.jsx("div",{style:{display:"grid",gridTemplateColumns:"120px 1fr auto auto",gap:24,paddingBottom:16,borderBottom:`1.5px solid ${T.border}`,marginBottom:8},children:["Product","","Qty","Price"].map(s=>o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:T.textMuted,fontWeight:600},children:s},s||"details"))}),o.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.map(s=>{const l=s._id||s.id,c=s.product||s,d=c._id||c.id;return o.jsx(Fm,{item:s,isRemoving:t.has(l),isUpdatingQty:n.has(l),onRemove:()=>r(l,d),onUpdateQty:g=>i(l,d,g),navigate:a},l)})})]})}function Fm({item:e,isRemoving:t,isUpdatingQty:n,onRemove:r,onUpdateQty:i,navigate:a}){var p;const s=e.product||{},l=((p=s.image)==null?void 0:p[0])||s.image||s.thumbnail||"/placeholder.jpg",c=s.name||"Unknown Product",d=Number(s.price||0),g=e.quantity||1,f=s._id||s.id;return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"120px 1fr auto auto",gap:24,padding:"24px 0",borderBottom:`1px solid ${T.border}`,alignItems:"center",opacity:t?.5:1,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",pointerEvents:t?"none":"auto"},children:[o.jsx("div",{style:{width:120,height:140,flexShrink:0,overflow:"hidden",cursor:"pointer",borderRadius:6,backgroundColor:`${T.blush}20`,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onClick:()=>a(`/products/${s._id||s.id}`),onMouseEnter:w=>{w.currentTarget.style.boxShadow=`0 8px 20px ${T.rose}25`,w.currentTarget.style.transform="scale(1.02)"},onMouseLeave:w=>{w.currentTarget.style.boxShadow="none",w.currentTarget.style.transform="scale(1)"},children:o.jsx("img",{src:l,alt:c,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onError:w=>w.target.style.display="none",onMouseEnter:w=>w.target.style.transform="scale(1.08)",onMouseLeave:w=>w.target.style.transform="scale(1)"})}),o.jsxs("div",{children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,fontWeight:400,color:T.text,marginBottom:8,cursor:"pointer",lineHeight:1.3,transition:"color 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onClick:()=>a(`/product/${f}`),onMouseEnter:w=>w.currentTarget.style.color=T.burgundy,onMouseLeave:w=>w.currentTarget.style.color=T.text,children:c}),s.metal_type&&o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,color:T.textMuted,letterSpacing:.5,marginBottom:4},children:["Metal: ",s.metal_type]}),s.type&&o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,color:T.textMuted,letterSpacing:.5,marginBottom:12},children:s.type}),o.jsx("button",{onClick:r,disabled:t,style:{background:"none",border:"none",color:T.rose,cursor:t?"not-allowed":"pointer",fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",padding:0,transition:"color 0.2s",fontWeight:600},onMouseEnter:w=>!t&&(w.target.style.color=T.error),onMouseLeave:w=>!t&&(w.target.style.color=T.rose),children:t?"Removing…":"× Remove"})]}),o.jsx(Lm,{qty:g,isUpdating:n,onUpdateQty:i}),o.jsxs("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,background:`linear-gradient(135deg, ${T.rose}, ${T.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textAlign:"right",whiteSpace:"nowrap",fontWeight:400},children:["₹",(d*g).toLocaleString("en-IN")]})]})}function Lm({qty:e,isUpdating:t,onUpdateQty:n}){return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:`${T.blush}20`,border:`1.5px solid ${T.border}`,borderRadius:6,padding:"4px 8px",opacity:t?.6:1,pointerEvents:t?"none":"auto",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsx("button",{onClick:()=>n(Math.max(1,e-1)),disabled:t||e<=1,style:{background:"none",border:"none",color:T.rose,cursor:t||e<=1?"not-allowed":"pointer",fontSize:16,padding:"2px 6px",transition:"color 0.2s",fontWeight:600},onMouseEnter:r=>!t&&e>1&&(r.target.style.color=T.burgundy),onMouseLeave:r=>r.target.style.color=T.rose,children:"−"}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:T.text,minWidth:24,textAlign:"center",fontWeight:700},children:e}),o.jsx("button",{onClick:()=>n(e+1),disabled:t,style:{background:"none",border:"none",color:T.rose,cursor:t?"not-allowed":"pointer",fontSize:16,padding:"2px 6px",transition:"color 0.2s",fontWeight:600},onMouseEnter:r=>!t&&(r.target.style.color=T.burgundy),onMouseLeave:r=>r.target.style.color=T.rose,children:"+"})]})}function _m({subtotal:e,discountAmount:t,shipping:n,total:r,appliedCoupon:i,couponInput:a,couponError:s,onCouponChange:l,onApplyCoupon:c,onRemoveCoupon:d,onCouponErrorClear:g,onCheckout:f}){return o.jsx("div",{className:"cart-sidebar",style:{display:"flex",flexDirection:"column",gap:16,position:"sticky",top:140},children:o.jsxs("div",{style:{background:T.surface,border:`1.5px solid ${T.border}`,padding:40,borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:32},children:[o.jsx("div",{style:{width:20,height:1.5,background:`linear-gradient(90deg, ${T.rose}, ${T.burgundy})`}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:T.burgundy,fontWeight:700},children:"Order Summary"})]}),o.jsx(Vi,{label:"Subtotal",value:`₹${e.toLocaleString("en-IN")}`}),t>0&&o.jsx(Vi,{label:`Discount (${((i==null?void 0:i.code)||(i==null?void 0:i.offercode)||"").toUpperCase()})`,value:`-₹${t.toLocaleString("en-IN")}`,highlight:!0,green:!0}),o.jsx(Vi,{label:"Shipping",value:n===0?"Free":`₹${n}`,highlight:n===0}),n>0&&o.jsx("div",{style:{background:`${T.blush}20`,border:`1px solid ${T.rose}40`,padding:"10px 14px",marginBottom:20,borderRadius:6},children:o.jsxs("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,color:T.rose,letterSpacing:.5,fontWeight:500},children:["Add ₹",Math.max(0,999-e).toLocaleString("en-IN")," for free shipping"]})}),o.jsx("div",{style:{borderTop:`1px solid ${T.border}`,margin:"20px 0 24px"}}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:28},children:[o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,color:T.text},children:"Total"}),o.jsxs("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,background:`linear-gradient(135deg, ${T.rose}, ${T.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",fontWeight:400},children:["₹",r.toLocaleString("en-IN")]})]}),o.jsxs("div",{style:{borderTop:`1px solid ${T.border}`,paddingTop:24,marginBottom:24},children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:T.textMuted,marginBottom:12,fontWeight:600},children:"Apply Coupon"}),i?o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:`${T.blush}20`,border:`1.5px solid ${T.rose}`,padding:"12px 14px",borderRadius:6},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:T.rose,marginBottom:2,fontWeight:700},children:"✓ Coupon Applied"}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,fontWeight:700,color:T.text,letterSpacing:"0.5px"},children:(i.code||i.offercode||"").toUpperCase()})]}),o.jsx("button",{onClick:d,style:{background:"none",border:"none",color:T.rose,cursor:"pointer",fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"0.5px",textTransform:"uppercase",transition:"color 0.2s",fontWeight:600},onMouseEnter:p=>p.target.style.color=T.error,onMouseLeave:p=>p.target.style.color=T.rose,children:"Remove"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8},children:[o.jsx("input",{type:"text",value:a,onChange:p=>{l(p.target.value.toUpperCase()),g()},onKeyDown:p=>p.key==="Enter"&&c(),placeholder:"ENTER CODE",style:{flex:1,background:`${T.blush}20`,border:`1.5px solid ${T.border}`,color:T.text,padding:"10px 14px",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1px",outline:"none",borderRadius:6,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onFocus:p=>{p.target.style.borderColor=T.rose,p.target.style.background=`${T.blush}30`},onBlur:p=>{p.target.style.borderColor=T.border,p.target.style.background=`${T.blush}20`}}),o.jsx("button",{onClick:c,style:{padding:"10px 18px",background:"transparent",border:`1.5px solid ${T.rose}`,color:T.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",whiteSpace:"nowrap",borderRadius:6,fontWeight:600},onMouseEnter:p=>{p.currentTarget.style.background=`linear-gradient(135deg, ${T.rose}, ${T.burgundy})`,p.currentTarget.style.color="white",p.currentTarget.style.borderColor="transparent"},onMouseLeave:p=>{p.currentTarget.style.background="transparent",p.currentTarget.style.color=T.burgundy,p.currentTarget.style.borderColor=T.rose},children:"Apply"})]}),s&&o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,color:T.error,letterSpacing:"0.3px",fontWeight:500},children:["✕ ",s]})]})]}),o.jsx("button",{onClick:f,style:{width:"100%",padding:16,background:`linear-gradient(135deg, ${T.rose}, ${T.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:700,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",borderRadius:6,boxShadow:`0 4px 16px ${T.rose}30`},onMouseEnter:p=>{p.target.style.transform="translateY(-2px)",p.target.style.boxShadow=`0 8px 24px ${T.rose}40`},onMouseLeave:p=>{p.target.style.transform="translateY(0)",p.target.style.boxShadow=`0 4px 16px ${T.rose}30`},children:"Proceed to Checkout →"})]})})}function Vi({label:e,value:t,highlight:n,green:r}){return o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:16,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase",color:T.textMuted,fontWeight:500},children:e}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:r?T.success:n?T.burgundy:T.text,fontWeight:r?700:600},children:t})]})}function Rm(){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:120,gap:20},children:[o.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"}),o.jsx("div",{style:{width:48,height:48,border:`3px solid ${T.border}`,borderTopColor:T.rose,borderRadius:"50%",animation:"spin 1s linear infinite"}}),o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,color:T.textMuted,fontStyle:"italic",fontWeight:300},children:"Loading your cart…"})]})}function wc({icon:e,title:t,sub:n,btn:r,onClick:i}){return o.jsxs("div",{style:{textAlign:"center",padding:"120px 80px"},children:[o.jsx("div",{style:{fontSize:56,color:`${T.rose}40`,marginBottom:24},children:e}),o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:32,fontWeight:300,color:T.text,marginBottom:12,background:`linear-gradient(135deg, ${T.text}, ${T.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:t}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:T.textMuted,letterSpacing:.5,marginBottom:40},children:n}),o.jsx("button",{onClick:i,style:{padding:"14px 48px",background:`linear-gradient(135deg, ${T.rose}, ${T.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:700,borderRadius:6,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:`0 4px 16px ${T.rose}30`},onMouseEnter:a=>{a.target.style.transform="translateY(-2px)",a.target.style.boxShadow=`0 8px 24px ${T.rose}40`},onMouseLeave:a=>{a.target.style.transform="translateY(0)",a.target.style.boxShadow=`0 4px 16px ${T.rose}30`},children:r})]})}const np=b.createContext();function Wm({children:e}){const[t,n]=b.useState([]);b.useEffect(()=>{try{const f=localStorage.getItem("arke_wishlist");f&&n(JSON.parse(f))}catch(f){console.error("Failed to load wishlist:",f)}},[]);const r=b.useCallback(f=>{try{localStorage.setItem("arke_wishlist",JSON.stringify(f))}catch(p){console.error("Failed to save wishlist:",p)}},[]),i=b.useCallback(f=>{n(p=>{const w=f._id||f.id;if(p.some(v=>(v._id||v.id)===w))return p;const h=[...p,f];return r(h),h})},[r]),a=b.useCallback(f=>{n(p=>{const w=p.filter(h=>(h._id||h.id)!==f);return r(w),w})},[r]),s=b.useCallback(f=>t.some(p=>(p._id||p.id)===f),[t]),l=b.useCallback(f=>{const p=f._id||f.id;s(p)?a(p):i(f)},[s,a,i]),c=b.useCallback(()=>{n([]),r([])},[r]),d=b.useCallback(()=>t.length,[t]),g={items:t,addToWishlist:i,removeFromWishlist:a,isInWishlist:s,toggleWishlist:l,clearWishlist:c,getWishlistCount:d};return o.jsx(np.Provider,{value:g,children:e})}function Bm(){const e=ct.useContext(np);if(!e)throw new Error("useWishlist must be used within WishlistProvider");return e}const Q={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function Am(){const e=yt(),{items:t,removeFromWishlist:n}=Bm(),{addToCart:r}=yi(),{success:i,error:a}=tr(),[s,l]=b.useState(new Set),[c,d]=b.useState(new Set),g=p=>{l(w=>new Set([...w,p])),setTimeout(()=>{n(p),i("Removed from wishlist"),l(w=>{const h=new Set(w);return h.delete(p),h})},300)},f=async p=>{const w=p._id||p.id;d(h=>new Set([...h,w]));try{await r(w,1),i("Added to cart! 🛒")}catch(h){a("Failed to add to cart"),console.error(h)}finally{d(h=>{const v=new Set(h);return v.delete(w),v})}};return o.jsxs("div",{style:{background:Q.bg,minHeight:"100vh",paddingTop:106},children:[o.jsx("style",{children:`
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
          border-bottom: 1px solid ${Q.border};
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
          background: linear-gradient(to right, ${Q.rose}, ${Q.burgundy});
          border-radius: 2px;
        }
        .wl-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${Q.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .wl-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -1px;
          background: linear-gradient(135deg, ${Q.text} 0%, ${Q.burgundy} 100%);
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
          color: ${Q.textMuted};
          letter-spacing: 0.5px;
          margin-top: 14px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.25s both;
          position: relative;
          z-index: 2;
        }
        .wl-subtext strong {
          color: ${Q.burgundy};
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
          background: ${Q.surface};
          border: 1.5px solid ${Q.border};
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          animation: slideDown 0.5s ease 0.35s both;
        }
        .wl-card:hover {
          border-color: ${Q.rose};
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
          background: linear-gradient(135deg, ${Q.blush} 0%, ${Q.champagne} 100%);
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
          background: ${Q.rose};
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
          color: ${Q.text};
          line-height: 1.4;
          cursor: pointer;
          transition: color 0.3s;
          margin: 0;
        }
        .wl-card-name:hover {
          color: ${Q.burgundy};
        }

        /* ── Card Price ── */
        .wl-card-price {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: ${Q.burgundy};
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
          border-top: 1px solid ${Q.borderLight};
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
          background: ${Q.rose};
          color: ${Q.surface};
          border-color: ${Q.rose};
        }
        .wl-btn-primary:hover:not(:disabled) {
          background: ${Q.burgundy};
          border-color: ${Q.burgundy};
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(139,70,84,0.2);
        }
        .wl-btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .wl-btn-secondary {
          background: transparent;
          color: ${Q.textMuted};
          border-color: ${Q.border};
        }
        .wl-btn-secondary:hover:not(:disabled) {
          background: ${Q.blush};
          color: ${Q.burgundy};
          border-color: ${Q.rose};
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
          color: ${Q.textMuted};
          font-style: italic;
          margin: 0;
          animation: fadeInUp 0.6s ease 0.3s both;
        }
        .wl-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${Q.textMuted};
          letter-spacing: 0.5px;
          max-width: 300px;
          animation: fadeInUp 0.6s ease 0.4s both;
        }
        .wl-empty-cta {
          padding: 14px 36px;
          background: ${Q.rose};
          color: ${Q.surface};
          border: 1.5px solid ${Q.rose};
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
          background: ${Q.burgundy};
          border-color: ${Q.burgundy};
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
      `}),o.jsxs("div",{className:"wl-hero",children:[o.jsxs("div",{className:"wl-eyebrow",children:[o.jsx("div",{className:"wl-eyebrow-line"}),o.jsx("span",{className:"wl-eyebrow-text",children:"Personal Collection"})]}),o.jsx("h1",{className:"wl-heading",children:"My Wishlist"}),t.length>0&&o.jsxs("p",{className:"wl-subtext",children:["You have ",o.jsx("strong",{children:t.length})," item",t.length!==1?"s":""," saved"]})]}),o.jsx("div",{className:"wl-content",children:t.length===0?o.jsxs("div",{className:"wl-empty",children:[o.jsx("div",{className:"wl-empty-icon",children:"♡"}),o.jsx("h2",{className:"wl-empty-title",children:"Your wishlist is empty"}),o.jsx("p",{className:"wl-empty-sub",children:"Start saving your favorite pieces for later"}),o.jsx("button",{onClick:()=>e("/products"),className:"wl-empty-cta",children:"Explore Collection"})]}):o.jsx("div",{className:"wl-grid",children:t.map((p,w)=>{const h=p._id||p.id,v=s.has(h),y=c.has(h),m=(()=>{var k;return Array.isArray(p.image)?ze(p.image[0]):ze(((k=p.images)==null?void 0:k[0])||p.image||p.thumbnail)})(),u=p.name||p.title||"Product",x=Number(p.price||p.salePrice||0);return o.jsxs("div",{className:`wl-card ${v?"removing":""}`,style:{animation:`slideDown 0.5s cubic-bezier(0.34,1.56,0.64,1) ${w*40}ms both`},children:[o.jsxs("div",{className:"wl-card-image",onClick:()=>e(`/product/${h}`),children:[m?o.jsx("img",{src:m,alt:u,onError:k=>k.target.style.display="none"}):o.jsx(Em,{product:p,small:!0}),o.jsx("div",{className:"wl-card-badge",onClick:()=>g(h),children:"♡"})]}),o.jsxs("div",{className:"wl-card-body",children:[o.jsx("h3",{className:"wl-card-name",onClick:()=>e(`/product/${h}`),children:u}),o.jsxs("div",{className:"wl-card-price",children:["₹",x.toLocaleString("en-IN")]}),o.jsxs("div",{className:"wl-card-buttons",children:[o.jsx("button",{onClick:()=>f(p),disabled:y,className:"wl-btn wl-btn-primary",children:y?"Adding...":"Add to Cart"}),o.jsx("button",{onClick:()=>g(h),disabled:v,className:"wl-btn wl-btn-secondary",children:v?"Removing...":"Remove"})]})]})]},h)})})})]})}const H={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4"},Dm=async()=>{const e=await oe.getGiftForHer();return e.success&&e.data?e.data:null},It={title:"Her",subtitle:"Curated For Her",description:"Timeless pieces that speak when words fall short. Each jewel chosen to celebrate the women who make life beautiful.",badgeText:"♀ Curated For Her"},Om=[{label:"Anniversary",icon:"💕"},{label:"Birthday",icon:"✨"},{label:"Wedding",icon:"👑"},{label:"Just Because",icon:"💎"}],Um=[{label:"All Gifts",value:"all"},{label:"Rings",value:"ring"},{label:"Necklaces",value:"necklace"},{label:"Earrings",value:"earring"},{label:"Bracelets",value:"bracelet"},{label:"Sets",value:"set"}];function Hm(){const[e,t]=b.useState(It),[n,r]=b.useState([]),[i,a]=b.useState(Om),[s,l]=b.useState(Um),[c,d]=b.useState(!0),[g,f]=b.useState("all"),[p,w]=b.useState("default"),[h,v]=b.useState(null);b.useEffect(()=>{window.scrollTo(0,0),(async()=>{var x,k,N;try{const j=await Dm();j&&(j.page&&t({title:j.page.title||It.title,subtitle:j.page.subtitle||It.subtitle,description:j.page.description||It.description,badgeText:j.page.badgeText||It.badgeText}),(x=j.products)!=null&&x.length&&r(j.products),(k=j.filters)!=null&&k.length&&l(j.filters),(N=j.tags)!=null&&N.length&&a(j.tags))}catch(j){console.error("GiftForHer load error:",j)}finally{d(!1)}})()},[]);const m=[...n.filter(u=>{var j;if(g==="all")return!0;const x=(u.name||"").toLowerCase(),k=(u.tags||[]).join(" ").toLowerCase(),N=(((j=u.category)==null?void 0:j.name)||"").toLowerCase();return x.includes(g)||k.includes(g)||N.includes(g)})].sort((u,x)=>p==="price-asc"?(u.price||0)-(x.price||0):p==="price-desc"?(x.price||0)-(u.price||0):p==="name"?(u.name||"").localeCompare(x.name||""):0);return o.jsxs("div",{style:{background:H.bg,minHeight:"100vh",paddingTop:"120px"},children:[o.jsx("style",{children:`
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
          background: ${H.blush}30 !important;
          border-color: ${H.rose} !important;
          color: ${H.burgundy} !important;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid ${H.border};
          border-top-color: ${H.rose};
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
      `}),o.jsxs("div",{className:"gfh-hero",style:{position:"relative",padding:"60px 80px 50px",overflow:"hidden"},children:[o.jsx("div",{style:{position:"absolute",top:-60,right:-60,width:400,height:400,borderRadius:"50%",background:`radial-gradient(circle, ${H.rose}12, transparent 70%)`,pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",bottom:0,left:"30%",width:300,height:300,borderRadius:"50%",background:`radial-gradient(circle, ${H.blush}12, transparent 70%)`,pointerEvents:"none"}}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:24,position:"relative",zIndex:1},children:[o.jsxs("div",{children:[o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:H.burgundy,marginBottom:14,fontWeight:600},children:["♀ ",e.badgeText||It.badgeText]}),o.jsxs("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(42px, 5vw, 72px)",fontWeight:300,color:H.text,margin:0,lineHeight:1.1,background:`linear-gradient(135deg, ${H.text}, ${H.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:["Gift for"," ",o.jsx("span",{style:{color:H.rose,background:"none",WebkitTextFillColor:"unset",fontStyle:"italic"},children:e.title||It.title})]}),e.subtitle&&o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:H.textMuted,marginTop:10,fontWeight:500},children:e.subtitle}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:14,color:H.textMuted,marginTop:14,letterSpacing:"0.3px",maxWidth:480,lineHeight:1.8,fontWeight:400},children:e.description||It.description})]}),o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{color:H.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:600},children:"Sort by"}),o.jsxs("select",{value:p,onChange:u=>w(u.target.value),style:{background:H.surface,border:`1.5px solid ${H.border}`,color:H.text,padding:"10px 14px",fontFamily:"'Poppins', sans-serif",fontSize:11,cursor:"pointer",outline:"none",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",fontWeight:500},onFocus:u=>{u.target.style.borderColor=H.rose,u.target.style.boxShadow=`0 0 0 3px ${H.blush}40`},onBlur:u=>{u.target.style.borderColor=H.border,u.target.style.boxShadow="none"},children:[o.jsx("option",{value:"default",children:"Most Popular"}),o.jsx("option",{value:"price-asc",children:"Price: Low to High"}),o.jsx("option",{value:"price-desc",children:"Price: High to Low"}),o.jsx("option",{value:"name",children:"Name: A - Z"})]})]})]}),i.length>0&&o.jsx("div",{className:"gfh-occasions",style:{display:"flex",gap:12,marginTop:40,flexWrap:"wrap",position:"relative",zIndex:1},children:i.map((u,x)=>o.jsxs("div",{className:"gfh-occ",onMouseEnter:()=>v(x),onMouseLeave:()=>v(null),style:{padding:"11px 22px",border:`1.5px solid ${h===x?H.rose:H.border}`,background:h===x?`${H.blush}20`:"transparent",display:"flex",alignItems:"center",gap:8,borderRadius:"6px"},children:[o.jsx("span",{className:"gfh-occ-icon",style:{fontSize:16},children:u.icon}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:h===x?H.burgundy:H.textMuted,fontWeight:600},children:u.label})]},u._id||x))})]}),o.jsx("div",{className:"gfh-divider",style:{height:1.5,background:`linear-gradient(90deg, transparent, ${H.rose}40, transparent)`,margin:"32px 80px 0"}}),s.length>0&&o.jsxs("div",{className:"gfh-filters",style:{padding:"24px 80px",display:"flex",gap:8,alignItems:"center",overflowX:"auto",overflowY:"hidden"},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:H.textMuted,marginRight:12,whiteSpace:"nowrap",fontWeight:600},children:"Filter"}),s.map((u,x)=>o.jsx("button",{className:"gfh-btn",onClick:()=>f(u.value),style:{padding:"9px 18px",background:g===u.value?`linear-gradient(135deg, ${H.rose}, ${H.burgundy})`:"transparent",border:`1.5px solid ${g===u.value?"transparent":H.border}`,color:g===u.value?"white":H.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",whiteSpace:"nowrap",borderRadius:"6px",fontWeight:600,boxShadow:g===u.value?`0 4px 12px ${H.rose}30`:"none"},children:u.label},u._id||x))]}),o.jsxs("div",{className:"gfh-products",style:{padding:"24px 80px 80px"},children:[!c&&o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1px",color:H.textMuted,textTransform:"uppercase",marginBottom:32,fontWeight:600},children:[m.length," piece",m.length!==1?"s":""," found"]}),c?o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 40px",gap:20},children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,color:H.textMuted,fontStyle:"italic",fontWeight:300},children:"Curating her collection…"})]}):m.length===0?o.jsx("div",{style:{textAlign:"center",padding:"80px 40px",color:H.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:300},children:"No pieces found"}):o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:24},children:m.map((u,x)=>o.jsx(nn,{product:u},u._id||x))})]}),o.jsxs("div",{className:"gfh-cta",style:{margin:"0 80px 80px",padding:"52px 44px",border:`1.5px solid ${H.border}`,background:`${H.blush}12`,textAlign:"center",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:H.burgundy,marginBottom:16,fontWeight:700},children:"◈ Need Help Choosing?"}),o.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:36,fontWeight:300,color:H.text,margin:"0 0 12px",letterSpacing:.5},children:"Gift Curation Service"}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:H.textMuted,letterSpacing:"0.3px",marginBottom:32,lineHeight:1.8,maxWidth:600,margin:"0 auto 32px",fontWeight:400},children:"Tell us the occasion, budget, and her style — we'll handpick the perfect piece just for her."}),o.jsx(Me,{to:"/customer-care",className:"gfh-cta",style:{display:"inline-block",padding:"13px 36px",background:"transparent",border:`1.5px solid ${H.rose}`,color:H.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",textDecoration:"none",borderRadius:"6px",fontWeight:700,boxShadow:`0 4px 12px ${H.rose}20`},children:"Get Personalized Help →"})]})]})}const U={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",blue:"#7a9fb5",blueDark:"#5f7a95"},Gm=async()=>{const e=await oe.getGiftForHim();return e.success&&e.data?e.data:null},Mt={title:"Him",subtitle:"Curated For Him",description:"Jewellery crafted for the modern man. Bold, refined, and built to be worn — not just admired.",badgeText:"♂ Curated For Him"},Ym=[{label:"The Classic",desc:"Timeless & understated",icon:"◈"},{label:"The Bold",desc:"Statement pieces",icon:"✦"},{label:"The Minimal",desc:"Clean & refined",icon:"◇"},{label:"The Gifter",desc:"For someone special",icon:"♡"}],Vm=[{label:"All Gifts",value:"all"},{label:"Rings",value:"ring"},{label:"Bracelets",value:"bracelet"},{label:"Chains",value:"chain"},{label:"Pendants",value:"pendant"},{label:"Cufflinks",value:"cufflink"}];function Qm(){const[e,t]=b.useState(Mt),[n,r]=b.useState([]),[i,a]=b.useState(Ym),[s,l]=b.useState(Vm),[c,d]=b.useState(!0),[g,f]=b.useState("all"),[p,w]=b.useState("default"),[h,v]=b.useState(null);b.useEffect(()=>{window.scrollTo(0,0),(async()=>{var x,k,N;try{const j=await Gm();j&&(j.page&&t({title:j.page.title||Mt.title,subtitle:j.page.subtitle||Mt.subtitle,description:j.page.description||Mt.description,badgeText:j.page.badgeText||Mt.badgeText}),(x=j.products)!=null&&x.length&&r(j.products),(k=j.filters)!=null&&k.length&&l(j.filters),(N=j.tags)!=null&&N.length&&a(j.tags))}catch(j){console.error("GiftForHim load error:",j)}finally{d(!1)}})()},[]);const m=[...n.filter(u=>{var j;if(g==="all")return!0;const x=(u.name||"").toLowerCase(),k=(u.tags||[]).join(" ").toLowerCase(),N=(((j=u.category)==null?void 0:j.name)||"").toLowerCase();return x.includes(g)||k.includes(g)||N.includes(g)})].sort((u,x)=>p==="price-asc"?(u.price||0)-(x.price||0):p==="price-desc"?(x.price||0)-(u.price||0):p==="name"?(u.name||"").localeCompare(x.name||""):0);return o.jsxs("div",{style:{background:U.bg,minHeight:"100vh",paddingTop:"120px"},children:[o.jsx("style",{children:`
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
          color: ${U.blue} !important;
          border-color: ${U.blue} !important;
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
          border: 3px solid ${U.border};
          border-top-color: ${U.blue};
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
      `}),o.jsxs("div",{className:"gfm-hero",style:{position:"relative",padding:"60px 80px 50px",overflow:"hidden"},children:[o.jsx("div",{style:{position:"absolute",top:-80,right:-80,width:500,height:500,borderRadius:"50%",background:`radial-gradient(circle, ${U.blue}12, transparent 70%)`,pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",bottom:-40,left:"20%",width:350,height:350,borderRadius:"50%",background:`radial-gradient(circle, ${U.champagne}12, transparent 70%)`,pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",top:40,right:80,width:120,height:120,border:`1px solid ${U.blue}15`,transform:"rotate(45deg)",pointerEvents:"none"}}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:24,position:"relative",zIndex:1},children:[o.jsxs("div",{children:[o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:U.blueDark,marginBottom:14,fontWeight:600},children:["♂ ",e.badgeText||Mt.badgeText]}),o.jsxs("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(42px, 5vw, 72px)",fontWeight:300,color:U.text,margin:0,lineHeight:1.1,background:`linear-gradient(135deg, ${U.text}, ${U.blueDark})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:["Gift for"," ",o.jsx("span",{style:{color:U.blue,background:"none",WebkitTextFillColor:"unset",fontStyle:"italic"},children:e.title||Mt.title})]}),e.subtitle&&o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:U.textMuted,marginTop:10,fontWeight:500},children:e.subtitle}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:14,color:U.textMuted,marginTop:14,letterSpacing:"0.3px",maxWidth:480,lineHeight:1.8,fontWeight:400},children:e.description||Mt.description})]}),o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{color:U.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:600},children:"Sort by"}),o.jsxs("select",{value:p,onChange:u=>w(u.target.value),style:{background:U.surface,border:`1.5px solid ${U.border}`,color:U.text,padding:"10px 14px",fontFamily:"'Poppins', sans-serif",fontSize:11,cursor:"pointer",outline:"none",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",fontWeight:500},onFocus:u=>{u.target.style.borderColor=U.blue,u.target.style.boxShadow=`0 0 0 3px ${U.blue}25`},onBlur:u=>{u.target.style.borderColor=U.border,u.target.style.boxShadow="none"},children:[o.jsx("option",{value:"default",children:"Most Popular"}),o.jsx("option",{value:"price-asc",children:"Price: Low to High"}),o.jsx("option",{value:"price-desc",children:"Price: High to Low"}),o.jsx("option",{value:"name",children:"Name: A - Z"})]})]})]}),i.length>0&&o.jsx("div",{className:"gfm-personas",style:{display:"flex",gap:16,marginTop:40,flexWrap:"wrap",position:"relative",zIndex:1},children:i.map((u,x)=>o.jsxs("div",{className:"gfm-card",onMouseEnter:()=>v(x),onMouseLeave:()=>v(null),style:{padding:"18px 24px",minWidth:140,border:`1.5px solid ${h===x?U.blue:U.border}`,background:h===x?`${U.blue}12`:"transparent",borderRadius:"8px"},children:[o.jsx("div",{className:"gfm-icon",style:{fontSize:16,marginBottom:8},children:u.icon}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:h===x?U.blueDark:U.text,marginBottom:4,fontWeight:600},children:u.label}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,color:U.textMuted,letterSpacing:"0.3px",fontWeight:400},children:u.desc})]},u._id||x))})]}),o.jsx("div",{className:"gfm-divider",style:{height:1.5,background:`linear-gradient(90deg, transparent, ${U.blue}40, transparent)`,margin:"32px 80px 0"}}),s.length>0&&o.jsxs("div",{className:"gfm-filters",style:{padding:"24px 80px",display:"flex",gap:8,alignItems:"center",overflowX:"auto",overflowY:"hidden"},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:U.textMuted,marginRight:12,whiteSpace:"nowrap",fontWeight:600},children:"Filter"}),s.map((u,x)=>o.jsx("button",{className:"gfm-btn",onClick:()=>f(u.value),style:{padding:"9px 18px",background:g===u.value?`linear-gradient(135deg, ${U.blue}, ${U.blueDark})`:"transparent",border:`1.5px solid ${g===u.value?"transparent":U.border}`,color:g===u.value?"white":U.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",whiteSpace:"nowrap",borderRadius:"6px",fontWeight:600,boxShadow:g===u.value?`0 4px 12px ${U.blue}30`:"none"},children:u.label},u._id||x))]}),o.jsxs("div",{className:"gfm-products",style:{padding:"24px 80px 80px"},children:[!c&&o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1px",color:U.textMuted,textTransform:"uppercase",marginBottom:32,fontWeight:600},children:[m.length," piece",m.length!==1?"s":""," found"]}),c?o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 40px",gap:20},children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,color:U.textMuted,fontStyle:"italic",fontWeight:300},children:"Curating his collection…"})]}):m.length===0?o.jsx("div",{style:{textAlign:"center",padding:"80px 40px",color:U.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:300},children:"No pieces found"}):o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:24},children:m.map((u,x)=>o.jsx(nn,{product:u},u._id||x))})]}),o.jsxs("div",{className:"gfm-cta",style:{margin:"0 80px 80px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("div",{style:{padding:"48px 40px",border:`1.5px solid ${U.border}`,background:`${U.blue}12`,borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:U.blueDark,marginBottom:12,fontWeight:700},children:"◈ Premium Packaging"}),o.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:300,color:U.text,margin:"0 0 12px"},children:"Gift Wrapping"}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,color:U.textMuted,lineHeight:1.8,margin:"0 0 24px",fontWeight:400},children:"Every order ships in our signature matte black box with a handwritten note."}),o.jsx(Me,{to:"/customer-care",className:"gfm-link",style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:U.blue,textDecoration:"none",borderBottom:`1px solid ${U.blue}40`,paddingBottom:4,display:"inline-flex",alignItems:"center",gap:6,fontWeight:700},children:"Learn more →"})]}),o.jsxs("div",{style:{padding:"48px 40px",border:`1.5px solid ${U.border}`,background:`${U.champagne}12`,borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:U.burgundy,marginBottom:12,fontWeight:700},children:"✦ Not Sure?"}),o.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:300,color:U.text,margin:"0 0 12px"},children:"Gift Cards"}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,color:U.textMuted,lineHeight:1.8,margin:"0 0 24px",fontWeight:400},children:"Let him choose the perfect piece. Available from ₹500 to ₹50,000."}),o.jsx(Me,{to:"/customer-care",className:"gfm-link-gold",style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:U.burgundy,textDecoration:"none",borderBottom:`1px solid ${U.burgundy}40`,paddingBottom:4,display:"inline-flex",alignItems:"center",gap:6,fontWeight:700},children:"Buy a gift card →"})]})]})]})}const M={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4",success:"#70c878",warning:"#ffc107",info:"#2196f3",error:"#d97070"};function Km(){var w,h,v;const{user:e}=Zn(),[t,n]=b.useState([]),[r,i]=b.useState(!0),[a,s]=b.useState(""),[l,c]=b.useState(null);b.useEffect(()=>{window.scrollTo(0,0),d()},[e]);const d=async()=>{if(!e){s("Please log in to view your orders"),i(!1);return}i(!0),s("");try{const y=await fetch(`http://localhost:5050/api/orders/${e.id}`,{method:"GET",headers:{Authorization:`Bearer ${localStorage.getItem("arke_token")}`,"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}});if(!y.ok){y.status===401?s("Session expired. Please log in again."):y.status===404?n([]):s("Failed to load orders. Please try again.");return}const m=await y.json();n(m.data||[])}catch(y){s("Network error. Please check your connection."),console.error("Fetch orders error:",y)}finally{i(!1)}},g=y=>({pending:`${M.warning}20`,processing:`${M.info}20`,shipped:`${M.success}20`,delivered:`${M.success}20`,cancelled:`${M.error}20`})[y==null?void 0:y.toLowerCase()]||`${M.rose}20`,f=y=>({pending:`${M.warning}40`,processing:`${M.info}40`,shipped:`${M.success}40`,delivered:`${M.success}40`,cancelled:`${M.error}40`})[y==null?void 0:y.toLowerCase()]||`${M.rose}40`,p=y=>({pending:M.warning,processing:M.info,shipped:M.success,delivered:M.success,cancelled:M.error})[y==null?void 0:y.toLowerCase()]||M.rose;return o.jsxs("div",{style:{background:M.bg,minHeight:"100vh",paddingTop:120},children:[o.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
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
          color: ${M.text};
          margin: 0 0 12px 0;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${M.text}, ${M.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .orders-header p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          letter-spacing: 0.5px;
          color: ${M.textMuted};
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
          border: 3px solid ${M.border};
          border-top-color: ${M.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        .loading-text {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: ${M.textMuted};
          letter-spacing: 0.5px;
          font-weight: 400;
        }

        .error-state {
          padding: 24px 20px;
          background: ${M.error}15;
          border: 1.5px solid ${M.error}40;
          border-radius: 8px;
          text-align: center;
          margin: 40px 0;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .error-state p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${M.error}90;
          letter-spacing: 0.3px;
          margin: 0;
          font-weight: 500;
        }

        .empty-state {
          text-align: center;
          padding: 80px 40px;
          border: 1.5px solid ${M.border};
          border-radius: 12px;
          background: ${M.surface};
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
          color: ${M.text};
          margin: 0 0 12px 0;
        }

        .empty-state p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${M.textMuted};
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
          background: linear-gradient(135deg, ${M.rose}, ${M.burgundy});
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 16px ${M.rose}30;
        }

        .empty-state a:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px ${M.rose}40;
        }

        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .order-card {
          border: 1.5px solid ${M.border};
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          background: ${M.surface};
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .order-card:hover {
          border-color: ${M.rose};
          box-shadow: 0 8px 24px rgba(232, 180, 196, 0.2);
          transform: translateY(-2px);
        }

        .order-header {
          padding: 20px 24px;
          background: ${M.blush}15;
          border-bottom: 1.5px solid ${M.border};
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
          color: ${M.burgundy};
          margin-bottom: 4px;
        }

        .order-date {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3px;
          color: ${M.textMuted};
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
          color: ${M.textMuted};
          margin-bottom: 6px;
        }

        .info-value {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${M.text};
          letter-spacing: 0.3px;
          font-weight: 500;
        }

        .amount-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 1px;
          background: linear-gradient(135deg, ${M.rose}, ${M.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .order-items {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: ${M.textMuted};
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .order-actions {
          padding: 16px 24px;
          background: ${M.blush}8;
          border-top: 1.5px solid ${M.border};
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 9px 16px;
          background: transparent;
          border: 1.5px solid ${M.rose};
          color: ${M.burgundy};
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
          border-color: ${M.burgundy};
          background: linear-gradient(135deg, ${M.rose}20, ${M.burgundy}15);
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
          background: ${M.surface};
          border: 1.5px solid ${M.border};
          border-radius: 12px;
          padding: 40px;
          max-width: 600px;
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
          border-bottom: 1.5px solid ${M.border};
        }

        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          letter-spacing: 1px;
          color: ${M.text};
          background: linear-gradient(135deg, ${M.text}, ${M.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .modal-close {
          background: none;
          border: none;
          color: ${M.textMuted};
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
          color: ${M.burgundy};
        }

        .order-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid ${M.border};
        }

        .order-item:last-child {
          border-bottom: none;
        }

        .item-details h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: ${M.text};
          margin: 0 0 6px 0;
          letter-spacing: 0.3px;
        }

        .item-details p {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: ${M.textMuted};
          margin: 0;
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .item-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          background: linear-gradient(135deg, ${M.rose}, ${M.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: 0.5px;
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
          border-top: 1.5px solid ${M.border};
          font-weight: 700;
        }

        @media (max-width: 768px) {
          .orders-container {
            padding: 0 20px 60px;
          }

          .orders-header h1 {
            font-size: 36px;
          }

          .order-content {
            grid-template-columns: 1fr 1fr;
            gap: 16px;
          }

          .modal-content {
            padding: 24px;
          }
        }
      `}),o.jsxs("div",{className:"orders-container",children:[o.jsxs("div",{className:"orders-header",children:[o.jsx("h1",{children:"My Orders"}),o.jsx("p",{children:"View and manage all your ARKE purchases"})]}),r&&o.jsxs("div",{className:"loading-state",children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("p",{className:"loading-text",children:"Loading your orders..."})]}),a&&!r&&o.jsx("div",{className:"error-state",children:o.jsxs("p",{children:["⚠️ ",a]})}),!r&&!a&&t.length===0&&o.jsxs("div",{className:"empty-state",children:[o.jsx("div",{className:"empty-state-icon",children:"📦"}),o.jsx("h2",{children:"No Orders Yet"}),o.jsx("p",{children:"You haven't placed any orders yet. Start shopping to see your orders here!"}),o.jsx("a",{href:"/products",children:"Browse Collections"})]}),!r&&!a&&t.length>0&&o.jsx("div",{className:"orders-list",children:t.map(y=>{var m,u,x,k,N,j;return o.jsxs("div",{className:"order-card",onClick:()=>c(y),children:[o.jsxs("div",{className:"order-header",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"order-id",children:["Order #",y.orderNumber||y._id.slice(-6)]}),o.jsx("div",{className:"order-date",children:new Date(y.createdAt).toLocaleDateString("en-IN")})]}),o.jsx("div",{className:"order-status",style:{background:g(y.status),border:`1px solid ${f(y.status)}`,color:p(y.status)},children:(m=y.status)==null?void 0:m.toUpperCase()})]}),o.jsxs("div",{className:"order-content",children:[o.jsxs("div",{className:"order-info",children:[o.jsx("div",{className:"info-label",children:"Total Amount"}),o.jsxs("div",{className:"amount-value",children:["₹",((u=y.totalAmount)==null?void 0:u.toLocaleString("en-IN"))||"0"]})]}),o.jsxs("div",{className:"order-info",children:[o.jsx("div",{className:"info-label",children:"Items"}),o.jsxs("div",{className:"info-value",children:[((x=y.items)==null?void 0:x.length)||0," item(s)"]})]}),o.jsxs("div",{className:"order-info",children:[o.jsx("div",{className:"info-label",children:"Delivery"}),o.jsx("div",{className:"info-value",children:y.estimatedDelivery?new Date(y.estimatedDelivery).toLocaleDateString("en-IN"):"Processing"})]}),o.jsxs("div",{className:"order-info",children:[o.jsx("div",{className:"info-label",children:"Payment"}),o.jsx("div",{className:"info-value",children:((k=y.paymentStatus)==null?void 0:k.toUpperCase())||"PENDING"})]})]}),o.jsxs("div",{className:"order-actions",children:[o.jsx("button",{className:"action-btn",children:"View Details"}),((N=y.status)==null?void 0:N.toLowerCase())==="shipped"&&o.jsx("button",{className:"action-btn",children:"Track Order"}),["pending","processing"].includes((j=y.status)==null?void 0:j.toLowerCase())&&o.jsx("button",{className:"action-btn",children:"Cancel Order"})]})]},y._id)})})]}),l&&o.jsx("div",{className:"modal",onClick:()=>c(null),children:o.jsxs("div",{className:"modal-content",onClick:y=>y.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h2",{className:"modal-title",children:"Order Details"}),o.jsx("button",{className:"modal-close",onClick:()=>c(null),children:"✕"})]}),o.jsxs("div",{children:[o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("div",{className:"info-label",children:"Order Number"}),o.jsxs("div",{className:"info-value",children:["#",l.orderNumber||l._id.slice(-6)]})]}),o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("div",{className:"info-label",children:"Order Date"}),o.jsx("div",{className:"info-value",children:new Date(l.createdAt).toLocaleDateString("en-IN",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("div",{className:"info-label",children:"Status"}),o.jsx("div",{className:"order-status",style:{background:g(l.status),border:`1px solid ${f(l.status)}`,color:p(l.status)},children:(w=l.status)==null?void 0:w.toUpperCase()})]}),o.jsxs("div",{style:{marginBottom:32,paddingTop:24,borderTop:`1.5px solid ${M.border}`},children:[o.jsx("div",{className:"info-label",style:{marginBottom:16},children:"Items Ordered"}),(h=l.items)==null?void 0:h.map((y,m)=>{var u;return o.jsxs("div",{className:"order-item",children:[o.jsxs("div",{className:"item-details",children:[o.jsx("h4",{children:y.name}),o.jsxs("p",{children:["Qty: ",y.quantity," × ₹",(u=y.price)==null?void 0:u.toLocaleString("en-IN")]})]}),o.jsxs("div",{className:"item-price",children:["₹",(y.quantity*y.price).toLocaleString("en-IN")]})]},m)})]}),o.jsxs("div",{style:{paddingTop:24,borderTop:`1.5px solid ${M.border}`},children:[o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{className:"info-label",style:{margin:0},children:"Subtotal"}),o.jsxs("span",{className:"info-value",children:["₹",(l.totalAmount-(l.shipping||0)).toLocaleString("en-IN")]})]}),o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{className:"info-label",style:{margin:0},children:"Shipping"}),o.jsxs("span",{className:"info-value",children:["₹",(l.shipping||0).toLocaleString("en-IN")]})]}),o.jsxs("div",{className:"summary-row total",children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,letterSpacing:"0.5px",color:M.text},children:"TOTAL"}),o.jsxs("span",{className:"amount-value",children:["₹",(v=l.totalAmount)==null?void 0:v.toLocaleString("en-IN")]})]})]})]})]})})]})}const E={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function Xm(){b.useEffect(()=>{window.scrollTo(0,0)},[]);const[e,t]=b.useState([]),[n,r]=b.useState(""),[i,a]=b.useState(""),[s,l]=b.useState(""),[c,d]=b.useState(5),[g,f]=b.useState(!1),[p,w]=b.useState(!1),{success:h,error:v}=tr();b.useEffect(()=>{y()},[]);const y=()=>{try{f(!0);const j=localStorage.getItem("about_comments");if(j){const $=JSON.parse(j);t(Array.isArray($)?$:[])}}catch(j){console.error("Failed to load comments:",j)}finally{f(!1)}},m=async j=>{if(j.preventDefault(),!i.trim()){v("Please enter your name");return}if(!s.trim()){v("Please enter your email");return}if(!n.trim()){v("Please enter a comment");return}w(!0);try{const S=[{id:Date.now(),name:i.trim(),email:s.trim(),text:n.trim(),rating:c,timestamp:new Date().toISOString(),date:new Date().toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"numeric"})},...e];localStorage.setItem("about_comments",JSON.stringify(S)),t(S),r(""),a(""),l(""),d(5),h("Thank you! Your feedback has been posted.")}catch($){console.error("Error posting comment:",$),v("Failed to post comment. Please try again.")}finally{w(!1)}},u=[{label:"Happy Customers",value:"50K+",icon:"💕"},{label:"Products Sold",value:"100K+",icon:"💎"},{label:"Years in Business",value:"4+",icon:"👑"},{label:"5-Star Reviews",value:"9.8/10",icon:"✨"}],x=[{name:"Priya Sharma",location:"Mumbai, India",text:"ARKE jewellery is absolutely stunning! The quality is exceptional and the customer service is outstanding. I've bought multiple pieces and I'm obsessed!",rating:5},{name:"Ananya Patel",location:"Delhi, India",text:"Finally found a brand that offers luxury jewellery at affordable prices. Every piece is a masterpiece. Highly recommended!",rating:5},{name:"Neha Kapoor",location:"Bangalore, India",text:"The hallmark certified gold and waterproof design gives me complete peace of mind. ARKE is my go-to for all occasions!",rating:5}],k=[{icon:"✨",title:"Clarity",desc:"Transparent pricing, genuine products, and honest communication. No hidden surprises."},{icon:"💎",title:"Quality",desc:"Hallmark certified, precision crafted, and built to last. Every detail matters."},{icon:"💕",title:"Loyalty",desc:"We value long-term relationships. Lifetime support and exclusive benefits for you."}],N=[{year:2020,title:"The Beginning",desc:"ARKE was founded with a vision to democratize luxury jewellery."},{year:2021,title:"First Collection",desc:"Launched 50+ unique designs, all hallmark certified & handcrafted."},{year:2022,title:"Expansion",desc:"Reached 50K+ customers across India with premium quality pieces."},{year:2023,title:"Innovation",desc:"Introduced waterproof & tarnish-proof technology to collections."},{year:2024,title:"Today",desc:"Growing strong with new designs, partnerships, and experiences."}];return o.jsxs("div",{style:{background:E.bg,minHeight:"100vh",paddingTop:120},children:[o.jsx("style",{children:`
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
          border-bottom: 1px solid ${E.border};
        }

        .about-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 300;
          letter-spacing: 3px;
          color: ${E.text};
          margin-bottom: 24px;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${E.text}, ${E.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-hero p {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          letter-spacing: 0.5px;
          color: ${E.textMuted};
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
          color: ${E.text};
          margin-bottom: 50px;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          background: linear-gradient(135deg, ${E.text}, ${E.burgundy});
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
          background: linear-gradient(90deg, ${E.rose}, transparent);
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
          color: ${E.textMuted};
          letter-spacing: 0.3px;
        }

        .section-text h3 {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: ${E.burgundy};
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
          background: linear-gradient(135deg, ${E.blush}30, ${E.champagne}20);
          border: 1.5px solid ${E.border};
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
          border: 1.5px solid ${E.border};
          background: ${E.surface};
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
          background: linear-gradient(90deg, transparent, ${E.rose}15, transparent);
          transition: left 0.6s ease;
        }

        .value-card:hover {
          border-color: ${E.rose};
          background: ${E.surface};
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
          color: ${E.burgundy};
          margin-bottom: 16px;
        }

        .value-card p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${E.textMuted};
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
          border: 1.5px solid ${E.border};
          background: ${E.surface};
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .achievement-card:hover {
          border-color: ${E.rose};
          background: linear-gradient(135deg, ${E.blush}8, ${E.champagne}4);
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
          background: linear-gradient(135deg, ${E.rose}, ${E.burgundy});
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
          color: ${E.textMuted};
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
          background: linear-gradient(180deg, ${E.rose}, ${E.rose}40, transparent);
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
          background: ${E.rose};
          border-radius: 50%;
          border: 3px solid ${E.bg};
          box-shadow: 0 0 0 6px ${E.rose}30;
          transition: all 0.3s;
        }

        .timeline-item:hover::before {
          transform: scale(1.3);
          box-shadow: 0 0 0 8px ${E.rose}40;
        }

        .timeline-year {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          letter-spacing: 1px;
          background: linear-gradient(135deg, ${E.rose}, ${E.burgundy});
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
          color: ${E.burgundy};
          margin-bottom: 12px;
        }

        .timeline-content p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${E.textMuted};
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
          border: 1.5px solid ${E.border};
          background: ${E.surface};
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
          color: ${E.rose}30;
          font-family: 'Cormorant Garamond', serif;
        }

        .testimonial-card:hover {
          border-color: ${E.rose};
          background: linear-gradient(135deg, ${E.blush}8, ${E.champagne}4);
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
          color: ${E.rose};
          font-size: 14px;
        }

        .testimonial-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.9;
          color: ${E.textMuted};
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
          color: ${E.text};
          margin-bottom: 4px;
          position: relative;
          z-index: 1;
        }

        .testimonial-location {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${E.textMuted};
          position: relative;
          z-index: 1;
        }

        /* Comments Section */
        .comments-section {
          background: linear-gradient(135deg, ${E.blush}10, ${E.champagne}5);
          border: 1.5px solid ${E.border};
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
          border-bottom: 1.5px solid ${E.border};
        }

        .comments-count {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, ${E.rose}, ${E.burgundy});
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
          background: ${E.surface};
          border: 1.5px solid ${E.border};
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
          color: ${E.burgundy};
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
          color: ${E.textMuted};
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          background: ${E.bg};
          border: 1.5px solid ${E.border};
          color: ${E.text};
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
          border-color: ${E.rose};
          background: ${E.surface};
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
          color: ${E.textMuted};
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
          color: ${E.borderLight};
          transition: all 0.3s;
        }

        .rating-stars input:checked ~ label,
        .rating-stars label:hover {
          color: ${E.rose};
          transform: scale(1.2);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, ${E.rose}, ${E.burgundy});
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
          background: ${E.surface};
          border: 1.5px solid ${E.border};
          padding: 32px;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .comment-item:hover {
          border-color: ${E.rose};
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
          color: ${E.text};
        }

        .comment-rating {
          display: flex;
          gap: 2px;
        }

        .comment-rating .star {
          font-size: 12px;
          color: ${E.rose};
        }

        .comment-date {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${E.textMuted};
          font-style: italic;
        }

        .comment-email {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${E.textMuted};
          margin-top: 4px;
        }

        .comment-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${E.textMuted};
          letter-spacing: 0.3px;
        }

        .no-comments {
          text-align: center;
          padding: 60px 20px;
        }

        .no-comments-icon {
          font-size: 48px;
          color: ${E.rose}30;
          margin-bottom: 16px;
        }

        .no-comments-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${E.textMuted};
          letter-spacing: 0.3px;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          padding: 100px 60px;
          background: linear-gradient(135deg, ${E.blush}15, ${E.champagne}10);
          border: 1.5px solid ${E.border};
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
          background: radial-gradient(circle at top right, ${E.rose}10, transparent);
          pointer-events: none;
        }

        .cta-section h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 300;
          letter-spacing: 2px;
          background: linear-gradient(135deg, ${E.text}, ${E.burgundy});
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
          color: ${E.textMuted};
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
          background: linear-gradient(135deg, ${E.rose}, ${E.burgundy});
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
      `}),o.jsxs("div",{className:"about-container",children:[o.jsxs("div",{className:"about-hero",children:[o.jsx("h1",{children:"About ARKE"}),o.jsxs("p",{children:["Jewellery for everyone. Designed for clarity, crafted with loyalty.",o.jsx("br",{}),"We believe in creating pieces that tell your unique story."]})]}),o.jsxs("div",{className:"about-section",children:[o.jsx("h2",{className:"section-title",children:"Our Story"}),o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{className:"section-text",children:[o.jsx("p",{children:"ARKE was born from a passion to democratize luxury jewellery. We believe that everyone deserves to wear pieces that make them feel confident, beautiful, and empowered. Our journey started with a simple vision: create stunning, hallmark-certified jewellery that's accessible and authentic."}),o.jsx("p",{children:"Each piece in our collection is carefully designed by our team of master craftspeople, ensuring that every detail is perfect. From concept to creation, we maintain the highest standards of quality, sustainability, and artistry."}),o.jsx("h3",{children:"Our Commitment"}),o.jsx("p",{children:"We're committed to ethical sourcing, premium materials, and exceptional customer service. Your satisfaction is our greatest achievement."})]}),o.jsx("div",{className:"section-image",children:"💎"})]})]}),o.jsxs("div",{className:"about-section",children:[o.jsx("h2",{className:"section-title",children:"By The Numbers"}),o.jsx("div",{className:"achievements-grid",children:u.map((j,$)=>o.jsxs("div",{className:"achievement-card",children:[o.jsx("div",{className:"achievement-icon",children:j.icon}),o.jsx("div",{className:"achievement-value",children:j.value}),o.jsx("div",{className:"achievement-label",children:j.label})]},$))})]}),o.jsxs("div",{className:"about-section",children:[o.jsx("h2",{className:"section-title",children:"Our Values"}),o.jsx("div",{className:"values-grid",children:k.map((j,$)=>o.jsxs("div",{className:"value-card",children:[o.jsx("span",{className:"value-icon",children:j.icon}),o.jsx("h4",{children:j.title}),o.jsx("p",{children:j.desc})]},$))})]}),o.jsxs("div",{className:"about-section",children:[o.jsx("h2",{className:"section-title",children:"Our Journey"}),o.jsx("div",{className:"timeline",children:N.map((j,$)=>o.jsxs("div",{className:"timeline-item",children:[o.jsx("div",{className:"timeline-year",children:j.year}),o.jsxs("div",{className:"timeline-content",children:[o.jsx("h4",{children:j.title}),o.jsx("p",{children:j.desc})]})]},$))})]}),o.jsxs("div",{className:"about-section",children:[o.jsx("h2",{className:"section-title",children:"Customer Love"}),o.jsx("div",{className:"testimonials-grid",children:x.map((j,$)=>o.jsxs("div",{className:"testimonial-card",children:[o.jsx("div",{className:"testimonial-stars",children:[...Array(j.rating)].map((S,D)=>o.jsx("span",{className:"star",children:"★"},D))}),o.jsxs("p",{className:"testimonial-text",children:['"',j.text,'"']}),o.jsx("div",{className:"testimonial-author",children:j.name}),o.jsxs("div",{className:"testimonial-location",children:["📍 ",j.location]})]},$))})]}),o.jsxs("div",{className:"about-section comments-section",children:[o.jsxs("div",{className:"comments-header",children:[o.jsx("h2",{className:"section-title",children:"Visitor Feedback"}),o.jsxs("span",{className:"comments-count",children:["💬 ",e.length," ",e.length===1?"Comment":"Comments"]})]}),o.jsxs("form",{className:"comment-form",onSubmit:m,children:[o.jsx("h3",{children:"Share Your Thoughts"}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"name",children:"Your Name *"}),o.jsx("input",{id:"name",type:"text",value:i,onChange:j=>a(j.target.value),placeholder:"Enter your name",required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"email",children:"Your Email *"}),o.jsx("input",{id:"email",type:"email",value:s,onChange:j=>l(j.target.value),placeholder:"Enter your email",required:!0})]})]}),o.jsxs("div",{className:"rating-group",children:[o.jsx("label",{children:"How would you rate ARKE?"}),o.jsx("div",{className:"rating-stars",children:[5,4,3,2,1].map(j=>o.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[o.jsx("input",{id:`star${j}`,type:"radio",name:"rating",value:j,checked:c===j,onChange:$=>d(Number($.target.value))}),o.jsx("label",{htmlFor:`star${j}`,style:{color:c>=j?E.rose:E.borderLight},children:"★"})]},j))})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"comment",children:"Your Feedback *"}),o.jsx("textarea",{id:"comment",value:n,onChange:j=>r(j.target.value),placeholder:"Share your experience with us...",required:!0})]}),o.jsx("button",{type:"submit",className:"submit-btn",disabled:p||g,children:p?"Posting...":"Post Comment"})]}),o.jsx("div",{className:"comments-list",children:g?o.jsx("div",{style:{textAlign:"center",padding:"40px",fontFamily:"'Poppins', sans-serif",fontSize:"12px",color:E.textMuted},children:"Loading comments..."}):e.length===0?o.jsxs("div",{className:"no-comments",children:[o.jsx("div",{className:"no-comments-icon",children:"💭"}),o.jsx("div",{className:"no-comments-text",children:"Be the first to share your feedback!"})]}):e.map(j=>o.jsxs("div",{className:"comment-item",children:[o.jsxs("div",{className:"comment-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"comment-author",children:j.name}),o.jsxs("div",{className:"comment-email",children:["📧 ",j.email]}),o.jsxs("div",{className:"comment-date",children:["Posted on ",j.date]})]}),o.jsx("div",{className:"comment-rating",children:[...Array(j.rating)].map(($,S)=>o.jsx("span",{className:"star",children:"★"},S))})]}),o.jsxs("p",{className:"comment-text",children:['"',j.text,'"']})]},j.id))})]}),o.jsxs("div",{className:"cta-section",children:[o.jsx("h2",{children:"Ready to Discover?"}),o.jsx("p",{children:"Explore our latest collections and find the perfect piece that speaks to your heart. Every item is handcrafted with care and designed just for you."}),o.jsx(Me,{to:"/products",className:"cta-btn",children:"Shop Our Collection"})]})]})]})}const K={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4",success:"#70c878",error:"#d97070"};function Jm(){const[e,t]=b.useState({name:"",email:"",phone:"",subject:"",message:""}),[n,r]=b.useState(!1),[i,a]=b.useState(""),[s,l]=b.useState("");b.useEffect(()=>{window.scrollTo(0,0)},[]);const c=f=>{const{name:p,value:w}=f.target;t(h=>({...h,[p]:w})),l("")},d=()=>e.name.trim()?e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)?e.phone.trim()?e.subject.trim()?e.message.trim()?!0:(l("Please enter your message"),!1):(l("Please select a subject"),!1):(l("Please enter your phone number"),!1):(l("Please enter a valid email"),!1):(l("Please enter your email"),!1):(l("Please enter your name"),!1),g=async f=>{if(f.preventDefault(),l(""),a(""),!!d()){r(!0);try{const p=await fetch("http://localhost:5050/api/CustomerCare",{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify(e)}),w=await p.json();p.ok?(a("Thank you! We'll get back to you soon."),t({name:"",email:"",phone:"",subject:"",message:""}),setTimeout(()=>a(""),5e3)):l(w.message||"Something went wrong. Please try again.")}catch(p){l("Network error. Please check your connection and try again."),console.error("CustomerCare form error:",p)}finally{r(!1)}}};return o.jsxs("div",{style:{background:K.bg,minHeight:"100vh",paddingTop:120},children:[o.jsx("style",{children:`
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
          border-bottom: 1.5px solid ${K.border};
          margin-bottom: 80px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .customercare-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 56px;
          font-weight: 300;
          letter-spacing: 2px;
          color: ${K.text};
          margin-bottom: 16px;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${K.text}, ${K.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .customercare-hero p {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          letter-spacing: 0.5px;
          color: ${K.textMuted};
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
          border-bottom: 1.5px solid ${K.border};
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
          color: ${K.burgundy};
          margin-bottom: 12px;
        }

        .info-content {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: ${K.textMuted};
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .info-content a {
          color: ${K.burgundy};
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          font-weight: 600;
        }

        .info-content a:hover {
          color: ${K.rose};
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
          color: ${K.burgundy};
        }

        .form-input,
        .form-textarea,
        .form-select {
          padding: 13px 14px;
          background: ${K.blush}15;
          border: 1.5px solid ${K.border};
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${K.text};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: ${K.textMuted}60;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          background: ${K.blush}25;
          border-color: ${K.rose};
          box-shadow: 0 0 0 3px ${K.blush}40;
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
          background: ${K.surface};
          color: ${K.text};
        }

        .form-button {
          padding: 14px 32px;
          background: linear-gradient(135deg, ${K.rose}, ${K.burgundy});
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
          box-shadow: 0 4px 16px ${K.rose}30;
        }

        .form-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px ${K.rose}40;
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
          border: 1px solid ${K.success}40;
          color: ${K.success}90;
        }

        .error-message {
          background: rgba(217, 112, 112, 0.08);
          border: 1px solid ${K.error}40;
          color: ${K.error}90;
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
          color: ${K.rose};
          font-size: 20px;
          border: 1.5px solid ${K.rose};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: transparent;
        }

        .social-link:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px ${K.rose}30;
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
      `}),o.jsxs("div",{className:"customercare-container",children:[o.jsxs("div",{className:"customercare-hero",children:[o.jsx("h1",{children:"Get in Touch"}),o.jsx("p",{children:"We'd love to hear from you. Send us a message and we'll respond as soon as possible."})]}),o.jsxs("div",{className:"customercare-content",children:[o.jsxs("div",{className:"customercare-info",children:[o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"info-title",children:"📍 Address"}),o.jsxs("div",{className:"info-content",children:["ARKE Jewellery",o.jsx("br",{}),"123 Luxury Lane",o.jsx("br",{}),"Jaipur, Rajasthan 302001",o.jsx("br",{}),"India"]})]}),o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"info-title",children:"📞 Phone"}),o.jsxs("div",{className:"info-content",children:[o.jsx("a",{href:"tel:+919876543210",children:"+91 98765 43210"}),o.jsx("br",{}),o.jsx("span",{style:{color:K.textMuted,fontWeight:400},children:"Mon - Fri, 10 AM - 6 PM IST"})]})]}),o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"info-title",children:"✉️ Email"}),o.jsxs("div",{className:"info-content",children:[o.jsx("a",{href:"mailto:hello@arke.com",children:"hello@arke.com"}),o.jsx("br",{}),o.jsx("a",{href:"mailto:support@arke.com",children:"support@arke.com"})]})]}),o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"info-title",children:"💬 Live Chat"}),o.jsxs("div",{className:"info-content",children:["Available on WhatsApp",o.jsx("br",{}),o.jsx("a",{href:"https://wa.me/919876543210",children:"Message us here →"})]})]}),o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"info-title",children:"Follow Us"}),o.jsxs("div",{className:"social-links",children:[o.jsx("a",{href:"https://instagram.com/arke.jewellery",target:"_blank",rel:"noopener noreferrer",className:"social-link instagram",title:"Instagram",children:o.jsx(Ju,{})}),o.jsx("a",{href:"https://pinterest.com/arkejewellery",target:"_blank",rel:"noopener noreferrer",className:"social-link pinterest",title:"Pinterest",children:o.jsx(Xu,{})}),o.jsx("a",{href:"https://wa.me/919876543210",target:"_blank",rel:"noopener noreferrer",className:"social-link whatsapp",title:"WhatsApp",children:o.jsx(Ku,{})}),o.jsx("a",{href:"mailto:hello@arke.com",className:"social-link email",title:"Email",children:o.jsx(qu,{})})]})]})]}),o.jsxs("form",{className:"customercare-form",onSubmit:g,children:[i&&o.jsxs("div",{className:"message-alert success-message",children:["✓ ",i]}),s&&o.jsxs("div",{className:"message-alert error-message",children:["✕ ",s]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Your Name *"}),o.jsx("input",{type:"text",name:"name",className:"form-input",placeholder:"Enter your full name",value:e.name,onChange:c,required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Email Address *"}),o.jsx("input",{type:"email",name:"email",className:"form-input",placeholder:"your@email.com",value:e.email,onChange:c,required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Phone Number *"}),o.jsx("input",{type:"tel",name:"phone",className:"form-input",placeholder:"+91 XXXXX XXXXX",value:e.phone,onChange:c,required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Subject *"}),o.jsxs("select",{name:"subject",className:"form-select",value:e.subject,onChange:c,required:!0,children:[o.jsx("option",{value:"",children:"Select a subject"}),o.jsx("option",{value:"general",children:"General Inquiry"}),o.jsx("option",{value:"order",children:"Order Related"}),o.jsx("option",{value:"return",children:"Returns & Exchanges"}),o.jsx("option",{value:"warranty",children:"Warranty Support"}),o.jsx("option",{value:"custom",children:"Custom Design"}),o.jsx("option",{value:"partnership",children:"Partnership"}),o.jsx("option",{value:"other",children:"Other"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Message *"}),o.jsx("textarea",{name:"message",className:"form-textarea",placeholder:"Tell us more about your inquiry...",value:e.message,onChange:c,required:!0})]}),o.jsx("button",{type:"submit",className:"form-button",disabled:n,children:n?"Sending...":"Send Message"})]})]})]})]})}const G={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4",success:"#70c878",error:"#d97070"};function qm(){var N,j;const{user:e}=Zn(),[t,n]=b.useState(null),[r,i]=b.useState(!1),[a,s]=b.useState(!0),[l,c]=b.useState(!1),[d,g]=b.useState(""),[f,p]=b.useState(""),[w,h]=b.useState({accountHolderName:"",bankName:"",accountNumber:"",confirmAccountNumber:"",ifscCode:"",accountType:"savings"});b.useEffect(()=>{window.scrollTo(0,0),e?v():(s(!1),g("Please log in to manage bank details"),p("error"))},[e]);const v=async()=>{s(!0);try{const $=await fetch(`http://localhost:5050/api/bank-details/${e.id}`,{method:"GET",headers:{Authorization:`Bearer ${localStorage.getItem("arke_token")}`,"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}});if($.ok){const S=await $.json();n(S.data),S.data&&h({accountHolderName:S.data.accountHolderName||"",bankName:S.data.bankName||"",accountNumber:"",confirmAccountNumber:"",ifscCode:S.data.ifscCode||"",accountType:S.data.accountType||"savings"})}else $.status===404&&n(null)}catch($){console.error("Fetch error:",$),g("Failed to load bank details"),p("error")}finally{s(!1)}},y=()=>w.accountHolderName.trim()?w.bankName.trim()?!w.accountNumber||w.accountNumber.length<9?(g("Please enter a valid account number (9-16 digits)"),p("error"),!1):w.accountNumber!==w.confirmAccountNumber?(g("Account numbers do not match"),p("error"),!1):!w.ifscCode||w.ifscCode.length!==11?(g("Please enter a valid IFSC code (11 characters)"),p("error"),!1):!0:(g("Please select a bank"),p("error"),!1):(g("Please enter account holder name"),p("error"),!1),m=$=>{const{name:S,value:D}=$.target;h(B=>({...B,[S]:D})),g("")},u=async $=>{if($.preventDefault(),!!y()){c(!0);try{const S=await fetch("http://localhost:5050/api/bank-details",{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("arke_token")}`,"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify({userId:e.id,accountHolderName:w.accountHolderName,bankName:w.bankName,accountNumber:w.accountNumber,ifscCode:w.ifscCode.toUpperCase(),accountType:w.accountType})}),D=await S.json();S.ok?(g("✓ Bank details saved successfully"),p("success"),n(D.data),i(!1),h(B=>({...B,accountNumber:"",confirmAccountNumber:""})),setTimeout(()=>g(""),5e3)):(g(D.message||"Failed to save bank details"),p("error"))}catch(S){console.error("Submit error:",S),g("Network error. Please try again."),p("error")}finally{c(!1)}}},x=$=>$?`••••••••${$.slice(-4)}`:"••••••••••••••••",k=[{value:"State Bank of India",label:"State Bank of India (SBI)"},{value:"HDFC Bank",label:"HDFC Bank"},{value:"ICICI Bank",label:"ICICI Bank"},{value:"Axis Bank",label:"Axis Bank"},{value:"Bank of Baroda",label:"Bank of Baroda"},{value:"Kotak Mahindra Bank",label:"Kotak Mahindra Bank"},{value:"Yes Bank",label:"Yes Bank"},{value:"IndusInd Bank",label:"IndusInd Bank"},{value:"Other",label:"Other Bank"}];return o.jsxs("div",{style:{background:G.bg,minHeight:"100vh",paddingTop:120},children:[o.jsx("style",{children:`
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
          color: ${G.text};
          margin-bottom: 12px;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${G.text}, ${G.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bank-header p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          letter-spacing: 0.5px;
          color: ${G.textMuted};
          font-weight: 400;
        }

        .security-notice {
          padding: 18px 20px;
          background: rgba(112, 200, 120, 0.08);
          border: 1.5px solid ${G.success}40;
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
          color: ${G.success}90;
          letter-spacing: 0.3px;
          line-height: 1.6;
          font-weight: 500;
        }

        .bank-card {
          border: 1.5px solid ${G.border};
          border-radius: 12px;
          padding: 44px;
          background: ${G.surface};
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
          border-bottom: 1.5px solid ${G.border};
        }

        .card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${G.burgundy};
        }

        .edit-btn {
          padding: 9px 18px;
          background: transparent;
          border: 1.5px solid ${G.rose};
          color: ${G.burgundy};
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
          border-color: ${G.burgundy};
          background: linear-gradient(135deg, ${G.rose}20, ${G.burgundy}10);
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
          color: ${G.textMuted};
        }

        .info-value {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: ${G.text};
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
          color: ${G.burgundy};
          margin-bottom: 10px;
          display: block;
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 12px 14px;
          background: ${G.blush}15;
          border: 1.5px solid ${G.border};
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${G.text};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.3px;
        }

        .form-input::placeholder {
          color: ${G.textMuted}60;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          background: ${G.blush}25;
          border-color: ${G.rose};
          box-shadow: 0 0 0 3px ${G.blush}40;
        }

        .form-select option {
          background: ${G.surface};
          color: ${G.text};
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
          background: linear-gradient(135deg, ${G.rose}, ${G.burgundy});
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
          color: ${G.burgundy};
          border: 1.5px solid ${G.rose};
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
          border-color: ${G.burgundy};
          background: linear-gradient(135deg, ${G.rose}20, ${G.burgundy}10);
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
          border: 1px solid ${G.success}40;
          color: ${G.success}90;
        }

        .error-message {
          background: rgba(217, 112, 112, 0.08);
          border: 1px solid ${G.error}40;
          color: ${G.error}90;
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
          border: 3px solid ${G.border};
          border-top-color: ${G.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 24px;
        }

        .loading-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${G.textMuted};
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
      `}),o.jsxs("div",{className:"bank-container",children:[o.jsxs("div",{className:"bank-header",children:[o.jsx("h1",{children:"Bank Details"}),o.jsx("p",{children:"Securely manage your account information"})]}),o.jsxs("div",{className:"security-notice",children:[o.jsx("div",{className:"security-notice-icon",children:"🔒"}),o.jsx("div",{className:"security-notice-text",children:"Your bank details are encrypted with industry-standard security. We never share your information."})]}),d&&o.jsx("div",{className:`message-alert ${f}-message`,children:d}),a&&o.jsxs("div",{className:"loading-state",children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("p",{className:"loading-text",children:"Loading your bank details..."})]}),!a&&o.jsx(o.Fragment,{children:t&&!r?o.jsxs("div",{className:"bank-card",children:[o.jsxs("div",{className:"card-header",children:[o.jsx("div",{className:"card-title",children:"✓ Account Details"}),o.jsx("button",{className:"edit-btn",onClick:()=>i(!0),children:"Edit Details"})]}),o.jsxs("div",{className:"bank-info",children:[o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"Account Holder Name"}),o.jsx("div",{className:"info-value",children:t.accountHolderName})]}),o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"Bank Name"}),o.jsx("div",{className:"info-value",children:t.bankName})]}),o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"Account Number"}),o.jsx("div",{className:"info-value",children:x(t.accountNumber)})]}),o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"Account Type"}),o.jsx("div",{className:"info-value",children:((N=t.accountType)==null?void 0:N.charAt(0).toUpperCase())+((j=t.accountType)==null?void 0:j.slice(1))})]}),o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"IFSC Code"}),o.jsx("div",{className:"info-value",children:t.ifscCode})]}),o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"Last Updated"}),o.jsx("div",{className:"info-value",children:new Date(t.updatedAt).toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"numeric"})})]})]})]}):o.jsxs("div",{className:"bank-card",children:[o.jsx("div",{className:"card-title",style:{marginBottom:30},children:t?"Update Bank Details":"Add Bank Details"}),o.jsxs("form",{onSubmit:u,children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Account Holder Name *"}),o.jsx("input",{type:"text",name:"accountHolderName",className:"form-input",placeholder:"Your full name",value:w.accountHolderName,onChange:m,required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Bank Name *"}),o.jsxs("select",{name:"bankName",className:"form-select",value:w.bankName,onChange:m,required:!0,children:[o.jsx("option",{value:"",children:"Select your bank"}),k.map($=>o.jsx("option",{value:$.value,children:$.label},$.value))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Account Number *"}),o.jsx("input",{type:"password",name:"accountNumber",className:"form-input",placeholder:"9-16 digits",value:w.accountNumber,onChange:m,minLength:"9",maxLength:"16",required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Confirm Account Number *"}),o.jsx("input",{type:"password",name:"confirmAccountNumber",className:"form-input",placeholder:"Re-enter for safety",value:w.confirmAccountNumber,onChange:m,minLength:"9",maxLength:"16",required:!0})]})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"IFSC Code *"}),o.jsx("input",{type:"text",name:"ifscCode",className:"form-input",placeholder:"e.g., SBIN0001234",value:w.ifscCode,onChange:$=>m({...$,target:{...$.target,value:$.target.value.toUpperCase()}}),maxLength:"11",required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Account Type *"}),o.jsxs("select",{name:"accountType",className:"form-select",value:w.accountType,onChange:m,children:[o.jsx("option",{value:"savings",children:"Savings"}),o.jsx("option",{value:"current",children:"Current"}),o.jsx("option",{value:"business",children:"Business"})]})]})]}),o.jsxs("div",{className:"button-group",children:[o.jsx("button",{type:"submit",className:"btn-primary",disabled:l,children:l?"Saving...":"Save Bank Details"}),t&&o.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>{i(!1),g("")},children:"Cancel"})]})]})]})})]})]})}function Zm(){const[e,t]=b.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(em,{onLoginClick:()=>t(!0)}),o.jsxs(C0,{children:[o.jsx(Te,{path:"/",element:o.jsx(wm,{})}),o.jsx(Te,{path:"/new-collection",element:o.jsx(km,{})}),o.jsx(Te,{path:"/best-sellers",element:o.jsx(jm,{})}),o.jsx(Te,{path:"/products",element:o.jsx(Sm,{})}),o.jsx(Te,{path:"/product/:id",element:o.jsx($m,{})}),o.jsx(Te,{path:"/categories",element:o.jsx(zm,{})}),o.jsx(Te,{path:"/blog",element:o.jsx(Nm,{})}),o.jsx(Te,{path:"/cart",element:o.jsx(Tm,{})}),o.jsx(Te,{path:"/wishlist",element:o.jsx(Am,{})}),o.jsx(Te,{path:"/gift-for-him",element:o.jsx(Qm,{})}),o.jsx(Te,{path:"/gift-for-her",element:o.jsx(Hm,{})}),o.jsx(Te,{path:"/my-orders",element:o.jsx(Km,{})}),o.jsx(Te,{path:"/about-us",element:o.jsx(Xm,{})}),o.jsx(Te,{path:"/customer-care",element:o.jsx(Jm,{})}),o.jsx(Te,{path:"/bankdetails",element:o.jsx(qm,{})})]}),o.jsx(nm,{}),e&&o.jsx(rm,{onClose:()=>t(!1)})]})}function ex(){return o.jsx(A0,{children:o.jsx(M0,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:o.jsx(Zm,{})})})}Qi.createRoot(document.getElementById("root")).render(o.jsx(b.StrictMode,{children:o.jsx(im,{children:o.jsx(om,{children:o.jsx(Wm,{children:o.jsx(ex,{})})})})}));
