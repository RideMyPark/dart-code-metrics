"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2377],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(r),u=o,v=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9729:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294),o=r(5321);function a(e){let{version:t,severity:r,hasConfig:a,hasFix:i,isDeprecated:c}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(o.Z,{version:t,severity:r,hasConfig:a,hasFix:i,isDeprecated:c}))}},5321:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);function o(e){let{hasConfig:t,hasFix:r,isDeprecated:o}=e;return n.createElement("div",{className:"rule-options"},t&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),r&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),o&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function a(e){let{severity:t,version:r,hasConfig:a,hasFix:i,isDeprecated:c}=e;const l=null==t?void 0:t.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",r),n.createElement("div",{className:"rule-severity "+l},l),n.createElement(o,{hasConfig:a,hasFix:i,isDeprecated:c}))}},825:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905)),a=r(9729);const i={},c=void 0,l={unversionedId:"rules/common/avoid-throw-in-catch-block",id:"rules/common/avoid-throw-in-catch-block",title:"avoid-throw-in-catch-block",description:"Call throw in a catch block loses the original stack trace and the original exception.",source:"@site/docs/rules/common/avoid-throw-in-catch-block.mdx",sourceDirName:"rules/common",slug:"/rules/common/avoid-throw-in-catch-block",permalink:"/docs/rules/common/avoid-throw-in-catch-block",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-throw-in-catch-block.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-non-null-assertion",permalink:"/docs/rules/common/avoid-non-null-assertion"},next:{title:"avoid-top-level-members-in-tests",permalink:"/docs/rules/common/avoid-top-level-members-in-tests"}},s={},p=[{value:"Example",id:"example",level:3}],d={toc:p};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{version:"4.7.0",severity:"warning",mdxType:"RuleDetails"}),(0,o.kt)("p",null,"Call throw in a catch block loses the original stack trace and the original exception."),(0,o.kt)("p",null,"Since 2.16 version you can use ",(0,o.kt)("a",{parentName:"p",href:"https://api.dart.dev/dev/2.16.0-9.0.dev/dart-core/Error/throwWithStackTrace.html"},"Error.throwWithStackTrace"),"."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"void repository() {\n  try {\n    networkDataProvider();\n  } on Object {\n    throw RepositoryException(); // LINT\n  }\n}\n")))}m.isMDXComponent=!0}}]);