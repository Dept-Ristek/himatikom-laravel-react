import{r as i,j as v,c as P}from"./app-CbQMMcCF.js";import{S as b}from"./utils-BvcvHkli.js";var w=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],_=w.reduce((t,e)=>{const n=i.forwardRef((s,o)=>{const{asChild:r,...c}=s,u=r?b:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),v.jsx(u,{...c,ref:o})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function M(t,e){t&&P.flushSync(()=>t.dispatchEvent(e))}function R(t,e,{checkForDefaultPrevented:n=!0}={}){return function(o){if(t==null||t(o),n===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}function N(t,e){const n=i.createContext(e);function s(r){const{children:c,...u}=r,f=i.useMemo(()=>u,Object.values(u));return v.jsx(n.Provider,{value:f,children:c})}function o(r){const c=i.useContext(n);if(c)return c;if(e!==void 0)return e;throw new Error(`\`${r}\` must be used within \`${t}\``)}return s.displayName=t+"Provider",[s,o]}function D(t,e=[]){let n=[];function s(r,c){const u=i.createContext(c),f=n.length;n=[...n,c];function a(d){const{scope:l,children:p,...m}=d,C=(l==null?void 0:l[t][f])||u,S=i.useMemo(()=>m,Object.values(m));return v.jsx(C.Provider,{value:S,children:p})}function x(d,l){const p=(l==null?void 0:l[t][f])||u,m=i.useContext(p);if(m)return m;if(c!==void 0)return c;throw new Error(`\`${d}\` must be used within \`${r}\``)}return a.displayName=r+"Provider",[a,x]}const o=()=>{const r=n.map(c=>i.createContext(c));return function(u){const f=(u==null?void 0:u[t])||r;return i.useMemo(()=>({[`__scope${t}`]:{...u,[t]:f}}),[u,f])}};return o.scopeName=t,[s,y(o,...e)]}function y(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const s=t.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(r){const c=s.reduce((u,{useScope:f,scopeName:a})=>{const d=f(r)[`__scope${a}`];return{...u,...d}},{});return i.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return n.scopeName=e.scopeName,n}function h(t){const e=i.useRef(t);return i.useEffect(()=>{e.current=t}),i.useMemo(()=>(...n)=>{var s;return(s=e.current)==null?void 0:s.call(e,...n)},[])}var O=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{};function B({prop:t,defaultProp:e,onChange:n=()=>{}}){const[s,o]=$({defaultProp:e,onChange:n}),r=t!==void 0,c=r?t:s,u=h(n),f=i.useCallback(a=>{if(r){const d=typeof a=="function"?a(t):a;d!==t&&u(d)}else o(a)},[r,t,o,u]);return[c,f]}function $({defaultProp:t,onChange:e}){const n=i.useState(t),[s]=n,o=i.useRef(s),r=h(e);return i.useEffect(()=>{o.current!==s&&(r(s),o.current=s)},[s,o,r]),n}export{_ as P,R as a,N as b,D as c,O as d,h as e,M as f,B as u};
