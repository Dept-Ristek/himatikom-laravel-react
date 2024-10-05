import{W as N,r as d,j as e,Y as v,a as C}from"./app-CkNUXSio.js";import{L as a}from"./label-DnkWAsj-.js";import{P as w,a as S,b as P}from"./popover-KRWNGgUZ.js";import{B as p}from"./button-Dc7OzJxX.js";import{C as D,a as y}from"./index-Bh5jsxlY.js";import{M as I,C as A,a as T,b as L,c as B,d as E,e as F}from"./MainLayout-B9-i2e9A.js";import{c as O}from"./utils-CbzvqOJO.js";import{I as R}from"./input-DZI-2XTF.js";import{S as x}from"./switch-B5iq_Tm0.js";import{C as c}from"./calendar-diIsWfNG.js";import{u as K}from"./use-toast-DIkyO2Y1.js";import{X as M}from"./transition-DifgdXHj.js";import"./index-CvOBxlF7.js";import"./Combination-DF1xAw57.js";import"./index-CesVnNWe.js";import"./align-justify-BwW6n03D.js";import"./index-CcR0PjjZ.js";import"./createLucideIcon-D0FQNb5K.js";import"./dropdown-menu-DK4h3zBi.js";import"./alert-dialog-DYuAPPc5.js";import"./dialog-B2fgKK0J.js";import"./Image-DdRqI4pO.js";const de=({title:u,kepengurusans:g})=>{const{toast:_}=K(),{data:r,setData:t,post:j,errors:X,processing:f,recentlySuccessful:m}=N({name:"",is_proker:!1,schedule:"",need_to_register:!1,kepengurusan_id:"",start_register:"",end_register:""}),[n,l]=d.useState({schedule:new Date,start_register:new Date,end_register:new Date}),[o,h]=d.useState({kepengurusan_label:null,is_proker:!1,need_to_register:!1});d.useEffect(()=>{m&&(_({variant:"default",title:`Tambah ${o.is_proker?"Program Kerja":"Agenda"}`,description:`Berhasil menambahkan data ${o.is_proker?"Program Kerja":"Agenda"} baru!`}),t({...r,name:"",is_proker:!1,schedule:"",need_to_register:!1,kepengurusan_id:"",start_register:"",end_register:""}),l({...n,schedule:new Date,start_register:new Date,end_register:new Date}),h({...o,kepengurusan_label:null,is_proker:!1,need_to_register:!1}))},[m]);const k=s=>{s.preventDefault(),j(route("admin.proker.store"))};return e.jsxs(I,{children:[e.jsx(v,{title:u}),e.jsxs("div",{className:"flex flex-col justify-center p-3 max-w-xl",children:[e.jsx("h1",{className:"text-2xl text-black font-bold mb-5",children:"Form Tambah Data Proker"}),e.jsxs("form",{onSubmit:k,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(a,{className:"text-right",children:"Nama Proker atau Agenda"}),e.jsx(R,{id:"name",value:r.name,onChange:s=>t("name",s.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(a,{className:"text-right",children:"Departemen"}),e.jsxs(w,{children:[e.jsx(S,{asChild:!0,children:e.jsxs(p,{variant:"outline",role:"combobox",className:"w-full justify-between",children:[o.kepengurusan_label??"Pilih Departemen",e.jsx(D,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(P,{className:"w-full p-0",children:e.jsxs(A,{children:[e.jsx(T,{placeholder:"Cari berdasarkan Nama Departemen...",className:"h-9"}),e.jsxs(L,{children:[e.jsx(B,{children:"Data departemen tidak ditemukan."}),e.jsx(E,{children:g.map(s=>e.jsxs(F,{value:s.name,onSelect:i=>{Promise.all([t("kepengurusan_id",s.id),h(b=>({...b,kepengurusan_label:s.name}))])},children:[s.name,e.jsx(y,{className:O("ml-auto h-4 w-4 text-black",s.id===r.kepengurusan_id?"opacity-100":"opacity-0")})]},s.id))})]})]})})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(a,{className:"text-right",children:"Proker / Agenda"}),e.jsxs("div",{className:"flex flex-row gap-2 items-center",children:[e.jsx(x,{id:"is_proker",checked:r.is_proker,onCheckedChange:s=>t("is_proker",!r.is_proker)}),e.jsx(a,{htmlFor:"is_proker",children:r.is_proker?"Proker":"Agenda"})]})]}),e.jsxs("div",{className:"mb-3",children:[e.jsxs(a,{className:"text-right",children:["Jadwal ",r.is_proker?"Proker":"Agenda"]}),e.jsx(c,{mode:"single",selected:n.schedule,onSelect:s=>{Promise.all([t("schedule",s==null?void 0:s.toISOString()),l(i=>({...i,schedule:s}))])},className:"rounded-md"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(a,{className:"text-right",children:"Memerlukan Open Recruitment"}),e.jsxs("div",{className:"flex flex-row gap-2 items-center",children:[e.jsx(x,{id:"need_to_register",checked:r.need_to_register,onCheckedChange:s=>t("need_to_register",!r.need_to_register)}),e.jsx(a,{htmlFor:"need_to_register",children:r.need_to_register?"Ya":"Tidak"})]})]}),e.jsxs("div",{className:"mb-3",hidden:!r.need_to_register,children:[e.jsx(a,{className:"text-right",children:"Recruitment Dimulai"}),e.jsx(c,{mode:"single",selected:n.start_register,onSelect:s=>{Promise.all([t("start_register",s==null?void 0:s.toISOString()),l(i=>({...i,start_register:s}))])},className:"rounded-md"})]}),e.jsxs("div",{className:"mb-3",hidden:!r.need_to_register,children:[e.jsx(a,{className:"text-right",children:"Recruitment Selesai"}),e.jsx(c,{mode:"single",selected:n.end_register,onSelect:s=>{Promise.all([t("end_register",s==null?void 0:s.toISOString()),l(i=>({...i,end_register:s}))])},className:"rounded-md"})]}),e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(C,{href:route("admin.proker.index"),className:"bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2",children:"Kembali"}),e.jsx(p,{type:"submit",disabled:f,children:"Simpan"})]}),e.jsx(M,{show:m,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("span",{className:"text-sm",children:"Berhasil!"})})]})]})]})};export{de as default};