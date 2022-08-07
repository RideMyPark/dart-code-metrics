"use strict";(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[7753],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(t),u=i,v=p["".concat(l,".").concat(u)]||p[u]||m[u]||s;return t?r.createElement(v,a(a({ref:n},c),{},{components:t})):r.createElement(v,a({ref:n},c))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var d=2;d<s;d++)a[d]=t[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9729:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(7294),i=t(5321);function s(e){let{version:n,severity:t,hasConfig:s,hasFix:a,isDeprecated:o}=e;return r.createElement("div",{className:"single-rule-info"},r.createElement(i.Z,{version:n,severity:t,hasConfig:s,hasFix:a,isDeprecated:o}))}},5321:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(7294);function i(e){let{hasConfig:n,hasFix:t,isDeprecated:i}=e;return r.createElement("div",{className:"rule-options"},n&&r.createElement("span",{title:"Configurable"},"\u2699\ufe0f"),t&&r.createElement("span",{title:"Has auto-fix"},"\ud83d\udee0"),i&&r.createElement("span",{title:"Deprecated"},"\u26a0\ufe0f"))}function s(e){let{severity:n,version:t,hasConfig:s,hasFix:a,isDeprecated:o}=e;const l=null==n?void 0:n.toLowerCase();return r.createElement("div",{className:"rule-additional-info"},r.createElement("div",null,r.createElement("span",{className:"added-in-label"},"added in:")," ",t),r.createElement("div",{className:"rule-severity "+l},l),r.createElement(i,{hasConfig:s,hasFix:a,isDeprecated:o}))}},3181:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),i=(t(7294),t(3905)),s=t(9729);const a={},o=void 0,l={unversionedId:"rules/flutter/always-remove-listener",id:"rules/flutter/always-remove-listener",title:"always-remove-listener",description:"Warns when an event listener is added but never removed.",source:"@site/docs/rules/flutter/always-remove-listener.mdx",sourceDirName:"rules/flutter",slug:"/rules/flutter/always-remove-listener",permalink:"/docs/rules/flutter/always-remove-listener",draft:!1,editUrl:"https://github.com/dart-code-checker/dart-code-metrics/tree/master/website/docs/rules/flutter/always-remove-listener.mdx",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"tag-name",permalink:"/docs/rules/common/tag-name"},next:{title:"avoid-border-all",permalink:"/docs/rules/flutter/avoid-border-all"}},d={},c=[{value:"Example",id:"example",level:3}],m={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{version:"4.0.0",severity:"warning",mdxType:"RuleDetails"}),(0,i.kt)("p",null,"Warns when an event listener is added but never removed."),(0,i.kt)("p",null,"StatefulWidget classes sometimes add event listeners but fail to remove them. This results in memory leaks if the valueListenable lifecycle is significantly longer than the widget."),(0,i.kt)("p",null,"Every listener added manually needs to be removed typically in the dispose method.\nIf listeners are added in ",(0,i.kt)("inlineCode",{parentName:"p"},"didUpdateWidget")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"updateDependencies")," then they also need to be removed from those methods as otherwise widgets end up with multiple listeners."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u274c Bad:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class ShinyWidget {\n  final someListener = Listener();\n  final anotherListener = Listener();\n\n  const ShinyWidget();\n}\n\nclass _ShinyWidgetState extends State {\n  final _someListener = Listener();\n  final _anotherListener = Listener();\n  final _thirdListener = Listener();\n  final _disposedListener = Listener();\n\n  const _ShinyWidgetState();\n\n  @override\n  void initState() {\n    super.initState();\n\n    _someListener.addListener(listener);\n    _anotherListener.addListener(listener); // LINT\n    _thirdListener.addListener(listener); // LINT\n    _disposedListener.addListener(listener);\n\n    widget.someListener.addListener(listener); // LINT\n\n    widget.anotherListener\n      ..addListener(listener)\n      ..addListener(listener)\n      ..addListener(() {}); // LINT\n  }\n\n  @override\n  didUpdateWidget(ShinyWidget oldWidget) {\n    widget.someListener.addListener(listener);\n    oldWidget.someListener.removeListener(listener);\n\n    widget.anotherListener.addListener(listener); // LINT\n\n    _someListener.addListener(listener); // LINT\n\n    _anotherListener.removeListener(listener);\n    _anotherListener.addListener(listener);\n  }\n\n  void dispose() {\n    _someListener.removeListener(listener);\n    _thirdListener.removeListener(wrongListener);\n\n    _disposedListener.dispose();\n\n    widget.anotherListener.removeListener(listener);\n\n    super.dispose();\n  }\n\n  void listener() {\n    // ...\n  }\n\n  void wrongListener() {\n    // ...\n  }\n}\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u2705 Good:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"class ShinyWidget {\n  final someListener = Listener();\n  final anotherListener = Listener();\n\n  const ShinyWidget();\n}\n\nclass _ShinyWidgetState extends State {\n  final _someListener = Listener();\n  final _disposedListener = Listener();\n\n  const _ShinyWidgetState();\n\n  @override\n  void initState() {\n    super.initState();\n\n    _someListener.addListener(listener);\n\n    _disposedListener.addListener(listener);\n\n    widget.anotherListener.addListener(listener);\n  }\n\n  @override\n  didUpdateWidget(ShinyWidget oldWidget) {\n    widget.someListener.addListener(listener);\n    oldWidget.someListener.removeListener(listener);\n\n    widget.anotherListener.removeListener(listener);\n    widget.anotherListener.addListener(listener);\n\n    _someListener.removeListener(listener);\n    _someListener.addListener(listener);\n  }\n\n  void dispose() {\n    _someListener.removeListener(listener);\n\n    _disposedListener.dispose();\n\n    widget.anotherListener.removeListener(listener);\n\n    super.dispose();\n  }\n\n  void listener() {\n    // ...\n  }\n}\n")))}p.isMDXComponent=!0}}]);