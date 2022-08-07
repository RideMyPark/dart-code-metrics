"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),o=n(5321);function a(e){let{version:t,severity:n,hasConfig:a,hasFix:l,isDeprecated:i}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(o.Z,{version:t,severity:n,hasConfig:a,hasFix:l,isDeprecated:i}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294);function o(e){let{hasConfig:t,hasFix:n,isDeprecated:o}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),o&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function a(e){let{severity:t,version:n,hasConfig:a,hasFix:l,isDeprecated:i}=e;const s=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:"rule-severity "+s},s),r.createElement(o,{hasConfig:a,hasFix:l,isDeprecated:i}))}},9805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),o=(n(7294),n(3905)),a=n(9729);const l={},i=void 0,s={unversionedId:"rules/common/no-boolean-literal-compare",id:"rules/common/no-boolean-literal-compare",title:"no-boolean-literal-compare",description:"Warns on comparison to a boolean literal, as in x == true. Comparing boolean values to boolean literals is unnecessary, as those expressions will result in booleans too. Just use the boolean values directly or negate them.",source:"@site/docs/rules/common/no-boolean-literal-compare.mdx",sourceDirName:"rules/common",slug:"/rules/common/no-boolean-literal-compare",permalink:"/docs/rules/common/no-boolean-literal-compare",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/no-boolean-literal-compare.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"newline-before-return",permalink:"/docs/rules/common/newline-before-return"},next:{title:"no-empty-block",permalink:"/docs/rules/common/no-empty-block"}},c={},p=[{value:"Example",id:"example",level:3}],u={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{version:"1.5.0",severity:"style",hasFix:!0,mdxType:"RuleDetails"}),(0,o.kt)("p",null,"Warns on comparison to a boolean literal, as in ",(0,o.kt)("inlineCode",{parentName:"p"},"x == true"),". Comparing boolean values to boolean literals is unnecessary, as those expressions will result in booleans too. Just use the boolean values directly or negate them."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"  var b = x == true; // LINT\n  var c = x != true; // LINT\n\n   // LINT\n  if (x == true) {\n    ...\n  }\n\n   // LINT\n  if (x != false) {\n    ...\n  }\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-dart"},"  var b = x;\n  var c = !x;\n\n  if (x) {\n    ...\n  }\n\n  if (!x) {\n    ...\n  }\n")))}m.isMDXComponent=!0}}]);