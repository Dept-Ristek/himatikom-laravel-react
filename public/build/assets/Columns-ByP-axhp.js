import{j as r,a as d}from"./app-CkNUXSio.js";import{B as o}from"./button-Dc7OzJxX.js";import{D as m,a as c,b as h,c as p,d as u,e as t}from"./dropdown-menu-DK4h3zBi.js";import{A as x,a as g}from"./alert-dialog-DYuAPPc5.js";import{D as j}from"./DialogDelete-Br2dLJPZ.js";import{t as f,d as D}from"./data-DSixZN8S.js";import{A as l}from"./arrow-up-down-B4FByG6f.js";import{E as w}from"./ellipsis-WOv-k9Jx.js";import"./utils-CbzvqOJO.js";import"./index-CvOBxlF7.js";import"./index-Bh5jsxlY.js";import"./Combination-DF1xAw57.js";import"./index-CesVnNWe.js";import"./index-CcR0PjjZ.js";import"./createLucideIcon-D0FQNb5K.js";const H=[{accessorKey:"name",header:({column:s})=>r.jsxs(o,{variant:"ghost",onClick:()=>s.toggleSorting(s.getIsSorted()==="asc"),children:["Nama",r.jsx(l,{className:"ml-2 h-4 w-4"})]})},{accessorKey:"tag",header:({column:s})=>r.jsxs(o,{variant:"ghost",onClick:()=>s.toggleSorting(s.getIsSorted()==="asc"),children:["Tag",r.jsx(l,{className:"ml-2 h-4 w-4"})]}),cell:({row:s})=>{const a=s.original,e=f.find(i=>i.id===a.tag),n=D.find(i=>i.id===a.type);return r.jsx("h3",{className:"text-md",children:(e==null?void 0:e.id)=="surat"?`${e==null?void 0:e.label} (${n==null?void 0:n.label})`:`${e==null?void 0:e.label}`})}},{accessorKey:"filePath",header:"Document",cell:({row:s})=>{const a=s.original;return r.jsx("a",{href:a.filepath,target:"_blank",download:a.name,children:r.jsx(o,{className:"bg-primary",children:"Download"})})}},{id:"actions",header:"Aksi",cell:({row:s})=>{const a=s.original;return r.jsxs(m,{children:[r.jsx(c,{asChild:!0,children:r.jsxs(o,{variant:"ghost",className:"h-8 w-8 p-0",children:[r.jsx("span",{className:"sr-only",children:"Open menu"}),r.jsx(w,{className:"h-4 w-4"})]})}),r.jsxs(h,{align:"end",children:[r.jsx(p,{children:"Actions"}),r.jsx(u,{}),r.jsx(d,{href:route("admin.document.edit",a.id),children:r.jsx(t,{children:"Edit"})}),r.jsx(t,{asChild:!0,children:r.jsxs(x,{children:[r.jsx(g,{className:"text-sm text-left rounded-md w-full p-2 hover:bg-slate-100",children:"Hapus"}),r.jsx(j,{id:a.id,url:"admin.document.destroy"})]})})]})]})}}];export{H as default};