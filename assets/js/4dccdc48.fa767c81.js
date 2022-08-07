"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[2275],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(t),f=a,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=t[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9729:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(7294),a=t(5321);function i(e){let{version:r,severity:t,hasConfig:i,hasFix:o,isDeprecated:s}=e;return n.createElement("div",{className:"single-rule-info"},n.createElement(a.Z,{version:r,severity:t,hasConfig:i,hasFix:o,isDeprecated:s}))}},5321:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(7294);function a(e){let{hasConfig:r,hasFix:t,isDeprecated:a}=e;return n.createElement("div",{className:"rule-options"},r&&n.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),t&&n.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),a&&n.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function i(e){let{severity:r,version:t,hasConfig:i,hasFix:o,isDeprecated:s}=e;const l=null==r?void 0:r.toLowerCase();return n.createElement("div",{className:"rule-additional-info"},n.createElement("div",null,n.createElement("span",{className:"added-in-label"},"added in:")," ",t),n.createElement("div",{className:"rule-severity "+l},l),n.createElement(a,{hasConfig:i,hasFix:o,isDeprecated:s}))}},1637:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(7462),a=(t(7294),t(3905)),i=t(9729);const o={},s=void 0,l={unversionedId:"rules/flutter/prefer-const-border-radius",id:"rules/flutter/prefer-const-border-radius",title:"prefer-const-border-radius",description:"BorderRadius.circular constructor calls const BorderRadius.all constructor under the hood. This rule allows to replace BorderRadius.circular(value) with const BorderRadius.all(Radius.circular(value)) if radius is a constant value.",source:"@site/docs/rules/flutter/prefer-const-border-radius.mdx",sourceDirName:"rules/flutter",slug:"/rules/flutter/prefer-const-border-radius",permalink:"/docs/rules/flutter/prefer-const-border-radius",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/flutter/prefer-const-border-radius.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"avoid-wrapping-in-padding",permalink:"/docs/rules/flutter/avoid-wrapping-in-padding"},next:{title:"prefer-correct-edge-insets-constructor",permalink:"/docs/rules/flutter/prefer-correct-edge-insets-constructor"}},d={},c=[{value:"Example",id:"example",level:3}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{version:"4.4.0",severity:"performance",hasFix:!0,mdxType:"RuleDetails"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"BorderRadius.circular")," constructor calls const ",(0,a.kt)("inlineCode",{parentName:"p"},"BorderRadius.all")," constructor under the hood. This rule allows to replace ",(0,a.kt)("inlineCode",{parentName:"p"},"BorderRadius.circular(value)")," with const ",(0,a.kt)("inlineCode",{parentName:"p"},"BorderRadius.all(Radius.circular(value))")," if radius is a constant value."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"\nfinal _defaultFinalRadius = BorderRadius.circular(8); // LINT\n\nclass RoundedWidget extends StatelessWidget {\n  final BorderRadius borderRadius;\n  final Widget child;\n\n  const RoundedWidget({\n    Key? key,\n    this.borderRadius = _defaultRadius,\n    required this.child,\n  }) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return ClipRRect(\n      borderRadius: borderRadius,\n      child: child,\n    );\n  }\n}\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"\nconst _defaultRadius = BorderRadius.all(Radius.circular(8));\n\nclass RoundedWidget extends StatelessWidget {\n  final BorderRadius borderRadius;\n  final Widget child;\n\n  const RoundedWidget({\n    Key? key,\n    this.borderRadius = _defaultRadius,\n    required this.child,\n  }) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return ClipRRect(\n      borderRadius: borderRadius,\n      child: child,\n    );\n  }\n}\n")))}p.isMDXComponent=!0}}]);