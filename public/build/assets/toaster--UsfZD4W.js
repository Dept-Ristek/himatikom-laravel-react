import{r,j as n,d as Ae}from"./app-BC__SOPf.js";import{u as je}from"./use-toast-jBdQ0q1s.js";import{d as Fe,b as _e}from"./index-D6mfvjMq.js";import{P as A,c as De,u as Le,e as H,a as P,d as Me,f as Oe}from"./index-Dm8DcO5X.js";import{u as se,c as _,a as ke}from"./utils-6PJseIst.js";import{B as Ve,P as Ke,R as $e,a as He}from"./index-CZhsWJq9.js";var We="VisuallyHidden",J=r.forwardRef((e,t)=>n.jsx(A.span,{...e,ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}));J.displayName=We;var Q="ToastProvider",[Z,Ue,Xe]=Fe("Toast"),[re,xt]=De("Toast",[Xe]),[Ye,W]=re(Q),ne=e=>{const{__scopeToast:t,label:o="Notification",duration:s=5e3,swipeDirection:d="right",swipeThreshold:u=50,children:p}=e,[v,w]=r.useState(null),[a,b]=r.useState(0),y=r.useRef(!1),D=r.useRef(!1);return o.trim()||console.error(`Invalid prop \`label\` supplied to \`${Q}\`. Expected non-empty \`string\`.`),n.jsx(Z.Provider,{scope:t,children:n.jsx(Ye,{scope:t,label:o,duration:s,swipeDirection:d,swipeThreshold:u,toastCount:a,viewport:v,onViewportChange:w,onToastAdd:r.useCallback(()=>b(R=>R+1),[]),onToastRemove:r.useCallback(()=>b(R=>R-1),[]),isFocusedToastEscapeKeyDownRef:y,isClosePausedRef:D,children:p})})};ne.displayName=Q;var ae="ToastViewport",Be=["F8"],q="toast.viewportPause",z="toast.viewportResume",ie=r.forwardRef((e,t)=>{const{__scopeToast:o,hotkey:s=Be,label:d="Notifications ({hotkey})",...u}=e,p=W(ae,o),v=Ue(o),w=r.useRef(null),a=r.useRef(null),b=r.useRef(null),y=r.useRef(null),D=se(t,y,p.onViewportChange),R=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),N=p.toastCount>0;r.useEffect(()=>{const c=E=>{var m;s.length!==0&&s.every(x=>E[x]||E.code===x)&&((m=y.current)==null||m.focus())};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[s]),r.useEffect(()=>{const c=w.current,E=y.current;if(N&&c&&E){const f=()=>{if(!p.isClosePausedRef.current){const h=new CustomEvent(q);E.dispatchEvent(h),p.isClosePausedRef.current=!0}},m=()=>{if(p.isClosePausedRef.current){const h=new CustomEvent(z);E.dispatchEvent(h),p.isClosePausedRef.current=!1}},x=h=>{!c.contains(h.relatedTarget)&&m()},T=()=>{c.contains(document.activeElement)||m()};return c.addEventListener("focusin",f),c.addEventListener("focusout",x),c.addEventListener("pointermove",f),c.addEventListener("pointerleave",T),window.addEventListener("blur",f),window.addEventListener("focus",m),()=>{c.removeEventListener("focusin",f),c.removeEventListener("focusout",x),c.removeEventListener("pointermove",f),c.removeEventListener("pointerleave",T),window.removeEventListener("blur",f),window.removeEventListener("focus",m)}}},[N,p.isClosePausedRef]);const l=r.useCallback(({tabbingDirection:c})=>{const f=v().map(m=>{const x=m.ref.current,T=[x,...at(x)];return c==="forwards"?T:T.reverse()});return(c==="forwards"?f.reverse():f).flat()},[v]);return r.useEffect(()=>{const c=y.current;if(c){const E=f=>{var T,h,S;const m=f.altKey||f.ctrlKey||f.metaKey;if(f.key==="Tab"&&!m){const L=document.activeElement,j=f.shiftKey;if(f.target===c&&j){(T=a.current)==null||T.focus();return}const I=l({tabbingDirection:j?"backwards":"forwards"}),k=I.findIndex(i=>i===L);B(I.slice(k+1))?f.preventDefault():j?(h=a.current)==null||h.focus():(S=b.current)==null||S.focus()}};return c.addEventListener("keydown",E),()=>c.removeEventListener("keydown",E)}},[v,l]),n.jsxs(Ve,{ref:w,role:"region","aria-label":d.replace("{hotkey}",R),tabIndex:-1,style:{pointerEvents:N?void 0:"none"},children:[N&&n.jsx(G,{ref:a,onFocusFromOutsideViewport:()=>{const c=l({tabbingDirection:"forwards"});B(c)}}),n.jsx(Z.Slot,{scope:o,children:n.jsx(A.ol,{tabIndex:-1,...u,ref:D})}),N&&n.jsx(G,{ref:b,onFocusFromOutsideViewport:()=>{const c=l({tabbingDirection:"backwards"});B(c)}})]})});ie.displayName=ae;var ce="ToastFocusProxy",G=r.forwardRef((e,t)=>{const{__scopeToast:o,onFocusFromOutsideViewport:s,...d}=e,u=W(ce,o);return n.jsx(J,{"aria-hidden":!0,tabIndex:0,...d,ref:t,style:{position:"fixed"},onFocus:p=>{var a;const v=p.relatedTarget;!((a=u.viewport)!=null&&a.contains(v))&&s()}})});G.displayName=ce;var U="Toast",qe="toast.swipeStart",ze="toast.swipeMove",Ge="toast.swipeCancel",Je="toast.swipeEnd",de=r.forwardRef((e,t)=>{const{forceMount:o,open:s,defaultOpen:d,onOpenChange:u,...p}=e,[v=!0,w]=Le({prop:s,defaultProp:d,onChange:u});return n.jsx(Ke,{present:o||v,children:n.jsx(et,{open:v,...p,ref:t,onClose:()=>w(!1),onPause:H(e.onPause),onResume:H(e.onResume),onSwipeStart:P(e.onSwipeStart,a=>{a.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:P(e.onSwipeMove,a=>{const{x:b,y}=a.detail.delta;a.currentTarget.setAttribute("data-swipe","move"),a.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${b}px`),a.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${y}px`)}),onSwipeCancel:P(e.onSwipeCancel,a=>{a.currentTarget.setAttribute("data-swipe","cancel"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),a.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:P(e.onSwipeEnd,a=>{const{x:b,y}=a.detail.delta;a.currentTarget.setAttribute("data-swipe","end"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),a.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),a.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${b}px`),a.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${y}px`),w(!1)})})})});de.displayName=U;var[Qe,Ze]=re(U,{onClose(){}}),et=r.forwardRef((e,t)=>{const{__scopeToast:o,type:s="foreground",duration:d,open:u,onClose:p,onEscapeKeyDown:v,onPause:w,onResume:a,onSwipeStart:b,onSwipeMove:y,onSwipeCancel:D,onSwipeEnd:R,...N}=e,l=W(U,o),[c,E]=r.useState(null),f=se(t,i=>E(i)),m=r.useRef(null),x=r.useRef(null),T=d||l.duration,h=r.useRef(0),S=r.useRef(T),L=r.useRef(0),{onToastAdd:j,onToastRemove:X}=l,F=H(()=>{var g;(c==null?void 0:c.contains(document.activeElement))&&((g=l.viewport)==null||g.focus()),p()}),I=r.useCallback(i=>{!i||i===1/0||(window.clearTimeout(L.current),h.current=new Date().getTime(),L.current=window.setTimeout(F,i))},[F]);r.useEffect(()=>{const i=l.viewport;if(i){const g=()=>{I(S.current),a==null||a()},C=()=>{const M=new Date().getTime()-h.current;S.current=S.current-M,window.clearTimeout(L.current),w==null||w()};return i.addEventListener(q,C),i.addEventListener(z,g),()=>{i.removeEventListener(q,C),i.removeEventListener(z,g)}}},[l.viewport,T,w,a,I]),r.useEffect(()=>{u&&!l.isClosePausedRef.current&&I(T)},[u,T,l.isClosePausedRef,I]),r.useEffect(()=>(j(),()=>X()),[j,X]);const k=r.useMemo(()=>c?we(c):null,[c]);return l.viewport?n.jsxs(n.Fragment,{children:[k&&n.jsx(tt,{__scopeToast:o,role:"status","aria-live":s==="foreground"?"assertive":"polite","aria-atomic":!0,children:k}),n.jsx(Qe,{scope:o,onClose:F,children:Ae.createPortal(n.jsx(Z.ItemSlot,{scope:o,children:n.jsx($e,{asChild:!0,onEscapeKeyDown:P(v,()=>{l.isFocusedToastEscapeKeyDownRef.current||F(),l.isFocusedToastEscapeKeyDownRef.current=!1}),children:n.jsx(A.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":u?"open":"closed","data-swipe-direction":l.swipeDirection,...N,ref:f,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:P(e.onKeyDown,i=>{i.key==="Escape"&&(v==null||v(i.nativeEvent),i.nativeEvent.defaultPrevented||(l.isFocusedToastEscapeKeyDownRef.current=!0,F()))}),onPointerDown:P(e.onPointerDown,i=>{i.button===0&&(m.current={x:i.clientX,y:i.clientY})}),onPointerMove:P(e.onPointerMove,i=>{if(!m.current)return;const g=i.clientX-m.current.x,C=i.clientY-m.current.y,M=!!x.current,O=["left","right"].includes(l.swipeDirection),V=["left","up"].includes(l.swipeDirection)?Math.min:Math.max,Se=O?V(0,g):0,Ie=O?0:V(0,C),Y=i.pointerType==="touch"?10:2,K={x:Se,y:Ie},te={originalEvent:i,delta:K};M?(x.current=K,$(ze,y,te,{discrete:!1})):oe(K,l.swipeDirection,Y)?(x.current=K,$(qe,b,te,{discrete:!1}),i.target.setPointerCapture(i.pointerId)):(Math.abs(g)>Y||Math.abs(C)>Y)&&(m.current=null)}),onPointerUp:P(e.onPointerUp,i=>{const g=x.current,C=i.target;if(C.hasPointerCapture(i.pointerId)&&C.releasePointerCapture(i.pointerId),x.current=null,m.current=null,g){const M=i.currentTarget,O={originalEvent:i,delta:g};oe(g,l.swipeDirection,l.swipeThreshold)?$(Je,R,O,{discrete:!0}):$(Ge,D,O,{discrete:!0}),M.addEventListener("click",V=>V.preventDefault(),{once:!0})}})})})}),l.viewport)})]}):null}),tt=e=>{const{__scopeToast:t,children:o,...s}=e,d=W(U,t),[u,p]=r.useState(!1),[v,w]=r.useState(!1);return rt(()=>p(!0)),r.useEffect(()=>{const a=window.setTimeout(()=>w(!0),1e3);return()=>window.clearTimeout(a)},[]),v?null:n.jsx(He,{asChild:!0,children:n.jsx(J,{...s,children:u&&n.jsxs(n.Fragment,{children:[d.label," ",o]})})})},ot="ToastTitle",ue=r.forwardRef((e,t)=>{const{__scopeToast:o,...s}=e;return n.jsx(A.div,{...s,ref:t})});ue.displayName=ot;var st="ToastDescription",le=r.forwardRef((e,t)=>{const{__scopeToast:o,...s}=e;return n.jsx(A.div,{...s,ref:t})});le.displayName=st;var pe="ToastAction",fe=r.forwardRef((e,t)=>{const{altText:o,...s}=e;return o.trim()?n.jsx(ve,{altText:o,asChild:!0,children:n.jsx(ee,{...s,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${pe}\`. Expected non-empty \`string\`.`),null)});fe.displayName=pe;var me="ToastClose",ee=r.forwardRef((e,t)=>{const{__scopeToast:o,...s}=e,d=Ze(me,o);return n.jsx(ve,{asChild:!0,children:n.jsx(A.button,{type:"button",...s,ref:t,onClick:P(e.onClick,d.onClose)})})});ee.displayName=me;var ve=r.forwardRef((e,t)=>{const{__scopeToast:o,altText:s,...d}=e;return n.jsx(A.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":s||void 0,...d,ref:t})});function we(e){const t=[];return Array.from(e.childNodes).forEach(s=>{if(s.nodeType===s.TEXT_NODE&&s.textContent&&t.push(s.textContent),nt(s)){const d=s.ariaHidden||s.hidden||s.style.display==="none",u=s.dataset.radixToastAnnounceExclude==="";if(!d)if(u){const p=s.dataset.radixToastAnnounceAlt;p&&t.push(p)}else t.push(...we(s))}}),t}function $(e,t,o,{discrete:s}){const d=o.originalEvent.currentTarget,u=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:o});t&&d.addEventListener(e,t,{once:!0}),s?Oe(d,u):d.dispatchEvent(u)}var oe=(e,t,o=0)=>{const s=Math.abs(e.x),d=Math.abs(e.y),u=s>d;return t==="left"||t==="right"?u&&s>o:!u&&d>o};function rt(e=()=>{}){const t=H(e);Me(()=>{let o=0,s=0;return o=window.requestAnimationFrame(()=>s=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(o),window.cancelAnimationFrame(s)}},[t])}function nt(e){return e.nodeType===e.ELEMENT_NODE}function at(e){const t=[],o=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:s=>{const d=s.tagName==="INPUT"&&s.type==="hidden";return s.disabled||s.hidden||d?NodeFilter.FILTER_SKIP:s.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;o.nextNode();)t.push(o.currentNode);return t}function B(e){const t=document.activeElement;return e.some(o=>o===t?!0:(o.focus(),document.activeElement!==t))}var it=ne,xe=ie,Te=de,ye=ue,Ee=le,he=fe,ge=ee;const ct=it,be=r.forwardRef(({className:e,...t},o)=>n.jsx(xe,{ref:o,className:_("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));be.displayName=xe.displayName;const dt=ke("group pointer-events-auto relative flex w-full items-center justify-between space-x-2 overflow-hidden rounded-md border p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),Pe=r.forwardRef(({className:e,variant:t,...o},s)=>n.jsx(Te,{ref:s,className:_(dt({variant:t}),e),...o}));Pe.displayName=Te.displayName;const ut=r.forwardRef(({className:e,...t},o)=>n.jsx(he,{ref:o,className:_("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",e),...t}));ut.displayName=he.displayName;const Ce=r.forwardRef(({className:e,...t},o)=>n.jsx(ge,{ref:o,className:_("absolute right-1 top-1 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:n.jsx(_e,{className:"h-4 w-4"})}));Ce.displayName=ge.displayName;const Re=r.forwardRef(({className:e,...t},o)=>n.jsx(ye,{ref:o,className:_("text-sm font-semibold [&+div]:text-xs",e),...t}));Re.displayName=ye.displayName;const Ne=r.forwardRef(({className:e,...t},o)=>n.jsx(Ee,{ref:o,className:_("text-sm opacity-90",e),...t}));Ne.displayName=Ee.displayName;function Tt(){const{toasts:e}=je();return n.jsxs(ct,{children:[e.map(function({id:t,title:o,description:s,action:d,...u}){return n.jsxs(Pe,{...u,children:[n.jsxs("div",{className:"grid gap-1",children:[o&&n.jsx(Re,{children:o}),s&&n.jsx(Ne,{children:s})]}),d,n.jsx(Ce,{})]},t)}),n.jsx(be,{})]})}export{Tt as T};