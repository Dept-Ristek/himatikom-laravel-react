import{W as y,r as o,j as e,Y as N,a as C}from"./app-BC__SOPf.js";import{u as w}from"./use-toast-jBdQ0q1s.js";import{L as i}from"./label-DpfHqOCJ.js";import{I as m}from"./input-Db9qwkHX.js";import{B as n}from"./button-aI15s4PB.js";import{I as P}from"./Image-BNe35iiT.js";import{R as k}from"./index-b4ck2H-m.js";import{M as S}from"./MainLayout-DBQDGeUg.js";import{P as I,a as L,b as R}from"./popover-DmhqyVXy.js";import{C as F}from"./index-D6mfvjMq.js";import{C as T,a as D,b as B,c as E,d as O,e as U}from"./CommandContent-DxBT88uR.js";import{c as _}from"./utils-6PJseIst.js";import{C as z}from"./check-Dm88Pxin.js";import{z as G}from"./transition-CezwKZ0F.js";import"./index-Dm8DcO5X.js";import"./isEqual-CJu3tHnE.js";import"./toaster--UsfZD4W.js";import"./index-CZhsWJq9.js";import"./dropdown-menu-BT1J7vqF.js";import"./index-l-XiRjVR.js";import"./Combination-D7pIyE80.js";import"./index-DI5J79Mi.js";import"./alert-dialog-BfdfrZuh.js";import"./index-ClB-KppM.js";import"./align-justify-DzJpg43a.js";import"./createLucideIcon-XDsn1f4s.js";import"./dialog-iYf8mwPu.js";const xe=({title:u})=>{const x=[{id:"ready",label:"Ready"},{id:"pre-order",label:"Pre Order"},{id:"sold-out",label:"Sold Out"}],{toast:b}=w(),{data:s,setData:t,post:j,errors:M,processing:c,recentlySuccessful:l}=y({name:"",price:0,image:null,description:"",availability:""}),[r,d]=o.useState("/icon/preview.jpg"),[p,h]=o.useState({label_availability:null});o.useEffect(()=>{l&&(b({variant:"default",title:"Tambah Produk",description:"Berhasil menambahkan data produk baru!"}),t({...s,name:"",price:0,image:null,description:"",availability:""}),h({...p,label_availability:null}),d("/icon/preview.jpg"))},[l]);const f=a=>{a.target.files&&a.target.files[0]&&(t("image",a.target.files[0]),d(URL.createObjectURL(a.target.files[0])))},g=a=>{a.preventDefault(),j(route("admin.product.store"))};return e.jsxs(S,{children:[e.jsx(N,{title:u}),e.jsxs("div",{className:"flex flex-col justify-center p-3 max-w-2xl",children:[e.jsx("h1",{className:"text-2xl text-black font-bold mb-5",children:"Form Tambah Data Product"}),e.jsxs("form",{onSubmit:g,children:[e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"name",className:"text-right",children:"Nama"}),e.jsx(m,{id:"name",value:s.name,onChange:a=>t("name",a.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"price",className:"text-right",children:"Harga"}),e.jsx(m,{id:"price",value:s.price,onChange:a=>t("price",+a.target.value),className:"col-span-3 mb-3"})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"image",className:"text-right",children:"Gambar"}),e.jsx(m,{id:"image",type:"file",onChange:f,className:"col-span-3 mb-3 file:bg-slate-200 file:p-2 file:my-auto file:rounded-l-md file:-ml-3 file:-mt-1"})]}),e.jsx("div",{className:"mb-2",children:e.jsx("div",{className:"bg-slate-400 rounded-md w-[15rem] h-full border border-slate-400",children:r&&e.jsx(P,{src:typeof r=="string"?r:URL.createObjectURL(r),alt:"Preview Poster Image",className:"rounded-md h-full w-[15rem] border-slate-400 object-cover"})})}),e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{className:"text-right",children:"Status Produk"}),e.jsxs(I,{children:[e.jsx(L,{asChild:!0,children:e.jsxs(n,{variant:"outline",role:"combobox",className:"w-full justify-between",children:[p.label_availability??"Pilih Status Produk",e.jsx(F,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),e.jsx(R,{className:"w-full p-0",children:e.jsxs(T,{children:[e.jsx(D,{placeholder:"Cari Status...",className:"h-9"}),e.jsxs(B,{children:[e.jsx(E,{children:"Data Status tidak ditemukan."}),e.jsx(O,{children:x.map(a=>e.jsxs(U,{value:a.label,onSelect:()=>{Promise.all([t("availability",a.id),h(v=>({...v,label_availability:a.label}))])},children:[a.label,e.jsx(z,{className:_("ml-auto h-4 w-4 text-black",a.id===s.availability?"opacity-100":"opacity-0")})]},a.id))})]})]})})]})]}),e.jsxs("div",{className:"mb-2",children:[e.jsx(i,{htmlFor:"description",className:"text-right",children:"Deskripsi"}),e.jsx(k,{theme:"snow",value:s.description,onChange:a=>t("description",a),className:"rounded-md",placeholder:"Type anything..."})]}),e.jsxs("div",{className:"flex flex-row items-center gap-2",children:[e.jsx(C,{href:route("admin.product.index"),children:e.jsx(n,{className:"bg-red-500 p-[0.4rem] rounded-md text-sm text-white hover:bg-red-400 px-3 py-2",disabled:c,type:"button",children:"Kembali"})}),e.jsx(n,{type:"submit",disabled:c,children:"Simpan"})]}),e.jsx(G,{show:l,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("span",{className:"text-sm",children:"Berhasil!"})})]})]})]})};export{xe as default};