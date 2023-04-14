function cS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function hS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Hs={},dS={get exports(){return Hs},set exports(t){Hs=t}},Wl={},S={},fS={get exports(){return S},set exports(t){S=t}},K={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Io=Symbol.for("react.element"),pS=Symbol.for("react.portal"),mS=Symbol.for("react.fragment"),gS=Symbol.for("react.strict_mode"),yS=Symbol.for("react.profiler"),vS=Symbol.for("react.provider"),wS=Symbol.for("react.context"),ES=Symbol.for("react.forward_ref"),SS=Symbol.for("react.suspense"),_S=Symbol.for("react.memo"),kS=Symbol.for("react.lazy"),Pp=Symbol.iterator;function TS(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var Sy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_y=Object.assign,ky={};function Ki(t,e,n){this.props=t,this.context=e,this.refs=ky,this.updater=n||Sy}Ki.prototype.isReactComponent={};Ki.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ki.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ty(){}Ty.prototype=Ki.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=ky,this.updater=n||Sy}var vd=yd.prototype=new Ty;vd.constructor=yd;_y(vd,Ki.prototype);vd.isPureReactComponent=!0;var Op=Array.isArray,Iy=Object.prototype.hasOwnProperty,wd={current:null},Cy={key:!0,ref:!0,__self:!0,__source:!0};function Ny(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Iy.call(e,r)&&!Cy.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Io,type:t,key:s,ref:o,props:i,_owner:wd.current}}function IS(t,e){return{$$typeof:Io,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ed(t){return typeof t=="object"&&t!==null&&t.$$typeof===Io}function CS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Lp=/\/+/g;function qu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?CS(""+t.key):e.toString(36)}function Oa(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Io:case pS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+qu(o,0):r,Op(i)?(n="",t!=null&&(n=t.replace(Lp,"$&/")+"/"),Oa(i,e,n,"",function(u){return u})):i!=null&&(Ed(i)&&(i=IS(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Lp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Op(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+qu(s,a);o+=Oa(s,e,n,l,i)}else if(l=TS(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+qu(s,a++),o+=Oa(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ia(t,e,n){if(t==null)return t;var r=[],i=0;return Oa(t,r,"","",function(s){return e.call(n,s,i++)}),r}function NS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var st={current:null},La={transition:null},AS={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:La,ReactCurrentOwner:wd};K.Children={map:ia,forEach:function(t,e,n){ia(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ia(t,function(){e++}),e},toArray:function(t){return ia(t,function(e){return e})||[]},only:function(t){if(!Ed(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};K.Component=Ki;K.Fragment=mS;K.Profiler=yS;K.PureComponent=yd;K.StrictMode=gS;K.Suspense=SS;K.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AS;K.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=_y({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Iy.call(e,l)&&!Cy.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Io,type:t.type,key:i,ref:s,props:r,_owner:o}};K.createContext=function(t){return t={$$typeof:wS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vS,_context:t},t.Consumer=t};K.createElement=Ny;K.createFactory=function(t){var e=Ny.bind(null,t);return e.type=t,e};K.createRef=function(){return{current:null}};K.forwardRef=function(t){return{$$typeof:ES,render:t}};K.isValidElement=Ed;K.lazy=function(t){return{$$typeof:kS,_payload:{_status:-1,_result:t},_init:NS}};K.memo=function(t,e){return{$$typeof:_S,type:t,compare:e===void 0?null:e}};K.startTransition=function(t){var e=La.transition;La.transition={};try{t()}finally{La.transition=e}};K.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};K.useCallback=function(t,e){return st.current.useCallback(t,e)};K.useContext=function(t){return st.current.useContext(t)};K.useDebugValue=function(){};K.useDeferredValue=function(t){return st.current.useDeferredValue(t)};K.useEffect=function(t,e){return st.current.useEffect(t,e)};K.useId=function(){return st.current.useId()};K.useImperativeHandle=function(t,e,n){return st.current.useImperativeHandle(t,e,n)};K.useInsertionEffect=function(t,e){return st.current.useInsertionEffect(t,e)};K.useLayoutEffect=function(t,e){return st.current.useLayoutEffect(t,e)};K.useMemo=function(t,e){return st.current.useMemo(t,e)};K.useReducer=function(t,e,n){return st.current.useReducer(t,e,n)};K.useRef=function(t){return st.current.useRef(t)};K.useState=function(t){return st.current.useState(t)};K.useSyncExternalStore=function(t,e,n){return st.current.useSyncExternalStore(t,e,n)};K.useTransition=function(){return st.current.useTransition()};K.version="18.2.0";(function(t){t.exports=K})(fS);const RS=hS(S),$c=cS({__proto__:null,default:RS},[S]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DS=S,xS=Symbol.for("react.element"),PS=Symbol.for("react.fragment"),OS=Object.prototype.hasOwnProperty,LS=DS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,bS={key:!0,ref:!0,__self:!0,__source:!0};function Ay(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)OS.call(e,r)&&!bS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:xS,type:t,key:s,ref:o,props:i,_owner:LS.current}}Wl.Fragment=PS;Wl.jsx=Ay;Wl.jsxs=Ay;(function(t){t.exports=Wl})(dS);const MS=Hs.Fragment,m=Hs.jsx,C=Hs.jsxs;var Fc={},Vc={},US={get exports(){return Vc},set exports(t){Vc=t}},_t={},Bc={},$S={get exports(){return Bc},set exports(t){Bc=t}},Ry={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,U){var q=D.length;D.push(U);e:for(;0<q;){var le=q-1>>>1,Ee=D[le];if(0<i(Ee,U))D[le]=U,D[q]=Ee,q=le;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var U=D[0],q=D.pop();if(q!==U){D[0]=q;e:for(var le=0,Ee=D.length,Pt=Ee>>>1;le<Pt;){var ln=2*(le+1)-1,zt=D[ln],An=ln+1,ei=D[An];if(0>i(zt,q))An<Ee&&0>i(ei,zt)?(D[le]=ei,D[An]=q,le=An):(D[le]=zt,D[ln]=q,le=ln);else if(An<Ee&&0>i(ei,q))D[le]=ei,D[An]=q,le=An;else break e}}return U}function i(D,U){var q=D.sortIndex-U.sortIndex;return q!==0?q:D.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,y=!1,v=!1,w=!1,_=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(D){for(var U=n(u);U!==null;){if(U.callback===null)r(u);else if(U.startTime<=D)r(u),U.sortIndex=U.expirationTime,e(l,U);else break;U=n(u)}}function E(D){if(w=!1,g(D),!v)if(n(l)!==null)v=!0,mr(N);else{var U=n(u);U!==null&&jt(E,U.startTime-D)}}function N(D,U){v=!1,w&&(w=!1,p(O),O=-1),y=!0;var q=d;try{for(g(U),h=n(l);h!==null&&(!(h.expirationTime>U)||D&&!Z());){var le=h.callback;if(typeof le=="function"){h.callback=null,d=h.priorityLevel;var Ee=le(h.expirationTime<=U);U=t.unstable_now(),typeof Ee=="function"?h.callback=Ee:h===n(l)&&r(l),g(U)}else r(l);h=n(l)}if(h!==null)var Pt=!0;else{var ln=n(u);ln!==null&&jt(E,ln.startTime-U),Pt=!1}return Pt}finally{h=null,d=q,y=!1}}var R=!1,A=null,O=-1,X=5,z=-1;function Z(){return!(t.unstable_now()-z<X)}function an(){if(A!==null){var D=t.unstable_now();z=D;var U=!0;try{U=A(!0,D)}finally{U?ft():(R=!1,A=null)}}else R=!1}var ft;if(typeof f=="function")ft=function(){f(an)};else if(typeof MessageChannel<"u"){var Zr=new MessageChannel,as=Zr.port2;Zr.port1.onmessage=an,ft=function(){as.postMessage(null)}}else ft=function(){_(an,0)};function mr(D){A=D,R||(R=!0,ft())}function jt(D,U){O=_(function(){D(t.unstable_now())},U)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){v||y||(v=!0,mr(N))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(d){case 1:case 2:case 3:var U=3;break;default:U=d}var q=d;d=U;try{return D()}finally{d=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,U){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=d;d=D;try{return U()}finally{d=q}},t.unstable_scheduleCallback=function(D,U,q){var le=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?le+q:le):q=le,D){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=q+Ee,D={id:c++,callback:U,priorityLevel:D,startTime:q,expirationTime:Ee,sortIndex:-1},q>le?(D.sortIndex=q,e(u,D),n(l)===null&&D===n(u)&&(w?(p(O),O=-1):w=!0,jt(E,q-le))):(D.sortIndex=Ee,e(l,D),v||y||(v=!0,mr(N))),D},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(D){var U=d;return function(){var q=d;d=U;try{return D.apply(this,arguments)}finally{d=q}}}})(Ry);(function(t){t.exports=Ry})($S);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy=S,Et=Bc;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xy=new Set,qs={};function qr(t,e){Ri(t,e),Ri(t+"Capture",e)}function Ri(t,e){for(qs[t]=e,t=0;t<e.length;t++)xy.add(e[t])}var yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),jc=Object.prototype.hasOwnProperty,FS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bp={},Mp={};function VS(t){return jc.call(Mp,t)?!0:jc.call(bp,t)?!1:FS.test(t)?Mp[t]=!0:(bp[t]=!0,!1)}function BS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jS(t,e,n,r){if(e===null||typeof e>"u"||BS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ot(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sd=/[\-:]([a-z])/g;function _d(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sd,_d);Be[e]=new ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sd,_d);Be[e]=new ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sd,_d);Be[e]=new ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new ot(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jS(e,n,i,r)&&(n=null),r||i===null?VS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Nn=Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=Symbol.for("react.element"),ii=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),Td=Symbol.for("react.strict_mode"),zc=Symbol.for("react.profiler"),Py=Symbol.for("react.provider"),Oy=Symbol.for("react.context"),Id=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),qc=Symbol.for("react.suspense_list"),Cd=Symbol.for("react.memo"),Pn=Symbol.for("react.lazy"),Ly=Symbol.for("react.offscreen"),Up=Symbol.iterator;function cs(t){return t===null||typeof t!="object"?null:(t=Up&&t[Up]||t["@@iterator"],typeof t=="function"?t:null)}var fe=Object.assign,Wu;function Es(t){if(Wu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wu=e&&e[1]||""}return`
`+Wu+t}var Ku=!1;function Gu(t,e){if(!t||Ku)return"";Ku=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ku=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Es(t):""}function zS(t){switch(t.tag){case 5:return Es(t.type);case 16:return Es("Lazy");case 13:return Es("Suspense");case 19:return Es("SuspenseList");case 0:case 2:case 15:return t=Gu(t.type,!1),t;case 11:return t=Gu(t.type.render,!1),t;case 1:return t=Gu(t.type,!0),t;default:return""}}function Wc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case si:return"Fragment";case ii:return"Portal";case zc:return"Profiler";case Td:return"StrictMode";case Hc:return"Suspense";case qc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Oy:return(t.displayName||"Context")+".Consumer";case Py:return(t._context.displayName||"Context")+".Provider";case Id:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cd:return e=t.displayName||null,e!==null?e:Wc(t.type)||"Memo";case Pn:e=t._payload,t=t._init;try{return Wc(t(e))}catch{}}return null}function HS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wc(e);case 8:return e===Td?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function rr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function by(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qS(t){var e=by(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function oa(t){t._valueTracker||(t._valueTracker=qS(t))}function My(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=by(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Za(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kc(t,e){var n=e.checked;return fe({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function $p(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=rr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Uy(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function Gc(t,e){Uy(t,e);var n=rr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Qc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Qc(t,e.type,rr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Qc(t,e,n){(e!=="number"||Za(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ss=Array.isArray;function vi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+rr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return fe({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Ss(n)){if(1<n.length)throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:rr(n)}}function $y(t,e){var n=rr(e.value),r=rr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Bp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Fy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Fy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var aa,Vy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(aa=aa||document.createElement("div"),aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ws(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Rs={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},WS=["Webkit","ms","Moz","O"];Object.keys(Rs).forEach(function(t){WS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Rs[e]=Rs[t]})});function By(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Rs.hasOwnProperty(t)&&Rs[t]?(""+e).trim():e+"px"}function jy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=By(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var KS=fe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jc(t,e){if(e){if(KS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62))}}function Zc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eh=null;function Nd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var th=null,wi=null,Ei=null;function jp(t){if(t=Ao(t)){if(typeof th!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Xl(e),th(t.stateNode,t.type,e))}}function zy(t){wi?Ei?Ei.push(t):Ei=[t]:wi=t}function Hy(){if(wi){var t=wi,e=Ei;if(Ei=wi=null,jp(t),e)for(t=0;t<e.length;t++)jp(e[t])}}function qy(t,e){return t(e)}function Wy(){}var Qu=!1;function Ky(t,e,n){if(Qu)return t(e,n);Qu=!0;try{return qy(t,e,n)}finally{Qu=!1,(wi!==null||Ei!==null)&&(Wy(),Hy())}}function Ks(t,e){var n=t.stateNode;if(n===null)return null;var r=Xl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}var nh=!1;if(yn)try{var hs={};Object.defineProperty(hs,"passive",{get:function(){nh=!0}}),window.addEventListener("test",hs,hs),window.removeEventListener("test",hs,hs)}catch{nh=!1}function GS(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ds=!1,el=null,tl=!1,rh=null,QS={onError:function(t){Ds=!0,el=t}};function YS(t,e,n,r,i,s,o,a,l){Ds=!1,el=null,GS.apply(QS,arguments)}function XS(t,e,n,r,i,s,o,a,l){if(YS.apply(this,arguments),Ds){if(Ds){var u=el;Ds=!1,el=null}else throw Error(T(198));tl||(tl=!0,rh=u)}}function Wr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Gy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function zp(t){if(Wr(t)!==t)throw Error(T(188))}function JS(t){var e=t.alternate;if(!e){if(e=Wr(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return zp(i),t;if(s===r)return zp(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function Qy(t){return t=JS(t),t!==null?Yy(t):null}function Yy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yy(t);if(e!==null)return e;t=t.sibling}return null}var Xy=Et.unstable_scheduleCallback,Hp=Et.unstable_cancelCallback,ZS=Et.unstable_shouldYield,e_=Et.unstable_requestPaint,we=Et.unstable_now,t_=Et.unstable_getCurrentPriorityLevel,Ad=Et.unstable_ImmediatePriority,Jy=Et.unstable_UserBlockingPriority,nl=Et.unstable_NormalPriority,n_=Et.unstable_LowPriority,Zy=Et.unstable_IdlePriority,Kl=null,Qt=null;function r_(t){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(Kl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:o_,i_=Math.log,s_=Math.LN2;function o_(t){return t>>>=0,t===0?32:31-(i_(t)/s_|0)|0}var la=64,ua=4194304;function _s(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function rl(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=_s(a):(s&=o,s!==0&&(r=_s(s)))}else o=n&~i,o!==0?r=_s(o):s!==0&&(r=_s(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ut(e),i=1<<n,r|=t[n],e&=~i;return r}function a_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function l_(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ut(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=a_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function ih(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ev(){var t=la;return la<<=1,!(la&4194240)&&(la=64),t}function Yu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Co(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ut(e),t[e]=n}function u_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ut(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Rd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ut(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var te=0;function tv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var nv,Dd,rv,iv,sv,sh=!1,ca=[],Hn=null,qn=null,Wn=null,Gs=new Map,Qs=new Map,Ln=[],c_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qp(t,e){switch(t){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":qn=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Gs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qs.delete(e.pointerId)}}function ds(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ao(e),e!==null&&Dd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function h_(t,e,n,r,i){switch(e){case"focusin":return Hn=ds(Hn,t,e,n,r,i),!0;case"dragenter":return qn=ds(qn,t,e,n,r,i),!0;case"mouseover":return Wn=ds(Wn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Gs.set(s,ds(Gs.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Qs.set(s,ds(Qs.get(s)||null,t,e,n,r,i)),!0}return!1}function ov(t){var e=Sr(t.target);if(e!==null){var n=Wr(e);if(n!==null){if(e=n.tag,e===13){if(e=Gy(n),e!==null){t.blockedOn=e,sv(t.priority,function(){rv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=oh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);eh=r,n.target.dispatchEvent(r),eh=null}else return e=Ao(n),e!==null&&Dd(e),t.blockedOn=n,!1;e.shift()}return!0}function Wp(t,e,n){ba(t)&&n.delete(e)}function d_(){sh=!1,Hn!==null&&ba(Hn)&&(Hn=null),qn!==null&&ba(qn)&&(qn=null),Wn!==null&&ba(Wn)&&(Wn=null),Gs.forEach(Wp),Qs.forEach(Wp)}function fs(t,e){t.blockedOn===e&&(t.blockedOn=null,sh||(sh=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,d_)))}function Ys(t){function e(i){return fs(i,t)}if(0<ca.length){fs(ca[0],t);for(var n=1;n<ca.length;n++){var r=ca[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Hn!==null&&fs(Hn,t),qn!==null&&fs(qn,t),Wn!==null&&fs(Wn,t),Gs.forEach(e),Qs.forEach(e),n=0;n<Ln.length;n++)r=Ln[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Ln.length&&(n=Ln[0],n.blockedOn===null);)ov(n),n.blockedOn===null&&Ln.shift()}var Si=Nn.ReactCurrentBatchConfig,il=!0;function f_(t,e,n,r){var i=te,s=Si.transition;Si.transition=null;try{te=1,xd(t,e,n,r)}finally{te=i,Si.transition=s}}function p_(t,e,n,r){var i=te,s=Si.transition;Si.transition=null;try{te=4,xd(t,e,n,r)}finally{te=i,Si.transition=s}}function xd(t,e,n,r){if(il){var i=oh(t,e,n,r);if(i===null)oc(t,e,r,sl,n),qp(t,r);else if(h_(i,t,e,n,r))r.stopPropagation();else if(qp(t,r),e&4&&-1<c_.indexOf(t)){for(;i!==null;){var s=Ao(i);if(s!==null&&nv(s),s=oh(t,e,n,r),s===null&&oc(t,e,r,sl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else oc(t,e,r,null,n)}}var sl=null;function oh(t,e,n,r){if(sl=null,t=Nd(r),t=Sr(t),t!==null)if(e=Wr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Gy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function av(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(t_()){case Ad:return 1;case Jy:return 4;case nl:case n_:return 16;case Zy:return 536870912;default:return 16}default:return 16}}var Bn=null,Pd=null,Ma=null;function lv(){if(Ma)return Ma;var t,e=Pd,n=e.length,r,i="value"in Bn?Bn.value:Bn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ma=i.slice(t,1<r?1-r:void 0)}function Ua(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ha(){return!0}function Kp(){return!1}function kt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ha:Kp,this.isPropagationStopped=Kp,this}return fe(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ha)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ha)},persist:function(){},isPersistent:ha}),e}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Od=kt(Gi),No=fe({},Gi,{view:0,detail:0}),m_=kt(No),Xu,Ju,ps,Gl=fe({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ld,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ps&&(ps&&t.type==="mousemove"?(Xu=t.screenX-ps.screenX,Ju=t.screenY-ps.screenY):Ju=Xu=0,ps=t),Xu)},movementY:function(t){return"movementY"in t?t.movementY:Ju}}),Gp=kt(Gl),g_=fe({},Gl,{dataTransfer:0}),y_=kt(g_),v_=fe({},No,{relatedTarget:0}),Zu=kt(v_),w_=fe({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),E_=kt(w_),S_=fe({},Gi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),__=kt(S_),k_=fe({},Gi,{data:0}),Qp=kt(k_),T_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},I_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},C_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function N_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=C_[t])?!!e[t]:!1}function Ld(){return N_}var A_=fe({},No,{key:function(t){if(t.key){var e=T_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ua(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?I_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ld,charCode:function(t){return t.type==="keypress"?Ua(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ua(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),R_=kt(A_),D_=fe({},Gl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yp=kt(D_),x_=fe({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ld}),P_=kt(x_),O_=fe({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),L_=kt(O_),b_=fe({},Gl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),M_=kt(b_),U_=[9,13,27,32],bd=yn&&"CompositionEvent"in window,xs=null;yn&&"documentMode"in document&&(xs=document.documentMode);var $_=yn&&"TextEvent"in window&&!xs,uv=yn&&(!bd||xs&&8<xs&&11>=xs),Xp=String.fromCharCode(32),Jp=!1;function cv(t,e){switch(t){case"keyup":return U_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var oi=!1;function F_(t,e){switch(t){case"compositionend":return hv(e);case"keypress":return e.which!==32?null:(Jp=!0,Xp);case"textInput":return t=e.data,t===Xp&&Jp?null:t;default:return null}}function V_(t,e){if(oi)return t==="compositionend"||!bd&&cv(t,e)?(t=lv(),Ma=Pd=Bn=null,oi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return uv&&e.locale!=="ko"?null:e.data;default:return null}}var B_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!B_[t.type]:e==="textarea"}function dv(t,e,n,r){zy(r),e=ol(e,"onChange"),0<e.length&&(n=new Od("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ps=null,Xs=null;function j_(t){kv(t,0)}function Ql(t){var e=ui(t);if(My(e))return t}function z_(t,e){if(t==="change")return e}var fv=!1;if(yn){var ec;if(yn){var tc="oninput"in document;if(!tc){var em=document.createElement("div");em.setAttribute("oninput","return;"),tc=typeof em.oninput=="function"}ec=tc}else ec=!1;fv=ec&&(!document.documentMode||9<document.documentMode)}function tm(){Ps&&(Ps.detachEvent("onpropertychange",pv),Xs=Ps=null)}function pv(t){if(t.propertyName==="value"&&Ql(Xs)){var e=[];dv(e,Xs,t,Nd(t)),Ky(j_,e)}}function H_(t,e,n){t==="focusin"?(tm(),Ps=e,Xs=n,Ps.attachEvent("onpropertychange",pv)):t==="focusout"&&tm()}function q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ql(Xs)}function W_(t,e){if(t==="click")return Ql(e)}function K_(t,e){if(t==="input"||t==="change")return Ql(e)}function G_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Ft=typeof Object.is=="function"?Object.is:G_;function Js(t,e){if(Ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!jc.call(e,i)||!Ft(t[i],e[i]))return!1}return!0}function nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rm(t,e){var n=nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nm(n)}}function mv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?mv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function gv(){for(var t=window,e=Za();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Za(t.document)}return e}function Md(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Q_(t){var e=gv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&mv(n.ownerDocument.documentElement,n)){if(r!==null&&Md(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=rm(n,s);var o=rm(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Y_=yn&&"documentMode"in document&&11>=document.documentMode,ai=null,ah=null,Os=null,lh=!1;function im(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lh||ai==null||ai!==Za(r)||(r=ai,"selectionStart"in r&&Md(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Os&&Js(Os,r)||(Os=r,r=ol(ah,"onSelect"),0<r.length&&(e=new Od("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=ai)))}function da(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var li={animationend:da("Animation","AnimationEnd"),animationiteration:da("Animation","AnimationIteration"),animationstart:da("Animation","AnimationStart"),transitionend:da("Transition","TransitionEnd")},nc={},yv={};yn&&(yv=document.createElement("div").style,"AnimationEvent"in window||(delete li.animationend.animation,delete li.animationiteration.animation,delete li.animationstart.animation),"TransitionEvent"in window||delete li.transitionend.transition);function Yl(t){if(nc[t])return nc[t];if(!li[t])return t;var e=li[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yv)return nc[t]=e[n];return t}var vv=Yl("animationend"),wv=Yl("animationiteration"),Ev=Yl("animationstart"),Sv=Yl("transitionend"),_v=new Map,sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){_v.set(t,e),qr(e,[t])}for(var rc=0;rc<sm.length;rc++){var ic=sm[rc],X_=ic.toLowerCase(),J_=ic[0].toUpperCase()+ic.slice(1);ur(X_,"on"+J_)}ur(vv,"onAnimationEnd");ur(wv,"onAnimationIteration");ur(Ev,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(Sv,"onTransitionEnd");Ri("onMouseEnter",["mouseout","mouseover"]);Ri("onMouseLeave",["mouseout","mouseover"]);Ri("onPointerEnter",["pointerout","pointerover"]);Ri("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ks="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Z_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ks));function om(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,XS(r,e,void 0,t),t.currentTarget=null}function kv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;om(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;om(i,a,u),s=l}}}if(tl)throw t=rh,tl=!1,rh=null,t}function se(t,e){var n=e[fh];n===void 0&&(n=e[fh]=new Set);var r=t+"__bubble";n.has(r)||(Tv(e,t,2,!1),n.add(r))}function sc(t,e,n){var r=0;e&&(r|=4),Tv(n,t,r,e)}var fa="_reactListening"+Math.random().toString(36).slice(2);function Zs(t){if(!t[fa]){t[fa]=!0,xy.forEach(function(n){n!=="selectionchange"&&(Z_.has(n)||sc(n,!1,t),sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[fa]||(e[fa]=!0,sc("selectionchange",!1,e))}}function Tv(t,e,n,r){switch(av(e)){case 1:var i=f_;break;case 4:i=p_;break;default:i=xd}n=i.bind(null,e,n,t),i=void 0,!nh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function oc(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Sr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Ky(function(){var u=s,c=Nd(n),h=[];e:{var d=_v.get(t);if(d!==void 0){var y=Od,v=t;switch(t){case"keypress":if(Ua(n)===0)break e;case"keydown":case"keyup":y=R_;break;case"focusin":v="focus",y=Zu;break;case"focusout":v="blur",y=Zu;break;case"beforeblur":case"afterblur":y=Zu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=Gp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=P_;break;case vv:case wv:case Ev:y=E_;break;case Sv:y=L_;break;case"scroll":y=m_;break;case"wheel":y=M_;break;case"copy":case"cut":case"paste":y=__;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=Yp}var w=(e&4)!==0,_=!w&&t==="scroll",p=w?d!==null?d+"Capture":null:d;w=[];for(var f=u,g;f!==null;){g=f;var E=g.stateNode;if(g.tag===5&&E!==null&&(g=E,p!==null&&(E=Ks(f,p),E!=null&&w.push(eo(f,E,g)))),_)break;f=f.return}0<w.length&&(d=new y(d,v,null,n,c),h.push({event:d,listeners:w}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",d&&n!==eh&&(v=n.relatedTarget||n.fromElement)&&(Sr(v)||v[vn]))break e;if((y||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,y?(v=n.relatedTarget||n.toElement,y=u,v=v?Sr(v):null,v!==null&&(_=Wr(v),v!==_||v.tag!==5&&v.tag!==6)&&(v=null)):(y=null,v=u),y!==v)){if(w=Gp,E="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Yp,E="onPointerLeave",p="onPointerEnter",f="pointer"),_=y==null?d:ui(y),g=v==null?d:ui(v),d=new w(E,f+"leave",y,n,c),d.target=_,d.relatedTarget=g,E=null,Sr(c)===u&&(w=new w(p,f+"enter",v,n,c),w.target=g,w.relatedTarget=_,E=w),_=E,y&&v)t:{for(w=y,p=v,f=0,g=w;g;g=ti(g))f++;for(g=0,E=p;E;E=ti(E))g++;for(;0<f-g;)w=ti(w),f--;for(;0<g-f;)p=ti(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=ti(w),p=ti(p)}w=null}else w=null;y!==null&&am(h,d,y,w,!1),v!==null&&_!==null&&am(h,_,v,w,!0)}}e:{if(d=u?ui(u):window,y=d.nodeName&&d.nodeName.toLowerCase(),y==="select"||y==="input"&&d.type==="file")var N=z_;else if(Zp(d))if(fv)N=K_;else{N=q_;var R=H_}else(y=d.nodeName)&&y.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(N=W_);if(N&&(N=N(t,u))){dv(h,N,n,c);break e}R&&R(t,d,u),t==="focusout"&&(R=d._wrapperState)&&R.controlled&&d.type==="number"&&Qc(d,"number",d.value)}switch(R=u?ui(u):window,t){case"focusin":(Zp(R)||R.contentEditable==="true")&&(ai=R,ah=u,Os=null);break;case"focusout":Os=ah=ai=null;break;case"mousedown":lh=!0;break;case"contextmenu":case"mouseup":case"dragend":lh=!1,im(h,n,c);break;case"selectionchange":if(Y_)break;case"keydown":case"keyup":im(h,n,c)}var A;if(bd)e:{switch(t){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else oi?cv(t,n)&&(O="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(uv&&n.locale!=="ko"&&(oi||O!=="onCompositionStart"?O==="onCompositionEnd"&&oi&&(A=lv()):(Bn=c,Pd="value"in Bn?Bn.value:Bn.textContent,oi=!0)),R=ol(u,O),0<R.length&&(O=new Qp(O,t,null,n,c),h.push({event:O,listeners:R}),A?O.data=A:(A=hv(n),A!==null&&(O.data=A)))),(A=$_?F_(t,n):V_(t,n))&&(u=ol(u,"onBeforeInput"),0<u.length&&(c=new Qp("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=A))}kv(h,e)})}function eo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Ks(t,n),s!=null&&r.unshift(eo(t,s,i)),s=Ks(t,e),s!=null&&r.push(eo(t,s,i))),t=t.return}return r}function ti(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function am(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Ks(n,s),l!=null&&o.unshift(eo(n,l,a))):i||(l=Ks(n,s),l!=null&&o.push(eo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ek=/\r\n?/g,tk=/\u0000|\uFFFD/g;function lm(t){return(typeof t=="string"?t:""+t).replace(ek,`
`).replace(tk,"")}function pa(t,e,n){if(e=lm(e),lm(t)!==e&&n)throw Error(T(425))}function al(){}var uh=null,ch=null;function hh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var dh=typeof setTimeout=="function"?setTimeout:void 0,nk=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,rk=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(t){return um.resolve(null).then(t).catch(ik)}:dh;function ik(t){setTimeout(function(){throw t})}function ac(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ys(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ys(e)}function Kn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function cm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qi=Math.random().toString(36).slice(2),Wt="__reactFiber$"+Qi,to="__reactProps$"+Qi,vn="__reactContainer$"+Qi,fh="__reactEvents$"+Qi,sk="__reactListeners$"+Qi,ok="__reactHandles$"+Qi;function Sr(t){var e=t[Wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[vn]||n[Wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=cm(t);t!==null;){if(n=t[Wt])return n;t=cm(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){return t=t[Wt]||t[vn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ui(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Xl(t){return t[to]||null}var ph=[],ci=-1;function cr(t){return{current:t}}function ae(t){0>ci||(t.current=ph[ci],ph[ci]=null,ci--)}function re(t,e){ci++,ph[ci]=t.current,t.current=e}var ir={},Xe=cr(ir),ct=cr(!1),Or=ir;function Di(t,e){var n=t.type.contextTypes;if(!n)return ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function ll(){ae(ct),ae(Xe)}function hm(t,e,n){if(Xe.current!==ir)throw Error(T(168));re(Xe,e),re(ct,n)}function Iv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(T(108,HS(t)||"Unknown",i));return fe({},n,r)}function ul(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Or=Xe.current,re(Xe,t),re(ct,ct.current),!0}function dm(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=Iv(t,e,Or),r.__reactInternalMemoizedMergedChildContext=t,ae(ct),ae(Xe),re(Xe,t)):ae(ct),re(ct,n)}var cn=null,Jl=!1,lc=!1;function Cv(t){cn===null?cn=[t]:cn.push(t)}function ak(t){Jl=!0,Cv(t)}function hr(){if(!lc&&cn!==null){lc=!0;var t=0,e=te;try{var n=cn;for(te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}cn=null,Jl=!1}catch(i){throw cn!==null&&(cn=cn.slice(t+1)),Xy(Ad,hr),i}finally{te=e,lc=!1}}return null}var hi=[],di=0,cl=null,hl=0,Ct=[],Nt=0,Lr=null,hn=1,dn="";function yr(t,e){hi[di++]=hl,hi[di++]=cl,cl=t,hl=e}function Nv(t,e,n){Ct[Nt++]=hn,Ct[Nt++]=dn,Ct[Nt++]=Lr,Lr=t;var r=hn;t=dn;var i=32-Ut(r)-1;r&=~(1<<i),n+=1;var s=32-Ut(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,hn=1<<32-Ut(e)+i|n<<i|r,dn=s+t}else hn=1<<s|n<<i|r,dn=t}function Ud(t){t.return!==null&&(yr(t,1),Nv(t,1,0))}function $d(t){for(;t===cl;)cl=hi[--di],hi[di]=null,hl=hi[--di],hi[di]=null;for(;t===Lr;)Lr=Ct[--Nt],Ct[Nt]=null,dn=Ct[--Nt],Ct[Nt]=null,hn=Ct[--Nt],Ct[Nt]=null}var vt=null,mt=null,ue=!1,Mt=null;function Av(t,e){var n=At(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function fm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,mt=Kn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,mt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:hn,overflow:dn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=At(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,mt=null,!0):!1;default:return!1}}function mh(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gh(t){if(ue){var e=mt;if(e){var n=e;if(!fm(t,e)){if(mh(t))throw Error(T(418));e=Kn(n.nextSibling);var r=vt;e&&fm(t,e)?Av(r,n):(t.flags=t.flags&-4097|2,ue=!1,vt=t)}}else{if(mh(t))throw Error(T(418));t.flags=t.flags&-4097|2,ue=!1,vt=t}}}function pm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function ma(t){if(t!==vt)return!1;if(!ue)return pm(t),ue=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!hh(t.type,t.memoizedProps)),e&&(e=mt)){if(mh(t))throw Rv(),Error(T(418));for(;e;)Av(t,e),e=Kn(e.nextSibling)}if(pm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mt=Kn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mt=null}}else mt=vt?Kn(t.stateNode.nextSibling):null;return!0}function Rv(){for(var t=mt;t;)t=Kn(t.nextSibling)}function xi(){mt=vt=null,ue=!1}function Fd(t){Mt===null?Mt=[t]:Mt.push(t)}var lk=Nn.ReactCurrentBatchConfig;function Lt(t,e){if(t&&t.defaultProps){e=fe({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var dl=cr(null),fl=null,fi=null,Vd=null;function Bd(){Vd=fi=fl=null}function jd(t){var e=dl.current;ae(dl),t._currentValue=e}function yh(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function _i(t,e){fl=t,Vd=fi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ut=!0),t.firstContext=null)}function Dt(t){var e=t._currentValue;if(Vd!==t)if(t={context:t,memoizedValue:e,next:null},fi===null){if(fl===null)throw Error(T(308));fi=t,fl.dependencies={lanes:0,firstContext:t}}else fi=fi.next=t;return e}var _r=null;function zd(t){_r===null?_r=[t]:_r.push(t)}function Dv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zd(e)):(n.next=i.next,i.next=n),e.interleaved=n,wn(t,r)}function wn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var On=!1;function Hd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function gn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Gn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,Y&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wn(t,n)}return i=r.interleaved,i===null?(e.next=e,zd(r)):(e.next=i.next,i.next=e),r.interleaved=e,wn(t,n)}function $a(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rd(t,n)}}function mm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,r){var i=t.updateQueue;On=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=i.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,y=a.eventTime;if((r&d)===d){c!==null&&(c=c.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,w=a;switch(d=e,y=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){h=v.call(y,h,d);break e}h=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,d=typeof v=="function"?v.call(y,h,d):v,d==null)break e;h=fe({},h,d);break e;case 2:On=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=i.effects,d===null?i.effects=[a]:d.push(a))}else y={eventTime:y,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=y,l=h):c=c.next=y,o|=d;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;d=a,a=d.next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}while(1);if(c===null&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Mr|=o,t.lanes=o,t.memoizedState=h}}function gm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(T(191,i));i.call(r)}}}var Pv=new Dy.Component().refs;function vh(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:fe({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?Wr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=it(),i=Yn(t),s=gn(r,i);s.payload=e,n!=null&&(s.callback=n),e=Gn(t,s,i),e!==null&&($t(e,t,i,r),$a(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=it(),i=Yn(t),s=gn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Gn(t,s,i),e!==null&&($t(e,t,i,r),$a(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),r=Yn(t),i=gn(n,r);i.tag=2,e!=null&&(i.callback=e),e=Gn(t,i,r),e!==null&&($t(e,t,r,n),$a(e,t,r))}};function ym(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Js(n,r)||!Js(i,s):!0}function Ov(t,e,n){var r=!1,i=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=Dt(s):(i=ht(e)?Or:Xe.current,r=e.contextTypes,s=(r=r!=null)?Di(t,i):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function vm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function wh(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Pv,Hd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Dt(s):(s=ht(e)?Or:Xe.current,i.context=Di(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(vh(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Zl.enqueueReplaceState(i,i.state,null),pl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function ms(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===Pv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function ga(t,e){throw t=Object.prototype.toString.call(e),Error(T(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function wm(t){var e=t._init;return e(t._payload)}function Lv(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Xn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,f,g,E){return f===null||f.tag!==6?(f=mc(g,p.mode,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function l(p,f,g,E){var N=g.type;return N===si?c(p,f,g.props.children,E,g.key):f!==null&&(f.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Pn&&wm(N)===f.type)?(E=i(f,g.props),E.ref=ms(p,f,g),E.return=p,E):(E=Ha(g.type,g.key,g.props,null,p.mode,E),E.ref=ms(p,f,g),E.return=p,E)}function u(p,f,g,E){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=gc(g,p.mode,E),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,E,N){return f===null||f.tag!==7?(f=Ar(g,p.mode,E,N),f.return=p,f):(f=i(f,g),f.return=p,f)}function h(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=mc(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case sa:return g=Ha(f.type,f.key,f.props,null,p.mode,g),g.ref=ms(p,null,f),g.return=p,g;case ii:return f=gc(f,p.mode,g),f.return=p,f;case Pn:var E=f._init;return h(p,E(f._payload),g)}if(Ss(f)||cs(f))return f=Ar(f,p.mode,g,null),f.return=p,f;ga(p,f)}return null}function d(p,f,g,E){var N=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return N!==null?null:a(p,f,""+g,E);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case sa:return g.key===N?l(p,f,g,E):null;case ii:return g.key===N?u(p,f,g,E):null;case Pn:return N=g._init,d(p,f,N(g._payload),E)}if(Ss(g)||cs(g))return N!==null?null:c(p,f,g,E,null);ga(p,g)}return null}function y(p,f,g,E,N){if(typeof E=="string"&&E!==""||typeof E=="number")return p=p.get(g)||null,a(f,p,""+E,N);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case sa:return p=p.get(E.key===null?g:E.key)||null,l(f,p,E,N);case ii:return p=p.get(E.key===null?g:E.key)||null,u(f,p,E,N);case Pn:var R=E._init;return y(p,f,g,R(E._payload),N)}if(Ss(E)||cs(E))return p=p.get(g)||null,c(f,p,E,N,null);ga(f,E)}return null}function v(p,f,g,E){for(var N=null,R=null,A=f,O=f=0,X=null;A!==null&&O<g.length;O++){A.index>O?(X=A,A=null):X=A.sibling;var z=d(p,A,g[O],E);if(z===null){A===null&&(A=X);break}t&&A&&z.alternate===null&&e(p,A),f=s(z,f,O),R===null?N=z:R.sibling=z,R=z,A=X}if(O===g.length)return n(p,A),ue&&yr(p,O),N;if(A===null){for(;O<g.length;O++)A=h(p,g[O],E),A!==null&&(f=s(A,f,O),R===null?N=A:R.sibling=A,R=A);return ue&&yr(p,O),N}for(A=r(p,A);O<g.length;O++)X=y(A,p,O,g[O],E),X!==null&&(t&&X.alternate!==null&&A.delete(X.key===null?O:X.key),f=s(X,f,O),R===null?N=X:R.sibling=X,R=X);return t&&A.forEach(function(Z){return e(p,Z)}),ue&&yr(p,O),N}function w(p,f,g,E){var N=cs(g);if(typeof N!="function")throw Error(T(150));if(g=N.call(g),g==null)throw Error(T(151));for(var R=N=null,A=f,O=f=0,X=null,z=g.next();A!==null&&!z.done;O++,z=g.next()){A.index>O?(X=A,A=null):X=A.sibling;var Z=d(p,A,z.value,E);if(Z===null){A===null&&(A=X);break}t&&A&&Z.alternate===null&&e(p,A),f=s(Z,f,O),R===null?N=Z:R.sibling=Z,R=Z,A=X}if(z.done)return n(p,A),ue&&yr(p,O),N;if(A===null){for(;!z.done;O++,z=g.next())z=h(p,z.value,E),z!==null&&(f=s(z,f,O),R===null?N=z:R.sibling=z,R=z);return ue&&yr(p,O),N}for(A=r(p,A);!z.done;O++,z=g.next())z=y(A,p,O,z.value,E),z!==null&&(t&&z.alternate!==null&&A.delete(z.key===null?O:z.key),f=s(z,f,O),R===null?N=z:R.sibling=z,R=z);return t&&A.forEach(function(an){return e(p,an)}),ue&&yr(p,O),N}function _(p,f,g,E){if(typeof g=="object"&&g!==null&&g.type===si&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case sa:e:{for(var N=g.key,R=f;R!==null;){if(R.key===N){if(N=g.type,N===si){if(R.tag===7){n(p,R.sibling),f=i(R,g.props.children),f.return=p,p=f;break e}}else if(R.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Pn&&wm(N)===R.type){n(p,R.sibling),f=i(R,g.props),f.ref=ms(p,R,g),f.return=p,p=f;break e}n(p,R);break}else e(p,R);R=R.sibling}g.type===si?(f=Ar(g.props.children,p.mode,E,g.key),f.return=p,p=f):(E=Ha(g.type,g.key,g.props,null,p.mode,E),E.ref=ms(p,f,g),E.return=p,p=E)}return o(p);case ii:e:{for(R=g.key;f!==null;){if(f.key===R)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=gc(g,p.mode,E),f.return=p,p=f}return o(p);case Pn:return R=g._init,_(p,f,R(g._payload),E)}if(Ss(g))return v(p,f,g,E);if(cs(g))return w(p,f,g,E);ga(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=mc(g,p.mode,E),f.return=p,p=f),o(p)):n(p,f)}return _}var Pi=Lv(!0),bv=Lv(!1),Ro={},Yt=cr(Ro),no=cr(Ro),ro=cr(Ro);function kr(t){if(t===Ro)throw Error(T(174));return t}function qd(t,e){switch(re(ro,e),re(no,t),re(Yt,Ro),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xc(e,t)}ae(Yt),re(Yt,e)}function Oi(){ae(Yt),ae(no),ae(ro)}function Mv(t){kr(ro.current);var e=kr(Yt.current),n=Xc(e,t.type);e!==n&&(re(no,t),re(Yt,n))}function Wd(t){no.current===t&&(ae(Yt),ae(no))}var he=cr(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var uc=[];function Kd(){for(var t=0;t<uc.length;t++)uc[t]._workInProgressVersionPrimary=null;uc.length=0}var Fa=Nn.ReactCurrentDispatcher,cc=Nn.ReactCurrentBatchConfig,br=0,de=null,Ce=null,Oe=null,gl=!1,Ls=!1,io=0,uk=0;function ze(){throw Error(T(321))}function Gd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Ft(t[n],e[n]))return!1;return!0}function Qd(t,e,n,r,i,s){if(br=s,de=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fa.current=t===null||t.memoizedState===null?fk:pk,t=n(r,i),Ls){s=0;do{if(Ls=!1,io=0,25<=s)throw Error(T(301));s+=1,Oe=Ce=null,e.updateQueue=null,Fa.current=mk,t=n(r,i)}while(Ls)}if(Fa.current=yl,e=Ce!==null&&Ce.next!==null,br=0,Oe=Ce=de=null,gl=!1,e)throw Error(T(300));return t}function Yd(){var t=io!==0;return io=0,t}function qt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Oe===null?de.memoizedState=Oe=t:Oe=Oe.next=t,Oe}function xt(){if(Ce===null){var t=de.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Oe===null?de.memoizedState:Oe.next;if(e!==null)Oe=e,Ce=t;else{if(t===null)throw Error(T(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Oe===null?de.memoizedState=Oe=t:Oe=Oe.next=t}return Oe}function so(t,e){return typeof e=="function"?e(t):e}function hc(t){var e=xt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((br&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=r):l=l.next=h,de.lanes|=c,Mr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Ft(r,e.memoizedState)||(ut=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,de.lanes|=s,Mr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function dc(t){var e=xt(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Ft(s,e.memoizedState)||(ut=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Uv(){}function $v(t,e){var n=de,r=xt(),i=e(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,ut=!0),r=r.queue,Xd(Bv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Oe!==null&&Oe.memoizedState.tag&1){if(n.flags|=2048,oo(9,Vv.bind(null,n,r,i,e),void 0,null),Le===null)throw Error(T(349));br&30||Fv(n,e,i)}return i}function Fv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vv(t,e,n,r){e.value=n,e.getSnapshot=r,jv(e)&&zv(t)}function Bv(t,e,n){return n(function(){jv(e)&&zv(t)})}function jv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Ft(t,n)}catch{return!0}}function zv(t){var e=wn(t,1);e!==null&&$t(e,t,1,-1)}function Em(t){var e=qt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},e.queue=t,t=t.dispatch=dk.bind(null,de,t),[e.memoizedState,t]}function oo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=de.updateQueue,e===null?(e={lastEffect:null,stores:null},de.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Hv(){return xt().memoizedState}function Va(t,e,n,r){var i=qt();de.flags|=t,i.memoizedState=oo(1|e,n,void 0,r===void 0?null:r)}function eu(t,e,n,r){var i=xt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&Gd(r,o.deps)){i.memoizedState=oo(e,n,s,r);return}}de.flags|=t,i.memoizedState=oo(1|e,n,s,r)}function Sm(t,e){return Va(8390656,8,t,e)}function Xd(t,e){return eu(2048,8,t,e)}function qv(t,e){return eu(4,2,t,e)}function Wv(t,e){return eu(4,4,t,e)}function Kv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Gv(t,e,n){return n=n!=null?n.concat([t]):null,eu(4,4,Kv.bind(null,e,t),n)}function Jd(){}function Qv(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Yv(t,e){var n=xt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Xv(t,e,n){return br&21?(Ft(n,e)||(n=ev(),de.lanes|=n,Mr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ut=!0),t.memoizedState=n)}function ck(t,e){var n=te;te=n!==0&&4>n?n:4,t(!0);var r=cc.transition;cc.transition={};try{t(!1),e()}finally{te=n,cc.transition=r}}function Jv(){return xt().memoizedState}function hk(t,e,n){var r=Yn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zv(t))e0(e,n);else if(n=Dv(t,e,n,r),n!==null){var i=it();$t(n,t,r,i),t0(n,e,r)}}function dk(t,e,n){var r=Yn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zv(t))e0(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Ft(a,o)){var l=e.interleaved;l===null?(i.next=i,zd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=Dv(t,e,i,r),n!==null&&(i=it(),$t(n,t,r,i),t0(n,e,r))}}function Zv(t){var e=t.alternate;return t===de||e!==null&&e===de}function e0(t,e){Ls=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function t0(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Rd(t,n)}}var yl={readContext:Dt,useCallback:ze,useContext:ze,useEffect:ze,useImperativeHandle:ze,useInsertionEffect:ze,useLayoutEffect:ze,useMemo:ze,useReducer:ze,useRef:ze,useState:ze,useDebugValue:ze,useDeferredValue:ze,useTransition:ze,useMutableSource:ze,useSyncExternalStore:ze,useId:ze,unstable_isNewReconciler:!1},fk={readContext:Dt,useCallback:function(t,e){return qt().memoizedState=[t,e===void 0?null:e],t},useContext:Dt,useEffect:Sm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Va(4194308,4,Kv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Va(4194308,4,t,e)},useInsertionEffect:function(t,e){return Va(4,2,t,e)},useMemo:function(t,e){var n=qt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=qt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hk.bind(null,de,t),[r.memoizedState,t]},useRef:function(t){var e=qt();return t={current:t},e.memoizedState=t},useState:Em,useDebugValue:Jd,useDeferredValue:function(t){return qt().memoizedState=t},useTransition:function(){var t=Em(!1),e=t[0];return t=ck.bind(null,t[1]),qt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=de,i=qt();if(ue){if(n===void 0)throw Error(T(407));n=n()}else{if(n=e(),Le===null)throw Error(T(349));br&30||Fv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Sm(Bv.bind(null,r,s,t),[t]),r.flags|=2048,oo(9,Vv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=qt(),e=Le.identifierPrefix;if(ue){var n=dn,r=hn;n=(r&~(1<<32-Ut(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=io++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=uk++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},pk={readContext:Dt,useCallback:Qv,useContext:Dt,useEffect:Xd,useImperativeHandle:Gv,useInsertionEffect:qv,useLayoutEffect:Wv,useMemo:Yv,useReducer:hc,useRef:Hv,useState:function(){return hc(so)},useDebugValue:Jd,useDeferredValue:function(t){var e=xt();return Xv(e,Ce.memoizedState,t)},useTransition:function(){var t=hc(so)[0],e=xt().memoizedState;return[t,e]},useMutableSource:Uv,useSyncExternalStore:$v,useId:Jv,unstable_isNewReconciler:!1},mk={readContext:Dt,useCallback:Qv,useContext:Dt,useEffect:Xd,useImperativeHandle:Gv,useInsertionEffect:qv,useLayoutEffect:Wv,useMemo:Yv,useReducer:dc,useRef:Hv,useState:function(){return dc(so)},useDebugValue:Jd,useDeferredValue:function(t){var e=xt();return Ce===null?e.memoizedState=t:Xv(e,Ce.memoizedState,t)},useTransition:function(){var t=dc(so)[0],e=xt().memoizedState;return[t,e]},useMutableSource:Uv,useSyncExternalStore:$v,useId:Jv,unstable_isNewReconciler:!1};function Li(t,e){try{var n="",r=e;do n+=zS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function fc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Eh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var gk=typeof WeakMap=="function"?WeakMap:Map;function n0(t,e,n){n=gn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){wl||(wl=!0,Dh=r),Eh(t,e)},n}function r0(t,e,n){n=gn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Eh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Eh(t,e),typeof r!="function"&&(Qn===null?Qn=new Set([this]):Qn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function _m(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new gk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Dk.bind(null,t,e,n),e.then(t,t))}function km(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tm(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=gn(-1,1),e.tag=2,Gn(n,e,1))),n.lanes|=1),t)}var yk=Nn.ReactCurrentOwner,ut=!1;function nt(t,e,n,r){e.child=t===null?bv(e,null,n,r):Pi(e,t.child,n,r)}function Im(t,e,n,r,i){n=n.render;var s=e.ref;return _i(e,i),r=Qd(t,e,n,r,s,i),n=Yd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(ue&&n&&Ud(e),e.flags|=1,nt(t,e,r,i),e.child)}function Cm(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!af(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,i0(t,e,s,r,i)):(t=Ha(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Js,n(o,r)&&t.ref===e.ref)return En(t,e,i)}return e.flags|=1,t=Xn(s,r),t.ref=e.ref,t.return=e,e.child=t}function i0(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Js(s,r)&&t.ref===e.ref)if(ut=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ut=!0);else return e.lanes=t.lanes,En(t,e,i)}return Sh(t,e,n,r,i)}function s0(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},re(mi,pt),pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,re(mi,pt),pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,re(mi,pt),pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,re(mi,pt),pt|=r;return nt(t,e,i,n),e.child}function o0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sh(t,e,n,r,i){var s=ht(n)?Or:Xe.current;return s=Di(e,s),_i(e,i),n=Qd(t,e,n,r,s,i),r=Yd(),t!==null&&!ut?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,En(t,e,i)):(ue&&r&&Ud(e),e.flags|=1,nt(t,e,n,i),e.child)}function Nm(t,e,n,r,i){if(ht(n)){var s=!0;ul(e)}else s=!1;if(_i(e,i),e.stateNode===null)Ba(t,e),Ov(e,n,r),wh(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Dt(u):(u=ht(n)?Or:Xe.current,u=Di(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&vm(e,o,r,u),On=!1;var d=e.memoizedState;o.state=d,pl(e,r,o,i),l=e.memoizedState,a!==r||d!==l||ct.current||On?(typeof c=="function"&&(vh(e,n,c,r),l=e.memoizedState),(a=On||ym(e,n,a,r,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,xv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Lt(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dt(l):(l=ht(n)?Or:Xe.current,l=Di(e,l));var y=n.getDerivedStateFromProps;(c=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&vm(e,o,r,l),On=!1,d=e.memoizedState,o.state=d,pl(e,r,o,i);var v=e.memoizedState;a!==h||d!==v||ct.current||On?(typeof y=="function"&&(vh(e,n,y,r),v=e.memoizedState),(u=On||ym(e,n,u,r,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),r=!1)}return _h(t,e,n,r,s,i)}function _h(t,e,n,r,i,s){o0(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&dm(e,n,!1),En(t,e,s);r=e.stateNode,yk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Pi(e,t.child,null,s),e.child=Pi(e,null,a,s)):nt(t,e,a,s),e.memoizedState=r.state,i&&dm(e,n,!0),e.child}function a0(t){var e=t.stateNode;e.pendingContext?hm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hm(t,e.context,!1),qd(t,e.containerInfo)}function Am(t,e,n,r,i){return xi(),Fd(i),e.flags|=256,nt(t,e,n,r),e.child}var kh={dehydrated:null,treeContext:null,retryLane:0};function Th(t){return{baseLanes:t,cachePool:null,transitions:null}}function l0(t,e,n){var r=e.pendingProps,i=he.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),re(he,i&1),t===null)return gh(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=ru(o,r,0,null),t=Ar(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Th(n),e.memoizedState=kh,t):Zd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return vk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Xn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Xn(a,s):(s=Ar(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Th(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kh,r}return s=t.child,t=s.sibling,r=Xn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zd(t,e){return e=ru({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ya(t,e,n,r){return r!==null&&Fd(r),Pi(e,t.child,null,n),t=Zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=fc(Error(T(422))),ya(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=ru({mode:"visible",children:r.children},i,0,null),s=Ar(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Pi(e,t.child,null,o),e.child.memoizedState=Th(o),e.memoizedState=kh,s);if(!(e.mode&1))return ya(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(T(419)),r=fc(s,r,void 0),ya(t,e,o,r)}if(a=(o&t.childLanes)!==0,ut||a){if(r=Le,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,wn(t,i),$t(r,t,i,-1))}return of(),r=fc(Error(T(421))),ya(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=xk.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,mt=Kn(i.nextSibling),vt=e,ue=!0,Mt=null,t!==null&&(Ct[Nt++]=hn,Ct[Nt++]=dn,Ct[Nt++]=Lr,hn=t.id,dn=t.overflow,Lr=e),e=Zd(e,r.children),e.flags|=4096,e)}function Rm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yh(t.return,e,n)}function pc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function u0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=he.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rm(t,n,e);else if(t.tag===19)Rm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(re(he,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),pc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ml(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}pc(e,!0,n,null,s);break;case"together":pc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ba(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function En(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Mr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=Xn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Xn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function wk(t,e,n){switch(e.tag){case 3:a0(e),xi();break;case 5:Mv(e);break;case 1:ht(e.type)&&ul(e);break;case 4:qd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;re(dl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(re(he,he.current&1),e.flags|=128,null):n&e.child.childLanes?l0(t,e,n):(re(he,he.current&1),t=En(t,e,n),t!==null?t.sibling:null);re(he,he.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return u0(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),re(he,he.current),r)break;return null;case 22:case 23:return e.lanes=0,s0(t,e,n)}return En(t,e,n)}var c0,Ih,h0,d0;c0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ih=function(){};h0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,kr(Yt.current);var s=null;switch(n){case"input":i=Kc(t,i),r=Kc(t,r),s=[];break;case"select":i=fe({},i,{value:void 0}),r=fe({},r,{value:void 0}),s=[];break;case"textarea":i=Yc(t,i),r=Yc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=al)}Jc(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(qs.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(qs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&se("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};d0=function(t,e,n,r){n!==r&&(e.flags|=4)};function gs(t,e){if(!ue)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function He(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Ek(t,e,n){var r=e.pendingProps;switch($d(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(e),null;case 1:return ht(e.type)&&ll(),He(e),null;case 3:return r=e.stateNode,Oi(),ae(ct),ae(Xe),Kd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ma(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Mt!==null&&(Oh(Mt),Mt=null))),Ih(t,e),He(e),null;case 5:Wd(e);var i=kr(ro.current);if(n=e.type,t!==null&&e.stateNode!=null)h0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(T(166));return He(e),null}if(t=kr(Yt.current),ma(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Wt]=e,r[to]=s,t=(e.mode&1)!==0,n){case"dialog":se("cancel",r),se("close",r);break;case"iframe":case"object":case"embed":se("load",r);break;case"video":case"audio":for(i=0;i<ks.length;i++)se(ks[i],r);break;case"source":se("error",r);break;case"img":case"image":case"link":se("error",r),se("load",r);break;case"details":se("toggle",r);break;case"input":$p(r,s),se("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},se("invalid",r);break;case"textarea":Vp(r,s),se("invalid",r)}Jc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&pa(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&pa(r.textContent,a,t),i=["children",""+a]):qs.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&se("scroll",r)}switch(n){case"input":oa(r),Fp(r,s,!0);break;case"textarea":oa(r),Bp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=al)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Fy(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Wt]=e,t[to]=r,c0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Zc(n,r),n){case"dialog":se("cancel",t),se("close",t),i=r;break;case"iframe":case"object":case"embed":se("load",t),i=r;break;case"video":case"audio":for(i=0;i<ks.length;i++)se(ks[i],t);i=r;break;case"source":se("error",t),i=r;break;case"img":case"image":case"link":se("error",t),se("load",t),i=r;break;case"details":se("toggle",t),i=r;break;case"input":$p(t,r),i=Kc(t,r),se("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=fe({},r,{value:void 0}),se("invalid",t);break;case"textarea":Vp(t,r),i=Yc(t,r),se("invalid",t);break;default:i=r}Jc(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jy(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vy(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ws(t,l):typeof l=="number"&&Ws(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(qs.hasOwnProperty(s)?l!=null&&s==="onScroll"&&se("scroll",t):l!=null&&kd(t,s,l,o))}switch(n){case"input":oa(t),Fp(t,r,!1);break;case"textarea":oa(t),Bp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+rr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?vi(t,!!r.multiple,s,!1):r.defaultValue!=null&&vi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return He(e),null;case 6:if(t&&e.stateNode!=null)d0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));if(n=kr(ro.current),kr(Yt.current),ma(e)){if(r=e.stateNode,n=e.memoizedProps,r[Wt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:pa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&pa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Wt]=e,e.stateNode=r}return He(e),null;case 13:if(ae(he),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ue&&mt!==null&&e.mode&1&&!(e.flags&128))Rv(),xi(),e.flags|=98560,s=!1;else if(s=ma(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(T(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(T(317));s[Wt]=e}else xi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;He(e),s=!1}else Mt!==null&&(Oh(Mt),Mt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||he.current&1?Ne===0&&(Ne=3):of())),e.updateQueue!==null&&(e.flags|=4),He(e),null);case 4:return Oi(),Ih(t,e),t===null&&Zs(e.stateNode.containerInfo),He(e),null;case 10:return jd(e.type._context),He(e),null;case 17:return ht(e.type)&&ll(),He(e),null;case 19:if(ae(he),s=e.memoizedState,s===null)return He(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)gs(s,!1);else{if(Ne!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ml(t),o!==null){for(e.flags|=128,gs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return re(he,he.current&1|2),e.child}t=t.sibling}s.tail!==null&&we()>bi&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304)}else{if(!r)if(t=ml(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),gs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ue)return He(e),null}else 2*we()-s.renderingStartTime>bi&&n!==1073741824&&(e.flags|=128,r=!0,gs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=we(),e.sibling=null,n=he.current,re(he,r?n&1|2:n&1),e):(He(e),null);case 22:case 23:return sf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pt&1073741824&&(He(e),e.subtreeFlags&6&&(e.flags|=8192)):He(e),null;case 24:return null;case 25:return null}throw Error(T(156,e.tag))}function Sk(t,e){switch($d(e),e.tag){case 1:return ht(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Oi(),ae(ct),ae(Xe),Kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Wd(e),null;case 13:if(ae(he),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(T(340));xi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ae(he),null;case 4:return Oi(),null;case 10:return jd(e.type._context),null;case 22:case 23:return sf(),null;case 24:return null;default:return null}}var va=!1,We=!1,_k=typeof WeakSet=="function"?WeakSet:Set,x=null;function pi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(t,e,r)}else n.current=null}function Ch(t,e,n){try{n()}catch(r){pe(t,e,r)}}var Dm=!1;function kk(t,e){if(uh=il,t=gv(),Md(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var y;h!==n||i!==0&&h.nodeType!==3||(a=o+i),h!==s||r!==0&&h.nodeType!==3||(l=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(y=h.firstChild)!==null;)d=h,h=y;for(;;){if(h===t)break t;if(d===n&&++u===i&&(a=o),d===s&&++c===r&&(l=o),(y=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=y}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ch={focusedElem:t,selectionRange:n},il=!1,x=e;x!==null;)if(e=x,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,x=t;else for(;x!==null;){e=x;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,_=v.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:Lt(e.type,w),_);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(E){pe(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,x=t;break}x=e.return}return v=Dm,Dm=!1,v}function bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ch(e,n,s)}i=i.next}while(i!==r)}}function tu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Nh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function f0(t){var e=t.alternate;e!==null&&(t.alternate=null,f0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Wt],delete e[to],delete e[fh],delete e[sk],delete e[ok])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function p0(t){return t.tag===5||t.tag===3||t.tag===4}function xm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||p0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(r!==4&&(t=t.child,t!==null))for(Ah(t,e,n),t=t.sibling;t!==null;)Ah(t,e,n),t=t.sibling}function Rh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Rh(t,e,n),t=t.sibling;t!==null;)Rh(t,e,n),t=t.sibling}var Ue=null,bt=!1;function Dn(t,e,n){for(n=n.child;n!==null;)m0(t,e,n),n=n.sibling}function m0(t,e,n){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(Kl,n)}catch{}switch(n.tag){case 5:We||pi(n,e);case 6:var r=Ue,i=bt;Ue=null,Dn(t,e,n),Ue=r,bt=i,Ue!==null&&(bt?(t=Ue,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ue.removeChild(n.stateNode));break;case 18:Ue!==null&&(bt?(t=Ue,n=n.stateNode,t.nodeType===8?ac(t.parentNode,n):t.nodeType===1&&ac(t,n),Ys(t)):ac(Ue,n.stateNode));break;case 4:r=Ue,i=bt,Ue=n.stateNode.containerInfo,bt=!0,Dn(t,e,n),Ue=r,bt=i;break;case 0:case 11:case 14:case 15:if(!We&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ch(n,e,o),i=i.next}while(i!==r)}Dn(t,e,n);break;case 1:if(!We&&(pi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,e,a)}Dn(t,e,n);break;case 21:Dn(t,e,n);break;case 22:n.mode&1?(We=(r=We)||n.memoizedState!==null,Dn(t,e,n),We=r):Dn(t,e,n);break;default:Dn(t,e,n)}}function Pm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new _k),e.forEach(function(r){var i=Pk.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ot(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ue=a.stateNode,bt=!1;break e;case 3:Ue=a.stateNode.containerInfo,bt=!0;break e;case 4:Ue=a.stateNode.containerInfo,bt=!0;break e}a=a.return}if(Ue===null)throw Error(T(160));m0(s,o,i),Ue=null,bt=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)g0(e,t),e=e.sibling}function g0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ot(e,t),Ht(t),r&4){try{bs(3,t,t.return),tu(3,t)}catch(w){pe(t,t.return,w)}try{bs(5,t,t.return)}catch(w){pe(t,t.return,w)}}break;case 1:Ot(e,t),Ht(t),r&512&&n!==null&&pi(n,n.return);break;case 5:if(Ot(e,t),Ht(t),r&512&&n!==null&&pi(n,n.return),t.flags&32){var i=t.stateNode;try{Ws(i,"")}catch(w){pe(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Uy(i,s),Zc(a,o);var u=Zc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?jy(i,h):c==="dangerouslySetInnerHTML"?Vy(i,h):c==="children"?Ws(i,h):kd(i,c,h,u)}switch(a){case"input":Gc(i,s);break;case"textarea":$y(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var y=s.value;y!=null?vi(i,!!s.multiple,y,!1):d!==!!s.multiple&&(s.defaultValue!=null?vi(i,!!s.multiple,s.defaultValue,!0):vi(i,!!s.multiple,s.multiple?[]:"",!1))}i[to]=s}catch(w){pe(t,t.return,w)}}break;case 6:if(Ot(e,t),Ht(t),r&4){if(t.stateNode===null)throw Error(T(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){pe(t,t.return,w)}}break;case 3:if(Ot(e,t),Ht(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ys(e.containerInfo)}catch(w){pe(t,t.return,w)}break;case 4:Ot(e,t),Ht(t);break;case 13:Ot(e,t),Ht(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(nf=we())),r&4&&Pm(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(We=(u=We)||c,Ot(e,t),We=u):Ot(e,t),Ht(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(x=t,c=t.child;c!==null;){for(h=x=c;x!==null;){switch(d=x,y=d.child,d.tag){case 0:case 11:case 14:case 15:bs(4,d,d.return);break;case 1:pi(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){r=d,n=d.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(w){pe(r,n,w)}}break;case 5:pi(d,d.return);break;case 22:if(d.memoizedState!==null){Lm(h);continue}}y!==null?(y.return=d,x=y):Lm(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{i=h.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=By("display",o))}catch(w){pe(t,t.return,w)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(w){pe(t,t.return,w)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ot(e,t),Ht(t),r&4&&Pm(t);break;case 21:break;default:Ot(e,t),Ht(t)}}function Ht(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(p0(n)){var r=n;break e}n=n.return}throw Error(T(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ws(i,""),r.flags&=-33);var s=xm(t);Rh(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=xm(t);Ah(t,a,o);break;default:throw Error(T(161))}}catch(l){pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Tk(t,e,n){x=t,y0(t)}function y0(t,e,n){for(var r=(t.mode&1)!==0;x!==null;){var i=x,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||va;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||We;a=va;var u=We;if(va=o,(We=l)&&!u)for(x=i;x!==null;)o=x,l=o.child,o.tag===22&&o.memoizedState!==null?bm(i):l!==null?(l.return=o,x=l):bm(i);for(;s!==null;)x=s,y0(s),s=s.sibling;x=i,va=a,We=u}Om(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,x=s):Om(t)}}function Om(t){for(;x!==null;){var e=x;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:We||tu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!We)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Lt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&gm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}gm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&Ys(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}We||e.flags&512&&Nh(e)}catch(d){pe(e,e.return,d)}}if(e===t){x=null;break}if(n=e.sibling,n!==null){n.return=e.return,x=n;break}x=e.return}}function Lm(t){for(;x!==null;){var e=x;if(e===t){x=null;break}var n=e.sibling;if(n!==null){n.return=e.return,x=n;break}x=e.return}}function bm(t){for(;x!==null;){var e=x;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tu(4,e)}catch(l){pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){pe(e,i,l)}}var s=e.return;try{Nh(e)}catch(l){pe(e,s,l)}break;case 5:var o=e.return;try{Nh(e)}catch(l){pe(e,o,l)}}}catch(l){pe(e,e.return,l)}if(e===t){x=null;break}var a=e.sibling;if(a!==null){a.return=e.return,x=a;break}x=e.return}}var Ik=Math.ceil,vl=Nn.ReactCurrentDispatcher,ef=Nn.ReactCurrentOwner,Rt=Nn.ReactCurrentBatchConfig,Y=0,Le=null,ke=null,Fe=0,pt=0,mi=cr(0),Ne=0,ao=null,Mr=0,nu=0,tf=0,Ms=null,at=null,nf=0,bi=1/0,un=null,wl=!1,Dh=null,Qn=null,wa=!1,jn=null,El=0,Us=0,xh=null,ja=-1,za=0;function it(){return Y&6?we():ja!==-1?ja:ja=we()}function Yn(t){return t.mode&1?Y&2&&Fe!==0?Fe&-Fe:lk.transition!==null?(za===0&&(za=ev()),za):(t=te,t!==0||(t=window.event,t=t===void 0?16:av(t.type)),t):1}function $t(t,e,n,r){if(50<Us)throw Us=0,xh=null,Error(T(185));Co(t,n,r),(!(Y&2)||t!==Le)&&(t===Le&&(!(Y&2)&&(nu|=n),Ne===4&&bn(t,Fe)),dt(t,r),n===1&&Y===0&&!(e.mode&1)&&(bi=we()+500,Jl&&hr()))}function dt(t,e){var n=t.callbackNode;l_(t,e);var r=rl(t,t===Le?Fe:0);if(r===0)n!==null&&Hp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Hp(n),e===1)t.tag===0?ak(Mm.bind(null,t)):Cv(Mm.bind(null,t)),rk(function(){!(Y&6)&&hr()}),n=null;else{switch(tv(r)){case 1:n=Ad;break;case 4:n=Jy;break;case 16:n=nl;break;case 536870912:n=Zy;break;default:n=nl}n=I0(n,v0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v0(t,e){if(ja=-1,za=0,Y&6)throw Error(T(327));var n=t.callbackNode;if(ki()&&t.callbackNode!==n)return null;var r=rl(t,t===Le?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Sl(t,r);else{e=r;var i=Y;Y|=2;var s=E0();(Le!==t||Fe!==e)&&(un=null,bi=we()+500,Nr(t,e));do try{Ak();break}catch(a){w0(t,a)}while(1);Bd(),vl.current=s,Y=i,ke!==null?e=0:(Le=null,Fe=0,e=Ne)}if(e!==0){if(e===2&&(i=ih(t),i!==0&&(r=i,e=Ph(t,i))),e===1)throw n=ao,Nr(t,0),bn(t,r),dt(t,we()),n;if(e===6)bn(t,r);else{if(i=t.current.alternate,!(r&30)&&!Ck(i)&&(e=Sl(t,r),e===2&&(s=ih(t),s!==0&&(r=s,e=Ph(t,s))),e===1))throw n=ao,Nr(t,0),bn(t,r),dt(t,we()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(T(345));case 2:vr(t,at,un);break;case 3:if(bn(t,r),(r&130023424)===r&&(e=nf+500-we(),10<e)){if(rl(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){it(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=dh(vr.bind(null,t,at,un),e);break}vr(t,at,un);break;case 4:if(bn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ut(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ik(r/1960))-r,10<r){t.timeoutHandle=dh(vr.bind(null,t,at,un),r);break}vr(t,at,un);break;case 5:vr(t,at,un);break;default:throw Error(T(329))}}}return dt(t,we()),t.callbackNode===n?v0.bind(null,t):null}function Ph(t,e){var n=Ms;return t.current.memoizedState.isDehydrated&&(Nr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=at,at=n,e!==null&&Oh(e)),t}function Oh(t){at===null?at=t:at.push.apply(at,t)}function Ck(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function bn(t,e){for(e&=~tf,e&=~nu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ut(e),r=1<<n;t[n]=-1,e&=~r}}function Mm(t){if(Y&6)throw Error(T(327));ki();var e=rl(t,0);if(!(e&1))return dt(t,we()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var r=ih(t);r!==0&&(e=r,n=Ph(t,r))}if(n===1)throw n=ao,Nr(t,0),bn(t,e),dt(t,we()),n;if(n===6)throw Error(T(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,at,un),dt(t,we()),null}function rf(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(bi=we()+500,Jl&&hr())}}function Ur(t){jn!==null&&jn.tag===0&&!(Y&6)&&ki();var e=Y;Y|=1;var n=Rt.transition,r=te;try{if(Rt.transition=null,te=1,t)return t()}finally{te=r,Rt.transition=n,Y=e,!(Y&6)&&hr()}}function sf(){pt=mi.current,ae(mi)}function Nr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,nk(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch($d(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ll();break;case 3:Oi(),ae(ct),ae(Xe),Kd();break;case 5:Wd(r);break;case 4:Oi();break;case 13:ae(he);break;case 19:ae(he);break;case 10:jd(r.type._context);break;case 22:case 23:sf()}n=n.return}if(Le=t,ke=t=Xn(t.current,null),Fe=pt=e,Ne=0,ao=null,tf=nu=Mr=0,at=Ms=null,_r!==null){for(e=0;e<_r.length;e++)if(n=_r[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}_r=null}return t}function w0(t,e){do{var n=ke;try{if(Bd(),Fa.current=yl,gl){for(var r=de.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}gl=!1}if(br=0,Oe=Ce=de=null,Ls=!1,io=0,ef.current=null,n===null||n.return===null){Ne=1,ao=e,ke=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Fe,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var y=km(o);if(y!==null){y.flags&=-257,Tm(y,o,a,s,e),y.mode&1&&_m(s,u,e),e=y,l=u;var v=e.updateQueue;if(v===null){var w=new Set;w.add(l),e.updateQueue=w}else v.add(l);break e}else{if(!(e&1)){_m(s,u,e),of();break e}l=Error(T(426))}}else if(ue&&a.mode&1){var _=km(o);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Tm(_,o,a,s,e),Fd(Li(l,a));break e}}s=l=Li(l,a),Ne!==4&&(Ne=2),Ms===null?Ms=[s]:Ms.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=n0(s,l,e);mm(s,p);break e;case 1:a=l;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Qn===null||!Qn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=r0(s,a,e);mm(s,E);break e}}s=s.return}while(s!==null)}_0(n)}catch(N){e=N,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(1)}function E0(){var t=vl.current;return vl.current=yl,t===null?yl:t}function of(){(Ne===0||Ne===3||Ne===2)&&(Ne=4),Le===null||!(Mr&268435455)&&!(nu&268435455)||bn(Le,Fe)}function Sl(t,e){var n=Y;Y|=2;var r=E0();(Le!==t||Fe!==e)&&(un=null,Nr(t,e));do try{Nk();break}catch(i){w0(t,i)}while(1);if(Bd(),Y=n,vl.current=r,ke!==null)throw Error(T(261));return Le=null,Fe=0,Ne}function Nk(){for(;ke!==null;)S0(ke)}function Ak(){for(;ke!==null&&!ZS();)S0(ke)}function S0(t){var e=T0(t.alternate,t,pt);t.memoizedProps=t.pendingProps,e===null?_0(t):ke=e,ef.current=null}function _0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Sk(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ne=6,ke=null;return}}else if(n=Ek(n,e,pt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Ne===0&&(Ne=5)}function vr(t,e,n){var r=te,i=Rt.transition;try{Rt.transition=null,te=1,Rk(t,e,n,r)}finally{Rt.transition=i,te=r}return null}function Rk(t,e,n,r){do ki();while(jn!==null);if(Y&6)throw Error(T(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(u_(t,s),t===Le&&(ke=Le=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,I0(nl,function(){return ki(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Rt.transition,Rt.transition=null;var o=te;te=1;var a=Y;Y|=4,ef.current=null,kk(t,n),g0(n,t),Q_(ch),il=!!uh,ch=uh=null,t.current=n,Tk(n),e_(),Y=a,te=o,Rt.transition=s}else t.current=n;if(wa&&(wa=!1,jn=t,El=i),s=t.pendingLanes,s===0&&(Qn=null),r_(n.stateNode),dt(t,we()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(wl)throw wl=!1,t=Dh,Dh=null,t;return El&1&&t.tag!==0&&ki(),s=t.pendingLanes,s&1?t===xh?Us++:(Us=0,xh=t):Us=0,hr(),null}function ki(){if(jn!==null){var t=tv(El),e=Rt.transition,n=te;try{if(Rt.transition=null,te=16>t?16:t,jn===null)var r=!1;else{if(t=jn,jn=null,El=0,Y&6)throw Error(T(331));var i=Y;for(Y|=4,x=t.current;x!==null;){var s=x,o=s.child;if(x.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(x=u;x!==null;){var c=x;switch(c.tag){case 0:case 11:case 15:bs(8,c,s)}var h=c.child;if(h!==null)h.return=c,x=h;else for(;x!==null;){c=x;var d=c.sibling,y=c.return;if(f0(c),c===u){x=null;break}if(d!==null){d.return=y,x=d;break}x=y}}}var v=s.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var _=w.sibling;w.sibling=null,w=_}while(w!==null)}}x=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,x=o;else e:for(;x!==null;){if(s=x,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bs(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,x=p;break e}x=s.return}}var f=t.current;for(x=f;x!==null;){o=x;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,x=g;else e:for(o=f;x!==null;){if(a=x,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:tu(9,a)}}catch(N){pe(a,a.return,N)}if(a===o){x=null;break e}var E=a.sibling;if(E!==null){E.return=a.return,x=E;break e}x=a.return}}if(Y=i,hr(),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(Kl,t)}catch{}r=!0}return r}finally{te=n,Rt.transition=e}}return!1}function Um(t,e,n){e=Li(n,e),e=n0(t,e,1),t=Gn(t,e,1),e=it(),t!==null&&(Co(t,1,e),dt(t,e))}function pe(t,e,n){if(t.tag===3)Um(t,t,n);else for(;e!==null;){if(e.tag===3){Um(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qn===null||!Qn.has(r))){t=Li(n,t),t=r0(e,t,1),e=Gn(e,t,1),t=it(),e!==null&&(Co(e,1,t),dt(e,t));break}}e=e.return}}function Dk(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,Le===t&&(Fe&n)===n&&(Ne===4||Ne===3&&(Fe&130023424)===Fe&&500>we()-nf?Nr(t,0):tf|=n),dt(t,e)}function k0(t,e){e===0&&(t.mode&1?(e=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):e=1);var n=it();t=wn(t,e),t!==null&&(Co(t,e,n),dt(t,n))}function xk(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),k0(t,n)}function Pk(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(T(314))}r!==null&&r.delete(e),k0(t,n)}var T0;T0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ct.current)ut=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ut=!1,wk(t,e,n);ut=!!(t.flags&131072)}else ut=!1,ue&&e.flags&1048576&&Nv(e,hl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Ba(t,e),t=e.pendingProps;var i=Di(e,Xe.current);_i(e,n),i=Qd(null,e,r,t,i,n);var s=Yd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,ul(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hd(e),i.updater=Zl,e.stateNode=i,i._reactInternals=e,wh(e,r,t,n),e=_h(null,e,r,!0,s,n)):(e.tag=0,ue&&s&&Ud(e),nt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Ba(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Lk(r),t=Lt(r,t),i){case 0:e=Sh(null,e,r,t,n);break e;case 1:e=Nm(null,e,r,t,n);break e;case 11:e=Im(null,e,r,t,n);break e;case 14:e=Cm(null,e,r,Lt(r.type,t),n);break e}throw Error(T(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Sh(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Nm(t,e,r,i,n);case 3:e:{if(a0(e),t===null)throw Error(T(387));r=e.pendingProps,s=e.memoizedState,i=s.element,xv(t,e),pl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Li(Error(T(423)),e),e=Am(t,e,r,n,i);break e}else if(r!==i){i=Li(Error(T(424)),e),e=Am(t,e,r,n,i);break e}else for(mt=Kn(e.stateNode.containerInfo.firstChild),vt=e,ue=!0,Mt=null,n=bv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(xi(),r===i){e=En(t,e,n);break e}nt(t,e,r,n)}e=e.child}return e;case 5:return Mv(e),t===null&&gh(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,hh(r,i)?o=null:s!==null&&hh(r,s)&&(e.flags|=32),o0(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&gh(e),null;case 13:return l0(t,e,n);case 4:return qd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Pi(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Im(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,re(dl,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!ct.current){e=En(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=gn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),yh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(T(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,_i(e,n),i=Dt(i),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return r=e.type,i=Lt(r,e.pendingProps),i=Lt(r.type,i),Cm(t,e,r,i,n);case 15:return i0(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Ba(t,e),e.tag=1,ht(r)?(t=!0,ul(e)):t=!1,_i(e,n),Ov(e,r,i),wh(e,r,i,n),_h(null,e,r,!0,t,n);case 19:return u0(t,e,n);case 22:return s0(t,e,n)}throw Error(T(156,e.tag))};function I0(t,e){return Xy(t,e)}function Ok(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function At(t,e,n,r){return new Ok(t,e,n,r)}function af(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Lk(t){if(typeof t=="function")return af(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Id)return 11;if(t===Cd)return 14}return 2}function Xn(t,e){var n=t.alternate;return n===null?(n=At(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ha(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")af(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case si:return Ar(n.children,i,s,e);case Td:o=8,i|=8;break;case zc:return t=At(12,n,e,i|2),t.elementType=zc,t.lanes=s,t;case Hc:return t=At(13,n,e,i),t.elementType=Hc,t.lanes=s,t;case qc:return t=At(19,n,e,i),t.elementType=qc,t.lanes=s,t;case Ly:return ru(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Py:o=10;break e;case Oy:o=9;break e;case Id:o=11;break e;case Cd:o=14;break e;case Pn:o=16,r=null;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=At(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Ar(t,e,n,r){return t=At(7,t,r,e),t.lanes=n,t}function ru(t,e,n,r){return t=At(22,t,r,e),t.elementType=Ly,t.lanes=n,t.stateNode={isHidden:!1},t}function mc(t,e,n){return t=At(6,t,null,e),t.lanes=n,t}function gc(t,e,n){return e=At(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function bk(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yu(0),this.expirationTimes=Yu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function lf(t,e,n,r,i,s,o,a,l){return t=new bk(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=At(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hd(s),t}function Mk(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ii,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function C0(t){if(!t)return ir;t=t._reactInternals;e:{if(Wr(t)!==t||t.tag!==1)throw Error(T(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(T(171))}if(t.tag===1){var n=t.type;if(ht(n))return Iv(t,n,e)}return e}function N0(t,e,n,r,i,s,o,a,l){return t=lf(n,r,!0,t,i,s,o,a,l),t.context=C0(null),n=t.current,r=it(),i=Yn(n),s=gn(r,i),s.callback=e??null,Gn(n,s,i),t.current.lanes=i,Co(t,i,r),dt(t,r),t}function iu(t,e,n,r){var i=e.current,s=it(),o=Yn(i);return n=C0(n),e.context===null?e.context=n:e.pendingContext=n,e=gn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Gn(i,e,o),t!==null&&($t(t,i,o,s),$a(t,i,o)),o}function _l(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function $m(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function uf(t,e){$m(t,e),(t=t.alternate)&&$m(t,e)}function Uk(){return null}var A0=typeof reportError=="function"?reportError:function(t){console.error(t)};function cf(t){this._internalRoot=t}su.prototype.render=cf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(T(409));iu(t,e,null,null)};su.prototype.unmount=cf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){iu(null,t,null,null)}),e[vn]=null}};function su(t){this._internalRoot=t}su.prototype.unstable_scheduleHydration=function(t){if(t){var e=iv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Ln.length&&e!==0&&e<Ln[n].priority;n++);Ln.splice(n,0,t),n===0&&ov(t)}};function hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ou(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function $k(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=_l(o);s.call(u)}}var o=N0(e,r,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=o,t[vn]=o.current,Zs(t.nodeType===8?t.parentNode:t),Ur(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=_l(l);a.call(u)}}var l=lf(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=l,t[vn]=l.current,Zs(t.nodeType===8?t.parentNode:t),Ur(function(){iu(e,l,n,r)}),l}function au(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=_l(o);a.call(l)}}iu(e,o,t,i)}else o=$k(n,e,t,i,r);return _l(o)}nv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=_s(e.pendingLanes);n!==0&&(Rd(e,n|1),dt(e,we()),!(Y&6)&&(bi=we()+500,hr()))}break;case 13:Ur(function(){var r=wn(t,1);if(r!==null){var i=it();$t(r,t,1,i)}}),uf(t,1)}};Dd=function(t){if(t.tag===13){var e=wn(t,134217728);if(e!==null){var n=it();$t(e,t,134217728,n)}uf(t,134217728)}};rv=function(t){if(t.tag===13){var e=Yn(t),n=wn(t,e);if(n!==null){var r=it();$t(n,t,e,r)}uf(t,e)}};iv=function(){return te};sv=function(t,e){var n=te;try{return te=t,e()}finally{te=n}};th=function(t,e,n){switch(e){case"input":if(Gc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xl(r);if(!i)throw Error(T(90));My(r),Gc(r,i)}}}break;case"textarea":$y(t,n);break;case"select":e=n.value,e!=null&&vi(t,!!n.multiple,e,!1)}};qy=rf;Wy=Ur;var Fk={usingClientEntryPoint:!1,Events:[Ao,ui,Xl,zy,Hy,rf]},ys={findFiberByHostInstance:Sr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Vk={bundleType:ys.bundleType,version:ys.version,rendererPackageName:ys.rendererPackageName,rendererConfig:ys.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qy(t),t===null?null:t.stateNode},findFiberByHostInstance:ys.findFiberByHostInstance||Uk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ea=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ea.isDisabled&&Ea.supportsFiber)try{Kl=Ea.inject(Vk),Qt=Ea}catch{}}_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fk;_t.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hf(e))throw Error(T(200));return Mk(t,e,null,n)};_t.createRoot=function(t,e){if(!hf(t))throw Error(T(299));var n=!1,r="",i=A0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=lf(t,1,!1,null,null,n,!1,r,i),t[vn]=e.current,Zs(t.nodeType===8?t.parentNode:t),new cf(e)};_t.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):(t=Object.keys(t).join(","),Error(T(268,t)));return t=Qy(e),t=t===null?null:t.stateNode,t};_t.flushSync=function(t){return Ur(t)};_t.hydrate=function(t,e,n){if(!ou(e))throw Error(T(200));return au(null,t,e,!0,n)};_t.hydrateRoot=function(t,e,n){if(!hf(t))throw Error(T(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=A0;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=N0(e,null,t,1,n??null,i,!1,s,o),t[vn]=e.current,Zs(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new su(e)};_t.render=function(t,e,n){if(!ou(e))throw Error(T(200));return au(null,t,e,!1,n)};_t.unmountComponentAtNode=function(t){if(!ou(t))throw Error(T(40));return t._reactRootContainer?(Ur(function(){au(null,null,t,!1,function(){t._reactRootContainer=null,t[vn]=null})}),!0):!1};_t.unstable_batchedUpdates=rf;_t.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ou(n))throw Error(T(200));if(t==null||t._reactInternals===void 0)throw Error(T(38));return au(t,e,n,!1,r)};_t.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=_t})(US);var Vm=Vc;Fc.createRoot=Vm.createRoot,Fc.hydrateRoot=Vm.hydrateRoot;/**
 * @remix-run/router v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},lo.apply(this,arguments)}var zn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(zn||(zn={}));const Bm="popstate";function Bk(t){t===void 0&&(t={});function e(i,s){let{pathname:o="/",search:a="",hash:l=""}=Kr(i.location.hash.substr(1));return Lh("",{pathname:o,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(i,s){let o=i.document.querySelector("base"),a="";if(o&&o.getAttribute("href")){let l=i.location.href,u=l.indexOf("#");a=u===-1?l:l.slice(0,u)}return a+"#"+(typeof s=="string"?s:kl(s))}function r(i,s){jk(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(s)+")")}return Hk(e,n,r,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function jk(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function zk(){return Math.random().toString(36).substr(2,8)}function jm(t,e){return{usr:t.state,key:t.key,idx:e}}function Lh(t,e,n,r){return n===void 0&&(n=null),lo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Kr(e):e,{state:n,key:e&&e.key||r||zk()})}function kl(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Kr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Hk(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=zn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(lo({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=zn.Pop;let _=c(),p=_==null?null:_-u;u=_,l&&l({action:a,location:w.location,delta:p})}function d(_,p){a=zn.Push;let f=Lh(w.location,_,p);n&&n(f,_),u=c()+1;let g=jm(f,u),E=w.createHref(f);try{o.pushState(g,"",E)}catch{i.location.assign(E)}s&&l&&l({action:a,location:w.location,delta:1})}function y(_,p){a=zn.Replace;let f=Lh(w.location,_,p);n&&n(f,_),u=c();let g=jm(f,u),E=w.createHref(f);o.replaceState(g,"",E),s&&l&&l({action:a,location:w.location,delta:0})}function v(_){let p=i.location.origin!=="null"?i.location.origin:i.location.href,f=typeof _=="string"?_:kl(_);return Ae(p,"No window.location.(origin|href) available to create URL for href: "+f),new URL(f,p)}let w={get action(){return a},get location(){return t(i,o)},listen(_){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Bm,h),l=_,()=>{i.removeEventListener(Bm,h),l=null}},createHref(_){return e(i,_)},createURL:v,encodeLocation(_){let p=v(_);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:d,replace:y,go(_){return o.go(_)}};return w}var zm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(zm||(zm={}));function qk(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Kr(e):e,i=df(r.pathname||"/",n);if(i==null)return null;let s=R0(t);Wk(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=tT(s[a],iT(i));return o}function R0(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Ae(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Jn([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(Ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),R0(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:Zk(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of D0(s.path))i(s,o,l)}),e}function D0(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=D0(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Wk(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:eT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Kk=/^:\w+$/,Gk=3,Qk=2,Yk=1,Xk=10,Jk=-2,Hm=t=>t==="*";function Zk(t,e){let n=t.split("/"),r=n.length;return n.some(Hm)&&(r+=Jk),e&&(r+=Qk),n.filter(i=>!Hm(i)).reduce((i,s)=>i+(Kk.test(s)?Gk:s===""?Yk:Xk),r)}function eT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function tT(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=nT({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:Jn([i,c.pathname]),pathnameBase:lT(Jn([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=Jn([i,c.pathnameBase]))}return s}function nT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=rT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return u[c]=sT(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function rT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ff(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function iT(t){try{return decodeURI(t)}catch(e){return ff(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function sT(t,e){try{return decodeURIComponent(t)}catch(n){return ff(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function df(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function ff(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function oT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Kr(t):t;return{pathname:n?n.startsWith("/")?n:aT(n,e):e,search:uT(r),hash:cT(i)}}function aT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function yc(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function x0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function P0(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Kr(t):(i=lo({},t),Ae(!i.pathname||!i.pathname.includes("?"),yc("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),yc("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),yc("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),h-=1;i.pathname=d.join("/")}a=h>=0?e[h]:"/"}let l=oT(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Jn=t=>t.join("/").replace(/\/\/+/g,"/"),lT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),uT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,cT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function hT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const dT=["post","put","patch","delete"];[...dT];/**
 * React Router v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bh(){return bh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},bh.apply(this,arguments)}function fT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const pT=typeof Object.is=="function"?Object.is:fT,{useState:mT,useEffect:gT,useLayoutEffect:yT,useDebugValue:vT}=$c;function wT(t,e,n){const r=e(),[{inst:i},s]=mT({inst:{value:r,getSnapshot:e}});return yT(()=>{i.value=r,i.getSnapshot=e,vc(i)&&s({inst:i})},[t,r,e]),gT(()=>(vc(i)&&s({inst:i}),t(()=>{vc(i)&&s({inst:i})})),[t]),vT(r),r}function vc(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!pT(n,r)}catch{return!0}}function ET(t,e,n){return e()}const ST=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",_T=!ST,kT=_T?ET:wT;"useSyncExternalStore"in $c&&(t=>t.useSyncExternalStore)($c);const O0=S.createContext(null),L0=S.createContext(null),Do=S.createContext(null),lu=S.createContext(null),Yi=S.createContext({outlet:null,matches:[]}),b0=S.createContext(null);function TT(t,e){let{relative:n}=e===void 0?{}:e;xo()||Ae(!1);let{basename:r,navigator:i}=S.useContext(Do),{hash:s,pathname:o,search:a}=M0(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Jn([r,o])),i.createHref({pathname:l,search:a,hash:s})}function xo(){return S.useContext(lu)!=null}function Xi(){return xo()||Ae(!1),S.useContext(lu).location}function Gr(){xo()||Ae(!1);let{basename:t,navigator:e}=S.useContext(Do),{matches:n}=S.useContext(Yi),{pathname:r}=Xi(),i=JSON.stringify(x0(n).map(a=>a.pathnameBase)),s=S.useRef(!1);return S.useEffect(()=>{s.current=!0}),S.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=P0(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Jn([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function M0(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=S.useContext(Yi),{pathname:i}=Xi(),s=JSON.stringify(x0(r).map(o=>o.pathnameBase));return S.useMemo(()=>P0(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function IT(t,e){xo()||Ae(!1);let{navigator:n}=S.useContext(Do),r=S.useContext(L0),{matches:i}=S.useContext(Yi),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Xi(),u;if(e){var c;let w=typeof e=="string"?Kr(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||Ae(!1),u=w}else u=l;let h=u.pathname||"/",d=a==="/"?h:h.slice(a.length)||"/",y=qk(t,{pathname:d}),v=RT(y&&y.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:Jn([a,n.encodeLocation?n.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:Jn([a,n.encodeLocation?n.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,r||void 0);return e&&v?S.createElement(lu.Provider,{value:{location:bh({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:zn.Pop}},v):v}function CT(){let t=OT(),e=hT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return S.createElement(S.Fragment,null,S.createElement("h2",null,"Unexpected Application Error!"),S.createElement("h3",{style:{fontStyle:"italic"}},e),n?S.createElement("pre",{style:i},n):null,s)}class NT extends S.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?S.createElement(Yi.Provider,{value:this.props.routeContext},S.createElement(b0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function AT(t){let{routeContext:e,match:n,children:r}=t,i=S.useContext(O0);return i&&i.static&&i.staticContext&&n.route.errorElement&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),S.createElement(Yi.Provider,{value:e},r)}function RT(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||Ae(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||S.createElement(CT,null):null,c=e.concat(r.slice(0,a+1)),h=()=>S.createElement(AT,{match:o,routeContext:{outlet:s,matches:c}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?S.createElement(NT,{location:n.location,component:u,error:l,children:h(),routeContext:{outlet:null,matches:c}}):h()},null)}var qm;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator"})(qm||(qm={}));var Tl;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(Tl||(Tl={}));function DT(t){let e=S.useContext(L0);return e||Ae(!1),e}function xT(t){let e=S.useContext(Yi);return e||Ae(!1),e}function PT(t){let e=xT(),n=e.matches[e.matches.length-1];return n.route.id||Ae(!1),n.route.id}function OT(){var t;let e=S.useContext(b0),n=DT(Tl.UseRouteError),r=PT(Tl.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function It(t){Ae(!1)}function LT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=zn.Pop,navigator:s,static:o=!1}=t;xo()&&Ae(!1);let a=e.replace(/^\/*/,"/"),l=S.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Kr(r));let{pathname:u="/",search:c="",hash:h="",state:d=null,key:y="default"}=r,v=S.useMemo(()=>{let w=df(u,a);return w==null?null:{pathname:w,search:c,hash:h,state:d,key:y}},[a,u,c,h,d,y]);return v==null?null:S.createElement(Do.Provider,{value:l},S.createElement(lu.Provider,{children:n,value:{location:v,navigationType:i}}))}function bT(t){let{children:e,location:n}=t,r=S.useContext(O0),i=r&&!e?r.router.routes:Mh(e);return IT(i,n)}var Wm;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(Wm||(Wm={}));new Promise(()=>{});function Mh(t,e){e===void 0&&(e=[]);let n=[];return S.Children.forEach(t,(r,i)=>{if(!S.isValidElement(r))return;if(r.type===S.Fragment){n.push.apply(n,Mh(r.props.children,e));return}r.type!==It&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=Mh(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.8.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Uh(){return Uh=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Uh.apply(this,arguments)}function MT(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function UT(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function $T(t,e){return t.button===0&&(!e||e==="_self")&&!UT(t)}const FT=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function VT(t){let{basename:e,children:n,window:r}=t,i=S.useRef();i.current==null&&(i.current=Bk({window:r,v5Compat:!0}));let s=i.current,[o,a]=S.useState({action:s.action,location:s.location});return S.useLayoutEffect(()=>s.listen(a),[s]),S.createElement(LT,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}const BT=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",jT=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ne=S.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,h=MT(e,FT),{basename:d}=S.useContext(Do),y,v=!1;if(typeof u=="string"&&jT.test(u)&&(y=u,BT)){let f=new URL(window.location.href),g=u.startsWith("//")?new URL(f.protocol+u):new URL(u),E=df(g.pathname,d);g.origin===f.origin&&E!=null?u=E+g.search+g.hash:v=!0}let w=TT(u,{relative:i}),_=zT(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function p(f){r&&r(f),f.defaultPrevented||_(f)}return S.createElement("a",Uh({},h,{href:y||w,onClick:v||s?r:p,ref:n,target:l}))});var Km;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(Km||(Km={}));var Gm;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Gm||(Gm={}));function zT(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=Gr(),l=Xi(),u=M0(t,{relative:o});return S.useCallback(c=>{if($T(c,n)){c.preventDefault();let h=r!==void 0?r:kl(l)===kl(u);a(t,{replace:h,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}const HT="/dealership/assets/home-image-f8796343.jpg",qT="/dealership/assets/home-image2-13e80e40.jpg",WT="/dealership/assets/home-image3-9222e80c.jpg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},KT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|u>>6,y=u&63;l||(y=64,o||(d=64)),r.push(n[c],n[h],n[d],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(U0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new GT;const d=s<<2|a>>4;if(r.push(d),u!==64){const y=a<<4&240|u>>2;if(r.push(y),h!==64){const v=u<<6&192|h;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class GT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const QT=function(t){const e=U0(t);return $0.encodeByteArray(e,!0)},Il=function(t){return QT(t).replace(/\./g,"")},F0=function(t){try{return $0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XT=()=>YT().__FIREBASE_DEFAULTS__,JT=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ZT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&F0(t[1]);return e&&JSON.parse(e)},uu=()=>{try{return XT()||JT()||ZT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},V0=t=>{var e,n;return(n=(e=uu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},B0=t=>{const e=V0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},eI=()=>{var t;return(t=uu())===null||t===void 0?void 0:t.config},j0=t=>{var e;return(e=uu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Il(JSON.stringify(n)),Il(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function nI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function rI(){var t;const e=(t=uu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function iI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function sI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function oI(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function aI(){try{return typeof indexedDB=="object"}catch{return!1}}function lI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uI="FirebaseError";class on extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=uI,Object.setPrototypeOf(this,on.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Po.prototype.create)}}class Po{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?cI(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new on(i,a,r)}}function cI(t,e){return t.replace(hI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const hI=/\{\$([^}]+)}/g;function dI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Cl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qm(s)&&Qm(o)){if(!Cl(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qm(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ts(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Is(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function fI(t,e){const n=new pI(t,e);return n.subscribe.bind(n)}class pI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wc),i.error===void 0&&(i.error=wc),i.complete===void 0&&(i.complete=wc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(t){return t&&t._delegate?t._delegate:t}class sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new tI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(vI(e))try{this.getOrInitializeService({instanceIdentifier:wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=wr){return this.instances.has(e)}getOptions(e=wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=wr){return this.component?this.component.multipleInstances?e:wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yI(t){return t===wr?void 0:t}function vI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var J;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(J||(J={}));const EI={debug:J.DEBUG,verbose:J.VERBOSE,info:J.INFO,warn:J.WARN,error:J.ERROR,silent:J.SILENT},SI=J.INFO,_I={[J.DEBUG]:"log",[J.VERBOSE]:"log",[J.INFO]:"info",[J.WARN]:"warn",[J.ERROR]:"error"},kI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=_I[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pf{constructor(e){this.name=e,this._logLevel=SI,this._logHandler=kI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in J))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?EI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,J.DEBUG,...e),this._logHandler(this,J.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,J.VERBOSE,...e),this._logHandler(this,J.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,J.INFO,...e),this._logHandler(this,J.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,J.WARN,...e),this._logHandler(this,J.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,J.ERROR,...e),this._logHandler(this,J.ERROR,...e)}}const TI=(t,e)=>e.some(n=>t instanceof n);let Ym,Xm;function II(){return Ym||(Ym=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function CI(){return Xm||(Xm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const H0=new WeakMap,$h=new WeakMap,q0=new WeakMap,Ec=new WeakMap,mf=new WeakMap;function NI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Zn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&H0.set(n,t)}).catch(()=>{}),mf.set(e,t),e}function AI(t){if($h.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$h.set(t,e)}let Fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $h.get(t);if(e==="objectStoreNames")return t.objectStoreNames||q0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function RI(t){Fh=t(Fh)}function DI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sc(this),e,...n);return q0.set(r,e.sort?e.sort():[e]),Zn(r)}:CI().includes(t)?function(...e){return t.apply(Sc(this),e),Zn(H0.get(this))}:function(...e){return Zn(t.apply(Sc(this),e))}}function xI(t){return typeof t=="function"?DI(t):(t instanceof IDBTransaction&&AI(t),TI(t,II())?new Proxy(t,Fh):t)}function Zn(t){if(t instanceof IDBRequest)return NI(t);if(Ec.has(t))return Ec.get(t);const e=xI(t);return e!==t&&(Ec.set(t,e),mf.set(e,t)),e}const Sc=t=>mf.get(t);function PI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Zn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Zn(o.result),l.oldVersion,l.newVersion,Zn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const OI=["get","getKey","getAll","getAllKeys","count"],LI=["put","add","delete","clear"],_c=new Map;function Jm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(_c.get(e))return _c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=LI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||OI.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return _c.set(e,s),s}RI(t=>({...t,get:(e,n,r)=>Jm(e,n)||t.get(e,n,r),has:(e,n)=>!!Jm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(MI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function MI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Vh="@firebase/app",Zm="0.9.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=new pf("@firebase/app"),UI="@firebase/app-compat",$I="@firebase/analytics-compat",FI="@firebase/analytics",VI="@firebase/app-check-compat",BI="@firebase/app-check",jI="@firebase/auth",zI="@firebase/auth-compat",HI="@firebase/database",qI="@firebase/database-compat",WI="@firebase/functions",KI="@firebase/functions-compat",GI="@firebase/installations",QI="@firebase/installations-compat",YI="@firebase/messaging",XI="@firebase/messaging-compat",JI="@firebase/performance",ZI="@firebase/performance-compat",eC="@firebase/remote-config",tC="@firebase/remote-config-compat",nC="@firebase/storage",rC="@firebase/storage-compat",iC="@firebase/firestore",sC="@firebase/firestore-compat",oC="firebase",aC="9.17.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="[DEFAULT]",lC={[Vh]:"fire-core",[UI]:"fire-core-compat",[FI]:"fire-analytics",[$I]:"fire-analytics-compat",[BI]:"fire-app-check",[VI]:"fire-app-check-compat",[jI]:"fire-auth",[zI]:"fire-auth-compat",[HI]:"fire-rtdb",[qI]:"fire-rtdb-compat",[WI]:"fire-fn",[KI]:"fire-fn-compat",[GI]:"fire-iid",[QI]:"fire-iid-compat",[YI]:"fire-fcm",[XI]:"fire-fcm-compat",[JI]:"fire-perf",[ZI]:"fire-perf-compat",[eC]:"fire-rc",[tC]:"fire-rc-compat",[nC]:"fire-gcs",[rC]:"fire-gcs-compat",[iC]:"fire-fst",[sC]:"fire-fst-compat","fire-js":"fire-js",[oC]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=new Map,jh=new Map;function uC(t,e){try{t.container.addComponent(e)}catch(n){$r.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Fr(t){const e=t.name;if(jh.has(e))return $r.debug(`There were multiple attempts to register component ${e}.`),!1;jh.set(e,t);for(const n of Nl.values())uC(n,t);return!0}function cu(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},er=new Po("app","Firebase",cC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw er.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ji=aC;function W0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bh,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw er.create("bad-app-name",{appName:String(i)});if(n||(n=eI()),!n)throw er.create("no-options");const s=Nl.get(i);if(s){if(Cl(n,s.options)&&Cl(r,s.config))return s;throw er.create("duplicate-app",{appName:i})}const o=new wI(i);for(const l of jh.values())o.addComponent(l);const a=new hC(n,r,o);return Nl.set(i,a),a}function gf(t=Bh){const e=Nl.get(t);if(!e&&t===Bh)return W0();if(!e)throw er.create("no-app",{appName:t});return e}function Xt(t,e,n){var r;let i=(r=lC[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$r.warn(a.join(" "));return}Fr(new sr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC="firebase-heartbeat-database",fC=1,uo="firebase-heartbeat-store";let kc=null;function K0(){return kc||(kc=PI(dC,fC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(uo)}}}).catch(t=>{throw er.create("idb-open",{originalErrorMessage:t.message})})),kc}async function pC(t){try{return(await K0()).transaction(uo).objectStore(uo).get(G0(t))}catch(e){if(e instanceof on)$r.warn(e.message);else{const n=er.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$r.warn(n.message)}}}async function eg(t,e){try{const r=(await K0()).transaction(uo,"readwrite");return await r.objectStore(uo).put(e,G0(t)),r.done}catch(n){if(n instanceof on)$r.warn(n.message);else{const r=er.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$r.warn(r.message)}}}function G0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=1024,gC=30*24*60*60*1e3;class yC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new wC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tg();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=gC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=tg(),{heartbeatsToSend:n,unsentEntries:r}=vC(this._heartbeatsCache.heartbeats),i=Il(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function tg(){return new Date().toISOString().substring(0,10)}function vC(t,e=mC){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),ng(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class wC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return aI()?lI().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await pC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return eg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ng(t){return Il(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EC(t){Fr(new sr("platform-logger",e=>new bI(e),"PRIVATE")),Fr(new sr("heartbeat",e=>new yC(e),"PRIVATE")),Xt(Vh,Zm,t),Xt(Vh,Zm,"esm2017"),Xt("fire-js","")}EC("");var SC="firebase",_C="9.17.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xt(SC,_C,"app");var kC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},L,yf=yf||{},V=kC||self;function Al(){}function hu(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Lo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function TC(t){return Object.prototype.hasOwnProperty.call(t,Tc)&&t[Tc]||(t[Tc]=++IC)}var Tc="closure_uid_"+(1e9*Math.random()>>>0),IC=0;function CC(t,e,n){return t.call.apply(t.bind,arguments)}function NC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=CC:Qe=NC,Qe.apply(null,arguments)}function Sa(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function je(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function dr(){this.s=this.s,this.o=this.o}var AC=0;dr.prototype.s=!1;dr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),AC!=0)&&TC(this)};dr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Q0=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function vf(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function rg(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(hu(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Ye(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Ye.prototype.h=function(){this.defaultPrevented=!0};var RC=function(){if(!V.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{V.addEventListener("test",Al,e),V.removeEventListener("test",Al,e)}catch{}return t}();function Rl(t){return/^[\s\xa0]*$/.test(t)}var ig=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Ic(t,e){return t<e?-1:t>e?1:0}function du(){var t=V.navigator;return t&&(t=t.userAgent)?t:""}function Kt(t){return du().indexOf(t)!=-1}function wf(t){return wf[" "](t),t}wf[" "]=Al;function DC(t){var e=OC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var xC=Kt("Opera"),Mi=Kt("Trident")||Kt("MSIE"),Y0=Kt("Edge"),zh=Y0||Mi,X0=Kt("Gecko")&&!(du().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge"))&&!(Kt("Trident")||Kt("MSIE"))&&!Kt("Edge"),PC=du().toLowerCase().indexOf("webkit")!=-1&&!Kt("Edge");function J0(){var t=V.document;return t?t.documentMode:void 0}var Dl;e:{var Cc="",Nc=function(){var t=du();if(X0)return/rv:([^\);]+)(\)|;)/.exec(t);if(Y0)return/Edge\/([\d\.]+)/.exec(t);if(Mi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(PC)return/WebKit\/(\S+)/.exec(t);if(xC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Nc&&(Cc=Nc?Nc[1]:""),Mi){var Ac=J0();if(Ac!=null&&Ac>parseFloat(Cc)){Dl=String(Ac);break e}}Dl=Cc}var OC={};function LC(){return DC(function(){let t=0;const e=ig(String(Dl)).split("."),n=ig("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Ic(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Ic(i[2].length==0,s[2].length==0)||Ic(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Hh;if(V.document&&Mi){var sg=J0();Hh=sg||parseInt(Dl,10)||void 0}else Hh=void 0;var bC=Hh;function co(t,e){if(Ye.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(X0){e:{try{wf(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:MC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&co.X.h.call(this)}}je(co,Ye);var MC={2:"touch",3:"pen",4:"mouse"};co.prototype.h=function(){co.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var bo="closure_listenable_"+(1e6*Math.random()|0),UC=0;function $C(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++UC,this.ba=this.ea=!1}function fu(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function Ef(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function Z0(t){const e={};for(const n in t)e[n]=t[n];return e}const og="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ew(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<og.length;s++)n=og[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function pu(t){this.src=t,this.g={},this.h=0}pu.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Wh(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new $C(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function qh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Q0(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(fu(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Wh(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Sf="closure_lm_"+(1e6*Math.random()|0),Rc={};function tw(t,e,n,r,i){if(r&&r.once)return rw(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)tw(t,e[s],n,r,i);return null}return n=Tf(n),t&&t[bo]?t.N(e,n,Lo(r)?!!r.capture:!!r,i):nw(t,e,n,!1,r,i)}function nw(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Lo(i)?!!i.capture:!!i,a=kf(t);if(a||(t[Sf]=a=new pu(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=FC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)RC||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(sw(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function FC(){function t(n){return e.call(t.src,t.listener,n)}const e=VC;return t}function rw(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)rw(t,e[s],n,r,i);return null}return n=Tf(n),t&&t[bo]?t.O(e,n,Lo(r)?!!r.capture:!!r,i):nw(t,e,n,!0,r,i)}function iw(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)iw(t,e[s],n,r,i);else r=Lo(r)?!!r.capture:!!r,n=Tf(n),t&&t[bo]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Wh(s,n,r,i),-1<n&&(fu(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=kf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Wh(e,n,r,i)),(n=-1<t?e[t]:null)&&_f(n))}function _f(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[bo])qh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(sw(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=kf(e))?(qh(n,t),n.h==0&&(n.src=null,e[Sf]=null)):fu(t)}}}function sw(t){return t in Rc?Rc[t]:Rc[t]="on"+t}function VC(t,e){if(t.ba)t=!0;else{e=new co(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&_f(t),t=n.call(r,e)}return t}function kf(t){return t=t[Sf],t instanceof pu?t:null}var Dc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Tf(t){return typeof t=="function"?t:(t[Dc]||(t[Dc]=function(e){return t.handleEvent(e)}),t[Dc])}function be(){dr.call(this),this.i=new pu(this),this.P=this,this.I=null}je(be,dr);be.prototype[bo]=!0;be.prototype.removeEventListener=function(t,e,n,r){iw(this,t,e,n,r)};function Ve(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new Ye(e,t);else if(e instanceof Ye)e.target=e.target||t;else{var i=e;e=new Ye(r,t),ew(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=_a(o,r,!0,e)&&i}if(o=e.g=t,i=_a(o,r,!0,e)&&i,i=_a(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=_a(o,r,!1,e)&&i}be.prototype.M=function(){if(be.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fu(n[r]);delete t.g[e],t.h--}}this.I=null};be.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};be.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function _a(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&qh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var If=V.JSON.stringify;function BC(){var t=lw;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class jC{constructor(){this.h=this.g=null}add(e,n){const r=ow.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var ow=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new zC,t=>t.reset());class zC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function HC(t){V.setTimeout(()=>{throw t},0)}function aw(t,e){Kh||qC(),Gh||(Kh(),Gh=!0),lw.add(t,e)}var Kh;function qC(){var t=V.Promise.resolve(void 0);Kh=function(){t.then(WC)}}var Gh=!1,lw=new jC;function WC(){for(var t;t=BC();){try{t.h.call(t.g)}catch(n){HC(n)}var e=ow;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gh=!1}function mu(t,e){be.call(this),this.h=t||1,this.g=e||V,this.j=Qe(this.lb,this),this.l=Date.now()}je(mu,be);L=mu.prototype;L.ca=!1;L.R=null;L.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ve(this,"tick"),this.ca&&(Cf(this),this.start()))}};L.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Cf(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}L.M=function(){mu.X.M.call(this),Cf(this),delete this.g};function Nf(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:V.setTimeout(t,e||0)}function uw(t){t.g=Nf(()=>{t.g=null,t.i&&(t.i=!1,uw(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class KC extends dr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:uw(this)}M(){super.M(),this.g&&(V.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ho(t){dr.call(this),this.h=t,this.g={}}je(ho,dr);var ag=[];function cw(t,e,n,r){Array.isArray(n)||(n&&(ag[0]=n.toString()),n=ag);for(var i=0;i<n.length;i++){var s=tw(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function hw(t){Ef(t.g,function(e,n){this.g.hasOwnProperty(n)&&_f(e)},t),t.g={}}ho.prototype.M=function(){ho.X.M.call(this),hw(this)};ho.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function gu(){this.g=!0}gu.prototype.Aa=function(){this.g=!1};function GC(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function QC(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function gi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+XC(t,n)+(r?" "+r:"")})}function YC(t,e){t.info(function(){return"TIMEOUT: "+e})}gu.prototype.info=function(){};function XC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return If(n)}catch{return e}}var Qr={},lg=null;function yu(){return lg=lg||new be}Qr.Pa="serverreachability";function dw(t){Ye.call(this,Qr.Pa,t)}je(dw,Ye);function fo(t){const e=yu();Ve(e,new dw(e))}Qr.STAT_EVENT="statevent";function fw(t,e){Ye.call(this,Qr.STAT_EVENT,t),this.stat=e}je(fw,Ye);function rt(t){const e=yu();Ve(e,new fw(e,t))}Qr.Qa="timingevent";function pw(t,e){Ye.call(this,Qr.Qa,t),this.size=e}je(pw,Ye);function Mo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return V.setTimeout(function(){t()},e)}var vu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},mw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Af(){}Af.prototype.h=null;function ug(t){return t.h||(t.h=t.i())}function gw(){}var Uo={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Rf(){Ye.call(this,"d")}je(Rf,Ye);function Df(){Ye.call(this,"c")}je(Df,Ye);var Qh;function wu(){}je(wu,Af);wu.prototype.g=function(){return new XMLHttpRequest};wu.prototype.i=function(){return{}};Qh=new wu;function $o(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ho(this),this.O=JC,t=zh?125:void 0,this.T=new mu(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new yw}function yw(){this.i=null,this.g="",this.h=!1}var JC=45e3,Yh={},xl={};L=$o.prototype;L.setTimeout=function(t){this.O=t};function Xh(t,e,n){t.K=1,t.v=Su(Sn(e)),t.s=n,t.P=!0,vw(t,null)}function vw(t,e){t.F=Date.now(),Fo(t),t.A=Sn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),Cw(n.i,"t",r),t.C=0,n=t.l.H,t.h=new yw,t.g=Kw(t.l,n?e:null,!t.s),0<t.N&&(t.L=new KC(Qe(t.La,t,t.g),t.N)),cw(t.S,t.g,"readystatechange",t.ib),e=t.H?Z0(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),fo(),GC(t.j,t.u,t.A,t.m,t.U,t.s)}L.ib=function(t){t=t.target;const e=this.L;e&&fn(t)==3?e.l():this.La(t)};L.La=function(t){try{if(t==this.g)e:{const c=fn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>c)&&(c!=3||zh||this.g&&(this.h.h||this.g.fa()||fg(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?fo(3):fo(2)),Eu(this);var n=this.g.aa();this.Y=n;t:if(ww(this)){var r=fg(this.g);t="";var i=r.length,s=fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),$s(this);var o="";break t}this.h.i=new V.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,QC(this.j,this.u,this.A,this.m,this.U,c,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rl(a)){var u=a;break t}}u=null}if(n=u)gi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Jh(this,n);else{this.i=!1,this.o=3,rt(12),Tr(this),$s(this);break e}}this.P?(Ew(this,c,o),zh&&this.i&&c==3&&(cw(this.S,this.T,"tick",this.hb),this.T.start())):(gi(this.j,this.m,o,null),Jh(this,o)),c==4&&Tr(this),this.i&&!this.I&&(c==4?zw(this.l,this):(this.i=!1,Fo(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,rt(12)):(this.o=0,rt(13)),Tr(this),$s(this)}}}catch{}finally{}};function ww(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Ew(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=ZC(t,n),i==xl){e==4&&(t.o=4,rt(14),r=!1),gi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Yh){t.o=4,rt(15),gi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else gi(t.j,t.m,i,null),Jh(t,i);ww(t)&&i!=xl&&i!=Yh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Uf(e),e.K=!0,rt(11))):(gi(t.j,t.m,n,"[Invalid Chunked Response]"),Tr(t),$s(t))}L.hb=function(){if(this.g){var t=fn(this.g),e=this.g.fa();this.C<e.length&&(Eu(this),Ew(this,t,e),this.i&&t!=4&&Fo(this))}};function ZC(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?xl:(n=Number(e.substring(n,r)),isNaN(n)?Yh:(r+=1,r+n>e.length?xl:(e=e.substr(r,n),t.C=r+n,e)))}L.cancel=function(){this.I=!0,Tr(this)};function Fo(t){t.V=Date.now()+t.O,Sw(t,t.O)}function Sw(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Mo(Qe(t.gb,t),e)}function Eu(t){t.B&&(V.clearTimeout(t.B),t.B=null)}L.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(YC(this.j,this.A),this.K!=2&&(fo(),rt(17)),Tr(this),this.o=2,$s(this)):Sw(this,this.V-t)};function $s(t){t.l.G==0||t.I||zw(t.l,t)}function Tr(t){Eu(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Cf(t.T),hw(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Jh(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||Zh(n.h,t))){if(!t.J&&Zh(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ll(n),Tu(n);else break e;Mf(n),rt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Mo(Qe(n.cb,n),6e3));if(1>=Rw(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Ir(n,11)}else if((t.J||n.g==t)&&Ll(n),!Rl(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const c=u[3];c!=null&&(n.ma=c,n.j.info("VER="+n.ma));const h=u[4];h!=null&&(n.Ca=h,n.j.info("SVER="+n.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const y=t.g;if(y){const v=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(v){var s=r.h;s.g||v.indexOf("spdy")==-1&&v.indexOf("quic")==-1&&v.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(xf(s,s.h),s.h=null))}if(r.D){const w=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,ce(r.F,r.D,w))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=Ww(r,r.H?r.ka:null,r.V),o.J){Dw(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(Eu(a),Fo(a)),r.g=o}else Bw(r);0<n.i.length&&Iu(n)}else u[0]!="stop"&&u[0]!="close"||Ir(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Ir(n,7):bf(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}fo(4)}catch{}}function eN(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(hu(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function tN(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(hu(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function _w(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(hu(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=tN(t),r=eN(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var kw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Rr(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Rr){this.h=e!==void 0?e:t.h,Pl(this,t.j),this.s=t.s,this.g=t.g,Ol(this,t.m),this.l=t.l,e=t.i;var n=new po;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),cg(this,n),this.o=t.o}else t&&(n=String(t).match(kw))?(this.h=!!e,Pl(this,n[1]||"",!0),this.s=Cs(n[2]||""),this.g=Cs(n[3]||"",!0),Ol(this,n[4]),this.l=Cs(n[5]||"",!0),cg(this,n[6]||"",!0),this.o=Cs(n[7]||"")):(this.h=!!e,this.i=new po(null,this.h))}Rr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ns(e,hg,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ns(e,hg,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ns(n,n.charAt(0)=="/"?sN:iN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ns(n,aN)),t.join("")};function Sn(t){return new Rr(t)}function Pl(t,e,n){t.j=n?Cs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ol(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function cg(t,e,n){e instanceof po?(t.i=e,lN(t.i,t.h)):(n||(e=Ns(e,oN)),t.i=new po(e,t.h))}function ce(t,e,n){t.i.set(e,n)}function Su(t){return ce(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Cs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ns(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,rN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function rN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hg=/[#\/\?@]/g,iN=/[#\?:]/g,sN=/[#\?]/g,oN=/[#\?@]/g,aN=/#/g;function po(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function fr(t){t.g||(t.g=new Map,t.h=0,t.i&&nN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}L=po.prototype;L.add=function(t,e){fr(this),this.i=null,t=Zi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Tw(t,e){fr(t),e=Zi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Iw(t,e){return fr(t),e=Zi(t,e),t.g.has(e)}L.forEach=function(t,e){fr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};L.oa=function(){fr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};L.W=function(t){fr(this);let e=[];if(typeof t=="string")Iw(this,t)&&(e=e.concat(this.g.get(Zi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};L.set=function(t,e){return fr(this),this.i=null,t=Zi(this,t),Iw(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};L.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function Cw(t,e,n){Tw(t,e),0<n.length&&(t.i=null,t.g.set(Zi(t,e),vf(n)),t.h+=n.length)}L.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Zi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function lN(t,e){e&&!t.j&&(fr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(Tw(this,r),Cw(this,i,n))},t)),t.j=e}var uN=class{constructor(e,n){this.h=e,this.g=n}};function Nw(t){this.l=t||cN,V.PerformanceNavigationTiming?(t=V.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(V.g&&V.g.Ga&&V.g.Ga()&&V.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var cN=10;function Aw(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Rw(t){return t.h?1:t.g?t.g.size:0}function Zh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function xf(t,e){t.g?t.g.add(e):t.h=e}function Dw(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}Nw.prototype.cancel=function(){if(this.i=xw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function xw(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return vf(t.i)}function Pf(){}Pf.prototype.stringify=function(t){return V.JSON.stringify(t,void 0)};Pf.prototype.parse=function(t){return V.JSON.parse(t,void 0)};function hN(){this.g=new Pf}function dN(t,e,n){const r=n||"";try{_w(t,function(i,s){let o=i;Lo(i)&&(o=If(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function fN(t,e){const n=new gu;if(V.Image){const r=new Image;r.onload=Sa(ka,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Sa(ka,n,r,"TestLoadImage: error",!1,e),r.onabort=Sa(ka,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Sa(ka,n,r,"TestLoadImage: timeout",!1,e),V.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function ka(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Vo(t){this.l=t.ac||null,this.j=t.jb||!1}je(Vo,Af);Vo.prototype.g=function(){return new _u(this.l,this.j)};Vo.prototype.i=function(t){return function(){return t}}({});function _u(t,e){be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Of,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}je(_u,be);var Of=0;L=_u.prototype;L.open=function(t,e){if(this.readyState!=Of)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,mo(this)};L.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||V).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};L.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Bo(this)),this.readyState=Of};L.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,mo(this)),this.g&&(this.readyState=3,mo(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof V.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Pw(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function Pw(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}L.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Bo(this):mo(this),this.readyState==3&&Pw(this)}};L.Va=function(t){this.g&&(this.response=this.responseText=t,Bo(this))};L.Ua=function(t){this.g&&(this.response=t,Bo(this))};L.ga=function(){this.g&&Bo(this)};function Bo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,mo(t)}L.setRequestHeader=function(t,e){this.v.append(t,e)};L.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};L.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function mo(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_u.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var pN=V.JSON.parse;function ge(t){be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Ow,this.K=this.L=!1}je(ge,be);var Ow="",mN=/^https?$/i,gN=["POST","PUT"];L=ge.prototype;L.Ka=function(t){this.L=t};L.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Qh.g(),this.C=this.u?ug(this.u):ug(Qh),this.g.onreadystatechange=Qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){dg(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=V.FormData&&t instanceof V.FormData,!(0<=Q0(gN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Mw(this),0<this.B&&((this.K=yN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.qa,this)):this.A=Nf(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){dg(this,s)}};function yN(t){return Mi&&LC()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}L.qa=function(){typeof yf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ve(this,"timeout"),this.abort(8))};function dg(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Lw(t),ku(t)}function Lw(t){t.D||(t.D=!0,Ve(t,"complete"),Ve(t,"error"))}L.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ve(this,"complete"),Ve(this,"abort"),ku(this))};L.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ku(this,!0)),ge.X.M.call(this)};L.Ha=function(){this.s||(this.F||this.v||this.l?bw(this):this.fb())};L.fb=function(){bw(this)};function bw(t){if(t.h&&typeof yf<"u"&&(!t.C[1]||fn(t)!=4||t.aa()!=2)){if(t.v&&fn(t)==4)Nf(t.Ha,0,t);else if(Ve(t,"readystatechange"),fn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(kw)[1]||null;if(!i&&V.self&&V.self.location){var s=V.self.location.protocol;i=s.substr(0,s.length-1)}r=!mN.test(i?i.toLowerCase():"")}n=r}if(n)Ve(t,"complete"),Ve(t,"success");else{t.m=6;try{var o=2<fn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",Lw(t)}}finally{ku(t)}}}}function ku(t,e){if(t.g){Mw(t);const n=t.g,r=t.C[0]?Al:null;t.g=null,t.C=null,e||Ve(t,"ready");try{n.onreadystatechange=r}catch{}}}function Mw(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(V.clearTimeout(t.A),t.A=null)}function fn(t){return t.g?t.g.readyState:0}L.aa=function(){try{return 2<fn(this)?this.g.status:-1}catch{return-1}};L.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};L.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),pN(e)}};function fg(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Ow:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}L.Ea=function(){return this.m};L.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Uw(t){let e="";return Ef(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Lf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Uw(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):ce(t,e,n))}function vs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function $w(t){this.Ca=0,this.i=[],this.j=new gu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=vs("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=vs("baseRetryDelayMs",5e3,t),this.bb=vs("retryDelaySeedMs",1e4,t),this.$a=vs("forwardChannelMaxRetries",2,t),this.ta=vs("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new Nw(t&&t.concurrentRequestLimit),this.Fa=new hN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}L=$w.prototype;L.ma=8;L.G=1;function bf(t){if(Fw(t),t.G==3){var e=t.U++,n=Sn(t.F);ce(n,"SID",t.I),ce(n,"RID",e),ce(n,"TYPE","terminate"),jo(t,n),e=new $o(t,t.j,e,void 0),e.K=2,e.v=Su(Sn(n)),n=!1,V.navigator&&V.navigator.sendBeacon&&(n=V.navigator.sendBeacon(e.v.toString(),"")),!n&&V.Image&&(new Image().src=e.v,n=!0),n||(e.g=Kw(e.l,null),e.g.da(e.v)),e.F=Date.now(),Fo(e)}qw(t)}function Tu(t){t.g&&(Uf(t),t.g.cancel(),t.g=null)}function Fw(t){Tu(t),t.u&&(V.clearTimeout(t.u),t.u=null),Ll(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&V.clearTimeout(t.m),t.m=null)}function Iu(t){Aw(t.h)||t.m||(t.m=!0,aw(t.Ja,t),t.C=0)}function vN(t,e){return Rw(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Mo(Qe(t.Ja,t,e),Hw(t,t.C)),t.C++,!0)}L.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new $o(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=Z0(s),ew(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Vw(this,i,e),n=Sn(this.F),ce(n,"RID",t),ce(n,"CVER",22),this.D&&ce(n,"X-HTTP-Session-Id",this.D),jo(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(Uw(s)))+"&"+e:this.o&&Lf(n,this.o,s)),xf(this.h,i),this.Ya&&ce(n,"TYPE","init"),this.O?(ce(n,"$req",e),ce(n,"SID","null"),i.Z=!0,Xh(i,n,null)):Xh(i,n,e),this.G=2}}else this.G==3&&(t?pg(this,t):this.i.length==0||Aw(this.h)||pg(this))};function pg(t,e){var n;e?n=e.m:n=t.U++;const r=Sn(t.F);ce(r,"SID",t.I),ce(r,"RID",n),ce(r,"AID",t.T),jo(t,r),t.o&&t.s&&Lf(r,t.o,t.s),n=new $o(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=Vw(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),xf(t.h,n),Xh(n,r,e)}function jo(t,e){t.ia&&Ef(t.ia,function(n,r){ce(e,r,n)}),t.l&&_w({},function(n,r){ce(e,r,n)})}function Vw(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Qe(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const c=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{dN(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function Bw(t){t.g||t.u||(t.Z=1,aw(t.Ia,t),t.A=0)}function Mf(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Mo(Qe(t.Ia,t),Hw(t,t.A)),t.A++,!0)}L.Ia=function(){if(this.u=null,jw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Mo(Qe(this.eb,this),t)}};L.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,rt(10),Tu(this),jw(this))};function Uf(t){t.B!=null&&(V.clearTimeout(t.B),t.B=null)}function jw(t){t.g=new $o(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Sn(t.sa);ce(e,"RID","rpc"),ce(e,"SID",t.I),ce(e,"CI",t.L?"0":"1"),ce(e,"AID",t.T),ce(e,"TYPE","xmlhttp"),jo(t,e),t.o&&t.s&&Lf(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Su(Sn(e)),n.s=null,n.P=!0,vw(n,t)}L.cb=function(){this.v!=null&&(this.v=null,Tu(this),Mf(this),rt(19))};function Ll(t){t.v!=null&&(V.clearTimeout(t.v),t.v=null)}function zw(t,e){var n=null;if(t.g==e){Ll(t),Uf(t),t.g=null;var r=2}else if(Zh(t.h,e))n=e.D,Dw(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=yu(),Ve(r,new pw(r,n)),Iu(t)}else Bw(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&vN(t,e)||r==2&&Mf(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Ir(t,5);break;case 4:Ir(t,10);break;case 3:Ir(t,6);break;default:Ir(t,2)}}}function Hw(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Ir(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Qe(t.kb,t);n||(n=new Rr("//www.google.com/images/cleardot.gif"),V.location&&V.location.protocol=="http"||Pl(n,"https"),Su(n)),fN(n.toString(),r)}else rt(2);t.G=0,t.l&&t.l.va(e),qw(t),Fw(t)}L.kb=function(t){t?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function qw(t){if(t.G=0,t.la=[],t.l){const e=xw(t.h);(e.length!=0||t.i.length!=0)&&(rg(t.la,e),rg(t.la,t.i),t.h.i.length=0,vf(t.i),t.i.length=0),t.l.ua()}}function Ww(t,e,n){var r=n instanceof Rr?Sn(n):new Rr(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ol(r,r.m);else{var i=V.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new Rr(null,void 0);r&&Pl(s,r),e&&(s.g=e),i&&Ol(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&ce(r,n,e),ce(r,"VER",t.ma),jo(t,r),r}function Kw(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new ge(new Vo({jb:!0})):new ge(t.ra),e.Ka(t.H),e}function Gw(){}L=Gw.prototype;L.xa=function(){};L.wa=function(){};L.va=function(){};L.ua=function(){};L.Ra=function(){};function bl(){if(Mi&&!(10<=Number(bC)))throw Error("Environmental error: no available transport.")}bl.prototype.g=function(t,e){return new St(t,e)};function St(t,e){be.call(this),this.g=new $w(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Rl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rl(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new es(this)}je(St,be);St.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;rt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Ww(t,null,t.V),Iu(t)};St.prototype.close=function(){bf(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=If(t),t=n);e.i.push(new uN(e.ab++,t)),e.G==3&&Iu(e)};St.prototype.M=function(){this.g.l=null,delete this.j,bf(this.g),delete this.g,St.X.M.call(this)};function Qw(t){Rf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}je(Qw,Rf);function Yw(){Df.call(this),this.status=1}je(Yw,Df);function es(t){this.g=t}je(es,Gw);es.prototype.xa=function(){Ve(this.g,"a")};es.prototype.wa=function(t){Ve(this.g,new Qw(t))};es.prototype.va=function(t){Ve(this.g,new Yw)};es.prototype.ua=function(){Ve(this.g,"b")};bl.prototype.createWebChannel=bl.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;vu.NO_ERROR=0;vu.TIMEOUT=8;vu.HTTP_ERROR=6;mw.COMPLETE="complete";gw.EventType=Uo;Uo.OPEN="a";Uo.CLOSE="b";Uo.ERROR="c";Uo.MESSAGE="d";be.prototype.listen=be.prototype.N;ge.prototype.listenOnce=ge.prototype.O;ge.prototype.getLastError=ge.prototype.Oa;ge.prototype.getLastErrorCode=ge.prototype.Ea;ge.prototype.getStatus=ge.prototype.aa;ge.prototype.getResponseJson=ge.prototype.Sa;ge.prototype.getResponseText=ge.prototype.fa;ge.prototype.send=ge.prototype.da;ge.prototype.setWithCredentials=ge.prototype.Ka;var wN=function(){return new bl},EN=function(){return yu()},xc=vu,SN=mw,_N=Qr,mg={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},kN=Vo,Ta=gw,TN=ge;const gg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ts="9.17.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new pf("@firebase/firestore");function yg(){return Vr.logLevel}function b(t,...e){if(Vr.logLevel<=J.DEBUG){const n=e.map($f);Vr.debug(`Firestore (${ts}): ${t}`,...n)}}function _n(t,...e){if(Vr.logLevel<=J.ERROR){const n=e.map($f);Vr.error(`Firestore (${ts}): ${t}`,...n)}}function ed(t,...e){if(Vr.logLevel<=J.WARN){const n=e.map($f);Vr.warn(`Firestore (${ts}): ${t}`,...n)}}function $f(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(t="Unexpected state"){const e=`FIRESTORE (${ts}) INTERNAL ASSERTION FAILED: `+t;throw _n(e),new Error(e)}function ie(t,e){t||F()}function H(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends on{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class CN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class NN{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new tr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new tr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{b("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(b("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new tr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(b("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(ie(typeof r.accessToken=="string"),new Xw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ie(e===null||typeof e=="string"),new qe(e)}}class AN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(ie(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class RN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new AN(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class DN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&b("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,b("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{b("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):b("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ie(typeof n.token=="string"),this.A=n.token,new DN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=PN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ee(t,e){return t<e?-1:t>e?1:0}function Ui(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Re.fromMillis(Date.now())}static fromDate(e){return Re.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Re(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ee(this.nanoseconds,e.nanoseconds):ee(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new Re(0,0))}static max(){return new j(new Re(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,n,r){n===void 0?n=0:n>e.length&&F(),r===void 0?r=e.length-n:r>e.length-n&&F(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return go.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof go?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class oe extends go{construct(e,n,r){return new oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new oe(n)}static emptyPath(){return new oe([])}}const ON=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends go{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return ON.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new P(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(e){this.path=e}static fromPath(e){return new M(oe.fromString(e))}static fromName(e){return new M(oe.fromString(e).popFirst(5))}static empty(){return new M(oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new M(new oe(e.slice()))}}function LN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new Re(n+1,0):new Re(n,r));return new or(i,M.empty(),e)}function bN(t){return new or(t.readTime,t.key,-1)}class or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new or(j.min(),M.empty(),-1)}static max(){return new or(j.max(),M.empty(),-1)}}function MN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=M.comparator(t.documentKey,e.documentKey),n!==0?n:ee(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class $N{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zo(t){if(t.code!==k.FAILED_PRECONDITION||t.message!==UN)throw t;b("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&F(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new I((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof I?n:I.resolve(n)}catch(n){return I.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):I.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):I.reject(n)}static resolve(e){return new I((n,r)=>{n(e)})}static reject(e){return new I((n,r)=>{r(e)})}static waitFor(e){return new I((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=I.resolve(!1);for(const r of e)n=n.next(i=>i?I.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new I((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new I((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Ho(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ff{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Ff.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof yo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Yr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Zw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(t){return t==null}function Ml(t){return t===0&&1/t==-1/0}function VN(t){return typeof t=="number"&&Number.isInteger(t)&&!Ml(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BN extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw i instanceof DOMException?new BN("Invalid base64 string: "+i):i}}(e);return new Ze(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Ze(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ee(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ze.EMPTY_BYTE_STRING=new Ze("");const jN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ar(t){if(ie(!!t),typeof t=="string"){let e=0;const n=jN.exec(t);if(ie(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function $i(t){return typeof t=="string"?Ze.fromBase64String(t):Ze.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e1(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function t1(t){const e=t.mapValue.fields.__previous_value__;return e1(e)?t1(e):e}function vo(t){const e=ar(t.mapValue.fields.__local_write_time__.timestampValue);return new Re(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?e1(t)?4:zN(t)?9007199254740991:10:F()}function sn(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vo(t).isEqual(vo(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=ar(r.timestampValue),o=ar(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return $i(r.bytesValue).isEqual($i(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return _e(r.geoPointValue.latitude)===_e(i.geoPointValue.latitude)&&_e(r.geoPointValue.longitude)===_e(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return _e(r.integerValue)===_e(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=_e(r.doubleValue),o=_e(i.doubleValue);return s===o?Ml(s)===Ml(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Ui(t.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(vg(s)!==vg(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!sn(s[a],o[a])))return!1;return!0}(t,e);default:return F()}}function wo(t,e){return(t.values||[]).find(n=>sn(n,e))!==void 0}function Fi(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return ee(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ee(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=_e(i.integerValue||i.doubleValue),a=_e(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return wg(t.timestampValue,e.timestampValue);case 4:return wg(vo(t),vo(e));case 5:return ee(t.stringValue,e.stringValue);case 6:return function(i,s){const o=$i(i),a=$i(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ee(o[l],a[l]);if(u!==0)return u}return ee(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ee(_e(i.latitude),_e(s.latitude));return o!==0?o:ee(_e(i.longitude),_e(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Fi(o[l],a[l]);if(u)return u}return ee(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===Ia.mapValue&&s===Ia.mapValue)return 0;if(i===Ia.mapValue)return 1;if(s===Ia.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let c=0;c<a.length&&c<u.length;++c){const h=ee(a[c],u[c]);if(h!==0)return h;const d=Fi(o[a[c]],l[u[c]]);if(d!==0)return d}return ee(a.length,u.length)}(t.mapValue,e.mapValue);default:throw F()}}function wg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ee(t,e);const n=ar(t),r=ar(e),i=ee(n.seconds,r.seconds);return i!==0?i:ee(n.nanos,r.nanos)}function Vi(t){return td(t)}function td(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=ar(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?$i(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,M.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=td(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${td(r.fields[a])}`;return s+"}"}(t.mapValue):F();var e,n}function Eg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function nd(t){return!!t&&"integerValue"in t}function Vf(t){return!!t&&"arrayValue"in t}function Sg(t){return!!t&&"nullValue"in t}function _g(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function qa(t){return!!t&&"mapValue"in t}function Fs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Yr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Fs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Fs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(e,n){this.position=e,this.inclusive=n}}function kg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=M.comparator(M.fromName(o.referenceValue),n.key):r=Fi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!sn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n1{}class Te extends n1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qN(e,n,r):n==="array-contains"?new GN(e,r):n==="in"?new QN(e,r):n==="not-in"?new YN(e,r):n==="array-contains-any"?new XN(e,r):new Te(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WN(e,r):new KN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Fi(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(Fi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return F()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Vt extends n1{constructor(e,n){super(),this.filters=e,this.op=n,this.ft=null}static create(e,n){return new Vt(e,n)}matches(e){return r1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ft!==null||(this.ft=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ft}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.dt(n=>n.isInequality());return e!==null?e.field:null}dt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function r1(t){return t.op==="and"}function i1(t){return HN(t)&&r1(t)}function HN(t){for(const e of t.filters)if(e instanceof Vt)return!1;return!0}function rd(t){if(t instanceof Te)return t.field.canonicalString()+t.op.toString()+Vi(t.value);if(i1(t))return t.filters.map(e=>rd(e)).join(",");{const e=t.filters.map(n=>rd(n)).join(",");return`${t.op}(${e})`}}function s1(t,e){return t instanceof Te?function(n,r){return r instanceof Te&&n.op===r.op&&n.field.isEqual(r.field)&&sn(n.value,r.value)}(t,e):t instanceof Vt?function(n,r){return r instanceof Vt&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&s1(s,r.filters[o]),!0):!1}(t,e):void F()}function o1(t){return t instanceof Te?function(e){return`${e.field.canonicalString()} ${e.op} ${Vi(e.value)}`}(t):t instanceof Vt?function(e){return e.op.toString()+" {"+e.getFilters().map(o1).join(" ,")+"}"}(t):"Filter"}class qN extends Te{constructor(e,n,r){super(e,n,r),this.key=M.fromName(r.referenceValue)}matches(e){const n=M.comparator(e.key,this.key);return this.matchesComparison(n)}}class WN extends Te{constructor(e,n){super(e,"in",n),this.keys=a1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KN extends Te{constructor(e,n){super(e,"not-in",n),this.keys=a1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function a1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>M.fromName(r.referenceValue))}class GN extends Te{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vf(n)&&wo(n.arrayValue,this.value)}}class QN extends Te{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wo(this.value.arrayValue,n)}}class YN extends Te{constructor(e,n){super(e,"not-in",n)}matches(e){if(wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wo(this.value.arrayValue,n)}}class XN extends Te{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e,n="asc"){this.field=e,this.dir=n}}function JN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,n){this.comparator=e,this.root=n||$e.EMPTY}insert(e,n){return new xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$e.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$e.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ca(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ca(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ca(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ca(this.root,e,this.comparator,!0)}}class Ca{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class $e{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??$e.RED,this.left=i??$e.EMPTY,this.right=s??$e.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new $e(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return $e.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return $e.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,$e.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,$e.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw F();const e=this.left.check();if(e!==this.right.check())throw F();return e+(this.isRed()?0:1)}}$e.EMPTY=null,$e.RED=!0,$e.BLACK=!1;$e.EMPTY=new class{constructor(){this.size=0}get key(){throw F()}get value(){throw F()}get color(){throw F()}get left(){throw F()}get right(){throw F()}copy(t,e,n,r,i){return this}insert(t,e,n){return new $e(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ig(this.data.getIterator())}getIteratorFrom(e){return new Ig(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof De)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new De(this.comparator);return n.data=e,n}}class Ig{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new gt([])}unionWith(e){let n=new De(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new gt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ui(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this.value=e}static empty(){return new lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!qa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(n)}setAll(e){let n=Ge.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=Fs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());qa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];qa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Yr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new lt(Fs(this.value))}}function l1(t){const e=[];return Yr(t.fields,(n,r)=>{const i=new Ge([n]);if(qa(r)){const s=l1(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new gt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ke(e,0,j.min(),j.min(),j.min(),lt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ke(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new Ke(e,2,n,j.min(),j.min(),lt.empty(),0)}static newUnknownDocument(e,n){return new Ke(e,3,n,j.min(),j.min(),lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this._t=null}}function Cg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new ZN(t,e,n,r,i,s,o)}function Bf(t){const e=H(t);if(e._t===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>rd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Cu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vi(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vi(r)).join(",")),e._t=n}return e._t}function jf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!JN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!s1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tg(t.startAt,e.startAt)&&Tg(t.endAt,e.endAt)}function id(t){return M.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.wt=null,this.gt=null,this.startAt,this.endAt}}function eA(t,e,n,r,i,s,o,a){return new ns(t,e,n,r,i,s,o,a)}function u1(t){return new ns(t)}function Ng(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function zf(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Nu(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function c1(t){return t.collectionGroup!==null}function Ii(t){const e=H(t);if(e.wt===null){e.wt=[];const n=Nu(e),r=zf(e);if(n!==null&&r===null)n.isKeyField()||e.wt.push(new Ti(n)),e.wt.push(new Ti(Ge.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.wt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Ti(Ge.keyField(),s))}}}return e.wt}function kn(t){const e=H(t);if(!e.gt)if(e.limitType==="F")e.gt=Cg(e.path,e.collectionGroup,Ii(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Ii(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Ti(s.field,o))}const r=e.endAt?new Ul(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Ul(e.startAt.position,e.startAt.inclusive):null;e.gt=Cg(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.gt}function sd(t,e){e.getFirstInequalityField(),Nu(t);const n=t.filters.concat([e]);return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function od(t,e,n){return new ns(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Au(t,e){return jf(kn(t),kn(e))&&t.limitType===e.limitType}function h1(t){return`${Bf(kn(t))}|lt:${t.limitType}`}function ad(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>o1(r)).join(", ")}]`),Cu(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Vi(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Vi(r)).join(",")),`Target(${n})`}(kn(t))}; limitType=${t.limitType})`}function Ru(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):M.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of Ii(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=kg(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,Ii(n),r)||n.endAt&&!function(i,s,o){const a=kg(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,Ii(n),r))}(t,e)}function tA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function d1(t){return(e,n)=>{let r=!1;for(const i of Ii(t)){const s=nA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function nA(t,e,n){const r=t.field.isKeyField()?M.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Fi(a,l):F()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return F()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f1(t,e){if(t.yt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ml(e)?"-0":e}}function p1(t){return{integerValue:""+t}}function rA(t,e){return VN(e)?p1(e):f1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(){this._=void 0}}function iA(t,e,n){return t instanceof Eo?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof So?g1(t,e):t instanceof _o?y1(t,e):function(r,i){const s=m1(r,i),o=Ag(s)+Ag(r.It);return nd(s)&&nd(r.It)?p1(o):f1(r.Tt,o)}(t,e)}function sA(t,e,n){return t instanceof So?g1(t,e):t instanceof _o?y1(t,e):n}function m1(t,e){return t instanceof $l?nd(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Eo extends Du{}class So extends Du{constructor(e){super(),this.elements=e}}function g1(t,e){const n=v1(e);for(const r of t.elements)n.some(i=>sn(i,r))||n.push(r);return{arrayValue:{values:n}}}class _o extends Du{constructor(e){super(),this.elements=e}}function y1(t,e){let n=v1(e);for(const r of t.elements)n=n.filter(i=>!sn(i,r));return{arrayValue:{values:n}}}class $l extends Du{constructor(e,n){super(),this.Tt=e,this.It=n}}function Ag(t){return _e(t.integerValue||t.doubleValue)}function v1(t){return Vf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,n){this.field=e,this.transform=n}}function aA(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof So&&r instanceof So||n instanceof _o&&r instanceof _o?Ui(n.elements,r.elements,sn):n instanceof $l&&r instanceof $l?sn(n.It,r.It):n instanceof Eo&&r instanceof Eo}(t.transform,e.transform)}class lA{constructor(e,n){this.version=e,this.transformResults=n}}class Jt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Jt}static exists(e){return new Jt(void 0,e)}static updateTime(e){return new Jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Wa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xu{}function w1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new S1(t.key,Jt.none()):new qo(t.key,t.data,Jt.none());{const n=t.data,r=lt.empty();let i=new De(Ge.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new pr(t.key,r,new gt(i.toArray()),Jt.none())}}function uA(t,e,n){t instanceof qo?function(r,i,s){const o=r.value.clone(),a=Dg(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof pr?function(r,i,s){if(!Wa(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=Dg(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(E1(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Vs(t,e,n,r){return t instanceof qo?function(i,s,o,a){if(!Wa(i.precondition,s))return o;const l=i.value.clone(),u=xg(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof pr?function(i,s,o,a){if(!Wa(i.precondition,s))return o;const l=xg(i.fieldTransforms,a,s),u=s.data;return u.setAll(E1(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(c=>c.field))}(t,e,n,r):function(i,s,o){return Wa(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function cA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=m1(r.transform,i||null);s!=null&&(n===null&&(n=lt.empty()),n.set(r.field,s))}return n||null}function Rg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ui(n,r,(i,s)=>aA(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qo extends xu{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class pr extends xu{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function E1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Dg(t,e,n){const r=new Map;ie(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sA(o,a,n[i]))}return r}function xg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,iA(s,o,e))}return r}class S1 extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hA extends xu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,G;function fA(t){switch(t){default:return F();case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0}}function _1(t){if(t===void 0)return _n("GRPC error has no .code"),k.UNKNOWN;switch(t){case Se.OK:return k.OK;case Se.CANCELLED:return k.CANCELLED;case Se.UNKNOWN:return k.UNKNOWN;case Se.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Se.INTERNAL:return k.INTERNAL;case Se.UNAVAILABLE:return k.UNAVAILABLE;case Se.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Se.NOT_FOUND:return k.NOT_FOUND;case Se.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Se.ABORTED:return k.ABORTED;case Se.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Se.DATA_LOSS:return k.DATA_LOSS;default:return F()}}(G=Se||(Se={}))[G.OK=0]="OK",G[G.CANCELLED=1]="CANCELLED",G[G.UNKNOWN=2]="UNKNOWN",G[G.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",G[G.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",G[G.NOT_FOUND=5]="NOT_FOUND",G[G.ALREADY_EXISTS=6]="ALREADY_EXISTS",G[G.PERMISSION_DENIED=7]="PERMISSION_DENIED",G[G.UNAUTHENTICATED=16]="UNAUTHENTICATED",G[G.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",G[G.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",G[G.ABORTED=10]="ABORTED",G[G.OUT_OF_RANGE=11]="OUT_OF_RANGE",G[G.UNIMPLEMENTED=12]="UNIMPLEMENTED",G[G.INTERNAL=13]="INTERNAL",G[G.UNAVAILABLE=14]="UNAVAILABLE",G[G.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Yr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return Zw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=new xe(M.comparator);function Tn(){return pA}const k1=new xe(M.comparator);function As(...t){let e=k1;for(const n of t)e=e.insert(n.key,n);return e}function T1(t){let e=k1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Cr(){return Bs()}function I1(){return Bs()}function Bs(){return new rs(t=>t.toString(),(t,e)=>t.isEqual(e))}const mA=new xe(M.comparator),gA=new De(M.comparator);function W(...t){let e=gA;for(const n of t)e=e.add(n);return e}const yA=new De(ee);function C1(){return yA}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Wo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Pu(j.min(),i,C1(),Tn(),W())}}class Wo{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Wo(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,n,r,i){this.Et=e,this.removedTargetIds=n,this.key=r,this.At=i}}class N1{constructor(e,n){this.targetId=e,this.Rt=n}}class A1{constructor(e,n,r=Ze.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Pg{constructor(){this.bt=0,this.vt=Lg(),this.Pt=Ze.EMPTY_BYTE_STRING,this.Vt=!1,this.St=!0}get current(){return this.Vt}get resumeToken(){return this.Pt}get Dt(){return this.bt!==0}get Ct(){return this.St}xt(e){e.approximateByteSize()>0&&(this.St=!0,this.Pt=e)}Nt(){let e=W(),n=W(),r=W();return this.vt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:F()}}),new Wo(this.Pt,this.Vt,e,n,r)}kt(){this.St=!1,this.vt=Lg()}Ot(e,n){this.St=!0,this.vt=this.vt.insert(e,n)}Mt(e){this.St=!0,this.vt=this.vt.remove(e)}Ft(){this.bt+=1}$t(){this.bt-=1}Bt(){this.St=!0,this.Vt=!0}}class vA{constructor(e){this.Lt=e,this.qt=new Map,this.Ut=Tn(),this.Kt=Og(),this.Gt=new De(ee)}Qt(e){for(const n of e.Et)e.At&&e.At.isFoundDocument()?this.jt(n,e.At):this.zt(n,e.key,e.At);for(const n of e.removedTargetIds)this.zt(n,e.key,e.At)}Wt(e){this.forEachTarget(e,n=>{const r=this.Ht(n);switch(e.state){case 0:this.Jt(n)&&r.xt(e.resumeToken);break;case 1:r.$t(),r.Dt||r.kt(),r.xt(e.resumeToken);break;case 2:r.$t(),r.Dt||this.removeTarget(n);break;case 3:this.Jt(n)&&(r.Bt(),r.xt(e.resumeToken));break;case 4:this.Jt(n)&&(this.Yt(n),r.xt(e.resumeToken));break;default:F()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qt.forEach((r,i)=>{this.Jt(i)&&n(i)})}Zt(e){const n=e.targetId,r=e.Rt.count,i=this.Xt(n);if(i){const s=i.target;if(id(s))if(r===0){const o=new M(s.path);this.zt(n,o,Ke.newNoDocument(o,j.min()))}else ie(r===1);else this.te(n)!==r&&(this.Yt(n),this.Gt=this.Gt.add(n))}}ee(e){const n=new Map;this.qt.forEach((s,o)=>{const a=this.Xt(o);if(a){if(s.current&&id(a.target)){const l=new M(a.target.path);this.Ut.get(l)!==null||this.ne(o,l)||this.zt(o,l,Ke.newNoDocument(l,e))}s.Ct&&(n.set(o,s.Nt()),s.kt())}});let r=W();this.Kt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ut.forEach((s,o)=>o.setReadTime(e));const i=new Pu(e,n,this.Gt,this.Ut,r);return this.Ut=Tn(),this.Kt=Og(),this.Gt=new De(ee),i}jt(e,n){if(!this.Jt(e))return;const r=this.ne(e,n.key)?2:0;this.Ht(e).Ot(n.key,r),this.Ut=this.Ut.insert(n.key,n),this.Kt=this.Kt.insert(n.key,this.se(n.key).add(e))}zt(e,n,r){if(!this.Jt(e))return;const i=this.Ht(e);this.ne(e,n)?i.Ot(n,1):i.Mt(n),this.Kt=this.Kt.insert(n,this.se(n).delete(e)),r&&(this.Ut=this.Ut.insert(n,r))}removeTarget(e){this.qt.delete(e)}te(e){const n=this.Ht(e).Nt();return this.Lt.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ft(e){this.Ht(e).Ft()}Ht(e){let n=this.qt.get(e);return n||(n=new Pg,this.qt.set(e,n)),n}se(e){let n=this.Kt.get(e);return n||(n=new De(ee),this.Kt=this.Kt.insert(e,n)),n}Jt(e){const n=this.Xt(e)!==null;return n||b("WatchChangeAggregator","Detected inactive target",e),n}Xt(e){const n=this.qt.get(e);return n&&n.Dt?null:this.Lt.ie(e)}Yt(e){this.qt.set(e,new Pg),this.Lt.getRemoteKeysForTarget(e).forEach(n=>{this.zt(e,n,null)})}ne(e,n){return this.Lt.getRemoteKeysForTarget(e).has(n)}}function Og(){return new xe(M.comparator)}function Lg(){return new xe(M.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),EA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),SA=(()=>({and:"AND",or:"OR"}))();class _A{constructor(e,n){this.databaseId=e,this.yt=n}}function Fl(t,e){return t.yt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function R1(t,e){return t.yt?e.toBase64():e.toUint8Array()}function kA(t,e){return Fl(t,e.toTimestamp())}function Zt(t){return ie(!!t),j.fromTimestamp(function(e){const n=ar(e);return new Re(n.seconds,n.nanos)}(t))}function Hf(t,e){return function(n){return new oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function D1(t){const e=oe.fromString(t);return ie(L1(e)),e}function ld(t,e){return Hf(t.databaseId,e.path)}function Pc(t,e){const n=D1(e);if(n.get(1)!==t.databaseId.projectId)throw new P(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new M(x1(n))}function ud(t,e){return Hf(t.databaseId,e)}function TA(t){const e=D1(t);return e.length===4?oe.emptyPath():x1(e)}function cd(t){return new oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function x1(t){return ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function bg(t,e,n){return{name:ld(t,e),fields:n.value.mapValue.fields}}function IA(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:F()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.yt?(ie(u===void 0||typeof u=="string"),Ze.fromBase64String(u||"")):(ie(u===void 0||u instanceof Uint8Array),Ze.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?k.UNKNOWN:_1(l.code);return new P(u,l.message||"")}(o);n=new A1(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Pc(t,r.document.name),s=Zt(r.document.updateTime),o=r.document.createTime?Zt(r.document.createTime):j.min(),a=new lt({mapValue:{fields:r.document.fields}}),l=Ke.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Ka(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Pc(t,r.document),s=r.readTime?Zt(r.readTime):j.min(),o=Ke.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Ka([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Pc(t,r.document),s=r.removedTargetIds||[];n=new Ka([],s,i,null)}else{if(!("filter"in e))return F();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new dA(i),o=r.targetId;n=new N1(o,s)}}return n}function CA(t,e){let n;if(e instanceof qo)n={update:bg(t,e.key,e.value)};else if(e instanceof S1)n={delete:ld(t,e.key)};else if(e instanceof pr)n={update:bg(t,e.key,e.data),updateMask:bA(e.fieldMask)};else{if(!(e instanceof hA))return F();n={verify:ld(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Eo)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof So)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof _o)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof $l)return{fieldPath:s.field.canonicalString(),increment:o.It};throw F()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:kA(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:F()}(t,e.precondition)),n}function NA(t,e){return t&&t.length>0?(ie(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Zt(r.updateTime):Zt(i);return s.isEqual(j.min())&&(s=Zt(i)),new lA(s,r.transformResults||[])}(n,e))):[]}function AA(t,e){return{documents:[ud(t,e.path)]}}function RA(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=ud(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=ud(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return O1(Vt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(c){return{field:ni(c.field),direction:PA(c.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.yt||Cu(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function DA(t){let e=TA(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){ie(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(c){const h=P1(c);return h instanceof Vt&&i1(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Ti(ri(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Cu(h)?null:h}(n.limit));let l=null;n.startAt&&(l=function(c){const h=!!c.before,d=c.values||[];return new Ul(d,h)}(n.startAt));let u=null;return n.endAt&&(u=function(c){const h=!c.before,d=c.values||[];return new Ul(d,h)}(n.endAt)),eA(e,i,o,s,a,"F",l,u)}function xA(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return F()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function P1(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ri(e.unaryFilter.field);return Te.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=ri(e.unaryFilter.field);return Te.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ri(e.unaryFilter.field);return Te.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=ri(e.unaryFilter.field);return Te.create(s,"!=",{nullValue:"NULL_VALUE"});default:return F()}}(t):t.fieldFilter!==void 0?function(e){return Te.create(ri(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return F()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Vt.create(e.compositeFilter.filters.map(n=>P1(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return F()}}(e.compositeFilter.op))}(t):F()}function PA(t){return wA[t]}function OA(t){return EA[t]}function LA(t){return SA[t]}function ni(t){return{fieldPath:t.canonicalString()}}function ri(t){return Ge.fromServerFormat(t.fieldPath)}function O1(t){return t instanceof Te?function(e){if(e.op==="=="){if(_g(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NAN"}};if(Sg(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(_g(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NOT_NAN"}};if(Sg(e.value))return{unaryFilter:{field:ni(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ni(e.field),op:OA(e.op),value:e.value}}}(t):t instanceof Vt?function(e){const n=e.getFilters().map(r=>O1(r));return n.length===1?n[0]:{compositeFilter:{op:LA(e.op),filters:n}}}(t):F()}function bA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function L1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&uA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Vs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=I1();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=w1(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&Ui(this.mutations,e.mutations,(n,r)=>Rg(n,r))&&Ui(this.baseMutations,e.baseMutations,(n,r)=>Rg(n,r))}}class qf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){ie(e.mutations.length===r.length);let i=mA;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new qf(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,n,r,i,s=j.min(),o=j.min(),a=Ze.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Dr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Dr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e){this.oe=e}}function FA(t){const e=DA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?od(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(){this.Ze=new BA}addToCollectionParentIndex(e,n){return this.Ze.add(n),I.resolve()}getCollectionParents(e,n){return I.resolve(this.Ze.getEntries(n))}addFieldIndex(e,n){return I.resolve()}deleteFieldIndex(e,n){return I.resolve()}getDocumentsMatchingTarget(e,n){return I.resolve(null)}getIndexType(e,n){return I.resolve(0)}getFieldIndexes(e,n){return I.resolve([])}getNextCollectionGroupToUpdate(e){return I.resolve(null)}getMinOffset(e,n){return I.resolve(or.min())}getMinOffsetFromCollectionGroup(e,n){return I.resolve(or.min())}updateCollectionGroup(e,n,r){return I.resolve()}updateIndexEntries(e,n){return I.resolve()}}class BA{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new De(oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new De(oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.Pn=e}next(){return this.Pn+=2,this.Pn}static Vn(){return new Bi(0)}static Sn(){return new Bi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(){this.changes=new rs(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?I.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Vs(r.mutation,i,gt.empty(),Re.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=Cr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=As();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Cr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Tn();const o=Bs(),a=Bs();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof pr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),Vs(c.mutation,u,c.mutation.getFieldMask(),Re.now())):o.set(u.key,gt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new zA(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Bs();let i=new xe((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||gt.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=I1();c.forEach(d=>{if(!s.has(d)){const y=w1(n.get(d),r.get(d));y!==null&&h.set(d,y),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return I.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return M.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):c1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):I.resolve(Cr());let a=-1,l=s;return o.next(u=>I.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?I.resolve():this.remoteDocumentCache.getEntry(e,c).next(d=>{l=l.insert(c,d)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:T1(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new M(n)).next(r=>{let i=As();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=As();return this.indexManager.getCollectionParents(e,i).next(o=>I.forEach(o,a=>{const l=function(u,c){return new ns(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ke.newInvalidDocument(u)))});let o=As();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&Vs(u.mutation,l,gt.empty(),Re.now()),Ru(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.Tt=e,this.es=new Map,this.ns=new Map}getBundleMetadata(e,n){return I.resolve(this.es.get(n))}saveBundleMetadata(e,n){var r;return this.es.set(n.id,{id:(r=n).id,version:r.version,createTime:Zt(r.createTime)}),I.resolve()}getNamedQuery(e,n){return I.resolve(this.ns.get(n))}saveNamedQuery(e,n){return this.ns.set(n.name,function(r){return{name:r.name,query:FA(r.bundledQuery),readTime:Zt(r.readTime)}}(n)),I.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{constructor(){this.overlays=new xe(M.comparator),this.ss=new Map}getOverlay(e,n){return I.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Cr();return I.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ce(e,n,s)}),I.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.ss.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.ss.delete(r)),I.resolve()}getOverlaysForCollection(e,n,r){const i=Cr(),s=n.length+1,o=new M(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return I.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new xe((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Cr(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Cr(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return I.resolve(a)}ce(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.ss.get(i.largestBatchId).delete(r.key);this.ss.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new UA(n,r));let s=this.ss.get(n);s===void 0&&(s=W(),this.ss.set(n,s)),this.ss.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(){this.rs=new De(Pe.os),this.us=new De(Pe.cs)}isEmpty(){return this.rs.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.rs=this.rs.add(r),this.us=this.us.add(r)}hs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.ls(new Pe(e,n))}fs(e,n){e.forEach(r=>this.removeReference(r,n))}ds(e){const n=new M(new oe([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.us.forEachInRange([r,i],o=>{this.ls(o),s.push(o.key)}),s}_s(){this.rs.forEach(e=>this.ls(e))}ls(e){this.rs=this.rs.delete(e),this.us=this.us.delete(e)}ws(e){const n=new M(new oe([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=W();return this.us.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.rs.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.gs=n}static os(e,n){return M.comparator(e.key,n.key)||ee(e.gs,n.gs)}static cs(e,n){return ee(e.gs,n.gs)||M.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ys=1,this.ps=new De(Pe.os)}checkEmpty(e){return I.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ys;this.ys++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MA(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.ps=this.ps.add(new Pe(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return I.resolve(o)}lookupMutationBatch(e,n){return I.resolve(this.Is(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Ts(r),s=i<0?0:i;return I.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return I.resolve(this.mutationQueue.length===0?-1:this.ys-1)}getAllMutationBatches(e){return I.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.ps.forEachInRange([r,i],o=>{const a=this.Is(o.gs);s.push(a)}),I.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new De(ee);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.ps.forEachInRange([s,o],a=>{r=r.add(a.gs)})}),I.resolve(this.Es(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;M.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new M(s),0);let a=new De(ee);return this.ps.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.gs)),!0)},o),I.resolve(this.Es(a))}Es(e){const n=[];return e.forEach(r=>{const i=this.Is(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ie(this.As(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.ps;return I.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ps=r})}bn(e){}containsKey(e,n){const r=new Pe(n,0),i=this.ps.firstAfterOrEqual(r);return I.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,I.resolve()}As(e,n){return this.Ts(e)}Ts(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Is(e){const n=this.Ts(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e){this.Rs=e,this.docs=new xe(M.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Rs(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return I.resolve(r?r.document.mutableCopy():Ke.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ke.newInvalidDocument(i))}),I.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Tn();const o=n.path,a=new M(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||MN(bN(c),r)<=0||(i.has(c.key)||Ru(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return I.resolve(s)}getAllFromCollectionGroup(e,n,r,i){F()}bs(e,n){return I.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new QA(this)}getSize(e){return I.resolve(this.size)}}class QA extends jA{constructor(e){super(),this.Xn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Xn.addEntry(e,i)):this.Xn.removeEntry(r)}),I.waitFor(n)}getFromCache(e,n){return this.Xn.getEntry(e,n)}getAllFromCache(e,n){return this.Xn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.persistence=e,this.vs=new rs(n=>Bf(n),jf),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Ps=0,this.Vs=new Wf,this.targetCount=0,this.Ss=Bi.Vn()}forEachTarget(e,n){return this.vs.forEach((r,i)=>n(i)),I.resolve()}getLastRemoteSnapshotVersion(e){return I.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return I.resolve(this.Ps)}allocateTargetId(e){return this.highestTargetId=this.Ss.next(),I.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Ps&&(this.Ps=n),I.resolve()}xn(e){this.vs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ss=new Bi(n),this.highestTargetId=n),e.sequenceNumber>this.Ps&&(this.Ps=e.sequenceNumber)}addTargetData(e,n){return this.xn(n),this.targetCount+=1,I.resolve()}updateTargetData(e,n){return this.xn(n),I.resolve()}removeTargetData(e,n){return this.vs.delete(n.target),this.Vs.ds(n.targetId),this.targetCount-=1,I.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.vs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.vs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),I.waitFor(s).next(()=>i)}getTargetCount(e){return I.resolve(this.targetCount)}getTargetData(e,n){const r=this.vs.get(n)||null;return I.resolve(r)}addMatchingKeys(e,n,r){return this.Vs.hs(n,r),I.resolve()}removeMatchingKeys(e,n,r){this.Vs.fs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),I.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Vs.ds(n),I.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Vs.ws(n);return I.resolve(r)}containsKey(e,n){return I.resolve(this.Vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n){this.Ds={},this.overlays={},this.Cs=new Ff(0),this.xs=!1,this.xs=!0,this.referenceDelegate=e(this),this.Ns=new YA(this),this.indexManager=new VA,this.remoteDocumentCache=function(r){return new GA(r)}(r=>this.referenceDelegate.ks(r)),this.Tt=new $A(n),this.Os=new qA(this.Tt)}start(){return Promise.resolve()}shutdown(){return this.xs=!1,Promise.resolve()}get started(){return this.xs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WA,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ds[e.toKey()];return r||(r=new KA(n,this.referenceDelegate),this.Ds[e.toKey()]=r),r}getTargetCache(){return this.Ns}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Os}runTransaction(e,n,r){b("MemoryPersistence","Starting transaction:",e);const i=new JA(this.Cs.next());return this.referenceDelegate.Ms(),r(i).next(s=>this.referenceDelegate.Fs(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}$s(e,n){return I.or(Object.values(this.Ds).map(r=>()=>r.containsKey(e,n)))}}class JA extends $N{constructor(e){super(),this.currentSequenceNumber=e}}class Kf{constructor(e){this.persistence=e,this.Bs=new Wf,this.Ls=null}static qs(e){return new Kf(e)}get Us(){if(this.Ls)return this.Ls;throw F()}addReference(e,n,r){return this.Bs.addReference(r,n),this.Us.delete(r.toString()),I.resolve()}removeReference(e,n,r){return this.Bs.removeReference(r,n),this.Us.add(r.toString()),I.resolve()}markPotentiallyOrphaned(e,n){return this.Us.add(n.toString()),I.resolve()}removeTarget(e,n){this.Bs.ds(n.targetId).forEach(i=>this.Us.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Us.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ms(){this.Ls=new Set}Fs(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return I.forEach(this.Us,r=>{const i=M.fromPath(r);return this.Ks(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.Ls=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ks(e,n).next(r=>{r?this.Us.delete(n.toString()):this.Us.add(n.toString())})}ks(e){return 0}Ks(e,n){return I.or([()=>I.resolve(this.Bs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.$s(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ci=r,this.xi=i}static Ni(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Gf(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZA{constructor(){this.ki=!1}initialize(e,n){this.Oi=e,this.indexManager=n,this.ki=!0}getDocumentsMatchingQuery(e,n,r,i){return this.Mi(e,n).next(s=>s||this.Fi(e,n,i,r)).next(s=>s||this.$i(e,n))}Mi(e,n){if(Ng(n))return I.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=od(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.Oi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Bi(n,a);return this.Li(n,u,o,l.readTime)?this.Mi(e,od(n,null,"F")):this.qi(e,u,n,l)}))})))}Fi(e,n,r,i){return Ng(n)||i.isEqual(j.min())?this.$i(e,n):this.Oi.getDocuments(e,r).next(s=>{const o=this.Bi(n,s);return this.Li(n,o,r,i)?this.$i(e,n):(yg()<=J.DEBUG&&b("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),ad(n)),this.qi(e,o,n,LN(i,-1)))})}Bi(e,n){let r=new De(d1(e));return n.forEach((i,s)=>{Ru(e,s)&&(r=r.add(s))}),r}Li(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}$i(e,n){return yg()<=J.DEBUG&&b("QueryEngine","Using full collection scan to execute query:",ad(n)),this.Oi.getDocumentsMatchingQuery(e,n,or.min())}qi(e,n,r,i){return this.Oi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n,r,i){this.persistence=e,this.Ui=n,this.Tt=i,this.Ki=new xe(ee),this.Gi=new rs(s=>Bf(s),jf),this.Qi=new Map,this.ji=e.getRemoteDocumentCache(),this.Ns=e.getTargetCache(),this.Os=e.getBundleCache(),this.zi(r)}zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HA(this.ji,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ji.setIndexManager(this.indexManager),this.Ui.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ki))}}function tR(t,e,n,r){return new eR(t,e,n,r)}async function b1(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.zi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({Wi:u,removedBatchIds:o,addedBatchIds:a}))})})}function nR(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.ji.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const c=l.batch,h=c.keys();let d=I.resolve();return h.forEach(y=>{d=d.next(()=>u.getEntry(a,y)).next(v=>{const w=l.docVersions.get(y);ie(w!==null),v.version.compareTo(w)<0&&(c.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=W();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function M1(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ns.getLastRemoteSnapshotVersion(n))}function rR(t,e){const n=H(t),r=e.snapshotVersion;let i=n.Ki;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.ji.newChangeBuffer({trackRemovals:!0});i=n.Ki;const a=[];e.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(n.Ns.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Ns.addMatchingKeys(s,c.addedDocuments,h)));let y=d.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(h)?y=y.withResumeToken(Ze.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(c.resumeToken,r)),i=i.insert(h,y),function(v,w,_){return v.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(d,y,c)&&a.push(n.Ns.updateTargetData(s,y))});let l=Tn(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(iR(s,o,e.documentUpdates).next(c=>{l=c.Hi,u=c.Ji})),!r.isEqual(j.min())){const c=n.Ns.getLastRemoteSnapshotVersion(s).next(h=>n.Ns.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return I.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ki=i,s))}function iR(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Tn();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):b("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Hi:o,Ji:i}})}function sR(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function oR(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ns.getTargetData(r,e).next(s=>s?(i=s,I.resolve(i)):n.Ns.allocateTargetId(r).next(o=>(i=new Dr(e,o,0,r.currentSequenceNumber),n.Ns.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ki.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ki=n.Ki.insert(r.targetId,r),n.Gi.set(e,r.targetId)),r})}async function hd(t,e,n){const r=H(t),i=r.Ki.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ho(o))throw o;b("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ki=r.Ki.remove(e),r.Gi.delete(i.target)}function Mg(t,e,n){const r=H(t);let i=j.min(),s=W();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const c=H(a),h=c.Gi.get(u);return h!==void 0?I.resolve(c.Ki.get(h)):c.Ns.getTargetData(l,u)}(r,o,kn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Ns.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Ui.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:W())).next(a=>(aR(r,tA(e),a),{documents:a,Yi:s})))}function aR(t,e,n){let r=t.Qi.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Qi.set(e,r)}class Ug{constructor(){this.activeTargetIds=C1()}sr(e){this.activeTargetIds=this.activeTargetIds.add(e)}ir(e){this.activeTargetIds=this.activeTargetIds.delete(e)}nr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class lR{constructor(){this.Ur=new Ug,this.Kr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Ur.sr(e),this.Kr[e]||"not-current"}updateQueryState(e,n,r){this.Kr[e]=n}removeLocalQueryTarget(e){this.Ur.ir(e)}isLocalQueryTarget(e){return this.Ur.activeTargetIds.has(e)}clearQueryState(e){delete this.Kr[e]}getAllActiveQueryTargets(){return this.Ur.activeTargetIds}isActiveQueryTarget(e){return this.Ur.activeTargetIds.has(e)}start(){return this.Ur=new Ug,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uR{Gr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(){this.Qr=()=>this.jr(),this.zr=()=>this.Wr(),this.Hr=[],this.Jr()}Gr(e){this.Hr.push(e)}shutdown(){window.removeEventListener("online",this.Qr),window.removeEventListener("offline",this.zr)}Jr(){window.addEventListener("online",this.Qr),window.addEventListener("offline",this.zr)}jr(){b("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Hr)e(0)}Wr(){b("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Hr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e){this.Yr=e.Yr,this.Zr=e.Zr}Xr(e){this.eo=e}no(e){this.so=e}onMessage(e){this.io=e}close(){this.Zr()}send(e){this.Yr(e)}ro(){this.eo()}oo(e){this.so(e)}uo(e){this.io(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dR extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.co=n+"://"+e.host,this.ao="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get ho(){return!1}lo(e,n,r,i,s){const o=this.fo(e,n);b("RestConnection","Sending: ",o,r);const a={};return this._o(a,i,s),this.wo(e,o,a,r).then(l=>(b("RestConnection","Received: ",l),l),l=>{throw ed("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}mo(e,n,r,i,s,o){return this.lo(e,n,r,i,s)}_o(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+ts,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}fo(e,n){const r=cR[e];return`${this.co}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}wo(e,n,r,i){return new Promise((s,o)=>{const a=new TN;a.setWithCredentials(!0),a.listenOnce(SN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xc.NO_ERROR:const u=a.getResponseJson();b("Connection","XHR received:",JSON.stringify(u)),s(u);break;case xc.TIMEOUT:b("Connection",'RPC "'+e+'" timed out'),o(new P(k.DEADLINE_EXCEEDED,"Request time out"));break;case xc.HTTP_ERROR:const c=a.getStatus();if(b("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){let h=a.getResponseJson();Array.isArray(h)&&(h=h[0]);const d=h==null?void 0:h.error;if(d&&d.status&&d.message){const y=function(v){const w=v.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf(w)>=0?w:k.UNKNOWN}(d.status);o(new P(y,d.message))}else o(new P(k.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(k.UNAVAILABLE,"Connection failed."));break;default:F()}}finally{b("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}yo(e,n,r){const i=[this.co,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=wN(),o=EN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new kN({})),this._o(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");b("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let c=!1,h=!1;const d=new hR({Yr:v=>{h?b("Connection","Not sending because WebChannel is closed:",v):(c||(b("Connection","Opening WebChannel transport."),u.open(),c=!0),b("Connection","WebChannel sending:",v),u.send(v))},Zr:()=>u.close()}),y=(v,w,_)=>{v.listen(w,p=>{try{_(p)}catch(f){setTimeout(()=>{throw f},0)}})};return y(u,Ta.EventType.OPEN,()=>{h||b("Connection","WebChannel transport opened.")}),y(u,Ta.EventType.CLOSE,()=>{h||(h=!0,b("Connection","WebChannel transport closed"),d.oo())}),y(u,Ta.EventType.ERROR,v=>{h||(h=!0,ed("Connection","WebChannel transport errored:",v),d.oo(new P(k.UNAVAILABLE,"The operation could not be completed")))}),y(u,Ta.EventType.MESSAGE,v=>{var w;if(!h){const _=v.data[0];ie(!!_);const p=_,f=p.error||((w=p[0])===null||w===void 0?void 0:w.error);if(f){b("Connection","WebChannel received error:",f);const g=f.status;let E=function(R){const A=Se[R];if(A!==void 0)return _1(A)}(g),N=f.message;E===void 0&&(E=k.INTERNAL,N="Unknown error status: "+g+" with message "+f.message),h=!0,d.oo(new P(E,N)),u.close()}else b("Connection","WebChannel received:",_),d.uo(_)}}),y(o,_N.STAT_EVENT,v=>{v.stat===mg.PROXY?b("Connection","Detected buffering proxy"):v.stat===mg.NOPROXY&&b("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ro()},0),d}}function Oc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t){return new _A(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ys=e,this.timerId=n,this.po=r,this.Io=i,this.To=s,this.Eo=0,this.Ao=null,this.Ro=Date.now(),this.reset()}reset(){this.Eo=0}bo(){this.Eo=this.To}vo(e){this.cancel();const n=Math.floor(this.Eo+this.Po()),r=Math.max(0,Date.now()-this.Ro),i=Math.max(0,n-r);i>0&&b("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Eo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ao=this.Ys.enqueueAfterDelay(this.timerId,i,()=>(this.Ro=Date.now(),e())),this.Eo*=this.Io,this.Eo<this.po&&(this.Eo=this.po),this.Eo>this.To&&(this.Eo=this.To)}Vo(){this.Ao!==null&&(this.Ao.skipDelay(),this.Ao=null)}cancel(){this.Ao!==null&&(this.Ao.cancel(),this.Ao=null)}Po(){return(Math.random()-.5)*this.Eo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1{constructor(e,n,r,i,s,o,a,l){this.Ys=e,this.So=r,this.Do=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Co=0,this.xo=null,this.No=null,this.stream=null,this.ko=new U1(e,n)}Oo(){return this.state===1||this.state===5||this.Mo()}Mo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Fo()}async stop(){this.Oo()&&await this.close(0)}$o(){this.state=0,this.ko.reset()}Bo(){this.Mo()&&this.xo===null&&(this.xo=this.Ys.enqueueAfterDelay(this.So,6e4,()=>this.Lo()))}qo(e){this.Uo(),this.stream.send(e)}async Lo(){if(this.Mo())return this.close(0)}Uo(){this.xo&&(this.xo.cancel(),this.xo=null)}Ko(){this.No&&(this.No.cancel(),this.No=null)}async close(e,n){this.Uo(),this.Ko(),this.ko.cancel(),this.Co++,e!==4?this.ko.reset():n&&n.code===k.RESOURCE_EXHAUSTED?(_n(n.toString()),_n("Using maximum backoff delay to prevent overloading the backend."),this.ko.bo()):n&&n.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Go(),this.stream.close(),this.stream=null),this.state=e,await this.listener.no(n)}Go(){}auth(){this.state=1;const e=this.Qo(this.Co),n=this.Co;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Co===n&&this.jo(r,i)},r=>{e(()=>{const i=new P(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.zo(i)})})}jo(e,n){const r=this.Qo(this.Co);this.stream=this.Wo(e,n),this.stream.Xr(()=>{r(()=>(this.state=2,this.No=this.Ys.enqueueAfterDelay(this.Do,1e4,()=>(this.Mo()&&(this.state=3),Promise.resolve())),this.listener.Xr()))}),this.stream.no(i=>{r(()=>this.zo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Fo(){this.state=5,this.ko.vo(async()=>{this.state=0,this.start()})}zo(e){return b("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Qo(e){return n=>{this.Ys.enqueueAndForget(()=>this.Co===e?n():(b("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fR extends $1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s}Wo(e,n){return this.connection.yo("Listen",e,n)}onMessage(e){this.ko.reset();const n=IA(this.Tt,e),r=function(i){if(!("targetChange"in i))return j.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?j.min():s.readTime?Zt(s.readTime):j.min()}(e);return this.listener.Ho(n,r)}Jo(e){const n={};n.database=cd(this.Tt),n.addTarget=function(i,s){let o;const a=s.target;return o=id(a)?{documents:AA(i,a)}:{query:RA(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=R1(i,s.resumeToken):s.snapshotVersion.compareTo(j.min())>0&&(o.readTime=Fl(i,s.snapshotVersion.toTimestamp())),o}(this.Tt,e);const r=xA(this.Tt,e);r&&(n.labels=r),this.qo(n)}Yo(e){const n={};n.database=cd(this.Tt),n.removeTarget=e,this.qo(n)}}class pR extends $1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.Tt=s,this.Zo=!1}get Xo(){return this.Zo}start(){this.Zo=!1,this.lastStreamToken=void 0,super.start()}Go(){this.Zo&&this.tu([])}Wo(e,n){return this.connection.yo("Write",e,n)}onMessage(e){if(ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Zo){this.ko.reset();const n=NA(e.writeResults,e.commitTime),r=Zt(e.commitTime);return this.listener.eu(r,n)}return ie(!e.writeResults||e.writeResults.length===0),this.Zo=!0,this.listener.nu()}su(){const e={};e.database=cd(this.Tt),this.qo(e)}tu(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>CA(this.Tt,r))};this.qo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.Tt=i,this.iu=!1}ru(){if(this.iu)throw new P(k.FAILED_PRECONDITION,"The client has already been terminated.")}lo(e,n,r){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.lo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(k.UNKNOWN,i.toString())})}mo(e,n,r,i){return this.ru(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.mo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new P(k.UNKNOWN,s.toString())})}terminate(){this.iu=!0}}class gR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.ou=0,this.uu=null,this.cu=!0}au(){this.ou===0&&(this.hu("Unknown"),this.uu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.uu=null,this.lu("Backend didn't respond within 10 seconds."),this.hu("Offline"),Promise.resolve())))}fu(e){this.state==="Online"?this.hu("Unknown"):(this.ou++,this.ou>=1&&(this.du(),this.lu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.hu("Offline")))}set(e){this.du(),this.ou=0,e==="Online"&&(this.cu=!1),this.hu(e)}hu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}lu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.cu?(_n(n),this.cu=!1):b("OnlineStateTracker",n)}du(){this.uu!==null&&(this.uu.cancel(),this.uu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this._u=[],this.wu=new Map,this.mu=new Set,this.gu=[],this.yu=s,this.yu.Gr(o=>{r.enqueueAndForget(async()=>{Xr(this)&&(b("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=H(a);l.mu.add(4),await Ko(l),l.pu.set("Unknown"),l.mu.delete(4),await Lu(l)}(this))})}),this.pu=new gR(r,i)}}async function Lu(t){if(Xr(t))for(const e of t.gu)await e(!0)}async function Ko(t){for(const e of t.gu)await e(!1)}function F1(t,e){const n=H(t);n.wu.has(e.targetId)||(n.wu.set(e.targetId,e),Xf(n)?Yf(n):is(n).Mo()&&Qf(n,e))}function V1(t,e){const n=H(t),r=is(n);n.wu.delete(e),r.Mo()&&B1(n,e),n.wu.size===0&&(r.Mo()?r.Bo():Xr(n)&&n.pu.set("Unknown"))}function Qf(t,e){t.Iu.Ft(e.targetId),is(t).Jo(e)}function B1(t,e){t.Iu.Ft(e),is(t).Yo(e)}function Yf(t){t.Iu=new vA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ie:e=>t.wu.get(e)||null}),is(t).start(),t.pu.au()}function Xf(t){return Xr(t)&&!is(t).Oo()&&t.wu.size>0}function Xr(t){return H(t).mu.size===0}function j1(t){t.Iu=void 0}async function vR(t){t.wu.forEach((e,n)=>{Qf(t,e)})}async function wR(t,e){j1(t),Xf(t)?(t.pu.fu(e),Yf(t)):t.pu.set("Unknown")}async function ER(t,e,n){if(t.pu.set("Online"),e instanceof A1&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.wu.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.wu.delete(o),r.Iu.removeTarget(o))}(t,e)}catch(r){b("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vl(t,r)}else if(e instanceof Ka?t.Iu.Qt(e):e instanceof N1?t.Iu.Zt(e):t.Iu.Wt(e),!n.isEqual(j.min()))try{const r=await M1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Iu.ee(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.wu.get(l);u&&i.wu.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.wu.get(a);if(!l)return;i.wu.set(a,l.withResumeToken(Ze.EMPTY_BYTE_STRING,l.snapshotVersion)),B1(i,a);const u=new Dr(l.target,a,1,l.sequenceNumber);Qf(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){b("RemoteStore","Failed to raise snapshot:",r),await Vl(t,r)}}async function Vl(t,e,n){if(!Ho(e))throw e;t.mu.add(1),await Ko(t),t.pu.set("Offline"),n||(n=()=>M1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{b("RemoteStore","Retrying IndexedDB access"),await n(),t.mu.delete(1),await Lu(t)})}function z1(t,e){return e().catch(n=>Vl(t,n,e))}async function bu(t){const e=H(t),n=lr(e);let r=e._u.length>0?e._u[e._u.length-1].batchId:-1;for(;SR(e);)try{const i=await sR(e.localStore,r);if(i===null){e._u.length===0&&n.Bo();break}r=i.batchId,_R(e,i)}catch(i){await Vl(e,i)}H1(e)&&q1(e)}function SR(t){return Xr(t)&&t._u.length<10}function _R(t,e){t._u.push(e);const n=lr(t);n.Mo()&&n.Xo&&n.tu(e.mutations)}function H1(t){return Xr(t)&&!lr(t).Oo()&&t._u.length>0}function q1(t){lr(t).start()}async function kR(t){lr(t).su()}async function TR(t){const e=lr(t);for(const n of t._u)e.tu(n.mutations)}async function IR(t,e,n){const r=t._u.shift(),i=qf.from(r,e,n);await z1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await bu(t)}async function CR(t,e){e&&lr(t).Xo&&await async function(n,r){if(i=r.code,fA(i)&&i!==k.ABORTED){const s=n._u.shift();lr(n).$o(),await z1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await bu(n)}var i}(t,e),H1(t)&&q1(t)}async function Fg(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),b("RemoteStore","RemoteStore received new credentials");const r=Xr(n);n.mu.add(3),await Ko(n),r&&n.pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.mu.delete(3),await Lu(n)}async function NR(t,e){const n=H(t);e?(n.mu.delete(2),await Lu(n)):e||(n.mu.add(2),await Ko(n),n.pu.set("Unknown"))}function is(t){return t.Tu||(t.Tu=function(e,n,r){const i=H(e);return i.ru(),new fR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:vR.bind(null,t),no:wR.bind(null,t),Ho:ER.bind(null,t)}),t.gu.push(async e=>{e?(t.Tu.$o(),Xf(t)?Yf(t):t.pu.set("Unknown")):(await t.Tu.stop(),j1(t))})),t.Tu}function lr(t){return t.Eu||(t.Eu=function(e,n,r){const i=H(e);return i.ru(),new pR(n,i.connection,i.authCredentials,i.appCheckCredentials,i.Tt,r)}(t.datastore,t.asyncQueue,{Xr:kR.bind(null,t),no:CR.bind(null,t),nu:TR.bind(null,t),eu:IR.bind(null,t)}),t.gu.push(async e=>{e?(t.Eu.$o(),await bu(t)):(await t.Eu.stop(),t._u.length>0&&(b("RemoteStore",`Stopping write stream with ${t._u.length} pending writes`),t._u=[]))})),t.Eu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new tr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new Jf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zf(t,e){if(_n("AsyncQueue",`${e}: ${t}`),Ho(t))return new P(k.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(e){this.comparator=e?(n,r)=>e(n,r)||M.comparator(n.key,r.key):(n,r)=>M.comparator(n.key,r.key),this.keyedMap=As(),this.sortedSet=new xe(this.comparator)}static emptySet(e){return new Ci(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ci)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ci;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(){this.Au=new xe(M.comparator)}track(e){const n=e.doc.key,r=this.Au.get(n);r?e.type!==0&&r.type===3?this.Au=this.Au.insert(n,e):e.type===3&&r.type!==1?this.Au=this.Au.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Au=this.Au.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Au=this.Au.remove(n):e.type===1&&r.type===2?this.Au=this.Au.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Au=this.Au.insert(n,{type:2,doc:e.doc}):F():this.Au=this.Au.insert(n,e)}Ru(){const e=[];return this.Au.inorderTraversal((n,r)=>{e.push(r)}),e}}class ji{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ji(e,n,Ci.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(){this.bu=void 0,this.listeners=[]}}class RR{constructor(){this.queries=new rs(e=>h1(e),Au),this.onlineState="Unknown",this.vu=new Set}}async function DR(t,e){const n=H(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new AR),i)try{s.bu=await n.onListen(r)}catch(o){const a=Zf(o,`Initialization of query '${ad(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.Pu(n.onlineState),s.bu&&e.Vu(s.bu)&&ep(n)}async function xR(t,e){const n=H(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function PR(t,e){const n=H(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Vu(i)&&(r=!0);o.bu=i}}r&&ep(n)}function OR(t,e,n){const r=H(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function ep(t){t.vu.forEach(e=>{e.next()})}class LR{constructor(e,n,r){this.query=e,this.Su=n,this.Du=!1,this.Cu=null,this.onlineState="Unknown",this.options=r||{}}Vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ji(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Du?this.xu(e)&&(this.Su.next(e),n=!0):this.Nu(e,this.onlineState)&&(this.ku(e),n=!0),this.Cu=e,n}onError(e){this.Su.error(e)}Pu(e){this.onlineState=e;let n=!1;return this.Cu&&!this.Du&&this.Nu(this.Cu,e)&&(this.ku(this.Cu),n=!0),n}Nu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Ou||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}xu(e){if(e.docChanges.length>0)return!0;const n=this.Cu&&this.Cu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ku(e){e=ji.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Du=!0,this.Su.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W1{constructor(e){this.key=e}}class K1{constructor(e){this.key=e}}class bR{constructor(e,n){this.query=e,this.Ku=n,this.Gu=null,this.hasCachedResults=!1,this.current=!1,this.Qu=W(),this.mutatedKeys=W(),this.ju=d1(e),this.zu=new Ci(this.ju)}get Wu(){return this.Ku}Hu(e,n){const r=n?n.Ju:new Vg,i=n?n.zu:this.zu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),y=Ru(this.query,h)?h:null,v=!!d&&this.mutatedKeys.has(d.key),w=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let _=!1;d&&y?d.data.isEqual(y.data)?v!==w&&(r.track({type:3,doc:y}),_=!0):this.Yu(d,y)||(r.track({type:2,doc:y}),_=!0,(l&&this.ju(y,l)>0||u&&this.ju(y,u)<0)&&(a=!0)):!d&&y?(r.track({type:0,doc:y}),_=!0):d&&!y&&(r.track({type:1,doc:d}),_=!0,(l||u)&&(a=!0)),_&&(y?(o=o.add(y),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{zu:o,Ju:r,Li:a,mutatedKeys:s}}Yu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.zu;this.zu=e.zu,this.mutatedKeys=e.mutatedKeys;const s=e.Ju.Ru();s.sort((u,c)=>function(h,d){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return F()}};return y(h)-y(d)}(u.type,c.type)||this.ju(u.doc,c.doc)),this.Zu(r);const o=n?this.Xu():[],a=this.Qu.size===0&&this.current?1:0,l=a!==this.Gu;return this.Gu=a,s.length!==0||l?{snapshot:new ji(this.query,e.zu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),tc:o}:{tc:o}}Pu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({zu:this.zu,Ju:new Vg,mutatedKeys:this.mutatedKeys,Li:!1},!1)):{tc:[]}}ec(e){return!this.Ku.has(e)&&!!this.zu.has(e)&&!this.zu.get(e).hasLocalMutations}Zu(e){e&&(e.addedDocuments.forEach(n=>this.Ku=this.Ku.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ku=this.Ku.delete(n)),this.current=e.current)}Xu(){if(!this.current)return[];const e=this.Qu;this.Qu=W(),this.zu.forEach(r=>{this.ec(r.key)&&(this.Qu=this.Qu.add(r.key))});const n=[];return e.forEach(r=>{this.Qu.has(r)||n.push(new K1(r))}),this.Qu.forEach(r=>{e.has(r)||n.push(new W1(r))}),n}nc(e){this.Ku=e.Yi,this.Qu=W();const n=this.Hu(e.documents);return this.applyChanges(n,!0)}sc(){return ji.fromInitialDocuments(this.query,this.zu,this.mutatedKeys,this.Gu===0,this.hasCachedResults)}}class MR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UR{constructor(e){this.key=e,this.ic=!1}}class $R{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.rc={},this.oc=new rs(a=>h1(a),Au),this.uc=new Map,this.cc=new Set,this.ac=new xe(M.comparator),this.hc=new Map,this.lc=new Wf,this.fc={},this.dc=new Map,this._c=Bi.Sn(),this.onlineState="Unknown",this.wc=void 0}get isPrimaryClient(){return this.wc===!0}}async function FR(t,e){const n=QR(t);let r,i;const s=n.oc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.sc();else{const o=await oR(n.localStore,kn(e));n.isPrimaryClient&&F1(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await VR(n,e,r,a==="current",o.resumeToken)}return i}async function VR(t,e,n,r,i){t.mc=(h,d,y)=>async function(v,w,_,p){let f=w.view.Hu(_);f.Li&&(f=await Mg(v.localStore,w.query,!1).then(({documents:N})=>w.view.Hu(N,f)));const g=p&&p.targetChanges.get(w.targetId),E=w.view.applyChanges(f,v.isPrimaryClient,g);return jg(v,w.targetId,E.tc),E.snapshot}(t,h,d,y);const s=await Mg(t.localStore,e,!0),o=new bR(e,s.Yi),a=o.Hu(s.documents),l=Wo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);jg(t,n,u.tc);const c=new MR(e,n,o);return t.oc.set(e,c),t.uc.has(n)?t.uc.get(n).push(e):t.uc.set(n,[e]),u.snapshot}async function BR(t,e){const n=H(t),r=n.oc.get(e),i=n.uc.get(r.targetId);if(i.length>1)return n.uc.set(r.targetId,i.filter(s=>!Au(s,e))),void n.oc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await hd(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),V1(n.remoteStore,r.targetId),dd(n,r.targetId)}).catch(zo)):(dd(n,r.targetId),await hd(n.localStore,r.targetId,!0))}async function jR(t,e,n){const r=YR(t);try{const i=await function(s,o){const a=H(s),l=Re.now(),u=o.reduce((d,y)=>d.add(y.key),W());let c,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let y=Tn(),v=W();return a.ji.getEntries(d,u).next(w=>{y=w,y.forEach((_,p)=>{p.isValidDocument()||(v=v.add(_))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,y)).next(w=>{c=w;const _=[];for(const p of o){const f=cA(p,c.get(p.key).overlayedDocument);f!=null&&_.push(new pr(p.key,f,l1(f.value.mapValue),Jt.exists(!0)))}return a.mutationQueue.addMutationBatch(d,l,_,o)}).next(w=>{h=w;const _=w.applyToLocalDocumentSet(c,v);return a.documentOverlayCache.saveOverlays(d,w.batchId,_)})}).then(()=>({batchId:h.batchId,changes:T1(c)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.fc[s.currentUser.toKey()];l||(l=new xe(ee)),l=l.insert(o,a),s.fc[s.currentUser.toKey()]=l}(r,i.batchId,n),await Go(r,i.changes),await bu(r.remoteStore)}catch(i){const s=Zf(i,"Failed to persist write");n.reject(s)}}async function G1(t,e){const n=H(t);try{const r=await rR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.hc.get(s);o&&(ie(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ic=!0:i.modifiedDocuments.size>0?ie(o.ic):i.removedDocuments.size>0&&(ie(o.ic),o.ic=!1))}),await Go(n,r,e)}catch(r){await zo(r)}}function Bg(t,e,n){const r=H(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.oc.forEach((s,o)=>{const a=o.view.Pu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=H(s);a.onlineState=o;let l=!1;a.queries.forEach((u,c)=>{for(const h of c.listeners)h.Pu(o)&&(l=!0)}),l&&ep(a)}(r.eventManager,e),i.length&&r.rc.Ho(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function zR(t,e,n){const r=H(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.hc.get(e),s=i&&i.key;if(s){let o=new xe(M.comparator);o=o.insert(s,Ke.newNoDocument(s,j.min()));const a=W().add(s),l=new Pu(j.min(),new Map,new De(ee),o,a);await G1(r,l),r.ac=r.ac.remove(s),r.hc.delete(e),tp(r)}else await hd(r.localStore,e,!1).then(()=>dd(r,e,n)).catch(zo)}async function HR(t,e){const n=H(t),r=e.batch.batchId;try{const i=await nR(n.localStore,e);Y1(n,r,null),Q1(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Go(n,i)}catch(i){await zo(i)}}async function qR(t,e,n){const r=H(t);try{const i=await function(s,o){const a=H(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(c=>(ie(c!==null),u=c.keys(),a.mutationQueue.removeMutationBatch(l,c))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);Y1(r,e,n),Q1(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Go(r,i)}catch(i){await zo(i)}}function Q1(t,e){(t.dc.get(e)||[]).forEach(n=>{n.resolve()}),t.dc.delete(e)}function Y1(t,e,n){const r=H(t);let i=r.fc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fc[r.currentUser.toKey()]=i}}function dd(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.uc.get(e))t.oc.delete(r),n&&t.rc.gc(r,n);t.uc.delete(e),t.isPrimaryClient&&t.lc.ds(e).forEach(r=>{t.lc.containsKey(r)||X1(t,r)})}function X1(t,e){t.cc.delete(e.path.canonicalString());const n=t.ac.get(e);n!==null&&(V1(t.remoteStore,n),t.ac=t.ac.remove(e),t.hc.delete(n),tp(t))}function jg(t,e,n){for(const r of n)r instanceof W1?(t.lc.addReference(r.key,e),WR(t,r)):r instanceof K1?(b("SyncEngine","Document no longer in limbo: "+r.key),t.lc.removeReference(r.key,e),t.lc.containsKey(r.key)||X1(t,r.key)):F()}function WR(t,e){const n=e.key,r=n.path.canonicalString();t.ac.get(n)||t.cc.has(r)||(b("SyncEngine","New document in limbo: "+n),t.cc.add(r),tp(t))}function tp(t){for(;t.cc.size>0&&t.ac.size<t.maxConcurrentLimboResolutions;){const e=t.cc.values().next().value;t.cc.delete(e);const n=new M(oe.fromString(e)),r=t._c.next();t.hc.set(r,new UR(n)),t.ac=t.ac.insert(n,r),F1(t.remoteStore,new Dr(kn(u1(n.path)),r,2,Ff.at))}}async function Go(t,e,n){const r=H(t),i=[],s=[],o=[];r.oc.isEmpty()||(r.oc.forEach((a,l)=>{o.push(r.mc(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=Gf.Ni(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.rc.Ho(i),await async function(a,l){const u=H(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>I.forEach(l,h=>I.forEach(h.Ci,d=>u.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>I.forEach(h.xi,d=>u.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Ho(c))throw c;b("LocalStore","Failed to update sequence numbers: "+c)}for(const c of l){const h=c.targetId;if(!c.fromCache){const d=u.Ki.get(h),y=d.snapshotVersion,v=d.withLastLimboFreeSnapshotVersion(y);u.Ki=u.Ki.insert(h,v)}}}(r.localStore,s))}async function KR(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){b("SyncEngine","User change. New user:",e.toKey());const r=await b1(n.localStore,e);n.currentUser=e,function(i,s){i.dc.forEach(o=>{o.forEach(a=>{a.reject(new P(k.CANCELLED,s))})}),i.dc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Go(n,r.Wi)}}function GR(t,e){const n=H(t),r=n.hc.get(e);if(r&&r.ic)return W().add(r.key);{let i=W();const s=n.uc.get(e);if(!s)return i;for(const o of s){const a=n.oc.get(o);i=i.unionWith(a.view.Wu)}return i}}function QR(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=G1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=GR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=zR.bind(null,e),e.rc.Ho=PR.bind(null,e.eventManager),e.rc.gc=OR.bind(null,e.eventManager),e}function YR(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=HR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=qR.bind(null,e),e}class XR{constructor(){this.synchronizeTabs=!1}async initialize(e){this.Tt=Ou(e.databaseInfo.databaseId),this.sharedClientState=this.Ic(e),this.persistence=this.Tc(e),await this.persistence.start(),this.localStore=this.Ec(e),this.gcScheduler=this.Ac(e,this.localStore),this.indexBackfillerScheduler=this.Rc(e,this.localStore)}Ac(e,n){return null}Rc(e,n){return null}Ec(e){return tR(this.persistence,new ZA,e.initialUser,this.Tt)}Tc(e){return new XA(Kf.qs,this.Tt)}Ic(e){return new lR}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class JR{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=KR.bind(null,this.syncEngine),await NR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new RR}createDatastore(e){const n=Ou(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new dR(i));var i;return function(s,o,a,l){return new mR(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>Bg(this.syncEngine,a,0),o=$g.C()?new $g:new uR,new yR(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const c=new $R(r,i,s,o,a,l);return u&&(c.wc=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=H(e);b("RemoteStore","RemoteStore shutting down."),n.mu.add(5),await Ko(n),n.yu.shutdown(),n.pu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.vc(this.observer.next,e)}error(e){this.observer.error?this.vc(this.observer.error,e):_n("Uncaught Error in snapshot listener:",e.toString())}Pc(){this.muted=!0}vc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=Jw.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{b("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(b("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(k.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Zf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function tD(t,e){t.asyncQueue.verifyOperationInProgress(),b("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await b1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function nD(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rD(t);b("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>Fg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>Fg(e.remoteStore,s)),t.onlineComponents=e}async function rD(t){return t.offlineComponents||(b("FirestoreClient","Using default OfflineComponentProvider"),await tD(t,new XR)),t.offlineComponents}async function J1(t){return t.onlineComponents||(b("FirestoreClient","Using default OnlineComponentProvider"),await nD(t,new JR)),t.onlineComponents}function iD(t){return J1(t).then(e=>e.syncEngine)}async function sD(t){const e=await J1(t),n=e.eventManager;return n.onListen=FR.bind(null,e.syncEngine),n.onUnlisten=BR.bind(null,e.syncEngine),n}function oD(t,e,n={}){const r=new tr;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new ZR({next:h=>{s.enqueueAndForget(()=>xR(i,c)),h.fromCache&&a.source==="server"?l.reject(new P(k.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(h)},error:h=>l.reject(h)}),c=new LR(o,u,{includeMetadataChanges:!0,Ou:!0});return DR(i,c)}(await sD(t),t.asyncQueue,e,n,r)),r.promise}const zg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z1(t,e,n){if(!n)throw new P(k.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function aD(t,e,n,r){if(e===!0&&r===!0)throw new P(k.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Hg(t){if(!M.isDocumentKey(t))throw new P(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function qg(t){if(M.isDocumentKey(t))throw new P(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Mu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":F()}function zi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Mu(t);throw new P(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,aD("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new P(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wg(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IN;switch(n.type){case"gapi":const r=n.client;return new RN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new P(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=zg.get(e);n&&(b("ComponentProvider","Removing Datastore"),zg.delete(e),n.terminate())}(this),Promise.resolve()}}function lD(t,e,n,r={}){var i;const s=(t=zi(t,Uu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&ed("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=qe.MOCK_USER;else{o=z0(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new P(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new qe(l)}t._authCredentials=new CN(new Xw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new wt(this.firestore,e,this._key)}}class Jr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Jr(this.firestore,e,this._query)}}class nr extends Jr{constructor(e,n,r){super(e,n,u1(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new wt(this.firestore,null,new M(e))}withConverter(e){return new nr(this.firestore,e,this._path)}}function In(t,e,...n){if(t=me(t),Z1("collection","path",e),t instanceof Uu){const r=oe.fromString(e,...n);return qg(r),new nr(t,null,r)}{if(!(t instanceof wt||t instanceof nr))throw new P(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return qg(r),new nr(t.firestore,null,r)}}function eE(t,e,...n){if(t=me(t),arguments.length===1&&(e=Jw.R()),Z1("doc","path",e),t instanceof Uu){const r=oe.fromString(e,...n);return Hg(r),new wt(t,null,new M(r))}{if(!(t instanceof wt||t instanceof nr))throw new P(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(oe.fromString(e,...n));return Hg(r),new wt(t.firestore,t instanceof nr?t.converter:null,new M(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.qc=Promise.resolve(),this.Uc=[],this.Kc=!1,this.Gc=[],this.Qc=null,this.jc=!1,this.zc=!1,this.Wc=[],this.ko=new U1(this,"async_queue_retry"),this.Hc=()=>{const n=Oc();n&&b("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ko.Vo()};const e=Oc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Hc)}get isShuttingDown(){return this.Kc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.Kc){this.Kc=!0,this.zc=e||!1;const n=Oc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Hc)}}enqueue(e){if(this.Jc(),this.Kc)return new Promise(()=>{});const n=new tr;return this.Yc(()=>this.Kc&&this.zc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Uc.push(e),this.Zc()))}async Zc(){if(this.Uc.length!==0){try{await this.Uc[0](),this.Uc.shift(),this.ko.reset()}catch(e){if(!Ho(e))throw e;b("AsyncQueue","Operation failed with retryable error: "+e)}this.Uc.length>0&&this.ko.vo(()=>this.Zc())}}Yc(e){const n=this.qc.then(()=>(this.jc=!0,e().catch(r=>{this.Qc=r,this.jc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw _n("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.jc=!1,r))));return this.qc=n,n}enqueueAfterDelay(e,n,r){this.Jc(),this.Wc.indexOf(e)>-1&&(n=0);const i=Jf.createAndSchedule(this,e,n,r,s=>this.Xc(s));return this.Gc.push(i),i}Jc(){this.Qc&&F()}verifyOperationInProgress(){}async ta(){let e;do e=this.qc,await e;while(e!==this.qc)}ea(e){for(const n of this.Gc)if(n.timerId===e)return!0;return!1}na(e){return this.ta().then(()=>{this.Gc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Gc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.ta()})}sa(e){this.Wc.push(e)}Xc(e){const n=this.Gc.indexOf(e);this.Gc.splice(n,1)}}class $u extends Uu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new uD,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||nE(this),this._firestoreClient.terminate()}}function cD(t,e){const n=typeof t=="object"?t:gf(),r=typeof t=="string"?t:e||"(default)",i=cu(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=B0("firestore");s&&lD(i,...s)}return i}function tE(t){return t._firestoreClient||nE(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function nE(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new FN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new eD(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Hi(Ze.fromBase64String(e))}catch(n){throw new P(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Hi(Ze.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ee(this._lat,e._lat)||ee(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=/^__.*__$/;class dD{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new qo(e,this.data,n,this.fieldTransforms)}}class rE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new pr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw F()}}class rp{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.Tt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.ia(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ra(){return this.settings.ra}oa(e){return new rp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.Tt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ua(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.aa(e),i}ha(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.oa({path:r,ca:!1});return i.ia(),i}la(e){return this.oa({path:void 0,ca:!0})}fa(e){return Bl(e,this.settings.methodName,this.settings.da||!1,this.path,this.settings._a)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ia(){if(this.path)for(let e=0;e<this.path.length;e++)this.aa(this.path.get(e))}aa(e){if(e.length===0)throw this.fa("Document fields must not be empty");if(iE(this.ra)&&hD.test(e))throw this.fa('Document fields cannot begin and end with "__"')}}class fD{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.Tt=r||Ou(e)}wa(e,n,r,i=!1){return new rp({ra:e,methodName:n,_a:r,path:Ge.emptyPath(),ca:!1,da:i},this.databaseId,this.Tt,this.ignoreUndefinedProperties)}}function ip(t){const e=t._freezeSettings(),n=Ou(t._databaseId);return new fD(t._databaseId,!!e.ignoreUndefinedProperties,n)}function pD(t,e,n,r,i,s={}){const o=t.wa(s.merge||s.mergeFields?2:0,e,n,i);op("Data must be an object, but it was:",o,r);const a=sE(r,o);let l,u;if(s.merge)l=new gt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=fd(e,h,n);if(!o.contains(d))throw new P(k.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);aE(c,d)||c.push(d)}l=new gt(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new dD(new lt(a),l,u)}class Bu extends Vu{_toFieldTransform(e){if(e.ra!==2)throw e.ra===1?e.fa(`${this._methodName}() can only appear at the top level of your update data`):e.fa(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Bu}}class sp extends Vu{_toFieldTransform(e){return new oA(e.path,new Eo)}isEqual(e){return e instanceof sp}}function mD(t,e,n,r){const i=t.wa(1,e,n);op("Data must be an object, but it was:",i,r);const s=[],o=lt.empty();Yr(r,(l,u)=>{const c=ap(e,l,n);u=me(u);const h=i.ha(c);if(u instanceof Bu)s.push(c);else{const d=Qo(u,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new gt(s);return new rE(o,a,i.fieldTransforms)}function gD(t,e,n,r,i,s){const o=t.wa(1,e,n),a=[fd(e,r,n)],l=[i];if(s.length%2!=0)throw new P(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(fd(e,s[d])),l.push(s[d+1]);const u=[],c=lt.empty();for(let d=a.length-1;d>=0;--d)if(!aE(u,a[d])){const y=a[d];let v=l[d];v=me(v);const w=o.ha(y);if(v instanceof Bu)u.push(y);else{const _=Qo(v,w);_!=null&&(u.push(y),c.set(y,_))}}const h=new gt(u);return new rE(c,h,o.fieldTransforms)}function yD(t,e,n,r=!1){return Qo(n,t.wa(r?4:3,e))}function Qo(t,e){if(oE(t=me(t)))return op("Unsupported field value:",e,t),sE(t,e);if(t instanceof Vu)return function(n,r){if(!iE(r.ra))throw r.fa(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.fa(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ca&&e.ra!==4)throw e.fa("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Qo(o,r.la(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=me(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return rA(r.Tt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Re.fromDate(n);return{timestampValue:Fl(r.Tt,i)}}if(n instanceof Re){const i=new Re(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Fl(r.Tt,i)}}if(n instanceof np)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Hi)return{bytesValue:R1(r.Tt,n._byteString)};if(n instanceof wt){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.fa(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hf(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.fa(`Unsupported field value: ${Mu(n)}`)}(t,e)}function sE(t,e){const n={};return Zw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Yr(t,(r,i)=>{const s=Qo(i,e.ua(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function oE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Re||t instanceof np||t instanceof Hi||t instanceof wt||t instanceof Vu)}function op(t,e,n){if(!oE(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Mu(n);throw r==="an object"?e.fa(t+" a custom object"):e.fa(t+" "+r)}}function fd(t,e,n){if((e=me(e))instanceof Fu)return e._internalPath;if(typeof e=="string")return ap(t,e);throw Bl("Field path arguments must be of type string or ",t,!1,void 0,n)}const vD=new RegExp("[~\\*/\\[\\]]");function ap(t,e,n){if(e.search(vD)>=0)throw Bl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fu(...e.split("."))._internalPath}catch{throw Bl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Bl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new P(k.INVALID_ARGUMENT,a+t+l)}function aE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new wt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new wD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(lp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wD extends lE{data(){return super.data()}}function lp(t,e){return typeof e=="string"?ap(t,e):e instanceof Fu?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ED(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new P(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class up{}class uE extends up{}function SD(t,e,...n){let r=[];e instanceof up&&r.push(e),r=r.concat(n),function(i){const s=i.filter(a=>a instanceof hp).length,o=i.filter(a=>a instanceof cp).length;if(s>1||s>0&&o>0)throw new P(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class cp extends uE{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new cp(e,n,r)}_apply(e){const n=this._parse(e);return cE(e._query,n),new Jr(e.firestore,e.converter,sd(e._query,n))}_parse(e){const n=ip(e.firestore);return function(i,s,o,a,l,u,c){let h;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new P(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Gg(c,u);const d=[];for(const y of c)d.push(Kg(a,i,y));h={arrayValue:{values:d}}}else h=Kg(a,i,c)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Gg(c,u),h=yD(o,s,c,u==="in"||u==="not-in");return Te.create(l,u,h)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class hp extends up{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new hp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Vt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,i){let s=r;const o=i.getFlattenedFilters();for(const a of o)cE(s,a),s=sd(s,a)}(e._query,n),new Jr(e.firestore,e.converter,sd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class dp extends uE{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new dp(e,n)}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new P(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new P(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Ti(i,s);return function(a,l){if(zf(a)===null){const u=Nu(a);u!==null&&hE(a,u,l.field)}}(r,o),o}(e._query,this._field,this._direction);return new Jr(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new ns(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function _D(t,e="asc"){const n=e,r=lp("orderBy",t);return dp._create(r,n)}function Kg(t,e,n){if(typeof(n=me(n))=="string"){if(n==="")throw new P(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!c1(e)&&n.indexOf("/")!==-1)throw new P(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(oe.fromString(n));if(!M.isDocumentKey(r))throw new P(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Eg(t,new M(r))}if(n instanceof wt)return Eg(t,n._key);throw new P(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mu(n)}.`)}function Gg(t,e){if(!Array.isArray(t)||t.length===0)throw new P(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cE(t,e){if(e.isInequality()){const r=Nu(t),i=e.field;if(r!==null&&!r.isEqual(i))throw new P(k.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${i.toString()}'`);const s=zf(t);s!==null&&hE(t,i,s)}const n=function(r,i){for(const s of r)for(const o of s.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new P(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new P(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function hE(t,e,n){if(!n.isEqual(e))throw new P(k.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class kD{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes($i(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw F()}}convertObject(e,n){const r={};return Yr(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new np(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=t1(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vo(e));default:return null}}convertTimestamp(e){const n=ar(e);return new Re(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=oe.fromString(e);ie(L1(r));const i=new yo(r.get(1),r.get(3)),s=new M(r.popFirst(5));return i.isEqual(n)||_n(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TD(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ID extends lE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ga(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(lp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ga extends ID{data(e={}){return super.data(e)}}class CD{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Na(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ga(this._firestore,this._userDataWriter,r.key,r,new Na(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>{const a=new Ga(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:s++}})}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new Ga(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Na(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let l=-1,u=-1;return o.type!==0&&(l=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),u=s.indexOf(o.doc.key)),{type:ND(o.type),doc:a,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ND(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return F()}}class AD extends kD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new wt(this.firestore,null,n)}}function qi(t){t=zi(t,Jr);const e=zi(t.firestore,$u),n=tE(e),r=new AD(e);return ED(t._query),oD(n,t._query).then(i=>new CD(e,r,t,i))}function RD(t,e,n,...r){t=zi(t,wt);const i=zi(t.firestore,$u),s=ip(i);let o;return o=typeof(e=me(e))=="string"||e instanceof Fu?gD(s,"updateDoc",t._key,e,n,r):mD(s,"updateDoc",t._key,e),dE(i,[o.toMutation(t._key,Jt.exists(!0))])}function fp(t,e){const n=zi(t.firestore,$u),r=eE(t),i=TD(t.converter,e);return dE(n,[pD(ip(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Jt.exists(!1))]).then(()=>r)}function dE(t,e){return function(n,r){const i=new tr;return n.asyncQueue.enqueueAndForget(async()=>jR(await iD(n),r,i)),i.promise}(tE(t),e)}function fE(){return new sp("serverTimestamp")}(function(t,e=!0){(function(n){ts=n})(Ji),Fr(new sr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new $u(new NN(n.getProvider("auth-internal")),new xN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new P(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new yo(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),Xt(gg,"3.8.4",t),Xt(gg,"3.8.4","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pE="firebasestorage.googleapis.com",mE="storageBucket",DD=2*60*1e3,xD=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve extends on{constructor(e,n,r=0){super(Lc(e),`Firebase Storage: ${n} (${Lc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ve.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Lc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var ye;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(ye||(ye={}));function Lc(t){return"storage/"+t}function pp(){const t="An unknown error occurred, please check the error payload for server response.";return new ve(ye.UNKNOWN,t)}function PD(t){return new ve(ye.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function OD(t){return new ve(ye.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function LD(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ve(ye.UNAUTHENTICATED,t)}function bD(){return new ve(ye.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function MD(t){return new ve(ye.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function UD(){return new ve(ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function $D(){return new ve(ye.CANCELED,"User canceled the upload/download.")}function FD(t){return new ve(ye.INVALID_URL,"Invalid URL '"+t+"'.")}function VD(t){return new ve(ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function BD(){return new ve(ye.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+mE+"' property when initializing the app?")}function jD(){return new ve(ye.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function zD(){return new ve(ye.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function HD(t){return new ve(ye.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function pd(t){return new ve(ye.INVALID_ARGUMENT,t)}function gE(){return new ve(ye.APP_DELETED,"The Firebase app was deleted.")}function qD(t){return new ve(ye.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function js(t,e){return new ve(ye.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function ws(t){throw new ve(ye.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=yt.makeFromUrl(e,n)}catch{return new yt(e,"")}if(r.path==="")return r;throw VD(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(E){E.path.charAt(E.path.length-1)==="/"&&(E.path_=E.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(E){E.path_=decodeURIComponent(E.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",y=new RegExp(`^https?://${h}/${c}/b/${i}/o${d}`,"i"),v={bucket:1,path:3},w=n===pE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,_="([^?#]*)",p=new RegExp(`^https?://${w}/${i}/${_}`,"i"),g=[{regex:a,indices:l,postModify:s},{regex:y,indices:v,postModify:u},{regex:p,indices:{bucket:1,path:2},postModify:u}];for(let E=0;E<g.length;E++){const N=g[E],R=N.regex.exec(e);if(R){const A=R[N.indices.bucket];let O=R[N.indices.path];O||(O=""),r=new yt(A,O),N.postModify(r);break}}if(r==null)throw FD(e);return r}}class WD{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KD(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(..._){u||(u=!0,e.apply(null,_))}function h(_){i=setTimeout(()=>{i=null,t(y,l())},_)}function d(){s&&clearTimeout(s)}function y(_,...p){if(u){d();return}if(_){d(),c.call(null,_,...p);return}if(l()||o){d(),c.call(null,_,...p);return}r<64&&(r*=2);let g;a===1?(a=2,g=0):g=(r+Math.random())*1e3,h(g)}let v=!1;function w(_){v||(v=!0,d(),!u&&(i!==null?(_||(a=2),clearTimeout(i),h(0)):_||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function GD(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QD(t){return t!==void 0}function YD(t){return typeof t=="object"&&!Array.isArray(t)}function mp(t){return typeof t=="string"||t instanceof String}function Qg(t){return gp()&&t instanceof Blob}function gp(){return typeof Blob<"u"&&!rI()}function Yg(t,e,n,r){if(r<e)throw pd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw pd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function yE(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(xr||(xr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XD(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JD{constructor(e,n,r,i,s,o,a,l,u,c,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((y,v)=>{this.resolve_=y,this.reject_=v,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Aa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===xr.NO_ERROR,l=s.getStatus();if(!a||XD(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===xr.ABORT;r(!1,new Aa(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Aa(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());QD(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=pp();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?gE():$D();o(l)}else{const l=UD();o(l)}};this.canceled_?n(!1,new Aa(!1,null,!0)):this.backoffId_=KD(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&GD(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Aa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function ZD(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ex(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function tx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function nx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function rx(t,e,n,r,i,s,o=!0){const a=yE(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return tx(u,e),ZD(u,n),ex(u,s),nx(u,r),new JD(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function sx(...t){const e=ix();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(gp())return new Blob(t);throw new ve(ye.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function ox(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(t){if(typeof atob>"u")throw HD("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class bc{constructor(e,n){this.data=e,this.contentType=n||null}}function lx(t,e){switch(t){case Gt.RAW:return new bc(vE(e));case Gt.BASE64:case Gt.BASE64URL:return new bc(wE(t,e));case Gt.DATA_URL:return new bc(cx(e),hx(e))}throw pp()}function vE(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function ux(t){let e;try{e=decodeURIComponent(t)}catch{throw js(Gt.DATA_URL,"Malformed data URL.")}return vE(e)}function wE(t,e){switch(t){case Gt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw js(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Gt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw js(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=ax(e)}catch(i){throw i.message.includes("polyfill")?i:js(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class EE{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw js(Gt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=dx(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function cx(t){const e=new EE(t);return e.base64?wE(Gt.BASE64,e.rest):ux(e.rest)}function hx(t){return new EE(t).contentType}function dx(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,n){let r=0,i="";Qg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(Qg(this.data_)){const r=this.data_,i=ox(r,e,n);return i===null?null:new Mn(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Mn(r,!0)}}static getBlob(...e){if(gp()){const n=e.map(r=>r instanceof Mn?r.data_:r);return new Mn(sx.apply(null,n))}else{const n=e.map(o=>mp(o)?lx(Gt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new Mn(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SE(t){let e;try{e=JSON.parse(t)}catch{return null}return YD(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fx(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function px(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function _E(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(t,e){return e}class tt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||mx}}let Ra=null;function gx(t){return!mp(t)||t.length<2?t:_E(t)}function kE(){if(Ra)return Ra;const t=[];t.push(new tt("bucket")),t.push(new tt("generation")),t.push(new tt("metageneration")),t.push(new tt("name","fullPath",!0));function e(s,o){return gx(o)}const n=new tt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new tt("size");return i.xform=r,t.push(i),t.push(new tt("timeCreated")),t.push(new tt("updated")),t.push(new tt("md5Hash",null,!0)),t.push(new tt("cacheControl",null,!0)),t.push(new tt("contentDisposition",null,!0)),t.push(new tt("contentEncoding",null,!0)),t.push(new tt("contentLanguage",null,!0)),t.push(new tt("contentType",null,!0)),t.push(new tt("metadata","customMetadata",!0)),Ra=t,Ra}function yx(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new yt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function vx(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return yx(r,t),r}function TE(t,e,n){const r=SE(e);return r===null?null:vx(t,r,n)}function wx(t,e,n,r){const i=SE(e);if(i===null||!mp(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,d="/b/"+o(c)+"/o/"+o(h),y=yp(d,n,r),v=yE({alt:"media",token:u});return y+v})[0]}function Ex(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class IE{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){if(!t)throw pp()}function Sx(t,e){function n(r,i){const s=TE(t,i,e);return CE(s!==null),s}return n}function _x(t,e){function n(r,i){const s=TE(t,i,e);return CE(s!==null),wx(s,i,t.host,t._protocol)}return n}function NE(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=bD():i=LD():n.getStatus()===402?i=OD(t.bucket):n.getStatus()===403?i=MD(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function kx(t){const e=NE(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=PD(t.path)),s.serverResponse=i.serverResponse,s}return n}function Tx(t,e,n){const r=e.fullServerUrl(),i=yp(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new IE(i,s,_x(t,n),o);return a.errorHandler=kx(e),a}function Ix(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function Cx(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=Ix(null,e)),r}function Nx(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let g="";for(let E=0;E<2;E++)g=g+Math.random().toString().slice(2);return g}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=Cx(e,r,i),c=Ex(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,d=`\r
--`+l+"--",y=Mn.getBlob(h,r,d);if(y===null)throw jD();const v={name:u.fullPath},w=yp(s,t.host,t._protocol),_="POST",p=t.maxUploadRetryTime,f=new IE(w,_,Sx(t,n),p);return f.urlParams=v,f.headers=o,f.body=y.uploadData(),f.errorHandler=NE(e),f}class Ax{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=xr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=xr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=xr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw ws("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw ws("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw ws("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw ws("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw ws("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Rx extends Ax{initXhr(){this.xhr_.responseType="text"}}function AE(){return new Rx}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e,n){this._service=e,n instanceof yt?this._location=n:this._location=yt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new jr(e,n)}get root(){const e=new yt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _E(this._location.path)}get storage(){return this._service}get parent(){const e=fx(this._location.path);if(e===null)return null;const n=new yt(this._location.bucket,e);return new jr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw qD(e)}}function Dx(t,e,n){t._throwIfRoot("uploadBytes");const r=Nx(t.storage,t._location,kE(),new Mn(e,!0),n);return t.storage.makeRequestWithTokens(r,AE).then(i=>({metadata:i,ref:t}))}function xx(t){t._throwIfRoot("getDownloadURL");const e=Tx(t.storage,t._location,kE());return t.storage.makeRequestWithTokens(e,AE).then(n=>{if(n===null)throw zD();return n})}function Px(t,e){const n=px(t._location.path,e),r=new yt(t._location.bucket,n);return new jr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ox(t){return/^[A-Za-z]+:\/\//.test(t)}function Lx(t,e){return new jr(t,e)}function RE(t,e){if(t instanceof vp){const n=t;if(n._bucket==null)throw BD();const r=new jr(n,n._bucket);return e!=null?RE(r,e):r}else return e!==void 0?Px(t,e):t}function bx(t,e){if(e&&Ox(e)){if(t instanceof vp)return Lx(t,e);throw pd("To use ref(service, url), the first argument must be a Storage instance.")}else return RE(t,e)}function Xg(t,e){const n=e==null?void 0:e[mE];return n==null?null:yt.makeFromBucketSpec(n,t)}function Mx(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:z0(i,t.app.options.projectId))}class vp{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=pE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=DD,this._maxUploadRetryTime=xD,this._requests=new Set,i!=null?this._bucket=yt.makeFromBucketSpec(i,this._host):this._bucket=Xg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=yt.makeFromBucketSpec(this._url,e):this._bucket=Xg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Yg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Yg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new jr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new WD(gE());{const o=rx(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Jg="@firebase/storage",Zg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DE="storage";function Ux(t,e,n){return t=me(t),Dx(t,e,n)}function $x(t){return t=me(t),xx(t)}function Fx(t,e){return t=me(t),bx(t,e)}function Vx(t=gf(),e){t=me(t);const r=cu(t,DE).getImmediate({identifier:e}),i=B0("storage");return i&&Bx(r,...i),r}function Bx(t,e,n,r={}){Mx(t,e,n,r)}function jx(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new vp(n,r,i,e,Ji)}function zx(){Fr(new sr(DE,jx,"PUBLIC").setMultipleInstances(!0)),Xt(Jg,Zg,""),Xt(Jg,Zg,"esm2017")}zx();function wp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function xE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hx=xE,PE=new Po("auth","Firebase",xE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey=new pf("@firebase/auth");function Qa(t,...e){ey.logLevel<=J.ERROR&&ey.error(`Auth (${Ji}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,...e){throw Ep(t,...e)}function en(t,...e){return Ep(t,...e)}function qx(t,e,n){const r=Object.assign(Object.assign({},Hx()),{[e]:n});return new Po("auth","Firebase",r).create(e,{appName:t.name})}function Ep(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return PE.create(t,...e)}function $(t,e,...n){if(!t)throw Ep(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qa(e),new Error(e)}function Cn(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty=new Map;function mn(t){Cn(t instanceof Function,"Expected a class definition");let e=ty.get(t);return e?(Cn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ty.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t,e){const n=cu(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Cl(s,e??{}))return i;Bt(i,"already-initialized")}return n.initialize({options:e})}function Kx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Gx(){return ny()==="http:"||ny()==="https:"}function ny(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gx()||iI()||"connection"in navigator)?navigator.onLine:!0}function Yx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cn(n>e,"Short delay should be less than long delay!"),this.isMobile=nI()||sI()}get(){return Qx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sp(t,e){Cn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx=new Yo(3e4,6e4);function Xo(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ss(t,e,n,r,i={}){return LE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Oo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),OE.fetch()(bE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function LE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Xx),e);try{const i=new Zx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Da(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Da(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Da(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Da(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw qx(t,c,u);Bt(t,c)}}catch(i){if(i instanceof on)throw i;Bt(t,"internal-error",{message:String(i)})}}async function Jo(t,e,n,r,i={}){const s=await ss(t,e,n,r,i);return"mfaPendingCredential"in s&&Bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function bE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Sp(t.config,i):`${t.config.apiScheme}://${i}`}class Zx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(en(this.auth,"network-request-failed")),Jx.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Da(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=en(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eP(t,e){return ss(t,"POST","/v1/accounts:delete",e)}async function tP(t,e){return ss(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function nP(t,e=!1){const n=me(t),r=await n.getIdToken(e),i=_p(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:zs(Mc(i.auth_time)),issuedAtTime:zs(Mc(i.iat)),expirationTime:zs(Mc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Mc(t){return Number(t)*1e3}function _p(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qa("JWT malformed, contained fewer than 3 sections"),null;try{const i=F0(n);return i?JSON.parse(i):(Qa("Failed to decode base64 JWT payload"),null)}catch(i){return Qa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function rP(t){const e=_p(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof on&&iP(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function iP({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sP{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ME{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=zs(this.lastLoginAt),this.creationTime=zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Wi(t,tP(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?lP(s.providerUserInfo):[],a=aP(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ME(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function oP(t){const e=me(t);await jl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function aP(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function lP(t){return t.map(e=>{var{providerId:n}=e,r=wp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uP(t,e){const n=await LE(t,{},async()=>{const r=Oo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=bE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",OE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):rP(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uP(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ko;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ko,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Pr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=wp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new sP(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new ME(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return nP(this,e)}reload(){return oP(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Pr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await jl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wi(this,eP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,y=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,_=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:E,isAnonymous:N,providerData:R,stsTokenManager:A}=n;$(g&&A,e,"internal-error");const O=ko.fromJSON(this.name,A);$(typeof g=="string",e,"internal-error"),xn(h,e.name),xn(d,e.name),$(typeof E=="boolean",e,"internal-error"),$(typeof N=="boolean",e,"internal-error"),xn(y,e.name),xn(v,e.name),xn(w,e.name),xn(_,e.name),xn(p,e.name),xn(f,e.name);const X=new Pr({uid:g,auth:e,email:d,emailVerified:E,displayName:h,isAnonymous:N,photoURL:v,phoneNumber:y,tenantId:w,stsTokenManager:O,createdAt:p,lastLoginAt:f});return R&&Array.isArray(R)&&(X.providerData=R.map(z=>Object.assign({},z))),_&&(X._redirectEventId=_),X}static async _fromIdTokenResponse(e,n,r=!1){const i=new ko;i.updateFromServerResponse(n);const s=new Pr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await jl(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}UE.type="NONE";const ry=UE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(t,e,n){return`firebase:${t}:${e}:${n}`}class Ni{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ya(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ya("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Pr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ni(mn(ry),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||mn(ry);const o=Ya(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=Pr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Ni(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ni(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(VE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($E(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jE(e))return"Blackberry";if(zE(e))return"Webos";if(kp(e))return"Safari";if((e.includes("chrome/")||FE(e))&&!e.includes("edge/"))return"Chrome";if(BE(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $E(t=Je()){return/firefox\//i.test(t)}function kp(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function FE(t=Je()){return/crios\//i.test(t)}function VE(t=Je()){return/iemobile/i.test(t)}function BE(t=Je()){return/android/i.test(t)}function jE(t=Je()){return/blackberry/i.test(t)}function zE(t=Je()){return/webos/i.test(t)}function ju(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function cP(t=Je()){var e;return ju(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hP(){return oI()&&document.documentMode===10}function HE(t=Je()){return ju(t)||BE(t)||zE(t)||jE(t)||/windows phone/i.test(t)||VE(t)}function dP(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t,e=[]){let n;switch(t){case"Browser":n=iy(Je());break;case"Worker":n=`${iy(Je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ji}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pP{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sy(this),this.idTokenSubscription=new sy(this),this.beforeStateQueue=new fP(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=PE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ni.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await jl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?me(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Po("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Ni.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return $(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=qE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Zo(t){return me(t)}class sy{constructor(e){this.auth=e,this.observer=null,this.addObserver=fI(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function mP(t,e,n){const r=Zo(t);$(r._canInitEmulator,r,"emulator-config-failed"),$(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=WE(e),{host:o,port:a}=gP(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||yP()}function WE(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gP(t){const e=WE(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:oy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:oy(o)}}}function oy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function vP(t,e){return ss(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wP(t,e){return Jo(t,"POST","/v1/accounts:signInWithPassword",Xo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function EP(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",Xo(t,e))}async function SP(t,e){return Jo(t,"POST","/v1/accounts:signInWithEmailLink",Xo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Tp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new To(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new To(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return wP(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return EP(e,{email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return vP(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return SP(e,{idToken:n,email:this._email,oobCode:this._password});default:Bt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ai(t,e){return Jo(t,"POST","/v1/accounts:signInWithIdp",Xo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _P="http://localhost";class zr extends Tp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new zr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=wp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new zr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ai(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ai(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ai(e,n)}buildRequest(){const e={requestUri:_P,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Oo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function TP(t){const e=Ts(Is(t)).link,n=e?Ts(Is(e)).deep_link_id:null,r=Ts(Is(t)).deep_link_id;return(r?Ts(Is(r)).link:null)||r||n||e||t}class Ip{constructor(e){var n,r,i,s,o,a;const l=Ts(Is(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=kP((i=l.mode)!==null&&i!==void 0?i:null);$(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=TP(e);try{return new Ip(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.providerId=os.PROVIDER_ID}static credential(e,n){return To._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ip.parseLink(n);return $(r,"argument-error"),To._fromEmailAndCode(e,r.code,r.tenantId)}}os.PROVIDER_ID="password";os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea extends KE{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends ea{constructor(){super("facebook.com")}static credential(e){return zr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.FACEBOOK_SIGN_IN_METHOD="facebook.com";Un.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return zr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.GOOGLE_SIGN_IN_METHOD="google.com";$n.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends ea{constructor(){super("github.com")}static credential(e){return zr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vn extends ea{constructor(){super("twitter.com")}static credential(e,n){return zr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Vn.credential(n,r)}catch{return null}}}Vn.TWITTER_SIGN_IN_METHOD="twitter.com";Vn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IP(t,e){return Jo(t,"POST","/v1/accounts:signUp",Xo(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Pr._fromIdTokenResponse(e,r,i),o=ay(r);return new Hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ay(r);return new Hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ay(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl extends on{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,zl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new zl(e,n,r,i)}}function GE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?zl._fromErrorAndOperation(t,s,e,r):s})}async function CP(t,e,n=!1){const r=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NP(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Wi(t,GE(r,i,e,t),n);$(s.idToken,r,"internal-error");const o=_p(s.idToken);$(o,r,"internal-error");const{sub:a}=o;return $(t.uid===a,r,"user-mismatch"),Hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Bt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(t,e,n=!1){const r="signIn",i=await GE(t,r,e),s=await Hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function AP(t,e){return QE(Zo(t),e)}async function RP(t,e,n){const r=Zo(t),i=await IP(r,{returnSecureToken:!0,email:e,password:n}),s=await Hr._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function DP(t,e,n){return AP(me(t),os.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xP(t,e){return ss(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PP(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=me(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Wi(r,xP(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function OP(t,e,n,r){return me(t).onIdTokenChanged(e,n,r)}function LP(t,e,n){return me(t).beforeAuthStateChanged(e,n)}function bP(t){return me(t).signOut()}const Hl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Hl,"1"),this.storage.removeItem(Hl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MP(){const t=Je();return kp(t)||ju(t)}const UP=1e3,$P=10;class XE extends YE{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=MP()&&dP(),this.fallbackToPolling=HE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hP()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,$P):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},UP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}XE.type="LOCAL";const FP=XE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE extends YE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}JE.type="SESSION";const ZE=JE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await VP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Cp("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(){return window}function jP(t){tn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eS(){return typeof tn().WorkerGlobalScope<"u"&&typeof tn().importScripts=="function"}async function zP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function HP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qP(){return eS()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tS="firebaseLocalStorageDb",WP=1,ql="firebaseLocalStorage",nS="fbase_key";class ta{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Hu(t,e){return t.transaction([ql],e?"readwrite":"readonly").objectStore(ql)}function KP(){const t=indexedDB.deleteDatabase(tS);return new ta(t).toPromise()}function gd(){const t=indexedDB.open(tS,WP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ql,{keyPath:nS})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ql)?e(r):(r.close(),await KP(),e(await gd()))})})}async function ly(t,e,n){const r=Hu(t,!0).put({[nS]:e,value:n});return new ta(r).toPromise()}async function GP(t,e){const n=Hu(t,!1).get(e),r=await new ta(n).toPromise();return r===void 0?null:r.value}function uy(t,e){const n=Hu(t,!0).delete(e);return new ta(n).toPromise()}const QP=800,YP=3;class rS{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>YP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return eS()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zu._getInstance(qP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zP(),!this.activeServiceWorker)return;this.sender=new BP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||HP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gd();return await ly(e,Hl,"1"),await uy(e,Hl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ly(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>GP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Hu(i,!1).getAll();return new ta(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),QP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}rS.type="LOCAL";const XP=rS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ZP(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=en("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",JP().appendChild(r)})}function eO(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Yo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tO(t,e){return e?mn(e):($(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Np extends Tp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ai(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ai(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ai(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nO(t){return QE(t.auth,new Np(t),t.bypassAuthState)}function rO(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),NP(n,new Np(t),t.bypassAuthState)}async function iO(t){const{auth:e,user:n}=t;return $(n,e,"internal-error"),CP(n,new Np(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nO;case"linkViaPopup":case"linkViaRedirect":return iO;case"reauthViaPopup":case"reauthViaRedirect":return rO;default:Bt(this.auth,"internal-error")}}resolve(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sO=new Yo(2e3,1e4);class yi extends iS{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,yi.currentPopupAction&&yi.currentPopupAction.cancel(),yi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return $(e,this.auth,"internal-error"),e}async onExecution(){Cn(this.filter.length===1,"Popup operations only handle one event");const e=Cp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,yi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,sO.get())};e()}}yi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO="pendingRedirect",Xa=new Map;class aO extends iS{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Xa.get(this.auth._key());if(!e){try{const r=await lO(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Xa.set(this.auth._key(),e)}return this.bypassAuthState||Xa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lO(t,e){const n=hO(e),r=cO(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uO(t,e){Xa.set(t._key(),e)}function cO(t){return mn(t._redirectPersistence)}function hO(t){return Ya(oO,t.config.apiKey,t.name)}async function dO(t,e,n=!1){const r=Zo(t),i=tO(r,e),o=await new aO(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fO=10*60*1e3;class pO{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!mO(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!sS(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(en(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fO&&this.cachedEventUids.clear(),this.cachedEventUids.has(cy(e))}saveEventToCache(e){this.cachedEventUids.add(cy(e)),this.lastProcessedEventTime=Date.now()}}function cy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sS({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function mO(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sS(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gO(t,e={}){return ss(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yO=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vO=/^https?/;async function wO(t){if(t.config.emulator)return;const{authorizedDomains:e}=await gO(t);for(const n of e)try{if(EO(n))return}catch{}Bt(t,"unauthorized-domain")}function EO(t){const e=md(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!vO.test(n))return!1;if(yO.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SO=new Yo(3e4,6e4);function hy(){const t=tn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _O(t){return new Promise((e,n)=>{var r,i,s;function o(){hy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hy(),n(en(t,"network-request-failed"))},timeout:SO.get()})}if(!((i=(r=tn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=tn().gapi)===null||s===void 0)&&s.load)o();else{const a=eO("iframefcb");return tn()[a]=()=>{gapi.load?o():n(en(t,"network-request-failed"))},ZP(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ja=null,e})}let Ja=null;function kO(t){return Ja=Ja||_O(t),Ja}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TO=new Yo(5e3,15e3),IO="__/auth/iframe",CO="emulator/auth/iframe",NO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},AO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function RO(t){const e=t.config;$(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Sp(e,CO):`https://${t.config.authDomain}/${IO}`,r={apiKey:e.apiKey,appName:t.name,v:Ji},i=AO.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Oo(r).slice(1)}`}async function DO(t){const e=await kO(t),n=tn().gapi;return $(n,t,"internal-error"),e.open({where:document.body,url:RO(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:NO,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=en(t,"network-request-failed"),a=tn().setTimeout(()=>{s(o)},TO.get());function l(){tn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},PO=500,OO=600,LO="_blank",bO="http://localhost";class dy{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function MO(t,e,n,r=PO,i=OO){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},xO),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Je().toLowerCase();n&&(a=FE(u)?LO:n),$E(u)&&(e=e||bO,l.scrollbars="yes");const c=Object.entries(l).reduce((d,[y,v])=>`${d}${y}=${v},`,"");if(cP(u)&&a!=="_self")return UO(e||"",a),new dy(null);const h=window.open(e||"",a,c);$(h,t,"popup-blocked");try{h.focus()}catch{}return new dy(h)}function UO(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O="__/auth/handler",FO="emulator/auth/handler";function fy(t,e,n,r,i,s){$(t.config.authDomain,t,"auth-domain-config-required"),$(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ji,eventId:i};if(e instanceof KE){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof ea){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${VO(t)}?${Oo(a).slice(1)}`}function VO({config:t}){return t.emulator?Sp(t,FO):`https://${t.authDomain}/${$O}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="webStorageSupport";class BO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ZE,this._completeRedirectFn=dO,this._overrideRedirectResult=uO}async _openPopup(e,n,r,i){var s;Cn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=fy(e,n,r,md(),i);return MO(e,o,Cp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),jP(fy(e,n,r,md(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Cn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await DO(e),r=new pO(e);return n.register("authEvent",i=>($(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Uc,{type:Uc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Uc];o!==void 0&&n(!!o),Bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=wO(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return HE()||kp()||ju()}}const jO=BO;var py="@firebase/auth",my="0.21.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HO(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qO(t){Fr(new sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{$(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),$(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:qE(t)},c=new pP(a,l,u);return Kx(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Fr(new sr("auth-internal",e=>{const n=Zo(e.getProvider("auth").getImmediate());return(r=>new zO(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xt(py,my,HO(t)),Xt(py,my,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=5*60,KO=j0("authIdTokenMaxAge")||WO;let gy=null;const GO=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>KO)return;const i=n==null?void 0:n.token;gy!==i&&(gy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function QO(t=gf()){const e=cu(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Wx(t,{popupRedirectResolver:jO,persistence:[XP,FP,ZE]}),r=j0("authTokenSyncURL");if(r){const s=GO(r);LP(n,s,()=>s(n.currentUser)),OP(n,o=>s(o))}const i=V0("auth");return i&&mP(n,`http://${i}`),n}qO("Browser");const YO={apiKey:"AIzaSyB8t3jrb4H6pDYXsPpjUa_QdIenXozmS7c",authDomain:"dealership-636e5.firebaseapp.com",projectId:"dealership-636e5",storageBucket:"dealership-636e5.appspot.com",messagingSenderId:"433299197043",appId:"1:433299197043:web:fef0314ba78af3c2feae06"},Ap=W0(YO),nn=cD(Ap),XO=Vx(Ap),rn=QO(Ap);let xa;const JO=new Uint8Array(16);function ZO(){if(!xa&&(xa=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!xa))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return xa(JO)}const Me=[];for(let t=0;t<256;++t)Me.push((t+256).toString(16).slice(1));function eL(t,e=0){return(Me[t[e+0]]+Me[t[e+1]]+Me[t[e+2]]+Me[t[e+3]]+"-"+Me[t[e+4]]+Me[t[e+5]]+"-"+Me[t[e+6]]+Me[t[e+7]]+"-"+Me[t[e+8]]+Me[t[e+9]]+"-"+Me[t[e+10]]+Me[t[e+11]]+Me[t[e+12]]+Me[t[e+13]]+Me[t[e+14]]+Me[t[e+15]]).toLowerCase()}const tL=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),yy={randomUUID:tL};function nL(t,e,n){if(yy.randomUUID&&!e&&!t)return yy.randomUUID();t=t||{};const r=t.random||(t.rng||ZO)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return eL(r)}function rL(){S.useEffect(()=>{if(document.readyState!="ready"){let i=document.getElementsByClassName("home-images"),s=1;if(s<=i.length)var r=setInterval(()=>{i[s].classList.toggle("active-image"),s++,s===i.length&&(s=1)},3e3)}return()=>clearInterval(r)},[]);const[t,e]=S.useState([]);S.useEffect(()=>{async function r(){const i=In(nn,"bmw"),s=await qi(i);let o=[];s.forEach(a=>{o.push({...a.data(),id:a.id})}),e(o)}return r(),()=>r()},[]);async function n(r,i){const s=document.querySelectorAll(".car-btn");for(let u=0;u<s.length;u++)s[u].classList.remove("active-btn");r.classList.add("active-btn");const o=In(nn,i),a=await qi(o);let l=[];a.forEach(u=>{l.push({...u.data(),id:u.id})}),e(l)}return C("div",{className:"home-div",children:[C("div",{className:"images-wrapper",children:[m("img",{src:HT,className:"home-images active-image",alt:"Home image 1"}),m("img",{src:qT,className:"home-images",alt:"Home image 2"}),m("img",{src:WT,className:"home-images",alt:"Home image 3"})]}),C("div",{className:"car-categories-wrapper",children:[m("div",{className:"bmw-category",children:m("button",{className:"car-btn active-btn",onClick:r=>n(r.target,"bmw"),children:"BMW"})}),m("div",{className:"mercedes-category",children:m("button",{className:"car-btn",onClick:r=>n(r.target,"mercedes"),children:"Mercedes"})}),m("div",{className:"audi-category",children:m("button",{className:"car-btn",onClick:r=>n(r.target,"audi"),children:"Audi"})})]}),m("section",{className:"cars-section",children:t.map(r=>C("div",{className:"cars-div",children:[m("img",{src:r.mainPicture}),C("div",{className:"cars-details",children:[C("p",{children:[r.carBrand.toUpperCase()," ",r.carModel]}),m("span",{children:r.carCategory}),C("span",{children:["$ ",r.carPrice]}),m(ne,{className:"view-details-btn",to:"/carDetails",state:{documentID:r.id,carBrand:r.carBrand,carModel:r.carModel,color1Name:r.carStock.color1Name,color1Spin:r.carStock.color1Spin,color1Stock:r.carStock.color1Stock,color2Name:r.carStock.color2Name,color2Spin:r.carStock.color2Spin,color2Stock:r.carStock.color2Stock,color3Name:r.carStock.color3Name,color3Spin:r.carStock.color3Spin,color3Stock:r.carStock.color3Stock,interiorLink:r.interiorLink,engine:r.carSpecs.engine,transmision:r.carSpecs.transmision,dimensions:r.carSpecs.dimensions,fuel:r.carSpecs.fuel,carPrice:r.carPrice,carStock:{blackStock:r.carStock.blackStock,orangeStock:r.carStock.orangeStock,redStock:r.carStock.redStock,grayStock:r.carStock.grayStock,greenStock:r.carStock.greenStock}},children:"View Details"})]})]},nL()))}),C("footer",{children:[m("h1",{className:"nav-title",children:C(ne,{className:"link-to-home",to:"/",children:[m("span",{style:{color:"rgb(248, 175, 2)"},children:"auto"}),"motor"]})}),C("div",{className:"contact-info-div",children:[m(ne,{to:"mailto:automotor@biz.com",children:"automotor@biz.com"}),m("span",{children:"+38344897236"})]})]})]})}function iL(){return m("div",{className:"about-div",children:C("div",{className:"introduction-div",children:[m("h2",{children:"About Us"}),m("p",{children:"Here at our dealership, we are dedicated to giving outstanding customer service and assisting you in finding the ideal vehicle to suit your needs. From perusing our large inventory to obtaining financing and beyond, our team of experienced and amiable specialists is ready to help you at every step of the road. We take pleasure in providing a large range of top-notch cars at affordable prices, and we work hard to make the car-buying process as simple and fun as we can. We appreciate your decision to make us your go-to automotive partner."}),m("br",{}),C("p",{children:["If you would like to check out some of our cars visit our ",m(ne,{to:"/",children:"Home Page"})]}),C("p",{children:["Or if you have any questions please do not hesitate to send us a message at:",m(ne,{to:"mailto:automotor@biz.com",children:"automotor@biz.com "}),"or through our ",m(ne,{to:"/contact",children:"Contact"})," Page"]})]})})}function sL(){const t=Gr(),[e,n]=S.useState(""),[r,i]=S.useState(""),[s,o]=S.useState("");async function a(l){l.preventDefault();const u=In(nn,"userMessages");await fp(u,{usersName:e,usersEmail:r,usersMessage:s,timeSent:fE()}).then(()=>{alert("We have recieved your message, thank you"),t("/")})}return C("div",{className:"contact-div",children:[m("h2",{children:"Contact Us"}),C("form",{className:"contact-form",onSubmit:l=>a(l),children:[m("input",{type:"text",placeholder:"Your Name",value:e,onChange:l=>n(l.target.value)}),m("input",{type:"email",placeholder:"Your Email",value:r,onChange:l=>i(l.target.value)}),m("textarea",{placeholder:"Your Message",value:s,onChange:l=>o(l.target.value)}),m("button",{className:"send-btn",children:"Send"})]})]})}/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var oS=lL,vy=uL,oL=decodeURIComponent,aL=encodeURIComponent,Pa=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function lL(t,e){if(typeof t!="string")throw new TypeError("argument str must be a string");for(var n={},r=e||{},i=t.split(";"),s=r.decode||oL,o=0;o<i.length;o++){var a=i[o],l=a.indexOf("=");if(!(l<0)){var u=a.substring(0,l).trim();if(n[u]==null){var c=a.substring(l+1,a.length).trim();c[0]==='"'&&(c=c.slice(1,-1)),n[u]=cL(c,s)}}}return n}function uL(t,e,n){var r=n||{},i=r.encode||aL;if(typeof i!="function")throw new TypeError("option encode is invalid");if(!Pa.test(t))throw new TypeError("argument name is invalid");var s=i(e);if(s&&!Pa.test(s))throw new TypeError("argument val is invalid");var o=t+"="+s;if(r.maxAge!=null){var a=r.maxAge-0;if(isNaN(a)||!isFinite(a))throw new TypeError("option maxAge is invalid");o+="; Max-Age="+Math.floor(a)}if(r.domain){if(!Pa.test(r.domain))throw new TypeError("option domain is invalid");o+="; Domain="+r.domain}if(r.path){if(!Pa.test(r.path))throw new TypeError("option path is invalid");o+="; Path="+r.path}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");o+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(o+="; HttpOnly"),r.secure&&(o+="; Secure"),r.sameSite){var l=typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite;switch(l){case!0:o+="; SameSite=Strict";break;case"lax":o+="; SameSite=Lax";break;case"strict":o+="; SameSite=Strict";break;case"none":o+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return o}function cL(t,e){try{return e(t)}catch{return t}}function hL(){return typeof document=="object"&&typeof document.cookie=="string"}function dL(t,e){return typeof t=="string"?oS(t,e):typeof t=="object"&&t!==null?t:{}}function fL(t,e){return typeof e>"u"&&(e=!t||t[0]!=="{"&&t[0]!=="["&&t[0]!=='"'),!e}function wy(t,e){e===void 0&&(e={});var n=pL(t);if(fL(n,e.doNotParse))try{return JSON.parse(n)}catch{}return t}function pL(t){return t&&t[0]==="j"&&t[1]===":"?t.substr(2):t}var Er=globalThis&&globalThis.__assign||function(){return Er=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t},Er.apply(this,arguments)},mL=function(){function t(e,n){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies=dL(e,n),new Promise(function(){r.HAS_DOCUMENT_COOKIE=hL()}).catch(function(){})}return t.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=oS(document.cookie,e))},t.prototype._emitChange=function(e){for(var n=0;n<this.changeListeners.length;++n)this.changeListeners[n](e)},t.prototype.get=function(e,n,r){return n===void 0&&(n={}),this._updateBrowserValues(r),wy(this.cookies[e],n)},t.prototype.getAll=function(e,n){e===void 0&&(e={}),this._updateBrowserValues(n);var r={};for(var i in this.cookies)r[i]=wy(this.cookies[i],e);return r},t.prototype.set=function(e,n,r){var i;typeof n=="object"&&(n=JSON.stringify(n)),this.cookies=Er(Er({},this.cookies),(i={},i[e]=n,i)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=vy(e,n,r)),this._emitChange({name:e,value:n,options:r})},t.prototype.remove=function(e,n){var r=n=Er(Er({},n),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Er({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=vy(e,"",r)),this._emitChange({name:e,value:void 0,options:n})},t.prototype.addChangeListener=function(e){this.changeListeners.push(e)},t.prototype.removeChangeListener=function(e){var n=this.changeListeners.indexOf(e);n>=0&&this.changeListeners.splice(n,1)},t}();const Rp=mL;const gL=new Rp;function yL(){const t=Gr();(!gL.get("auth-token")||!localStorage.getItem("userID")==="HA3XPxDZG8Y5YKZt1VTmgU6bf4a2")&&t("/");const[e,n]=S.useState("YTOfy23xePUwC6JXeZoBiIqod55"),[r,i]=S.useState("rAEG/1mIGnVnYYXjyhLS7Qli168dAEPN9DkswJS2TJ15D75Kcf5L9fmOO0CU0/WRu8TcMoeNKPUvHD+E9sRXyw=="),[s,o]=S.useState("");S.useEffect(()=>{const B=async()=>{const Rn=await fetch("https://api.sirv.com/v2/token",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${btoa(`${e}:${r}`)}`},body:JSON.stringify({clientId:e,clientSecret:r})});if(!Rn.ok)return alert("Error getting token"),null;const Tt=await Rn.json();o(Tt.token)};return B(),()=>B()},[]);const[a,l]=S.useState(""),[u,c]=S.useState(""),[h,d]=S.useState(""),[y,v]=S.useState(""),[w,_]=S.useState(""),[p,f]=S.useState(""),[g,E]=S.useState(""),[N,R]=S.useState(""),[A,O]=S.useState(""),[X,z]=S.useState(void 0),[Z,an]=S.useState(null),[ft,Zr]=S.useState(""),[as,mr]=S.useState(void 0),[jt,D]=S.useState(null),[U,q]=S.useState(""),[le,Ee]=S.useState(void 0),[Pt,ln]=S.useState(null),[zt,An]=S.useState(null),[ei,RL]=S.useState(null);async function lS(B){B.preventDefault();let Rn=document.getElementsByClassName("uploading-div")[0];Rn.style.display="flex";for(let Q=0;Q<Z.length;Q++){const Ie=new FormData;Ie.append("file",Z[Q]),Ie.append("filename",Z[Q].name),Ie.append("content_type",Z[Q].type);const gr=`https://api.sirv.com/v2/files/upload?filename=%2F/${a+"-"+h+"-"+A}/${Ie.get("filename")}`,et=await fetch(gr,{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":Z[Q].type},body:Z[Q]});if(!et.ok){alert(`Error uploading file: ${et.status} ${et.statusText}`);return}console.log("Color 1 File uploaded successfully!")}for(let Q=0;Q<jt.length;Q++){const Ie=new FormData;Ie.append("file",jt[Q]),Ie.append("filename",jt[Q].name),Ie.append("content_type",jt[Q].type);const gr=`https://api.sirv.com/v2/files/upload?filename=%2F/${a+"-"+h+"-"+ft}/${Ie.get("filename")}`,et=await fetch(gr,{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":jt[Q].type},body:jt[Q]});if(!et.ok){alert(`Error uploading file: ${et.status} ${et.statusText}`);return}console.log("Color 2 File uploaded successfully!")}for(let Q=0;Q<Pt.length;Q++){const Ie=new FormData;Ie.append("file",Pt[Q]),Ie.append("filename",Pt[Q].name),Ie.append("content_type",Pt[Q].type);const gr=`https://api.sirv.com/v2/files/upload?filename=%2F/${a+"-"+h+"-"+U}/${Ie.get("filename")}`,et=await fetch(gr,{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":Pt[Q].type},body:Pt[Q]});if(!et.ok){alert(`Error uploading file: ${et.status} ${et.statusText}`);return}console.log("Color 3 File uploaded successfully!")}for(let Q=0;Q<zt.length;Q++){const Ie=new FormData;Ie.append("file",zt[Q]),Ie.append("filename",zt[Q].name),Ie.append("content_type",zt[Q].type);const gr=`https://api.sirv.com/v2/files/upload?filename=%2F/${a+"-"+h}-interior-folder/${Ie.get("filename")}`,et=await fetch(gr,{method:"POST",headers:{Authorization:`Bearer ${s}`,"Content-Type":zt[Q].type},body:zt[Q]});if(!et.ok){alert(`Error uploading file: ${et.status} ${et.statusText}`);return}console.log("Interior File uploaded successfully!")}const Tt=`https://mela05.sirv.com/${a+"-"+h+"-"+A}/${a+"-"+h+"-"+A}.spin?autospin=off&fullscreen=off`,ls=`https://mela05.sirv.com/${a+"-"+h+"-"+ft}/${a+"-"+h+"-"+ft}.spin?autospin=off&fullscreen=off`,na=`https://mela05.sirv.com/${a+"-"+h+"-"+U}/${a+"-"+h+"-"+U}.spin?autospin=off&fullscreen=off`,ra=`https://mela05.sirv.com/${a+"-"+h}-interior-folder/${a+"-"+h}-interior-folder.spin?autospin=off&fullscreen=off`;let us;const xp=Fx(XO,`${a}/${h}/${h}`);await Ux(xp,ei),await $x(xp).then(Q=>us=Q);const uS=In(nn,a);await fp(uS,{carBrand:a,carModel:h,carCategory:u,carPrice:y,mainPicture:us,interiorLink:ra,carSpecs:{engine:w,transmision:p,dimensions:g,fuel:N},carStock:{color1Name:A,color1Stock:X,color1Spin:Tt,color2Name:ft,color2Stock:as,color2Spin:ls,color3Name:U,color3Stock:le,color3Spin:na}}).then(()=>{alert("Car added successfully"),window.location.reload()})}function Dp(B){const Rn=document.querySelector(".left-div"),Tt=document.querySelector(".center-div"),ls=document.querySelector(".right-div"),na=document.querySelector(".next-btn"),ra=document.querySelector(".back-btn"),us=document.querySelector(".add-car-btn");B==="next"?Rn.classList.contains("active-left-div")?(Rn.classList.remove("active-left-div"),Tt.classList.add("active-center-div"),ra.classList.add("active-back-btn")):Tt.classList.contains("active-center-div")&&(Tt.classList.remove("active-center-div"),Tt.classList.add("inactive-center-div"),ls.classList.add("active-right-div"),na.classList.remove("active-next-btn"),us.classList.add("active-back-btn")):B==="prev"&&(Tt.classList.contains("active-center-div")?(Tt.classList.remove("active-center-div"),Rn.classList.add("active-left-div"),ra.classList.remove("active-back-btn")):ls.classList.contains("active-right-div")&&(ls.classList.remove("active-right-div"),Tt.classList.remove("inactive-center-div"),Tt.classList.add("active-center-div"),na.classList.add("active-next-btn"),us.classList.remove("active-back-btn")))}return C("div",{className:"add-car-wrapper",children:[m("div",{className:"uploading-div",children:m("h2",{children:"Adding Car..."})}),C("form",{className:"add-car-form",noValidate:!0,onSubmit:B=>lS(B),children:[C("div",{className:"animation-div",children:[m("div",{className:"left-div active-left-div",children:C("div",{className:"car-details",children:[m("h2",{children:"Car Details"}),m("input",{type:"text",placeholder:"Brand",required:!0,value:a,onChange:B=>l(B.target.value)}),m("input",{type:"text",placeholder:"Model",required:!0,value:h,onChange:B=>d(B.target.value)}),m("input",{type:"text",placeholder:"Category",required:!0,value:u,onChange:B=>c(B.target.value)}),m("input",{type:"text",placeholder:"Price",required:!0,value:y,onChange:B=>v(B.target.value)}),m("label",{children:"Select a main picture"}),m("input",{type:"file",style:{color:"white"}})]})}),m("div",{className:"center-div",children:C("div",{className:"add-car-specs",children:[m("h2",{children:"Car Specs"}),m("input",{type:"text",placeholder:"Engine",required:!0,value:w,onChange:B=>_(B.target.value)}),m("input",{type:"text",placeholder:"Transmision",required:!0,value:p,onChange:B=>f(B.target.value)}),m("input",{type:"text",placeholder:"Fuel",required:!0,value:N,onChange:B=>R(B.target.value)}),m("input",{type:"text",placeholder:"Dimensions",required:!0,value:g,onChange:B=>E(B.target.value)})]})}),m("div",{className:"right-div",children:C("div",{className:"car-stock",children:[m("h2",{children:"Car Stock"}),m("input",{type:"text",placeholder:"Enter Color Name",required:!0,value:A,onChange:B=>O(B.target.value)}),m("input",{type:"text",placeholder:"Enter the stock of the selected color",required:!0,value:X,onChange:B=>z(B.target.value)}),m("input",{type:"file",multiple:!0,required:!0,onChange:B=>an(B.target.value)}),m("input",{type:"text",placeholder:"Enter Color Name",required:!0,value:ft,onChange:B=>Zr(B.target.value)}),m("input",{type:"text",placeholder:"Enter the stock of the selected color",required:!0,value:as,onChange:B=>mr(B.target.value)}),m("input",{type:"file",multiple:!0,required:!0,onChange:B=>D(B.target.value)}),m("input",{type:"text",placeholder:"Enter Color Name",required:!0,value:U,onChange:B=>q(B.target.value)}),m("input",{type:"text",placeholder:"Enter the stock of the selected color",required:!0,value:le,onChange:B=>Ee(B.target.value)}),m("input",{type:"file",multiple:!0,required:!0,onChange:B=>ln(B.target.value)})]})})]}),C("div",{className:"add-car-btns-wrapper",children:[m("button",{className:"back-btn",type:"button",onClick:()=>Dp("prev"),children:"Back"}),m("button",{className:"next-btn active-next-btn",type:"button",onClick:()=>Dp("next"),children:"Next"}),m("button",{className:"add-car-btn",type:"submit",children:"Add Car"})]})]})]})}const aS="/dealership/assets/x-icon-1af68f65.svg";function vL(){let t=Xi(),{carBrand:e,carModel:n,color1Name:r,color1Spin:i,color1Stock:s,color2Name:o,color2Stock:a,color2Spin:l,color3Name:u,color3Stock:c,color3Spin:h,interiorLink:d,engine:y,transmision:v,dimensions:w,fuel:_,carPrice:p,documentID:f}=t.state;const[g,E]=S.useState(r),[N,R]=S.useState(s),[A,O]=S.useState(i);function X(Z,an,ft,Zr){document.querySelectorAll(".switch-car-color-btn").forEach(mr=>mr.classList.remove("selected-color")),Zr.classList.add("selected-color"),E(Z),R(an),O(ft)}function z(){const Z=document.getElementsByClassName("interior-wrapper")[0];Z.classList.contains("active-interior")?(Z.classList.remove("active-interior"),document.documentElement.style.overflowY="scroll",console.log("remove")):(document.documentElement.scrollTo(0,0),Z.classList.add("active-interior"),document.documentElement.style.overflow="hidden",console.log(document.documentElement.style.overflow),console.log("added"))}return m("div",{className:"car-wrapper",children:C("div",{className:"selected-car-details",children:[C("div",{className:"car-canvas",children:[m("script",{src:"https://scripts.sirv.com/sirv.js"}),m("iframe",{className:"car-iframe",src:A,frameBorder:"0"}),C("div",{className:"car-colors",children:[m("div",{className:"switch-car-color-btn selected-color",style:{backgroundColor:r},onClick:Z=>X(r,s,i,Z.target)}),m("div",{className:"switch-car-color-btn",style:{backgroundColor:o},onClick:Z=>X(o,a,l,Z.target)}),m("div",{className:"switch-car-color-btn",style:{backgroundColor:u},onClick:Z=>X(u,c,h,Z.target)})]})]}),m("h2",{className:"car-h2",children:e.toUpperCase()+" "+n}),C("p",{children:["Stock: ",N]}),C("div",{className:"car-specs",children:[C("p",{children:[m("span",{className:"car-specs-span",children:"Engine:"})," ",y]}),C("p",{children:[m("span",{className:"car-specs-span",children:"Transimision:"})," ",v]}),C("p",{children:[m("span",{className:"car-specs-span",children:"Dimensions:"})," ",w]}),C("p",{children:[m("span",{className:"car-specs-span",children:"Fuel:"})," ",_]}),C("p",{children:[m("span",{className:"car-specs-span",children:"Price:"})," $",p]}),C("div",{className:"btns-wrapper",children:[m("button",{className:"interior-btn",onClick:z,children:"View Interior"}),m(ne,{className:"request-test-drive-btn",to:"/reqTestDrive",state:{documentID:f,brand:e,model:n,colorName:g,colorSpin:A,price:p},children:"Request Test Drive"})]}),C("div",{className:"interior-wrapper",children:[m("button",{className:"close-interior-btn",onClick:z,children:m("img",{className:"x-icon",src:aS})}),m("iframe",{className:"interior-iframe",src:d,frameBorder:"0"})]})]})]})})}function wL(){const t=Gr(),e=Xi();let{brand:n,model:r,colorName:i,colorSpin:s,price:o}=e.state;console.log(i,s);const[a,l]=S.useState(""),[u,c]=S.useState(""),[h,d]=S.useState(""),[y,v]=S.useState("Select"),[w,_]=S.useState("Select");async function p(f){f.preventDefault(),(y==="Select"||w==="Select")&&alert("Please Fill Out The Form");const g=document.querySelector(".placing-order-div"),E=document.querySelector(".placing-order-div h1");g.style.display="flex";const N=In(nn,"testDriveRequests");await fp(N,{fullName:a,email:u,phoneNumber:h,purchasePeriod:y,selectedDealership:w,timeRequestWasMade:fE(),carDetails:{carBrand:n,carModel:r,carColor:i,price:o}}).then(()=>{E.innerText="Your request was made successfully. Thank you",setTimeout(()=>{t("/")},1500)})}return C("div",{className:"order-page-wrapper",children:[m("div",{className:"placing-order-div",children:m("h1",{children:"Placing Order..."})}),C("div",{className:"selected-car-spin-wrapper",children:[m("h3",{className:"selected-car-h3",children:"Selected Car:"}),m("script",{src:"https://scripts.sirv.com/sirv.js"}),m("iframe",{src:s,width:"100%",height:"100%",frameBorder:"0"})]}),m("div",{className:"selected-test-drive-car-details",children:m("h2",{children:n.toUpperCase()+" "+r})}),C("form",{className:"order-form",onSubmit:f=>p(f),children:[m("h3",{children:"Please enter your information below"}),m("input",{type:"text",placeholder:"Full Name",required:!0,value:a,onChange:f=>l(f.target.value)}),m("input",{type:"email",placeholder:"Email",required:!0,value:u,onChange:f=>c(f.target.value)}),m("input",{type:"number",placeholder:"Phone Number",required:!0,value:h,onChange:f=>d(f.target.value)}),C("div",{className:"purchase-period-wrapper",children:[m("label",{children:"When do you plan to buy a car?"}),C("select",{onChange:f=>v(f.target.value),children:[m("option",{children:"Select"}),m("option",{children:"1 month"}),m("option",{children:"3 months"}),m("option",{children:"6 months"}),m("option",{children:"12 months"}),m("option",{children:"No Plan"})]})]}),C("div",{className:"select-dealership-wrapper",children:[m("label",{children:"Select Dealership"}),C("select",{onChange:f=>_(f.target.value),children:[m("option",{children:"Select"}),m("option",{children:"Automotor London"}),m("option",{children:"Automotor Washington DC"})]})]}),m("button",{className:"place-order-btn",children:"Place Order"})]})]})}const EL=new Rp;function SL(){const[t,e]=S.useState(localStorage.getItem("isAuth")),n=Gr();S.useEffect(()=>{t&&n("/")},[]);const[r,i]=S.useState(""),[s,o]=S.useState(""),[a,l]=S.useState("");async function u(c){c.preventDefault();try{await DP(rn,r,s).then(h=>{EL.set("auth-token",h.user.refreshToken),localStorage.setItem("name",h.user.displayName),localStorage.setItem("isAuth",!0),localStorage.setItem("userID",h.user.uid),window.location.reload()})}catch(h){switch(h.code){case"auth/user-not-found":l("Email does not exist");break;case"auth/invalid-email":l("Invalid Email!");break;case"auth/wrong-password":l("Incorrect Password");break;case"auth/internal-error":l("There was an internal error");break}}}return C("div",{className:"sign-in-wrapper",children:[m("h2",{children:"Welcome Back!"}),C("form",{className:"sign-in-form",onSubmit:c=>u(c),children:[m("input",{type:"email",placeholder:"Email",required:!0,value:r,onChange:c=>i(c.target.value)}),m("input",{type:"password",placeholder:"Password",rqeuired:!0,value:s,onChange:c=>o(c.target.value)}),m("p",{className:"error",children:a}),m("button",{className:"sign-in-btn",children:"Sign in"}),C("label",{children:["Don't have an account? ",m(ne,{to:"/signUp",children:"Sign Up"})]})]})]})}function _L(){const[t,e]=S.useState(""),[n,r]=S.useState(""),[i,s]=S.useState(""),[o,a]=S.useState(""),l=Gr();async function u(c){c.preventDefault();try{await RP(rn,n,i),await PP(rn.currentUser,{displayName:t}).then(()=>{localStorage.setItem("name",t),alert("Account Created Succesfully"),l("/")})}catch(h){switch(h.code){case"auth/invalid-email":a("Invalid Email");break;case"auth/email-already-in-use":a("Email Already In Use");break;case"auth/weak-password":a("Password must be at least 6 characters long");break}}}return C("div",{className:"sign-up-wrapper",children:[m("h2",{children:"Welcome!"}),C("form",{className:"sign-up-form",onSubmit:c=>u(c),children:[m("input",{type:"text",placeholder:"Full Name",required:!0,value:t,onChange:c=>e(c.target.value)}),m("input",{type:"email",placeholder:"Email",required:!0,value:n,onChange:c=>r(c.target.value)}),m("input",{type:"password",placeholder:"Password",rqeuired:!0,value:i,onChange:c=>s(c.target.value)}),m("p",{className:"error",children:o}),m("button",{className:"sign-up-btn",children:"Sign up"}),C("label",{children:["Already have an account? ",m(ne,{to:"/signIn",children:"Sign in"})]})]})]})}function kL(){const t=Gr();rn.onAuthStateChanged(()=>{(rn.currentUser.uid===null||!rn.currentUser.uid==="HA3XPxDZG8Y5YKZt1VTmgU6bf4a2")&&t("/")});const[e,n]=S.useState([]);return S.useEffect(()=>{async function r(){let i=[];const s=In(nn,"userMessages");await qi(s).then(o=>o.docs.forEach(a=>{i.push({...a.data(),docID:a.id})})),n(i)}return r(),()=>r()},[]),C("div",{className:"users-messages-reader-wrapper",children:[m("h2",{children:"Users' Messages"}),m("div",{className:"messages-wrapper",children:e.map((r,i)=>C("div",{className:"messages",children:[C("div",{className:"user-info",children:[m("h3",{children:r.usersName}),m("p",{children:r.usersEmail})]}),m("div",{className:"message",children:r.usersMessage}),C("p",{children:["Reply to: ",m("a",{href:`mailto:${r.usersEmail}`,children:r.usersEmail})]})]},i))})]})}function TL(){rn.onAuthStateChanged(()=>{(rn.currentUser.uid===null||!rn.currentUser.uid==="HA3XPxDZG8Y5YKZt1VTmgU6bf4a2")&&navigate("/")});const[t,e]=S.useState([]);return S.useEffect(()=>{async function n(){let r=[];const i=In(nn,"testDriveRequests"),s=SD(i,_D("timeRequestWasMade"));await qi(s).then(o=>{o.docs.forEach(a=>{r.push({...a.data(),docID:a.id})}),e(r)})}return n(),()=>n()},[]),C("div",{className:"test-drive-requests-wrapper",children:[m("h2",{id:"test-drive-title",children:"Test Drive Requests"}),m("div",{className:"requests",children:t.map((n,r)=>{let i=n.timeRequestWasMade.toDate(),s=i.getDate(),o,a=i.getFullYear();switch(i.getMonth()){case 0:o="Jan";break;case 1:o="Feb";break;case 2:o="March";break;case 3:o="April";break;case 4:o="May";break;case 5:o="June";break;case 6:o="July";break;case 7:o="Aug";break;case 8:o="Sep";break;case 9:o="Oct";break;case 10:o="Nov";break;case 11:o="Dec";break}let l=i.getTime(),u=Math.floor(l/1e3/60/60%24)+1,c=Math.floor(l/1e3/60%60);return u===24&&(u="00"),c.toString().length===1&&(c=`0${c}`),C("div",{className:"request",children:[C("div",{className:"request-user-info",children:[m("h2",{children:n.fullName}),m("p",{children:n.email})]}),C("div",{className:"requested-car",children:[m("h4",{children:"Requested Car:  "}),C("p",{children:[m("span",{style:{fontWeight:"600"},children:"Brand: "}),n.carDetails.carBrand.toUpperCase()]}),C("p",{children:[m("span",{style:{fontWeight:"600"},children:"Model: "}),n.carDetails.carModel]}),C("p",{children:[m("span",{style:{fontWeight:"600"},children:"Car Color: "}),n.carDetails.carColor]}),C("p",{children:[m("span",{style:{fontWeight:"600"},children:"Rims Color: "}),n.carDetails.rimColor]}),C("p",{children:[m("span",{style:{fontWeight:"600"},children:"Price: "})," $",n.carDetails.price]}),C("p",{children:[m("span",{style:{fontWeight:"600"},children:"Selected Dealership: "}),n.selectedDealership]}),C("p",{children:[m("span",{style:{fontWeight:"600"},children:"User plans to buy a car in: "}),n.purchasePeriod]})]}),m("div",{className:"request-time-wrapper",children:C("p",{children:[m("span",{style:{fontWeight:"600"},children:"Request was created on:"})," ",`${s} ${o} ${a}`,m("span",{style:{fontWeight:"600"},children:" at:"}),u,":",c]})})]},r)})})]})}function IL(){const[t,e]=S.useState([]),[n,r]=S.useState("");S.useEffect(()=>{async function o(){let a=[];const l=In(nn,"bmw");await qi(l).then(u=>{u.docs.forEach(c=>{a.push({...c.data(),docID:c.id})})}),e(a)}return o(),()=>o()},[]);async function i(o,a){const l=document.getElementsByClassName("switch-brand-btn");for(let d=0;d<l.length;d++)l[d].classList.remove("active-btn");o.classList.add("active-btn");const u=In(nn,a),c=await qi(u);let h=[];c.forEach(d=>{h.push({...d.data(),docID:d.id})}),e(h)}async function s(o,a,l,u,c,h,d,y,v){o.preventDefault();const w=document.getElementsByClassName("stock-input"),_=w[0].value,p=w[1].value,f=w[2].value,g=eE(nn,a,l);try{await RD(g,{carStock:{color1Name:u,color1Spin:c,color1Stock:_,color2Name:h,color2Spin:d,color2Stock:p,color3Name:y,color3Spin:v,color3Stock:f}}).then(()=>window.location.reload())}catch(E){r(E.message)}}return C("div",{className:"update-stock-wrapper",children:[m("h2",{className:"stock-updater-title",children:"Stock Updater"}),C("div",{className:"car-brands",children:[m("button",{className:"switch-brand-btn active-btn",onClick:o=>i(o.target,"bmw"),children:"BMW"}),m("button",{className:"switch-brand-btn",onClick:o=>i(o.target,"mercedes"),children:"Mercedes"}),m("button",{className:"switch-brand-btn",onClick:o=>i(o.target,"audi"),children:"Audi"})]}),m("div",{className:"cars",children:t.map((o,a)=>C("div",{className:"cars-stock-div",children:[C("div",{className:"update-stock-cars-details",children:[m("img",{src:o.mainPicture}),m("p",{children:o.carBrand.toUpperCase()+" "+o.carModel}),C("p",{children:["$",o.carPrice]})]}),m("div",{className:"car-stocks",children:C("form",{className:"update-stock-form",onSubmit:l=>s(l,o.carBrand,o.docID,o.carStock.color1Name,o.carStock.color1Spin,o.carStock.color2Name,o.carStock.color2Spin,o.carStock.color3Name,o.carStock.color3Spin),children:[C("label",{children:["Current ",o.carStock.color1Name," Stock: ",m("span",{className:"bold",children:o.carStock.color1Stock})," Update Stock:",m("input",{className:"stock-input",type:"number",onChange:l=>console.log(l.target.value)})]}),C("label",{children:["Current ",o.carStock.color2Name," Stock: ",m("span",{className:"bold",children:o.carStock.color2Stock})," Update Stock:",m("input",{className:"stock-input",type:"number"})]}),C("label",{children:["Current ",o.carStock.color3Name," Stock: ",m("span",{className:"bold",children:o.carStock.color3Stock})," Update Stock:",m("input",{className:"stock-input",type:"number"})]}),m("p",{className:"update-stock-error",children:n}),m("button",{className:"update-stock-btn",children:"Update Stock"})]})})]},a))})]})}const Ey="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAj0lEQVR4nO3VMQrCQBCF4fUAotcRBLGx8l4SvJelpUVOIGgrkjSfpLOc3bCgIa9+wz8zDPNSmpxwRi9fPZoopMOqoLn1UBs1ywVk186Qya2rrQ75Fi441IZs8MSxGII2+AkeNSfZ4o59TcgVuxrXdcMiYhwDeUeNMyT93Lq6IeUKAEu8ouZmRMafcpv7T30Ad6VeKB+46j4AAAAASUVORK5CYII=",CL="/dealership/assets/caret-27ec440f.svg",NL=new Rp;function AL(){const[t,e]=S.useState(localStorage.getItem("isAuth")),[n,r]=S.useState(localStorage.getItem("userID"));async function i(){await bP(rn).then(()=>{localStorage.clear(),NL.remove("auth-token"),window.location.reload()})}function s(a,l){if(console.log(l),l==="nav"){const u=document.getElementsByClassName("more-options")[0],c=document.getElementsByClassName("caret-icon")[0];u.classList.toggle("active-options"),c.classList.toggle("caret-active")}else if(l==="side"){const u=document.getElementsByClassName("sidebar-more-options")[0],c=[...document.querySelectorAll(".sidebar-more-options a")];u.classList.toggle("active-sidebar-more-options"),c.includes(a)&&document.querySelector(".sidebar").classList.toggle("active-sidebar")}}function o(){document.getElementsByClassName("sidebar")[0].classList.toggle("active-sidebar")}return m(MS,{children:C(VT,{children:[C("nav",{className:"navbar",children:[m("h1",{className:"nav-title",children:C(ne,{className:"link-to-home",to:"/#",children:[m("span",{style:{color:"rgb(248, 175, 2)"},children:"auto"}),"motor"]})}),C("ul",{className:"navbar-ul",children:[m("li",{children:m(ne,{className:"navigation-links",to:"/",children:"Home"})}),m("li",{children:m(ne,{className:"navigation-links",to:"/about",children:"About us"})}),m("li",{children:m(ne,{className:"navigation-links",to:"/contact",children:"Contact"})}),!localStorage.getItem("name")&&m("li",{children:m(ne,{to:"/signIn",className:"sign-in-link",children:"Sign In"})}),C("div",{id:"name-more-options-wrapper",children:[localStorage.getItem("name")&&C("label",{className:"name",children:[localStorage.getItem("name"),C("div",{className:"more-options",children:[m(ne,{to:"/usersMessages",onClick:a=>s(a.target,"nav"),children:"User Messages"}),m(ne,{to:"/testDriveRequests",onClick:a=>s(a.target,"nav"),children:"Test Drive Requests"}),m(ne,{to:"/addCar",onClick:a=>s(a.target,"nav"),children:"Add Car"}),m(ne,{to:"/updateStock",onClick:a=>s(a.target,"nav"),children:"Update Cars Stock"})]})]}),t&&n==="HA3XPxDZG8Y5YKZt1VTmgU6bf4a2"&&m("img",{className:"caret-icon",src:CL,alt:"Caret",onClick:a=>s(a.target,"nav")})]}),t&&m("button",{className:"sign-out-btn",onClick:i,children:m("img",{src:Ey,alt:"Sign out button"})})]}),C("div",{className:"hamburger-btn",onClick:o,children:[m("div",{}),m("div",{}),m("div",{})]})]}),C("div",{className:"sidebar",children:[m("button",{className:"close-sidebar-btn",onClick:o,children:m("img",{src:aS,alt:"X icon"})}),C("ul",{className:"sidebar-ul",children:[m("li",{children:m(ne,{onClick:o,to:"/",children:"Home"})}),m("li",{children:m(ne,{onClick:o,to:"/about",children:"About us"})}),m("li",{children:m(ne,{onClick:o,to:"/contact",children:"Contact"})})]}),C("div",{className:"sign-in-sidebar-div",children:[!localStorage.getItem("name")&&m(ne,{to:"/signIn",onClick:o,className:"sign-in-link",children:"Sign In"}),C("div",{id:"sidebar-name-more-options-wrapper",children:[localStorage.getItem("name")&&C("label",{className:"name",children:[localStorage.getItem("name"),C("div",{className:"sidebar-more-options",children:[m(ne,{to:"/usersMessages",onClick:a=>s(a.target,"side"),children:"User Messages"}),m(ne,{to:"/testDriveRequests",onClick:a=>s(a.target,"side"),children:"Test Drive Requests"}),m(ne,{to:"/addCar",onClick:a=>s(a.target,"side"),children:"Add Car"}),m(ne,{to:"/updateStock",onClick:a=>s(a.target,"side"),children:"Update Cars Stock"})]})]})," ",t&&n==="HA3XPxDZG8Y5YKZt1VTmgU6bf4a2"&&m("button",{className:"sidebar-more-options-btn",onClick:a=>s(a.target,"side"),children:"···"})]}),t&&m("button",{className:"sign-out-btn",onClick:i,children:m("img",{src:Ey,alt:"Sign out button"})})]})]}),C(bT,{children:[m(It,{path:"/",exact:!0,element:m(rL,{})}),m(It,{path:"/about",exact:!0,element:m(iL,{})}),m(It,{path:"/contact",exact:!0,element:m(sL,{})}),m(It,{path:"/addCar",exact:!0,element:m(yL,{})}),m(It,{path:"/carDetails",exact:!0,element:m(vL,{})}),m(It,{path:"/reqTestDrive",exact:!0,element:m(wL,{})}),m(It,{path:"/signIn",exact:!0,element:m(SL,{})}),m(It,{path:"/signUp",exact:!0,element:m(_L,{})}),m(It,{path:"/usersMessages",exact:!0,element:m(kL,{})}),m(It,{path:"/testDriveRequests",exact:!0,element:m(TL,{})}),m(It,{path:"/updateStock",exact:!0,element:m(IL,{})})]})]})})}Fc.createRoot(document.getElementById("root")).render(m(AL,{}));
