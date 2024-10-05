import{W as g,r as m,j as e,Y as j,a as b}from"./app-CbQMMcCF.js";import{I as o}from"./input-NTMwya5q.js";import{L as l}from"./label-BDUIQwm3.js";import{B as v}from"./button-DI0Zj6ar.js";import{M as N}from"./MainLayout-C7QiQJ_L.js";import{I as y}from"./Image-CMV1XoOO.js";import{R as w}from"./index-BloOKMaH.js";import{u as I}from"./use-toast-DxTquMFM.js";import{X as L}from"./transition-Bwp-9Tfr.js";import"./utils-BvcvHkli.js";import"./index-DEn8AMXp.js";import"./align-justify-D9l8-S1f.js";import"./index-CnnH0OWL.js";import"./Combination-Dnd6A2F6.js";import"./index-DQ26hfFQ.js";import"./index-BW2NSRQZ.js";import"./createLucideIcon-B_R7XSt_.js";import"./dropdown-menu-C2URrB9r.js";import"./alert-dialog-BQDOyL3e.js";import"./dialog-BGfzDwcU.js";const z=({title:n,prodi:a})=>{const{toast:c}=I(),{data:i,setData:r,post:d,errors:P,processing:p,recentlySuccessful:x}=g({name:a.name,image:a.image,content:a.content,_method:"PUT"}),[s,h]=m.useState(a.image??"/icon/preview.jpg");m.useEffect(()=>{c({variant:"default",title:"Edit Program Studi",description:"Berhasil mengubah data program studi!"})});const u=t=>{t.target.files&&t.target.files[0]&&(r("image",t.target.files[0]),h(URL.createObjectURL(t.target.files[0])))},f=t=>{t.preventDefault(),d(route("admin.prodi.update",a.id))};return e.jsxs(N,{children:[e.jsx(j,{title:n}),e.jsxs("div",{className:"flex flex-col justify-center p-3 max-w-xl",children:[e.jsx("h1",{className:"text-2xl text-black font-bold mb-5",children:"Form Edit Data Program Studi"}),e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"mb-2",children:[e.jsx(l,{htmlFor:"name",className:"text-right",children:"Nama"}),e.jsx(o,{id:"name",value:i.name,onChange:t=>r("name",t.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(l,{htmlFor:"image",className:"text-right",children:"Gambar"}),e.jsx(o,{id:"image",type:"file",onChange:u,className:"col-span-3 mb-3 file:bg-slate-200 file:p-2 file:my-auto file:rounded-l-md file:-ml-3 file:-mt-1"})]}),e.jsx("div",{className:"mb-2",children:e.jsx("div",{className:"bg-slate-400 rounded-md h-[25rem] border border-slate-400",children:s&&e.jsx(y,{src:typeof s=="string"?s:URL.createObjectURL(s),alt:"Preview Poster Image",className:"rounded-md w-full h-[25rem] border-slate-400 object-cover"})})}),e.jsx("div",{className:"mb-2",children:e.jsx(w,{theme:"snow",value:i.content,onChange:t=>r("content",t),className:"rounded-md",placeholder:"Type anything..."})}),e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(b,{href:route("admin.prodi.index"),className:"bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2",children:"Kembali"}),e.jsx(v,{type:"submit",disabled:p,children:"Simpan"})]}),e.jsx(L,{show:x,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("span",{className:"text-sm",children:"Berhasil!"})})]})]})]})};export{z as default};
