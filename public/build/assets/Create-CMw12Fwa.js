import{W as y,r as o,j as e,Y as N,a as C}from"./app-CbQMMcCF.js";import{u as w}from"./use-toast-DxTquMFM.js";import{L as i}from"./label-BDUIQwm3.js";import{I as m}from"./input-NTMwya5q.js";import{B as n}from"./button-DI0Zj6ar.js";import{I as P}from"./Image-CMV1XoOO.js";import{R as k}from"./index-BloOKMaH.js";import{M as S,C as I,a as L,b as R,c as F,d as T,e as D}from"./MainLayout-C7QiQJ_L.js";import{P as B,a as E,b as O}from"./popover-DGQl-xMA.js";import{C as U}from"./index-CnnH0OWL.js";import{c as _}from"./utils-BvcvHkli.js";import{C as G}from"./check-BRMXtSK0.js";import{X as M}from"./transition-Bwp-9Tfr.js";import"./index-DEn8AMXp.js";import"./align-justify-D9l8-S1f.js";import"./Combination-Dnd6A2F6.js";import"./index-BW2NSRQZ.js";import"./createLucideIcon-B_R7XSt_.js";import"./dropdown-menu-C2URrB9r.js";import"./alert-dialog-BQDOyL3e.js";import"./dialog-BGfzDwcU.js";import"./index-DQ26hfFQ.js";const ce=({title:u})=>{const x=[{id:"ready",label:"Ready"},{id:"pre-order",label:"Pre Order"},{id:"sold-out",label:"Sold Out"}],{toast:b}=w(),{data:t,setData:s,post:j,errors:X,processing:c,recentlySuccessful:r}=y({name:"",price:0,image:null,description:"",availability:""}),[l,d]=o.useState("/icon/preview.jpg"),[p,h]=o.useState({label_availability:null});o.useEffect(()=>{r&&(b({variant:"default",title:"Tambah Produk",description:"Berhasil menambahkan data produk baru!"}),s({...t,name:"",price:0,image:null,description:"",availability:""}),h({...p,label_availability:null}),d("/icon/preview.jpg"))},[r]);const f=a=>{a.target.files&&a.target.files[0]&&(s("image",a.target.files[0]),d(URL.createObjectURL(a.target.files[0])))},g=a=>{a.preventDefault(),j(route("admin.product.store"))};return e.jsxs(S,{children:[e.jsx(N,{title:u}),e.jsxs("div",{className:"flex flex-col justify-center p-3 max-w-2xl",children:[e.jsx("h1",{className:"text-2xl text-black font-bold mb-5",children:"Form Tambah Data Product"}),e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"name",className:"text-right",children:"Nama"}),e.jsx(m,{id:"name",value:t.name,onChange:a=>s("name",a.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"price",className:"text-right",children:"Harga"}),e.jsx(m,{id:"price",value:t.price,onChange:a=>s("price",+a.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"image",className:"text-right",children:"Gambar"}),e.jsx(m,{id:"image",type:"file",onChange:f,className:"col-span-3 mb-3 file:bg-slate-200 file:p-2 file:my-auto file:rounded-l-md file:-ml-3 file:-mt-1"})]}),e.jsx("div",{className:"mb-2",children:e.jsx("div",{className:"bg-slate-400 rounded-md w-[15rem] h-full border border-slate-400",children:l&&e.jsx(P,{src:typeof l=="string"?l:URL.createObjectURL(l),alt:"Preview Poster Image",className:"rounded-md h-full w-[15rem] border-slate-400 object-cover"})})}),e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{className:"text-right",children:"Status Produk"}),e.jsxs(B,{children:[e.jsx(E,{asChild:!0,children:e.jsxs(n,{variant:"outline",role:"combobox",className:"w-full justify-between",children:[p.label_availability??"Pilih Status Produk",e.jsx(U,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(O,{className:"w-full p-0",children:e.jsxs(I,{children:[e.jsx(L,{placeholder:"Cari Status...",className:"h-9"}),e.jsxs(R,{children:[e.jsx(F,{children:"Data Status tidak ditemukan."}),e.jsx(T,{children:x.map(a=>e.jsxs(D,{value:a.label,onSelect:()=>{Promise.all([s("availability",a.id),h(v=>({...v,label_availability:a.label}))])},children:[a.label,e.jsx(G,{className:_("ml-auto h-4 w-4 text-black",a.id===t.availability?"opacity-100":"opacity-0")})]},a.id))})]})]})})]})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"description",className:"text-right",children:"Deskripsi"}),e.jsx(k,{theme:"snow",value:t.description,onChange:a=>s("description",a),className:"rounded-md",placeholder:"Type anything..."})]}),e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(C,{href:route("admin.product.index"),children:e.jsx(n,{className:"bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2",disabled:c,type:"button",children:"Kembali"})}),e.jsx(n,{type:"submit",disabled:c,children:"Simpan"})]}),e.jsx(M,{show:r,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("span",{className:"text-sm",children:"Berhasil!"})})]})]})]})};export{ce as default};
