(this["webpackJsonpee-test-site"]=this["webpackJsonpee-test-site"]||[]).push([[0],{21:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(14),s=a.n(c),i=(a(21),a(5)),l=a(8),o=a.n(l),d=a(1);var h=function(e){var t=e.items,a=e.desired,r=e.update,n=e.selectTitle,c=e.bgcolor,s=void 0===c?"bg-blue-500 dark:bg-blue-900":c,i=e.textcolor,l=void 0===i?"text-white dark:text-gray-200":i,o=t.length>0&&t.map((function(e,t){return Object(d.jsx)("option",{value:e.id,children:e.name},t)}));return Object(d.jsxs)("div",{className:"flex flex-col w-full h-16 items-center justify-center",children:[Object(d.jsx)("label",{className:"flex font-bold text-lg text-center pt-2 text-white dark:text-gray-100",children:n}),Object(d.jsxs)("select",{value:a,className:"flex w-3/4 border-2 rounded-3xl focus:outline-none border-white text-center"+l+s,onChange:function(e){return r(e.target.value)},children:[Object(d.jsx)("option",{value:"",className:"hidden",disabled:!0,children:" --select an option-- "}),o]})]})};var u=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)("Simple Cubic Structure"),s=Object(i.a)(c,2),l=s[0],u=s[1],b=Object(r.useState)(void 0),m=Object(i.a)(b,2),x=m[0],j=m[1],p=Object(r.useState)(""),f=Object(i.a)(p,2),g=f[0],O=f[1],y=Object(r.useState)([]),C=Object(i.a)(y,2),v=C[0],w=C[1],S={type:"scatter3d",x:[0,0,0,0,1,1,1,1],y:[0,0,1,1,0,0,1,1],z:[0,1,0,1,0,1,0,1],mode:"markers",name:"joints",marker:{size:12,line:{color:"rgba(217, 217, 217, 0.5)",width:.5},opactiy:.8}},N={type:"scatter3d",x:[0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0],y:[0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1],z:[0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0],mode:"lines",name:"sides",line:{size:4,color:"rgba(0, 0, 0, 0.5)"}},k={type:"scatter3d",x:[0,.5,.5,.5,.5,0,1,0,0,0,1,1,1,1],y:[0,.5,.5,0,1,.5,.5,0,1,1,1,0,0,1],z:[0,0,1,.5,.5,.5,.5,1,1,0,0,1,0,1],mode:"markers",name:"joints",marker:{size:12,line:{color:"rgba(180, 180, 180, 0.5",width:.5},opacity:.8}},T={type:"scatter3d",x:[0,0,0,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0],y:[0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0],z:[0,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1],mode:"lines",name:"sides",line:{size:4,color:"rgba(0, 0, 0, 0.5)"}},z={title:l,margin:{l:0,r:0,b:0,t:40},autosize:!0};return Object(d.jsxs)("div",{className:"ChapterArea",children:[Object(d.jsx)("label",{className:"flex text-2xl font-bold text-gray-800 dark:text-gray-200",children:" Chapter 1: Crystal Structures of Solids "}),Object(d.jsx)("label",{className:"flex text-md font-bold text-gray-800 dark:text-gray-200 text-center w-3/4",children:" Overview: Solids we are interested in have crystaline structures that can be doped to create beneficial electrical characteristics. By understanding the crystal structure and how atoms are arranged within the material you gain a deeper understanding of your devices and can better appreciate their behaviors."}),Object(d.jsxs)("div",{className:"flex flex-row w-full space-x-10 items-center justify-center h-full",children:[Object(d.jsxs)("div",{className:"flex flex-col w-1/4 items-center rounded-3xl bg-gray-300 dark:bg-gray-600 h-4/5 space-y-2",children:[Object(d.jsx)(h,{items:[{id:"Simple",name:"Simple Cubic"},{id:"FCC",name:"FCC"},{id:"BCC",name:"BCC"},{id:"Diamond",name:"Diamond"}],desired:a,update:function(e){"Simple"===e?(w([S,N]),u("Simple Cubic"),n(e)):"FCC"===e?(w([k,T]),u("Face Centered Cubic"),n(e)):n(e)},selectTitle:"Select a Crystal Structure:"}),Object(d.jsx)(h,{items:[{id:"numDen",name:"Number Density"},{id:"massDen",name:"Mass Density"},{id:"atomRad",name:"Atomic Radius"},{id:"atomDis",name:"Atomic Distance"}],desired:g,update:function(e){O(e),"numDen"===e&&j("lattice constant: ")},selectTitle:"Select a problem type:"}),""!==g&&Object(d.jsxs)("div",{className:"flex flex-row space-x-2 justify-around items-center",children:[Object(d.jsx)("label",{className:"flex w-1/5 text-xs text-center",children:x}),Object(d.jsx)("input",{type:"text",className:"flex w-3/5 h-6 focus:outline-none pl-2"})]})]}),Object(d.jsx)(o.a,{className:"flex w-3/5 h-3/5",data:v,layout:z,useResizeHandler:!0})]})]})};var b=function(){return Object(d.jsxs)("div",{className:"ChapterArea",children:[Object(d.jsx)("label",{className:"flex text-lg font-bold text-gray-900",children:" This is chapter 2 "}),Object(d.jsx)("button",{children:"Click to Change Chapter"})]})};var m=function(){var e=Object(r.useState)(600),t=Object(i.a)(e,2),a=t[0],n=(t[1],4.73*Math.pow(10,-4)),c=[{x:Array.from({length:a},(function(e,t){return t})),y:Array.from({length:a},(function(e,t){return 1.17-n*Math.pow(t,2)/(636+t)})),name:"Bandgap Energy vs. Temperature",type:"scatter",mode:"lines",line:{color:"rgb(150, 20, 150)",width:2}}];return Object(d.jsxs)("div",{className:"ChapterArea",children:[Object(d.jsx)("h1",{className:"text-gray-800 text-2xl text-center w-full font-bold",children:"Chapter Three: Quantum Theory of Solids"}),Object(d.jsx)("div",{className:"flex flex-row w-full h-3/4",children:Object(d.jsx)(o.a,{data:c,layout:{width:720,height:480,title:"Bandgap Energy in a Semiconductor",xaxis:{title:{text:"Temperature (K)"},font:{family:"Comic Sans",size:18,color:"#000000"}},yaxis:{title:{text:"Bandgap Energy (eV)"},font:{family:"Comic Sans",size:18,color:"#000000"}},showlegend:!0,legend:{x:.5,xanchor:"right",y:.25}}})})]})};var x=function(){return Object(d.jsx)("div",{className:"ChapterArea",children:Object(d.jsx)("h1",{className:"dark:text-white dark:bg-black text-3xl font-bold",children:"Semiconductor Physics Information Hub"})})},j=a(7);var p=function(e){var t=e.link,a=e.toggle,r=e.set,n=e.pages,c=void 0===n?[]:n,s=c.length>0&&c.map((function(e,t){return Object(d.jsx)(j.b,{id:t,to:"/"+e.path,className:"w-11/12 text-xs font-bold border-b-2 border-black h-6 pt-1 items-center text-center",children:e.name})}));return Object(d.jsxs)(j.b,{id:"RouterNavLink",className:"NavTab",to:"/"+t,onMouseEnter:function(){return r(!0)},onMouseLeave:function(){return r(!1)},children:[t,a&&Object(d.jsx)("div",{className:"pt-2 pb-2 flex flex-col absolute top-16 left-5 items-center w-64 bg-gray-600 dark:bg-gray-200 rounded-3xl",children:s})]})};var f=function(e){var t=e.chapters,a=void 0===t?[]:t,r=a.length>0&&a.map((function(e,t){return Object(d.jsx)(p,{link:e.name,toggle:e.toggle,set:e.set,pages:e.options},e.name)}));return Object(d.jsx)("div",{className:"flex flex-row w-full h-16 items-center justify-around bg-gray-200 dark:bg-black dark:text-white ",children:r})},g=a(2);var O=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(r.useState)(!1),s=Object(i.a)(c,2),l=s[0],o=s[1],h=Object(r.useState)(!1),p=Object(i.a)(h,2),O=p[0],y=p[1],C=[{name:"Chapter1",toggle:a,set:n,options:[{path:"Chapter1_1",name:"1.1 Semiconductor materials"},{path:"Chapter1_2",name:"1.2 Types of Solids"},{path:"Chapter1_3",name:"1.3 Space Lattices"},{path:"Chapter1_4",name:"1.4 The Diamond Structure"},{path:"Chapter1_5",name:"1.5 Atomic Bonding"},{path:"Chapter1_6",name:"1.6 Imperfections and Impurities"},{path:"Chapter1_7",name:"1.7 Semiconductor Growth"},{path:"Chapter1P",name:"1.P Practice Problems"}]},{name:"Chapter2",toggle:l,set:o,options:[{path:"Chapter2_1",name:"2.1 Principles of Quantum Mechanics"},{path:"Chaapter2_2",name:"2.2 Schrodinger's equation"}]},{name:"Chapter3",toggle:O,set:y,options:[{path:"Chapter3_1",name:"3.1 Energy Bands"}]}];return Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"h-screen w-full flex flex-col items-center space-y-16 bg-blue-500 dark:bg-blue-900",onClick:function(){return n(!1),o(!1),y(!1)},children:[Object(d.jsx)(f,{chapters:C}),Object(d.jsxs)(g.c,{children:[Object(d.jsx)(g.a,{path:"/Chapter1",children:Object(d.jsx)(u,{})}),Object(d.jsx)(g.a,{path:"/Chapter2",children:Object(d.jsx)(b,{})}),Object(d.jsx)(g.a,{path:"/Chapter3",children:Object(d.jsx)(m,{})}),Object(d.jsx)(g.a,{path:"/",children:Object(d.jsx)(x,{})})]})]})})},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,33)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),y()}},[[32,1,2]]]);
//# sourceMappingURL=main.3889a031.chunk.js.map