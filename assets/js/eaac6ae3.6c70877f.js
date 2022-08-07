"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[8691],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,v=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(v,o(o({ref:t},p),{},{components:n})):r.createElement(v,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(5321);function i(e){let{version:t,severity:n,hasConfig:i,hasFix:o,isDeprecated:s}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(a.Z,{version:t,severity:n,hasConfig:i,hasFix:o,isDeprecated:s}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294);function a(e){let{hasConfig:t,hasFix:n,isDeprecated:a}=e;return r.createElement("div",{className:"rule-options"},t&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function i(e){let{severity:t,version:n,hasConfig:i,hasFix:o,isDeprecated:s}=e;const l=null==t?void 0:t.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",n),r.createElement("div",{className:"rule-severity "+l},l),r.createElement(a,{hasConfig:i,hasFix:o,isDeprecated:s}))}},4660:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(9729);const o={},s=void 0,l={unversionedId:"rules/common/avoid-collection-methods-with-unrelated-types",id:"rules/common/avoid-collection-methods-with-unrelated-types",title:"avoid-collection-methods-with-unrelated-types",description:"Avoid using collection methods with unrelated types, such as accessing a map of integers using a string key.",source:"@site/docs/rules/common/avoid-collection-methods-with-unrelated-types.mdx",sourceDirName:"rules/common",slug:"/rules/common/avoid-collection-methods-with-unrelated-types",permalink:"/docs/rules/common/avoid-collection-methods-with-unrelated-types",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/common/avoid-collection-methods-with-unrelated-types.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-banned-imports",permalink:"/docs/rules/common/avoid-banned-imports"},next:{title:"avoid-duplicate-exports",permalink:"/docs/rules/common/avoid-duplicate-exports"}},c={},p=[{value:"Example",id:"example",level:3}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{version:"4.14.0",severity:"warning",mdxType:"RuleDetails"}),(0,a.kt)("p",null,"Avoid using collection methods with unrelated types, such as accessing a map of integers using a string key."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This lint has been requested for a long time: Follow ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/dart-lang/linter/issues/1307"},"this link")," to see the details."),(0,a.kt)("p",{parentName:"admonition"},"Related: Dart's built-in ",(0,a.kt)("inlineCode",{parentName:"p"},"list_remove_unrelated_type")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"iterable_contains_unrelated_type"),".")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'final map = Map<int, String>();\nmap["str"] = "value"; // LINT\nvar a = map["str"]; // LINT\nmap.containsKey("str"); // LINT\nmap.containsValue(42); // LINT\nmap.remove("str"); // LINT\n\nIterable<int>.empty().contains("str"); // LINT\n\nList<int>().remove("str"); // LINT\n\nfinal set = {10, 20, 30};\nset.contains("str"); // LINT\nset.containsAll(Iterable<String>.empty()); // LINT\nset.difference(<String>{}); // LINT\nprimitiveSet.intersection(<String>{}); // LINT\nset.lookup("str"); // LINT\nprimitiveList.remove("str"); // LINT\nset.removeAll(Iterable<String>.empty()); // LINT\nset.retainAll(Iterable<String>.empty()); // LINT\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},'final map = Map<int, String>();\nmap[42] = "value";\nvar a = map[42];\nmap.containsKey(42);\nmap.containsValue("value");\nmap.remove(42);\n\nIterable<int>.empty().contains(42);\n\nList<int>().remove(42);\n\nfinal set = {10, 20, 30};\nset.contains(42);\nset.containsAll(Iterable<int>.empty());\nset.difference(<int>{});\nprimitiveSet.intersection(<int>{});\nset.lookup(42);\nprimitiveList.remove(42);\nset.removeAll(Iterable<int>.empty());\nset.retainAll(Iterable<int>.empty());\n')))}d.isMDXComponent=!0}}]);