(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{130:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return u})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(8),i=(r(0),r(161)),o=["components"],c={title:"Guides Overview"},l={unversionedId:"guides/guides-overview",id:"guides/guides-overview",isDocsHomePage:!1,title:"Guides Overview",description:"How to use this documentation",source:"@site/../docs/guides/guides-overview.md",slug:"/guides/guides-overview",permalink:"/docs/guides/guides-overview",editUrl:"https://github.com/frictionlessdata/frictionless-py/edit/master/docs/../docs/guides/guides-overview.md",version:"current",lastUpdatedBy:"Peter Desmet",lastUpdatedAt:1622704393,formattedLastUpdatedAt:"6/3/2021",sidebar:"guides",next:{title:"Introduction",permalink:"/docs/guides/introduction"}},u=[{value:"Beginner Level",id:"beginner-level",children:[]},{value:"Intermediate Level",id:"intermediate-level",children:[]},{value:"Advanced Level",id:"advanced-level",children:[]}],d={toc:u};function s(e){var t=e.components,r=Object(a.a)(e,o);return Object(i.b)("wrapper",Object(n.a)({},d,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("big",null,"How to use this documentation"))),Object(i.b)("p",null,"Frictionless Framework documentation has various guides which can be grouped by an end user level in relation to the framework:"),Object(i.b)("h3",{id:"beginner-level"},"Beginner Level"),Object(i.b)("p",null,"Installation and first steps with Frictionless Framework:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/quick-start"},"Quick Start")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/basic-examples"},"Basic Examples"))),Object(i.b)("h3",{id:"intermediate-level"},"Intermediate Level"),Object(i.b)("p",null,"Main Frictionless Framework functionality: describe, extract, validate, and transform:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/describing-data"},"Describing Data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/extracting-data"},"Extracting Data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/validation-guide"},"Validating Data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/transform-guide"},"Transforming Data"))),Object(i.b)("h3",{id:"advanced-level"},"Advanced Level"),Object(i.b)("p",null,"Explor the following section for more advanced guides:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/framework/package-guide"},"Mastering the Framework")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/docs/guides/extension/design-guide"},"Writing an Extension"))))}s.isMDXComponent=!0},161:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=d(r),p=n,m=s["".concat(o,".").concat(p)]||s[p]||b[p]||i;return r?a.a.createElement(m,c(c({ref:t},u),{},{components:r})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"}}]);