import{j as r,a as o}from"./app-CbQMMcCF.js";import{B as a}from"./button-DI0Zj6ar.js";import{A as s}from"./arrow-up-down-BuGigV4N.js";import"./utils-BvcvHkli.js";import"./createLucideIcon-B_R7XSt_.js";const d=[{accessorKey:"name",header:({column:e})=>r.jsxs(a,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Nama Proker",r.jsx(s,{className:"ml-2 h-4 w-4"})]})},{accessorKey:"kepengurusan.name",header:({column:e})=>r.jsxs(a,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Proker Dari",r.jsx(s,{className:"ml-2 h-4 w-4"})]})},{accessorKey:"schedule",header:({column:e})=>r.jsxs(a,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Jadwal",r.jsx(s,{className:"ml-2 h-4 w-4"})]}),cell:({row:e})=>{const t=e.original;return r.jsx("h1",{className:"text-md font-bold",children:Intl.DateTimeFormat("id-ID",{year:"numeric",weekday:"long",month:"long",day:"numeric"}).format(new Date(t==null?void 0:t.schedule))})}},{accessorKey:"start_register",header:({column:e})=>r.jsxs(a,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Oprec",r.jsx(s,{className:"ml-2 h-4 w-4"})]}),cell:({row:e})=>{const t=e.original;return r.jsxs("h1",{className:"text-md font-bold",children:[Intl.DateTimeFormat("id-ID",{year:"numeric",weekday:"short",month:"short",day:"numeric"}).format(new Date(t==null?void 0:t.start_register))," - ",Intl.DateTimeFormat("id-ID",{year:"numeric",weekday:"short",month:"short",day:"numeric"}).format(new Date(t==null?void 0:t.end_register))]})}},{id:"actions",header:"Aksi",cell:({row:e})=>(e.original,r.jsx(o,{href:route("v2.front.index"),children:r.jsx(a,{children:"Daftar"})}))}];export{d as default};
