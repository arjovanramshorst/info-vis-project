(this["webpackJsonpinfo-vis-app"]=this["webpackJsonpinfo-vis-app"]||[]).push([[0],{184:function(e,t,n){e.exports=n(283)},189:function(e,t,n){},252:function(e,t,n){},253:function(e,t,n){},283:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(5),o=n.n(i),_=(n(189),n(12)),l=n(36),d=n(60),y=function(e){return window.location.hostname.startsWith("localhost")?e:"/".concat("info-vis-project").concat(e)},c=(n(84),n(42)),u=(n(85),n(27)),m=n(13);function h(){var e=Object(_.a)(["\n    font-family: HelveticaNeue-Light, serif;\n    font-size: 30px;\n    line-height: 1.15;\n    padding-bottom: 10px;\n    color: rgba(0,0,0,0.65);\n"]);return h=function(){return e},e}function x(){var e=Object(_.a)(["\n    font-family: HelveticaNeue-CondensedBold, serif;\n    font-size: 72px;\n    margin-bottom: 10px;\n    line-height: 1.15;\n    color: rgba(0,0,0,0.65);\n"]);return x=function(){return e},e}function g(){var e=Object(_.a)(["\n    font-family: HelveticaNeue-Light, serif;\n    font-size: 20px;\n    background: none;\n    color: black;\n    border: 8px solid black;\n    letter-spacing: 1vw;\n    padding-left: 1vw;\n    height: 10vh;\n    cursor: pointer;\n    &:hover {\n        // TODO: Add styling for hover here @ravi\n    }\n"]);return g=function(){return e},e}var s=m.a.button(g()),w=m.a.h1(x()),p=m.a.h2(h()),f=function(){return r.createElement(c.a,{type:"flex",style:{paddingLeft:"8vw",paddingTop:"16vh"}},r.createElement(u.a,{md:8},r.createElement(w,null,"GENDER ",r.createElement("br",null),"EQUALITY ",r.createElement("br",null),"IN EUROPE"),r.createElement(p,null,"Infographic highlighting ",r.createElement("br",null),"the gender equality ",r.createElement("br",null),"condition in Europe"),r.createElement(d.b,{to:"/slides"},r.createElement(s,null,"LEARN MORE"))))},k=n(289),v=n(288),b=n(15),E=(n(200),n(77)),q=(n(202),n(148)),O=(n(204),n(107));function j(){var e=Object(_.a)(["\n    background-color: #ffffff;\n    padding: 25px 25px 0 25px;\n"]);return j=function(){return e},e}var S=O.a.Step,L=m.a.div(j()),D=function(e){var t=e.step,n=e.setStep;return r.createElement(L,null,r.createElement(O.a,{progressDot:!0,current:t,onChange:n},r.createElement(S,{title:"The gender gap in the EU",description:""}),r.createElement(S,{title:"We are on our way, but slowly",description:""}),r.createElement(S,{title:"Some countries are doing great",description:""}),r.createElement(S,{title:"But others are staying behind",description:""}),r.createElement(S,{title:"A+ for effort",description:""}),r.createElement(S,{title:"Core domains",description:""}),r.createElement(S,{title:"See for yourself",description:""})),r.createElement(q.a,null))},C=n(149),Y=n(160),T=n(22),M=[12,58],P=function(e,t){return T.b().projection(function(e,t){return T.a().center(M).scale(.8*t).translate([e/2,t/2])}(e,t))},B=n(156),I=function(e){var t=e.x,n=e.y,a=e.data,i=e.width,o=e.height,_=e.init,l=e.render,d=e.dependsOn,y=void 0===d?[]:d,c=r.useRef(null),u=Object(r.useState)({}),m=Object(b.a)(u,2),h=m[0],x=m[1];return Object(r.useLayoutEffect)((function(){var e={};_(T.g(c.current),(function(t,n){e[t]=n})),x(e)}),[]),Object(r.useEffect)((function(){h&&a&&l(T.g(c.current),a,h)}),[h,a,i,o].concat(Object(B.a)(y))),r.createElement("svg",{ref:c,style:{width:i,height:o},transform:"translate(".concat(t,", ").concat(n,")")})},N={"EU-28":{gender_equality_index_2005:62,gender_equality_index_2010:63.8,gender_equality_index_2015:66.2,work_2005:70,work_2010:70.5,work_2015:71.5,money_2005:73.9,money_2010:78.4,money_2015:79.6,knowledge_2005:60.8,knowledge_2010:61.8,knowledge_2015:63.4,time_2005:66.7,time_2010:66.3,time_2015:65.7,power_2005:38.9,power_2010:41.9,power_2015:48.5,health_2005:85.9,health_2010:87.2,health_2015:87.4},BE:{gender_equality_index_2005:66,gender_equality_index_2010:69.3,gender_equality_index_2015:70.5,work_2005:71,work_2010:72.7,work_2015:73.8,money_2005:81.3,money_2010:85.5,money_2015:87.5,knowledge_2005:68.1,knowledge_2010:70.6,knowledge_2015:71.1,time_2005:74.3,time_2010:70.3,time_2015:65.3,power_2005:39.8,power_2010:47.9,power_2015:53.4,health_2005:86.3,health_2010:86.5,health_2015:86.3},BG:{gender_equality_index_2005:56,gender_equality_index_2010:55,gender_equality_index_2015:58,work_2005:67.3,work_2010:67.9,work_2015:68.6,money_2005:54.3,money_2010:60.8,money_2015:61.9,knowledge_2005:52.5,knowledge_2010:50.4,knowledge_2015:53.3,time_2005:50.9,time_2010:43.9,time_2015:42.7,power_2005:48.4,power_2010:45.8,power_2015:56,health_2005:72.6,health_2010:75.3,health_2015:76.4},CZ:{gender_equality_index_2005:53.6,gender_equality_index_2010:55.6,gender_equality_index_2015:53.6,work_2005:65.3,work_2010:64.9,work_2015:66.1,money_2005:70.2,money_2010:73.8,money_2015:75.9,knowledge_2005:52.2,knowledge_2010:55.4,knowledge_2015:57.3,time_2005:51.2,time_2010:53.8,time_2015:57.3,power_2005:29.6,power_2010:31,power_2015:22.6,health_2005:84.6,health_2010:85.7,health_2015:86},DK:{gender_equality_index_2005:74.6,gender_equality_index_2010:75.2,gender_equality_index_2015:76.8,work_2005:78.9,work_2010:79.8,work_2015:79.2,money_2005:82.7,money_2010:83.6,money_2015:86.6,knowledge_2005:73.7,knowledge_2010:73.2,knowledge_2015:73.6,time_2005:82.7,time_2010:80.4,time_2015:83.1,power_2005:54.7,power_2010:58,power_2015:61.5,health_2005:91.1,health_2010:90.3,health_2015:89.6},DE:{gender_equality_index_2005:60,gender_equality_index_2010:62.6,gender_equality_index_2015:65.5,work_2005:68.1,work_2010:70,work_2015:71.4,money_2005:83.3,money_2010:83.2,money_2015:84.2,knowledge_2005:55.3,knowledge_2010:56.3,knowledge_2015:52.9,time_2005:66.6,time_2010:69.8,time_2015:65,power_2005:34,power_2010:38.3,power_2015:53,health_2005:86.6,health_2010:89.3,health_2015:90.5},EE:{gender_equality_index_2005:52.2,gender_equality_index_2010:53.4,gender_equality_index_2015:56.7,work_2005:71,work_2010:71.2,work_2015:72.1,money_2005:58.4,money_2010:65.5,money_2015:66.7,knowledge_2005:49.5,knowledge_2010:51.6,knowledge_2015:53.2,time_2005:74.6,time_2010:73.7,time_2015:74.7,power_2005:22.5,power_2010:21.9,power_2015:28.2,health_2005:81,health_2010:82.7,health_2015:81.5},IE:{gender_equality_index_2005:61.9,gender_equality_index_2010:65.4,gender_equality_index_2015:69.5,work_2005:71.1,work_2010:73.5,work_2015:73.9,money_2005:79.5,money_2010:85.5,money_2015:84.7,knowledge_2005:60.8,knowledge_2010:65.3,knowledge_2015:66.4,time_2005:74.2,time_2010:70.8,time_2015:74.2,power_2005:32.1,power_2010:37.2,power_2015:48.6,health_2005:90.4,health_2010:90.7,health_2015:90.6},EL:{gender_equality_index_2005:46.8,gender_equality_index_2010:48.6,gender_equality_index_2015:50,work_2005:62.5,work_2010:63.6,work_2015:64.2,money_2005:71.9,money_2010:75.3,money_2015:70.7,knowledge_2005:47.2,knowledge_2010:53.4,knowledge_2015:55.6,time_2005:46.2,time_2010:35.6,time_2015:44.7,power_2005:18.2,power_2010:22.3,power_2015:21.7,health_2005:84.6,health_2010:84.3,health_2015:83.1},ES:{gender_equality_index_2005:62.2,gender_equality_index_2010:66.4,gender_equality_index_2015:68.3,work_2005:68.1,work_2010:71.8,work_2015:72.4,money_2005:73.6,money_2010:77.1,money_2015:75.9,knowledge_2005:59.3,knowledge_2010:63.5,knowledge_2015:65.3,time_2005:58,time_2010:60.8,time_2015:64,power_2005:45.9,power_2010:52.6,power_2015:57,health_2005:88.1,health_2010:88.6,health_2015:89.6},FR:{gender_equality_index_2005:65.2,gender_equality_index_2010:67.5,gender_equality_index_2015:72.6,work_2005:70.5,work_2010:71.5,work_2015:72.1,money_2005:81.6,money_2010:83.5,money_2015:86.1,knowledge_2005:62.3,knowledge_2010:62,knowledge_2015:66.1,time_2005:69.1,time_2010:66.6,time_2015:67.3,power_2005:43.6,power_2010:52.4,power_2015:68.2,health_2005:86.9,health_2010:86.7,health_2015:87.1},HR:{gender_equality_index_2005:50.3,gender_equality_index_2010:52.3,gender_equality_index_2015:53.1,work_2005:67.5,work_2010:67.2,work_2015:69.4,money_2005:68.6,money_2010:68.6,money_2015:69.9,knowledge_2005:43.6,knowledge_2010:49.9,knowledge_2015:49.8,time_2005:48.3,time_2010:49.8,time_2015:51,power_2005:27.4,power_2010:28.4,power_2015:28.5,health_2005:81.4,health_2010:81.5,health_2015:83.3},IT:{gender_equality_index_2005:49.2,gender_equality_index_2010:53.3,gender_equality_index_2015:62.1,work_2005:60.8,work_2010:61.3,work_2015:62.4,money_2005:76.2,money_2010:78.9,money_2015:78.6,knowledge_2005:54.1,knowledge_2010:53.8,knowledge_2015:61.4,time_2005:60.1,time_2010:55.1,time_2015:59.3,power_2005:16.1,power_2010:25.2,power_2015:45.3,health_2005:85.8,health_2010:86.3,health_2015:86.3},CY:{gender_equality_index_2005:45.9,gender_equality_index_2010:49,gender_equality_index_2015:55.1,work_2005:66.3,work_2010:70.5,work_2015:70.7,money_2005:72.6,money_2010:80.7,money_2015:79.2,knowledge_2005:43.4,knowledge_2010:55.5,knowledge_2015:58.5,time_2005:47.7,time_2010:45.9,time_2015:51.3,power_2005:16.4,power_2010:15.4,power_2015:24.7,health_2005:85.8,health_2010:86.4,health_2015:88.2},LV:{gender_equality_index_2005:53.4,gender_equality_index_2010:55.2,gender_equality_index_2015:57.9,work_2005:71.7,work_2010:72.6,work_2015:73.6,money_2005:56.3,money_2010:58.9,money_2015:64.3,knowledge_2005:46.6,knowledge_2010:49.2,knowledge_2015:48.9,time_2005:59.1,time_2010:62,time_2015:65.8,power_2005:34.8,power_2010:34.8,power_2015:39,health_2005:73.8,health_2010:77.3,health_2015:78.4},LT:{gender_equality_index_2005:55.8,gender_equality_index_2010:54.9,gender_equality_index_2015:56.8,work_2005:71.9,work_2010:72.6,work_2015:73.2,money_2005:57,money_2010:60.8,money_2015:65.6,knowledge_2005:55.1,knowledge_2010:54.3,knowledge_2015:55.8,time_2005:53.5,time_2010:52.2,time_2015:50.6,power_2005:37.3,power_2010:32.9,power_2015:36.6,health_2005:77.6,health_2010:80.4,health_2015:79.1},LU:{gender_equality_index_2005:64.4,gender_equality_index_2010:61.2,gender_equality_index_2015:69,work_2005:68.1,work_2010:70.9,work_2015:74,money_2005:93.1,money_2010:91.8,money_2015:94.4,knowledge_2005:62,knowledge_2010:66.3,knowledge_2015:69.4,time_2005:73.2,time_2010:70.2,time_2015:69.1,power_2005:36.2,power_2010:25.6,power_2015:43.5,health_2005:89.2,health_2010:89.8,health_2015:89},HU:{gender_equality_index_2005:49.5,gender_equality_index_2010:52.4,gender_equality_index_2015:50.8,work_2005:65.4,work_2010:66,work_2015:67.2,money_2005:66.5,money_2010:70.8,money_2015:70.7,knowledge_2005:56.9,knowledge_2010:54.5,knowledge_2015:56.9,time_2005:61.1,time_2010:54.1,time_2015:54.3,power_2005:16.3,power_2010:23.5,power_2015:18.7,health_2005:82.4,health_2010:85.4,health_2015:86},MT:{gender_equality_index_2005:56,gender_equality_index_2010:54.4,gender_equality_index_2015:60.1,work_2005:60.8,work_2010:65.1,work_2015:71,money_2005:70.3,money_2010:79.2,money_2015:82.4,knowledge_2005:62.4,knowledge_2010:65.4,knowledge_2015:65.2,time_2005:60.8,time_2010:54.3,time_2015:64.2,power_2005:27.8,power_2010:20.9,power_2015:27.4,health_2005:90.7,health_2010:90.6,health_2015:91.8},NL:{gender_equality_index_2005:67.8,gender_equality_index_2010:74,gender_equality_index_2015:72.9,work_2005:74.8,work_2010:76.3,work_2015:76.7,money_2005:82.2,money_2010:86.6,money_2015:86.8,knowledge_2005:63.9,knowledge_2010:66.9,knowledge_2015:67.3,time_2005:86.4,time_2010:85.9,time_2015:83.9,power_2005:40.3,power_2010:56.9,power_2015:52.9,health_2005:89.7,health_2010:90.3,health_2015:89.9},AT:{gender_equality_index_2005:59.5,gender_equality_index_2010:58.7,gender_equality_index_2015:63.3,work_2005:73.7,work_2010:75.3,work_2015:76.1,money_2005:82.5,money_2010:82.8,money_2015:85.9,knowledge_2005:58.9,knowledge_2010:58.9,knowledge_2015:63.2,time_2005:60.2,time_2010:56,time_2015:61.2,power_2005:29.5,power_2010:28.4,power_2015:34.9,health_2005:91.4,health_2010:91.1,health_2015:91.7},PL:{gender_equality_index_2005:52.4,gender_equality_index_2010:55.5,gender_equality_index_2015:56.8,work_2005:65.2,work_2010:66.3,work_2015:66.8,money_2005:61.4,money_2010:69.5,money_2015:73.3,knowledge_2005:56.7,knowledge_2010:57.8,knowledge_2015:56,time_2005:54.6,time_2010:54.2,time_2015:52.5,power_2005:26.3,power_2010:30.6,power_2015:35.1,health_2005:80.6,health_2010:81.6,health_2015:82.2},PT:{gender_equality_index_2005:49.9,gender_equality_index_2010:53.7,gender_equality_index_2015:56,work_2005:70.6,work_2010:71.4,work_2015:72,money_2005:68.8,money_2010:71.8,money_2015:70.9,knowledge_2005:48.6,knowledge_2010:50.1,knowledge_2015:54.8,time_2005:47.3,time_2010:38.7,time_2015:47.5,power_2005:22.2,power_2010:34.9,power_2015:33.9,health_2005:83.8,health_2010:84.3,health_2015:83.6},RO:{gender_equality_index_2005:49.9,gender_equality_index_2010:50.8,gender_equality_index_2015:52.4,work_2005:68.6,work_2010:67.9,work_2015:67.1,money_2005:53.2,money_2010:59.8,money_2015:59.4,knowledge_2005:47.9,knowledge_2010:47.2,knowledge_2015:51.8,time_2005:48.9,time_2010:50.6,time_2015:50.3,power_2005:30.7,power_2010:30.8,power_2015:33.2,health_2005:69.5,health_2010:69.9,health_2015:70.4},SI:{gender_equality_index_2005:60.8,gender_equality_index_2010:62.7,gender_equality_index_2015:68.4,work_2005:71.2,work_2010:71.9,work_2015:71.8,money_2005:77.7,money_2010:80.3,money_2015:81.6,knowledge_2005:52.1,knowledge_2010:55,knowledge_2015:55,time_2005:73.4,time_2010:68.3,time_2015:72.9,power_2005:36.5,power_2010:41.1,power_2015:60.6,health_2005:86.3,health_2010:86.8,health_2015:87.7},SK:{gender_equality_index_2005:52.5,gender_equality_index_2010:53,gender_equality_index_2015:52.4,work_2005:65.3,work_2010:64.8,work_2015:65.5,money_2005:61.5,money_2010:70.2,money_2015:74,knowledge_2005:54.5,knowledge_2010:59.5,knowledge_2015:60,time_2005:55.3,time_2010:39.9,time_2015:46.3,power_2005:26.9,power_2010:29.5,power_2015:23.1,health_2005:83.5,health_2010:84.8,health_2015:85.3},FI:{gender_equality_index_2005:72,gender_equality_index_2010:73.1,gender_equality_index_2015:73,work_2005:74.2,work_2010:74.5,work_2015:74.7,money_2005:80.1,money_2010:84.1,money_2015:86.4,knowledge_2005:56.6,knowledge_2010:58.6,knowledge_2015:61.3,time_2005:81.6,time_2010:80.1,time_2015:77.4,power_2005:68.4,power_2010:69.1,power_2015:65.3,health_2005:89.2,health_2010:89.5,health_2015:89.7},SE:{gender_equality_index_2005:78.8,gender_equality_index_2010:80.1,gender_equality_index_2015:82.6,work_2005:78.7,work_2010:80.4,work_2015:82.6,money_2005:84.1,money_2010:85.3,money_2015:87.5,knowledge_2005:68.1,knowledge_2010:70.7,knowledge_2015:72.8,time_2005:89.6,time_2010:84.5,time_2015:90.1,power_2005:74.1,power_2010:77.8,power_2015:79.5,health_2005:91.7,health_2010:93.2,health_2015:94.1},GB:{gender_equality_index_2005:71.2,gender_equality_index_2010:68.7,gender_equality_index_2015:71.5,work_2005:74.2,work_2010:75.1,work_2015:76.6,money_2005:79.7,money_2010:79.8,money_2015:81.2,knowledge_2005:75.8,knowledge_2010:73.3,knowledge_2015:71.8,time_2005:69.4,time_2010:72.1,time_2015:69.9,power_2005:51.4,power_2010:42.4,power_2015:53,health_2005:93.1,health_2010:94.1,health_2015:93.1}};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(n,!0).forEach((function(t){Object(C.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function F(){var e=Object(_.a)(["\n    height: calc(100vh - 140px);\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n\n    svg rect {\n        fill: #f0f2f5; /* map background colour */\n        //stroke: #2A2C39; /* map border colour */\n        //stroke-width: 1; /* map border width */\n    }\n\n    .country {\n        //fill: #4b5358; /* country colour */\n        stroke: #2a2c39; /* country border colour */\n        stroke-width: 1; /* country border width */\n        &.selectable {\n            //fill: rgba(0,0,0,0.30);\n            cursor: pointer;\n            &:hover {\n                fill: #ffffff; /* hover colour */\n            }\n        }\n\n        &.country-selected {\n            fill: #ff0000; /* country colour */\n        }\n    }\n\n    .countryLabel {\n        display: none; /* hide all country labels by default */\n    }\n\n    .countryName {\n        fill: #fffaff; /* country label text colour */\n    }\n\n    .countryLabelBg {\n        fill: #30bced; /* country label background colour */\n    }\n"]);return F=function(){return e},e}var z=m.a.div(F()),A=function(e){var t=e.selected,n=e.setSelected,a=e.selectedFeature,i=e.selectedYear,o=(Object(Y.a)(e,["selected","setSelected","selectedFeature","selectedYear"]),Object(r.useRef)(null)),_=Object(r.useState)(800),l=Object(b.a)(_,2),d=l[0],m=l[1],h=Object(r.useState)(800),x=Object(b.a)(h,2),g=x[0],s=x[1],w=Object(r.useState)(null),p=Object(b.a)(w,2),f=p[0],k=p[1],v="".concat(a,"_").concat(i);return Object(r.useEffect)((function(){var e=function(){o&&o.current&&(s(o.current.getBoundingClientRect().height),m(o.current.getBoundingClientRect().width))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),Object(r.useEffect)((function(){o&&o.current&&(s(o.current.getBoundingClientRect().height),m(o.current.getBoundingClientRect().width))})),Object(r.useEffect)((function(){T.c(y("/assets/custom.geo.json")).then((function(e){if(!f){var t=e.features.map((function(e){var t=e.properties.iso_a2;return N[t]?X({},e,{equalityData:N[t]}):e}));k({features:t})}}))})),Object(r.useEffect)((function(){f&&k(X({},f,{features:f.features.map((function(e){return t&&e.properties.iso_a3===t.properties.iso_a3?X({},e,{selected:!0}):X({},e,{selected:!1})}))}))}),[t]),r.createElement(c.a,null,r.createElement(u.a,null,r.createElement(z,{ref:o},r.createElement(I,{x:0,y:0,width:d,height:g,data:f,dependsOn:[i,a],init:function(e,t){t("path",P(d,g));var n=e.append("g").attr("id","map");n.append("rect").attr("x",0).attr("y",0).attr("width",d).attr("height",g),t("countriesGroup",n)},render:function(e,t,r){var i=r.countriesGroup;if(i){i.attr("width",d).attr("height",g);var o=i.selectAll("path").data(t.features);o.enter().append("path"),o.exit().remove();var _=P(d,g),l=T.f().domain([T.e(t.features,(function(e){return e.equalityData&&e.equalityData[v]})),T.d(t.features,(function(e){return e.equalityData&&e.equalityData[v]}))]).range(function(e){switch(e){case"gender_equality_index":return["white","hsl(279, 100%, 40%)"];case"work":return["white","hsl(317, 100%, 35%)"];case"money":return["white","hsl(89, 100%, 36%)"];case"knowledge":return["white","hsl(227, 100%, 40%)"];case"time":return["white","hsl(26, 100%, 50%)"];case"power":return["white","hsl(1, 100%, 50%)"];case"health":return["white","hsl(52, 100%, 48%)"]}}(a));o.attr("d",_).attr("class",(function(e,t){return"country ".concat(e.selected?"country-selected":""," ").concat(e.equalityData?"selectable":"")})).attr("fill",(function(e){return e.equalityData?l(e.equalityData[v]):"#4b5358"})).on("click",(function(e,t){e.equalityData&&n(e)}))}}}))))},H=n(150),U=n(151),W=n(157),G=n(152),K=n(161),J=(n(252),function(e){function t(){return Object(H.a)(this,t),Object(W.a)(this,Object(G.a)(t).apply(this,arguments))}return Object(K.a)(t,e),Object(U.a)(t,[{key:"getMinX",value:function(){return this.props.data[0].x}},{key:"getMaxX",value:function(){var e=this.props.data;return e[e.length-1].x}},{key:"getMinY",value:function(){var e=this.props.data;return e.reduce((function(e,t){return t.y<e?t.y:e}),e[0].y)}},{key:"getMaxY",value:function(){var e=this.props.data;return e.reduce((function(e,t){return t.y>e?t.y:e}),e[0].y)}},{key:"getSvgX",value:function(e){var t=this.props.svgWidth;return e/this.getMaxX()*t}},{key:"getSvgY",value:function(e){var t=this.props.svgHeight;return t-e/this.getMaxY()*t}},{key:"makePath",value:function(){var e=this,t=this.props,n=t.data,r=t.color,i="M "+this.getSvgX(n[0].x)+" "+this.getSvgY(n[0].y)+" ";return i+=n.map((function(t,n){return"L "+e.getSvgX(t.x)+" "+e.getSvgY(t.y)+" "})),a.a.createElement("path",{className:"linechart_path",d:i,style:{stroke:r}})}},{key:"makeAxis",value:function(){var e=this.getMinX(),t=this.getMaxX(),n=this.getMinY(),r=this.getMaxY();return a.a.createElement("g",{className:"linechart_axis"},a.a.createElement("line",{x1:this.getSvgX(e),y1:this.getSvgY(n),x2:this.getSvgX(t),y2:this.getSvgY(n)}),a.a.createElement("line",{x1:this.getSvgX(e),y1:this.getSvgY(n),x2:this.getSvgX(e),y2:this.getSvgY(r)}))}},{key:"render",value:function(){var e=this.props,t=e.svgHeight,n=e.svgWidth,r=this.props.boxshadow;return a.a.createElement("svg",{viewBox:"0 0 ".concat(n," ").concat(t),style:{marginTop:"2vh",boxShadow:r}},this.makePath(),this.makeAxis())}}]),t}(r.Component));J.defaultProps={data:[],color:"#2196F3",svgHeight:250,svgWidth:700};var Q=J,V=[[{x:0,y:164},{x:1,y:159},{x:2,y:160},{x:3,y:90},{x:4,y:139},{x:5,y:132},{x:6,y:100},{x:7,y:117},{x:8,y:81},{x:9,y:178},{x:10,y:160},{x:11,y:69},{x:12,y:60},{x:13,y:126},{x:14,y:172},{x:15,y:157},{x:16,y:181},{x:17,y:182},{x:18,y:115},{x:19,y:100},{x:20,y:64},{x:21,y:149},{x:22,y:188},{x:23,y:111},{x:24,y:154},{x:25,y:89},{x:26,y:117},{x:27,y:96},{x:28,y:65},{x:29,y:65},{x:30,y:150}],[{x:0,y:108},{x:1,y:63},{x:2,y:199},{x:3,y:126},{x:4,y:167},{x:5,y:198},{x:6,y:78},{x:7,y:91},{x:8,y:138},{x:9,y:110},{x:10,y:162},{x:11,y:107},{x:12,y:168},{x:13,y:132},{x:14,y:97},{x:15,y:157},{x:16,y:136},{x:17,y:161},{x:18,y:64},{x:19,y:134},{x:20,y:168},{x:21,y:66},{x:22,y:107},{x:23,y:95},{x:24,y:67},{x:25,y:77},{x:26,y:121},{x:27,y:65},{x:28,y:85},{x:29,y:60},{x:30,y:107}],[{x:0,y:102},{x:1,y:146},{x:2,y:186},{x:3,y:61},{x:4,y:89},{x:5,y:92},{x:6,y:105},{x:7,y:97},{x:8,y:114},{x:9,y:94},{x:10,y:106},{x:11,y:161},{x:12,y:94},{x:13,y:119},{x:14,y:80},{x:15,y:142},{x:16,y:136},{x:17,y:145},{x:18,y:109},{x:19,y:92},{x:20,y:173},{x:21,y:78},{x:22,y:61},{x:23,y:133},{x:24,y:127},{x:25,y:117},{x:26,y:106},{x:27,y:192},{x:28,y:148},{x:29,y:147},{x:30,y:162}],[{x:0,y:121},{x:1,y:96},{x:2,y:194},{x:3,y:89},{x:4,y:120},{x:5,y:139},{x:6,y:137},{x:7,y:97},{x:8,y:117},{x:9,y:123},{x:10,y:144},{x:11,y:130},{x:12,y:161},{x:13,y:93},{x:14,y:116},{x:15,y:115},{x:16,y:92},{x:17,y:98},{x:18,y:109},{x:19,y:155},{x:20,y:94},{x:21,y:187},{x:22,y:145},{x:23,y:89},{x:24,y:156},{x:25,y:84},{x:26,y:80},{x:27,y:50},{x:28,y:50},{x:29,y:103},{x:30,y:71}],[{x:0,y:141},{x:1,y:106},{x:2,y:116},{x:3,y:174},{x:4,y:175},{x:5,y:76},{x:6,y:93},{x:7,y:121},{x:8,y:183},{x:9,y:98},{x:10,y:94},{x:11,y:74},{x:12,y:79},{x:13,y:182},{x:14,y:68},{x:15,y:87},{x:16,y:174},{x:17,y:116},{x:18,y:194},{x:19,y:79},{x:20,y:182},{x:21,y:181},{x:22,y:156},{x:23,y:57},{x:24,y:113},{x:25,y:132},{x:26,y:136},{x:27,y:108},{x:28,y:174},{x:29,y:136},{x:30,y:146}],[{x:0,y:154},{x:1,y:117},{x:2,y:165},{x:3,y:139},{x:4,y:84},{x:5,y:181},{x:6,y:158},{x:7,y:164},{x:8,y:145},{x:9,y:88},{x:10,y:130},{x:11,y:108},{x:12,y:177},{x:13,y:180},{x:14,y:96},{x:15,y:149},{x:16,y:161},{x:17,y:127},{x:18,y:121},{x:19,y:61},{x:20,y:141},{x:21,y:106},{x:22,y:174},{x:23,y:131},{x:24,y:193},{x:25,y:134},{x:26,y:66},{x:27,y:101},{x:28,y:65},{x:29,y:117},{x:30,y:57}]];n(253);var Z=function(e){var t=e.width,n=e.height,r=e.data,i=e.color,o=e.percentage;return a.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},a.a.createElement("svg",{style:{marginLeft:5},width:t,height:n},a.a.createElement("path",{style:{animation:"bounce linear 1000ms",transformOrigin:"50% 100%",margin:"auto"},d:r,fill:i})),a.a.createElement("p",{style:{fontSize:12}},o))},$=(n(284),n(155)),ee=function(e){var t=e.year,n=e.setYear;return r.createElement($.a,{step:null,min:2005,max:2015,marks:{2005:"2005",2010:"2010",2015:"2015"},value:Number(t),onChange:function(e){return n("".concat(e))}})},te=(n(285),n(30)),ne=function(e){var t=e.feature,n=e.setFeature;return r.createElement(te.a,{value:t,onChange:n},r.createElement(te.a.Option,{value:"gender_equality_index"},"Gender equality index"),r.createElement(te.a.Option,{value:"work"},"Work"),r.createElement(te.a.Option,{value:"money"},"Money"),r.createElement(te.a.Option,{value:"knowledge"},"Knowledge"),r.createElement(te.a.Option,{value:"time"},"Time"),r.createElement(te.a.Option,{value:"power"},"Power"),r.createElement(te.a.Option,{value:"health"},"Health"))};function re(){var e=Object(_.a)(["\n    font-size: 30px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);return re=function(){return e},e}function ae(){var e=Object(_.a)(["\n    background: #fff;\n    padding: 24px;\n    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/ - 100px /*padding*/);\n"]);return ae=function(){return e},e}function ie(){var e=Object(_.a)(["\n    padding: 50px;\n    min-height: calc(100vh - 64px /*header*/ - 84px /*footer*/);\n"]);return ie=function(){return e},e}var oe=Object(m.a)(E.a.Content)(ie()),_e=m.a.div(ae()),le=m.a.a(re()),de=Object(l.f)((function(){var e=Object(r.useState)(null),t=Object(b.a)(e,2),n=t[0],a=t[1],i=Object(r.useState)(0),o=Object(b.a)(i,2),_=o[0],l=o[1],d=Object(r.useState)(!1),y=Object(b.a)(d,2),m=y[0],h=y[1],x=Object(r.useState)(V[0]),g=Object(b.a)(x,2),s=g[0],w=g[1],p=Object(r.useState)("gender_equality_index"),f=Object(b.a)(p,2),k=f[0],v=f[1],q=Object(r.useState)("2005"),O=Object(b.a)(q,2),j=O[0],S=O[1],L=["blue","#F44336"],C=["0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)","0 4px 8px 0 grey, 0 6px 20px 0 rgba(0, 0, 0, 0.19)"],Y=Object(r.useState)([50,60,12,34,56]),T=Object(b.a)(Y,2),M=T[0];T[1];return r.createElement("div",null,r.createElement(E.a,{style:{backgroundColor:"white"}},r.createElement(D,{step:_,setStep:l}),r.createElement(c.a,{type:"flex",align:"middle"},r.createElement(u.a,{md:1},r.createElement(le,{onClick:function(){h(!0),setTimeout((function(){h(!1)}),500),setTimeout((function(){0==_?l(6):(w(V[_-1]),l(_-1))}),500)},style:{}},"\u276e")),r.createElement(u.a,{md:22},r.createElement("div",null,r.createElement("div",{style:{opacity:1,transition:"opacity 0.5s linear"}},r.createElement("div",{style:{opacity:1,transition:"opacity 0.5s linear",display:"flex"}},6!=_&&5!=_?r.createElement("div",{style:m?{opacity:0,transition:"opacity 0.5s linear",width:"80%"}:{opacity:1,transition:"opacity 0.5s linear",width:"80%"}},r.createElement(Q,{data:s,color:L[_/3],boxshadow:C[0]}),r.createElement("div",{style:_<3?{color:"black",marginTop:"10vh"}:{color:"white",marginTop:"10vh"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")):5==_?r.createElement("div",{style:m?{opacity:0,transition:"opacity 0.5s linear",width:"80%"}:{opacity:1,transition:"opacity 0.5s linear",width:"80%"}},r.createElement("div",{style:{display:"flex",justifyContent:"center"}},M.map((function(e){var t=300-300*e/100;return r.createElement(Z,{key:e,width:"60px",height:"300px",color:"#ea1",percentage:"".concat(Number(e).toFixed(2)," %"),data:"M 0 ".concat(300," L 0  ").concat(t," L 60 ").concat(t," l 60 ").concat(300," Z")})}))),r.createElement("div",{style:{color:"white",marginTop:"10vh"}},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")):r.createElement(c.a,{style:m?{opacity:0,transition:"opacity 0.5s linear",display:"flex",width:"80%"}:{opacity:1,transition:"opacity 0.5s linear",display:"flex",width:"80%"}},r.createElement(u.a,{md:12},r.createElement(A,{selected:n,setSelected:a,selectedFeature:k,selectedYear:j})),r.createElement(u.a,{md:12},r.createElement(oe,null,r.createElement(_e,null,r.createElement(ee,{year:j,setYear:S}),r.createElement(ne,{feature:k,setFeature:v}))))))))),r.createElement(u.a,{md:1},r.createElement(le,{onClick:function(){h(!0),setTimeout((function(){h(!1)}),500),setTimeout((function(){6==_?l(0):(w(V[_+1]),l(_+1))}),500)},style:{}},"\u276f")))),r.createElement(E.a.Footer,{style:{textAlign:"center",backgroundColor:"black",border:"1px solid grey"}},r.createElement("p",{style:{color:"white"}},"InfoVis 2019 Q2 (Group 25)")))}));function ye(){var e=Object(_.a)(["\n    position: absolute;\n    width: 100%;\n    top: 0;\n    left: 0;\n    &.fade-enter {\n        opacity: 0;\n        animation-duration: 0.5s !important;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n        animation-play-state: paused;\n        &.fade-enter-active {\n            animation-name: fadeIn;\n            animation-play-state: running;\n        }\n    }\n\n    &.fade-appear {\n        opacity: 0;\n        animation-duration: 0.5s !important;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n        animation-play-state: paused;\n        &.fade-appear-active {\n            animation-name: fadeIn;\n            animation-play-state: running;\n        }\n    }\n\n    &.fade-exit {\n        opacity: 1;\n        animation-duration: 0.5s !important;\n        animation-fill-mode: both;\n        animation-timing-function: cubic-bezier(0.55, 0, 0.55, 0.2);\n        animation-play-state: paused;\n        &.fade-exit-active {\n            animation-name: fadeOut;\n            animation-play-state: running;\n        }\n    }\n    @keyframes fadeIn {\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }\n\n    @keyframes fadeOut {\n        0% {\n            opacity: 1;\n        }\n        100% {\n            opacity: 0;\n        }\n    }\n"]);return ye=function(){return e},e}var ce=Object(l.f)((function(e){var t=e.location,n=e.children;return r.createElement(k.a,{style:{position:"relative"}},r.createElement(v.a,{key:t.key,timeout:{enter:500,exit:500},classNames:"fade"},r.createElement(ue,null,r.createElement(l.c,{location:t},n))))})),ue=m.a.section(ye()),me=function(){return r.createElement(d.a,{basename:y("")},r.createElement(ce,null,r.createElement(l.a,{exact:!0,path:"/",component:f}),r.createElement(l.a,{exact:!0,path:"/slides",component:de})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[184,1,2]]]);
//# sourceMappingURL=main.3fef3919.chunk.js.map