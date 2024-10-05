import{W as L,r as w,j as e,Y as T,a as B}from"./app-CbQMMcCF.js";import{B as n}from"./button-DI0Zj6ar.js";import{C as o,a as c}from"./index-CnnH0OWL.js";import{M as E,C as d,a as u,b as h,c as x,d as p,e as j}from"./MainLayout-C7QiQJ_L.js";import{P as b,a as f,b as N}from"./popover-DGQl-xMA.js";import{c as g}from"./utils-BvcvHkli.js";import{l as K}from"./data-D_4fncdr.js";import{L as v}from"./label-BDUIQwm3.js";import{u as M}from"./use-toast-DxTquMFM.js";import{X as J}from"./transition-Bwp-9Tfr.js";import"./index-DEn8AMXp.js";import"./Combination-Dnd6A2F6.js";import"./index-DQ26hfFQ.js";import"./align-justify-D9l8-S1f.js";import"./index-BW2NSRQZ.js";import"./createLucideIcon-B_R7XSt_.js";import"./dropdown-menu-C2URrB9r.js";import"./alert-dialog-BQDOyL3e.js";import"./dialog-BGfzDwcU.js";import"./Image-CMV1XoOO.js";const re=({title:k,users:y,kepengurusans:_})=>{const{toast:C}=M(),{data:s,setData:l,post:P,errors:F,processing:S,recentlySuccessful:m}=L({user_id:"",kepengurusan_id:"",level:""}),[i,r]=w.useState({user_label:null,kepengurusan_label:null,level_label:null});w.useEffect(()=>{m&&(C({variant:"default",title:"Tambah Pengurus",description:"Berhasil menambahkan data pengurus baru!"}),l({...s,user_id:"",kepengurusan_id:"",level:""}),r({...i,user_label:null,kepengurusan_label:null,level_label:null}))},[m]);const D=a=>{a.preventDefault(),P(route("admin.pengurus.store"))};return e.jsxs(E,{children:[e.jsx(T,{title:k}),e.jsxs("div",{className:"flex flex-col justify-center p-3 max-w-xl",children:[e.jsx("h1",{className:"text-2xl text-black font-bold mb-5",children:"Form Tambah Data Pengurus"}),e.jsxs("form",{onSubmit:D,children:[e.jsxs("div",{className:"mb-2",children:[e.jsx(v,{className:"text-right",children:"Mahasiswa"}),e.jsxs(b,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(n,{variant:"outline",role:"combobox",className:"w-full justify-between",children:[i.user_label??"Pilih user",e.jsx(o,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(N,{className:"w-full p-0",children:e.jsxs(d,{children:[e.jsx(u,{placeholder:"Cari berdasarkan NIM...",className:"h-9"}),e.jsxs(h,{children:[e.jsx(x,{children:"Data mahasiswa tidak ditemukan."}),e.jsx(p,{children:y.map(a=>e.jsxs(j,{value:a.nim,onSelect:t=>{Promise.all([l("user_id",a.id),r(I=>({...I,user_label:`(${a.nim}) ${a.name}`}))])},children:["(",a.nim,") ",a.name,e.jsx(c,{className:g("ml-auto h-4 w-4 text-black",a.id===s.user_id?"opacity-100":"opacity-0")})]},a.id))})]})]})})]})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(v,{className:"text-right",children:"Kepengurusan"}),e.jsxs(b,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(n,{variant:"outline",role:"combobox",className:"w-full justify-between",children:[i.kepengurusan_label??"Pilih Kepengurusan",e.jsx(o,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(N,{className:"w-full p-0",children:e.jsxs(d,{children:[e.jsx(u,{placeholder:"Cari Kepengurusan...",className:"h-9"}),e.jsxs(h,{children:[e.jsx(x,{children:"Data kepengurusan tidak ditemukan."}),e.jsx(p,{children:_.map(a=>e.jsxs(j,{value:a.name,onSelect:()=>{Promise.all([l("kepengurusan_id",a.id),r(t=>({...t,kepengurusan_label:a.name}))])},children:[a.name,e.jsx(c,{className:g("ml-auto h-4 w-4 text-black",a.id===s.kepengurusan_id?"opacity-100":"opacity-0")})]},a.id))})]})]})})]})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(v,{className:"text-right",children:"Jabatan"}),e.jsxs(b,{children:[e.jsx(f,{asChild:!0,children:e.jsxs(n,{variant:"outline",role:"combobox",className:"w-full justify-between",children:[i.level_label??"Pilih Jabatan",e.jsx(o,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(N,{className:"w-full p-0",children:e.jsxs(d,{children:[e.jsx(u,{placeholder:"Cari Jabatan...",className:"h-9"}),e.jsxs(h,{children:[e.jsx(x,{children:"Data jabatan tidak ditemukan."}),e.jsx(p,{children:K.map(a=>e.jsxs(j,{value:a.label,onSelect:()=>{Promise.all([l("level",a.id),r(t=>({...t,level_label:a.label}))])},children:[a.label,e.jsx(c,{className:g("ml-auto h-4 w-4 text-black",a.id===s.level?"opacity-100":"opacity-0")})]},a.id))})]})]})})]})]}),e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(B,{href:route("admin.pengurus.index"),className:"bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2",children:"Kembali"}),e.jsx(n,{type:"submit",disabled:S,children:"Simpan"})]}),e.jsx(J,{show:m,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("span",{className:"text-sm",children:"Berhasil!"})})]})]})]})};export{re as default};