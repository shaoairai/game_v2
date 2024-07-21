(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function pc(t,e){const n=new Set(t.split(","));return e?s=>n.has(s.toLowerCase()):s=>n.has(s)}const Re={},zs=[],Tt=()=>{},mv=()=>!1,ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),mc=t=>t.startsWith("onUpdate:"),$e=Object.assign,gc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},gv=Object.prototype.hasOwnProperty,he=(t,e)=>gv.call(t,e),J=Array.isArray,Ws=t=>kr(t)==="[object Map]",Fh=t=>kr(t)==="[object Set]",Xu=t=>kr(t)==="[object Date]",te=t=>typeof t=="function",je=t=>typeof t=="string",Vn=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",Uh=t=>(Ie(t)||te(t))&&te(t.then)&&te(t.catch),Bh=Object.prototype.toString,kr=t=>Bh.call(t),_v=t=>kr(t).slice(8,-1),$h=t=>kr(t)==="[object Object]",_c=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,$i=pc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ra=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},vv=/-(\w)/g,Kt=ra(t=>t.replace(vv,(e,n)=>n?n.toUpperCase():"")),yv=/\B([A-Z])/g,vi=ra(t=>t.replace(yv,"-$1").toLowerCase()),oa=ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ba=ra(t=>t?`on${oa(t)}`:""),Hn=(t,e)=>!Object.is(t,e),lo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},gl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},bv=t=>{const e=je(t)?Number(t):NaN;return isNaN(e)?t:e};let Zu;const jh=()=>Zu||(Zu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Gs(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=je(s)?Ev(s):Gs(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(je(t)||Ie(t))return t}const wv=/;(?![^(]*\))/g,Cv=/:([^]+)/,kv=/\/\*[^]*?\*\//g;function Ev(t){const e={};return t.replace(kv,"").split(wv).forEach(n=>{if(n){const s=n.split(Cv);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function ae(t){let e="";if(je(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=ae(t[n]);s&&(e+=s+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Iv=pc(Tv);function Vh(t){return!!t||t===""}function xv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let s=0;n&&s<t.length;s++)n=Co(t[s],e[s]);return n}function Co(t,e){if(t===e)return!0;let n=Xu(t),s=Xu(e);if(n||s)return n&&s?t.getTime()===e.getTime():!1;if(n=Vn(t),s=Vn(e),n||s)return t===e;if(n=J(t),s=J(e),n||s)return n&&s?xv(t,e):!1;if(n=Ie(t),s=Ie(e),n||s){if(!n||!s)return!1;const i=Object.keys(t).length,r=Object.keys(e).length;if(i!==r)return!1;for(const o in t){const l=t.hasOwnProperty(o),a=e.hasOwnProperty(o);if(l&&!a||!l&&a||!Co(t[o],e[o]))return!1}}return String(t)===String(e)}const j=t=>je(t)?t:t==null?"":J(t)||Ie(t)&&(t.toString===Bh||!te(t.toString))?JSON.stringify(t,Hh,2):String(t),Hh=(t,e)=>e&&e.__v_isRef?Hh(t,e.value):Ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[$a(s,r)+" =>"]=i,n),{})}:Fh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>$a(n))}:Vn(e)?$a(e):Ie(e)&&!J(e)&&!$h(e)?String(e):e,$a=(t,e="")=>{var n;return Vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class zh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Sv(t){return new zh(t)}function Rv(t,e=At){e&&e.active&&e.effects.push(t)}function Av(){return At}let fs;class vc{constructor(e,n,s,i){this.fn=e,this.trigger=n,this.scheduler=s,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Rv(this,i)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Is();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Pv(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),xs()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Ln,n=fs;try{return Ln=!0,fs=this,this._runnings++,ef(this),this.fn()}finally{tf(this),this._runnings--,fs=n,Ln=e}}stop(){var e;this.active&&(ef(this),tf(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Pv(t){return t.value}function ef(t){t._trackId++,t._depsLength=0}function tf(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Wh(t.deps[e],t);t.deps.length=t._depsLength}}function Wh(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Ln=!0,_l=0;const Gh=[];function Is(){Gh.push(Ln),Ln=!1}function xs(){const t=Gh.pop();Ln=t===void 0?!0:t}function yc(){_l++}function bc(){for(_l--;!_l&&vl.length;)vl.shift()()}function qh(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const s=t.deps[t._depsLength];s!==e?(s&&Wh(s,t),t.deps[t._depsLength++]=e):t._depsLength++}}const vl=[];function Kh(t,e,n){yc();for(const s of t.keys()){let i;s._dirtyLevel<e&&(i??(i=t.get(s)===s._trackId))&&(s._shouldSchedule||(s._shouldSchedule=s._dirtyLevel===0),s._dirtyLevel=e),s._shouldSchedule&&(i??(i=t.get(s)===s._trackId))&&(s.trigger(),(!s._runnings||s.allowRecurse)&&s._dirtyLevel!==2&&(s._shouldSchedule=!1,s.scheduler&&vl.push(s.scheduler)))}bc()}const Yh=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},yl=new WeakMap,ds=Symbol(""),bl=Symbol("");function gt(t,e,n){if(Ln&&fs){let s=yl.get(t);s||yl.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=Yh(()=>s.delete(n))),qh(fs,i)}}function an(t,e,n,s,i,r){const o=yl.get(t);if(!o)return;let l=[];if(e==="clear")l=[...o.values()];else if(n==="length"&&J(t)){const a=Number(s);o.forEach((c,u)=>{(u==="length"||!Vn(u)&&u>=a)&&l.push(c)})}else switch(n!==void 0&&l.push(o.get(n)),e){case"add":J(t)?_c(n)&&l.push(o.get("length")):(l.push(o.get(ds)),Ws(t)&&l.push(o.get(bl)));break;case"delete":J(t)||(l.push(o.get(ds)),Ws(t)&&l.push(o.get(bl)));break;case"set":Ws(t)&&l.push(o.get(ds));break}yc();for(const a of l)a&&Kh(a,4);bc()}const Nv=pc("__proto__,__v_isRef,__isVue"),Qh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vn)),nf=Dv();function Dv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=_e(this);for(let r=0,o=this.length;r<o;r++)gt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(_e)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Is(),yc();const s=_e(this)[e].apply(this,n);return bc(),xs(),s}}),t}function Ov(t){const e=_e(this);return gt(e,"has",t),e.hasOwnProperty(t)}class Jh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?qv:tp:r?ep:Zh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=J(e);if(!i){if(o&&he(nf,n))return Reflect.get(nf,n,s);if(n==="hasOwnProperty")return Ov}const l=Reflect.get(e,n,s);return(Vn(n)?Qh.has(n):Nv(n))||(i||gt(e,"get",n),r)?l:_t(l)?o&&_c(n)?l:l.value:Ie(l)?i?sp(l):la(l):l}}class Xh extends Jh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const a=ii(r);if(!ko(s)&&!ii(s)&&(r=_e(r),s=_e(s)),!J(e)&&_t(r)&&!_t(s))return a?!1:(r.value=s,!0)}const o=J(e)&&_c(n)?Number(n)<e.length:he(e,n),l=Reflect.set(e,n,s,i);return e===_e(i)&&(o?Hn(s,r)&&an(e,"set",n,s):an(e,"add",n,s)),l}deleteProperty(e,n){const s=he(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&an(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Vn(n)||!Qh.has(n))&&gt(e,"has",n),s}ownKeys(e){return gt(e,"iterate",J(e)?"length":ds),Reflect.ownKeys(e)}}class Lv extends Jh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Mv=new Xh,Fv=new Lv,Uv=new Xh(!0),wc=t=>t,aa=t=>Reflect.getPrototypeOf(t);function Hr(t,e,n=!1,s=!1){t=t.__v_raw;const i=_e(t),r=_e(e);n||(Hn(e,r)&&gt(i,"get",e),gt(i,"get",r));const{has:o}=aa(i),l=s?wc:n?Tc:er;if(o.call(i,e))return l(t.get(e));if(o.call(i,r))return l(t.get(r));t!==i&&t.get(e)}function zr(t,e=!1){const n=this.__v_raw,s=_e(n),i=_e(t);return e||(Hn(t,i)&&gt(s,"has",t),gt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function Wr(t,e=!1){return t=t.__v_raw,!e&&gt(_e(t),"iterate",ds),Reflect.get(t,"size",t)}function sf(t){t=_e(t);const e=_e(this);return aa(e).has.call(e,t)||(e.add(t),an(e,"add",t,t)),this}function rf(t,e){e=_e(e);const n=_e(this),{has:s,get:i}=aa(n);let r=s.call(n,t);r||(t=_e(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?Hn(e,o)&&an(n,"set",t,e):an(n,"add",t,e),this}function of(t){const e=_e(this),{has:n,get:s}=aa(e);let i=n.call(e,t);i||(t=_e(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&an(e,"delete",t,void 0),r}function af(){const t=_e(this),e=t.size!==0,n=t.clear();return e&&an(t,"clear",void 0,void 0),n}function Gr(t,e){return function(s,i){const r=this,o=r.__v_raw,l=_e(o),a=e?wc:t?Tc:er;return!t&&gt(l,"iterate",ds),o.forEach((c,u)=>s.call(i,a(c),a(u),r))}}function qr(t,e,n){return function(...s){const i=this.__v_raw,r=_e(i),o=Ws(r),l=t==="entries"||t===Symbol.iterator&&o,a=t==="keys"&&o,c=i[t](...s),u=n?wc:e?Tc:er;return!e&&gt(r,"iterate",a?bl:ds),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:l?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bv(){const t={get(r){return Hr(this,r)},get size(){return Wr(this)},has:zr,add:sf,set:rf,delete:of,clear:af,forEach:Gr(!1,!1)},e={get(r){return Hr(this,r,!1,!0)},get size(){return Wr(this)},has:zr,add:sf,set:rf,delete:of,clear:af,forEach:Gr(!1,!0)},n={get(r){return Hr(this,r,!0)},get size(){return Wr(this,!0)},has(r){return zr.call(this,r,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Gr(!0,!1)},s={get(r){return Hr(this,r,!0,!0)},get size(){return Wr(this,!0)},has(r){return zr.call(this,r,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:Gr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=qr(r,!1,!1),n[r]=qr(r,!0,!1),e[r]=qr(r,!1,!0),s[r]=qr(r,!0,!0)}),[t,n,e,s]}const[$v,jv,Vv,Hv]=Bv();function Cc(t,e){const n=e?t?Hv:Vv:t?jv:$v;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(he(n,i)&&i in s?n:s,i,r)}const zv={get:Cc(!1,!1)},Wv={get:Cc(!1,!0)},Gv={get:Cc(!0,!1)},Zh=new WeakMap,ep=new WeakMap,tp=new WeakMap,qv=new WeakMap;function Kv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Yv(t){return t.__v_skip||!Object.isExtensible(t)?0:Kv(_v(t))}function la(t){return ii(t)?t:kc(t,!1,Mv,zv,Zh)}function np(t){return kc(t,!1,Uv,Wv,ep)}function sp(t){return kc(t,!0,Fv,Gv,tp)}function kc(t,e,n,s,i){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Yv(t);if(o===0)return t;const l=new Proxy(t,o===2?s:n);return i.set(t,l),l}function qs(t){return ii(t)?qs(t.__v_raw):!!(t&&t.__v_isReactive)}function ii(t){return!!(t&&t.__v_isReadonly)}function ko(t){return!!(t&&t.__v_isShallow)}function ip(t){return qs(t)||ii(t)}function _e(t){const e=t&&t.__v_raw;return e?_e(e):t}function Ec(t){return Object.isExtensible(t)&&wo(t,"__v_skip",!0),t}const er=t=>Ie(t)?la(t):t,Tc=t=>Ie(t)?sp(t):t;class rp{constructor(e,n,s,i){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new vc(()=>e(this._value),()=>co(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=_e(this);return(!e._cacheable||e.effect.dirty)&&Hn(e._value,e._value=e.effect.run())&&co(e,4),op(e),e.effect._dirtyLevel>=2&&co(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Qv(t,e,n=!1){let s,i;const r=te(t);return r?(s=t,i=Tt):(s=t.get,i=t.set),new rp(s,i,r||!i,n)}function op(t){var e;Ln&&fs&&(t=_e(t),qh(fs,(e=t.dep)!=null?e:t.dep=Yh(()=>t.dep=void 0,t instanceof rp?t:void 0)))}function co(t,e=4,n){t=_e(t);const s=t.dep;s&&Kh(s,e)}function _t(t){return!!(t&&t.__v_isRef===!0)}function ap(t){return lp(t,!1)}function Jv(t){return lp(t,!0)}function lp(t,e){return _t(t)?t:new Xv(t,e)}class Xv{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:_e(e),this._value=n?e:er(e)}get value(){return op(this),this._value}set value(e){const n=this.__v_isShallow||ko(e)||ii(e);e=n?e:_e(e),Hn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:er(e),co(this,4))}}function Ks(t){return _t(t)?t.value:t}const Zv={get:(t,e,n)=>Ks(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return _t(i)&&!_t(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function cp(t){return qs(t)?t:new Proxy(t,Zv)}/**
* @vue/runtime-core v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mn(t,e,n,s){try{return s?t(...s):t()}catch(i){ca(i,e,n)}}function xt(t,e,n,s){if(te(t)){const r=Mn(t,e,n,s);return r&&Uh(r)&&r.catch(o=>{ca(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(xt(t[r],e,n,s));return i}function ca(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,l=`https://vuejs.org/error-reference/#runtime-${n}`;for(;r;){const c=r.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,l)===!1)return}r=r.parent}const a=e.appContext.config.errorHandler;if(a){Mn(a,null,10,[t,o,l]);return}}ey(t,n,i,s)}function ey(t,e,n,s=!0){console.error(t)}let tr=!1,wl=!1;const it=[];let Ht=0;const Ys=[];let In=null,rs=0;const up=Promise.resolve();let Ic=null;function fp(t){const e=Ic||up;return t?e.then(this?t.bind(this):t):e}function ty(t){let e=Ht+1,n=it.length;for(;e<n;){const s=e+n>>>1,i=it[s],r=nr(i);r<t||r===t&&i.pre?e=s+1:n=s}return e}function xc(t){(!it.length||!it.includes(t,tr&&t.allowRecurse?Ht+1:Ht))&&(t.id==null?it.push(t):it.splice(ty(t.id),0,t),dp())}function dp(){!tr&&!wl&&(wl=!0,Ic=up.then(pp))}function ny(t){const e=it.indexOf(t);e>Ht&&it.splice(e,1)}function sy(t){J(t)?Ys.push(...t):(!In||!In.includes(t,t.allowRecurse?rs+1:rs))&&Ys.push(t),dp()}function lf(t,e,n=tr?Ht+1:0){for(;n<it.length;n++){const s=it[n];if(s&&s.pre){if(t&&s.id!==t.uid)continue;it.splice(n,1),n--,s()}}}function hp(t){if(Ys.length){const e=[...new Set(Ys)].sort((n,s)=>nr(n)-nr(s));if(Ys.length=0,In){In.push(...e);return}for(In=e,rs=0;rs<In.length;rs++)In[rs]();In=null,rs=0}}const nr=t=>t.id==null?1/0:t.id,iy=(t,e)=>{const n=nr(t)-nr(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function pp(t){wl=!1,tr=!0,it.sort(iy);try{for(Ht=0;Ht<it.length;Ht++){const e=it[Ht];e&&e.active!==!1&&Mn(e,null,14)}}finally{Ht=0,it.length=0,hp(),tr=!1,Ic=null,(it.length||Ys.length)&&pp()}}function ry(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Re;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:d,trim:h}=s[u]||Re;h&&(i=n.map(g=>je(g)?g.trim():g)),d&&(i=n.map(gl))}let l,a=s[l=Ba(e)]||s[l=Ba(Kt(e))];!a&&r&&(a=s[l=Ba(vi(e))]),a&&xt(a,t,6,i);const c=s[l+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[l])return;t.emitted[l]=!0,xt(c,t,6,i)}}function mp(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},l=!1;if(!te(t)){const a=c=>{const u=mp(c,e,!0);u&&(l=!0,$e(o,u))};!n&&e.mixins.length&&e.mixins.forEach(a),t.extends&&a(t.extends),t.mixins&&t.mixins.forEach(a)}return!r&&!l?(Ie(t)&&s.set(t,null),null):(J(r)?r.forEach(a=>o[a]=null):$e(o,r),Ie(t)&&s.set(t,o),o)}function ua(t,e){return!t||!ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),he(t,e[0].toLowerCase()+e.slice(1))||he(t,vi(e))||he(t,e))}let lt=null,fa=null;function Eo(t){const e=lt;return lt=t,fa=t&&t.type.__scopeId||null,e}function vt(t){fa=t}function yt(){fa=null}function ce(t,e=lt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&yf(-1);const r=Eo(e);let o;try{o=t(...i)}finally{Eo(r),s._d&&yf(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function ja(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:l,attrs:a,emit:c,render:u,renderCache:d,data:h,setupState:g,ctx:b,inheritAttrs:x}=t;let D,C;const E=Eo(t);try{if(n.shapeFlag&4){const V=i||s,K=V;D=Vt(u.call(K,V,d,r,g,h,b)),C=a}else{const V=e;D=Vt(V.length>1?V(r,{attrs:a,slots:l,emit:c}):V(r,null)),C=e.props?a:oy(a)}}catch(V){zi.length=0,ca(V,t,1),D=_(zn)}let O=D;if(C&&x!==!1){const V=Object.keys(C),{shapeFlag:K}=O;V.length&&K&7&&(o&&V.some(mc)&&(C=ay(C,o)),O=ms(O,C))}return n.dirs&&(O=ms(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),D=O,Eo(E),D}const oy=t=>{let e;for(const n in t)(n==="class"||n==="style"||ia(n))&&((e||(e={}))[n]=t[n]);return e},ay=(t,e)=>{const n={};for(const s in t)(!mc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function ly(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:l,patchFlag:a}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return s?cf(s,o,c):!!o;if(a&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!ua(c,h))return!0}}}else return(i||l)&&(!l||!l.$stable)?!0:s===o?!1:s?o?cf(s,o,c):!0:!!o;return!1}function cf(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!ua(n,r))return!0}return!1}function cy({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const gp="components";function pe(t,e){return fy(gp,t,!0,e)||t}const uy=Symbol.for("v-ndc");function fy(t,e,n=!0,s=!1){const i=lt||et;if(i){const r=i.type;if(t===gp){const l=r1(r,!1);if(l&&(l===e||l===Kt(e)||l===oa(Kt(e))))return r}const o=uf(i[t]||r[t],e)||uf(i.appContext[t],e);return!o&&s?r:o}}function uf(t,e){return t&&(t[e]||t[Kt(e)]||t[oa(Kt(e))])}const dy=t=>t.__isSuspense;function hy(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):sy(t)}const py=Symbol.for("v-scx"),my=()=>ln(py),Kr={};function ji(t,e,n){return _p(t,e,n)}function _p(t,e,{immediate:n,deep:s,flush:i,once:r,onTrack:o,onTrigger:l}=Re){if(e&&r){const H=e;e=(...ue)=>{H(...ue),K()}}const a=et,c=H=>s===!0?H:as(H,s===!1?1:void 0);let u,d=!1,h=!1;if(_t(t)?(u=()=>t.value,d=ko(t)):qs(t)?(u=()=>c(t),d=!0):J(t)?(h=!0,d=t.some(H=>qs(H)||ko(H)),u=()=>t.map(H=>{if(_t(H))return H.value;if(qs(H))return c(H);if(te(H))return Mn(H,a,2)})):te(t)?e?u=()=>Mn(t,a,2):u=()=>(g&&g(),xt(t,a,3,[b])):u=Tt,e&&s){const H=u;u=()=>as(H())}let g,b=H=>{g=O.onStop=()=>{Mn(H,a,4),g=O.onStop=void 0}},x;if(ma)if(b=Tt,e?n&&xt(e,a,3,[u(),h?[]:void 0,b]):u(),i==="sync"){const H=my();x=H.__watcherHandles||(H.__watcherHandles=[])}else return Tt;let D=h?new Array(t.length).fill(Kr):Kr;const C=()=>{if(!(!O.active||!O.dirty))if(e){const H=O.run();(s||d||(h?H.some((ue,X)=>Hn(ue,D[X])):Hn(H,D)))&&(g&&g(),xt(e,a,3,[H,D===Kr?void 0:h&&D[0]===Kr?[]:D,b]),D=H)}else O.run()};C.allowRecurse=!!e;let E;i==="sync"?E=C:i==="post"?E=()=>pt(C,a&&a.suspense):(C.pre=!0,a&&(C.id=a.uid),E=()=>xc(C));const O=new vc(u,Tt,E),V=Av(),K=()=>{O.stop(),V&&gc(V.effects,O)};return e?n?C():D=O.run():i==="post"?pt(O.run.bind(O),a&&a.suspense):O.run(),x&&x.push(K),K}function gy(t,e,n){const s=this.proxy,i=je(t)?t.includes(".")?vp(s,t):()=>s[t]:t.bind(s,s);let r;te(e)?r=e:(r=e.handler,n=e);const o=Er(this),l=_p(i,r.bind(s),n);return o(),l}function vp(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function as(t,e,n=0,s){if(!Ie(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(s=s||new Set,s.has(t))return t;if(s.add(t),_t(t))as(t.value,e,n,s);else if(J(t))for(let i=0;i<t.length;i++)as(t[i],e,n,s);else if(Fh(t)||Ws(t))t.forEach(i=>{as(i,e,n,s)});else if($h(t))for(const i in t)as(t[i],e,n,s);return t}function de(t,e){if(lt===null)return t;const n=ga(lt)||lt.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[r,o,l,a=Re]=e[i];r&&(te(r)&&(r={mounted:r,updated:r}),r.deep&&as(o),s.push({dir:r,instance:n,value:o,oldValue:void 0,arg:l,modifiers:a}))}return t}function es(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const l=i[o];r&&(l.oldValue=r[o].value);let a=l.dir[s];a&&(Is(),xt(a,n,8,[t.el,l,t,e]),xs())}}const Ls=Symbol("_leaveCb"),Yr=Symbol("_enterCb");function _y(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Cp(()=>{t.isMounted=!0}),Ep(()=>{t.isUnmounting=!0}),t}const Et=[Function,Array],vy={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Et,onEnter:Et,onAfterEnter:Et,onEnterCancelled:Et,onBeforeLeave:Et,onLeave:Et,onAfterLeave:Et,onLeaveCancelled:Et,onBeforeAppear:Et,onAppear:Et,onAfterAppear:Et,onAppearCancelled:Et};function yy(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Cl(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:l,onEnter:a,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:d,onLeave:h,onAfterLeave:g,onLeaveCancelled:b,onBeforeAppear:x,onAppear:D,onAfterAppear:C,onAppearCancelled:E}=e,O=String(t.key),V=yy(n,t),K=(X,se)=>{X&&xt(X,s,9,se)},H=(X,se)=>{const me=se[1];K(X,se),J(X)?X.every(Ve=>Ve.length<=1)&&me():X.length<=1&&me()},ue={mode:r,persisted:o,beforeEnter(X){let se=l;if(!n.isMounted)if(i)se=x||l;else return;X[Ls]&&X[Ls](!0);const me=V[O];me&&Us(t,me)&&me.el[Ls]&&me.el[Ls](),K(se,[X])},enter(X){let se=a,me=c,Ve=u;if(!n.isMounted)if(i)se=D||a,me=C||c,Ve=E||u;else return;let G=!1;const be=X[Yr]=ot=>{G||(G=!0,ot?K(Ve,[X]):K(me,[X]),ue.delayedLeave&&ue.delayedLeave(),X[Yr]=void 0)};se?H(se,[X,be]):be()},leave(X,se){const me=String(t.key);if(X[Yr]&&X[Yr](!0),n.isUnmounting)return se();K(d,[X]);let Ve=!1;const G=X[Ls]=be=>{Ve||(Ve=!0,se(),be?K(b,[X]):K(g,[X]),X[Ls]=void 0,V[me]===t&&delete V[me])};V[me]=t,h?H(h,[X,G]):G()},clone(X){return Cl(X,e,n,s)}};return ue}function kl(t,e){t.shapeFlag&6&&t.component?kl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function yp(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const l=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===re?(o.patchFlag&128&&i++,s=s.concat(yp(o.children,e,l))):(e||o.type!==zn)&&s.push(l!=null?ms(o,{key:l}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Sc(t,e){return te(t)?$e({name:t.name},e,{setup:t}):t}const uo=t=>!!t.type.__asyncLoader,bp=t=>t.type.__isKeepAlive;function by(t,e){wp(t,"a",e)}function wy(t,e){wp(t,"da",e)}function wp(t,e,n=et){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(da(e,s,n),n){let i=n.parent;for(;i&&i.parent;)bp(i.parent.vnode)&&Cy(s,e,n,i),i=i.parent}}function Cy(t,e,n,s){const i=da(e,t,s,!0);Tp(()=>{gc(s[e],i)},n)}function da(t,e,n=et,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Is();const l=Er(n),a=xt(e,n,t,o);return l(),xs(),a});return s?i.unshift(r):i.push(r),r}}const mn=t=>(e,n=et)=>(!ma||t==="sp")&&da(t,(...s)=>e(...s),n),ky=mn("bm"),Cp=mn("m"),Ey=mn("bu"),kp=mn("u"),Ep=mn("bum"),Tp=mn("um"),Ty=mn("sp"),Iy=mn("rtg"),xy=mn("rtc");function Sy(t,e=et){da("ec",t,e)}function Pe(t,e,n,s){let i;const r=n&&n[s];if(J(t)||je(t)){i=new Array(t.length);for(let o=0,l=t.length;o<l;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ie(t))if(t[Symbol.iterator])i=Array.from(t,(o,l)=>e(o,l,void 0,r&&r[l]));else{const o=Object.keys(t);i=new Array(o.length);for(let l=0,a=o.length;l<a;l++){const c=o[l];i[l]=e(t[c],c,l,r&&r[l])}}else i=[];return n&&(n[s]=i),i}const El=t=>t?Up(t)?ga(t)||t.proxy:El(t.parent):null,Vi=$e(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>El(t.parent),$root:t=>El(t.root),$emit:t=>t.emit,$options:t=>Rc(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,xc(t.update)}),$nextTick:t=>t.n||(t.n=fp.bind(t.proxy)),$watch:t=>gy.bind(t)}),Va=(t,e)=>t!==Re&&!t.__isScriptSetup&&he(t,e),Ry={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:l,appContext:a}=t;let c;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Va(s,e))return o[e]=1,s[e];if(i!==Re&&he(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&he(c,e))return o[e]=3,r[e];if(n!==Re&&he(n,e))return o[e]=4,n[e];Tl&&(o[e]=0)}}const u=Vi[e];let d,h;if(u)return e==="$attrs"&&gt(t,"get",e),u(t);if((d=l.__cssModules)&&(d=d[e]))return d;if(n!==Re&&he(n,e))return o[e]=4,n[e];if(h=a.config.globalProperties,he(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Va(i,e)?(i[e]=n,!0):s!==Re&&he(s,e)?(s[e]=n,!0):he(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let l;return!!n[o]||t!==Re&&he(t,o)||Va(e,o)||(l=r[0])&&he(l,o)||he(s,o)||he(Vi,o)||he(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:he(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ff(t){return J(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tl=!0;function Ay(t){const e=Rc(t),n=t.proxy,s=t.ctx;Tl=!1,e.beforeCreate&&df(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:l,provide:a,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:g,updated:b,activated:x,deactivated:D,beforeDestroy:C,beforeUnmount:E,destroyed:O,unmounted:V,render:K,renderTracked:H,renderTriggered:ue,errorCaptured:X,serverPrefetch:se,expose:me,inheritAttrs:Ve,components:G,directives:be,filters:ot}=e;if(c&&Py(c,s,null),o)for(const Ce in o){const ve=o[Ce];te(ve)&&(s[Ce]=ve.bind(n))}if(i){const Ce=i.call(n,n);Ie(Ce)&&(t.data=la(Ce))}if(Tl=!0,r)for(const Ce in r){const ve=r[Ce],Zt=te(ve)?ve.bind(n,n):te(ve.get)?ve.get.bind(n,n):Tt,yn=!te(ve)&&te(ve.set)?ve.set.bind(n):Tt,Bt=Qe({get:Zt,set:yn});Object.defineProperty(s,Ce,{enumerable:!0,configurable:!0,get:()=>Bt.value,set:dt=>Bt.value=dt})}if(l)for(const Ce in l)Ip(l[Ce],s,n,Ce);if(a){const Ce=te(a)?a.call(n):a;Reflect.ownKeys(Ce).forEach(ve=>{fo(ve,Ce[ve])})}u&&df(u,t,"c");function Be(Ce,ve){J(ve)?ve.forEach(Zt=>Ce(Zt.bind(n))):ve&&Ce(ve.bind(n))}if(Be(ky,d),Be(Cp,h),Be(Ey,g),Be(kp,b),Be(by,x),Be(wy,D),Be(Sy,X),Be(xy,H),Be(Iy,ue),Be(Ep,E),Be(Tp,V),Be(Ty,se),J(me))if(me.length){const Ce=t.exposed||(t.exposed={});me.forEach(ve=>{Object.defineProperty(Ce,ve,{get:()=>n[ve],set:Zt=>n[ve]=Zt})})}else t.exposed||(t.exposed={});K&&t.render===Tt&&(t.render=K),Ve!=null&&(t.inheritAttrs=Ve),G&&(t.components=G),be&&(t.directives=be)}function Py(t,e,n=Tt){J(t)&&(t=Il(t));for(const s in t){const i=t[s];let r;Ie(i)?"default"in i?r=ln(i.from||s,i.default,!0):r=ln(i.from||s):r=ln(i),_t(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function df(t,e,n){xt(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ip(t,e,n,s){const i=s.includes(".")?vp(n,s):()=>n[s];if(je(t)){const r=e[t];te(r)&&ji(i,r)}else if(te(t))ji(i,t.bind(n));else if(Ie(t))if(J(t))t.forEach(r=>Ip(r,e,n,s));else{const r=te(t.handler)?t.handler.bind(n):e[t.handler];te(r)&&ji(i,r,t)}}function Rc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,l=r.get(e);let a;return l?a=l:!i.length&&!n&&!s?a=e:(a={},i.length&&i.forEach(c=>To(a,c,o,!0)),To(a,e,o)),Ie(e)&&r.set(e,a),a}function To(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&To(t,r,n,!0),i&&i.forEach(o=>To(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const l=Ny[o]||n&&n[o];t[o]=l?l(t[o],e[o]):e[o]}return t}const Ny={data:hf,props:pf,emits:pf,methods:Mi,computed:Mi,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:Mi,directives:Mi,watch:Oy,provide:hf,inject:Dy};function hf(t,e){return e?t?function(){return $e(te(t)?t.call(this,this):t,te(e)?e.call(this,this):e)}:e:t}function Dy(t,e){return Mi(Il(t),Il(e))}function Il(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function at(t,e){return t?[...new Set([].concat(t,e))]:e}function Mi(t,e){return t?$e(Object.create(null),t,e):e}function pf(t,e){return t?J(t)&&J(e)?[...new Set([...t,...e])]:$e(Object.create(null),ff(t),ff(e??{})):e}function Oy(t,e){if(!t)return e;if(!e)return t;const n=$e(Object.create(null),t);for(const s in e)n[s]=at(t[s],e[s]);return n}function xp(){return{app:null,config:{isNativeTag:mv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ly=0;function My(t,e){return function(s,i=null){te(s)||(s=$e({},s)),i!=null&&!Ie(i)&&(i=null);const r=xp(),o=new WeakSet;let l=!1;const a=r.app={_uid:Ly++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:a1,get config(){return r.config},set config(c){},use(c,...u){return o.has(c)||(c&&te(c.install)?(o.add(c),c.install(a,...u)):te(c)&&(o.add(c),c(a,...u))),a},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),a},component(c,u){return u?(r.components[c]=u,a):r.components[c]},directive(c,u){return u?(r.directives[c]=u,a):r.directives[c]},mount(c,u,d){if(!l){const h=_(s,i);return h.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),u&&e?e(h,c):t(h,c,d),l=!0,a._container=c,c.__vue_app__=a,ga(h.component)||h.component.proxy}},unmount(){l&&(t(null,a._container),delete a._container.__vue_app__)},provide(c,u){return r.provides[c]=u,a},runWithContext(c){const u=Hi;Hi=a;try{return c()}finally{Hi=u}}};return a}}let Hi=null;function fo(t,e){if(et){let n=et.provides;const s=et.parent&&et.parent.provides;s===n&&(n=et.provides=Object.create(s)),n[t]=e}}function ln(t,e,n=!1){const s=et||lt;if(s||Hi){const i=s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:Hi._context.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&te(e)?e.call(s&&s.proxy):e}}function Fy(t,e,n,s=!1){const i={},r={};wo(r,pa,1),t.propsDefaults=Object.create(null),Sp(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:np(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function Uy(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,l=_e(i),[a]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(ua(t.emitsOptions,h))continue;const g=e[h];if(a)if(he(r,h))g!==r[h]&&(r[h]=g,c=!0);else{const b=Kt(h);i[b]=xl(a,l,b,g,t,!1)}else g!==r[h]&&(r[h]=g,c=!0)}}}else{Sp(t,e,i,r)&&(c=!0);let u;for(const d in l)(!e||!he(e,d)&&((u=vi(d))===d||!he(e,u)))&&(a?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=xl(a,l,d,void 0,t,!0)):delete i[d]);if(r!==l)for(const d in r)(!e||!he(e,d))&&(delete r[d],c=!0)}c&&an(t,"set","$attrs")}function Sp(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,l;if(e)for(let a in e){if($i(a))continue;const c=e[a];let u;i&&he(i,u=Kt(a))?!r||!r.includes(u)?n[u]=c:(l||(l={}))[u]=c:ua(t.emitsOptions,a)||(!(a in s)||c!==s[a])&&(s[a]=c,o=!0)}if(r){const a=_e(n),c=l||Re;for(let u=0;u<r.length;u++){const d=r[u];n[d]=xl(i,a,d,c[d],t,!he(c,d))}}return o}function xl(t,e,n,s,i,r){const o=t[n];if(o!=null){const l=he(o,"default");if(l&&s===void 0){const a=o.default;if(o.type!==Function&&!o.skipFactory&&te(a)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Er(i);s=c[n]=a.call(null,e),u()}}else s=a}o[0]&&(r&&!l?s=!1:o[1]&&(s===""||s===vi(n))&&(s=!0))}return s}function Rp(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},l=[];let a=!1;if(!te(t)){const u=d=>{a=!0;const[h,g]=Rp(d,e,!0);$e(o,h),g&&l.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!a)return Ie(t)&&s.set(t,zs),zs;if(J(r))for(let u=0;u<r.length;u++){const d=Kt(r[u]);mf(d)&&(o[d]=Re)}else if(r)for(const u in r){const d=Kt(u);if(mf(d)){const h=r[u],g=o[d]=J(h)||te(h)?{type:h}:$e({},h);if(g){const b=vf(Boolean,g.type),x=vf(String,g.type);g[0]=b>-1,g[1]=x<0||b<x,(b>-1||he(g,"default"))&&l.push(d)}}}const c=[o,l];return Ie(t)&&s.set(t,c),c}function mf(t){return t[0]!=="$"&&!$i(t)}function gf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function _f(t,e){return gf(t)===gf(e)}function vf(t,e){return J(e)?e.findIndex(n=>_f(n,t)):te(e)&&_f(e,t)?0:-1}const Ap=t=>t[0]==="_"||t==="$stable",Ac=t=>J(t)?t.map(Vt):[Vt(t)],By=(t,e,n)=>{if(e._n)return e;const s=ce((...i)=>Ac(e(...i)),n);return s._c=!1,s},Pp=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Ap(i))continue;const r=t[i];if(te(r))e[i]=By(i,r,s);else if(r!=null){const o=Ac(r);e[i]=()=>o}}},Np=(t,e)=>{const n=Ac(e);t.slots.default=()=>n},$y=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=_e(e),wo(e,"_",n)):Pp(e,t.slots={})}else t.slots={},e&&Np(t,e);wo(t.slots,pa,1)},jy=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Re;if(s.shapeFlag&32){const l=e._;l?n&&l===1?r=!1:($e(i,e),!n&&l===1&&delete i._):(r=!e.$stable,Pp(e,i)),o=e}else e&&(Np(t,e),o={default:1});if(r)for(const l in i)!Ap(l)&&o[l]==null&&delete i[l]};function Sl(t,e,n,s,i=!1){if(J(t)){t.forEach((h,g)=>Sl(h,e&&(J(e)?e[g]:e),n,s,i));return}if(uo(s)&&!i)return;const r=s.shapeFlag&4?ga(s.component)||s.component.proxy:s.el,o=i?null:r,{i:l,r:a}=t,c=e&&e.r,u=l.refs===Re?l.refs={}:l.refs,d=l.setupState;if(c!=null&&c!==a&&(je(c)?(u[c]=null,he(d,c)&&(d[c]=null)):_t(c)&&(c.value=null)),te(a))Mn(a,l,12,[o,u]);else{const h=je(a),g=_t(a);if(h||g){const b=()=>{if(t.f){const x=h?he(d,a)?d[a]:u[a]:a.value;i?J(x)&&gc(x,r):J(x)?x.includes(r)||x.push(r):h?(u[a]=[r],he(d,a)&&(d[a]=u[a])):(a.value=[r],t.k&&(u[t.k]=a.value))}else h?(u[a]=o,he(d,a)&&(d[a]=o)):g&&(a.value=o,t.k&&(u[t.k]=o))};o?(b.id=-1,pt(b,n)):b()}}}const pt=hy;function Vy(t){return Hy(t)}function Hy(t,e){const n=jh();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:l,createComment:a,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:g=Tt,insertStaticContent:b}=t,x=(p,m,w,I=null,k=null,N=null,F=void 0,P=null,L=!!m.dynamicChildren)=>{if(p===m)return;p&&!Us(p,m)&&(I=T(p),dt(p,k,N,!0),p=null),m.patchFlag===-2&&(L=!1,m.dynamicChildren=null);const{type:R,ref:$,shapeFlag:Y}=m;switch(R){case ha:D(p,m,w,I);break;case zn:C(p,m,w,I);break;case za:p==null&&E(m,w,I,F);break;case re:G(p,m,w,I,k,N,F,P,L);break;default:Y&1?K(p,m,w,I,k,N,F,P,L):Y&6?be(p,m,w,I,k,N,F,P,L):(Y&64||Y&128)&&R.process(p,m,w,I,k,N,F,P,L,W)}$!=null&&k&&Sl($,p&&p.ref,N,m||p,!m)},D=(p,m,w,I)=>{if(p==null)s(m.el=l(m.children),w,I);else{const k=m.el=p.el;m.children!==p.children&&c(k,m.children)}},C=(p,m,w,I)=>{p==null?s(m.el=a(m.children||""),w,I):m.el=p.el},E=(p,m,w,I)=>{[p.el,p.anchor]=b(p.children,m,w,I,p.el,p.anchor)},O=({el:p,anchor:m},w,I)=>{let k;for(;p&&p!==m;)k=h(p),s(p,w,I),p=k;s(m,w,I)},V=({el:p,anchor:m})=>{let w;for(;p&&p!==m;)w=h(p),i(p),p=w;i(m)},K=(p,m,w,I,k,N,F,P,L)=>{m.type==="svg"?F="svg":m.type==="math"&&(F="mathml"),p==null?H(m,w,I,k,N,F,P,L):se(p,m,k,N,F,P,L)},H=(p,m,w,I,k,N,F,P)=>{let L,R;const{props:$,shapeFlag:Y,transition:q,dirs:ee}=p;if(L=p.el=o(p.type,N,$&&$.is,$),Y&8?u(L,p.children):Y&16&&X(p.children,L,null,I,k,Ha(p,N),F,P),ee&&es(p,null,I,"created"),ue(L,p,p.scopeId,F,I),$){for(const ke in $)ke!=="value"&&!$i(ke)&&r(L,ke,null,$[ke],N,p.children,I,k,st);"value"in $&&r(L,"value",null,$.value,N),(R=$.onVnodeBeforeMount)&&jt(R,I,p)}ee&&es(p,null,I,"beforeMount");const fe=zy(k,q);fe&&q.beforeEnter(L),s(L,m,w),((R=$&&$.onVnodeMounted)||fe||ee)&&pt(()=>{R&&jt(R,I,p),fe&&q.enter(L),ee&&es(p,null,I,"mounted")},k)},ue=(p,m,w,I,k)=>{if(w&&g(p,w),I)for(let N=0;N<I.length;N++)g(p,I[N]);if(k){let N=k.subTree;if(m===N){const F=k.vnode;ue(p,F,F.scopeId,F.slotScopeIds,k.parent)}}},X=(p,m,w,I,k,N,F,P,L=0)=>{for(let R=L;R<p.length;R++){const $=p[R]=P?xn(p[R]):Vt(p[R]);x(null,$,m,w,I,k,N,F,P)}},se=(p,m,w,I,k,N,F)=>{const P=m.el=p.el;let{patchFlag:L,dynamicChildren:R,dirs:$}=m;L|=p.patchFlag&16;const Y=p.props||Re,q=m.props||Re;let ee;if(w&&ts(w,!1),(ee=q.onVnodeBeforeUpdate)&&jt(ee,w,m,p),$&&es(m,p,w,"beforeUpdate"),w&&ts(w,!0),R?me(p.dynamicChildren,R,P,w,I,Ha(m,k),N):F||ve(p,m,P,null,w,I,Ha(m,k),N,!1),L>0){if(L&16)Ve(P,m,Y,q,w,I,k);else if(L&2&&Y.class!==q.class&&r(P,"class",null,q.class,k),L&4&&r(P,"style",Y.style,q.style,k),L&8){const fe=m.dynamicProps;for(let ke=0;ke<fe.length;ke++){const Oe=fe[ke],qe=Y[Oe],Rt=q[Oe];(Rt!==qe||Oe==="value")&&r(P,Oe,qe,Rt,k,p.children,w,I,st)}}L&1&&p.children!==m.children&&u(P,m.children)}else!F&&R==null&&Ve(P,m,Y,q,w,I,k);((ee=q.onVnodeUpdated)||$)&&pt(()=>{ee&&jt(ee,w,m,p),$&&es(m,p,w,"updated")},I)},me=(p,m,w,I,k,N,F)=>{for(let P=0;P<m.length;P++){const L=p[P],R=m[P],$=L.el&&(L.type===re||!Us(L,R)||L.shapeFlag&70)?d(L.el):w;x(L,R,$,null,I,k,N,F,!0)}},Ve=(p,m,w,I,k,N,F)=>{if(w!==I){if(w!==Re)for(const P in w)!$i(P)&&!(P in I)&&r(p,P,w[P],null,F,m.children,k,N,st);for(const P in I){if($i(P))continue;const L=I[P],R=w[P];L!==R&&P!=="value"&&r(p,P,R,L,F,m.children,k,N,st)}"value"in I&&r(p,"value",w.value,I.value,F)}},G=(p,m,w,I,k,N,F,P,L)=>{const R=m.el=p?p.el:l(""),$=m.anchor=p?p.anchor:l("");let{patchFlag:Y,dynamicChildren:q,slotScopeIds:ee}=m;ee&&(P=P?P.concat(ee):ee),p==null?(s(R,w,I),s($,w,I),X(m.children||[],w,$,k,N,F,P,L)):Y>0&&Y&64&&q&&p.dynamicChildren?(me(p.dynamicChildren,q,w,k,N,F,P),(m.key!=null||k&&m===k.subTree)&&Dp(p,m,!0)):ve(p,m,w,$,k,N,F,P,L)},be=(p,m,w,I,k,N,F,P,L)=>{m.slotScopeIds=P,p==null?m.shapeFlag&512?k.ctx.activate(m,w,I,F,L):ot(m,w,I,k,N,F,L):Xt(p,m,L)},ot=(p,m,w,I,k,N,F)=>{const P=p.component=Zy(p,I,k);if(bp(p)&&(P.ctx.renderer=W),t1(P),P.asyncDep){if(k&&k.registerDep(P,Be),!p.el){const L=P.subTree=_(zn);C(null,L,m,w)}}else Be(P,p,m,w,k,N,F)},Xt=(p,m,w)=>{const I=m.component=p.component;if(ly(p,m,w))if(I.asyncDep&&!I.asyncResolved){Ce(I,m,w);return}else I.next=m,ny(I.update),I.effect.dirty=!0,I.update();else m.el=p.el,I.vnode=m},Be=(p,m,w,I,k,N,F)=>{const P=()=>{if(p.isMounted){let{next:$,bu:Y,u:q,parent:ee,vnode:fe}=p;{const Os=Op(p);if(Os){$&&($.el=fe.el,Ce(p,$,F)),Os.asyncDep.then(()=>{p.isUnmounted||P()});return}}let ke=$,Oe;ts(p,!1),$?($.el=fe.el,Ce(p,$,F)):$=fe,Y&&lo(Y),(Oe=$.props&&$.props.onVnodeBeforeUpdate)&&jt(Oe,ee,$,fe),ts(p,!0);const qe=ja(p),Rt=p.subTree;p.subTree=qe,x(Rt,qe,d(Rt.el),T(Rt),p,k,N),$.el=qe.el,ke===null&&cy(p,qe.el),q&&pt(q,k),(Oe=$.props&&$.props.onVnodeUpdated)&&pt(()=>jt(Oe,ee,$,fe),k)}else{let $;const{el:Y,props:q}=m,{bm:ee,m:fe,parent:ke}=p,Oe=uo(m);if(ts(p,!1),ee&&lo(ee),!Oe&&($=q&&q.onVnodeBeforeMount)&&jt($,ke,m),ts(p,!0),Y&&De){const qe=()=>{p.subTree=ja(p),De(Y,p.subTree,p,k,null)};Oe?m.type.__asyncLoader().then(()=>!p.isUnmounted&&qe()):qe()}else{const qe=p.subTree=ja(p);x(null,qe,w,I,p,k,N),m.el=qe.el}if(fe&&pt(fe,k),!Oe&&($=q&&q.onVnodeMounted)){const qe=m;pt(()=>jt($,ke,qe),k)}(m.shapeFlag&256||ke&&uo(ke.vnode)&&ke.vnode.shapeFlag&256)&&p.a&&pt(p.a,k),p.isMounted=!0,m=w=I=null}},L=p.effect=new vc(P,Tt,()=>xc(R),p.scope),R=p.update=()=>{L.dirty&&L.run()};R.id=p.uid,ts(p,!0),R()},Ce=(p,m,w)=>{m.component=p;const I=p.vnode.props;p.vnode=m,p.next=null,Uy(p,m.props,I,w),jy(p,m.children,w),Is(),lf(p),xs()},ve=(p,m,w,I,k,N,F,P,L=!1)=>{const R=p&&p.children,$=p?p.shapeFlag:0,Y=m.children,{patchFlag:q,shapeFlag:ee}=m;if(q>0){if(q&128){yn(R,Y,w,I,k,N,F,P,L);return}else if(q&256){Zt(R,Y,w,I,k,N,F,P,L);return}}ee&8?($&16&&st(R,k,N),Y!==R&&u(w,Y)):$&16?ee&16?yn(R,Y,w,I,k,N,F,P,L):st(R,k,N,!0):($&8&&u(w,""),ee&16&&X(Y,w,I,k,N,F,P,L))},Zt=(p,m,w,I,k,N,F,P,L)=>{p=p||zs,m=m||zs;const R=p.length,$=m.length,Y=Math.min(R,$);let q;for(q=0;q<Y;q++){const ee=m[q]=L?xn(m[q]):Vt(m[q]);x(p[q],ee,w,null,k,N,F,P,L)}R>$?st(p,k,N,!0,!1,Y):X(m,w,I,k,N,F,P,L,Y)},yn=(p,m,w,I,k,N,F,P,L)=>{let R=0;const $=m.length;let Y=p.length-1,q=$-1;for(;R<=Y&&R<=q;){const ee=p[R],fe=m[R]=L?xn(m[R]):Vt(m[R]);if(Us(ee,fe))x(ee,fe,w,null,k,N,F,P,L);else break;R++}for(;R<=Y&&R<=q;){const ee=p[Y],fe=m[q]=L?xn(m[q]):Vt(m[q]);if(Us(ee,fe))x(ee,fe,w,null,k,N,F,P,L);else break;Y--,q--}if(R>Y){if(R<=q){const ee=q+1,fe=ee<$?m[ee].el:I;for(;R<=q;)x(null,m[R]=L?xn(m[R]):Vt(m[R]),w,fe,k,N,F,P,L),R++}}else if(R>q)for(;R<=Y;)dt(p[R],k,N,!0),R++;else{const ee=R,fe=R,ke=new Map;for(R=fe;R<=q;R++){const bt=m[R]=L?xn(m[R]):Vt(m[R]);bt.key!=null&&ke.set(bt.key,R)}let Oe,qe=0;const Rt=q-fe+1;let Os=!1,Yu=0;const Si=new Array(Rt);for(R=0;R<Rt;R++)Si[R]=0;for(R=ee;R<=Y;R++){const bt=p[R];if(qe>=Rt){dt(bt,k,N,!0);continue}let $t;if(bt.key!=null)$t=ke.get(bt.key);else for(Oe=fe;Oe<=q;Oe++)if(Si[Oe-fe]===0&&Us(bt,m[Oe])){$t=Oe;break}$t===void 0?dt(bt,k,N,!0):(Si[$t-fe]=R+1,$t>=Yu?Yu=$t:Os=!0,x(bt,m[$t],w,null,k,N,F,P,L),qe++)}const Qu=Os?Wy(Si):zs;for(Oe=Qu.length-1,R=Rt-1;R>=0;R--){const bt=fe+R,$t=m[bt],Ju=bt+1<$?m[bt+1].el:I;Si[R]===0?x(null,$t,w,Ju,k,N,F,P,L):Os&&(Oe<0||R!==Qu[Oe]?Bt($t,w,Ju,2):Oe--)}}},Bt=(p,m,w,I,k=null)=>{const{el:N,type:F,transition:P,children:L,shapeFlag:R}=p;if(R&6){Bt(p.component.subTree,m,w,I);return}if(R&128){p.suspense.move(m,w,I);return}if(R&64){F.move(p,m,w,W);return}if(F===re){s(N,m,w);for(let Y=0;Y<L.length;Y++)Bt(L[Y],m,w,I);s(p.anchor,m,w);return}if(F===za){O(p,m,w);return}if(I!==2&&R&1&&P)if(I===0)P.beforeEnter(N),s(N,m,w),pt(()=>P.enter(N),k);else{const{leave:Y,delayLeave:q,afterLeave:ee}=P,fe=()=>s(N,m,w),ke=()=>{Y(N,()=>{fe(),ee&&ee()})};q?q(N,fe,ke):ke()}else s(N,m,w)},dt=(p,m,w,I=!1,k=!1)=>{const{type:N,props:F,ref:P,children:L,dynamicChildren:R,shapeFlag:$,patchFlag:Y,dirs:q}=p;if(P!=null&&Sl(P,null,w,p,!0),$&256){m.ctx.deactivate(p);return}const ee=$&1&&q,fe=!uo(p);let ke;if(fe&&(ke=F&&F.onVnodeBeforeUnmount)&&jt(ke,m,p),$&6)Vr(p.component,w,I);else{if($&128){p.suspense.unmount(w,I);return}ee&&es(p,null,m,"beforeUnmount"),$&64?p.type.remove(p,m,w,k,W,I):R&&(N!==re||Y>0&&Y&64)?st(R,m,w,!1,!0):(N===re&&Y&384||!k&&$&16)&&st(L,m,w),I&&Ns(p)}(fe&&(ke=F&&F.onVnodeUnmounted)||ee)&&pt(()=>{ke&&jt(ke,m,p),ee&&es(p,null,m,"unmounted")},w)},Ns=p=>{const{type:m,el:w,anchor:I,transition:k}=p;if(m===re){Ds(w,I);return}if(m===za){V(p);return}const N=()=>{i(w),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(p.shapeFlag&1&&k&&!k.persisted){const{leave:F,delayLeave:P}=k,L=()=>F(w,N);P?P(p.el,N,L):L()}else N()},Ds=(p,m)=>{let w;for(;p!==m;)w=h(p),i(p),p=w;i(m)},Vr=(p,m,w)=>{const{bum:I,scope:k,update:N,subTree:F,um:P}=p;I&&lo(I),k.stop(),N&&(N.active=!1,dt(F,p,m,w)),P&&pt(P,m),pt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},st=(p,m,w,I=!1,k=!1,N=0)=>{for(let F=N;F<p.length;F++)dt(p[F],m,w,I,k)},T=p=>p.shapeFlag&6?T(p.component.subTree):p.shapeFlag&128?p.suspense.next():h(p.anchor||p.el);let B=!1;const M=(p,m,w)=>{p==null?m._vnode&&dt(m._vnode,null,null,!0):x(m._vnode||null,p,m,null,null,null,w),B||(B=!0,lf(),hp(),B=!1),m._vnode=p},W={p:x,um:dt,m:Bt,r:Ns,mt:ot,mc:X,pc:ve,pbc:me,n:T,o:t};let ye,De;return e&&([ye,De]=e(W)),{render:M,hydrate:ye,createApp:My(M,ye)}}function Ha({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ts({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function zy(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Dp(t,e,n=!1){const s=t.children,i=e.children;if(J(s)&&J(i))for(let r=0;r<s.length;r++){const o=s[r];let l=i[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=i[r]=xn(i[r]),l.el=o.el),n||Dp(o,l)),l.type===ha&&(l.el=o.el)}}function Wy(t){const e=t.slice(),n=[0];let s,i,r,o,l;const a=t.length;for(s=0;s<a;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)l=r+o>>1,t[n[l]]<c?r=l+1:o=l;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Op(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Op(e)}const Gy=t=>t.__isTeleport,re=Symbol.for("v-fgt"),ha=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),za=Symbol.for("v-stc"),zi=[];let Nt=null;function v(t=!1){zi.push(Nt=t?null:[])}function qy(){zi.pop(),Nt=zi[zi.length-1]||null}let sr=1;function yf(t){sr+=t}function Lp(t){return t.dynamicChildren=sr>0?Nt||zs:null,qy(),sr>0&&Nt&&Nt.push(t),t}function y(t,e,n,s,i,r){return Lp(f(t,e,n,s,i,r,!0))}function Mp(t,e,n,s,i){return Lp(_(t,e,n,s,i,!0))}function Rl(t){return t?t.__v_isVNode===!0:!1}function Us(t,e){return t.type===e.type&&t.key===e.key}const pa="__vInternal",Fp=({key:t})=>t??null,ho=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||_t(t)||te(t)?{i:lt,r:t,k:e,f:!!n}:t:null);function f(t,e=null,n=null,s=0,i=null,r=t===re?0:1,o=!1,l=!1){const a={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fp(e),ref:e&&ho(e),scopeId:fa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:lt};return l?(Pc(a,n),r&128&&t.normalize(a)):n&&(a.shapeFlag|=je(n)?8:16),sr>0&&!o&&Nt&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&Nt.push(a),a}const _=Ky;function Ky(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===uy)&&(t=zn),Rl(t)){const l=ms(t,e,!0);return n&&Pc(l,n),sr>0&&!r&&Nt&&(l.shapeFlag&6?Nt[Nt.indexOf(t)]=l:Nt.push(l)),l.patchFlag|=-2,l}if(o1(t)&&(t=t.__vccOpts),e){e=Yy(e);let{class:l,style:a}=e;l&&!je(l)&&(e.class=ae(l)),Ie(a)&&(ip(a)&&!J(a)&&(a=$e({},a)),e.style=Gs(a))}const o=je(t)?1:dy(t)?128:Gy(t)?64:Ie(t)?4:te(t)?2:0;return f(t,e,n,s,i,o,r,!0)}function Yy(t){return t?ip(t)||pa in t?$e({},t):t:null}function ms(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,l=e?Qy(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:l,key:l&&Fp(l),ref:e&&e.ref?n&&i?J(i)?i.concat(ho(e)):[i,ho(e)]:ho(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==re?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ms(t.ssContent),ssFallback:t.ssFallback&&ms(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function ne(t=" ",e=0){return _(ha,null,t,e)}function S(t="",e=!1){return e?(v(),Mp(zn,null,t)):_(zn,null,t)}function Vt(t){return t==null||typeof t=="boolean"?_(zn):J(t)?_(re,null,t.slice()):typeof t=="object"?xn(t):_(ha,null,String(t))}function xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ms(t)}function Pc(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Pc(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(pa in e)?e._ctx=lt:i===3&&lt&&(lt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else te(e)?(e={default:e,_ctx:lt},n=32):(e=String(e),s&64?(n=16,e=[ne(e)]):n=8);t.children=e,t.shapeFlag|=n}function Qy(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=ae([e.class,s.class]));else if(i==="style")e.style=Gs([e.style,s.style]);else if(ia(i)){const r=e[i],o=s[i];o&&r!==o&&!(J(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function jt(t,e,n,s=null){xt(t,e,7,[n,s])}const Jy=xp();let Xy=0;function Zy(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Jy,r={uid:Xy++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new zh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rp(s,i),emitsOptions:mp(s,i),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=ry.bind(null,r),t.ce&&t.ce(r),r}let et=null;const e1=()=>et||lt;let Io,Al;{const t=jh(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Io=e("__VUE_INSTANCE_SETTERS__",n=>et=n),Al=e("__VUE_SSR_SETTERS__",n=>ma=n)}const Er=t=>{const e=et;return Io(t),t.scope.on(),()=>{t.scope.off(),Io(e)}},bf=()=>{et&&et.scope.off(),Io(null)};function Up(t){return t.vnode.shapeFlag&4}let ma=!1;function t1(t,e=!1){e&&Al(e);const{props:n,children:s}=t.vnode,i=Up(t);Fy(t,n,i,e),$y(t,s);const r=i?n1(t,e):void 0;return e&&Al(!1),r}function n1(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ec(new Proxy(t.ctx,Ry));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?i1(t):null,r=Er(t);Is();const o=Mn(s,t,0,[t.props,i]);if(xs(),r(),Uh(o)){if(o.then(bf,bf),e)return o.then(l=>{wf(t,l,e)}).catch(l=>{ca(l,t,0)});t.asyncDep=o}else wf(t,o,e)}else Bp(t,e)}function wf(t,e,n){te(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=cp(e)),Bp(t,n)}let Cf;function Bp(t,e,n){const s=t.type;if(!t.render){if(!e&&Cf&&!s.render){const i=s.template||Rc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:l,compilerOptions:a}=s,c=$e($e({isCustomElement:r,delimiters:l},o),a);s.render=Cf(i,c)}}t.render=s.render||Tt}{const i=Er(t);Is();try{Ay(t)}finally{xs(),i()}}}function s1(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return gt(t,"get","$attrs"),e[n]}}))}function i1(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return s1(t)},slots:t.slots,emit:t.emit,expose:e}}function ga(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(cp(Ec(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vi)return Vi[n](t)},has(e,n){return n in e||n in Vi}}))}function r1(t,e=!0){return te(t)?t.displayName||t.name:t.name||e&&t.__name}function o1(t){return te(t)&&"__vccOpts"in t}const Qe=(t,e)=>Qv(t,e,ma);function Nc(t,e,n){const s=arguments.length;return s===2?Ie(e)&&!J(e)?Rl(e)?_(t,null,[e]):_(t,e):_(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Rl(n)&&(n=[n]),_(t,e,n))}const a1="3.4.21";/**
* @vue/runtime-dom v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const l1="http://www.w3.org/2000/svg",c1="http://www.w3.org/1998/Math/MathML",Sn=typeof document<"u"?document:null,kf=Sn&&Sn.createElement("template"),u1={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Sn.createElementNS(l1,t):e==="mathml"?Sn.createElementNS(c1,t):Sn.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Sn.createTextNode(t),createComment:t=>Sn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Sn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{kf.innerHTML=s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t;const l=kf.content;if(s==="svg"||s==="mathml"){const a=l.firstChild;for(;a.firstChild;)l.appendChild(a.firstChild);l.removeChild(a)}e.insertBefore(l,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},wn="transition",Ri="animation",ri=Symbol("_vtc"),$p={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},f1=$e({},vy,$p),ns=(t,e=[])=>{J(t)?t.forEach(n=>n(...e)):t&&t(...e)},Ef=t=>t?J(t)?t.some(e=>e.length>1):t.length>1:!1;function d1(t){const e={};for(const G in t)G in $p||(e[G]=t[G]);if(t.css===!1)return e;const{name:n="v",type:s,duration:i,enterFromClass:r=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:a=r,appearActiveClass:c=o,appearToClass:u=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:g=`${n}-leave-to`}=t,b=h1(i),x=b&&b[0],D=b&&b[1],{onBeforeEnter:C,onEnter:E,onEnterCancelled:O,onLeave:V,onLeaveCancelled:K,onBeforeAppear:H=C,onAppear:ue=E,onAppearCancelled:X=O}=e,se=(G,be,ot)=>{Tn(G,be?u:l),Tn(G,be?c:o),ot&&ot()},me=(G,be)=>{G._isLeaving=!1,Tn(G,d),Tn(G,g),Tn(G,h),be&&be()},Ve=G=>(be,ot)=>{const Xt=G?ue:E,Be=()=>se(be,G,ot);ns(Xt,[be,Be]),Tf(()=>{Tn(be,G?a:r),tn(be,G?u:l),Ef(Xt)||If(be,s,x,Be)})};return $e(e,{onBeforeEnter(G){ns(C,[G]),tn(G,r),tn(G,o)},onBeforeAppear(G){ns(H,[G]),tn(G,a),tn(G,c)},onEnter:Ve(!1),onAppear:Ve(!0),onLeave(G,be){G._isLeaving=!0;const ot=()=>me(G,be);tn(G,d),Vp(),tn(G,h),Tf(()=>{G._isLeaving&&(Tn(G,d),tn(G,g),Ef(V)||If(G,s,D,ot))}),ns(V,[G,ot])},onEnterCancelled(G){se(G,!1),ns(O,[G])},onAppearCancelled(G){se(G,!0),ns(X,[G])},onLeaveCancelled(G){me(G),ns(K,[G])}})}function h1(t){if(t==null)return null;if(Ie(t))return[Wa(t.enter),Wa(t.leave)];{const e=Wa(t);return[e,e]}}function Wa(t){return bv(t)}function tn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[ri]||(t[ri]=new Set)).add(e)}function Tn(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[ri];n&&(n.delete(e),n.size||(t[ri]=void 0))}function Tf(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let p1=0;function If(t,e,n,s){const i=t._endId=++p1,r=()=>{i===t._endId&&s()};if(n)return setTimeout(r,n);const{type:o,timeout:l,propCount:a}=jp(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,h),r()},h=g=>{g.target===t&&++u>=a&&d()};setTimeout(()=>{u<a&&d()},l+1),t.addEventListener(c,h)}function jp(t,e){const n=window.getComputedStyle(t),s=b=>(n[b]||"").split(", "),i=s(`${wn}Delay`),r=s(`${wn}Duration`),o=xf(i,r),l=s(`${Ri}Delay`),a=s(`${Ri}Duration`),c=xf(l,a);let u=null,d=0,h=0;e===wn?o>0&&(u=wn,d=o,h=r.length):e===Ri?c>0&&(u=Ri,d=c,h=a.length):(d=Math.max(o,c),u=d>0?o>c?wn:Ri:null,h=u?u===wn?r.length:a.length:0);const g=u===wn&&/\b(transform|all)(,|$)/.test(s(`${wn}Property`).toString());return{type:u,timeout:d,propCount:h,hasTransform:g}}function xf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>Sf(n)+Sf(t[s])))}function Sf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Vp(){return document.body.offsetHeight}function m1(t,e,n){const s=t[ri];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xo=Symbol("_vod"),Hp=Symbol("_vsh"),gs={beforeMount(t,{value:e},{transition:n}){t[xo]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Ai(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:s}){!e!=!n&&(s?e?(s.beforeEnter(t),Ai(t,!0),s.enter(t)):s.leave(t,()=>{Ai(t,!1)}):Ai(t,e))},beforeUnmount(t,{value:e}){Ai(t,e)}};function Ai(t,e){t.style.display=e?t[xo]:"none",t[Hp]=!e}const g1=Symbol(""),_1=/(^|;)\s*display\s*:/;function v1(t,e,n){const s=t.style,i=je(n);let r=!1;if(n&&!i){if(e)if(je(e))for(const o of e.split(";")){const l=o.slice(0,o.indexOf(":")).trim();n[l]==null&&po(s,l,"")}else for(const o in e)n[o]==null&&po(s,o,"");for(const o in n)o==="display"&&(r=!0),po(s,o,n[o])}else if(i){if(e!==n){const o=s[g1];o&&(n+=";"+o),s.cssText=n,r=_1.test(n)}}else e&&t.removeAttribute("style");xo in t&&(t[xo]=r?s.display:"",t[Hp]&&(s.display="none"))}const Rf=/\s*!important$/;function po(t,e,n){if(J(n))n.forEach(s=>po(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=y1(t,e);Rf.test(n)?t.setProperty(vi(s),n.replace(Rf,""),"important"):t[s]=n}}const Af=["Webkit","Moz","ms"],Ga={};function y1(t,e){const n=Ga[e];if(n)return n;let s=Kt(e);if(s!=="filter"&&s in t)return Ga[e]=s;s=oa(s);for(let i=0;i<Af.length;i++){const r=Af[i]+s;if(r in t)return Ga[e]=r}return e}const Pf="http://www.w3.org/1999/xlink";function b1(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Pf,e.slice(6,e.length)):t.setAttributeNS(Pf,e,n);else{const r=Iv(e);n==null||r&&!Vh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function w1(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}const l=t.tagName;if(e==="value"&&l!=="PROGRESS"&&!l.includes("-")){const c=l==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let a=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Vh(n):n==null&&c==="string"?(n="",a=!0):c==="number"&&(n=0,a=!0)}try{t[e]=n}catch{}a&&t.removeAttribute(e)}function os(t,e,n,s){t.addEventListener(e,n,s)}function C1(t,e,n,s){t.removeEventListener(e,n,s)}const Nf=Symbol("_vei");function k1(t,e,n,s,i=null){const r=t[Nf]||(t[Nf]={}),o=r[e];if(s&&o)o.value=s;else{const[l,a]=E1(e);if(s){const c=r[e]=x1(s,i);os(t,l,c,a)}else o&&(C1(t,l,o,a),r[e]=void 0)}}const Df=/(?:Once|Passive|Capture)$/;function E1(t){let e;if(Df.test(t)){e={};let s;for(;s=t.match(Df);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):vi(t.slice(2)),e]}let qa=0;const T1=Promise.resolve(),I1=()=>qa||(T1.then(()=>qa=0),qa=Date.now());function x1(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;xt(S1(s,n.value),e,5,[s])};return n.value=t,n.attached=I1(),n}function S1(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const Of=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,R1=(t,e,n,s,i,r,o,l,a)=>{const c=i==="svg";e==="class"?m1(t,s,c):e==="style"?v1(t,n,s):ia(e)?mc(e)||k1(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):A1(t,e,s,c))?w1(t,e,s,r,o,l,a):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),b1(t,e,s,c))};function A1(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Of(e)&&te(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return Of(e)&&je(n)?!1:e in t}const zp=new WeakMap,Wp=new WeakMap,So=Symbol("_moveCb"),Lf=Symbol("_enterCb"),Gp={name:"TransitionGroup",props:$e({},f1,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=e1(),s=_y();let i,r;return kp(()=>{if(!i.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!L1(i[0].el,n.vnode.el,o))return;i.forEach(N1),i.forEach(D1);const l=i.filter(O1);Vp(),l.forEach(a=>{const c=a.el,u=c.style;tn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const d=c[So]=h=>{h&&h.target!==c||(!h||/transform$/.test(h.propertyName))&&(c.removeEventListener("transitionend",d),c[So]=null,Tn(c,o))};c.addEventListener("transitionend",d)})}),()=>{const o=_e(t),l=d1(o);let a=o.tag||re;i=r,r=e.default?yp(e.default()):[];for(let c=0;c<r.length;c++){const u=r[c];u.key!=null&&kl(u,Cl(u,l,s,n))}if(i)for(let c=0;c<i.length;c++){const u=i[c];kl(u,Cl(u,l,s,n)),zp.set(u,u.el.getBoundingClientRect())}return _(a,null,r)}}},P1=t=>delete t.mode;Gp.props;const Yt=Gp;function N1(t){const e=t.el;e[So]&&e[So](),e[Lf]&&e[Lf]()}function D1(t){Wp.set(t,t.el.getBoundingClientRect())}function O1(t){const e=zp.get(t),n=Wp.get(t),s=e.left-n.left,i=e.top-n.top;if(s||i){const r=t.el.style;return r.transform=r.webkitTransform=`translate(${s}px,${i}px)`,r.transitionDuration="0s",t}}function L1(t,e,n){const s=t.cloneNode(),i=t[ri];i&&i.forEach(l=>{l.split(/\s+/).forEach(a=>a&&s.classList.remove(a))}),n.split(/\s+/).forEach(l=>l&&s.classList.add(l)),s.style.display="none";const r=e.nodeType===1?e:e.parentNode;r.appendChild(s);const{hasTransform:o}=jp(s);return r.removeChild(s),o}const Ro=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>lo(e,n):e};function M1(t){t.target.composing=!0}function Mf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Qs=Symbol("_assign"),Fe={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t[Qs]=Ro(i);const r=s||i.props&&i.props.type==="number";os(t,e?"change":"input",o=>{if(o.target.composing)return;let l=t.value;n&&(l=l.trim()),r&&(l=gl(l)),t[Qs](l)}),n&&os(t,"change",()=>{t.value=t.value.trim()}),e||(os(t,"compositionstart",M1),os(t,"compositionend",Mf),os(t,"change",Mf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t[Qs]=Ro(r),t.composing)return;const o=i||t.type==="number"?gl(t.value):t.value,l=e??"";o!==l&&(document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===l)||(t.value=l))}},Js={created(t,{value:e},n){t.checked=Co(e,n.props.value),t[Qs]=Ro(n),os(t,"change",()=>{t[Qs](F1(t))})},beforeUpdate(t,{value:e,oldValue:n},s){t[Qs]=Ro(s),e!==n&&(t.checked=Co(e,s.props.value))}};function F1(t){return"_value"in t?t._value:t.value}const U1=["ctrl","shift","alt","meta"],B1={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>U1.some(n=>t[`${n}Key`]&&!e.includes(n))},Dc=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(i,...r)=>{for(let o=0;o<e.length;o++){const l=B1[e[o]];if(l&&l(i,e))return}return t(i,...r)})},$1=$e({patchProp:R1},u1);let Ff;function j1(){return Ff||(Ff=Vy($1))}const V1=(...t)=>{const e=j1().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=z1(s);if(!i)return;const r=e._component;!te(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,H1(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function H1(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function z1(t){return je(t)?document.querySelector(t):t}var W1=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */const G1=Symbol();var Uf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Uf||(Uf={}));function q1(){const t=Sv(!0),e=t.run(()=>ap({}));let n=[],s=[];const i=Ec({install(r){i._a=r,r.provide(G1,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return!this._a&&!W1?s.push(r):n.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}var Bf={};/**
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
 */const qp={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const A=function(t,e){if(!t)throw yi(e)},yi=function(t){return new Error("Firebase Database ("+qp.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Kp=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},K1=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(r&63)<<12|(o&63)<<6|l&63)-65536;e[s++]=String.fromCharCode(55296+(a>>10)),e[s++]=String.fromCharCode(56320+(a&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Oc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=r>>2,d=(r&3)<<4|l>>4;let h=(l&15)<<2|c>>6,g=c&63;a||(g=64,o||(h=64)),s.push(n[u],n[d],n[h],n[g])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Kp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):K1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||l==null||c==null||d==null)throw new Y1;const h=r<<2|l>>4;if(s.push(h),c!==64){const g=l<<4&240|c>>2;if(s.push(g),d!==64){const b=c<<6&192|d;s.push(b)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Y1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yp=function(t){const e=Kp(t);return Oc.encodeByteArray(e,!0)},Ao=function(t){return Yp(t).replace(/\./g,"")},Po=function(t){try{return Oc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Q1(t){return Qp(void 0,t)}function Qp(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!J1(n)||(t[n]=Qp(t[n],e[n]));return t}function J1(t){return t!=="__proto__"}/**
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
 */function X1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Z1=()=>X1().__FIREBASE_DEFAULTS__,eb=()=>{if(typeof process>"u"||typeof Bf>"u")return;const t=Bf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tb=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Po(t[1]);return e&&JSON.parse(e)},Lc=()=>{try{return Z1()||eb()||tb()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jp=t=>{var e,n;return(n=(e=Lc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},nb=t=>{const e=Jp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Xp=()=>{var t;return(t=Lc())===null||t===void 0?void 0:t.config},Zp=t=>{var e;return(e=Lc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Tr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function sb(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ao(JSON.stringify(n)),Ao(JSON.stringify(o)),""].join(".")}/**
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
 */function rt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mc(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(rt())}function ib(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function em(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rb(){const t=rt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function tm(){return qp.NODE_ADMIN===!0}function ob(){try{return typeof indexedDB=="object"}catch{return!1}}function ab(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const lb="FirebaseError";class Jn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=lb,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ir.prototype.create)}}class Ir{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?cb(r,s):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Jn(i,l,s)}}function cb(t,e){return t.replace(ub,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const ub=/\{\$([^}]+)}/g;/**
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
 */function ir(t){return JSON.parse(t)}function ze(t){return JSON.stringify(t)}/**
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
 */const nm=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=ir(Po(r[0])||""),n=ir(Po(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},fb=function(t){const e=nm(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},db=function(t){const e=nm(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function oi(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Pl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function No(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Do(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if($f(r)&&$f(o)){if(!Do(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function $f(t){return t!==null&&typeof t=="object"}/**
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
 */function bi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Fi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[i,r]=s.split("=");e[decodeURIComponent(i)]=decodeURIComponent(r)}}),e}function Ui(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
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
 */class hb{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=l^r&(o^l),u=1518500249):(c=r^o^l,u=1859775393):d<60?(c=r&o|l&(r|o),u=2400959708):(c=r^o^l,u=3395469782);const h=(i<<5|i>>>27)+c+a+u+s[d]&4294967295;a=l,l=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function pb(t,e){const n=new mb(t,e);return n.subscribe.bind(n)}class mb{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");gb(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ka),i.error===void 0&&(i.error=Ka),i.complete===void 0&&(i.complete=Ka);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function gb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ka(){}function _a(t,e){return`${t} failed: ${e} argument `}/**
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
 */const _b=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,A(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},va=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function nt(t){return t&&t._delegate?t._delegate:t}class _s{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ss="[DEFAULT]";/**
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
 */class vb{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Tr;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bb(e))try{this.getOrInitializeService({instanceIdentifier:ss})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ss){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ss){return this.instances.has(e)}getOptions(e=ss){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(r);s===l&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:yb(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ss){return this.component?this.component.multipleInstances?e:ss:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yb(t){return t===ss?void 0:t}function bb(t){return t.instantiationMode==="EAGER"}/**
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
 */class wb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new vb(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const Cb={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},kb=Ee.INFO,Eb={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Tb=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Eb[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=kb,this._logHandler=Tb,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Cb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const Ib=(t,e)=>e.some(n=>t instanceof n);let jf,Vf;function xb(){return jf||(jf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sb(){return Vf||(Vf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const sm=new WeakMap,Nl=new WeakMap,im=new WeakMap,Ya=new WeakMap,Uc=new WeakMap;function Rb(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Fn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&sm.set(n,t)}).catch(()=>{}),Uc.set(e,t),e}function Ab(t){if(Nl.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Nl.set(t,e)}let Dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||im.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pb(t){Dl=t(Dl)}function Nb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Qa(this),e,...n);return im.set(s,e.sort?e.sort():[e]),Fn(s)}:Sb().includes(t)?function(...e){return t.apply(Qa(this),e),Fn(sm.get(this))}:function(...e){return Fn(t.apply(Qa(this),e))}}function Db(t){return typeof t=="function"?Nb(t):(t instanceof IDBTransaction&&Ab(t),Ib(t,xb())?new Proxy(t,Dl):t)}function Fn(t){if(t instanceof IDBRequest)return Rb(t);if(Ya.has(t))return Ya.get(t);const e=Db(t);return e!==t&&(Ya.set(t,e),Uc.set(e,t)),e}const Qa=t=>Uc.get(t);function Ob(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),l=Fn(o);return s&&o.addEventListener("upgradeneeded",a=>{s(Fn(o.result),a.oldVersion,a.newVersion,Fn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{r&&a.addEventListener("close",()=>r()),i&&a.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),l}const Lb=["get","getKey","getAll","getAllKeys","count"],Mb=["put","add","delete","clear"],Ja=new Map;function Hf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ja.get(e))return Ja.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Mb.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Lb.includes(n)))return;const r=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let c=a.store;return s&&(c=c.index(l.shift())),(await Promise.all([c[n](...l),i&&a.done]))[0]};return Ja.set(e,r),r}Pb(t=>({...t,get:(e,n,s)=>Hf(e,n)||t.get(e,n,s),has:(e,n)=>!!Hf(e,n)||t.has(e,n)}));/**
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
 */class Fb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ub(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ub(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ol="@firebase/app",zf="0.9.28";/**
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
 */const vs=new Fc("@firebase/app"),Bb="@firebase/app-compat",$b="@firebase/analytics-compat",jb="@firebase/analytics",Vb="@firebase/app-check-compat",Hb="@firebase/app-check",zb="@firebase/auth",Wb="@firebase/auth-compat",Gb="@firebase/database",qb="@firebase/database-compat",Kb="@firebase/functions",Yb="@firebase/functions-compat",Qb="@firebase/installations",Jb="@firebase/installations-compat",Xb="@firebase/messaging",Zb="@firebase/messaging-compat",e0="@firebase/performance",t0="@firebase/performance-compat",n0="@firebase/remote-config",s0="@firebase/remote-config-compat",i0="@firebase/storage",r0="@firebase/storage-compat",o0="@firebase/firestore",a0="@firebase/firestore-compat",l0="firebase",c0="10.8.1";/**
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
 */const Ll="[DEFAULT]",u0={[Ol]:"fire-core",[Bb]:"fire-core-compat",[jb]:"fire-analytics",[$b]:"fire-analytics-compat",[Hb]:"fire-app-check",[Vb]:"fire-app-check-compat",[zb]:"fire-auth",[Wb]:"fire-auth-compat",[Gb]:"fire-rtdb",[qb]:"fire-rtdb-compat",[Kb]:"fire-fn",[Yb]:"fire-fn-compat",[Qb]:"fire-iid",[Jb]:"fire-iid-compat",[Xb]:"fire-fcm",[Zb]:"fire-fcm-compat",[e0]:"fire-perf",[t0]:"fire-perf-compat",[n0]:"fire-rc",[s0]:"fire-rc-compat",[i0]:"fire-gcs",[r0]:"fire-gcs-compat",[o0]:"fire-fst",[a0]:"fire-fst-compat","fire-js":"fire-js",[l0]:"fire-js-all"};/**
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
 */const Oo=new Map,Ml=new Map;function f0(t,e){try{t.container.addComponent(e)}catch(n){vs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ai(t){const e=t.name;if(Ml.has(e))return vs.debug(`There were multiple attempts to register component ${e}.`),!1;Ml.set(e,t);for(const n of Oo.values())f0(n,t);return!0}function Bc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const d0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Un=new Ir("app","Firebase",d0);/**
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
 */class h0{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new _s("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Un.create("app-deleted",{appName:this._name})}}/**
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
 */const wi=c0;function rm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ll,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Un.create("bad-app-name",{appName:String(i)});if(n||(n=Xp()),!n)throw Un.create("no-options");const r=Oo.get(i);if(r){if(Do(n,r.options)&&Do(s,r.config))return r;throw Un.create("duplicate-app",{appName:i})}const o=new wb(i);for(const a of Ml.values())o.addComponent(a);const l=new h0(n,s,o);return Oo.set(i,l),l}function om(t=Ll){const e=Oo.get(t);if(!e&&t===Ll&&Xp())return rm();if(!e)throw Un.create("no-app",{appName:t});return e}function Bn(t,e,n){var s;let i=(s=u0[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const l=[`Unable to register library "${i}" with version "${e}":`];r&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vs.warn(l.join(" "));return}ai(new _s(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const p0="firebase-heartbeat-database",m0=1,rr="firebase-heartbeat-store";let Xa=null;function am(){return Xa||(Xa=Ob(p0,m0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(rr)}catch(n){console.warn(n)}}}}).catch(t=>{throw Un.create("idb-open",{originalErrorMessage:t.message})})),Xa}async function g0(t){try{const n=(await am()).transaction(rr),s=await n.objectStore(rr).get(lm(t));return await n.done,s}catch(e){if(e instanceof Jn)vs.warn(e.message);else{const n=Un.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vs.warn(n.message)}}}async function Wf(t,e){try{const s=(await am()).transaction(rr,"readwrite");await s.objectStore(rr).put(e,lm(t)),await s.done}catch(n){if(n instanceof Jn)vs.warn(n.message);else{const s=Un.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vs.warn(s.message)}}}function lm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _0=1024,v0=30*24*60*60*1e3;class y0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new w0(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Gf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=v0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gf(),{heartbeatsToSend:s,unsentEntries:i}=b0(this._heartbeatsCache.heartbeats),r=Ao(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Gf(){return new Date().toISOString().substring(0,10)}function b0(t,e=_0){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),qf(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),qf(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class w0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ob()?ab().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await g0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function qf(t){return Ao(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function C0(t){ai(new _s("platform-logger",e=>new Fb(e),"PRIVATE")),ai(new _s("heartbeat",e=>new y0(e),"PRIVATE")),Bn(Ol,zf,t),Bn(Ol,zf,"esm2017"),Bn("fire-js","")}C0("");var k0="firebase",E0="10.8.1";/**
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
 */Bn(k0,E0,"app");var Kf={};const Yf="@firebase/database",Qf="1.0.3";/**
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
 */let cm="";function T0(t){cm=t}/**
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
 */class I0{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),ze(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ir(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class x0{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const um=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new I0(e)}}catch{}return new x0},ls=um("localStorage"),Fl=um("sessionStorage");/**
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
 */const Xs=new Fc("@firebase/database"),S0=function(){let t=1;return function(){return t++}}(),fm=function(t){const e=_b(t),n=new hb;n.update(e);const s=n.digest();return Oc.encodeByteArray(s)},xr=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=xr.apply(null,s):typeof s=="object"?e+=ze(s):e+=s,e+=" "}return e};let hs=null,Jf=!0;const R0=function(t,e){A(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Xs.logLevel=Ee.VERBOSE,hs=Xs.log.bind(Xs),e&&Fl.set("logging_enabled",!0)):typeof t=="function"?hs=t:(hs=null,Fl.remove("logging_enabled"))},Je=function(...t){if(Jf===!0&&(Jf=!1,hs===null&&Fl.get("logging_enabled")===!0&&R0(!0)),hs){const e=xr.apply(null,t);hs(e)}},Sr=function(t){return function(...e){Je(t,...e)}},Ul=function(...t){const e="FIREBASE INTERNAL ERROR: "+xr(...t);Xs.error(e)},un=function(...t){const e=`FIREBASE FATAL ERROR: ${xr(...t)}`;throw Xs.error(e),new Error(e)},ut=function(...t){const e="FIREBASE WARNING: "+xr(...t);Xs.warn(e)},A0=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ut("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},$c=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},P0=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},li="[MIN_NAME]",ys="[MAX_NAME]",Ss=function(t,e){if(t===e)return 0;if(t===li||e===ys)return-1;if(e===li||t===ys)return 1;{const n=Xf(t),s=Xf(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},N0=function(t,e){return t===e?0:t<e?-1:1},Pi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+ze(e))},jc=function(t){if(typeof t!="object"||t===null)return ze(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=ze(e[s]),n+=":",n+=jc(t[e[s]]);return n+="}",n},dm=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function tt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const hm=function(t){A(!$c(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,l,a;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=l+s,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(a=n;a;a-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(u.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},D0=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},O0=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function L0(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const M0=new RegExp("^-?(0*)\\d{1,10}$"),F0=-2147483648,U0=2147483647,Xf=function(t){if(M0.test(t)){const e=Number(t);if(e>=F0&&e<=U0)return e}return null},Ci=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ut("Exception was thrown by user callback.",n),e},Math.floor(0))}},B0=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class $0{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ut(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class j0{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Je("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ut(e)}}class Zs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Zs.OWNER="owner";/**
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
 */const Vc="5",pm="v",mm="s",gm="r",_m="f",vm=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ym="ls",bm="p",Bl="ac",wm="websocket",Cm="long_polling";/**
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
 */class km{constructor(e,n,s,i,r=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ls.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ls.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function V0(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Em(t,e,n){A(typeof e=="string","typeof type must == string"),A(typeof n=="object","typeof params must == object");let s;if(e===wm)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Cm)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);V0(t)&&(n.ns=t.namespace);const i=[];return tt(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class H0{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Q1(this.counters_)}}/**
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
 */const Za={},el={};function Hc(t){const e=t.toString();return Za[e]||(Za[e]=new H0),Za[e]}function z0(t,e){const n=t.toString();return el[n]||(el[n]=e()),el[n]}/**
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
 */class W0{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ci(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Zf="start",G0="close",q0="pLPCommand",K0="pRTLPCB",Tm="id",Im="pw",xm="ser",Y0="cb",Q0="seg",J0="ts",X0="d",Z0="dframe",Sm=1870,Rm=30,e2=Sm-Rm,t2=25e3,n2=3e4;class $s{constructor(e,n,s,i,r,o,l){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Sr(e),this.stats_=Hc(n),this.urlFn=a=>(this.appCheckToken&&(a[Bl]=this.appCheckToken),Em(n,Cm,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new W0(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(n2)),P0(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zc((...r)=>{const[o,l,a,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Zf)this.id=l,this.password=a;else if(o===G0)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,l]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const s={};s[Zf]="t",s[xm]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Y0]=this.scriptTagHolder.uniqueCallbackIdentifier),s[pm]=Vc,this.transportSessionId&&(s[mm]=this.transportSessionId),this.lastSessionId&&(s[ym]=this.lastSessionId),this.applicationId&&(s[bm]=this.applicationId),this.appCheckToken&&(s[Bl]=this.appCheckToken),typeof location<"u"&&location.hostname&&vm.test(location.hostname)&&(s[gm]=_m);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){$s.forceAllow_=!0}static forceDisallow(){$s.forceDisallow_=!0}static isAvailable(){return $s.forceAllow_?!0:!$s.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!D0()&&!O0()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Yp(n),i=dm(s,e2);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Z0]="t",s[Tm]=e,s[Im]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=ze(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class zc{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=S0(),window[q0+this.uniqueCallbackIdentifier]=e,window[K0+this.uniqueCallbackIdentifier]=n,this.myIFrame=zc.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Je("frame writing exception"),l.stack&&Je(l.stack),Je(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Je("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Tm]=this.myID,e[Im]=this.myPW,e[xm]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Rm+s.length<=Sm;){const o=this.pendingSegs.shift();s=s+"&"+Q0+i+"="+o.seg+"&"+J0+i+"="+o.ts+"&"+X0+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(t2)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Je("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const s2=16384,i2=45e3;let Lo=null;typeof MozWebSocket<"u"?Lo=MozWebSocket:typeof WebSocket<"u"&&(Lo=WebSocket);class Pt{constructor(e,n,s,i,r,o,l){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Sr(this.connId),this.stats_=Hc(n),this.connURL=Pt.connectionURL_(n,o,l,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[pm]=Vc,typeof location<"u"&&location.hostname&&vm.test(location.hostname)&&(o[gm]=_m),n&&(o[mm]=n),s&&(o[ym]=s),i&&(o[Bl]=i),r&&(o[bm]=r),Em(e,wm,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ls.set("previous_websocket_failure",!0);try{let s;tm(),this.mySock=new Lo(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Pt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Lo!==null&&!Pt.forceDisallow_}static previouslyFailed(){return ls.isInMemoryStorage||ls.get("previous_websocket_failure")===!0}markConnectionHealthy(){ls.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ir(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(A(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=ze(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=dm(n,s2);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(i2))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Pt.responsesRequiredToBeHealthy=2;Pt.healthyTimeout=3e4;/**
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
 */class or{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[$s,Pt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=Pt&&Pt.isAvailable();let s=n&&!Pt.previouslyFailed();if(e.webSocketOnly&&(n||ut("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Pt];else{const i=this.transports_=[];for(const r of or.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);or.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}or.globalTransportInitialized_=!1;/**
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
 */const r2=6e4,o2=5e3,a2=10*1024,l2=100*1024,tl="t",ed="d",c2="s",td="r",u2="e",nd="o",sd="a",id="n",rd="p",f2="h";class d2{constructor(e,n,s,i,r,o,l,a,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Sr("c:"+this.id+":"),this.transportManager_=new or(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>l2?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>a2?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(tl in e){const n=e[tl];n===sd?this.upgradeIfSecondaryHealthy_():n===td?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===nd&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Pi("t",e),s=Pi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:rd,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:sd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:id,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Pi("t",e),s=Pi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Pi(tl,e);if(ed in e){const s=e[ed];if(n===f2){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===id){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===c2?this.onConnectionShutdown_(s):n===td?this.onReset_(s):n===u2?Ul("Server Error: "+s):n===nd?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ul("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vc!==s&&ut("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(r2))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(o2))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:rd,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ls.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Am{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Pm{constructor(e){this.allowedEvents_=e,this.listeners_={},A(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){A(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Mo extends Pm{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Mc()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Mo}getInitialEvent(e){return A(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const od=32,ad=768;class Te{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ge(){return new Te("")}function ie(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Wn(t){return t.pieces_.length-t.pieceNum_}function Se(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new Te(t.pieces_,e)}function Wc(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function h2(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function ar(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Nm(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new Te(e,0)}function Me(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof Te)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new Te(n,0)}function le(t){return t.pieceNum_>=t.pieces_.length}function ct(t,e){const n=ie(t),s=ie(e);if(n===null)return e;if(n===s)return ct(Se(t),Se(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function p2(t,e){const n=ar(t,0),s=ar(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=Ss(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Gc(t,e){if(Wn(t)!==Wn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function It(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Wn(t)>Wn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class m2{constructor(e,n){this.errorPrefix_=n,this.parts_=ar(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=va(this.parts_[s]);Dm(this)}}function g2(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=va(e),Dm(t)}function _2(t){const e=t.parts_.pop();t.byteLength_-=va(e),t.parts_.length>0&&(t.byteLength_-=1)}function Dm(t){if(t.byteLength_>ad)throw new Error(t.errorPrefix_+"has a key path longer than "+ad+" bytes ("+t.byteLength_+").");if(t.parts_.length>od)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+od+") or object contains a cycle "+is(t))}function is(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class qc extends Pm{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}static getInstance(){return new qc}getInitialEvent(e){return A(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ni=1e3,v2=60*5*1e3,ld=30*1e3,y2=1.3,b2=3e4,w2="server_kill",cd=3;class cn extends Am{constructor(e,n,s,i,r,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=cn.nextPersistentConnectionId_++,this.log_=Sr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ni,this.maxReconnectDelay_=v2,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!tm())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");qc.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mo.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(ze(r)),A(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Tr,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),A(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,l=>{const a=l.d,c=l.s;cn.warnOnListenWarnings_(a,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",l),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const s=oi(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ut(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||db(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ld)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=fb(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),A(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+ze(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ul("Unrecognized action received from server: "+ze(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){A(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>b2&&(this.reconnectDelay_=Ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*y2)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+cn.nextConnectionId_++,r=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,s())},c=function(d){A(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Je("getToken() completed but was canceled"):(Je("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new d2(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,g=>{ut(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(w2)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ut(d),a())}}}interrupt(e){Je("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Je("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Pl(this.interruptReasons_)&&(this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>jc(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new Te(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Je("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=cd&&(this.reconnectDelay_=ld,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Je("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=cd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+cm.replace(/\./g,"-")]=1,Mc()?e["framework.cordova"]=1:em()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mo.getInstance().currentlyOnline();return Pl(this.interruptReasons_)&&e}}cn.nextPersistentConnectionId_=0;cn.nextConnectionId_=0;/**
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
 */class oe{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new oe(e,n)}}/**
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
 */class ya{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new oe(li,e),i=new oe(li,n);return this.compare(s,i)!==0}minPost(){return oe.MIN}}/**
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
 */let Qr;class Om extends ya{static get __EMPTY_NODE(){return Qr}static set __EMPTY_NODE(e){Qr=e}compare(e,n){return Ss(e.name,n.name)}isDefinedOn(e){throw yi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return oe.MIN}maxPost(){return new oe(ys,Qr)}makePost(e,n){return A(typeof e=="string","KeyIndex indexValue must always be a string."),new oe(e,Qr)}toString(){return".key"}}const ei=new Om;/**
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
 */class Jr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ye{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ye.RED,this.left=i??mt.EMPTY_NODE,this.right=r??mt.EMPTY_NODE}copy(e,n,s,i,r){return new Ye(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return mt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return mt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ye.RED=!0;Ye.BLACK=!1;class C2{copy(e,n,s,i,r){return this}insert(e,n,s){return new Ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class mt{constructor(e,n=mt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new mt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ye.BLACK,null,null))}remove(e){return new mt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ye.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Jr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Jr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Jr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Jr(this.root_,null,this.comparator_,!0,e)}}mt.EMPTY_NODE=new C2;/**
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
 */function k2(t,e){return Ss(t.name,e.name)}function Kc(t,e){return Ss(t,e)}/**
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
 */let $l;function E2(t){$l=t}const Lm=function(t){return typeof t=="number"?"number:"+hm(t):"string:"+t},Mm=function(t){if(t.isLeafNode()){const e=t.val();A(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else A(t===$l||t.isEmpty(),"priority of unexpected type.");A(t===$l||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let ud;class Ke{constructor(e,n=Ke.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,A(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Mm(this.priorityNode_)}static set __childrenNodeConstructor(e){ud=e}static get __childrenNodeConstructor(){return ud}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ke(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return le(e)?this:ie(e)===".priority"?this.priorityNode_:Ke.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ke.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ie(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(A(s!==".priority"||Wn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ke.__childrenNodeConstructor.EMPTY_NODE.updateChild(Se(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Lm(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=hm(this.value_):e+=this.value_,this.lazyHash_=fm(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ke.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ke.__childrenNodeConstructor?-1:(A(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ke.VALUE_TYPE_ORDER.indexOf(n),r=Ke.VALUE_TYPE_ORDER.indexOf(s);return A(i>=0,"Unknown leaf type: "+n),A(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ke.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Fm,Um;function T2(t){Fm=t}function I2(t){Um=t}class x2 extends ya{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?Ss(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return oe.MIN}maxPost(){return new oe(ys,new Ke("[PRIORITY-POST]",Um))}makePost(e,n){const s=Fm(e);return new oe(n,new Ke("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ue=new x2;/**
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
 */const S2=Math.log(2);class R2{constructor(e){const n=r=>parseInt(Math.log(r)/S2,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Fo=function(t,e,n,s){t.sort(e);const i=function(a,c){const u=c-a;let d,h;if(u===0)return null;if(u===1)return d=t[a],h=n?n(d):d,new Ye(h,d.node,Ye.BLACK,null,null);{const g=parseInt(u/2,10)+a,b=i(a,g),x=i(g+1,c);return d=t[g],h=n?n(d):d,new Ye(h,d.node,Ye.BLACK,b,x)}},r=function(a){let c=null,u=null,d=t.length;const h=function(b,x){const D=d-b,C=d;d-=b;const E=i(D+1,C),O=t[D],V=n?n(O):O;g(new Ye(V,O.node,x,null,E))},g=function(b){c?(c.left=b,c=b):(u=b,c=b)};for(let b=0;b<a.count;++b){const x=a.nextBitIsOne(),D=Math.pow(2,a.count-(b+1));x?h(D,Ye.BLACK):(h(D,Ye.BLACK),h(D,Ye.RED))}return u},o=new R2(t.length),l=r(o);return new mt(s||e,l)};/**
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
 */let nl;const Ms={};class sn{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return A(Ms&&Ue,"ChildrenNode.ts has not been loaded"),nl=nl||new sn({".priority":Ms},{".priority":Ue}),nl}get(e){const n=oi(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof mt?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){A(e!==ei,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(oe.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let l;i?l=Fo(s,e.getCompare()):l=Ms;const a=e.toString(),c=Object.assign({},this.indexSet_);c[a]=e;const u=Object.assign({},this.indexes_);return u[a]=l,new sn(u,c)}addToIndexes(e,n){const s=No(this.indexes_,(i,r)=>{const o=oi(this.indexSet_,r);if(A(o,"Missing index implementation for "+r),i===Ms)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(oe.Wrap);let c=a.getNext();for(;c;)c.name!==e.name&&l.push(c),c=a.getNext();return l.push(e),Fo(l,o.getCompare())}else return Ms;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new oe(e.name,l))),a.insert(e,e.node)}});return new sn(s,this.indexSet_)}removeFromIndexes(e,n){const s=No(this.indexes_,i=>{if(i===Ms)return i;{const r=n.get(e.name);return r?i.remove(new oe(e.name,r)):i}});return new sn(s,this.indexSet_)}}/**
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
 */let Di;class Z{constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Mm(this.priorityNode_),this.children_.isEmpty()&&A(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Di||(Di=new Z(new mt(Kc),null,sn.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Di}updatePriority(e){return this.children_.isEmpty()?this:new Z(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Di:n}}getChild(e){const n=ie(e);return n===null?this:this.getImmediateChild(n).getChild(Se(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(A(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new oe(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Di:this.priorityNode_;return new Z(i,o,r)}}updateChild(e,n){const s=ie(e);if(s===null)return n;{A(ie(e)!==".priority"||Wn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Se(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Ue,(o,l)=>{n[o]=l.val(e),s++,r&&Z.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Lm(this.getPriority().val())+":"),this.forEachChild(Ue,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":fm(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new oe(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new oe(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new oe(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,oe.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Rr?-1:0}withIndex(e){if(e===ei||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new Z(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===ei||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ue),i=n.getIterator(Ue);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===ei?null:this.indexMap_.get(e.toString())}}Z.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class A2 extends Z{constructor(){super(new mt(Kc),Z.EMPTY_NODE,sn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Z.EMPTY_NODE}isEmpty(){return!1}}const Rr=new A2;Object.defineProperties(oe,{MIN:{value:new oe(li,Z.EMPTY_NODE)},MAX:{value:new oe(ys,Rr)}});Om.__EMPTY_NODE=Z.EMPTY_NODE;Ke.__childrenNodeConstructor=Z;E2(Rr);I2(Rr);/**
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
 */const P2=!0;function He(t,e=null){if(t===null)return Z.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),A(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ke(n,He(e))}if(!(t instanceof Array)&&P2){const n=[];let s=!1;if(tt(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=He(l);a.isEmpty()||(s=s||!a.getPriority().isEmpty(),n.push(new oe(o,a)))}}),n.length===0)return Z.EMPTY_NODE;const r=Fo(n,k2,o=>o.name,Kc);if(s){const o=Fo(n,Ue.getCompare());return new Z(r,He(e),new sn({".priority":o},{".priority":Ue}))}else return new Z(r,He(e),sn.Default)}else{let n=Z.EMPTY_NODE;return tt(t,(s,i)=>{if(Qt(t,s)&&s.substring(0,1)!=="."){const r=He(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(He(e))}}T2(He);/**
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
 */class N2 extends ya{constructor(e){super(),this.indexPath_=e,A(!le(e)&&ie(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?Ss(e.name,n.name):r}makePost(e,n){const s=He(e),i=Z.EMPTY_NODE.updateChild(this.indexPath_,s);return new oe(n,i)}maxPost(){const e=Z.EMPTY_NODE.updateChild(this.indexPath_,Rr);return new oe(ys,e)}toString(){return ar(this.indexPath_,0).join("/")}}/**
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
 */class D2 extends ya{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Ss(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return oe.MIN}maxPost(){return oe.MAX}makePost(e,n){const s=He(e);return new oe(n,s)}toString(){return".value"}}const O2=new D2;/**
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
 */function Bm(t){return{type:"value",snapshotNode:t}}function ci(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function lr(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function cr(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function L2(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Yc{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){A(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(s.getChild(i))&&l.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(lr(n,l)):A(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(ci(n,s)):o.trackChildChange(cr(n,s,l))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Ue,(i,r)=>{n.hasChild(i)||s.trackChildChange(lr(i,r))}),n.isLeafNode()||n.forEachChild(Ue,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(cr(i,r,o))}else s.trackChildChange(ci(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?Z.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class ur{constructor(e){this.indexedFilter_=new Yc(e.getIndex()),this.index_=e.getIndex(),this.startPost_=ur.getStartPost_(e),this.endPost_=ur.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new oe(n,s))||(s=Z.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=Z.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(Z.EMPTY_NODE);const r=this;return n.forEachChild(Ue,(o,l)=>{r.matches(new oe(o,l))||(i=i.updateImmediateChild(o,Z.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class M2{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new ur(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new oe(n,s))||(s=Z.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=Z.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=Z.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const l=r.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(Z.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const l=r.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,Z.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,g)=>d(g,h)}else o=this.index_.getCompare();const l=e;A(l.numChildren()===this.limit_,"");const a=new oe(n,s),c=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),u=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const g=h==null?1:o(h,a);if(u&&!s.isEmpty()&&g>=0)return r!=null&&r.trackChildChange(cr(n,s,d)),l.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(lr(n,d));const x=l.updateImmediateChild(n,Z.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(ci(h.name,h.node)),x.updateImmediateChild(h.name,h.node)):x}}else return s.isEmpty()?e:u&&o(c,a)>=0?(r!=null&&(r.trackChildChange(lr(c.name,c.node)),r.trackChildChange(ci(n,s))),l.updateImmediateChild(n,s).updateImmediateChild(c.name,Z.EMPTY_NODE)):e}}/**
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
 */class Qc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ue}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return A(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return A(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:li}hasEnd(){return this.endSet_}getIndexEndValue(){return A(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return A(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:ys}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return A(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ue}copy(){const e=new Qc;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function F2(t){return t.loadsAllData()?new Yc(t.getIndex()):t.hasLimit()?new M2(t):new ur(t)}function fd(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ue?n="$priority":t.index_===O2?n="$value":t.index_===ei?n="$key":(A(t.index_ instanceof N2,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=ze(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=ze(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+ze(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=ze(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+ze(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function dd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ue&&(e.i=t.index_.toString()),e}/**
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
 */class Uo extends Am{constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Sr("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(A(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Uo.getListenId_(e,s),l={};this.listens_[o]=l;const a=fd(e._queryParams);this.restRequest_(r+".json",a,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),oi(this.listens_,o)===l){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=Uo.getListenId_(e,n);delete this.listens_[s]}get(e){const n=fd(e._queryParams),s=e._path.toString(),i=new Tr;return this.restRequest_(s+".json",n,(r,o)=>{let l=o;r===404&&(l=null,r=null),r===null?(this.onDataUpdate_(s,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+bi(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(s&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ir(l.responseText)}catch{ut("Failed to parse JSON response for "+o+": "+l.responseText)}s(null,a)}else l.status!==401&&l.status!==404&&ut("Got unsuccessful REST response for "+o+" Status: "+l.status),s(l.status);s=null}},l.open("GET",o,!0),l.send()})}}/**
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
 */class U2{constructor(){this.rootNode_=Z.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Bo(){return{value:null,children:new Map}}function $m(t,e,n){if(le(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ie(e);t.children.has(s)||t.children.set(s,Bo());const i=t.children.get(s);e=Se(e),$m(i,e,n)}}function jl(t,e,n){t.value!==null?n(e,t.value):B2(t,(s,i)=>{const r=new Te(e.toString()+"/"+s);jl(i,r,n)})}function B2(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class $2{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&tt(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const hd=10*1e3,j2=30*1e3,V2=5*60*1e3;class H2{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new $2(e);const s=hd+(j2-hd)*Math.random();Wi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;tt(e,(i,r)=>{r>0&&Qt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*V2))}}/**
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
 */var Dt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Dt||(Dt={}));function Jc(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Xc(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Zc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class $o{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Dt.ACK_USER_WRITE,this.source=Jc()}operationForChild(e){if(le(this.path)){if(this.affectedTree.value!=null)return A(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new Te(e));return new $o(ge(),n,this.revert)}}else return A(ie(this.path)===e,"operationForChild called for unrelated child."),new $o(Se(this.path),this.affectedTree,this.revert)}}/**
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
 */class fr{constructor(e,n){this.source=e,this.path=n,this.type=Dt.LISTEN_COMPLETE}operationForChild(e){return le(this.path)?new fr(this.source,ge()):new fr(this.source,Se(this.path))}}/**
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
 */class bs{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Dt.OVERWRITE}operationForChild(e){return le(this.path)?new bs(this.source,ge(),this.snap.getImmediateChild(e)):new bs(this.source,Se(this.path),this.snap)}}/**
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
 */class ui{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Dt.MERGE}operationForChild(e){if(le(this.path)){const n=this.children.subtree(new Te(e));return n.isEmpty()?null:n.value?new bs(this.source,ge(),n.value):new ui(this.source,ge(),n)}else return A(ie(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ui(this.source,Se(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Gn{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(le(e))return this.isFullyInitialized()&&!this.filtered_;const n=ie(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class z2{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function W2(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(L2(o.childName,o.snapshotNode))}),Oi(t,i,"child_removed",e,s,n),Oi(t,i,"child_added",e,s,n),Oi(t,i,"child_moved",r,s,n),Oi(t,i,"child_changed",e,s,n),Oi(t,i,"value",e,s,n),i}function Oi(t,e,n,s,i,r){const o=s.filter(l=>l.type===n);o.sort((l,a)=>q2(t,l,a)),o.forEach(l=>{const a=G2(t,l,r);i.forEach(c=>{c.respondsTo(l.type)&&e.push(c.createEvent(a,t.query_))})})}function G2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function q2(t,e,n){if(e.childName==null||n.childName==null)throw yi("Should only compare child_ events.");const s=new oe(e.childName,e.snapshotNode),i=new oe(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function ba(t,e){return{eventCache:t,serverCache:e}}function Gi(t,e,n,s){return ba(new Gn(e,n,s),t.serverCache)}function jm(t,e,n,s){return ba(t.eventCache,new Gn(e,n,s))}function jo(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ws(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let sl;const K2=()=>(sl||(sl=new mt(N0)),sl);class xe{constructor(e,n=K2()){this.value=e,this.children=n}static fromObject(e){let n=new xe(null);return tt(e,(s,i)=>{n=n.set(new Te(s),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ge(),value:this.value};if(le(e))return null;{const s=ie(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Se(e),n);return r!=null?{path:Me(new Te(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(le(e))return this;{const n=ie(e),s=this.children.get(n);return s!==null?s.subtree(Se(e)):new xe(null)}}set(e,n){if(le(e))return new xe(n,this.children);{const s=ie(e),r=(this.children.get(s)||new xe(null)).set(Se(e),n),o=this.children.insert(s,r);return new xe(this.value,o)}}remove(e){if(le(e))return this.children.isEmpty()?new xe(null):new xe(null,this.children);{const n=ie(e),s=this.children.get(n);if(s){const i=s.remove(Se(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new xe(null):new xe(this.value,r)}else return this}}get(e){if(le(e))return this.value;{const n=ie(e),s=this.children.get(n);return s?s.get(Se(e)):null}}setTree(e,n){if(le(e))return n;{const s=ie(e),r=(this.children.get(s)||new xe(null)).setTree(Se(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new xe(this.value,o)}}fold(e){return this.fold_(ge(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Me(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ge(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(le(e))return null;{const r=ie(e),o=this.children.get(r);return o?o.findOnPath_(Se(e),Me(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ge(),n)}foreachOnPath_(e,n,s){if(le(e))return this;{this.value&&s(n,this.value);const i=ie(e),r=this.children.get(i);return r?r.foreachOnPath_(Se(e),Me(n,i),s):new xe(null)}}foreach(e){this.foreach_(ge(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Me(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Lt{constructor(e){this.writeTree_=e}static empty(){return new Lt(new xe(null))}}function qi(t,e,n){if(le(e))return new Lt(new xe(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=ct(i,e);return r=r.updateChild(o,n),new Lt(t.writeTree_.set(i,r))}else{const i=new xe(n),r=t.writeTree_.setTree(e,i);return new Lt(r)}}}function Vl(t,e,n){let s=t;return tt(n,(i,r)=>{s=qi(s,Me(e,i),r)}),s}function pd(t,e){if(le(e))return Lt.empty();{const n=t.writeTree_.setTree(e,new xe(null));return new Lt(n)}}function Hl(t,e){return Rs(t,e)!=null}function Rs(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ct(n.path,e)):null}function md(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ue,(s,i)=>{e.push(new oe(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new oe(s,i.value))}),e}function $n(t,e){if(le(e))return t;{const n=Rs(t,e);return n!=null?new Lt(new xe(n)):new Lt(t.writeTree_.subtree(e))}}function zl(t){return t.writeTree_.isEmpty()}function fi(t,e){return Vm(ge(),t.writeTree_,e)}function Vm(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(A(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Vm(Me(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Me(t,".priority"),s)),n}}/**
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
 */function wa(t,e){return Gm(e,t)}function Y2(t,e,n,s,i){A(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=qi(t.visibleWrites,e,n)),t.lastWriteId=s}function Q2(t,e,n,s){A(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Vl(t.visibleWrites,e,n),t.lastWriteId=s}function J2(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function X2(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);A(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&Z2(l,s.path)?i=!1:It(s.path,l.path)&&(r=!0)),o--}if(i){if(r)return ew(t),!0;if(s.snap)t.visibleWrites=pd(t.visibleWrites,s.path);else{const l=s.children;tt(l,a=>{t.visibleWrites=pd(t.visibleWrites,Me(s.path,a))})}return!0}else return!1}function Z2(t,e){if(t.snap)return It(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&It(Me(t.path,n),e))return!0;return!1}function ew(t){t.visibleWrites=Hm(t.allWrites,tw,ge()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function tw(t){return t.visible}function Hm(t,e,n){let s=Lt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let l;if(r.snap)It(n,o)?(l=ct(n,o),s=qi(s,l,r.snap)):It(o,n)&&(l=ct(o,n),s=qi(s,ge(),r.snap.getChild(l)));else if(r.children){if(It(n,o))l=ct(n,o),s=Vl(s,l,r.children);else if(It(o,n))if(l=ct(o,n),le(l))s=Vl(s,ge(),r.children);else{const a=oi(r.children,ie(l));if(a){const c=a.getChild(Se(l));s=qi(s,ge(),c)}}}else throw yi("WriteRecord should have .snap or .children")}}return s}function zm(t,e,n,s,i){if(!s&&!i){const r=Rs(t.visibleWrites,e);if(r!=null)return r;{const o=$n(t.visibleWrites,e);if(zl(o))return n;if(n==null&&!Hl(o,ge()))return null;{const l=n||Z.EMPTY_NODE;return fi(o,l)}}}else{const r=$n(t.visibleWrites,e);if(!i&&zl(r))return n;if(!i&&n==null&&!Hl(r,ge()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(It(c.path,e)||It(e,c.path))},l=Hm(t.allWrites,o,e),a=n||Z.EMPTY_NODE;return fi(l,a)}}}function nw(t,e,n){let s=Z.EMPTY_NODE;const i=Rs(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Ue,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=$n(t.visibleWrites,e);return n.forEachChild(Ue,(o,l)=>{const a=fi($n(r,new Te(o)),l);s=s.updateImmediateChild(o,a)}),md(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=$n(t.visibleWrites,e);return md(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function sw(t,e,n,s,i){A(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Me(e,n);if(Hl(t.visibleWrites,r))return null;{const o=$n(t.visibleWrites,r);return zl(o)?i.getChild(n):fi(o,i.getChild(n))}}function iw(t,e,n,s){const i=Me(e,n),r=Rs(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=$n(t.visibleWrites,i);return fi(o,s.getNode().getImmediateChild(n))}else return null}function rw(t,e){return Rs(t.visibleWrites,e)}function ow(t,e,n,s,i,r,o){let l;const a=$n(t.visibleWrites,e),c=Rs(a,ge());if(c!=null)l=c;else if(n!=null)l=fi(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const u=[],d=o.getCompare(),h=r?l.getReverseIteratorFrom(s,o):l.getIteratorFrom(s,o);let g=h.getNext();for(;g&&u.length<i;)d(g,s)!==0&&u.push(g),g=h.getNext();return u}else return[]}function aw(){return{visibleWrites:Lt.empty(),allWrites:[],lastWriteId:-1}}function Vo(t,e,n,s){return zm(t.writeTree,t.treePath,e,n,s)}function eu(t,e){return nw(t.writeTree,t.treePath,e)}function gd(t,e,n,s){return sw(t.writeTree,t.treePath,e,n,s)}function Ho(t,e){return rw(t.writeTree,Me(t.treePath,e))}function lw(t,e,n,s,i,r){return ow(t.writeTree,t.treePath,e,n,s,i,r)}function tu(t,e,n){return iw(t.writeTree,t.treePath,e,n)}function Wm(t,e){return Gm(Me(t.treePath,e),t.writeTree)}function Gm(t,e){return{treePath:t,writeTree:e}}/**
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
 */class cw{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;A(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),A(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,cr(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,lr(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,ci(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,cr(s,e.snapshotNode,i.oldSnap));else throw yi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class uw{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const qm=new uw;class nu{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Gn(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return tu(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ws(this.viewCache_),r=lw(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function fw(t){return{filter:t}}function dw(t,e){A(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),A(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hw(t,e,n,s,i){const r=new cw;let o,l;if(n.type===Dt.OVERWRITE){const c=n;c.source.fromUser?o=Wl(t,e,c.path,c.snap,s,i,r):(A(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered()&&!le(c.path),o=zo(t,e,c.path,c.snap,s,i,l,r))}else if(n.type===Dt.MERGE){const c=n;c.source.fromUser?o=mw(t,e,c.path,c.children,s,i,r):(A(c.source.fromServer,"Unknown source."),l=c.source.tagged||e.serverCache.isFiltered(),o=Gl(t,e,c.path,c.children,s,i,l,r))}else if(n.type===Dt.ACK_USER_WRITE){const c=n;c.revert?o=vw(t,e,c.path,s,i,r):o=gw(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Dt.LISTEN_COMPLETE)o=_w(t,e,n.path,s,r);else throw yi("Unknown operation type: "+n.type);const a=r.getChanges();return pw(e,o,a),{viewCache:o,changes:a}}function pw(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=jo(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Bm(jo(e)))}}function Km(t,e,n,s,i,r){const o=e.eventCache;if(Ho(s,n)!=null)return e;{let l,a;if(le(n))if(A(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ws(e),u=c instanceof Z?c:Z.EMPTY_NODE,d=eu(s,u);l=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Vo(s,ws(e));l=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ie(n);if(c===".priority"){A(Wn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();a=e.serverCache.getNode();const d=gd(s,n,u,a);d!=null?l=t.filter.updatePriority(u,d):l=o.getNode()}else{const u=Se(n);let d;if(o.isCompleteForChild(c)){a=e.serverCache.getNode();const h=gd(s,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=tu(s,c,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),c,d,u,i,r):l=o.getNode()}}return Gi(e,l,o.isFullyInitialized()||le(n),t.filter.filtersNodes())}}function zo(t,e,n,s,i,r,o,l){const a=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(le(n))c=u.updateFullNode(a.getNode(),s,null);else if(u.filtersNodes()&&!a.isFiltered()){const g=a.getNode().updateChild(n,s);c=u.updateFullNode(a.getNode(),g,null)}else{const g=ie(n);if(!a.isCompleteForPath(n)&&Wn(n)>1)return e;const b=Se(n),D=a.getNode().getImmediateChild(g).updateChild(b,s);g===".priority"?c=u.updatePriority(a.getNode(),D):c=u.updateChild(a.getNode(),g,D,b,qm,null)}const d=jm(e,c,a.isFullyInitialized()||le(n),u.filtersNodes()),h=new nu(i,d,r);return Km(t,d,n,i,h,l)}function Wl(t,e,n,s,i,r,o){const l=e.eventCache;let a,c;const u=new nu(i,e,r);if(le(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),a=Gi(e,c,!0,t.filter.filtersNodes());else{const d=ie(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),a=Gi(e,c,l.isFullyInitialized(),l.isFiltered());else{const h=Se(n),g=l.getNode().getImmediateChild(d);let b;if(le(h))b=s;else{const x=u.getCompleteChild(d);x!=null?Wc(h)===".priority"&&x.getChild(Nm(h)).isEmpty()?b=x:b=x.updateChild(h,s):b=Z.EMPTY_NODE}if(g.equals(b))a=e;else{const x=t.filter.updateChild(l.getNode(),d,b,h,u,o);a=Gi(e,x,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function _d(t,e){return t.eventCache.isCompleteForChild(e)}function mw(t,e,n,s,i,r,o){let l=e;return s.foreach((a,c)=>{const u=Me(n,a);_d(e,ie(u))&&(l=Wl(t,l,u,c,i,r,o))}),s.foreach((a,c)=>{const u=Me(n,a);_d(e,ie(u))||(l=Wl(t,l,u,c,i,r,o))}),l}function vd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Gl(t,e,n,s,i,r,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,c;le(n)?c=s:c=new xe(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),b=vd(t,g,h);a=zo(t,a,new Te(d),b,i,r,o,l)}}),c.children.inorderTraversal((d,h)=>{const g=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!g){const b=e.serverCache.getNode().getImmediateChild(d),x=vd(t,b,h);a=zo(t,a,new Te(d),x,i,r,o,l)}}),a}function gw(t,e,n,s,i,r,o){if(Ho(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(s.value!=null){if(le(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return zo(t,e,n,a.getNode().getChild(n),i,r,l,o);if(le(n)){let c=new xe(null);return a.getNode().forEachChild(ei,(u,d)=>{c=c.set(new Te(u),d)}),Gl(t,e,n,c,i,r,l,o)}else return e}else{let c=new xe(null);return s.foreach((u,d)=>{const h=Me(n,u);a.isCompleteForPath(h)&&(c=c.set(u,a.getNode().getChild(h)))}),Gl(t,e,n,c,i,r,l,o)}}function _w(t,e,n,s,i){const r=e.serverCache,o=jm(e,r.getNode(),r.isFullyInitialized()||le(n),r.isFiltered());return Km(t,o,n,s,qm,i)}function vw(t,e,n,s,i,r){let o;if(Ho(s,n)!=null)return e;{const l=new nu(s,e,i),a=e.eventCache.getNode();let c;if(le(n)||ie(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Vo(s,ws(e));else{const d=e.serverCache.getNode();A(d instanceof Z,"serverChildren would be complete if leaf node"),u=eu(s,d)}u=u,c=t.filter.updateFullNode(a,u,r)}else{const u=ie(n);let d=tu(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=a.getImmediateChild(u)),d!=null?c=t.filter.updateChild(a,u,d,Se(n),l,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(a,u,Z.EMPTY_NODE,Se(n),l,r):c=a,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Vo(s,ws(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ho(s,ge())!=null,Gi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class yw{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Yc(s.getIndex()),r=F2(s);this.processor_=fw(r);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(Z.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(Z.EMPTY_NODE,l.getNode(),null),u=new Gn(a,o.isFullyInitialized(),i.filtersNodes()),d=new Gn(c,l.isFullyInitialized(),r.filtersNodes());this.viewCache_=ba(d,u),this.eventGenerator_=new z2(this.query_)}get query(){return this.query_}}function bw(t){return t.viewCache_.serverCache.getNode()}function ww(t){return jo(t.viewCache_)}function Cw(t,e){const n=ws(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!le(e)&&!n.getImmediateChild(ie(e)).isEmpty())?n.getChild(e):null}function yd(t){return t.eventRegistrations_.length===0}function kw(t,e){t.eventRegistrations_.push(e)}function bd(t,e,n){const s=[];if(n){A(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function wd(t,e,n,s){e.type===Dt.MERGE&&e.source.queryId!==null&&(A(ws(t.viewCache_),"We should always have a full cache before handling merges"),A(jo(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=hw(t.processor_,i,e,n,s);return dw(t.processor_,r.viewCache),A(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ym(t,r.changes,r.viewCache.eventCache.getNode(),null)}function Ew(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Ue,(r,o)=>{s.push(ci(r,o))}),n.isFullyInitialized()&&s.push(Bm(n.getNode())),Ym(t,s,n.getNode(),e)}function Ym(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return W2(t.eventGenerator_,e,n,i)}/**
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
 */let Wo;class Qm{constructor(){this.views=new Map}}function Tw(t){A(!Wo,"__referenceConstructor has already been defined"),Wo=t}function Iw(){return A(Wo,"Reference.ts has not been loaded"),Wo}function xw(t){return t.views.size===0}function su(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return A(r!=null,"SyncTree gave us an op for an invalid query."),wd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(wd(o,e,n,s));return r}}function Jm(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let l=Vo(n,i?s:null),a=!1;l?a=!0:s instanceof Z?(l=eu(n,s),a=!1):(l=Z.EMPTY_NODE,a=!1);const c=ba(new Gn(l,a,!1),new Gn(s,i,!1));return new yw(e,c)}return o}function Sw(t,e,n,s,i,r){const o=Jm(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),kw(o,n),Ew(o,n)}function Rw(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const l=qn(t);if(i==="default")for(const[a,c]of t.views.entries())o=o.concat(bd(c,n,s)),yd(c)&&(t.views.delete(a),c.query._queryParams.loadsAllData()||r.push(c.query));else{const a=t.views.get(i);a&&(o=o.concat(bd(a,n,s)),yd(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||r.push(a.query)))}return l&&!qn(t)&&r.push(new(Iw())(e._repo,e._path)),{removed:r,events:o}}function Xm(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function jn(t,e){let n=null;for(const s of t.views.values())n=n||Cw(s,e);return n}function Zm(t,e){if(e._queryParams.loadsAllData())return Ca(t);{const s=e._queryIdentifier;return t.views.get(s)}}function eg(t,e){return Zm(t,e)!=null}function qn(t){return Ca(t)!=null}function Ca(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Go;function Aw(t){A(!Go,"__referenceConstructor has already been defined"),Go=t}function Pw(){return A(Go,"Reference.ts has not been loaded"),Go}let Nw=1;class Cd{constructor(e){this.listenProvider_=e,this.syncPointTree_=new xe(null),this.pendingWriteTree_=aw(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function tg(t,e,n,s,i){return Y2(t.pendingWriteTree_,e,n,s,i),i?ki(t,new bs(Jc(),e,n)):[]}function Dw(t,e,n,s){Q2(t.pendingWriteTree_,e,n,s);const i=xe.fromObject(n);return ki(t,new ui(Jc(),e,i))}function On(t,e,n=!1){const s=J2(t.pendingWriteTree_,e);if(X2(t.pendingWriteTree_,e)){let r=new xe(null);return s.snap!=null?r=r.set(ge(),!0):tt(s.children,o=>{r=r.set(new Te(o),!0)}),ki(t,new $o(s.path,r,n))}else return[]}function Ar(t,e,n){return ki(t,new bs(Xc(),e,n))}function Ow(t,e,n){const s=xe.fromObject(n);return ki(t,new ui(Xc(),e,s))}function Lw(t,e){return ki(t,new fr(Xc(),e))}function Mw(t,e,n){const s=ru(t,n);if(s){const i=ou(s),r=i.path,o=i.queryId,l=ct(r,e),a=new fr(Zc(o),l);return au(t,r,a)}else return[]}function qo(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let l=[];if(o&&(e._queryIdentifier==="default"||eg(o,e))){const a=Rw(o,e,n,s);xw(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=a.removed;if(l=a.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,g)=>qn(g));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const g=Bw(h);for(let b=0;b<g.length;++b){const x=g[b],D=x.query,C=rg(t,x);t.listenProvider_.startListening(Ki(D),dr(t,D),C.hashFn,C.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ki(e),null):c.forEach(h=>{const g=t.queryToTagMap.get(ka(h));t.listenProvider_.stopListening(Ki(h),g)}))}$w(t,c)}return l}function ng(t,e,n,s){const i=ru(t,s);if(i!=null){const r=ou(i),o=r.path,l=r.queryId,a=ct(o,e),c=new bs(Zc(l),a,n);return au(t,o,c)}else return[]}function Fw(t,e,n,s){const i=ru(t,s);if(i){const r=ou(i),o=r.path,l=r.queryId,a=ct(o,e),c=xe.fromObject(n),u=new ui(Zc(l),a,c);return au(t,o,u)}else return[]}function ql(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,g)=>{const b=ct(h,i);r=r||jn(g,b),o=o||qn(g)});let l=t.syncPointTree_.get(i);l?(o=o||qn(l),r=r||jn(l,ge())):(l=new Qm,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;r!=null?a=!0:(a=!1,r=Z.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,b)=>{const x=jn(b,ge());x&&(r=r.updateImmediateChild(g,x))}));const c=eg(l,e);if(!c&&!e._queryParams.loadsAllData()){const h=ka(e);A(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const g=jw();t.queryToTagMap.set(h,g),t.tagToQueryMap.set(g,h)}const u=wa(t.pendingWriteTree_,i);let d=Sw(l,e,n,u,r,a);if(!c&&!o&&!s){const h=Zm(l,e);d=d.concat(Vw(t,e,h))}return d}function iu(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=ct(o,e),c=jn(l,a);if(c)return c});return zm(i,e,r,n,!0)}function Uw(t,e){const n=e._path;let s=null;t.syncPointTree_.foreachOnPath(n,(c,u)=>{const d=ct(c,n);s=s||jn(u,d)});let i=t.syncPointTree_.get(n);i?s=s||jn(i,ge()):(i=new Qm,t.syncPointTree_=t.syncPointTree_.set(n,i));const r=s!=null,o=r?new Gn(s,!0,!1):null,l=wa(t.pendingWriteTree_,e._path),a=Jm(i,e,l,r?o.getNode():Z.EMPTY_NODE,r);return ww(a)}function ki(t,e){return sg(e,t.syncPointTree_,null,wa(t.pendingWriteTree_,ge()))}function sg(t,e,n,s){if(le(t.path))return ig(t,e,n,s);{const i=e.get(ge());n==null&&i!=null&&(n=jn(i,ge()));let r=[];const o=ie(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const c=n?n.getImmediateChild(o):null,u=Wm(s,o);r=r.concat(sg(l,a,c,u))}return i&&(r=r.concat(su(i,t,s,n))),r}}function ig(t,e,n,s){const i=e.get(ge());n==null&&i!=null&&(n=jn(i,ge()));let r=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,c=Wm(s,o),u=t.operationForChild(o);u&&(r=r.concat(ig(u,l,a,c)))}),i&&(r=r.concat(su(i,t,s,n))),r}function rg(t,e){const n=e.query,s=dr(t,n);return{hashFn:()=>(bw(e)||Z.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Mw(t,n._path,s):Lw(t,n._path);{const r=L0(i,n);return qo(t,n,null,r)}}}}function dr(t,e){const n=ka(e);return t.queryToTagMap.get(n)}function ka(t){return t._path.toString()+"$"+t._queryIdentifier}function ru(t,e){return t.tagToQueryMap.get(e)}function ou(t){const e=t.indexOf("$");return A(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new Te(t.substr(0,e))}}function au(t,e,n){const s=t.syncPointTree_.get(e);A(s,"Missing sync point for query tag that we're tracking");const i=wa(t.pendingWriteTree_,e);return su(s,n,i,null)}function Bw(t){return t.fold((e,n,s)=>{if(n&&qn(n))return[Ca(n)];{let i=[];return n&&(i=Xm(n)),tt(s,(r,o)=>{i=i.concat(o)}),i}})}function Ki(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Pw())(t._repo,t._path):t}function $w(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=ka(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function jw(){return Nw++}function Vw(t,e,n){const s=e._path,i=dr(t,e),r=rg(t,n),o=t.listenProvider_.startListening(Ki(e),i,r.hashFn,r.onComplete),l=t.syncPointTree_.subtree(s);if(i)A(!qn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((c,u,d)=>{if(!le(c)&&u&&qn(u))return[Ca(u).query];{let h=[];return u&&(h=h.concat(Xm(u).map(g=>g.query))),tt(d,(g,b)=>{h=h.concat(b)}),h}});for(let c=0;c<a.length;++c){const u=a[c];t.listenProvider_.stopListening(Ki(u),dr(t,u))}}return o}/**
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
 */class lu{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new lu(n)}node(){return this.node_}}class cu{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Me(this.path_,e);return new cu(this.syncTree_,n)}node(){return iu(this.syncTree_,this.path_)}}const Hw=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},kd=function(t,e,n){if(!t||typeof t!="object")return t;if(A(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return zw(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Ww(t[".sv"],e);A(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},zw=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:A(!1,"Unexpected server value: "+t)}},Ww=function(t,e,n){t.hasOwnProperty("increment")||A(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&A(!1,"Unexpected increment value: "+s);const i=e.node();if(A(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},og=function(t,e,n,s){return uu(e,new cu(n,t),s)},ag=function(t,e,n){return uu(t,new lu(e),n)};function uu(t,e,n){const s=t.getPriority().val(),i=kd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,l=kd(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new Ke(l,He(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ke(i))),o.forEachChild(Ue,(l,a)=>{const c=uu(a,e.getImmediateChild(l),n);c!==a&&(r=r.updateImmediateChild(l,c))}),r}}/**
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
 */class fu{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function du(t,e){let n=e instanceof Te?e:new Te(e),s=t,i=ie(n);for(;i!==null;){const r=oi(s.node.children,i)||{children:{},childCount:0};s=new fu(i,s,r),n=Se(n),i=ie(n)}return s}function Ei(t){return t.node.value}function lg(t,e){t.node.value=e,Kl(t)}function cg(t){return t.node.childCount>0}function Gw(t){return Ei(t)===void 0&&!cg(t)}function Ea(t,e){tt(t.node.children,(n,s)=>{e(new fu(n,t,s))})}function ug(t,e,n,s){n&&!s&&e(t),Ea(t,i=>{ug(i,e,!0,s)}),n&&s&&e(t)}function qw(t,e,n){let s=n?t:t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Pr(t){return new Te(t.parent===null?t.name:Pr(t.parent)+"/"+t.name)}function Kl(t){t.parent!==null&&Kw(t.parent,t.name,t)}function Kw(t,e,n){const s=Gw(n),i=Qt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Kl(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Kl(t))}/**
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
 */const Yw=/[\[\].#$\/\u0000-\u001F\u007F]/,Qw=/[\[\].#$\u0000-\u001F\u007F]/,il=10*1024*1024,hu=function(t){return typeof t=="string"&&t.length!==0&&!Yw.test(t)},fg=function(t){return typeof t=="string"&&t.length!==0&&!Qw.test(t)},Jw=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),fg(t)},Xw=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!$c(t)||t&&typeof t=="object"&&Qt(t,".sv")},dg=function(t,e,n,s){s&&e===void 0||Ta(_a(t,"value"),e,n)},Ta=function(t,e,n){const s=n instanceof Te?new m2(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+is(s));if(typeof e=="function")throw new Error(t+"contains a function "+is(s)+" with contents = "+e.toString());if($c(e))throw new Error(t+"contains "+e.toString()+" "+is(s));if(typeof e=="string"&&e.length>il/3&&va(e)>il)throw new Error(t+"contains a string greater than "+il+" utf8 bytes "+is(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(tt(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!hu(o)))throw new Error(t+" contains an invalid key ("+o+") "+is(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);g2(s,o),Ta(t,l,s),_2(s)}),i&&r)throw new Error(t+' contains ".value" child '+is(s)+" in addition to actual children.")}},Zw=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=ar(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!hu(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(p2);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&It(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},eC=function(t,e,n,s){if(s&&e===void 0)return;const i=_a(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];tt(e,(o,l)=>{const a=new Te(o);if(Ta(i,l,Me(n,a)),Wc(a)===".priority"&&!Xw(l))throw new Error(i+"contains an invalid value for '"+a.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(a)}),Zw(i,r)},hg=function(t,e,n,s){if(!(s&&n===void 0)&&!fg(n))throw new Error(_a(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},tC=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),hg(t,e,n,s)},pu=function(t,e){if(ie(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},nC=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!hu(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Jw(n))throw new Error(_a(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class sC{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ia(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Gc(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function pg(t,e,n){Ia(t,n),mg(t,s=>Gc(s,e))}function St(t,e,n){Ia(t,n),mg(t,s=>It(s,e)||It(e,s))}function mg(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(iC(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function iC(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();hs&&Je("event: "+n.toString()),Ci(s)}}}/**
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
 */const rC="repo_interrupt",oC=25;class aC{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sC,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Bo(),this.transactionQueueTree_=new fu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function lC(t,e,n){if(t.stats_=Hc(t.repoInfo_),t.forceRestClient_||B0())t.server_=new Uo(t.repoInfo_,(s,i,r,o)=>{Ed(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>Td(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ze(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new cn(t.repoInfo_,e,(s,i,r,o)=>{Ed(t,s,i,r,o)},s=>{Td(t,s)},s=>{cC(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=z0(t.repoInfo_,()=>new H2(t.stats_,t.server_)),t.infoData_=new U2,t.infoSyncTree_=new Cd({startListening:(s,i,r,o)=>{let l=[];const a=t.infoData_.getNode(s._path);return a.isEmpty()||(l=Ar(t.infoSyncTree_,s._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),mu(t,"connected",!1),t.serverSyncTree_=new Cd({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(l,a)=>{const c=o(l,a);St(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function gg(t){const n=t.infoData_.getNode(new Te(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function xa(t){return Hw({timestamp:gg(t)})}function Ed(t,e,n,s,i){t.dataUpdateCount++;const r=new Te(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const a=No(n,c=>He(c));o=Fw(t.serverSyncTree_,r,a,i)}else{const a=He(n);o=ng(t.serverSyncTree_,r,a,i)}else if(s){const a=No(n,c=>He(c));o=Ow(t.serverSyncTree_,r,a)}else{const a=He(n);o=Ar(t.serverSyncTree_,r,a)}let l=r;o.length>0&&(l=di(t,r)),St(t.eventQueue_,l,o)}function Td(t,e){mu(t,"connected",e),e===!1&&hC(t)}function cC(t,e){tt(e,(n,s)=>{mu(t,n,s)})}function mu(t,e,n){const s=new Te("/.info/"+e),i=He(n);t.infoData_.updateSnapshot(s,i);const r=Ar(t.infoSyncTree_,s,i);St(t.eventQueue_,s,r)}function gu(t){return t.nextWriteId_++}function uC(t,e,n){const s=Uw(t.serverSyncTree_,e);return s!=null?Promise.resolve(s):t.server_.get(e).then(i=>{const r=He(i).withIndex(e._queryParams.getIndex());ql(t.serverSyncTree_,e,n,!0);let o;if(e._queryParams.loadsAllData())o=Ar(t.serverSyncTree_,e._path,r);else{const l=dr(t.serverSyncTree_,e);o=ng(t.serverSyncTree_,e._path,r,l)}return St(t.eventQueue_,e._path,o),qo(t.serverSyncTree_,e,n,null,!0),r},i=>(Nr(t,"get for query "+ze(e)+" failed: "+i),Promise.reject(new Error(i))))}function fC(t,e,n,s,i){Nr(t,"set",{path:e.toString(),value:n,priority:s});const r=xa(t),o=He(n,s),l=iu(t.serverSyncTree_,e),a=ag(o,l,r),c=gu(t),u=tg(t.serverSyncTree_,e,a,c,!0);Ia(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,g)=>{const b=h==="ok";b||ut("set at "+e+" failed: "+h);const x=On(t.serverSyncTree_,c,!b);St(t.eventQueue_,e,x),Yl(t,i,h,g)});const d=vu(t,e);di(t,d),St(t.eventQueue_,d,[])}function dC(t,e,n,s){Nr(t,"update",{path:e.toString(),value:n});let i=!0;const r=xa(t),o={};if(tt(n,(l,a)=>{i=!1,o[l]=og(Me(e,l),He(a),t.serverSyncTree_,r)}),i)Je("update() called with empty data.  Don't do anything."),Yl(t,s,"ok",void 0);else{const l=gu(t),a=Dw(t.serverSyncTree_,e,o,l);Ia(t.eventQueue_,a),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||ut("update at "+e+" failed: "+c);const h=On(t.serverSyncTree_,l,!d),g=h.length>0?di(t,e):e;St(t.eventQueue_,g,h),Yl(t,s,c,u)}),tt(n,c=>{const u=vu(t,Me(e,c));di(t,u)}),St(t.eventQueue_,e,[])}}function hC(t){Nr(t,"onDisconnectEvents");const e=xa(t),n=Bo();jl(t.onDisconnect_,ge(),(i,r)=>{const o=og(i,r,t.serverSyncTree_,e);$m(n,i,o)});let s=[];jl(n,ge(),(i,r)=>{s=s.concat(Ar(t.serverSyncTree_,i,r));const o=vu(t,i);di(t,o)}),t.onDisconnect_=Bo(),St(t.eventQueue_,ge(),s)}function pC(t,e,n){let s;ie(e._path)===".info"?s=ql(t.infoSyncTree_,e,n):s=ql(t.serverSyncTree_,e,n),pg(t.eventQueue_,e._path,s)}function Id(t,e,n){let s;ie(e._path)===".info"?s=qo(t.infoSyncTree_,e,n):s=qo(t.serverSyncTree_,e,n),pg(t.eventQueue_,e._path,s)}function mC(t){t.persistentConnection_&&t.persistentConnection_.interrupt(rC)}function Nr(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Je(n,...e)}function Yl(t,e,n,s){e&&Ci(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function _g(t,e,n){return iu(t.serverSyncTree_,e,n)||Z.EMPTY_NODE}function _u(t,e=t.transactionQueueTree_){if(e||Sa(t,e),Ei(e)){const n=yg(t,e);A(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&gC(t,Pr(e),n)}else cg(e)&&Ea(e,n=>{_u(t,n)})}function gC(t,e,n){const s=n.map(c=>c.currentWriteId),i=_g(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];A(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=ct(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const l=r.val(!0),a=e;t.server_.put(a.toString(),l,c=>{Nr(t,"transaction put response",{path:a.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(On(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Sa(t,du(t.transactionQueueTree_,e)),_u(t,t.transactionQueueTree_),St(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Ci(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ut("transaction at "+a.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}di(t,e)}},o)}function di(t,e){const n=vg(t,e),s=Pr(n),i=yg(t,n);return _C(t,i,s),s}function _C(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],c=ct(n,a.path);let u=!1,d;if(A(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)u=!0,d=a.abortReason,i=i.concat(On(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=oC)u=!0,d="maxretry",i=i.concat(On(t.serverSyncTree_,a.currentWriteId,!0));else{const h=_g(t,a.path,o);a.currentInputSnapshot=h;const g=e[l].update(h.val());if(g!==void 0){Ta("transaction failed: Data returned ",g,a.path);let b=He(g);typeof g=="object"&&g!=null&&Qt(g,".priority")||(b=b.updatePriority(h.getPriority()));const D=a.currentWriteId,C=xa(t),E=ag(b,h,C);a.currentOutputSnapshotRaw=b,a.currentOutputSnapshotResolved=E,a.currentWriteId=gu(t),o.splice(o.indexOf(D),1),i=i.concat(tg(t.serverSyncTree_,a.path,E,a.currentWriteId,a.applyLocally)),i=i.concat(On(t.serverSyncTree_,D,!0))}else u=!0,d="nodata",i=i.concat(On(t.serverSyncTree_,a.currentWriteId,!0))}St(t.eventQueue_,n,i),i=[],u&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?s.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):s.push(()=>e[l].onComplete(new Error(d),!1,null))))}Sa(t,t.transactionQueueTree_);for(let l=0;l<s.length;l++)Ci(s[l]);_u(t,t.transactionQueueTree_)}function vg(t,e){let n,s=t.transactionQueueTree_;for(n=ie(e);n!==null&&Ei(s)===void 0;)s=du(s,n),e=Se(e),n=ie(e);return s}function yg(t,e){const n=[];return bg(t,e,n),n.sort((s,i)=>s.order-i.order),n}function bg(t,e,n){const s=Ei(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ea(e,i=>{bg(t,i,n)})}function Sa(t,e){const n=Ei(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,lg(e,n.length>0?n:void 0)}Ea(e,s=>{Sa(t,s)})}function vu(t,e){const n=Pr(vg(t,e)),s=du(t.transactionQueueTree_,e);return qw(s,i=>{rl(t,i)}),rl(t,s),ug(s,i=>{rl(t,i)}),n}function rl(t,e){const n=Ei(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(A(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(A(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(On(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?lg(e,void 0):n.length=r+1,St(t.eventQueue_,Pr(e),i);for(let o=0;o<s.length;o++)Ci(s[o])}}/**
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
 */function vC(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function yC(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ut(`Invalid query segment '${n}' in query '${t}'`)}return e}const xd=function(t,e){const n=bC(t),s=n.namespace;n.domain==="firebase.com"&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||A0();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new km(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new Te(n.pathString)}},bC=function(t){let e="",n="",s="",i="",r="",o=!0,l="https",a=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(l=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=vC(t.substring(u,d)));const h=yC(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(c+1),10)):c=e.length;const g=e.slice(0,c);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const b=e.indexOf(".");s=e.substring(0,b).toLowerCase(),n=e.substring(b+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:a,domain:n,subdomain:s,secure:o,scheme:l,pathString:i,namespace:r}};/**
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
 */const Sd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wC=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=Sd.charAt(n%64),n=Math.floor(n/64);A(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Sd.charAt(e[i]);return A(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class wg{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+ze(this.snapshot.exportVal())}}class Cg{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class kg{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return A(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class yu{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return le(this._path)?null:Wc(this._path)}get ref(){return new Jt(this._repo,this._path)}get _queryIdentifier(){const e=dd(this._queryParams),n=jc(e);return n==="{}"?"default":n}get _queryObject(){return dd(this._queryParams)}isEqual(e){if(e=nt(e),!(e instanceof yu))return!1;const n=this._repo===e._repo,s=Gc(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+h2(this._path)}}class Jt extends yu{constructor(e,n){super(e,n,new Qc,!1)}get parent(){const e=Nm(this._path);return e===null?null:new Jt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class hi{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new Te(e),s=pi(this.ref,e);return new hi(this._node.getChild(n),s,Ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new hi(i,pi(this.ref,s),Ue)))}hasChild(e){const n=new Te(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Xe(t,e){return t=nt(t),t._checkNotDeleted("ref"),e!==void 0?pi(t._root,e):t._root}function pi(t,e){return t=nt(t),ie(t._path)===null?tC("child","path",e,!1):hg("child","path",e,!1),new Jt(t._repo,Me(t._path,e))}function CC(t,e){t=nt(t),pu("push",t._path),dg("push",e,t._path,!0);const n=gg(t._repo),s=wC(n),i=pi(t,s),r=pi(t,s);let o;return e!=null?o=bu(r,e).then(()=>r):o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function kC(t){return pu("remove",t._path),bu(t,null)}function bu(t,e){t=nt(t),pu("set",t._path),dg("set",e,t._path,!1);const n=new Tr;return fC(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function EC(t,e){eC("update",e,t._path,!1);const n=new Tr;return dC(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function TC(t){t=nt(t);const e=new kg(()=>{}),n=new Ra(e);return uC(t._repo,t,n).then(s=>new hi(s,new Jt(t._repo,t._path),t._queryParams.getIndex()))}class Ra{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new wg("value",this,new hi(e.snapshotNode,new Jt(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Cg(this,e,n):null}matches(e){return e instanceof Ra?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class wu{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Cg(this,e,n):null}createEvent(e,n){A(e.childName!=null,"Child events should have a childName.");const s=pi(new Jt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new wg(e.type,this,new hi(e.snapshotNode,s,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof wu?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function IC(t,e,n,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const a=n,c=(u,d)=>{Id(t._repo,t,l),a(u,d)};c.userCallback=n.userCallback,c.context=n.context,n=c}const o=new kg(n,r||void 0),l=e==="value"?new Ra(o):new wu(e,o);return pC(t._repo,t,l),()=>Id(t._repo,t,l)}function Ut(t,e,n,s){return IC(t,"value",e,n,s)}Tw(Jt);Aw(Jt);/**
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
 */const xC="FIREBASE_DATABASE_EMULATOR_HOST",Ql={};let SC=!1;function RC(t,e,n,s){t.repoInfo_=new km(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),s&&(t.authTokenProvider_=s)}function AC(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Je("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=xd(r,i),l=o.repoInfo,a,c;typeof process<"u"&&Kf&&(c=Kf[xC]),c?(a=!0,r=`http://${c}?ns=${l.namespace}`,o=xd(r,i),l=o.repoInfo):a=!o.repoInfo.secure;const u=i&&a?new Zs(Zs.OWNER):new j0(t.name,t.options,e);nC("Invalid Firebase Database URL",o),le(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const d=NC(l,t,u,new $0(t.name,n));return new DC(d,t)}function PC(t,e){const n=Ql[e];(!n||n[t.key]!==t)&&un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mC(t),delete n[t.key]}function NC(t,e,n,s){let i=Ql[e.name];i||(i={},Ql[e.name]=i);let r=i[t.toURLString()];return r&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new aC(t,SC,n,s),i[t.toURLString()]=r,r}class DC{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(lC(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Jt(this._repo,ge())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PC(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function OC(t=om(),e){const n=Bc(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=nb("database");s&&LC(n,...s)}return n}function LC(t,e,n,s={}){t=nt(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&un("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let r;if(i.repoInfo_.nodeAdmin)s.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Zs(Zs.OWNER);else if(s.mockUserToken){const o=typeof s.mockUserToken=="string"?s.mockUserToken:sb(s.mockUserToken,t.app.options.projectId);r=new Zs(o)}RC(i,e,n,r)}/**
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
 */function MC(t){T0(wi),ai(new _s("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return AC(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Bn(Yf,Qf,t),Bn(Yf,Qf,"esm2017")}cn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};cn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};MC();function Cu(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Eg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const FC=Eg,Tg=new Ir("auth","Firebase",Eg());/**
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
 */const Ko=new Fc("@firebase/auth");function UC(t,...e){Ko.logLevel<=Ee.WARN&&Ko.warn(`Auth (${wi}): ${t}`,...e)}function mo(t,...e){Ko.logLevel<=Ee.ERROR&&Ko.error(`Auth (${wi}): ${t}`,...e)}/**
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
 */function Mt(t,...e){throw ku(t,...e)}function Gt(t,...e){return ku(t,...e)}function BC(t,e,n){const s=Object.assign(Object.assign({},FC()),{[e]:n});return new Ir("auth","Firebase",s).create(e,{appName:t.name})}function ku(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Tg.create(t,...e)}function Q(t,e,...n){if(!t)throw ku(e,...n)}function rn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw mo(e),new Error(e)}function fn(t,e){t||rn(e)}/**
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
 */function Jl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $C(){return Rd()==="http:"||Rd()==="https:"}function Rd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function jC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($C()||ib()||"connection"in navigator)?navigator.onLine:!0}function VC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Dr{constructor(e,n){this.shortDelay=e,this.longDelay=n,fn(n>e,"Short delay should be less than long delay!"),this.isMobile=Mc()||em()}get(){return jC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Eu(t,e){fn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ig{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const HC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const zC=new Dr(3e4,6e4);function gn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _n(t,e,n,s,i={}){return xg(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const l=bi(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ig.fetch()(Sg(t,t.config.apiHost,n,l),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},r))})}async function xg(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},HC),e);try{const i=new GC(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Xr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const l=r.ok?o.errorMessage:o.error.message,[a,c]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xr(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw Xr(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw Xr(t,"user-disabled",o);const u=s[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw BC(t,u,c);Mt(t,u)}}catch(i){if(i instanceof Jn)throw i;Mt(t,"network-request-failed",{message:String(i)})}}async function Or(t,e,n,s,i={}){const r=await _n(t,e,n,s,i);return"mfaPendingCredential"in r&&Mt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Sg(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?Eu(t.config,i):`${t.config.apiScheme}://${i}`}function WC(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class GC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Gt(this.auth,"network-request-failed")),zC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Gt(t,e,s);return i.customData._tokenResponse=n,i}function Ad(t){return t!==void 0&&t.enterprise!==void 0}class qC{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return WC(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function KC(t,e){return _n(t,"GET","/v2/recaptchaConfig",gn(t,e))}/**
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
 */async function YC(t,e){return _n(t,"POST","/v1/accounts:delete",e)}async function QC(t,e){return _n(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Yi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function JC(t,e=!1){return nt(t).getIdToken(e)}async function XC(t,e=!1){const n=nt(t),s=await n.getIdToken(e),i=Tu(s);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Yi(ol(i.auth_time)),issuedAtTime:Yi(ol(i.iat)),expirationTime:Yi(ol(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ol(t){return Number(t)*1e3}function Tu(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Po(n);return i?JSON.parse(i):(mo("Failed to decode base64 JWT payload"),null)}catch(i){return mo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ZC(t){const e=Tu(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function hr(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Jn&&ek(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function ek({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class tk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Rg{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Yi(this.lastLoginAt),this.creationTime=Yi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yo(t){var e;const n=t.auth,s=await t.getIdToken(),i=await hr(t,QC(n,{idToken:s}));Q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?ik(r.providerUserInfo):[],l=sk(t.providerData,o),a=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(l!=null&&l.length),u=a?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:l,metadata:new Rg(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function nk(t){const e=nt(t);await Yo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function sk(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function ik(t){return t.map(e=>{var{providerId:n}=e,s=Cu(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function rk(t,e){const n=await xg(t,{},async()=>{const s=bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Sg(t,i,"/v1/token",`key=${r}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ig.fetch()(o,{method:"POST",headers:l,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ok(t,e){return _n(t,"POST","/v2/accounts:revokeToken",gn(t,e))}/**
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
 */class pr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ZC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await rk(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new pr;return s&&(Q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(Q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new pr,this.toJSON())}_performRefresh(){return rn("not implemented")}}/**
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
 */function Cn(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ps{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Cu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new tk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Rg(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await hr(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return XC(this,e)}reload(){return nk(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ps(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yo(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await hr(this,YC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,l,a,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,g=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,x=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,C=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:V,isAnonymous:K,providerData:H,stsTokenManager:ue}=n;Q(O&&ue,e,"internal-error");const X=pr.fromJSON(this.name,ue);Q(typeof O=="string",e,"internal-error"),Cn(d,e.name),Cn(h,e.name),Q(typeof V=="boolean",e,"internal-error"),Q(typeof K=="boolean",e,"internal-error"),Cn(g,e.name),Cn(b,e.name),Cn(x,e.name),Cn(D,e.name),Cn(C,e.name),Cn(E,e.name);const se=new ps({uid:O,auth:e,email:h,emailVerified:V,displayName:d,isAnonymous:K,photoURL:b,phoneNumber:g,tenantId:x,stsTokenManager:X,createdAt:C,lastLoginAt:E});return H&&Array.isArray(H)&&(se.providerData=H.map(me=>Object.assign({},me))),D&&(se._redirectEventId=D),se}static async _fromIdTokenResponse(e,n,s=!1){const i=new pr;i.updateFromServerResponse(n);const r=new ps({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Yo(r),r}}/**
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
 */const Pd=new Map;function on(t){fn(t instanceof Function,"Expected a class definition");let e=Pd.get(t);return e?(fn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Pd.set(t,e),e)}/**
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
 */class Ag{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ag.type="NONE";const Nd=Ag;/**
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
 */function go(t,e,n){return`firebase:${t}:${e}:${n}`}class ti{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=go(this.userKey,i.apiKey,r),this.fullPersistenceKey=go("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ps._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new ti(on(Nd),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||on(Nd);const o=go(s,e.config.apiKey,e.name);let l=null;for(const c of n)try{const u=await c._get(o);if(u){const d=ps._fromJSON(e,u);c!==r&&(l=d),r=c;break}}catch{}const a=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!a.length?new ti(r,e,s):(r=a[0],l&&await r._set(o,l.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new ti(r,e,s))}}/**
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
 */function Dd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Lg(e))return"Blackberry";if(Mg(e))return"Webos";if(Iu(e))return"Safari";if((e.includes("chrome/")||Ng(e))&&!e.includes("edge/"))return"Chrome";if(Og(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Pg(t=rt()){return/firefox\//i.test(t)}function Iu(t=rt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ng(t=rt()){return/crios\//i.test(t)}function Dg(t=rt()){return/iemobile/i.test(t)}function Og(t=rt()){return/android/i.test(t)}function Lg(t=rt()){return/blackberry/i.test(t)}function Mg(t=rt()){return/webos/i.test(t)}function Aa(t=rt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ak(t=rt()){var e;return Aa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function lk(){return rb()&&document.documentMode===10}function Fg(t=rt()){return Aa(t)||Og(t)||Mg(t)||Lg(t)||/windows phone/i.test(t)||Dg(t)}function ck(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ug(t,e=[]){let n;switch(t){case"Browser":n=Dd(rt());break;case"Worker":n=`${Dd(rt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${wi}/${s}`}/**
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
 */class uk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,l)=>{try{const a=e(r);o(a)}catch(a){l(a)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function fk(t,e={}){return _n(t,"GET","/v2/passwordPolicy",gn(t,e))}/**
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
 */const dk=6;class hk{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:dk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(s=a.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(r=a.containsUppercaseLetter)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class pk{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Od(this),this.idTokenSubscription=new Od(this),this.beforeStateQueue=new uk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=on(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await ti.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?nt(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(on(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await fk(this),n=new hk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ir("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await ok(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&on(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await ti.create(this,[on(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Q(l,this,"internal-error"),l.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,s,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ug(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&UC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Xn(t){return nt(t)}class Od{constructor(e){this.auth=e,this.observer=null,this.addObserver=pb(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Pa={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function mk(t){Pa=t}function Bg(t){return Pa.loadJS(t)}function gk(){return Pa.recaptchaEnterpriseScript}function _k(){return Pa.gapiScript}function vk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const yk="recaptcha-enterprise",bk="NO_RECAPTCHA";class wk{constructor(e){this.type=yk,this.auth=Xn(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,l)=>{KC(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(a=>{if(a.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const c=new qC(a);return r.tenantId==null?r._agentRecaptchaConfig=c:r._tenantRecaptchaConfigs[r.tenantId]=c,o(c.siteKey)}}).catch(a=>{l(a)})})}function i(r,o,l){const a=window.grecaptcha;Ad(a)?a.enterprise.ready(()=>{a.enterprise.execute(r,{action:e}).then(c=>{o(c)}).catch(()=>{o(bk)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(l=>{if(!n&&Ad(window.grecaptcha))i(l,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let a=gk();a.length!==0&&(a+=l),Bg(a).then(()=>{i(l,r,o)}).catch(c=>{o(c)})}}).catch(l=>{o(l)})})}}async function Ld(t,e,n,s=!1){const i=new wk(t);let r;try{r=await i.verify(n)}catch{r=await i.verify(n,!0)}const o=Object.assign({},e);return s?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Qo(t,e,n,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await Ld(t,e,n,n==="getOobCode");return s(t,r)}else return s(t,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ld(t,e,n,n==="getOobCode");return s(t,o)}else return Promise.reject(r)})}/**
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
 */function Ck(t,e){const n=Bc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Do(r,e??{}))return i;Mt(i,"already-initialized")}return n.initialize({options:e})}function kk(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(on);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function Ek(t,e,n){const s=Xn(t);Q(s._canInitEmulator,s,"emulator-config-failed"),Q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=$g(e),{host:o,port:l}=Tk(e),a=l===null?"":`:${l}`;s.config.emulator={url:`${r}//${o}${a}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:l,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ik()}function $g(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Tk(t){const e=$g(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Md(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Md(o)}}}function Md(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ik(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class xu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return rn("not implemented")}_getIdTokenResponse(e){return rn("not implemented")}_linkToIdToken(e,n){return rn("not implemented")}_getReauthenticationResolver(e){return rn("not implemented")}}async function xk(t,e){return _n(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Sk(t,e){return Or(t,"POST","/v1/accounts:signInWithPassword",gn(t,e))}async function Rk(t,e){return _n(t,"POST","/v1/accounts:sendOobCode",gn(t,e))}async function Ak(t,e){return Rk(t,e)}/**
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
 */async function Pk(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",gn(t,e))}async function Nk(t,e){return Or(t,"POST","/v1/accounts:signInWithEmailLink",gn(t,e))}/**
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
 */class mr extends xu{constructor(e,n,s,i=null){super("password",s),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new mr(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new mr(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qo(e,n,"signInWithPassword",Sk);case"emailLink":return Pk(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Qo(e,s,"signUpPassword",xk);case"emailLink":return Nk(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ni(t,e){return Or(t,"POST","/v1/accounts:signInWithIdp",gn(t,e))}/**
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
 */const Dk="http://localhost";class Cs extends xu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Cu(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Cs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ni(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ni(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ni(e,n)}buildRequest(){const e={requestUri:Dk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bi(n)}return e}}/**
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
 */function Ok(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lk(t){const e=Fi(Ui(t)).link,n=e?Fi(Ui(e)).deep_link_id:null,s=Fi(Ui(t)).deep_link_id;return(s?Fi(Ui(s)).link:null)||s||n||e||t}class Su{constructor(e){var n,s,i,r,o,l;const a=Fi(Ui(e)),c=(n=a.apiKey)!==null&&n!==void 0?n:null,u=(s=a.oobCode)!==null&&s!==void 0?s:null,d=Ok((i=a.mode)!==null&&i!==void 0?i:null);Q(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(r=a.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=a.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=a.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Lk(e);try{return new Su(n)}catch{return null}}}/**
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
 */class Ti{constructor(){this.providerId=Ti.PROVIDER_ID}static credential(e,n){return mr._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=Su.parseLink(n);return Q(s,"argument-error"),mr._fromEmailAndCode(e,s.code,s.tenantId)}}Ti.PROVIDER_ID="password";Ti.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ti.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class jg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Lr extends jg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class An extends Lr{constructor(){super("facebook.com")}static credential(e){return Cs._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.FACEBOOK_SIGN_IN_METHOD="facebook.com";An.PROVIDER_ID="facebook.com";/**
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
 */class Pn extends Lr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cs._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Pn.credential(n,s)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
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
 */class Nn extends Lr{constructor(){super("github.com")}static credential(e){return Cs._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.GITHUB_SIGN_IN_METHOD="github.com";Nn.PROVIDER_ID="github.com";/**
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
 */class Dn extends Lr{constructor(){super("twitter.com")}static credential(e,n){return Cs._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Dn.credential(n,s)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
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
 */async function Mk(t,e){return Or(t,"POST","/v1/accounts:signUp",gn(t,e))}/**
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
 */class ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await ps._fromIdTokenResponse(e,s,i),o=Fd(s);return new ks({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Fd(s);return new ks({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Fd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Jo extends Jn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Jo.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Jo(e,n,s,i)}}function Vg(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Jo._fromErrorAndOperation(t,r,e,s):r})}async function Fk(t,e,n=!1){const s=await hr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ks._forOperation(t,"link",s)}/**
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
 */async function Uk(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await hr(t,Vg(s,i,e,t),n);Q(r.idToken,s,"internal-error");const o=Tu(r.idToken);Q(o,s,"internal-error");const{sub:l}=o;return Q(t.uid===l,s,"user-mismatch"),ks._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Mt(s,"user-mismatch"),r}}/**
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
 */async function Hg(t,e,n=!1){const s="signIn",i=await Vg(t,s,e),r=await ks._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}async function Bk(t,e){return Hg(Xn(t),e)}/**
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
 */function $k(t,e,n){var s;Q(((s=n.url)===null||s===void 0?void 0:s.length)>0,t,"invalid-continue-uri"),Q(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(Q(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(Q(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function zg(t){const e=Xn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jk(t,e,n){const s=Xn(t),i={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&$k(s,i,n),await Qo(s,i,"getOobCode",Ak)}async function Vk(t,e,n){const s=Xn(t),o=await Qo(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Mk).catch(a=>{throw a.code==="auth/password-does-not-meet-requirements"&&zg(t),a}),l=await ks._fromIdTokenResponse(s,"signIn",o);return await s._updateCurrentUser(l.user),l}function Hk(t,e,n){return Bk(nt(t),Ti.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&zg(t),s})}function zk(t,e,n,s){return nt(t).onIdTokenChanged(e,n,s)}function Wk(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function Gk(t,e,n,s){return nt(t).onAuthStateChanged(e,n,s)}function Ud(t){return nt(t).signOut()}const Xo="__sak";/**
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
 */class Wg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function qk(){const t=rt();return Iu(t)||Aa(t)}const Kk=1e3,Yk=10;class Gg extends Wg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=qk()&&ck(),this.fallbackToPolling=Fg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);lk()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Yk):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},Kk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gg.type="LOCAL";const Qk=Gg;/**
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
 */class qg extends Wg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qg.type="SESSION";const Kg=qg;/**
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
 */function Jk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Na{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Na(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const l=Array.from(o).map(async c=>c(n.origin,r)),a=await Jk(l);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Na.receivers=[];/**
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
 */function Ru(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Xk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((l,a)=>{const c=Ru("",20);i.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),l(h.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qt(){return window}function Zk(t){qt().location.href=t}/**
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
 */function Yg(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function eE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nE(){return Yg()?self:null}/**
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
 */const Qg="firebaseLocalStorageDb",sE=1,Zo="firebaseLocalStorage",Jg="fbase_key";class Mr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([Zo],e?"readwrite":"readonly").objectStore(Zo)}function iE(){const t=indexedDB.deleteDatabase(Qg);return new Mr(t).toPromise()}function Xl(){const t=indexedDB.open(Qg,sE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Zo,{keyPath:Jg})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Zo)?e(s):(s.close(),await iE(),e(await Xl()))})})}async function Bd(t,e,n){const s=Da(t,!0).put({[Jg]:e,value:n});return new Mr(s).toPromise()}async function rE(t,e){const n=Da(t,!1).get(e),s=await new Mr(n).toPromise();return s===void 0?null:s.value}function $d(t,e){const n=Da(t,!0).delete(e);return new Mr(n).toPromise()}const oE=800,aE=3;class Xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>aE)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Na._getInstance(nE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eE(),!this.activeServiceWorker)return;this.sender=new Xk(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xl();return await Bd(e,Xo,"1"),await $d(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Bd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>rE(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>$d(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Da(i,!1).getAll();return new Mr(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Xg.type="LOCAL";const lE=Xg;new Dr(3e4,6e4);/**
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
 */function cE(t,e){return e?on(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Au extends xu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function uE(t){return Hg(t.auth,new Au(t),t.bypassAuthState)}function fE(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Uk(n,new Au(t),t.bypassAuthState)}async function dE(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),Fk(n,new Au(t),t.bypassAuthState)}/**
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
 */class Zg{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uE;case"linkViaPopup":case"linkViaRedirect":return dE;case"reauthViaPopup":case"reauthViaRedirect":return fE;default:Mt(this.auth,"internal-error")}}resolve(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hE=new Dr(2e3,1e4);class js extends Zg{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,js.currentPopupAction&&js.currentPopupAction.cancel(),js.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){fn(this.filter.length===1,"Popup operations only handle one event");const e=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Gt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Gt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,js.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Gt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hE.get())};e()}}js.currentPopupAction=null;/**
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
 */const pE="pendingRedirect",_o=new Map;class mE extends Zg{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const s=await gE(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gE(t,e){const n=yE(e),s=vE(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function _E(t,e){_o.set(t._key(),e)}function vE(t){return on(t._redirectPersistence)}function yE(t){return go(pE,t.config.apiKey,t.name)}async function bE(t,e,n=!1){const s=Xn(t),i=cE(s,e),o=await new mE(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const wE=10*60*1e3;class CE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kE(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!e_(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Gt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=wE&&this.cachedEventUids.clear(),this.cachedEventUids.has(jd(e))}saveEventToCache(e){this.cachedEventUids.add(jd(e)),this.lastProcessedEventTime=Date.now()}}function jd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function e_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kE(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return e_(t);default:return!1}}/**
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
 */async function EE(t,e={}){return _n(t,"GET","/v1/projects",e)}/**
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
 */const TE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,IE=/^https?/;async function xE(t){if(t.config.emulator)return;const{authorizedDomains:e}=await EE(t);for(const n of e)try{if(SE(n))return}catch{}Mt(t,"unauthorized-domain")}function SE(t){const e=Jl(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!IE.test(n))return!1;if(TE.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const RE=new Dr(3e4,6e4);function Vd(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function AE(t){return new Promise((e,n)=>{var s,i,r;function o(){Vd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Vd(),n(Gt(t,"network-request-failed"))},timeout:RE.get()})}if(!((i=(s=qt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=qt().gapi)===null||r===void 0)&&r.load)o();else{const l=vk("iframefcb");return qt()[l]=()=>{gapi.load?o():n(Gt(t,"network-request-failed"))},Bg(`${_k()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw vo=null,e})}let vo=null;function PE(t){return vo=vo||AE(t),vo}/**
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
 */const NE=new Dr(5e3,15e3),DE="__/auth/iframe",OE="emulator/auth/iframe",LE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ME=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FE(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eu(e,OE):`https://${t.config.authDomain}/${DE}`,s={apiKey:e.apiKey,appName:t.name,v:wi},i=ME.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${bi(s).slice(1)}`}async function UE(t){const e=await PE(t),n=qt().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:FE(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LE,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Gt(t,"network-request-failed"),l=qt().setTimeout(()=>{r(o)},NE.get());function a(){qt().clearTimeout(l),i(s)}s.ping(a).then(a,()=>{r(o)})}))}/**
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
 */const BE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$E=500,jE=600,VE="_blank",HE="http://localhost";class Hd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zE(t,e,n,s=$E,i=jE){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let l="";const a=Object.assign(Object.assign({},BE),{width:s.toString(),height:i.toString(),top:r,left:o}),c=rt().toLowerCase();n&&(l=Ng(c)?VE:n),Pg(c)&&(e=e||HE,a.scrollbars="yes");const u=Object.entries(a).reduce((h,[g,b])=>`${h}${g}=${b},`,"");if(ak(c)&&l!=="_self")return WE(e||"",l),new Hd(null);const d=window.open(e||"",l,u);Q(d,t,"popup-blocked");try{d.focus()}catch{}return new Hd(d)}function WE(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const GE="__/auth/handler",qE="emulator/auth/handler",KE=encodeURIComponent("fac");async function zd(t,e,n,s,i,r){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:wi,eventId:i};if(e instanceof jg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Pl(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries(r||{}))o[u]=d}if(e instanceof Lr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const u of Object.keys(l))l[u]===void 0&&delete l[u];const a=await t._getAppCheckToken(),c=a?`#${KE}=${encodeURIComponent(a)}`:"";return`${YE(t)}?${bi(l).slice(1)}${c}`}function YE({config:t}){return t.emulator?Eu(t,qE):`https://${t.authDomain}/${GE}`}/**
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
 */const al="webStorageSupport";class QE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kg,this._completeRedirectFn=bE,this._overrideRedirectResult=_E}async _openPopup(e,n,s,i){var r;fn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await zd(e,n,s,Jl(),i);return zE(e,o,Ru())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await zd(e,n,s,Jl(),i);return Zk(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(fn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await UE(e),s=new CE(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(al,{type:al},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[al];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=xE(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Fg()||Iu()||Aa()}}const JE=QE;var Wd="@firebase/auth",Gd="1.6.1";/**
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
 */class XE{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ZE(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function eT(t){ai(new _s("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=s.options;Q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ug(t)},c=new pk(s,i,r,a);return kk(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ai(new _s("auth-internal",e=>{const n=Xn(e.getProvider("auth").getImmediate());return(s=>new XE(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Bn(Wd,Gd,ZE(t)),Bn(Wd,Gd,"esm2017")}/**
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
 */const tT=5*60,nT=Zp("authIdTokenMaxAge")||tT;let qd=null;const sT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>nT)return;const i=n==null?void 0:n.token;qd!==i&&(qd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function iT(t=om()){const e=Bc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ck(t,{popupRedirectResolver:JE,persistence:[lE,Qk,Kg]}),s=Zp("authTokenSyncURL");if(s){const r=sT(s);Wk(n,r,()=>r(n.currentUser)),zk(n,o=>r(o))}const i=Jp("auth");return i&&Ek(n,`http://${i}`),n}function rT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}mk({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Gt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",rT().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});eT("Browser");const oT={apiKey:"AIzaSyAf-w8Wx-9tCO9TWSu33BNdCgtlIp0nEPQ",authDomain:"games-1c3e7.firebaseapp.com",databaseURL:"https://games-1c3e7-default-rtdb.firebaseio.com",projectId:"games-1c3e7",storageBucket:"games-1c3e7.appspot.com",messagingSenderId:"1066726201703",appId:"1:1066726201703:web:5557d4d4838316274e37c2",measurementId:"G-MCCMW4RT4Q"},t_=rm(oT),Ze=OC(t_),Fs=iT(t_),zt={data(){return{user:JSON.parse(localStorage.getItem("user"))||null,token:localStorage.getItem("token")||null}},methods:{async register(t,e,n){if(!"pig543879@gmail.com,ottaster2022@gmail.com".split(",").includes(t)){alert("此 Email 不允許註冊");return}try{const i=await Vk(Fs,t,e);await Ud(Fs),console.log("User registered:",this.user),console.log("User registered this.token:",this.token),alert("註冊成功，請重新登入"),n.push("/loginadmin")}catch(i){alert("註冊失敗！密碼過短或信箱帳號有誤"),console.error("Error registering user:",i)}},async login(t,e,n){try{const s=await Hk(Fs,t,e);this.user=s.user,this.token=await this.getToken(),console.log("User logged in:",this.user),console.log("Token:",this.token),localStorage.setItem("user",JSON.stringify(this.user)),localStorage.setItem("token",this.token),alert("登入成功"),n.push("/")}catch(s){throw console.error("Error logging in user:",s),alert("登入失敗，帳號或密碼錯誤"),s}},async logout(){try{await Ud(Fs),this.user=null,this.token=null,console.log("User logged out"),localStorage.removeItem("user"),localStorage.removeItem("token")}catch(t){console.error("Error logging out user:",t)}},async getToken(){if(console.warn(this.user),console.warn("强制刷新 token"),this.user){const t=await JC(this.user,!0);return localStorage.setItem("token",t),t}return null},async sendPasswordResetEmail(t){try{await jk(Fs,t),console.log("Password reset email sent.")}catch(e){console.error("Error sending password reset email:",e)}},watchAuthState(t,e){console.log("watchAuthState"),Gk(Fs,async n=>{if(console.log(n),this.user=n,n)this.token=await this.getToken(),localStorage.setItem("user",JSON.stringify(this.user)),localStorage.setItem("token",this.token);else{this.token=null,localStorage.removeItem("user"),localStorage.removeItem("token");const i=window.location.hash.replace(/^#\//,"");console.log(i),console.log(i!="registeradmin"&&i!="loginadmin"),console.log(t),i!="registeradmin"&&i!="loginadmin"&&t.push("/loginadmin")}})}}};/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Bs=typeof document<"u";function aT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const we=Object.assign;function ll(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ft(i)?i.map(t):t(i)}return n}const Qi=()=>{},Ft=Array.isArray,n_=/#/g,lT=/&/g,cT=/\//g,uT=/=/g,fT=/\?/g,s_=/\+/g,dT=/%5B/g,hT=/%5D/g,i_=/%5E/g,pT=/%60/g,r_=/%7B/g,mT=/%7C/g,o_=/%7D/g,gT=/%20/g;function Pu(t){return encodeURI(""+t).replace(mT,"|").replace(dT,"[").replace(hT,"]")}function _T(t){return Pu(t).replace(r_,"{").replace(o_,"}").replace(i_,"^")}function Zl(t){return Pu(t).replace(s_,"%2B").replace(gT,"+").replace(n_,"%23").replace(lT,"%26").replace(pT,"`").replace(r_,"{").replace(o_,"}").replace(i_,"^")}function vT(t){return Zl(t).replace(uT,"%3D")}function yT(t){return Pu(t).replace(n_,"%23").replace(fT,"%3F")}function bT(t){return t==null?"":yT(t).replace(cT,"%2F")}function gr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const wT=/\/$/,CT=t=>t.replace(wT,"");function cl(t,e,n="/"){let s,i={},r="",o="";const l=e.indexOf("#");let a=e.indexOf("?");return l<a&&l>=0&&(a=-1),a>-1&&(s=e.slice(0,a),r=e.slice(a+1,l>-1?l:e.length),i=t(r)),l>-1&&(s=s||e.slice(0,l),o=e.slice(l,e.length)),s=IT(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:gr(o)}}function kT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Kd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function ET(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&mi(e.matched[s],n.matched[i])&&a_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function a_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!TT(t[n],e[n]))return!1;return!0}function TT(t,e){return Ft(t)?Yd(t,e):Ft(e)?Yd(e,t):t===e}function Yd(t,e){return Ft(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function IT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,l;for(o=0;o<s.length;o++)if(l=s[o],l!==".")if(l==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}var _r;(function(t){t.pop="pop",t.push="push"})(_r||(_r={}));var Ji;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ji||(Ji={}));function xT(t){if(!t)if(Bs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),CT(t)}const ST=/^[^#]+#/;function RT(t,e){return t.replace(ST,"#")+e}function AT(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Oa=()=>({left:window.scrollX,top:window.scrollY});function PT(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=AT(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Qd(t,e){return(history.state?history.state.position-e:-1)+t}const ec=new Map;function NT(t,e){ec.set(t,e)}function DT(t){const e=ec.get(t);return ec.delete(t),e}let OT=()=>location.protocol+"//"+location.host;function l_(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let l=i.includes(t.slice(r))?t.slice(r).length:1,a=i.slice(l);return a[0]!=="/"&&(a="/"+a),Kd(a,"")}return Kd(n,t)+s+i}function LT(t,e,n,s){let i=[],r=[],o=null;const l=({state:h})=>{const g=l_(t,location),b=n.value,x=e.value;let D=0;if(h){if(n.value=g,e.value=h,o&&o===b){o=null;return}D=x?h.position-x.position:0}else s(g);i.forEach(C=>{C(n.value,b,{delta:D,type:_r.pop,direction:D?D>0?Ji.forward:Ji.back:Ji.unknown})})};function a(){o=n.value}function c(h){i.push(h);const g=()=>{const b=i.indexOf(h);b>-1&&i.splice(b,1)};return r.push(g),g}function u(){const{history:h}=window;h.state&&h.replaceState(we({},h.state,{scroll:Oa()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:a,listen:c,destroy:d}}function Jd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Oa():null}}function MT(t){const{history:e,location:n}=window,s={value:l_(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(a,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+a:OT()+t+a;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(g){console.error(g),n[u?"replace":"assign"](h)}}function o(a,c){const u=we({},e.state,Jd(i.value.back,a,i.value.forward,!0),c,{position:i.value.position});r(a,u,!0),s.value=a}function l(a,c){const u=we({},i.value,e.state,{forward:a,scroll:Oa()});r(u.current,u,!0);const d=we({},Jd(s.value,a,null),{position:u.position+1},c);r(a,d,!1),s.value=a}return{location:s,state:i,push:l,replace:o}}function FT(t){t=xT(t);const e=MT(t),n=LT(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=we({location:"",base:t,go:s,createHref:RT.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function UT(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),FT(t)}function BT(t){return typeof t=="string"||t&&typeof t=="object"}function c_(t){return typeof t=="string"||typeof t=="symbol"}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},u_=Symbol("");var Xd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Xd||(Xd={}));function gi(t,e){return we(new Error,{type:t,[u_]:!0},e)}function en(t,e){return t instanceof Error&&u_ in t&&(e==null||!!(t.type&e))}const Zd="[^/]+?",$T={sensitive:!1,strict:!1,start:!0,end:!0},jT=/[.+*?^${}()[\]/\\]/g;function VT(t,e){const n=we({},$T,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let g=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(jT,"\\$&"),g+=40;else if(h.type===1){const{value:b,repeatable:x,optional:D,regexp:C}=h;r.push({name:b,repeatable:x,optional:D});const E=C||Zd;if(E!==Zd){g+=10;try{new RegExp(`(${E})`)}catch(V){throw new Error(`Invalid custom RegExp for param "${b}" (${E}): `+V.message)}}let O=x?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;d||(O=D&&c.length<2?`(?:/${O})`:"/"+O),D&&(O+="?"),i+=O,g+=20,D&&(g+=-8),x&&(g+=-20),E===".*"&&(g+=-50)}u.push(g)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const g=u[h]||"",b=r[h-1];d[b.name]=g&&b.repeatable?g.split("/"):g}return d}function a(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const g of h)if(g.type===0)u+=g.value;else if(g.type===1){const{value:b,repeatable:x,optional:D}=g,C=b in c?c[b]:"";if(Ft(C)&&!x)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const E=Ft(C)?C.join("/"):C;if(!E)if(D)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${b}"`);u+=E}}return u||"/"}return{re:o,score:s,keys:r,parse:l,stringify:a}}function HT(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function zT(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=HT(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(eh(s))return 1;if(eh(i))return-1}return i.length-s.length}function eh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const WT={type:0,value:""},GT=/[a-zA-Z0-9_]/;function qT(t){if(!t)return[[]];if(t==="/")return[[WT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${c}": ${g}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let l=0,a,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=a}for(;l<t.length;){if(a=t[l++],a==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:a==="/"?(c&&d(),o()):a===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:a==="("?n=2:GT.test(a)?h():(d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--);break;case 2:a===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:d(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&l--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function KT(t,e,n){const s=VT(qT(t.path),n),i=we(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function YT(t,e){const n=[],s=new Map;e=sh({strict:!1,end:!0,sensitive:!1},e);function i(u){return s.get(u)}function r(u,d,h){const g=!h,b=QT(u);b.aliasOf=h&&h.record;const x=sh(e,u),D=[b];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const V of O)D.push(we({},b,{components:h?h.record.components:b.components,path:V,aliasOf:h?h.record:b}))}let C,E;for(const O of D){const{path:V}=O;if(d&&V[0]!=="/"){const K=d.record.path,H=K[K.length-1]==="/"?"":"/";O.path=d.record.path+(V&&H+V)}if(C=KT(O,d,x),h?h.alias.push(C):(E=E||C,E!==C&&E.alias.push(C),g&&u.name&&!nh(C)&&o(u.name)),b.children){const K=b.children;for(let H=0;H<K.length;H++)r(K[H],C,h&&h.children[H])}h=h||C,(C.record.components&&Object.keys(C.record.components).length||C.record.name||C.record.redirect)&&a(C)}return E?()=>{o(E)}:Qi}function o(u){if(c_(u)){const d=s.get(u);d&&(s.delete(u),n.splice(n.indexOf(d),1),d.children.forEach(o),d.alias.forEach(o))}else{const d=n.indexOf(u);d>-1&&(n.splice(d,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return n}function a(u){let d=0;for(;d<n.length&&zT(u,n[d])>=0&&(u.record.path!==n[d].record.path||!f_(u,n[d]));)d++;n.splice(d,0,u),u.record.name&&!nh(u)&&s.set(u.record.name,u)}function c(u,d){let h,g={},b,x;if("name"in u&&u.name){if(h=s.get(u.name),!h)throw gi(1,{location:u});x=h.record.name,g=we(th(d.params,h.keys.filter(E=>!E.optional).concat(h.parent?h.parent.keys.filter(E=>E.optional):[]).map(E=>E.name)),u.params&&th(u.params,h.keys.map(E=>E.name))),b=h.stringify(g)}else if(u.path!=null)b=u.path,h=n.find(E=>E.re.test(b)),h&&(g=h.parse(b),x=h.record.name);else{if(h=d.name?s.get(d.name):n.find(E=>E.re.test(d.path)),!h)throw gi(1,{location:u,currentLocation:d});x=h.record.name,g=we({},d.params,u.params),b=h.stringify(g)}const D=[];let C=h;for(;C;)D.unshift(C.record),C=C.parent;return{name:x,path:b,params:g,matched:D,meta:XT(D)}}return t.forEach(u=>r(u)),{addRoute:r,resolve:c,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function th(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function QT(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:JT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function JT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function nh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function XT(t){return t.reduce((e,n)=>we(e,n.meta),{})}function sh(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function f_(t,e){return e.children.some(n=>n===t||f_(t,n))}function ZT(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(s_," "),o=r.indexOf("="),l=gr(o<0?r:r.slice(0,o)),a=o<0?null:gr(r.slice(o+1));if(l in e){let c=e[l];Ft(c)||(c=e[l]=[c]),c.push(a)}else e[l]=a}return e}function ih(t){let e="";for(let n in t){const s=t[n];if(n=vT(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ft(s)?s.map(r=>r&&Zl(r)):[s&&Zl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function eI(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ft(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const tI=Symbol(""),rh=Symbol(""),Nu=Symbol(""),d_=Symbol(""),tc=Symbol("");function Li(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Rn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((l,a)=>{const c=h=>{h===!1?a(gi(4,{from:n,to:e})):h instanceof Error?a(h):BT(h)?a(gi(2,{from:e,to:h})):(o&&s.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),l())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(h=>a(h))})}function ul(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const l in o.components){let a=o.components[l];if(!(e!=="beforeRouteEnter"&&!o.instances[l]))if(nI(a)){const u=(a.__vccOpts||a)[e];u&&r.push(Rn(u,n,s,o,l,i))}else{let c=a();r.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${o.path}"`));const d=aT(u)?u.default:u;o.components[l]=d;const g=(d.__vccOpts||d)[e];return g&&Rn(g,n,s,o,l,i)()}))}}return r}function nI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oh(t){const e=ln(Nu),n=ln(d_),s=Qe(()=>e.resolve(Ks(t.to))),i=Qe(()=>{const{matched:a}=s.value,{length:c}=a,u=a[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(mi.bind(null,u));if(h>-1)return h;const g=ah(a[c-2]);return c>1&&ah(u)===g&&d[d.length-1].path!==g?d.findIndex(mi.bind(null,a[c-2])):h}),r=Qe(()=>i.value>-1&&rI(n.params,s.value.params)),o=Qe(()=>i.value>-1&&i.value===n.matched.length-1&&a_(n.params,s.value.params));function l(a={}){return iI(a)?e[Ks(t.replace)?"replace":"push"](Ks(t.to)).catch(Qi):Promise.resolve()}return{route:s,href:Qe(()=>s.value.href),isActive:r,isExactActive:o,navigate:l}}const sI=Sc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oh,setup(t,{slots:e}){const n=la(oh(t)),{options:s}=ln(Nu),i=Qe(()=>({[lh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[lh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&e.default(n);return t.custom?r:Nc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),ft=sI;function iI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function rI(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ft(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function ah(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const lh=(t,e,n)=>t??e??n,oI=Sc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=ln(tc),i=Qe(()=>t.route||s.value),r=ln(rh,0),o=Qe(()=>{let c=Ks(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),l=Qe(()=>i.value.matched[o.value]);fo(rh,Qe(()=>o.value+1)),fo(tI,l),fo(tc,i);const a=ap();return ji(()=>[a.value,l.value,t.name],([c,u,d],[h,g,b])=>{u&&(u.instances[d]=c,g&&g!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=g.leaveGuards),u.updateGuards.size||(u.updateGuards=g.updateGuards))),c&&u&&(!g||!mi(u,g)||!h)&&(u.enterCallbacks[d]||[]).forEach(x=>x(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=l.value,h=d&&d.components[u];if(!h)return ch(n.default,{Component:h,route:c});const g=d.props[u],b=g?g===!0?c.params:typeof g=="function"?g(c):g:null,D=Nc(h,we({},b,e,{onVnodeUnmounted:C=>{C.component.isUnmounted&&(d.instances[u]=null)},ref:a}));return ch(n.default,{Component:D,route:c})||D}}});function ch(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Fr=oI;function aI(t){const e=YT(t.routes,t),n=t.parseQuery||ZT,s=t.stringifyQuery||ih,i=t.history,r=Li(),o=Li(),l=Li(),a=Jv(kn);let c=kn;Bs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ll.bind(null,T=>""+T),d=ll.bind(null,bT),h=ll.bind(null,gr);function g(T,B){let M,W;return c_(T)?(M=e.getRecordMatcher(T),W=B):W=T,e.addRoute(W,M)}function b(T){const B=e.getRecordMatcher(T);B&&e.removeRoute(B)}function x(){return e.getRoutes().map(T=>T.record)}function D(T){return!!e.getRecordMatcher(T)}function C(T,B){if(B=we({},B||a.value),typeof T=="string"){const m=cl(n,T,B.path),w=e.resolve({path:m.path},B),I=i.createHref(m.fullPath);return we(m,w,{params:h(w.params),hash:gr(m.hash),redirectedFrom:void 0,href:I})}let M;if(T.path!=null)M=we({},T,{path:cl(n,T.path,B.path).path});else{const m=we({},T.params);for(const w in m)m[w]==null&&delete m[w];M=we({},T,{params:d(m)}),B.params=d(B.params)}const W=e.resolve(M,B),ye=T.hash||"";W.params=u(h(W.params));const De=kT(s,we({},T,{hash:_T(ye),path:W.path})),p=i.createHref(De);return we({fullPath:De,hash:ye,query:s===ih?eI(T.query):T.query||{}},W,{redirectedFrom:void 0,href:p})}function E(T){return typeof T=="string"?cl(n,T,a.value.path):we({},T)}function O(T,B){if(c!==T)return gi(8,{from:B,to:T})}function V(T){return ue(T)}function K(T){return V(we(E(T),{replace:!0}))}function H(T){const B=T.matched[T.matched.length-1];if(B&&B.redirect){const{redirect:M}=B;let W=typeof M=="function"?M(T):M;return typeof W=="string"&&(W=W.includes("?")||W.includes("#")?W=E(W):{path:W},W.params={}),we({query:T.query,hash:T.hash,params:W.path!=null?{}:T.params},W)}}function ue(T,B){const M=c=C(T),W=a.value,ye=T.state,De=T.force,p=T.replace===!0,m=H(M);if(m)return ue(we(E(m),{state:typeof m=="object"?we({},ye,m.state):ye,force:De,replace:p}),B||M);const w=M;w.redirectedFrom=B;let I;return!De&&ET(s,W,M)&&(I=gi(16,{to:w,from:W}),Bt(W,W,!0,!1)),(I?Promise.resolve(I):me(w,W)).catch(k=>en(k)?en(k,2)?k:yn(k):ve(k,w,W)).then(k=>{if(k){if(en(k,2))return ue(we({replace:p},E(k.to),{state:typeof k.to=="object"?we({},ye,k.to.state):ye,force:De}),B||w)}else k=G(w,W,!0,p,ye);return Ve(w,W,k),k})}function X(T,B){const M=O(T,B);return M?Promise.reject(M):Promise.resolve()}function se(T){const B=Ds.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(T):T()}function me(T,B){let M;const[W,ye,De]=lI(T,B);M=ul(W.reverse(),"beforeRouteLeave",T,B);for(const m of W)m.leaveGuards.forEach(w=>{M.push(Rn(w,T,B))});const p=X.bind(null,T,B);return M.push(p),st(M).then(()=>{M=[];for(const m of r.list())M.push(Rn(m,T,B));return M.push(p),st(M)}).then(()=>{M=ul(ye,"beforeRouteUpdate",T,B);for(const m of ye)m.updateGuards.forEach(w=>{M.push(Rn(w,T,B))});return M.push(p),st(M)}).then(()=>{M=[];for(const m of De)if(m.beforeEnter)if(Ft(m.beforeEnter))for(const w of m.beforeEnter)M.push(Rn(w,T,B));else M.push(Rn(m.beforeEnter,T,B));return M.push(p),st(M)}).then(()=>(T.matched.forEach(m=>m.enterCallbacks={}),M=ul(De,"beforeRouteEnter",T,B,se),M.push(p),st(M))).then(()=>{M=[];for(const m of o.list())M.push(Rn(m,T,B));return M.push(p),st(M)}).catch(m=>en(m,8)?m:Promise.reject(m))}function Ve(T,B,M){l.list().forEach(W=>se(()=>W(T,B,M)))}function G(T,B,M,W,ye){const De=O(T,B);if(De)return De;const p=B===kn,m=Bs?history.state:{};M&&(W||p?i.replace(T.fullPath,we({scroll:p&&m&&m.scroll},ye)):i.push(T.fullPath,ye)),a.value=T,Bt(T,B,M,p),yn()}let be;function ot(){be||(be=i.listen((T,B,M)=>{if(!Vr.listening)return;const W=C(T),ye=H(W);if(ye){ue(we(ye,{replace:!0}),W).catch(Qi);return}c=W;const De=a.value;Bs&&NT(Qd(De.fullPath,M.delta),Oa()),me(W,De).catch(p=>en(p,12)?p:en(p,2)?(ue(p.to,W).then(m=>{en(m,20)&&!M.delta&&M.type===_r.pop&&i.go(-1,!1)}).catch(Qi),Promise.reject()):(M.delta&&i.go(-M.delta,!1),ve(p,W,De))).then(p=>{p=p||G(W,De,!1),p&&(M.delta&&!en(p,8)?i.go(-M.delta,!1):M.type===_r.pop&&en(p,20)&&i.go(-1,!1)),Ve(W,De,p)}).catch(Qi)}))}let Xt=Li(),Be=Li(),Ce;function ve(T,B,M){yn(T);const W=Be.list();return W.length?W.forEach(ye=>ye(T,B,M)):console.error(T),Promise.reject(T)}function Zt(){return Ce&&a.value!==kn?Promise.resolve():new Promise((T,B)=>{Xt.add([T,B])})}function yn(T){return Ce||(Ce=!T,ot(),Xt.list().forEach(([B,M])=>T?M(T):B()),Xt.reset()),T}function Bt(T,B,M,W){const{scrollBehavior:ye}=t;if(!Bs||!ye)return Promise.resolve();const De=!M&&DT(Qd(T.fullPath,0))||(W||!M)&&history.state&&history.state.scroll||null;return fp().then(()=>ye(T,B,De)).then(p=>p&&PT(p)).catch(p=>ve(p,T,B))}const dt=T=>i.go(T);let Ns;const Ds=new Set,Vr={currentRoute:a,listening:!0,addRoute:g,removeRoute:b,hasRoute:D,getRoutes:x,resolve:C,options:t,push:V,replace:K,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Be.add,isReady:Zt,install(T){const B=this;T.component("RouterLink",ft),T.component("RouterView",Fr),T.config.globalProperties.$router=B,Object.defineProperty(T.config.globalProperties,"$route",{enumerable:!0,get:()=>Ks(a)}),Bs&&!Ns&&a.value===kn&&(Ns=!0,V(i.location).catch(ye=>{}));const M={};for(const ye in kn)Object.defineProperty(M,ye,{get:()=>a.value[ye],enumerable:!0});T.provide(Nu,B),T.provide(d_,np(M)),T.provide(tc,a);const W=T.unmount;Ds.add(T),T.unmount=function(){Ds.delete(T),Ds.size<1&&(c=kn,be&&be(),be=null,a.value=kn,Ns=!1,Ce=!1),W()}}};function st(T){return T.reduce((B,M)=>B.then(()=>se(M)),Promise.resolve())}return Vr}function lI(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const l=e.matched[o];l&&(t.matched.find(c=>mi(c,l))?s.push(l):n.push(l));const a=t.matched[o];a&&(e.matched.find(c=>mi(c,a))||i.push(a))}return[n,s,i]}const cI="/gamev2/assets/music1-YL-50_D6.mp3",uI="/gamev2/assets/music2-88GjbQmQ.mp3",fI="/gamev2/assets/music3-BcQnvjGJ.mp3",dI="/gamev2/assets/music4-D-7pXPkc.mp3",Ge=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},hI={data(){return{music1:cI,music2:uI,music3:fI,music4:dI,musicTotal:4,currentMusic:1,currentMusicSec:0,musicAllDisplay:!1}},components:{RouterView:Fr},methods:{musicAllDisplayBtn(){this.musicAllDisplay=!this.musicAllDisplay},fadeInAudio(t){const e=this.$refs[t];e.play();const n=setInterval(()=>{e.volume=Math.min(1,e.volume+.1),e.volume===1&&clearInterval(n)},100)},fadeOutAudio(t){const e=this.$refs[t],n=setInterval(()=>{e.volume=Math.max(0,e.volume-.1),e.volume===0&&(clearInterval(n),e.pause())},100)},switchToMusic(){if(Number(this.currentMusic)===this.musicTotal){localStorage.setItem("currentMusic",1),this.currentMusic=1;const t=this.$refs.refMusic1Audio;t.load(),t.play()}else{localStorage.setItem("currentMusic",Number(this.currentMusic)+1),this.currentMusic+=1;const t=this.$refs.refMusic1Audio;t.load(),t.play()}},updateCurrentTime(){const t=this.$refs.refMusic1Audio;this.currentTime=t.currentTime,localStorage.setItem("currentMusicSec",this.currentTime)},loadCurrentTime(){this.currentMusic=localStorage.getItem("currentMusic");const t=localStorage.getItem("currentMusicSec");if(t){this.currentTime=t;const e=this.$refs.refMusic1Audio;e.currentTime=this.currentTime}}},created(){zt.methods.watchAuthState(this.$router,this.$route)},mounted(){this.loadCurrentTime()}},pI={class:"d-flex align-items-center"},mI=["src"];function gI(t,e,n,s,i,r){const o=pe("RouterView"),l=pe("font-awesome-icon");return v(),y(re,null,[_(o,{onFadeInAudio:r.fadeInAudio,onFadeOutAudio:r.fadeOutAudio,musicAllDisplay:i.musicAllDisplay},null,8,["onFadeInAudio","onFadeOutAudio","musicAllDisplay"]),f("div",{class:"musicAllDisplayBtnHover position-absolute p-2 cursor-pointer",style:{top:"10px",left:"10px","z-index":"99999"},onClick:e[0]||(e[0]=(...a)=>r.musicAllDisplayBtn&&r.musicAllDisplayBtn(...a))},[_(l,{icon:"fa-solid fa-gear",class:"text-white"})]),de(f("div",null,[f("div",pI,[ne(" 全場音樂： "),f("audio",{ref:"refMusic1Audio",controls:"",onEnded:e[1]||(e[1]=(...a)=>r.switchToMusic&&r.switchToMusic(...a)),onTimeupdate:e[2]||(e[2]=(...a)=>r.updateCurrentTime&&r.updateCurrentTime(...a))},[f("source",{src:[Number(i.currentMusic)===1?i.music1:Number(i.currentMusic)===2?i.music2:Number(i.currentMusic)===3?i.music3:Number(i.currentMusic)===4?i.music4:i.music1],type:"audio/mpeg"},null,8,mI),ne(" Your browser does not support the audio element. ")],544)])],512),[[gs,i.musicAllDisplay]])],64)}const _I=Ge(hI,[["render",gI],["__scopeId","data-v-9320266b"]]),wt={methods:{async setData(t){const e=await zt.methods.getToken();if(console.log("setData token"),console.log(e),e){const n=Xe(Ze);await bu(n,t).then(()=>{console.log("Data is set successfully!")}).catch(s=>{console.error("Error setting data: ",s),alert("取得資料失敗，權限不足！")})}else alert("尚未登入，請重新登入")},async getData(){const t=await zt.methods.getToken();if(console.log("getData token"),console.log(t),t){const e=Xe(Ze);await TC(e).then(n=>{n.exists()?console.log("Data:",n.val()):console.log("No data available")}).catch(n=>{console.error("Error getting data: ",n),alert("取得資料失敗，權限不足！")})}else alert("尚未登入，請重新登入")},async updateData(t,e){const n=await zt.methods.getToken();if(console.log("updateData token"),console.log(n),n){let s;e?s=Xe(Ze,e):s=Xe(Ze),await EC(s,t).then(()=>{console.log("Data is updated successfully!")}).catch(i=>{console.error("Error updating data: ",i),alert("修改資料失敗，權限不足！")})}else alert("尚未登入，請重新登入")},async deleteData(t){const e=await zt.methods.getToken();if(console.log("updateData token"),console.log(e),e){const n=Xe(Ze,t);await kC(n).then(()=>{console.log("Data is deleted successfully!")}).catch(s=>{console.error("Error deleting data: ",s),alert("刪除資料失敗，權限不足！")})}else alert("尚未登入，請重新登入")},async addData(t,e){const n=await zt.methods.getToken();console.log("addData token"),console.log(n),n?(await CC(Xe(Ze,e),t),console.log("資料已成功新增到Firebase")):alert("尚未登入，請重新登入")}}},vI={mixins:[wt],components:{RouterLink:ft,RouterView:Fr},created(){zt.methods.watchAuthState(this.$router,this.$route)},methods:{remoteSwitchPage(t){this.updateData({controlRouter:t},"/router/")}}},yI=t=>(vt("data-v-d48291c8"),t=t(),yt(),t),bI={class:"bg position-relative"},wI={class:"w-100"},CI={class:"w-100 h-100",style:{overflow:"auto"}},kI={class:"list mx-auto vh-100 my-5 my-md-0 d-md-flex align-items-md-center"},EI={class:"container"},TI={class:"list-group"},II={class:"list-group-item fs-4 w-50 mx-auto"},xI={class:"list-group-item fs-4"},SI={class:"list-group-item fs-4"},RI=yI(()=>f("div",{class:"line mb-4"},null,-1)),AI={class:"list-group-item fs-4"},PI={class:"list-group-item fs-4"},NI={class:"list-group-item fs-4"};function DI(t,e,n,s,i,r){const o=pe("font-awesome-icon"),l=pe("RouterLink");return v(),y("div",bI,[f("table",wI,[f("tbody",null,[f("tr",null,[f("td",CI,[f("div",kI,[f("div",EI,[f("ul",TI,[_(l,{to:"/remotelist",class:"list-a mb-4"},{default:ce(()=>[f("li",II,[_(o,{icon:"fa-solid fa-wifi",class:"me-1"}),ne(" 遙控器 ")])]),_:1}),_(l,{to:"/ppt",class:"list-a mb-4",onClick:e[0]||(e[0]=a=>r.remoteSwitchPage("ppt"))},{default:ce(()=>[f("li",xI,[_(o,{icon:"fa-solid fa-gamepad"}),ne(" 活動流程 ")])]),_:1}),_(l,{to:"/rank",class:"list-a mb-4",onClick:e[1]||(e[1]=a=>r.remoteSwitchPage("rank"))},{default:ce(()=>[f("li",SI,[_(o,{icon:"fa-solid fa-medal"}),ne(" 排行榜 ")])]),_:1}),RI,_(l,{to:"/charades",class:"list-a mb-4",onClick:e[2]||(e[2]=a=>r.remoteSwitchPage("charades"))},{default:ce(()=>[f("li",AI,[_(o,{icon:"fa-solid fa-hands-asl-interpreting"}),ne(" 比手畫腳 ")])]),_:1}),_(l,{to:"/jump",class:"list-a mb-4",onClick:e[3]||(e[3]=a=>r.remoteSwitchPage("jump"))},{default:ce(()=>[f("li",PI,[_(o,{icon:"fa-solid fa-people-arrows"}),ne(" 跳跳 Tempo ")])]),_:1}),_(l,{to:"/selftalk",class:"list-a mb-4",onClick:e[4]||(e[4]=a=>r.remoteSwitchPage("selftalk"))},{default:ce(()=>[f("li",NI,[_(o,{icon:"fa-solid fa-comments"}),ne(" 自說字話 ")])]),_:1})])])])])])])])])}const OI=Ge(vI,[["render",DI],["__scopeId","data-v-d48291c8"]]);function Ct(t){if(localStorage.getItem("pw")==="freshact1688")return!0;{let e=prompt("請輸入瀏覽器驗證密碼");return localStorage.setItem("pw",e),e==="freshact1688"?!0:(alert("密碼錯誤！"),t.push({name:"home"}),!1)}}const h_="/gamev2/assets/1-8rOsLUUl.jpg",p_="/gamev2/assets/2-Bh37UdQk.jpg",m_="/gamev2/assets/3-C2AFQawO.jpg",g_="/gamev2/assets/4-CFlO_LFV.jpg",__="/gamev2/assets/5-C6ihY-6E.jpg",v_="/gamev2/assets/6-DMQL1d1i.jpg",y_="/gamev2/assets/7-C3EMU5ar.jpg",b_="/gamev2/assets/8-QltRD7KR.jpg",w_="/gamev2/assets/9-DZp7a3z_.jpg",C_="/gamev2/assets/10-DUOuX-iu.jpg",k_="/gamev2/assets/11-DSNzIvUU.jpg",E_="/gamev2/assets/12-CrmG0DRv.jpg",T_="/gamev2/assets/13-CNjYcQew.jpg",I_="/gamev2/assets/14-Dy_JjL4G.jpg",x_="/gamev2/assets/15-CMLpoWdm.jpg",S_="/gamev2/assets/16-_VVk05nT.jpg",R_="/gamev2/assets/17-DP9QLOHr.jpg",A_="/gamev2/assets/18-DF1kXyhi.jpg",P_="/gamev2/assets/19-C0LkooC-.jpg",N_="/gamev2/assets/20-DrtHd47Z.jpg",LI="/gamev2/assets/award-D67Hu8cM.mp3",MI={mixins:[wt],props:["musicAllDisplay"],data(){return{imgList:[{id:"img-id-1",src:h_,alt:"1"},{id:"img-id-2",src:p_,alt:"2"},{id:"img-id-3",src:m_,alt:"3"},{id:"img-id-4",src:g_,alt:"4"},{id:"img-id-5",src:__,alt:"5"},{id:"img-id-6",src:v_,alt:"6"},{id:"img-id-7",src:y_,alt:"7"},{id:"img-id-8",src:b_,alt:"8"},{id:"img-id-9",src:w_,alt:"9"},{id:"img-id-10",src:C_,alt:"10"},{id:"img-id-11",src:k_,alt:"11"},{id:"img-id-12",src:E_,alt:"12"},{id:"img-id-13",src:T_,alt:"13"},{id:"img-id-14",src:I_,alt:"14"},{id:"img-id-15",src:x_,alt:"15"},{id:"img-id-16",src:S_,alt:"16"},{id:"img-id-17",src:R_,alt:"17"},{id:"img-id-18",src:A_,alt:"18"},{id:"img-id-19",src:P_,alt:"19"},{id:"img-id-20",src:N_,alt:"20"}],award:LI,totalImgsCnt:0,currentIndex:0,hasFinalGame:!1,isFullScreen:!1,fpage:0,displayAllFirbase:"",controlRouter:""}},watch:{currentIndex(){const t=this;t.currentIndex===0&&t.triggerFadeIn("refMusic1Audio"),t.currentIndex===13?(t.triggerFadeOut("refMusic1Audio"),setTimeout(function(){t.$refs.refAwardAudio.volume=1,t.$refs.refAwardAudio.play()},900)):(t.fadeOutAudio(t.$refs.refAwardAudio),setTimeout(function(){t.triggerFadeIn("refMusic1Audio")},900))}},methods:{preSwitchImg(t){this.currentIndex--,this.currentIndex<=0&&(this.currentIndex=0,console.log("第一頁"))},nextSwitchImg(t){this.currentIndex++,this.currentIndex>=this.totalImgsCnt-1&&(this.currentIndex=this.totalImgsCnt-1,console.log("最後一頁")),this.currentIndex===11?this.hasFinalGame=!0:this.hasFinalGame=!1},jumpSwitchImg(t){this.currentIndex+=2,this.hasFinalGame=!1},toggleFullScreen(){this.isFullScreen?this.exitFullscreen():this.requestFullscreen()},requestFullscreen(){const t=document.querySelector("#full");t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen(),this.isFullScreen=!0},exitFullscreen(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),this.isFullScreen=!1},onReadData(){const t=this;Ut(Xe(Ze),e=>{console.log(e.val()),t.displayAllFirbase=e.val(),t.currentIndex=e.val().ppt.page,t.controlRouter=e.val().router.controlRouter;const s=t.$route.fullPath.split("/");t.controlRouter!=s[1]&&t.$router.push(t.controlRouter)})},triggerFadeIn(t){this.$emit("fadeInAudio",t)},triggerFadeOut(t){this.$emit("fadeOutAudio",t)},fadeInAudio(t){t.volume=0,t.play();const e=setInterval(()=>{t.volume=Math.min(1,t.volume+.1),t.volume===1&&clearInterval(e)},100)},fadeOutAudio(t){const e=setInterval(()=>{t.volume=Math.max(0,t.volume-.1),t.volume===0&&(clearInterval(e),t.pause(),t.currentTime=0)},100)}},components:{RouterLink:ft},mounted(){Ct(this.$router)&&(this.onReadData(),this.totalImgsCnt=this.imgList.length,this.triggerFadeIn("refMusic1Audio"))}},FI={id:"full",class:"position-relative"},UI=["id"],BI=["src","alt"],$I={class:"position-absolute translate-middle start-50",style:{bottom:"50px"}},jI={class:"d-flex align-items-center"},VI={ref:"refAwardAudio",controls:"",loop:""},HI=["src"];function zI(t,e,n,s,i,r){const o=pe("font-awesome-icon");return v(),y("div",null,[f("div",FI,[(v(!0),y(re,null,Pe(i.imgList,(l,a)=>(v(),y("div",{key:l.id,id:l.id,class:ae(["imgs h-100",{"d-none":i.currentIndex!==a}])},[f("img",{src:l.src,alt:l.alt,class:"w-100 h-100",style:{"object-fit":"cover"}},null,8,BI)],10,UI))),128)),f("div",$I,[f("button",{type:"button",id:"toggleFullScreen",class:"btn btn-outline-primary me-3",style:Gs([{width:"64px"},i.currentIndex===13||i.currentIndex===18||i.currentIndex===19?{color:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",background:"rgba(0,0,0,0)"}:{}]),onClick:e[0]||(e[0]=(...l)=>r.toggleFullScreen&&r.toggleFullScreen(...l))},[_(o,{icon:"fa-solid fa-up-right-and-down-left-from-center"})],4),f("button",{type:"button",id:"preSwitchImg",class:ae(["btn me-3",i.currentIndex!==0?"btn-outline-primary":"disabled"]),style:Gs([{width:"64px"},i.currentIndex===13||i.currentIndex===18||i.currentIndex===19?{color:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",background:"rgba(0,0,0,0)"}:{}]),onClick:e[1]||(e[1]=l=>r.preSwitchImg(l))},[_(o,{icon:"fa-solid fa-caret-left"})],6),f("button",{type:"button",id:"nextSwitchImg",class:ae(["btn",i.currentIndex!==i.totalImgsCnt-1?"btn-outline-primary":"disabled"]),style:Gs([{width:"64px"},i.currentIndex===13||i.currentIndex===18||i.currentIndex===19?{color:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",background:"rgba(0,0,0,0)"}:{}]),onClick:e[2]||(e[2]=l=>r.nextSwitchImg(l)),ref:"nextSwitchImg"},[_(o,{icon:"fa-solid fa-caret-right"})],6),i.hasFinalGame?(v(),y("button",{key:0,type:"button",id:"jumpSwitchImg",class:ae(["btn ms-3",i.currentIndex!==i.totalImgsCnt-1?"btn-outline-primary":"disabled"]),style:{width:"64px"},onClick:e[3]||(e[3]=l=>r.jumpSwitchImg(l))},[_(o,{icon:"fa-solid fa-forward"})],2)):S("",!0)])]),de(f("div",null,[f("div",jI,[ne(" 頒獎音樂： "),f("audio",VI,[f("source",{src:i.award,type:"audio/mpeg"},null,8,HI),ne(" Your browser does not support the audio element. ")],512)])],512),[[gs,n.musicAllDisplay]])])}const WI=Ge(MI,[["render",zI]]),GI={mixins:[wt],data(){return{teamCnt:0,teamCntTmp:0,editTeamDisplay:!1,text:"",sex:"",list:[],teamArr:[],team:"",tempData:{},editArea:!1,setBtn:!1,joinBtnDisplay:!1,editBtnDisplay:!1,delBtnDisplay:!1,isDisplayGroup:!1,isRank:!1,plusBtnDisplay:!1,minusBtnDisplay:!1,displayAllFirbase:"",controlRouter:""}},methods:{triggerFadeIn(t){this.$emit("fadeInAudio",t)},triggerFadeOut(t){this.$emit("fadeOutAudio",t)},editTeamCnt(){this.editTeamDisplay=!0,this.teamCntTmp=this.teamCnt},confirmTeamCnt(){this.editTeamDisplay=!1,this.teamCnt=this.teamCntTmp,this.updateData({teamCnt:Number(this.teamCnt)},"/rank/")},addData(){if(this.text.trim()&&this.sex&&this.team){const t={id:new Date().getTime(),text:this.text,score:0,sex:this.sex,team:this.team,life:1};this.list.push(t),this.text="",this.sex="",this.team="",console.log(this.list)}else alert("欄位皆為必填！")},editData(t){this.tempData={...t},this.editArea=!0},confirm(){this.list.forEach((t,e)=>{t.id===this.tempData.id&&(this.list[e]=this.tempData)}),this.tempData={},this.editArea=!1},removeData(t){this.list.forEach((e,n)=>{t.id==e.id&&this.list.splice(n,1)})},plusNum(t){this.list.forEach((e,n)=>{t.id==e.id&&(this.list[n].score+=1)})},plusNumTeam(){confirm("確定團隊加分嗎？")&&(this.teamArr.forEach((e,n)=>{this.list.forEach((s,i)=>{s.team===e&&(this.list[i].score+=Number(this.$refs[`refTeamPlus${n}`][0].value))})}),this.saveRank(),this.resetNumTeam())},minusNum(t){this.list.forEach((e,n)=>{t.id==e.id&&(this.list[n].score-=1)})},minusNumTeam(){this.teamArr.forEach((t,e)=>{this.list.forEach((n,s)=>{n.team===t&&(this.list[s].score-=Number(this.$refs[`refTeamPlus${e}`][0].value))})})},resetNumTeam(){this.teamArr.forEach((t,e)=>{this.$refs[`refTeamPlus${e}`][0].value=0})},sortRank(){confirm("確定活動結束，執行排行嗎？")&&(this.isRank=!0,this.list.sort((e,n)=>n.score-e.score),this.saveRank(),this.updateData({isRank:!0},"/rank/"))},generateTeams(){this.teamArr=[];for(let t=0;t<this.teamCnt;t++)this.teamArr.push(String.fromCharCode(65+t));console.warn(this.teamArr)},reallocate(){if(confirm("確定要重新分隊嗎？")){this.generateTeams();const e=[...this.list],n=e.filter(r=>r.sex==="1"),s=e.filter(r=>r.sex==="0");console.log("Boys:",n),console.log("Girls:",s);let i=0;for(let r=0;r<n.length;r++){console.log("boysArray.length",n.length);const o=[];let l;do l=Math.floor(Math.random()*n.length),o.includes(l)||(o.push(l),this.list.forEach(a=>{a.id===n[l].id&&(a.team=this.teamArr[i%this.teamCnt])}),i+=1);while(o.length<n.length)}for(let r=0;r<s.length;r++){const o=[];let l;do l=Math.floor(Math.random()*s.length),o.includes(l)||(o.push(l),this.list.forEach(a=>{a.id===s[l].id&&(a.team=this.teamArr[i%this.teamCnt])}),i+=1);while(o.length<s.length)}this.teamRank(),this.saveRank(),this.isRank=!1,this.updateData({isRank:!1},"/rank/")}},teamRank(){console.log(this.list),this.list.sort((t,e)=>{console.log(t),console.log(t.team);const n=t.team.localeCompare(e.team);return n===0?e.score-t.score:n})},saveRank(){console.log("存檔"),this.updateData({rankData:this.list},"/rank/")},switchIsDisplayGroup(){this.isDisplayGroup=!this.isDisplayGroup,this.updateData({isDisplayGroup:this.isDisplayGroup},"/rank/")},onReadData(){const t=this;Ut(Xe(Ze),e=>{console.log(e.val()),t.displayAllFirbase=e.val(),t.teamCnt=e.val().rank.teamCnt,t.list=e.val().rank.rankData?e.val().rank.rankData:[],t.isRank=e.val().rank.isRank,t.isDisplayGroup=e.val().rank.isDisplayGroup,t.controlRouter=e.val().router.controlRouter;const s=t.$route.fullPath.split("/");t.controlRouter!=s[1]&&t.$router.push(t.controlRouter),this.generateTeams()})}},computed:{},watch:{},components:{RouterLink:ft},mounted(){Ct(this.$router)&&(this.onReadData(),this.triggerFadeIn("refMusic1Audio"))}},As=t=>(vt("data-v-d66bbfee"),t=t(),yt(),t),qI={key:0,class:"joinPerson"},KI=As(()=>f("div",{class:"pop-bg"},null,-1)),YI={class:"d-flex flex-column mb-3 p-5 rounded-3",style:{"z-index":"10",width:"80%","max-width":"500px","max-height":"100vh",overflow:"auto",background:"#f9f9f9"}},QI={class:"mb-3"},JI=As(()=>f("br",null,null,-1)),XI={class:"mb-3"},ZI=As(()=>f("br",null,null,-1)),ex=As(()=>f("br",null,null,-1)),tx={class:"d-flex flex-wrap"},nx=["id","value"],sx=["for"],ix={class:"d-flex pt-3"},rx={class:"w-100 pe-1"},ox={class:"w-100 ps-1"},ax={class:"position-relative mt-5"},lx={class:"h2-title"},cx={class:"text-center mt-1"},ux={class:"container px-0 py-2 text-end"},fx={key:0,class:"container list-outer flex-wrap d-flex flex-column"},dx={class:"list-content d-flex align-items-center"},hx={key:0,class:"rank-num"},px={key:1,class:"rank-num"},mx={class:"rank-text d-flex flex-grow-1 px-2"},gx={class:"flex-grow-1"},_x=["onClick"],vx=["onClick"],yx=["onClick"],bx=["onClick"],wx={key:1,class:"container d-flex flex-row flex-wrap w-100 px-0"},Cx={class:"text-white h-100 list-outer d-flex flex-wrap",style:{border:"2px solid white"}},kx={class:"list-content d-flex align-items-center"},Ex={key:0,class:"rank-num"},Tx={class:"rank-text d-flex flex-grow-1 pe-4"},Ix=["onClick"],xx=["onClick"],Sx=["onClick"],Rx=["onClick"],Ax={key:1,class:"container d-flex flex-wrap justify-content-between align-items-center px-0 py-3"},Px={class:"text-white d-flex align-items-center"},Nx={class:"pe-2"},Dx={class:"d-flex"},Ox={class:"text-white d-flex flex-wrap justify-content-center align-items-center"},Lx=As(()=>f("div",null,"團隊計分：",-1)),Mx={class:"d-flex flex-wrap flex-row align-items-center"},Fx={class:"text-center"},Ux={class:"p-md-0 p-2"},Bx={class:"container all-set-btns d-flex flex-wrap px-0 pt-2"},$x={type:"button",class:"btn btn-primary set-btn me-2 my-2"},jx={key:0,class:"setting-btns"},Vx=As(()=>f("hr",null,null,-1)),Hx={key:2,class:"edit-area-outer"},zx=As(()=>f("div",{class:"pop-bg"},null,-1)),Wx={key:0,class:"edit-area"};function Gx(t,e,n,s,i,r){var a;const o=pe("font-awesome-icon"),l=pe("RouterLink");return v(),y("div",null,[f("div",{class:ae(["p-3 rank-bg",{"d-flex flex-column justify-content-center align-items-center":i.isDisplayGroup}])},[i.joinBtnDisplay?(v(),y("div",qI,[KI,f("div",YI,[f("div",QI,[ne(" 暱稱："),JI,de(f("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=c=>i.text=c),class:"form-control",placeholder:"請輸入暱稱","aria-label":"請輸入暱稱"},null,512),[[Fe,i.text]])]),f("div",XI,[ne(" 性別："),ZI,de(f("input",{type:"radio",name:"sex",id:"boy","onUpdate:modelValue":e[1]||(e[1]=c=>i.sex=c),value:"1",class:"d-none"},null,512),[[Js,i.sex]]),f("label",{for:"boy",class:ae(["btn me-1 mt-1",[i.sex==="1"?"btn-primary":"btn-outline-primary"]]),style:{width:"100px"}},"男生",2),de(f("input",{type:"radio",name:"sex",id:"girl","onUpdate:modelValue":e[2]||(e[2]=c=>i.sex=c),value:"0",class:"d-none"},null,512),[[Js,i.sex]]),f("label",{for:"girl",class:ae(["btn me-1 mt-1",[i.sex==="0"?"btn-primary":"btn-outline-primary"]]),style:{width:"100px"}},"女生",2)]),f("div",null,[ne(" 組別："),ex,f("div",tx,[(v(!0),y(re,null,Pe(i.teamArr,(c,u)=>(v(),y("div",{key:u,class:"me-1 mt-1",style:{width:"100px"}},[de(f("input",{id:c,type:"radio",name:"teamRadio","onUpdate:modelValue":e[3]||(e[3]=d=>i.team=d),value:c,class:"d-none"},null,8,nx),[[Js,i.team]]),f("label",{for:c,class:ae(["btn w-100",[c==i.team?"btn-primary":"btn-outline-primary"]])},j(c),11,sx)]))),128))])]),f("div",ix,[f("div",rx,[f("button",{class:"btn btn-outline-secondary check-join-btn w-100",type:"button",id:"button-addon-cancel",onClick:e[4]||(e[4]=c=>i.joinBtnDisplay=!i.joinBtnDisplay)}," 取消 ")]),f("div",ox,[f("button",{class:"btn btn-primary w-100",type:"button",id:"button-addon2",onClick:e[5]||(e[5]=c=>(r.addData(),r.saveRank()))}," 新增 ")])])])])):S("",!0),f("div",ax,[f("div",lx,[f("h2",cx,j(i.isDisplayGroup?"各組成員":"排行榜"),1)]),f("div",ux,[f("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=(...c)=>r.switchIsDisplayGroup&&r.switchIsDisplayGroup(...c))},[de(f("div",null,[_(o,{icon:"fa-solid fa-list-ul"})],512),[[gs,i.isDisplayGroup]]),de(f("div",null,[_(o,{icon:"fa-regular fa-rectangle-list"})],512),[[gs,!i.isDisplayGroup]])])]),i.isDisplayGroup?(v(),y("div",wx,[(v(!0),y(re,null,Pe(i.teamArr,(c,u)=>(v(),y("div",{key:u,class:"groupDisplay p-2 position-relative"},[f("div",{class:ae({"rwd-rank-teamName":!i.isRank})},j(c),3),f("div",Cx,[(v(!0),y(re,null,Pe(i.list,(d,h)=>(v(),y("div",{key:d.id,class:ae({"w-50":d.team===c})},[d.team===c?(v(),y("div",{key:0,class:ae(["list-li ps-5",{"rwd-list-li":!i.isRank}])},[f("div",kx,[i.isRank?(v(),y("div",Ex,j(h+1),1)):S("",!0),i.isRank?S("",!0):(v(),y("div",{key:1,class:ae(["rank-num",{"rwd-rank-num":!i.isRank}])},j(d.team),3)),f("div",Tx,[f("div",{class:ae(["flex-grow-1",{"rwd-rank-text":!i.isRank}])},j(d.text),3),f("div",{class:ae({"rank-score":!i.isRank})},j(d.score),3)]),i.plusBtnDisplay?(v(),y("button",{key:2,type:"button",class:"btn btn-primary me-2",onClick:g=>(r.plusNum(d),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,Ix)):S("",!0),i.minusBtnDisplay?(v(),y("button",{key:3,type:"button",class:"btn btn-primary me-2",onClick:g=>(r.minusNum(d),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,xx)):S("",!0),i.editBtnDisplay?(v(),y("button",{key:4,type:"button",class:"btn btn-primary me-2",onClick:g=>r.editData(d)},[_(o,{icon:"fa-regular fa-pen-to-square"})],8,Sx)):S("",!0),i.delBtnDisplay?(v(),y("button",{key:5,type:"button",class:"btn btn-primary",onClick:g=>(r.removeData(d),r.saveRank())},[_(o,{icon:"fa-regular fa-trash-can"})],8,Rx)):S("",!0)])],2)):S("",!0)],2))),128))])]))),128))])):(v(),y("div",fx,[_(Yt,{name:"fade"},{default:ce(()=>[(v(!0),y(re,null,Pe(i.list,(c,u)=>(v(),y("div",{key:c.id,class:"list-li",style:{"padding-left":"30px"}},[f("div",dx,[i.isRank?(v(),y("div",hx,j(u+1),1)):S("",!0),i.isRank?S("",!0):(v(),y("div",px,j(c.team),1)),f("div",mx,[f("div",gx,j(c.text),1),f("div",null,j(c.score),1)]),i.plusBtnDisplay?(v(),y("button",{key:2,type:"button",class:"btn btn-primary me-2",onClick:d=>(r.plusNum(c),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,_x)):S("",!0),i.minusBtnDisplay?(v(),y("button",{key:3,type:"button",class:"btn btn-primary me-2",onClick:d=>(r.minusNum(c),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,vx)):S("",!0),i.editBtnDisplay?(v(),y("button",{key:4,type:"button",class:"btn btn-primary me-2",onClick:d=>r.editData(c)},[_(o,{icon:"fa-regular fa-pen-to-square"})],8,yx)):S("",!0),i.delBtnDisplay?(v(),y("button",{key:5,type:"button",class:"btn btn-primary",onClick:d=>(r.removeData(c),r.saveRank())},[_(o,{icon:"fa-regular fa-trash-can"})],8,bx)):S("",!0)])]))),128))]),_:1})]))]),i.isDisplayGroup?S("",!0):(v(),y("div",Ax,[f("div",null,[f("div",Px,[f("div",Nx,"共"+j((a=i.list)==null?void 0:a.length)+"人，分"+j(i.teamCnt)+"隊",1),i.editTeamDisplay?S("",!0):(v(),y("div",{key:0,class:"cursor-pointer",onClick:e[7]||(e[7]=(...c)=>r.editTeamCnt&&r.editTeamCnt(...c))},[_(o,{icon:"fa-solid fa-gear"})])),f("div",Dx,[i.editTeamDisplay?de((v(),y("input",{key:0,type:"number",class:"form-control",style:{width:"80px"},"onUpdate:modelValue":e[8]||(e[8]=c=>i.teamCntTmp=c)},null,512)),[[Fe,i.teamCntTmp]]):S("",!0),i.editTeamDisplay?(v(),y("button",{key:1,type:"button",onClick:e[9]||(e[9]=(...c)=>r.confirmTeamCnt&&r.confirmTeamCnt(...c)),class:"btn btn-primary ms-2"}," 確定隊伍數 ")):S("",!0)])])]),f("div",Ox,[Lx,f("div",Mx,[(v(!0),y(re,null,Pe(i.teamArr,(c,u)=>(v(),y("div",{class:"d-flex flex-column mx-1",key:u},[f("div",Fx,j(c)+"隊伍",1),f("div",null,[f("input",{value:"0",type:"number",class:"form-control",style:{width:"80px"},ref_for:!0,ref:"refTeamPlus"+u},null,512)])]))),128))]),f("div",Ux,[f("button",{type:"button",class:"btn btn-primary me-2",onClick:e[10]||(e[10]=c=>r.plusNumTeam())},[ne(" 團"),_(o,{icon:"fa-solid fa-plus"})])])])])),f("div",Bx,[_(l,{to:"/"},{default:ce(()=>[f("button",$x,[_(o,{icon:"fa-solid fa-house"})])]),_:1}),f("button",{type:"button",class:"btn btn-primary set-btn my-2",onClick:e[11]||(e[11]=c=>i.setBtn=!i.setBtn)},[_(o,{icon:"fa-solid fa-gear"})]),_(Yt,{name:"set-btn"},{default:ce(()=>[i.setBtn?(v(),y("div",jx,[f("button",{type:"button",class:"btn btn-primary ms-2 my-2",onClick:e[12]||(e[12]=c=>i.plusBtnDisplay=!i.plusBtnDisplay)},[_(o,{icon:"fa-solid fa-plus"})]),f("button",{type:"button",class:"btn btn-primary ms-2 my-2",onClick:e[13]||(e[13]=c=>i.minusBtnDisplay=!i.minusBtnDisplay)},[_(o,{icon:"fa-solid fa-minus"})]),f("button",{type:"button",class:"btn btn-primary ms-2 my-2",onClick:e[14]||(e[14]=c=>i.editBtnDisplay=!i.editBtnDisplay)},[_(o,{icon:"fa-regular fa-pen-to-square"})]),f("button",{type:"button",class:"btn btn-primary ms-2 my-2",onClick:e[15]||(e[15]=c=>i.joinBtnDisplay=!i.joinBtnDisplay)},[_(o,{icon:"fa-solid fa-user-plus"})]),f("button",{type:"button",class:"btn btn-primary ms-2 my-2",onClick:e[16]||(e[16]=c=>i.delBtnDisplay=!i.delBtnDisplay)},[_(o,{icon:"fa-regular fa-trash-can"})]),f("button",{type:"button",class:"btn btn-primary ms-2 me-2",onClick:e[17]||(e[17]=c=>(r.minusNumTeam(),r.saveRank(),r.resetNumTeam()))},[ne(" 團"),_(o,{icon:"fa-solid fa-minus"})]),f("button",{type:"button",class:"btn btn-primary",onClick:e[18]||(e[18]=(...c)=>r.resetNumTeam&&r.resetNumTeam(...c))},[_(o,{icon:"fa-solid fa-arrow-rotate-left"})])])):S("",!0)]),_:1}),i.isDisplayGroup?S("",!0):(v(),y("button",{key:0,type:"button",class:"btn btn-primary ms-auto my-1",onClick:e[19]||(e[19]=c=>r.reallocate())}," 重新分隊 ")),i.isDisplayGroup?S("",!0):(v(),y("button",{key:1,type:"button",class:"btn btn-primary ms-3 sort-check my-1",onClick:e[20]||(e[20]=c=>r.sortRank())},[_(o,{icon:"fa-solid fa-flag-checkered"})]))]),Vx,i.editArea?(v(),y("div",Hx,[zx,i.tempData.id?(v(),y("div",Wx,[de(f("input",{type:"text","onUpdate:modelValue":e[21]||(e[21]=c=>i.tempData.text=c)},null,512),[[Fe,i.tempData.text]]),f("button",{type:"button",class:"btn btn-primary",onClick:e[22]||(e[22]=c=>(r.confirm(),r.saveRank()))},[_(o,{icon:"fa-solid fa-floppy-disk"})])])):S("",!0)])):S("",!0)],2)])}const qx=Ge(GI,[["render",Gx],["__scopeId","data-v-d66bbfee"]]),D_="/gamev2/assets/hand-B2b8O7Zw.mp3",Kx={mixins:[wt],data(){return{sec:20,timer:null,groupList:[],teamColor:["teamRed","teamGreen","teamBlue","teamPurple","teamOrange","teamCyan"],minusBtnDisplay:!1,delBtnDisplay:!1,setBtn:!1,play:!0,pause:!1,hand:D_,controlRouter:"",playMusic:!1}},methods:{triggerFadeIn(t){this.$emit("fadeInAudio",t)},triggerFadeOut(t){this.$emit("fadeOutAudio",t)},playAudio(){this.$refs.audioRef&&(this.$refs.audioRef.play(),this.play=!1,this.pause=!0)},resetAudio(){this.$refs.audioRef&&(this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0,this.play=!0,this.pause=!1)},addGroup(){const t={id:new Date().getTime(),score:0};this.groupList.push(t)},plusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score+=1)})},minusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score-=1)})},removeData(t){this.groupList.forEach((e,n)=>{t.id==e.id&&this.groupList.splice(n,1)})},saveRank(){const t=this;t.updateData({groupList:t.groupList},"/charades/")},onReadData(){const t=this;Ut(Xe(Ze),e=>{console.log(e.val()),e.val().charades.groupList?t.groupList=e.val().charades.groupList:t.groupList=[],t.playMusic=e.val().charades.playMusic,t.remotePlay(),t.controlRouter=e.val().router.controlRouter;const s=t.$route.fullPath.split("/");t.controlRouter!=s[1]&&t.$router.push(t.controlRouter)})},remoteClickPlay(){const t=this;t.playMusic?(t.playMusic=!1,t.updateData({playMusic:t.playMusic},"/charades/"),t.resetAudio()):(t.playMusic=!0,t.updateData({playMusic:t.playMusic},"/charades/"),t.playAudio())},remotePlay(){const t=this;t.playMusic?t.playAudio():t.resetAudio()}},computed:{},watch:{},components:{RouterLink:ft},mounted(){Ct(this.$router)&&(this.onReadData(),this.triggerFadeOut("refMusic1Audio"))}},Yx=t=>(vt("data-v-f4ddcff0"),t=t(),yt(),t),Qx={class:"bg"},Jx={class:"w-100"},Xx={class:"vh-100 d-flex align-items-md-center"},Zx={id:"groupScoreboard",class:"w-100"},e4={class:"container"},t4=Yx(()=>f("div",{class:"teamTitle fs-3 text-center text-white py-1 mb-4"}," 比手畫腳 | 團隊分數 ",-1)),n4={class:"container w-50"},s4={class:"countDownArea d-flex justify-content-center align-items-center flex-column pb-2"},i4={class:"d-flex align-items-center flex-wrap flex-md-nowrap"},r4=["src"],o4={id:"teamDisplay",class:"d-flex justify-content-center flex-column flex-md-row"},a4={class:"teamBg position-relative my-1"},l4={class:"teamBgChar"},c4={class:"teamScore position-absolute top-50 start-50 translate-middle"},u4=["onClick"],f4={style:{position:"absolute",left:"4px",bottom:"4px"}},d4=["onClick"],h4=["onClick"],p4={class:"container all-set-btns d-flex pt-2"},m4={type:"button",class:"btn btn-primary set-btn me-2"},g4={key:0,class:"setting-btns"};function _4(t,e,n,s,i,r){const o=pe("font-awesome-icon"),l=pe("RouterLink");return v(),y("div",null,[f("div",Qx,[f("table",Jx,[f("tbody",null,[f("tr",null,[f("td",Xx,[f("div",Zx,[f("div",e4,[t4,f("div",n4,[f("div",s4,[f("div",i4,[f("div",null,[f("audio",{src:i.hand,controls:"",loop:"",ref:"audioRef"},null,8,r4)]),i.play?(v(),y("button",{key:0,type:"button",class:"btn btn-primary mx-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[0]||(e[0]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-play"})])):S("",!0),i.pause?(v(),y("button",{key:1,type:"button",class:"btn btn-primary mx-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[1]||(e[1]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-rotate-right"})])):S("",!0)])])]),f("div",o4,[(v(!0),y(re,null,Pe(i.groupList,(a,c)=>(v(),y("div",{key:a.id,class:ae(["flex-fill",i.teamColor[c]])},[f("div",a4,[f("div",l4,j(String.fromCharCode(65+c)),1),f("div",c4,j(a.score),1),f("button",{type:"button",class:"btn btn-primary",style:{position:"absolute",right:"4px",bottom:"4px",background:"#f8b01e","border-radius":"100px",border:"unset"},onClick:u=>(r.plusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,u4),f("div",f4,[i.minusBtnDisplay?(v(),y("button",{key:0,type:"button",class:"btn btn-primary",onClick:u=>(r.minusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,d4)):S("",!0),i.delBtnDisplay?(v(),y("button",{key:1,type:"button",class:"btn btn-primary",onClick:u=>(r.removeData(a),r.saveRank())},[_(o,{icon:"fa-regular fa-trash-can"})],8,h4)):S("",!0)])])],2))),128))]),f("div",p4,[_(l,{to:"/"},{default:ce(()=>[f("button",m4,[_(o,{icon:"fa-solid fa-house"})])]),_:1}),f("button",{type:"button",class:"btn btn-primary set-btn",onClick:e[2]||(e[2]=a=>i.setBtn=!i.setBtn)},[_(o,{icon:"fa-solid fa-gear"})]),_(Yt,{name:"set-btn"},{default:ce(()=>[i.setBtn?(v(),y("div",g4,[f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[3]||(e[3]=a=>(r.addGroup(),r.saveRank()))},[_(o,{icon:"fa-solid fa-user-plus"})]),f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[4]||(e[4]=a=>i.minusBtnDisplay=!i.minusBtnDisplay)},[_(o,{icon:"fa-solid fa-minus"})]),f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[5]||(e[5]=a=>i.delBtnDisplay=!i.delBtnDisplay)},[_(o,{icon:"fa-regular fa-trash-can"})])])):S("",!0)]),_:1})])])])])])])])])])}const v4=Ge(Kx,[["render",_4],["__scopeId","data-v-f4ddcff0"]]),O_="/gamev2/assets/tempo_words_in_a_hurry-DxCIY0gM.mp3",L_="/gamev2/assets/santa-iBofZpZo.png",M_="/gamev2/assets/elk-DlMO3Z7A.png",y4={data(){return{sec:20,timer:null,inputText:"",groupList:[],teamColor:["teamRed","teamGreen","teamBlue","teamPurple","teamOrange","teamCyan"],minusBtnDisplay:!1,delBtnDisplay:!1,setBtn:!1,play:!0,pause:!1,topicArr:["1. 造詞題目：陸地上的動物","2. 造詞題目：甜的食物","3. 造詞題目：方形的東西","4. 造詞題目：國家或地名","5. 造詞題目：家裡看得到的東西"],currentTopic:0,tempo_words_in_a_hurry:O_}},methods:{playAudio(){this.$refs.audioRef.play()},pauseAudio(){this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0},countDwn(){this.sec-=1,this.sec>0&&(this.timer=setTimeout(this.countDwn,1e3)),this.play=!1,this.pause=!0},countPause(){clearTimeout(this.timer),this.play=!0,this.pause=!1},countReset(){clearTimeout(this.timer),this.sec=20,this.play=!0,this.pause=!1},addGroup(t){const e={id:new Date().getTime(),team:this.inputText,score:0};this.groupList.push(e),this.inputText=""},plusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score+=1)})},minusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score-=1)})},removeData(t){this.groupList.forEach((e,n)=>{t.id==e.id&&this.groupList.splice(n,1)})},saveRank(){localStorage.setItem("countDownGroup",JSON.stringify(this.groupList))},preTopic(){this.currentTopic>0?this.currentTopic-=1:this.currentTopic=this.topicArr.length-1},nextTopic(){this.currentTopic<this.topicArr.length-1?this.currentTopic+=1:this.currentTopic=0}},computed:{},watch:{},components:{RouterLink:ft},mounted(){Ct(this.$router)&&(this.groupList=JSON.parse(localStorage.getItem("countDownGroup")),console.log(this.groupList),this.groupList||(this.groupList=[],console.log("this.groupList"),console.log(this.groupList)))}},F_=t=>(vt("data-v-7b8f741a"),t=t(),yt(),t),b4={class:"bg"},w4={id:"groupScoreboard",class:"position-absolute top-50 start-50 translate-middle w-100"},C4={class:"container"},k4={class:"topic-outer fs-3"},E4=F_(()=>f("div",{class:"topic-bg"},null,-1)),T4={class:"topic position-absolute top-50 start-50 translate-middle"},I4={class:"countDownArea d-flex justify-content-center align-items-center pb-2"},x4={id:"sec",class:"sec"},S4=["src"],R4=F_(()=>f("div",{class:"teamTitle fs-3 text-center text-white py-1 mb-4"}," 急中生字 | 團隊分數 ",-1)),A4={id:"teamDisplay",class:"d-flex justify-content-center"},P4={class:"teamBg position-relative"},N4={key:0,src:L_,alt:"聖誕老人隊",width:"65px"},D4={key:1,src:M_,alt:"麋鹿隊",width:"65px"},O4={class:"teamScore position-absolute top-50 start-50 translate-middle"},L4=["onClick"],M4={style:{position:"absolute",left:"4px",bottom:"4px"}},F4=["onClick"],U4=["onClick"],B4={class:"container all-set-btns d-flex pt-2"},$4={type:"button",class:"btn btn-primary set-btn me-2"},j4={key:0,class:"setting-btns"};function V4(t,e,n,s,i,r){const o=pe("font-awesome-icon"),l=pe("RouterLink"),a=pe("Transition-group");return v(),y("div",null,[f("div",b4,[f("div",w4,[f("div",C4,[f("div",k4,[E4,f("div",T4,j(i.topicArr[i.currentTopic]),1),f("div",{class:"pre-topic",onClick:e[0]||(e[0]=(...c)=>r.preTopic&&r.preTopic(...c))},[_(o,{icon:"fa-solid fa-circle-left"})]),f("div",{class:"next-topic",onClick:e[1]||(e[1]=(...c)=>r.nextTopic&&r.nextTopic(...c))},[_(o,{icon:"fa-solid fa-circle-right"})])]),f("div",I4,[f("button",{type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[2]||(e[2]=c=>(r.countReset(),r.pauseAudio()))},[_(o,{icon:"fa-solid fa-rotate-right"})]),f("div",x4,j(i.sec),1),i.play?(v(),y("button",{key:0,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[3]||(e[3]=c=>(r.countDwn(),r.playAudio()))},[_(o,{icon:"fa-solid fa-play"})])):S("",!0),f("audio",{src:i.tempo_words_in_a_hurry,controls:"",ref:"audioRef",class:"d-none"},null,8,S4),i.pause?(v(),y("button",{key:1,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px"},onClick:e[4]||(e[4]=c=>(r.countPause(),r.pauseAudio()))},[_(o,{icon:"fa-solid fa-pause"})])):S("",!0)]),R4,f("div",A4,[(v(!0),y(re,null,Pe(i.groupList,(c,u)=>(v(),y("div",{key:c.id,class:ae(["flex-fill",i.teamColor[u]])},[f("div",P4,[u==0?(v(),y("img",N4)):S("",!0),u==1?(v(),y("img",D4)):S("",!0),f("div",O4,j(c.score),1),f("button",{type:"button",class:"btn btn-primary",style:{position:"absolute",right:"4px",bottom:"4px",background:"#f8b01e","border-radius":"100px",border:"unset"},onClick:d=>(r.plusNum(c),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,L4),f("div",M4,[i.minusBtnDisplay?(v(),y("button",{key:0,type:"button",class:"btn btn-primary",onClick:d=>(r.minusNum(c),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,F4)):S("",!0),i.delBtnDisplay?(v(),y("button",{key:1,type:"button",class:"btn btn-primary",onClick:d=>(r.removeData(c),r.saveRank())},[_(o,{icon:"fa-regular fa-trash-can"})],8,U4)):S("",!0)])])],2))),128))]),f("div",B4,[_(l,{to:"/"},{default:ce(()=>[f("button",$4,[_(o,{icon:"fa-solid fa-house"})])]),_:1}),f("button",{type:"button",class:"btn btn-primary set-btn",onClick:e[5]||(e[5]=c=>i.setBtn=!i.setBtn)},[_(o,{icon:"fa-solid fa-gear"})]),_(a,{name:"set-btn"},{default:ce(()=>[i.setBtn?(v(),y("div",j4,[f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[6]||(e[6]=c=>(r.addGroup(i.inputText),r.saveRank()))},[_(o,{icon:"fa-solid fa-user-plus"})]),f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[7]||(e[7]=c=>i.minusBtnDisplay=!i.minusBtnDisplay)},[_(o,{icon:"fa-solid fa-minus"})]),f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[8]||(e[8]=c=>i.delBtnDisplay=!i.delBtnDisplay)},[_(o,{icon:"fa-regular fa-trash-can"})])])):S("",!0)]),_:1})])])])])])}const H4=Ge(y4,[["render",V4],["__scopeId","data-v-7b8f741a"]]),z4="/gamev2/assets/jump_music-CPtGKJ36.mp3",W4={data(){return{playbackRate:1,play:!0,pause:!1,list:[],tempo_solitaire:z4}},methods:{playAudio(){this.$refs.audioRef.play(),this.play=!1,this.pause=!0},pauseAudio(){this.$refs.audioRef.pause(),this.play=!0,this.pause=!1},resetAudio(){this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0,this.play=!0,this.pause=!1},upPlayRate(){this.playbackRate<=2&&(this.playbackRate+=.1,console.log(this.playbackRate),this.$refs.audioRef.playbackRate=this.playbackRate)},dwnPlayRate(){this.playbackRate>.2&&(this.playbackRate-=.1,console.log(this.playbackRate),this.$refs.audioRef.playbackRate=this.playbackRate)},plusLife(t){this.list.forEach((e,n)=>{e.id===t.id&&(this.list[n].life+=1)})},minusLife(t){this.list.forEach((e,n)=>{e.id===t.id&&(this.list[n].life-=1)})},saveRank(){console.log("存檔"),localStorage.setItem("listData",JSON.stringify(this.list))}},computed:{},watch:{},components:{RouterLink:ft},mounted(){Ct(this.$router)&&JSON.parse(localStorage.getItem("listData"))&&(this.list=JSON.parse(localStorage.getItem("listData")))}},Du=t=>(vt("data-v-0b8231c0"),t=t(),yt(),t),G4={class:"bg"},q4={id:"groupScoreboard",class:"position-absolute top-50 start-50 translate-middle w-100"},K4={class:"d-flex flex-column flex-wrap px-5",style:{height:"400px"}},Y4={class:"d-inline-block flex-fill fs-5"},Q4={key:0,class:"d-inline-block rank-num"},J4=Du(()=>f("img",{src:L_,style:{width:"40px"}},null,-1)),X4=[J4],Z4={key:1,class:"d-inline-block rank-num"},e3=Du(()=>f("img",{src:M_,style:{width:"40px"}},null,-1)),t3=[e3],n3=["onClick"],s3=["onClick"],i3=Du(()=>f("div",{class:"teamTitle fs-3 text-center text-white py-1 mb-5 w-50"}," Tempo 遊戲 | 團隊 + 個人賽 ",-1)),r3={class:"container w-50"},o3={class:"countDownArea d-flex justify-content-center align-items-center flex-column pb-2"},a3={class:"d-flex align-items-center"},l3=["src"],c3={class:"d-flex align-items-center pt-3"},u3={class:"pe-3"},f3={class:"container all-set-btns d-flex pt-2"},d3={type:"button",class:"btn btn-primary set-btn me-2"};function h3(t,e,n,s,i,r){const o=pe("font-awesome-icon"),l=pe("RouterLink");return v(),y("div",null,[f("div",G4,[f("div",q4,[f("div",K4,[(v(!0),y(re,null,Pe(i.list,a=>(v(),y("div",{class:"d-flex align-items-center p-2 m-1 rounded-3",style:{"background-color":"rgba(255, 255, 255, 0.5)"},key:a.id},[f("div",Y4,[a.team==="A"?(v(),y("div",Q4,X4)):S("",!0),a.team==="B"?(v(),y("div",Z4,t3)):S("",!0),ne(" "+j(a.text),1)]),a.life>0?(v(!0),y(re,{key:0},Pe(a.life,c=>(v(),y("div",{class:"d-inline-block",key:c},[_(o,{icon:"fa-solid fa-heart",class:"fs-2 m-1",style:{color:"red"}})]))),128)):S("",!0),a.life<=0?(v(),Mp(o,{key:1,icon:"fa-solid fa-skull-crossbones",class:"fs-2 m-1",style:{color:"black"}})):S("",!0),f("button",{type:"button",class:"btn btn-primary ms-1",onClick:c=>(r.minusLife(a),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,n3),f("button",{type:"button",class:"btn btn-primary ms-1",onClick:c=>(r.plusLife(a),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,s3)]))),128))]),i3,f("div",r3,[f("div",o3,[f("div",a3,[f("button",{type:"button",class:"btn btn-primary mx-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[0]||(e[0]=(...a)=>r.resetAudio&&r.resetAudio(...a))},[_(o,{icon:"fa-solid fa-rotate-right"})]),f("div",null,[f("audio",{src:i.tempo_solitaire,controls:"",ref:"audioRef"},null,8,l3)]),i.play?(v(),y("button",{key:0,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[1]||(e[1]=(...a)=>r.playAudio&&r.playAudio(...a))},[_(o,{icon:"fa-solid fa-play"})])):S("",!0),i.pause?(v(),y("button",{key:1,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px"},onClick:e[2]||(e[2]=(...a)=>r.pauseAudio&&r.pauseAudio(...a))},[_(o,{icon:"fa-solid fa-pause"})])):S("",!0)]),f("div",c3,[f("div",u3,[ne(" 播放速度： "),f("span",null,j((Math.floor(i.playbackRate*10)/10).toFixed(1)),1)]),f("button",{type:"button",class:"btn btn-primary rounded-circle me-2",onClick:e[3]||(e[3]=(...a)=>r.upPlayRate&&r.upPlayRate(...a))},[_(o,{icon:"fa-solid fa-up-long"})]),f("button",{type:"button",class:"btn btn-primary rounded-circle",onClick:e[4]||(e[4]=(...a)=>r.dwnPlayRate&&r.dwnPlayRate(...a))},[_(o,{icon:"fa-solid fa-down-long"})])])]),f("div",f3,[_(l,{to:"/"},{default:ce(()=>[f("button",d3,[_(o,{icon:"fa-solid fa-house"})])]),_:1})])])])])])}const p3=Ge(W4,[["render",h3],["__scopeId","data-v-0b8231c0"]]),m3={mixins:[wt],data(){return{controlRouter:""}},components:{RouterLink:ft,RouterView:Fr},methods:{onReadData(){const t=this;Ut(Xe(Ze),e=>{console.log(e.val()),t.controlRouter=e.val().router.controlRouter})}},mounted(){Ct(this.$router)&&this.onReadData()}},g3={class:"bg-dark text-white w-100 vh-100 p-5"},_3=f("h2",{class:"text-center pb-3"},"遠端控制",-1);function v3(t,e,n,s,i,r){const o=pe("RouterLink");return v(),y("div",g3,[_3,_(o,{to:"/remote/"+i.controlRouter,class:"text-dark btn btn-warning fs-3 w-100"},{default:ce(()=>[ne(" 進入目前頁面 ")]),_:1},8,["to"])])}const y3=Ge(m3,[["render",v3]]),b3={mixins:[wt],components:{RouterLink:ft,RouterView:Fr},methods:{remoteSwitchPage(t){this.updateData({controlRouter:t},"/router/")}}},w3={class:"d-flex flex-column justify-content-center align-items-center bg-primary text-white text-center m-0"},C3={class:"pt-3 m-0"},k3={class:"d-flex flex-wrap"},E3={class:"p-2"},T3={class:"p-2"},I3={class:"p-2"},x3={class:"p-2"},S3={class:"p-2"};function R3(t,e,n,s,i,r){const o=pe("font-awesome-icon"),l=pe("RouterLink"),a=pe("RouterView");return v(),y("div",null,[f("div",w3,[f("h4",C3,[_(o,{icon:"fa-solid fa-wifi"}),ne(" 共伴程式遙控器 ")]),f("div",k3,[f("div",E3,[_(l,{to:"ppt",class:"text-white",onClick:e[0]||(e[0]=c=>r.remoteSwitchPage("ppt"))},{default:ce(()=>[ne("活動流程")]),_:1})]),f("div",T3,[_(l,{to:"rank",class:"text-white",onClick:e[1]||(e[1]=c=>r.remoteSwitchPage("rank"))},{default:ce(()=>[ne("排行榜")]),_:1})]),f("div",I3,[_(l,{to:"rank",class:"text-white",onClick:e[2]||(e[2]=c=>r.remoteSwitchPage("charades"))},{default:ce(()=>[ne("比手畫腳")]),_:1})]),f("div",x3,[_(l,{to:"jump",class:"text-white",onClick:e[3]||(e[3]=c=>r.remoteSwitchPage("jump"))},{default:ce(()=>[ne("跳跳Tempo")]),_:1})]),f("div",S3,[_(l,{to:"selftalk",class:"text-white",onClick:e[4]||(e[4]=c=>r.remoteSwitchPage("selftalk"))},{default:ce(()=>[ne(" 自說字話 ")]),_:1})])])]),_(a)])}const A3=Ge(b3,[["render",R3]]),P3={mixins:[wt],data(){return{imgList:[{id:"img-id-1",src:h_,alt:"1"},{id:"img-id-2",src:p_,alt:"2"},{id:"img-id-3",src:m_,alt:"3"},{id:"img-id-4",src:g_,alt:"4"},{id:"img-id-5",src:__,alt:"5"},{id:"img-id-6",src:v_,alt:"6"},{id:"img-id-7",src:y_,alt:"7"},{id:"img-id-8",src:b_,alt:"8"},{id:"img-id-9",src:w_,alt:"9"},{id:"img-id-10",src:C_,alt:"10"},{id:"img-id-11",src:k_,alt:"11"},{id:"img-id-12",src:E_,alt:"12"},{id:"img-id-13",src:T_,alt:"13"},{id:"img-id-14",src:I_,alt:"14"},{id:"img-id-15",src:x_,alt:"15"},{id:"img-id-16",src:S_,alt:"16"},{id:"img-id-17",src:R_,alt:"17"},{id:"img-id-18",src:A_,alt:"18"},{id:"img-id-19",src:P_,alt:"19"},{id:"img-id-20",src:N_,alt:"20"}],page:0,lastPage:19,controlRouter:""}},methods:{onReadData(){const t=this;Ut(Xe(Ze),e=>{console.log(e.val()),t.page=e.val().ppt.page,t.controlRouter=e.val().router.controlRouter;const s=t.$route.fullPath.split("/");t.controlRouter!=s[1]&&t.$router.push(t.controlRouter)})},pre(){const t=this;t.page>0&&t.updateData({page:t.page-1},"/ppt")},next(){const t=this;t.page<t.lastPage&&t.updateData({page:t.page+1},"/ppt")},nextPop(){const t=this;t.page<t.lastPage&&t.updateData({page:t.page+2},"/ppt")}},mounted(){Ct(this.$router)&&this.onReadData()}},N3=["id"],D3=["src","alt"],O3={class:"d-flex flex-md-row w-100 mt-3"},L3={class:"p-1 w-100 h-50"},M3={class:"p-1 w-100 h-50"},F3={key:0,class:"p-1 w-100 h-50"};function U3(t,e,n,s,i,r){const o=pe("font-awesome-icon");return v(),y("div",null,[(v(!0),y(re,null,Pe(i.imgList,(l,a)=>(v(),y("div",{key:l.id,id:l.id,class:ae(["imgs w-100",{"d-none":i.page!==a}])},[f("img",{src:l.src,alt:l.alt,class:"w-100 w-100",style:{"object-fit":"cover"}},null,8,D3)],10,N3))),128)),f("div",O3,[f("div",L3,[f("button",{type:"button",class:ae(["btn w-100 h-100",[i.page!=0?"btn-primary":"btn-secondary"]]),onClick:e[0]||(e[0]=(...l)=>r.pre&&r.pre(...l))},[_(o,{icon:"fa-solid fa-caret-left",style:{"font-size":"72px"}})],2)]),f("div",M3,[f("button",{type:"button",class:ae(["btn w-100 h-100",[i.page!=i.lastPage?"btn-primary":"btn-secondary"]]),onClick:e[1]||(e[1]=(...l)=>r.next&&r.next(...l))},[_(o,{icon:"fa-solid fa-caret-right",style:{"font-size":"72px"}})],2)]),i.page===11?(v(),y("div",F3,[f("button",{type:"button",class:"btn btn-primary w-100 h-100 fs-1",onClick:e[2]||(e[2]=(...l)=>r.nextPop&&r.nextPop(...l))},[_(o,{icon:"fa-solid fa-caret-right",style:{"font-size":"72px"}}),ne("*2 ")])])):S("",!0)])])}const B3=Ge(P3,[["render",U3]]),$3={mixins:[wt],data(){return{teamCnt:0,teamCntTmp:0,editTeamDisplay:!1,text:"",sex:"",list:[],teamArr:[],team:"",tempData:{},editArea:!1,setBtn:!1,joinBtnDisplay:!1,editBtnDisplay:!1,delBtnDisplay:!1,isDisplayGroup:!1,isRank:!1,plusBtnDisplay:!1,minusBtnDisplay:!1,displayAllFirbase:"",controlRouter:""}},methods:{editTeamCnt(){this.editTeamDisplay=!0,this.teamCntTmp=this.teamCnt},confirmTeamCnt(){this.editTeamDisplay=!1,this.teamCnt=this.teamCntTmp,this.updateData({teamCnt:Number(this.teamCnt)},"/rank/")},addData(){if(this.text.trim()&&this.sex&&this.team){const t={id:new Date().getTime(),text:this.text,score:0,sex:this.sex,team:this.team,life:1};this.list.push(t),this.text="",this.sex="",this.team="",console.log(this.list)}else alert("欄位皆為必填！")},editData(t){this.tempData={...t},this.editArea=!0},confirm(){this.list.forEach((t,e)=>{t.id===this.tempData.id&&(this.list[e]=this.tempData)}),this.tempData={},this.editArea=!1},removeData(t){this.list.forEach((e,n)=>{t.id==e.id&&this.list.splice(n,1)})},plusNum(t){this.list.forEach((e,n)=>{t.id==e.id&&(this.list[n].score+=1)})},plusNumTeam(){confirm("確定團隊加分嗎？")&&(this.teamArr.forEach((e,n)=>{this.list.forEach((s,i)=>{s.team===e&&(this.list[i].score+=Number(this.$refs[`refTeamPlus${n}`][0].value))})}),this.saveRank(),this.resetNumTeam())},minusNum(t){this.list.forEach((e,n)=>{t.id==e.id&&(this.list[n].score-=1)})},minusNumTeam(){this.teamArr.forEach((t,e)=>{this.list.forEach((n,s)=>{n.team===t&&(this.list[s].score-=Number(this.$refs[`refTeamPlus${e}`][0].value))})})},resetNumTeam(){this.teamArr.forEach((t,e)=>{this.$refs[`refTeamPlus${e}`][0].value=0})},sortRank(){confirm("確定活動結束，執行排行嗎？")&&(this.isRank=!0,this.list.sort((e,n)=>n.score-e.score),this.saveRank(),this.updateData({isRank:!0},"/rank/"))},generateTeams(){this.teamArr=[];for(let t=0;t<this.teamCnt;t++)this.teamArr.push(String.fromCharCode(65+t));console.warn(this.teamArr)},reallocate(){if(confirm("確定要重新分隊嗎？")){this.generateTeams();const e=[...this.list],n=e.filter(r=>r.sex==="1"),s=e.filter(r=>r.sex==="0");console.log("Boys:",n),console.log("Girls:",s);let i=0;for(let r=0;r<n.length;r++){console.log("boysArray.length",n.length);const o=[];let l;do l=Math.floor(Math.random()*n.length),o.includes(l)||(o.push(l),this.list.forEach(a=>{a.id===n[l].id&&(a.team=this.teamArr[i%this.teamCnt])}),i+=1);while(o.length<n.length)}for(let r=0;r<s.length;r++){const o=[];let l;do l=Math.floor(Math.random()*s.length),o.includes(l)||(o.push(l),this.list.forEach(a=>{a.id===s[l].id&&(a.team=this.teamArr[i%this.teamCnt])}),i+=1);while(o.length<s.length)}this.teamRank(),this.saveRank(),this.isRank=!1,this.updateData({isRank:!1},"/rank/")}},teamRank(){console.log(this.list),this.list.sort((t,e)=>{console.log(t),console.log(t.team);const n=t.team.localeCompare(e.team);return n===0?e.score-t.score:n})},saveRank(){console.log("存檔"),this.updateData({rankData:this.list},"/rank/")},switchIsDisplayGroup(){this.isDisplayGroup=!this.isDisplayGroup,this.updateData({isDisplayGroup:this.isDisplayGroup},"/rank/")},onReadData(){const t=this;Ut(Xe(Ze),e=>{console.log(e.val()),t.displayAllFirbase=e.val(),t.teamCnt=e.val().rank.teamCnt,t.list=e.val().rank.rankData?e.val().rank.rankData:[],t.isRank=e.val().rank.isRank,t.isDisplayGroup=e.val().rank.isDisplayGroup,t.controlRouter=e.val().router.controlRouter;const s=t.$route.fullPath.split("/");t.controlRouter!=s[1]&&t.$router.push(t.controlRouter),this.generateTeams()})}},computed:{},watch:{},components:{RouterLink:ft},mounted(){Ct(this.$router)&&this.onReadData()}},Ps=t=>(vt("data-v-4a638e05"),t=t(),yt(),t),j3={key:0,class:"joinPerson"},V3=Ps(()=>f("div",{class:"pop-bg"},null,-1)),H3={class:"d-flex flex-column mb-3 p-5 rounded-3",style:{"z-index":"10",width:"80%","max-width":"500px","max-height":"100vh",overflow:"auto",background:"#f9f9f9"}},z3={class:"mb-3"},W3=Ps(()=>f("br",null,null,-1)),G3={class:"mb-3"},q3=Ps(()=>f("br",null,null,-1)),K3=Ps(()=>f("br",null,null,-1)),Y3={class:"d-flex flex-wrap"},Q3=["id","value"],J3=["for"],X3={class:"d-flex pt-3"},Z3={class:"w-100 pe-1"},eS={class:"w-100 ps-1"},tS={class:"position-relative mt-5"},nS={class:"h2-title"},sS={class:"text-center mt-1"},iS={class:"container px-0 py-2 text-end"},rS={key:0,class:"container list-outer flex-wrap d-flex flex-column"},oS={class:"list-content d-flex align-items-center"},aS={key:0,class:"rank-num"},lS={key:1,class:"rank-num"},cS={class:"rank-text d-flex flex-grow-1 px-2"},uS={class:"flex-grow-1"},fS=["onClick"],dS=["onClick"],hS=["onClick"],pS=["onClick"],mS={key:1,class:"container d-flex flex-row flex-wrap w-100 px-0"},gS={class:"text-white h-100 list-outer d-flex flex-wrap",style:{border:"2px solid white"}},_S={class:"list-content d-flex align-items-center"},vS={key:0,class:"rank-num"},yS={class:"rank-text d-flex flex-grow-1 pe-4"},bS=["onClick"],wS=["onClick"],CS=["onClick"],kS=["onClick"],ES={key:1,class:"container d-flex flex-wrap justify-content-between align-items-center px-0 py-3"},TS={class:"text-white d-flex align-items-center"},IS={class:"pe-2"},xS={class:"d-flex"},SS={class:"text-white d-flex flex-wrap justify-content-center align-items-center"},RS=Ps(()=>f("div",null,"團隊計分：",-1)),AS={class:"d-flex flex-wrap flex-row align-items-center"},PS={class:"text-center"},NS={class:"p-md-0 p-2"},DS={class:"container all-set-btns d-flex flex-wrap px-0 pt-2"},OS={type:"button",class:"btn btn-primary set-btn me-2 my-2"},LS={key:0,class:"setting-btns"},MS=Ps(()=>f("hr",null,null,-1)),FS={key:2,class:"edit-area-outer"},US=Ps(()=>f("div",{class:"pop-bg"},null,-1)),BS={key:0,class:"edit-area"};function $S(t,e,n,s,i,r){var a;const o=pe("font-awesome-icon"),l=pe("RouterLink");return v(),y("div",null,[f("div",{class:ae(["p-3 rank-bg",{"d-flex flex-column justify-content-center align-items-center":i.isDisplayGroup}])},[i.joinBtnDisplay?(v(),y("div",j3,[V3,f("div",H3,[f("div",z3,[ne(" 暱稱："),W3,de(f("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=c=>i.text=c),class:"form-control",placeholder:"請輸入暱稱","aria-label":"請輸入暱稱"},null,512),[[Fe,i.text]])]),f("div",G3,[ne(" 性別："),q3,de(f("input",{type:"radio",name:"sex",id:"boy","onUpdate:modelValue":e[1]||(e[1]=c=>i.sex=c),value:"1",class:"d-none"},null,512),[[Js,i.sex]]),f("label",{for:"boy",class:ae(["btn me-1 mt-1",[i.sex==="1"?"btn-primary":"btn-outline-primary"]]),style:{width:"100px"}},"男生",2),de(f("input",{type:"radio",name:"sex",id:"girl","onUpdate:modelValue":e[2]||(e[2]=c=>i.sex=c),value:"0",class:"d-none"},null,512),[[Js,i.sex]]),f("label",{for:"girl",class:ae(["btn me-1 mt-1",[i.sex==="0"?"btn-primary":"btn-outline-primary"]]),style:{width:"100px"}},"女生",2)]),f("div",null,[ne(" 組別："),K3,f("div",Y3,[(v(!0),y(re,null,Pe(i.teamArr,(c,u)=>(v(),y("div",{key:u,class:"me-1 mt-1",style:{width:"100px"}},[de(f("input",{id:c,type:"radio",name:"teamRadio","onUpdate:modelValue":e[3]||(e[3]=d=>i.team=d),value:c,class:"d-none"},null,8,Q3),[[Js,i.team]]),f("label",{for:c,class:ae(["btn w-100",[c==i.team?"btn-primary":"btn-outline-primary"]])},j(c),11,J3)]))),128))])]),f("div",X3,[f("div",Z3,[f("button",{class:"btn btn-outline-secondary check-join-btn w-100",type:"button",id:"button-addon-cancel",onClick:e[4]||(e[4]=c=>i.joinBtnDisplay=!i.joinBtnDisplay)}," 取消 ")]),f("div",eS,[f("button",{class:"btn btn-primary w-100",type:"button",id:"button-addon2",onClick:e[5]||(e[5]=c=>(r.addData(),r.saveRank()))}," 新增 ")])])])])):S("",!0),f("div",tS,[f("div",nS,[f("h2",sS,j(i.isDisplayGroup?"各組成員":"排行榜"),1)]),f("div",iS,[f("button",{type:"button",class:"btn btn-primary",onClick:e[6]||(e[6]=(...c)=>r.switchIsDisplayGroup&&r.switchIsDisplayGroup(...c))},[de(f("div",null,[_(o,{icon:"fa-solid fa-list-ul"})],512),[[gs,i.isDisplayGroup]]),de(f("div",null,[_(o,{icon:"fa-regular fa-rectangle-list"})],512),[[gs,!i.isDisplayGroup]])])]),i.isDisplayGroup?(v(),y("div",mS,[(v(!0),y(re,null,Pe(i.teamArr,(c,u)=>(v(),y("div",{key:u,class:"groupDisplay p-2 position-relative"},[f("div",{class:ae({"rwd-rank-teamName":!i.isRank})},j(c),3),f("div",gS,[(v(!0),y(re,null,Pe(i.list,(d,h)=>(v(),y("div",{key:d.id,class:ae({"w-50":d.team===c})},[d.team===c?(v(),y("div",{key:0,class:ae(["list-li ps-5",{"rwd-list-li":!i.isRank}])},[f("div",_S,[i.isRank?(v(),y("div",vS,j(h+1),1)):S("",!0),i.isRank?S("",!0):(v(),y("div",{key:1,class:ae(["rank-num",{"rwd-rank-num":!i.isRank}])},j(d.team),3)),f("div",yS,[f("div",{class:ae(["flex-grow-1",{"rwd-rank-text":!i.isRank}])},j(d.text),3),f("div",{class:ae({"rank-score":!i.isRank})},j(d.score),3)]),i.plusBtnDisplay?(v(),y("button",{key:2,type:"button",class:"btn btn-primary me-2",onClick:g=>(r.plusNum(d),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,bS)):S("",!0),i.minusBtnDisplay?(v(),y("button",{key:3,type:"button",class:"btn btn-primary me-2",onClick:g=>(r.minusNum(d),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,wS)):S("",!0),i.editBtnDisplay?(v(),y("button",{key:4,type:"button",class:"btn btn-primary me-2",onClick:g=>r.editData(d)},[_(o,{icon:"fa-regular fa-pen-to-square"})],8,CS)):S("",!0),i.delBtnDisplay?(v(),y("button",{key:5,type:"button",class:"btn btn-primary",onClick:g=>(r.removeData(d),r.saveRank())},[_(o,{icon:"fa-regular fa-trash-can"})],8,kS)):S("",!0)])],2)):S("",!0)],2))),128))])]))),128))])):(v(),y("div",rS,[_(Yt,{name:"fade"},{default:ce(()=>[(v(!0),y(re,null,Pe(i.list,(c,u)=>(v(),y("div",{key:c.id,class:"list-li",style:{"padding-left":"30px"}},[f("div",oS,[i.isRank?(v(),y("div",aS,j(u+1),1)):S("",!0),i.isRank?S("",!0):(v(),y("div",lS,j(c.team),1)),f("div",cS,[f("div",uS,j(c.text),1),f("div",null,j(c.score),1)]),i.plusBtnDisplay?(v(),y("button",{key:2,type:"button",class:"btn btn-primary me-2",onClick:d=>(r.plusNum(c),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,fS)):S("",!0),i.minusBtnDisplay?(v(),y("button",{key:3,type:"button",class:"btn btn-primary me-2",onClick:d=>(r.minusNum(c),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,dS)):S("",!0),i.editBtnDisplay?(v(),y("button",{key:4,type:"button",class:"btn btn-primary me-2",onClick:d=>r.editData(c)},[_(o,{icon:"fa-regular fa-pen-to-square"})],8,hS)):S("",!0),i.delBtnDisplay?(v(),y("button",{key:5,type:"button",class:"btn btn-primary",onClick:d=>(r.removeData(c),r.saveRank())},[_(o,{icon:"fa-regular fa-trash-can"})],8,pS)):S("",!0)])]))),128))]),_:1})]))]),i.isDisplayGroup?S("",!0):(v(),y("div",ES,[f("div",null,[f("div",TS,[f("div",IS,"共"+j((a=i.list)==null?void 0:a.length)+"人，分"+j(i.teamCnt)+"隊",1),i.editTeamDisplay?S("",!0):(v(),y("div",{key:0,class:"cursor-pointer",onClick:e[7]||(e[7]=(...c)=>r.editTeamCnt&&r.editTeamCnt(...c))},[_(o,{icon:"fa-solid fa-gear"})])),f("div",xS,[i.editTeamDisplay?de((v(),y("input",{key:0,type:"number",class:"form-control",style:{width:"80px"},"onUpdate:modelValue":e[8]||(e[8]=c=>i.teamCntTmp=c)},null,512)),[[Fe,i.teamCntTmp]]):S("",!0),i.editTeamDisplay?(v(),y("button",{key:1,type:"button",onClick:e[9]||(e[9]=(...c)=>r.confirmTeamCnt&&r.confirmTeamCnt(...c)),class:"btn btn-primary ms-2"}," 確定隊伍數 ")):S("",!0)])])]),f("div",SS,[RS,f("div",AS,[(v(!0),y(re,null,Pe(i.teamArr,(c,u)=>(v(),y("div",{class:"d-flex flex-column mx-1",key:u},[f("div",PS,j(c)+"隊伍",1),f("div",null,[f("input",{value:"0",type:"number",class:"form-control",style:{width:"80px"},ref_for:!0,ref:"refTeamPlus"+u},null,512)])]))),128))]),f("div",NS,[f("button",{type:"button",class:"btn btn-primary me-2",onClick:e[10]||(e[10]=c=>r.plusNumTeam())},[ne(" 團"),_(o,{icon:"fa-solid fa-plus"})])])])])),f("div",DS,[_(l,{to:"/"},{default:ce(()=>[f("button",OS,[_(o,{icon:"fa-solid fa-house"})])]),_:1}),f("button",{type:"button",class:"btn btn-primary set-btn my-2",onClick:e[11]||(e[11]=c=>i.setBtn=!i.setBtn)},[_(o,{icon:"fa-solid fa-gear"})]),_(Yt,{name:"set-btn"},{default:ce(()=>[i.setBtn?(v(),y("div",LS,[f("button",{type:"button",class:"btn btn-primary ms-2 my-2",onClick:e[12]||(e[12]=c=>i.plusBtnDisplay=!i.plusBtnDisplay)},[_(o,{icon:"fa-solid fa-plus"})]),f("button",{type:"button",class:"btn btn-primary ms-2 my-2",onClick:e[13]||(e[13]=c=>i.minusBtnDisplay=!i.minusBtnDisplay)},[_(o,{icon:"fa-solid fa-minus"})]),f("button",{type:"button",class:"btn btn-primary ms-2 my-2",onClick:e[14]||(e[14]=c=>i.editBtnDisplay=!i.editBtnDisplay)},[_(o,{icon:"fa-regular fa-pen-to-square"})]),f("button",{type:"button",class:"btn btn-primary ms-2 my-2",onClick:e[15]||(e[15]=c=>i.joinBtnDisplay=!i.joinBtnDisplay)},[_(o,{icon:"fa-solid fa-user-plus"})]),f("button",{type:"button",class:"btn btn-primary ms-2 my-2",onClick:e[16]||(e[16]=c=>i.delBtnDisplay=!i.delBtnDisplay)},[_(o,{icon:"fa-regular fa-trash-can"})]),f("button",{type:"button",class:"btn btn-primary me-2",onClick:e[17]||(e[17]=c=>(r.minusNumTeam(),r.saveRank(),r.resetNumTeam()))},[ne(" 團"),_(o,{icon:"fa-solid fa-minus"})]),f("button",{type:"button",class:"btn btn-primary",onClick:e[18]||(e[18]=(...c)=>r.resetNumTeam&&r.resetNumTeam(...c))},[_(o,{icon:"fa-solid fa-arrow-rotate-left"})])])):S("",!0)]),_:1}),i.isDisplayGroup?S("",!0):(v(),y("button",{key:0,type:"button",class:"btn btn-primary ms-auto my-1",onClick:e[19]||(e[19]=c=>r.reallocate())}," 重新分隊 ")),i.isDisplayGroup?S("",!0):(v(),y("button",{key:1,type:"button",class:"btn btn-primary ms-3 sort-check my-1",onClick:e[20]||(e[20]=c=>r.sortRank())},[_(o,{icon:"fa-solid fa-flag-checkered"})]))]),MS,i.editArea?(v(),y("div",FS,[US,i.tempData.id?(v(),y("div",BS,[de(f("input",{type:"text","onUpdate:modelValue":e[21]||(e[21]=c=>i.tempData.text=c)},null,512),[[Fe,i.tempData.text]]),f("button",{type:"button",class:"btn btn-primary",onClick:e[22]||(e[22]=c=>(r.confirm(),r.saveRank()))},[_(o,{icon:"fa-solid fa-floppy-disk"})])])):S("",!0)])):S("",!0)],2)])}const jS=Ge($3,[["render",$S],["__scopeId","data-v-4a638e05"]]),VS={mixins:[wt],data(){return{sec:20,timer:null,groupList:[],teamColor:["teamRed","teamGreen","teamBlue","teamPurple","teamOrange","teamCyan"],minusBtnDisplay:!1,delBtnDisplay:!1,setBtn:!1,play:!0,pause:!1,hand:D_,controlRouter:"",playMusic:!1}},methods:{playAudio(){this.$refs.audioRef&&(this.$refs.audioRef.play(),this.play=!1,this.pause=!0)},pauseAudio(){this.$refs.audioRef&&(this.$refs.audioRef.pause(),this.play=!0,this.pause=!1)},resetAudio(){this.$refs.audioRef&&(this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0,this.play=!0,this.pause=!1)},addGroup(){const t={id:new Date().getTime(),score:0};this.groupList.push(t)},plusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score+=1)})},minusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score-=1)})},removeData(t){this.groupList.forEach((e,n)=>{t.id==e.id&&this.groupList.splice(n,1)})},saveRank(){const t=this;t.updateData({groupList:t.groupList},"/charades/")},onReadData(){const t=this;Ut(Xe(Ze),e=>{console.log(e.val()),e.val().charades.groupList?t.groupList=e.val().charades.groupList:t.groupList=[],t.playMusic=e.val().charades.playMusic,t.remotePlay(),t.controlRouter=e.val().router.controlRouter;const s=t.$route.fullPath.split("/");t.controlRouter!=s[1]&&t.$router.push(t.controlRouter)})},remoteClickPlay(){const t=this;t.playMusic?(t.playMusic=!1,t.updateData({playMusic:t.playMusic},"/charades/"),t.resetAudio()):(t.playMusic=!0,t.updateData({playMusic:t.playMusic},"/charades/"),t.playAudio())},remotePlay(){const t=this;t.playMusic?t.playAudio():t.resetAudio()}},computed:{},watch:{},components:{RouterLink:ft},mounted(){Ct(this.$router)&&this.onReadData()}},HS=t=>(vt("data-v-ed17bccb"),t=t(),yt(),t),zS={class:"bg"},WS={class:"w-100"},GS={class:"vh-100 d-flex align-items-md-center"},qS={id:"groupScoreboard",class:"w-100"},KS={class:"container"},YS=HS(()=>f("div",{class:"teamTitle fs-3 text-center text-white py-1 mb-4"}," 比手畫腳 | 團隊分數 ",-1)),QS={class:"container w-50"},JS={class:"countDownArea d-flex justify-content-center align-items-center flex-column pb-2"},XS={class:"d-flex align-items-center flex-wrap flex-md-nowrap"},ZS=["src"],eR={id:"teamDisplay",class:"d-flex justify-content-center flex-column flex-md-row"},tR={class:"teamBg position-relative my-1"},nR={class:"teamBgChar"},sR={class:"teamScore position-absolute top-50 start-50 translate-middle"},iR=["onClick"],rR={style:{position:"absolute",left:"4px",bottom:"4px"}},oR=["onClick"],aR=["onClick"],lR={class:"container all-set-btns d-flex pt-2"},cR={type:"button",class:"btn btn-primary set-btn me-2"},uR={key:0,class:"setting-btns"};function fR(t,e,n,s,i,r){const o=pe("font-awesome-icon"),l=pe("RouterLink");return v(),y("div",null,[f("div",zS,[f("table",WS,[f("tbody",null,[f("tr",null,[f("td",GS,[f("div",qS,[f("div",KS,[YS,f("div",QS,[f("div",JS,[f("div",XS,[f("div",null,[f("audio",{src:i.hand,controls:"",loop:"",muted:"",ref:"audioRef"},null,8,ZS)]),i.play?(v(),y("button",{key:0,type:"button",class:"btn btn-primary mx-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[0]||(e[0]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-play"})])):S("",!0),i.pause?(v(),y("button",{key:1,type:"button",class:"btn btn-primary mx-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[1]||(e[1]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-rotate-right"})])):S("",!0)])])]),f("div",eR,[(v(!0),y(re,null,Pe(i.groupList,(a,c)=>(v(),y("div",{key:a.id,class:ae(["flex-fill",i.teamColor[c]])},[f("div",tR,[f("div",nR,j(String.fromCharCode(65+c)),1),f("div",sR,j(a.score),1),f("button",{type:"button",class:"btn btn-primary",style:{position:"absolute",right:"4px",bottom:"4px",background:"#f8b01e","border-radius":"100px",border:"unset"},onClick:u=>(r.plusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,iR),f("div",rR,[i.minusBtnDisplay?(v(),y("button",{key:0,type:"button",class:"btn btn-primary",onClick:u=>(r.minusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,oR)):S("",!0),i.delBtnDisplay?(v(),y("button",{key:1,type:"button",class:"btn btn-primary",onClick:u=>(r.removeData(a),r.saveRank())},[_(o,{icon:"fa-regular fa-trash-can"})],8,aR)):S("",!0)])])],2))),128))]),f("div",lR,[_(l,{to:"/"},{default:ce(()=>[f("button",cR,[_(o,{icon:"fa-solid fa-house"})])]),_:1}),f("button",{type:"button",class:"btn btn-primary set-btn",onClick:e[2]||(e[2]=a=>i.setBtn=!i.setBtn)},[_(o,{icon:"fa-solid fa-gear"})]),_(Yt,{name:"set-btn"},{default:ce(()=>[i.setBtn?(v(),y("div",uR,[f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[3]||(e[3]=a=>(r.addGroup(),r.saveRank()))},[_(o,{icon:"fa-solid fa-user-plus"})]),f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[4]||(e[4]=a=>i.minusBtnDisplay=!i.minusBtnDisplay)},[_(o,{icon:"fa-solid fa-minus"})]),f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[5]||(e[5]=a=>i.delBtnDisplay=!i.delBtnDisplay)},[_(o,{icon:"fa-regular fa-trash-can"})])])):S("",!0)]),_:1})])])])])])])])])])}const dR=Ge(VS,[["render",fR],["__scopeId","data-v-ed17bccb"]]),U_="/gamev2/assets/jump_music-CPtGKJ36.mp3",hR={mixins:[wt],data(){return{initSec:0,initSecTmp:0,sec:0,timer:null,groupList:[],teamColor:["teamRed","teamGreen","teamBlue","teamPurple","teamOrange","teamCyan"],minusBtnDisplay:!1,delBtnDisplay:!1,setBtn:!1,play:!0,pause:!1,topicArr:[{id:1,topic:"以下哪些東西會用到電",LAns:"會",RAns:"不會",quiz:["電話簿","電影院","電影票","電子郵件","電視櫃","電線桿","電池盒","電梯","電鍋","墊板","墊子","墊腳石","墊圈","奠基石","墊肩","墊腳","生氣","天然氣","空氣","霸氣","滅火器","節拍器","投鼠忌器","消音器","路由器","臭氣","放棄","拋棄","丟棄","電視","電冰箱","電話","電蚊拍","電腦","電動牙刷","電扇","電吉他","電暖氣","電磁爐","電烤箱","電動攪拌機","鹽水雞","遊戲機","跑步機","尖叫雞","洗衣機","奇跡","計算機","收音機","印表機","吸塵器","自動販賣機","冰淇淋機","放山雞","土雞","烏骨雞","飛機","咖啡機"]},{id:2,topic:"以下哪些事情會用到嘴巴",LAns:"會",RAns:"不會",quiz:["吹泡泡","吹口哨","吹奏","催狂魔","催淚彈","催化劑","吹氣球","捏氣球","炊煙","抽煙","抽獎","抽雪茄","抽大麻","抽簽","吃芋簽","刷馬桶","垃圾桶","吃飯","吃麵","癡情","癡漢","疊羅漢","18羅漢","吃炒飯","殺人飯","蝦仁飯","嫌疑犯","鹹魚飯","接吻","接龍","接電話","講電話","說髒話","說謊話","說好話","去彰化","畫畫","吐痰","兔寶寶","吐口水","忘情水","流鼻水","喝水","喝飲料","核廢料","唱歌","豬哥","諸葛亮","喝高粱","唱歌","暢所欲言","敞胸露背","悵然若失","合唱","唱片"]},{id:3,topic:"以下東西你會放進",LAns:"冰箱",RAns:"保險箱",quiz:["水煎包","紅包","鈔票","戒指","芥末","地契","地瓜","地瓜葉","土地權狀","土托魚羹","現金","黃金","黃瓜","珠寶","豬腳","豬血糕","金項鍊","金針菇"]},{id:4,topic:"以下詞彙的單位是",LAns:"一位一位",RAns:"一隻一隻",quiz:["公雞","宋仲基","豬公","相公","公雞","蜈蚣","醫生","服務生","考生","考雞","天鵝","企鵝","鴿子","兔子","白馬王子","新娘子","小狗","小姐","貴賓","貴賓狗"]}],currentTopic:0,jump_music:U_,controlRouter:"",playMusic:!1,isChangeTopics:!1,topic:"預設題目",leftText:"左題目",rightText:"右題目",topicTmp:"",leftTextTmp:"",rightTextTmp:""}},methods:{playAudio(){this.$refs.audioRef.play()},pauseAudio(){this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0},countDwn(){const t=this;t.sec-=1,t.sec>0&&(t.timer=setTimeout(t.countDwn,1e3)),t.play=!1,t.pause=!0,t.updateData({sec:t.sec},"/jump/")},secChange(){const t=this;Number(t.sec)===0&&(t.countPause(),t.resetAudio())},countPause(){clearTimeout(this.timer),this.play=!0,this.pause=!1},countReset(){const t=this;clearTimeout(t.timer),this.play=!0,this.pause=!1,t.updateData({sec:t.initSec},"/jump/")},addGroup(){const t={id:new Date().getTime(),score:0};this.groupList.push(t)},plusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score+=1)})},minusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score-=1)})},removeData(t){this.groupList.forEach((e,n)=>{t.id==e.id&&this.groupList.splice(n,1)})},saveRank(){const t=this;t.updateData({groupList:t.groupList,topic:t.topic,leftText:t.leftText,rightText:t.rightText,initSec:t.initSec},"/jump/")},playAudio(){this.$refs.audioRef&&(this.$refs.audioRef.play(),this.play=!1,this.pause=!0)},resetAudio(){this.$refs.audioRef&&(this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0,this.play=!0,this.pause=!1)},changeTopics(){const t=this;t.isChangeTopics=!0,t.topicTmp=t.topic,t.leftTextTmp=t.leftText,t.rightTextTmp=t.rightText,t.initSecTmp=t.initSec},confirmTopics(){const t=this;t.isChangeTopics=!1,t.topic=t.topicTmp,t.leftText=t.leftTextTmp,t.rightText=t.rightTextTmp,t.initSec=t.initSecTmp,t.saveRank()},onReadData(){const t=this;Ut(Xe(Ze),e=>{console.log(e.val()),e.val().jump.groupList?t.groupList=e.val().jump.groupList:t.groupList=[],t.sec=e.val().jump.sec,t.initSec=e.val().jump.initSec,t.topic=e.val().jump.topic,t.leftText=e.val().jump.leftText,t.rightText=e.val().jump.rightText,t.playMusic=e.val().jump.playMusic,t.remotePlay(),t.controlRouter=e.val().router.controlRouter;const s=t.$route.fullPath.split("/");t.controlRouter!=s[1]&&t.$router.push(t.controlRouter)})},remoteClickPlay(){const t=this;t.playMusic?(t.playMusic=!1,t.countPause(),t.resetAudio(),t.updateData({playMusic:t.playMusic,sec:t.sec},"/jump/")):(t.playMusic=!0,t.updateData({playMusic:t.playMusic,sec:t.sec},"/jump/"),t.countDwn(),t.playAudio())},resetAudioAndSec(){const t=this;t.countReset(),t.playMusic=!0,t.remoteClickPlay(),t.remotePlay()},remotePlay(){const t=this;t.playMusic?(t.playAudio(),t.secChange()):(t.countPause(),t.resetAudio())},defaultTopics(t){const e=this;e.topicArr.forEach(n=>{t===n.id&&(e.topicTmp=n.topic,e.leftTextTmp=n.LAns,e.rightTextTmp=n.RAns)})}},computed:{},watch:{},components:{RouterLink:ft},mounted(){Ct(this.$router)&&this.onReadData()}},pR=t=>(vt("data-v-61c69569"),t=t(),yt(),t),mR={class:"bg"},gR={id:"groupScoreboard",class:"w-100"},_R={class:"container"},vR={class:"countDownArea d-flex flex-wrap justify-content-center align-items-center pb-2 pt-3"},yR={id:"sec",class:"sec"},bR=["src"],wR={class:"d-flex justify-content-end align-items-center",style:{margin:"8px 2%"}},CR={class:"me-3"},kR={key:0},ER={key:1},TR={key:0,class:"d-flex flex-column container"},IR=["onClick"],xR={class:"topic-outer fs-3"},SR={class:"topic topic-bg d-flex align-items-center justify-content-center"},RR={key:0},AR={key:1},PR={class:"d-flex flex-row w-100"},NR={class:"center-line d-flex justify-content-center align-items-center py-3 w-100",style:{"font-size":"64px"}},DR={key:0},OR={key:1},LR={class:"d-flex justify-content-center align-items-center py-3 w-100",style:{"font-size":"64px"}},MR={key:0},FR={key:1},UR=pR(()=>f("div",{class:"teamTitle fs-3 text-center text-white py-1 mb-4"}," 跳跳 Tempo | 團隊分數 ",-1)),BR={id:"teamDisplay",class:"d-flex justify-content-center flex-column flex-md-row"},$R={class:"teamBg position-relative my-1"},jR={class:"teamBgChar"},VR={class:"teamScore position-absolute top-50 start-50 translate-middle"},HR=["onClick"],zR={style:{position:"absolute",left:"4px",bottom:"4px"}},WR=["onClick"],GR=["onClick"],qR={class:"container all-set-btns d-flex pt-2"},KR={type:"button",class:"btn btn-primary set-btn me-2"},YR={key:0,class:"setting-btns"};function QR(t,e,n,s,i,r){const o=pe("font-awesome-icon"),l=pe("RouterLink");return v(),y("div",null,[f("div",mR,[f("div",gR,[f("div",_R,[f("div",vR,[f("button",{type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px","border-radius":"100px","z-index":"999"},onClick:e[0]||(e[0]=a=>r.resetAudioAndSec())},[_(o,{icon:"fa-solid fa-rotate-right"})]),f("div",yR,j(i.sec),1),i.play?(v(),y("button",{key:0,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[1]||(e[1]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-play"})])):S("",!0),f("audio",{src:i.jump_music,controls:"",muted:"",ref:"audioRef",class:"d-none"},null,8,bR),i.pause?(v(),y("button",{key:1,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px"},onClick:e[2]||(e[2]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-pause"})])):S("",!0)]),f("div",wR,[f("div",CR,[i.isChangeTopics?(v(),y("div",kR,[de(f("input",{type:"number",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=a=>i.initSecTmp=a)},null,512),[[Fe,i.initSecTmp]])])):(v(),y("div",ER,"限時 "+j(i.initSec)+" 秒",1))]),f("div",null,[i.isChangeTopics?(v(),y("div",{key:1,class:"btn btn-primary",onClick:e[5]||(e[5]=(...a)=>r.confirmTopics&&r.confirmTopics(...a))},[_(o,{icon:"fa-solid fa-check"})])):(v(),y("div",{key:0,class:"btn btn-primary",onClick:e[4]||(e[4]=(...a)=>r.changeTopics&&r.changeTopics(...a))},[_(o,{icon:"fa-regular fa-pen-to-square"})]))])]),i.isChangeTopics?(v(),y("div",TR,[(v(!0),y(re,null,Pe(i.topicArr,(a,c)=>(v(),y("div",{class:"ms-2",key:c},[f("button",{type:"button",class:"btn btn-primary",onClick:u=>r.defaultTopics(a.id)}," 題組"+j(a.id),9,IR),f("div",null,[ne(" 題組"+j(a.id)+"題目列表： [",1),(v(!0),y(re,null,Pe(a.quiz,(u,d)=>(v(),y("span",{key:d},j(u)+"，",1))),128)),ne("] ")])]))),128))])):S("",!0),f("div",xR,[f("div",SR,[i.isChangeTopics?(v(),y("div",RR,[de(f("input",{type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=a=>i.topicTmp=a)},null,512),[[Fe,i.topicTmp]])])):(v(),y("div",AR,j(i.topic),1))])]),f("div",PR,[f("div",NR,[i.isChangeTopics?(v(),y("div",DR,[de(f("input",{type:"text",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=a=>i.leftTextTmp=a)},null,512),[[Fe,i.leftTextTmp]])])):(v(),y("div",OR,j(i.leftText),1))]),f("div",LR,[i.isChangeTopics?(v(),y("div",MR,[de(f("input",{type:"text",class:"form-control","onUpdate:modelValue":e[8]||(e[8]=a=>i.rightTextTmp=a)},null,512),[[Fe,i.rightTextTmp]])])):(v(),y("div",FR,j(i.rightText),1))])]),UR,f("div",BR,[(v(!0),y(re,null,Pe(i.groupList,(a,c)=>(v(),y("div",{key:a.id,class:ae(["flex-fill",i.teamColor[c]])},[f("div",$R,[f("div",jR,j(String.fromCharCode(65+c)),1),f("div",VR,j(a.score),1),f("button",{type:"button",class:"btn btn-primary",style:{position:"absolute",right:"4px",bottom:"4px",background:"#f8b01e","border-radius":"100px",border:"unset"},onClick:u=>(r.plusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,HR),f("div",zR,[i.minusBtnDisplay?(v(),y("button",{key:0,type:"button",class:"btn btn-primary",onClick:u=>(r.minusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,WR)):S("",!0),i.delBtnDisplay?(v(),y("button",{key:1,type:"button",class:"btn btn-primary",onClick:u=>(r.removeData(a),r.saveRank())},[_(o,{icon:"fa-regular fa-trash-can"})],8,GR)):S("",!0)])])],2))),128))]),f("div",qR,[_(l,{to:"/"},{default:ce(()=>[f("button",KR,[_(o,{icon:"fa-solid fa-house"})])]),_:1}),f("button",{type:"button",class:"btn btn-primary set-btn",onClick:e[9]||(e[9]=a=>i.setBtn=!i.setBtn)},[_(o,{icon:"fa-solid fa-gear"})]),_(Yt,{name:"set-btn"},{default:ce(()=>[i.setBtn?(v(),y("div",YR,[f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[10]||(e[10]=a=>(r.addGroup(),r.saveRank()))},[_(o,{icon:"fa-solid fa-user-plus"})]),f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[11]||(e[11]=a=>i.minusBtnDisplay=!i.minusBtnDisplay)},[_(o,{icon:"fa-solid fa-minus"})]),f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[12]||(e[12]=a=>i.delBtnDisplay=!i.delBtnDisplay)},[_(o,{icon:"fa-regular fa-trash-can"})])])):S("",!0)]),_:1})])])])])])}const JR=Ge(hR,[["render",QR],["__scopeId","data-v-61c69569"]]),XR={mixins:[wt],data(){return{timer:null,groupList:[],teamColor:["teamRed","teamGreen","teamBlue","teamPurple","teamOrange","teamCyan"],minusBtnDisplay:!1,delBtnDisplay:!1,setBtn:!1,play:!0,pause:!1,topicArr:[],topicArrTmp:"",currentTopic:0,norepeatArr:[],ready:!0,tempo_words_in_a_hurry:O_,controlRouter:"",playMusic:!1,isChangeTopics:!1}},methods:{playAudio(){this.$refs.audioRef.play()},pauseAudio(){this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0},countPause(){clearTimeout(this.timer),this.play=!0,this.pause=!1},addGroup(){const t={id:new Date().getTime(),score:0};this.groupList.push(t)},plusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score+=1)})},minusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score-=1)})},removeData(t){this.groupList.forEach((e,n)=>{t.id==e.id&&this.groupList.splice(n,1)})},saveRank(){const t=this;t.updateData({groupList:t.groupList,topicArr:t.topicArr},"/selftalk/")},playAudio(){this.$refs.audioRef&&(this.$refs.audioRef.play(),this.play=!1,this.pause=!0)},resetAudio(){this.$refs.audioRef&&(this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0,this.play=!0,this.pause=!1)},changeTopics(){const t=this;t.isChangeTopics=!0,t.topicArrTmp=t.topicArr.join(",")},confirmTopics(){const t=this;t.isChangeTopics=!1;const e=t.topicArrTmp.replace(/，/g,",").replace(/\n/g,"");t.topicArr=e.split(",").map(n=>n.trim()),t.saveRank()},nextTopic(){const t=this;if(t.norepeatArr.length===t.topicArr.length){alert("所有主題都已經被抽取過了！");return}let e;do e=Math.floor(Math.random()*t.topicArr.length);while(t.norepeatArr.includes(e));t.norepeatArr.push(e),t.currentTopic=e,t.ready=!1,t.updateData({norepeatArr:t.norepeatArr,ready:t.ready,currentTopic:t.currentTopic},"/selftalk/")},resetTopic(){if(confirm("確定要全部重設嗎？")){const e=this;e.currentTopic=0,e.norepeatArr=[0],e.ready=!0,e.updateData({norepeatArr:e.norepeatArr,ready:e.ready,currentTopic:e.currentTopic},"/selftalk/")}},restartTopic(){const t=this;t.currentTopic=0,t.ready=!0,t.updateData({ready:t.ready,currentTopic:t.currentTopic},"/selftalk/")},onReadData(){const t=this;Ut(Xe(Ze),e=>{console.log(e.val()),e.val().selftalk.groupList?t.groupList=e.val().selftalk.groupList:t.groupList=[],t.topicArr=e.val().selftalk.topicArr,t.norepeatArr=e.val().selftalk.norepeatArr,t.ready=e.val().selftalk.ready,t.currentTopic=e.val().selftalk.currentTopic,t.playMusic=e.val().selftalk.playMusic,t.remotePlay(),t.controlRouter=e.val().router.controlRouter;const s=t.$route.fullPath.split("/");t.controlRouter!=s[1]&&t.$router.push(t.controlRouter)})},remoteClickPlay(){const t=this;t.playMusic?(t.playMusic=!1,t.countPause(),t.resetAudio(),t.updateData({playMusic:t.playMusic},"/selftalk/")):(t.playMusic=!0,t.updateData({playMusic:t.playMusic},"/selftalk/"),t.playAudio())},remotePlay(){const t=this;t.playMusic?t.playAudio():t.resetAudio()}},computed:{},watch:{},components:{RouterLink:ft},mounted(){Ct(this.$router)&&this.onReadData()}},ZR=t=>(vt("data-v-8742f48a"),t=t(),yt(),t),eA={class:"bg"},tA={id:"groupScoreboard",class:"w-100"},nA={class:"container pt-4"},sA=ZR(()=>f("div",{class:"teamTitle fs-3 text-center text-white py-1 mb-4"}," 自說字話 ",-1)),iA={class:"d-flex justify-content-between align-items-center",style:{margin:"8px 2%"}},rA={class:"me-3"},oA={key:0},aA={class:"topic-outer"},lA={class:"topic topic-bg d-flex align-items-center justify-content-center"},cA={class:"py-3"},uA={class:"countDownArea d-flex flex-wrap justify-content-center align-items-center pb-2"},fA=["src"],dA={id:"teamDisplay",class:"d-none d-flex justify-content-center flex-column flex-md-row"},hA={class:"teamBg position-relative my-1"},pA={class:"teamScore position-absolute top-50 start-50 translate-middle"},mA=["onClick"],gA={style:{position:"absolute",left:"4px",bottom:"4px"}},_A=["onClick"],vA=["onClick"],yA={class:"container all-set-btns d-flex pt-2"},bA={type:"button",class:"btn btn-primary set-btn me-2"},wA={key:0,class:"setting-btns d-flex align-items-center"};function CA(t,e,n,s,i,r){const o=pe("font-awesome-icon"),l=pe("RouterLink");return v(),y("div",null,[f("div",eA,[f("div",tA,[f("div",nA,[sA,f("div",iA,[f("div",rA,[i.isChangeTopics?(v(),y("div",oA,[de(f("textarea",{class:"form-control w-100","onUpdate:modelValue":e[0]||(e[0]=a=>i.topicArrTmp=a)},null,512),[[Fe,i.topicArrTmp]])])):S("",!0)]),f("div",null,[i.isChangeTopics?(v(),y("div",{key:1,class:"btn btn-primary",onClick:e[2]||(e[2]=(...a)=>r.confirmTopics&&r.confirmTopics(...a))},[_(o,{icon:"fa-solid fa-check"})])):(v(),y("div",{key:0,class:"btn btn-primary",onClick:e[1]||(e[1]=(...a)=>r.changeTopics&&r.changeTopics(...a))},[_(o,{icon:"fa-regular fa-pen-to-square"})]))])]),f("div",aA,[f("div",lA,[f("div",null,j(i.topicArr[i.currentTopic]),1)]),f("div",cA,[f("div",{class:"btn btn-primary m-2",onClick:e[3]||(e[3]=(...a)=>r.resetTopic&&r.resetTopic(...a))}," 全部重設 "),f("div",{class:"btn btn-primary m-2",onClick:e[4]||(e[4]=(...a)=>r.restartTopic&&r.restartTopic(...a))}," 回到預備詞 "),f("div",{class:"btn btn-primary m-2",onClick:e[5]||(e[5]=(...a)=>r.nextTopic&&r.nextTopic(...a))},"下一題")])]),f("div",uA,[f("button",{type:"button",class:"btn btn-primary",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[6]||(e[6]=a=>r.pauseAudio())},[_(o,{icon:"fa-solid fa-arrow-rotate-left"})]),i.play?(v(),y("button",{key:0,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[7]||(e[7]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-play"})])):S("",!0),f("audio",{src:i.tempo_words_in_a_hurry,controls:"",muted:"",ref:"audioRef",class:"d-none"},null,8,fA),i.pause?(v(),y("button",{key:1,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px"},onClick:e[8]||(e[8]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-pause"})])):S("",!0)]),f("div",dA,[(v(!0),y(re,null,Pe(i.groupList,(a,c)=>(v(),y("div",{key:a.id,class:ae(["flex-fill",i.teamColor[c]])},[f("div",hA,[f("div",pA,j(a.score),1),f("button",{type:"button",class:"btn btn-primary",style:{position:"absolute",right:"4px",bottom:"4px",background:"#f8b01e","border-radius":"100px",border:"unset"},onClick:u=>(r.plusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,mA),f("div",gA,[i.minusBtnDisplay?(v(),y("button",{key:0,type:"button",class:"btn btn-primary",onClick:u=>(r.minusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,_A)):S("",!0),i.delBtnDisplay?(v(),y("button",{key:1,type:"button",class:"btn btn-primary",onClick:u=>(r.removeData(a),r.saveRank())},[_(o,{icon:"fa-regular fa-trash-can"})],8,vA)):S("",!0)])])],2))),128))]),f("div",yA,[_(l,{to:"/"},{default:ce(()=>[f("button",bA,[_(o,{icon:"fa-solid fa-house"})])]),_:1}),f("button",{type:"button",class:"btn btn-primary set-btn",onClick:e[9]||(e[9]=a=>i.setBtn=!i.setBtn)},[_(o,{icon:"fa-solid fa-gear"})]),_(Yt,{name:"set-btn"},{default:ce(()=>{var a,c;return[i.setBtn?(v(),y("div",wA,[f("div",null," 已抽過題目數 "+j(((a=i.norepeatArr)==null?void 0:a.length)-1)+" / 總題數 "+j(((c=i.topicArr)==null?void 0:c.length)-1),1)])):S("",!0)]}),_:1})])])])])])}const kA=Ge(XR,[["render",CA],["__scopeId","data-v-8742f48a"]]),EA="/gamev2/assets/sound54321-DGTB0ymp.mp3",TA="/gamev2/assets/timeup-Dms7nx5T.mp3",IA={mixins:[wt],props:["musicAllDisplay"],data(){return{initSec:0,initSecTmp:0,sec:0,timer:null,groupList:[],teamColor:["teamRed","teamGreen","teamBlue","teamPurple","teamOrange","teamCyan"],minusBtnDisplay:!1,delBtnDisplay:!1,setBtn:!1,play:!0,pause:!1,topicArr:[{id:1,topic:"以下哪些東西會用到電",LAns:"會",RAns:"不會",quiz:["電話簿","電影院","電影票","電子郵件","電視櫃","電線桿","電池盒","電梯","電鍋","墊板","墊子","墊腳石","墊圈","奠基石","墊肩","墊腳","生氣","天然氣","空氣","霸氣","滅火器","節拍器","投鼠忌器","消音器","路由器","臭氣","放棄","拋棄","丟棄","電視","電冰箱","電話","電蚊拍","電腦","電動牙刷","電扇","電吉他","電暖氣","電磁爐","電烤箱","電動攪拌機","鹽水雞","遊戲機","跑步機","尖叫雞","洗衣機","奇跡","計算機","收音機","印表機","吸塵器","自動販賣機","冰淇淋機","放山雞","土雞","烏骨雞","飛機","咖啡機"]},{id:2,topic:"以下哪些事情會用到嘴巴",LAns:"會",RAns:"不會",quiz:["吹泡泡","吹口哨","吹奏","催狂魔","催淚彈","催化劑","吹氣球","捏氣球","炊煙","抽煙","抽獎","抽雪茄","抽大麻","抽簽","吃芋簽","刷馬桶","垃圾桶","吃飯","吃麵","癡情","癡漢","疊羅漢","18羅漢","吃炒飯","殺人飯","蝦仁飯","嫌疑犯","鹹魚飯","接吻","接龍","接電話","講電話","說髒話","說謊話","說好話","去彰化","畫畫","吐痰","兔寶寶","吐口水","忘情水","流鼻水","喝水","喝飲料","核廢料","唱歌","豬哥","諸葛亮","喝高粱","唱歌","暢所欲言","敞胸露背","悵然若失","合唱","唱片"]},{id:3,topic:"以下東西你會放進",LAns:"冰箱",RAns:"保險箱",quiz:["水煎包","紅包","鈔票","戒指","芥末","地契","地瓜","地瓜葉","土地權狀","土托魚羹","現金","黃金","黃瓜","珠寶","豬腳","豬血糕","金項鍊","金針菇"]},{id:4,topic:"以下詞彙的單位是",LAns:"一位一位",RAns:"一隻一隻",quiz:["公雞","宋仲基","豬公","相公","公雞","蜈蚣","醫生","服務生","考生","考雞","天鵝","企鵝","鴿子","兔子","白馬王子","新娘子","小狗","小姐","貴賓","貴賓狗"]}],currentTopic:0,jump_music:U_,sound54321:EA,timeup:TA,controlRouter:"",playMusic:!1,isChangeTopics:!1,topic:"預設題目",leftText:"左題目",rightText:"右題目",topicTmp:"",leftTextTmp:"",rightTextTmp:""}},methods:{triggerFadeIn(t){this.$emit("fadeInAudio",t)},triggerFadeOut(t){this.$emit("fadeOutAudio",t)},playAudio(){this.$refs.audioRef.play()},pauseAudio(){this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0},countDwn(){const t=this;t.sec-=1,t.sec>0&&(t.timer=setTimeout(t.countDwn,1e3)),t.play=!1,t.pause=!0,t.updateData({sec:t.sec},"/jump/")},secChange(){const t=this;Number(t.sec)<=5&&Number(t.sec)>0&&(t.$refs.refSound54321Audio.currentTime=0,t.$refs.refSound54321Audio.play()),Number(t.sec)===0&&(t.$refs.refTimeupAudio.currentTime=0,t.$refs.refTimeupAudio.play(),t.playMusic=!1,t.countPause(),t.resetAudio(),t.updateData({playMusic:t.playMusic,sec:t.sec},"/jump/"))},countPause(){clearTimeout(this.timer),this.play=!0,this.pause=!1},countReset(){const t=this;clearTimeout(t.timer),this.play=!0,this.pause=!1,t.updateData({sec:t.initSec},"/jump/")},addGroup(){const t={id:new Date().getTime(),score:0};this.groupList.push(t)},plusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score+=1)})},minusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score-=1)})},removeData(t){this.groupList.forEach((e,n)=>{t.id==e.id&&this.groupList.splice(n,1)})},saveRank(){const t=this;t.updateData({groupList:t.groupList,topic:t.topic,leftText:t.leftText,rightText:t.rightText,initSec:t.initSec},"/jump/")},playAudio(){this.$refs.audioRef&&(this.$refs.audioRef.play(),this.play=!1,this.pause=!0)},resetAudio(){this.$refs.audioRef&&(this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0,this.play=!0,this.pause=!1)},changeTopics(){const t=this;t.isChangeTopics=!0,t.topicTmp=t.topic,t.leftTextTmp=t.leftText,t.rightTextTmp=t.rightText,t.initSecTmp=t.initSec},confirmTopics(){const t=this;t.isChangeTopics=!1,t.topic=t.topicTmp,t.leftText=t.leftTextTmp,t.rightText=t.rightTextTmp,t.initSec=t.initSecTmp,t.saveRank()},onReadData(){const t=this;Ut(Xe(Ze),e=>{console.log(e.val()),e.val().jump.groupList?t.groupList=e.val().jump.groupList:t.groupList=[],t.sec=e.val().jump.sec,t.initSec=e.val().jump.initSec,t.topic=e.val().jump.topic,t.leftText=e.val().jump.leftText,t.rightText=e.val().jump.rightText,t.playMusic=e.val().jump.playMusic,t.remotePlay(),t.controlRouter=e.val().router.controlRouter;const s=t.$route.fullPath.split("/");t.controlRouter!=s[1]&&t.$router.push(t.controlRouter)})},remoteClickPlay(){const t=this;t.playMusic?(t.playMusic=!1,t.countPause(),t.resetAudio(),t.updateData({playMusic:t.playMusic,sec:t.sec},"/jump/")):(t.playMusic=!0,t.updateData({playMusic:t.playMusic,sec:t.sec},"/jump/"),t.countDwn(),t.playAudio())},resetAudioAndSec(){const t=this;t.countReset(),t.playMusic=!0,t.remoteClickPlay(),t.remotePlay()},remotePlay(){const t=this;t.playMusic?(t.playAudio(),t.secChange()):(t.countPause(),t.resetAudio())},defaultTopics(t){const e=this;e.topicArr.forEach(n=>{t===n.id&&(e.topicTmp=n.topic,e.leftTextTmp=n.LAns,e.rightTextTmp=n.RAns)})}},computed:{},watch:{},components:{RouterLink:ft},mounted(){Ct(this.$router)&&(this.onReadData(),this.triggerFadeOut("refMusic1Audio"))}},xA=t=>(vt("data-v-ad27685e"),t=t(),yt(),t),SA={class:"bg"},RA={id:"groupScoreboard",class:"w-100"},AA={class:"container"},PA={class:"countDownArea d-flex flex-wrap justify-content-center align-items-center pb-2"},NA={id:"sec",class:"sec"},DA={class:"d-flex justify-content-end align-items-center",style:{margin:"8px 2%"}},OA={class:"me-3"},LA={key:0},MA={key:1},FA={key:0,class:"d-flex flex-column container"},UA=["onClick"],BA={class:"topic-outer fs-3"},$A={class:"topic topic-bg d-flex align-items-center justify-content-center"},jA={key:0},VA={key:1},HA={class:"d-flex flex-row w-100"},zA={class:"center-line d-flex justify-content-center align-items-center py-3 w-100",style:{"font-size":"64px"}},WA={key:0},GA={key:1},qA={class:"d-flex justify-content-center align-items-center py-3 w-100",style:{"font-size":"64px"}},KA={key:0},YA={key:1},QA=xA(()=>f("div",{class:"teamTitle fs-3 text-center text-white py-1 mb-4"}," 跳跳 Tempo | 團隊分數 ",-1)),JA={id:"teamDisplay",class:"d-flex justify-content-center flex-column flex-md-row"},XA={class:"teamBg position-relative my-1"},ZA={class:"teamBgChar"},eP={class:"teamScore position-absolute top-50 start-50 translate-middle"},tP=["onClick"],nP={style:{position:"absolute",left:"4px",bottom:"4px"}},sP=["onClick"],iP=["onClick"],rP={class:"container all-set-btns d-flex pt-2"},oP={type:"button",class:"btn btn-primary set-btn me-2"},aP={key:0,class:"setting-btns"},lP=["src"],cP={ref:"refSound54321Audio",controls:""},uP=["src"],fP={ref:"refTimeupAudio",controls:""},dP=["src"];function hP(t,e,n,s,i,r){const o=pe("font-awesome-icon"),l=pe("RouterLink");return v(),y(re,null,[f("div",null,[f("div",SA,[f("div",RA,[f("div",AA,[f("div",PA,[f("button",{type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px","border-radius":"100px","z-index":"999"},onClick:e[0]||(e[0]=a=>r.resetAudioAndSec())},[_(o,{icon:"fa-solid fa-rotate-right"})]),f("div",NA,j(i.sec),1),i.play?(v(),y("button",{key:0,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[1]||(e[1]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-play"})])):S("",!0),i.pause?(v(),y("button",{key:1,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px"},onClick:e[2]||(e[2]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-pause"})])):S("",!0)]),f("div",DA,[f("div",OA,[i.isChangeTopics?(v(),y("div",LA,[de(f("input",{type:"number",class:"form-control","onUpdate:modelValue":e[3]||(e[3]=a=>i.initSecTmp=a)},null,512),[[Fe,i.initSecTmp]])])):(v(),y("div",MA,"限時 "+j(i.initSec)+" 秒",1))]),f("div",null,[i.isChangeTopics?(v(),y("div",{key:1,class:"btn btn-primary",onClick:e[5]||(e[5]=(...a)=>r.confirmTopics&&r.confirmTopics(...a))},[_(o,{icon:"fa-solid fa-check"})])):(v(),y("div",{key:0,class:"btn btn-primary",onClick:e[4]||(e[4]=(...a)=>r.changeTopics&&r.changeTopics(...a))},[_(o,{icon:"fa-regular fa-pen-to-square"})]))])]),i.isChangeTopics?(v(),y("div",FA,[(v(!0),y(re,null,Pe(i.topicArr,(a,c)=>(v(),y("div",{class:"ms-2",key:c},[f("button",{type:"button",class:"btn btn-primary",onClick:u=>r.defaultTopics(a.id)}," 題組"+j(a.id),9,UA),f("div",null,[ne(" 題組"+j(a.id)+"題目列表： [",1),(v(!0),y(re,null,Pe(a.quiz,(u,d)=>(v(),y("span",{key:d},j(u)+"，",1))),128)),ne("] ")])]))),128))])):S("",!0),f("div",BA,[f("div",$A,[i.isChangeTopics?(v(),y("div",jA,[de(f("input",{type:"text",class:"form-control","onUpdate:modelValue":e[6]||(e[6]=a=>i.topicTmp=a)},null,512),[[Fe,i.topicTmp]])])):(v(),y("div",VA,j(i.topic),1))])]),f("div",HA,[f("div",zA,[i.isChangeTopics?(v(),y("div",WA,[de(f("input",{type:"text",class:"form-control","onUpdate:modelValue":e[7]||(e[7]=a=>i.leftTextTmp=a)},null,512),[[Fe,i.leftTextTmp]])])):(v(),y("div",GA,j(i.leftText),1))]),f("div",qA,[i.isChangeTopics?(v(),y("div",KA,[de(f("input",{type:"text",class:"form-control","onUpdate:modelValue":e[8]||(e[8]=a=>i.rightTextTmp=a)},null,512),[[Fe,i.rightTextTmp]])])):(v(),y("div",YA,j(i.rightText),1))])]),QA,f("div",JA,[(v(!0),y(re,null,Pe(i.groupList,(a,c)=>(v(),y("div",{key:a.id,class:ae(["flex-fill",i.teamColor[c]])},[f("div",XA,[f("div",ZA,j(String.fromCharCode(65+c)),1),f("div",eP,j(a.score),1),f("button",{type:"button",class:"btn btn-primary",style:{position:"absolute",right:"4px",bottom:"4px",background:"#f8b01e","border-radius":"100px",border:"unset"},onClick:u=>(r.plusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,tP),f("div",nP,[i.minusBtnDisplay?(v(),y("button",{key:0,type:"button",class:"btn btn-primary",onClick:u=>(r.minusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,sP)):S("",!0),i.delBtnDisplay?(v(),y("button",{key:1,type:"button",class:"btn btn-primary",onClick:u=>(r.removeData(a),r.saveRank())},[_(o,{icon:"fa-regular fa-trash-can"})],8,iP)):S("",!0)])])],2))),128))]),f("div",rP,[_(l,{to:"/"},{default:ce(()=>[f("button",oP,[_(o,{icon:"fa-solid fa-house"})])]),_:1}),f("button",{type:"button",class:"btn btn-primary set-btn",onClick:e[9]||(e[9]=a=>i.setBtn=!i.setBtn)},[_(o,{icon:"fa-solid fa-gear"})]),_(Yt,{name:"set-btn"},{default:ce(()=>[i.setBtn?(v(),y("div",aP,[f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[10]||(e[10]=a=>(r.addGroup(),r.saveRank()))},[_(o,{icon:"fa-solid fa-user-plus"})]),f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[11]||(e[11]=a=>i.minusBtnDisplay=!i.minusBtnDisplay)},[_(o,{icon:"fa-solid fa-minus"})]),f("button",{type:"button",class:"btn btn-primary ms-2",onClick:e[12]||(e[12]=a=>i.delBtnDisplay=!i.delBtnDisplay)},[_(o,{icon:"fa-regular fa-trash-can"})])])):S("",!0)]),_:1})])])])])]),de(f("div",null,[ne(" 遊戲音樂： "),f("audio",{src:i.jump_music,controls:"",loop:"",ref:"audioRef"},null,8,lP),ne(" 倒數音效： "),f("audio",cP,[f("source",{src:i.sound54321,type:"audio/mpeg"},null,8,uP),ne(" Your browser does not support the audio element. ")],512),f("audio",fP,[f("source",{src:i.timeup,type:"audio/mpeg"},null,8,dP),ne(" Your browser does not support the audio element. ")],512)],512),[[gs,n.musicAllDisplay]])],64)}const pP=Ge(IA,[["render",hP],["__scopeId","data-v-ad27685e"]]),mP="/gamev2/assets/selftalk-Dsdxcvw0.mp3",gP={mixins:[wt],data(){return{timer:null,groupList:[],teamColor:["teamRed","teamGreen","teamBlue","teamPurple","teamOrange","teamCyan"],minusBtnDisplay:!1,delBtnDisplay:!1,setBtn:!1,play:!0,pause:!1,topicArr:[],topicArrTmp:"",currentTopic:0,norepeatArr:[],ready:!0,selftalk:mP,controlRouter:"",playMusic:!1,isChangeTopics:!1}},methods:{triggerFadeIn(t){this.$emit("fadeInAudio",t)},triggerFadeOut(t){this.$emit("fadeOutAudio",t)},playAudio(){this.$refs.audioRef.play()},pauseAudio(){this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0},countPause(){clearTimeout(this.timer),this.play=!0,this.pause=!1},addGroup(){const t={id:new Date().getTime(),score:0};this.groupList.push(t)},plusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score+=1)})},minusNum(t){this.groupList.forEach((e,n)=>{t.id==e.id&&(this.groupList[n].score-=1)})},removeData(t){this.groupList.forEach((e,n)=>{t.id==e.id&&this.groupList.splice(n,1)})},saveRank(){const t=this;t.updateData({groupList:t.groupList,topicArr:t.topicArr},"/selftalk/")},playAudio(){this.$refs.audioRef&&(this.$refs.audioRef.play(),this.play=!1,this.pause=!0)},resetAudio(){this.$refs.audioRef&&(this.$refs.audioRef.pause(),this.$refs.audioRef.currentTime=0,this.play=!0,this.pause=!1)},changeTopics(){const t=this;t.isChangeTopics=!0,t.topicArrTmp=t.topicArr.join(",")},confirmTopics(){const t=this;t.isChangeTopics=!1;const e=t.topicArrTmp.replace(/，/g,",").replace(/\n/g,"");t.topicArr=e.split(",").map(n=>n.trim()),t.saveRank()},nextTopic(){const t=this;if(t.norepeatArr.length===t.topicArr.length){alert("所有主題都已經被抽取過了！");return}let e;do e=Math.floor(Math.random()*t.topicArr.length);while(t.norepeatArr.includes(e));t.norepeatArr.push(e),t.currentTopic=e,t.ready=!1,t.updateData({norepeatArr:t.norepeatArr,ready:t.ready,currentTopic:t.currentTopic},"/selftalk/")},resetTopic(){if(confirm("確定要全部重設嗎？")){const e=this;e.currentTopic=0,e.norepeatArr=[0],e.ready=!0,e.updateData({norepeatArr:e.norepeatArr,ready:e.ready,currentTopic:e.currentTopic},"/selftalk/")}},restartTopic(){const t=this;t.currentTopic=0,t.ready=!0,t.updateData({ready:t.ready,currentTopic:t.currentTopic},"/selftalk/")},onReadData(){const t=this;Ut(Xe(Ze),e=>{console.log(e.val()),e.val().selftalk.groupList?t.groupList=e.val().selftalk.groupList:t.groupList=[],t.topicArr=e.val().selftalk.topicArr,t.norepeatArr=e.val().selftalk.norepeatArr,t.ready=e.val().selftalk.ready,t.currentTopic=e.val().selftalk.currentTopic,t.playMusic=e.val().selftalk.playMusic,t.remotePlay(),t.controlRouter=e.val().router.controlRouter;const s=t.$route.fullPath.split("/");t.controlRouter!=s[1]&&t.$router.push(t.controlRouter)})},remoteClickPlay(){const t=this;t.playMusic?(t.playMusic=!1,t.countPause(),t.resetAudio(),t.updateData({playMusic:t.playMusic},"/selftalk/")):(t.playMusic=!0,t.updateData({playMusic:t.playMusic},"/selftalk/"),t.playAudio())},remotePlay(){const t=this;t.playMusic?t.playAudio():t.resetAudio()}},computed:{},watch:{},components:{RouterLink:ft},mounted(){Ct(this.$router)&&(this.onReadData(),this.triggerFadeOut("refMusic1Audio"))}},_P=t=>(vt("data-v-1518b33c"),t=t(),yt(),t),vP={class:"bg"},yP={id:"groupScoreboard",class:"w-100"},bP={class:"container pt-4"},wP=_P(()=>f("div",{class:"teamTitle fs-3 text-center text-white py-1 mb-4"}," 自說字話 ",-1)),CP={class:"d-flex justify-content-between align-items-center",style:{margin:"8px 2%"}},kP={class:"me-3"},EP={key:0},TP={class:"topic-outer"},IP={class:"topic topic-bg d-flex align-items-center justify-content-center"},xP={class:"py-3"},SP={class:"countDownArea d-flex flex-wrap justify-content-center align-items-center pb-2"},RP=["src"],AP={id:"teamDisplay",class:"d-none d-flex justify-content-center flex-column flex-md-row"},PP={class:"teamBg position-relative my-1"},NP={class:"teamScore position-absolute top-50 start-50 translate-middle"},DP=["onClick"],OP={style:{position:"absolute",left:"4px",bottom:"4px"}},LP=["onClick"],MP=["onClick"],FP={class:"container all-set-btns d-flex pt-2"},UP={type:"button",class:"btn btn-primary set-btn me-2"},BP={key:0,class:"setting-btns d-flex align-items-center"};function $P(t,e,n,s,i,r){const o=pe("font-awesome-icon"),l=pe("RouterLink");return v(),y("div",null,[f("div",vP,[f("div",yP,[f("div",bP,[wP,f("div",CP,[f("div",kP,[i.isChangeTopics?(v(),y("div",EP,[de(f("textarea",{class:"form-control w-100","onUpdate:modelValue":e[0]||(e[0]=a=>i.topicArrTmp=a)},null,512),[[Fe,i.topicArrTmp]])])):S("",!0)]),f("div",null,[i.isChangeTopics?(v(),y("div",{key:1,class:"btn btn-primary",onClick:e[2]||(e[2]=(...a)=>r.confirmTopics&&r.confirmTopics(...a))},[_(o,{icon:"fa-solid fa-check"})])):(v(),y("div",{key:0,class:"btn btn-primary",onClick:e[1]||(e[1]=(...a)=>r.changeTopics&&r.changeTopics(...a))},[_(o,{icon:"fa-regular fa-pen-to-square"})]))])]),f("div",TP,[f("div",IP,[f("div",null,j(i.topicArr[i.currentTopic]),1)]),f("div",xP,[f("div",{class:"btn btn-primary m-2",onClick:e[3]||(e[3]=(...a)=>r.resetTopic&&r.resetTopic(...a))}," 全部重設 "),f("div",{class:"btn btn-primary m-2",onClick:e[4]||(e[4]=(...a)=>r.restartTopic&&r.restartTopic(...a))}," 回到預備詞 "),f("div",{class:"btn btn-primary m-2",onClick:e[5]||(e[5]=(...a)=>r.nextTopic&&r.nextTopic(...a))},"下一題")])]),f("div",SP,[f("button",{type:"button",class:"btn btn-primary",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[6]||(e[6]=a=>r.pauseAudio())},[_(o,{icon:"fa-solid fa-arrow-rotate-left"})]),i.play?(v(),y("button",{key:0,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px","border-radius":"100px"},onClick:e[7]||(e[7]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-play"})])):S("",!0),f("audio",{src:i.selftalk,controls:"",ref:"audioRef",class:"d-none"},null,8,RP),i.pause?(v(),y("button",{key:1,type:"button",class:"btn btn-primary ms-3",style:{width:"50px",height:"50px"},onClick:e[8]||(e[8]=(...a)=>r.remoteClickPlay&&r.remoteClickPlay(...a))},[_(o,{icon:"fa-solid fa-pause"})])):S("",!0)]),f("div",AP,[(v(!0),y(re,null,Pe(i.groupList,(a,c)=>(v(),y("div",{key:a.id,class:ae(["flex-fill",i.teamColor[c]])},[f("div",PP,[f("div",NP,j(a.score),1),f("button",{type:"button",class:"btn btn-primary",style:{position:"absolute",right:"4px",bottom:"4px",background:"#f8b01e","border-radius":"100px",border:"unset"},onClick:u=>(r.plusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-plus"})],8,DP),f("div",OP,[i.minusBtnDisplay?(v(),y("button",{key:0,type:"button",class:"btn btn-primary",onClick:u=>(r.minusNum(a),r.saveRank())},[_(o,{icon:"fa-solid fa-minus"})],8,LP)):S("",!0),i.delBtnDisplay?(v(),y("button",{key:1,type:"button",class:"btn btn-primary",onClick:u=>(r.removeData(a),r.saveRank())},[_(o,{icon:"fa-regular fa-trash-can"})],8,MP)):S("",!0)])])],2))),128))]),f("div",FP,[_(l,{to:"/"},{default:ce(()=>[f("button",UP,[_(o,{icon:"fa-solid fa-house"})])]),_:1}),f("button",{type:"button",class:"btn btn-primary set-btn",onClick:e[9]||(e[9]=a=>i.setBtn=!i.setBtn)},[_(o,{icon:"fa-solid fa-gear"})]),_(Yt,{name:"set-btn"},{default:ce(()=>{var a,c;return[i.setBtn?(v(),y("div",BP,[f("div",null," 已抽過題目數 "+j(((a=i.norepeatArr)==null?void 0:a.length)-1)+" / 總題數 "+j(((c=i.topicArr)==null?void 0:c.length)-1),1)])):S("",!0)]}),_:1})])])])])])}const jP=Ge(gP,[["render",$P],["__scopeId","data-v-1518b33c"]]),Ou="/gamev2/assets/logo_circle-D5udk6rz.png",VP={data(){return{email:"",password:"",logoCircle:Ou,spinner:!1}},methods:{...zt.methods,async handleLogin(){const t=this;this.spinner=!0;try{await t.login(t.email,t.password,t.$router)}catch(e){console.error("Login failed:",e)}finally{this.spinner=!1}}}},Ii=t=>(vt("data-v-b93b50ad"),t=t(),yt(),t),HP={class:"bg position-relative"},zP={class:"w-100"},WP={class:"w-100 vh-100",style:{overflow:"auto"}},GP={class:"d-flex justify-content-center align-items-center"},qP={class:"container",style:{"max-width":"500px"}},KP={class:"d-flex flex-column align-items-center pb-3"},YP=["src"],QP=Ii(()=>f("h3",{class:"text-center"},"共伴活動",-1)),JP=Ii(()=>f("h4",{class:"text-center pb-2"},"管理者登入",-1)),XP={class:"form-group mb-3"},ZP=Ii(()=>f("label",{for:"email"},"帳號",-1)),e5={class:"form-group mb-3"},t5=Ii(()=>f("label",{for:"password"},"密碼",-1)),n5={class:"mb-3 px-1 d-flex justify-content-between"},s5={key:0,type:"submit",class:"btn btn-primary w-100"},i5={key:1,class:"btn btn-primary w-100",type:"button",disabled:""},r5=Ii(()=>f("span",{class:"spinner-border spinner-border-sm","aria-hidden":"true"},null,-1)),o5=Ii(()=>f("span",{role:"status"}," 驗證中...",-1)),a5=[r5,o5];function l5(t,e,n,s,i,r){const o=pe("RouterLink");return v(),y("div",HP,[f("table",zP,[f("tbody",null,[f("tr",null,[f("td",WP,[f("div",GP,[f("div",qP,[f("div",KP,[f("img",{src:i.logoCircle,alt:"Logo",class:"mb-1",style:{width:"100px",height:"100px"}},null,8,YP),QP]),f("form",{onSubmit:e[2]||(e[2]=Dc((...l)=>r.handleLogin&&r.handleLogin(...l),["prevent"])),class:"w-100 p-4 rounded-3",style:{background:"rgba(255, 255, 255, 0.5)"}},[JP,f("div",XP,[ZP,de(f("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=l=>i.email=l),type:"email",class:"form-control mt-1",placeholder:"請輸入信箱",required:""},null,512),[[Fe,i.email]])]),f("div",e5,[t5,de(f("input",{id:"password","onUpdate:modelValue":e[1]||(e[1]=l=>i.password=l),type:"password",class:"form-control mt-1",placeholder:"請輸入密碼",required:""},null,512),[[Fe,i.password]])]),f("div",n5,[_(o,{to:"registeradmin"},{default:ce(()=>[ne("註冊")]),_:1}),_(o,{to:"resetpw"},{default:ce(()=>[ne("忘記密碼")]),_:1})]),i.spinner?(v(),y("button",i5,a5)):(v(),y("button",s5," 登入 "))],32)])])])])])])])}const c5=Ge(VP,[["render",l5],["__scopeId","data-v-b93b50ad"]]),u5={data(){return{email:"",password:"",confirmPassword:"",logoCircle:Ou,spinner:!1}},computed:{passwordsMatch(){return this.password===this.confirmPassword}},methods:{...zt.methods,async handleRegister(){const t=this;this.spinner=!0;try{await t.register(t.email,t.password,t.$router)}catch(e){console.error("Register failed:",e)}finally{this.spinner=!1}}}},Zn=t=>(vt("data-v-96364d82"),t=t(),yt(),t),f5={class:"bg position-relative"},d5={class:"w-100"},h5={class:"w-100 vh-100",style:{overflow:"auto"}},p5={class:"d-flex justify-content-center align-items-center"},m5={class:"container",style:{"max-width":"500px"}},g5={class:"d-flex flex-column align-items-center pb-3"},_5=["src"],v5=Zn(()=>f("h3",{class:"text-center"},"共伴活動",-1)),y5=Zn(()=>f("h4",{class:"text-center pb-2"},"註冊成為管理者",-1)),b5={class:"form-group mb-3"},w5=Zn(()=>f("label",{for:"email"},"帳號",-1)),C5={class:"form-group mb-3"},k5=Zn(()=>f("label",{for:"password"},"密碼",-1)),E5={class:"form-group mb-3"},T5=Zn(()=>f("label",{for:"confirmPassword"},"確認密碼",-1)),I5={key:0,class:"text-danger mt-1 text-end"},x5={class:"mb-3 px-1 text-end"},S5=["disabled"],R5={key:1,class:"btn btn-primary w-100",type:"button",disabled:""},A5=Zn(()=>f("span",{class:"spinner-border spinner-border-sm","aria-hidden":"true"},null,-1)),P5=Zn(()=>f("span",{role:"status"}," 註冊中...",-1)),N5=[A5,P5],D5=Zn(()=>f("div",{class:"py-2 text-center",style:{opacity:"0.75"}}," 請先提供信箱給共伴活動，審核通過才能順利註冊成功喔！ ",-1));function O5(t,e,n,s,i,r){const o=pe("RouterLink");return v(),y("div",f5,[f("table",d5,[f("tbody",null,[f("tr",null,[f("td",h5,[f("div",p5,[f("div",m5,[f("div",g5,[f("img",{src:i.logoCircle,alt:"Logo",class:"mb-1",style:{width:"100px",height:"100px"}},null,8,_5),v5]),f("form",{onSubmit:e[3]||(e[3]=Dc((...l)=>r.handleRegister&&r.handleRegister(...l),["prevent"])),class:"w-100 p-4 rounded-3",style:{background:"rgba(255, 255, 255, 0.5)"}},[y5,f("div",b5,[w5,de(f("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=l=>i.email=l),type:"email",class:"form-control mt-1",placeholder:"請輸入信箱",required:""},null,512),[[Fe,i.email]])]),f("div",C5,[k5,de(f("input",{id:"password","onUpdate:modelValue":e[1]||(e[1]=l=>i.password=l),type:"password",class:"form-control mt-1",placeholder:"請輸入密碼",required:""},null,512),[[Fe,i.password]])]),f("div",E5,[T5,de(f("input",{id:"confirmPassword","onUpdate:modelValue":e[2]||(e[2]=l=>i.confirmPassword=l),type:"password",class:"form-control mt-1",placeholder:"請再次輸入密碼",required:""},null,512),[[Fe,i.confirmPassword]]),i.confirmPassword&&!r.passwordsMatch?(v(),y("div",I5," 密碼不相符 ")):S("",!0)]),f("div",x5,[_(o,{to:"loginadmin"},{default:ce(()=>[ne("登入")]),_:1})]),i.spinner?(v(),y("button",R5,N5)):(v(),y("button",{key:0,type:"submit",class:"btn btn-primary w-100",disabled:!r.passwordsMatch||i.spinner}," 註冊 ",8,S5)),D5],32)])])])])])])])}const L5=Ge(u5,[["render",O5],["__scopeId","data-v-96364d82"]]),M5={data(){return{email:"",logoCircle:Ou,spinner:!1}},methods:{...zt.methods,async handleResetPassword(){const t=this;this.spinner=!0;try{if(!"pig543879@gmail.com,ottaster2022@gmail.com".split(",").includes(t.email)){alert("寄送失敗，請確認您的信箱輸入是否正確。");return}await t.sendPasswordResetEmail(this.email),alert("寄送成功！請至信箱收信並重設密碼。"),t.$router.push("/loginadmin")}catch(e){console.error("Error sending password reset email:",e),alert("寄送失敗，請確認您的信箱輸入是否正確。")}finally{this.spinner=!1}}}},Ur=t=>(vt("data-v-59bb929a"),t=t(),yt(),t),F5={class:"bg position-relative"},U5={class:"w-100"},B5={class:"w-100 vh-100",style:{overflow:"auto"}},$5={class:"d-flex justify-content-center align-items-center"},j5={class:"container",style:{"max-width":"500px"}},V5={class:"d-flex flex-column align-items-center pb-3"},H5=["src"],z5=Ur(()=>f("h3",{class:"text-center"},"共伴活動",-1)),W5=Ur(()=>f("h4",{class:"text-center pb-2"},"重設密碼",-1)),G5={class:"form-group mb-3"},q5=Ur(()=>f("label",{for:"email"},"帳號",-1)),K5={key:0,type:"submit",class:"btn btn-primary w-100"},Y5={key:1,class:"btn btn-primary w-100",type:"button",disabled:""},Q5=Ur(()=>f("span",{class:"spinner-border spinner-border-sm","aria-hidden":"true"},null,-1)),J5=Ur(()=>f("span",{role:"status"}," 寄送中...",-1)),X5=[Q5,J5];function Z5(t,e,n,s,i,r){return v(),y("div",F5,[f("table",U5,[f("tbody",null,[f("tr",null,[f("td",B5,[f("div",$5,[f("div",j5,[f("div",V5,[f("img",{src:i.logoCircle,alt:"Logo",class:"mb-1",style:{width:"100px",height:"100px"}},null,8,H5),z5]),f("form",{onSubmit:e[1]||(e[1]=Dc((...o)=>r.handleResetPassword&&r.handleResetPassword(...o),["prevent"])),class:"w-100 p-4 rounded-3",style:{background:"rgba(255, 255, 255, 0.5)"}},[W5,f("div",G5,[q5,de(f("input",{id:"email","onUpdate:modelValue":e[0]||(e[0]=o=>i.email=o),type:"email",class:"form-control mt-1",placeholder:"請輸入信箱",required:""},null,512),[[Fe,i.email]])]),i.spinner?(v(),y("button",Y5,X5)):(v(),y("button",K5," 寄送重設密碼郵件 "))],32)])])])])])])])}const eN=Ge(M5,[["render",Z5],["__scopeId","data-v-59bb929a"]]),tN=aI({history:UT("/gamev2/"),routes:[{path:"/",name:"home",component:OI},{path:"/loginadmin",name:"loginadmin",component:c5},{path:"/registeradmin",name:"registeradmin",component:L5},{path:"/resetpw",name:"resetpw",component:eN},{path:"/ppt",name:"ppt",component:WI},{path:"/rank",name:"rank",component:qx},{path:"/charades",name:"charades",component:v4},{path:"/countDown",name:"countDown",component:H4},{path:"/wordChain",name:"wordChain",component:p3},{path:"/jump",name:"jump",component:pP},{path:"/selftalk",name:"selftalk",component:jP},{path:"/remotelist",name:"remotelist",component:y3},{path:"/remote",name:"remote",component:A3,children:[{path:"ppt",name:"pptControl",component:B3},{path:"rank",name:"rankControl",component:jS},{path:"charades",name:"charadesControl",component:dR},{path:"jump",name:"jumpControl",component:JR},{path:"selftalk",name:"selftalkControl",component:kA}]}]});function uh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?uh(Object(n),!0).forEach(function(s){We(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):uh(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function ea(t){"@babel/helpers - typeof";return ea=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ea(t)}function nN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function fh(t,e){for(var n=0;n<e.length;n++){var s=e[n];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function sN(t,e,n){return e&&fh(t.prototype,e),n&&fh(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function We(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Lu(t,e){return rN(t)||aN(t,e)||B_(t,e)||cN()}function Br(t){return iN(t)||oN(t)||B_(t)||lN()}function iN(t){if(Array.isArray(t))return nc(t)}function rN(t){if(Array.isArray(t))return t}function oN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function aN(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var s=[],i=!0,r=!1,o,l;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(s.push(o.value),!(e&&s.length===e));i=!0);}catch(a){r=!0,l=a}finally{try{!i&&n.return!=null&&n.return()}finally{if(r)throw l}}return s}}function B_(t,e){if(t){if(typeof t=="string")return nc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return nc(t,e)}}function nc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=new Array(e);n<e;n++)s[n]=t[n];return s}function lN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cN(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var dh=function(){},Mu={},$_={},j_=null,V_={mark:dh,measure:dh};try{typeof window<"u"&&(Mu=window),typeof document<"u"&&($_=document),typeof MutationObserver<"u"&&(j_=MutationObserver),typeof performance<"u"&&(V_=performance)}catch{}var uN=Mu.navigator||{},hh=uN.userAgent,ph=hh===void 0?"":hh,Kn=Mu,Ne=$_,mh=j_,Zr=V_;Kn.document;var vn=!!Ne.documentElement&&!!Ne.head&&typeof Ne.addEventListener=="function"&&typeof Ne.createElement=="function",H_=~ph.indexOf("MSIE")||~ph.indexOf("Trident/"),eo,to,no,so,io,dn="___FONT_AWESOME___",sc=16,z_="fa",W_="svg-inline--fa",Es="data-fa-i2svg",ic="data-fa-pseudo-element",fN="data-fa-pseudo-element-pending",Fu="data-prefix",Uu="data-icon",gh="fontawesome-i2svg",dN="async",hN=["HTML","HEAD","STYLE","SCRIPT"],G_=function(){try{return!0}catch{return!1}}(),Ae="classic",Le="sharp",Bu=[Ae,Le];function $r(t){return new Proxy(t,{get:function(n,s){return s in n?n[s]:n[Ae]}})}var vr=$r((eo={},We(eo,Ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit",fakd:"kit","fa-kit":"kit","fa-kit-duotone":"kit"}),We(eo,Le,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"}),eo)),yr=$r((to={},We(to,Ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),We(to,Le,{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"}),to)),br=$r((no={},We(no,Ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),We(no,Le,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"}),no)),pN=$r((so={},We(so,Ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),We(so,Le,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"}),so)),mN=/fa(s|r|l|t|d|b|k|ss|sr|sl|st)?[\-\ ]/,q_="fa-layers-text",gN=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_N=$r((io={},We(io,Ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),We(io,Le,{900:"fass",400:"fasr",300:"fasl",100:"fast"}),io)),K_=[1,2,3,4,5,6,7,8,9,10],vN=K_.concat([11,12,13,14,15,16,17,18,19,20]),yN=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],cs={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},wr=new Set;Object.keys(yr[Ae]).map(wr.add.bind(wr));Object.keys(yr[Le]).map(wr.add.bind(wr));var bN=[].concat(Bu,Br(wr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",cs.GROUP,cs.SWAP_OPACITY,cs.PRIMARY,cs.SECONDARY]).concat(K_.map(function(t){return"".concat(t,"x")})).concat(vN.map(function(t){return"w-".concat(t)})),Xi=Kn.FontAwesomeConfig||{};function wN(t){var e=Ne.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function CN(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Ne&&typeof Ne.querySelector=="function"){var kN=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];kN.forEach(function(t){var e=Lu(t,2),n=e[0],s=e[1],i=CN(wN(n));i!=null&&(Xi[s]=i)})}var Y_={styleDefault:"solid",familyDefault:"classic",cssPrefix:z_,replacementClass:W_,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Xi.familyPrefix&&(Xi.cssPrefix=Xi.familyPrefix);var _i=U(U({},Y_),Xi);_i.autoReplaceSvg||(_i.observeMutations=!1);var z={};Object.keys(Y_).forEach(function(t){Object.defineProperty(z,t,{enumerable:!0,set:function(n){_i[t]=n,Zi.forEach(function(s){return s(z)})},get:function(){return _i[t]}})});Object.defineProperty(z,"familyPrefix",{enumerable:!0,set:function(e){_i.cssPrefix=e,Zi.forEach(function(n){return n(z)})},get:function(){return _i.cssPrefix}});Kn.FontAwesomeConfig=z;var Zi=[];function EN(t){return Zi.push(t),function(){Zi.splice(Zi.indexOf(t),1)}}var En=sc,Wt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function TN(t){if(!(!t||!vn)){var e=Ne.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Ne.head.childNodes,s=null,i=n.length-1;i>-1;i--){var r=n[i],o=(r.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(s=r)}return Ne.head.insertBefore(e,s),t}}var IN="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Cr(){for(var t=12,e="";t-- >0;)e+=IN[Math.random()*62|0];return e}function xi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function $u(t){return t.classList?xi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Q_(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function xN(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Q_(t[n]),'" ')},"").trim()}function La(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ju(t){return t.size!==Wt.size||t.x!==Wt.x||t.y!==Wt.y||t.rotate!==Wt.rotate||t.flipX||t.flipY}function SN(t){var e=t.transform,n=t.containerWidth,s=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},r="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),l="rotate(".concat(e.rotate," 0 0)"),a={transform:"".concat(r," ").concat(o," ").concat(l)},c={transform:"translate(".concat(s/2*-1," -256)")};return{outer:i,inner:a,path:c}}function RN(t){var e=t.transform,n=t.width,s=n===void 0?sc:n,i=t.height,r=i===void 0?sc:i,o=t.startCentered,l=o===void 0?!1:o,a="";return l&&H_?a+="translate(".concat(e.x/En-s/2,"em, ").concat(e.y/En-r/2,"em) "):l?a+="translate(calc(-50% + ".concat(e.x/En,"em), calc(-50% + ").concat(e.y/En,"em)) "):a+="translate(".concat(e.x/En,"em, ").concat(e.y/En,"em) "),a+="scale(".concat(e.size/En*(e.flipX?-1:1),", ").concat(e.size/En*(e.flipY?-1:1),") "),a+="rotate(".concat(e.rotate,"deg) "),a}var AN=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function J_(){var t=z_,e=W_,n=z.cssPrefix,s=z.replacementClass,i=AN;if(n!==t||s!==e){var r=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),l=new RegExp("\\.".concat(e),"g");i=i.replace(r,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(l,".".concat(s))}return i}var _h=!1;function fl(){z.autoAddCss&&!_h&&(TN(J_()),_h=!0)}var PN={mixout:function(){return{dom:{css:J_,insertCss:fl}}},hooks:function(){return{beforeDOMElementCreation:function(){fl()},beforeI2svg:function(){fl()}}}},hn=Kn||{};hn[dn]||(hn[dn]={});hn[dn].styles||(hn[dn].styles={});hn[dn].hooks||(hn[dn].hooks={});hn[dn].shims||(hn[dn].shims=[]);var Ot=hn[dn],X_=[],NN=function t(){Ne.removeEventListener("DOMContentLoaded",t),ta=1,X_.map(function(e){return e()})},ta=!1;vn&&(ta=(Ne.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Ne.readyState),ta||Ne.addEventListener("DOMContentLoaded",NN));function DN(t){vn&&(ta?setTimeout(t,0):X_.push(t))}function jr(t){var e=t.tag,n=t.attributes,s=n===void 0?{}:n,i=t.children,r=i===void 0?[]:i;return typeof t=="string"?Q_(t):"<".concat(e," ").concat(xN(s),">").concat(r.map(jr).join(""),"</").concat(e,">")}function vh(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var ON=function(e,n){return function(s,i,r,o){return e.call(n,s,i,r,o)}},dl=function(e,n,s,i){var r=Object.keys(e),o=r.length,l=i!==void 0?ON(n,i):n,a,c,u;for(s===void 0?(a=1,u=e[r[0]]):(a=0,u=s);a<o;a++)c=r[a],u=l(u,e[c],c,e);return u};function LN(t){for(var e=[],n=0,s=t.length;n<s;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<s){var r=t.charCodeAt(n++);(r&64512)==56320?e.push(((i&1023)<<10)+(r&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function rc(t){var e=LN(t);return e.length===1?e[0].toString(16):null}function MN(t,e){var n=t.length,s=t.charCodeAt(e),i;return s>=55296&&s<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(s-55296)*1024+i-56320+65536:s}function yh(t){return Object.keys(t).reduce(function(e,n){var s=t[n],i=!!s.icon;return i?e[s.iconName]=s.icon:e[n]=s,e},{})}function oc(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},s=n.skipHooks,i=s===void 0?!1:s,r=yh(e);typeof Ot.hooks.addPack=="function"&&!i?Ot.hooks.addPack(t,yh(e)):Ot.styles[t]=U(U({},Ot.styles[t]||{}),r),t==="fas"&&oc("fa",e)}var ro,oo,ao,Vs=Ot.styles,FN=Ot.shims,UN=(ro={},We(ro,Ae,Object.values(br[Ae])),We(ro,Le,Object.values(br[Le])),ro),Vu=null,Z_={},ev={},tv={},nv={},sv={},BN=(oo={},We(oo,Ae,Object.keys(vr[Ae])),We(oo,Le,Object.keys(vr[Le])),oo);function $N(t){return~bN.indexOf(t)}function jN(t,e){var n=e.split("-"),s=n[0],i=n.slice(1).join("-");return s===t&&i!==""&&!$N(i)?i:null}var iv=function(){var e=function(r){return dl(Vs,function(o,l,a){return o[a]=dl(l,r,{}),o},{})};Z_=e(function(i,r,o){if(r[3]&&(i[r[3]]=o),r[2]){var l=r[2].filter(function(a){return typeof a=="number"});l.forEach(function(a){i[a.toString(16)]=o})}return i}),ev=e(function(i,r,o){if(i[o]=o,r[2]){var l=r[2].filter(function(a){return typeof a=="string"});l.forEach(function(a){i[a]=o})}return i}),sv=e(function(i,r,o){var l=r[2];return i[o]=o,l.forEach(function(a){i[a]=o}),i});var n="far"in Vs||z.autoFetchSvg,s=dl(FN,function(i,r){var o=r[0],l=r[1],a=r[2];return l==="far"&&!n&&(l="fas"),typeof o=="string"&&(i.names[o]={prefix:l,iconName:a}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:l,iconName:a}),i},{names:{},unicodes:{}});tv=s.names,nv=s.unicodes,Vu=Ma(z.styleDefault,{family:z.familyDefault})};EN(function(t){Vu=Ma(t.styleDefault,{family:z.familyDefault})});iv();function Hu(t,e){return(Z_[t]||{})[e]}function VN(t,e){return(ev[t]||{})[e]}function us(t,e){return(sv[t]||{})[e]}function rv(t){return tv[t]||{prefix:null,iconName:null}}function HN(t){var e=nv[t],n=Hu("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Yn(){return Vu}var zu=function(){return{prefix:null,iconName:null,rest:[]}};function Ma(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,s=n===void 0?Ae:n,i=vr[s][t],r=yr[s][t]||yr[s][i],o=t in Ot.styles?t:null;return r||o||null}var bh=(ao={},We(ao,Ae,Object.keys(br[Ae])),We(ao,Le,Object.keys(br[Le])),ao);function Fa(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.skipLookups,i=s===void 0?!1:s,r=(e={},We(e,Ae,"".concat(z.cssPrefix,"-").concat(Ae)),We(e,Le,"".concat(z.cssPrefix,"-").concat(Le)),e),o=null,l=Ae;(t.includes(r[Ae])||t.some(function(c){return bh[Ae].includes(c)}))&&(l=Ae),(t.includes(r[Le])||t.some(function(c){return bh[Le].includes(c)}))&&(l=Le);var a=t.reduce(function(c,u){var d=jN(z.cssPrefix,u);if(Vs[u]?(u=UN[l].includes(u)?pN[l][u]:u,o=u,c.prefix=u):BN[l].indexOf(u)>-1?(o=u,c.prefix=Ma(u,{family:l})):d?c.iconName=d:u!==z.replacementClass&&u!==r[Ae]&&u!==r[Le]&&c.rest.push(u),!i&&c.prefix&&c.iconName){var h=o==="fa"?rv(c.iconName):{},g=us(c.prefix,c.iconName);h.prefix&&(o=null),c.iconName=h.iconName||g||c.iconName,c.prefix=h.prefix||c.prefix,c.prefix==="far"&&!Vs.far&&Vs.fas&&!z.autoFetchSvg&&(c.prefix="fas")}return c},zu());return(t.includes("fa-brands")||t.includes("fab"))&&(a.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(a.prefix="fad"),!a.prefix&&l===Le&&(Vs.fass||z.autoFetchSvg)&&(a.prefix="fass",a.iconName=us(a.prefix,a.iconName)||a.iconName),(a.prefix==="fa"||o==="fa")&&(a.prefix=Yn()||"fas"),a}var zN=function(){function t(){nN(this,t),this.definitions={}}return sN(t,[{key:"add",value:function(){for(var n=this,s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(l){n.definitions[l]=U(U({},n.definitions[l]||{}),o[l]),oc(l,o[l]);var a=br[Ae][l];a&&oc(a,o[l]),iv()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,s){var i=s.prefix&&s.iconName&&s.icon?{0:s}:s;return Object.keys(i).map(function(r){var o=i[r],l=o.prefix,a=o.iconName,c=o.icon,u=c[2];n[l]||(n[l]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[l][d]=c)}),n[l][a]=c}),n}}]),t}(),wh=[],Hs={},si={},WN=Object.keys(si);function GN(t,e){var n=e.mixoutsTo;return wh=t,Hs={},Object.keys(si).forEach(function(s){WN.indexOf(s)===-1&&delete si[s]}),wh.forEach(function(s){var i=s.mixout?s.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),ea(i[o])==="object"&&Object.keys(i[o]).forEach(function(l){n[o]||(n[o]={}),n[o][l]=i[o][l]})}),s.hooks){var r=s.hooks();Object.keys(r).forEach(function(o){Hs[o]||(Hs[o]=[]),Hs[o].push(r[o])})}s.provides&&s.provides(si)}),n}function ac(t,e){for(var n=arguments.length,s=new Array(n>2?n-2:0),i=2;i<n;i++)s[i-2]=arguments[i];var r=Hs[t]||[];return r.forEach(function(o){e=o.apply(null,[e].concat(s))}),e}function Ts(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];var i=Hs[t]||[];i.forEach(function(r){r.apply(null,n)})}function pn(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return si[t]?si[t].apply(null,e):void 0}function lc(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Yn();if(e)return e=us(n,e)||e,vh(ov.definitions,n,e)||vh(Ot.styles,n,e)}var ov=new zN,qN=function(){z.autoReplaceSvg=!1,z.observeMutations=!1,Ts("noAuto")},KN={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return vn?(Ts("beforeI2svg",e),pn("pseudoElements2svg",e),pn("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;z.autoReplaceSvg===!1&&(z.autoReplaceSvg=!0),z.observeMutations=!0,DN(function(){QN({autoReplaceSvgRoot:n}),Ts("watch",e)})}},YN={icon:function(e){if(e===null)return null;if(ea(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:us(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],s=Ma(e[0]);return{prefix:s,iconName:us(s,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(z.cssPrefix,"-"))>-1||e.match(mN))){var i=Fa(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Yn(),iconName:us(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var r=Yn();return{prefix:r,iconName:us(r,e)||e}}}},kt={noAuto:qN,config:z,dom:KN,parse:YN,library:ov,findIconDefinition:lc,toHtml:jr},QN=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,s=n===void 0?Ne:n;(Object.keys(Ot.styles).length>0||z.autoFetchSvg)&&vn&&z.autoReplaceSvg&&kt.dom.i2svg({node:s})};function Ua(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(s){return jr(s)})}}),Object.defineProperty(t,"node",{get:function(){if(vn){var s=Ne.createElement("div");return s.innerHTML=t.html,s.children}}}),t}function JN(t){var e=t.children,n=t.main,s=t.mask,i=t.attributes,r=t.styles,o=t.transform;if(ju(o)&&n.found&&!s.found){var l=n.width,a=n.height,c={x:l/a/2,y:.5};i.style=La(U(U({},r),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function XN(t){var e=t.prefix,n=t.iconName,s=t.children,i=t.attributes,r=t.symbol,o=r===!0?"".concat(e,"-").concat(z.cssPrefix,"-").concat(n):r;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:U(U({},i),{},{id:o}),children:s}]}]}function Wu(t){var e=t.icons,n=e.main,s=e.mask,i=t.prefix,r=t.iconName,o=t.transform,l=t.symbol,a=t.title,c=t.maskId,u=t.titleId,d=t.extra,h=t.watchable,g=h===void 0?!1:h,b=s.found?s:n,x=b.width,D=b.height,C=i==="fak",E=[z.replacementClass,r?"".concat(z.cssPrefix,"-").concat(r):""].filter(function(se){return d.classes.indexOf(se)===-1}).filter(function(se){return se!==""||!!se}).concat(d.classes).join(" "),O={children:[],attributes:U(U({},d.attributes),{},{"data-prefix":i,"data-icon":r,class:E,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(x," ").concat(D)})},V=C&&!~d.classes.indexOf("fa-fw")?{width:"".concat(x/D*16*.0625,"em")}:{};g&&(O.attributes[Es]=""),a&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||Cr())},children:[a]}),delete O.attributes.title);var K=U(U({},O),{},{prefix:i,iconName:r,main:n,mask:s,maskId:c,transform:o,symbol:l,styles:U(U({},V),d.styles)}),H=s.found&&n.found?pn("generateAbstractMask",K)||{children:[],attributes:{}}:pn("generateAbstractIcon",K)||{children:[],attributes:{}},ue=H.children,X=H.attributes;return K.children=ue,K.attributes=X,l?XN(K):JN(K)}function Ch(t){var e=t.content,n=t.width,s=t.height,i=t.transform,r=t.title,o=t.extra,l=t.watchable,a=l===void 0?!1:l,c=U(U(U({},o.attributes),r?{title:r}:{}),{},{class:o.classes.join(" ")});a&&(c[Es]="");var u=U({},o.styles);ju(i)&&(u.transform=RN({transform:i,startCentered:!0,width:n,height:s}),u["-webkit-transform"]=u.transform);var d=La(u);d.length>0&&(c.style=d);var h=[];return h.push({tag:"span",attributes:c,children:[e]}),r&&h.push({tag:"span",attributes:{class:"sr-only"},children:[r]}),h}function ZN(t){var e=t.content,n=t.title,s=t.extra,i=U(U(U({},s.attributes),n?{title:n}:{}),{},{class:s.classes.join(" ")}),r=La(s.styles);r.length>0&&(i.style=r);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hl=Ot.styles;function cc(t){var e=t[0],n=t[1],s=t.slice(4),i=Lu(s,1),r=i[0],o=null;return Array.isArray(r)?o={tag:"g",attributes:{class:"".concat(z.cssPrefix,"-").concat(cs.GROUP)},children:[{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(cs.SECONDARY),fill:"currentColor",d:r[0]}},{tag:"path",attributes:{class:"".concat(z.cssPrefix,"-").concat(cs.PRIMARY),fill:"currentColor",d:r[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:r}},{found:!0,width:e,height:n,icon:o}}var e6={found:!1,width:512,height:512};function t6(t,e){!G_&&!z.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function uc(t,e){var n=e;return e==="fa"&&z.styleDefault!==null&&(e=Yn()),new Promise(function(s,i){if(pn("missingIconAbstract"),n==="fa"){var r=rv(t)||{};t=r.iconName||t,e=r.prefix||e}if(t&&e&&hl[e]&&hl[e][t]){var o=hl[e][t];return s(cc(o))}t6(t,e),s(U(U({},e6),{},{icon:z.showMissingIcons&&t?pn("missingIconAbstract")||{}:{}}))})}var kh=function(){},fc=z.measurePerformance&&Zr&&Zr.mark&&Zr.measure?Zr:{mark:kh,measure:kh},Bi='FA "6.5.1"',n6=function(e){return fc.mark("".concat(Bi," ").concat(e," begins")),function(){return av(e)}},av=function(e){fc.mark("".concat(Bi," ").concat(e," ends")),fc.measure("".concat(Bi," ").concat(e),"".concat(Bi," ").concat(e," begins"),"".concat(Bi," ").concat(e," ends"))},Gu={begin:n6,end:av},yo=function(){};function Eh(t){var e=t.getAttribute?t.getAttribute(Es):null;return typeof e=="string"}function s6(t){var e=t.getAttribute?t.getAttribute(Fu):null,n=t.getAttribute?t.getAttribute(Uu):null;return e&&n}function i6(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(z.replacementClass)}function r6(){if(z.autoReplaceSvg===!0)return bo.replace;var t=bo[z.autoReplaceSvg];return t||bo.replace}function o6(t){return Ne.createElementNS("http://www.w3.org/2000/svg",t)}function a6(t){return Ne.createElement(t)}function lv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,s=n===void 0?t.tag==="svg"?o6:a6:n;if(typeof t=="string")return Ne.createTextNode(t);var i=s(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var r=t.children||[];return r.forEach(function(o){i.appendChild(lv(o,{ceFn:s}))}),i}function l6(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var bo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(lv(i),n)}),n.getAttribute(Es)===null&&z.keepOriginalSource){var s=Ne.createComment(l6(n));n.parentNode.replaceChild(s,n)}else n.remove()},nest:function(e){var n=e[0],s=e[1];if(~$u(n).indexOf(z.replacementClass))return bo.replace(e);var i=new RegExp("".concat(z.cssPrefix,"-.*"));if(delete s[0].attributes.id,s[0].attributes.class){var r=s[0].attributes.class.split(" ").reduce(function(l,a){return a===z.replacementClass||a.match(i)?l.toSvg.push(a):l.toNode.push(a),l},{toNode:[],toSvg:[]});s[0].attributes.class=r.toSvg.join(" "),r.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",r.toNode.join(" "))}var o=s.map(function(l){return jr(l)}).join(`
`);n.setAttribute(Es,""),n.innerHTML=o}};function Th(t){t()}function cv(t,e){var n=typeof e=="function"?e:yo;if(t.length===0)n();else{var s=Th;z.mutateApproach===dN&&(s=Kn.requestAnimationFrame||Th),s(function(){var i=r6(),r=Gu.begin("mutate");t.map(i),r(),n()})}}var qu=!1;function uv(){qu=!0}function dc(){qu=!1}var na=null;function Ih(t){if(mh&&z.observeMutations){var e=t.treeCallback,n=e===void 0?yo:e,s=t.nodeCallback,i=s===void 0?yo:s,r=t.pseudoElementsCallback,o=r===void 0?yo:r,l=t.observeMutationsRoot,a=l===void 0?Ne:l;na=new mh(function(c){if(!qu){var u=Yn();xi(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Eh(d.addedNodes[0])&&(z.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&z.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Eh(d.target)&&~yN.indexOf(d.attributeName))if(d.attributeName==="class"&&s6(d.target)){var h=Fa($u(d.target)),g=h.prefix,b=h.iconName;d.target.setAttribute(Fu,g||u),b&&d.target.setAttribute(Uu,b)}else i6(d.target)&&i(d.target)})}}),vn&&na.observe(a,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function c6(){na&&na.disconnect()}function u6(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(s,i){var r=i.split(":"),o=r[0],l=r.slice(1);return o&&l.length>0&&(s[o]=l.join(":").trim()),s},{})),n}function f6(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),s=t.innerText!==void 0?t.innerText.trim():"",i=Fa($u(t));return i.prefix||(i.prefix=Yn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&s.length>0&&(i.iconName=VN(i.prefix,t.innerText)||Hu(i.prefix,rc(t.innerText))),!i.iconName&&z.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function d6(t){var e=xi(t.attributes).reduce(function(i,r){return i.name!=="class"&&i.name!=="style"&&(i[r.name]=r.value),i},{}),n=t.getAttribute("title"),s=t.getAttribute("data-fa-title-id");return z.autoA11y&&(n?e["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(s||Cr()):(e["aria-hidden"]="true",e.focusable="false")),e}function h6(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Wt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function xh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=f6(t),s=n.iconName,i=n.prefix,r=n.rest,o=d6(t),l=ac("parseNodeAttributes",{},t),a=e.styleParser?u6(t):[];return U({iconName:s,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:Wt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:r,styles:a,attributes:o}},l)}var p6=Ot.styles;function fv(t){var e=z.autoReplaceSvg==="nest"?xh(t,{styleParser:!1}):xh(t);return~e.extra.classes.indexOf(q_)?pn("generateLayersText",t,e):pn("generateSvgReplacementMutation",t,e)}var Qn=new Set;Bu.map(function(t){Qn.add("fa-".concat(t))});Object.keys(vr[Ae]).map(Qn.add.bind(Qn));Object.keys(vr[Le]).map(Qn.add.bind(Qn));Qn=Br(Qn);function Sh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!vn)return Promise.resolve();var n=Ne.documentElement.classList,s=function(d){return n.add("".concat(gh,"-").concat(d))},i=function(d){return n.remove("".concat(gh,"-").concat(d))},r=z.autoFetchSvg?Qn:Bu.map(function(u){return"fa-".concat(u)}).concat(Object.keys(p6));r.includes("fa")||r.push("fa");var o=[".".concat(q_,":not([").concat(Es,"])")].concat(r.map(function(u){return".".concat(u,":not([").concat(Es,"])")})).join(", ");if(o.length===0)return Promise.resolve();var l=[];try{l=xi(t.querySelectorAll(o))}catch{}if(l.length>0)s("pending"),i("complete");else return Promise.resolve();var a=Gu.begin("onTree"),c=l.reduce(function(u,d){try{var h=fv(d);h&&u.push(h)}catch(g){G_||g.name==="MissingIcon"&&console.error(g)}return u},[]);return new Promise(function(u,d){Promise.all(c).then(function(h){cv(h,function(){s("active"),s("complete"),i("pending"),typeof e=="function"&&e(),a(),u()})}).catch(function(h){a(),d(h)})})}function m6(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;fv(t).then(function(n){n&&cv([n],e)})}function g6(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=(e||{}).icon?e:lc(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:lc(i||{})),t(s,U(U({},n),{},{mask:i}))}}var _6=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=n.transform,i=s===void 0?Wt:s,r=n.symbol,o=r===void 0?!1:r,l=n.mask,a=l===void 0?null:l,c=n.maskId,u=c===void 0?null:c,d=n.title,h=d===void 0?null:d,g=n.titleId,b=g===void 0?null:g,x=n.classes,D=x===void 0?[]:x,C=n.attributes,E=C===void 0?{}:C,O=n.styles,V=O===void 0?{}:O;if(e){var K=e.prefix,H=e.iconName,ue=e.icon;return Ua(U({type:"icon"},e),function(){return Ts("beforeDOMElementCreation",{iconDefinition:e,params:n}),z.autoA11y&&(h?E["aria-labelledby"]="".concat(z.replacementClass,"-title-").concat(b||Cr()):(E["aria-hidden"]="true",E.focusable="false")),Wu({icons:{main:cc(ue),mask:a?cc(a.icon):{found:!1,width:null,height:null,icon:{}}},prefix:K,iconName:H,transform:U(U({},Wt),i),symbol:o,title:h,maskId:u,titleId:b,extra:{attributes:E,styles:V,classes:D}})})}},v6={mixout:function(){return{icon:g6(_6)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Sh,n.nodeCallback=m6,n}}},provides:function(e){e.i2svg=function(n){var s=n.node,i=s===void 0?Ne:s,r=n.callback,o=r===void 0?function(){}:r;return Sh(i,o)},e.generateSvgReplacementMutation=function(n,s){var i=s.iconName,r=s.title,o=s.titleId,l=s.prefix,a=s.transform,c=s.symbol,u=s.mask,d=s.maskId,h=s.extra;return new Promise(function(g,b){Promise.all([uc(i,l),u.iconName?uc(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(x){var D=Lu(x,2),C=D[0],E=D[1];g([n,Wu({icons:{main:C,mask:E},prefix:l,iconName:i,transform:a,symbol:c,maskId:d,title:r,titleId:o,extra:h,watchable:!0})])}).catch(b)})},e.generateAbstractIcon=function(n){var s=n.children,i=n.attributes,r=n.main,o=n.transform,l=n.styles,a=La(l);a.length>0&&(i.style=a);var c;return ju(o)&&(c=pn("generateAbstractTransformGrouping",{main:r,transform:o,containerWidth:r.width,iconWidth:r.width})),s.push(c||r.icon),{children:s,attributes:i}}}},y6={mixout:function(){return{layer:function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=s.classes,r=i===void 0?[]:i;return Ua({type:"layer"},function(){Ts("beforeDOMElementCreation",{assembler:n,params:s});var o=[];return n(function(l){Array.isArray(l)?l.map(function(a){o=o.concat(a.abstract)}):o=o.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(z.cssPrefix,"-layers")].concat(Br(r)).join(" ")},children:o}]})}}}},b6={mixout:function(){return{counter:function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=s.title,r=i===void 0?null:i,o=s.classes,l=o===void 0?[]:o,a=s.attributes,c=a===void 0?{}:a,u=s.styles,d=u===void 0?{}:u;return Ua({type:"counter",content:n},function(){return Ts("beforeDOMElementCreation",{content:n,params:s}),ZN({content:n.toString(),title:r,extra:{attributes:c,styles:d,classes:["".concat(z.cssPrefix,"-layers-counter")].concat(Br(l))}})})}}}},w6={mixout:function(){return{text:function(n){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=s.transform,r=i===void 0?Wt:i,o=s.title,l=o===void 0?null:o,a=s.classes,c=a===void 0?[]:a,u=s.attributes,d=u===void 0?{}:u,h=s.styles,g=h===void 0?{}:h;return Ua({type:"text",content:n},function(){return Ts("beforeDOMElementCreation",{content:n,params:s}),Ch({content:n,transform:U(U({},Wt),r),title:l,extra:{attributes:d,styles:g,classes:["".concat(z.cssPrefix,"-layers-text")].concat(Br(c))}})})}}},provides:function(e){e.generateLayersText=function(n,s){var i=s.title,r=s.transform,o=s.extra,l=null,a=null;if(H_){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();l=u.width/c,a=u.height/c}return z.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ch({content:n.innerHTML,width:l,height:a,transform:r,title:i,extra:o,watchable:!0})])}}},C6=new RegExp('"',"ug"),Rh=[1105920,1112319];function k6(t){var e=t.replace(C6,""),n=MN(e,0),s=n>=Rh[0]&&n<=Rh[1],i=e.length===2?e[0]===e[1]:!1;return{value:rc(i?e[0]:e),isSecondary:s||i}}function Ah(t,e){var n="".concat(fN).concat(e.replace(":","-"));return new Promise(function(s,i){if(t.getAttribute(n)!==null)return s();var r=xi(t.children),o=r.filter(function(ue){return ue.getAttribute(ic)===e})[0],l=Kn.getComputedStyle(t,e),a=l.getPropertyValue("font-family").match(gN),c=l.getPropertyValue("font-weight"),u=l.getPropertyValue("content");if(o&&!a)return t.removeChild(o),s();if(a&&u!=="none"&&u!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(a[2])?Le:Ae,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(a[2])?yr[h][a[2].toLowerCase()]:_N[h][c],b=k6(d),x=b.value,D=b.isSecondary,C=a[0].startsWith("FontAwesome"),E=Hu(g,x),O=E;if(C){var V=HN(x);V.iconName&&V.prefix&&(E=V.iconName,g=V.prefix)}if(E&&!D&&(!o||o.getAttribute(Fu)!==g||o.getAttribute(Uu)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var K=h6(),H=K.extra;H.attributes[ic]=e,uc(E,g).then(function(ue){var X=Wu(U(U({},K),{},{icons:{main:ue,mask:zu()},prefix:g,iconName:O,extra:H,watchable:!0})),se=Ne.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?t.insertBefore(se,t.firstChild):t.appendChild(se),se.outerHTML=X.map(function(me){return jr(me)}).join(`
`),t.removeAttribute(n),s()}).catch(i)}else s()}else s()})}function E6(t){return Promise.all([Ah(t,"::before"),Ah(t,"::after")])}function T6(t){return t.parentNode!==document.head&&!~hN.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(ic)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ph(t){if(vn)return new Promise(function(e,n){var s=xi(t.querySelectorAll("*")).filter(T6).map(E6),i=Gu.begin("searchPseudoElements");uv(),Promise.all(s).then(function(){i(),dc(),e()}).catch(function(){i(),dc(),n()})})}var I6={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ph,n}}},provides:function(e){e.pseudoElements2svg=function(n){var s=n.node,i=s===void 0?Ne:s;z.searchPseudoElements&&Ph(i)}}},Nh=!1,x6={mixout:function(){return{dom:{unwatch:function(){uv(),Nh=!0}}}},hooks:function(){return{bootstrap:function(){Ih(ac("mutationObserverCallbacks",{}))},noAuto:function(){c6()},watch:function(n){var s=n.observeMutationsRoot;Nh?dc():Ih(ac("mutationObserverCallbacks",{observeMutationsRoot:s}))}}}},Dh=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(s,i){var r=i.toLowerCase().split("-"),o=r[0],l=r.slice(1).join("-");if(o&&l==="h")return s.flipX=!0,s;if(o&&l==="v")return s.flipY=!0,s;if(l=parseFloat(l),isNaN(l))return s;switch(o){case"grow":s.size=s.size+l;break;case"shrink":s.size=s.size-l;break;case"left":s.x=s.x-l;break;case"right":s.x=s.x+l;break;case"up":s.y=s.y-l;break;case"down":s.y=s.y+l;break;case"rotate":s.rotate=s.rotate+l;break}return s},n)},S6={mixout:function(){return{parse:{transform:function(n){return Dh(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,s){var i=s.getAttribute("data-fa-transform");return i&&(n.transform=Dh(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var s=n.main,i=n.transform,r=n.containerWidth,o=n.iconWidth,l={transform:"translate(".concat(r/2," 256)")},a="translate(".concat(i.x*32,", ").concat(i.y*32,") "),c="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(a," ").concat(c," ").concat(u)},h={transform:"translate(".concat(o/2*-1," -256)")},g={outer:l,inner:d,path:h};return{tag:"g",attributes:U({},g.outer),children:[{tag:"g",attributes:U({},g.inner),children:[{tag:s.icon.tag,children:s.icon.children,attributes:U(U({},s.icon.attributes),g.path)}]}]}}}},pl={x:0,y:0,width:"100%",height:"100%"};function Oh(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function R6(t){return t.tag==="g"?t.children:[t]}var A6={hooks:function(){return{parseNodeAttributes:function(n,s){var i=s.getAttribute("data-fa-mask"),r=i?Fa(i.split(" ").map(function(o){return o.trim()})):zu();return r.prefix||(r.prefix=Yn()),n.mask=r,n.maskId=s.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var s=n.children,i=n.attributes,r=n.main,o=n.mask,l=n.maskId,a=n.transform,c=r.width,u=r.icon,d=o.width,h=o.icon,g=SN({transform:a,containerWidth:d,iconWidth:c}),b={tag:"rect",attributes:U(U({},pl),{},{fill:"white"})},x=u.children?{children:u.children.map(Oh)}:{},D={tag:"g",attributes:U({},g.inner),children:[Oh(U({tag:u.tag,attributes:U(U({},u.attributes),g.path)},x))]},C={tag:"g",attributes:U({},g.outer),children:[D]},E="mask-".concat(l||Cr()),O="clip-".concat(l||Cr()),V={tag:"mask",attributes:U(U({},pl),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[b,C]},K={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:R6(h)},V]};return s.push(K,{tag:"rect",attributes:U({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(E,")")},pl)}),{children:s,attributes:i}}}},P6={provides:function(e){var n=!1;Kn.matchMedia&&(n=Kn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var s=[],i={fill:"currentColor"},r={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};s.push({tag:"path",attributes:U(U({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=U(U({},r),{},{attributeName:"opacity"}),l={tag:"circle",attributes:U(U({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:U(U({},r),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:U(U({},o),{},{values:"1;0;1;1;0;1;"})}),s.push(l),s.push({tag:"path",attributes:U(U({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:U(U({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||s.push({tag:"path",attributes:U(U({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:U(U({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:s}}}},N6={hooks:function(){return{parseNodeAttributes:function(n,s){var i=s.getAttribute("data-fa-symbol"),r=i===null?!1:i===""?!0:i;return n.symbol=r,n}}}},D6=[PN,v6,y6,b6,w6,I6,x6,S6,A6,P6,N6];GN(D6,{mixoutsTo:kt});kt.noAuto;kt.config;var O6=kt.library;kt.dom;var hc=kt.parse;kt.findIconDefinition;kt.toHtml;var L6=kt.icon;kt.layer;kt.text;kt.counter;function Lh(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);e&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,s)}return n}function nn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Lh(Object(n),!0).forEach(function(s){ht(t,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Lh(Object(n)).forEach(function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(n,s))})}return t}function sa(t){"@babel/helpers - typeof";return sa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},sa(t)}function ht(t,e,n){return e=B6(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function M6(t,e){if(t==null)return{};var n={},s=Object.keys(t),i,r;for(r=0;r<s.length;r++)i=s[r],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function F6(t,e){if(t==null)return{};var n=M6(t,e),s,i;if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)s=r[i],!(e.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(t,s)&&(n[s]=t[s])}return n}function U6(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var s=n.call(t,e||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function B6(t){var e=U6(t,"string");return typeof e=="symbol"?e:String(e)}var $6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},dv={exports:{}};(function(t){(function(e){var n=function(C,E,O){if(!c(E)||d(E)||h(E)||g(E)||a(E))return E;var V,K=0,H=0;if(u(E))for(V=[],H=E.length;K<H;K++)V.push(n(C,E[K],O));else{V={};for(var ue in E)Object.prototype.hasOwnProperty.call(E,ue)&&(V[C(ue,O)]=n(C,E[ue],O))}return V},s=function(C,E){E=E||{};var O=E.separator||"_",V=E.split||/(?=[A-Z])/;return C.split(V).join(O)},i=function(C){return b(C)?C:(C=C.replace(/[\-_\s]+(.)?/g,function(E,O){return O?O.toUpperCase():""}),C.substr(0,1).toLowerCase()+C.substr(1))},r=function(C){var E=i(C);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(C,E){return s(C,E).toLowerCase()},l=Object.prototype.toString,a=function(C){return typeof C=="function"},c=function(C){return C===Object(C)},u=function(C){return l.call(C)=="[object Array]"},d=function(C){return l.call(C)=="[object Date]"},h=function(C){return l.call(C)=="[object RegExp]"},g=function(C){return l.call(C)=="[object Boolean]"},b=function(C){return C=C-0,C===C},x=function(C,E){var O=E&&"process"in E?E.process:E;return typeof O!="function"?C:function(V,K){return O(V,C,K)}},D={camelize:i,decamelize:o,pascalize:r,depascalize:o,camelizeKeys:function(C,E){return n(x(i,E),C)},decamelizeKeys:function(C,E){return n(x(o,E),C,E)},pascalizeKeys:function(C,E){return n(x(r,E),C)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=D:e.humps=D})($6)})(dv);var j6=dv.exports,V6=["class","style"];function H6(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var s=n.indexOf(":"),i=j6.camelize(n.slice(0,s)),r=n.slice(s+1).trim();return e[i]=r,e},{})}function z6(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function hv(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var s=(t.children||[]).map(function(a){return hv(a)}),i=Object.keys(t.attributes||{}).reduce(function(a,c){var u=t.attributes[c];switch(c){case"class":a.class=z6(u);break;case"style":a.style=H6(u);break;default:a.attrs[c]=u}return a},{attrs:{},class:{},style:{}});n.class;var r=n.style,o=r===void 0?{}:r,l=F6(n,V6);return Nc(t.tag,nn(nn(nn({},e),{},{class:i.class,style:nn(nn({},i.style),o)},i.attrs),l),s)}var pv=!1;try{pv=!0}catch{}function W6(){if(!pv&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function ml(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ht({},t,e):{}}function G6(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ht(e,"fa-".concat(t.size),t.size!==null),ht(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ht(e,"fa-pull-".concat(t.pull),t.pull!==null),ht(e,"fa-swap-opacity",t.swapOpacity),ht(e,"fa-bounce",t.bounce),ht(e,"fa-shake",t.shake),ht(e,"fa-beat",t.beat),ht(e,"fa-fade",t.fade),ht(e,"fa-beat-fade",t.beatFade),ht(e,"fa-flash",t.flash),ht(e,"fa-spin-pulse",t.spinPulse),ht(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(s){return n[s]?s:null}).filter(function(s){return s})}function Mh(t){if(t&&sa(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(hc.icon)return hc.icon(t);if(t===null)return null;if(sa(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var q6=Sc({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var s=n.attrs,i=Qe(function(){return Mh(e.icon)}),r=Qe(function(){return ml("classes",G6(e))}),o=Qe(function(){return ml("transform",typeof e.transform=="string"?hc.transform(e.transform):e.transform)}),l=Qe(function(){return ml("mask",Mh(e.mask))}),a=Qe(function(){return L6(i.value,nn(nn(nn(nn({},r.value),o.value),l.value),{},{symbol:e.symbol,title:e.title,titleId:e.titleId,maskId:e.maskId}))});ji(a,function(u){if(!u)return W6("Could not find one or more icon(s)",i.value,l.value)},{immediate:!0});var c=Qe(function(){return a.value?hv(a.value.abstract[0],{},s):null});return function(){return c.value}}}),K6={prefix:"fas",iconName:"flag-checkered",icon:[448,512,[127937],"f11e","M32 0C49.7 0 64 14.3 64 32V48l69-17.2c38.1-9.5 78.3-5.1 113.5 12.5c46.3 23.2 100.8 23.2 147.1 0l9.6-4.8C423.8 28.1 448 43.1 448 66.1V345.8c0 13.3-8.3 25.3-20.8 30l-34.7 13c-46.2 17.3-97.6 14.6-141.7-7.4c-37.9-19-81.3-23.7-122.5-13.4L64 384v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V400 334 64 32C0 14.3 14.3 0 32 0zM64 187.1l64-13.9v65.5L64 252.6V318l48.8-12.2c5.1-1.3 10.1-2.4 15.2-3.3V238.7l38.9-8.4c8.3-1.8 16.7-2.5 25.1-2.1l0-64c13.6 .4 27.2 2.6 40.4 6.4l23.6 6.9v66.7l-41.7-12.3c-7.3-2.1-14.8-3.4-22.3-3.8v71.4c21.8 1.9 43.3 6.7 64 14.4V244.2l22.7 6.7c13.5 4 27.3 6.4 41.3 7.4V194c-7.8-.8-15.6-2.3-23.2-4.5l-40.8-12v-62c-13-3.8-25.8-8.8-38.2-15c-8.2-4.1-16.9-7-25.8-8.8v72.4c-13-.4-26 .8-38.7 3.6L128 173.2V98L64 114v73.1zM320 335.7c16.8 1.5 33.9-.7 50-6.8l14-5.2V251.9l-7.9 1.8c-18.4 4.3-37.3 5.7-56.1 4.5v77.4zm64-149.4V115.4c-20.9 6.1-42.4 9.1-64 9.1V194c13.9 1.4 28 .5 41.7-2.6l22.3-5.2z"]},Y6={prefix:"fas",iconName:"caret-right",icon:[256,512,[],"f0da","M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]},Q6={prefix:"fas",iconName:"comments",icon:[640,512,[128490,61670],"f086","M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"]},J6={prefix:"fas",iconName:"people-arrows",icon:[640,512,["people-arrows-left-right"],"e068","M64 64a64 64 0 1 1 128 0A64 64 0 1 1 64 64zM25.9 233.4C29.3 191.9 64 160 105.6 160h44.8c27 0 51 13.4 65.5 34.1c-2.7 1.9-5.2 4-7.5 6.3l-64 64c-21.9 21.9-21.9 57.3 0 79.2L192 391.2V464c0 26.5-21.5 48-48 48H112c-26.5 0-48-21.5-48-48V348.3c-26.5-9.5-44.7-35.8-42.2-65.6l4.1-49.3zM448 64a64 64 0 1 1 128 0A64 64 0 1 1 448 64zM431.6 200.4c-2.3-2.3-4.9-4.4-7.5-6.3c14.5-20.7 38.6-34.1 65.5-34.1h44.8c41.6 0 76.3 31.9 79.7 73.4l4.1 49.3c2.5 29.8-15.7 56.1-42.2 65.6V464c0 26.5-21.5 48-48 48H496c-26.5 0-48-21.5-48-48V391.2l47.6-47.6c21.9-21.9 21.9-57.3 0-79.2l-64-64zM272 240v32h96V240c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-6.9 6.9-17.2 8.9-26.2 5.2s-14.8-12.5-14.8-22.2V336H272v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2z"]},X6={prefix:"fas",iconName:"caret-left",icon:[256,512,[],"f0d9","M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]},Z6={prefix:"fas",iconName:"gamepad",icon:[640,512,[],"f11b","M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"]},eD={prefix:"fas",iconName:"wifi",icon:[640,512,["wifi-3","wifi-strong"],"f1eb","M54.2 202.9C123.2 136.7 216.8 96 320 96s196.8 40.7 265.8 106.9c12.8 12.2 33 11.8 45.2-.9s11.8-33-.9-45.2C549.7 79.5 440.4 32 320 32S90.3 79.5 9.8 156.7C-2.9 169-3.3 189.2 8.9 202s32.5 13.2 45.2 .9zM320 256c56.8 0 108.6 21.1 148.2 56c13.3 11.7 33.5 10.4 45.2-2.8s10.4-33.5-2.8-45.2C459.8 219.2 393 192 320 192s-139.8 27.2-190.5 72c-13.3 11.7-14.5 31.9-2.8 45.2s31.9 14.5 45.2 2.8c39.5-34.9 91.3-56 148.2-56zm64 160a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"]},tD={prefix:"fas",iconName:"pause",icon:[320,512,[9208],"f04c","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"]},nD={prefix:"fas",iconName:"circle-right",icon:[512,512,[61838,"arrow-alt-circle-right"],"f35a","M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"]},sD={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]},iD={prefix:"fas",iconName:"floppy-disk",icon:[448,512,[128190,128426,"save"],"f0c7","M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},rD={prefix:"fas",iconName:"arrow-rotate-left",icon:[512,512,[8634,"arrow-left-rotate","arrow-rotate-back","arrow-rotate-backward","undo"],"f0e2","M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"]},oD={prefix:"fas",iconName:"circle-left",icon:[512,512,[61840,"arrow-alt-circle-left"],"f359","M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z"]},aD={prefix:"fas",iconName:"minus",icon:[448,512,[8211,8722,10134,"subtract"],"f068","M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]},lD={prefix:"fas",iconName:"hands-asl-interpreting",icon:[640,512,["american-sign-language-interpreting","asl-interpreting","hands-american-sign-language-interpreting"],"f2a3","M156.6 46.3c7.9-15.8 1.5-35-14.3-42.9s-35-1.5-42.9 14.3L13.5 189.4C4.6 207.2 0 226.8 0 246.7V256c0 70.7 57.3 128 128 128h72 8v-.3c35.2-2.7 65.4-22.8 82.1-51.7c8.8-15.3 3.6-34.9-11.7-43.7s-34.9-3.6-43.7 11.7c-7 12-19.9 20-34.7 20c-22.1 0-40-17.9-40-40s17.9-40 40-40c14.8 0 27.7 8 34.7 20c8.8 15.3 28.4 20.5 43.7 11.7s20.5-28.4 11.7-43.7c-12.8-22.1-33.6-39.1-58.4-47.1l80.8-22c17-4.6 27.1-22.2 22.5-39.3s-22.2-27.1-39.3-22.5L194.9 124.6l81.6-68c13.6-11.3 15.4-31.5 4.1-45.1S249.1-3.9 235.5 7.4L133.6 92.3l23-46zM483.4 465.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l85.9-171.7c8.9-17.8 13.5-37.4 13.5-57.2V256c0-70.7-57.3-128-128-128H440h-8v.3c-35.2 2.7-65.4 22.8-82.1 51.7c-8.9 15.3-3.6 34.9 11.7 43.7s34.9 3.6 43.7-11.7c7-12 19.9-20 34.7-20c22.1 0 40 17.9 40 40s-17.9 40-40 40c-14.8 0-27.7-8-34.7-20c-8.9-15.3-28.4-20.5-43.7-11.7s-20.5 28.4-11.7 43.7c12.8 22.1 33.6 39.1 58.4 47.1l-80.8 22c-17.1 4.7-27.1 22.2-22.5 39.3s22.2 27.1 39.3 22.5l100.7-27.5-81.6 68c-13.6 11.3-15.4 31.5-4.1 45.1s31.5 15.4 45.1 4.1l101.9-84.9-23 46z"]},cD={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"]},uD={prefix:"fas",iconName:"forward",icon:[512,512,[9193],"f04e","M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4L224 214.3V256v41.7L52.5 440.6zM256 352V256 128 96c0-12.4 7.2-23.7 18.4-29s24.5-3.6 34.1 4.4l192 160c7.3 6.1 11.5 15.1 11.5 24.6s-4.2 18.5-11.5 24.6l-192 160c-9.5 7.9-22.8 9.7-34.1 4.4s-18.4-16.6-18.4-29V352z"]},fD={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},dD={prefix:"fas",iconName:"rotate-right",icon:[512,512,["redo-alt","rotate-forward"],"f2f9","M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"]},hD={prefix:"fas",iconName:"up-long",icon:[320,512,["long-arrow-alt-up"],"f30c","M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192H96l0 288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32l0-288h72c9.6 0 18.2-5.7 22-14.5z"]},pD={prefix:"fas",iconName:"medal",icon:[512,512,[127941],"f5a2","M4.1 38.2C1.4 34.2 0 29.4 0 24.6C0 11 11 0 24.6 0H133.9c11.2 0 21.7 5.9 27.4 15.5l68.5 114.1c-48.2 6.1-91.3 28.6-123.4 61.9L4.1 38.2zm503.7 0L405.6 191.5c-32.1-33.3-75.2-55.8-123.4-61.9L350.7 15.5C356.5 5.9 366.9 0 378.1 0H487.4C501 0 512 11 512 24.6c0 4.8-1.4 9.6-4.1 13.6zM80 336a176 176 0 1 1 352 0A176 176 0 1 1 80 336zm184.4-94.9c-3.4-7-13.3-7-16.8 0l-22.4 45.4c-1.4 2.8-4 4.7-7 5.1L168 298.9c-7.7 1.1-10.7 10.5-5.2 16l36.3 35.4c2.2 2.2 3.2 5.2 2.7 8.3l-8.6 49.9c-1.3 7.6 6.7 13.5 13.6 9.9l44.8-23.6c2.7-1.4 6-1.4 8.7 0l44.8 23.6c6.9 3.6 14.9-2.2 13.6-9.9l-8.6-49.9c-.5-3 .5-6.1 2.7-8.3l36.3-35.4c5.6-5.4 2.5-14.8-5.2-16l-50.1-7.3c-3-.4-5.7-2.4-7-5.1l-22.4-45.4z"]},mD={prefix:"fas",iconName:"play",icon:[384,512,[9654],"f04b","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]},gD={prefix:"fas",iconName:"font",icon:[448,512,[],"f031","M254 52.8C249.3 40.3 237.3 32 224 32s-25.3 8.3-30 20.8L57.8 416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-1.8l18-48H303.8l18 48H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H390.2L254 52.8zM279.8 304H168.2L224 155.1 279.8 304z"]},_D={prefix:"fas",iconName:"skull-crossbones",icon:[448,512,[128369,9760],"f714","M368 128c0 44.4-25.4 83.5-64 106.4V256c0 17.7-14.3 32-32 32H176c-17.7 0-32-14.3-32-32V234.4c-38.6-23-64-62.1-64-106.4C80 57.3 144.5 0 224 0s144 57.3 144 128zM168 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM3.4 273.7c7.9-15.8 27.1-22.2 42.9-14.3L224 348.2l177.7-88.8c15.8-7.9 35-1.5 42.9 14.3s1.5 35-14.3 42.9L295.6 384l134.8 67.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3L224 419.8 46.3 508.6c-15.8 7.9-35 1.5-42.9-14.3s-1.5-35 14.3-42.9L152.4 384 17.7 316.6C1.9 308.7-4.5 289.5 3.4 273.7z"]},vD={prefix:"fas",iconName:"list-ul",icon:[512,512,["list-dots"],"f0ca","M64 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM64 464a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm48-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},yD={prefix:"fas",iconName:"down-long",icon:[320,512,["long-arrow-alt-down"],"f309","M2 334.5c-3.8 8.8-2 19 4.6 26l136 144c4.5 4.8 10.8 7.5 17.4 7.5s12.9-2.7 17.4-7.5l136-144c6.6-7 8.4-17.2 4.6-26s-12.5-14.5-22-14.5l-72 0 0-288c0-17.7-14.3-32-32-32L128 0C110.3 0 96 14.3 96 32l0 288-72 0c-9.6 0-18.2 5.7-22 14.5z"]},bD={prefix:"fas",iconName:"ranking-star",icon:[640,512,[],"e561","M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"]},wD={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]},CD={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7v72V368c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V147L192 223.8V432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6V200 128c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"]},kD={prefix:"fas",iconName:"up-right-and-down-left-from-center",icon:[512,512,["expand-alt"],"f424","M344 0H488c13.3 0 24 10.7 24 24V168c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-39-39-87 87c-9.4 9.4-24.6 9.4-33.9 0l-32-32c-9.4-9.4-9.4-24.6 0-33.9l87-87L327 41c-6.9-6.9-8.9-17.2-5.2-26.2S334.3 0 344 0zM168 512H24c-13.3 0-24-10.7-24-24V344c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2l39 39 87-87c9.4-9.4 24.6-9.4 33.9 0l32 32c9.4 9.4 9.4 24.6 0 33.9l-87 87 39 39c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8z"]},ED={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM504 312V248H440c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V136c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H552v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},TD={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},ID={prefix:"far",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M170.5 51.6L151.5 80h145l-19-28.4c-1.5-2.2-4-3.6-6.7-3.6H177.1c-2.7 0-5.2 1.3-6.7 3.6zm147-26.6L354.2 80H368h48 8c13.3 0 24 10.7 24 24s-10.7 24-24 24h-8V432c0 44.2-35.8 80-80 80H112c-44.2 0-80-35.8-80-80V128H24c-13.3 0-24-10.7-24-24S10.7 80 24 80h8H80 93.8l36.7-55.1C140.9 9.4 158.4 0 177.1 0h93.7c18.7 0 36.2 9.4 46.6 24.9zM80 128V432c0 17.7 14.3 32 32 32H336c17.7 0 32-14.3 32-32V128H80zm80 64V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16zm80 0V400c0 8.8-7.2 16-16 16s-16-7.2-16-16V192c0-8.8 7.2-16 16-16s16 7.2 16 16z"]},xD={prefix:"far",iconName:"pen-to-square",icon:[512,512,["edit"],"f044","M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"]},SD={prefix:"far",iconName:"rectangle-list",icon:[576,512,["list-alt"],"f022","M64 80c-8.8 0-16 7.2-16 16V416c0 8.8 7.2 16 16 16H512c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16H64zM0 96C0 60.7 28.7 32 64 32H512c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm96 64a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm104 0c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm0 96c0-13.3 10.7-24 24-24H448c13.3 0 24 10.7 24 24s-10.7 24-24 24H224c-13.3 0-24-10.7-24-24zm-72-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM96 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]};O6.add(kD,X6,Y6,uD,bD,Z6,pD,lD,gD,CD,wD,aD,xD,fD,cD,ED,ID,K6,iD,dD,mD,tD,oD,nD,sD,hD,yD,_D,eD,J6,Q6,vD,SD,rD,TD);const Ku=V1(_I).component("font-awesome-icon",q6);Ku.use(q1());Ku.use(tN);Ku.mount("#app");
