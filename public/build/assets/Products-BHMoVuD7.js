import{r as s,j as e,Y as u,a as f,b as p}from"./app-BC__SOPf.js";import{F as h}from"./FrontLayout-ZEERkES1.js";import{c as l}from"./utils-6PJseIst.js";import{I as g}from"./Image-BNe35iiT.js";import{B as c}from"./button-aI15s4PB.js";import"./index-D6mfvjMq.js";import"./index-l-XiRjVR.js";import"./index-Dm8DcO5X.js";import"./index-CZhsWJq9.js";import"./Combination-D7pIyE80.js";import"./index-DI5J79Mi.js";import"./align-justify-DzJpg43a.js";import"./index-ClB-KppM.js";import"./createLucideIcon-XDsn1f4s.js";import"./toaster--UsfZD4W.js";import"./use-toast-jBdQ0q1s.js";const D=({title:a})=>{const[r,m]=s.useState([]),[o,n]=s.useState(4),i=()=>{p.get(route("api.product.get",{id:"all",count:o})).then(t=>{m(t.data.data)}).catch(t=>console.error(t))};s.useEffect(()=>{i()},[r]);const d=()=>{const t=o+4;n(t)};return e.jsxs(h,{children:[e.jsx(u,{title:a}),e.jsxs("section",{className:l(r.length>0?"mb-[3rem] flex flex-col justify-center items-center":"mb-[3rem] flex flex-col justify-center items-center h-screen"),children:[e.jsx("h1",{className:"font-extrabold text-3xl text-center mb-5 cursor-default mt-[3rem]",children:"HIMATIKOM Store"}),e.jsx("div",{className:l(r.length>0?"p-3 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 text-zinc-900 gap-3 w-full md:w-2/3 lg:w-2/3":"flex flex-col justify-center items-center text-zinc-900 w-full"),children:r.length>0?r.map((t,x)=>e.jsxs("div",{className:"flex flex-col p-2 hover:scale-105 transition-transform duration-500 bg-slate-50 shadow-md rounded-lg",children:[e.jsx(g,{src:t.image,className:"rounded-md mb-3"}),e.jsx("h1",{className:"font-bold mb-3",children:t.name}),e.jsxs("h3",{className:"text-sm font-bold mb-3",children:["Rp. ",Intl.NumberFormat("id-ID").format(+t.price)]}),e.jsx(f,{href:"/",children:e.jsx(c,{children:"Detail"})})]},x)):e.jsx("h1",{className:"text-2xl text-center font-bold",children:"Belum ada produk!"})}),r.length>0?e.jsx("div",{className:"flex justify-center items-center my-[3rem]",children:e.jsx(c,{className:"bg-primary",onClick:d,children:"Produk Lainya"})}):e.jsx(e.Fragment,{})]})]})};export{D as default};
