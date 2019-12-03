(this["webpackJsonpinfo-vis-app"]=this["webpackJsonpinfo-vis-app"]||[]).push([[0],{166:function(e,t,n){e.exports=n(243)},171:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(3),o=n.n(c),l=(n(171),n(65)),i=(n(113),n(67)),u=(n(115),n(50)),s=n(61),f=n(62),d=n(66),p=n(63),m=n(68),h=(n(173),n(51)),b=n(46),y=(n(130),n(30)),E=n(142),v=n(24),j=n(48);function g(){var e=Object(b.a)(["\n    background: #fff;\n    padding: 24px;\n    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/ - 100px /*padding*/);\n"]);return g=function(){return e},e}function O(){var e=Object(b.a)(["\n    padding: 50px;\n    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/);\n"]);return O=function(){return e},e}var k=function(e){var t=e.onClick,n=e.to,a=Object(E.a)(e,["onClick","to"]);return t?r.createElement(y.a.Item,Object.assign({},a,{onClick:t,key:n}),r.createElement("span",null,a.children),n&&r.createElement(l.b,{to:n})):r.createElement(y.a.Item,Object.assign({},a,{key:n}),r.createElement("span",null,a.children))},w=Object(j.a)(h.a.Content)(O()),x=j.a.div(g()),C=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.location;return r.createElement(h.a,null,r.createElement(h.a.Header,{className:"header"},r.createElement(i.a,{type:"flex"},r.createElement(u.a,null,r.createElement(y.a,{selectedKeys:[e.pathname],theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},r.createElement(k,{to:"/"},"Dashboard"))))),r.createElement(w,null,r.createElement(x,null,this.props.children)),r.createElement(h.a.Footer,{style:{textAlign:"center"}},r.createElement("p",null,"InfoVis 2019 Q2 (Group 25)")))}}]),t}(r.Component),B=Object(v.d)(C),F=(n(244),n(140)),A=n(139),I=n(141),N=n(40),D=[12,58],J=function(e,t){return N.b().projection(function(e,t){return N.a().center(D).scale(.8*t).translate([e/2,t/2])}(e,t))};function S(){var e=Object(b.a)(["\n    svg rect {\n        fill: #ffffff; /* map background colour */\n        stroke: #2A2C39; /* map border colour */\n        stroke-width: 1; /* map border width */\n    }\n\n    .country {\n        fill: #4B5358; /* country colour */\n        stroke: #2A2C39; /* country border colour */\n        stroke-width: 1; /* country border width */\n        cursor: pointer;\n        \n        &.country-selected {\n            fill: #ff0000; /* country colour */\n        }\n    }\n    .country:hover {\n        fill: #ffffff; /* country colour */\n       \n    }\n\n    .country-on {\n        //fill: #4B5358; /* highlight colour for selected country */\n    }\n\n    .countryLabel {\n        display: none; /* hide all country labels by default */\n    }\n\n    .countryName {\n        fill: #FFFAFF; /* country label text colour */\n    }\n\n    .countryLabelBg {\n        fill: #30BCED; /* country label background colour */\n    }\n"]);return S=function(){return e},e}var H=j.a.div(S()),L=function(e){var t=Object(r.useRef)(null),n=Object(r.useState)(null),a=Object(I.a)(n,2),c=a[0],o=a[1];return Object(r.useEffect)((function(){if(e.data&&t.current){var n=N.d(t.current),r=J(700,700);N.c("/assets/custom.geo.json").then((function(e){var t=n.append("g").attr("id","map");t.append("rect").attr("x",0).attr("y",0).attr("width",700).attr("height",700);t.selectAll("path").data(e.features).enter().append("path").attr("d",r).attr("class",(function(e,t){return c&&e.properties.iso_a3===c.properties.iso_a3?"country country-selected":"country"})).on("click",(function(e,t){o(e)}))}))}}),[e.data,c,t.current]),r.createElement(i.a,null,r.createElement(u.a,{md:14},r.createElement(H,null,r.createElement("svg",{className:"d3-component",width:700,height:700,ref:t}))),r.createElement(u.a,{md:10},c&&r.createElement("div",null,r.createElement("h1",null,c.properties.name),r.createElement("pre",null,JSON.stringify(c,null,2)))))},V=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return Object(A.a)(this.props),r.createElement(F.a,{title:"Dashboard for InfoVis Project",subTitle:"Some dataset description"},r.createElement(L,{data:[1,2,3]}))}}]),t}(r.Component),W=function(){return a.a.createElement(l.a,{basename:"info-vis-project"},a.a.createElement(B,null,a.a.createElement(V,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[166,1,2]]]);
//# sourceMappingURL=main.a59f2b8d.chunk.js.map