import{j as r,a as i}from"./app-BC__SOPf.js";import{B as o}from"./button-aI15s4PB.js";import{D as t,a as l,b as n,c as m,d,e as a}from"./dropdown-menu-BT1J7vqF.js";import{A as p,a as c}from"./alert-dialog-BfdfrZuh.js";import{I as g}from"./Image-BNe35iiT.js";import{D as h}from"./DialogDelete-DN2Re3U9.js";import{A as x}from"./arrow-up-down-BpeTUBEB.js";import{E as u}from"./ellipsis-DK9H6wsc.js";import"./utils-6PJseIst.js";import"./index-Dm8DcO5X.js";import"./index-l-XiRjVR.js";import"./index-D6mfvjMq.js";import"./index-CZhsWJq9.js";import"./Combination-D7pIyE80.js";import"./index-DI5J79Mi.js";import"./index-ClB-KppM.js";import"./createLucideIcon-XDsn1f4s.js";const K=[{accessorKey:"title",header:({column:e})=>r.jsxs(o,{variant:"ghost",onClick:()=>e.toggleSorting(e.getIsSorted()==="asc"),children:["Judul",r.jsx(x,{className:"ml-2 h-4 w-4"})]})},{accessorKey:"image",header:"Image",cell:({row:e})=>{const s=e.original;return r.jsx(g,{src:s.image,className:"w-[300px] h-[100px] object-cover rounded-md"})}},{id:"actions",header:"Aksi",cell:({row:e})=>{const s=e.original;return r.jsxs(t,{children:[r.jsx(l,{asChild:!0,children:r.jsxs(o,{variant:"ghost",className:"h-8 w-8 p-0",children:[r.jsx("span",{className:"sr-only",children:"Open menu"}),r.jsx(u,{className:"h-4 w-4"})]})}),r.jsxs(n,{align:"end",children:[r.jsx(m,{children:"Actions"}),r.jsx(d,{}),r.jsx(i,{href:route("admin.blog.edit",s.id),children:r.jsx(a,{children:"Edit"})}),r.jsx(a,{asChild:!0,children:r.jsxs(p,{children:[r.jsx(c,{className:"text-sm text-left rounded-md w-full p-2 hover:bg-slate-100",children:"Hapus"}),r.jsx(h,{id:s.id,url:"admin.blog.destroy"})]})})]})]})}}];export{K as default};