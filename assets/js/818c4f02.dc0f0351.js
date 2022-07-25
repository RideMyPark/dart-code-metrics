"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5058:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Prefer moving to variable",l={unversionedId:"rules/common/prefer-moving-to-variable",id:"rules/common/prefer-moving-to-variable",title:"Prefer moving to variable",description:"Configurable",source:"@site/docs/rules/common/prefer-moving-to-variable.md",sourceDirName:"rules/common",slug:"/rules/common/prefer-moving-to-variable",permalink:"/docs/rules/common/prefer-moving-to-variable",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/prefer-moving-to-variable.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Prefer match file name",permalink:"/docs/rules/common/prefer-match-file-name"},next:{title:"Prefer trailing comma",permalink:"/docs/rules/common/prefer-trailing-comma"}},c={},s=[{value:"Rule id",id:"rule-id",level:2},{value:"Severity",id:"severity",level:2},{value:"Description",id:"description",level:2},{value:"Config example",id:"config-example",level:3},{value:"Example",id:"example",level:3}],p={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"prefer-moving-to-variable"},"Prefer moving to variable"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,a.kt)("h2",{id:"rule-id"},"Rule id"),(0,a.kt)("p",null,"prefer-moving-to-variable"),(0,a.kt)("h2",{id:"severity"},"Severity"),(0,a.kt)("p",null,"Warning"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Warns when a property access or a method invocation start with duplicated chains of other invocations / accesses inside a single function or method block."),(0,a.kt)("p",null,"For instance, you have a function ",(0,a.kt)("inlineCode",{parentName:"p"},"getUser()")," that returns a class instance with two fields: ",(0,a.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"age"),". If you call this function twice inside another function body, like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final name = getUser().name;\nfinal age = getUser().age;\n")),(0,a.kt)("p",null,"the rule will suggest to move ",(0,a.kt)("inlineCode",{parentName:"p"},"getUser()")," call to a single variable."),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"allowed-duplicated-chains")," configuration, if you want to set a threshold after which the rule should trigger on duplicated lines."),(0,a.kt)("h3",{id:"config-example"},"Config example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - prefer-moving-to-variable:\n        allowed-duplicated-chains: 3\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Bad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"return Container(\n  color: Theme.of(context).colorScheme.secondary, // LINT\n  child: Text(\n    'Text with a background color',\n    style: Theme.of(context).textTheme.headline6, // LINT\n  ),\n);\n")),(0,a.kt)("p",null,"Good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"final theme = Theme.of(context);\n\nreturn Container(\n  color: theme.colorScheme.secondary,\n  child: Text(\n    'Text with a background color',\n    style: theme.textTheme.headline6,\n  ),\n);\n")))}m.isMDXComponent=!0}}]);