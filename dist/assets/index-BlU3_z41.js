function lp(e,t){for(var r=0;r<t.length;r++){const n=t[r];if(typeof n!="string"&&!Array.isArray(n)){for(const i in n)if(i!=="default"&&!(i in e)){const a=Object.getOwnPropertyDescriptor(n,i);a&&Object.defineProperty(e,i,a.get?a:{enumerable:!0,get:()=>n[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}})();function cp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var $c={exports:{}},si={},zc={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vn=Symbol.for("react.element"),dp=Symbol.for("react.portal"),up=Symbol.for("react.fragment"),pp=Symbol.for("react.strict_mode"),fp=Symbol.for("react.profiler"),gp=Symbol.for("react.provider"),mp=Symbol.for("react.context"),xp=Symbol.for("react.forward_ref"),hp=Symbol.for("react.suspense"),yp=Symbol.for("react.memo"),bp=Symbol.for("react.lazy"),qs=Symbol.iterator;function vp(e){return e===null||typeof e!="object"?null:(e=qs&&e[qs]||e["@@iterator"],typeof e=="function"?e:null)}var Nc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pc=Object.assign,Ec={};function Jr(e,t,r){this.props=e,this.context=t,this.refs=Ec,this.updater=r||Nc}Jr.prototype.isReactComponent={};Jr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Jr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Tc(){}Tc.prototype=Jr.prototype;function Za(e,t,r){this.props=e,this.context=t,this.refs=Ec,this.updater=r||Nc}var es=Za.prototype=new Tc;es.constructor=Za;Pc(es,Jr.prototype);es.isPureReactComponent=!0;var Zs=Array.isArray,Mc=Object.prototype.hasOwnProperty,ts={current:null},Fc={key:!0,ref:!0,__self:!0,__source:!0};function Lc(e,t,r){var n,i={},a=null,s=null;if(t!=null)for(n in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(a=""+t.key),t)Mc.call(t,n)&&!Fc.hasOwnProperty(n)&&(i[n]=t[n]);var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];i.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps,l)i[n]===void 0&&(i[n]=l[n]);return{$$typeof:Vn,type:e,key:a,ref:s,props:i,_owner:ts.current}}function wp(e,t){return{$$typeof:Vn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rs(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vn}function kp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var el=/\/+/g;function Ni(e,t){return typeof e=="object"&&e!==null&&e.key!=null?kp(""+e.key):t.toString(36)}function wo(e,t,r,n,i){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(a){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case Vn:case dp:s=!0}}if(s)return s=e,i=i(s),e=n===""?"."+Ni(s,0):n,Zs(i)?(r="",e!=null&&(r=e.replace(el,"$&/")+"/"),wo(i,t,r,"",function(d){return d})):i!=null&&(rs(i)&&(i=wp(i,r+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(el,"$&/")+"/")+e)),t.push(i)),1;if(s=0,n=n===""?".":n+":",Zs(e))for(var l=0;l<e.length;l++){a=e[l];var c=n+Ni(a,l);s+=wo(a,t,r,c,i)}else if(c=vp(e),typeof c=="function")for(e=c.call(e),l=0;!(a=e.next()).done;)a=a.value,c=n+Ni(a,l++),s+=wo(a,t,r,c,i);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function to(e,t,r){if(e==null)return e;var n=[],i=0;return wo(e,n,"","",function(a){return t.call(r,a,i++)}),n}function jp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var De={current:null},ko={transition:null},Sp={ReactCurrentDispatcher:De,ReactCurrentBatchConfig:ko,ReactCurrentOwner:ts};function Ic(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:to,forEach:function(e,t,r){to(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return to(e,function(){t++}),t},toArray:function(e){return to(e,function(t){return t})||[]},only:function(e){if(!rs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};X.Component=Jr;X.Fragment=up;X.Profiler=fp;X.PureComponent=Za;X.StrictMode=pp;X.Suspense=hp;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sp;X.act=Ic;X.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=Pc({},e.props),i=e.key,a=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,s=ts.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)Mc.call(t,c)&&!Fc.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];n.children=l}return{$$typeof:Vn,type:e.type,key:i,ref:a,props:n,_owner:s}};X.createContext=function(e){return e={$$typeof:mp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:gp,_context:e},e.Consumer=e};X.createElement=Lc;X.createFactory=function(e){var t=Lc.bind(null,e);return t.type=e,t};X.createRef=function(){return{current:null}};X.forwardRef=function(e){return{$$typeof:xp,render:e}};X.isValidElement=rs;X.lazy=function(e){return{$$typeof:bp,_payload:{_status:-1,_result:e},_init:jp}};X.memo=function(e,t){return{$$typeof:yp,type:e,compare:t===void 0?null:t}};X.startTransition=function(e){var t=ko.transition;ko.transition={};try{e()}finally{ko.transition=t}};X.unstable_act=Ic;X.useCallback=function(e,t){return De.current.useCallback(e,t)};X.useContext=function(e){return De.current.useContext(e)};X.useDebugValue=function(){};X.useDeferredValue=function(e){return De.current.useDeferredValue(e)};X.useEffect=function(e,t){return De.current.useEffect(e,t)};X.useId=function(){return De.current.useId()};X.useImperativeHandle=function(e,t,r){return De.current.useImperativeHandle(e,t,r)};X.useInsertionEffect=function(e,t){return De.current.useInsertionEffect(e,t)};X.useLayoutEffect=function(e,t){return De.current.useLayoutEffect(e,t)};X.useMemo=function(e,t){return De.current.useMemo(e,t)};X.useReducer=function(e,t,r){return De.current.useReducer(e,t,r)};X.useRef=function(e){return De.current.useRef(e)};X.useState=function(e){return De.current.useState(e)};X.useSyncExternalStore=function(e,t,r){return De.current.useSyncExternalStore(e,t,r)};X.useTransition=function(){return De.current.useTransition()};X.version="18.3.1";zc.exports=X;var b=zc.exports;const ft=cp(b),Cp=lp({__proto__:null,default:ft},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p=b,zp=Symbol.for("react.element"),Np=Symbol.for("react.fragment"),Pp=Object.prototype.hasOwnProperty,Ep=$p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tp={key:!0,ref:!0,__self:!0,__source:!0};function Rc(e,t,r){var n,i={},a=null,s=null;r!==void 0&&(a=""+r),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(s=t.ref);for(n in t)Pp.call(t,n)&&!Tp.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:zp,type:e,key:a,ref:s,props:i,_owner:Ep.current}}si.Fragment=Np;si.jsx=Rc;si.jsxs=Rc;$c.exports=si;var o=$c.exports,ra={},Wc={exports:{}},tt={},_c={exports:{}},Bc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,L){var _=z.length;z.push(L);e:for(;0<_;){var re=_-1>>>1,ue=z[re];if(0<i(ue,L))z[re]=L,z[_]=ue,_=re;else break e}}function r(z){return z.length===0?null:z[0]}function n(z){if(z.length===0)return null;var L=z[0],_=z.pop();if(_!==L){z[0]=_;e:for(var re=0,ue=z.length,O=ue>>>1;re<O;){var pe=2*(re+1)-1,zi=z[pe],sr=pe+1,eo=z[sr];if(0>i(zi,_))sr<ue&&0>i(eo,zi)?(z[re]=eo,z[sr]=_,re=sr):(z[re]=zi,z[pe]=_,re=pe);else if(sr<ue&&0>i(eo,_))z[re]=eo,z[sr]=_,re=sr;else break e}}return L}function i(z,L){var _=z.sortIndex-L.sortIndex;return _!==0?_:z.id-L.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],d=[],f=1,g=null,p=3,k=!1,w=!1,j=!1,x=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(z){for(var L=r(d);L!==null;){if(L.callback===null)n(d);else if(L.startTime<=z)n(d),L.sortIndex=L.expirationTime,t(c,L);else break;L=r(d)}}function C(z){if(j=!1,h(z),!w)if(r(c)!==null)w=!0,se($);else{var L=r(d);L!==null&&ve(C,L.startTime-z)}}function $(z,L){w=!1,j&&(j=!1,m(N),N=-1),k=!0;var _=p;try{for(h(L),g=r(c);g!==null&&(!(g.expirationTime>L)||z&&!Q());){var re=g.callback;if(typeof re=="function"){g.callback=null,p=g.priorityLevel;var ue=re(g.expirationTime<=L);L=e.unstable_now(),typeof ue=="function"?g.callback=ue:g===r(c)&&n(c),h(L)}else n(c);g=r(c)}if(g!==null)var O=!0;else{var pe=r(d);pe!==null&&ve(C,pe.startTime-L),O=!1}return O}finally{g=null,p=_,k=!1}}var y=!1,S=null,N=-1,P=5,E=-1;function Q(){return!(e.unstable_now()-E<P)}function G(){if(S!==null){var z=e.unstable_now();E=z;var L=!0;try{L=S(!0,z)}finally{L?he():(y=!1,S=null)}}else y=!1}var he;if(typeof u=="function")he=function(){u(G)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,be=ee.port2;ee.port1.onmessage=G,he=function(){be.postMessage(null)}}else he=function(){x(G,0)};function se(z){S=z,y||(y=!0,he())}function ve(z,L){N=x(function(){z(e.unstable_now())},L)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_continueExecution=function(){w||k||(w=!0,se($))},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(z){switch(p){case 1:case 2:case 3:var L=3;break;default:L=p}var _=p;p=L;try{return z()}finally{p=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(z,L){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var _=p;p=z;try{return L()}finally{p=_}},e.unstable_scheduleCallback=function(z,L,_){var re=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?re+_:re):_=re,z){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=_+ue,z={id:f++,callback:L,priorityLevel:z,startTime:_,expirationTime:ue,sortIndex:-1},_>re?(z.sortIndex=_,t(d,z),r(c)===null&&z===r(d)&&(j?(m(N),N=-1):j=!0,ve(C,_-re))):(z.sortIndex=ue,t(c,z),w||k||(w=!0,se($))),z},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(z){var L=p;return function(){var _=p;p=L;try{return z.apply(this,arguments)}finally{p=_}}}})(Bc);_c.exports=Bc;var Mp=_c.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp=b,et=Mp;function M(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ac=new Set,zn={};function vr(e,t){Hr(e,t),Hr(e+"Capture",t)}function Hr(e,t){for(zn[e]=t,e=0;e<t.length;e++)Ac.add(t[e])}var Pt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),na=Object.prototype.hasOwnProperty,Lp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,tl={},rl={};function Ip(e){return na.call(rl,e)?!0:na.call(tl,e)?!1:Lp.test(e)?rl[e]=!0:(tl[e]=!0,!1)}function Rp(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wp(e,t,r,n){if(t===null||typeof t>"u"||Rp(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,r,n,i,a,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=s}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Te[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Te[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Te[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Te[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Te[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Te[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Te[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Te[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Te[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var ns=/[\-:]([a-z])/g;function os(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ns,os);Te[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ns,os);Te[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ns,os);Te[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Te[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Te[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function is(e,t,r,n){var i=Te.hasOwnProperty(t)?Te[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wp(t,r,i,n)&&(r=null),n||i===null?Ip(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Lt=Fp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ro=Symbol.for("react.element"),$r=Symbol.for("react.portal"),zr=Symbol.for("react.fragment"),as=Symbol.for("react.strict_mode"),oa=Symbol.for("react.profiler"),Dc=Symbol.for("react.provider"),Uc=Symbol.for("react.context"),ss=Symbol.for("react.forward_ref"),ia=Symbol.for("react.suspense"),aa=Symbol.for("react.suspense_list"),ls=Symbol.for("react.memo"),_t=Symbol.for("react.lazy"),Oc=Symbol.for("react.offscreen"),nl=Symbol.iterator;function on(e){return e===null||typeof e!="object"?null:(e=nl&&e[nl]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Object.assign,Pi;function fn(e){if(Pi===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Pi=t&&t[1]||""}return`
`+Pi+e}var Ei=!1;function Ti(e,t){if(!e||Ei)return"";Ei=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var n=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){n=d}e.call(t.prototype)}else{try{throw Error()}catch(d){n=d}e()}}catch(d){if(d&&n&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),a=n.stack.split(`
`),s=i.length-1,l=a.length-1;1<=s&&0<=l&&i[s]!==a[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==a[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==a[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Ei=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?fn(e):""}function _p(e){switch(e.tag){case 5:return fn(e.type);case 16:return fn("Lazy");case 13:return fn("Suspense");case 19:return fn("SuspenseList");case 0:case 2:case 15:return e=Ti(e.type,!1),e;case 11:return e=Ti(e.type.render,!1),e;case 1:return e=Ti(e.type,!0),e;default:return""}}function sa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case zr:return"Fragment";case $r:return"Portal";case oa:return"Profiler";case as:return"StrictMode";case ia:return"Suspense";case aa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Uc:return(e.displayName||"Context")+".Consumer";case Dc:return(e._context.displayName||"Context")+".Provider";case ss:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ls:return t=e.displayName||null,t!==null?t:sa(e.type)||"Memo";case _t:t=e._payload,e=e._init;try{return sa(e(t))}catch{}}return null}function Bp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return sa(t);case 8:return t===as?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function er(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Hc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ap(e){var t=Hc(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,a.call(this,s)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function no(e){e._valueTracker||(e._valueTracker=Ap(e))}function Yc(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=Hc(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function Fo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function la(e,t){var r=t.checked;return xe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ol(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=er(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Gc(e,t){t=t.checked,t!=null&&is(e,"checked",t,!1)}function ca(e,t){Gc(e,t);var r=er(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?da(e,t.type,r):t.hasOwnProperty("defaultValue")&&da(e,t.type,er(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function il(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function da(e,t,r){(t!=="number"||Fo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var gn=Array.isArray;function _r(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+er(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ua(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(M(91));return xe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function al(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(M(92));if(gn(r)){if(1<r.length)throw Error(M(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:er(r)}}function Vc(e,t){var r=er(t.value),n=er(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function sl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Qc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function pa(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Qc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var oo,Kc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(oo=oo||document.createElement("div"),oo.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=oo.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Nn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var yn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Dp=["Webkit","ms","Moz","O"];Object.keys(yn).forEach(function(e){Dp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),yn[t]=yn[e]})});function Xc(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||yn.hasOwnProperty(e)&&yn[e]?(""+t).trim():t+"px"}function Jc(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=Xc(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var Up=xe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function fa(e,t){if(t){if(Up[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(M(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(M(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(M(61))}if(t.style!=null&&typeof t.style!="object")throw Error(M(62))}}function ga(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ma=null;function cs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var xa=null,Br=null,Ar=null;function ll(e){if(e=Xn(e)){if(typeof xa!="function")throw Error(M(280));var t=e.stateNode;t&&(t=pi(t),xa(e.stateNode,e.type,t))}}function qc(e){Br?Ar?Ar.push(e):Ar=[e]:Br=e}function Zc(){if(Br){var e=Br,t=Ar;if(Ar=Br=null,ll(e),t)for(e=0;e<t.length;e++)ll(t[e])}}function ed(e,t){return e(t)}function td(){}var Mi=!1;function rd(e,t,r){if(Mi)return e(t,r);Mi=!0;try{return ed(e,t,r)}finally{Mi=!1,(Br!==null||Ar!==null)&&(td(),Zc())}}function Pn(e,t){var r=e.stateNode;if(r===null)return null;var n=pi(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(M(231,t,typeof r));return r}var ha=!1;if(Pt)try{var an={};Object.defineProperty(an,"passive",{get:function(){ha=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{ha=!1}function Op(e,t,r,n,i,a,s,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(r,d)}catch(f){this.onError(f)}}var bn=!1,Lo=null,Io=!1,ya=null,Hp={onError:function(e){bn=!0,Lo=e}};function Yp(e,t,r,n,i,a,s,l,c){bn=!1,Lo=null,Op.apply(Hp,arguments)}function Gp(e,t,r,n,i,a,s,l,c){if(Yp.apply(this,arguments),bn){if(bn){var d=Lo;bn=!1,Lo=null}else throw Error(M(198));Io||(Io=!0,ya=d)}}function wr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function nd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function cl(e){if(wr(e)!==e)throw Error(M(188))}function Vp(e){var t=e.alternate;if(!t){if(t=wr(e),t===null)throw Error(M(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var a=i.alternate;if(a===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===r)return cl(i),e;if(a===n)return cl(i),t;a=a.sibling}throw Error(M(188))}if(r.return!==n.return)r=i,n=a;else{for(var s=!1,l=i.child;l;){if(l===r){s=!0,r=i,n=a;break}if(l===n){s=!0,n=i,r=a;break}l=l.sibling}if(!s){for(l=a.child;l;){if(l===r){s=!0,r=a,n=i;break}if(l===n){s=!0,n=a,r=i;break}l=l.sibling}if(!s)throw Error(M(189))}}if(r.alternate!==n)throw Error(M(190))}if(r.tag!==3)throw Error(M(188));return r.stateNode.current===r?e:t}function od(e){return e=Vp(e),e!==null?id(e):null}function id(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=id(e);if(t!==null)return t;e=e.sibling}return null}var ad=et.unstable_scheduleCallback,dl=et.unstable_cancelCallback,Qp=et.unstable_shouldYield,Kp=et.unstable_requestPaint,we=et.unstable_now,Xp=et.unstable_getCurrentPriorityLevel,ds=et.unstable_ImmediatePriority,sd=et.unstable_UserBlockingPriority,Ro=et.unstable_NormalPriority,Jp=et.unstable_LowPriority,ld=et.unstable_IdlePriority,li=null,wt=null;function qp(e){if(wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(li,e,void 0,(e.current.flags&128)===128)}catch{}}var gt=Math.clz32?Math.clz32:tf,Zp=Math.log,ef=Math.LN2;function tf(e){return e>>>=0,e===0?32:31-(Zp(e)/ef|0)|0}var io=64,ao=4194304;function mn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wo(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,a=e.pingedLanes,s=r&268435455;if(s!==0){var l=s&~i;l!==0?n=mn(l):(a&=s,a!==0&&(n=mn(a)))}else s=r&~i,s!==0?n=mn(s):a!==0&&(n=mn(a));if(n===0)return 0;if(t!==0&&t!==n&&!(t&i)&&(i=n&-n,a=t&-t,i>=a||i===16&&(a&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-gt(t),i=1<<r,n|=e[r],t&=~i;return n}function rf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nf(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var s=31-gt(a),l=1<<s,c=i[s];c===-1?(!(l&r)||l&n)&&(i[s]=rf(l,t)):c<=t&&(e.expiredLanes|=l),a&=~l}}function ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cd(){var e=io;return io<<=1,!(io&4194240)&&(io=64),e}function Fi(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Qn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-gt(t),e[t]=r}function of(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-gt(r),a=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~a}}function us(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-gt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var te=0;function dd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ud,ps,pd,fd,gd,va=!1,so=[],Yt=null,Gt=null,Vt=null,En=new Map,Tn=new Map,At=[],af="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ul(e,t){switch(e){case"focusin":case"focusout":Yt=null;break;case"dragenter":case"dragleave":Gt=null;break;case"mouseover":case"mouseout":Vt=null;break;case"pointerover":case"pointerout":En.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(t.pointerId)}}function sn(e,t,r,n,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Xn(t),t!==null&&ps(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function sf(e,t,r,n,i){switch(t){case"focusin":return Yt=sn(Yt,e,t,r,n,i),!0;case"dragenter":return Gt=sn(Gt,e,t,r,n,i),!0;case"mouseover":return Vt=sn(Vt,e,t,r,n,i),!0;case"pointerover":var a=i.pointerId;return En.set(a,sn(En.get(a)||null,e,t,r,n,i)),!0;case"gotpointercapture":return a=i.pointerId,Tn.set(a,sn(Tn.get(a)||null,e,t,r,n,i)),!0}return!1}function md(e){var t=dr(e.target);if(t!==null){var r=wr(t);if(r!==null){if(t=r.tag,t===13){if(t=nd(r),t!==null){e.blockedOn=t,gd(e.priority,function(){pd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function jo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=wa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);ma=n,r.target.dispatchEvent(n),ma=null}else return t=Xn(r),t!==null&&ps(t),e.blockedOn=r,!1;t.shift()}return!0}function pl(e,t,r){jo(e)&&r.delete(t)}function lf(){va=!1,Yt!==null&&jo(Yt)&&(Yt=null),Gt!==null&&jo(Gt)&&(Gt=null),Vt!==null&&jo(Vt)&&(Vt=null),En.forEach(pl),Tn.forEach(pl)}function ln(e,t){e.blockedOn===t&&(e.blockedOn=null,va||(va=!0,et.unstable_scheduleCallback(et.unstable_NormalPriority,lf)))}function Mn(e){function t(i){return ln(i,e)}if(0<so.length){ln(so[0],e);for(var r=1;r<so.length;r++){var n=so[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Yt!==null&&ln(Yt,e),Gt!==null&&ln(Gt,e),Vt!==null&&ln(Vt,e),En.forEach(t),Tn.forEach(t),r=0;r<At.length;r++)n=At[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<At.length&&(r=At[0],r.blockedOn===null);)md(r),r.blockedOn===null&&At.shift()}var Dr=Lt.ReactCurrentBatchConfig,_o=!0;function cf(e,t,r,n){var i=te,a=Dr.transition;Dr.transition=null;try{te=1,fs(e,t,r,n)}finally{te=i,Dr.transition=a}}function df(e,t,r,n){var i=te,a=Dr.transition;Dr.transition=null;try{te=4,fs(e,t,r,n)}finally{te=i,Dr.transition=a}}function fs(e,t,r,n){if(_o){var i=wa(e,t,r,n);if(i===null)Oi(e,t,n,Bo,r),ul(e,n);else if(sf(i,e,t,r,n))n.stopPropagation();else if(ul(e,n),t&4&&-1<af.indexOf(e)){for(;i!==null;){var a=Xn(i);if(a!==null&&ud(a),a=wa(e,t,r,n),a===null&&Oi(e,t,n,Bo,r),a===i)break;i=a}i!==null&&n.stopPropagation()}else Oi(e,t,n,null,r)}}var Bo=null;function wa(e,t,r,n){if(Bo=null,e=cs(n),e=dr(e),e!==null)if(t=wr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=nd(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Bo=e,null}function xd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xp()){case ds:return 1;case sd:return 4;case Ro:case Jp:return 16;case ld:return 536870912;default:return 16}default:return 16}}var Ut=null,gs=null,So=null;function hd(){if(So)return So;var e,t=gs,r=t.length,n,i="value"in Ut?Ut.value:Ut.textContent,a=i.length;for(e=0;e<r&&t[e]===i[e];e++);var s=r-e;for(n=1;n<=s&&t[r-n]===i[a-n];n++);return So=i.slice(e,1<n?1-n:void 0)}function Co(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lo(){return!0}function fl(){return!1}function rt(e){function t(r,n,i,a,s){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(r=e[l],this[l]=r?r(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?lo:fl,this.isPropagationStopped=fl,this}return xe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),t}var qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ms=rt(qr),Kn=xe({},qr,{view:0,detail:0}),uf=rt(Kn),Li,Ii,cn,ci=xe({},Kn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==cn&&(cn&&e.type==="mousemove"?(Li=e.screenX-cn.screenX,Ii=e.screenY-cn.screenY):Ii=Li=0,cn=e),Li)},movementY:function(e){return"movementY"in e?e.movementY:Ii}}),gl=rt(ci),pf=xe({},ci,{dataTransfer:0}),ff=rt(pf),gf=xe({},Kn,{relatedTarget:0}),Ri=rt(gf),mf=xe({},qr,{animationName:0,elapsedTime:0,pseudoElement:0}),xf=rt(mf),hf=xe({},qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yf=rt(hf),bf=xe({},qr,{data:0}),ml=rt(bf),vf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kf={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jf(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=kf[e])?!!t[e]:!1}function xs(){return jf}var Sf=xe({},Kn,{key:function(e){if(e.key){var t=vf[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Co(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?wf[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xs,charCode:function(e){return e.type==="keypress"?Co(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Co(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Cf=rt(Sf),$f=xe({},ci,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xl=rt($f),zf=xe({},Kn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xs}),Nf=rt(zf),Pf=xe({},qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ef=rt(Pf),Tf=xe({},ci,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mf=rt(Tf),Ff=[9,13,27,32],hs=Pt&&"CompositionEvent"in window,vn=null;Pt&&"documentMode"in document&&(vn=document.documentMode);var Lf=Pt&&"TextEvent"in window&&!vn,yd=Pt&&(!hs||vn&&8<vn&&11>=vn),hl=" ",yl=!1;function bd(e,t){switch(e){case"keyup":return Ff.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nr=!1;function If(e,t){switch(e){case"compositionend":return vd(t);case"keypress":return t.which!==32?null:(yl=!0,hl);case"textInput":return e=t.data,e===hl&&yl?null:e;default:return null}}function Rf(e,t){if(Nr)return e==="compositionend"||!hs&&bd(e,t)?(e=hd(),So=gs=Ut=null,Nr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yd&&t.locale!=="ko"?null:t.data;default:return null}}var Wf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wf[e.type]:t==="textarea"}function wd(e,t,r,n){qc(n),t=Ao(t,"onChange"),0<t.length&&(r=new ms("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var wn=null,Fn=null;function _f(e){Md(e,0)}function di(e){var t=Tr(e);if(Yc(t))return e}function Bf(e,t){if(e==="change")return t}var kd=!1;if(Pt){var Wi;if(Pt){var _i="oninput"in document;if(!_i){var vl=document.createElement("div");vl.setAttribute("oninput","return;"),_i=typeof vl.oninput=="function"}Wi=_i}else Wi=!1;kd=Wi&&(!document.documentMode||9<document.documentMode)}function wl(){wn&&(wn.detachEvent("onpropertychange",jd),Fn=wn=null)}function jd(e){if(e.propertyName==="value"&&di(Fn)){var t=[];wd(t,Fn,e,cs(e)),rd(_f,t)}}function Af(e,t,r){e==="focusin"?(wl(),wn=t,Fn=r,wn.attachEvent("onpropertychange",jd)):e==="focusout"&&wl()}function Df(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return di(Fn)}function Uf(e,t){if(e==="click")return di(t)}function Of(e,t){if(e==="input"||e==="change")return di(t)}function Hf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:Hf;function Ln(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!na.call(t,i)||!xt(e[i],t[i]))return!1}return!0}function kl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jl(e,t){var r=kl(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=kl(r)}}function Sd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Cd(){for(var e=window,t=Fo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Fo(e.document)}return t}function ys(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yf(e){var t=Cd(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Sd(r.ownerDocument.documentElement,r)){if(n!==null&&ys(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,a=Math.min(n.start,i);n=n.end===void 0?a:Math.min(n.end,i),!e.extend&&a>n&&(i=n,n=a,a=i),i=jl(r,a);var s=jl(r,n);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>n?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gf=Pt&&"documentMode"in document&&11>=document.documentMode,Pr=null,ka=null,kn=null,ja=!1;function Sl(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ja||Pr==null||Pr!==Fo(n)||(n=Pr,"selectionStart"in n&&ys(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),kn&&Ln(kn,n)||(kn=n,n=Ao(ka,"onSelect"),0<n.length&&(t=new ms("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Pr)))}function co(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Er={animationend:co("Animation","AnimationEnd"),animationiteration:co("Animation","AnimationIteration"),animationstart:co("Animation","AnimationStart"),transitionend:co("Transition","TransitionEnd")},Bi={},$d={};Pt&&($d=document.createElement("div").style,"AnimationEvent"in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),"TransitionEvent"in window||delete Er.transitionend.transition);function ui(e){if(Bi[e])return Bi[e];if(!Er[e])return e;var t=Er[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in $d)return Bi[e]=t[r];return e}var zd=ui("animationend"),Nd=ui("animationiteration"),Pd=ui("animationstart"),Ed=ui("transitionend"),Td=new Map,Cl="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rr(e,t){Td.set(e,t),vr(t,[e])}for(var Ai=0;Ai<Cl.length;Ai++){var Di=Cl[Ai],Vf=Di.toLowerCase(),Qf=Di[0].toUpperCase()+Di.slice(1);rr(Vf,"on"+Qf)}rr(zd,"onAnimationEnd");rr(Nd,"onAnimationIteration");rr(Pd,"onAnimationStart");rr("dblclick","onDoubleClick");rr("focusin","onFocus");rr("focusout","onBlur");rr(Ed,"onTransitionEnd");Hr("onMouseEnter",["mouseout","mouseover"]);Hr("onMouseLeave",["mouseout","mouseover"]);Hr("onPointerEnter",["pointerout","pointerover"]);Hr("onPointerLeave",["pointerout","pointerover"]);vr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vr("onBeforeInput",["compositionend","keypress","textInput","paste"]);vr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(xn));function $l(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,Gp(n,t,void 0,e),e.currentTarget=null}function Md(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var a=void 0;if(t)for(var s=n.length-1;0<=s;s--){var l=n[s],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==a&&i.isPropagationStopped())break e;$l(i,l,d),a=c}else for(s=0;s<n.length;s++){if(l=n[s],c=l.instance,d=l.currentTarget,l=l.listener,c!==a&&i.isPropagationStopped())break e;$l(i,l,d),a=c}}}if(Io)throw e=ya,Io=!1,ya=null,e}function le(e,t){var r=t[Na];r===void 0&&(r=t[Na]=new Set);var n=e+"__bubble";r.has(n)||(Fd(t,e,2,!1),r.add(n))}function Ui(e,t,r){var n=0;t&&(n|=4),Fd(r,e,n,t)}var uo="_reactListening"+Math.random().toString(36).slice(2);function In(e){if(!e[uo]){e[uo]=!0,Ac.forEach(function(r){r!=="selectionchange"&&(Kf.has(r)||Ui(r,!1,e),Ui(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[uo]||(t[uo]=!0,Ui("selectionchange",!1,t))}}function Fd(e,t,r,n){switch(xd(t)){case 1:var i=cf;break;case 4:i=df;break;default:i=fs}r=i.bind(null,t,r,e),i=void 0,!ha||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Oi(e,t,r,n,i){var a=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var l=n.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=n.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=dr(l),s===null)return;if(c=s.tag,c===5||c===6){n=a=s;continue e}l=l.parentNode}}n=n.return}rd(function(){var d=a,f=cs(r),g=[];e:{var p=Td.get(e);if(p!==void 0){var k=ms,w=e;switch(e){case"keypress":if(Co(r)===0)break e;case"keydown":case"keyup":k=Cf;break;case"focusin":w="focus",k=Ri;break;case"focusout":w="blur",k=Ri;break;case"beforeblur":case"afterblur":k=Ri;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=gl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=ff;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Nf;break;case zd:case Nd:case Pd:k=xf;break;case Ed:k=Ef;break;case"scroll":k=uf;break;case"wheel":k=Mf;break;case"copy":case"cut":case"paste":k=yf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=xl}var j=(t&4)!==0,x=!j&&e==="scroll",m=j?p!==null?p+"Capture":null:p;j=[];for(var u=d,h;u!==null;){h=u;var C=h.stateNode;if(h.tag===5&&C!==null&&(h=C,m!==null&&(C=Pn(u,m),C!=null&&j.push(Rn(u,C,h)))),x)break;u=u.return}0<j.length&&(p=new k(p,w,null,r,f),g.push({event:p,listeners:j}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",p&&r!==ma&&(w=r.relatedTarget||r.fromElement)&&(dr(w)||w[Et]))break e;if((k||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,k?(w=r.relatedTarget||r.toElement,k=d,w=w?dr(w):null,w!==null&&(x=wr(w),w!==x||w.tag!==5&&w.tag!==6)&&(w=null)):(k=null,w=d),k!==w)){if(j=gl,C="onMouseLeave",m="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(j=xl,C="onPointerLeave",m="onPointerEnter",u="pointer"),x=k==null?p:Tr(k),h=w==null?p:Tr(w),p=new j(C,u+"leave",k,r,f),p.target=x,p.relatedTarget=h,C=null,dr(f)===d&&(j=new j(m,u+"enter",w,r,f),j.target=h,j.relatedTarget=x,C=j),x=C,k&&w)t:{for(j=k,m=w,u=0,h=j;h;h=Cr(h))u++;for(h=0,C=m;C;C=Cr(C))h++;for(;0<u-h;)j=Cr(j),u--;for(;0<h-u;)m=Cr(m),h--;for(;u--;){if(j===m||m!==null&&j===m.alternate)break t;j=Cr(j),m=Cr(m)}j=null}else j=null;k!==null&&zl(g,p,k,j,!1),w!==null&&x!==null&&zl(g,x,w,j,!0)}}e:{if(p=d?Tr(d):window,k=p.nodeName&&p.nodeName.toLowerCase(),k==="select"||k==="input"&&p.type==="file")var $=Bf;else if(bl(p))if(kd)$=Of;else{$=Df;var y=Af}else(k=p.nodeName)&&k.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&($=Uf);if($&&($=$(e,d))){wd(g,$,r,f);break e}y&&y(e,p,d),e==="focusout"&&(y=p._wrapperState)&&y.controlled&&p.type==="number"&&da(p,"number",p.value)}switch(y=d?Tr(d):window,e){case"focusin":(bl(y)||y.contentEditable==="true")&&(Pr=y,ka=d,kn=null);break;case"focusout":kn=ka=Pr=null;break;case"mousedown":ja=!0;break;case"contextmenu":case"mouseup":case"dragend":ja=!1,Sl(g,r,f);break;case"selectionchange":if(Gf)break;case"keydown":case"keyup":Sl(g,r,f)}var S;if(hs)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Nr?bd(e,r)&&(N="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(yd&&r.locale!=="ko"&&(Nr||N!=="onCompositionStart"?N==="onCompositionEnd"&&Nr&&(S=hd()):(Ut=f,gs="value"in Ut?Ut.value:Ut.textContent,Nr=!0)),y=Ao(d,N),0<y.length&&(N=new ml(N,e,null,r,f),g.push({event:N,listeners:y}),S?N.data=S:(S=vd(r),S!==null&&(N.data=S)))),(S=Lf?If(e,r):Rf(e,r))&&(d=Ao(d,"onBeforeInput"),0<d.length&&(f=new ml("onBeforeInput","beforeinput",null,r,f),g.push({event:f,listeners:d}),f.data=S))}Md(g,t)})}function Rn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ao(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=Pn(e,r),a!=null&&n.unshift(Rn(e,a,i)),a=Pn(e,t),a!=null&&n.push(Rn(e,a,i))),e=e.return}return n}function Cr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zl(e,t,r,n,i){for(var a=t._reactName,s=[];r!==null&&r!==n;){var l=r,c=l.alternate,d=l.stateNode;if(c!==null&&c===n)break;l.tag===5&&d!==null&&(l=d,i?(c=Pn(r,a),c!=null&&s.unshift(Rn(r,c,l))):i||(c=Pn(r,a),c!=null&&s.push(Rn(r,c,l)))),r=r.return}s.length!==0&&e.push({event:t,listeners:s})}var Xf=/\r\n?/g,Jf=/\u0000|\uFFFD/g;function Nl(e){return(typeof e=="string"?e:""+e).replace(Xf,`
`).replace(Jf,"")}function po(e,t,r){if(t=Nl(t),Nl(e)!==t&&r)throw Error(M(425))}function Do(){}var Sa=null,Ca=null;function $a(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var za=typeof setTimeout=="function"?setTimeout:void 0,qf=typeof clearTimeout=="function"?clearTimeout:void 0,Pl=typeof Promise=="function"?Promise:void 0,Zf=typeof queueMicrotask=="function"?queueMicrotask:typeof Pl<"u"?function(e){return Pl.resolve(null).then(e).catch(eg)}:za;function eg(e){setTimeout(function(){throw e})}function Hi(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),Mn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);Mn(t)}function Qt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function El(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),vt="__reactFiber$"+Zr,Wn="__reactProps$"+Zr,Et="__reactContainer$"+Zr,Na="__reactEvents$"+Zr,tg="__reactListeners$"+Zr,rg="__reactHandles$"+Zr;function dr(e){var t=e[vt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Et]||r[vt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=El(e);e!==null;){if(r=e[vt])return r;e=El(e)}return t}e=r,r=e.parentNode}return null}function Xn(e){return e=e[vt]||e[Et],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Tr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(M(33))}function pi(e){return e[Wn]||null}var Pa=[],Mr=-1;function nr(e){return{current:e}}function ce(e){0>Mr||(e.current=Pa[Mr],Pa[Mr]=null,Mr--)}function ae(e,t){Mr++,Pa[Mr]=e.current,e.current=t}var tr={},Re=nr(tr),Ge=nr(!1),mr=tr;function Yr(e,t){var r=e.type.contextTypes;if(!r)return tr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in r)i[a]=t[a];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ve(e){return e=e.childContextTypes,e!=null}function Uo(){ce(Ge),ce(Re)}function Tl(e,t,r){if(Re.current!==tr)throw Error(M(168));ae(Re,t),ae(Ge,r)}function Ld(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(M(108,Bp(e)||"Unknown",i));return xe({},r,n)}function Oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tr,mr=Re.current,ae(Re,e),ae(Ge,Ge.current),!0}function Ml(e,t,r){var n=e.stateNode;if(!n)throw Error(M(169));r?(e=Ld(e,t,mr),n.__reactInternalMemoizedMergedChildContext=e,ce(Ge),ce(Re),ae(Re,e)):ce(Ge),ae(Ge,r)}var Ct=null,fi=!1,Yi=!1;function Id(e){Ct===null?Ct=[e]:Ct.push(e)}function ng(e){fi=!0,Id(e)}function or(){if(!Yi&&Ct!==null){Yi=!0;var e=0,t=te;try{var r=Ct;for(te=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ct=null,fi=!1}catch(i){throw Ct!==null&&(Ct=Ct.slice(e+1)),ad(ds,or),i}finally{te=t,Yi=!1}}return null}var Fr=[],Lr=0,Ho=null,Yo=0,nt=[],ot=0,xr=null,$t=1,zt="";function lr(e,t){Fr[Lr++]=Yo,Fr[Lr++]=Ho,Ho=e,Yo=t}function Rd(e,t,r){nt[ot++]=$t,nt[ot++]=zt,nt[ot++]=xr,xr=e;var n=$t;e=zt;var i=32-gt(n)-1;n&=~(1<<i),r+=1;var a=32-gt(t)+i;if(30<a){var s=i-i%5;a=(n&(1<<s)-1).toString(32),n>>=s,i-=s,$t=1<<32-gt(t)+i|r<<i|n,zt=a+e}else $t=1<<a|r<<i|n,zt=e}function bs(e){e.return!==null&&(lr(e,1),Rd(e,1,0))}function vs(e){for(;e===Ho;)Ho=Fr[--Lr],Fr[Lr]=null,Yo=Fr[--Lr],Fr[Lr]=null;for(;e===xr;)xr=nt[--ot],nt[ot]=null,zt=nt[--ot],nt[ot]=null,$t=nt[--ot],nt[ot]=null}var Ze=null,qe=null,de=!1,pt=null;function Wd(e,t){var r=it(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Fl(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ze=e,qe=Qt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ze=e,qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=xr!==null?{id:$t,overflow:zt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=it(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Ze=e,qe=null,!0):!1;default:return!1}}function Ea(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ta(e){if(de){var t=qe;if(t){var r=t;if(!Fl(e,t)){if(Ea(e))throw Error(M(418));t=Qt(r.nextSibling);var n=Ze;t&&Fl(e,t)?Wd(n,r):(e.flags=e.flags&-4097|2,de=!1,Ze=e)}}else{if(Ea(e))throw Error(M(418));e.flags=e.flags&-4097|2,de=!1,Ze=e}}}function Ll(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ze=e}function fo(e){if(e!==Ze)return!1;if(!de)return Ll(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$a(e.type,e.memoizedProps)),t&&(t=qe)){if(Ea(e))throw _d(),Error(M(418));for(;t;)Wd(e,t),t=Qt(t.nextSibling)}if(Ll(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(M(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){qe=Qt(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}qe=null}}else qe=Ze?Qt(e.stateNode.nextSibling):null;return!0}function _d(){for(var e=qe;e;)e=Qt(e.nextSibling)}function Gr(){qe=Ze=null,de=!1}function ws(e){pt===null?pt=[e]:pt.push(e)}var og=Lt.ReactCurrentBatchConfig;function dn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(M(309));var n=r.stateNode}if(!n)throw Error(M(147,e));var i=n,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(s){var l=i.refs;s===null?delete l[a]:l[a]=s},t._stringRef=a,t)}if(typeof e!="string")throw Error(M(284));if(!r._owner)throw Error(M(290,e))}return e}function go(e,t){throw e=Object.prototype.toString.call(t),Error(M(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Il(e){var t=e._init;return t(e._payload)}function Bd(e){function t(m,u){if(e){var h=m.deletions;h===null?(m.deletions=[u],m.flags|=16):h.push(u)}}function r(m,u){if(!e)return null;for(;u!==null;)t(m,u),u=u.sibling;return null}function n(m,u){for(m=new Map;u!==null;)u.key!==null?m.set(u.key,u):m.set(u.index,u),u=u.sibling;return m}function i(m,u){return m=qt(m,u),m.index=0,m.sibling=null,m}function a(m,u,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<u?(m.flags|=2,u):h):(m.flags|=2,u)):(m.flags|=1048576,u)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,u,h,C){return u===null||u.tag!==6?(u=qi(h,m.mode,C),u.return=m,u):(u=i(u,h),u.return=m,u)}function c(m,u,h,C){var $=h.type;return $===zr?f(m,u,h.props.children,C,h.key):u!==null&&(u.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===_t&&Il($)===u.type)?(C=i(u,h.props),C.ref=dn(m,u,h),C.return=m,C):(C=Mo(h.type,h.key,h.props,null,m.mode,C),C.ref=dn(m,u,h),C.return=m,C)}function d(m,u,h,C){return u===null||u.tag!==4||u.stateNode.containerInfo!==h.containerInfo||u.stateNode.implementation!==h.implementation?(u=Zi(h,m.mode,C),u.return=m,u):(u=i(u,h.children||[]),u.return=m,u)}function f(m,u,h,C,$){return u===null||u.tag!==7?(u=gr(h,m.mode,C,$),u.return=m,u):(u=i(u,h),u.return=m,u)}function g(m,u,h){if(typeof u=="string"&&u!==""||typeof u=="number")return u=qi(""+u,m.mode,h),u.return=m,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case ro:return h=Mo(u.type,u.key,u.props,null,m.mode,h),h.ref=dn(m,null,u),h.return=m,h;case $r:return u=Zi(u,m.mode,h),u.return=m,u;case _t:var C=u._init;return g(m,C(u._payload),h)}if(gn(u)||on(u))return u=gr(u,m.mode,h,null),u.return=m,u;go(m,u)}return null}function p(m,u,h,C){var $=u!==null?u.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return $!==null?null:l(m,u,""+h,C);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case ro:return h.key===$?c(m,u,h,C):null;case $r:return h.key===$?d(m,u,h,C):null;case _t:return $=h._init,p(m,u,$(h._payload),C)}if(gn(h)||on(h))return $!==null?null:f(m,u,h,C,null);go(m,h)}return null}function k(m,u,h,C,$){if(typeof C=="string"&&C!==""||typeof C=="number")return m=m.get(h)||null,l(u,m,""+C,$);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case ro:return m=m.get(C.key===null?h:C.key)||null,c(u,m,C,$);case $r:return m=m.get(C.key===null?h:C.key)||null,d(u,m,C,$);case _t:var y=C._init;return k(m,u,h,y(C._payload),$)}if(gn(C)||on(C))return m=m.get(h)||null,f(u,m,C,$,null);go(u,C)}return null}function w(m,u,h,C){for(var $=null,y=null,S=u,N=u=0,P=null;S!==null&&N<h.length;N++){S.index>N?(P=S,S=null):P=S.sibling;var E=p(m,S,h[N],C);if(E===null){S===null&&(S=P);break}e&&S&&E.alternate===null&&t(m,S),u=a(E,u,N),y===null?$=E:y.sibling=E,y=E,S=P}if(N===h.length)return r(m,S),de&&lr(m,N),$;if(S===null){for(;N<h.length;N++)S=g(m,h[N],C),S!==null&&(u=a(S,u,N),y===null?$=S:y.sibling=S,y=S);return de&&lr(m,N),$}for(S=n(m,S);N<h.length;N++)P=k(S,m,N,h[N],C),P!==null&&(e&&P.alternate!==null&&S.delete(P.key===null?N:P.key),u=a(P,u,N),y===null?$=P:y.sibling=P,y=P);return e&&S.forEach(function(Q){return t(m,Q)}),de&&lr(m,N),$}function j(m,u,h,C){var $=on(h);if(typeof $!="function")throw Error(M(150));if(h=$.call(h),h==null)throw Error(M(151));for(var y=$=null,S=u,N=u=0,P=null,E=h.next();S!==null&&!E.done;N++,E=h.next()){S.index>N?(P=S,S=null):P=S.sibling;var Q=p(m,S,E.value,C);if(Q===null){S===null&&(S=P);break}e&&S&&Q.alternate===null&&t(m,S),u=a(Q,u,N),y===null?$=Q:y.sibling=Q,y=Q,S=P}if(E.done)return r(m,S),de&&lr(m,N),$;if(S===null){for(;!E.done;N++,E=h.next())E=g(m,E.value,C),E!==null&&(u=a(E,u,N),y===null?$=E:y.sibling=E,y=E);return de&&lr(m,N),$}for(S=n(m,S);!E.done;N++,E=h.next())E=k(S,m,N,E.value,C),E!==null&&(e&&E.alternate!==null&&S.delete(E.key===null?N:E.key),u=a(E,u,N),y===null?$=E:y.sibling=E,y=E);return e&&S.forEach(function(G){return t(m,G)}),de&&lr(m,N),$}function x(m,u,h,C){if(typeof h=="object"&&h!==null&&h.type===zr&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case ro:e:{for(var $=h.key,y=u;y!==null;){if(y.key===$){if($=h.type,$===zr){if(y.tag===7){r(m,y.sibling),u=i(y,h.props.children),u.return=m,m=u;break e}}else if(y.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===_t&&Il($)===y.type){r(m,y.sibling),u=i(y,h.props),u.ref=dn(m,y,h),u.return=m,m=u;break e}r(m,y);break}else t(m,y);y=y.sibling}h.type===zr?(u=gr(h.props.children,m.mode,C,h.key),u.return=m,m=u):(C=Mo(h.type,h.key,h.props,null,m.mode,C),C.ref=dn(m,u,h),C.return=m,m=C)}return s(m);case $r:e:{for(y=h.key;u!==null;){if(u.key===y)if(u.tag===4&&u.stateNode.containerInfo===h.containerInfo&&u.stateNode.implementation===h.implementation){r(m,u.sibling),u=i(u,h.children||[]),u.return=m,m=u;break e}else{r(m,u);break}else t(m,u);u=u.sibling}u=Zi(h,m.mode,C),u.return=m,m=u}return s(m);case _t:return y=h._init,x(m,u,y(h._payload),C)}if(gn(h))return w(m,u,h,C);if(on(h))return j(m,u,h,C);go(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,u!==null&&u.tag===6?(r(m,u.sibling),u=i(u,h),u.return=m,m=u):(r(m,u),u=qi(h,m.mode,C),u.return=m,m=u),s(m)):r(m,u)}return x}var Vr=Bd(!0),Ad=Bd(!1),Go=nr(null),Vo=null,Ir=null,ks=null;function js(){ks=Ir=Vo=null}function Ss(e){var t=Go.current;ce(Go),e._currentValue=t}function Ma(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ur(e,t){Vo=e,ks=Ir=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ye=!0),e.firstContext=null)}function st(e){var t=e._currentValue;if(ks!==e)if(e={context:e,memoizedValue:t,next:null},Ir===null){if(Vo===null)throw Error(M(308));Ir=e,Vo.dependencies={lanes:0,firstContext:e}}else Ir=Ir.next=e;return t}var ur=null;function Cs(e){ur===null?ur=[e]:ur.push(e)}function Dd(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Cs(t)):(r.next=i.next,i.next=r),t.interleaved=r,Tt(e,n)}function Tt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Bt=!1;function $s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ud(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Kt(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,Z&2){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Tt(e,r)}return i=n.interleaved,i===null?(t.next=t,Cs(n)):(t.next=i.next,i.next=t),n.interleaved=t,Tt(e,r)}function $o(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,us(e,r)}}function Rl(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,a=null;if(r=r.firstBaseUpdate,r!==null){do{var s={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};a===null?i=a=s:a=a.next=s,r=r.next}while(r!==null);a===null?i=a=t:a=a.next=t}else i=a=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Qo(e,t,r,n){var i=e.updateQueue;Bt=!1;var a=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,d=c.next;c.next=null,s===null?a=d:s.next=d,s=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==s&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(a!==null){var g=i.baseState;s=0,f=d=c=null,l=a;do{var p=l.lane,k=l.eventTime;if((n&p)===p){f!==null&&(f=f.next={eventTime:k,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,j=l;switch(p=t,k=r,j.tag){case 1:if(w=j.payload,typeof w=="function"){g=w.call(k,g,p);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=j.payload,p=typeof w=="function"?w.call(k,g,p):w,p==null)break e;g=xe({},g,p);break e;case 2:Bt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=i.effects,p===null?i.effects=[l]:p.push(l))}else k={eventTime:k,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=k,c=g):f=f.next=k,s|=p;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;p=l,l=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(!0);if(f===null&&(c=g),i.baseState=c,i.firstBaseUpdate=d,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);yr|=s,e.lanes=s,e.memoizedState=g}}function Wl(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(M(191,i));i.call(n)}}}var Jn={},kt=nr(Jn),_n=nr(Jn),Bn=nr(Jn);function pr(e){if(e===Jn)throw Error(M(174));return e}function zs(e,t){switch(ae(Bn,t),ae(_n,e),ae(kt,Jn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:pa(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=pa(t,e)}ce(kt),ae(kt,t)}function Qr(){ce(kt),ce(_n),ce(Bn)}function Od(e){pr(Bn.current);var t=pr(kt.current),r=pa(t,e.type);t!==r&&(ae(_n,e),ae(kt,r))}function Ns(e){_n.current===e&&(ce(kt),ce(_n))}var ge=nr(0);function Ko(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Gi=[];function Ps(){for(var e=0;e<Gi.length;e++)Gi[e]._workInProgressVersionPrimary=null;Gi.length=0}var zo=Lt.ReactCurrentDispatcher,Vi=Lt.ReactCurrentBatchConfig,hr=0,me=null,Se=null,ze=null,Xo=!1,jn=!1,An=0,ig=0;function Me(){throw Error(M(321))}function Es(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!xt(e[r],t[r]))return!1;return!0}function Ts(e,t,r,n,i,a){if(hr=a,me=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,zo.current=e===null||e.memoizedState===null?cg:dg,e=r(n,i),jn){a=0;do{if(jn=!1,An=0,25<=a)throw Error(M(301));a+=1,ze=Se=null,t.updateQueue=null,zo.current=ug,e=r(n,i)}while(jn)}if(zo.current=Jo,t=Se!==null&&Se.next!==null,hr=0,ze=Se=me=null,Xo=!1,t)throw Error(M(300));return e}function Ms(){var e=An!==0;return An=0,e}function bt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ze===null?me.memoizedState=ze=e:ze=ze.next=e,ze}function lt(){if(Se===null){var e=me.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=ze===null?me.memoizedState:ze.next;if(t!==null)ze=t,Se=e;else{if(e===null)throw Error(M(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},ze===null?me.memoizedState=ze=e:ze=ze.next=e}return ze}function Dn(e,t){return typeof t=="function"?t(e):t}function Qi(e){var t=lt(),r=t.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=e;var n=Se,i=n.baseQueue,a=r.pending;if(a!==null){if(i!==null){var s=i.next;i.next=a.next,a.next=s}n.baseQueue=i=a,r.pending=null}if(i!==null){a=i.next,n=n.baseState;var l=s=null,c=null,d=a;do{var f=d.lane;if((hr&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),n=d.hasEagerState?d.eagerState:e(n,d.action);else{var g={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=g,s=n):c=c.next=g,me.lanes|=f,yr|=f}d=d.next}while(d!==null&&d!==a);c===null?s=n:c.next=l,xt(n,t.memoizedState)||(Ye=!0),t.memoizedState=n,t.baseState=s,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do a=i.lane,me.lanes|=a,yr|=a,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ki(e){var t=lt(),r=t.queue;if(r===null)throw Error(M(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,a=t.memoizedState;if(i!==null){r.pending=null;var s=i=i.next;do a=e(a,s.action),s=s.next;while(s!==i);xt(a,t.memoizedState)||(Ye=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),r.lastRenderedState=a}return[a,n]}function Hd(){}function Yd(e,t){var r=me,n=lt(),i=t(),a=!xt(n.memoizedState,i);if(a&&(n.memoizedState=i,Ye=!0),n=n.queue,Fs(Qd.bind(null,r,n,e),[e]),n.getSnapshot!==t||a||ze!==null&&ze.memoizedState.tag&1){if(r.flags|=2048,Un(9,Vd.bind(null,r,n,i,t),void 0,null),Ne===null)throw Error(M(349));hr&30||Gd(r,t,i)}return i}function Gd(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Vd(e,t,r,n){t.value=r,t.getSnapshot=n,Kd(t)&&Xd(e)}function Qd(e,t,r){return r(function(){Kd(t)&&Xd(e)})}function Kd(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!xt(e,r)}catch{return!0}}function Xd(e){var t=Tt(e,1);t!==null&&mt(t,e,1,-1)}function _l(e){var t=bt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Dn,lastRenderedState:e},t.queue=e,e=e.dispatch=lg.bind(null,me,e),[t.memoizedState,e]}function Un(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=me.updateQueue,t===null?(t={lastEffect:null,stores:null},me.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Jd(){return lt().memoizedState}function No(e,t,r,n){var i=bt();me.flags|=e,i.memoizedState=Un(1|t,r,void 0,n===void 0?null:n)}function gi(e,t,r,n){var i=lt();n=n===void 0?null:n;var a=void 0;if(Se!==null){var s=Se.memoizedState;if(a=s.destroy,n!==null&&Es(n,s.deps)){i.memoizedState=Un(t,r,a,n);return}}me.flags|=e,i.memoizedState=Un(1|t,r,a,n)}function Bl(e,t){return No(8390656,8,e,t)}function Fs(e,t){return gi(2048,8,e,t)}function qd(e,t){return gi(4,2,e,t)}function Zd(e,t){return gi(4,4,e,t)}function eu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function tu(e,t,r){return r=r!=null?r.concat([e]):null,gi(4,4,eu.bind(null,t,e),r)}function Ls(){}function ru(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Es(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function nu(e,t){var r=lt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Es(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ou(e,t,r){return hr&21?(xt(r,t)||(r=cd(),me.lanes|=r,yr|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ye=!0),e.memoizedState=r)}function ag(e,t){var r=te;te=r!==0&&4>r?r:4,e(!0);var n=Vi.transition;Vi.transition={};try{e(!1),t()}finally{te=r,Vi.transition=n}}function iu(){return lt().memoizedState}function sg(e,t,r){var n=Jt(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},au(e))su(t,r);else if(r=Dd(e,t,r,n),r!==null){var i=Ae();mt(r,e,n,i),lu(r,t,n)}}function lg(e,t,r){var n=Jt(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(au(e))su(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var s=t.lastRenderedState,l=a(s,r);if(i.hasEagerState=!0,i.eagerState=l,xt(l,s)){var c=t.interleaved;c===null?(i.next=i,Cs(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}r=Dd(e,t,i,n),r!==null&&(i=Ae(),mt(r,e,n,i),lu(r,t,n))}}function au(e){var t=e.alternate;return e===me||t!==null&&t===me}function su(e,t){jn=Xo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function lu(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,us(e,r)}}var Jo={readContext:st,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},cg={readContext:st,useCallback:function(e,t){return bt().memoizedState=[e,t===void 0?null:t],e},useContext:st,useEffect:Bl,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,No(4194308,4,eu.bind(null,t,e),r)},useLayoutEffect:function(e,t){return No(4194308,4,e,t)},useInsertionEffect:function(e,t){return No(4,2,e,t)},useMemo:function(e,t){var r=bt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=bt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=sg.bind(null,me,e),[n.memoizedState,e]},useRef:function(e){var t=bt();return e={current:e},t.memoizedState=e},useState:_l,useDebugValue:Ls,useDeferredValue:function(e){return bt().memoizedState=e},useTransition:function(){var e=_l(!1),t=e[0];return e=ag.bind(null,e[1]),bt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=me,i=bt();if(de){if(r===void 0)throw Error(M(407));r=r()}else{if(r=t(),Ne===null)throw Error(M(349));hr&30||Gd(n,t,r)}i.memoizedState=r;var a={value:r,getSnapshot:t};return i.queue=a,Bl(Qd.bind(null,n,a,e),[e]),n.flags|=2048,Un(9,Vd.bind(null,n,a,r,t),void 0,null),r},useId:function(){var e=bt(),t=Ne.identifierPrefix;if(de){var r=zt,n=$t;r=(n&~(1<<32-gt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=An++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=ig++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},dg={readContext:st,useCallback:ru,useContext:st,useEffect:Fs,useImperativeHandle:tu,useInsertionEffect:qd,useLayoutEffect:Zd,useMemo:nu,useReducer:Qi,useRef:Jd,useState:function(){return Qi(Dn)},useDebugValue:Ls,useDeferredValue:function(e){var t=lt();return ou(t,Se.memoizedState,e)},useTransition:function(){var e=Qi(Dn)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Yd,useId:iu,unstable_isNewReconciler:!1},ug={readContext:st,useCallback:ru,useContext:st,useEffect:Fs,useImperativeHandle:tu,useInsertionEffect:qd,useLayoutEffect:Zd,useMemo:nu,useReducer:Ki,useRef:Jd,useState:function(){return Ki(Dn)},useDebugValue:Ls,useDeferredValue:function(e){var t=lt();return Se===null?t.memoizedState=e:ou(t,Se.memoizedState,e)},useTransition:function(){var e=Ki(Dn)[0],t=lt().memoizedState;return[e,t]},useMutableSource:Hd,useSyncExternalStore:Yd,useId:iu,unstable_isNewReconciler:!1};function dt(e,t){if(e&&e.defaultProps){t=xe({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Fa(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:xe({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var mi={isMounted:function(e){return(e=e._reactInternals)?wr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ae(),i=Jt(e),a=Nt(n,i);a.payload=t,r!=null&&(a.callback=r),t=Kt(e,a,i),t!==null&&(mt(t,e,i,n),$o(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ae(),i=Jt(e),a=Nt(n,i);a.tag=1,a.payload=t,r!=null&&(a.callback=r),t=Kt(e,a,i),t!==null&&(mt(t,e,i,n),$o(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ae(),n=Jt(e),i=Nt(r,n);i.tag=2,t!=null&&(i.callback=t),t=Kt(e,i,n),t!==null&&(mt(t,e,n,r),$o(t,e,n))}};function Al(e,t,r,n,i,a,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,a,s):t.prototype&&t.prototype.isPureReactComponent?!Ln(r,n)||!Ln(i,a):!0}function cu(e,t,r){var n=!1,i=tr,a=t.contextType;return typeof a=="object"&&a!==null?a=st(a):(i=Ve(t)?mr:Re.current,n=t.contextTypes,a=(n=n!=null)?Yr(e,i):tr),t=new t(r,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mi,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Dl(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&mi.enqueueReplaceState(t,t.state,null)}function La(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},$s(e);var a=t.contextType;typeof a=="object"&&a!==null?i.context=st(a):(a=Ve(t)?mr:Re.current,i.context=Yr(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Fa(e,t,a,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&mi.enqueueReplaceState(i,i.state,null),Qo(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Kr(e,t){try{var r="",n=t;do r+=_p(n),n=n.return;while(n);var i=r}catch(a){i=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:i,digest:null}}function Xi(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Ia(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var pg=typeof WeakMap=="function"?WeakMap:Map;function du(e,t,r){r=Nt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Zo||(Zo=!0,Ya=n),Ia(e,t)},r}function uu(e,t,r){r=Nt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){Ia(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(r.callback=function(){Ia(e,t),typeof n!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),r}function Ul(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new pg;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=$g.bind(null,e,t,r),t.then(e,e))}function Ol(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Hl(e,t,r,n,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Nt(-1,1),t.tag=2,Kt(r,t,1))),r.lanes|=1),e)}var fg=Lt.ReactCurrentOwner,Ye=!1;function We(e,t,r,n){t.child=e===null?Ad(t,null,r,n):Vr(t,e.child,r,n)}function Yl(e,t,r,n,i){r=r.render;var a=t.ref;return Ur(t,i),n=Ts(e,t,r,n,a,i),r=Ms(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(de&&r&&bs(t),t.flags|=1,We(e,t,n,i),t.child)}function Gl(e,t,r,n,i){if(e===null){var a=r.type;return typeof a=="function"&&!Us(a)&&a.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=a,pu(e,t,a,n,i)):(e=Mo(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&i)){var s=a.memoizedProps;if(r=r.compare,r=r!==null?r:Ln,r(s,n)&&e.ref===t.ref)return Mt(e,t,i)}return t.flags|=1,e=qt(a,n),e.ref=t.ref,e.return=t,t.child=e}function pu(e,t,r,n,i){if(e!==null){var a=e.memoizedProps;if(Ln(a,n)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=n=a,(e.lanes&i)!==0)e.flags&131072&&(Ye=!0);else return t.lanes=e.lanes,Mt(e,t,i)}return Ra(e,t,r,n,i)}function fu(e,t,r){var n=t.pendingProps,i=n.children,a=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ae(Wr,Je),Je|=r;else{if(!(r&1073741824))return e=a!==null?a.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ae(Wr,Je),Je|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=a!==null?a.baseLanes:r,ae(Wr,Je),Je|=n}else a!==null?(n=a.baseLanes|r,t.memoizedState=null):n=r,ae(Wr,Je),Je|=n;return We(e,t,i,r),t.child}function gu(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Ra(e,t,r,n,i){var a=Ve(r)?mr:Re.current;return a=Yr(t,a),Ur(t,i),r=Ts(e,t,r,n,a,i),n=Ms(),e!==null&&!Ye?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Mt(e,t,i)):(de&&n&&bs(t),t.flags|=1,We(e,t,r,i),t.child)}function Vl(e,t,r,n,i){if(Ve(r)){var a=!0;Oo(t)}else a=!1;if(Ur(t,i),t.stateNode===null)Po(e,t),cu(t,r,n),La(t,r,n,i),n=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,d=r.contextType;typeof d=="object"&&d!==null?d=st(d):(d=Ve(r)?mr:Re.current,d=Yr(t,d));var f=r.getDerivedStateFromProps,g=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function";g||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==n||c!==d)&&Dl(t,s,n,d),Bt=!1;var p=t.memoizedState;s.state=p,Qo(t,n,s,i),c=t.memoizedState,l!==n||p!==c||Ge.current||Bt?(typeof f=="function"&&(Fa(t,r,f,n),c=t.memoizedState),(l=Bt||Al(t,r,l,n,p,c,d))?(g||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),s.props=n,s.state=c,s.context=d,n=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{s=t.stateNode,Ud(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:dt(t.type,l),s.props=d,g=t.pendingProps,p=s.context,c=r.contextType,typeof c=="object"&&c!==null?c=st(c):(c=Ve(r)?mr:Re.current,c=Yr(t,c));var k=r.getDerivedStateFromProps;(f=typeof k=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==g||p!==c)&&Dl(t,s,n,c),Bt=!1,p=t.memoizedState,s.state=p,Qo(t,n,s,i);var w=t.memoizedState;l!==g||p!==w||Ge.current||Bt?(typeof k=="function"&&(Fa(t,r,k,n),w=t.memoizedState),(d=Bt||Al(t,r,d,n,p,w,c)||!1)?(f||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(n,w,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(n,w,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=w),s.props=n,s.state=w,s.context=c,n=d):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return Wa(e,t,r,n,a,i)}function Wa(e,t,r,n,i,a){gu(e,t);var s=(t.flags&128)!==0;if(!n&&!s)return i&&Ml(t,r,!1),Mt(e,t,a);n=t.stateNode,fg.current=t;var l=s&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&s?(t.child=Vr(t,e.child,null,a),t.child=Vr(t,null,l,a)):We(e,t,l,a),t.memoizedState=n.state,i&&Ml(t,r,!0),t.child}function mu(e){var t=e.stateNode;t.pendingContext?Tl(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tl(e,t.context,!1),zs(e,t.containerInfo)}function Ql(e,t,r,n,i){return Gr(),ws(i),t.flags|=256,We(e,t,r,n),t.child}var _a={dehydrated:null,treeContext:null,retryLane:0};function Ba(e){return{baseLanes:e,cachePool:null,transitions:null}}function xu(e,t,r){var n=t.pendingProps,i=ge.current,a=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ae(ge,i&1),e===null)return Ta(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=n.children,e=n.fallback,a?(n=t.mode,a=t.child,s={mode:"hidden",children:s},!(n&1)&&a!==null?(a.childLanes=0,a.pendingProps=s):a=yi(s,n,0,null),e=gr(e,n,r,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ba(r),t.memoizedState=_a,e):Is(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return gg(e,t,s,n,l,i,r);if(a){a=n.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:n.children};return!(s&1)&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=qt(i,c),n.subtreeFlags=i.subtreeFlags&14680064),l!==null?a=qt(l,a):(a=gr(a,s,r,null),a.flags|=2),a.return=t,n.return=t,n.sibling=a,t.child=n,n=a,a=t.child,s=e.child.memoizedState,s=s===null?Ba(r):{baseLanes:s.baseLanes|r,cachePool:null,transitions:s.transitions},a.memoizedState=s,a.childLanes=e.childLanes&~r,t.memoizedState=_a,n}return a=e.child,e=a.sibling,n=qt(a,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Is(e,t){return t=yi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function mo(e,t,r,n){return n!==null&&ws(n),Vr(t,e.child,null,r),e=Is(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function gg(e,t,r,n,i,a,s){if(r)return t.flags&256?(t.flags&=-257,n=Xi(Error(M(422))),mo(e,t,s,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=n.fallback,i=t.mode,n=yi({mode:"visible",children:n.children},i,0,null),a=gr(a,i,s,null),a.flags|=2,n.return=t,a.return=t,n.sibling=a,t.child=n,t.mode&1&&Vr(t,e.child,null,s),t.child.memoizedState=Ba(s),t.memoizedState=_a,a);if(!(t.mode&1))return mo(e,t,s,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var l=n.dgst;return n=l,a=Error(M(419)),n=Xi(a,n,void 0),mo(e,t,s,n)}if(l=(s&e.childLanes)!==0,Ye||l){if(n=Ne,n!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(n.suspendedLanes|s)?0:i,i!==0&&i!==a.retryLane&&(a.retryLane=i,Tt(e,i),mt(n,e,i,-1))}return Ds(),n=Xi(Error(M(421))),mo(e,t,s,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=zg.bind(null,e),i._reactRetry=t,null):(e=a.treeContext,qe=Qt(i.nextSibling),Ze=t,de=!0,pt=null,e!==null&&(nt[ot++]=$t,nt[ot++]=zt,nt[ot++]=xr,$t=e.id,zt=e.overflow,xr=t),t=Is(t,n.children),t.flags|=4096,t)}function Kl(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ma(e.return,t,r)}function Ji(e,t,r,n,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=n,a.tail=r,a.tailMode=i)}function hu(e,t,r){var n=t.pendingProps,i=n.revealOrder,a=n.tail;if(We(e,t,n.children,r),n=ge.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kl(e,r,t);else if(e.tag===19)Kl(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ae(ge,n),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Ko(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),Ji(t,!1,i,r,a);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ko(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}Ji(t,!0,r,null,a);break;case"together":Ji(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Po(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Mt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),yr|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(M(153));if(t.child!==null){for(e=t.child,r=qt(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=qt(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function mg(e,t,r){switch(t.tag){case 3:mu(t),Gr();break;case 5:Od(t);break;case 1:Ve(t.type)&&Oo(t);break;case 4:zs(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ae(Go,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ae(ge,ge.current&1),t.flags|=128,null):r&t.child.childLanes?xu(e,t,r):(ae(ge,ge.current&1),e=Mt(e,t,r),e!==null?e.sibling:null);ae(ge,ge.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return hu(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ae(ge,ge.current),n)break;return null;case 22:case 23:return t.lanes=0,fu(e,t,r)}return Mt(e,t,r)}var yu,Aa,bu,vu;yu=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};Aa=function(){};bu=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,pr(kt.current);var a=null;switch(r){case"input":i=la(e,i),n=la(e,n),a=[];break;case"select":i=xe({},i,{value:void 0}),n=xe({},n,{value:void 0}),a=[];break;case"textarea":i=ua(e,i),n=ua(e,n),a=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=Do)}fa(r,n);var s;r=null;for(d in i)if(!n.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var l=i[d];for(s in l)l.hasOwnProperty(s)&&(r||(r={}),r[s]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(zn.hasOwnProperty(d)?a||(a=[]):(a=a||[]).push(d,null));for(d in n){var c=n[d];if(l=i!=null?i[d]:void 0,n.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(r||(r={}),r[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(r||(r={}),r[s]=c[s])}else r||(a||(a=[]),a.push(d,r)),r=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(a=a||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(a=a||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(zn.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&le("scroll",e),a||l===c||(a=[])):(a=a||[]).push(d,c))}r&&(a=a||[]).push("style",r);var d=a;(t.updateQueue=d)&&(t.flags|=4)}};vu=function(e,t,r,n){r!==n&&(t.flags|=4)};function un(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function xg(e,t,r){var n=t.pendingProps;switch(vs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Ve(t.type)&&Uo(),Fe(t),null;case 3:return n=t.stateNode,Qr(),ce(Ge),ce(Re),Ps(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(fo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,pt!==null&&(Qa(pt),pt=null))),Aa(e,t),Fe(t),null;case 5:Ns(t);var i=pr(Bn.current);if(r=t.type,e!==null&&t.stateNode!=null)bu(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(M(166));return Fe(t),null}if(e=pr(kt.current),fo(t)){n=t.stateNode,r=t.type;var a=t.memoizedProps;switch(n[vt]=t,n[Wn]=a,e=(t.mode&1)!==0,r){case"dialog":le("cancel",n),le("close",n);break;case"iframe":case"object":case"embed":le("load",n);break;case"video":case"audio":for(i=0;i<xn.length;i++)le(xn[i],n);break;case"source":le("error",n);break;case"img":case"image":case"link":le("error",n),le("load",n);break;case"details":le("toggle",n);break;case"input":ol(n,a),le("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!a.multiple},le("invalid",n);break;case"textarea":al(n,a),le("invalid",n)}fa(r,a),i=null;for(var s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="children"?typeof l=="string"?n.textContent!==l&&(a.suppressHydrationWarning!==!0&&po(n.textContent,l,e),i=["children",l]):typeof l=="number"&&n.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&po(n.textContent,l,e),i=["children",""+l]):zn.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&le("scroll",n)}switch(r){case"input":no(n),il(n,a,!0);break;case"textarea":no(n),sl(n);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(n.onclick=Do)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Qc(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=s.createElement(r,{is:n.is}):(e=s.createElement(r),r==="select"&&(s=e,n.multiple?s.multiple=!0:n.size&&(s.size=n.size))):e=s.createElementNS(e,r),e[vt]=t,e[Wn]=n,yu(e,t,!1,!1),t.stateNode=e;e:{switch(s=ga(r,n),r){case"dialog":le("cancel",e),le("close",e),i=n;break;case"iframe":case"object":case"embed":le("load",e),i=n;break;case"video":case"audio":for(i=0;i<xn.length;i++)le(xn[i],e);i=n;break;case"source":le("error",e),i=n;break;case"img":case"image":case"link":le("error",e),le("load",e),i=n;break;case"details":le("toggle",e),i=n;break;case"input":ol(e,n),i=la(e,n),le("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=xe({},n,{value:void 0}),le("invalid",e);break;case"textarea":al(e,n),i=ua(e,n),le("invalid",e);break;default:i=n}fa(r,i),l=i;for(a in l)if(l.hasOwnProperty(a)){var c=l[a];a==="style"?Jc(e,c):a==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Kc(e,c)):a==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&Nn(e,c):typeof c=="number"&&Nn(e,""+c):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(zn.hasOwnProperty(a)?c!=null&&a==="onScroll"&&le("scroll",e):c!=null&&is(e,a,c,s))}switch(r){case"input":no(e),il(e,n,!1);break;case"textarea":no(e),sl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+er(n.value));break;case"select":e.multiple=!!n.multiple,a=n.value,a!=null?_r(e,!!n.multiple,a,!1):n.defaultValue!=null&&_r(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Do)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)vu(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(M(166));if(r=pr(Bn.current),pr(kt.current),fo(t)){if(n=t.stateNode,r=t.memoizedProps,n[vt]=t,(a=n.nodeValue!==r)&&(e=Ze,e!==null))switch(e.tag){case 3:po(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&po(n.nodeValue,r,(e.mode&1)!==0)}a&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[vt]=t,t.stateNode=n}return Fe(t),null;case 13:if(ce(ge),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&qe!==null&&t.mode&1&&!(t.flags&128))_d(),Gr(),t.flags|=98560,a=!1;else if(a=fo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!a)throw Error(M(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(M(317));a[vt]=t}else Gr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),a=!1}else pt!==null&&(Qa(pt),pt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||ge.current&1?Ce===0&&(Ce=3):Ds())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return Qr(),Aa(e,t),e===null&&In(t.stateNode.containerInfo),Fe(t),null;case 10:return Ss(t.type._context),Fe(t),null;case 17:return Ve(t.type)&&Uo(),Fe(t),null;case 19:if(ce(ge),a=t.memoizedState,a===null)return Fe(t),null;if(n=(t.flags&128)!==0,s=a.rendering,s===null)if(n)un(a,!1);else{if(Ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ko(e),s!==null){for(t.flags|=128,un(a,!1),n=s.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)a=r,e=n,a.flags&=14680066,s=a.alternate,s===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=s.childLanes,a.lanes=s.lanes,a.child=s.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=s.memoizedProps,a.memoizedState=s.memoizedState,a.updateQueue=s.updateQueue,a.type=s.type,e=s.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ae(ge,ge.current&1|2),t.child}e=e.sibling}a.tail!==null&&we()>Xr&&(t.flags|=128,n=!0,un(a,!1),t.lanes=4194304)}else{if(!n)if(e=Ko(s),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),un(a,!0),a.tail===null&&a.tailMode==="hidden"&&!s.alternate&&!de)return Fe(t),null}else 2*we()-a.renderingStartTime>Xr&&r!==1073741824&&(t.flags|=128,n=!0,un(a,!1),t.lanes=4194304);a.isBackwards?(s.sibling=t.child,t.child=s):(r=a.last,r!==null?r.sibling=s:t.child=s,a.last=s)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=we(),t.sibling=null,r=ge.current,ae(ge,n?r&1|2:r&1),t):(Fe(t),null);case 22:case 23:return As(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?Je&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(M(156,t.tag))}function hg(e,t){switch(vs(t),t.tag){case 1:return Ve(t.type)&&Uo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qr(),ce(Ge),ce(Re),Ps(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ns(t),null;case 13:if(ce(ge),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(M(340));Gr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(ge),null;case 4:return Qr(),null;case 10:return Ss(t.type._context),null;case 22:case 23:return As(),null;case 24:return null;default:return null}}var xo=!1,Ie=!1,yg=typeof WeakSet=="function"?WeakSet:Set,W=null;function Rr(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ye(e,t,n)}else r.current=null}function Da(e,t,r){try{r()}catch(n){ye(e,t,n)}}var Xl=!1;function bg(e,t){if(Sa=_o,e=Cd(),ys(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,a=n.focusNode;n=n.focusOffset;try{r.nodeType,a.nodeType}catch{r=null;break e}var s=0,l=-1,c=-1,d=0,f=0,g=e,p=null;t:for(;;){for(var k;g!==r||i!==0&&g.nodeType!==3||(l=s+i),g!==a||n!==0&&g.nodeType!==3||(c=s+n),g.nodeType===3&&(s+=g.nodeValue.length),(k=g.firstChild)!==null;)p=g,g=k;for(;;){if(g===e)break t;if(p===r&&++d===i&&(l=s),p===a&&++f===n&&(c=s),(k=g.nextSibling)!==null)break;g=p,p=g.parentNode}g=k}r=l===-1||c===-1?null:{start:l,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ca={focusedElem:e,selectionRange:r},_o=!1,W=t;W!==null;)if(t=W,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,W=e;else for(;W!==null;){t=W;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var j=w.memoizedProps,x=w.memoizedState,m=t.stateNode,u=m.getSnapshotBeforeUpdate(t.elementType===t.type?j:dt(t.type,j),x);m.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(M(163))}}catch(C){ye(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,W=e;break}W=t.return}return w=Xl,Xl=!1,w}function Sn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&Da(t,r,a)}i=i.next}while(i!==n)}}function xi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function Ua(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function wu(e){var t=e.alternate;t!==null&&(e.alternate=null,wu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[vt],delete t[Wn],delete t[Na],delete t[tg],delete t[rg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function ku(e){return e.tag===5||e.tag===3||e.tag===4}function Jl(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||ku(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Oa(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=Do));else if(n!==4&&(e=e.child,e!==null))for(Oa(e,t,r),e=e.sibling;e!==null;)Oa(e,t,r),e=e.sibling}function Ha(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(Ha(e,t,r),e=e.sibling;e!==null;)Ha(e,t,r),e=e.sibling}var Pe=null,ut=!1;function It(e,t,r){for(r=r.child;r!==null;)ju(e,t,r),r=r.sibling}function ju(e,t,r){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(li,r)}catch{}switch(r.tag){case 5:Ie||Rr(r,t);case 6:var n=Pe,i=ut;Pe=null,It(e,t,r),Pe=n,ut=i,Pe!==null&&(ut?(e=Pe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Pe.removeChild(r.stateNode));break;case 18:Pe!==null&&(ut?(e=Pe,r=r.stateNode,e.nodeType===8?Hi(e.parentNode,r):e.nodeType===1&&Hi(e,r),Mn(e)):Hi(Pe,r.stateNode));break;case 4:n=Pe,i=ut,Pe=r.stateNode.containerInfo,ut=!0,It(e,t,r),Pe=n,ut=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var a=i,s=a.destroy;a=a.tag,s!==void 0&&(a&2||a&4)&&Da(r,t,s),i=i.next}while(i!==n)}It(e,t,r);break;case 1:if(!Ie&&(Rr(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(l){ye(r,t,l)}It(e,t,r);break;case 21:It(e,t,r);break;case 22:r.mode&1?(Ie=(n=Ie)||r.memoizedState!==null,It(e,t,r),Ie=n):It(e,t,r);break;default:It(e,t,r)}}function ql(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new yg),t.forEach(function(n){var i=Ng.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function ct(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var a=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:Pe=l.stateNode,ut=!1;break e;case 3:Pe=l.stateNode.containerInfo,ut=!0;break e;case 4:Pe=l.stateNode.containerInfo,ut=!0;break e}l=l.return}if(Pe===null)throw Error(M(160));ju(a,s,i),Pe=null,ut=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(d){ye(i,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Su(t,e),t=t.sibling}function Su(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ct(t,e),yt(e),n&4){try{Sn(3,e,e.return),xi(3,e)}catch(j){ye(e,e.return,j)}try{Sn(5,e,e.return)}catch(j){ye(e,e.return,j)}}break;case 1:ct(t,e),yt(e),n&512&&r!==null&&Rr(r,r.return);break;case 5:if(ct(t,e),yt(e),n&512&&r!==null&&Rr(r,r.return),e.flags&32){var i=e.stateNode;try{Nn(i,"")}catch(j){ye(e,e.return,j)}}if(n&4&&(i=e.stateNode,i!=null)){var a=e.memoizedProps,s=r!==null?r.memoizedProps:a,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&Gc(i,a),ga(l,s);var d=ga(l,a);for(s=0;s<c.length;s+=2){var f=c[s],g=c[s+1];f==="style"?Jc(i,g):f==="dangerouslySetInnerHTML"?Kc(i,g):f==="children"?Nn(i,g):is(i,f,g,d)}switch(l){case"input":ca(i,a);break;case"textarea":Vc(i,a);break;case"select":var p=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!a.multiple;var k=a.value;k!=null?_r(i,!!a.multiple,k,!1):p!==!!a.multiple&&(a.defaultValue!=null?_r(i,!!a.multiple,a.defaultValue,!0):_r(i,!!a.multiple,a.multiple?[]:"",!1))}i[Wn]=a}catch(j){ye(e,e.return,j)}}break;case 6:if(ct(t,e),yt(e),n&4){if(e.stateNode===null)throw Error(M(162));i=e.stateNode,a=e.memoizedProps;try{i.nodeValue=a}catch(j){ye(e,e.return,j)}}break;case 3:if(ct(t,e),yt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Mn(t.containerInfo)}catch(j){ye(e,e.return,j)}break;case 4:ct(t,e),yt(e);break;case 13:ct(t,e),yt(e),i=e.child,i.flags&8192&&(a=i.memoizedState!==null,i.stateNode.isHidden=a,!a||i.alternate!==null&&i.alternate.memoizedState!==null||(_s=we())),n&4&&ql(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(Ie=(d=Ie)||f,ct(t,e),Ie=d):ct(t,e),yt(e),n&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(W=e,f=e.child;f!==null;){for(g=W=f;W!==null;){switch(p=W,k=p.child,p.tag){case 0:case 11:case 14:case 15:Sn(4,p,p.return);break;case 1:Rr(p,p.return);var w=p.stateNode;if(typeof w.componentWillUnmount=="function"){n=p,r=p.return;try{t=n,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(j){ye(n,r,j)}}break;case 5:Rr(p,p.return);break;case 22:if(p.memoizedState!==null){ec(g);continue}}k!==null?(k.return=p,W=k):ec(g)}f=f.sibling}e:for(f=null,g=e;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,d?(a=i.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=g.stateNode,c=g.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=Xc("display",s))}catch(j){ye(e,e.return,j)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(j){ye(e,e.return,j)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:ct(t,e),yt(e),n&4&&ql(e);break;case 21:break;default:ct(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(ku(r)){var n=r;break e}r=r.return}throw Error(M(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(Nn(i,""),n.flags&=-33);var a=Jl(e);Ha(e,a,i);break;case 3:case 4:var s=n.stateNode.containerInfo,l=Jl(e);Oa(e,l,s);break;default:throw Error(M(161))}}catch(c){ye(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function vg(e,t,r){W=e,Cu(e)}function Cu(e,t,r){for(var n=(e.mode&1)!==0;W!==null;){var i=W,a=i.child;if(i.tag===22&&n){var s=i.memoizedState!==null||xo;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||Ie;l=xo;var d=Ie;if(xo=s,(Ie=c)&&!d)for(W=i;W!==null;)s=W,c=s.child,s.tag===22&&s.memoizedState!==null?tc(i):c!==null?(c.return=s,W=c):tc(i);for(;a!==null;)W=a,Cu(a),a=a.sibling;W=i,xo=l,Ie=d}Zl(e)}else i.subtreeFlags&8772&&a!==null?(a.return=i,W=a):Zl(e)}}function Zl(e){for(;W!==null;){var t=W;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ie||xi(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ie)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:dt(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Wl(t,a,n);break;case 3:var s=t.updateQueue;if(s!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Wl(t,s,r)}break;case 5:var l=t.stateNode;if(r===null&&t.flags&4){r=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Mn(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(M(163))}Ie||t.flags&512&&Ua(t)}catch(p){ye(t,t.return,p)}}if(t===e){W=null;break}if(r=t.sibling,r!==null){r.return=t.return,W=r;break}W=t.return}}function ec(e){for(;W!==null;){var t=W;if(t===e){W=null;break}var r=t.sibling;if(r!==null){r.return=t.return,W=r;break}W=t.return}}function tc(e){for(;W!==null;){var t=W;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{xi(4,t)}catch(c){ye(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(c){ye(t,i,c)}}var a=t.return;try{Ua(t)}catch(c){ye(t,a,c)}break;case 5:var s=t.return;try{Ua(t)}catch(c){ye(t,s,c)}}}catch(c){ye(t,t.return,c)}if(t===e){W=null;break}var l=t.sibling;if(l!==null){l.return=t.return,W=l;break}W=t.return}}var wg=Math.ceil,qo=Lt.ReactCurrentDispatcher,Rs=Lt.ReactCurrentOwner,at=Lt.ReactCurrentBatchConfig,Z=0,Ne=null,ke=null,Ee=0,Je=0,Wr=nr(0),Ce=0,On=null,yr=0,hi=0,Ws=0,Cn=null,He=null,_s=0,Xr=1/0,St=null,Zo=!1,Ya=null,Xt=null,ho=!1,Ot=null,ei=0,$n=0,Ga=null,Eo=-1,To=0;function Ae(){return Z&6?we():Eo!==-1?Eo:Eo=we()}function Jt(e){return e.mode&1?Z&2&&Ee!==0?Ee&-Ee:og.transition!==null?(To===0&&(To=cd()),To):(e=te,e!==0||(e=window.event,e=e===void 0?16:xd(e.type)),e):1}function mt(e,t,r,n){if(50<$n)throw $n=0,Ga=null,Error(M(185));Qn(e,r,n),(!(Z&2)||e!==Ne)&&(e===Ne&&(!(Z&2)&&(hi|=r),Ce===4&&Dt(e,Ee)),Qe(e,n),r===1&&Z===0&&!(t.mode&1)&&(Xr=we()+500,fi&&or()))}function Qe(e,t){var r=e.callbackNode;nf(e,t);var n=Wo(e,e===Ne?Ee:0);if(n===0)r!==null&&dl(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&dl(r),t===1)e.tag===0?ng(rc.bind(null,e)):Id(rc.bind(null,e)),Zf(function(){!(Z&6)&&or()}),r=null;else{switch(dd(n)){case 1:r=ds;break;case 4:r=sd;break;case 16:r=Ro;break;case 536870912:r=ld;break;default:r=Ro}r=Fu(r,$u.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function $u(e,t){if(Eo=-1,To=0,Z&6)throw Error(M(327));var r=e.callbackNode;if(Or()&&e.callbackNode!==r)return null;var n=Wo(e,e===Ne?Ee:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=ti(e,n);else{t=n;var i=Z;Z|=2;var a=Nu();(Ne!==e||Ee!==t)&&(St=null,Xr=we()+500,fr(e,t));do try{Sg();break}catch(l){zu(e,l)}while(!0);js(),qo.current=a,Z=i,ke!==null?t=0:(Ne=null,Ee=0,t=Ce)}if(t!==0){if(t===2&&(i=ba(e),i!==0&&(n=i,t=Va(e,i))),t===1)throw r=On,fr(e,0),Dt(e,n),Qe(e,we()),r;if(t===6)Dt(e,n);else{if(i=e.current.alternate,!(n&30)&&!kg(i)&&(t=ti(e,n),t===2&&(a=ba(e),a!==0&&(n=a,t=Va(e,a))),t===1))throw r=On,fr(e,0),Dt(e,n),Qe(e,we()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(M(345));case 2:cr(e,He,St);break;case 3:if(Dt(e,n),(n&130023424)===n&&(t=_s+500-we(),10<t)){if(Wo(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Ae(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=za(cr.bind(null,e,He,St),t);break}cr(e,He,St);break;case 4:if(Dt(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var s=31-gt(n);a=1<<s,s=t[s],s>i&&(i=s),n&=~a}if(n=i,n=we()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*wg(n/1960))-n,10<n){e.timeoutHandle=za(cr.bind(null,e,He,St),n);break}cr(e,He,St);break;case 5:cr(e,He,St);break;default:throw Error(M(329))}}}return Qe(e,we()),e.callbackNode===r?$u.bind(null,e):null}function Va(e,t){var r=Cn;return e.current.memoizedState.isDehydrated&&(fr(e,t).flags|=256),e=ti(e,t),e!==2&&(t=He,He=r,t!==null&&Qa(t)),e}function Qa(e){He===null?He=e:He.push.apply(He,e)}function kg(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],a=i.getSnapshot;i=i.value;try{if(!xt(a(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dt(e,t){for(t&=~Ws,t&=~hi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-gt(t),n=1<<r;e[r]=-1,t&=~n}}function rc(e){if(Z&6)throw Error(M(327));Or();var t=Wo(e,0);if(!(t&1))return Qe(e,we()),null;var r=ti(e,t);if(e.tag!==0&&r===2){var n=ba(e);n!==0&&(t=n,r=Va(e,n))}if(r===1)throw r=On,fr(e,0),Dt(e,t),Qe(e,we()),r;if(r===6)throw Error(M(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,cr(e,He,St),Qe(e,we()),null}function Bs(e,t){var r=Z;Z|=1;try{return e(t)}finally{Z=r,Z===0&&(Xr=we()+500,fi&&or())}}function br(e){Ot!==null&&Ot.tag===0&&!(Z&6)&&Or();var t=Z;Z|=1;var r=at.transition,n=te;try{if(at.transition=null,te=1,e)return e()}finally{te=n,at.transition=r,Z=t,!(Z&6)&&or()}}function As(){Je=Wr.current,ce(Wr)}function fr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,qf(r)),ke!==null)for(r=ke.return;r!==null;){var n=r;switch(vs(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Uo();break;case 3:Qr(),ce(Ge),ce(Re),Ps();break;case 5:Ns(n);break;case 4:Qr();break;case 13:ce(ge);break;case 19:ce(ge);break;case 10:Ss(n.type._context);break;case 22:case 23:As()}r=r.return}if(Ne=e,ke=e=qt(e.current,null),Ee=Je=t,Ce=0,On=null,Ws=hi=yr=0,He=Cn=null,ur!==null){for(t=0;t<ur.length;t++)if(r=ur[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,a=r.pending;if(a!==null){var s=a.next;a.next=i,n.next=s}r.pending=n}ur=null}return e}function zu(e,t){do{var r=ke;try{if(js(),zo.current=Jo,Xo){for(var n=me.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Xo=!1}if(hr=0,ze=Se=me=null,jn=!1,An=0,Rs.current=null,r===null||r.return===null){Ce=1,On=t,ke=null;break}e:{var a=e,s=r.return,l=r,c=t;if(t=Ee,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=Ol(s);if(k!==null){k.flags&=-257,Hl(k,s,l,a,t),k.mode&1&&Ul(a,d,t),t=k,c=d;var w=t.updateQueue;if(w===null){var j=new Set;j.add(c),t.updateQueue=j}else w.add(c);break e}else{if(!(t&1)){Ul(a,d,t),Ds();break e}c=Error(M(426))}}else if(de&&l.mode&1){var x=Ol(s);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Hl(x,s,l,a,t),ws(Kr(c,l));break e}}a=c=Kr(c,l),Ce!==4&&(Ce=2),Cn===null?Cn=[a]:Cn.push(a),a=s;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var m=du(a,c,t);Rl(a,m);break e;case 1:l=c;var u=a.type,h=a.stateNode;if(!(a.flags&128)&&(typeof u.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Xt===null||!Xt.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var C=uu(a,l,t);Rl(a,C);break e}}a=a.return}while(a!==null)}Eu(r)}catch($){t=$,ke===r&&r!==null&&(ke=r=r.return);continue}break}while(!0)}function Nu(){var e=qo.current;return qo.current=Jo,e===null?Jo:e}function Ds(){(Ce===0||Ce===3||Ce===2)&&(Ce=4),Ne===null||!(yr&268435455)&&!(hi&268435455)||Dt(Ne,Ee)}function ti(e,t){var r=Z;Z|=2;var n=Nu();(Ne!==e||Ee!==t)&&(St=null,fr(e,t));do try{jg();break}catch(i){zu(e,i)}while(!0);if(js(),Z=r,qo.current=n,ke!==null)throw Error(M(261));return Ne=null,Ee=0,Ce}function jg(){for(;ke!==null;)Pu(ke)}function Sg(){for(;ke!==null&&!Qp();)Pu(ke)}function Pu(e){var t=Mu(e.alternate,e,Je);e.memoizedProps=e.pendingProps,t===null?Eu(e):ke=t,Rs.current=null}function Eu(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=hg(r,t),r!==null){r.flags&=32767,ke=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ce=6,ke=null;return}}else if(r=xg(r,t,Je),r!==null){ke=r;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);Ce===0&&(Ce=5)}function cr(e,t,r){var n=te,i=at.transition;try{at.transition=null,te=1,Cg(e,t,r,n)}finally{at.transition=i,te=n}return null}function Cg(e,t,r,n){do Or();while(Ot!==null);if(Z&6)throw Error(M(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(M(177));e.callbackNode=null,e.callbackPriority=0;var a=r.lanes|r.childLanes;if(of(e,a),e===Ne&&(ke=Ne=null,Ee=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ho||(ho=!0,Fu(Ro,function(){return Or(),null})),a=(r.flags&15990)!==0,r.subtreeFlags&15990||a){a=at.transition,at.transition=null;var s=te;te=1;var l=Z;Z|=4,Rs.current=null,bg(e,r),Su(r,e),Yf(Ca),_o=!!Sa,Ca=Sa=null,e.current=r,vg(r),Kp(),Z=l,te=s,at.transition=a}else e.current=r;if(ho&&(ho=!1,Ot=e,ei=i),a=e.pendingLanes,a===0&&(Xt=null),qp(r.stateNode),Qe(e,we()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(Zo)throw Zo=!1,e=Ya,Ya=null,e;return ei&1&&e.tag!==0&&Or(),a=e.pendingLanes,a&1?e===Ga?$n++:($n=0,Ga=e):$n=0,or(),null}function Or(){if(Ot!==null){var e=dd(ei),t=at.transition,r=te;try{if(at.transition=null,te=16>e?16:e,Ot===null)var n=!1;else{if(e=Ot,Ot=null,ei=0,Z&6)throw Error(M(331));var i=Z;for(Z|=4,W=e.current;W!==null;){var a=W,s=a.child;if(W.flags&16){var l=a.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(W=d;W!==null;){var f=W;switch(f.tag){case 0:case 11:case 15:Sn(8,f,a)}var g=f.child;if(g!==null)g.return=f,W=g;else for(;W!==null;){f=W;var p=f.sibling,k=f.return;if(wu(f),f===d){W=null;break}if(p!==null){p.return=k,W=p;break}W=k}}}var w=a.alternate;if(w!==null){var j=w.child;if(j!==null){w.child=null;do{var x=j.sibling;j.sibling=null,j=x}while(j!==null)}}W=a}}if(a.subtreeFlags&2064&&s!==null)s.return=a,W=s;else e:for(;W!==null;){if(a=W,a.flags&2048)switch(a.tag){case 0:case 11:case 15:Sn(9,a,a.return)}var m=a.sibling;if(m!==null){m.return=a.return,W=m;break e}W=a.return}}var u=e.current;for(W=u;W!==null;){s=W;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,W=h;else e:for(s=u;W!==null;){if(l=W,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:xi(9,l)}}catch($){ye(l,l.return,$)}if(l===s){W=null;break e}var C=l.sibling;if(C!==null){C.return=l.return,W=C;break e}W=l.return}}if(Z=i,or(),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(li,e)}catch{}n=!0}return n}finally{te=r,at.transition=t}}return!1}function nc(e,t,r){t=Kr(r,t),t=du(e,t,1),e=Kt(e,t,1),t=Ae(),e!==null&&(Qn(e,1,t),Qe(e,t))}function ye(e,t,r){if(e.tag===3)nc(e,e,r);else for(;t!==null;){if(t.tag===3){nc(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Xt===null||!Xt.has(n))){e=Kr(r,e),e=uu(t,e,1),t=Kt(t,e,1),e=Ae(),t!==null&&(Qn(t,1,e),Qe(t,e));break}}t=t.return}}function $g(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ae(),e.pingedLanes|=e.suspendedLanes&r,Ne===e&&(Ee&r)===r&&(Ce===4||Ce===3&&(Ee&130023424)===Ee&&500>we()-_s?fr(e,0):Ws|=r),Qe(e,t)}function Tu(e,t){t===0&&(e.mode&1?(t=ao,ao<<=1,!(ao&130023424)&&(ao=4194304)):t=1);var r=Ae();e=Tt(e,t),e!==null&&(Qn(e,t,r),Qe(e,r))}function zg(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Tu(e,r)}function Ng(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(M(314))}n!==null&&n.delete(t),Tu(e,r)}var Mu;Mu=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ge.current)Ye=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Ye=!1,mg(e,t,r);Ye=!!(e.flags&131072)}else Ye=!1,de&&t.flags&1048576&&Rd(t,Yo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Po(e,t),e=t.pendingProps;var i=Yr(t,Re.current);Ur(t,r),i=Ts(null,t,n,e,i,r);var a=Ms();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ve(n)?(a=!0,Oo(t)):a=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,$s(t),i.updater=mi,t.stateNode=i,i._reactInternals=t,La(t,n,e,r),t=Wa(null,t,n,!0,a,r)):(t.tag=0,de&&a&&bs(t),We(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Po(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Eg(n),e=dt(n,e),i){case 0:t=Ra(null,t,n,e,r);break e;case 1:t=Vl(null,t,n,e,r);break e;case 11:t=Yl(null,t,n,e,r);break e;case 14:t=Gl(null,t,n,dt(n.type,e),r);break e}throw Error(M(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:dt(n,i),Ra(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:dt(n,i),Vl(e,t,n,i,r);case 3:e:{if(mu(t),e===null)throw Error(M(387));n=t.pendingProps,a=t.memoizedState,i=a.element,Ud(e,t),Qo(t,n,null,r);var s=t.memoizedState;if(n=s.element,a.isDehydrated)if(a={element:n,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){i=Kr(Error(M(423)),t),t=Ql(e,t,n,r,i);break e}else if(n!==i){i=Kr(Error(M(424)),t),t=Ql(e,t,n,r,i);break e}else for(qe=Qt(t.stateNode.containerInfo.firstChild),Ze=t,de=!0,pt=null,r=Ad(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Gr(),n===i){t=Mt(e,t,r);break e}We(e,t,n,r)}t=t.child}return t;case 5:return Od(t),e===null&&Ta(t),n=t.type,i=t.pendingProps,a=e!==null?e.memoizedProps:null,s=i.children,$a(n,i)?s=null:a!==null&&$a(n,a)&&(t.flags|=32),gu(e,t),We(e,t,s,r),t.child;case 6:return e===null&&Ta(t),null;case 13:return xu(e,t,r);case 4:return zs(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Vr(t,null,n,r):We(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:dt(n,i),Yl(e,t,n,i,r);case 7:return We(e,t,t.pendingProps,r),t.child;case 8:return We(e,t,t.pendingProps.children,r),t.child;case 12:return We(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,a=t.memoizedProps,s=i.value,ae(Go,n._currentValue),n._currentValue=s,a!==null)if(xt(a.value,s)){if(a.children===i.children&&!Ge.current){t=Mt(e,t,r);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var c=l.firstContext;c!==null;){if(c.context===n){if(a.tag===1){c=Nt(-1,r&-r),c.tag=2;var d=a.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}a.lanes|=r,c=a.alternate,c!==null&&(c.lanes|=r),Ma(a.return,r,t),l.lanes|=r;break}c=c.next}}else if(a.tag===10)s=a.type===t.type?null:a.child;else if(a.tag===18){if(s=a.return,s===null)throw Error(M(341));s.lanes|=r,l=s.alternate,l!==null&&(l.lanes|=r),Ma(s,r,t),s=a.sibling}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}We(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Ur(t,r),i=st(i),n=n(i),t.flags|=1,We(e,t,n,r),t.child;case 14:return n=t.type,i=dt(n,t.pendingProps),i=dt(n.type,i),Gl(e,t,n,i,r);case 15:return pu(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:dt(n,i),Po(e,t),t.tag=1,Ve(n)?(e=!0,Oo(t)):e=!1,Ur(t,r),cu(t,n,i),La(t,n,i,r),Wa(null,t,n,!0,e,r);case 19:return hu(e,t,r);case 22:return fu(e,t,r)}throw Error(M(156,t.tag))};function Fu(e,t){return ad(e,t)}function Pg(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,r,n){return new Pg(e,t,r,n)}function Us(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Eg(e){if(typeof e=="function")return Us(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ss)return 11;if(e===ls)return 14}return 2}function qt(e,t){var r=e.alternate;return r===null?(r=it(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Mo(e,t,r,n,i,a){var s=2;if(n=e,typeof e=="function")Us(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case zr:return gr(r.children,i,a,t);case as:s=8,i|=8;break;case oa:return e=it(12,r,t,i|2),e.elementType=oa,e.lanes=a,e;case ia:return e=it(13,r,t,i),e.elementType=ia,e.lanes=a,e;case aa:return e=it(19,r,t,i),e.elementType=aa,e.lanes=a,e;case Oc:return yi(r,i,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Dc:s=10;break e;case Uc:s=9;break e;case ss:s=11;break e;case ls:s=14;break e;case _t:s=16,n=null;break e}throw Error(M(130,e==null?e:typeof e,""))}return t=it(s,r,t,i),t.elementType=e,t.type=n,t.lanes=a,t}function gr(e,t,r,n){return e=it(7,e,n,t),e.lanes=r,e}function yi(e,t,r,n){return e=it(22,e,n,t),e.elementType=Oc,e.lanes=r,e.stateNode={isHidden:!1},e}function qi(e,t,r){return e=it(6,e,null,t),e.lanes=r,e}function Zi(e,t,r){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Tg(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fi(0),this.expirationTimes=Fi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fi(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Os(e,t,r,n,i,a,s,l,c){return e=new Tg(e,t,r,l,c),t===1?(t=1,a===!0&&(t|=8)):t=0,a=it(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},$s(a),e}function Mg(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$r,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Lu(e){if(!e)return tr;e=e._reactInternals;e:{if(wr(e)!==e||e.tag!==1)throw Error(M(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ve(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(M(171))}if(e.tag===1){var r=e.type;if(Ve(r))return Ld(e,r,t)}return t}function Iu(e,t,r,n,i,a,s,l,c){return e=Os(r,n,!0,e,i,a,s,l,c),e.context=Lu(null),r=e.current,n=Ae(),i=Jt(r),a=Nt(n,i),a.callback=t??null,Kt(r,a,i),e.current.lanes=i,Qn(e,i,n),Qe(e,n),e}function bi(e,t,r,n){var i=t.current,a=Ae(),s=Jt(i);return r=Lu(r),t.context===null?t.context=r:t.pendingContext=r,t=Nt(a,s),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Kt(i,t,s),e!==null&&(mt(e,i,s,a),$o(e,i,s)),s}function ri(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function oc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Hs(e,t){oc(e,t),(e=e.alternate)&&oc(e,t)}function Fg(){return null}var Ru=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ys(e){this._internalRoot=e}vi.prototype.render=Ys.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(M(409));bi(e,t,null,null)};vi.prototype.unmount=Ys.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;br(function(){bi(null,e,null,null)}),t[Et]=null}};function vi(e){this._internalRoot=e}vi.prototype.unstable_scheduleHydration=function(e){if(e){var t=fd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<At.length&&t!==0&&t<At[r].priority;r++);At.splice(r,0,e),r===0&&md(e)}};function Gs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ic(){}function Lg(e,t,r,n,i){if(i){if(typeof n=="function"){var a=n;n=function(){var d=ri(s);a.call(d)}}var s=Iu(t,n,e,0,null,!1,!1,"",ic);return e._reactRootContainer=s,e[Et]=s.current,In(e.nodeType===8?e.parentNode:e),br(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var l=n;n=function(){var d=ri(c);l.call(d)}}var c=Os(e,0,!1,null,null,!1,!1,"",ic);return e._reactRootContainer=c,e[Et]=c.current,In(e.nodeType===8?e.parentNode:e),br(function(){bi(t,c,r,n)}),c}function ki(e,t,r,n,i){var a=r._reactRootContainer;if(a){var s=a;if(typeof i=="function"){var l=i;i=function(){var c=ri(s);l.call(c)}}bi(t,s,e,i)}else s=Lg(r,t,e,i,n);return ri(s)}ud=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=mn(t.pendingLanes);r!==0&&(us(t,r|1),Qe(t,we()),!(Z&6)&&(Xr=we()+500,or()))}break;case 13:br(function(){var n=Tt(e,1);if(n!==null){var i=Ae();mt(n,e,1,i)}}),Hs(e,1)}};ps=function(e){if(e.tag===13){var t=Tt(e,134217728);if(t!==null){var r=Ae();mt(t,e,134217728,r)}Hs(e,134217728)}};pd=function(e){if(e.tag===13){var t=Jt(e),r=Tt(e,t);if(r!==null){var n=Ae();mt(r,e,t,n)}Hs(e,t)}};fd=function(){return te};gd=function(e,t){var r=te;try{return te=e,t()}finally{te=r}};xa=function(e,t,r){switch(t){case"input":if(ca(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=pi(n);if(!i)throw Error(M(90));Yc(n),ca(n,i)}}}break;case"textarea":Vc(e,r);break;case"select":t=r.value,t!=null&&_r(e,!!r.multiple,t,!1)}};ed=Bs;td=br;var Ig={usingClientEntryPoint:!1,Events:[Xn,Tr,pi,qc,Zc,Bs]},pn={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Rg={bundleType:pn.bundleType,version:pn.version,rendererPackageName:pn.rendererPackageName,rendererConfig:pn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Lt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=od(e),e===null?null:e.stateNode},findFiberByHostInstance:pn.findFiberByHostInstance||Fg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{li=yo.inject(Rg),wt=yo}catch{}}tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ig;tt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gs(t))throw Error(M(200));return Mg(e,t,null,r)};tt.createRoot=function(e,t){if(!Gs(e))throw Error(M(299));var r=!1,n="",i=Ru;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Os(e,1,!1,null,null,r,!1,n,i),e[Et]=t.current,In(e.nodeType===8?e.parentNode:e),new Ys(t)};tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(M(188)):(e=Object.keys(e).join(","),Error(M(268,e)));return e=od(t),e=e===null?null:e.stateNode,e};tt.flushSync=function(e){return br(e)};tt.hydrate=function(e,t,r){if(!wi(t))throw Error(M(200));return ki(null,e,t,!0,r)};tt.hydrateRoot=function(e,t,r){if(!Gs(e))throw Error(M(405));var n=r!=null&&r.hydratedSources||null,i=!1,a="",s=Ru;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(a=r.identifierPrefix),r.onRecoverableError!==void 0&&(s=r.onRecoverableError)),t=Iu(t,null,e,1,r??null,i,!1,a,s),e[Et]=t.current,In(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new vi(t)};tt.render=function(e,t,r){if(!wi(t))throw Error(M(200));return ki(null,e,t,!1,r)};tt.unmountComponentAtNode=function(e){if(!wi(e))throw Error(M(40));return e._reactRootContainer?(br(function(){ki(null,null,e,!1,function(){e._reactRootContainer=null,e[Et]=null})}),!0):!1};tt.unstable_batchedUpdates=Bs;tt.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!wi(r))throw Error(M(200));if(e==null||e._reactInternals===void 0)throw Error(M(38));return ki(e,t,r,!1,n)};tt.version="18.3.1-next-f1338f8080-20240426";function Wu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wu)}catch(e){console.error(e)}}Wu(),Wc.exports=tt;var Wg=Wc.exports,ac=Wg;ra.createRoot=ac.createRoot,ra.hydrateRoot=ac.hydrateRoot;/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Hn(){return Hn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Hn.apply(this,arguments)}var Ht;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ht||(Ht={}));const sc="popstate";function _g(e){e===void 0&&(e={});function t(n,i){let{pathname:a,search:s,hash:l}=n.location;return Ka("",{pathname:a,search:s,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function r(n,i){return typeof i=="string"?i:ni(i)}return Ag(t,r,null,e)}function je(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Vs(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Bg(){return Math.random().toString(36).substr(2,8)}function lc(e,t){return{usr:e.state,key:e.key,idx:t}}function Ka(e,t,r,n){return r===void 0&&(r=null),Hn({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?en(t):t,{state:r,key:t&&t.key||n||Bg()})}function ni(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function en(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function Ag(e,t,r,n){n===void 0&&(n={});let{window:i=document.defaultView,v5Compat:a=!1}=n,s=i.history,l=Ht.Pop,c=null,d=f();d==null&&(d=0,s.replaceState(Hn({},s.state,{idx:d}),""));function f(){return(s.state||{idx:null}).idx}function g(){l=Ht.Pop;let x=f(),m=x==null?null:x-d;d=x,c&&c({action:l,location:j.location,delta:m})}function p(x,m){l=Ht.Push;let u=Ka(j.location,x,m);d=f()+1;let h=lc(u,d),C=j.createHref(u);try{s.pushState(h,"",C)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;i.location.assign(C)}a&&c&&c({action:l,location:j.location,delta:1})}function k(x,m){l=Ht.Replace;let u=Ka(j.location,x,m);d=f();let h=lc(u,d),C=j.createHref(u);s.replaceState(h,"",C),a&&c&&c({action:l,location:j.location,delta:0})}function w(x){let m=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof x=="string"?x:ni(x);return u=u.replace(/ $/,"%20"),je(m,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,m)}let j={get action(){return l},get location(){return e(i,s)},listen(x){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(sc,g),c=x,()=>{i.removeEventListener(sc,g),c=null}},createHref(x){return t(i,x)},createURL:w,encodeLocation(x){let m=w(x);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:p,replace:k,go(x){return s.go(x)}};return j}var cc;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(cc||(cc={}));function Dg(e,t,r){return r===void 0&&(r="/"),Ug(e,t,r)}function Ug(e,t,r,n){let i=typeof t=="string"?en(t):t,a=Qs(i.pathname||"/",r);if(a==null)return null;let s=_u(e);Og(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let d=t0(a);l=qg(s[c],d)}return l}function _u(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let i=(a,s,l)=>{let c={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:s,route:a};c.relativePath.startsWith("/")&&(je(c.relativePath.startsWith(n),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(n.length));let d=Zt([n,c.relativePath]),f=r.concat(c);a.children&&a.children.length>0&&(je(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),_u(a.children,t,f,d)),!(a.path==null&&!a.index)&&t.push({path:d,score:Xg(d,a.index),routesMeta:f})};return e.forEach((a,s)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))i(a,s);else for(let c of Bu(a.path))i(a,s,c)}),t}function Bu(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,i=r.endsWith("?"),a=r.replace(/\?$/,"");if(n.length===0)return i?[a,""]:[a];let s=Bu(n.join("/")),l=[];return l.push(...s.map(c=>c===""?a:[a,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function Og(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Jg(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const Hg=/^:[\w-]+$/,Yg=3,Gg=2,Vg=1,Qg=10,Kg=-2,dc=e=>e==="*";function Xg(e,t){let r=e.split("/"),n=r.length;return r.some(dc)&&(n+=Kg),t&&(n+=Gg),r.filter(i=>!dc(i)).reduce((i,a)=>i+(Hg.test(a)?Yg:a===""?Vg:Qg),n)}function Jg(e,t){return e.length===t.length&&e.slice(0,-1).every((n,i)=>n===t[i])?e[e.length-1]-t[t.length-1]:0}function qg(e,t,r){let{routesMeta:n}=e,i={},a="/",s=[];for(let l=0;l<n.length;++l){let c=n[l],d=l===n.length-1,f=a==="/"?t:t.slice(a.length)||"/",g=Zg({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},f),p=c.route;if(!g)return null;Object.assign(i,g.params),s.push({params:i,pathname:Zt([a,g.pathname]),pathnameBase:a0(Zt([a,g.pathnameBase])),route:p}),g.pathnameBase!=="/"&&(a=Zt([a,g.pathnameBase]))}return s}function Zg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=e0(e.path,e.caseSensitive,e.end),i=t.match(r);if(!i)return null;let a=i[0],s=a.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:n.reduce((d,f,g)=>{let{paramName:p,isOptional:k}=f;if(p==="*"){let j=l[g]||"";s=a.slice(0,a.length-j.length).replace(/(.)\/+$/,"$1")}const w=l[g];return k&&!w?d[p]=void 0:d[p]=(w||"").replace(/%2F/g,"/"),d},{}),pathname:a,pathnameBase:s,pattern:e}}function e0(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),Vs(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(n.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),n]}function t0(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Vs(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qs(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}const r0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,n0=e=>r0.test(e);function o0(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:i=""}=typeof e=="string"?en(e):e,a;if(r)if(n0(r))a=r;else{if(r.includes("//")){let s=r;r=r.replace(/\/\/+/g,"/"),Vs(!1,"Pathnames cannot have embedded double slashes - normalizing "+(s+" -> "+r))}r.startsWith("/")?a=uc(r.substring(1),"/"):a=uc(r,t)}else a=t;return{pathname:a,search:s0(n),hash:l0(i)}}function uc(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?r.length>1&&r.pop():i!=="."&&r.push(i)}),r.length>1?r.join("/"):"/"}function ea(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function i0(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function Au(e,t){let r=i0(e);return t?r.map((n,i)=>i===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function Du(e,t,r,n){n===void 0&&(n=!1);let i;typeof e=="string"?i=en(e):(i=Hn({},e),je(!i.pathname||!i.pathname.includes("?"),ea("?","pathname","search",i)),je(!i.pathname||!i.pathname.includes("#"),ea("#","pathname","hash",i)),je(!i.search||!i.search.includes("#"),ea("#","search","hash",i)));let a=e===""||i.pathname==="",s=a?"/":i.pathname,l;if(s==null)l=r;else{let g=t.length-1;if(!n&&s.startsWith("..")){let p=s.split("/");for(;p[0]==="..";)p.shift(),g-=1;i.pathname=p.join("/")}l=g>=0?t[g]:"/"}let c=o0(i,l),d=s&&s!=="/"&&s.endsWith("/"),f=(a||s===".")&&r.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}const Zt=e=>e.join("/").replace(/\/\/+/g,"/"),a0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),s0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,l0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function c0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Uu=["post","put","patch","delete"];new Set(Uu);const d0=["get",...Uu];new Set(d0);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yn(){return Yn=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Yn.apply(this,arguments)}const Ks=b.createContext(null),u0=b.createContext(null),kr=b.createContext(null),ji=b.createContext(null),ir=b.createContext({outlet:null,matches:[],isDataRoute:!1}),Ou=b.createContext(null);function p0(e,t){let{relative:r}=t===void 0?{}:t;qn()||je(!1);let{basename:n,navigator:i}=b.useContext(kr),{hash:a,pathname:s,search:l}=Yu(e,{relative:r}),c=s;return n!=="/"&&(c=s==="/"?n:Zt([n,s])),i.createHref({pathname:c,search:l,hash:a})}function qn(){return b.useContext(ji)!=null}function jr(){return qn()||je(!1),b.useContext(ji).location}function Hu(e){b.useContext(kr).static||b.useLayoutEffect(e)}function ht(){let{isDataRoute:e}=b.useContext(ir);return e?$0():f0()}function f0(){qn()||je(!1);let e=b.useContext(Ks),{basename:t,future:r,navigator:n}=b.useContext(kr),{matches:i}=b.useContext(ir),{pathname:a}=jr(),s=JSON.stringify(Au(i,r.v7_relativeSplatPath)),l=b.useRef(!1);return Hu(()=>{l.current=!0}),b.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){n.go(d);return}let g=Du(d,JSON.parse(s),a,f.relative==="path");e==null&&t!=="/"&&(g.pathname=g.pathname==="/"?t:Zt([t,g.pathname])),(f.replace?n.replace:n.push)(g,f.state,f)},[t,n,s,a,e])}function g0(){let{matches:e}=b.useContext(ir),t=e[e.length-1];return t?t.params:{}}function Yu(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=b.useContext(kr),{matches:i}=b.useContext(ir),{pathname:a}=jr(),s=JSON.stringify(Au(i,n.v7_relativeSplatPath));return b.useMemo(()=>Du(e,JSON.parse(s),a,r==="path"),[e,s,a,r])}function m0(e,t){return x0(e,t)}function x0(e,t,r,n){qn()||je(!1);let{navigator:i}=b.useContext(kr),{matches:a}=b.useContext(ir),s=a[a.length-1],l=s?s.params:{};s&&s.pathname;let c=s?s.pathnameBase:"/";s&&s.route;let d=jr(),f;if(t){var g;let x=typeof t=="string"?en(t):t;c==="/"||(g=x.pathname)!=null&&g.startsWith(c)||je(!1),f=x}else f=d;let p=f.pathname||"/",k=p;if(c!=="/"){let x=c.replace(/^\//,"").split("/");k="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let w=Dg(e,{pathname:k}),j=w0(w&&w.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Zt([c,i.encodeLocation?i.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:Zt([c,i.encodeLocation?i.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),a,r,n);return t&&j?b.createElement(ji.Provider,{value:{location:Yn({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:Ht.Pop}},j):j}function h0(){let e=C0(),t=c0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unexpected Application Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},t),r?b.createElement("pre",{style:i},r):null,null)}const y0=b.createElement(h0,null);class b0 extends b.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?b.createElement(ir.Provider,{value:this.props.routeContext},b.createElement(Ou.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function v0(e){let{routeContext:t,match:r,children:n}=e,i=b.useContext(Ks);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),b.createElement(ir.Provider,{value:t},n)}function w0(e,t,r,n){var i;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var a;if(!r)return null;if(r.errors)e=r.matches;else if((a=n)!=null&&a.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let s=e,l=(i=r)==null?void 0:i.errors;if(l!=null){let f=s.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);f>=0||je(!1),s=s.slice(0,Math.min(s.length,f+1))}let c=!1,d=-1;if(r&&n&&n.v7_partialHydration)for(let f=0;f<s.length;f++){let g=s[f];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=f),g.route.id){let{loaderData:p,errors:k}=r,w=g.route.loader&&p[g.route.id]===void 0&&(!k||k[g.route.id]===void 0);if(g.route.lazy||w){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((f,g,p)=>{let k,w=!1,j=null,x=null;r&&(k=l&&g.route.id?l[g.route.id]:void 0,j=g.route.errorElement||y0,c&&(d<0&&p===0?(z0("route-fallback"),w=!0,x=null):d===p&&(w=!0,x=g.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,p+1)),u=()=>{let h;return k?h=j:w?h=x:g.route.Component?h=b.createElement(g.route.Component,null):g.route.element?h=g.route.element:h=f,b.createElement(v0,{match:g,routeContext:{outlet:f,matches:m,isDataRoute:r!=null},children:h})};return r&&(g.route.ErrorBoundary||g.route.errorElement||p===0)?b.createElement(b0,{location:r.location,revalidation:r.revalidation,component:j,error:k,children:u(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):u()},null)}var Gu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gu||{}),Vu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Vu||{});function k0(e){let t=b.useContext(Ks);return t||je(!1),t}function j0(e){let t=b.useContext(u0);return t||je(!1),t}function S0(e){let t=b.useContext(ir);return t||je(!1),t}function Qu(e){let t=S0(),r=t.matches[t.matches.length-1];return r.route.id||je(!1),r.route.id}function C0(){var e;let t=b.useContext(Ou),r=j0(),n=Qu();return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function $0(){let{router:e}=k0(Gu.UseNavigateStable),t=Qu(Vu.UseNavigateStable),r=b.useRef(!1);return Hu(()=>{r.current=!0}),b.useCallback(function(i,a){a===void 0&&(a={}),r.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Yn({fromRouteId:t},a)))},[e,t])}const pc={};function z0(e,t,r){pc[e]||(pc[e]=!0)}function N0(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Le(e){je(!1)}function P0(e){let{basename:t="/",children:r=null,location:n,navigationType:i=Ht.Pop,navigator:a,static:s=!1,future:l}=e;qn()&&je(!1);let c=t.replace(/^\/*/,"/"),d=b.useMemo(()=>({basename:c,navigator:a,static:s,future:Yn({v7_relativeSplatPath:!1},l)}),[c,l,a,s]);typeof n=="string"&&(n=en(n));let{pathname:f="/",search:g="",hash:p="",state:k=null,key:w="default"}=n,j=b.useMemo(()=>{let x=Qs(f,c);return x==null?null:{location:{pathname:x,search:g,hash:p,state:k,key:w},navigationType:i}},[c,f,g,p,k,w,i]);return j==null?null:b.createElement(kr.Provider,{value:d},b.createElement(ji.Provider,{children:r,value:j}))}function E0(e){let{children:t,location:r}=e;return m0(Xa(t),r)}new Promise(()=>{});function Xa(e,t){t===void 0&&(t=[]);let r=[];return b.Children.forEach(e,(n,i)=>{if(!b.isValidElement(n))return;let a=[...t,i];if(n.type===b.Fragment){r.push.apply(r,Xa(n.props.children,a));return}n.type!==Le&&je(!1),!n.props.index||!n.props.children||je(!1);let s={id:n.props.id||a.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(s.children=Xa(n.props.children,a)),r.push(s)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ja(){return Ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Ja.apply(this,arguments)}function T0(e,t){if(e==null)return{};var r={},n=Object.keys(e),i,a;for(a=0;a<n.length;a++)i=n[a],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function M0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function F0(e,t){return e.button===0&&(!t||t==="_self")&&!M0(e)}function qa(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(i=>[r,i]):[[r,n]])},[]))}function L0(e,t){let r=qa(e);return t&&t.forEach((n,i)=>{r.has(i)||t.getAll(i).forEach(a=>{r.append(i,a)})}),r}const I0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],R0="6";try{window.__reactRouterVersion=R0}catch{}const W0="startTransition",fc=Cp[W0];function _0(e){let{basename:t,children:r,future:n,window:i}=e,a=b.useRef();a.current==null&&(a.current=_g({window:i,v5Compat:!0}));let s=a.current,[l,c]=b.useState({action:s.action,location:s.location}),{v7_startTransition:d}=n||{},f=b.useCallback(g=>{d&&fc?fc(()=>c(g)):c(g)},[c,d]);return b.useLayoutEffect(()=>s.listen(f),[s,f]),b.useEffect(()=>N0(n),[n]),b.createElement(P0,{basename:t,children:r,location:l.location,navigationType:l.action,navigator:s,future:n})}const B0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",A0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Be=b.forwardRef(function(t,r){let{onClick:n,relative:i,reloadDocument:a,replace:s,state:l,target:c,to:d,preventScrollReset:f,viewTransition:g}=t,p=T0(t,I0),{basename:k}=b.useContext(kr),w,j=!1;if(typeof d=="string"&&A0.test(d)&&(w=d,B0))try{let h=new URL(window.location.href),C=d.startsWith("//")?new URL(h.protocol+d):new URL(d),$=Qs(C.pathname,k);C.origin===h.origin&&$!=null?d=$+C.search+C.hash:j=!0}catch{}let x=p0(d,{relative:i}),m=D0(d,{replace:s,state:l,target:c,preventScrollReset:f,relative:i,viewTransition:g});function u(h){n&&n(h),h.defaultPrevented||m(h)}return b.createElement("a",Ja({},p,{href:w||x,onClick:j||a?n:u,ref:r,target:c}))});var gc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(gc||(gc={}));var mc;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(mc||(mc={}));function D0(e,t){let{target:r,replace:n,state:i,preventScrollReset:a,relative:s,viewTransition:l}=t===void 0?{}:t,c=ht(),d=jr(),f=Yu(e,{relative:s});return b.useCallback(g=>{if(F0(g,r)){g.preventDefault();let p=n!==void 0?n:ni(d)===ni(f);c(e,{replace:p,state:i,preventScrollReset:a,relative:s,viewTransition:l})}},[d,c,f,n,i,r,e,a,s,l])}function U0(e){let t=b.useRef(qa(e)),r=b.useRef(!1),n=jr(),i=b.useMemo(()=>L0(n.search,r.current?null:t.current),[n.search]),a=ht(),s=b.useCallback((l,c)=>{const d=qa(typeof l=="function"?l(i):l);r.current=!0,a("?"+d,c)},[a,i]);return[i,s]}const Ft="http://localhost:5050",Si=()=>{const e=localStorage.getItem("arke_token");return{"Content-Type":"application/json","ngrok-skip-browser-warning":"true","Cache-Control":"no-cache",...e?{Authorization:`Bearer ${e}`}:{}}},Ci=async e=>{const t=await e.text(),r=e.headers.get("content-type")||"";let n=null;if(t)if(r.includes("application/json"))try{n=JSON.parse(t)}catch{n={success:!1,message:"Invalid JSON from backend",raw:t}}else n={success:!1,message:t};return e.ok?n||{success:!1,message:"Empty response from backend"}:{...n&&typeof n=="object"?n:{},success:!1,status:!1,message:(n==null?void 0:n.message)||`Request failed (${e.status})`,httpStatus:e.status}},Xe=async e=>{try{const t=await fetch(`${Ft}${e}`,{method:"GET",headers:Si(),cache:"no-store"});return Ci(t)}catch(t){return console.error("GET error:",t),{success:!1,message:`Cannot connect to backend at ${Ft}.`}}},jt=async(e,t)=>{try{const r=await fetch(`${Ft}${e}`,{method:"POST",headers:Si(),body:JSON.stringify(t)});return Ci(r)}catch(r){return console.error("POST error:",r),{success:!1,message:`Cannot connect to backend at ${Ft}.`}}},O0=async(e,t)=>{try{const r=await fetch(`${Ft}${e}`,{method:"PUT",headers:Si(),body:JSON.stringify(t)});return Ci(r)}catch(r){return console.error("PUT error:",r),{success:!1,message:`Cannot connect to backend at ${Ft}.`}}},H0=async e=>{try{const t=await fetch(`${Ft}${e}`,{method:"DELETE",headers:Si()});return Ci(t)}catch(t){return console.error("DELETE error:",t),{success:!1,message:`Cannot connect to backend at ${Ft}.`}}},oe={getBanners:()=>Xe("/api/banner"),getCategories:()=>Xe("/api/get-all-Category"),getLatestProducts:()=>Xe("/api/latest-products"),getBestSellers:()=>Xe("/api/best-by-us"),getBlogs:()=>Xe("/api/blogs"),getBlogById:e=>Xe(`/api/blogs/${e}`),getAllProducts:()=>Xe("/api/get-all-product"),getProductById:e=>Xe(`/api/get-product/${e}`),getRelated:()=>Promise.resolve({data:[]}),getTypes:()=>Promise.resolve({data:[]}),getCart:()=>Xe("/api/viewCart"),addToCart:(e,t=1)=>jt("/api/addCart",{productId:String(e),quantity:Number(t)}),updateCartItem:(e,t)=>jt("/api/update-quantity",{productId:String(e),quantity:Number(t)}),removeFromCart:e=>jt("/api/removeFromCart",{productId:String(e),quantity:1}),clearCart:()=>Promise.resolve({success:!0}),getWishlist:()=>Xe("/api/view-wishlist"),addToWishlist:e=>jt("/api/add-to-wishlist",{productId:e}),removeWishlist:e=>jt("/api/remove-from-wishlist",{productId:e}),login:(e,t)=>jt("/api/login",{email:e,password:t}),register:e=>jt("/api/add-user",e),placeOrder:e=>jt("/api/place-order",e),getAnnouncements:()=>Xe("/api/announcements"),createAnnouncement:e=>jt("/api/announcements",e),updateAnnouncement:(e,t)=>O0(`/api/announcements/${e}`,t),deleteAnnouncement:e=>H0(`/api/announcements/${e}`),getGiftForHer:()=>Xe("/api/gifts/gift-for-her"),getGiftForHim:()=>Xe("/api/gifts/gift-for-him")},Ke=e=>{if(!e)return null;if(Array.isArray(e)){for(const r of e){if(!r)continue;const n=Ke(r);if(n)return n}return null}if(typeof e=="object"){for(const r of["url","src","path","images","image","categoryImage","thumbnail","imageUrl","img","photos","gallery","secure_url"])if(e[r])return Ke(e[r]);return null}const t=String(e).trim();return!t||t==="null"||t==="undefined"?null:t.startsWith("http://")||t.startsWith("https://")||t.startsWith("data:")?t:`${Ft}/${t.replace(/^\/+/,"")}`},Gn=(e,t=0)=>{if(!e)return null;for(const r of["images","image","imageUrl","img","photos","gallery"]){const n=e[r];if(Array.isArray(n)){const i=Ke(n[t]);if(i)return i}}if(t===0){for(const r of["image","imageUrl","img","thumbnail","photo","picture"])if(e[r]&&!Array.isArray(e[r])){const n=Ke(e[r]);if(n)return n}}return null},_e=(e,...t)=>{if(!e)return[];for(const r of[...t,"data","products","result","categories","category","Category","blogs","banners","items","list","cart"])if(Array.isArray(e[r])&&e[r].length>0)return e[r];return Array.isArray(e)?e:[]},Y0=e=>e?typeof e=="string"?e:String(e._id||e.id||e.categoryId||e.value||""):"",Xs=e=>Y0(e),oi=e=>(e==null?void 0:e.name)||(e==null?void 0:e.categoryName)||(e==null?void 0:e.title)||"Category",Ku=e=>Ke((e==null?void 0:e.image)||(e==null?void 0:e.categoryImage)||(e==null?void 0:e.thumbnail)),Xu=b.createContext({}),xc=e=>{var t,r,n;return(e==null?void 0:e.token)||(e==null?void 0:e.auth_key)||(e==null?void 0:e.auth)||((t=e==null?void 0:e.data)==null?void 0:t.token)||((r=e==null?void 0:e.data)==null?void 0:r.auth_key)||((n=e==null?void 0:e.data)==null?void 0:n.auth)},hc=(e,t={})=>{var r,n,i,a,s,l,c,d,f,g,p,k,w,j,x,m,u,h,C,$,y,S,N,P,E,Q,G,he,ee;return{...(e==null?void 0:e.user)||((r=e==null?void 0:e.data)==null?void 0:r.user)||{},id:(e==null?void 0:e.userid)||((n=e==null?void 0:e.data)==null?void 0:n.userid)||((i=e==null?void 0:e.user)==null?void 0:i._id)||((s=(a=e==null?void 0:e.data)==null?void 0:a.user)==null?void 0:s._id)||t.id,email:(e==null?void 0:e.email)||((l=e==null?void 0:e.data)==null?void 0:l.email)||((c=e==null?void 0:e.user)==null?void 0:c.email)||((f=(d=e==null?void 0:e.data)==null?void 0:d.user)==null?void 0:f.email)||t.email,name:(e==null?void 0:e.name)||((g=e==null?void 0:e.data)==null?void 0:g.name)||((p=e==null?void 0:e.user)==null?void 0:p.name)||((w=(k=e==null?void 0:e.data)==null?void 0:k.user)==null?void 0:w.name)||t.name,phone:(e==null?void 0:e.phone)||((j=e==null?void 0:e.data)==null?void 0:j.phone)||((x=e==null?void 0:e.user)==null?void 0:x.phone)||((u=(m=e==null?void 0:e.data)==null?void 0:m.user)==null?void 0:u.phone)||t.phone,mobile:(e==null?void 0:e.mobile)||((h=e==null?void 0:e.data)==null?void 0:h.mobile)||((C=e==null?void 0:e.user)==null?void 0:C.mobile)||((y=($=e==null?void 0:e.data)==null?void 0:$.user)==null?void 0:y.mobile)||t.mobile||t.phone,firstname:(e==null?void 0:e.firstname)||((S=e==null?void 0:e.data)==null?void 0:S.firstname)||((N=e==null?void 0:e.user)==null?void 0:N.firstname)||((E=(P=e==null?void 0:e.data)==null?void 0:P.user)==null?void 0:E.firstname)||t.firstname,lastname:(e==null?void 0:e.lastname)||((Q=e==null?void 0:e.data)==null?void 0:Q.lastname)||((G=e==null?void 0:e.user)==null?void 0:G.lastname)||((ee=(he=e==null?void 0:e.data)==null?void 0:he.user)==null?void 0:ee.lastname)||t.lastname}};function G0({children:e}){const[t,r]=b.useState(()=>{try{return JSON.parse(localStorage.getItem("arke_user"))}catch{return null}}),[n,i]=b.useState(0),[a,s]=b.useState(0),l=async(p,k)=>{const w=await oe.login(p,k),j=xc(w);if((w==null?void 0:w.success)!==!1&&j){const x=hc(w,{email:p});return localStorage.setItem("arke_token",j),localStorage.setItem("arke_user",JSON.stringify(x)),r(x),window.dispatchEvent(new Event("arke-auth-change")),{ok:!0}}return{ok:!1,msg:(w==null?void 0:w.message)||"Login failed"}},c=async p=>{const k=await oe.register(p),w=xc(k);if((k==null?void 0:k.success)!==!1&&w){const j=hc(k,p);return localStorage.setItem("arke_token",w),localStorage.setItem("arke_user",JSON.stringify(j)),r(j),window.dispatchEvent(new Event("arke-auth-change")),{ok:!0}}return{ok:!1,msg:(k==null?void 0:k.message)||"Registration failed"}},d=()=>{localStorage.removeItem("arke_token"),localStorage.removeItem("arke_user"),r(null),i(0),s(0),window.dispatchEvent(new Event("arke-auth-change"))},f=async()=>{if(localStorage.getItem("arke_token"))try{const p=await oe.getCart();i(_e(p,"cart").length)}catch{}},g=async()=>{if(localStorage.getItem("arke_token"))try{const p=await oe.getWishlist();s(_e(p,"wishlist").length)}catch{}};return b.useEffect(()=>{f(),g()},[t]),o.jsx(Xu.Provider,{value:{user:t,login:l,register:c,logout:d,cartCount:n,wishCount:a,setWishCount:s,refreshCart:f,refreshWishlist:g},children:e})}function Zn(){return b.useContext(Xu)}const Ju=b.createContext();function V0({children:e}){const[t,r]=b.useState([]),[n,i]=b.useState(!1),[a,s]=b.useState(null),l=b.useRef(!1),c=()=>!!localStorage.getItem("arke_token"),d=y=>{var S,N;return String(((S=y==null?void 0:y.product)==null?void 0:S._id)||((N=y==null?void 0:y.product)==null?void 0:N.id)||(y==null?void 0:y.productId)||(y==null?void 0:y._id)||(y==null?void 0:y.id)||"")},f=y=>Array.isArray(y)?y.filter(Boolean).map(S=>({_id:S._id||S.productId||S.id,productId:S.productId||S._id||S.id,quantity:Number(S.quantity)||1,product:S.product||null})):[],g=b.useCallback(async()=>{var y;if(!c()){r([]);return}if(!l.current){l.current=!0,i(!0),s(null);try{const S=await oe.getCart();if((S==null?void 0:S.httpStatus)===401||(y=S==null?void 0:S.message)!=null&&y.toLowerCase().includes("unauthorized")){console.warn("Cart: not authorized — user may not be logged in"),r([]);return}const N=Array.isArray(S==null?void 0:S.cart)?S.cart:Array.isArray(S==null?void 0:S.data)?S.data:Array.isArray(S==null?void 0:S.items)?S.items:Array.isArray(S)?S:[],P=f(N);r(E=>P.map(G=>{const he=E.find(ee=>d(ee)===d(G));return{...G,product:G.product||(he==null?void 0:he.product)||null}}))}catch(S){console.error("loadCart error:",S),s((S==null?void 0:S.message)||"Failed to load cart"),r([])}finally{i(!1),l.current=!1}}},[]),p=b.useCallback(async(y,S=1)=>{if(!c())throw new Error("Please login to add items to cart");const N=typeof y=="object"&&y!==null?y:null,P=String(typeof y=="string"||typeof y=="number"?y:(y==null?void 0:y._id)||(y==null?void 0:y.id)||(y==null?void 0:y.productId)||"");if(!P)throw new Error("addToCart: productId is required");r(E=>E.find(G=>d(G)===P)?E.map(G=>d(G)===P?{...G,quantity:G.quantity+S}:G):[...E,{_id:P,productId:P,quantity:Number(S),product:N,_optimistic:!0}]);try{await oe.addToCart(P,S),await g()}catch(E){throw console.error("addToCart error:",E),await g(),E}},[g]),k=b.useCallback(async y=>{if(!c())return;const S=String(typeof y=="string"||typeof y=="number"?y:(y==null?void 0:y._id)||(y==null?void 0:y.id)||(y==null?void 0:y.productId)||"");if(!S)throw new Error("removeFromCart: productId is required");r(N=>N.filter(P=>d(P)!==S));try{await oe.removeFromCart(S)}catch(N){throw console.error("removeFromCart error:",N),await g(),N}},[g]),w=b.useCallback(async(y,S)=>{if(!c())return;const N=String(typeof y=="string"||typeof y=="number"?y:(y==null?void 0:y._id)||(y==null?void 0:y.id)||(y==null?void 0:y.productId)||"");if(!N)throw new Error("updateQuantity: productId is required");const P=Number(S);if(P<=0)return k(N);r(E=>E.map(Q=>d(Q)===N?{...Q,quantity:P}:Q));try{await oe.updateCartItem(N,P)}catch(E){throw console.error("updateQuantity error:",E),await g(),E}},[g,k]),j=b.useCallback(()=>{r([]),s(null)},[]),x=b.useCallback(()=>t.reduce((y,S)=>y+(S.quantity||1),0),[t]),m=b.useCallback(()=>t.reduce((y,S)=>{const N=S.product||S;return y+Number((N==null?void 0:N.price)||(N==null?void 0:N.salePrice)||0)*(S.quantity||1)},0),[t]),u=b.useCallback(y=>{const S=String(typeof y=="string"||typeof y=="number"?y:(y==null?void 0:y._id)||(y==null?void 0:y.id)||(y==null?void 0:y.productId)||"");return t.some(N=>d(N)===S)},[t]),h=b.useCallback(y=>{const S=String(typeof y=="string"||typeof y=="number"?y:(y==null?void 0:y._id)||(y==null?void 0:y.id)||(y==null?void 0:y.productId)||"");return t.find(N=>d(N)===S)||null},[t]);b.useEffect(()=>{c()&&g()},[g]),b.useEffect(()=>{const y=()=>{c()?g():j()},S=N=>{N.key==="arke_token"&&y()};return window.addEventListener("storage",S),window.addEventListener("arke-auth-change",y),()=>{window.removeEventListener("storage",S),window.removeEventListener("arke-auth-change",y)}},[g,j]);const C=t.reduce((y,S)=>y+(S.quantity||1),0),$=t.reduce((y,S)=>{const N=S.product||S;return y+Number((N==null?void 0:N.price)||(N==null?void 0:N.salePrice)||0)*(S.quantity||1)},0);return o.jsx(Ju.Provider,{value:{items:t,loading:n,error:a,addToCart:p,removeFromCart:k,updateQuantity:w,clearCart:j,loadCart:g,getCartCount:x,getCartTotal:m,isInCart:u,getCartItem:h,cartCount:C,cartTotal:$},children:e})}function tn(){const e=ft.useContext(Ju);if(!e)throw new Error("useCart must be used within <CartProvider>");return e}const qu=b.createContext();function Q0({children:e}){const[t,r]=b.useState([]),[n,i]=b.useState(!1),[a,s]=b.useState(null),l=b.useRef(!1),c=()=>!!localStorage.getItem("arke_token"),d=m=>{var u,h;return String(((u=m==null?void 0:m.product)==null?void 0:u._id)||((h=m==null?void 0:m.product)==null?void 0:h.id)||(m==null?void 0:m.productId)||(m==null?void 0:m._id)||(m==null?void 0:m.id)||"")},f=b.useCallback(async()=>{var m;if(!c()){r([]);return}if(!l.current){l.current=!0,i(!0),s(null);try{const u=await oe.getWishlist();if((u==null?void 0:u.httpStatus)===401||(m=u==null?void 0:u.message)!=null&&m.toLowerCase().includes("unauthorized")){console.warn("Wishlist: not authorized"),r([]);return}const h=Array.isArray(u==null?void 0:u.wishlist)?u.wishlist:Array.isArray(u==null?void 0:u.products)?u.products:Array.isArray(u==null?void 0:u.data)?u.data:Array.isArray(u==null?void 0:u.items)?u.items:Array.isArray(u)?u:[];r(h)}catch(u){console.error("loadWishlist error:",u),s((u==null?void 0:u.message)||"Failed to load wishlist")}finally{i(!1),l.current=!1}}},[]);b.useEffect(()=>{c()&&f()},[f]),b.useEffect(()=>{const m=()=>{c()?f():r([])},u=h=>{h.key==="arke_token"&&m()};return window.addEventListener("storage",u),window.addEventListener("arke-auth-change",m),()=>{window.removeEventListener("storage",u),window.removeEventListener("arke-auth-change",m)}},[f]);const g=b.useCallback(async m=>{if(!c())throw new Error("Please login to save items");const u=typeof m=="object"&&m!==null?m:null,h=typeof m=="string"||typeof m=="number"?String(m):d(m);if(!h)throw new Error("productId is required");const C=t.some($=>d($)===h);r($=>$.some(S=>d(S)===h)?$.filter(S=>d(S)!==h):[...$,u||{_id:h,id:h}]);try{let $;C?$=await oe.removeWishlist(h):$=await oe.addToWishlist(h),!($!=null&&$.success)&&($!=null&&$.message)&&console.warn("Wishlist toggle response:",$.message),await f()}catch($){throw console.error("toggleWishlist error:",$),await f(),$}},[t,f]),p=b.useCallback(m=>{const u=typeof m=="string"||typeof m=="number"?String(m):d(m);return t.some(h=>d(h)===u)},[t]),k=b.useCallback(()=>t.length,[t]),w=b.useCallback(()=>{r([])},[]),j=b.useCallback(async m=>g(m),[g]),x={items:t,wishlistCount:t.length,loading:n,error:a,toggleWishlist:g,removeFromWishlist:j,isInWishlist:p,getWishlistCount:k,clearWishlist:w,loadWishlist:f};return o.jsx(qu.Provider,{value:x,children:e})}function $i(){const e=ft.useContext(qu);if(!e)throw new Error("useWishlist must be used within WishlistProvider");return e}var Zu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},yc=ft.createContext&&ft.createContext(Zu),K0=["attr","size","title"];function X0(e,t){if(e==null)return{};var r,n,i=J0(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function J0(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}function ii(){return ii=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ii.apply(null,arguments)}function bc(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function ai(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?bc(Object(r),!0).forEach(function(n){q0(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):bc(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function q0(e,t,r){return(t=Z0(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Z0(e){var t=em(e,"string");return typeof t=="symbol"?t:t+""}function em(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ep(e){return e&&e.map((t,r)=>ft.createElement(t.tag,ai({key:r},t.attr),ep(t.child)))}function rn(e){return t=>ft.createElement(tm,ii({attr:ai({},e.attr)},t),ep(e.child))}function tm(e){var t=r=>{var{attr:n,size:i,title:a}=e,s=X0(e,K0),l=i||r.size||"1em",c;return r.className&&(c=r.className),e.className&&(c=(c?c+" ":"")+e.className),ft.createElement("svg",ii({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},r.attr,n,s,{className:c,style:ai(ai({color:e.color||r.color},r.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),a&&ft.createElement("title",null,a),e.children)};return yc!==void 0?ft.createElement(yc.Consumer,null,r=>t(r)):t(Zu)}function rm(e){return rn({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M922.9 701.9H327.4l29.9-60.9 496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2zM305.7 253l575.8 1.9-56.4 315.8-452.3.8L305.7 253zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6zm325.1 0c-17.4 0-31.6-14.2-31.6-31.6 0-17.4 14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6z"},child:[]}]})(e)}function nm(e){return rn({attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M923 283.6a260.04 260.04 0 0 0-56.9-82.8 264.4 264.4 0 0 0-84-55.5A265.34 265.34 0 0 0 679.7 125c-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5a258.44 258.44 0 0 0-56.9 82.8c-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3.1-35.3-7-69.6-20.9-101.9zM512 814.8S156 586.7 156 385.5C156 283.6 240.3 201 344.3 201c73.1 0 136.5 40.8 167.7 100.4C543.2 241.8 606.6 201 679.7 201c104 0 188.3 82.6 188.3 184.5 0 201.2-356 429.3-356 429.3z"},child:[]}]})(e)}const A={text:"#f8f2ee",textMuted:"#b8a5b0",roseGold:"#c9897a",roseGoldLight:"#dba99d",roseGoldDeep:"#a8685a",champagne:"#d4b896",dustyRose:"#c4909e",border:"#2a1f2e",dropdownBg:"rgba(13,8,16,0.97)",bannerBg:"#160e1c",her:"#c4909e",him:"#7a95a8"},om=`
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
`,vc=({color:e="rgba(201,137,122,0.25)",width:t=80})=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,width:t},children:[o.jsx("div",{style:{flex:1,height:"0.5px",background:e,animation:"shimmer 3s ease-in-out infinite"}}),o.jsx("span",{style:{color:e,fontSize:8,opacity:.8},children:"✦"}),o.jsx("div",{style:{flex:1,height:"0.5px",background:e,animation:"shimmer 3s ease-in-out infinite 0.5s"}})]});function im({onHeightChange:e}){var l,c;const[t,r]=b.useState(!0),[n,i]=b.useState([]);if(b.useEffect(()=>{const d=async()=>{try{const g=await fetch("http://localhost:5050/api/announcements",{headers:{"ngrok-skip-browser-warning":"true"}});if(g.ok){const k=((await g.json()).data||[]).filter(w=>w.isActive).sort((w,j)=>(w.order||0)-(j.order||0));if(k.length){i(k);return}}}catch{}i([{message:"✦ New Collection — Handcrafted Pieces Made For Her",bgColor:A.bannerBg,textColor:A.roseGold},{message:"◈ Free Shipping On All Orders Above ₹999",bgColor:A.bannerBg,textColor:A.champagne},{message:"◇ Hallmark Certified · Waterproof · Tarnish-Proof",bgColor:A.bannerBg,textColor:A.roseGold},{message:"✦ Up To 30% Off — Summer Edit Now Live",bgColor:A.bannerBg,textColor:A.champagne}])};d();const f=setInterval(d,5*60*1e3);return()=>clearInterval(f)},[]),b.useEffect(()=>{e==null||e(t&&n.length?38:0)},[t,n]),!t||!n.length)return null;const a=((l=n[0])==null?void 0:l.bgColor)||A.bannerBg,s=((c=n[0])==null?void 0:c.textColor)||A.roseGold;return o.jsxs("div",{style:{background:`linear-gradient(135deg, ${a} 0%, #1a0f1e 50%, ${a} 100%)`,height:38,display:"flex",alignItems:"center",position:"relative",zIndex:1001,overflow:"hidden",animation:"slideDown 0.5s ease",borderBottom:"1px solid rgba(201,137,122,0.12)"},children:[o.jsx("div",{style:{width:38,height:"100%",flexShrink:0,background:"linear-gradient(135deg, rgba(201,137,122,0.12), transparent)",display:"flex",alignItems:"center",justifyContent:"center",borderRight:"1px solid rgba(201,137,122,0.08)"},children:o.jsx("span",{style:{fontSize:9,color:s,opacity:.5,animation:"letterFloat 2s ease-in-out infinite"},children:"✦"})}),o.jsxs("div",{style:{flex:1,overflow:"hidden",position:"relative"},children:[o.jsx("div",{style:{position:"absolute",left:0,top:0,bottom:0,width:48,background:`linear-gradient(to right, ${a}, transparent)`,zIndex:2,pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",right:36,top:0,bottom:0,width:48,background:`linear-gradient(to left, ${a}, transparent)`,zIndex:2,pointerEvents:"none"}}),o.jsx("div",{className:"ann-marquee-track",children:[...n,...n].map((d,f)=>o.jsxs("span",{style:{fontFamily:"'Jost', sans-serif",fontSize:10.5,letterSpacing:"2px",fontWeight:500,color:d.textColor||A.roseGold,whiteSpace:"nowrap",display:"inline-flex",alignItems:"center"},children:[d.message,o.jsx("span",{className:"ann-sep",children:"◇"})]},f))})]}),o.jsx("button",{onClick:()=>r(!1),style:{background:"rgba(201,137,122,0.06)",border:"none",borderLeft:"1px solid rgba(201,137,122,0.08)",color:s,cursor:"pointer",fontSize:11,padding:"0 14px",height:"100%",flexShrink:0,display:"flex",alignItems:"center",opacity:.55,transition:"opacity 0.2s"},onMouseEnter:d=>d.currentTarget.style.opacity="1",onMouseLeave:d=>d.currentTarget.style.opacity="0.55",children:"✕"})]})}function am({user:e}){const[t,r]=b.useState(!1),n=b.useRef(null),i=b.useRef(null),a=jr(),{logout:s}=Zn();b.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]),b.useEffect(()=>{const g=p=>{n.current&&!n.current.contains(p.target)&&r(!1)};if(t)return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[t]);const l=()=>{i.current&&(clearTimeout(i.current),i.current=null),r(!0)},c=()=>{i.current=setTimeout(()=>r(!1),160)},d=()=>{s(),r(!1),window.location.href="/"},f=e!=null&&e.email?e.email.charAt(0).toUpperCase():"U";return o.jsxs("div",{ref:n,style:{position:"relative"},onMouseEnter:l,onMouseLeave:c,children:[o.jsx("button",{className:`account-btn-circle ${t?"active":""}`,title:"My Account",children:f}),t&&o.jsxs("div",{className:"account-dropdown-menu",style:{position:"absolute",top:"calc(100% + 10px)",right:0,background:A.dropdownBg,backdropFilter:"blur(40px)",WebkitBackdropFilter:"blur(40px)",border:`1px solid ${A.border}`,borderRadius:"16px",minWidth:"290px",boxShadow:`
              0 32px 80px rgba(0,0,0,0.8),
              0 8px 24px rgba(0,0,0,0.5),
              inset 0 1px 0 rgba(201,137,122,0.08)
            `,zIndex:1010,overflow:"hidden",pointerEvents:"auto"},children:[o.jsxs("div",{style:{padding:"20px 18px",background:`linear-gradient(135deg,
                rgba(201,137,122,0.10) 0%,
                rgba(196,144,158,0.06) 50%,
                rgba(61,32,64,0.08) 100%
              )`,borderBottom:`1px solid ${A.border}`},children:[o.jsx("div",{style:{height:"1px",background:"linear-gradient(90deg, transparent, rgba(201,137,122,0.4), transparent)",marginBottom:14,marginTop:-6,marginLeft:-18,marginRight:-18,animation:"shimmer 2s ease-in-out infinite"}}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("div",{style:{width:44,height:44,borderRadius:"50%",background:`linear-gradient(135deg, ${A.roseGoldDeep} 0%, ${A.dustyRose} 50%, ${A.champagne} 100%)`,display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:17,fontFamily:"'Cormorant Garamond', serif",fontWeight:600,boxShadow:`0 4px 20px rgba(201,137,122,0.35),
                              inset 0 1px 0 rgba(255,255,255,0.2)`,flexShrink:0,animation:"glowPulse 2s ease-in-out infinite"},children:f}),o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsx("div",{style:{fontFamily:"'Jost', sans-serif",fontSize:9,fontWeight:600,letterSpacing:"2px",color:A.roseGold,textTransform:"uppercase",marginBottom:5,opacity:.85},children:"Welcome Back"}),o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:13,color:A.text,letterSpacing:"0.5px",fontStyle:"italic",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",opacity:.8},children:(e==null?void 0:e.email)||"Guest"})]}),o.jsx("div",{style:{background:"linear-gradient(135deg, rgba(201,137,122,0.15), rgba(196,144,158,0.10))",border:"1px solid rgba(201,137,122,0.2)",borderRadius:"20px",padding:"3px 8px",flexShrink:0},children:o.jsx("span",{style:{fontFamily:"'Jost', sans-serif",fontSize:7.5,letterSpacing:"1.5px",color:A.roseGold,textTransform:"uppercase",fontWeight:600},children:"Member"})})]})]}),o.jsx("div",{style:{padding:"8px 0"},children:sm.map((g,p)=>{const k=a.pathname===g.to;return o.jsxs(Be,{to:g.to,onClick:()=>r(!1),className:"account-menu-item",style:{display:"flex",alignItems:"center",gap:12,padding:"12px 18px",fontFamily:"'Jost', sans-serif",fontSize:9.5,letterSpacing:"1.2px",textTransform:"uppercase",textDecoration:"none",color:k?A.roseGold:A.textMuted,transition:"all 0.25s",background:k?"rgba(201,137,122,0.07)":"transparent"},onMouseEnter:w=>{k||(w.currentTarget.style.color=A.roseGoldLight,w.currentTarget.style.background="rgba(201,137,122,0.05)",w.currentTarget.style.paddingLeft="22px")},onMouseLeave:w=>{k||(w.currentTarget.style.color=A.textMuted,w.currentTarget.style.background="transparent",w.currentTarget.style.paddingLeft="18px")},children:[o.jsx("span",{style:{fontSize:14,minWidth:18,opacity:.85},children:g.icon}),o.jsx("span",{style:{flex:1},children:g.label}),k?o.jsx("span",{style:{width:5,height:5,borderRadius:"50%",background:A.roseGold,flexShrink:0,animation:"pulseGlow 1.5s ease-in-out infinite"}}):o.jsx("svg",{width:"10",height:"10",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",opacity:.3,children:o.jsx("polyline",{points:"9 18 15 12 9 6"})})]},g.to)})}),o.jsx("div",{style:{padding:"0 18px"},children:o.jsx("div",{style:{height:"0.5px",background:"linear-gradient(90deg, transparent, rgba(201,137,122,0.2), transparent)",animation:"shimmer 2.5s ease-in-out infinite"}})}),o.jsx("div",{style:{padding:"12px 14px 14px"},children:o.jsxs("button",{onClick:d,style:{width:"100%",fontFamily:"'Jost', sans-serif",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",fontWeight:600,padding:"11px 16px",cursor:"pointer",outline:"none",border:`1px solid ${A.border}`,background:"transparent",color:A.textMuted,transition:"all 0.3s cubic-bezier(0.4,0,0.2,1)",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center",gap:8},onMouseEnter:g=>{g.currentTarget.style.background="rgba(196,144,158,0.08)",g.currentTarget.style.borderColor="rgba(196,144,158,0.3)",g.currentTarget.style.color=A.dustyRose},onMouseLeave:g=>{g.currentTarget.style.background="transparent",g.currentTarget.style.borderColor=A.border,g.currentTarget.style.color=A.textMuted},children:[o.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.8",children:[o.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),o.jsx("polyline",{points:"16 17 21 12 16 7"}),o.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),"Sign Out"]})})]})]})}const wc=[{label:"Home",to:"/"},{label:"New Collection",to:"/new-collection"},{label:"Best Sellers",to:"/best-sellers"},{label:"All Jewellery",to:"/products"},{label:"Categories",to:"/categories"},{label:"Gift for Her",to:"/gift-for-her",accent:A.her},{label:"Gift for Him",to:"/gift-for-him",accent:A.him}],sm=[{label:"My Orders",to:"/My-Orders",icon:"✦"},{label:"Customer Care",to:"/customer-care",icon:"◇"},{label:"Account Security",to:"/account-security",icon:"◈"},{label:"Bank Details",to:"/Bankdetails",icon:"◉"}];function lm({onLoginClick:e}){const{user:t,logout:r}=Zn(),{cartCount:n}=tn(),{wishlistCount:i}=$i(),a=n>99?"99+":n,s=i>99?"99+":i,[l,c]=b.useState(!1),[d,f]=b.useState(!1),[g,p]=b.useState(38),k=jr(),w=k.pathname==="/";b.useEffect(()=>{const x=()=>{c(window.scrollY>50)};return x(),window.addEventListener("scroll",x,{passive:!0}),()=>window.removeEventListener("scroll",x)},[k.pathname]),b.useEffect(()=>{f(!1)},[k]);const j=w&&!l;return o.jsxs(o.Fragment,{children:[o.jsx("style",{children:om}),o.jsx("div",{style:{position:"fixed",top:0,left:0,right:0,zIndex:1001},children:o.jsx(im,{onHeightChange:p})}),o.jsxs("nav",{className:`arke-navbar ${j?"is-transparent":"is-solid"}`,style:{position:"fixed",top:g,left:0,right:0,zIndex:1e3,height:l?56:68,padding:"0 48px",display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid transparent"},children:[o.jsx("div",{className:"arke-shimmer-line",style:{opacity:j?0:1}}),o.jsxs(Be,{style:{display:"flex",alignItems:"baseline",gap:1,textDecoration:"none",flexShrink:0},children:[o.jsx("span",{className:"logo-char",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?24:28,fontWeight:400,letterSpacing:"6px",color:A.text,transition:"font-size 0.4s ease",fontStyle:"italic"},children:"Ark"}),o.jsx("span",{className:"logo-char",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:l?24:28,fontWeight:400,letterSpacing:"6px",fontStyle:"italic",background:`linear-gradient(135deg, ${A.roseGold}, ${A.champagne}, ${A.dustyRose})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",transition:"font-size 0.4s ease"},children:"é"})]}),o.jsx("ul",{className:"arke-nav-links",children:wc.map((x,m)=>{const u=k.pathname===x.to,h=x.to==="/gift-for-her",C=x.to==="/gift-for-him",$=u?x.accent||A.roseGold:h?A.her:C?A.him:"rgba(248,242,238,0.55)";return o.jsx("li",{style:{animation:`fadeInUp 0.5s ease ${m*50}ms both`},children:o.jsxs(Be,{to:x.to,className:`arke-nav-link${u?" active":""}${h?" nav-gift-her":""}${C?" nav-gift-him":""}`,style:{color:$},onMouseEnter:y=>{!u&&!h&&!C&&(y.currentTarget.style.color=A.text)},onMouseLeave:y=>{!u&&!h&&!C&&(y.currentTarget.style.color=$)},children:[h&&o.jsx("span",{style:{marginRight:4,fontSize:9,opacity:.8},children:"✿"}),C&&o.jsx("span",{style:{marginRight:4,fontSize:9,opacity:.8},children:"◈"}),x.label]})},x.to)})}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4,flexShrink:0},children:[o.jsxs(Be,{to:"/wishlist",className:"nav-icon-btn",children:[o.jsx(nm,{size:19}),i>0&&o.jsx("span",{className:"badge-pulse",style:{position:"absolute",top:2,right:2,width:16,height:16,borderRadius:"50%",background:`linear-gradient(135deg, ${A.roseGoldDeep}, ${A.dustyRose})`,color:"#fff",fontSize:8.5,fontWeight:700,fontFamily:"'Jost', sans-serif",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(201,137,122,0.5)"},children:s})]}),o.jsxs(Be,{to:"/cart",className:"nav-icon-btn",children:[o.jsx(rm,{size:19}),n>0&&o.jsx("span",{className:"badge-pulse",style:{position:"absolute",top:2,right:2,width:16,height:16,borderRadius:"50%",background:`linear-gradient(135deg, ${A.roseGoldDeep}, ${A.dustyRose})`,color:"#fff",fontSize:8.5,fontWeight:700,fontFamily:"'Jost', sans-serif",display:"flex",alignItems:"center",justifyContent:"center",boxShadow:"0 2px 8px rgba(201,137,122,0.5)"},children:a})]}),o.jsx("div",{style:{width:"0.5px",height:18,background:"rgba(201,137,122,0.2)",margin:"0 6px",animation:"floatOrb1 4s ease-in-out infinite"}}),t?o.jsx(am,{user:t}):o.jsx(cm,{onClick:e,children:"Sign In"}),o.jsx("button",{className:"arke-hamburger",onClick:()=>f(!d),style:{flexDirection:"column",gap:5,background:"none",border:"none",cursor:"pointer",padding:"4px 0 4px 14px",marginLeft:4,outline:"none"},children:[0,1,2].map(x=>o.jsx("span",{style:{display:"block",width:x===2?14:22,height:1.5,background:A.roseGold,transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",transform:d?x===0?"rotate(45deg) translate(4.5px, 4.5px)":x===2?"rotate(-45deg) translate(3px, -4px)":"none":"none",opacity:d&&x===1?0:1,transformOrigin:"left center"}},x))})]})]}),o.jsxs("div",{style:{position:"fixed",inset:0,zIndex:998,background:"linear-gradient(160deg, #0d0810 0%, #160e1c 40%, #1a0d18 100%)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:8,transform:d?"translateX(0)":"translateX(100%)",transition:"transform 0.5s cubic-bezier(0.77,0,0.175,1)",overflowY:"auto",padding:"60px 24px"},children:[o.jsx("div",{style:{position:"absolute",width:300,height:300,borderRadius:"50%",background:"radial-gradient(circle, rgba(201,137,122,0.04) 0%, transparent 70%)",top:"10%",right:"-10%",pointerEvents:"none",animation:"floatOrb1 8s ease-in-out infinite"}}),o.jsx("div",{style:{position:"absolute",width:250,height:250,borderRadius:"50%",background:"radial-gradient(circle, rgba(196,144,158,0.04) 0%, transparent 70%)",bottom:"15%",left:"-5%",pointerEvents:"none",animation:"floatOrb2 10s ease-in-out infinite"}}),o.jsx("button",{onClick:()=>f(!1),style:{position:"absolute",top:24,right:24,background:"rgba(201,137,122,0.08)",border:"1px solid rgba(201,137,122,0.15)",color:A.roseGold,width:36,height:36,borderRadius:"50%",fontSize:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.25s"},onMouseEnter:x=>{x.currentTarget.style.background="rgba(201,137,122,0.16)",x.currentTarget.style.transform="rotate(90deg)"},onMouseLeave:x=>{x.currentTarget.style.background="rgba(201,137,122,0.08)",x.currentTarget.style.transform="rotate(0deg)"},children:"✕"}),o.jsx("div",{style:{marginBottom:20},children:o.jsxs("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:26,fontStyle:"italic",color:A.text,letterSpacing:"6px"},children:["Ark",o.jsx("span",{style:{background:`linear-gradient(135deg, ${A.roseGold}, ${A.champagne})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"é"})]})}),o.jsx(vc,{color:"rgba(201,137,122,0.2)",width:60}),o.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,marginTop:16},children:wc.map((x,m)=>{const u=x.to==="/gift-for-her",h=x.to==="/gift-for-him",$=k.pathname===x.to?x.accent||A.roseGold:u?A.her:h?A.him:"rgba(248,242,238,0.7)";return o.jsxs(Be,{to:x.to,className:"mobile-nav-link",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:26,fontWeight:300,fontStyle:"italic",letterSpacing:"4px",color:$,textDecoration:"none",textTransform:"capitalize",padding:"10px 24px",animation:d?`fadeInUp 0.5s ease ${m*60}ms both`:"none"},onMouseEnter:y=>{y.currentTarget.style.color=x.accent||A.roseGold,y.currentTarget.style.letterSpacing="6px"},onMouseLeave:y=>{y.currentTarget.style.color=$,y.currentTarget.style.letterSpacing="4px"},children:[u&&"✿ ",h&&"◈ ",x.label]},x.to)})}),o.jsx("div",{style:{marginTop:20},children:o.jsx(vc,{color:"rgba(201,137,122,0.18)",width:80})}),o.jsx("div",{style:{marginTop:16},children:t?o.jsx("button",{onClick:()=>{r(),f(!1)},style:{background:"transparent",border:"1px solid rgba(201,137,122,0.25)",color:"rgba(201,137,122,0.65)",padding:"12px 32px",fontFamily:"'Jost', sans-serif",fontSize:9,letterSpacing:"2.5px",textTransform:"uppercase",cursor:"pointer",borderRadius:"2px",transition:"all 0.3s"},onMouseEnter:x=>{x.currentTarget.style.borderColor="rgba(201,137,122,0.5)",x.currentTarget.style.color=A.roseGold},onMouseLeave:x=>{x.currentTarget.style.borderColor="rgba(201,137,122,0.25)",x.currentTarget.style.color="rgba(201,137,122,0.65)"},children:"Sign Out"}):o.jsx("button",{onClick:()=>{e(),f(!1)},style:{background:`linear-gradient(135deg, ${A.roseGoldDeep} 0%, ${A.dustyRose} 100%)`,border:"none",color:"#fff",padding:"14px 40px",fontFamily:"'Jost', sans-serif",fontSize:10,letterSpacing:"3px",textTransform:"uppercase",cursor:"pointer",fontWeight:600,borderRadius:"2px",boxShadow:"0 8px 32px rgba(201,137,122,0.35)",transition:"all 0.3s"},onMouseEnter:x=>{x.currentTarget.style.transform="translateY(-2px)",x.currentTarget.style.boxShadow="0 12px 40px rgba(201,137,122,0.45)"},onMouseLeave:x=>{x.currentTarget.style.transform="translateY(0)",x.currentTarget.style.boxShadow="0 8px 32px rgba(201,137,122,0.35)"},children:"✦ Sign In"})})]})]})}function cm({children:e,onClick:t}){const[r,n]=b.useState(!1);return o.jsxs("button",{onClick:t,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),style:{fontFamily:"'Jost', sans-serif",fontSize:9.5,letterSpacing:"2px",textTransform:"uppercase",fontWeight:600,padding:"9px 20px",cursor:"pointer",outline:"none",border:"none",display:"inline-flex",alignItems:"center",gap:6,transition:"all 0.35s cubic-bezier(0.4,0,0.2,1)",background:r?`linear-gradient(135deg, ${A.roseGold} 0%, ${A.dustyRose} 100%)`:`linear-gradient(135deg, ${A.roseGoldDeep} 0%, ${A.dustyRose} 100%)`,color:"#fff",borderRadius:"2px",boxShadow:r?"0 8px 28px rgba(201,137,122,0.45)":"0 3px 12px rgba(201,137,122,0.22)",transform:r?"translateY(-2px)":"none"},children:[o.jsx("span",{style:{fontSize:8,opacity:.85},children:"✦"}),e]})}function tp(e){return rn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"},child:[]}]})(e)}function rp(e){return rn({attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"},child:[]}]})(e)}function np(e){return rn({attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"},child:[]}]})(e)}function op(e){return rn({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"},child:[]}]})(e)}const ne={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",burgundy:"#8b4654",border:"#e8ddd4",borderLight:"#f0ebe5"};function dm(){const e={footer:{background:`linear-gradient(to bottom, ${ne.surface} 0%, ${ne.bg} 100%)`,borderTop:`1px solid ${ne.border}`,padding:"80px 80px 40px"},grid:{display:"grid",gridTemplateColumns:"2fr 1fr 1fr",gap:"60px",marginBottom:"60px"},brand:{fontFamily:"'Cormorant Garamond', serif",fontSize:"42px",fontWeight:400,letterSpacing:"4px",color:ne.text,marginBottom:"24px",background:`linear-gradient(135deg, ${ne.text}, ${ne.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},brandSpan:{color:ne.rose,background:"none",WebkitTextFillColor:"unset"},tagline:{color:ne.textMuted,fontSize:"13.5px",lineHeight:"1.9",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.5px",fontWeight:400,maxWidth:"280px"},colTitle:{fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",color:ne.burgundy,marginBottom:"24px",fontWeight:700},colLinks:{display:"flex",flexDirection:"column",gap:"14px"},colLink:{color:ne.textMuted,fontSize:"13px",textDecoration:"none",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.3px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",cursor:"pointer",fontWeight:400,position:"relative"},bottom:{borderTop:`1px solid ${ne.border}`,paddingTop:"36px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"40px",flexWrap:"wrap"},copy:{color:ne.textMuted,fontSize:"11px",letterSpacing:"0.8px",fontFamily:"'Poppins', sans-serif",fontWeight:500},socialRow:{display:"flex",gap:"12px",alignItems:"center"},socialLink:{width:"42px",height:"42px",display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"50%",textDecoration:"none",color:ne.rose,fontSize:"16px",border:`1.5px solid ${ne.rose}`,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",cursor:"pointer",background:"transparent",fontWeight:500}},t=[{name:"Instagram",url:"https://instagram.com/yourhandle",icon:o.jsx(np,{size:16})},{name:"Pinterest",url:"https://pinterest.com/yourprofile",icon:o.jsx(rp,{size:16})},{name:"WhatsApp",url:"https://wa.me/919876543210",icon:o.jsx(tp,{size:16})},{name:"Email",url:"mailto:hello@arke.com",icon:o.jsx(op,{size:16})}],r=s=>{s.target.style.color=ne.burgundy,s.target.style.transform="translateX(4px)"},n=s=>{s.target.style.color=ne.textMuted,s.target.style.transform="translateX(0)"},i=s=>{s.currentTarget.style.color="white",s.currentTarget.style.borderColor=ne.rose,s.currentTarget.style.background=`linear-gradient(135deg, ${ne.rose}, ${ne.burgundy})`,s.currentTarget.style.transform="translateY(-3px)",s.currentTarget.style.boxShadow="0 6px 20px rgba(232, 180, 196, 0.35)"},a=s=>{s.currentTarget.style.color=ne.rose,s.currentTarget.style.borderColor=ne.rose,s.currentTarget.style.background="transparent",s.currentTarget.style.transform="translateY(0)",s.currentTarget.style.boxShadow="none"};return o.jsxs("footer",{style:e.footer,children:[o.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        .footer-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: linear-gradient(90deg, ${ne.rose}, ${ne.burgundy});
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
      `}),o.jsxs("div",{className:"footer-wrapper",style:e.footer,children:[o.jsxs("div",{className:"footer-grid",style:e.grid,children:[o.jsxs("div",{children:[o.jsxs("div",{style:e.brand,children:["ARK",o.jsx("span",{style:e.brandSpan,children:"E"})]}),o.jsxs("p",{style:e.tagline,children:["✨ Jewellery for everyone. Designed with clarity, crafted with love. Wear it your way.",o.jsx("br",{}),o.jsx("br",{}),"We craft timeless pieces that celebrate elegance and individuality. Each jewel tells a story of meticulous craftsmanship, passion, and attention to detail. Our collection blends traditional artistry with contemporary design, creating pieces that transcend trends and become cherished heirlooms."]})]}),o.jsxs("div",{children:[o.jsx("div",{style:e.colTitle,children:"📍 Explore"}),o.jsx("div",{style:e.colLinks,children:[["New Collection","/new-collection"],["Best Sellers","/best-sellers"],["All Jewellery","/products"],["Gift Guide","/gift-guide"]].map(([s,l])=>o.jsx(Be,{to:l,className:"footer-link",style:e.colLink,onMouseEnter:r,onMouseLeave:n,children:s},l))})]}),o.jsxs("div",{children:[o.jsx("div",{style:e.colTitle,children:"💬 Support"}),o.jsx("div",{style:e.colLinks,children:[["About Us","/about-us"],["Contact Us","/customer-care"],["Shipping Info","/shipping"],["Journal","/blog"]].map(([s,l])=>o.jsx(Be,{to:l,className:"footer-link",style:e.colLink,onMouseEnter:r,onMouseLeave:n,children:s},l))})]})]}),o.jsx("div",{style:{height:"1px",background:`linear-gradient(90deg, transparent, ${ne.border}, transparent)`,margin:"40px 0"}}),o.jsxs("div",{className:"footer-bottom",style:e.bottom,children:[o.jsxs("span",{style:e.copy,children:["© ",new Date().getFullYear()," ARKE. All Rights Reserved. | Handcrafted with 💕"]}),o.jsx("div",{style:e.socialRow,children:t.map(s=>o.jsx("a",{href:s.url,target:"_blank",rel:"noopener noreferrer",title:s.name,style:e.socialLink,onMouseEnter:i,onMouseLeave:a,children:s.icon},s.name))})]}),o.jsx("div",{style:{marginTop:"30px",paddingTop:"24px",borderTop:`1px solid ${ne.borderLight}`,display:"flex",gap:"32px",flexWrap:"wrap",justifyContent:"center"},children:[["Privacy Policy","/privacy"],["Terms & Conditions","/terms"],["Refund Policy","/refund"],["Accessibility","/accessibility"]].map(([s,l])=>o.jsx(Be,{to:l,style:{color:ne.textMuted,fontSize:"10px",textDecoration:"none",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.5px",transition:"color 0.3s",fontWeight:500},onMouseEnter:c=>{c.target.style.color=ne.rose},onMouseLeave:c=>{c.target.style.color=ne.textMuted},children:s},l))})]})]})}const U={surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4"};function um({onClose:e}){const{login:t,register:r}=Zn(),[n,i]=b.useState("login"),[a,s]=b.useState({name:"",email:"",phone:"",password:""}),[l,c]=b.useState(!1),[d,f]=b.useState(""),[g,p]=b.useState(""),k=x=>m=>s({...a,[x]:m.target.value}),w=async()=>{if(l)return;const x=a.email.trim(),m=a.password,u=a.phone.trim(),h=a.name.trim();if(f(""),p(""),!x||!m){f("Email and password are required.");return}if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(x)){f("Please enter a valid email address.");return}if(m.length<6){f("Password must be at least 6 characters.");return}if(n==="register"){if(!h){f("Full name is required.");return}if(!u||u.length<10){f("Please enter a valid mobile number.");return}}c(!0);try{if(n==="login"){const C=await t(x,m);C.ok?(p("Welcome back! 💕"),setTimeout(()=>e(),800)):f(C.msg||"Login failed. Please try again.")}else{const C=await r({name:h,email:x,phone:u,password:m});C.ok?(p("Account created! Welcome to ARKE 💎"),setTimeout(()=>e(),800)):f(C.msg||"Registration failed. Please try again.")}}catch(C){f((C==null?void 0:C.message)||"Something went wrong. Please try again.")}finally{c(!1)}},j={overlay:{position:"fixed",inset:0,zIndex:2e3,background:"rgba(42, 42, 42, 0.7)",backdropFilter:"blur(8px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"20px"},modal:{background:U.surface,border:`1.5px solid ${U.border}`,borderRadius:"12px",width:"100%",maxWidth:"450px",padding:"60px 48px",position:"relative",boxShadow:"0 20px 60px rgba(139, 70, 84, 0.15)",animation:"slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"},close:{position:"absolute",top:"20px",right:"20px",background:"none",border:"none",color:U.textMuted,cursor:"pointer",fontSize:"24px",fontWeight:300,transition:"all 0.3s",padding:"4px 8px",opacity:.6},title:{fontFamily:"'Cormorant Garamond', serif",fontSize:"40px",fontWeight:400,letterSpacing:"3px",color:U.text,marginBottom:"8px",textAlign:"center",background:`linear-gradient(135deg, ${U.text}, ${U.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},sub:{color:U.textMuted,fontSize:"12px",letterSpacing:"1.5px",textTransform:"uppercase",textAlign:"center",marginBottom:"40px",fontFamily:"'Poppins', sans-serif",fontWeight:600},formGroup:{marginBottom:"24px"},label:{display:"block",color:U.text,fontSize:"11px",letterSpacing:"1px",textTransform:"uppercase",marginBottom:"8px",fontFamily:"'Poppins', sans-serif",fontWeight:600},input:{width:"100%",background:`${U.blush}20`,border:`1.5px solid ${U.border}`,borderRadius:"6px",color:U.text,padding:"12px 14px",fontFamily:"'Poppins', sans-serif",fontSize:"13px",outline:"none",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",letterSpacing:"0.3px"},inputFocus:{background:`${U.rose}15`,borderColor:U.rose,boxShadow:`0 0 0 3px ${U.blush}40`},btn:{width:"100%",padding:"14px",background:`linear-gradient(135deg, ${U.rose}, ${U.burgundy})`,color:"white",border:"none",borderRadius:"6px",cursor:l?"wait":"pointer",fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,marginBottom:"20px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:"0 4px 16px rgba(232, 180, 196, 0.3)",opacity:l?.7:1},toggle:{textAlign:"center",color:U.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"12px",fontWeight:500,letterSpacing:"0.3px"},toggleLink:{color:U.rose,cursor:"pointer",background:"none",border:"none",fontFamily:"'Poppins', sans-serif",fontSize:"12px",fontWeight:700,transition:"color 0.3s",textDecoration:"none",padding:0},err:{color:"#d97070",fontSize:"12px",marginBottom:"16px",textAlign:"center",fontFamily:"'Poppins', sans-serif",padding:"12px 12px",background:"rgba(217, 112, 112, 0.08)",borderRadius:"6px",border:"1px solid rgba(217, 112, 112, 0.2)",fontWeight:500},success:{color:U.rose,fontSize:"12px",marginBottom:"16px",textAlign:"center",fontFamily:"'Poppins', sans-serif",padding:"12px 12px",background:"rgba(232, 180, 196, 0.08)",borderRadius:"6px",border:`1px solid ${U.rose}40`,fontWeight:600},divider:{display:"flex",alignItems:"center",gap:"12px",margin:"28px 0"},dividerLine:{flex:1,height:"1px",background:U.border},dividerText:{color:U.textMuted,fontSize:"11px",fontFamily:"'Poppins', sans-serif",textTransform:"uppercase",letterSpacing:"1px",fontWeight:600},socialBtns:{display:"flex",gap:"12px",marginBottom:"20px"},socialBtn:{flex:1,padding:"11px",border:`1.5px solid ${U.border}`,background:"transparent",borderRadius:"6px",cursor:"pointer",fontFamily:"'Poppins', sans-serif",fontSize:"11px",fontWeight:600,letterSpacing:"1px",color:U.text,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"}};return o.jsxs("div",{style:j.overlay,onClick:e,children:[o.jsx("style",{children:`
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
          color: ${U.textMuted};
          opacity: 0.6;
        }

        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px ${U.blush}15 inset !important;
          -webkit-text-fill-color: ${U.text} !important;
          caret-color: ${U.rose};
        }

        @media (max-width: 480px) {
          .auth-modal {
            padding: 48px 32px !important;
            max-width: calc(100% - 40px) !important;
          }
        }
      `}),o.jsxs("div",{style:j.modal,className:"auth-modal",onClick:x=>x.stopPropagation(),children:[o.jsx("button",{style:j.close,onClick:e,onMouseEnter:x=>{x.target.style.opacity="1",x.target.style.color=U.rose},onMouseLeave:x=>{x.target.style.opacity="0.6",x.target.style.color=U.textMuted},children:"✕"}),o.jsxs("div",{style:j.title,children:["ARK",o.jsx("span",{style:{color:U.rose,background:"none",WebkitTextFillColor:"unset"},children:"E"})]}),o.jsx("div",{style:j.sub,children:n==="login"?"✨ Welcome back":"💎 Create your account"}),d&&o.jsxs("div",{style:j.err,children:["⚠️ ",d]}),g&&o.jsxs("div",{style:j.success,children:["✓ ",g]}),o.jsxs("div",{children:[n==="register"&&o.jsxs("div",{style:j.formGroup,children:[o.jsx("label",{style:j.label,children:"Full Name"}),o.jsx("input",{style:j.input,placeholder:"Your full name",value:a.name,onChange:k("name"),onFocus:x=>Object.assign(x.target.style,j.inputFocus),onBlur:x=>{x.target.style.background=`${U.blush}20`,x.target.style.borderColor=U.border,x.target.style.boxShadow="none"},autoComplete:"name"})]}),n==="register"&&o.jsxs("div",{style:j.formGroup,children:[o.jsx("label",{style:j.label,children:"Mobile Number"}),o.jsx("input",{style:j.input,placeholder:"10-digit mobile number",value:a.phone,onChange:k("phone"),onFocus:x=>Object.assign(x.target.style,j.inputFocus),onBlur:x=>{x.target.style.background=`${U.blush}20`,x.target.style.borderColor=U.border,x.target.style.boxShadow="none"},autoComplete:"tel"})]}),o.jsxs("div",{style:j.formGroup,children:[o.jsx("label",{style:j.label,children:"Email Address"}),o.jsx("input",{style:j.input,type:"email",placeholder:"your@email.com",value:a.email,onChange:k("email"),onFocus:x=>Object.assign(x.target.style,j.inputFocus),onBlur:x=>{x.target.style.background=`${U.blush}20`,x.target.style.borderColor=U.border,x.target.style.boxShadow="none"},autoComplete:"email"})]}),o.jsxs("div",{style:j.formGroup,children:[o.jsx("label",{style:j.label,children:"Password"}),o.jsx("input",{style:j.input,type:"password",placeholder:"Minimum 6 characters",value:a.password,onChange:k("password"),onFocus:x=>Object.assign(x.target.style,j.inputFocus),onBlur:x=>{x.target.style.background=`${U.blush}20`,x.target.style.borderColor=U.border,x.target.style.boxShadow="none"},autoComplete:n==="login"?"current-password":"new-password",onKeyDown:x=>x.key==="Enter"&&w()})]}),o.jsx("button",{style:j.btn,onClick:w,disabled:l,onMouseEnter:x=>{l||(x.target.style.transform="translateY(-2px)",x.target.style.boxShadow="0 8px 24px rgba(232, 180, 196, 0.4)")},onMouseLeave:x=>{x.target.style.transform="translateY(0)",x.target.style.boxShadow="0 4px 16px rgba(232, 180, 196, 0.3)"},children:l?o.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"6px"},children:[o.jsx("span",{style:{display:"inline-block",width:"4px",height:"4px",borderRadius:"50%",background:"currentColor",animation:"pulse 1.5s infinite"}}),"Please wait..."]}):n==="login"?"Sign In":"Create Account"})]}),o.jsxs("div",{style:j.divider,children:[o.jsx("div",{style:j.dividerLine}),o.jsx("span",{style:j.dividerText,children:"OR"}),o.jsx("div",{style:j.dividerLine})]}),o.jsxs("div",{style:j.socialBtns,children:[o.jsx("button",{style:j.socialBtn,onMouseEnter:x=>{x.target.style.background=`${U.blush}30`,x.target.style.borderColor=U.rose,x.target.style.color=U.burgundy},onMouseLeave:x=>{x.target.style.background="transparent",x.target.style.borderColor=U.border,x.target.style.color=U.text},children:"Google"}),o.jsx("button",{style:j.socialBtn,onMouseEnter:x=>{x.target.style.background=`${U.blush}30`,x.target.style.borderColor=U.rose,x.target.style.color=U.burgundy},onMouseLeave:x=>{x.target.style.background="transparent",x.target.style.borderColor=U.border,x.target.style.color=U.text},children:"Apple"})]}),o.jsxs("div",{style:j.toggle,children:[n==="login"?"New to ARKE? ":"Already have account? ",o.jsx("button",{style:j.toggleLink,onClick:()=>{i(n==="login"?"register":"login"),f(""),p(""),s({name:"",email:"",phone:"",password:""})},onMouseEnter:x=>{x.target.style.color=U.burgundy},onMouseLeave:x=>{x.target.style.color=U.rose},children:n==="login"?"Create account":"Sign in"})]}),o.jsxs("div",{style:{marginTop:"24px",paddingTop:"20px",borderTop:`1px solid ${U.border}`,fontSize:"10px",color:U.textMuted,textAlign:"center",fontFamily:"'Poppins', sans-serif",letterSpacing:"0.3px",lineHeight:1.6},children:["By continuing, you agree to our ",o.jsx("br",{}),o.jsx("button",{style:{background:"none",border:"none",color:U.rose,cursor:"pointer",textDecoration:"underline",fontWeight:600,padding:0},children:"Terms of Service"})," & ",o.jsx("button",{style:{background:"none",border:"none",color:U.rose,cursor:"pointer",textDecoration:"underline",fontWeight:600,padding:0},children:"Privacy Policy"})]})]})]})}const ip=b.createContext();function pm({children:e}){const[t,r]=b.useState([]),n=b.useCallback((d,f="info",g=3e3)=>{const p=Date.now(),k={id:p,message:d,type:f};return r(w=>[...w,k]),g>0&&setTimeout(()=>{r(w=>w.filter(j=>j.id!==p))},g),p},[]),i=b.useCallback(d=>{r(f=>f.filter(g=>g.id!==d))},[]),a=(d,f)=>n(d,"success",f),s=(d,f)=>n(d,"error",f),l=(d,f)=>n(d,"info",f),c=(d,f)=>n(d,"warning",f);return o.jsxs(ip.Provider,{value:{showToast:n,removeToast:i,success:a,error:s,info:l,warning:c},children:[e,o.jsx(fm,{toasts:t,onRemove:i})]})}function Sr(){const e=ft.useContext(ip);if(!e)throw new Error("useToast must be used within ToastProvider");return e}function fm({toasts:e,onRemove:t}){return o.jsx("div",{style:{position:"fixed",top:100,right:20,zIndex:9999,display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:e.map(r=>o.jsx(gm,{toast:r,onRemove:()=>t(r.id)},r.id))})}function gm({toast:e,onRemove:t}){const r={success:{bg:"rgba(79, 195, 247, 0.95)",icon:"✓",color:"#fff"},error:{bg:"rgba(244, 67, 54, 0.95)",icon:"✕",color:"#fff"},info:{bg:"rgba(33, 150, 243, 0.95)",icon:"ℹ",color:"#fff"},warning:{bg:"rgba(255, 152, 0, 0.95)",icon:"⚠",color:"#fff"}},n=r[e.type]||r.info;return o.jsxs("div",{style:{background:n.bg,color:n.color,padding:"14px 18px",borderRadius:6,display:"flex",alignItems:"center",gap:12,boxShadow:"0 4px 12px rgba(0,0,0,0.15)",animation:"slideInRight 0.3s ease-out",fontFamily:"'Jost', sans-serif",fontSize:13},children:[o.jsx("span",{style:{fontSize:16,flexShrink:0},children:n.icon}),o.jsx("span",{style:{flex:1},children:e.message}),o.jsx("button",{onClick:t,style:{background:"none",border:"none",color:"inherit",cursor:"pointer",fontSize:16,padding:0,opacity:.7,transition:"opacity 0.2s"},onMouseEnter:i=>i.target.style.opacity=1,onMouseLeave:i=>i.target.style.opacity=.7,children:"×"}),o.jsx("style",{children:`
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
      `})]})}const ie={surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",lavender:"#d4c4e0",border:"#e8ddd4"};function ar({product:e}){const t=ht(),{addToCart:r}=tn(),{toggleWishlist:n,isInWishlist:i}=$i(),{success:a,error:s}=Sr(),[l,c]=b.useState(!1),[d,f]=b.useState("idle"),[g,p]=b.useState(!1),[k,w]=b.useState(!1),j=i((e==null?void 0:e._id)||(e==null?void 0:e.id)),x=(e==null?void 0:e.name)||(e==null?void 0:e.title)||"Product",m=(e==null?void 0:e.price)||(e==null?void 0:e.salePrice)||(e==null?void 0:e.mrp)||0,u=(e==null?void 0:e.mrp)||(e==null?void 0:e.originalPrice),h=Gn(e,0),C=Gn(e,1),$=(e==null?void 0:e._id)||(e==null?void 0:e.id),y=u&&u>m?Math.round((u-m)/u*100):0,S=async E=>{if(E.stopPropagation(),!localStorage.getItem("arke_token")){alert("Please login to add to cart");return}if(!(d==="loading"||d==="added")){f("loading");try{await r(e,1),f("added"),a("Added to cart!"),setTimeout(()=>f("idle"),2500)}catch(Q){console.error("❌ Add to cart error:",Q),s(Q.message||"Failed to add to cart"),f("error"),setTimeout(()=>f("idle"),2500)}}},N=async E=>{if(E.stopPropagation(),!localStorage.getItem("arke_token")){s("Please login to save items");return}if(!k){w(!0);try{await n(e),a(j?"Removed from wishlist":"Added to wishlist")}catch(Q){console.error("❌ Wishlist error:",Q),s(Q.message||"Failed to update wishlist")}finally{w(!1)}}},P={idle:{label:"Add to Cart",bg:`linear-gradient(135deg, ${ie.rose}, ${ie.burgundy})`,color:"white"},loading:{label:"Adding…",bg:"rgba(232,180,196,0.6)",color:"white"},added:{label:"✓ Added to Cart",bg:`linear-gradient(135deg, ${ie.rose}, ${ie.burgundy})`,color:"white"},error:{label:"Try Again",bg:"linear-gradient(135deg, #d97070, #c45c5c)",color:"white"}}[d];return o.jsxs("div",{style:{cursor:"pointer",position:"relative",overflow:"hidden",background:ie.surface,border:`1px solid ${ie.border}`,borderRadius:"12px",transition:"all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",boxShadow:l?"0 20px 48px rgba(139, 70, 84, 0.25)":"0 4px 16px rgba(0,0,0,0.08)",transform:l?"translateY(-6px)":"translateY(0)"},onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),onClick:()=>t(`/product/${$}`),children:[o.jsx("style",{children:`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .heart-beat {
          animation: pulse 0.4s ease-in-out;
        }
      `}),o.jsxs("div",{style:{position:"relative",overflow:"hidden",aspectRatio:"3/4",background:`linear-gradient(135deg, ${ie.blush}, ${ie.champagne})`},children:[h&&!g?o.jsxs(o.Fragment,{children:[o.jsx("img",{src:h,alt:x,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:l?"scale(1.08)":"scale(1)"},onError:()=>p(!0)}),C&&o.jsx("img",{src:C,alt:`${x} - alternate`,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:l?1:0,transition:"opacity 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)"},onError:()=>{}})]}):o.jsxs("div",{style:{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,background:`linear-gradient(135deg, ${ie.blush}, ${ie.lavender})`},children:[o.jsx("span",{style:{color:"rgba(232,180,196,0.3)",fontSize:48},children:"◇"}),o.jsx("span",{style:{color:ie.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:500},children:"No Image"})]}),o.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(250,248,245,0.95) 0%, rgba(250,248,245,0.5) 45%, transparent 100%)",opacity:l?1:0,transition:"opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"16px",opacity:l?1:0,transition:"opacity 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",pointerEvents:l?"auto":"none"},children:o.jsx("button",{onClick:S,disabled:d==="loading",style:{width:"100%",padding:"12px 0",background:P.bg,color:P.color,border:"none",cursor:d==="loading"?"not-allowed":"pointer",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.2px",textTransform:"uppercase",fontWeight:600,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px",boxShadow:d==="added"?"0 4px 12px rgba(232,180,196,0.35)":"0 2px 8px rgba(232,180,196,0.2)"},onMouseEnter:E=>{d!=="loading"&&(E.target.style.transform="translateY(-2px)")},onMouseLeave:E=>{E.target.style.transform="translateY(0)"},children:P.label})}),y>0&&o.jsxs("div",{style:{position:"absolute",top:12,left:12,background:`linear-gradient(135deg, ${ie.rose}, ${ie.burgundy})`,color:"white",fontFamily:"'Poppins', sans-serif",fontSize:10,fontWeight:700,letterSpacing:"0.5px",padding:"6px 11px",borderRadius:"6px",boxShadow:"0 4px 12px rgba(139, 70, 84, 0.3)",zIndex:2},children:[y,"% OFF"]}),o.jsx("button",{onClick:N,disabled:k,className:j?"heart-beat":"",style:{position:"absolute",top:12,right:12,background:j?`linear-gradient(135deg, ${ie.rose}, ${ie.burgundy})`:"rgba(250,248,245,0.8)",backdropFilter:"blur(12px)",border:j?"none":`1.5px solid ${ie.rose}`,color:j?"white":ie.rose,width:38,height:38,borderRadius:"50%",cursor:k?"not-allowed":"pointer",fontSize:16,display:"flex",alignItems:"center",justifyContent:"center",opacity:k?.6:l?1:.9,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",zIndex:2,boxShadow:j?"0 4px 12px rgba(232,180,196,0.35)":"none"},onMouseEnter:E=>{!j&&!k&&(E.target.style.background="rgba(250,248,245,0.95)",E.target.style.borderColor=ie.burgundy,E.target.style.color=ie.burgundy)},onMouseLeave:E=>{j||(E.target.style.background="rgba(250,248,245,0.8)",E.target.style.borderColor=ie.rose,E.target.style.color=ie.rose)},children:k?"...":j?"♥":"♡"})]}),o.jsxs("div",{style:{padding:"16px 14px 18px",background:ie.surface},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:16,fontWeight:400,color:ie.text,letterSpacing:"0.5px",marginBottom:10,lineHeight:1.3,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",transition:"color 0.3s"},title:x,children:x}),o.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",flexWrap:"wrap"},children:[o.jsxs("span",{style:{color:ie.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:14,fontWeight:700,letterSpacing:"0.3px"},children:["₹",Number(m).toLocaleString("en-IN")]}),u&&u>m&&o.jsxs("span",{style:{color:ie.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:12,textDecoration:"line-through",fontWeight:500,opacity:.7},children:["₹",Number(u).toLocaleString("en-IN")]})]}),(e==null?void 0:e.stock)!==void 0&&o.jsx("div",{style:{marginTop:8,fontSize:10,fontFamily:"'Poppins', sans-serif",color:(e==null?void 0:e.stock)>0?ie.rose:"#d97070",fontWeight:600,letterSpacing:"0.5px"},children:(e==null?void 0:e.stock)>0?"✓ In Stock":"Out of Stock"})]}),o.jsx("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",opacity:l?.8:0,pointerEvents:"none",transition:"opacity 0.3s",background:"rgba(255,255,255,0.1)",backdropFilter:"blur(4px)",padding:"8px 16px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:11,color:"white",fontWeight:600,letterSpacing:"1px",textTransform:"uppercase",zIndex:1},children:"Quick View"})]})}const T={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",roseGold:"#c78a7f",champagne:"#e8d4c2",lavender:"#d4c4e0",border:"#e8ddd4",borderLight:"#f0ebe5"},mm=`
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
`;function nn(){const e=b.useRef(null),[t,r]=b.useState(!1);return b.useEffect(()=>{const n=setTimeout(()=>r(!0),200),i=new IntersectionObserver(([a])=>{a.isIntersecting&&(r(!0),clearTimeout(n),i.disconnect())},{threshold:.12});return e.current&&i.observe(e.current),()=>{clearTimeout(n),i.disconnect()}},[]),[e,t]}function xm({target:e,duration:t=2e3,label:r}){const[n,i]=b.useState(0),a=b.useRef(null),s=b.useRef(!1);return b.useEffect(()=>{const l=new IntersectionObserver(([c])=>{if(c.isIntersecting&&!s.current){s.current=!0;const d=parseFloat(e),f=e.includes("."),g=d/(t/16);let p=0;const k=setInterval(()=>{p+=g,p>=d?(i(d),clearInterval(k)):i(f?parseFloat(p.toFixed(1)):Math.floor(p))},16);return()=>clearInterval(k)}},{threshold:.5});return a.current&&l.observe(a.current),()=>l.disconnect()},[e,t]),o.jsx("div",{ref:a,children:typeof n=="number"&&e.includes(".")?n.toFixed(1):n.toLocaleString()})}function hm({banners:e}){const[t,r]=b.useState(0),[n,i]=b.useState(!0),[a,s]=b.useState(0);b.useEffect(()=>{const d=()=>s(window.scrollY*.3);return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),b.useEffect(()=>{if(!(e!=null&&e.length))return;const d=setInterval(()=>{i(!1),setTimeout(()=>{r(f=>(f+1)%e.length),i(!0)},700)},6500);return()=>clearInterval(d)},[e]);const l=e==null?void 0:e[t],c=Ke((l==null?void 0:l.image)||(l==null?void 0:l.imageUrl));return o.jsxs("section",{style:{position:"relative",height:"100vh",minHeight:680,maxHeight:1080,display:"flex",alignItems:"center",overflow:"hidden",marginTop:30},children:[o.jsx("style",{children:mm}),o.jsx("div",{style:{position:"absolute",inset:0,overflow:"hidden",zIndex:0},children:c?o.jsx("img",{src:c,alt:(l==null?void 0:l.title)||"Collection",className:"hero-bg-img",style:{opacity:n?1:0,transform:`translateY(${a}px)`,animation:"heroBgZoom 8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards"}},t):o.jsx("div",{style:{position:"absolute",inset:0,background:`linear-gradient(135deg, ${T.blush} 0%, ${T.champagne} 40%, ${T.lavender} 100%)`}})}),o.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,background:"linear-gradient(105deg, rgba(10,5,15,0.72) 0%, rgba(10,5,15,0.55) 38%, rgba(10,5,15,0.18) 65%, transparent 100%)"}}),o.jsx("div",{style:{position:"absolute",inset:0,zIndex:1,background:"linear-gradient(to top, rgba(10,5,15,0.55) 0%, transparent 40%)"}}),o.jsx("div",{style:{position:"absolute",bottom:0,left:0,right:0,height:"35%",zIndex:1,background:"linear-gradient(to top, rgba(139,70,84,0.22) 0%, transparent 100%)"}}),o.jsx("div",{style:{position:"absolute",left:52,top:"15%",bottom:"15%",width:1,background:"linear-gradient(to bottom, transparent, rgba(232,180,196,0.55) 30%, rgba(232,180,196,0.55) 70%, transparent)",zIndex:2,animation:"floatUp 4s ease-in-out infinite"}}),o.jsxs("div",{className:"hero-content-wrap",style:{position:"relative",zIndex:3,padding:"0 80px 0 84px",maxWidth:720,width:"100%"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:26,animation:"heroFadeLeft 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.2s forwards",opacity:0},children:[o.jsx("div",{style:{width:36,height:1.5,background:`linear-gradient(to right, ${T.rose}, ${T.burgundy})`,borderRadius:2}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10.5,letterSpacing:"3px",textTransform:"uppercase",color:T.rose,fontWeight:600},children:(l==null?void 0:l.eyebrow)||"Timeless Collection"})]}),o.jsx("h1",{className:"hero-h1 hero-h1-text",style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(52px, 6.5vw, 100px)",fontWeight:300,lineHeight:1,letterSpacing:"-1px",marginBottom:28,color:"#fff",animation:"heroFadeUp 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.4s forwards",opacity:0},children:l!=null&&l.title?o.jsx("span",{style:{background:"linear-gradient(135deg, #fff 0%, rgba(232,180,196,0.9) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:l.title}):o.jsxs(o.Fragment,{children:[o.jsx("span",{style:{display:"block",background:"linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.85) 100%)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Wear it"}),o.jsx("em",{style:{fontStyle:"italic",display:"block",background:`linear-gradient(135deg, ${T.rose} 0%, ${T.blush} 50%, ${T.champagne} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"your way"})]})}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:26,animation:"heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.55s forwards",opacity:0},children:[o.jsx("div",{style:{width:52,height:1,background:"linear-gradient(to right, rgba(232,180,196,0.8), transparent)"}}),o.jsx("div",{style:{width:5,height:5,background:T.rose,borderRadius:"50%",boxShadow:"0 0 10px rgba(232,180,196,0.6)",animation:"glowPulse 2s ease-in-out infinite"}}),o.jsx("div",{style:{width:52,height:1,background:"linear-gradient(to left, rgba(232,180,196,0.8), transparent)"}})]}),o.jsx("p",{style:{color:"rgba(255,255,255,0.72)",fontFamily:"'Poppins', sans-serif",fontSize:14.5,lineHeight:1.85,marginBottom:44,maxWidth:480,letterSpacing:"0.3px",fontWeight:300,animation:"heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.65s forwards",opacity:0},children:(l==null?void 0:l.description)||"Handcrafted luxury jewellery for every moment. Waterproof, tarnish-proof, and ethically sourced."}),o.jsxs("div",{className:"hero-cta-row",style:{display:"flex",gap:16,alignItems:"center",flexWrap:"wrap",animation:"heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.75s forwards",opacity:0},children:[o.jsx(kc,{to:"/new-collection",primary:!0,children:"Explore Now"}),o.jsx(kc,{to:"/products",children:"Shop All"})]}),o.jsx("div",{className:"hero-stats-row",style:{display:"flex",gap:40,marginTop:52,paddingTop:28,borderTop:"1px solid rgba(232,180,196,0.2)",animation:"heroFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.9s forwards",opacity:0},children:[["2000","Designs"],["50000","Customers"],["4.9","Rating"]].map(([d,f])=>o.jsxs("div",{children:[o.jsxs("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:30,fontWeight:400,background:`linear-gradient(135deg, ${T.rose}, ${T.champagne})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",lineHeight:1},children:[o.jsx(xm,{target:d,duration:2e3,label:f}),f==="Rating"?"★":"+"]}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9.5,letterSpacing:"1.8px",textTransform:"uppercase",color:"rgba(255,255,255,0.45)",marginTop:7,fontWeight:500},children:f})]},f))})]},t),o.jsxs("div",{style:{position:"absolute",right:72,top:"50%",transform:"translateY(-50%)",zIndex:3,display:"flex",flexDirection:"column",alignItems:"center",gap:16,opacity:.85,animation:"floatLeftRight 4s ease-in-out infinite"},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,letterSpacing:"3px",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",writingMode:"vertical-rl",transform:"rotate(180deg)"},children:(l==null?void 0:l.tag)||"New Arrivals"}),o.jsx("div",{style:{width:1,height:64,background:"linear-gradient(to bottom, transparent, rgba(232,180,196,0.4))"}})]}),(e==null?void 0:e.length)>1&&o.jsx("div",{style:{position:"absolute",bottom:44,left:"50%",transform:"translateX(-50%)",display:"flex",gap:10,zIndex:4,alignItems:"center"},children:e.map((d,f)=>o.jsx("button",{onClick:()=>{i(!1),setTimeout(()=>{r(f),i(!0)},300)},style:{width:f===t?32:8,height:2.5,background:f===t?`linear-gradient(90deg, ${T.rose}, ${T.champagne})`:"rgba(255,255,255,0.25)",border:"none",cursor:"pointer",transition:"all 0.45s cubic-bezier(0.34,1.56,0.64,1)",borderRadius:4,padding:0,animation:f===t?"slideIndicatorPulse 2s ease-in-out infinite":"none"},onMouseEnter:g=>{f!==t&&(g.target.style.background="rgba(255,255,255,0.4)")},onMouseLeave:g=>{f!==t&&(g.target.style.background="rgba(255,255,255,0.25)")}},f))}),o.jsxs("div",{style:{position:"absolute",bottom:36,left:84,zIndex:4,display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:8.5,letterSpacing:"2.5px",color:"rgba(255,255,255,0.35)",textTransform:"uppercase",writingMode:"vertical-rl",transform:"rotate(180deg)"},children:"Scroll"}),o.jsx("div",{style:{width:1,height:48,background:"linear-gradient(to bottom, rgba(232,180,196,0.9), transparent)",animation:"scrollLineGrow 2s ease-in-out infinite",borderRadius:2,transformOrigin:"top center"}}),o.jsx("div",{style:{color:T.rose,fontSize:16,lineHeight:1,animation:"scrollBounce 1.8s ease-in-out infinite",filter:"drop-shadow(0 0 6px rgba(232,180,196,0.8))"},children:"↓"})]}),(e==null?void 0:e.length)>1&&o.jsxs("div",{style:{position:"absolute",bottom:44,right:72,zIndex:4,display:"flex",alignItems:"center",gap:8},children:[o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:400,color:T.rose,lineHeight:1},children:String(t+1).padStart(2,"0")}),o.jsxs("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,color:"rgba(255,255,255,0.25)",letterSpacing:"1px"},children:["/ ",String(e.length).padStart(2,"0")]})]})]})}function kc({to:e,children:t,primary:r}){const[n,i]=b.useState(!1),[a,s]=b.useState({x:0,y:0}),l=b.useRef(null),c=d=>{var g;if(!r)return;const f=(g=l.current)==null?void 0:g.getBoundingClientRect();if(f){const p=d.clientX-f.left-f.width/2,k=d.clientY-f.top-f.height/2;s({x:p*.2,y:k*.2})}};return o.jsxs(Be,{ref:l,to:e,onMouseEnter:()=>i(!0),onMouseLeave:()=>{i(!1),s({x:0,y:0})},onMouseMove:c,style:{display:"inline-flex",alignItems:"center",gap:10,padding:r?"15px 36px":"14px 30px",background:r?n?`linear-gradient(135deg, ${T.burgundy}, #a85060)`:`linear-gradient(135deg, ${T.rose}, ${T.roseGold})`:"rgba(255,255,255,0.08)",color:r||n?"#fff":"rgba(255,255,255,0.75)",border:r?"none":`1px solid ${n?"rgba(255,255,255,0.5)":"rgba(255,255,255,0.2)"}`,backdropFilter:r?"none":"blur(12px)",textDecoration:"none",fontFamily:"'Poppins', sans-serif",fontSize:10.5,letterSpacing:"2px",textTransform:"uppercase",fontWeight:r?600:500,transition:"all 0.35s cubic-bezier(0.34,1.56,0.64,1)",transform:n?`translateY(-3px) translate(${a.x}px, ${a.y}px)`:"translateY(0)",boxShadow:r&&n?"0 12px 32px rgba(232,180,196,0.45)":r?"0 4px 16px rgba(232,180,196,0.25)":"none",cursor:"pointer",borderRadius:"2px"},children:[r&&o.jsx("span",{style:{fontSize:12,opacity:.9},children:"✦"}),t,r&&o.jsx("span",{style:{fontSize:13},children:"→"})]})}function ym(){const[e,t]=nn(),r=[{icon:"💎",label:"Premium Quality",sub:"Certified & Pure"},{icon:"💧",label:"Waterproof",sub:"Everyday Wear"},{icon:"✨",label:"Tarnish-Proof",sub:"Lasts 2+ Years"},{icon:"🌍",label:"Ethical",sub:"Responsibly Sourced"}];return o.jsx("div",{ref:e,style:{background:T.surface,borderTop:`1px solid ${T.border}`,borderBottom:`1px solid ${T.border}`,padding:"52px 80px",display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:32,opacity:t?1:0,transform:t?"none":"translateY(20px)",transition:"opacity 0.7s, transform 0.7s cubic-bezier(0.34,1.56,0.64,1)"},children:r.map((n,i)=>o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center",padding:"0 16px",animation:t?`staggerFadeUp 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i*80}ms backwards`:"none"},children:[o.jsx("div",{style:{fontSize:32,marginBottom:14,animation:"floatUp 3s ease-in-out infinite"},children:n.icon}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,letterSpacing:"1px",textTransform:"uppercase",color:T.text,fontWeight:600,marginBottom:6},children:n.label}),o.jsx("div",{style:{color:T.textMuted,fontSize:12,fontFamily:"'Poppins', sans-serif",fontWeight:400},children:n.sub})]},i))})}function Js({eyebrow:e,title:t,cta:r,ctaLink:n}){return o.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:52,flexWrap:"wrap",gap:24,animation:"staggerFadeUp 0.7s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:16},children:[o.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(to right, ${T.rose}, ${T.burgundy})`}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:T.burgundy,fontWeight:600},children:e})]}),o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(32px, 4vw, 52px)",fontWeight:300,color:T.text,letterSpacing:"-0.5px",lineHeight:1.1,background:`linear-gradient(135deg, ${T.text}, ${T.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:t})]}),r&&o.jsx(ap,{to:n,children:r})]})}function ap({to:e,children:t}){const[r,n]=b.useState(!1);return o.jsxs(Be,{to:e,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:r?T.burgundy:T.rose,textDecoration:"none",display:"inline-flex",alignItems:"center",gap:8,paddingBottom:2,borderBottom:`1.5px solid ${r?T.burgundy:T.rose}`,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",fontWeight:600},children:[t," →"]})}function bm({cats:e}){const[t,r]=nn(),n=ht();return e!=null&&e.length?o.jsxs("section",{ref:t,style:{padding:"100px 80px",background:T.surface,opacity:r?1:0,transform:r?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsx(Js,{eyebrow:"Explore",title:"Shop by Category",cta:"View All",ctaLink:"/products"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:`repeat(${Math.min(e.length,5)}, 1fr)`,gap:20},children:e.slice(0,5).map((i,a)=>{const s=oi(i),l=Ku(i),c=Xs(i);return o.jsx(vm,{name:s,img:l,delay:a*80,onClick:()=>c&&n(`/products?category=${c}`)},a)})})]}):null}function vm({name:e,img:t,onClick:r,delay:n}){const[i,a]=b.useState(!1);return o.jsxs("div",{onClick:r,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),style:{position:"relative",cursor:"pointer",overflow:"hidden",aspectRatio:"2/3",borderRadius:"8px",transform:i?"translateY(-8px) scale(1.01)":"translateY(0) scale(1)",boxShadow:i?"0 24px 48px rgba(139,70,84,0.25), inset 0 1px 0 rgba(255,255,255,0.3)":"0 8px 20px rgba(0,0,0,0.08)",transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",transitionDelay:`${n}ms`,animation:`cardEntrance 0.6s cubic-bezier(0.34,1.56,0.64,1) ${n}ms backwards`},children:[t?o.jsx("img",{src:t,alt:e,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",transform:i?"scale(1.1)":"scale(1)"}}):o.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${T.blush}, ${T.champagne})`}}),o.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(to top, rgba(250,248,245,0.95) 0%, rgba(250,248,245,0.5) 50%, transparent 100%)",transition:"background 0.4s"}}),o.jsxs("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"28px 20px"},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:22,fontWeight:400,color:T.text,letterSpacing:1,marginBottom:10},children:e}),o.jsx("div",{style:{width:i?52:24,height:2,background:`linear-gradient(90deg, ${T.rose}, ${T.burgundy})`,transition:"width 0.4s cubic-bezier(0.34,1.56,0.64,1)",borderRadius:1}})]}),o.jsx("div",{style:{position:"absolute",top:16,right:16,background:"rgba(232,180,196,0.9)",backdropFilter:"blur(12px)",padding:"8px 14px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:9,fontWeight:700,letterSpacing:"1.2px",textTransform:"uppercase",color:T.text,opacity:i?1:.7,transform:i?"scale(1.05)":"scale(1)",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},children:"Shop ↗"})]})}function jc({eyebrow:e,title:t,products:r,ctaLink:n,bg:i}){const[a,s]=nn();return r!=null&&r.length?o.jsxs("section",{ref:a,style:{padding:"100px 80px",background:i||T.bg,opacity:s?1:0,transform:s?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsx(Js,{eyebrow:e,title:t,cta:"View All",ctaLink:n}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:24},children:r.slice(0,4).map((l,c)=>o.jsx("div",{style:{animation:`cardEntrance 0.6s cubic-bezier(0.34,1.56,0.64,1) ${c*100}ms backwards`},children:o.jsx(ar,{product:l})},l._id||c))})]}):null}function wm({blogs:e}){const[t,r]=nn(),n=ht();return e!=null&&e.length?o.jsxs("section",{ref:t,style:{padding:"120px 80px",background:T.surface,borderTop:`1.5px solid ${T.border}`,borderBottom:`1.5px solid ${T.border}`,opacity:r?1:0,transform:r?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsx("style",{children:`
        @keyframes blogFadeUp { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: translateY(0); } }
        .featured-blog { animation: blogFadeUp 0.8s cubic-bezier(0.34,1.56,0.64,1) 0.15s both; }
        .side-blog { animation: blogFadeUp 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        .compact-blog { animation: blogFadeUp 0.8s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        @media (max-width: 1024px) { .blog-grid { grid-template-columns: 1fr; gap: 32px; } }
      `}),o.jsxs("div",{style:{marginBottom:80},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[o.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(to right, ${T.rose}, ${T.burgundy})`,borderRadius:2}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10.5,letterSpacing:"2.5px",textTransform:"uppercase",color:T.burgundy,fontWeight:600},children:"Stories & Inspiration"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:40,flexWrap:"wrap"},children:[o.jsxs("div",{style:{maxWidth:480},children:[o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(36px, 4vw, 56px)",fontWeight:300,letterSpacing:"-0.5px",lineHeight:1.1,marginBottom:20,background:`linear-gradient(135deg, ${T.text}, ${T.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"From the Journal"}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13.5,color:T.textMuted,lineHeight:1.8,letterSpacing:"0.3px"},children:"Explore stories about craftsmanship, styling tips, and the art of wearing jewellery with confidence."})]}),o.jsx(ap,{to:"/blog",children:"All Stories"})]})]}),o.jsxs("div",{className:"blog-grid",style:{display:"grid",gridTemplateColumns:"1.6fr 1fr",gap:48,alignItems:"start"},children:[e[0]&&o.jsx(km,{blog:e[0],onClick:()=>n("/blog")}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:32},children:e.slice(1,4).map((i,a)=>o.jsx(jm,{blog:i,delay:a*100,onClick:()=>n("/blog")},a))})]}),e.length>4&&o.jsxs("div",{style:{marginTop:80,paddingTop:60,borderTop:`1px solid ${T.borderLight}`},children:[o.jsx("h3",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,letterSpacing:"1.8px",textTransform:"uppercase",color:T.textMuted,fontWeight:600,marginBottom:40},children:"More Stories"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:32},children:e.slice(4,7).map((i,a)=>o.jsx(Sm,{blog:i,delay:a*80,onClick:()=>n("/blog")},a))})]})]}):null}function km({blog:e,onClick:t}){var s;const[r,n]=b.useState(!1),i=Ke(e.image||e.thumbnail||e.featuredImage),a=e.readTime||Math.ceil((((s=e.content)==null?void 0:s.length)||0)/200);return o.jsxs("div",{onClick:t,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),className:"featured-blog glow-on-hover",style:{cursor:"pointer",overflow:"hidden",borderRadius:"12px",position:"relative",height:"100%",display:"flex",flexDirection:"column",transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",transform:r?"translateY(-8px)":"translateY(0)"},children:[o.jsxs("div",{style:{position:"relative",aspectRatio:"4/3",overflow:"hidden",marginBottom:32,borderRadius:"8px",boxShadow:r?"0 24px 48px rgba(139,70,84,0.25)":"0 12px 28px rgba(139,70,84,0.12)",transition:"box-shadow 0.4s"},children:[i?o.jsx("img",{src:i,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.7s cubic-bezier(0.34,1.56,0.64,1)",transform:r?"scale(1.08)":"scale(1)"}}):o.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${T.blush}, ${T.lavender})`}}),o.jsxs("div",{style:{position:"absolute",top:20,left:20,background:"rgba(232,180,196,0.95)",backdropFilter:"blur(12px)",padding:"8px 16px",borderRadius:"24px",fontFamily:"'Poppins', sans-serif",fontSize:9,fontWeight:700,letterSpacing:"1.2px",textTransform:"uppercase",color:T.text,display:"flex",alignItems:"center",gap:6,zIndex:10},children:[o.jsx("span",{children:"✦"}),"Featured"]}),o.jsxs("div",{style:{position:"absolute",bottom:20,right:20,background:"rgba(255,255,255,0.95)",backdropFilter:"blur(12px)",padding:"8px 14px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:8,fontWeight:600,color:T.text},children:[a," min read"]})]}),o.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column"},children:[o.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:400,color:r?T.burgundy:T.text,lineHeight:1.4,marginBottom:16,transition:"color 0.3s"},children:e.title}),e.excerpt&&o.jsx("p",{style:{color:T.textMuted,fontSize:13,fontFamily:"'Poppins', sans-serif",lineHeight:1.8,marginBottom:24,fontWeight:400,flex:1},children:e.excerpt.length>140?e.excerpt.slice(0,140)+"...":e.excerpt}),o.jsx("div",{style:{display:"flex",alignItems:"center",paddingTop:16,borderTop:`1px solid ${T.borderLight}`},children:e.author&&o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12},children:[o.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:`linear-gradient(135deg, ${T.rose}, ${T.burgundy})`,display:"flex",alignItems:"center",justifyContent:"center",color:"white",fontSize:12,fontWeight:700},children:e.author.charAt(0).toUpperCase()}),o.jsxs("div",{children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,fontWeight:600,color:T.text},children:e.author}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,color:T.textMuted},children:e.date||e.createdAt?new Date(e.date||e.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""})]})]})})]})]})}function jm({blog:e,onClick:t,delay:r}){const[n,i]=b.useState(!1),a=Ke(e.image||e.thumbnail||e.featuredImage);return o.jsxs("div",{onClick:t,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"side-blog glow-on-hover",style:{cursor:"pointer",display:"grid",gridTemplateColumns:"120px 1fr",gap:16,padding:16,background:T.bg,borderRadius:"8px",border:`1px solid ${T.borderLight}`,transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",transform:n?"translateX(6px)":"translateX(0)",animationDelay:`${r}ms`},children:[o.jsx("div",{style:{aspectRatio:"1",overflow:"hidden",borderRadius:"6px",flexShrink:0},children:a?o.jsx("img",{src:a,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s cubic-bezier(0.34,1.56,0.64,1)",transform:n?"scale(1.1)":"scale(1)"}}):o.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${T.blush}, ${T.champagne})`}})}),o.jsxs("div",{style:{display:"flex",flexDirection:"column",justifyContent:"space-between",minHeight:120},children:[o.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:16,fontWeight:400,color:n?T.burgundy:T.text,lineHeight:1.3,marginBottom:8,transition:"color 0.3s"},children:e.title.length>50?e.title.slice(0,50)+"...":e.title}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",fontSize:10},children:[o.jsx("span",{style:{color:T.textMuted,fontFamily:"'Poppins', sans-serif"},children:e.date||e.createdAt?new Date(e.date||e.createdAt).toLocaleDateString("en-IN",{month:"short",day:"numeric"}):""}),o.jsx("span",{style:{color:T.rose,fontWeight:600},children:"→"})]})]})]})}function Sm({blog:e,onClick:t,delay:r}){const[n,i]=b.useState(!1),a=Ke(e.image||e.thumbnail||e.featuredImage);return o.jsxs("div",{onClick:t,onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),className:"compact-blog glow-on-hover",style:{cursor:"pointer",transition:"transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",transform:n?"translateY(-6px)":"translateY(0)",animationDelay:`${r}ms`},children:[o.jsxs("div",{style:{overflow:"hidden",aspectRatio:"16/10",marginBottom:20,position:"relative",borderRadius:"8px",boxShadow:n?"0 16px 32px rgba(139,70,84,0.2)":"0 8px 16px rgba(139,70,84,0.08)",transition:"box-shadow 0.4s"},children:[a?o.jsx("img",{src:a,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s cubic-bezier(0.34,1.56,0.64,1)",transform:n?"scale(1.07)":"scale(1)"}}):o.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${T.blush}, ${T.lavender})`}}),o.jsx("div",{style:{position:"absolute",bottom:12,left:12,background:"rgba(232,180,196,0.9)",backdropFilter:"blur(12px)",padding:"6px 12px",borderRadius:"20px",fontFamily:"'Poppins', sans-serif",fontSize:8,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",color:T.text},children:e.category||"Jewellery"})]}),o.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,fontWeight:400,color:n?T.burgundy:T.text,lineHeight:1.4,marginBottom:12,transition:"color 0.3s"},children:e.title}),e.excerpt&&o.jsxs("p",{style:{color:T.textMuted,fontSize:12,fontFamily:"'Poppins', sans-serif",lineHeight:1.6,marginBottom:16,fontWeight:400,minHeight:36},children:[e.excerpt.slice(0,80),"..."]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",paddingTop:12,borderTop:`1px solid ${T.borderLight}`},children:[o.jsx("span",{style:{color:T.textMuted,fontSize:10,fontFamily:"'Poppins', sans-serif",fontWeight:500},children:e.date||e.createdAt?new Date(e.date||e.createdAt).toLocaleDateString("en-IN",{day:"numeric",month:"short"}):""}),o.jsx("span",{style:{color:T.rose,fontSize:10,fontFamily:"'Poppins', sans-serif",letterSpacing:"1px",textTransform:"uppercase",fontWeight:700},children:"Read →"})]})]})}function Cm(){const[e,t]=nn(),[r,n]=b.useState(""),[i,a]=b.useState(!1),[s,l]=b.useState(!1),c=async()=>{if(!r||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(r)){alert("Please enter a valid email");return}l(!0);try{await new Promise(d=>setTimeout(d,500)),a(!0),n(""),setTimeout(()=>a(!1),4e3)}catch(d){console.error(d)}finally{l(!1)}};return o.jsx("section",{ref:e,style:{padding:"80px 40px",background:T.bg,borderTop:`1px solid ${T.border}`,opacity:t?1:0,transform:t?"none":"translateY(24px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:o.jsxs("div",{style:{maxWidth:600,margin:"0 auto",textAlign:"center"},children:[o.jsx("div",{style:{display:"inline-block",marginBottom:20,animation:"floatUp 3s ease-in-out infinite"},children:o.jsx("span",{style:{color:T.rose,fontSize:28},children:"✨"})}),o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(28px, 3.5vw, 48px)",fontWeight:300,marginBottom:14,lineHeight:1.2,background:`linear-gradient(135deg, ${T.text}, ${T.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Stay in the Loop"}),o.jsx("p",{style:{color:T.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:14,marginBottom:36,lineHeight:1.7},children:"Get exclusive access to new collections, style tips, and special offers. Join our community of elegant jewellery lovers."}),i?o.jsx("div",{style:{padding:"16px",background:"linear-gradient(135deg, rgba(232,180,196,0.1), rgba(139,70,84,0.08))",borderRadius:"6px",border:`1px solid ${T.rose}`,color:T.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:13,fontWeight:600,animation:"cardEntrance 0.4s cubic-bezier(0.34,1.56,0.64,1)"},children:"✓ Welcome! Check your email for exclusive offers."}):o.jsxs("div",{style:{display:"flex",maxWidth:450,margin:"0 auto",boxShadow:"0 8px 24px rgba(139,70,84,0.15)",borderRadius:"6px",overflow:"hidden"},children:[o.jsx("input",{type:"email",placeholder:"your@email.com",value:r,onChange:d=>n(d.target.value),onKeyPress:d=>d.key==="Enter"&&c(),style:{flex:1,padding:"14px 20px",background:T.surface,border:"none",color:T.text,fontFamily:"'Poppins', sans-serif",fontSize:12,outline:"none",letterSpacing:"0.5px"}}),o.jsx("button",{onClick:c,disabled:s,style:{padding:"14px 28px",background:`linear-gradient(135deg, ${T.rose}, ${T.burgundy})`,border:"none",color:"white",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,cursor:s?"not-allowed":"pointer",opacity:s?.7:1,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:d=>{s||(d.target.style.transform="translateY(-2px)",d.target.style.boxShadow="0 12px 32px rgba(232,180,196,0.35)")},onMouseLeave:d=>{d.target.style.transform="translateY(0)",d.target.style.boxShadow="none"},children:s?"...":"Subscribe"})]}),o.jsx("p",{style:{color:T.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,marginTop:16,letterSpacing:"0.5px"},children:"We respect your privacy. Unsubscribe anytime."})]})})}function $m({products:e}){const[t,r]=nn();return e!=null&&e.length?o.jsxs("section",{ref:t,style:{padding:"100px 80px",background:T.bg,opacity:r?1:0,transform:r?"none":"translateY(32px)",transition:"opacity 0.8s, transform 0.8s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsx(Js,{eyebrow:"Complete Collection",title:"All Products",cta:"Explore More",ctaLink:"/products"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:24},children:e.slice(0,12).map((n,i)=>o.jsx("div",{style:{animation:`cardEntrance 0.6s cubic-bezier(0.34,1.56,0.64,1) ${i%4*100}ms backwards`},children:o.jsx(ar,{product:n})},n._id||i))})]}):null}function zm(){return o.jsxs("div",{style:{background:T.bg,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:24},children:[o.jsx("style",{children:"@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } .loader { animation: spin 1s linear infinite; }"}),o.jsx("div",{className:"loader",style:{width:48,height:48,border:`2px solid ${T.borderLight}`,borderTopColor:T.rose,borderRadius:"50%"}}),o.jsx("div",{style:{color:T.textMuted,fontSize:13,letterSpacing:"1.5px",textTransform:"uppercase",fontFamily:"'Poppins', sans-serif",fontWeight:600},children:"Curating Your Experience..."})]})}function Nm({error:e,onRetry:t}){return o.jsxs("div",{style:{background:T.bg,minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:40,textAlign:"center"},children:[o.jsx("div",{style:{color:T.rose,fontSize:56,marginBottom:24,animation:"floatUp 2s ease-in-out infinite"},children:"✨"}),o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:36,fontWeight:300,color:T.text,marginBottom:16},children:"Oops, Something Went Wrong"}),o.jsx("p",{style:{color:T.textMuted,fontSize:14,fontFamily:"'Poppins', sans-serif",lineHeight:1.7,maxWidth:500,marginBottom:32},children:e||"We're having trouble loading our collection. Please try again."}),o.jsx("button",{onClick:t,style:{padding:"12px 32px",background:`linear-gradient(135deg, ${T.rose}, ${T.burgundy})`,border:"none",color:"white",fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,cursor:"pointer",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:r=>{r.target.style.transform="translateY(-2px)",r.target.style.boxShadow="0 12px 32px rgba(232,180,196,0.35)"},onMouseLeave:r=>{r.target.style.transform="translateY(0)",r.target.style.boxShadow="none"},children:"Try Again"})]})}function Pm(){const[e,t]=b.useState({banners:[],cats:[],latest:[],best:[],allProducts:[],blogs:[]}),[r,n]=b.useState(!0),[i,a]=b.useState(null),s=async()=>{try{n(!0),a(null);const[l,c,d,f,g,p]=await Promise.allSettled([oe.getBanners(),oe.getCategories(),oe.getLatestProducts(),oe.getBestSellers(),oe.getAllProducts(),oe.getBlogs()]),k=[l,c,d,f,g,p].find(h=>{var C,$;return h.status==="fulfilled"&&(($=(C=h.value)==null?void 0:C.message)==null?void 0:$.includes("Cannot connect"))});if(k)throw new Error(k.value.message);const w=_e(d.value,"products","data"),j=_e(f.value,"products","data"),x=_e(g.value,"products","data"),m=x.length>0?x:[...w,...j],u=Array.from(new Map(m.map(h=>[h._id||h.id,h])).values());t({banners:_e(l.value,"banners","data"),cats:_e(c.value,"categories","data"),latest:w,best:j,allProducts:u,blogs:_e(p.value,"blogs","data")})}catch(l){console.error("❌ Homepage load failed:",l),a(l.message||"Failed to load content. Please check your connection.")}finally{n(!1)}};return b.useEffect(()=>{s()},[]),r?o.jsx(zm,{}):i?o.jsx(Nm,{error:i,onRetry:s}):o.jsxs("div",{style:{background:T.bg,minHeight:"100vh"},children:[o.jsx(hm,{banners:e.banners}),o.jsx(ym,{}),o.jsx(bm,{cats:e.cats}),o.jsx(jc,{eyebrow:"Just Arrived",title:"New Collection",products:e.latest,ctaLink:"/new-collection",bg:T.surface}),o.jsx(jc,{eyebrow:"Most Loved",title:"Best Sellers",products:e.best,ctaLink:"/best-sellers",bg:T.bg}),o.jsx($m,{products:e.allProducts}),o.jsx(wm,{blogs:e.blogs}),o.jsx(Cm,{})]})}const $e={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4"};function Em(){const[e,t]=b.useState([]),[r,n]=b.useState(!0),[i,a]=b.useState("default");b.useEffect(()=>{window.scrollTo(0,0),oe.getLatestProducts().then(l=>{t(_e(l,"products","data")),n(!1)}).catch(()=>n(!1))},[]);const s=[...e].sort((l,c)=>i==="price-asc"?(l.price||0)-(c.price||0):i==="price-desc"?(c.price||0)-(l.price||0):0);return o.jsxs("div",{style:{background:$e.bg,minHeight:"100vh",paddingTop:"120px"},children:[o.jsx("style",{children:`
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
          border: 3px solid ${$e.border};
          border-top-color: ${$e.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
      `}),o.jsxs("div",{className:"new-collection-hero",style:{padding:"80px 80px 60px",borderBottom:`1.5px solid ${$e.border}`,display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:24},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"2px",textTransform:"uppercase",color:$e.burgundy,marginBottom:"16px",fontWeight:600},children:"✨ Latest Arrivals"}),o.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(40px, 5vw, 72px)",fontWeight:300,color:$e.text,margin:0,background:`linear-gradient(135deg, ${$e.text}, ${$e.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"New Collection"}),o.jsx("p",{style:{color:$e.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"14px",marginTop:"12px",lineHeight:"1.6",fontWeight:400,maxWidth:480},children:"Fresh pieces, new stories. Discover what just arrived this season."})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[o.jsx("span",{style:{color:$e.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:600},children:"Sort by"}),o.jsxs("select",{value:i,onChange:l=>a(l.target.value),style:{background:$e.surface,border:`1.5px solid ${$e.border}`,color:$e.text,padding:"10px 14px",fontFamily:"'Poppins', sans-serif",fontSize:"11px",cursor:"pointer",outline:"none",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",fontWeight:500},onFocus:l=>{l.target.style.borderColor=$e.rose,l.target.style.boxShadow=`0 0 0 3px ${$e.blush}40`},onBlur:l=>{l.target.style.borderColor=$e.border,l.target.style.boxShadow="none"},children:[o.jsx("option",{value:"default",children:"Newest First"}),o.jsx("option",{value:"price-asc",children:"Price: Low to High"}),o.jsx("option",{value:"price-desc",children:"Price: High to Low"})]})]})]}),!r&&o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1px",color:$e.textMuted,textTransform:"uppercase",paddingLeft:"80px",marginTop:"16px",fontWeight:600},children:[s.length," piece",s.length!==1?"s":""," available"]}),r?o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"120px 40px",gap:20},children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("span",{style:{color:$e.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:"18px",fontStyle:"italic",fontWeight:300},children:"Loading collection…"})]}):o.jsx("div",{className:"new-collection-grid",style:{padding:"60px 80px",display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"24px"},children:s.map((l,c)=>o.jsx(ar,{product:l},l._id||c))})]})}const K={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function Tm(){const[e,t]=b.useState([]),[r,n]=b.useState(!0),[i,a]=b.useState("default"),[s,l]=b.useState(!1);b.useEffect(()=>{window.scrollTo(0,0),oe.getBestSellers().then(d=>{t(_e(d,"products","data")),n(!1)}).catch(()=>n(!1))},[]);const c=[...e].sort((d,f)=>i==="price-asc"?(d.price||0)-(f.price||0):i==="price-desc"?(f.price||0)-(d.price||0):0);return o.jsxs("div",{style:{background:K.bg,minHeight:"100vh",paddingTop:106},children:[o.jsx("style",{children:`
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
          border-bottom: 1px solid ${K.border};
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
          background: linear-gradient(to right, ${K.rose}, ${K.burgundy});
          border-radius: 2px;
        }
        .bs-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${K.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .bs-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -1px;
          background: linear-gradient(135deg, ${K.text} 0%, ${K.burgundy} 100%);
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
          color: ${K.textMuted};
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
          background: linear-gradient(135deg, ${K.rose}, ${K.burgundy});
          animation: dotPulse 2s ease-in-out infinite;
          flex-shrink: 0;
        }
        .bs-badge-label {
          font-family: 'Poppins', sans-serif;
          font-size: 9.5px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: ${K.burgundy};
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
          color: ${K.textMuted};
          font-weight: 600;
          white-space: nowrap;
        }
        .bs-sort-select {
          background: ${K.surface};
          border: 1px solid ${K.border};
          color: ${K.text};
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
          border-color: ${K.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }

        /* ── Toolbar (count + decorative line) ── */
        .bs-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 80px;
          border-bottom: 1px solid ${K.borderLight};
          animation: fadeInUp 0.5s ease 0.3s both;
        }
        .bs-count {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 1.8px;
          color: ${K.textMuted};
          text-transform: uppercase;
          font-weight: 600;
        }
        .bs-count strong {
          color: ${K.burgundy};
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
          background: linear-gradient(to right, transparent, ${K.rose});
        }
        .bs-toolbar-dec-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: ${K.rose};
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
          color: ${K.textMuted};
          font-style: italic;
        }
        .bs-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${K.borderLight};
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
          border: 2px solid ${K.borderLight};
          border-top-color: ${K.rose};
          border-right-color: ${K.burgundy};
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
        }
        .bs-loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          color: ${K.textMuted};
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
          background: ${K.surface};
          border: 1px solid ${K.borderLight};
        }
        .bs-skeleton-img {
          aspect-ratio: 3/4;
          background: linear-gradient(
            90deg,
            ${K.borderLight} 25%,
            ${K.champagne}50 50%,
            ${K.borderLight} 75%
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
            ${K.borderLight} 25%,
            ${K.champagne}50 50%,
            ${K.borderLight} 75%
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
      `}),o.jsxs("div",{className:"bs-hero",children:[o.jsxs("div",{style:{position:"relative",zIndex:2},children:[o.jsxs("div",{className:"bs-eyebrow",children:[o.jsx("div",{className:"bs-eyebrow-line"}),o.jsx("span",{className:"bs-eyebrow-text",children:"Most Loved"})]}),o.jsx("h1",{className:"bs-heading",children:"Best Sellers"}),o.jsx("p",{className:"bs-sub",children:"The pieces our community keeps coming back for — handpicked for quality, craftsmanship & timeless elegance."}),o.jsxs("div",{className:"bs-badge",children:[o.jsx("div",{className:"bs-badge-dot"}),o.jsx("span",{className:"bs-badge-label",children:"Customer Favorites"}),!r&&o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{width:1,height:12,background:"rgba(139,70,84,0.2)",margin:"0 2px"}}),o.jsxs("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:14,color:K.burgundy,fontWeight:400,fontStyle:"italic"},children:[c.length," pieces"]})]})]})]}),o.jsxs("div",{className:"bs-controls",children:[o.jsx("span",{className:"bs-sort-label",children:"Sort by"}),o.jsxs("select",{className:"bs-sort-select",value:i,onChange:d=>a(d.target.value),children:[o.jsx("option",{value:"default",children:"Most Popular"}),o.jsx("option",{value:"price-asc",children:"Price: Low to High"}),o.jsx("option",{value:"price-desc",children:"Price: High to Low"})]})]})]}),!r&&o.jsxs("div",{className:"bs-toolbar",children:[o.jsxs("span",{className:"bs-count",children:["Showing ",o.jsx("strong",{children:c.length})," ","bestseller",c.length!==1?"s":""]}),o.jsxs("div",{className:"bs-toolbar-dec",children:[o.jsx("div",{className:"bs-toolbar-dec-line"}),o.jsx("div",{className:"bs-toolbar-dec-dot"}),o.jsx("div",{style:{width:32,height:1,background:`linear-gradient(to left, transparent, ${K.rose})`}})]})]}),r?o.jsx("div",{className:"bs-skeleton-grid",children:Array.from({length:8}).map((d,f)=>o.jsxs("div",{className:"bs-skeleton-card",children:[o.jsx("div",{className:"bs-skeleton-img"}),o.jsxs("div",{className:"bs-skeleton-body",children:[o.jsx("div",{className:"bs-skeleton-line",style:{width:"70%"}}),o.jsx("div",{className:"bs-skeleton-line",style:{width:"45%"}}),o.jsx("div",{className:"bs-skeleton-line",style:{width:"55%",height:8}})]})]},f))}):c.length>0?o.jsx("div",{className:"bs-grid",children:c.map((d,f)=>o.jsx("div",{style:{animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${f*40}ms both`},children:o.jsx(ar,{product:d})},d._id||f))}):o.jsx("div",{className:"bs-grid",children:o.jsxs("div",{className:"bs-empty",children:[o.jsx("div",{className:"bs-empty-icon",children:"✨"}),o.jsx("p",{className:"bs-empty-title",children:"No bestsellers available at the moment"}),o.jsx("p",{className:"bs-empty-sub",children:"Check back soon — new favorites arrive every week"})]})})]})}const R={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function Mm(){const[e,t]=U0(),{success:r,error:n}=Sr(),[i,a]=b.useState([]),[s,l]=b.useState([]),[c,d]=b.useState(!0),[f,g]=b.useState(null),[p,k]=b.useState(e.get("search")||""),[w,j]=b.useState(e.get("category")||"all"),[x,m]=b.useState([Number(e.get("minPrice"))||0,Number(e.get("maxPrice"))||1e5]),[u,h]=b.useState(e.get("sort")||"default"),[C,$]=b.useState(Number(e.get("page"))||1),y=12;b.useEffect(()=>{(async()=>{try{d(!0),g(null);const[L,_]=await Promise.all([oe.getAllProducts(),oe.getCategories()]),re=_e(L,"products","data")||[];if(a(re),l(_e(_,"categories","data")||[]),!e.get("maxPrice")&&re.length>0){const ue=Math.max(...re.map(O=>Number(O.price||0)));ue>0&&m(O=>[O[0],ue])}}catch(L){console.error("Failed to load products:",L),g("Failed to load products. Please try again."),n("Failed to load products")}finally{d(!1)}})()},[n]);const S=b.useCallback(z=>{const L={};z.search&&(L.search=z.search),z.category&&z.category!=="all"&&(L.category=z.category),z.minPrice>0&&(L.minPrice=z.minPrice),z.maxPrice<1e5&&(L.maxPrice=z.maxPrice),z.sort&&z.sort!=="default"&&(L.sort=z.sort),z.page&&z.page>1&&(L.page=z.page),t(L)},[t]),N=b.useMemo(()=>c?[]:i.filter(z=>{if(w!=="all"){const _=z.category;if(!_||!(typeof _=="object"?String(_._id)===String(w):String(_)===String(w)))return!1}const L=Number(z.price||z.salePrice||0);if(L<x[0]||L>x[1])return!1;if(p.trim()){const _=p.toLowerCase();return z.name&&z.name.toLowerCase().includes(_)||z.description&&z.description.toLowerCase().includes(_)||z.category&&oi(z.category).toLowerCase().includes(_)}return!0}),[i,w,x,p,c]),P=b.useMemo(()=>{const z=[...N];return u==="price-asc"&&z.sort((L,_)=>(L.price||0)-(_.price||0)),u==="price-desc"&&z.sort((L,_)=>(_.price||0)-(L.price||0)),u==="name"&&z.sort((L,_)=>(L.name||"").localeCompare(_.name||"")),u==="newest"&&z.reverse(),z},[N,u]),E=Math.ceil(P.length/y),Q=b.useMemo(()=>{const z=(C-1)*y;return P.slice(z,z+y)},[P,C]),G=z=>{k(z),$(1),S({search:z,category:w,minPrice:x[0],maxPrice:x[1],sort:u})},he=z=>{j(z),$(1),S({search:p,category:z,minPrice:x[0],maxPrice:x[1],sort:u})},ee=(z,L)=>{m([z,L]),$(1),S({search:p,category:w,minPrice:z,maxPrice:L,sort:u})},be=z=>{h(z),S({search:p,category:w,minPrice:x[0],maxPrice:x[1],sort:z})},se=z=>{z>=1&&z<=E&&($(z),S({search:p,category:w,minPrice:x[0],maxPrice:x[1],sort:u,page:z}),window.scrollTo({top:0,behavior:"smooth"}))},ve=b.useMemo(()=>i.length>0?Math.max(...i.map(z=>Number(z.price||0))):1e5,[i]);return o.jsxs("div",{style:{background:R.bg,minHeight:"100vh",paddingTop:106},children:[o.jsx("style",{children:`
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
          border-bottom: 1px solid ${R.border};
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
          background: linear-gradient(to right, ${R.rose}, ${R.burgundy});
          border-radius: 2px;
        }
        .prod-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${R.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .prod-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -1px;
          background: linear-gradient(135deg, ${R.text} 0%, ${R.burgundy} 100%);
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
          color: ${R.textMuted};
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
          color: ${R.textMuted};
          font-weight: 600;
          white-space: nowrap;
        }
        .prod-sort-select {
          background: ${R.surface};
          border: 1px solid ${R.border};
          color: ${R.text};
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
          border-color: ${R.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }

        /* ── Search Bar ── */
        .prod-search-bar {
          padding: 22px 80px;
          border-bottom: 1px solid ${R.borderLight};
          animation: fadeInUp 0.5s ease 0.25s both;
        }
        .prod-search-input {
          width: 100%;
          max-width: 400px;
          background: ${R.surface};
          border: 1px solid ${R.border};
          color: ${R.text};
          padding: 12px 16px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          border-radius: 6px;
          outline: none;
          transition: all 0.3s;
          letter-spacing: 0.3px;
        }
        .prod-search-input:focus {
          border-color: ${R.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }
        .prod-search-input::placeholder {
          color: ${R.textMuted};
        }

        /* ── Filter Bar ── */
        .prod-filter-bar {
          padding: 22px 80px;
          border-bottom: 1px solid ${R.borderLight};
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
          color: ${R.textMuted};
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
          background: ${R.borderLight};
          border-radius: 2px;
        }
        .prod-category-scroll::-webkit-scrollbar-thumb {
          background: ${R.rose};
          border-radius: 2px;
        }
        .prod-cat-btn {
          padding: 10px 20px;
          background: ${R.surface};
          border: 1px solid ${R.border};
          color: ${R.text};
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
          background: ${R.rose};
          border-color: ${R.rose};
          color: ${R.surface};
        }
        .prod-cat-btn:hover:not(.active) {
          border-color: ${R.rose};
        }

        /* ── Price Inputs ── */
        .prod-price-inputs {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .prod-price-input {
          width: 90px;
          background: ${R.surface};
          border: 1px solid ${R.border};
          color: ${R.text};
          padding: 10px 12px;
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          border-radius: 6px;
          outline: none;
          transition: all 0.3s;
        }
        .prod-price-input:focus {
          border-color: ${R.rose};
          box-shadow: 0 0 0 3px rgba(232,180,196,0.15);
        }
        .prod-price-dash {
          color: ${R.textMuted};
          font-weight: 500;
        }

        /* ── Toolbar ── */
        .prod-toolbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 22px 80px;
          border-bottom: 1px solid ${R.borderLight};
          animation: fadeInUp 0.5s ease 0.35s both;
          flex-wrap: wrap;
          gap: 16px;
        }
        .prod-count {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 1.8px;
          color: ${R.textMuted};
          text-transform: uppercase;
          font-weight: 600;
        }
        .prod-count strong {
          color: ${R.burgundy};
          font-weight: 700;
        }
        .prod-page-info {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.5px;
          color: ${R.textMuted};
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
          color: ${R.textMuted};
          font-style: italic;
        }
        .prod-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${R.textMuted};
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
          border: 2px solid ${R.borderLight};
          border-top-color: ${R.rose};
          border-right-color: ${R.burgundy};
          border-radius: 50%;
          animation: spin 0.9s linear infinite;
        }
        .prod-loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          color: ${R.textMuted};
          font-style: italic;
          letter-spacing: 1px;
        }

        /* ── Error Banner ── */
        .prod-error-banner {
          background: rgba(232,180,196,0.1);
          border-bottom: 1px solid ${R.rose};
          color: ${R.burgundy};
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
          background: ${R.surface};
          border: 1px solid ${R.border};
          color: ${R.text};
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
          background: ${R.rose};
          border-color: ${R.rose};
          color: ${R.surface};
        }
        .prod-page-btn:hover:not(.active):not(:disabled) {
          border-color: ${R.rose};
          background: ${R.blush};
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
          background: ${R.surface};
          border: 1px solid ${R.borderLight};
        }
        .prod-skeleton-img {
          aspect-ratio: 3/4;
          background: linear-gradient(
            90deg,
            ${R.borderLight} 25%,
            ${R.champagne} 50%,
            ${R.borderLight} 75%
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
            ${R.borderLight} 25%,
            ${R.champagne} 50%,
            ${R.borderLight} 75%
          );
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite;
        }

        /* ── Quick Add Button ── */
        .prod-add-btn {
          margin-top: 12px;
          padding: 12px 16px;
          background: ${R.rose};
          color: ${R.surface};
          border: 1.5px solid ${R.rose};
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
          background: ${R.burgundy};
          border-color: ${R.burgundy};
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
      `}),f&&o.jsxs("div",{className:"prod-error-banner",children:["⚠ ",f]}),o.jsxs("div",{className:"prod-hero",children:[o.jsxs("div",{style:{position:"relative",zIndex:2},children:[o.jsxs("div",{className:"prod-eyebrow",children:[o.jsx("div",{className:"prod-eyebrow-line"}),o.jsx("span",{className:"prod-eyebrow-text",children:"Shop Our Collection"})]}),o.jsx("h1",{className:"prod-heading",children:"All Jewellery"}),o.jsx("p",{className:"prod-sub",children:"Discover our complete collection of handcrafted pieces. Find the perfect style that speaks to you."})]}),o.jsxs("div",{className:"prod-controls",children:[o.jsx("span",{className:"prod-sort-label",children:"Sort by"}),o.jsxs("select",{className:"prod-sort-select",value:u,onChange:z=>be(z.target.value),children:[o.jsx("option",{value:"default",children:"Default"}),o.jsx("option",{value:"price-asc",children:"Price: Low to High"}),o.jsx("option",{value:"price-desc",children:"Price: High to Low"}),o.jsx("option",{value:"name",children:"Name A-Z"}),o.jsx("option",{value:"newest",children:"Newest"})]})]})]}),o.jsx("div",{className:"prod-search-bar",children:o.jsx("input",{type:"text",placeholder:"Search products, categories...",value:p,onChange:z=>G(z.target.value),className:"prod-search-input"})}),!c&&s.length>0&&o.jsxs("div",{className:"prod-filter-bar",children:[o.jsx("span",{className:"prod-filter-label",children:"Category"}),o.jsxs("div",{className:"prod-category-scroll",children:[o.jsx("button",{className:`prod-cat-btn ${w==="all"?"active":""}`,onClick:()=>he("all"),children:"All"}),s.map(z=>{const L=Xs(z);return L?o.jsx("button",{className:`prod-cat-btn ${w===L?"active":""}`,onClick:()=>he(L),children:oi(z)},L):null})]}),o.jsxs("div",{className:"prod-price-inputs",children:[o.jsx("span",{className:"prod-filter-label",children:"Price:"}),o.jsx("input",{type:"number",min:"0",value:x[0],onChange:z=>ee(Number(z.target.value),x[1]),className:"prod-price-input",placeholder:"Min"}),o.jsx("span",{className:"prod-price-dash",children:"–"}),o.jsx("input",{type:"number",max:ve,value:x[1],onChange:z=>ee(x[0],Number(z.target.value)),className:"prod-price-input",placeholder:"Max"})]})]}),!c&&o.jsxs("div",{className:"prod-toolbar",children:[o.jsxs("span",{className:"prod-count",children:["Showing ",o.jsx("strong",{children:Q.length})," of"," ",o.jsx("strong",{children:P.length})," piece",P.length!==1?"s":""]}),E>1&&o.jsxs("div",{className:"prod-page-info",children:["Page ",C," of ",E]})]}),c?o.jsx(o.Fragment,{children:o.jsxs("div",{className:"prod-loading",children:[o.jsx("div",{className:"prod-spinner"}),o.jsx("p",{className:"prod-loading-text",children:"Loading collection…"})]})}):P.length===0?o.jsx("div",{className:"prod-grid",children:o.jsxs("div",{className:"prod-empty",children:[o.jsx("div",{className:"prod-empty-icon",children:"✨"}),o.jsx("p",{className:"prod-empty-title",children:"No pieces found"}),o.jsx("p",{className:"prod-empty-sub",children:"Try adjusting your filters or search terms"})]})}):o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"prod-grid",children:Q.map((z,L)=>o.jsx("div",{style:{animation:`fadeInUp 0.5s cubic-bezier(0.34,1.56,0.64,1) ${L*40}ms both`},children:o.jsx(Fm,{product:z})},z._id||L))}),E>1&&o.jsx("div",{style:{padding:"0 80px 80px"},children:o.jsxs("div",{className:"prod-pagination",children:[o.jsx("button",{className:"prod-page-btn",onClick:()=>se(C-1),disabled:C===1,children:"← Previous"}),Array.from({length:Math.min(5,E)}).map((z,L)=>{const _=E<=5?L+1:Math.max(1,C-2)+L;return _>E?null:o.jsx("button",{className:`prod-page-btn ${_===C?"active":""}`,onClick:()=>se(_),children:_},_)}),o.jsx("button",{className:"prod-page-btn",onClick:()=>se(C+1),disabled:C===E,children:"Next →"})]})})]})]})}function Fm({product:e}){const{addToCart:t}=tn(),{success:r,error:n}=Sr(),[i,a]=b.useState(!1),s=async l=>{l.stopPropagation(),a(!0);try{await t(e._id||e.id,1),r("Added to cart!")}catch(c){n((c==null?void 0:c.message)||"Failed to add to cart"),console.error(c)}finally{a(!1)}};return o.jsxs("div",{style:{position:"relative",display:"flex",flexDirection:"column"},children:[o.jsx(ar,{product:e}),o.jsx("button",{onClick:s,disabled:i,className:"prod-add-btn",children:i?"Adding...":"Add to Cart"})]})}const D={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4"};function Lm(){const{id:e}=g0(),t=ht(),{addToCart:r}=tn(),{toggleWishlist:n}=$i(),[i,a]=b.useState(null),[s,l]=b.useState([]),[c,d]=b.useState(!0),[f,g]=b.useState(0),[p,k]=b.useState(1),[w,j]=b.useState(!1),[x,m]=b.useState(!1);b.useEffect(()=>{d(!0),oe.getProductById(e).then(P=>{const E=(P==null?void 0:P.data)||(P==null?void 0:P.product)||P;a(E),d(!1),oe.getLatestProducts().then(Q=>{const G=_e(Q,"products","data");l(G.filter(he=>(he._id||he.id)!==e).slice(0,4))})}).catch(()=>d(!1)),window.scrollTo(0,0)},[e]);const u=async()=>{if(!localStorage.getItem("arke_token")){alert("Please login first");return}await r(i||e,p),j(!0),setTimeout(()=>j(!1),3e3)},h=async()=>{if(!localStorage.getItem("arke_token")){alert("Please login first");return}m(!0);try{await n(i||e)}finally{m(!1)}};if(c)return o.jsxs("div",{style:{paddingTop:"120px",minHeight:"100vh",background:D.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:20},children:[o.jsx("style",{children:`
          @keyframes spin { to { transform: rotate(360deg); } }
          .spinner {
            width: 48px;
            height: 48px;
            border: 3px solid ${D.border};
            border-top-color: ${D.rose};
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }
        `}),o.jsx("div",{className:"spinner"}),o.jsx("span",{style:{color:D.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:"18px",fontStyle:"italic",fontWeight:300},children:"Loading product…"})]});if(!i)return o.jsxs("div",{style:{paddingTop:"120px",minHeight:"100vh",background:D.bg,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"24px"},children:[o.jsx("div",{style:{fontSize:56,opacity:.4},children:"◇"}),o.jsx("span",{style:{color:D.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:"28px",fontWeight:300},children:"Product not found"}),o.jsx("button",{onClick:()=>t("/products"),style:{background:"transparent",border:`1.5px solid ${D.rose}`,color:D.burgundy,padding:"12px 32px",cursor:"pointer",fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"},onMouseEnter:P=>{P.target.style.background=`${D.blush}30`,P.target.style.borderColor=D.burgundy},onMouseLeave:P=>{P.target.style.background="transparent",P.target.style.borderColor=D.rose},children:"← Back to Products"})]});const C=Array.isArray(i.images)?i.images:[i.image||i.thumbnail].filter(Boolean),$=i.name||i.title||"Product",y=i.price||i.salePrice||i.mrp||0,S=i.mrp||i.originalPrice,N=i.description||i.details||"";return o.jsxs("div",{style:{background:D.bg,minHeight:"100vh",paddingTop:"100px"},children:[o.jsx("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap');

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .pd-main { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1); }
        .pd-related { animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s both; }
      `}),o.jsxs("div",{className:"pd-main",style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"80px",padding:"60px 80px",alignItems:"start"},children:[o.jsxs("div",{children:[Ke(C[f])?o.jsx("img",{src:Ke(C[f]),alt:$,style:{width:"100%",aspectRatio:"1/1",objectFit:"cover",marginBottom:"16px",borderRadius:"8px"}}):o.jsx("div",{style:{width:"100%",aspectRatio:"1/1",background:`linear-gradient(135deg, ${D.blush}30, ${D.champagne}20)`,display:"flex",alignItems:"center",justifyContent:"center",marginBottom:"16px",borderRadius:"8px"},children:o.jsx("span",{style:{color:`${D.rose}40`,fontSize:"120px"},children:"◇"})}),C.length>1&&o.jsx("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:C.map((P,E)=>{const Q=Ke(P);return Q?o.jsx("img",{src:Q,alt:`${$} view ${E+1}`,onClick:()=>g(E),style:{width:"80px",height:"80px",objectFit:"cover",cursor:"pointer",border:E===f?`2px solid ${D.burgundy}`:`1.5px solid ${D.border}`,opacity:E===f?1:.6,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px"},onMouseEnter:G=>{E!==f&&(G.target.style.opacity="1",G.target.style.borderColor=D.rose)},onMouseLeave:G=>{E!==f&&(G.target.style.opacity="0.6",G.target.style.borderColor=D.border)}},E):null})})]}),o.jsxs("div",{children:[o.jsx("button",{onClick:()=>t("/products"),style:{fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"0.5px",textTransform:"uppercase",color:D.textMuted,marginBottom:"20px",cursor:"pointer",background:"none",border:"none",padding:0,transition:"color 0.2s"},onMouseEnter:P=>P.target.style.color=D.burgundy,onMouseLeave:P=>P.target.style.color=D.textMuted,children:"← Back to All Products"}),o.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(28px, 4vw, 44px)",fontWeight:300,color:D.text,lineHeight:"1.2",marginBottom:"24px",margin:"0 0 24px 0"},children:$}),o.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"baseline",marginBottom:"32px"},children:[o.jsxs("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"32px",background:`linear-gradient(135deg, ${D.rose}, ${D.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",fontWeight:400},children:["₹",Number(y).toLocaleString("en-IN")]}),S&&S>y&&o.jsxs("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"16px",color:D.textMuted,textDecoration:"line-through"},children:["₹",Number(S).toLocaleString("en-IN")]})]}),N&&o.jsx("p",{style:{color:D.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"14px",lineHeight:"1.8",marginBottom:"32px",fontWeight:400},children:N}),o.jsx("div",{style:{borderTop:`1.5px solid ${D.border}`,margin:"32px 0"}}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"20px",marginBottom:"24px"},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"1px",textTransform:"uppercase",color:D.textMuted,fontWeight:600,minWidth:"60px"},children:"Quantity"}),o.jsxs("div",{style:{display:"flex",alignItems:"center",border:`1.5px solid ${D.border}`,borderRadius:"6px",overflow:"hidden"},children:[o.jsx("button",{onClick:()=>k(P=>Math.max(1,P-1)),style:{width:"40px",height:"40px",background:"none",border:"none",color:D.rose,cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:P=>P.target.style.background=`${D.blush}30`,onMouseLeave:P=>P.target.style.background="none",children:"−"}),o.jsx("span",{style:{flex:1,textAlign:"center",fontFamily:"'Poppins', sans-serif",fontSize:"14px",fontWeight:600,color:D.text,minWidth:"50px"},children:p}),o.jsx("button",{onClick:()=>k(P=>P+1),style:{width:"40px",height:"40px",background:"none",border:"none",color:D.rose,cursor:"pointer",fontSize:"18px",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:P=>P.target.style.background=`${D.blush}30`,onMouseLeave:P=>P.target.style.background="none",children:"+"})]})]}),o.jsx("button",{onClick:u,style:{width:"100%",padding:"16px",background:w?`linear-gradient(135deg, ${D.rose}, ${D.burgundy})`:"transparent",border:`1.5px solid ${w?"transparent":D.rose}`,color:w?"white":D.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px",fontWeight:700,marginBottom:"12px",boxShadow:w?`0 4px 16px ${D.rose}30`:"none"},onMouseEnter:P=>{w||(P.target.style.background=`${D.blush}20`,P.target.style.borderColor=D.burgundy)},onMouseLeave:P=>{w||(P.target.style.background="transparent",P.target.style.borderColor=D.rose)},children:w?"✓ Added to Cart":"Add to Cart"}),o.jsx("button",{onClick:h,disabled:x,style:{width:"100%",padding:"14px",background:"transparent",border:`1.5px solid ${D.border}`,color:D.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",cursor:x?"not-allowed":"pointer",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",borderRadius:"6px",fontWeight:600,opacity:x?.6:1},onMouseEnter:P=>{x||(P.target.style.borderColor=D.rose,P.target.style.color=D.rose,P.target.style.background=`${D.blush}15`)},onMouseLeave:P=>{x||(P.target.style.borderColor=D.border,P.target.style.color=D.textMuted,P.target.style.background="transparent")},children:"♡ Add to Wishlist"}),o.jsx("div",{style:{borderTop:`1.5px solid ${D.border}`,margin:"32px 0"}}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:[["Material",i.material||i.metalType],["Weight",i.weight?`${i.weight}g`:null],["Size",i.size],["SKU",i.sku||i.productCode]].filter(([,P])=>P).map(([P,E])=>o.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"10px",letterSpacing:"1px",textTransform:"uppercase",color:D.textMuted,fontWeight:600},children:P}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"12px",color:D.text,fontWeight:500},children:E})]},P))})]})]}),s.length>0&&o.jsxs("div",{className:"pd-related",style:{padding:"80px 80px",borderTop:`1.5px solid ${D.border}`,background:D.surface},children:[o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"36px",fontWeight:300,color:D.text,marginBottom:"40px",margin:"0 0 40px 0",background:`linear-gradient(135deg, ${D.text}, ${D.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"You May Also Like"}),o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"24px"},children:s.map((P,E)=>o.jsx(ar,{product:P},P._id||E))})]})]})}const fe={bg:"#faf8f5",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4"};function Im(){const[e,t]=b.useState([]),[r,n]=b.useState(!0),[i,a]=b.useState(null),s=ht();return b.useEffect(()=>{window.scrollTo(0,0),oe.getCategories().then(l=>{t(_e(l,"categories","data")),n(!1)}).catch(()=>n(!1))},[]),o.jsxs("div",{style:{background:fe.bg,minHeight:"100vh",paddingTop:"120px"},children:[o.jsx("style",{children:`
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
      `}),o.jsxs("div",{className:"categories-header",style:{padding:"60px 80px 60px",borderBottom:`1.5px solid ${fe.border}`},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:16},children:[o.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(90deg, ${fe.rose}, ${fe.burgundy})`}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:fe.burgundy,fontWeight:600},children:"Explore Collections"})]}),o.jsx("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(40px, 5vw, 72px)",fontWeight:300,color:fe.text,margin:0,background:`linear-gradient(135deg, ${fe.text}, ${fe.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Categories"})]}),r?o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:120,gap:20},children:[o.jsx("div",{style:{width:48,height:48,border:`3px solid ${fe.border}`,borderTopColor:fe.rose,borderRadius:"50%",animation:"spin 1s linear infinite"}}),o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,color:fe.textMuted,fontStyle:"italic",fontWeight:300},children:"Loading categories…"})]}):e.length===0?o.jsxs("div",{style:{textAlign:"center",padding:"120px 40px"},children:[o.jsx("div",{style:{fontSize:56,color:`${fe.rose}40`,marginBottom:24},children:"◇"}),o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:300,color:fe.textMuted,background:`linear-gradient(135deg, ${fe.textMuted}, ${fe.rose}80)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"No categories found"}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:fe.textMuted,marginTop:12},children:"Check back soon for new collections"})]}):o.jsx("div",{className:"categories-grid",style:{padding:"60px 80px",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:24},children:e.map((l,c)=>{const d=oi(l),f=Ku(l),g=Xs(l),p=i===c;return o.jsxs("div",{style:{cursor:"pointer",position:"relative",overflow:"hidden",aspectRatio:"4/3",borderRadius:"12px",boxShadow:p?"0 20px 48px rgba(139, 70, 84, 0.25)":"0 4px 16px rgba(0,0,0,0.08)",transition:"all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:p?"translateY(-8px)":"translateY(0)",animation:`slideInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${c*.1}s both`},onClick:()=>g&&s(`/products?category=${g}`),onMouseEnter:()=>a(c),onMouseLeave:()=>a(null),children:[f?o.jsx("img",{src:f,alt:d,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:p?"scale(1.08)":"scale(1)"}}):o.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(135deg, ${fe.blush}30, ${fe.champagne}20)`,display:"flex",alignItems:"center",justifyContent:"center"},children:o.jsx("span",{style:{color:`${fe.rose}40`,fontSize:"96px"},children:"◇"})}),o.jsxs("div",{style:{position:"absolute",inset:0,background:`linear-gradient(to top, 
                      rgba(250,248,245,0.95) 0%, 
                      rgba(250,248,245,0.75) 30%, 
                      rgba(250,248,245,0.3) 60%, 
                      transparent 100%)`,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"32px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:400,color:fe.text,marginBottom:12,letterSpacing:.5,lineHeight:1.2},children:d}),o.jsx("div",{style:{width:p?56:32,height:1.5,background:`linear-gradient(90deg, ${fe.rose}, ${fe.burgundy})`,marginBottom:12,transition:"width 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"}}),o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:fe.burgundy,display:"inline-flex",alignItems:"center",gap:6,fontWeight:700,transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:p?"translateX(4px)":"translateX(0)"},children:["Shop Now",o.jsx("span",{style:{transition:"transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",transform:p?"translateX(2px)":"translateX(0)"},children:"→"})]})]})]},c)})})]})}const B={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function Rm(){const[e,t]=b.useState([]),[r,n]=b.useState(!0),[i,a]=b.useState(null);return ht(),b.useEffect(()=>{window.scrollTo(0,0),oe.getBlogs().then(s=>{t(_e(s,"blogs","data")),n(!1)}).catch(()=>n(!1))},[]),o.jsxs("div",{style:{background:B.bg,minHeight:"100vh",paddingTop:"120px"},children:[o.jsx("style",{children:`
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
          border-bottom: 1.5px solid ${B.border};
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
          color: ${B.burgundy};
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
          background: linear-gradient(to right, ${B.rose}, ${B.burgundy});
          border-radius: 2px;
        }

        .blog-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(44px, 6vw, 80px);
          font-weight: 300;
          color: ${B.text};
          letter-spacing: -1px;
          line-height: 1.1;
          background: linear-gradient(135deg, ${B.text} 0%, ${B.burgundy} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 20px;
        }

        .blog-header-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${B.textMuted};
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
          background: ${B.surface};
          border-radius: 12px;
          overflow: hidden;
          border: 1.5px solid ${B.borderLight};
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
          border-color: ${B.rose};
          box-shadow: 0 24px 48px rgba(139, 70, 84, 0.18);
        }

        /* ── Image ── */
        .blog-img-wrap {
          position: relative;
          overflow: hidden;
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, ${B.blush}20, ${B.champagne}15);
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
          color: ${B.burgundy};
          background: rgba(232, 180, 196, 0.95);
          backdrop-filter: blur(10px);
          padding: 7px 14px;
          border-radius: 20px;
          font-weight: 700;
          border: 0.5px solid ${B.rose};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-category-badge {
          background: ${B.rose};
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
          background: ${B.burgundy};
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
          border-bottom: 1.5px solid ${B.borderLight};
          transition: border-color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-content {
          border-color: ${B.rose};
        }

        .blog-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          color: ${B.text};
          line-height: 1.4;
          margin-bottom: 14px;
          transition: color 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-title {
          color: ${B.burgundy};
        }

        .blog-excerpt {
          color: ${B.textMuted};
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
          background: ${B.bg};
          transition: background 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-footer {
          background: ${B.blush}20;
        }

        .blog-meta {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .blog-date {
          color: ${B.textMuted};
          font-size: 10px;
          font-family: 'Poppins', sans-serif;
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .blog-author {
          color: ${B.text};
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
          background: ${B.blush};
          color: ${B.burgundy};
          font-weight: 700;
          font-size: 14px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .blog-card:hover .blog-read-link {
          background: ${B.rose};
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
          border: 3px solid ${B.borderLight};
          border-top-color: ${B.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 28px;
        }

        .loading-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 300;
          color: ${B.textMuted};
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
          color: ${B.text};
          margin-bottom: 12px;
          letter-spacing: 1px;
          animation: fadeInUp 0.6s ease 0.3s both;
        }

        .empty-state-desc {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          color: ${B.textMuted};
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
          background: ${B.surface};
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
          background: linear-gradient(135deg, ${B.blush}30, ${B.champagne}20);
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
          color: ${B.burgundy};
          background: ${B.blush};
          padding: 8px 16px;
          border-radius: 20px;
          margin-bottom: 20px;
          font-weight: 700;
          border: 1px solid ${B.rose}60;
        }

        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 300;
          color: ${B.text};
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
          border-bottom: 1.5px solid ${B.borderLight};
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
          background: linear-gradient(135deg, ${B.rose}, ${B.burgundy});
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
          color: ${B.text};
        }

        .modal-author-role {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          color: ${B.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-date {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${B.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-read-time {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          color: ${B.textMuted};
          letter-spacing: 0.5px;
        }

        .modal-content-text {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          line-height: 1.9;
          color: ${B.text};
          letter-spacing: 0.4px;
        }

        .modal-content-text p {
          margin-bottom: 24px;
        }

        .modal-content-text h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px;
          font-weight: 400;
          color: ${B.text};
          margin: 36px 0 16px;
          letter-spacing: -0.5px;
        }

        .modal-content-text h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 22px;
          font-weight: 400;
          color: ${B.text};
          margin: 28px 0 12px;
          letter-spacing: -0.5px;
        }

        .modal-content-text blockquote {
          border-left: 4px solid ${B.rose};
          padding-left: 20px;
          margin: 28px 0;
          color: ${B.textMuted};
          font-style: italic;
        }

        /* ── Scrollbar ── */
        .modal-content::-webkit-scrollbar {
          width: 8px;
        }

        .modal-content::-webkit-scrollbar-track {
          background: ${B.bg};
        }

        .modal-content::-webkit-scrollbar-thumb {
          background: ${B.rose};
          border-radius: 4px;
        }

        .modal-content::-webkit-scrollbar-thumb:hover {
          background: ${B.burgundy};
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
      `}),o.jsx("div",{className:"blog-header",children:o.jsxs("div",{className:"blog-header-content",children:[o.jsx("div",{className:"blog-eyebrow",children:"Stories & Inspiration"}),o.jsx("h1",{className:"blog-heading",children:"From the Journal"}),o.jsx("p",{className:"blog-header-sub",children:"Discover inspiring stories about jewellery craftsmanship, styling tips, and the art of wearing pieces that celebrate your unique style."})]})}),r?o.jsx("div",{style:{padding:"80px 40px"},children:o.jsxs("div",{className:"loading-state",children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("p",{className:"loading-text",children:"Loading our stories…"})]})}):e.length>0?o.jsx("div",{className:"blog-grid-container",children:o.jsx("div",{className:"blog-grid",children:e.map((s,l)=>{var g;const c=Ke(s.image||s.thumbnail||s.featuredImage),d=s.date||s.createdAt,f=s.readTime||Math.ceil((((g=s.content)==null?void 0:g.length)||0)/200);return o.jsxs("div",{className:"blog-card",onClick:()=>a(s),children:[o.jsxs("div",{className:"blog-img-wrap",children:[c?o.jsx("img",{src:c,alt:s.title,className:"blog-img"}):o.jsx("div",{className:"blog-img-placeholder",children:"📖"}),o.jsxs("div",{className:"blog-badges",children:[s.featured&&o.jsxs("div",{className:"blog-featured-badge",children:[o.jsx("span",{children:"✦"})," Featured"]}),o.jsx("div",{className:"blog-category-badge",children:s.category||"Journal"})]})]}),o.jsxs("div",{className:"blog-content",children:[o.jsx("h3",{className:"blog-title",children:s.title}),s.excerpt&&o.jsx("p",{className:"blog-excerpt",children:s.excerpt.length>110?`${s.excerpt.slice(0,110)}...`:s.excerpt})]}),o.jsxs("div",{className:"blog-footer",children:[o.jsxs("div",{className:"blog-meta",children:[o.jsx("div",{className:"blog-date",children:d?new Date(d).toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"}):""}),f>0&&o.jsxs("div",{className:"blog-read-time",children:[f," min read"]})]}),o.jsx("div",{className:"blog-read-link",children:"→"})]})]},l)})})}):o.jsx("div",{className:"blog-grid-container",children:o.jsx("div",{className:"blog-grid",children:o.jsxs("div",{className:"empty-state",children:[o.jsx("div",{className:"empty-state-icon",children:"📝"}),o.jsx("div",{className:"empty-state-text",children:"No Stories Yet"}),o.jsx("div",{className:"empty-state-desc",children:"Check back soon for inspiring stories, style tips, and jewellery insights."})]})})}),i&&o.jsx(Wm,{blog:i,onClose:()=>a(null)})]})}function Wm({blog:e,onClose:t}){var a;b.useEffect(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto"}),[]);const r=Ke(e.image||e.thumbnail||e.featuredImage),n=e.date||e.createdAt,i=e.readTime||Math.ceil((((a=e.content)==null?void 0:a.length)||0)/200);return o.jsx("div",{className:"modal-overlay",onClick:t,children:o.jsxs("div",{className:"modal-content",onClick:s=>s.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[r?o.jsx("img",{src:r,alt:e.title,style:{width:"100%",height:"100%",objectFit:"cover"}}):o.jsx("div",{style:{fontSize:"120px",opacity:.3},children:"📖"}),o.jsx("button",{className:"modal-close",onClick:t,children:"✕"})]}),o.jsxs("div",{className:"modal-body",children:[e.category&&o.jsx("div",{className:"modal-category",children:e.category}),o.jsx("h1",{className:"modal-title",children:e.title}),o.jsxs("div",{className:"modal-meta",children:[e.author&&o.jsxs("div",{className:"modal-author",children:[o.jsx("div",{className:"modal-author-avatar",children:e.author.charAt(0).toUpperCase()}),o.jsxs("div",{className:"modal-author-info",children:[o.jsx("div",{className:"modal-author-name",children:e.author}),o.jsx("div",{className:"modal-author-role",children:"Author"})]})]}),n&&o.jsx("div",{className:"modal-date",children:new Date(n).toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"})}),i>0&&o.jsxs("div",{className:"modal-read-time",children:["⏱ ",i," min read"]})]}),e.content?o.jsx("div",{className:"modal-content-text",dangerouslySetInnerHTML:{__html:e.content}}):o.jsx("div",{className:"modal-content-text",children:e.excerpt||e.description||"No content available for this blog post."}),o.jsx("div",{style:{margin:"48px 0",padding:"28px 0",borderTop:`1.5px solid ${B.border}`,borderBottom:`1.5px solid ${B.border}`,textAlign:"center"},children:o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"24px",color:B.textMuted},children:"✦"})}),o.jsxs("div",{style:{textAlign:"center",padding:"20px 0"},children:[o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:"13px",color:B.textMuted,lineHeight:1.8,marginBottom:"20px"},children:"Enjoyed this story? Share it with someone special or explore more from our journal."}),o.jsx("button",{onClick:t,style:{padding:"12px 32px",background:`linear-gradient(135deg, ${B.rose}, ${B.burgundy})`,border:"none",color:"white",fontFamily:"'Poppins', sans-serif",fontSize:"11px",letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:"700",cursor:"pointer",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)"},onMouseEnter:s=>{s.target.style.transform="translateY(-2px)",s.target.style.boxShadow="0 12px 24px rgba(139, 70, 84, 0.2)"},onMouseLeave:s=>{s.target.style.transform="translateY(0)",s.target.style.boxShadow="none"},children:"Back to Stories"})]})]})]})})}function sp({product:e,small:t=!1}){const r={textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",lavender:"#d4c4e0"},n=(e==null?void 0:e.type)||(e==null?void 0:e.category)||"",i=(e==null?void 0:e.metal_type)||"",a=(e==null?void 0:e.diamond_quality)||"",s=(e==null?void 0:e.gender)||"",l=(e==null?void 0:e.totalQuantity)??(e==null?void 0:e.quantity)??"",c={ring:"◯",necklace:"◇",earring:"◈",bracelet:"⌀",bangle:"○",pendant:"◆"},d=Object.keys(c).find(g=>n.toLowerCase().includes(g)),f=c[d]||"◇";return t?o.jsxs("div",{style:{width:"100%",height:"100%",background:`linear-gradient(160deg, ${r.blush}20, ${r.champagne}15)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10,position:"relative",overflow:"hidden"},children:[o.jsx("style",{children:`
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }
          .placeholder-icon {
            animation: float 3s ease-in-out infinite;
          }
        `}),o.jsx("div",{style:{position:"absolute",width:80,height:80,borderRadius:"50%",border:`1px solid ${r.rose}20`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),o.jsx("div",{style:{position:"absolute",width:120,height:120,borderRadius:"50%",border:`1px solid ${r.rose}10`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),o.jsx("span",{className:"placeholder-icon",style:{color:r.rose,fontSize:32,zIndex:1,opacity:.8},children:f}),o.jsx("span",{style:{color:r.burgundy,fontFamily:"'Cormorant Garamond', serif",fontSize:10,letterSpacing:"2px",zIndex:1,fontWeight:300,opacity:.7,textTransform:"uppercase"},children:"ARKE"}),o.jsx("div",{style:{position:"absolute",bottom:12,width:20,height:2,background:`linear-gradient(90deg, transparent, ${r.rose}, transparent)`,borderRadius:"1px",opacity:.5,animation:"shimmer 2s infinite"}}),o.jsx("style",{children:`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
        `})]}):o.jsxs("div",{style:{width:"100%",height:"100%",background:`linear-gradient(160deg, ${r.blush}15 0%, ${r.champagne}10 60%, ${r.lavender}8 100%)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between",padding:"28px 20px",position:"relative",overflow:"hidden",boxSizing:"border-box"},children:[o.jsx("style",{children:`
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
      `}),[["top","left"],["top","right"],["bottom","left"],["bottom","right"]].map(([g,p],k)=>o.jsx("div",{className:"placeholder-corner",style:{[g]:12,[p]:12,...g==="top"&&p==="left"?{borderTop:`1.5px solid ${r.rose}40`,borderLeft:`1.5px solid ${r.rose}40`}:g==="top"&&p==="right"?{borderTop:`1.5px solid ${r.rose}40`,borderRight:`1.5px solid ${r.rose}40`}:g==="bottom"&&p==="left"?{borderBottom:`1.5px solid ${r.rose}40`,borderLeft:`1.5px solid ${r.rose}40`}:{borderBottom:`1.5px solid ${r.rose}40`,borderRight:`1.5px solid ${r.rose}40`}}},k)),o.jsx("div",{style:{position:"absolute",width:200,height:200,borderRadius:"50%",border:`1px solid ${r.rose}15`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),o.jsx("div",{style:{position:"absolute",width:140,height:140,borderRadius:"50%",border:`1px solid ${r.rose}20`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),o.jsx("div",{style:{position:"absolute",width:80,height:80,borderRadius:"50%",border:`1px solid ${r.rose}25`,top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}),o.jsx("div",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:12,letterSpacing:"3px",color:r.rose,textTransform:"uppercase",zIndex:1,fontWeight:300,opacity:.7},children:"ARKE"}),o.jsxs("div",{style:{textAlign:"center",zIndex:1,flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:14},children:[o.jsx("div",{style:{fontSize:48,color:r.rose,lineHeight:1,opacity:.8,animation:"float 4s ease-in-out infinite"},children:f}),n&&o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:r.burgundy,fontWeight:600,opacity:.8},children:n}),o.jsx("div",{style:{width:36,height:1.5,background:`linear-gradient(90deg, transparent, ${r.rose}60, transparent)`,margin:"4px 0"}}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8,width:"100%",padding:"0 12px"},children:[["Metal",i],["Diamond",a],["For",s],["Stock",l!==""?l>0?`${l} available`:"Out of stock":""]].filter(([,g])=>g).map(([g,p])=>o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 8px",background:`${r.rose}10`,borderRadius:"4px",border:`0.5px solid ${r.rose}25`},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:9,letterSpacing:"1px",color:r.textMuted,textTransform:"uppercase",fontWeight:600},children:g}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,color:g==="Stock"?l>0?"#70c878":"#d97070":r.burgundy,letterSpacing:"0.5px",fontWeight:600},children:p})]},g))})]}),o.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 14px",border:`1.5px solid ${r.rose}40`,borderRadius:"20px",background:`${r.rose}8`,zIndex:1},children:[o.jsx("div",{style:{width:5,height:5,borderRadius:"50%",background:r.rose,animation:"pulse 2s infinite",opacity:.8}}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:8,letterSpacing:"1.2px",color:r.rose,textTransform:"uppercase",fontWeight:600,opacity:.8},children:"Loading Image"})]})]})}const v={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",success:"#70c878",error:"#d97070",gold:"#c9a96e"},bo=[{id:1,label:"Shipping",icon:"📍"},{id:2,label:"Payment",icon:"💳"},{id:3,label:"Review",icon:"✦"}];function _m({isOpen:e,onClose:t,items:r,subtotal:n,discountAmount:i,shipping:a,total:s,appliedCoupon:l}){const c=ht(),d=b.useRef(null),{success:f,error:g}=Sr(),[p,k]=b.useState(1),[w,j]=b.useState(!1),[x,m]=b.useState(!1),[u,h]=b.useState(""),[C,$]=b.useState(!1),[y,S]=b.useState({}),[N,P]=b.useState({}),[E,Q]=b.useState({firstName:"",lastName:"",email:"",phone:"",address:"",apartment:"",city:"",state:"",pincode:"",saveAddress:!1}),[G,he]=b.useState({method:"card",cardNumber:"",cardName:"",expiry:"",cvv:"",upiId:""});b.useEffect(()=>(e?(document.body.style.overflow="hidden",setTimeout(()=>$(!0),50)):($(!1),document.body.style.overflow=""),()=>{document.body.style.overflow=""}),[e]),b.useEffect(()=>{const O=pe=>{pe.key==="Escape"&&!w&&ee()};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[w]);const ee=()=>{w||($(!1),setTimeout(()=>{t(),k(1),m(!1),S({}),P({})},300))},be=O=>{O.target===O.currentTarget&&!w&&ee()},se=()=>{const O={};return E.firstName.trim()||(O.firstName="First name is required"),E.lastName.trim()||(O.lastName="Last name is required"),E.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(E.email)||(O.email="Invalid email format"):O.email="Email is required",E.phone.trim()?/^[6-9]\d{9}$/.test(E.phone.replace(/\s/g,""))||(O.phone="Invalid phone number"):O.phone="Phone is required",E.address.trim()||(O.address="Address is required"),E.city.trim()||(O.city="City is required"),E.state.trim()||(O.state="State is required"),E.pincode.trim()?/^\d{6}$/.test(E.pincode)||(O.pincode="Invalid pincode"):O.pincode="Pincode is required",S(O),Object.keys(O).length===0},ve=()=>{const O={};if(G.method==="card"){const pe=G.cardNumber.replace(/\s/g,"");pe?pe.length<16&&(O.cardNumber="Invalid card number"):O.cardNumber="Card number is required",G.cardName.trim()||(O.cardName="Name on card is required"),G.expiry.trim()?/^\d{2}\/\d{2}$/.test(G.expiry)||(O.expiry="Use MM/YY format"):O.expiry="Expiry is required",G.cvv.trim()?/^\d{3,4}$/.test(G.cvv)||(O.cvv="Invalid CVV"):O.cvv="CVV is required"}else G.method==="upi"&&(G.upiId.trim()?G.upiId.includes("@")||(O.upiId="Invalid UPI ID"):O.upiId="UPI ID is required");return S(O),Object.keys(O).length===0},z=()=>{p===1&&!se()||p===2&&!ve()||(S({}),P({}),k(O=>Math.min(O+1,3)))},L=()=>{S({}),P({}),k(O=>Math.max(O-1,1))},_=async()=>{j(!0);try{await new Promise(pe=>setTimeout(pe,2800));const O="ARK-"+Date.now().toString(36).toUpperCase()+Math.random().toString(36).substring(2,6).toUpperCase();h(O),m(!0),f("Order placed successfully! 🎉")}catch{g("Failed to place order. Please try again.")}finally{j(!1)}},re=O=>O.replace(/\D/g,"").slice(0,16).replace(/(.{4})/g,"$1 ").trim(),ue=O=>{const pe=O.replace(/\D/g,"").slice(0,4);return pe.length>=3?pe.slice(0,2)+"/"+pe.slice(2):pe};return e?o.jsxs("div",{onClick:be,style:{position:"fixed",inset:0,zIndex:1e4,display:"flex",alignItems:"center",justifyContent:"center",background:C?"rgba(42,42,42,0.65)":"rgba(42,42,42,0)",backdropFilter:C?"blur(14px)":"blur(0px)",WebkitBackdropFilter:C?"blur(14px)":"blur(0px)",transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",padding:20},children:[o.jsx("style",{children:`
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
          background:${v.border}; border-radius:3px;
        }
        .modal-scroll::-webkit-scrollbar-thumb:hover {
          background:${v.rose};
        }

        .co-input {
          width:100%;
          background:${v.blush}18;
          border:1.5px solid ${v.border};
          color:${v.text};
          padding:13px 15px;
          font-family:'Poppins',sans-serif;
          font-size:13px;
          outline:none;
          border-radius:8px;
          transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          box-sizing:border-box;
        }
        .co-input:focus {
          border-color:${v.rose};
          background:${v.blush}28;
          box-shadow:0 0 0 4px ${v.rose}18;
        }
        .co-input.err {
          border-color:${v.error};
          background:${v.error}08;
        }
        .co-input::placeholder { color:${v.textMuted}; font-size:12px; }

        .pm-card {
          cursor:pointer;
          border:1.5px solid ${v.border};
          border-radius:10px;
          padding:15px 18px;
          display:flex;
          align-items:center;
          gap:14px;
          transition:all 0.3s cubic-bezier(0.34,1.56,0.64,1);
          background:${v.surface};
          user-select:none;
        }
        .pm-card:hover {
          border-color:${v.rose};
          transform:translateY(-2px);
          box-shadow:0 6px 20px ${v.rose}22;
        }
        .pm-card.active {
          border-color:${v.burgundy};
          background:linear-gradient(135deg,${v.blush}22,${v.champagne}14);
          box-shadow:0 4px 18px ${v.rose}28;
        }

        .step-slide { animation:slideRight 0.38s cubic-bezier(0.34,1.56,0.64,1); }

        @media (max-width:680px) {
          .co-two-col { grid-template-columns:1fr !important; }
          .co-modal { width:100% !important; max-height:95vh !important; }
          .co-body { padding:18px !important; }
          .co-head { padding:18px !important; }
          .co-foot { padding:16px 18px !important; }
        }
      `}),o.jsx("div",{ref:d,className:"co-modal",style:{width:"100%",maxWidth:x?520:920,maxHeight:"92vh",background:v.bg,borderRadius:18,overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:`0 32px 90px rgba(0,0,0,0.18), 0 0 0 1px ${v.border}`,transform:C?"translateY(0) scale(1)":"translateY(48px) scale(0.94)",opacity:C?1:0,transition:"all 0.45s cubic-bezier(0.34,1.56,0.64,1)",animation:C?"none":void 0},children:x?o.jsx(Hm,{orderId:u,onClose:ee,navigate:c}):o.jsxs(o.Fragment,{children:[o.jsx(Bm,{currentStep:p,onClose:ee,isProcessing:w}),o.jsxs("div",{className:"modal-scroll co-body",style:{flex:1,overflowY:"auto",padding:"32px 40px"},children:[p===1&&o.jsx(Dm,{info:E,onChange:Q,errors:y,touched:N,onBlur:O=>P(pe=>({...pe,[O]:!0}))}),p===2&&o.jsx(Um,{info:G,onChange:he,errors:y,touched:N,onBlur:O=>P(pe=>({...pe,[O]:!0})),formatCardNumber:re,formatExpiry:ue}),p===3&&o.jsx(Om,{items:r,shippingInfo:E,paymentInfo:G,subtotal:n,discountAmount:i,shipping:a,total:s,appliedCoupon:l})]}),o.jsx(Am,{currentStep:p,onBack:L,onNext:z,onPlaceOrder:_,isProcessing:w,total:s})]})})]}):null}function Bm({currentStep:e,onClose:t,isProcessing:r}){var n;return o.jsxs("div",{className:"co-head",style:{padding:"26px 40px 22px",borderBottom:`1.5px solid ${v.border}`,background:v.surface,flexShrink:0},children:[o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:22},children:[o.jsxs("div",{children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:5},children:[o.jsx("div",{style:{width:22,height:1.5,background:`linear-gradient(90deg,${v.rose},${v.burgundy})`}}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",color:v.burgundy,fontWeight:700},children:"Secure Checkout"})]}),o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:26,fontWeight:300,margin:0,background:`linear-gradient(135deg,${v.text},${v.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:(n=bo.find(i=>i.id===e))==null?void 0:n.label})]}),o.jsx("button",{onClick:t,disabled:r,style:{width:38,height:38,borderRadius:"50%",border:`1.5px solid ${v.border}`,background:v.surface,color:v.textMuted,cursor:r?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",flexShrink:0},onMouseEnter:i=>{r||(i.currentTarget.style.borderColor=v.rose,i.currentTarget.style.color=v.burgundy,i.currentTarget.style.transform="rotate(90deg)")},onMouseLeave:i=>{i.currentTarget.style.borderColor=v.border,i.currentTarget.style.color=v.textMuted,i.currentTarget.style.transform="rotate(0deg)"},children:"✕"})]}),o.jsx("div",{style:{display:"flex",alignItems:"center"},children:bo.map((i,a)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",flex:a<bo.length-1?1:"none"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9},children:[o.jsx("div",{style:{width:34,height:34,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontFamily:"'Poppins',sans-serif",fontWeight:700,transition:"all 0.4s cubic-bezier(0.34,1.56,0.64,1)",flexShrink:0,...e>i.id?{background:`linear-gradient(135deg,${v.success},#59b661)`,color:"white",boxShadow:`0 4px 12px ${v.success}44`}:e===i.id?{background:`linear-gradient(135deg,${v.rose},${v.burgundy})`,color:"white",boxShadow:`0 4px 14px ${v.rose}44`,animation:"pulseRing 2s ease-in-out infinite"}:{background:`${v.blush}28`,color:v.textMuted,border:`1.5px solid ${v.border}`}},children:e>i.id?"✓":i.icon}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,fontWeight:e===i.id?700:500,color:e>=i.id?v.text:v.textMuted,letterSpacing:"0.4px",whiteSpace:"nowrap",transition:"all 0.3s"},children:i.label})]}),a<bo.length-1&&o.jsx("div",{style:{flex:1,height:2,margin:"0 14px",borderRadius:1,background:v.border,overflow:"hidden"},children:o.jsx("div",{style:{height:"100%",width:e>i.id?"100%":"0%",background:`linear-gradient(90deg,${v.rose},${v.burgundy})`,borderRadius:1,transition:"width 0.6s cubic-bezier(0.34,1.56,0.64,1)"}})})]},i.id))})]})}function Am({currentStep:e,onBack:t,onNext:r,onPlaceOrder:n,isProcessing:i,total:a}){return o.jsxs("div",{className:"co-foot",style:{padding:"18px 40px",borderTop:`1.5px solid ${v.border}`,background:v.surface,display:"flex",justifyContent:"space-between",alignItems:"center",gap:14,flexShrink:0},children:[e>1?o.jsx("button",{onClick:t,disabled:i,style:{padding:"12px 26px",background:"transparent",border:`1.5px solid ${v.border}`,color:v.text,fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1px",textTransform:"uppercase",cursor:i?"not-allowed":"pointer",borderRadius:8,fontWeight:600,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:s=>{i||(s.currentTarget.style.borderColor=v.rose,s.currentTarget.style.color=v.burgundy)},onMouseLeave:s=>{s.currentTarget.style.borderColor=v.border,s.currentTarget.style.color=v.text},children:"← Back"}):o.jsx("div",{}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,opacity:.6},children:[o.jsx("span",{style:{fontSize:12},children:"🔒"}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,color:v.textMuted,letterSpacing:"0.5px"},children:"SSL Encrypted"})]}),e<3?o.jsx("button",{onClick:r,style:{padding:"13px 38px",background:`linear-gradient(135deg,${v.rose},${v.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:700,borderRadius:8,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:`0 4px 16px ${v.rose}32`},onMouseEnter:s=>{s.currentTarget.style.transform="translateY(-2px)",s.currentTarget.style.boxShadow=`0 8px 24px ${v.rose}44`},onMouseLeave:s=>{s.currentTarget.style.transform="translateY(0)",s.currentTarget.style.boxShadow=`0 4px 16px ${v.rose}32`},children:"Continue →"}):o.jsx("button",{onClick:n,disabled:i,style:{padding:"13px 32px",background:i?v.textMuted:`linear-gradient(135deg,${v.rose},${v.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:i?"not-allowed":"pointer",fontWeight:700,borderRadius:8,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:i?"none":`0 4px 16px ${v.rose}32`,display:"flex",alignItems:"center",gap:10},onMouseEnter:s=>{i||(s.currentTarget.style.transform="translateY(-2px)",s.currentTarget.style.boxShadow=`0 8px 24px ${v.rose}44`)},onMouseLeave:s=>{i||(s.currentTarget.style.transform="translateY(0)",s.currentTarget.style.boxShadow=`0 4px 16px ${v.rose}32`)},children:i?o.jsxs(o.Fragment,{children:[o.jsx("div",{style:{width:15,height:15,border:"2px solid rgba(255,255,255,0.35)",borderTopColor:"white",borderRadius:"50%",animation:"spinLoader 0.75s linear infinite"}}),"Processing…"]}):`Place Order  ₹${a.toLocaleString("en-IN")}`})]})}function Dm({info:e,onChange:t,errors:r,touched:n,onBlur:i}){const a=(s,l)=>t(c=>({...c,[s]:l}));return o.jsxs("div",{className:"step-slide",children:[o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},className:"co-two-col",children:[o.jsx(Oe,{label:"First Name",placeholder:"Arya",icon:"👤",value:e.firstName,onChange:s=>a("firstName",s),error:r.firstName,touched:n.firstName,onBlur:()=>i("firstName")}),o.jsx(Oe,{label:"Last Name",placeholder:"Sharma",value:e.lastName,onChange:s=>a("lastName",s),error:r.lastName,touched:n.lastName,onBlur:()=>i("lastName")}),o.jsx(Oe,{label:"Email Address",placeholder:"you@example.com",icon:"✉",type:"email",value:e.email,onChange:s=>a("email",s),error:r.email,touched:n.email,onBlur:()=>i("email"),full:!0}),o.jsx(Oe,{label:"Phone Number",placeholder:"9876543210",icon:"📱",value:e.phone,onChange:s=>a("phone",s.replace(/\D/g,"").slice(0,10)),error:r.phone,touched:n.phone,onBlur:()=>i("phone"),full:!0}),o.jsx(Oe,{label:"Street Address",placeholder:"123, Rose Garden Lane",icon:"🏠",value:e.address,onChange:s=>a("address",s),error:r.address,touched:n.address,onBlur:()=>i("address"),full:!0}),o.jsx(Oe,{label:"Apartment / Suite (Optional)",placeholder:"Apt 4B, Floor 2",value:e.apartment,onChange:s=>a("apartment",s),full:!0}),o.jsx(Oe,{label:"City",placeholder:"Mumbai",value:e.city,onChange:s=>a("city",s),error:r.city,touched:n.city,onBlur:()=>i("city")}),o.jsx(Oe,{label:"State",placeholder:"Maharashtra",value:e.state,onChange:s=>a("state",s),error:r.state,touched:n.state,onBlur:()=>i("state")}),o.jsx(Oe,{label:"Pincode",placeholder:"400001",icon:"📮",value:e.pincode,onChange:s=>a("pincode",s.replace(/\D/g,"").slice(0,6)),error:r.pincode,touched:n.pincode,onBlur:()=>i("pincode")}),o.jsx("div",{style:{gridColumn:"1 / -1",marginTop:4},children:o.jsxs("label",{style:{display:"flex",alignItems:"center",gap:12,cursor:"pointer",padding:"11px 15px",borderRadius:8,border:`1.5px solid ${e.saveAddress?v.rose:v.border}`,background:e.saveAddress?`${v.blush}20`:"transparent",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsx("div",{style:{width:20,height:20,borderRadius:4,border:`2px solid ${e.saveAddress?v.burgundy:v.border}`,background:e.saveAddress?`linear-gradient(135deg,${v.rose},${v.burgundy})`:"transparent",display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s",flexShrink:0},children:e.saveAddress&&o.jsx("span",{style:{color:"white",fontSize:11},children:"✓"})}),o.jsx("input",{type:"checkbox",checked:e.saveAddress,onChange:s=>a("saveAddress",s.target.checked),style:{display:"none"}}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:v.text,fontWeight:500},children:"Save this address for future orders"})]})})]}),o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginTop:22,padding:"13px 17px",background:`linear-gradient(135deg,${v.blush}14,${v.champagne}12)`,borderRadius:8,border:`1px solid ${v.border}`},children:[o.jsx("span",{style:{fontSize:17},children:"🔒"}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:v.textMuted},children:"Your information is encrypted and secure. We never share your details."})]})]})}function Um({info:e,onChange:t,errors:r,touched:n,onBlur:i,formatCardNumber:a,formatExpiry:s}){const l=(d,f)=>t(g=>({...g,[d]:f})),c=[{id:"card",label:"Credit / Debit Card",icon:"💳",sub:"Visa · Mastercard · Rupay"},{id:"upi",label:"UPI Payment",icon:"📲",sub:"GPay · PhonePe · Paytm"},{id:"cod",label:"Cash on Delivery",icon:"💵",sub:"Pay when you receive"}];return o.jsxs("div",{className:"step-slide",children:[o.jsx(hn,{text:"Select Payment Method"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,marginBottom:26},children:c.map(d=>o.jsxs("div",{className:`pm-card ${e.method===d.id?"active":""}`,onClick:()=>l("method",d.id),children:[o.jsx("div",{style:{width:42,height:42,borderRadius:"50%",background:e.method===d.id?`linear-gradient(135deg,${v.rose},${v.burgundy})`:`${v.blush}30`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:19,transition:"all 0.3s",flexShrink:0},children:d.icon}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:600,color:v.text},children:d.label}),o.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:v.textMuted},children:d.sub})]}),o.jsx("div",{style:{width:20,height:20,borderRadius:"50%",border:`2px solid ${e.method===d.id?v.burgundy:v.border}`,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.3s",flexShrink:0},children:e.method===d.id&&o.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:`linear-gradient(135deg,${v.rose},${v.burgundy})`,animation:"fadeInScale 0.25s cubic-bezier(0.34,1.56,0.64,1)"}})})]},d.id))}),e.method==="card"&&o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,animation:"floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1)"},className:"co-two-col",children:[o.jsx(Oe,{label:"Card Number",placeholder:"1234 5678 9012 3456",icon:"💳",value:e.cardNumber,onChange:d=>l("cardNumber",a(d)),error:r.cardNumber,touched:n.cardNumber,onBlur:()=>i("cardNumber"),maxLength:19,full:!0}),o.jsx(Oe,{label:"Name on Card",placeholder:"ARYA SHARMA",value:e.cardName,onChange:d=>l("cardName",d.toUpperCase()),error:r.cardName,touched:n.cardName,onBlur:()=>i("cardName"),full:!0}),o.jsx(Oe,{label:"Expiry (MM/YY)",placeholder:"MM/YY",value:e.expiry,onChange:d=>l("expiry",s(d)),error:r.expiry,touched:n.expiry,onBlur:()=>i("expiry"),maxLength:5}),o.jsx(Oe,{label:"CVV",placeholder:"•••",type:"password",value:e.cvv,onChange:d=>l("cvv",d.replace(/\D/g,"").slice(0,4)),error:r.cvv,touched:n.cvv,onBlur:()=>i("cvv"),maxLength:4})]}),e.method==="upi"&&o.jsx("div",{style:{animation:"floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1)"},children:o.jsx(Oe,{label:"UPI ID",placeholder:"yourname@paytm",icon:"📲",value:e.upiId,onChange:d=>l("upiId",d),error:r.upiId,touched:n.upiId,onBlur:()=>i("upiId"),full:!0})}),e.method==="cod"&&o.jsxs("div",{style:{padding:"18px 22px",background:`linear-gradient(135deg,${v.champagne}20,${v.blush}14)`,borderRadius:10,border:`1.5px solid ${v.champagne}44`,animation:"floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8},children:[o.jsx("span",{style:{fontSize:20},children:"📦"}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:600,color:v.text},children:"Cash on Delivery"})]}),o.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:v.textMuted,margin:0,lineHeight:1.65},children:"Pay with cash at your door. An additional ₹49 COD handling fee applies. Please keep exact change ready."})]}),o.jsx("div",{style:{display:"flex",gap:10,marginTop:22,flexWrap:"wrap"},children:["🔒 SSL Encrypted","🛡️ Secure Payment","✓ PCI Compliant"].map(d=>o.jsx("span",{style:{padding:"7px 13px",background:`${v.blush}14`,borderRadius:20,border:`1px solid ${v.border}`,fontFamily:"'Poppins',sans-serif",fontSize:9,color:v.textMuted,fontWeight:500,letterSpacing:"0.3px"},children:d},d))})]})}function Om({items:e,shippingInfo:t,paymentInfo:r,subtotal:n,discountAmount:i,shipping:a,total:s,appliedCoupon:l}){const c={card:"Credit / Debit Card",upi:"UPI Payment",cod:"Cash on Delivery"};return o.jsxs("div",{className:"step-slide",children:[o.jsx(hn,{text:"Items in Your Order"}),o.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10,maxHeight:210,overflowY:"auto",paddingRight:6,marginBottom:24},className:"modal-scroll",children:e.map((d,f)=>{const g=d.product||d,p=Gn(g),k=g.name||"Product",w=Number(g.price||0),j=d.quantity||1;return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:13,padding:"11px 14px",background:v.surface,borderRadius:8,border:`1px solid ${v.border}`,animation:`floatUp 0.35s cubic-bezier(0.34,1.56,0.64,1) ${f*.08}s both`},children:[o.jsx("div",{style:{width:48,height:48,borderRadius:6,overflow:"hidden",background:`${v.blush}20`,flexShrink:0},children:p&&o.jsx("img",{src:p,alt:k,style:{width:"100%",height:"100%",objectFit:"cover"},onError:x=>x.target.style.display="none"})}),o.jsxs("div",{style:{flex:1,minWidth:0},children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:15,color:v.text,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:k}),o.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:v.textMuted},children:["Qty: ",j]})]}),o.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,fontWeight:700,color:v.burgundy,whiteSpace:"nowrap"},children:["₹",(w*j).toLocaleString("en-IN")]})]},d._id||f)})}),o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:22},className:"co-two-col",children:[o.jsxs("div",{style:{padding:"18px 20px",background:v.surface,borderRadius:10,border:`1.5px solid ${v.border}`},children:[o.jsx(hn,{text:"Deliver To",small:!0}),o.jsxs("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:v.text,fontWeight:600,margin:"0 0 4px"},children:[t.firstName," ",t.lastName]}),o.jsxs("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:v.textMuted,margin:0,lineHeight:1.6},children:[t.address,t.apartment?`, ${t.apartment}`:"",o.jsx("br",{}),t.city,", ",t.state," –"," ",t.pincode,o.jsx("br",{}),"📱 ",t.phone]})]}),o.jsxs("div",{style:{padding:"18px 20px",background:v.surface,borderRadius:10,border:`1.5px solid ${v.border}`},children:[o.jsx(hn,{text:"Payment",small:!0}),o.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:v.text,fontWeight:600,margin:"0 0 4px"},children:c[r.method]}),r.method==="card"&&o.jsxs("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:v.textMuted,margin:0},children:["•••• •••• ••••"," ",r.cardNumber.replace(/\s/g,"").slice(-4)]}),r.method==="upi"&&o.jsx("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:v.textMuted,margin:0},children:r.upiId})]})]}),o.jsxs("div",{style:{padding:"22px 24px",background:`linear-gradient(135deg,${v.blush}14,${v.champagne}10)`,borderRadius:10,border:`1.5px solid ${v.border}`},children:[o.jsx(hn,{text:"Price Summary",small:!0}),o.jsx(vo,{label:"Subtotal",value:`₹${n.toLocaleString("en-IN")}`}),i>0&&o.jsx(vo,{label:`Coupon (${((l==null?void 0:l.code)||(l==null?void 0:l.offercode)||"").toUpperCase()})`,value:`-₹${i.toLocaleString("en-IN")}`,green:!0}),o.jsx(vo,{label:"Shipping",value:a===0?"Free ✨":`₹${a}`,highlight:a===0}),r.method==="cod"&&o.jsx(vo,{label:"COD Fee",value:"₹49 (at delivery)",muted:!0}),o.jsx("div",{style:{borderTop:`1.5px solid ${v.border}`,margin:"12px 0 14px"}}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline"},children:[o.jsx("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:v.text},children:"Total Amount"}),o.jsxs("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:30,fontWeight:600,background:`linear-gradient(135deg,${v.rose},${v.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:["₹",s.toLocaleString("en-IN")]})]})]})]})}function Hm({orderId:e,onClose:t,navigate:r}){const n=[v.rose,v.burgundy,v.champagne,v.blush,v.gold,v.success];return o.jsxs("div",{style:{padding:"56px 40px",textAlign:"center",position:"relative",overflow:"hidden"},children:[Array.from({length:28}).map((i,a)=>o.jsx("div",{style:{position:"absolute",left:`${Math.random()*100}%`,top:`${35+Math.random()*30}%`,width:`${4+Math.random()*9}px`,height:`${4+Math.random()*9}px`,borderRadius:Math.random()>.5?"50%":"2px",backgroundColor:n[Math.floor(Math.random()*n.length)],animation:`confettiFall ${1.2+Math.random()*1.4}s ease-out ${Math.random()*.8}s forwards`}},a)),o.jsx("div",{style:{width:96,height:96,borderRadius:"50%",background:`linear-gradient(135deg,${v.success}22,${v.success}10)`,border:`3px solid ${v.success}`,display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 26px",animation:"fadeInScale 0.55s cubic-bezier(0.34,1.56,0.64,1)"},children:o.jsx("svg",{width:"48",height:"48",viewBox:"0 0 50 50",children:o.jsx("path",{d:"M13 27 L22 36 L38 16",fill:"none",stroke:v.success,strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round",style:{strokeDasharray:56,animation:"checkDraw 0.55s 0.45s ease-out both"}})})}),o.jsx("h2",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:36,fontWeight:300,margin:"0 0 8px",background:`linear-gradient(135deg,${v.text},${v.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:"floatUp 0.45s 0.35s cubic-bezier(0.34,1.56,0.64,1) both"},children:"Order Confirmed!"}),o.jsxs("p",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:v.textMuted,margin:"0 0 28px",lineHeight:1.7,animation:"floatUp 0.45s 0.45s cubic-bezier(0.34,1.56,0.64,1) both"},children:["Thank you for your purchase. Your order has been placed",o.jsx("br",{}),"and will be processed shortly."]}),o.jsxs("div",{style:{display:"inline-block",padding:"18px 38px",background:`linear-gradient(135deg,${v.blush}22,${v.champagne}15)`,borderRadius:12,border:`1.5px solid ${v.rose}44`,marginBottom:30,animation:"floatUp 0.45s 0.55s cubic-bezier(0.34,1.56,0.64,1) both"},children:[o.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"2px",textTransform:"uppercase",color:v.textMuted,marginBottom:5,fontWeight:600},children:"Order ID"}),o.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:20,fontWeight:700,color:v.burgundy,letterSpacing:"2px"},children:e})]}),o.jsx("div",{style:{display:"flex",justifyContent:"center",gap:28,marginBottom:36,flexWrap:"wrap",animation:"floatUp 0.45s 0.65s cubic-bezier(0.34,1.56,0.64,1) both"},children:[{icon:"📧",text:"Confirmation email sent"},{icon:"📦",text:"Ships in 2-3 days"},{icon:"🚚",text:"Live tracking available"}].map((i,a)=>o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7},children:[o.jsx("span",{style:{fontSize:15},children:i.icon}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:v.textMuted,fontWeight:500},children:i.text})]},a))}),o.jsxs("div",{style:{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap",animation:"floatUp 0.45s 0.75s cubic-bezier(0.34,1.56,0.64,1) both"},children:[o.jsx("button",{onClick:()=>{t(),r("/products")},style:{padding:"13px 34px",background:`linear-gradient(135deg,${v.rose},${v.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:700,borderRadius:8,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:`0 4px 16px ${v.rose}32`},onMouseEnter:i=>{i.currentTarget.style.transform="translateY(-2px)",i.currentTarget.style.boxShadow=`0 8px 24px ${v.rose}44`},onMouseLeave:i=>{i.currentTarget.style.transform="translateY(0)",i.currentTarget.style.boxShadow=`0 4px 16px ${v.rose}32`},children:"Continue Shopping"}),o.jsx("button",{onClick:()=>{t(),r("/orders")},style:{padding:"13px 34px",background:"transparent",border:`1.5px solid ${v.rose}`,color:v.burgundy,fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:600,borderRadius:8,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onMouseEnter:i=>{i.currentTarget.style.background=`linear-gradient(135deg,${v.rose},${v.burgundy})`,i.currentTarget.style.color="white",i.currentTarget.style.borderColor="transparent"},onMouseLeave:i=>{i.currentTarget.style.background="transparent",i.currentTarget.style.color=v.burgundy,i.currentTarget.style.borderColor=v.rose},children:"View Orders"})]})]})}function Oe({label:e,placeholder:t,value:r,onChange:n,error:i,touched:a,onBlur:s,type:l="text",icon:c,full:d,maxLength:f}){const g=i&&a;return o.jsxs("div",{style:{gridColumn:d?"1 / -1":void 0},children:[o.jsxs("label",{style:{display:"block",fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:g?v.error:v.textMuted,fontWeight:700,marginBottom:6,transition:"color 0.25s"},children:[c&&o.jsx("span",{style:{marginRight:5},children:c}),e]}),o.jsx("input",{type:l,placeholder:t,value:r,onChange:p=>n(p.target.value),onBlur:s,maxLength:f,className:`co-input${g?" err":""}`}),g&&o.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:v.error,marginTop:4,fontWeight:500,animation:"floatUp 0.25s cubic-bezier(0.34,1.56,0.64,1)"},children:["✕ ",i]})]})}function hn({text:e,small:t}){return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:9,marginBottom:t?13:18},children:[o.jsx("div",{style:{width:15,height:1.5,background:`linear-gradient(90deg,${v.rose},${v.burgundy})`}}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:t?9:10,letterSpacing:"1.5px",textTransform:"uppercase",color:v.burgundy,fontWeight:700},children:e})]})}function vo({label:e,value:t,green:r,highlight:n,muted:i}){return o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:9,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:v.textMuted,fontWeight:500},children:e}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:r?v.success:n?v.burgundy:i?v.textMuted:v.text,fontWeight:r?700:600},children:t})]})}function Ym(){const e=ht(),{items:t,loading:r,removeFromCart:n,updateQuantity:i}=tn(),{success:a,error:s}=Sr(),[l,c]=b.useState([]),[d,f]=b.useState(""),[g,p]=b.useState(null),[k,w]=b.useState(""),[j,x]=b.useState(new Set),[m,u]=b.useState(new Set),[h,C]=b.useState(!1),$=b.useMemo(()=>!localStorage.getItem("arke_token"),[]);b.useEffect(()=>{window.scrollTo(0,0),(async()=>{})()},[]);const y=async(ee,be)=>{x(se=>new Set([...se,ee]));try{await n(be),a("Item removed from cart")}catch(se){s("Failed to remove item"),console.error(se)}finally{x(se=>{const ve=new Set(se);return ve.delete(ee),ve})}},S=async(ee,be,se)=>{if(!(se<1)){u(ve=>new Set([...ve,ee]));try{await i(be,se),a(`Quantity updated to ${se}`)}catch(ve){s("Failed to update quantity"),console.error(ve)}finally{u(ve=>{const z=new Set(ve);return z.delete(ee),z})}}},N=t.reduce((ee,be)=>{const se=be.product||be,ve=Number(se.price||se.salePrice||0);return ee+ve*(be.quantity||1)},0),P=(()=>{if(!g)return 0;const ee=Number(g.discountValue||g.offerValue||0);return(g.discountType||g.offertype||"flat")==="percentage"?Math.round(N*ee/100):Math.min(ee,N)})(),E=N>=999?0:99,Q=N-P+E,G=()=>{const ee=d.trim().toUpperCase();if(!ee){w("Please enter a coupon code");return}const be=l.find(ve=>(ve.code||ve.offercode||"").toUpperCase()===ee);if(!be){w("Invalid or expired coupon code"),p(null);return}if(be.expiryDate&&new Date(be.expiryDate)<new Date){w("This coupon has expired"),p(null);return}const se=Number(be.minOrderAmount||be.minOrder||0);if(N<se){w(`Minimum order ₹${se.toLocaleString("en-IN")} required`),p(null);return}p(be),w(""),a("Coupon applied successfully!")},he=()=>{p(null),f(""),w("")};return o.jsxs("div",{style:{background:v.bg,minHeight:"100vh",paddingTop:120},children:[o.jsx("style",{children:`
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
      `}),o.jsx(Gm,{itemCount:t.length}),r?o.jsx(Jm,{}):$?o.jsx(Sc,{icon:"◇",title:"Sign in to view your cart",sub:"Your saved items will appear here",btn:"Sign In",onClick:()=>e("/")}):t.length===0?o.jsx(Sc,{icon:"◈",title:"Your cart is empty",sub:"Discover pieces crafted just for you",btn:"Shop Now",onClick:()=>e("/products")}):o.jsxs("div",{className:"cart-main",style:{padding:"48px 80px",display:"grid",gridTemplateColumns:"1fr 420px",gap:48,alignItems:"start"},children:[o.jsx(Vm,{items:t,removingItems:j,updatingQty:m,onRemove:y,onUpdateQty:S,navigate:e}),o.jsx(Xm,{subtotal:N,discountAmount:P,shipping:E,total:Q,appliedCoupon:g,couponInput:d,couponError:k,onCouponChange:f,onApplyCoupon:G,onRemoveCoupon:he,onCouponErrorClear:()=>w(""),onCheckout:()=>C(!0)})]}),o.jsx(_m,{isOpen:h,onClose:()=>C(!1),items:t,subtotal:N,discountAmount:P,shipping:E,total:Q,appliedCoupon:g})]})}function Gm({itemCount:e}){return o.jsxs("div",{className:"cart-header",style:{padding:"60px 80px 40px",borderBottom:`1.5px solid ${v.border}`},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:14},children:[o.jsx("div",{style:{width:28,height:1.5,background:`linear-gradient(90deg,${v.rose},${v.burgundy})`}}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:v.burgundy,fontWeight:600},children:"Your Selection"})]}),o.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:20,flexWrap:"wrap"},children:[o.jsx("h1",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(36px,4vw,56px)",fontWeight:300,color:v.text,margin:0,background:`linear-gradient(135deg,${v.text},${v.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:"Shopping Cart"}),e>0&&o.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,color:v.textMuted,letterSpacing:1,fontWeight:500},children:[e," ",e===1?"item":"items"]})]})]})}function Vm({items:e,removingItems:t,updatingQty:r,onRemove:n,onUpdateQty:i,navigate:a}){return o.jsxs("div",{className:"cart-items",children:[o.jsx("div",{style:{display:"grid",gridTemplateColumns:"120px 1fr auto auto",gap:24,paddingBottom:16,borderBottom:`1.5px solid ${v.border}`,marginBottom:8},children:["Product","","Qty","Price"].map(s=>o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"1.5px",textTransform:"uppercase",color:v.textMuted,fontWeight:600},children:s},s||"details"))}),o.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.map(s=>{const l=s._id||s.id,c=s.product||s,d=c._id||c.id;return o.jsx(Qm,{item:s,isRemoving:t.has(l),isUpdatingQty:r.has(l),onRemove:()=>n(l,d),onUpdateQty:f=>i(l,d,f),navigate:a},l)})})]})}function Qm({item:e,isRemoving:t,isUpdatingQty:r,onRemove:n,onUpdateQty:i,navigate:a}){const s=e.product||{},l=Gn(s),c=s.name||"Unknown Product",d=Number(s.price||0),f=e.quantity||1,g=s._id||s.id;return o.jsxs("div",{style:{display:"grid",gridTemplateColumns:"120px 1fr auto auto",gap:24,padding:"24px 0",borderBottom:`1px solid ${v.border}`,alignItems:"center",opacity:t?.5:1,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",pointerEvents:t?"none":"auto"},children:[o.jsx("div",{style:{width:120,height:140,flexShrink:0,overflow:"hidden",cursor:"pointer",borderRadius:6,backgroundColor:`${v.blush}20`,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onClick:()=>a(`/products/${g}`),onMouseEnter:p=>{p.currentTarget.style.boxShadow=`0 8px 20px ${v.rose}25`,p.currentTarget.style.transform="scale(1.02)"},onMouseLeave:p=>{p.currentTarget.style.boxShadow="none",p.currentTarget.style.transform="scale(1)"},children:l?o.jsx("img",{src:l,alt:c,style:{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onError:p=>p.target.style.display="none",onMouseEnter:p=>p.target.style.transform="scale(1.08)",onMouseLeave:p=>p.target.style.transform="scale(1)"}):o.jsx(sp,{product:s,small:!0})}),o.jsxs("div",{children:[o.jsx("div",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:18,fontWeight:400,color:v.text,marginBottom:8,cursor:"pointer",lineHeight:1.3,transition:"color 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onClick:()=>a(`/product/${g}`),onMouseEnter:p=>p.currentTarget.style.color=v.burgundy,onMouseLeave:p=>p.currentTarget.style.color=v.text,children:c}),s.metal_type&&o.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:v.textMuted,letterSpacing:.5,marginBottom:4},children:["Metal: ",s.metal_type]}),s.type&&o.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,color:v.textMuted,letterSpacing:.5,marginBottom:12},children:s.type}),o.jsx("button",{onClick:n,disabled:t,style:{background:"none",border:"none",color:v.rose,cursor:t?"not-allowed":"pointer",fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",padding:0,transition:"color 0.2s",fontWeight:600},onMouseEnter:p=>!t&&(p.target.style.color=v.error),onMouseLeave:p=>!t&&(p.target.style.color=v.rose),children:t?"Removing…":"× Remove"})]}),o.jsx(Km,{qty:f,isUpdating:r,onUpdateQty:i}),o.jsxs("div",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:18,background:`linear-gradient(135deg,${v.rose},${v.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textAlign:"right",whiteSpace:"nowrap",fontWeight:400},children:["₹",(d*f).toLocaleString("en-IN")]})]})}function Km({qty:e,isUpdating:t,onUpdateQty:r}){return o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,background:`${v.blush}20`,border:`1.5px solid ${v.border}`,borderRadius:6,padding:"4px 8px",opacity:t?.6:1,pointerEvents:t?"none":"auto",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},children:[o.jsx("button",{onClick:()=>r(Math.max(1,e-1)),disabled:t||e<=1,style:{background:"none",border:"none",color:v.rose,cursor:t||e<=1?"not-allowed":"pointer",fontSize:16,padding:"2px 6px",transition:"color 0.2s",fontWeight:600},onMouseEnter:n=>!t&&e>1&&(n.target.style.color=v.burgundy),onMouseLeave:n=>n.target.style.color=v.rose,children:"−"}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:v.text,minWidth:24,textAlign:"center",fontWeight:700},children:e}),o.jsx("button",{onClick:()=>r(e+1),disabled:t,style:{background:"none",border:"none",color:v.rose,cursor:t?"not-allowed":"pointer",fontSize:16,padding:"2px 6px",transition:"color 0.2s",fontWeight:600},onMouseEnter:n=>!t&&(n.target.style.color=v.burgundy),onMouseLeave:n=>n.target.style.color=v.rose,children:"+"})]})}function Xm({subtotal:e,discountAmount:t,shipping:r,total:n,appliedCoupon:i,couponInput:a,couponError:s,onCouponChange:l,onApplyCoupon:c,onRemoveCoupon:d,onCouponErrorClear:f,onCheckout:g}){return o.jsx("div",{className:"cart-sidebar",style:{display:"flex",flexDirection:"column",gap:16,position:"sticky",top:140},children:o.jsxs("div",{style:{background:v.surface,border:`1.5px solid ${v.border}`,padding:40,borderRadius:8,boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[o.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:32},children:[o.jsx("div",{style:{width:20,height:1.5,background:`linear-gradient(90deg,${v.rose},${v.burgundy})`}}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:v.burgundy,fontWeight:700},children:"Order Summary"})]}),o.jsx(ta,{label:"Subtotal",value:`₹${e.toLocaleString("en-IN")}`}),t>0&&o.jsx(ta,{label:`Discount (${((i==null?void 0:i.code)||(i==null?void 0:i.offercode)||"").toUpperCase()})`,value:`-₹${t.toLocaleString("en-IN")}`,highlight:!0,green:!0}),o.jsx(ta,{label:"Shipping",value:r===0?"Free":`₹${r}`,highlight:r===0}),r>0&&o.jsx("div",{style:{background:`${v.blush}20`,border:`1px solid ${v.rose}40`,padding:"10px 14px",marginBottom:20,borderRadius:6},children:o.jsxs("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:v.rose,letterSpacing:.5,fontWeight:500},children:["Add ₹",Math.max(0,999-e).toLocaleString("en-IN")," for free shipping"]})}),o.jsx("div",{style:{borderTop:`1px solid ${v.border}`,margin:"20px 0 24px"}}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginBottom:28},children:[o.jsx("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:v.text},children:"Total"}),o.jsxs("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:28,background:`linear-gradient(135deg,${v.rose},${v.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",fontWeight:400},children:["₹",n.toLocaleString("en-IN")]})]}),o.jsxs("div",{style:{borderTop:`1px solid ${v.border}`,paddingTop:24,marginBottom:24},children:[o.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:v.textMuted,marginBottom:12,fontWeight:600},children:"Apply Coupon"}),i?o.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",background:`${v.blush}20`,border:`1.5px solid ${v.rose}`,padding:"12px 14px",borderRadius:6},children:[o.jsxs("div",{children:[o.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:9,letterSpacing:"1px",textTransform:"uppercase",color:v.rose,marginBottom:2,fontWeight:700},children:"✓ Coupon Applied"}),o.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:12,fontWeight:700,color:v.text,letterSpacing:"0.5px"},children:(i.code||i.offercode||"").toUpperCase()})]}),o.jsx("button",{onClick:d,style:{background:"none",border:"none",color:v.rose,cursor:"pointer",fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"0.5px",textTransform:"uppercase",transition:"color 0.2s",fontWeight:600},onMouseEnter:p=>p.target.style.color=v.error,onMouseLeave:p=>p.target.style.color=v.rose,children:"Remove"})]}):o.jsxs(o.Fragment,{children:[o.jsxs("div",{style:{display:"flex",gap:8,marginBottom:8},children:[o.jsx("input",{type:"text",value:a,onChange:p=>{l(p.target.value.toUpperCase()),f()},onKeyDown:p=>p.key==="Enter"&&c(),placeholder:"ENTER CODE",style:{flex:1,background:`${v.blush}20`,border:`1.5px solid ${v.border}`,color:v.text,padding:"10px 14px",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1px",outline:"none",borderRadius:6,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)"},onFocus:p=>{p.target.style.borderColor=v.rose,p.target.style.background=`${v.blush}30`},onBlur:p=>{p.target.style.borderColor=v.border,p.target.style.background=`${v.blush}20`}}),o.jsx("button",{onClick:c,style:{padding:"10px 18px",background:"transparent",border:`1.5px solid ${v.rose}`,color:v.burgundy,fontFamily:"'Poppins',sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",cursor:"pointer",transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",whiteSpace:"nowrap",borderRadius:6,fontWeight:600},onMouseEnter:p=>{p.currentTarget.style.background=`linear-gradient(135deg,${v.rose},${v.burgundy})`,p.currentTarget.style.color="white",p.currentTarget.style.borderColor="transparent"},onMouseLeave:p=>{p.currentTarget.style.background="transparent",p.currentTarget.style.color=v.burgundy,p.currentTarget.style.borderColor=v.rose},children:"Apply"})]}),s&&o.jsxs("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:10,color:v.error,letterSpacing:"0.3px",fontWeight:500},children:["✕ ",s]})]})]}),o.jsx("button",{onClick:g,style:{width:"100%",padding:16,background:`linear-gradient(135deg,${v.rose},${v.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:700,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",borderRadius:6,boxShadow:`0 4px 16px ${v.rose}30`},onMouseEnter:p=>{p.target.style.transform="translateY(-2px)",p.target.style.boxShadow=`0 8px 24px ${v.rose}40`},onMouseLeave:p=>{p.target.style.transform="translateY(0)",p.target.style.boxShadow=`0 4px 16px ${v.rose}30`},children:"Proceed to Checkout →"})]})})}function ta({label:e,value:t,highlight:r,green:n}){return o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:16,alignItems:"center"},children:[o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"0.5px",textTransform:"uppercase",color:v.textMuted,fontWeight:500},children:e}),o.jsx("span",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:n?v.success:r?v.burgundy:v.text,fontWeight:n?700:600},children:t})]})}function Jm(){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:120,gap:20},children:[o.jsx("div",{style:{width:48,height:48,border:`3px solid ${v.border}`,borderTopColor:v.rose,borderRadius:"50%",animation:"spin 1s linear infinite"}}),o.jsx("span",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:18,color:v.textMuted,fontStyle:"italic",fontWeight:300},children:"Loading your cart…"})]})}function Sc({icon:e,title:t,sub:r,btn:n,onClick:i}){return o.jsxs("div",{style:{textAlign:"center",padding:"120px 80px"},children:[o.jsx("div",{style:{fontSize:56,color:`${v.rose}40`,marginBottom:24},children:e}),o.jsx("div",{style:{fontFamily:"'Cormorant Garamond',serif",fontSize:32,fontWeight:300,color:v.text,marginBottom:12,background:`linear-gradient(135deg,${v.text},${v.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:t}),o.jsx("div",{style:{fontFamily:"'Poppins',sans-serif",fontSize:13,color:v.textMuted,letterSpacing:.5,marginBottom:40},children:r}),o.jsx("button",{onClick:i,style:{padding:"14px 48px",background:`linear-gradient(135deg,${v.rose},${v.burgundy})`,color:"white",border:"none",fontFamily:"'Poppins',sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",cursor:"pointer",fontWeight:700,borderRadius:6,transition:"all 0.3s cubic-bezier(0.34,1.56,0.64,1)",boxShadow:`0 4px 16px ${v.rose}30`},onMouseEnter:a=>{a.target.style.transform="translateY(-2px)",a.target.style.boxShadow=`0 8px 24px ${v.rose}40`},onMouseLeave:a=>{a.target.style.transform="translateY(0)",a.target.style.boxShadow=`0 4px 16px ${v.rose}30`},children:n})]})}const J={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function qm(){const e=ht(),{items:t,removeFromWishlist:r}=$i(),{addToCart:n}=tn(),{success:i,error:a}=Sr(),[s,l]=b.useState(new Set),[c,d]=b.useState(new Set),f=p=>{l(k=>new Set([...k,p])),setTimeout(()=>{r(p),i("Removed from wishlist"),l(k=>{const w=new Set(k);return w.delete(p),w})},300)},g=async p=>{const k=p._id||p.id||p.productId;d(w=>new Set([...w,k]));try{await n(p,1),i("Added to cart! 🛒")}catch(w){a("Failed to add to cart"),console.error(w)}finally{d(w=>{const j=new Set(w);return j.delete(k),j})}};return o.jsxs("div",{style:{background:J.bg,minHeight:"100vh",paddingTop:106},children:[o.jsx("style",{children:`
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
          border-bottom: 1px solid ${J.border};
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
          background: linear-gradient(to right, ${J.rose}, ${J.burgundy});
          border-radius: 2px;
        }
        .wl-eyebrow-text {
          font-family: 'Poppins', sans-serif;
          font-size: 10.5px;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: ${J.burgundy};
          font-weight: 600;
        }

        /* ── Heading ── */
        .wl-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(40px, 5.5vw, 76px);
          font-weight: 300;
          line-height: 1.0;
          letter-spacing: -1px;
          background: linear-gradient(135deg, ${J.text} 0%, ${J.burgundy} 100%);
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
          color: ${J.textMuted};
          letter-spacing: 0.5px;
          margin-top: 14px;
          animation: fadeInUp 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.25s both;
          position: relative;
          z-index: 2;
        }
        .wl-subtext strong {
          color: ${J.burgundy};
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
          background: ${J.surface};
          border: 1.5px solid ${J.border};
          border-radius: 8px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.4s cubic-bezier(0.34,1.56,0.64,1);
          animation: slideDown 0.5s ease 0.35s both;
        }
        .wl-card:hover {
          border-color: ${J.rose};
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
          background: linear-gradient(135deg, ${J.blush} 0%, ${J.champagne} 100%);
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
          background: ${J.rose};
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
          color: ${J.text};
          line-height: 1.4;
          cursor: pointer;
          transition: color 0.3s;
          margin: 0;
        }
        .wl-card-name:hover {
          color: ${J.burgundy};
        }

        /* ── Card Price ── */
        .wl-card-price {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: ${J.burgundy};
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
          border-top: 1px solid ${J.borderLight};
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
          background: ${J.rose};
          color: ${J.surface};
          border-color: ${J.rose};
        }
        .wl-btn-primary:hover:not(:disabled) {
          background: ${J.burgundy};
          border-color: ${J.burgundy};
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(139,70,84,0.2);
        }
        .wl-btn-primary:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .wl-btn-secondary {
          background: transparent;
          color: ${J.textMuted};
          border-color: ${J.border};
        }
        .wl-btn-secondary:hover:not(:disabled) {
          background: ${J.blush};
          color: ${J.burgundy};
          border-color: ${J.rose};
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
          color: ${J.textMuted};
          font-style: italic;
          margin: 0;
          animation: fadeInUp 0.6s ease 0.3s both;
        }
        .wl-empty-sub {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${J.textMuted};
          letter-spacing: 0.5px;
          max-width: 300px;
          animation: fadeInUp 0.6s ease 0.4s both;
        }
        .wl-empty-cta {
          padding: 14px 36px;
          background: ${J.rose};
          color: ${J.surface};
          border: 1.5px solid ${J.rose};
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
          background: ${J.burgundy};
          border-color: ${J.burgundy};
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
      `}),o.jsxs("div",{className:"wl-hero",children:[o.jsxs("div",{className:"wl-eyebrow",children:[o.jsx("div",{className:"wl-eyebrow-line"}),o.jsx("span",{className:"wl-eyebrow-text",children:"Personal Collection"})]}),o.jsx("h1",{className:"wl-heading",children:"My Wishlist"}),t.length>0&&o.jsxs("p",{className:"wl-subtext",children:["You have ",o.jsx("strong",{children:t.length})," item",t.length!==1?"s":""," saved"]})]}),o.jsx("div",{className:"wl-content",children:t.length===0?o.jsxs("div",{className:"wl-empty",children:[o.jsx("div",{className:"wl-empty-icon",children:"♡"}),o.jsx("h2",{className:"wl-empty-title",children:"Your wishlist is empty"}),o.jsx("p",{className:"wl-empty-sub",children:"Start saving your favorite pieces for later"}),o.jsx("button",{onClick:()=>e("/products"),className:"wl-empty-cta",children:"Explore Collection"})]}):o.jsx("div",{className:"wl-grid",children:t.map((p,k)=>{const w=p.product||p,j=w._id||w.id||p.productId||p._id||p.id,x=s.has(j),m=c.has(j),u=Gn(w),h=w.name||w.title||"Product",C=Number(w.price||w.salePrice||0);return o.jsxs("div",{className:`wl-card ${x?"removing":""}`,style:{animation:`slideDown 0.5s cubic-bezier(0.34,1.56,0.64,1) ${k*40}ms both`},children:[o.jsxs("div",{className:"wl-card-image",onClick:()=>e(`/product/${j}`),children:[u?o.jsx("img",{src:u,alt:h,onError:$=>$.target.style.display="none"}):o.jsx(sp,{product:w,small:!0}),o.jsx("div",{className:"wl-card-badge",onClick:()=>f(j),children:"♡"})]}),o.jsxs("div",{className:"wl-card-body",children:[o.jsx("h3",{className:"wl-card-name",onClick:()=>e(`/product/${j}`),children:h}),o.jsxs("div",{className:"wl-card-price",children:["₹",C.toLocaleString("en-IN")]}),o.jsxs("div",{className:"wl-card-buttons",children:[o.jsx("button",{onClick:()=>g(w),disabled:m,className:"wl-btn wl-btn-primary",children:m?"Adding...":"Add to Cart"}),o.jsx("button",{onClick:()=>f(j),disabled:x,className:"wl-btn wl-btn-secondary",children:x?"Removing...":"Remove"})]})]})]},j)})})})]})}const Y={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4"},Zm=async()=>{const e=await oe.getGiftForHer();return e.success&&e.data?e.data:null},Rt={title:"Her",subtitle:"Curated For Her",description:"Timeless pieces that speak when words fall short. Each jewel chosen to celebrate the women who make life beautiful.",badgeText:"♀ Curated For Her"},ex=[{label:"Anniversary",icon:"💕"},{label:"Birthday",icon:"✨"},{label:"Wedding",icon:"👑"},{label:"Just Because",icon:"💎"}],tx=[{label:"All Gifts",value:"all"},{label:"Rings",value:"ring"},{label:"Necklaces",value:"necklace"},{label:"Earrings",value:"earring"},{label:"Bracelets",value:"bracelet"},{label:"Sets",value:"set"}];function rx(){const[e,t]=b.useState(Rt),[r,n]=b.useState([]),[i,a]=b.useState(ex),[s,l]=b.useState(tx),[c,d]=b.useState(!0),[f,g]=b.useState("all"),[p,k]=b.useState("default"),[w,j]=b.useState(null);b.useEffect(()=>{window.scrollTo(0,0),(async()=>{var h,C,$;try{const y=await Zm();y&&(y.page&&t({title:y.page.title||Rt.title,subtitle:y.page.subtitle||Rt.subtitle,description:y.page.description||Rt.description,badgeText:y.page.badgeText||Rt.badgeText}),(h=y.products)!=null&&h.length&&n(y.products),(C=y.filters)!=null&&C.length&&l(y.filters),($=y.tags)!=null&&$.length&&a(y.tags))}catch(y){console.error("GiftForHer load error:",y)}finally{d(!1)}})()},[]);const m=[...r.filter(u=>{var y;if(f==="all")return!0;const h=(u.name||"").toLowerCase(),C=(u.tags||[]).join(" ").toLowerCase(),$=(((y=u.category)==null?void 0:y.name)||"").toLowerCase();return h.includes(f)||C.includes(f)||$.includes(f)})].sort((u,h)=>p==="price-asc"?(u.price||0)-(h.price||0):p==="price-desc"?(h.price||0)-(u.price||0):p==="name"?(u.name||"").localeCompare(h.name||""):0);return o.jsxs("div",{style:{background:Y.bg,minHeight:"100vh",paddingTop:"120px"},children:[o.jsx("style",{children:`
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
          background: ${Y.blush}30 !important;
          border-color: ${Y.rose} !important;
          color: ${Y.burgundy} !important;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .loading-spinner {
          width: 48px;
          height: 48px;
          border: 3px solid ${Y.border};
          border-top-color: ${Y.rose};
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
      `}),o.jsxs("div",{className:"gfh-hero",style:{position:"relative",padding:"60px 80px 50px",overflow:"hidden"},children:[o.jsx("div",{style:{position:"absolute",top:-60,right:-60,width:400,height:400,borderRadius:"50%",background:`radial-gradient(circle, ${Y.rose}12, transparent 70%)`,pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",bottom:0,left:"30%",width:300,height:300,borderRadius:"50%",background:`radial-gradient(circle, ${Y.blush}12, transparent 70%)`,pointerEvents:"none"}}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:24,position:"relative",zIndex:1},children:[o.jsxs("div",{children:[o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:Y.burgundy,marginBottom:14,fontWeight:600},children:["♀ ",e.badgeText||Rt.badgeText]}),o.jsxs("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(42px, 5vw, 72px)",fontWeight:300,color:Y.text,margin:0,lineHeight:1.1,background:`linear-gradient(135deg, ${Y.text}, ${Y.burgundy})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:["Gift for"," ",o.jsx("span",{style:{color:Y.rose,background:"none",WebkitTextFillColor:"unset",fontStyle:"italic"},children:e.title||Rt.title})]}),e.subtitle&&o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:Y.textMuted,marginTop:10,fontWeight:500},children:e.subtitle}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:14,color:Y.textMuted,marginTop:14,letterSpacing:"0.3px",maxWidth:480,lineHeight:1.8,fontWeight:400},children:e.description||Rt.description})]}),o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{color:Y.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:600},children:"Sort by"}),o.jsxs("select",{value:p,onChange:u=>k(u.target.value),style:{background:Y.surface,border:`1.5px solid ${Y.border}`,color:Y.text,padding:"10px 14px",fontFamily:"'Poppins', sans-serif",fontSize:11,cursor:"pointer",outline:"none",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",fontWeight:500},onFocus:u=>{u.target.style.borderColor=Y.rose,u.target.style.boxShadow=`0 0 0 3px ${Y.blush}40`},onBlur:u=>{u.target.style.borderColor=Y.border,u.target.style.boxShadow="none"},children:[o.jsx("option",{value:"default",children:"Most Popular"}),o.jsx("option",{value:"price-asc",children:"Price: Low to High"}),o.jsx("option",{value:"price-desc",children:"Price: High to Low"}),o.jsx("option",{value:"name",children:"Name: A - Z"})]})]})]}),i.length>0&&o.jsx("div",{className:"gfh-occasions",style:{display:"flex",gap:12,marginTop:40,flexWrap:"wrap",position:"relative",zIndex:1},children:i.map((u,h)=>o.jsxs("div",{className:"gfh-occ",onMouseEnter:()=>j(h),onMouseLeave:()=>j(null),style:{padding:"11px 22px",border:`1.5px solid ${w===h?Y.rose:Y.border}`,background:w===h?`${Y.blush}20`:"transparent",display:"flex",alignItems:"center",gap:8,borderRadius:"6px"},children:[o.jsx("span",{className:"gfh-occ-icon",style:{fontSize:16},children:u.icon}),o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:w===h?Y.burgundy:Y.textMuted,fontWeight:600},children:u.label})]},u._id||h))})]}),o.jsx("div",{className:"gfh-divider",style:{height:1.5,background:`linear-gradient(90deg, transparent, ${Y.rose}40, transparent)`,margin:"32px 80px 0"}}),s.length>0&&o.jsxs("div",{className:"gfh-filters",style:{padding:"24px 80px",display:"flex",gap:8,alignItems:"center",overflowX:"auto",overflowY:"hidden"},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:Y.textMuted,marginRight:12,whiteSpace:"nowrap",fontWeight:600},children:"Filter"}),s.map((u,h)=>o.jsx("button",{className:"gfh-btn",onClick:()=>g(u.value),style:{padding:"9px 18px",background:f===u.value?`linear-gradient(135deg, ${Y.rose}, ${Y.burgundy})`:"transparent",border:`1.5px solid ${f===u.value?"transparent":Y.border}`,color:f===u.value?"white":Y.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",whiteSpace:"nowrap",borderRadius:"6px",fontWeight:600,boxShadow:f===u.value?`0 4px 12px ${Y.rose}30`:"none"},children:u.label},u._id||h))]}),o.jsxs("div",{className:"gfh-products",style:{padding:"24px 80px 80px"},children:[!c&&o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1px",color:Y.textMuted,textTransform:"uppercase",marginBottom:32,fontWeight:600},children:[m.length," piece",m.length!==1?"s":""," found"]}),c?o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 40px",gap:20},children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,color:Y.textMuted,fontStyle:"italic",fontWeight:300},children:"Curating her collection…"})]}):m.length===0?o.jsx("div",{style:{textAlign:"center",padding:"80px 40px",color:Y.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:300},children:"No pieces found"}):o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:24},children:m.map((u,h)=>o.jsx(ar,{product:u},u._id||h))})]}),o.jsxs("div",{className:"gfh-cta",style:{margin:"0 80px 80px",padding:"52px 44px",border:`1.5px solid ${Y.border}`,background:`${Y.blush}12`,textAlign:"center",borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"2px",textTransform:"uppercase",color:Y.burgundy,marginBottom:16,fontWeight:700},children:"◈ Need Help Choosing?"}),o.jsx("h3",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:36,fontWeight:300,color:Y.text,margin:"0 0 12px",letterSpacing:.5},children:"Gift Curation Service"}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:13,color:Y.textMuted,letterSpacing:"0.3px",marginBottom:32,lineHeight:1.8,maxWidth:600,margin:"0 auto 32px",fontWeight:400},children:"Tell us the occasion, budget, and her style — we'll handpick the perfect piece just for her."}),o.jsx(Be,{to:"/customer-care",className:"gfh-cta",style:{display:"inline-block",padding:"13px 36px",background:"transparent",border:`1.5px solid ${Y.rose}`,color:Y.burgundy,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",textDecoration:"none",borderRadius:"6px",fontWeight:700,boxShadow:`0 4px 12px ${Y.rose}20`},children:"Get Personalized Help →"})]})]})}const H={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",blue:"#7a9fb5",blueDark:"#5f7a95"},nx=async()=>{const e=await oe.getGiftForHim();return e.success&&e.data?e.data:null},Wt={title:"Him",subtitle:"Curated For Him",description:"Jewellery crafted for the modern man. Bold, refined, and built to be worn — not just admired.",badgeText:"♂ Curated For Him"},ox=[{label:"The Classic",desc:"Timeless & understated",icon:"◈"},{label:"The Bold",desc:"Statement pieces",icon:"✦"},{label:"The Minimal",desc:"Clean & refined",icon:"◇"},{label:"The Gifter",desc:"For someone special",icon:"♡"}],ix=[{label:"All Gifts",value:"all"},{label:"Rings",value:"ring"},{label:"Bracelets",value:"bracelet"},{label:"Chains",value:"chain"},{label:"Pendants",value:"pendant"},{label:"Cufflinks",value:"cufflink"}];function ax(){const[e,t]=b.useState(Wt),[r,n]=b.useState([]),[i,a]=b.useState(ox),[s,l]=b.useState(ix),[c,d]=b.useState(!0),[f,g]=b.useState("all"),[p,k]=b.useState("default"),[w,j]=b.useState(null);b.useEffect(()=>{window.scrollTo(0,0),(async()=>{var h,C,$;try{const y=await nx();y&&(y.page&&t({title:y.page.title||Wt.title,subtitle:y.page.subtitle||Wt.subtitle,description:y.page.description||Wt.description,badgeText:y.page.badgeText||Wt.badgeText}),(h=y.products)!=null&&h.length&&n(y.products),(C=y.filters)!=null&&C.length&&l(y.filters),($=y.tags)!=null&&$.length&&a(y.tags))}catch(y){console.error("GiftForHim load error:",y)}finally{d(!1)}})()},[]);const m=[...r.filter(u=>{var y;if(f==="all")return!0;const h=(u.name||"").toLowerCase(),C=(u.tags||[]).join(" ").toLowerCase(),$=(((y=u.category)==null?void 0:y.name)||"").toLowerCase();return h.includes(f)||C.includes(f)||$.includes(f)})].sort((u,h)=>p==="price-asc"?(u.price||0)-(h.price||0):p==="price-desc"?(h.price||0)-(u.price||0):p==="name"?(u.name||"").localeCompare(h.name||""):0);return o.jsxs("div",{style:{background:H.bg,minHeight:"100vh",paddingTop:"120px"},children:[o.jsx("style",{children:`
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
          color: ${H.blue} !important;
          border-color: ${H.blue} !important;
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
          border: 3px solid ${H.border};
          border-top-color: ${H.blue};
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
      `}),o.jsxs("div",{className:"gfm-hero",style:{position:"relative",padding:"60px 80px 50px",overflow:"hidden"},children:[o.jsx("div",{style:{position:"absolute",top:-80,right:-80,width:500,height:500,borderRadius:"50%",background:`radial-gradient(circle, ${H.blue}12, transparent 70%)`,pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",bottom:-40,left:"20%",width:350,height:350,borderRadius:"50%",background:`radial-gradient(circle, ${H.champagne}12, transparent 70%)`,pointerEvents:"none"}}),o.jsx("div",{style:{position:"absolute",top:40,right:80,width:120,height:120,border:`1px solid ${H.blue}15`,transform:"rotate(45deg)",pointerEvents:"none"}}),o.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-end",flexWrap:"wrap",gap:24,position:"relative",zIndex:1},children:[o.jsxs("div",{children:[o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"2px",textTransform:"uppercase",color:H.blueDark,marginBottom:14,fontWeight:600},children:["♂ ",e.badgeText||Wt.badgeText]}),o.jsxs("h1",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(42px, 5vw, 72px)",fontWeight:300,color:H.text,margin:0,lineHeight:1.1,background:`linear-gradient(135deg, ${H.text}, ${H.blueDark})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"},children:["Gift for"," ",o.jsx("span",{style:{color:H.blue,background:"none",WebkitTextFillColor:"unset",fontStyle:"italic"},children:e.title||Wt.title})]}),e.subtitle&&o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:H.textMuted,marginTop:10,fontWeight:500},children:e.subtitle}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:14,color:H.textMuted,marginTop:14,letterSpacing:"0.3px",maxWidth:480,lineHeight:1.8,fontWeight:400},children:e.description||Wt.description})]}),o.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center"},children:[o.jsx("span",{style:{color:H.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:600},children:"Sort by"}),o.jsxs("select",{value:p,onChange:u=>k(u.target.value),style:{background:H.surface,border:`1.5px solid ${H.border}`,color:H.text,padding:"10px 14px",fontFamily:"'Poppins', sans-serif",fontSize:11,cursor:"pointer",outline:"none",borderRadius:"6px",transition:"all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)",fontWeight:500},onFocus:u=>{u.target.style.borderColor=H.blue,u.target.style.boxShadow=`0 0 0 3px ${H.blue}25`},onBlur:u=>{u.target.style.borderColor=H.border,u.target.style.boxShadow="none"},children:[o.jsx("option",{value:"default",children:"Most Popular"}),o.jsx("option",{value:"price-asc",children:"Price: Low to High"}),o.jsx("option",{value:"price-desc",children:"Price: High to Low"}),o.jsx("option",{value:"name",children:"Name: A - Z"})]})]})]}),i.length>0&&o.jsx("div",{className:"gfm-personas",style:{display:"flex",gap:16,marginTop:40,flexWrap:"wrap",position:"relative",zIndex:1},children:i.map((u,h)=>o.jsxs("div",{className:"gfm-card",onMouseEnter:()=>j(h),onMouseLeave:()=>j(null),style:{padding:"18px 24px",minWidth:140,border:`1.5px solid ${w===h?H.blue:H.border}`,background:w===h?`${H.blue}12`:"transparent",borderRadius:"8px"},children:[o.jsx("div",{className:"gfm-icon",style:{fontSize:16,marginBottom:8},children:u.icon}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:w===h?H.blueDark:H.text,marginBottom:4,fontWeight:600},children:u.label}),o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,color:H.textMuted,letterSpacing:"0.3px",fontWeight:400},children:u.desc})]},u._id||h))})]}),o.jsx("div",{className:"gfm-divider",style:{height:1.5,background:`linear-gradient(90deg, transparent, ${H.blue}40, transparent)`,margin:"32px 80px 0"}}),s.length>0&&o.jsxs("div",{className:"gfm-filters",style:{padding:"24px 80px",display:"flex",gap:8,alignItems:"center",overflowX:"auto",overflowY:"hidden"},children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:H.textMuted,marginRight:12,whiteSpace:"nowrap",fontWeight:600},children:"Filter"}),s.map((u,h)=>o.jsx("button",{className:"gfm-btn",onClick:()=>g(u.value),style:{padding:"9px 18px",background:f===u.value?`linear-gradient(135deg, ${H.blue}, ${H.blueDark})`:"transparent",border:`1.5px solid ${f===u.value?"transparent":H.border}`,color:f===u.value?"white":H.textMuted,fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",whiteSpace:"nowrap",borderRadius:"6px",fontWeight:600,boxShadow:f===u.value?`0 4px 12px ${H.blue}30`:"none"},children:u.label},u._id||h))]}),o.jsxs("div",{className:"gfm-products",style:{padding:"24px 80px 80px"},children:[!c&&o.jsxs("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:11,letterSpacing:"1px",color:H.textMuted,textTransform:"uppercase",marginBottom:32,fontWeight:600},children:[m.length," piece",m.length!==1?"s":""," found"]}),c?o.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"100px 40px",gap:20},children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("span",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:18,color:H.textMuted,fontStyle:"italic",fontWeight:300},children:"Curating his collection…"})]}):m.length===0?o.jsx("div",{style:{textAlign:"center",padding:"80px 40px",color:H.textMuted,fontFamily:"'Cormorant Garamond', serif",fontSize:24,fontWeight:300},children:"No pieces found"}):o.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:24},children:m.map((u,h)=>o.jsx(ar,{product:u},u._id||h))})]}),o.jsxs("div",{className:"gfm-cta",style:{margin:"0 80px 80px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[o.jsxs("div",{style:{padding:"48px 40px",border:`1.5px solid ${H.border}`,background:`${H.blue}12`,borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:H.blueDark,marginBottom:12,fontWeight:700},children:"◈ Premium Packaging"}),o.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:300,color:H.text,margin:"0 0 12px"},children:"Gift Wrapping"}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,color:H.textMuted,lineHeight:1.8,margin:"0 0 24px",fontWeight:400},children:"Every order ships in our signature matte black box with a handwritten note."}),o.jsx(Be,{to:"/customer-care",className:"gfm-link",style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:H.blue,textDecoration:"none",borderBottom:`1px solid ${H.blue}40`,paddingBottom:4,display:"inline-flex",alignItems:"center",gap:6,fontWeight:700},children:"Learn more →"})]}),o.jsxs("div",{style:{padding:"48px 40px",border:`1.5px solid ${H.border}`,background:`${H.champagne}12`,borderRadius:"12px",boxShadow:"0 4px 16px rgba(0,0,0,0.04)"},children:[o.jsx("div",{style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1.5px",textTransform:"uppercase",color:H.burgundy,marginBottom:12,fontWeight:700},children:"✦ Not Sure?"}),o.jsx("h4",{style:{fontFamily:"'Cormorant Garamond', serif",fontSize:28,fontWeight:300,color:H.text,margin:"0 0 12px"},children:"Gift Cards"}),o.jsx("p",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,color:H.textMuted,lineHeight:1.8,margin:"0 0 24px",fontWeight:400},children:"Let him choose the perfect piece. Available from ₹500 to ₹50,000."}),o.jsx(Be,{to:"/customer-care",className:"gfm-link-gold",style:{fontFamily:"'Poppins', sans-serif",fontSize:10,letterSpacing:"1px",textTransform:"uppercase",color:H.burgundy,textDecoration:"none",borderBottom:`1px solid ${H.burgundy}40`,paddingBottom:4,display:"inline-flex",alignItems:"center",gap:6,fontWeight:700},children:"Buy a gift card →"})]})]})]})}const I={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4",success:"#70c878",warning:"#ffc107",info:"#2196f3",error:"#d97070"};function sx(){var k,w,j;const{user:e}=Zn(),[t,r]=b.useState([]),[n,i]=b.useState(!0),[a,s]=b.useState(""),[l,c]=b.useState(null);b.useEffect(()=>{window.scrollTo(0,0),d()},[e]);const d=async()=>{if(!e){s("Please log in to view your orders"),i(!1);return}i(!0),s("");try{const x=await fetch(`http://localhost:5050/api/orders/${e.id}`,{method:"GET",headers:{Authorization:`Bearer ${localStorage.getItem("arke_token")}`,"Content-Type":"application/json","ngrok-skip-browser-warning":"true"}});if(!x.ok){x.status===401?s("Session expired. Please log in again."):x.status===404?r([]):s("Failed to load orders. Please try again.");return}const m=await x.json();r(m.data||[])}catch(x){s("Network error. Please check your connection."),console.error("Fetch orders error:",x)}finally{i(!1)}},f=x=>({pending:`${I.warning}20`,processing:`${I.info}20`,shipped:`${I.success}20`,delivered:`${I.success}20`,cancelled:`${I.error}20`})[x==null?void 0:x.toLowerCase()]||`${I.rose}20`,g=x=>({pending:`${I.warning}40`,processing:`${I.info}40`,shipped:`${I.success}40`,delivered:`${I.success}40`,cancelled:`${I.error}40`})[x==null?void 0:x.toLowerCase()]||`${I.rose}40`,p=x=>({pending:I.warning,processing:I.info,shipped:I.success,delivered:I.success,cancelled:I.error})[x==null?void 0:x.toLowerCase()]||I.rose;return o.jsxs("div",{style:{background:I.bg,minHeight:"100vh",paddingTop:120},children:[o.jsx("style",{children:`
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
          color: ${I.text};
          margin: 0 0 12px 0;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${I.text}, ${I.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .orders-header p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          letter-spacing: 0.5px;
          color: ${I.textMuted};
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
          border: 3px solid ${I.border};
          border-top-color: ${I.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 20px;
        }

        .loading-text {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: ${I.textMuted};
          letter-spacing: 0.5px;
          font-weight: 400;
        }

        .error-state {
          padding: 24px 20px;
          background: ${I.error}15;
          border: 1.5px solid ${I.error}40;
          border-radius: 8px;
          text-align: center;
          margin: 40px 0;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .error-state p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${I.error}90;
          letter-spacing: 0.3px;
          margin: 0;
          font-weight: 500;
        }

        .empty-state {
          text-align: center;
          padding: 80px 40px;
          border: 1.5px solid ${I.border};
          border-radius: 12px;
          background: ${I.surface};
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
          color: ${I.text};
          margin: 0 0 12px 0;
        }

        .empty-state p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${I.textMuted};
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
          background: linear-gradient(135deg, ${I.rose}, ${I.burgundy});
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 16px ${I.rose}30;
        }

        .empty-state a:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px ${I.rose}40;
        }

        .orders-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .order-card {
          border: 1.5px solid ${I.border};
          border-radius: 10px;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          background: ${I.surface};
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .order-card:hover {
          border-color: ${I.rose};
          box-shadow: 0 8px 24px rgba(232, 180, 196, 0.2);
          transform: translateY(-2px);
        }

        .order-header {
          padding: 20px 24px;
          background: ${I.blush}15;
          border-bottom: 1.5px solid ${I.border};
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
          color: ${I.burgundy};
          margin-bottom: 4px;
        }

        .order-date {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3px;
          color: ${I.textMuted};
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
          color: ${I.textMuted};
          margin-bottom: 6px;
        }

        .info-value {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${I.text};
          letter-spacing: 0.3px;
          font-weight: 500;
        }

        .amount-value {
          font-family: 'Cormorant Garamond', serif;
          font-size: 24px;
          font-weight: 400;
          letter-spacing: 1px;
          background: linear-gradient(135deg, ${I.rose}, ${I.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .order-items {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: ${I.textMuted};
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .order-actions {
          padding: 16px 24px;
          background: ${I.blush}8;
          border-top: 1.5px solid ${I.border};
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .action-btn {
          padding: 9px 16px;
          background: transparent;
          border: 1.5px solid ${I.rose};
          color: ${I.burgundy};
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
          border-color: ${I.burgundy};
          background: linear-gradient(135deg, ${I.rose}20, ${I.burgundy}15);
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
          background: ${I.surface};
          border: 1.5px solid ${I.border};
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
          border-bottom: 1.5px solid ${I.border};
        }

        .modal-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 32px;
          font-weight: 300;
          letter-spacing: 1px;
          color: ${I.text};
          background: linear-gradient(135deg, ${I.text}, ${I.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        .modal-close {
          background: none;
          border: none;
          color: ${I.textMuted};
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
          color: ${I.burgundy};
        }

        .order-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 0;
          border-bottom: 1px solid ${I.border};
        }

        .order-item:last-child {
          border-bottom: none;
        }

        .item-details h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: ${I.text};
          margin: 0 0 6px 0;
          letter-spacing: 0.3px;
        }

        .item-details p {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          color: ${I.textMuted};
          margin: 0;
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .item-price {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 400;
          background: linear-gradient(135deg, ${I.rose}, ${I.burgundy});
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
          border-top: 1.5px solid ${I.border};
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
      `}),o.jsxs("div",{className:"orders-container",children:[o.jsxs("div",{className:"orders-header",children:[o.jsx("h1",{children:"My Orders"}),o.jsx("p",{children:"View and manage all your ARKE purchases"})]}),n&&o.jsxs("div",{className:"loading-state",children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("p",{className:"loading-text",children:"Loading your orders..."})]}),a&&!n&&o.jsx("div",{className:"error-state",children:o.jsxs("p",{children:["⚠️ ",a]})}),!n&&!a&&t.length===0&&o.jsxs("div",{className:"empty-state",children:[o.jsx("div",{className:"empty-state-icon",children:"📦"}),o.jsx("h2",{children:"No Orders Yet"}),o.jsx("p",{children:"You haven't placed any orders yet. Start shopping to see your orders here!"}),o.jsx("a",{href:"/products",children:"Browse Collections"})]}),!n&&!a&&t.length>0&&o.jsx("div",{className:"orders-list",children:t.map(x=>{var m,u,h,C,$,y;return o.jsxs("div",{className:"order-card",onClick:()=>c(x),children:[o.jsxs("div",{className:"order-header",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"order-id",children:["Order #",x.orderNumber||x._id.slice(-6)]}),o.jsx("div",{className:"order-date",children:new Date(x.createdAt).toLocaleDateString("en-IN")})]}),o.jsx("div",{className:"order-status",style:{background:f(x.status),border:`1px solid ${g(x.status)}`,color:p(x.status)},children:(m=x.status)==null?void 0:m.toUpperCase()})]}),o.jsxs("div",{className:"order-content",children:[o.jsxs("div",{className:"order-info",children:[o.jsx("div",{className:"info-label",children:"Total Amount"}),o.jsxs("div",{className:"amount-value",children:["₹",((u=x.totalAmount)==null?void 0:u.toLocaleString("en-IN"))||"0"]})]}),o.jsxs("div",{className:"order-info",children:[o.jsx("div",{className:"info-label",children:"Items"}),o.jsxs("div",{className:"info-value",children:[((h=x.items)==null?void 0:h.length)||0," item(s)"]})]}),o.jsxs("div",{className:"order-info",children:[o.jsx("div",{className:"info-label",children:"Delivery"}),o.jsx("div",{className:"info-value",children:x.estimatedDelivery?new Date(x.estimatedDelivery).toLocaleDateString("en-IN"):"Processing"})]}),o.jsxs("div",{className:"order-info",children:[o.jsx("div",{className:"info-label",children:"Payment"}),o.jsx("div",{className:"info-value",children:((C=x.paymentStatus)==null?void 0:C.toUpperCase())||"PENDING"})]})]}),o.jsxs("div",{className:"order-actions",children:[o.jsx("button",{className:"action-btn",children:"View Details"}),(($=x.status)==null?void 0:$.toLowerCase())==="shipped"&&o.jsx("button",{className:"action-btn",children:"Track Order"}),["pending","processing"].includes((y=x.status)==null?void 0:y.toLowerCase())&&o.jsx("button",{className:"action-btn",children:"Cancel Order"})]})]},x._id)})})]}),l&&o.jsx("div",{className:"modal",onClick:()=>c(null),children:o.jsxs("div",{className:"modal-content",onClick:x=>x.stopPropagation(),children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h2",{className:"modal-title",children:"Order Details"}),o.jsx("button",{className:"modal-close",onClick:()=>c(null),children:"✕"})]}),o.jsxs("div",{children:[o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("div",{className:"info-label",children:"Order Number"}),o.jsxs("div",{className:"info-value",children:["#",l.orderNumber||l._id.slice(-6)]})]}),o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("div",{className:"info-label",children:"Order Date"}),o.jsx("div",{className:"info-value",children:new Date(l.createdAt).toLocaleDateString("en-IN",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})]}),o.jsxs("div",{style:{marginBottom:24},children:[o.jsx("div",{className:"info-label",children:"Status"}),o.jsx("div",{className:"order-status",style:{background:f(l.status),border:`1px solid ${g(l.status)}`,color:p(l.status)},children:(k=l.status)==null?void 0:k.toUpperCase()})]}),o.jsxs("div",{style:{marginBottom:32,paddingTop:24,borderTop:`1.5px solid ${I.border}`},children:[o.jsx("div",{className:"info-label",style:{marginBottom:16},children:"Items Ordered"}),(w=l.items)==null?void 0:w.map((x,m)=>{var u;return o.jsxs("div",{className:"order-item",children:[o.jsxs("div",{className:"item-details",children:[o.jsx("h4",{children:x.name}),o.jsxs("p",{children:["Qty: ",x.quantity," × ₹",(u=x.price)==null?void 0:u.toLocaleString("en-IN")]})]}),o.jsxs("div",{className:"item-price",children:["₹",(x.quantity*x.price).toLocaleString("en-IN")]})]},m)})]}),o.jsxs("div",{style:{paddingTop:24,borderTop:`1.5px solid ${I.border}`},children:[o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{className:"info-label",style:{margin:0},children:"Subtotal"}),o.jsxs("span",{className:"info-value",children:["₹",(l.totalAmount-(l.shipping||0)).toLocaleString("en-IN")]})]}),o.jsxs("div",{className:"summary-row",children:[o.jsx("span",{className:"info-label",style:{margin:0},children:"Shipping"}),o.jsxs("span",{className:"info-value",children:["₹",(l.shipping||0).toLocaleString("en-IN")]})]}),o.jsxs("div",{className:"summary-row total",children:[o.jsx("span",{style:{fontFamily:"'Poppins', sans-serif",fontSize:12,letterSpacing:"0.5px",color:I.text},children:"TOTAL"}),o.jsxs("span",{className:"amount-value",children:["₹",(j=l.totalAmount)==null?void 0:j.toLocaleString("en-IN")]})]})]})]})]})})]})}const F={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",champagne:"#e8d4c2",border:"#e8ddd4",borderLight:"#f0ebe5"};function lx(){b.useEffect(()=>{window.scrollTo(0,0)},[]);const[e,t]=b.useState([]),[r,n]=b.useState(""),[i,a]=b.useState(""),[s,l]=b.useState(""),[c,d]=b.useState(5),[f,g]=b.useState(!1),[p,k]=b.useState(!1),{success:w,error:j}=Sr();b.useEffect(()=>{x()},[]);const x=()=>{try{g(!0);const y=localStorage.getItem("about_comments");if(y){const S=JSON.parse(y);t(Array.isArray(S)?S:[])}}catch(y){console.error("Failed to load comments:",y)}finally{g(!1)}},m=async y=>{if(y.preventDefault(),!i.trim()){j("Please enter your name");return}if(!s.trim()){j("Please enter your email");return}if(!r.trim()){j("Please enter a comment");return}k(!0);try{const N=[{id:Date.now(),name:i.trim(),email:s.trim(),text:r.trim(),rating:c,timestamp:new Date().toISOString(),date:new Date().toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"numeric"})},...e];localStorage.setItem("about_comments",JSON.stringify(N)),t(N),n(""),a(""),l(""),d(5),w("Thank you! Your feedback has been posted.")}catch(S){console.error("Error posting comment:",S),j("Failed to post comment. Please try again.")}finally{k(!1)}},u=[{label:"Happy Customers",value:"50K+",icon:"💕"},{label:"Products Sold",value:"100K+",icon:"💎"},{label:"Years in Business",value:"4+",icon:"👑"},{label:"5-Star Reviews",value:"9.8/10",icon:"✨"}],h=[{name:"Priya Sharma",location:"Mumbai, India",text:"ARKE jewellery is absolutely stunning! The quality is exceptional and the customer service is outstanding. I've bought multiple pieces and I'm obsessed!",rating:5},{name:"Ananya Patel",location:"Delhi, India",text:"Finally found a brand that offers luxury jewellery at affordable prices. Every piece is a masterpiece. Highly recommended!",rating:5},{name:"Neha Kapoor",location:"Bangalore, India",text:"The hallmark certified gold and waterproof design gives me complete peace of mind. ARKE is my go-to for all occasions!",rating:5}],C=[{icon:"✨",title:"Clarity",desc:"Transparent pricing, genuine products, and honest communication. No hidden surprises."},{icon:"💎",title:"Quality",desc:"Hallmark certified, precision crafted, and built to last. Every detail matters."},{icon:"💕",title:"Loyalty",desc:"We value long-term relationships. Lifetime support and exclusive benefits for you."}],$=[{year:2020,title:"The Beginning",desc:"ARKE was founded with a vision to democratize luxury jewellery."},{year:2021,title:"First Collection",desc:"Launched 50+ unique designs, all hallmark certified & handcrafted."},{year:2022,title:"Expansion",desc:"Reached 50K+ customers across India with premium quality pieces."},{year:2023,title:"Innovation",desc:"Introduced waterproof & tarnish-proof technology to collections."},{year:2024,title:"Today",desc:"Growing strong with new designs, partnerships, and experiences."}];return o.jsxs("div",{style:{background:F.bg,minHeight:"100vh",paddingTop:120},children:[o.jsx("style",{children:`
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
          border-bottom: 1px solid ${F.border};
        }

        .about-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 64px;
          font-weight: 300;
          letter-spacing: 3px;
          color: ${F.text};
          margin-bottom: 24px;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${F.text}, ${F.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-hero p {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          letter-spacing: 0.5px;
          color: ${F.textMuted};
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
          color: ${F.text};
          margin-bottom: 50px;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          background: linear-gradient(135deg, ${F.text}, ${F.burgundy});
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
          background: linear-gradient(90deg, ${F.rose}, transparent);
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
          color: ${F.textMuted};
          letter-spacing: 0.3px;
        }

        .section-text h3 {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.5px;
          color: ${F.burgundy};
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
          background: linear-gradient(135deg, ${F.blush}30, ${F.champagne}20);
          border: 1.5px solid ${F.border};
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
          border: 1.5px solid ${F.border};
          background: ${F.surface};
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
          background: linear-gradient(90deg, transparent, ${F.rose}15, transparent);
          transition: left 0.6s ease;
        }

        .value-card:hover {
          border-color: ${F.rose};
          background: ${F.surface};
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
          color: ${F.burgundy};
          margin-bottom: 16px;
        }

        .value-card p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${F.textMuted};
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
          border: 1.5px solid ${F.border};
          background: ${F.surface};
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.04);
        }

        .achievement-card:hover {
          border-color: ${F.rose};
          background: linear-gradient(135deg, ${F.blush}8, ${F.champagne}4);
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
          background: linear-gradient(135deg, ${F.rose}, ${F.burgundy});
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
          color: ${F.textMuted};
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
          background: linear-gradient(180deg, ${F.rose}, ${F.rose}40, transparent);
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
          background: ${F.rose};
          border-radius: 50%;
          border: 3px solid ${F.bg};
          box-shadow: 0 0 0 6px ${F.rose}30;
          transition: all 0.3s;
        }

        .timeline-item:hover::before {
          transform: scale(1.3);
          box-shadow: 0 0 0 8px ${F.rose}40;
        }

        .timeline-year {
          font-family: 'Cormorant Garamond', serif;
          font-size: 36px;
          font-weight: 300;
          letter-spacing: 1px;
          background: linear-gradient(135deg, ${F.rose}, ${F.burgundy});
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
          color: ${F.burgundy};
          margin-bottom: 12px;
        }

        .timeline-content p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${F.textMuted};
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
          border: 1.5px solid ${F.border};
          background: ${F.surface};
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
          color: ${F.rose}30;
          font-family: 'Cormorant Garamond', serif;
        }

        .testimonial-card:hover {
          border-color: ${F.rose};
          background: linear-gradient(135deg, ${F.blush}8, ${F.champagne}4);
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
          color: ${F.rose};
          font-size: 14px;
        }

        .testimonial-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.9;
          color: ${F.textMuted};
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
          color: ${F.text};
          margin-bottom: 4px;
          position: relative;
          z-index: 1;
        }

        .testimonial-location {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${F.textMuted};
          position: relative;
          z-index: 1;
        }

        /* Comments Section */
        .comments-section {
          background: linear-gradient(135deg, ${F.blush}10, ${F.champagne}5);
          border: 1.5px solid ${F.border};
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
          border-bottom: 1.5px solid ${F.border};
        }

        .comments-count {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: linear-gradient(135deg, ${F.rose}, ${F.burgundy});
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
          background: ${F.surface};
          border: 1.5px solid ${F.border};
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
          color: ${F.burgundy};
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
          color: ${F.textMuted};
          margin-bottom: 8px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          background: ${F.bg};
          border: 1.5px solid ${F.border};
          color: ${F.text};
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
          border-color: ${F.rose};
          background: ${F.surface};
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
          color: ${F.textMuted};
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
          color: ${F.borderLight};
          transition: all 0.3s;
        }

        .rating-stars input:checked ~ label,
        .rating-stars label:hover {
          color: ${F.rose};
          transform: scale(1.2);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: linear-gradient(135deg, ${F.rose}, ${F.burgundy});
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
          background: ${F.surface};
          border: 1.5px solid ${F.border};
          padding: 32px;
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 2px 8px rgba(0,0,0,0.02);
          animation: fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .comment-item:hover {
          border-color: ${F.rose};
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
          color: ${F.text};
        }

        .comment-rating {
          display: flex;
          gap: 2px;
        }

        .comment-rating .star {
          font-size: 12px;
          color: ${F.rose};
        }

        .comment-date {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${F.textMuted};
          font-style: italic;
        }

        .comment-email {
          font-family: 'Poppins', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3px;
          color: ${F.textMuted};
          margin-top: 4px;
        }

        .comment-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          line-height: 1.8;
          color: ${F.textMuted};
          letter-spacing: 0.3px;
        }

        .no-comments {
          text-align: center;
          padding: 60px 20px;
        }

        .no-comments-icon {
          font-size: 48px;
          color: ${F.rose}30;
          margin-bottom: 16px;
        }

        .no-comments-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${F.textMuted};
          letter-spacing: 0.3px;
        }

        /* CTA Section */
        .cta-section {
          text-align: center;
          padding: 100px 60px;
          background: linear-gradient(135deg, ${F.blush}15, ${F.champagne}10);
          border: 1.5px solid ${F.border};
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
          background: radial-gradient(circle at top right, ${F.rose}10, transparent);
          pointer-events: none;
        }

        .cta-section h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 48px;
          font-weight: 300;
          letter-spacing: 2px;
          background: linear-gradient(135deg, ${F.text}, ${F.burgundy});
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
          color: ${F.textMuted};
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
          background: linear-gradient(135deg, ${F.rose}, ${F.burgundy});
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
      `}),o.jsxs("div",{className:"about-container",children:[o.jsxs("div",{className:"about-hero",children:[o.jsx("h1",{children:"About ARKE"}),o.jsxs("p",{children:["Jewellery for everyone. Designed for clarity, crafted with loyalty.",o.jsx("br",{}),"We believe in creating pieces that tell your unique story."]})]}),o.jsxs("div",{className:"about-section",children:[o.jsx("h2",{className:"section-title",children:"Our Story"}),o.jsxs("div",{className:"section-content",children:[o.jsxs("div",{className:"section-text",children:[o.jsx("p",{children:"ARKE was born from a passion to democratize luxury jewellery. We believe that everyone deserves to wear pieces that make them feel confident, beautiful, and empowered. Our journey started with a simple vision: create stunning, hallmark-certified jewellery that's accessible and authentic."}),o.jsx("p",{children:"Each piece in our collection is carefully designed by our team of master craftspeople, ensuring that every detail is perfect. From concept to creation, we maintain the highest standards of quality, sustainability, and artistry."}),o.jsx("h3",{children:"Our Commitment"}),o.jsx("p",{children:"We're committed to ethical sourcing, premium materials, and exceptional customer service. Your satisfaction is our greatest achievement."})]}),o.jsx("div",{className:"section-image",children:"💎"})]})]}),o.jsxs("div",{className:"about-section",children:[o.jsx("h2",{className:"section-title",children:"By The Numbers"}),o.jsx("div",{className:"achievements-grid",children:u.map((y,S)=>o.jsxs("div",{className:"achievement-card",children:[o.jsx("div",{className:"achievement-icon",children:y.icon}),o.jsx("div",{className:"achievement-value",children:y.value}),o.jsx("div",{className:"achievement-label",children:y.label})]},S))})]}),o.jsxs("div",{className:"about-section",children:[o.jsx("h2",{className:"section-title",children:"Our Values"}),o.jsx("div",{className:"values-grid",children:C.map((y,S)=>o.jsxs("div",{className:"value-card",children:[o.jsx("span",{className:"value-icon",children:y.icon}),o.jsx("h4",{children:y.title}),o.jsx("p",{children:y.desc})]},S))})]}),o.jsxs("div",{className:"about-section",children:[o.jsx("h2",{className:"section-title",children:"Our Journey"}),o.jsx("div",{className:"timeline",children:$.map((y,S)=>o.jsxs("div",{className:"timeline-item",children:[o.jsx("div",{className:"timeline-year",children:y.year}),o.jsxs("div",{className:"timeline-content",children:[o.jsx("h4",{children:y.title}),o.jsx("p",{children:y.desc})]})]},S))})]}),o.jsxs("div",{className:"about-section",children:[o.jsx("h2",{className:"section-title",children:"Customer Love"}),o.jsx("div",{className:"testimonials-grid",children:h.map((y,S)=>o.jsxs("div",{className:"testimonial-card",children:[o.jsx("div",{className:"testimonial-stars",children:[...Array(y.rating)].map((N,P)=>o.jsx("span",{className:"star",children:"★"},P))}),o.jsxs("p",{className:"testimonial-text",children:['"',y.text,'"']}),o.jsx("div",{className:"testimonial-author",children:y.name}),o.jsxs("div",{className:"testimonial-location",children:["📍 ",y.location]})]},S))})]}),o.jsxs("div",{className:"about-section comments-section",children:[o.jsxs("div",{className:"comments-header",children:[o.jsx("h2",{className:"section-title",children:"Visitor Feedback"}),o.jsxs("span",{className:"comments-count",children:["💬 ",e.length," ",e.length===1?"Comment":"Comments"]})]}),o.jsxs("form",{className:"comment-form",onSubmit:m,children:[o.jsx("h3",{children:"Share Your Thoughts"}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"name",children:"Your Name *"}),o.jsx("input",{id:"name",type:"text",value:i,onChange:y=>a(y.target.value),placeholder:"Enter your name",required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"email",children:"Your Email *"}),o.jsx("input",{id:"email",type:"email",value:s,onChange:y=>l(y.target.value),placeholder:"Enter your email",required:!0})]})]}),o.jsxs("div",{className:"rating-group",children:[o.jsx("label",{children:"How would you rate ARKE?"}),o.jsx("div",{className:"rating-stars",children:[5,4,3,2,1].map(y=>o.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[o.jsx("input",{id:`star${y}`,type:"radio",name:"rating",value:y,checked:c===y,onChange:S=>d(Number(S.target.value))}),o.jsx("label",{htmlFor:`star${y}`,style:{color:c>=y?F.rose:F.borderLight},children:"★"})]},y))})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{htmlFor:"comment",children:"Your Feedback *"}),o.jsx("textarea",{id:"comment",value:r,onChange:y=>n(y.target.value),placeholder:"Share your experience with us...",required:!0})]}),o.jsx("button",{type:"submit",className:"submit-btn",disabled:p||f,children:p?"Posting...":"Post Comment"})]}),o.jsx("div",{className:"comments-list",children:f?o.jsx("div",{style:{textAlign:"center",padding:"40px",fontFamily:"'Poppins', sans-serif",fontSize:"12px",color:F.textMuted},children:"Loading comments..."}):e.length===0?o.jsxs("div",{className:"no-comments",children:[o.jsx("div",{className:"no-comments-icon",children:"💭"}),o.jsx("div",{className:"no-comments-text",children:"Be the first to share your feedback!"})]}):e.map(y=>o.jsxs("div",{className:"comment-item",children:[o.jsxs("div",{className:"comment-header",children:[o.jsxs("div",{children:[o.jsx("div",{className:"comment-author",children:y.name}),o.jsxs("div",{className:"comment-email",children:["📧 ",y.email]}),o.jsxs("div",{className:"comment-date",children:["Posted on ",y.date]})]}),o.jsx("div",{className:"comment-rating",children:[...Array(y.rating)].map((S,N)=>o.jsx("span",{className:"star",children:"★"},N))})]}),o.jsxs("p",{className:"comment-text",children:['"',y.text,'"']})]},y.id))})]}),o.jsxs("div",{className:"cta-section",children:[o.jsx("h2",{children:"Ready to Discover?"}),o.jsx("p",{children:"Explore our latest collections and find the perfect piece that speaks to your heart. Every item is handcrafted with care and designed just for you."}),o.jsx(Be,{to:"/products",className:"cta-btn",children:"Shop Our Collection"})]})]})]})}const q={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4",success:"#70c878",error:"#d97070"};function cx(){const[e,t]=b.useState({name:"",email:"",phone:"",subject:"",message:""}),[r,n]=b.useState(!1),[i,a]=b.useState(""),[s,l]=b.useState("");b.useEffect(()=>{window.scrollTo(0,0)},[]);const c=g=>{const{name:p,value:k}=g.target;t(w=>({...w,[p]:k})),l("")},d=()=>e.name.trim()?e.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email)?e.phone.trim()?e.subject.trim()?e.message.trim()?!0:(l("Please enter your message"),!1):(l("Please select a subject"),!1):(l("Please enter your phone number"),!1):(l("Please enter a valid email"),!1):(l("Please enter your email"),!1):(l("Please enter your name"),!1),f=async g=>{if(g.preventDefault(),l(""),a(""),!!d()){n(!0);try{const p=await fetch("http://localhost:5050/api/CustomerCare",{method:"POST",headers:{"Content-Type":"application/json","ngrok-skip-browser-warning":"true"},body:JSON.stringify(e)}),k=await p.json();p.ok?(a("Thank you! We'll get back to you soon."),t({name:"",email:"",phone:"",subject:"",message:""}),setTimeout(()=>a(""),5e3)):l(k.message||"Something went wrong. Please try again.")}catch(p){l("Network error. Please check your connection and try again."),console.error("CustomerCare form error:",p)}finally{n(!1)}}};return o.jsxs("div",{style:{background:q.bg,minHeight:"100vh",paddingTop:120},children:[o.jsx("style",{children:`
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
          border-bottom: 1.5px solid ${q.border};
          margin-bottom: 80px;
          animation: fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .customercare-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 56px;
          font-weight: 300;
          letter-spacing: 2px;
          color: ${q.text};
          margin-bottom: 16px;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${q.text}, ${q.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .customercare-hero p {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          letter-spacing: 0.5px;
          color: ${q.textMuted};
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
          border-bottom: 1.5px solid ${q.border};
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
          color: ${q.burgundy};
          margin-bottom: 12px;
        }

        .info-content {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          line-height: 1.8;
          color: ${q.textMuted};
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .info-content a {
          color: ${q.burgundy};
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          font-weight: 600;
        }

        .info-content a:hover {
          color: ${q.rose};
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
          color: ${q.burgundy};
        }

        .form-input,
        .form-textarea,
        .form-select {
          padding: 13px 14px;
          background: ${q.blush}15;
          border: 1.5px solid ${q.border};
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${q.text};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.3px;
          font-weight: 400;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: ${q.textMuted}60;
        }

        .form-input:focus,
        .form-textarea:focus,
        .form-select:focus {
          outline: none;
          background: ${q.blush}25;
          border-color: ${q.rose};
          box-shadow: 0 0 0 3px ${q.blush}40;
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
          background: ${q.surface};
          color: ${q.text};
        }

        .form-button {
          padding: 14px 32px;
          background: linear-gradient(135deg, ${q.rose}, ${q.burgundy});
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
          box-shadow: 0 4px 16px ${q.rose}30;
        }

        .form-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px ${q.rose}40;
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
          border: 1px solid ${q.success}40;
          color: ${q.success}90;
        }

        .error-message {
          background: rgba(217, 112, 112, 0.08);
          border: 1px solid ${q.error}40;
          color: ${q.error}90;
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
          color: ${q.rose};
          font-size: 20px;
          border: 1.5px solid ${q.rose};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          background: transparent;
        }

        .social-link:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px ${q.rose}30;
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
      `}),o.jsxs("div",{className:"customercare-container",children:[o.jsxs("div",{className:"customercare-hero",children:[o.jsx("h1",{children:"Get in Touch"}),o.jsx("p",{children:"We'd love to hear from you. Send us a message and we'll respond as soon as possible."})]}),o.jsxs("div",{className:"customercare-content",children:[o.jsxs("div",{className:"customercare-info",children:[o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"info-title",children:"📍 Address"}),o.jsxs("div",{className:"info-content",children:["ARKE Jewellery",o.jsx("br",{}),"123 Luxury Lane",o.jsx("br",{}),"Jaipur, Rajasthan 302001",o.jsx("br",{}),"India"]})]}),o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"info-title",children:"📞 Phone"}),o.jsxs("div",{className:"info-content",children:[o.jsx("a",{href:"tel:+919876543210",children:"+91 98765 43210"}),o.jsx("br",{}),o.jsx("span",{style:{color:q.textMuted,fontWeight:400},children:"Mon - Fri, 10 AM - 6 PM IST"})]})]}),o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"info-title",children:"✉️ Email"}),o.jsxs("div",{className:"info-content",children:[o.jsx("a",{href:"mailto:hello@arke.com",children:"hello@arke.com"}),o.jsx("br",{}),o.jsx("a",{href:"mailto:support@arke.com",children:"support@arke.com"})]})]}),o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"info-title",children:"💬 Live Chat"}),o.jsxs("div",{className:"info-content",children:["Available on WhatsApp",o.jsx("br",{}),o.jsx("a",{href:"https://wa.me/919876543210",children:"Message us here →"})]})]}),o.jsxs("div",{className:"info-block",children:[o.jsx("div",{className:"info-title",children:"Follow Us"}),o.jsxs("div",{className:"social-links",children:[o.jsx("a",{href:"https://instagram.com/arke.jewellery",target:"_blank",rel:"noopener noreferrer",className:"social-link instagram",title:"Instagram",children:o.jsx(np,{})}),o.jsx("a",{href:"https://pinterest.com/arkejewellery",target:"_blank",rel:"noopener noreferrer",className:"social-link pinterest",title:"Pinterest",children:o.jsx(rp,{})}),o.jsx("a",{href:"https://wa.me/919876543210",target:"_blank",rel:"noopener noreferrer",className:"social-link whatsapp",title:"WhatsApp",children:o.jsx(tp,{})}),o.jsx("a",{href:"mailto:hello@arke.com",className:"social-link email",title:"Email",children:o.jsx(op,{})})]})]})]}),o.jsxs("form",{className:"customercare-form",onSubmit:f,children:[i&&o.jsxs("div",{className:"message-alert success-message",children:["✓ ",i]}),s&&o.jsxs("div",{className:"message-alert error-message",children:["✕ ",s]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Your Name *"}),o.jsx("input",{type:"text",name:"name",className:"form-input",placeholder:"Enter your full name",value:e.name,onChange:c,required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Email Address *"}),o.jsx("input",{type:"email",name:"email",className:"form-input",placeholder:"your@email.com",value:e.email,onChange:c,required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Phone Number *"}),o.jsx("input",{type:"tel",name:"phone",className:"form-input",placeholder:"+91 XXXXX XXXXX",value:e.phone,onChange:c,required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Subject *"}),o.jsxs("select",{name:"subject",className:"form-select",value:e.subject,onChange:c,required:!0,children:[o.jsx("option",{value:"",children:"Select a subject"}),o.jsx("option",{value:"general",children:"General Inquiry"}),o.jsx("option",{value:"order",children:"Order Related"}),o.jsx("option",{value:"return",children:"Returns & Exchanges"}),o.jsx("option",{value:"warranty",children:"Warranty Support"}),o.jsx("option",{value:"custom",children:"Custom Design"}),o.jsx("option",{value:"partnership",children:"Partnership"}),o.jsx("option",{value:"other",children:"Other"})]})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Message *"}),o.jsx("textarea",{name:"message",className:"form-textarea",placeholder:"Tell us more about your inquiry...",value:e.message,onChange:c,required:!0})]}),o.jsx("button",{type:"submit",className:"form-button",disabled:r,children:r?"Sending...":"Send Message"})]})]})]})]})}const V={bg:"#faf8f5",surface:"#ffffff",text:"#2a2a2a",textMuted:"#8a8a8a",rose:"#e8b4c4",blush:"#f5d5e0",burgundy:"#8b4654",border:"#e8ddd4",success:"#70c878",error:"#d97070"},Cc="http://localhost:5050/api";function dx(){var $,y;const{user:e}=Zn(),[t,r]=b.useState(null),[n,i]=b.useState(!1),[a,s]=b.useState(!0),[l,c]=b.useState(!1),[d,f]=b.useState(""),[g,p]=b.useState(""),[k,w]=b.useState({accountHolderName:"",bankName:"",accountNumber:"",confirmAccountNumber:"",ifscCode:"",accountType:"savings"});b.useEffect(()=>{window.scrollTo(0,0),e!=null&&e._id||e!=null&&e.id?j():(s(!1),f("Please log in to manage bank details"),p("error"))},[e]);const j=async()=>{s(!0);try{const S=e._id||e.id,N=await fetch(`${Cc}/bank-details/${S}`,{method:"GET",headers:{Authorization:`Bearer ${localStorage.getItem("arke_token")}`,"Content-Type":"application/json"}}),P=await N.json();N.ok&&P.data?(r(P.data),w({accountHolderName:P.data.accountHolderName||"",bankName:P.data.bankName||"",accountNumber:"",confirmAccountNumber:"",ifscCode:P.data.ifscCode||"",accountType:P.data.accountType||"savings"}),f("")):N.status===404||P.message==="Bank details not found"?(r(null),w({accountHolderName:"",bankName:"",accountNumber:"",confirmAccountNumber:"",ifscCode:"",accountType:"savings"}),f("")):(r(null),w({accountHolderName:"",bankName:"",accountNumber:"",confirmAccountNumber:"",ifscCode:"",accountType:"savings"}),f(""))}catch(S){console.error("Fetch error:",S),r(null),f("")}finally{s(!1)}},x=()=>k.accountHolderName.trim()?k.bankName.trim()?!k.accountNumber||k.accountNumber.length<9?(f("Please enter a valid account number (9-16 digits)"),p("error"),!1):k.accountNumber.length>16?(f("Account number cannot exceed 16 digits"),p("error"),!1):k.accountNumber!==k.confirmAccountNumber?(f("Account numbers do not match"),p("error"),!1):!k.ifscCode||k.ifscCode.length!==11?(f("Please enter a valid IFSC code (11 characters)"),p("error"),!1):!0:(f("Please select a bank"),p("error"),!1):(f("Please enter account holder name"),p("error"),!1),m=S=>{const{name:N,value:P}=S.target;w(E=>({...E,[N]:N==="ifscCode"?P.toUpperCase():P})),f("")},u=async S=>{if(S.preventDefault(),!!x()){c(!0);try{const N=await fetch(`${Cc}/bank-details`,{method:"POST",headers:{Authorization:`Bearer ${localStorage.getItem("arke_token")}`,"Content-Type":"application/json"},body:JSON.stringify({accountHolderName:k.accountHolderName,bankName:k.bankName,accountNumber:k.accountNumber,ifscCode:k.ifscCode.toUpperCase(),accountType:k.accountType})}),P=await N.json();N.ok?(f("✓ Bank details saved successfully"),p("success"),r(P.data),i(!1),w(E=>({...E,accountNumber:"",confirmAccountNumber:""})),setTimeout(()=>f(""),5e3)):(f(P.message||"Failed to save bank details"),p("error"))}catch(N){console.error("Submit error:",N),f("Network error. Please try again."),p("error")}finally{c(!1)}}},h=S=>S?`••••••••${S.slice(-4)}`:"••••••••••••••••",C=[{value:"State Bank of India",label:"State Bank of India (SBI)"},{value:"HDFC Bank",label:"HDFC Bank"},{value:"ICICI Bank",label:"ICICI Bank"},{value:"Axis Bank",label:"Axis Bank"},{value:"Bank of Baroda",label:"Bank of Baroda"},{value:"Kotak Mahindra Bank",label:"Kotak Mahindra Bank"},{value:"Yes Bank",label:"Yes Bank"},{value:"IndusInd Bank",label:"IndusInd Bank"},{value:"Other",label:"Other Bank"}];return o.jsxs("div",{style:{background:V.bg,minHeight:"100vh",paddingTop:120},children:[o.jsx("style",{children:`
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
          color: ${V.text};
          margin-bottom: 12px;
          text-transform: uppercase;
          background: linear-gradient(135deg, ${V.text}, ${V.burgundy});
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bank-header p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          letter-spacing: 0.5px;
          color: ${V.textMuted};
          font-weight: 400;
        }

        .security-notice {
          padding: 18px 20px;
          background: rgba(112, 200, 120, 0.08);
          border: 1.5px solid ${V.success}40;
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
          color: ${V.success}90;
          letter-spacing: 0.3px;
          line-height: 1.6;
          font-weight: 500;
        }

        .bank-card {
          border: 1.5px solid ${V.border};
          border-radius: 12px;
          padding: 44px;
          background: ${V.surface};
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
          border-bottom: 1.5px solid ${V.border};
        }

        .card-title {
          font-family: 'Poppins', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: ${V.burgundy};
        }

        .edit-btn {
          padding: 9px 18px;
          background: transparent;
          border: 1.5px solid ${V.rose};
          color: ${V.burgundy};
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
          border-color: ${V.burgundy};
          background: linear-gradient(135deg, ${V.rose}20, ${V.burgundy}10);
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
          color: ${V.textMuted};
        }

        .info-value {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: ${V.text};
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
          color: ${V.burgundy};
          margin-bottom: 10px;
          display: block;
        }

        .form-input,
        .form-select {
          width: 100%;
          padding: 12px 14px;
          background: ${V.blush}15;
          border: 1.5px solid ${V.border};
          border-radius: 6px;
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${V.text};
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          letter-spacing: 0.3px;
        }

        .form-input::placeholder {
          color: ${V.textMuted}60;
        }

        .form-input:focus,
        .form-select:focus {
          outline: none;
          background: ${V.blush}25;
          border-color: ${V.rose};
          box-shadow: 0 0 0 3px ${V.blush}40;
        }

        .form-select option {
          background: ${V.surface};
          color: ${V.text};
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
          background: linear-gradient(135deg, ${V.rose}, ${V.burgundy});
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
          color: ${V.burgundy};
          border: 1.5px solid ${V.rose};
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
          border-color: ${V.burgundy};
          background: linear-gradient(135deg, ${V.rose}20, ${V.burgundy}10);
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
          border: 1px solid ${V.success}40;
          color: ${V.success}90;
        }

        .error-message {
          background: rgba(217, 112, 112, 0.08);
          border: 1px solid ${V.error}40;
          color: ${V.error}90;
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
          border: 3px solid ${V.border};
          border-top-color: ${V.rose};
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 0 auto 24px;
        }

        .loading-text {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          color: ${V.textMuted};
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
      `}),o.jsxs("div",{className:"bank-container",children:[o.jsxs("div",{className:"bank-header",children:[o.jsx("h1",{children:"Bank Details"}),o.jsx("p",{children:"Securely manage your account information"})]}),o.jsxs("div",{className:"security-notice",children:[o.jsx("div",{className:"security-notice-icon",children:"🔒"}),o.jsx("div",{className:"security-notice-text",children:"Your bank details are encrypted with industry-standard AES-256 encryption. We never share your information."})]}),d&&o.jsx("div",{className:`message-alert ${g}-message`,children:d}),a&&o.jsxs("div",{className:"loading-state",children:[o.jsx("div",{className:"loading-spinner"}),o.jsx("p",{className:"loading-text",children:"Loading your bank details..."})]}),!a&&o.jsx(o.Fragment,{children:t&&!n?o.jsxs("div",{className:"bank-card",children:[o.jsxs("div",{className:"card-header",children:[o.jsx("div",{className:"card-title",children:"✓ Account Details"}),o.jsx("button",{className:"edit-btn",onClick:()=>i(!0),children:"Edit Details"})]}),o.jsxs("div",{className:"bank-info",children:[o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"Account Holder Name"}),o.jsx("div",{className:"info-value",children:t.accountHolderName})]}),o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"Bank Name"}),o.jsx("div",{className:"info-value",children:t.bankName})]}),o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"Account Number"}),o.jsx("div",{className:"info-value",children:h(t.accountNumber)})]}),o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"Account Type"}),o.jsx("div",{className:"info-value",children:(($=t.accountType)==null?void 0:$.charAt(0).toUpperCase())+((y=t.accountType)==null?void 0:y.slice(1))})]}),o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"IFSC Code"}),o.jsx("div",{className:"info-value",children:t.ifscCode})]}),o.jsxs("div",{className:"info-field",children:[o.jsx("div",{className:"info-label",children:"Last Updated"}),o.jsx("div",{className:"info-value",children:new Date(t.updatedAt).toLocaleDateString("en-IN",{year:"numeric",month:"short",day:"numeric"})})]})]})]}):o.jsxs("div",{className:"bank-card",children:[o.jsx("div",{className:"card-title",style:{marginBottom:30},children:t?"Update Bank Details":"Add Bank Details"}),o.jsxs("form",{onSubmit:u,children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Account Holder Name *"}),o.jsx("input",{type:"text",name:"accountHolderName",className:"form-input",placeholder:"Your full name",value:k.accountHolderName,onChange:m,required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Bank Name *"}),o.jsxs("select",{name:"bankName",className:"form-select",value:k.bankName,onChange:m,required:!0,children:[o.jsx("option",{value:"",children:"Select your bank"}),C.map(S=>o.jsx("option",{value:S.value,children:S.label},S.value))]})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Account Number *"}),o.jsx("input",{type:"password",name:"accountNumber",className:"form-input",placeholder:"9-16 digits",value:k.accountNumber,onChange:m,minLength:"9",maxLength:"16",required:!0,inputMode:"numeric"})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Confirm Account Number *"}),o.jsx("input",{type:"password",name:"confirmAccountNumber",className:"form-input",placeholder:"Re-enter for safety",value:k.confirmAccountNumber,onChange:m,minLength:"9",maxLength:"16",required:!0,inputMode:"numeric"})]})]}),o.jsxs("div",{className:"form-row",children:[o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"IFSC Code *"}),o.jsx("input",{type:"text",name:"ifscCode",className:"form-input",placeholder:"e.g., SBIN0001234",value:k.ifscCode,onChange:m,maxLength:"11",required:!0})]}),o.jsxs("div",{className:"form-group",children:[o.jsx("label",{className:"form-label",children:"Account Type *"}),o.jsxs("select",{name:"accountType",className:"form-select",value:k.accountType,onChange:m,children:[o.jsx("option",{value:"savings",children:"Savings"}),o.jsx("option",{value:"current",children:"Current"}),o.jsx("option",{value:"business",children:"Business"})]})]})]}),o.jsxs("div",{className:"button-group",children:[o.jsx("button",{type:"submit",className:"btn-primary",disabled:l,children:l?"Saving...":"Save Bank Details"}),t&&o.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>{i(!1),f("")},children:"Cancel"})]})]})]})})]})]})}function ux(){const[e,t]=b.useState(!1);return o.jsxs(o.Fragment,{children:[o.jsx(lm,{onLoginClick:()=>t(!0)}),o.jsxs(E0,{children:[o.jsx(Le,{path:"/",element:o.jsx(Pm,{})}),o.jsx(Le,{path:"/new-collection",element:o.jsx(Em,{})}),o.jsx(Le,{path:"/best-sellers",element:o.jsx(Tm,{})}),o.jsx(Le,{path:"/products",element:o.jsx(Mm,{})}),o.jsx(Le,{path:"/product/:id",element:o.jsx(Lm,{})}),o.jsx(Le,{path:"/categories",element:o.jsx(Im,{})}),o.jsx(Le,{path:"/blog",element:o.jsx(Rm,{})}),o.jsx(Le,{path:"/cart",element:o.jsx(Ym,{})}),o.jsx(Le,{path:"/wishlist",element:o.jsx(qm,{})}),o.jsx(Le,{path:"/gift-for-him",element:o.jsx(ax,{})}),o.jsx(Le,{path:"/gift-for-her",element:o.jsx(rx,{})}),o.jsx(Le,{path:"/my-orders",element:o.jsx(sx,{})}),o.jsx(Le,{path:"/about-us",element:o.jsx(lx,{})}),o.jsx(Le,{path:"/customer-care",element:o.jsx(cx,{})}),o.jsx(Le,{path:"/bankdetails",element:o.jsx(dx,{})})]}),o.jsx(dm,{}),e&&o.jsx(um,{onClose:()=>t(!1)})]})}function px(){return o.jsx(G0,{children:o.jsx(_0,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:o.jsx(ux,{})})})}ra.createRoot(document.getElementById("root")).render(o.jsx(b.StrictMode,{children:o.jsx(pm,{children:o.jsx(V0,{children:o.jsx(Q0,{children:o.jsx(px,{})})})})}));
