"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={title:"API",sidebar_position:4},i="API",s={unversionedId:"api",id:"api",title:"API",description:"Measurements",source:"@site/docs/api.md",sourceDirName:".",slug:"/api",permalink:"/reassure/docs/api",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"API",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Methodology",permalink:"/reassure/docs/methodology"}},l={},u=[{value:"Measurements",id:"measurements",level:2},{value:"<code>measurePerformance</code> function",id:"measureperformance-function",level:3},{value:"<code>MeasureOptions</code> type",id:"measureoptions-type",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Default configuration",id:"default-configuration",level:3},{value:"<code>configure</code> function",id:"configure-function",level:3},{value:"<code>resetToDefault</code> function",id:"resettodefault-function",level:3},{value:"Environmental variables",id:"environmental-variables",level:3}],p={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api"},"API"),(0,a.kt)("h2",{id:"measurements"},"Measurements"),(0,a.kt)("h3",{id:"measureperformance-function"},(0,a.kt)("inlineCode",{parentName:"h3"},"measurePerformance")," function"),(0,a.kt)("p",null,"Custom wrapper for the RNTL ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," function responsible for rendering the passed screen inside a ",(0,a.kt)("inlineCode",{parentName:"p"},"React.Profiler")," component,\nmeasuring its performance and writing results to the output file. You can use optional ",(0,a.kt)("inlineCode",{parentName:"p"},"options")," object allows customizing aspects\nof the testing"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"async function measurePerformance(ui: React.ReactElement, options?: MeasureOptions): Promise<MeasureRenderResult> {\n")),(0,a.kt)("h3",{id:"measureoptions-type"},(0,a.kt)("inlineCode",{parentName:"h3"},"MeasureOptions")," type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"interface MeasureOptions {\n  runs?: number;\n  dropWorst?: number;\n  wrapper?: (node: React.ReactElement) => JSX.Element;\n  scenario?: (view?: RenderResult) => Promise<any>;\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"runs")),": number of runs per series for the particular test"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"dropWorst")),": number of worst (highest) runs dropped from a test series"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"wrapper")),": custom JSX wrapper, such as a ",(0,a.kt)("inlineCode",{parentName:"li"},"<Provider />")," component, which the ui needs to be wrapped with"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"scenario")),": a custom async function, which defines user interaction within the ui by utilized RNTL functions")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"default-configuration"},"Default configuration"),(0,a.kt)("p",null,"The default config which will be used by the measuring script. This configuration object can be overridden with the use\nof the ",(0,a.kt)("inlineCode",{parentName:"p"},"configure")," function."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"type Config = {\n  runs?: number;\n  dropWorst?: number;\n  outputFile?: string;\n  verbose?: boolean;\n  testingLibrary?: 'react-native' | 'react' | { render: (component: React.ReactElement<any>) => any, cleanup: () => any }\n};\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const defaultConfig: Config = {\n  runs: 10,\n  dropWorst: 1,\n  outputFile: '.reassure/current.perf',\n  verbose: false,\n  testingLibrary: undefined, // Will try auto-detect first RNTL, then RTL\n};\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"runs")),": number of repeated runs in a series per test (allows for higher accuracy by aggregating more data). Should be handled with care.\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"dropWorst")),": number of worst dropped results from the series per test (used to remove test run outliers)\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"outputFile")),": name of the file the records will be saved to\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"verbose")),": make Reassure log more, e.g. for debugging purposes\n",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"testingLibrary")),": where to look for ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cleanup")," functions, supported values ",(0,a.kt)("inlineCode",{parentName:"p"},"'react-native'"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"'react'")," or object providing custom ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"cleanup")," functions"),(0,a.kt)("h3",{id:"configure-function"},(0,a.kt)("inlineCode",{parentName:"h3"},"configure")," function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function configure(customConfig: Partial<Config>): void;\n")),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"configure")," function to override the default config parameters."),(0,a.kt)("h3",{id:"resettodefault-function"},(0,a.kt)("inlineCode",{parentName:"h3"},"resetToDefault")," function"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"resetToDefault(): void\n")),(0,a.kt)("p",null,"Reset current config to the original ",(0,a.kt)("inlineCode",{parentName:"p"},"defaultConfig")," object"),(0,a.kt)("h3",{id:"environmental-variables"},"Environmental variables"),(0,a.kt)("p",null,"You can use available environmental variables in order to alter your test runner settings."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TEST_RUNNER_PATH"),": an alternative path for your test runner. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"'node_modules/.bin/jest'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TEST_RUNNER_ARGS"),": a set of arguments fed to the runner. Defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"'--runInBand --testMatch \"<rootDir>/**/*.perf-test.[jt]s?(x)\"'"))),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"TEST_RUNNER_PATH=myOwnPath/jest/bin yarn reassure\n")))}c.isMDXComponent=!0}}]);