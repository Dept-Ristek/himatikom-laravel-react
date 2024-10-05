import{r as i,j as H,d as Oe,c as Te,$ as Le}from"./app-CbQMMcCF.js";import{e as I,P as K,a as z,f as Me,d as j}from"./index-DEn8AMXp.js";import{u as X}from"./utils-BvcvHkli.js";function ke(e,t=globalThis==null?void 0:globalThis.document){const n=I(e);i.useEffect(()=>{const r=a=>{a.key==="Escape"&&n(a)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var Ie="DismissableLayer",te="dismissableLayer.update",De="dismissableLayer.pointerDownOutside",xe="dismissableLayer.focusOutside",re,he=i.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),pe=i.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:a,onFocusOutside:c,onInteractOutside:l,onDismiss:o,...h}=e,s=i.useContext(he),[d,f]=i.useState(null),m=(d==null?void 0:d.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=i.useState({}),C=X(t,E=>f(E)),u=Array.from(s.layers),[v]=[...s.layersWithOutsidePointerEventsDisabled].slice(-1),g=u.indexOf(v),w=d?u.indexOf(d):-1,y=s.layersWithOutsidePointerEventsDisabled.size>0,b=w>=g,S=We(E=>{const A=E.target,k=[...s.branches].some(Y=>Y.contains(A));!b||k||(a==null||a(E),l==null||l(E),E.defaultPrevented||o==null||o())},m),N=Be(E=>{const A=E.target;[...s.branches].some(Y=>Y.contains(A))||(c==null||c(E),l==null||l(E),E.defaultPrevented||o==null||o())},m);return ke(E=>{w===s.layers.size-1&&(r==null||r(E),!E.defaultPrevented&&o&&(E.preventDefault(),o()))},m),i.useEffect(()=>{if(d)return n&&(s.layersWithOutsidePointerEventsDisabled.size===0&&(re=m.body.style.pointerEvents,m.body.style.pointerEvents="none"),s.layersWithOutsidePointerEventsDisabled.add(d)),s.layers.add(d),ae(),()=>{n&&s.layersWithOutsidePointerEventsDisabled.size===1&&(m.body.style.pointerEvents=re)}},[d,m,n,s]),i.useEffect(()=>()=>{d&&(s.layers.delete(d),s.layersWithOutsidePointerEventsDisabled.delete(d),ae())},[d,s]),i.useEffect(()=>{const E=()=>p({});return document.addEventListener(te,E),()=>document.removeEventListener(te,E)},[]),H.jsx(K.div,{...h,ref:C,style:{pointerEvents:y?b?"auto":"none":void 0,...e.style},onFocusCapture:z(e.onFocusCapture,N.onFocusCapture),onBlurCapture:z(e.onBlurCapture,N.onBlurCapture),onPointerDownCapture:z(e.onPointerDownCapture,S.onPointerDownCapture)})});pe.displayName=Ie;var Fe="DismissableLayerBranch",ge=i.forwardRef((e,t)=>{const n=i.useContext(he),r=i.useRef(null),a=X(t,r);return i.useEffect(()=>{const c=r.current;if(c)return n.branches.add(c),()=>{n.branches.delete(c)}},[n.branches]),H.jsx(K.div,{...e,ref:a})});ge.displayName=Fe;function We(e,t=globalThis==null?void 0:globalThis.document){const n=I(e),r=i.useRef(!1),a=i.useRef(()=>{});return i.useEffect(()=>{const c=o=>{if(o.target&&!r.current){let h=function(){Ee(De,n,s,{discrete:!0})};const s={originalEvent:o};o.pointerType==="touch"?(t.removeEventListener("click",a.current),a.current=h,t.addEventListener("click",a.current,{once:!0})):h()}else t.removeEventListener("click",a.current);r.current=!1},l=window.setTimeout(()=>{t.addEventListener("pointerdown",c)},0);return()=>{window.clearTimeout(l),t.removeEventListener("pointerdown",c),t.removeEventListener("click",a.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function Be(e,t=globalThis==null?void 0:globalThis.document){const n=I(e),r=i.useRef(!1);return i.useEffect(()=>{const a=c=>{c.target&&!r.current&&Ee(xe,n,{originalEvent:c},{discrete:!1})};return t.addEventListener("focusin",a),()=>t.removeEventListener("focusin",a)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function ae(){const e=new CustomEvent(te);document.dispatchEvent(e)}function Ee(e,t,n,{discrete:r}){const a=n.originalEvent.target,c=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&a.addEventListener(e,t,{once:!0}),r?Me(a,c):a.dispatchEvent(c)}var Xt=pe,Vt=ge,Ue="Portal",_e=i.forwardRef((e,t)=>{var o;const{container:n,...r}=e,[a,c]=i.useState(!1);j(()=>c(!0),[]);const l=n||a&&((o=globalThis==null?void 0:globalThis.document)==null?void 0:o.body);return l?Oe.createPortal(H.jsx(K.div,{...r,ref:t}),l):null});_e.displayName=Ue;function je(e,t){return i.useReducer((n,r)=>t[n][r]??n,e)}var He=e=>{const{present:t,children:n}=e,r=Ke(t),a=typeof n=="function"?n({present:r.isPresent}):i.Children.only(n),c=X(r.ref,Xe(a));return typeof n=="function"||r.isPresent?i.cloneElement(a,{ref:c}):null};He.displayName="Presence";function Ke(e){const[t,n]=i.useState(),r=i.useRef({}),a=i.useRef(e),c=i.useRef("none"),l=e?"mounted":"unmounted",[o,h]=je(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return i.useEffect(()=>{const s=D(r.current);c.current=o==="mounted"?s:"none"},[o]),j(()=>{const s=r.current,d=a.current;if(d!==e){const m=c.current,p=D(s);e?h("MOUNT"):p==="none"||(s==null?void 0:s.display)==="none"?h("UNMOUNT"):h(d&&m!==p?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,h]),j(()=>{if(t){const s=f=>{const p=D(r.current).includes(f.animationName);f.target===t&&p&&Te.flushSync(()=>h("ANIMATION_END"))},d=f=>{f.target===t&&(c.current=D(r.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",s),t.addEventListener("animationend",s),()=>{t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",s),t.removeEventListener("animationend",s)}}else h("ANIMATION_END")},[t,h]),{isPresent:["mounted","unmountSuspended"].includes(o),ref:i.useCallback(s=>{s&&(r.current=getComputedStyle(s)),n(s)},[])}}function D(e){return(e==null?void 0:e.animationName)||"none"}function Xe(e){var r,a;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var $=0;function Yt(){i.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??oe()),document.body.insertAdjacentElement("beforeend",e[1]??oe()),$++,()=>{$===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),$--}},[])}function oe(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}var G="focusScope.autoFocusOnMount",Z="focusScope.autoFocusOnUnmount",ie={bubbles:!1,cancelable:!0},Ve="FocusScope",Ye=i.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:a,onUnmountAutoFocus:c,...l}=e,[o,h]=i.useState(null),s=I(a),d=I(c),f=i.useRef(null),m=X(t,u=>h(u)),p=i.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;i.useEffect(()=>{if(r){let u=function(y){if(p.paused||!o)return;const b=y.target;o.contains(b)?f.current=b:R(f.current,{select:!0})},v=function(y){if(p.paused||!o)return;const b=y.relatedTarget;b!==null&&(o.contains(b)||R(f.current,{select:!0}))},g=function(y){if(document.activeElement===document.body)for(const S of y)S.removedNodes.length>0&&R(o)};document.addEventListener("focusin",u),document.addEventListener("focusout",v);const w=new MutationObserver(g);return o&&w.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",u),document.removeEventListener("focusout",v),w.disconnect()}}},[r,o,p.paused]),i.useEffect(()=>{if(o){ue.add(p);const u=document.activeElement;if(!o.contains(u)){const g=new CustomEvent(G,ie);o.addEventListener(G,s),o.dispatchEvent(g),g.defaultPrevented||(ze(Qe(ye(o)),{select:!0}),document.activeElement===u&&R(o))}return()=>{o.removeEventListener(G,s),setTimeout(()=>{const g=new CustomEvent(Z,ie);o.addEventListener(Z,d),o.dispatchEvent(g),g.defaultPrevented||R(u??document.body,{select:!0}),o.removeEventListener(Z,d),ue.remove(p)},0)}}},[o,s,d,p]);const C=i.useCallback(u=>{if(!n&&!r||p.paused)return;const v=u.key==="Tab"&&!u.altKey&&!u.ctrlKey&&!u.metaKey,g=document.activeElement;if(v&&g){const w=u.currentTarget,[y,b]=$e(w);y&&b?!u.shiftKey&&g===b?(u.preventDefault(),n&&R(y,{select:!0})):u.shiftKey&&g===y&&(u.preventDefault(),n&&R(b,{select:!0})):g===w&&u.preventDefault()}},[n,r,p.paused]);return H.jsx(K.div,{tabIndex:-1,...l,ref:m,onKeyDown:C})});Ye.displayName=Ve;function ze(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(R(r,{select:t}),document.activeElement!==n)return}function $e(e){const t=ye(e),n=ce(t,e),r=ce(t.reverse(),e);return[n,r]}function ye(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const a=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||a?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function ce(e,t){for(const n of e)if(!Ge(n,{upTo:t}))return n}function Ge(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function Ze(e){return e instanceof HTMLInputElement&&"select"in e}function R(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&Ze(e)&&t&&e.select()}}var ue=qe();function qe(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=se(e,t),e.unshift(t)},remove(t){var n;e=se(e,t),(n=e[0])==null||n.resume()}}}function se(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function Qe(e){return e.filter(t=>t.tagName!=="A")}var Je=Le.useId||(()=>{}),et=0;function zt(e){const[t,n]=i.useState(Je());return j(()=>{n(r=>r??String(et++))},[e]),t?`radix-${t}`:""}var tt=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},O=new WeakMap,x=new WeakMap,F={},q=0,be=function(e){return e&&(e.host||be(e.parentNode))},nt=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=be(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},rt=function(e,t,n,r){var a=nt(t,Array.isArray(e)?e:[e]);F[n]||(F[n]=new WeakMap);var c=F[n],l=[],o=new Set,h=new Set(a),s=function(f){!f||o.has(f)||(o.add(f),s(f.parentNode))};a.forEach(s);var d=function(f){!f||h.has(f)||Array.prototype.forEach.call(f.children,function(m){if(o.has(m))d(m);else try{var p=m.getAttribute(r),C=p!==null&&p!=="false",u=(O.get(m)||0)+1,v=(c.get(m)||0)+1;O.set(m,u),c.set(m,v),l.push(m),u===1&&C&&x.set(m,!0),v===1&&m.setAttribute(n,"true"),C||m.setAttribute(r,"true")}catch(g){console.error("aria-hidden: cannot operate on ",m,g)}})};return d(t),o.clear(),q++,function(){l.forEach(function(f){var m=O.get(f)-1,p=c.get(f)-1;O.set(f,m),c.set(f,p),m||(x.has(f)||f.removeAttribute(r),x.delete(f)),p||f.removeAttribute(n)}),q--,q||(O=new WeakMap,O=new WeakMap,x=new WeakMap,F={})}},$t=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),a=tt(e);return a?(r.push.apply(r,Array.from(a.querySelectorAll("[aria-live]"))),rt(r,a,n,"aria-hidden")):function(){return null}},P=function(){return P=Object.assign||function(t){for(var n,r=1,a=arguments.length;r<a;r++){n=arguments[r];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(t[c]=n[c])}return t},P.apply(this,arguments)};function Se(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]]);return n}function at(e,t,n){if(n||arguments.length===2)for(var r=0,a=t.length,c;r<a;r++)(c||!(r in t))&&(c||(c=Array.prototype.slice.call(t,0,r)),c[r]=t[r]);return e.concat(c||Array.prototype.slice.call(t))}var U="right-scroll-bar-position",_="width-before-scroll-bar",ot="with-scroll-bars-hidden",it="--removed-body-scroll-bar-size";function Q(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function ct(e,t){var n=i.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var a=n.value;a!==r&&(n.value=r,n.callback(r,a))}}}})[0];return n.callback=t,n.facade}var ut=typeof window<"u"?i.useLayoutEffect:i.useEffect,le=new WeakMap;function st(e,t){var n=ct(null,function(r){return e.forEach(function(a){return Q(a,r)})});return ut(function(){var r=le.get(n);if(r){var a=new Set(r),c=new Set(e),l=n.current;a.forEach(function(o){c.has(o)||Q(o,null)}),c.forEach(function(o){a.has(o)||Q(o,l)})}le.set(n,e)},[e]),n}function lt(e){return e}function dt(e,t){t===void 0&&(t=lt);var n=[],r=!1,a={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(c){var l=t(c,r);return n.push(l),function(){n=n.filter(function(o){return o!==l})}},assignSyncMedium:function(c){for(r=!0;n.length;){var l=n;n=[],l.forEach(c)}n={push:function(o){return c(o)},filter:function(){return n}}},assignMedium:function(c){r=!0;var l=[];if(n.length){var o=n;n=[],o.forEach(c),l=n}var h=function(){var d=l;l=[],d.forEach(c)},s=function(){return Promise.resolve().then(h)};s(),n={push:function(d){l.push(d),s()},filter:function(d){return l=l.filter(d),n}}}};return a}function ft(e){e===void 0&&(e={});var t=dt(null);return t.options=P({async:!0,ssr:!1},e),t}var we=function(e){var t=e.sideCar,n=Se(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return i.createElement(r,P({},n))};we.isSideCarExport=!0;function vt(e,t){return e.useMedium(t),we}var Ce=ft(),J=function(){},V=i.forwardRef(function(e,t){var n=i.useRef(null),r=i.useState({onScrollCapture:J,onWheelCapture:J,onTouchMoveCapture:J}),a=r[0],c=r[1],l=e.forwardProps,o=e.children,h=e.className,s=e.removeScrollBar,d=e.enabled,f=e.shards,m=e.sideCar,p=e.noIsolation,C=e.inert,u=e.allowPinchZoom,v=e.as,g=v===void 0?"div":v,w=e.gapMode,y=Se(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as","gapMode"]),b=m,S=st([n,t]),N=P(P({},y),a);return i.createElement(i.Fragment,null,d&&i.createElement(b,{sideCar:Ce,removeScrollBar:s,shards:f,noIsolation:p,inert:C,setCallbacks:c,allowPinchZoom:!!u,lockRef:n,gapMode:w}),l?i.cloneElement(i.Children.only(o),P(P({},N),{ref:S})):i.createElement(g,P({},N,{className:h,ref:S}),o))});V.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};V.classNames={fullWidth:_,zeroRight:U};var mt=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function ht(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=mt();return t&&e.setAttribute("nonce",t),e}function pt(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function gt(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var Et=function(){var e=0,t=null;return{add:function(n){e==0&&(t=ht())&&(pt(t,n),gt(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},yt=function(){var e=Et();return function(t,n){i.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},Pe=function(){var e=yt(),t=function(n){var r=n.styles,a=n.dynamic;return e(r,a),null};return t},bt={left:0,top:0,right:0,gap:0},ee=function(e){return parseInt(e||"",10)||0},St=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],a=t[e==="padding"?"paddingRight":"marginRight"];return[ee(n),ee(r),ee(a)]},wt=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return bt;var t=St(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},Ct=Pe(),M="data-scroll-locked",Pt=function(e,t,n,r){var a=e.left,c=e.top,l=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(ot,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(o,"px ").concat(r,`;
  }
  body[`).concat(M,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(a,`px;
    padding-top: `).concat(c,`px;
    padding-right: `).concat(l,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(U,` {
    right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(_,` {
    margin-right: `).concat(o,"px ").concat(r,`;
  }
  
  .`).concat(U," .").concat(U,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(_," .").concat(_,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(M,`] {
    `).concat(it,": ").concat(o,`px;
  }
`)},de=function(){var e=parseInt(document.body.getAttribute(M)||"0",10);return isFinite(e)?e:0},Nt=function(){i.useEffect(function(){return document.body.setAttribute(M,(de()+1).toString()),function(){var e=de()-1;e<=0?document.body.removeAttribute(M):document.body.setAttribute(M,e.toString())}},[])},At=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,a=r===void 0?"margin":r;Nt();var c=i.useMemo(function(){return wt(a)},[a]);return i.createElement(Ct,{styles:Pt(c,!t,a,n?"":"!important")})},ne=!1;if(typeof window<"u")try{var W=Object.defineProperty({},"passive",{get:function(){return ne=!0,!0}});window.addEventListener("test",W,W),window.removeEventListener("test",W,W)}catch{ne=!1}var T=ne?{passive:!1}:!1,Rt=function(e){return e.tagName==="TEXTAREA"},Ne=function(e,t){var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!Rt(e)&&n[t]==="visible")},Ot=function(e){return Ne(e,"overflowY")},Tt=function(e){return Ne(e,"overflowX")},fe=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var a=Ae(e,r);if(a){var c=Re(e,r),l=c[1],o=c[2];if(l>o)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},Lt=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},Mt=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},Ae=function(e,t){return e==="v"?Ot(t):Tt(t)},Re=function(e,t){return e==="v"?Lt(t):Mt(t)},kt=function(e,t){return e==="h"&&t==="rtl"?-1:1},It=function(e,t,n,r,a){var c=kt(e,window.getComputedStyle(t).direction),l=c*r,o=n.target,h=t.contains(o),s=!1,d=l>0,f=0,m=0;do{var p=Re(e,o),C=p[0],u=p[1],v=p[2],g=u-v-c*C;(C||g)&&Ae(e,o)&&(f+=g,m+=C),o instanceof ShadowRoot?o=o.host:o=o.parentNode}while(!h&&o!==document.body||h&&(t.contains(o)||t===o));return(d&&(Math.abs(f)<1||!a)||!d&&(Math.abs(m)<1||!a))&&(s=!0),s},B=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},ve=function(e){return[e.deltaX,e.deltaY]},me=function(e){return e&&"current"in e?e.current:e},Dt=function(e,t){return e[0]===t[0]&&e[1]===t[1]},xt=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},Ft=0,L=[];function Wt(e){var t=i.useRef([]),n=i.useRef([0,0]),r=i.useRef(),a=i.useState(Ft++)[0],c=i.useState(Pe)[0],l=i.useRef(e);i.useEffect(function(){l.current=e},[e]),i.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(a));var u=at([e.lockRef.current],(e.shards||[]).map(me),!0).filter(Boolean);return u.forEach(function(v){return v.classList.add("allow-interactivity-".concat(a))}),function(){document.body.classList.remove("block-interactivity-".concat(a)),u.forEach(function(v){return v.classList.remove("allow-interactivity-".concat(a))})}}},[e.inert,e.lockRef.current,e.shards]);var o=i.useCallback(function(u,v){if("touches"in u&&u.touches.length===2)return!l.current.allowPinchZoom;var g=B(u),w=n.current,y="deltaX"in u?u.deltaX:w[0]-g[0],b="deltaY"in u?u.deltaY:w[1]-g[1],S,N=u.target,E=Math.abs(y)>Math.abs(b)?"h":"v";if("touches"in u&&E==="h"&&N.type==="range")return!1;var A=fe(E,N);if(!A)return!0;if(A?S=E:(S=E==="v"?"h":"v",A=fe(E,N)),!A)return!1;if(!r.current&&"changedTouches"in u&&(y||b)&&(r.current=S),!S)return!0;var k=r.current||S;return It(k,v,u,k==="h"?y:b,!0)},[]),h=i.useCallback(function(u){var v=u;if(!(!L.length||L[L.length-1]!==c)){var g="deltaY"in v?ve(v):B(v),w=t.current.filter(function(S){return S.name===v.type&&(S.target===v.target||v.target===S.shadowParent)&&Dt(S.delta,g)})[0];if(w&&w.should){v.cancelable&&v.preventDefault();return}if(!w){var y=(l.current.shards||[]).map(me).filter(Boolean).filter(function(S){return S.contains(v.target)}),b=y.length>0?o(v,y[0]):!l.current.noIsolation;b&&v.cancelable&&v.preventDefault()}}},[]),s=i.useCallback(function(u,v,g,w){var y={name:u,delta:v,target:g,should:w,shadowParent:Bt(g)};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(b){return b!==y})},1)},[]),d=i.useCallback(function(u){n.current=B(u),r.current=void 0},[]),f=i.useCallback(function(u){s(u.type,ve(u),u.target,o(u,e.lockRef.current))},[]),m=i.useCallback(function(u){s(u.type,B(u),u.target,o(u,e.lockRef.current))},[]);i.useEffect(function(){return L.push(c),e.setCallbacks({onScrollCapture:f,onWheelCapture:f,onTouchMoveCapture:m}),document.addEventListener("wheel",h,T),document.addEventListener("touchmove",h,T),document.addEventListener("touchstart",d,T),function(){L=L.filter(function(u){return u!==c}),document.removeEventListener("wheel",h,T),document.removeEventListener("touchmove",h,T),document.removeEventListener("touchstart",d,T)}},[]);var p=e.removeScrollBar,C=e.inert;return i.createElement(i.Fragment,null,C?i.createElement(c,{styles:xt(a)}):null,p?i.createElement(At,{gapMode:e.gapMode}):null)}function Bt(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const Ut=vt(Ce,Wt);var _t=i.forwardRef(function(e,t){return i.createElement(V,P({},e,{ref:t,sideCar:Ut}))});_t.classNames=V.classNames;export{Vt as B,pe as D,Ye as F,He as P,_t as R,Se as _,zt as a,_e as b,Xt as c,ft as d,st as e,P as f,_ as g,$t as h,at as i,At as j,vt as k,Pe as s,Yt as u,U as z};
