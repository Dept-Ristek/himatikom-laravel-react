import{W as c,r as d,j as e,Y as x,a as h}from"./app-BC__SOPf.js";import{L as i}from"./label-DpfHqOCJ.js";import{I as u}from"./input-Db9qwkHX.js";import{B as f}from"./button-aI15s4PB.js";import{T as b}from"./textarea-CKj8noHs.js";import{M as j}from"./MainLayout-DBQDGeUg.js";import{u as v}from"./use-toast-jBdQ0q1s.js";import{z as N}from"./transition-CezwKZ0F.js";import"./index-Dm8DcO5X.js";import"./utils-6PJseIst.js";import"./toaster--UsfZD4W.js";import"./index-D6mfvjMq.js";import"./index-CZhsWJq9.js";import"./dropdown-menu-BT1J7vqF.js";import"./index-l-XiRjVR.js";import"./Combination-D7pIyE80.js";import"./index-DI5J79Mi.js";import"./CommandContent-DxBT88uR.js";import"./index-ClB-KppM.js";import"./dialog-iYf8mwPu.js";import"./alert-dialog-BfdfrZuh.js";import"./createLucideIcon-XDsn1f4s.js";import"./align-justify-DzJpg43a.js";import"./Image-BNe35iiT.js";const O=({title:o})=>{const{toast:m}=v(),{data:t,setData:s,post:n,errors:g,processing:p,recentlySuccessful:r}=c({name:"",description:""});d.useEffect(()=>{r&&(m({variant:"default",title:"Tambah Kepanitiaan",description:"Berhasil menambahkan data kepanitiaan baru!"}),s({...t,name:"",description:""}))},[r]);const l=a=>{a.preventDefault(),n(route("admin.kepanitiaan.store"))};return e.jsxs(j,{children:[e.jsx(x,{title:o}),e.jsxs("div",{className:"flex flex-col justify-center p-3 max-w-xl",children:[e.jsx("h1",{className:"text-2xl text-black font-bold mb-5",children:"Form Tambah Data Kepanitiaan"}),e.jsxs("form",{onSubmit:l,children:[e.jsxs("div",{className:"mb-3",children:[e.jsx(i,{htmlFor:"name",className:"text-right",children:"Nama"}),e.jsx(u,{id:"name",value:t.name,onChange:a=>s("name",a.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-3",children:[e.jsx(i,{htmlFor:"description",className:"text-right",children:"Deskripsi"}),e.jsx(b,{value:t.description,onChange:a=>s("description",a.target.value),className:"col-span-3 mb-3",rows:10})]}),e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(h,{href:route("admin.prodi.index"),className:"bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2",children:"Kembali"}),e.jsx(f,{type:"submit",disabled:p,children:"Simpan"})]}),e.jsx(N,{show:r,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("span",{className:"text-sm",children:"Berhasil!"})})]})]})]})};export{O as default};