"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5229],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),o=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=o(n),g=r,d=p["".concat(m,".").concat(g)]||p[g]||c[g]||s;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var o=2;o<s;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9729:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(5321);function s(e){let{version:t,severity:n,hasConfig:s,hasFix:i,isDeprecated:l}=e;return a.createElement("div",{className:"single-rule-info"},a.createElement(r.Z,{version:t,severity:n,hasConfig:s,hasFix:i,isDeprecated:l}))}},5321:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294);function r(e){let{hasConfig:t,hasFix:n,isDeprecated:r}=e;return a.createElement("div",{className:"rule-options"},t&&a.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),n&&a.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),r&&a.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function s(e){let{severity:t,version:n,hasConfig:s,hasFix:i,isDeprecated:l}=e;const m=null==t?void 0:t.toLowerCase();return a.createElement("div",{className:"rule-additional-info"},a.createElement("div",null,a.createElement("span",{className:"added-in-label"},"added in:")," ",n),a.createElement("div",{className:"rule-severity "+m},m),a.createElement(r,{hasConfig:s,hasFix:i,isDeprecated:l}))}},1196:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var a=n(7462),r=(n(7294),n(3905)),s=n(9729);const i={},l=void 0,m={unversionedId:"rules/intl/provide-correct-intl-args",id:"rules/intl/provide-correct-intl-args",title:"provide-correct-intl-args",description:"Warns when the Intl.message() invocation has incorrect args list.",source:"@site/docs/rules/intl/provide-correct-intl-args.mdx",sourceDirName:"rules/intl",slug:"/rules/intl/provide-correct-intl-args",permalink:"/docs/rules/intl/provide-correct-intl-args",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/intl/provide-correct-intl-args.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"prefer-intl-name",permalink:"/docs/rules/intl/prefer-intl-name"},next:{title:"avoid-preserve-whitespace-false",permalink:"/docs/rules/angular/avoid-preserve-whitespace-false"}},o={},u=[{value:"Example",id:"example",level:3}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{version:"1.9.0",severity:"warning",mdxType:"RuleDetails"}),(0,r.kt)("p",null,"Warns when the ",(0,r.kt)("inlineCode",{parentName:"p"},"Intl.message()")," invocation has incorrect ",(0,r.kt)("inlineCode",{parentName:"p"},"args")," list."),(0,r.kt)("h3",{id:"example"},"Example"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:intl/intl.dart';\n\nclass SomeButtonClassI18n {\n  static const int value = 0;\n  static const String name = 'name';\n\n  static String simpleTitleNotExistArgsIssue(String name) {\n    return Intl.message(\n      'title',\n      name: 'SomeButtonClassI18n_simpleTitleNotExistArgsIssue',\n    );\n  }\n\n  static String simpleTitleArgsMustBeOmittedIssue1() {\n    return Intl.message(\n      'title $name',\n      name: 'SomeButtonClassI18n_simpleTitleArgsMustBeOmittedIssue1',\n      args:  [name]\n    );\n  }\n\n  static String simpleTitleArgsMustBeOmittedIssue2() {\n    return Intl.message(\n      'title',\n      name: 'SomeButtonClassI18n_simpleTitleArgsMustBeOmittedIssue2',\n      args:  [name]\n    );\n  }\n\n  static String simpleArgsItemMustBeOmittedIssue(int value) {\n    return Intl.message(\n      'title $value',\n      name: 'SomeButtonClassI18n_simpleArgsItemMustBeOmittedIssue',\n      args:  [value, name]\n    );\n  }\n\n  static String simpleParameterMustBeOmittedIssue(String name, int value) {\n    return Intl.message(\n      'title $value',\n      name: 'SomeButtonClassI18n_simpleParameterMustBeOmittedIssue',\n      args:  [value, name]\n    );\n  }\n\n  static String simpleMustBeSimpleIdentifierIssue1(int value) {\n    return Intl.message(\n      'title ${value+1}',\n      name: 'SomeButtonClassI18n_simpleMustBeSimpleIdentifierIssue1',\n      args:  [value]\n    );\n  }\n\n  static String simpleMustBeSimpleIdentifierIssue2(int value) {\n    return Intl.message(\n      'title $value',\n      name: 'SomeButtonClassI18n_simpleMustBeSimpleIdentifierIssue2',\n      args:  [value+1]\n    );\n  }\n\n  static String simpleParameterMustBeInArgsIssue(int value, String name) {\n    return Intl.message(\n      'title $value, name: $name',\n      name: 'SomeButtonClassI18n_simpleParameterMustBeInArgsIssue',\n      args:  [value]\n    );\n  }\n\n  static String simpleArgsMustBeInParameterIssue(int value) {\n    return Intl.message(\n      'title $value, name: $name',\n      name: 'SomeButtonClassI18n_simpleArgsMustBeInParameterIssue',\n      args:  [value, name]\n    );\n  }\n\n  static String simpleInterpolationMustBeInArgsIssue(int value, String name) {\n    return Intl.message(\n      'title $value, name: $name',\n      name: 'SomeButtonClassI18n_simpleInterpolationMustBeInArgsIssue',\n      args:  [value]\n    );\n  }\n\n  static String simpleInterpolationMustBeInParameterIssue(int value) {\n    return Intl.message(\n      'title $value, name: $name',\n      name: 'SomeButtonClassI18n_simpleInterpolationMustBeInParameterIssue',\n      args:  [value, name]\n    );\n  }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:intl/intl.dart';\n\nclass SomeButtonClassI18n {\n\n  static String simpleTitle() {\n    return Intl.message(\n      'title',\n      name: 'SomeButtonClassI18n_simpleTitle',\n    );\n  }\n\n  static String titleWithParameter(String name) {\n    return Intl.message(\n      'title $name',\n      name: 'SomeButtonClassI18n_titleWithParameter',\n      args: [name],\n    );\n  }\n\n  static String titleWithManyParameter(String name, int value) {\n    return Intl.message(\n      'title $name, value: $value',\n      name: 'SomeButtonClassI18n_titleWithManyParameter',\n      args: [name, value],\n    );\n  }\n\n  static String titleWithOptionalParameter({String name}) {\n    return Intl.message(\n      'title $name',\n      name: 'SomeButtonClassI18n_titleWithOptionalParameter',\n      args: [name],\n    );\n  }\n\n  static String titleWithManyOptionalParameter({String name, int value}) {\n    return Intl.message(\n      'title $name, value: $value',\n      name: 'SomeButtonClassI18n_titleWithOptionalParameter',\n      args: [name, value],\n    );\n  }\n\n  static String titleWithPositionParameter([String name]) {\n    return Intl.message(\n      'title $name',\n      name: 'SomeButtonClassI18n_titleWithPositionParameter',\n      args: [name],\n    );\n  }\n\n  static String titleWithManyPositionParameter([String name, int value]) {\n    return Intl.message(\n      'title $name, value: $value',\n      name: 'SomeButtonClassI18n_titleWithManyPositionParameter',\n      args: [name, value],\n    );\n  }\n}\n")))}p.isMDXComponent=!0}}]);