import{W as x,r as h,j as e,Y as j,a as f}from"./app-CbQMMcCF.js";import{I as i}from"./input-NTMwya5q.js";import{L as m}from"./label-BDUIQwm3.js";import{B as u}from"./button-DI0Zj6ar.js";import{M as b}from"./MainLayout-C7QiQJ_L.js";import{u as v}from"./use-toast-DxTquMFM.js";import{X as N}from"./transition-Bwp-9Tfr.js";import"./utils-BvcvHkli.js";import"./index-DEn8AMXp.js";import"./align-justify-D9l8-S1f.js";import"./index-CnnH0OWL.js";import"./Combination-Dnd6A2F6.js";import"./index-DQ26hfFQ.js";import"./index-BW2NSRQZ.js";import"./createLucideIcon-B_R7XSt_.js";import"./dropdown-menu-C2URrB9r.js";import"./alert-dialog-BQDOyL3e.js";import"./dialog-BGfzDwcU.js";import"./Image-CMV1XoOO.js";const W=({title:o,user:s})=>{const{toast:n}=v(),{data:t,setData:r,put:d,errors:w,processing:p,recentlySuccessful:l}=x({nim:s==null?void 0:s.nim,name:s==null?void 0:s.name,email:s==null?void 0:s.email,password:"",repeat_password:""});h.useEffect(()=>{l&&(n({variant:"default",title:"Edit User",description:"Berhasil mengubah data user!"}),r({...t,password:"",repeat_password:""}))},[l]);const c=a=>{a.preventDefault(),d(route("admin.user.update",s.id))};return e.jsxs(b,{children:[e.jsx(j,{title:o}),e.jsxs("div",{className:"flex flex-col justify-center p-3 max-w-xl",children:[e.jsx("h1",{className:"text-2xl text-black font-bold mb-5",children:"Form Edit Data"}),e.jsxs("form",{onSubmit:c,encType:"multipart/form-data",children:[e.jsxs("div",{className:"mb-2",children:[e.jsx(m,{htmlFor:"nim",className:"text-right",children:"NIM"}),e.jsx(i,{id:"nim",type:"text",value:t.nim,onChange:a=>r("nim",a.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(m,{htmlFor:"name",className:"text-right",children:"Nama"}),e.jsx(i,{id:"name",value:t.name,onChange:a=>r("name",a.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(m,{htmlFor:"email",className:"text-right",children:"Email"}),e.jsx(i,{id:"email",type:"email",value:t.email,onChange:a=>r("email",a.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(m,{htmlFor:"password",className:"text-right",children:"Password"}),e.jsx(i,{id:"password",type:"password",value:t.password,onChange:a=>r("password",a.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(m,{htmlFor:"repeat_password",className:"text-right",children:"Repeat Password"}),e.jsx(i,{id:"repeat_password",type:"password",value:t.repeat_password,onChange:a=>r("repeat_password",a.target.value),className:"col-span-3 mb-3"})]}),e.jsx("div",{className:"flex flex-row justify-between items-center",children:e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(f,{href:route("admin.user.index"),className:"bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2",children:"Kembali"}),e.jsx(u,{type:"submit",disabled:p,children:"Simpan"})]})}),e.jsx(N,{show:l,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("span",{className:"text-sm",children:"Berhasil!"})})]})]})]})};export{W as default};