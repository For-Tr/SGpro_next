(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[109],{1834:function(e,s,t){Promise.resolve().then(t.bind(t,2351))},2351:function(e,s,t){"use strict";t.r(s);var i=t(9268),a=t(8948),n=t(6394),r=t.n(n),l=t(5914),c=t(6830),o=t(9191),d=t(5846),m=t.n(d),h=t(2191),j=t(4295),x=t(4952);s.default=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.default,{pageTitle:"Room Style"}),(0,i.jsx)(j.default,{}),(0,i.jsx)(o.Z,{title:"Room Style",innerTitle:"Room Style",bgImage:"/img/banner/page-banner-9.jpg"}),(0,i.jsx)("div",{className:"room__area section-padding",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"row",children:[(0,i.jsx)(h.Z,{}),(0,i.jsx)("div",{className:"col-xl-9 col-lg-8 order-first order-lg-1 lg-mb-30",children:(0,i.jsx)("div",{className:"row justify-content-center",children:a.Z.map((e,s)=>(0,i.jsx)("div",{className:"col-xl-4 col-md-6 mb-30",children:(0,i.jsxs)("div",{className:"deluxe__two-item",children:[(0,i.jsx)("div",{className:"deluxe__two-item-image",children:(0,i.jsx)(m(),{href:"/room-details",children:(0,i.jsx)(r(),{src:e.img.src,alt:e.title,width:500,height:500})})}),(0,i.jsxs)("div",{className:"deluxe__two-item-content",children:[(0,i.jsxs)("span",{children:["$",e.price,"/Night"]}),(0,i.jsx)("h4",{children:(0,i.jsx)(m(),{href:"/room-details",children:e.title})}),(0,i.jsx)("p",{children:e.des}),(0,i.jsx)("div",{className:"deluxe__two-item-content-meta",children:(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"fal fa-bed-alt"})," (",e.bed,") bed's"]}),(0,i.jsxs)("li",{children:[(0,i.jsx)("i",{className:"fal fa-users"})," (",e.guest,") Guest's"]})]})}),(0,i.jsxs)("div",{className:"deluxe__two-item-content-bottom",children:[(0,i.jsxs)(m(),{className:"simple-btn",href:"/room-details",children:[(0,i.jsx)("i",{className:"far fa-chevron-right"})," Read More"]}),(0,i.jsxs)("p",{children:[(0,i.jsx)("i",{className:"fas fa-star"}),(0,i.jsx)("span",{children:e.star}),"2k"]})]})]})]})},s))})})]})})}),(0,i.jsx)(l.Z,{}),(0,i.jsx)(c.default,{})]})},8948:function(e,s){"use strict";async function t(){try{let e=await fetch("http://106.14.245.152/CSAA/projects/?keyword="),s=await e.json(),t=s.map(e=>({title:e.project_name,des:"".concat(e.district_planning_area," | ").concat(e.developer," | ").concat(e.tenure_period," | ").concat(e.development_site_number_of_units," Units"),img:"https://newlauncher.com.sg/project_img/Perspective 1 (Bartley Vue).jpg",price:"TBA",bed:"Various",guest:e.development_site_number_of_units,star:4.5}));return t}catch(e){return console.error("Error fetching projects:",e),[]}}let i=[];(async()=>{i=await t()})(),s.Z=i}},function(e){e.O(0,[95,80,444,664,191,253,698,744],function(){return e(e.s=1834)}),_N_E=e.O()}]);