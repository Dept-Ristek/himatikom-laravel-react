import{r as i,j as h,d as b}from"./app-BC__SOPf.js";import{S as w}from"./utils-6PJseIst.js";var y=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],M=y.reduce((t,e)=>{const n=i.forwardRef((s,o)=>{const{asChild:r,...c}=s,u=r?w:e;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),h.jsx(u,{...c,ref:o})});return n.displayName=`Primitive.${e}`,{...t,[e]:n}},{});function R(t,e){t&&b.flushSync(()=>t.dispatchEvent(e))}function N(t,e,{checkForDefaultPrevented:n=!0}={}){return function(o){if(t==null||t(o),n===!1||!o.defaultPrevented)return e==null?void 0:e(o)}}function D(t,e){const n=i.createContext(e),s=r=>{const{children:c,...u}=r,a=i.useMemo(()=>u,Object.values(u));return h.jsx(n.Provider,{value:a,children:c})};s.displayName=t+"Provider";function o(r){const c=i.useContext(n);if(c)return c;if(e!==void 0)return e;throw new Error(`\`${r}\` must be used within \`${t}\``)}return[s,o]}function O(t,e=[]){let n=[];function s(r,c){const u=i.createContext(c),a=n.length;n=[...n,c];const f=d=>{var C;const{scope:l,children:v,...m}=d,x=((C=l==null?void 0:l[t])==null?void 0:C[a])||u,P=i.useMemo(()=>m,Object.values(m));return h.jsx(x.Provider,{value:P,children:v})};f.displayName=r+"Provider";function p(d,l){var x;const v=((x=l==null?void 0:l[t])==null?void 0:x[a])||u,m=i.useContext(v);if(m)return m;if(c!==void 0)return c;throw new Error(`\`${d}\` must be used within \`${r}\``)}return[f,p]}const o=()=>{const r=n.map(c=>i.createContext(c));return function(u){const a=(u==null?void 0:u[t])||r;return i.useMemo(()=>({[`__scope${t}`]:{...u,[t]:a}}),[u,a])}};return o.scopeName=t,[s,$(o,...e)]}function $(...t){const e=t[0];if(t.length===1)return e;const n=()=>{const s=t.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(r){const c=s.reduce((u,{useScope:a,scopeName:f})=>{const d=a(r)[`__scope${f}`];return{...u,...d}},{});return i.useMemo(()=>({[`__scope${e.scopeName}`]:c}),[c])}};return n.scopeName=e.scopeName,n}function S(t){const e=i.useRef(t);return i.useEffect(()=>{e.current=t}),i.useMemo(()=>(...n)=>{var s;return(s=e.current)==null?void 0:s.call(e,...n)},[])}var B=globalThis!=null&&globalThis.document?i.useLayoutEffect:()=>{};function L({prop:t,defaultProp:e,onChange:n=()=>{}}){const[s,o]=j({defaultProp:e,onChange:n}),r=t!==void 0,c=r?t:s,u=S(n),a=i.useCallback(f=>{if(r){const d=typeof f=="function"?f(t):f;d!==t&&u(d)}else o(f)},[r,t,o,u]);return[c,a]}function j({defaultProp:t,onChange:e}){const n=i.useState(t),[s]=n,o=i.useRef(s),r=S(e);return i.useEffect(()=>{o.current!==s&&(r(s),o.current=s)},[s,o,r]),n}export{M as P,N as a,D as b,O as c,B as d,S as e,R as f,L as u};
