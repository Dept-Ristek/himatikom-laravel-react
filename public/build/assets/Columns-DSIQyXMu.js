import{j as e}from"./app-CbQMMcCF.js";import{B as t}from"./button-DI0Zj6ar.js";import{D as a,a as i,b as l,c,d,e as m}from"./dropdown-menu-C2URrB9r.js";import{A as o}from"./arrow-up-down-BuGigV4N.js";import{E as p}from"./ellipsis-CGVUVE0m.js";import"./utils-BvcvHkli.js";import"./index-DEn8AMXp.js";import"./index-CnnH0OWL.js";import"./Combination-Dnd6A2F6.js";import"./index-DQ26hfFQ.js";import"./createLucideIcon-B_R7XSt_.js";const x=(s,r)=>{const n=s.split(" ");return n.length<=r?s:n.slice(0,r).join(" ")+"..."},C=[{accessorKey:"user.name",header:({column:s})=>e.jsxs(t,{variant:"ghost",onClick:()=>s.toggleSorting(s.getIsSorted()==="asc"),children:["Pengirim",e.jsx(o,{className:"ml-2 h-4 w-4"})]}),cell:({row:s})=>{var n;const r=s.original;return e.jsx("h3",{className:"text-md text-justify",children:r.is_anon?"Tidak dapat ditampilkan":(n=r.user)==null?void 0:n.name})}},{accessorKey:"content",header:({column:s})=>e.jsxs(t,{variant:"ghost",onClick:()=>s.toggleSorting(s.getIsSorted()==="asc"),children:["Isi",e.jsx(o,{className:"ml-2 h-4 w-4"})]}),cell:({row:s})=>{const r=s.original;return e.jsx("p",{className:"text-sm text-justify",children:x(r.content,5)})}},{id:"actions",header:"Aksi",cell:({row:s})=>(s.original,e.jsxs(a,{children:[e.jsx(i,{asChild:!0,children:e.jsxs(t,{variant:"ghost",className:"h-8 w-8 p-0",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(p,{className:"h-4 w-4"})]})}),e.jsxs(l,{align:"end",children:[e.jsx(c,{children:"Actions"}),e.jsx(d,{}),e.jsx(m,{children:"Detail"})]})]}))}];export{C as default};
