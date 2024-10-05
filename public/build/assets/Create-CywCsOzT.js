import{W as g,r as p,j as e,Y as j,a as b}from"./app-CkNUXSio.js";import{I as m}from"./input-DZI-2XTF.js";import{L as i}from"./label-DnkWAsj-.js";import{B as c}from"./button-Dc7OzJxX.js";import{T as v}from"./textarea-T9kwQPAy.js";import{M as N}from"./MainLayout-B9-i2e9A.js";import{I as y}from"./Image-DdRqI4pO.js";import{u as w}from"./use-toast-DIkyO2Y1.js";import{X as L}from"./transition-DifgdXHj.js";import"./utils-CbzvqOJO.js";import"./index-CvOBxlF7.js";import"./align-justify-BwW6n03D.js";import"./index-Bh5jsxlY.js";import"./Combination-DF1xAw57.js";import"./index-CesVnNWe.js";import"./index-CcR0PjjZ.js";import"./createLucideIcon-D0FQNb5K.js";import"./dropdown-menu-DK4h3zBi.js";import"./alert-dialog-DYuAPPc5.js";import"./dialog-B2fgKK0J.js";const G=({title:d})=>{const{toast:x}=w(),{data:a,setData:s,post:u,errors:T,processing:n,recentlySuccessful:o}=g({name:"",description:"",periode:"",poster:null}),[r,l]=p.useState("/icon/preview.jpg");p.useEffect(()=>{o&&(x({variant:"default",title:"Tambah Kepengurusan",description:"Berhasil menambahkan data kepengurusan baru!"}),s({...a,name:"",description:"",periode:"",poster:null}),l("/icon/preview.jpg"))},[o]);const h=t=>{t.target.files&&t.target.files[0]&&(s("poster",t.target.files[0]),l(URL.createObjectURL(t.target.files[0])))},f=t=>{t.preventDefault(),u(route("admin.kepengurusan.store"))};return e.jsxs(N,{children:[e.jsx(j,{title:d}),e.jsxs("div",{className:"flex flex-col justify-center p-3 max-w-xl",children:[e.jsx("h1",{className:"text-2xl text-black font-bold mb-5",children:"Form Tambah Data"}),e.jsxs("form",{onSubmit:f,encType:"multipart/form-data",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"name",className:"text-right",children:"Nama Kepengurusan"}),e.jsx(m,{id:"name",type:"text",value:a.name,onChange:t=>s("name",t.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"name",className:"text-right",children:"Deskripsi"}),e.jsx(v,{id:"description",value:a.description,onChange:t=>s("description",t.target.value),className:"col-span-3 mb-3",rows:10})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"email",className:"text-right",children:"Periode"}),e.jsx(m,{id:"periode",type:"text",value:a.periode,onChange:t=>s("periode",t.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"poster",className:"text-right",children:"Poster"}),e.jsx(m,{id:"poster",type:"file",onChange:h,className:"col-span-3 mb-3 file:bg-slate-200 file:p-2 file:my-auto file:rounded-l-md file:-ml-3 file:-mt-1"})]}),e.jsxs("div",{className:"flex flex-row justify-between items-start",children:[e.jsx("div",{className:"bg-slate-400 rounded-md w-[200px] h-[350px] border border-slate-400",children:r&&e.jsx(y,{src:typeof r=="string"?r:URL.createObjectURL(r),alt:"Preview Poster Image",className:"rounded-md border-slate-400 w-[200px] h-[350px] object-cover"})}),e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(b,{href:route("admin.kepengurusan.index"),children:e.jsx(c,{className:"bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2",disabled:n,type:"button",children:"Kembali"})}),e.jsx(c,{type:"submit",disabled:n,children:"Simpan"})]})]}),e.jsx(L,{show:o,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("span",{className:"text-sm",children:"Berhasil!"})})]})]})]})};export{G as default};