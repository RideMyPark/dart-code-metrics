"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2531],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,v=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(v,l(l({ref:t},u),{},{components:n})):r.createElement(v,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(5321);function o(e){let{version:t,severity:n,hasConfig:o,hasFix:l,isDeprecated:i}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(a.Z,{version:t,severity:n,hasConfig:o,hasFix:l,isDeprecated:i}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);function a(e){let{hasConfig:t,hasFix:n,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function o(e){let{severity:t,version:n,hasConfig:o,hasFix:l,isDeprecated:i}=e;const s=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:"rule-severity "+s},s),r.createElement(a,{hasConfig:o,hasFix:l,isDeprecated:i}))}},8462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905)),o=n(9729);const l={},i=void 0,s={unversionedId:"rules/common/avoid-global-state",id:"rules/common/avoid-global-state",title:"avoid-global-state",description:"The rule should violate on not final and non-const top-level variables.",source:"@site/docs/rules/common/avoid-global-state.mdx",sourceDirName:"rules/common",slug:"/rules/common/avoid-global-state",permalink:"/docs/rules/common/avoid-global-state",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-global-state.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-dynamic",permalink:"/docs/rules/common/avoid-dynamic"},next:{title:"avoid-ignoring-return-values",permalink:"/docs/rules/common/avoid-ignoring-return-values"}},c={},u=[{value:"Example",id:"example",level:3}],p={toc:u};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(o.Z,{version:"4.10.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"The rule should violate on not final and non-const top-level variables."),(0,a.kt)("p",null,"Having many mutable global variables inside application is a pretty bad practice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"application state becomes distributed between multiple files"),(0,a.kt)("li",{parentName:"ul"},"application state is not protected: it can be modified in almost any place"),(0,a.kt)("li",{parentName:"ul"},"it might be hard to debug such applications")),(0,a.kt)("p",null,"So the common practice is to use state management solutions instead of mutable global variables."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"var answer = 42; // LINT\nvar evenNumbers = [1, 2, 3].where((element) => element.isEven); // LINT\n\nclass Foo {\n  static int? bar; // LINT\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"const answer = 42;\nfinal evenNumbers = [1, 2, 3].where((element) => element.isEven);\n\nclass Foo {\n  static int bar = 42;\n}\n")))}m.isMDXComponent=!0}}]);