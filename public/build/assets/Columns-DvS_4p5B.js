import{j as e,a as n}from"./app-CbQMMcCF.js";import{B as o}from"./button-DI0Zj6ar.js";import{D as t,a as i,b as l,c as d,d as m,e as a}from"./dropdown-menu-C2URrB9r.js";import{A as p,a as c}from"./alert-dialog-BQDOyL3e.js";import{I as u}from"./Image-CMV1XoOO.js";import{D as h}from"./DialogDelete-CawPoj9M.js";import{A as x}from"./arrow-up-down-BuGigV4N.js";import{E as g}from"./ellipsis-CGVUVE0m.js";import"./utils-BvcvHkli.js";import"./index-DEn8AMXp.js";import"./index-CnnH0OWL.js";import"./Combination-Dnd6A2F6.js";import"./index-DQ26hfFQ.js";import"./index-BW2NSRQZ.js";import"./createLucideIcon-B_R7XSt_.js";const S=[{accessorKey:"name",header:({column:r})=>e.jsxs(o,{variant:"ghost",onClick:()=>r.toggleSorting(r.getIsSorted()==="asc"),children:["Name",e.jsx(x,{className:"ml-2 h-4 w-4"})]})},{accessorKey:"poster",header:"Poster",cell:({row:r})=>{const s=r.original;return e.jsx(u,{src:s.poster,className:"w-[150px] h-[200px] object-cover rounded-md"})}},{id:"actions",header:"Aksi",cell:({row:r})=>{const s=r.original;return e.jsxs(t,{children:[e.jsx(i,{asChild:!0,children:e.jsxs(o,{variant:"ghost",className:"h-8 w-8 p-0",children:[e.jsx("span",{className:"sr-only",children:"Open menu"}),e.jsx(g,{className:"h-4 w-4"})]})}),e.jsxs(l,{align:"end",children:[e.jsx(d,{children:"Actions"}),e.jsx(m,{}),e.jsx(n,{href:route("admin.kepengurusan.edit",s.id),children:e.jsx(a,{children:"Edit"})}),e.jsx(a,{asChild:!0,children:e.jsxs(p,{children:[e.jsx(c,{className:"text-sm text-left rounded-md w-full p-2 hover:bg-slate-100",children:"Hapus"}),e.jsx(h,{id:s.id,url:"admin.kepengurusan.destroy"})]})})]})]})}}];export{S as default};