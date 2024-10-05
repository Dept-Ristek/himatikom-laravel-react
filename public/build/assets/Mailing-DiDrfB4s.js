import{q as d,W as x,r as u,j as e}from"./app-CbQMMcCF.js";import{L as i}from"./label-BDUIQwm3.js";import{T as p}from"./textarea-DpNWb3lw.js";import{B as f}from"./button-DI0Zj6ar.js";import{S as h}from"./switch-RrF-x1_v.js";import{u as j}from"./use-toast-DxTquMFM.js";import{X as b}from"./transition-Bwp-9Tfr.js";import"./index-DEn8AMXp.js";import"./utils-BvcvHkli.js";import"./index-DQ26hfFQ.js";const C=()=>{const{toast:o}=j(),s=d().props.auth.user,{data:t,setData:n,post:l,errors:g,processing:c,recentlySuccessful:r}=x({is_anon:!0,content:""});u.useEffect(()=>{r&&o({variant:"default",title:"Saran & Masukan",description:"Saran dan masukan anda berhasil dikirimkan!"})},[r]);const m=a=>{a.preventDefault(),s||(window.location.href=route("login")),l(route("admin.inbox.store")),n({...t,is_anon:!0,content:""})};return e.jsx("section",{className:"mb-[3rem] flex flex-col w-full justify-center items-center p-3",children:e.jsxs("div",{className:"p-3 rounded-lg w-full md:w-1/2 lg:w-1/2 bg-slate-50 shadow-md",children:[e.jsx("h1",{className:"font-extrabold text-3xl text-center mb-5 cursor-default",children:"Saran & Masukan"}),e.jsxs("form",{onSubmit:m,children:[s?e.jsxs("div",{className:"mb-3",children:[e.jsx(i,{className:"text-right",children:"Sembunyikan Nama Pengirim?"}),e.jsxs("div",{className:"flex flex-row gap-2 items-center",children:[e.jsx(h,{id:"is_proker",checked:t.is_anon,onCheckedChange:a=>n("is_anon",!t.is_anon)}),e.jsx(i,{htmlFor:"is_proker",children:t.is_anon?"Anonim":s==null?void 0:s.name})]})]}):e.jsx(e.Fragment,{}),e.jsxs("div",{className:"mb-2 text-zinc-900",children:[e.jsx(i,{htmlFor:"content",className:"text-right text-md",children:"Isi Pesan"}),e.jsx(p,{id:"description",value:t.content,onChange:a=>n("content",a.target.value),className:"col-span-3 mb-3 w-full border-zinc-900",rows:10})]}),e.jsx("div",{className:"flex flex-row items-center gap-2",children:e.jsx(f,{type:"submit",disabled:c,children:"Simpan"})}),e.jsx(b,{show:r,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("span",{className:"text-sm",children:"Berhasil!"})})]})]})})};export{C as default};
